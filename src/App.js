import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {CountryDetails} from './pages/CountryDetails';




function App() {
  // const [countries, setCountries] =useState([]);
  return (
    <>
      <Header/>
      <Main>
       <Routes>
        <Route exact path='/' element={<Home/>} />
        
        
        <Route path='/country/:name' element={<CountryDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Routes>
      </Main>
    </>
  );
}

export default App;