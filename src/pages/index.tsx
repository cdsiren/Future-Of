import { useEffect, useState } from 'react';
import Navbar from '../components/nav';
import Layout from '../components/layout';
import { GetServerSideProps } from 'next';
import { sanityClient } from '../lib/sanity/sanity';
import { SanityPost } from '../utils/types';
import PostCard from '../components/post-card';

type Props = {
  recentPosts: SanityPost[];
}

export default function Index({ recentPosts }: Props) {
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

  return (
    <>
    <Layout>
      <Navbar className="sticky top-0" date={currentDateTime} home />

    </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const recentPosts = await sanityClient.fetch(
    // Fetch 5 most recent posts
    `*[_type == "post"] | order(_createdAt desc)[0...5]`
  );

  return {
    props: {
      recentPosts,
    }
  }
}