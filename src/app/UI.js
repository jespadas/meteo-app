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
import HumidityIcon from '../img/humidity.png';
import WindIcon from '../img/wind.png';

export class UI { 

  constructor() {
    this.location = document.getElementById('weather-location');
    this.flag = document.getElementById('weather-flag');
    this.icon = document.getElementById('weather-icon');
    this.desc = document.getElementById('weather-description');
    this.string = document.getElementById('weather-string');
    this.humidity = document.getElementById('weather-humidity');
    this.humidityImage = document.getElementById('humidityImage');
    this.wind = document.getElementById('weather-wind');
    this.favicon = document.getElementById('favicon');
    this.windImage = document.getElementById('windImage');
  }

  render(weather) { 
    this.flag.setAttribute('src', 'https://www.countryflags.io/' + weather.sys.country + '/flat/64.png');
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0]['description'];
    this.string.textContent = Math.floor(weather.main.temp) + ' °C' ;
    this.humidityImage.setAttribute('src', HumidityIcon);
    this.humidityImage.setAttribute('height', '25px');
    this.humidity.textContent = weather.main.humidity + '%';
    this.windImage.setAttribute('src', WindIcon);
    this.windImage.setAttribute('height','25px');
    this.wind.textContent = weather.wind.speed + ' m/s';
    switch (weather.weather[0]['icon']) {
      case '01d' :
        return this.icon.setAttribute('src', Icon01d);
        break;
      case '01n' :
        return this.icon.setAttribute('src', Icon01n);
        break;
      case '02d' : 
        return this.icon.setAttribute('src', Icon02d);
        break;
      case '02n' :
        return this.icon.setAttribute('src', Icon02n);
      case '03d' :
        return this.icon.setAttribute('src', Icon03d);
        break;
      case '03n' : 
        return this.icon.setAttribute('src', Icon03n);
        break;
      case '04d' :
        return this.icon.setAttribute('src', Icon04d);
        break;
      case '04n' :
        return this.icon.setAttribute('src', Icon04n);
        break;
      case '09d' :
        return this.icon.setAttribute('src', Icon09d);
        break;
      case '09n' :
        return this.icon.setAttribute('src', Icon09n);
        break;
      case '10d' :
        return this.icon.setAttribute('src', Icon10d);
        break;
      case '10n' :
        return this.icon.setAttribute('src', Icon10n);
        break;
      case '11d' :
        return this.icon.setAttribute('src', Icon11d);
        break;
      case '11n' :
        return this.icon.setAttribute('src', Icon11n);
        break;
      case '13d' :
        return this.icon.setAttribute('src', Icon13d);
        break;
      case '13n' :
        return this.icon.setAttribute('src', Icon13n);
        break;
      case '50d' :
        return this.icon.setAttribute('src', Icon50d);
        break;
      case '50n' :
        return this.icon.setAttribute('src', Icon50n);
        break;
    }
  }

};