import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorModel } from '../models/ColorModel';
import { SelectedCarModel } from '../models/SelectedCarModel';
import { CarDetailsService } from '../services/car-details.service';
import { Model } from '../models/model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit{
  carModels: Array<Model> =[];
  chooseModel?:Model;
  chooseColor?:ColorModel;

  selectedCarModel: SelectedCarModel = new SelectedCarModel();

  constructor(private carDetailsService:CarDetailsService,private commonService:CommonService){}

  ngOnInit(){
  this.commonService.chooseCarObservable.subscribe(
  (selectedCarModel:SelectedCarModel)=>{
    this.selectedCarModel=selectedCarModel;
    this.carDetailsService.getCarModels().subscribe(
      data=>{
        this.carModels=data;
        this.chooseModel= this.carModels.find(id=>id.code==this.selectedCarModel.chooseModel?.code);
        this.chooseColor= this.chooseModel?.colors.find(id=>id.code==this.selectedCarModel.chooseColor?.code);
      }
    );
  }
);
}
onChooseColorChange(){
    this.selectedCarModel.chooseColor = this.chooseColor;
    this.commonService.SelectedCar(this.selectedCarModel);
  }
  onChooseModelChange(){
    this.chooseColor=undefined;
    this.selectedCarModel = new SelectedCarModel();
    this.selectedCarModel.chooseModel = this.chooseModel;
  this.commonService.SelectedCar(this.selectedCarModel);
  }
}
