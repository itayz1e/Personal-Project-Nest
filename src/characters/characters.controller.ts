import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { FilterCharactersDto } from './dto/filter-characters.dto';


@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  // @Get()
  // async getAllCharacters() {
  //   return this.charactersService.getAllCharacters();
  // }

  // @Get('filter')
  // async getFilteredCharacters(@Query(new ValidationPipe({ whitelist: true, transform: true })) filters: FilterCharactersDto) {
  //   return this.charactersService.getFilteredCharacters(filters);
  // }

  // @Get(':id')
  // async getCharacterById(@Param('id') id: number) {
  //   return this.charactersService.getCharacterById(id);
  // }

  @Get()
  getAllCharacters() {
    return this.charactersService.getAllCharacters();
  }

  @Get(':id')
  getCharacterById(@Param('id', ParseIntPipe) id: number) {
    return this.charactersService.getCharacterById(id);
  }

  @Post()
  addCharacter(@Body() character: { name: string; status: string; species: string },) {
    return this.charactersService.addCharacter(character);
  }

  @Put(':id')
  updateCharacter( @Param('id') id: string, @Body() updatedCharacter: { name?: string; status?: string; species?: string },) {
  return this.charactersService.updateCharacter(+id, updatedCharacter);
}

@Delete(':id')
deleteCharacter(@Param('id') id: string) {
  console.log('ID received:', id);
  this.charactersService.deleteCharacter(+id);
  return { message: `Character with ID ${id} has been deleted.` };
}




}


