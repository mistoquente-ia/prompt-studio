// Helper: convert filename to display name
// e.g. "extreme-close-up.jpg" → "Extreme Close Up"
const toLabel = (filename) =>
  filename
    .replace(/\.(jpg|gif|png|webp)$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const buildOptions = (folder, files) =>
  files.map((f) => ({
    id: f.replace(/\.(jpg|gif|png|webp)$/, ''),
    label: toLabel(f),
    image: `/images/${folder}/${f}`,
  }));

// ─── Shot Types (displayName = user-friendly, label = prompt term) ────
export const SHOT_TYPES = [
  { id: 'extreme-close-up', label: 'Extreme Close Up', displayName: 'Super close detail',        image: '/images/shots/extreme-close-up.jpg' },
  { id: 'close-up',         label: 'Close Up',         displayName: 'Close up',                   image: '/images/shots/close-up.jpg' },
  { id: 'tight-headshot',   label: 'Tight Headshot',   displayName: 'Tight front detail',         image: '/images/shots/tight-headshot.jpg' },
  { id: 'headshot',         label: 'Headshot',         displayName: 'Front / face',               image: '/images/shots/headshot.jpg' },
  { id: 'upper-body',       label: 'Upper Body',       displayName: 'Top half',                   image: '/images/shots/upper-body.jpg' },
  { id: 'medium-shot',      label: 'Medium Shot',      displayName: 'Medium — half frame',        image: '/images/shots/medium-shot.jpg' },
  { id: 'cowboy-shot',      label: 'Cowboy Shot',      displayName: '3/4 frame',                  image: '/images/shots/cowboy-shot.jpg' },
  { id: 'three-quarter-body',label:'Three Quarter Body',displayName:'Almost full frame',           image: '/images/shots/three-quarter-body.jpg' },
  { id: 'entire-body',      label: 'Entire Body',      displayName: 'Full subject',               image: '/images/shots/entire-body.jpg' },
  { id: 'wide-shot',        label: 'Wide Shot',        displayName: 'Wide — full scene',          image: '/images/shots/wide-shot.jpg' },
  { id: 'establishing-shot',label: 'Establishing Shot',displayName: 'Context / location',         image: '/images/shots/establishing-shot.jpg' },
  { id: 'group-shot',       label: 'Group Shot',       displayName: 'Multiple subjects',          image: '/images/shots/group-shot.jpg' },
  { id: 'two-shot',         label: 'Two Shot',         displayName: 'Two subjects together',      image: '/images/shots/two-shot.jpg' },
  { id: 'over-the-shoulder-shot',label:'Over The Shoulder Shot',displayName:'Over the shoulder', image: '/images/shots/over-the-shoulder-shot.jpg' },
  { id: 'point-of-view-shot',label:'Point Of View Shot',displayName:'First-person view (POV)',   image: '/images/shots/point-of-view-shot.jpg' },
  { id: 'reaction-shot',    label: 'Reaction Shot',    displayName: 'Reaction / response',        image: '/images/shots/reaction-shot.jpg' },
  { id: 'reverse-shot',     label: 'Reverse Shot',     displayName: 'Reverse angle',              image: '/images/shots/reverse-shot.jpg' },
  { id: 'insert-shot',      label: 'Insert Shot',      displayName: 'Detail insert',              image: '/images/shots/insert-shot.jpg' },
  { id: 'cutaway-shot',     label: 'Cutaway Shot',     displayName: 'Cutaway (side detail)',      image: '/images/shots/cutaway-shot.jpg' },
  { id: 'birds-eye-view',   label: 'Birds Eye View',   displayName: 'View from above',            image: '/images/shots/birds-eye-view.jpg' },
  { id: 'overhead-shot',    label: 'Overhead Shot',    displayName: 'Directly overhead',          image: '/images/shots/overhead-shot.jpg' },
  { id: 'high-angle-shot',  label: 'High Angle Shot',  displayName: 'Camera looking down',        image: '/images/shots/high-angle-shot.jpg' },
  { id: 'low-angle-shot',   label: 'Low Angle Shot',   displayName: 'Camera looking up',          image: '/images/shots/low-angle-shot.jpg' },
  { id: 'dutch-angle',      label: 'Dutch Angle',      displayName: 'Tilted / dramatic angle',    image: '/images/shots/dutch-angle.jpg' },
  { id: 'worms-eye-view',   label: 'Worms Eye View',   displayName: 'View from the ground',       image: '/images/shots/worms-eye-view.jpg' },
];

// ─── Viewing Directions ──────────────────────────────────────
export const DIRECTIONS = buildOptions('directions', [
  'from-the-front.jpg','from-the-back.jpg','from-the-left.jpg','from-the-right.jpg',
]);

// ─── Lighting ────────────────────────────────────────────────
export const LIGHTING = buildOptions('lighting', [
  'natural-daylight.jpg','golden-hour.jpg','blue-hour.jpg','midday-sun.jpg',
  'overcast-lighting.jpg','open-shade.jpg','moonlight.jpg','window-spill.jpg',
  'high-key-lighting.jpg','low-key-lighting.jpg','soft-lighting.jpg',
  'hard-lighting.jpg','three-point-lighting.jpg','rembrandt-lighting.jpg',
  'loop-lighting.jpg','paramount-lighting.jpg','split-lighting.jpg',
  'broad-lighting.jpg','backlighting-rim-lighting.jpg','silhouette-shadows.jpg',
  'chiaroscuro-lighting.jpg','volumetric-lighting.jpg','neon-lighting.jpg',
  'practical-lighting.jpg','direct-flash.jpg','ring-light.jpg',
  'bounce-lighting.jpg','gobo-lighting.jpg','color-gels.jpg',
  'teal-and-orange.jpg','fog-diffusion.jpg','top-lighting.jpg',
  'underlighting.jpg','candlelight-lighting.jpg','led-streetlights.jpg',
  'sodium-streetlamps.jpg','shopfront-fluorescents.jpg','phone-flashlight.jpg',
  'motivated-lighting.jpg','softbox-key-lighting.jpg','product-side-key.jpg',
  'rim-soft-fill.jpg','top-down-flat-lay.jpg',
]);

// ─── Cameras ─────────────────────────────────────────────────
export const CAMERAS = buildOptions('cameras', [
  'arri-alexa-65.jpg','red-digital-cinema-camera.jpg','sony-venice.jpg',
  'panavision-panaflex.jpg','canon-c500.jpg','sony-fx6.jpg','sony-fx3.jpg',
  'lumix-gh5.jpg','canon-eos-5d.jpg','fujifilm-x-t4.jpg',
  'hasselblad-x1d-ii.jpg','phase-one-xf-iq4.jpg','pentax-645z.jpg',
  'hasselblad-500cm.jpg','mamiya-rb67.jpg','rolleiflex.jpg',
  'leica-m3.jpg','leica-q2-monochrom.jpg','nikon-f2.jpg','nikon-fm2.jpg',
  'canon-ae-1.jpg','pentax-k1000.jpg','minolta-srt-101.jpg',
  'olympus-om-1.jpg','contax-t2.jpg','yashica-t4.jpg','zenit-e.jpg',
  'argus-c3.jpg','lomo-lc-a.jpg','holga-120n.jpg','diana-f.jpg',
  'kodak-brownie.jpg','polaroid-sx-70.jpg','polaroid-600.jpg',
  'kodak-funsaver.jpg','35mm-film-camera.jpg','8mm-film-camera.jpg',
  's16mm-film-camera.jpg','aaton-xtr.jpg','bolex-h16.jpg',
  'gopro-hero.jpg','insta360-x4.jpg','iphone-pro.jpg',
  'old-android-phone.jpg','compact-camera.jpg','webcam.jpg',
  'doorbell-cam.jpg','security-camera.jpg','vhs-camera.jpg',
]);

// ─── Focal Lengths ───────────────────────────────────────────
export const FOCAL_LENGTHS = buildOptions('focal-length', [
  '8mm-fisheye.jpg','14mm-ultra-wide.jpg','24mm-wide-angle.jpg',
  '50mm-standard.jpg','85mm-portrait.jpg','100mm-macro.jpg',
  '200mm-super-telephoto.jpg','300mm-extreme-telephoto.jpg',
]);

// ─── Lenses ──────────────────────────────────────────────────
export const LENSES = buildOptions('lenses', [
  'anamorphic-cinema-lens.jpg','fisheye-lens.jpg','macro-lens.jpg',
  'tilt-shift-lens.jpg','soft-focus-portrait-lens.jpg',
  'petzval-portrait-lens.jpg','helios-44-2-swirly-bokeh.jpg',
  'lensbaby-selective-focus.jpg','holga-style-lens.jpg',
  'toy-plastic-lens.jpg','catadioptric-mirror-lens.jpg',
  'voigtlander-nokton-50mm-f1.jpg',
]);

// ─── Film Stocks ─────────────────────────────────────────────
export const FILM_STOCKS = buildOptions('films', [
  'kodachrome-64.jpg','kodak-gold-200.jpg','kodak-ultramax-400.jpg',
  'kodak-tri-x-400.jpg','ektar-100.jpg','kodak-vision3-500t.jpg',
  'kodak-vision3-imax.jpg','portra-160.jpg','portra-400.jpg',
  'portra-800.jpg','ektachrome-e100.jpg','fuji-superia-400.jpg',
  'fuji-pro-400h.jpg','fuji-acros-100.jpg','fujicolor-pro.jpg',
  'velvia-100.jpg','provia-100f.jpg','cinestill-50d.jpg',
  'cinestill-800t.jpg','ilford-hp5-plus.jpg','ilford-delta.jpg',
  'ilford-xp2-super.jpg','agfa-vista.jpg',
  'lomography-color-tiger.jpg','lomography-purple.jpg',
  'lomochrome-metropolis.jpg','lomochrome-turquoise.jpg',
  'lomography-berlin-kino-b-w.jpg','lomography-lady-grey-400.jpg',
  'lomography-lobster-redscale.jpg',
]);

// ─── Genres ──────────────────────────────────────────────────
export const GENRES = buildOptions('genres', [
  'portrait.jpg','street-photography.jpg','landscape.jpg','fashion.jpg',
  'high-fashion.jpg','editorial.jpg','documentary.jpg','reportage.jpg',
  'photojournalism.jpg','street-fashion.jpg','beauty.jpg','glamour.jpg',
  'product.jpg','food.jpg','architecture.jpg','nature-photography.jpg',
  'wildlife.jpg','sports.jpg','action-photography.jpg','macro.jpg',
  'abstract.jpg','fine-art.jpg','conceptual-photography.jpg',
  'surrealism.jpg','minimalist.jpg','experimental.jpg',
  'double-exposure.jpg','analog.jpg','lomo-style.jpg','instant.jpg',
  'pinhole.jpg','tintype.jpg','large-format.jpg','pictorialist.jpg',
  'modernist.jpg','boudoir-photography.jpg','wedding-photography.jpg',
  'family-photography.jpg','newborn-photography.jpg',
  'event-photography.jpg','automotive.jpg','travel-photography.jpg',
  'environmental-portrait.jpg','candid.jpg','night-photography.jpg',
  'astrophotography.jpg','aerial-photography.jpg',
  'drone-photography.jpg','underwater-photography.jpg',
  'cityscape-photography.jpg','seascape-photography.jpg',
  'urban-exploration.jpg','still-life.jpg','paparazzi.jpg',
]);

// ─── Photographers ───────────────────────────────────────────
export const PHOTOGRAPHERS = buildOptions('photographers', [
  'ansel-adams.jpg','annie-leibovitz.jpg','henri-cartier-bresson.jpg',
  'richard-avedon.jpg','helmut-newton.jpg','peter-lindbergh.jpg',
  'steve-mccurry.jpg','sebastiao-salgado.jpg','robert-frank.jpg',
  'robert-capa.jpg','dorothea-lange.jpg','walker-evans.jpg',
  'w-eugene-smith.jpg','elliott-erwitt.jpg','garry-winogrand.jpg',
  'lee-friedlander.jpg','william-eggleston.jpg','stephen-shore.jpg',
  'saul-leiter.jpg','vivian-maier.jpg','daido-moriyama.jpg',
  'fan-ho.jpg','man-ray.jpg','alfred-stieglitz.jpg','august-sander.jpg',
  'eugene-atget.jpg','bill-brandt.jpg','george-hurrell.jpg',
  'yousuf-karsh.jpg','herb-ritts.jpg','guy-bourdin.jpg',
  'david-lachapelle.jpg','terry-richardson.jpg','juergen-teller.jpg',
  'cindy-sherman.jpg','nan-goldin.jpg','wolfgang-tillmans.jpg',
  'andreas-gursky.jpg','thomas-struth.jpg','hiroshi-sugimoto.jpg',
  'rinko-kawauchi.jpg','michael-kenna.jpg','todd-hido.jpg',
  'gregory-crewdson.jpg','jeff-wall.jpg','philip-lorca-dicorcia.jpg',
  'nick-knight.jpg','rankin.jpg','platon.jpg','mary-ellen-mark.jpg',
  'martin-schoeller.jpg','paolo-roversi.jpg','tim-walker.jpg',
  'miles-aldridge.jpg','james-bidgood.jpg','nadav-kander.jpg',
  'david-yarrow.jpg','hans-bellmer.jpg','jerry-uelsmann.jpg',
  'germaine-krull.jpg','laszlo-moholy-nagy.jpg','anne-brigman.jpg',
  'barbara-kruger.jpg','bernd-and-hilla-becher.jpg','kim-keever.jpg',
  'misha-gordin.jpg','lotte-reiniger.jpg','mickalene-thomas.jpg',
  'zanele-muholi.jpg','tyler-shields.jpg','chris-burkard.jpg',
  'alex-strohl.jpg','benjamin-hardman.jpg','dylan-furst.jpg',
  'reuben-wu.jpg','liam-wong.jpg','brandon-woelfel.jpg',
  'alex-webb.jpg','bryan-schutmaat.jpg','irene-rudnyk.jpg',
  'julia-trotti.jpg','mango-street.jpg','manny-ortiz.jpg',
  'sorelle-amore.jpg','peter-mckinnon.jpg','chris-hau.jpg',
  'daniel-schiffer.jpg','jord-hammond.jpg','jordi-koalitic.jpg',
  'alec-soth.jpg','alen-palander.jpg','ando-fuchs.jpg',
  'chris-friel.jpg','nathan-wirth.jpg','miko-lagerstedt.jpg',
  'northborders.jpg','oleg-oprisco.jpg','alberto-seveso.jpg',
  'rehahn.jpg','7th-era.jpg',
]);

// ─── Movie Looks ─────────────────────────────────────────────
export const MOVIE_LOOKS = buildOptions('movies', [
  'blade-runner.jpg','blade-runner-2049.jpg','the-matrix.jpg','matrix.jpg',
  'the-godfather.jpg','the-shining.jpg','the-grand-budapest-hotel.jpg',
  'mad-max-fury-road.jpg','dune.jpg','arrival.jpg','annihilation.jpg',
  'drive.jpg','john-wick.jpg','joker.jpg','sicario.jpg','skyfall.jpg',
  'the-dark-knight.jpg','fight-club.jpg','parasite.jpg','moonlight.jpg',
  'la-la-land.jpg','in-the-mood-for-love.jpg','lost-in-translation.jpg',
  'the-revenant.jpg','there-will-be-blood.jpg','no-country-for-old-men.jpg',
  '2001-a-space-odyssey.jpg','alien.jpg','star-wars-a-new-hope.jpg',
  'jurassic-park.jpg','jaws.jpg','raiders-of-the-lost-ark.jpg',
  'back-to-the-future.jpg','ghostbusters.jpg','terminator-2.jpg',
  'the-lord-of-the-rings.jpg','gladiator.jpg','saving-private-ryan.jpg',
  'full-metal-jacket.jpg','apocalypse-now.jpg','the-hurt-locker.jpg',
  'black-hawk-down.jpg','zero-dark-thirty.jpg','the-bourne-ultimatum.jpg',
  'children-of-men.jpg','district-9.jpg','avatar.jpg','life-of-pi.jpg',
  'the-shape-of-water.jpg','pans-labyrinth.jpg','amelie.jpg',
  'roma.jpg','days-of-heaven.jpg','the-assassination-of-jesse-james.jpg',
  'collateral.jpg','minority-report.jpg','oblivion.jpg',
  'the-neverending-story.jpg','hook.jpg','who-framed-roger-rabbit.jpg',
  'the-dark-crystal.jpg','beetlejuice.jpg','casablanca.jpg',
  'the-maltese-falcon.jpg','psycho.jpg','nosferatu.jpg',
  'metropolis-1927.jpg','the-exorcist.jpg','halloween.jpg',
  'the-texas-chain-saw-massacre.jpg','saw.jpg','hereditary.jpg',
  'the-witch.jpg','the-lighthouse.jpg','midsommar.jpg',
  'enter-the-void.jpg','eraserhead.jpg','under-the-skin.jpg',
  'suspiria-1977.jpg','the-cell.jpg','the-thing.jpg',
  'dark-city.jpg','stalker.jpg','sin-city.jpg','kill-bill-volume-1.jpg',
  'trainspotting.jpg','city-of-god.jpg','o-brother-where-art-thou.jpg',
  'the-good-the-bad-and-the-ugly.jpg','chinatown.jpg',
  'lawrence-of-arabia.jpg','ben-hur-1959.jpg','cleopatra-1963.jpg',
  'the-ten-commandments.jpg','king-kong-1933.jpg','grease.jpg',
  'notting-hill.jpg','twilight.jpg','titanic.jpg','1917.jpg',
  'nope.jpg','godzilla-minus-one.jpg','close-encounters-of-the-third-kind.jpg',
  'crouching-tiger-hidden-dragon.jpg','conan-the-barbarian.jpg',
  'monty-python-and-the-holy-grail.jpg','the-ring.jpg',
  'ash-vs-the-evil-dead.jpg','game-of-thrones.jpg',
  'stranger-things.jpg','squid-game.jpg','utopia.jpg',
]);

// ─── Filters (multi-select) ─────────────────────────────────
export const FILTERS = buildOptions('filters', [
  'black-and-white.jpg','sepia-tone.jpg','film-grain.jpg',
  'soft-focus.jpg','bokeh.jpg','vignette.jpg','lens-flare.jpg',
  'light-leaks.jpg','motion-blur.jpg','long-exposure.jpg',
  'overexposed.jpg','underexposed.jpg','hdr-tone-mapping.jpg',
  'cross-processed.jpg','split-tone.jpg','selective-color.jpg',
  'dreamy-haze.jpg','orton-glow.jpg','bloom-glow.jpg',
  'chromatic-aberration.jpg','radial-blur.jpg','nd-filter.jpg',
  'infrared-filter.jpg','cyanotype.jpg','solarized.jpg',
  'posterized.jpg','duotone.jpg','halftone.jpg',
  'color-filter.jpg','black-mist-filter.jpg',
  'glitch-style.jpg','datamosh-glitch.jpg','pixel-sort.jpg',
  'crt-scanlines.jpg','hologram-effect.jpg','liquify-smear.jpg',
  'mirror-split.jpg','kaleidoscope.jpg','collage-cutout.jpg',
  'desaturated-grunge.jpg','newspaper-print.jpg',
  'risograph-print.jpg','off-register-cmyk-print.jpg','photocopy-xerox.jpg',
]);

// ─── Video Movements ─────────────────────────────────────────
export const VIDEO_MOVEMENTS = buildOptions('video-movements', [
  'static-lock-off.gif','pan.gif','tilt-up.gif','tilt-down.gif',
  'dolly-in.gif','dolly-out.gif','dolly-zoom.gif','truck.gif',
  'pedestal-up.gif','pedestal-down.gif','orbit.gif','arc-shot.gif',
  'follow.gif','tracking.gif','handheld.gif','crash-zoom.gif',
  'zoom.gif','whip-pan.gif','pull-focus.gif','slow-motion.gif',
  'time-lapse.gif','aerial-photography.gif','camera-jib-up.gif',
  'camera-jib-down.gif','reverse-shot.gif','shot-switch.gif',
]);

// ─── Aspect Ratios ───────────────────────────────────────────
export const ASPECT_RATIOS = [
  '16:9', '9:16', '1:1', '4:3', '3:2', '21:9',
];

// ─── Image Sizes ─────────────────────────────────────────────
export const IMAGE_SIZES = ['1K', '2K', '4K'];

// ─── All categories metadata ────────────────────────────────
export const CATEGORIES = [
  { key: 'shotType',    label: 'Shot Type',        options: SHOT_TYPES,    multiSelect: false },
  { key: 'direction',   label: 'Viewing Direction', options: DIRECTIONS,    multiSelect: false },
  { key: 'lighting',    label: 'Lighting',          options: LIGHTING,      multiSelect: false },
  { key: 'camera',      label: 'Camera',            options: CAMERAS,       multiSelect: false },
  { key: 'focalLength', label: 'Focal Length',       options: FOCAL_LENGTHS, multiSelect: false },
  { key: 'lens',        label: 'Lens',              options: LENSES,        multiSelect: false },
  { key: 'filmStock',   label: 'Film Stock',         options: FILM_STOCKS,   multiSelect: false },
  { key: 'genre',       label: 'Genre',             options: GENRES,        multiSelect: false },
  { key: 'photographer',label: 'Photographer',      options: PHOTOGRAPHERS, multiSelect: false },
  { key: 'movieLook',   label: 'Movie Look',        options: MOVIE_LOOKS,   multiSelect: false },
  { key: 'filter',      label: 'Filters',           options: FILTERS,       multiSelect: true  },
  { key: 'videoMovement',label:'Video Movement',     options: VIDEO_MOVEMENTS,multiSelect: false },
];
