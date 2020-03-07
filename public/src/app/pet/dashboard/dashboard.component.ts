import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
// tslint:disable: no-string-literal variable-name one-line whitespace

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets: [];
  constructor(private _httpService: HttpService, private readonly router: Router) {}

  ngOnInit() {
    this.allPets();
  }

  allPets()
  {
    const observable = this._httpService.getPets();
    observable.subscribe(data => {
      this.pets = data['data'];
      console.log(this.pets);
    });
  }

}
