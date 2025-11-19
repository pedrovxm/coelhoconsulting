import { Search, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Análise completa da sua estrutura atual de dados, processos e necessidades específicas do negócio."
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposta Personalizada",
    description: "Desenvolvimento de solução sob medida com escopo detalhado, prazos e investimento necessário."
  },
  {
    icon: Code,
    number: "03",
    title: "Desenvolvimento",
    description: "Implementação da solução com comunicação constante e entregas incrementais para validação."
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega e Acompanhamento",
    description: "Treinamento da equipe, documentação completa e suporte contínuo para garantir o sucesso."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o processo
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia testada e comprovada para entregar resultados consistentes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl shadow-soft p-8 hover:shadow-medium transition-shadow h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-lighter rounded-lg flex items-center justify-center mb-4 ml-12">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-accent opacity-30" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-lighter rounded-xl p-8 text-center">
            <p className="text-lg text-foreground font-medium">
              Cada projeto é único. O processo é adaptado às necessidades específicas do seu negócio, 
              garantindo que a solução entregue valor real desde o primeiro dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
