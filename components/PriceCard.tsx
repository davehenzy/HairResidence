import React from 'react';
import { ServiceSection } from '../types';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_NUMBER } from '../constants';

interface PriceCardProps {
  section: ServiceSection;
}

export const PriceCard: React.FC<PriceCardProps> = ({ section }) => {
  
  const handleBookClick = (service: string, price?: string) => {
    const text = `Hello HairResidence, I would like to book an appointment for: ${service}${price ? ` (${price})` : ''}. Please let me know the availability.`;
    window.open(`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="group relative w-full max-w-lg mx-auto h-full flex flex-col">
      {/* Decorative Shadow/Border Offset */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-brand-shadow rounded-3xl -z-10 border-2 border-black transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
      
      {/* Main Card Content */}
      <div className="bg-white border-2 border-black rounded-3xl overflow-hidden flex flex-col h-full shadow-sm transition-transform duration-300">
        
        {/* Header */}
        <div className="bg-brand-text text-white p-6 border-b-2 border-black relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageCircle size={64} />
          </div>
          <h2 className="text-xl font-black uppercase tracking-wider relative z-10">
            {section.title}
          </h2>
        </div>

        {/* List of Services */}
        <div className="p-2 sm:p-4 flex-grow bg-white">
          <div className="space-y-1">
            {section.items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group/item"
              >
                {/* Service Details */}
                <div className="flex-1 pr-4">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase leading-snug">
                    {item.service}
                  </h3>
                  {item.price && (
                    <div className="flex items-center gap-2 mt-1">
                      {item.detail && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded uppercase tracking-wider">
                          {item.detail}
                        </span>
                      )}
                      <span className="text-sm font-bold text-gray-900 bg-brand-shadow/30 px-2 rounded-md">
                        {item.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => handleBookClick(item.service, item.price)}
                  className="flex-shrink-0 bg-white hover:bg-[#25D366] text-gray-900 hover:text-white border-2 border-gray-200 hover:border-[#128C7E] rounded-full p-2.5 sm:px-4 sm:py-2 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95"
                  aria-label={`Book ${item.service}`}
                >
                  <MessageCircle size={18} className="fill-current sm:fill-none" />
                  <span className="hidden sm:inline text-xs font-bold uppercase tracking-wide">Book</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Footer */}
        {section.policy.length > 0 && (
          <div className="p-5 sm:p-6 bg-gray-50 border-t-2 border-black/5 mt-auto relative">
             <div className="flex items-center gap-2 mb-3">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
               <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">
                Policy
              </h3>
             </div>
            
            <div className="space-y-2.5 text-justify">
              {section.policy.map((paragraph, idx) => (
                <p key={idx} className="text-[10px] sm:text-xs font-medium leading-relaxed uppercase text-gray-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};