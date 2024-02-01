import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BlogPosts from '../components/Blog Posts/blog-posts';
import Intro from '../components/intro';
import About from '../components/about';
import Readings from '../components/reading-list';
import { getLastRelease } from '../lib/getLastRelease';
import { getLastBlock } from '../lib/getLastBlock';
import Navbar from '../components/Navbar';
import Meta from '../components/meta';
import Layout from '../components/layout';
import { sanityClient } from '../lib/sanity';
import { SanityPost, CleanSanityPost } from '../utils/types';

type Props = {
  allPosts: SanityPost[],
  decentNft: any,
  blockNumber: number,
}

export default function Index({ allPosts, decentNft, blockNumber }: Props) {
  const posts = allPosts;
  const [active, setActive] = useState('Work');
  const [cleanPosts, setCleanPosts] = useState<CleanSanityPost[]>([]);

  async function cleanCategory(id: string) {
    try {
      let res = await sanityClient.fetch(`*[_type == "category" && _id == $categoryId]{title}`, { id });
      console.log("HEREE: ", res)
      return res[0].title;
    } catch (e) {
      console.log("Error fetching category name.");
    }
  };

  async function getCleanPosts() {
    console.log("TEST: ", posts)
    const postsWithCategories = await Promise.all(posts.map(async (post) => {
      const categoryName = await cleanCategory(post.categories[0]._ref);
      return {
        ...post,
        categoryName,
      };
    }));

    setCleanPosts(postsWithCategories);
  }

  const content = {
    'Work': <BlogPosts posts={posts} />,
    'About': <About />,
    'Reading List': <Readings />
  } as const;

  useEffect(() => {
    async function sortPosts() {
      if (allPosts.length) {
        const postsWithFormattedDate = allPosts.map(item => ({
          ...item,
          formattedPublishedAt: new Date(item.publishedAt).toLocaleDateString(),
        }));
        postsWithFormattedDate.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      }
    }
    sortPosts();
    getCleanPosts();
  }, []);
  
  function smoothScroll(container: string) {
    const element = document.getElementById(container);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    <Meta />
      <Layout>
        <div className='relative'>
          <div id='intro'>
            <Intro nft={decentNft} block={blockNumber} />
          </div>
          <div id='navbar' className='absolute bottom-0 w-full'>
            <Navbar className="sticky bottom-0" active={active} setActive={setActive} smoothScroll={smoothScroll} />
          </div>
        </div>
        <div id={active} className={`3xl:text-3xl`}>
          {content[active]}
        </div>
        <Footer className={`3xl:text-3xl text-sm`} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const decentNft = await getLastRelease();
  const blockNumber = await getLastBlock();

  const allPosts = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: { 
      allPosts,
      decentNft,
      blockNumber,
    },
    revalidate: 13
  }
}