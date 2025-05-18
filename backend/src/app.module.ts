import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulariosModule } from './formularios/formularios.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://modingeroliver:Olivercolopa1@clustertst.cb6tmee.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    FormulariosModule,
  ],
})
export class AppModule {}