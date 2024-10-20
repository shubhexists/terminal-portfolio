import React from 'react';

import { FaCode, FaFire, FaGithub, FaGlobe, FaLightbulb, FaNpm, FaRocket } from 'react-icons/fa';

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (command: string, setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case 'help':
      return (
        <div className="flex flex-col space-y-1">
          <span className="text-[#58a6ff]">Available commands:</span>
          {[
            { cmd: 'about', desc: 'Learn more about me' },
            { cmd: 'socials', desc: 'Find me on the web' },
            { cmd: 'skills', desc: 'Check out my technical skills' },
            { cmd: 'projects', desc: 'View some of my cool projects' },
            { cmd: 'resume', desc: 'Take a look at my resume' },
            { cmd: 'experience', desc: 'Explore my professional journey' },
            { cmd: 'goals', desc: 'Discover my aspirations' },
            { cmd: 'clear', desc: 'Clear the terminal' },
          ].map(({ cmd, desc }) => (
            <div key={cmd} className="flex">
              <span className="text-[#f0883e] w-24">{cmd}</span>
              <span className="text-[#8b949e]">- {desc}</span>
            </div>
          ))}
        </div>
      );
    case 'about':
      return (
        <div className="space-y-2">
          <p>Hey there! Thanks for your interest in getting to know me better.</p>
          <p>
            I'm <span className="text-[#f0883e]">Shubham Singh</span>, currently a Senior Backend Engineer at{' '}
            <a href="https://tezda.com" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
              Tezda
            </a>
            .
          </p>
          <p>
            I'm a huge <span className="text-[#f0883e]">Linux enthusiast</span> and absolutely love working in the{' '}
            <span className="text-[#f0883e]">terminal</span>. My setup is minimalist - just my terminal, IDE, and browser!
          </p>
          <p>
            <span className="text-[#f0883e]">Fun Fact:</span> My nickname is <span className="text-[#f0883e]">Jerry</span> (yes, from Tom and Jerry!).
            It started as a counter to a friend nicknamed Tom. 😎
          </p>
          <p>
            I'm passionate about building things and always eager to learn. When I'm not coding, you'll probably find me jamming to Bollywood tunes.{' '}
            <span className="text-[#f0883e]">Indian music for the win!</span> 🎵
          </p>
        </div>
      );
    case 'socials':
      return (
        <div className="space-y-2">
          <p>Social life? What's that? I live in a basement :) ...</p>
          <p>Thanks for your interest! Here's where you can find me online:</p>
          <div className="flex flex-col space-y-1">
            <div className="flex">
              <span className="text-[#f0883e] w-24">GitHub</span>
              <a href="https://github.com/shubhexists" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                shubhexists
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24"> X </span>
              <a href="https://x.com/shubh_exists" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                shubh_exists
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">LinkedIn</span>
              <a href="https://www.linkedin.com/in/shubham-singh-36204b238/" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff]">
                Shubham Singh
              </a>
            </div>
            <div className="flex">
              <span className="text-[#f0883e] w-24">Email</span>
              <a href="mailto:shubh622005@gmail.com" className="text-[#58a6ff]">
                shubh622005@gmail.com
              </a>
            </div>
          </div>
          <p>Feel free to reach out! I'm most responsive on LinkedIn.</p>
        </div>
      );
    case 'skills':
      return (
        <div className="space-y-2">
          <div>
            <span className="text-[#f0883e]">Languages (in order of proficiency):</span>
            <p className="text-[#8b949e]">JavaScript, TypeScript, Rust, Go, Python, Dart (Flutter), C, Java</p>
          </div>
          <div>
            <span className="text-[#f0883e]">Frameworks/Libraries:</span>
            <p className="text-[#8b949e]">React (NextJS), Express, Flutter, Gorilla Mux, Flask</p>
          </div>
          <div>
            <span className="text-[#f0883e]">Databases/Infrastructure:</span>
            <p className="text-[#8b949e]">MongoDB, SQL, Redis, Docker, AWS EC2, Prometheus, Grafana, Loki, Nginx</p>
          </div>
        </div>
      );
    case 'projects':
      return (
        <div className="space-y-4">
          {[
            {
              name: 'Ved Analytics',
              desc: 'A privacy-focused website analytics platform you can use to generate beautiful dashboards for your websites',
              link: 'https://vedanalytics.in',
            },
            {
              name: 'Vanish',
              desc: 'A simple config tool to make locally trusted X.509 development certificates for your domains (Alternative to MKCERT, written in Rust)',
              github: 'https://github.com/shubhexists/vanish',
            },
            {
              name: 'term_ansi',
              desc: 'A compilation of Rust macros to implement ANSI Colour Codings in terminal',
              github: 'https://github.com/shubhexists/term_ansi',
              crate: 'https://crates.io/crates/term_ansi',
            },
            {
              name: 'mlvm',
              desc: 'A complete symlink working alternative to nvm, written in pure Rust (alternative to fnm)',
              github: 'https://github.com/shubhexists/mlvm',
              crate: 'https://crates.io/crates/mlvm',
            },
            {
              name: 'Prism',
              desc: 'A minimalist web framework (Replica of ExpressJS) written from scratch in TypeScript',
              github: 'https://github.com/shubhexists/prism',
            },
            {
              name: 'React Maps',
              desc: 'Lightweight React components for interactive maps using SVG parsing',
              github: 'https://github.com/shubhexists/react-maps',
              npm: 'https://www.npmjs.com/package/react-maps',
            },
            {
              name: 'Go-JSON-DB',
              desc: 'A JSON Database similar to MongoDB (Atlas) implemented in Golang',
              github: 'https://github.com/shubhexists/go-json-db',
            },
            {
              name: '2048',
              desc: 'An implementation of the popular game 2048 in Flutter (Dart)',
              github: 'https://github.com/shubhexists/2048',
            },
            {
              name: 'Vault',
              desc: 'A simplified version control system built in Rust for local files, similar to Git',
              github: 'https://github.com/shubhexists/vault',
              crate: 'https://crates.io/crates/vault',
            },
            {
              name: 'Proximity',
              desc: 'A terminal-based group chat application using sockets, written in C',
              github: 'https://github.com/shubhexists/proximity',
            },
            {
              name: 'libaddress',
              desc: 'A robust TypeScript/JavaScript library designed for handling addresses across multiple countries with different formats',
              github: 'https://github.com/shubhexists/libaddress',
              npm: 'https://www.npmjs.com/package/libaddress',
            },
          ].map((project, index) => (
            <div key={index} className="border border-[#30363d] rounded-md p-4 bg-[#0d1117]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[#f0883e] text-lg font-semibold">{project.name}</h3>
                  <p className="text-[#8b949e] mt-1">{project.desc}</p>
                </div>
                <div className="flex space-x-2">
                  {project.crate && (
                    <a href={project.crate} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors">
                      <img src="/cargo.png" alt="Cargo" className="w-6 h-6 object-cover" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.npm && (
                    <a href={project.npm} target="_blank" rel="noopener noreferrer" className="text-[#cb3837] hover:text-[#cb3837] transition-colors">
                      <FaNpm size={24} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#58a6ff] hover:text-[#58a6ff] transition-colors"
                    >
                      <FaGlobe size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    case 'clear':
      setCommand([]);
      return '';
    case 'resume':
      window.open('https://drive.google.com/file/d/1EismNOcVJc3BtBRkWU_z_Hz6KvQHgoja/view?usp=sharing', '_blank');
      return 'Opening resume in a new tab...';
    case 'experience':
      return (
        <div className="space-y-6">
          {[
            {
              company: 'Tezda Inc',
              role: 'Senior Backend Developer',
              location: 'Remote, UK',
              date: 'April 2024 - Current',
              description: 'Working on advanced backend systems and RTC stack.',
              achievements: [
                'Developed App Notifications Backend using queues, sockets, and Firebase (FCM)',
                'Built entire RTC Stack for audio and video calls using Livekit, Redis, deployed on Kubernetes',
                'Created Lambda Functions connected to AWS API Gateway',
                'Wrote extensive Unit and Integration tests for AWS Lambda APIs',
              ],
              icon: <FaCode className="text-[#f0883e] text-4xl" />,
            },
            {
              company: 'INDOTABI TOURS',
              role: 'Full Stack Developer',
              location: 'Delhi, India',
              date: 'Sept 2022 - April 2024',
              description: "Built and deployed a Japanese-language, mobile-centric website to showcase the company's products.",
              achievements: [
                'Developed frontend with NextJS (TypeScript) and backend with ExpressJS',
                'Worked with 3000+ lines of PostgreSQL scripts for database schema',
                <>
                  Successfully launched the website:{' '}
                  <a href="https://indotabi.com" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">
                    indotabi.com
                  </a>
                </>,
              ],
              icon: <FaFire className="text-[#f0883e] text-4xl" />,
            },
            {
              company: 'Zoomtod',
              role: 'Product Developer',
              location: 'Remote, US',
              date: 'Jan 2022 - Sept 2022',
              description: 'Developed a feature-rich, voice-only communication application using WebRTC, now in production with 500+ users.',
              achievements: [
                'Built a cross-platform app using Flutter (Dart), deployed on Google Play Store',
                'Developed an admin panel in ReactJS for real-time room activity tracking using Web Sockets',
                'Set up server and API monitoring using Grafana, Prometheus, and Loki for logs collection',
                'Achieved 500+ users with 100+ active users for more than 8 hours daily',
              ],
              icon: <FaRocket className="text-[#f0883e] text-4xl" />,
            },
            {
              company: 'Vitalth Pvt. Ltd.',
              role: 'Backend Developer',
              location: 'Delhi, India',
              date: 'Dec 2020 - Jan 2022',
              description: "Developed a robust backend using India's UHI (Unified Health Interface) architecture.",
              achievements: [
                "Responsible for implementing Govt. of India's UHI architecture",
                'Completed M1 and M2 phases of UHI onboarding process',
              ],
              icon: <FaLightbulb className="text-[#f0883e] text-4xl" />,
            },
          ].map((job, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#1a1b26] to-[#24283b] rounded-lg p-6 shadow-lg border border-[#30363d] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#f0883e] to-[#ff4d4d] opacity-10 rounded-bl-full"></div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{job.icon}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#f0883e] text-xl font-bold">{job.company}</h3>
                    <span className="text-[#8b949e] text-sm">{job.date}</span>
                  </div>
                  <p className="text-[#58a6ff] font-semibold mb-1">{job.role}</p>
                  <p className="text-[#8b949e] text-sm mb-2">{job.location}</p>
                  <p className="text-[#8b949e] mb-4">{job.description}</p>
                  <div className="space-y-2">
                    <p className="text-[#f0883e] font-semibold">🔥 Key Achievements:</p>
                    <ul className="list-none space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#f0883e] mr-2">▹</span>
                          <span className="text-[#8b949e]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f0883e] to-[#ff4d4d]"></div>
            </div>
          ))}
        </div>
      );
    case 'goals':
      return (
        <div className="space-y-2">
          <p>
            The future is full of possibilities, and I'm excited to explore them! While I'm not entirely sure where life will take me, I have some
            guiding principles and areas of interest:
          </p>
          <ul className="list-disc list-inside text-[#8b949e]">
            <li>
              Pursue projects and roles that bring <span className="text-[#f0883e]">happiness</span> and fulfillment
            </li>
            <li>
              Be part of <span className="text-[#f0883e]">impactful initiatives</span> that can make a difference in the world
            </li>
            <li>
              Explore cutting-edge fields like <span className="text-[#f0883e]">Artificial Intelligence</span>,{' '}
              <span className="text-[#f0883e]">Space Technology</span>, <span className="text-[#f0883e]">Nuclear Energy</span>, and even{' '}
              <span className="text-[#f0883e]">Hydroponics</span>
            </li>
          </ul>
          <p>I'm open to wherever my passion and opportunities lead me. After all, that's the beauty of life - it's full of surprises!</p>
        </div>
      );
    default:
      return (
        <div>
          <span className="text-[#f97583]">Command not found.</span>
          <br />
          Type <span className="text-[#f0883e]">help</span> to see available commands.
        </div>
      );
  }
};
