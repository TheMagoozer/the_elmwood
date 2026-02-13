export interface DrinkItem {
  brewery: string;
  beer: string;
  style: string;
  abv: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface ElmwoodConfig {
  site?: {
    title: string;
    description: string;
  };
  images?: {
    logo: string;
    wingsIcon: string;
    glassesIcon: string;
    drinksMenu: string;
    contactHero: string;
    homeHero: string;
    menuHero: string;
    menuDisplay: string;
    drinksHero: string;
    owners: string;
  };
  contact?: {
    address: string;
    phone: string;
    hours: string;
  };
  social?: {
    instagram: string;
    facebook: string;
  };
  navLinks?: NavLinkItem[];
  homePage?: {
    heroSubtitle: string;
    heroSubtitleImage?: string;
    introTitleMain: string;
    introTitleHighlight: string;
    introText: string;
  };
  menuPage?: {
    heroTitle: string;
    heroSubtitle: string;
    heading: string;
    rotateMessage: string;
    updatedMessage: string;
  };
  drinksPage?: {
    heroTitle: string;
    heroSubtitle: string;
    tapSectionTitleMain: string;
    tapSectionTitleHighlight: string;
    updatedLabel: string;
    tableHeaders: {
      brewery: string;
      beer: string;
      style: string;
      abv: string;
    };
    cantDecideTitle: string;
    cantDecideText: string;
    cocktailsTitle: string;
  };
  taplistPage?: {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitleMain: string;
    sectionTitleHighlight: string;
    updatedLabel: string;
    tableHeaders: {
      brewery: string;
      beer: string;
      style: string;
      abv: string;
    };
    cantDecideTitle: string;
    cantDecideText: string;
    cocktailsTitle: string;
  };
  contactPage?: {
    heroTitle: string;
    visitUsTitle: string;
    visitUsBrand: string;
    sendNoteTitle: string;
    formLabels: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    ownersTitle: string;
    ownersNames: string;
  };
  footer?: {
    brand: string;
    copyright: string;
  };
  drinksData?: DrinkItem[];
}

declare global {
  interface Window {
    ELMWOOD_CONFIG?: ElmwoodConfig;
  }
}