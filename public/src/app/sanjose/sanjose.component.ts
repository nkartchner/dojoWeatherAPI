import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather:any;


  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.getWeather('sanjose').subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }


}
