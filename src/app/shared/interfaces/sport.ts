export interface League {
  abbreviation: string;
  id: string;
  name: string;
  season: {
    displayName: string;
    year: number;
  };
  shortName: string;
  slug: string;
  teams: {
    team: Team;
  }[];
  uid: string;
  year: number;
}

export interface News {
  byline?: string;
  dataSourceIdentifier: string;
  description: string;
  headline: string;
  images: {
    caption: string;
    height: number;
    name: string;
    url: string;
    width: number;
  }[];
  links: {
    web: {
      href: string;
    }
  }
  published: string;
  type: string;
}

export interface NewsResponse {
  articles: News[];
}

export interface Sport {
  id: string;
  leagues: League[];
  name: string;
  slug: string;
  uid: string;
}

export interface SportsLeague {
  id: string;
  league: string;
  logo: string;
  name: string;
  sport: string;
}

export interface Team {
  abbreviation: string;
  alternateColor: string;
  color: string;
  displayName: string;
  id: string;
  isActive: boolean;
  isAllStar: boolean;
  links: {
    href: string;
    isExternal: boolean;
    isHidden: boolean;
    isPremium: boolean;
    language: string;
    rel: string[];
    shortText: string;
    text: string;
  }[];
  logos: {
    alt: string;
    height: number;
    href: string;
    rel: string[];
    width: number;
  }[];
  name: string;
  nickname: string;
  slug: string;
  uid: string;
}

export interface TeamResponse {
  sports: Sport[];
}