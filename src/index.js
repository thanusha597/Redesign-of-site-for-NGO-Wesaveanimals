import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Board from './components/Board';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Contactus from './components/Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter= createBrowserRouter([{
  path:"/",
  element:<App />,
  children:[
    {
      path:"/",
      element:<Body />
    },
    {
    path:"/boardmembers",
    element:<Board />
  },
{
  path:"/contactus",
  element:<Contactus />
}]
}])
root.render(
  <RouterProvider router={appRouter} />
  );
