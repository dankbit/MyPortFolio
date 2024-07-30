<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";

import { HomePage } from "../pages/HomePages";


const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
      
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";

import { HomePage } from "../pages/HomePages";


const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
      
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
>>>>>>> f057f81 (Updated Site)
