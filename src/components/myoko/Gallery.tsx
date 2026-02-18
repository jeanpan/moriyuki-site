import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('MyokoPage.gallery');

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const images = [
    `${basePath}/gallery-warm-food.png`,
    `${basePath}/gallery-view.png`,
    `${basePath}/gallery-kitchen.png`,
    `${basePath}/gallery-dining.png`,
    `${basePath}/gallery-washroom.png`,
    `${basePath}/gallery-laundry.png`,
    `${basePath}/gallery-lounge.png`,
    `${basePath}/gallery-toilet.png`,
    `${basePath}/gallery-bath.png`,
  ];

  return (
    <section className="py-20 md:py-32 bg-white text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-b-2 border-amber-600 inline-block pb-2">
            {t('title')}
          </h2>
        </div>

        <div className="columns-1 md:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
