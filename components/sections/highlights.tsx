import Container from "@/components/ui/container";

const highlights = [
  {
    title: "Savunma Sistemleri",
    text: "İhtiyaca uygun sistemlerin değerlendirilmesi ve proje süreçlerine entegrasyonu için teknik destek sunuyoruz.",
  },
  {
    title: "Tedarik ve Lojistik",
    text: "Tedarik süreçlerinin planlı, kontrollü ve sürdürülebilir şekilde ilerlemesine katkı sağlıyoruz.",
  },
  {
    title: "Proje Yönetimi",
    text: "Zaman ve kaynak yönetimini disiplinli bir yapı ile ele alarak projelerin verimli ilerlemesini sağlıyoruz.",
  },
  {
    title: "Teknik Eğitim",
    text: "Sistem kullanımı ve operasyonel süreçler için eğitim ve bilgi aktarımı sağlıyoruz.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="section-tight">
      <Container>
        <div className="grid-4">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <div className="icon-placeholder" />
              <div className="card-title">{item.title}</div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
