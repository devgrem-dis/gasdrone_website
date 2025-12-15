import { Link } from "react-router-dom";
import { 
  Shield, 
  Eye, 
  Zap, 
  Target, 
  Radio, 
  MonitorPlay,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: MonitorPlay,
    title: "Streaming en Tiempo Real",
    description: "Transmisión de video HD desde drones con latencia mínima para monitoreo continuo.",
  },
  {
    icon: Eye,
    title: "Visión por Computadora",
    description: "Análisis automático con IA para detección de maquinaria y actividades cercanas.",
  },
  {
    icon: Shield,
    title: "Detección de Riesgos",
    description: "Identificación proactiva de amenazas operacionales en infraestructuras críticas.",
  },
  {
    icon: Radio,
    title: "Alertas Inmediatas",
    description: "Sistema de notificaciones en tiempo real para respuesta operativa rápida.",
  },
];

const benefits = [
  "Monitoreo continuo 24/7 de gasoductos",
  "Reducción de costos operativos",
  "Prevención de incidentes de seguridad",
  "Cumplimiento normativo garantizado",
  "Reportes detallados y trazabilidad",
  "Soporte técnico especializado",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-cover bg-center overflow-hidden"style={{ backgroundImage: "url('/images/DJI_20251212134200_0058_V.jpg')" }}
>  {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/50 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary/100 animate-pulse" />
              <span className="text-sm font-medium text-white">Servicio Operativo</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
              Monitoreo Inteligente de{" "}
              <span className="text-gradient">Gasoductos</span>
            </h1>
            
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-up stagger-2">
              Empresa chilena especializada en streaming de video en tiempo real con drones 
              y análisis por visión computacional para la seguridad de infraestructuras críticas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 glow-primary">
                <Link to="/servicios">
                  Conocer Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-muted hover:bg-muted">
                <Link to="/contacto">Solicitar Información</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Tecnología de <span className="text-gradient">Vanguardia</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Combinamos drones de última generación con inteligencia artificial 
              para ofrecer el monitoreo más avanzado del mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 lg:p-10 rounded-2xl bg-background border border-border hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Proveer soluciones de monitoreo aéreo en tiempo real que fortalezcan la 
                <span className="text-primary font-medium"> seguridad, prevención de riesgos y eficiencia operacional </span>
                en gasoductos, mediante el uso de drones y tecnologías avanzadas de análisis visual.
              </p>
            </div>
            
            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-2xl bg-background border border-border hover-lift">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Consolidarse como una 
                <span className="text-primary font-medium"> empresa chilena referente </span>
                en el monitoreo inteligente de infraestructuras críticas, reconocida por su 
                confiabilidad, innovación tecnológica y aporte al sector energético nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                ¿Por qué elegir <span className="text-gradient">GasDrone</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Somos una empresa chilena de base tecnológica comprometida con la excelencia 
                operativa y la innovación en el sector energético.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Link to="/contacto">
                    Contactar Ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Visual placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <video src="/videos/for_example2_stream_detected_web.mp4" autoPlay loop muted/>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto text-center p-8 lg:p-12 rounded-3xl bg-background border border-border overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                ¿Listo para <span className="text-gradient">proteger</span> su infraestructura?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contáctenos hoy para conocer cómo GasDrone puede fortalecer la seguridad 
                y eficiencia de sus operaciones en gasoductos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 glow-primary">
                  <Link to="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
