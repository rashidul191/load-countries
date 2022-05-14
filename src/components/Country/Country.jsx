import React from "react";
import "./Country.css";

const Country = (props) => {
// console.log(props.country);
const {name, population, area, flags} = props.country
  return (
    <div className="country-test-style">
      <img src={flags.png} alt="" />
     <h2>Name: {name}</h2>
     <p>Population: {population}</p>
     <p>Area: {area}</p>
    </div>
  );
};

export default Country;
