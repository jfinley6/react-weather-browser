import { useState, useEffect } from "react";
import { Context } from "./context/Store";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { getFavoriteCities, getTheme } from "./functions/getLocalStorage";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoriteCities(setFavorites);
    getTheme(setChecked, setComponentLoaded);
  }, []);

  if (!componentLoaded) return null;

  return (
    <Context.Provider value={{ checked, setChecked, favorites }}>
      <div className="font-roboto">
        <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-6 dark:text-[#22daff]">
          React Weather Browser
        </h1>
        <Search />
        {weatherLoaded ? <Weather /> : null}
        <Favorites />
        <Icon />
      </div>
    </Context.Provider>
  );
}

export default App;
