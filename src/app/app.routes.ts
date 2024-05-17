import { Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';

export const routes: Routes = [
    {path:'Step1',component:Step1Component},
    {path:'Step2',component:Step1Component},
    {path:'Step3',component:Step1Component},
    {path:'**' , component:Step1Component}
];
