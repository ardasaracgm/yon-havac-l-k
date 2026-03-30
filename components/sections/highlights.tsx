import Container from "@/components/ui/container";

const highlights = [
  "Danışmanlık ve proje geliştirme odaklı kurumsal yapı",
  "Lojistik, temin ve tedarik süreçlerine hâkim yaklaşım",
  "Teknik değerlendirme ve uygulama desteği",
  "Savunma ve havacılık alanına uygun modern sunum dili",
];

export default function HighlightsSection() {
  return (
    <section className="section">
      <Container>
        <div className="grid-4">
          {highlights.map((item) => (
            <div key={item} className="info-card">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
