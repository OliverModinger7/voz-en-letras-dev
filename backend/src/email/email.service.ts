import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

const BASE_STYLES = `
  body { margin: 0; padding: 0; background-color: #f4f4f5; }
  * { box-sizing: border-box; }
`;

function emailWrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${BASE_STYLES}</style>
</head>
<body>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#1C4645; padding: 32px 40px; text-align:center;">
              <p style="margin:0; font-family:Georgia, serif; font-size:24px; font-weight:bold; color:#ffffff; letter-spacing:1px;">
                Voz en Letras
              </p>
              <p style="margin:6px 0 0; font-family:Arial, sans-serif; font-size:13px; color:#a8c8c7; letter-spacing:2px; text-transform:uppercase;">
                Servicios de transcripción profesionales
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 40px 40px 32px;">
              ${content}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#f9f9f9; border-top: 1px solid #e5e7eb; padding: 24px 40px; text-align:center;">
              <p style="margin:0; font-family:Arial, sans-serif; font-size:12px; color:#9ca3af;">
                Si tienes dudas escribenos a
                <a href="mailto:contacto@vozenletras.cl" style="color:#367C7A; text-decoration:none;">contacto@vozenletras.cl</a>
              </p>
              <p style="margin:8px 0 0; font-family:Arial, sans-serif; font-size:11px; color:#d1d5db;">
                © ${new Date().getFullYear()} Voz en Letras · Todos los derechos reservados
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function dataRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 10px 16px; font-family:Arial,sans-serif; font-size:14px; color:#6b7280; width:160px; vertical-align:top;">${label}</td>
      <td style="padding: 10px 16px; font-family:Arial,sans-serif; font-size:14px; color:#111827; vertical-align:top;"><strong>${value}</strong></td>
    </tr>`;
}

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendFormularioConfirmation(formulario: any) {
    const fecha = new Date().toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' });

    const rows = [
      dataRow('Plan', formulario.plan),
      formulario.servicioExtra ? dataRow('Servicio extra', formulario.servicioExtra) : '',
      formulario.empresa ? dataRow('Empresa', formulario.empresa) : '',
      dataRow('Fecha', fecha),
    ].join('');

    const content = `
      <h1 style="margin:0 0 8px; font-family:Georgia,serif; font-size:26px; color:#1C4645;">
        ¡Hola, ${formulario.nombre}!
      </h1>
      <p style="margin:0 0 24px; font-family:Arial,sans-serif; font-size:15px; color:#4b5563; line-height:1.6;">
        Recibimos tu solicitud correctamente. En breve nos pondremos en contacto para confirmar los detalles y dar inicio a tu proyecto.
      </p>

      <p style="margin:0 0 12px; font-family:Arial,sans-serif; font-size:13px; font-weight:bold; color:#367C7A; text-transform:uppercase; letter-spacing:1px;">
        Resumen de tu solicitud
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb; border-radius:6px; overflow:hidden;">
        ${rows}
      </table>

      <div style="margin: 32px 0 0; background-color:#f0faf9; border-left: 4px solid #367C7A; padding: 16px 20px; border-radius: 0 6px 6px 0;">
        <p style="margin:0; font-family:Arial,sans-serif; font-size:14px; color:#1C4645; line-height:1.6;">
          Nuestro equipo revisará tu solicitud y te responderá dentro de las próximas <strong>24 a 48 horas hábiles</strong>.
        </p>
      </div>
    `;

    try {
      await this.mailerService.sendMail({
        to: formulario.email,
        subject: 'Confirmación de tu solicitud · Voz en Letras',
        html: emailWrapper(content),
      });
      console.log(`✅ Email de confirmación enviado a ${formulario.email}`);
    } catch (error) {
      console.error('❌ Error al enviar email de confirmación:', error);
      throw error;
    }
  }

  async sendAdminNotification(formulario: any) {
    const fecha = new Date().toLocaleString('es-CL', { dateStyle: 'long', timeStyle: 'short' });

    const rows = [
      dataRow('Nombre', formulario.nombre),
      dataRow('Email', formulario.email),
      dataRow('Teléfono', formulario.telefono || 'No proporcionado'),
      dataRow('Empresa', formulario.empresa || 'No proporcionada'),
      dataRow('Plan', formulario.plan),
      dataRow('Servicio extra', formulario.servicioExtra || 'Ninguno'),
      dataRow('Fecha', fecha),
    ].join('');

    const content = `
      <div style="display:inline-block; background-color:#fef3c7; border:1px solid #f59e0b; border-radius:4px; padding:4px 12px; margin-bottom:20px;">
        <p style="margin:0; font-family:Arial,sans-serif; font-size:12px; font-weight:bold; color:#92400e; text-transform:uppercase; letter-spacing:1px;">
          Nueva solicitud recibida
        </p>
      </div>

      <h1 style="margin:0 0 24px; font-family:Georgia,serif; font-size:22px; color:#1C4645;">
        ${formulario.nombre} solicitó una cotización
      </h1>

      <p style="margin:0 0 12px; font-family:Arial,sans-serif; font-size:13px; font-weight:bold; color:#367C7A; text-transform:uppercase; letter-spacing:1px;">
        Datos del cliente
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb; border-radius:6px; overflow:hidden; margin-bottom:28px;">
        ${rows}
      </table>

      ${formulario.detalles ? `
        <p style="margin:0 0 8px; font-family:Arial,sans-serif; font-size:13px; font-weight:bold; color:#367C7A; text-transform:uppercase; letter-spacing:1px;">
          Detalles adicionales
        </p>
        <div style="background-color:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:16px 20px;">
          <p style="margin:0; font-family:Arial,sans-serif; font-size:14px; color:#374151; line-height:1.7;">
            ${formulario.detalles}
          </p>
        </div>
      ` : ''}
    `;

    try {
      await this.mailerService.sendMail({
        to: 'modingeroliver@gmail.com',
        subject: `Nueva solicitud · ${formulario.nombre} — ${formulario.plan}`,
        html: emailWrapper(content),
      });
      console.log(`✅ Notificación admin enviada`);
    } catch (error) {
      console.error('❌ Error al enviar notificación al admin:', error);
    }
  }
}