import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-responsive py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h4l2-3 4 6 2-3h6" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white font-semibold tracking-wide">???.????</span>
          </div>
          <p className="mt-3 text-sm text-white/60">?????????? ??????????? ?????? ?? ???? ??????. ????????????, ?????????, ????.</p>
        </div>

        <div>
          <h4 className="font-medium text-white/90">????????</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><Link href="/about" className="hover:text-white">? ????????</Link></li>
            <li><Link href="/services" className="hover:text-white">??????</Link></li>
            <li><Link href="/franchise" className="hover:text-white">????????</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white/90">????</h4>
          <ul className="mt-3 space-y-2 text-white/70">
            <li><Link href="/locations" className="hover:text-white">???????</Link></li>
            <li><Link href="/contact" className="hover:text-white">????????</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white/90">????????</h4>
          <p className="mt-3 text-white/70 text-sm">info@tirset.ru<br/>+7 (495) 000-00-00</p>
          <Link href="/contact" className="button-ghost mt-4 inline-flex">????????? ???????????</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">? {new Date().getFullYear()} ???.????. ??? ????? ????????.</div>
    </footer>
  );
}
