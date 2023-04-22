import PostTitle from './post-title';
import Image from 'next/image';
import EmailCapture from './email-capture';

type Props = {
  title: string
  coverImage: string
  date: string
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 max-w-3xl mx-auto flex justify-center">
        <Image src={coverImage} alt="img" width={500} height={500} />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-lg">{date}</div>
        <div className='flex gap-4 font-light justify-between border-y border-black'>
          <p className='py-1'>Latest posts in your inbox?</p>
          <EmailCapture className="flex md:gap-24 gap-12" showSubmit />
        </div>
      </div>
    </>
  )
}

export default PostHeader
