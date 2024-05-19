import { Model } from "./model";
import { ColorModel } from "./ColorModel";
import { ConfigModle } from "./ConfigModel";

export class SelectedCarModel{
    chooseModel?:Model=undefined;
    chooseColor?:ColorModel=undefined;
    chooseConfig?:ConfigModle=undefined;
    tow:boolean=false;
    yoke:boolean= false;

    notChooseModleAndColor():boolean{
        if(this.chooseModel && this.chooseColor){
            return false;
        }
        return true;
    }

    notChooseConfig():boolean{
        if(this.chooseConfig){
            return false;
        }
        return true;
    }
}