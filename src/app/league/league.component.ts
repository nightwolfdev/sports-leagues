import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ClrAlertModule, ClrTabsModule } from '@clr/angular';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { NewsListComponent, TeamsListComponent } from '../shared/components';
import { SportsLeague } from '../shared/interfaces';
import { SportsService } from '../shared/services';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [ClrAlertModule, ClrTabsModule, CommonModule, NewsListComponent, TeamsListComponent],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss'
})
export class LeagueComponent implements OnInit {

  league$: Observable<SportsLeague | undefined>;

  constructor(
    private route: ActivatedRoute,
    private sportsSvc: SportsService,
    private title: Title
  ) {}

  ngOnInit() {
    this.league$ = this.route.paramMap.pipe(
      map(params => {
        const sport = params.get('sport') as string;
        const league = params.get('league') as string;

        return this.sportsSvc.getCurrentLeague(sport, league);
      }),
      tap(league => this.title.setTitle(league?.name!))
    );
  }

}
