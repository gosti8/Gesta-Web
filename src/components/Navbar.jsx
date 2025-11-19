import { useState } from 'react';

// DOCUMENTACIÓN:
// Este componente renderiza la barra superior fija.
// Usa 'useState' para manejar abrir/cerrar el menú en celulares (hamburguesa).

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto (true) o cerrado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Definición de los enlaces del menú para no repetir código
  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    // <nav>: Etiqueta semántica para navegación.
    // fixed w-full: Se queda pegada arriba y ocupa todo el ancho.
    // z-50: Asegura que esté por encima de cualquier otro elemento (como mapas o fotos).
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGOTIPO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Simulamos el logo Gesta con texto hasta que tengas el SVG */}
            {/* font-display aplica Montserrat (definido en tailwind.config.js) */}
            {/* text-gesta-azul aplica el color #0E5A7B del manual */}
            <span className="font-display font-bold text-2xl text-gesta-azul tracking-tight">
              Gesta
            </span>
            <span className="hidden md:block text-xs text-gesta-texto uppercase tracking-widest mt-1 border-l border-gesta-ocre pl-2 ml-2">
              Consultora Urbano Ambiental
            </span>
          </div>

          {/* MENÚ ESCRITORIO (Hidden en movil, Block en pantallas md o mayores) */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gesta-texto hover:text-gesta-azul font-sans font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            {/* Botón de acción destacado (CTA) */}
            <a 
              href="#contacto"
              className="bg-gesta-azul text-white px-5 py-2 rounded-full font-display font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Solicitar Asesoría
            </a>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gesta-azul hover:text-gesta-ocre focus:outline-none"
            >
              {/* Icono SVG simple de menú (3 rayas o X si está abierto) */}
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {/* Se muestra solo si isOpen es true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer click
                className="block px-3 py-4 rounded-md text-base font-medium text-gesta-texto hover:text-gesta-azul hover:bg-gesta-neutro"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;