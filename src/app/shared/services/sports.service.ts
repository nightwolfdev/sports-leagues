import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News, NewsResponse, SportsLeague, Team, TeamResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  private readonly apiUrl = 'https://site.api.espn.com/apis/site/v2/sports';

  private readonly leagues: SportsLeague[] = [
    {
      id: 'arg',
      league: 'arg.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1.png',
      name: 'Argentine Liga Profesional de Futbol',
      sport: 'soccer'
    },
    {
      id: 'aus',
      league: 'aus.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1308.png',
      name: 'Australian A-League Men',
      sport: 'soccer'
    },
    {
      id: 'aut',
      league: 'aut.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/5.png',
      name: 'Austrian Bundesliga',
      sport: 'soccer'
    },
    {
      id: 'bel',
      league: 'bel.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/6.png',
      name: 'Belgian Pro League',
      sport: 'soccer'
    },
    {
      id: 'bol',
      league: 'bol.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1949.png',
      name: 'Bolivian Liga Profesional',
      sport: 'soccer'
    },
    {
      id: 'bra',
      league: 'bra.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/85.png',
      name: 'Brazilian Serie A',
      sport: 'soccer'
    },
    {
      id: 'chi',
      league: 'chi.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/86.png',
      name: 'Chilean Primera Division',
      sport: 'soccer'
    },
    {
      id: 'chn',
      league: 'chn.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2350.png',
      name: 'Chinese Super League',
      sport: 'soccer'
    },
    {
      id: 'col',
      league: 'col.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1543.png',
      name: 'Columbian Primera A',
      sport: 'soccer'
    },
    {
      id: 'crc',
      league: 'crc.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2245.png',
      name: 'Costa Rican Primera Division',
      sport: 'soccer'
    },
    {
      id: 'ned',
      league: 'ned.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/11.png',
      name: 'Dutch Eredivisie',
      sport: 'soccer'
    },
    {
      id: 'epl',
      league: 'eng.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
      name: 'English Premier League',
      sport: 'soccer'
    },  
    {
      id: 'fra',
      league: 'fra.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/9.png',
      name: 'French Ligue 1',
      sport: 'soccer'
    },
    {
      id: 'ger',
      league: 'ger.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/10.png',
      name: 'German Bundesliga',
      sport: 'soccer'
    },    
    {
      id: 'gua',
      league: 'gua.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2248.png',
      name: 'Guatemalan Liga Nacional',
      sport: 'soccer'
    },
    {
      id: 'gre',
      league: 'gre.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/98.png',
      name: 'Greek Super League',
      sport: 'soccer'
    },
    {
      id: 'hon',
      league: 'hon.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2247.png',
      name: 'Honduran Liga Nacional',
      sport: 'soccer'
    },
    {
      id: 'ind',
      league: 'ind.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2334.png',
      name: 'Indian Super League',
      sport: 'soccer'
    },
    {
      id: 'idn',
      league: 'idn.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2336.png',
      name: 'Indonesian Liga 1',
      sport: 'soccer'
    },
    {
      id: 'irl',
      league: 'irl.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/116.png',
      name: 'Irish Premier Division',
      sport: 'soccer'
    },
    {
      id: 'ita',
      league: 'ita.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/12.png',
      name: 'Italian Serie A',
      sport: 'soccer'
    },
    {
      id: 'jpn',
      league: 'jpn.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2199.png',
      name: 'Japanese J1 League',
      sport: 'soccer'
    },
    {
      id: 'mlb',
      league: 'mlb',
      logo: 'https://a.espncdn.com/i/teamlogos/leagues/500/mlb.png',
      name: 'Major League Baseball',
      sport: 'baseball'
    },    
    {
      id: 'mls',
      league: 'usa.1',
      logo: 'https://a.espncdn.com/i/teamlogos/leagues/500/mls.png',
      name: 'Major League Soccer',
      sport: 'soccer'
    },
    {
      id: 'mys',
      league: 'mys.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/6.png',
      name: 'Malaysian Super League',
      sport: 'soccer'
    },
    {
      id: 'mex',
      league: 'mex.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/22.png',
      name: 'Mexican Liga BBVA MX',
      sport: 'soccer'
    },
    {
      id: 'nba',
      league: 'nba',
      logo: 'https://a.espncdn.com/i/teamlogos/leagues/500/nba.png',
      name: 'National Basketball Association',
      sport: 'basketball'
    },  
    {
      id: 'nfl',
      league: 'nfl',
      logo: 'https://a.espncdn.com/i/teamlogos/leagues/500/nfl.png',
      name: 'National Football League',
      sport: 'football'
    },   
    {
      id: 'nhl',
      league: 'nhl',
      logo: 'https://a.espncdn.com/i/teamlogos/leagues/500/nhl.png',
      name: 'National Hockey League',
      sport: 'hockey'
    },
    {
      id: 'nwsl',
      league: 'usa.nwsl',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2323.png',
      name: 'National Women\'s Soccer League',
      sport: 'soccer'
    },
    {
      id: 'par',
      league: 'par.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1892.png',
      name: 'Paraguayan Primera Division',
      sport: 'soccer'
    },
    {
      id: 'per',
      league: 'per.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1813.png',
      name: 'Peruvian Liga 1',
      sport: 'soccer'
    },
    {
      id: 'por',
      league: 'por.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/14.png',
      name: 'Portuguese Primeira Liga',
      sport: 'soccer'
    },
    {
      id: 'rus',
      league: 'rus.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/106.png',
      name: 'Russian Premier League',
      sport: 'soccer'
    },
    {
      id: 'slv',
      league: 'slv.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2244.png',
      name: 'Salvadoran Primera Division',
      sport: 'soccer'
    },
    {
      id: 'sco',
      league: 'sco.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/45.png',
      name: 'Scottish Premiership',
      sport: 'soccer'
    },
    {
      id: 'sgp',
      league: 'sgp.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2338.png',
      name: 'Singaporean Premier League',
      sport: 'soccer'
    },
    {
      id: 'esp',
      league: 'esp.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/15.png',
      name: 'Spanish La Liga',
      sport: 'soccer'
    },
    {
      id: 'swe',
      league: 'swe.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/16.png',
      name: 'Swedish Allsvenskan',
      sport: 'soccer'
    },
    {
      id: 'sui',
      league: 'sui.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/17.png',
      name: 'Swiss Super League',
      sport: 'soccer'
    },
    {
      id: 'tha',
      league: 'tha.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2341.png',
      name: 'Thai League 1',
      sport: 'soccer'
    },
    {
      id: 'uru',
      league: 'uru.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1592.png',
      name: 'Uruguayan Primera Division',
      sport: 'soccer'
    },
    {
      id: 'ven',
      league: 'ven.1',
      logo: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1947.png',
      name: 'Venezuelan Primera Division',
      sport: 'soccer'
    },
  ];
  
  currentLeague: SportsLeague | null;

  constructor(private http: HttpClient) { }

  getCurrentLeague(sport: string, league: string) {
    return this.leagues.find(l => l.sport === sport && l.league === league);
  }

  getLeaguesBySport(sport: string) {
    if (sport === 'all') {
      return this.leagues;
    }

    return this.leagues.filter(league => league.sport === sport);
  }

  getNews(sport: string, league: string): Observable<News[]> {
    return this.http.get<NewsResponse>(`${this.apiUrl}/${sport}/${league}/news`).pipe(
      map(response => response.articles)
    );
  }

  getTeams(sport: string, league: string): Observable<Team[]> {
    return this.http.get<TeamResponse>(`${this.apiUrl}/${sport}/${league}/teams`).pipe(
      map(response => response.sports[0].leagues[0].teams.map(team => team.team))
    );
  }
  
}
