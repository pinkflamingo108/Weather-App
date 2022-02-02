import React, { useState, useEffect } from "react";
import { FetchInfo } from "./Fetch_Info";

export const InputValue = async (e) => {
 e.preventDefault();
 const main_value = await document.getElementById("input-value").value;
 console.log(await main_value);

 const key = `9050a7e9afca4c979d3145941221801&q`;
 const fetchData = await fetch(
  `http://api.weatherapi.com/v1/current.json?key=${key}=${main_value}&days=3&aqi=no&alerts=no`
 );
 const responseJson = await fetchData.json().then((res) => {
  return res;
 });
 console.log(responseJson);
};
