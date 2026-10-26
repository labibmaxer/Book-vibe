import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar'; // Adjust path if your folder structure is different
const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;