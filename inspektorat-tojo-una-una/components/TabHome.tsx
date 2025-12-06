import React from 'react';
import { Shield, Eye, Users, FileText, CheckCircle, BarChart3, Scale, Building2, Landmark } from 'lucide-react';
import { TabType } from '../types';

interface TabHomeProps {
  onChangeTab: (tab: TabType) => void;
}

const TabHome: React.FC<TabHomeProps> = ({ onChangeTab }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Hero Background Specifics */}
        <div className="absolute inset-0 z-0">
          {/* Abstract map/region lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyber-cyan/10 rounded-full animate-spin-slow opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyber-blue/20 rounded-full animate-spin-slow opacity-20 [animation-direction:reverse]"></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyber-950 via-cyber-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyber-cyan/20 bg-cyber-900/50 backdrop-blur-md text-cyber-cyan text-sm mb-8 shadow-lg">
            <Landmark className="w-4 h-4 text-cyber-gold" />
            <span className="tracking-wide font-medium text-gray-300">PORTAL RESMI PEMERINTAH DAERAH</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight drop-shadow-2xl">
            Inspektorat Daerah <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-gold">
              Kab. Tojo Una-Una
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Mewujudkan tata kelola pemerintahan yang <strong>Bersih</strong>, <strong>Transparan</strong>, dan <strong>Akuntabel</strong> melalui pengawasan yang profesional dan berintegritas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onChangeTab('PENGADUAN')}
              className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-cyan text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 border border-cyber-cyan/20"
            >
              <Shield className="w-5 h-5" />
              Layanan Pengaduan
            </button>
            <button 
               onClick={() => onChangeTab('PPID')}
               className="px-8 py-4 bg-cyber-900/50 backdrop-blur-sm border border-cyber-cyan/30 text-cyber-cyan font-bold rounded-lg hover:bg-cyber-cyan/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5" />
              Transparansi Publik
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Official Look */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             {/* Decorative Frame */}
             <div className="absolute -inset-1 border border-cyber-cyan/20 rounded-xl transform rotate-2"></div>
             <div className="absolute -inset-1 border border-cyber-gold/20 rounded-xl transform -rotate-2"></div>
             
             <div className="relative bg-cyber-900/80 border border-gray-700 p-8 rounded-xl h-full flex flex-col justify-center backdrop-blur-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-cyber-800 rounded-lg border border-gray-600">
                    <Building2 className="text-cyber-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Tentang Inspektorat</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                  Inspektorat Daerah Kabupaten Tojo Una-Una bertindak sebagai Aparat Pengawasan Intern Pemerintah (APIP). Kami memiliki mandat untuk menjamin kualitas (quality assurance) atas penyelenggaraan pemerintahan dan memberikan layanan konsultasi (consulting) guna mencegah terjadinya penyimpangan.
                </p>
                <div className="h-0.5 w-full bg-gradient-to-r from-cyber-cyan to-transparent"></div>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard title="Profesionalisme" icon={<Users className="text-cyber-cyan" />} />
            <InfoCard title="Integritas Tinggi" icon={<Shield className="text-cyber-gold" />} />
            <InfoCard title="Objektivitas" icon={<Scale className="text-white" />} />
            <InfoCard title="Akuntabilitas" icon={<BarChart3 className="text-cyber-blue" />} />
          </div>
        </div>
      </section>

      {/* Tasks and Functions */}
      <section className="bg-cyber-900/30 py-20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-blue/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Tugas & Fungsi Pokok</h2>
            <div className="flex justify-center gap-2">
              <div className="h-1 w-12 bg-cyber-cyan rounded-full"></div>
              <div className="h-1 w-4 bg-cyber-gold rounded-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Perumusan Kebijakan" 
              desc="Menyusun kebijakan teknis pengawasan internal dan fasilitasi pengawasan daerah."
              icon={<FileText size={32} />}
            />
             <FeatureCard 
              title="Audit & Evaluasi" 
              desc="Melaksanakan audit kinerja, audit ketaatan, serta reviu laporan keuangan daerah."
              icon={<Eye size={32} />}
            />
             <FeatureCard 
              title="Penanganan Aduan" 
              desc="Mengusut tuntas laporan masyarakat mengenai dugaan pelanggaran disiplin atau korupsi."
              icon={<Shield size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Program Strategis</h2>
            <p className="text-gray-400 max-w-lg">Langkah konkret Inspektorat dalam mewujudkan Good Governance.</p>
           </div>
           <button className="hidden md:flex items-center gap-2 text-cyber-cyan hover:text-white transition-colors">
              Lihat Selengkapnya <div className="w-8 h-px bg-cyber-cyan"></div>
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgramCard 
            title="Klinik Konsultasi" 
            desc="Layanan pendampingan bagi OPD dalam pengelolaan anggaran."
            color="border-l-cyber-cyan"
          />
          <ProgramCard 
            title="WBS Terintegrasi" 
            desc="Sistem pelaporan pelanggaran yang aman dan rahasia."
            color="border-l-cyber-blue"
          />
          <ProgramCard 
            title="Zona Integritas" 
            desc="Menuju Wilayah Bebas dari Korupsi (WBK/WBBM)."
            color="border-l-cyber-gold"
          />
          <ProgramCard 
            title="Saber Pungli" 
            desc="Optimalisasi Satgas Sapu Bersih Pungutan Liar."
            color="border-l-red-500"
          />
        </div>
      </section>
    </div>
  );
};

// Helper Components

const InfoCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="bg-cyber-900/50 border border-gray-700/50 p-6 rounded-lg flex items-center gap-4 hover:bg-cyber-800 transition-colors shadow-lg hover:border-cyber-cyan/30">
    <div className="p-3 bg-cyber-950 rounded-full shadow-inner">
      {icon}
    </div>
    <span className="font-semibold text-lg text-gray-200">{title}</span>
  </div>
);

const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-gradient-to-b from-cyber-900 to-cyber-950 p-8 rounded-2xl border border-gray-800 hover:border-cyber-cyan/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      {icon}
    </div>
    <div className="mb-6 inline-block p-4 rounded-xl bg-cyber-950 border border-gray-700 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-900 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const ProgramCard = ({ title, desc, color }: { title: string, desc: string, color: string }) => (
  <div className={`relative group overflow-hidden rounded-r-xl bg-cyber-900 border-y border-r border-gray-800 hover:border-gray-600 transition-all duration-300 border-l-4 ${color}`}>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">{title}</h4>
        <CheckCircle className="w-5 h-5 text-gray-700 group-hover:text-cyber-cyan transition-colors" />
      </div>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

export default TabHome;