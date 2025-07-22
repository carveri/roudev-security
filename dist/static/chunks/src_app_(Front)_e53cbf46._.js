(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(Front)/(Private)/[Components]/utils/dataCuerpoPerfil.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataCuerpoPerfil": ()=>dataCuerpoPerfil
});
const dataCuerpoPerfil = [
    {
        id: '1',
        nombre: 'Perfil'
    },
    {
        id: '2',
        nombre: 'Configuración Personal'
    },
    {
        id: '3',
        nombre: 'Facturación'
    },
    {
        id: '4',
        nombre: 'Plan Expert'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataCuerpoPerfil$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataCuerpoPerfil.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// para poder hacer el cierre de session
//import { useAuth } from "react-oidc-context";
const ModalPerfil = (param)=>{
    let { setActivar } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    //const {} = useSession()
    const handleClickPerfil = (e, id)=>{
        e.preventDefault();
        if (e.target.name === 'Perfil') {
            router.push('/dashboard/perfil/perfilPersonal');
            setActivar(false);
        } else if (e.target.name === 'Configuración Personal') {
            router.push('/dashboard/perfilLaboral');
        } else if (e.target.name === 'Facturación') {
            router.push('/dashboard/facturacion');
            setActivar(false);
        } else if (e.target.name === 'Plan Expert') {
            router.push('/dashboard/perfilProyectos');
        } else {
            console.log('as');
        }
    };
    const handleClickSalir = ()=>{
        //e.preventDefault()
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
    //if(ses)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50  fixed top-10  mr-6 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] grid items-center ",
                                children: "Cuenta"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                    lineNumber: 54,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[70%]  flex py-1 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[25%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/adminClientes2.png",
                                    width: 35,
                                    height: 35,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                    lineNumber: 59,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[75%] h-full  grid  items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Juan Perez Lopez"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                        lineNumber: 62,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "juanperezl@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                        lineNumber: 65,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[79%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataCuerpoPerfil$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataCuerpoPerfil"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>handleClickPerfil(e, el.id),
                            name: el.nombre,
                            className: "w-full hover:bg-gray-100 h-10 border border-gray-50 flex justify-start pl-2 items-center",
                            children: el.nombre
                        }, el.id, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                            lineNumber: 74,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleClickSalir,
                    className: "w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50",
                    children: "Salir"
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalPerfil, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalPerfil;
const __TURBOPACK__default__export__ = ModalPerfil;
var _c;
__turbopack_context__.k.register(_c, "ModalPerfil");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/utils/dataCuerpoConectar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataCuerpoConectar": ()=>dataCuerpoConectar
});
const dataCuerpoConectar = [
    {
        id: '1',
        nombre: 'Mi Red',
        path: '/dashboard/startUps/miRed'
    },
    {
        id: '2',
        nombre: 'Conectar',
        path: '/dashboard/startUps/miRed'
    },
    {
        id: '3',
        nombre: 'Publicar Evento',
        path: '/dashboard/startUps/miRed'
    },
    {
        id: '4',
        nombre: 'Enviar Mensaje',
        path: '/dashboard/startUps/miRed'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataCuerpoConectar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataCuerpoConectar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ModalConectar = (param)=>{
    let { setActivar } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickCerrarSession = ()=>{
        router.push('/');
    };
    const handleClickPincharConectar = (el)=>{
        router.push(el.path);
        setActivar(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50  fixed top-10  mr-[146px] border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] grid items-center ",
                                children: "Conectar con StartUps"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[70%]  flex py-1 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[25%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png",
                                    width: 35,
                                    height: 35,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                    lineNumber: 36,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                lineNumber: 35,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[75%] h-full  grid  items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Chipax"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "chipax.software@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                        lineNumber: 42,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[79%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataCuerpoConectar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataCuerpoConectar"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleClickPincharConectar(el),
                            className: "w-full hover:bg-gray-100 h-10 border border-gray-50 flex justify-start pl-2 items-center",
                            children: el.nombre
                        }, el.id, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                            lineNumber: 51,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                onClick: ()=>setActivar(false),
                className: "w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50",
                children: "Salir"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalConectar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalConectar;
const __TURBOPACK__default__export__ = ModalConectar;
var _c;
__turbopack_context__.k.register(_c, "ModalConectar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/utils/dataSoporte.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataSoporte": ()=>dataSoporte
});
const dataSoporte = [
    {
        id: 1,
        nombre: 'Telefonica',
        imagen: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/telefono.png'
    },
    {
        id: 2,
        nombre: 'Video Llamada',
        imagen: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png'
    },
    {
        id: 3,
        nombre: 'Email',
        imagen: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/laboral.png'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataSoporte$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataSoporte.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ModalSoporte = (param)=>{
    let { setActivar } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickCerrarSession = ()=>{
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-10  mr-[105px] border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] grid items-center ",
                                children: "Soporte al Cliente"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                    lineNumber: 28,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[70%]  flex py-1 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[25%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png",
                                    width: 35,
                                    height: 35,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                    lineNumber: 33,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[75%] h-full  grid  items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Chipax"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                        lineNumber: 36,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "chipax.software@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                lineNumber: 35,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[79%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataSoporte$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSoporte"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full hover:bg-gray-100 h-10 border border-gray-50 flex justify-start pl-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: el.imagen,
                                        width: 12,
                                        height: 12,
                                        alt: "sd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: el.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                            lineNumber: 48,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                onClick: ()=>setActivar(false),
                className: "w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50",
                children: "Salir"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalSoporte, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalSoporte;
const __TURBOPACK__default__export__ = ModalSoporte;
var _c;
__turbopack_context__.k.register(_c, "ModalSoporte");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Assets/Icons/cruz3.png (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/cruz3.0a4fdd23.png");}),
"[project]/src/app/(Front)/React/Assets/Icons/cruz3.png.mjs { IMAGE => \"[project]/src/app/(Front)/React/Assets/Icons/cruz3.png (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Assets/Icons/cruz3.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 512,
    height: 512,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASklEQVR42oWPsQ0AIAgEaZyUkjHdhsLECfQhT2IlxSXm71UQEZlgAQODGLNweTjAgRJnFi7bFWxSF8Llk/qIKipdX2i/aIf8rnkBYAIr4dZb17oAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/utils/dataConfiguraciones.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataConfiguraciones": ()=>dataConfiguraciones
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/app/(Front)/React/Assets/Icons/cruz3.png.mjs { IMAGE => "[project]/src/app/(Front)/React/Assets/Icons/cruz3.png (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
const dataConfiguraciones = [
    {
        id: '1',
        nombreConfiguracion: 'Idioma',
        iconoConfiguraciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        dataIdiomas: [
            {
                nombreIdioma: 'Español'
            },
            {
                nombreIdioma: 'Ingles'
            }
        ]
    },
    {
        id: '2',
        nombreConfiguracion: 'Modo Visual',
        iconoConfiguraciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        dataVisual: [
            {
                nombreVisual: 'Claro'
            },
            {
                nombreVisual: 'Oscuro'
            }
        ]
    },
    {
        id: '3',
        nombreConfiguracion: 'Sistema',
        iconoConfiguraciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: '4',
        nombreConfiguracion: 'Facturación',
        iconoConfiguraciones: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Assets$2f$Icons$2f$cruz3$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataConfiguraciones$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataConfiguraciones.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ModalConfiguraciones = (param)=>{
    let { setActivar } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickCerrarSession = ()=>{
        router.push('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-10  mr-[64px] border  border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[20%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[50%] flex  px-1 border-b border-gray-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full flex items-center gap-x-2 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config2.png",
                                            width: 15,
                                            height: 15,
                                            alt: "s"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                            lineNumber: 22,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                        lineNumber: 21,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Configuraciones"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                        lineNumber: 24,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                lineNumber: 20,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                    lineNumber: 29,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[70%]  flex py-1 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[25%] h-full grid place-items-center pt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/adminClientes2.png",
                                    width: 35,
                                    height: 35,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                    lineNumber: 34,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                lineNumber: 33,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[75%] h-full  grid  items-center py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Juan Perez Lopez"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                        lineNumber: 37,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "juanperezl@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                        lineNumber: 40,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[59%] mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[81%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataConfiguraciones$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataConfiguraciones"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full hover:bg-gray-100 h-10 border border-gray-50 flex justify-start pl-2 items-center",
                            children: el.nombreConfiguracion
                        }, el.id, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                            lineNumber: 52,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                onClick: ()=>setActivar(false),
                className: "w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50",
                children: "Salir"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalConfiguraciones, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalConfiguraciones;
const __TURBOPACK__default__export__ = ModalConfiguraciones;
var _c;
__turbopack_context__.k.register(_c, "ModalConfiguraciones");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/utils/dataSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import home from "../../../React/Assets/Icons/home.png";
// import iniciar from "../../../React/Assets/Icons/iniciar5.png";
// import recientes from "../../../React/Assets/Icons/reloj4.png";
// import favoritos from "../../../React/Assets/Icons/star.png";
// import proyectos from "../../../React/Assets/Icons/proyecto.png";
// import equipo from "../../../React/Assets/Icons/equipo4.png";
// import flecha from "../../../React/Assets/Icons/flechaDerecha.png";
__turbopack_context__.s({
    "dataSidebar": ()=>dataSidebar
});
const dataSidebar = [
    {
        id: '1',
        nombre: 'Home',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/home.png',
        href: '/dashboard/home',
        href2: '/dashboard/home/misProyectos',
        href3: '/dashboard/home/individual/cofounders',
        href4: '/dashboard/home/individual/empleados',
        href5: '/dashboard/home/individual/comunidad',
        href6: '/dashboard/home/misProyectos/verProyecto',
        href7: '/dashboard/home/misProyectos/detalleProyecto',
        flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaDerecha.png'
    },
    // {
    //     id:'2', 
    //     nombre: 'Iniciar',
    //     icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iniciar5.png',
    //     href: '/dashboard/iniciar',
    //     href2: '/dashboard/iniciar/frontend',
    //     href3: '/dashboard/iniciar/testFrontend',
    //     href4: '/dashboard/iniciar/backend',
    //     href5: '/dashboard/iniciar/testBackend',
    //     href6: '/dashboard/iniciar/baseDeDatos',
    //     href7: '/dashboard/iniciar/infraestructura',
    //     href8: '/dashboard/iniciar/despliegue',
    //     href9: '/dashboard/iniciar/autenticacion',
    //     flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaDerecha.png'
    // },
    {
        id: '2',
        nombre: 'Recientes',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/reloj4.png',
        href: '/dashboard/recientes',
        flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/fechaDerecha.png'
    },
    {
        id: '3',
        nombre: 'Favoritos',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/star.png',
        href: '/dashboard/favoritos',
        flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaDerecha.png'
    },
    {
        id: '4',
        nombre: 'Proyectos',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/proyecto.png',
        href: '/dashboard/proyectos',
        href2: '/dashboard/proyectos/gestion/tablero',
        href3: '/dashboard/proyectos/presentacion/lista',
        href4: '/dashboard/proyectos/gestion/calendario',
        href5: '/dashboard/proyectos/gestion/tarea',
        flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaDerecha.png'
    },
    // {
    //     id:'5', 
    //     nombre: 'Equipos',
    //     icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/equipo4.png',
    //     href: '/dashboard/equipos',
    //     flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaDerecha.png'
    // },
    {
        id: '5',
        nombre: 'Finanzas',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png',
        href: '/dashboard/finanzas',
        href2: '/dashboard/finanzas/estadosFinancieros',
        href3: '/dashboard/finanzas/proyeccionFinanciera',
        href4: '/dashboard/finanzas/unitsEconomics',
        href5: '/dashboard/finanzas/estadosFinancieros/estadoDeResultados',
        href6: '/dashboard/finanzas/estadosFinancieros/balanceGeneral',
        flecha: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/fechaDerecha.png'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Components/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f$utils$2f$dataSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/utils/dataSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Sidebar = (param)=>{
    let { handleClickSidebar } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full h-full",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f$utils$2f$dataSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataSidebar"].map((el)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>handleClickSidebar(e, el.href),
                name: el.nombre,
                className: "hover:bg-gray-200 cursor-pointer  w-full h-[7%] flex items-center justify-center  }\n                ".concat(pathname === el.href || pathname === el.href2 || pathname === el.href3 || pathname === el.href4 || pathname === el.href5 || pathname === (el === null || el === void 0 ? void 0 : el.href6) || pathname === el.href7 || pathname === el.href8 || pathname === el.href9 ? "border-1 bg-gray-200 duration-75 text-white" : "", "\n                "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        name: el.nombre,
                        src: el.icono,
                        width: 19,
                        height: 19,
                        alt: "as"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/React/Components/Sidebar.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/React/Components/Sidebar.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, el.id, false, {
                fileName: "[project]/src/app/(Front)/React/Components/Sidebar.tsx",
                lineNumber: 14,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/(Front)/React/Components/Sidebar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SelectInput = (param)=>{
    let { nombre, name, type, placeholder, handleChange } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "h-1 text-gray-600 pb-5",
                htmlFor: "",
                children: [
                    nombre,
                    " *"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectInput.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onChange: handleChange,
                name: name,
                className: " rounded h-9 pl-3 bg-white border border-gray-100",
                type: type,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectInput.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectInput.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SelectInput;
const __TURBOPACK__default__export__ = SelectInput;
var _c;
__turbopack_context__.k.register(_c, "SelectInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Fetch/getData.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getData": ()=>getData
});
const getData = async (param)=>{
    let { ruta } = param;
    //console.log('ruta:', ruta);
    try {
        const apiUrl = "http://localhost:3000/api/".concat(ruta);
        const res = await fetch(apiUrl);
        const desjson = await res.json();
        return desjson;
    } catch (error) {
        return error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SelectAbriri = (param)=>{
    let { nombre, name, setId, session } = param;
    _s();
    const [finalidadProyecto, setFinalidadProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Hobby');
    const [abrirFinalidad, setAbrirFinalidad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [finalidadProyectoId, setFinalidadProyectoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // ESTADO ID DEL SELECT
    //const [idFinalidadProyecto, setIdFinalidadProyecto] = useState('')
    // CAPTURO EL ESTADO DEL FORMULARIO
    const handleClickModalCrearProyecto1 = (e)=>{
        e.preventDefault();
        setAbrirFinalidad(!abrirFinalidad);
    };
    // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
    const handleClickSelectProyecto = (e, id, nombre)=>{
        e.preventDefault();
        setId(id);
        setFinalidadProyecto(nombre);
        setAbrirFinalidad(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectAbriri.useEffect": ()=>{
            const getProyectoss = {
                "SelectAbriri.useEffect.getProyectoss": async ()=>{
                    const ruta = 'finalidadProyecto';
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])({
                        ruta
                    });
                    setFinalidadProyectoId(res);
                }
            }["SelectAbriri.useEffect.getProyectoss"];
            getProyectoss();
        }
    }["SelectAbriri.useEffect"], []);
    //console.log('finaa:', finalidadProyectoId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "h-1 text-gray-600 pb-5",
                htmlFor: "",
                children: [
                    nombre,
                    " *"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClickModalCrearProyecto1,
                name: name,
                className: " cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4",
                children: [
                    finalidadProyecto,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png",
                        width: 10,
                        height: 10,
                        alt: "sd"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            abrirFinalidad && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-[60px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white",
                children: finalidadProyectoId.map((el)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>handleClickSelectProyecto(e, el.id, el.nombreFinalidadProyecto),
                        name: "selectFinalidadProyecto",
                        className: " pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "".concat(!(el === null || el === void 0 ? void 0 : el.iconoFinalidadProyecto) ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png' : el === null || el === void 0 ? void 0 : el.iconoFinalidadProyecto),
                                width: 15,
                                height: 15,
                                alt: "iconoSubTipo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            el === null || el === void 0 ? void 0 : el.nombreFinalidadProyecto
                        ]
                    }, el.id, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                        lineNumber: 64,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectAbriri, "rA9P3uu6NHHwMyVIfLxQsGwDW4w=");
_c = SelectAbriri;
const __TURBOPACK__default__export__ = SelectAbriri;
var _c;
__turbopack_context__.k.register(_c, "SelectAbriri");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SelectAbrir2 = (param)=>{
    let { setId } = param;
    _s();
    const [finalidadProyecto, setFinalidadProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Hobby');
    const [tipoProyecto, setTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('App Web');
    const [subTipoProyecto, setSubTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('App Web');
    const [abrirFinalidad, setAbrirFinalidad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [abrirTipos, setAbrirTipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [abrirSubTipos, setAbrirSubTipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ESTADO ID DEL SELECT
    const [idFinalidadProyecto, setIdFinalidadProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [idTipoProyecto, setIdTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [idSubTipoProyecto, setIdSubTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tipoProyectoId, setTipoProyectoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // CAPTURO EL ESTADO DEL FORMULARIO
    const handleClickModalCrearProyecto = (e)=>{
        e.preventDefault();
        setAbrirTipos(!abrirTipos);
        setAbrirFinalidad(false);
        setAbrirSubTipos(false);
    };
    // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
    const handleClickSelectProyecto = (e, id, nombre)=>{
        e.preventDefault();
        setId(id);
        setTipoProyecto(nombre);
        setAbrirTipos(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectAbrir2.useEffect": ()=>{
            const getTipoProyectoss = {
                "SelectAbrir2.useEffect.getTipoProyectoss": async ()=>{
                    const ruta = 'tipoProyecto';
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])({
                        ruta
                    });
                    setTipoProyectoId(res);
                }
            }["SelectAbrir2.useEffect.getTipoProyectoss"];
            getTipoProyectoss();
        }
    }["SelectAbrir2.useEffect"], []);
    //console.log('finaa:', tipoProyectoId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "h-1 text-gray-600 pb-5",
                htmlFor: "",
                children: "Tipo de Proyecto *"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
                lineNumber: 55,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClickModalCrearProyecto,
                name: "tipoDelProyecto",
                className: " cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4",
                children: [
                    tipoProyecto,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png",
                        width: 10,
                        height: 10,
                        alt: "sd"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
                        lineNumber: 61,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
                lineNumber: 56,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            abrirTipos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-[60px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white",
                children: tipoProyectoId.map((el)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        name: "selectTipoProyecto",
                        onClick: (e)=>handleClickSelectProyecto(e, el.id, el.nombreTipoProyecto),
                        className: "pl-4 w-full justify-start h-9  border border-gray-100 grid items-center cursor-pointer hover:bg-gray-100 ",
                        children: el.nombreTipoProyecto
                    }, el.id, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
                        lineNumber: 67,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
                lineNumber: 65,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SelectAbrir2, "3hDbJcv0DcnRdwjK19ohHBkNKRc=");
_c = SelectAbrir2;
const __TURBOPACK__default__export__ = SelectAbrir2;
var _c;
__turbopack_context__.k.register(_c, "SelectAbrir2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Fetch/postData.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "postData": ()=>postData
});
const postData = async (param)=>{
    let { ruta, data } = param;
    try {
        const apiUrl = "http://localhost:3000/api/".concat(ruta);
        const res = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const desjson = await res.json();
        return desjson;
    } catch (error) {
        return error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/BotonesCrearProyecto.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const BotonesCrearProyecto = (param)=>{
    let { setAbrirModal, presupuestoDelProyecto, session, nombreProyecto, tipoProyecto, idFinalidadProyecto, idTipoProyecto, fechaTermino } = param;
    var _session_user;
    const userIdSession = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;
    console.log('fechafinalxxx:', fechaTermino);
    // ENVIO DEL FORMULARIO AL BACK
    const handleClickCrearProyecto = (e)=>{
        e.preventDefault();
        const id1 = userIdSession;
        const fechaInicio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'dd/MM/yyyy');
        //const fechaTermino = fechaTermino
        const statusProyecto = 'Activo';
        const responsableProyecto = userIdSession;
        const finalidadProyectoId = idFinalidadProyecto;
        const tipoProyectoId = idTipoProyecto;
        const ceo = [
            userIdSession
        ];
        const todos = {
            id: userIdSession
        };
        const data = {
            nombreProyecto,
            presupuestoDelProyecto,
            id1,
            fechaInicio,
            todos,
            statusProyecto,
            responsableProyecto,
            finalidadProyectoId,
            tipoProyectoId,
            fechaTermino,
            ceo
        };
        console.log(data);
        const ruta = 'proyecto';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postData"])({
            ruta,
            data
        });
        setAbrirModal(false);
        location.reload();
    };
    const handleClickVolverCrearProyecto = (e)=>{
        e.preventDefault();
        setAbrirModal(false);
    //router.back()
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-[35%] w-full flex justify-end items-end gap-x-2",
        children: [
            nombreProyecto !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClickCrearProyecto,
                className: "h-[100%] w-[30%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-tamañoLetraChica",
                children: "Crear Proyecto"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/BotonesCrearProyecto.tsx",
                lineNumber: 46,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClickVolverCrearProyecto,
                className: "h-[100%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica",
                children: "Cerrar"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/BotonesCrearProyecto.tsx",
                lineNumber: 50,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/BotonesCrearProyecto.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BotonesCrearProyecto;
const __TURBOPACK__default__export__ = BotonesCrearProyecto;
var _c;
__turbopack_context__.k.register(_c, "BotonesCrearProyecto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ModalCalendario = (param)=>{
    let { nombre, fecha, setFecha, mt, ml } = param;
    _s();
    // estado de fecha
    const [abrirCalendario, setAbrirCalendario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //console.log();
    const handleClickAbrirCalendario = ()=>{
        setAbrirCalendario(!abrirCalendario);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalCalendario.useEffect": ()=>{
            setAbrirCalendario(false);
        }
    }["ModalCalendario.useEffect"], [
        fecha
    ]);
    const defaultClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultClassNames"])();
    console.log('mtt:', mt);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "h-1 text-gray-600 pb-5",
                htmlFor: "",
                children: [
                    nombre,
                    " *"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onClick: handleClickAbrirCalendario,
                className: "border cursor-pointer border-gray-100 py-2 px-1 pl-3",
                type: "text",
                readOnly: true,
                value: fecha
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute ".concat(mt, " ").concat(ml, " text-(length:--tamañoLetraChica)"),
                children: abrirCalendario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                    className: "bg-white shadow-2xl border border-gray-100 p-7 text-[11px]",
                    classNames: {
                        today: "border border-blue-400 rounded-full",
                        selected: "bg-blue-400 border-amber-500 rounded-xl text-white",
                        root: "".concat(defaultClassNames.root, " shadow-lg p-5"),
                        chevron: "".concat(defaultClassNames.chevron, " fill-amber-500"),
                        button_next: "text-red-500",
                        day: "text-gray-600 font-semibold",
                        weekday: 'text-blue-500 font-semibold text-[12px] py-4',
                        month: 'text-blue-700 capitalize'
                    },
                    animate: true,
                    mode: "single",
                    selected: fecha,
                    onSelect: setFecha,
                    // footer={
                    //     fecha ? `Fecha seleccionada: ${fecha.toLocaleDateString()}` : ""
                    // }
                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalCalendario, "nMJ8nlQvPVnTUTGAwH1K/KD4WtQ=");
_c = ModalCalendario;
const __TURBOPACK__default__export__ = ModalCalendario;
var _c;
__turbopack_context__.k.register(_c, "ModalCalendario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectAbriri$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbriri.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectAbrir2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/SelectAbrir2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$BotonesCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/BotonesCrearProyecto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCalendario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCalendario.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const InternoModalCrearProyecto = (param)=>{
    let { session, setAbrirModal } = param;
    _s();
    //console.log('sesion en modal:', session?.user);
    const [nombreProyecto, setNombreProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [presupuestoDelProyecto, setPresupuestoDelProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tipoProyecto, setTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    //const [fechaTermino, setFechaTermino] = useState('')
    const [fecha, setFecha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [idFinalidadProyecto, setIdFinalidadProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [idTipoProyecto, setIdTipoProyecto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // formato de la fecha
    const newFecha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(fecha, 'dd/MM/yyyy', {
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["es"]
    });
    //console.log({newFecha()});
    const handleChangeNombreProyecto = (e)=>{
        //console.log(e.target.value);
        setNombreProyecto(e.target.value);
    };
    const handleChangePresupuestoProyecto = (e)=>{
        //console.log(e.target.value);
        setPresupuestoDelProyecto(e.target.valueAsNumber);
    };
    const handleChangeTipoProyecto = (e)=>{
        //console.log(e.target.value);
        setTipoProyecto(e.target.value);
    };
    // const handleChangeFechaTermino =(e)=>{
    //   //console.log(e.target.value);
    //   setFechaTermino(e.target.value)
    // }
    console.log('fecha pinchada:', newFecha);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-20 shadow-2xl fixed top-[38px] grid justify-self-center text-tamañoLetraChica",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "w-full h-[10%] py-10 grid place-content-center  text-gray-600 font-semibold text-tamañoLetra",
                    children: "Crear Proyecto"
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                    lineNumber: 60,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "h-[99%] grid grid-rows-5 -mt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nombre: "Nombre del Proyecto",
                            name: "nombreDelProyecto",
                            type: "text",
                            placeholder: "Apolo 1",
                            handleChange: handleChangeNombreProyecto
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nombre: "Logo del proyecto (Opcional)",
                            name: "logoProyecto",
                            type: "file",
                            placeholder: "Apolo 1",
                            handleChange: handleChangeTipoProyecto
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 71,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectAbriri$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            //setAbrirModal={setAbrirModal}
                            nombre: "Finalidad del  Proyecto",
                            name: "finalidadDelProyecto",
                            setId: setIdFinalidadProyecto,
                            session: session
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 80,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectAbrir2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            setId: setIdTipoProyecto
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 88,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nombre: "Presupuesto del Proyecto (USD)",
                            name: "presupuestoDelProyecto",
                            type: "number",
                            placeholder: "100",
                            handleChange: handleChangePresupuestoProyecto
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 91,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCalendario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            nombre: "Fecha de Termino ",
                            fecha: newFecha,
                            setFecha: setFecha,
                            ml: "ml-[370px]",
                            mt: "mt-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                            lineNumber: 98,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                    lineNumber: 63,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$BotonesCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setAbrirModal: setAbrirModal,
                    session: session,
                    nombreProyecto: nombreProyecto,
                    presupuestoDelProyecto: presupuestoDelProyecto,
                    tipoProyecto: tipoProyecto,
                    fechaTermino: newFecha,
                    idFinalidadProyecto: idFinalidadProyecto,
                    idTipoProyecto: idTipoProyecto
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
                    lineNumber: 106,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InternoModalCrearProyecto, "1r0m76jyu0dqTj4a+wL/pRAT8T8=");
_c = InternoModalCrearProyecto;
const __TURBOPACK__default__export__ = InternoModalCrearProyecto;
var _c;
__turbopack_context__.k.register(_c, "InternoModalCrearProyecto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCrearProyecto.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$InternoModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/[CompInternos]/InternoModalCrearProyecto.tsx [app-client] (ecmascript)");
;
;
const ModalCrearProyecto = (param)=>{
    let { abrirModal, posicion, setAbrirModal, session } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f5b$CompInternos$5d2f$InternoModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            session: session,
            setAbrirModal: setAbrirModal
        }, void 0, false, {
            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCrearProyecto.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_c = ModalCrearProyecto;
const __TURBOPACK__default__export__ = ModalCrearProyecto;
var _c;
__turbopack_context__.k.register(_c, "ModalCrearProyecto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCrearProyecto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getData.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ModalIniciar = (param)=>{
    let { setActivar } = param;
    _s();
    const [abrirModal, setAbrirModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dataMisProyectos, setDataMisProyectos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickSelectIniciar = (e)=>{
        e.preventDefault();
        setActivar(false);
        router.push('/dashboard/iniciar');
    };
    const handleClickAbrirModalCrearProyecto = ()=>{
        setAbrirModal(!abrirModal);
    //setActivar(false)
    };
    // traer todos los proyectos 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalIniciar.useEffect": ()=>{
            const traerData = {
                "ModalIniciar.useEffect.traerData": async ()=>{
                    const ruta = 'proyecto';
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])({
                        ruta
                    });
                    setDataMisProyectos(res);
                }
            }["ModalIniciar.useEffect.traerData"];
            traerData();
        }
    }["ModalIniciar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%]  fixed top-[100px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-tamañoLetraChica",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Selecciona Un Proyecto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[60%]  flex py-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[10%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png",
                                    width: 11,
                                    height: 11,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full  grid  items-center py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar Mis Proyectos",
                                    className: "w-[93%] pl-2 border border-gray-200 h-full rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[93%] h-[60%] -mt-1 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[80%] overflow-auto",
                    children: dataMisProyectos.map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClickSelectIniciar,
                            className: "w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "flex -mt-1",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png",
                                    width: 15,
                                    height: 15,
                                    alt: "sd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: el.nombreProyecto
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                            lineNumber: 65,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full   cursor-pointer  h-[12%] border-t border-gray-200 flex items-end  pl-2 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClickAbrirModalCrearProyecto,
                    className: "pl-2 gap-x-2 rounded  hover:shadow-xl flex h-[90%] items-center py-1  w-[60%]  text-black  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[9%]  grid items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png",
                                width: 15,
                                height: 15,
                                alt: "s"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                            lineNumber: 76,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[93%]  text-tamañoLetraChica  flex items-center text-gray-800 ",
                            children: "Crear un Proyecto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                            lineNumber: 79,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            abrirModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex justify-end ml-5  ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    abrirModal: abrirModal,
                    setAbrirModal: setAbrirModal,
                    posicion: ""
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalIniciar, "ytvW4ORXTK1WfoRtsKAykUMDPoU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalIniciar;
const __TURBOPACK__default__export__ = ModalIniciar;
var _c;
__turbopack_context__.k.register(_c, "ModalIniciar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/utils/dataActividadesRecientes.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataActividadesRecientes": ()=>dataActividadesRecientes
});
const dataActividadesRecientes = [
    {
        id: '1',
        nombreTarea: 'Tarea 1'
    },
    {
        id: '2',
        nombreTarea: 'Tarea 2'
    },
    {
        id: '3',
        nombreTarea: 'Tarea 3'
    },
    {
        id: '4',
        nombreTarea: 'Tarea 4'
    },
    {
        id: '5',
        nombreTarea: 'Tarea 5'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataActividadesRecientes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataActividadesRecientes.tsx [app-client] (ecmascript)");
;
;
const ModalRecientes = (param)=>{
    let { setActivar } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-[100px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Actividades Recientes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                lineNumber: 8,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                    lineNumber: 12,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                lineNumber: 11,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                        lineNumber: 7,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[70%]  flex py-1 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[25%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/calendario.png",
                                    width: 35,
                                    height: 35,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                    lineNumber: 17,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                lineNumber: 16,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[75%] h-full  grid  items-center py-3",
                                children: "Calendario"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                                lineNumber: 19,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                lineNumber: 6,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] -mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[80%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataActividadesRecientes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataActividadesRecientes"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full h-10 hover:bg-gray-100 border border-gray-50 flex justify-start pl-2 items-center",
                            children: el.nombreTarea
                        }, el.id, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                            lineNumber: 27,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:underline",
                children: "Ver más"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ModalRecientes;
const __TURBOPACK__default__export__ = ModalRecientes;
var _c;
__turbopack_context__.k.register(_c, "ModalRecientes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/utils/dataMisFavoritos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataMisFavoritos": ()=>dataMisFavoritos
});
const dataMisFavoritos = [
    {
        id: '1',
        nombreMisFavoritos: 'Mis Tareas'
    },
    {
        id: '2',
        nombreMisFavoritos: 'Crear Proyectos'
    },
    {
        id: '3',
        nombreMisFavoritos: 'Mi Stack '
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataMisFavoritos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/utils/dataMisFavoritos.tsx [app-client] (ecmascript)");
;
;
const ModalFavoritos = (param)=>{
    let { setActivar } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-[160px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Mis Favoritos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                lineNumber: 8,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                    lineNumber: 12,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                lineNumber: 11,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                        lineNumber: 7,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[60%]  flex py-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[10%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png",
                                    width: 11,
                                    height: 11,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                    lineNumber: 17,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                lineNumber: 16,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full  grid  items-center py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar Mis Favoritos",
                                    className: "w-[93%] pl-2 border border-gray-200 h-full rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                    lineNumber: 20,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                lineNumber: 19,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                lineNumber: 6,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] -mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[79%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$utils$2f$dataMisFavoritos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataMisFavoritos"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "flex -mt-1",
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/star.png",
                                    width: 15,
                                    height: 15,
                                    alt: "sd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: el.nombreMisFavoritos
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                            lineNumber: 27,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:underline",
                children: "Ver más"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ModalFavoritos;
const __TURBOPACK__default__export__ = ModalFavoritos;
var _c;
__turbopack_context__.k.register(_c, "ModalFavoritos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Fetch/getDataLista.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDataLista": ()=>getDataLista
});
const getDataLista = async (param)=>{
    let { ruta, url } = param;
    try {
        const apiUrl = "http://localhost:3000/api/".concat(ruta, "/").concat(url);
        const res = await fetch(apiUrl);
        const desjson = await res.json();
        return desjson;
    } catch (error) {
        return error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Fetch/getDataCompleja3.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDataCompleja3": ()=>getDataCompleja3
});
const getDataCompleja3 = async (param)=>{
    let { ruta, elem1, param1 } = param;
    try {
        const apiUrl = "http://localhost:3000/api/".concat(ruta, "?").concat(elem1, "=").concat(param1);
        const res = await fetch(apiUrl);
        const desjson = await res.json();
        return desjson;
    } catch (error) {}
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Fetch/getDataCompleja.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDataCompleja": ()=>getDataCompleja
});
const getDataCompleja = async (param)=>{
    let { ruta, elem1, param1, elem2, param2, elem3, param3 } = param;
    try {
        const apiUrl = "http://localhost:3000/api/".concat(ruta, "?").concat(elem1, "=").concat(param1, "&").concat(elem2, "=").concat(param2, "&").concat(elem3, "=").concat(param3);
        const res = await fetch(apiUrl);
        const desjson = await res.json();
        return desjson;
    } catch (error) {}
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[stores]/homeStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFinalidadProyectos": ()=>useFinalidadProyectos,
    "useHistoriaAdmin": ()=>useHistoriaAdmin,
    "useIdCeo": ()=>useIdCeo,
    "useIdProyectoPro": ()=>useIdProyectoPro,
    "useIdProyectoProUpdated": ()=>useIdProyectoProUpdated,
    "useIdResponsableTarea": ()=>useIdResponsableTarea,
    "useIdTareaSelecccionado": ()=>useIdTareaSelecccionado,
    "useNombreProyectoPro": ()=>useNombreProyectoPro,
    "useProyectoPorUser": ()=>useProyectoPorUser,
    "useProyectoUpdate": ()=>useProyectoUpdate,
    "useStore": ()=>useStore,
    "useTareaStatus": ()=>useTareaStatus,
    "useTipoProyectos": ()=>useTipoProyectos,
    "useUserOnProyecto": ()=>useUserOnProyecto
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataCompleja3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getDataCompleja3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getDataLista.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataCompleja$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getDataCompleja.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getData.tsx [app-client] (ecmascript)");
;
;
;
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        bears: '',
        //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        //   removeAllBears: () => set({ bears: 0 }),
        updateBears: (newBears)=>set({
                bears: newBears
            })
    }));
const useIdCeo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        idCeo: [],
        updateIdCeo: (newIdCeo)=>set({
                idCeo: newIdCeo
            })
    }));
const useIdProyectoPro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        idProyecto: '',
        updateIdProyecto: (newIdProyecto)=>set({
                idProyecto: newIdProyecto
            })
    }));
const useIdProyectoProUpdated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        idProyectoUpdated: '',
        updateIdProyectoId: (newIdProyecto)=>set({
                idProyectoUpdated: newIdProyecto
            })
    }));
const useNombreProyectoPro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        nombreProyecto: '',
        updateNombreProyecto: (newNombreProyecto)=>set({
                nombreProyecto: newNombreProyecto
            })
    }));
const useIdTareaSelecccionado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tareaSeleccionadoId: '',
        updateTareaSeleccionadoId: (newIdTareaSeleccionada)=>set({
                tareaSeleccionadoId: newIdTareaSeleccionada
            })
    }));
const useIdResponsableTarea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        idResponsableTarea: '',
        updateIdResponsableTarea: (newIdResponsableTarea)=>set({
                idResponsableTarea: newIdResponsableTarea
            })
    }));
const useHistoriaAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tareas: [],
        getTareas: async (idTarea)=>{
            const ruta = 'tarea';
            const url = idTarea;
            const tareas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataLista"])({
                ruta,
                url
            });
            set((state)=>({
                    ...state,
                    tareas
                }));
        }
    }));
const useTareaStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tareasStatus: [],
        getTareasStatus: async (proyId, userId, stat)=>{
            const ruta = 'tarea';
            const elem1 = 'proyectoId';
            const param1 = proyId;
            const elem2 = 'userId';
            const param2 = userId;
            const elem3 = 'status';
            const param3 = stat;
            const tareasStatus = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataCompleja$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataCompleja"])({
                ruta,
                elem1,
                param1,
                elem2,
                param2,
                elem3,
                param3
            });
            set((state)=>({
                    ...state,
                    tareasStatus
                }));
        }
    }));
const useProyectoUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        proyecto: [],
        getProyecto: async (idProyectoUpdated)=>{
            const ruta = 'proyecto2';
            const url = idProyectoUpdated;
            const proyecto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataLista"])({
                ruta,
                url
            });
            set((state)=>({
                    ...state,
                    proyecto
                }));
        }
    }));
const useProyectoPorUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        proyectosUser: [],
        getProyectosUser: async (idUser)=>{
            const ruta = 'proyectoUser';
            const url = idUser;
            const proyectosUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataLista"])({
                ruta,
                url
            });
            set((state)=>({
                    ...state,
                    proyectosUser
                }));
        }
    }));
const useUserOnProyecto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        userOnProyecto: [],
        getUserOnProyecto: async (proyectoId)=>{
            const ruta = 'userOnProyecto';
            const elem1 = 'proyectoId';
            const param1 = proyectoId;
            const userOnProyecto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataCompleja3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataCompleja3"])({
                ruta,
                elem1,
                param1
            });
            set((state)=>({
                    ...state,
                    userOnProyecto
                }));
        }
    }));
const useFinalidadProyectos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        finalidadProyecto: [],
        getFinalidadesDeProyectos: async ()=>{
            const ruta = 'finalidadProyecto';
            //const url = idTarea
            const finalidadProyecto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])({
                ruta
            });
            set((state)=>({
                    ...state,
                    finalidadProyecto
                }));
        }
    }));
const useTipoProyectos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        tipoProyecto: [],
        getTiposDeProyectos: async ()=>{
            const ruta = 'tipoProyecto';
            //const url = idTarea
            const tipoProyecto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])({
                ruta
            });
            set((state)=>({
                    ...state,
                    tipoProyecto
                }));
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCrearProyecto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getDataLista.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[stores]/homeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ModalMisProyectos = (param)=>{
    let { setActivar, session } = param;
    var _misProyectos__proyectos, _misProyectos_;
    _s();
    const [abrirModal, setAbrirModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [misProyectos, setMisProyectos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const idProSeleccionado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdProyectoPro"])({
        "ModalMisProyectos.useIdProyectoPro[idProSeleccionado]": (state)=>state.updateIdProyecto
    }["ModalMisProyectos.useIdProyectoPro[idProSeleccionado]"]);
    const nombreProSeleccionado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNombreProyectoPro"])({
        "ModalMisProyectos.useNombreProyectoPro[nombreProSeleccionado]": (state)=>state.updateNombreProyecto
    }["ModalMisProyectos.useNombreProyectoPro[nombreProSeleccionado]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickSelecMisProyectos = (e, id, nombrePro)=>{
        e.preventDefault();
        // GUARDAR ESTE ID EN UNA STORE DE ZUSTAND, para despues llamar todo lo demas con esa id
        console.log('idproyectoseleccionado:', id);
        idProSeleccionado(id);
        nombreProSeleccionado(nombrePro);
        setActivar(false);
        router.push('/dashboard/proyectos');
    };
    const handleClickAbrirModalCrearProyecto = ()=>{
        setAbrirModal(!abrirModal);
    //setActivar(false)
    };
    //traer mis proyectos
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalMisProyectos.useEffect": ()=>{
            const traerMisProyectos = {
                "ModalMisProyectos.useEffect.traerMisProyectos": async ()=>{
                    var _session_user;
                    const ruta = 'proyectoUser';
                    // el id del user lo voy a traer desde la store de zustand
                    const url = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;
                    const getMisProyectos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataLista"])({
                        ruta,
                        url
                    });
                    setMisProyectos(getMisProyectos);
                }
            }["ModalMisProyectos.useEffect.traerMisProyectos"];
            traerMisProyectos();
        }
    }["ModalMisProyectos.useEffect"], []);
    // const traerMisProyectos =()=>{
    // }
    console.log('misProyECTOS:', misProyectos);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-[222px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Mis Proyectos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                lineNumber: 60,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                    lineNumber: 64,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[60%]  flex py-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[10%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png",
                                    width: 11,
                                    height: 11,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                    lineNumber: 69,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full  grid  items-center py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar Mis Proyectos",
                                    className: "w-[93%] pl-2 border border-gray-200 h-full rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[93%] h-[60%] -mt-3 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[81%] overflow-auto",
                    children: (_misProyectos_ = misProyectos[0]) === null || _misProyectos_ === void 0 ? void 0 : (_misProyectos__proyectos = _misProyectos_.proyectos) === null || _misProyectos__proyectos === void 0 ? void 0 : _misProyectos__proyectos.map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>handleClickSelecMisProyectos(e, el.id, el.nombreProyecto),
                            className: "w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "flex -mt-1",
                                    src: (el === null || el === void 0 ? void 0 : el.iconoProyecto) ? el.iconoProyecto : 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/medicina.png',
                                    width: 15,
                                    height: 15,
                                    alt: "sd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: (el === null || el === void 0 ? void 0 : el.nombreProyecto.length) > 30 ? (el === null || el === void 0 ? void 0 : el.nombreProyecto.slice(0, 30)) + '...' : el === null || el === void 0 ? void 0 : el.nombreProyecto
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                            lineNumber: 79,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full   cursor-pointer  h-[12%] border-t border-gray-200 flex items-end  pl-2 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClickAbrirModalCrearProyecto,
                    className: "pl-2 gap-x-2 rounded  hover:border-b hover:border-blue-500 flex h-[90%] items-center py-1  w-[50%]  text-black  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[9%]  grid items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png",
                                width: 15,
                                height: 15,
                                alt: "s"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                            lineNumber: 90,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[93%]  text-tamañoLetraChica  flex items-center text-gray-800 ",
                            children: "Crear un Proyecto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                            lineNumber: 93,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            abrirModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex justify-end ml-5 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    abrirModal: abrirModal,
                    setAbrirModal: setAbrirModal,
                    posicion: "",
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalMisProyectos, "2uPhLwXMzCb9yAV/H0xfaReiZIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdProyectoPro"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNombreProyectoPro"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalMisProyectos;
const __TURBOPACK__default__export__ = ModalMisProyectos;
var _c;
__turbopack_context__.k.register(_c, "ModalMisProyectos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/home/misProyectos/utils/dataEquipoProyectos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataEquipoProyectos": ()=>dataEquipoProyectos
});
'use client';
const dataEquipoProyectos = [
    {
        id: 1,
        nombreEquipo: 'Team 1',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png',
        usuarios: []
    },
    {
        id: 2,
        nombreEquipo: 'Team 2',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/diseño4.png',
        usuarios: []
    },
    {
        id: 3,
        nombreEquipo: 'Team 3',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/equipo.png',
        usuarios: []
    },
    {
        id: 4,
        nombreEquipo: 'Team 4',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/tablero.png',
        usuarios: []
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f$home$2f$misProyectos$2f$utils$2f$dataEquipoProyectos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/home/misProyectos/utils/dataEquipoProyectos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ModalMisEquipos = (param)=>{
    let { setActivar } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickSelecMisEquipos = (e)=>{
        e.preventDefault();
        setActivar(false);
        router.push('/dashboard/equipos');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%]  fixed top-[343px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-tamañoLetraChica",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Mis Equipos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                    lineNumber: 25,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[60%]  flex py-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[10%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png",
                                    width: 11,
                                    height: 11,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                    lineNumber: 30,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                lineNumber: 29,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full  grid  items-center py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar Mis Equipos",
                                    className: "w-[93%] pl-2 border border-gray-200 h-full rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                    lineNumber: 33,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[60%] -mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[81%] overflow-auto",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f$home$2f$misProyectos$2f$utils$2f$dataEquipoProyectos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataEquipoProyectos"].map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClickSelecMisEquipos,
                            className: "w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "flex -mt-1",
                                    src: el.iconoEquipo,
                                    width: 15,
                                    height: 15,
                                    alt: "sd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: el.nombreEquipo
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                            lineNumber: 40,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full cursor-pointer  h-[12%] border-t border-gray-200 grid items-center pl-2 hover:underline",
                children: "Ver más"
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalMisEquipos, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalMisEquipos;
const __TURBOPACK__default__export__ = ModalMisEquipos;
var _c;
__turbopack_context__.k.register(_c, "ModalMisEquipos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/dashboard/[Components]/ModalCrearProyecto.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Fetch/getDataLista.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[stores]/homeStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ModalFinanzas = (param)=>{
    let { setActivar, session } = param;
    var _misProyectos__proyectos, _misProyectos_;
    _s();
    const [abrirModal, setAbrirModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [misProyectos, setMisProyectos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const idProSeleccionado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdProyectoPro"])({
        "ModalFinanzas.useIdProyectoPro[idProSeleccionado]": (state)=>state.updateIdProyecto
    }["ModalFinanzas.useIdProyectoPro[idProSeleccionado]"]);
    const nombreProSeleccionado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNombreProyectoPro"])({
        "ModalFinanzas.useNombreProyectoPro[nombreProSeleccionado]": (state)=>state.updateNombreProyecto
    }["ModalFinanzas.useNombreProyectoPro[nombreProSeleccionado]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickSelecMisProyectos = (e, id, nombrePro)=>{
        e.preventDefault();
        // GUARDAR ESTE ID EN UNA STORE DE ZUSTAND, para despues llamar todo lo demas con esa id
        console.log('idproyectoseleccionado:', id);
        idProSeleccionado(id);
        nombreProSeleccionado(nombrePro);
        setActivar(false);
        router.push('/dashboard/finanzas');
    };
    const handleClickAbrirModalCrearProyecto = ()=>{
        setAbrirModal(!abrirModal);
    //setActivar(false)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalFinanzas.useEffect": ()=>{
            const traerMisProyectos = {
                "ModalFinanzas.useEffect.traerMisProyectos": async ()=>{
                    var _session_user;
                    const ruta = 'proyectoUser';
                    // el id del user lo voy a traer desde la store de zustand
                    const url = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;
                    const getMisProyectos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Fetch$2f$getDataLista$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataLista"])({
                        ruta,
                        url
                    });
                    setMisProyectos(getMisProyectos);
                }
            }["ModalFinanzas.useEffect.traerMisProyectos"];
            traerMisProyectos();
        }
    }["ModalFinanzas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[15%] h-[40%] z-50 fixed top-[283px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full h-[30%] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "w-full h-[30%] flex px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[85%] grid items-center ",
                                children: "Finanzas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActivar(false),
                                className: "w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png",
                                    width: 10,
                                    height: 10,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                    lineNumber: 58,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full h-[60%]  flex py-1 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[10%] h-full grid place-items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png",
                                    width: 11,
                                    height: 11,
                                    alt: "as"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                    lineNumber: 63,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[90%] h-full  grid  items-center py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Buscar Mis Equipos",
                                    className: "w-[93%] pl-2 border border-gray-200 h-full rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                    lineNumber: 66,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-[93%] h-[60%] -mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-col justify-start z-50  max-h-[81%] overflow-auto",
                    children: (_misProyectos_ = misProyectos[0]) === null || _misProyectos_ === void 0 ? void 0 : (_misProyectos__proyectos = _misProyectos_.proyectos) === null || _misProyectos__proyectos === void 0 ? void 0 : _misProyectos__proyectos.map((el)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>handleClickSelecMisProyectos(e, el.id, el.nombreProyecto),
                            className: "w-[93%] gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "flex -mt-1",
                                    src: (el === null || el === void 0 ? void 0 : el.iconoProyecto) ? el.iconoProyecto : 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/medicina.png',
                                    width: 15,
                                    height: 15,
                                    alt: "sd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: el.nombreProyecto
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, el.id, true, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                            lineNumber: 73,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                    lineNumber: 71,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full   cursor-pointer  h-[12%] border-t border-gray-200 flex items-end  pl-2 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClickAbrirModalCrearProyecto,
                    className: "pl-2 gap-x-2 rounded hover:border-b hover:border-blue-500  flex h-[90%] items-center py-1  w-[50%]  text-black  ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[9%]  grid items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png",
                                width: 15,
                                height: 15,
                                alt: "s"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                            lineNumber: 84,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[93%]  text-tamañoLetraChica  flex items-center text-gray-800 ",
                            children: "Crear un Proyecto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                            lineNumber: 87,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                    lineNumber: 83,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            abrirModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex justify-end ml-5 mt-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f$dashboard$2f5b$Components$5d2f$ModalCrearProyecto$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    abrirModal: abrirModal,
                    setAbrirModal: setAbrirModal,
                    posicion: "",
                    session: session
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalFinanzas, "2uPhLwXMzCb9yAV/H0xfaReiZIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIdProyectoPro"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$stores$5d2f$homeStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNombreProyectoPro"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ModalFinanzas;
const __TURBOPACK__default__export__ = ModalFinanzas;
var _c;
__turbopack_context__.k.register(_c, "ModalFinanzas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Components/utils/dataNavbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "dataNavbar": ()=>dataNavbar
});
const dataNavbar = [
    {
        id: 1,
        nombre: 'Conectar',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/conectar.png',
        href: '/'
    },
    {
        id: 2,
        nombre: 'Soporte',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/telefono3.png',
        href: '/'
    },
    {
        id: 3,
        nombre: 'Notificaciones',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/campana2.png',
        href: '/'
    },
    {
        id: 4,
        nombre: 'Configuracion',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config2.png',
        href: '/'
    },
    {
        id: 5,
        nombre: 'Perfil',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/adminClientes2.png',
        href: '/'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/React/Components/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$utils$2f$dataNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Components/utils/dataNavbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Navbar = (param)=>{
    let { setActivarPerfil, activarPerfil, setActivarConectar, activarConectar, activarSoporte, setActivarSoporte, activarConfiguraciones, setActivarConfiguraciones } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClickNavbar = (e)=>{
        //e.preventDefault()
        if (e.target.name === 'Conectar') {
            setActivarConectar(!activarConectar);
            setActivarPerfil(false);
            setActivarSoporte(false);
            setActivarConfiguraciones(false);
        } else if (e.target.name === 'Soporte') {
            setActivarSoporte(!activarSoporte);
            setActivarPerfil(false);
            setActivarConectar(false);
            setActivarConfiguraciones(false);
        } else if (e.target.name === 'Configuracion') {
            setActivarConfiguraciones(!activarConfiguraciones);
            setActivarPerfil(false);
            setActivarConectar(false);
            setActivarSoporte(false);
        } else if (e.target.name === 'Perfil') {
            setActivarPerfil(!activarPerfil);
            setActivarConectar(false);
            setActivarConfiguraciones(false);
            setActivarSoporte(false);
        } else {
            console.log('otra cosa');
        }
    };
    //const imagenLupa = <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' alt="o" />
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full h-full  flex justify-between items-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "cursor-pointer",
                    src: "https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png",
                    width: 20,
                    height: 20,
                    alt: "as"
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "rounded pl-3 bg-white border  border-gray-200 text-(length:--tamañoLetraChica) h-5.5 w-96 py-1",
                        type: "text",
                        placeholder: "Buscar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-x-2 pr-3 ",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$utils$2f$dataNavbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataNavbar"].map((el)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                name: el.nombre,
                                onClick: handleClickNavbar,
                                className: "cursor-pointer hover:border-b hover:border-gray-500 px-2  ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: el.icono,
                                    width: 16,
                                    height: 16,
                                    alt: "sd",
                                    name: el.nombre
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, el.id, false, {
                                fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 20
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/React/Components/Navbar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalPerfil$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalPerfil.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalConectar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalConectar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalSoporte$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalSoporte.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalConfiguraciones$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalConfiguraciones.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalIniciar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalIniciar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalRecientes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalRecientes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalFavoritos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalFavoritos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalMisProyectos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalMisProyectos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalMisEquipos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalMisEquipos.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalFinanzas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/(Private)/[Components]/ModalFinanzas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(Front)/React/Components/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const PageLayout = (param)=>{
    let { children1, session } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // NAVBAR
    const [activarPerfil, setActivarPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarConectar, setActivarConectar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarSoporte, setActivarSoporte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarConfiguraciones, setActivarConfiguraciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //const [activarVideoCorfo, setActivarVideoCorfo] = useState(false)
    // SIDEBAR
    const [activarIniciar, setActivarIniciar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarRecientes, setActivarRecientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarFavoritos, setActivarFavoritos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarProyectos, setActivarProyectos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarEquipos, setActivarEquipos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarFinazas, setActivarFinanzas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activarVideoCorfo, setActivarVideoCorfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClickSidebar = (e, href)=>{
        //e.preventDefault()
        if (e.target.name === "Home") {
            router.push(href);
        } else if (e.target.name === 'Iniciar') {
            setActivarIniciar(!activarIniciar);
            setActivarRecientes(false);
            setActivarFavoritos(false);
            setActivarProyectos(false);
            setActivarEquipos(false);
        } else if (e.target.name === "Recientes") {
            setActivarRecientes(!activarRecientes);
            setActivarIniciar(false);
            setActivarFavoritos(false);
            setActivarProyectos(false);
            setActivarEquipos(false);
        } else if (e.target.name === "Favoritos") {
            setActivarFavoritos(!activarFavoritos);
            setActivarIniciar(false);
            setActivarRecientes(false);
            setActivarProyectos(false);
            setActivarEquipos(false);
        } else if (e.target.name === "Proyectos") {
            setActivarProyectos(!activarProyectos);
            setActivarIniciar(false);
            setActivarRecientes(false);
            setActivarFavoritos(false);
            setActivarEquipos(false);
        } else if (e.target.name === "Equipos") {
            setActivarEquipos(!activarEquipos);
            setActivarIniciar(false);
            setActivarRecientes(false);
            setActivarFavoritos(false);
            setActivarProyectos(false);
        } else if (e.target.name === "Finanzas") {
            setActivarFinanzas(!activarFinazas);
            setActivarIniciar(false);
            setActivarRecientes(false);
            setActivarFavoritos(false);
            setActivarProyectos(false);
        } else if (e.target.name === "VideoCorfo") {
            router.push(href);
        } else {
            alert('otra wea');
        }
    //router.push(href)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] h-[4.2%] border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActivarPerfil: setActivarPerfil,
                    activarPerfil: activarPerfil,
                    setActivarConectar: setActivarConectar,
                    activarConectar: activarConectar,
                    activarSoporte: activarSoporte,
                    setActivarSoporte: setActivarSoporte,
                    activarConfiguraciones: activarConfiguraciones,
                    setActivarConfiguraciones: setActivarConfiguraciones
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            activarPerfil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] flex justify-end bg-red-400 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalPerfil$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActivar: setActivarPerfil
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                    lineNumber: 123,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 122,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            activarConectar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] flex justify-end bg-red-400 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalConectar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActivar: setActivarConectar
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                    lineNumber: 131,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 130,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            activarSoporte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] flex justify-end bg-red-400 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalSoporte$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActivar: setActivarSoporte
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 137,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            activarConfiguraciones && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[100%] flex justify-end bg-red-400 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalConfiguraciones$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActivar: setActivarConfiguraciones
                }, void 0, false, {
                    fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 144,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[95%] flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "h-full w-[3%] bg-gray-50 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f$React$2f$Components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleClickSidebar: handleClickSidebar
                        }, void 0, false, {
                            fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                            lineNumber: 153,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarIniciar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalIniciar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarIniciar
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 158,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarRecientes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalRecientes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarRecientes
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 163,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarFavoritos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalFavoritos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarFavoritos
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 168,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarProyectos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalMisProyectos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarProyectos,
                        session: session
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 173,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarEquipos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalMisEquipos$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarEquipos
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 179,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    activarFinazas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Front$292f28$Private$292f5b$Components$5d2f$ModalFinanzas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setActivar: setActivarFinanzas,
                        session: session
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 184,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[97%] h-full ",
                        children: children1
                    }, void 0, false, {
                        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
                lineNumber: 151,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(Front)/(Private)/dashboard/[Components]/PageLayout.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PageLayout, "Pz8fndh3jT2+vhywu+hGRM4NGik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PageLayout;
const __TURBOPACK__default__export__ = PageLayout;
var _c;
__turbopack_context__.k.register(_c, "PageLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28Front%29_e53cbf46._.js.map