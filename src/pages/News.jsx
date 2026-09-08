import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Calendar, ArrowRight, User } from 'lucide-react'

const newsItems = [
  { date: '15 août 2026', title: 'University High School confirme son statut fédéral (EIN 77-0515663)', excerpt: 'Nous sommes fiers de réaffirmer la conformité administrative et fiscale de notre établissement à Fresno, CA (EIN 77-0515663), consolidant notre statut d\'organisation éducative 501(c)(3).', author: 'Dr. Margaret Chen', category: 'Institution' },
  { date: '3 juillet 2026', title: 'Ouverture des inscriptions pour l\'année scolaire 2026-2027', excerpt: 'Les dossiers de candidature sont désormais ouverts. Découvrez nos programmes d\'excellence, le cursus Advanced Placement (AP) et nos ateliers scientifiques.', author: 'Robert Williams', category: 'Admissions' },
  { date: '22 juin 2026', title: '98% de réussite et d\'admissions universitaires pour la promotion 2026', excerpt: 'Les résultats de nos diplômés 2026 confirment l\'excellence académique de University High School avec un taux d\'admission exceptionnel dans l\'enseignement supérieur.', author: 'Dr. Fatima Al-Rashid', category: 'Résultats' },
  { date: '10 mai 2026', title: 'Partenariat renouvelé avec l\'écosystème éducatif de Fresno', excerpt: 'University High School renforce ses liens avec les acteurs éducatifs et scientifiques de la région pour offrir de nouveaux projets d\'apprentissage immersifs.', author: 'Michael O\'Brien', category: 'Partenariats' },
  { date: '18 avril 2026', title: 'Mise à jour des politiques de confidentialité FERPA et sécurité des données', excerpt: 'Conformément aux exigences fédérales et californiennes, nous avons mis à jour nos protocoles de protection des données d\'élèves et d\'utilisation des outils Google Workspace.', author: 'David Thompson', category: 'Juridique' },
]

function News() {
  return (
    <>
      <Helmet>
        <title>Actualités — University High School</title>
        <meta name="description" content="Actualités et annonces de University High School à Fresno, CA (EIN 77-0515663). Vie de l'établissement, résultats académiques, admissions et partenariats." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Les dernières nouvelles de University High School : vie de l'établissement, résultats, admissions et annonces institutionnelles.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Nos dernières annonces" subtitle="Restez informé de l'actualité de University High School et des événements marquants de notre communauté scolaire." />
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
