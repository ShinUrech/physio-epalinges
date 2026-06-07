import { describe, it, expect } from 'vitest';
import { COLORS } from './theme';

describe('COLORS palette', () => {
  it('exposes the expected brand tokens', () => {
    const expected = [
      'accent', 'charcoal', 'ink', 'cream', 'sand',
      'line', 'placeholder', 'taupe', 'diagram', 'reviewCard', 'reviewBorder',
    ];
    expect(Object.keys(COLORS).sort()).toEqual(expected.sort());
  });

  it('every value is a 6-digit hex colour', () => {
    for (const [name, value] of Object.entries(COLORS)) {
      expect(value, `${name} should be a hex colour`).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it('keeps the accent brand colour', () => {
    expect(COLORS.accent.toLowerCase()).toBe('#b8977e');
  });
});
