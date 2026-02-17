import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Image from 'next/image';
import '../globals.css';

import LocaleSwitcher from '@/components/LocaleSwitcher';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased font-[family-name:var(--font-geist-sans)]">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <header className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Moriyuki Logo"
                  width={40}
                  height={40}
                  className="w-12 h-12 object-contain"
                />
                <h1 className="text-2xl font-bold text-white tracking-wide uppercase">
                  Moriyuki
                </h1>
              </div>
              <div className="flex gap-4 items-center">
                <LocaleSwitcher />
              </div>
            </header>
            <main className="flex-grow">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
