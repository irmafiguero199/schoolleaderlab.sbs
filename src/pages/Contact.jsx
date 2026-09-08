import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Shield, Globe, ExternalLink } from 'lucide-react'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — University High School</title>
        <meta name="description" content="Contactez University High School à Fresno, CA. Adresse : 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001. Email : admin@universityhighschool.sbs. EIN 77-0515663." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Notre équipe administrative est à votre disposition pour toute question concernant nos programmes académiques, les admissions ou nos services.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            
            {/* Coordonnées de contact */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary-700" /></div>
                  <div>
                    <p className="font-semibold text-slate-900">Adresse postale</p>
                    <p className="text-sm text-slate-600">2611 E Matoian Way Ms Uh 134<br />Fresno, CA 93740-0001<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary-700" /></div>
                  <div>
                    <p className="font-semibold text-slate-900">Téléphone</p>
                    <a href="tel:+13195555405" className="text-sm text-primary-700 hover:underline">+1 319-555-5405</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary-700" /></div>
                  <div>
                    <p className="font-semibold text-slate-900">Email institutionnel</p>
                    <a href="mailto:admin@universityhighschool.sbs" className="text-sm text-primary-700 hover:underline">admin@universityhighschool.sbs</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Globe className="w-5 h-5 text-primary-700" /></div>
                  <div>
                    <p className="font-semibold text-slate-900">Site Web officiel</p>
                    <a href="https://www.universityhighschool.sbs" className="text-sm text-primary-700 hover:underline inline-flex items-center gap-1">www.universityhighschool.sbs <ExternalLink className="w-3 h-3" /></a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary-700" /></div>
                  <div>
                    <p className="font-semibold text-slate-900">Horaires du secrétariat</p>
                    <p className="text-sm text-slate-600">Lundi — Vendredi : 8h00 — 16h00 (PST)<br />Samedi — Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations institutionnelles & Légales */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-primary-700" />
                  <h3 className="text-xl font-bold text-slate-900">Informations institutionnelles</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li><strong>Nom légal :</strong> University High School</li>
                  <li><strong>Nom commercial (DBA) :</strong> University High School</li>
                  <li><strong>EIN fédéral :</strong> 77-0515663</li>
                  <li><strong>Statut juridique :</strong> Organisation 501(c)(3) (Non-Profit)</li>
                  <li><strong>Localisation :</strong> Fresno, Californie, États-Unis</li>
                  <li><strong>Adresse :</strong> 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001</li>
                </ul>
              </div>

              <div className="p-6 border border-slate-200 rounded-xl bg-white text-xs text-slate-500 space-y-2">
                <p><strong>Remarque :</strong> University High School est une organisation éducative enregistrée auprès de l'Internal Revenue Service (IRS) sous le numéro EIN 77-0515663.</p>
                <p>Toutes les données et communications institutionnelles respectent les normes strictes de confidentialité FERPA et RGPD.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
