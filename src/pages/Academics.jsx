import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { BookOpen, Monitor, Users, BarChart3, Globe, Clock, CheckCircle, GraduationCap } from 'lucide-react'

const programs = [
  {
    title: 'Curriculum Pré-Universitaire & Advanced Placement (AP)', level: 'Grades 9 — 12', duration: '4 ans', format: 'Présentiel',
    description: 'Programme académique rigoureux préparant les élèves aux exigences de l\'enseignement supérieur. Inclut un large choix de cours Advanced Placement (AP) reconnus par les universités les plus prestigieuses.',
    modules: ['Mathématiques avancées & Calcul (AP Calculus)', 'Sciences expérimentales (AP Physics, AP Chemistry)', 'Littérature anglaise & Composition', 'Histoire américaine & Sciences politiques', 'Langues vivantes étrangères'],
  },
  {
    title: 'Programme de MINT / STEM & Innovation Numérique', level: 'Tous niveaux', duration: 'Continu', format: 'Présentiel & Lab',
    description: 'Formation axée sur les sciences, technologies, ingénierie et mathématiques. Intègre les outils numériques modernes dont Google Workspace for Education pour développer la pensée critique et la résolution de problèmes.',
    modules: ['Informatique & Algorithmique (AP Computer Science)', 'Robotique & Modélisation', 'Analyse de données & Statistiques', 'Projets d\'innovation technologique', 'Prototypage & Laboratoire numérique'],
  },
  {
    title: 'Arts, Humanités & Expression Scientifique', level: 'Grades 9 — 12', duration: '4 ans', format: 'Présentiel',
    description: 'Parcours équilibré favorisant le développement intellectuel, la créativité et la communication interpersonnelle, piliers essentiels pour réussir dans les grandes universités.',
    modules: ['Arts visuels & Histoire de l\'art', 'Musique & Théâtre', 'Philosophie & Éthique des sciences', 'Débat & Éloquence', 'Rédaction académique & Recherche'],
  },
  {
    title: 'Accompagnement & Orientation Universitaire', level: 'Grades 11 — 12', duration: '2 ans', format: 'Accompagnement personnalisé',
    description: 'Programme d\'orientation sur-mesure accompagnant chaque élève dans la préparation des dossiers d\'admission universitaire, tests SAT/ACT et recherche de bourses d\'études.',
    modules: ['Préparation aux tests standardisés (SAT / ACT)', 'Rédaction des lettres de motivation (College Essays)', 'Sélection des universités & Procédures d\'admission', 'Gestion des dossiers de bourses d\'études', 'Ateliers d\'entretiens universitaires'],
  },
]

function Academics() {
  return (
    <>
      <Helmet>
        <title>Programmes académiques — University High School</title>
        <meta name="description" content="Découvrez les programmes académiques de University High School à Fresno, CA : AP, STEM, Orientation universitaire. EIN 77-0515663." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos programmes académiques</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Un enseignement pré-universitaire d'excellence conçu pour développer le potentiel de chaque élève.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Catalogue des programmes" subtitle="University High School propose une offre pédagogique complète, alliant rigueur académique, innovation technologique et accompagnement personnalisé." />
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
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Composantes du programme</h3>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Notre approche pédagogique</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Suivi individualisé</h3>
                <p className="text-sm text-slate-600">Classes à effectifs réduits garantissant une attention particulière et un accompagnement adapté à chaque étudiant.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Rigueur & Excellence</h3>
                <p className="text-sm text-slate-600">Évaluation continue basée sur les standards universitaires américains pour garantir une préparation optimale.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Globe className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Environnement numérique</h3>
                <p className="text-sm text-slate-600">Utilisation intégrée de Google Workspace for Education et des outils numériques de recherche académique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics
