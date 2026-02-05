import React from 'react';

export default function AGEElectricien() {
  const pageStyles: React.CSSProperties = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    color: '#1a1a1a',
    lineHeight: 1.6,
    background: '#ffffff',
  };

  const heroStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
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
    opacity: 0.15,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10L35 20L45 22L37 30L39 40L30 35L21 40L23 30L15 22L25 20L30 10Z' fill='%23fbbf24' fill-opacity='0.4'/%3E%3C/svg%3E")`,
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
    background: 'rgba(251, 191, 36, 0.2)',
    border: '1px solid rgba(251, 191, 36, 0.5)',
    borderRadius: '50px',
    color: '#fbbf24',
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
    background: 'linear-gradient(135deg, #ffffff 0%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: '1.4rem',
    marginBottom: '45px',
    color: '#e0e7ff',
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
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#1e1b4b',
    fontSize: '1.1rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 40px rgba(251, 191, 36, 0.4)',
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
    fontWeight: 800,
    color: '#fbbf24',
    marginBottom: '5px',
    display: 'block',
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#c7d2fe',
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
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1e1b4b',
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
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
  };

  const serviceIconStyles: React.CSSProperties = {
    fontSize: '2rem',
  };

  const serviceTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '15px',
    color: '#1e1b4b',
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
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 25px',
    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)',
  };

  const featureTitleStyles: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#1e1b4b',
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

  const starsStyles: React.CSSProperties = {
    color: '#fbbf24',
    fontSize: '1.2rem',
    marginBottom: '15px',
  };

  const quoteMarkStyles: React.CSSProperties = {
    fontSize: '4rem',
    color: '#fbbf24',
    opacity: 0.2,
    lineHeight: 1,
    marginBottom: '15px',
    fontFamily: 'Georgia, serif',
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
    background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 700,
    fontSize: '1.3rem',
  };

  const authorNameStyles: React.CSSProperties = {
    fontWeight: 700,
    color: '#1e1b4b',
    marginBottom: '3px',
    fontSize: '1.05rem',
  };

  const authorDateStyles: React.CSSProperties = {
    fontSize: '0.85rem',
    color: '#94a3b8',
  };

  const ctaSectionStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
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
    color: '#e0e7ff',
    marginBottom: '50px',
    maxWidth: '700px',
    margin: '0 auto 50px',
  };

  const ctaButtonStyles: React.CSSProperties = {
    padding: '20px 55px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#1e1b4b',
    fontSize: '1.2rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 15px 50px rgba(251, 191, 36, 0.4)',
    transition: 'all 0.3s ease',
  };

  const footerStyles: React.CSSProperties = {
    background: '#1e1b4b',
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const footerTextStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#c7d2fe',
    lineHeight: 1.8,
  };

  const services = [
    { icon: '⚡', title: 'Installation Électrique', desc: 'Installation complète et mise aux normes de vos systèmes électriques' },
    { icon: '🔧', title: 'Dépannage Urgent', desc: 'Intervention rapide 24/7 pour tous vos problèmes électriques' },
    { icon: '📊', title: 'Tableaux Électriques', desc: 'Remplacement et mise aux normes de vos tableaux électriques' },
    { icon: '💡', title: 'Éclairage & Domotique', desc: 'Installation d\'éclairages modernes et systèmes domotiques' },
    { icon: '🔌', title: 'Prises & Interrupteurs', desc: 'Installation et remplacement de prises et interrupteurs' },
    { icon: '🏠', title: 'Rénovation Totale', desc: 'Réfection complète de l\'électricité pour votre habitat' },
  ];

  const features = [
    { icon: '⚡', title: 'Réactivité', desc: 'Intervention rapide et disponibilité 7j/7' },
    { icon: '🎓', title: 'Expertise', desc: 'Professionnels qualifiés et certifiés' },
    { icon: '💰', title: 'Prix Justes', desc: 'Devis transparent sans surprise' },
    { icon: '⭐', title: 'Satisfaction', desc: '5,0/5 étoiles - 130 avis clients' },
  ];

  const testimonials = [
    {
      text: "Nous avons fait appel à AGE pour la rénovation complète de l'électricité d'une ancienne maison. Devis clair, prix tout à fait correct. De bons conseils !",
      author: 'Diane Bousquet',
      date: 'Janvier 2025',
    },
    {
      text: "Réactif, disponible et à l'écoute. Devis sans surprise, installation propre et technicien très agréable, réponds aux questions sans problème.",
      author: 'A C',
      date: 'Juillet 2024',
    },
    {
      text: "Devis détaillé et raisonnable. Travaux exécutés dans les temps et avec soin avec de la flexibilité pour les petits ajustements lors du chantier. À recommander !",
      author: 'Marc Alhadeff',
      date: 'Mars 2024',
    },
    {
      text: "Très bonne expérience avec ce prestataire. Travail sérieux réalisé dans les délais. Chantier propre à l'issue des travaux. Je recommande.",
      author: 'Yves Yvernes',
      date: 'Octobre 2025',
    },
    {
      text: "Personne très compétente. Sympa, ponctuel et très professionnel. Ses tarifs sont très corrects. Je recommande vivement.",
      author: 'Christine Thomas',
      date: 'Septembre 2025',
    },
    {
      text: "Très content du travail effectué. Un changement de tableau électrique et mise à la terre. Travail effectué à la date convenue et pour le prix convenu.",
      author: 'Philippe Delobel',
      date: 'Avril 2025',
    },
  ];

  return (
    <div style={pageStyles}>
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
          box-shadow: 0 15px 50px rgba(251, 191, 36, 0.6);
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border-color: #fbbf24 !important;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: #fbbf24;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(251, 191, 36, 0.6);
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
          <div style={badgeStyles}>⚡ Électricien Professionnel Certifié</div>
          <h1 className="hero-title" style={heroTitleStyles}>
            A.G.E<br />Votre Expert Électrique
          </h1>
          <p style={heroSubtitleStyles}>
            Installation, rénovation et dépannage électrique.<br />
            Intervention rapide, travail soigné, prix transparents.
          </p>
          <div style={heroButtonsStyles}>
            <button className="primary-btn" style={primaryButtonStyles}>
              📞 Devis Gratuit
            </button>
            <button className="secondary-btn" style={secondaryButtonStyles}>
              Urgence 24/7
            </button>
          </div>
          <div className="hero-stats" style={heroStatsStyles}>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>5.0★</span>
              <span style={statLabelStyles}>Note Parfaite</span>
            </div>
            <div style={statItemStyles}>
              <span style={statNumberStyles}>130</span>
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
          <h2 className="section-title" style={sectionTitleStyles}>
            Nos Services
          </h2>
          <p style={sectionSubtitleStyles}>
            Des solutions électriques complètes pour particuliers et professionnels
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
          <h2 style={sectionTitleStyles}>Pourquoi Choisir A.G.E ?</h2>
          <p style={sectionSubtitleStyles}>
            Professionnalisme, réactivité et satisfaction garantie
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
          <h2 style={sectionTitleStyles}>Témoignages Clients</h2>
          <p style={sectionSubtitleStyles}>
            130 clients satisfaits témoignent de notre excellence
          </p>
          <div style={testimonialsGridStyles}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={testimonialCardStyles}>
                <div style={starsStyles}>★★★★★</div>
                <div style={quoteMarkStyles}>"</div>
                <p style={testimonialTextStyles}>{testimonial.text}</p>
                <div style={testimonialAuthorStyles}>
                  <div style={avatarStyles}>
                    {testimonial.author.charAt(0)}
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
          <h2 className="cta-title" style={ctaTitleStyles}>
            Un Problème Électrique ?
          </h2>
          <p style={ctaSubtitleStyles}>
            Contactez-nous maintenant pour un devis gratuit ou une intervention d'urgence
          </p>
          <button className="cta-btn" style={ctaButtonStyles}>
            ⚡ Contactez-nous Maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyles}>
        <p style={footerTextStyles}>
          © 2025 A.G.E - Tous droits réservés<br />
          Électricien professionnel certifié • Installation • Dépannage • Rénovation
        </p>
      </footer>
    </div>
  );
}