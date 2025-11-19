import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, GitBranch, Lightbulb, Calendar } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Dashboards Profissionais",
    description: "Criação de painéis interativos em Power BI ou Google Looker Studio, transformando dados brutos em visualizações estratégicas.",
    price: "A partir de R$ 1.500",
    features: [
      "Dashboards personalizados",
      "Integração com múltiplas fontes",
      "Visualizações interativas",
      "Atualizações automáticas"
    ],
    highlight: true
  },
  {
    icon: GitBranch,
    title: "Automação e Integrações",
    description: "Automatize relatórios manuais e integre suas plataformas (Google Ads, Meta, Shopify, Omie, RD Station) em um único fluxo.",
    price: "Sob consulta",
    features: [
      "Fim das planilhas manuais",
      "Integrações entre plataformas",
      "Relatórios automatizados",
      "Alertas inteligentes"
    ],
    highlight: true
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description: "Diagnóstico completo da sua estrutura de dados com sessão estratégica inicial gratuita e plano de ação personalizado.",
    price: "Primeira sessão gratuita",
    features: [
      "Diagnóstico de dados",
      "Plano de ação estratégico",
      "Análise de oportunidades",
      "Recomendações práticas"
    ],
    highlight: false
  },
  {
    icon: Calendar,
    title: "Acompanhamento Mensal",
    description: "Pacotes mensais de monitoramento contínuo, com análise de indicadores, otimização de dashboards e suporte técnico.",
    price: "Pacotes mensais",
    features: [
      "Monitoramento contínuo",
      "Otimização de KPIs",
      "Suporte técnico prioritário",
      "Relatórios estratégicos"
    ],
    highlight: false
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Integração, automação e análises que geram resultado
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para empresas que querem extrair o máximo valor dos seus dados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`flex flex-col hover:shadow-medium transition-all duration-300 ${
                service.highlight ? 'border-2 border-primary shadow-soft' : ''
              }`}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  service.highlight ? 'bg-gradient-primary' : 'bg-primary-lighter'
                }`}>
                  <service.icon className={`h-7 w-7 ${
                    service.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary-light"
                  onClick={scrollToContact}
                >
                  Solicitar orçamento
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
