import { Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a Coelho Consulting
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Transformando dados em estratégia há mais de 5 anos
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 mb-12">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Sou <strong className="text-primary">Israel Coelho</strong>, especialista em Business Intelligence, 
              Dados e Automação de Processos. Atualmente, atuo como Especialista de BI na Pandorium, 
              onde ajudo empresas a transformar dados complexos em decisões claras e acionáveis.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Minha experiência inclui integração de plataformas como <strong>Shopify, Omie, Google Ads, 
              GA4 e Meta Ads</strong>, além de desenvolvimento de dashboards estratégicos que impulsionam 
              resultados reais para e-commerce, marketing e supply chain.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              A <strong className="text-primary">Coelho Consulting</strong> nasceu da vontade de democratizar 
              o acesso a análises de dados de alta qualidade, oferecendo consultoria personalizada que une 
              visão estratégica, automação inteligente e experiência prática com operações reais de negócios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Experiência Real</h3>
              <p className="text-muted-foreground">
                Atuação prática em operações de e-commerce e marketing digital
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Foco em Resultados</h3>
              <p className="text-muted-foreground">
                Soluções orientadas a impacto real no negócio, não apenas relatórios
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Visão Estratégica</h3>
              <p className="text-muted-foreground">
                Análises que geram insights acionáveis e impulsionam crescimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
