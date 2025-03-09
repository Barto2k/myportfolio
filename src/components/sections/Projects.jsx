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
                                Zona Fit GYM ABM
                            </h3>
                            <p className="text-gray-400 mb-4">
                                An desktop application to manage a gym using CRUD. Did it for educational purposes following patterns like MVC, DAO, DTO, etc.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Spring", "Swing", "JAVA"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barto2k/ZonaFit-Spring-Swing"  className="text-blue-400 hover:text-blue300 transition-colors my-4">
                                    ➡️ View Project ⬅️
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                ABM ZonaFitGym
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Using Spring i developed this application for practice.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Spring", "Java"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barto2k/ZonaFitGYM-Spring"  className="text-blue-400 hover:text-blue300 transition-colors my-4">
                                    ➡️ View Project ⬅️
                                </a>
                            </div>
                        </div>

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
                                ABM of a Medical Clinic
                            </h3>
                            <p className="text-gray-400 mb-4">
                                An application to manage a medical clinic with REST API.
                                Made for educational purposes. (Unfinished)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "NodeJS", "ExpressJS", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barto2k/CIMA_SOFTWARE" className="text-blue-400 hover:text-blue300 transition-colors my-4">
                                    ➡️ View Project ⬅️
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Functional Portfolio
                            </h3>
                            <p className="text-gray-400 mb-4">
                                This is a functional portfolio made with React and SCSS. It have an integration with Api EmailJS and an API with a Map.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "SCSS", "JavaScript"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Barto2k/SCSS-Portfolio" className="text-blue-400 hover:text-blue300 transition-colors my-4">
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