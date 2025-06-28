"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Define validation schema for form data
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Le sujet doit contenir au moins 3 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Company info for email footer
    const companyInfo = {
      name: "Deco Dari Ameublement",
      address: "449 1 SECTEUR 017960, Marrakech 40100",
      phone: "+212 611-325349",
      email: "decodariambl@gmail.com",
      website: "https://decodari.com",
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            padding: 20px 0;
            background-color: #f8f9fa;
          }
          .logo {
            max-width: 200px;
            height: auto;
          }
          .content {
            padding: 20px 0;
            border-top: 1px solid #eeeeee;
            border-bottom: 1px solid #eeeeee;
          }
          .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #666666;
          }
          .message-details {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
          }
          .field {
            margin-bottom: 10px;
          }
          .field-label {
            font-weight: bold;
            color: #41879e;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #41879e;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://i.ibb.co/d4FV7HCF/logo-black.png" alt="Deco Dari Ameublement" class="logo">
          </div>
          
          <div class="content">
            <h2>Nouveau message de contact</h2>
            <p>Vous avez reçu un nouveau message via le formulaire de contact de votre site web.</p>
            
            <div class="message-details">
              <div class="field">
                <span class="field-label">Nom:</span> ${validatedData.name}
              </div>
              <div class="field">
                <span class="field-label">Email:</span> ${validatedData.email}
              </div>
              ${
                validatedData.phone
                  ? `
              <div class="field">
                <span class="field-label">Téléphone:</span> ${validatedData.phone}
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="field-label">Sujet:</span> ${validatedData.subject}
              </div>
              <div class="field">
                <span class="field-label">Message:</span><br>
                ${validatedData.message.replace(/\n/g, "<br>")}
              </div>
            </div>
            
            <p>Vous pouvez répondre directement à cet email pour contacter ${validatedData.name}.</p>
            
            <a href="mailto:${validatedData.email}" class="button">Répondre au message</a>
          </div>
          
          <div class="footer">
            <p>
              Ce message a été envoyé via le formulaire de contact sur <a href="${companyInfo.website}">${companyInfo.website}</a>
            </p>
            <p>
              ${companyInfo.name}<br>
              ${companyInfo.address}<br>
              Téléphone: ${companyInfo.phone}<br>
              Email: ${companyInfo.email}
            </p>
            <p>© ${new Date().getFullYear()} ${companyInfo.name}. Tous droits r��servés.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Create text version for email clients that don't support HTML
    const textContent = `
      Nouveau message de contact
      
      Nom: ${validatedData.name}
      Email: ${validatedData.email}
      ${validatedData.phone ? `Téléphone: ${validatedData.phone}` : ""}
      Sujet: ${validatedData.subject}
      
      Message:
      ${validatedData.message}
      
      ---
      Ce message a été envoyé via le formulaire de contact sur ${companyInfo.website}
      
      ${companyInfo.name}
      ${companyInfo.address}
      Téléphone: ${companyInfo.phone}
      Email: ${companyInfo.email}
      
      © ${new Date().getFullYear()} ${companyInfo.name}. Tous droits réservés.
    `

    // Set up email options
    const mailOptions = {
      from: {
        name: "Deco Dari Website",
        address: process.env.EMAIL_FROM || process.env.EMAIL_USER || "noreply@decodari.com",
      },
      to: process.env.EMAIL_TO || "decodariambl@gmail.com",
      replyTo: validatedData.email,
      subject: `Nouveau message de contact: ${validatedData.subject}`,
      text: textContent,
      html: htmlContent,
      headers: {
        "X-Priority": "1", // High priority
        "X-MSMail-Priority": "High",
        Importance: "High",
        "X-Mailer": "Deco Dari Website Contact Form",
      },
    }

    // Send email to admin
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
    }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return { success: false, message: `Erreur de validation: ${errorMessages}` }
    }

    return {
      success: false,
      message: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
    }
  }
}
