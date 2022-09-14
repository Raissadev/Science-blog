import { Response, Request } from "express";
import { env } from "process";

const { sendCode, verifyCode } = require("email-verification-code");

class Mail
{
    public sendMail(req: Request, res: Response): void
    {
        const data = {
            smtpInfo: {
                host: env.SMTP_HOST,
                port: env.SMTP_PORT,
                user: env.SMTP_USERNAME,
                pass: env.SMTP_PASS
            },
            company: {
                name: env.SMTP_NAME,
                email: env.SMTP_ADDRESS
            },
            mailInfo: {
                emailReceiver: req.body.email,
                subject: req.body.subject,
                html(code: any, token: any) {
                    return `Name: ${req.body.name} E-mail: ${req.body.email} Message: ${req.body.context}`;
                },
            }
        };

        sendCode(data);
        res.json("Check your email inbox.");
    }

}

export default new Mail;