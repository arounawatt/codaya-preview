import React from 'react';

export default function Dasto() {
  const pageStyles: React.CSSProperties = {
    margin: 0,
    padding: 0,
    color: '#1a1a1a',
    lineHeight: 1.6,
    background: '#ffffff',
  };

  const heroStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0369a1 100%)',
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 40 L30 40 L40 20 L50 40 L70 40' stroke='%23f97316' stroke-width='2' fill='none'/%3E%3Ccircle cx='70' cy='60' r='8' fill='%23f97316' fill-opacity='0.3'/%3E%3Ccircle cx='15' cy='60' r='6' fill='%23f97316' fill-opacity='0.2'/%3E%3C/svg%3E")`,
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
    background: 'linear-gradient(135deg, #ffffff 0%, #fb923c 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: '1.4rem',
    marginBottom: '45px',
    color: '#bae6fd',
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
    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 40px rgba(37, 211, 102, 0.4)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
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
    fontSize: '2.8rem',
    fontWeight: 800,
    color: '#fb923c',
    marginBottom: '5px',
    display: 'block',
  };

  const statLabelStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#bae6fd',
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

  const audienceGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  };

  const audienceCardStyles: React.CSSProperties = {
    background: 'white',
    padding: '45px 35px',
    borderRadius: '24px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden',
  };

  const audienceIconBoxStyles: React.CSSProperties = {
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

  const audienceIconStyles: React.CSSProperties = {
    fontSize: '2rem',
  };

  const audienceTitleStyles: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '15px',
    color: '#0f172a',
  };

  const audienceDescStyles: React.CSSProperties = {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.7,
  };

  const audienceListStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '15px 0 0',
  };

  const audienceListItemStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.7,
    paddingLeft: '20px',
    position: 'relative',
    marginBottom: '6px',
  };

  const howSectionStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
  };

  const stepsGridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
  };

  const stepCardStyles: React.CSSProperties = {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid transparent',
    transition: 'all 0.3s ease',
  };

  const stepNumberStyles: React.CSSProperties = {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 800,
    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
  };

  const stepTitleStyles: React.CSSProperties = {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: '10px',
  };

  const stepDescStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: 1.6,
  };

  const featuresSectionStyles: React.CSSProperties = {
    padding: '100px 20px',
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

  const ctaSectionStyles: React.CSSProperties = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
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
    color: '#bae6fd',
    marginBottom: '50px',
    maxWidth: '700px',
    margin: '0 auto 50px',
  };

  const ctaButtonStyles: React.CSSProperties = {
    padding: '20px 55px',
    background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: 700,
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 15px 50px rgba(37, 211, 102, 0.4)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const footerStyles: React.CSSProperties = {
    background: '#0f172a',
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const footerTextStyles: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#93c5fd',
    lineHeight: 1.8,
  };

  const whatsappUrl = `https://wa.me/33664029563?text=Bonjour%2C%20je%20souhaite%20faire%20une%20demande%20de%20livraison%20avec%20Dasto.`;

  const audience = [
    {
      icon: '👤',
      title: 'Les particuliers',
      desc: 'Vous avez besoin de récupérer ou d\'envoyer un objet sans vous déplacer ?',
      items: [
        '📦 Envoyer un colis ou un sac à un proche',
        '🛋️ Faire livrer un meuble ou un électroménager',
        '🔄 Récupérer un achat pour un acheteur',
        '👜 Faire transporter un bagage ou un article',
      ],
    },
    {
      icon: '🏪',
      title: 'Les petits commerçants',
      desc: 'Fleuristes, pâtisseries, boutiques de quartier, vendeurs indépendants — proposez la livraison à vos clients sans passer par Uber Eats ou Deliveroo.',
      items: [
        '🌸 Fleuristes & créateurs',
        '🎂 Pâtisseries & artisans du goût',
        '🛍️ Boutiques de quartier',
        '🤝 Vendeurs indépendants',
      ],
    },
    {
      icon: '📲',
      title: 'Les vendeurs marketplace',
      desc: 'Actifs sur Leboncoin, Facebook Marketplace, Vinted ? Dasto gère la récupération et la livraison de vos articles sans que vous ayez à gérer la logistique.',
      items: [
        '🔵 Leboncoin & Facebook Marketplace',
        '👗 Vinted & autres plateformes',
        '📦 Récupération chez le vendeur',
        '🚚 Livraison chez l\'acheteur',
      ],
    },
  ];

  const steps = [
    { number: '1', icon: '📝', title: 'Passez votre demande', desc: 'Renseignez les adresses de départ et d\'arrivée en quelques clics.' },
    { number: '2', icon: '📦', title: 'Décrivez l\'objet', desc: 'Photo, poids, fragilité — on s\'adapte à chaque type d\'envoi.' },
    { number: '3', icon: '💶', title: 'Obtenez un prix', desc: 'Estimation instantanée, paiement simple et sécurisé.' },
    { number: '4', icon: '🚚', title: 'On s\'occupe du reste', desc: 'Un livreur Dasto récupère et livre à l\'adresse indiquée.' },
  ];

  const features = [
    { icon: '⚡', title: 'Livraison rapide', desc: 'Intervention dans les meilleurs délais pour tous vos besoins du quotidien, sans attendre.' },
    { icon: '🤝', title: 'Flexible & sans contrainte', desc: 'Pas d\'horaires rigides — Dasto s\'adapte à votre emploi du temps et à vos besoins.' },
    { icon: '🗺️', title: 'Vraiment porte à porte', desc: 'Récupération à domicile et livraison directement chez le destinataire, sans effort.' },
    { icon: '🛡️', title: 'Objets fragiles bienvenus', desc: 'Électroménager, meubles, objets délicats — vos envois sont manipulés avec soin.' },
    { icon: '📱', title: 'Suivi en temps réel', desc: 'Suivez chaque étape de votre livraison et recevez des notifications à chaque étape.' },
    { icon: '💬', title: 'Contact direct WhatsApp', desc: 'Besoin d\'une course rapidement ? Contactez-nous directement sur WhatsApp.' },
  ];

  return (
    <>
      <div style={pageStyles}>
        {/* CSS Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
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

          .wa-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 50px rgba(37, 211, 102, 0.65) !important;
          }

          .secondary-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.6);
          }

          .audience-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .audience-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            border-color: #f97316 !important;
          }

          .audience-card:hover::before { transform: scaleX(1); }

          .step-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
            border-color: #f97316 !important;
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
            border-color: #f97316 !important;
          }

          .audience-icon-box {
            animation: float 3s ease-in-out infinite;
          }

          .list-bullet::before {
            content: '';
            position: absolute;
            left: 0; top: 11px;
            width: 8px; height: 8px;
            background: #f97316;
            border-radius: 50%;
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
            <div style={badgeStyles}>🚚 Service de livraison rapide & flexible</div>
            <h1 className="hero-title" style={heroTitleStyles}>
              Dasto<br />Livraison rapide, de porte à porte
            </h1>
            <p style={heroSubtitleStyles}>
              Particuliers, commerçants, vendeurs marketplace :<br />
              une livraison simple, fiable et adaptée à tous les besoins du quotidien.
            </p>
            <div style={heroButtonsStyles}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-btn" style={primaryButtonStyles}>
                💬 Demander une livraison sur WhatsApp
              </a>
            </div>
            <div className="hero-stats" style={heroStatsStyles}>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>⚡</span>
                <span style={statLabelStyles}>Livraison rapide</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>🗺️</span>
                <span style={statLabelStyles}>Porte à porte</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>💬</span>
                <span style={statLabelStyles}>Contact direct</span>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse Dasto */}
        <section style={sectionStyles}>
          <div style={containerStyles}>
            <h2 className="section-title" style={sectionTitleStyles}>À qui s&apos;adresse Dasto ?</h2>
            <p style={sectionSubtitleStyles}>
              Une solution pensée pour ceux que les services classiques ne couvrent pas toujours
            </p>
            <div style={audienceGridStyles}>
              {audience.map((item, index) => (
                <div key={index} className="audience-card" style={audienceCardStyles}>
                  <div className="audience-icon-box" style={audienceIconBoxStyles}>
                    <span style={audienceIconStyles}>{item.icon}</span>
                  </div>
                  <h3 style={audienceTitleStyles}>{item.title}</h3>
                  <p style={audienceDescStyles}>{item.desc}</p>
                  <ul style={audienceListStyles}>
                    {item.items.map((li, i) => (
                      <li key={i} style={audienceListItemStyles}>{li}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section style={{ ...sectionStyles, ...howSectionStyles }}>
          <div style={containerStyles}>
            <h2 className="section-title" style={sectionTitleStyles}>Comment ça marche ?</h2>
            <p style={sectionSubtitleStyles}>
              Un processus simple et rapide, en 4 étapes
            </p>
            <div style={stepsGridStyles}>
              {steps.map((step, index) => (
                <div key={index} className="step-card" style={stepCardStyles}>
                  <div style={stepNumberStyles}>{step.number}</div>
                  <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{step.icon}</div>
                  <h3 style={stepTitleStyles}>{step.title}</h3>
                  <p style={stepDescStyles}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Dasto */}
        <section style={featuresSectionStyles}>
          <div style={containerStyles}>
            <h2 className="section-title" style={sectionTitleStyles}>Pourquoi choisir Dasto ?</h2>
            <p style={sectionSubtitleStyles}>
              Simple, pratique, rapide, humain et adaptable — pour tous vos besoins du quotidien
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

        {/* CTA Final */}
        <section style={ctaSectionStyles}>
          <div style={heroBackgroundStyles}></div>
          <div style={containerStyles}>
            <h2 className="cta-title" style={ctaTitleStyles}>
              Besoin d&apos;une livraison ?
            </h2>
            <p style={ctaSubtitleStyles}>
              Contactez-nous directement sur WhatsApp — on s&apos;occupe du reste.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-btn" style={ctaButtonStyles}>
              💬 Nous contacter sur WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={footerStyles}>
          <p style={footerTextStyles}>
            © 2025 Dasto — Tous droits réservés<br />
            Service de livraison rapide • Particuliers • Commerçants • Marketplace<br />
          </p>
          <a href="/mentions-legales" style={{ color: '#93c5fd', fontSize: '0.85rem', textDecoration: 'none', marginTop: '12px', display: 'inline-block' }}>Mentions légales</a>
        </footer>
      </div>
    </>
  );
}
