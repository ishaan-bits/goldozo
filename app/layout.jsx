import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://golddozo.com"),
  title: "Gold Dozo Gym — Premium Gym in Patna | Bailey Road",
  description:
    "Gold Dozo Gym at Bhavya Iconic Tower, Gola Road Crossing, Bailey Road, Patna. Spacious modern floors, strength & cardio, boxing, yoga, zumba, pilates, calisthenics, steam, sauna and an in-house nutrition café. Rated 4.4★ on Justdial. Call +91 70702 59222.",
  keywords: [
    "Gold Dozo Gym",
    "gym in Patna",
    "Bailey Road gym",
    "boxing gym Patna",
    "yoga studio Patna",
    "fitness centre Patna",
  ],
  openGraph: {
    title: "Gold Dozo Gym — Patna's Premium Fitness Destination",
    description:
      "Strength & cardio, boxing, yoga, zumba, pilates, calisthenics, steam, sauna & in-house nutrition café on Bailey Road, Patna.",
    images: ["/logo-full.jpg"],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Gold Dozo Gym",
  telephone: "+91 70702 59222",
  url: "https://golddozo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "4th Floor, Bhavya Iconic Tower, Gola Road Crossing, Bailey Road, Shri Krishna Puram / Ram Jaipal Nagar",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "801503",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:30",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "330",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
