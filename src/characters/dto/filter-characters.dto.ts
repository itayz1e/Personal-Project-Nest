import { IsString, IsOptional, IsEnum, IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

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
  @IsEnum(Gender, { message: 'Gender must be male, female, or unknown' })
  @Transform(({ value }) => value?.toLowerCase())
  gender?: Gender;

  @IsOptional()
  @IsString()
  species?: string;
}