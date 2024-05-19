import { Component, OnInit } from '@angular/core';
import { ConfigOptionalModel } from '../models/ConfigOptionalModel';
import { ConfigModle } from '../models/ConfigModel';
import { SelectedCarModel } from '../models/SelectedCarModel';
import { CarDetailsService } from '../services/car-details.service';
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit {

carConfigOptional?:ConfigOptionalModel;

selectedConfig?:ConfigModle;
isTowHitchCheck:boolean=false;
isYokeCheck:boolean= false;

selectedCarModel:SelectedCarModel = new SelectedCarModel();

constructor(private carDetailsService:CarDetailsService ,private commonService:CommonService){}
ngOnInit(){
  this.commonService.chooseCarObservable.subscribe(
(selectedCarModel:SelectedCarModel)=>
  {
  this.selectedCarModel=selectedCarModel;
 this.carDetailsService.getCarOptions(this.selectedCarModel.chooseModel?.code!).subscribe(
  (options:ConfigOptionalModel)=>{
    this.carConfigOptional=options;
    this.selectedConfig=this.carConfigOptional?.carConfigruation.find(x=>x.id==this.selectedCarModel.chooseConfig?.id);
    this.isYokeCheck=this.selectedCarModel.yoke;
    this.isTowHitchCheck= this.selectedCarModel.tow;
  }
 );
}
);
}
  onChooseConfigChange(){
    this.selectedCarModel.chooseConfig= this.selectedConfig;
    this.commonService.SelectedCar(this.selectedCarModel);
  }

  onTowHitchChange(){
    this.selectedCarModel.tow = this.isTowHitchCheck;
    this.commonService.SelectedCar(this.selectedCarModel);

  }
  onYokeChange(){
this.selectedCarModel.yoke = this.isYokeCheck;
this.commonService.SelectedCar(this.selectedCarModel);
  }

}

