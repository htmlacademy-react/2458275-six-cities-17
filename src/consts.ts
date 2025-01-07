export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
] as const;

export const Setting = {
  placeCardsCount: 5
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapTypes {
  Main = 'cities',
  Offer = 'offer',
}

export enum CardType {
  Main = 'cities',
  Offer = 'near-places',
  Favourites = 'favorites',
}

export enum SortingOption {
  Default = 'Popular',
  MinPriceFirst = 'Price: low to high',
  MaxPriceFirst = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const RATINGS = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  }
];
export const Comment = {
  MinLength: 50,
  MaxLength: 300,
  InitialState: ' ',
};

export const OfferCardCount = {
  Min: 0,
  Max: 3,
};

export const MapIconInfo = {
  iconSize: [27, 39],
  iconAnchor: [20, 40]
};

export const MapIcon = {
  Default: {
    iconUrl: 'img/pin.svg',
    MapIconInfo
  },
  Active: {
    iconUrl: 'img/pin-active.svg',
    MapIconInfo
  },
};

export const RATING_INITIAL_VALUE = 0;

