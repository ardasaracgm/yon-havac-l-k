import Container from "@/components/ui/container";

const quality = [
  "Müşteri ihtiyaçlarını doğru analiz eden sürdürülebilir çözüm yaklaşımı",
  "Kaliteyi, güvenilirliği ve zamanında teslimi merkeze alan operasyon disiplini",
  "Sürekli gelişim ve ölçülebilir süreç yönetimi",
  "Uzman kadro ve çözüm ortaklarıyla yüksek hizmet standardı",
];

export default function QualitySection() {
  return (
    <section id="kalite" className="section-tight">
      <Container>
        <div className="quality-wrap two-col">
          <div>
            <div className="eyebrow">Kalite Politikası</div>
            <h2 className="section-title">
              Güven, süreklilik ve ölçülebilir kalite üzerine kurulu anlatım
            </h2>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {quality.map((item) => (
              <div key={item} className="card-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
