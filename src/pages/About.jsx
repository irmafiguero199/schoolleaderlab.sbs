import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Target, Eye, Heart, Shield, Award, Calendar } from 'lucide-react'

const timeline = [
  { year: '2018', title: 'Fondation', desc: 'Création de School Leader Lab à Washington, DC, avec pour mission de combler le déficit de formation continue des leaders éducatifs.' },
  { year: '2019', title: 'Première certification', desc: 'Lancement du programme de certification en leadership pédagogique avancé, accrédité par les autorités de tutelle de l\'État de Washington.' },
  { year: '2020', title: 'Partenariat Google', desc: 'Obtention du statut de partenaire Google for Education et lancement des formations à l\'administration de Google Workspace.' },
  { year: '2022', title: 'Expansion nationale', desc: 'Déploiement des programmes dans 30 États américains. Plus de 500 leaders éducatifs certifiés.' },
  { year: '2024', title: 'Agrément fédéral', desc: 'Obtention de l\'EIN fédéral 82-1581985 et reconnaissance officielle comme organisation 501(c)(3) à but non lucratif.' },
  { year: '2026', title: 'Leader national', desc: 'School Leader Lab compte plus de 1 200 alumni dans 48 États, devenant une référence nationale en formation de leaders scolaires.' },
]

const values = [
  { icon: Target, title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque programme, chaque atelier et chaque accompagnement personnalisé.' },
  { icon: Eye, title: 'Innovation', desc: 'Intégration des outils numériques les plus récents, dont Google Workspace for Education, pour préparer les leaders aux défis actuels.' },
  { icon: Heart, title: 'Accessibilité', desc: 'Nous croyons que chaque école, quelle que soit sa taille ou son budget, mérite des leaders bien formés.' },
  { icon: Shield, title: 'Intégrité', desc: 'Transparence totale sur notre statut, nos agréments (EIN 82-1581985) et nos résultats.' },
]

function About() {
  return (
    <>
      <Helmet>
        <title>À propos — School Leader Lab</title>
        <meta name="description" content="Découvrez l\'histoire de School Leader Lab, institution américaine fondée en 2018 à Washington, DC. EIN 82-1581985. Organisation 501(c)(3) dédiée au leadership éducatif." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de School Leader Lab</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Institution américaine accréditée dédiée au développement professionnel des leaders éducatifs depuis 2018.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">School Leader Lab a été fondée en 2018 à Washington, DC, par un collectif de directeurs d\'école, chercheurs en éducation et administrateurs scolaires convaincus que la qualité du leadership est le facteur déterminant de la réussite éducative.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Face à un système éducatif américain en mutation profonde, nous avons identifié un besoin critique : offrir aux leaders scolaires des formations continues de haut niveau, ancrées dans la réalité du terrain et enrichies par les meilleures pratiques nationales.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Depuis notre création, nous avons formé plus de 1 200 professionnels dans 48 États américains. Notre organisation, enregistrée sous l\'EIN fédéral <strong>82-1581985</strong>, est reconnue comme organisation à but non lucratif 501(c)(3) par l\'Internal Revenue Service.</p>
                <p className="text-slate-600 leading-relaxed">Notre siège administratif est situé au <strong>PO Box 53232, Washington, DC 20009, United States</strong>. Nous opérons principalement en mode hybride, combinant formations en ligne et sessions résidentielles dans nos centres partenaires à travers le pays.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="/images/campus-classic.png" alt="Campus School Leader Lab" className="w-full h-56 object-cover" />
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Informations institutionnelles</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Nom légal :</span><p className="text-slate-600">School Leader Lab</p></div></li>
                  <li className="flex items-start gap-3"><Award className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">EIN fédéral :</span><p className="text-slate-600 font-mono">82-1581985</p></div></li>
                  <li className="flex items-start gap-3"><Calendar className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Année de fondation :</span><p className="text-slate-600">2018</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Statut juridique :</span><p className="text-slate-600">Organisation 501(c)(3) à but non lucratif</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Adresse administrative :</span><p className="text-slate-600">PO Box 53232, Washington, DC 20009, United States</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Domaine officiel :</span><p className="text-slate-600">schoolleaderlab.sbs</p></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <SectionHeader title="Nos valeurs fondamentales" subtitle="Les principes qui guident chacune de nos actions et chacun de nos programmes." />
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
          <SectionHeader title="Notre parcours" subtitle="Les étapes clés qui ont façonné School Leader Lab depuis sa fondation en 2018." />
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
              <img src="/images/school-exterior.png" alt="Établissement partenaire School Leader Lab" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre impact national</h2>
              <p className="text-slate-600 leading-relaxed mb-6">De la côte Est à la côte Ouest, School Leader Lab accompagne les leaders éducatifs dans leur mission de transformation. Nos programmes ont été déployés dans des établissements urbains, ruraux et suburbains, adaptés aux réalités de chaque district.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Nous collaborons étroitement avec le département de l\'Éducation des États-Unis et maintenons des partenariats actifs avec plus de 80 districts scolaires à travers le pays.</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">48</div>
                  <div className="text-xs text-slate-500">États</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">80+</div>
                  <div className="text-xs text-slate-500">Districts</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">1,200+</div>
                  <div className="text-xs text-slate-500">Alumni</div>
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