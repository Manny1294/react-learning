import { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  //  state for weather, city, loading
  const [weather, setWeather] = useState(null); // an object -null until i fetch
  const [city, setCity] = useState(""); // a string
  const [loading, setLoading] = useState(false);

  function fetchWeather() {
    loading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8c99ea5adb81765db0a5e24e8cdedc69`,
      )
      .then((res) => {
        setWeather(res.data);
        loading(false);
      });
  }
  return (
    <>
      <input
        type="text"
        value={city}
        placeholder="city"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={fetchWeather}
        style={{
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Searchx
      </button>
    </>
  );
}
