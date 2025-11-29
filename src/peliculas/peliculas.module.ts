import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService, PrismaService],
})
export class PeliculasModule {}