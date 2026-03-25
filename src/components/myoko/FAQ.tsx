'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type FaqItemProps = {
  question: string;
  children: React.ReactNode;
};

function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-slate-800 transition-colors"
      >
        <span className="font-semibold text-white leading-snug">{question}</span>
        <span className="text-amber-500 text-xl flex-shrink-0 mt-0.5">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-slate-700">
          {children}
        </div>
      )}
    </div>
  );
}

type FaqSectionProps = {
  title: string;
  children: React.ReactNode;
};

function FaqSection({ title, children }: FaqSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

export default function FAQ() {
  const t = useTranslations('FaqPage');

  return (
    <div className="max-w-3xl mx-auto">
      {/* Booking & Payment */}
      <FaqSection title={t('booking.title')}>
        <FaqItem question={t('booking.q1')}>
          <p className="pt-4">{t('booking.a1')}</p>
        </FaqItem>
        <FaqItem question={t('booking.q2')}>
          <p className="pt-4">{t('booking.a2')}</p>
        </FaqItem>
        <FaqItem question={t('booking.q3')}>
          <p className="pt-4">{t('booking.a3')}</p>
        </FaqItem>
      </FaqSection>

      {/* Cancellation & Refunds */}
      <FaqSection title={t('cancellation.title')}>
        <FaqItem question={t('cancellation.q4')}>
          <div className="pt-4 space-y-3">
            <p>{t('cancellation.a4_intro')}</p>
            <ul className="space-y-2 pl-4">
              {(['a4_policy1', 'a4_policy2', 'a4_policy3', 'a4_policy4'] as const).map(
                (key) => (
                  <li key={key} className="flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">·</span>
                    <span>{t(`cancellation.${key}`)}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </FaqItem>
        <FaqItem question={t('cancellation.q5')}>
          <p className="pt-4">{t('cancellation.a5')}</p>
        </FaqItem>
      </FaqSection>

      {/* House Rules */}
      <FaqSection title={t('rules.title')}>
        <FaqItem question={t('rules.q6')}>
          <div className="pt-4 space-y-2">
            <p>{t('rules.a6_checkin')}</p>
            <p>{t('rules.a6_checkout')}</p>
          </div>
        </FaqItem>
        <FaqItem question={t('rules.q7')}>
          <div className="pt-4 space-y-3">
            <p>{t('rules.a7_smoke')}</p>
            <p>{t('rules.a7_pets')}</p>
          </div>
        </FaqItem>
        <FaqItem question={t('rules.q8')}>
          <p className="pt-4">{t('rules.a8')}</p>
        </FaqItem>
      </FaqSection>
    </div>
  );
}
