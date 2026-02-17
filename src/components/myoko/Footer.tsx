import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('MyokoPage.footer');

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`}
              alt="Moriyuki Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <h3 className="text-2xl font-bold text-white uppercase">
              Moriyuki
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Your cozy retreat in the heart of Myoko.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            {t('contact')}
          </h4>
          <p className="mb-2">Email: moriyuki2024.jp@gmail.com</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            {t('social')}
          </h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.instagram.com/mori_yuki_jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577788680483"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors text-2xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Moriyuki Myoko. All rights reserved.
      </div>
    </footer>
  );
}
