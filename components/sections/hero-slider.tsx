"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/container";

const slides = [
  {
    kicker: "Stratejik Yaklaşım",
    title: "Savunma ve havacılıkta stratejik çözüm yaklaşımı",
    text: "Teknik uzmanlık, saha ihtiyaçları ve operasyonel gereksinimler doğrultusunda kurumlara özel çözümler geliştiriyoruz.",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kicker: "Teknik Değerlendirme",
    title: "Teknik değerlendirme ve güvenilir karar desteği",
    text: "Sistem seçimi, uygunluk analizi, performans değerlendirmesi ve uygulama süreçlerinde güçlü teknik destek sunuyoruz.",
    image:
      "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    kicker: "Proje ve Eğitim",
    title: "Proje yönetimi, eğitim ve uygulama desteği",
    text: "Planlamadan uygulamaya, raporlamadan eğitime kadar tüm süreçleri disiplinli ve ölçülebilir bir yapıyla yönetiyoruz.",
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
          
          {/* SOL */}
          <div>
            <div className="hero-chip">
              Yön Havacılık | Savunma ve Havacılık Çözümleri
            </div>

            <h1 className="hero-title">
              Savunma ve havacılık projelerinde güvenilir çözüm ortağı
            </h1>

            <p className="hero-text">
              Yön Havacılık; danışmanlık, teknik değerlendirme, tedarik yönetimi,
              proje koordinasyonu ve eğitim başlıklarında kurumlara çözüm sunar.
              İhtiyaca uygun, sürdürülebilir ve sonuç odaklı yaklaşımıyla
              süreçlerinizi uçtan uca destekler.
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

          {/* SAĞ */}
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
                    <div className="slide-kicker">{slide.kicker}</div>
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
