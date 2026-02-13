import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO, GLASSES_ICON_IMG, FOOTER_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elmwood-blue text-white border-t-4 border-elmwood-black mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        
        {/* Contact Info */}
        <div className="p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-elmwood-black flex flex-col justify-center items-center md:items-start text-center md:text-left bg-elmwood-blue">
          <h3 className="text-3xl font-black mb-6 uppercase tracking-wider text-elmwood-cream drop-shadow-md">{FOOTER_CONTENT.brand}</h3>
          <p className="mb-2 font-bold text-lg">{CONTACT_INFO.address}</p>
          <p className="mb-2 font-bold text-lg">{CONTACT_INFO.phone}</p>
          <p className="mb-6 font-medium">{CONTACT_INFO.hours}</p>
          
          <div className="flex gap-4">
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-elmwood-cream text-elmwood-black border-2 border-elmwood-black shadow-retro-sm hover:translate-y-1 hover:shadow-none transition-all rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a 
              href={SOCIAL_LINKS.facebook} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-elmwood-cream text-elmwood-black border-2 border-elmwood-black shadow-retro-sm hover:translate-y-1 hover:shadow-none transition-all rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="h-64 md:h-auto border-b-4 md:border-b-0 lg:border-r-4 border-elmwood-black relative group overflow-hidden">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6471966579545!2d-79.51006542382582!3d43.61386777110411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37c049086437%3A0x6334546592237d1d!2s753%20The%20Queensway%2C%20Etobicoke%2C%20ON%20M8Z%201M8%2C%20Canada!5e0!3m2!1sen!2sus!4v1716300000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0, filter: 'grayscale(0.4) contrast(1.2)'}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="group-hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

        {/* Brand Vibe */}
        <div className="bg-elmwood-red p-8 md:p-12 flex flex-col justify-center items-center text-center">
           <img 
             src={GLASSES_ICON_IMG} 
             alt="Elmwood Clinking Glasses" 
             className="w-2/3 h-auto max-w-[240px] object-contain drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
           />
        </div>

      </div>
      <div className="bg-elmwood-black text-elmwood-cream p-2 text-center text-xs font-bold uppercase tracking-widest">
        &copy; {new Date().getFullYear()} {FOOTER_CONTENT.copyright}
      </div>
    </footer>
  );
};

export default Footer;