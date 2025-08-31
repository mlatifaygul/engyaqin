import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      description,
      urgency,
      budget,
      location,
      preferredContact,
      additionalNotes
    } = body;

    // E-posta transporter'ı oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail kullanıcı adı
        pass: process.env.EMAIL_PASS  // Gmail uygulama şifresi
      }
    });

    // E-posta içeriğini oluştur
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #ff6b35; text-align: center; margin-bottom: 30px;">Yeni Teklif Talebi</h1>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Kişisel Bilgiler</h2>
            <p><strong>Ad Soyad:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Hizmet Detayları</h2>
            <p><strong>Hizmet Türü:</strong> ${getServiceTypeText(serviceType)}</p>
            <p><strong>Hizmet Açıklaması:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${description}
            </div>
            <p><strong>Aciliyet Durumu:</strong> ${getUrgencyText(urgency)}</p>
            <p><strong>Bütçe Aralığı:</strong> ${budget || 'Belirtilmemiş'}</p>
            <p><strong>Hizmet Lokasyonu:</strong> ${location}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">İletişim Tercihleri</h2>
            <p><strong>Tercih Edilen İletişim:</strong> ${getContactPreferenceText(preferredContact)}</p>
            ${additionalNotes ? `
              <p><strong>Ek Notlar:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                ${additionalNotes}
              </div>
            ` : ''}
          </div>

          <div style="background-color: #e8f4fd; padding: 20px; border-radius: 5px; margin-top: 30px;">
            <p style="margin: 0; color: #0066cc; font-weight: bold;">
              📧 Bu e-posta engyaqin.uz web sitesinden gönderilmiştir.
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">
              Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
            </p>
          </div>
        </div>
      </div>
    `;

    // E-posta gönderme seçenekleri
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'engyaqin.uz@gmail.com',
      subject: `Yeni Teklif Talebi - ${firstName} ${lastName}`,
      html: emailContent,
      replyTo: email
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Teklif talebiniz başarıyla gönderildi!' 
    });

  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' 
      },
      { status: 500 }
    );
  }
}

// Yardımcı fonksiyonlar
function getServiceTypeText(serviceType: string): string {
  const serviceTypes: { [key: string]: string } = {
    'arac-cekme': 'Araç Çekme',
    'lastik-degisimi': 'Lastik Değişimi',
    'akaryakit-teslimat': 'Akaryakıt Teslimatı',
    'arac-tamiri': 'Araç Tamiri',
    'yol-yardim': 'Yol Yardımı',
    'diger': 'Diğer'
  };
  return serviceTypes[serviceType] || serviceType;
}

function getUrgencyText(urgency: string): string {
  const urgencyTypes: { [key: string]: string } = {
    'low': 'Düşük - Birkaç gün içinde',
    'normal': 'Normal - 1-2 gün içinde',
    'high': 'Yüksek - Aynı gün',
    'urgent': 'Acil - Hemen'
  };
  return urgencyTypes[urgency] || urgency;
}

function getContactPreferenceText(preference: string): string {
  const preferences: { [key: string]: string } = {
    'email': 'E-posta',
    'phone': 'Telefon',
    'both': 'Her ikisi de'
  };
  return preferences[preference] || preference;
}
