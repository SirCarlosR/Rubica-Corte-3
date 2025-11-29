import { IsNotEmpty } from 'class-validator';

export class CreatePlataformaDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  imagen: string;
}
