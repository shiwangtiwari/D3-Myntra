"use client";
import { useRef } from "react";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import { pink, pinkLt, pinkBd, green, ink, grey, greyLt, border } from "../../constants/colors";

const btnCSS = `
@keyframes askSpin { to { transform: rotate(360deg); } }
.ask-spinner {
  width: 13px; height: 13px;
  border: 2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: askSpin 0.65s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}
`;

type Props = {
  prod: Product;
  q: string;
  ans: string;
  busy: boolean;
  onBack: () => void;
  onSetQ: (q: string) => void;
  onAsk: () => void;
  onSize: () => void;
  onWishlist: () => void;
};

export default function VerdictScreen({ prod, q, ans, busy, onBack, onSetQ, onAsk, onSize, onWishlist }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <PhoneShell screen="verdict">
      <style>{btnCSS}</style>
      <div style={{ flex: 1, position: "relative", overflow: "hidden", height: "100%" }}>
        <img src={prod.imgs[0]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "18px 18px 0 0", height: "87%", display: "flex", flexDirection: "column", boxShadow: "0 -6px 24px rgba(0,0,0,.18)", zIndex: 10 }}>

          {/* Drag handle */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 10, paddingBottom: 6 }}>
            <div style={{ width: 34, height: 4, borderRadius: 2, background: "#D4D5D9" }} />
          </div>


          {/* Product header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 16px 12px", borderBottom: `1px solid ${border}` }}>
            <img src={prod.cardImg} alt="" style={{ width: 50, height: 64, objectFit: "cover", borderRadius: 4, border: `1px solid ${border}` }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ink }}>{prod.brand}</div>
              <div style={{ fontSize: 11, color: grey, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{prod.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: ink }}>&#8377;{prod.price.toLocaleString("en-IN")}</span>
                <span style={{ fontSize: 10, color: green, fontWeight: 600 }}>{prod.discount}% OFF</span>
              </div>
            </div>
            <button onClick={onBack} style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid ${border}`, background: "#f5f5f5", fontSize: 14, color: grey, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>&#x2715;</button>
          </div>

          {/* Scrollable content */}
          <div style={{ flex: 1, overflowY: "auto", minHeight: 0, padding: "14px 16px 20px" }}>

            {/* AI Verdict block */}
            <div style={{ background: pinkLt, border: `1px solid ${pinkBd}`, borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 0l.8 3H10L7.4 4.8l1 3L6 6.5 3.6 7.8l1-3L2 3h3.2z" fill={pink} /></svg>
                <span style={{ fontSize: 11, fontWeight: 700, color: pink, textTransform: "uppercase", letterSpacing: "0.06em" }}>AI Buyer Verdict</span>
                <span style={{ marginLeft: "auto", fontSize: 10, color: greyLt }}>{prod.reviewCount} reviews</span>
              </div>
              <p style={{ fontSize: 13, color: ink, lineHeight: 1.65, margin: 0 }}>{prod.verdict}</p>
            </div>

            {/* Ask */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ink, marginBottom: 4 }}>Ask anything about this item</div>
              <div style={{ fontSize: 11, color: greyLt, marginBottom: 8 }}>Ask about fit, fabric, occasions, styling — anything on your mind.</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <input
                  ref={ref}
                  value={q}
                  onChange={e => onSetQ(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && onAsk()}
                  placeholder="e.g. Will this work for a beach holiday?"
                  style={{ flex: 1, padding: "9px 12px", border: `1px solid ${border}`, borderRadius: 6, fontSize: 12, color: ink, outline: "none", fontFamily: "inherit" }}
                />
                <button onClick={onAsk} disabled={!q.trim() || busy} style={{ padding: "9px 14px", minWidth: 52, background: busy ? green : (!q.trim() ? "#D4D5D9" : pink), color: "#fff", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: (!q.trim() || busy) ? "default" : "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, transition: "background 0.2s" }}>
                  {busy ? <span className="ask-spinner" /> : "Ask"}
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, color: greyLt, fontStyle: "italic" }}>Try:</span>
                {["Does it run large?", "Office or casual?", "Good for summer?"].map(c => (
                  <button key={c} onClick={() => { onSetQ(c); }} style={{ padding: "4px 10px", border: `1px solid ${pinkBd}`, borderRadius: 20, fontSize: 11, color: pink, background: pinkLt, cursor: "pointer", fontFamily: "inherit" }}>{c}</button>
                ))}
              </div>
              {ans && !busy && (
                <div style={{ marginTop: 10, padding: "10px 12px", background: "#F0FDF8", border: "1px solid #A7F3D0", borderRadius: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: green, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>AI Answer from buyer reviews</div>
                  <p style={{ fontSize: 13, color: ink, lineHeight: 1.6, margin: 0 }}>{ans}</p>
                </div>
              )}
            </div>

            {/* Review cards horizontal scroll */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: ink, marginBottom: 8 }}>What buyers are saying</div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none", padding: "2px 4px" }}>
                {prod.reviewSnippets.map((r, i) => (
                  <div key={i} style={{ width: 200, flexShrink: 0, border: `1px solid ${border}`, borderRadius: 10, padding: "12px", background: "#fff" }}>
                    {/* Stars + size + name row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 4 }}>
                      <div style={{ display: "flex", gap: 1 }}>
                        {[1,2,3,4,5].map(s => (
                          <svg key={s} width="10" height="10" viewBox="0 0 10 10">
                            <path d="M5 0l.7 2.6H8.4L6.1 4.2l.8 2.6L5 5.5 3.1 6.8l.8-2.6L1.6 2.6h2.7z" fill={s <= r.rating ? pink : "#D4D5D9"} />
                          </svg>
                        ))}
                      </div>
                      <span style={{ fontSize: 10, color: grey, background: "#F5F5F5", borderRadius: 4, padding: "1px 5px", marginLeft: 2 }}>Size: {r.size}</span>
                    </div>
                    <div style={{ fontSize: 10, color: greyLt, marginBottom: 6 }}>{r.name}</div>
                    {/* Review text, max 3 lines */}
                    <div style={{
                      fontSize: 12,
                      color: ink,
                      lineHeight: 1.5,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      marginBottom: 8,
                    }}>
                      {r.text}
                    </div>
                    {/* Verified purchase badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5.5L3.8 8.5 9 2" stroke={green} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span style={{ fontSize: 10, color: green, fontWeight: 600 }}>Verified Purchase</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Pinned CTA footer — always at the bottom of the sheet */}
          <div style={{ padding: "12px 16px 16px", borderTop: `1px solid ${border}`, background: "#fff" }}>
            <button onClick={onSize} style={{ width: "100%", padding: "13px 0", background: pink, color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 8, fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><rect x=".5" y="4.5" width="13" height="11" rx="1" stroke="#fff" strokeWidth="1.3" /><path d="M4.5 4.5V3.5a2.5 2.5 0 015 0v1" stroke="#fff" strokeWidth="1.3" /></svg>
              Add to Bag
            </button>
            <button onClick={onWishlist} style={{ width: "100%", padding: "13px 0", background: "#fff", color: pink, border: `1.5px solid ${pink}`, borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
              Continue Browsing Wishlist
            </button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
