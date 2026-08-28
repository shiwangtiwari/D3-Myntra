"use client";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import { pink, ink, grey, greyLt, border } from "../../constants/colors";

type Props = {
  prod: Product;
  size: string;
  onSetSize: (s: string) => void;
  onBack: () => void;
  onAddToBag: () => void;
};

export default function SizeScreen({ prod, size, onSetSize, onBack, onAddToBag }: Props) {
  return (
    <PhoneShell screen="size">
      <div style={{ flex: 1, position: "relative" }}>
        <img src={prod.imgs[0]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "18px 18px 0 0", padding: "0 16px 28px", boxShadow: "0 -6px 24px rgba(0,0,0,.18)", zIndex: 10 }}>

          {/* Drag handle */}
          <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 4px" }}>
            <div style={{ width: 34, height: 4, borderRadius: 2, background: "#D4D5D9" }} />
          </div>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: ink }}>
              Sizes{prod.sizes.length > 1 ? ` : ${prod.sizes.length}` : ""}
            </div>
            <span style={{ fontSize: 13, color: pink, fontWeight: 500 }}>Size Chart &#8250;</span>
          </div>

          {/* Size buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
            {prod.sizes.map(s => (
              <button key={s} onClick={() => onSetSize(s)} style={{ width: s.length > 2 ? "auto" : 56, height: 56, padding: s.length > 2 ? "0 16px" : "0", border: `${size === s ? 2 : 1.5}px solid ${size === s ? ink : border}`, borderRadius: 8, background: size === s ? ink : "#fff", color: size === s ? "#fff" : ink, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all .12s" }}>
                {s}
              </button>
            ))}
          </div>

          {/* Price + seller */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: ink }}>&#8377;{prod.price.toLocaleString("en-IN")}</div>
            <div style={{ fontSize: 11, color: grey, marginTop: 2 }}>
              Seller: <span style={{ color: pink, fontWeight: 600 }}>{prod.seller}</span>
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={onBack} style={{ flex: 1, padding: "13px 0", border: `1.5px solid ${border}`, borderRadius: 6, fontSize: 14, fontWeight: 600, color: ink, background: "#fff", cursor: "pointer", fontFamily: "inherit" }}>
              Buy Now
            </button>
            <button onClick={onAddToBag} disabled={!size} style={{ flex: 1, padding: "13px 0", background: size ? pink : "#D4D5D9", color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: size ? "pointer" : "default", fontFamily: "inherit", transition: "background .12s" }}>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
