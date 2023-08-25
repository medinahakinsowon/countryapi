import { useState } from 'react';

import FetchData from './FetchData';
import FetchAfrica from './FetchAfrica';
import Currency from './Currency';
import Capital from './Capital';
import Language from './Language';
import Navlinks from './Navlinks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navlinks/>,
    children:[
      {
        index: true,
        element: <FetchData/>
      },
      {
        path: "/FetchAfrica",
        element: <FetchAfrica/>
      },
      {
        path: "/Currency",
        element: <Currency/>
      },
      {
        path: "/Capital",
        element: <Capital/>
      },
      {
        path: "/Language",
        element: <Language/>
      },
      {
        path: "#",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
])

function App() {

  return (

    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
