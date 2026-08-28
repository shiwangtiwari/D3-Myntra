(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/SplashScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/HomeScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$WishlistScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/WishlistScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$ProductScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/ProductScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$VerdictScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/VerdictScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SizeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/SizeScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SuccessScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/SuccessScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function App() {
    _s();
    const [scr, setScr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("splash");
    const [prod, setProd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"][0]);
    const [imgI, setImgI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ans, setAns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bag, setBag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cameFrom, setCameFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("product");
    // Pick a random product for the Wishlist Strip on every fresh load
    const [stripProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "App.useState": ()=>{
            const idx = Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"].length);
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"][idx];
        }
    }["App.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (scr === "splash") {
                const t = setTimeout({
                    "App.useEffect.t": ()=>setScr("home")
                }["App.useEffect.t"], 2000);
                return ({
                    "App.useEffect": ()=>clearTimeout(t)
                })["App.useEffect"];
            }
        }
    }["App.useEffect"], [
        scr
    ]);
    function open(p) {
        setProd(p);
        setImgI(0);
        setSize("");
        setQ("");
        setAns("");
        setCameFrom("product");
        setScr("product");
    }
    // Strip tap: jump straight to Confidence Engine for the strip product
    function openFromHome() {
        setProd(stripProduct);
        setImgI(0);
        setSize("");
        setQ("");
        setAns("");
        setCameFrom("home");
        setScr("verdict");
    }
    async function ask() {
        if (!q.trim() || busy) return;
        setBusy(true);
        try {
            const r = await fetch("/api/verdict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: prod.id,
                    question: q
                })
            });
            const d = await r.json();
            setAns(d.answer || "Not enough buyer data on this specific question.");
        } catch  {
            setAns("Could not connect. Please try again.");
        }
        setBusy(false);
    }
    function addToBag() {
        if (!size) return;
        setBag((b)=>b + 1);
        setScr("success");
        const back = cameFrom === "home" ? "home" : "wishlist";
        setTimeout(()=>{
            setSize("");
            setScr(back);
        }, 2500);
    }
    if (scr === "splash") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SplashScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 76,
        columnNumber: 34
    }, this);
    if (scr === "home") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HomeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        bag: bag,
        stripProduct: stripProduct,
        onOpenStrip: openFromHome,
        onWishlist: ()=>setScr("wishlist")
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 77,
        columnNumber: 34
    }, this);
    if (scr === "wishlist") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$WishlistScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        products: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS"],
        bag: bag,
        onOpen: open,
        onSetScr: (s)=>setScr(s)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 78,
        columnNumber: 34
    }, this);
    if (scr === "product") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$ProductScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prod: prod,
        imgI: imgI,
        size: size,
        onBack: ()=>setScr("wishlist"),
        onSetImgI: setImgI,
        onSetSize: setSize,
        onVerdict: ()=>setScr("verdict"),
        onSize: ()=>setScr("size")
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 79,
        columnNumber: 34
    }, this);
    if (scr === "verdict") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$VerdictScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prod: prod,
        q: q,
        ans: ans,
        busy: busy,
        onBack: ()=>setScr(cameFrom === "home" ? "home" : "product"),
        onSetQ: setQ,
        onAsk: ask,
        onSize: ()=>setScr("size"),
        onWishlist: ()=>setScr("wishlist")
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 80,
        columnNumber: 34
    }, this);
    if (scr === "size") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SizeScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prod: prod,
        size: size,
        onSetSize: setSize,
        onBack: ()=>setScr("verdict"),
        onAddToBag: addToBag
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 81,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$SuccessScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prod: prod,
        size: size,
        bag: bag,
        onWishlist: ()=>setScr("wishlist")
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 82,
        columnNumber: 34
    }, this);
}
_s(App, "u21FPcNvv5PC1hov5elJPVnLMTo=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
"use client";
;
;
function BottomNav({ bag, onHome, active = "home" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderTop: `1px solid #EAEAEC`,
            background: "#fff",
            display: "flex",
            paddingBottom: 18,
            paddingTop: 2,
            flexShrink: 0
        },
        children: [
            {
                id: "home",
                label: "Home"
            },
            {
                id: "fwd",
                label: "Under ₹999"
            },
            {
                id: "now",
                label: "From 30 min"
            },
            {
                id: "luxe",
                label: "Luxe"
            },
            {
                id: "bag",
                label: "Bag"
            }
        ].map((item)=>{
            const isActive = item.id === active;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "6px 2px 0",
                    borderTop: isActive ? `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}` : "2px solid transparent",
                    marginTop: -2,
                    cursor: "pointer"
                },
                onClick: ()=>item.id === "home" && onHome(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        },
                        children: item.id === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/myntra-m.png",
                            alt: "M",
                            style: {
                                width: 24,
                                height: 24,
                                objectFit: "contain"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/BottomNav.tsx",
                            lineNumber: 21,
                            columnNumber: 19
                        }, this) : item.id === "bag" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "22",
                                    viewBox: "0 0 20 22",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1",
                                            y: "6",
                                            width: "18",
                                            height: "15",
                                            rx: "1.5",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BottomNav.tsx",
                                            lineNumber: 24,
                                            columnNumber: 81
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6.5 6V5a3.5 3.5 0 017 0v1",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BottomNav.tsx",
                                            lineNumber: 24,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BottomNav.tsx",
                                    lineNumber: 24,
                                    columnNumber: 21
                                }, this),
                                bag > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "absolute",
                                        top: -4,
                                        right: -7,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        color: "#fff",
                                        borderRadius: "50%",
                                        width: 15,
                                        height: 15,
                                        fontSize: 9,
                                        fontWeight: 700,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: bag
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BottomNav.tsx",
                                    lineNumber: 25,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BottomNav.tsx",
                            lineNumber: 23,
                            columnNumber: 22
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: item.id === "fwd" ? 10 : 9,
                                fontWeight: 800,
                                fontStyle: item.id === "now" ? "italic" : "normal",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                            },
                            children: item.id === "fwd" ? "fwd" : item.id === "now" ? "mnow" : "LUXE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BottomNav.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BottomNav.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            marginTop: 2,
                            color: isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                            fontWeight: isActive ? 700 : 400
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/BottomNav.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/src/components/BottomNav.tsx",
                lineNumber: 18,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/BottomNav.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhoneShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PhoneShell({ children, screen: _screen }) {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhoneShell.useEffect": ()=>{
            const check = {
                "PhoneShell.useEffect.check": ()=>setIsMobile(window.innerWidth <= 540)
            }["PhoneShell.useEffect.check"];
            check();
            window.addEventListener("resize", check);
            return ({
                "PhoneShell.useEffect": ()=>window.removeEventListener("resize", check)
            })["PhoneShell.useEffect"];
        }
    }["PhoneShell.useEffect"], []);
    // On a real phone: full-screen native feel, no shell
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "100vw",
                height: "100svh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#fff"
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/PhoneShell.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }
    // Desktop: clean iPhone shell — no label, no instructions, no dark background
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "#F2F2F7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 32
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 393,
                height: 852,
                background: "#000",
                borderRadius: 54,
                padding: 11,
                boxShadow: "0 0 0 2px #3a3a3a, 0 0 0 3.5px #111, 0 40px 100px rgba(0,0,0,.35), 0 0 60px rgba(255,63,108,.08)",
                position: "relative",
                flexShrink: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: 14,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 118,
                        height: 32,
                        background: "#000",
                        borderRadius: 20,
                        zIndex: 300
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        right: -3,
                        top: 140,
                        width: 3,
                        height: 60,
                        background: "#2a2a2a",
                        borderRadius: "0 2px 2px 0"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: -3,
                        top: 120,
                        width: 3,
                        height: 30,
                        background: "#2a2a2a",
                        borderRadius: "2px 0 0 2px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: -3,
                        top: 162,
                        width: 3,
                        height: 54,
                        background: "#2a2a2a",
                        borderRadius: "2px 0 0 2px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: -3,
                        top: 224,
                        width: 3,
                        height: 54,
                        background: "#2a2a2a",
                        borderRadius: "2px 0 0 2px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 44,
                        overflow: "hidden",
                        background: "#fff",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/PhoneShell.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PhoneShell.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PhoneShell.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(PhoneShell, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = PhoneShell;
var _c;
__turbopack_context__.k.register(_c, "PhoneShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatusBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared status bar — identical across all screens
__turbopack_context__.s([
    "default",
    ()=>StatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatusBar({ bg = "#fff" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: 50,
            flexShrink: 0,
            background: bg,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 24px 8px",
            zIndex: 10
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "-0.3px",
                    color: "#000"
                },
                children: "13:31"
            }, void 0, false, {
                fileName: "[project]/src/components/StatusBar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "#000"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "11",
                        viewBox: "0 0 16 11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "3",
                                width: "2.5",
                                height: "8",
                                rx: ".5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusBar.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "4",
                                y: "2",
                                width: "2.5",
                                height: "9",
                                rx: ".5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusBar.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "0",
                                width: "2.5",
                                height: "11",
                                rx: ".5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusBar.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "12",
                                y: "0",
                                width: "2.5",
                                height: "11",
                                rx: ".5",
                                fill: "currentColor",
                                fillOpacity: ".35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StatusBar.tsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StatusBar.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            fontWeight: 700
                        },
                        children: "5G"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusBar.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            fontWeight: 700,
                            background: "#000",
                            color: "#fff",
                            padding: "1px 4px",
                            borderRadius: 3
                        },
                        children: "94"
                    }, void 0, false, {
                        fileName: "[project]/src/components/StatusBar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StatusBar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatusBar.tsx",
        lineNumber: 4,
        columnNumber: 5
    }, this);
}
_c = StatusBar;
var _c;
__turbopack_context__.k.register(_c, "StatusBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/HomeScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const topBg = "linear-gradient(180deg,#FCE4DA 0%,#FDEEE7 55%,#FFFFFF 100%)";
function HeaderIcons() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "22",
                viewBox: "0 0 20 22",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 1c-3.3 0-6 2.6-6 6v4.2c0 .8-.3 1.5-.9 2.1L2 14.5V16h16v-1.5l-1.1-1.2c-.6-.6-.9-1.3-.9-2.1V7c0-3.4-2.7-6-6-6z",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 18.5a2 2 0 004 0",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 16.5S1.5 11 1.5 5.5C1.5 3.01 3.51 1 6 1c1.65 0 3.1.82 4 2.07A4.97 4.97 0 0114 1c2.49 0 4.5 2.01 4.5 4.5 0 5.5-8.5 11-8.5 11z",
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "6.5",
                        r: "3.5",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 18c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HomeScreen.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = HeaderIcons;
function CatIcon({ src, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            flexShrink: 0,
            width: 62
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    overflow: "hidden",
                    background: "#F3E4DC"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: label,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 10,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                    fontWeight: 500,
                    whiteSpace: "nowrap"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HomeScreen.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c1 = CatIcon;
function PromoRow({ title, sub, ad, tiles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "22px 14px 4px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 17,
                                    fontWeight: 800,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                    marginTop: 2
                                },
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    ad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                            background: "#F0F0F0",
                            padding: "3px 6px",
                            borderRadius: 3,
                            fontWeight: 600
                        },
                        children: "AD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 55,
                        columnNumber: 16
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    overflowX: "auto",
                    scrollbarWidth: "none"
                },
                children: tiles.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            minWidth: 168,
                            width: 168,
                            height: 210,
                            borderRadius: 10,
                            overflow: "hidden",
                            flexShrink: 0,
                            background: "#eee"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: t.img,
                                alt: "",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    padding: "20px 10px 10px",
                                    background: "linear-gradient(0deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,0) 100%)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 800,
                                            color: "#fff"
                                        },
                                        children: t.big
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: "#fff",
                                            opacity: 0.9
                                        },
                                        children: t.small
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HomeScreen.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c2 = PromoRow;
function HomeScreen({ bag, stripProduct, onOpenStrip, onWishlist }) {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeScreen.useEffect": ()=>{
            const el = scrollRef.current;
            if (!el) return;
            const onScroll = {
                "HomeScreen.useEffect.onScroll": ()=>setIsSticky(el.scrollTop > 72)
            }["HomeScreen.useEffect.onScroll"];
            el.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "HomeScreen.useEffect": ()=>el.removeEventListener("scroll", onScroll)
            })["HomeScreen.useEffect"];
        }
    }["HomeScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes strip-border-pulse {
          0%, 100% {
            border-color: #FFCED8;
            box-shadow: 0 2px 8px rgba(255,63,108,0.08);
          }
          50% {
            border-color: #FF3F6C;
            box-shadow: 0 3px 14px rgba(255,63,108,0.20);
          }
        }
        .wishlist-strip-expanded {
          animation: strip-border-pulse 2.4s ease-in-out infinite;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: topBg,
                            flexShrink: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bg: "transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "2px 14px 10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "16",
                                        viewBox: "0 0 12 16",
                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 0C2.7 0 0 2.7 0 6c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6zm0 8.2a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 109,
                                            columnNumber: 72
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            flex: 1,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        },
                                        children: [
                                            "Deliver to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Shiwang Tiwari - D-148, Bhagat Singh..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 111,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "11",
                                        height: "7",
                                        viewBox: "0 0 11 7",
                                        style: {
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 1l4.5 4.5L10 1",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 113,
                                            columnNumber: 85
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 3,
                                            background: "#fff",
                                            borderRadius: 20,
                                            padding: "5px 10px 5px 12px",
                                            flexShrink: 0,
                                            marginLeft: 4,
                                            boxShadow: "0 1px 4px rgba(0,0,0,.08)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                },
                                                children: "₹0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 18,
                                                    height: 18,
                                                    borderRadius: "50%",
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                    color: "#fff",
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: "₹"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "0 14px 10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            background: "#fff",
                                            borderRadius: 24,
                                            padding: "9px 14px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                            boxShadow: "0 1px 4px rgba(0,0,0,.06)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/myntra-m.png",
                                                alt: "",
                                                style: {
                                                    width: 17,
                                                    height: 17,
                                                    objectFit: "contain"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 13,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                    flex: 1,
                                                    fontStyle: "italic"
                                                },
                                                children: '"Dresses"'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "15",
                                                height: "18",
                                                viewBox: "0 0 15 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "4.5",
                                                        y: "1",
                                                        width: "6",
                                                        height: "10",
                                                        rx: "3",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 75
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1.5 8.5a6 6 0 0012 0",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "7.5",
                                                        y1: "14.5",
                                                        x2: "7.5",
                                                        y2: "17",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 250
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "15",
                                                viewBox: "0 0 18 15",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "1",
                                                        y: "3.5",
                                                        width: "16",
                                                        height: "10.5",
                                                        rx: "2",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 75
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "8.5",
                                                        r: "3",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 163
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "6",
                                                        y: "1",
                                                        width: "4",
                                                        height: "2.5",
                                                        rx: ".5",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        strokeWidth: "1.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 229
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: onWishlist,
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderIcons, {}, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollRef,
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            background: "#fff",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onOpenStrip,
                                style: {
                                    position: "sticky",
                                    top: isSticky ? 10 : 0,
                                    zIndex: 50,
                                    background: "#fff",
                                    border: isSticky ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}` : "none",
                                    borderRadius: isSticky ? 12 : 0,
                                    margin: isSticky ? "0 14px" : "0",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: isSticky ? "7px 12px" : "0 14px",
                                    height: isSticky ? 52 : 0,
                                    overflow: "hidden",
                                    transition: "height 0.22s ease, padding 0.22s ease, box-shadow 0.22s ease, top 0.22s ease",
                                    cursor: "pointer",
                                    boxShadow: isSticky ? "0 3px 16px rgba(255,63,108,0.16), 0 1px 4px rgba(0,0,0,0.08)" : "none"
                                },
                                children: isSticky && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "relative",
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: stripProduct.imgs[0],
                                                alt: "",
                                                style: {
                                                    width: 32,
                                                    height: 40,
                                                    objectFit: "cover",
                                                    borderRadius: 5,
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.05em"
                                                    },
                                                    children: "From your wishlist"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11.5,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        fontWeight: 500,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "74 buyers your size bought this. Tap to see what they said."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "7",
                                            height: "12",
                                            viewBox: "0 0 7 12",
                                            fill: "none",
                                            style: {
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 1l5 5-5 5",
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                strokeWidth: "1.6",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wishlist-strip-expanded",
                                onClick: onOpenStrip,
                                style: {
                                    margin: "10px 14px 4px",
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkLt"],
                                    border: "1.5px solid #FFCED8",
                                    borderRadius: 12,
                                    padding: "12px 12px 12px 10px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    transition: "opacity 0.18s ease",
                                    opacity: isSticky ? 0.25 : 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: stripProduct.imgs[0],
                                                alt: "",
                                                style: {
                                                    width: 52,
                                                    height: 64,
                                                    objectFit: "cover",
                                                    borderRadius: 8,
                                                    border: "1.5px solid #FFCED8",
                                                    display: "block"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: -5,
                                                    right: -5,
                                                    width: 18,
                                                    height: 18,
                                                    borderRadius: "50%",
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: "0 1px 4px rgba(255,63,108,0.4)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "10",
                                                    height: "10",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10 2l1.8 5.5H18l-4.9 3.6 1.9 5.8L10 13.4 5 16.9l1.9-5.8L2 7.5h6.2z",
                                                        fill: "#fff"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 9.5,
                                                    fontWeight: 700,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.05em",
                                                    marginBottom: 3
                                                },
                                                children: "From your wishlist"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12.5,
                                                    fontWeight: 700,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                    marginBottom: 3,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: stripProduct.brand
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                    lineHeight: 1.4
                                                },
                                                children: "74 buyers your size bought this. Here is what they said."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "7",
                                        height: "12",
                                        viewBox: "0 0 7 12",
                                        fill: "none",
                                        style: {
                                            flexShrink: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 1l5 5-5 5",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                            strokeWidth: "1.6",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "12px 14px 0",
                                    borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                    gap: 26
                                },
                                children: [
                                    [
                                        "ALL",
                                        "MEN",
                                        "WOMEN",
                                        "KIDS"
                                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                paddingBottom: 10,
                                                borderBottom: i === 0 ? `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}` : "2px solid transparent",
                                                fontSize: 12,
                                                fontWeight: 700,
                                                letterSpacing: "0.03em",
                                                color: i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                            },
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginLeft: "auto",
                                            marginBottom: 8
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 26,
                                                height: 26,
                                                borderRadius: 8,
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 3
                                                },
                                                children: [
                                                    0,
                                                    1,
                                                    2,
                                                    3
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 4,
                                                            height: 4,
                                                            borderRadius: "50%",
                                                            background: "#fff"
                                                        }
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 42
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 14,
                                    overflowX: "auto",
                                    padding: "12px 14px 16px",
                                    scrollbarWidth: "none"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                        src: "/home/cat-fashion.png",
                                        label: "Fashion"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                        src: "/home/cat-beauty.png",
                                        label: "Beauty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                        src: "/home/cat-homeliving.png",
                                        label: "Homeliving"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                        src: "/home/cat-footwear.png",
                                        label: "Footwear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CatIcon, {
                                        src: "/home/cat-accessories.png",
                                        label: "Accessories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "0 14px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            borderRadius: 14,
                                            overflow: "hidden"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/home/hero-banner.png",
                                                alt: "",
                                                style: {
                                                    width: "100%",
                                                    display: "block"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    position: "absolute",
                                                    right: 10,
                                                    bottom: 10,
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: "50%",
                                                    background: "rgba(255,255,255,.9)",
                                                    border: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "8",
                                                    height: "12",
                                                    viewBox: "0 0 8 12",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 1l5.5 5L1 11",
                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        strokeWidth: "1.6",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 75
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 5,
                                            padding: "10px 0 4px"
                                        },
                                        children: Array.from({
                                            length: 10
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: i === 0 ? 14 : 5,
                                                    height: 5,
                                                    borderRadius: 3,
                                                    background: i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"] : "#DADADA"
                                                }
                                            }, i, false, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "6px 14px 4px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/home/paylater-banner.png",
                                    alt: "",
                                    style: {
                                        width: "100%",
                                        borderRadius: 8,
                                        display: "block"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "20px 14px 4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 17,
                                            fontWeight: 800,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            marginBottom: 12
                                        },
                                        children: "Continue Browsing These Brands"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 10,
                                            overflowX: "auto",
                                            scrollbarWidth: "none"
                                        },
                                        children: [
                                            {
                                                img: "/home/cb-boots.png",
                                                brand: "Roadster",
                                                cat: "Boots",
                                                price: "₹1,617",
                                                mrp: "₹7,995",
                                                off: "80% OFF",
                                                rating: "3.8"
                                            },
                                            {
                                                img: "/home/cb-shirt.png",
                                                brand: "Suo",
                                                cat: "Shirts",
                                                price: "₹1,910",
                                                mrp: "₹4,899",
                                                off: "61% OFF",
                                                rating: null
                                            }
                                        ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: 150,
                                                    width: 150,
                                                    flexShrink: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: "relative",
                                                            height: 180,
                                                            borderRadius: 10,
                                                            overflow: "hidden",
                                                            background: "#eee"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: t.img,
                                                                alt: "",
                                                                style: {
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    objectFit: "cover"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 21
                                                            }, this),
                                                            t.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: 8,
                                                                    left: 8,
                                                                    background: "#fff",
                                                                    borderRadius: 5,
                                                                    padding: "2px 6px",
                                                                    fontSize: 10,
                                                                    fontWeight: 700,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: 3
                                                                },
                                                                children: [
                                                                    t.rating,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "8",
                                                                        height: "8",
                                                                        viewBox: "0 0 8 8",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M4 0l.8 1.8H7L5.2 3.2l.7 2L4 4l-1.9 1.2.7-2L1 1.8h2.2z",
                                                                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 79
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: 8,
                                                                    right: 8
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "16",
                                                                    height: "15",
                                                                    viewBox: "0 0 16 15",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M8 14S1.2 9.6 1.2 4.9C1.2 2.5 3.1.9 5.2.9c1.2 0 2.4.6 2.8 1.5C8.4 1.5 9.6.9 10.8.9c2.1 0 4 1.6 4 4C14.8 9.6 8 14 8 14z",
                                                                        fill: "rgba(255,255,255,.85)",
                                                                        stroke: "#fff"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 83
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            fontWeight: 700,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                            marginTop: 6
                                                        },
                                                        children: t.brand
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"]
                                                        },
                                                        children: t.cat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "baseline",
                                                            gap: 5,
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                                },
                                                                children: t.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    textDecoration: "line-through"
                                                                },
                                                                children: t.mrp
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                                    fontWeight: 600
                                                                },
                                                                children: [
                                                                    "(",
                                                                    t.off,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromoRow, {
                                title: "Featured Brands",
                                sub: "Spotlight your style with brands",
                                ad: true,
                                tiles: [
                                    {
                                        img: "/home/featured-1.png",
                                        big: "Up To 70% Off",
                                        small: "Global Trends · H&M"
                                    },
                                    {
                                        img: "/home/featured-2.png",
                                        big: "Up To 50% Off",
                                        small: "Wear Your Attitude · Jack & Jones"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "22px 14px 4px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 17,
                                            fontWeight: 800,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                        },
                                        children: "Hand Picked For You"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                            marginTop: 2,
                                            marginBottom: 12
                                        },
                                        children: "Stories you would love!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            borderRadius: 12,
                                            overflow: "hidden",
                                            height: 220
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/home/handpicked-banner.png",
                                            alt: "The Rakhi Shop",
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                            lineNumber: 342,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PromoRow, {
                                title: "Sponsored Products",
                                sub: "",
                                ad: true,
                                tiles: [
                                    {
                                        img: "/home/sponsored-1.png",
                                        big: "Luxury Perfumes",
                                        small: "Up to 80% off"
                                    },
                                    {
                                        img: "/home/sponsored-2.png",
                                        big: "Top Handle Bags",
                                        small: "Up to 75% off"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bag: bag,
                        onHome: ()=>{},
                        active: "home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HomeScreen.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HomeScreen.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HomeScreen.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(HomeScreen, "8NZOwdSvd5WbHfjk4V4RGu+K98E=");
_c3 = HomeScreen;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "HeaderIcons");
__turbopack_context__.k.register(_c1, "CatIcon");
__turbopack_context__.k.register(_c2, "PromoRow");
__turbopack_context__.k.register(_c3, "HomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/ProductScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
// Search bar row — sits directly below the shared StatusBar
function SearchBar({ onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "0 14px 10px",
            background: "#fff",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "16",
                    viewBox: "0 0 20 16",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19 8H1M8 1L1 8l7 7",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    background: "#F5F5F6",
                    borderRadius: 24,
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/myntra-m.png",
                        alt: "",
                        style: {
                            width: 15,
                            height: 15,
                            objectFit: "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            color: "#ABABAB",
                            flex: 1
                        },
                        children: "Search in Myntra"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "15",
                        height: "15",
                        viewBox: "0 0 15 15",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "6.5",
                                cy: "6.5",
                                r: "5",
                                stroke: "#ABABAB",
                                strokeWidth: "1.4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10.5 10.5l3 3",
                                stroke: "#ABABAB",
                                strokeWidth: "1.4",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 18.5S2 13 2 7C2 4.24 4.24 2 7 2c1.65 0 3.1.82 4 2.07A4.97 4.97 0 0115 2c2.76 0 5 2.24 5 5 0 6-9 11.5-9 11.5z",
                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "22",
                viewBox: "0 0 20 22",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "1",
                        y: "6",
                        width: "18",
                        height: "15",
                        rx: "1.5",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.5 6V5a3.5 3.5 0 017 0v1",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/ProductScreen.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = SearchBar;
function ProductScreen({ prod, imgI, size, onBack, onSetImgI, onSetSize, onVerdict, onSize }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "product",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchBar, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        overflowY: "auto",
                        background: "#fff"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "relative",
                                height: 380,
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: prod.imgs[imgI],
                                    alt: "",
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        display: "block"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 46,
                                        right: 8,
                                        width: 42,
                                        height: 42,
                                        borderRadius: "50%",
                                        border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}`,
                                        overflow: "hidden",
                                        background: "#fff",
                                        zIndex: 5
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: prod.reviewImg,
                                        alt: "",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 8,
                                        right: 8,
                                        background: "rgba(255,255,255,.96)",
                                        borderRadius: 6,
                                        padding: "4px 8px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                        fontSize: 11,
                                        fontWeight: 700,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                        boxShadow: "0 1px 6px rgba(0,0,0,.18)",
                                        zIndex: 5
                                    },
                                    children: [
                                        prod.rating,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "10",
                                            height: "10",
                                            viewBox: "0 0 10 10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5 1l.9 2H8.5L6 5l.9 2.3L5 6 3.1 7.3 4 5 1.5 3H4.1z",
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["amber"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                lineNumber: 65,
                                                columnNumber: 63
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                fontWeight: 400
                                            },
                                            children: [
                                                "| ",
                                                prod.ratingCount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: 8,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        display: "flex",
                                        gap: 4,
                                        zIndex: 5
                                    },
                                    children: prod.imgs.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>onSetImgI(i),
                                            style: {
                                                width: imgI === i ? 18 : 4,
                                                height: 3,
                                                borderRadius: 2,
                                                background: imgI === i ? "#fff" : "rgba(255,255,255,.5)",
                                                cursor: "pointer",
                                                transition: "all .2s"
                                            }
                                        }, i, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1",
                                            y: "5",
                                            width: "7",
                                            height: "12",
                                            rx: "1",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 79,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "12",
                                            y: "1",
                                            width: "7",
                                            height: "16",
                                            rx: "1",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 79,
                                            columnNumber: 165
                                        }, this)
                                    ]
                                }, "c", true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "18",
                                    viewBox: "0 0 20 18",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 16.5C10 16.5 1.5 11 1.5 5.5C1.5 3.01 3.51 1 6 1C7.5 1 8.83 1.74 9.67 2.87L10 3.31L10.33 2.87C11.17 1.74 12.5 1 14 1C16.49 1 18.5 3.01 18.5 5.5C18.5 11 10 16.5 10 16.5Z",
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        strokeWidth: "1.3",
                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                        lineNumber: 80,
                                        columnNumber: 83
                                    }, this)
                                }, "h", false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "16",
                                            cy: "4",
                                            r: "2.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 83
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "16",
                                            cy: "16",
                                            r: "2.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 149
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "4",
                                            cy: "10",
                                            r: "2.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 216
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 9l8-4M6 11l8 4",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 282
                                        }, this)
                                    ]
                                }, "s", true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this)
                            ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "11px 0",
                                        borderRight: i < 2 ? `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}` : "none"
                                    },
                                    children: icon
                                }, i, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "12px 14px 24px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 4,
                                        fontSize: 13,
                                        lineHeight: 1.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 800,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                            },
                                            children: [
                                                prod.brand,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                            },
                                            children: prod.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        marginBottom: 12,
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                textDecoration: "line-through"
                                            },
                                            children: [
                                                "MRP ₹",
                                                prod.mrp.toLocaleString("en-IN")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 15,
                                                fontWeight: 800,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                            },
                                            children: [
                                                "₹",
                                                prod.price.toLocaleString("en-IN")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orange"]
                                            },
                                            children: [
                                                "(",
                                                prod.discount,
                                                "% OFF)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: onVerdict,
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkLt"],
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}`,
                                        borderRadius: 8,
                                        padding: "9px 10px",
                                        marginBottom: 14,
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            style: {
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 0l.9 3H10L7.4 4.8l.9 2.9L6 6.3 3.7 7.7l.9-2.9L2 3h3.1z",
                                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                lineNumber: 106,
                                                columnNumber: 89
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        marginBottom: 2
                                                    },
                                                    children: [
                                                        "AI Buyer Verdict — ",
                                                        prod.reviewCount,
                                                        " reviews"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                        lineHeight: 1.4,
                                                        overflow: "hidden",
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: "vertical"
                                                    },
                                                    children: prod.verdict
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "6",
                                            height: "10",
                                            viewBox: "0 0 6 10",
                                            fill: "none",
                                            style: {
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1 1l4 4-4 4",
                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                strokeWidth: "1.4",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                lineNumber: 111,
                                                columnNumber: 99
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                    },
                                                    children: [
                                                        "Size: ",
                                                        size || prod.sizes[0]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        fontWeight: 500
                                                    },
                                                    children: "Size Chart ›"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "6px 10px",
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                borderRadius: 6,
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        "We Suggest Size ",
                                                        prod.sizes[1] || prod.sizes[0]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: "#6B4EFF",
                                                        background: "#F0EEFF",
                                                        padding: "2px 7px",
                                                        borderRadius: 10,
                                                        fontWeight: 500
                                                    },
                                                    children: [
                                                        "✦ Why ",
                                                        prod.sizes[1] || prod.sizes[0],
                                                        " for me?"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 8
                                            },
                                            children: prod.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onSetSize(s),
                                                    style: {
                                                        minWidth: 48,
                                                        height: 48,
                                                        padding: s.length > 2 ? "0 12px" : "0",
                                                        border: `${size === s ? 2 : 1.5}px solid ${size === s ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                        borderRadius: 8,
                                                        background: size === s ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"] : "#fff",
                                                        color: size === s ? "#fff" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        cursor: "pointer",
                                                        fontFamily: "inherit"
                                                    },
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 10,
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                flex: 1,
                                                padding: "12px 0",
                                                border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}`,
                                                borderRadius: 26,
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                background: "#fff",
                                                cursor: "pointer",
                                                fontFamily: "inherit",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "15",
                                                    viewBox: "0 0 14 15",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: ".5",
                                                            y: "4",
                                                            width: "13",
                                                            height: "10.5",
                                                            rx: "1",
                                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                            strokeWidth: "1.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4.5 4V3a2.5 2.5 0 015 0v1",
                                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                            strokeWidth: "1.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this),
                                                "Buy Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onSize,
                                            style: {
                                                flex: 1,
                                                padding: "12px 0",
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                border: "none",
                                                borderRadius: 26,
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: "#fff",
                                                cursor: "pointer",
                                                fontFamily: "inherit",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 6
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "15",
                                                    viewBox: "0 0 14 15",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: ".5",
                                                            y: "4",
                                                            width: "13",
                                                            height: "10.5",
                                                            rx: "1",
                                                            stroke: "#fff",
                                                            strokeWidth: "1.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M4.5 4V3a2.5 2.5 0 015 0v1",
                                                            stroke: "#fff",
                                                            strokeWidth: "1.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                "Add to Bag"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                marginBottom: 10
                                            },
                                            children: "Delivery & Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                borderRadius: 8,
                                                padding: "9px 12px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "10",
                                                    height: "13",
                                                    viewBox: "0 0 10 13",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 0C2.8 0 1 1.8 1 4c0 3 4 7.5 4 7.5S9 7 9 4C9 1.8 7.2 0 5 0zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
                                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 77
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        flex: 1,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: "Shiwang Tiwari - D-148, Bhagat Singh Colon..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                        textDecoration: "underline",
                                                        textDecorationStyle: "dashed",
                                                        flexShrink: 0
                                                    },
                                                    children: "Change"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}`,
                                                borderRadius: 8,
                                                padding: "10px 12px",
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkLt"],
                                                marginBottom: 8
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 18,
                                                            height: 18,
                                                            borderRadius: "50%",
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "10",
                                                            height: "8",
                                                            viewBox: "0 0 10 8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 4l2.5 2.5L9 1",
                                                                stroke: "#fff",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 67
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    fontWeight: 700,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    letterSpacing: "0.06em",
                                                                    textTransform: "uppercase"
                                                                },
                                                                children: "STANDARD"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    fontWeight: 600,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                                },
                                                                children: prod.delivery.replace("Delivery on", "Delivery by")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: "right"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    textDecoration: "line-through"
                                                                },
                                                                children: [
                                                                    "MRP ₹",
                                                                    prod.mrp.toLocaleString("en-IN")
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                                },
                                                                children: [
                                                                    "₹",
                                                                    prod.price,
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"]
                                                                        },
                                                                        children: [
                                                                            "(",
                                                                            prod.discount,
                                                                            "% OFF)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 100
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                marginBottom: 10
                                            },
                                            children: [
                                                "Seller: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                    },
                                                    children: [
                                                        prod.seller.split(" ").slice(0, 2).join(" "),
                                                        " ›"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "32",
                                                            height: "22",
                                                            viewBox: "0 0 32 22",
                                                            fill: "none",
                                                            style: {
                                                                flexShrink: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "1",
                                                                    y: "1",
                                                                    width: "30",
                                                                    height: "20",
                                                                    rx: "3",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    strokeWidth: "1.2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "1",
                                                                    y: "6",
                                                                    width: "30",
                                                                    height: "4",
                                                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    fillOpacity: ".3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "4",
                                                                    y: "13",
                                                                    width: "8",
                                                                    height: "2",
                                                                    rx: "1",
                                                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "26",
                                                                    cy: "16",
                                                                    r: "4",
                                                                    fill: "#fff",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                    strokeWidth: "1.2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M24 16l1.3 1.3L28 14",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                    strokeWidth: "1.1",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 11,
                                                                        fontWeight: 600,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                                    },
                                                                    children: "Pay on Delivery is available"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                                                                    },
                                                                    children: "₹10 additional fee applicable"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 10
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "32",
                                                            height: "22",
                                                            viewBox: "0 0 32 22",
                                                            fill: "none",
                                                            style: {
                                                                flexShrink: 0
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M6 11C6 7.13 9.13 4 13 4h6",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    strokeWidth: "1.2",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M22 1l4 3-4 3",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    strokeWidth: "1.2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M26 11C26 14.87 22.87 18 19 18h-6",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    strokeWidth: "1.2",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M10 15l-4 3 4 3",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                    strokeWidth: "1.2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "26",
                                                                    cy: "16",
                                                                    r: "4",
                                                                    fill: "#fff",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                    strokeWidth: "1.2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M24 16l1.3 1.3L28 14",
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                    strokeWidth: "1.1",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                fontWeight: 600,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                            },
                                                            children: "Hassle free 7 days Return & Exchange"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"],
                                        margin: "4px 0 16px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr",
                                                gap: "12px 16px",
                                                marginBottom: 14
                                            },
                                            children: [
                                                [
                                                    "Weave Pattern",
                                                    "Regular"
                                                ],
                                                [
                                                    "Transparency",
                                                    "Opaque"
                                                ],
                                                [
                                                    "Fit",
                                                    "Regular Fit"
                                                ],
                                                [
                                                    "Sustainable",
                                                    "Regular"
                                                ],
                                                [
                                                    "Brand Fit Name",
                                                    "Standard"
                                                ],
                                                [
                                                    "Fabrics",
                                                    "Cotton"
                                                ]
                                            ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                fontWeight: 700,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                                marginBottom: 1
                                                            },
                                                            children: l
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"]
                                                            },
                                                            children: v
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, l, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"],
                                                marginBottom: 12
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            [
                                                "Product Details",
                                                `${prod.name}, has a Spread Collar, Long Regular Sleeves.`
                                            ],
                                            [
                                                "Size & Fit",
                                                `Brand Fit: Standard\nFit: Regular Fit\nThe model (height 6') is wearing a size ${prod.sizes[0]}`
                                            ],
                                            [
                                                "Material & Care",
                                                "Cotton, Linen blend"
                                            ]
                                        ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            fontWeight: 700,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                            marginBottom: 3
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                            lineHeight: 1.6,
                                                            whiteSpace: "pre-line"
                                                        },
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 1,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"],
                                        margin: "0 0 16px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: 48,
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 48,
                                                        height: 48,
                                                        borderRadius: "50%",
                                                        border: "2px solid #4CAF50",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        position: "relative",
                                                        overflow: "hidden"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "48",
                                                        height: "48",
                                                        viewBox: "0 0 48 48",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "24",
                                                                cy: "24",
                                                                r: "22",
                                                                fill: "#fff",
                                                                stroke: "#4CAF50",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 20c0-6.6 5.4-12 12-12s12 5.4 12 12",
                                                                fill: "none",
                                                                stroke: "#E53935",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 20v8c0 6.6 5.4 12 12 12s12-5.4 12-12v-8",
                                                                fill: "none",
                                                                stroke: "#E53935",
                                                                strokeWidth: "2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "18",
                                                                y: "22",
                                                                width: "12",
                                                                height: "3",
                                                                rx: "1",
                                                                fill: "#E53935"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "18",
                                                                y: "27",
                                                                width: "12",
                                                                height: "3",
                                                                rx: "1",
                                                                fill: "#E53935"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                x: "24",
                                                                y: "20",
                                                                textAnchor: "middle",
                                                                fontSize: "5",
                                                                fontWeight: "800",
                                                                fill: "#E53935",
                                                                children: "ORIGINAL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        textAlign: "center",
                                                        lineHeight: 1.3
                                                    },
                                                    children: [
                                                        "Genuine",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 122
                                                        }, this),
                                                        "Product"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 48,
                                                        height: 48,
                                                        borderRadius: "50%",
                                                        border: "2px solid #4CAF50",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 28 28",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "14",
                                                                cy: "14",
                                                                r: "12",
                                                                stroke: "#4CAF50",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 14l4 4 8-8",
                                                                stroke: "#4CAF50",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        textAlign: "center",
                                                        lineHeight: 1.3
                                                    },
                                                    children: [
                                                        "Quality",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 122
                                                        }, this),
                                                        "Checked"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                marginBottom: 3
                                            },
                                            children: "Easy 7 days returns and exchanges"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                lineHeight: 1.5
                                            },
                                            children: "Choose to return or exchange for a different size (if available) within 7 days."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                marginBottom: 12
                                            },
                                            children: "Ratings & Reviews"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                marginBottom: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                        borderRadius: 6,
                                                        padding: "5px 10px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 5,
                                                        flexShrink: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 14,
                                                                fontWeight: 800,
                                                                color: "#fff"
                                                            },
                                                            children: prod.rating
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "12",
                                                            height: "12",
                                                            viewBox: "0 0 12 12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 1l1.1 2.6H10L7.6 5.5l.9 2.8L6 6.8l-2.5 1.5.9-2.8L2 3.6h2.9z",
                                                                fill: "#fff"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 67
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 6,
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                        borderRadius: 6,
                                                        padding: "5px 10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"]
                                                            },
                                                            children: [
                                                                prod.reviews * 5 + 99,
                                                                " ratings"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]
                                                            },
                                                            children: "|"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"]
                                                            },
                                                            children: [
                                                                prod.reviews,
                                                                " reviews"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "6",
                                                            height: "10",
                                                            viewBox: "0 0 6 10",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 1l4 4-4 4",
                                                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                strokeWidth: "1.3",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 77
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 6,
                                                marginBottom: 14,
                                                overflowX: "auto",
                                                scrollbarWidth: "none"
                                            },
                                            children: [
                                                prod.reviewImg,
                                                prod.cardImg,
                                                prod.imgs[1] || prod.cardImg
                                            ].map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 80,
                                                        height: 80,
                                                        borderRadius: 6,
                                                        overflow: "hidden",
                                                        flexShrink: 0,
                                                        position: "relative",
                                                        background: "#f0f0f0"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: img,
                                                            alt: "",
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this),
                                                        i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                bottom: 3,
                                                                left: 3,
                                                                background: "rgba(0,0,0,.55)",
                                                                borderRadius: 3,
                                                                padding: "1px 4px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "7",
                                                                    height: "7",
                                                                    viewBox: "0 0 7 7",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                        points: "2,1 2,6 6,3.5",
                                                                        fill: "#fff"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 69
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 8,
                                                                        color: "#fff",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "0:42"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 23
                                                        }, this),
                                                        i === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                inset: 0,
                                                                background: "rgba(0,0,0,.52)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 13,
                                                                    fontWeight: 700,
                                                                    color: "#fff"
                                                                },
                                                                children: [
                                                                    "+",
                                                                    prod.reviews - 3
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                    },
                                                    children: [
                                                        "Customer Reviews (",
                                                        prod.reviews,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        textDecoration: "underline"
                                                    },
                                                    children: "View All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 8,
                                                overflowX: "auto",
                                                scrollbarWidth: "none",
                                                paddingBottom: 4
                                            },
                                            children: [
                                                {
                                                    stars: 5,
                                                    date: "Jun 04, 2026",
                                                    size: prod.sizes[1] || prod.sizes[0],
                                                    text: prod.reviewText,
                                                    name: prod.reviewCaption.split("·")[0].trim()
                                                },
                                                {
                                                    stars: 5,
                                                    date: "Jun 15, 2026",
                                                    size: prod.sizes[0],
                                                    text: `This ${prod.brand} ${prod.name} is a solid pick if you're looking for that effortless, breezy style. read more`,
                                                    name: "Pavan"
                                                },
                                                {
                                                    stars: 5,
                                                    date: "Jun 10, 2026",
                                                    size: prod.sizes[prod.sizes.length - 1],
                                                    text: `The ${prod.colour} ${prod.name} has a stylish and elegant design. The fabric quality exceeded expectations. read more`,
                                                    name: "Mohd Arshad Siddiqui"
                                                }
                                            ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        minWidth: "75%",
                                                        maxWidth: "75%",
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                        borderRadius: 10,
                                                        padding: "10px 12px",
                                                        flexShrink: 0,
                                                        background: "#fff"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 6,
                                                                marginBottom: 8
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                        borderRadius: 10,
                                                                        padding: "2px 7px",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 3,
                                                                        flexShrink: 0
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                fontSize: 11,
                                                                                fontWeight: 700,
                                                                                color: "#fff"
                                                                            },
                                                                            children: r.stars
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                            lineNumber: 327,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "9",
                                                                            height: "9",
                                                                            viewBox: "0 0 9 9",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M4.5 1l.8 1.9H7.8L5.5 4.6l.8 2.2L4.5 5.6 2.7 6.8l.8-2.2L1.2 2.9h2.5z",
                                                                                fill: "#fff"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                                lineNumber: 328,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                            lineNumber: 328,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 326,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                                        flex: 1
                                                                    },
                                                                    children: r.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                                        borderRadius: 6,
                                                                        padding: "2px 7px",
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                                        flexShrink: 0
                                                                    },
                                                                    children: [
                                                                        "Size: ",
                                                                        r.size
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                                lineHeight: 1.55,
                                                                marginBottom: 8,
                                                                overflow: "hidden",
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: 3,
                                                                WebkitBoxOrient: "vertical"
                                                            },
                                                            children: r.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 5
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "12",
                                                                    height: "12",
                                                                    viewBox: "0 0 12 12",
                                                                    fill: "none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "6",
                                                                            cy: "6",
                                                                            r: "5",
                                                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                            strokeWidth: "1.1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 83
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3.5 6l1.8 1.8 3.2-3.6",
                                                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                            strokeWidth: "1.1",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                            lineNumber: 339,
                                                                            columnNumber: 145
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 339,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"]
                                                                    },
                                                                    children: r.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                                    lineNumber: 340,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/ProductScreen.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/ProductScreen.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/screens/ProductScreen.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/ProductScreen.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c1 = ProductScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "SearchBar");
__turbopack_context__.k.register(_c1, "ProductScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/SizeScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SizeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
function SizeScreen({ prod, size, onSetSize, onBack, onAddToBag }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "size",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: prod.imgs[0],
                    alt: "",
                    style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.35)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "#fff",
                        borderRadius: "18px 18px 0 0",
                        padding: "0 16px 28px",
                        boxShadow: "0 -6px 24px rgba(0,0,0,.18)",
                        zIndex: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                padding: "10px 0 4px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 34,
                                    height: 4,
                                    borderRadius: 2,
                                    background: "#D4D5D9"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                    },
                                    children: [
                                        "Sizes",
                                        prod.sizes.length > 1 ? ` : ${prod.sizes.length}` : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 13,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        fontWeight: 500
                                    },
                                    children: "Size Chart ›"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 10,
                                marginBottom: 20
                            },
                            children: prod.sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSetSize(s),
                                    style: {
                                        width: s.length > 2 ? "auto" : 56,
                                        height: 56,
                                        padding: s.length > 2 ? "0 16px" : "0",
                                        border: `${size === s ? 2 : 1.5}px solid ${size === s ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                        borderRadius: 8,
                                        background: size === s ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"] : "#fff",
                                        color: size === s ? "#fff" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                        fontSize: 14,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "inherit",
                                        transition: "all .12s"
                                    },
                                    children: s
                                }, s, false, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                    },
                                    children: [
                                        "₹",
                                        prod.price.toLocaleString("en-IN")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                        marginTop: 2
                                    },
                                    children: [
                                        "Seller: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                fontWeight: 600
                                            },
                                            children: prod.seller
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                            lineNumber: 48,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onBack,
                                    style: {
                                        flex: 1,
                                        padding: "13px 0",
                                        border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                        borderRadius: 6,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                        background: "#fff",
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "Buy Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onAddToBag,
                                    disabled: !size,
                                    style: {
                                        flex: 1,
                                        padding: "13px 0",
                                        background: size ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"] : "#D4D5D9",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 6,
                                        fontSize: 14,
                                        fontWeight: 700,
                                        cursor: size ? "pointer" : "default",
                                        fontFamily: "inherit",
                                        transition: "background .12s"
                                    },
                                    children: "Add to Bag"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SizeScreen.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/SizeScreen.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/screens/SizeScreen.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/SizeScreen.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = SizeScreen;
var _c;
__turbopack_context__.k.register(_c, "SizeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/SplashScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
"use client";
;
;
function SplashScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "splash",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/myntra-logo.png",
                alt: "Myntra",
                style: {
                    width: 130,
                    objectFit: "contain"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/screens/SplashScreen.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/screens/SplashScreen.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/SplashScreen.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/SuccessScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuccessScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function BNav({ bag }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
            background: "#fff",
            display: "flex",
            paddingBottom: 18,
            paddingTop: 2,
            flexShrink: 0
        },
        children: [
            {
                id: "home",
                label: "Home"
            },
            {
                id: "fwd",
                label: "Under ₹999"
            },
            {
                id: "now",
                label: "From 30 min"
            },
            {
                id: "luxe",
                label: "Luxe"
            },
            {
                id: "bag",
                label: "Bag"
            }
        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "6px 2px 0",
                    borderTop: item.id === "bag" ? `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}` : "2px solid transparent",
                    marginTop: -2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative"
                        },
                        children: item.id === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/myntra-m.png",
                            alt: "M",
                            style: {
                                width: 24,
                                height: 24,
                                objectFit: "contain"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                            lineNumber: 21,
                            columnNumber: 17
                        }, this) : item.id === "bag" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "22",
                                    viewBox: "0 0 20 22",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1",
                                            y: "6",
                                            width: "18",
                                            height: "15",
                                            rx: "1.5",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                            lineNumber: 24,
                                            columnNumber: 79
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6.5 6V5a3.5 3.5 0 017 0v1",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                            lineNumber: 24,
                                            columnNumber: 163
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                    lineNumber: 24,
                                    columnNumber: 19
                                }, this),
                                bag > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        position: "absolute",
                                        top: -4,
                                        right: -7,
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        color: "#fff",
                                        borderRadius: "50%",
                                        width: 15,
                                        height: 15,
                                        fontSize: 9,
                                        fontWeight: 700,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: bag
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                    lineNumber: 25,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 20
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: item.id === "fwd" ? 10 : 9,
                                fontWeight: 800,
                                fontStyle: item.id === "now" ? "italic" : "normal",
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                            },
                            children: item.id === "fwd" ? "fwd" : item.id === "now" ? "mnow" : "LUXE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                            lineNumber: 27,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 9,
                            marginTop: 2,
                            color: item.id === "bag" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                            fontWeight: item.id === "bag" ? 700 : 400
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, item.id, true, {
                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = BNav;
function SuccessScreen({ prod, size, bag, onWishlist }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "success",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexShrink: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "17",
                        height: "18",
                        viewBox: "0 0 17 18",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: ".5",
                                y: "5",
                                width: "16",
                                height: "12.5",
                                rx: "1.5",
                                stroke: "#fff",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                lineNumber: 44,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5 5V4a3.5 3.5 0 017 0v1",
                                stroke: "#fff",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                lineNumber: 44,
                                columnNumber: 156
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#fff"
                        },
                        children: "Successfully moved item to bag"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: "16px 16px 0",
                    overflowY: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                            borderRadius: 8,
                            padding: 14,
                            display: "flex",
                            gap: 12,
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: prod.cardImg,
                                alt: "",
                                style: {
                                    width: 64,
                                    height: 80,
                                    objectFit: "cover",
                                    borderRadius: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                        },
                                        children: prod.brand
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                            marginBottom: 8,
                                            lineHeight: 1.4
                                        },
                                        children: prod.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 8,
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "3px 10px",
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                    borderRadius: 4,
                                                    fontSize: 11
                                                },
                                                children: [
                                                    "Size: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 120
                                                    }, this),
                                                    " ▼"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "3px 10px",
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                    borderRadius: 4,
                                                    fontSize: 11
                                                },
                                                children: [
                                                    "Qty: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 119
                                                    }, this),
                                                    " ▼"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 700,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                        },
                                        children: [
                                            "₹",
                                            prod.price.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                            marginTop: 3
                                        },
                                        children: [
                                            "14 days return  |  ",
                                            prod.delivery
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            width: "100%",
                            padding: "14px 0",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            fontSize: 14,
                            fontWeight: 700,
                            cursor: "pointer",
                            marginBottom: 10,
                            fontFamily: "inherit"
                        },
                        children: [
                            "Go to Bag (",
                            bag,
                            " item",
                            bag !== 1 ? "s" : "",
                            ") ›"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onWishlist,
                        style: {
                            width: "100%",
                            padding: "13px 0",
                            background: "#fff",
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                            border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                            borderRadius: 6,
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "inherit"
                        },
                        children: "Continue Shopping from Wishlist"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BNav, {
                bag: bag
            }, void 0, false, {
                fileName: "[project]/src/components/screens/SuccessScreen.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/SuccessScreen.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = SuccessScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "BNav");
__turbopack_context__.k.register(_c1, "SuccessScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/VerdictScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerdictScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VerdictScreen({ prod, q, ans, busy, onBack, onSetQ, onAsk, onSize, onWishlist }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "verdict",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                position: "relative",
                overflow: "hidden",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: prod.imgs[0],
                    alt: "",
                    style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.35)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "#fff",
                        borderRadius: "18px 18px 0 0",
                        height: "87%",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 -6px 24px rgba(0,0,0,.18)",
                        zIndex: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                paddingTop: 10,
                                paddingBottom: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 34,
                                    height: 4,
                                    borderRadius: 2,
                                    background: "#D4D5D9"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "0 16px 12px",
                                borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: prod.cardImg,
                                    alt: "",
                                    style: {
                                        width: 50,
                                        height: 64,
                                        objectFit: "cover",
                                        borderRadius: 4,
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                            },
                                            children: prod.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap"
                                            },
                                            children: prod.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                marginTop: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                                    },
                                                    children: [
                                                        "₹",
                                                        prod.price.toLocaleString("en-IN")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                        fontWeight: 600
                                                    },
                                                    children: [
                                                        prod.discount,
                                                        "% OFF"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onBack,
                                    style: {
                                        width: 26,
                                        height: 26,
                                        borderRadius: "50%",
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                        background: "#f5f5f5",
                                        fontSize: 14,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "inherit"
                                    },
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: "auto",
                                minHeight: 0,
                                padding: "14px 16px 20px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkLt"],
                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}`,
                                        borderRadius: 10,
                                        padding: "12px 14px",
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "12",
                                                    height: "12",
                                                    viewBox: "0 0 12 12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 0l.8 3H10L7.4 4.8l1 3L6 6.5 3.6 7.8l1-3L2 3h3.2z",
                                                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 65
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.06em"
                                                    },
                                                    children: "AI Buyer Verdict"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginLeft: "auto",
                                                        fontSize: 10,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                                                    },
                                                    children: [
                                                        prod.reviewCount,
                                                        " reviews"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 13,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                lineHeight: 1.65,
                                                margin: 0
                                            },
                                            children: prod.verdict
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                marginBottom: 8
                                            },
                                            children: "Ask about this item"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 8,
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: ref,
                                                    value: q,
                                                    onChange: (e)=>onSetQ(e.target.value),
                                                    onKeyDown: (e)=>e.key === "Enter" && onAsk(),
                                                    placeholder: "e.g. Will this work for office casual?",
                                                    style: {
                                                        flex: 1,
                                                        padding: "9px 12px",
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                        borderRadius: 6,
                                                        fontSize: 12,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        outline: "none",
                                                        fontFamily: "inherit"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onAsk,
                                                    disabled: !q.trim() || busy,
                                                    style: {
                                                        padding: "9px 14px",
                                                        background: !q.trim() || busy ? "#D4D5D9" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: 6,
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        cursor: !q.trim() || busy ? "default" : "pointer",
                                                        fontFamily: "inherit"
                                                    },
                                                    children: busy ? "..." : "Ask"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 6,
                                                flexWrap: "wrap"
                                            },
                                            children: [
                                                "Does it run large?",
                                                "Office or casual?",
                                                "Good for summer?"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        onSetQ(c);
                                                    },
                                                    style: {
                                                        padding: "4px 10px",
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkBd"]}`,
                                                        borderRadius: 20,
                                                        fontSize: 11,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinkLt"],
                                                        cursor: "pointer",
                                                        fontFamily: "inherit"
                                                    },
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        ans && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 10,
                                                padding: "10px 12px",
                                                background: "#F0FDF8",
                                                border: "1px solid #A7F3D0",
                                                borderRadius: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                        marginBottom: 4,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.05em"
                                                    },
                                                    children: "AI Answer from buyer reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                        lineHeight: 1.6,
                                                        margin: 0
                                                    },
                                                    children: ans
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                fontWeight: 700,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                marginBottom: 8
                                            },
                                            children: "What buyers are saying"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: 10,
                                                overflowX: "auto",
                                                scrollbarWidth: "none",
                                                padding: "2px 4px"
                                            },
                                            children: prod.reviewSnippets.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 200,
                                                        flexShrink: 0,
                                                        border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                                        borderRadius: 10,
                                                        padding: "12px",
                                                        background: "#fff"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 4,
                                                                marginBottom: 4
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        gap: 1
                                                                    },
                                                                    children: [
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5
                                                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "10",
                                                                            height: "10",
                                                                            viewBox: "0 0 10 10",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 0l.7 2.6H8.4L6.1 4.2l.8 2.6L5 5.5 3.1 6.8l.8-2.6L1.6 2.6h2.7z",
                                                                                fill: s <= r.rating ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"] : "#D4D5D9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                                lineNumber: 101,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, s, false, {
                                                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                            lineNumber: 100,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                    lineNumber: 98,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                                                        background: "#F5F5F5",
                                                                        borderRadius: 4,
                                                                        padding: "1px 5px",
                                                                        marginLeft: 2
                                                                    },
                                                                    children: [
                                                                        "Size: ",
                                                                        r.size
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 10,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                                                marginBottom: 6
                                                            },
                                                            children: r.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                                                lineHeight: 1.5,
                                                                overflow: "hidden",
                                                                display: "-webkit-box",
                                                                WebkitLineClamp: 3,
                                                                WebkitBoxOrient: "vertical",
                                                                marginBottom: 8
                                                            },
                                                            children: r.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: 4
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "10",
                                                                    height: "10",
                                                                    viewBox: "0 0 10 10",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 5.5L3.8 8.5 9 2",
                                                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                        strokeWidth: "1.4",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 71
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Verified Purchase"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "12px 16px 16px",
                                borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                background: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSize,
                                    style: {
                                        width: "100%",
                                        padding: "13px 0",
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 6,
                                        fontSize: 14,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        marginBottom: 8,
                                        fontFamily: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "16",
                                            viewBox: "0 0 14 16",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: ".5",
                                                    y: "4.5",
                                                    width: "13",
                                                    height: "11",
                                                    rx: "1",
                                                    stroke: "#fff",
                                                    strokeWidth: "1.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4.5 4.5V3.5a2.5 2.5 0 015 0v1",
                                                    stroke: "#fff",
                                                    strokeWidth: "1.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 160
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        "Add to Bag"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onWishlist,
                                    style: {
                                        width: "100%",
                                        padding: "13px 0",
                                        background: "#fff",
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}`,
                                        borderRadius: 6,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "inherit"
                                    },
                                    children: "Continue Browsing Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/VerdictScreen.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/screens/VerdictScreen.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/VerdictScreen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(VerdictScreen, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = VerdictScreen;
var _c;
__turbopack_context__.k.register(_c, "VerdictScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/WishlistScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WishlistScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhoneShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/colors.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function WHeader({ bag, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            padding: "0 14px 10px",
            gap: 10,
            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
            background: "#fff",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                style: {
                    background: "none",
                    border: "none",
                    padding: "4px 6px 4px 0",
                    cursor: "pointer",
                    fontSize: 20,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                    lineHeight: 1,
                    marginTop: -2,
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center"
                },
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 15,
                            fontWeight: 700,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                        },
                        children: "Wishlist"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"]
                        },
                        children: "315 items"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "22",
                height: "18",
                viewBox: "0 0 22 18",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2",
                        y1: "4",
                        x2: "14",
                        y2: "4",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2",
                        y1: "9",
                        x2: "11",
                        y2: "9",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "2",
                        y1: "14",
                        x2: "9",
                        y2: "14",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 11l4-4 2 2-4 4-2.5.5.5-2.5z",
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                        strokeWidth: "1.2",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "24",
                        viewBox: "0 0 22 24",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1",
                                y: "7",
                                width: "20",
                                height: "16",
                                rx: "1.5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M7 7V6a4 4 0 018 0v1",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            top: -3,
                            right: -5,
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                            color: "#fff",
                            borderRadius: "50%",
                            width: 15,
                            height: 15,
                            fontSize: 9,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: bag
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = WHeader;
function Card({ p, onOpen }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            cursor: "pointer",
            minWidth: 0
        },
        onClick: ()=>onOpen(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    borderRadius: "8px 8px 0 0",
                    overflow: "hidden",
                    height: 200,
                    flexShrink: 0
                },
                children: [
                    p.priceDrop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            background: "linear-gradient(90deg,rgba(3,166,133,0.18) 0%,transparent 100%)",
                            padding: "4px 8px",
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "8",
                                height: "9",
                                viewBox: "0 0 8 9",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4 0v7.5M1.5 5l2.5 2.5L6.5 5",
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                    strokeWidth: "1",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 46,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"],
                                    letterSpacing: "0.03em"
                                },
                                children: [
                                    "PRICE DROP BY ₹",
                                    p.priceDrop
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: p.cardImg,
                        alt: p.brand,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "block",
                            position: "absolute",
                            inset: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    p.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 7,
                            left: 7,
                            background: "rgba(255,255,255,0.95)",
                            borderRadius: 20,
                            padding: "3px 7px",
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            fontSize: 11,
                            fontWeight: 700,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                            boxShadow: "0 1px 3px rgba(0,0,0,.12)"
                        },
                        children: [
                            p.rating,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 10 10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 1l.9 2.1H8.5L6 5l.9 2.5L5 6.2 3.1 7.5 4 5 1.5 3.1H4.1z",
                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 54,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            onOpen(p);
                        },
                        style: {
                            position: "absolute",
                            bottom: 6,
                            right: 6,
                            background: "#fff",
                            border: `1.5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"]}`,
                            borderRadius: 20,
                            padding: "5px 10px",
                            fontSize: 11,
                            fontWeight: 600,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontFamily: "inherit",
                            boxShadow: "0 1px 4px rgba(0,0,0,.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "12",
                                viewBox: "0 0 10 12",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: ".5",
                                        y: "3.5",
                                        width: "9",
                                        height: "8",
                                        rx: "1",
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                        lineNumber: 58,
                                        columnNumber: 71
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 3.5V3a2 2 0 014 0v.5",
                                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                        lineNumber: 58,
                                        columnNumber: 152
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            "Add"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            fontWeight: 700,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                        },
                        children: p.brand
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 10,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginBottom: 2
                        },
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            gap: 4,
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                },
                                children: [
                                    "₹",
                                    p.price.toLocaleString("en-IN")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["green"]
                                },
                                children: [
                                    p.discount,
                                    "% OFF"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 10,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                    textDecoration: "line-through"
                                },
                                children: [
                                    "₹",
                                    p.mrp.toLocaleString("en-IN")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    p.express ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 9,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                            marginTop: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 3
                        },
                        children: [
                            "Delivery on Aug 22 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                    color: "#fff",
                                    fontSize: 8,
                                    fontWeight: 700,
                                    padding: "1px 4px",
                                    borderRadius: 2,
                                    letterSpacing: "0.02em"
                                },
                                children: "EXPRESS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 9,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                            marginTop: 2
                        },
                        children: p.delivery
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    borderTop: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                    marginTop: 6,
                    paddingTop: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1",
                                y: "3",
                                width: "12",
                                height: "10",
                                rx: "1",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 80,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 3V2a1 1 0 011-1h4a1 1 0 011 1v1",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 80,
                                columnNumber: 163
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M5.5 6v4M8.5 6v4",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 80,
                                columnNumber: 244
                            }, this)
                        ]
                    }, "d", true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1",
                                y: "1",
                                width: "5",
                                height: "5",
                                rx: ".5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 81,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "1",
                                width: "5",
                                height: "5",
                                rx: ".5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 81,
                                columnNumber: 162
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "1",
                                y: "8",
                                width: "5",
                                height: "5",
                                rx: ".5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 81,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "8",
                                y: "8",
                                width: "5",
                                height: "5",
                                rx: ".5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 81,
                                columnNumber: 328
                            }, this)
                        ]
                    }, "c", true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "2.5",
                                r: "1.5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 82,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "11.5",
                                r: "1.5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 82,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "3",
                                cy: "7",
                                r: "1.5",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 82,
                                columnNumber: 218
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4.3 6.3l5.4-3M4.3 7.7l5.4 3",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                strokeWidth: "1.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 82,
                                columnNumber: 284
                            }, this)
                        ]
                    }, "s", true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: {
                            flex: 1,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "3px 0",
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: icon
                    }, i, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c1 = Card;
function WishlistScreen({ products, bag, onOpen, onSetScr }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhoneShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        screen: "wishlist",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WHeader, {
                bag: bag,
                onBack: ()=>onSetScr("home")
            }, void 0, false, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    background: "#fff"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "8px 14px",
                            background: "#FFF8FB",
                            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                            display: "flex",
                            alignItems: "center",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "14",
                                viewBox: "0 0 10 14",
                                fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pink"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 0C2.8 0 1 1.8 1 4c0 3 4 8 4 8s4-5 4-8C9 1.8 7.2 0 5 0zm0 5.5c-.8 0-1.5-.7-1.5-1.5S4.2 2.5 5 2.5 6.5 3.2 6.5 4 5.8 5.5 5 5.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 102,
                                    columnNumber: 71
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"]
                                },
                                children: "Shiwang Tiwari"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["grey"],
                                    flex: 1,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: " - D-148, Bhagat Singh Colony Bhiwadi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "6",
                                viewBox: "0 0 10 6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1l4 4 4-4",
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greyLt"],
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 105,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            padding: "10px 14px 8px"
                        },
                        children: [
                            {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "16",
                                    viewBox: "0 0 18 16",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "3",
                                            y: "6",
                                            width: "13",
                                            height: "9",
                                            rx: "1.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 111,
                                            columnNumber: 81
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1.5",
                                            y: "4",
                                            width: "13",
                                            height: "9",
                                            rx: "1.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3",
                                            fill: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 111,
                                            columnNumber: 163
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "0",
                                            y: "2",
                                            width: "13",
                                            height: "9",
                                            rx: "1.2",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3",
                                            fill: "#fff"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 111,
                                            columnNumber: 259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 111,
                                    columnNumber: 21
                                }, this),
                                label: "Collections"
                            },
                            {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "16",
                                    viewBox: "0 0 18 16",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 6h16v8a1 1 0 01-1 1H2a1 1 0 01-1-1V6z",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 81
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 6l2.5-4h11L17 6",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 165
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6.5",
                                            y1: "8.5",
                                            x2: "11.5",
                                            y2: "13",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 250
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "11.5",
                                            y1: "8.5",
                                            x2: "6.5",
                                            y2: "13",
                                            stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            strokeWidth: "1.3",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                            lineNumber: 112,
                                            columnNumber: 347
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                    lineNumber: 112,
                                    columnNumber: 21
                                }, this),
                                label: "Out of Stock"
                            }
                        ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    flex: 1,
                                    padding: "7px 0",
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`,
                                    borderRadius: 6,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                    background: "#fff",
                                    cursor: "pointer",
                                    fontFamily: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 5
                                },
                                children: [
                                    b.icon,
                                    b.label
                                ]
                            }, b.label, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 0,
                            overflowX: "auto",
                            padding: "4px 14px 8px",
                            scrollbarWidth: "none"
                        },
                        children: [
                            {
                                img: "👔",
                                label: "Shirts"
                            },
                            {
                                img: "👕",
                                label: "Tshirts"
                            },
                            {
                                img: "🧥",
                                label: "Sweatshirts"
                            },
                            {
                                img: "👟",
                                label: "Casual Shoes"
                            },
                            {
                                img: "🧥",
                                label: "Jackets"
                            },
                            {
                                img: "👘",
                                label: "Sweaters"
                            },
                            {
                                img: "👖",
                                label: "Jeans"
                            }
                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 4,
                                    padding: "0 8px",
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 46,
                                            height: 46,
                                            borderRadius: "50%",
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bg"],
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 18,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["border"]}`
                                        },
                                        children: c.img
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ink"],
                                            whiteSpace: "nowrap"
                                        },
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.label, true, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 12,
                            padding: "0 12px 16px"
                        },
                        children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                p: p,
                                onOpen: onOpen
                            }, p.id, false, {
                                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                                lineNumber: 134,
                                columnNumber: 30
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bag: bag,
                onHome: ()=>onSetScr("home"),
                active: "home"
            }, void 0, false, {
                fileName: "[project]/src/components/screens/WishlistScreen.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/WishlistScreen.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c2 = WishlistScreen;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WHeader");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "WishlistScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constants/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "amber",
    ()=>amber,
    "bg",
    ()=>bg,
    "border",
    ()=>border,
    "green",
    ()=>green,
    "grey",
    ()=>grey,
    "greyLt",
    ()=>greyLt,
    "ink",
    ()=>ink,
    "orange",
    ()=>orange,
    "pink",
    ()=>pink,
    "pinkBd",
    ()=>pinkBd,
    "pinkLt",
    ()=>pinkLt
]);
const pink = "#FF3F6C";
const pinkLt = "#FFF4F7";
const pinkBd = "#FFCED8";
const green = "#03A685";
const orange = "#FF6161";
const amber = "#F5A623";
const ink = "#282C3F";
const grey = "#535766";
const greyLt = "#7E818C";
const border = "#EAEAEC";
const bg = "#F0F0F0";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS",
    ()=>PRODUCTS
]);
const PRODUCTS = [
    // ── ORIGINAL 5 ────────────────────────────────────────────────────────
    {
        id: "oquent",
        brand: "OQUENT",
        name: "Men Standard Striped Casual Shirt",
        price: 553,
        mrp: 2699,
        discount: 80,
        rating: 3.9,
        ratingCount: "2.1k",
        reviewCount: "2,083",
        reviews: 399,
        cardImg: "/products/oquent/card.png",
        imgs: [
            "/products/oquent/card.png",
            "/products/oquent/detail.jpg",
            "/products/oquent/img2.jpg"
        ],
        reviewImg: "/products/oquent/review.png",
        sizes: [
            "40",
            "42",
            "44"
        ],
        delivery: "Delivery on Aug 24",
        express: false,
        priceDrop: null,
        dealOfDay: true,
        megaDeal: 487,
        megaSave: 66,
        colour: "Beige",
        seller: "OQUENT FASHIONS PRIVATE LIMITED",
        verdict: "Buyers say this runs one size large. 73% who sized down kept it without returning. The fabric is lighter than photos suggest but breathes well in summer heat.",
        reviewCaption: "Rahul Kumar · Size: 42 · Jun 04, 2026",
        reviewText: "I recently ordered this striped shirt and I'm honestly quite impressed with the quality and fit.",
        reviewSnippets: [
            {
                name: "Rahul K",
                size: "42",
                rating: 4,
                text: "Fabric is nice and light, perfect for summers. Sizing runs large."
            },
            {
                name: "Vishal T",
                size: "42",
                rating: 4,
                text: "Runs one size large. If you are a medium go for small."
            },
            {
                name: "Amit R",
                size: "40",
                rating: 5,
                text: "Great value for money. Linen-cotton blend feels premium."
            }
        ]
    },
    {
        id: "denimlook",
        brand: "DENIMLOOK",
        name: "Men Relaxed Fit Stretchable Jeans",
        price: 474,
        mrp: 2999,
        discount: 84,
        rating: 4.2,
        ratingCount: "4.8k",
        reviewCount: "4,800",
        reviews: 1020,
        cardImg: "/products/denimlook/card.png",
        imgs: [
            "/products/denimlook/card.png",
            "/products/denimlook/detail.jpg",
            "/products/denimlook/img2.jpg"
        ],
        reviewImg: "/products/denimlook/review.png",
        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: null,
        dealOfDay: false,
        megaDeal: 418,
        megaSave: 56,
        colour: "Grey",
        seller: "DENIMLOOK INDIA PRIVATE LIMITED",
        verdict: "Fits true to size on waist but runs slightly long for heights under 5\u201910. 80% found the stretch fabric comfortable for all-day wear.",
        reviewCaption: "Myntra Customer · Size: 28 · 2 months ago",
        reviewText: "Jeans are one of the most timeless and versatile fashion pieces. Great stretch, comfortable all day.",
        reviewSnippets: [
            {
                name: "Rohan B",
                size: "32",
                rating: 5,
                text: "Super comfortable, stretch fabric makes it easy to wear all day."
            },
            {
                name: "Aditya P",
                size: "30",
                rating: 5,
                text: "Fabric quality excellent. Does not wrinkle much."
            },
            {
                name: "Ravi M",
                size: "32",
                rating: 4,
                text: "Waist fits well but length is slightly long for 5 foot 9."
            }
        ]
    },
    {
        id: "kooknkeech",
        brand: "Kook N Keech",
        name: "Polo Collar T-shirt",
        price: 154,
        mrp: 1499,
        discount: 90,
        rating: 4.2,
        ratingCount: "2.4k",
        reviewCount: "2,400",
        reviews: 480,
        cardImg: "/products/kooknkeech/card.png",
        imgs: [
            "/products/kooknkeech/card.png",
            "/products/kooknkeech/detail.jpg",
            "/products/kooknkeech/img2.jpg"
        ],
        reviewImg: "/products/kooknkeech/review.png",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 24",
        express: false,
        priceDrop: null,
        dealOfDay: true,
        megaDeal: 136,
        megaSave: 18,
        colour: "Black",
        seller: "KOOK N KEECH RETAIL PRIVATE LIMITED",
        verdict: "Runs true to size per 85% of buyers. Black colour stays rich after 8+ washes. Polo collar holds shape well.",
        reviewCaption: "Prashant Kushwaha · Style Photo · 273 followers",
        reviewText: "Perfect polo for casual and smart occasions. The black stays deep after multiple washes.",
        reviewSnippets: [
            {
                name: "Aryan S",
                size: "M",
                rating: 5,
                text: "Soft cotton, comfortable fit. Perfect polo for casual outings."
            },
            {
                name: "Nikhil P",
                size: "L",
                rating: 5,
                text: "Color is rich black, has not faded after 5 washes."
            },
            {
                name: "Vikram M",
                size: "M",
                rating: 4,
                text: "Runs true to size. Order your regular size."
            }
        ]
    },
    {
        id: "kasmenco",
        brand: "KASMEN CO.",
        name: "Men Ethnic Motifs Embroidered Kurta",
        price: 1497,
        mrp: 6999,
        discount: 79,
        rating: 3.8,
        ratingCount: "2.1k",
        reviewCount: "2,100",
        reviews: 420,
        cardImg: "/products/stylecast/card.png",
        imgs: [
            "/products/stylecast/card.png",
            "/products/stylecast/detail.jpg",
            "/products/stylecast/img2.jpg"
        ],
        reviewImg: "/products/stylecast/review.png",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 24",
        express: false,
        priceDrop: null,
        dealOfDay: false,
        megaDeal: 1347,
        megaSave: 150,
        colour: "Off White",
        seller: "KASMEN CO. FASHION PRIVATE LIMITED",
        verdict: "Fabric is soft and lightweight, good for festive occasions. Sizing runs slightly large; most buyers recommend going one size down for a fitted look.",
        reviewCaption: "Myntra Customer · Size: M · Jun 2026",
        reviewText: "Beautiful embroidery and excellent fabric quality. Perfect for weddings and festive occasions.",
        reviewSnippets: [
            {
                name: "Ankit S",
                size: "L",
                rating: 5,
                text: "Fabric is soft and breathable, perfect for a summer wedding."
            },
            {
                name: "Deepak V",
                size: "M",
                rating: 5,
                text: "Bought for a festive function, got so many compliments."
            },
            {
                name: "Karan P",
                size: "XL",
                rating: 4,
                text: "Size down if you want a fitted look."
            }
        ]
    },
    {
        id: "pepejeans",
        brand: "Pepe Jeans",
        name: "Men Regular Sneakers",
        price: 2299,
        mrp: 4999,
        discount: 54,
        rating: 4.2,
        ratingCount: "2.1k",
        reviewCount: "2,100",
        reviews: 9,
        cardImg: "/products/pepejeans/card.png",
        imgs: [
            "/products/pepejeans/card.png",
            "/products/pepejeans/detail.jpg",
            "/products/pepejeans/img2.jpg"
        ],
        reviewImg: "/products/pepejeans/review.png",
        sizes: [
            "6",
            "7",
            "8",
            "9",
            "10",
            "11"
        ],
        delivery: "Delivery on Aug 22",
        express: true,
        priceDrop: 200,
        dealOfDay: true,
        megaDeal: null,
        megaSave: null,
        colour: "White",
        seller: "PEPE JEANS INDIA MARKETING PRIVATE LIMITED",
        verdict: "True to size for 89% of buyers. Adaptive Foam sole is noticeably comfortable from day one. White leather stays clean with minimal care.",
        reviewCaption: "Myntra Customer · Size: 9 · Jun 07, 2026",
        reviewText: "Pepe Jeans white casual shoes impress with premium finish, clean stitching and polished details.",
        reviewSnippets: [
            {
                name: "Rohit S",
                size: "9",
                rating: 5,
                text: "Excellent cushioning, very comfortable for all day wear."
            },
            {
                name: "Karan M",
                size: "8",
                rating: 5,
                text: "True to size. Clean white look. Goes with everything."
            },
            {
                name: "Nikhil R",
                size: "9",
                rating: 4,
                text: "Slightly stiff initially but comfortable after break-in."
            }
        ]
    },
    // ── NEW 5 ─────────────────────────────────────────────────────────────
    {
        id: "wrodss",
        brand: "WRODSS",
        name: "Men Colourblocked T-shirt",
        price: 353,
        mrp: 999,
        discount: 65,
        rating: 3.6,
        ratingCount: "1.2k",
        reviewCount: "1,200",
        reviews: 280,
        cardImg: "/products/wrodss/card.jpg",
        imgs: [
            "/products/wrodss/card.jpg",
            "/products/wrodss/detail.jpg",
            "/products/wrodss/img2.jpg"
        ],
        reviewImg: "/products/wrodss/detail.jpg",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: null,
        dealOfDay: false,
        megaDeal: null,
        megaSave: null,
        colour: "Charcoal / Black",
        seller: "WRODSS FASHION PRIVATE LIMITED",
        verdict: "Colour block sits clean with no bleed between panels per 78% of buyers. Fabric is mid-weight, good for AC offices and evening outings. Runs true to size.",
        reviewCaption: "Myntra Customer · Size: M · Aug 2026",
        reviewText: "Great colourblock design. Fabric quality is solid and the fit is exactly as expected.",
        reviewSnippets: [
            {
                name: "Aditya K",
                size: "M",
                rating: 4,
                text: "Panels stitched cleanly, no bleeding between the two colors even after washes."
            },
            {
                name: "Karan S",
                size: "M",
                rating: 4,
                text: "Runs true to size, ordered my regular M and it fits as expected."
            },
            {
                name: "Nikhil A",
                size: "S",
                rating: 4,
                text: "Color block design looks sharper in person than in photos."
            }
        ]
    },
    {
        id: "fabripple",
        brand: "FABRIPPLE",
        name: "Men Training or Gym Sports Shorts",
        price: 256,
        mrp: 999,
        discount: 74,
        rating: 4.1,
        ratingCount: "3.1k",
        reviewCount: "3,100",
        reviews: 620,
        cardImg: "/products/fabripple/card.jpg",
        imgs: [
            "/products/fabripple/card.jpg",
            "/products/fabripple/detail.jpg",
            "/products/fabripple/img2.jpg"
        ],
        reviewImg: "/products/fabripple/detail.jpg",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: 18,
        dealOfDay: false,
        megaDeal: null,
        megaSave: null,
        colour: "Off White",
        seller: "FABRIPPLE SPORTS PRIVATE LIMITED",
        verdict: "Waffle texture stays intact after multiple washes per 82% of buyers. Drawstring holds well without slipping. Size up if between sizes, waistband is slightly snug.",
        reviewCaption: "Myntra Customer · Size: L · Jul 2026",
        reviewText: "Great shorts for gym and casual wear. The waffle texture looks premium and feels comfortable.",
        reviewSnippets: [
            {
                name: "Rohit V",
                size: "L",
                rating: 5,
                text: "Waffle texture still looks new after 10 plus washes. Drawstring holds."
            },
            {
                name: "Aman T",
                size: "M",
                rating: 5,
                text: "Great for gym and running both. Does not ride up during workouts."
            },
            {
                name: "Vivek R",
                size: "XL",
                rating: 4,
                text: "Pockets are deep enough for a phone, stays secure while training."
            }
        ]
    },
    {
        id: "mastharbour",
        brand: "Mast & Harbour",
        name: "Men Standard Checked Casual Shirt",
        price: 310,
        mrp: 1999,
        discount: 84,
        rating: 4.0,
        ratingCount: "5.2k",
        reviewCount: "5,200",
        reviews: 1040,
        cardImg: "/products/mastharbour/card.jpg",
        imgs: [
            "/products/mastharbour/card.jpg",
            "/products/mastharbour/detail.jpg",
            "/products/mastharbour/img2.jpg"
        ],
        reviewImg: "/products/mastharbour/detail.jpg",
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: null,
        dealOfDay: false,
        megaDeal: null,
        megaSave: null,
        colour: "Yellow / Blue",
        seller: "MAST & HARBOUR RETAIL PRIVATE LIMITED",
        verdict: "Check pattern is sharp and colours don't bleed per 88% of buyers. Fabric is 100% cotton, breathable but wrinkles easily. Fits true to size with a slightly relaxed cut.",
        reviewCaption: "Myntra Customer · Size: L · Jun 2026",
        reviewText: "Beautiful check shirt. Very comfortable fabric and the fit is perfect for casual outings.",
        reviewSnippets: [
            {
                name: "Aditya R",
                size: "L",
                rating: 5,
                text: "Check pattern is sharp, colors have not bled after several washes."
            },
            {
                name: "Rohan S",
                size: "L",
                rating: 4,
                text: "Fits true to size with a slightly relaxed, comfortable cut."
            },
            {
                name: "Nikhil P",
                size: "M",
                rating: 4,
                text: "Great casual shirt for weekend outings, colors are vivid."
            }
        ]
    },
    {
        id: "roadster-hoodie",
        brand: "Roadster",
        name: "The Roadster Lifestyle Co. Men Full Sleeve Hoodie",
        price: 497,
        mrp: 2499,
        discount: 80,
        rating: 3.7,
        ratingCount: "8.4k",
        reviewCount: "8,400",
        reviews: 1680,
        cardImg: "/products/roadster-hoodie/card.jpg",
        imgs: [
            "/products/roadster-hoodie/card.jpg",
            "/products/roadster-hoodie/detail.jpg",
            "/products/roadster-hoodie/img2.jpg"
        ],
        reviewImg: "/products/roadster-hoodie/detail.jpg",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: 97,
        dealOfDay: false,
        megaDeal: null,
        megaSave: null,
        colour: "Pink",
        seller: "MYNTRA DESIGNS PRIVATE LIMITED",
        verdict: "Oversized fit, 71% of buyers sized down one. Fleece lining is warm without being bulky. Pink colour stays true after washing. Hood drawstring quality is average.",
        reviewCaption: "Myntra Customer · Size: S · Aug 2026",
        reviewText: "Loved the colour and the fit. Sized down as suggested and it fits perfectly. Very cozy.",
        reviewSnippets: [
            {
                name: "Karan T",
                size: "M",
                rating: 4,
                text: "Definitely runs oversized, sized down from L to M and it fits much better."
            },
            {
                name: "Rohit A",
                size: "S",
                rating: 5,
                text: "Fleece lining is warm without feeling bulky, great for early mornings."
            },
            {
                name: "Aman V",
                size: "L",
                rating: 4,
                text: "Pink color has stayed true even after multiple washes."
            }
        ]
    },
    {
        id: "roadster-jacket",
        brand: "Roadster",
        name: "The Roadster Lifestyle Co. Solid Fleece Jacket",
        price: 545,
        mrp: 1299,
        discount: 58,
        rating: 4.1,
        ratingCount: "6.7k",
        reviewCount: "6,700",
        reviews: 1340,
        cardImg: "/products/roadster-jacket/card.jpg",
        imgs: [
            "/products/roadster-jacket/card.jpg",
            "/products/roadster-jacket/detail.jpg",
            "/products/roadster-jacket/img2.jpg"
        ],
        reviewImg: "/products/roadster-jacket/detail.jpg",
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        delivery: "Delivery on Aug 23",
        express: false,
        priceDrop: 26,
        dealOfDay: false,
        megaDeal: null,
        megaSave: null,
        colour: "Blue",
        seller: "MYNTRA DESIGNS PRIVATE LIMITED",
        verdict: "Fleece is thick and warm. Buyers say it handles 15-18C comfortably. Zipper runs smoothly. Fits true to size with slight room for layering underneath.",
        reviewCaption: "Myntra Customer · Size: M · Jul 2026",
        reviewText: "Excellent fleece jacket. Very warm for its weight and the blue colour is exactly as shown.",
        reviewSnippets: [
            {
                name: "Rohan M",
                size: "M",
                rating: 5,
                text: "Fleece is genuinely warm, handled a 16C evening comfortably over a t-shirt."
            },
            {
                name: "Karan D",
                size: "L",
                rating: 5,
                text: "Zipper runs smoothly, no snagging even after regular use."
            },
            {
                name: "Aditya S",
                size: "M",
                rating: 4,
                text: "Fits true to size with just enough room to layer a sweater underneath."
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0dx-9oe._.js.map