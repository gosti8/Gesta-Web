import React from 'react';
import { Outlet } from 'react-router-dom';
import BarraNavegacion from '../components/BarraNavegacion';
import PieDePagina from '../components/PieDePagina';
import { motion } from 'framer-motion';

/**
 * Componente DisenoPrincipal
 * 
 * Este componente actúa como el diseño base (layout) para todas las páginas principales.
 * Envuelve el contenido de la página (Outlet) con la Barra de Navegación y el Pie de Página.
 * También aplica una animación de transición suave al cambiar de página.
 */
const DisenoPrincipal = () => {
    return (
        <div className="flex flex-col min-h-screen bg-surface">
            <BarraNavegacion />
            <main className="flex-grow pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Outlet />
                </motion.div>
            </main>
            <PieDePagina />
        </div>
    );
};

export default DisenoPrincipal;
