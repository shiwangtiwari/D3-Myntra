"use client";
import PhoneShell from "../PhoneShell";

export default function SplashScreen() {
  return (
    <PhoneShell screen="splash">
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
        <img src="/myntra-logo.png" alt="Myntra" style={{ width: 130, objectFit: "contain" }} />
      </div>
    </PhoneShell>
  );
}
