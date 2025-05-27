import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Battery, Zap } from "lucide-react";

const openLeadsterChat = () => {
  const avatar = document.querySelector('.nld-avatar');
  if (avatar) avatar.click();
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary/5">
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4">
              Energia Limpa e Renovável
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-primary">
              Transforme o Sol em <span className="text-gradient">Economia</span> para sua casa
            </h1>
            <p className="text-lg text-text-dark/90 mb-8 max-w-lg font-medium">
              Reduza sua conta de luz em até 95% com nossas soluções em energia solar.
              Investimento inteligente com retorno garantido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#plans">
                <Button className="primary-gradient text-text-white text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-shadow">
                  Ver Planos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button 
                onClick={openLeadsterChat} 
                variant="outline" 
                className="text-lg py-6 px-8 border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-shadow"
              >
                Projeto Sob Medida Gratuito
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-30 animate-pulse"></div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-primary/20">
                <img 
                  alt="Painéis solares instalados em telhado residencial" 
                  className="w-full h-auto rounded-t-2xl" 
                  src="/House-hero.webp" 
                />

                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Sun className="h-6 w-6 text-secondary mr-2" />
                      <span className="font-bold text-text-primary">Energia Solar</span>
                    </div>
                    <span className="text-primary font-bold">Economize até 95%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-secondary mr-2" />
                      <span className="text-sm font-medium text-text-dark">Armazenamento Eficiente</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-secondary mr-2" />
                      <span className="text-sm font-medium text-text-dark">Instalação Rápida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
