import React from 'react';
import { CheckCircle, Users, BookOpen, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-surface min-h-screen">
            {/* Header */}
            <div className="bg-secondary text-primary-dark py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Sobre Nosotros</h1>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Convicción, experiencia y compromiso con el desarrollo sostenible.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="prose prose-lg mx-auto text-gray-600 mb-16">
                    <p className="lead text-xl font-medium text-gray-800 mb-6">
                        Somos una consultora interdisciplinaria en ambiente y territorio, integrada por profesionales de Ingeniería Ambiental, Biología, Arquitectura, Urbanismo y Derecho.
                    </p>
                    <p className="mb-6">
                        Compartimos la convicción de que el desarrollo urbano, productivo y social puede crecer en armonía con la naturaleza, la normativa vigente y la calidad de vida de las comunidades.
                    </p>
                    <p>
                        Nuestra trayectoria y experiencia nos respaldan: hemos participado en la elaboración de ordenanzas municipales, inventarios de humedales, estudios de impacto ambiental, planes de acción climática y proyectos de conservación.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <Users className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Equipo Multidisciplinario</h3>
                        <p className="text-sm text-gray-600">
                            Integramos saberes técnicos, legales y científicos para brindar soluciones completas.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <BookOpen className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Docencia e Investigación</h3>
                        <p className="text-sm text-gray-600">
                            Nuestro trabajo como docentes universitarios nos mantiene actualizados y rigurosos.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <CheckCircle className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Seguridad Jurídica</h3>
                        <p className="text-sm text-gray-600">
                            Aseguramos el cumplimiento normativo para dar solidez a cada proyecto.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <Globe className="w-8 h-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Visión Global</h3>
                        <p className="text-sm text-gray-600">
                            Aplicamos estándares internacionales de sostenibilidad y cambio climático.
                        </p>
                    </div>
                </div>

                {/* Team Placeholder */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Nuestro Equipo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group">
                                <div className="aspect-[3/4] bg-gray-200 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                        Foto Socio {i}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold">Nombre Apellido</h3>
                                <p className="text-sm text-accent font-medium">Especialidad</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
