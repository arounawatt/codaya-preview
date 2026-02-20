'use client';
import { useState } from 'react';
import { jsPDF } from 'jspdf';

interface ShareQrCodePageProps {
  slug: string;
  companyName: string;
  category: string;
  score: number;
  totalReviews: number;
}

export default function ShareQrCodePage({ slug, companyName, category, score, totalReviews }: ShareQrCodePageProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const wallOfLoveUrl = `https://${slug}.codaya.fr/wall-of-love`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(wallOfLoveUrl)}`;

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      // Fetch QR code image as base64
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });

      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      const cx = pw / 2;

      // ── Background ──
      doc.setFillColor(248, 249, 250);
      doc.rect(0, 0, pw, ph, 'F');

      // ── Top accent bar (gradient effect via stripes) ──
      const barH = 4;
      for (let i = 0; i < pw; i++) {
        const t = i / pw;
        const r = Math.round(102 + (118 - 102) * t);
        const g = Math.round(126 + (75 - 126) * t);
        const b = Math.round(234 + (162 - 234) * t);
        doc.setFillColor(r, g, b);
        doc.rect(i, 0, 1.5, barH, 'F');
      }

      // ── Company name ──
      doc.setFontSize(30);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(26, 32, 44);
      doc.text(companyName, cx, 28, { align: 'center' });

      // ── Category pill ──
      const catText = category;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      const catW = doc.getTextWidth(catText) + 16;
      const catH = 8;
      const catX = cx - catW / 2;
      const catY = 33;
      doc.setFillColor(237, 242, 247);
      doc.roundedRect(catX, catY, catW, catH, 4, 4, 'F');
      doc.setTextColor(113, 128, 150);
      doc.text(catText, cx, catY + 5.5, { align: 'center' });

      // ── Stars row ──
      const starY = 48;
      const starSize = 5;
      const starGap = 1.5;
      const totalStarW = 5 * starSize + 4 * starGap;
      let starX = cx - totalStarW / 2;
      const fullStars = Math.round(score);
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          doc.setFillColor(252, 211, 77);
        } else {
          doc.setFillColor(226, 232, 240);
        }
        // Draw a star approximated as a filled circle (jsPDF limitation)
        doc.circle(starX + starSize / 2, starY, starSize / 2, 'F');
        starX += starSize + starGap;
      }
      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(26, 32, 44);
      doc.text(`${score}/5`, cx - totalStarW / 2 - 10, starY + 1.5, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(113, 128, 150);
      doc.setFontSize(11);
      doc.text(`${totalReviews} avis verifies`, cx + totalStarW / 2 + 18, starY + 1.5, { align: 'center' });

      // ── Separator line ──
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(cx - 60, 57, cx + 60, 57);

      // ── Title ──
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(45, 55, 72);
      doc.text('Decouvrez nos avis clients !', cx, 70, { align: 'center' });

      // ── Subtitle ──
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(113, 128, 150);
      doc.text('Scannez le QR code ci-dessous avec votre smartphone', cx, 78, { align: 'center' });

      // ── QR Code white card ──
      const qrSize = 82;
      const cardPad = 10;
      const cardSize = qrSize + cardPad * 2;
      const cardX = cx - cardSize / 2;
      const cardY = 86;

      // Card shadow (offset grey rect)
      doc.setFillColor(220, 220, 225);
      doc.roundedRect(cardX + 1.5, cardY + 1.5, cardSize, cardSize, 6, 6, 'F');
      // Card background
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(cardX, cardY, cardSize, cardSize, 6, 6, 'F');
      // Card border
      doc.setDrawColor(237, 242, 247);
      doc.setLineWidth(0.4);
      doc.roundedRect(cardX, cardY, cardSize, cardSize, 6, 6, 'S');

      // QR Code image inside card
      doc.addImage(base64, 'PNG', cardX + cardPad, cardY + cardPad, qrSize, qrSize);

      // ── URL pill ──
      const urlY = cardY + cardSize + 10;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const urlW = doc.getTextWidth(wallOfLoveUrl) + 20;
      const urlH = 9;
      const urlX = cx - urlW / 2;
      doc.setFillColor(237, 242, 247);
      doc.roundedRect(urlX, urlY, urlW, urlH, 4.5, 4.5, 'F');
      doc.setTextColor(102, 126, 234);
      doc.text(wallOfLoveUrl, cx, urlY + 6, { align: 'center' });

      // ── Bottom accent bar ──
      const bottomBarY = ph - barH;
      for (let i = 0; i < pw; i++) {
        const t = i / pw;
        const r = Math.round(102 + (118 - 102) * t);
        const g = Math.round(126 + (75 - 126) * t);
        const b = Math.round(234 + (162 - 234) * t);
        doc.setFillColor(r, g, b);
        doc.rect(i, bottomBarY, 1.5, barH, 'F');
      }

      // ── Footer branding ──
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 180);
      doc.text('Powered by Codaya Agency  -  codaya.agency', cx, ph - 8, { align: 'center' });

      doc.save(`qr-code-${slug}.pdf`);
    } catch (error) {
      console.error('Erreur lors de la generation du PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px 40px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          padding: '10px 24px',
          borderRadius: '50px',
          marginBottom: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="1" fill="#667eea"/>
            <rect x="14" y="2" width="8" height="8" rx="1" fill="#667eea"/>
            <rect x="2" y="14" width="8" height="8" rx="1" fill="#667eea"/>
            <rect x="14" y="14" width="4" height="4" rx="1" fill="#667eea"/>
            <rect x="18" y="18" width="4" height="4" rx="1" fill="#667eea"/>
          </svg>
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#2d3748',
            letterSpacing: '0.3px'
          }}>
            Votre QR Code personnalise
          </span>
        </div>

        <h1 style={{
          fontSize: '42px',
          background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '8px',
          letterSpacing: '-1px',
          lineHeight: '1.2'
        }}>
          {companyName}
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#718096',
          margin: '0 0 8px',
        }}>
          {category}
        </p>

        <p style={{
          fontSize: '15px',
          color: '#718096',
          margin: '0 0 16px',
          maxWidth: '520px',
          lineHeight: '1.6',
        }}>
          Voici votre QR code unique. Telechargez le PDF, imprimez-le et affichez-le dans votre local, sur vos vehicules, vos cartes de visite ou partagez-le directement a vos prospects !
        </p>

        {/* Score badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: 'white',
          padding: '12px 28px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', gap: '3px' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24"
                fill={i < Math.round(score) ? '#FCD34D' : '#E2E8F0'}
                style={{ filter: i < Math.round(score) ? 'drop-shadow(0 2px 4px rgba(252, 211, 77, 0.3))' : 'none' }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize: '16px', fontWeight: '700', color: '#1a202c' }}>
            {score}/5
          </span>
          <span style={{ fontSize: '14px', color: '#718096' }}>
            ({totalReviews} avis)
          </span>
        </div>
      </div>

      {/* QR Code Card */}
      <div style={{
        background: 'white',
        borderRadius: '30px',
        padding: '48px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '480px',
        width: '100%',
        marginBottom: '32px',
      }}>
        <p style={{
          fontSize: '18px',
          color: '#2d3748',
          fontWeight: '600',
          marginBottom: '8px',
          marginTop: 0,
        }}>
          Votre page d&apos;avis clients en un scan
        </p>

        <p style={{
          fontSize: '14px',
          color: '#a0aec0',
          marginBottom: '32px',
          marginTop: 0,
          lineHeight: '1.6',
        }}>
          Vos prospects pourront consulter tous vos avis en scannant ce QR code avec leur smartphone.
        </p>

        {/* QR Code Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '28px',
        }}>
          <img
            src={qrCodeUrl}
            alt={`QR code vers les avis de ${companyName}`}
            width={280}
            height={280}
            style={{
              borderRadius: '16px',
              border: '4px solid #f7fafc',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            }}
          />
        </div>

        {/* URL display */}
        <div style={{
          background: '#f7fafc',
          padding: '12px 20px',
          borderRadius: '12px',
          marginBottom: '28px',
          border: '1px solid #edf2f7',
        }}>
          <p style={{
            fontSize: '13px',
            color: '#a0aec0',
            margin: '0 0 4px',
            fontWeight: '500',
          }}>
            Lien vers vos avis
          </p>
          <p style={{
            fontSize: '14px',
            color: '#667eea',
            fontWeight: '600',
            margin: 0,
            wordBreak: 'break-all',
          }}>
            {wallOfLoveUrl}
          </p>
        </div>

        {/* Download button */}
        <button
          onClick={handleDownloadPdf}
          disabled={isGenerating}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            background: isGenerating
              ? '#a0aec0'
              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '16px 36px',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: '700',
            border: 'none',
            cursor: isGenerating ? 'wait' : 'pointer',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            if (!isGenerating) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {isGenerating ? 'Generation en cours...' : 'Telecharger le PDF'}
        </button>
      </div>

      {/* Tips for artisan */}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '32px 36px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.05)',
        maxWidth: '480px',
        width: '100%',
        marginBottom: '32px',
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#2d3748',
          marginTop: 0,
          marginBottom: '16px',
        }}>
          Comment utiliser votre QR code ?
        </p>
        {[
          { icon: '🖨️', text: 'Imprimez le PDF et affichez-le dans votre local ou vitrine' },
          { icon: '🚗', text: 'Collez-le sur vos vehicules ou equipements professionnels' },
          { icon: '📇', text: 'Ajoutez-le sur vos cartes de visite et flyers' },
          { icon: '📱', text: 'Partagez-le par SMS ou email a vos prospects et clients' },
        ].map((tip, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 0',
            borderBottom: i < 3 ? '1px solid #f0f0f0' : 'none',
          }}>
            <span style={{ fontSize: '20px', flexShrink: 0 }}>{tip.icon}</span>
            <span style={{ fontSize: '14px', color: '#4a5568', lineHeight: '1.5' }}>{tip.text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
        opacity: 0.6,
      }}>
        <div style={{
          fontSize: '13px',
          color: '#a0aec0',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>Powered by</span>
          <span style={{
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            <a href='https://codaya.agency' style={{ textDecoration: 'none', color: 'inherit' }}>
              Codaya Agency
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
