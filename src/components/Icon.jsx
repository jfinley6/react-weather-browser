import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Context } from "../context/Store";

function Icon() {
  const { checked, setChecked, units, setUnits, unitChecked, setUnitChecked } =
    useContext(Context);

  const icon = checked ? (
    <FaMoon size={36} color="#F4FF8D" className="p-1" />
  ) : (
    <FaSun size={36} color="#fce303" className="p-1" />
  );

  // const units =

  const handleThemeInput = () => {
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

  const handleTempInput = () => {
    if (localStorage.units === "imperial") {
      localStorage.setItem("units", "metric");
      setUnitChecked(true);
      setUnits("metric");
    } else {
      localStorage.setItem("units", "imperial");
      setUnitChecked(false);
      setUnits("imperial");
    }
  };

  return (
    <div className="flex w-full justify-evenly md:w-1/2 gap-5 mt-3">
      <div className="flex md:w-[40%] items-center justify-center gap-2 bg-[rgb(249,250,251)] dark:bg-[rgb(55,65,81)] p-2 rounded-lg">
        <span className="dark:text-white text-2xl mr-1">
          {units === "imperial" ? "°F" : "°C"}
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleTempInput}
            checked={unitChecked}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#22daff]"></div>
        </label>
      </div>
      <div className="flex md:w-[40%] items-center gap-2 bg-[rgb(249,250,251)] dark:bg-[rgb(55,65,81)] p-2 rounded-lg">
        {icon}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleThemeInput}
            checked={checked}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#22daff]"></div>
        </label>
      </div>
    </div>
  );
}

export default Icon;
