import React, { useEffect, useState } from "react";

import "./Weather.css";
const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const today = new Date();

  const showTime = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

  const getData = async () => {
    const data = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=b9f9ec7c8d9049b99ec52929231404&q=jaunpur&aqi=no"
    );
    const result = await data.json();

    setWeatherData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="weather">
      <div className="weather_header">
        <h1>{date}</h1>
        <h1>{showTime} </h1>
      </div>
      <div className="weather_info">
        <div className="condition">
          <img src={weatherData?.current?.condition?.icon} alt="" />
          <p>{weatherData?.current?.condition?.text}</p>
        </div>
        <div className="temp">
          <h1>{weatherData?.current?.temp_c} C</h1>
          <div className="temp_detail">
            <span>
              <img src="/images/Vector.png" alt="" />
            </span>
            <div>
              <p>{weatherData?.current?.pressure_mb} mbar</p>
              <p>pressure</p>
            </div>
          </div>
        </div>
        <div className="wind">
          <div className="air">
            <img src="/images/air.png" alt="" />
            <div>
              <p>{weatherData?.current?.wind_kph} km/h</p>
              <p>wind</p>
            </div>
          </div>
          <div className="humidity">
            <img src="/images/humidity1.png" alt="" />
            <div>
              <p>{weatherData?.current?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
