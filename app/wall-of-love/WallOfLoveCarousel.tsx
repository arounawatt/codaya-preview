'use client';
import { useState, useEffect } from 'react';
import { TestimonialItem } from '@/types/testimonial';

interface WallOfLoveCarouselProps {
  companyName: string;
  category: string;
  score: number;
  totalReviews: number;
  reviews: TestimonialItem[];
  companyPhone: string;
  companyDisplayPhone: string;
  googleMapUrl: string;
}

export default function WallOfLoveCarousel({ companyName, category, score, totalReviews, reviews, companyPhone, companyDisplayPhone, googleMapUrl  }: WallOfLoveCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dupliquer les avis pour créer un effet infini seamless
  const half = Math.ceil(reviews.length / 2);
  const reviewsRow1 = [...reviews, ...reviews];
  const reviewsRow2Base = [...reviews.slice(half), ...reviews.slice(0, half)];
  const reviewsRow2 = [...reviewsRow2Base, ...reviewsRow2Base];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '80px 0',
      overflow: 'hidden'
    }}>
      <style jsx>{`
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

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .scroll-container-left {
          animation: scrollLeft 60s linear infinite;
        }

        .scroll-container-left.paused {
          animation-play-state: paused;
        }

        .scroll-container-right {
          animation: scrollRight 60s linear infinite;
        }

        .scroll-container-right.paused {
          animation-play-state: paused;
        }

        .review-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .review-card:hover {
          transform: translateY(-8px) scale(1.03);
          z-index: 10;
        }

        @media (max-width: 480px) {
          .review-card {
            width: 280px !important;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>

        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '70px',
          animation: mounted ? 'fadeInUp 0.8s ease-out' : 'none'
        }}>
          {/* Badge "Vérifié par Google" */}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4CAF50"/>
            </svg>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#2d3748',
              letterSpacing: '0.3px'
            }}>
              Avis vérifiés Google
            </span>
          </div>

          <h1 style={{
            fontSize: '56px',
            background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            Ils font confiance à {companyName}
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#718096',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Découvrez ce que nos clients disent de nos services en <strong style={{ color: '#2d3748' }}>{category}</strong>
          </p>

          {/* Stats cards animées */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            {[
              { label: 'Note moyenne', value: score, icon: '⭐', suffix: '/5' },
              { label: 'Avis clients', value: totalReviews, icon: '💬', suffix: '+' },
              { label: 'Satisfaction', value: Math.round((score / 5) * 100), icon: '🎯', suffix: '%' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                padding: '24px 36px',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)',
                minWidth: '180px',
                animation: mounted ? `scaleIn 0.6s ease-out ${index * 0.1}s backwards` : 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
              }}>
                <div style={{
                  fontSize: '32px',
                  marginBottom: '8px'
                }}>{stat.icon}</div>
                <div style={{
                  fontSize: '36px',
                  color: '#1a202c',
                  marginBottom: '4px',
                  letterSpacing: '-0.5px'
                }}>
                  {stat.value}<span style={{ fontSize: '24px', color: '#718096' }}>{stat.suffix}</span>
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#718096',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel infini - Rangée 1 (défilement vers la gauche) */}
      <div style={{
        marginBottom: '24px',
        position: 'relative',
        animation: mounted ? 'fadeInUp 0.8s ease-out 0.4s backwards' : 'none'
      }}>
        {/* Gradient fade edges */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to right, #f8f9fa, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to left, #f8f9fa, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: 'max-content'
          }}
          className={`scroll-container-left ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviewsRow1.map((review, index) => (
            <ReviewCard key={`row1-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Carousel infini - Rangée 2 (défilement vers la droite) */}
      <div style={{
        marginBottom: '24px',
        position: 'relative',
        animation: mounted ? 'fadeInUp 0.8s ease-out 0.6s backwards' : 'none'
      }}>
        {/* Gradient fade edges */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to right, #f8f9fa, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '100px',
          background: 'linear-gradient(to left, #f8f9fa, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: 'max-content'
          }}
          className={`scroll-container-right ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviewsRow2.map((review, index) => (
            <ReviewCard key={`row2-${index}`} review={review} />
          ))}
        </div>
      </div>

      {/* Indication de pause au hover */}
      <div style={{
        textAlign: 'center',
        margin: '40px 16px 60px 16px',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: '50px',
          fontSize: '14px',
          color: '#718096',
          fontWeight: '500',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <span>Survolez les avis pour mettre en pause le défilement</span>
        </div>
      </div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* CTA Section avec animation */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '60px 40px',
          borderRadius: '30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
          animation: mounted ? 'fadeInUp 0.8s ease-out 0.8s backwards' : 'none'
        }}>
          {/* Effet de particules en arrière-plan */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: '42px',
              color: 'white',
              marginBottom: '20px',
              letterSpacing: '-0.5px'
            }}>
              Prêt à faire partie de nos clients satisfaits ?
            </h2>
            <p style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Rejoignez les {totalReviews}+ clients qui font confiance à {companyName}
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'white',
                  color: '#667eea',
                  padding: '18px 40px',
                  borderRadius: '15px',
                  fontSize: '18px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
              >
                <span>Laisser un avis Google</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a
                href={`tel:${companyPhone}`}
                target='_blank'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  padding: '18px 40px',
                  borderRadius: '15px',
                  fontSize: '18px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  border: '2px solid white',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Nous contacter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer avec powered by */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          opacity: 0.6,
          animation: mounted ? 'fadeInUp 0.8s ease-out 1s backwards' : 'none'
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
              <a href='https://codaya.agency'>Codaya Agency</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant ReviewCard séparé pour réutilisation
function ReviewCard({ review }: { review: TestimonialItem }) {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  ];

  const gradient = gradients[review.id % gradients.length];

  return (
    <div
      className="review-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
          : '#ffffff',
        padding: '28px',
        borderRadius: '24px',
        boxShadow: isHovered
          ? '0 20px 60px rgba(0,0,0,0.15)'
          : '0 8px 30px rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.05)',
        position: 'relative',
        overflow: 'hidden',
        width: '380px',
        flexShrink: 0,
        cursor: 'pointer'
      }}
    >
      {/* Effet de brillance au hover */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          animation: 'shimmer 1.5s infinite'
        }} />
      )}

      {/* Header avec avatar et infos */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px',
          fontWeight: '700',
          marginRight: '14px',
          flexShrink: 0,
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          animation: isHovered ? 'pulse 2s infinite' : 'none'
        }}>
          {review.avatar}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#1a202c',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {review.author}
          </div>
          <div style={{
            fontSize: '12px',
            color: '#a0aec0',
            fontWeight: '500'
          }}>
            {review.date}
          </div>
        </div>

        {/* Logo Google */}
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ opacity: 0.7, flexShrink: 0 }}>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      {/* Étoiles */}
      <div style={{
        display: 'flex',
        gap: '3px',
        marginBottom: '14px'
      }}>
        {[...Array(review.rating)].map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#FCD34D"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(252, 211, 77, 0.3))'
            }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Texte de l'avis */}
      <p style={{
        fontSize: '15px',
        lineHeight: '1.6',
        color: '#4a5568',
        margin: 0,
        fontWeight: '400',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Icône quote décorative */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        opacity: 0.06,
        fontSize: '70px',
        fontWeight: '900',
        color: '#667eea',
        lineHeight: '1',
        pointerEvents: 'none'
      }}>
        &ldquo;
      </div>
    </div>
  );
}
