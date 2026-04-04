import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/myoko/Hero';
import Intro from '@/components/myoko/Intro';
import Features from '@/components/myoko/Features';
import Layout from '@/components/myoko/Layout';
import Rooms from '@/components/myoko/Rooms';
import Gallery from '@/components/myoko/Gallery';
import Location from '@/components/myoko/Location';
import Footer from '@/components/myoko/Footer';

const BASE_URL = 'https://moriyukijp.com';
const PAGE_PATH = '/myoko';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MyokoPage' });

  const ogLocale =
    locale === 'zh' ? 'zh_TW' : locale === 'ja' ? 'ja_JP' : 'en_US';

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `${BASE_URL}/${locale}${PAGE_PATH}`,
      languages: {
        en: `${BASE_URL}/en${PAGE_PATH}`,
        ja: `${BASE_URL}/ja${PAGE_PATH}`,
        zh: `${BASE_URL}/zh${PAGE_PATH}`,
        'x-default': `${BASE_URL}/en${PAGE_PATH}`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${BASE_URL}/${locale}${PAGE_PATH}`,
      siteName: 'Moriyuki / 森雪',
      images: [
        {
          url: `${BASE_URL}/myoko-hero-new.png`,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
      locale: ogLocale,
      type: 'website',
    },
  };
}

const descriptions: Record<string, string> = {
  en: 'A cozy guesthouse in Myoko Kogen, Niigata, Japan, near major ski resorts including Akakura, Suginohara, and Lotte Arai.',
  zh: '森雪是位於日本新潟妙高高原的溫馨民宿。鄰近赤倉觀光、杉之原、樂天新井等雪場。提供滑雪乾燥室、完善廚房與免費停車。',
  ja: '新潟県妙高高原にある民宿・森雪。赤倉観光・杉ノ原・ロッテアライなど複数のスキー場に近く、スキー乾燥室・フルキッチン・無料駐車場完備。',
};

function buildJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Moriyuki / 森雪',
    alternateName: ['森雪', 'Moriyuki Myoko', '妙高民宿 森雪'],
    url: `${BASE_URL}/${locale}/myoko`,
    image: `${BASE_URL}/myoko-hero-new.png`,
    description: descriptions[locale] || descriptions.en,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Myoko',
      addressRegion: 'Niigata',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.878,
      longitude: 138.107,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Ski dry room', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full kitchen with dishwasher', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    ],
    numberOfRooms: 3,
    checkinTime: '15:00',
    checkoutTime: '10:00',
    currenciesAccepted: 'JPY',
    paymentAccepted: 'Credit Card, Bank Transfer',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
      />
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
