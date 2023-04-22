import Link from 'next/link';
import { RxTwitterLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import EmailCapture from './email-capture';

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
        <div className='flex gap-2 items-center'>
          <AiOutlineMail />
          <EmailCapture className="text-xs" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
