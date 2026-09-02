"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const PINK       = "#FF3F6C";
const CHARCOAL   = "#282C3F";
const GREEN      = "#03A685";
const WHITE      = "#FFFFFF";
const GREY       = "#535766";
const BORDER     = "#E9E9EB";
const BG         = "#F4F4F5";
const FONT       = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

const TOTAL = 66; // seconds — extended with user journey + fan

// ── Landscape canvas dimensions (1440 × 900 like Blinkit) ────────────────────
const DW = 1440;
const DH = 900;

// ── iPhone shell dimensions ───────────────────────────────────────────────────
const PW = 393;
const PH = 852;

// ── Easing helpers ────────────────────────────────────────────────────────────
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const p  = (t: number, a: number, b: number) => clamp((t - a) / (b - a), 0, 1);
const eo = (x: number) => 1 - Math.pow(1 - x, 3);
const ei = (x: number) => x * x * x;
const eio= (x: number) => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2,3)/2;
const lr = (a: number, b: number, t: number) => a + (b - a) * t;

// ── useViewportScale — copied from Blinkit D3 promo.js exactly ───────────────
function useViewportScale() {
  const [scale, setScale]     = useState(1);
  const [portrait, setPortrait] = useState(false);

  useEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setPortrait(vh > vw);
      const byW = vw / DW;
      const byH = vh / DH;
      setScale(Math.min(byW, byH));
    }
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
  return { scale, portrait };
}

// ── Portrait/landscape hint ───────────────────────────────────────────────────
function PortraitHint() {
  return (
    <div style={{
      position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)",
      background:"rgba(0,0,0,0.72)", borderRadius:40, padding:"10px 20px",
      display:"flex", alignItems:"center", gap:10, zIndex:999, fontFamily:FONT,
      pointerEvents:"none",
    }}>
      <span style={{ fontSize:20 }}>↺</span>
      <span style={{ fontSize:13, color:"rgba(255,255,255,0.85)", whiteSpace:"nowrap" }}>
        Rotate for best experience
      </span>
    </div>
  );
}

// ── useAnimTime — RAF loop + audio (exact Blinkit pattern) ───────────────────
function useAnimTime() {
  const [t, setT]  = useState(0);
  const raf        = useRef<number | null>(null);
  const startRef   = useRef<number | null>(null);
  const running    = useRef(false);
  const audioRef   = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/the_mountain-product-tech-310134.mp3");
    audio.preload = "auto";
    audio.volume = 0.85;
    audio.loop = false;
    audioRef.current = audio;
    return () => { audio.pause(); audio.src = ""; };
  }, []);

  const play = useCallback(() => {
    if (running.current) return;
    running.current = true;
    startRef.current = performance.now();
    // Must call .play() synchronously inside onClick for browser autoplay permission
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.85;
      const promise = audioRef.current.play();
      if (promise) promise.catch(() => {
        setTimeout(() => {
          if (audioRef.current) { audioRef.current.currentTime = 0; audioRef.current.play().catch(() => {}); }
        }, 100);
      });
    }
    function tick(now: number) {
      const el = (now - (startRef.current ?? now)) / 1000;
      if (el >= TOTAL) {
        setT(TOTAL); running.current = false;
        if (audioRef.current) audioRef.current.pause();
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
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
  }, []);

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);
  return { t, play, reset };
}

// ── Inline iPhone shell (no external deps) ───────────────────────────────────
function IPhone({ children, scl = 1 }: { children: React.ReactNode; scl?: number }) {
  return (
    <div style={{
      width: PW, height: PH,
      background: "#000",
      borderRadius: 54,
      padding: 11,
      boxShadow: "0 0 0 2px #3a3a3a, 0 0 0 3.5px #111, 0 40px 100px rgba(0,0,0,.5), 0 0 60px rgba(255,63,108,.12)",
      position: "relative",
      flexShrink: 0,
      transform: `scale(${scl})`,
      transformOrigin: "center center",
    }}>
      {/* Dynamic island */}
      <div style={{ position:"absolute", top:14, left:"50%", transform:"translateX(-50%)", width:118, height:32, background:"#000", borderRadius:20, zIndex:300 }} />
      {/* Side buttons */}
      <div style={{ position:"absolute", right:-3, top:140, width:3, height:60, background:"#2a2a2a", borderRadius:"0 2px 2px 0" }} />
      <div style={{ position:"absolute", left:-3, top:120, width:3, height:30, background:"#2a2a2a", borderRadius:"2px 0 0 2px" }} />
      <div style={{ position:"absolute", left:-3, top:162, width:3, height:54, background:"#2a2a2a", borderRadius:"2px 0 0 2px" }} />
      <div style={{ position:"absolute", left:-3, top:224, width:3, height:54, background:"#2a2a2a", borderRadius:"2px 0 0 2px" }} />
      {/* Screen */}
      <div style={{ width:"100%", height:"100%", borderRadius:44, overflow:"hidden", background:"#fff", position:"relative", display:"flex", flexDirection:"column" }}>
        {children}
      </div>
    </div>
  );
}

// ── Status bar ────────────────────────────────────────────────────────────────
function StatusBar({ dark = true }: { dark?: boolean }) {
  const c = dark ? CHARCOAL : WHITE;
  return (
    <div style={{ height:52, display:"flex", alignItems:"flex-end", justifyContent:"space-between", padding:"0 26px 10px", flexShrink:0, position:"relative" }}>
      <span style={{ fontSize:15, fontWeight:700, color:c }}>9:41</span>
      <div style={{ position:"absolute", top:10, left:"50%", transform:"translateX(-50%)", width:120, height:34, background:"#000", borderRadius:20 }} />
      <div style={{ display:"flex", alignItems:"center", gap:5 }}>
        <div style={{ display:"flex", alignItems:"flex-end", gap:1.5, height:11 }}>
          {[4,6,8,11].map(h=><div key={h} style={{ width:2.5, height:h, background:c, borderRadius:1 }}/>)}
        </div>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.5 9.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" fill={c}/>
          <path d="M4.3 7a4.6 4.6 0 016.4 0" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M1.5 4.3A8.6 8.6 0 0113.5 4.3" stroke={c} strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
        <div style={{ display:"flex", alignItems:"center", gap:1 }}>
          <div style={{ width:22, height:11, border:`1.5px solid ${c}`, borderRadius:3, padding:1.5 }}>
            <div style={{ width:"100%", height:"100%", background:c, borderRadius:1.5 }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Myntra top nav bar (inside phone) ────────────────────────────────────────
function MyntraNav() {
  return (
    <div style={{ background:"linear-gradient(180deg,#FCE4DA 0%,#FDEEE7 60%,#FFF 100%)", flexShrink:0 }}>
      <StatusBar />
      <div style={{ display:"flex", alignItems:"center", gap:8, padding:"2px 14px 10px" }}>
        <div style={{ flex:1, background:"#fff", borderRadius:24, padding:"9px 14px", display:"flex", alignItems:"center", gap:8, boxShadow:"0 1px 4px rgba(0,0,0,.06)" }}>
          <img src="/myntra-m.png" alt="" style={{ width:17, height:17, objectFit:"contain" }}/>
          <span style={{ fontSize:13, color:"#888", flex:1, fontStyle:"italic" }}>"Shirts"</span>
        </div>
      </div>
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────────────
function BottomNav({ active }: { active: string }) {
  const items = [
    { id:"home", label:"Home", icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 9l8-7 8 7v9H13v-5H7v5H2V9z" stroke={active==="home"?PINK:GREY} strokeWidth="1.5" strokeLinejoin="round"/></svg> },
    { id:"wishlist", label:"Wishlist", icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17S2 11.5 2 6c0-2.2 1.8-4 4-4 1.5 0 2.8.7 3.6 1.8A4 4 0 0114 2c2.2 0 4 1.8 4 4 0 5.5-8 11-8 11z" stroke={active==="wishlist"?PINK:GREY} strokeWidth="1.5" fill={active==="wishlist"?PINK:"none"}/></svg> },
    { id:"bag", label:"Bag", icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="6" width="16" height="13" rx="1.5" stroke={active==="bag"?PINK:GREY} strokeWidth="1.5"/><path d="M7 6V5a3 3 0 016 0v1" stroke={active==="bag"?PINK:GREY} strokeWidth="1.5"/></svg> },
    { id:"profile", label:"Profile", icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3" stroke={active==="profile"?PINK:GREY} strokeWidth="1.5"/><path d="M3 18c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke={active==="profile"?PINK:GREY} strokeWidth="1.5" strokeLinecap="round"/></svg> },
  ];
  return (
    <div style={{ display:"flex", borderTop:`1px solid ${BORDER}`, background:"#fff", flexShrink:0 }}>
      {items.map(it=>(
        <div key={it.id} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"8px 0 10px", gap:3 }}>
          {it.icon}
          <span style={{ fontSize:10, color:active===it.id?PINK:GREY, fontFamily:FONT }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Screen A: Home with Wishlist Strip (Acts 4–7) ─────────────────────────────
function HomeWithStrip() {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", fontFamily:FONT }}>
      <MyntraNav/>
      {/* Wishlist strip — the hero element */}
      <div style={{ background:"#fff", padding:"10px 14px 6px", borderBottom:`1px solid ${BORDER}`, flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", border:`1.5px solid ${PINK}`, borderRadius:10, background:"#FFF5F7", cursor:"pointer", boxShadow:"0 2px 12px rgba(255,63,108,0.14)" }}>
          <div style={{ width:42, height:52, borderRadius:6, overflow:"hidden", flexShrink:0, border:`1px solid ${BORDER}` }}>
            <img src="/products/oquent/card.png" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}/>
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:9.5, fontWeight:700, color:PINK, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:3 }}>From your wishlist</div>
            <div style={{ fontSize:12.5, fontWeight:700, color:CHARCOAL, marginBottom:2, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>OQUENT</div>
            <div style={{ fontSize:11.5, color:CHARCOAL, lineHeight:1.4 }}>74 buyers your size bought this. Here's what they said.</div>
          </div>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M1 1l5 5-5 5" stroke={PINK} strokeWidth="1.6" strokeLinecap="round"/></svg>
        </div>
      </div>
      {/* Scrollable home feed */}
      <div style={{ flex:1, overflowY:"auto", background:"#fff" }}>
        <div style={{ display:"flex", gap:0, padding:"12px 14px 8px", borderBottom:`1px solid ${BORDER}` }}>
          {["ALL","MEN","WOMEN","KIDS"].map((t,i)=>(
            <div key={t} style={{ paddingBottom:10, paddingRight:20, borderBottom:i===0?`2px solid ${PINK}`:"2px solid transparent", fontSize:12, fontWeight:700, color:i===0?PINK:CHARCOAL }}>{t}</div>
          ))}
        </div>
        <div style={{ display:"flex", gap:12, overflowX:"auto", padding:"12px 14px", scrollbarWidth:"none" }}>
          {[
            { src:"/home/cat-fashion.png", label:"Fashion" },
            { src:"/home/cat-beauty.png", label:"Beauty" },
            { src:"/home/cat-footwear.png", label:"Footwear" },
            { src:"/home/cat-accessories.png", label:"Accessories" },
          ].map(c=>(
            <div key={c.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, flexShrink:0, width:60 }}>
              <div style={{ width:52, height:52, borderRadius:13, overflow:"hidden", background:"#F3E4DC" }}>
                <img src={c.src} alt={c.label} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>
              <span style={{ fontSize:10, color:CHARCOAL, fontWeight:500, whiteSpace:"nowrap" }}>{c.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding:"0 14px 12px" }}>
          <img src="/home/hero-banner.png" alt="" style={{ width:"100%", borderRadius:12, display:"block" }}/>
        </div>
        <div style={{ padding:"0 14px 12px" }}>
          <img src="/home/paylater-banner.png" alt="" style={{ width:"100%", borderRadius:8, display:"block" }}/>
        </div>
      </div>
      <BottomNav active="home"/>
    </div>
  );
}

// ── Screen B: Wishlist grid ───────────────────────────────────────────────────
function WishlistGrid() {
  const products = [
    { img:"/products/oquent/card.png",      brand:"OQUENT",         price:"₹553",  off:"80% OFF", rating:"3.9" },
    { img:"/products/denimlook/card.png",   brand:"DENIMLOOK",      price:"₹474",  off:"84% OFF", rating:"4.2" },
    { img:"/products/kooknkeech/card.png",  brand:"Kook N Keech",   price:"₹154",  off:"90% OFF", rating:"4.2" },
    { img:"/products/pepejeans/card.png",   brand:"Pepe Jeans",     price:"₹2,299",off:"54% OFF", rating:"4.2" },
    { img:"/products/mastharbour/card.jpg", brand:"Mast & Harbour",  price:"₹310",  off:"84% OFF", rating:"4.0" },
    { img:"/products/roadster-jacket/card.jpg", brand:"Roadster",   price:"₹545",  off:"58% OFF", rating:"4.1" },
  ];
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", fontFamily:FONT }}>
      <StatusBar/>
      <div style={{ display:"flex", alignItems:"center", padding:"0 14px 10px", gap:10, borderBottom:`1px solid ${BORDER}`, background:"#fff", flexShrink:0 }}>
        <button style={{ background:"none", border:"none", fontSize:20, color:GREY, cursor:"pointer", lineHeight:1 }}>←</button>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:15, fontWeight:700, color:CHARCOAL }}>Wishlist</div>
          <div style={{ fontSize:11, color:GREY }}>Your wishlist</div>
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", background:"#fff" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, padding:"12px 12px 16px" }}>
          {products.map((prod,i)=>(
            <div key={i}>
              <div style={{ position:"relative", borderRadius:"8px 8px 0 0", overflow:"hidden", height:190 }}>
                <img src={prod.img} alt={prod.brand} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}/>
                <div style={{ position:"absolute", bottom:6, left:6, background:"rgba(255,255,255,.95)", borderRadius:20, padding:"2px 7px", fontSize:11, fontWeight:700, color:CHARCOAL }}>
                  {prod.rating} ★
                </div>
                <button style={{ position:"absolute", bottom:6, right:6, background:"#fff", border:`1.5px solid ${PINK}`, borderRadius:20, padding:"4px 10px", fontSize:11, fontWeight:600, color:PINK, cursor:"pointer" }}>
                  Add
                </button>
              </div>
              <div style={{ paddingTop:5 }}>
                <div style={{ fontSize:11, fontWeight:700, color:CHARCOAL }}>{prod.brand}</div>
                <div style={{ display:"flex", alignItems:"baseline", gap:4, marginTop:2 }}>
                  <span style={{ fontSize:12, fontWeight:700, color:CHARCOAL }}>{prod.price}</span>
                  <span style={{ fontSize:10, fontWeight:600, color:GREEN }}>{prod.off}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="wishlist"/>
    </div>
  );
}

// ── Screen C: AI Verdict bottom sheet ─────────────────────────────────────────
function VerdictSheet({ showAsk }: { showAsk?: boolean }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", fontFamily:FONT, position:"relative" }}>
      <div style={{ flex:1, position:"relative", overflow:"hidden" }}>
        {/* Background product image */}
        <img src="/products/oquent/detail.jpg" alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.38)" }}/>
        {/* Bottom sheet */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"#fff", borderRadius:"18px 18px 0 0", height:"85%", display:"flex", flexDirection:"column", boxShadow:"0 -6px 24px rgba(0,0,0,.18)", zIndex:10 }}>
          <div style={{ display:"flex", justifyContent:"center", paddingTop:10, paddingBottom:6, flexShrink:0 }}>
            <div style={{ width:34, height:4, borderRadius:2, background:"#D4D5D9" }}/>
          </div>
          {/* Product header */}
          <div style={{ display:"flex", alignItems:"center", gap:10, padding:"0 16px 12px", borderBottom:`1px solid ${BORDER}`, flexShrink:0 }}>
            <img src="/products/oquent/card.png" alt="" style={{ width:48, height:62, objectFit:"cover", objectPosition:"top", borderRadius:4, border:`1px solid ${BORDER}` }}/>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, fontWeight:700, color:CHARCOAL }}>OQUENT</div>
              <div style={{ fontSize:11, color:GREY }}>Men Standard Striped Casual Shirt</div>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:2 }}>
                <span style={{ fontSize:13, fontWeight:700, color:CHARCOAL }}>₹553</span>
                <span style={{ fontSize:10, color:GREEN, fontWeight:600 }}>80% OFF</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div style={{ flex:1, overflowY:"auto", padding:"14px 16px 16px" }}>
            {/* AI Verdict */}
            <div style={{ background:"#FFF5F7", border:`1px solid #FFCED8`, borderRadius:10, padding:"12px 14px", marginBottom:14 }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                <span style={{ fontSize:12 }}>⭐</span>
                <span style={{ fontSize:11, fontWeight:700, color:PINK, textTransform:"uppercase", letterSpacing:"0.06em" }}>AI Buyer Verdict</span>
                <span style={{ marginLeft:"auto", fontSize:10, color:GREY }}>2,083 reviews</span>
              </div>
              <p style={{ fontSize:13, color:CHARCOAL, lineHeight:1.65, margin:0 }}>
                Buyers say this runs one size large. 73% who sized down kept it without returning. The fabric is lighter than photos suggest but breathes well in summer heat.
              </p>
            </div>
            {/* Review photos */}
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:12, fontWeight:700, color:CHARCOAL, marginBottom:8 }}>Buyer photos</div>
              <div style={{ display:"flex", gap:8 }}>
                <img src="/products/oquent/reviews.png" alt="" style={{ width:80, height:90, objectFit:"cover", borderRadius:6 }}/>
                <img src="/products/oquent/review.png" alt="" style={{ width:80, height:90, objectFit:"cover", borderRadius:6 }}/>
                <img src="/products/oquent/img2.jpg" alt="" style={{ width:80, height:90, objectFit:"cover", borderRadius:6 }}/>
              </div>
            </div>
            {/* Ask panel */}
            {showAsk && (
              <div style={{ background:"#F0FDF8", border:`1px solid #A7F3D0`, borderRadius:10, padding:"12px 14px" }}>
                <div style={{ fontSize:10, fontWeight:700, color:GREEN, marginBottom:6, textTransform:"uppercase", letterSpacing:"0.05em" }}>AI Answer from buyer reviews</div>
                <div style={{ fontSize:12, color:GREY, marginBottom:6, fontStyle:"italic" }}>Will this work for office?</div>
                <p style={{ fontSize:13, color:CHARCOAL, lineHeight:1.6, margin:0 }}>
                  Yes. 68% of buyers in formal settings kept it. Pair with trousers for a polished look.
                </p>
              </div>
            )}
            {/* Ask input */}
            {!showAsk && (
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:CHARCOAL, marginBottom:6 }}>Ask anything about this item</div>
                <div style={{ display:"flex", gap:8, marginBottom:8 }}>
                  <div style={{ flex:1, padding:"9px 12px", border:`1px solid ${BORDER}`, borderRadius:6, fontSize:12, color:GREY }}>e.g. Does it run large?</div>
                  <button style={{ padding:"9px 14px", background:PINK, color:"#fff", border:"none", borderRadius:6, fontSize:12, fontWeight:700 }}>Ask</button>
                </div>
              </div>
            )}
          </div>
          {/* CTA */}
          <div style={{ padding:"12px 16px 16px", borderTop:`1px solid ${BORDER}`, background:"#fff", flexShrink:0 }}>
            <button style={{ width:"100%", padding:"13px 0", background:PINK, color:"#fff", border:"none", borderRadius:6, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:FONT }}>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ZoomWord — zoom-in word reveal (like Blinkit) ─────────────────────────────
function ZoomWord({ word, sub, t: ct, startAt, endAt, color = CHARCOAL, accent = PINK, bg = WHITE }: {
  word: string; sub?: string; t: number; startAt: number; endAt: number; color?: string; accent?: string; bg?: string;
}) {
  const prog = eo(p(ct, startAt, endAt));
  const scale = lr(2.8, 1, prog);
  const opacity = prog < 0.08 ? prog / 0.08 : 1;
  return (
    <div style={{ position:"absolute", inset:0, background:bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
      <div style={{ transform:`scale(${scale})`, opacity, fontFamily:FONT, fontSize:160, fontWeight:900, letterSpacing:-6, lineHeight:1, textAlign:"center", whiteSpace:"nowrap", userSelect:"none", color }}>
        {word}
      </div>
      {sub && prog > 0.7 && (
        <div style={{ fontSize:26, color:accent, fontWeight:700, marginTop:16, opacity:eo(p(prog,0.7,1)) }}>{sub}</div>
      )}
    </div>
  );
}

// ── Main Promo ────────────────────────────────────────────────────────────────
export default function PromoPage() {
  const { t, play, reset } = useAnimTime();
  const { scale, portrait } = useViewportScale();
  const [started, setStarted] = useState(false);
  const [ended,   setEnded]   = useState(false);

  useEffect(() => { if (t >= TOTAL && started) setEnded(true); }, [t, started]);
  function handleStart() { setStarted(true); setEnded(false); play(); }
  function handleReplay() { setEnded(false); setStarted(true); reset(); setTimeout(play, 50); }

  const fade  = (a: number, b: number) => eo(p(t, a, b));
  const slideR = (a: number, b: number, dist = 40) => ({ transform: `translateX(${lr(dist, 0, eo(p(t, a, b)))}px)` });
  const slideL = (a: number, b: number, dist = 40) => ({ transform: `translateX(${lr(-dist, 0, eo(p(t, a, b)))}px)` });
  const slideU = (a: number, b: number, dist = 24) => ({ transform: `translateY(${lr(dist, 0, eo(p(t, a, b)))}px)` });

  // ── Background ────────────────────────────────────────────────────────
  let bg: string;
  if      (t <= 4.5) bg = CHARCOAL;
  else if (t <= 5)   { const q = eio(p(t,4.5,5)); bg = `rgb(${lr(40,244,q)|0},${lr(43,244,q)|0},${lr(63,244,q)|0})`; }
  else if (t <= 10)  bg = WHITE;
  else if (t <= 11)  { const q = eio(p(t,10,11)); bg = `rgb(${lr(244,40,q)|0},${lr(244,43,q)|0},${lr(244,63,q)|0})`; }
  else if (t <= 21)  bg = CHARCOAL;
  else if (t <= 22)  { const q = eio(p(t,21,22)); bg = `rgb(${lr(40,244,q)|0},${lr(43,244,q)|0},${lr(63,244,q)|0})`; }
  else if (t <= 34)  bg = WHITE;
  else if (t <= 35)  { const q = eio(p(t,34,35)); bg = `rgb(${lr(244,40,q)|0},${lr(244,43,q)|0},${lr(244,63,q)|0})`; }
  else if (t <= 44)  bg = CHARCOAL;
  else if (t <= 52)  bg = WHITE;      // user journey section
  else if (t <= 53)  { const q = eio(p(t,52,53)); bg = `rgb(${lr(244,40,q)|0},${lr(244,43,q)|0},${lr(244,63,q)|0})`; }
  else if (t <= 61)  bg = CHARCOAL;   // fan section
  else if (t <= 62)  { const q = eio(p(t,61,62)); bg = `rgb(${lr(40,255,q)|0},${lr(43,63,q)|0},${lr(63,108,q)|0})`; }
  else               bg = PINK;       // end card

  const onLight = (t > 4.5 && t <= 10) || (t > 22 && t <= 34) || (t > 44 && t <= 52) || t > 63;
  const mainTxt = onLight ? CHARCOAL : WHITE;
  const dimTxt  = onLight ? GREY : "rgba(255,255,255,0.55)";
  const accentTxt = onLight ? PINK : "#FF8FAB";

  // Phone phase logic — mirrors Blinkit's left/right/center pattern
  const phaseA = t > 11  && t <= 16; // home + strip — center entrance
  const phaseB = t > 16  && t <= 21; // home + strip — LEFT
  const phaseC = t > 22  && t <= 28; // wishlist grid — RIGHT
  const phaseD = t > 29  && t <= 34; // verdict sheet — LEFT
  const phaseE = t > 35  && t <= 43; // verdict + ask — RIGHT

  const pA  = eo(p(t, 11, 13.5));    // zoom in from far
  const pB  = eo(p(t, 16, 17.5));    // slide left
  const pBx = ei(p(t, 20, 21));      // exit B
  const pC  = eo(p(t, 22, 23.5));    // slide right
  const pCx = ei(p(t, 27.2, 28));    // exit C
  const pD  = eo(p(t, 29, 30.5));    // slide left
  const pDx = ei(p(t, 33.2, 34));    // exit D
  const pE  = eo(p(t, 35, 36.5));    // slide right
  const pEx = ei(p(t, 42.2, 43));    // exit E

  let phoneLeft: string, phoneTop: string, phoneOpacity: number, phoneScale: number;
  let phoneScreen: "home" | "wishlist" | "verdict" | "verdict-ask" = "home";

  if (phaseA) {
    // Phone zooms in AND slides left simultaneously — arrives at left:30% as zoom completes
    phoneLeft = `${lr(50, 30, pA)}%`; phoneTop = `${50 + lr(10,0,pA)}%`;
    phoneScale = lr(0.06, 1, pA); phoneOpacity = pA;
    phoneScreen = "home";
  } else if (phaseB) {
    phoneLeft = "30%"; phoneTop = "50%";
    phoneOpacity = pBx > 0 ? (1 - pBx) : 1; phoneScale = 1;
    phoneScreen = "home";
  } else if (phaseC) {
    phoneLeft = `${lr(50, 70, pC)}%`; phoneTop = "50%";
    phoneOpacity = pCx > 0 ? (1 - pCx) : 1; phoneScale = 1;
    phoneScreen = "wishlist";
  } else if (phaseD) {
    phoneLeft = `${lr(50, 30, pD)}%`; phoneTop = "50%";
    phoneOpacity = pDx > 0 ? (1 - pDx) : 1; phoneScale = 1;
    phoneScreen = "verdict";
  } else if (phaseE) {
    phoneLeft = `${lr(50, 70, pE)}%`; phoneTop = "50%";
    phoneOpacity = pEx > 0 ? (1 - pEx) : 1; phoneScale = 1;
    phoneScreen = "verdict-ask";
  } else {
    phoneLeft = "50%"; phoneTop = "50%"; phoneOpacity = 0; phoneScale = 1;
    phoneScreen = "home";
  }

  const showPhone = phaseA || phaseB || phaseC || phaseD || phaseE;

  // ── Pre-start screen ──────────────────────────────────────────────────
  if (!started) return (
    <div style={{ width:"100vw", height:"100vh", background:CHARCOAL, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:32, fontFamily:FONT, userSelect:"none", textAlign:"center", padding:24 }}>
      <img src="/myntra-logo.png" alt="Myntra" style={{ height:44, objectFit:"contain", filter:"brightness(0) invert(1)" }}/>
      <div>
        <div style={{ fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:3, textTransform:"uppercase", marginBottom:16 }}>
          Wishlist Confidence Engine · NextLeap PM Fellowship 2026
        </div>
        <div style={{ fontSize:54, fontWeight:900, color:WHITE, letterSpacing:-2.5, lineHeight:1.05 }}>Introducing</div>
        <div style={{ fontSize:54, fontWeight:900, color:PINK, letterSpacing:-2.5, lineHeight:1.05 }}>Wishlist Confidence Engine.</div>
      </div>
      <button onClick={handleStart} style={{ background:PINK, border:"none", borderRadius:50, color:"#fff", fontSize:16, fontWeight:700, padding:"15px 44px", cursor:"pointer", fontFamily:FONT }}>
        Watch the promo
      </button>

    </div>
  );

  if (ended) return (
    <div style={{ width:"100vw", height:"100vh", background:PINK, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:28, fontFamily:FONT, textAlign:"center" }}>
      <img src="/myntra-logo.png" alt="Myntra" style={{ height:40, objectFit:"contain", filter:"brightness(0) invert(1)" }}/>
      <div>
        <div style={{ fontSize:52, fontWeight:900, color:WHITE, letterSpacing:-2.5, marginBottom:8 }}>Wishlist Confidence Engine.</div>
        <div style={{ fontSize:16, color:"rgba(255,255,255,0.7)", letterSpacing:1 }}>NextLeap PM Fellowship · 2026</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", marginTop:6 }}>Shiwang Tiwari · d3-myntra.vercel.app</div>
      </div>
      <button onClick={handleReplay} style={{ background:"transparent", border:"2px solid rgba(255,255,255,0.4)", borderRadius:50, color:"rgba(255,255,255,0.8)", fontSize:13, fontWeight:600, padding:"12px 32px", cursor:"pointer", fontFamily:FONT }}>
        Watch again
      </button>
    </div>
  );

  return (
    <div style={{
      width:"100vw", height:"100vh",
      // Outer wrapper always matches the current canvas bg — eliminates black bars
      background: bg,
      overflow:"hidden", position:"relative",
      display:"flex", alignItems:"center", justifyContent:"center",
      transition: "background 0.4s",
    }}>
      {portrait && <PortraitHint/>}
      {/* ── Scaled canvas ──────────────────────────────────────────────── */}
      <div style={{
        width: DW, height: DH,
        position:"relative", overflow:"hidden",
        flexShrink: 0,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        background: bg,
        transition: "background 0.4s",
        fontFamily: FONT,
        userSelect: "none",
      }}>

        {/* ── BEAT 1: 0-1s Zoom "Wishlist" ─────────────────────────────── */}
        {t <= 1 && <ZoomWord word="Wishlisted." t={t} startAt={0} endAt={0.8} color={WHITE} bg={CHARCOAL} />}
        {/* ── BEAT 2: 1-2s ── */}
        {t > 1 && t <= 2 && <ZoomWord word="Forgotten." t={t} startAt={1} endAt={1.8} color={WHITE} bg={CHARCOAL} />}
        {/* ── BEAT 3: 2-4.5s — extended hold so sub-text is fully readable ── */}
        {t > 2 && t <= 4.5 && <ZoomWord word="Never bought." sub="Most wishlisted items are never purchased." t={t} startAt={2} endAt={2.8} color={WHITE} accent={PINK} bg={CHARCOAL} />}

        {/* ── BEAT 4-5: 3-10s — Light bg, stat center ──────────────────── */}
        {t > 4.5 && t <= 10 && (
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
            <div style={{ fontSize:13, fontWeight:700, color:PINK, letterSpacing:3, textTransform:"uppercase", marginBottom:20, opacity:fade(4.2,5) }}>The problem</div>
            <div style={{ display:"flex", alignItems:"baseline", gap:8, opacity:fade(4.5,5.8), transform:`scale(${lr(1.4,1,eo(p(t,4.5,5.8)))})` }}>
              <span style={{ fontSize:180, fontWeight:900, color:CHARCOAL, letterSpacing:-8, lineHeight:1 }}>65</span>
              <span style={{ fontSize:80, fontWeight:900, color:PINK }}>%</span>
            </div>
            <div style={{ fontSize:28, color:GREY, marginTop:16, opacity:fade(6,7) }}>of Myntra wishlist users leave the app to decide</div>
            <div style={{ fontSize:20, color:GREY, marginTop:12, opacity:fade(7.2,8.2), lineHeight:1.5 }}>YouTube. Amazon. WhatsApp friends.<br/>Every exit is a purchase Myntra did not get.</div>
            <div style={{ marginTop:24, display:"flex", gap:20, opacity:fade(8.4,9.2) }}>
              {[
                { src:"/products/oquent/card.png" },
                { src:"/products/denimlook/card.png" },
                { src:"/products/kooknkeech/card.png" },
                { src:"/products/pepejeans/card.png" },
              ].map((img,i) => (
                <div key={i} style={{ width:76, height:96, borderRadius:10, overflow:"hidden", border:`2px solid ${BORDER}`, opacity:1-i*0.1 }}>
                  <img src={img.src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top" }}/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── BEATS 11-21: Dark, phone left + text right ────────────────── */}
        {/* B6: phone zooms in 11-13.5, text only reveals at 14 once phone has slid left */}
        {t > 14 && t <= 16 && (
          <div style={{ position:"absolute", left:"54%", top:"50%", transform:"translateY(-50%)", maxWidth:"42%", zIndex:3 }}>
            <div style={{ fontSize:13, fontWeight:700, color:accentTxt, letterSpacing:3, textTransform:"uppercase", marginBottom:14, opacity:fade(14,14.8), ...slideR(14,14.8) }}>The feature</div>
            <div style={{ fontSize:68, fontWeight:900, color:mainTxt, letterSpacing:-3, lineHeight:1.1, marginBottom:16, opacity:fade(14,15.2), ...slideR(14,15.2) }}>
              The strip<br/>finds you.
            </div>
            <div style={{ fontSize:24, color:dimTxt, lineHeight:1.6, opacity:fade(15.2,16) }}>Home screen. Every app open.<br/>No wishlist visit needed.</div>
          </div>
        )}

        {/* B7: 16-21 phone left, text right */}
        {t > 16 && t <= 21 && (
          <div style={{ position:"absolute", left:"54%", top:"50%", transform:"translateY(-50%)", maxWidth:"42%", zIndex:3 }}>
            <div style={{ fontSize:13, fontWeight:700, color:accentTxt, letterSpacing:3, textTransform:"uppercase", marginBottom:14, opacity:fade(16.5,17.5), ...slideR(16.5,17.5) }}>Always-on</div>
            <div style={{ fontSize:68, fontWeight:900, color:mainTxt, letterSpacing:-3, lineHeight:1.1, marginBottom:12, opacity:fade(16.5,17.8), ...slideR(16.5,17.8) }}>
              28.3% save<br/>and forget.
            </div>
            <div style={{ fontSize:22, color:dimTxt, lineHeight:1.6, opacity:fade(18,19) }}>The strip catches them before<br/>they leave. Before they forget.</div>
            <div style={{ fontSize:18, color:accentTxt, marginTop:12, opacity:fade(19.2,20) }}>→ 74 buyers your size bought this</div>
          </div>
        )}

        {/* ── BEATS 22-34: Light bg, phone right ───────────────────────── */}
        {/* B8: 22-28 wishlist grid — phone right, text LEFT */}
        {t > 22 && t <= 28 && (
          <div style={{ position:"absolute", right:"52%", top:"50%", transform:"translateY(-50%)", maxWidth:"42%", zIndex:3 }}>
            <div style={{ fontSize:13, fontWeight:700, color:PINK, letterSpacing:3, textTransform:"uppercase", marginBottom:14, opacity:fade(23.5,24.5), ...slideL(23.5,24.5) }}>The wishlist</div>
            <div style={{ fontSize:68, fontWeight:900, color:CHARCOAL, letterSpacing:-3, lineHeight:1.1, marginBottom:16, opacity:fade(23.5,24.8), ...slideL(23.5,24.8) }}>
              Your wishlist.<br/>One decision.
            </div>
            <div style={{ fontSize:22, color:GREY, lineHeight:1.6, opacity:fade(25,26) }}>The Confidence Engine reads<br/>2,083 buyer reviews for you.</div>
            <div style={{ fontSize:18, color:PINK, marginTop:14, opacity:fade(26.2,27.2), fontWeight:600 }}>Runs true to size. Breathes well in summer.</div>
          </div>
        )}

        {/* B9: 29-34 verdict sheet — phone left, text RIGHT */}
        {t > 29 && t <= 34 && (
          <div style={{ position:"absolute", left:"52%", top:"50%", transform:"translateY(-50%)", maxWidth:"42%", zIndex:3 }}>
            <div style={{ fontSize:13, fontWeight:700, color:PINK, letterSpacing:3, textTransform:"uppercase", marginBottom:14, opacity:fade(30.5,31.5), ...slideR(30.5,31.5) }}>AI Buyer Verdict</div>
            <div style={{ fontSize:62, fontWeight:900, color:CHARCOAL, letterSpacing:-2.5, lineHeight:1.1, marginBottom:16, opacity:fade(30.5,31.8), ...slideR(30.5,31.8) }}>
              2,083 reviews.<br/>One verdict.
            </div>
            <div style={{ fontSize:22, color:GREY, lineHeight:1.6, opacity:fade(32,33) }}>Distilled in seconds.<br/>Delivered in the app.</div>
          </div>
        )}

        {/* ── BEATS 35-44: Dark bg, phone right + ask ──────────────────── */}
        {/* B10: 35-43 verdict+ask — phone right, text LEFT */}
        {t > 35 && t <= 43 && (
          <div style={{ position:"absolute", right:"52%", top:"50%", transform:"translateY(-50%)", maxWidth:"42%", zIndex:3 }}>
            <div style={{ fontSize:13, fontWeight:700, color:accentTxt, letterSpacing:3, textTransform:"uppercase", marginBottom:14, opacity:fade(36.5,37.5), ...slideL(36.5,37.5) }}>Ask anything</div>
            <div style={{ fontSize:62, fontWeight:900, color:mainTxt, letterSpacing:-2.5, lineHeight:1.1, marginBottom:12, opacity:fade(36.5,37.8), ...slideL(36.5,37.8) }}>
              Your question.<br/>Answered.
            </div>
            <div style={{ fontSize:22, color:dimTxt, lineHeight:1.6, opacity:fade(38,39) }}>Inside Myntra.<br/>No app-switching.</div>
            <div style={{ marginTop:18, opacity:fade(39.5,40.5) }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"14px", background:"rgba(3,166,133,0.12)", border:"1px solid rgba(3,166,133,0.3)", borderRadius:12 }}>
                <div style={{ width:3, background:GREEN, borderRadius:2, alignSelf:"stretch" }}/>
                <div>
                  <div style={{ fontSize:13, color:dimTxt, marginBottom:4, fontStyle:"italic" }}>Will this work for office?</div>
                  <div style={{ fontSize:15, fontWeight:600, color:GREEN, lineHeight:1.5 }}>Yes. 68% of buyers in formal settings kept it.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── USER JOURNEY: 44-52s — 5 steps on white ─────────────────── */}
        {t > 44 && t <= 52 && (
          <div style={{ position:"absolute", inset:0, background:WHITE, display:"flex", zIndex:8 }}>
            {/* Left: heading */}
            <div style={{ width:"38%", display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 0 0 80px" }}>
              <div style={{ fontSize:12, fontWeight:700, color:PINK, letterSpacing:3, textTransform:"uppercase", marginBottom:16, opacity:eo(p(t,44.3,45.2)) }}>
                The journey
              </div>
              <div style={{ fontSize:54, fontWeight:900, color:CHARCOAL, letterSpacing:-2.5, lineHeight:1.1, marginBottom:14, opacity:eo(p(t,44.3,45.4)) }}>
                5 taps.<br/>Zero<br/>confusion.
              </div>
              <div style={{ fontSize:18, color:GREY, lineHeight:1.6, opacity:eo(p(t,45.4,46.2)) }}>
                From app open to<br/>Add to Bag, without<br/>ever leaving Myntra.
              </div>
            </div>
            {/* Right: steps */}
            <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 80px 0 60px", gap:18 }}>
              {[
                { n:1, title:"Open the app",       body:"The Wishlist Strip surfaces your highest-priority saved item on the home screen. No navigation needed.",           delay:45.0 },
                { n:2, title:"See the strip",       body:"74 buyers your size bought this since you saved it. One line. Enough signal to act.",                             delay:45.8 },
                { n:3, title:"Read the AI verdict", body:"2,083 reviews distilled into one paragraph. Runs true to size. Breathes well. No tab-switching.",                 delay:46.6 },
                { n:4, title:"Ask your question",   body:"Will this work for office? Yes. 68% of buyers in formal settings kept it. Answered inside Myntra.",              delay:47.4 },
                { n:5, title:"Add to Bag",          body:"Decision made. One tap. The item moves from wishlist to bag. The loop closes.",                                   delay:48.2 },
              ].map(({ n, title, body, delay }) => (
                <div key={n} style={{
                  display:"flex", alignItems:"flex-start", gap:16,
                  opacity:eo(p(t, delay, delay+0.8)),
                  transform:`translateX(${lr(30,0,eo(p(t,delay,delay+0.8)))}px)`,
                }}>
                  <div style={{ width:34, height:34, borderRadius:"50%", background:PINK, color:WHITE, fontFamily:FONT, fontWeight:800, fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2 }}>
                    {n}
                  </div>
                  <div>
                    <div style={{ fontSize:15, fontWeight:700, color:CHARCOAL, marginBottom:3, fontFamily:FONT }}>{title}</div>
                    <div style={{ fontSize:13, color:GREY, lineHeight:1.55, fontFamily:FONT }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EXPLODED FAN: 53-61s — all 5 screens fanned out ─────────────── */}
        {t > 53 && t <= 62 && (() => {
          const ep = eo(p(t, 53, 56));   // fan spread: 0→1 over 3s
          const fade_out = t > 59 ? eo(p(t,59,61)) : 0; // screens fade as end card rises
          // Label fades in at ep>0.8
          const labelOp = t > 56 ? eo(p(t,56,57.5)) : 0;
          // Arc layout — 5 phones, center tallest
          const phones = [
            { screen:"splash",       scl:0.48, tx:-500, ty:36,  delay:0.15, zIdx:1 },
            { screen:"home",         scl:0.60, tx:-270, ty:-16, delay:0.07, zIdx:2 },
            { screen:"wishlist",     scl:0.72, tx:0,    ty:-44, delay:0,    zIdx:3 },
            { screen:"verdict",      scl:0.60, tx:270,  ty:-16, delay:0.07, zIdx:2 },
            { screen:"verdict-ask",  scl:0.48, tx:500,  ty:36,  delay:0.15, zIdx:1 },
          ];
          return (
            <div style={{ position:"absolute", inset:0, zIndex:9, background:CHARCOAL, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
              {/* Dark overlay fades in */}
              <div style={{ position:"absolute", inset:0, background:CHARCOAL, opacity:eo(p(t,52,53.5)) }}/>
              {/* Section label */}
              <div style={{ position:"absolute", top:48, left:"50%", transform:"translateX(-50%)", fontFamily:FONT, fontSize:12, fontWeight:700, color:"rgba(255,255,255,0.4)", letterSpacing:3, textTransform:"uppercase", opacity:labelOp, zIndex:15 }}>
                The complete journey · 5 screens
              </div>
              {/* Step labels below phones */}
              {["Open app","See strip","Read verdict","Ask & decide","Add to Bag"].map((label, i) => {
                const cfg = phones[i];
                const lp = eo(Math.max(0, Math.min(1, ep - cfg.delay)));
                return (
                  <div key={i} style={{
                    position:"absolute",
                    left:"50%",
                    bottom: 60 - cfg.ty * 0.3,
                    transform:`translateX(calc(-50% + ${cfg.tx * lp}px))`,
                    fontFamily:FONT, fontSize:11, fontWeight:600,
                    color:"rgba(255,255,255,0.55)",
                    textAlign:"center",
                    opacity: lp * labelOp,
                    zIndex:15, whiteSpace:"nowrap",
                  }}>
                    <span style={{ display:"inline-block", width:20, height:20, borderRadius:"50%", background:PINK, color:WHITE, fontSize:10, fontWeight:700, lineHeight:"20px", textAlign:"center", marginBottom:4 }}>{i+1}</span>
                    <br/>{label}
                  </div>
                );
              })}
              {/* Phones */}
              {phones.map((cfg, i) => {
                const lp = eo(Math.max(0, Math.min(1, ep - cfg.delay)));
                return (
                  <div key={i} style={{
                    position:"absolute",
                    left:"50%", top:"50%",
                    transform:`translate(${-PW/2 + cfg.tx*lp}px, ${-PH/2 + cfg.ty*lp - 30}px) scale(${cfg.scl})`,
                    opacity: lp * (1 - fade_out),
                    zIndex: cfg.zIdx,
                    willChange:"transform",
                  }}>
                    <IPhone>
                      {cfg.screen==="splash"      && <HomeWithStrip/>}
                      {cfg.screen==="home"         && <HomeWithStrip/>}
                      {cfg.screen==="wishlist"     && <WishlistGrid/>}
                      {cfg.screen==="verdict"      && <VerdictSheet showAsk={false}/>}
                      {cfg.screen==="verdict-ask"  && <VerdictSheet showAsk={true}/>}
                    </IPhone>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* ── END CARD: 62-66s — pink ───────────────────────────────────────── */}
        {t > 62 && (
          <div style={{ position:"absolute", inset:0, background:PINK, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20, zIndex:11 }}>
            <div style={{ opacity:eo(p(t,62.2,63.5)), transform:`scale(${lr(0.85,1,eo(p(t,62.2,63.5)))})` }}>
              <img src="/myntra-logo.png" alt="Myntra" style={{ height:52, objectFit:"contain", filter:"brightness(0) invert(1)" }}/>
            </div>
            <div style={{ fontSize:68, fontWeight:900, color:WHITE, letterSpacing:-3, textAlign:"center", opacity:eo(p(t,63,64)), transform:`translateY(${lr(16,0,eo(p(t,63,64)))}px)` }}>
              Wishlist Confidence Engine.
            </div>
            <div style={{ fontSize:22, color:"rgba(255,255,255,0.75)", opacity:eo(p(t,64.2,65)) }}>
              Live at{" "}
              <a href="https://d3-myntra.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color:WHITE, textDecoration:"underline" }}>
                d3-myntra.vercel.app
              </a>
            </div>
            <div style={{ fontSize:16, color:"rgba(255,255,255,0.5)", letterSpacing:2, opacity:eo(p(t,65,65.8)) }}>
              NextLeap PM Fellowship · 2026
            </div>
          </div>
        )}

        {/* ── iPhone shell ──────────────────────────────────────────────── */}
        {showPhone && (
          <div style={{
            position:"absolute",
            left: phoneLeft, top: phoneTop,
            transform:`translate(-50%,-50%) scale(${phoneScale})`,
            opacity: phoneOpacity,
            willChange:"transform,opacity",
            zIndex:5,
          }}>
            <IPhone>
              {phoneScreen === "home"         && <HomeWithStrip/>}
              {phoneScreen === "wishlist"      && <WishlistGrid/>}
              {phoneScreen === "verdict"       && <VerdictSheet showAsk={false}/>}
              {phoneScreen === "verdict-ask"   && <VerdictSheet showAsk={true}/>}
            </IPhone>
          </div>
        )}

        {/* ── Progress bar ──────────────────────────────────────────────── */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"rgba(255,255,255,0.1)", zIndex:99 }}>
          <div style={{ height:"100%", background: t > 62 ? "rgba(255,255,255,0.5)" : PINK, width:`${(t/TOTAL)*100}%`, transition:"width 0.05s linear" }}/>
        </div>

      </div>
    </div>
  );
}
