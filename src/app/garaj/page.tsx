import React from "react";

const fakeData = [
  {
    id: 1,
    aracTipi: "Otomobil",
    arac: "Volkswagen - Passat",
    cikis: "Fethiye - Muğla",
    varis: "Ünye - Ordu",
    sure: "3 gün içinde",
    mesafe: "1119.96 km",
    aciklama: "Araç yürür durumda kazasız",
    teklif: null,
  },
  {
    id: 2,
    aracTipi: "Otomobil",
    arac: "DİĞER - DİĞER",
    cikis: "Bağcılar - İstanbul",
    varis: "Tepebaşı - Eskişehir",
    sure: "1 gün içinde",
    mesafe: "286.08 km",
    aciklama:
      "Çalışır/Yürür durumda Otomobil\nİstanbul-Bağcılar ⇄ Eskişehir-Tepebaşı ilçesine\nNOT: Sadece hesap yapıyorum",
    teklif: 2,
  },
];

export default function Garaj() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Filtreler */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Hizmet Tipi</label>
          <select className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>Tümü</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Çıkış Noktası</label>
          <select className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>Tümü</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Varış Noktası</label>
          <select className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>Tümü</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Zaman</label>
          <select className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>Tümü</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Araç Tipi</label>
          <select className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600">
            <option>Tümü</option>
          </select>
        </div>
      </div>

      {/* Kartlar */}
      <div className="space-y-6">
        {fakeData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-0.5 p-5 relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-lg">Çekici</span>
              <div className="flex items-center gap-2">
                {item.teklif && (
                  <span className="text-gray-600 text-sm">
                    {item.teklif} Teklif Verildi
                  </span>
                )}
                <img
                  src="/Engicon.png"
                  alt="Çekici"
                  className="w-7 h-7 object-contain ml-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 17v-1a4 4 0 014-4h8a4 4 0 014 4v1" /><circle cx="12" cy="7" r="4" /></svg>
                  </span>
                  <span className="font-semibold">Araç Tipi:</span>
                  <span className="ml-1">{item.aracTipi}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6" /></svg>
                  </span>
                  <span className="font-semibold">Araç:</span>
                  <span className="ml-1">{item.arac}</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" /></svg>
                  </span>
                  <span className="font-semibold">Çıkış:</span>
                  <span className="ml-1">{item.cikis}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17 9V3a1 1 0 00-1-1H8a1 1 0 00-1 1v6" /></svg>
                  </span>
                  <span className="font-semibold">Varış:</span>
                  <span className="ml-1">{item.varis}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                  </span>
                  <span className="font-semibold">Süre:</span>
                  <span className="ml-1">{item.sure}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 text-orange-500">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-4h-1" /></svg>
                  </span>
                  <span className="font-semibold">Mesafe:</span>
                  <span className="ml-1">{item.mesafe}</span>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Açıklama:</span>{" "}
              <span className="whitespace-pre-line">{item.aciklama}</span>
            </div>
            <div className="flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-1 cursor-pointer">
                Numarayı Gör
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 