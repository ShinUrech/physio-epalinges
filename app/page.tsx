import GiuseppeCostaAereSite from "@/components/GiuseppeCostaAereSite";
import { SITE_URL, practice } from "@/lib/content";

// LocalBusiness structured data for rich Google results (Maps, knowledge panel).
// aggregateRating is intentionally omitted: Google discourages self-serving
// review markup on LocalBusiness and it can trigger manual actions.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  "@id": `${SITE_URL}/#business`,
  name: practice.name,
  description:
    "Cabinet de physiothérapie du sport et thérapie manuelle à Épalinges (VD). Giuseppe Costa, physiothérapeute OMPT.",
  url: SITE_URL,
  telephone: "+41 76 824 03 87",
  image: `${SITE_URL}/hero-bg.jpg`,
  priceRange: "$$",
  currenciesAccepted: "CHF",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:30",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    postalCode: practice.address.postalCode,
    addressLocality: practice.address.city,
    addressCountry: practice.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: practice.geo.lat,
    longitude: practice.geo.lng,
  },
  hasMap: practice.mapsUrl,
  areaServed: ["Épalinges", "Lausanne", "Vaud"],
  sameAs: [practice.linkedin, practice.mapsUrl],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <GiuseppeCostaAereSite />
    </>
  );
}
