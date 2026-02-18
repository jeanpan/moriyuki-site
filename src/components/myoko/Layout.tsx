import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Layout() {
  const t = useTranslations('MyokoPage.layout');

  return (
    <section className="py-20 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 border-b-2 border-amber-600 inline-block pb-2">
          {t('title')}
        </h2>

        <div className="w-full bg-white p-6 rounded-2xl shadow-lg border border-slate-100 overflow-hidden transition-transform hover:scale-[1.01] duration-500">
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/layout-plan.png`}
              alt="Moriyuki Floor Plan"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
