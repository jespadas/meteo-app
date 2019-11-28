const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');
import Icon01d from '../img/01d.png';
import Icon01n from '../img/01n.png';
import Icon02d from '../img/02d.png';
import Icon02n from '../img/02n.png';
import Icon03d from '../img/03d.png';
import Icon03n from '../img/03n.png';
import Icon04d from '../img/04d.png';
import Icon04n from '../img/04n.png';
import Icon09d from '../img/09d.png';
import Icon09n from '../img/09n.png';
import Icon10d from '../img/10d.png';
import Icon10n from '../img/10n.png';
import Icon11d from '../img/11d.png';
import Icon11n from '../img/11n.png';
import Icon13d from '../img/13d.png';
import Icon13n from '../img/13n.png';
import Icon50d from '../img/50d.png';
import Icon50n from '../img/50n.png';
import Favicon from '../img/favicon.ico';
import HumidityIcon from '../img/humidity.png';
import WindIcon from '../img/wind.png';

const store = new Store();
const { city, countryCode } = store.getLocationData()
const ui = new UI();
const weather = new Weather(city, countryCode);
require('./index.css');

async function fetchWeather() {
  const data = await weather.getWeather();
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  weather.changeLocation(city,countryCode);
  store.setLocationData(city,countryCode);
  fetchWeather();
  e.preventDefault();
});

document.getElementById('favicon').setAttribute('href',Favicon);

document.addEventListener('DOMContentLoaded', fetchWeather)