import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendFormularioConfirmation(formulario: any) {
    try {
      await this.mailerService.sendMail({
        to: formulario.email,
        subject: 'Confirmación de tu solicitud - Voz en Letras',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1C4645;">¡Hola ${formulario.nombre}!</h2>
            <p>Hemos recibido tu solicitud correctamente.</p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #367C7A;">Detalles de tu solicitud:</h3>
              <p><strong>Plan:</strong> ${formulario.plan}</p>
              ${formulario.servicioExtra ? `<p><strong>Servicio Extra:</strong> ${formulario.servicioExtra}</p>` : ''}
              ${formulario.empresa ? `<p><strong>Empresa:</strong> ${formulario.empresa}</p>` : ''}
              <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-CL')}</p>
            </div>
            
            <p>Nos pondremos en contacto contigo pronto para confirmar los detalles y proceder con tu solicitud.</p>
            <p style="color: #666; font-size: 14px;">Si tienes dudas, contacta a: <strong>contacto@vozenletras.cl</strong></p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="text-align: center; color: #999; font-size: 12px;">
              © 2024 Voz en Letras - Todos los derechos reservados
            </p>
          </div>
        `,
      });
      console.log(`✅ Email de confirmación enviado a ${formulario.email}`);
    } catch (error) {
      console.error('❌ Error al enviar email de confirmación:', error);
      throw error;
    }
  }

  async sendAdminNotification(formulario: any) {
    try {
      await this.mailerService.sendMail({
        to: 'modingeroliver@gmail.com',
        subject: `📋 Nueva solicitud de cotización - ${formulario.nombre}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1C4645;">Nueva solicitud recibida</h2>
            
            <div style="background-color: #f0f0f0; padding: 15px; border-left: 4px solid #367C7A;">
              <p><strong>Nombre:</strong> ${formulario.nombre}</p>
              <p><strong>Email:</strong> ${formulario.email}</p>
              <p><strong>Teléfono:</strong> ${formulario.telefono || 'No proporcionado'}</p>
              <p><strong>Empresa:</strong> ${formulario.empresa || 'No proporcionada'}</p>
              <p><strong>Plan seleccionado:</strong> ${formulario.plan}</p>
              <p><strong>Servicio Extra:</strong> ${formulario.servicioExtra || 'Ninguno'}</p>
            </div>
            
            <h3>Detalles adicionales:</h3>
            <p>${formulario.detalles || 'Sin detalles adicionales'}</p>
            
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              Fecha: ${new Date().toLocaleString('es-CL')}
            </p>
          </div>
        `,
      });
      console.log(`✅ Notificación admin enviada`);
    } catch (error) {
      console.error('❌ Error al enviar notificación al admin:', error);
    }
  }
}