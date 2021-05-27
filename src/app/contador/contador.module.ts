import { NgModule } from '@angular/core';
import { ContadorCompoonent } from './contador/contador.component';
@NgModule({
    declarations:[
        ContadorCompoonent
    ],
    exports:[
        ContadorCompoonent
    ]
    

})
export class ContadorModule{

}