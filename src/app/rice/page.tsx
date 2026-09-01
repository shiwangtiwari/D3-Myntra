"use client";
import { useState } from "react";
import ArtifactNav from "@/components/ArtifactNav";

// ── Design tokens ─────────────────────────────────────────────────────────────
const PINK       = "#FF3F6C";
const CHARCOAL   = "#282C3F";
const GREEN      = "#03A685";
const GREY_TEXT  = "#535766";
const LIGHT_GREY = "#F4F4F5";
const WHITE      = "#FFFFFF";
const FONT       = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

// ── Types ─────────────────────────────────────────────────────────────────────
type Dimension = {
  key: "reach" | "impact" | "confidence" | "effort";
  score: number;
  description: string;
};

type Solution = {
  id: string;
  title: string;
  score: number;
  isWinner: boolean;
  badge?: string;
  dimensions: Dimension[];
  rationale: string;
};

// ── Dimension metadata ────────────────────────────────────────────────────────
const DIM_LABELS: Record<string, string> = {
  reach:      "Reach",
  impact:     "Impact",
  confidence: "Confidence",
  effort:     "Effort (lower = simpler)",
};

// Effort is inverted: lower score = simpler = better
const INVERTED = new Set(["effort"]);

// ── Solutions data ────────────────────────────────────────────────────────────
const SOLUTIONS: Solution[] = [
  {
    id: "signal-engine",
    title: "Signal + Confidence Engine",
    score: 121.5,
    isWinner: true,
    dimensions: [
      {
        key: "reach",
        score: 9,
        description:
          "Home screen strip fires on every app open. Highest-reach placement after the search bar. Serves Sub-segment A (wishlist openers) and Sub-segment B (28.3% who save and never return). No opt-in required.",
      },
      {
        key: "impact",
        score: 9,
        description:
          "Directly intercepts the leave-to-YouTube workaround. Delivers what 51.7% of N=70 named as their #1 need. Only solution that serves both sub-segments simultaneously.",
      },
      {
        key: "confidence",
        score: 9,
        description:
          "Direct evidence chain: 65% leave to find answers elsewhere (Q5, N=70). Strip delivers those answers before they leave. Workaround validated and route-specific.",
      },
      {
        key: "effort",
        score: 6,
        description:
          "Requires home screen strip integration (new surface), ranking algorithm (new), and Confidence Engine (built). Most complex of the three.",
      },
    ],
    rationale:
      "Wins because it intercepts every user who opens the app — not just the ones who remember to visit their wishlist. The home screen strip serves the 28.3% who save and forget, a segment that every alternative misses entirely.",
  },
  {
    id: "occasion-planner",
    title: "Wishlist Occasion Planner",
    score: 78.4,
    isWinner: false,
    badge: "WINS on Effort · Close on Confidence",
    dimensions: [
      {
        key: "reach",
        score: 7,
        description:
          "Requires wishlist visit and occasion tag at save time. Does not reach Sub-segment B. Misses 28.3% of the target segment.",
      },
      {
        key: "impact",
        score: 7,
        description:
          "Directly attacks the #1 stated barrier — 31.7% named timing/occasion. Creates urgency but does not resolve the confidence gap. A user who knows their occasion is 18 days away still will not buy if unsure about fit.",
      },
      {
        key: "confidence",
        score: 8,
        description:
          "Survey evidence is unambiguous: timing is the top barrier. High confidence this addresses a real problem. One point below winner because it addresses only one sub-segment.",
      },
      {
        key: "effort",
        score: 5,
        description:
          "No AI synthesis. No home screen integration. One-tap tag at save time, calendar logic, wishlist card countdown. Significantly simpler to ship.",
      },
    ],
    rationale:
      "If you believe timing is the core problem, this solution wins — 31.7% of N=70 named it their #1 barrier. It loses only because urgency without confidence resolution produces abandonment, not purchase. The evidence: 28.3% did nothing on their return visit despite having saved the item deliberately. They knew what they saved. They still did not buy. Timing was not the missing ingredient — confidence was.",
  },
  {
    id: "social-layer",
    title: "Wishlist Social Layer",
    score: 52.5,
    isWinner: false,
    badge: "WINS on Effort",
    dimensions: [
      {
        key: "reach",
        score: 5,
        description:
          "Requires a third party outside Myntra to respond. Lowest-reach of the three by design.",
      },
      {
        key: "impact",
        score: 7,
        description:
          "Converts the social workaround — 11.7% ask friends before buying. Has viral acquisition potential.",
      },
      {
        key: "confidence",
        score: 6,
        description:
          "No direct survey evidence users want to share items inside the app. The workaround today is informal WhatsApp, not structured in-app sharing.",
      },
      {
        key: "effort",
        score: 4,
        description:
          "Simplest build: share link, recipient vote UI, wishlist card response. Fewest moving parts.",
      },
    ],
    rationale:
      "Converts a real observed workaround into a product feature. Loses on Reach because third-party engagement cannot be controlled, and on Confidence because the survey does not directly support in-app sharing as a desired behavior.",
  },
];

// ── Score bar ─────────────────────────────────────────────────────────────────
function ScoreBar({ score, max = 9, color }: { score: number; max?: number; color: string }) {
  return (
    <div
      style={{
        height: 4,
        background: LIGHT_GREY,
        borderRadius: 2,
        overflow: "hidden",
        flex: 1,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${(score / max) * 100}%`,
          background: color,
          borderRadius: 2,
        }}
      />
    </div>
  );
}

// ── Dimension row inside a solution card ──────────────────────────────────────
function DimensionRow({
  dim,
  winnerScore,
  isWinner,
}: {
  dim: Dimension;
  winnerScore: number;
  isWinner: boolean;
}) {
  // For effort: lower is better, so the runner-up wins when score < winner score
  const inverted = INVERTED.has(dim.key);
  const winsVsWinner = inverted
    ? dim.score < winnerScore
    : dim.score > winnerScore;
  const tiesWinner = dim.score === winnerScore;

  // Indicator
  let indicator: React.ReactNode;
  if (isWinner) {
    indicator = (
      <span
        style={{
          fontFamily: FONT,
          fontSize: 10,
          fontWeight: 700,
          color: WHITE,
          background: PINK,
          borderRadius: 4,
          padding: "1px 6px",
          whiteSpace: "nowrap" as const,
        }}
      >
        WINNER
      </span>
    );
  } else if (winsVsWinner) {
    indicator = (
      <span
        style={{
          fontFamily: FONT,
          fontSize: 10,
          fontWeight: 700,
          color: GREEN,
          background: "#E6F7F3",
          borderRadius: 4,
          padding: "1px 6px",
          whiteSpace: "nowrap" as const,
        }}
      >
        WINS THIS
      </span>
    );
  } else if (tiesWinner) {
    indicator = (
      <span
        style={{
          fontFamily: FONT,
          fontSize: 10,
          fontWeight: 600,
          color: GREY_TEXT,
          background: LIGHT_GREY,
          borderRadius: 4,
          padding: "1px 6px",
          whiteSpace: "nowrap" as const,
        }}
      >
        TIES
      </span>
    );
  } else {
    indicator = (
      <span
        style={{
          fontFamily: FONT,
          fontSize: 10,
          fontWeight: 500,
          color: GREY_TEXT,
          background: LIGHT_GREY,
          borderRadius: 4,
          padding: "1px 6px",
          whiteSpace: "nowrap" as const,
        }}
      >
        {isWinner ? "" : `vs. ${winnerScore}`}
      </span>
    );
  }

  const barColor = isWinner ? PINK : winsVsWinner ? GREEN : "#C8CBCF";

  return (
    <div
      style={{
        padding: "12px 0",
        borderBottom: `1px solid ${LIGHT_GREY}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 6,
          gap: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: FONT,
              fontSize: 12,
              fontWeight: 600,
              color: CHARCOAL,
            }}
          >
            {DIM_LABELS[dim.key]}
          </span>
          {indicator}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <ScoreBar score={dim.score} color={barColor} />
          <span
            style={{
              fontFamily: FONT,
              fontSize: 14,
              fontWeight: 700,
              color: isWinner ? PINK : CHARCOAL,
              width: 16,
              textAlign: "right" as const,
            }}
          >
            {dim.score}
          </span>
        </div>
      </div>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 12,
          color: GREY_TEXT,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {dim.description}
      </p>
    </div>
  );
}

// ── Solution card ─────────────────────────────────────────────────────────────
function SolutionCard({
  solution,
  rank,
  winnerDimScores,
}: {
  solution: Solution;
  rank: number;
  winnerDimScores: Record<string, number>;
}) {
  const borderColor = solution.isWinner ? PINK : "#E0E0E5";
  const badgeBg     = solution.isWinner ? PINK : CHARCOAL;

  return (
    <div
      style={{
        background: WHITE,
        border: `2px solid ${borderColor}`,
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: "1.5rem",
        position: "relative" as const,
      }}
    >
      {/* Card header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "16px 20px 12px",
          gap: 12,
          borderBottom: `1px solid ${LIGHT_GREY}`,
        }}
      >
        <div>
          {solution.badge && (
            <div
              style={{
                fontFamily: FONT,
                fontSize: 10,
                fontWeight: 700,
                color: solution.badge.includes("WINS on Effort · Close") ? GREEN : GREY_TEXT,
                background: solution.badge.includes("WINS on Effort · Close") ? "#E6F7F3" : LIGHT_GREY,
                borderRadius: 4,
                padding: "2px 8px",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              {solution.badge}
            </div>
          )}
          <h2
            style={{
              fontFamily: FONT,
              fontSize: 16,
              fontWeight: 700,
              color: CHARCOAL,
              margin: 0,
            }}
          >
            {rank === 1 ? "1st · " : rank === 2 ? "2nd · " : "3rd · "}
            {solution.title}
          </h2>
        </div>
        {/* Score badge */}
        <div
          style={{
            background: badgeBg,
            color: WHITE,
            fontFamily: FONT,
            fontSize: 18,
            fontWeight: 700,
            borderRadius: 10,
            padding: "6px 14px",
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {solution.score}
        </div>
      </div>

      {/* Dimension rows */}
      <div style={{ padding: "0 20px" }}>
        {solution.dimensions.map((dim) => (
          <DimensionRow
            key={dim.key}
            dim={dim}
            winnerScore={winnerDimScores[dim.key]}
            isWinner={solution.isWinner}
          />
        ))}
      </div>

      {/* Rationale */}
      <div
        style={{
          background: solution.isWinner ? "#FFF5F7" : LIGHT_GREY,
          padding: "14px 20px",
          borderTop: `1px solid ${LIGHT_GREY}`,
        }}
      >
        <p
          style={{
            fontFamily: FONT,
            fontSize: 12,
            color: GREY_TEXT,
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          <strong style={{ color: CHARCOAL }}>Why: </strong>
          {solution.rationale}
        </p>
      </div>
    </div>
  );
}

// ── Scale table row ───────────────────────────────────────────────────────────
function ScaleRow({ dim, description }: { dim: string; description: string }) {
  return (
    <tr>
      <td
        style={{
          fontFamily: FONT,
          fontSize: 12,
          fontWeight: 600,
          color: CHARCOAL,
          padding: "10px 12px",
          borderBottom: `1px solid ${LIGHT_GREY}`,
          whiteSpace: "nowrap" as const,
          verticalAlign: "top",
        }}
      >
        {dim}
      </td>
      <td
        style={{
          fontFamily: FONT,
          fontSize: 12,
          color: GREY_TEXT,
          padding: "10px 12px",
          borderBottom: `1px solid ${LIGHT_GREY}`,
          lineHeight: 1.6,
          verticalAlign: "top",
        }}
      >
        {description}
      </td>
    </tr>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function RicePage() {
  const [scaleOpen, setScaleOpen] = useState(false);

  // Build winner's per-dimension score map for comparison
  const winner = SOLUTIONS[0];
  const winnerDimScores: Record<string, number> = {};
  winner.dimensions.forEach((d) => {
    winnerDimScores[d.key] = d.score;
  });

  return (
    <div style={{ background: "#F9F9FB", minHeight: "100vh", fontFamily: FONT }}>
      <ArtifactNav />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2rem 20px 5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
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
            RICE prioritisation: why the Signal + Confidence Engine wins
          </h1>
          <p style={{ fontFamily: FONT, fontSize: 14, color: GREY_TEXT, lineHeight: 1.6, marginBottom: 12 }}>
            RICE = (Reach × Impact × Confidence) / Effort — all dimensions scored 1–9
          </p>
          {/* Formula pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: CHARCOAL,
              borderRadius: 8,
              padding: "8px 16px",
              gap: 8,
            }}
          >
            <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: WHITE, fontVariantNumeric: "tabular-nums" }}>
              RICE = (Reach × Impact × Confidence) / Effort
            </span>
          </div>
        </div>

        {/* Solution cards */}
        {SOLUTIONS.map((solution, i) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            rank={i + 1}
            winnerDimScores={winnerDimScores}
          />
        ))}

        {/* Scale definition (collapsible) */}
        <div
          style={{
            background: WHITE,
            border: `1px solid ${LIGHT_GREY}`,
            borderRadius: 12,
            overflow: "hidden",
            marginTop: "0.5rem",
          }}
        >
          <button
            onClick={() => setScaleOpen(!scaleOpen)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: FONT,
              fontSize: 13,
              fontWeight: 600,
              color: CHARCOAL,
            }}
          >
            <span>Scale definitions — how each dimension is scored</span>
            <span style={{ fontSize: 16, color: GREY_TEXT, transform: scaleOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▶</span>
          </button>

          {scaleOpen && (
            <div style={{ padding: "0 20px 20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
                <tbody>
                  <ScaleRow
                    dim="Reach"
                    description="1–3: opt-in or navigated surface, under 30% of users | 5–6: regular surface, 50–70% | 7–8: default surface, 70–90% | 9: fires every app open, 90%+, no action required"
                  />
                  <ScaleRow
                    dim="Impact"
                    description="1–4: marginal metric nudge | 5–7: moderate lift, addresses one sub-segment or one barrier | 9: directly intercepts the primary failure mode, serves both sub-segments"
                  />
                  <ScaleRow
                    dim="Confidence"
                    description="1–4: hypothesis only | 6–7: directional survey signal | 8: strong survey signal with one limitation | 9: direct validated evidence chain, workaround confirmed and route-specific"
                  />
                  <ScaleRow
                    dim="Effort"
                    description="1–3: one sprint, no new surfaces | 4–5: two to three sprints | 6+: new surface, new algorithm, AI integration required"
                  />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
