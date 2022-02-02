import React, { useState, useEffect } from "react";

import "./Data.css";

export const FetchInfo = (props) => {
 const [weatherInfo, setweatherInfo] = useState([]);

 const data = async () => {
  try {
   const api_key = `9050a7e9afca4c979d3145941221801&q`;
   const fetch_data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${api_key}=${props.name}&days=3&aqi=no&alerts=no`
   );
   const data_json = await fetch_data.json();
   console.log(data_json);
   setweatherInfo(data_json);
  } catch (err) {
   console.log(err);
  }
 };

 useEffect(() => {
  data();
 }, []);
 return (
  <div id="wrappper">
   <div className="info-container">
    <div className="info-card">
     <p>Country: {weatherInfo?.location?.country}</p>
     <p>City: {weatherInfo?.location?.name}</p>
     <div className="temperature-container">
      <p>{weatherInfo?.current?.temp_c} Celsius</p>
      <p>{weatherInfo?.current?.temp_f} Fahrenheit</p>
     </div>
     <div className="current-condition">
      <p>Current Condition: {weatherInfo?.current?.condition?.text}</p>
      <div className="condition-info">
       <img
        alt={weatherInfo?.location?.name}
        className="weather-img"
        src={weatherInfo?.current?.condition?.icon}
       />
      </div>
      <div className="wind-data-container"></div>
     </div>
    </div>
   </div>
  </div>
 );
};
