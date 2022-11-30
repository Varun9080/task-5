import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from "./GlobalStyle";
import Planet from './pages/Planet';
import Home from './pages/Home';
import Card from './pages/Card';
import Payment from './pages/Payment';
import Prepaid from './pages/Prepaid';
import GoToTop from './components/GoToTop'
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
const App = () => {

 const theme = {
   colors: {
     heading: "rgb(24 24 29)",
     text: "rgb(24 24 29)",
     white: "#fff",
     black: " #212529",
     helper: "#8490ff",
     bg: "rgb(249 249 255)",
     footer_bg: "pink",
     btn: "rgb(98 84 243)",
     border: "rgba(98, 84, 243, 0.5)",
     hr: "#ffffff",
     gradient:
       "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
     shadow:
       "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
     shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
   },
   media: { mobile: "768px", tab: "998px" },
 };


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/card" element={<Card />} />
          <Route path="/prepaid" element={<Prepaid />} />
          <Route path="*" element={< ErrorPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App