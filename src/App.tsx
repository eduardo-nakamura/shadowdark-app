// import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import CharCreator from './pages/CharCreator';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';
import Footer from './components/Footer'

const navLinks = [
  { to: "/", label: "Home", element: Home },
  { to: "/about", label: "About", element: About },
  { to: "/character-creator", label: "Character Creator", element: CharCreator },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar navLink={navLinks} />
      <Routes>
        {navLinks.map((route, index) => (
          <Route
            key={index} // Using index is acceptable here as the list is static
            path={route.to}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
