const Education = ({ data }: { data: any[] }) => {
    return (
        <section id="education">
            <h2 className="text-4xl font-bold mb-12">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((edu) => (
                    <div key={edu.id} className="p-8 border border-slate-200 dark:border-slate-800 rounded-3xl">
                        <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-primary-600 font-semibold mb-4">{edu.institute}</p>
                        <div className="text-slate-400 text-sm mb-4">{edu.start_year} — {edu.end_year || 'Present'}</div>
                        <p className="text-slate-500 dark:text-slate-400">{edu.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
