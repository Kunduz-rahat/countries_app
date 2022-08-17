import React from 'react';
import {Routes, Route} from 'react-router-dom';


import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {Home} from './pages/Home';
import {NotFound} from './pages/NotFound';
import {CountryDetails} from './pages/CountryDetails';




function App() {

  return (
    <>
      <Header/>
      <Main>
<Routes>
  <Route path='/'>
    <Home/>
  </Route>
  <Route path='/country/:name' component={CountryDetails}/>
  <Route component={NotFound}/>
</Routes>
      </Main>
    </>
  )
}

export default App