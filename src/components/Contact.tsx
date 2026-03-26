import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Satellite } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [status, setStatus] = useState<any>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/messages/`, data);
            setStatus({ type: 'success', message: 'SIGNAL ACQUIRED // MESSAGE DEPLOYED SUCCESSFULLY' });
            e.target.reset();
        } catch (error) {
            setStatus({ type: 'error', message: 'UPLINK FAILURE // PLEASE RETRY CONNECTION' });
        }
    };

    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Direct Uplink</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tighter uppercase italic text-white">
                            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connection.</span>
                        </h2>

                        <div className="space-y-10">
                             {[
                                 { icon: Mail, label: 'Secure Email', value: 'rajibulislam3777@gmail.com' },
                                 { icon: Phone, label: 'Contact Number', value: '+8801581620802' },
                                 { icon: MapPin, label: 'Location', value: 'Bangladesh' }
                             ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-center group">
                                    <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:border-primary/50 transition-all duration-500">
                                        <item.icon className="text-primary group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 dark:text-slate-500 font-black uppercase tracking-[0.3em] mb-1">{item.label}</div>
                                        <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="glossy-panel p-10 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 ml-1">Identity // Name</label>
                                    <input name="name" required placeholder="User-01" className="w-full bg-black/2 dark:bg-slate-950/50 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 font-mono text-slate-900 dark:text-white" />
                                </div>
                                 <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 ml-1">Channel // Email</label>
                                     <input name="email" type="email" required placeholder="rajibulislam3777@gmail.com" className="w-full bg-black/2 dark:bg-slate-950/50 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 font-mono text-slate-900 dark:text-white" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 ml-1">Transmission // Subject</label>
                                <input name="subject" required placeholder="Strategic Partnership" className="w-full bg-black/2 dark:bg-slate-950/50 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 font-mono text-slate-900 dark:text-white" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-500 ml-1">Core Payload // Message</label>
                                <textarea name="message" rows={5} required placeholder="Enter transmission details..." className="w-full bg-black/2 dark:bg-slate-950/50 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 font-mono text-slate-900 dark:text-white resize-none"></textarea>
                            </div>

                            <button className="w-full py-5 bg-gradient-to-r from-primary to-accent text-slate-950 font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                DEPLOY SIGNAL <Send size={18} />
                            </button>

                            {status && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-6 rounded-xl font-mono text-xs font-black uppercase tracking-widest text-center ${status.type === 'success' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-red-500/20 text-red-500 border border-red-500/30'}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
