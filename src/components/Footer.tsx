import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#060606] px-8 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-black italic text-lg tracking-tighter uppercase mb-3">
              DARK <span className="text-[var(--accent)]">FACTORY</span>
            </p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#333] leading-relaxed">
              // DTG Studio · Gifu, Japan<br />
              // Authorized Bad Printer Reseller<br />
              // Collection 001
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-4">
              // Navigate
            </p>
            <ul className="space-y-2 font-mono text-[10px] uppercase tracking-widest">
              {[
                { href: '/shop', label: 'Shop Collection' },
                { href: '/about', label: 'Studio' },
                { href: '/logistics', label: 'Shipping & Returns' },
                { href: '/login', label: 'Operator Login' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[#444] hover:text-[var(--accent)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--accent)] mb-4">
              // Contact
            </p>
            <div className="space-y-2 font-mono text-[10px] uppercase tracking-widest text-[#444]">
              <p>
                <a href="mailto:orders@dark-factory.co" className="hover:text-[var(--accent)] transition-colors">
                  orders@dark-factory.co
                </a>
              </p>
              <p>Orders &amp; Returns</p>
              <p className="pt-2 text-[#222]">Response: 1–2 business days</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[9px] uppercase tracking-widest text-[#222]">
          <p>© 2024 Dark Factory · Gifu Studio · All rights reserved</p>
          <p>Printed on demand · Bad Printer 7.4oz · Ships worldwide</p>
        </div>

      </div>
    </footer>
  );
}
