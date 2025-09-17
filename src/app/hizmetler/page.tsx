"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hizmetler() {
  const services = [
    {
      id: "cekici",
      name: "Çekici Hizmetleri",
      description: "Aracınız yolda kaldığında, hızlı ve güvenilir çekici hizmetlerimizle yanınızdayız. En yakın çekiciyi anında bulun.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "lastikci",
      name: "Lastik Tamir ve Değişim",
      description: "Lastik patlaması veya arızası durumunda mobil lastik tamir ve değişim hizmetimizle yola devam edin.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "coklu-cekici",
      name: "Çoklu Çekici Hizmetleri",
      description: "Birden fazla aracınızın taşınması gerektiğinde veya filo hizmetleri için çoklu çekici çözümlerimiz.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "vinc",
      name: "Vinç Kiralama",
      description: "İnşaat, kurtarma veya yük taşıma işleriniz için farklı kapasitelerde vinç kiralama hizmetleri.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "sepetli-vinc-kiralama",
      name: "Sepetli Vinç Kiralama",
      description: "Yüksekte çalışma gerektiren durumlarda güvenli ve pratik sepetli vinç çözümleri.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "forklift",
      name: "Forklift Kiralama",
      description: "Depolama, yükleme ve boşaltma işlemleriniz için ihtiyacınız olan forklift kiralama hizmetleri.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "oto-tamirci",
      name: "Mobil Oto Tamirci",
      description: "Aracınızın tamir ihtiyacı olduğunda bulunduğunuz yere gelen gezici tamir hizmetimiz.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "oto-elektrik",
      name: "Oto Elektrikçi",
      description: "Araç elektrik aksamlarındaki arızalar için profesyonel ve hızlı çözüm hizmeti.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "aku",
      name: "Akü Takviye ve Değişim",
      description: "Aracınızın aküsü bittiğinde veya yeni aküye ihtiyacınız olduğunda anında destek.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "oto-ekspertiz",
      name: "Oto Ekspertiz",
      description: "İkinci el araç alım-satımında güvenli karar vermeniz için detaylı ekspertiz hizmeti.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "oto-anahtarci",
      name: "Oto Anahtarcı",
      description: "Anahtarınızı kaybettiğinizde veya yedek anahtara ihtiyacınız olduğunda acil anahtarcı hizmeti.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "evden-eve-nakliyat",
      name: "Evden Eve Nakliyat",
      description: "Eşyalarınızı güvenle yeni adresinize taşıyan profesyonel evden eve nakliyat çözümleri.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "şarj-istasyonu",
      name: "Şarj İstasyonu Bulucu",
      description: "Elektrikli aracınız için en yakın şarj istasyonlarını hızlıca bulun ve rotanızı planlayın.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
    {
      id: "yakıt-ihmali-destek",
      name: "Yakıt İhmali Desteği",
      description: "Aracınızın yakıtı bittiğinde veya yanlış yakıt koyduğunuzda acil yol yardım hizmeti.",
      image: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Hizmetlerimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
                        <Link href={`/hizmetler/${service.id}`} key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl block">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={400}
                          height={200}
                          className="w-full h-48 object-contain mx-auto"
                        />
                        <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h2>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 