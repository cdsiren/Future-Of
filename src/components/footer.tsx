import Link from 'next/link';
import { RxTwitterLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import EmailCapture from './email-capture';

const Footer = (props:any) => {
  return (
    <footer className={`${props.className} border-t border-black py-2 absolute bottom-0 w-full`}>
      <div className='flex items-center gap-8 justify-center'>
        <p className='uppercase font-light'>Contact</p>
        <Link legacyBehavior href="https://twitter.com/jackieberardo">
          <a target='_blank'>
            <RxTwitterLogo className='hover:bg-black hover:text-white' />
          </a>
        </Link>
        <div className='flex gap-4 items-center'>
          <AiOutlineMail />
          <EmailCapture />
        </div>
      </div>
      <div className='w-full text-center text-xs pt-1'>© 2024 -</div>
    </footer>
  )
}

export default Footer
