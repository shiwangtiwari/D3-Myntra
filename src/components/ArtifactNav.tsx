"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PINK = "#FF3F6C";
const CHARCOAL = "#282C3F";
const GREY_TEXT = "#535766";
const LIGHT_GREY = "#F4F4F5";
const WHITE = "#FFFFFF";
const FONT = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

const NAV_LINKS = [
  { href: "/rice", label: "RICE Score" },
  { href: "/guesstimate", label: "Guesstimate" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/promo2", label: "Promo" },
];

export default function ArtifactNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: WHITE,
        borderBottom: `1px solid ${LIGHT_GREY}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          gap: 0,
          height: 56,
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            marginRight: 32,
            flexShrink: 0,
          }}
        >
          {/* Myntra M logo */}
          <img
            src="/myntra-logo.png"
            alt="Myntra"
            style={{ height: 28, width: "auto", display: "block" }}
          />
          {/* Divider */}
          <span
            style={{
              width: 1,
              height: 20,
              background: LIGHT_GREY,
              display: "block",
              flexShrink: 0,
            }}
          />
          {/* Wordmark */}
          <span
            style={{
              fontFamily: FONT,
              fontSize: 13,
              fontWeight: 600,
              color: CHARCOAL,
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}
          >
            Wishlist Confidence Engine
          </span>
        </Link>

        {/* Nav links — scroll horizontally on small screens */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            flex: 1,
            height: "100%",
          }}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: FONT,
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? CHARCOAL : GREY_TEXT,
                  textDecoration: "none",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: active
                    ? `2.5px solid ${PINK}`
                    : "2.5px solid transparent",
                  transition: "color 0.15s, border-color 0.15s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        nav div::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  );
}
