import { useEffect, useRef } from 'react';

const CHARACTERS = [':', ';', '*', '+', '=', '~', '^', '_', '<', '>', 'i', 'I', 'l', 'L', '!', '1', '?', '/', '\\', '|', '(', ')', '{', '}', '[', ']', 't', 'f', 'j', 'r', 'v', 'x', 'X', '%', '$', '#', '@', '&', '0', 'O', 'o', '9', '8', '6', '5', '3', '2','S', 'A', 'R', 'B','S', 'A', 'R', 'B','S', 'A', 'R', 'B','S', 'A', 'R', 'B'];
const DEFAULT_BACKGROUND = '#050608';
const BACKGROUND_CSS_VAR = '--codex-background';
const CODex_EVENT = 'codex-background-change';
const CELL_SIZE = 16;
const FONT_FAMILY = "'Fira Code', 'Source Code Pro', 'Roboto Mono', monospace";
const FONT_SIZE = 12;
const MIN_SPEED = 24;
const MAX_SPEED = 64;
const INFLUENCE_RADIUS_FACTOR = 0.32;
const POINTER_SMOOTHING = 0.0038;
const OFFSET_EASING_X = 0.18;
const OFFSET_EASING_Y = 0.22;
const BASE_GLYPH_COLOR = 'rgba(120, 190, 255, 0.9)';
const MAX_POINTER_OFFSET_X = CELL_SIZE * 0.4 + 10;
const MAX_POINTER_OFFSET_Y = CELL_SIZE * 0.85 + 14;

type BackgroundChangeDetail = {
  baseColor: string;
  theme: 'dark' | 'light';
};

interface Glyph {
  baseX: number;
  baseY: number;
  char: string;
  noise: number;
  nextChange: number;
  speed: number;
  driftPhase: number;
  offsetX: number;
  offsetY: number;
}

const pickRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

const CodexBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const glyphs: Glyph[] = [];

    let pointerX = 0;
    let pointerY = 0;
    let pointerActive = false;
    let pointerStrength = 0;

    let startTime = 0;
    let previousFrameTime = 0;
    let timeInitialized = false;

    let baseBackground = DEFAULT_BACKGROUND;

    const updateBackgroundFromCSSVar = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      const computed = getComputedStyle(document.documentElement).getPropertyValue(BACKGROUND_CSS_VAR).trim();
      if (computed) {
        baseBackground = computed;
      }
    };

    updateBackgroundFromCSSVar();

    const regenerateGlyphs = () => {
      glyphs.length = 0;
      const columns = Math.ceil(width / CELL_SIZE);
      const rows = Math.ceil(height / CELL_SIZE);
      const now = performance.now();

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          glyphs.push({
            baseX: column * CELL_SIZE,
            baseY: row * CELL_SIZE,
            char: pickRandomChar(),
            noise: Math.random() * Math.PI * 2,
            nextChange: now + 600 + Math.random() * 1600,
            speed: MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED),
            driftPhase: Math.random() * Math.PI * 2,
            offsetX: 0,
            offsetY: 0,
          });
        }
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      context.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
      context.textBaseline = 'top';
      context.textAlign = 'left';

      regenerateGlyphs();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerActive = true;
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) {
        pointerActive = false;
      }
    };

    const handleWindowBlur = () => {
      pointerActive = false;
      pointerStrength = 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrameId);
        pointerActive = false;
        pointerStrength = 0;
        timeInitialized = false;
      } else {
        timeInitialized = false;
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    const handleBackgroundChange = (event: Event) => {
      const detail = (event as CustomEvent<BackgroundChangeDetail>).detail;
      if (detail?.baseColor) {
        baseBackground = detail.baseColor;
      }
    };

    const render = (time: number) => {
      if (!timeInitialized) {
        startTime = time;
        previousFrameTime = time;
        timeInitialized = true;
      }

      const delta = time - previousFrameTime;
      previousFrameTime = time;

      const clampedDelta = Math.max(0, delta);
      const smoothing = Math.min(1, Math.max(0, clampedDelta * POINTER_SMOOTHING));
      const targetStrength = pointerActive ? 1 : 0;
      pointerStrength += (targetStrength - pointerStrength) * smoothing;
      pointerStrength = Math.max(0, Math.min(1, pointerStrength));

      const pointerEngaged = pointerStrength > 0.002;
      const influenceRadius = Math.max(200, Math.min(width, height) * INFLUENCE_RADIUS_FACTOR);
      const influenceRadiusSq = influenceRadius * influenceRadius;
      const inverseRadiusSq = influenceRadiusSq > 0 ? 1 / influenceRadiusSq : 0;
      const travelRange = width + CELL_SIZE;
      const elapsedSeconds = (time - startTime) * 0.001;
      const halfCell = CELL_SIZE * 0.5;

      context.fillStyle = baseBackground;
      context.fillRect(0, 0, width, height);
      context.fillStyle = BASE_GLYPH_COLOR;

      for (let i = 0; i < glyphs.length; i += 1) {
        const glyph = glyphs[i];

        if (time >= glyph.nextChange) {
          glyph.char = pickRandomChar();
          glyph.nextChange = time + 600 + Math.random() * 1600;
          glyph.noise = Math.random() * Math.PI * 2;
        }

        const baseX = (glyph.baseX + elapsedSeconds * glyph.speed) % travelRange - CELL_SIZE;
        const drift = Math.sin(elapsedSeconds * 0.7 + glyph.driftPhase) * 1.2;
        const baseY = glyph.baseY + drift;

        let influence = 0;
        let targetOffsetX = 0;
        let targetOffsetY = 0;

        if (pointerEngaged) {
          const centerX = baseX + glyph.offsetX + halfCell;
          const centerY = baseY + glyph.offsetY + halfCell;
          const dx = centerX - pointerX;
          const dy = centerY - pointerY;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < influenceRadiusSq) {
            influence = 1 - distanceSq * inverseRadiusSq;
            const horizontalSign = dx === 0 ? 0 : dx > 0 ? 1 : -1;
            const verticalSign = dy === 0 ? 0 : dy > 0 ? 1 : -1;

            targetOffsetX = horizontalSign * influence * pointerStrength * MAX_POINTER_OFFSET_X;
            targetOffsetY = verticalSign * influence * pointerStrength * MAX_POINTER_OFFSET_Y;

            glyph.nextChange = Math.min(glyph.nextChange, time + 280 + Math.random() * 360);
          }
        }

        glyph.offsetX += (targetOffsetX - glyph.offsetX) * OFFSET_EASING_X;
        glyph.offsetY += (targetOffsetY - glyph.offsetY) * OFFSET_EASING_Y;

        const drawX = baseX + glyph.offsetX;
        const drawY = baseY + glyph.offsetY;

        const flicker = Math.sin(elapsedSeconds * 2.2 + glyph.noise) * 0.5 + 0.5;
        const alpha = Math.min(0.9, 0.2 + flicker * 0.35 + influence * pointerStrength * 0.45);

        context.globalAlpha = alpha;
        context.fillText(glyph.char, drawX, drawY);
      }

      context.globalAlpha = 1;
      animationFrameId = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    animationFrameId = window.requestAnimationFrame(render);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerout', handlePointerOut);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener(CODex_EVENT, handleBackgroundChange as EventListener);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener(CODex_EVENT, handleBackgroundChange as EventListener);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(5px)',
        opacity: 0.6,
        backgroundColor: 'var(--codex-background, #050608)',
      }}
    />
  );
};

export default CodexBackground;

