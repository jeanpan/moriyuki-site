'use client';

import { usePathname, Link } from '@/i18n/routing';
import Image from 'next/image';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Header() {
  const pathname = usePathname();
  
  // Check if we are on the home page (root or locale root)
  // Or check if we are on the 'myoko' main page which has the dark hero image
  // Adjust this logic based on which pages have dark backgrounds
  const isTransparentPage = pathname === '/' || pathname === '/myoko' || pathname === '';

  return (
    <header 
      className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent"
    >
      <div className="flex items-center gap-3">
        {/* We might want a dark logo for light background, but for now we'll use the same one */}
        {/* If the logo is white text, it will be invisible on white bg. */}
        {/* Assuming logo.png has color or is dark enough. If not, we need a dark version. */}
        <Link href="/myoko" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className={`p-1 rounded`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
              alt="Moriyuki Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1 className={`text-2xl font-bold tracking-wide uppercase transition-colors text-white`}>
            Moriyuki
          </h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <LocaleSwitcher isDark={false} />
      </div>
    </header>
  );
}
