import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { MapPin, Calendar } from 'lucide-react'

const galleryItems = [
  { title: 'Cérémonie de certification 2026', location: 'Washington, DC', date: 'Juin 2026', category: 'Événements', image: '/images/graduation-ceremony.png' },
  { title: 'Atelier Google Workspace', location: 'Chicago, IL', date: 'Mars 2026', category: 'Formations', image: '/images/workshop-conference.png' },
  { title: 'Conférence annuelle SLL 2025', location: 'Washington, DC', date: 'Novembre 2025', category: 'Conférences', image: '/images/leadership-meeting.png' },
  { title: 'Session de mentorat en ligne', location: 'En ligne', date: 'Janvier 2026', category: 'Vie communautaire', image: '/images/classroom-tech.png' },
  { title: 'Visite de district scolaire', location: 'Austin, TX', date: 'Avril 2026', category: 'Partenariats', image: '/images/campus-modern.png' },
  { title: 'Hackathon Innovation Éducative', location: 'San Francisco, CA', date: 'Février 2026', category: 'STEM & Innovation', image: '/images/classroom-lab.png' },
]

function Gallery() {
  return (
    <>
      <Helmet>
        <title>Galerie — School Leader Lab</title>
        <meta name="description" content="Galerie photos et événements de School Leader Lab. Cérémonies de certification, ateliers, conférences. EIN 82-1581985." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerie</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Retour en images sur la vie de School Leader Lab et les moments forts de notre communauté.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Vie de l\'institution" subtitle="Événements, formations, cérémonies et moments de partage au sein de la communauté School Leader Lab." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <div key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">{item.category}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-1">{item.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery