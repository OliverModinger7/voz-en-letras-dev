import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulariosModule } from './formularios/formularios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://modingeroliver:Olivercolopa1@clustertst.cb6tmee.mongodb.net/', {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('MongoDB is connected');
        });
        connection.on('error', (err) => {
          console.error('MongoDB connection error:', err);
        });
        return connection;
      }
    }),
    FormulariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}