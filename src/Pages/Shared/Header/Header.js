import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/invent.png';


const Header = () => {

    const menuItems = <>
            <li className='font-semibold'><Link to='/'>Home</Link></li>
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
    </>

    return (
        <>
        <div className="navbar h-20 rounded-lg bg-base-100 bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img className='h-12' src={logo} alt="logo" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className='btn btn-outline bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white mr-5 border-0 max-sm:text-xs'>Appointment</button>
  </div>
</div>

<marquee className="bg-slate-200 py-3 rounded-lg mt-2 text-xl font-bold" width="100%" direction="left" height="30%">
This Website is still under development now!
</marquee>
</>
    );
};

export default Header;