import { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  //  state for weather, city, loading
  const [weather, setWeather] = useState(null); // an object -null until i fetch
  const [city, setCity] = useState(""); // a string
  const [loading, setLoading] = useState(false);

  function fetchWeather() {
    const url = `${import.meta.env.VITE_WEATHER_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
    console.log("Fetching URL:", url);
    setLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_WEATHER_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      )
      .then((res) => {
        console.log("API Response:", res.data);
        setWeather(res.data);
        setLoading(false);
      });
  }

  return (
    <>
      <input
        type="text"
        value={city}
        placeholder="city"
        onChange={(event) => {
          console.log("Typing:", event.target.value);
          setCity(event.target.value);
        }}
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
        Search
      </button>
      {/* If loading is true show Loading.. If loading is false show nothing */}
      {loading && <p>Loading...</p>}
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temp: {weather.main.temp}°C</p>

          {/* weather.weather is an ARRAY (can have multiple conditions)[0] gets the first item in that array .description accesses the description property */}
          <p>Description: {weather.weather[0].id}</p>
        </div>
      )}
    </>
  );
}
