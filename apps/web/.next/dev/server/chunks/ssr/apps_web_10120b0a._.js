module.exports = [
"[project]/apps/web/hooks/useDebounce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useDebounce(value, delay = 400) {
    const [debounced, setDebounced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setTimeout(()=>setDebounced(value), delay);
        return ()=>clearTimeout(id);
    }, [
        value,
        delay
    ]);
    return debounced;
}
}),
"[project]/apps/web/mock/requests.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILTER_OPTIONS",
    ()=>FILTER_OPTIONS,
    "MOCK_REQUESTS",
    ()=>MOCK_REQUESTS
]);
const FILTER_OPTIONS = {
    sites: [
        "บริษัท บีอีซี แอสเซท จำกัด",
        "บริษัท บีอีซี-มัลติมีเดีย จำกัด",
        "บจก. บีอีซี ไอที โซลูชั่น",
        "บจก. บีอีซีไอ คอร์ปอเรชั่น",
        "บริษัท บางกอกเอ็นเตอร์เทนเม้นต์ จำกัด",
        "บริษัท บีอีซี บรอดคาสติ้ง เซ็นเตอร์ จำกัด",
        "บริษัท สำนักข่าว บีอีซี จำกัด",
        "บริษัท บีอีซี เวิลด์ จำกัด (มหาชน)"
    ],
    risks: [
        'Low',
        'Medium',
        'High'
    ],
    exceptions: [
        'AD 90 : Password Policy',
        'LINE',
        'USB',
        'Generative AI'
    ]
};
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function makeTitle(i) {
    const apps = [
        'AD 90 : Password Policy',
        'LINE',
        'USB',
        'Generative AI'
    ];
    const acts = [
        'ขออนุมัติใช้งาน',
        'ขอเพิ่มสิทธิ์',
        'ขอติดตั้ง',
        'ขอเปลี่ยนเวอร์ชัน',
        'ขอยกเลิกสิทธิ์'
    ];
    return `${pick(apps)} - ${pick(acts)}`;
}
const MOCK_REQUESTS = Array.from({
    length: 1250
}).map((_, i)=>{
    const risk = pick([
        'Low',
        'Medium',
        'High'
    ]);
    const site = pick(FILTER_OPTIONS.sites);
    const exception = pick(FILTER_OPTIONS.exceptions);
    const dueAt = new Date(Date.now() + i % 30 * 24 * 60 * 60 * 1000).toISOString();
    return {
        id: 7300 + i,
        title: makeTitle(i),
        requester: 'Puttaraporn Jitpranee',
        department: pick([
            "สำนักข่าว",
            "สำนักออกอากาศ",
            "สำนักตรวจสอบภายใน",
            "สำนักไฟฟ้ากำลัง",
            "สำนักเทคโนโลยีสารสนเทศ",
            "สำนักเทคนิคโทรทัศน์",
            "สำนักผังรายการ",
            "สำนักกรรมการบริหาร",
            "สำนักธุรกิจระหว่างประเทศ",
            "สำนักการพาณิชย์",
            "สำนักกิจการและสื่อสารองค์กร",
            "สำนักบริหาร",
            "สำนักดิจิทัลและกลยุทธ์สื่อใหม่",
            "สำนักการตลาด",
            "สำนักการเงินและบัญชี",
            "สำนักบริหารทรัพยากร",
            "สำนักผลิตรายการ"
        ]),
        site,
        risk,
        exception,
        dueAt
    };
});
}),
"[project]/apps/web/services/requests.service.mock.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockRequestsService",
    ()=>mockRequestsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$mock$2f$requests$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/mock/requests.mock.ts [app-ssr] (ecmascript)");
;
function fuzzy(q, ...fs) {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    return fs.some((f)=>f.toLowerCase().includes(s));
}
function mockRequestsService() {
    return {
        async list (query) {
            const { pageIndex, pageSize, filters } = query;
            let data = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$mock$2f$requests$2e$mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_REQUESTS"]
            ];
            if (filters?.site) data = data.filter((r)=>r.site === filters.site);
            if (filters?.risk) data = data.filter((r)=>r.risk === filters.risk);
            if (filters?.exception) data = data.filter((r)=>r.exception === filters.exception);
            if (filters?.search) {
                data = data.filter((r)=>fuzzy(filters.search, r.title, r.requester, r.department, r.site, r.exception));
            }
            const total = data.length;
            const start = pageIndex * pageSize;
            const items = data.slice(start, start + pageSize);
            // จำลอง latency
            await new Promise((res)=>setTimeout(res, 200));
            return {
                items,
                total
            };
        },
        async export (format, query) {
            const { items } = await this.list({
                pageIndex: 0,
                pageSize: 5000,
                ...query
            });
            const csv = [
                'id,title,requester,department,site,risk,exception,dueAt',
                ...items.map((r)=>[
                        r.id,
                        r.title,
                        r.requester,
                        r.department,
                        r.site,
                        r.risk,
                        r.exception,
                        r.dueAt
                    ].map((v)=>`"${String(v).replace(/"/g, '""')}"`).join(','))
            ].join('\n');
            const mime = format === 'csv' ? 'text/csv' : format === 'xlsx' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'application/pdf';
            return new Blob([
                csv
            ], {
                type: mime
            });
        }
    };
}
}),
"[project]/apps/web/services/requests.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequestsService",
    ()=>createRequestsService
]);
function createRequestsService(_ = {
    impl: 'mock'
}) {
    const { mockRequestsService } = __turbopack_context__.r("[project]/apps/web/services/requests.service.mock.ts [app-ssr] (ecmascript)");
    return mockRequestsService();
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
"[project]/apps/web/components/ui/SelectField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectField",
    ()=>SelectField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// src/components/installation/SelectField.tsx
"use client";
;
;
;
function SelectField({ label, srOnlyLabel, value, options, onChange, className, placeholder }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 text-sm text-slate-600", srOnlyLabel && "sr-only"),
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/SelectField.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-md border border-slate-300 bg-white px-3 py-2 text-sm", className),
                value: value,
                onChange: (e)=>onChange(e.target.value),
                "aria-label": srOnlyLabel ? label : undefined,
                children: [
                    placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/SelectField.tsx",
                        lineNumber: 53,
                        columnNumber: 25
                    }, this),
                    options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: opt.value,
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/apps/web/components/ui/SelectField.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/SelectField.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/SelectField.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/components/ui/MultiSelectField.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiSelectField",
    ()=>MultiSelectField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/cn.ts [app-ssr] (ecmascript)");
// src/components/ui/MultiSelectField.tsx
"use client";
;
;
;
function MultiSelectField({ label, srOnlyLabel, value, options, onChange, placeholder = "Select...", className, buttonClassName, menuClassName, showSelectAll = true, disabled = false }) {
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    // ปิด dropdown เมื่อคลิกนอก
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!open) return;
        const onClickOutside = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        const onEsc = (e)=>{
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("mousedown", onClickOutside);
        window.addEventListener("keydown", onEsc);
        return ()=>{
            window.removeEventListener("mousedown", onClickOutside);
            window.removeEventListener("keydown", onEsc);
        };
    }, [
        open
    ]);
    const selectedSet = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>new Set(value), [
        value
    ]);
    const toggle = (val)=>{
        const next = new Set(selectedSet);
        if (next.has(val)) next.delete(val);
        else next.add(val);
        onChange(Array.from(next));
    };
    const allSelected = value.length > 0 && value.length === options.length;
    const handleSelectAll = ()=>{
        if (allSelected) {
            onChange([]);
        } else {
            onChange(options.map((o)=>o.value));
        }
    };
    const summaryLabel = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (value.length === 0) return placeholder;
        if (value.length <= 2) {
            const firstTwo = options.filter((o)=>selectedSet.has(o.value)).map((o)=>o.label).slice(0, 2).join(", ");
            return value.length > 2 ? `${firstTwo} +${value.length - 2}` : firstTwo;
        }
        return `${value.length} selected`;
    }, [
        value.length,
        placeholder,
        options,
        selectedSet
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center", className),
        ref: ref,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 text-sm text-slate-600", srOnlyLabel && "sr-only"),
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: id,
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex h-9 items-center rounded-md border border-slate-300 bg-white px-3 text-sm", "hover:bg-slate-50", disabled && "opacity-60 cursor-not-allowed", buttonClassName),
                "aria-haspopup": "listbox",
                "aria-expanded": open,
                onClick: ()=>!disabled && setOpen((s)=>!s),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(value.length === 0 && "text-slate-500"),
                        children: summaryLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "ml-2 h-4 w-4 text-slate-500",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 8l4 4 4-4",
                            stroke: "currentColor",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "menu",
                "aria-label": label,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute z-50 mt-1 w-[280px] rounded-md border border-slate-200 bg-white shadow-lg", "max-h-64 overflow-auto p-1", menuClassName),
                children: [
                    showSelectAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-sm hover:bg-slate-50"),
                        onClick: handleSelectAll,
                        role: "menuitemcheckbox",
                        "aria-checked": allSelected,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: allSelected,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: allSelected ? "Unselect all" : "Select all"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this),
                    options.map((opt)=>{
                        const checked = selectedSet.has(opt.value);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-sm hover:bg-slate-50"),
                            onClick: ()=>toggle(opt.value),
                            role: "menuitemcheckbox",
                            "aria-checked": checked,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: checked,
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: opt.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                    lineNumber: 165,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, opt.value, true, {
                            fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this);
                    }),
                    value.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-1 border-t border-slate-200"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 text-sm text-red-600 hover:bg-red-50",
                                onClick: ()=>onChange([]),
                                role: "menuitem",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/MultiSelectField.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
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
"[project]/apps/web/components/ui/FilterBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/ExportSelect.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/SelectField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$MultiSelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/MultiSelectField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/SearchInput.tsx [app-ssr] (ecmascript)");
// src/components/ui/FilterBar.tsx
"use client";
;
;
;
;
;
;
function FilterBar({ filters, onFiltersChange, statusOptions = [], typeOptions = [], manufacturerOptions = [], labels, onExport, rightExtra, extraFilters, onClearFilters, statusSelected, onStatusSelectedChange, typeSelected, onTypeSelectedChange, manufacturerSelected, onManufacturerSelectedChange }) {
    const { status: statusLabel = "Status", type: typeLabel = "Type", manufacturer: manufacturerLabel = "Manufacturer", searchPlaceholder = "Search", allStatus = "All Statuses", allType = "All Types", allManufacturer = "All Manufacturers", clear: clearLabel = "Clear" } = labels ?? {};
    const hasStatus = statusOptions.length > 0;
    const hasType = typeOptions.length > 0;
    const hasManufacturer = manufacturerOptions.length > 0;
    const ALL = "__ALL__";
    const makeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((allLabel, list, includeAll = true)=>[
            ...includeAll ? [
                {
                    label: allLabel,
                    value: ALL
                }
            ] : [],
            ...list.map((v)=>({
                    label: v,
                    value: v
                }))
        ], []);
    // single-mode options → มี ALL item
    const statusSelectOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>makeOptions(allStatus, statusOptions, !statusSelected), [
        allStatus,
        statusOptions,
        statusSelected,
        makeOptions
    ]);
    const typeSelectOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>makeOptions(allType, typeOptions, !typeSelected), [
        allType,
        typeOptions,
        typeSelected,
        makeOptions
    ]);
    const manufacturerSelectOptions = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>makeOptions(allManufacturer, manufacturerOptions, !manufacturerSelected), [
        allManufacturer,
        manufacturerOptions,
        manufacturerSelected,
        makeOptions
    ]);
    const safeFilters = filters ?? {};
    const patch = (key, value)=>onFiltersChange({
            ...safeFilters,
            [key]: value
        });
    const statusValue = filters?.status ?? ALL;
    const typeValue = filters?.type ?? ALL;
    const manufacturerValue = filters?.manufacturer ?? ALL;
    // type predicate helpers (ปลอดภัย + TS happy)
    const isTStatus = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((s)=>statusOptions.includes(s), [
        statusOptions
    ]);
    const isTType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((s)=>typeOptions.includes(s), [
        typeOptions
    ]);
    const isManufacturer = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((s)=>manufacturerOptions.includes(s), [
        manufacturerOptions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 items-center flex-wrap",
                children: [
                    hasStatus && (Array.isArray(statusSelected) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$MultiSelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiSelectField"], {
                        label: statusLabel,
                        srOnlyLabel: true,
                        options: statusOptions.map((s)=>({
                                label: s,
                                value: s
                            })),
                        value: [
                            ...statusSelected
                        ],
                        onChange: (arr)=>onStatusSelectedChange?.(arr.filter(isTStatus)),
                        placeholder: allStatus
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: statusLabel,
                        srOnlyLabel: true,
                        value: statusValue,
                        options: statusSelectOptions,
                        onChange: (v)=>patch("status", !v || v === ALL ? undefined : v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)),
                    hasType && (Array.isArray(typeSelected) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$MultiSelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiSelectField"], {
                        label: typeLabel,
                        srOnlyLabel: true,
                        options: typeOptions.map((s)=>({
                                label: s,
                                value: s
                            })),
                        value: [
                            ...typeSelected
                        ],
                        onChange: (arr)=>onTypeSelectedChange?.(arr.filter(isTType)),
                        placeholder: allType
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: typeLabel,
                        srOnlyLabel: true,
                        value: typeValue,
                        options: typeSelectOptions,
                        onChange: (v)=>patch("type", !v || v === ALL ? undefined : v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)),
                    hasManufacturer && (Array.isArray(manufacturerSelected) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$MultiSelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiSelectField"], {
                        label: manufacturerLabel,
                        srOnlyLabel: true,
                        options: manufacturerOptions.map((s)=>({
                                label: s,
                                value: s
                            })),
                        value: [
                            ...manufacturerSelected
                        ],
                        onChange: (arr)=>onManufacturerSelectedChange?.(arr.filter(isManufacturer)),
                        placeholder: allManufacturer
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SelectField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectField"], {
                        label: manufacturerLabel,
                        srOnlyLabel: true,
                        value: manufacturerValue,
                        options: manufacturerSelectOptions,
                        onChange: (v)=>patch("manufacturer", !v || v === ALL ? undefined : v)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this)),
                    extraFilters,
                    onClearFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "h-10 rounded border border-slate-300 px-3 text-sm",
                        onClick: onClearFilters,
                        children: clearLabel
                    }, void 0, false, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2",
                        children: [
                            onExport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$ExportSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportSelect"], {
                                onExport: onExport
                            }, void 0, false, {
                                fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                                lineNumber: 222,
                                columnNumber: 24
                            }, this),
                            rightExtra
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$SearchInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchInput"], {
                value: filters?.search ?? "",
                onChange: (q)=>onFiltersChange({
                        ...safeFilters,
                        search: q
                    }),
                placeholder: searchPlaceholder
            }, void 0, false, {
                fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/ui/FilterBar.tsx",
        lineNumber: 132,
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
"[project]/apps/web/lib/tables/requestColumns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/tables/requestColumns.tsx
__turbopack_context__.s([
    "requestColumns",
    ()=>requestColumns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date.ts [app-ssr] (ecmascript)");
;
;
const requestColumns = [
    {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        width: 96,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-slate-800 tabular-nums",
                children: [
                    "#",
                    String(value)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.id
    },
    {
        id: 'title',
        header: 'Title',
        accessorKey: 'title',
        width: 360,
        cell: (_value, row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate font-medium text-slate-900",
                        children: row.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "truncate text-xs text-slate-500",
                        children: [
                            "Requester: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-700",
                                children: row.requester
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                                lineNumber: 28,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-2 text-slate-300",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Dept: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-700",
                                children: row.department
                            }, void 0, false, {
                                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.title
    },
    {
        id: 'dueAt',
        header: 'Due',
        accessorKey: 'dueAt',
        width: 140,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-800",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDue"])(String(value))
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 41,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.dueAt
    },
    {
        id: 'site',
        header: 'Site',
        accessorKey: 'site',
        width: 140,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-800",
                children: String(value)
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 49,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.site
    },
    {
        id: 'exception',
        header: 'Exceptions',
        accessorKey: 'exception',
        width: 180,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate text-slate-800",
                children: String(value)
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 57,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.exception
    },
    {
        id: 'risk',
        header: 'Risk',
        accessorKey: 'risk',
        width: 110,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: [
                    'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1',
                    value === 'High' ? 'bg-red-50 text-red-700 ring-red-100' : value === 'Medium' ? 'bg-amber-50 text-amber-700 ring-amber-100' : 'bg-green-50 text-green-700 ring-green-100'
                ].join(' '),
                children: String(value)
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/requestColumns.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        getSortValue: (row)=>row.risk
    }
];
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
"[project]/apps/web/components/requests/RequestsView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useDebounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$requests$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/services/requests.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/FilterBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/table/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$requestColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/tables/requestColumns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-ssr] (ecmascript)");
// src/app/requests/_client/RequestsView.tsx
"use client";
;
;
;
;
;
;
;
;
function RequestsView(props) {
    const hasType = (props.typeOptions?.length ?? 0) > 0;
    // service stable
    const serviceRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$requests$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRequestsService"])({
        impl: "mock"
    }));
    // ---- state ----
    const [filters, setFilters] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        status: undefined,
        type: undefined,
        manufacturer: undefined,
        search: ""
    });
    const [pagination, setPagination] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        pageIndex: 0,
        pageSize: 10
    });
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        items: [],
        total: 0
    });
    // table states
    const [sorting, setSorting] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // NOTE: DataTable ใช้ได้ทั้ง string | number
    const [selectedIds, setSelectedIds] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(new Set());
    //   แปลงเป็น string[] เฉพาะตอนส่งให้ InventoryActionToolbar (แก้ปัญหา type)
    const selectedIdStrings = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>Array.from(selectedIds, String), [
        selectedIds
    ]);
    // debounce เฉพาะ search
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebounce"])(filters.search ?? "", 350);
    // query stable
    const query = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize,
            filters: {
                site: filters.status,
                risk: filters.type,
                exception: filters.manufacturer,
                search: debouncedSearch
            }
        }), [
        pagination.pageIndex,
        pagination.pageSize,
        filters.status,
        filters.type,
        filters.manufacturer,
        debouncedSearch
    ]);
    // fetch with cancellation
    const abortRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const reqIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const fetchList = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(async ()=>{
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        const myId = ++reqIdRef.current;
        setLoading(true);
        try {
            const res = await serviceRef.current.list(query);
            if (controller.signal.aborted || myId !== reqIdRef.current) return;
            setData(res);
        } catch (e) {
            if (e?.name !== "AbortError") console.error(e);
        } finally{
            if (myId === reqIdRef.current) setLoading(false);
        }
    }, [
        query
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        fetchList();
        return ()=>abortRef.current?.abort();
    }, [
        fetchList
    ]);
    // handlers
    const onFiltersChange = (next)=>{
        setFilters(next);
        setPagination((p)=>({
                ...p,
                pageIndex: 0
            }));
        setSelectedIds(new Set()); // เคลียร์ selection เมื่อ filter เปลี่ยน
    };
    const onExport = async (fmt)=>{
        const blob = await serviceRef.current.export(fmt, {
            filters: {
                site: filters.status,
                risk: filters.type,
                exception: filters.manufacturer,
                search: filters.search
            }
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const ts = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
        a.href = url;
        a.download = `requests-${ts}.${fmt}`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const onAction = (_)=>{};
    const handleClearClick = ()=>{
        setFilters({
            search: ""
        });
        setPagination((p)=>({
                ...p,
                pageIndex: 0
            }));
        setSelectedIds(new Set());
    };
    // labels/right-extra (memo เพื่อกัน re-render ไม่จำเป็น)
    const labels = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            status: "Site",
            type: "Risk",
            manufacturer: "Exceptions",
            searchPlaceholder: "Search",
            allStatus: props.allStatusLabel,
            allType: hasType ? props.allTypeLabel : undefined,
            allManufacturer: props.allManufacturerLabel,
            clear: "Clear"
        }), [
        props.allStatusLabel,
        props.allTypeLabel,
        props.allManufacturerLabel,
        hasType
    ]);
    const filterBarRightExtra = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryActionToolbar"], {
            entity: "licenses",
            selectedIds: selectedIdStrings,
            basePath: "/software/license-management",
            enableDefaultMapping: true,
            onAction: (act)=>{
                if (act === "Add") {
                // ...
                }
                if (act === "Delete") {
                // ...
                }
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/components/requests/RequestsView.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this);
    }, [
        selectedIdStrings
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterBar"], {
                filters: filters,
                onFiltersChange: onFiltersChange,
                statusOptions: props.statusOptions,
                typeOptions: hasType ? props.typeOptions : undefined,
                manufacturerOptions: props.manufacturerOptions,
                onExport: onExport,
                onAction: onAction,
                labels: labels,
                rightExtra: filterBarRightExtra,
                onClearFilters: handleClearClick,
                statusSelected: undefined,
                onStatusSelectedChange: undefined,
                typeSelected: undefined,
                onTypeSelectedChange: undefined,
                manufacturerSelected: undefined,
                onManufacturerSelectedChange: undefined
            }, void 0, false, {
                fileName: "[project]/apps/web/components/requests/RequestsView.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-slate-200 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                    // data
                    columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$requestColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["requestColumns"],
                    rows: data.items,
                    totalRows: data.total,
                    // table options
                    variant: "default",
                    size: "xs",
                    maxBodyHeight: 480,
                    defaultColMinWidth: 96,
                    // sorting
                    sorting: sorting,
                    onSortingChange: setSorting,
                    clientSideSort: true,
                    // selection (checkbox หน้า/แถว)
                    selectedIds: selectedIds,
                    onSelectionChange: setSelectedIds,
                    selectionScope: "page",
                    getRowId: (r)=>r.id,
                    // navigation (คลิกแถว)
                    onRowClick: (row)=>{
                        console.log("open request id:", row?.id);
                    },
                    // pagination
                    pagination: pagination,
                    onPaginationChange: setPagination,
                    // states
                    isLoading: loading,
                    isError: false,
                    errorMessage: undefined,
                    // empty message
                    emptyMessage: "ไม่พบรายการที่ตรงกับเงื่อนไข"
                }, void 0, false, {
                    fileName: "[project]/apps/web/components/requests/RequestsView.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/components/requests/RequestsView.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/requests/RequestsView.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_10120b0a._.js.map