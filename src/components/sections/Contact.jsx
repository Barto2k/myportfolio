import { useState } from 'react';
import RevealOnScroll from '../RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        ).then((result) => {
            alert('Message Sent Successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }).catch(() => {
            alert('Oops, something went wrong. Please try again!');
        });
    };

    return (
        <section id="contact" className="w-full min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className='px-4 w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='relative'>
                            <input 
                                type='text' 
                                id='name'
                                name='name' 
                                required
                                value={formData.name}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Name...'
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div className='relative'>
                            <input 
                                type='email' 
                                id='email' 
                                name='email'
                                required
                                value={formData.email}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='example@gmail.com'
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        
                        <div className='relative'>
                            <input 
                                type='text' 
                                id='subject'
                                name='subject'
                                required
                                value={formData.subject}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Subject...'
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                        </div>
                        <div className='relative'>
                            <textarea 
                                type='message' 
                                name='message'
                                id='message' 
                                required
                                value={formData.message}
                                rows={5}
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                                placeholder='Your Message...'
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button type='submit' className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium hover:-translate-y-0.5 
                                                        hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-900 hover:text-white transition-all duration-200'>
                            Send Message
                        </button>
                    </form>
                    
                </div>

            </RevealOnScroll>
        </section>
    );
};