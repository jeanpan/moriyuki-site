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
