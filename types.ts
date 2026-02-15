
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
    blogTO?: string;
  };
  contact?: {
    address: string;
    phone: string;
    hours: string;
  };
  social?: {
    instagram: string;
    facebook: string;
    blogTO?: string;
  };
  navLinks?: NavLinkItem[];
  homePage?: {
    heroSubtitleImage?: string;
    introTitleMain: string;
    introTitleHighlight: string;
    introText: string;
  };
  menuPage?: {
    heroTitle: string;
    heading: string;
  };
  drinksPage?: {
    heroTitle: string;
    tapSectionTitleMain: string;
    tapSectionTitleHighlight: string;
    updatedLabel: string;
    updatedDate?: string;
    tableHeaders: {
      brewery: string;
      beer: string;
      style: string;
      abv: string;
    };
    cantDecideTitle: string;
    cantDecideText: string;
    cocktailsTitle: string;
    drinksData?: DrinkItem[];
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
}

declare global {
  interface Window {
    ELMWOOD_CONFIG?: ElmwoodConfig;
  }
}