import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Formulario, FormularioDocument } from './schemas/formulario.schema';

@Injectable()
export class FormulariosService {
  constructor(
    @InjectModel(Formulario.name)
    private readonly formModel: Model<FormularioDocument>,
  ) {}


  async create(dto: CreateFormularioDto) {
    const created = new this.formModel(dto);
    return created.save();
  }

  /** Devuelve todos los formularios */
  async findAll(): Promise<Formulario[]> {
    return this.formModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} formulario`;
  }

  update(id: number, updateFormularioDto: UpdateFormularioDto) {
    return `This action updates a #${id} formulario`;
  }

  remove(id: number) {
    return `This action removes a #${id} formulario`;
  }
}
