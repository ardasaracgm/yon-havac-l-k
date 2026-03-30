import Container from "@/components/ui/container";

const navItems = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Yaklaşım", href: "#yaklasim" },
  { label: "Kalite", href: "#kalite" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  return (
    <header className="topbar">
      <Container>
        <div className="topbar-inner">
          <div>
            <div className="brand-kicker">Yön Havacılık</div>
            <div className="brand-title">Savunma Sistemleri</div>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
