import Container from "@/components/ui/container";

export default function ContactSection() {
  return (
    <section id="iletisim" className="contact section">
      <Container>
        <div className="two-col">
          <div>
            <div className="eyebrow">İletişim</div>
            <h2 className="section-title">
              Kurumsal görüşme ve teklif talepleri için güçlü kapanış alanı
            </h2>
            <p className="section-text" style={{ maxWidth: 620 }}>
              Bu alan mevcut iletişim bilgilerinizle güncellenecek. İstenirse teklif formu,
              WhatsApp butonu, harita ve çok dilli içerik yapısı da eklenebilir.
            </p>
          </div>

          <div className="contact-box">
            <div className="card-soft">
              <div className="meta-label">Telefon</div>
              <div className="meta-value">+90 312 442 21 81</div>
            </div>

            <div className="card-soft">
              <div className="meta-label">E-Posta</div>
              <div className="meta-value">info@yonhavacilik.com</div>
            </div>

            <div className="card-soft">
              <div className="meta-label">Adres</div>
              <div className="meta-value">Beysukent, Ankara</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
