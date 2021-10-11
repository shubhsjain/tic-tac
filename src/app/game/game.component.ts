import { Gamelogic } from './../gamelogic';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers:[Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Current turn :Player:' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information.innerHTML = currentPlayer;
  }

  async clickSubfield(subfield: any): Promise<void>{
    if (this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subfield.currentTarget.classList.add(color);

      

    this.game.changePlayer();

      if (this.game.gameStatus === 1) {
        const currentPlayer = 'Current turn :Player:' + this.game.currentTurn;
        information.innerHTML = currentPlayer;
      }
    }
  }
}
