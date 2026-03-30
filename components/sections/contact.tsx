import Container from "@/components/ui/container";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // şimdilik fake submit (backend bağlarız sonra)
    setSent(true);
  };

  return (
    <section id="iletisim" className="contact section">
      <Container>
        <div className="two-col">
          {/* SOL */}
          <div>
            <div className="eyebrow">İletişim</div>
            <h2 className="section-title">
              Kurumsal görüşme ve teklif talepleri
            </h2>
            <p className="section-text" style={{ maxWidth: 620 }}>
              Projeleriniz, iş birlikleri ve teknik talepleriniz için bizimle iletişime geçin.
              Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>

          {/* SAĞ */}
          <div className="contact-box">
            
            {/* FORM */}
            <form onSubmit={handleSubmit} className="card-soft">
              {!sent ? (
                <>
                  <input placeholder="Ad Soyad" required />
                  <input placeholder="Firma" />
                  <input type="email" placeholder="E-posta" required />
                  <input placeholder="Telefon" />
                  <textarea placeholder="Mesajınız" rows={4} required />

                  <button className="button-primary" type="submit">
                    Gönder
                  </button>
                </>
              ) : (
                <div style={{ padding: "20px 0", fontWeight: 600 }}>
                  Talebiniz alındı. En kısa sürede dönüş yapacağız.
                </div>
              )}
            </form>

            {/* BİLGİLER */}
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
