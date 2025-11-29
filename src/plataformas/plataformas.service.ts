import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlataformaDto } from './dto/create-plataforma.dto';
import { UpdatePlataformaDto } from './dto/update-plataforma.dto';

@Injectable()
export class PlataformasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePlataformaDto) {
    return this.prisma.plataformas.create({ data: dto });
  }

  findAll() {
    return this.prisma.plataformas.findMany({ include: { Peliculas: true } });
  }

  async findOne(id: number) {
    const p = await this.prisma.plataformas.findUnique({ where: { id }, include: { Peliculas: true } });
    if (!p) throw new NotFoundException('Plataforma no encontrada');
    return p;
  }

  update(id: number, dto: UpdatePlataformaDto) {
    return this.prisma.plataformas.update({ where: { id }, data: dto as any });
  }
}