import { useEffect, useState } from 'react';
import BlogPosts from '../components/blog-posts/blog-posts';
import Navbar from '../components/nav';
import { sanityClient } from '../lib/sanity/sanity';
import { SanityPost, CleanSanityPost } from '../utils/types';
import { getCleanSanity } from '../lib/sanity/sanityPosts';
import { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import { useScreenSize } from '../lib/contexts/useScreenSizeContext';
import PostCard from '../components/post-card';

type Props = {
  allPosts: SanityPost[],
  slug: string,
}

export default function Editorial({ allPosts, slug }: Props) {
  const posts = allPosts;
  const { type } = useScreenSize();
  const [cleanPosts, setCleanPosts] = useState<CleanSanityPost[]>([]);
  
  const [currentDateTime, setCurrentDateTime] = useState('');
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const year = now.getFullYear().toString().substr(-2);
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentDateTime(`${month}.${day}.${year} ${hours}.${minutes}.${seconds}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getCleanSanity({ posts, setCleanPosts });
    async function sortPosts() {
      if (posts.length) {
        posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
      }
    }
    sortPosts();
  }, [posts]);

  return (
    <>
    <Layout>
      <Navbar className="sticky top-0" date={currentDateTime} page={slug}/>
      {type !== 'mobile' && 
        <div className='p-8 flex justify-center items-center'>
          <div className='w-2/3 min-h-[500px] relative'>
            <PostCard post={posts[0]} />
          </div>
        </div>
      }
      
      <div className='mt-12'>
        <BlogPosts posts={cleanPosts} />
      </div>
    </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allPosts = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: {
      slug: context.resolvedUrl.slice(1),
      allPosts,
    }
  }
}