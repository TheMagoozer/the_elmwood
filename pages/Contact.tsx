import React from 'react';
import Hero from '../components/Hero';
import { SOCIAL_LINKS, CONTACT_INFO, CONTACT_HERO_IMG, CONTACT_CONTENT, OWNERS_IMG } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <Hero 
        imageSrc={CONTACT_HERO_IMG}
        title={CONTACT_CONTENT.heroTitle}
        titleFontWeight="font-extrabold"
        titleColor="text-elmwood-blue"
        overlayColor="red"
      />

      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info & Form */}
          <div className="space-y-12">
             <div className="bg-white p-8 border-4 border-elmwood-black shadow-retro-lg">
                <h2 className="text-3xl font-black uppercase mb-6 text-elmwood-blue">{CONTACT_CONTENT.visitUsTitle}</h2>
                <div className="space-y-4 text-lg font-medium">
                  <p className="text-xl font-black uppercase">{CONTACT_CONTENT.visitUsBrand}</p>
                  <p>{CONTACT_INFO.address}</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.phone}</p>
                  <div className="inline-block bg-elmwood-red text-white px-4 py-2 border-2 border-elmwood-black rotate-1">
                    {CONTACT_INFO.hours}
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                    <a href={SOCIAL_LINKS.instagram} className="text-elmwood-black hover:text-elmwood-blue font-bold uppercase underline decoration-4 underline-offset-4">Instagram</a>
                    <a href={SOCIAL_LINKS.facebook} className="text-elmwood-black hover:text-elmwood-blue font-bold uppercase underline decoration-4 underline-offset-4">Facebook</a>
                </div>
             </div>

             <div className="bg-elmwood-cream p-8 border-4 border-elmwood-black shadow-retro-lg">
               <h2 className="text-3xl font-black uppercase mb-6">{CONTACT_CONTENT.sendNoteTitle}</h2>
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label htmlFor="name" className="block font-bold uppercase mb-1">{CONTACT_CONTENT.formLabels.name}</label>
                   <input type="text" id="name" className="w-full p-3 border-2 border-elmwood-black focus:outline-none focus:ring-4 focus:ring-elmwood-blue/30 bg-white" placeholder={CONTACT_CONTENT.formLabels.name} />
                 </div>
                 <div>
                   <label htmlFor="email" className="block font-bold uppercase mb-1">{CONTACT_CONTENT.formLabels.email}</label>
                   <input type="email" id="email" className="w-full p-3 border-2 border-elmwood-black focus:outline-none focus:ring-4 focus:ring-elmwood-blue/30 bg-white" placeholder={CONTACT_CONTENT.formLabels.email} />
                 </div>
                 <div>
                   <label htmlFor="message" className="block font-bold uppercase mb-1">{CONTACT_CONTENT.formLabels.message}</label>
                   <textarea id="message" rows={4} className="w-full p-3 border-2 border-elmwood-black focus:outline-none focus:ring-4 focus:ring-elmwood-blue/30 bg-white" placeholder={CONTACT_CONTENT.formLabels.message}></textarea>
                 </div>
                 <button type="submit" className="w-full py-4 bg-elmwood-blue text-white font-black uppercase tracking-widest border-2 border-elmwood-black shadow-retro-sm hover:shadow-retro hover:-translate-y-1 transition-all">
                   {CONTACT_CONTENT.formLabels.submit}
                 </button>
               </form>
             </div>
          </div>

          {/* Right Column: Photo */}
          <div className="relative">
             <div className="relative z-10 border-4 border-elmwood-black bg-white p-4 shadow-retro-lg rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src={OWNERS_IMG} 
                 alt="Owners" 
                 className="w-full h-auto"
               />
               <div className="mt-4 text-center">
                 <p className="font-script text-2xl text-elmwood-black">{CONTACT_CONTENT.ownersTitle}</p>
                 <p className="text-sm font-bold uppercase tracking-wider text-elmwood-red">{CONTACT_CONTENT.ownersNames}</p>
               </div>
             </div>
             
             {/* Background decoration */}
             <div className="absolute top-10 -right-4 w-full h-full border-4 border-dashed border-elmwood-black -z-0 hidden lg:block"></div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;