import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
        <input #name [(ngModel)]="name" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="brand">Brand:</label>
        <input #brand [(ngModel)]="brand" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
        <input #price [(ngModel)]="price" class="form-control" type="number">
    </div>
    <div class="form-group">
      <label for="alcohol_content">Alcohol Content:</label>
        <input #alcohol [(ngModel)]="alcohol_content" class="form-control" type="number">
    </div>
    <button (click)="submitForm(name.value, brand.value, price.value, alcohol.value)">Create Keg!</button>
  </form>
  `
  export class newKegComponent {
    @Output() newKegSender = new EventEmitter();

    submitForm(name: string, brand: string, price: number, alcohol: number){
      var newKegToAdd: Keg = new Keg (name, brand, price, alcohol);
    }
  }

})
