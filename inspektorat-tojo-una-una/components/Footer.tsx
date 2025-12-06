import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-950 border-t border-gray-800 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <ShieldCheck className="w-8 h-8 text-cyber-cyan" />
              <span className="font-bold text-xl font-display">INSPEKTORAT</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mengawal Tata Kelola Pemerintahan Kabupaten Tojo Una-Una yang Bersih, Transparan, dan Akuntabel.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyber-cyan shrink-0" />
                <span>Jl. Merdeka No. XX, Ampana, Kab. Tojo Una-Una, Sulawesi Tengah.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyber-cyan shrink-0" />
                <span>(0464) 21xxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyber-cyan shrink-0" />
                <span>itdatouna1@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">Portal Pemkab Touna</a></li>
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">KPK RI</a></li>
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">BPKP</a></li>
              <li><a href="#" className="hover:text-cyber-cyan transition-colors">Lapor.go.id</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-800 flex items-center justify-center text-gray-400 hover:bg-cyber-cyan hover:text-cyber-900 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-800 flex items-center justify-center text-gray-400 hover:bg-cyber-purple hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyber-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Inspektorat Daerah Kabupaten Tojo Una-Una. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-xs">Designed with Futuristic Vision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;