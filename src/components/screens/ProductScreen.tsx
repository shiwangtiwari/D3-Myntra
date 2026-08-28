"use client";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import StatusBar from "../StatusBar";
import { pink, pinkLt, pinkBd, green, orange, amber, ink, grey, greyLt, border } from "../../constants/colors";

type Props = {
  prod: Product;
  imgI: number;
  size: string;
  onBack: () => void;
  onSetImgI: (i: number) => void;
  onSetSize: (s: string) => void;
  onVerdict: () => void;
  onSize: () => void;
};

// Search bar row — sits directly below the shared StatusBar
function SearchBar({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 14px 10px", background: "#fff", flexShrink: 0 }}>
      <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", flexShrink: 0 }}>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path d="M19 8H1M8 1L1 8l7 7" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div style={{ flex: 1, background: "#F5F5F6", borderRadius: 24, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <img src="/myntra-m.png" alt="" style={{ width: 15, height: 15, objectFit: "contain" }}/>
        <span style={{ fontSize: 13, color: "#ABABAB", flex: 1 }}>Search in Myntra</span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="6.5" cy="6.5" r="5" stroke="#ABABAB" strokeWidth="1.4"/>
          <path d="M10.5 10.5l3 3" stroke="#ABABAB" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path d="M11 18.5S2 13 2 7C2 4.24 4.24 2 7 2c1.65 0 3.1.82 4 2.07A4.97 4.97 0 0115 2c2.76 0 5 2.24 5 5 0 6-9 11.5-9 11.5z" stroke={ink} strokeWidth="1.4"/>
      </svg>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <rect x="1" y="6" width="18" height="15" rx="1.5" stroke={ink} strokeWidth="1.4"/>
        <path d="M6.5 6V5a3.5 3.5 0 017 0v1" stroke={ink} strokeWidth="1.4"/>
      </svg>
    </div>
  );
}

export default function ProductScreen({ prod, imgI, size, onBack, onSetImgI, onSetSize, onVerdict, onSize }: Props) {
  return (
    <PhoneShell screen="product">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <StatusBar />
        <SearchBar onBack={onBack} />

        <div style={{ flex: 1, overflowY: "auto", background: "#fff" }}>

          {/* Product image */}
          <div style={{ position: "relative", height: 380, flexShrink: 0 }}>
            <img src={prod.imgs[imgI]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}/>
            {/* Review avatar */}
            <div style={{ position: "absolute", bottom: 46, right: 8, width: 42, height: 42, borderRadius: "50%", border: `2px solid ${pink}`, overflow: "hidden", background: "#fff", zIndex: 5 }}>
              <img src={prod.reviewImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
            </div>
            {/* Rating pill */}
            <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(255,255,255,.96)", borderRadius: 6, padding: "4px 8px", display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: ink, boxShadow: "0 1px 6px rgba(0,0,0,.18)", zIndex: 5 }}>
              {prod.rating}
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1l.9 2H8.5L6 5l.9 2.3L5 6 3.1 7.3 4 5 1.5 3H4.1z" fill={amber}/></svg>
              <span style={{ color: greyLt, fontWeight: 400 }}>| {prod.ratingCount}</span>
            </div>
            {/* Image dots */}
            <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4, zIndex: 5 }}>
              {prod.imgs.map((_, i) => (
                <div key={i} onClick={() => onSetImgI(i)} style={{ width: imgI === i ? 18 : 4, height: 3, borderRadius: 2, background: imgI === i ? "#fff" : "rgba(255,255,255,.5)", cursor: "pointer", transition: "all .2s" }}/>
              ))}
            </div>
          </div>

          {/* 3-icon row */}
          <div style={{ display: "flex", borderBottom: `1px solid ${border}` }}>
            {[
              <svg key="c" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1" y="5" width="7" height="12" rx="1" stroke={greyLt} strokeWidth="1.3"/><rect x="12" y="1" width="7" height="16" rx="1" stroke={greyLt} strokeWidth="1.3"/></svg>,
              <svg key="h" width="20" height="18" viewBox="0 0 20 18" fill="none"><path d="M10 16.5C10 16.5 1.5 11 1.5 5.5C1.5 3.01 3.51 1 6 1C7.5 1 8.83 1.74 9.67 2.87L10 3.31L10.33 2.87C11.17 1.74 12.5 1 14 1C16.49 1 18.5 3.01 18.5 5.5C18.5 11 10 16.5 10 16.5Z" stroke={pink} strokeWidth="1.3" fill={pink}/></svg>,
              <svg key="s" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="16" cy="4" r="2.2" stroke={greyLt} strokeWidth="1.3"/><circle cx="16" cy="16" r="2.2" stroke={greyLt} strokeWidth="1.3"/><circle cx="4" cy="10" r="2.2" stroke={greyLt} strokeWidth="1.3"/><path d="M6 9l8-4M6 11l8 4" stroke={greyLt} strokeWidth="1.3"/></svg>,
            ].map((icon, i) => (
              <div key={i} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "11px 0", borderRight: i < 2 ? `1px solid ${border}` : "none" }}>
                {icon}
              </div>
            ))}
          </div>

          <div style={{ padding: "12px 14px 24px" }}>

            {/* Brand + name */}
            <div style={{ marginBottom: 4, fontSize: 13, lineHeight: 1.4 }}>
              <span style={{ fontWeight: 800, color: ink }}>{prod.brand} </span>
              <span style={{ color: ink }}>{prod.name}</span>
            </div>

            {/* Price */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, color: greyLt, textDecoration: "line-through" }}>MRP &#8377;{prod.mrp.toLocaleString("en-IN")}</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: ink }}>&#8377;{prod.price.toLocaleString("en-IN")}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: orange }}>({prod.discount}% OFF)</span>
            </div>

            {/* AI Verdict strip */}
            <div onClick={onVerdict} style={{ background: pinkLt, border: `1px solid ${pinkBd}`, borderRadius: 8, padding: "9px 10px", marginBottom: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0 }}><path d="M6 0l.9 3H10L7.4 4.8l.9 2.9L6 6.3 3.7 7.7l.9-2.9L2 3h3.1z" fill={pink}/></svg>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: pink, marginBottom: 2 }}>AI Buyer Verdict — {prod.reviewCount} reviews</div>
                <div style={{ fontSize: 11, color: grey, lineHeight: 1.4, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>{prod.verdict}</div>
              </div>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" style={{ flexShrink: 0 }}><path d="M1 1l4 4-4 4" stroke={pink} strokeWidth="1.4" strokeLinecap="round"/></svg>
            </div>

            {/* Size */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: ink }}>Size: {size || prod.sizes[0]}</span>
                <span style={{ fontSize: 11, color: pink, fontWeight: 500 }}>Size Chart &#8250;</span>
              </div>
              {/* Suggestion */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 10px", border: `1px solid ${border}`, borderRadius: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 11, color: pink, fontWeight: 600 }}>We Suggest Size {prod.sizes[1] || prod.sizes[0]}</span>
                <span style={{ fontSize: 10, color: "#6B4EFF", background: "#F0EEFF", padding: "2px 7px", borderRadius: 10, fontWeight: 500 }}>✦ Why {prod.sizes[1] || prod.sizes[0]} for me?</span>
              </div>
              {/* Size buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {prod.sizes.map(s => (
                  <button key={s} onClick={() => onSetSize(s)} style={{ minWidth: 48, height: 48, padding: s.length > 2 ? "0 12px" : "0", border: `${size === s ? 2 : 1.5}px solid ${size === s ? ink : border}`, borderRadius: 8, background: size === s ? ink : "#fff", color: size === s ? "#fff" : ink, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>{s}</button>
                ))}
              </div>
            </div>

            {/* CTAs — pill shape */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <button style={{ flex: 1, padding: "12px 0", border: `1.5px solid ${pink}`, borderRadius: 26, fontSize: 13, fontWeight: 700, color: pink, background: "#fff", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"><rect x=".5" y="4" width="13" height="10.5" rx="1" stroke={pink} strokeWidth="1.3"/><path d="M4.5 4V3a2.5 2.5 0 015 0v1" stroke={pink} strokeWidth="1.3"/></svg>
                Buy Now
              </button>
              <button onClick={onSize} style={{ flex: 1, padding: "12px 0", background: pink, border: "none", borderRadius: 26, fontSize: 13, fontWeight: 700, color: "#fff", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none"><rect x=".5" y="4" width="13" height="10.5" rx="1" stroke="#fff" strokeWidth="1.3"/><path d="M4.5 4V3a2.5 2.5 0 015 0v1" stroke="#fff" strokeWidth="1.3"/></svg>
                Add to Bag
              </button>
            </div>

            {/* Delivery & Services */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: ink, marginBottom: 10 }}>Delivery &amp; Services</div>

              {/* Address — single line with Change right-aligned */}
              <div style={{ border: `1px solid ${border}`, borderRadius: 8, padding: "9px 12px", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <svg width="10" height="13" viewBox="0 0 10 13" fill="none"><path d="M5 0C2.8 0 1 1.8 1 4c0 3 4 7.5 4 7.5S9 7 9 4C9 1.8 7.2 0 5 0zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={greyLt}/></svg>
                <span style={{ fontSize: 11, color: ink, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Shiwang Tiwari - D-148, Bhagat Singh Colon...</span>
                <span style={{ fontSize: 11, color: greyLt, textDecoration: "underline", textDecorationStyle: "dashed", flexShrink: 0 }}>Change</span>
              </div>

              {/* Standard delivery card */}
              <div style={{ border: `1px solid ${pinkBd}`, borderRadius: 8, padding: "10px 12px", background: pinkLt, marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: pink, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M1 4l2.5 2.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: greyLt, letterSpacing: "0.06em", textTransform: "uppercase" }}>STANDARD</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ink }}>{prod.delivery.replace("Delivery on", "Delivery by")}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: greyLt, textDecoration: "line-through" }}>MRP &#8377;{prod.mrp.toLocaleString("en-IN")}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ink }}>&#8377;{prod.price} <span style={{ color: green }}>({prod.discount}% OFF)</span></div>
                  </div>
                </div>
              </div>

              {/* Seller */}
              <div style={{ fontSize: 11, color: grey, marginBottom: 10 }}>
                Seller: <span style={{ fontWeight: 700, color: ink }}>{prod.seller.split(" ").slice(0, 2).join(" ")} &#8250;</span>
              </div>

              {/* Pay on delivery + returns */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Pay on delivery icon */}
                  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" style={{ flexShrink: 0 }}>
                    <rect x="1" y="1" width="30" height="20" rx="3" stroke={greyLt} strokeWidth="1.2"/>
                    <rect x="1" y="6" width="30" height="4" fill={greyLt} fillOpacity=".3"/>
                    <rect x="4" y="13" width="8" height="2" rx="1" fill={greyLt}/>
                    <circle cx="26" cy="16" r="4" fill="#fff" stroke={green} strokeWidth="1.2"/>
                    <path d="M24 16l1.3 1.3L28 14" stroke={green} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: ink }}>Pay on Delivery is available</div>
                    <div style={{ fontSize: 10, color: greyLt }}>&#8377;10 additional fee applicable</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Returns icon */}
                  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M6 11C6 7.13 9.13 4 13 4h6" stroke={greyLt} strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M22 1l4 3-4 3" stroke={greyLt} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26 11C26 14.87 22.87 18 19 18h-6" stroke={greyLt} strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M10 15l-4 3 4 3" stroke={greyLt} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="26" cy="16" r="4" fill="#fff" stroke={green} strokeWidth="1.2"/>
                    <path d="M24 16l1.3 1.3L28 14" stroke={green} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div style={{ fontSize: 11, fontWeight: 600, color: ink }}>Hassle free 7 days Return &amp; Exchange</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: border, margin: "4px 0 16px" }}/>

            {/* Product specs — no border card, just plain like real Myntra */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 16px", marginBottom: 14 }}>
                {[["Weave Pattern","Regular"],["Transparency","Opaque"],["Fit","Regular Fit"],["Sustainable","Regular"],["Brand Fit Name","Standard"],["Fabrics","Cotton"]].map(([l,v]) => (
                  <div key={l}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ink, marginBottom: 1 }}>{l}</div>
                    <div style={{ fontSize: 11, color: grey }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: border, marginBottom: 12 }}/>
              {[
                ["Product Details", `${prod.name}, has a Spread Collar, Long Regular Sleeves.`],
                ["Size & Fit", `Brand Fit: Standard\nFit: Regular Fit\nThe model (height 6') is wearing a size ${prod.sizes[0]}`],
                ["Material & Care", "Cotton, Linen blend"],
              ].map(([label, value]) => (
                <div key={label} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: ink, marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 11, color: grey, lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: border, margin: "0 0 16px" }}/>

            {/* Genuine + Quality badges */}
            <div style={{ display: "flex", justifyContent: "center", gap: 48, marginBottom: 16 }}>
              {/* Genuine Product */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #4CAF50", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <svg width="48" height="48" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="22" fill="#fff" stroke="#4CAF50" strokeWidth="2"/>
                    <path d="M12 20c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="none" stroke="#E53935" strokeWidth="2"/>
                    <path d="M12 20v8c0 6.6 5.4 12 12 12s12-5.4 12-12v-8" fill="none" stroke="#E53935" strokeWidth="2"/>
                    <rect x="18" y="22" width="12" height="3" rx="1" fill="#E53935"/>
                    <rect x="18" y="27" width="12" height="3" rx="1" fill="#E53935"/>
                    <text x="24" y="20" textAnchor="middle" fontSize="5" fontWeight="800" fill="#E53935">ORIGINAL</text>
                  </svg>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: pink, textAlign: "center", lineHeight: 1.3 }}>Genuine<br/>Product</div>
              </div>
              {/* Quality Checked */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #4CAF50", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="12" stroke="#4CAF50" strokeWidth="1.5"/>
                    <path d="M8 14l4 4 8-8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: pink, textAlign: "center", lineHeight: 1.3 }}>Quality<br/>Checked</div>
              </div>
            </div>

            {/* Returns */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ink, marginBottom: 3 }}>Easy 7 days returns and exchanges</div>
              <div style={{ fontSize: 11, color: grey, lineHeight: 1.5 }}>Choose to return or exchange for a different size (if available) within 7 days.</div>
            </div>

            {/* Ratings & Reviews */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: ink, marginBottom: 12 }}>Ratings &amp; Reviews</div>

              {/* Rating row — left-aligned, ~60% width */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ background: green, borderRadius: 6, padding: "5px 10px", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>{prod.rating}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1l1.1 2.6H10L7.6 5.5l.9 2.8L6 6.8l-2.5 1.5.9-2.8L2 3.6h2.9z" fill="#fff"/></svg>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, border: `1px solid ${border}`, borderRadius: 6, padding: "5px 10px" }}>
                  <span style={{ fontSize: 11, color: grey }}>{prod.reviews * 5 + 99} ratings</span>
                  <span style={{ fontSize: 11, color: border }}>|</span>
                  <span style={{ fontSize: 11, color: grey }}>{prod.reviews} reviews</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1l4 4-4 4" stroke={greyLt} strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
              </div>

              {/* Photo strip */}
              <div style={{ display: "flex", gap: 6, marginBottom: 14, overflowX: "auto", scrollbarWidth: "none" }}>
                {[prod.reviewImg, prod.cardImg, prod.imgs[1] || prod.cardImg].map((img, i) => (
                  <div key={i} style={{ width: 80, height: 80, borderRadius: 6, overflow: "hidden", flexShrink: 0, position: "relative", background: "#f0f0f0" }}>
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                    {i === 0 && (
                      <div style={{ position: "absolute", bottom: 3, left: 3, background: "rgba(0,0,0,.55)", borderRadius: 3, padding: "1px 4px", display: "flex", alignItems: "center", gap: 2 }}>
                        <svg width="7" height="7" viewBox="0 0 7 7"><polygon points="2,1 2,6 6,3.5" fill="#fff"/></svg>
                        <span style={{ fontSize: 8, color: "#fff", fontWeight: 600 }}>0:42</span>
                      </div>
                    )}
                    {i === 2 && (
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.52)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>+{prod.reviews - 3}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Customer Reviews header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: ink }}>Customer Reviews ({prod.reviews})</span>
                <span style={{ fontSize: 11, color: ink, textDecoration: "underline" }}>View All</span>
              </div>

              {/* Review cards — horizontal scroll, each ~75% width so next card peeks */}
              <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 4 }}>
                {[
                  { stars: 5, date: "Jun 04, 2026", size: prod.sizes[1] || prod.sizes[0], text: prod.reviewText, name: prod.reviewCaption.split("·")[0].trim() },
                  { stars: 5, date: "Jun 15, 2026", size: prod.sizes[0], text: `This ${prod.brand} ${prod.name} is a solid pick if you're looking for that effortless, breezy style. read more`, name: "Pavan" },
                  { stars: 5, date: "Jun 10, 2026", size: prod.sizes[prod.sizes.length - 1], text: `The ${prod.colour} ${prod.name} has a stylish and elegant design. The fabric quality exceeded expectations. read more`, name: "Mohd Arshad Siddiqui" },
                ].map((r, i) => (
                  <div key={i} style={{ minWidth: "75%", maxWidth: "75%", border: `1px solid ${border}`, borderRadius: 10, padding: "10px 12px", flexShrink: 0, background: "#fff" }}>
                    {/* Stars + date + size */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                      <div style={{ background: green, borderRadius: 10, padding: "2px 7px", display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "#fff" }}>{r.stars}</span>
                        <svg width="9" height="9" viewBox="0 0 9 9"><path d="M4.5 1l.8 1.9H7.8L5.5 4.6l.8 2.2L4.5 5.6 2.7 6.8l.8-2.2L1.2 2.9h2.5z" fill="#fff"/></svg>
                      </div>
                      <span style={{ fontSize: 10, color: grey, flex: 1 }}>{r.date}</span>
                      <div style={{ border: `1px solid ${border}`, borderRadius: 6, padding: "2px 7px", fontSize: 10, color: grey, flexShrink: 0 }}>Size: {r.size}</div>
                    </div>
                    {/* Review text — 3 lines max */}
                    <div style={{ fontSize: 11, color: ink, lineHeight: 1.55, marginBottom: 8, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const }}>
                      {r.text}
                    </div>
                    {/* Name */}
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke={green} strokeWidth="1.1"/><path d="M3.5 6l1.8 1.8 3.2-3.6" stroke={green} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontSize: 10, color: grey }}>{r.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </PhoneShell>
  );
}