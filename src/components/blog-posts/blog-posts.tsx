import PostPreview from './post-preview';
import { CleanSanityPost } from '../../utils/types';

type Props = {
  posts: CleanSanityPost[];
}
const Work = ({ posts }: Props) => {

  return <div className={`w-full min-h-[83vh]`}>
    <div className="py-2 border-b border-black">
      <div className='md:grid hidden grid-cols-6 text-xl px-8'>
        <p>N°</p>
        <p className='col-span-2'>Project</p>
        <p>Type</p>
        <p>Topic</p>
        <p>Date</p>
      </div>
    </div>
    <div className='px-8 py-4'>
      {posts.map((post, i) => (
        <PostPreview
          index={i}
          length={posts.length}
          key={post.slug.current}
          title={post.title}
          coverImage={post.image}
          date={post.date}
          type={post.categoryName}
          topic={post.topic}
          slug={post.slug.current}
        />
      ))}
    </div>
  </div>
}

export default Work;