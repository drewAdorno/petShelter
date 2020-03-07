import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pet: any;
  id = this.route.snapshot.params['id'];
  errors = [-1, -1, -1];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService,
    ) { }

  ngOnInit() {
    this.pet = {name: '', type: '', description: '', skills: ['', '', ''], likes: ''};
    this.getPet();
  }
  getPet()
  {
    const observable = this._httpService.getPet(this.id);
    observable.subscribe(data => {
      this.pet = data['data'];
      console.log(data);
    });
  }
  onSubmit() {
    const observable = this._httpService.updatePet(this.pet);
    observable.subscribe(data => {
      if (data[status] === 'error') {
        this.parseError(data['message']);
        console.log(data);
      } else
      {
        console.log(data);
        this.router.navigateByUrl('pets');
      }
    });
  }
  goHome() {
    this.router.navigateByUrl('pets');
  }

  parseError(s) {
    this.errors[0] = s.search('name');
    this.errors[1] = s.search('type');
    this.errors[2] = s.search('description');
  }
}

