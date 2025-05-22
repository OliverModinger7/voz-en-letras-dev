import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FormulariosService } from './formularios.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';

@Controller('formularios')
export class FormulariosController {
  constructor(private readonly formulariosService: FormulariosService) {}

  @Post()
  async create(@Body() dto: CreateFormularioDto) {
    try {
      return await this.formulariosService.create(dto);
    } catch (error) {
      throw new HttpException(
        { message: 'Error al crear el formulario', error: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

}
