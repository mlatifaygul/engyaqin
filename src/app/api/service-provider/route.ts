import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      ad,
      soyad,
      firma,
      sektor,
      il,
      ilce,
      gsm,
      email
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
          <h1 style="color: #ff6b35; text-align: center; margin-bottom: 30px;">Yeni Hizmet Verici Başvurusu</h1>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Kişisel Bilgiler</h2>
            <p><strong>Ad Soyad:</strong> ${ad} ${soyad}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>GSM:</strong> ${gsm}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">Firma Bilgileri</h2>
            <p><strong>Firma Adı:</strong> ${firma}</p>
            <p><strong>Sektör:</strong> ${sektor}</p>
            <p><strong>İl:</strong> ${il}</p>
            <p><strong>İlçe:</strong> ${ilce}</p>
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
      subject: `Yeni Hizmet Verici Başvurusu - ${ad} ${soyad} (${firma})`,
      html: emailContent,
      replyTo: email
    };

    // E-postayı gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Başvurunuz başarıyla gönderildi!' 
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
