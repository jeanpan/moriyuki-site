import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('MyokoPage');

  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/myoko-hero.png)`,
        }}
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light drop-shadow-md">
          {t('hero.headline')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.cloud9propertymanagement.com/accommodation-enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-block cursor-pointer"
          >
            {t('hero.cta')}
          </a>
          <a
            href="https://www.airbnb.com/rooms/1619922084161041714?source_impression_id=p3_1771303101_P3t6fjJjEsJ1bs5h"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg inline-block cursor-pointer"
          >
            {t('hero.cta_airbnb')}
          </a>
        </div>
      </div>
    </section>
  );
}
