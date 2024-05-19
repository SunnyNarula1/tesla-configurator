import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectedCarModel } from './models/SelectedCarModel';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  
  isStep2Disabled: boolean= true;
  isStep3Disabled:boolean= true;

  imageUrl?:string;

  selectedCarModel:SelectedCarModel= new SelectedCarModel();

  constructor(private commonService:CommonService){}

  ngOnInit(){
    this.commonService.chooseCarObservable.subscribe(
    (selectedCarModel:SelectedCarModel)=>{
      this.selectedCarModel = selectedCarModel;
      this.isStep2Disabled= this.selectedCarModel.notChooseModleAndColor();
      this.isStep3Disabled = this.selectedCarModel.notChooseConfig();
      this.imageUrl = "assets/images/"+this.selectedCarModel.chooseModel?.code+"/"+this.selectedCarModel.chooseColor?.code+".jpg";
    }
  ); 
  }

}
