import { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null); // an object
  const [city, setCity] = useState(""); // a string
  const [loading, setLoading] = useState(true);

  function fetchWeather() {
    setLoading(true);
    axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={8c99ea5adb81765db0a5e24e8cdedc69}&units=metric",
    );
  }
}
