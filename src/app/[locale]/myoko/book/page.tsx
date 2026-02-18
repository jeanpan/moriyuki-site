import { setRequestLocale, getTranslations } from 'next-intl/server';
import BookingForm from '@/components/myoko/BookingForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BookPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('BookPage');

  return (
    <div className="font-sans antialiased text-white bg-slate-900 min-h-screen py-24 md:py-32">
      <div className="absolute inset-0 bg-slate-900 -z-10" />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <BookingForm />
      </div>
    </div>
  );
}
