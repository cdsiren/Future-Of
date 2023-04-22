import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BlogPosts from '../components/blog-posts';
import Intro from '../components/intro';
import About from '../components/about';
import Readings from '../components/reading-list';
import { getAllPosts } from '../lib/api';
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
  const posts = allPosts;
  const [active, setActive] = useState('Work');
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

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
      <div className={`${dimensions.width <= 785 && 'bg-black text-white'}`}>
        <div id='intro'>
          <Intro dimensions={dimensions} nft={decentNft} block={blockNumber} />
        </div>
        <div id='navbar' className='absolute bottom-0 w-full'>
          <Navbar className="sticky bottom-0" dimensions={dimensions} active={active} setActive={setActive} smoothScroll={smoothScroll} />
        </div>
      </div>
      <div id={active} className={`${dimensions.width <= 785 ? 'bg-black text-white' : 'bg-white text-black'} ${dimensions.height >= 1050 && 'text-4xl'}`}>
        {active === 'Work' && <BlogPosts posts={posts} />}
        {active === 'About' && <About width={dimensions.width} />}
        {active === 'Reading List' && <Readings />}
      </div>
      <Footer className={`${dimensions.width <= 785 ? 'bg-black text-white' : 'bg-white text-black'} ${dimensions.height >= 1050 && 'text-3xl'} text-sm`} />
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