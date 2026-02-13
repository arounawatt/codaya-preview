import { CompanyData } from '@/types/testimonial'

export const companyData: CompanyData = {
  companyName: 'MTR Construction',
  slug: 'mtr-construction',
  category: 'construction',
  totalReviews: 20,
  score: 5.0,
  reviews: [
    { id: 1, avatar: 'AR', author: 'Adrien Revol', rating: 5, date: 'Octobre 2025', text: "Nous recommandons vivement la société MTR suite à la réalisation de notre chantier de drainage et mur de soutènement. La communication est très fluide et réactive, que ça soit avant la signature pour les mises à jour du devis que pendant le chantier." },
    { id: 2, avatar: 'PE', author: 'Le Petit Écrin', rating: 5, date: 'Octobre 2024', text: "On recommande à 1000% !!! Très sérieux, très professionnel, de très bons conseils et très gentils ! Il a rénové notre appartement aux 2 Alpes entièrement ! Il a fait un travail remarquable." },
    { id: 3, avatar: 'FM', author: 'Françoise Manjarrès', rating: 5, date: 'Novembre 2023', text: "Terrassement assainissement. Magnifique entreprise, au travail sûr et efficace dans le respect des travaux, qu'ils ont réglées avec calme et compétence. Je recommande." },
    { id: 4, avatar: 'IA', author: 'Isabel Alicia', rating: 5, date: 'Mai 2021', text: "Des jeunes de confiance, sérieux et professionnels. Nous sommes très satisfaits du travail qui a été réalisé chez nous. On peut facilement communiquer avec eux et ont des bons contacts pour des travaux hors de leurs compétences." },
    { id: 5, avatar: 'CC', author: 'Céline Cabourdin', rating: 5, date: 'Mars 2022', text: "Rénovation d'une salle de bain. Mr Puel est à l'écoute, travail soigné et sérieux. Ça fait plaisir de voir des jeunes qui ont envie de bosser et qui le font bien." },
    { id: 6, avatar: 'RB', author: 'Romain Bertoux', rating: 5, date: 'Février 2025', text: "Travaux de maçonnerie et de carrelage réalisés dans le respect des délais et des coûts en dépit des imprévus du chantier. Je recommande !" },
  ],
  displayPhone: '06 65 41 80 50',
  phone: '+33665418050',
  googleMapUrl: 'https://www.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47e5d9611e1ae991:0x9f2e05c82723725b',
  city: 'Sainte-Geneviève-des-bois',
  website: '',
}
