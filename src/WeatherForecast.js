import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8bc7430591fcdeaet361d96ab0f37o46";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon />
        </div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19</span>
          <span className="WeatherForecast-temperature-min">10</span>
        </div>
      </div>
    </div>
  );
}
