import { useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null); // an object
  const [city, setCity] = useState(""); // a string
  const [loading, setLoading] = useState(true);

  function fetchWeather() {
    setLoading(true);
  }
}
