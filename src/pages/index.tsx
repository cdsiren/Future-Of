import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BlogPosts from '../components/blog-posts';
import Intro from '../components/intro';
import About from '../components/about';
import Readings from '../components/reading-list';
import { getAllPosts } from '../lib/api';
import Post from '../../interfaces/post';
import { getLastRelease } from '../lib/getLastRelease';
import { getLastBlock } from '../lib/getLastBlock';
import Navbar from '../components/Navbar';
import Meta from '../components/meta';
import Layout from '../components/layout';

type Props = {
  allPosts: Post[],
  decentNft: any,
  blockNumber: number,
}

export default function Index({ allPosts, decentNft, blockNumber }: Props) {
  const posts = allPosts;
  const [active, setActive] = useState('Work');

  const content = {
    'Work': <BlogPosts posts={posts} />,
    'About': <About />,
    'Reading List': <Readings />
  }

  useEffect(() => {
    async function sortPosts() {
      if (allPosts.length) {
        allPosts.forEach(item => {
          const [month, day, year] = item.date.split(".");
          item.date = new Date(`${year}-${month}-${day}`).toLocaleDateString();
        });
        allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    }
    sortPosts();
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
  const allPosts = getAllPosts([
    'title',
    'coverImage',
    'date',
    'type',
    'excerpt',
    'topic',
    'slug',
  ])
  const decentNft = await getLastRelease();
  const blockNumber = await getLastBlock();

  return {
    props: { 
      allPosts,
      decentNft,
      blockNumber,
    },
    revalidate: 13
  }
}