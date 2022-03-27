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
  countryName: string = '';
  countryPath: string = '';
  playerGuess: string = '';

  constructor(private flagService: FlagService) { }

  ngOnInit(): void {
    this.getFlags();
  }

  getFlags(): void {
    this.flagService.getFlags().subscribe(flags => this.flags = flags);
  }

  nextFlag(): void {
    let random = Math.floor(Math.random() * this.flags.length);
    this.countryName = this.flags[random].name;
    this.countryPath = this.flags[random].path;
    this.playerGuess = '';
    console.log(this.countryName, this.countryPath);
  }

}
