import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Formulario, FormularioDocument } from './formulario.schema';

@Injectable()
export class FormulariosService {
  constructor(
    @InjectModel(Formulario.name) private model: Model<FormularioDocument>,
  ) {}

  create(dto: CreateFormularioDto) {
    const doc = new this.model(dto);
    return doc.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Formulario not found');
    return doc;
  }

  async update(id: string, dto: UpdateFormularioDto) {
    const doc = await this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!doc) throw new NotFoundException('Formulario not found');
    return doc;
  }

  async remove(id: string) {
    const res = await this.model.findByIdAndDelete(id).exec();
    if (!res) throw new NotFoundException('Formulario not found');
    return { deleted: true };
  }
}
