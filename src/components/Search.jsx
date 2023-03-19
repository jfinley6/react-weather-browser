import React, { useContext } from "react";
import Autocomplete from "react-google-autocomplete";
import { Button } from "flowbite-react";
import $ from "jquery";
import { Context } from "../context/Store";
import { weatherDataFetch, currentTime, sunriseSunset } from "../functions/getWeatherData";

const Search = () => {
  const { weatherData, setWeatherData, setWeatherLoaded } =
    useContext(Context);

  const handleInput = () => {
    if ($("#google-input").val().length > 0) {
      $("#clear-button").removeClass("hidden");
    } else {
      $("#clear-button").addClass("hidden");
    }
  };

  const handleClick = () => {
    $("#google-input").val("");
    $("#clear-button").addClass("hidden");
    $("#google-input").trigger('focus')
    
  };

  const handleData = (city, state) => {
    weatherDataFetch(city, state).then((data) => {
      console.log(data);
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
        sunset: sunriseSunset(data.timezone, data.sys.sunset)
      });
    }).then(() => {
      setWeatherLoaded(true)
    });
  };

  return (
    <div className="w-full md:w-1/2 left-[50%] translate-x-[-50%] relative">
      <Autocomplete
        spellCheck={"false"}
        data-testid="autocomplete"
        id="google-input"
        apiKey={import.meta.env.VITE_GOOGLE_AUTOCOMPLETE_KEY}
        placeholder="Search for Cities Across The United States..."
        className="flex w-full p-2 pl-3 text-sm md:text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        onPlaceSelected={(place) => {
          handleData(
            place.address_components[0].long_name,
            place.address_components[2].short_name
          );
        }}
        options={{
          componentRestrictions: { country: "us" },
        }}
        onChange={handleInput}
      />
      <Button
        onClick={handleClick}
        data-testid="clear-button"
        size={"xs"}
        style={{ margin: "auto" }}
        id="clear-button"
        className="absolute hidden right-3 top-0 bottom-0"
      >
        Clear
      </Button>
    </div>
  );
};

export default Search;
