import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Sparkles, Copy, Check, RotateCcw, SlidersHorizontal } from 'lucide-react';
import SelectorGrid from './components/SelectorGrid';
import { usePromptBuilder } from './hooks/usePromptBuilder';
import {
  CATEGORIES, ASPECT_RATIOS, IMAGE_SIZES,
  SHOT_TYPES, DIRECTIONS, VIDEO_MOVEMENTS,
  LIGHTING, CAMERAS, FOCAL_LENGTHS, LENSES, FILM_STOCKS,
  GENRES, PHOTOGRAPHERS, MOVIE_LOOKS, FILTERS,
} from './data/categories';

/* ─── Visual Aspect Ratio Shapes ─── */
const RATIO_VISUALS = {
  '16:9': { w: 48, h: 27, icon: '🖥️', desc: 'Landscape wide' },
  '9:16': { w: 27, h: 48, icon: '📱', desc: 'Vertical / Reels' },
  '1:1':  { w: 36, h: 36, icon: '⬜', desc: 'Square / Instagram' },
  '4:3':  { w: 40, h: 30, icon: '📺', desc: 'Classic TV' },
  '3:2':  { w: 42, h: 28, icon: '📷', desc: 'Photo standard' },
  '21:9': { w: 52, h: 22, icon: '🎬', desc: 'Ultrawide / Cinema' },
};

const SIZE_VISUALS = {
  '1K': { desc: 'Fast · 1024px', quality: 1 },
  '2K': { desc: 'Balanced · 2048px', quality: 2 },
  '4K': { desc: 'Best quality · 4096px', quality: 3 },
};

const STEPS = [
  { id: 'format',    title: 'What do you want to create?', emoji: '✨' },
  { id: 'scene',     title: 'Describe what you want to see', emoji: '💭' },
  { id: 'camera',    title: 'Choose the camera angle', emoji: '📐' },
  { id: 'mood',      title: 'Pick the lighting & mood', emoji: '💡' },
  { id: 'equipment', title: 'Choose the camera look', subtitle: 'Optional — skip if unsure', emoji: '📸' },
  { id: 'style',     title: 'Choose a style reference', subtitle: 'Optional — skip if unsure', emoji: '🎨' },
  { id: 'result',    title: 'Your prompt is ready!', emoji: '🎉' },
];

function App() {
  const {
    state,
    prompt,
    toggleSingle,
    toggleMulti,
    setField,
    reset,
  } = usePromptBuilder();

  const [currentStep, setCurrentStep] = useState(0);
  const [mode, setMode] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const step = STEPS[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === STEPS.length - 1;

  const canGoNext = () => {
    if (currentStep === 0) return !!mode;
    return true;
  };

  const goNext = () => {
    if (!canGoNext()) return;
    setCurrentStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleCopy = () => {
    if (!prompt) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleStartOver = () => {
    reset();
    setMode(null);
    setCurrentStep(0);
    setCopied(false);
  };

  const handleSelect = (categoryKey, multiSelect, label) => {
    if (multiSelect) toggleMulti(categoryKey, label);
    else toggleSingle(categoryKey, label);
  };

  const renderCategory = (label, options, categoryKey, multiSelect = false) => {
    const val = state[categoryKey];
    const count = multiSelect ? (Array.isArray(val) ? val.length : 0) : (val ? 1 : 0);
    return (
      <div key={categoryKey} className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-zinc-300">{label}</h3>
          {count > 0 && (
            <span className="text-[11px] text-white bg-white/10 px-2 py-0.5 rounded-full">
              {count} selected
            </span>
          )}
        </div>
        <p className="text-[11px] text-zinc-600 -mt-1">Tap to select · tap again to deselect</p>
        <SelectorGrid
          options={options}
          selectedValue={val}
          onSelect={(lbl) => handleSelect(categoryKey, multiSelect, lbl)}
          multiSelect={multiSelect}
          categoryKey={categoryKey}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Header with back + progress */}
      {!isFirst && (
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#262626]">
          <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
            {/* Progress bar */}
            <div className="flex-1 mx-6">
              <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep) / (STEPS.length - 1)) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-[11px] text-zinc-600 tabular-nums">
              {currentStep}/{STEPS.length - 1}
            </span>
          </div>
        </header>
      )}

      {/* Main */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        {/* Step title with emoji */}
        <div className="mb-6">
          <span className="text-3xl mb-2 block">{step.emoji}</span>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            {step.title}
          </h1>
          {step.subtitle && (
            <p className="text-sm text-zinc-500 mt-1">{step.subtitle}</p>
          )}
        </div>

        {/* ═══ STEP 1: Format ═══ */}
        {step.id === 'format' && (
          <div className="space-y-8">
            <div className="text-center mb-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                Prompt Studio
              </span>
            </div>

            {/* Image vs Video — visual cards with sample images */}
            <div className="grid grid-cols-2 gap-3">
              {/* Image card */}
              <button
                onClick={() => setMode('image')}
                className={`
                  group relative overflow-hidden rounded-2xl border-2 transition-all duration-200 cursor-pointer
                  ${mode === 'image' ? 'border-white' : 'border-[#262626] hover:border-zinc-600'}
                `}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/shots/close-up.jpg"
                    alt="Image example"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-300
                      ${mode === 'image' ? 'opacity-80' : 'opacity-40 group-hover:opacity-60'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <span className="text-2xl mb-1 block">📸</span>
                    <span className="text-lg font-bold text-white block">Image</span>
                    <span className="text-[11px] text-zinc-400">Generate a photo</span>
                  </div>
                </div>
                {mode === 'image' && (
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                  </div>
                )}
              </button>

              {/* Video card */}
              <button
                onClick={() => setMode('video')}
                className={`
                  group relative overflow-hidden rounded-2xl border-2 transition-all duration-200 cursor-pointer
                  ${mode === 'video' ? 'border-white' : 'border-[#262626] hover:border-zinc-600'}
                `}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src="/images/video-movements/dolly-zoom.gif"
                    alt="Video example"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-300
                      ${mode === 'video' ? 'opacity-80' : 'opacity-40 group-hover:opacity-60'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                    <span className="text-2xl mb-1 block">🎬</span>
                    <span className="text-lg font-bold text-white block">Video</span>
                    <span className="text-[11px] text-zinc-400">Generate a clip</span>
                  </div>
                </div>
                {mode === 'video' && (
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                  </div>
                )}
              </button>
            </div>

            {/* Aspect Ratio — VISUAL shapes */}
            {mode && (
              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="text-sm font-medium text-zinc-300 mb-1">📐 Shape</h3>
                  <p className="text-[11px] text-zinc-600 mb-3">Choose the shape of your {mode}</p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {ASPECT_RATIOS.map((ar) => {
                      const v = RATIO_VISUALS[ar];
                      return (
                        <button
                          key={ar}
                          onClick={() => setField('aspectRatio', ar)}
                          className={`
                            flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border-2 transition-all cursor-pointer
                            ${state.aspectRatio === ar
                              ? 'border-white bg-white/5'
                              : 'border-[#262626] hover:border-zinc-600 bg-[#171717]'
                            }
                          `}
                        >
                          {/* Shape preview */}
                          <div className="flex items-center justify-center h-12">
                            <div
                              className={`rounded-sm transition-colors ${
                                state.aspectRatio === ar ? 'bg-white' : 'bg-zinc-600'
                              }`}
                              style={{ width: v.w * 0.65, height: v.h * 0.65 }}
                            />
                          </div>
                          <span className={`text-[10px] font-bold ${state.aspectRatio === ar ? 'text-white' : 'text-zinc-500'}`}>
                            {ar}
                          </span>
                          <span className="text-[8px] text-zinc-600 leading-tight text-center">
                            {v.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Resolution — visual quality bars */}
                <div>
                  <h3 className="text-sm font-medium text-zinc-300 mb-1">✨ Quality</h3>
                  <p className="text-[11px] text-zinc-600 mb-3">Higher quality = slower generation</p>
                  <div className="grid grid-cols-3 gap-2">
                    {IMAGE_SIZES.map((sz) => {
                      const v = SIZE_VISUALS[sz];
                      return (
                        <button
                          key={sz}
                          onClick={() => setField('imageSize', sz)}
                          className={`
                            flex flex-col items-center gap-2 py-4 rounded-xl border-2 transition-all cursor-pointer
                            ${state.imageSize === sz
                              ? 'border-white bg-white/5'
                              : 'border-[#262626] hover:border-zinc-600 bg-[#171717]'
                            }
                          `}
                        >
                          {/* Quality indicator dots */}
                          <div className="flex gap-1">
                            {[1, 2, 3].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                  dot <= v.quality
                                    ? (state.imageSize === sz ? 'bg-white' : 'bg-zinc-500')
                                    : 'bg-zinc-800'
                                }`}
                              />
                            ))}
                          </div>
                          <span className={`text-sm font-bold ${state.imageSize === sz ? 'text-white' : 'text-zinc-500'}`}>
                            {sz}
                          </span>
                          <span className="text-[9px] text-zinc-600">{v.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ STEP 2: Scene ═══ */}
        {step.id === 'scene' && (
          <div className="space-y-3">
            {/* Example prompts as inspiration */}
            <div className="grid grid-cols-1 gap-2 mb-4">
              {[
                { emoji: '🌃', text: 'A woman walking through rain-soaked Tokyo streets at night' },
                { emoji: '🏔️', text: 'A lone hiker standing on a misty mountain peak at sunrise' },
                { emoji: '🚀', text: 'A futuristic city with flying cars and neon signs' },
              ].map((ex) => (
                <button
                  key={ex.text}
                  onClick={() => setField('mood', ex.text)}
                  className="text-left px-3 py-2.5 bg-[#171717] border border-[#262626] rounded-xl
                             text-[12px] text-zinc-500 hover:text-zinc-300 hover:border-zinc-500
                             transition-all cursor-pointer flex items-center gap-2"
                >
                  <span className="text-base flex-shrink-0">{ex.emoji}</span>
                  <span className="truncate">{ex.text}</span>
                </button>
              ))}
              <p className="text-[10px] text-zinc-600 text-center">👆 Tap an example or write your own below</p>
            </div>

            <div className="relative">
              <Sparkles className="absolute left-4 top-4 w-5 h-5 text-zinc-600" />
              <textarea
                value={state.mood}
                onChange={(e) => setField('mood', e.target.value)}
                placeholder="Describe what you want to see in the image or video..."
                rows={4}
                className="w-full pl-12 pr-4 py-4 bg-[#171717] border border-[#262626] rounded-2xl
                           text-[15px] leading-relaxed text-white placeholder-zinc-600 resize-none
                           focus:outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
          </div>
        )}

        {/* ═══ STEP 3: Camera ═══ */}
        {step.id === 'camera' && (
          <div className="space-y-8">
            <p className="text-[12px] text-zinc-500 -mt-4 mb-2">
              👇 Scroll through the images and tap the one that looks right
            </p>
            {renderCategory('📷 Shot Type — How close is the camera?', SHOT_TYPES, 'shotType')}
            {renderCategory('👁️ Viewing Direction — Where is the camera looking?', DIRECTIONS, 'direction')}
            {mode === 'video' && renderCategory('🎥 Camera Movement — How does the camera move?', VIDEO_MOVEMENTS, 'videoMovement')}
          </div>
        )}

        {/* ═══ STEP 4: Mood ═══ */}
        {step.id === 'mood' && (
          <div className="space-y-8">
            <p className="text-[12px] text-zinc-500 -mt-4 mb-2">
              👇 Pick the lighting that matches the mood you want
            </p>
            {renderCategory('💡 Lighting — What kind of light?', LIGHTING, 'lighting')}

            {/* Collapsible Filters toggle */}
            <div className="border border-[#262626] rounded-xl overflow-hidden">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between px-4 py-3 bg-[#171717] hover:bg-[#1e1e1e] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <SlidersHorizontal className="w-4 h-4 text-zinc-400" />
                  <div className="text-left">
                    <span className="text-sm font-medium text-zinc-300 block">🎭 Filters & Effects</span>
                    <span className="text-[10px] text-zinc-600">Add film grain, bokeh, lens flare and more</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {Array.isArray(state.filter) && state.filter.length > 0 && (
                    <span className="text-[10px] text-white bg-white/10 px-2 py-0.5 rounded-full">
                      {state.filter.length} active
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                </div>
              </button>
              {showFilters && (
                <div className="px-4 pb-4 pt-2 bg-[#131313]">
                  <p className="text-[11px] text-zinc-600 mb-3">Tap to add · tap again to remove · select multiple</p>
                  <SelectorGrid
                    options={FILTERS}
                    selectedValue={state.filter}
                    onSelect={(lbl) => handleSelect('filter', true, lbl)}
                    multiSelect={true}
                    categoryKey="filter"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══ STEP 5: Equipment ═══ */}
        {step.id === 'equipment' && (
          <div className="space-y-8">
            <p className="text-[12px] text-zinc-500 -mt-4 mb-2">
              🤷 Don't know cameras? Just skip this step — the AI will choose for you!
            </p>
            {renderCategory('📸 Camera Body', CAMERAS, 'camera')}
            {renderCategory('🔭 Focal Length — Zoom level', FOCAL_LENGTHS, 'focalLength')}
            {renderCategory('🔍 Lens Type', LENSES, 'lens')}
            {renderCategory('🎞️ Film Stock — Color style', FILM_STOCKS, 'filmStock')}
          </div>
        )}

        {/* ═══ STEP 6: Style ═══ */}
        {step.id === 'style' && (
          <div className="space-y-8">
            <p className="text-[12px] text-zinc-500 -mt-4 mb-2">
              🎨 Pick a style you like — or skip to finish!
            </p>
            {renderCategory('🎭 Genre — What type of story?', GENRES, 'genre')}
            {renderCategory('📸 Photographer Style — Who inspires you?', PHOTOGRAPHERS, 'photographer')}
            {renderCategory('🎬 Movie Look — Color grade from a film', MOVIE_LOOKS, 'movieLook')}
          </div>
        )}

        {/* ═══ STEP 7: Result ═══ */}
        {step.id === 'result' && (
          <div className="space-y-5">
            <div className="bg-[#171717] border border-[#262626] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">📋</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Your Prompt
                </span>
                <span className="text-[10px] text-zinc-700 font-mono ml-auto">
                  {prompt.length} characters
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-zinc-200 break-words whitespace-pre-wrap">
                {prompt || 'No selections made.'}
              </p>
            </div>

            <p className="text-[11px] text-zinc-600 text-center px-4">
              👆 Copy this text and paste it into your AI image/video generator
            </p>

            <button
              onClick={handleCopy}
              disabled={!prompt}
              className={`
                w-full py-4 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer
                flex items-center justify-center gap-2
                ${prompt
                  ? copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-black hover:bg-zinc-200 active:scale-[0.98]'
                  : 'bg-[#171717] text-zinc-600 cursor-not-allowed'
                }
              `}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                  Copied! Now paste it in your AI tool
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" strokeWidth={2} />
                  Copy to Clipboard
                </>
              )}
            </button>

            <button
              onClick={handleStartOver}
              className="w-full py-3 rounded-xl text-sm font-medium text-zinc-500 hover:text-white
                         border border-[#262626] hover:border-zinc-500 transition-all cursor-pointer
                         flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Start over
            </button>
          </div>
        )}
      </main>

      {/* Bottom nav — middle steps */}
      {!isFirst && !isLast && (
        <div className="sticky bottom-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-[#262626]">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
            {/* Skip button for optional steps */}
            {(step.id === 'equipment' || step.id === 'style') && (
              <button
                onClick={goNext}
                className="px-4 py-2.5 text-sm text-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                Skip
              </button>
            )}
            <div className="flex-1" />
            <button
              onClick={goNext}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-white text-black text-sm font-semibold
                         rounded-xl hover:bg-zinc-200 active:scale-[0.97] transition-all cursor-pointer"
            >
              {currentStep < STEPS.length - 2 ? (
                <>
                  Next step
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  See my prompt
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA — step 1 */}
      {isFirst && mode && (
        <div className="sticky bottom-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-[#262626]">
          <div className="max-w-2xl mx-auto px-4 py-3">
            <button
              onClick={goNext}
              className="w-full py-3.5 bg-white text-black text-sm font-semibold rounded-xl
                         hover:bg-zinc-200 active:scale-[0.98] transition-all cursor-pointer
                         flex items-center justify-center gap-2"
            >
              Let's go!
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
