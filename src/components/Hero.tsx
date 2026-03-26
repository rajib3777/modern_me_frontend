import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, ArrowRight, Cpu, Layers, Zap } from 'lucide-react';

const Hero = ({ data }: { data: any }) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api', '');
    const imageUrl = data.image
        ? (data.image.startsWith('http') ? data.image : `${baseUrl}${data.image}`)
        : null;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-40 md:pt-32 lg:pt-20 overflow-hidden bg-mesh-gradient">
            {/* Holographic Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-slow-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[150px] animate-slow-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Main Content Area */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >

                            <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter mb-10 font-sans italic">
                                <span className="block text-primary/80">MD. RAJIBUL</span>
                                <span className="block italic">ISLAM</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 dark:from-white via-cyan-400 to-primary">
                                    SHUVO
                                </span>
                            </h1>

                            <div className="max-w-xl mb-12">
                                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
                                    {data.subheadline || "Architecting digital ecosystems with a focus on precision, performance, and unprecedented visual depth."}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-black/5 dark:border-white/5 bg-black/2 dark:bg-white/2 rounded-2xl px-6 backdrop-blur-sm">
                                    <div className="space-y-1">
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest flex items-center gap-2">
                                            <Cpu size={14} className="text-primary" /> Strategy
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">Full Stack</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest flex items-center gap-2">
                                            <Layers size={14} className="text-primary" /> Performance
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">99.9% Core</div>
                                    </div>
                                    <div className="space-y-1 hidden md:block">
                                        <div className="text-xs text-slate-500 uppercase font-bold tracking-widest flex items-center gap-2">
                                            <Zap size={14} className="text-primary" /> Delivery
                                        </div>
                                        <div className="text-lg font-bold text-slate-900 dark:text-white">Continuous</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-8">
                                <button className="relative group overflow-hidden px-12 py-5 bg-primary text-slate-950 font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                                    <span className="relative z-10 flex items-center gap-3">
                                        INITIALIZE PROJECT <ArrowRight />
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/40 group-hover:h-full transition-all duration-300"></div>
                                </button>

                                 <div className="flex items-center gap-6">
                                    <motion.a whileHover={{ y: -5, color: '#06b6d4' }} href={data.github_url} className="text-slate-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Github size={24} /></motion.a>
                                    <motion.a whileHover={{ y: -5, color: '#06b6d4' }} href={data.linkedin_url} className="text-slate-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Linkedin size={24} /></motion.a>
                                    <motion.a whileHover={{ y: -5, color: '#06b6d4' }} href="tel:+8801581620802" className="text-slate-500 transition-colors p-2 hover:bg-white/5 rounded-full"><Phone size={24} /></motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Glossy Visual Area */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            <div className="glossy-panel p-4 group">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px]"></div>
                                <img
                                    src={imageUrl || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop'}
                                    alt="Rajibul Shuvo"
                                    className="rounded-[1.5rem] w-full aspect-[4/5] object-cover transition-all duration-1000"
                                />

                                {/* Floating HUD Elements */}
                                <div className="absolute -top-10 -right-10 glass-morphism p-6 rounded-2xl animate-float">
                                    <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-black mb-1">Stability</div>
                                    <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">100%</div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 glass-morphism p-6 rounded-2xl animate-float delay-1000">
                                    <div className="text-[10px] text-accent uppercase tracking-[0.3em] font-black mb-1">Throughput</div>
                                    <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">60gb/s</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-spin-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-dashed border-accent/20 rounded-full animate-spin-slow reverse-spin"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
