import React from "react";
import Autocomplete from "react-google-autocomplete";
import { Button } from "flowbite-react";

function Search() {
  
  return (
    <div className="w-full md:w-1/2 left-[50%] translate-x-[-50%] relative">
      <Autocomplete
        data-testid="autocomplete"
        id="google-input"
        apiKey={import.meta.env.VITE_GOOGLE_AUTOCOMPLETE_KEY}
        placeholder="Search for Cities Across The United States..."
        className="flex w-full p-2 pl-3 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        options={{ componentRestrictions: { country: "us" } }}
      />
      <Button
        data-testid="clear-button"
        size={"xs"}
        style={{ margin: "auto" }}
        className="absolute right-3 top-0 bottom-0"
      >
        Clear
      </Button>
    </div>
  );
}

export default Search;
