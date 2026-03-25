import React, { useState, useEffect } from 'react';
import { Users, Trophy, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const solutions = [
    {
      icon: Users,
      title: "RAC Resourcing",
      tagline: "Strategic Resourcing Solutions for Growth",
      description: "The art and science of ensuring your organisation has every critical resource needed for success. We assess your strategic objectives, identify resource gaps, and deliver tailored solutions that create competitive advantage from workforce planning to ecosystem design.",
      highlights: [
        "Talent Acquisition & Management",
        "Networks & Alliances",
        "Financial Resources",
        "Technological Resources"
      ],
      link: "/resourcing",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Trophy,
      title: "RAC EdTech",
      tagline: "Transforming Education Through Technology",
      description: "Empowering institutions, students, and innovators to thrive in the digital age. Our EdTech solutions include the Dicey Hackathon Platform (DHP) for innovation competitions and the Yearbook App (YBA) for digital yearbooks and alumni engagement.",
      highlights: [
        "Dicey Hackathon Platform (DHP)",
        "Yearbook App (YBA)",
        "Built for Educational Institutions",
        "Cloud-based & Scalable Solutions"
      ],
      link: "/edtech",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: Cpu,
      title: "RAC Technology",
      tagline: "Strategic Technology Consulting & Innovation",
      description: "Beyond IT delivery, we're your strategic technology partner helping organisations reimagine how they operate, innovate, and scale through modern digital tools. From AI-powered solutions to enterprise systems, we deliver cutting-edge innovation.",
      highlights: [
        "Digital Infrastructure",
        "Product Engineering",
        "Enterprise Solutions (ERP)",
        "AI & Data Solutions"
      ],
      link: "/technology",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(prev => ({ ...prev, [index]: isInView }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse delay-1000 ${
          isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/20'
        }`}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-tight font-heading ${
              isDark 
                ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
            }`}>
              Our Solutions
            </h1>
            <p className={`text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8 font-bold ${
              isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
            }`}>
              Comprehensive Services Driving Innovation & Growth
            </p>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From strategic resourcing to cutting-edge technology, discover how REDtech Africa empowers organisations to achieve excellence
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                data-animate
                className={`transition-all duration-1000 transform ${
                  isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
                onClick={() => navigate(solution.link)}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="w-20 h-20 bg-[#8e5e42] rounded-2xl flex items-center justify-center mb-6">
                        <solution.icon size={40} className="text-white" />
                      </div>
                      
                      <h2 className={`text-4xl md:text-5xl font-black font-heading ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {solution.title}
                      </h2>
                      
                      <p className={`text-xl font-bold ${
                        isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'
                      }`}>
                        {solution.tagline}
                      </p>

                      <p className={`text-lg leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {solution.description}
                      </p>

                      <div className="space-y-3 pt-4">
                        {solution.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-[#8e5e42] flex-shrink-0 mt-1" />
                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(solution.link);
                        }}
                        className="mt-6 px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight size={20} />
                      </button>
                    </div>

                    {/* Visual Element */}
                    <div className="relative">
                      <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${solution.gradient} backdrop-blur-sm border ${
                        isDark ? 'border-white/10' : 'border-gray-200'
                      } flex items-center justify-center`}>
                        <solution.icon size={120} className={`${
                          isDark ? 'text-white/20' : 'text-gray-900/20'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-[#8e5e42]/10 border-white/10'
              : 'bg-[#8e5e42]/20 border-[#8e5e42]/30 shadow-2xl'
          }`}>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 font-heading ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Transform Your Organisation?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss how our comprehensive solutions can drive innovation, efficiency, and growth for your organisation.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#8e5e42] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Talk to a Consultant
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}