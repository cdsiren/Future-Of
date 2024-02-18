import PostTitle from './post-title';
import Image from 'next/image';
import EmailCapture from '../email/email-capture';
import Link from 'next/link';
import { RiExternalLinkLine } from "react-icons/ri";

type Props = {
  title: string
  coverImage: string
  date: string
  className: string
  ogPublication?: { name: string, url: string }
}

const PostHeader = ({ title, coverImage, date, ogPublication, className }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={`${className} mb-8 md:mb-16 mx-auto flex justify-center`}>
        <Image src={coverImage} alt="img" width={500} height={500} />
      </div>
      <div className={`${className} mx-auto`}>
        <div className="mb-6 flex items-center justify-between">
          <p>{date}</p>
          {ogPublication && <p className='flex items-center gap-4'>
            <p className='font-thin'>Originally published in: </p>
            <Link className='flex items-center gap-2 hover:opacity-80 hover:text-[#BE78FC]' target='_blank' href={ogPublication.url}>{ogPublication.name}<RiExternalLinkLine /></Link>
          </p>}
        </div>
        <div className='flex gap-4 font-light justify-between border-y border-black'>
          <p className='py-1'>Latest posts in your inbox?</p>
          <EmailCapture className="flex md:gap-24 gap-12" showSubmit />
        </div>
      </div>
    </>
  )
}

export default PostHeader
