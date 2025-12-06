import React, { useState, useRef } from 'react';
import { Send, AlertTriangle, Paperclip, Lock, ShieldAlert, Upload, X, CheckCircle2, FileWarning } from 'lucide-react';

interface FormData {
  name: string;
  contact: string;
  category: string;
  description: string;
}

const TabComplaints: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    category: 'Dugaan Korupsi',
    description: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `[WBS] Pengaduan: ${formData.category}`;
    let body = `NAMA PELAPOR: ${formData.name}\nNO. KONTAK: ${formData.contact}\n\nURAIAN PENGADUAN:\n${formData.description}\n\n`;
    
    if (file) {
      body += `[SISTEM NOTE]: Saya ingin melampirkan file bukti: "${file.name}". Mohon cek lampiran pada email ini.`;
      alert(`PENTING: Karena keterbatasan keamanan browser, file "${file.name}" tidak dapat dilampirkan secara otomatis ke aplikasi email Anda.\n\nMohon lampirkan file tersebut secara manual pada jendela email yang akan terbuka.`);
    } else {
      body += `(Tidak ada bukti lampiran yang disertakan pada formulir ini)`;
    }
    
    const mailtoLink = `mailto:itdatouna1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center min-h-screen">
      
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-red-500/10 blur-[80px] -z-10 rounded-full"></div>
            
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl mb-6 ring-1 ring-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <ShieldAlert className="w-16 h-16 text-red-500 animate-pulse-slow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
              Layanan <span className="text-red-500">Pengaduan</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Whistleblowing System (WBS). Mari bersama wujudkan pemerintahan yang bersih. Identitas pelapor dijamin kerahasiaannya oleh Inspektorat.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Sidebar / Guidelines */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-cyber-900 border border-cyber-cyan/30 p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl group-hover:bg-cyber-cyan/20 transition-colors"></div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                        <Lock size={24} className="text-cyber-cyan" />
                        Jaminan Keamanan
                    </h3>
                    <ul className="space-y-4 text-sm text-gray-300 relative z-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-cyber-cyan shrink-0 w-5 h-5" />
                            <span>Identitas pelapor dapat dirahasiakan (Anonim).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-cyber-cyan shrink-0 w-5 h-5" />
                            <span>Penanganan eksklusif oleh tim investigasi khusus.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-cyber-cyan shrink-0 w-5 h-5" />
                            <span>Perlindungan hukum sesuai peraturan perundang-undangan yang berlaku.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-red-950/40 to-transparent border border-red-500/30 p-6 rounded-2xl">
                     <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
                        <FileWarning size={20} />
                        Ketentuan Laporan
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Laporan harus objektif, bukan fitnah, dan didukung bukti permulaan yang cukup (dokumen, foto, atau rekaman) untuk mempercepat proses tindak lanjut.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-cyber-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-cyan via-purple-500 to-red-500 rounded-t-2xl"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-300 group-hover:text-cyber-cyan transition-colors">Nama Lengkap (Opsional)</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-cyber-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan focus:bg-cyber-900 transition-all"
                                placeholder="Cth: Hamba Allah"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label htmlFor="contact" className="text-sm font-semibold text-gray-300 group-hover:text-cyber-cyan transition-colors">No. Kontak / Email</label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                                className="w-full bg-cyber-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan focus:bg-cyber-900 transition-all"
                                placeholder="Untuk konfirmasi tindak lanjut"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="category" className="text-sm font-semibold text-gray-300 group-hover:text-cyber-cyan transition-colors">Kategori Pelaporan</label>
                        <div className="relative">
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full bg-cyber-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all cursor-pointer"
                            >
                                <option value="Dugaan Korupsi">Dugaan Tindak Pidana Korupsi</option>
                                <option value="Pungutan Liar">Pungutan Liar (Pungli)</option>
                                <option value="Penyalahgunaan Wewenang">Penyalahgunaan Wewenang</option>
                                <option value="Pelanggaran Disiplin PNS">Pelanggaran Disiplin PNS</option>
                                <option value="Layanan Publik Buruk">Pelayanan Publik Tidak Memuaskan</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label htmlFor="description" className="text-sm font-semibold text-gray-300 group-hover:text-cyber-cyan transition-colors">Uraian Laporan</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full bg-cyber-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan focus:bg-cyber-900 transition-all"
                            placeholder="Jelaskan secara rinci kronologi kejadian (apa, siapa, kapan, dimana, bagaimana)..."
                        ></textarea>
                    </div>

                    {/* File Upload Area */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-300">Upload Bukti (Foto/Dokumen)</label>
                        
                        {!file ? (
                            <div 
                                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${isDragging ? 'border-cyber-cyan bg-cyber-cyan/10' : 'border-gray-600 hover:border-cyber-cyan hover:bg-cyber-800'}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={handleFileChange} 
                                    className="hidden" 
                                    accept="image/*,.pdf,.doc,.docx"
                                />
                                <div className="flex flex-col items-center gap-3">
                                    <div className="p-4 bg-cyber-900 rounded-full border border-gray-700 shadow-inner">
                                        <Upload className="w-6 h-6 text-cyber-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Klik untuk upload atau drag & drop</p>
                                        <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max. 10MB)</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-cyber-900 border border-cyber-cyan/30 rounded-xl p-4 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cyber-cyan/10 rounded-lg">
                                        <Paperclip className="w-5 h-5 text-cyber-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium truncate max-w-[200px] md:max-w-xs">{file.name}</p>
                                        <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                </div>
                                <button 
                                    type="button" 
                                    onClick={removeFile}
                                    className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyber-cyan to-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span className="group-hover:tracking-wider transition-all">KIRIM LAPORAN</span>
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                        Sistem akan mengarahkan ke email client Anda. Pastikan data sudah benar sebelum mengirim.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TabComplaints;