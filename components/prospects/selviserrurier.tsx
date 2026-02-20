'use client'

import { useState, useEffect, useRef, FormEvent, ReactNode, CSSProperties } from 'react'
import { TestimonialItem } from '@/types/testimonial'

// ============================================================
// SELVI SERRURIER - Dépannage Serrurerie 24h/24
// Composant autonome pour architecture Next.js multi-tenant
// ============================================================

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
}

interface SelviSerrurierProps {
  testimonials?: TestimonialItem[]
  companyName?: string
  totalReviews?: number
  score?: number
}

export default function SelviSerrurier({ testimonials = [], companyName, totalReviews, score }: SelviSerrurierProps) {
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
    name: companyName ?? 'Selvi Serrurier',
    tagline: 'Dépannage Serrurerie 24h/24',
    phone: '06 18 17 15 14',
    phoneTel: '+33618171514',
    rating: score !== undefined ? score.toFixed(1).replace('.', ',') : '4,5',
    reviewCount: totalReviews ?? 82,
    zone: 'Essonne (91)',
    googleReviewsUrl: 'https://g.page/r/selvi-serrurier',
  }

  const services = [
    { icon: '🚪', title: 'Ouverture de porte', desc: "Porte claquée, clé oubliée à l'intérieur, clé cassée dans la serrure. Intervention rapide sans dégât, même sur porte blindée." },
    { icon: '🔐', title: 'Changement de serrure', desc: "Remplacement de cylindre, serrure 3 points, serrure multipoints. Installation de serrures haute sécurité certifiées A2P." },
    { icon: '🛡️', title: 'Porte blindée', desc: "Installation et dépannage de portes blindées. Renforcement de porte existante. Sécurisation optimale de votre domicile." },
    { icon: '🔧', title: 'Réparation serrure', desc: "Serrure grippée, mécanisme bloqué, clé qui tourne dans le vide. Diagnostic et réparation rapide de tous types de serrures." },
    { icon: '🏠', title: 'Sécurisation', desc: "Installation de verrous, judas, entrebâilleurs. Mise aux normes assurance. Protection contre les effractions." },
    { icon: '🆘', title: 'Urgence cambriolage', desc: "Intervention immédiate après effraction. Sécurisation provisoire puis définitive. Attestation pour assurance fournie." },
  ]

  const whyUs = [
    { icon: '⚡', title: 'Intervention express', desc: "Arrivée en moins de 30 minutes dans tout le secteur. Disponible 24h/24, 7j/7, même les jours fériés." },
    { icon: '💰', title: 'Prix honnêtes', desc: "Tarifs annoncés et respectés. Devis gratuit avant intervention. Pas de mauvaise surprise à la facturation." },
    { icon: '🏆', title: 'Expérience reconnue', desc: "Plus de 80 avis clients positifs. Serrurier professionnel expérimenté et reconnu dans la région." },
    { icon: '🔒', title: 'Toutes serrures', desc: "Expertise sur tous types de serrures : classiques, 3 points, portes blindées, serrures à code, etc." },
    { icon: '📋', title: 'Devis transparent', desc: "Prix communiqué par téléphone. Aucun frais caché. Paiement après intervention uniquement." },
    { icon: '🌙', title: 'Dispo nuit & week-end', desc: "Urgences prises en charge même tard dans la nuit. Intervention rapide le week-end et jours fériés." },
  ]

  const trustItems = [
    { icon: '⭐', title: `${config.reviewCount}+ avis Google`, desc: `Note moyenne de ${config.rating}/5` },
    { icon: '⚡', title: 'Moins de 30 min', desc: "Intervention ultra-rapide" },
    { icon: '🌙', title: 'Disponible 24h/24', desc: "Nuit, week-end, jours fériés" },
    { icon: '💳', title: 'Devis gratuit', desc: "Prix annoncé et respecté" },
  ]

  const situations = [
    { icon: '🔑', name: 'Clé oubliée' },
    { icon: '🚪', name: 'Porte claquée' },
    { icon: '💔', name: 'Clé cassée' },
    { icon: '🔓', name: 'Serrure bloquée' },
    { icon: '🏚️', name: 'Cambriolage' },
    { icon: '🛡️', name: 'Porte blindée' },
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
    primary: '#1e3a5f',
    primaryLight: '#2d4a6f',
    accent: '#f59e0b',
    accentHover: '#d97706',
    gold: '#fbbf24',
    goldLight: '#fcd34d',
    white: '#ffffff',
    offWhite: '#f8fafc',
    gray100: '#f1f5f9',
    gray200: '#e2e8f0',
    gray300: '#cbd5e1',
    gray600: '#64748b',
    gray800: '#1e293b',
    success: '#10b981',
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
      background: scrolled ? 'rgba(30, 58, 95, 0.98)' : colors.primary,
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
      color: colors.gray800,
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
    },
    hero: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 50%, #3d5a80 100%)`,
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
      background: `radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
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
      color: colors.gray800,
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      fontSize: '0.8rem',
      fontWeight: 700,
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
      color: colors.gray800,
      padding: '1.25rem 2.5rem',
      borderRadius: '60px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '1.1rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 8px 30px rgba(245, 158, 11, 0.4)',
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
      transform: 'rotate(2deg)',
    },
    heroCardBorder: {
      position: 'absolute',
      top: -3,
      left: -3,
      right: -3,
      bottom: -3,
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.primary})`,
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
      boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
    },
    situationsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' },
    situationItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem',
      background: colors.gray100,
      borderRadius: '15px',
      textAlign: 'center',
    },
    situationIcon: { fontSize: '2rem' },
    situationName: { fontWeight: 600, color: colors.primary, margin: 0, fontSize: '0.85rem' },
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
      color: colors.gray800,
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
      background: `radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.2) 0%, transparent 40%),
                   radial-gradient(circle at 90% 10%, rgba(251, 191, 36, 0.15) 0%, transparent 40%)`,
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
    testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' },
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
      color: colors.gray800,
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
      color: colors.gray800,
      padding: '1rem 1.5rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 700,
      boxShadow: '0 8px 30px rgba(245, 158, 11, 0.5)',
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
    
    .selvi-floating-cta { animation: pulse 2s infinite; }
    .selvi-floating-badge { animation: float 3s ease-in-out infinite; }
    
    @media (max-width: 1024px) {
      .selvi-hero-container { grid-template-columns: 1fr !important; text-align: center; }
      .selvi-hero-visual { display: none !important; }
      .selvi-trust-container { grid-template-columns: repeat(2, 1fr) !important; }
      .selvi-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .selvi-why-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .selvi-testimonials-grid { grid-template-columns: 1fr !important; }
      .selvi-contact-container { grid-template-columns: 1fr !important; }
      .selvi-footer-main { grid-template-columns: 1fr !important; gap: 2rem !important; }
    }
    
    @media (max-width: 768px) {
      .selvi-nav { display: none !important; }
      .selvi-hero { padding: 7rem 1.5rem 3rem !important; }
      .selvi-hero-ctas { flex-direction: column !important; }
      .selvi-trust-container { grid-template-columns: 1fr !important; }
      .selvi-services-grid { grid-template-columns: 1fr !important; }
      .selvi-why-grid { grid-template-columns: 1fr !important; }
      .selvi-footer-bottom { flex-direction: column !important; gap: 1rem !important; text-align: center !important; }
      .selvi-floating-cta { left: 1rem !important; right: 1rem !important; bottom: 1rem !important; }
      .selvi-floating-cta a { justify-content: center !important; }
      header { flex-direction: column; gap: 6px}
      .selvi-hero { padding-top:10rem !important; }
    }
  `

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <>
    <div style={s.wrapper}>
      <style>{responsiveStyles}</style>

      {/* Header */}
      <header style={s.header}>
        <div style={s.logo}>
          <div style={s.logoIcon}>🔐</div>
          <div>
            <h1 style={s.logoTitle}>{config.name}</h1>
            <span style={s.logoSubtitle}>{config.tagline}</span>
          </div>
        </div>
        <nav style={s.nav} className="selvi-nav">
          <button onClick={() => scrollToSection('services')} style={s.navLink}>Services</button>
          <button onClick={() => scrollToSection('pourquoi')} style={s.navLink}>Pourquoi nous</button>
          <button onClick={() => scrollToSection('avis')} style={s.navLink}>Avis clients</button>
          <button onClick={() => scrollToSection('contact')} style={s.navLink}>Contact</button>
        </nav>
        <a href={`tel:${config.phoneTel}`} style={s.headerCta}>📞 Urgence</a>
      </header>

      {/* Hero */}
      <section style={s.hero} className="selvi-hero">
        <div style={s.heroOverlay} />
        <div style={s.heroContainer} className="selvi-hero-container">
          <div>
            <div style={s.badge}>🔐 Serrurier de confiance</div>
            <h2 style={s.heroTitle}>
              Porte claquée ? <span style={s.heroTitleAccent}>On arrive</span> en 30 min
            </h2>
            <p style={s.heroSubtitle}>
              Ouverture de porte, changement de serrure, urgence cambriolage. Serrurier professionnel disponible 24h/24 en {config.zone}.
            </p>
            <div style={s.ratingBox}>
              <div style={s.stars}>★★★★★</div>
              <div>
                <strong style={s.ratingNumber}>{config.rating}/5</strong>
                <span style={s.ratingLabel}>{config.reviewCount}+ avis Google</span>
              </div>
            </div>
            <div style={s.heroCtas} className="selvi-hero-ctas">
              <a href={`tel:${config.phoneTel}`} style={s.ctaPrimary}>📞 Appeler maintenant</a>
              <button onClick={() => scrollToSection('contact')} style={s.ctaSecondary}>📋 Devis gratuit</button>
            </div>
          </div>

          <div style={s.heroVisual} className="selvi-hero-visual">
            <div style={s.heroCard}>
              <div style={s.heroCardBorder} />
              <div style={s.floatingBadge} className="selvi-floating-badge">24h/24 ⚡</div>
              <h3 style={{ margin: '0 0 1.5rem', color: colors.primary, fontSize: '1.25rem' }}>On intervient pour</h3>
              <div style={s.situationsGrid}>
                {situations.map((situation, i) => (
                  <div key={i} style={s.situationItem}>
                    <span style={s.situationIcon}>{situation.icon}</span>
                    <p style={s.situationName}>{situation.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={s.trustSection}>
        <div style={s.trustContainer} className="selvi-trust-container">
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
          <h2 style={s.sectionTitle}>Toutes les solutions serrurerie</h2>
          <p style={s.sectionDesc}>Dépannage urgent ou travaux planifiés, nous intervenons rapidement avec le matériel adapté.</p>
        </div>
        <div style={s.servicesGrid} className="selvi-services-grid">
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
            <span style={s.sectionTag}>Nos engagements</span>
            <h2 style={{ ...s.sectionTitle, ...s.sectionTitleLight }}>Pourquoi choisir {config.name} ?</h2>
            <p style={{ ...s.sectionDesc, ...s.sectionDescLight }}>Un serrurier honnête, réactif et expérimenté à votre service.</p>
          </div>
          <div style={s.whyGrid} className="selvi-why-grid">
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
            <h2 style={s.sectionTitle}>Ils nous recommandent</h2>
            <p style={s.sectionDesc}>Plus de 80 clients satisfaits nous font confiance.</p>
          </div>
          <div style={s.testimonialsGrid} className="selvi-testimonials-grid">
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
        <div style={s.contactContainer} className="selvi-contact-container">
          <div>
            <h2 style={s.contactTitle}>Besoin d&apos;un serrurier ?</h2>
            <p style={s.contactDesc}>Appelez-nous pour une intervention rapide ou demandez un devis gratuit. Disponible 24h/24 pour les urgences.</p>
            <div style={s.contactMethods}>
              <div style={s.contactMethod}>
                <div style={s.contactMethodIcon}>📞</div>
                <div>
                  <h4 style={s.contactMethodTitle}>Téléphone</h4>
                  <p style={s.contactMethodValue}>{config.phone}</p>
                  <span style={s.contactMethodNote}>Disponible 24h/24, 7j/7</span>
                </div>
              </div>
              <div style={s.contactMethod}>
                <div style={s.contactMethodIcon}>📍</div>
                <div>
                  <h4 style={s.contactMethodTitle}>Zone d&apos;intervention</h4>
                  <p style={s.contactMethodValue}>{config.zone}</p>
                  <span style={s.contactMethodNote}>Draveil et environs</span>
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
                  placeholder="Porte claquée, serrure bloquée, changement de cylindre..."
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
          <div style={s.footerMain} className="selvi-footer-main">
            <div>
              <div style={s.logo}>
                <div style={s.logoIcon}>🔐</div>
                <div>
                  <h1 style={s.logoTitle}>{config.name}</h1>
                  <span style={s.logoSubtitle}>{config.tagline}</span>
                </div>
              </div>
              <p style={s.footerBrandDesc}>Serrurier professionnel de confiance. Intervention rapide 24h/24 pour ouverture de porte, changement de serrure et dépannage urgent en {config.zone}.</p>
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
                <li><a href="/mentions-legales" style={s.footerLink}>Mentions légales</a></li>
              </ul>
            </div>
          </div>
          <div style={s.footerBottom} className="selvi-footer-bottom">
            <p style={s.footerCopyright}>© 2026 {config.name} - Tous droits réservés</p>
            <a href={config.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={s.googleReviewsLink}>
              ⭐ Voir nos {config.reviewCount}+ avis Google
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div style={s.floatingCta} className="selvi-floating-cta">
        <a href={`tel:${config.phoneTel}`} style={s.floatingCtaLink}>📞 Urgence serrurier</a>
      </div>
    </div>
    <script src="https://trustly.codaya.fr/api/widget/selviserrurier.js" defer></script>
    </>
  )
}