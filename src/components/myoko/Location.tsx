import { useTranslations } from 'next-intl';

export default function Location() {
  const t = useTranslations('MyokoPage.location');

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 border-b-2 border-amber-600 inline-block pb-2">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Google Map */}
          <div className="relative h-full min-h-[400px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=%E6%A3%AE%E9%9B%AA+MORI+YUKI&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
              className="absolute inset-0"
            />
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col gap-8">
            {/* Upper: How to Get Here */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4 text-slate-900 border-l-4 border-amber-600 pl-4">
                {t('gettingHere.title')}
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800 whitespace-pre-line">
                    🚆 {t('gettingHere.train')}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    🚗 {t('gettingHere.car')}
                  </p>
                </div>
              </div>
            </div>

            {/* Lower: Explore Nearby */}
            <div className="text-left">
              <h3 className="text-xl font-bold mb-6 text-slate-900 border-l-4 border-amber-600 pl-4">
                {t('nearby.title')}
              </h3>
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                {t('nearby.desc')}
              </p>

              <div className="bg-slate-50 p-6 rounded-xl text-left border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  {t('nearby.driveTime.slogan')}
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    {t('nearby.driveTime.akakuraKanko')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    {t('nearby.driveTime.akakuraOnsen')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    {t('nearby.driveTime.suginohara')}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                    {t('nearby.driveTime.lotteArai')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
