"use client";

import Container from "@/components/ui/container";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="iletisim" className="contact section">
      <Container>
        <div className="two-col">
          <div>
            <div className="eyebrow">İletişim</div>
            <h2 className="section-title">
              Görüşme ve teklif talepleriniz için bizimle iletişime geçin
            </h2>
            <p className="section-text" style={{ maxWidth: 620 }}>
              Projeleriniz, iş birlikleri ve teknik talepleriniz için ekibimizle
              iletişime geçebilirsiniz. İlgili birimlerimiz en kısa sürede size
              dönüş sağlayacaktır.
            </p>
          </div>

          <div className="contact-box">
            <form onSubmit={handleSubmit} className="card-soft">
              {!sent ? (
                <>
                  <input name="name" placeholder="Ad Soyad" required />
                  <input name="company" placeholder="Firma" />
                  <input name="email" type="email" placeholder="E-posta" required />
                  <input name="phone" placeholder="Telefon" />
                  <textarea name="message" placeholder="Mesajınız" rows={4} required />

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
