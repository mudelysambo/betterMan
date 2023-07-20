import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Courses.css";

import HtmlPage from "./Pages/HtmlPage";
import CSSPage from "./Pages/CssPage";
import JavascriptPage from "./Pages/JavascriptPage";
import NodePage from "./Pages/NodejsPage";
import DatabasePage from "./Pages/DatabasePage";


function Courses() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HtmlPage />}/>
        <Route path="/css" element ={<CSSPage/>} />
        <Route path="/javascript"  element ={<JavascriptPage/>}  />
        <Route path="/nodejs"  element ={<NodePage/>} />
        <Route path="/database"  element ={<DatabasePage/>} />
        {/* <Route path="JS" element={<Contact />} /> */}
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Courses;