import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ArrowUp, Phone, Mail } from 'lucide-react';

const UrbancraftWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);

      const sections = ['home', 'about', 'process', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation and Requirement Gathering',
      description: 'We begin by meeting with the client to understand their needs, vision, site conditions, and budget. This helps us shape a clear and realistic plan tailored to their goals.'
    },
    {
      number: '02',
      title: 'Design and Planning',
      description: 'Our team prepares architectural and structural designs, along with technical drawings, estimates, and schedules. We ensure client feedback is incorporated at every stage before final approval.'
    },
    {
      number: '03',
      title: 'Execution and Supervision',
      description: 'Once approved, we begin the construction or renovation process. Our team oversees site work, manages resources and ensures quality and safety throughout the project.'
    },
    {
      number: '04',
      title: 'Handover and Support',
      description: 'After successful completion, we hand over the project with all necessary documentation. We remain available for any post completion support or maintenance consultation.'
    }
  ];

  const achievements = [
    {
      title: 'Client-Focused Approach',
      description: 'We prioritize understanding your needs and vision, ensuring that every project is tailored to and meet your expectations from concept to completion.',
      image: '/images/buildingdesign3.jpeg'
    },
    {
      title: 'Skilled and Passionate Team',
      description: 'Our dedicated team of engineers, architects and technicians brings experience, creativity and professionalism to every project we handle.',
      image: '/images/buildingdesign2.jpeg'
    },
    {
      title: 'Quality and Reliability',
      description: 'We are committed to delivering high-quality work using reliable construction practices, materials, and project management to ensure long-lasting results.',
      image: '/images/buildingdesign1.jpeg'
    }
  ];

  const portfolioImages = [
    {
      url: 'images/wardoffice.jpeg',
      title: 'Ward Office Virkot Municipality Ward 4',
      category: 'Completed',
      description: 'Successfully completed civil works as subcontractor. Completed on Ashad 12, 2082.'
    },
    {
      url: 'images/pepsicola.jpeg',
      title: 'Residential House - Pepsicola',
      category: 'Ongoing',
      description: 'Well-planned home development project. Started from Jestha 12, 2082.'
    },
    {
      url: 'images/syangja.jpeg',
      title: 'Residential House - Syangja',
      category: 'Completed',
      description: 'Simple, durable, cost-effective home. Completed Baisakh 17 - Kartik 15, 2081.'
    },
    {
      url: 'images/sitapaila.jpeg',
      title: 'Residential Building - Sitapaila',
      category: 'Completed',
      description: 'Quality residential construction. Completed Falgun 28, 2080 - Ashoj 5, 2081.'
    },
    {
      url: 'images/birauta.jpeg',
      title: 'Residential House - Birauta Pokhara',
      category: 'Completed',
      description: 'Ground floor renovation and additional floor construction. Completed Mangsir 2, 2081 - Baisakh 6, 2082.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl' : 'bg-slate-900/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
                alt="Urbancraft Solutions" 
                className="h-12 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Urbancraft Solutions
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.id ? 'text-amber-400' : 'text-white hover:text-amber-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400 transform origin-left transition-transform ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'bg-amber-400 text-slate-900' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
        </div>

        {/* Logo Watermark */}
        <div className="absolute top-28 left-8 sm:left-12 opacity-20 hidden lg:block">
          <img 
            src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
            alt="Urbancraft Solutions" 
            className="h-32 w-auto"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Mobile Logo Display */}
          <div className="mb-8 lg:hidden">
            <img 
              src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
              alt="Urbancraft Solutions" 
              className="h-20 w-auto mx-auto opacity-90"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            URBANCRAFT<br />
            <span className="text-amber-400">SOLUTIONS</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto px-4">
            Building the Future - Innovate, Design, Build
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-amber-400 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-500 transition-all duration-300 inline-flex items-center space-x-2 shadow-2xl hover:shadow-amber-400/50"
          >
            <span>Discover Our Work</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden xl:block">
          <img 
            src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
            alt="Urbancraft Solutions" 
            className="h-96 w-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
                alt="Architecture Interior"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
                  alt="Urbancraft Solutions" 
                  className="h-12 w-auto"
                />
                <h3 className="text-amber-400 font-semibold uppercase tracking-wider">About Us</h3>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transforming ideas into spaces that inspire and elevate
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                At Urbancraft Solution, we believe in combining technical expertise with thoughtful design to create spaces that are both functional and inspiring. Our team is driven by innovation, attention to detail, and a strong commitment to client satisfaction. From planning to execution, we work to ensure every project reflects reliability, sustainability, and smart engineering.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We serve clients across residential, commercial, and institutional sectors, focusing on quality and professionalism in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-amber-400 font-semibold uppercase tracking-wider mb-4">Process</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              We design the process that processes
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              From early concepts to final delivery, we follow a structured and collaborative design process that keeps clients informed and projects on track.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-5xl sm:text-6xl font-bold text-amber-400/20 mb-4 group-hover:text-amber-400/40 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              SERVICES
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Architectural and Structural Design
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We provide customized architectural and structural design services for residential, commercial, and public buildings. Our team focuses on functionality, aesthetics, and safety, ensuring each design meets client needs, site conditions, and regulatory standards.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Construction and Project Execution
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  From small homes to larger buildings, we manage the entire construction process with attention to quality, budget, and timelines. Our skilled team and reliable methods ensure that every project is built to last.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Renovation and Interior Works
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We offer renovation, remodeling, and interior design services to upgrade and enhance existing spaces. Whether it's a home, office, or restaurant, we bring new life to structures through thoughtful planning and execution.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* Service 4 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="p-8">
                <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Engineering Consultation and Site Supervision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We assist clients with technical advice, cost estimation, planning, and on-site supervision. Our goal is to ensure projects run smoothly, maintain quality standards, and avoid costly delays or errors.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-amber-400 font-semibold uppercase tracking-wider mb-4">Our Vision</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Building Better Communities
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                Our vision is to become a trusted and leading name in Nepal's civil engineering and construction industry, known for shaping better communities through smart design, reliable construction, and a commitment to long-term value.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our mission is to deliver high-quality, innovative, and sustainable design and construction solutions that meet the unique needs of our clients, while upholding integrity, professionalism, and technical excellence in every project we undertake.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
                alt="Construction"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="projects" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Explore our diverse range of projects showcasing innovation, sustainability, and design excellence.
            </p>
          </div>

          <ScrollGallery images={portfolioImages} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Intro */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We'd Love to Hear from You
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-8">
              Ready to start your next project? Get in touch with us today.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-12">
              <a 
                href="tel:+9779702519450" 
                className="flex items-center space-x-3 text-slate-900 hover:text-amber-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                  <Phone size={20} className="text-amber-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-base sm:text-lg font-medium">+977 9702519450</span>
              </a>
              <a 
                href="mailto:urbancraftconstructs@gmail.com" 
                className="flex items-center space-x-3 text-slate-900 hover:text-amber-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                  <Mail size={20} className="text-amber-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-base sm:text-lg font-medium">urbancraftconstructs@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Centered Map */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] sm:h-[600px] border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1086.677625676424!2d85.2862486!3d27.699845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19002b6b9ce3%3A0x62a1c9a4c75ce6e4!2sKumari%20Bank%20Bafal%20Branch!5e1!3m2!1sne!2snp!4v1769339041924!5m2!1sne!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urbancraft Solutions Location"
              ></iframe>
            </div>
            
            {/* Location Text Below Map */}
            <div className="text-center mt-6">
              <p className="text-slate-600 text-lg">
                <span className="font-semibold text-slate-900">Urbancraft Solution Pvt. Ltd.</span>
                <br />
                Near Kumari Bank, Bafal, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/images/WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
                  alt="Urbancraft Solutions" 
                  className="h-16 w-auto"
                />
                <span className="text-xl font-bold text-white">
                  Urbancraft Solutions
                </span>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left">
                Building the Future
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <a 
                  href="tel:+9779702519450" 
                  className="block text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  +977 9702519450
                </a>
                <a 
                  href="mailto:urbancraftconstructs@gmail.com" 
                  className="block text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  urbancraftconstructs@gmail.com
                </a>
                <p className="text-gray-400 text-sm">
                  Bafal, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Urbancraft Solution Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-amber-400 text-slate-900 p-3 sm:p-4 rounded-full shadow-2xl hover:bg-amber-500 transition-all duration-300 z-40 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

// Scroll Gallery Component with Parallax Effect
const ScrollGallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleImages(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((ref, index) => {
        if (ref && visibleImages.has(index)) {
          const rect = ref.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const translateY = (scrollPercent - 0.5) * 50;
          const img = ref.querySelector('img');
          if (img) {
            img.style.transform = `translateY(${translateY}px) scale(1.1)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleImages]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          data-index={index}
          className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
            visibleImages.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: `${(index % 3) * 100}ms`,
            height: index % 3 === 1 ? '400px' : '320px'
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transform: 'translateY(0) scale(1.1)' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                {image.category}
              </p>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                {image.title}
              </h3>
              {image.description && (
                <p className="text-gray-300 text-sm">
                  {image.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrbancraftWebsite;