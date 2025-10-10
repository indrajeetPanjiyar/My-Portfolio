import React from 'react';
import { certificates } from '../../constants';

const Certificates = () => {
  return (
    <section 
      id="certificates" 
      className="py-4 pb-20 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of certifications that validate my skills, learning, and achievements across different technologies and domains.
        </p>
      </div>
        <div className="grid gap-24 grid-cols-1 md:grid-cols-2">
            {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4">
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-fit rounded-xl"
                    />
                </div>
                <div className='p-6'>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>
                    {cert.organization}
                  </p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel='noreferrer'
                    className="text-purple-500 mt-2 block">
                      View Certificate
                  </a>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Certificates;