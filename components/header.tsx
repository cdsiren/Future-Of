import Link from 'next/link'

const Header = (props: any) => {
  return (
    <h2 className="font-light mb-12 mt-8">{'>>'}
      <Link href="/" className="hover:text-white hover:bg-black">Home</Link> / Posts / {props.type} / <span className='text-orange-400'>{props.title}</span>.
    </h2>
  )
}

export default Header
