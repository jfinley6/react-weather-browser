import React, { useContext } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../functions/progressProvider";
import { Context } from "../context/Store";
import { setLocalStorageCities } from "../functions/getLocalStorage";
import { motion } from "framer-motion";

function Weather() {
  const { weatherData, favorites, setFavorites, units } = useContext(Context);

  const hearted = favorites.some((favorite) => {
    return (
      favorite.city === weatherData.city && favorite.state === weatherData.state
    );
  });

  const brightIcons = ["13d", "13n", "50d", "50n", "01n"];
  const raiseIconBrightness = brightIcons.includes(weatherData.icon)
    ? "dark:brightness-200"
    : "dark:brightness-100";

  const handleFavorite = () => {
    const oldFavorites = JSON.parse(localStorage.getItem("cities"));
    if (hearted) {
      const newFavorites = oldFavorites.filter((favorite) => {
        return (
          weatherData.city !== favorite.city &&
          weatherData.state !== favorite.state
        );
      });
      setFavorites([...newFavorites]);
      setLocalStorageCities(newFavorites);
    } else {
      const newFavorites = [
        ...oldFavorites,
        { city: weatherData.city, state: weatherData.state },
      ];
      setFavorites([...newFavorites]);
      setLocalStorageCities(newFavorites);
    }
  };

  return (
    <div className="flex mt-4 justify-center">
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.1,
        }}
        className="card min-w-sm w-full md:max-h-[70vh] md:w-full border dark:text-[#e5e2d8] dark:border-gray-600 test shadow-lg bg-neutral-100 dark:bg-gray-700 text-purple-50 rounded-md"
      >
        <h2 className="text-md mb-2 px-4">
          <div className="flex md:-mb-7 justify-between items-center">
            <div className="badge flex items-center">
              <span className="text-black dark:text-white text-md font-semibold text-2xl  rounded">
                {weatherData.city}, {weatherData.state}
              </span>
            </div>
            <button
              id="heart"
              onClick={handleFavorite}
              className="text-4xl text-red-600 md:text-5xl w-1/6 font-bold hover:scale-125 transition-transform duration-500  "
            >
              <span>{hearted ? "★" : "☆"}</span>
            </button>
          </div>
        </h2>

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <img
              className={`w-2/5 p-5 pt-0 pb-0 md:-mb-8 ${raiseIconBrightness}`}
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            />
            <div
              className="text-black dark:text-white"
              style={{ textTransform: "capitalize" }}
            >
              {weatherData.description}
            </div>
          </div>
        </div>
        <div className="text-md pt-4 pb-4 px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="flex space-x-2 items-center">
                <svg
                  height="20"
                  fill="currentColor"
                  width="20"
                  viewBox="0 0 32 32"
                  className="text-black dark:text-white transition-colors duration-75"
                >
                  <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                  <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
                </svg>{" "}
                <span className="text-black dark:text-white">
                  {(weatherData.wind * 2.23694).toFixed(0)} mph
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="20"
                  width="20"
                  className="text-black dark:text-white transition-colors duration-75"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" />
                </svg>{" "}
                <span className="text-black dark:text-white">
                  {weatherData.time}
                </span>
              </span>
            </div>
            <div>
              <h1 className="text-black dark:text-white md:text-4xl text-3xl sm:mr-2">
                {" "}
                {units === "imperial"
                  ? parseFloat((weatherData.temp - 273.15) * 1.8 + 32).toFixed(
                      1
                    )
                  : parseFloat(weatherData.temp - 273.15).toFixed(1)}
                {units === "imperial" ? "°F" : "°C"}{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="text-md pt-4 pb-4 px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="flex space-x-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  className="text-black dark:text-white transition-colors duration-75"
                >
                  <path d="M7.646 1.146a.5.5 0 01.708 0l1.5 1.5a.5.5 0 01-.708.708L8.5 2.707V4.5a.5.5 0 01-1 0V2.707l-.646.647a.5.5 0 11-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 01.707 0l1.414 1.414a.5.5 0 01-.707.707L2.343 5.05a.5.5 0 010-.707zm11.314 0a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM8 7a3 3 0 012.599 4.5H5.4A3 3 0 018 7zm3.71 4.5a4 4 0 10-7.418 0H.499a.5.5 0 000 1h15a.5.5 0 000-1h-3.79zM0 10a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 010 10zm13 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" />
                </svg>{" "}
                <span className="dark:text-white text-black">
                  {weatherData.sunrise}{" "}
                </span>
              </span>
              <span className="flex space-x-2 items-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  className="text-black dark:text-white transition-colors duration-75"
                >
                  <path d="M7.646 4.854a.5.5 0 00.708 0l1.5-1.5a.5.5 0 00-.708-.708l-.646.647V1.5a.5.5 0 00-1 0v1.793l-.646-.647a.5.5 0 10-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 01.707 0l1.414 1.413a.5.5 0 01-.707.707L2.343 5.05a.5.5 0 010-.707zm11.314 0a.5.5 0 010 .706l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM8 7a3 3 0 012.599 4.5H5.4A3 3 0 018 7zm3.71 4.5a4 4 0 10-7.418 0H.499a.5.5 0 000 1h15a.5.5 0 000-1h-3.79zM0 10a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 010 10zm13 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" />
                </svg>{" "}
                <span className="dark:text-white text-black">
                  {weatherData.sunset}
                </span>
              </span>
            </div>
            <div className="md:w-1/5 sm:w-1/6 w-3/12 flex flex-col items-center gap-1">
              <ProgressProvider valueStart={0} valueEnd={weatherData.humidity}>
                {(value) => (
                  <CircularProgressbarWithChildren value={value}>
                    <div className="text-black md:text-2xl transition-colors duration-75 dark:text-white ">
                      <strong>{value}%</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                )}
              </ProgressProvider>
              <div className="dark:text-white text-black">Humidity</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Weather;
