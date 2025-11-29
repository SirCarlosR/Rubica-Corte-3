import { Controller, Get, Post, Body, Param, Put, ParseIntPipe } from '@nestjs/common';
import { PlataformasService } from './plataformas.service';
import { CreatePlataformaDto } from './dto/create-plataforma.dto';
import { UpdatePlataformaDto } from './dto/update-plataforma.dto';

@Controller('plataformas')
export class PlataformasController {
  constructor(private readonly plataformasService: PlataformasService) {}

  @Post()
  create(@Body() dto: CreatePlataformaDto) {
    return this.plataformasService.create(dto);
  }

  @Get()
  findAll() {
    return this.plataformasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plataformasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePlataformaDto) {
    return this.plataformasService.update(id, dto);
  }
}
