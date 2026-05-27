"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#EDE7DC",
        borderTop: "1px solid #D9D3CB",
      }}
    >
      {/* Main */}
      <div
        className="container-wide"
        style={{
          paddingTop: 64,
          paddingBottom: 48,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: "clamp(28px, 5vw, 60px)",
          alignItems: "start",
        }}
      >
        {/* Logo */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                background: "#C89B4F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: 16,
                color: "#FFFFFF",
                letterSpacing: "0.05em",
              }}
            >
              DT
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                letterSpacing: "0.15em",
                color: "#1D1D1D",
              }}
            >
              DAVION THOMAS
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#A8917B",
              lineHeight: 1.7,
              maxWidth: 180,
            }}
          >
            Faith. Family. Fitness.
            <br />
            Discipline Builds Legacy.
          </p>
        </div>

        {/* Nav */}
        <nav style={{ paddingTop: 4 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px 40px",
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            {[
              { label: "Home", href: "#hero" },
              { label: "About", href: "#story" },
              { label: "Coaching", href: "#services" },
              { label: "Client Results", href: "#transformations" },
              { label: "Tips", href: "#feed" },
              { label: "Community", href: "#community" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6B5F52",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#C89B4F")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#6B5F52")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* CTA + socials */}
        <div style={{ textAlign: "right" }}>
          <a
            href="#final-cta"
            className="btn-gold"
            style={{ marginBottom: 20, fontSize: 13, padding: "12px 24px", display: "inline-flex" }}
          >
            Apply for Coaching
          </a>

          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 12 }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/davionthomas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 38,
                height: 38,
                border: "1.5px solid #D9D3CB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B5F52",
                transition: "border-color 0.3s ease, color 0.3s ease",
                textDecoration: "none",
                background: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C89B4F";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C89B4F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D9D3CB";
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B5F52";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* YouTube placeholder */}
            <a
              href="#"
              style={{
                width: 38,
                height: 38,
                border: "1.5px solid #D9D3CB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6B5F52",
                transition: "border-color 0.3s ease, color 0.3s ease",
                textDecoration: "none",
                background: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C89B4F";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C89B4F";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#D9D3CB";
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B5F52";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 7s-.3-2-1.2-2.8C20.7 3 19.5 3 19.5 3 16.5 2.8 12 2.8 12 2.8S7.5 2.8 4.5 3c0 0-1.2 0-2.3 1.2C1.3 5 1 7 1 7S.8 9.3.8 11.5v2C.8 15.7 1 18 1 18s.3 2 1.2 2.8C3.3 22 4.8 22 4.8 22c2 .2 8 .2 7.2.2s6-.1 8.5-.2c0 0 1.2 0 2.3-1.2C23.7 20 24 18 24 18s.2-2.3.2-4.5v-2C24.2 9.3 23 7 23 7zM9.7 15.5V8.3l6.6 3.6-6.6 3.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container-wide"
        style={{
          paddingTop: 20,
          paddingBottom: 24,
          borderTop: "1px solid #D9D3CB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#A8917B",
          }}
        >
          © {year} Davion Thomas. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#C89B4F",
            fontStyle: "italic",
          }}
        >
          Discipline Builds Legacy
        </p>
      </div>
    </footer>
  );
}
