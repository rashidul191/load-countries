import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.com/v2/all`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Countries Load API</h2>
      {/*    {
            countries.map((country) => <Country
            name ={country.name}
            population={country.population}
            
            ></Country>)
        } */}

      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.numericCode}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
