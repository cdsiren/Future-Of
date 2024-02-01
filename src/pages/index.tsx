import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BlogPosts from '../components/blog-posts/blog-posts';
import Intro from '../components/intro';
import About from '../components/about';
import Readings from '../components/reading-list';
import { getLastRelease } from '../lib/getLastRelease';
import { getLastBlock } from '../lib/getLastBlock';
import Navbar from '../components/Navbar';
import Meta from '../components/meta';
import Layout from '../components/layout';
import { sanityClient } from '../lib/sanity/sanity';
import { SanityPost, CleanSanityPost } from '../utils/types';
import { getCleanSanity } from '../lib/sanity/sanityPosts';

type Props = {
  allPosts: SanityPost[],
  decentNft: any,
  blockNumber: number,
}

export default function Index({ allPosts, decentNft, blockNumber }: Props) {
  const posts = allPosts;
  const [active, setActive] = useState('Work');
  const [cleanPosts, setCleanPosts] = useState<CleanSanityPost[]>([]);

  const content = {
    'Work': <BlogPosts posts={cleanPosts} />,
    'About': <About />,
    'Reading List': <Readings />
  } as const;

  useEffect(() => {
    getCleanSanity({ posts, setCleanPosts });
    async function sortPosts() {
      if (posts.length) {
        posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      }
    }
    sortPosts();
  }, [posts]);
  
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