import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMisPlataformaDto } from './dto/create-misplataforma.dto';
import { UpdateMisPlataformaDto } from './dto/update-misplataforma.dto';

@Injectable()
export class MisPlataformasService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateMisPlataformaDto) {
    return this.prisma.misPlataformas.create({ data: dto as any });
  }

  findAll() {
    return this.prisma.misPlataformas.findMany({ include: { plataforma: true, usuario: true } });
  }

  async findOne(id: number) {
    const m = await this.prisma.misPlataformas.findUnique({ where: { id }, include: { plataforma: true, usuario: true }});
    if (!m) throw new NotFoundException('Registro no encontrado');
    return m;
  }

  update(id: number, dto: UpdateMisPlataformaDto) {
    return this.prisma.misPlataformas.update({ where: { id }, data: dto as any });
  }

  remove(id: number) {
    return this.prisma.misPlataformas.delete({ where: { id }});
  }

  findByUsuario(usuariosId: number) {
  return this.prisma.misPlataformas.findMany({
    where: { usuarioId: usuariosId },
    include: { plataforma: true },
  });
}
}