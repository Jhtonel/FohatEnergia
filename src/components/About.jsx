import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas equipamentos de alta performance com garantia estendida."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Equipe Certificada",
      description: "Profissionais treinados e certificados para garantir a melhor instalação."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Retorno Rápido",
      description: "Seu investimento tem retorno garantido em até 5 anos, com economia imediata."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre Nós
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Por que escolher a <span className="text-gradient">Fohat Energia</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Somos especialistas em transformar a energia do sol em economia para sua casa ou empresa, garantindo qualidade e eficiência.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">{feature.title}</h3>
              <p className="text-text-dark/90 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img alt="Técnicos instalando painéis solares" className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1682341847717-ce25b56f08ed" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-text-primary">Compromisso com a excelência</h3>
            <p className="text-text-dark/90 font-medium mb-6">
              Nossa missão é democratizar o acesso à energia solar no Brasil, oferecendo soluções personalizadas 
              que se adaptam às necessidades e orçamento de cada cliente.
            </p>
            
            <ul className="space-y-4">
              {[
                "Economia média de 95% na conta de energia",
                "Suporte técnico especializado 24/7",
                "Garantia de 25 á 30 anos dos equipamentos",
                "Financiamento facilitado em até 120 meses"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-text-dark/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
