'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <div className="p-4">
      <p>
        Redirecting to{' '}
        <Link href="/en" className="underline">
          English version
        </Link>
        ...
      </p>
      <ul className="list-disc pl-5 mt-2">
        <li>
          <Link href="/en" className="text-blue-600 hover:underline">
            English
          </Link>
        </li>
        <li>
          <Link href="/zh" className="text-blue-600 hover:underline">
            中文
          </Link>
        </li>
        <li>
          <Link href="/ja" className="text-blue-600 hover:underline">
            日本語
          </Link>
        </li>
      </ul>
    </div>
  );
}
