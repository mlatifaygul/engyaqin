"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const cityDistricts: { [key: string]: { value: string; label: string }[] } = {
  istanbul: [
    { value: "adalar", label: "Adalar" },
    { value: "arnavutkoy", label: "Arnavutköy" },
    { value: "atasehir", label: "Ataşehir" },
    { value: "avcilar", label: "Avcılar" },
    { value: "bagcilar", label: "Bağcılar" },
    { value: "bahcelievler", label: "Bahçelievler" },
    { value: "bakirkoy", label: "Bakırköy" },
    { value: "basaksehir", label: "Başakşehir" },
    { value: "bayrampasa", label: "Bayrampaşa" },
    { value: "besiktas", label: "Beşiktaş" },
    { value: "beykoz", label: "Beykoz" },
    { value: "beylikduzu", label: "Beylikdüzü" },
    { value: "beyoglu", label: "Beyoğlu" },
    { value: "buyukcekmece", label: "Büyükçekmece" },
    { value: "catalca", label: "Çatalca" },
    { value: "cekmece", label: "Çekmeköy" },
    { value: "esenler", label: "Esenler" },
    { value: "esenyurt", label: "Esenyurt" },
    { value: "eyupsultan", label: "Eyüpsultan" },
    { value: "fatih", label: "Fatih" },
    { value: "gaziosmanpasa", label: "Gaziosmanpaşa" },
    { value: "gungoren", label: "Güngören" },
    { value: "kadikoy", label: "Kadıköy" },
    { value: "kagithane", label: "Kağıthane" },
    { value: "kartal", label: "Kartal" },
    { value: "kucukcekmece", label: "Küçükçekmece" },
    { value: "maltepe", label: "Maltepe" },
    { value: "pendik", label: "Pendik" },
    { value: "sancaktepe", label: "Sancaktepe" },
    { value: "sariyer", label: "Sarıyer" },
    { value: "silivri", label: "Silivri" },
    { value: "sultanbeyli", label: "Sultanbeyli" },
    { value: "sultangazi", label: "Sultangazi" },
    { value: "sile", label: "Şile" },
    { value: "sisli", label: "Şişli" },
    { value: "tuzla", label: "Tuzla" },
    { value: "umraniye", label: "Ümraniye" },
    { value: "uskudar", label: "Üsküdar" },
    { value: "zeytinburnu", label: "Zeytinburnu" },
  ],
  ankara: [
    { value: "akyurt", label: "Akyurt" },
    { value: "altindag", label: "Altındağ" },
    { value: "ayas", label: "Ayaş" },
    { value: "beypazari", label: "Beypazarı" },
    { value: "cankaya", label: "Çankaya" },
    { value: "cubuk", label: "Çubuk" },
    { value: "elmadag", label: "Elmadağ" },
    { value: "etimesgut", label: "Etimesgut" },
    { value: "evren", label: "Evren" },
    { value: "golbasi", label: "Gölbaşı" },
    { value: "gudul", label: "Güdül" },
    { value: "haymana", label: "Haymana" },
    { value: "kalecik", label: "Kalecik" },
    { value: "kecioren", label: "Keçiören" },
    { value: "kizilcahamam", label: "Kızılcahamam" },
    { value: "mamamk", label: "Mamak" },
    { value: "nallihan", label: "Nallıhan" },
    { value: "polatli", label: "Polatlı" },
    { value: "pursaklar", label: "Pursaklar" },
    { value: "sereflikochisar", label: "Şereflikoçhisar" },
    { value: "sincan", label: "Sincan" },
    { value: "yenimahalle", label: "Yenimahalle" },
  ],
  izmir: [
    { value: "alacati", label: "Alaçatı" },
    { value: "aliaga", label: "Aliağa" },
    { value: "balcova", label: "Balçova" },
    { value: "bayindir", label: "Bayındır" },
    { value: "bayrakli", label: "Bayraklı" },
    { value: "bergama", label: "Bergama" },
    { value: "beydag", label: "Beydağ" },
    { value: "bornova", label: "Bornova" },
    { value: "buca", label: "Buca" },
    { value: "cesme", label: "Çeşme" },
    { value: "cigli", label: "Çiğli" },
    { value: "dikili", label: "Dikili" },
    { value: "foca", label: "Foça" },
    { value: "gaziemir", label: "Gaziemir" },
    { value: "guzelbahce", label: "Güzelbahçe" },
    { value: "karabaglar", label: "Karabağlar" },
    { value: "karaburun", label: "Karaburun" },
    { value: "karsiyaka", label: "Karşıyaka" },
    { value: "kemalpasa", label: "Kemalpaşa" },
    { value: "kinik", label: "Kınık" },
    { value: "kiraz", label: "Kiraz" },
    { value: "konak", label: "Konak" },
    { value: "menderes", label: "Menderes" },
    { value: "menemen", label: "Menemen" },
    { value: "narlidere", label: "Narlıdere" },
    { value: "odemis", label: "Ödemiş" },
    { value: "seferihisar", label: "Seferihisar" },
    { value: "selcuk", label: "Selçuk" },
    { value: "tire", label: "Tire" },
    { value: "torbali", label: "Torbalı" },
    { value: "urla", label: "Urla" },
  ],
};

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  const services = [
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

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleShowDropdown = () => {
    setTimeout(() => {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        setDropdownStyle({
          position: "absolute",
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width,
          zIndex: 30,
        });
        setShowDropdown(true);
      }
    }, 0);
  };

  useEffect(() => {
    if (showDropdown && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: "absolute",
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        zIndex: 30,
      });
    }
  }, [showDropdown]);

  const handleFindLocation = async () => {
    setLoadingLocation(true);
    if (!navigator.geolocation) {
      alert("Tarayıcınız konum bulmayı desteklemiyor.");
      setLoadingLocation(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=tr`
          );
          const data = await response.json();
          console.log("data", data);
          
          const city = data.address.province || data.address.city || data.address.state || "";
          const district = data.address.county || data.address.town || data.address.village || "";
          console.log("city", city);
          console.log("district", district);
          

          let cityKey = "";
          if (city.includes("İstanbul")) cityKey = "istanbul";
          else if (city.includes("Ankara")) cityKey = "ankara";
          else if (city.includes("İzmir")) cityKey = "izmir";

          if (cityKey) setSelectedCity(cityKey);
          if (cityKey && district) {
            const districtValue = matchDistrict(cityKey, district);
            if (districtValue) setSelectedDistrict(districtValue);
          }
        } catch {
          alert("Konumdan il/ilçe alınamadı.");
        }
        setLoadingLocation(false);
      },
      (error) => {
        alert("Konum alınamadı: " + error.message);
        setLoadingLocation(false);
      }
    );
  };

  const matchDistrict = (cityKey: string, districtName: string) => {
    const found = cityDistricts[cityKey]?.find(d =>
      d.label.toLowerCase().replace(/ı/g, "i") === districtName.toLowerCase().replace(/ı/g, "i")
    );
    return found?.value || "";
  };

  useEffect(() => {
    setSelectedDistrict("");
  }, [selectedCity]);

/*   useEffect(() => {
    if (selectedCity && selectedDistrict && loadingLocation === false) {
      router.push(`/results?district=${selectedDistrict}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity, selectedDistrict, loadingLocation]); */

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {showDropdown && (
        <div
          style={dropdownStyle}
          className="bg-white rounded-md shadow-lg max-h-[250px] overflow-auto"
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearchValue(service.name);
                  setShowDropdown(false);
                }}
              >
                {service.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">Sonuç bulunamadı</div>
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className="rounded-xl flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl mx-auto px-20 pt-10 gap-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Eng Yaqin &quot;Sen Neredeysen Orada&quot;</h1>
          <p className="text-gray-800 text-lg mb-6">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet</p>
          <Link href="/teklif-al" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition mb-4">Hemen Teklif Al</Link>
        </div>
        {/* <div className="flex-1 flex justify-center items-center">
          <Image 
            src="https://www.azes.com.tr/site/o/52071/2020/03/17f606b5d923d7307aa52307ff2757dc.png?1731466" 
            alt="Illustration" 
            width={350} 
            height={250} 
            className="w-[350px] h-auto" 
          />
        </div> */}
      </section>

      <section
        ref={sectionRef}
        className="max-w-5xl mx-auto mt-0 mb-8 shadow rounded-xl relative overflow-hidden margin-0-auto"
      >
        {/* Opak arka plan overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-80 pointer-events-none rounded-xl" />
        <div className="relative z-10">
          {/* Geri butonu - yeni eklenen kısım */}
            {/* <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button> */}

          {/* İl/ilçe seçim menüsünün SAĞ ÜSTÜNE konum butonu */}
            <button
              onClick={handleFindLocation}
              className="absolute top-2 right-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2"
              disabled={loadingLocation}
              title="Konumumu Bul"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v1.07A8.001 8.001 0 0 1 20.93 11H22a1 1 0 1 1 0 2h-1.07A8.001 8.001 0 0 1 13 20.93V22a1 1 0 1 1-2 0v-1.07A8.001 8.001 0 0 1 3.07 13H2a1 1 0 1 1 0-2h1.07A8.001 8.001 0 0 1 11 3.07V2a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 0 12A6 6 0 0 0 12 6Z"/>
              </svg>
              {loadingLocation ? "Bulunuyor..." : "Konumumu Bul"}
            </button>

          {/* Sekmeler */}
          {/* <div className="flex flex-wrap gap-2 border-b border-gray-200 px-4 pt-4">
            <button className="px-4 py-2 font-semibold border-b-2 border-red-600 text-red-600 bg-white">Yurt İçi</button>
            <button className="px-4 py-2 font-semibold text-gray-600 hover:text-red-600">Yurt Dışı</button>
          </div> */}
          {/* Bilet türü ve form */}
          <div className="px-4 py-4 flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 items-center mb-2">
              <div className="flex gap-4">
                {/* <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="biletTipi" defaultChecked className="accent-red-600" />
                  <span className="font-medium">Tekli</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="biletTipi" className="accent-red-600" />
                  <span className="font-medium">Çoklu</span>
                </label> */}
              </div>
            </div>
            {/* Form alanları */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex w-full gap-4">
                  <>
                    <div className="flex flex-col flex-3 min-w-[150px] relative">
                      <span className="text-xs text-gray-500 mb-1">Hizmet seçiniz</span>
                      <div className="relative">
                        <input
                          ref={inputRef}
                          type="text"
                          value={searchValue}
                          onChange={(e) => {
                            setSearchValue(e.target.value);
                            handleShowDropdown();
                          }}
                          onFocus={handleShowDropdown}
                          onClick={()=> searchValue != "" && setSearchValue("")}
                          placeholder="Hizmet ara..."
                          className="bg-gray-100 rounded px-4 h-12 font-semibold text-gray-800 focus:outline-none w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-[150px]">
                      <span className="text-xs text-gray-500 mb-1">İl seçiniz</span>
                      <select
                        className="bg-gray-100 rounded px-4 h-12 font-semibold text-gray-800 focus:outline-none w-full"
                        value={selectedCity}
                        onChange={(e) => {
                          setSelectedCity(e.target.value);
                          setSelectedDistrict(""); // İl değişince ilçe sıfırlansın
                        }}
                      >
                        <option value="">İl seçiniz</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">İzmir</option>
                      </select>
                    </div>
                    <div className="flex flex-col flex-1 min-w-[150px]">
                      <span className="text-xs text-gray-500 mb-1">İlçe seçiniz</span>
                      <select
                        className="bg-gray-100 rounded px-4 h-12 font-semibold text-gray-800 focus:outline-none w-full"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        disabled={!selectedCity}
                      >
                        <option value="">İlçe seçiniz</option>
                        {selectedCity &&
                          cityDistricts[selectedCity]?.map((district) => (
                            <option key={district.value} value={district.value}>
                              {district.label}
                            </option>
                          ))}
                      </select>
                    </div>
                    <button onClick={() => {
                      console.log("Hizmet Ara butonuna tıklandı. Seçilen ilçe:", selectedDistrict);
                      console.log("Seçilen hizmet:", searchValue);
                      router.push(`/results?district=${selectedDistrict}&service=${encodeURIComponent(searchValue)}`);
                    }} className="flex-1 min-w-[150px] mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold h-12 rounded flex items-center justify-center">
                      Hizmet Ara <span className="ml-2">→</span>
                    </button>
                  </>
              </div>
            </div>
          </div>
          {/* Alt ikonlu hizmetler */}
        </div>
      </section>
      

      {/* Haftanın Trend Hizmetleri */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Haftanın Trend Hizmetleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Kartlar */}
                        {/* Kartlar */}
                        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/Nd9yh5Ss/s-ile-c-ekici-yolyardimi-gen-tr.jpg" alt="Çekici" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Çekici</span>
              <span className="text-xs text-gray-600 mb-1">1.200 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.8 (10.000 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/hFsNDStH/eng-yaqin-shinomontaj-hotel.png" alt="Lastikçi" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Lastikçi</span>
              <span className="text-xs text-gray-600 mb-1">950 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.7 (8.500 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/nsmNLpnJ/vinc-kullanimi.webp" alt="Vinç" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Vinç</span>
              <span className="text-xs text-gray-600 mb-1">700 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.7 (5.000 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/8gcpwcsC/download.jpg" alt="Forklift" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Forklift</span>
              <span className="text-xs text-gray-600 mb-1">400 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.7 (2.800 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/0VhhNDjJ/ototamir.webp" alt="Oto Tamirci" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Oto Tamirci</span>
              <span className="text-xs text-gray-600 mb-1">1.100 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.9 (9.000 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/Fb5GRgc0/images.jpg" alt="Oto Ekspertiz" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Oto Ekspertiz</span>
              <span className="text-xs text-gray-600 mb-1">900 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.8 (7.200 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/ycwt16bm/8200-ardesen-oto-anahtar-tamiri.jpg" alt="Oto Anahtarcı" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Oto Anahtarcı</span>
              <span className="text-xs text-gray-600 mb-1">500 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.7 (3.800 onaylı yorum)</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex flex-col">
              <Image src="https://i.ibb.co/rfcv2fLC/images.jpg" alt="Evden Eve Nakliyat" width={128} height={128} className="rounded-md h-32 w-full object-contain mx-auto mb-3" />
              <span className="font-semibold text-green-700 mb-1">Evden Eve Nakliyat</span>
              <span className="text-xs text-gray-600 mb-1">2.693 profesyonel</span>
              <span className="text-xs text-gray-500">⭐ 4.9 (165.393 onaylı yorum)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Hızlı İşlemler</h2>
          <p className="text-gray-600">Müşterilerimizin memnuniyeti bizim için önemlidir.</p>
        </div>
        <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-4 px-4">
            {/* İşletme Kartı 1 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 1" width={64} height={64} className="rounded-full mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">ABC İnşaat</h3>
              <p className="text-gray-600 text-sm">Büyük ölçekli inşaat projelerinde güvenilir ortağınız.</p>
            </div>
            {/* İşletme Kartı 2 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 2" width={64} height={64} className="rounded-full mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">XYZ Lojistik</h3>
              <p className="text-gray-600 text-sm">Hızlı ve güvenli taşımacılık çözümleri.</p>
            </div>
            {/* İşletme Kartı 3 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 3" width={64} height={64} className="rounded-full mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Defne Restoran</h3>
              <p className="text-gray-600 text-sm">Lezzetli yemekler ve sıcacık bir atmosfer.</p>
            </div>
            {/* İşletme Kartı 4 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 4" width={64} height={64} className="rounded-full mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Elif Temizlik</h3>
              <p className="text-gray-600 text-sm">Profesyonel ve titiz temizlik hizmetleri.</p>
            </div>
            {/* İşletme Kartı 5 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 5" width={64} height={64} className="rounded-full mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Modern Yazılım</h3>
              <p className="text-gray-600 text-sm">Yenilikçi yazılım çözümleri geliştiriyoruz.</p>
            </div>
            {/* Daha fazla kart eklenebilir */}
          </div>
        </div>
      </section>

      {/* Başarılı İşletmeler Slider'ı */}
      <section className="py-16 bg-[#f7f9fb]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Başarılı İşletmeler</h2>
          <p className="text-gray-500">Müşterilerimizin memnuniyeti bizim için önemlidir.</p>
        </div>
        <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 pb-4 px-4">
                        {/* İşletme Kartı 1 */}
                        <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 1" width={64} height={64} className="rounded-full w-16 h-16 object-contain mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">ABC İnşaat</h3>
              <p className="text-gray-600 text-sm">Büyük ölçekli inşaat projelerinde güvenilir ortağınız.</p>
            </div>
            {/* İşletme Kartı 2 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 2" width={64} height={64} className="rounded-full w-16 h-16 object-contain mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">XYZ Lojistik</h3>
              <p className="text-gray-600 text-sm">Hızlı ve güvenli taşımacılık çözümleri.</p>
            </div>
            {/* İşletme Kartı 3 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 3" width={64} height={64} className="rounded-full w-16 h-16 object-contain mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Defne Restoran</h3>
              <p className="text-gray-600 text-sm">Lezzetli yemekler ve sıcacık bir atmosfer.</p>
            </div>
            {/* İşletme Kartı 4 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 4" width={64} height={64} className="rounded-full w-16 h-16 object-contain mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Elif Temizlik</h3>
              <p className="text-gray-600 text-sm">Profesyonel ve titiz temizlik hizmetleri.</p>
            </div>
            {/* İşletme Kartı 5 */}
            <div className="flex-none w-64 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/1356/1356596.png" alt="İşletme Logo 5" width={64} height={64} className="rounded-full w-16 h-16 object-contain mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-gray-800">Modern Yazılım</h3>
              <p className="text-gray-600 text-sm">Yenilikçi yazılım çözümleri geliştiriyoruz.</p>
            </div>
            {/* Daha fazla kart eklenebilir */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Eng Yaqin</h3>
            <p className="text-gray-400 text-sm">İhtiyacın olan hizmete kolayca ulaş, bekleyen işlerini hallet.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><Link href="/hizmetler" className="text-gray-400 hover:text-white transition-colors">Hizmetler</Link></li>
              <li><Link href="/teklif-al" className="text-gray-400 hover:text-white transition-colors">Teklif Al</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Bizi Takip Edin</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://wa.me/YOUR_PHONE_NUMBER?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.102-1.602-2.585-1.602-4.148C.142 6.837 5.093 1.905 11.206 1.905c3.551 0 6.643 1.704 8.618 4.298l.006.006c2.316 2.457 2.316 5.679.006 8.136l-.006.006c-1.975 2.594-5.067 4.298-8.618 4.298-1.563 0-3.046-.561-4.148-1.602l-6.163 1.687L.057 24zm6.052-7.854l-1.687.461 4.542 4.542c1.157.316 2.359.485 3.594.485 5.093 0 9.222-4.129 9.222-9.222S16.3 2.68 11.207 2.68c-5.093 0-9.222 4.129-9.222 9.222 0 1.235.169 2.437.485 3.594l4.542 4.542-.461-1.687zM8.47 13.579c.14-.14.281-.299.422-.44.561-.58.74-.91.954-1.281 0-.14.07-.35.14-.56.07-.21.105-.42.105-.63 0-.42-.07-.74-.21-1.01-.14-.28-.35-.49-.63-.63-.28-.14-.56-.21-.84-.21-.21 0-.39.04-.54.12-.14.07-.28.14-.42.21-.14.07-.25.105-.335.105-.084 0-.19-.015-.31-.045-.12-.03-.23-.075-.33-.135-.21-.1-.38-.2-.51-.3-.24-.16-.36-.21-.42-.21-.14 0-.25.035-.33.105-.08.07-.12.14-.12.21 0 .28.24.49.71.63.47.14.77.299.909.479.14.18.281.42.422.71.14.29.21.56.21.82 0 .21-.035.39-.105.54-.07.14-.14.24-.21.3-.07.07-.1.084-.105.084-.045.015-.12.045-.225.09-.105.045-.225.075-.36.09-.14.015-.28.02-.42.02-.21 0-.42-.035-.63-.105-.21-.07-.42-.14-.63-.21-.21-.07-.42-.105-.63-.105-.42 0-.74.14-.95.42-.21.28-.31.59-.31.95 0 .14.015.35.045.63.03.28.075.54.135.78.06.24.14.47.24.69.1.22.21.43.33.63.12.2.22.3.3.3.14.14.28.21.42.21.21 0 .45-.07.71-.21.26-.14.49-.31.69-.51.2-.2.38-.42.54-.64.16-.22.29-.44.4-.64.12-.2.23-.39.33-.56.1-.17.15-.28.15-.33z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.723 6.095c-.292-.129-.623-.217-.978-.258C14.28 7.55 12 7.55 12 7.55s-2.28 0-4.745.282c-.355.041-.686.129-.978.258-2.613 1.157-2.613 5.486-2.613 5.486s0 4.329 2.613 5.486c.292.129.623.217.978.258 2.465.282 4.745.282 4.745.282s2.28 0 4.745-.282c.355-.041.686-.129.978-.258 2.613-1.157 2.613-5.486 2.613-5.486s0-4.329-2.613-5.486zM10 15.5v-7l5 3.5-5 3.5z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.706 6.551c-.161.08-.33.14-.5.185-.18.045-.367.067-.55.067-.28 0-.55-.067-.8-.2-.25-.133-.46-.317-.63-.55-.17-.233-.25-.517-.25-.85 0-.317.083-.6.25-.85.167-.25.383-.433.65-.55.267-.117.567-.175.9-.175.333 0 .617.058.85.175.233.117.4.283.5.5.1.217.15.45.15.7-.001.25-.05.483-.15.7-.1.217-.267.383-.5.5zm-1.849 5.867c-.2-.04-.4-.06-.6-.06-.31 0-.59.06-.84.18-.25.12-.46.29-.63.51-.17.22-.25.48-.25.78 0 .28.08.53.24.75.16.22.37.38.63.48.26.1.55.15.86.15.31 0 .59-.05.84-.15.25-.1.46-.26.63-.48.17-.22.25-.47.25-.75 0-.3-.08-.56-.24-.78-.16-.22-.37-.39-.63-.51zm-2.091-6.418c-1.391 0-2.521 1.13-2.521 2.521s1.13 2.521 2.521 2.521 2.521-1.13 2.521-2.521-1.13-2.521-2.521-2.521z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm">
          &copy; {new Date().getFullYear()} Eng Yaqin. Tüm Hakları Saklıdır.
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905xxxxxxxxx?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.102-1.602-2.585-1.602-4.148C.142 6.837 5.093 1.905 11.206 1.905c3.551 0 6.643 1.704 8.618 4.298l.006.006c2.316 2.457 2.316 5.679.006 8.136l-.006.006c-1.975 2.594-5.067 4.298-8.618 4.298-1.563 0-3.046-.561-4.148-1.602l-6.163 1.687L.057 24zm6.052-7.854l-1.687.461 4.542 4.542c1.157.316 2.359.485 3.594.485 5.093 0 9.222-4.129 9.222-9.222S16.3 2.68 11.207 2.68c-5.093 0-9.222 4.129-9.222 9.222 0 1.235.169 2.437.485 3.594l4.542 4.542-.461-1.687zM8.47 13.579c.14-.14.281-.299.422-.44.561-.58.74-.91.954-1.281 0-.14.07-.35.14-.56.07-.21.105-.42.105-.63 0-.42-.07-.74-.21-1.01-.14-.28-.35-.49-.63-.63-.28-.14-.56-.21-.84-.21-.21 0-.39.04-.54.12-.14.07-.28.14-.42.21-.14.07-.25.105-.335.105-.084 0-.19-.015-.31-.045-.12-.03-.23-.075-.33-.135-.21-.1-.38-.2-.51-.3-.24-.16-.36-.21-.42-.21-.14 0-.25.035-.33.105-.08.07-.12.14-.12.21 0 .28.24.49.71.63.47.14.77.299.909.479.14.18.281.42.422.71.14.29.21.56.21.82 0 .21-.035.39-.105.54-.07.14-.14.24-.21.3-.07.07-.1.084-.105.084-.045.015-.12.045-.225.09-.105.045-.225.075-.36.09-.14.015-.28.02-.42.02-.21 0-.42-.035-.63-.105-.21-.07-.42-.14-.63-.21-.21-.07-.42-.105-.63-.105-.42 0-.74.14-.95.42-.21.28-.31.59-.31.95 0 .14.015.35.045.63.03.28.075.54.135.78.06.24.14.47.24.69.1.22.21.43.33.63.12.2.22.3.3.3.14.14.28.21.42.21.21 0 .45-.07.71-.21.26-.14.49-.31.69-.51.2-.2.38-.42.54-.64.16-.22.29-.44.4-.64.12-.2.23-.39.33-.56.1-.17.15-.28.15-.33z"/>
        </svg>
      </a>
    </div>
  );
}
