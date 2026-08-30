import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { User, Mail, Phone, GraduationCap, Award, Building2 } from 'lucide-react'

const team = [
  { name: 'Dr. Margaret Chen', role: 'Directrice exécutive & Fondatrice', bio: 'Docteur en administration scolaire de l\'Université de Georgetown. 20 ans d\'expérience en tant que superintendent dans le Maryland. Fondatrice de School Leader Lab en 2018.', email: 'm.chen@schoolleaderlab.sbs' },
  { name: 'Robert Williams', role: 'Directeur des programmes pédagogiques', bio: 'Ancien directeur d\'école secondaire à Washington, DC. Expert en transformation numérique des établissements scolaires et partenariat Google for Education.', email: 'r.williams@schoolleaderlab.sbs' },
  { name: 'Dr. Fatima Al-Rashid', role: 'Responsable recherche & évaluation', bio: 'Ph.D. en sciences de l\'éducation de Stanford. Spécialiste de l\'analyse de données éducatives et de l\'évaluation des politiques publiques scolaires.', email: 'f.alrashid@schoolleaderlab.sbs' },
  { name: 'Michael O\'Brien', role: 'Directeur des admissions & relations alumni', bio: '15 ans d\'expérience dans le conseil en éducation supérieure. Pilote le développement du réseau alumni et les partenariats avec les districts scolaires.', email: 'm.obrien@schoolleaderlab.sbs' },
  { name: 'Dr. Lisa Park', role: 'Formatrice senior — Google Workspace', bio: 'Google Certified Trainer et ancienne CTO d\'un district scolaire de Virginie. Certifiée Google Workspace for Education Administrator.', email: 'l.park@schoolleaderlab.sbs' },
  { name: 'David Thompson', role: 'Conseiller juridique & conformité', bio: 'Avocat spécialisé en droit de l\'éducation. Supervise la conformité FERPA, COPPA et les relations avec le département de l\'Éducation des États-Unis.', email: 'd.thompson@schoolleaderlab.sbs' },
]

function Faculty() {
  return (
    <>
      <Helmet>
        <title>Équipe & Administration — School Leader Lab</title>
        <meta name="description" content="Découvrez l\'équipe de direction de School Leader Lab. Experts en leadership éducatif, administration scolaire et technologies éducatives. EIN 82-1581985." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Équipe & Administration</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Une équipe de professionnels expérimentés, passionnés par l\'excellence du leadership éducatif.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Direction & Corps professoral" subtitle="School Leader Lab rassemble des experts reconnus dans le domaine de l\'administration scolaire, de la pédagogie et des technologies éducatives." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4"><User className="w-8 h-8 text-primary-700" /></div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm text-primary-700 hover:text-primary-800"><Mail className="w-4 h-4 mr-1" />{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Organigramme institutionnel</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <GraduationCap className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Direction exécutive</p><p className="text-sm text-slate-600">Dr. Margaret Chen — Supervision stratégique et représentation institutionnelle</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Award className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Pôle pédagogique & recherche</p><p className="text-sm text-slate-600">Robert Williams & Dr. Fatima Al-Rashid — Conception des programmes et évaluation</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Building2 className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Pôle administratif & admissions</p><p className="text-sm text-slate-600">Michael O\'Brien & équipe — Admissions, relations alumni et conformité</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Phone className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Support & secrétariat</p><p className="text-sm text-slate-600">Disponible par email à <a href="mailto:admin@schoolleaderlab.sbs" className="text-primary-700 underline">admin@schoolleaderlab.sbs</a> ou par téléphone au <a href="tel:+12025551234" className="text-primary-700 underline">(202) 555-1234</a></p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faculty