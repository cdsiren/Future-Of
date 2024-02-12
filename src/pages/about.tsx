import { useEffect, useState } from 'react';
import BlogPosts from '../components/blog-posts/blog-posts';
import Navbar from '../components/navbar';
import { sanityClient } from '../lib/sanity/sanity';
import { SanityPost, CleanSanityPost } from '../utils/types';
import { getCleanSanity } from '../lib/sanity/sanityPosts';
import { GetServerSideProps } from 'next';
import About from '../components/about';

type Props = {
  authors: any,
  slug: string,
}

export default function AboutPage({ authors, slug }: Props) {
  const author = authors[0];
  
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
      <Navbar className="sticky top-0" date={currentDateTime} page={slug}/>
      <About author={author} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authors = await sanityClient.fetch(`*[_type == "author"]`);

  return {
    props: {
      slug: context.resolvedUrl.slice(1),
      authors
    }
  }
}