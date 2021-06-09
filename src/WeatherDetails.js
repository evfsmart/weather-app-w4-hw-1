import React from "react";
import "./WeatherSearch.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <ul>
        <li>
          <strong>
            Weather details for {props.details.name}, {props.details.country}
          </strong>
        </li>
        <li>
          <strong>Temperature:</strong> {props.details.temperature}ºC
        </li>
        <li>
          <strong>Description:</strong>{" "}
          <span className="Description">{props.details.description}</span>
        </li>
        <li>
          <strong>Humidity:</strong> {props.details.humidity}%
        </li>
        <li>
          <strong>Wind:</strong> {props.details.wind} m/s
        </li>
        <li>
          <img
            src={props.details.iconSrc}
            alt="weather"
            className="WeatherIcon"
            height="100px"
          />
        </li>
      </ul>
    </div>
  );
}
