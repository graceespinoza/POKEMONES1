import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'platzi-store';
  items = ['nicolas','pereza','soila'];
  objet={};
  power =10;
 
 // creo un metodo
 addItem(){
  this.items.push('nuevo item');
}
deleteItem(index: number){
  this.items.splice(index,1)
  } 

}
