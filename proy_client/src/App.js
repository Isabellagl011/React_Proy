import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import routes from "./config/routes";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component>
                  <h1>Error 404</h1>
                  <p>Not Found</p>
                </route.component>
                <h2>Child component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
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

export default App;
