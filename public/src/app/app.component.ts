import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private _httpService: HttpService,
    private _route:ActivatedRoute
    ) {}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
  goHome() {
  }
}