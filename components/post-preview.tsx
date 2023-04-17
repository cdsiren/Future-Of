import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  index: number
  title: string
  coverImage: string
  date: string
  slug: string
}

const PostPreview = ({
  index,
  title,
  coverImage,
  date,
  slug,
}: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return <>
    <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
      <div
        id="project"
        className="grid-cols-5 items-center font-light py-3 z-20 hover:underline cursor-pointer md:grid hidden"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <p>{index + 1}</p>
        <p className='pr-6'>{title}</p>
        <p>type</p>
        <p>topic</p>
        <p>{date}</p>
      </div>
      {isMouseOver && (
        <div className="flex justify-center">
          <Image src={coverImage} alt="img" width={600} height={600} />
        </div>
      )}
    </Link>
    <div className='md:hidden flex justify-center font-light text-sm space-y-2 pb-8'>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
        <p>N° {index + 1}. {title}</p>
        <div className='grid grid-cols-3'>
          <p>type</p>
          <p className='text-center'>{date}</p>
          <p className='text-right'>topic</p>
        </div>
        <Image src={coverImage} alt="img" width={600} height={600} />
      </Link>
    </div>
  </>
}

export default PostPreview
