import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pet: any;
  errors = [-1, -1, -1];
  constructor(private _httpService: HttpService, private readonly router: Router) {}

  ngOnInit() {
    this.pet = {name: '', type: '', description: '', skills: ['', '', ''], likes: ''};
  }
  onSubmit() {
    this.pet.likes = 0;
    const observable = this._httpService.postPet(this.pet);
    observable.subscribe(data => {
        console.log(data);
        if (data['status'] === 'Error') {
        this.parseError(data['message']['message']);
        console.log(data);
      }
      else
      {
        // console.log(`wtf are you= ${data['status']}`);
        this.router.navigateByUrl('pets');
        console.log(this.errors);
      }
    });
  }
  goHome() {
    this.router.navigateByUrl('pets');
  }

  parseError(s: string) {
    // console.log(`string is ${s}`);
    this.errors[0] = s.search('name');
    this.errors[1] = s.search('type');
    this.errors[2] = s.search('description');
  }
}

