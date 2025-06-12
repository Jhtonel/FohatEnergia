import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Nossos valores", href: "#" },
        { name: "Trabalhe conosco", href: "#" },
        { name: "Parceiros", href: "#" }
      ]
    },
    {
      title: "Produtos",
      links: [
        { name: "Residencial", href: "#projects" },
        { name: "Empresarial", href: "#projects" },
        { name: "Rural", href: "#" },
        { name: "Condomínios", href: "#" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "FAQ", href: "#faq" },
        { name: "Contato", href: "#contact" },
        { name: "Assistência técnica", href: "#" },
        { name: "Política de privacidade", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="public/solar-icon.svg" alt="Logo" className="h-14 w-20 mr-2" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando a energia do sol em economia para sua casa ou empresa. 
              Soluções personalizadas em energia solar para todo o Brasil.
            </p>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <p className="font-semibold text-lg mb-4">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="bg-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fohat Energia LTDA - CNPJ: 58.500.599.0001/02. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
