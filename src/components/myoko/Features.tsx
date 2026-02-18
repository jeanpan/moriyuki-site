import { useTranslations } from 'next-intl';

export default function Features() {
  const t = useTranslations('MyokoPage.features');

  const features = [
    { icon: '⛷️', key: 'dryRoom' },
    { icon: '🍳', key: 'kitchen' },
    { icon: '🚶', key: 'access' },
    { icon: '🛒', key: 'supermarket' },
    { icon: '🚗', key: 'parking' },
    { icon: '🛋️', key: 'lounge' },
  ];

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 border-b-2 border-amber-600 inline-block pb-2">
          {t('title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <span className="text-4xl mb-4 text-amber-600">
                {feature.icon}
              </span>
              <span className="font-semibold text-lg">{t(feature.key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
