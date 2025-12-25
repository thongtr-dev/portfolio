'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navigation />

      <main className="pt-32 pb-20 min-h-screen">
        {/* Alert/Notice Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
                <span className="material-icons text-primary text-sm">info</span>
                <span className="font-mono text-primary text-sm font-bold">{t('importantNotice')}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 dark:text-white">
                {t('beforeDownloadCV')}
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {t('cvNotice')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  onClick={() => {
                    document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {t('readMyStory')} <span className="material-icons text-sm">arrow_downward</span>
                  </span>
                </button>

                <Link
                  href="/cv"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {t('proceedToDownload')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                {t('myJourney')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
                {t('journeySubtitle')}
              </p>
            </div>

            {/* Early Days */}
            <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-primary">school</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {t('earlyDaysTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('earlyDaysContent1')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('earlyDaysContent2')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('earlyDaysContent3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Self-Taught Journey */}
            <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-accent">sports_esports</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {t('selfTaughtTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('selfTaughtContent1')}
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('tryMyGames')}</p>
                    <div className="space-y-2">
                      <a
                        href="https://liam-vessalius.itch.io/dash-quest"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 font-mono text-sm underline block"
                      >
                        Dash Quest - https://liam-vessalius.itch.io/dash-quest
                      </a>
                      <a
                        href="https://liam-vessalius.itch.io/hitnshoot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 font-mono text-sm underline block"
                      >
                        Hit'n Shoot - https://liam-vessalius.itch.io/hitnshoot
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {t('gameTimeKiller')}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
                      {t('pSLiamNote')}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('selfTaughtContent2')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('selfTaughtContent3')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('selfTaughtContent4')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('selfTaughtContent5')}
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Growth */}
            <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-blue-500">work</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {t('professionalGrowthTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('professionalGrowthContent1')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('professionalGrowthContent2')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('professionalGrowthContent3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Future Goals */}
            <div className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <span className="material-icons text-green-500">flag</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                    {t('futureGoalsTitle')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('futureGoalsContent1')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('futureGoalsContent2')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('futureGoalsContent3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6 pt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('storyCTA')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/cv"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {t('downloadCV')} <span className="material-icons text-sm">download</span>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-gray-700 dark:text-gray-200 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {t('getInTouch')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}