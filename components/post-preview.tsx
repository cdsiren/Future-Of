import { useState } from 'react'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Image from 'next/image'
import type Author from '../interfaces/author'

type Props = {
  index: number
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  index,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" className="relative">
      <div
        id="project"
        className="grid grid-cols-5 items-center font-light py-3 z-20 hover:underline cursor-pointer"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <p>{index}</p>
        <p>{title}</p>
        <p>type</p>
        <p>topic</p>
        <p>
          <DateFormatter dateString={date} />
        </p>
      </div>
      {isMouseOver && (
        <div className="mx-auto">
          <Image src={coverImage} alt="img" width={600} height={600} />
        </div>
      )}
    </Link>
  )
}

export default PostPreview
