import React from 'react';
import Hero from '../components/Hero';
import { LOGO_IMG, HOME_CONTENT, HOME_HERO_IMG } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Overlay Logo - Moved to top */}
      <Hero 
        imageSrc={HOME_HERO_IMG}
        logoSrc={LOGO_IMG}
        subtitle={HOME_CONTENT.heroSubtitle}
        subtitleImage={HOME_CONTENT.heroSubtitleImage}
        overlayColor="black"
      />
      
      {/* Intro Text */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-elmwood-blue mb-8 leading-tight">
          {HOME_CONTENT.introTitleMain} <br/><span className="text-elmwood-black text-2xl md:text-4xl">{HOME_CONTENT.introTitleHighlight}</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
          {HOME_CONTENT.introText}
        </p>
      </section>
    </div>
  );
};

export default Home;