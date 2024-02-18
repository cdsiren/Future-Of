import { IoMdArrowUp } from "react-icons/io";
import Link from "next/link";
import { useScreenSize } from "../lib/contexts/useScreenSizeContext";

const Footer = (props:any) => {
  const { type } = useScreenSize();

  return (
    <footer className={`${props.className} border-t ${type === 'mobile' ? 'border-white bg-black text-white' : 'border-black bg-white text-black'} p-8 w-full`}>
      <div className='flex items-center justify-between font-thin'>
        <div>
          <p className="text-xl">Testing the future of ___________.</p>
          <p className='pt-1'>© 2024 -</p>
        </div>
        {props.links && <div className="flex gap-4">
          {props.links.map((link, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link target="_blank" href={link.url}>{link.name}</Link>
              <IoMdArrowUp className='text-xl rotate-[45deg]' />
            </div>
          ))}
        </div>}
      </div>
    </footer>
  )
}

export default Footer;