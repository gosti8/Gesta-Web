import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente BarraNavegacion
 * 
 * Este componente renderiza la barra de navegación superior del sitio.
 * Incluye el logotipo, enlaces a las secciones principales y un menú hamburguesa para dispositivos móviles.
 * Cambia su apariencia al hacer scroll para mejorar la legibilidad.
 */
const BarraNavegacion = () => {
    const [estaAbierto, setEstaAbierto] = useState(false);
    const [desplazado, setDesplazado] = useState(false);
    const ubicacion = useLocation();

    // Efecto para detectar el scroll y cambiar el estilo de la barra
    useEffect(() => {
        const manejarScroll = () => {
            setDesplazado(window.scrollY > 20);
        };
        window.addEventListener('scroll', manejarScroll);
        return () => window.removeEventListener('scroll', manejarScroll);
    }, []);

    // Cerrar el menú móvil cuando cambia la ruta
    useEffect(() => {
        setEstaAbierto(false);
    }, [ubicacion]);

    const enlacesNavegacion = [
        { nombre: 'Inicio', ruta: '/' },
        { nombre: 'Servicios', ruta: '/servicios' },
        { nombre: 'Nosotros', ruta: '/nosotros' },
        { nombre: 'Contacto', ruta: '/contacto' },
    ];

    const esInicio = ubicacion.pathname === '/';
    const usarEstiloOscuro = desplazado || !esInicio;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${usarEstiloOscuro ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logotipo */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <img
                        src={usarEstiloOscuro ? "/assets/logos/logo_original.svg" : "/assets/logos/logo_light.svg"}
                        alt="Gesta Consultora"
                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Navegación de Escritorio */}
                <div className="hidden md:flex items-center gap-8">
                    {enlacesNavegacion.map((enlace) => (
                        <Link
                            key={enlace.ruta}
                            to={enlace.ruta}
                            className={`text-sm font-medium transition-colors hover:text-primary ${ubicacion.pathname === enlace.ruta
                                ? 'text-primary font-semibold'
                                : usarEstiloOscuro ? 'text-text-main' : 'text-white'
                                }`}
                        >
                            {enlace.nombre}
                        </Link>
                    ))}
                    <Link
                        to="/contacto"
                        className="btn-primary text-sm py-2.5 px-5"
                    >
                        Solicitar Asesoría
                    </Link>
                </div>

                {/* Botón de Menú Móvil */}
                <button
                    className={`md:hidden ${usarEstiloOscuro ? 'text-text-main' : 'text-white'}`}
                    onClick={() => setEstaAbierto(!estaAbierto)}
                >
                    {estaAbierto ? <X /> : <Menu />}
                </button>
            </div>

            {/* Superposición de Navegación Móvil */}
            <AnimatePresence>
                {estaAbierto && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {enlacesNavegacion.map((enlace) => (
                                <Link
                                    key={enlace.ruta}
                                    to={enlace.ruta}
                                    className={`text-lg font-medium p-2 rounded-md hover:bg-surface ${ubicacion.pathname === enlace.ruta ? 'text-primary bg-surface' : 'text-text-main'
                                        }`}
                                >
                                    {enlace.nombre}
                                </Link>
                            ))}
                            <Link
                                to="/contacto"
                                className="btn-primary text-center w-full mt-2"
                            >
                                Solicitar Asesoría
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default BarraNavegacion;
