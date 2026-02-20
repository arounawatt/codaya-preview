import { CompanyData } from '@/types/testimonial'

export const companyData: CompanyData = {
  companyName: 'Mr Leroy Urgences',
  slug: 'mrleroyurgences',
  category: 'plomberie',
  totalReviews: 169,
  score: 4.8,
  reviews: [
    { id: 1, avatar: 'SC', author: 'Sabri C.', rating: 5, date: 'Janvier 2026', text: "Un grand merci pour ce travail de qualité ! Artisan à l'écoute, de très bon conseil et vraiment passionné par son métier. Le résultat est au-delà de mes attentes." },
    { id: 2, avatar: 'F', author: 'Fab', rating: 5, date: 'Mars 2025', text: "J'ai fait appel à M. Leroy pour des travaux chez moi. Travail propre, sérieux et dans les délais. Il prend le temps de bien expliquer ce qu'il fait, et ça met en confiance." },
    { id: 3, avatar: 'BS', author: 'Bob S.', rating: 5, date: 'Avril 2025', text: "Ponctuel, efficace et très sympathique. Il a réparé une fuite que d'autres n'avaient pas su localiser. Franchement, je suis bluffé par la qualité du service." },
    { id: 4, avatar: 'AS', author: 'Anne Sophie B.', rating: 5, date: 'Mars 2025', text: "M. Leroy est sérieux, appliqué et à l'écoute. Les finitions sont soignées et le chantier a été laissé propre. Une vraie écoute et des conseils avisés." },
  ],
  displayPhone: '06 66 69 73 92',
  phone: '+330666697392',
  googleMapUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e5e152538aa5b5:0x45915ef000d7c0de?sa=X&ved=1t:8290&ictx=111',
  city: 'Évry-Courcouronnes',
  email: 'contact@mrleroyurgences.fr',
  website: '',
}