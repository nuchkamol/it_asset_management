module.exports = [
"[project]/apps/web/components/ui/ComplianceBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComplianceBadge",
    ()=>ComplianceBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// components/ui/ComplianceBadge.tsx
'use client';
;
;
const complianceMap = {
    'Compliant': 'text-green-700 bg-green-100',
    'Non-Compliant': 'text-red-700 bg-red-100'
};
function ComplianceBadge({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-block rounded px-2 py-0.5 text-xs font-semibold', complianceMap[label]),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/ComplianceBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/detail/DetailHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailHeader",
    ()=>DetailHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// components/detail/DetailHeader.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ComplianceBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ComplianceBadge.tsx [app-ssr] (ecmascript)");
;
;
function DetailHeader({ title, compliance, onBack, onEdit, onDeleteClick, breadcrumbs, //   เพิ่มช่องว่างด้านขวา
rightExtra }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-slate-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    typeof compliance !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ComplianceBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComplianceBadge"], {
                            label: compliance
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    breadcrumbs && breadcrumbs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-2 text-sm text-gray-500",
                        "aria-label": "Breadcrumb",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex flex-wrap items-center gap-1",
                            children: breadcrumbs.map((bc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center",
                                    children: [
                                        bc.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: bc.href,
                                            className: "hover:text-gray-700 underline-offset-2 hover:underline",
                                            children: bc.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                            lineNumber: 41,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: bc.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, this),
                                        idx < breadcrumbs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-2 text-gray-400",
                                            "aria-hidden": "true",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                            lineNumber: 51,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto flex items-center gap-2",
                children: [
                    rightExtra /* ← ปุ่ม/เมนูจากภายนอก */ ,
                    onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onEdit,
                        className: "inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                children: "✏️"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            " Edit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    onDeleteClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onDeleteClick,
                        className: "inline-flex items-center gap-1 rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                children: "🗑️"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            " Delete"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/ui/Tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabList",
    ()=>TabList,
    "TabPanel",
    ()=>TabPanel,
    "TabTrigger",
    ()=>TabTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// src/components/ui/Tabs.tsx
"use client";
;
;
function TabTrigger({ active, children, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b-2 px-1.5 py-2 text-sm font-semibold", active ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"),
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function TabList({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "mt-4 flex gap-4 border-b border-slate-200",
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
function TabPanel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
}),
"[project]/apps/web/components/detail/DetailInfo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailInfoGrid",
    ()=>DetailInfoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/detail/DetailInfo.tsx
"use client";
;
function InfoRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-sm text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                className: "text-sm font-semibold text-slate-900",
                children: value ?? "-"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function DetailInfoGrid({ left, right }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 grid grid-cols-1 gap-6 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-2 gap-x-6 gap-y-3",
                children: left.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: r.label,
                        value: r.value
                    }, i, false, {
                        fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-2 gap-x-6 gap-y-3",
                children: right.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
                        label: r.label,
                        value: r.value
                    }, i, false, {
                        fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/detail/HistoryList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryList",
    ()=>HistoryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function HistoryList({ history }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "mt-4 space-y-3",
        children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "text-sm text-slate-500",
            children: "No history yet."
        }, void 0, false, {
            fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
            lineNumber: 10,
            columnNumber: 9
        }, this) : history.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "grid grid-cols-[16px_1fr] gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-slate-900",
                                children: h.detail
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: [
                                    h.actor,
                                    " • ",
                                    h.timestamp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                                lineNumber: 17,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                ]
            }, h.id, true, {
                fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/modals/ConfirmModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmModal",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ConfirmModal({ title, description, open, onConfirm, onCancel }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 grid place-items-center bg-black/30 p-4",
        role: "dialog",
        "aria-modal": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-semibold text-slate-900",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-600",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                    lineNumber: 20,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700",
                            onClick: onConfirm,
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/modals/ModalButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryButton",
    ()=>PrimaryButton,
    "SecondaryButton",
    ()=>SecondaryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
function SecondaryButton({ className, children, disabled, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        ...props,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-md border border-slate-300 px-4 py-2 text-sm font-medium', 'text-slate-700 hover:bg-slate-50 disabled:opacity-60', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function PrimaryButton({ className, children, disabled, loading, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        disabled: disabled || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 rounded-md', 'bg-blue-600 px-4 py-2 text-sm font-semibold text-white', 'hover:bg-blue-700 disabled:opacity-60', className),
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4 animate-spin",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "white",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "white",
                        d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/modals/ModalFooterActions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalFooterActions",
    ()=>ModalFooterActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ModalButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ModalFooterActions({ onCancel, onSubmit, submitting = false, cancelLabel = 'Cancel', submitLabel = 'Save changes', sticky = true, align = 'end', className, disabled = false, submitAsForm = true }) {
    const justify = align === 'between' ? 'sm:justify-between' : align === 'center' ? 'sm:justify-center' : align === 'start' ? 'sm:justify-start' : 'sm:justify-end';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sticky && 'sticky bottom-0 mt-6 bg-white', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-slate-200 px-5 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row', justify),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SecondaryButton"], {
                        onClick: onCancel,
                        disabled: submitting || disabled,
                        children: cancelLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                        type: submitAsForm ? 'submit' : 'button',
                        onClick: !submitAsForm ? onSubmit : undefined,
                        loading: submitting,
                        disabled: disabled,
                        children: submitLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/modals/EditModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditModal",
    ()=>EditModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalFooterActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ModalFooterActions.tsx [app-ssr] (ecmascript)");
// src/components/modals/EditModal.tsx
'use client';
;
;
;
function EditModal({ title, open, fields, initialValues, onSubmit, onClose, submitting = false, submitLabel = 'Save', cancelLabel = 'Cancel', closeOnBackdrop = true, maxHeight = '90vh', heightMode = 'adaptive', overlayOpacity = 20 }) {
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ต้องเปิดสกรอลภายในไหม (เฉพาะ adaptive)
    const [clamped, setClamped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // โฟกัสฟิลด์แรกเมื่อเปิด
    const firstInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------------------- helpers ---------------------- */ const getMaxHeightPx = ()=>{
        if (typeof maxHeight === 'number') return maxHeight;
        const mh = String(maxHeight).trim();
        // 1) 90vh
        const vhMatch = mh.match(/^(\d+(?:\.\d+)?)vh$/i);
        if (vhMatch) {
            const vh = parseFloat(vhMatch[1]);
            return window.innerHeight * vh / 100;
        }
        // 2) px
        const pxMatch = mh.match(/^(\d+(?:\.\d+)?)px$/i);
        if (pxMatch) {
            return parseFloat(pxMatch[1]);
        }
        // 3) calc(100vh - 2rem) (รองรับรูปแบบง่าย ๆ)
        const calcMatch = mh.match(/^calc\(\s*100vh\s*-\s*([0-9.]+)rem\s*\)$/i);
        if (calcMatch) {
            const rem = parseFloat(calcMatch[1]);
            const remPx = rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
            return window.innerHeight - remPx;
        }
        // default fall back → 90vh
        return window.innerHeight * 90 / 100;
    };
    const measure = ()=>{
        if (!containerRef.current || !headerRef.current || !innerRef.current || !footerRef.current) {
            setClamped(false);
            return;
        }
        const headerH = headerRef.current.offsetHeight;
        const contentH = innerRef.current.scrollHeight;
        const footerH = footerRef.current.offsetHeight;
        const total = headerH + contentH + footerH;
        const maxPx = getMaxHeightPx();
        // ถ้าสูงเกินเพดาน → clamp + เปิดสกรอลภายใน
        setClamped(total > maxPx);
    };
    /* ---------------------- effects ---------------------- */ // reset values เมื่อเปิด
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) setValues(initialValues);
    }, [
        open,
        initialValues
    ]);
    // focus ฟิลด์แรก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const t = setTimeout(()=>firstInputRef.current?.focus(), 0);
        return ()=>clearTimeout(t);
    }, [
        open
    ]);
    // ล็อกสกรอล body
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = prev;
        };
    }, [
        open
    ]);
    // ปิดด้วย ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKey = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);
        return ()=>window.removeEventListener('keydown', onKey);
    }, [
        open,
        onClose
    ]);
    // เตือน dev ถ้า field.name ซ้ำ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const names = fields.map((f)=>f.name);
        const dup = names.filter((n, i)=>names.indexOf(n) !== i);
        if (dup.length) {
            // eslint-disable-next-line no-console
            console.warn('[EditModal] Duplicate field.name:', Array.from(new Set(dup)));
        }
    }, [
        open,
        fields
    ]);
    // วัดคอนเทนต์ → ตัดสินใจ clamp หรือไม่
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!open) return;
        if (heightMode === 'scroll') {
            setClamped(true);
            return;
        }
        if (heightMode === 'fit') {
            setClamped(false);
            return;
        }
        // adaptive
        measure();
        const onResize = ()=>measure();
        window.addEventListener('resize', onResize);
        const ro = new ResizeObserver(()=>measure());
        if (innerRef.current) ro.observe(innerRef.current);
        return ()=>{
            window.removeEventListener('resize', onResize);
            ro.disconnect();
        };
    }, [
        open,
        heightMode,
        fields.length
    ]);
    if (!open) return null;
    /* ---------------------- handlers ---------------------- */ const handleBackdropClick = (e)=>{
        if (!closeOnBackdrop) return;
        if (e.target === overlayRef.current) onClose();
    };
    const setFieldValue = (name, value)=>{
        setValues((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await onSubmit(values);
    };
    /* ---------------------- UI helpers ---------------------- */ const inputClass = 'w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 ' + 'placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 ' + 'disabled:opacity-60';
    const gridClass = 'space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0';
    const renderField = (field, index)=>{
        const commonProps = {
            id: `field-${field.name}`,
            name: field.name,
            placeholder: field.placeholder,
            'aria-invalid': !!field.error,
            'aria-describedby': field.helpText ? `help-${field.name}` : undefined,
            disabled: field.disabled,
            required: field.required,
            className: inputClass,
            ref: index === 0 ? firstInputRef : undefined
        };
        const value = values[field.name];
        switch(field.type ?? 'text'){
            case 'textarea':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ...commonProps,
                    rows: 4,
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this);
            case 'select':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    ...commonProps,
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value),
                    className: inputClass + ' appearance-none',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            children: field.placeholder ?? 'Select…'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        (field.options ?? []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: opt.value,
                                children: opt.label
                            }, `${field.name}-${opt.value}`, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this);
            case 'number':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "number",
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value === '' ? '' : Number(e.target.value))
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this);
            case 'checkbox':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "checkbox",
                    checked: !!value,
                    onChange: (e)=>setFieldValue(field.name, e.target.checked),
                    className: "h-4 w-4 rounded border-slate-300 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, this);
            case 'date':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "date",
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this);
            case 'email':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "email",
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 294,
                    columnNumber: 11
                }, this);
            case 'url':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "url",
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...commonProps,
                    type: "text",
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value)
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                    lineNumber: 312,
                    columnNumber: 11
                }, this);
        }
    };
    // สไตล์ของ container:
    // - ถ้า clamped → ให้ "height: maxHeight" (มีความสูงแน่นอนเพื่อให้ flex แจกพื้นที่/สกรอลได้)
    // - ถ้าไม่ clamped → ให้ "height: auto" (สูงตามคอนเทนต์)
    const containerStyle = {
        maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : String(maxHeight),
        height: heightMode === 'scroll' ? typeof maxHeight === 'number' ? `${maxHeight}px` : String(maxHeight) : heightMode === 'fit' ? 'auto' : clamped ? typeof maxHeight === 'number' ? `${maxHeight}px` : String(maxHeight) : 'auto'
    };
    const overlayClass = `fixed inset-0 z-[100] grid place-items-center bg-black/${overlayOpacity} p-4`;
    /* ---------------------- render ---------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: overlayClass,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        onClick: handleBackdropClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full max-w-2xl rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden isolate",
            style: containerStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "z-10 flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "modal-title",
                                className: "text-base font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Close",
                                onClick: onClose,
                                className: "ml-auto grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "flex-1 min-h-0 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollBoxRef,
                                className: 'flex-1 min-h-0 px-5 py-5 ' + (heightMode === 'scroll' || heightMode === 'adaptive' && clamped ? 'overflow-y-auto' : 'overflow-visible'),
                                style: {
                                    maxHeight: 'inherit'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: innerRef,
                                    className: "pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: gridClass,
                                        children: fields.map((field, idx)=>{
                                            const spanClass = field.colSpan === 2 ? 'md:col-span-2' : '';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col gap-1 min-w-0 ${spanClass}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `field-${field.name}`,
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: [
                                                            field.label,
                                                            ' ',
                                                            field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-600",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 55
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 25
                                                    }, this),
                                                    renderField(field, idx),
                                                    field.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: `help-${field.name}`,
                                                        className: "text-xs text-slate-500",
                                                        children: field.helpText
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 27
                                                    }, this),
                                                    field.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-red-600",
                                                        children: field.error
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, `${field.name}-${idx}`, true, {
                                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                lineNumber: 397,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                        lineNumber: 393,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: footerRef,
                                className: "shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalFooterActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModalFooterActions"], {
                                    onCancel: onClose,
                                    submitting: submitting,
                                    cancelLabel: cancelLabel,
                                    submitLabel: submitLabel,
                                    sticky: false,
                                    align: "end",
                                    submitAsForm: true,
                                    className: "bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                lineNumber: 360,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/modals/EditModal.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/detail/DetailView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailView",
    ()=>DetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/HistoryList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ConfirmModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$EditModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/EditModal.tsx [app-ssr] (ecmascript)");
// components/detail/DetailView.tsx
"use client";
;
;
;
;
;
;
;
;
function DetailView({ // Header
title, compliance, breadcrumbs, headerRightExtra, // ⭐️ Tabs (ใหม่)
tabs, defaultTabKey, // Legacy (ยังรองรับเพื่อความเข้ากันได้กับหน้าเดิม)
info, installationSection, history, // Actions / Modals
onBack, onEdit, onDelete, editConfig, modalProps }) {
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpenEdit = ()=>{
        onEdit?.();
        setOpen(true);
    };
    // ---- สร้างรายการแท็บที่จะใช้จริง (ถ้ามี tabs ให้ใช้ตามนั้น, ถ้าไม่มีก็ประกอบจาก props เดิม) ----
    const computedTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (tabs && tabs.length > 0) {
            return tabs.filter((t)=>!t.hidden);
        }
        // ถ้าไม่ส่ง tabs มา: ประกอบรูปแบบเดิมให้ (Detail | Installations | History)
        const base = [];
        if (info) {
            base.push({
                key: "detail",
                label: "Detail",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailInfoGrid"], {
                    left: info.left,
                    right: info.right
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                    lineNumber: 129,
                    columnNumber: 18
                }, this)
            });
        }
        if (installationSection) {
            base.push({
                key: "installation",
                label: "Installations",
                content: installationSection
            });
        }
        if (history) {
            base.push({
                key: "history",
                label: "History",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistoryList"], {
                    history: history
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                    lineNumber: 145,
                    columnNumber: 18
                }, this)
            });
        }
        // ป้องกันเคสไม่มีอะไรเลย
        return base.length > 0 ? base : [
            {
                key: "detail",
                label: "Detail",
                content: info ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailInfoGrid"], {
                    left: info.left,
                    right: info.right
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                    lineNumber: 157,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-slate-500",
                    children: "No content"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                    lineNumber: 159,
                    columnNumber: 15
                }, this)
            }
        ];
    }, [
        tabs,
        info,
        installationSection,
        history
    ]);
    // ---- จัดการ active tab (คง behavior เดิม: local state) ----
    const keys = computedTabs.map((t)=>t.key);
    const firstKey = keys[0];
    const initialKey = defaultTabKey && keys.includes(defaultTabKey) ? defaultTabKey : firstKey;
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialKey);
    // ถ้าโครงแท็บเปลี่ยน และ key ปัจจุบันไม่อยู่แล้ว ให้สลับไปแท็บแรก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!keys.includes(activeKey)) {
            setActiveKey(keys[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        keys.join("|")
    ]);
    // (ออปชัน) ถ้าอยากให้ defaultTabKey ที่เปลี่ยนภายหลังมีผล ให้เปิด block นี้
    // useEffect(() => {
    //   if (defaultTabKey && keys.includes(defaultTabKey)) {
    //     setActiveKey(defaultTabKey);
    //   }
    // }, [defaultTabKey, keys.join("|")]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "aria-labelledby": "detail-view-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-slate-200 bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailHeader"], {
                        title: title,
                        compliance: compliance,
                        onBack: onBack,
                        onEdit: handleOpenEdit,
                        onDeleteClick: onDelete ? ()=>setConfirmOpen(true) : undefined,
                        breadcrumbs: breadcrumbs,
                        rightExtra: headerRightExtra
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabList"], {
                        children: computedTabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabTrigger"], {
                                active: activeKey === t.key,
                                onClick: ()=>//   type guard ป้องกัน union ที่บางสมาชิกอาจไม่มี disabled
                                    !("disabled" in t && t.disabled) && setActiveKey(t.key),
                                "aria-disabled": "disabled" in t ? t.disabled : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "disabled" in t && t.disabled ? "opacity-50" : "",
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    "badge" in t && t.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: t.badge
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, t.key, true, {
                                fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    computedTabs.map((t)=>activeKey === t.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabPanel"], {
                            children: typeof t.content === "function" ? t.content() : t.content
                        }, t.key, false, {
                            fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this) : null)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfirmModal"], {
                open: confirmOpen,
                title: `Delete “${title}”?`,
                description: "This action cannot be undone.",
                onCancel: ()=>setConfirmOpen(false),
                onConfirm: ()=>{
                    setConfirmOpen(false);
                    onDelete?.();
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            editConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$EditModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditModal"], {
                title: editConfig.title,
                open: open,
                fields: editConfig.fields,
                initialValues: editConfig.initialValues,
                submitting: editConfig.submitting,
                submitLabel: editConfig.submitLabel ?? "Save",
                cancelLabel: editConfig.cancelLabel ?? "Cancel",
                onSubmit: async (formValues)=>{
                    await editConfig.onSubmit(formValues);
                    setOpen(false);
                },
                onClose: ()=>setOpen(false),
                ...modalProps
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                lineNumber: 250,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/DataTableHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableHeader",
    ()=>DataTableHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// ปรับ path ให้ตรงกับโปรเจกต์ของคุณ ถ้าคุณย้าย type ไปไว้ที่ 'types/table'
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
'use client';
;
;
function DataTableHeader({ columns, sorting, onToggleSort, size, defaultColMinWidth, leadingHeaderCell }) {
    const sizeClass = {
        xs: 'px-2 py-1 text-[12px]',
        sm: 'px-3 py-2 text-[13px]',
        md: 'px-3 py-2 text-[14px]'
    }[size];
    const alignToClass = (align)=>align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    // ใช้ตัวแรกเป็นคอลัมน์ sorting หลัก
    const current = sorting?.[0];
    const activeId = current?.id ?? null;
    const isDesc = current?.desc ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: "sticky top-0 z-10 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: [
                leadingHeaderCell,
                columns.map((col)=>{
                    const colId = String(col.accessorKey);
                    const isActive = activeId === colId;
                    const indicator = isActive ? isDesc ? ' 🔽' : ' 🔼' : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('font-semibold text-slate-700', sizeClass, alignToClass(col.align), col.headerClassName),
                        style: {
                            minWidth: col.width ?? defaultColMinWidth,
                            whiteSpace: 'nowrap'
                        },
                        "aria-sort": isActive ? isDesc ? 'descending' : 'ascending' : 'none',
                        scope: "col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onToggleSort?.(col),
                            className: "inline-flex items-center gap-1 bg-transparent font-semibold text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                            style: {
                                border: 'none',
                                cursor: 'pointer'
                            },
                            "aria-pressed": isActive,
                            "aria-label": isActive ? `Sort by ${colId} ${isDesc ? 'descending' : 'ascending'}` : `Sort by ${colId}`,
                            children: [
                                col.header,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: indicator
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/table/DataTableHeader.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/table/DataTableHeader.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    }, String(col.id ?? col.accessorKey), false, {
                        fileName: "[project]/apps/web/components/table/DataTableHeader.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/components/table/DataTableHeader.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTableHeader.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/DataTableBody.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableBody",
    ()=>DataTableBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// src/components/datatable/DataTableBody.tsx
'use client';
;
;
function DataTableBody({ columns, rows, onRowActivate, variant, size, defaultColMinWidth, renderLeadingCell }) {
    const rowBase = 'border-b border-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-blue-300';
    const rowHover = 'hover:bg-slate-50';
    const rowStriped = variant === 'striped' ? 'odd:bg-slate-50' : '';
    const tdSize = {
        xs: 'px-2 py-1 text-[12px]',
        sm: 'px-3 py-2 text-[13px]',
        md: 'px-3 py-2 text-[14px]'
    }[size];
    const alignToClass = (align)=>align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    // ป้องกัน row-activate เมื่อ target เป็น element interactive
    const isInteractive = (el)=>!!el?.closest('button,a,input,textarea,select,label,[role="button"]');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        className: "bg-white",
        children: rows.map((row, ri)=>{
            const key = row.id ?? ri;
            const handleRowClick = (e)=>{
                if (isInteractive(e.target)) return;
                onRowActivate(row);
            };
            const handleRowKeyDown = (e)=>{
                if (isInteractive(e.target)) return;
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onRowActivate(row);
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(rowBase, rowHover, rowStriped, 'cursor-pointer'),
                tabIndex: 0,
                onClick: handleRowClick,
                onKeyDown: handleRowKeyDown,
                children: [
                    renderLeadingCell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(tdSize, 'w-10 align-middle'),
                        onClick: (e)=>e.stopPropagation(),
                        children: renderLeadingCell(row, ri)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/table/DataTableBody.tsx",
                        lineNumber: 77,
                        columnNumber: 15
                    }, this),
                    columns.map((c)=>{
                        const value = row[c.accessorKey];
                        const cellKey = String(c.id ?? c.accessorKey ?? `col-${ri}`);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(tdSize, 'text-slate-900', alignToClass(c.align), c.cellClassName),
                            style: {
                                minWidth: c.width ?? defaultColMinWidth,
                                whiteSpace: 'nowrap'
                            },
                            onClick: (e)=>{
                                const target = e.target;
                                if (isInteractive(target)) e.stopPropagation();
                            },
                            children: typeof c.cell === 'function' ? c.cell(value, row, ri) : String(value ?? '')
                        }, cellKey, false, {
                            fileName: "[project]/apps/web/components/table/DataTableBody.tsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, key, true, {
                fileName: "[project]/apps/web/components/table/DataTableBody.tsx",
                lineNumber: 68,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTableBody.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/DataTableStates.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyBody",
    ()=>EmptyBody,
    "ErrorBody",
    ()=>ErrorBody,
    "LoadingBody",
    ()=>LoadingBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/datatable/DataTableStates.tsx
'use client';
;
function LoadingBody({ colSpan, size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: sizeClass,
                colSpan: colSpan,
                children: "กำลังโหลด..."
            }, void 0, false, {
                fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function ErrorBody({ colSpan, message = 'เกิดข้อผิดพลาด', size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: sizeClass + ' text-red-700',
                colSpan: colSpan,
                children: message
            }, void 0, false, {
                fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function EmptyBody({ colSpan, message = 'ไม่มีข้อมูล', size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: sizeClass + ' text-slate-500',
                colSpan: colSpan,
                children: message
            }, void 0, false, {
                fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTableStates.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/pagination/Pagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/components/pagination/Pagination.tsx
'use client';
;
;
function Pagination({ // Base mode props (optional ถ้าใช้ adapter)
totalCount: _totalCount, pageSize: _pageSize, currentPage: _currentPage, onPageChange: _onPageChange, siblingCount = 1, onPageSizeChange, pageSizeOptions = [
    10,
    20,
    50,
    100
], disabled = false, // Adapter mode props (แนะนำให้ใช้คู่กับ DataTable)
pagination, totalPages, onPaginationChange }) {
    // ----- Adapter layer (0-based -> 1-based) -----
    const isAdapter = Boolean(onPaginationChange && pagination);
    // ขนาดหน้า: จาก adapter (ถ้ามี) มิฉะนั้น base
    const pageSize = isAdapter ? pagination.pageSize ?? 10 : _pageSize ?? 10;
    // หน้า (1-based) เพื่อแสดงผล
    const currentPage = isAdapter ? (pagination.pageIndex ?? 0) + 1 : _currentPage ?? 1;
    // totalCount/totalPages ที่ใช้คำนวณ
    const totalCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (typeof totalPages === 'number' && totalPages > 0) {
            // ถ้า server คำนวณหน้ามาให้แล้ว ใช้เป็นแหล่งจริง
            return totalPages * pageSize;
        }
        return _totalCount ?? 0;
    }, [
        totalPages,
        pageSize,
        _totalCount
    ]);
    // จำนวนหน้าที่คำนวณได้
    const totalPagesComputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0, [
        totalCount,
        pageSize
    ]);
    // ----- handlers -----
    const gotoPage1 = (next1)=>{
        if (disabled) return;
        if (totalPagesComputed === 0) return;
        const safe = Math.max(1, Math.min(totalPagesComputed, next1));
        if (isAdapter) {
            onPaginationChange({
                pageIndex: safe - 1,
                pageSize
            });
        } else {
            _onPageChange?.(safe);
        }
    };
    const onPrev = ()=>gotoPage1(currentPage - 1);
    const onNext = ()=>gotoPage1(currentPage + 1);
    const onPageSizeChangeAdapter = (nextSize)=>{
        if (disabled) return;
        if (isAdapter) {
            // ดีฟอลต์: รีเซ็ตหน้าเป็น 1 เมื่อเปลี่ยน page size
            onPaginationChange({
                pageIndex: 0,
                pageSize: nextSize
            });
        } else {
            onPageSizeChange?.(nextSize);
        }
    };
    // ----- สร้างหน้าต่างเลขหน้า -----
    const pageRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (totalPagesComputed <= 1) return [
            1
        ];
        const sib = Math.max(0, siblingCount ?? 1);
        const first = 1;
        const last = totalPagesComputed;
        const start = Math.max(first + 1, currentPage - sib);
        const end = Math.min(last - 1, currentPage + sib);
        const range = [
            first
        ];
        if (start > first + 1) range.push('...');
        for(let p = start; p <= end; p++){
            if (p !== first && p !== last) range.push(p);
        }
        if (end < last - 1) range.push('...');
        if (last > first) range.push(last);
        return range;
    }, [
        currentPage,
        siblingCount,
        totalPagesComputed
    ]);
    if (totalPagesComputed === 0) return null;
    // ----- render -----
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${disabled ? 'opacity-50 pointer-events-none' : ''}`,
        role: "navigation",
        "aria-label": "Pagination",
        children: [
            pageSizeOptions?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mr-2 flex items-center gap-1 text-sm text-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Per page:"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "rounded border-gray-300 bg-white px-2 py-1 text-sm",
                        value: pageSize,
                        onChange: (e)=>onPageSizeChangeAdapter(Number(e.target.value)),
                        disabled: disabled,
                        children: pageSizeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: opt,
                                children: opt
                            }, opt, false, {
                                fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded border border-gray-300 bg-white px-2 py-1 text-sm disabled:opacity-50",
                onClick: onPrev,
                disabled: currentPage <= 1,
                "aria-label": "Previous page",
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1",
                "aria-label": "Page numbers",
                children: pageRange.map((p, idx)=>p === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 text-gray-500",
                        "aria-hidden": true,
                        children: "…"
                    }, `dots-${idx}`, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>gotoPage1(p),
                        className: [
                            'rounded px-3 py-1 text-sm',
                            p === currentPage ? 'bg-blue-600 text-white' : 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                        ].join(' '),
                        "aria-current": p === currentPage ? 'page' : undefined,
                        "aria-label": `Page ${p}`,
                        children: p
                    }, `p-${p}`, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 168,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded border border-gray-300 bg-white px-2 py-1 text-sm disabled:opacity-50",
                onClick: onNext,
                disabled: currentPage >= totalPagesComputed,
                "aria-label": "Next page",
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTablePaginationBar",
    ()=>DataTablePaginationBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pagination/Pagination.tsx [app-ssr] (ecmascript)");
// src/components/datatable/DataTablePaginationBar.tsx
'use client';
;
;
function DataTablePaginationBar({ pagination, totalPages, onPaginationChange, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end border-t border-slate-200 bg-white px-2 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
            // --- Adapter props ของ Pagination เดิมของคุณ ---
            pagination: pagination,
            totalPages: totalPages,
            onPaginationChange: onPaginationChange,
            // --- Options ---
            siblingCount: 2,
            onPageSizeChange: ()=>{
            /* ให้ Pagination ภายในจัดการเรียก onPaginationChange({ pageIndex: 0, pageSize }) */ },
            pageSizeOptions: [
                10,
                20,
                50,
                100
            ],
            disabled: disabled
        }, void 0, false, {
            fileName: "[project]/apps/web/components/table/DataTablePaginationBar.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/components/table/DataTablePaginationBar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/DataTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableStates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// src/components/datatable/DataTable.tsx
'use client';
;
;
;
;
;
;
;
;
function DataTable(props) {
    const { columns, rows, totalRows, pagination, onPaginationChange, sorting, onSortingChange, variant = 'default', size = 'xs', emptyMessage = 'ไม่มีข้อมูล', isLoading, isError, errorMessage, maxBodyHeight = 340, onRowClick, rowHref, defaultColMinWidth = 88, clientSideSort = false, // selection
    selectable = false, selectedIds, onSelectionChange, getRowId } = props;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const rowId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((r)=>getRowId ? getRowId(r) : r.id, [
        getRowId
    ]);
    const totalPages = totalRows && pagination ? Math.max(1, Math.ceil(totalRows / pagination.pageSize)) : undefined;
    const containerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-md border border-slate-200');
    const tableWrapperClass = 'overflow-x-auto overflow-y-auto';
    const tableClass = 'w-full min-w-[680px]';
    const handleRowNavigate = (row)=>{
        if (onRowClick) {
            onRowClick(row);
            return;
        }
        if (rowHref) {
            const path = rowHref(row);
            if (path) router.push(path);
            return;
        }
    };
    // Toggle sort แบบ TanStack
    const toggleSort = (col)=>{
        const colId = String(col.accessorKey);
        const cur = sorting ?? [];
        const curFirst = cur[0];
        let next;
        if (curFirst && curFirst.id === colId) {
            next = [
                {
                    id: colId,
                    desc: !curFirst.desc
                }
            ];
        } else {
            next = [
                {
                    id: colId,
                    desc: false
                }
            ];
        }
        onSortingChange?.(next);
    };
    // (optional) client-side sort เฉพาะกรณีอยากให้เรียงในหน้า (mock/demo)
    const effectiveRows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!clientSideSort) return rows;
        if (!sorting?.length) return rows;
        const { id, desc } = sorting[0];
        const col = columns.find((c)=>String(c.accessorKey) === id);
        const getValue = (row)=>{
            if (col?.getSortValue) return col.getSortValue(row);
            return row[id];
        };
        const cmp = (a, b)=>{
            if (a == null && b == null) return 0;
            if (a == null) return -1;
            if (b == null) return 1;
            if (typeof a === 'number' && typeof b === 'number') return a - b;
            const da = new Date(a);
            const db = new Date(b);
            const aIsDate = !isNaN(da.valueOf());
            const bIsDate = !isNaN(db.valueOf());
            if (aIsDate && bIsDate) return da.getTime() - db.getTime();
            return String(a).localeCompare(String(b), undefined, {
                sensitivity: 'base',
                numeric: true
            });
        };
        const arr = [
            ...rows
        ]; // clone เผื่อ rows เป็น readonly
        arr.sort((ra, rb)=>{
            const va = getValue(ra);
            const vb = getValue(rb);
            const res = cmp(va, vb);
            return desc ? -res : res;
        });
        return arr;
    }, [
        rows,
        sorting,
        columns,
        clientSideSort
    ]);
    // +1 คอลัมน์ ถ้ามีช่อง checkbox
    const colSpan = columns.length + (selectable ? 1 : 0);
    // เลือกทีละแถว
    const toggleRow = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((row, checked)=>{
        if (!onSelectionChange || !selectedIds) return;
        const id = rowId(row);
        const next = new Set(selectedIds);
        if (checked) next.add(id);
        else next.delete(id);
        onSelectionChange(next);
    }, [
        onSelectionChange,
        selectedIds,
        rowId
    ]);
    // เลือกทั้งหน้า
    const togglePage = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((checked)=>{
        if (!onSelectionChange || !selectedIds) return;
        const next = new Set(selectedIds);
        effectiveRows.forEach((r)=>{
            const id = rowId(r);
            if (checked) next.add(id);
            else next.delete(id);
        });
        onSelectionChange(next);
    }, [
        onSelectionChange,
        selectedIds,
        effectiveRows,
        rowId
    ]);
    const headerChecked = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!selectedIds || !effectiveRows.length) return false;
        return effectiveRows.every((r)=>selectedIds.has(rowId(r)));
    }, [
        selectedIds,
        effectiveRows,
        rowId
    ]);
    const headerIndeterminate = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!selectedIds || !effectiveRows.length) return false;
        const countChecked = effectiveRows.filter((r)=>selectedIds.has(rowId(r))).length;
        return countChecked > 0 && countChecked < effectiveRows.length;
    }, [
        selectedIds,
        effectiveRows,
        rowId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: tableWrapperClass,
                style: {
                    maxHeight: maxBodyHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: tableClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTableHeader"], {
                            columns: columns,
                            sorting: sorting,
                            onToggleSort: toggleSort,
                            size: size,
                            defaultColMinWidth: defaultColMinWidth,
                            //   ช่องนำหน้า: checkbox select page
                            leadingHeaderCell: selectable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "w-10 px-3 py-2 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    "aria-label": "Select page",
                                    checked: headerChecked,
                                    ref: (el)=>{
                                        if (el) el.indeterminate = headerIndeterminate;
                                    },
                                    onChange: (e)=>togglePage(e.target.checked)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/table/DataTable.tsx",
                                    lineNumber: 194,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/table/DataTable.tsx",
                                lineNumber: 193,
                                columnNumber: 17
                            }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingBody"], {
                            colSpan: colSpan,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, this),
                        isError && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBody"], {
                            colSpan: colSpan,
                            message: errorMessage,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 210,
                            columnNumber: 37
                        }, this),
                        !isLoading && !isError && effectiveRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmptyBody"], {
                            colSpan: colSpan,
                            message: emptyMessage,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        !isLoading && !isError && effectiveRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTableBody"], {
                            columns: columns,
                            rows: effectiveRows,
                            variant: variant,
                            size: size,
                            defaultColMinWidth: defaultColMinWidth,
                            onRowActivate: handleRowNavigate,
                            //   ส่งเฉพาะ “content” ของเซลล์ ไม่ใช่ <td> ครอบ
                            renderLeadingCell: selectable ? (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: !!selectedIds?.has(rowId(row)),
                                    onChange: (e)=>toggleRow(row, e.target.checked),
                                    onClick: (e)=>e.stopPropagation(),
                                    "aria-label": "Select row"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/table/DataTable.tsx",
                                    lineNumber: 228,
                                    columnNumber: 23
                                }, void 0) : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/table/DataTable.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/table/DataTable.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            pagination && onPaginationChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTablePaginationBar"], {
                pagination: pagination,
                totalPages: totalPages,
                onPaginationChange: onPaginationChange,
                disabled: isLoading
            }, void 0, false, {
                fileName: "[project]/apps/web/components/table/DataTable.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/table/DataTable.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/table/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// src/components/datatable/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableStates.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/apps/web/components/tabbar/InstallationTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstallationTable",
    ()=>InstallationTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/table/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function InstallationTable(props) {
    const { rows, columns, page, pageSize, onPageChange, filters, onAfterFilter, // selection
    selectable = false, selectedIds, onSelectionChange, getRowId, // passthrough
    variant = 'default', size = 'xs', emptyMessage = 'ไม่พบข้อมูล', isLoading, isError, errorMessage, maxBodyHeight = 340, sorting, onSortingChange, clientSideSort = false, onRowClick, rowHref, defaultColMinWidth = 88 } = props;
    const rowId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((r)=>getRowId ? getRowId(r) : r?.id, [
        getRowId
    ]);
    // ---- filter (client-side) ----
    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const q = (filters.query ?? '').trim().toLowerCase();
        if (!q) return rows;
        const includesQ = (value)=>String(value ?? '').toLowerCase().includes(q);
        return rows.filter((r)=>{
            for (const c of columns){
                const anyC = c;
                // accessorKey
                if (typeof anyC.accessorKey === 'string') {
                    const v = r?.[anyC.accessorKey];
                    if (includesQ(v)) return true;
                }
                // cell
                if (typeof anyC.cell === 'function') {
                    let v = undefined;
                    if (typeof anyC.accessorKey === 'string') {
                        v = r?.[anyC.accessorKey];
                    }
                    const out = anyC.cell(v, r);
                    const text = reactNodeToText(out);
                    if (includesQ(text)) return true;
                }
            }
            return false;
        });
    }, [
        rows,
        columns,
        filters.query
    ]);
    const totalRows = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / Math.max(1, pageSize)));
    const safePage = Math.max(1, Math.min(page, totalPages));
    const pageRows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const startIdx = (safePage - 1) * pageSize;
        const endIdx = startIdx + pageSize;
        return filtered.slice(startIdx, endIdx);
    }, [
        filtered,
        safePage,
        pageSize
    ]);
    // callback ส่งผลกรองให้ parent (client-side mode เท่านั้น)
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        onAfterFilter?.({
            filteredRows: filtered,
            pageRows,
            totalRows
        });
    }, [
        filtered,
        pageRows,
        totalRows,
        onAfterFilter
    ]);
    //   แปลง onPaginationChange ของ DataTable (0-based) -> onPageChange ของเรา (1-based)
    const handlePaginationChange = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((next)=>{
        onPageChange?.(next.pageIndex + 1);
    }, [
        onPageChange
    ]);
    //   สร้าง rowHref สำหรับ DataTable ให้แน่ใจว่า return string เสมอ (หรือไม่ส่ง prop ถ้าไม่มี)
    const dtRowHref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!rowHref) return undefined;
        return (row)=>rowHref(row) ?? ''; // fallback เป็น '' ถ้า undefined
    }, [
        rowHref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
        columns: columns,
        /**   ส่งเฉพาะแถวของหน้านี้เข้า DataTable เพื่อให้ selection header ทำงานเฉพาะหน้า */ rows: pageRows,
        totalRows: totalRows,
        /**   DataTable ใช้ 0-based pageIndex */ pagination: {
            pageIndex: safePage - 1,
            pageSize
        },
        onPaginationChange: onPageChange ? handlePaginationChange : undefined,
        /** passthrough */ variant: variant,
        size: size,
        emptyMessage: emptyMessage,
        isLoading: isLoading,
        isError: isError,
        errorMessage: errorMessage,
        maxBodyHeight: maxBodyHeight,
        sorting: sorting,
        onSortingChange: onSortingChange,
        clientSideSort: clientSideSort,
        onRowClick: onRowClick,
        rowHref: dtRowHref,
        defaultColMinWidth: defaultColMinWidth,
        /** selection */ selectable: selectable,
        selectedIds: selectedIds,
        onSelectionChange: onSelectionChange,
        getRowId: getRowId
    }, void 0, false, {
        fileName: "[project]/apps/web/components/tabbar/InstallationTable.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
function reactNodeToText(n) {
    if (n == null || typeof n === 'boolean') return '';
    if (typeof n === 'string' || typeof n === 'number') return String(n);
    if (Array.isArray(n)) return n.map(reactNodeToText).join(' ');
    const props = n?.props;
    if (props?.children) return reactNodeToText(props.children);
    try {
        return String(n);
    } catch  {
        return '';
    }
}
}),
"[project]/apps/web/components/ui/SearchInput.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/components/installation/SearchInput.tsx
"use client";
;
;
function SearchInput({ value, onChange, placeholder = "Search" }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/SearchInput.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "search",
                placeholder: placeholder,
                className: "w-full rounded-md border border-slate-300 px-3 py-2 text-sm",
                value: value,
                onChange: (e)=>onChange(e.target.value)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/SearchInput.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400",
                children: "⌕"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/SearchInput.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/SearchInput.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/ui/ExportSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportSelect",
    ()=>ExportSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/components/installation/ExportSelect.tsx
"use client";
;
;
function ExportSelect({ onExport }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Export As"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                defaultValue: "",
                onChange: (e)=>{
                    const fmt = e.target.value;
                    if (fmt) onExport(fmt);
                    e.currentTarget.selectedIndex = 0; // reset
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Export As"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "csv",
                        children: "CSV"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "xlsx",
                        children: "Excel (.xlsx)"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "pdf",
                        children: "PDF"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/components/tabbar/InstallationSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstallationSection",
    ()=>InstallationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/tabbar/InstallationTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/SearchInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ExportSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pagination/Pagination.tsx [app-ssr] (ecmascript)"); //   ใช้ Pagination component
// components/tabbar/InstallationSection.tsx
"use client";
;
;
;
;
;
;
function InstallationSection({ rows, columns, resetKey, initialPage = 1, pageSize = 10, searchPlaceholder = "Search...", exportScope = "all", exportFileBaseName = "installations", // server-side props (optional)
totalRows, isLoading = false, errorMessage, onPageChange, maxBodyHeight = 480, // selection
selectable = false, selectedIds, onSelectionChange, getRowId, rightExtra }) {
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPage); // 1-based
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(pageSize);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        query: ""
    });
    // เก็บผลกรองล่าสุดจากตารางไว้สำหรับ export (client-side mode)
    const filteredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pageRowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const totalRowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const serverMode = typeof totalRows === "number" || typeof onPageChange === "function";
    // reset เมื่อ key/page เปลี่ยน
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPage(initialPage);
        setSize(pageSize);
        setFilters({
            query: ""
        });
    }, [
        resetKey,
        initialPage,
        pageSize
    ]);
    // === Export helpers ===
    const nodeToText = (n)=>{
        if (n == null || typeof n === "boolean") return "";
        if (typeof n === "string" || typeof n === "number") return String(n);
        if (Array.isArray(n)) return n.map(nodeToText).join(" ");
        // @ts-ignore
        const props = n?.props;
        if (props?.children) return nodeToText(props.children);
        try {
            return String(n);
        } catch  {
            return "";
        }
    };
    /**
   * แปลง dataset ให้เป็น headers + rows (plain text) สำหรับ export
   * รองรับทั้ง 3 รูปแบบของคอลัมน์:
   *  - accessor?: (row) => ReactNode
   *  - cell?: (value, row) => ReactNode
   *  - accessorKey?: string
   */ const buildFlatRows = (dataset)=>{
        const headers = columns.map((c)=>c.header ?? "");
        const data = dataset.map((r)=>columns.map((c)=>{
                const anyC = c;
                // 1) ถ้ามี accessor(row)
                if (typeof anyC.accessor === "function") {
                    return nodeToText(anyC.accessor(r));
                }
                // 2) ถ้ามี cell(value, row)
                if (typeof anyC.cell === "function") {
                    let value = undefined;
                    if (typeof anyC.accessorKey === "string") {
                        const key = anyC.accessorKey;
                        value = r?.[key];
                    }
                    return nodeToText(anyC.cell(value, r));
                }
                // 3) ถ้ามี accessorKey
                if (typeof anyC.accessorKey === "string") {
                    const key = anyC.accessorKey;
                    return nodeToText(r?.[key]);
                }
                // 4) ไม่เข้าเงื่อนไขใด ๆ
                return "";
            }));
        return {
            headers,
            data
        };
    };
    const downloadBlob = (blob, filename)=>{
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };
    const exportCSV = (dataset, filenameBase)=>{
        const { headers, data } = buildFlatRows(dataset);
        const escapeCSV = (val)=>{
            const needsQuote = /[",\n]/.test(val);
            const v = val.replace(/"/g, '""');
            return needsQuote ? `"${v}"` : v;
        };
        const lines = [
            headers.map((h)=>escapeCSV(String(h))).join(","),
            ...data.map((row)=>row.map((v)=>escapeCSV(String(v ?? ""))).join(","))
        ];
        const csv = lines.join("\n");
        downloadBlob(new Blob([
            csv
        ], {
            type: "text/csv;charset=utf-8"
        }), `${filenameBase}.csv`);
    };
    const exportXLSX = async (dataset, filenameBase)=>{
        // ถ้ามีไลบรารี xlsx ให้สลับมาใช้ได้
        console.warn("TODO: โปรดติดตั้งและเชื่อมต่อไลบรารี xlsx ก่อนใช้งาน export เป็น .xlsx");
        // ชั่วคราว: export CSV แทน
        exportCSV(dataset, filenameBase);
    };
    const exportPDF = async (dataset, filenameBase)=>{
        // ถ้ามี jsPDF + autotable ให้สลับมาใช้ได้
        console.warn("TODO: โปรดเชื่อมต่อ jsPDF + autotable ก่อนใช้งาน export เป็น PDF");
        // ชั่วคราว: export CSV แทน
        exportCSV(dataset, filenameBase);
    };
    const handleExport = async (format)=>{
        const base = exportFileBaseName;
        // ใน server mode:
        // - "page" → export เฉพาะ rows ของหน้า
        // - "all" → เตือน เพราะไม่มีข้อมูลทั้งหมดอยู่ในหน้านี้
        if (serverMode) {
            if (exportScope === "all") {
                console.warn("[InstallationSection] Export scope 'all' ใน server-side mode: ไม่สามารถส่งออกทั้งหมดได้จาก component นี้ (มีเฉพาะแถวที่โหลดมาในหน้า). " + "แนะนำทำ export ฝั่ง server หรือเปลี่ยน exportScope='page'.");
            }
            const dataset = rows ?? [];
            switch(format){
                case "csv":
                    exportCSV(dataset, base);
                    break;
                case "xlsx":
                    await exportXLSX(dataset, base);
                    break;
                case "pdf":
                    await exportPDF(dataset, base);
                    break;
                default:
                    console.warn("Unsupported export format:", format);
            }
            return;
        }
        // client-side mode เดิม:
        const dataset = exportScope === "page" ? pageRowsRef.current : filteredRef.current;
        if (!dataset || dataset.length === 0) {
            console.warn("No data to export.");
            return;
        }
        switch(format){
            case "csv":
                exportCSV(dataset, base);
                break;
            case "xlsx":
                await exportXLSX(dataset, base);
                break;
            case "pdf":
                await exportPDF(dataset, base);
                break;
            default:
                console.warn("Unsupported export format:", format);
        }
    };
    // ==== Pagination controls (shared) ====
    const computedTotalRows = serverMode ? Number(totalRows ?? 0) : Number(totalRowsRef.current ?? rows.length);
    const totalPages = Math.max(1, Math.ceil(Math.max(0, computedTotalRows) / Math.max(1, size)));
    const goToPage = (nextPage, nextSize = size)=>{
        setPage(nextPage);
        setSize(nextSize);
        if (serverMode) {
            onPageChange?.(nextPage, nextSize);
        }
    };
    const handlePageSizeChange = (nextSize)=>{
        // เปลี่ยน page size → กลับหน้า 1
        goToPage(1, nextSize);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[240px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                            value: filters.query ?? "",
                            onChange: (q)=>setFilters({
                                    query: q
                                }),
                            placeholder: searchPlaceholder
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                            rightExtra,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportSelect"], {
                                onExport: handleExport
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // className="border rounded overflow-auto"
                style: {
                    maxHeight: maxBodyHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstallationTable"], {
                    rows: rows,
                    columns: columns,
                    filters: filters,
                    page: page,
                    pageSize: size,
                    // ❌ ปิดการเปลี่ยนหน้าใน DataTable เพื่อลด pagination ซ้ำซ้อน
                    onPageChange: undefined,
                    onAfterFilter: serverMode ? undefined // server mode ไม่ใช้ผลกรอง/แบ่งหน้าจาก table
                     : ({ filteredRows, pageRows, totalRows })=>{
                        filteredRef.current = filteredRows;
                        pageRowsRef.current = pageRows;
                        totalRowsRef.current = totalRows;
                    },
                    selectable: selectable,
                    selectedIds: selectedIds,
                    onSelectionChange: onSelectionChange,
                    getRowId: getRowId
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 mt-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-600",
                        children: isLoading ? "กำลังโหลด..." : errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this) : `ทั้งหมด ${computedTotalRows.toLocaleString()} รายการ`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
                        // Base (1-based) mode
                        totalCount: computedTotalRows,
                        pageSize: size,
                        currentPage: page,
                        onPageChange: (p)=>goToPage(p),
                        onPageSizeChange: handlePageSizeChange,
                        pageSizeOptions: [
                            8,
                            10,
                            20,
                            50,
                            100
                        ],
                        disabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/tabbar/InstallationSection.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/components/ui/ActionSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionSelect",
    ()=>ActionSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/components/installation/ActionSelect.tsx
"use client";
;
;
function ActionSelect({ onAction, options, placeholder = "Action", disabled = false, resetAfterSelect = true, value, onChangeValue, className, selectClassName }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    // ถ้าไม่ได้คุมจากภายนอก → ใช้ internal state
    const [internalValue, setInternalValue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const isControlled = value !== undefined;
    const curValue = isControlled ? value : internalValue;
    const handleChange = (e)=>{
        const v = e.target.value;
        // แจ้ง state ออกไป (ถ้าเป็น controlled)
        onChangeValue?.(v);
        // ถ้าเลือกเป็น action จริง → ยิง onAction
        if (v) {
            onAction(v);
            // รีเซ็ต dropdown กลับ placeholder ตามสัญญา
            if (resetAfterSelect) {
                if (isControlled) onChangeValue?.("");
                else setInternalValue("");
                return;
            }
        }
        // ถ้าไม่ reset → เก็บค่าล่าสุดไว้
        if (!isControlled) setInternalValue(v);
    };
    const effectiveOptions = options.filter((op)=>!op.hidden);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Action"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: selectClassName ?? "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                value: curValue,
                onChange: handleChange,
                disabled: disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    effectiveOptions.map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: op.value,
                            disabled: op.disabled,
                            children: op.label
                        }, op.value, false, {
                            fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/toolbar/ActionToolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionToolbar",
    ()=>ActionToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ActionSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ActionSelect.tsx [app-ssr] (ecmascript)");
// components/installation/ActionToolbar.tsx
"use client";
;
;
;
;
function ActionToolbar({ selectedIds, to, onAction, openInNewTab = false, enableDefaultMapping = false, requireSelection = false, singleSelectionOnly = false, visibleActions, disabled = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const buildHref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((action)=>{
        const conf = to?.[action];
        if (conf) {
            if (typeof conf === "string") return conf;
            if (typeof conf === "function") return conf({
                action,
                selectedIds
            });
        }
        if (enableDefaultMapping) {
            const ids = encodeURIComponent(selectedIds.join(","));
            return undefined;
        }
        return undefined;
    }, [
        to,
        selectedIds,
        enableDefaultMapping
    ]);
    const selectionInvalidFor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((action)=>{
        // กติกาเบื้องต้น (ปรับได้): edit => single-only, delete/reassign => require selection
        if (singleSelectionOnly && action === "Edit") {
            return selectedIds.length !== 1;
        }
        if (requireSelection && (action === "Delete" || action === "Reassign")) {
            return selectedIds.length < 1;
        }
        return false;
    }, [
        requireSelection,
        singleSelectionOnly,
        selectedIds.length
    ]);
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const acts = visibleActions?.length ? visibleActions : [
            "Add"
        ]; // default set (ถ้าหน้าไม่ระบุ)
        return acts.map((a)=>({
                value: a,
                label: a === "Reassign" ? "Reassign" : a === "Edit" ? "Edit" : a === "Delete" ? "Delete" : a === "Add" ? "Add" : a,
                disabled: selectionInvalidFor(a) || !buildHref(a)
            }));
    }, [
        visibleActions,
        selectionInvalidFor,
        buildHref
    ]);
    const handleAction = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((act)=>{
        // guard อีกครั้ง
        if (options.find((o)=>o.value === act)?.disabled) return;
        onAction?.(act);
        const href = buildHref(act);
        if (!href) return;
        if (openInNewTab) window.open(href, "_blank", "noopener,noreferrer");
        else router.push(href);
    }, [
        buildHref,
        onAction,
        openInNewTab,
        router,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ActionSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionSelect"], {
        onAction: handleAction,
        options: options,
        placeholder: "Action",
        disabled: disabled,
        resetAfterSelect: true
    }, void 0, false, {
        fileName: "[project]/apps/web/components/toolbar/ActionToolbar.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InventoryActionToolbar",
    ()=>InventoryActionToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$ActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/ActionToolbar.tsx [app-ssr] (ecmascript)");
// src/components/toolbar/InventoryActionToolbar.tsx
"use client";
;
;
;
function InventoryActionToolbar({ entity, selectedIds, basePath, visibleActions, enableDefaultMapping = false, toOverride, onAction }) {
    const defaultTo = entity === "employees" ? {
        Add: `${basePath}/add`,
        Edit: ({ selectedIds })=>selectedIds.length === 1 ? `${basePath}/${selectedIds[0]}/edit` : undefined,
        Delete: ({ selectedIds })=>selectedIds.length > 0 ? `${basePath}/delete?ids=${encodeURIComponent(selectedIds.join(","))}` : undefined,
        "Assign Exceptions": ({ selectedIds })=>selectedIds.length === 1 ? `${basePath}/${selectedIds[0]}/assign` : undefined
    } : entity === "licenses" ? {
        //   licenses: มี assign ได้เช่นกัน
        Add: `${basePath}/add`,
        Edit: ({ selectedIds })=>selectedIds.length === 1 ? `${basePath}/${selectedIds[0]}/edit` : undefined,
        Delete: ({ selectedIds })=>selectedIds.length > 0 ? `${basePath}/delete?ids=${encodeURIComponent(selectedIds.join(","))}` : undefined,
        "Assign License": ({ selectedIds })=>selectedIds.length === 1 ? `${basePath}/${selectedIds[0]}/assign` : undefined
    } : {
        Add: `${basePath}/add`,
        Edit: ({ selectedIds })=>selectedIds.length === 1 ? `${basePath}/${selectedIds[0]}/edit` : undefined,
        Delete: ({ selectedIds })=>selectedIds.length > 0 ? `${basePath}/delete?ids=${encodeURIComponent(selectedIds.join(","))}` : undefined
    };
    const merged = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            ...enableDefaultMapping ? defaultTo : {},
            ...toOverride ?? {}
        }), [
        enableDefaultMapping,
        defaultTo,
        toOverride
    ]);
    const to = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (!visibleActions?.length) return merged;
        const out = {};
        visibleActions.forEach((a)=>{
            if (merged[a]) out[a] = merged[a];
        });
        return out;
    }, [
        merged,
        visibleActions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$ActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionToolbar"], {
        selectedIds: selectedIds,
        to: to,
        onAction: onAction,
        enableDefaultMapping: false,
        requireSelection: false,
        singleSelectionOnly: true,
        visibleActions: visibleActions
    }, void 0, false, {
        fileName: "[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/lib/show.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "show",
    ()=>show
]);
const show = (v)=>v === undefined || v === null || v === "" ? "—" : String(v);
}),
"[project]/apps/web/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// components/ui/StatusBadge.tsx
"use client";
;
;
const defaultMaps = {
    neutral: {
        default: "text-gray-700 bg-gray-100"
    },
    license: {
        Active: "text-green-700 bg-green-100",
        Expired: "text-red-700 bg-red-100"
    },
    compliance: {
        Compliant: "text-green-700 bg-green-100",
        "Non-Compliant": "text-amber-800 bg-amber-100"
    },
    exception: {
        Active: "text-green-700 bg-green-100",
        Inactive: "text-red-700 bg-red-100"
    },
    severity: {
        Low: "text-green-700 bg-green-100",
        Medium: "text-amber-800 bg-amber-100",
        High: "text-red-700 bg-red-100"
    },
    employees: {
        Active: "text-green-700 bg-green-100",
        Resigned: "text-red-700 bg-red-100"
    },
    softwareType: {
        Standard: "text-green-700",
        Special: "text-amber-800"
    }
};
function StatusBadge({ label, variant = "neutral", map, className }) {
    const palette = map ?? defaultMaps[variant] ?? defaultMaps.neutral;
    const cls = palette[label] ?? palette.default ?? defaultMaps.neutral.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-block rounded px-2 py-0.5 text-xs font-semibold", cls, className),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/StatusBadge.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/lib/date.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/date.ts
__turbopack_context__.s([
    "formatDateDMY",
    ()=>formatDateDMY,
    "formatDateSafe",
    ()=>formatDateSafe,
    "formatDateTH",
    ()=>formatDateTH,
    "formatDateTime",
    ()=>formatDateTime,
    "formatDateTimeDMY",
    ()=>formatDateTimeDMY,
    "formatDateUTC",
    ()=>formatDateUTC,
    "formatDue",
    ()=>formatDue
]);
const FALLBACK = "—";
function toDateSafe(input) {
    if (input == null) return null;
    const d = new Date(input);
    return Number.isNaN(d.getTime()) ? null : d;
}
/** pad เลขให้ 2 หลัก */ function pad2(n) {
    return n.toString().padStart(2, "0");
}
function formatDateDMY(input, useUTC = false) {
    const d = toDateSafe(input);
    if (!d) return FALLBACK;
    const dd = useUTC ? d.getUTCDate() : d.getDate();
    const mm = (useUTC ? d.getUTCMonth() : d.getMonth()) + 1;
    const yyyy = useUTC ? d.getUTCFullYear() : d.getFullYear();
    return `${pad2(dd)}-${pad2(mm)}-${yyyy}`;
}
function formatDateTimeDMY(input, useUTC = false) {
    const d = toDateSafe(input);
    if (!d) return FALLBACK;
    const dd = useUTC ? d.getUTCDate() : d.getDate();
    const mm = (useUTC ? d.getUTCMonth() : d.getMonth()) + 1;
    const yyyy = useUTC ? d.getUTCFullYear() : d.getFullYear();
    const hh = useUTC ? d.getUTCHours() : d.getHours();
    const min = useUTC ? d.getUTCMinutes() : d.getMinutes();
    return `${pad2(dd)}-${pad2(mm)}-${yyyy} ${pad2(hh)}:${pad2(min)}`;
}
function formatDateTH(input) {
    return formatDateDMY(input, false);
}
function formatDateTime(input, _locale = "en-US", withSeconds = false) {
    const base = formatDateTimeDMY(input, false);
    if (!withSeconds || base === FALLBACK) return base;
    // ต่อวินาทีจากเวลาเดิม (local)
    const d = toDateSafe(input);
    if (!d) return FALLBACK;
    return `${base}:${pad2(d.getSeconds())}`;
}
function formatDateUTC(input) {
    return formatDateTimeDMY(input, true);
}
const formatDateSafe = formatDateUTC;
function formatDue(input, useUTC = false) {
    return formatDateTimeDMY(input, useUTC);
}
}),
"[project]/apps/web/lib/tables/exceptionAssignmentColumns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/tables/exceptionAssignmentColumns.tsx
__turbopack_context__.s([
    "exceptionAssignmentColumns",
    ()=>exceptionAssignmentColumns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/show.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date.ts [app-ssr] (ecmascript)");
;
;
;
;
const exceptionAssignmentColumns = [
    {
        id: "employeeId",
        header: "Employee ID",
        accessorKey: "employeeId",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(row.emp_code ?? row.employeeId)
    },
    {
        id: "employeeName",
        header: "Name",
        accessorKey: "employeeName",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])([
                row.name_th,
                row.surname_th
            ].filter(Boolean).join(" ").trim() || row.employeeName)
    },
    {
        id: "department",
        header: "Department",
        accessorKey: "department",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(row.department_name ?? row.department)
    },
    {
        id: "assignedBy",
        header: "Assigned By",
        accessorKey: "assignedBy",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(row.assigned_by ?? row.assignedBy)
    },
    {
        id: "assignedAt",
        header: "Assigned At",
        accessorKey: "assignedAt",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTH"])(row.assigned_at ?? row.assignedAt))
    },
    {
        id: "expiresAt",
        header: "Expires At",
        accessorKey: "expiresAt",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTH"])(row.valid_to ?? row.expiresAt))
    },
    {
        id: "status",
        header: "Status",
        accessorKey: "status",
        cell: (_value, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(row.status),
                variant: "exception"
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/exceptionAssignmentColumns.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    // (ถ้าต้องการโชว์ข้อมูลเพิกถอนด้วย)
    {
        id: "revokedAt",
        header: "Revoked At",
        accessorKey: "revokedAt",
        cell: (_value, row)=>{
            const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTH"])(row.revoked_at ?? row.revokedAt);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(out || null);
        }
    },
    {
        id: "revokedBy",
        header: "Revoked By",
        accessorKey: "revokedBy",
        cell: (_value, row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(row.revoked_by ?? row.revokedBy ?? "")
    }
];
}),
"[project]/apps/web/lib/demo/exceptionDetailDemoData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/demo/exceptionDetailDemoData.ts
__turbopack_context__.s([
    "demoExceptionAssignments",
    ()=>demoExceptionAssignments,
    "demoExceptionHistory",
    ()=>demoExceptionHistory
]);
const demoExceptionAssignments = [
    {
        id: "A-001",
        assignment_id: "A-001",
        definitionId: "EXC-DEMO",
        employeeId: "EMP-001",
        employeeName: "Jirawee Phongchai",
        department: "สำนักเทคนิคโทรทัศน์",
        assignedBy: "Puttaraporn Jitpranee",
        assignedAt: "2026-01-20T09:00:00Z",
        expiresAt: "2026-03-31T23:59:59Z",
        status: "Active",
        notes: "For AI tooling during Q1 project"
    },
    {
        id: "A-002",
        assignment_id: "A-002",
        definitionId: "EXC-DEMO",
        employeeId: "EMP-002",
        employeeName: "Puttaraporn Jitpranee",
        department: "Compliance",
        assignedBy: "Puttaraporn Jitpranee",
        assignedAt: "2026-01-15T10:30:00Z",
        expiresAt: null,
        status: "Active",
        notes: "Permanent exemption for compliance validation"
    },
    {
        id: "A-003",
        assignment_id: "A-003",
        definitionId: "EXC-DEMO",
        employeeId: "EMP-003",
        employeeName: "Napat S.",
        department: "สำนักเทคนิคโทรทัศน์",
        assignedBy: "Jirawee Phongchai",
        assignedAt: "2025-12-28T08:20:00Z",
        expiresAt: "2026-01-25T00:00:00Z",
        status: "Revoked",
        notes: "Contract ended"
    },
    {
        id: "A-004",
        assignment_id: "A-004",
        definitionId: "EXC-DEMO",
        employeeId: "EMP-004",
        employeeName: "Suthep K.",
        department: "Operations",
        assignedBy: "Jirawee Phongchai",
        assignedAt: "2025-12-10T07:45:00Z",
        expiresAt: null,
        status: "Revoked",
        notes: "Security policy updated"
    }
];
const demoExceptionHistory = [
    {
        id: "H-001",
        detail: "Approved by SecOps",
        timestamp: "2026-01-20T09:05:00Z",
        actor: "SecOps",
        action: "approve"
    },
    {
        id: "H-002",
        detail: "Requested by jirawee.p",
        timestamp: "2026-01-19T17:12:00Z",
        actor: "jirawee.p",
        action: "request"
    }
];
}),
"[project]/apps/web/lib/date-input.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/date-input.ts
__turbopack_context__.s([
    "fromLocalInputToISO",
    ()=>fromLocalInputToISO,
    "toLocalInput",
    ()=>toLocalInput
]);
function toLocalInput(input) {
    if (input == null) return "";
    const d = new Date(input);
    if (Number.isNaN(d.getTime())) return "";
    const pad = (n)=>String(n).padStart(2, "0");
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const mi = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}
function fromLocalInputToISO(local) {
    if (!local) return null;
    const d = new Date(local); // ตีความเป็น local time
    if (Number.isNaN(d.getTime())) return null;
    return d.toISOString(); // แปลงเป็น UTC + 'Z'
}
}),
"[project]/apps/web/config/forms/exceptionEditFields.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/config/forms/exceptionEditFields.ts
__turbopack_context__.s([
    "exceptionEditFields",
    ()=>exceptionEditFields
]);
const STATUS_OPTIONS = [
    "Active",
    "Inactive"
].map((v)=>({
        label: v,
        value: v
    }));
const RISK_OPTIONS = [
    "Low",
    "Medium",
    "High"
].map((v)=>({
        label: v,
        value: v
    }));
const exceptionEditFields = [
    // text
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true
    },
    {
        name: "status",
        label: "Status",
        type: "select",
        options: STATUS_OPTIONS
    },
    {
        name: "risk",
        label: "Risk",
        type: "select",
        options: RISK_OPTIONS
    },
    // datetime
    {
        name: "createdAt",
        label: "Created At",
        type: "datetime"
    },
    {
        name: "lastUpdated",
        label: "Last Updated",
        type: "datetime"
    },
    // textarea
    {
        name: "notes",
        label: "Notes",
        type: "textarea"
    }
];
}),
"[project]/apps/web/config/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildUrl",
    ()=>buildUrl
]);
// config.ts
// อ่าน ENV แล้ว cast ให้เป็น string ที่ TS รับได้ จากนั้น guard ซ้ำที่ runtime
const SERVER_API_BASE = process.env.API_BASE ?? ("TURBOPACK compile-time value", "http://localhost:8000") ?? '';
if (!SERVER_API_BASE) {
    throw new Error('API base URL is not set. Please set API_BASE in .env.local (or NEXT_PUBLIC_API_BASE_URL for client).');
}
function buildUrl(path) {
    // ถ้า path เป็น absolute URL อยู่แล้ว ให้คืนเลย
    if (/^https?:\/\//i.test(path)) return path;
    const base = SERVER_API_BASE.replace(/\/+$/, '');
    const suffix = String(path || '').replace(/^\/+/, '');
    return `${base}/${suffix}`;
}
}),
"[project]/apps/web/lib/http.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/http.ts (ของเดิม + ปรับเล็กน้อยให้ใช้ร่วมกับ base URL ได้)
__turbopack_context__.s([
    "http",
    ()=>http,
    "qs",
    ()=>qs
]);
function qs(params) {
    const sp = new URLSearchParams();
    Object.entries(params).forEach(([k, v])=>{
        if (v === undefined || v === null || v === '') return;
        sp.append(k, String(v));
    });
    const s = sp.toString();
    return s ? `?${s}` : '';
}
async function http(input, init) {
    const res = await fetch(input, {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            ...init?.headers || {}
        },
        ...init
    });
    if (!res.ok) {
        let msg = `HTTP ${res.status}`;
        try {
            const text = await res.text();
            msg = text || msg;
        } catch  {}
        throw new Error(msg);
    }
    const parse = init?.parse ?? 'json';
    if (parse === 'json') return await res.json();
    if (parse === 'text') return await res.text();
    return undefined;
}
}),
"[project]/apps/web/services/exceptions.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignException",
    ()=>assignException,
    "assignExceptionsToEmployees",
    ()=>assignExceptionsToEmployees,
    "getActiveExceptionDefinitions",
    ()=>getActiveExceptionDefinitions,
    "getExceptionAssigneesPage",
    ()=>getExceptionAssigneesPage,
    "getExceptionDefinitionById",
    ()=>getExceptionDefinitionById,
    "getExceptionDefinitions",
    ()=>getExceptionDefinitions,
    "listExceptionDefinitions",
    ()=>listExceptionDefinitions,
    "revokeAssignments",
    ()=>revokeAssignments,
    "unassignExceptionsFromEmployees",
    ()=>unassignExceptionsFromEmployees
]);
// src/services/exceptions.service.ts
// Frontend service (Next.js) เรียก Backend Express ตามเส้นทางจริง (ผ่าน base URL จาก ENV)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/http.ts [app-ssr] (ecmascript)");
;
;
function toPolicyStatus(s) {
    const v = String(s ?? "").trim().toLowerCase();
    if (v === "active") return "Active";
    if (v === "inactive") return "Inactive";
    if (v === "1" || v === "true" || v === "yes" || v === "y") return "Active";
    if (v === "0" || v === "false" || v === "no" || v === "n") return "Inactive";
    // คงความเข้มงวดตามของเดิม: ถ้าอยาก tolerant ไม่ throw ให้ return "Inactive"
    throw new Error(`Invalid PolicyStatus: ${s}`);
}
function toRiskLevel(s) {
    const v = String(s ?? "").trim().toLowerCase();
    if (v === "low") return "Low";
    if (v === "medium") return "Medium";
    if (v === "high") return "High";
    // ถ้า backend อาจส่ง "Critical" ให้ตัดสินใจ map เป็น "High" หรือเพิ่มใน type
    throw new Error(`Invalid RiskLevel: ${s}`);
}
function toNumberOrZero(v) {
    if (v == null || v === "") return 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
}
function mapBackendDefinition(row) {
    return {
        // RowBase
        id: String(row.exception_id),
        // Domain (ใช้ชื่อ field ตาม type เดิม)
        exception_id: String(row.exception_id),
        name: row.name ?? "",
        status: toPolicyStatus(row.status),
        risk: toRiskLevel(row.risk_level),
        createdAt: row.created_at ?? "",
        lastUpdated: row.updated_at ?? null,
        description: row.description ?? undefined,
        totalAssignments: toNumberOrZero(row.assignees_active)
    };
}
/* ─────────────────────────────────────────────────────────────────────────────
 * Utilities (normalize pagination result ให้เข้ากับ OffsetPage<T>)
 * ────────────────────────────────────────────────────────────────────────────*/ function pickTotalCount(res, fallbackLen = 0) {
    return Number(res?.totalCount ?? res?.total ?? res?.pagination?.total ?? fallbackLen);
}
function normalizePageInfo(res, inPage, inPageSize, totalCount) {
    // รองรับทั้ง pageIndex (1-based) และ page
    const page = Number(res?.pageIndex ?? res?.page ?? inPage ?? 1);
    const pageSize = Number(res?.pageSize ?? inPageSize ?? 10);
    const totalPages = Math.max(1, Math.ceil(Math.max(0, totalCount) / Math.max(1, pageSize)));
    const hasPrev = typeof res?.hasPrev === "boolean" ? !!res.hasPrev : page > 1;
    const hasNext = typeof res?.hasNext === "boolean" ? !!res.hasNext : page < totalPages;
    return {
        page,
        pageSize,
        totalPages,
        hasPrev,
        hasNext
    };
}
async function getExceptionDefinitionById(id, signal) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions/${encodeURIComponent(String(id))}`);
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "GET",
        signal
    });
    const raw = res?.item ?? res?.data ?? res ?? null;
    return raw ? mapBackendDefinition(raw) : null;
}
async function getExceptionDefinitions(q, signal) {
    // FE → BE (1-based)
    const query = {
        pageIndex: q.page ?? 1,
        pageSize: q.pageSize ?? 10,
        sort: q.sortBy ? `${q.sortBy}:${q.sortOrder ?? "asc"}` : undefined,
        isActive: typeof q.status === "string" ? String(q.status).toLowerCase() === "active" : undefined,
        search: q.search
    };
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qs"])(query)}`);
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "GET",
        signal
    });
    const rows = res?.items ?? res?.data ?? [];
    const items = rows.map(mapBackendDefinition);
    const totalCount = pickTotalCount(res, items.length);
    const { page, pageSize, hasPrev, hasNext, totalPages } = normalizePageInfo(res, query.pageIndex ?? 1, query.pageSize ?? 10, totalCount);
    //   คืนค่าเข้ากับ OffsetPage<ExceptionDefinitionRow>
    return {
        items,
        totalCount,
        page,
        pageSize,
        hasPrev,
        hasNext,
        totalPages
    };
}
async function listExceptionDefinitions(q, signal) {
    return getExceptionDefinitions(q, signal);
}
async function assignException(args, signal) {
    const { definitionId, employeeIds, assignedBy } = args ?? {};
    if (!definitionId) throw new Error("definitionId is required");
    if (!Array.isArray(employeeIds) || employeeIds.length === 0) {
        throw new Error("employeeIds is required");
    }
    const empCodes = employeeIds.map((id)=>String(id));
    const res = await assignExceptionsToEmployees(String(definitionId), empCodes, assignedBy, signal);
    const added = Number(res.inserted ?? 0);
    const updated = Number(res.reactivated ?? 0);
    return {
        ok: true,
        assignedCount: added + updated,
        definitionId: String(definitionId),
        added,
        updated,
        skipped: 0
    };
}
async function assignExceptionsToEmployees(exceptionId, empCodes, assignedBy, signal) {
    if (!Array.isArray(empCodes) || empCodes.length === 0) {
        throw new Error("empCodes is required (non-empty array)");
    }
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions/${encodeURIComponent(String(exceptionId))}/assign`);
    const body = JSON.stringify({
        empCodes,
        assignedBy
    });
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body,
        signal
    });
    return {
        inserted: Number(res?.inserted ?? 0),
        reactivated: Number(res?.reactivated ?? 0),
        assignmentIds: res?.assignmentIds ?? []
    };
}
async function unassignExceptionsFromEmployees(exceptionId, empCodes, opts, signal) {
    if (!Array.isArray(empCodes) || empCodes.length === 0) {
        throw new Error("empCodes is required (non-empty array)");
    }
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions/${encodeURIComponent(String(exceptionId))}/revoke`);
    const body = JSON.stringify({
        empCodes,
        revokedBy: opts?.revokedBy ?? undefined,
        reason: opts?.reason ?? undefined
    });
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body,
        signal
    });
    // backend คืน { updated: number } → map เป็น removed
    return {
        removed: Number(res?.updated ?? 0)
    };
}
async function getActiveExceptionDefinitions(signal) {
    const res = await getExceptionDefinitions({
        page: 1,
        pageSize: 1000,
        status: "Active",
        sortBy: "name",
        sortOrder: "asc"
    }, signal);
    // เรียงที่ FE เพื่อความแน่นอนตาม locale
    return (res.items ?? []).slice().sort((a, b)=>String(a.name ?? "").localeCompare(String(b.name ?? ""), undefined, {
            sensitivity: "base",
            numeric: true
        }));
}
async function getExceptionAssigneesPage(exceptionId, q, signal) {
    const page = Math.max(1, Number(q.page ?? 1));
    const pageSize = Math.max(1, Number(q.pageSize ?? 10));
    const query = {
        page,
        pageSize,
        ...q.status && q.status !== "all" ? {
            status: q.status
        } : {}
    };
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions/${encodeURIComponent(String(exceptionId))}/assignees${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qs"])(query)}`);
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "GET",
        signal
    });
    const items = res?.items ?? res?.data ?? [];
    const totalCount = Number(res?.totalCount ?? res?.total ?? res?.pagination?.total ?? items.length);
    const pageOut = Number(res?.page ?? page);
    const pageSizeOut = Number(res?.pageSize ?? pageSize);
    const hasPrev = typeof res?.hasPrev === "boolean" ? !!res.hasPrev : pageOut > 1;
    const hasNext = typeof res?.hasNext === "boolean" ? !!res.hasNext : pageOut * pageSizeOut < totalCount;
    return {
        items,
        totalCount,
        page: pageOut,
        pageSize: pageSizeOut,
        hasPrev,
        hasNext
    };
}
async function revokeAssignments(exceptionId, empCodes, actor, signal) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildUrl"])(`/exceptions/${encodeURIComponent(String(exceptionId))}/revoke`);
    const body = {
        empCodes,
        actor
    };
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$http$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(url, {
        method: "POST",
        signal,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    const updated = Number(res?.updated ?? res?.affected ?? 0);
    return {
        updated
    };
}
}),
"[project]/apps/web/components/detail/ExceptionDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExceptionsDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/tabbar/InstallationSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/show.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$exceptionAssignmentColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/tables/exceptionAssignmentColumns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$demo$2f$exceptionDetailDemoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/demo/exceptionDetailDemoData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2d$input$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date-input.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$forms$2f$exceptionEditFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/forms/exceptionEditFields.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailInfo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/HistoryList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$exceptions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/services/exceptions.service.ts [app-ssr] (ecmascript)");
// components/detail/ExceptionsDetail.tsx
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
;
;
;
;
function ExceptionsDetail({ item, history, assignments, breadcrumbs }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const historyData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Array.isArray(history) && history.length ? history : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$demo$2f$exceptionDetailDemoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demoExceptionHistory"], [
        history
    ]);
    /* ------------------------------------------------------------------------
   * Assignments: Server-side pagination (API)
   * ----------------------------------------------------------------------*/ const [page, setPage] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1); // 1-based
    const [pageSize, setPageSize] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](8);
    const [totalRows, setTotalRows] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [assignRows, setAssignRows] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loadingAssign, setLoadingAssign] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [assignError, setAssignError] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    // selection (ใช้ emp_code เป็น id selection เพื่อส่งให้ revoke ตรง ๆ)
    const [selectedEmpCodes, setSelectedEmpCodes] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](new Set());
    // 🔁 ตัวบังคับ reload เมื่อ unassign เสร็จ แม้ page/pageSize จะไม่เปลี่ยน
    const [reloadTick, setReloadTick] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    // โหลดเฉพาะ "Active assignees" ด้วย page 1-based
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!item?.id) {
            setAssignRows([]);
            setTotalRows(0);
            return;
        }
        const ac = new AbortController();
        setLoadingAssign(true);
        setAssignError(null);
        (async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$exceptions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExceptionAssigneesPage"])(item.id, {
                    page,
                    pageSize,
                    status: "active"
                }, ac.signal);
                setAssignRows(res.items ?? []);
                setTotalRows(Number(res.totalCount ?? 0));
            } catch (e) {
                if (e?.name !== "AbortError") {
                    console.error("load assignees failed:", e);
                    setAssignError(e?.message ?? "โหลดรายการผู้ได้รับสิทธิ์ไม่สำเร็จ");
                    setAssignRows([]);
                    setTotalRows(0);
                }
            } finally{
                setLoadingAssign(false);
            }
        })();
        return ()=>ac.abort();
    }, [
        item.id,
        page,
        pageSize,
        reloadTick
    ]); // ⬅️ เพิ่ม reloadTick
    // ถ้าภายนอกส่ง assignments มา (เช่นจาก SSR) ให้ override หน้านั้น
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (Array.isArray(assignments) && assignments.length) {
            setAssignRows(assignments);
            setTotalRows((t)=>t > 0 ? t : assignments.length);
        }
    }, [
        assignments
    ]);
    // เรียง Active -> Resigned; ถ้าไม่มีสถานะ ให้ไปท้าย (เฉพาะในหน้า)
    const sortedRows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const pr = new Map([
            [
                "active",
                0
            ],
            [
                "resigned",
                1
            ]
        ]);
        const getStatus = (r)=>{
            const s = r?.status ?? r?.employeeStatus ?? r?.employee?.status ?? r?.user?.status ?? r?.profile?.status;
            return typeof s === "string" ? s : undefined;
        };
        const getEmpId = (r)=>r?.employeeId ?? r?.emp_code ?? r?.userId ?? r?.empId ?? "";
        return [
            ...assignRows
        ].sort((a, b)=>{
            const sa = (getStatus(a) ?? "").toLowerCase();
            const sb = (getStatus(b) ?? "").toLowerCase();
            const pa = pr.get(sa) ?? 999;
            const pb = pr.get(sb) ?? 999;
            if (pa !== pb) return pa - pb;
            return String(getEmpId(a)).localeCompare(String(getEmpId(b)), undefined, {
                numeric: true,
                sensitivity: "base"
            });
        });
    }, [
        assignRows
    ]);
    const handleBack = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        router.back();
    }, [
        router
    ]);
    const handleDelete = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        console.log("Delete exception:", item.id);
    }, [
        item.id
    ]);
    const handleAssign = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        router.push(`/exceptions/${item.id}/assign`);
    }, [
        item.id,
        router
    ]);
    const toolbar = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryActionToolbar"], {
            entity: "exceptions",
            selectedIds: [
                item.id
            ],
            basePath: "/exceptions",
            enableDefaultMapping: true,
            visibleActions: [
                "Assign Exceptions"
            ],
            singleSelectionOnly: true,
            toOverride: {
                "Assign Exceptions": `/exceptions/${item.id}/assign`
            },
            onAction: (act)=>{
                if (act === "Assign Exceptions") handleAssign();
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
            lineNumber: 158,
            columnNumber: 7
        }, this), [
        item.id,
        handleAssign
    ]);
    // Info panels (Definition-level)
    const infoLeft = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            {
                label: "Exception ID",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(item.exception_id)
            },
            {
                label: "Name",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(item.name)
            },
            {
                label: "Risk",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(item.risk)
            }
        ], [
        item.exception_id,
        item.name,
        item.risk
    ]);
    const infoRight = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            {
                label: "Status",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(item.status)
            },
            {
                label: "Created At",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateSafe"])(item.createdAt)
            },
            {
                label: "Last Updated",
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateSafe"])(item.lastUpdated)
            }
        ], [
        item.status,
        item.createdAt,
        item.lastUpdated
    ]);
    const editConfig = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            title: "Edit Exception",
            fields: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$forms$2f$exceptionEditFields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exceptionEditFields"],
            initialValues: {
                name: item.name ?? "",
                status: item.status,
                risk: item.risk ?? "Low",
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2d$input$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toLocalInput"])(item.createdAt),
                lastUpdated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2d$input$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toLocalInput"])(item.lastUpdated ?? ""),
                description: item.description ?? ""
            },
            onSubmit: async (values)=>{
                console.log("save exception:", values);
            },
            submitLabel: "Confirm",
            cancelLabel: "Cancel"
        }), [
        item.name,
        item.status,
        item.risk,
        item.createdAt,
        item.lastUpdated,
        item.description
    ]);
    /* ------------------------------------------------------------------------
   * Unassign (รายแถว + modal ยืนยัน) + Bulk Unassign
   * ----------------------------------------------------------------------*/ const [unassignOpen, setUnassignOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [unassigning, setUnassigning] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [pendingEmpCodes, setPendingEmpCodes] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const openUnassignFor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((empCodes)=>{
        setPendingEmpCodes(empCodes);
        setUnassignOpen(true);
    }, []);
    const closeUnassign = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setUnassignOpen(false);
        setPendingEmpCodes([]);
    }, []);
    const resolveActor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        // หา actor จากแหล่งที่คุณมี (แก้ให้ตรงระบบ auth จริง)
        // ลำดับความสำคัญ: localStorage.userEmail -> localStorage.username -> 'system'
        try {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch  {}
        return "system";
    }, []);
    const confirmUnassign = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](async ()=>{
        if (!item?.id || pendingEmpCodes.length === 0) return;
        setUnassigning(true);
        try {
            const actor = resolveActor();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$exceptions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revokeAssignments"])(item.id, pendingEmpCodes, actor);
            // ✅ รีโหลด: เพิ่ม tick + รีเซ็ตไปหน้า 1 เพื่อความปลอดภัย
            setPage(1);
            setReloadTick((t)=>t + 1);
            // ล้าง selection
            setSelectedEmpCodes(new Set());
        } catch (e) {
            console.error("unassign failed:", e);
        // TODO: toast error
        } finally{
            setUnassigning(false);
            closeUnassign();
        }
    }, [
        item?.id,
        pendingEmpCodes,
        resolveActor,
        closeUnassign
    ]);
    // สร้าง columns ใหม่ (เพิ่มปุ่ม Actions -> Unassign รายแถว)
    const assignmentColsWithActions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$exceptionAssignmentColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exceptionAssignmentColumns"],
            {
                id: "actions",
                header: "Actions",
                accessorKey: "__actions",
                align: "center",
                width: 120,
                cell: (_value, row)=>{
                    // เดา emp_code จากหลายฟิลด์
                    const empCode = row?.emp_code ?? row?.employeeId ?? row?.empId ?? row?.userId ?? row?.id ?? "";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-red-600 hover:underline",
                        onClick: (e)=>{
                            e.stopPropagation();
                            const code = String(empCode || "").trim();
                            if (!code) return;
                            openUnassignFor([
                                code
                            ]);
                        },
                        children: "Unassign"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                        lineNumber: 297,
                        columnNumber: 15
                    }, this);
                }
            }
        ], [
        openUnassignFor
    ]);
    // ปุ่ม Bulk (อยู่ทางขวาของแถบใน InstallationSection ผ่าน prop rightExtra)
    const rightExtra = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const count = selectedEmpCodes.size;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded bg-red-600 text-white px-3 py-2 text-sm disabled:opacity-50",
            disabled: count === 0 || loadingAssign,
            onClick: ()=>{
                const list = Array.from(selectedEmpCodes).map(String).filter(Boolean);
                if (list.length === 0) return;
                openUnassignFor(list);
            },
            title: count > 0 ? `Unassign Selected (${count})` : "Select rows to unassign",
            children: count > 0 ? `Unassign Selected (${count})` : "Unassign Selected"
        }, void 0, false, {
            fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
            lineNumber: 319,
            columnNumber: 7
        }, this);
    }, [
        selectedEmpCodes,
        loadingAssign,
        openUnassignFor
    ]);
    const tabs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>[
            {
                key: "detail",
                label: "Detail",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailInfoGrid"], {
                    left: infoLeft,
                    right: infoRight
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                    lineNumber: 339,
                    columnNumber: 18
                }, this)
            },
            {
                key: "assignments",
                label: "Assignments",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstallationSection"], {
                    rows: sortedRows,
                    columns: assignmentColsWithActions,
                    resetKey: `exception-${item.id}-${page}-${pageSize}-${reloadTick}`,
                    initialPage: page,
                    pageSize: pageSize,
                    totalRows: totalRows,
                    isLoading: loadingAssign,
                    errorMessage: assignError ?? undefined,
                    onPageChange: (nextPage, nextSize)=>{
                        if (typeof nextSize === "number" && nextSize !== pageSize) {
                            setPageSize(nextSize);
                            setPage(1); // เปลี่ยน page size แล้วรีเซ็ตหน้า
                        } else {
                            setPage(nextPage);
                        }
                    },
                    // ===== Selection สำหรับ Bulk Unassign =====
                    selectable: true,
                    selectedIds: selectedEmpCodes,
                    onSelectionChange: (next)=>setSelectedEmpCodes(next),
                    // ใช้ emp_code เป็น id ของ selection เพื่อส่งให้ revoke ตรง ๆ
                    getRowId: (row)=>row?.emp_code ?? row?.employeeId ?? row?.empId ?? row?.userId ?? row?.id,
                    // ปุ่มด้านขวา (รวมกับ Export)
                    rightExtra: rightExtra
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this)
            },
            {
                key: "history",
                label: "History",
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistoryList"], {
                    history: historyData
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                    lineNumber: 382,
                    columnNumber: 18
                }, this)
            }
        ], [
        infoLeft,
        infoRight,
        sortedRows,
        assignmentColsWithActions,
        item.id,
        page,
        pageSize,
        totalRows,
        loadingAssign,
        assignError,
        historyData,
        selectedEmpCodes,
        rightExtra,
        reloadTick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailView"], {
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(item.name),
                compliance: undefined,
                breadcrumbs: breadcrumbs,
                headerRightExtra: toolbar,
                tabs: tabs,
                defaultTabKey: "assignments",
                onBack: handleBack,
                onDelete: handleDelete,
                editConfig: editConfig
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            unassignOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded bg-white p-4 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-2 text-base font-semibold",
                            children: "ยืนยันการยกเลิกสิทธิ์ (Unassign)"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-sm text-slate-700",
                            children: [
                                "จะยกเลิกสิทธิ์ของพนักงานจำนวน ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: pendingEmpCodes.length
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                                    lineNumber: 423,
                                    columnNumber: 45
                                }, this),
                                " รายการ"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                            lineNumber: 422,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded border px-3 py-1 text-sm",
                                    onClick: closeUnassign,
                                    disabled: unassigning,
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded bg-red-600 px-3 py-1 text-sm text-white disabled:opacity-50",
                                    onClick: confirmUnassign,
                                    disabled: unassigning,
                                    children: unassigning ? "กำลังยกเลิก..." : "ยืนยัน Unassign"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/ExceptionDetail.tsx",
                lineNumber: 419,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/components/ui/BackButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
function BackButton({ onClick, className }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onClick) {
            onClick();
        } else {
            router.back(); // ใช้ฟังก์ชัน back ของ Next.js
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-label": "Back",
        onClick: handleBack,
        className: `grid mb-2 h-9 w-9 place-items-center rounded-md border border-slate-200 bg-slate-50 text-lg hover:bg-slate-100 ${className || ''}`,
        children: "←"
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/BackButton.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_4ac29b7e._.js.map