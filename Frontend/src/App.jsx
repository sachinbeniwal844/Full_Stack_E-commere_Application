import React from "react";
import Home from "./Home/Home";
// import Course from './Components/Course'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
