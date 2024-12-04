import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';



@Injectable()

export class CharactersService {
  private readonly characters = [
    { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
    { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human' },
    { id: 3, name: 'Summer Smith', status: 'Alive', species: 'Human' },
  ];


  getAllCharacters() {
    return this.characters;
  }

  getCharacterById(id: number) {
    const character = this.characters.find((char) => char.id === id);
    if (!character) {
      throw new NotFoundException(`Character with ID ${id} not found.`);
    }
    return character;
  }

  addCharacter(character: { name: string; status: string; species: string }) {
    const newId = this.characters.length ? this.characters[this.characters.length - 1].id + 1 : 1;
    const newCharacter = { id: newId, ...character };
    this.characters.push(newCharacter);
    return newCharacter;
  }

  updateCharacter(
    id: number, updatedCharacter: { name?: string; status?: string; species?: string },) {
    const characterIndex = this.characters.findIndex((char) => char.id === id);
    if (characterIndex === -1) {
      throw new Error(`Character with ID ${id} not found.`);
    }
  
    const character = this.characters[characterIndex];
    this.characters[characterIndex] = { ...character, ...updatedCharacter };
  
    return this.characters[characterIndex];
  }

  deleteCharacter(id: number): void {
    const characterIndex = this.characters.findIndex((char) => char.id === id);
    if (characterIndex === -1) {
      throw new Error(`Character with ID ${id} not found.`);
    }
  
    this.characters.splice(characterIndex, 1);
  }
  
  


// export class CharactersService {
//   async getAllCharacters() {
//     const response = await axios.get(
//       'https://rickandmortyapi.com/api/character',
//     );
//     return response.data.results;
//   }

  // async getCharacterById(id: number) {
  //   const response = await axios.get(
  //     `https://rickandmortyapi.com/api/character/${id}`,
  //   );
  //   return response.data;
  // }

  // async getFilteredCharacters(filters: any) {
  //   let url = 'https://rickandmortyapi.com/api/character?';

  //   if (filters.name) {
  //     url += `name=${filters.name}&`;
  //   }
  //   if (filters.gender) {
  //     url += `gender=${filters.gender}&`;
  //   }
  //   if (filters.species) {
  //     url += `species=${filters.species}&`;
  //   }

  //   const response = await axios.get(url);
  //   return response.data;
  // }
}