"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const PINK       = "#FF3F6C";
const CHARCOAL   = "#282C3F";
const GREEN      = "#03A685";
const WHITE      = "#FFFFFF";
const GREY_TEXT  = "#535766";
const LIGHT_GREY = "#F4F4F5";
const FONT       = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

const TOTAL = 50; // seconds
const DESIGN_W = 390;
const DESIGN_H = 844;

// ── Easing helpers ────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const p  = (t: number, a: number, b: number) => clamp((t - a) / (b - a), 0, 1);
const eo = (x: number) => 1 - Math.pow(1 - x, 3);
const ei = (x: number) => x * x * x;
const eio= (x: number) => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2,3)/2;
const lr = (a: number, b: number, t: number) => a + (b - a) * t;

// ── useViewportScale — copied from Blinkit D3 promo.js exactly ───────────────
function useViewportScale() {
  const [scale, setScale]       = useState(1);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const landscape = vw > vh;
      setIsLandscape(landscape);

      if (vw >= DESIGN_W) {
        // Desktop or wide enough — scale up proportionally, or keep 1
        const scaleByW = vw >= DESIGN_W ? Math.min(vw / DESIGN_W, vh / DESIGN_H) : vw / DESIGN_W;
        setScale(Math.min(scaleByW, 2.2)); // cap at 2.2× to avoid massive UI
        return;
      }
      // Narrow mobile — fit to width
      const scaleByW = vw / DESIGN_W;
      const scaleByH = vh / DESIGN_H;
      setScale(Math.min(scaleByW, scaleByH));
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return { scale, isLandscape };
}

// ── Portrait/landscape hint ───────────────────────────────────────────────────
function LandscapeHint() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.72)",
        borderRadius: 40,
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        zIndex: 999,
        fontFamily: FONT,
        pointerEvents: "none" as const,
      }}
    >
      <span style={{ fontSize: 20 }}>↺</span>
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" as const }}>
        Rotate for best experience
      </span>
    </div>
  );
}

// ── Rolling counter helper ────────────────────────────────────────────────────
function RollingNumber({
  t,
  triggerAt,
  dur,
  from,
  to,
  suffix = "",
}: {
  t: number;
  triggerAt: number;
  dur: number;
  from: number;
  to: number;
  suffix?: string;
}) {
  const progress = eo(p(t, triggerAt, triggerAt + dur));
  const value = Math.round(lr(from, to, progress));
  return <>{value.toLocaleString("en-IN")}{suffix}</>;
}

// ── useAnimTime — requestAnimationFrame loop, no audio ───────────────────────
function useAnimTime() {
  const [t, setT]    = useState(0);
  const raf          = useRef<number | null>(null);
  const startRef     = useRef<number | null>(null);
  const running      = useRef(false);

  const play = useCallback(() => {
    if (running.current) return;
    running.current = true;
    startRef.current = performance.now();

    function tick(now: number) {
      const el = (now - (startRef.current ?? now)) / 1000;
      if (el >= TOTAL) {
        setT(TOTAL);
        running.current = false;
        return;
      }
      setT(el);
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
  }, []);

  const reset = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    running.current = false;
    setT(0);
  }, []);

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  return { t, play, reset };
}

// ── Wishlist card mini component (used in Act 2 & Act 4) ────────────────────
function WishlistCard({
  greyed = false,
  showSocial = false,
}: {
  greyed?: boolean;
  showSocial?: boolean;
}) {
  const fg = greyed ? "#BBBCC0" : CHARCOAL;
  const sub = greyed ? "#D0D0D5" : GREY_TEXT;
  return (
    <div
      style={{
        background: greyed ? "#F0F0F2" : WHITE,
        borderRadius: 14,
        padding: "14px",
        width: 280,
        boxShadow: greyed ? "none" : "0 4px 20px rgba(0,0,0,0.12)",
        border: `1px solid ${greyed ? "#E5E5E8" : "#F0F0F0"}`,
        transition: "background 0.5s, border-color 0.5s",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        {/* Product image placeholder */}
        <div
          style={{
            width: 64,
            height: 80,
            borderRadius: 8,
            background: greyed ? "#E5E5E8" : "#F4F4F5",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
          }}
        >
          👕
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: fg, marginBottom: 4 }}>
            OQUENT Casual Shirt
          </div>
          <div style={{ fontFamily: FONT, fontSize: 12, color: sub, marginBottom: 4 }}>
            Size: M · Blue
          </div>
          <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: greyed ? sub : CHARCOAL }}>
            ₹1,199
          </div>
          {!greyed && (
            <div style={{ fontFamily: FONT, fontSize: 11, color: "#F97316", marginTop: 4 }}>
              ❤️ Saved 12 days ago
            </div>
          )}
        </div>
        {/* Heart */}
        <div style={{ fontSize: 20, color: greyed ? "#D0D0D5" : PINK, flexShrink: 0 }}>♥</div>
      </div>
      {greyed && (
        <div style={{ fontFamily: FONT, fontSize: 11, color: "#C0C0C5", marginTop: 10, textAlign: "center" as const }}>
          Same information as the day you saved it.
        </div>
      )}
    </div>
  );
}

// ── Strip card component (Act 4) ──────────────────────────────────────────────
function StripCard() {
  return (
    <div
      style={{
        background: WHITE,
        borderRadius: 14,
        padding: "14px 16px",
        width: 300,
        boxShadow: "0 6px 28px rgba(255,63,108,0.18)",
        border: `2px solid ${PINK}`,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Myntra M indicator */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: PINK,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: FONT,
          fontWeight: 900,
          fontSize: 18,
          color: WHITE,
        }}
      >
        M
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, color: CHARCOAL, lineHeight: 1.4 }}>
          OQUENT Shirt
        </div>
        <div style={{ fontFamily: FONT, fontSize: 11, color: GREEN, marginTop: 2, lineHeight: 1.4 }}>
          74 buyers your size bought this since you saved it
        </div>
      </div>
      <div style={{ fontSize: 18, color: PINK, flexShrink: 0 }}>→</div>
    </div>
  );
}

// ── Confidence Engine bottom sheet (Act 5) ────────────────────────────────────
function ConfidenceSheet({ askVisible }: { askVisible: boolean }) {
  return (
    <div
      style={{
        position: "absolute" as const,
        bottom: 0,
        left: 0,
        right: 0,
        background: WHITE,
        borderRadius: "20px 20px 0 0",
        padding: "20px 20px 32px",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
      }}
    >
      {/* Pull handle */}
      <div
        style={{
          width: 36,
          height: 4,
          background: LIGHT_GREY,
          borderRadius: 2,
          margin: "0 auto 16px",
        }}
      />
      {/* Product thumbnail + verdict */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
        <div
          style={{
            width: 56,
            height: 68,
            borderRadius: 8,
            background: "#F4F4F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            flexShrink: 0,
          }}
        >
          👕
        </div>
        <div>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: CHARCOAL, marginBottom: 6, lineHeight: 1.4 }}>
            Buyers say: runs true to size. Lighter than photos — breathes well.
          </div>
          <div style={{ fontFamily: FONT, fontSize: 11, color: GREY_TEXT }}>
            Based on 2,083 reviews
          </div>
        </div>
      </div>

      {/* Ask panel */}
      {askVisible && (
        <div
          style={{
            background: "#E6F7F3",
            borderRadius: 12,
            padding: "12px 14px",
            marginTop: 8,
            border: `1px solid ${GREEN}`,
          }}
        >
          <div style={{ fontFamily: FONT, fontSize: 12, color: GREY_TEXT, marginBottom: 6 }}>
            Will this work for office?
          </div>
          <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: GREEN, lineHeight: 1.5 }}>
            Yes — 68% of buyers in formal settings kept it.
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main promo component ──────────────────────────────────────────────────────
export default function PromoPage() {
  const { t, play, reset } = useAnimTime();
  const { scale, isLandscape } = useViewportScale();
  const [started, setStarted] = useState(false);
  const [ended,   setEnded]   = useState(false);

  useEffect(() => {
    if (t >= TOTAL && started) setEnded(true);
  }, [t, started]);

  function handleStart() { setStarted(true); setEnded(false); play(); }
  function handleReplay() { setEnded(false); setStarted(true); reset(); setTimeout(play, 50); }

  // ── Background interpolation per act ─────────────────────────────────────
  let bg: string;
  if      (t < 4)   bg = CHARCOAL;
  else if (t < 9)   bg = CHARCOAL;
  else if (t < 15)  bg = CHARCOAL;
  else if (t < 21)  bg = WHITE;
  else if (t < 28)  {
    const q = eio(p(t, 21, 22));
    bg = `rgb(${lr(255,40,q)|0},${lr(255,40,q)|0},${lr(255,40,q)|0})`;
    // transition from white to dark overlay
    bg = t < 22 ? WHITE : `rgba(30,30,40,${Math.min(0.95, (t-21)*0.4)})`;
  }
  else if (t < 34)  bg = WHITE;
  else if (t < 42)  bg = CHARCOAL;
  else              bg = PINK;

  // Simpler bg logic
  const bgColor =
    t >= 42 ? PINK :
    t >= 34 ? CHARCOAL :
    t >= 28 ? WHITE :
    t >= 21 ? "#12121C" :
    t >= 15 ? WHITE :
    CHARCOAL;

  const onDark = bgColor === CHARCOAL || bgColor === "#12121C";
  const onPink = bgColor === PINK;
  const mainText = (onDark || onPink) ? WHITE : CHARCOAL;
  const subText  = onDark ? "rgba(255,255,255,0.6)" : onPink ? "rgba(255,255,255,0.8)" : GREY_TEXT;

  // ── Act helpers ───────────────────────────────────────────────────────────
  const fade = (a: number, b: number) => p(t, a, b);
  const slideUp = (a: number, b: number, dist = 24) => ({
    transform: `translateY(${lr(dist, 0, eo(p(t, a, b)))}px)`,
  });

  // ── Pre-start screen ──────────────────────────────────────────────────────
  if (!started) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: CHARCOAL,
          display: "flex",
          flexDirection: "column" as const,
          alignItems: "center",
          justifyContent: "center",
          fontFamily: FONT,
          gap: 24,
          padding: 24,
          textAlign: "center" as const,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: PINK,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
            fontWeight: 900,
            fontSize: 32,
            color: WHITE,
          }}
        >
          M
        </div>
        <div>
          <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 700, color: WHITE, margin: "0 0 8px" }}>
            Wishlist Confidence Engine
          </h1>
          <p style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.6)", margin: 0 }}>
            50-second product story · No audio
          </p>
        </div>
        <button
          onClick={handleStart}
          style={{
            background: PINK,
            color: WHITE,
            border: "none",
            borderRadius: 50,
            padding: "14px 40px",
            fontFamily: FONT,
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Play
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A12",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative" as const,
      }}
    >
      {/* Landscape hint — mobile landscape only */}
      {isLandscape && window.innerWidth < 900 && <LandscapeHint />}

      {/* Scaled viewport container */}
      <div
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "relative" as const,
          overflow: "hidden",
          borderRadius: 40,
          background: bgColor,
          transition: "background 0.4s",
        }}
      >
        {/* ── ACT 1: 0–4s — THE PROBLEM ─────────────────────────────────── */}
        {t >= 0 && t < 9 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 36px",
              textAlign: "center" as const,
              zIndex: 2,
            }}
          >
            {/* Myntra M pulsing */}
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: PINK,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 900,
                fontSize: 28,
                color: WHITE,
                marginBottom: 28,
                transform: `scale(${1 + 0.06 * Math.sin(t * 4)})`,
                opacity: eo(p(t, 0, 0.8)),
              }}
            >
              M
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 38,
                fontWeight: 800,
                color: WHITE,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                opacity: eo(p(t, 0.3, 1.5)),
                ...slideUp(0.3, 1.5),
              }}
            >
              Your wishlist.
              <br />
              <span style={{ color: PINK }}>315 items.</span>
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 18,
                color: "rgba(255,255,255,0.65)",
                marginTop: 16,
                lineHeight: 1.5,
                opacity: eo(p(t, 1.5, 2.8)),
                ...slideUp(1.5, 2.8),
              }}
            >
              Most will never be purchased.
            </div>
          </div>
        )}

        {/* ── ACT 2: 4–9s — THE BROKEN MOMENT ─────────────────────────── */}
        {t >= 4 && t < 9 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 36px",
              textAlign: "center" as const,
              zIndex: 3,
              background: CHARCOAL,
              opacity: eo(p(t, 4, 5)),
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 20,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 24,
                opacity: eo(p(t, 4.3, 5.5)),
              }}
            >
              Every time you return...
            </div>

            {/* Wishlist card slides in */}
            <div
              style={{
                opacity: eo(p(t, 4.6, 5.8)),
                transform: `translateX(${lr(60, 0, eo(p(t, 4.6, 5.8)))}px)`,
              }}
            >
              <WishlistCard greyed={t > 7} />
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                marginTop: 18,
                lineHeight: 1.5,
                opacity: eo(p(t, 7.2, 8.2)),
              }}
            >
              No new signal. No reason to decide.
            </div>
          </div>
        )}

        {/* ── ACT 3: 9–15s — THE WORKAROUND ───────────────────────────── */}
        {t >= 9 && t < 15 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 32px",
              zIndex: 4,
              background: CHARCOAL,
              opacity: eo(p(t, 9, 9.8)),
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 24,
                alignItems: "center",
              }}
            >
              {/* Faded wishlist card */}
              <div style={{ opacity: lr(0.9, 0.2, eo(p(t, 9.5, 11))) }}>
                <WishlistCard greyed />
              </div>
            </div>

            {/* Icons appearing one by one */}
            <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
              {/* YouTube */}
              <div style={{ opacity: eo(p(t, 10, 11)), textAlign: "center" as const }}>
                <div style={{ fontSize: 36, marginBottom: 4 }}>📺</div>
                <div style={{ fontFamily: FONT, fontSize: 11, color: "#FF4444" }}>YouTube</div>
              </div>
              {/* Amazon */}
              <div style={{ opacity: eo(p(t, 10.8, 11.8)), textAlign: "center" as const }}>
                <div style={{ fontSize: 36, marginBottom: 4 }}>🛒</div>
                <div style={{ fontFamily: FONT, fontSize: 11, color: "#FF9900" }}>Amazon</div>
              </div>
              {/* WhatsApp */}
              <div style={{ opacity: eo(p(t, 11.6, 12.6)), textAlign: "center" as const }}>
                <div style={{ fontSize: 36, marginBottom: 4 }}>💬</div>
                <div style={{ fontFamily: FONT, fontSize: 11, color: "#25D366" }}>Friends</div>
              </div>
            </div>

            {/* Counter */}
            <div
              style={{
                textAlign: "center" as const,
                opacity: eo(p(t, 12, 13)),
              }}
            >
              <div style={{ fontFamily: FONT, fontSize: 56, fontWeight: 800, color: WHITE, lineHeight: 1 }}>
                <RollingNumber t={t} triggerAt={12} dur={1.5} from={0} to={65} />%
              </div>
              <div style={{ fontFamily: FONT, fontSize: 15, color: "rgba(255,255,255,0.65)", marginTop: 8 }}>
                leave the app to find answers
              </div>
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 8,
                  lineHeight: 1.5,
                  opacity: eo(p(t, 13.2, 14.2)),
                }}
              >
                Every one of them is a purchase Myntra did not get.
              </div>
            </div>
          </div>
        )}

        {/* ── ACT 4: 15–21s — THE STRIP ────────────────────────────────── */}
        {t >= 15 && t < 21 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0",
              zIndex: 5,
              background: WHITE,
              opacity: eo(p(t, 15, 15.8)),
            }}
          >
            {/* Search bar */}
            <div
              style={{
                width: "100%",
                background: CHARCOAL,
                padding: "48px 16px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  flex: 1,
                  background: WHITE,
                  borderRadius: 8,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 14 }}>🔍</span>
                <span style={{ fontFamily: FONT, fontSize: 13, color: "#BBBCC0" }}>
                  Search for products, brands and more
                </span>
              </div>
            </div>

            {/* Strip card sliding in */}
            <div
              style={{
                padding: "16px",
                width: "100%",
              }}
            >
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 11,
                  fontWeight: 600,
                  color: GREY_TEXT,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                }}
              >
                From your wishlist
              </div>
              <div
                style={{
                  opacity: eo(p(t, 15.5, 16.5)),
                  transform: `translateX(${lr(60, 0, eo(p(t, 15.5, 16.5)))}px)`,
                }}
              >
                <StripCard />
              </div>

              {/* Arrow annotation */}
              <div
                style={{
                  marginTop: 12,
                  opacity: eo(p(t, 17, 18)),
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: 20 }}>☝️</span>
                <span style={{ fontFamily: FONT, fontSize: 13, color: GREY_TEXT, lineHeight: 1.4 }}>
                  The strip finds you. Before you open YouTube.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── ACT 5: 21–28s — THE CONFIDENCE ENGINE ───────────────────── */}
        {t >= 21 && t < 28 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              background: "#12121C",
              zIndex: 6,
              opacity: eo(p(t, 21, 21.8)),
            }}
          >
            {/* Label */}
            <div
              style={{
                padding: "52px 20px 16px",
                fontFamily: FONT,
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                opacity: eo(p(t, 21.5, 22.5)),
              }}
            >
              Your question. Answered. Inside Myntra.
            </div>

            {/* Bottom sheet */}
            <div
              style={{
                opacity: eo(p(t, 21.8, 22.8)),
                transform: `translateY(${lr(120, 0, eo(p(t, 21.8, 22.8)))}px)`,
              }}
            >
              <ConfidenceSheet askVisible={t > 25} />
            </div>
          </div>
        )}

        {/* ── ACT 6: 28–34s — THE JOURNEY ──────────────────────────────── */}
        {t >= 28 && t < 34 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              background: WHITE,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 32px",
              zIndex: 7,
              opacity: eo(p(t, 28, 28.8)),
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 13,
                color: GREY_TEXT,
                marginBottom: 28,
                opacity: eo(p(t, 28.5, 29.5)),
              }}
            >
              5 taps. No wishlist page needed. No app-switching.
            </div>

            {/* 5 steps */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, width: "100%" }}>
              {[
                { n: 1, label: "Open app",       delay: 29 },
                { n: 2, label: "See strip",       delay: 29.8 },
                { n: 3, label: "Read verdict",    delay: 30.6 },
                { n: 4, label: "Ask question",    delay: 31.4 },
                { n: 5, label: "Add to Bag",      delay: 32.2 },
              ].map(({ n, label, delay }) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    opacity: eo(p(t, delay, delay + 0.7)),
                    transform: `translateX(${lr(-20, 0, eo(p(t, delay, delay + 0.7)))}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: PINK,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: FONT,
                      fontWeight: 800,
                      fontSize: 16,
                      color: WHITE,
                      flexShrink: 0,
                    }}
                  >
                    {n}
                  </div>
                  <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 600, color: CHARCOAL }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── ACT 7: 34–42s — THE SCALE ────────────────────────────────── */}
        {t >= 34 && t < 42 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              background: CHARCOAL,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 32px",
              zIndex: 8,
              opacity: eo(p(t, 34, 34.8)),
            }}
          >
            {/* Stat 1: 50M+ users */}
            {t >= 34.5 && (
              <div
                style={{
                  textAlign: "center" as const,
                  marginBottom: t >= 37.5 ? 24 : 0,
                  opacity: t >= 37.5 ? lr(1, 0.4, eo(p(t, 37.5, 38.2))) : eo(p(t, 34.5, 35.5)),
                  transform: `translateY(${lr(20, 0, eo(p(t, 34.5, 35.5)))}px)`,
                }}
              >
                <div style={{ fontFamily: FONT, fontSize: 52, fontWeight: 800, color: PINK, lineHeight: 1 }}>
                  50M+
                </div>
                <div style={{ fontFamily: FONT, fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
                  monthly active users
                </div>
              </div>
            )}

            {/* Stat 2: 28.3% save and forget */}
            {t >= 36.5 && (
              <div
                style={{
                  textAlign: "center" as const,
                  marginBottom: t >= 39.5 ? 24 : 0,
                  opacity: t >= 39.5 ? lr(1, 0.4, eo(p(t, 39.5, 40.2))) : eo(p(t, 36.5, 37.5)),
                  transform: `translateY(${lr(20, 0, eo(p(t, 36.5, 37.5)))}px)`,
                }}
              >
                <div style={{ fontFamily: FONT, fontSize: 52, fontWeight: 800, color: PINK, lineHeight: 1 }}>
                  28.3%
                </div>
                <div style={{ fontFamily: FONT, fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
                  save and forget
                </div>
              </div>
            )}

            {/* Stat 3: 65% leave to decide */}
            {t >= 38.5 && (
              <div
                style={{
                  textAlign: "center" as const,
                  opacity: eo(p(t, 38.5, 39.5)),
                  transform: `translateY(${lr(20, 0, eo(p(t, 38.5, 39.5)))}px)`,
                }}
              >
                <div style={{ fontFamily: FONT, fontSize: 52, fontWeight: 800, color: PINK, lineHeight: 1 }}>
                  65%
                </div>
                <div style={{ fontFamily: FONT, fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
                  leave to decide
                </div>
              </div>
            )}

            {/* Punchline */}
            {t >= 40 && (
              <div
                style={{
                  textAlign: "center" as const,
                  marginTop: 24,
                  opacity: eo(p(t, 40, 41)),
                  transform: `translateY(${lr(16, 0, eo(p(t, 40, 41)))}px)`,
                }}
              >
                <div style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  Three problems. One surface. No new users required.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── ACT 8: 42–50s — THE CLOSE ────────────────────────────────── */}
        {t >= 42 && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              background: PINK,
              display: "flex",
              flexDirection: "column" as const,
              alignItems: "center",
              justifyContent: "center",
              padding: "0 32px",
              zIndex: 9,
              opacity: eo(p(t, 42, 43)),
            }}
          >
            {/* Myntra M */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: WHITE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONT,
                fontWeight: 900,
                fontSize: 32,
                color: PINK,
                marginBottom: 24,
                opacity: eo(p(t, 42.5, 43.5)),
                transform: `scale(${lr(0.8, 1, eo(p(t, 42.5, 43.5)))})`,
              }}
            >
              M
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 30,
                fontWeight: 800,
                color: WHITE,
                textAlign: "center" as const,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: 14,
                opacity: eo(p(t, 43, 44)),
                transform: `translateY(${lr(16, 0, eo(p(t, 43, 44)))}px)`,
              }}
            >
              Wishlist Confidence Engine
            </div>

            <a
              href="https://d3-myntra.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: FONT,
                fontSize: 14,
                color: WHITE,
                textDecoration: "underline",
                opacity: eo(p(t, 44, 45)),
                transform: `translateY(${lr(12, 0, eo(p(t, 44, 45)))}px)`,
                display: "inline-block",
              }}
            >
              d3-myntra.vercel.app
            </a>
          </div>
        )}

        {/* ── Progress bar ──────────────────────────────────────────────── */}
        <div
          style={{
            position: "absolute" as const,
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "rgba(255,255,255,0.15)",
            zIndex: 99,
          }}
        >
          <div
            style={{
              height: "100%",
              background: onPink ? "rgba(255,255,255,0.6)" : PINK,
              width: `${(t / TOTAL) * 100}%`,
              transition: "width 0.05s linear",
            }}
          />
        </div>

        {/* ── Replay overlay when ended ────────────────────────────────── */}
        {ended && (
          <div
            style={{
              position: "absolute" as const,
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              padding: "0 0 40px",
              zIndex: 200,
            }}
          >
            <button
              onClick={handleReplay}
              style={{
                background: WHITE,
                color: PINK,
                border: "none",
                borderRadius: 50,
                padding: "12px 32px",
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
