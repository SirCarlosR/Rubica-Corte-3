import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUsuarioDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.usuarios.create({
      data: { nombre: dto.nombre, email: dto.email, password: hashed },
    });
    // No devolver password
    const { password, ...rest } = user;
    return rest;
  }

  async findAll() {
    return this.prisma.usuarios.findMany();
  }

  async findOne(id: number) {
    const u = await this.prisma.usuarios.findUnique({ where: { id } });
    if (!u) throw new NotFoundException('Usuario no encontrado');
    const { password, ...rest } = u;
    return rest;
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    if (dto.password) dto.password = await bcrypt.hash(dto.password, 10);
    return this.prisma.usuarios.update({
      where: { id },
      data: dto as any,
    });
  }

  async remove(id: number) {
    return this.prisma.usuarios.delete({ where: { id } });
  }

  // helper: find by email
  async findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
  }
}