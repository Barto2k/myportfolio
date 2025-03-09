import RevealOnScroll from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ['React', 'TailwindCSS', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', "JSX, SWING"];
    const backendSkills = ['Java', 'C#', 'NodeJS', 'Python'];
    const otherSkills = ['Git', 'MySQL', 'SQL Server', 'Hibernate', 'Netlify'];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me </h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300">
                        <p className="text-gray-300 mb-6">
                            I am an ambitious person who loves learning new things and challenges.
                            Also i'm used to working in a team and playing a role in it.
                        </p>
                        <p className="text-gray-300 mb-6">
                            I have knowledge in technologies such as Java (Spring, Swing, JSX), Relational Databases, Python, NodeJs, React, HTML, CSS, JavaScript, Git.
                            This knowledge was acquired at the Universidad Tecnologica Nacional FRC in Argentina and in courses taken on different platforms such as Udemy, Youtube, etc.
                            I am looking for a job that allows me to improve my skills, and why not, learn new technologies.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Currently, i'm in my fourth year of a degree in Systems Engineering at the Universidad Tecnologica Nacional FRC in Argentina.
                            Therefore, I am looking for a job that will allow me to continue my studies.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Speaking languages: Spanish (native), English (intermediate), Italian (basic).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S. in Systems Engineering (In Progress)</strong> - Universidad Tecnologica Nacional FRC (2022-PRESENT)
                                </li>
                                <li>Relevant Coursework: Java Master at Udemy, Web Development</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Maintenance employee for DB</h4>
                                    <p>
                                        Maintance and design of a database for a private client.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Personal Page Developer</h4>
                                    <p>
                                        Developed a personal page for a private client using React and TailwindCSS.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}