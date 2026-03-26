import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = ({ data }: { data: any }) => {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-8 bg-primary"></div>
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Deployment History</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-20 tracking-tighter uppercase italic text-slate-900 dark:text-white">
                    Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Timeline.</span>
                </h2>

                <div className="space-y-12">
                    {data.map((exp: any, idx: number) => (
                        <motion.div
                            key={exp.id}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glossy-panel p-10 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-black/5 dark:border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:border-primary/30 transition-colors">
                                        <Briefcase className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">{exp.role}</h3>
                                        <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-6 text-slate-500 dark:text-slate-500 font-mono text-xs uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><Calendar size={14} /> {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}</span>
                                    <span className="flex items-center gap-2"><MapPin size={14} /> {exp.location}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {exp.description.split('\n').map((line: string, i: number) => (
                                    <div key={i} className="flex gap-4 items-start group/line">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2.5 group-hover/line:bg-primary transition-colors"></div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed flex-1">{line}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Education = ({ data }: { data: any }) => {
    return (
        <section id="education" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-8 bg-primary"></div>
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Knowledge Base</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic text-white">
                    Core <span className="text-primary">Accreditations.</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {data.map((edu: any) => (
                        <div key={edu.id} className="glossy-panel p-8 flex gap-6 items-start border-l-4 border-l-primary">
                            <div className="space-y-2">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{edu.degree}</h3>
                                <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{edu.institute}</p>
                                <p className="text-slate-500 dark:text-slate-500 font-mono text-xs pt-4 tracking-widest uppercase">{edu.start_year} - {edu.end_year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
