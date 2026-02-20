const apikey = "?";
const apiUrl =
  "?";
const searchbox = document.getElementById("city-input");
const searchbtn = document.getElementById("city-btn");
const weatherIcon = document.getElementById("weather-icon");
async function weather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }

    var data = await response.json();
    document.getElementById("display-city").innerHTML = data.name;
    document.getElementById("degree").innerHTML = data.main.temp;
    document.getElementById("wind-value").innerHTML = data.wind.speed;
    document.getElementById("humidity-percentage").innerHTML =
      data.main.humidity;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/linkedin/weather/images/weather1.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/linkedin/weather/images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/linkedin/weather/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/linkedin/weather/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/linkedin/weather/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "/linkedin/weather/images/snow.png";
    } else {
      weatherIcon.src = "/linkedin/weather/images/weather1.png";
    }
  } catch (error) {
    alert("City Not found");
  }
}
searchbtn.addEventListener("click", () => {
  const city = searchbox.value.trim();
  if (city === "") {
    alert("Please enter city:");
    return;
  }
  weather(city);
  searchbox.value = "";
});
searchbox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchbtn.click();
  }
});
window.addEventListener("load", () => {
  weather("chennai");
});

