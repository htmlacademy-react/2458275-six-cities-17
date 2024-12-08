import {Comment} from '../types/comments-types';

import {AVATAR_URL} from '../consts';

export const comments: Comment[] = [
  {
    'id': '5eddee8f-811e-4a4c-8494-edc8ae82f63c',
    'comment': 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    'date': '2024-11-12T21:00:00.743Z',
    'rating': 4,
    'user': {
      'name': 'Mollie',
      'avatarUrl': `${AVATAR_URL}?rnd=${Math.random()}`,
      'isPro': false
    }
  },
  {
    'id': '5eddee8f-811e-4a4c-8494-edc8ae82f63c',
    'comment': 'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    'date': '2024-11-12T21:00:00.743Z',
    'rating': 4,
    'user': {
      'name': 'Mollie',
      'avatarUrl': `${AVATAR_URL}?rnd=${Math.random()}`,
      'isPro': false
    }
  },
  {
    'id': 'cec89975-93bb-45a3-94e2-956495e4082e',
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2024-11-09T21:00:00.744Z',
    'rating': 4,
    'user': {
      'name': 'Jack',
      'avatarUrl': `${AVATAR_URL}?rnd=${Math.random()}`,
      'isPro': true
    }
  },
  {
    'id': '0cc5beca-46e8-43c2-a949-3d76e7d30243',
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2024-11-08T21:00:00.744Z',
    'rating': 4,
    'user': {
      'name': 'Mollie',
      'avatarUrl': `${AVATAR_URL}?rnd=${Math.random()}`,
      'isPro': true
    }
  },
  {
    'id': '61db9217-1209-4048-a2fe-e95af7bd56f3',
    'comment': 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    'date': '2024-11-07T21:00:00.744Z',
    'rating': 4,
    'user': {
      'name': 'Kendall',
      'avatarUrl': `${AVATAR_URL}?rnd=${Math.random()}`,
      'isPro': true
    }
  }
];
