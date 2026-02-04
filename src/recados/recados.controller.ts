import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query, ParseIntPipe } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.recadosService.findAll(paginationDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.recadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRecadoDto: UpdateRecadoDto) {
    return this.recadosService.update(+id, updateRecadoDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.recadosService.remove(+id);
  }
}
