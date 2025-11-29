import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFavoritaDto } from './dto/create-favorita.dto';
import { UpdateFavoritaDto } from './dto/update-favorita.dto';

@Injectable()
export class FavoritasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateFavoritaDto) {
    return this.prisma.favoritas.create({ data: dto as any });
  }

  findAll() {
    return this.prisma.favoritas.findMany({ include: { usuario: true, pelicula: true } });
  }

  remove(id: number) {
    return this.prisma.favoritas.delete({ where: { id } });
  }


}