/**
 * SVG Icons for ALL prompt builder categories
 * Each icon is a React component — no images needed
 */

// ─── Shot Type Icons ───
export const IconExtremeCloseUp = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
    <path d="M3 3l4 4M21 3l-4 4M3 21l4-4M21 21l-4-4" />
  </svg>
);

export const IconCloseUp = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="4" />
    <path d="M8 14v3a2 2 0 002 2h4a2 2 0 002-2v-3" />
  </svg>
);

export const IconHeadshot = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
  </svg>
);

export const IconMediumShot = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="6" r="3" />
    <path d="M8 12h8M9 9v8M15 9v8" />
    <path d="M6 21h12" strokeDasharray="3 3" />
  </svg>
);

export const IconWideShot = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="20" height="12" rx="1" />
    <circle cx="12" cy="12" r="2" />
    <path d="M7 18v-3M17 18v-3" />
  </svg>
);

export const IconEstablishing = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4h6v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);

export const IconGroupShot = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="8" r="3" />
    <circle cx="16" cy="8" r="3" />
    <path d="M2 21v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
    <path d="M16 13a4 4 0 014 4v1" />
  </svg>
);

export const IconBirdsEye = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
  </svg>
);

export const IconLowAngle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l-8 18h16L12 3z" />
    <path d="M12 9v6M12 17v1" />
  </svg>
);

export const IconDutchAngle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="1" transform="rotate(15 12 12)" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconPOV = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconOverShoulder = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="17" cy="8" r="3" />
    <path d="M4 16c0-2 1-4 3-5" />
    <path d="M7 21v-3a3 3 0 013-3h8a3 3 0 013 3v3" />
    <circle cx="6" cy="11" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

// ─── Direction Icons ───
export const IconDirectionFront = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
  </svg>
);

export const IconDirectionBack = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2" strokeDasharray="2 2" />
    <path d="M12 4v3M12 17v3" />
  </svg>
);

export const IconDirectionLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const IconDirectionRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18l6-6-6-6" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

// ─── Lighting Icons ───
export const IconSunlight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const IconGoldenHour = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
    <path d="M4 17h16" />
    <path d="M6 21h12" strokeDasharray="3 3" />
    <path d="M12 2v3" />
  </svg>
);

export const IconMoonlight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const IconStudioLight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="3" width="12" height="8" rx="2" />
    <path d="M12 11v5M8 20h8M10 16h4" />
    <path d="M9 7h6" />
  </svg>
);

export const IconNeonLight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 21V8l3-5 3 5v13" />
    <path d="M5 12h14" />
    <path d="M7 8h10" strokeDasharray="2 2" />
  </svg>
);

export const IconBacklight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M17.66 6.34l2.12-2.12M4.22 19.78l2.12-2.12" strokeDasharray="2 2" />
  </svg>
);

export const IconVolumetric = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v18" />
    <path d="M5 6l7 3 7-3" />
    <path d="M5 12l7 3 7-3" />
    <path d="M5 18l7 3 7-3" />
  </svg>
);

export const IconSilhouette = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.4" />
    <path d="M5.5 21a6.5 6.5 0 0113 0" fill="currentColor" opacity="0.4" />
    <path d="M2 21h20" />
  </svg>
);

// ─── Camera Icons ───
export const IconCinemaCamera = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="15" height="10" rx="2" />
    <path d="M17 10l5-3v10l-5-3" />
  </svg>
);

export const IconDSLR = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const IconFilmCamera = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="12" r="5" />
    <circle cx="18" cy="8" r="3" />
    <path d="M13 12h2" />
    <path d="M3 3h2v4M19 3h2v2" />
  </svg>
);

export const IconPhoneCamera = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="6" r="1" />
    <path d="M10 21h4" />
  </svg>
);

export const IconPolaroid = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="2" width="18" height="20" rx="1" />
    <rect x="5" y="4" width="14" height="12" />
    <path d="M8 19h3" />
  </svg>
);

export const IconWebcam = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="7" />
    <circle cx="12" cy="10" r="3" />
    <path d="M12 17v4M8 21h8" />
  </svg>
);

// ─── Focal Length Icons ───
export const IconFisheye = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="4" ry="8" />
    <path d="M2 12h20" />
  </svg>
);

export const IconWideAngle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 8l10 4 10-4" />
    <path d="M2 16l10-4 10 4" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconStandardLens = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const IconTelephoto = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="8" width="20" height="8" rx="4" />
    <circle cx="18" cy="12" r="2" />
    <path d="M6 10v4" />
  </svg>
);

export const IconMacroLens = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <circle cx="11" cy="11" r="3" />
  </svg>
);

// ─── Lens Type Icons ───
export const IconAnamorphic = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <ellipse cx="12" cy="12" rx="5" ry="3" />
    <path d="M12 6v12" strokeDasharray="2 2" />
  </svg>
);

export const IconTiltShift = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 10h16M4 14h16" strokeDasharray="3 3" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconSoftFocus = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
    <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.5" />
  </svg>
);

// ─── Film Stock Icons ───
export const IconFilmStrip = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="1" />
    <path d="M6 6h12M6 10h12M6 14h12M6 18h12" />
    <rect x="8" y="7" width="3" height="2" fill="currentColor" opacity="0.3" />
    <rect x="13" y="7" width="3" height="2" fill="currentColor" opacity="0.3" />
  </svg>
);

export const IconFilmBW = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M12 2a10 10 0 010 20" fill="currentColor" opacity="0.2" />
  </svg>
);

export const IconFilmColor = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="10" cy="9" r="5" />
    <circle cx="14" cy="9" r="5" />
    <circle cx="12" cy="14" r="5" />
  </svg>
);

// ─── Genre Icons ───
export const IconPortrait = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="9" r="3" />
    <path d="M8 18c0-2 2-3 4-3s4 1 4 3" />
  </svg>
);

export const IconStreet = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21L8 3h8l5 18" />
    <path d="M7 15h10" />
    <path d="M9 9h6" />
  </svg>
);

export const IconLandscape = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20l7-12 5 8 3-4 5 8" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

export const IconFashion = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l4 4-4 2-4-2 4-4z" />
    <path d="M8 6L4 10v10h16V10l-4-4" />
    <path d="M12 8v14" />
  </svg>
);

export const IconAbstract = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l4 8-4 8h16l-4-8 4-8H4z" />
  </svg>
);

export const IconFood = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8h1a4 4 0 010 8h-1" />
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    <path d="M6 1v3M10 1v3M14 1v3" />
  </svg>
);

export const IconArchitecture = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21h18" />
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

// ─── Movie Look Icons ───
export const IconMovieClapboard = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 11h16v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9z" />
    <path d="M4 7l4 4M8 7l4 4M12 7l4 4M16 7l4 4" />
    <path d="M2 7h20v4H2V7z" />
  </svg>
);

export const IconMovieReel = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <circle cx="19" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
    <circle cx="5" cy="12" r="1" fill="currentColor" />
  </svg>
);

// ─── Filter Icons ───
export const IconFilterBW = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a10 10 0 000 20" fill="currentColor" opacity="0.2" />
  </svg>
);

export const IconFilterGrain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" />
    <circle cx="12" cy="5" r="0.5" fill="currentColor" />
    <circle cx="17" cy="8" r="0.5" fill="currentColor" />
    <circle cx="6" cy="13" r="0.5" fill="currentColor" />
    <circle cx="11" cy="11" r="0.5" fill="currentColor" />
    <circle cx="16" cy="14" r="0.5" fill="currentColor" />
    <circle cx="8" cy="18" r="0.5" fill="currentColor" />
    <circle cx="14" cy="19" r="0.5" fill="currentColor" />
    <circle cx="18" cy="17" r="0.5" fill="currentColor" />
    <circle cx="9" cy="9" r="0.5" fill="currentColor" />
    <circle cx="15" cy="11" r="0.5" fill="currentColor" />
    <circle cx="5" cy="16" r="0.5" fill="currentColor" />
  </svg>
);

export const IconFilterBokeh = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="7" cy="7" r="3" opacity="0.4" />
    <circle cx="17" cy="9" r="2" opacity="0.3" />
    <circle cx="12" cy="16" r="4" opacity="0.5" />
    <circle cx="5" cy="16" r="1.5" opacity="0.2" />
    <circle cx="19" cy="17" r="2" opacity="0.3" />
  </svg>
);

export const IconFilterVignette = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <ellipse cx="12" cy="12" rx="7" ry="6" />
  </svg>
);

export const IconFilterBlur = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 8h16" strokeDasharray="4 4" />
    <path d="M4 12h16" strokeDasharray="2 3" />
    <path d="M4 16h16" strokeDasharray="4 4" />
  </svg>
);

export const IconFilterLensFlare = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

export const IconFilterGlitch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 6h8M14 6h8" />
    <path d="M2 10h5M10 10h9M21 10h1" />
    <path d="M2 14h12M16 14h6" />
    <path d="M2 18h3M8 18h14" />
  </svg>
);

// ─── Video Movement Icons ───
export const IconStatic = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 12h6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const IconPan = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14" />
    <path d="M15 8l4 4-4 4" />
    <rect x="2" y="6" width="20" height="12" rx="2" strokeDasharray="3 3" />
  </svg>
);

export const IconTilt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14" />
    <path d="M8 9l4-4 4 4" />
    <rect x="4" y="3" width="16" height="18" rx="2" strokeDasharray="3 3" />
  </svg>
);

export const IconDolly = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="18" r="2" />
    <circle cx="16" cy="18" r="2" />
    <path d="M6 18h4M14 18h4" />
    <rect x="5" y="8" width="14" height="8" rx="2" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconOrbit = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(-30 12 12)" />
    <circle cx="19" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

export const IconHandheld = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 8c2-1 4 1 6-1s4 2 6 0 4-2 4 0" />
    <path d="M4 12c2-1 4 1 6-1s4 2 6 0 4-2 4 0" />
    <path d="M4 16c2-1 4 1 6-1s4 2 6 0 4-2 4 0" />
  </svg>
);

export const IconSlowMotion = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M16 16l2 2" strokeDasharray="2 2" />
  </svg>
);

export const IconTimelapse = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6" />
    <path d="M12 12l3 3" />
    <path d="M12 12l-2 4" strokeDasharray="2 2" />
    <path d="M12 12l4-1" strokeDasharray="2 2" />
  </svg>
);

// ─── Photographer Icons ───
export const IconPhotographer = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <path d="M15 4l2-2" />
  </svg>
);

// ─── Art & Animation Style Icons ───
export const IconPaintbrush = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.37 2.63a2.12 2.12 0 013 3L14 13l-4 1 1-4 7.37-7.37z" />
    <path d="M9 14c-2.5 1-4 3.5-4 6 3 0 5-1.5 6-4" />
  </svg>
);

export const IconFilmReel = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="18.5" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="5.5" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

export const IconClaymation = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="5" />
    <ellipse cx="12" cy="18" rx="6" ry="4" />
    <circle cx="10" cy="7" r="1" fill="currentColor" />
    <circle cx="14" cy="7" r="1" fill="currentColor" />
    <path d="M10 10c0 1 1 2 2 2s2-1 2-2" />
  </svg>
);

export const IconPixelArt = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="4" height="4" />
    <rect x="10" y="3" width="4" height="4" />
    <rect x="17" y="3" width="4" height="4" />
    <rect x="3" y="10" width="4" height="4" />
    <rect x="10" y="10" width="4" height="4" fill="currentColor" opacity="0.3" />
    <rect x="17" y="10" width="4" height="4" />
    <rect x="3" y="17" width="4" height="4" />
    <rect x="10" y="17" width="4" height="4" />
    <rect x="17" y="17" width="4" height="4" />
  </svg>
);

export const IconWatercolor = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-4 6-8 9-8 13a8 8 0 0016 0c0-4-4-7-8-13z" />
    <path d="M8 14c1-1 3-1 4 0s3 1 4 0" />
  </svg>
);

export const IconOilPainting = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 14l3-4 3 3 2-2 4 5" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

export const IconAnime = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="10" r="8" />
    <path d="M8 9c0-1.5 1-3 2-3" />
    <path d="M14 9c0-1.5 1-3 2-3" />
    <ellipse cx="9" cy="11" rx="1.5" ry="2" fill="currentColor" opacity="0.3" />
    <ellipse cx="15" cy="11" rx="1.5" ry="2" fill="currentColor" opacity="0.3" />
    <path d="M10 15c0 1 1 1.5 2 1.5s2-.5 2-1.5" />
    <path d="M5 4l2 3M19 4l-2 3" />
  </svg>
);

export const Icon3DRender = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l10 6v8l-10 6L2 16V8l10-6z" />
    <path d="M12 8l10-6M12 8v14M12 8L2 2" opacity="0.5" />
  </svg>
);

export const IconComicBook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M3 12h18M12 3v18" />
    <path d="M7 7l2 2M15 15l2 2" />
  </svg>
);

export const IconStopMotion = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="6" height="8" rx="1" />
    <rect x="9" y="6" width="6" height="8" rx="1" />
    <rect x="16" y="6" width="6" height="8" rx="1" />
    <path d="M5 17v3M12 17v3M19 17v3" />
    <circle cx="5" cy="20" r="1" />
    <circle cx="12" cy="20" r="1" />
    <circle cx="19" cy="20" r="1" />
  </svg>
);

export const IconSurrealism = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <path d="M9 9l-1 2 2-1M15 9l1 2-2-1" />
    <path d="M12 2c0 4-3 5-3 8" strokeDasharray="2 2" />
  </svg>
);

export const IconMinimalist = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <rect x="4" y="4" width="16" height="16" rx="1" />
  </svg>
);

// ─── Generic / Fallback ───
export const IconGeneric = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

export const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconCopy = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);

export const IconReset = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M1 4v6h6" />
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
  </svg>
);

export const IconChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const IconChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

export const IconImage = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

export const IconVideo = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="15" height="10" rx="2" />
    <path d="M17 10l5-3v10l-5-3" />
  </svg>
);

export const IconSparkles = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
    <path d="M19 15l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z" />
  </svg>
);
