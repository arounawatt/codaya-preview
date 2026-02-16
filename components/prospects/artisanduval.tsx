import React from 'react';
import { TestimonialItem } from '@/types/testimonial';

interface ArtisanDuvalCouvreurProps {
  testimonials?: TestimonialItem[]
  companyName?: string
  totalReviews?: number
  score?: number
}

export default function ArtisanDuvalCouvreur({ testimonials = [], companyName, totalReviews, score }: ArtisanDuvalCouvreurProps) {
  const pageStyles: React.CSSProperties = {
    margin: 0,
    padding: 0,
    color: '#1a1a1a',
    lineHeight: 1.6,
    background: '#ffffff',
  };

  const heroStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  };

  const heroBackgroundStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  };

  const heroContentStyles: React.CSSProperties = {
    textAlign: 'center',
    color: 'white',
    maxWidth: '900px',
    position: 'relative',
    zIndex: 1,
  };

  const badgeStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '8px 20px',
    background: 'rgba(249, 115, 22, 0.2)',
    border: '1px solid rgba(249, 115, 22, 0.5)',
    borderRadius: '50px',
    color: '#fb923c',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '30px',
    backdropFilter: 'blur(10px)',
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: '4.5rem',
    fontWeight: 900,
    marginBottom: '25px',
    lineHeight: 1.1,
    letterSpacing: '-2px',
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: '1.4rem',
    marginBottom: '45px',
    color: '#cbd5e1',
    fontWeight: 400,
    lineHeight: 1.6,
  };

  const heroButtonsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '60px',
  };

  const primaryButtonStyles: React.CSSProperties = {
    padding: '18px 45px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 40px rgba(249, 115, 22, 0.4)',
    transition: 'all 0.3s ease',
  };

  const secondaryButtonStyles: React.CSSProperties = {
    padding: '18px 45px',
    background: 'transparent',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: '50px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  };

  const heroStatsStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
  };

  const statItemStyles: React.CSSProperties = {
    textAlign: 'center',
  };

  const statNumberStyles: React.CSSProperties = {
    fontSize: '3rem',
    color: '#f97316',
    marginBottom: '5px',
    display: 'block',
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const sectionStyles: React.CSSProperties = {
    padding: '100px 20px',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const sectionTitleStyles: React.CSSProperties = {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#0f172a',
    letterSpacing: '-1px',
  };

  const sectionSubtitleStyles: React.CSSProperties = {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#64748b',
    marginBottom: '70px',
    fontWeight: 400,
  };

  const servicesGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  };

  const serviceCardStyles: React.CSSProperties = {
    background: 'white',
    padding: '45px 35px',
    borderRadius: '24px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden',
  };

  const serviceIconBoxStyles: React.CSSProperties = {
    width: '70px',
    height: '70px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)',
  };

  const serviceIconStyles: React.CSSProperties = {
    fontSize: '2rem',
  };

  const serviceTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '15px',
    color: '#0f172a',
  };

  const serviceDescStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.7,
  };

  const whySectionStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  };

  const featuresGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '25px',
  };

  const featureCardStyles: React.CSSProperties = {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
  };

  const featureIconCircleStyles: React.CSSProperties = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
  };

  const featureTitleStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: '12px',
  };

  const featureDescStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.6,
  };

  const testimonialsGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  };

  const testimonialCardStyles: React.CSSProperties = {
    background: 'white',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    border: '1px solid #f1f5f9',
    transition: 'all 0.3s ease',
  };

  const quoteMarkStyles: React.CSSProperties = {
    fontSize: '4rem',
    color: '#f97316',
    opacity: 0.2,
    lineHeight: 1,
    marginBottom: '15px',
  };

  const testimonialTextStyles: React.CSSProperties = {
    fontSize: '1.05rem',
    color: '#334155',
    marginBottom: '25px',
    lineHeight: 1.7,
    fontStyle: 'italic',
  };

  const testimonialAuthorStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    paddingTop: '20px',
    borderTop: '1px solid #f1f5f9',
  };

  const avatarStyles: React.CSSProperties = {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: '1.3rem',
  };

  const authorNameStyles: React.CSSProperties = {
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: '3px',
    fontSize: '1.05rem',
  };

  const authorDateStyles: React.CSSProperties = {
    fontSize: '0.85rem',
    color: '#94a3b8',
  };

  const starsStyles: React.CSSProperties = {
    color: '#fbbf24',
    fontSize: '1.1rem',
    marginBottom: '15px',
  };

  const ctaSectionStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '100px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const ctaTitleStyles: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 900,
    color: 'white',
    marginBottom: '25px',
    letterSpacing: '-1px',
  };

  const ctaSubtitleStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    color: '#cbd5e1',
    marginBottom: '50px',
    maxWidth: '700px',
    margin: '0 auto 50px',
  };

  const ctaButtonStyles: React.CSSProperties = {
    padding: '20px 55px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 15px 50px rgba(249, 115, 22, 0.4)',
    transition: 'all 0.3s ease',
  };

  const footerStyles: React.CSSProperties = {
    background: '#0f172a',
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const footerTextStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#94a3b8',
    lineHeight: 1.8,
  };

  const services = [
    { icon: '🏠', title: 'Rénovation Complète', desc: 'Rénovation totale de votre toiture avec matériaux premium et garantie décennale' },
    { icon: '⚡', title: 'Intervention Express', desc: 'Service d\'urgence 24/7 pour toutes réparations critiques de votre toiture' },
    { icon: '💧', title: 'Étanchéité Pro', desc: 'Traitement anti-infiltration professionnel avec garantie longue durée' },
    { icon: '🔨', title: 'Construction Neuve', desc: 'Installation complète de toiture pour tous types de construction' },
    { icon: '🔍', title: 'Diagnostic Expert', desc: 'Évaluation technique gratuite avec rapport détaillé' },
    { icon: '📋', title: 'Devis Sur-Mesure', desc: 'Tarification transparente adaptée à votre budget' },
  ];

  const features = [
    { icon: '⚡', title: 'Rapidité', desc: 'Interventions rapides et respect des délais garantis' },
    { icon: '🎯', title: 'Expertise', desc: 'Plus de 15 ans d\'expérience en couverture' },
    { icon: '💰', title: 'Prix Justes', desc: 'Tarifs compétitifs sans compromis sur la qualité' },
    { icon: '⭐', title: 'Satisfaction', desc: `${score !== undefined ? score.toFixed(1).replace('.', ',') : '4,8'}/5 étoiles basé sur ${totalReviews ?? 63} avis clients` },
  ];

  return (<>
    <div style={pageStyles}>
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-content > * {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-content > *:nth-child(2) { animation-delay: 0.2s; }
        .hero-content > *:nth-child(3) { animation-delay: 0.3s; }
        .hero-content > *:nth-child(4) { animation-delay: 0.4s; }
        .hero-content > *:nth-child(5) { animation-delay: 0.5s; }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(249, 115, 22, 0.6);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: #f97316;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: #f97316;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(249, 115, 22, 0.6);
        }

        .service-icon-box {
          animation: float 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .section-title { font-size: 2rem !important; }
          .cta-title { font-size: 2.2rem !important; }
          .hero-stats { gap: 30px !important; }
        }
      `}</style>

      {/* Hero Section */}
      <section style={heroStyles}>
        <div style={heroBackgroundStyles}></div>
        <div className="hero-content" style={heroContentStyles}>
          <div style={badgeStyles}>✨ Expert en Couverture depuis 2010</div>
          <h1 className="hero-title" style={heroTitleStyles}>
            Votre Toiture Mérite<br />Ce Qu'il Y a de Mieux
          </h1>
          <p style={heroSubtitleStyles}>
            Intervention rapide, expertise reconnue et satisfaction garantie.<br />
            Faites confiance à nos 15 ans d'expérience.
          </p>
          <div style={heroButtonsStyles}>
            <button className="primary-btn" style={primaryButtonStyles}>
              📞 Devis Gratuit
            </button>
            <button className="secondary-btn" style={secondaryButtonStyles}>
              En savoir plus
            </button>
          </div>
          <div className="hero-stats" style={heroStatsStyles}>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>{score !== undefined ? score.toFixed(1) : '4.8'}★</span>
              <span style={statLabelStyles}>Note Moyenne</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>{totalReviews ?? 63}</span>
              <span style={statLabelStyles}>Avis Clients</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>24/7</span>
              <span style={statLabelStyles}>Disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Nos Services</h2>
          <p style={sectionSubtitleStyles}>
            Des solutions complètes pour tous vos besoins en couverture
          </p>
          <div style={servicesGridStyles}>
            {services.map((service, index) => (
              <div key={index} className="service-card" style={serviceCardStyles}>
                <div className="service-icon-box" style={serviceIconBoxStyles}>
                  <span style={serviceIconStyles}>{service.icon}</span>
                </div>
                <h3 style={serviceTitleStyles}>{service.title}</h3>
                <p style={serviceDescStyles}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ ...sectionStyles, ...whySectionStyles }}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Pourquoi Choisir Artisan Duval ?</h2>
          <p style={sectionSubtitleStyles}>
            L'excellence et la satisfaction client au cœur de notre métier
          </p>
          <div style={featuresGridStyles}>
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={featureCardStyles}>
                <div style={featureIconCircleStyles}>
                  <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                </div>
                <h3 style={featureTitleStyles}>{feature.title}</h3>
                <p style={featureDescStyles}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={sectionTitleStyles}>Ce Que Disent Nos Clients</h2>
          <p style={sectionSubtitleStyles}>
            Des retours authentiques qui parlent de notre engagement
          </p>
          <div style={testimonialsGridStyles}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={testimonialCardStyles}>
                <div style={starsStyles}>★★★★★</div>
                <div style={quoteMarkStyles}>"</div>
                <p style={testimonialTextStyles}>{testimonial.text}</p>
                <div style={testimonialAuthorStyles}>
                  <div style={avatarStyles}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div style={authorNameStyles}>{testimonial.author}</div>
                    <div style={authorDateStyles}>{testimonial.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={ctaSectionStyles}>
        <div style={heroBackgroundStyles}></div>
        <div style={containerStyles}>
          <h2 style={ctaTitleStyles}>Prêt à Protéger Votre Maison ?</h2>
          <p style={ctaSubtitleStyles}>
            Obtenez votre devis gratuit en moins de 24h et bénéficiez d'un diagnostic complet
          </p>
          <button className="cta-btn" style={ctaButtonStyles}>
            🚀 Demander Mon Devis Gratuit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyles}>
        <p style={footerTextStyles}>
          © 2025 Artisan Duval - Tous droits réservés<br />
          Expert en couverture, zinguerie et rénovation de toiture
        </p>
      </footer>
    </div>
    <script src="https://trustly.codaya.fr/api/widget/artisanduval.js" defer></script>
  </>
  );
}