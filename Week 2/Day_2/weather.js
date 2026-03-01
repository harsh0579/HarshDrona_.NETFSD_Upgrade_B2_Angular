
const latitude = 18.5204;
const longitude = 73.8567;

const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;



const fetchWeatherWithPromises = () => {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.current_weather;

      const report = `
======= Weather Report (Promises) =======
Temperature : ${weather.temperature}°C
Wind Speed  : ${weather.windspeed} km/h
Wind Dir    : ${weather.winddirection}°
Time        : ${weather.time}
=========================================
`;

      console.log(report);
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
};



const fetchWeatherWithAsyncAwait = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    const weather = data.current_weather;

    const report = `
======= Weather Report (Async/Await) =======
Temperature : ${weather.temperature}°C
Wind Speed  : ${weather.windspeed} km/h
Wind Dir    : ${weather.winddirection}°
Time        : ${weather.time}
============================================
`;

    console.log(report);

  } catch (error) {
    console.error("Error:", error.message);
  }
};



fetchWeatherWithPromises();
fetchWeatherWithAsyncAwait();