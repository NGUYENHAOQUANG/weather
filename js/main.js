const searchinput = document.querySelector("#search-input");
const API_KEY = "de4b50b2228c03e184632974bec982b3";
const DEFAULT_VALUE = `--`;

const cityName = document.querySelector(".city-name");
const weatherSate = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperture = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchinput.addEventListener("change", async (e) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}&units=metric&lang=vi`
  );
  const data = await res.json();
  console.log(`[Search Input]`, data);
  cityName.innerHTML = data.name || DEFAULT_VALUE;
  weatherSate.innerHTML = data.weather[0].description || DEFAULT_VALUE;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temperture.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

  sunrise.innerHTML =
    moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
  sunset.innerHTML =
    moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
  humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
  windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
});
