import { useState, useEffect } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";
import { Context } from "./context/Store";

function App() {
  const [checked, setChecked] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setChecked(true);
      setComponentLoaded(false);
    } else {
      document.documentElement.classList.remove("dark");
      setComponentLoaded(false);
    }
  });

  if (componentLoaded) return null;

  return (
    <Context.Provider value={{ checked, setChecked }}>
      <div className="font-roboto">
        <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-6 dark:text-[#22daff]">
          React Weather Browser
        </h1>
        <Search />
        <Favorites />
        <Icon />
      </div>
    </Context.Provider>
  );
}

export default App;
