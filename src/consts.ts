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

export const MapIconInfo = {
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
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
