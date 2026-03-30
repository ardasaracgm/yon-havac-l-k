import Container from "@/components/ui/container";

const partners = [
  "Savunma Teknolojileri",
  "Lojistik ve Tedarik",
  "Proje Çözümleri",
  "Teknik Eğitim",
];

export default function PartnersSection() {
  return (
    <section className="section-tight">
      <Container>
        <div className="grid-4">
          {partners.map((partner) => (
            <div key={partner} className="partner-card">
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
