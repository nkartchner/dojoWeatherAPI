import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class HttpService {
  cities = {
    'seattle': 5809844,
    'burbank': 5788497,
    'dc': 4140963,
    'chicago': 4887398,
    'dallas': 4190598,
    'sanjose': 5392171
  };
  apiKey = "8752144147b98e5bab31585f4ae3b312";

  constructor(private _http: HttpClient) { }

  //ALL METHODS HERE ARE BRIDGING TO THE EXPRESS DATABASE METHODS


  getWeather(city: string) {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/weather?id=${this.cities[city]}&APPID=8752144147b98e5bab31585f4ae3b312`
    )
  }


}
