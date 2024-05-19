import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model';
import { ConfigOptionalModel } from '../models/ConfigOptionalModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  constructor(private http:HttpClient) { }

  getCarModels():Observable<Array<Model>>
  {
    return this.http.get<Array<Model>>("/models");
  }

  getCarOptions(id: string):Observable<ConfigOptionalModel>{
    return this.http.get<ConfigOptionalModel>('/options/${id}');
  }
}
