import { Helmet } from 'react-helmet-async'

function EducationalOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "School Leader Lab",
    "alternateName": "SLL",
    "url": "https://schoolleaderlab.sbs",
    "logo": "https://schoolleaderlab.sbs/logo.svg",
    "email": "admin@schoolleaderlab.sbs",
    "telephone": "+1-202-555-1234",
    "taxID": "82-1581985",
    "identifier": { "@type": "PropertyValue", "propertyID": "EIN", "value": "82-1581985" },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PO Box 53232",
      "addressLocality": "Washington",
      "addressRegion": "DC",
      "postalCode": "20009",
      "addressCountry": "US"
    },
    "foundingDate": "2018",
    "sameAs": ["https://schoolleaderlab.sbs"],
    "description": "Institution américaine accréditée dédiée au développement professionnel des leaders éducatifs. Organisation à but non lucratif 501(c)(3).",
    "areaServed": "United States",
    "knowsAbout": ["Educational Leadership", "Google Workspace for Education", "Professional Development", "School Administration"]
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default EducationalOrganizationSchema