import { Helmet } from 'react-helmet-async'
import { Shield, Mail, MapPin } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité — School Leader Lab</title>
        <meta name="description" content="Politique de confidentialité de School Leader Lab. Protection des données des participants conforme au FERPA et aux standards fédéraux. EIN 82-1581985." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">School Leader Lab s\'engage à protéger vos données personnelles conformément aux lois fédérales américaines.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <div className="flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-primary-700" /><h2 className="text-lg font-bold text-slate-900 m-0">Responsable du traitement</h2></div>
              <p className="text-sm text-slate-600 m-0"><strong>School Leader Lab</strong> — EIN 82-1581985<br /><MapPin className="w-4 h-4 inline mr-1" />PO Box 53232, Washington, DC 20009, United States<br /><Mail className="w-4 h-4 inline mr-1" /><a href="mailto:admin@schoolleaderlab.sbs" className="text-primary-700">admin@schoolleaderlab.sbs</a></p>
            </div>
            <h2>1. Introduction</h2>
            <p>La présente politique de confidentialité décrit comment School Leader Lab (EIN 82-1581985), organisation à but non lucratif 501(c)(3) basée à Washington, DC, collecte, utilise et protège les informations personnelles de ses participants, visiteurs et partenaires.</p>
            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Données d\'identification</strong> : nom, prénom, adresse email professionnelle, numéro de téléphone</li>
              <li><strong>Données professionnelles</strong> : établissement de rattachement, fonction, district scolaire</li>
              <li><strong>Données de formation</strong> : parcours suivi, résultats d\'évaluation, certificats obtenus</li>
              <li><strong>Données de navigation</strong> : adresse IP, cookies, pages visitées sur schoolleaderlab.sbs</li>
            </ul>
            <h2>3. Finalités du traitement</h2>
            <p>Les données sont traitées pour les finalités suivantes :</p>
            <ul>
              <li>Gestion des inscriptions et du suivi pédagogique</li>
              <li>Délivrance des certifications et gestion du réseau alumni</li>
              <li>Communication institutionnelle et envoi d\'informations sur nos programmes</li>
              <li>Amélioration de nos services et analyse statistique anonymisée</li>
              <li>Conformité aux obligations légales et réglementaires (FERPA, IRS)</li>
            </ul>
            <h2>4. Base légale du traitement</h2>
            <p>Le traitement des données repose sur :</p>
            <ul>
              <li>L\'exécution du contrat de formation (inscription à nos programmes)</li>
              <li>L\'intérêt légitime de l\'organisation à but non lucratif (EIN 82-1581985)</li>
              <li>Les obligations légales (conservation des registres fiscaux et éducatifs)</li>
              <li>Le consentement explicite pour les communications marketing</li>
            </ul>
            <h2>5. Protection des données des mineurs</h2>
            <p>School Leader Lab ne collecte pas intentionnellement de données personnelles concernant des mineurs de moins de 13 ans. Nos programmes s\'adressent exclusivement à des professionnels de l\'éducation (adultes). Si des données relatives à des élèves sont mentionnées dans le cadre d\'études de cas, elles sont systématiquement anonymisées.</p>
            <h2>6. Durée de conservation</h2>
            <p>Les données sont conservées pendant la durée nécessaire aux finalités poursuivies :</p>
            <ul>
              <li>Données de formation : 10 ans après la dernière certification (obligations fiscales et de traçabilité)</li>
              <li>Données de contact : 3 ans après le dernier contact actif</li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>
            <h2>7. Vos droits</h2>
            <p>Conformément aux lois applicables, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d\'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l\'effacement (droit à l\'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d\'opposition au traitement à des fins de marketing</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à <a href="mailto:admin@schoolleaderlab.sbs">admin@schoolleaderlab.sbs</a> ou par courrier à PO Box 53232, Washington, DC 20009.</p>
            <h2>8. Sécurité des données</h2>
            <p>School Leader Lab met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement SSL, authentification à deux facteurs, accès restreint aux données sensibles, audits réguliers de sécurité.</p>
            <h2>9. Cookies</h2>
            <p>Notre site schoolleaderlab.sbs utilise des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques (Google Analytics) pour améliorer l\'expérience utilisateur. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.</p>
            <h2>10. Modifications de la politique</h2>
            <p>School Leader Lab se réserve le droit de modifier la présente politique. Toute modification substantielle sera notifiée par email aux utilisateurs inscrits et publiée sur cette page avec la date de mise à jour.</p>
            <p className="text-sm text-slate-500 mt-8">Dernière mise à jour : 30 août 2026 — School Leader Lab, EIN 82-1581985, PO Box 53232, Washington, DC 20009.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy