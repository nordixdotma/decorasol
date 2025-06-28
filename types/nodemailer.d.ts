declare module "nodemailer" {
  export interface SendMailOptions {
    from?: string | { name: string; address: string }
    to?: string | string[] | { name: string; address: string } | { name: string; address: string }[]
    cc?: string | string[] | { name: string; address: string } | { name: string; address: string }[]
    bcc?: string | string[] | { name: string; address: string } | { name: string; address: string }[]
    subject?: string
    text?: string
    html?: string
    headers?: { [key: string]: string }
    attachments?: {
      filename?: string
      content?: string | Buffer
      path?: string
      href?: string
      contentType?: string
      contentDisposition?: string
      cid?: string
      encoding?: string
      headers?: { [key: string]: string }
      raw?: string
    }[]
    replyTo?: string
  }

  export interface Transporter {
    sendMail(mailOptions: SendMailOptions): Promise<any>
  }

  export function createTransport(options: any): Transporter
}
