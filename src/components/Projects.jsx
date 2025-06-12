import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const allProjects = [
    { 
      name: "Residências", 
      description: "Soluções personalizadas para residências unifamiliares e condomínios", 
      image: "/images/residencial.webp",
      features: [
        { included: true, text: "Sistema dimensionado para seu consumo" },
        { included: true, text: "Economia de até 95% na conta" },
        { included: true, text: "Instalação profissional" },
        { included: true, text: "Monitoramento via aplicativo" },
        { included: true, text: "Garantia de 25 anos" }
      ]
    },
    { 
      name: "Condomínios", 
      description: "Projetos integrados para condomínios residenciais e comerciais", 
      image: "/images/condominio.webp",
      features: [
        { included: true, text: "Sistema centralizado" },
        { included: true, text: "Economia coletiva" },
        { included: true, text: "Instalação em áreas comuns" },
        { included: true, text: "Monitoramento compartilhado" },
        { included: true, text: "Manutenção programada" }
      ]
    },
    { 
      name: "Comércios", 
      description: "Soluções para lojas, restaurantes e estabelecimentos comerciais", 
      image: "/images/comercial.webp",
      features: [
        { included: true, text: "Sistema otimizado para horário comercial" },
        { included: true, text: "Economia significativa na conta" },
        { included: true, text: "Instalação rápida e eficiente" },
        { included: true, text: "Monitoramento em tempo real" },
        { included: true, text: "Suporte técnico prioritário" }
      ]
    },
    { 
      name: "Fábricas", 
      description: "Projetos industriais para fábricas e grandes consumidores", 
      image: "/images/industrial.webp",
      features: [
        { included: true, text: "Sistema de alta potência" },
        { included: true, text: "Redução de custos operacionais" },
        { included: true, text: "Instalação em áreas industriais" },
        { included: true, text: "Monitoramento avançado" },
        { included: true, text: "Manutenção preventiva" }
      ]
    },
    { 
      name: "Usinas de Investimento", 
      description: "Projetos de grande escala para investidores", 
      image: "/images/usina.webp",
      features: [
        { included: true, text: "Projetos de grande porte" },
        { included: true, text: "Retorno financeiro atrativo" },
        { included: true, text: "Gestão completa do projeto" },
        { included: true, text: "Monitoramento especializado" },
        { included: true, text: "Suporte técnico dedicado" }
      ]
    }
  ];

  const openLeadsterChat = () => {
    const avatar = document.querySelector('.nld-avatar');
    if (avatar) avatar.click();
  };

  const renderProjectCards = (projects) => {
    return (
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="h-full"
                >
                  <Card className="relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="flex-none">
                      <CardTitle className="text-2xl font-bold text-text-primary">{project.name}</CardTitle>
                      <CardDescription className="text-text-dark/80 font-medium">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-4">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-neutral-light mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`${feature.included ? "text-text-dark/90" : "text-text-dark/50"} font-medium`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex-none mt-auto pt-6">
                      <Button 
                        className="w-full shadow-lg hover:shadow-xl transition-all primary-gradient text-white font-bold text-lg py-6" 
                        onClick={openLeadsterChat}
                      >
                        Solicitar Orçamento
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg hover:shadow-xl z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg hover:shadow-xl z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            Tipos de Projeto
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções em energia solar para <span className="text-gradient">diferentes necessidades</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvemos projetos personalizados para residências, comércios, indústrias e investidores, sempre com foco na máxima eficiência e retorno.
          </motion.p>
        </div>

        {renderProjectCards(allProjects)}

        <div className="mt-16 text-center">
          <p className="text-text-dark/90 font-medium mb-6">
            Precisa de uma solução personalizada? Entre em contato para um projeto sob medida.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/10 font-bold shadow-lg hover:shadow-xl transition-all" 
            onClick={openLeadsterChat}
          >
            Solicitar Projeto Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;