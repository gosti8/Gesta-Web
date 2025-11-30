import React from 'react';
import { Map, Factory, Leaf, Scale, Users, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 'territorial',
            title: 'Planificación Territorial y Urbana',
            icon: <Map className="w-8 h-8" />,
            description: 'Acompañamos a municipios, comunas y desarrolladores en la organización estratégica del territorio.',
            items: [
                'Diagnósticos territoriales y ambientales.',
                'Planes de ordenamiento territorial y urbano.',
                'Evaluación de capacidades de carga y uso del suelo.',
                'Planificación de loteos, barrios y áreas industriales.'
            ],
            color: 'bg-blue-50 text-blue-600'
        },
        {
            id: 'ambiental',
            title: 'Gestión Ambiental y Evaluaciones',
            icon: <Leaf className="w-8 h-8" />,
            description: 'Herramientas clave para prevenir impactos y mejorar la sostenibilidad de proyectos.',
            items: [
                'Estudios de Impacto Ambiental (EIA).',
                'Planes de Gestión Ambiental (PGA).',
                'Auditorías y monitoreos ambientales.',
                'Gestión de residuos (urbanos, peligrosos, patogénicos).',
                'Tramitación de permisos ante Secretaría de Ambiente.'
            ],
            color: 'bg-green-50 text-green-600'
        },
        {
            id: 'industria',
            title: 'Asesoramiento a Industrias y Productores',
            icon: <Factory className="w-8 h-8" />,
            description: 'Apoyo a actores productivos para el cumplimiento ambiental y la eficiencia.',
            items: [
                'Buenas Prácticas Ambientales (BPA).',
                'Certificaciones (ISO, BPM).',
                'Gestión de efluentes y agua.',
                'Eficiencia energética y economía circular.',
                'Evaluación de pasivos ambientales.'
            ],
            color: 'bg-orange-50 text-orange-600'
        },
        {
            id: 'clima',
            title: 'Cambio Climático y Biodiversidad',
            icon: <Zap className="w-8 h-8" />,
            description: 'Estrategias de adaptación y mitigación para gobiernos y organizaciones.',
            items: [
                'Planes Locales de Acción Climática.',
                'Inventarios de gases de efecto invernadero.',
                'Infraestructura verde y conservación.',
                'Evaluación de riesgo climático.',
                'Sistemas de alerta temprana.'
            ],
            color: 'bg-teal-50 text-teal-600'
        }
    ];

    const additionalServices = [
        {
            title: 'Asistencia Técnica y Legal',
            icon: <Scale className="w-6 h-6" />,
            desc: 'Respaldo normativo, dictámenes legales y acompañamiento en conflictos ambientales.'
        },
        {
            title: 'Participación y Educación',
            icon: <Users className="w-6 h-6" />,
            desc: 'Talleres, capacitaciones, mesas de diálogo y campañas de sensibilización.'
        }
    ];

    return (
        <div className="bg-surface min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary-dark text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Nuestros Servicios</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Soluciones integrales adaptadas a las necesidades del sector público y privado.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10">
                <div className="grid grid-cols-1 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className={`p-8 md:w-1/3 flex flex-col justify-center items-start ${service.color} bg-opacity-20`}>
                                <div className={`p-4 rounded-xl bg-white shadow-sm mb-6 ${service.color.replace('bg-', 'text-')}`}>
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                            <div className="p-8 md:w-2/3 bg-white flex items-center">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {additionalServices.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-secondary/20 p-3 rounded-lg text-primary-dark">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-text-muted">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
