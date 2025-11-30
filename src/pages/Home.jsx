import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, Leaf, ShieldCheck } from 'lucide-react';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/40"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
                    >
                        Consultora Ambiental y Territorial
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
                    >
                        Desarrollo que <span className="text-accent">perdura</span>. <br />
                        Gestión que <span className="text-secondary">transforma</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
                    >
                        Acompañamos a industrias, desarrolladores y gobiernos en la transición hacia modelos más eficientes y sostenibles.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contacto" className="btn-primary bg-accent hover:bg-accent-hover text-white border-none">
                            Solicitar Asesoría
                        </Link>
                        <Link to="/servicios" className="btn-outline border-white text-white hover:bg-white hover:text-primary-dark">
                            Nuestros Servicios
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="section-padding bg-surface">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones a Medida</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Adaptamos nuestros servicios a las necesidades específicas de cada sector, asegurando cumplimiento normativo y eficiencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Private Sector */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group"
                    >
                        <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            <Building2 className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Sector Privado</h3>
                        <p className="text-text-muted mb-6">
                            Industrias, desarrolladores inmobiliarios y productores.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                Habilitaciones y Permisos
                            </li>
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                Estudios de Impacto Ambiental
                            </li>
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                Eficiencia Energética
                            </li>
                        </ul>
                        <Link to="/servicios" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            Ver soluciones <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Public Sector */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group"
                    >
                        <div className="bg-secondary/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary-dark transition-colors text-primary-dark">
                            <Landmark className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Sector Público</h3>
                        <p className="text-text-muted mb-6">
                            Municipios, comunas y organismos gubernamentales.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-secondary-dark" />
                                Ordenamiento Territorial
                            </li>
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-secondary-dark" />
                                Planes de Acción Climática
                            </li>
                            <li className="flex items-center gap-2 text-sm text-text-main">
                                <ShieldCheck className="w-4 h-4 text-secondary-dark" />
                                Redacción de Normativas
                            </li>
                        </ul>
                        <Link to="/servicios" className="text-primary-dark font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                            Ver soluciones <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Snippet */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-20"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Sobre Nosotros</span>
                        <h2 className="text-4xl font-bold mb-6">Un equipo interdisciplinario para desafíos complejos</h2>
                        <p className="text-text-muted mb-6 text-lg">
                            Somos ingenieros, biólogos, arquitectos y abogados trabajando juntos. Creemos que el desarrollo productivo puede crecer en armonía con la naturaleza.
                        </p>
                        <Link to="/nosotros" className="btn-primary">
                            Conoce al equipo
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                            {/* Placeholder for team image */}
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                Imagen Equipo
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Leaf className="text-primary w-5 h-5" />
                                </div>
                                <span className="font-bold text-xl">10+ Años</span>
                            </div>
                            <p className="text-sm text-text-muted">De experiencia combinada en gestión ambiental y territorial.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
