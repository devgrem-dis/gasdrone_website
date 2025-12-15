import { Link } from "react-router-dom";
import {
  MonitorPlay,
  Eye,
  AlertTriangle,
  Truck,
  Users,
  Construction,
  FileText,
  Clock,
  ArrowRight,
  CheckCircle,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const mainService = {
  title: "Streaming y Monitoreo con Drones",
  description:
    "Servicio integral de transmisión de video en tiempo real desde drones de alta tecnología, complementado con análisis automático mediante modelos de visión por computadora para la detección de maquinaria, actividades cercanas y riesgos operacionales en infraestructuras de transporte de gas.",
  features: [
    "Transmisión HD en tiempo real con latencia mínima",
    "Cobertura extendida de tramos de gasoductos",
    "Operación diurna y nocturna con cámaras térmicas",
    "Almacenamiento seguro de grabaciones",
  ],
};

const detectionCapabilities = [
  {
    icon: Truck,
    title: "Detección de Maquinaria",
    description:
      "Identificación automática de vehículos pesados, excavadoras y equipos de construcción cercanos a la infraestructura.",
    placeholder: "Imagen de detección de maquinaria",
  },
  {
    icon: Users,
    title: "Actividades Cercanas",
    description:
      "Monitoreo de actividades humanas y movimientos inusuales en zonas de servidumbre del gasoducto.",
    placeholder: "Imagen de detección de actividades",
  },
  {
    icon: AlertTriangle,
    title: "Riesgos Operacionales",
    description:
      "Alertas automáticas ante situaciones de riesgo como excavaciones no autorizadas o intrusiones en áreas protegidas.",
    placeholder: "Imagen de alertas de riesgo",
  },
  {
    icon: Construction,
    title: "Integridad Estructural",
    description:
      "Inspección visual de componentes del gasoducto, válvulas y puntos de control mediante análisis de imagen.",
    placeholder: "Imagen de inspección estructural",
  },
];

const operationalBenefits = [
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    description: "Alertas en tiempo real permiten acciones correctivas en minutos, no horas.",
  },
  {
    icon: Eye,
    title: "Visibilidad Total",
    description: "Cobertura visual completa de toda la extensión del gasoducto monitoreado.",
  },
  {
    icon: FileText,
    title: "Documentación Completa",
    description: "Registro histórico de eventos con trazabilidad total para auditorías.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
     <section
  className="relative py-20 lg:py-28 overflow-hidden"
  style={{
    backgroundImage: "url('/images/nok.webp')",
    backgroundRepeat: "no-repeat",       // evita que se repita
    backgroundSize: "cover",             // ajusta la imagen al contenedor
    backgroundPosition: "center",        // centra la imagen
  }}
>
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white">Servicio Operativo</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Nuestros <span className="text-gradient">Servicios</span>
            </h1>

            <p className="text-lg sm:text-xl">
              Soluciones tecnológicas avanzadas para el monitoreo y protección de
              infraestructuras críticas de transporte de gas en Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                {mainService.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {mainService.description}
              </p>

              <div className="space-y-4 mb-8">
                {mainService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/contacto">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Video Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/*<div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MonitorPlay className="h-10 w-10 text-primary" />
                    </div>*/}
                    <video src="/videos/machine_detected.mp4" autoPlay loop muted/>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Benefits Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Beneficios <span className="text-gradient">Operacionales</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Optimice sus operaciones con información precisa y oportuna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operationalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Gallery Placeholder */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Resultados <span className="text-gradient">Operativos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Capturas reales de nuestro sistema de análisis visual en operación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["0010.jpg", "0260.jpg", "DJI_20251212134200_0058_V.jpg", "0800.jpg", "0868.jpg", "0555.jpg"].map((item) => (
              <div
                key={item}
                className="aspect-video rounded-xl bg-background border border-border overflow-hidden hover-lift"
              >
                <div className="h-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <ImageIcon className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-muted-foreground/70 text-sm"><img src={`/images/${item}`} alt={item} className="w-full h-auto rounded-lg" /></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto text-center p-8 lg:p-12 rounded-3xl bg-card border border-border overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                ¿Interesado en nuestros <span className="text-gradient">servicios</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contáctenos para programar una demostración o solicitar una cotización
                personalizada para su proyecto.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 glow-primary"
              >
                <Link to="/contacto">
                  Contactar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
