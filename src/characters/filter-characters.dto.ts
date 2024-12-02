import { IsString, IsOptional, IsEnum } from 'class-validator';


enum Gender {
  Male = 'male',
  Female = 'female',
  Unknown = 'unknown',
}

export class FilterCharactersDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  species?: string;
}
