import Container from './container';
import Link from 'next/link';
import { RxTwitterLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-black flex justify-center py-2">
      <div className='flex items-center gap-8 py-2'>
        <p className='text-sm uppercase font-light'>Contact</p>
        <Link legacyBehavior href="https://twitter.com/cdurbinxyz">
          <a target='_blank'>
            <RxTwitterLogo className='hover:bg-black hover:text-white' />
          </a>
        </Link>
        <Link legacyBehavior href="https://github.com/cdsiren">
          <a target='_blank'>
            <FiGithub className='hover:bg-black hover:text-white' />
          </a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
