import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white">
      <div id="container" className="w-full bg-gray-200/6 p-2 ">
        <div className="w-3/4  m-auto">
          <div className="flex justify-between items-center px-5 ">
            <div className="text-4xl font-bold">
              <NavLink to="/">
                <h1>WorldAtlas</h1>
              </NavLink>
            </div>

            <nav>
              <ul className="grid grid-cols-4 gap-5 px-5 ">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/country">Country</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
