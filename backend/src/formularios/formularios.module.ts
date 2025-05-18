import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Formulario, FormularioSchema } from './formulario.schema';
import { FormulariosController } from './formularios.controller';
import { FormulariosService } from './formularios.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Formulario.name, schema: FormularioSchema }]),
  ],
  controllers: [FormulariosController],
  providers: [FormulariosService],
})
export class FormulariosModule {}