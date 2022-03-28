import { Component, OnInit } from '@angular/core';
import { Flag } from '../flag';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  flags: Flag[] = [];
  totalFlags: number = 51;
  countryName: string = '';
  countryPath: string = '';
  playerGuess: string = '';
  stateMessage: string = 'Write the name';
  random: number = 0;

  constructor(private flagService: FlagService) { }

  ngOnInit(): void {
    this.getFlags();
  }

  getFlags(): void {
    this.flagService.getFlags().subscribe(flags => this.flags = flags);
  }

  nextFlag(): void {
    this.random = Math.floor(Math.random() * this.flags.length);
    this.countryName = this.flags[this.random].name;
    this.countryPath = this.flags[this.random].path;
    this.playerGuess = '';
    console.log(this.countryName, this.countryPath);
  }

  validateChoice(): void {
    if (this.playerGuess && this.playerGuess == this.countryName) {
      this.stateMessage = 'Correct Guess!';
      this.flags.splice(this.random, 1);
      this.totalFlags = this.flags.length;
      this.nextFlag();
    } else {
      this.stateMessage = 'Incorrect Guess!';
    }
  }

}
