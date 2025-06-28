export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FlooringContractor",
          name: "Decora Sol",
          image: "/logoblack.png",
          url: "https://decorasol.ma",
          telephone: "+212666865356",
          email: "Decorasol21@gmail.com",
          description:
            "Spécialisé dans l'installation de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Marrakech",
            addressCountry: "MA",
          },
          areaServed: {
            "@type": "City",
            name: "Marrakech",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "17:00",
            },
          ],
          sameAs: [
            "https://web.facebook.com/profile.php?id=100091396990504",
            "https://www.instagram.com/decorasol_top",
          ],
          priceRange: "$$",
          serviceType: "Installation de planchers en bois",
          slogan: "Notre devise est la qualité",
        }),
      }}
    />
  )
}

export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://decorasol.ma",
          name: "Decora Sol",
          description:
            "Spécialisé dans l'installation de tous types et formes de planchers en bois, intérieurs et extérieurs à Marrakech.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://decorasol.ma/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `https://decorasol.ma${item.path}`,
          })),
        }),
      }}
    />
  )
}
