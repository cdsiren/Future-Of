import { BsArrowDown } from "react-icons/bs";

const Navbar = (props: any) => {
  return (
    <nav className={`grid sm:grid-cols-5 grid-cols-4 items-center p-8 font-light`}>
      <button onClick={() => props.smoothScroll('intro')} className="flex gap-2 text-sm">[
        <span>C</span> ,
        <span>D</span>
      ]</button>
      <p className="sm:inline-block hidden"></p>
      <button onClick={() => {props.setActive('Work'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        Work
        {props.active === 'Work' && <BsArrowDown />}
      </button>
      <button onClick={() => {props.setActive('About'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        About
        {props.active === 'About' && <BsArrowDown />}
      </button>
      <button onClick={() => {props.setActive('Reading List'); props.smoothScroll(props.active)}} className={`${props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} flex items-center gap-2 w-fit`}>
        Reading List
        {props.active === 'Reading List' && <BsArrowDown />}
      </button>
    </nav>
  );
};

export default Navbar;