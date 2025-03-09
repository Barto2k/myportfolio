import { useState, useEffect } from 'react';
import RevealOnScroll from '../RevealOnScroll';

export const Home = () => {
    const [text, setText] = useState('');
    const text1 = 'FULLSTACK DEVELOPER';
    const text2 = 'STUDENT';

    useEffect(() => {
        let index = 0;
        let fullText = text1;
        const typeText = () => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                setTimeout(() => {
                    index = 0;
                    fullText = fullText === text1 ? text2 : text1;
                    typeText();
                }, 1000);
            } else {
                setTimeout(typeText, 100);
            }
        };
        typeText();

        return () => clearTimeout(typeText);
    }, []);

    return (
        <section id='home' className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi, I'm Marco Figueroa
                    </h1>
                    <p>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                            {text} <span className="animate-blink ml-1"> | </span>
                        </p>
                    </p>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
                        Student at the moment, in 4th year of Systems Engineering at the "Universidad Nacional de Cordoba FRC".
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <a href='#projects' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-900 hover:text-white transition-all duration-200'>
                            View Projects
                        </a>

                        <a href='#contact' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-900 hover:text-white transition-all duration-200'>
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};