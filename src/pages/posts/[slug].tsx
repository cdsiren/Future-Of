import Container from '../../components/container';
import PostHeader from '../../components/blog-posts/post-header';
import { getBlogBySlug } from '../../lib/sanity/getPosts';
import PostTitle from '../../components/blog-posts/post-title';
import { PortableText } from '@portabletext/react';
import components from '../../lib/sanity/renderComponents';
import { SanityPost } from '../../utils/types';
import Meta from "../../components/meta";
import { GetServerSideProps } from 'next';
import { getImageUrl } from '../../lib/sanity/getImageUrl';
import { formatIsoDate } from '../../lib/formats/formatDate';
import Navbar from '../../components/nav';
import Layout from '../../components/layout';

type Props = {
  post: SanityPost;
  slug: string;
}

export default function Post({ post, slug }: Props) {
  const title = `${post.title}`

  return <>
    <Layout>
    <Navbar className="sticky top-0 bg-white" date={''} midPage='editorial' page={`${slug}`}/>
    <Container>        
      <div className='3xl:mt-28 mt-18 sm:mt-12'>
      {!post ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className={`mb-32`}>
            <Meta title={title} description={post.body} url={`https://hellofutureof.io/posts/${post.slug}`} image={getImageUrl(post.mainImage.asset._ref)} />
            <PostHeader
              className={`3xl:max-w-6xl 3xl:mt-16 mt-12 max-w-3xl`}
              title={title}
              coverImage={getImageUrl(post.mainImage.asset._ref)}
              date={formatIsoDate(String(post.publishedAt))}
              ogPublication={post.publication}
            />
            <div className={`3xl:max-w-6xl 3xl:text-3xl 2xl:text-xl text-base max-w-3xl mx-auto font-light pt-8`}>   
              <PortableText value={post.body as any} components={components as any} />
            </div>
          </article>
        </>
      )}
      </div>
    </Container>
    </Layout>
  </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params;
  const post = await getBlogBySlug(String(slug));
  const url = context.resolvedUrl;
  const last = url.split("/").pop();
  
  return {
    props: {
      slug: last,
      post
    }
  };
};