import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconSrc: `/img/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let ApiId = "17a639a638a4bfe25417abb69ec4868d&units=metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiId}`;
    if (city.length === 0) {
      return alert("Please enter a city");
    }
    return axios
      .get(url)
      .then(displayWeather)
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("Not a city");
        }
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function weatherDetails() {
    return <WeatherDetails details={weather} />;
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        {weatherDetails()}
      </div>
    );
  } else {
    return form;
  }
}
