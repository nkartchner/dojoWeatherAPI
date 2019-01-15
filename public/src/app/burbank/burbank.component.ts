import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {

    this._httpService.getWeather('burbank').subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }
}
