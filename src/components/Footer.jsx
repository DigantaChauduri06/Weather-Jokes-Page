import React, { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import useFetch from "../Hooks/useFetch";
import { latitude as lat, longitude as lon, error } from "./weatherData";

import "./Footer.css";

const APIkey = "eb6757b5272d98682b87a021a6ca49a3";

function Footer() {
  const [url, setUrl] = useState(null);
  const [data, error, pending] = useFetch(url);
  const [showJokes, setShowJokes] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [timeOut, setTimeOut] = useState(null);
  const JokesHandeler = () => {
    setShowWeather(false);
    console.log("hello from jokes");
    setUrl("https://api.chucknorris.io/jokes/random");
    setShowJokes(true);
  };
  useEffect(() => {}, []);
  const WeatherHandeler = () => {
    setTimeOut(true);
    setShowJokes(false);
    setTimeout(() => {
      console.log("hello from weather");
      setUrl(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
      );
      setShowWeather(true);
      console.log(data);
      setTimeOut(false);
    }, 8000);
  };
  return (
    <footer>
      <div className="main-footer">
        <Button
          tag="joke-btn footer-btn"
          logo="Jokes"
          handelerFunc={JokesHandeler}
        />
        <Button
          tag="weather-btn footer-btn"
          logo="Weathers"
          handelerFunc={WeatherHandeler}
        />
      </div>
      <div className="text-joke">
        {showJokes &&
          (!pending ? data && <p>{data.value}</p> : <h2>Hang On...</h2>)}
      </div>
      <div className="text-weather">
        {!timeOut ? (
          showWeather &&
          (!pending ? (
            data && (
              <p>
                Temp: - {data?.main?.temp}{" "}
                <strong>{data?.weather[0]?.description}</strong>
              </p>
            )
          ) : (
            <h2>wait a little bit...</h2>
          ))
        ) : (
          <h2>Hang on for a little...</h2>
        )}
      </div>
    </footer>
  );
}

export default Footer;
/*
eb6757b5272d98682b87a021a6ca49a3

*/
