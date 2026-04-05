'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, Lang, TranslationKey } from '@/i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja'); // Default: Japanese

  // Hydrate from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('df-lang') as Lang | null;
    if (stored === 'en' || stored === 'ja') {
      setLang(stored);
    }
  }, []);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'ja' ? 'en' : 'ja';
      localStorage.setItem('df-lang', next);
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => translations[key][lang],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
