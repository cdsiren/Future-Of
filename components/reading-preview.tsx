import Link from 'next/link'

type Props = {
  index: number
  title: string
  date: string
  excerpt: string
  author: string
  topic: string
  slug: string
}

const ReadingPreview = ({
  index,
  title,
  date,
  excerpt,
  author,
  topic,
  slug,
}: Props) => {

  return <>
    <a className='relative' href={slug} target='_blank'>
      <div
        id="project"
        className="grid-cols-5 items-center font-light py-3 z-20 hover:text-orange-400 cursor-pointer md:grid hidden"
      >
        <p>{index + 1}</p>
        <p>{title}</p>
        <p>{author}</p>
        <p>{topic}</p>
        <p>{date}</p>
      </div>
    </a>
    <div className='md:hidden flex justify-center font-light text-sm space-y-2 pb-8'>
      <div>
        <a className='hover:underline' href={slug} target='_blank'>
          <p>N° {index + 1}. {title}</p>
          <div className='grid grid-cols-3 py-1'>
            <p>{author}</p>
            <p className='text-center'>{date}</p>
            <p className='text-right'>{topic}</p>
          </div>
        </a>
        <div>
          {excerpt}
        </div>
      </div>
    </div>
  </>
}

export default ReadingPreview;
