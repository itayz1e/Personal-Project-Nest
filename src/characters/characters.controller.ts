import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { FilterCharactersDto } from './dto/filter-characters.dto';


@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async getAllCharacters() {
    return this.charactersService.getAllCharacters();
  }

  @Get('filter')
  async getFilteredCharacters(@Query(new ValidationPipe({ whitelist: true, transform: true })) filters: FilterCharactersDto) {
    return this.charactersService.getFilteredCharacters(filters);
  }

  @Get(':id')
  async getCharacterById(@Param('id') id: number) {
    return this.charactersService.getCharacterById(id);
  }
}


