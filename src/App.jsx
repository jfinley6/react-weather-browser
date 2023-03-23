import { useState, useEffect } from "react";
import { Context } from "./context/Store";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { getFavoriteCities, getTheme } from "./functions/getLocalStorage";
import Loading from "./components/Loading";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
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
  const contextValues = {
    checked,
    setChecked,
    favorites,
    setFavorites,
    weatherData,
    setWeatherData,
    setWeatherLoaded,
    setLoading,
  };

  useEffect(() => {
    getFavoriteCities(setFavorites);
    getTheme(setChecked, setComponentLoaded);
  }, []);

  if (!componentLoaded) return null;

  return (
    <Context.Provider value={contextValues}>
      <div className="font-roboto">
        <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-6 dark:text-[#22daff]">
          React Weather Browser
        </h1>
        <Search />
        {loading ? <Loading /> : null}
        {weatherLoaded ? <Weather /> : null}
        <Favorites />
        <Icon />
      </div>
    </Context.Provider>
  );
};

export default App;
