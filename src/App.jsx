import { useState, useEffect } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Icon from "./components/Icon";
import Search from "./components/Search";

function App() {
  const [checked, setChecked] = useState(false);
  const [componentLoading, setComponentLoading] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setChecked(true);
      setComponentLoading(false);
    } else {
      document.documentElement.classList.remove("dark");
      setComponentLoading(false);
    }
  });

  if (componentLoading) return null;

  return (
    <div className="font-roboto">
      <h1 className="text-3xl md:text-4xl font-black mb-3 dark:text-[#22daff]">
        React Weather Browser
      </h1>
      <Search />
      <Favorites />
      <Icon checked={checked} setChecked={setChecked} />
    </div>
  );
}

export default App;
