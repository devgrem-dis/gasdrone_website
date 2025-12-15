import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Building2,
  MessageSquare,
  FileText,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const requestTypes = [
  { id: "info", label: "Información General", icon: MessageSquare },
  { id: "quote", label: "Cotización", icon: FileText },
  { id: "meeting", label: "Agendar Reunión", icon: Calendar },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contacto@gasdrone.cl",
    href: "mailto:contacto@gasdrone.cl",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+56 9 1234 5678",
    href: "tel:+56912345678",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Santiago, Chile",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState("info");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto con usted a la brevedad.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">Contacto</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Invitamos a empresas del sector energético e industrial a conocer más sobre 
              nuestras soluciones de monitoreo aéreo para gasoductos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
                  Solicitar Información
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete el formulario y nuestro equipo se pondrá en contacto con usted.
                </p>

                {/* Request Type Selection */}
                <div className="mb-8">
                  <Label className="text-sm font-medium mb-3 block text-foreground">
                    Tipo de Solicitud
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {requestTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                          selectedType === type.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground hover:border-muted-foreground"
                        }`}
                      >
                        <type.icon className="h-5 w-5" />
                        <span className="font-medium text-sm">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Su nombre"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">Empresa *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nombre de la empresa"
                          required
                          className="pl-10 bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email Corporativo *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@empresa.cl"
                          required
                          className="pl-10 bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+56 9 XXXX XXXX"
                          className="pl-10 bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa brevemente sus necesidades o consulta..."
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 glow-primary"
                  >
                    Enviar Solicitud
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="p-6 rounded-xl bg-card border border-border hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg mb-4 text-foreground">
                  Horario de Atención
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Soporte de emergencia: 24/7</p>
                </div>
              </div>

              {/* Trust Message */}
              <div className="p-6 rounded-xl bg-gradient-primary">
                <h3 className="font-display font-semibold text-lg mb-2 text-primary-foreground">
                  Empresa Chilena
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  GasDrone es una empresa de base tecnológica comprometida con el desarrollo 
                  del sector energético nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
