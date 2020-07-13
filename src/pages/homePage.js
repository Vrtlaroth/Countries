import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

import CountryCard from "../components/card";

export default function HomePage(props) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    dispatch(actions.fetchCountries());
  }, [dispatch]);

  const countryClickedHandler = (alpha3code) => {
    console.log("alpha3Code");
  };

  return (
    <>
      {countries.length > 0 && (
        <div className="countries-wrapper">
          {countries.map((c) => (
            <CountryCard
              key={c.alpha3code}
              country={c}
              clickHandler={() => countryClickedHandler(c.alpha3code)}
            />
          ))}
        </div>
      )}
    </>
  );
}
