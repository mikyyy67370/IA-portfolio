import fr from './fr';
import en from './en';
import de from './de';
import ar from './ar';

export { fr, en, de, ar };

export const defaultLocale = 'fr';

export const locales = [
  { code: 'fr', name: 'Français', direction: 'ltr' },
  { code: 'en', name: 'English', direction: 'ltr' },
  { code: 'de', name: 'Deutsch', direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];

export default {
  fr,
  en,
  de,
  ar,
};
