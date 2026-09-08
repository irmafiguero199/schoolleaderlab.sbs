import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Target, Eye, Heart, Shield, Award, Calendar } from 'lucide-react'

const timeline = [
  { year: '1999', title: 'Fondation', desc: 'Création de University High School à Fresno, Californie, avec pour mission d\'offrir une éducation pré-universitaire d\'excellence.' },
  { year: '2005', title: 'Accréditation officielle', desc: 'Obtention de l\'accréditation par la Western Association of Schools and Colleges (WASC).' },
  { year: '2012', title: 'Partenariat Google', desc: 'Adoption précoce des technologies éducatives et partenariat officiel Google for Education.' },
  { year: '2018', title: 'Excellence académique', desc: 'Classement parmi les meilleures écoles secondaires de l\'État de Californie grâce à des résultats exceptionnels au SAT et Advanced Placement (AP).' },
  { year: '2022', title: 'Reconnaissance fédérale', desc: 'Confirmation du statut d\'organisation à but non lucratif 501(c)(3) sous l\'EIN 77-0515663.' },
  { year: '2026', title: 'Innovation continue', desc: 'University High School continue de former les futurs leaders de demain avec plus de 1 200 diplômés admis dans les meilleures universités.' },
]

const values = [
  { icon: Target, title: 'Excellence', desc: 'Nous visons l\'excellence académique à travers un programme rigoureux préparant directement à l\'enseignement supérieur.' },
  { icon: Eye, title: 'Innovation', desc: 'Intégration des technologies modernes, dont Google Workspace for Education, pour enrichir l\'apprentissage au quotidien.' },
  { icon: Heart, title: 'Engagement', desc: 'Accompagnement personnalisé de chaque élève pour développer son potentiel intellectuel et humain.' },
  { icon: Shield, title: 'Intégrité', desc: 'Transparence totale sur notre statut juridique, nos agréments (EIN 77-0515663) et nos résultats académiques.' },
]

function About() {
  return (
    <>
      <Helmet>
        <title>À propos — University High School</title>
        <meta name="description" content="Découvrez l'histoire de University High School à Fresno, CA. EIN 77-0515663. Institution éducative 501(c)(3) dédiée à l'excellence académique." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de University High School</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Institution éducative américaine accréditée dédiée à l'excellence académique et à la préparation universitaire.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">University High School a été fondée à Fresno, en Californie, par un collectif d'éducateurs et d'universitaires convaincus qu'une préparation académique rigoureuse est le pilier fondamental de la réussite dans l'enseignement supérieur.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Notre établissement offre un environnement d'apprentissage stimulant, combinant un programme d'études secondaires exigeant et un développement personnel axé sur la responsabilité, le leadership et la pensée critique.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Notre organisation est enregistrée sous l'EIN fédéral <strong>77-0515663</strong> et reconnue comme organisation à but non lucratif 501(c)(3) par l'Internal Revenue Service (IRS).</p>
                <p className="text-slate-600 leading-relaxed">Notre campus principal est situé au <strong>2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States</strong>.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="/images/campus-classic.png" alt="Campus University High School" className="w-full h-56 object-cover" />
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Informations institutionnelles</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Nom légal :</span><p className="text-slate-600">University High School</p></div></li>
                  <li className="flex items-start gap-3"><Award className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">EIN fédéral :</span><p className="text-slate-600 font-mono">77-0515663</p></div></li>
                  <li className="flex items-start gap-3"><Calendar className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Localisation :</span><p className="text-slate-600">Fresno, Californie, USA</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Statut juridique :</span><p className="text-slate-600">Organisation 501(c)(3) à but non lucratif</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Adresse administrative :</span><p className="text-slate-600">2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Domaine officiel :</span><p className="text-slate-600">universityhighschool.sbs</p></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <SectionHeader title="Nos valeurs fondamentales" subtitle="Les principes qui guident la vie académique et le développement de nos élèves." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4"><v.icon className="w-5 h-5 text-primary-700" /></div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Notre parcours" subtitle="Les grandes étapes du développement de University High School." />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8 last:pb-0 border-l-2 border-primary-200 last:border-transparent">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full mb-2">{item.year}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/images/school-exterior.png" alt="Campus University High School" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre rayonnement académique</h2>
              <p className="text-slate-600 leading-relaxed mb-6">University High School se distingue par des taux de réussite exceptionnels et une préparation rigoureuse aux études supérieures. Nos diplômés intègrent régulièrement les plus prestigieuses universités américaines.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Grâce à notre environnement d'apprentissage moderne et nos partenariats avec les acteurs éducatifs majeurs, nous préparons nos élèves à devenir des citoyens actifs et des leaders engagés.</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">100%</div>
                  <div className="text-xs text-slate-500">Accrédité WASC</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">98%</div>
                  <div className="text-xs text-slate-500">Admission Univ.</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">1,200+</div>
                  <div className="text-xs text-slate-500">Élèves & Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
