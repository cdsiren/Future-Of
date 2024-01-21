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

  return <>
    <Layout preview={preview}>
      <Header className={`3xl:text-3xl 2xl:text-xl md:text-base text-sm fixed w-full bg-white p-8`} type={post.type} title={post.title} />
      <Container>        
        <div className='3xl:mt-28 mt-18 sm:mt-12'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className={`mb-32`}>
              <Meta title={title} description={post.excerpt} url={`https://cdurbin.xyz/posts/${post.slug}`} image={post.ogImage.url} />
              <PostHeader
                className={`3xl:max-w-6xl 3xl:mt-16 mt-12 max-w-3xl`}
                title={title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody className={`3xl:max-w-6xl 3xl:text-3xl 2xl:text-xl text-base max-w-3xl`} content={post.content} />
            </article>
          </>
        )}
        </div>
      </Container>
    </Layout>
    <Footer className={`3xl:text-3xl text-sm`} />
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