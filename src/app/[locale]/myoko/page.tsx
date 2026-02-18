import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/myoko/Hero';
import Intro from '@/components/myoko/Intro';
import Features from '@/components/myoko/Features';
import Layout from '@/components/myoko/Layout';
import Rooms from '@/components/myoko/Rooms';
import Gallery from '@/components/myoko/Gallery';
import Location from '@/components/myoko/Location';
import Footer from '@/components/myoko/Footer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MyokoPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function MyokoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Hero />
      <Intro />
      <Layout />
      <Features />
      <Rooms />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
