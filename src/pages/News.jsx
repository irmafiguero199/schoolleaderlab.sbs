import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Calendar, ArrowRight, User } from 'lucide-react'

const newsItems = [
  { date: '15 août 2026', title: 'School Leader Lab obtient l\'EIN fédéral 82-1581985', excerpt: 'Nous sommes fiers d\'annoncer l\'obtention officielle de notre numéro d\'identification fiscale fédéral (EIN 82-1581985), consolidant notre statut d\'organisation éducative à but non lucratif 501(c)(3).', author: 'Dr. Margaret Chen', category: 'Institution' },
  { date: '3 juillet 2026', title: 'Lancement de la cohorte d\'automne 2026', excerpt: 'Les inscriptions sont ouvertes pour notre prochaine session de formation. Quatre programmes certifiants disponibles, dont le nouveau module avancé sur l\'IA en éducation.', author: 'Robert Williams', category: 'Admissions' },
  { date: '22 juin 2026', title: '94% de réussite à la certification pour la promotion 2026', excerpt: 'Les résultats de la session de printemps 2026 confirment l\'excellence de nos programmes avec un taux de certification de 94% et une satisfaction de 96%.', author: 'Dr. Fatima Al-Rashid', category: 'Résultats' },
  { date: '10 mai 2026', title: 'Nouveau partenariat avec le district d\'Austin', excerpt: 'School Leader Lab signe un accord de partenariat triennal avec le Austin Independent School District pour former l\'ensemble de ses 120 directeurs d\'école.', author: 'Michael O\'Brien', category: 'Partenariats' },
  { date: '18 avril 2026', title: 'Mise à jour de la politique de confidentialité FERPA', excerpt: 'Conformément aux exigences fédérales, nous avons actualisé notre politique de protection des données des participants et des élèves mentionnés dans nos études de cas.', author: 'David Thompson', category: 'Juridique' },
]

function News() {
  return (
    <>
      <Helmet>
        <title>Actualités — School Leader Lab</title>
        <meta name="description" content="Actualités et annonces de School Leader Lab. EIN 82-1581985. Programmes, résultats, partenariats et vie institutionnelle." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Les dernières nouvelles de School Leader Lab : programmes, résultats, partenariats et annonces institutionnelles.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Nos dernières annonces" subtitle="Restez informé de l\'actualité de School Leader Lab et de l\'évolution de nos programmes de formation." />
          <div className="max-w-3xl mx-auto space-y-6">
            {newsItems.map((news, i) => (
              <article key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">{news.category}</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{news.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary-700 transition-colors cursor-pointer">{news.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1"><User className="w-3 h-3" />Par {news.author}</span>
                  <button className="text-sm font-medium text-primary-700 hover:text-primary-800 flex items-center gap-1">Lire la suite <ArrowRight className="w-4 h-4" /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News