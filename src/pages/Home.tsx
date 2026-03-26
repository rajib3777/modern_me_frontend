import { useState, useEffect } from 'react';
import { portfolioService } from '../api/client';
import Hero from '../components/Hero';
import { About } from '../components/AboutAndFooter';
import Skills from '../components/Skills';
import { Experience, Education } from '../components/ExperienceAndEducation';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [hero, about, skills, experience, projects, education] = await Promise.all([
                    portfolioService.getHero(),
                    portfolioService.getAbout(),
                    portfolioService.getSkills(),
                    portfolioService.getExperience(),
                    portfolioService.getProjects(),
                    portfolioService.getEducation(),
                ]);
                setData({ hero, about, skills, experience, projects, education });
            } catch (error) {
                console.error("Failed to fetch data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Hero data={data.hero} />
            <div className="container mx-auto px-6 space-y-32 py-20">
                <About data={data.about} />
                <Skills data={data.skills} />
                <Experience data={data.experience} />
                <Projects data={data.projects} />
                <Education data={data.education} />
                <Contact />
            </div>
        </motion.div>
    );
};

export default Home;
