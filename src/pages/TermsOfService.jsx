import { Helmet } from 'react-helmet-async'
import { FileText, Mail, MapPin } from 'lucide-react'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Conditions d'utilisation — University High School</title>
        <meta name="description" content="Conditions d'utilisation et règlement intérieur de University High School à Fresno, CA. EIN 77-0515663. Établissement d'enseignement secondaire 501(c)(3)." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions d'utilisation</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Règlement intérieur et conditions légales régissant l'utilisation des services et de la plateforme numérique de University High School.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <div className="flex items-center gap-2 mb-2"><FileText className="w-5 h-5 text-primary-700" /><h2 className="text-lg font-bold text-slate-900 m-0">Informations légales</h2></div>
              <p className="text-sm text-slate-600 m-0"><strong>University High School</strong> — EIN 77-0515663 — Organisation 501(c)(3)<br /><MapPin className="w-4 h-4 inline mr-1" />2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States<br /><Mail className="w-4 h-4 inline mr-1" /><a href="mailto:admin@universityhighschool.sbs" className="text-primary-700">admin@universityhighschool.sbs</a></p>
            </div>
            <h2>1. Objet</h2>
            <p>Les présentes conditions d'utilisation régissent l'accès et l'utilisation des services proposés par University High School (EIN 77-0515663), établissement d'enseignement secondaire à but non lucratif 501(c)(3) situé à Fresno, Californie, incluant : le site web universityhighschool.sbs, le portail numérique Google Workspace for Education, les services d'inscription et l'accès aux ressources pédagogiques.</p>
            <h2>2. Acceptation des conditions</h2>
            <p>En accédant au site web ou en utilisant les services numériques de l'établissement, les élèves, parents, tuteurs et visiteurs acceptent sans réserve les présentes conditions ainsi que le règlement intérieur de l'école.</p>
            <h2>3. Inscriptions et scolarité</h2>
            <p>L'admission et l'inscription des élèves à University High School sont soumises aux conditions suivantes :</p>
            <ul>
              <li>L'élève doit remplir les conditions d'admissibilité académiques et administratives requises par l'établissement et l'État de Californie.</li>
              <li>Les dossiers d'inscription et de réinscription doivent être complétés et validés par les responsables légaux avant les dates limites fixées.</li>
              <li>University High School se réserve le droit de refuser ou d'annuler une inscription en cas de non-respect des prérequis ou d'informations inexactes fournies dans le dossier.</li>
              <li>Toute annulation d'inscription ou demande de transfert doit être notifiée par écrit à l'administration de l'établissement.</li>
            </ul>
            <h2>4. Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur universityhighschool.sbs (textes, images, ressources pédagogiques, logos, vidéos) sont la propriété exclusive de University High School ou de ses ayants droit. Toute reproduction, distribution ou utilisation à des fins commerciales sans autorisation préalable écrite est strictement interdite. Les élèves et le corps enseignant bénéficient d'une licence d'utilisation personnelle et éducative des supports pédagogiques mis à disposition.</p>
            <h2>5. Utilisation des services numériques et comportement</h2>
            <p>Les utilisateurs des services en ligne et du réseau de l'établissement s'engagent à :</p>
            <ul>
              <li>Utiliser les comptes Google Workspace for Education et le réseau scolaire uniquement à des fins éducatives.</li>
              <li>Respecter la charte informatique de l'établissement, les camarades, le corps professoral et le personnel administratif.</li>
              <li>Ne pas diffuser de contenus illicites, diffamatoires, ou portant atteinte au droit à l'image ou à la vie privée d'autrui (cyberharcèlement).</li>
              <li>Maintenir la confidentialité de leurs identifiants de connexion et ne pas tenter d'accéder de manière non autorisée aux systèmes d'information.</li>
            </ul>
            <h2>6. Limitation de responsabilité</h2>
            <p>University High School met tout en œuvre pour assurer l'accès continu et sécurisé à sa plateforme numérique, mais décline toute responsabilité en cas de :</p>
            <ul>
              <li>Interruption temporaire du site web ou du portail pour des raisons de maintenance technique.</li>
              <li>Dysfonctionnement du réseau Internet indépendant de la volonté de l'établissement.</li>
              <li>Utilisation non autorisée des identifiants résultant d'une négligence de l'utilisateur.</li>
            </ul>
            <h2>7. Modification des conditions</h2>
            <p>University High School se réserve le droit de modifier les présentes conditions d'utilisation à tout moment pour se conformer aux évolutions légales ou administratives. Les modifications prennent effet dès leur publication sur cette page.</p>
            <h2>8. Droit applicable et juridiction</h2>
            <p>Les présentes conditions sont régies par les lois fédérales des États-Unis et le droit de l'État de Californie. Tout litige relatif à leur interprétation ou leur exécution relèvera de la compétence exclusive des tribunaux compétents du comté de Fresno, Californie.</p>
            <h2>9. Contact</h2>
            <p>Pour toute question concernant ces conditions d'utilisation ou le règlement de l'établissement, contactez University High School :</p>
            <ul>
              <li>Par email : <a href="mailto:admin@universityhighschool.sbs">admin@universityhighschool.sbs</a></li>
              <li>Par courrier : 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001, United States</li>
            </ul>
            <p className="text-sm text-slate-500 mt-8">Dernière mise à jour : 30 août 2026 — University High School, EIN 77-0515663, 2611 E Matoian Way Ms Uh 134, Fresno, CA 93740-0001.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
