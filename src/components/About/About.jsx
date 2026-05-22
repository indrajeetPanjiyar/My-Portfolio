import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-4 md:mt-8"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Indrajeet Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
            sequence={[
                'Fullstack Developer', 2000,
                'Software Developer', 2000,
                'Coder', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#8245ec' }}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a final-year B.Tech student in Electrical and Electronics Engineering at NIT Andhra Pradesh with a deep specialization in Full Stack Development using the MERN stack. I have built and deployed scalable web applications—such as a real-time ride-hailing platform and an EdTech system—utilizing MongoDB, Express.js, React.js, and Node.js. I have a strong grasp of Data Structures and Algorithms in C++, having solved 250+ problems on LeetCode to sharpen my problem-solving skills, and I am well-versed in OOPs principles, REST APIs, Database management, and Operating System fundamentals. With a solid foundation in both SQL and NoSQL databases, as well as version control using Git and GitHub.
          </p>

          {/* Resume Button & Leetcode Profile*/}
          <div className='flex md:justify-between flex-col md:flex-row items-center gap-4'>
            <a
              href="https://drive.google.com/file/d/1BKFQj6LSAZY71ZaPhiARwR9Ovp44hI3P/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              MY RESUME
            </a>
            <a
              href="https://leetcode.com/u/Indrajeet_Panjiyar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              LeetCode Profile
            </a>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-transform transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(130,69,236,0.5)]">
            <img
              src={profileImage}
              alt="Indrajeet Kumar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* LeetCode Stats Card */}
      {/* <div className="mt-12 bg-[#0a192f] border border-purple-500 p-6 rounded-xl shadow-lg text-center max-w-sm mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[#8245ec]/20 hover:border-purple-400 cursor-default">
        <h3 className="text-white font-bold text-xl mb-4">LeetCode Statistics</h3>
        
        <div className="flex justify-center items-center py-2">
          <a href="https://leetcode.com/u/Indrajeet_Panjiyar/" target="_blank" rel="noreferrer">
            <img 
              src="https://leetcode-badge-sage.vercel.app/badge/Indrajeet_Panjiyar?theme=dark" 
              alt="Indrajeet's LeetCode Badge" 
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>

        <p className="mt-4 text-gray-400 text-sm">
          Actively solving problems to master Data Structures and Algorithms.
        </p>
        
        <a 
          href="https://leetcode.com/u/Indrajeet_Panjiyar/" 
          target="_blank" 
          rel="noreferrer"
          className="mt-6 inline-block w-full py-2 rounded-lg border border-[#8245ec] text-sm text-[#8245ec] font-medium hover:bg-[#8245ec] hover:text-white transition-all duration-300"
        >
          View Profile
        </a>
      </div> */}

    </section>
  );
};

export default About;