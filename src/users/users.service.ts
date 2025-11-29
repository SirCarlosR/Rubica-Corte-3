import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(nombre: string, email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    return this.prisma.usuarios.create({
      data: {
        nombre,
        email,
        password: hash,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
  }
}