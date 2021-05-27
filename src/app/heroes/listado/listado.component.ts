import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
heroes :string[] = ["SpiderMan","Hulk","IronMan","Capitan A"]

hereoBorrado : string = "";
borrarHeroe()
{

  this.hereoBorrado= this.heroes.shift()||"";

}

}
