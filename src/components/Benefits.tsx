import { TrendingUp, Clock, Target, Zap, Shield, Workflow } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais Eficiência",
    description: "Decisões mais rápidas e assertivas com dados sempre atualizados"
  },
  {
    icon: Clock,
    title: "Menos Retrabalho",
    description: "Automatize processos manuais e elimine tarefas repetitivas"
  },
  {
    icon: Target,
    title: "Clareza nos Dados",
    description: "Visualizações intuitivas que todos na empresa conseguem entender"
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Respostas em tempo real para suas perguntas de negócio"
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Dados integrados e validados de múltiplas fontes"
  },
  {
    icon: Workflow,
    title: "Integração",
    description: "Todas as suas plataformas conversando entre si"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a ROCO Systems?
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Resultados reais que transformam a forma como sua empresa utiliza dados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-primary-foreground/80">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/*
        <div className="mt-16 text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-semibold mb-2">
              "Dados sem ação são apenas números."
            </p>
            <p className="text-lg text-primary-foreground/80">
              Transformo informação em clareza e clareza em resultados mensuráveis para o seu negócio.
            </p>
          </div>
        </div>  */}
      </div>
    </section>
  );
};

export default Benefits;
