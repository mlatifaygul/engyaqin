import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Iletisim() {
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-8 text-center">İletişim</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* E-posta */}
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 transition hover:scale-105">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <FiMail className="text-2xl text-blue-600" />
          </div>
          <span className="font-semibold">E-posta</span>
          <a href="mailto:info@ornek.com" className="text-blue-600 underline break-all">
            info@ornek.com
          </a>
        </div>
        {/* Telefon */}
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 transition hover:scale-105">
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <FiPhone className="text-2xl text-blue-600" />
          </div>
          <span className="font-semibold">Telefon</span>
          <a href="tel:+905551112233" className="text-blue-600 underline">
            +90 555 111 22 33
          </a>
        </div>
        {/* WhatsApp */}
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 transition hover:scale-105">
          <div className="bg-green-100 p-4 rounded-full mb-3">
            <FaWhatsapp className="text-2xl text-green-600" />
          </div>
          <span className="font-semibold">WhatsApp</span>
          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline"
          >
            +90 555 111 22 33
          </a>
        </div>
        {/* Adres */}
        <div className="flex flex-col items-center bg-white rounded-full shadow-lg p-6 transition hover:scale-105">
          <div className="bg-yellow-100 p-4 rounded-full mb-3">
            <FiMapPin className="text-2xl text-yellow-600" />
          </div>
          <span className="font-semibold">Adres</span>
          <span className="text-center">Örnek Mah. Deneme Cad. No:1, İstanbul</span>
        </div>
      </div>
      <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Konum"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12041.123456789!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba123456789%3A0xabcdef123456789!2sİstanbul!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
} 