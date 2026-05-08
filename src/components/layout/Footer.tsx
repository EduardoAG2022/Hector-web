import { business, t } from "@/config/site";
import type { Lang } from "@/config/site";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const tr = t[lang];

  const navLinks = [
    { href: "#services", label: tr.nav.services },
    { href: "#work", label: tr.nav.work },
    { href: "#area", label: tr.nav.area },
    { href: "#reviews", label: tr.nav.reviews },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <footer className="jv-footer">
      <div className="jv-container">
        <div className="jv-footer-grid">
          <div className="jv-footer-brand">
            <a href="#" className="jv-logo" style={{ color: "var(--jv-paper)" }}>
              <span
                className="jv-logo-mark"
                style={{ background: "var(--jv-paper)", color: "var(--jv-stone)" }}
              >
                jv
              </span>
              <span className="jv-logo-text">
                <span>JV Patios &amp; Stonework</span>
                <small style={{ color: "var(--jv-on-dark-mute)" }}>
                  Annapolis · MD · Est. 2004
                </small>
              </span>
            </a>
            <div className="jv-footer-tagline">{tr.footer.tagline}</div>
            <div className="jv-footer-cred">{tr.footer.crafted}</div>
          </div>

          <div className="jv-footer-col">
            <h4>{tr.footer.links}</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="jv-footer-col">
            <h4>{tr.footer.contact}</h4>
            <ul>
              <li><a href={`tel:${business.phone1Tel}`}>{business.phone1}</a></li>
              <li><a href={`tel:${business.phone2Tel}`}>{business.phone2}</a></li>
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>{business.address}</li>
            </ul>
          </div>

          <div className="jv-footer-col">
            <h4>{tr.footer.hours}</h4>
            <ul>
              <li>{business.hours[lang].weekday}</li>
              <li>{business.hours[lang].weekend}</li>
              <li style={{ opacity: 0.5 }}>{business.hours[lang].sunday}</li>
            </ul>
          </div>
        </div>

        <div className="jv-footer-bottom">
          <span>{tr.footer.rights}</span>
          <span>MHIC #142857</span>
        </div>
      </div>
    </footer>
  );
}
