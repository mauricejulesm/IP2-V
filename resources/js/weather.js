/*let latitude = '';
let longitude = '';
let locationO = {};
let forecast = {};
let current = {};
const baseUrl = 'http://api.apixu.com/v1/forecast.json?key=241ab0f9ad074597a52135112181012&q=';

function init() {
  // sets default values for latitude and longitude if the user blocks the location prompt.
  if (latitude === '' && longitude === '') {
    latitude = -20.24;
    longitude = 57.49;
  }
  makeApiCall();
}

/!* Makes the Api Call and returns the response as json *!/
makeApiCall= () => {
  let url = `${baseUrl}${latitude},${longitude}`;
  fetch(url).then(data => {
    return data.json();
  }).then(res => {
    console.log(res);
  });
};


// updates the inputs fields on the screen
updateInputValues = locationObj => {
  let location = locationObj.name;
  let lati = locationObj.lati;
  let lon = locationObj.lon;
  document.getElementById('location').value = location;
  document.getElementById('latitude').value = lati;
  document.getElementById('longitude').value = lon;
};

// document.getElementById('submit-btn').addEventListener('click', send);

getValues = () => {
  latitude = document.getElementById('latitude');
  longitude = document.getElementById('longitude');
};

send =(event) => {
  event.preventDefault();
  getValues();
};

createDataView = () => {};

document.addEventListener('DOMContentLoaded', init);*/
let lati = 0;
let long = 0;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const FORECAST_DAYS = '&days=6';

const BASE_OPEN_WEATHER_URL = 'http://api.apixu.com/v1/forecast.json?key=241ab0f9ad074597a52135112181012&q=';

$(document).ready(() => {
  weatherByCoords();

  $('#submit-btn').click(weatherByCoords);

  $('#local-btn').click(weatherByLocation);
});


weatherByCoords = () => {
  lati = $('#latitude').val();
  long = $('#longitude').val();
  console.log(`${lati}, ${long}`);
  let url;
  if (lati === '' && long === '') {
    url = `${BASE_OPEN_WEATHER_URL}-20.24,57.49${FORECAST_DAYS}`;
    console.log(url);
  } else {
    url = `${BASE_OPEN_WEATHER_URL}${lati},${long}${FORECAST_DAYS}`;
    console.log(url);
  }
  console.log(url);
  $.getJSON(url, jsonData);
};

weatherByLocation = () => {
  let input_loc = $('#location').val();
  console.log(input_loc);
  let url = `${BASE_OPEN_WEATHER_URL}${input_loc}${FORECAST_DAYS}`;
  console.log(url);
  $.getJSON(url, (result) => {
    jsonData(result);
  });
};

jsonData = json => {
  console.log(json);
  // Update the values of the Input fields.
  $('#location').val(`${json.location.name}, ${json.location.country}`);
  $('#latitude').val(`${json.location.lat}`);
  $('#longitude').val(`${json.location.lon}`);

  // Current information
  $('#icon').attr('src', `http:${json.current.condition.icon}`);
  $('#temp_c').text(`${json.current.temp_c}`);
  $('#icon-description').text(`${json.current.condition.text}`);
  $('#feels-like').text(`${json.current.feelslike_c}`);
  $('#humidity').text(`${json.current.humidity}`);
  $('#uv').text(`${json.current.uv}`);

  // forecast
  let forecast = $('#forecast');
  forecast.empty();
  let length = json.forecast.forecastday.length;
  console.log(length);
  for (let i = 1; i < length; i++) {
    let data = new Date(json.forecast.forecastday[i].date);
    let day = `<span class="row">${days[data.getDate()]}</span>`;
    let img = "<img class ='row' src='http:"+json.forecast.forecastday[i].day.condition.icon+"'>";
    let p = "<div class ='row'>"+json.forecast.forecastday[i].day.avgtemp_c+"</div>";
    forecast.append("<div class='col-md-2' id = 'day"+i+"'>"+ day + img + p +"</div>")
  }
};