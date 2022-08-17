import axios from "axios";
import React, {useState, useEffect} from "react";
import { Controls } from "./components/Controls";
import CountriesList from "./components/CountriesList";
import CountryCard from "./components/CountryCard";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ALL_COUNTRIES } from "./config";



function App() {
  const [countries, setCountries] = useState([])
console.log(countries)
  useEffect(()=>{
axios.get(ALL_COUNTRIES).then(
  ({data}) => setCountries(data))
  }, [])
  return (
    <>
      <Header/>
      <Main>
<Controls/>
<CountriesList>
  {
    countries.map(country =>{
      const countryInfo={
        img:country.flags.png,
        name:country.name,
        info:[
          {
            title: 'Population',
            description: country.population.toLocaleString()
          },
          {
            title: 'Region',
            description: country.region
          },
          {
            title: 'Capital',
            description: country.capital
          },
        ],
      };
      return <CountryCard key={country.name} {...countryInfo}/>
    })
  }
</CountriesList>
      </Main>
    </>
  )
}

export default App