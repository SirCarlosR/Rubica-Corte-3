import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

@Injectable()
export class PeliculasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePeliculaDto) {
    return this.prisma.peliculas.create({ data: dto as any });
  }

  findAll() {
    return this.prisma.peliculas.findMany({ include: { plataforma: true, Favoritas: true } });
  }

  async findOne(id: number) {
    const p = await this.prisma.peliculas.findUnique({ where: { id }, include: { plataforma: true, Favoritas: true } });
    if (!p) throw new NotFoundException('Película no encontrada');
    return p;
  }

  findByPlataforma(plataformaId: number) {
    return this.prisma.peliculas.findMany({
      where: { plataformaId },
      include: { plataforma: true },
    });
  }

  findByGenero(genero: string) {
    return this.prisma.peliculas.findMany({
      where: { genero: genero.toLowerCase() },
      include: { plataforma: true },
    });
  }

}
