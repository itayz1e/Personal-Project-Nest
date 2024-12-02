import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CharactersService {
  async getAllCharacters() {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );
    return response.data.results;
  }

  async getCharacterById(id: number) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return response.data;
  }

  async getFilteredCharacters(filters: any) {
    let url = 'https://rickandmortyapi.com/api/character?';

    if (filters.name) {
      url += `name=${filters.name}&`;
    }
    if (filters.gender) {
      url += `gender=${filters.gender}&`;
    }
    if (filters.species) {
      url += `species=${filters.species}&`;
    }

    const response = await axios.get(url);
    return response.data;
  }
}
