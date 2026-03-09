import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Formulario, FormularioDocument } from './schemas/formulario.schema';
import { EmailService } from '../email/email.service';

@Injectable()
export class FormulariosService {
  constructor(
    @InjectModel(Formulario.name) private model: Model<FormularioDocument>,
    private emailService: EmailService,
  ) {}

  async create(dto: CreateFormularioDto) {
    const doc = new this.model(dto);
    const saved = await doc.save();

    await Promise.allSettled([
      this.emailService.sendFormularioConfirmation(saved),
      this.emailService.sendAdminNotification(saved),
    ]);

    return saved;
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
}
