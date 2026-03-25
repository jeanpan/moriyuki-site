import { setRequestLocale, getTranslations } from 'next-intl/server';
import FAQ from '@/components/myoko/FAQ';
import Footer from '@/components/myoko/Footer';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FaqPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('FaqPage');

  return (
    <div className="font-sans antialiased text-white bg-slate-900 min-h-screen">
      <div className="absolute inset-0 bg-slate-900 -z-10" />
      <div className="container mx-auto px-4 max-w-4xl py-24 md:py-32">
        <div className="mb-4">
          <Link
            href="/myoko"
            className="text-slate-400 hover:text-amber-500 transition-colors text-sm inline-flex items-center gap-1"
          >
            ← Moriyuki Myoko
          </Link>
        </div>
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
