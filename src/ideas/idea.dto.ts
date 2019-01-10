import { IsString } from 'class-validator';

export class IdeaDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}