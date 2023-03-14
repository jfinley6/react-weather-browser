import { useState, useEffect } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";

function App() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setChecked(true);
      setLoading(false);
    } else {
      document.documentElement.classList.remove("dark");
      setLoading(false);
    }
  });

  const handleInput = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setChecked(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setChecked(true);
    }
  };

  return (
    <div className="font-roboto">
      <h1 className="text-4xl font-black mb-3 dark:text-[#22daff]">
        React Weather App
      </h1>
      <Search />
      <Favorites />
      {loading ? null : (
        <div className="flex justify-end items-center mt-3">
          <div className="flex items-center gap-2">
            <Icon checked={checked} />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={handleInput}
                checked={checked}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
