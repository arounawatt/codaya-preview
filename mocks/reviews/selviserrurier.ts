import { CompanyData } from '@/types/testimonial'

export const companyData: CompanyData = {
  companyName: 'Selvi Serrurier',
  slug: 'selviserrurier',
  category: 'serrurerie',
  totalReviews: 82,
  score: 4.5,
  reviews: [
    { id: 1, avatar: 'MB', author: 'Malik B.', rating: 5, date: 'Janvier 2025', text: "Service rapide, sérieux, efficace, gentil et pas cher. Bravo ! Intervention ce dimanche, je recommande vivement." },
    { id: 2, avatar: 'CL', author: 'Chaïnez L.', rating: 5, date: 'Janvier 2023', text: "Ce serrurier est très professionnel et doué, il était disponible directement et a ouvert ma porte en moins d'une minute. Impressionnant ! Tarif hors compétition, très sérieux." },
    { id: 3, avatar: 'GP', author: 'Gaëlle P.', rating: 5, date: 'Janvier 2023', text: "Serrurier très aimable et très professionnel. Intervention rapide et efficace, tarif plus que correct. Nous avions claqué la porte en laissant les clés dessus. Je recommande sans hésitation !" },
    { id: 4, avatar: 'ST', author: 'Sophie T.', rating: 5, date: 'Septembre 2023', text: "Serrurier sérieux et honnête. Très compétent et réactif. Problème réglé avec changement de pièces en moins de 2h. Prix honnête. Très sympathique en plus !" },
  ],
  displayPhone: '06 18 17 15 14',
  phone: '+33618171514',
  googleMapUrl: 'https://www.google.com/search?sa=X&sca_esv=e8bb71c9cc7ce2dd&rlz=1C5CHFA_enFR1164FR1164&sxsrf=ANbL-n7I1aTA4TabnMaRaQ6iG5SPya3mnQ:1770839344147&q=Selvi+Serrurier+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0NzAzNTM0N7OwtDA3sTC0sNjAyPiKUSQ4NacsUyE4taiotCgztUjBsSyzeBErVmEABgkaqkkAAAA&rldimm=13170656176898748188&tbm=lcl&hl=fr-FR&ved=2ahUKEwiisb_QmtKSAxVbVKQEHT87IHQQ9fQKegQIKBAG&biw=1512&bih=792&dpr=2#lkt=LocalPoiReviews',
  city: 'Draveil',
}
