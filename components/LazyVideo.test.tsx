import { describe, it, expect, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/react';
import LazyVideo from './LazyVideo';

afterEach(cleanup);

function renderVideo(props: Record<string, unknown> = {}) {
  const { container } = render(
    <LazyVideo
      src="/gallery/exercices/genou-1.mp4"
      poster="/gallery/exercices/posters/genou-1.jpg"
      ariaLabel="Démo exercice"
      {...props}
    />,
  );
  const video = container.querySelector('video');
  if (!video) throw new Error('LazyVideo did not render a <video>');
  return video;
}

describe('LazyVideo', () => {
  it('loads no video bytes until played (preload=none + poster)', () => {
    const v = renderVideo();
    expect(v.getAttribute('preload')).toBe('none');
    expect(v.getAttribute('poster')).toBe('/gallery/exercices/posters/genou-1.jpg');
    expect(v.getAttribute('src')).toBe('/gallery/exercices/genou-1.mp4');
    expect(v.getAttribute('aria-label')).toBe('Démo exercice');
  });

  it('is muted by default and honours muted={false}', () => {
    expect(renderVideo().muted).toBe(true);
    cleanup();
    expect(renderVideo({ muted: false }).muted).toBe(false);
  });

  it('reveals controls on hover and hides them again on leave while paused', () => {
    const v = renderVideo();
    expect(v.hasAttribute('controls')).toBe(false);
    fireEvent.mouseEnter(v);
    expect(v.hasAttribute('controls')).toBe(true);
    // jsdom videos report paused=true, so leaving should remove controls
    fireEvent.mouseLeave(v);
    expect(v.hasAttribute('controls')).toBe(false);
  });
});
