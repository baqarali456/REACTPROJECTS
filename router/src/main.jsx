import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider,createRoutesFromElements,createBrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Github, { githubapi } from './components/Github.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
   <Route path="" element={<Home/>}/>
   <Route path="About" element={<About/>}/>
   <Route path="Contact" element={<Contact/>}/>
   <Route path="User/:userid" element={<User/>}/>
   <Route path="Github"element={<Github/>} loader={githubapi}/>
  </Route>
));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
