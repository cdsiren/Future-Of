import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from '../accordian';

type Props = {
  index: number
  length: number
  title: string
  coverImage: string
  date: string
  type: string
  topic?: string
  slug: string
}

const PostPreview = ({
  index,
  length,
  title,
  coverImage,
  date,
  type,
  topic,
  slug,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
      <div id="project" className="grid-cols-6 items-center font-light 3xl:py-6 2xl:py-4 py-3 z-20 hover:opacity-80 cursor-pointer md:grid hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      >
        <p>{index + 1}</p>
        <p className='pr-6 col-span-2'>{title}</p>
        <p>{type}</p>
        <p>{topic}</p>
        <p>{date as any}</p>
      </div>
      {index + 1 !== length && <Accordion className={`absolute mx-auto w-full z-10`} isOpen={isOpen} coverImage={coverImage} />}
    </Link>
    <div className='md:hidden flex justify-center font-light text-sm space-y-2 pb-8'>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
        <p>N° {index + 1}. {title}</p>
        <div className='grid grid-cols-3 py-1'>
          <p>{type}</p>
          <p className='text-center'>{date as any}</p>
          <p className='text-right'>{topic}</p>
        </div>
        <div className='flex justify-center'>
          <Image src={coverImage} alt="img" width={400} height={400} />
        </div>
      </Link>
    </div>
  </>
}

export default PostPreview
