import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClrSelectModule, ClrTabsModule } from '@clr/angular';

import { LeaguesListComponent } from '../shared/components';
import { SportsService } from '../shared/services';
import { SportsLeague } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClrSelectModule, ClrTabsModule, LeaguesListComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  form: FormGroup<{ sport: FormControl<string | null> }>;

  leagues: SportsLeague[];

  constructor(private sportsSvc: SportsService) {}

  ngOnInit() {
    this.buildForm();
    this.leagues = this.sportsSvc.getLeaguesBySport('all');
  }

  private buildForm() {
    this.form = new FormGroup({
      sport: new FormControl('all')
    });
  }

  onChange(event: Event) {
    const sport = (event.target as HTMLSelectElement).value;
    this.leagues = this.sportsSvc.getLeaguesBySport(sport);
  }

}
