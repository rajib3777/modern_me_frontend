const Experience = ({ data }: { data: any[] }) => {
    return (
        <section id="experience">
            <h2 className="text-4xl font-bold mb-12">Experience</h2>
            <div className="space-y-12">
                {data.map((exp) => (
                    <div key={exp.id} className="grid md:grid-cols-4 gap-4 md:gap-12">
                        <div className="text-slate-400 font-medium">
                            {new Date(exp.start_date).getFullYear()} — {exp.is_current ? 'PRESENT' : new Date(exp.end_date).getFullYear()}
                        </div>
                        <div className="md:col-span-3">
                            <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                            <p className="text-primary-600 font-semibold mb-4">{exp.company}</p>
                            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                                {exp.description.split('\n').map((line: string, i: number) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-primary-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
