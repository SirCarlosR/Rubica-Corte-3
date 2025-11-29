import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, Query } from '@nestjs/common';
import { MisPlataformasService } from './misplataformas.service';
import { CreateMisPlataformaDto } from './dto/create-misplataforma.dto';
import { UpdateMisPlataformaDto } from './dto/update-misplataforma.dto';

@Controller('misplataformas')
export class MisPlataformasController {
  constructor(private readonly service: MisPlataformasService) {}

  @Post()
  create(@Body() dto: CreateMisPlataformaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('usuario/:usuariosId')
  findByUsuario(@Param('usuariosId', ParseIntPipe) usuariosId: number) {
    return this.service.findByUsuario(usuariosId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMisPlataformaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
