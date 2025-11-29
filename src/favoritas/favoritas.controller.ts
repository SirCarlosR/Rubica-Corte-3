import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FavoritasService } from './favoritas.service';
import { CreateFavoritaDto } from './dto/create-favorita.dto';
import { UpdateFavoritaDto } from './dto/update-favorita.dto';

@Controller('favoritas')
export class FavoritasController {
  constructor(private readonly favoritasService: FavoritasService) {}

  @Post()
  create(@Body() dto: CreateFavoritaDto) {
    return this.favoritasService.create(dto);
  }

  @Get()
  findAll() {
    return this.favoritasService.findAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.favoritasService.remove(id);
  }
}
