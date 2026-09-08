import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Calendar, CheckCircle, Send, User, Mail, GraduationCap, MessageSquare } from 'lucide-react'

const steps = [
  { step: 1, title: 'Vérification des prérequis', desc: 'Vérifiez les critères d\'admission pour la classe concernée et préparez les relevés de notes des années précédentes.' },
  { step: 2, title: 'Pré-inscription en ligne', desc: 'Complétez le formulaire de pré-inscription ci-dessous avec les informations de l\'élève et des parents/tuteurs.' },
  { step: 3, title: 'Entretien et évaluation', desc: 'Un entretien de motivation et un test d\'évaluation académique pour mieux connaître le profil de l\'élève.' },
  { step: 4, title: 'Admission et inscription', desc: 'Réception de la confirmation d\'admission et finalisation du dossier administratif auprès du secrétariat.' },
]

function Admissions() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', previousSchool: '', currentGrade: '', requestedGrade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      <Helmet>
        <title>Admissions — University High School</title>
        <meta name="description" content="Procédure d'admission et pré-inscription à University High School (Fresno, CA). Critères d'admission et calendrier scolaire 2026-2027. EIN 77-0515663." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Inscrivez votre enfant à University High School et rejoignez une communauté éducative d'excellence à Fresno, CA.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Processus d'admission" subtitle="Quatre étapes simples pour rejoindre University High School." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative p-6 rounded-xl border border-slate-200 bg-white">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Calendrier des admissions 2026-2027</h2>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-100">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div><p className="font-medium text-slate-900">Rentrée d'automne 2026</p><p className="text-sm text-slate-500">Début des cours : 15 septembre 2026</p></div>
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Inscriptions ouvertes</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div><p className="font-medium text-slate-900">Session d'hiver 2027</p><p className="text-sm text-slate-500">Début des cours : 12 janvier 2027</p></div>
                  </div>
                  <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Prochainement</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    <div><p className="font-medium text-slate-900">Session de printemps 2027</p><p className="text-sm text-slate-500">Début des cours : 6 avril 2027</p></div>
                  </div>
                  <span className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full">À venir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="Formulaire de pré-inscription" subtitle="Complétez ce formulaire pour démarrer votre candidature. Notre équipe vous contactera sous 48 heures ouvrées." />
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Candidature envoyée</h3>
                <p className="text-green-700">Merci pour votre intérêt. Nous avons bien reçu votre pré-inscription et nous vous contacterons à l'adresse <strong>{formData.email}</strong> sous 48 heures ouvrées.</p>
                <p className="text-sm text-green-600 mt-4">University High School — EIN 77-0515663 — 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Prénom de l'élève</label>
                    <div className="relative"><User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nom de l'élève</label>
                    <div className="relative"><User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email du responsable légal</label>
                  <div className="relative"><Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Établissement précédent</label>
                  <div className="relative"><GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input type="text" name="previousSchool" required value={formData.previousSchool} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Niveau actuel</label>
                    <input type="text" name="currentGrade" required value={formData.currentGrade} onChange={handleChange} placeholder="Ex: 8th Grade / 3ème" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Niveau demandé</label>
                    <select name="requestedGrade" required value={formData.requestedGrade} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
                      <option value="">Sélectionnez un niveau</option>
                      <option value="9th">9th Grade (Freshman)</option>
                      <option value="10th">10th Grade (Sophomore)</option>
                      <option value="11th">11th Grade (Junior)</option>
                      <option value="12th">12th Grade (Senior)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message (optionnel)</label>
                  <div className="relative"><MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
                  </div>
                </div>
                <button type="submit" className="w-full btn-primary justify-center"><Send className="w-4 h-4 mr-2" />Envoyer ma pré-inscription</button>
                <p className="text-xs text-slate-500 text-center">University High School — EIN 77-0515663 — Les données sont traitées conformément à notre <a href="/privacy-policy" className="underline">politique de confidentialité</a>.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Admissions
