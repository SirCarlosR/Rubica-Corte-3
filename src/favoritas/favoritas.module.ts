import { Module } from '@nestjs/common';
import { FavoritasService } from './favoritas.service';
import { FavoritasController } from './favoritas.controller';

@Module({
  controllers: [FavoritasController],
  providers: [FavoritasService],
})
export class FavoritasModule {}