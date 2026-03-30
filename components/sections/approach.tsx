import Container from "@/components/ui/container";

export default function ApproachSection() {
  return (
    <section id="yaklasim" className="approach section">
      <Container>
        <div className="two-col">
          <div>
            <div className="eyebrow">Kurumsal Yaklaşım</div>
            <h2 className="section-title">
              Danışmanlık, tedarik ve proje süreçlerini tek bir dilde birleştirir
            </h2>
          </div>

          <div className="copy-stack">
            <p>
              Yeni sitede ana amaç, teknik kabiliyeti metin kalabalığıyla değil; net bölümleme,
              güçlü başlıklar ve seçilmiş referans diliyle göstermek olacaktır.
            </p>
            <p>
              Böylece ziyaretçi birkaç saniye içinde şirketin hangi alanlarda hizmet verdiğini,
              nasıl değer ürettiğini ve hangi başlıkta iletişime geçmesi gerektiğini anlayacaktır.
            </p>
            <p>
              Tasarım dili; açık gri, taş ve nötr metalik tonlar üzerine kurulur. Görseller ise
              daha kurumsal, daha temiz ve yeniden tasarlanmış havacılık-savunma
              kompozisyonlarından oluşur.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
