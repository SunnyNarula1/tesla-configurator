import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Model } from '../models/model';
import { ColorModel } from '../models/color-modle';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component{
  carModels: Array<Model> =[];
  chooseModel?:Model;
  chooseColor?:ColorModel;
constructor(){}

onChooseColorChange(){
    this.chooseColor = this.chooseColor;
  }
  onChooseModelChange(){
    this.chooseColor=undefined;
    this.chooseModel=this.chooseModel;
  }
}
