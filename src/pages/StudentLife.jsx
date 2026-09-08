import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Users, Lightbulb, Globe, Heart, Trophy, Calendar } from 'lucide-react'

const activities = [
  { icon: Lightbulb, title: 'Club Innovation & STEM', desc: 'Ateliers hebdomadaires sur les technologies émergentes (robotique, codage, intelligence artificielle et réalité virtuelle). Les lycéens conçoivent des projets innovants et participent à des compétitions régionales.', image: '/images/classroom-lab.png' },
  { icon: Globe, title: 'Réseau Alumni University High', desc: 'Accès permanent à un réseau dynamique de diplômés intégrés dans les plus grandes universités. Rencontres d\'orientation, webinaires thématiques et conseils pour le parcours académique.', image: '/images/graduation-caps.png' },
  { icon: Heart, title: 'Mentorat et Tutorat entre Pairs', desc: 'Programme de parrainage où les élèves des classes supérieures accompagnent les nouveaux étudiants. Un suivi personnalisé pour favoriser la réussite scolaire et le bien-être au lycée.', image: '/images/leadership-meeting.png' },
  { icon: Trophy, title: 'Prix de l\'Excellence Scientifique', desc: 'Concours annuel récompensant les meilleurs projets de recherche et d\'innovation conçus par nos élèves. Bourses d\'études et opportunités de présentation devant un jury académique.', image: '/images/campus-modern.png' },
  { icon: Calendar, title: 'Symposium Annuel de Fresno', desc: 'Rendez-vous annuel réunissant élèves, enseignants, chercheurs et partenaires locaux à Fresno, CA. Conférences, ateliers pratiques et expositions de projets scientifiques.', image: '/images/workshop-conference.png' },
  { icon: Users, title: 'Clubs & Vie Associative', desc: 'Projets communautaires, clubs de débat, ateliers Google Workspace for Education et activités culturelles animés par et pour les élèves du lycée.', image: '/images/classroom-tech.png' },
]

function StudentLife() {
  return (
    <>
      <Helmet>
        <title>Vie lycéenne — University High School</title>
        <meta name="description" content="Découvrez la vie lycéenne à University High School : clubs STEM, réseau alumni, mentorat, projets scientifiques et vie de campus à Fresno, CA. EIN 77-0515663." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vie lycéenne</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">University High School offre un cadre stimulant où chaque élève peut développer son potentiel, s'engager dans des clubs passionnants et préparer son avenir.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Activités et projets lycéens" subtitle="Un écosystème riche en opportunités pour enrichir le parcours académique, développer le leadership et favoriser le travail d'équipe." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Témoignages de nos anciens élèves</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/graduation-ceremony.png" alt="Sarah Mitchell" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"Grâce aux cours AP et à l'accompagnement personnalisé à University High School, j'ai pu intégrer l'université de mon choix avec une solide préparation académique."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">Sarah Mitchell</p>
                <p className="text-slate-500">Alumni — Étudiante en Sciences de la Santé</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/graduation-group.png" alt="James Rodriguez" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"Le club STEM et l'utilisation quotidienne de Google Workspace for Education m'ont donné une longueur d'avance en informatique et en gestion de projets."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">James Rodriguez</p>
                <p className="text-slate-500">Alumni — Étudiant en Ingénierie</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/campus-classic.png" alt="Amina Johnson" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"L'ambiance au lycée est extrêmement encourageante. Les enseignants sont toujours disponibles pour nous guider, que ce soit pour les cours ou la préparation au SAT."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">Amina Johnson</p>
                <p className="text-slate-500">Alumni — Étudiante en Droit & Sciences Politiques</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentLife
