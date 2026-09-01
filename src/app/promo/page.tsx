// src/app/promo/page.tsx
// Redirects /promo to /promo2 — the extended version is the only promo.
import { redirect } from "next/navigation";

export default function PromoRedirect() {
  redirect("/promo2");
}
