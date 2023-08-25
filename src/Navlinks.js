import React from "react";
import imagelogo from './images/apilogo-01.png';
import { Link, Outlet } from "react-router-dom";


const Navlinks = () => {
  return (
    <div className="App">
        <nav className='navbar'>
          <div className='navbaritems'>
            <img src={imagelogo} className='world' />
            <ul className='navitems'>
              <li>
                <Link to='/' className='nav-item-one' >World</Link>
              </li>
              <li>
                <button className='button_afr'><Link to='/FetchAfrica' className='nav-item-two'>Africa</Link></button>
              </li>
              <li>
                <button className='button_afr'><Link to='/Currency' className='nav-item-two'>Currency</Link></button>
              </li>
              <li>
                <button className='button_afr'><Link to='/Language' className='nav-item-two'>Language</Link></button>
              </li>
              <li>
                <button className='button_afr'><Link to='/Capital' className='nav-item-two'>Capital</Link></button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='infobox'>
              <p className='info'>The List Of Countries Of The World</p>
        </div>
      <Outlet />
    </div>
  )
}


export default Navlinks;

