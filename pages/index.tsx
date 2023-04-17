import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BlogPosts from '../components/blog-posts';
import Intro from '../components/intro';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import { getLastRelease } from '../lib/getLastRelease';
import { getLastBlock } from '../lib/getLastBlock';
import Navbar from '../components/Navbar';
import Meta from '../components/meta';

type Props = {
  allPosts: Post[],
  decentNft: any,
  blockNumber: number,
}

export default function Index({ allPosts, decentNft, blockNumber }: Props) {
  const posts = allPosts.slice(1);
  const [active, setActive] = useState('Work');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial dimensions on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function smoothScroll() {
    const element = document.getElementById(active);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    <Head>
      <title>{`Charlie Work`}</title>
    </Head>
    <Meta />
      <div className={`${dimensions.width <= 766 && 'bg-black text-white'} min-h-screen`}>
        <Intro dimensions={dimensions} nft={decentNft} block={blockNumber} />
        <div className='absolute bottom-0 w-full'>
          <Navbar className="sticky bottom-0" dimensions={dimensions} active={active} setActive={setActive} smoothScroll={smoothScroll} />
        </div>
      </div>
      <div id={active}>
        {active === 'Work' && <BlogPosts posts={posts}/>}
      </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  const decentNft = await getLastRelease();
  const blockNumber = await getLastBlock();

  return {
    props: { 
      allPosts,
      decentNft,
      blockNumber
    },
    revalidate: 12
  }
}
