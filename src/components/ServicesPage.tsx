import React from 'react';
import { ArrowRight, Users, BookOpen, Shield, Settings, Search, Building, Briefcase } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ServicesPage() {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Users,
      title: 'Capability & Workforce Transformation',
      desc: 'We help organisations diagnose capability gaps, build real skills, and embed systems that sustain performance.',
    },
    {
      icon: Briefcase,
      title: 'Talent Infrastructure (LEG-UP)',
      desc: 'Portfolio-first hiring. We verify what talent can do before employers engage.',
    },
    {
      icon: Settings,
      title: 'Strategic & Ecosystem Advisory',
      desc: 'We design and deliver large-scale talent and capability systems across sectors and economies.',
    },
  ];

  const industries = [
    'Financial Institutions',
    'Government Departments',
    'Technology Organisations',
    'Learning Institutions',
    'Development Partners',
    'MSMEs'
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
        <div className={`absolute bottom-40 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`} />
      </div>

      {/* HERO */}
      <section className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10'
      }`}>
        <div className="container max-w-5xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#8e5e42] mb-6">Our Services</p>
          <h1 className={`text-5xl md:text-7xl font-black leading-tight mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Problem Isn't The Brief.<br />It's What's Missing <span className="text-[#8e5e42]">Behind It.</span>
          </h1>
          <p className={`text-xl max-w-3xl mb-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Behind every hiring challenge, training programme, or workforce issue is a capability gap that hasn't been properly diagnosed or verified. We uncover what's broken and build systems that prove what people can do before decisions are made.
          </p>
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#services" className="px-8 py-4 rounded-2xl bg-[#8e5e42] text-white font-bold text-lg hover:bg-[#8e5e42]/90 hover:shadow-xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              Explore How It Works <ArrowRight size={20} />
            </a>
          </div>

          {/* CREDIBILITY STRIP */}
          <div className={`p-6 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <strong>15+ years</strong> building workforce, hiring, and capability systems across financial institutions, government departments, and technology organisations in the UK and Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ANIMATED INDUSTRIES TICKER */}
      <section className={`py-8 overflow-hidden border-y ${isDark ? 'border-[#8e5e42]/20 bg-gray-900/50' : 'border-[#8e5e42]/20 bg-gray-50'}`}>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Double the array to make the infinite scroll smooth */}
            {[...industries, ...industries, ...industries, ...industries].map((industry, i) => (
              <span key={i} className={`mx-8 text-sm font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {industry} <span className="mx-8 text-[#8e5e42]">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 SERVICES */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black mb-16 font-heading text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Three Services. One System.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className={`group p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                  : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
              }`}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#8e5e42] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-[#8e5e42]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="text-[#8e5e42]" size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 text-center px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
        <div className="container max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Close the Gap Between Potential and Performance.
          </h2>
          <p className={`text-xl mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We help organisations diagnose capability gaps, verify real skills, and connect talent to opportunity through a system built for results.
          </p>
          <a href="/contact" className="px-10 py-5 rounded-2xl bg-[#8e5e42] text-white font-bold text-xl hover:bg-[#8e5e42]/90 hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3">
            Start the Conversation <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </div>
  );
}
