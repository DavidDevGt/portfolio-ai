import { languages, defaultLang, ui, type Lang, type UiKey } from './ui';
import { content, type HomeContent } from './content';

export { languages, defaultLang };
export type { Lang, UiKey, HomeContent };

/** Derive the active locale from an Astro.url — falls back to defaultLang for unknown/root paths. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

/** Returns a `t(key)` translator bound to a locale, with defaultLang as fallback for missing keys. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Returns the structured content (projects, experience, skills, education) for a locale. */
export function useContent(lang: Lang): HomeContent {
  return content[lang] ?? content[defaultLang];
}

/** Builds a locale-prefixed path (default locale stays unprefixed per astro.config.mjs routing). */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return targetLang === defaultLang ? normalized : `/${targetLang}${normalized}`;
  };
}
