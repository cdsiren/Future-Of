import Link from 'next/link';
import Image from 'next/image';

const Header = (props: any) => {
  return <div className={`${props.className} flex flex-wrap items-center`}>
    <Image src='/sorb.png' height={25} width={25} alt="" />
    <h3 className="font-light px-0 sm:px-4">
      <Link href="/" className="hover:text-white hover:bg-black">{'>> '}Home</Link> / Posts / <span className='text-[#BE78FC]'>{props.title}</span>.
    </h3>
  </div>
}

export default Header
