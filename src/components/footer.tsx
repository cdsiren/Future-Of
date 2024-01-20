import Link from 'next/link';
import { RxTwitterLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import EmailCapture from './email-capture';

const Footer = (props:any) => {
  return (
    <footer className={`${props.className} border-t border-black flex justify-center py-4`}>
      <div className='flex items-center gap-8 py-4'>
        <p className='uppercase font-light'>Contact</p>
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
        <div className='flex gap-4 items-center'>
          <AiOutlineMail />
          <EmailCapture />
        </div>
      </div>
    </footer>
  )
}

export default Footer
