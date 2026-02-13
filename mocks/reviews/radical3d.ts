import { CompanyData } from '@/types/testimonial'

export const companyData: CompanyData = {
  companyName: 'Radical 3D',
  slug: 'radical3d',
  category: 'nuisible',
  totalReviews: 7,
  score: 4.1,
  reviews: [
    { id: 1, avatar: 'GL', author: 'Guillaume L.', rating: 5, date: 'Novembre 2022', text: "Pour des cafards dans ma cuisine. Bonne société, intervention efficace et professionnelle. Je recommande de les appeler !" },
    { id: 2, avatar: 'JP', author: 'Jennifer P.', rating: 5, date: 'Juillet 2022', text: "Efficace, rapide, je recommande. Très satisfaite de la réactivité, de la ponctualité et de la qualité du travail." },
    { id: 3, avatar: 'JR', author: 'Jorge R.', rating: 5, date: 'Client fidèle', text: "Super ! Intervention professionnelle et résultat impeccable. Une équipe sérieuse et compétente." },
  ],
  displayPhone: '01 64 58 48 80',
  phone: '+33164584880',
  googleMapUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e5da8f6c4aea7f:0x866b1fc6a98610b7?sa=X&ved=1t:8290&ictx=111',
  city: 'Guibeville',
}
