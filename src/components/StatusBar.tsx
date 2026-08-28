// Shared status bar — identical across all screens
export default function StatusBar({ bg = "#fff" }: { bg?: string }) {
  return (
    <div style={{
      height: 50, flexShrink: 0, background: bg,
      display: "flex", alignItems: "flex-end",
      justifyContent: "space-between",
      padding: "0 24px 8px", zIndex: 10,
    }}>
      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", color: "#000" }}>13:31</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#000" }}>
        <svg width="16" height="11" viewBox="0 0 16 11">
          <rect x="0" y="3" width="2.5" height="8" rx=".5" fill="currentColor"/>
          <rect x="4" y="2" width="2.5" height="9" rx=".5" fill="currentColor"/>
          <rect x="8" y="0" width="2.5" height="11" rx=".5" fill="currentColor"/>
          <rect x="12" y="0" width="2.5" height="11" rx=".5" fill="currentColor" fillOpacity=".35"/>
        </svg>
        <span style={{ fontSize: 11, fontWeight: 700 }}>5G</span>
        <span style={{ fontSize: 11, fontWeight: 700, background: "#000", color: "#fff", padding: "1px 4px", borderRadius: 3 }}>94</span>
      </div>
    </div>
  );
}