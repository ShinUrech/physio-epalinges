'use client';

import React from 'react';

/**
 * A <video> that loads no bytes until the user plays it.
 *
 * With `preload="none"` + a `poster` image, the browser shows the poster and
 * fetches nothing over the network until play is pressed — so a page full of
 * these costs a few small images instead of many multi-MB video files.
 * Controls appear on hover (and stay while playing).
 */
export default function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  muted = true,
}: {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  muted?: boolean;
}) {
  const showControls = (e: React.SyntheticEvent<HTMLVideoElement>) =>
    e.currentTarget.setAttribute('controls', '');
  const hideControlsIfPaused = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    if (v.paused) v.removeAttribute('controls');
  };

  return (
    <video
      src={src}
      poster={poster}
      preload="none"
      muted={muted}
      playsInline
      aria-label={ariaLabel}
      className={className}
      onMouseEnter={showControls}
      onMouseLeave={hideControlsIfPaused}
      onPause={(e) => e.currentTarget.removeAttribute('controls')}
    />
  );
}
