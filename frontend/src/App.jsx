import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//COMPONENTS
import Layout from "./components/Layout/Layout";


//PAGES
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import NotFound from "./Pages/NotFound/NotFound";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;