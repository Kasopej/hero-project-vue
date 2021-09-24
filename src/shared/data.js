import { format } from 'date-fns';

import { inputDateFormat } from './constants';

export const ourHeroes = [
  {
    id: 10,
    firstName: 'Ella',
    lastName: 'Papa',
    capeCounter: 1,
    originDate: format(new Date(1996, 5, 1), inputDateFormat),
    description: 'fashionista',
  },
  {
    id: 20,
    firstName: 'Madelyn',
    lastName: 'Papa',
    capeCounter: 3,
    originDate: format(new Date(1998, 7, 1), inputDateFormat),
    description: 'the cat whisperer',
  },
  {
    id: 30,
    firstName: 'Haley',
    lastName: 'Papa',
    capeCounter: 2,
    originDate: format(new Date(1999, 8, 1), inputDateFormat),
    description: 'pen wielder',
  },
  {
    id: 40,
    firstName: 'Landon',
    lastName: 'Papa',
    capeCounter: 0,
    originDate: format(new Date(2000, 9, 1), inputDateFormat),
    description: 'arc trooper',
  },
  {
    id: 45,
    firstName: 'Johnson',
    lastName: 'Papa',
    capeCounter: 10,
    originDate: format(new Date(2005, 7, 12), inputDateFormat),
    description: 'gen zee',
  },
  {
    id: 35,
    firstName: 'Jamal',
    lastName: 'Papa',
    capeCounter: 0,
    originDate: format(new Date(1998, 8, 4), inputDateFormat),
    description: 'fire breather',
  },
];