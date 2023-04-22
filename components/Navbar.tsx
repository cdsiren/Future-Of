import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";

const Navbar = (props: any) => {
  return (
    <nav className={`${props.dimensions.height >= 1050 && 'text-3xl'} grid sm:grid-cols-6 grid-cols-4 items-center p-8 font-light`}>
      <button onClick={() => props.smoothScroll('intro')} className='font-thin flex items-center'>[ C , <p className='px-1'><Image src={props.dimensions.width <= 785 ? "/logo-white.png" : "/favicon/favi.png"} height={18} width={18} alt="logo" /></p> ]</button>
      <button onClick={() => {props.setActive('Work'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 785 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit sm:col-span-2`}>
        Work
        {props.active === 'Work' && <BsArrowDown />}
      </button>
      <button onClick={() => {props.setActive('About'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 785 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        About
        {props.active === 'About' && <BsArrowDown />}
      </button>
      <p className="sm:inline-block hidden"></p>
      <button onClick={() => {props.setActive('Reading List'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 785 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        Reading List
        {props.active === 'Reading List' && <BsArrowDown />}
      </button>
    </nav>
  );
};

export default Navbar;