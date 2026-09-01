"use client";
import ArtifactNav from "@/components/ArtifactNav";

// ── Design tokens ─────────────────────────────────────────────────────────────
const PINK     = "#FF3F6C";
const CHARCOAL = "#282C3F";
const GREEN    = "#03A685";
const PURPLE   = "#7C3AED";
const BLUE     = "#1565C0";
const GREY_TEXT = "#535766";
const LIGHT_GREY = "#F4F4F5";
const WHITE    = "#FFFFFF";
const FONT     = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

// ── Color-coded dot indicator ────────────────────────────────────────────────
function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
        marginTop: 1,
      }}
    />
  );
}

// ── Legend item ───────────────────────────────────────────────────────────────
function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <Dot color={color} />
      <span style={{ fontFamily: FONT, fontSize: 12, color: GREY_TEXT }}>
        {label}
      </span>
    </div>
  );
}

// ── Section heading ──────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: FONT,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.07em",
        textTransform: "uppercase" as const,
        color: GREY_TEXT,
        marginBottom: 10,
      }}
    >
      {text}
    </p>
  );
}

// ── Input data row (green / purple / blue inputs) ────────────────────────────
function DataRow({
  label,
  value,
  source,
  valueColor,
  last = false,
}: {
  label: string;
  value: string;
  source: string;
  valueColor: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 12,
        padding: "12px 16px",
        borderBottom: last ? "none" : `1px solid ${LIGHT_GREY}`,
        alignItems: "start",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 13,
            color: CHARCOAL,
            lineHeight: 1.5,
            marginBottom: 3,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 11,
            color: GREY_TEXT,
            lineHeight: 1.5,
          }}
        >
          {source}
        </div>
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 700,
          color: valueColor,
          textAlign: "right" as const,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap" as const,
          paddingTop: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ── Math chain row ────────────────────────────────────────────────────────────
function ChainRow({
  op,
  label,
  value,
  note,
  valueColor = CHARCOAL,
  isFact = false,
  last = false,
}: {
  op: string;
  label: string;
  value: string;
  note?: string;
  valueColor?: string;
  isFact?: boolean;
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "11px 16px",
        borderBottom: last ? "none" : `1px solid ${LIGHT_GREY}`,
        background: isFact ? "#F8FDF9" : WHITE,
      }}
    >
      <span
        style={{
          fontFamily: FONT,
          fontSize: 14,
          color: GREY_TEXT,
          width: 16,
          flexShrink: 0,
          textAlign: "center" as const,
          paddingTop: 1,
        }}
      >
        {op}
      </span>
      <span
        style={{
          fontFamily: FONT,
          fontSize: 13,
          color: CHARCOAL,
          flex: 1,
          lineHeight: 1.5,
        }}
      >
        {label}
        {note && (
          <span
            style={{
              display: "block",
              fontSize: 11,
              color: GREY_TEXT,
              marginTop: 2,
            }}
          >
            {note}
          </span>
        )}
      </span>
      <span
        style={{
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 700,
          color: valueColor,
          textAlign: "right" as const,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap" as const,
          flexShrink: 0,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Output card ───────────────────────────────────────────────────────────────
function OutputCard({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        background: accent ? PINK : WHITE,
        border: `1px solid ${accent ? PINK : LIGHT_GREY}`,
        borderRadius: 12,
        padding: "16px 18px",
        flex: 1,
        minWidth: 0,
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontSize: 11,
          color: accent ? "rgba(255,255,255,0.8)" : GREY_TEXT,
          marginBottom: 6,
          fontWeight: 500,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 24,
          fontWeight: 700,
          color: accent ? WHITE : CHARCOAL,
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1.2,
          marginBottom: 6,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 11,
          color: accent ? "rgba(255,255,255,0.7)" : GREY_TEXT,
        }}
      >
        {sub}
      </p>
    </div>
  );
}

// ── Card shell ────────────────────────────────────────────────────────────────
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: WHITE,
        border: `1px solid ${LIGHT_GREY}`,
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}

export default function Guesstimate() {
  return (
    <div
      style={{
        background: "#F9F9FB",
        minHeight: "100vh",
        fontFamily: FONT,
      }}
    >
      <ArtifactNav />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "2rem 20px 5rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h1
            style={{
              fontFamily: FONT,
              fontSize: 22,
              fontWeight: 700,
              color: CHARCOAL,
              lineHeight: 1.3,
              marginBottom: 8,
            }}
          >
            Guesstimate: value of converting wishlist intent into purchase
          </h1>
          <p
            style={{
              fontFamily: FONT,
              fontSize: 14,
              color: GREY_TEXT,
              lineHeight: 1.6,
            }}
          >
            How much incremental GMV could the Wishlist Confidence Engine unlock at scale?
          </p>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            background: LIGHT_GREY,
            border: `1px solid #E5E5E5`,
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: "1.5rem",
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>ℹ️</span>
          <span
            style={{
              fontFamily: FONT,
              fontSize: 12,
              color: GREY_TEXT,
              lineHeight: 1.6,
            }}
          >
            This is a guesstimate, not a forecast. Every input is color-coded by source type. All calculated figures flow directly from those inputs with no adjustments.
          </span>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap" as const,
            gap: 16,
            marginBottom: "1.75rem",
          }}
        >
          <LegendItem color={GREEN}  label="Real public figure, cited source" />
          <LegendItem color={PURPLE} label="Derived from survey (N=70) or D2 pipeline" />
          <LegendItem color={BLUE}   label="Assumption, no real data yet" />
          <LegendItem color={GREY_TEXT} label="Calculated from inputs above" />
        </div>

        {/* Section 1 — Real public inputs */}
        <SectionLabel text="Real public inputs" />
        <Card>
          <DataRow
            label="Myntra monthly active users"
            value="5,00,00,000"
            source="Myntra public investor communications, 2024-25"
            valueColor={GREEN}
            last
          />
        </Card>

        {/* Section 2 — Survey and pipeline derived */}
        <SectionLabel text="Survey and pipeline derived" />
        <Card>
          <DataRow
            label="% of MAU with 1+ wishlisted items"
            value="60%"
            source="Proxy from survey: 87% of N=70 respondents had active wishlists; conservative population estimate"
            valueColor={PURPLE}
          />
          <DataRow
            label="% of wishlist users who have not purchased in 30 days"
            value="70%"
            source="Directional: majority of wishlist users are non-converters by definition of the problem statement"
            valueColor={PURPLE}
          />
          <DataRow
            label="Strip tap rate"
            value="8%"
            source="Pilot target from deck metrics — 1 in 12 users who see the strip tap it. This is the guardrail threshold."
            valueColor={PURPLE}
            last
          />
        </Card>

        {/* Section 3 — Assumptions */}
        <SectionLabel text="Assumptions" />
        <Card>
          <DataRow
            label="Confidence Engine conversion rate (tap to purchase)"
            value="15%"
            source="Industry benchmark for AI-assisted e-commerce product pages: 10–20% range. Conservative midpoint."
            valueColor={BLUE}
          />
          <DataRow
            label="Average order value for a converted wishlisted item"
            value="Rs 800"
            source="Conservative estimate. Myntra fashion AOV publicly cited at Rs 1,000–1,200. Discounted for first-purchase effect."
            valueColor={BLUE}
            last
          />
        </Card>

        {/* Math chain */}
        <SectionLabel text="Math chain" />
        <Card>
          <ChainRow op=""  label="Total MAU"                                              value="5,00,00,000"  valueColor={GREEN}     />
          <ChainRow op="×" label="With wishlists (60%)"                                  value="3,00,00,000"  valueColor={CHARCOAL}  />
          <ChainRow op="×" label="Non-purchasers in 30 days (70%)"                       value="2,10,00,000"  note="Target segment"                               valueColor={CHARCOAL}  />
          <ChainRow
            op=""
            label="Strip visibility"
            value="100%"
            note="Always-on home screen — no opt-in required"
            isFact
            valueColor={GREEN}
          />
          <ChainRow op="×" label="Strip tap rate (8%)"                                   value="16,80,000"    note="Users who tap per month"                      valueColor={PURPLE}    />
          <ChainRow op="×" label="Confidence Engine conversion (15%)"                    value="2,52,000"     note="Purchases per month"                          valueColor={CHARCOAL}  />
          <ChainRow op="×" label="Average order value"                                   value="Rs 800"       valueColor={BLUE}      />
          <ChainRow
            op="="
            label="Monthly incremental GMV"
            value="Rs 20.16 Cr"
            valueColor={CHARCOAL}
            last
          />
        </Card>

        {/* Output cards */}
        <div
          style={{
            background: LIGHT_GREY,
            border: `1px solid #E5E5E5`,
            borderRadius: 12,
            padding: "1.25rem 1.5rem",
            marginBottom: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: FONT,
              fontSize: 12,
              fontWeight: 600,
              color: GREY_TEXT,
              marginBottom: "1rem",
              textTransform: "uppercase" as const,
              letterSpacing: "0.06em",
            }}
          >
            Output: incremental GMV from Wishlist Confidence Engine
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
            <OutputCard
              label="Monthly incremental GMV"
              value="Rs 20.16 Cr"
              sub="2,52,000 orders × Rs 800"
              accent
            />
            <OutputCard
              label="Annualised"
              value="Rs 241.9 Cr"
              sub="Monthly × 12"
            />
          </div>
        </div>

        {/* Conservative scenario note */}
        <p
          style={{
            fontFamily: FONT,
            fontSize: 12,
            color: GREY_TEXT,
            lineHeight: 1.7,
            marginBottom: "1.75rem",
            padding: "12px 16px",
            background: WHITE,
            border: `1px solid ${LIGHT_GREY}`,
            borderRadius: 10,
          }}
        >
          Conservative scenario at 5% tap rate and 10% conversion: Rs 8.40 Cr/month, Rs 100.8 Cr annualised. The range Rs 8–20 Cr/month reflects uncertainty in conversion rate only. The 8% tap rate is fixed — it is the guardrail threshold from the pilot.
        </p>

        {/* Footer */}
        <p
          style={{
            fontFamily: FONT,
            fontSize: 11,
            color: GREY_TEXT,
            lineHeight: 1.8,
          }}
        >
          Sources: Myntra public investor communications (2024-25) · Survey N=70, NextLeap graduation project · D2 pipeline: 1,458 signals, 355 relevant · Industry benchmark: AI-assisted e-commerce conversion rates
        </p>
      </div>
    </div>
  );
}
