import './App.css';
import { About } from './views/About';
import {Experience} from './views/Experience';
import {Skills} from './views/Skills';
import {Portfolio} from './views/Portfolio';import { Base } from './components/Base';
import React from 'react';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



export function App() {
  const router = createBrowserRouter(
    [
      { path: '/', 
      element: <Base/>, 
      children : [
        {
          path: "/",
          index: true,
          element: <About/>
        },
        {
          path: "/portfolio",
          index: true,
          element: <Portfolio/>
        },
        {
          path: '/Skills',
          index: true, 
          element: <Skills/>
        },
        {
          path: '/Experience',
          index: true,
          element: <Experience/>
        }
      ]
    },
    ]
  );

  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
