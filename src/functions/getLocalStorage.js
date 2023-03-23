export const getFavoriteCities = (setFavorites) => {
  const initialCities = [
    {
      city: "Denver",
      state: "CO",
    },
    {
      city: "New York",
      state: "NY",
    },
    {
      city: "Los Angeles",
      state: "CA",
    },
  ];

  if (localStorage.getItem("cities") === null) {
    //   setCurrentState(initialCities[0].state);
    //   setCurrentCity(initialCities[0].city);
    setFavorites(initialCities);
    localStorage.setItem("cities", JSON.stringify(initialCities));
  } else {
    setFavorites(JSON.parse(localStorage.getItem("cities")));
    //   setCurrentCity(JSON.parse(localStorage.getItem("cities"))[0].city);
    //   setCurrentState(JSON.parse(localStorage.getItem("cities"))[0].state);
  }
};

export const setLocalStorageCities = (favorites) => {
  localStorage.setItem("cities", JSON.stringify(favorites))
}

export const getTheme = (setChecked, setComponentLoaded) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    setChecked(true);
    setComponentLoaded(true);
  } else {
    document.documentElement.classList.remove("dark");
    setComponentLoaded(true);
  }
}
