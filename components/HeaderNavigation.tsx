'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

const HeaderNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const searchRef = useRef<HTMLInputElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll state for navbar background change
  const [isScrolled, setIsScrolled] = useState(false);

  // Logo state from API
  const [logoUrl] = useState<string>('/logo.svg');

  const [services] = useState<any[]>([]);

  const isRTL = locale === 'ar';

  const navigationItems = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about-us` },
    { name: t('nav.services'), href: '#', isDropdown: true },
    { name: t('nav.blog'), href: `/${locale}/blogs` },
    { name: t('nav.team'), href: `/${locale}/our-team` },
    { name: t('nav.contact'), href: `/${locale}/contact-us` },
  ];

  // Handle scroll events to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isRTL ? 'rtl' : 'ltr'
      } ${isScrolled ? 'shadow-lg' : ''}`}
      style={{
        backgroundColor: isScrolled ? '#4B2615' : 'transparent',
        background: isScrolled ? '#4B2615' : 'none',
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ background: 'none', backgroundColor: 'transparent' }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center">
              {
                <Image
                  src={logoUrl}
                  alt="BinHindi Law Logo"
                  width={320}
                  height={80}
                  className="h-16 w-auto"
                  priority
                />
              }
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) =>
              item.isDropdown ? (
                /* Services Dropdown */
                <div key="services" className="relative" ref={servicesRef}>
                  <button
                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                    aria-haspopup="true"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform duration-200   ${
                        isRTL ? 'rotate-180 mr-2 ml-0' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Search */}
            <div className="relative">
              {
                <button
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                  aria-label={t('search.open')}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              }
            </div>

            {/* Language Toggle */}
            <button
              onClick={handleLanguageSwitch}
              className={`${
                isScrolled
                  ? 'bg-brown-800 hover:bg-brown-700'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              } text-white px-3 py-1 rounded-md text-sm font-medium transition-all duration-200`}
              aria-label={t('language.toggle')}
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors duration-200"
              aria-label={t('nav.mobile_menu')}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              ></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
