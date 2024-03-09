import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClrSpinnerModule } from '@clr/angular';

import { Observable } from 'rxjs';

import { Team } from '../../interfaces';
import { SportsService } from '../../services';

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [ClrSpinnerModule, CommonModule],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.scss'
})
export class TeamsListComponent implements OnInit {

  @Input({ required: true }) sport: string;

  @Input({ required: true }) league: string;
  
  teams$: Observable<Team[]>;

  constructor(private sportsSvc: SportsService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teams$ = this.sportsSvc.getTeams(this.sport, this.league);
  }
}
