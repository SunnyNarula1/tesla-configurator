import { Model } from "./model";
import { ColorModel } from "./ColorModel";
import { ConfigModel } from "./ConfigModel";

export class SelectedCarModel{
    chooseModel?:Model=undefined;
    chooseColor?:ColorModel=undefined;
    chooseConfig?:ConfigModel=undefined;
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
    getTotalCost():number{
        var towYokeCost=1000;
        var sum = (this.chooseColor?.price??0)+(this.chooseConfig?.price??0);
        if(this.tow){
            sum+=towYokeCost;
        }
        if(this.yoke){
            sum+=towYokeCost;
        }
        return sum;

    }
}