import React from 'react';

interface HeroProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  logoSrc?: string;
  overlayColor?: 'blue' | 'red' | 'black';
  titleFontWeight?: string;
  titleColor?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  imageSrc, 
  title, 
  subtitle, 
  logoSrc, 
  overlayColor = 'black',
  titleFontWeight = 'font-black',
  titleColor = 'text-white'
}) => {
  const overlayClasses = {
    blue: 'bg-elmwood-blue/30',
    red: 'bg-elmwood-red/30',
    black: 'bg-black/30',
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden border-b-4 border-elmwood-black">
      <img 
        src={imageSrc} 
        alt="Hero" 
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${overlayClasses[overlayColor]} flex flex-col items-center justify-center text-center p-4`}>
        {logoSrc ? (
           <img 
             src={logoSrc} 
             alt={title || "Logo"} 
             className="w-4/5 md:w-1/2 max-w-2xl h-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500" 
           />
        ) : title && (
          <h1 className={`text-5xl md:text-7xl lg:text-8xl ${titleFontWeight} font-sans ${titleColor} tracking-tight drop-shadow-[4px_4px_0_rgba(0,0,0,1)] border-text-black rotate-[-2deg]`}>
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-8 text-xl md:text-3xl font-script text-elmwood-cream bg-elmwood-red px-6 py-2 border-2 border-elmwood-black shadow-retro-lg rotate-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;