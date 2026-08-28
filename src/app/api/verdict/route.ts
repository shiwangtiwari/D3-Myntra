import { NextRequest, NextResponse } from "next/server";

const PRODUCT_REVIEWS: Record<string, string> = {
  oquent: `
Reviews for OQUENT Men Standard Striped Casual Shirt (Size 40, 42, 44):
- "Fabric is nice and light, perfect for summers. Sizing runs slightly large, I ordered 40 usually wear 42 and it fits well." - Rahul K, Size 42
- "Quality is decent for the price. The stripe pattern looks exactly like photos. Collar could be stiffer." - Arjun M, Size 40  
- "Good casual shirt. Wears well after 3 washes. No color fade." - Priya S, Size 44
- "Runs one size large. If you're a medium go for small." - Vishal T, Size 42
- "Great value for money. Linen-cotton blend feels premium." - Amit R, Size 40
- "Fits true to size if you like relaxed fit. Slim fit users size down." - Dev P, Size 42
- "Material is thin but breathable. Good for office casual." - Neha G, Size 44
- "Ordered twice in different colors. Consistent quality." - Karan L, Size 40
Total: 2083 ratings, 3.9 stars, 399 reviews. 73% buyers kept without return.`,

  denimlook: `
Reviews for DENIMLOOK Men Relaxed Fit Stretchable Jeans:
- "Super comfortable, stretch fabric makes it easy to wear all day. Goes with everything." - Rohan B, Size 32
- "Quality is good but runs slightly slim. Size up if between sizes." - Vikram S, Size 34
- "Fabric quality excellent. Doesn't wrinkle much. Wash care is easy." - Aditya P, Size 30
- "Color is slightly darker than photos but looks great in person." - Suresh K, Size 32
- "Perfect relaxed fit. Not too baggy not too tight." - Mohit G, Size 34
- "Waist fits well but length is slightly long for 5'9." - Ravi M, Size 32
- "Very comfortable for long sitting hours at office." - Ankit V, Size 30
- "Material holds shape after multiple washes." - Deepak R, Size 34
Total: 4.2 stars, 4.8k ratings. 80% buyers report true to size.`,

  kooknkeech: `
Reviews for Kook N Keech Polo Collar T-shirt (Black):
- "Soft cotton, comfortable fit. Perfect polo for casual outings." - Aryan S, Size M
- "Color is rich black, hasn't faded after 5 washes. Good quality." - Nikhil P, Size L
- "Slightly boxy fit but comfortable. Collar stays stiff which is nice." - Rahul K, Size M
- "Great value. Polo collar looks clean and professional." - Amit T, Size XL
- "Runs true to size. Order your regular size." - Vikram M, Size M
- "Good for gym and casual wear both." - Saurabh D, Size L
- "Light fabric, good for hot weather." - Prateek R, Size M
Total: 4.2 stars, 2.4k ratings. Runs true to size per 85% of buyers.`,

  kasmenco: `
Reviews for KASMEN CO. Men Ethnic Motifs Embroidered Kurta (Off White):
- "Fabric is soft and breathable, perfect for a summer wedding. Embroidery detail looks premium for the price." - Ankit S, Size L
- "Runs slightly large. I usually wear L but M would have fit better." - Rohit M, Size L
- "Bought for a festive function, got so many compliments. Fabric doesn't feel cheap at all." - Deepak V, Size M
- "Size down if you want a fitted look, otherwise regular size gives a relaxed festive fit." - Karan P, Size XL
- "Embroidery thread quality held up fine after one dry clean." - Suresh N, Size M
- "Good for weddings and pooja functions. Lightweight, doesn't feel heavy even in humid weather." - Vivek T, Size L
- "Color is closer to off-white than cream shown in some photos, but still looks premium." - Aman R, Size S
Total: 2100 ratings, 3.8 stars, 420 reviews. Most buyers recommend sizing down one for a fitted look.`,

  pepejeans: `
Reviews for Pepe Jeans Men Regular Sneakers:
- "Excellent cushioning, very comfortable for all day wear." - Rohit S, Size 9
- "True to size. Clean white look. Goes with everything." - Karan M, Size 8
- "Quality leather feels premium. Worth the price." - Varun P, Size 10
- "Adaptive foam sole is super comfortable. Good for walking." - Deepak K, Size 9
- "White color stays clean with basic maintenance." - Arun T, Size 8
- "Slightly stiff initially but comfortable after break-in." - Nikhil R, Size 9
- "Classic sneaker look. Good for office casual and weekends." - Amit G, Size 10
- "Runs true to size. Recommend ordering your regular size." - Suresh V, Size 8
Total: 4.2 stars, 2.1k ratings. 89% buyers found sizing accurate.`,

  wrodss: `
Reviews for WRODSS Men Colourblocked T-shirt (Charcoal / Black):
- "Panels are stitched cleanly, no bleeding between the two colors even after washes." - Aditya K, Size M
- "Fabric is mid-weight, works fine in AC office and layers well under a jacket in the evening." - Rohan B, Size L
- "Runs true to size, ordered my regular M and it fits as expected." - Karan S, Size M
- "Good everyday tee. Not too tight, not too loose." - Vishal D, Size L
- "Color block design looks sharper in person than in photos." - Nikhil A, Size S
- "Slightly thinner fabric than expected but breathable, good for humid weather." - Prateek G, Size XL
Total: 1200 ratings, 3.6 stars, 280 reviews. 78% report no color bleed between panels.`,

  fabripple: `
Reviews for FABRIPPLE Men Training or Gym Sports Shorts (Off White):
- "Waffle texture still looks new after 10+ washes. Drawstring hasn't slipped once." - Rohit V, Size L
- "Waistband is a bit snug, sized up from M to L and it's perfect now." - Karan M, Size L
- "Great for gym and running both. Doesn't ride up during workouts." - Aman T, Size M
- "Fabric breathes well, no chafing even during long runs." - Deepak S, Size L
- "Pockets are deep enough for a phone, stays secure while training." - Vivek R, Size XL
- "Sized true to my regular gym shorts size, no surprises." - Suresh P, Size M
Total: 3100 ratings, 4.1 stars, 620 reviews. 82% say the waffle texture holds up after multiple washes.`,

  mastharbour: `
Reviews for Mast & Harbour Men Standard Checked Casual Shirt (Yellow / Blue):
- "Check pattern is sharp, colors haven't bled even after several washes." - Aditya R, Size L
- "100% cotton as advertised, breathable but does wrinkle if not ironed." - Karan V, Size M
- "Fits true to size with a slightly relaxed, comfortable cut." - Rohan S, Size L
- "Great casual shirt for weekend outings, colors are vivid in person." - Nikhil P, Size M
- "Fabric feels premium for the price point, good stitching quality." - Vishal K, Size XL
- "Runs slightly relaxed, order your usual size for a comfortable fit." - Amit D, Size L
Total: 5200 ratings, 4.0 stars, 1040 reviews. 88% say the check pattern and colors hold up well after washing.`,

  "roadster-hoodie": `
Reviews for The Roadster Lifestyle Co. Men Full Sleeve Hoodie (Pink):
- "Definitely runs oversized, sized down from L to M and it fits much better now." - Karan T, Size M
- "Fleece lining is warm without feeling bulky, great for early mornings." - Rohit A, Size S
- "Pink color has stayed true even after multiple washes." - Aman V, Size L
- "Hood drawstring quality is just average, tips fray a bit after a month." - Deepak N, Size M
- "Great oversized streetwear fit if that's what you're going for, but size down for a regular fit." - Vivek K, Size S
- "Cozy and warm, good value at this price point." - Suresh G, Size M
Total: 8400 ratings, 3.7 stars, 1680 reviews. 71% of buyers sized down one from their usual size.`,

  "roadster-jacket": `
Reviews for The Roadster Lifestyle Co. Solid Fleece Jacket (Blue):
- "Fleece is genuinely warm, handled a 16C evening comfortably over a t-shirt." - Rohan M, Size M
- "Zipper runs smoothly, no snagging even after regular use." - Karan D, Size L
- "Fits true to size with just enough room to layer a sweater underneath." - Aditya S, Size M
- "Blue color is exactly as shown in photos, no color mismatch." - Nikhil V, Size L
- "Good weight for the price, not too heavy but keeps you warm." - Vishal R, Size XL
- "True to size, ordered my regular M and the fit was spot on." - Amit P, Size M
Total: 6700 ratings, 4.1 stars, 1340 reviews. Buyers consistently say it handles 15-18C comfortably.`
};

const VERDICTS: Record<string, string> = {
  oquent: "Buyers say this runs one size large. 73% who sized down kept it without returning. The fabric is lighter than photos suggest but breathes well in heat.",
  denimlook: "Most buyers say this fits true to size on the waist but runs slightly long for heights under 5 foot 10. 80% found the stretch fabric comfortable for all-day wear.",
  kooknkeech: "Runs true to size per 85% of buyers. The black color stays rich after multiple washes and the polo collar holds its shape well.",
  kasmenco: "Fabric is soft and lightweight, well suited to festive occasions. Sizing runs slightly large, most buyers recommend going one size down for a fitted look.",
  pepejeans: "Runs true to size for 89% of buyers. The Adaptive Foam sole is noticeably comfortable. White leather shows minimal dirt with basic care.",
  wrodss: "Colour block sits clean with no bleed between panels per 78% of buyers. Fabric is mid-weight, good for AC offices and evening outings. Runs true to size.",
  fabripple: "Waffle texture stays intact after multiple washes per 82% of buyers. Drawstring holds well without slipping. Size up if between sizes, waistband runs slightly snug.",
  mastharbour: "Check pattern is sharp and colours don't bleed per 88% of buyers. Fabric is 100% cotton, breathable but wrinkles easily. Fits true to size with a slightly relaxed cut.",
  "roadster-hoodie": "Oversized fit, 71% of buyers sized down one. Fleece lining is warm without being bulky. Pink colour stays true after washing. Hood drawstring quality is average.",
  "roadster-jacket": "Fleece is thick and warm, buyers say it handles 15-18C comfortably. Zipper runs smoothly. Fits true to size with slight room for layering underneath."
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const { productId, question } = await req.json();

  const reviews = PRODUCT_REVIEWS[productId];
  if (!reviews) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // If no question, return the pre-computed verdict
  if (!question || question.trim() === "") {
    return NextResponse.json({
      verdict: VERDICTS[productId],
      reviewCount: getReviewCount(productId),
      type: "verdict"
    });
  }

  // Use Claude API to answer specific question
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 150,
        system: `You are answering a specific buyer question about a Myntra fashion product. 
Use ONLY the buyer reviews provided. Give a direct, specific answer in 2 sentences maximum.
If reviews don't address the question, say "Not enough buyer data on this, reviews don't mention it."
Never make up information. No markdown. No em dashes.`,
        messages: [{
          role: "user",
          content: `Product reviews:\n${reviews}\n\nBuyer question: "${question}"\n\nAnswer in 2 sentences max using only the reviews above.`
        }]
      })
    });

    const data = await response.json();
    const answer = data.content?.[0]?.text || "Could not generate answer. Please try again.";

    return NextResponse.json({
      answer: answer.trim(),
      type: "question"
    });
  } catch {
    return NextResponse.json({ error: "API call failed" }, { status: 500 });
  }
}

function getReviewCount(productId: string): string {
  const counts: Record<string, string> = {
    oquent: "2,083 buyer reviews",
    denimlook: "4,800 buyer reviews",
    kooknkeech: "2,400 buyer reviews",
    kasmenco: "2,100 buyer reviews",
    pepejeans: "2,100 buyer reviews",
    wrodss: "1,200 buyer reviews",
    fabripple: "3,100 buyer reviews",
    mastharbour: "5,200 buyer reviews",
    "roadster-hoodie": "8,400 buyer reviews",
    "roadster-jacket": "6,700 buyer reviews"
  };
  return counts[productId] || "buyer reviews";
}
