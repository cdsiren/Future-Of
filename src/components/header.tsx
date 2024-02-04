import Link from 'next/link';

const Header = (props: any) => {
  return <div className={`${props.className} flex flex-wrap items-center`}>
    <Link href="/" className='font-thin flex items-center'>[ J , B ]</Link>
    <h2 className="font-light px-0 sm:px-4">
      <Link href="/" className="hover:text-white hover:bg-black">{'>> '}Home</Link> / Posts / <span className='bg-black text-white'>{props.title}</span>.
    </h2>
  </div>
}

export default Header
