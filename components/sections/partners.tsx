import Container from "@/components/ui/container";

const partners = [
  "Savunma sanayii projelerine uygun kurumsal iş geliştirme yaklaşımı",
  "Teknik tedarik ve operasyonel ihtiyaçlara göre yapılandırılmış çözüm desteği",
  "Uzun vadeli iş birliği ve güven odaklı iletişim modeli",
  "Proje bazlı koordinasyon, uygulama takibi ve sürdürülebilir süreç yönetimi",
];

export default function PartnersSection() {
  return (
    <section className="section">
      <Container>
        <div>
          <div className="eyebrow">İş Birliği Yapısı</div>
          <h2 className="section-title">Güçlü koordinasyon, sürdürülebilir iş ortaklığı</h2>
          <p className="section-text" style={{ maxWidth: 860 }}>
            Yön Havacılık; müşteri ihtiyaçlarını, teknik gereksinimleri ve operasyonel
            hedefleri aynı çerçevede ele alarak uzun vadeli ve güvenilir iş birlikleri
            geliştirmeyi hedefler.
          </p>
        </div>

        <div className="grid-4" style={{ marginTop: 32 }}>
          {partners.map((item) => (
            <div key={item} className="partner-card">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
