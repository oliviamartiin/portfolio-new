const Menu = ({activePage }) => {
    return (
      <div className=" text-orange1 font-body fixed top-0 left-0 w-full flex justify-between items-center p-4 z-10 drop-shadow-sm">
        <a href="#home"className={` text-sm mt-2 px-2 cursor-pointer ${activePage === 'home' ? 'font-bold' : ''}`}>HOME</a>
        <a href="#about" className={`  text-sm mt-2 px-2 cursor-pointer ${activePage === 'about' ? 'font-bold' : ''}`}>ABOUT ME</a>
        <a href="#projects" className={`  text-sm mt-2 px-2 cursor-pointer ${activePage === 'projects' ? 'font-bold' : ''}`}>PROJECTS</a>
      </div>
    );
  };

export default Menu;