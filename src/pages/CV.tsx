import { useEffect, useState } from 'react';
import { portfolioService } from '../api/client';
import { FileDown } from 'lucide-react';

const CV = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [hero, about, skills, experience, education, projects] = await Promise.all([
                    portfolioService.getHero(),
                    portfolioService.getAbout(),
                    portfolioService.getSkills(),
                    portfolioService.getExperience(),
                    portfolioService.getEducation(),
                    portfolioService.getProjects(),
                ]);
                setData({ hero, about, skills, experience, education, projects });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-10 bg-white text-black min-h-screen shadow-lg font-serif">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-4xl font-bold uppercase tracking-tight">{data.hero.headline}</h1>
                    <p className="text-xl mt-1">{data.hero.subheadline}</p>
                </div>
                <a
                    href={`${import.meta.env.VITE_API_BASE_URL}/cv/ats.pdf`}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded no-print hover:bg-slate-800 transition"
                >
                    <FileDown size={18} /> Download PDF
                </a>
            </div>

            <section className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-black mb-2 uppercase">Professional Summary</h2>
                <p className="text-sm leading-relaxed">{data.about.ats_summary}</p>
            </section>

            <section className="mb-6">
                <h2 className="text-lg font-bold border-b-2 border-black mb-2 uppercase">Experience</h2>
                {data.experience.map((exp: any) => (
                    <div key={exp.id} className="mb-4">
                        <div className="flex justify-between font-bold">
                            <span>{exp.company}</span>
                            <span>{exp.start_date} – {exp.is_current ? 'Present' : exp.end_date}</span>
                        </div>
                        <div className="italic">{exp.role} | {exp.location}</div>
                        <ul className="list-disc ml-5 text-sm mt-1">
                            {exp.description.split('\n').map((line: string, i: number) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <div className="grid grid-cols-2 gap-8">
                <section>
                    <h2 className="text-lg font-bold border-b-2 border-black mb-2 uppercase">Skills</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        {data.skills.map((skill: any) => (
                            <span key={skill.id}>{skill.name}</span>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-lg font-bold border-b-2 border-black mb-2 uppercase">Education</h2>
                    {data.education.map((edu: any) => (
                        <div key={edu.id} className="mb-2 text-sm">
                            <div className="font-bold">{edu.institute}</div>
                            <div>{edu.degree}</div>
                            <div className="text-xs">{edu.start_year} – {edu.end_year}</div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default CV;
