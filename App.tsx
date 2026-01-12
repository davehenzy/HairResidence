import React from 'react';
import { PriceCard } from './components/PriceCard';
import { PRICE_LIST_DATA, INSTAGRAM_HANDLE, CONTACT_NUMBER } from './constants';
import { MessageCircle, Instagram, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=Hello, I have a general inquiry about HairResidence styling services.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-gray-900 font-sans selection:bg-brand-shadow selection:text-black pb-32">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-shadow/20 to-transparent -z-10" />

      {/* Header */}
      <header className="pt-16 pb-12 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full mb-6 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
           <Sparkles size={14} className="text-yellow-300" />
           <span className="text-xs font-bold tracking-[0.2em] uppercase">Premium Styling</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-4 text-gray-900 leading-[0.9]">
          Hair<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">Residence</span>
        </h1>
        
        <div className="flex justify-center mb-8">
           <a 
            href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-white px-6 py-2 rounded-full border-2 border-gray-200 hover:border-black hover:bg-gray-50 text-gray-600 hover:text-black transition-all duration-300 group shadow-sm"
           >
            <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold tracking-widest">{INSTAGRAM_HANDLE}</span>
          </a>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
          {PRICE_LIST_DATA.map((section, index) => (
            <PriceCard key={index} section={section} />
          ))}
        </div>
      </main>

      {/* QR Code Section */}
      <section className="mt-24 max-w-3xl mx-auto px-6 pb-8">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center gap-10 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gray-800 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-3xl font-black uppercase mb-2 tracking-wide">Ready to Slay?</h3>
            <p className="text-gray-400 font-medium mb-6 max-w-md mx-auto sm:mx-0">
              Scan the QR code to connect with us directly on WhatsApp for custom inquiries and bookings.
            </p>
             <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-shadow">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Online Now
             </div>
          </div>

          <div className="relative z-10 bg-white p-3 rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/1234567890&color=000000&bgcolor=ffffff" 
               alt="WhatsApp QR Code"
               className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg border border-gray-100"
             />
          </div>
        </div>
      </section>

      {/* Sticky Action Button */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <button 
          onClick={handleWhatsAppClick}
          className="pointer-events-auto bg-[#25D366] hover:bg-[#128C7E] text-white border-2 border-black font-bold py-3 pl-6 pr-8 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all duration-200 flex items-center gap-3 text-sm sm:text-base uppercase tracking-widest group"
        >
          <div className="bg-white/20 p-1.5 rounded-full">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          General Inquiry
        </button>
      </div>

    </div>
  );
};

export default App;