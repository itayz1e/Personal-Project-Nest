import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersService } from './characters/characters.service';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [CharactersModule],
  controllers: [AppController],
  providers: [AppService, CharactersService],
})
export class AppModule {}