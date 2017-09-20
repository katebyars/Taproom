import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentFocus}}</h3>
      <div *ngFor = "let newKeg of kegs">
        <h4><a (click)="showMe(newKeg)">{{newKeg.name}}</a></h4>
        <div *ngIf="newKeg.canbeseen">
          <ul>
              <li>{{newKeg.brand}}</li>
              <li>{{newKeg.price}}</li>
              <li>{{newKeg.alcohol}}</li>
         </ul>
      </div>
  </div>
  </div>
  `

})

export class AppComponent{
  currentFocus: string = 'Our Kegs';
  kegs: Kegs[] = [
];

// selectedRecipe = null;
showMe(newKeg: Keg){
    newKeg.canbeseen = !newKeg.canbeseen;
  }
}
newKeg(newKeg: Keg){
  let keg = new Keg()
  }
}
