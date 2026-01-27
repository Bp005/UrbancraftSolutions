import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const UrbancraftWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);

      const sections = ['home', 'about', 'services','process', 'projects', 'contact'];
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  

  const processSteps = [
    {
      number: '01',
      title: 'Consultation and Requirement Gathering',
      description: 'We begin by meeting withthe client to understand their needs, vision, site conditions,and budget. This helps us shape a clear and realistic plan tailored to their goals.'
    },
    {
      number: '02',
      title: 'Design and Planning',
      description: 'Our team prepares architectural and structural designs, along with technical drawings, estimates,and schedules. We ensure clientfeedback is incorporated at every stage before final approval.'
    },
    {
      number: '03',
      title: 'Execution and Supervision',
      description: 'Once approved, we begin the construction or renovation process. Our team oversees site work, manages resources and ensures quality and safety throughout the project..'
    },
    {
      number: '04',
      title: 'Handover and Support',
      description: 'After successful completion, wehand over the project with allnecessary documentation. Weremain available for any postcompletion support ormaintenance consultation'
    }
  ];

  const achievements = [
    {
      title: 'Client-Focused Approach',
      description: 'We prioritize undertanding your needs and vision, ensuring that every project is tailored to and meet your expectations from concept to completion.',
      image: '/images/buildingdesign3.jpeg'
    },
    {
      title: 'Skilled andPassionate Team',
      description: 'Our dedicated team of engineers, architects and technicians brings experience, creativity and professionalism to every project we handle.',
      image: '/images/buildingdesign2.jpeg'
    },
    {
      title: 'Quality and Reliability' ,
      description: 'We are committed to delivering high-quality workusing reliable construction practices, materials, and project management to ensure long-lasting results.',
      image: '/images/buildingdesign1.jpeg'
    }
  ];

  const portfolioImages = [
    {
      url: 'images/wardoffice.jpeg',
      title: 'Ward Office Virkot Municipality Ward 4',
      category:'ongoing',
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
                src="\images\WhatsApp Image 2026-01-26 at 11.09.46.jpeg"
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
                alt="Architecture Interior"
                className="rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-amber-400 font-semibold uppercase tracking-wider mb-4">About Us</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transforming ideas into spaces that inspire and elevate
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                    At Urbancraft Solution, we believe in
                    combining technical expertise with
                    thoughtful design to create spaces
                    that are both functional and inspiring.
                    Our team is driven by innovation,
                    attention to detail, and a strong
                    commitment to client satisfaction.
                    From planning to execution, we work
                    to ensure every project reflects
                    reliability, sustainability, and smart
                    engineering.
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Conference Section */}
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

      {/* Portfolio Gallery Section with Scroll Animation */}
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

      {/* Achievements Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why choose us?
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
                  {/* <button className="text-amber-400 font-semibold inline-flex items-center space-x-2 group-hover:space-x-3 transition-all text-sm sm:text-base">
                    <span>Read More</span>
                    <ChevronRight size={16} />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section
      <section id="clients" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-12 sm:mb-16 text-center">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-full border border-slate-200 px-4 sm:px-6 py-3 sm:py-4 text-center shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-slate-600 font-medium text-xs sm:text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
            <button
              onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl mb-12"
            >
              Reach out to us
            </button>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
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

          {/* Map + Form Section */}
          <div id="contact-form" className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px] border border-slate-200 bg-slate-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">Urbancraft Solution Pvt. Ltd.<br/>Kathmandu, Nepal</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Kathmandu+Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-all duration-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Let's Shape Your Ideas!
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Contact us for your next construction project.
              </p>
              
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    autoComplete="name"
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    autoComplete="tel"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="6"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-amber-400 text-slate-900 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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