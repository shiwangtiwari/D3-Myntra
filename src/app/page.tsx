"use client";
import { useState, useEffect } from "react";
import { PRODUCTS, Product } from "../data/products";
import SplashScreen   from "../components/screens/SplashScreen";
import HomeScreen     from "../components/screens/HomeScreen";
import WishlistScreen from "../components/screens/WishlistScreen";
import ProductScreen  from "../components/screens/ProductScreen";
import VerdictScreen  from "../components/screens/VerdictScreen";
import SizeScreen     from "../components/screens/SizeScreen";
import SuccessScreen  from "../components/screens/SuccessScreen";

type Screen = "splash" | "home" | "wishlist" | "product" | "verdict" | "size" | "success";

export default function App() {
  const [scr,  setScr]  = useState<Screen>("splash");
  const [prod, setProd] = useState<Product>(PRODUCTS[0]);
  const [imgI, setImgI] = useState(0);
  const [size, setSize] = useState("");
  const [q,    setQ]    = useState("");
  const [ans,  setAns]  = useState("");
  const [busy, setBusy] = useState(false);
  const [bag,  setBag]  = useState(0);
  const [cameFrom, setCameFrom] = useState<"product" | "home">("product");

  // Pick a random product for the Wishlist Strip on every fresh load
  const [stripProduct] = useState<Product>(() => {
    const idx = Math.floor(Math.random() * PRODUCTS.length);
    return PRODUCTS[idx];
  });

  useEffect(() => {
    if (scr === "splash") {
      const t = setTimeout(() => setScr("home"), 2000);
      return () => clearTimeout(t);
    }
  }, [scr]);

  function open(p: Product) {
    setProd(p); setImgI(0); setSize(""); setQ(""); setAns("");
    setCameFrom("product");
    setScr("product");
  }

  // Strip tap: jump straight to Confidence Engine for the strip product
  function openFromHome() {
    setProd(stripProduct); setImgI(0); setSize(""); setQ(""); setAns("");
    setCameFrom("home");
    setScr("verdict");
  }

  async function ask() {
    if (!q.trim() || busy) return;
    setBusy(true);
    try {
      const r = await fetch("/api/verdict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: prod.id, question: q }),
      });
      const d = await r.json();
      setAns(d.answer || "Not enough buyer data on this specific question.");
    } catch {
      setAns("Could not connect. Please try again.");
    }
    setBusy(false);
  }

  function addToBag() {
    if (!size) return;
    setBag(b => b + 1);
    setScr("success");
    const back = cameFrom === "home" ? "home" : "wishlist";
    setTimeout(() => { setSize(""); setScr(back); }, 2500);
  }

  if (scr === "splash")   return <SplashScreen />;
  if (scr === "home")     return <HomeScreen    bag={bag} stripProduct={stripProduct} onOpenStrip={openFromHome} onWishlist={() => setScr("wishlist")} />;
  if (scr === "wishlist") return <WishlistScreen products={PRODUCTS} bag={bag} onOpen={open} onSetScr={(s) => setScr(s as Screen)} />;
  if (scr === "product")  return <ProductScreen  prod={prod} imgI={imgI} size={size} onBack={() => setScr("wishlist")} onSetImgI={setImgI} onSetSize={setSize} onVerdict={() => setScr("verdict")} onSize={() => setScr("size")} />;
  if (scr === "verdict")  return <VerdictScreen  prod={prod} q={q} ans={ans} busy={busy} onBack={() => setScr(cameFrom === "home" ? "home" : "product")} onSetQ={setQ} onAsk={ask} onSize={() => setScr("size")} onWishlist={() => setScr("wishlist")} />;
  if (scr === "size")     return <SizeScreen     prod={prod} size={size} onSetSize={setSize} onBack={() => setScr("verdict")} onAddToBag={addToBag} />;
  return                         <SuccessScreen  prod={prod} size={size} bag={bag} onWishlist={() => setScr("wishlist")} />;
}
