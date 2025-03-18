import RevealOnScroll from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                ABM of Test Drive Cars
                            </h3>
                            <p className="text-gray-400 mb-4">
                                An application to manage a car dealership. Made for educational purposes with REST API, CRUD, API Gateway and Microservices. It have an Keyloack auth integration and a Notification system asked by the teacher. Following some patterns like MVC, DAO, DTO, etc.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Sring", "JAVA", 'Keyloack', 'ApiGateway'].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barto2k/JAVA-BACKEND-ABM"  className="text-blue-400 hover:text-blue300 transition-colors my-4">
                                    ➡️ View Project ⬅️
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                CIMA - ABM
                            </h3>
                            <p className="text-gray-400 mb-4">
                                An application to manage a integration  center for people whit disabilities with REST API.
                                Made for a real client, it contains a patient ABM, another for professionals, logic to change passwords, and logic to log in with authentication using the Bycript library.
                                To log in to the application you must use the <span className="font-bold"> username: admin and the password: 123 </span> . It should be noted that this software is a demo, therefore you are allowed to upload both patients and professionals. I strongly urge you to do so in order to understand the system and not overload the free server on which it was deployed. The real software has more features (appointment calendar, specialties, etc.) but for privacy reasons with the company I cannot publish them.

                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "NodeJS", "ExpressJS", "JavaScript", "Tailwind CSS", "PostgreSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://frontend-cima.onrender.com/" className="text-blue-400 hover:text-blue300 transition-colors my-4">
                                    ➡️ View Project ⬅️
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}