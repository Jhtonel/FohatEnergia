
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Battery, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
              Energia Limpa e Renovável
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme o Sol em <span className="gradient-text">Economia</span> para sua casa
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Reduza sua conta de luz em até 95% com nossas soluções em energia solar.
              Investimento inteligente com retorno garantido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#plans"><Button className="solar-gradient text-lg py-6 px-8">
                Ver Planos <ArrowRight className="ml-2 h-5 w-5" />
              </Button> </a>
              <a href="#plans"><Button variant="outline" className="text-lg py-6 px-8 border-amber-500 text-amber-700">
                Projeto Sob Medida Gratuito
              </Button> </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500 rounded-full opacity-20 animate-pulse"></div>

              <div className="glass-card rounded-2xl overflow-hidden relative z-10">
                <img alt="Painéis solares instalados em telhado residencial" className="w-full h-auto rounded-t-2xl" src="public/House-hero.webp" />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Sun className="h-6 w-6 text-amber-500 mr-2" />
                      <span className="font-semibold">Energia Solar</span>
                    </div>
                    <span className="text-green-600 font-medium">Economize até 95%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Battery className="h-5 w-5 text-amber-500 mr-2" />
                      <span className="text-sm">Armazenamento Eficiente</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-amber-500 mr-2" />
                      <span className="text-sm">Instalação Rápida</span>
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
