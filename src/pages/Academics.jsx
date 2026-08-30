import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { BookOpen, Monitor, Users, BarChart3, Globe, Clock, CheckCircle } from 'lucide-react'

const programs = [
  {
    title: 'Certification Leadership Pédagogique Avancé', level: 'Niveau avancé', duration: '6 mois', format: 'Hybride',
    description: 'Programme phare de School Leader Lab conçu pour les directeurs d\'école et chefs d\'établissement en poste. Couvre la gouvernance stratégique, l\'innovation pédagogique, la gestion des ressources humaines et le pilotage par la donnée.',
    modules: ['Gouvernance et éthique du leadership éducatif', 'Innovation pédagogique et transformation numérique', 'Gestion budgétaire et ressources humaines', 'Communication institutionnelle et relations extérieures', 'Évaluation et amélioration continue des programmes'],
  },
  {
    title: 'Google Workspace for Education — Administration', level: 'Niveau intermédiaire', duration: '3 mois', format: 'En ligne',
    description: 'Formation complète à l\'administration de Google Workspace for Education. Gestion des licences, sécurité des données scolaires, déploiement à l\'échelle d\'un district, et conformité FERPA.',
    modules: ['Architecture et configuration de Google Workspace', 'Gestion des utilisateurs, groupes et unités organisationnelles', 'Sécurité des données et conformité FERPA/COPPA', 'Google Classroom : déploiement et adoption', 'Support technique et gestion des incidents'],
  },
  {
    title: 'Gestion de Crise et Communication Institutionnelle', level: 'Niveau avancé', duration: '2 mois', format: 'Présentiel intensif',
    description: 'Ateliers pratiques préparant les leaders scolaires à gérer les situations de crise (violence, catastrophes naturelles, scandales médiatiques) tout en maintenant la confiance des communautés éducatives.',
    modules: ['Protocoles de gestion de crise en milieu scolaire', 'Communication avec les médias et les autorités', 'Soutien psychologique aux équipes et aux élèves', 'Analyse de cas réels et simulations', 'Post-crise : évaluation et reconstruction'],
  },
  {
    title: 'Data-Driven Decision Making for School Leaders', level: 'Niveau intermédiaire', duration: '4 mois', format: 'Hybride',
    description: 'Maîtrise des outils d\'analyse de données éducatives pour piloter la réussite scolaire, identifier les écarts de performance et satisfaire aux exigences de rendement des autorités fédérales et des districts.',
    modules: ['Collecte et structuration des données éducatives', 'Tableaux de bord et indicateurs de performance (KPIs)', 'Analyse prédictive et détection précoce des décrochages', 'Rapports aux conseils scolaires et aux autorités de tutelle', 'Éthique des données et protection de la vie privée des élèves'],
  },
]

function Academics() {
  return (
    <>
      <Helmet>
        <title>Programmes de formation — School Leader Lab</title>
        <meta name="description" content="Découvrez les programmes certifiants de School Leader Lab : leadership pédagogique, Google Workspace for Education, gestion de crise. EIN 82-1581985. Washington, DC." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos programmes de formation</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Des parcours certifiants conçus par et pour les leaders éducatifs, ancrés dans la réalité du terrain américain.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Catalogue des formations" subtitle="School Leader Lab propose quatre programmes certifiants, chacun conçu pour répondre à des besoins spécifiques du leadership scolaire contemporain." />
          <div className="space-y-8">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary-50 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">{p.level}</span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Clock className="w-3 h-3" />{p.duration}</span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Monitor className="w-3 h-3" />{p.format}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{p.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{p.description}</p>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Modules du programme</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {p.modules.map((m, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Notre pédagogie</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Apprentissage collaboratif</h3>
                <p className="text-sm text-slate-600">Cohorts de 15 à 20 participants favorisant les échanges entre pairs et le partage de pratiques entre États.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Approche par compétences</h3>
                <p className="text-sm text-slate-600">Chaque module vise des compétences mesurables et directement applicables dans le contexte professionnel du participant.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Globe className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Outils numériques intégrés</h3>
                <p className="text-sm text-slate-600">Utilisation systématique de Google Workspace for Education, des tableaux de bord analytics et des plateformes de e-learning sécurisées.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics