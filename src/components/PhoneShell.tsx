"use client";
import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  screen: string;
};

export default function PhoneShell({ children, screen: _screen }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 540);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On a real phone: full-screen native feel, no shell
  if (isMobile) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100svh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background: "#fff",
        }}
      >
        {children}
      </div>
    );
  }

  // Desktop: clean iPhone shell — no label, no instructions, no dark background
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F2F2F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        style={{
          width: 393,
          height: 852,
          background: "#000",
          borderRadius: 54,
          padding: 11,
          boxShadow:
            "0 0 0 2px #3a3a3a, 0 0 0 3.5px #111, 0 40px 100px rgba(0,0,0,.35), 0 0 60px rgba(255,63,108,.08)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 118,
            height: 32,
            background: "#000",
            borderRadius: 20,
            zIndex: 300,
          }}
        />
        {/* Side buttons */}
        <div style={{ position: "absolute", right: -3, top: 140, width: 3, height: 60, background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
        <div style={{ position: "absolute", left: -3, top: 120, width: 3, height: 30, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 162, width: 3, height: 54, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -3, top: 224, width: 3, height: 54, background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />

        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 44,
            overflow: "hidden",
            background: "#fff",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
