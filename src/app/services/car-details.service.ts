import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  constructor(private http:HttpClient) { }

  getCarModels():Observable<Array<Model>>
  {
    return this.http.get<Array<Model>>("/models");
  }
}
