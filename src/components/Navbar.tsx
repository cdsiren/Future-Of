import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import { useScreenSize } from "../lib/contexts/useScreenSizeContext";

const Navbar = (props: any) => {
  const { type } = useScreenSize();

  return (
    <nav className={`3xl:text-3xl grid sm:grid-cols-6 grid-cols-4 items-center p-8 font-light`}>
      <button onClick={() => props.smoothScroll('intro')} className='font-thin flex items-center'>[ C , 
        <p className='px-1'>
          <Image src={type === 'mobile' ? "/logo-white.png" : "/favicon/favi.png"} height={18} width={18} alt="logo" />
        </p> ]
      </button>
      <button onClick={() => {props.setActive('Work'); props.smoothScroll(props.active)}} className={`${type === 'mobile' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit sm:col-span-2`}>
        Work
        {props.active === 'Work' && <BsArrowDown />}
      </button>
      <button onClick={() => {props.setActive('About'); props.smoothScroll(props.active)}} className={`${type === 'mobile' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        About
        {props.active === 'About' && <BsArrowDown />}
      </button>
      <p className="sm:inline-block hidden"></p>
      <button onClick={() => {props.setActive('Reading List'); props.smoothScroll(props.active)}} className={`${type === 'mobile' ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        Reading List
        {props.active === 'Reading List' && <BsArrowDown />}
      </button>
    </nav>
  );
};

export default Navbar;