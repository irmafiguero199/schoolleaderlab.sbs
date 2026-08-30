import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Shield } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      <Helmet>
        <title>Contact — School Leader Lab</title>
        <meta name="description" content="Contactez School Leader Lab. Adresse : PO Box 53232, Washington, DC 20009. Email : admin@schoolleaderlab.sbs. Téléphone : (202) 555-1234. EIN 82-1581985." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Notre équipe est à votre disposition pour toute question sur nos programmes, nos admissions ou nos partenariats.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-700" /></div>
                    <div><p className="font-semibold text-slate-900">Adresse postale</p><p className="text-sm text-slate-600">PO Box 53232<br />Washington, DC 20009<br />United States</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary-700" /></div>
                    <div><p className="font-semibold text-slate-900">Téléphone</p><a href="tel:+12025551234" className="text-sm text-primary-700 hover:underline">(202) 555-1234</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary-700" /></div>
                    <div><p className="font-semibold text-slate-900">Email</p><a href="mailto:admin@schoolleaderlab.sbs" className="text-sm text-primary-700 hover:underline">admin@schoolleaderlab.sbs</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary-700" /></div>
                    <div><p className="font-semibold text-slate-900">Horaires du secrétariat</p><p className="text-sm text-slate-600">Lundi — Vendredi : 9h00 — 17h00 (EST)<br />Samedi — Dimanche : Fermé</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-3"><Shield className="w-5 h-5 text-primary-700" /><h3 className="font-semibold text-slate-900">Informations institutionnelles</h3></div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong>Nom légal :</strong> School Leader Lab</li>
                  <li><strong>EIN fédéral :</strong> 82-1581985</li>
                  <li><strong>Statut :</strong> Organisation 501(c)(3)</li>
                  <li><strong>Adresse :</strong> PO Box 53232, Washington, DC 20009</li>
                  <li><strong>Domaine :</strong> schoolleaderlab.sbs</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé</h3>
                  <p className="text-green-700">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais à l\'adresse <strong>{formData.email}</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-slate-200 space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Sujet</label><input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1">Message</label><textarea name="message" rows="6" required value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea></div>
                  <button type="submit" className="btn-primary"><Send className="w-4 h-4 mr-2" />Envoyer le message</button>
                  <p className="text-xs text-slate-500">School Leader Lab — EIN 82-1581985 — PO Box 53232, Washington, DC 20009. Conforme au RGPD et au FERPA.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact