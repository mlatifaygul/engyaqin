"use client";

import { useState, useRef, useEffect } from "react";

export default function HizmetVer() {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    firma: "",
    sektor: "",
    il: "",
    ilce: "",
    gsm: "",
    email: "",
  });

  // Hizmetler/Sektörler listesi
  const sektorler = [
    { id: "cekici", name: "Çekici" },
    { id: "lastikci", name: "Lastikçi" },
    { id: "coklu-cekici", name: "Çoklu Çekici" },
    { id: "vinc", name: "Vinç" },
    { id: "sepetli-vinc-kiralama", name: "Sepetli Vinç Kiralama" },
    { id: "forklift", name: "Forklift" },
    { id: "oto-tamirci", name: "Oto Tamirci" },
    { id: "oto-elektrik", name: "Oto Elektrik" },
    { id: "aku", name: "Akü" },
    { id: "oto-ekspertiz", name: "Oto Ekspertiz" },
    { id: "oto-anahtarci", name: "Oto Anahtarcı" },
    { id: "evden-eve-nakliyat", name: "Evden Eve Nakliyat" },
    { id: "şarj-istasyonu", name: "Şarj İstasyonu" },
    { id: "yakıt-ihmali-destek", name: "Yakıt İhmali Destek" },
  ];

  const [sektorSearch, setSektorSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const sektorInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSektorler = sektorler.filter(sektor =>
    sektor.name.toLowerCase().includes(sektorSearch.toLowerCase())
  );

  // Form input değişikliği
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Sektör inputu değişikliği
  const handleSektorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSektorSearch(e.target.value);
    setForm({ ...form, sektor: e.target.value });
    setShowDropdown(true);
  };

  // Form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Başvurunuz alınmıştır!");
  };

  // Dropdown dışına tıklanınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sektorInputRef.current &&
        !sektorInputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fb] py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Hizmet Vermek İstiyorum</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
              <input
                type="text"
                name="ad"
                value={form.ad}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
              <input
                type="text"
                name="soyad"
                value={form.soyad}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Firma Adı</label>
            <input
              type="text"
              name="firma"
              value={form.firma}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Sektör</label>
            <input
              ref={sektorInputRef}
              type="text"
              name="sektor"
              value={form.sektor}
              onChange={handleSektorChange}
              onFocus={() => setShowDropdown(true)}
              placeholder="Sektör ara..."
              autoComplete="off"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute left-0 right-0 mt-1 bg-white rounded-md shadow-lg max-h-[200px] overflow-auto border border-gray-200 z-30"
              >
                {filteredSektorler.length > 0 ? (
                  filteredSektorler.map((sektor) => (
                    <div
                      key={sektor.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setForm({ ...form, sektor: sektor.name });
                        setSektorSearch(sektor.name);
                        setShowDropdown(false);
                      }}
                    >
                      {sektor.name}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">Sonuç bulunamadı</div>
                )}
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">İl</label>
              <select
                name="il"
                value={form.il}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              >
                <option value="">İl seçiniz</option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                {/* Diğer iller eklenebilir */}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">İlçe</label>
              <input
                type="text"
                name="ilce"
                value={form.ilce}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GSM Numaranız</label>
            <input
              type="tel"
              name="gsm"
              value={form.gsm}
              onChange={handleChange}
              required
              placeholder="05xxxxxxxxx"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
          >
            Başvuruyu Gönder
          </button>
        </form>
      </div>
    </div>
  );
} 