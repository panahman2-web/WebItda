import React, { useState } from 'react';
import { FileText, Download, Image, Calendar, Info, Search, UploadCloud, ChevronRight, Trash2, Plus, X } from 'lucide-react';

interface TabPPIDProps {
  isAdmin: boolean;
}

const initialDocs = [
  { id: 1, title: 'Laporan Kinerja Instansi Pemerintah (LKjIP) 2023', size: '2.4 MB', date: 'Jan 2024' },
  { id: 2, title: 'Rencana Strategis (RENSTRA) 2021-2026', size: '1.8 MB', date: 'Dec 2021' },
  { id: 3, title: 'Laporan Harta Kekayaan Pejabat Negara', size: '500 KB', date: 'Mar 2024' },
  { id: 4, title: 'Ringkasan Laporan Keuangan 2023', size: '3.1 MB', date: 'Feb 2024' },
  { id: 5, title: 'Standar Operasional Prosedur (SOP) Pengawasan', size: '4.2 MB', date: 'Jun 2023' },
  { id: 6, title: 'Peraturan Bupati tentang Pengawasan', size: '1.2 MB', date: 'Aug 2023' },
];

const activities = [
  {
    title: "Sosialisasi Anti Korupsi",
    date: "15 Oktober 2023",
    desc: "Kegiatan penyuluhan pencegahan korupsi di lingkungan perangkat daerah.",
    img: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "Rapat Koordinasi Pengawasan",
    date: "02 November 2023",
    desc: "Evaluasi tindak lanjut hasil pemeriksaan BPK RI.",
    img: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "Pelatihan Auditor Muda",
    date: "20 November 2023",
    desc: "Peningkatan kapasitas SDM auditor inspektorat.",
    img: "https://picsum.photos/600/400?random=3"
  }
];

const TabPPID: React.FC<TabPPIDProps> = ({ isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [docs, setDocs] = useState(initialDocs);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');

  // Filter documents based on search
  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDocTitle) {
      const newDoc = {
        id: Date.now(),
        title: newDocTitle,
        size: '1.5 MB', // Mock size
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      };
      setDocs([newDoc, ...docs]);
      setNewDocTitle('');
      setShowUploadModal(false);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus dokumen ini?')) {
      setDocs(docs.filter(doc => doc.id !== id));
    }
  };

  const handleDownloadAll = () => {
    alert("Mengunduh rekapitulasi daftar informasi publik...");
  };

  return (
    <div className="container mx-auto px-4 py-10 space-y-20 min-h-screen relative">
      
      {/* Header Info */}
      <div className="text-center space-y-6 max-w-4xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyber-cyan/10 blur-[100px] rounded-full -z-10"></div>
        
        <div className="inline-block px-4 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan text-sm tracking-widest mb-4">
          TRANSPARANSI PUBLIK
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight">
          PPID <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Inspektorat</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Pejabat Pengelola Informasi dan Dokumentasi. Akses terbuka terhadap informasi kinerja, keuangan, dan kegiatan pengawasan daerah.
        </p>
      </div>

      {/* Stats / Quick Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Info, color: 'text-cyber-cyan', title: 'Transparan', desc: 'Akses informasi terbuka bagi masyarakat.' },
          { icon: FileText, color: 'text-cyber-purple', title: 'Akuntabel', desc: 'Data dapat dipertanggungjawabkan.' },
          { icon: Download, color: 'text-pink-500', title: 'Aksesibel', desc: 'Unduh dokumen digital dengan mudah.' }
        ].map((item, index) => (
          <div key={index} className="group bg-cyber-800/40 border border-gray-700 p-8 rounded-2xl relative overflow-hidden hover:border-cyber-cyan/50 transition-all duration-300">
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`}>
              <item.icon size={64} />
            </div>
            <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Dokumen Publik Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold font-display text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-cyber-cyan rounded-full"></span>
              Dokumen Publik
            </h2>
            <p className="text-gray-400 mt-2">Daftar informasi yang tersedia untuk publik.</p>
          </div>

          <div className="flex gap-3">
            {isAdmin && (
              <button 
                onClick={handleUploadClick}
                className="px-5 py-2.5 bg-cyber-cyan text-cyber-900 rounded-lg hover:bg-white transition-all flex items-center gap-2 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse-slow"
              >
                <UploadCloud size={18} />
                <span className="hidden sm:inline">Upload Baru</span>
              </button>
            )}
            <button 
              onClick={handleDownloadAll}
              className="px-5 py-2.5 bg-cyber-800 border border-cyber-purple/50 text-white rounded-lg hover:bg-cyber-purple/20 transition-all flex items-center gap-2 font-medium"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Unduh Daftar</span>
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-cyber-900/80 border border-gray-700 p-4 rounded-xl backdrop-blur-sm sticky top-24 z-30 shadow-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg leading-5 bg-cyber-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-cyber-900 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan sm:text-sm transition-all"
              placeholder="Cari dokumen (contoh: Laporan, Renstra, SOP)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <span className="text-gray-600 text-xs uppercase tracking-wider font-bold">
                {filteredDocs.length} Dokumen
              </span>
            </div>
          </div>
        </div>
        
        {/* Document List */}
        <div className="grid gap-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <div key={doc.id} className="group flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-cyber-800/30 rounded-xl border border-gray-800 hover:border-cyber-cyan/50 hover:bg-cyber-800/60 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-cyber-900 rounded-lg border border-gray-700 group-hover:border-cyber-cyan group-hover:text-cyber-cyan transition-colors">
                    <FileText size={24} className="text-gray-400 group-hover:text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-cyber-cyan transition-colors">{doc.title}</h4>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span className="bg-gray-800 px-2 py-0.5 rounded text-xs border border-gray-700">PDF</span>
                      <span>{doc.size}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto pl-16 md:pl-0">
                  <button className="flex-1 md:flex-none items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-cyber-900 border border-gray-700 rounded-lg hover:bg-cyber-cyan hover:text-cyber-900 hover:border-cyber-cyan transition-all group">
                    <span className="group-hover:hidden">Detail</span>
                    <span className="hidden group-hover:inline">Lihat</span>
                    <ChevronRight size={14} />
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg hover:bg-cyber-cyan hover:text-cyber-900 transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                    <Download size={16} />
                    Unduh
                  </button>
                  
                  {isAdmin && (
                    <button 
                      onClick={() => handleDelete(doc.id)}
                      className="p-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all ml-2"
                      title="Hapus Dokumen (Admin)"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-cyber-800/20 rounded-xl border border-dashed border-gray-700">
              <FileText className="mx-auto h-12 w-12 text-gray-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-300">Tidak ada dokumen ditemukan</h3>
              <p className="text-gray-500">Coba kata kunci lain atau reset pencarian.</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
            <button className="text-cyber-cyan hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 mx-auto">
              Lihat Arsip Dokumen Lama <ChevronRight size={14} />
            </button>
        </div>
      </div>

      {/* Galeri Kegiatan Section */}
      <div className="border-t border-gray-800 pt-16">
        <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/30">
                <Image className="text-cyber-purple w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-display text-white">Galeri Kegiatan</h2>
              <p className="text-sm text-gray-500">Dokumentasi transparansi kinerja inspektorat.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-cyber-900 border border-gray-800 hover:border-cyber-purple transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-cyber-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 relative z-20 bg-cyber-900">
                <div className="absolute -top-10 right-4 bg-cyber-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  TERBARU
                </div>
                <div className="flex items-center gap-2 text-xs text-cyber-purple mb-3 font-mono">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{item.desc}</p>
                
                {isAdmin && (
                  <button className="mt-4 text-xs flex items-center gap-1 text-red-400 hover:text-red-300">
                    <Trash2 size={12} /> Hapus Kegiatan
                  </button>
                )}
              </div>
            </div>
          ))}
          
          {isAdmin && (
            <div className="flex items-center justify-center rounded-2xl bg-cyber-800/30 border-2 border-dashed border-gray-700 hover:border-cyber-cyan group cursor-pointer h-full min-h-[300px] transition-colors">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-cyber-900 rounded-full flex items-center justify-center border border-gray-600 group-hover:border-cyber-cyan mb-3 transition-colors">
                  <Plus className="text-gray-400 group-hover:text-cyber-cyan" />
                </div>
                <p className="text-sm font-medium text-gray-400 group-hover:text-cyber-cyan">Tambah Kegiatan Baru</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Admin Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowUploadModal(false)}></div>
          <div className="relative bg-cyber-900 border border-cyber-cyan/30 rounded-2xl p-6 w-full max-w-lg shadow-[0_0_50px_rgba(6,182,212,0.2)] animate-in zoom-in-95">
             <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold text-white">Upload Dokumen PPID</h3>
               <button onClick={() => setShowUploadModal(false)} className="text-gray-500 hover:text-white">
                 <X size={24} />
               </button>
             </div>
             
             <form onSubmit={handleUploadSubmit} className="space-y-4">
               <div>
                 <label className="block text-sm text-gray-300 mb-2">Judul Dokumen</label>
                 <input 
                    type="text" 
                    required
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    className="w-full bg-cyber-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none"
                    placeholder="Contoh: Laporan Keuangan 2024"
                 />
               </div>
               
               <div>
                 <label className="block text-sm text-gray-300 mb-2">File Dokumen (PDF/DOCX)</label>
                 <div className="border-2 border-dashed border-gray-600 hover:border-cyber-cyan rounded-lg p-8 text-center cursor-pointer transition-colors bg-cyber-800/50">
                    <UploadCloud className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-400">Klik untuk memilih file</p>
                 </div>
               </div>
               
               <div className="pt-4">
                 <button 
                    type="submit"
                    className="w-full bg-cyber-cyan text-cyber-900 font-bold py-3 rounded-lg hover:bg-white transition-colors"
                 >
                   UPLOAD SEKARANG
                 </button>
               </div>
             </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default TabPPID;