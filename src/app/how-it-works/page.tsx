"use client";
import ArtifactNav from "@/components/ArtifactNav";

const PINK       = "#FF3F6C";
const CHARCOAL   = "#282C3F";
const GREEN      = "#03A685";
const GREY       = "#535766";
const LIGHT_GREY = "#F4F4F5";
const BORDER     = "#E9E9EB";
const WHITE      = "#FFFFFF";
const FONT       = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily:FONT, fontSize:11, fontWeight:700, textTransform:"uppercase" as const, letterSpacing:"0.08em", color:PINK, marginBottom:10 }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily:FONT, fontSize:24, fontWeight:800, color:CHARCOAL, letterSpacing:"-0.4px", marginBottom:8, lineHeight:1.25 }}>
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily:FONT, fontSize:14, color:GREY, lineHeight:1.7, marginBottom:28, maxWidth:640 }}>
      {children}
    </p>
  );
}

function Divider() {
  return <hr style={{ border:"none", borderTop:`1.5px solid ${BORDER}`, margin:"52px 0" }} />;
}

function InfoCard({ title, body, accent = PINK }: { title?: string; body: string; accent?: string }) {
  return (
    <div style={{ background:LIGHT_GREY, borderLeft:`3px solid ${accent}`, borderRadius:"0 10px 10px 0", padding:"16px 20px", marginBottom:14 }}>
      {title && <p style={{ fontFamily:FONT, fontWeight:700, fontSize:13, color:CHARCOAL, marginBottom:6 }}>{title}</p>}
      <p style={{ fontFamily:FONT, fontSize:13, color:GREY, lineHeight:1.65, margin:0 }}>{body}</p>
    </div>
  );
}

function AssetLink({ href, label, desc }: { href: string; label: string; desc: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") || href.startsWith("/") ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={{ display:"flex", gap:16, alignItems:"center", padding:"14px 18px", background:WHITE, border:`1.5px solid ${BORDER}`, borderRadius:10, textDecoration:"none", marginBottom:10 }}
    >
      <div style={{ width:36, height:36, background:PINK, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
      <div>
        <p style={{ fontFamily:FONT, fontWeight:700, fontSize:14, color:CHARCOAL, margin:0 }}>{label}</p>
        <p style={{ fontFamily:FONT, fontSize:12, color:GREY, margin:0 }}>{desc}</p>
      </div>
    </a>
  );
}

// ── Step card — the core of the journey section ───────────────────────────────
function StepCard({
  num, title, body, screen, annotation, isLast = false
}: {
  num: number; title: string; body: string; screen: string;
  annotation?: string; isLast?: boolean;
}) {
  return (
    <div style={{ display:"flex", gap:0, alignItems:"stretch", marginBottom: isLast ? 0 : 0 }}>
      {/* Step number column */}
      <div style={{ display:"flex", flexDirection:"column" as const, alignItems:"center", width:52, flexShrink:0 }}>
        <div style={{ width:40, height:40, borderRadius:"50%", background:PINK, color:WHITE, fontFamily:FONT, fontWeight:800, fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, zIndex:1 }}>
          {num}
        </div>
        {!isLast && (
          <div style={{ width:2, flex:1, background:BORDER, margin:"6px 0" }}/>
        )}
      </div>

      {/* Content */}
      <div style={{ flex:1, paddingBottom: isLast ? 0 : 40, paddingLeft:16 }}>
        <p style={{ fontFamily:FONT, fontWeight:700, fontSize:16, color:CHARCOAL, marginBottom:6, marginTop:8 }}>{title}</p>
        <p style={{ fontFamily:FONT, fontSize:13.5, color:GREY, lineHeight:1.65, marginBottom:14 }}>{body}</p>

        {/* Screen mockup strip */}
        <div style={{ background:LIGHT_GREY, borderRadius:12, overflow:"hidden", border:`1px solid ${BORDER}` }}>
          {/* Phone frame header */}
          <div style={{ background:CHARCOAL, padding:"10px 16px", display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#FF5F56" }}/>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#FFBD2E" }}/>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#27C93F" }}/>
            <div style={{ flex:1, background:"rgba(255,255,255,0.08)", borderRadius:4, height:20, marginLeft:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:FONT, fontSize:10, color:"rgba(255,255,255,0.4)" }}>d3-myntra.vercel.app</span>
            </div>
          </div>
          {/* Screen content */}
          <div style={{ padding:"16px 20px", minHeight:80, display:"flex", alignItems:"flex-start", gap:16 }}>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:FONT, fontSize:11, fontWeight:700, color:PINK, textTransform:"uppercase" as const, letterSpacing:"0.06em", marginBottom:6 }}>{screen}</div>
              {annotation && (
                <p style={{ fontFamily:FONT, fontSize:13, color:CHARCOAL, lineHeight:1.6, margin:0 }}>{annotation}</p>
              )}
            </div>
            {/* Arrow indicator */}
            <div style={{ width:28, height:28, borderRadius:"50%", background:PINK, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:2 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke={WHITE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <div style={{ background:"#F9F9FB", minHeight:"100vh", fontFamily:FONT }}>
      <ArtifactNav />

      <div style={{ maxWidth:860, margin:"0 auto", padding:"2.5rem 20px 5rem" }}>

        {/* Header */}
        <div style={{ marginBottom:"2rem" }}>
          <h1 style={{ fontFamily:FONT, fontSize:26, fontWeight:800, color:CHARCOAL, letterSpacing:"-0.5px", lineHeight:1.25, marginBottom:8 }}>
            How the Wishlist Confidence Engine works
          </h1>
          <p style={{ fontFamily:FONT, fontSize:14, color:GREY, lineHeight:1.7 }}>
            A complete walkthrough of the user journey, the two components that power it, and why each decision was made.
          </p>
        </div>

        {/* ── SECTION 1: The problem it solves ─────────────────────────────── */}
        <SectionLabel>01 · The problem</SectionLabel>
        <SectionHeading>Why wishlisted items die</SectionHeading>
        <SectionSubtitle>
          65% of Myntra wishlist users leave the app to find answers before deciding — YouTube reviews, Amazon comparisons, WhatsApp friends. Every exit is a purchase Myntra does not get. The Wishlist Confidence Engine closes that loop before the user leaves.
        </SectionSubtitle>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginBottom:28 }}>
          {[
            { stat:"65%",   label:"leave the app to decide",          color:PINK    },
            { stat:"28.3%", label:"save items and never return",       color:CHARCOAL },
            { stat:"51.7%", label:"want real buyer photos and reviews", color:GREEN   },
          ].map(({ stat, label, color }) => (
            <div key={stat} style={{ background:WHITE, border:`1px solid ${BORDER}`, borderRadius:12, padding:"18px 20px", textAlign:"center" as const }}>
              <div style={{ fontFamily:FONT, fontSize:34, fontWeight:800, color, letterSpacing:"-1px", lineHeight:1 }}>{stat}</div>
              <div style={{ fontFamily:FONT, fontSize:12, color:GREY, marginTop:6, lineHeight:1.5 }}>{label}</div>
            </div>
          ))}
        </div>

        <InfoCard
          title="The insight that drives the solution"
          body="Users who return to their wishlist already intend to buy. They stall not because of price — but because the product page cannot answer whether the item will actually work for them. The solution is information, not incentive."
          accent={GREEN}
        />

        <Divider />

        {/* ── SECTION 2: The two components ────────────────────────────────── */}
        <SectionLabel>02 · The two components</SectionLabel>
        <SectionHeading>Signal + Confidence Engine</SectionHeading>
        <SectionSubtitle>
          The solution has two parts that work together. Component A intercepts users before they forget. Component B gives them the answer they were going to find elsewhere.
        </SectionSubtitle>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:28 }}>
          <div style={{ background:WHITE, border:`2px solid ${PINK}`, borderRadius:14, padding:"22px 22px" }}>
            <div style={{ fontFamily:FONT, fontSize:11, fontWeight:700, color:PINK, textTransform:"uppercase" as const, letterSpacing:"0.07em", marginBottom:10 }}>Component A</div>
            <div style={{ fontFamily:FONT, fontSize:18, fontWeight:800, color:CHARCOAL, marginBottom:10 }}>Wishlist Strip</div>
            <p style={{ fontFamily:FONT, fontSize:13, color:GREY, lineHeight:1.65, margin:0 }}>
              An always-on home screen strip that surfaces the highest-priority wishlisted item on every app open. Fires before the user navigates anywhere. Serves the 28.3% who save and never return — a segment every alternative solution misses entirely.
            </p>
          </div>
          <div style={{ background:WHITE, border:`2px solid ${GREEN}`, borderRadius:14, padding:"22px 22px" }}>
            <div style={{ fontFamily:FONT, fontSize:11, fontWeight:700, color:GREEN, textTransform:"uppercase" as const, letterSpacing:"0.07em", marginBottom:10 }}>Component B</div>
            <div style={{ fontFamily:FONT, fontSize:18, fontWeight:800, color:CHARCOAL, marginBottom:10 }}>Confidence Engine</div>
            <p style={{ fontFamily:FONT, fontSize:13, color:GREY, lineHeight:1.65, margin:0 }}>
              An AI verdict on every wishlist card, distilled from real buyer reviews. Answers the question the user was going to find on YouTube. Includes an Ask panel powered by the Claude API — typed questions answered from the review corpus in seconds.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── SECTION 3: The 5-step user journey ───────────────────────────── */}
        <SectionLabel>03 · The user journey</SectionLabel>
        <SectionHeading>From app open to Add to Bag in 5 steps</SectionHeading>
        <SectionSubtitle>
          No wishlist navigation required. No app-switching. No review-reading on YouTube. The complete journey happens inside Myntra.
        </SectionSubtitle>

        <div style={{ background:WHITE, border:`1px solid ${BORDER}`, borderRadius:14, padding:"32px 28px", marginBottom:28 }}>
          <StepCard
            num={1}
            title="Open the app — the strip finds you"
            body="The Wishlist Strip fires on the home screen on every app open. The user sees the highest-priority wishlisted item immediately — brand name, a social signal (74 buyers your size bought this since you saved it), and a chevron to tap. No navigation to the wishlist page required."
            screen="Home screen · Wishlist Strip"
            annotation="Component A fires. The strip shows the item with the strongest purchase signal — ranked by recency saved, buyer volume, and size match."
          />
          <StepCard
            num={2}
            title="Tap the strip — open the Confidence Engine"
            body="One tap on the strip opens the Verdict bottom sheet directly on that item. The user does not visit the product detail page. The Confidence Engine is the destination — it already contains everything needed to decide."
            screen="Verdict bottom sheet · AI Buyer Verdict"
            annotation="Component B activates. The Claude API has already synthesised 2,083 reviews into one paragraph. The verdict loads in under 2 seconds."
          />
          <StepCard
            num={3}
            title="Read the AI verdict"
            body="The verdict answers the questions that cause abandonment: fit, fabric, sizing, durability. Two sentences. Sourced from real buyer reviews. Buyer photos appear below — not stock images, not brand shots. Real people who bought the item."
            screen="AI Buyer Verdict · 2,083 reviews"
            annotation='"Buyers say: runs true to size. Lighter than photos — breathes well in summer heat." Based on 2,083 reviews.'
          />
          <StepCard
            num={4}
            title="Ask your specific question"
            body="If the verdict doesn't answer the user's exact concern, the Ask panel lets them type any question. The answer is generated from the review corpus — not a generic FAQ. 'Will this work for office?' gets a specific, evidence-backed answer from buyers who wore it to formal settings."
            screen="Ask panel · Claude API"
            annotation='"Will this work for office?" → "Yes — 68% of buyers in formal settings kept it."'
          />
          <StepCard
            num={5}
            title="Add to Bag — the loop closes"
            body="Decision made. One tap. The item moves from wishlist to bag. The strip disappears for this session. The metric moves: a wishlisted item that was going to be abandoned has been purchased. No discount. No price alert. Information alone closed the loop."
            screen="Size selector · Add to Bag"
            annotation="The north star metric moves: % of users who purchase at least one wishlisted item within 30 days of adding it."
            isLast
          />
        </div>

        <InfoCard
          title="Why this is not a wishlist reminder"
          body="A reminder tells the user something they already know — that they saved an item. The strip does something different: it tells the user something they did not know — that 74 buyers their size bought the item since they saved it. That is new information. New information changes decisions. Reminders do not."
          accent={PINK}
        />

        <Divider />

        {/* ── SECTION 4: How the prototype was built ───────────────────────── */}
        <SectionLabel>04 · The prototype</SectionLabel>
        <SectionHeading>How the MVP was built</SectionHeading>
        <SectionSubtitle>
          The prototype at d3-myntra.vercel.app is a live Next.js application. The Verdict and Ask panel make real Claude API calls server-side. The iPhone shell and all screens are pixel-accurate to the Myntra design system.
        </SectionSubtitle>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:24 }}>
          {[
            { title:"Next.js + Vercel",      body:"App Router, server components, API routes. Deployed on Vercel. Zero configuration required to run." },
            { title:"Claude Haiku API",       body:"Server-side API route at /api/verdict. The browser never sees the API key. Same architecture any production feature would use." },
            { title:"Myntra design system",   body:"Pink #FF3F6C, Charcoal #282C3F, DM Sans font. Every screen pixel-matched to the real Myntra app using the actual product images from Shiwang's wishlist." },
            { title:"No video file",          body:"The promo at /promo is a 50-second animation built entirely in React using requestAnimationFrame. No screen recording. No video codec. 60fps in the browser." },
          ].map(c => (
            <div key={c.title} style={{ background:WHITE, border:`1px solid ${BORDER}`, borderRadius:10, padding:"18px 20px" }}>
              <p style={{ fontFamily:FONT, fontWeight:700, fontSize:13, color:CHARCOAL, marginBottom:6 }}>{c.title}</p>
              <p style={{ fontFamily:FONT, fontSize:13, color:GREY, lineHeight:1.6, margin:0 }}>{c.body}</p>
            </div>
          ))}
        </div>

        <InfoCard
          title="What was deliberately not built"
          body="Authentication, persistent cart, payment processing, real inventory APIs. An MVP tests the riskiest assumption — will a user engage with an AI verdict and act on it? Everything that does not test that assumption was left out."
          accent={GREEN}
        />

        <Divider />

        {/* ── SECTION 5: All assets ─────────────────────────────────────────── */}
        <SectionLabel>05 · All assets</SectionLabel>
        <SectionHeading>Every deliverable in one place</SectionHeading>
        <SectionSubtitle>
          All links are live and do not require login.
        </SectionSubtitle>

        <AssetLink href="/" label="Wishlist Confidence Engine · Live MVP" desc="The full interactive prototype. Home screen strip, verdict sheet, Ask panel, Add to Bag." />
        <AssetLink href="/promo" label="Feature Promo · 50 seconds" desc="Product story built in React. No video file. No screen recording." />
        <AssetLink href="/promo2" label="Feature Promo Extended · 66 seconds" desc="Same promo with user journey walkthrough and all 5 screens fanned out." />
        <AssetLink href="/rice" label="RICE Prioritisation" desc="Three solutions evaluated. Winner: 121.5. Runner-up: 78.4. Third: 52.5." />
        <AssetLink href="/guesstimate" label="Guesstimate Model" desc="Rs 20.16 Cr monthly incremental GMV. Every input color-coded by source." />
        <AssetLink href="https://d2-myntra-seven.vercel.app" label="D2 Discovery Engine" desc="1,458 signals processed. 355 relevant. Inter-coder agreement disclosed." />

        {/* Footer */}
        <div style={{ marginTop:52, paddingTop:24, borderTop:`1.5px solid ${BORDER}`, display:"flex", alignItems:"center", gap:14 }}>
          <img src="/myntra-logo.png" alt="Myntra" style={{ height:22, objectFit:"contain" }}/>
          <span style={{ fontFamily:FONT, fontSize:12, color:GREY }}>Wishlist Confidence Engine · NextLeap PM Fellowship 2026 · Shiwang Tiwari</span>
        </div>

      </div>
    </div>
  );
}
