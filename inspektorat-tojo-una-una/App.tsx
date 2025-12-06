import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TabHome from './components/TabHome';
import TabPPID from './components/TabPPID';
import TabComplaints from './components/TabComplaints';
import Footer from './components/Footer';
import { TabType } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('BERANDA');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Scroll handler for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-950 text-slate-200 font-sans selection:bg-cyber-cyan selection:text-cyber-900 relative overflow-x-hidden">
      {/* Background Effects - Formal & Futuristic */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Navy Base */}
        <div className="absolute inset-0 bg-cyber-950"></div>
        
        {/* Subtle Grid - Symbolizing Data & Structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15]"></div>
        
        {/* Top Center Glow (Authority/Light) - Cyan/Blue */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyber-blue opacity-10 blur-[120px]"></div>
        
        {/* Bottom Right Glow (Prestige) - Gold/Amber hint */}
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyber-gold opacity-5 blur-[100px]"></div>
        
        {/* Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
        />

        <main className="flex-grow pt-20">
          {activeTab === 'BERANDA' && <TabHome onChangeTab={setActiveTab} />}
          {activeTab === 'PPID' && <TabPPID isAdmin={isAdmin} />}
          {activeTab === 'PENGADUAN' && <TabComplaints />}
        </main>

        <Footer />
      </div>

      {/* Floating Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyber-cyan text-cyber-900 shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 hover:bg-white hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;