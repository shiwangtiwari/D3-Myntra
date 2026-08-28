"use client";
import { pink, greyLt } from "../constants/colors";

type Props = {
  bag: number;
  onHome: () => void;
  active?: "home" | "fwd" | "now" | "luxe" | "bag";
};

// Shared bottom nav — used by HomeScreen and WishlistScreen.
// Extracted so both screens stay pixel-identical instead of drifting.
export default function BottomNav({ bag, onHome, active = "home" }: Props) {
  return (
    <div style={{ borderTop: `1px solid #EAEAEC`, background: "#fff", display: "flex", paddingBottom: 18, paddingTop: 2, flexShrink: 0 }}>
      {[{ id: "home", label: "Home" }, { id: "fwd", label: "Under ₹999" }, { id: "now", label: "From 30 min" }, { id: "luxe", label: "Luxe" }, { id: "bag", label: "Bag" }].map(item => {
        const isActive = item.id === active;
        return (
          <div key={item.id} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "6px 2px 0", borderTop: isActive ? `2px solid ${pink}` : "2px solid transparent", marginTop: -2, cursor: "pointer" }} onClick={() => item.id === "home" && onHome()}>
            <div style={{ height: 22, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              {item.id === "home"
                ? <img src="/myntra-m.png" alt="M" style={{ width: 24, height: 24, objectFit: "contain" }} />
                : item.id === "bag"
                  ? (<>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><rect x="1" y="6" width="18" height="15" rx="1.5" stroke={greyLt} strokeWidth="1.5" /><path d="M6.5 6V5a3.5 3.5 0 017 0v1" stroke={greyLt} strokeWidth="1.5" /></svg>
                    {bag > 0 && <span style={{ position: "absolute", top: -4, right: -7, background: pink, color: "#fff", borderRadius: "50%", width: 15, height: 15, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{bag}</span>}
                  </>)
                  : <span style={{ fontSize: item.id === "fwd" ? 10 : 9, fontWeight: 800, fontStyle: item.id === "now" ? "italic" : "normal", color: greyLt }}>{item.id === "fwd" ? "fwd" : item.id === "now" ? "mnow" : "LUXE"}</span>
              }
            </div>
            <span style={{ fontSize: 9, marginTop: 2, color: isActive ? pink : greyLt, fontWeight: isActive ? 700 : 400 }}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
