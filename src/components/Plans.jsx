import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const Plans = () => {
  const residentialPlans = [
    { name: "Básico", description: "Ideal para residências pequenas, até R$200", price: "R$ 8.990", monthly: "R$ 299", features: [{ included: true, text: "Até 2 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: false, text: "Manutenção preventiva" }], popular: false, className: "border-neutral-light" },
    { name: "Avançado", description: "Perfeito para a maioria das residências", price: "R$ 14.990", monthly: "R$ 499", features: [{ included: true, text: "Até 4 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: false, text: "Manutenção preventiva" }], popular: true, className: "border-secondary" },
    { name: "Premium", description: "Para residências de alto consumo", price: "R$ 29.990", monthly: "R$ 699", features: [{ included: true, text: "Até 8 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: true, text: "Manutenção preventiva por 2 anos" }], popular: false, className: "border-primary" }
  ];

  const commercialPlans = [
    { name: "Empresarial Básico", description: "Para pequenas empresas", price: "R$ 39.990", monthly: "R$ 799", features: [{ included: true, text: "Até 10 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: false, text: "Manutenção preventiva" }], popular: false, className: "border-neutral-light" },
    { name: "Empresarial Plus", description: "Para médias empresas", price: "R$ 69.990", monthly: "R$ 999", features: [{ included: true, text: "Até 20 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: true, text: "Manutenção preventiva por 1 ano" }], popular: true, className: "border-secondary" },
    { name: "Empresarial Premium", description: "Para grandes empresas", price: "R$ 99.990", monthly: "R$ 1.499", features: [{ included: true, text: "Até 50 kWp de potência" }, { included: true, text: "Economia de até 95% na conta" }, { included: true, text: "Instalação inclusa" }, { included: true, text: "Monitoramento via aplicativo" }, { included: true, text: "Manutenção preventiva por 3 anos" }], popular: false, className: "border-primary" }
  ];

  const openLeadsterChat = () => {
    const avatar = document.querySelector('.nld-avatar');
    if (avatar) avatar.click();
  };

  const renderPlanCards = (plans) => {
    return plans.map((plan, index) => (
      <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * index }}>
        <Card className={`relative bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.className}`}>
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              Mais Popular
            </span>
          )}
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-text-primary">{plan.name}</CardTitle>
            <CardDescription className="text-text-dark/80 font-medium">{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-text-dark/70 font-medium">a partir de:</span><br/>
              <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
              <span className="text-text-dark/70 font-medium"> à vista</span>
              <p className="text-sm text-text-dark/70 font-medium mt-1">ou {plan.monthly}/mês em até 60x</p>
            </div>
            <ul className="space-y-4">
              {plan.features.map((feature, idx) => (
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
          <CardFooter>
            <Button 
              className={`w-full shadow-lg hover:shadow-xl transition-all ${plan.popular ? "primary-gradient text-white" : "bg-white text-primary hover:bg-primary/10"}`} 
              onClick={openLeadsterChat}
            >
              Escolher Plano
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    ));
  };

  return (
    <section id="plans" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold mb-4" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            Nossos Planos
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-primary" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Escolha o plano ideal para <span className="text-gradient">suas necessidades</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-text-dark/90 font-medium max-w-2xl mx-auto" 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Oferecemos soluções personalizadas para residências e empresas, com opções de pagamento que cabem no seu orçamento.
          </motion.p>
        </div>

        <Tabs defaultValue="residential" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md bg-primary/10">
              <TabsTrigger 
                value="residential" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Residencial
              </TabsTrigger>
              <TabsTrigger 
                value="commercial"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Empresarial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="residential" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderPlanCards(residentialPlans)}
          </TabsContent>

          <TabsContent value="commercial" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderPlanCards(commercialPlans)}
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-text-dark/90 font-medium mb-6">
            Não encontrou um plano que atenda suas necessidades? Entre em contato para uma solução personalizada.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/10 font-bold shadow-lg hover:shadow-xl transition-all" 
            onClick={openLeadsterChat}
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;