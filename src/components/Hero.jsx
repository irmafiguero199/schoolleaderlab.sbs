import { Link } from 'react-router-dom'
import { Award, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34h4v4h-4zM34 36h4v4h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      <div className="container-main px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />Établissement Homologué — EIN: 82-1581985
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4" />Google for Education Partner
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">501(c)(3) Non-Profit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Former les leaders éducatifs de demain</h1>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Institution américaine accréditée dédiée au développement professionnel des directeurs d'école, chefs d'établissement et responsables pédagogiques à travers les États-Unis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/academics" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
              Découvrir nos programmes<ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link to="/accreditation" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Vérifier notre agrément
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">1,200+</div>
              <div className="text-sm text-primary-200 flex items-center justify-center gap-1"><Users className="w-4 h-4" />Leaders formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">48</div>
              <div className="text-sm text-primary-200 flex items-center justify-center gap-1"><Globe className="w-4 h-4" />États représentés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">94%</div>
              <div className="text-sm text-primary-200 flex items-center justify-center gap-1"><TrendingUp className="w-4 h-4" />Taux de certification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">2018</div>
              <div className="text-sm text-primary-200">Année de fondation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero