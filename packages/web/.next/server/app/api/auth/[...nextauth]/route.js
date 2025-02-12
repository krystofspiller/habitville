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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_krystofspiller_src_habitville_packages_web_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/krystofspiller/src/habitville/packages/web/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_krystofspiller_src_habitville_packages_web_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZrcnlzdG9mc3BpbGxlciUyRnNyYyUyRmhhYml0dmlsbGUlMkZwYWNrYWdlcyUyRndlYiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZrcnlzdG9mc3BpbGxlciUyRnNyYyUyRmhhYml0dmlsbGUlMkZwYWNrYWdlcyUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdHZpbGxlLz82NTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9rcnlzdG9mc3BpbGxlci9zcmMvaGFiaXR2aWxsZS9wYWNrYWdlcy93ZWIvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9rcnlzdG9mc3BpbGxlci9zcmMvaGFiaXR2aWxsZS9wYWNrYWdlcy93ZWIvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(rsc)/./src/server/auth.ts\");\n\n\n// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFFVztBQUUzQyxtRUFBbUU7QUFDbkUsTUFBTUUsVUFBVUYsZ0RBQVFBLENBQUNDLHFEQUFXQTtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXR2aWxsZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5cbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnfi9zZXJ2ZXIvYXV0aCdcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/../../node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/discord */ \"(rsc)/../../node_modules/next-auth/providers/discord.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/../../node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/server/db */ \"(rsc)/./src/server/db.ts\");\n\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_5__.db),\n    providers: [\n        (0,next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.DISCORD_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_ID,\n            clientSecret: _env__WEBPACK_IMPORTED_MODULE_4__.env.GITHUB_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlEO0FBS3ZDO0FBQ3VDO0FBQ0Y7QUFFNUI7QUFDSztBQXVCaEM7Ozs7Q0FJQyxHQUNNLE1BQU1NLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RDLFNBQVMsQ0FBQyxFQUFFQSxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFNO2dCQUMvQixHQUFHRCxPQUFPO2dCQUNWQyxNQUFNO29CQUNKLEdBQUdELFFBQVFDLElBQUk7b0JBQ2ZDLElBQUlELEtBQUtDLEVBQUU7Z0JBQ2I7WUFDRjtJQUNGO0lBQ0FDLFNBQVNYLHdFQUFhQSxDQUFDSywwQ0FBRUE7SUFDekJPLFdBQVc7UUFDVFYsdUVBQWVBLENBQUM7WUFDZFcsVUFBVVQscUNBQUdBLENBQUNVLGlCQUFpQjtZQUMvQkMsY0FBY1gscUNBQUdBLENBQUNZLHFCQUFxQjtRQUN6QztRQUNBYixzRUFBY0EsQ0FBQztZQUNiVSxVQUFVVCxxQ0FBR0EsQ0FBQ2EsZ0JBQWdCO1lBQzlCRixjQUFjWCxxQ0FBR0EsQ0FBQ2Msb0JBQW9CO1FBQ3hDO0tBVUQ7QUFDSCxFQUFDO0FBRUQ7Ozs7Q0FJQyxHQUNNLE1BQU1DLHVCQUF1QixJQUFNbEIsMkRBQWdCQSxDQUFDSyxhQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXR2aWxsZS8uL3NyYy9zZXJ2ZXIvYXV0aC50cz8yMmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJ1xuaW1wb3J0IHtcbiAgZ2V0U2VydmVyU2Vzc2lvbixcbiAgdHlwZSBEZWZhdWx0U2Vzc2lvbixcbiAgdHlwZSBOZXh0QXV0aE9wdGlvbnMsXG59IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBEaXNjb3JkUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkJ1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJ1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tICd+L2VudidcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi9zZXJ2ZXIvZGInXG5cbi8qKlxuICogTW9kdWxlIGF1Z21lbnRhdGlvbiBmb3IgYG5leHQtYXV0aGAgdHlwZXMuIEFsbG93cyB1cyB0byBhZGQgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIGBzZXNzaW9uYFxuICogb2JqZWN0IGFuZCBrZWVwIHR5cGUgc2FmZXR5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2dldHRpbmctc3RhcnRlZC90eXBlc2NyaXB0I21vZHVsZS1hdWdtZW50YXRpb25cbiAqL1xuZGVjbGFyZSBtb2R1bGUgJ25leHQtYXV0aCcge1xuICBpbnRlcmZhY2UgU2Vzc2lvbiBleHRlbmRzIERlZmF1bHRTZXNzaW9uIHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogc3RyaW5nXG4gICAgICAvLyAuLi5vdGhlciBwcm9wZXJ0aWVzXG4gICAgICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgICB9ICYgRGVmYXVsdFNlc3Npb25bJ3VzZXInXVxuICB9XG5cbiAgLy8gaW50ZXJmYWNlIFVzZXIge1xuICAvLyAgIC8vIC4uLm90aGVyIHByb3BlcnRpZXNcbiAgLy8gICAvLyByb2xlOiBVc2VyUm9sZTtcbiAgLy8gfVxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIE5leHRBdXRoLmpzIHVzZWQgdG8gY29uZmlndXJlIGFkYXB0ZXJzLCBwcm92aWRlcnMsIGNhbGxiYWNrcywgZXRjLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuICovXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdXNlciB9KSA9PiAoe1xuICAgICAgLi4uc2Vzc2lvbixcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIpLFxuICBwcm92aWRlcnM6IFtcbiAgICBEaXNjb3JkUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IGVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IGVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvKipcbiAgICAgKiAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZS5cbiAgICAgKlxuICAgICAqIE1vc3Qgb3RoZXIgcHJvdmlkZXJzIHJlcXVpcmUgYSBiaXQgbW9yZSB3b3JrIHRoYW4gdGhlIERpc2NvcmQgcHJvdmlkZXIuIEZvciBleGFtcGxlLCB0aGVcbiAgICAgKiBHaXRIdWIgcHJvdmlkZXIgcmVxdWlyZXMgeW91IHRvIGFkZCB0aGUgYHJlZnJlc2hfdG9rZW5fZXhwaXJlc19pbmAgZmllbGQgdG8gdGhlIEFjY291bnRcbiAgICAgKiBtb2RlbC4gUmVmZXIgdG8gdGhlIE5leHRBdXRoLmpzIGRvY3MgZm9yIHRoZSBwcm92aWRlciB5b3Ugd2FudCB0byB1c2UuIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9wcm92aWRlcnMvZ2l0aHViXG4gICAgICovXG4gIF0sXG59XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYGdldFNlcnZlclNlc3Npb25gIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBgYXV0aE9wdGlvbnNgIGluIGV2ZXJ5IGZpbGUuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9uZXh0anNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlckF1dGhTZXNzaW9uID0gKCkgPT4gZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkRpc2NvcmRQcm92aWRlciIsIkdpdEh1YlByb3ZpZGVyIiwiZW52IiwiZGIiLCJhdXRoT3B0aW9ucyIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJESVNDT1JEX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9DTElFTlRfSUQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImdldFNlcnZlckF1dGhTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/server/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env */ \"(rsc)/./src/env.js\");\n\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = db;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkM7QUFFbEI7QUFFM0IsTUFBTUUsa0JBQWtCQztBQUlqQixNQUFNQyxLQUNYRixnQkFBZ0JHLE1BQU0sSUFDdEIsSUFBSUwsd0RBQVlBLENBQUM7SUFDZk0sS0FDRUwscUNBQUdBLENBQUNNLFFBQVEsS0FBSyxnQkFBZ0I7UUFBQztRQUFTO1FBQVM7S0FBTyxHQUFHO1FBQUM7S0FBUTtBQUMzRSxHQUFFO0FBRUosSUFBSU4scUNBQUdBLENBQUNNLFFBQVEsS0FBSyxjQUFjTCxnQkFBZ0JHLE1BQU0sR0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdHZpbGxlLy4vc3JjL3NlcnZlci9kYi50cz9hYTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5pbXBvcnQgeyBlbnYgfSBmcm9tICd+L2VudidcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGRiID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBbJ3F1ZXJ5JywgJ2Vycm9yJywgJ3dhcm4nXSA6IFsnZXJyb3InXSxcbiAgfSlcblxuaWYgKGVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gZGJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiLCJsb2ciLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/server/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/env.js":
/*!********************!*\
  !*** ./src/env.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"(rsc)/../../node_modules/@t3-oss/env-nextjs/dist/index.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/zod/lib/index.mjs\");\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url().refine((str)=>!str.includes(\"YOUR_MYSQL_URL_HERE\"), \"You forgot to change the default URL\"),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]).default(\"development\"),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string() : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GITHUB_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        GITHUB_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,\n        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,\n        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,\n        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially\n   * useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,\n    /**\n   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and\n   * `SOME_VAR=''` will throw an error.\n   */ emptyStringAsUndefined: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZW52LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUN2QjtBQUVoQixNQUFNRSxNQUFNRiw2REFBU0EsQ0FBQztJQUMzQjs7O0dBR0MsR0FDREcsUUFBUTtRQUNOQyxjQUFjSCxrQ0FBQ0EsQ0FDWkksTUFBTSxHQUNOQyxHQUFHLEdBQ0hDLE1BQU0sQ0FDTCxDQUFDQyxNQUFRLENBQUNBLElBQUlDLFFBQVEsQ0FBQyx3QkFDdkI7UUFFSkMsVUFBVVQsa0NBQUNBLENBQ1JVLElBQUksQ0FBQztZQUFDO1lBQWU7WUFBUTtTQUFhLEVBQzFDQyxPQUFPLENBQUM7UUFDWEMsaUJBQ0VDLE1BQXlCLEdBQ3JCYixDQUFVLEdBQ1ZBLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdVLFFBQVE7UUFDekJDLGNBQWNmLGtDQUFDQSxDQUFDZ0IsVUFBVSxDQUN4Qix1RUFBdUU7UUFDdkUsa0VBQWtFO1FBQ2xFLENBQUNULE1BQVFNLFFBQVFaLEdBQUcsQ0FBQ2dCLFVBQVUsSUFBSVYsS0FDbkMsc0VBQXNFO1FBQ3RFTSxRQUFRWixHQUFHLENBQUNpQixNQUFNLEdBQUdsQixrQ0FBQ0EsQ0FBQ0ksTUFBTSxLQUFLSixrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHO1FBRWxEYyxtQkFBbUJuQixrQ0FBQ0EsQ0FBQ0ksTUFBTTtRQUMzQmdCLHVCQUF1QnBCLGtDQUFDQSxDQUFDSSxNQUFNO1FBQy9CaUIsa0JBQWtCckIsa0NBQUNBLENBQUNJLE1BQU07UUFDMUJrQixzQkFBc0J0QixrQ0FBQ0EsQ0FBQ0ksTUFBTTtJQUNoQztJQUVBOzs7O0dBSUMsR0FDRG1CLFFBQVE7SUFFUjtJQUVBOzs7R0FHQyxHQUNEQyxZQUFZO1FBQ1ZyQixjQUFjVSxRQUFRWixHQUFHLENBQUNFLFlBQVk7UUFDdENNLFVBbkRKO1FBb0RJRyxpQkFBaUJDLFFBQVFaLEdBQUcsQ0FBQ1csZUFBZTtRQUM1Q0csY0FBY0YsUUFBUVosR0FBRyxDQUFDYyxZQUFZO1FBQ3RDSSxtQkFBbUJOLFFBQVFaLEdBQUcsQ0FBQ2tCLGlCQUFpQjtRQUNoREMsdUJBQXVCUCxRQUFRWixHQUFHLENBQUNtQixxQkFBcUI7UUFDeERDLGtCQUFrQlIsUUFBUVosR0FBRyxDQUFDb0IsZ0JBQWdCO1FBQzlDQyxzQkFBc0JULFFBQVFaLEdBQUcsQ0FBQ3FCLG9CQUFvQjtJQUN4RDtJQUNBOzs7R0FHQyxHQUNERyxnQkFBZ0IsQ0FBQyxDQUFDWixRQUFRWixHQUFHLENBQUN5QixtQkFBbUI7SUFDakQ7OztHQUdDLEdBQ0RDLHdCQUF3QjtBQUMxQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXR2aWxsZS8uL3NyYy9lbnYuanM/MTBiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tICdAdDMtb3NzL2Vudi1uZXh0anMnXG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJ1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6XG4gICAgICAuc3RyaW5nKClcbiAgICAgIC51cmwoKVxuICAgICAgLnJlZmluZShcbiAgICAgICAgKHN0cikgPT4gIXN0ci5pbmNsdWRlcygnWU9VUl9NWVNRTF9VUkxfSEVSRScpLFxuICAgICAgICAnWW91IGZvcmdvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgVVJMJyxcbiAgICAgICksXG4gICAgTk9ERV9FTlY6IHpcbiAgICAgIC5lbnVtKFsnZGV2ZWxvcG1lbnQnLCAndGVzdCcsICdwcm9kdWN0aW9uJ10pXG4gICAgICAuZGVmYXVsdCgnZGV2ZWxvcG1lbnQnKSxcbiAgICBORVhUQVVUSF9TRUNSRVQ6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgICAgID8gei5zdHJpbmcoKVxuICAgICAgICA6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgICBORVhUQVVUSF9VUkw6IHoucHJlcHJvY2VzcyhcbiAgICAgIC8vIFRoaXMgbWFrZXMgVmVyY2VsIGRlcGxveW1lbnRzIG5vdCBmYWlsIGlmIHlvdSBkb24ndCBzZXQgTkVYVEFVVEhfVVJMXG4gICAgICAvLyBTaW5jZSBOZXh0QXV0aC5qcyBhdXRvbWF0aWNhbGx5IHVzZXMgdGhlIFZFUkNFTF9VUkwgaWYgcHJlc2VudC5cbiAgICAgIChzdHIpID0+IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgPz8gc3RyLFxuICAgICAgLy8gVkVSQ0VMX1VSTCBkb2Vzbid0IGluY2x1ZGUgYGh0dHBzYCBzbyBpdCBjYW50IGJlIHZhbGlkYXRlZCBhcyBhIFVSTFxuICAgICAgcHJvY2Vzcy5lbnYuVkVSQ0VMID8gei5zdHJpbmcoKSA6IHouc3RyaW5nKCkudXJsKCksXG4gICAgKSxcbiAgICBESVNDT1JEX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgICBESVNDT1JEX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG4gICAgR0lUSFVCX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgICBHSVRIVUJfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbiAgfSxcblxuICAvKipcbiAgICogU3BlY2lmeSB5b3VyIGNsaWVudC1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlcyBzY2hlbWEgaGVyZS4gVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcFxuICAgKiBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuIFRvIGV4cG9zZSB0aGVtIHRvIHRoZSBjbGllbnQsIHByZWZpeCB0aGVtIHdpdGhcbiAgICogYE5FWFRfUFVCTElDX2AuXG4gICAqL1xuICBjbGllbnQ6IHtcbiAgICAvLyBORVhUX1BVQkxJQ19DTElFTlRWQVI6IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4ndCBkZXN0cnVjdCBgcHJvY2Vzcy5lbnZgIGFzIGEgcmVndWxhciBvYmplY3QgaW4gdGhlIE5leHQuanMgZWRnZSBydW50aW1lcyAoZS5nLlxuICAgKiBtaWRkbGV3YXJlcykgb3IgY2xpZW50LXNpZGUgc28gd2UgbmVlZCB0byBkZXN0cnVjdCBtYW51YWxseS5cbiAgICovXG4gIHJ1bnRpbWVFbnY6IHtcbiAgICBEQVRBQkFTRV9VUkw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gICAgTkVYVEFVVEhfU0VDUkVUOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gICAgTkVYVEFVVEhfVVJMOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgRElTQ09SRF9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgIERJU0NPUkRfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgIEdJVEhVQl9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgR0lUSFVCX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICB9LFxuICAvKipcbiAgICogUnVuIGBidWlsZGAgb3IgYGRldmAgd2l0aCBgU0tJUF9FTlZfVkFMSURBVElPTmAgdG8gc2tpcCBlbnYgdmFsaWRhdGlvbi4gVGhpcyBpcyBlc3BlY2lhbGx5XG4gICAqIHVzZWZ1bCBmb3IgRG9ja2VyIGJ1aWxkcy5cbiAgICovXG4gIHNraXBWYWxpZGF0aW9uOiAhIXByb2Nlc3MuZW52LlNLSVBfRU5WX1ZBTElEQVRJT04sXG4gIC8qKlxuICAgKiBNYWtlcyBpdCBzbyB0aGF0IGVtcHR5IHN0cmluZ3MgYXJlIHRyZWF0ZWQgYXMgdW5kZWZpbmVkLiBgU09NRV9WQVI6IHouc3RyaW5nKClgIGFuZFxuICAgKiBgU09NRV9WQVI9JydgIHdpbGwgdGhyb3cgYW4gZXJyb3IuXG4gICAqL1xuICBlbXB0eVN0cmluZ0FzVW5kZWZpbmVkOiB0cnVlLFxufSlcbiJdLCJuYW1lcyI6WyJjcmVhdGVFbnYiLCJ6IiwiZW52Iiwic2VydmVyIiwiREFUQUJBU0VfVVJMIiwic3RyaW5nIiwidXJsIiwicmVmaW5lIiwic3RyIiwiaW5jbHVkZXMiLCJOT0RFX0VOViIsImVudW0iLCJkZWZhdWx0IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvY2VzcyIsIm9wdGlvbmFsIiwiTkVYVEFVVEhfVVJMIiwicHJlcHJvY2VzcyIsIlZFUkNFTF9VUkwiLCJWRVJDRUwiLCJESVNDT1JEX0NMSUVOVF9JRCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9DTElFTlRfSUQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImNsaWVudCIsInJ1bnRpbWVFbnYiLCJza2lwVmFsaWRhdGlvbiIsIlNLSVBfRU5WX1ZBTElEQVRJT04iLCJlbXB0eVN0cmluZ0FzVW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/env.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/zod","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@t3-oss","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkrystofspiller%2Fsrc%2Fhabitville%2Fpackages%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();