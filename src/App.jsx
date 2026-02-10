import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code, 
  Shield, 
  Terminal, 
  ChevronDown,
  Menu,
  X,
  Cpu,
  Globe,
  Database,
  Award,
  Briefcase,
  Server,
  Cloud,
  Lock,
  User,
  FileText,
  Book,
  Crosshair,
  Monitor
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content Protection - Prevent right-click and keyboard shortcuts
  useEffect(() => {
    // Prevent right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Prevent keyboard shortcuts for copy, paste, select all, etc.
    const handleKeyDown = (e) => {
      // Prevent Ctrl+A (select all)
      if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+C (copy)
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+X (cut)
      if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+V (paste) - optional, can be enabled if needed
      if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+U (view source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      // Prevent F12 (developer tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+I (developer tools)
      if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+C (inspect element)
      if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+J (console)
      if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent drag and drop
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`text-sm tracking-widest uppercase hover:text-cyan-400 transition-colors duration-300 ${
        activeSection === id ? 'text-cyan-400 font-bold' : 'text-gray-400'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white">
            ANANT<span className="text-cyan-500">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="education" label="Education" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="skills" label="Skills" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="contact" label="Contact" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0f0f0f] border-b border-gray-800 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="education" label="Education" />
            <NavLink id="experience" label="Experience" />
            <NavLink id="skills" label="Skills" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="contact" label="Contact" />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-blue-900/5 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-500/10 text-cyan-400 text-xs tracking-widest uppercase">
              Cybersecurity & Full Stack Developer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              ANANT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                SUTHAR
              </span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed border-l-2 border-cyan-500 pl-4">
              A driven B.Tech CSE student passionate about building secure, real-world solutions. 
              Bridging the gap between robust cybersecurity and modern web development.
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
              >
                PORTFOLIO
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-600 text-white font-bold tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-8 text-gray-500">
              <a href="https://github.com/anant720" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors" title="GitHub">
                <Github size={20} /> <span className="text-sm">GitHub</span>
              </a>
              <a href="https://leetcode.com/u/__anant72/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-500 transition-colors" title="LeetCode">
                <Code size={20} /> <span className="text-sm">LeetCode</span>
              </a>
              <a href="https://www.hackerrank.com/profile/nntsuthar" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors" title="HackerRank">
                <Terminal size={20} /> <span className="text-sm">HackerRank</span>
              </a>
              <a href="mailto:nntsuthar@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero Visual - Profile Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full md:rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl group">
              <img
                src="/profile.jpg"
                alt="Anant Suthar - Cybersecurity & Full Stack Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setFullscreenImage({
                  src: "/profile.jpg",
                  alt: "Anant Suthar - Cybersecurity & Full Stack Developer"
                })}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback for broken images */}
              <div className="absolute inset-0 bg-[#151515] flex flex-col items-center justify-center text-gray-600 group-hover:text-cyan-500 transition-colors hidden">
                 <User size={64} className="mb-4" />
                 <span className="uppercase tracking-widest text-sm font-bold">Profile Photo</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Securing the Digital Future <br /> Building <span className="text-gray-500">Robust Systems</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-10">
            I am a B.Tech Cybersecurity student at MIT ADT University (2024-2028) with a fervent interest in secure coding, networking, and machine learning. 
            My journey involves not just understanding how systems work, but how to protect them. 
            From building AI-driven scam detection engines to full-stack e-commerce platforms, I merge security principles with functional design.
          </p>
        </div>
      </section>

      {/* Education & Achievements Section (Combined) */}
      <section id="education" className="py-24 bg-[#0a0a0a]">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
               {/* Left Column: Education */}
               <div>
                  <div className="flex items-center gap-3 mb-8">
                     <Book className="text-cyan-500" size={28} />
                     <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                  
                  <div className="space-y-8 relative border-l border-gray-800 ml-3">
                     <div className="relative pl-8 pb-2">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyan-500 rounded-full"></div>
                        <span className="text-xs font-bold text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded mb-2 inline-block">2024 - 2028</span>
                        <h4 className="text-xl font-bold text-white">B.Tech in Computer Science</h4>
                        <p className="text-cyan-400 text-sm font-medium">MIT ADT University, Pune</p>
                        <p className="text-gray-500 text-sm mt-1">Specialization in Cybersecurity</p>
                     </div>

                     <div className="relative pl-8">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
                        <span className="text-xs font-bold text-gray-500 bg-gray-800 px-2 py-1 rounded mb-2 inline-block">2024</span>
                        <h4 className="text-xl font-bold text-white">Higher Secondary (XII)</h4>
                        <p className="text-gray-400 text-sm">MDS Senior Secondary School</p>
                        <p className="text-gray-500 text-sm mt-1">Science Stream • 84.60%</p>
                     </div>
                  </div>
               </div>

               {/* Right Column: Achievements & Hackathons */}
               <div>
                  <div className="flex items-center gap-3 mb-8">
                     <Award className="text-yellow-500" size={28} />
                     <h3 className="text-2xl font-bold text-white">Achievements</h3>
                  </div>

                  <div className="grid gap-4">
                     {/* JEE Card */}
                     <div className="bg-[#111] p-5 rounded-lg border border-gray-800 flex items-start gap-4 hover:border-yellow-500/30 transition-colors">
                        <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500">
                           <Award size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">JEE Main 2024 Qualified</h4>
                           <p className="text-gray-400 text-sm mt-1">Secured <span className="text-white font-bold">96.4 Percentile</span> in one of India's most competitive engineering entrance exams.</p>
                        </div>
                     </div>

                     {/* Hackathons Card */}
                     <div className="bg-[#111] p-5 rounded-lg border border-gray-800 flex items-start gap-4 hover:border-purple-500/30 transition-colors">
                        <div className="bg-purple-500/10 p-3 rounded-full text-purple-500">
                           <Crosshair size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Hackathon Participation</h4>
                           <ul className="text-gray-400 text-sm mt-2 space-y-1 list-disc ml-4">
                              <li><strong className="text-white">AI for Bharat:</strong> Participated in building AI-driven solutions for Indian demographics.</li>
                              <li><strong className="text-white">AMD Slingshot:</strong> Competed in high-performance computing challenges.</li>
                           </ul>
                        </div>
                     </div>
                     
                     {/* Competitive Programming Card */}
                     <div className="bg-[#111] p-5 rounded-lg border border-gray-800 flex items-start gap-4 hover:border-green-500/30 transition-colors">
                        <div className="bg-green-500/10 p-3 rounded-full text-green-500">
                           <Code size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Competitive Programming</h4>
                           <p className="text-gray-400 text-sm mt-1 mb-2">Recently started journey on major platforms to enhance problem-solving skills.</p>
                           <div className="flex gap-3">
                              <a href="https://leetcode.com/u/__anant72/" target="_blank" rel="noreferrer" className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300 transition-colors">LeetCode</a>
                              <a href="https://www.hackerrank.com/profile/nntsuthar" target="_blank" rel="noreferrer" className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-300 transition-colors">HackerRank</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-2">My Journey</h2>
            <h3 className="text-3xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="relative border-l border-gray-800 ml-3 space-y-12">
            {/* Experience Item 1 */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform"></div>
              <span className="text-xs font-bold text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded mb-2 inline-block">Jan 2026</span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <h4 className="text-xl font-bold text-white">Fund Raising Head Internship</h4>
                <span className="hidden md:inline text-gray-600">•</span>
                <span className="text-cyan-400 font-medium">Aapka Sahara Foundation</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                Contributed to outreach initiatives and supported fundraising activities to promote the organization's mission. 
                Demonstrated strong communication skills by engaging with networks and encouraging community participation for social impact.
              </p>
               {/* Internship Certificate */}
               <div className="mt-4 w-full md:w-64 h-32 bg-gray-900 border border-gray-800 rounded overflow-hidden hover:border-cyan-500/50 transition-colors cursor-pointer">
                  <img
                    src="/internship-fundraising.jpg"
                    alt="Fund Raising Head Internship Certificate - Aapka Sahara Foundation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setFullscreenImage({
                      src: "/internship-fundraising.jpg",
                      alt: "Fund Raising Head Internship Certificate - Aapka Sahara Foundation"
                    })}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for broken images */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 hidden">
                  <FileText size={24} className="mb-2" />
                  <span className="text-xs uppercase tracking-wide">Internship Certificate</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Skills Section */}
      <section id="skills" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-2">Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-cyan-500" />
                <h4 className="text-lg font-bold text-white">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'C++', 'JavaScript', 'HTML5', 'CSS3', 'C#', 'SQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-purple-500" />
                <h4 className="text-lg font-bold text-white">Web Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'MERN Stack', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vite', 'TypeScript', 'Socket.IO', 'REST API', 'Firebase', 'Next.js'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>

             {/* Cybersecurity */}
             <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-red-500" />
                <h4 className="text-lg font-bold text-white">Cybersecurity</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Ethical Hacking', 'Network Security', 'SIEM', 'Cloud Security', 'OWASP', 'Cryptography', 'Penetration Testing'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>

            {/* AI / ML */}
            <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-green-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-green-500" />
                <h4 className="text-lg font-bold text-white">AI & Machine Learning</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Python Libraries', 'OpenAI API', 'Gemini', 'Deepseek', 'Prompt Engineering', 'AI Voiceover', 'AI Image Gen'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>

            {/* Databases & Cloud */}
            <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-yellow-500" />
                <h4 className="text-lg font-bold text-white">Database & Cloud</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'MS SQL Server', 'Oracle', 'Google Cloud', 'Microsoft Azure', 'Vercel', 'DBMS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>

             {/* Tools */}
             <div className="bg-[#151515] p-6 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-500" />
                <h4 className="text-lg font-bold text-white">Tools & Soft Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Canva', 'Notion', 'Leadership', 'Communication'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-800">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-2">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
            </div>
            <a href="https://github.com/anant720" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              View Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Project 1: GigFlow */}
             <div className="group bg-[#151515] border border-gray-800 hover:border-green-500/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:bg-gray-700 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase size={48} className="text-green-500/50 group-hover:text-green-500 transition-colors" />
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">GigFlow Marketplace</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Full stack freelance marketplace with secure auth, real-time DB, and payment gateway support. Inspired by Internshala.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">MERN</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Stripe API</span>
                </div>
                <div className="pt-4 border-t border-gray-800 flex justify-between items-center gap-3">
                  <a href="https://gig-flow-wine-alpha.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="https://github.com/anant720/GigFlow" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: SecurePass Analyzer */}
            <div className="group bg-[#151515] border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:bg-gray-700 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Lock size={48} className="text-cyan-500/50 group-hover:text-cyan-500 transition-colors" />
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">SecurePass Analyzer</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Cybersecurity tool to analyze password strength using custom rules and zxcvbn. Features attack simulations and breach detection.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Security</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">zxcvbn</span>
                </div>
                <div className="pt-4 border-t border-gray-800 flex justify-end items-center">
                   <a href="https://github.com/anant720/SecurePass-Analyzer" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: AI Guardian Engine */}
            <div className="group bg-[#151515] border border-gray-800 hover:border-purple-500/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:bg-gray-700 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Shield size={48} className="text-purple-500/50 group-hover:text-purple-500 transition-colors" />
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">AI Guardian Engine</h4>
                <p className="text-gray-400 text-sm mb-4">
                  AI-based system to detect scam and phishing messages in real-time. Implements risk scoring and classification (Safe/Suspicious).
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">ML/AI</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Python</span>
                </div>
                <div className="pt-4 border-t border-gray-800 flex justify-end items-center">
                  <a href="https://github.com/anant720/AI-GUARDIAN" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

             {/* Project 4: PhishNetra */}
             <div className="group bg-[#151515] border border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:bg-gray-700 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={48} className="text-red-500/50 group-hover:text-red-500 transition-colors" />
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">PhishNetra</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced phishing detection tool designed to identify malicious URLs and protect users from cyber threats.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Cybersecurity</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Python</span>
                </div>
                <div className="pt-4 border-t border-gray-800 flex justify-end items-center">
                   <a href="https://github.com/anant720/PhishNetra" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
            
             {/* Project 5: Campus Buddy */}
             <div className="group bg-[#151515] border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:bg-gray-700 transition-colors">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin size={48} className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors" />
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">Campus Buddy</h4>
                <p className="text-gray-400 text-sm mb-4">
                  University info system providing centralized campus details, map navigation, 3D views, and event management.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-gray-800 text-gray-300 rounded">Google Apps Script</span>
                </div>
                <div className="pt-4 border-t border-gray-800 flex justify-end items-center">
                  <Github size={18} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-2">Education & Learning</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Certifications</h3>
          </div>

          {/* Specialization / Professional Certificate */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-[#111111] border border-cyan-500/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-full md:w-64 h-44 md:h-52 rounded-xl overflow-hidden border border-gray-800 flex-shrink-0 bg-gray-900">
                <img
                  src="/cert-googlecyber.jpg"
                  alt="Google Cybersecurity Professional Certificate"
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() =>
                    setFullscreenImage({
                      src: "/cert-googlecyber.jpg",
                      alt: "Google Cybersecurity Professional Certificate",
                    })
                  }
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback for broken image */}
                <div className="w-full h-full hidden items-center justify-center text-gray-500 bg-[#151515]">
                  <FileText size={32} className="mb-2 opacity-60" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Certificate</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
                    Specialization Certificate
                  </p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    Google Cybersecurity Professional Certificate
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Issued by <span className="text-cyan-400 font-medium">Google</span> • 9-course professional program
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Completed a rigorous, hands-on specialization designed to prepare for entry-level cybersecurity roles.
                  The program covers risk management, network security, Linux &amp; SQL, Python automation, SIEM tools,
                  and end-to-end incident response workflows.
                </p>

                <a
                  href="https://coursera.org/share/32de91a4599b16abad3c579d3cc42794"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-cyan-300 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 px-4 py-2 rounded-full transition-colors"
                >
                  View Credential on Coursera
                  <ExternalLink size={14} />
                </a>

                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-1">
                      Coursework Highlights
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                      <li>Foundations of cybersecurity, CIA triad &amp; security ethics</li>
                      <li>Risk, threats &amp; vulnerabilities using NIST frameworks</li>
                      <li>Network security with firewalls, VPNs &amp; secure protocols</li>
                      <li>Linux, SQL &amp; log analysis for threat investigation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.2em] mb-1">
                      Skills Gained
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Python Automation',
                        'Linux',
                        'SQL',
                        'SIEM & IDS',
                        'Network Security',
                        'Risk Management',
                        'Incident Response',
                        'Packet Analysis',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/40 text-[10px] font-semibold tracking-wide"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Foundations of Cybersecurity",
                issuer: "Google",
                date: "Jan 2026",
                image: "/cert-cybersecurity.jpg",
                link: "https://www.coursera.org/account/accomplishments/verify/8PGJ029REWQA"
              },
              {
                title: "Introduction to Web Development",
                issuer: "UC Davis",
                date: "Jan 2026",
                image: "/cert-webdev.jpg",
                link: "https://coursera.org/share/b0cb7b463d07ce63aabbaa58dd211bed"
              },
              {
                title: "Bits and Bytes of Computer Networking",
                issuer: "Google",
                date: "Jan 2026",
                image: "/cert-networking.jpg",
                link: "https://coursera.org/share/fd9f3dbee1b433e0a0af3001369986f9"
              },
              {
                title: "Object-Oriented Programming in Java",
                issuer: "IBM",
                date: "Jan 2026",
                image: "/cert-java.jpg",
                link: "https://coursera.org/share/c2867e0f38ad955dd4be2a1f179ed3f3"
              },
              {
                title: "HTML, CSS, and JS for Web Devs",
                issuer: "Johns Hopkins Univ.",
                date: "Dec 2025",
                image: "/cert-frontend.jpg",
                link: "https://coursera.org/share/65034878fcb218a396cddd5f8c2100ae"
              },
              {
                title: "Google Cloud Computing Foundations",
                issuer: "Google Cloud",
                date: "Feb 2026",
                image: "/cert-cloud.jpg",
                link: "#"
              },
              {
                 title: "Spoken Tutorial C & C++",
                 issuer: "IIT Bombay",
                 date: "May 2025",
                 image: "/cert-cpp.jpg",
                 link: "#"
              },
              {
                 title: "Connect And Protect: Networks and Networks Security",
                 issuer: "Google",
                 date: "Feb 2026",
                 image: "/cert-networksecurity.jpg",
                 link: "#"
              }
            ].map((cert, index) => (
              <div key={index} className="group bg-[#151515] border border-gray-800 p-6 rounded-lg hover:border-cyan-500/50 transition-colors">
                {/* Certificate Image */}
                <div className="w-full h-40 bg-gray-900 rounded mb-4 border border-gray-800 overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                   <img
                     src={cert.image}
                     alt={`${cert.title} Certificate`}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                     onClick={() => setFullscreenImage({
                       src: cert.image,
                       alt: `${cert.title} Certificate - ${cert.issuer}`
                     })}
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   {/* Fallback for broken images */}
                   <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 hidden">
                     <FileText size={32} className="mb-2 opacity-50" />
                     <span className="text-[10px] uppercase tracking-widest font-semibold">Cert Photo</span>
                   </div>
                </div>
                
                <h4 className="text-white font-bold mb-1 leading-tight">{cert.title}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-cyan-500 uppercase tracking-wider">{cert.issuer}</span>
                  <span className="text-xs text-gray-500">{cert.date}</span>
                </div>
                {cert.link !== '#' && (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
                    View Credential <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/5 blur-[120px]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-xs font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Build Something Secure</h3>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Currently open to internships and collaborative projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:nntsuthar@gmail.com"
            className="inline-block px-10 py-4 bg-white text-black font-bold tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all duration-300 mb-16"
          >
            SAY HELLO
          </a>

          <div className="grid md:grid-cols-3 gap-8 text-center border-t border-gray-800 pt-12">
            <div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-500">
                <MapPin size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-gray-400 text-sm">Pune, India</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-500">
                <Mail size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <p className="text-gray-400 text-sm">nntsuthar@gmail.com</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-500">
                <Github size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Social</h4>
              <p className="text-gray-400 text-sm">github.com/anant720</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] text-center border-t border-gray-900">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Anant Suthar. Built with React & Tailwind CSS.
        </p>
      </footer>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={fullscreenImage.src}
              alt={fullscreenImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded">
              <p className="text-sm font-medium">{fullscreenImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;