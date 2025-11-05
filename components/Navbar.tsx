"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '/', label: '???????' },
    { href: '/services', label: '??????' },
    { href: '/locations', label: '???????' },
    { href: '/about', label: '? ????????' },
    { href: '/franchise', label: '????????' },
    { href: '/contact', label: '????????' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12h4l2-3 4 6 2-3h6" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-white font-semibold tracking-wide">???.????</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white transition">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button-primary">????????? ???????????</Link>
        </nav>

        <button className="md:hidden p-2 text-white/80" aria-label="????" onClick={() => setOpen((v) => !v)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="container-responsive py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/80 hover:text-white transition" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button-primary text-center" onClick={() => setOpen(false)}>?????????</Link>
          </div>
        </div>
      )}
    </header>
  );
}
