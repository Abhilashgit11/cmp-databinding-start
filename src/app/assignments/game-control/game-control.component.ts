import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  startGame: string = 'Start Game';
  stopGame: string = 'Stop Game';
  num: number = 0;
  interval: any;
  @Output() intervalfired = new EventEmitter<number>();

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalfired.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }

}
