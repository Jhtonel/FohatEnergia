
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Leaf, Clock, Shield, BarChart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-amber-500" />,
      title: "Economia Imediata",
      description: "Reduza sua conta de luz em até 95% logo no primeiro mês após a instalação."
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Energia Limpa",
      description: "Contribua para um planeta mais sustentável utilizando energia 100% renovável."
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Valorização Imobiliária",
      description: "Imóveis com sistema de energia solar têm valorização de até 20% no mercado."
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-500" />,
      title: "Longa Duração",
      description: "Nossos painéis solares têm vida útil de até 40 anos com alta eficiência."
    },
    {
      icon: <Shield className="h-10 w-10 text-red-500" />,
      title: "Garantia Estendida",
      description: "Até 30 anos de garantia dos equipamentos instalados."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-yellow-500" />,
      title: "Independência Energética",
      description: "Proteja-se contra aumentos na tarifa de energia e eventuais crises no setor."
    }
  ];
  const openLeadsterChat = () => {
      const avatar = document.querySelector('.nld-avatar');
      if (avatar) {
        avatar.click();
      } else {
        console.warn('Leadster avatar não encontrado no DOM.');
      }
    };

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Benefícios
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vantagens da <span className="gradient-text">Energia Solar</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubra por que milhares de brasileiros estão optando pela energia solar 
            e transformando a maneira como consomem energia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="feature-card bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-4 p-3 rounded-full bg-gray-50 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Pronto para economizar?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar.
            Nossos consultores estão prontos para ajudar você a encontrar a melhor solução.
          </p>
          <button onClick={openLeadsterChat} className="bg-white text-amber-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
            Fazer Simulação Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
