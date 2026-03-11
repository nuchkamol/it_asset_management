module.exports = [
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
"[project]/apps/web/components/inventory/InventoryPageShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InventoryPageShell",
    ()=>InventoryPageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/components/table/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/table/DataTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/FilterBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/PageHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/Card.tsx [app-ssr] (ecmascript)");
// src/components/inventory/InventoryPageShell.tsx
"use client";
;
;
;
;
;
;
function InventoryPageShell(props) {
    const { title, breadcrumbs, summaryCards, summaryRender, filters, onFiltersChange, statusOptions, allStatusLabel, manufacturerOptions, allManufacturerLabel, filterBarRightExtra, columns, rows, totalRows, pagination, onPaginationChange, sorting, onSortingChange, rowHref, emptyMessage = "ไม่พบรายการ", isLoading = false, isError = false, errorMessage, maxBodyHeight = 420, onExport, onAction, selectable = false, selectedIds, onSelectedIdsChange, getRowId, selectionScope = "page", onClearFilters, defaultSort, statusSelected, onStatusSelectedChange, typeSelected, onTypeSelectedChange, manufacturerSelected, onManufacturerSelectedChange } = props;
    const selectedIdSet = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>selectedIds && Array.isArray(selectedIds) ? new Set(selectedIds) : undefined, [
        selectedIds
    ]);
    const handleSelectionChange = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((next)=>{
        const asStrings = Array.from(next).map(String);
        onSelectedIdsChange?.(asStrings);
    }, [
        onSelectedIdsChange
    ]);
    const summaryArea = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (summaryRender) return summaryRender;
        if (!summaryCards || summaryCards.length === 0) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
                children: summaryCards.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        title: item.title,
                        count: item.count,
                        compact: true,
                        className: item.className ?? "h-[88px]"
                    }, item.id ?? item.title, false, {
                        fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this);
    }, [
        summaryCards,
        summaryRender
    ]);
    const hasType = "hasType" in props && props.hasType === true;
    const clearAll = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        onFiltersChange({
            status: undefined,
            type: undefined,
            manufacturer: undefined,
            search: ""
        });
        if (defaultSort && defaultSort.length > 0) {
            onSortingChange(defaultSort);
        }
        onPaginationChange({
            pageIndex: 0,
            pageSize: pagination.pageSize
        });
    }, [
        onFiltersChange,
        onSortingChange,
        onPaginationChange,
        defaultSort,
        pagination.pageSize
    ]);
    // ⭐ ถ้ามี onClearFilters จากเพจ → เรียกก่อน แล้วค่อยเคลียร์ของ Shell ต่อ
    const handleClearClick = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        onClearFilters?.();
        clearAll();
    }, [
        onClearFilters,
        clearAll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: title,
                breadcrumbs: breadcrumbs
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            summaryArea,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterBar"], {
                filters: filters,
                onFiltersChange: onFiltersChange,
                statusOptions: statusOptions,
                typeOptions: hasType ? props.typeOptions : undefined,
                manufacturerOptions: manufacturerOptions,
                onExport: onExport,
                onAction: onAction,
                labels: {
                    allStatus: allStatusLabel,
                    allType: hasType ? props.allTypeLabel : undefined,
                    allManufacturer: allManufacturerLabel,
                    clear: "Clear"
                },
                rightExtra: filterBarRightExtra,
                onClearFilters: handleClearClick,
                statusSelected: statusSelected,
                onStatusSelectedChange: onStatusSelectedChange,
                typeSelected: typeSelected,
                onTypeSelectedChange: onTypeSelectedChange,
                manufacturerSelected: manufacturerSelected,
                onManufacturerSelectedChange: onManufacturerSelectedChange
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$table$2f$DataTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: columns,
                rows: rows,
                totalRows: totalRows,
                pagination: pagination,
                onPaginationChange: onPaginationChange,
                sorting: sorting,
                onSortingChange: onSortingChange,
                variant: "striped",
                emptyMessage: emptyMessage,
                isLoading: isLoading,
                isError: isError,
                errorMessage: errorMessage,
                maxBodyHeight: maxBodyHeight,
                rowHref: rowHref,
                selectable: selectable,
                selectedIds: selectedIdSet,
                onSelectionChange: handleSelectionChange,
                getRowId: getRowId,
                selectionScope: selectionScope
            }, void 0, false, {
                fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/inventory/InventoryPageShell.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/lib/sortingToServer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sortingToServer",
    ()=>sortingToServer
]);
function sortingToServer(sorting) {
    if (!Array.isArray(sorting) || sorting.length === 0) return {};
    const first = sorting[0];
    return {
        sortBy: String(first.id),
        sortOrder: first.desc ? "desc" : "asc"
    };
}
}),
"[project]/apps/web/hooks/useServerTableController.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useServerTableController",
    ()=>useServerTableController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sortingToServer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/sortingToServer.ts [app-ssr] (ecmascript)");
// hooks/useServerTableController.ts
"use client";
;
;
function useServerTableController(opts) {
    const { pageSize, defaultSort, domainFilters, setDomainFilters, toSimple, fromSimple, resetDeps = [] } = opts;
    // Pagination
    const [pagination, setPagination] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        pageIndex: 0,
        pageSize
    });
    // Sorting
    const [sorting, setSorting] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([
        {
            id: String(defaultSort.id),
            desc: !!defaultSort.desc
        }
    ]);
    // Domain -> Simple (UI)
    const simpleFilters = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>toSimple(domainFilters), [
        domainFilters,
        toSimple
    ]);
    const onSimpleFiltersChange = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((sf)=>setDomainFilters(fromSimple(sf)), [
        fromSimple,
        setDomainFilters
    ]);
    // reset page เมื่อ deps ใน filter เปลี่ยน
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setPagination((p)=>p.pageIndex === 0 ? p : {
                ...p,
                pageIndex: 0
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, resetDeps);
    // query พร้อมส่ง server
    const serverSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sortingToServer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortingToServer"])(sorting);
    const serverQuery = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            pageIndex: pagination.pageIndex,
            pageSize: pagination.pageSize,
            sortBy: serverSort.sortBy,
            sortOrder: serverSort.sortOrder
        }), [
        pagination.pageIndex,
        pagination.pageSize,
        serverSort.sortBy,
        serverSort.sortOrder
    ]);
    return {
        simpleFilters,
        onSimpleFiltersChange,
        pagination,
        setPagination,
        sorting,
        setSorting,
        serverQuery
    };
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
"[project]/apps/web/lib/tables/exceptionInventoryColumns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/tables/exceptionInventoryColumns.ts
__turbopack_context__.s([
    "exceptionInventoryColumns",
    ()=>exceptionInventoryColumns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/show.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/date.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/ui/StatusBadge.tsx [app-ssr] (ecmascript)");
;
;
;
;
const exceptionInventoryColumns = [
    {
        id: "exception_id",
        header: "Exception Id",
        accessorKey: "exception_id",
        getSortValue: (row)=>row.exception_id,
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(value)
    },
    {
        id: "name",
        header: "Name",
        accessorKey: "name",
        getSortValue: (row)=>row.name,
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(value)
    },
    {
        id: "status",
        header: "Status",
        accessorKey: "status",
        getSortValue: (row)=>row.status,
        cell: (value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$ui$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(value),
                variant: "exception"
            }, void 0, false, {
                fileName: "[project]/apps/web/lib/tables/exceptionInventoryColumns.tsx",
                lineNumber: 28,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "risk",
        header: "Risk",
        accessorKey: "risk",
        getSortValue: (row)=>row.risk ?? "",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(value)
    },
    {
        id: "createdAt",
        header: "Created At",
        accessorKey: "createdAt",
        getSortValue: (row)=>row.createdAt ?? "",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateTH"])(value)
    },
    {
        id: "description",
        header: "Description",
        accessorKey: "description",
        getSortValue: (row)=>row.description ?? "",
        cell: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$show$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["show"])(value)
    }
];
}),
"[project]/apps/web/lib/mappers/exceptionFilterMappers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/mappers/exceptionFilterMappers.ts
__turbopack_context__.s([
    "toDomainFilters",
    ()=>toDomainFilters,
    "toServiceFilters",
    ()=>toServiceFilters,
    "toSimpleFilters",
    ()=>toSimpleFilters
]);
function toDomainFilters(simple) {
    const s = simple ?? {};
    return {
        status: s.status,
        search: s.search ?? s.q ?? ""
    };
}
function toSimpleFilters(domain) {
    const q = domain.search && domain.search.trim() ? domain.search.trim() : undefined;
    return {
        status: domain.status,
        q,
        search: q
    };
}
function toServiceFilters(simple) {
    const out = {};
    if (simple.status) out.status = String(simple.status);
    const k = simple.search ?? simple.q;
    if (k) out.search = k;
    return out;
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
"[project]/apps/web/lib/filters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/utils/filters.ts
__turbopack_context__.s([
    "normalizeByMap",
    ()=>normalizeByMap,
    "toUndef",
    ()=>toUndef,
    "toUndefTrim",
    ()=>toUndefTrim
]);
const toUndef = (v)=>v === "" ? undefined : v;
const toUndefTrim = (v)=>{
    if (v == null) return undefined;
    const t = v.trim();
    return t === "" ? undefined : t;
};
const normalizeByMap = (map)=>(v)=>{
        if (!v) return "";
        return map[v] ?? v.toString();
    };
}),
"[project]/apps/web/hooks/useExceptionInventory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExceptionInventory",
    ()=>useExceptionInventory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$exceptions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/services/exceptions.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/filters.ts [app-ssr] (ecmascript)");
// hooks/useExceptionInventory.ts
"use client";
;
;
;
function useExceptionInventory(serverQuery, filters = {}) {
    const [rows, setRows] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [totalRows, setTotalRows] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [isLoading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [isError, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [errorMessage, setErrorMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const serviceQuery = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const { pageIndex = 0, pageSize = 10, sortBy, sortOrder } = serverQuery;
        const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUndefTrim"])(filters.search) ?? undefined;
        const status = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$filters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUndefTrim"])(filters.status);
        return {
            page: pageIndex + 1,
            pageSize,
            sortBy: sortBy,
            sortOrder: sortOrder,
            search,
            status
        };
    }, [
        serverQuery.pageIndex,
        serverQuery.pageSize,
        serverQuery.sortBy,
        serverQuery.sortOrder,
        filters.search,
        filters.status
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const ac = new AbortController();
        let alive = true;
        (async ()=>{
            try {
                setLoading(true);
                setError(false);
                setErrorMessage(undefined);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$services$2f$exceptions$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getExceptionDefinitions"])(serviceQuery, ac.signal);
                if (!alive) return;
                setRows(res.items ?? []); //   ตอนนี้เป็น ExceptionDefinitionRow[] แล้ว
                setTotalRows(Number.isFinite(res.totalCount) ? res.totalCount : res.items?.length ?? 0);
            } catch (e) {
                if (e?.name === "AbortError") return;
                if (!alive) return;
                setError(true);
                setErrorMessage(e?.message ?? "โหลดรายการข้อยกเว้นไม่สำเร็จ");
                setRows([]);
                setTotalRows(0);
            } finally{
                if (alive) setLoading(false);
            }
        })();
        return ()=>{
            alive = false;
            ac.abort();
        };
    }, [
        serviceQuery
    ]);
    return {
        rows,
        totalRows,
        isLoading,
        isError,
        errorMessage
    };
}
}),
"[project]/apps/web/app/(app)/exceptions/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExceptionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$InventoryPageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/inventory/InventoryPageShell.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useServerTableController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useServerTableController.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$exceptionInventoryColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/tables/exceptionInventoryColumns.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$exceptionFilterMappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/mappers/exceptionFilterMappers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/toolbar/InventoryActionToolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useExceptionInventory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/hooks/useExceptionInventory.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ExceptionPage() {
    // สร้าง domain filters เริ่มต้นจากโดเมน
    const [domainFilters, setDomainFilters] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$exceptionFilterMappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDomainFilters"])());
    // Controller
    const ctl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useServerTableController$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useServerTableController"])({
        pageSize: 8,
        defaultSort: {
            id: "name",
            desc: false
        },
        domainFilters,
        setDomainFilters,
        toSimple: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$exceptionFilterMappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSimpleFilters"],
        fromSimple: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$exceptionFilterMappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDomainFilters"],
        resetDeps: [
            domainFilters.status,
            domainFilters.search
        ]
    });
    //   บังคับให้ Active มาก่อน เมื่ออยู่ All Status
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const isAll = ctl.simpleFilters.status == null; // undefined = All Status
        if (isAll) {
            ctl.setSorting([
                {
                    id: "status_priority",
                    desc: false
                },
                {
                    id: "name",
                    desc: false
                }
            ]);
        } else {
            ctl.setSorting([
                {
                    id: "name",
                    desc: false
                }
            ]);
        }
        // รีเซ็ตหน้าเพื่อ UX ที่ดีเมื่อเกณฑ์เรียงเปลี่ยน
        ctl.setPagination({
            pageIndex: 0,
            pageSize: ctl.pagination.pageSize
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ctl.simpleFilters.status
    ]);
    // แปลง simpleFilters -> serviceFilters เพื่อยิง API
    const serviceFilters = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$mappers$2f$exceptionFilterMappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toServiceFilters"])(ctl.simpleFilters), [
        ctl.simpleFilters
    ]);
    // ดึงข้อมูลในตาราง (ให้ hook คืน rows: ExceptionDefinitionRow[])
    const { rows, totalRows, isLoading, isError, errorMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$hooks$2f$useExceptionInventory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExceptionInventory"])(ctl.serverQuery, serviceFilters);
    // ตัวเลือกสถานะ
    const statusOptions = [
        "Active",
        "Inactive"
    ];
    const [selectedIds, setSelectedIds] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const handleExport = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((fmt)=>{
        console.log("Export exceptions as:", fmt);
    // TODO: exportExceptionDefinitions(fmt, ctl.serverQuery, serviceFilters)
    }, [
        ctl.serverQuery,
        serviceFilters
    ]);
    const rightExtra = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$toolbar$2f$InventoryActionToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryActionToolbar"], {
        entity: "exceptions",
        selectedIds: selectedIds,
        basePath: "/exceptions",
        enableDefaultMapping: true,
        onAction: (act)=>{
            if (act === "Delete") {
                console.log("delete exceptions:", selectedIds);
            // TODO: call delete API
            }
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/app/(app)/exceptions/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$inventory$2f$InventoryPageShell$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryPageShell"], {
        title: "Exceptions",
        breadcrumbs: [
            {
                label: "Exceptions",
                href: "/exceptions"
            }
        ],
        // {/* FilterBar */}
        filters: ctl.simpleFilters,
        onFiltersChange: ctl.onSimpleFiltersChange,
        statusOptions: statusOptions,
        allStatusLabel: "All Statuses",
        filterBarRightExtra: rightExtra,
        onExport: handleExport,
        // {/* DataTable */}
        columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$tables$2f$exceptionInventoryColumns$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exceptionInventoryColumns"],
        rows: rows,
        totalRows: totalRows,
        pagination: ctl.pagination,
        onPaginationChange: ctl.setPagination,
        sorting: ctl.sorting,
        onSortingChange: ctl.setSorting,
        rowHref: (row)=>`/exceptions/${row.id}`,
        // States
        isLoading: isLoading,
        isError: isError,
        errorMessage: errorMessage,
        // Selection
        selectedIds: selectedIds,
        onSelectedIdsChange: setSelectedIds
    }, void 0, false, {
        fileName: "[project]/apps/web/app/(app)/exceptions/page.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_web_e63d6b66._.js.map