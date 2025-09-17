// ... src/app/giris/page.tsx ...
"use client";

import { useState } from "react";

export default function GirisYap() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [aktifSekme, setAktifSekme] = useState<"musteri" | "isOrtagi">("musteri");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rol = aktifSekme === "musteri" ? "Müşteri" : "İş Ortağı";
    alert(`${rol} olarak giriş yapıldı!`);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#f7f9fb] py-2 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mb-20">
        <div className="flex justify-end mb-2">
          <a
            href="/hizmet-ver"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded transition text-base"
          >
            Hizmet Ver
          </a>
        </div>

        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900">
            {aktifSekme === "musteri" ? "Müşteri Girişi" : "İş Ortağı Girişi"}
          </h1>
        </div>

        <div className="mb-3">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setAktifSekme("musteri")}
              className={`flex-1 py-2 text-center font-semibold transition ${
                aktifSekme === "musteri"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Müşteri
            </button>
            <button
              type="button"
              onClick={() => setAktifSekme("isOrtagi")}
              className={`flex-1 py-2 text-center font-semibold transition border-l border-gray-200 ${
                aktifSekme === "isOrtagi"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              İş Ortağı
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              {aktifSekme === "musteri" ? "Email" : "Email (iş hesabı)"}
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder={
                aktifSekme === "musteri"
                  ? "Email adresini gir"
                  : "İş email adresini gir"
              }
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">Şifre</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                placeholder={aktifSekme === "musteri" ? "Şifreni gir" : "İş hesabı şifreni gir"}
                value={sifre}
                onChange={e => setSifre(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M17.94 17.94A10.97 10.97 0 0 1 12 19c-7 0-11-7-11-7a21.8 21.8 0 0 1 5.06-6.06M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-5.12"/>
                    <path stroke="currentColor" strokeWidth="2" d="m1 1 22 22"/>
                  </svg>
                )}
              </button>
            </div>
            <div className="mt-1">
              <a href="#" className="text-xs text-gray-700 underline hover:text-orange-600 font-medium">Şifremi bilmiyorum &gt;&gt;</a>
            </div>
          </div>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">veya</span>
            <hr className="flex-grow border-gray-200" />
          </div>
          <button
            type="button"
            className="w-full border border-gray-300 rounded py-3 text-gray-700 font-semibold bg-white hover:bg-orange-50 transition"
          >
            Telefon numarası ile giriş yap
          </button>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded transition mt-2 text-lg"
          >
            {aktifSekme === "musteri" ? "Müşteri olarak giriş yap" : "İş ortağı olarak giriş yap"}
          </button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-2 text-gray-400 text-sm">veya</span>
            <hr className="flex-grow border-gray-200" />
          </div>
          <div className="flex flex-row gap-3">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 font-semibold bg-white hover:bg-gray-50 transition text-gray-700"
            >
              <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                <g>
                  <path fill="#4285F4" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.3-5.7 7-10.3 7-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.4l6.1-6.1C34.1 6.5 29.3 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19 0-1.3-.1-2.2-.3-3z"/>
                  <path fill="#34A853" d="M6.3 14.1l6.6 4.8C14.5 16.1 18.9 13 24 13c2.6 0 5 .9 6.9 2.4l6.1-6.1C34.1 6.5 29.3 4.5 24 4.5c-7.2 0-13.4 4.1-16.7 10.1z"/>
                  <path fill="#FBBC05" d="M24 45.5c5.3 0 10.1-1.8 13.8-4.9l-6.4-5.2c-2 1.4-4.5 2.2-7.4 2.2-4.6 0-8.7-2.7-10.3-7H6.3c3.3 6 9.5 10 17.7 10z"/>
                  <path fill="#EA4335" d="M43.6 20.5h-1.9V20H24v8h11.3c-1.1 3-3.3 5.4-6.1 6.8l6.4 5.2c-2.9 2.6-6.7 4.2-11.6 4.2-8.2 0-15-6.7-15-15s6.8-15 15-15c4.1 0 7.9 1.6 10.7 4.2l-6.1 6.1C29 13.9 26.6 13 24 13c-5.1 0-9.5 3.1-11.1 7.9l-6.6-4.8C10.6 9.6 16.8 4.5 24 4.5c5.3 0 10.1 1.8 13.8 4.9l-6.4 5.2c-2-1.4-4.5-2.2-7.4-2.2-4.6 0-8.7 2.7-10.3 7H6.3c3.3-6 9.5-10 17.7-10z"/>
                </g>
              </svg>
              <span className="hidden md:inline">Google</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 font-semibold bg-black hover:bg-gray-900 transition text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.06 0-.12 0-.18-.01.01-.13.02-.26.02-.39 0-1.14.93-2.07 2.07.06 0 .12 0 .18.01-.01.13-.02.26-.02.39z"/>
              </svg>
              <span className="hidden md:inline">Apple</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 font-semibold bg-[#ffcc00] hover:bg-[#ffdb4d] transition text-black"
            >
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#FC3F1D"/>
                <path d="M17.7 16.7L22.2 8H19.7L16.1 15.1H16L12.4 8H9.9L14.4 16.7V24H17.7V16.7Z" fill="white"/>
              </svg>
              <span className="hidden md:inline">Yandex</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}