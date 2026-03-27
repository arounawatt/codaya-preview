import Image from 'next/image';

export default function Dasto() {
  const whatsappUrl = `https://wa.me/33664029563?text=Bonjour%2C%20je%20souhaite%20faire%20une%20demande%20de%20livraison%20avec%20Dasto.`;

  return (
    <>
      <div style={{ margin: 0, padding: 0, background: '#fff', fontFamily: "'Montserrat', sans-serif", color: '#0a0a0a' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
          * { box-sizing: border-box; font-family: 'Montserrat', sans-serif; }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse-ring {
            0% { box-shadow: 0 0 0 0 rgba(139,92,246,0.4); }
            70% { box-shadow: 0 0 0 16px rgba(139,92,246,0); }
            100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
          }

          .dasto-nav { position: sticky; top: 0; z-index: 100; }
          .dasto-wa-nav:hover { background: #22c55e !important; }
          .dasto-hero-badge { animation: fadeUp 0.6s ease forwards; }
          .dasto-hero-title { animation: fadeUp 0.6s 0.1s ease forwards; opacity: 0; }
          .dasto-hero-sub { animation: fadeUp 0.6s 0.2s ease forwards; opacity: 0; }
          .dasto-hero-cta { animation: fadeUp 0.6s 0.3s ease forwards; opacity: 0; }
          .dasto-card-visual { animation: float 5s ease-in-out infinite; }
          .dasto-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(37,211,102,0.5) !important; }
          .dasto-wa-cta:hover { transform: scale(1.03); box-shadow: 0 20px 60px rgba(37,211,102,0.5) !important; }
          .dasto-audience-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(139,92,246,0.12) !important; }
          .dasto-feature-row:hover { background: #f5f3ff !important; }
          .dasto-feature-row:hover .dasto-feature-icon { animation: pulse-ring 1s ease; }

          @media (max-width: 900px) {
            .dasto-nav { padding: 12px 16px !important; }
            .dasto-hero-inner { flex-direction: column !important; }
            .dasto-hero-text { max-width: 100% !important; text-align: center !important; }
            .dasto-hero-visual { display: none !important; }
            .dasto-hero-title { font-size: 2.4rem !important; letter-spacing: -1px !important; }
            .dasto-hero-section { padding: 60px 20px 80px !important; }
            .dasto-hero-cta { justify-content: center !important; }
            .dasto-hero-stats { justify-content: center !important; gap: 24px !important; }
            .dasto-section-title { font-size: 2rem !important; }
            .dasto-section { padding: 70px 20px !important; }
            .dasto-audience-grid { grid-template-columns: 1fr !important; }
            .dasto-steps { flex-direction: column !important; gap: 16px !important; align-items: center !important; }
            .dasto-step-line { display: none !important; }
            .dasto-step { width: 100% !important; max-width: 320px !important; padding: 0 !important; }
            .dasto-dark-section { padding: 70px 20px !important; }
            .dasto-why-inner { flex-direction: column !important; gap: 40px !important; }
            .dasto-why-left { flex: none !important; width: 100% !important; }
            .dasto-cta-section { padding: 80px 20px !important; }
            .dasto-cta-title { font-size: 2.2rem !important; }
          }
        `}</style>

        {/* ── Navbar ── */}
        <nav className="dasto-nav" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(139,92,246,0.15)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/dasto-logo.jpeg" alt="Dasto Delivery" width={90} height={90} style={{ width: 90, height: 90, objectFit: 'contain', borderRadius: '12px' }} />
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dasto-wa-nav" style={{ padding: '10px 24px', background: '#25d366', color: '#fff', fontWeight: 700, fontSize: '0.9rem', borderRadius: '50px', textDecoration: 'none', transition: 'background 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💬 Nous contacter
          </a>
        </nav>

        {/* ── Hero ── */}
        <section className="dasto-hero-section" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #130a24 60%, #1e0f3a 100%)', padding: '80px 40px 100px', overflow: 'hidden', position: 'relative' }}>
          {/* Background grid */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='40' fill='%238b5cf6'/%3E%3Crect x='0' y='0' width='40' height='1' fill='%238b5cf6'/%3E%3C/svg%3E\")" }}></div>

          <div className="dasto-hero-inner" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', position: 'relative', zIndex: 1 }}>
            {/* Text */}
            <div className="dasto-hero-text" style={{ flex: 1, maxWidth: '580px' }}>
              <div className="dasto-hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '50px', color: '#a78bfa', fontSize: '0.85rem', fontWeight: 600, marginBottom: '28px' }}>
                🚚 Livraison rapide & flexible
              </div>
              <h1 className="dasto-hero-title" style={{ fontSize: '3.8rem', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', color: '#fff', marginBottom: '24px' }}>
                Votre livraison,<br />
                <span style={{ background: 'linear-gradient(90deg, #a78bfa, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>simple & rapide.</span>
              </h1>
              <p className="dasto-hero-sub" style={{ fontSize: '1.15rem', color: '#9ca3af', lineHeight: 1.8, marginBottom: '40px', fontWeight: 400 }}>
                Particuliers, commerçants ou vendeurs marketplace — Dasto prend en charge vos livraisons du quotidien, de porte à porte.
              </p>
              <div className="dasto-hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dasto-wa-btn" style={{ padding: '16px 36px', background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff', fontWeight: 700, fontSize: '1rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 30px rgba(37,211,102,0.3)', transition: 'all 0.3s ease' }}>
                  💬 Demander une livraison
                </a>
              </div>
              {/* Stats row */}
              <div className="dasto-hero-stats" style={{ display: 'flex', gap: '40px', marginTop: '50px', flexWrap: 'wrap' }}>
                {[
                  { val: '⚡', label: 'Livraison express' },
                  { val: '🗺️', label: 'Porte à porte' },
                  { val: '💬', label: 'Contact direct' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{s.val}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card — exemple illustratif */}
            <div className="dasto-hero-visual" style={{ flex: '0 0 auto' }}>
              <div className="dasto-card-visual" style={{ width: '300px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '28px', padding: '28px', backdropFilter: 'blur(20px)' }}>
                {/* Badge exemple */}
                <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '50px', color: '#a78bfa', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '22px' }}>
                  Exemple de livraison
                </div>

                {/* Route visuelle */}
                <div style={{ position: 'relative', padding: '0 8px', marginBottom: '24px' }}>
                  {/* Point départ */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(139,92,246,0.15)', border: '2px solid #8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>📍</div>
                    <div>
                      <div style={{ color: '#6b7280', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Départ</div>
                      <div style={{ color: '#e5e7eb', fontWeight: 700, fontSize: '0.9rem' }}>Paris 11ème</div>
                    </div>
                  </div>
                  {/* Ligne pointillée */}
                  <div style={{ marginLeft: '17px', borderLeft: '2px dashed rgba(139,92,246,0.4)', height: '28px', marginBottom: '6px' }}></div>
                  {/* Icône camion sur la ligne */}
                  <div style={{ position: 'absolute', left: '70px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', background: '#8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>🚚</div>
                  {/* Point arrivée */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(16,185,129,0.12)', border: '2px solid #10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>🏁</div>
                    <div>
                      <div style={{ color: '#6b7280', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>Arrivée</div>
                      <div style={{ color: '#e5e7eb', fontWeight: 700, fontSize: '0.9rem' }}>Paris 18ème</div>
                    </div>
                  </div>
                </div>

                {/* Détails */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>📦 Objet</span>
                    <span style={{ color: '#e5e7eb', fontWeight: 600, fontSize: '0.82rem' }}>Colis fragile</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>💶 Estimation</span>
                    <span style={{ color: '#a78bfa', fontWeight: 800, fontSize: '0.95rem' }}>~18 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Marquee ── */}
        <div style={{ background: '#8b5cf6', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'inline-flex', animation: 'marquee 18s linear infinite', gap: '0' }}>
            {Array(2).fill(['🚚 Livraison rapide', '📦 Porte à porte', '💬 Contact WhatsApp', '⚡ Intervention rapide', '🛡️ Objets fragiles', '🏪 Petits commerçants', '📲 Marketplace', '🗺️ Sans contrainte']).flat().map((item, i) => (
              <span key={i} style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', padding: '0 40px' }}>{item}</span>
            ))}
          </div>
        </div>

        {/* ── À qui s'adresse Dasto ── */}
        <section className="dasto-section" style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '50px', padding: '5px 18px', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Pour qui ?</div>
              <h2 className="dasto-section-title" style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '14px' }}>À qui s&apos;adresse Dasto ?</h2>
              <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto' }}>Une solution pensée pour ceux que les services classiques ignorent.</p>
            </div>

            <div className="dasto-audience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {[
                {
                  num: '01', icon: '👤', title: 'Les particuliers',
                  desc: 'Envoyez ou récupérez un objet, un colis, un meuble ou un bagage — sans vous déplacer.',
                  tags: ['Colis & sacs', 'Meubles & électros', 'Objets Leboncoin', 'Envois familiaux'],
                },
                {
                  num: '02', icon: '🏪', title: 'Les commerçants',
                  desc: 'Fleuristes, pâtisseries, boutiques de quartier — offrez la livraison sans passer par Uber Eats.',
                  tags: ['Fleuristes', 'Pâtisseries', 'Boutiques locales', 'Vendeurs indépendants'],
                },
                {
                  num: '03', icon: '📲', title: 'Les vendeurs marketplace',
                  desc: 'Leboncoin, Vinted, Facebook Marketplace — Dasto gère la récupération et la livraison pour vous.',
                  tags: ['Leboncoin', 'Facebook Marketplace', 'Vinted', 'Vente directe'],
                },
              ].map((card, i) => (
                <div key={i} className="dasto-audience-card" style={{ background: '#fff', borderRadius: '20px', padding: '36px 30px', border: '1px solid #f3f0ff', boxShadow: '0 2px 20px rgba(0,0,0,0.05)', transition: 'all 0.35s ease', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '2.5rem', fontWeight: 900, color: 'rgba(139,92,246,0.06)', letterSpacing: '-2px' }}>{card.num}</div>
                  <div style={{ fontSize: '2.2rem', marginBottom: '18px' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: '#0a0a0a' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '22px' }}>{card.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {card.tags.map((tag, j) => (
                      <span key={j} style={{ padding: '4px 12px', background: 'rgba(139,92,246,0.08)', color: '#7c3aed', fontSize: '0.75rem', fontWeight: 600, borderRadius: '50px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comment ça marche — dark section ── */}
        <section className="dasto-dark-section" style={{ background: '#0a0a0a', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '50px', padding: '5px 18px', color: '#a78bfa', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Le processus</div>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-1px', color: '#fff', marginBottom: '14px' }}>Comment ça marche ?</h2>
              <p style={{ color: '#6b7280', fontSize: '1.05rem' }}>Simple, rapide, en 4 étapes.</p>
            </div>

            <div className="dasto-steps" style={{ display: 'flex', alignItems: 'flex-start', gap: '0', position: 'relative' }}>
              {/* Connecting line */}
              <div className="dasto-step-line" style={{ position: 'absolute', top: '28px', left: 'calc(12.5% + 14px)', right: 'calc(12.5% + 14px)', height: '2px', background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)', opacity: 0.3, zIndex: 0 }}></div>

              {[
                { n: '1', icon: '📝', title: 'Passez votre demande', desc: 'Adresses de départ et d\'arrivée via WhatsApp en quelques secondes.' },
                { n: '2', icon: '📦', title: 'Décrivez l\'objet', desc: 'Photo, poids, fragilité — on s\'adapte à chaque envoi.' },
                { n: '3', icon: '💶', title: 'Obtenez un prix', desc: 'Estimation rapide et paiement simple.' },
                { n: '4', icon: '🚚', title: 'Livraison effectuée', desc: 'Un livreur récupère et livre à l\'adresse indiquée.' },
              ].map((step, i) => (
                <div key={i} className="dasto-step" style={{ flex: 1, textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '56px', height: '56px', background: '#0a0a0a', border: '2px solid #8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#a78bfa', fontWeight: 800, fontSize: '1.1rem' }}>{step.n}</div>
                  <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{step.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pourquoi Dasto — feature list ── */}
        <section className="dasto-section" style={{ padding: '100px 40px', background: '#fafafa' }}>
          <div className="dasto-why-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left: titre */}
            <div className="dasto-why-left" style={{ flex: '0 0 320px' }}>
              <div style={{ display: 'inline-block', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '50px', padding: '5px 18px', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>Pourquoi nous ?</div>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: '24px' }}>Ce qui rend Dasto différent.</h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '36px' }}>
                Dasto n&apos;est pas une plateforme classique. C&apos;est une société de transport rapide qui répond aux besoins que les grands acteurs ignorent.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dasto-wa-btn" style={{ padding: '14px 30px', background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff', fontWeight: 700, fontSize: '0.95rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 30px rgba(37,211,102,0.25)', transition: 'all 0.3s ease' }}>
                💬 Essayer maintenant
              </a>
            </div>

            {/* Right: feature rows */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '280px' }}>
              {[
                { icon: '⚡', title: 'Livraison rapide', desc: 'Interventions dans les meilleurs délais, sans attendre.' },
                { icon: '🤝', title: 'Flexible & sans contrainte', desc: 'Pas d\'horaires rigides — on s\'adapte à vous.' },
                { icon: '🗺️', title: 'Vraiment porte à porte', desc: 'Récupération et livraison à domicile, sans effort de votre part.' },
                { icon: '🛡️', title: 'Objets fragiles bienvenus', desc: 'Meubles, électros, objets délicats — manipulés avec soin.' },
                { icon: '📱', title: 'Suivi en temps réel', desc: 'Notification à chaque étape de votre livraison.' },
                { icon: '💬', title: 'Contact direct WhatsApp', desc: 'Joignables immédiatement, sans formulaire ni plateforme.' },
              ].map((f, i) => (
                <div key={i} className="dasto-feature-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '20px', borderRadius: '14px', transition: 'background 0.2s ease', cursor: 'default' }}>
                  <div className="dasto-feature-icon" style={{ width: '44px', height: '44px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0a0a0a', marginBottom: '4px' }}>{f.title}</div>
                    <div style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="dasto-cta-section" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #130a24 60%, #1e0f3a 100%)', padding: '120px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='40' fill='%238b5cf6'/%3E%3Crect x='0' y='0' width='40' height='1' fill='%238b5cf6'/%3E%3C/svg%3E\")" }}></div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
            <Image src="/dasto-logo.jpeg" alt="Dasto" width={80} height={80} style={{ width: 90, height: 90, objectFit: 'contain', borderRadius: '18px', margin: '0 auto 32px auto', boxShadow: '0 0 40px rgba(139,92,246,0.3)' }} />
            <h2 className="dasto-cta-title" style={{ fontSize: '3.2rem', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: '20px', lineHeight: 1.1 }}>
              Besoin d&apos;une<br />
              <span style={{ background: 'linear-gradient(90deg, #a78bfa, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>livraison maintenant ?</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginBottom: '44px', lineHeight: 1.7 }}>
              Contactez-nous directement sur WhatsApp — on s&apos;occupe du reste.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="dasto-wa-cta" style={{ padding: '20px 56px', background: 'linear-gradient(135deg, #25d366, #128c7e)', color: '#fff', fontWeight: 800, fontSize: '1.15rem', borderRadius: '50px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 12px 40px rgba(37,211,102,0.35)', transition: 'all 0.3s ease' }}>
              💬 Nous contacter sur WhatsApp
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: '#050505', padding: '40px 40px 36px', textAlign: 'center' }}>
          <p style={{ color: '#374151', fontSize: '0.82rem', marginBottom: '10px' }}>
            © 2025 Dasto Delivery — Tous droits réservés
          </p>
          <a href="/mentions-legales" style={{ color: '#374151', fontSize: '0.78rem', textDecoration: 'none' }}>Mentions légales</a>
        </footer>
      </div>
    </>
  );
}
