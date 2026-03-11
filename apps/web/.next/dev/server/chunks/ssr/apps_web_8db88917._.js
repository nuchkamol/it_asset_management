module.exports = [
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
"[project]/apps/web/components/ui/Field.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/Field.tsx
__turbopack_context__.s([
    "SelectInput",
    ()=>SelectInput,
    "TextArea",
    ()=>TextArea,
    "TextInput",
    ()=>TextInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TextInput = ({ id, label, required, description, ...rest })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-sm font-medium text-gray-700",
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-600",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/Field.tsx",
                        lineNumber: 19,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                className: "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500",
                ...rest
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500",
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 26,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Field.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TextArea = ({ id, label, required, description, ...rest })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-sm font-medium text-gray-700",
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-600",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/Field.tsx",
                        lineNumber: 35,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: id,
                className: "min-h-[160px] w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500",
                ...rest
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500",
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 42,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Field.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SelectInput = ({ id, label, required, description, options, ...rest })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "block text-sm font-medium text-gray-700",
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-600",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/Field.tsx",
                        lineNumber: 51,
                        columnNumber: 28
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500",
                ...rest,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        hidden: true,
                        children: "-- Select --"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/Field.tsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/apps/web/components/ui/Field.tsx",
                            lineNumber: 62,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-500",
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Field.tsx",
                lineNumber: 67,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Field.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
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
"[project]/apps/web/components/ui/FormActions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/FormActions.tsx
__turbopack_context__.s([
    "FormActions",
    ()=>FormActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FormActions = ({ submitLabel = "Submit", cancelLabel = "Cancel", onCancel })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-end gap-3 pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
                onClick: onCancel,
                children: cancelLabel
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/FormActions.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",
                children: submitLabel
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/FormActions.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/FormActions.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/components/ui/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ui/Card.tsx
__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Container = ({ title, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-xl border border-gray-200 bg-white shadow-sm",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 pt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-medium text-gray-900",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/ui/Container.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Container.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 pt-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/Container.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/Container.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
``;
}),
"[project]/apps/web/components/ui/FormPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormPage",
    ()=>FormPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Field.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FormActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/FormActions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Container.tsx [app-ssr] (ecmascript)");
// FormPage.tsx
"use client";
;
;
;
;
;
;
;
/** แปลง zodResolver ให้เป็น Resolver<TIn, any, TOut> (แปะ cast จุดเดียว) */ const makeResolver = (schema)=>{
    if (!schema) return undefined;
    const zr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"]; // ← cast ที่ “ตัวฟังก์ชัน”
    return zr(schema);
};
function FormPage({ title, breadcrumbs = [], sectionTitle = "", schema, defaultValues, fields, onSubmit, onCancel, submitLabel = "Submit", cancelLabel = "Cancel" }) {
    // ✅ RHF ใส่ generic 3 ตัว: <input, any, output>
    const methods = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues,
        resolver: makeResolver(schema),
        mode: "onBlur"
    });
    const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;
    /** errors อิง input */ const getErrorMessage = (name)=>{
        const e = errors[name];
        return e?.message;
    };
    const renderField = (field)=>{
        const id = String(field.name);
        const errorMsg = getErrorMessage(id);
        const col = field.colSpan === 2 ? "md:col-span-2" : "md:col-span-1";
        switch(field.type){
            case "text":
            case "email":
            case "url":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: col,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                            id: id,
                            type: field.type,
                            label: field.label,
                            required: !!field.required,
                            placeholder: field.placeholder,
                            description: field.description,
                            ...register(field.name, {
                                required: field.required
                            }),
                            "aria-invalid": !!errorMsg,
                            "aria-errormessage": errorMsg ? `${id}-error` : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: `${id}-error`,
                            className: "mt-1 text-xs text-red-600",
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this);
            case "textarea":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: col,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextArea"], {
                            id: id,
                            label: field.label,
                            required: !!field.required,
                            placeholder: field.placeholder,
                            description: field.description,
                            ...register(field.name, {
                                required: field.required
                            }),
                            "aria-invalid": !!errorMsg,
                            "aria-errormessage": errorMsg ? `${id}-error` : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: `${id}-error`,
                            className: "mt-1 text-xs text-red-600",
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 125,
                            columnNumber: 15
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this);
            case "select":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: col,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectInput"], {
                            id: id,
                            label: field.label,
                            required: !!field.required,
                            description: field.description,
                            options: field.options,
                            ...register(field.name, {
                                required: field.required
                            }),
                            "aria-invalid": !!errorMsg,
                            "aria-errormessage": errorMsg ? `${id}-error` : undefined,
                            defaultValue: ""
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: `${id}-error`,
                            className: "mt-1 text-xs text-red-600",
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this);
            case "number":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: col,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                            id: id,
                            type: "number",
                            label: field.label,
                            required: !!field.required,
                            placeholder: field.placeholder,
                            description: field.description,
                            ...register(field.name, {
                                required: field.required,
                                valueAsNumber: true
                            }),
                            "aria-invalid": !!errorMsg,
                            "aria-errormessage": errorMsg ? `${id}-error` : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: `${id}-error`,
                            className: "mt-1 text-xs text-red-600",
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 170,
                            columnNumber: 15
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this);
            case "date":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: col,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Field$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                            id: id,
                            type: "date",
                            label: field.label,
                            required: !!field.required,
                            description: field.description,
                            ...register(field.name, {
                                required: field.required
                            }),
                            "aria-invalid": !!errorMsg,
                            "aria-errormessage": errorMsg ? `${id}-error` : undefined
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: `${id}-error`,
                            className: "mt-1 text-xs text-red-600",
                            children: errorMsg
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: title,
                breadcrumbs: breadcrumbs
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                title: sectionTitle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    className: "grid gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                            children: fields.map(renderField)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FormActions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormActions"], {
                            submitLabel: submitLabel,
                            cancelLabel: cancelLabel,
                            onCancel: onCancel
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500",
                            children: "Processing…"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                            lineNumber: 219,
                            columnNumber: 28
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/FormPage.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/FormPage.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/app/(app)/software/license-management/add/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddLicensePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$BackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/BackButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FormPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/FormPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
"use client";
;
;
;
;
/** =========================================================
 * 1) Enum values เป็น const tuple (จำเป็นสำหรับ z.enum)
 *    และมี helper nonEmptyEnum รองรับค่า "" จาก select
 * ========================================================= */ const licenseModels = [
    "Per-User",
    "Per-Device",
    "Perpetual",
    "Subscription",
    "Concurrent"
];
const statusValues = [
    "Active",
    "Inactive",
    "Expired"
];
/** แปลง "" (placeholder) -> undefined แล้วตรวจด้วย enum + message */ const nonEmptyEnum = (values, message)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>v === "" ? undefined : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(values, {
        message
    }));
/** =========================================================
 * 2) ตัวช่วยสำหรับ number จากฟอร์ม:
 *    - ฟอร์มส่งค่ามาเป็น string/"" เสมอ -> ใช้ preprocess/coerce
 *    - ใส่ข้อความ error ด้วย { message } แทน invalid_type_error/required_error
 * ========================================================= */ /** number integer ≥ 0 */ const nonNegativeInt = (messageInvalidNumber, messageInt, messageMin0)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess(// แปลง "" -> undefined, string ที่เป็นตัวเลข -> number
    (v)=>v === "" ? undefined : typeof v === "string" ? Number(v) : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: messageInvalidNumber
    }).int({
        message: messageInt
    }).min(0, {
        message: messageMin0
    }));
/** number ≥ 0 (optional) */ const nonNegativeNumberOptional = (messageInvalidNumber, messageMin0)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>v === "" ? undefined : typeof v === "string" ? Number(v) : v, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        message: messageInvalidNumber
    }).min(0, {
        message: messageMin0
    }).optional());
/** =========================================================
 * 3) Schema
 *    - ใช้ nonEmptyEnum สำหรับ select
 *    - ใช้ helper number สำหรับตัวเลขจากฟอร์ม
 * ========================================================= */ const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    productName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณากรอกชื่อโปรดักต์/ซอฟต์แวร์"),
    vendor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณาเลือก/กรอกผู้ผลิต"),
    licenseModel: nonEmptyEnum(licenseModels, "กรุณาเลือกประเภทไลเซนส์"),
    total: nonNegativeInt("กรุณากรอกจำนวนเป็นตัวเลข", "ต้องเป็นจำนวนเต็ม", "ต้องมากกว่าหรือเท่ากับ 0"),
    inUse: nonNegativeInt("กรุณากรอกจำนวนเป็นตัวเลข", "ต้องเป็นจำนวนเต็ม", "ต้องมากกว่าหรือเท่ากับ 0"),
    expiryDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณาระบุวันหมดอายุ (YYYY-MM-DD)").refine((v)=>/^\d{4}-\d{2}-\d{2}$/.test(v), "รูปแบบวันที่ไม่ถูกต้อง (YYYY-MM-DD)"),
    status: nonEmptyEnum(statusValues, "กรุณาเลือกสถานะ"),
    licenseCost: nonNegativeNumberOptional("กรุณากรอกจำนวนเป็นตัวเลข", "ต้องมากกว่าหรือเท่ากับ 0"),
    maintenanceCost: nonNegativeNumberOptional("กรุณากรอกจำนวนเป็นตัวเลข", "ต้องมากกว่าหรือเท่ากับ 0"),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).refine((val)=>val.inUse <= val.total, {
    message: "In Use ต้องน้อยกว่าหรือเท่ากับ Total",
    path: [
        "inUse"
    ]
});
/** =========================================================
 * 4) ค่าเริ่มต้นของฟอร์ม
 *    - สำหรับ select ให้มี placeholder "" แล้ว schema จะบังคับตอน submit
 *    - number ใช้ 0 หรือ "" ก็ได้ (เรา preprocess ให้แล้ว)
 * ========================================================= */ const defaultValues = {
    productName: "",
    vendor: "",
    licenseModel: "",
    total: 0,
    inUse: 0,
    expiryDate: "",
    status: "",
    licenseCost: undefined,
    maintenanceCost: undefined,
    notes: ""
};
/** =========================================================
 * 5) นิยามฟิลด์
 *    - ใส่ option placeholder (value: "") สำหรับ select ทุกตัว
 * ========================================================= */ const fields = [
    {
        name: "productName",
        label: "Product Name",
        placeholder: "เช่น Adobe Photoshop",
        type: "text",
        required: true,
        colSpan: 1
    },
    {
        name: "vendor",
        label: "Vendor / Manufacturer",
        type: "select",
        required: true,
        colSpan: 1,
        options: [
            {
                label: "เลือกผู้ผลิต",
                value: ""
            },
            {
                label: "Adobe",
                value: "Adobe"
            },
            {
                label: "Microsoft",
                value: "Microsoft"
            },
            {
                label: "Google",
                value: "Google"
            },
            {
                label: "JetBrains",
                value: "JetBrains"
            },
            {
                label: "Other",
                value: "Other"
            }
        ]
    },
    {
        name: "licenseModel",
        label: "License Model",
        type: "select",
        required: true,
        colSpan: 1,
        options: [
            {
                label: "เลือกประเภทไลเซนส์",
                value: ""
            },
            {
                label: "Per User",
                value: "Per-User"
            },
            {
                label: "Per Device",
                value: "Per-Device"
            },
            {
                label: "Perpetual",
                value: "Perpetual"
            },
            {
                label: "Subscription",
                value: "Subscription"
            },
            {
                label: "Concurrent",
                value: "Concurrent"
            }
        ]
    },
    {
        name: "status",
        label: "Status",
        type: "select",
        required: true,
        colSpan: 1,
        options: [
            {
                label: "เลือกสถานะ",
                value: ""
            },
            {
                label: "Active",
                value: "Active"
            },
            {
                label: "Inactive",
                value: "Inactive"
            },
            {
                label: "Expired",
                value: "Expired"
            }
        ]
    },
    {
        name: "expiryDate",
        label: "Expiry Date",
        type: "date",
        required: true,
        colSpan: 1
    },
    {
        name: "total",
        label: "Total Seats",
        type: "number",
        required: true,
        colSpan: 1,
        placeholder: "0"
    },
    {
        name: "inUse",
        label: "In Use",
        type: "number",
        required: true,
        colSpan: 1,
        placeholder: "0"
    },
    {
        name: "licenseCost",
        label: "License Cost",
        type: "number",
        colSpan: 1,
        placeholder: "เช่น 1200"
    },
    {
        name: "maintenanceCost",
        label: "Maintenance Cost",
        type: "number",
        colSpan: 1,
        placeholder: "เช่น 300"
    },
    {
        name: "notes",
        label: "Notes",
        placeholder: "รายละเอียดเพิ่มเติม เช่น ช่องทางจัดซื้อ/สัญญาอ้างอิง",
        type: "textarea",
        colSpan: 2
    }
];
function AddLicensePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$BackButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/software/license-management/add/page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FormPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormPage"], {
                title: "Add License",
                breadcrumbs: [
                    {
                        label: "Software Inventory",
                        href: "/software/inventory"
                    },
                    {
                        label: "License Management",
                        href: "/software/license-management"
                    },
                    {
                        label: "Add License"
                    }
                ],
                sectionTitle: "License Information",
                schema: schema,
                defaultValues: defaultValues,
                fields: fields,
                submitLabel: "Create License",
                cancelLabel: "Cancel",
                onSubmit: async (data)=>{
                    // TODO: เรียก API สร้าง license ใหม่
                    console.log("submit license:", data);
                    alert("License created");
                },
                onCancel: ()=>{
                    // TODO: นำทางกลับหน้า License list
                    alert("Canceled");
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/app/(app)/software/license-management/add/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/(app)/software/license-management/add/page.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_8db88917._.js.map