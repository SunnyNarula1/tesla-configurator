import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CommonService } from "../services/common.service";
import { SelectedCarModel } from "../models/SelectedCarModel";

export function step3Guard(): CanActivateFn{
    return  () => {
        let router = inject(Router);
        let commonService = inject(CommonService);
        var isActive:boolean =false;
        commonService.chooseCarObservable.subscribe((selectedCarModel:SelectedCarModel)=> isActive= !selectedCarModel.notChooseConfig());
        if(!isActive){
            router.navigateByUrl('/Step2');
        }
        return isActive;

    };
}