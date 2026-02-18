'use client';

import { useLocale, useTranslations } from 'next-intl';

export default function BookingForm() {
  const locale = useLocale();
  const t = useTranslations('BookPage.pricing');

  // You can add other language forms here later
  const googleFormUrls = {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSd0vV5CGSvOEEcXEQZVPLFbr1TOKs9tLpbnm2sNQWg6fVmC6w/viewform?embedded=true",
    ja: "https://docs.google.com/forms/d/e/1FAIpQLSc0Dw2kA5y7pwxl5tvi-1NYZPFY-iRfK2pcKLMly8vlVKbGOg/viewform?embedded=true",
    zh: "https://docs.google.com/forms/d/e/1FAIpQLSfDoLa_hvi8zscWUYPPJwKD-RmZ8keTWG7jzBbHkQNWwa3DKw/viewform?embedded=true",
  };

  const currentFormUrl = googleFormUrls[locale as keyof typeof googleFormUrls] || googleFormUrls.en;

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Season Title */}
      <h2 className="text-2xl font-bold text-white tracking-wide border-b-2 border-amber-500 pb-2">
        {t('season')}
      </h2>

      {/* Pricing Info Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: 2 Nights */}
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:border-amber-500/50 transition-colors">
          <div className="bg-amber-600/20 p-4 border-b border-amber-600/30">
            <h4 className="text-xl font-bold text-amber-400 text-center">{t('twoNightsTitle')}</h4>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-slate-300">{t('untilMarch4')}</span>
                <span className="text-lg font-bold text-white">¥130,000 <span className="text-sm font-normal text-slate-400">{t('perNight')}</span></span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="text-slate-300">{t('march5to30')}</span>
                <span className="text-lg font-bold text-white">¥110,000 <span className="text-sm font-normal text-slate-400">{t('perNight')}</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: 4 Nights */}
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:border-amber-500/50 transition-colors">
          <div className="bg-amber-600/20 p-4 border-b border-amber-600/30">
            <h4 className="text-xl font-bold text-amber-400 text-center">{t('fourNightsTitle')}</h4>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-slate-300">{t('untilMarch4')}</span>
                <span className="text-lg font-bold text-white">¥125,000 <span className="text-sm font-normal text-slate-400">{t('perNight')}</span></span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="text-slate-300">{t('march5to30')}</span>
                <span className="text-lg font-bold text-white">¥105,000 <span className="text-sm font-normal text-slate-400">{t('perNight')}</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-transparent overflow-hidden">
      <iframe 
        src={currentFormUrl} 
        width="650" 
        height="2100" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
        className="w-full max-w-[640px]"
        title="Moriyuki Booking Form"
      >
        Loading…
      </iframe>
      </div>
    </div>
  );
}
