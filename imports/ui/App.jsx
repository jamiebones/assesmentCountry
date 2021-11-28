import React from "react";
import { Countries } from "../api/countries/countries";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

export const App = () => {
  const countries = useTracker(() => {
    //write your subscription code here
    
    //write your query here
    //make sure the query returns an array of countries called countries and 
    //const countries = 
  });

 
  return (
    <div>
      <h1>Country List!</h1>
      { countries.map(country => <p key={country._id}>{country.name}</p>) }
    </div>
  );
};
