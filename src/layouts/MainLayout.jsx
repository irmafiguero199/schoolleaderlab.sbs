import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import EducationalOrganizationSchema from '../seo/EducationalOrganizationSchema.jsx'

function MainLayout() {
  return (
    <>
      <EducationalOrganizationSchema />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout