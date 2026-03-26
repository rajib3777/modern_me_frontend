import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, Cpu } from 'lucide-react';

export const About = ({ data }: { data: any }) => {
    const stats = [
        { label: 'Uptime', value: `${data.years_of_experience * 365}D`, icon: ShieldCheck },
        { label: 'Deployments', value: data.projects_completed, icon: Zap },
        { label: 'Integrity', value: '99.9%', icon: Target },
    ];

    const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api', '');
    const imageUrl = data.image
        ? (data.image.startsWith('http') ? data.image : `${baseUrl}${data.image}`)
        : null;

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-20 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Technical Manual</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter uppercase italic text-slate-900 dark:text-white leading-none">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Architecture.</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-slate-700 dark:text-slate-400 font-light leading-relaxed">
                            <p>{data.bio}</p>
                            <div className="p-8 glossy-panel border-primary/30 bg-primary/5 mt-10 backdrop-blur-md">
                                <p className="text-sm font-mono text-primary/80 dark:text-primary/80 uppercase tracking-widest leading-loose">
                                    {data.ats_summary}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative glossy-panel aspect-[4/5] overflow-hidden border-primary/40 p-4">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="Rajibul Shuvo"
                                    className="w-full h-full object-cover rounded-xl transition-all duration-700"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-900 flex items-center justify-center font-mono text-primary animate-pulse">
                                    // NO_VISUAL_FEED
                                </div>
                            )}
                            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary"></div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="glossy-panel p-4 border-primary/20 bg-primary/5">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                                    <div className="text-xl font-black text-slate-900 dark:text-white font-mono">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-black italic tracking-tighter text-slate-900 dark:text-white mb-2">RAJIBUL</div>
                        <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Digital Frontier Operational // 2026</p>
                    </div>

                    <div className="flex gap-10">
                        <a href="https://github.com/rajib3777" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/md-rajibul-islam-shuvo-3235121b3/" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors">LinkedIn</a>
                        <a href="tel:+8801581620802" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors">Phone</a>
                    </div>

                    <div className="text-right hidden md:block">
                        <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em] mb-1">Status</div>
                        <div className="flex items-center gap-2 justify-end">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                            <span className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-wider">All Systems Normal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
