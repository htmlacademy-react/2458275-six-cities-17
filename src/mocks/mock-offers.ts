import {Offer} from '../types/offers-types';

export const MOCK_OFFERS: Offer[] = [
  {
    'id': '33c68a72-47cc-467b-be9e-908d63a1622d',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 333,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.2
  },
  {
    'id': '9f77671a-92bd-4de1-abd0-c6bff9daec5f',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 210,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '1066c3f3-9e2c-4951-955b-c14270449cd0',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 250,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 5
  },
  {
    'id': '8c50d287-24fc-4071-baa9-9fb572722c3b',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 291,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.4
  },
  {
    'id': '0fcfcd7c-139a-4241-9fa4-7896aed1174f',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 229,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '1f6b719e-651a-4c64-aae3-5acba7671875',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 407,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
];
