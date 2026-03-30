import Container from "@/components/ui/container";

const services = [
  {
    title: "Havacılık ve Savunma Danışmanlığı",
    text: "Operasyonel ihtiyaçların analiz edilmesi, uygun sistemlerin belirlenmesi ve teknik karar süreçlerinin desteklenmesi için uzman danışmanlık sunuyoruz.",
  },
  {
    title: "Teknik Gözlem ve Denetim",
    text: "Sistem, ekipman ve süreçleri performans, uygunluk ve sürdürülebilirlik açısından değerlendirerek güvenilir sonuçlar üretiyoruz.",
  },
  {
    title: "Proje Yönetimi ve Eğitim",
    text: "Projelerin planlama, yürütme, koordinasyon ve raporlama süreçlerini yönetiyor; ekiplerinize uygulamalı eğitim desteği sağlıyoruz.",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="section">
      <Container>
        <div>
          <div className="eyebrow">Hizmetler</div>
          <h2 className="section-title">Faaliyet alanlarımız</h2>
          <p className="section-text" style={{ maxWidth: 760 }}>
            Savunma ve havacılık sektörünün ihtiyaçlarına uygun olarak
            danışmanlık, teknik değerlendirme, proje yönetimi ve eğitim
            hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid-3" style={{ marginTop: 32 }}>
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="icon-placeholder" />
              <div className="card-title">{service.title}</div>
              <p className="card-text">{service.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
