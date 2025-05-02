import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormularioDocument = Formulario & Document;

@Schema({ timestamps: true })
export class Formulario {
  @Prop({ required: true }) nombre: string;
  @Prop({ required: true }) email: string;
  @Prop() telefono?: string;
  @Prop() empresa?: string;
  @Prop({ required: true }) plan: string;
  @Prop() servicioExtra?: string;
  @Prop() detalles?: string;
}

export const FormularioSchema = SchemaFactory.createForClass(Formulario);
