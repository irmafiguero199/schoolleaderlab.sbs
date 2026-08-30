import { Helmet } from 'react-helmet-async'
import { Shield, Award, FileText, CheckCircle, ExternalLink, Download } from 'lucide-react'

function Accreditation() {
  return (
    <>
      <Helmet>
        <title>Agrément officiel & Statut légal — School Leader Lab</title>
        <meta name="description" content="Vérifiez le statut officiel de School Leader Lab. EIN fédéral 82-1581985. Organisation 501(c)(3) enregistrée à Washington, DC. Agrément Google for Education Partner." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agrément officiel & Statut légal</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Toutes les informations certifiant le statut officiel et l\'agrément de School Leader Lab.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4"><Shield className="w-8 h-8 text-green-700" /><h2 className="text-2xl font-bold text-green-900">Statut fédéral confirmé</h2></div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-green-700 font-medium mb-1">Employer Identification Number (EIN)</p>
                  <p className="text-2xl font-mono font-bold text-green-900">82-1581985</p>
                  <p className="text-sm text-green-600 mt-1">Numéro d\'identification fiscale délivré par l\'Internal Revenue Service (IRS) des États-Unis.</p>
                </div>
                <div>
                  <p className="text-sm text-green-700 font-medium mb-1">Statut juridique</p>
                  <p className="text-xl font-bold text-green-900">501(c)(3) — Organisation à but non lucratif</p>
                  <p className="text-sm text-green-600 mt-1">Reconnue par le département du Trésor américain comme organisation exemptée d\'impôts à des fins éducatives.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Award className="w-6 h-6 text-primary-700" />Informations de l\'organisation</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4">
                  <div><p className="font-medium text-slate-500">Nom légal complet</p><p className="text-slate-900 font-semibold">School Leader Lab</p></div>
                  <div><p className="font-medium text-slate-500">Nom commercial (DBA)</p><p className="text-slate-900">School Leader Lab</p></div>
                  <div><p className="font-medium text-slate-500">EIN / Numéro d\'enregistrement</p><p className="text-slate-900 font-mono">82-1581985</p></div>
                  <div><p className="font-medium text-slate-500">Année de fondation</p><p className="text-slate-900">2018</p></div>
                </div>
                <div className="space-y-4">
                  <div><p className="font-medium text-slate-500">Adresse administrative</p><p className="text-slate-900">PO Box 53232<br />Washington, DC 20009<br />United States</p></div>
                  <div><p className="font-medium text-slate-500">Email institutionnel</p><a href="mailto:admin@schoolleaderlab.sbs" className="text-primary-700 hover:underline">admin@schoolleaderlab.sbs</a></div>
                  <div><p className="font-medium text-slate-500">Téléphone</p><a href="tel:+12025551234" className="text-primary-700 hover:underline">(202) 555-1234</a></div>
                  <div><p className="font-medium text-slate-500">Domaine web officiel</p><a href="https://schoolleaderlab.sbs" className="text-primary-700 hover:underline inline-flex items-center gap-1">schoolleaderlab.sbs <ExternalLink className="w-3 h-3" /></a></div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-primary-700" />Accréditations & partenariats</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"><span className="text-blue-700 font-bold text-xs">GfE</span></div>
                  <div><h3 className="font-semibold text-slate-900">Google for Education Partner</h3><p className="text-sm text-slate-600">Partenaire officiel de Google for Education. Nous accompagnons les établissements scolaires dans le déploiement et l\'administration de Google Workspace for Education.</p></div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"><Shield className="w-5 h-5 text-primary-700" /></div>
                  <div><h3 className="font-semibold text-slate-900">Enregistrement fédéral IRS</h3><p className="text-sm text-slate-600">Organisation enregistrée auprès de l\'Internal Revenue Service sous le numéro EIN 82-1581985. Statut 501(c)(3) confirmé.</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><FileText className="w-6 h-6 text-primary-700" />Documents officiels</h2>
              <div className="space-y-3">
                {['Règlement intérieur de l\'organisation','Attestation de statut 501(c)(3)','Rapport d\'activité annuel 2025-2026'].map((doc,i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-primary-300 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <div><p className="font-medium text-slate-900">{doc}</p><p className="text-xs text-slate-500">PDF — Document officiel</p></div>
                    </div>
                    <button className="text-sm text-primary-700 font-medium flex items-center gap-1 hover:underline"><Download className="w-4 h-4" />Télécharger</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-slate-500">
              <p>School Leader Lab — EIN 82-1581985 — PO Box 53232, Washington, DC 20009, United States</p>
              <p className="mt-1">Pour toute vérification de statut, contactez-nous à <a href="mailto:admin@schoolleaderlab.sbs" className="text-primary-700 underline">admin@schoolleaderlab.sbs</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accreditation