import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { User, Mail, Phone, GraduationCap, Award, Building2 } from 'lucide-react'

const team = [
  { 
    name: 'Dr. Margaret Chen', 
    role: 'Directrice Générale & Principal', 
    bio: 'Docteur en administration scolaire de l\'Université de Californie. Plus de 20 ans d\'expérience dans la direction d\'établissements secondaires d\'excellence. Elle pilote la vision académique de University High School.', 
    email: 'm.chen@universityhighschool.sbs' 
  },
  { 
    name: 'Robert Williams', 
    role: 'Directeur des Études & Curriculums', 
    bio: 'Expert en ingénierie pédagogique et déploiement des programmes Advanced Placement (AP). Il coordonne l\'intégration des technologies Google for Education au sein des classes.', 
    email: 'r.williams@universityhighschool.sbs' 
  },
  { 
    name: 'Dr. Fatima Al-Rashid', 
    role: 'Responsable du Pôle STEM & MINT', 
    bio: 'Ph.D. en sciences de l\'éducation de Stanford. Spécialiste de la recherche en pédagogie des sciences, informatique et développement de la pensée critique chez les lycéens.', 
    email: 'f.alrashid@universityhighschool.sbs' 
  },
  { 
    name: 'Michael O\'Brien', 
    role: 'Directeur des Admissions & Orientation', 
    bio: 'Plus de 15 ans d\'expérience dans le conseil en admission universitaire (College Counseling). Il accompagne les élèves dans l\'obtention de bourses et la préparation aux tests SAT/ACT.', 
    email: 'm.obrien@universityhighschool.sbs' 
  },
  { 
    name: 'Dr. Lisa Park', 
    role: 'Coordonnatrice Numérique & Google Certified', 
    bio: 'Google Certified Trainer. Elle supervise l\'infrastructure informatique, la sécurité des données et le bon usage des outils numériques par les élèves et les enseignants.', 
    email: 'l.park@universityhighschool.sbs' 
  },
  { 
    name: 'David Thompson', 
    role: 'Responsable Conformité & Vie Scolaire', 
    bio: 'Juriste de formation, spécialisé en droit de l\'éducation. Il veille au respect des normes FERPA, COPPA et supervise l\'environnement éducatif et le bien-être des étudiants.', 
    email: 'd.thompson@universityhighschool.sbs' 
  },
]

function Faculty() {
  return (
    <>
      <Helmet>
        <title>Équipe & Administration — University High School</title>
        <meta name="description" content="Découvrez l'équipe de direction et le corps professoral de University High School à Fresno, CA. EIN 77-0515663." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Équipe & Administration</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Une équipe d'éducateurs passionnés et d'administrateurs chevrenés dédiés à la réussite de chaque élève.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Direction & Corps professoral" subtitle="University High School rassemble des experts reconnus dans l'enseignement secondaire, la préparation universitaire et l'innovation pédagogique." />
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
                <div><p className="font-semibold text-slate-900">Direction générale</p><p className="text-sm text-slate-600">Dr. Margaret Chen — Supervision stratégique et représentation institutionnelle</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Award className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Direction pédagogique & STEM</p><p className="text-sm text-slate-600">Robert Williams & Dr. Fatima Al-Rashid — Coordination des programmes AP et recherche</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Building2 className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Admissions & Orientation universitaire</p><p className="text-sm text-slate-600">Michael O'Brien & équipe — Admissions, accompagnement College Prep et conformité</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Phone className="w-6 h-6 text-primary-700" />
                <div><p className="font-semibold text-slate-900">Secrétariat & Support</p><p className="text-sm text-slate-600">Disponible par email à <a href="mailto:admin@universityhighschool.sbs" className="text-primary-700 underline">admin@universityhighschool.sbs</a> ou par téléphone au <a href="tel:+13195555405" className="text-primary-700 underline">+1 319-555-5405</a></p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faculty
