import { useState, useEffect } from "react";
import { Context } from "./context/Store";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { getFavoriteCities, getTheme } from "./functions/getLocalStorage";
import Loading from "./components/Loading";
import {
  weatherDataFetch,
  currentTime,
  sunriseSunset,
} from "./functions/getWeatherData";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [unitChecked, setUnitChecked] = useState(false)
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [units, setUnits] = useState("imperial")
  const [weatherData, setWeatherData] = useState({
    city: "",
    state: "",
    time: "",
    sunrise: "",
    sunset: "",
    icon: "",
    description: "",
    wind: "",
    humidity: "",
    temp: "",
  });

  useEffect(() => {
    getFavoriteCities(setFavorites);
    getTheme(setChecked, setComponentLoaded, setUnitChecked, setUnits);
  }, []);

  const handleData = (city, state) => {
    setLoading(true);
    setWeatherLoaded(false);
    weatherDataFetch(city, state)
      .then((data) => {
        setWeatherData({
          ...weatherData,
          city: city,
          state: state,
          time: currentTime(data.timezone),
          wind: data.wind.speed,
          temp: data.main.temp,
          humidity: data.main.humidity,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          sunrise: sunriseSunset(data.timezone, data.sys.sunrise),
          sunset: sunriseSunset(data.timezone, data.sys.sunset),
        });
      })
      .then(() => {
        setWeatherLoaded(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const contextValues = {
    checked,
    setChecked,
    favorites,
    setFavorites,
    weatherData,
    setWeatherData,
    setWeatherLoaded,
    setLoading,
    handleData,
    units,
    setUnits,
    unitChecked,
    setUnitChecked
  };

  if (!componentLoaded) return null;

  return (
    <Context.Provider value={contextValues}>
      <div className="font-roboto">
        <div className="md:flex md:items-start">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-black mb-3 md:mb-6 dark:text-[#22daff]">
              React Weather Browser
            </h1>
            <Search />
            {loading ? <Loading /> : null}
            {weatherLoaded ? <Weather /> : null}
          </div>
          <Favorites />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
