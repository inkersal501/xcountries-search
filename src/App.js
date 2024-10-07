 
import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './Countries';
import axios from "axios";

function App() {

  const [countries, setCountries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
        try {
        const data = await axios.get(
            "https://restcountries.com/v3.1/all"
        ); 
        setCountries(data.data);  
        setCountriesData(data.data);  
        } catch (error) {
          console.error(`Error fetching data: ${error}`);
        }
    };
    setTimeout(() => {
      fetchCountries();  
    }, 300);    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(()=>{
    const filter = countries.filter((e)=>{
      return e.name.common.toLowerCase().includes(search.toLowerCase());
    });
    setCountriesData(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search]);

  let i=0;

  return (
    <div className="App">
      <header>
        <div>
          <input className='searchInput' type='text' id="search" onInput={(e)=>setSearch(e.target.value)} value={search} placeholder='Search for contries'/>
        </div>
      </header>
      <div className='countriesList'>
        {
        countriesData.map(country=>(
            <Countries country={country} key={i++}/>   
        ))
        }
      </div>
    </div>
  );
}

export default App;
