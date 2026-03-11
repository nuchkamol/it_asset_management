(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/components/ui/BackButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function BackButton({ onClick, className }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (onClick) {
            onClick();
        } else {
            router.back(); // ใช้ฟังก์ชัน back ของ Next.js
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(BackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BackButton;
var _c;
__turbopack_context__.k.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/ComplianceBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComplianceBadge",
    ()=>ComplianceBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
// components/ui/ComplianceBadge.tsx
'use client';
;
;
const complianceMap = {
    'Compliant': 'text-green-700 bg-green-100',
    'Non-Compliant': 'text-red-700 bg-red-100'
};
function ComplianceBadge({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-block rounded px-2 py-0.5 text-xs font-semibold', complianceMap[label]),
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/ComplianceBadge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ComplianceBadge;
var _c;
__turbopack_context__.k.register(_c, "ComplianceBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/detail/DetailHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailHeader",
    ()=>DetailHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/detail/DetailHeader.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ComplianceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ComplianceBadge.tsx [app-client] (ecmascript)");
;
;
function DetailHeader({ title, compliance, onBack, onEdit, onDeleteClick, breadcrumbs, //   เพิ่มช่องว่างด้านขวา
rightExtra }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-slate-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    typeof compliance !== "undefined" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ComplianceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComplianceBadge"], {
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
                    breadcrumbs && breadcrumbs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-2 text-sm text-gray-500",
                        "aria-label": "Breadcrumb",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "flex flex-wrap items-center gap-1",
                            children: breadcrumbs.map((bc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center",
                                    children: [
                                        bc.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: bc.href,
                                            className: "hover:text-gray-700 underline-offset-2 hover:underline",
                                            children: bc.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                            lineNumber: 41,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: bc.label
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/components/detail/DetailHeader.tsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, this),
                                        idx < breadcrumbs.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto flex items-center gap-2",
                children: [
                    rightExtra /* ← ปุ่ม/เมนูจากภายนอก */ ,
                    onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onEdit,
                        className: "inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    onDeleteClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onDeleteClick,
                        className: "inline-flex items-center gap-1 rounded-md border border-red-600 bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = DetailHeader;
var _c;
__turbopack_context__.k.register(_c, "DetailHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/Tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabList",
    ()=>TabList,
    "TabPanel",
    ()=>TabPanel,
    "TabTrigger",
    ()=>TabTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
// src/components/ui/Tabs.tsx
"use client";
;
;
function TabTrigger({ active, children, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b-2 px-1.5 py-2 text-sm font-semibold", active ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"),
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = TabTrigger;
function TabList({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "mt-4 flex gap-4 border-b border-slate-200",
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_c1 = TabList;
function TabPanel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4",
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/ui/Tabs.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_c2 = TabPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TabTrigger");
__turbopack_context__.k.register(_c1, "TabList");
__turbopack_context__.k.register(_c2, "TabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/detail/DetailInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailInfoGrid",
    ()=>DetailInfoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/detail/DetailInfo.tsx
"use client";
;
function InfoRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                className: "text-sm text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/components/detail/DetailInfo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
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
_c = InfoRow;
function DetailInfoGrid({ left, right }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 grid grid-cols-1 gap-6 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-2 gap-x-6 gap-y-3",
                children: left.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                className: "grid grid-cols-2 gap-x-6 gap-y-3",
                children: right.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoRow, {
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
_c1 = DetailInfoGrid;
var _c, _c1;
__turbopack_context__.k.register(_c, "InfoRow");
__turbopack_context__.k.register(_c1, "DetailInfoGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/detail/HistoryList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HistoryList",
    ()=>HistoryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function HistoryList({ history }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "mt-4 space-y-3",
        children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "text-sm text-slate-500",
            children: "No history yet."
        }, void 0, false, {
            fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
            lineNumber: 10,
            columnNumber: 9
        }, this) : history.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "grid grid-cols-[16px_1fr] gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 h-2.5 w-2.5 rounded-full bg-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-slate-900",
                                children: h.detail
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/detail/HistoryList.tsx",
                                lineNumber: 16,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = HistoryList;
var _c;
__turbopack_context__.k.register(_c, "HistoryList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/modals/ConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmModal",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ConfirmModal({ title, description, open, onConfirm, onCancel }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 grid place-items-center bg-black/30 p-4",
        role: "dialog",
        "aria-modal": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-base font-semibold text-slate-900",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-600",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                    lineNumber: 20,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",
                            onClick: onCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/modals/ConfirmModal.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/modals/ModalButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryButton",
    ()=>PrimaryButton,
    "SecondaryButton",
    ()=>SecondaryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
function SecondaryButton({ className, children, disabled, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        ...props,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-md border border-slate-300 px-4 py-2 text-sm font-medium', 'text-slate-700 hover:bg-slate-50 disabled:opacity-60', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/components/modals/ModalButtons.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SecondaryButton;
function PrimaryButton({ className, children, disabled, loading, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ...props,
        disabled: disabled || loading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 rounded-md', 'bg-blue-600 px-4 py-2 text-sm font-semibold text-white', 'hover:bg-blue-700 disabled:opacity-60', className),
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-4 w-4 animate-spin",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = PrimaryButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "SecondaryButton");
__turbopack_context__.k.register(_c1, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/modals/ModalFooterActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalFooterActions",
    ()=>ModalFooterActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ModalButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ModalFooterActions({ onCancel, onSubmit, submitting = false, cancelLabel = 'Cancel', submitLabel = 'Save changes', sticky = true, align = 'end', className, disabled = false, submitAsForm = true }) {
    const justify = align === 'between' ? 'sm:justify-between' : align === 'center' ? 'sm:justify-center' : align === 'start' ? 'sm:justify-start' : 'sm:justify-end';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(sticky && 'sticky bottom-0 mt-6 bg-white', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-slate-200 px-5 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row', justify),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecondaryButton"], {
                        onClick: onCancel,
                        disabled: submitting || disabled,
                        children: cancelLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/modals/ModalFooterActions.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
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
_c = ModalFooterActions;
var _c;
__turbopack_context__.k.register(_c, "ModalFooterActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/modals/EditModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditModal",
    ()=>EditModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalFooterActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ModalFooterActions.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/modals/EditModal.tsx
'use client';
;
;
function EditModal({ title, open, fields, initialValues, onSubmit, onClose, submitting = false, submitLabel = 'Save', cancelLabel = 'Cancel', closeOnBackdrop = true, maxHeight = '90vh', heightMode = 'adaptive', overlayOpacity = 20 }) {
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ต้องเปิดสกรอลภายในไหม (เฉพาะ adaptive)
    const [clamped, setClamped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // โฟกัสฟิลด์แรกเมื่อเปิด
    const firstInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            if (open) setValues(initialValues);
        }
    }["EditModal.useEffect"], [
        open,
        initialValues
    ]);
    // focus ฟิลด์แรก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            if (!open) return;
            const t = setTimeout({
                "EditModal.useEffect.t": ()=>firstInputRef.current?.focus()
            }["EditModal.useEffect.t"], 0);
            return ({
                "EditModal.useEffect": ()=>clearTimeout(t)
            })["EditModal.useEffect"];
        }
    }["EditModal.useEffect"], [
        open
    ]);
    // ล็อกสกรอล body
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            if (!open) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return ({
                "EditModal.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["EditModal.useEffect"];
        }
    }["EditModal.useEffect"], [
        open
    ]);
    // ปิดด้วย ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "EditModal.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["EditModal.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "EditModal.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["EditModal.useEffect"];
        }
    }["EditModal.useEffect"], [
        open,
        onClose
    ]);
    // เตือน dev ถ้า field.name ซ้ำ
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditModal.useEffect": ()=>{
            if (!open) return;
            const names = fields.map({
                "EditModal.useEffect.names": (f)=>f.name
            }["EditModal.useEffect.names"]);
            const dup = names.filter({
                "EditModal.useEffect.dup": (n, i)=>names.indexOf(n) !== i
            }["EditModal.useEffect.dup"]);
            if (dup.length) {
                // eslint-disable-next-line no-console
                console.warn('[EditModal] Duplicate field.name:', Array.from(new Set(dup)));
            }
        }
    }["EditModal.useEffect"], [
        open,
        fields
    ]);
    // วัดคอนเทนต์ → ตัดสินใจ clamp หรือไม่
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EditModal.useLayoutEffect": ()=>{
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
            const onResize = {
                "EditModal.useLayoutEffect.onResize": ()=>measure()
            }["EditModal.useLayoutEffect.onResize"];
            window.addEventListener('resize', onResize);
            const ro = new ResizeObserver({
                "EditModal.useLayoutEffect": ()=>measure()
            }["EditModal.useLayoutEffect"]);
            if (innerRef.current) ro.observe(innerRef.current);
            return ({
                "EditModal.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', onResize);
                    ro.disconnect();
                }
            })["EditModal.useLayoutEffect"];
        }
    }["EditModal.useLayoutEffect"], [
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    ...commonProps,
                    value: value ?? '',
                    onChange: (e)=>setFieldValue(field.name, e.target.value),
                    className: inputClass + ' appearance-none',
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            children: field.placeholder ?? 'Select…'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        (field.options ?? []).map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
    /* ---------------------- render ---------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: overlayClass,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "modal-title",
        onClick: handleBackdropClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full max-w-2xl rounded-xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden isolate",
            style: containerStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headerRef,
                        className: "z-10 flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "modal-title",
                                className: "text-base font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "flex-1 min-h-0 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollBoxRef,
                                className: 'flex-1 min-h-0 px-5 py-5 ' + (heightMode === 'scroll' || heightMode === 'adaptive' && clamped ? 'overflow-y-auto' : 'overflow-visible'),
                                style: {
                                    maxHeight: 'inherit'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: innerRef,
                                    className: "pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: gridClass,
                                        children: fields.map((field, idx)=>{
                                            const spanClass = field.colSpan === 2 ? 'md:col-span-2' : '';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col gap-1 min-w-0 ${spanClass}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `field-${field.name}`,
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: [
                                                            field.label,
                                                            ' ',
                                                            field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    field.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: `help-${field.name}`,
                                                        className: "text-xs text-slate-500",
                                                        children: field.helpText
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/components/modals/EditModal.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 27
                                                    }, this),
                                                    field.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: footerRef,
                                className: "shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ModalFooterActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalFooterActions"], {
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
_s(EditModal, "qdK93nDQzpuwdozTo6K/qWxJ47I=");
_c = EditModal;
var _c;
__turbopack_context__.k.register(_c, "EditModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/detail/DetailView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailView",
    ()=>DetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/HistoryList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/ConfirmModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$EditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/modals/EditModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/detail/DetailView.tsx
"use client";
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
    _s();
    const [confirmOpen, setConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleOpenEdit = ()=>{
        onEdit?.();
        setOpen(true);
    };
    // ---- สร้างรายการแท็บที่จะใช้จริง (ถ้ามี tabs ให้ใช้ตามนั้น, ถ้าไม่มีก็ประกอบจาก props เดิม) ----
    const computedTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailView.useMemo[computedTabs]": ()=>{
            if (tabs && tabs.length > 0) {
                return tabs.filter({
                    "DetailView.useMemo[computedTabs]": (t)=>!t.hidden
                }["DetailView.useMemo[computedTabs]"]);
            }
            // ถ้าไม่ส่ง tabs มา: ประกอบรูปแบบเดิมให้ (Detail | Installations | History)
            const base = [];
            if (info) {
                base.push({
                    key: "detail",
                    label: "Detail",
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailInfoGrid"], {
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
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$HistoryList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HistoryList"], {
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
                    content: info ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailInfoGrid"], {
                        left: info.left,
                        right: info.right
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                        lineNumber: 157,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-500",
                        children: "No content"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                        lineNumber: 159,
                        columnNumber: 15
                    }, this)
                }
            ];
        }
    }["DetailView.useMemo[computedTabs]"], [
        tabs,
        info,
        installationSection,
        history
    ]);
    // ---- จัดการ active tab (คง behavior เดิม: local state) ----
    const keys = computedTabs.map((t)=>t.key);
    const firstKey = keys[0];
    const initialKey = defaultTabKey && keys.includes(defaultTabKey) ? defaultTabKey : firstKey;
    const [activeKey, setActiveKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialKey);
    // ถ้าโครงแท็บเปลี่ยน และ key ปัจจุบันไม่อยู่แล้ว ให้สลับไปแท็บแรก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailView.useEffect": ()=>{
            if (!keys.includes(activeKey)) {
                setActiveKey(keys[0]);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["DetailView.useEffect"], [
        keys.join("|")
    ]);
    // (ออปชัน) ถ้าอยากให้ defaultTabKey ที่เปลี่ยนภายหลังมีผล ให้เปิด block นี้
    // useEffect(() => {
    //   if (defaultTabKey && keys.includes(defaultTabKey)) {
    //     setActiveKey(defaultTabKey);
    //   }
    // }, [defaultTabKey, keys.join("|")]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "aria-labelledby": "detail-view-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-xl border border-slate-200 bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailHeader"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabList"], {
                        children: computedTabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabTrigger"], {
                                active: activeKey === t.key,
                                onClick: ()=>//   type guard ป้องกัน union ที่บางสมาชิกอาจไม่มี disabled
                                    !("disabled" in t && t.disabled) && setActiveKey(t.key),
                                "aria-disabled": "disabled" in t ? t.disabled : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "disabled" in t && t.disabled ? "opacity-50" : "",
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/components/detail/DetailView.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    "badge" in t && t.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    computedTabs.map((t)=>activeKey === t.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabPanel"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfirmModal"], {
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
            editConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$modals$2f$EditModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditModal"], {
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
_s(DetailView, "87Nyd4bNeWCs2qvREbeV8OkAjXA=");
_c = DetailView;
var _c;
__turbopack_context__.k.register(_c, "DetailView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/DataTableHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableHeader",
    ()=>DataTableHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// ปรับ path ให้ตรงกับโปรเจกต์ของคุณ ถ้าคุณย้าย type ไปไว้ที่ 'types/table'
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: "sticky top-0 z-10 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: [
                leadingHeaderCell,
                columns.map((col)=>{
                    const colId = String(col.accessorKey);
                    const isActive = activeId === colId;
                    const indicator = isActive ? isDesc ? ' 🔽' : ' 🔼' : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-semibold text-slate-700', sizeClass, alignToClass(col.align), col.headerClassName),
                        style: {
                            minWidth: col.width ?? defaultColMinWidth,
                            whiteSpace: 'nowrap'
                        },
                        "aria-sort": isActive ? isDesc ? 'descending' : 'ascending' : 'none',
                        scope: "col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = DataTableHeader;
var _c;
__turbopack_context__.k.register(_c, "DataTableHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/DataTableBody.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTableBody",
    ()=>DataTableBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(rowBase, rowHover, rowStriped, 'cursor-pointer'),
                tabIndex: 0,
                onClick: handleRowClick,
                onKeyDown: handleRowKeyDown,
                children: [
                    renderLeadingCell && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tdSize, 'w-10 align-middle'),
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(tdSize, 'text-slate-900', alignToClass(c.align), c.cellClassName),
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
_c = DataTableBody;
var _c;
__turbopack_context__.k.register(_c, "DataTableBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/DataTableStates.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyBody",
    ()=>EmptyBody,
    "ErrorBody",
    ()=>ErrorBody,
    "LoadingBody",
    ()=>LoadingBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/datatable/DataTableStates.tsx
'use client';
;
function LoadingBody({ colSpan, size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_c = LoadingBody;
function ErrorBody({ colSpan, message = 'เกิดข้อผิดพลาด', size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_c1 = ErrorBody;
function EmptyBody({ colSpan, message = 'ไม่มีข้อมูล', size = 'xs' }) {
    const sizeClass = {
        xs: 'px-2 py-2 text-[12px]',
        sm: 'px-3 py-3 text-[13px]',
        md: 'px-3 py-3 text-[14px]'
    }[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_c2 = EmptyBody;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LoadingBody");
__turbopack_context__.k.register(_c1, "ErrorBody");
__turbopack_context__.k.register(_c2, "EmptyBody");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/pagination/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/pagination/Pagination.tsx
'use client';
;
function Pagination({ // Base mode props (optional ถ้าใช้ adapter)
totalCount: _totalCount, pageSize: _pageSize, currentPage: _currentPage, onPageChange: _onPageChange, siblingCount = 1, onPageSizeChange, pageSizeOptions = [
    10,
    20,
    50,
    100
], disabled = false, // Adapter mode props (แนะนำให้ใช้คู่กับ DataTable)
pagination, totalPages, onPaginationChange }) {
    _s();
    // ----- Adapter layer (0-based -> 1-based) -----
    const isAdapter = Boolean(onPaginationChange && pagination);
    // ขนาดหน้า: จาก adapter (ถ้ามี) มิฉะนั้น base
    const pageSize = isAdapter ? pagination.pageSize ?? 10 : _pageSize ?? 10;
    // หน้า (1-based) เพื่อแสดงผล
    const currentPage = isAdapter ? (pagination.pageIndex ?? 0) + 1 : _currentPage ?? 1;
    // totalCount/totalPages ที่ใช้คำนวณ
    const totalCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Pagination.useMemo[totalCount]": ()=>{
            if (typeof totalPages === 'number' && totalPages > 0) {
                // ถ้า server คำนวณหน้ามาให้แล้ว ใช้เป็นแหล่งจริง
                return totalPages * pageSize;
            }
            return _totalCount ?? 0;
        }
    }["Pagination.useMemo[totalCount]"], [
        totalPages,
        pageSize,
        _totalCount
    ]);
    // จำนวนหน้าที่คำนวณได้
    const totalPagesComputed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Pagination.useMemo[totalPagesComputed]": ()=>totalCount > 0 ? Math.ceil(totalCount / pageSize) : 0
    }["Pagination.useMemo[totalPagesComputed]"], [
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
    const pageRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Pagination.useMemo[pageRange]": ()=>{
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
        }
    }["Pagination.useMemo[pageRange]"], [
        currentPage,
        siblingCount,
        totalPagesComputed
    ]);
    if (totalPagesComputed === 0) return null;
    // ----- render -----
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${disabled ? 'opacity-50 pointer-events-none' : ''}`,
        role: "navigation",
        "aria-label": "Pagination",
        children: [
            pageSizeOptions?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mr-2 flex items-center gap-1 text-sm text-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Per page:"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "rounded border-gray-300 bg-white px-2 py-1 text-sm",
                        value: pageSize,
                        onChange: (e)=>onPageSizeChangeAdapter(Number(e.target.value)),
                        disabled: disabled,
                        children: pageSizeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-1",
                "aria-label": "Page numbers",
                children: pageRange.map((p, idx)=>p === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 text-gray-500",
                        "aria-hidden": true,
                        children: "…"
                    }, `dots-${idx}`, false, {
                        fileName: "[project]/apps/web/components/pagination/Pagination.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Pagination, "NIQFabkTIvBTl3yeN3pFk7ELlt4=");
_c = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTablePaginationBar",
    ()=>DataTablePaginationBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pagination/Pagination.tsx [app-client] (ecmascript)");
// src/components/datatable/DataTablePaginationBar.tsx
'use client';
;
;
function DataTablePaginationBar({ pagination, totalPages, onPaginationChange, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end border-t border-slate-200 bg-white px-2 py-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
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
_c = DataTablePaginationBar;
var _c;
__turbopack_context__.k.register(_c, "DataTablePaginationBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/DataTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableStates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/datatable/DataTable.tsx
'use client';
;
;
;
;
;
;
;
function DataTable(props) {
    _s();
    const { columns, rows, totalRows, pagination, onPaginationChange, sorting, onSortingChange, variant = 'default', size = 'xs', emptyMessage = 'ไม่มีข้อมูล', isLoading, isError, errorMessage, maxBodyHeight = 340, onRowClick, rowHref, defaultColMinWidth = 88, clientSideSort = false, // selection
    selectable = false, selectedIds, onSelectionChange, getRowId } = props;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const rowId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DataTable.useCallback[rowId]": (r)=>getRowId ? getRowId(r) : r.id
    }["DataTable.useCallback[rowId]"], [
        getRowId
    ]);
    const totalPages = totalRows && pagination ? Math.max(1, Math.ceil(totalRows / pagination.pageSize)) : undefined;
    const containerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-md border border-slate-200');
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
    const effectiveRows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DataTable.useMemo[effectiveRows]": ()=>{
            if (!clientSideSort) return rows;
            if (!sorting?.length) return rows;
            const { id, desc } = sorting[0];
            const col = columns.find({
                "DataTable.useMemo[effectiveRows].col": (c)=>String(c.accessorKey) === id
            }["DataTable.useMemo[effectiveRows].col"]);
            const getValue = {
                "DataTable.useMemo[effectiveRows].getValue": (row)=>{
                    if (col?.getSortValue) return col.getSortValue(row);
                    return row[id];
                }
            }["DataTable.useMemo[effectiveRows].getValue"];
            const cmp = {
                "DataTable.useMemo[effectiveRows].cmp": (a, b)=>{
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
                }
            }["DataTable.useMemo[effectiveRows].cmp"];
            const arr = [
                ...rows
            ]; // clone เผื่อ rows เป็น readonly
            arr.sort({
                "DataTable.useMemo[effectiveRows]": (ra, rb)=>{
                    const va = getValue(ra);
                    const vb = getValue(rb);
                    const res = cmp(va, vb);
                    return desc ? -res : res;
                }
            }["DataTable.useMemo[effectiveRows]"]);
            return arr;
        }
    }["DataTable.useMemo[effectiveRows]"], [
        rows,
        sorting,
        columns,
        clientSideSort
    ]);
    // +1 คอลัมน์ ถ้ามีช่อง checkbox
    const colSpan = columns.length + (selectable ? 1 : 0);
    // เลือกทีละแถว
    const toggleRow = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DataTable.useCallback[toggleRow]": (row, checked)=>{
            if (!onSelectionChange || !selectedIds) return;
            const id = rowId(row);
            const next = new Set(selectedIds);
            if (checked) next.add(id);
            else next.delete(id);
            onSelectionChange(next);
        }
    }["DataTable.useCallback[toggleRow]"], [
        onSelectionChange,
        selectedIds,
        rowId
    ]);
    // เลือกทั้งหน้า
    const togglePage = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DataTable.useCallback[togglePage]": (checked)=>{
            if (!onSelectionChange || !selectedIds) return;
            const next = new Set(selectedIds);
            effectiveRows.forEach({
                "DataTable.useCallback[togglePage]": (r)=>{
                    const id = rowId(r);
                    if (checked) next.add(id);
                    else next.delete(id);
                }
            }["DataTable.useCallback[togglePage]"]);
            onSelectionChange(next);
        }
    }["DataTable.useCallback[togglePage]"], [
        onSelectionChange,
        selectedIds,
        effectiveRows,
        rowId
    ]);
    const headerChecked = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DataTable.useMemo[headerChecked]": ()=>{
            if (!selectedIds || !effectiveRows.length) return false;
            return effectiveRows.every({
                "DataTable.useMemo[headerChecked]": (r)=>selectedIds.has(rowId(r))
            }["DataTable.useMemo[headerChecked]"]);
        }
    }["DataTable.useMemo[headerChecked]"], [
        selectedIds,
        effectiveRows,
        rowId
    ]);
    const headerIndeterminate = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DataTable.useMemo[headerIndeterminate]": ()=>{
            if (!selectedIds || !effectiveRows.length) return false;
            const countChecked = effectiveRows.filter({
                "DataTable.useMemo[headerIndeterminate]": (r)=>selectedIds.has(rowId(r))
            }["DataTable.useMemo[headerIndeterminate]"]).length;
            return countChecked > 0 && countChecked < effectiveRows.length;
        }
    }["DataTable.useMemo[headerIndeterminate]"], [
        selectedIds,
        effectiveRows,
        rowId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: tableWrapperClass,
                style: {
                    maxHeight: maxBodyHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: tableClass,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTableHeader"], {
                            columns: columns,
                            sorting: sorting,
                            onToggleSort: toggleSort,
                            size: size,
                            defaultColMinWidth: defaultColMinWidth,
                            //   ช่องนำหน้า: checkbox select page
                            leadingHeaderCell: selectable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "w-10 px-3 py-2 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingBody"], {
                            colSpan: colSpan,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, this),
                        isError && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBody"], {
                            colSpan: colSpan,
                            message: errorMessage,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 210,
                            columnNumber: 37
                        }, this),
                        !isLoading && !isError && effectiveRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyBody"], {
                            colSpan: colSpan,
                            message: emptyMessage,
                            size: size
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/table/DataTable.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this),
                        !isLoading && !isError && effectiveRows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTableBody"], {
                            columns: columns,
                            rows: effectiveRows,
                            variant: variant,
                            size: size,
                            defaultColMinWidth: defaultColMinWidth,
                            onRowActivate: handleRowNavigate,
                            //   ส่งเฉพาะ “content” ของเซลล์ ไม่ใช่ <td> ครอบ
                            renderLeadingCell: selectable ? (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            pagination && onPaginationChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTablePaginationBar"], {
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
_s(DataTable, "VwEPVv0JEBm6PjMBS13eatDEUV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/table/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// src/components/datatable/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTableStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTableStates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTablePaginationBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTablePaginationBar.tsx [app-client] (ecmascript)");
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/tabbar/InstallationTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstallationTable",
    ()=>InstallationTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/table/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function InstallationTable(props) {
    _s();
    const { rows, columns, page, pageSize, onPageChange, filters, onAfterFilter, // selection
    selectable = false, selectedIds, onSelectionChange, getRowId, // passthrough
    variant = 'default', size = 'xs', emptyMessage = 'ไม่พบข้อมูล', isLoading, isError, errorMessage, maxBodyHeight = 340, sorting, onSortingChange, clientSideSort = false, onRowClick, rowHref, defaultColMinWidth = 88 } = props;
    const rowId = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "InstallationTable.useCallback[rowId]": (r)=>getRowId ? getRowId(r) : r?.id
    }["InstallationTable.useCallback[rowId]"], [
        getRowId
    ]);
    // ---- filter (client-side) ----
    const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InstallationTable.useMemo[filtered]": ()=>{
            const q = (filters.query ?? '').trim().toLowerCase();
            if (!q) return rows;
            const includesQ = {
                "InstallationTable.useMemo[filtered].includesQ": (value)=>String(value ?? '').toLowerCase().includes(q)
            }["InstallationTable.useMemo[filtered].includesQ"];
            return rows.filter({
                "InstallationTable.useMemo[filtered]": (r)=>{
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
                }
            }["InstallationTable.useMemo[filtered]"]);
        }
    }["InstallationTable.useMemo[filtered]"], [
        rows,
        columns,
        filters.query
    ]);
    const totalRows = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / Math.max(1, pageSize)));
    const safePage = Math.max(1, Math.min(page, totalPages));
    const pageRows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InstallationTable.useMemo[pageRows]": ()=>{
            const startIdx = (safePage - 1) * pageSize;
            const endIdx = startIdx + pageSize;
            return filtered.slice(startIdx, endIdx);
        }
    }["InstallationTable.useMemo[pageRows]"], [
        filtered,
        safePage,
        pageSize
    ]);
    // callback ส่งผลกรองให้ parent (client-side mode เท่านั้น)
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "InstallationTable.useEffect": ()=>{
            onAfterFilter?.({
                filteredRows: filtered,
                pageRows,
                totalRows
            });
        }
    }["InstallationTable.useEffect"], [
        filtered,
        pageRows,
        totalRows,
        onAfterFilter
    ]);
    //   แปลง onPaginationChange ของ DataTable (0-based) -> onPageChange ของเรา (1-based)
    const handlePaginationChange = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "InstallationTable.useCallback[handlePaginationChange]": (next)=>{
            onPageChange?.(next.pageIndex + 1);
        }
    }["InstallationTable.useCallback[handlePaginationChange]"], [
        onPageChange
    ]);
    //   สร้าง rowHref สำหรับ DataTable ให้แน่ใจว่า return string เสมอ (หรือไม่ส่ง prop ถ้าไม่มี)
    const dtRowHref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InstallationTable.useMemo[dtRowHref]": ()=>{
            if (!rowHref) return undefined;
            return ({
                "InstallationTable.useMemo[dtRowHref]": (row)=>rowHref(row) ?? ''
            })["InstallationTable.useMemo[dtRowHref]"]; // fallback เป็น '' ถ้า undefined
        }
    }["InstallationTable.useMemo[dtRowHref]"], [
        rowHref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
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
_s(InstallationTable, "ORxbSA1q9MmO/rimep9MVN0uiDU=");
_c = InstallationTable;
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
var _c;
__turbopack_context__.k.register(_c, "InstallationTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/SearchInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchInput",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/installation/SearchInput.tsx
"use client";
;
function SearchInput({ value, onChange, placeholder = "Search" }) {
    _s();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/SearchInput.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(SearchInput, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c = SearchInput;
var _c;
__turbopack_context__.k.register(_c, "SearchInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/ExportSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportSelect",
    ()=>ExportSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/installation/ExportSelect.tsx
"use client";
;
function ExportSelect({ onExport }) {
    _s();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Export As"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                defaultValue: "",
                onChange: (e)=>{
                    const fmt = e.target.value;
                    if (fmt) onExport(fmt);
                    e.currentTarget.selectedIndex = 0; // reset
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Export As"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "csv",
                        children: "CSV"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "xlsx",
                        children: "Excel (.xlsx)"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ExportSelect.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
_s(ExportSelect, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c = ExportSelect;
var _c;
__turbopack_context__.k.register(_c, "ExportSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/tabbar/InstallationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstallationSection",
    ()=>InstallationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/tabbar/InstallationTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/SearchInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ExportSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/pagination/Pagination.tsx [app-client] (ecmascript)"); //   ใช้ Pagination component
;
var _s = __turbopack_context__.k.signature();
// components/tabbar/InstallationSection.tsx
"use client";
;
;
;
;
;
function InstallationSection({ rows, columns, resetKey, initialPage = 1, pageSize = 10, searchPlaceholder = "Search...", exportScope = "all", exportFileBaseName = "installations", // server-side props (optional)
totalRows, isLoading = false, errorMessage, onPageChange, maxBodyHeight = 480, // selection
selectable = false, selectedIds, onSelectionChange, getRowId, rightExtra }) {
    _s();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPage); // 1-based
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pageSize);
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        query: ""
    });
    // เก็บผลกรองล่าสุดจากตารางไว้สำหรับ export (client-side mode)
    const filteredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pageRowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const totalRowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const serverMode = typeof totalRows === "number" || typeof onPageChange === "function";
    // reset เมื่อ key/page เปลี่ยน
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstallationSection.useEffect": ()=>{
            setPage(initialPage);
            setSize(pageSize);
            setFilters({
                query: ""
            });
        }
    }["InstallationSection.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-[240px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchInput"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                            rightExtra,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportSelect"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // className="border rounded overflow-auto"
                style: {
                    maxHeight: maxBodyHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstallationTable"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-2 mt-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-600",
                        children: isLoading ? "กำลังโหลด..." : errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$pagination$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
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
_s(InstallationSection, "j2iJozlkbFQo2+eyLUiNUQ1c3Us=");
_c = InstallationSection;
var _c;
__turbopack_context__.k.register(_c, "InstallationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/ui/ActionSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionSelect",
    ()=>ActionSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/installation/ActionSelect.tsx
"use client";
;
function ActionSelect({ onAction, options, placeholder = "Action", disabled = false, resetAfterSelect = true, value, onChangeValue, className, selectClassName }) {
    _s();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    // ถ้าไม่ได้คุมจากภายนอก → ใช้ internal state
    const [internalValue, setInternalValue] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "sr-only",
                children: "Action"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: selectClassName ?? "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50",
                value: curValue,
                onChange: handleChange,
                disabled: disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/ActionSelect.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    effectiveOptions.map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
_s(ActionSelect, "fyHIeja6n/bKPMj+beP2WpKosrs=");
_c = ActionSelect;
var _c;
__turbopack_context__.k.register(_c, "ActionSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/toolbar/ActionToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionToolbar",
    ()=>ActionToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ActionSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ActionSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/installation/ActionToolbar.tsx
"use client";
;
;
;
function ActionToolbar({ selectedIds, to, onAction, openInNewTab = false, enableDefaultMapping = false, requireSelection = false, singleSelectionOnly = false, visibleActions, disabled = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const buildHref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ActionToolbar.useCallback[buildHref]": (action)=>{
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
        }
    }["ActionToolbar.useCallback[buildHref]"], [
        to,
        selectedIds,
        enableDefaultMapping
    ]);
    const selectionInvalidFor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ActionToolbar.useCallback[selectionInvalidFor]": (action)=>{
            // กติกาเบื้องต้น (ปรับได้): edit => single-only, delete/reassign => require selection
            if (singleSelectionOnly && action === "Edit") {
                return selectedIds.length !== 1;
            }
            if (requireSelection && (action === "Delete" || action === "Reassign")) {
                return selectedIds.length < 1;
            }
            return false;
        }
    }["ActionToolbar.useCallback[selectionInvalidFor]"], [
        requireSelection,
        singleSelectionOnly,
        selectedIds.length
    ]);
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ActionToolbar.useMemo[options]": ()=>{
            const acts = visibleActions?.length ? visibleActions : [
                "Add"
            ]; // default set (ถ้าหน้าไม่ระบุ)
            return acts.map({
                "ActionToolbar.useMemo[options]": (a)=>({
                        value: a,
                        label: a === "Reassign" ? "Reassign" : a === "Edit" ? "Edit" : a === "Delete" ? "Delete" : a === "Add" ? "Add" : a,
                        disabled: selectionInvalidFor(a) || !buildHref(a)
                    })
            }["ActionToolbar.useMemo[options]"]);
        }
    }["ActionToolbar.useMemo[options]"], [
        visibleActions,
        selectionInvalidFor,
        buildHref
    ]);
    const handleAction = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "ActionToolbar.useCallback[handleAction]": (act)=>{
            // guard อีกครั้ง
            if (options.find({
                "ActionToolbar.useCallback[handleAction]": (o)=>o.value === act
            }["ActionToolbar.useCallback[handleAction]"])?.disabled) return;
            onAction?.(act);
            const href = buildHref(act);
            if (!href) return;
            if (openInNewTab) window.open(href, "_blank", "noopener,noreferrer");
            else router.push(href);
        }
    }["ActionToolbar.useCallback[handleAction]"], [
        buildHref,
        onAction,
        openInNewTab,
        router,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ActionSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionSelect"], {
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
_s(ActionToolbar, "QS1kszuIxPK1edsElS2LGesDHGM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ActionToolbar;
var _c;
__turbopack_context__.k.register(_c, "ActionToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InventoryActionToolbar",
    ()=>InventoryActionToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$ActionToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/ActionToolbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// src/components/toolbar/InventoryActionToolbar.tsx
"use client";
;
;
function InventoryActionToolbar({ entity, selectedIds, basePath, visibleActions, enableDefaultMapping = false, toOverride, onAction }) {
    _s();
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
    const merged = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InventoryActionToolbar.useMemo[merged]": ()=>({
                ...enableDefaultMapping ? defaultTo : {},
                ...toOverride ?? {}
            })
    }["InventoryActionToolbar.useMemo[merged]"], [
        enableDefaultMapping,
        defaultTo,
        toOverride
    ]);
    const to = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "InventoryActionToolbar.useMemo[to]": ()=>{
            if (!visibleActions?.length) return merged;
            const out = {};
            visibleActions.forEach({
                "InventoryActionToolbar.useMemo[to]": (a)=>{
                    if (merged[a]) out[a] = merged[a];
                }
            }["InventoryActionToolbar.useMemo[to]"]);
            return out;
        }
    }["InventoryActionToolbar.useMemo[to]"], [
        merged,
        visibleActions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$ActionToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionToolbar"], {
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
_s(InventoryActionToolbar, "p2KQzUqIU2wv53ywdRyT0PzsIN8=");
_c = InventoryActionToolbar;
var _c;
__turbopack_context__.k.register(_c, "InventoryActionToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/show.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "show",
    ()=>show
]);
const show = (v)=>v === undefined || v === null || v === "" ? "—" : String(v);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/date.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/tables/licenseInstallationColumns.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "installationColumns",
    ()=>installationColumns
]);
// lib/tables/licenseInstallationColumns.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/show.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date.ts [app-client] (ecmascript)");
;
;
const installationColumns = [
    {
        id: "id",
        header: "ID",
        accessorKey: "id",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    // License context
    {
        id: "licenseName",
        header: "License",
        accessorKey: "licenseName",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    // User info
    {
        id: "userName",
        header: "User",
        accessorKey: "userName",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "userEmail",
        header: "Email",
        accessorKey: "userEmail",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "department",
        header: "Department",
        accessorKey: "department",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "workStation",
        header: "Workstation",
        accessorKey: "workStation",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    // Assignment attributes
    {
        id: "assignmentStatus",
        header: "Assignment Status",
        accessorKey: "assignmentStatus",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "assignedAt",
        header: "Assigned At",
        accessorKey: "assignedAt",
        getSortValue: (row)=>row.assignedAt ?? "",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTH"])(value)
    },
    {
        id: "assignedBy",
        header: "Assigned By",
        accessorKey: "assignedBy",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "expiresAt",
        header: "Expires At",
        accessorKey: "expiresAt",
        getSortValue: (row)=>row.expiresAt ?? "",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTH"])(value)
    },
    // Device binding
    {
        id: "deviceId",
        header: "Device",
        accessorKey: "deviceId",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    // Keys / Evidence
    {
        id: "licenseKey",
        header: "License Key",
        accessorKey: "licenseKey",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    },
    {
        id: "scannedLicenseKey",
        header: "Scanned License",
        accessorKey: "scannedLicenseKey",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(value ?? "—")
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/demo/licenseDetailDemoData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "demoHistory",
    ()=>demoHistory,
    "demoInstallations",
    ()=>demoInstallations
]);
const demoInstallations = [
    {
        id: "lic-ins-1",
        deviceName: "NB-201",
        userName: "mike",
        licenseStatus: "Active",
        licenseKey: "AAAAA-BBBBB-CCCCC-11111",
        scannedLicenseKey: "AAAAA-BBBBB-CCCCC-11111",
        workStation: "Bangkok-HQ-03F",
        assignedAt: "2025-10-01T09:00:00Z",
        assignedBy: "admin@example.com",
        expiresAt: "2026-10-01T00:00:00Z"
    },
    {
        id: "lic-ins-2",
        deviceName: "PC-304",
        userName: "nina",
        licenseStatus: "Active",
        licenseKey: "FFFFF-EEEEE-DDDDD-22222",
        scannedLicenseKey: null,
        workStation: "Bangkok-HQ-04F",
        assignedAt: "2025-10-05T14:20:00Z",
        assignedBy: "it-ops@example.com",
        expiresAt: "2026-10-05T00:00:00Z"
    },
    {
        id: "lic-ins-3",
        deviceName: "SRV-09",
        userName: "system",
        licenseStatus: "Active",
        licenseKey: "ZZZZZ-YYYYY-XXXXX-33333",
        scannedLicenseKey: "ZZZZZ-YYYYY-XXXXX-33333",
        workStation: "DataCenter-01",
        assignedAt: "2025-10-08T11:45:00Z",
        assignedBy: "system-auto",
        expiresAt: null
    }
];
const demoHistory = [
    {
        id: "lh1",
        timestamp: new Date().toISOString(),
        actor: "system",
        action: "sync",
        detail: "License sync finished"
    },
    {
        id: "lh2",
        timestamp: new Date().toISOString(),
        actor: "admin",
        action: "update",
        detail: "Adjusted license seats"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/mappers/mapLicenseItemToForm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapLicenseItemToForm",
    ()=>mapLicenseItemToForm
]);
function mapLicenseItemToForm(item) {
    return {
        productName: item.softwareName ?? "",
        licenseModel: item.licenseModel ?? "Per-User",
        total: item.total ?? 0,
        inUse: item.inUse ?? 0,
        expiryDate: item.expiryDate ?? "",
        status: item.status ?? "Active",
        manufacturer: item.manufacturer ?? "",
        licenseCost: item.cost ?? 0,
        maintenanceCost: item.maintenanceCost ?? 0,
        notes: item.notes ?? "",
        licenseKey: item.licenseKey ?? ""
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/config/forms/licenseEditFields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "licenseEditFields",
    ()=>licenseEditFields
]);
const licenseEditFields = [
    {
        name: "productName",
        label: "Software Name",
        required: true,
        placeholder: "e.g. Adobe Photoshop",
        type: "text"
    },
    {
        name: "licenseKey",
        label: "License Key",
        required: true,
        placeholder: "XXXX-XXXX-XXXX-XXXX",
        type: "text"
    },
    {
        name: "licenseModel",
        label: "License Model",
        type: "select",
        required: true,
        options: [
            {
                label: "Per-User",
                value: "Per-User"
            },
            {
                label: "Per-Device",
                value: "Per-Device"
            },
            {
                label: "Open Source",
                value: "Open Source"
            },
            {
                label: "Subscription",
                value: "Subscription"
            },
            {
                label: "Perpetual",
                value: "Perpetual"
            }
        ],
        placeholder: "Select license type…"
    },
    {
        name: "total",
        label: "Total License",
        type: "number",
        required: true,
        placeholder: "e.g. 200"
    },
    {
        name: "inUse",
        label: "In Use",
        type: "number",
        required: true,
        placeholder: "e.g. 178"
    },
    {
        name: "expiryDate",
        label: "Expiry Date",
        type: "date",
        required: true
    },
    {
        name: "status",
        label: "Status",
        type: "select",
        options: [
            {
                label: "Active",
                value: "Active"
            },
            {
                label: "Expiring Soon",
                value: "Expiring Soon"
            },
            {
                label: "Expired",
                value: "Expired"
            },
            {
                label: "Inactive",
                value: "Inactive"
            }
        ],
        placeholder: "Select status…"
    },
    {
        name: "manufacturer",
        label: "Vendor",
        placeholder: "e.g. Adobe",
        type: "text"
    },
    // 🟡 ถ้าต้องมีหลาย cost ให้ตั้งชื่อคนละตัว ห้ามซ้ำกัน
    {
        name: "licenseCost",
        label: "Cost (USD)",
        type: "number"
    },
    {
        name: "maintenanceCost",
        label: "Maintenance Cost (USD)",
        type: "number"
    },
    {
        name: "notes",
        label: "Notes",
        type: "textarea",
        placeholder: "Additional notes…"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/components/detail/LicenseDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LicenseDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/detail/DetailView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/tabbar/InstallationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$licenseInstallationColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/tables/licenseInstallationColumns.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$demo$2f$licenseDetailDemoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/demo/licenseDetailDemoData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$mapLicenseItemToForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/mappers/mapLicenseItemToForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/show.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$forms$2f$licenseEditFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/forms/licenseEditFields.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/.../LicenseDetail.tsx
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
function LicenseDetail({ item, installations, history, breadcrumb }) {
    _s();
    const onBack = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "LicenseDetail.useCallback[onBack]": ()=>window.history.back()
    }["LicenseDetail.useCallback[onBack]"], []);
    const onDelete = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "LicenseDetail.useCallback[onDelete]": ()=>{
            console.log("Delete", item.id);
        }
    }["LicenseDetail.useCallback[onDelete]"], [
        item.id
    ]);
    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LicenseDetail.useMemo[rows]": ()=>installations?.length ? installations : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$demo$2f$licenseDetailDemoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoInstallations"]
    }["LicenseDetail.useMemo[rows]"], [
        installations
    ]);
    const historyData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LicenseDetail.useMemo[historyData]": ()=>history?.length ? history : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$demo$2f$licenseDetailDemoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoHistory"]
    }["LicenseDetail.useMemo[historyData]"], [
        history
    ]);
    const initialFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "LicenseDetail.useMemo[initialFormValues]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$mapLicenseItemToForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapLicenseItemToForm"])(item)
    }["LicenseDetail.useMemo[initialFormValues]"], [
        item
    ]);
    //   ให้ dropdown มีเฉพาะ "Assign" เท่านั้น
    const toolbar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InventoryActionToolbar"], {
        entity: "licenses",
        selectedIds: [
            item.id
        ],
        basePath: "/software/license-management",
        enableDefaultMapping: true,
        visibleActions: [
            "Assign License"
        ],
        singleSelectionOnly: true,
        toOverride: {
            "Assign License": `/software/license-management/${item.id}/license/assign`
        },
        onAction: (act)=>{
            if (act === "Assign License") {
                console.log("Assign license:", item.id);
            }
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/components/detail/LicenseDetail.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$detail$2f$DetailView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailView"], {
        title: item.softwareName,
        compliance: item.compliance,
        defaultTabKey: "Installations",
        info: {
            left: [
                {
                    label: "Manufacturer",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.manufacturer)
                },
                {
                    label: "License Type",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.licenseModel)
                },
                {
                    label: "Policy Compliance",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.compliance)
                }
            ],
            right: [
                {
                    label: "Total",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.total)
                },
                {
                    label: "In Use",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.inUse)
                },
                {
                    label: "Available",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.available)
                },
                {
                    label: "Expiry Date",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.expiryDate)
                },
                {
                    label: "Status",
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["show"])(item.status)
                }
            ]
        },
        installationSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$tabbar$2f$InstallationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstallationSection"], {
            rows: rows,
            columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$licenseInstallationColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installationColumns"],
            resetKey: `license-${item.id}`,
            initialPage: 1,
            pageSize: 8
        }, void 0, false, {
            fileName: "[project]/apps/web/components/detail/LicenseDetail.tsx",
            lineNumber: 96,
            columnNumber: 9
        }, void 0),
        history: historyData,
        onBack: onBack,
        onDelete: onDelete,
        editConfig: {
            title: "Edit License",
            fields: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$forms$2f$licenseEditFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["licenseEditFields"],
            initialValues: initialFormValues,
            onSubmit: async (values)=>{
                console.log("save license:", values);
            },
            submitLabel: "Save",
            cancelLabel: "Cancel"
        },
        breadcrumbs: breadcrumb,
        headerRightExtra: toolbar
    }, void 0, false, {
        fileName: "[project]/apps/web/components/detail/LicenseDetail.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(LicenseDetail, "KmBhd40yibQAia/PMPWoZPK5Owo=");
_c = LicenseDetail;
var _c;
__turbopack_context__.k.register(_c, "LicenseDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_52c71f68._.js.map