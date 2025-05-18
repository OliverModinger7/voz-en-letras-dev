import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';

@Controller('formularios')
export class FormulariosController {
  constructor(private readonly formulariosService: FormulariosService) {}

  @Post()
  async create(@Body() dto: CreateFormularioDto) {
    return this.formulariosService.create(dto);
  }

}
