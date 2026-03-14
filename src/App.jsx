import { useState, useCallback } from 'react';
import SelectorGrid from './components/SelectorGrid';
import { usePromptBuilder } from './hooks/usePromptBuilder';
import { ART_STYLES } from './data/artStyles';
import {
  ASPECT_RATIOS, IMAGE_SIZES,
  SHOT_TYPES, DIRECTIONS, VIDEO_MOVEMENTS,
  LIGHTING, CAMERAS, FOCAL_LENGTHS, LENSES, FILM_STOCKS,
  GENRES, PHOTOGRAPHERS, MOVIE_LOOKS, FILTERS,
} from './data/categories';
import {
  IconCheck, IconCopy, IconReset, IconChevronLeft, IconChevronRight,
  IconImage, IconVideo, IconSparkles,
  // Shot types
  IconExtremeCloseUp, IconCloseUp, IconHeadshot, IconMediumShot,
  IconWideShot, IconEstablishing, IconGroupShot, IconBirdsEye,
  IconLowAngle, IconDutchAngle, IconPOV, IconOverShoulder,
  // Directions
  IconDirectionFront, IconDirectionBack, IconDirectionLeft, IconDirectionRight,
  // Lighting
  IconSunlight, IconGoldenHour, IconMoonlight, IconStudioLight,
  IconNeonLight, IconBacklight, IconVolumetric, IconSilhouette,
  // Cameras
  IconCinemaCamera, IconDSLR, IconFilmCamera, IconPhoneCamera,
  IconPolaroid, IconWebcam,
  // Focal lengths
  IconFisheye, IconWideAngle, IconStandardLens, IconTelephoto, IconMacroLens,
  // Lenses
  IconAnamorphic, IconTiltShift, IconSoftFocus,
  // Film stocks
  IconFilmStrip, IconFilmBW, IconFilmColor,
  // Genres
  IconPortrait, IconStreet, IconLandscape, IconFashion,
  IconAbstract, IconFood, IconArchitecture,
  // Movie looks
  IconMovieClapboard, IconMovieReel,
  // Filters
  IconFilterBW, IconFilterGrain, IconFilterBokeh, IconFilterVignette,
  IconFilterBlur, IconFilterLensFlare, IconFilterGlitch,
  // Video movements
  IconStatic, IconPan, IconTilt, IconDolly, IconOrbit,
  IconHandheld, IconSlowMotion, IconTimelapse,
  // Art styles
  IconPaintbrush, IconFilmReel, IconClaymation, IconPixelArt,
  IconWatercolor, IconOilPainting, IconAnime, Icon3DRender,
  IconComicBook, IconStopMotion, IconSurrealism, IconMinimalist,
  // Generic
  IconGeneric, IconPhotographer,
} from './components/SvgIcons';

/* ─── Icon mapping ─── */
const SHOT_ICONS = {
  'extreme-close-up': IconExtremeCloseUp,
  'close-up': IconCloseUp,
  'tight-headshot': IconHeadshot,
  'headshot': IconHeadshot,
  'upper-body': IconMediumShot,
  'medium-shot': IconMediumShot,
  'cowboy-shot': IconMediumShot,
  'three-quarter-body': IconMediumShot,
  'entire-body': IconWideShot,
  'wide-shot': IconWideShot,
  'establishing-shot': IconEstablishing,
  'group-shot': IconGroupShot,
  'two-shot': IconGroupShot,
  'over-the-shoulder-shot': IconOverShoulder,
  'point-of-view-shot': IconPOV,
  'reaction-shot': IconCloseUp,
  'reverse-shot': IconOverShoulder,
  'insert-shot': IconExtremeCloseUp,
  'cutaway-shot': IconWideShot,
  'birds-eye-view': IconBirdsEye,
  'overhead-shot': IconBirdsEye,
  'high-angle-shot': IconBirdsEye,
  'low-angle-shot': IconLowAngle,
  'dutch-angle': IconDutchAngle,
  'worms-eye-view': IconLowAngle,
};

const DIRECTION_ICONS = {
  'from-the-front': IconDirectionFront,
  'from-the-back': IconDirectionBack,
  'from-the-left': IconDirectionLeft,
  'from-the-right': IconDirectionRight,
};

const LIGHTING_ICONS_MAP = {
  'natural-daylight': IconSunlight, 'golden-hour': IconGoldenHour,
  'blue-hour': IconMoonlight, 'midday-sun': IconSunlight,
  'overcast-lighting': IconSunlight, 'open-shade': IconSunlight,
  'moonlight': IconMoonlight, 'window-spill': IconSunlight,
  'high-key-lighting': IconStudioLight, 'low-key-lighting': IconSilhouette,
  'soft-lighting': IconStudioLight, 'hard-lighting': IconStudioLight,
  'three-point-lighting': IconStudioLight, 'rembrandt-lighting': IconStudioLight,
  'loop-lighting': IconStudioLight, 'paramount-lighting': IconStudioLight,
  'split-lighting': IconStudioLight, 'broad-lighting': IconStudioLight,
  'backlighting-rim-lighting': IconBacklight, 'silhouette-shadows': IconSilhouette,
  'chiaroscuro-lighting': IconSilhouette, 'volumetric-lighting': IconVolumetric,
  'neon-lighting': IconNeonLight, 'practical-lighting': IconStudioLight,
  'direct-flash': IconStudioLight, 'ring-light': IconStudioLight,
  'bounce-lighting': IconStudioLight, 'gobo-lighting': IconStudioLight,
  'color-gels': IconNeonLight, 'teal-and-orange': IconNeonLight,
  'fog-diffusion': IconVolumetric, 'top-lighting': IconStudioLight,
  'underlighting': IconNeonLight, 'candlelight-lighting': IconGoldenHour,
  'led-streetlights': IconNeonLight, 'sodium-streetlamps': IconGoldenHour,
  'shopfront-fluorescents': IconNeonLight, 'phone-flashlight': IconStudioLight,
  'motivated-lighting': IconStudioLight, 'softbox-key-lighting': IconStudioLight,
  'product-side-key': IconStudioLight, 'rim-soft-fill': IconBacklight,
  'top-down-flat-lay': IconBirdsEye,
};

const CAMERA_ICONS_MAP = {
  'arri-alexa-65': IconCinemaCamera, 'red-digital-cinema-camera': IconCinemaCamera,
  'sony-venice': IconCinemaCamera, 'panavision-panaflex': IconCinemaCamera,
  'canon-c500': IconCinemaCamera, 'sony-fx6': IconCinemaCamera,
  'sony-fx3': IconCinemaCamera, 'lumix-gh5': IconDSLR,
  'canon-eos-5d': IconDSLR, 'fujifilm-x-t4': IconDSLR,
  'hasselblad-x1d-ii': IconDSLR, 'phase-one-xf-iq4': IconDSLR,
  'pentax-645z': IconDSLR, 'hasselblad-500cm': IconFilmCamera,
  'mamiya-rb67': IconFilmCamera, 'rolleiflex': IconFilmCamera,
  'leica-m3': IconFilmCamera, 'leica-q2-monochrom': IconFilmCamera,
  'nikon-f2': IconFilmCamera, 'nikon-fm2': IconFilmCamera,
  'canon-ae-1': IconFilmCamera, 'pentax-k1000': IconFilmCamera,
  'minolta-srt-101': IconFilmCamera, 'olympus-om-1': IconFilmCamera,
  'contax-t2': IconFilmCamera, 'yashica-t4': IconFilmCamera,
  'zenit-e': IconFilmCamera, 'argus-c3': IconFilmCamera,
  'lomo-lc-a': IconFilmCamera, 'holga-120n': IconFilmCamera,
  'diana-f': IconFilmCamera, 'kodak-brownie': IconFilmCamera,
  'polaroid-sx-70': IconPolaroid, 'polaroid-600': IconPolaroid,
  'kodak-funsaver': IconFilmCamera, '35mm-film-camera': IconFilmCamera,
  '8mm-film-camera': IconFilmCamera, 's16mm-film-camera': IconFilmCamera,
  'aaton-xtr': IconCinemaCamera, 'bolex-h16': IconFilmCamera,
  'gopro-hero': IconPhoneCamera, 'insta360-x4': IconPhoneCamera,
  'iphone-pro': IconPhoneCamera, 'old-android-phone': IconPhoneCamera,
  'compact-camera': IconDSLR, 'webcam': IconWebcam,
  'doorbell-cam': IconWebcam, 'security-camera': IconWebcam,
  'vhs-camera': IconCinemaCamera,
};

const FOCAL_ICONS_MAP = {
  '8mm-fisheye': IconFisheye, '14mm-ultra-wide': IconWideAngle,
  '24mm-wide-angle': IconWideAngle, '50mm-standard': IconStandardLens,
  '85mm-portrait': IconStandardLens, '100mm-macro': IconMacroLens,
  '200mm-super-telephoto': IconTelephoto, '300mm-extreme-telephoto': IconTelephoto,
};

const LENS_ICONS_MAP = {
  'anamorphic-cinema-lens': IconAnamorphic, 'fisheye-lens': IconFisheye,
  'macro-lens': IconMacroLens, 'tilt-shift-lens': IconTiltShift,
  'soft-focus-portrait-lens': IconSoftFocus, 'petzval-portrait-lens': IconSoftFocus,
  'helios-44-2-swirly-bokeh': IconSoftFocus, 'lensbaby-selective-focus': IconSoftFocus,
  'holga-style-lens': IconSoftFocus, 'toy-plastic-lens': IconSoftFocus,
  'catadioptric-mirror-lens': IconTelephoto, 'voigtlander-nokton-50mm-f1': IconStandardLens,
};

const FILM_ICONS_MAP_FN = (opt) => {
  const id = opt.id;
  if (id.includes('tri-x') || id.includes('hp5') || id.includes('delta') ||
      id.includes('acros') || id.includes('b-w') || id.includes('grey') ||
      id.includes('monochrom')) return IconFilmBW;
  if (id.includes('kodachrome') || id.includes('velvia') || id.includes('provia') ||
      id.includes('ektachrome') || id.includes('cinestill')) return IconFilmColor;
  return IconFilmStrip;
};

const GENRE_ICONS_MAP = {
  'portrait': IconPortrait, 'street-photography': IconStreet,
  'landscape': IconLandscape, 'fashion': IconFashion,
  'high-fashion': IconFashion, 'editorial': IconFashion,
  'documentary': IconStreet, 'reportage': IconStreet,
  'photojournalism': IconStreet, 'street-fashion': IconStreet,
  'beauty': IconPortrait, 'glamour': IconPortrait,
  'product': IconFood, 'food': IconFood,
  'architecture': IconArchitecture, 'nature-photography': IconLandscape,
  'wildlife': IconLandscape, 'sports': IconStreet,
  'action-photography': IconStreet, 'macro': IconMacroLens,
  'abstract': IconAbstract, 'fine-art': IconAbstract,
  'conceptual-photography': IconAbstract, 'surrealism': IconAbstract,
  'minimalist': IconMinimalist, 'experimental': IconAbstract,
};

const FILTER_ICONS_MAP = {
  'black-and-white': IconFilterBW, 'sepia-tone': IconFilterBW,
  'film-grain': IconFilterGrain, 'soft-focus': IconFilterBokeh,
  'bokeh': IconFilterBokeh, 'vignette': IconFilterVignette,
  'lens-flare': IconFilterLensFlare, 'light-leaks': IconFilterLensFlare,
  'motion-blur': IconFilterBlur, 'long-exposure': IconFilterBlur,
  'overexposed': IconFilterLensFlare, 'underexposed': IconFilterBW,
  'glitch-style': IconFilterGlitch, 'datamosh-glitch': IconFilterGlitch,
  'pixel-sort': IconFilterGlitch, 'crt-scanlines': IconFilterGlitch,
  'hologram-effect': IconFilterGlitch,
};

const VIDEO_ICONS_MAP = {
  'static-lock-off': IconStatic, 'pan': IconPan,
  'tilt-up': IconTilt, 'tilt-down': IconTilt,
  'dolly-in': IconDolly, 'dolly-out': IconDolly,
  'dolly-zoom': IconDolly, 'truck': IconDolly,
  'pedestal-up': IconTilt, 'pedestal-down': IconTilt,
  'orbit': IconOrbit, 'arc-shot': IconOrbit,
  'follow': IconDolly, 'tracking': IconDolly,
  'handheld': IconHandheld, 'crash-zoom': IconDolly,
  'zoom': IconDolly, 'whip-pan': IconPan,
  'pull-focus': IconStandardLens, 'slow-motion': IconSlowMotion,
  'time-lapse': IconTimelapse, 'aerial-photography': IconBirdsEye,
  'camera-jib-up': IconTilt, 'camera-jib-down': IconTilt,
  'reverse-shot': IconOverShoulder, 'shot-switch': IconPan,
};

const ART_ICONS_MAP = {
  'oilPainting': IconOilPainting, 'watercolor': IconWatercolor,
  'paintbrush': IconPaintbrush, 'anime': IconAnime,
  'comicBook': IconComicBook, 'pixelArt': IconPixelArt,
  '3dRender': Icon3DRender, 'claymation': IconClaymation,
  'stopMotion': IconStopMotion, 'surrealism': IconSurrealism,
  'minimalist': IconMinimalist, 'abstract': IconAbstract,
  'filmReel': IconFilmReel, 'neonLight': IconNeonLight,
  'filmBW': IconFilmBW,
};

/* ─── Icon getters per category ─── */
const getIconFor = (map) => (option) => map[option.id] || IconGeneric;
const getIconShot = getIconFor(SHOT_ICONS);
const getIconDirection = getIconFor(DIRECTION_ICONS);
const getIconLighting = getIconFor(LIGHTING_ICONS_MAP);
const getIconCamera = getIconFor(CAMERA_ICONS_MAP);
const getIconFocal = getIconFor(FOCAL_ICONS_MAP);
const getIconLens = getIconFor(LENS_ICONS_MAP);
const getIconFilm = (opt) => FILM_ICONS_MAP_FN(opt);
const getIconGenre = getIconFor(GENRE_ICONS_MAP);
const getIconPhotographer = () => IconPhotographer;
const getIconMovie = () => IconMovieReel;
const getIconFilter = getIconFor(FILTER_ICONS_MAP);
const getIconVideo = getIconFor(VIDEO_ICONS_MAP);
const getIconArt = (opt) => ART_ICONS_MAP[opt.iconKey] || IconPaintbrush;

/* ─── Step definitions ─── */
const STEPS = [
  { id: 'format',     title: 'What do you want to create?',  num: 1 },
  { id: 'scene',      title: 'Describe your scene',          num: 2 },
  { id: 'camera',     title: 'Choose the camera angle',      num: 3 },
  { id: 'mood',       title: 'Set the lighting & mood',      num: 4 },
  { id: 'artStyle',   title: 'Choose an art style',          num: 5, subtitle: 'Optional — skip to use photorealistic' },
  { id: 'equipment',  title: 'Camera & equipment',           num: 6, subtitle: 'Optional — skipped when art style is selected' },
  { id: 'style',      title: 'Style reference',              num: 7, subtitle: 'Optional' },
  { id: 'result',     title: 'Your prompt is ready',         num: 8 },
];

/* ─── App ─── */
export default function App() {
  const { state, prompt, isArtMode, toggleSingle, toggleMulti, setField, reset } = usePromptBuilder();

  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState(null);
  const [copied, setCopied] = useState(false);

  const step = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  const goNext = useCallback(() => {
    if (currentStep === 0 && !mode) return;
    let next = currentStep + 1;
    // Skip equipment step if art style is selected
    if (STEPS[next]?.id === 'equipment' && isArtMode) {
      next++;
    }
    setCurrentStep(Math.min(next, totalSteps - 1));
  }, [currentStep, mode, isArtMode, totalSteps]);

  const goBack = useCallback(() => {
    let prev = currentStep - 1;
    // Skip equipment step going back if art style is selected
    if (STEPS[prev]?.id === 'equipment' && isArtMode) {
      prev--;
    }
    setCurrentStep(Math.max(prev, 0));
  }, [currentStep, isArtMode]);

  const handleCopy = useCallback(() => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }, [prompt]);

  const handleStartOver = useCallback(() => {
    reset();
    setMode(null);
    setCurrentStep(0);
    setCopied(false);
  }, [reset]);

  const handleSelect = useCallback((key, multi, label) => {
    if (multi) toggleMulti(key, label);
    else toggleSingle(key, label);
  }, [toggleMulti, toggleSingle]);

  /* ─── Render a category section ─── */
  const renderCategory = (label, options, key, multi = false, iconGetter = null) => {
    const val = state[key];
    const count = multi ? (Array.isArray(val) ? val.length : 0) : (val ? 1 : 0);
    return (
      <div key={key} style={{ marginBottom: 28 }}>
        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 500,
            color: '#a1a1aa',
            letterSpacing: '0.02em',
          }}>
            {label}
          </span>
          {count > 0 && (
            <span style={{
              fontSize: 11,
              color: '#fff',
              background: '#262626',
              padding: '2px 8px',
              borderRadius: 12,
              fontWeight: 600,
            }}>
              {count} selected
            </span>
          )}
        </div>
        <SelectorGrid
          options={options}
          selectedValue={val}
          onSelect={lbl => handleSelect(key, multi, lbl)}
          multiSelect={multi}
          categoryKey={key}
          getIcon={iconGetter}
        />
      </div>
    );
  };

  /* ─── Progress dots ─── */
  const ProgressBar = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      {STEPS.map((s, i) => {
        if (i === 0) return null;
        const isDone = i < currentStep;
        const isCurrent = i === currentStep;
        return (
          <div key={i} style={{
            width: isCurrent ? 24 : 8,
            height: 4,
            borderRadius: 2,
            background: isCurrent ? '#fff' : isDone ? '#555' : '#262626',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }} />
        );
      })}
      <span style={{ fontSize: 11, color: '#52525b', marginLeft: 8, fontWeight: 500 }}>
        {step.num}/{totalSteps}
      </span>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

      {/* ──── Header ──── */}
      {!isFirst && (
        <header style={{
          position: 'sticky', top: 0, zIndex: 40,
          background: 'rgba(10,10,10,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #1a1a1a',
        }}>
          <div style={{
            maxWidth: 680, margin: '0 auto', padding: '0 20px',
            height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <button
                onClick={goBack}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: 12, gap: 4, borderRadius: 6 }}
              >
                <IconChevronLeft style={{ width: 14, height: 14 }} />
                Back
              </button>
              <span style={{ fontSize: 11, fontWeight: 500, color: '#3f3f46', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Prompt Studio
              </span>
            </div>
            <ProgressBar />
          </div>
        </header>
      )}

      {/* ──── Main ──── */}
      <main style={{ flex: 1, maxWidth: 680, margin: '0 auto', width: '100%', padding: '32px 20px 120px' }}>

        {/* Step header */}
        <div className="anim-fade-up" key={`hdr-${currentStep}`} style={{ marginBottom: 32 }}>
          {/* Brand (first screen) */}
          {isFirst && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
              <IconSparkles style={{ width: 16, height: 16, color: '#fff' }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa' }}>
                Prompt Studio
              </span>
            </div>
          )}

          <h1 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            color: '#fafafa',
            margin: 0,
          }}>
            {step.title}
          </h1>

          {step.subtitle && (
            <p style={{ fontSize: 13, color: '#52525b', marginTop: 8, fontWeight: 400 }}>
              {step.subtitle}
            </p>
          )}
        </div>

        {/* ═══ Step 1 — Format ═══ */}
        {step.id === 'format' && (
          <div className="anim-fade-up" key="s-format">
            {/* Image / Video toggle */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
              {[
                { id: 'image', label: 'Image', sub: 'Photo generation', Icon: IconImage },
                { id: 'video', label: 'Video', sub: 'Clip generation', Icon: IconVideo },
              ].map(({ id, label, sub, Icon }) => {
                const sel = mode === id;
                return (
                  <button key={id} onClick={() => setMode(id)} style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 12, padding: '28px 16px',
                    background: sel ? '#1a1a1a' : '#171717',
                    border: sel ? '2px solid #fff' : '1px solid #262626',
                    borderRadius: 16, cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                  }}>
                    <Icon style={{ width: 32, height: 32, color: sel ? '#fff' : '#52525b' }} />
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 600, color: sel ? '#fff' : '#a1a1aa', margin: 0 }}>
                        {label}
                      </p>
                      <p style={{ fontSize: 12, color: '#52525b', margin: '4px 0 0' }}>
                        {sub}
                      </p>
                    </div>
                    {sel && (
                      <div style={{
                        width: 20, height: 20, background: '#fff', borderRadius: 4,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <IconCheck style={{ width: 12, height: 12, color: '#000' }} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Aspect ratio + quality */}
            {mode && (
              <div className="anim-fade-up" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Frame ratio */}
                <div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: '#a1a1aa', marginBottom: 10 }}>
                    Frame Ratio
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                    {ASPECT_RATIOS.map(ar => {
                      const sel = state.aspectRatio === ar;
                      const ratioMap = {
                        '16:9': { w: 48, h: 27, d: 'Landscape' },
                        '9:16': { w: 27, h: 48, d: 'Vertical' },
                        '1:1': { w: 36, h: 36, d: 'Square' },
                        '4:3': { w: 40, h: 30, d: 'Classic' },
                        '3:2': { w: 42, h: 28, d: 'Photo' },
                        '21:9': { w: 52, h: 22, d: 'Cinema' },
                      };
                      const v = ratioMap[ar];
                      return (
                        <button key={ar} onClick={() => setField('aspectRatio', ar)} style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                          gap: 8, padding: '14px 8px',
                          background: sel ? '#1a1a1a' : '#171717',
                          border: sel ? '2px solid #fff' : '1px solid #262626',
                          borderRadius: 10,
                          cursor: 'pointer', fontFamily: 'inherit',
                          transition: 'all 0.2s',
                        }}>
                          <div style={{
                            width: v.w * 0.5, height: v.h * 0.5,
                            background: sel ? '#fff' : '#3f3f46',
                            borderRadius: 2,
                            transition: 'background 0.2s',
                          }} />
                          <span style={{ fontSize: 13, fontWeight: 600, color: sel ? '#fff' : '#a1a1aa' }}>{ar}</span>
                          <span style={{ fontSize: 10, color: '#52525b' }}>{v.d}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quality */}
                <div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: '#a1a1aa', marginBottom: 10 }}>
                    Output Quality
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                    {IMAGE_SIZES.map(sz => {
                      const sel = state.imageSize === sz;
                      const qMap = { '1K': 1, '2K': 2, '4K': 3 };
                      return (
                        <button key={sz} onClick={() => setField('imageSize', sz)} style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center',
                          gap: 8, padding: '16px 8px',
                          background: sel ? '#1a1a1a' : '#171717',
                          border: sel ? '2px solid #fff' : '1px solid #262626',
                          borderRadius: 10,
                          cursor: 'pointer', fontFamily: 'inherit',
                          transition: 'all 0.2s',
                        }}>
                          <div style={{ display: 'flex', gap: 3 }}>
                            {[1, 2, 3].map(d => (
                              <div key={d} style={{
                                width: 6, height: 6, borderRadius: 1,
                                background: d <= qMap[sz] ? (sel ? '#fff' : '#52525b') : '#262626',
                              }} />
                            ))}
                          </div>
                          <span style={{ fontSize: 18, fontWeight: 700, color: sel ? '#fff' : '#a1a1aa' }}>{sz}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ Step 2 — Scene ═══ */}
        {step.id === 'scene' && (
          <div className="anim-fade-up" key="s-scene" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ fontSize: 13, color: '#52525b', marginBottom: 4 }}>
              Tap an example or write your own description
            </p>

            {/* Example prompts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                'A woman walking through rain-soaked Tokyo streets at night',
                'A lone hiker standing on a misty mountain peak at sunrise',
                'A futuristic city with flying cars and neon signs',
                'Portrait of an old man with deep wrinkles in dramatic light',
              ].map(text => (
                <button key={text} onClick={() => setField('mood', text)} style={{
                  textAlign: 'left', fontSize: 13, color: '#a1a1aa',
                  padding: '12px 14px',
                  background: state.mood === text ? '#1a1a1a' : '#171717',
                  border: state.mood === text ? '2px solid #fff' : '1px solid #262626',
                  borderRadius: 10, cursor: 'pointer',
                  lineHeight: 1.5, fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1f1f1f'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = state.mood === text ? '#1a1a1a' : '#171717';
                    e.currentTarget.style.color = '#a1a1aa';
                  }}
                >
                  {text}
                </button>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              value={state.mood}
              onChange={e => setField('mood', e.target.value)}
              placeholder="Describe what you want to see..."
              rows={5}
              className="input"
              style={{
                resize: 'none',
                lineHeight: 1.7,
                fontSize: 14,
                marginTop: 4,
              }}
            />
          </div>
        )}

        {/* ═══ Step 3 — Camera ═══ */}
        {step.id === 'camera' && (
          <div className="anim-fade-up" key="s-camera">
            {renderCategory('Shot Type', SHOT_TYPES, 'shotType', false, getIconShot)}
            {renderCategory('Viewing Direction', DIRECTIONS, 'direction', false, getIconDirection)}
            {mode === 'video' && renderCategory('Camera Movement', VIDEO_MOVEMENTS, 'videoMovement', false, getIconVideo)}
          </div>
        )}

        {/* ═══ Step 4 — Mood ═══ */}
        {step.id === 'mood' && (
          <div className="anim-fade-up" key="s-mood">
            {renderCategory('Lighting', LIGHTING, 'lighting', false, getIconLighting)}
            {renderCategory('Filters & Effects', FILTERS, 'filter', true, getIconFilter)}
          </div>
        )}

        {/* ═══ Step 5 — Art Style (new!) ═══ */}
        {step.id === 'artStyle' && (
          <div className="anim-fade-up" key="s-artStyle">
            <div style={{
              background: '#171717',
              border: '1px solid #262626',
              borderRadius: 12,
              padding: '14px 16px',
              marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <IconPaintbrush style={{ width: 18, height: 18, color: '#a1a1aa', flexShrink: 0 }} />
              <p style={{ fontSize: 13, color: '#a1a1aa', margin: 0, lineHeight: 1.5 }}>
                Selecting an art style will <strong style={{ color: '#fff' }}>skip camera & equipment</strong> settings and produce a stylized prompt instead.
              </p>
            </div>
            {renderCategory('Art & Animation Styles', ART_STYLES, 'artStyle', false, getIconArt)}
          </div>
        )}

        {/* ═══ Step 6 — Equipment ═══ */}
        {step.id === 'equipment' && (
          <div className="anim-fade-up" key="s-equipment">
            {renderCategory('Camera Body', CAMERAS, 'camera', false, getIconCamera)}
            {renderCategory('Focal Length', FOCAL_LENGTHS, 'focalLength', false, getIconFocal)}
            {renderCategory('Lens Type', LENSES, 'lens', false, getIconLens)}
            {renderCategory('Film Stock', FILM_STOCKS, 'filmStock', false, getIconFilm)}
          </div>
        )}

        {/* ═══ Step 7 — Style ═══ */}
        {step.id === 'style' && (
          <div className="anim-fade-up" key="s-style">
            {renderCategory('Genre', GENRES, 'genre', false, getIconGenre)}
            {renderCategory('Photographer Style', PHOTOGRAPHERS, 'photographer', false, getIconPhotographer)}
            {renderCategory('Movie Look', MOVIE_LOOKS, 'movieLook', false, getIconMovie)}
          </div>
        )}

        {/* ═══ Step 8 — Result ═══ */}
        {step.id === 'result' && (
          <div className="anim-fade-up" key="s-result" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Prompt display */}
            <div style={{
              background: '#121212',
              border: '1px solid #262626',
              borderRadius: 12,
              padding: '20px',
              position: 'relative',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 14,
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Generated Prompt
                </span>
                <span style={{ fontSize: 11, color: '#3f3f46' }}>
                  {prompt.length} chars
                </span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: '#d4d4d8',
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                  margin: 0,
                  fontWeight: 400,
                }}
                className={prompt ? 'cursor-blink' : ''}
              >
                {prompt || 'No selections made.'}
              </p>
            </div>

            <p style={{ fontSize: 12, color: '#3f3f46', textAlign: 'center', fontWeight: 500 }}>
              Copy and paste into your AI generator
            </p>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              disabled={!prompt}
              className="btn-primary"
              style={{
                width: '100%', padding: '14px',
                fontSize: 14, fontWeight: 600,
                borderRadius: 10,
                background: copied ? '#166534' : (prompt ? '#fff' : '#262626'),
                color: copied ? '#4ade80' : (prompt ? '#000' : '#52525b'),
                border: copied ? '1px solid #22c55e' : 'none',
                gap: 8,
              }}
            >
              {copied ? (
                <>
                  <IconCheck style={{ width: 16, height: 16 }} />
                  Copied — paste in your AI tool
                </>
              ) : (
                <>
                  <IconCopy style={{ width: 16, height: 16 }} />
                  Copy Prompt
                </>
              )}
            </button>

            {/* Start over */}
            <button
              onClick={handleStartOver}
              className="btn-secondary"
              style={{ width: '100%', borderRadius: 10, gap: 8 }}
            >
              <IconReset style={{ width: 14, height: 14 }} />
              Start over
            </button>
          </div>
        )}
      </main>

      {/* ──── Bottom nav (middle steps) ──── */}
      {!isFirst && !isLast && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid #1a1a1a',
        }}>
          <div style={{
            maxWidth: 680, margin: '0 auto', padding: '12px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            {/* Skip button for optional steps */}
            {(step.id === 'equipment' || step.id === 'style' || step.id === 'artStyle') ? (
              <button onClick={goNext} className="btn-secondary" style={{ padding: '10px 20px', borderRadius: 8 }}>
                Skip
              </button>
            ) : (
              <div />
            )}

            {/* Next button */}
            <button
              onClick={goNext}
              className="btn-primary"
              style={{ padding: '12px 28px', borderRadius: 8, gap: 6 }}
            >
              {currentStep < totalSteps - 2 ? 'Next' : 'See Prompt'}
              <IconChevronRight style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      )}

      {/* ──── Bottom CTA (step 1) ──── */}
      {isFirst && mode && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid #1a1a1a',
        }}>
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '12px 20px' }}>
            <button
              onClick={goNext}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', borderRadius: 10, gap: 8 }}
            >
              Start Building
              <IconChevronRight style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
