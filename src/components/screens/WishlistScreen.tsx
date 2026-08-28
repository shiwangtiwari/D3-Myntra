"use client";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import StatusBar from "../StatusBar";
import BottomNav from "../BottomNav";
import { pink, pinkLt, pinkBd, green, ink, grey, greyLt, border, bg } from "../../constants/colors";

type Props = {
  products: Product[];
  bag: number;
  onOpen: (p: Product) => void;
  onSetScr: (s: string) => void;
};

function WHeader({ bag, onBack }: { bag: number; onBack: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 14px 10px", gap: 10, borderBottom: `1px solid ${border}`, background: "#fff", flexShrink: 0 }}>
      <button onClick={onBack} style={{ background: "none", border: "none", padding: "4px 6px 4px 0", cursor: "pointer", fontSize: 20, color: greyLt, lineHeight: 1, marginTop: -2, fontFamily: "inherit", display: "flex", alignItems: "center" }}>&#8592;</button>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: ink }}>Wishlist</div>
        <div style={{ fontSize: 11, color: greyLt }}>315 items</div>
      </div>
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
        <line x1="2" y1="4" x2="14" y2="4" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="9" x2="11" y2="9" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="14" x2="9" y2="14" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 11l4-4 2 2-4 4-2.5.5.5-2.5z" stroke={ink} strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <div style={{ position: "relative" }}>
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
          <rect x="1" y="7" width="20" height="16" rx="1.5" stroke={ink} strokeWidth="1.5" />
          <path d="M7 7V6a4 4 0 018 0v1" stroke={ink} strokeWidth="1.5" />
        </svg>
        <span style={{ position: "absolute", top: -3, right: -5, background: pink, color: "#fff", borderRadius: "50%", width: 15, height: 15, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{bag}</span>
      </div>
    </div>
  );
}

function Card({ p, onOpen }: { p: Product; onOpen: (p: Product) => void }) {
  return (
    <div style={{ cursor: "pointer", minWidth: 0 }} onClick={() => onOpen(p)}>
      <div style={{ position: "relative", borderRadius: "8px 8px 0 0", overflow: "hidden", height: 200, flexShrink: 0 }}>
        {p.priceDrop && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "linear-gradient(90deg,rgba(3,166,133,0.18) 0%,transparent 100%)", padding: "4px 8px", display: "flex", alignItems: "center", gap: 3, zIndex: 2 }}>
            <svg width="8" height="9" viewBox="0 0 8 9"><path d="M4 0v7.5M1.5 5l2.5 2.5L6.5 5" stroke={green} strokeWidth="1" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 9, fontWeight: 600, color: green, letterSpacing: "0.03em" }}>PRICE DROP BY &#8377;{p.priceDrop}</span>
          </div>
        )}
        <img src={p.cardImg} alt={p.brand} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", position: "absolute", inset: 0 }} />
        {p.rating && (
          <div style={{ position: "absolute", bottom: 7, left: 7, background: "rgba(255,255,255,0.95)", borderRadius: 20, padding: "3px 7px", display: "flex", alignItems: "center", gap: 3, fontSize: 11, fontWeight: 700, color: ink, boxShadow: "0 1px 3px rgba(0,0,0,.12)" }}>
            {p.rating}
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1l.9 2.1H8.5L6 5l.9 2.5L5 6.2 3.1 7.5 4 5 1.5 3.1H4.1z" fill={green} /></svg>
          </div>
        )}
        <button onClick={e => { e.stopPropagation(); onOpen(p); }} style={{ position: "absolute", bottom: 6, right: 6, background: "#fff", border: `1.5px solid ${pink}`, borderRadius: 20, padding: "5px 10px", fontSize: 11, fontWeight: 600, color: pink, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontFamily: "inherit", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><rect x=".5" y="3.5" width="9" height="8" rx="1" stroke={pink} strokeWidth="1" /><path d="M3 3.5V3a2 2 0 014 0v.5" stroke={pink} strokeWidth="1" /></svg>
          Add
        </button>
      </div>
      <div style={{ paddingTop: 6 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: ink }}>{p.brand}</div>
        <div style={{ fontSize: 10, color: grey, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 2 }}>{p.name}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: ink }}>&#8377;{p.price.toLocaleString("en-IN")}</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: green }}>{p.discount}% OFF</span>
          <span style={{ fontSize: 10, color: greyLt, textDecoration: "line-through" }}>&#8377;{p.mrp.toLocaleString("en-IN")}</span>
        </div>
        {p.express
          ? <div style={{ fontSize: 9, color: ink, marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
            Delivery on Aug 22&nbsp;
            <span style={{ background: pink, color: "#fff", fontSize: 8, fontWeight: 700, padding: "1px 4px", borderRadius: 2, letterSpacing: "0.02em" }}>EXPRESS</span>
          </div>
          : <div style={{ fontSize: 9, color: greyLt, marginTop: 2 }}>{p.delivery}</div>
        }
      </div>
      <div style={{ display: "flex", borderTop: `1px solid ${border}`, marginTop: 6, paddingTop: 6 }}>
        {[
          <svg key="d" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="10" rx="1" stroke={greyLt} strokeWidth="1.2" /><path d="M4 3V2a1 1 0 011-1h4a1 1 0 011 1v1" stroke={greyLt} strokeWidth="1.2" /><path d="M5.5 6v4M8.5 6v4" stroke={greyLt} strokeWidth="1.2" strokeLinecap="round" /></svg>,
          <svg key="c" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx=".5" stroke={greyLt} strokeWidth="1.2" /><rect x="8" y="1" width="5" height="5" rx=".5" stroke={greyLt} strokeWidth="1.2" /><rect x="1" y="8" width="5" height="5" rx=".5" stroke={greyLt} strokeWidth="1.2" /><rect x="8" y="8" width="5" height="5" rx=".5" stroke={greyLt} strokeWidth="1.2" /></svg>,
          <svg key="s" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="11" cy="2.5" r="1.5" stroke={greyLt} strokeWidth="1.2" /><circle cx="11" cy="11.5" r="1.5" stroke={greyLt} strokeWidth="1.2" /><circle cx="3" cy="7" r="1.5" stroke={greyLt} strokeWidth="1.2" /><path d="M4.3 6.3l5.4-3M4.3 7.7l5.4 3" stroke={greyLt} strokeWidth="1.2" /></svg>,
        ].map((icon, i) => (
          <button key={i} style={{ flex: 1, background: "none", border: "none", cursor: "pointer", padding: "3px 0", display: "flex", justifyContent: "center" }}>{icon}</button>
        ))}
      </div>
    </div>
  );
}

export default function WishlistScreen({ products, bag, onOpen, onSetScr }: Props) {
  return (
    <PhoneShell screen="wishlist">
      {/* ── FIXED: Status bar + Wishlist header only ── */}
      <StatusBar />
      <WHeader bag={bag} onBack={() => onSetScr("home")} />

      {/* ── SCROLLABLE: everything below header scrolls together ── */}
      <div style={{ flex: 1, overflowY: "auto", background: "#fff" }}>
        {/* Address bar */}
        <div style={{ padding: "8px 14px", background: "#FFF8FB", borderBottom: `1px solid ${border}`, display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="10" height="14" viewBox="0 0 10 14" fill={pink}><path d="M5 0C2.8 0 1 1.8 1 4c0 3 4 8 4 8s4-5 4-8C9 1.8 7.2 0 5 0zm0 5.5c-.8 0-1.5-.7-1.5-1.5S4.2 2.5 5 2.5 6.5 3.2 6.5 4 5.8 5.5 5 5.5z" /></svg>
          <span style={{ fontSize: 11, fontWeight: 600, color: ink }}>Shiwang Tiwari</span>
          <span style={{ fontSize: 11, color: grey, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}> - D-148, Bhagat Singh Colony Bhiwadi</span>
          <svg width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke={greyLt} strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
        </div>

        {/* Collections + Out of Stock */}
        <div style={{ display: "flex", gap: 8, padding: "10px 14px 8px" }}>
          {[
            { icon: <svg width="18" height="16" viewBox="0 0 18 16" fill="none"><rect x="3" y="6" width="13" height="9" rx="1.2" stroke={ink} strokeWidth="1.3" /><rect x="1.5" y="4" width="13" height="9" rx="1.2" stroke={ink} strokeWidth="1.3" fill="#fff" /><rect x="0" y="2" width="13" height="9" rx="1.2" stroke={ink} strokeWidth="1.3" fill="#fff" /></svg>, label: "Collections" },
            { icon: <svg width="18" height="16" viewBox="0 0 18 16" fill="none"><path d="M1 6h16v8a1 1 0 01-1 1H2a1 1 0 01-1-1V6z" stroke={ink} strokeWidth="1.3" /><path d="M1 6l2.5-4h11L17 6" stroke={ink} strokeWidth="1.3" strokeLinejoin="round" /><line x1="6.5" y1="8.5" x2="11.5" y2="13" stroke={ink} strokeWidth="1.3" strokeLinecap="round" /><line x1="11.5" y1="8.5" x2="6.5" y2="13" stroke={ink} strokeWidth="1.3" strokeLinecap="round" /></svg>, label: "Out of Stock" },
          ].map(b => (
            <button key={b.label} style={{ flex: 1, padding: "7px 0", border: `1px solid ${border}`, borderRadius: 6, fontSize: 12, fontWeight: 500, color: ink, background: "#fff", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
              {b.icon}{b.label}
            </button>
          ))}
        </div>

        {/* Category chips */}
        <div style={{ display: "flex", gap: 0, overflowX: "auto", padding: "4px 14px 8px", scrollbarWidth: "none" }}>
          {[{ img: "👔", label: "Shirts" }, { img: "👕", label: "Tshirts" }, { img: "🧥", label: "Sweatshirts" }, { img: "👟", label: "Casual Shoes" }, { img: "🧥", label: "Jackets" }, { img: "👘", label: "Sweaters" }, { img: "👖", label: "Jeans" }].map(c => (
            <div key={c.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "0 8px", flexShrink: 0 }}>
              <div style={{ width: 46, height: 46, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: `1px solid ${border}` }}>
                {c.img}
              </div>
              <span style={{ fontSize: 10, color: ink, whiteSpace: "nowrap" }}>{c.label}</span>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 12px 16px" }}>
          {products.map(p => <Card key={p.id} p={p} onOpen={onOpen} />)}
        </div>
      </div>

      <BottomNav bag={bag} onHome={() => onSetScr("home")} active="home" />
    </PhoneShell>
  );
}