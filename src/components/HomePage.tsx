import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Brain, Code } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-[#8e5e42]/5 text-gray-900'
    }`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 blur-3xl animate-pulse ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 blur-3xl animate-pulse delay-1000 ${isDark ? 'bg-[#8e5e42]/10' : 'bg-[#8e5e42]/5'}`}></div>
      </div>

      {/* HERO */}
      <section className={`relative min-h-screen flex items-center justify-center pt-20 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
          : 'bg-gradient-to-br from-[#8e5e42]/5 via-white to-[#8e5e42]/10'
      }`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            <p className={`text-sm font-bold tracking-widest uppercase ${isDark ? 'text-[#8e5e42]' : 'text-[#8e5e42]'}`}>
              REDtech Africa Consulting (RAC) — Lagos · London
            </p>

            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-tight font-heading ${
              isDark 
                ? 'bg-gradient-to-r from-white via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-gray-900 via-[#8e5e42] to-[#8e5e42] bg-clip-text text-transparent'
            }`}>
              Closing the Gap Between Your Workforce and Your Ambition
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              We help organisations build the people, systems, and digital capability they need to perform — through resourcing, education, and advisory.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => navigate('/services')}
                className="px-12 py-6 bg-[#8e5e42] rounded-2xl font-bold text-white text-xl hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3"
              >
                Explore Our Services
                <ArrowRight size={24} />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className={`px-12 py-6 rounded-2xl font-bold text-xl border-2 border-[#8e5e42] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3 ${
                  isDark 
                    ? 'bg-transparent text-white hover:bg-[#8e5e42]/10'
                    : 'bg-transparent text-gray-900 hover:bg-[#8e5e42]/10'
                }`}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* R · E · D PILLARS */}
      <section className="py-24 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Resourcing · Education · Digital
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Three connected arms. One goal: closing the gap between where your organisation is and where it needs to be.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Users, letter: 'R', title: 'Resourcing', desc: 'Evidence-based hiring and workforce infrastructure. From emerging talent to executive roles.' },
              { icon: Brain, letter: 'E', title: 'Education', desc: 'Bespoke training that builds real capability. Delivered by practitioners. Embedded to last.' },
              { icon: Code, letter: 'D', title: 'Digital Advisory', desc: '15+ years of AI and cybersecurity expertise deployed into African enterprise contexts.' },
            ].map((pillar, i) => (
              <div 
                key={i}
                onClick={() => navigate('/services')}
                className={`cursor-pointer group p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                    : 'bg-gradient-to-br from-white/80 to-[#8e5e42]/5 border-[#8e5e42]/20 hover:border-[#8e5e42]/50'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#8e5e42] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-black text-[#8e5e42] font-heading">{pillar.letter}</span>
                  <div className="w-14 h-14 bg-[#8e5e42] rounded-2xl flex items-center justify-center">
                    <pillar.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className={`text-2xl font-black mb-3 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className={`backdrop-blur-sm rounded-3xl p-12 border ${
            isDark 
              ? 'bg-gradient-to-br from-[#8e5e42]/20 to-gray-800/80 border-[#8e5e42]/30'
              : 'bg-gradient-to-br from-[#8e5e42]/10 to-white/80 border-[#8e5e42]/30'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: '27K+', label: 'Community Members' },
                { num: '7', label: 'Self-funded Hackathons' },
                { num: '15+', label: 'Years of Experience' },
                { num: '2', label: 'Continents' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-black mb-2 text-[#8e5e42]">{stat.num}</div>
                  <div className={`font-medium text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className={`py-24 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-4 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Two Sides. Same Broken System.
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              This is not a talent problem or an employer problem. It is an infrastructure problem — and infrastructure can be rebuilt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`p-8 rounded-3xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-4 pb-4 border-b ${isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'}`}>Organisations say:</h3>
              <p className="text-[#8e5e42] font-bold text-lg mb-4">"We can't find people who can actually do the work."</p>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {['CV screening is expensive and inaccurate', 'Training budgets spent, same problems remain', 'AI tools deployed, nobody knows how to use them', 'Best people leaving for growth they can\'t find'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`p-8 rounded-3xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-bold mb-4 pb-4 border-b ${isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-900'}`}>Talent says:</h3>
              <p className="text-[#8e5e42] font-bold text-lg mb-4">"Can't get experience without a job. Can't get a job without experience."</p>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {['No verifiable experience to show', 'No structured path from learning to earning', 'Invisible beyond a generic CV', 'No way to prove capability employers trust'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-[#8e5e42] mt-0.5">•</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`p-8 rounded-3xl border-l-4 border-l-[#8e5e42] ${isDark ? 'bg-gray-900/80 border-y border-r border-gray-800' : 'bg-[#8e5e42]/5 border-y border-r border-[#8e5e42]/20'}`}>
            <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              RAC builds the infrastructure that closes both sides — through evidence-based talent matching, bespoke capability training, and digital advisory.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative">
        <div className="container max-w-3xl mx-auto px-4 z-10 relative">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 font-heading ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's talk about what's not working.
          </h2>
          <p className={`text-xl mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            No jargon. No pitch deck. Just a straight conversation about whether we can help.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-12 py-6 bg-[#8e5e42] rounded-2xl font-bold text-white text-xl hover:shadow-2xl hover:shadow-[#8e5e42]/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3"
          >
            Contact Us <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}