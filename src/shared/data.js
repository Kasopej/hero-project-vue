import axios from 'axios';
import { format, parseISO } from 'date-fns';
import { inputDateFormat } from './constants';

let getHeroes = async function(){
  const response = await axios.get('api/heroes.json');
  const heroesData = response.data.map((h) => {
    h.originDate = format(parseISO(h.originDate), inputDateFormat);
    return h;
  });
  console.log(`formatted heroes data: ${heroesData}`);
  return heroesData;
}

export const data = {
  getHeroes,
}