import { motion } from 'framer-motion';

const Skills = ({ data }: { data: any }) => {
    // Categorize skills locally for better dashboard feel
    const categories = Array.from(new Set(data.map((s: any) => s.category || 'General')));

    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Capabilities Matrix</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter uppercase italic text-slate-900 dark:text-white">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Architecture.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat as string}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glossy-panel p-8 group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-center mb-8 border-b border-black/5 dark:border-white/5 pb-4">
                                <h3 className="text-xl font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{cat as string}</h3>
                                <div className="p-2 rounded-lg bg-primary/10 text-primary text-[10px] font-bold">READY</div>
                            </div>

                            <div className="space-y-8">
                                {data.filter((s: any) => s.category === cat).map((skill: any) => (
                                    <div key={skill.id} className="space-y-4">
                                        <div className="flex justify-between items-end px-1">
                                            <div className="space-y-1">
                                                <span className="block text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">{skill.name}</span>
                                                <span className="block text-[10px] text-slate-500 dark:text-slate-500 uppercase font-black">{skill.level_label || 'Expert'} // LEVEL</span>
                                            </div>
                                            <span className="text-xs font-mono font-black text-primary">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden border border-black/5 dark:border-white/5 p-[2px]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full relative"
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background noise/grid */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Skills;
