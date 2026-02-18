import { useTranslations } from 'next-intl';

export default function Intro() {
  const t = useTranslations('MyokoPage');

  return (
    <section className="py-20 md:py-32 bg-white text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className="w-full h-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cover bg-center md:h-96"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/myoko-exterior.png)`,
              }}
            />

          <div className="md:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 border-l-4 border-amber-600 pl-4">
              {t('intro.headline')}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              {t('intro.text')}
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              {t('intro.subtext')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
