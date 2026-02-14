import { DrinkItem, NavLinkItem } from './types';

const config = typeof window !== 'undefined' ? window.ELMWOOD_CONFIG || {} : {};

export const NAV_LINKS: NavLinkItem[] = config.navLinks || [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Drinks', path: '/drinks' },
  { label: 'Contact', path: '/contact' },
];

export const DRINKS_DATA: DrinkItem[] = config.drinksPage?.drinksData || [
  { brewery: 'The Elmwood', beer: 'Allentown', style: 'House Lager', abv: '5%' },
  { brewery: 'Bellwoods Brewery', beer: 'Roman Candle', style: 'IPA', abv: '6.8%' },
  { brewery: 'True History Brewing', beer: 'Helles German Lager', style: 'Helles', abv: '5%' },
  { brewery: 'Common Good Beer Co.', beer: 'Ellesmere', style: 'English Amber Ale', abv: '5.2%' },
  { brewery: 'Great Lakes Brewery', beer: 'Canuck Pale Ale', style: 'Pale Ale', abv: '5.2%' },
];

export const SOCIAL_LINKS = config.social || {
  instagram: 'https://www.instagram.com/theelmwoodbar',
  facebook: 'https://www.facebook.com/profile.php?id=61587383339614',
  blogTO: 'https://www.blogto.com/eat_drink/2026/02/elmwood-bar-toronto/',
};

export const CONTACT_INFO = config.contact || {
  address: '753 The Queensway, Etobicoke, ON, M8Z 1M8',
  phone: '(437) 836-4425',
  hours: '3 to 11 PM, Tuesday through Sunday',
};

export const EMAIL_CONFIG = config.emailConfig || {
  destinationEmail: 'info@theelmwoodbar.com'
};

// Image assets
export const LOGO_IMG = config.images?.logo || "https://theelmwoodbar.com/temp/logo2.png";
export const WINGS_ICON_IMG = config.images?.wingsIcon || "https://theelmwoodbar.com/temp/wings.png";
export const GLASSES_ICON_IMG = config.images?.glassesIcon || "https://theelmwoodbar.com/temp/glasses.png";
export const DRINKS_MENU_IMG = config.images?.drinksMenu || "https://theelmwoodbar.com/temp/drinks.png";
export const CONTACT_HERO_IMG = config.images?.contactHero || "https://theelmwoodbar.com/temp/contactbg.jpg";
export const HOME_HERO_IMG = config.images?.homeHero || "https://theelmwoodbar.com/temp/wingsbg2.jpg";
export const MENU_HERO_IMG = config.images?.menuHero || "https://theelmwoodbar.com/temp/menubg.jpg";
export const MENU_IMG = config.images?.menuDisplay || "https://theelmwoodbar.com/temp/food.png";
export const DRINKS_HERO_IMG = config.images?.drinksHero || "https://theelmwoodbar.com/temp/tapsbg2.jpg";
export const OWNERS_IMG = config.images?.owners || "https://theelmwoodbar.com/temp/Owners.jpg";
export const BLOGTO_IMG = config.images?.blogTO || "https://theelmwoodbar.com/temp/blogTO.png";

// Page Content
export const HOME_CONTENT = config.homePage || {
  heroSubtitle: "Cold Beer • Hot Wings • Good Vibes",
  heroSubtitleImage: "https://theelmwoodbar.com/temp/now_open.png",
  introTitleMain: "A Neighbourhood Joint",
  introTitleHighlight: "Since Recently.",
  introText: "Family-owned and built by wing lovers. After countless trips to Buffalo, we perfected authentic Buffalo wings—crispy, saucy, and made with passion. Can't wait to have you."
};

export const MENU_CONTENT = config.menuPage || {
  heroTitle: "The Menu",
  heading: "Eat Up",
  rotateMessage: "Menu rotates seasonally",
  updatedMessage: "Updated menu coming soon!"
};

export const DRINKS_CONTENT = config.drinksPage || {
  heroTitle: "Drinks",
  tapSectionTitleMain: "What's on",
  tapSectionTitleHighlight: "Tap?",
  updatedLabel: "Updated:",
  updatedDate: new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' }),
  tableHeaders: {
    brewery: "Brewery",
    beer: "Beer",
    style: "Style",
    abv: "ABV"
  },
  cantDecideTitle: "Can't decide?",
  cantDecideText: "Check our chalkboard for updates on fresh cans of craft and domestic beers.",
  cocktailsTitle: "Cocktails & Wine"
};

export const TAPLIST_CONTENT = config.taplistPage || {
  heroTitle: "On Tap",
  heroSubtitle: "Fresh Local Pours",
  sectionTitleMain: "Current",
  sectionTitleHighlight: "Selection",
  updatedLabel: "Updated:",
  tableHeaders: {
    brewery: "Brewery",
    beer: "Beer",
    style: "Style",
    abv: "ABV"
  },
  cantDecideTitle: "Can't decide?",
  cantDecideText: "Ask us for a flight or a recommendation."
};

export const CONTACT_CONTENT = config.contactPage || {
  heroTitle: "Get in Touch",
  visitUsTitle: "Visit Us",
  visitUsBrand: "The Elmwood",
  sendNoteTitle: "Send a Note",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit Message"
  },
  ownersTitle: "Meet the Owners",
  ownersNames: "Mal, Al & Loretta"
};

export const FOOTER_CONTENT = config.footer || {
  brand: "The Elmwood",
  copyright: "The Elmwood Bar. All rights reserved."
};