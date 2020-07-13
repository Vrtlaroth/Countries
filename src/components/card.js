import React from "react";

export default function Card(props) {
  const { clickHandler, country } = props;
  const { name, population, region, capital, flag } = country;

  return (
    <div className="country-card" onClick={clickHandler}>
      <img src={flag} alt={`${name} flag`}></img>
      <div className="country-card-body">
        <div className="country-card-body"> {name} </div>
      </div>
    </div>
  );
}
