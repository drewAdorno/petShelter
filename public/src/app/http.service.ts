import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getPets()
  {
    return this._http.get('/pets');
  }

  getPet(id)
  {
    return this._http.get(`/pets/${id}`);
  }

  postPet(pet)
  {
    return this._http.post('/pet', pet);
  }

  updatePet(pet)
  {
    return this._http.put(`/pets/${pet._id}`, pet);
  }
  deletePet(petID)
  {
    return this._http.delete(`/pets/${petID}`);
  }
  likePet(petID)
  {
    return this._http.get(`/like/${petID}`);
  }

}
