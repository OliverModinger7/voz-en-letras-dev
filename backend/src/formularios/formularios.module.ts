import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulariosService } from './formularios.service';
import { FormulariosController } from './formularios.controller';
import { Formulario, FormularioSchema } from './schemas/formulario.schema';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Formulario.name,
          schema: FormularioSchema,
          collection: 'formularios'
        }
      ]
    ),
    EmailModule,
  ],
  controllers: [FormulariosController],
  providers: [FormulariosService],
})
export class FormulariosModule {}
