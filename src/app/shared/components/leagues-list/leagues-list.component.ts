import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SportsLeague } from '../../interfaces';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leagues-list.component.html',
  styleUrl: './leagues-list.component.scss'
})
export class LeaguesListComponent {

  @Input({ required: true }) leagues: SportsLeague[];

}
