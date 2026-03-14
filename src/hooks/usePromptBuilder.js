import { useReducer, useMemo, useCallback } from 'react';

const initialState = {
  shotType: '',
  direction: '',
  lighting: '',
  mood: '',
  camera: '',
  focalLength: '',
  lens: '',
  filmStock: '',
  genre: '',
  photographer: '',
  movieLook: '',
  filter: [],
  videoMovement: '',
  artStyle: '',
  aspectRatio: '16:9',
  imageSize: '1K',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };

    case 'TOGGLE_SINGLE': {
      const current = state[action.field];
      return {
        ...state,
        [action.field]: current === action.value ? '' : action.value,
      };
    }

    case 'TOGGLE_MULTI': {
      const arr = state[action.field];
      const exists = arr.includes(action.value);
      return {
        ...state,
        [action.field]: exists
          ? arr.filter((v) => v !== action.value)
          : [...arr, action.value],
      };
    }

    case 'RESET':
      return { ...initialState };

    case 'LOAD_PRESET':
      return { ...initialState, ...action.data };

    default:
      return state;
  }
}

/**
 * Build the final prompt string.
 * Now supports artStyle — when an art style is selected,
 * camera/lens/filmStock are skipped in the prompt.
 */
function buildPrompt(state) {
  const hasArtStyle = !!state.artStyle;
  const hasVideoMovement = !!state.videoMovement;

  if (hasVideoMovement) {
    // ── Seedance / Kling video prompt format ──
    const parts = [];

    const shotParts = [];
    if (state.shotType) shotParts.push(state.shotType);
    if (state.direction) shotParts.push(state.direction);
    if (shotParts.length) parts.push(shotParts.join(', '));

    if (state.mood) parts.push(state.mood);
    if (state.lighting) parts.push(state.lighting);
    parts.push(`Camera: ${state.videoMovement}`);

    if (!hasArtStyle) {
      const techParts = [];
      if (state.camera) techParts.push(`Shot on ${state.camera}`);
      if (state.focalLength) techParts.push(state.focalLength);
      if (state.lens) techParts.push(state.lens);
      if (state.filmStock) techParts.push(state.filmStock);
      if (techParts.length) parts.push(techParts.join(', '));
    }

    if (state.artStyle) parts.push(state.artStyle);
    if (state.genre) parts.push(state.genre + ' style');
    if (state.photographer) parts.push(`in the style of ${state.photographer}`);
    if (state.movieLook) parts.push(`${state.movieLook} color grade`);
    if (state.filter.length) parts.push(state.filter.join(', '));

    const metaParts = [];
    if (state.aspectRatio) metaParts.push(state.aspectRatio);
    if (state.imageSize) metaParts.push(state.imageSize);
    if (metaParts.length) parts.push(metaParts.join(' '));

    return parts.join('. ') + '.';
  }

  // ── Standard image prompt format ──
  const segments = [];
  if (state.shotType) segments.push(state.shotType);
  if (state.direction) segments.push(state.direction);
  if (state.lighting) segments.push(state.lighting);
  if (state.mood) segments.push(state.mood);

  // Skip camera/lens if art style is selected
  if (!hasArtStyle) {
    if (state.camera) segments.push(`shot on ${state.camera}`);
    if (state.focalLength) segments.push(state.focalLength);
    if (state.lens) segments.push(state.lens);
    if (state.filmStock) segments.push(state.filmStock);
  }

  if (state.artStyle) segments.push(state.artStyle);
  if (state.genre) segments.push(state.genre);
  if (state.photographer) segments.push(`style of ${state.photographer}`);
  if (state.movieLook) segments.push(`${state.movieLook} look`);
  if (state.filter.length) segments.push(state.filter.join(', '));
  if (state.aspectRatio) segments.push(state.aspectRatio);
  if (state.imageSize) segments.push(state.imageSize);

  return segments.join(', ');
}

export function usePromptBuilder() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const prompt = useMemo(() => buildPrompt(state), [state]);

  // Whether an art style is selected (skip camera/lens steps)
  const isArtMode = !!state.artStyle;

  const toggleSingle = useCallback(
    (field, value) => dispatch({ type: 'TOGGLE_SINGLE', field, value }),
    []
  );

  const toggleMulti = useCallback(
    (field, value) => dispatch({ type: 'TOGGLE_MULTI', field, value }),
    []
  );

  const setField = useCallback(
    (field, value) => dispatch({ type: 'SET_FIELD', field, value }),
    []
  );

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const loadPreset = useCallback(
    (data) => dispatch({ type: 'LOAD_PRESET', data }),
    []
  );

  return {
    state,
    prompt,
    isArtMode,
    toggleSingle,
    toggleMulti,
    setField,
    reset,
    loadPreset,
  };
}
