import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Users, Lightbulb, Globe, Heart, Trophy, Calendar } from 'lucide-react'

const activities = [
  { icon: Lightbulb, title: 'Club Innovation & STEM', desc: 'Ateliers mensuels sur l\'intégration des technologies émergentes (IA éducative, robotique pédagogique, réalité virtuelle) dans les curricula scolaires. Les participants développent des projets pilotes pour leurs établissements respectifs.', image: '/images/classroom-lab.png' },
  { icon: Globe, title: 'Réseau Alumni International', desc: 'Accès à vie à notre réseau de plus de 1 200 leaders éducatifs. Événements de networking trimestriels, webinaires thématiques et groupes de travail par région géographique.', image: '/images/graduation-caps.png' },
  { icon: Heart, title: 'Mentorat Pair-à-Pair', desc: 'Programme de mentorat entre alumni expérimentés et nouveaux participants. Chaque cohorte bénéficie d\'un parrainage personnalisé pendant les 12 premiers mois post-certification.', image: '/images/leadership-meeting.png' },
  { icon: Trophy, title: 'Prix de l\'Innovation Éducative', desc: 'Concours annuel récompensant les meilleurs projets de transformation scolaire mis en œuvre par nos alumni. Dotation de 10 000 $ et visibilité nationale dans la presse spécialisée.', image: '/images/campus-modern.png' },
  { icon: Calendar, title: 'Conférence Annuelle SLL', desc: 'Rendez-vous annuel à Washington, DC, réunissant leaders éducatifs, chercheurs et décideurs politiques. Keynotes, ateliers pratiques et tables rondes sur l\'avenir de l\'éducation américaine.', image: '/images/workshop-conference.png' },
  { icon: Users, title: 'Communautés d\'apprentissage', desc: 'Groupes thématiques en ligne (Google Workspace for Education, gestion de crise, équité scolaire) animés par nos formateurs et ouverts à tous les participants et alumni.', image: '/images/classroom-tech.png' },
]

function StudentLife() {
  return (
    <>
      <Helmet>
        <title>Vie de la communauté — School Leader Lab</title>
        <meta name="description" content="Découvrez la vie de la communauté School Leader Lab : clubs, réseau alumni, mentorat, conférences. EIN 82-1581985. Washington, DC." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vie de la communauté</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">School Leader Lab, c\'est bien plus qu\'une formation : c\'est une communauté de leaders engagés dans la transformation de l\'éducation américaine.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Activités et projets" subtitle="Nos participants et alumni bénéficient d\'un écosystème riche d\'opportunités de développement professionnel continu." />
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
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Témoignages de nos alumni</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/graduation-ceremony.png" alt="Dr. Sarah Mitchell" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"La certification de School Leader Lab a transformé ma façon de diriger mon école. Le module sur Google Workspace nous a permis de digitaliser 100% de nos processus administratifs."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">Dr. Sarah Mitchell</p>
                <p className="text-slate-500">Directrice, Lincoln High School, Chicago</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/graduation-group.png" alt="James Rodriguez" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"Le réseau alumni est une mine d\'or. Quand j\'ai dû gérer ma première crise sanitaire, j\'ai pu compter sur l\'aide de 3 anciens participants en moins d\'une heure."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">James Rodriguez</p>
                <p className="text-slate-500">Superintendent, Austin Independent School District</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img src="/images/campus-classic.png" alt="Dr. Amina Johnson" className="w-full h-full object-cover" />
              </div>
              <p className="text-slate-600 italic mb-4 text-center">"L\'approche data-driven m\'a donné les outils pour convaincre mon conseil scolaire d\'investir dans les programmes de soutien. Résultat : +15% de réussite en un an."</p>
              <div className="text-sm text-center">
                <p className="font-semibold text-slate-900">Dr. Amina Johnson</p>
                <p className="text-slate-500">Principal, Roosevelt Elementary, Atlanta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentLife