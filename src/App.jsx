import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoBizztrack from "./assets/Logo-Bizztrack.png";
import inventoryLogo from "./assets/Inventory-Manager.png";
import realestateLogo from "./assets/Realestate-Manager.png";
import enterpriseLogo from "./assets/Enterprise.png";

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const solutions = [
  {
    name: "Bizztrack Inventory Manager",
    desc: "Smart inventory control for modern businesses.",
    logo: inventoryLogo,
    alt: "Bizztrack Inventory Manager Logo",
    os: ["Windows", "Linux", "MacOS"],
    color: "from-[#68d3e8] to-[#ac82f6]",
  },
  {
    name: "Bizztrack Real Estate Manager",
    desc: "Effortless property and client management.",
    logo: realestateLogo,
    alt: "Bizztrack Real Estate Manager Logo",
    os: ["Windows", "Linux", "MacOS"],
    color: "from-[#90f46b] to-[#68d3e8]",
  },
  {
    name: "Bizztrack Enterprise",
    desc: "Comprehensive suite for enterprise operations.",
    logo: enterpriseLogo,
    alt: "Bizztrack Enterprise Logo",
    os: ["Windows", "Linux", "MacOS"],
    color: "from-[#ac82f6] to-[#90f46b]",
  },
];

const industries = [
  "Web3", "SaaS", "Fintech", "Retail", "Real Estate", "Logistics", "Healthcare", "Startups",
];

const clients = [
  "ClientOne", "ClientTwo", "ClientThree", "ClientFour", "ClientFive", "ClientSix",
];

const caseStudies = [
  { name: "Inventory Pro", desc: "Inventory optimization for retail.", img: "", },
  { name: "EstateX", desc: "Real estate CRM transformation.", img: "", },
  { name: "Enterprise360", desc: "Unified business dashboard.", img: "", },
];

const faqs = [
  { q: "What platforms do you support?", a: "All Bizztrack apps are available for Windows, Linux, and MacOS." },
  { q: "Can I try before I buy?", a: "Yes, we offer free demos and trial versions for all our products." },
  { q: "Do you offer custom solutions?", a: "Absolutely! We tailor our apps to fit your business needs." },
  { q: "Is support included?", a: "All plans include 24/7 support and onboarding assistance." },
];

function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#181830] to-[#0d0d0d] opacity-90" />
      
      {/* Floating blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '64px 64px' 
           }} 
      />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0d0d0d] py-3' : 'py-6'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-12">
        <motion.div 
          className="flex items-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <img src={logoBizztrack} alt="Bizztrack" className="h-14 w-auto" />
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-white transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#68d3e8] transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-[#181830] font-semibold rounded-full hover:bg-opacity-90 transition-all hover:shadow-lg hover:shadow-[#68d3e8]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Let's talk
          </motion.a>
        </nav>
        
        <motion.button 
          className="md:hidden text-2xl text-white z-50 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </motion.button>

        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 transition-all duration-500 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white text-2xl font-semibold hover:text-[#68d3e8] transition-colors"
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 px-8 py-3 bg-white text-[#181830] font-semibold rounded-full hover:bg-opacity-90 transition-all"
              onClick={() => setOpen(false)}
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          
          <div className="space-y-6 mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              Your trusted <span className="neon-green">Business Partner</span><br/>
              for <span className="neon-cyan">Digital Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-8"
            >
              Bizztrack delivers modern, cross-platform business management apps 
              for inventory, real estate, and enterprise needs.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <a 
              href="#contact" 
              className="btn-primary text-lg md:text-xl hover:translate-y-[-5px]"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-[5%] top-1/4 w-12 h-12 rounded-full border border-[#68d3e8]/30 opacity-60"></div>
      <div className="absolute right-[10%] bottom-1/4 w-24 h-24 rounded-full border-2 border-[#90f46b]/20 opacity-40"></div>
      <div className="absolute left-[15%] bottom-[20%] w-6 h-6 rounded-full bg-[#68d3e8]/10"></div>
      <div className="absolute right-[20%] top-[30%] w-8 h-8 rounded-full bg-[#ac82f6]/10"></div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section-padding relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Our <span className="neon-cyan">Solutions</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Powerful business tools designed for modern enterprises
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {solutions.map((sol, i) => (
            <motion.div 
              key={sol.name}
              className="modern-card flex flex-col items-center p-8 md:p-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-lg mb-6 p-2">
                <img src={sol.logo} alt={sol.alt} className="w-16 h-16 object-contain" />
              </div>
              
              <h3 className="text-xl font-bold text-[#181830] mb-3 text-center">
                {sol.name}
              </h3>
              
              <p className="text-[#23234a]/80 mb-8 text-center text-sm">
                {sol.desc}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2 justify-center">
                {sol.os.map((os) => (
                  <span 
                    key={os} 
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${sol.color} text-xs text-white font-medium shadow-sm`}
                  >
                    {os}
                  </span>
                ))}
              </div>
              
              <button className="mt-6 px-4 py-2 rounded-full bg-[#181830] text-white text-sm font-semibold hover:bg-[#181830]/80 transition-colors">
                Learn more
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-[5%] w-16 h-16 rounded-full border border-[#ac82f6]/30 opacity-40"></div>
      <div className="absolute top-1/2 right-[5%] w-20 h-20 rounded-full border-2 border-[#68d3e8]/20 opacity-30"></div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            We have extensive <span className="neon-cyan">industry experience</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Our solutions are tailored to various industries' unique needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/95 rounded-2xl py-6 px-4 text-center shadow-lg border border-white/10 group hover:border-[#68d3e8] hover:shadow-[0_0_20px_rgba(104,211,232,0.3)] transition-all duration-300"
            >
              <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-br from-[#0d0d0d] to-[#181830] flex items-center justify-center text-white mx-auto">
                {ind[0]}
              </div>
              <h3 className="text-[#181830] font-semibold group-hover:text-[#181830]">
                {ind}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[400px] bg-[#68d3e8] opacity-5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="section-padding relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Turning projects into <span className="neon-green">trusted partnerships</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Collaborating with industry leaders to create exceptional solutions
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-36 h-16 md:w-40 md:h-16 glass-effect rounded-xl flex items-center justify-center text-white/80 text-lg font-medium hover:text-white hover:border-[#68d3e8]/30 transition-all"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section id="testimonials" className="section-padding relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Client <span className="neon-violet">Success Stories</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
            className="modern-card p-10 md:p-12 relative"
          >
            {/* Quote mark */}
            <div className="absolute top-8 left-8 text-[120px] leading-none text-[#68d3e8]/10 font-serif">
              "
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#68d3e8] to-[#ac82f6] p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <span className="text-4xl">😊</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 z-10">
                <blockquote className="text-xl md:text-2xl text-[#181830] font-medium mb-6 italic">
                  "Bizztrack transformed our business operations. Their apps are intuitive, powerful, and the support is top-notch!"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="text-[#181830] font-bold">Jane Doe</div>
                    <div className="text-[#23234a]/70 text-sm">COO @ ExampleCorp</div>
                  </div>
                  <div className="ml-auto flex">
                    <span className="text-[#68d3e8] text-lg">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-12 h-12 rounded-full border border-[#90f46b]/30 opacity-40"></div>
      <div className="absolute bottom-1/4 left-[5%] w-20 h-20 rounded-full border border-[#68d3e8]/20 opacity-30"></div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    { id: 1, title: "Cross-platform apps", desc: "Solutions for every business size and platform" },
    { id: 2, title: "Fast onboarding", desc: "Quick setup and 24/7 dedicated support" },
    { id: 3, title: "Customizable", desc: "Tailored to fit your unique workflow needs" },
    { id: 4, title: "Industry trusted", desc: "Used and recommended by leading companies" },
  ];
  
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
              Why <span className="neon-violet">choose Bizztrack?</span>
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: benefit.id * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#68d3e8] to-[#ac82f6] flex items-center justify-center text-white font-bold shadow-lg">
                    {benefit.id}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/60 text-base">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8"
            >
              <a href="#contact" className="btn-primary">
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <div className="relative flex flex-col items-center w-full h-[400px]">
              {/* Platform icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-6 z-20">
                <div className="bg-[#68d3e8] w-16 h-16 rounded-2xl flex items-center justify-center text-xl text-white font-bold shadow-lg shadow-[#68d3e8]/20">W</div>
                <div className="bg-[#ac82f6] w-16 h-16 rounded-2xl flex items-center justify-center text-xl text-white font-bold shadow-lg shadow-[#ac82f6]/20">L</div>
                <div className="bg-[#90f46b] w-16 h-16 rounded-2xl flex items-center justify-center text-xl text-white font-bold shadow-lg shadow-[#90f46b]/20">M</div>
              </div>
              
              {/* Showcase graphics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-3xl bg-gradient-to-br from-[#0d0d0d] via-[#181830] to-[#0d0d0d] border border-white/10 flex items-center justify-center z-10 overflow-hidden shadow-2xl">
                <div className="absolute w-full h-full">
                  {/* Animated circles */}
                  <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-[#68d3e8]/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-[10%] right-[10%] w-32 h-32 bg-[#ac82f6]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <img src={logoBizztrack} alt="Bizztrack" className="w-20 h-20 object-contain z-20" />
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-3/4 right-0 flex gap-3">
                <div className="w-8 h-8 rounded-full glass-effect"></div>
                <div className="w-8 h-8 rounded-full glass-effect"></div>
                <div className="w-8 h-8 rounded-full glass-effect"></div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute bottom-0 left-1/4 w-40 h-20 bg-gradient-to-tr from-[#68d3e8] to-[#ac82f6] rounded-2xl opacity-80 flex items-center justify-center text-white font-bold text-sm shadow-xl">
                <span>Interactive Dashboard</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Featured <span className="neon-violet">Case Studies</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Explore how we've helped businesses transform their operations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {caseStudies.map((cs, i) => (
            <motion.div 
              key={cs.name}
              className="modern-card flex flex-col items-center p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#68d3e8] via-[#ac82f6] to-[#90f46b] p-[2px] mb-6 shadow-lg">
                <div className="w-full h-full rounded-2xl flex items-center justify-center bg-white text-3xl font-bold text-[#181830]">
                  {cs.name[0]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#181830] mb-3 text-center">
                {cs.name}
              </h3>
              
              <p className="text-[#23234a]/70 mb-8 text-center text-sm">
                {cs.desc}
              </p>
              
              <button className="mt-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#90f46b] to-[#68d3e8] text-white font-semibold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(144,244,107,0.3)] hover:scale-105 transition-all">
                View Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[5%] w-16 h-16 rounded-full border border-[#ac82f6]/30 opacity-40"></div>
      <div className="absolute bottom-1/4 right-[5%] w-24 h-24 rounded-full border-2 border-[#68d3e8]/20 opacity-30"></div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready to <span className="neon-cyan">Get Started?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Let's discuss how we can help your business grow with our solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          <motion.div 
            className="glass-effect rounded-3xl p-10 flex flex-col items-center text-center shadow-lg border border-[#68d3e8]/20 hover:border-[#68d3e8]/40 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#68d3e8] to-[#ac82f6] mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Grow Your Business</h3>
            <p className="text-white/70 mb-8">Ready to scale your operations with our powerful business solutions?</p>
            <a href="mailto:contact@bizztrack.com" className="btn-primary">
              Work with us
            </a>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-3xl p-10 flex flex-col items-center text-center shadow-lg border border-[#ac82f6]/20 hover:border-[#ac82f6]/40 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ac82f6] to-[#90f46b] mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Schedule a Demo</h3>
            <p className="text-white/70 mb-8">See our solutions in action with a personalized demonstration.</p>
            <a href="tel:+1234567890" className="btn-primary bg-gradient-to-r from-[#ac82f6] to-[#90f46b]">
              Book a Call
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Background effect */}
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[400px] bg-[#68d3e8] opacity-5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  
  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Frequently <span className="neon-green">Asked Questions</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => (
            <motion.div 
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-effect rounded-2xl transition-all duration-300 ${open === i ? 'bg-opacity-15' : 'bg-opacity-5'}`}
            >
              <button 
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-lg text-white font-semibold pr-8">{faq.q}</span>
                <span className={`text-[#68d3e8] text-xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: open === i ? 'auto' : 0,
                  opacity: open === i ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-white/70">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-[10%] w-12 h-12 rounded-full border border-[#90f46b]/30 opacity-30"></div>
      <div className="absolute top-1/4 right-[10%] w-24 h-24 rounded-full border-2 border-[#68d3e8]/20 opacity-20"></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center mb-6">
              <img src={logoBizztrack} alt="Bizztrack" className="h-10 w-10 rounded-xl bg-white p-1" />
              <span className="ml-2 text-xl font-bold text-white">BIZZTRACK</span>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Modern cross-platform business management apps for inventory, real estate, and enterprise needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-[#68d3e8]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-[#ac82f6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-[#90f46b]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-[#90f46b] transition-colors">About</a></li>
              <li><a href="#case-studies" className="text-white/60 hover:text-[#90f46b] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-[#90f46b] transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-[#90f46b] transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-white/60 hover:text-[#68d3e8] transition-colors">Inventory Manager</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-[#68d3e8] transition-colors">Real Estate Manager</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-[#68d3e8] transition-colors">Enterprise</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-[#ac82f6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-[#ac82f6] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-[#ac82f6] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60">
                <a href="mailto:info@bizztrack.com" className="hover:text-[#68d3e8] transition-colors">info@bizztrack.com</a>
              </li>
              <li className="text-white/60">
                <a href="tel:+1234567890" className="hover:text-[#68d3e8] transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="text-white/60">
                123 Business Street<br/>Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Bizztrack. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-[#0d0d0d] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="w-full">
        <Hero />
        <Solutions />
        {/* <Industries /> */}
        {/* <Clients /> */}
        <Testimonial />
        <WhyUs />
        {/* <CaseStudies /> */}
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

// Tailwind keyframes for animation (add to tailwind.config.js):
// theme: { extend: { keyframes: { ... }, animation: { ... } } }
