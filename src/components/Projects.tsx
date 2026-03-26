import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Globe, Server } from 'lucide-react';

const Projects = ({ data }: { data: any }) => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter uppercase italic text-slate-900 dark:text-white">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Deployments.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {data.map((project: any, idx: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glossy-panel group"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.thumbnail || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>

                                {/* Overlay Badges */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <span className="glass-morphism px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border-primary/20">
                                        PROD // STABLE
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6 gap-4">
                                    <h3 className="text-3xl font-black italic tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors flex-1 min-w-0 break-words">{project.title}</h3>
                                    <div className="flex gap-4 flex-shrink-0">
                                        <a href={project.repo_url} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"><Github size={20} /></a>
                                        <a href={project.live_url} className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="glass-morphism p-3 rounded-xl border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/2">
                                        <Code2 size={16} className="text-primary mb-2" />
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Stack</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{project.tech_stack?.split(',')[0]}</div>
                                    </div>
                                    <div className="glass-morphism p-3 rounded-xl border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/2">
                                        <Server size={16} className="text-primary mb-2" />
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Type</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Enterprise</div>
                                    </div>
                                    <div className="glass-morphism p-3 rounded-xl border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/2">
                                        <Globe size={16} className="text-primary mb-2" />
                                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Scale</div>
                                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Global</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 dark:border-white/5">
                                    {project.tech_stack?.split(',').map((tech: string, i: number) => (
                                        <span key={i} className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 hover:text-primary transition-colors cursor-default">
                                            #{tech.trim().toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a 
                        href="https://github.com/rajib3777" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/20"
                    >
                        Want to see more?
                        <Github size={18} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
