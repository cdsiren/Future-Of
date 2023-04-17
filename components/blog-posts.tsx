import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return <div className='p-8 w-full min-h-[83vh]'>
    <div className="grid grid-cols-5 font-light pb-4">
      <p>N°</p>
      <p>Project</p>
      <p>Type</p>
      <p>Topic</p>
      <p>Date</p>
    </div>
    <div>
      {posts.map((post, i) => (
        <PostPreview
          index={i}
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  </div>
}

export default MoreStories
