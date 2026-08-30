import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="container-main px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-10 h-10 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Restez informé de nos programmes</h2>
          <p className="text-slate-600 mb-8">Recevez nos actualités, nouvelles sessions de formation et ressources pour leaders éducatifs.</p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <CheckCircle className="w-5 h-5" />Merci ! Vous recevrez nos prochaines actualités à cette adresse.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
              <button type="submit" className="btn-primary whitespace-nowrap"><Send className="w-4 h-4 mr-2" />S'inscrire</button>
            </form>
          )}
          <p className="text-xs text-slate-400 mt-4">
            School Leader Lab — EIN 82-1581985 — PO Box 53232, Washington, DC 20009. Conforme au RGPD. Désinscription possible à tout moment via <a href="mailto:admin@schoolleaderlab.sbs" className="underline">admin@schoolleaderlab.sbs</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter