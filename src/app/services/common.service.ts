import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectedCarModel } from '../models/SelectedCarModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
private chooseCarBehavior = new BehaviorSubject<SelectedCarModel>(new SelectedCarModel());
chooseCarObservable:Observable<SelectedCarModel> = this.chooseCarBehavior.asObservable();
 
SelectedCar(SelectedCarModel: SelectedCarModel)
{
this.chooseCarBehavior.next(SelectedCarModel);
}
}
