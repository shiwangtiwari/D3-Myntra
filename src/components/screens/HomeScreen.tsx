"use client";
import { useRef, useState, useEffect } from "react";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import StatusBar from "../StatusBar";
import BottomNav from "../BottomNav";
import { pink, pinkLt, pinkBd, green, ink, grey, greyLt, border } from "../../constants/colors";

type Props = {
  bag: number;
  stripProduct: Product;
  onOpenStrip: () => void;
  onWishlist: () => void;
};

const topBg = "linear-gradient(180deg,#FCE4DA 0%,#FDEEE7 55%,#FFFFFF 100%)";

function HeaderIcons() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M10 1c-3.3 0-6 2.6-6 6v4.2c0 .8-.3 1.5-.9 2.1L2 14.5V16h16v-1.5l-1.1-1.2c-.6-.6-.9-1.3-.9-2.1V7c0-3.4-2.7-6-6-6z" stroke={ink} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 18.5a2 2 0 004 0" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M10 16.5S1.5 11 1.5 5.5C1.5 3.01 3.51 1 6 1c1.65 0 3.1.82 4 2.07A4.97 4.97 0 0114 1c2.49 0 4.5 2.01 4.5 4.5 0 5.5-8.5 11-8.5 11z" stroke={ink} strokeWidth="1.4" />
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="6.5" r="3.5" stroke={ink} strokeWidth="1.4" />
        <path d="M3 18c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" stroke={ink} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function CatIcon({ src, label }: { src: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0, width: 62 }}>
      <div style={{ width: 54, height: 54, borderRadius: 14, overflow: "hidden", background: "#F3E4DC" }}>
        <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <span style={{ fontSize: 10, color: ink, fontWeight: 500, whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}

function PromoRow({ title, sub, ad, tiles }: { title: string; sub: string; ad?: boolean; tiles: { img: string; big: string; small: string }[] }) {
  return (
    <div style={{ padding: "22px 14px 4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: ink }}>{title}</div>
          <div style={{ fontSize: 12, color: grey, marginTop: 2 }}>{sub}</div>
        </div>
        {ad && <span style={{ fontSize: 9, color: greyLt, background: "#F0F0F0", padding: "3px 6px", borderRadius: 3, fontWeight: 600 }}>AD</span>}
      </div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none" }}>
        {tiles.map((t, i) => (
          <div key={i} style={{ position: "relative", minWidth: 168, width: 168, height: 210, borderRadius: 10, overflow: "hidden", flexShrink: 0, background: "#eee" }}>
            <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px 10px 10px", background: "linear-gradient(0deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,0) 100%)" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#fff" }}>{t.big}</div>
              <div style={{ fontSize: 10, color: "#fff", opacity: 0.9 }}>{t.small}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeScreen({ bag, stripProduct, onOpenStrip, onWishlist }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setIsSticky(el.scrollTop > 72);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PhoneShell screen="home">
      <style>{`
        @keyframes strip-border-pulse {
          0%, 100% {
            border-color: #FFCED8;
            box-shadow: 0 2px 8px rgba(255,63,108,0.08);
          }
          50% {
            border-color: #FF3F6C;
            box-shadow: 0 3px 14px rgba(255,63,108,0.20);
          }
        }
        .wishlist-strip-expanded {
          animation: strip-border-pulse 2.4s ease-in-out infinite;
        }
      `}</style>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* ── Fixed header (gradient) ── */}
        <div style={{ background: topBg, flexShrink: 0 }}>
          <StatusBar bg="transparent" />

          {/* Delivery address bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 14px 10px" }}>
            <svg width="12" height="16" viewBox="0 0 12 16" fill={ink}><path d="M6 0C2.7 0 0 2.7 0 6c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.2a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4z" /></svg>
            <span style={{ fontSize: 12, color: ink, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              Deliver to <b>Shiwang Tiwari - D-148, Bhagat Singh...</b>
            </span>
            <svg width="11" height="7" viewBox="0 0 11 7" style={{ flexShrink: 0 }}><path d="M1 1l4.5 4.5L10 1" stroke={ink} strokeWidth="1.6" strokeLinecap="round" fill="none" /></svg>
            <div style={{ display: "flex", alignItems: "center", gap: 3, background: "#fff", borderRadius: 20, padding: "5px 10px 5px 12px", flexShrink: 0, marginLeft: 4, boxShadow: "0 1px 4px rgba(0,0,0,.08)" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: ink }}>&#8377;0</span>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: green, color: "#fff", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>&#8377;</span>
            </div>
          </div>

          {/* Search bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 14px 10px" }}>
            <div style={{ flex: 1, background: "#fff", borderRadius: 24, padding: "9px 14px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
              <img src="/myntra-m.png" alt="" style={{ width: 17, height: 17, objectFit: "contain" }} />
              <span style={{ fontSize: 13, color: grey, flex: 1, fontStyle: "italic" }}>&quot;Dresses&quot;</span>
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none"><rect x="4.5" y="1" width="6" height="10" rx="3" stroke={greyLt} strokeWidth="1.3" /><path d="M1.5 8.5a6 6 0 0012 0" stroke={greyLt} strokeWidth="1.3" strokeLinecap="round" /><line x1="7.5" y1="14.5" x2="7.5" y2="17" stroke={greyLt} strokeWidth="1.3" strokeLinecap="round" /></svg>
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none"><rect x="1" y="3.5" width="16" height="10.5" rx="2" stroke={greyLt} strokeWidth="1.3" /><circle cx="9" cy="8.5" r="3" stroke={greyLt} strokeWidth="1.3" /><rect x="6" y="1" width="4" height="2.5" rx=".5" stroke={greyLt} strokeWidth="1.2" /></svg>
            </div>
            <div onClick={onWishlist} style={{ cursor: "pointer" }}>
              <HeaderIcons />
            </div>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", background: "#fff", position: "relative" }}>

          {/* ── Collapsed sticky strip (appears when user scrolls past expanded strip) ── */}
          <div
            onClick={onOpenStrip}
            style={{
              position: "sticky",
              top: isSticky ? 10 : 0,
              zIndex: 50,
              background: "#fff",
              border: isSticky ? `1px solid ${pinkBd}` : "none",
              borderRadius: isSticky ? 12 : 0,
              margin: isSticky ? "0 14px" : "0",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: isSticky ? "7px 12px" : "0 14px",
              height: isSticky ? 52 : 0,
              overflow: "hidden",
              transition: "height 0.22s ease, padding 0.22s ease, box-shadow 0.22s ease, top 0.22s ease",
              cursor: "pointer",
              boxShadow: isSticky ? "0 3px 16px rgba(255,63,108,0.16), 0 1px 4px rgba(0,0,0,0.08)" : "none",
            }}
          >
            {isSticky && (
              <>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <img
                    src={stripProduct.imgs[0]}
                    alt=""
                    style={{ width: 32, height: 40, objectFit: "cover", borderRadius: 5, border: `1px solid ${pinkBd}` }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: pink, textTransform: "uppercase", letterSpacing: "0.05em" }}>From your wishlist</div>
                  <div style={{ fontSize: 11.5, color: ink, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    74 buyers your size bought this. Tap to see what they said.
                  </div>
                </div>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M1 1l5 5-5 5" stroke={pink} strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </>
            )}
          </div>

          {/* ── Expanded Wishlist Strip ── */}
          <div
            className="wishlist-strip-expanded"
            onClick={onOpenStrip}
            style={{
              margin: "10px 14px 4px",
              background: pinkLt,
              border: "1.5px solid #FFCED8",
              borderRadius: 12,
              padding: "12px 12px 12px 10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              transition: "opacity 0.18s ease",
              opacity: isSticky ? 0.25 : 1,
            }}
          >
            {/* Product thumbnail with star badge */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src={stripProduct.imgs[0]}
                alt=""
                style={{
                  width: 52,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1.5px solid #FFCED8",
                  display: "block",
                }}
              />
              {/* Pink star badge top-right */}
              <div style={{
                position: "absolute",
                top: -5,
                right: -5,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: pink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 1px 4px rgba(255,63,108,0.4)",
              }}>
                <svg width="10" height="10" viewBox="0 0 20 20">
                  <path d="M10 2l1.8 5.5H18l-4.9 3.6 1.9 5.8L10 13.4 5 16.9l1.9-5.8L2 7.5h6.2z" fill="#fff" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: pink, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 3 }}>
                From your wishlist
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: ink, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {stripProduct.brand}
              </div>
              <div style={{ fontSize: 12, color: ink, lineHeight: 1.4 }}>
                74 buyers your size bought this. Here is what they said.
              </div>
            </div>

            {/* Chevron */}
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" style={{ flexShrink: 0 }}>
              <path d="M1 1l5 5-5 5" stroke={pink} strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>

          {/* ALL / MEN / WOMEN / KIDS tabs */}
          <div style={{ display: "flex", alignItems: "center", padding: "12px 14px 0", borderBottom: `1px solid ${border}`, gap: 26 }}>
            {["ALL", "MEN", "WOMEN", "KIDS"].map((t, i) => (
              <div key={t} style={{ paddingBottom: 10, borderBottom: i === 0 ? `2px solid ${pink}` : "2px solid transparent", fontSize: 12, fontWeight: 700, letterSpacing: "0.03em", color: i === 0 ? pink : ink }}>{t}</div>
            ))}
            <div style={{ marginLeft: "auto", marginBottom: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: 8, background: ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                  {[0, 1, 2, 3].map(i => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff" }} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Category icon rail */}
          <div style={{ display: "flex", gap: 14, overflowX: "auto", padding: "12px 14px 16px", scrollbarWidth: "none" }}>
            <CatIcon src="/home/cat-fashion.png" label="Fashion" />
            <CatIcon src="/home/cat-beauty.png" label="Beauty" />
            <CatIcon src="/home/cat-homeliving.png" label="Homeliving" />
            <CatIcon src="/home/cat-footwear.png" label="Footwear" />
            <CatIcon src="/home/cat-accessories.png" label="Accessories" />
          </div>

          {/* Hero banner */}
          <div style={{ padding: "0 14px" }}>
            <div style={{ position: "relative", borderRadius: 14, overflow: "hidden" }}>
              <img src="/home/hero-banner.png" alt="" style={{ width: "100%", display: "block" }} />
              <button style={{ position: "absolute", right: 10, bottom: 10, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,.9)", border: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M1 1l5.5 5L1 11" stroke={ink} strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 5, padding: "10px 0 4px" }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} style={{ width: i === 0 ? 14 : 5, height: 5, borderRadius: 3, background: i === 0 ? ink : "#DADADA" }} />
              ))}
            </div>
          </div>

          {/* Pay Later banner */}
          <div style={{ padding: "6px 14px 4px" }}>
            <img src="/home/paylater-banner.png" alt="" style={{ width: "100%", borderRadius: 8, display: "block" }} />
          </div>

          {/* Continue Browsing These Brands */}
          <div style={{ padding: "20px 14px 4px" }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: ink, marginBottom: 12 }}>Continue Browsing These Brands</div>
            <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none" }}>
              {[
                { img: "/home/cb-boots.png", brand: "Roadster", cat: "Boots", price: "₹1,617", mrp: "₹7,995", off: "80% OFF", rating: "3.8" },
                { img: "/home/cb-shirt.png", brand: "Suo", cat: "Shirts", price: "₹1,910", mrp: "₹4,899", off: "61% OFF", rating: null },
              ].map((t, i) => (
                <div key={i} style={{ minWidth: 150, width: 150, flexShrink: 0 }}>
                  <div style={{ position: "relative", height: 180, borderRadius: 10, overflow: "hidden", background: "#eee" }}>
                    <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    {t.rating && (
                      <div style={{ position: "absolute", top: 8, left: 8, background: "#fff", borderRadius: 5, padding: "2px 6px", fontSize: 10, fontWeight: 700, color: ink, display: "flex", alignItems: "center", gap: 3 }}>
                        {t.rating}<svg width="8" height="8" viewBox="0 0 8 8"><path d="M4 0l.8 1.8H7L5.2 3.2l.7 2L4 4l-1.9 1.2.7-2L1 1.8h2.2z" fill={green} /></svg>
                      </div>
                    )}
                    <div style={{ position: "absolute", top: 8, right: 8 }}>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none"><path d="M8 14S1.2 9.6 1.2 4.9C1.2 2.5 3.1.9 5.2.9c1.2 0 2.4.6 2.8 1.5C8.4 1.5 9.6.9 10.8.9c2.1 0 4 1.6 4 4C14.8 9.6 8 14 8 14z" fill="rgba(255,255,255,.85)" stroke="#fff" /></svg>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ink, marginTop: 6 }}>{t.brand}</div>
                  <div style={{ fontSize: 11, color: grey }}>{t.cat}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 2 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: ink }}>{t.price}</span>
                    <span style={{ fontSize: 10, color: greyLt, textDecoration: "line-through" }}>{t.mrp}</span>
                    <span style={{ fontSize: 10, color: pink, fontWeight: 600 }}>({t.off})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PromoRow
            title="Featured Brands"
            sub="Spotlight your style with brands"
            ad
            tiles={[
              { img: "/home/featured-1.png", big: "Up To 70% Off", small: "Global Trends · H&M" },
              { img: "/home/featured-2.png", big: "Up To 50% Off", small: "Wear Your Attitude · Jack & Jones" },
            ]}
          />

          {/* Hand Picked For You */}
          <div style={{ padding: "22px 14px 4px" }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: ink }}>Hand Picked For You</div>
            <div style={{ fontSize: 12, color: grey, marginTop: 2, marginBottom: 12 }}>Stories you would love!</div>
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", height: 220 }}>
              <img src="/home/handpicked-banner.png" alt="The Rakhi Shop" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <PromoRow
            title="Sponsored Products"
            sub=""
            ad
            tiles={[
              { img: "/home/sponsored-1.png", big: "Luxury Perfumes", small: "Up to 80% off" },
              { img: "/home/sponsored-2.png", big: "Top Handle Bags", small: "Up to 75% off" },
            ]}
          />

          <div style={{ height: 20 }} />
        </div>

        <BottomNav bag={bag} onHome={() => {}} active="home" />
      </div>
    </PhoneShell>
  );
}
