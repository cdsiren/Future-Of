import PostPreview from './post-preview';
import { SanityPost } from '../../utils/types';
import { getImageUrl } from '../../lib/getImageUrl';
import { CleanSanityPost } from '../../utils/types';

type Props = {
  posts: CleanSanityPost[];
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
          key={post.slug.current}
          title={post.title}
          coverImage={getImageUrl(post.mainImage.asset._ref)}
          date={post.publishedAt}
          type={post.categoryName}
          // topic={post.topic}
          slug={post.slug.current}
        />
      ))}
    </div>
  </div>
}

export default Work;