'use client'

import { useState, useEffect, useRef, FormEvent, ReactNode, CSSProperties } from 'react'
import { TestimonialItem } from '@/types/testimonial'

// ============================================================
// RADICAL 3D - Dératisation, Désinsectisation, Désinfection
// Composant autonome pour architecture Next.js multi-tenant
// ============================================================

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
}

interface Radical3DProps {
  testimonials?: TestimonialItem[]
  companyName?: string
  totalReviews?: number
  score?: number
}

export default function Radical3D({ testimonials = [], companyName, totalReviews, score }: Radical3DProps) {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [formData, setFormData] = useState<{ name: string; phone: string; message: string }>({
    name: '',
    phone: '',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Demande envoyée ! Nous vous recontactons rapidement.')
    setFormData({ name: '', phone: '', message: '' })
  }

  // ============================================================
  // CONFIGURATION DU CLIENT
  // ============================================================
  const config = {
    name: companyName ?? 'Radical 3D',
    tagline: 'Dératisation • Désinsectisation • Désinfection',
    phone: '01 64 58 48 80',
    phoneTel: '+33164584880',
    rating: score !== undefined ? score.toFixed(1).replace('.', ',') : '4,1',
    reviewCount: totalReviews ?? 7,
    zone: 'Île-de-France',
    googleReviewsUrl: 'https://www.google.com/search?q=Radical+3D',
  }

  const services = [
    { icon: '🐀', title: 'Dératisation', desc: "Élimination complète des rats et souris. Méthodes professionnelles, sécurisées et efficaces. Prévention et traitement curatif pour protéger votre habitat." },
    { icon: '🪳', title: 'Désinsectisation', desc: "Traitement contre cafards, blattes, punaises de lit, fourmis et tous insectes nuisibles. Solutions adaptées à chaque infestation." },
    { icon: '🦟', title: 'Anti-moustiques', desc: "Protection contre les moustiques et insectes volants. Traitements intérieurs et extérieurs pour votre confort." },
    { icon: '🧹', title: 'Désinfection', desc: "Désinfection professionnelle de vos locaux. Élimination des bactéries, virus et agents pathogènes. Environnement sain garanti." },
    { icon: '🏠', title: 'Particuliers', desc: "Intervention discrète chez les particuliers. Appartements, maisons, caves, greniers. Devis gratuit et sans engagement." },
    { icon: '🏢', title: 'Professionnels', desc: "Solutions pour entreprises, restaurants, hôtels, commerces. Contrats d'entretien et interventions ponctuelles." },
  ]

  const whyUs = [
    { icon: '✅', title: 'Certifiés & Agréés', desc: "Professionnels certifiés Certibiocide. Produits homologués et méthodes conformes à la réglementation." },
    { icon: '⚡', title: 'Intervention rapide', desc: "Réactivité maximale pour les urgences. Nous intervenons rapidement pour stopper l'infestation." },
    { icon: '🔒', title: 'Discrétion assurée', desc: "Véhicules et interventions discrets. Votre tranquillité et votre réputation sont préservées." },
    { icon: '💯', title: 'Efficacité garantie', desc: "Résultats garantis. Nous revenons gratuitement si le problème persiste après traitement." },
    { icon: '📋', title: 'Devis gratuit', desc: "Diagnostic et devis gratuits. Prix transparents, sans surprise ni frais cachés." },
    { icon: '🌿', title: 'Solutions écologiques', desc: "Méthodes respectueuses de l'environnement quand c'est possible. Sécurité pour vous et vos animaux." },
  ]

  const trustItems = [
    { icon: '🏆', title: 'Certifié Certibiocide', desc: "Agrément professionnel obligatoire" },
    { icon: '⚡', title: 'Intervention express', desc: "Réactivité sous 24-48h" },
    { icon: '⭐', title: `${config.reviewCount} avis clients`, desc: `Note moyenne de ${config.rating}/5` },
    { icon: '🔒', title: 'Garantie résultat', desc: "Repassage gratuit si nécessaire" },
  ]

  const pests = [
    { icon: '🐀', name: 'Rats' },
    { icon: '🐁', name: 'Souris' },
    { icon: '🪳', name: 'Cafards' },
    { icon: '🛏️', name: 'Punaises de lit' },
    { icon: '🐜', name: 'Fourmis' },
    { icon: '🦟', name: 'Moustiques' },
  ]

  // ============================================================
  // COMPOSANT ANIMATION AU SCROLL
  // ============================================================
  const AnimatedCard = ({ children, delay = 0 }: AnimatedCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isInView, setIsInView] = useState<boolean>(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsInView(true),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      if (ref.current) observer.observe(ref.current)
      return () => {
        if (ref.current) observer.unobserve(ref.current)
      }
    }, [])

    return (
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        }}
      >
        {children}
      </div>
    )
  }

  // ============================================================
  // STYLES
  // ============================================================
  const colors = {
    primary: '#1a1a2e',
    primaryLight: '#16213e',
    accent: '#e94560',
    accentHover: '#d63d56',
    gold: '#f39c12',
    goldLight: '#f4a62a',
    white: '#ffffff',
    offWhite: '#f8f9fa',
    gray100: '#f1f3f5',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray600: '#6c757d',
    gray800: '#343a40',
    success: '#27ae60',
  }

  const s: Record<string, CSSProperties> = {
    wrapper: {
      background: colors.offWhite,
      color: colors.gray800,
      lineHeight: 1.6,
      minHeight: '100vh',
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(26, 26, 46, 0.98)' : colors.primary,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      transition: 'all 0.3s ease',
    },
    logo: { display: 'flex', alignItems: 'center', gap: '0.75rem' },
    logoIcon: {
      width: 45,
      height: 45,
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.25rem',
    },
    logoTitle: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: colors.white,
      margin: 0,
    },
    logoSubtitle: {
      fontSize: '0.65rem',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      opacity: 0.8,
      color: colors.white,
    },
    nav: { display: 'flex', alignItems: 'center', gap: '2rem' },
    navLink: {
      color: colors.white,
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: 500,
      opacity: 0.9,
      cursor: 'pointer',
      background: 'none',
      border: 'none',
    },
    headerCta: {
      background: colors.accent,
      color: colors.white,
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 15px rgba(233, 69, 96, 0.3)',
    },
    hero: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 50%, #0f3460 100%)`,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '8rem 2rem 4rem',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 80%, rgba(233, 69, 96, 0.15) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(243, 156, 18, 0.1) 0%, transparent 50%)`,
      pointerEvents: 'none',
    },
    heroContainer: {
      maxWidth: 1400,
      margin: '0 auto',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      color: colors.white,
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      fontSize: '0.8rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '1.5rem',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      color: colors.white,
      lineHeight: 1.1,
      marginBottom: '1rem',
    },
    heroTitleAccent: { color: colors.accent },
    heroSubtitle: { fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' },
    ratingBox: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1rem',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 1.5rem',
      borderRadius: '15px',
      border: '1px solid rgba(255,255,255,0.15)',
      marginBottom: '2rem',
    },
    stars: { color: colors.gold, fontSize: '1.25rem', letterSpacing: '2px' },
    ratingNumber: { fontSize: '1.5rem', display: 'block', color: colors.white, fontWeight: 700 },
    ratingLabel: { fontSize: '0.85rem', opacity: 0.8, color: colors.white },
    heroCtas: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
    ctaPrimary: {
      background: colors.accent,
      color: colors.white,
      padding: '1.25rem 2.5rem',
      borderRadius: '60px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 8px 30px rgba(233, 69, 96, 0.4)',
    },
    ctaSecondary: {
      background: 'transparent',
      color: colors.white,
      padding: '1.25rem 2.5rem',
      borderRadius: '60px',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '1.1rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      border: '2px solid rgba(255,255,255,0.3)',
    },
    heroVisual: { position: 'relative' },
    heroCard: {
      background: colors.white,
      borderRadius: '30px',
      padding: '2.5rem',
      boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
      position: 'relative',
      transform: 'rotate(-2deg)',
    },
    heroCardBorder: {
      position: 'absolute',
      top: -3,
      left: -3,
      right: -3,
      bottom: -3,
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.gold})`,
      borderRadius: '32px',
      zIndex: -1,
    },
    floatingBadge: {
      position: 'absolute',
      top: -20,
      right: -20,
      background: colors.success,
      color: colors.white,
      padding: '1rem 1.5rem',
      borderRadius: '15px',
      fontWeight: 700,
      boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
    },
    pestsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' },
    pestItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem',
      background: colors.gray100,
      borderRadius: '15px',
      textAlign: 'center',
    },
    pestIcon: { fontSize: '2rem' },
    pestName: { fontWeight: 600, color: colors.primary, margin: 0, fontSize: '0.85rem' },
    trustSection: { background: colors.white, padding: '3rem 2rem', borderBottom: `1px solid ${colors.gray200}` },
    trustContainer: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
    },
    trustItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1.5rem',
      background: colors.gray100,
      borderRadius: '15px',
    },
    trustIcon: {
      width: 55,
      height: 55,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      flexShrink: 0,
    },
    trustTitle: { fontWeight: 700, color: colors.primary, fontSize: '1rem', margin: 0 },
    trustDesc: { fontSize: '0.8rem', color: colors.gray600, margin: 0 },
    sectionHeader: { textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' },
    sectionTag: {
      display: 'inline-block',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      color: colors.white,
      padding: '0.5rem 1.25rem',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '1rem',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      color: colors.primary,
      marginBottom: '1rem',
    },
    sectionTitleLight: { color: colors.white },
    sectionDesc: { color: colors.gray600, fontSize: '1.1rem', margin: 0 },
    sectionDescLight: { color: 'rgba(255,255,255,0.7)' },
    services: { padding: '6rem 2rem', background: colors.offWhite },
    servicesGrid: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
    },
    serviceCard: {
      background: colors.white,
      borderRadius: '25px',
      padding: '2.5rem',
      border: `1px solid ${colors.gray200}`,
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    serviceIcon: {
      width: 70,
      height: 70,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      marginBottom: '1.5rem',
    },
    serviceTitle: { fontSize: '1.25rem', color: colors.primary, marginBottom: '0.75rem', fontWeight: 700 },
    serviceDesc: { color: colors.gray600, fontSize: '0.95rem', lineHeight: 1.7, margin: 0 },
    whyUs: { padding: '6rem 2rem', background: colors.primary, position: 'relative', overflow: 'hidden' },
    whyUsOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 10% 90%, rgba(233, 69, 96, 0.2) 0%, transparent 40%),
                   radial-gradient(circle at 90% 10%, rgba(243, 156, 18, 0.15) 0%, transparent 40%)`,
      pointerEvents: 'none',
    },
    whyUsContainer: { maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 },
    whyGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' },
    whyCard: {
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px',
      padding: '2rem',
    },
    whyIcon: {
      width: 60,
      height: 60,
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.75rem',
      marginBottom: '1.25rem',
    },
    whyTitle: { color: colors.white, fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 600 },
    whyDesc: { color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 },
    testimonials: { padding: '6rem 2rem', background: colors.offWhite },
    testimonialsContainer: { maxWidth: 1200, margin: '0 auto' },
    testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' },
    testimonialCard: {
      background: colors.white,
      borderRadius: '25px',
      padding: '2.5rem',
      position: 'relative',
      border: `1px solid ${colors.gray200}`,
    },
    quoteIcon: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      fontSize: '4rem',
      color: colors.gray200,
      lineHeight: 1,
    },
    testimonialStars: { color: colors.gold, fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '1rem' },
    testimonialText: {
      fontSize: '1.05rem',
      color: colors.gray800,
      lineHeight: 1.8,
      marginBottom: '1.5rem',
      fontStyle: 'italic',
    },
    testimonialAuthor: { display: 'flex', alignItems: 'center', gap: '1rem' },
    authorAvatar: {
      width: 50,
      height: 50,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.white,
      fontWeight: 700,
      fontSize: '1.1rem',
    },
    authorName: { fontWeight: 600, color: colors.primary, margin: 0 },
    authorDate: { fontSize: '0.85rem', color: colors.gray600 },
    contact: { padding: '6rem 2rem', background: colors.white },
    contactContainer: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start',
    },
    contactTitle: {
      fontSize: '2.5rem',
      color: colors.primary,
      marginBottom: '1rem',
    },
    contactDesc: { color: colors.gray600, fontSize: '1.1rem', marginBottom: '2rem' },
    contactMethods: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    contactMethod: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      padding: '1.5rem',
      background: colors.gray100,
      borderRadius: '15px',
    },
    contactMethodIcon: {
      width: 55,
      height: 55,
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
    contactMethodTitle: { fontWeight: 600, color: colors.primary, margin: 0 },
    contactMethodValue: { fontSize: '1.25rem', color: colors.gray800, fontWeight: 700, margin: '0.25rem 0 0' },
    contactMethodNote: { fontSize: '0.85rem', color: colors.gray600 },
    contactFormWrapper: { background: colors.gray100, borderRadius: '25px', padding: '2.5rem' },
    formTitle: { fontSize: '1.5rem', color: colors.primary, marginBottom: '1.5rem' },
    formGroup: { marginBottom: '1.25rem' },
    formLabel: { display: 'block', fontWeight: 500, color: colors.gray800, marginBottom: '0.5rem' },
    formInput: {
      width: '100%',
      padding: '1rem 1.25rem',
      border: `2px solid ${colors.gray300}`,
      borderRadius: '12px',
      fontSize: '1rem',
      background: colors.white,
      outline: 'none',
    },
    formTextarea: {
      width: '100%',
      padding: '1rem 1.25rem',
      border: `2px solid ${colors.gray300}`,
      borderRadius: '12px',
      fontSize: '1rem',
      background: colors.white,
      minHeight: 120,
      resize: 'vertical',
      outline: 'none',
    },
    formSubmit: {
      background: colors.accent,
      color: colors.white,
      padding: '1.25rem 2rem',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: 700,
      cursor: 'pointer',
      width: '100%',
    },
    footer: { background: colors.primary, color: colors.white, padding: '4rem 2rem 2rem' },
    footerContainer: { maxWidth: 1200, margin: '0 auto' },
    footerMain: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '4rem',
      paddingBottom: '3rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    footerBrandDesc: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '0.95rem',
      lineHeight: 1.7,
      maxWidth: 350,
      marginTop: '1.5rem',
    },
    footerLinksTitle: { fontSize: '1rem', marginBottom: '1.25rem', color: colors.accent },
    footerLinksList: { listStyle: 'none', padding: 0, margin: 0 },
    footerLink: {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
      fontSize: '0.9rem',
      display: 'block',
      marginBottom: '0.75rem',
    },
    footerBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '2rem',
    },
    footerCopyright: { color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 },
    googleReviewsLink: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: colors.accent,
      textDecoration: 'none',
      fontWeight: 500,
    },
    floatingCta: { position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 },
    floatingCtaLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: colors.accent,
      color: colors.white,
      padding: '1rem 1.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      boxShadow: '0 8px 30px rgba(233, 69, 96, 0.5)',
    },
  }

  // ============================================================
  // STYLES RESPONSIVE
  // ============================================================
  const responsiveStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .radical3d-floating-cta { animation: pulse 2s infinite; }
    .radical3d-floating-badge { animation: float 3s ease-in-out infinite; }
    
    @media (max-width: 1024px) {
      .radical3d-hero-container { grid-template-columns: 1fr !important; text-align: center; }
      .radical3d-hero-visual { display: none !important; }
      .radical3d-trust-container { grid-template-columns: repeat(2, 1fr) !important; }
      .radical3d-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .radical3d-why-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .radical3d-testimonials-grid { grid-template-columns: 1fr !important; }
      .radical3d-contact-container { grid-template-columns: 1fr !important; }
      .radical3d-footer-main { grid-template-columns: 1fr !important; gap: 2rem !important; }
    }
    
    @media (max-width: 768px) {
      .radical3d-nav { display: none !important; }
      .radical3d-hero { padding: 7rem 1.5rem 3rem !important; }
      .radical3d-hero-ctas { flex-direction: column !important; }
      .radical3d-trust-container { grid-template-columns: 1fr !important; }
      .radical3d-services-grid { grid-template-columns: 1fr !important; }
      .radical3d-why-grid { grid-template-columns: 1fr !important; }
      .radical3d-footer-bottom { flex-direction: column !important; gap: 1rem !important; text-align: center !important; }
      .radical3d-floating-cta { left: 1rem !important; right: 1rem !important; bottom: 1rem !important; }
      .radical3d-floating-cta a { justify-content: center !important; }
      header { flex-direction: column; gap: 6px}
      .radical-3d-hero { padding-top:10rem !important; }
    }
  `

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div style={s.wrapper}>
      <style>{responsiveStyles}</style>

      {/* Header */}
      <header style={s.header}>
        <div style={s.logo}>
          <div style={s.logoIcon}>🛡️</div>
          <div>
            <h1 style={s.logoTitle}>{config.name}</h1>
            <span style={s.logoSubtitle}>{config.tagline}</span>
          </div>
        </div>
        <nav style={s.nav} className="radical3d-nav">
          <button onClick={() => scrollToSection('services')} style={s.navLink}>Services</button>
          <button onClick={() => scrollToSection('pourquoi')} style={s.navLink}>Pourquoi nous</button>
          <button onClick={() => scrollToSection('avis')} style={s.navLink}>Avis clients</button>
          <button onClick={() => scrollToSection('contact')} style={s.navLink}>Contact</button>
        </nav>
        <a href={`tel:${config.phoneTel}`} style={s.headerCta}>📞 Appeler</a>
      </header>

      {/* Hero */}
      <section style={s.hero} className="radical3d-hero">
        <div style={s.heroOverlay} />
        <div style={s.heroContainer} className="radical3d-hero-container">
          <div>
            <div style={s.badge}>🛡️ Expert anti-nuisibles certifié</div>
            <h2 style={s.heroTitle}>
              Stop aux <span style={s.heroTitleAccent}>nuisibles</span> dans votre habitat
            </h2>
            <p style={s.heroSubtitle}>
              Dératisation, désinsectisation et désinfection professionnelles. Intervention rapide et résultats garantis en {config.zone}.
            </p>
            <div style={s.ratingBox}>
              <div style={s.stars}>★★★★☆</div>
              <div>
                <strong style={s.ratingNumber}>{config.rating}/5</strong>
                <span style={s.ratingLabel}>{config.reviewCount} avis Google</span>
              </div>
            </div>
            <div style={s.heroCtas} className="radical3d-hero-ctas">
              <a href={`tel:${config.phoneTel}`} style={s.ctaPrimary}>📞 Appeler maintenant</a>
              <button onClick={() => scrollToSection('contact')} style={s.ctaSecondary}>📋 Devis gratuit</button>
            </div>
          </div>

          <div style={s.heroVisual} className="radical3d-hero-visual">
            <div style={s.heroCard}>
              <div style={s.heroCardBorder} />
              <div style={s.floatingBadge} className="radical3d-floating-badge">Certifié ✓</div>
              <h3 style={{ margin: '0 0 1.5rem', color: colors.primary, fontSize: '1.25rem' }}>Nous traitons</h3>
              <div style={s.pestsGrid}>
                {pests.map((pest, i) => (
                  <div key={i} style={s.pestItem}>
                    <span style={s.pestIcon}>{pest.icon}</span>
                    <p style={s.pestName}>{pest.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={s.trustSection}>
        <div style={s.trustContainer} className="radical3d-trust-container">
          {trustItems.map((item, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <div style={s.trustItem}>
                <div style={s.trustIcon}>{item.icon}</div>
                <div>
                  <h4 style={s.trustTitle}>{item.title}</h4>
                  <p style={s.trustDesc}>{item.desc}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={s.services} id="services">
        <div style={s.sectionHeader}>
          <span style={s.sectionTag}>Nos services</span>
          <h2 style={s.sectionTitle}>Solutions contre tous les nuisibles</h2>
          <p style={s.sectionDesc}>Des traitements professionnels adaptés à chaque situation, pour particuliers et professionnels.</p>
        </div>
        <div style={s.servicesGrid} className="radical3d-services-grid">
          {services.map((service, i) => (
            <AnimatedCard key={i} delay={i * 0.1}>
              <div style={s.serviceCard}>
                <div style={s.serviceIcon}>{service.icon}</div>
                <h3 style={s.serviceTitle}>{service.title}</h3>
                <p style={s.serviceDesc}>{service.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={s.whyUs} id="pourquoi">
        <div style={s.whyUsOverlay} />
        <div style={s.whyUsContainer}>
          <div style={s.sectionHeader}>
            <span style={s.sectionTag}>Nos garanties</span>
            <h2 style={{ ...s.sectionTitle, ...s.sectionTitleLight }}>Pourquoi choisir {config.name} ?</h2>
            <p style={{ ...s.sectionDesc, ...s.sectionDescLight }}>Des professionnels certifiés pour une intervention efficace et durable.</p>
          </div>
          <div style={s.whyGrid} className="radical3d-why-grid">
            {whyUs.map((item, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div style={s.whyCard}>
                  <div style={s.whyIcon}>{item.icon}</div>
                  <h3 style={s.whyTitle}>{item.title}</h3>
                  <p style={s.whyDesc}>{item.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={s.testimonials} id="avis">
        <div style={s.testimonialsContainer}>
          <div style={s.sectionHeader}>
            <span style={s.sectionTag}>Témoignages</span>
            <h2 style={s.sectionTitle}>Ils nous ont fait confiance</h2>
            <p style={s.sectionDesc}>L&apos;efficacité de nos interventions reconnue par nos clients.</p>
          </div>
          <div style={s.testimonialsGrid} className="radical3d-testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedCard key={i} delay={i * 0.1}>
                <div style={s.testimonialCard}>
                  <span style={s.quoteIcon}>&quot;</span>
                  <div style={s.testimonialStars}>★★★★★</div>
                  <p style={s.testimonialText}>{t.text}</p>
                  <div style={s.testimonialAuthor}>
                    <div style={s.authorAvatar}>{t.avatar}</div>
                    <div>
                      <h4 style={s.authorName}>{t.author}</h4>
                      <span style={s.authorDate}>{t.date}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={s.contact} id="contact">
        <div style={s.contactContainer} className="radical3d-contact-container">
          <div>
            <h2 style={s.contactTitle}>Un problème de nuisibles ?</h2>
            <p style={s.contactDesc}>Contactez-nous pour un diagnostic gratuit. Nous intervenons rapidement pour éliminer les nuisibles de votre habitat ou local professionnel.</p>
            <div style={s.contactMethods}>
              <div style={s.contactMethod}>
                <div style={s.contactMethodIcon}>📞</div>
                <div>
                  <h4 style={s.contactMethodTitle}>Téléphone</h4>
                  <p style={s.contactMethodValue}>{config.phone}</p>
                  <span style={s.contactMethodNote}>Devis gratuit par téléphone</span>
                </div>
              </div>
              <div style={s.contactMethod}>
                <div style={s.contactMethodIcon}>📍</div>
                <div>
                  <h4 style={s.contactMethodTitle}>Zone d&apos;intervention</h4>
                  <p style={s.contactMethodValue}>{config.zone}</p>
                  <span style={s.contactMethodNote}>Paris et toute la région</span>
                </div>
              </div>
            </div>
          </div>

          <div style={s.contactFormWrapper}>
            <h3 style={s.formTitle}>Demander un devis gratuit</h3>
            <form onSubmit={handleSubmit}>
              <div style={s.formGroup}>
                <label style={s.formLabel}>Votre nom</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={s.formInput}
                />
              </div>
              <div style={s.formGroup}>
                <label style={s.formLabel}>Téléphone</label>
                <input
                  type="tel"
                  placeholder="06 00 00 00 00"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={s.formInput}
                />
              </div>
              <div style={s.formGroup}>
                <label style={s.formLabel}>Décrivez votre problème</label>
                <textarea
                  placeholder="Type de nuisibles, lieu d'infestation, urgence..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={s.formTextarea}
                />
              </div>
              <button type="submit" style={s.formSubmit}>Envoyer ma demande →</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={s.footer}>
        <div style={s.footerContainer}>
          <div style={s.footerMain} className="radical3d-footer-main">
            <div>
              <div style={s.logo}>
                <div style={s.logoIcon}>🛡️</div>
                <div>
                  <h1 style={s.logoTitle}>{config.name}</h1>
                  <span style={s.logoSubtitle}>{config.tagline}</span>
                </div>
              </div>
              <p style={s.footerBrandDesc}>Expert en dératisation, désinsectisation et désinfection. Interventions professionnelles et certifiées pour éliminer tous types de nuisibles en {config.zone}.</p>
            </div>
            <div>
              <h4 style={s.footerLinksTitle}>Services</h4>
              <ul style={s.footerLinksList}>
                {services.slice(0, 5).map((srv, i) => (
                  <li key={i}><a href="#services" style={s.footerLink}>{srv.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={s.footerLinksTitle}>Contact</h4>
              <ul style={s.footerLinksList}>
                <li><a href={`tel:${config.phoneTel}`} style={s.footerLink}>{config.phone}</a></li>
                <li><a href="#contact" style={s.footerLink}>Demander un devis</a></li>
                <li><a href="#" style={s.footerLink}>Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div style={s.footerBottom} className="radical3d-footer-bottom">
            <p style={s.footerCopyright}>© 2026 {config.name} - Tous droits réservés</p>
            <a href={config.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={s.googleReviewsLink}>
              ⭐ Voir nos {config.reviewCount} avis Google
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div style={s.floatingCta} className="radical3d-floating-cta">
        <a href={`tel:${config.phoneTel}`} style={s.floatingCtaLink}>📞 Appeler maintenant</a>
      </div>
    </div>
  )
}