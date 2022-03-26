import { Component, OnInit } from '@angular/core';
import { Flag } from '../flag';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {
  flags: Flag[] = [];
  flag = 'Hi flag!';

  constructor(private flagService: FlagService) { }

  ngOnInit(): void {
    this.getFlags();
  }

  getFlags(): void {
    this.flagService.getFlags().subscribe(flags => this.flags = flags);
  }

}
