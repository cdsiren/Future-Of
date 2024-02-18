import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Accordion from '../accordian';
import { useScreenSize } from '../../lib/contexts/useScreenSizeContext';

type Props = {
  index: number
  length: number
  title: string
  coverImage: string
  date: string
  publication: { name: string, url: string }
  topic?: string
  slug: string
}

const PostPreview = ({
  index,
  length,
  title,
  coverImage,
  date,
  publication,
  topic,
  slug,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { type } = useScreenSize();

  if (type === 'mobile') {
    return <div className='flex justify-center space-y-8 pb-8'>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
        <p className='font-light'>N° {index + 1}. {title}</p>
        <div className='grid grid-cols-3 py-1'>
          <p>{publication.name}</p>
          <p className='text-center'>{date as any}</p>
          <p className='text-right'>{topic}</p>
        </div>
        <div className='flex justify-center pt-4'>
          <Image src={coverImage} alt="img" width={400} height={400} />
        </div>
      </Link>
    </div>
  } else {
    return <>
    <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
      <div id="project" className="grid-cols-6 items-center font-light 3xl:py-6 2xl:py-4 py-3 z-20 hover:opacity-80 cursor-pointer md:grid hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      >
        <p>{index + 1}</p>
        <p className='pr-6 col-span-2'>{title}</p>
        <p>{publication.name}</p>
        <p>{topic}</p>
        <p>{date as any}</p>
      </div>
      {index + 1 !== length && <Accordion className={`absolute mx-auto w-full z-10`} isOpen={isOpen} coverImage={coverImage} />}
    </Link>
  </>
  }
}

export default PostPreview
