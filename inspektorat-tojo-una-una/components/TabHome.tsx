import React from 'react';
import { Shield, Eye, Users, FileText, CheckCircle, BarChart3, Scale } from 'lucide-react';
import { TabType } from '../types';

interface TabHomeProps {
  onChangeTab: (tab: TabType) => void;
}

const TabHome: React.FC<TabHomeProps> = ({ onChangeTab }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Abstract Grid Cityscape representation */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyber-cyan/10 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-sm mb-6 animate-pulse-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            Official Government Portal
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 leading-tight">
            Transparansi & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              Integritas
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Inspektorat Daerah Kabupaten Tojo Una-Una berkomitmen mewujudkan tata kelola pemerintahan yang bersih, akuntabel, dan profesional melalui pengawasan yang efektif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onChangeTab('PENGADUAN')}
              className="px-8 py-4 bg-cyber-cyan text-cyber-900 font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 group"
            >
              <Shield className="w-5 h-5" />
              Lapor Pelanggaran
            </button>
            <button 
               onClick={() => onChangeTab('PPID')}
               className="px-8 py-4 bg-transparent border border-cyber-purple text-cyber-purple font-bold rounded-lg hover:bg-cyber-purple/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Informasi Publik
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyber-cyan to-cyber-purple opacity-30 blur-2xl rounded-xl"></div>
             <div className="relative bg-cyber-800 border border-gray-700 p-8 rounded-xl h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold font-display text-white mb-6">Tentang Kami</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Inspektorat Daerah Kabupaten Tojo Una-Una adalah unsur pengawas penyelenggaraan Pemerintahan Daerah. Kami bertugas membantu Bupati dalam membina dan mengawasi pelaksanaan urusan pemerintahan yang menjadi kewenangan Daerah dan Tugas Pembantuan oleh Perangkat Daerah.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full"></div>
             </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard title="Profesional" icon={<Users className="text-cyber-cyan" />} />
            <InfoCard title="Integritas" icon={<Shield className="text-cyber-purple" />} />
            <InfoCard title="Objektif" icon={<Scale className="text-pink-500" />} />
            <InfoCard title="Akuntabel" icon={<BarChart3 className="text-green-400" />} />
          </div>
        </div>
      </section>

      {/* Tasks and Functions */}
      <section className="bg-cyber-800/50 py-20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Tugas & Fungsi</h2>
            <div className="h-1 w-24 bg-cyber-cyan mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Perumusan Kebijakan" 
              desc="Merumuskan kebijakan teknis bidang pengawasan dan fasilitasi pengawasan."
              icon={<FileText size={32} />}
            />
             <FeatureCard 
              title="Pelaksanaan Pengawasan" 
              desc="Melakukan audit, reviu, evaluasi, pemantauan, dan kegiatan pengawasan lainnya."
              icon={<Eye size={32} />}
            />
             <FeatureCard 
              title="Pengusutan" 
              desc="Melaksanakan pengusutan atas aduan masyarakat terkait dugaan penyimpangan."
              icon={<Shield size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Program Unggulan</h2>
            <p className="text-gray-400 max-w-lg">Inovasi dan langkah strategis Inspektorat dalam mewujudkan pemerintahan yang bersih.</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProgramCard 
            title="Klinik Konsultasi" 
            desc="Layanan konsultasi pengawasan bagi OPD dan Desa."
            delay="0"
          />
          <ProgramCard 
            title="E-Pengaduan" 
            desc="Sistem pelaporan digital terintegrasi dan rahasia."
            delay="100"
          />
          <ProgramCard 
            title="Zona Integritas" 
            desc="Pembangunan wilayah bebas korupsi di lingkungan Pemkab."
            delay="200"
          />
          <ProgramCard 
            title="Saber Pungli" 
            desc="Satgas sapu bersih pungutan liar secara aktif."
            delay="300"
          />
        </div>
      </section>
    </div>
  );
};

// Helper Components

const InfoCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
  <div className="bg-cyber-900/50 border border-gray-700 p-6 rounded-lg flex items-center gap-4 hover:border-cyber-cyan/50 transition-colors group">
    <div className="p-3 bg-cyber-800 rounded-full group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-semibold text-lg">{title}</span>
  </div>
);

const FeatureCard = ({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) => (
  <div className="bg-gradient-to-b from-cyber-800 to-cyber-900 p-8 rounded-2xl border border-gray-800 hover:border-cyber-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group">
    <div className="mb-6 inline-block p-4 rounded-xl bg-cyber-900 border border-gray-700 text-cyber-cyan group-hover:text-white group-hover:bg-cyber-cyan transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const ProgramCard = ({ title, desc, delay }: { title: string, desc: string, delay: string }) => (
  <div className="relative group overflow-hidden rounded-xl bg-cyber-900 border border-gray-800 hover:border-cyber-purple transition-all duration-300">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
       <CheckCircle className="text-cyber-purple" />
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
    <div className="h-1 w-0 bg-cyber-purple group-hover:w-full transition-all duration-500"></div>
  </div>
);

export default TabHome;