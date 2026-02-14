import React from 'react';
import Hero from '../components/Hero';
import { DRINKS_DATA, DRINKS_HERO_IMG, DRINKS_CONTENT } from '../constants';

const Taplist: React.FC = () => {
  return (
    <div className="w-full">
      <Hero 
        imageSrc={DRINKS_HERO_IMG} 
        title={DRINKS_CONTENT.heroTitle}
        overlayColor="blue"
      />

      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-4 border-elmwood-black pb-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-elmwood-black leading-none">
            {DRINKS_CONTENT.tapSectionTitleMain}<br/><span className="text-elmwood-blue">{DRINKS_CONTENT.tapSectionTitleHighlight}</span>
          </h2>
          <div className="mt-4 md:mt-0 font-bold bg-elmwood-red text-white px-4 py-1 border-2 border-elmwood-black shadow-retro-sm transform rotate-1">
            {DRINKS_CONTENT.updatedLabel} {DRINKS_CONTENT.updatedDate}
          </div>
        </div>

        <div className="overflow-x-auto bg-white border-2 border-elmwood-black shadow-retro">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-elmwood-black text-elmwood-cream uppercase tracking-wider text-sm md:text-base">
                <th className="p-4 md:p-6 border-r border-gray-700">{DRINKS_CONTENT.tableHeaders.brewery}</th>
                <th className="p-4 md:p-6 border-r border-gray-700">{DRINKS_CONTENT.tableHeaders.beer}</th>
                <th className="p-4 md:p-6 border-r border-gray-700">{DRINKS_CONTENT.tableHeaders.style}</th>
                <th className="p-4 md:p-6">{DRINKS_CONTENT.tableHeaders.abv}</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-200">
              {DRINKS_DATA.map((item, index) => (
                <tr 
                  key={index} 
                  className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <td className="p-4 md:p-6 font-bold text-elmwood-black border-r border-gray-200">{item.brewery}</td>
                  <td className="p-4 md:p-6 font-medium border-r border-gray-200 text-elmwood-blue">{item.beer}</td>
                  <td className="p-4 md:p-6 border-r border-gray-200 italic">{item.style}</td>
                  <td className="p-4 md:p-6 font-mono font-bold text-elmwood-red">{item.abv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 p-8 border-4 border-dashed border-elmwood-black bg-elmwood-cream text-center">
            <h3 className="text-2xl font-black uppercase mb-2">{DRINKS_CONTENT.cantDecideTitle}</h3>
            <p className="text-lg">{DRINKS_CONTENT.cantDecideText}</p>
        </div>
      </section>
    </div>
  );
};

export default Taplist;