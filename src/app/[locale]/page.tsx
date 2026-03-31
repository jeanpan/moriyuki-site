'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function LocalePage() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    router.replace(`/${params.locale}/myoko`);
  }, [router, params.locale]);

  return null;
}
