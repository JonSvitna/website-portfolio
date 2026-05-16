"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#090806",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      {/* Main footer */}
      <div
        className="container-wide"
        style={{
          paddingTop: 64,
          paddingBottom: 48,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "start",
        }}
      >
        {/* Logo block */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: "#C9A84C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontSize: 18,
                color: "#0d0b08",
                letterSpacing: "0.05em",
              }}
            >
              SS
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                letterSpacing: "0.15em",
                color: "#FAF9F7",
              }}
            >
              SUPERSET SHAW
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(250,249,247,0.35)",
              lineHeight: 1.6,
              maxWidth: 200,
            }}
          >
            Faith. Family. Fitness.
            <br />
            Discipline Builds Legacy.
          </p>
        </div>

        {/* Nav links */}
        <nav>
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
                  color: "rgba(250,249,247,0.45)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(250,249,247,0.45)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Social + CTA */}
        <div style={{ textAlign: "right" }}>
          <a
            href="https://www.instagram.com/supersetshaw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ marginBottom: 24, fontSize: 13, padding: "12px 24px", display: "inline-flex" }}
          >
            Apply for Coaching
          </a>

          <div style={{ display: "flex", gap: 16, justifyContent: "flex-end", marginTop: 16 }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/supersetshaw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                border: "1px solid rgba(201,168,76,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(250,249,247,0.5)",
                transition: "border-color 0.3s ease, color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.5)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>

            {/* YouTube placeholder */}
            <a
              href="#"
              style={{
                width: 40,
                height: 40,
                border: "1px solid rgba(201,168,76,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(250,249,247,0.5)",
                transition: "border-color 0.3s ease, color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C9A84C";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,249,247,0.5)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 8s-0.3-2-1.2-2.8c-1.2-1.2-2.4-1.2-3-1.3C15.2 4 12 4 12 4s-3.2 0-5.8 0.2c-0.6 0-1.8 0-3 1.2C2.3 6 2 8 2 8S1.8 10.3 1.8 12.5v2.1c0 2.2 0.2 4.4 0.2 4.4s0.3 2 1.2 2.8c1.2 1.2 2.7 1.1 3.4 1.2C8.8 23 12 23 12 23s3.2 0 5.8-0.2c0.6 0 1.8 0 3-1.2C21.7 21 22 19 22 19s0.2-2.3 0.2-4.5v-2.1C22.2 10.3 22 8 22 8z"/>
                <polygon points="9.5,15.5 15.5,12 9.5,8.5" fill="currentColor" stroke="none"/>
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
          borderTop: "1px solid rgba(201,168,76,0.06)",
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
            color: "rgba(250,249,247,0.25)",
          }}
        >
          © {currentYear} Superset Shaw. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "rgba(250,249,247,0.2)",
          }}
        >
          Faith · Family · Fitness
        </p>
      </div>
    </footer>
  );
}
