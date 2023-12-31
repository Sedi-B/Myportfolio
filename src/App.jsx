import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./assets/About";
import Education from "./assets/Education";
import Experience from "./assets/Experience";
import Contact from "./assets/Contact";
import Home from "./assets/Home";

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen  ">
      <header className="text-stone-900 font-medium text-base space-x-3 top-0 flex justify-between p-3">
        <Link className="font-bold text-white px-4 py-2 rounded-full" to="/">
          SEDI
        </Link>
        <section className="hover:bg-text-gray-500 cursor-pointer py-3 space-x-3 font-bold text-slate-100 top-0 flex justify-between">
          <Link
            className=" bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            to="/About"
          >
            About
          </Link>
          <Link
            className="bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            to="/Eductaion"
          >
            Education
          </Link>
          <Link
            className=" bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            to="/Experience"
          >
            Experience
          </Link>
          <Link
            className="bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            to="/Contact"
          >
            Contact
          </Link>
        </section>
      </header>{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Eductaion" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
