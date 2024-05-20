import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SelectedCarModel } from '../models/SelectedCarModel';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit {

  selectedCarModel:SelectedCarModel = new SelectedCarModel();

  constructor(private commonService: CommonService){}

  ngOnInit(){
    this.commonService.chooseCarObservable.subscribe(selectedCarModel => this.selectedCarModel=selectedCarModel);
    
  }
}
