import React from "react";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full flex items-center z-10 shadow-lg">
      <div className="container ">
        <div className="px-4 flex justify-between items-center ">
          <a href="#home" className="font-bold text-lg text-primary block py-6">
            Blog Bagas
          </a>
          <nav id="nav-menu" className=" flex ">
            <ul className="lg:flex">
              <li className="group">
                <a
                  href="#home"
                  className="text-base text-dark py-2  flex hover:text-primary"
                >
                  Keluar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
