import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para instalar o sistema solar?",
      answer: "A instalação do sistema solar fotovoltaico geralmente leva de 2 a 5 dias, dependendo do tamanho do projeto. Todo o processo, desde a aprovação até o sistema estar funcionando, pode levar de 30 a 45 dias, incluindo as aprovações necessárias."
    },
    {
      question: "Qual é o retorno do investimento?",
      answer: "O retorno do investimento (payback) geralmente ocorre entre 3 a 5 anos, dependendo do consumo de energia e da tarifa local. Após esse período, você terá economia significativa por mais de 25 anos."
    },
    {
      question: "O sistema funciona em dias nublados?",
      answer: "Sim, o sistema continua gerando energia mesmo em dias nublados, embora com eficiência reduzida. Os painéis são projetados para captar tanto luz direta quanto difusa, garantindo geração constante."
    },
    {
      question: "Preciso fazer manutenção frequente?",
      answer: "A manutenção é simples e pouco frequente. Recomendamos uma limpeza dos painéis a cada 6 meses e uma inspeção técnica anual para garantir o máximo desempenho do sistema."
    },
    {
      question: "Como funciona em caso de queda de energia?",
      answer: "Por questões de segurança, o sistema solar se desliga automaticamente durante quedas de energia. Quando a energia da rede é restabelecida, o sistema volta a funcionar normalmente."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Perguntas Frequentes
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dúvidas sobre <span className="text-gradient">Energia Solar</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Respondemos às perguntas mais comuns sobre energia solar para ajudar você 
            a tomar a melhor decisão para sua casa ou empresa.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-lg border border-primary/10 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-primary/5 transition-colors">
                    <span className="text-text-primary font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-text-dark/90">
                    <p className="font-medium">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-dark/90 font-medium mb-4">
            Ainda tem dúvidas? Entre em contato com nossa equipe.
          </p>
          <a 
            href="#contact" 
            className="text-primary font-bold hover:text-primary-light transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
