import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Leaf, Clock, Shield, BarChart } from "lucide-react";

const openLeadsterChat = () => {
  const avatar = document.querySelector('.nld-avatar');
  if (avatar) avatar.click();
};

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Economia Imediata",
      description: "Reduza sua conta de luz em até 95% logo no primeiro mês após a instalação."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Energia Limpa",
      description: "Contribua para um planeta mais sustentável utilizando energia 100% renovável."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Valorização Imobiliária",
      description: "Imóveis com sistema de energia solar têm valorização de até 20% no mercado."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Longa Duração",
      description: "Nossos painéis solares têm vida útil de até 40 anos com alta eficiência."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Garantia Estendida",
      description: "Até 30 anos de garantia dos equipamentos instalados."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Independência Energética",
      description: "Proteja-se contra aumentos na tarifa de energia e eventuais crises no setor."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Benefícios
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Vantagens da <span className="text-gradient">Energia Solar</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto"
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
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-6 p-4 rounded-full bg-primary/10 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">{benefit.title}</h3>
              <p className="text-text-dark/90 font-medium">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 p-8 rounded-xl bg-primary shadow-lg text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Pronto para economizar?</h3>
          <p className="mb-6 max-w-2xl mx-auto font-medium">
            Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar.
            Nossos consultores estão prontos para ajudar você a encontrar a melhor solução.
          </p>
          <button 
            onClick={openLeadsterChat} 
            className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-primary-light hover:text-white transition-all shadow-lg hover:shadow-xl"
          >
            Fazer Simulação Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
