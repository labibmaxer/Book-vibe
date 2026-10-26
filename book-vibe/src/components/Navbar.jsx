import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/books"}>Listed Books</Link></li>
        <li><Link to={"/page-to-read"}>Page to read</Link></li>
        </>
    
    return (
       <div className="navbar bg-base-100 shadow-sm">
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
    <button class="btn btn-active btn-success text-white">Sign in</button>
    <button className="btn btn-accent text-white">Sign up</button>
  </div>
</div>
    );
};

export default Navbar;