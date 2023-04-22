import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import Footer from '../../components/footer';
import Meta from "../../components/meta";
import { useState, useEffect } from 'react';

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  const title = `${post.title}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

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


  return <>
    <Layout preview={preview}>
      <Header className={`${dimensions.height >= 1050 && "text-3xl"} fixed w-full bg-white p-8`} type={post.type} title={post.title} />
      <Container>        
        <div className='mt-18 sm:mt-12'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className={`mb-32`}>
              <Meta title={title} description={post.excerpt} url={`https://cdurbin.xyz/posts/${post.slug}`} image={post.ogImage.url} />
              <PostHeader
                className={`${dimensions.height >= 1050 ? "max-w-6xl mt-12" : "max-w-3xl"}`}
                title={title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody className={`${dimensions.height >= 1050 ? "max-w-6xl text-3xl" : "max-w-3xl"}`} content={post.content} />
            </article>
          </>
        )}
        </div>
      </Container>
    </Layout>
    <Footer className={`${dimensions.height >= 1050 && 'text-3xl'} text-sm`} />
  </>
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'coverImage',
    'date',
    'type',
    'topic',
    'excerpt',
    'slug',
    'ogImage',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}