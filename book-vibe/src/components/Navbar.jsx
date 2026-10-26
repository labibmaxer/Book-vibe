import React from 'react';
import { Link , NavLink } from 'react-router-dom';
const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"} className={({isActive}) => isActive ? "text-green-500 border border-green-500 bg-white" : ""}>Home</NavLink></li>
        <li><NavLink to={"/books"}className={({isActive}) => isActive ? "text-green-500 border border-green-500 bg-white" : ""}>Listed Books</NavLink></li>
        <li><NavLink to={"/page-to-read"}className={({isActive}) => isActive ? "text-green-500 border border-green-500 bg-white" : ""}>Page to read</NavLink></li>
        </>
    
    return (
       <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    {/* <a className="btn">Button</a> */}
    <button className="btn btn-active btn-success text-white">Sign in</button>
    <button className="btn btn-accent text-white">Sign up</button>
  </div>
</div>
    );
};

export default Navbar;