export class UI {

  constructor() {
    this.location = document.getElementById('weather-location');
    this.flag = document.getElementById('weather-flag');
    this.icon = document.getElementById('weather-icon');
    this.desc = document.getElementById('weather-description');
    this.string = document.getElementById('weather-string');
    this.humidity = document.getElementById('weather-humidity');
    this.wind = document.getElementById('weather-wind');
  }

  render(weather) {
    this.flag.setAttribute('src', 'https://www.countryflags.io/' + weather.sys.country + '/flat/64.png');
    this.location.textContent = weather.name + ','+ weather.sys.country;
    this.icon.setAttribute('src', "/src/img/" + weather.weather[0]['icon'] + ".png");
    this.desc.textContent = weather.weather[0]['description'];
    this.string.textContent = weather.main.temp + ' °C' ;
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
    this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s';
  }

};