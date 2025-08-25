"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_jadha_OneDrive_Desktop_truthspotter_dash_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chat/route.ts */ \"(rsc)/./src/app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\jadha\\\\OneDrive\\\\Desktop\\\\truthspotter-dash\\\\src\\\\app\\\\api\\\\chat\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_jadha_OneDrive_Desktop_truthspotter_dash_src_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNqYWRoYSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3RydXRoc3BvdHRlci1kYXNoJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNqYWRoYSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3RydXRoc3BvdHRlci1kYXNoJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RydXRoc3BvdHRlci1kYXNoLz85N2FlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGphZGhhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcdHJ1dGhzcG90dGVyLWRhc2hcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hhdFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxqYWRoYVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHRydXRoc3BvdHRlci1kYXNoXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NoYXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chat/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/chat/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/chat.service */ \"(rsc)/./src/app/api/models/chat.service.ts\");\n/* harmony import */ var _middlewares_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/validation */ \"(rsc)/./src/app/api/middlewares/validation.ts\");\n/* harmony import */ var _middlewares_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/security */ \"(rsc)/./src/app/api/middlewares/security.ts\");\n\n\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        (0,_middlewares_security__WEBPACK_IMPORTED_MODULE_3__.applySecurity)(req);\n        (0,_middlewares_validation__WEBPACK_IMPORTED_MODULE_2__.validateChatInput)(body);\n        const data = await (0,_models_chat_service__WEBPACK_IMPORTED_MODULE_1__.handleChatRequest)(body);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data\n        });\n    } catch (err) {\n        const status = err?.message === \"Unauthorized\" ? 401 : 400;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: err?.message || \"Bad Request\"\n        }, {\n            status\n        });\n    }\n}\nasync function GET() {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true,\n        message: \"Chat API is alive\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jaGF0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNnQjtBQUNHO0FBQ047QUFFakQsZUFBZUksS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCSixvRUFBYUEsQ0FBQ0U7UUFDZEgsMEVBQWlCQSxDQUFDSTtRQUNsQixNQUFNRSxPQUFPLE1BQU1QLHVFQUFpQkEsQ0FBQ0s7UUFDckMsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFRSxTQUFTO1lBQU1EO1FBQUs7SUFDakQsRUFBRSxPQUFPRSxLQUFVO1FBQ2pCLE1BQU1DLFNBQVNELEtBQUtFLFlBQVksaUJBQWlCLE1BQU07UUFDdkQsT0FBT1oscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFRSxTQUFTO1lBQU9JLE9BQU9ILEtBQUtFLFdBQVc7UUFBYyxHQUFHO1lBQUVEO1FBQU87SUFDOUY7QUFDRjtBQUVPLGVBQWVHO0lBQ3BCLE9BQU9kLHFEQUFZQSxDQUFDTyxJQUFJLENBQUM7UUFBRVEsSUFBSTtRQUFNSCxTQUFTO0lBQW9CO0FBQ3BFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ1dGhzcG90dGVyLWRhc2gvLi9zcmMvYXBwL2FwaS9jaGF0L3JvdXRlLnRzPzQ2YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGhhbmRsZUNoYXRSZXF1ZXN0IH0gZnJvbSBcIi4uL21vZGVscy9jaGF0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVDaGF0SW5wdXQgfSBmcm9tIFwiLi4vbWlkZGxld2FyZXMvdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBhcHBseVNlY3VyaXR5IH0gZnJvbSBcIi4uL21pZGRsZXdhcmVzL3NlY3VyaXR5XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBhcHBseVNlY3VyaXR5KHJlcSk7XHJcbiAgICB2YWxpZGF0ZUNoYXRJbnB1dChib2R5KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoYW5kbGVDaGF0UmVxdWVzdChib2R5KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgIGNvbnN0IHN0YXR1cyA9IGVycj8ubWVzc2FnZSA9PT0gXCJVbmF1dGhvcml6ZWRcIiA/IDQwMSA6IDQwMDtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyPy5tZXNzYWdlIHx8IFwiQmFkIFJlcXVlc3RcIiB9LCB7IHN0YXR1cyB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IHRydWUsIG1lc3NhZ2U6IFwiQ2hhdCBBUEkgaXMgYWxpdmVcIiB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiaGFuZGxlQ2hhdFJlcXVlc3QiLCJ2YWxpZGF0ZUNoYXRJbnB1dCIsImFwcGx5U2VjdXJpdHkiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsImVyciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnJvciIsIkdFVCIsIm9rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/config/environment.ts":
/*!*******************************************!*\
  !*** ./src/app/api/config/environment.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ENV: () => (/* binding */ ENV)\n/* harmony export */ });\nconst ENV = {\n    SUPABASE_URL: \"https://bfaxufnnfphnqmlqgzlo.supabase.co\",\n    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,\n    API_KEY: process.env.API_KEY\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb25maWcvZW52aXJvbm1lbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE1BQU07SUFDakJDLGNBQWNDLDBDQUFvQztJQUNsREcsc0JBQXNCSCxRQUFRQyxHQUFHLENBQUNFLG9CQUFvQjtJQUN0REMsU0FBU0osUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0FBQzlCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnV0aHNwb3R0ZXItZGFzaC8uL3NyYy9hcHAvYXBpL2NvbmZpZy9lbnZpcm9ubWVudC50cz84YjE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBFTlYgPSB7XHJcbiAgU1VQQUJBU0VfVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gIFNVUEFCQVNFX1NFUlZJQ0VfS0VZOiBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX0tFWSEsXHJcbiAgQVBJX0tFWTogcHJvY2Vzcy5lbnYuQVBJX0tFWSEsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJFTlYiLCJTVVBBQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfU0VSVklDRV9LRVkiLCJBUElfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/config/environment.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/config/supabase.ts":
/*!****************************************!*\
  !*** ./src/app/api/config/supabase.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ \"(rsc)/./src/app/api/config/environment.ts\");\n\n\nif (!_environment__WEBPACK_IMPORTED_MODULE_0__.ENV.SUPABASE_URL || !_environment__WEBPACK_IMPORTED_MODULE_0__.ENV.SUPABASE_SERVICE_KEY) {\n    // Fail fast during boot if missing env\n    console.warn(\"[supabase] Missing SUPABASE env vars.\");\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(_environment__WEBPACK_IMPORTED_MODULE_0__.ENV.SUPABASE_URL, _environment__WEBPACK_IMPORTED_MODULE_0__.ENV.SUPABASE_SERVICE_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb25maWcvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBQ2pCO0FBRXBDLElBQUksQ0FBQ0MsNkNBQUdBLENBQUNDLFlBQVksSUFBSSxDQUFDRCw2Q0FBR0EsQ0FBQ0Usb0JBQW9CLEVBQUU7SUFDbEQsdUNBQXVDO0lBQ3ZDQyxRQUFRQyxJQUFJLENBQUM7QUFDZjtBQUVBLE1BQU1DLFdBQVdOLG1FQUFZQSxDQUFDQyw2Q0FBR0EsQ0FBQ0MsWUFBWSxFQUFFRCw2Q0FBR0EsQ0FBQ0Usb0JBQW9CO0FBQ3hFLGlFQUFlRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJ1dGhzcG90dGVyLWRhc2gvLi9zcmMvYXBwL2FwaS9jb25maWcvc3VwYWJhc2UudHM/NWRlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcbmltcG9ydCB7IEVOViB9IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XHJcblxyXG5pZiAoIUVOVi5TVVBBQkFTRV9VUkwgfHwgIUVOVi5TVVBBQkFTRV9TRVJWSUNFX0tFWSkge1xyXG4gIC8vIEZhaWwgZmFzdCBkdXJpbmcgYm9vdCBpZiBtaXNzaW5nIGVudlxyXG4gIGNvbnNvbGUud2FybihcIltzdXBhYmFzZV0gTWlzc2luZyBTVVBBQkFTRSBlbnYgdmFycy5cIik7XHJcbn1cclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KEVOVi5TVVBBQkFTRV9VUkwsIEVOVi5TVVBBQkFTRV9TRVJWSUNFX0tFWSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiRU5WIiwiU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfU0VSVklDRV9LRVkiLCJjb25zb2xlIiwid2FybiIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/config/supabase.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/middlewares/security.ts":
/*!*********************************************!*\
  !*** ./src/app/api/middlewares/security.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applySecurity: () => (/* binding */ applySecurity)\n/* harmony export */ });\nfunction applySecurity(req) {\n    const auth = req.headers.get(\"authorization\") || \"\";\n    const required = `Bearer ${process.env.API_KEY}`;\n    if (!process.env.API_KEY) {\n        console.warn(\"[security] API_KEY not set; skipping auth check.\");\n        return;\n    }\n    if (auth !== required) {\n        throw new Error(\"Unauthorized\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9taWRkbGV3YXJlcy9zZWN1cml0eS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR08sU0FBU0EsY0FBY0MsR0FBMEI7SUFDdEQsTUFBTUMsT0FBT0QsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CO0lBQ2pELE1BQU1DLFdBQVcsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDRixRQUFRQyxHQUFHLENBQUNDLE9BQU8sRUFBRTtRQUN4QkMsUUFBUUMsSUFBSSxDQUFDO1FBQ2I7SUFDRjtJQUNBLElBQUlSLFNBQVNHLFVBQVU7UUFDckIsTUFBTSxJQUFJTSxNQUFNO0lBQ2xCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnV0aHNwb3R0ZXItZGFzaC8uL3NyYy9hcHAvYXBpL21pZGRsZXdhcmVzL3NlY3VyaXR5LnRzPzdkMDciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVNlY3VyaXR5KHJlcTogUmVxdWVzdCB8IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgYXV0aCA9IHJlcS5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIikgfHwgXCJcIjtcclxuICBjb25zdCByZXF1aXJlZCA9IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5BUElfS0VZfWA7XHJcbiAgaWYgKCFwcm9jZXNzLmVudi5BUElfS0VZKSB7XHJcbiAgICBjb25zb2xlLndhcm4oXCJbc2VjdXJpdHldIEFQSV9LRVkgbm90IHNldDsgc2tpcHBpbmcgYXV0aCBjaGVjay5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChhdXRoICE9PSByZXF1aXJlZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiYXBwbHlTZWN1cml0eSIsInJlcSIsImF1dGgiLCJoZWFkZXJzIiwiZ2V0IiwicmVxdWlyZWQiLCJwcm9jZXNzIiwiZW52IiwiQVBJX0tFWSIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/middlewares/security.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/middlewares/validation.ts":
/*!***********************************************!*\
  !*** ./src/app/api/middlewares/validation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateChatInput: () => (/* binding */ validateChatInput)\n/* harmony export */ });\nfunction validateChatInput(body) {\n    if (!body || typeof body !== \"object\") {\n        throw new Error(\"Invalid request body\");\n    }\n    const b = body;\n    if (typeof b.message !== \"string\" || b.message.trim().length === 0) {\n        throw new Error(\"Field 'message' is required\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9taWRkbGV3YXJlcy92YWxpZGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxTQUFTQSxrQkFBa0JDLElBQWE7SUFDN0MsSUFBSSxDQUFDQSxRQUFRLE9BQU9BLFNBQVMsVUFBVTtRQUNyQyxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxJQUFJRjtJQUNWLElBQUksT0FBT0UsRUFBRUMsT0FBTyxLQUFLLFlBQVlELEVBQUVDLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNsRSxNQUFNLElBQUlKLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RydXRoc3BvdHRlci1kYXNoLy4vc3JjL2FwcC9hcGkvbWlkZGxld2FyZXMvdmFsaWRhdGlvbi50cz8xYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ2hhdFJlcXVlc3QgfSBmcm9tIFwiLi4vbW9kZWxzL2NoYXQudHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNoYXRJbnB1dChib2R5OiB1bmtub3duKTogYXNzZXJ0cyBib2R5IGlzIENoYXRSZXF1ZXN0IHtcclxuICBpZiAoIWJvZHkgfHwgdHlwZW9mIGJvZHkgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVxdWVzdCBib2R5XCIpO1xyXG4gIH1cclxuICBjb25zdCBiID0gYm9keSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcclxuICBpZiAodHlwZW9mIGIubWVzc2FnZSAhPT0gXCJzdHJpbmdcIiB8fCBiLm1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmllbGQgJ21lc3NhZ2UnIGlzIHJlcXVpcmVkXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidmFsaWRhdGVDaGF0SW5wdXQiLCJib2R5IiwiRXJyb3IiLCJiIiwibWVzc2FnZSIsInRyaW0iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/middlewares/validation.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/models/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/api/models/chat.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleChatRequest: () => (/* binding */ handleChatRequest)\n/* harmony export */ });\n/* harmony import */ var _config_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/supabase */ \"(rsc)/./src/app/api/config/supabase.ts\");\n\nasync function handleChatRequest(input) {\n    let sessionId = input.session_id;\n    // Create a new session if none provided\n    if (!sessionId) {\n        const { data: sessionData, error: sessionError } = await _config_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"chat_sessions\").insert([\n            {\n                title: `Chat ${new Date().toLocaleString()}`\n            }\n        ]).select(\"id\").single();\n        if (sessionError) {\n            console.error(\"Session creation error:\", sessionError);\n            throw new Error(sessionError.message);\n        }\n        sessionId = sessionData.id;\n    }\n    // Insert user message\n    const { data: userMessage, error: userError } = await _config_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"chat_messages\").insert([\n        {\n            content: input.message,\n            role: \"user\",\n            session_id: sessionId\n        }\n    ]).select(\"*\").single();\n    if (userError) {\n        console.error(\"User message error:\", userError);\n        throw new Error(userError.message);\n    }\n    // Generate bot response\n    const botResponse = `Echo: ${input.message}`;\n    // Insert bot message\n    const { data: botMessage, error: botError } = await _config_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"chat_messages\").insert([\n        {\n            content: botResponse,\n            role: \"assistant\",\n            session_id: sessionId\n        }\n    ]).select(\"*\").single();\n    if (botError) {\n        console.error(\"Bot message error:\", botError);\n        throw new Error(botError.message);\n    }\n    return {\n        reply: botResponse,\n        saved: true,\n        id: botMessage?.id,\n        session_id: sessionId\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tb2RlbHMvY2hhdC5zZXJ2aWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBUW5DLGVBQWVDLGtCQUFrQkMsS0FBMEI7SUFDaEUsSUFBSUMsWUFBWUQsTUFBTUUsVUFBVTtJQUVoQyx3Q0FBd0M7SUFDeEMsSUFBSSxDQUFDRCxXQUFXO1FBQ2QsTUFBTSxFQUFFRSxNQUFNQyxXQUFXLEVBQUVDLE9BQU9DLFlBQVksRUFBRSxHQUFHLE1BQU1SLHdEQUFRQSxDQUM5RFMsSUFBSSxDQUFDLGlCQUNMQyxNQUFNLENBQUM7WUFBQztnQkFDUEMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJQyxPQUFPQyxjQUFjLEdBQUcsQ0FBQztZQUM5QztTQUFFLEVBQ0RDLE1BQU0sQ0FBQyxNQUNQQyxNQUFNO1FBRVQsSUFBSVAsY0FBYztZQUNoQlEsUUFBUVQsS0FBSyxDQUFDLDJCQUEyQkM7WUFDekMsTUFBTSxJQUFJUyxNQUFNVCxhQUFhVSxPQUFPO1FBQ3RDO1FBRUFmLFlBQVlHLFlBQVlhLEVBQUU7SUFDNUI7SUFFQSxzQkFBc0I7SUFDdEIsTUFBTSxFQUFFZCxNQUFNZSxXQUFXLEVBQUViLE9BQU9jLFNBQVMsRUFBRSxHQUFHLE1BQU1yQix3REFBUUEsQ0FDM0RTLElBQUksQ0FBQyxpQkFDTEMsTUFBTSxDQUFDO1FBQUM7WUFDUFksU0FBU3BCLE1BQU1nQixPQUFPO1lBQ3RCSyxNQUFNO1lBQ05uQixZQUFZRDtRQUNkO0tBQUUsRUFDRFcsTUFBTSxDQUFDLEtBQ1BDLE1BQU07SUFFVCxJQUFJTSxXQUFXO1FBQ2JMLFFBQVFULEtBQUssQ0FBQyx1QkFBdUJjO1FBQ3JDLE1BQU0sSUFBSUosTUFBTUksVUFBVUgsT0FBTztJQUNuQztJQUVBLHdCQUF3QjtJQUN4QixNQUFNTSxjQUFjLENBQUMsTUFBTSxFQUFFdEIsTUFBTWdCLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLHFCQUFxQjtJQUNyQixNQUFNLEVBQUViLE1BQU1vQixVQUFVLEVBQUVsQixPQUFPbUIsUUFBUSxFQUFFLEdBQUcsTUFBTTFCLHdEQUFRQSxDQUN6RFMsSUFBSSxDQUFDLGlCQUNMQyxNQUFNLENBQUM7UUFBQztZQUNQWSxTQUFTRTtZQUNURCxNQUFNO1lBQ05uQixZQUFZRDtRQUNkO0tBQUUsRUFDRFcsTUFBTSxDQUFDLEtBQ1BDLE1BQU07SUFFVCxJQUFJVyxVQUFVO1FBQ1pWLFFBQVFULEtBQUssQ0FBQyxzQkFBc0JtQjtRQUNwQyxNQUFNLElBQUlULE1BQU1TLFNBQVNSLE9BQU87SUFDbEM7SUFFQSxPQUFPO1FBQ0xTLE9BQU9IO1FBQ1BJLE9BQU87UUFDUFQsSUFBSU0sWUFBWU47UUFDaEJmLFlBQVlEO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RydXRoc3BvdHRlci1kYXNoLy4vc3JjL2FwcC9hcGkvbW9kZWxzL2NoYXQuc2VydmljZS50cz9hZjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vY29uZmlnL3N1cGFiYXNlXCI7XHJcbmltcG9ydCB0eXBlIHsgQ2hhdFJlcXVlc3QsIENoYXRSZXNwb25zZSB9IGZyb20gXCIuL2NoYXQudHlwZXNcIjtcclxuXHJcbi8vIEVuaGFuY2VkIHR5cGVzIHRvIGluY2x1ZGUgc2Vzc2lvbiBzdXBwb3J0XHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5oYW5jZWRDaGF0UmVxdWVzdCBleHRlbmRzIENoYXRSZXF1ZXN0IHtcclxuICBzZXNzaW9uX2lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hhdFJlcXVlc3QoaW5wdXQ6IEVuaGFuY2VkQ2hhdFJlcXVlc3QpOiBQcm9taXNlPENoYXRSZXNwb25zZT4ge1xyXG4gIGxldCBzZXNzaW9uSWQgPSBpbnB1dC5zZXNzaW9uX2lkO1xyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgc2Vzc2lvbiBpZiBub25lIHByb3ZpZGVkXHJcbiAgaWYgKCFzZXNzaW9uSWQpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbkRhdGEsIGVycm9yOiBzZXNzaW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwiY2hhdF9zZXNzaW9uc1wiKVxyXG4gICAgICAuaW5zZXJ0KFt7IFxyXG4gICAgICAgIHRpdGxlOiBgQ2hhdCAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1gIFxyXG4gICAgICB9XSlcclxuICAgICAgLnNlbGVjdChcImlkXCIpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoc2Vzc2lvbkVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Nlc3Npb24gY3JlYXRpb24gZXJyb3I6Jywgc2Vzc2lvbkVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKHNlc3Npb25FcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2Vzc2lvbklkID0gc2Vzc2lvbkRhdGEuaWQ7XHJcbiAgfVxyXG5cclxuICAvLyBJbnNlcnQgdXNlciBtZXNzYWdlXHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyTWVzc2FnZSwgZXJyb3I6IHVzZXJFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKFwiY2hhdF9tZXNzYWdlc1wiKVxyXG4gICAgLmluc2VydChbeyBcclxuICAgICAgY29udGVudDogaW5wdXQubWVzc2FnZSxcclxuICAgICAgcm9sZTogJ3VzZXInLFxyXG4gICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWRcclxuICAgIH1dKVxyXG4gICAgLnNlbGVjdChcIipcIilcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgaWYgKHVzZXJFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVXNlciBtZXNzYWdlIGVycm9yOicsIHVzZXJFcnJvcik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IodXNlckVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2VuZXJhdGUgYm90IHJlc3BvbnNlXHJcbiAgY29uc3QgYm90UmVzcG9uc2UgPSBgRWNobzogJHtpbnB1dC5tZXNzYWdlfWA7XHJcblxyXG4gIC8vIEluc2VydCBib3QgbWVzc2FnZVxyXG4gIGNvbnN0IHsgZGF0YTogYm90TWVzc2FnZSwgZXJyb3I6IGJvdEVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJjaGF0X21lc3NhZ2VzXCIpXHJcbiAgICAuaW5zZXJ0KFt7IFxyXG4gICAgICBjb250ZW50OiBib3RSZXNwb25zZSxcclxuICAgICAgcm9sZTogJ2Fzc2lzdGFudCcsXHJcbiAgICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZFxyXG4gICAgfV0pXHJcbiAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgLnNpbmdsZSgpO1xyXG5cclxuICBpZiAoYm90RXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0JvdCBtZXNzYWdlIGVycm9yOicsIGJvdEVycm9yKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihib3RFcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXBseTogYm90UmVzcG9uc2UsXHJcbiAgICBzYXZlZDogdHJ1ZSxcclxuICAgIGlkOiBib3RNZXNzYWdlPy5pZCxcclxuICAgIHNlc3Npb25faWQ6IHNlc3Npb25JZFxyXG4gIH07XHJcbn0iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJoYW5kbGVDaGF0UmVxdWVzdCIsImlucHV0Iiwic2Vzc2lvbklkIiwic2Vzc2lvbl9pZCIsImRhdGEiLCJzZXNzaW9uRGF0YSIsImVycm9yIiwic2Vzc2lvbkVycm9yIiwiZnJvbSIsImluc2VydCIsInRpdGxlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic2VsZWN0Iiwic2luZ2xlIiwiY29uc29sZSIsIkVycm9yIiwibWVzc2FnZSIsImlkIiwidXNlck1lc3NhZ2UiLCJ1c2VyRXJyb3IiLCJjb250ZW50Iiwicm9sZSIsImJvdFJlc3BvbnNlIiwiYm90TWVzc2FnZSIsImJvdEVycm9yIiwicmVwbHkiLCJzYXZlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/models/chat.service.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@supabase","vendor-chunks/next","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cjadha%5COneDrive%5CDesktop%5Ctruthspotter-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();