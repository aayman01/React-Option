import { useState } from "react";
import Links from "../Links/Links";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
      { id: 1, name: "Home", path: "/" },
      { id: 2, name: "About", path: "/about" },
      { id: 3, name: "Services", path: "/services" },
      { id: 4, name: "Contact", path: "/contact" },
      { id: 5, name: "404 Not Found", path: "*" },
    ];

    return (
      <nav className="text-black bg-yellow-200 p-6">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose className="text-2xl" n />
          ) : (
            <HiMenuAlt1 className="text-2xl" />
          )}
        </div>
        <ul
          className={`md:flex absolute duration-1000 md:static 
        ${open ? "top-16" : "-top-60"}        
        bg-yellow-200 md:bg-none px-6 py-3`}
        >
          {routes.map((route) => (
            <Links key={routes.id} route={route}></Links>
          ))}
        </ul>
      </nav>
    );
};

export default NavBar;