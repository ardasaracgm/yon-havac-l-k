import Container from "@/components/ui/container";

const services = [
  {
    title: "Havacılık ve Savunma Danışmanlığı",
    text: "Operasyonel ihtiyaçlar, sistem seçimi, teknik değerlendirme ve saha gereksinimlerine göre karar desteği sunan kurumsal danışmanlık yaklaşımı.",
  },
  {
    title: "Gözlem ve Denetleme",
    text: "Sistem, malzeme ve süreçlerin teknik uygunluk, performans ve sürdürülebilirlik açısından değerlendirilmesine odaklanan denetim hizmetleri.",
  },
  {
    title: "Proje Yönetimi ve Eğitim",
    text: "Uzman ekiplerle proje planlama, yürütme, raporlama ve uygulamalı eğitim süreçlerini tek bir yapı altında toplar.",
  },
];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="section">
      <Container>
        <div style={{ maxWidth: 820 }}>
          <div className="eyebrow">Hizmetler</div>
          <h2 className="section-title">
            Ana hizmet başlıklarını daha net ve daha güçlü anlatan yeni yapı
          </h2>
          <p className="section-text">
            Eski sitedeki temel hizmet omurgası korunur; ancak içerikler daha güven veren,
            daha sade ve daha satış odaklı bir kurgu ile yeniden yazılır.
          </p>
        </div>

        <div className="grid-3" style={{ marginTop: 40 }}>
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="icon-placeholder" />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
