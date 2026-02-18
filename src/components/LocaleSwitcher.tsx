'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher({ isDark = false }: { isDark?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  const textColor = isDark ? 'text-slate-900' : 'text-white';
  const borderColor = isDark ? 'border-slate-300' : 'border-white/30';
  const hoverBg = isDark ? 'hover:bg-slate-100' : 'hover:bg-white/10';
  const ringColor = isDark ? 'focus:ring-slate-400' : 'focus:ring-white/50';

  return (
    <div className="relative">
      <select
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className={`appearance-none bg-transparent ${textColor} border ${borderColor} rounded-full px-4 py-1.5 pr-8 text-sm ${hoverBg} transition-colors cursor-pointer focus:outline-none focus:ring-2 ${ringColor}`}
      >
        <option value="en" className="text-black">
          English
        </option>
        <option value="zh" className="text-black">
          中文
        </option>
        <option value="ja" className="text-black">
          日本語
        </option>
      </select>
      <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${textColor}`}>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
