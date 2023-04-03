import Container from './container';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { RxTwitterLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-black">
      <Container>
        <div className='flex items-center gap-8 py-2'>
          <p className='text-sm uppercase'>Contact</p>
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
          {/* ON CLICK EXPAND TO TYPE SOMETHING INPUT FIELD TO GATHER EMAIL ADDRESS */}
          <AiOutlineMail />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
