import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

/**
 * Componente PieDePagina
 * 
 * Este componente renderiza el pie de página del sitio web.
 * Contiene información de contacto, enlaces rápidos a secciones, redes sociales y derechos de autor.
 */
const PieDePagina = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Marca e Información */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <Leaf className="text-white w-6 h-6" />
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight">GESTA</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Gestión Sostenible de Territorio y Ambiente. Soluciones integrales para el desarrollo sostenible.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">Enlaces</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Inicio</Link></li>
                            <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors text-sm">Servicios</Link></li>
                            <li><Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors text-sm">Nosotros</Link></li>
                            <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors text-sm">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Servicios Resumen */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">Servicios</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-300 text-sm">Planificación Territorial</li>
                            <li className="text-gray-300 text-sm">Gestión Ambiental</li>
                            <li className="text-gray-300 text-sm">Asesoramiento Industrial</li>
                            <li className="text-gray-300 text-sm">Cambio Climático</li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                                <span className="text-gray-300 text-sm">Entre Ríos, Argentina</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent" />
                                <a href="mailto:info@gestaconsultora.com" className="text-gray-300 hover:text-white transition-colors text-sm">info@gestaconsultora.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <span className="text-gray-300 text-sm">+54 9 343 ...</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} Gesta Consultora. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white text-xs">Privacidad</a>
                        <a href="#" className="text-gray-400 hover:text-white text-xs">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PieDePagina;
