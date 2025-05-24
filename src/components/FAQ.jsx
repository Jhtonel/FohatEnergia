
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para instalar um sistema de energia solar?",
      answer: "O tempo de instalação varia conforme o tamanho do sistema, mas geralmente leva de 2 a 5 dias para residências e de 1 a 3 semanas para empresas. Após a instalação, é necessário aguardar a aprovação da concessionária de energia, que pode levar de 15 a 45 dias."
    },
    {
      question: "Qual é o retorno do investimento em energia solar?",
      answer: "O retorno do investimento (payback) em energia solar varia de 3 a 6 anos, dependendo do consumo de energia, da tarifa da concessionária e do tamanho do sistema instalado. Considerando que os equipamentos têm vida útil de mais de 25 anos, o retorno financeiro é extremamente vantajoso."
    },
    {
      question: "Preciso fazer alguma manutenção no sistema?",
      answer: "A manutenção do sistema solar é simples e de baixo custo. Recomendamos uma limpeza dos painéis a cada 6 meses para manter a eficiência máxima. Além disso, oferecemos planos de manutenção preventiva que incluem verificações periódicas do sistema para garantir seu perfeito funcionamento."
    },
    {
      question: "O que acontece em dias nublados ou chuvosos?",
      answer: "Em dias nublados ou chuvosos, o sistema continua gerando energia, porém com eficiência reduzida. O dimensionamento do sistema já leva em consideração essas variações climáticas ao longo do ano. Além disso, como você permanece conectado à rede elétrica, nos períodos de baixa geração, você utiliza a energia da concessionária normalmente."
    },
    {
      question: "Posso instalar energia solar em apartamentos?",
      answer: "Sim, é possível instalar energia solar em apartamentos através do modelo de geração compartilhada ou condomínio solar. Neste caso, os painéis são instalados em um local remoto e a energia gerada é creditada na sua conta de luz. Também é possível implementar projetos para áreas comuns de condomínios, reduzindo a taxa condominial."
    },
    {
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Oferecemos diversas opções de pagamento, incluindo à vista com desconto, parcelamento em até 120 vezes através de financiamento bancário, consórcio de energia solar e parcelamentos no cartão de crédito. Nossa equipe financeira pode ajudar a encontrar a melhor opção para o seu orçamento."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Perguntas Frequentes
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dúvidas sobre <span className="gradient-text">Energia Solar</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
                <AccordionItem value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
                  <AccordionTrigger className="px-6 text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-600">
                    {faq.answer}
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
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato com nossa equipe.
          </p>
          <a 
            href="#contact" 
            className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
