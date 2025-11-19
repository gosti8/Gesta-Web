// Importamos el componente Navbar 
import Navbar from './components/Navbar';

// App es el componente "Padre" de toda la aplicación.
function App() {
  return (
    // min-h-screen: Asegura que la app ocupe al menos el alto total de la pantalla
    // bg-gesta-neutro: Aplica el color de fondo gris muy suave (#F5F6F5) del manual
    <div className="min-h-screen bg-gesta-neutro font-sans">
      
      {/* 1. Barra de Navegación */}
      <Navbar />

      {/* 2. Contenido Principal (Espacio temporal para ver que funciona) */}
      <main className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h1 className="font-display text-4xl font-bold text-gesta-azul mb-4">
            Gestión Sostenible de Territorio y Ambiente
          </h1>
          <p className="text-gesta-texto text-lg max-w-2xl mx-auto leading-relaxed">
            Somos una consultora interdisciplinaria en ambiente y territorio, integrada por profesionales de Ingeniería Ambiental, Biología, Arquitectura y Derecho.
          </p>
          
          <div className="mt-8">
            <button className="bg-gesta-ocre text-white font-display font-bold py-3 px-8 rounded shadow hover:bg-opacity-90 transition">
              Conocer Servicios
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;