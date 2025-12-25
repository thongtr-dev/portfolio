'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors border border-gray-200 dark:border-gray-700"
      title={language === 'en' ? 'Switch to Japanese' : '英語に切り替え'}
    >
      <span className={`text-lg ${language === 'en' ? 'text-blue-600' : 'text-gray-400'}`}>
        🇺🇸
      </span>
      <span className={`text-lg ${language === 'ja' ? 'text-red-600' : 'text-gray-400'}`}>
        🇯🇵
      </span>
      <span className="text-xs font-bold">
        {language === 'en' ? 'EN' : 'JP'}
      </span>
    </button>
  );
}