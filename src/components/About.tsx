import { Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a ROCO Systems
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Transformando dados em estratégia há mais de 5 anos
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 mb-12">
  <p className="text-lg text-card-foreground leading-relaxed mb-6">
    Somos a <strong className="text-primary">ROCO Systems</strong>, uma equipe especializada em tecnologia e gestão. Trabalhamos para transformar informações complexas em decisões objetivas e orientadas ao resultado. Contamos com especialistas em Business Intelligence, análise de dados, automação de processos e estratégia operacional.
  </p>

  <p className="text-lg text-card-foreground leading-relaxed mb-6">
    Atuamos em integração de plataformas <strong>ERP, CRM, PDV, E-commerces e ferramentas de Web Analytics</strong>, além do desenvolvimento de dashboards estratégicos e automações que potencializam operações de e-commerce, marketing e supply chain. Também criamos soluções sob medida em Python, modelos de previsão, análises de performance e estruturas de dados que aumentam eficiência e reduzem retrabalho.
  </p>

  <p className="text-lg text-card-foreground leading-relaxed">
    A <strong className="text-primary">ROCO Systems</strong> surgiu com o propósito de tornar acessível uma consultoria moderna, baseada em dados e focada em resultados reais. Combinamos visão estratégica, tecnologia aplicada e experiência prática em operações para entregar análises sólidas e decisões embasadas que fortalecem empresas de diversos setores.
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
