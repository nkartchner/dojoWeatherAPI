import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {

    this._httpService.getWeather('seattle').subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
