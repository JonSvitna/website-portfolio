import { contact, credentials, footer, navLinks, site } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="band-navy border-t border-navy-mid py-14">
      <div className="container-site grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-lg font-extrabold text-navy">
              C
            </span>
            <p className="text-display text-sm text-white">{site.name}</p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-asphalt-muted">{contact.address.line}</p>
          <p className="mt-2 font-mono text-xs text-asphalt-muted">
            {credentials.mhic} · Fax {contact.fax}
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Quick links</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-asphalt-muted transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</p>
          <a
            href={contact.phoneHref}
            className="mt-4 block font-mono text-lg font-semibold text-white hover:text-gold"
          >
            {contact.phone}
          </a>
          <a
            href={contact.emailHref}
            className="mt-2 block text-sm text-asphalt-muted hover:text-gold"
          >
            {contact.email}
          </a>
        </div>
      </div>

      <div className="container-site mt-12 border-t border-navy-mid pt-8">
        <p className="text-xs text-asphalt-muted">{footer.copyright}</p>
        <p className="mt-1 text-xs text-asphalt-muted">{footer.licenseNote}</p>
      </div>
    </footer>
  );
}
