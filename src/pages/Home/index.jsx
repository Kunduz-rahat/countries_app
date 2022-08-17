import axios from "axios";
import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { ALL_COUNTRIES } from "../../config";
import CountriesList from "../../components/CountriesList";
import CountryCard from "../../components/CountryCard";
import { Controls } from "../../components/Controls";

 export const Home = () => {
	const [countries, setCountries] = useState([])
	const {push} = useNavigate()
	console.log(countries)
	  useEffect(()=>{
	axios.get(ALL_COUNTRIES).then(
	  ({data}) => setCountries(data))
	  }, [])
  return (
	 <>
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
      return <CountryCard key={country.name} onClick={()=> push(`/country/${country.name}`)} {...countryInfo}/>
    })
  }
</CountriesList>
	 </>
  )
}

