import Link from 'next/link'

type Props = {
  index: number
  title: string
  date: string
  excerpt: string
  author: string
  slug: string
}

const ReadingPreview = ({
  index,
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) => {

  return <>
    <Link href={slug} className="relative">
      <div
        id="project"
        className="grid-cols-5 items-center font-light py-3 z-20 hover:underline cursor-pointer md:grid hidden"
      >
        <p>{index + 1}</p>
        <p>{title}</p>
        <p>{author}</p>
        <p>topic</p>
        <p>{date}</p>
      </div>
    </Link>
    <div className='md:hidden flex justify-center font-light text-sm space-y-2 pb-8'>
      <Link href={slug}>
        <p>N° {index + 1}. {title}</p>
        <div className='grid grid-cols-3'>
          <p>{author}</p>
          <p className='text-center'>{date}</p>
          <p className='text-right'>topic</p>
        </div>
        <div>
          {excerpt}
        </div>
      </Link>
    </div>
  </>
}

export default ReadingPreview;
