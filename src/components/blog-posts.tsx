import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Work = ({ posts }: Props) => {
  return <div className={`p-8 w-full min-h-[83vh]`}>
    <div className="md:grid hidden grid-cols-6 font-light pb-4 font-[500]">
      <p>N°</p>
      <p className='col-span-2'>Project</p>
      <p>Type</p>
      <p>Topic</p>
      <p>Date</p>
    </div>
    <div>
      {posts.map((post, i) => (
        <PostPreview
          index={i}
          length={posts.length}
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          type={post.type}
          topic={post.topic}
          slug={post.slug}
        />
      ))}
    </div>
  </div>
}

export default Work;