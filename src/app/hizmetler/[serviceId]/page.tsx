"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceProvider {
  id: number;
  name: string;
  experienceYears: number;
  totalJobs: number;
  rating: number;
  district: string;
  profileImage: string;
}

interface Review {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  stats: {
    providers: number;
    clients: number;
    totalServices: number;
  };
  providers: ServiceProvider[];
  reviews: Review[];
}

// Dummy data for services (should ideally come from a central source/API)
const allServices = [
  {
    id: "cekici",
    name: "Çekici Hizmetleri",
    description: "Aracınız yolda kaldığında, hızlı ve güvenilir çekici hizmetlerimizle yanınızdayız. En yakın çekiciyi anında bulun.",
    image: "https://i.ibb.co/0j1n6kB/cekici.jpg",
    stats: { providers: 50, clients: 12000, totalServices: 15000 },
    providers: [
      {
        id: 1,
        name: "Aktifler Oto Çekici",
        experienceYears: 3,
        totalJobs: 162,
        rating: 4.8,
        district: "Küçükçekmece",
        profileImage: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
      },
      {
        id: 2,
        name: "Güven Çekici",
        experienceYears: 5,
        totalJobs: 250,
        rating: 4.9,
        district: "Avcılar",
        profileImage: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
      },
    ],
    reviews: [
      { id: 1, customerName: "Ayşe Yılmaz", rating: 5, comment: "Çok hızlı ve profesyonel bir hizmet aldım, teşekkürler!" },
      { id: 2, customerName: "Can Demir", rating: 4, comment: "Aracım için anında destek sağlandı, memnun kaldım." },
    ],
  },
  {
    id: "lastikci",
    name: "Lastik Tamir ve Değişim",
    description: "Lastik patlaması veya arızası durumunda mobil lastik tamir ve değişim hizmetimizle yola devam edin.",
    image: "https://i.ibb.co/0j1n6kB/lastikci.jpg",
    stats: { providers: 30, clients: 8000, totalServices: 10000 },
    providers: [
      {
        id: 1,
        name: "Mobil Lastik",
        experienceYears: 4,
        totalJobs: 90,
        rating: 4.7,
        district: "Bahçelievler",
        profileImage: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
      },
      {
        id: 2,
        name: "Yoldayız Lastik",
        experienceYears: 2,
        totalJobs: 60,
        rating: 4.5,
        district: "Şişli",
        profileImage: "https://cdn-icons-png.flaticon.com/512/1356/1356596.png",
      },
    ],
    reviews: [
      { id: 1, customerName: "Fatma Can", rating: 5, comment: "Gece yarısı lastiğim patladı, hemen gelip yardımcı oldular. Çok teşekkür ederim." },
      { id: 2, customerName: "Ali Kaya", rating: 4, comment: "Hizmet kalitesi iyiydi, biraz bekledim ama sonuçtan memnunum." },
    ],
  },
  // Diğer hizmetler için de benzer şekilde veri eklenebilir
];

export default function ServiceDetail() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.serviceId) {
      const { serviceId } = params;
      const foundService = allServices.find((s) => s.id === serviceId);

      if (foundService) {
        setService(foundService);
      } else {
        setError("Hizmet bulunamadı.");
      }
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Detaylar yüklenemedi.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{service.name} Detayları</h1>

        {/* Genel İstatistikler */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-blue-700">{service.stats.providers}</h3>
            <p className="text-gray-600">Hizmet Veren</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-green-700">{service.stats.clients}</h3>
            <p className="text-gray-600">Hizmet Alan</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-orange-700">{service.stats.totalServices}</h3>
            <p className="text-gray-600">Toplam Verilen Hizmet</p>
          </div>
        </div>

        {/* Hizmet Verenler */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Hizmet Verenler</h2>
        <div className="space-y-6 mb-12">
        {service.providers.map((provider: ServiceProvider) => (
            <div key={provider.id} className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
              <Image src={provider.profileImage} alt={provider.name} width={80} height={80} className="rounded-full object-contain flex-shrink-0 mx-auto" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-800">{provider.name}</h3>
                <p className="text-gray-600 text-sm">{provider.experienceYears} Yılı Deneyim - {provider.totalJobs} Toplam İş</p>
                <p className="text-yellow-500 flex items-center justify-center sm:justify-start">
                  ⭐ {provider.rating} ({provider.totalJobs} yorum)
                </p>
                <p className="text-gray-500 flex items-center justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {provider.district}
                </p>
              </div>
              {/* Burada iletişim butonları eklenebilir */}
            </div>
          ))}
        </div>

        {/* Müşteri Yorumları */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Müşteri Yorumları</h2>
        <div className="space-y-4">
          {service.reviews.map((review: Review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-2">
                <p className="font-semibold text-gray-800 mr-2">{review.customerName}</p>
                <p className="text-yellow-500">⭐ {review.rating}</p>
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 