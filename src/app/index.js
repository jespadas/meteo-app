const { Weather } = require('./Weather');
const { UI } = require('./UI');

const ui = new UI();
const weather = new Weather('Toulouse', 'fr');
require('./index.css');

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
  console.log(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather)