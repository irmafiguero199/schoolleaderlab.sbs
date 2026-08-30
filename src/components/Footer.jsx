import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-850 text-slate-300">
      <div className="container-main px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <GraduationCap className="w-6 h-6" />SCHOOL LEADER LAB
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Institution américaine accréditée dédiée au développement professionnel des leaders éducatifs. Organisation à but non lucratif 501(c)(3).
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>EIN fédéral : 82-1581985</p>
              <p>Enregistrée à Washington, DC</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/accreditation" className="hover:text-white transition-colors">Agrément officiel</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>PO Box 53232<br />Washington, DC 20009<br />United States</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+12025551234" className="hover:text-white transition-colors">(202) 555-1234</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:admin@schoolleaderlab.sbs" className="hover:text-white transition-colors">admin@schoolleaderlab.sbs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              <li><Link to="/accreditation" className="hover:text-white transition-colors">Statut d'agrément & EIN</Link></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-500">
                Domaine officiel : <a href="https://schoolleaderlab.sbs" className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1">schoolleaderlab.sbs <ExternalLink className="w-3 h-3" /></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="container-main px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 School Leader Lab. Tous droits réservés. EIN 82-1581985.</p>
          <p>PO Box 53232, Washington, DC 20009, United States</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer