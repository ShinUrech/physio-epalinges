// Single source of truth for the brand palette.
// Keep these in sync with the `@theme` tokens in app/globals.css
// (those expose Tailwind utilities like bg-accent / text-ink / border-line).
export const COLORS = {
  accent: '#B8977E',       // CTA / highlights
  charcoal: '#1E1E1E',     // dark base: nav, hero, reviews, footer
  ink: '#2C2C2C',          // dark headings / darker surface
  cream: '#FAF9F6',        // page background
  sand: '#F3F0EB',         // alternate section background
  line: '#E5E0DB',         // borders
  placeholder: '#EAE6E0',  // photo placeholder background
  taupe: '#C0B8AD',        // muted text on dark backgrounds
  diagram: '#D5CFC7',      // react-body-highlighter base colour
  reviewCard: '#2A2A2A',   // review card background (on charcoal)
  reviewBorder: '#3A3A3A', // review card border
} as const;
