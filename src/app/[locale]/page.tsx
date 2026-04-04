import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

const BASE_URL = 'https://moriyukijp.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}/myoko`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/myoko`);
}
