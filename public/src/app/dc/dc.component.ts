import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weather:any;


  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.getWeather('dc').subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

}
