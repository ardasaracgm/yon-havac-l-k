import Container from "@/components/ui/container";

const items = [
  "Danışmanlık ve proje geliştirme odaklı yapı",
  "Tedarik ve lojistik süreçlerinde koordinasyon",
  "Teknik değerlendirme ve uygulama takibi",
  "Sade, güvenilir ve kurumsal hizmet yaklaşımı",
];

export default function ApproachSection() {
  return (
    <section className="approach section">
      <Container>
        <div className="two-col">
          <div>
            <div className="eyebrow">Kurumsal Yaklaşım</div>
            <h2 className="section-title">
              Güven, disiplin ve sürdürülebilir çözüm yaklaşımı
            </h2>
          </div>

          <div>
            <div className="copy-stack">
              <p>
                Yön Havacılık, savunma ve havacılık alanındaki projelerde teknik
                bilgi ile operasyonel ihtiyacı aynı zeminde buluşturan bir çalışma
                anlayışına sahiptir.
              </p>

              <p>
                Her projede müşteri ihtiyaçlarını doğru analiz ederek uygulanabilir,
                verimli ve sürdürülebilir çözümler üretmeyi hedefler. Uzun vadeli iş
                birlikleri ve güven odaklı yaklaşım temel prensibimizdir.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 16,
                marginTop: 24,
              }}
            >
              {items.map((item) => (
                <div key={item} className="info-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
