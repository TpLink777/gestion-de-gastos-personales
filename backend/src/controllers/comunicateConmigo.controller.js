const { Resend } = require('resend')
require('dotenv').config()

const { validationResult } = require('express-validator')

const resend = new Resend(process.env.RESEND_API_KEY);

// envio de mensaje instantaneo para el usuario y el administrador osea YOOOOO
// se utiliza la libreria resend para enviar correos electronicos de manera instantanea
exports.comunicateConmigo = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { correo, nombre, mensaje } = req.body;

        if (!correo || !nombre || !mensaje) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }


        const { error: errorUsuario } = await resend.emails.send({
            from: 'Respuestas Instantáneas Finzoo <infofinzoo@finzoo.site>',
            to: correo,
            subject: `Nuevo mensaje de Finzoo para ${nombre}`,
            html: `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Mensaje de Finzoo</title>
                    </head>
                    <body>
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                        <td align="center">
                            <table width="600" cellpadding="20" cellspacing="0" border="0" style="border:1px solid #e0e0e0;">
                            <tr>
                                <td>
                                <h2 style="margin-top: 0;">¡Gracias por escribirnos, ${nombre}!</h2>
                                <p>Hemos recibido tu mensaje correctamente. Uno de nuestros asesores se pondrá en contacto contigo en breve.</p>

                                <hr>

                                <p><strong>Email:</strong> ${correo}</p>
                                <p><strong>Mensaje:</strong>${mensaje}</p>

                                <hr>

                                <p style="font-size: 14px; color: #666;">
                                    Este mensaje fue generado automáticamente desde el sitio web de Finzoo.<br>
                                    Si no fuiste tú quien envió este mensaje, puedes ignorarlo.
                                </p>

                                <p style="font-size: 14px; color: #666;">Atentamente,<br>El equipo de Finzoo</p>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
                    </body>
                    </html>`,
            headers: {
                'List-Unsubscribe': '<mailto:infofinzoo@finzoo.site?subject=unsubscribe>'
            }
        });

        if (errorUsuario) {
            console.error('Error al enviar el mensaje al usuario:', errorUsuario);
            return res.status(500).json({ message: 'Error al enviar el mensaje al usuario', error: errorUsuario });
        }


        const { error: errorAdmin } = await resend.emails.send({

            from: 'Respuestas para el administrador de Finzoo <stivengomez@finzoo.site>',
            to: process.env.ADMIN_EMAIL,
            subject: `Nuevo mensaje importante para el administrador de Finzoo`,
            html: `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Mensaje de Finzoo</title>
                    </head>
                    <body>
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                        <td align="center">
                            <table width="600" cellpadding="20" cellspacing="0" border="0" style="border:1px solid #e0e0e0;">
                            <tr>
                                <td>
                                <h2 style="margin-top: 0;">¡Hola mi nombre es, <span style="color: #ff477e;">${nombre}</span>!</h2>
                                <p>He enviado un mensaje importante a través del formulario de contacto de Finzoo.</p>

                                <p>Mi correo es ${correo}</p>
                                <p>Y el motivo por el cual escribo este mensaje es debido a: ${mensaje}.</p>

                                <hr>
                                
                                <hr>
                                </td>
                            </tr>
                            </table>
                        </td>
                        </tr>
                    </table>
                    </body>
                    </html>`,
            headers: {
                'List-Unsubscribe': '<mailto:infofinzoo@finzoo.site?subject=unsubscribe>'
            }
        })


        if (errorAdmin) {
            console.error('Error al enviar el mensaje al administrador:', errorAdmin);
            return res.status(500).json({ message: 'Error al enviar el mensaje al administrador', error: errorAdmin });
        }


        res.status(200).json({ message: 'Mensajes enviados con éxito' });

    } catch (error) {

        console.error('Error al enviar el mensaje informativo:', error);
        res.status(500).json({ verified: false, err: 'Error interno del servidor.' })
    }
}

