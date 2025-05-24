
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";


const Contact = () => {
 

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-amber-500" />,
      title: "Telefone",
      details: "(12) 93300-9279",
      link: "https://api.whatsapp.com/send/?phone=5512933009279"
    },
    {
      icon: <Mail className="h-5 w-5 text-amber-500" />,
      title: "Email",
      details: "comercial@fohatenergia.com",
      link: "mailto:comercial@fohatenergia.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-amber-500" />,
      title: "Endereço",
      details: "Av. Brig. Faria Lima, 1811 - Jardim Paulistano - São Paulo, SP",
      link: "https://g.co/kgs/4AxS4Za"
    }
  ];

  const socialLinks = [
    {
      name: "facebook",
      href: "https://facebook.com/fohatenergia",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.5v-2.88h2V9.5c0-2 1.2-3.12 3-3.12.87 0 1.78.15 1.78.15v1.95h-1c-.99 0-1.3.62-1.3 1.25v1.5h2.22l-.35 2.88h-1.87v6.99A10 10 0 0022 12z" />
        </svg>
      ),
    },
    {
      name: "instagram",
      href: "https://instagram.com/fohatenergia",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.1.3 2.6.5.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.5.4 1.3.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.1-.5 2.6-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.5.2-1.3.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.1-.3-2.6-.5-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.2-.5-.4-1.3-.5-2.6-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.1.5-2.6.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.5-.2 1.3-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.3a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.8a4.7 4.7 0 100 9.4 4.7 4.7 0 000-9.4zm5.6-2.5a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contato
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fale com a <span className="gradient-text">Fohat Energia</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Entre em contato para tirar suas dúvidas, solicitar um orçamento ou
            agendar uma visita técnica gratuita.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Informações de contato</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 rounded-full bg-amber-50 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-amber-500 transition-colors"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Horário de atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 9h às 13h</p>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors"
                      aria-label={`Visite nosso ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
