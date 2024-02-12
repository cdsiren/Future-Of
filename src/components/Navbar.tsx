import { useScreenSize } from "../lib/contexts/useScreenSizeContext";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import EmailCapture from "./email-capture";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  className: string;
  date: string;
  home?: boolean;
  midPage?: string;
  page?: string;
}

const Navbar = ({
  className,
  date,
  home,
  page,
  midPage
}: NavbarProps) => {
  const { type, width, height } = useScreenSize();

  return (
    <nav className={`${className} my-2`}>
      <div className={`${!home && 'border-b border-black'} pb-2 flex justify-between items-center`}>
        <div className="flex items-center pl-8">
          <Link href="/">
            <Image src='/sorb.png' height={40} width={40} alt="" />
          </Link>
          <div className="pl-4 text-xs pt-1">
            <p><span className="uppercase">{type}</span>,  {width}px &times; {height}px</p>
            <div className="flex">
              <p>NEW YORK,</p>
              <p className="pl-2">{date}</p>
            </div>
          </div>
        </div>
        {home ? 
          <div className="flex gap-16 pr-8 uppercase">
            <Link href='/editorial' className="hover:bg-black hover:text-white">Editorial</Link>
            {/* <Link href='/community' className="hover:bg-black hover:text-white">Community</Link> */}
            <Link href='/about' className="hover:bg-black hover:text-white">About</Link>
          </div>
          : <div className="flex gap-4 pr-8 uppercase">
            <Link href='/' className="hover:bg-black hover:text-white">Home</Link>
            <p>/</p>
            {midPage && <>
              <Link href={`/${midPage}`} className="hover:bg-black hover:text-white">{midPage}</Link>
              <p>/</p>
            </>}
            <p className="text-[#BE78FC]">{page}</p>
          </div>
        }
      </div>
      {home && <div className="py-2 flex border-y border-black justify-center text-7xl">
        Future Of
      </div>}
    </nav>
  );
};

export default Navbar;