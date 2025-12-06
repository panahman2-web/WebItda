import React, { useState } from 'react';
import { Menu, X, ShieldCheck, LogIn, LogOut, UserCog, Lock } from 'lucide-react';
import { TabType, NavItem } from '../types';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

const navItems: NavItem[] = [
  { id: 'BERANDA', label: 'Beranda' },
  { id: 'PPID', label: 'PPID' },
  { id: 'PENGADUAN', label: 'Pengaduan Masyarakat' },
];

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isAdmin, setIsAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleNavClick = (id: TabType) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Username atau Password salah!');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-cyber-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-cyber-900/60">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer group"
            onClick={() => handleNavClick('BERANDA')}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
              <div className="relative bg-cyber-900 rounded-full p-2">
                <ShieldCheck className="w-8 h-8 text-cyber-cyan" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="self-center text-xl font-bold whitespace-nowrap text-white font-display tracking-wide">
                INSPEKTORAT
              </span>
              <span className="text-xs text-cyber-cyan tracking-[0.2em] uppercase">Kab. Tojo Una-Una</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block py-2 px-3 rounded md:p-0 transition-all duration-300 relative group ${
                      activeTab === item.id
                        ? 'text-cyber-cyan font-bold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-cyan transition-all duration-300 ${activeTab === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </li>
              ))}
              
              {/* Admin Button Desktop */}
              <li>
                {isAdmin ? (
                   <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-700">
                      <span className="flex items-center gap-2 text-xs font-bold text-cyber-purple bg-cyber-purple/10 px-3 py-1 rounded-full border border-cyber-purple/30">
                        <UserCog size={14} />
                        ADMIN MODE
                      </span>
                      <button 
                        onClick={handleLogout}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        title="Logout"
                      >
                        <LogOut size={20} />
                      </button>
                   </div>
                ) : (
                  <button 
                    onClick={() => setShowLoginModal(true)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-4 pl-4 border-l border-gray-700"
                  >
                    <Lock size={16} />
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="w-full md:hidden mt-4 bg-cyber-800 rounded-lg border border-gray-700 shadow-xl overflow-hidden animate-in slide-in-from-top-5">
              <ul className="flex flex-col font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left py-3 px-4 border-b border-gray-700 hover:bg-gray-700 ${
                        activeTab === item.id ? 'text-cyber-cyan bg-gray-800' : 'text-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="p-4 bg-gray-900/50">
                  {isAdmin ? (
                    <div className="flex items-center justify-between">
                       <span className="flex items-center gap-2 text-sm font-bold text-cyber-purple">
                          <UserCog size={16} /> ADMIN
                       </span>
                       <button 
                          onClick={handleLogout}
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm"
                        >
                          <LogOut size={16} /> Logout
                        </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        setShowLoginModal(true);
                      }}
                      className="flex items-center gap-2 text-gray-300 hover:text-white text-sm w-full"
                    >
                      <LogIn size={16} /> Login Admin
                    </button>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowLoginModal(false)}></div>
          <div className="relative bg-cyber-900 border border-cyber-cyan/30 rounded-2xl p-8 w-full max-w-md shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-cyber-800 rounded-full mb-4 border border-gray-700">
                <Lock className="w-8 h-8 text-cyber-cyan" />
              </div>
              <h2 className="text-2xl font-bold font-display text-white">Admin Login</h2>
              <p className="text-gray-400 text-sm mt-2">Masuk untuk mengelola konten website</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-lg text-center">
                  {error}
                </div>
              )}
              
              <div className="space-y-1">
                <label className="text-sm text-gray-300 font-medium">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-cyber-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none transition-all"
                  placeholder="admin"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-300 font-medium">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-cyber-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none transition-all"
                  placeholder="admin123"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-cyan to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all mt-4"
              >
                MASUK
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;