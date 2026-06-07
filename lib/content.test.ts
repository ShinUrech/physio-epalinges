import { describe, it, expect } from 'vitest';
import {
  treatments,
  specialisations,
  galleryItems,
  reviews,
  reviewsSummary,
  exerciceCategories,
  practice,
  SITE_URL,
} from './content';

const HEX = /^#[0-9A-Fa-f]{6}$/;

describe('treatments', () => {
  it('has entries, each with id/title/desc', () => {
    expect(treatments.length).toBeGreaterThan(0);
    for (const t of treatments) {
      expect(t.id).toBeTruthy();
      expect(t.title.trim()).not.toBe('');
      expect(t.desc.trim()).not.toBe('');
    }
  });

  it('has unique ids', () => {
    const ids = treatments.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps the 'massage-asca' id the modal special-cases", () => {
    // GiuseppeCostaAereSite renders the rich ASCA modal off this exact id.
    expect(treatments.some((t) => t.id === 'massage-asca')).toBe(true);
  });
});

describe('specialisations', () => {
  it('each has title, desc, non-empty muscles and a numeric crop', () => {
    expect(specialisations.length).toBeGreaterThan(0);
    for (const s of specialisations) {
      expect(s.title.trim()).not.toBe('');
      expect(s.desc.trim()).not.toBe('');
      expect(s.muscles.length).toBeGreaterThan(0);
      expect(typeof s.crop.marginTop).toBe('number');
    }
  });
});

describe('galleryItems', () => {
  it('images carry width and height (avoids layout shift)', () => {
    for (const g of galleryItems.filter((g) => g.type === 'image')) {
      expect(g.width).toBeGreaterThan(0);
      expect(g.height).toBeGreaterThan(0);
    }
  });

  it('every video has a poster (so the homepage never loads video eagerly)', () => {
    for (const g of galleryItems.filter((g) => g.type === 'video')) {
      expect(g.poster, `${g.src} is missing a poster`).toBeTruthy();
      expect(g.poster!.startsWith('/gallery/posters/')).toBe(true);
    }
  });

  it('all sources are root-relative public paths', () => {
    for (const g of galleryItems) expect(g.src.startsWith('/')).toBe(true);
  });
});

describe('reviews', () => {
  it('each has name/date/text and a valid hex avatar colour', () => {
    expect(reviews.length).toBeGreaterThan(0);
    for (const r of reviews) {
      expect(r.name.trim()).not.toBe('');
      expect(r.date.trim()).not.toBe('');
      expect(r.text.trim()).not.toBe('');
      expect(r.color).toMatch(HEX);
    }
  });

  it('summary has a rating string and a count >= rendered cards', () => {
    expect(reviewsSummary.rating).toMatch(/^\d(,\d)?$/);
    expect(reviewsSummary.count).toBeGreaterThanOrEqual(reviews.length);
  });
});

describe('exerciceCategories', () => {
  it('each category has a title, description and at least one video', () => {
    expect(exerciceCategories.length).toBeGreaterThan(0);
    for (const c of exerciceCategories) {
      expect(c.title.trim()).not.toBe('');
      expect(c.description.trim()).not.toBe('');
      expect(c.videos.length).toBeGreaterThan(0);
    }
  });

  it('every video has src + poster under the transcoded /gallery/exercices path', () => {
    for (const c of exerciceCategories) {
      for (const v of c.videos) {
        expect(v.src, `${v.label} missing src`).toBeTruthy();
        expect(v.poster, `${v.label} missing poster`).toBeTruthy();
        expect(v.src!.startsWith('/gallery/exercices/')).toBe(true);
        expect(v.src!.endsWith('.mp4')).toBe(true);
        expect(v.poster!.startsWith('/gallery/exercices/posters/')).toBe(true);
      }
    }
  });

  it('has no leftover raw .MOV references', () => {
    const srcs = exerciceCategories.flatMap((c) => c.videos.map((v) => v.src ?? ''));
    expect(srcs.some((s) => /\.mov$/i.test(s))).toBe(false);
  });
});

describe('practice + SITE_URL', () => {
  it('SITE_URL is an https origin with no trailing slash', () => {
    expect(SITE_URL).toMatch(/^https:\/\/[^/]+$/);
  });

  it('contact links use the right schemes', () => {
    expect(practice.phoneHref.startsWith('tel:+')).toBe(true);
    expect(practice.whatsapp.startsWith('https://wa.me/')).toBe(true);
    expect(practice.linkedin.startsWith('https://www.linkedin.com/')).toBe(true);
    expect(practice.mapsUrl.startsWith('https://www.google.com/maps/')).toBe(true);
  });

  it('has plausible Épalinges geo coordinates', () => {
    expect(practice.geo.lat).toBeCloseTo(46.55, 1);
    expect(practice.geo.lng).toBeCloseTo(6.67, 1);
  });
});
