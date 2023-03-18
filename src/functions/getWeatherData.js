import $ from "jquery";
import moment from "moment";

export const weatherDataFetch = (city, state) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=603c1fe7d80e6312fb58fa945317b70d`,
      type: "GET",
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
};

export const currentTime = (cityTimezone) => {
    const timezone = cityTimezone; //needs to be converted in minutes
    const timezoneInMinutes = timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
    return currTime
};

export const sunriseSunset = (cityTimeZone, citySunriseSunset) => {
  let time = moment.utc(citySunriseSunset, "X").add(cityTimeZone, "seconds").format("LT");
  return time
}

