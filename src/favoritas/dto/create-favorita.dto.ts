import { IsInt, Min } from 'class-validator';

export class CreateFavoritaDto {
  @IsInt()
  usuarioId: number;

  @IsInt()
  peliculaId: number;

  @IsInt()
  @Min(0)
  puntuacion: number;
}