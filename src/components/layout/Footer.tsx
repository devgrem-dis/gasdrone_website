import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Plane className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold">
                <span className="text-foreground">Gas</span>
                <span className="text-gradient">Drone</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empresa chilena líder en monitoreo aéreo de infraestructuras críticas. 
              Soluciones tecnológicas avanzadas para el sector energético.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Santiago, Chile</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:contacto@gasdrone.cl" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contacto@gasdrone.cl
              </a>
              <a 
                href="tel:+56912345678" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +56 9 1234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} – GasDrone · Desarrollado por Gremtech SpA . Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Empresa chilena de base tecnológica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
