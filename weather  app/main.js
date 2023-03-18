let country = document.getElementById("country");
let city = document.getElementById("city");
let time = document.getElementById("currentTime");
let mydate = document.getElementById("currentDate");
let temp = document.getElementById("temp");
let main = document.getElementById("main");
let wind_speed = document.getElementById("wind_speed");
let wind_deg = document.getElementById("wind_deg");
let feels_like = document.getElementById("feels_like");
let pressure = document.getElementById("pressure");
let humidity = document.getElementById("humidity");
let sunrise = document.getElementById("sunrise");
let sunset  = document.getElementById("sunset")

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// showing current time in weather card

setInterval(() => {
  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let my_currentDate = currentDate + " " + currentMonth + " " + currentYear;
  mydate.innerHTML = my_currentDate;

  let currentHours = date.getHours();
  let currentMintue = date.getMinutes();
  let currentSeconds = date.getSeconds();

  if (currentSeconds < 10) {
    currentSeconds = "0" + date.getSeconds();
  }
  if (currentMintue < 10) {
    currentMintue = "0" + date.getMinutes();
  }
  if (currentHours < 10) {
    currentHours = "0" + date.getHours();
  }

  let my_currentTime =
    currentHours + ":" + currentMintue + ":" + currentSeconds + " IST";
  time.innerHTML = my_currentTime;
}, 1000);

// setting search box

let p = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=delhi,&appid=484729e03e78f98e8ec7c9bd65241f94`
);

p.then((response) => {
  return response.json();
})
  .then((data) => {
    console.log(data);
    // finding value of city and countary
    country.innerHTML = " " + data.sys.country;
    city.innerHTML = " " + data.name;

    //  showing weather condition
    main.innerHTML = " " + data.weather[0].description;

    // showing temp
    const celsius = data.main.temp - 273.15;
    temp.innerHTML = Math.ceil(celsius);

    //  showing icon dynamically

    let wicon = data.weather[0].icon;

    function icon() {
      // Get a reference to the image element
      let img = document.getElementById("icon-img");

      // Change the src attribute of the image
      img.src = `./images/${wicon}.png`;
    }
    icon();

    // getting weather  wind info

    wind_speed.innerHTML = "" + Math.round(data.wind.speed * 3.6);
    wind_deg.innerHTML = "" + Math.round(data.wind.deg);

    // getting humidity presure feels like
    feels_like.innerHTML = Math.round(data.main.feels_like - 273.15);
    humidity.innerHTML = Math.round(data.main.humidity);
    pressure.innerHTML = Math.round(data.main.pressure);

    // getting sunrise info
    let sunriseTime = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTime * 1000);
    sunrise.innerHTML = sunriseDate.toLocaleTimeString();

    // getting sunset info
    let sunsetTime = data.sys.sunset;
    const sunsetDate = new Date(sunsetTime * 1000);
    sunset.innerHTML = sunsetDate.toLocaleTimeString();
  })
  .catch((error) => {
    console.error(error);
  });
let submitbtn = document.getElementById("mysearchbtn");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchValue = document.getElementById("searchValue").value;
  let p = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue},&appid=484729e03e78f98e8ec7c9bd65241f94`
  );

  p.then((response) => {
    return response.json();
  })
    .then((data) => {
      // finding value of city and countary
      country.innerHTML = " " + data.sys.country;
      city.innerHTML = " " + data.name;

      //  showing weather condition
      main.innerHTML = " " + data.weather[0].description;

      // showing temp
      const celsius = data.main.temp - 273.15;
      temp.innerHTML = Math.ceil(celsius);

      //  showing icon dynamically

      let wicon = data.weather[0].icon;

      function icon() {
        // Get a reference to the image element
        let img = document.getElementById("icon-img");

        // Change the src attribute of the image
        img.src = `./images/${wicon}.png`;
      }
      icon();

      // getting weather  wind info

      wind_speed.innerHTML = "" + Math.round(data.wind.speed * 3.6);
      wind_deg.innerHTML = "" + Math.round(data.wind.deg);

      // getting humidity presure feels like
      feels_like.innerHTML = Math.round(data.main.feels_like - 273.15);
      humidity.innerHTML = Math.round(data.main.humidity);
      pressure.innerHTML = Math.round(data.main.pressure);

      // getting sunrise info
    let sunriseTime = data.sys.sunrise;
    const sunriseDate = new Date(sunriseTime * 1000);
    sunrise.innerHTML = sunriseDate.toLocaleTimeString();

    // getting sunset info
    let sunsetTime = data.sys.sunset;
    const sunsetDate = new Date(sunsetTime * 1000);
    sunset.innerHTML = sunsetDate.toLocaleTimeString();
  

    })





    .catch((error) => {
      console.error(error);
    });
});
