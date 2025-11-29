import { IsInt } from 'class-validator';

export class CreateMisPlataformaDto {
  @IsInt()
  usuariosId: number;

  @IsInt()
  plataformaId: number;
}