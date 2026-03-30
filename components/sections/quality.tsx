import Container from "@/components/ui/container";

const items = [
  "Müşteri ihtiyaçlarını doğru analiz eden çözüm yaklaşımı",
  "Zamanında teslim ve operasyonel disiplin",
  "Sürekli gelişim odaklı kalite anlayışı",
  "Uzman kadro ve güçlü iş ortakları ile sürdürülebilir hizmet",
];

export default function QualitySection() {
  return (
    <section className="section">
      <Container>
        <div className="quality-wrap">
          <div className="eyebrow">Kalite Politikamız</div>
          <h2 className="section-title">
            Güvenilirlik, süreklilik ve ölçülebilir süreç yönetimi
          </h2>
          <p className="section-text" style={{ maxWidth: 860 }}>
            Her projede kalite standardını yükseltmeyi, süreçleri şeffaf ve
            sürdürülebilir şekilde yönetmeyi hedefliyoruz.
          </p>

          <div className="grid-4" style={{ marginTop: 32 }}>
            {items.map((item) => (
              <div key={item} className="partner-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
