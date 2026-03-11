module.exports = [
"[project]/apps/web/components/ui/PageHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/PageHeader.tsx
__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PageHeader = ({ title, breadcrumbs })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold text-gray-900",
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mt-2 text-sm text-gray-500",
                "aria-label": "Breadcrumb",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "flex flex-wrap items-center gap-1",
                    children: breadcrumbs?.map((bc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center",
                            children: [
                                bc.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: bc.href,
                                    className: "hover:text-gray-700 underline-offset-2 hover:underline",
                                    children: bc.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                                    lineNumber: 18,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: bc.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                                    lineNumber: 25,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                idx < breadcrumbs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2 text-gray-400",
                                    "aria-hidden": "true",
                                    children: "›"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, idx, true, {
                            fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/PageHeader.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/components/ui/Panel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function Panel({ children, className = "", title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `rounded-md bg-white shadow-sm ${className}`,
        children: [
            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pt-2 pb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[13px] font-semibold tracking-tight text-slate-700",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/Panel.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Panel.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Panel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Panel.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// components/ui/Card.tsx
"use client";
;
;
;
const toneBg = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
    violet: "bg-violet-50 text-violet-700",
    slate: "bg-slate-50 text-slate-700"
};
const Card = ({ title, count, href, compact = false, loading = false, className, hideFooter = true, icon, tone = "slate", children })=>{
    const Container = href ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : "div";
    const showIcon = Boolean(icon);
    const showCount = !loading && count !== undefined && count !== null && `${count}`.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all", compact ? "p-4" : "p-5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-10 h-10 flex items-center justify-center rounded-lg", toneBg[tone]),
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/Card.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[13px] text-slate-600 md:truncate",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/Card.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[22px] font-semibold text-slate-900 mt-0.5 leading-tight",
                                children: loading ? "…" : showCount ? typeof count === "number" ? count.toLocaleString() : count : null
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/Card.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-sm text-slate-600",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/Card.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/Card.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/Card.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !hideFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-[11px] text-slate-400",
                children: "View all"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Card.tsx",
                lineNumber: 83,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/lib/chartjs.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// src/lib/chartjs.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-ssr] (ecmascript) <locals>");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Filler"]);
// Global defaults
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.font.family = "'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans Thai', sans-serif";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.color = "#334155"; // slate-700
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.responsive = true;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.plugins.legend.labels.boxWidth = 10;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.plugins.tooltip.mode = "index";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].defaults.plugins.tooltip.intersect = false;
;
}),
"[project]/apps/web/components/charts/BarChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$chartjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/chartjs.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const DEFAULT_LABELS = [
    "Microsoft 365",
    "SAP",
    "Adobe Design",
    "Autodesk 3ds",
    "Lightroom",
    "SketchUp",
    "MS Office"
];
const DEFAULT_DATASETS = [
    {
        label: "Used",
        data: [
            1200,
            900,
            420,
            1500,
            680,
            980,
            1750
        ],
        color: "#3b82f6"
    },
    {
        label: "Available",
        data: [
            800,
            650,
            310,
            720,
            520,
            460,
            820
        ],
        color: "#10b981"
    }
];
function BarChart({ title = "Bar Chart", className, height = 280, labels = DEFAULT_LABELS, datasets = DEFAULT_DATASETS }) {
    const data = {
        labels,
        datasets: datasets.map((d)=>({
                label: d.label,
                data: d.data,
                backgroundColor: d.color ?? "#60a5fa",
                hoverBackgroundColor: d.color ?? "#3b82f6",
                borderRadius: 6,
                maxBarThickness: 36
            }))
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 10
                }
            },
            title: {
                display: Boolean(title),
                text: title
            },
            tooltip: {
                enabled: true
            }
        },
        interaction: {
            mode: "index",
            intersect: false
        },
        scales: {
            x: {
                type: "category",
                ticks: {
                    maxRotation: 0,
                    minRotation: 0
                },
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            },
            y: {
                type: "linear",
                beginAtZero: true,
                grid: {
                    display: true
                },
                border: {
                    display: false
                }
            }
        },
        animation: {
            duration: 300
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/apps/web/components/charts/BarChart.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/charts/BarChart.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/charts/HorizontalBarChar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HorizontalBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$chartjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/chartjs.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function HorizontalBarChart({ title, className, height = 280, labels = [], values = [], color = "#10b981", optionsOverride }) {
    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: values,
                backgroundColor: color,
                borderRadius: 8,
                barThickness: 16,
                hoverBackgroundColor: "#059669"
            }
        ]
    };
    const options = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: !!title,
                text: title
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    autoSkip: false
                },
                grid: {
                    display: false
                }
            }
        },
        animation: {
            duration: 300
        },
        ...optionsOverride
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/apps/web/components/charts/HorizontalBarChar.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/charts/HorizontalBarChar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/charts/DonutChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DonutChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$chartjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/chartjs.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const DEFAULT_COLORS = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#a78bfa"
];
function DonutChart({ title, className, height = 180, values = [], labels = [], colors = DEFAULT_COLORS, legendPosition = "right", cutout = "65%" }) {
    const data = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: colors.slice(0, values.length),
                borderWidth: 0,
                hoverOffset: 8
            }
        ]
    };
    //   ระบุชนิด options ให้ชัดเจน
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: legendPosition
            },
            title: {
                display: Boolean(title),
                text: title
            },
            tooltip: {
                enabled: true
            }
        },
        cutout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doughnut"], {
            data: data,
            options: options
        }, void 0, false, {
            fileName: "[project]/apps/web/components/charts/DonutChart.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/charts/DonutChart.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
``;
}),
"[project]/apps/web/components/charts/SemiRadialGauge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SemiRadialGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$chartjs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/chartjs.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const centerTextPlugin = (text)=>({
        id: "centerText",
        afterDraw (chart) {
            const { ctx, chartArea } = chart;
            if (!ctx || !chartArea) return;
            ctx.save();
            const { left, right, bottom, height } = chartArea;
            const centerX = (left + right) / 2;
            const centerY = bottom - height * 0.25;
            ctx.font = "700 28px Inter, system-ui, sans-serif";
            ctx.fillStyle = "#111827";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text, centerX, centerY);
            ctx.restore();
        }
    });
function SemiRadialGauge({ value, title, className, height = 150, color, thresholds = {
    good: 80,
    warn: 40
} }) {
    const v = Math.max(0, Math.min(100, value));
    // Auto color by thresholds
    const autoColor = v >= thresholds.good ? "#10b981" : v >= thresholds.warn ? "#f59e0b" : "#ef4444";
    const data = {
        labels: [
            title ?? ""
        ],
        datasets: [
            {
                data: [
                    v,
                    100 - v
                ],
                backgroundColor: [
                    color ?? autoColor,
                    "#e5e7eb"
                ],
                borderWidth: 0,
                hoverOffset: 2
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: -90,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: !!title,
                text: title
            },
            tooltip: {
                callbacks: {
                    label: (ctx)=>`${Math.round(ctx.raw)}%`
                }
            }
        },
        cutout: "60%"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doughnut"], {
            data: data,
            options: options,
            plugins: [
                centerTextPlugin(`${v}%`)
            ]
        }, void 0, false, {
            fileName: "[project]/apps/web/components/charts/SemiRadialGauge.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/charts/SemiRadialGauge.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/services/licenses.service.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/licenses.service.mock.ts
//   ใช้ alias path ของโปรเจกต์ (ปรับให้ตรงกับโปรเจกต์คุณ เช่น "@/types")
__turbopack_context__.s([
    "consumeSeat",
    ()=>consumeSeat,
    "getAvailableLicenses",
    ()=>getAvailableLicenses,
    "getLicenseById",
    ()=>getLicenseById,
    "getLicenseSummary",
    ()=>getLicenseSummary,
    "getLicenses",
    ()=>getLicenses,
    "releaseSeat",
    ()=>releaseSeat
]);
// -------------------------------------------------
// Types ที่ใช้ภายในไฟล์นี้
// -------------------------------------------------
/** สรุป (ไม่ผูกกับ paging) */ // -------------------------------------------------
// Mock dictionaries
// -------------------------------------------------
const manufacturers = [
    "Microsoft",
    "Adobe",
    "Autodesk",
    "JetBrains",
    "Atlassian"
];
const licenseModels = [
    "Per-User",
    "Perpetual",
    "Subscription",
    "Per-Device"
];
const statuses = [
    "Active",
    "Expired"
]; // เพิ่ม "Expiring" ใน type ได้ในอนาคต
// สำหรับ compliance: อ้างจากฝั่ง software ถ้าคุณมี enum กลาง ให้ import มาแทน
const complianceOptions = [
    "Compliant",
    "Non-Compliant",
    "Warning"
];
// -------------------------------------------------
// Helpers
// -------------------------------------------------
const normalize = (s)=>(s ?? "").trim().toLowerCase();
const SORT_KEYS = [
    "softwareName",
    "manufacturer",
    "licenseModel",
    "total",
    "inUse",
    "available",
    "expiryDate",
    "status",
    "compliance"
];
function isSortKey(k) {
    return !!k && SORT_KEYS.includes(k);
}
function compare(key, a, b) {
    const va = a[key];
    const vb = b[key];
    // date
    if (key === "expiryDate") {
        const ta = va ? new Date(`${va}T23:59:59Z`).getTime() : Number.NaN;
        const tb = vb ? new Date(`${vb}T23:59:59Z`).getTime() : Number.NaN;
        if (Number.isNaN(ta) && Number.isNaN(tb)) return 0;
        if (Number.isNaN(ta)) return 1;
        if (Number.isNaN(tb)) return -1;
        return ta - tb;
    }
    // number
    if (typeof va === "number" && typeof vb === "number") return va - vb;
    // string
    return String(va ?? "").localeCompare(String(vb ?? ""), undefined, {
        numeric: true,
        sensitivity: "base"
    });
}
function safeTime(d) {
    if (!d) return Number.NaN;
    const t = new Date(`${d}T23:59:59Z`).getTime();
    return Number.isNaN(t) ? Number.NaN : t;
}
// -------------------------------------------------
// Mock dataset ให้สอดคล้องกับ LicenseItem ของคุณ
// -------------------------------------------------
const MOCK_LICENSES = Array.from({
    length: 57
}).map((_, i)=>{
    const total = 100 + i % 7 * 5;
    const inUse = 40 + i % 5 * 7;
    const available = Math.max(0, total - inUse);
    return {
        id: `LIC-${i + 1}`,
        softwareName: `Software ${i + 1}`,
        manufacturer: manufacturers[i % manufacturers.length],
        licenseModel: licenseModels[i % licenseModels.length],
        // ฟิลด์อื่น ๆ ตาม LicenseItem ของคุณ:
        sku: `SKU-${i + 1}`,
        edition: undefined,
        version: `v${i % 5 + 1}.0`,
        consumptionUnit: "perUser",
        term: "subscription",
        total,
        inUse,
        available,
        expiryDate: `2026-${String(i % 12 + 1).padStart(2, "0")}-28`,
        status: i % 3 === 0 ? "Expired" : "Active",
        compliance: i % 4 === 0 ? "Warning" : "Compliant",
        // metadata
        createdAt: `2025-01-${String(i % 28 + 1).padStart(2, "0")}T12:00:00Z`,
        updatedAt: `2025-12-${String(i % 28 + 1).padStart(2, "0")}T12:00:00Z`,
        cost: 10000 + i * 137,
        maintenanceCost: 1000 + i % 10 * 37,
        notes: "",
        licenseKey: `XXXX-XXXX-XXXX-${String(i + 1).padStart(4, "0")}`
    };
});
async function getLicenseById(id) {
    await new Promise((r)=>setTimeout(r, 120));
    return MOCK_LICENSES.find((x)=>String(x.id) === String(id)) ?? null;
}
async function getLicenses(q) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const kw = normalize(q.search);
            let data = [
                ...MOCK_LICENSES
            ];
            // filters
            if (q.status) data = data.filter((x)=>normalize(x.status) === normalize(q.status));
            if (q.licenseModel) data = data.filter((x)=>normalize(x.licenseModel) === normalize(q.licenseModel));
            if (q.manufacturer) data = data.filter((x)=>normalize(x.manufacturer) === normalize(q.manufacturer));
            if (kw) {
                data = data.filter((x)=>normalize(x.softwareName).includes(kw) || normalize(x.manufacturer).includes(kw) || normalize(x.licenseModel).includes(kw));
            }
            //   sort (global ก่อน paginate)
            const dir = q.sortOrder === "desc" ? -1 : 1;
            const key = isSortKey(q.sortBy) ? q.sortBy : undefined;
            if (q.sortBy === "status_priority" && !q.status /* All Status */ ) {
                // Priority: Active -> Expiring -> Expired -> else
                const pr = new Map([
                    [
                        "Active",
                        0
                    ],
                    [
                        "Expiring",
                        1
                    ],
                    [
                        "Expired",
                        2
                    ]
                ]);
                data.sort((a, b)=>{
                    const pa = pr.get(a.status) ?? 999;
                    const pb = pr.get(b.status) ?? 999;
                    if (pa !== pb) return (pa - pb) * dir;
                    // secondary: ใช้ softwareName (อ่านง่ายและเสถียร)
                    return String(a.softwareName ?? "").localeCompare(String(b.softwareName ?? ""), undefined, {
                        numeric: true,
                        sensitivity: "base"
                    });
                });
            } else if (key) {
                // generic field sort
                data.sort((a, b)=>compare(key, a, b) * dir);
            } else {
                // default: softwareName ASC
                data.sort((a, b)=>String(a.softwareName ?? "").localeCompare(String(b.softwareName ?? ""), undefined, {
                        numeric: true,
                        sensitivity: "base"
                    }));
            }
            // paginate (1-based)
            const start = (q.page - 1) * q.pageSize;
            const items = data.slice(start, start + q.pageSize);
            //   รูปแบบตอบกลับเป็น OffsetPage<LicenseItem>
            const totalCount = data.length;
            const totalPages = Math.max(1, Math.ceil(totalCount / q.pageSize));
            const page = q.page;
            const pageSize = q.pageSize;
            resolve({
                items,
                totalCount,
                page,
                pageSize,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                totalPages
            });
        }, 400);
    });
}
async function getAvailableLicenses() {
    await new Promise((r)=>setTimeout(r, 100));
    return MOCK_LICENSES.filter((x)=>(x.available ?? x.total - x.inUse) > 0);
}
async function consumeSeat(licenseId, n = 1) {
    const idx = MOCK_LICENSES.findIndex((l)=>l.id === licenseId);
    if (idx < 0) throw new Error("License not found");
    const lic = {
        ...MOCK_LICENSES[idx]
    };
    const available = lic.available ?? lic.total - lic.inUse;
    if (available < n) throw new Error("No seats left");
    lic.inUse = (lic.inUse ?? 0) + n;
    lic.available = Math.max(0, lic.total - lic.inUse);
    MOCK_LICENSES[idx] = lic;
}
async function releaseSeat(licenseId, n = 1) {
    const idx = MOCK_LICENSES.findIndex((l)=>l.id === licenseId);
    if (idx < 0) return;
    const lic = {
        ...MOCK_LICENSES[idx]
    };
    lic.inUse = Math.max(0, (lic.inUse ?? 0) - n);
    lic.available = Math.max(0, lic.total - lic.inUse);
    MOCK_LICENSES[idx] = lic;
}
async function getLicenseSummary(filters, signal) {
    // รองรับ cancel
    await new Promise((resolve, reject)=>{
        const t = setTimeout(resolve, 150);
        if (signal) {
            signal.addEventListener("abort", ()=>{
                clearTimeout(t);
                reject(Object.assign(new Error("Aborted"), {
                    name: "AbortError"
                }));
            });
        }
    });
    let data = [
        ...MOCK_LICENSES
    ];
    if (filters?.status) data = data.filter((x)=>normalize(x.status) === normalize(filters.status));
    if (filters?.licenseModel) data = data.filter((x)=>normalize(x.licenseModel) === normalize(filters.licenseModel));
    if (filters?.manufacturer) data = data.filter((x)=>normalize(x.manufacturer) === normalize(filters.manufacturer));
    if (filters?.search) {
        const kw = normalize(filters.search);
        if (kw) {
            data = data.filter((x)=>normalize(x.softwareName).includes(kw) || normalize(x.manufacturer).includes(kw) || normalize(x.licenseModel).includes(kw) || normalize(x.status).includes(kw));
        }
    }
    // summary aggregation ----------------------------
    const summary = {
        total: data.length,
        active: 0,
        inactive: 0,
        expired: 0,
        warning: 0,
        available: 0,
        unknown: 0,
        seatsTotal: 0,
        seatsUsed: 0,
        seatsAvailable: 0,
        byModel: {},
        byManufacturer: {}
    };
    const nowT = Date.now();
    const soonMs = 30 * 24 * 60 * 60 * 1000; // 30 วัน
    for (const it of data){
        summary.seatsTotal += it.total ?? 0;
        summary.seatsUsed += it.inUse ?? 0;
        if (it.status === "Active") summary.active += 1;
        else if (it.status === "Expired") summary.expired += 1;
        // ถ้าเพิ่ม "Expiring" ใน LicenseStatus: ให้เพิ่มสรุปที่นี่ด้วย
        if (it.status === "Active" && (it.inUse ?? 0) === 0) {
            summary.inactive += 1;
        }
        const expT = safeTime(it.expiryDate);
        if (!Number.isNaN(expT)) {
            if (expT >= nowT && expT - nowT <= soonMs) summary.warning += 1;
        } else {
            summary.unknown += 1;
        }
        if (it.compliance === "Warning") summary.warning += 1;
        summary.byModel[it.licenseModel] = (summary.byModel[it.licenseModel] ?? 0) + 1;
        summary.byManufacturer[it.manufacturer] = (summary.byManufacturer[it.manufacturer] ?? 0) + 1;
    }
    summary.seatsAvailable = Math.max(0, summary.seatsTotal - summary.seatsUsed);
    return summary;
}
}),
"[project]/apps/web/hooks/useLicenseSummary.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLicenseSummary",
    ()=>useLicenseSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$licenses$2e$service$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/services/licenses.service.mock.ts [app-ssr] (ecmascript)");
// src/hooks/useLicenseSummary.ts
"use client";
;
;
function useLicenseSummary(filters) {
    const [summary, setSummary] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [isLoading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isError, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    // ทำให้ dependency เปลี่ยนเฉพาะเมื่อค่าฟิลเตอร์เปลี่ยนจริง ๆ
    const deps = JSON.stringify(filters ?? {});
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const ac = new AbortController();
        let alive = true;
        (async ()=>{
            try {
                setLoading(true);
                setError(false);
                setErrorMessage(undefined);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$licenses$2e$service$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLicenseSummary"])({
                    status: filters?.status,
                    licenseModel: filters?.licenseModel,
                    manufacturer: filters?.manufacturer,
                    search: filters?.search
                }, ac.signal);
                if (!alive) return;
                setSummary(res);
            } catch (e) {
                if (e?.name === "AbortError") return;
                if (!alive) return;
                setError(true);
                setErrorMessage(e?.message ?? "โหลดข้อมูลสรุป License ไม่สำเร็จ");
            } finally{
                if (alive) setLoading(false);
            }
        })();
        return ()=>{
            alive = false;
            ac.abort();
        };
    }, [
        deps
    ]);
    return {
        summary,
        isLoading,
        isError,
        errorMessage
    };
}
}),
"[project]/apps/web/components/charts/LicenseSummaryCards.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LicenseSummaryCards",
    ()=>LicenseSummaryCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useLicenseSummary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useLicenseSummary.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
// components/charts/LicenseSummaryCards.tsx
"use client";
;
;
;
;
;
function LicenseSummaryCards({ manageHref = "/software/license-management", className = "" }) {
    const { summary, isLoading, isError, errorMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useLicenseSummary$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLicenseSummary"])();
    const total = summary?.total ?? 0;
    const active = summary?.active ?? 0;
    const expiringSoon = summary?.warning ?? 0;
    const available = summary?.available ?? Math.max(total - active, 0);
    if (isError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700",
            children: [
                "ไม่สามารถโหลดสรุป License ได้ — ",
                errorMessage ?? "unknown error"
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    // 2 คอลัมน์บน lg เพื่อไม่ให้เบียด (จอเล็กเป็น 1/2 ตามลำดับ)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cnGrid"])("grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Total Licenses",
                count: total,
                href: manageHref,
                loading: isLoading,
                compact: true,
                hideFooter: true,
                className: "h-[84px]",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiDatabase"], {}, void 0, false, {
                    fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                    lineNumber: 45,
                    columnNumber: 15
                }, void 0),
                tone: "blue"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Licenses Active",
                count: active,
                href: `${manageHref}?status=Active`,
                loading: isLoading,
                compact: true,
                hideFooter: true,
                className: "h-[84px]",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCheckCircle"], {}, void 0, false, {
                    fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                    lineNumber: 55,
                    columnNumber: 15
                }, void 0),
                tone: "green"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Licenses Available",
                count: available,
                href: `${manageHref}?status=Available`,
                loading: isLoading,
                compact: true,
                hideFooter: true,
                className: "h-[84px]",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiShield"], {}, void 0, false, {
                    fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                    lineNumber: 65,
                    columnNumber: 15
                }, void 0),
                tone: "slate"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                title: "Licenses Expiring Soon",
                count: expiringSoon,
                href: `${manageHref}?filter=expiringSoon`,
                loading: isLoading,
                compact: true,
                hideFooter: true,
                className: "h-[84px]",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiClock"], {}, void 0, false, {
                    fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                    lineNumber: 75,
                    columnNumber: 15
                }, void 0),
                tone: "amber"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/charts/LicenseSummaryCards.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/hooks/useExceptionsMetrics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExceptionsMetrics",
    ()=>useExceptionsMetrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useExceptionsMetrics(exceptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const total = exceptions.length;
        const active = exceptions.filter((e)=>e.status === "Active").length;
        const inactive = total - active;
        const byRisk = {
            High: exceptions.filter((e)=>e.risk === "High").length,
            Medium: exceptions.filter((e)=>e.risk === "Medium").length,
            Low: exceptions.filter((e)=>e.risk === "Low").length
        };
        const byStatus = {
            Active: active,
            Inactive: inactive
        };
        const recentCreated = [
            ...exceptions
        ].sort((a, b)=>+new Date(b.createdAt) - +new Date(a.createdAt)).slice(0, 5);
        return {
            total,
            active,
            inactive,
            byRisk,
            byStatus,
            recentCreated
        };
    }, [
        exceptions
    ]);
}
}),
"[project]/apps/web/app/(app)/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/charts/BarChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$HorizontalBarChar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/charts/HorizontalBarChar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$DonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/charts/DonutChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$SemiRadialGauge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/charts/SemiRadialGauge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$LicenseSummaryCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/charts/LicenseSummaryCards.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useExceptionsMetrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useExceptionsMetrics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
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
;
;
const exceptionsMock = [
    {
        exception_id: "EXC-024",
        name: "Bypass Proxy",
        risk: "High",
        status: "Inactive",
        createdAt: "2025-11-24T08:00:00Z"
    },
    {
        exception_id: "EXC-101",
        name: "Allow Sideload",
        risk: "Medium",
        status: "Active",
        createdAt: "2025-11-20T03:00:00Z"
    },
    {
        exception_id: "EXC-115",
        name: "Disable USB Lock",
        risk: "High",
        status: "Active",
        createdAt: "2025-12-02T02:00:00Z"
    },
    {
        exception_id: "EXC-130",
        name: "Allow Legacy TLS",
        risk: "Low",
        status: "Inactive",
        createdAt: "2025-10-18T01:00:00Z"
    },
    {
        exception_id: "EXC-151",
        name: "Whitelist Domain",
        risk: "Medium",
        status: "Active",
        createdAt: "2025-12-18T08:00:00Z"
    }
];
const ORG_SOFTWARE_TOTAL = 1345;
const ORG_DEVICES_REGISTERED = 500;
const ORG_PENDING_REQUESTS = 10;
function DashboardPage() {
    const { active, inactive, byRisk } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useExceptionsMetrics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExceptionsMetrics"])(exceptionsMock);
    const topLeftCards = [
        {
            id: 1,
            title: "Total Software",
            count: ORG_SOFTWARE_TOTAL,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiCpu"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            tone: "blue",
            href: "/software/inventory"
        },
        {
            id: 2,
            title: "Devices Registered",
            count: ORG_DEVICES_REGISTERED,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiMonitor"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            tone: "green",
            href: "/devices"
        },
        {
            id: 3,
            title: "Active Exceptions",
            count: active,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiAlertCircle"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            tone: "amber",
            href: "/exceptions?status=Active"
        },
        {
            id: 4,
            title: "Pending Requests",
            count: ORG_PENDING_REQUESTS,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiInbox"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            tone: "violet",
            href: "/requests?status=Pending"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid grid-cols-12 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 grid-cols-1 sm:grid-cols-2",
                            children: topLeftCards.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    title: item.title,
                                    count: item.count,
                                    icon: item.icon,
                                    tone: item.tone,
                                    href: item.href,
                                    compact: true,
                                    hideFooter: true,
                                    className: "h-[84px]"
                                }, item.id, false, {
                                    fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$LicenseSummaryCards$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LicenseSummaryCards"], {
                            className: "grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-2 gap-3 !mt-0"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-12 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
                        className: "col-span-12 lg:col-span-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$BarChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "Activity (Monthly)",
                            height: 280,
                            labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                            ],
                            datasets: [
                                {
                                    label: "License Assigned",
                                    data: [
                                        220,
                                        260,
                                        280,
                                        310,
                                        330,
                                        360,
                                        380,
                                        400,
                                        390,
                                        420,
                                        440,
                                        470
                                    ],
                                    color: "#3b82f6"
                                },
                                {
                                    label: "License Reclaimed",
                                    data: [
                                        60,
                                        50,
                                        55,
                                        70,
                                        65,
                                        62,
                                        58,
                                        60,
                                        59,
                                        68,
                                        72,
                                        80
                                    ],
                                    color: "#10b981"
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 lg:col-span-4 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$DonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    title: "Exceptions by Status",
                                    height: 200,
                                    labels: [
                                        "Active",
                                        "Inactive"
                                    ],
                                    values: [
                                        active,
                                        inactive
                                    ],
                                    colors: [
                                        "#f59e0b",
                                        "#94a3b8"
                                    ],
                                    legendPosition: "right"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$SemiRadialGauge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: 92,
                                    title: "Compliance Rate",
                                    height: 140
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-12 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
                        className: "col-span-12 md:col-span-7 lg:col-span-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$HorizontalBarChar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            height: 240,
                            title: "License Expiry Trend",
                            labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun"
                            ],
                            values: [
                                5,
                                8,
                                12,
                                7,
                                18,
                                28
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Panel"], {
                        className: "col-span-12 md:col-span-5 lg:col-span-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$charts$2f$DonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            title: "Software by Type",
                            height: 240,
                            values: [
                                94,
                                6
                            ],
                            labels: [
                                "Standard",
                                "Special"
                            ],
                            colors: [
                                "#10b981",
                                "#3b82f6"
                            ],
                            legendPosition: "bottom"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/(app)/dashboard/page.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_987af5ea._.js.map