import React from "react";
import Autocomplete from "react-google-autocomplete";

function Search() {
  const restrictions = {
    country: "us",
  };


  return (
    <div className="flex justify-center">
      <Autocomplete
        apiKey={import.meta.env.VITE_GOOGLE_AUTOCOMPLETE_KEY}
        placeholder="Search for Cities Across The United States..."
        className="block w-full md:w-1/2 p-4 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        options={{ componentRestrictions: { country: "us" } }}
      />
    </div>
  );
}

export default Search;
