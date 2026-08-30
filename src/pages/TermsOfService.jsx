import { Helmet } from 'react-helmet-async'
import { FileText, Mail, MapPin } from 'lucide-react'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Conditions d\'utilisation — School Leader Lab</title>
        <meta name="description" content="Conditions d\'utilisation et règlement intérieur de School Leader Lab. EIN 82-1581985. Organisation 501(c)(3) à Washington, DC." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions d\'utilisation</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Règlement intérieur et conditions légales régissant l\'utilisation des services de School Leader Lab.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <div className="flex items-center gap-2 mb-2"><FileText className="w-5 h-5 text-primary-700" /><h2 className="text-lg font-bold text-slate-900 m-0">Informations légales</h2></div>
              <p className="text-sm text-slate-600 m-0"><strong>School Leader Lab</strong> — EIN 82-1581985 — Organisation 501(c)(3)<br /><MapPin className="w-4 h-4 inline mr-1" />PO Box 53232, Washington, DC 20009, United States<br /><Mail className="w-4 h-4 inline mr-1" /><a href="mailto:admin@schoolleaderlab.sbs" className="text-primary-700">admin@schoolleaderlab.sbs</a></p>
            </div>
            <h2>1. Objet</h2>
            <p>Les présentes conditions d\'utilisation régissent l\'accès et l\'utilisation des services proposés par School Leader Lab (EIN 82-1581985), organisation à but non lucratif 501(c)(3) enregistrée à Washington, DC, incluant : le site web schoolleaderlab.sbs, les programmes de formation en ligne et présentiels, les ressources pédagogiques et le réseau alumni.</p>
            <h2>2. Acceptation des conditions</h2>
            <p>En accédant au site ou en vous inscrivant à l\'un de nos programmes, vous acceptez sans réserve les présentes conditions. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser nos services.</p>
            <h2>3. Inscriptions et paiements</h2>
            <p>Les inscriptions aux programmes de School Leader Lab sont soumises aux conditions suivantes :</p>
            <ul>
              <li>Le participant doit être majeur et occuper (ou préparer) une fonction de leadership dans une institution éducative américaine.</li>
              <li>Les frais de formation sont indiqués sur la page du programme concerné et doivent être réglés avant le début des cours, sauf accord de bourse 501(c)(3).</li>
              <li>School Leader Lab se réserve le droit de refuser une inscription si les prérequis ne sont pas remplis.</li>
              <li>En cas d\'annulation par le participant plus de 30 jours avant le début du programme, un remboursement de 80% est accordé. Aucun remboursement n\'est possible en deçà de 30 jours.</li>
            </ul>
            <h2>4. Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur schoolleaderlab.sbs (textes, images, vidéos, supports de cours, logos) sont la propriété exclusive de School Leader Lab ou de ses partenaires. Toute reproduction, distribution ou utilisation commerciale sans autorisation écrite préalable est strictement interdite. Les participants bénéficient d\'une licence d\'utilisation personnelle et non exclusive des supports de formation.</p>
            <h2>5. Comportement des utilisateurs</h2>
            <p>Les participants s\'engagent à :</p>
            <ul>
              <li>Respecter les autres membres de la communauté et le corps professoral</li>
              <li>Ne pas diffuser de contenu illicite, diffamatoire ou portant atteinte aux droits d\'autrui</li>
              <li>Ne pas tenter d\'accéder de manière non autorisée aux systèmes informatiques de School Leader Lab</li>
              <li>Respecter la confidentialité des données partagées au sein des cohortes (clause de non-divulgation implicite)</li>
            </ul>
            <h2>6. Limitation de responsabilité</h2>
            <p>School Leader Lab décline toute responsabilité en cas de :</p>
            <ul>
              <li>Interruption temporaire du site pour maintenance technique</li>
              <li>Perte de données résultant d\'une défaillance technique indépendante de notre volonté</li>
              <li>Utilisation frauduleuse des identifiants de connexion par un tiers</li>
              <li>Dommages indirects liés à l\'utilisation de nos services</li>
            </ul>
            <h2>7. Modification des conditions</h2>
            <p>School Leader Lab se réserve le droit de modifier les présentes conditions à tout moment. Les modifications prendront effet dès leur publication sur cette page. Il est conseillé de consulter régulièrement cette page.</p>
            <h2>8. Droit applicable et juridiction</h2>
            <p>Les présentes conditions sont régies par le droit fédéral des États-Unis et le droit de l\'État de Washington, DC. Tout litige relatif à l\'interprétation ou à l\'exécution des présentes conditions relèvera de la compétence exclusive des tribunaux de Washington, DC.</p>
            <h2>9. Contact</h2>
            <p>Pour toute question relative aux présentes conditions, contactez School Leader Lab :</p>
            <ul>
              <li>Par email : <a href="mailto:admin@schoolleaderlab.sbs">admin@schoolleaderlab.sbs</a></li>
              <li>Par courrier : PO Box 53232, Washington, DC 20009, United States</li>
              <li>Par téléphone : <a href="tel:+12025551234">(202) 555-1234</a></li>
            </ul>
            <p className="text-sm text-slate-500 mt-8">Dernière mise à jour : 30 août 2026 — School Leader Lab, EIN 82-1581985, PO Box 53232, Washington, DC 20009.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService