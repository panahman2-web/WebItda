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
    <div className="min-h-screen bg-cyber-900 text-slate-200 font-sans selection:bg-cyber-cyan selection:text-cyber-900 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyber-cyan opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyber-purple opacity-20 blur-[100px]"></div>
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