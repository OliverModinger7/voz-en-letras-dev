import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulariosModule } from './formularios/formularios.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        envFilePath: '.env',
      }
    ),

    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb+srv://modingeroliver:Olivercolopa1@clustertst.cb6tmee.mongodb.net/voz-en-letras', {
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

    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('SMTP_HOST'),
          port: configService.get('SMTP_PORT'),
          secure: false,
          auth: {
            user: configService.get('SMTP_USER'),
            pass: configService.get('SMTP_PASSWORD'),
          },
        },
        defaults: {
          from: `"Voz en Letras" <${configService.get('SMTP_USER')}>`,
        },
      }),
    }),
    EmailModule,
    FormulariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
