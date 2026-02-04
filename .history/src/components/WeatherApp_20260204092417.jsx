import { useState } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
}
