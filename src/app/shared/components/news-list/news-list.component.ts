import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClrSpinnerModule } from '@clr/angular';

import { Observable } from 'rxjs';

import { News } from '../../interfaces';
import { SportsService } from '../../services';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [ClrSpinnerModule, CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit {

  @Input({ required: true }) sport: string;

  @Input({ required: true }) league: string;
  
  news$: Observable<News[]>;

  constructor(private sportsSvc: SportsService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.news$ = this.sportsSvc.getNews(this.sport, this.league);
  }
}
