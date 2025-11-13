import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  try {
    // Aqui você chama seu backend local, não o Google Script direto
    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entrarei em contato em breve.",
      });
      form.reset();
    } else {
      toast({
        title: "Erro ao enviar!",
        description: "Tente novamente mais tarde.",
      });
    }
  } catch (error) {
    toast({
      title: "Erro de conexão",
      description: "Verifique sua internet e tente novamente.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comece Sua Transformação Digital
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Solicite seu diagnóstico gratuito e descubra como seus dados podem trabalhar por você
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nome Completo *
                  </Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Seu nome" 
                    required 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    E-mail *
                  </Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="seu@email.com" 
                    required 
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="(00) 00000-0000" 
                    required 
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Empresa
                  </Label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="Nome da empresa" 
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Conte-me mais sobre seu desafio
                </Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Descreva brevemente qual problema você gostaria de resolver com dados..."
                  className="min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg shadow-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Respondo em até 24 horas úteis. Seus dados estão seguros e não serão compartilhados.
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-primary-lighter rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Diagnóstico inicial gratuito</p>
            </div>
            <div className="bg-primary-lighter rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <p className="text-muted-foreground">Tempo médio de resposta</p>
            </div>
            <div className="bg-primary-lighter rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
