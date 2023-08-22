import { useState } from 'react';

import FetchData from './FetchData';
import FetchAfrica from './FetchAfrica';

import imagelogo from './images/apilogo-01.png';

import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (

    <div className='App'>
      <nav className='navbar'>
        <div className='navbaritems'>
          <img src={imagelogo} className='world' />
          <ul className='navitems'>
            <li>
              <Link to='/' className='nav-item-one' >World</Link>
            </li>
            <li>
              <button className='button_afr'><Link to='/africa' className='nav-item-two'>Africa</Link></button>
            </li>
          </ul>
        </div>
      </nav>
      <div className='infobox'>
        <p className='info'>The List Of Countries Of The World</p>
      </div>

      <Routes>
        <Route path='/' element={<FetchData />} />
        <Route path='/africa' element={<FetchAfrica />} />
      </Routes>

    </div>
  );
}

export default App;
