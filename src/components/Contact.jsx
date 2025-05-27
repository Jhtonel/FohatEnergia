import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";


const Contact = () => {
 

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone",
      details: "(12) 93300-9279",
      link: "https://api.whatsapp.com/send/?phone=5512933009279"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "comercial@fohatenergia.com",
      link: "mailto:comercial@fohatenergia.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
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
        <svg className="h-5 w-5 text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.5v-2.88h2V9.5c0-2 1.2-3.12 3-3.12.87 0 1.78.15 1.78.15v1.95h-1c-.99 0-1.3.62-1.3 1.25v1.5h2.22l-.35 2.88h-1.87v6.99A10 10 0 0022 12z" />
        </svg>
      ),
    },
    {
      name: "instagram",
      href: "https://instagram.com/fohatenergia",
      icon: (
        <svg className="h-5 w-5 text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.1.3 2.6.5.6.2 1 .5 1.4.9s.7.8.9 1.4c.2.5.4 1.3.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.1-.5 2.6-.2.6-.5 1-.9 1.4s-.8.7-1.4.9c-.5.2-1.3.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.1-.3-2.6-.5-.6-.2-1-.5-1.4-.9s-.7-.8-.9-1.4c-.2-.5-.4-1.3-.5-2.6-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.1.5-2.6.2-.6.5-1 .9-1.4s.8-.7 1.4-.9c.5-.2 1.3-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.3a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.8a4.7 4.7 0 100 9.4 4.7 4.7 0 000-9.4zm5.6-2.5a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" />
        </svg>
      ),
    },
    {
      name: "whatsapp",
      href: "https://api.whatsapp.com/send/?phone=5512933009279",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" fill="#000000">
          <path d="M25 2C12.309 2 2 12.31 2 25c0 4.079 1.119 7.886 2.984 11.209L2.037 46.73a1 1 0 001.203 1.24l10.97-2.719C17.435 46.973 21.093 48 25 48c12.691 0 23-10.31 23-23S37.691 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21c-3.722 0-7.208-0.97-10.238-2.666a1 1 0 00-.729-.098L4.426 45.617 7.002 36.426a1 1 0 00-.1-.78C5.061 32.524 4 28.89 4 25c0-11.61 9.39-21 21-21zm-8.357 9c-.641 0-1.557.238-2.309 1.049-.451.487-2.334 2.321-2.334 5.545 0 3.361 2.331 6.262 2.613 6.634.027.035.411.592.924 1.26.513.668 1.231 1.545 2.133 2.494 1.803 1.899 4.338 4.094 7.486 5.436 1.45.617 2.593.99 3.46 1.262 1.605.504 3.067.428 4.165.266.823-.121 1.727-.516 2.622-1.082.894-.566 1.771-1.27 2.158-2.34.277-.767.418-1.476.469-2.059.025-.291.028-.549.01-.787-.019-.238.001-.421-.221-.785-.466-.764-.993-.784-1.543-1.056-.305-.151-1.175-.576-2.048-.992-.871-.415-1.627-.783-2.092-.949-.294-.105-.652-.257-1.17-.198-.517.059-1.028.432-1.326.873-.282.418-1.417 1.758-1.763 2.152-.005-.003.025.011-.111-.057-.428-.212-.952-.392-1.727-.801-.775-.409-1.744-1.013-2.805-1.948-1.579-1.39-2.685-3.135-3.033-3.721.023-.028-.003.006.047-.043.357-.353.673-.772.94-1.08.379-.436.546-.82.727-1.18.361-.716.16-1.503-.049-1.918 0 .001-.127-.28-.264-.604s-.313-.751-.5-1.2c-.375-.898-.793-1.906-1.041-2.496-.293-.695-.689-1.196-1.207-1.438-.518-.242-.975-.173-.994-.174a21.17 21.17 0 00-1.179-.022zm0 2c.385 0 .765.005 1.083.02.327.016.307.017.244-.012-.064-.03.023-.039.209.403.243.578.663 1.59 1.038 2.49.188.45.364.872.504 1.204.14.332.216.517.305.693l.002.002.002.002c.087.17.08.06.05.12-.211.419-.24.522-.454.768-.325.374-.656.791-.832.964-.154.151-.431.386-.604.846-.173.461-.092 1.093.186 1.565.37.628 1.589 2.613 3.484 4.281 1.194 1.052 2.306 1.748 3.194 2.216.888.468 1.611.741 1.773.821.384.19.804.338 1.292.28.488-.059.909-.355 1.177-.658.357-.404 1.417-1.615 1.926-2.361.022.008.015.002.184.063l.002.002.002.002c.078.027 1.045.46 1.907.871.862.41 1.737.837 2.021.978.41.203.604.335.654.336.003.088.006.183-.007.328-.035.402-.143.958-.358 1.553-.105.292-.653.893-1.345 1.33-.692.438-1.534.747-1.846.793-.937.138-2.05.188-3.273-.195-.848-.266-1.905-.611-3.274-1.194-2.775-1.184-5.134-3.198-6.819-4.973-.842-.887-1.517-1.713-1.998-2.338-.479-.624-.688-.948-.863-1.178l-.002-.002c-.31-.41-2.207-3.05-2.207-5.428 0-2.516 1.169-3.502 1.801-4.184.332-.357.695-.41.842-.41z" />
        </svg>


      ),
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contato
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fale com a <span className="text-gradient">Fohat Energia</span>
          </motion.h2>
          <motion.p
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto"
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
            <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">Informações de contato</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-text-dark/90 hover:text-primary transition-colors font-medium"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-text-primary mb-4">Horário de atendimento</h4>
                <p className="text-text-dark/90 font-medium">Segunda a Sexta: 8h às 18h</p>
                <p className="text-text-dark/90 font-medium">Sábado: 9h às 13h</p>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-text-primary mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
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
