import { IsNotEmpty, IsInt } from 'class-validator';

export class CreatePeliculaDto {
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  descripcion: string;

  @IsInt()
  año: number;

  @IsNotEmpty()
  genero: string;

  @IsNotEmpty()
  imagen: string;

  @IsInt()
  plataformaId: number;
}