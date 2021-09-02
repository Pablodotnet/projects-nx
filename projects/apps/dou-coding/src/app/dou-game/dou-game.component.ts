import { Component } from '@angular/core';

@Component({
  selector: 'projects-dou-game',
  templateUrl: './dou-game.component.html',
  styleUrls: ['./dou-game.component.scss']
})
export class DouGameComponent {

  marginX = 0;
  marginY = 0;

  handleDirectionChange(direction: string): void {
    if (direction === 'right') {
      if ((this.marginX + 1) <= 100) {
        this.marginX = ++this.marginX;
      }
    }

    if (direction === 'left') {
      if ((this.marginX - 1) >= 0) {
        this.marginX = --this.marginX;
      }
    }

    if (direction === 'down') {
      if ((this.marginY + 1) <= 100) {
        this.marginY = ++this.marginY;
      }
    }

    if (direction === 'up') {
      if ((this.marginY - 1) >= 0) {
        this.marginY = --this.marginY;
      }
    }

    console.log('marginX: ', this.marginX);
    console.log('marginY: ', this.marginY);
  }

}
