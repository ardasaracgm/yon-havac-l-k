"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";

const slides = [
  {
    title: "Stratejik Havacılık Çözümleri",
    text: "Danışmanlık, gözlem-denetleme ve proje yönetimi süreçlerini modern bir kurumsal dil ile sunan yeni nesil web yapısı.",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Savunma Sistemleri Yaklaşımı",
    text: "Teknik yetkinliği, sade tasarımı ve yüksek güven hissi veren içerik düzeni ile öne çıkan kurumsal sunum altyapısı.",
    image:
      "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Proje Yönetimi ve Eğitim",
    text: "Şirketin faaliyet alanlarını daha açık anlatan, görüşme ve teklif talebi toplamaya odaklı hızlı Next.js deneyimi.",
    image:
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <Container>
        <div className="hero-grid">
          <div>
            <div className="hero-chip">Havacılık ve Savunma Çözümleri</div>

            <h1 className="hero-title">
              Açık tonlarda, güçlü ve kurumsal bir yeni nesil savunma sitesi.
            </h1>

            <p className="hero-text">
              Yön Havacılık için yeniden kurgulanan bu yapı; danışmanlık, proje
              geliştirme, gözlem-denetleme ve eğitim başlıklarını daha modern bir
              tasarım diliyle sunar.
            </p>

            <div className="hero-actions">
              <a href="#iletisim" className="button-primary">
                Görüşme Talep Et
              </a>
              <a href="#hizmetler" className="button-secondary">
                Hizmetleri İncele
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="slider-shell">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`slide ${activeIndex === index ? "active" : ""}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <div className="hero-overlay" />
                  <div className="slide-content">
                    <div className="slide-kicker">Hero Slider</div>
                    <div className="slide-title">{slide.title}</div>
                    <p className="slide-text">{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`slider-dot ${
                    activeIndex === index ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
