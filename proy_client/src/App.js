import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import miroutes from "./config/routes";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {miroutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
/*<BrowserRouter>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/contact'>Contact</Link>
      <br />
      <Link to='/user'>Users</Link>
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>*/

/**Creación de componentes */
/*function Home() {
  return <h2> Component Home works!</h2>;
}

function Contact() {
  return <h2> Component contact works!</h2>;
}

function Users() {
  return <h2> Component user works!</h2>;
}

function NotFound() {
  return <h2> Component not found!</h2>;
}*/
