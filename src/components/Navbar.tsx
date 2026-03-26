import { motion } from 'framer-motion';
import { Menu, X, Terminal, Monitor, User, Code, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: any }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navItems = [
        { name: 'Core', icon: Monitor, href: '#' },
        { name: 'Bio', icon: User, href: '#about' },
        { name: 'Tech', icon: Code, href: '#skills' },
        { name: 'Projects', icon: Terminal, href: '#projects' },
        { name: 'Signal', icon: Mail, href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
            <div className="container mx-auto px-6">
                <div className={`glass-morphism rounded-[2rem] px-8 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'border-primary/20 shadow-primary/10' : 'bg-transparent border-transparent'}`}>
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-500 cursor-pointer">
                            <Terminal size={20} className="text-slate-950 -rotate-45 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-2xl font-black italic tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 group cursor-pointer">
                            <span className="text-primary group-hover:rotate-180 transition-transform duration-700">◈</span>
                            RAJIBUL
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all flex items-center gap-2 group"
                            >
                                <item.icon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                        >
                            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-primary animate-pulse shadow-[0_0_10px_#06b6d4]' : 'bg-slate-700'}`}></div>
                        </button>
                        <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-3xl border-b border-white/10 p-6"
                >
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-4">
                                <item.icon size={18} className="text-primary" />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
