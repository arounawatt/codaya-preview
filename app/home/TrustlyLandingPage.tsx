'use client';

import { useState, useEffect } from 'react';
import { Star, Globe, MessageSquare, QrCode, CheckCircle, ChevronDown, Smartphone, Car, Store, Share2 } from 'lucide-react';
import { HomeReview } from '@/types/testimonial';
import Image from 'next/image'

interface TrustlyLandingPageProps {
    demoReviews: HomeReview[]
    host: string
  }

export default function TrustlyLandingPage({demoReviews, host}:TrustlyLandingPageProps) {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    if (demoReviews.length === 0) return;
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % demoReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [demoReviews]);

  const steps = [
    {
      icon: <Globe size={24} />,
      title: "Un site qui vous ressemble",
      description: "On crée votre site vitrine professionnel : vos services, votre zone, votre savoir-faire. Clé en main."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Vos avis mis en avant",
      description: "Vos avis Google s'affichent directement sur votre site. Vos futurs clients voient immédiatement votre excellence."
    },
    {
      icon: <QrCode size={24} />,
      title: "Un QR code pour tout partager",
      description: "Votre Wall of Love accessible partout : sur votre camionnette, votre devanture, vos devis, votre carte de visite."
    }
  ];

  const qrUseCases = [
    {
      icon: <Car size={24} />,
      title: "Sur votre véhicule",
      description: "Chaque déplacement devient une publicité. Les passants scannent et découvrent vos avis."
    },
    {
      icon: <Store size={24} />,
      title: "Sur votre devanture",
      description: "En vitrine ou sur la porte, vos clients voient vos avis avant même d'entrer."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Par téléphone",
      description: "Envoyez le lien par SMS ou WhatsApp. Le client voit vos avis en un clic."
    },
    {
      icon: <Share2 size={24} />,
      title: "Sur vos devis & factures",
      description: "Ajoutez le QR code sur vos documents. La preuve sociale accompagne chaque échange."
    }
  ];

  return (
    <div style={{
      color: '#1a1a1a',
      background: '#ffffff',
      overflowX: 'hidden'
    }}>

<style jsx>{`
       .header {
        display: flex;
       }
       .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
       }
       .qr-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
       }
       .steps-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
       }
       .examples-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
       }
       .comparison-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
       }
       .cta-buttons {
        display: flex;
        gap: 16px;
       }
       .stats-row {
        display: flex;
        gap: 40px;
       }
      @media (max-width: 768px) {
       .header {
        flex-direction: column;
       }
       .headerLogo {
        margin-bottom: 8px;
       }
       .hero {
        padding-top: 144px !important;
       }
       .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
       }
       .qr-grid {
        grid-template-columns: 1fr 1fr;
       }
       .steps-grid {
        grid-template-columns: 1fr;
       }
       .examples-grid {
        grid-template-columns: 1fr;
       }
       .comparison-grid {
        grid-template-columns: 1fr;
       }
       .cta-buttons {
        flex-direction: column;
       }
       .stats-row {
        flex-direction: column;
        gap: 20px;
       }
      }
      `}</style>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        padding: '20px 0'
      }}>
        <div className="header" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div className="headerLogo" style={{
            fontSize: '24px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            alignItems: 'center'
          }}>
            Trustly by <Image
                src="/codaya-logo.png"
                height={25}
                width={90}
                alt="Codaya"
                style={{
                  display: 'inline',
                }}
              />
          </div>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
          onClick={() => window.location.href = '#pricing'}>
            Je veux mon site
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className='hero'
        style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 40px 80px',
        background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
          filter: 'blur(40px)'
        }} />

        <div className="hero-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left side - Text */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#667eea',
              marginBottom: '24px',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}>
              Site vitrine + Avis Google + QR Code
            </div>

            <h1 style={{
              fontSize: '52px',
              
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#1a1a1a',
              letterSpacing: '-0.02em'
            }}>
              Vos clients sont ravis.
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginTop: '8px'
              }}>
                Montrez-le au monde entier.
              </span>
            </h1>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#666',
              marginBottom: '40px',
              maxWidth: '540px'
            }}>
              Vous avez des dizaines d&apos;avis 5 étoiles mais aucun site pour présenter votre savoir-faire ? On crée votre vitrine professionnelle avec vos avis Google intégrés et un QR code partageable partout.
            </p>

            <div className="cta-buttons" style={{
              marginBottom: '48px'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 36px',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.3)';
              }}
              onClick={() => window.location.href = '#pricing'}>
                Je veux mon site
              </button>

              <button style={{
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                padding: '18px 36px',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#667eea';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#667eea';
              }}
              onClick={() => window.location.href = '#demo'}>
                Voir les exemples
              </button>
            </div>

            {/* Stats mini */}
            <div className="stats-row" style={{
              paddingTop: '32px',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)'
            }}>
              {[
                { value: "100%", label: "clé en main" },
                { value: "24h", label: "de mise en ligne" },
                { value: "0", label: "compétence technique requise" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '4px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#888'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Widget Demo */}
          <div>
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              position: 'relative'
            }}>
              {/* Header du widget */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
                paddingBottom: '24px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 700
                }}>
                  {demoReviews[activeReview]?.companyName?.[0] ?? 'M'}
                </div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '4px'
                  }}>
                    {demoReviews[activeReview]?.companyName ?? 'Chargement...'}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                      ))}
                    </div>
                    <span style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>
                      {demoReviews[activeReview] ? `${demoReviews[activeReview].companyScore} • ${demoReviews[activeReview].companyTotalReviews} avis` : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Avis animés */}
              <div style={{
                position: 'relative',
                minHeight: '160px'
              }}>
                {demoReviews.map((review, idx) => (
                  <div key={idx} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: activeReview === idx ? 1 : 0,
                    transform: activeReview === idx ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease',
                    pointerEvents: activeReview === idx ? 'auto' : 'none'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '4px',
                      marginBottom: '12px'
                    }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#FFB800" color="#FFB800" />
                      ))}
                    </div>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#333',
                      marginBottom: '16px'
                    }}>
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '13px'
                    }}>
                      <span style={{ fontWeight: 600, color: '#1a1a1a' }}>
                        {review.author}
                      </span>
                      <span style={{ color: '#999' }}>
                        {review.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots navigation */}
              <div style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
              }}>
                {demoReviews.map((_, idx) => (
                  <div key={idx} style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: activeReview === idx ? '#667eea' : '#ddd',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveReview(idx)} />
                ))}
              </div>

              {/* Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'white',
                  animation: 'pulse 2s ease-in-out infinite'
                }} />
                WIDGET LIVE
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          <ChevronDown size={32} color="#ccc" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" style={{
        padding: '120px 40px',
        background: 'white',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#667eea',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '16px'
          }}>
            Le constat
          </div>
          <h2 style={{
            fontSize: '42px',
            
            lineHeight: '1.2',
            marginBottom: '24px',
            color: '#1a1a1a'
          }}>
            Des avis excellents, mais personne ne les voit.
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '48px'
          }}>
            Vos clients sont ravis de votre travail. Ils le disent sur Google. Mais <strong style={{ color: '#1a1a1a' }}>sans site web, votre expertise reste invisible</strong>. Pas de détail sur vos prestations, pas de vitrine pour vos réalisations, pas de preuve sociale accessible en un clic.
          </p>

          {/* Comparison cards */}
          <div className="comparison-grid" style={{
            marginTop: '60px'
          }}>
            {/* Sans site */}
            <div style={{
              background: '#fafafa',
              border: '2px solid rgba(0, 0, 0, 0.06)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#ff4444',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 700
              }}>
                AUJOURD&apos;HUI
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#1a1a1a'
              }}>
                Sans site web
              </div>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#666',
                marginBottom: '24px'
              }}>
                Vos avis Google sont noyés dans la masse. Un client potentiel cherche un artisan, il ne trouve rien sur vous. Il appelle le concurrent qui a un site.
              </p>
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '13px',
                color: '#999',
                fontStyle: 'italic'
              }}>
                &ldquo;Je ne trouve pas d&apos;infos sur eux, je vais voir ailleurs...&rdquo;
              </div>
            </div>

            {/* Avec Trustly */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
              border: '2px solid #667eea',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 700
              }}>
                AVEC TRUSTLY
              </div>
              <div style={{
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '16px',
                color: '#1a1a1a'
              }}>
                Votre vitrine professionnelle
              </div>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#666',
                marginBottom: '24px'
              }}>
                Un site qui présente vos services en détail, avec vos avis Google visibles dès l&apos;arrivée. Le client voit votre expertise et la satisfaction de vos anciens clients.
              </p>
              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '13px',
                color: '#667eea',
                fontWeight: 600,
                border: '1px solid rgba(102, 126, 234, 0.2)'
              }}>
                &ldquo;20 avis 5 étoiles, des prestations détaillées, je les appelle !&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section style={{
        padding: '120px 40px',
        background: '#fafafa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px'
            }}>
              Ce qu&apos;on fait pour vous
            </div>
            <h2 style={{
              fontSize: '42px',
              
              lineHeight: '1.2',
              color: '#1a1a1a'
            }}>
              Un site. Vos avis. Un QR code.
            </h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#667eea'
                }}>
                  {idx + 1}
                </div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#667eea',
                  marginBottom: '24px'
                }}>
                  {step.icon}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#1a1a1a'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre prestation Section */}
      <section style={{
        padding: '120px 40px',
        background: '#fafafa'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px'
            }}>
              Une prestation complète
            </div>
            <h2 style={{
              fontSize: '42px',
              
              lineHeight: '1.2',
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              On s&apos;occupe de tout, de A à Z.
            </h2>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Vous nous parlez de votre métier. On transforme ça en un site professionnel qui met en valeur votre savoir-faire et la satisfaction de vos clients.
            </p>
          </div>

          {/* Visual flow: site creation → wall of love */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Step A: Site creation */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              padding: '48px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '32px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  flexShrink: 0
                }}>
                  <Globe size={32} />
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '12px'
                  }}>
                    Un site internet à l&apos;image de votre activité
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#666',
                    marginBottom: '24px'
                  }}>
                    On crée un site vitrine professionnel qui présente en détail vos prestations, votre zone d&apos;intervention, vos compétences et vos coordonnées. Un vrai outil commercial qui travaille pour vous 24h/24, même quand vous êtes sur un chantier.
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {['Vos services détaillés', 'Votre zone d\'intervention', 'Formulaire de contact', 'Design sur-mesure', 'Optimisé mobile'].map((tag, i) => (
                      <span key={i} style={{
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
                        color: '#667eea',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 700,
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}>
                + la valeur ajoutée
              </div>
            </div>

            {/* Step B: Wall of Love */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.04) 0%, rgba(118, 75, 162, 0.04) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(102, 126, 234, 0.15)',
              padding: '48px',
              boxShadow: '0 4px 20px rgba(102, 126, 234, 0.06)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '32px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  flexShrink: 0
                }}>
                  <Star size={32} />
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '12px'
                  }}>
                    Le Wall of Love : vos avis deviennent votre meilleur argument
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#666',
                    marginBottom: '24px'
                  }}>
                    C&apos;est ce qui fait toute la différence. Une page dédiée qui affiche tous vos avis Google dans un carrousel animé premium. Vos futurs clients voient en un coup d&apos;oeil que vos anciens clients sont ravis. Et grâce au QR code, vous pouvez partager cette page partout : sur votre camionnette, en vitrine, sur vos devis, par SMS...
                  </p>
                  <div style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '3px'
                    }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="#FFB800" color="#FFB800" />
                      ))}
                    </div>
                    <span style={{
                      fontSize: '15px',
                      color: '#333',
                      fontWeight: 600
                    }}>
                      &ldquo;J&apos;ai collé le QR code sur mon utilitaire. Depuis, les gens scannent et m&apos;appellent directement.&rdquo;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result line */}
          <div style={{
            textAlign: 'center',
            marginTop: '48px',
            padding: '32px',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}>
            <p style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '8px'
            }}>
              Résultat : un artisan avec un site pro + des avis visibles partout = un artisan qui inspire confiance.
            </p>
            <p style={{
              fontSize: '15px',
              color: '#666'
            }}>
              Et c&apos;est exactement ce que vos futurs clients recherchent avant de décrocher le téléphone.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section style={{
        padding: '120px 40px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px'
            }}>
              Partagez vos avis partout
            </div>
            <h2 style={{
              fontSize: '42px',
              
              lineHeight: '1.2',
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Votre Wall of Love, accessible d&apos;un scan.
            </h2>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Un QR code unique qui renvoie vers tous vos avis Google. Collez-le partout pour que chaque contact devienne une opportunité.
            </p>
          </div>

          <div className="qr-grid">
            {qrUseCases.map((useCase, idx) => (
              <div key={idx} style={{
                background: '#fafafa',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#667eea',
                  margin: '0 auto 20px'
                }}>
                  {useCase.icon}
                </div>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: '#1a1a1a'
                }}>
                  {useCase.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: '#666'
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" style={{
        padding: '120px 40px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#667eea',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '16px'
          }}>
            Nos réalisations
          </div>
          <h2 style={{
            fontSize: '42px',
            
            lineHeight: '1.2',
            marginBottom: '24px',
            color: '#1a1a1a'
          }}>
            Ils nous font déjà confiance
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            Découvrez les sites vitrines et Wall of Love que nous avons créés pour des artisans comme vous.
          </p>

          {/* Exemples de previews */}
          <div className="examples-grid">
            {demoReviews.map((review) => {
              const siteUrl = `https://${review.slug}.${host.includes('localhost') ? host : 'codaya.fr'}`;
              return (
              <a key={review.slug} href={siteUrl} target="_blank" rel="noopener noreferrer" style={{
                background: 'white',
                borderRadius: '16px',
                padding: '32px',
                border: '2px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                textAlign: 'left',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700
                  }}>
                    {review.companyName[0]}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#1a1a1a'
                    }}>
                      {review.companyName}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: '#999'
                    }}>
                      {review.companyCategory}
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                    ))}
                  </div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1a1a1a'
                  }}>
                    {review.companyScore}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    color: '#999'
                  }}>
                    ({review.companyTotalReviews} avis)
                  </span>
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#667eea',
                  fontWeight: 600
                }}>
                  Voir le site &rarr;
                </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '120px 40px',
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)'
      }}>
        <div style={{
          maxWidth: '950px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: 700,
            color: '#667eea',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '16px'
          }}>
            Tarif simple et transparent
          </div>
          <h2 style={{
            fontSize: '42px',
            
            lineHeight: '1.2',
            marginBottom: '24px',
            color: '#1a1a1a'
          }}>
            Tout inclus. Sans surprise.
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '60px'
          }}>
            Moins cher qu&apos;une pub dans le journal. Plus efficace qu&apos;un millier de flyers.
          </p>

          {/* Two pricing cards */}
          <div className="comparison-grid" style={{ alignItems: 'stretch' }}>

            {/* Monthly */}
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '48px 40px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#667eea',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '24px'
              }}>
                Mensuel
              </div>

              <div style={{
                fontSize: '56px',
                
                color: '#1a1a1a',
                marginBottom: '4px',
                lineHeight: 1
              }}>
                49&euro;
                <span style={{ fontSize: '22px', color: '#999', fontWeight: 600 }}>/mois</span>
              </div>

              <p style={{
                fontSize: '15px',
                color: '#999',
                marginBottom: '32px'
              }}>
                Sans engagement &bull; Annulez quand vous voulez
              </p>

              <div style={{
                textAlign: 'left',
                marginBottom: '32px',
                flex: 1
              }}>
                {[
                  'Site vitrine professionnel sur-mesure',
                  'Widget avis Google intégré',
                  'Page Wall of Love dédiée',
                  'QR code personnalisé',
                  'Mises à jour automatiques des avis',
                  'Création en 24h, zéro technique',
                  'Support prioritaire'
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.04)'
                  }}>
                    <CheckCircle size={18} color="#667eea" />
                    <span style={{ fontSize: '14px', color: '#444' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button style={{
                width: '100%',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#667eea';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Choisir mensuel
              </button>
            </div>

            {/* Annual */}
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '48px 40px',
              boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15)',
              border: '2px solid #667eea',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 700
              }}>
                RECOMMANDÉ
              </div>

              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#667eea',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '24px'
              }}>
                Annuel
              </div>

              <div style={{
                fontSize: '56px',
                
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '4px',
                lineHeight: 1
              }}>
                39&euro;
                <span style={{ fontSize: '22px', color: '#999' }}>/mois</span>
              </div>

              <p style={{
                fontSize: '15px',
                color: '#999',
                marginBottom: '8px'
              }}>
                Facturé 468&euro;/an
              </p>

              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#667eea',
                marginBottom: '32px',
                alignSelf: 'center'
              }}>
                Économisez 120&euro;/an
              </div>

              <div style={{
                textAlign: 'left',
                marginBottom: '32px',
                flex: 1
              }}>
                {[
                  'Site vitrine professionnel sur-mesure',
                  'Widget avis Google intégré',
                  'Page Wall of Love dédiée',
                  'QR code personnalisé',
                  'Mises à jour automatiques des avis',
                  'Création en 24h, zéro technique',
                  'Support prioritaire'
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.04)'
                  }}>
                    <CheckCircle size={18} color="#667eea" />
                    <span style={{ fontSize: '14px', color: '#444' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.3)';
              }}>
                Choisir annuel &rarr;
              </button>
            </div>
          </div>

          <p style={{
            fontSize: '13px',
            color: '#999',
            marginTop: '32px'
          }}>
            Paiement sécurisé &bull; Même prestation dans les deux formules
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '120px 40px',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '16px'
            }}>
              Questions fréquentes
            </div>
            <h2 style={{
              fontSize: '42px',
              
              lineHeight: '1.2',
              color: '#1a1a1a'
            }}>
              Tout ce que vous devez savoir
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {[
              {
                q: 'Je n\'ai pas de site web, c\'est un problème ?',
                a: 'Au contraire, c\'est exactement pour ça qu\'on est là ! On crée votre site de A à Z. Vous n\'avez rien à faire, on s\'occupe de tout.'
              },
              {
                q: 'Comment mes avis Google apparaissent sur mon site ?',
                a: 'On intègre un widget qui se synchronise avec votre fiche Google. Chaque nouvel avis apparaît automatiquement sur votre site, sans manipulation de votre part.'
              },
              {
                q: 'C\'est quoi le Wall of Love ?',
                a: 'C\'est une page dédiée qui affiche tous vos avis Google dans un carrousel animé premium. Vos clients peuvent la voir via un QR code que vous collez sur votre véhicule, votre devanture, vos devis...'
              },
              {
                q: 'Est-ce que je peux personnaliser mon site ?',
                a: 'Absolument. On adapte le site à votre métier, votre zone d\'intervention, vos services. Les couleurs, les textes, tout est sur-mesure.'
              },
              {
                q: 'Combien de temps pour avoir mon site en ligne ?',
                a: '24h. Vous nous donnez les infos sur votre activité, et le lendemain votre site est live avec vos avis Google intégrés.'
              },
              {
                q: 'Je peux annuler quand je veux ?',
                a: 'En formule mensuelle, oui, vous annulez quand vous voulez. En formule annuelle, vous êtes engagé 12 mois mais vous économisez 120\u20AC par an.'
              }
            ].map((faq, idx) => (
              <details key={idx} style={{
                background: '#fafafa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                cursor: 'pointer'
              }}>
                <summary style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {faq.q}
                  <span style={{ color: '#667eea', fontSize: '20px' }}>+</span>
                </summary>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#666',
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)'
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '120px 40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '48px',
            
            lineHeight: '1.2',
            marginBottom: '24px'
          }}>
            Vos avis parlent pour vous. Donnez-leur une scène.
          </h2>
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '48px',
            opacity: 0.9
          }}>
            Un site pro, vos avis Google en vitrine, un QR code à partager partout. Tout ce qu&apos;il faut pour que votre réputation travaille pour vous.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
            }}>
              Je veux mon site
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              border: '2px solid white',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => window.location.href = '#demo'}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'white';
            }}>
              Voir les exemples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 40px',
        background: '#1a1a1a',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Trustly by <a href="https://codaya.agency">Codaya</a>
          </div>
          <p style={{
            fontSize: '14px',
            color: '#999',
            marginBottom: '32px'
          }}>
            Votre vitrine professionnelle avec vos avis Google intégrés.
          </p>
          <div style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#999'
          }}>
            <a href="/mentions-legales" style={{ color: '#999', textDecoration: 'none' }}>
              Mentions légales &amp; CGV
            </a>
            <a href="/confidentialite" style={{ color: '#999', textDecoration: 'none' }}>
              Politique de confidentialité
            </a>
            <a href="/contact" style={{ color: '#999', textDecoration: 'none' }}>
              Contact
            </a>
          </div>
          <p style={{
            fontSize: '13px',
            color: '#666',
            marginTop: '32px'
          }}>
            &copy; 2025 Codaya Agency. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
