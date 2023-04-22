import Link from 'next/link';
import Image from 'next/image';

const Header = (props: any) => {
  return <div className={`${props.className} flex flex-wrap items-center`}>
    <Link href="/" className='font-thin flex items-center'>[ C , <p className='px-1'><Image src="/favicon/favi.png" height={18} width={18} alt="logo" /></p> ]</Link>
    <h2 className="font-light px-0 sm:px-4">
      <Link href="/" className="hover:text-white hover:bg-black"><span className='font-thin'>{'</a>'}</span>Home<span className='font-thin'>{'</a>'}</span></Link> / Posts / {props.type} / <span className='bg-black text-white'>{props.title}</span>.
    </h2>
  </div>
}

export default Header
