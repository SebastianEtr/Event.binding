import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';
  numeros: number = 0;
  sube(): void {
    this.numeros = this.numeros < 50 ? this.numeros + 1 : this.numeros;
  }
  baja(): void {
    this.numeros = this.numeros > 0 ? this.numeros - 1 : this.numeros;
  }
  conteoReiniciado(): void {
    this.numeros = 0;
  }
}
