const Navbar = (props: any) => {
  return (
    <nav className={`flex justify-between items-center p-8 font-light`}>
      <p className="flex gap-2 text-sm">[
        <span>C</span> ,
        <span>D</span>
      ]</p>
      <button className={props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} onClick={() => props.setActive('Work')}>Work</button>
      <button className={props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} onClick={() => props.setActive('About')}>About</button>
      <button className={props.dimensions.width <= 766 ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"} onClick={() => props.setActive('Reading List')}>Reading List</button>
    </nav>
  );
};

export default Navbar;