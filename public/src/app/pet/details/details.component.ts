import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id = this.route.snapshot.params['id'];
  pet = {id: '', name: '', type: '', description: '', skills: ['', '', ''], likes: ''};
  clicked = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _httpService: HttpService,
    ) { }

  ngOnInit() {
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
  likePet()
  {
    const observable = this._httpService.likePet(this.id);
    observable.subscribe(data => {
      this.pet = data['data'];
      console.log(data);
      this.ngOnInit();
    });
  }
  deletePet()
  {
    const observable = this._httpService.deletePet(this.id);
    observable.subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('pets');
    });
  }
}
