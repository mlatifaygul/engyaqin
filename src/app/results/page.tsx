"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Results() {
  const searchParams = useSearchParams();
  const district = searchParams.get('district') || 'Genel';

  const companies = [
    {
      id: 1,
      name: "Aktifler Oto Lastik Yol Yardım",
      owner: "Muhammet Fatih Yalap",
      experience: "3. Yılı",
      jobs: "162 İş",
      distance: "7.6 km",
      location: "Küçükçekmece",
      reviewCount: 1,
      image: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg", // Placeholder image
      phoneNumber: "0850 346 29 54",
      telegramUsername: "ozkardeslerlastik"
    },
    {
      id: 2,
      name: "Özkardeşler Oto Lastik",
      owner: "Soner Bilgiç",
      experience: "6. Ayı",
      jobs: "86 İş",
      distance: "8.3 km",
      location: "Küçükçekmece",
      reviewCount: 1,
      image: "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg", // Placeholder image
      contactType: "phone",
      phoneNumber: "0850 346 29 54",
      telegramUsername: "ozkardeslerlastik"
    },
    // Daha fazla şirket eklenebilir
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] py-8 px-4">
      {/* Bilgilendirme Bannerı */}
      <div className="max-w-4xl mx-auto bg-yellow-100 border border-yellow-300 text-yellow-800 px-6 py-4 rounded-lg text-center mb-8">
        <p className="font-semibold">
          {district} yakınlarında <span className="font-bold">4 Lastikçi</span> firması bulunmaktadır.
        </p>
      </div>

      {/* Firma Kartları */}
      <div className="max-w-4xl mx-auto space-y-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-xl shadow p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Profil Resmi ve Yorum */}
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src={company.image}
                alt={company.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span className="mt-2 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                {company.reviewCount} Yorum
              </span>
              <span className="mt-2 text-sm text-green-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {company.location}
              </span>
            </div>

            {/* Firma Bilgileri */}
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
              <p className="text-gray-700 text-sm">{company.owner}</p>
              <div className="flex items-center text-gray-600 text-sm mt-2 space-x-4">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {company.experience}
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.972 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  {company.jobs}
                </span>
              </div>
              <div className="mt-3 flex items-center text-orange-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 11.586V6z" clipRule="evenodd" />
                </svg>
                Avcılar ilçesine {company.distance}
              </div>
            </div>

            {/* Butonlar */}
            <div className="flex flex-col sm:ml-auto w-full sm:w-auto mt-4 sm:mt-0 space-y-3">
              {company.contactType === "sms" ? (
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  SMS Gönder
                </button>
              ) : (
                <>
                  <a href={`tel:${company.phoneNumber}`} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.855l.342 1.714a1 1 0 01-.313.904l-1.293 1.293a1 1 0 00-.293.707v2.286c0 .341.161.666.444.869l3.57 2.585a1 1 0 001.12.008l2.585-3.571a1 1 0 00.868-.444l1.293-1.293a1 1 0 01.904-.313l1.714.342A1 1 0 0119 12v2.153a1 1 0 01-.855.986l-1.714.342a1 1 0 01-.904-.313l-1.293-1.293a1 1 0 00-.707-.293H12a1 1 0 00-.707.293L8.003 14.5a1 1 0 000 1.414l1.293 1.293a1 1 0 01.313.904l-.342 1.714A1 1 0 0112 21H3a1 1 0 01-1-1v-2.153a1 1 0 01.855-.986l1.714-.342a1 1 0 01.904.313l1.293 1.293a1 1 0 00.707.293H10a1 1 0 00.707-.293L13.5 16.5a1 1 0 000-1.414L12.207 13.5a1 1 0 01-.313-.904L12.378 10.5a1 1 0 01-.869-.444L8.003 7.5a1 1 0 00-1.12-.008L4.3 9.585a1 1 0 00-.868.444L2.139 11.23a1 1 0 01-.904.313L2 3z" />
                    </svg>
                    {company.phoneNumber}
                  </a>
                  {company.telegramUsername && (
                    <a
                      href={`https://t.me/${company.telegramUsername}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center w-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.036 16.569c-.396 0-.327-.15-.462-.528l-1.152-3.792 8.928-5.304"/>
                        <path d="M9.036 16.569c.306 0 .441-.141.612-.297l1.656-1.602-2.064-1.254"/>
                        <path d="M9.036 16.569c.225 0 .324-.102.45-.21l4.104-3.726"/>
                        <path d="M21.543 5.341c-.225-.183-.549-.225-.819-.09l-17.25 7.875c-.285.129-.465.42-.441.732.024.312.24.573.537.642l4.41 1.05 1.65 5.01c.09.273.342.456.627.456.06 0 .12-.009.18-.027.315-.09 5.355-3.54 7.5-5.01 1.14-.765 2.1-1.62 2.1-2.565 0-.99-.885-1.44-1.344-1.62z"/>
                      </svg>
                      Telegram ile Mesaj Gönder
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}