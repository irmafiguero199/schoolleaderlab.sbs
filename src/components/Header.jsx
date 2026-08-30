import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, Mail, Phone, MapPin, Shield } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/about', label: 'À propos' },
  { path: '/academics', label: 'Programmes' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/accreditation', label: 'Agrément' },
  { path: '/faculty', label: 'Équipe' },
  { path: '/contact', label: 'Contact' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-primary-900 text-white text-xs py-2">
        <div className="container-main px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" />EIN: 82-1581985</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />PO Box 53232, Washington, DC 20009</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:admin@schoolleaderlab.sbs" className="flex items-center gap-1 hover:text-primary-200 transition-colors"><Mail className="w-3 h-3" />admin@schoolleaderlab.sbs</a>
            <a href="tel:+12025551234" className="flex items-center gap-1 hover:text-primary-200 transition-colors"><Phone className="w-3 h-3" />(202) 555-1234</a>
          </div>
        </div>
      </div>
      <div className="container-main px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-900">
          <GraduationCap className="w-8 h-8" />SCHOOL LEADER LAB
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary-700' : 'text-slate-600 hover:text-primary-700'}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="container-main px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 ${location.pathname === link.path ? 'text-primary-700' : 'text-slate-600'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header