import React from 'react';
import Hero from '../components/Hero';
import { MENU_HERO_IMG, MENU_IMG, MENU_CONTENT } from '../constants';

const Menu: React.FC = () => {
  return (
    <div className="w-full">
      <Hero 
        imageSrc={MENU_HERO_IMG}
        title={MENU_CONTENT.heroTitle}
        titleColor="text-elmwood-blue"
        overlayColor="red"
        titleFontWeight="font-extrabold"
      />
      
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="bg-white border-4 border-elmwood-black shadow-retro-lg p-8 md:p-12 relative">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-elmwood-blue border-l-4 border-b-4 border-elmwood-black"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-elmwood-black mb-4">{MENU_CONTENT.heading}</h2>
            <div className="w-24 h-2 bg-elmwood-red mx-auto"></div>
          </div>

          {/* CMS Placeholder */}
          <div className="w-full aspect-[2/3] bg-neutral-100 border-2 border-dashed border-neutral-300 flex items-center justify-center overflow-hidden relative group">
             {/* Simulating a menu image provided by CMS */}
             <img 
               src={MENU_IMG} 
               alt="Current Menu" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;