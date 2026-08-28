"use client";
import { Product } from "../../data/products";
import PhoneShell from "../PhoneShell";
import StatusBar from "../StatusBar";
import { pink, green, ink, grey, greyLt, border } from "../../constants/colors";

type Props = {
  prod: Product;
  size: string;
  bag: number;
  onWishlist: () => void;
};

function BNav({ bag }: { bag: number }) {
  return (
    <div style={{ borderTop: `1px solid ${border}`, background: "#fff", display: "flex", paddingBottom: 18, paddingTop: 2, flexShrink: 0 }}>
      {[{ id: "home", label: "Home" }, { id: "fwd", label: "Under ₹999" }, { id: "now", label: "From 30 min" }, { id: "luxe", label: "Luxe" }, { id: "bag", label: "Bag" }].map(item => (
        <div key={item.id} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 2px 0", borderTop: item.id === "bag" ? `2px solid ${pink}` : "2px solid transparent", marginTop: -2 }}>
          <div style={{ height: 22, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {item.id === "home"
              ? <img src="/myntra-m.png" alt="M" style={{ width: 24, height: 24, objectFit: "contain" }} />
              : item.id === "bag"
                ? (<>
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><rect x="1" y="6" width="18" height="15" rx="1.5" stroke={pink} strokeWidth="1.5" /><path d="M6.5 6V5a3.5 3.5 0 017 0v1" stroke={pink} strokeWidth="1.5" /></svg>
                  {bag > 0 && <span style={{ position: "absolute", top: -4, right: -7, background: pink, color: "#fff", borderRadius: "50%", width: 15, height: 15, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{bag}</span>}
                </>)
                : <span style={{ fontSize: item.id === "fwd" ? 10 : 9, fontWeight: 800, fontStyle: item.id === "now" ? "italic" : "normal", color: greyLt }}>{item.id === "fwd" ? "fwd" : item.id === "now" ? "mnow" : "LUXE"}</span>
            }
          </div>
          <span style={{ fontSize: 9, marginTop: 2, color: item.id === "bag" ? pink : greyLt, fontWeight: item.id === "bag" ? 700 : 400 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function SuccessScreen({ prod, size, bag, onWishlist }: Props) {
  return (
    <PhoneShell screen="success">
      <StatusBar />

      {/* Green success bar */}
      <div style={{ background: green, padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none"><rect x=".5" y="5" width="16" height="12.5" rx="1.5" stroke="#fff" strokeWidth="1.5" /><path d="M5 5V4a3.5 3.5 0 017 0v1" stroke="#fff" strokeWidth="1.5" /></svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>Successfully moved item to bag</span>
      </div>

      <div style={{ flex: 1, padding: "16px 16px 0", overflowY: "auto" }}>
        {/* Product card */}
        <div style={{ border: `1px solid ${border}`, borderRadius: 8, padding: 14, display: "flex", gap: 12, marginBottom: 16 }}>
          <img src={prod.cardImg} alt="" style={{ width: 64, height: 80, objectFit: "cover", borderRadius: 4 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: ink }}>{prod.brand}</div>
            <div style={{ fontSize: 11, color: grey, marginBottom: 8, lineHeight: 1.4 }}>{prod.name}</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
              <div style={{ padding: "3px 10px", border: `1px solid ${border}`, borderRadius: 4, fontSize: 11 }}>Size: <strong>{size}</strong> &#9660;</div>
              <div style={{ padding: "3px 10px", border: `1px solid ${border}`, borderRadius: 4, fontSize: 11 }}>Qty: <strong>1</strong> &#9660;</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: ink }}>&#8377;{prod.price.toLocaleString("en-IN")}</div>
            <div style={{ fontSize: 10, color: grey, marginTop: 3 }}>14 days return &nbsp;|&nbsp; {prod.delivery}</div>
          </div>
        </div>

        {/* CTAs */}
        <button style={{ width: "100%", padding: "14px 0", background: pink, color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 10, fontFamily: "inherit" }}>
          Go to Bag ({bag} item{bag !== 1 ? "s" : ""}) &#8250;
        </button>
        <button onClick={onWishlist} style={{ width: "100%", padding: "13px 0", background: "#fff", color: ink, border: `1.5px solid ${border}`, borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
          Continue Shopping from Wishlist
        </button>
      </div>

      <BNav bag={bag} />
    </PhoneShell>
  );
}