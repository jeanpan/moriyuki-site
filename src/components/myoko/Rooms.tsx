import { useTranslations } from 'next-intl';

export default function Rooms() {
  const t = useTranslations('MyokoPage.rooms');

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const rooms = [
    {
      key: 'room1',
      title: t('room1.title'),
      description: t('room1.desc'),
      image: `${basePath}/room-king-1.png`,
    },
    {
      key: 'room2',
      title: t('room2.title'),
      description: t('room2.desc'),
      image: `${basePath}/room-2.png`,
    },
    {
      key: 'room3',
      title: t('room3.title'),
      description: t('room3.desc'),
      image: `${basePath}/room-3.png`,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${room.image})` }}
              />
              <div className="p-6 bg-slate-50">
                <h3 className="text-xl font-bold mb-2 text-slate-800">
                  {room.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {room.description}
                </p>
                {/* <button className="text-amber-600 font-semibold hover:text-amber-800 transition-colors text-sm uppercase tracking-wide">
                  {t('viewDetails')} &rarr;
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
