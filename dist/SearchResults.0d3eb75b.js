// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("a726657de35e3fbb");
var ErrorOverlay = require("b901736303baa8c1");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"a726657de35e3fbb":"786KC","b901736303baa8c1":"1dldy"}],"fstGL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bd26c7a80d3eb75b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"v2HEr":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ca4b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ca4b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _similarRestaurnts = require("./SimilarRestaurnts");
var _similarRestaurntsDefault = parcelHelpers.interopDefault(_similarRestaurnts);
var _searchResultResturantCard = require("./SearchResultResturantCard");
var _searchResultResturantCardDefault = parcelHelpers.interopDefault(_searchResultResturantCard);
var _reactShimmerEffects = require("react-shimmer-effects");
var _reactRouterDom = require("react-router-dom");
var _react = require("react");
var _useSearchResult = require("../customHooks/useSearchResult");
var _searchPageSearchBox = require("./SearchPageSearchBox");
var _searchPageSearchBoxDefault = parcelHelpers.interopDefault(_searchPageSearchBox);
var _s = $RefreshSig$();
const SearchResults = ()=>{
    _s();
    const location = (0, _reactRouterDom.useLocation)();
    const item = location?.state?.item;
    const [searchText, setSearchText] = (0, _react.useState)(item?.text);
    const searchResturantResult = (0, _useSearchResult.useSearchResult)(item);
    if (searchText === "") return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Navigate), {
        to: "/searchpage"
    }, void 0, false, {
        fileName: "src/Pages/SearchResults.jsx",
        lineNumber: 13,
        columnNumber: 33
    }, undefined);
    else return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Resturant-Search-Page min-h-[700px] max-h-fit flex justify-center w-full",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "Resturant-Search-Page-Body w-[700px] mt-[50px] ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchPageSearchBoxDefault.default), {
                    searchText: searchText,
                    setSearchText: setSearchText
                }, void 0, false, {
                    fileName: "src/Pages/SearchResults.jsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "Searched-Resturant-Dishes bg-gray-50 ",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                        className: " searched-Dish flex justify-evenly m-2 flex-wrap ",
                        children: searchResturantResult?.DISH ? searchResturantResult.DISH.cards.map((dish, index)=>{
                            if (index > 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchResultResturantCardDefault.default), {
                                    Dish: dish
                                }, void 0, false, {
                                    fileName: "src/Pages/SearchResults.jsx",
                                    lineNumber: 21,
                                    columnNumber: 23
                                }, undefined)
                            }, index, false, {
                                fileName: "src/Pages/SearchResults.jsx",
                                lineNumber: 20,
                                columnNumber: 35
                            }, undefined);
                        }) : searchResturantResult?.RESTAURANT ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchResultResturantCardDefault.default), {
                                        Restaurant: searchResturantResult?.RESTAURANT?.cards[0]
                                    }, void 0, false, {
                                        fileName: "src/Pages/SearchResults.jsx",
                                        lineNumber: 25,
                                        columnNumber: 22
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/Pages/SearchResults.jsx",
                                    lineNumber: 24,
                                    columnNumber: 19
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                    className: "absolute top-[450px] text-[20px] font-[700] text-[#3e4152] left-[395px]",
                                    children: [
                                        "More Results Like This",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Pages/SearchResults.jsx",
                                    lineNumber: 27,
                                    columnNumber: 19
                                }, undefined),
                                searchResturantResult?.RESTAURANT?.cards[1]?.card?.card?.restaurants.map((restaurant, index)=>{
                                    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _similarRestaurntsDefault.default), {
                                            Restaurant: restaurant
                                        }, void 0, false, {
                                            fileName: "src/Pages/SearchResults.jsx",
                                            lineNumber: 32,
                                            columnNumber: 27
                                        }, undefined)
                                    }, index, false, {
                                        fileName: "src/Pages/SearchResults.jsx",
                                        lineNumber: 31,
                                        columnNumber: 22
                                    }, undefined);
                                })
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "p-[10px] flex flex-wrap justify-between absolute w-[700px] items-center top-[200px]",
                            children: Array(4).fill(1).map((val, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                    className: "w-[300px] h-[250px] mb-4",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactShimmerEffects.ShimmerPostItem), {
                                        card: true,
                                        title: true,
                                        cta: true,
                                        imageType: "thumbnail",
                                        imageWidth: 40,
                                        imageHeight: 40,
                                        contentCenter: true
                                    }, index, false, {
                                        fileName: "src/Pages/SearchResults.jsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/Pages/SearchResults.jsx",
                                    lineNumber: 36,
                                    columnNumber: 57
                                }, undefined))
                        }, void 0, false, {
                            fileName: "src/Pages/SearchResults.jsx",
                            lineNumber: 35,
                            columnNumber: 23
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/Pages/SearchResults.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/Pages/SearchResults.jsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/Pages/SearchResults.jsx",
            lineNumber: 14,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/Pages/SearchResults.jsx",
        lineNumber: 13,
        columnNumber: 75
    }, undefined);
};
_s(SearchResults, "V8BCMRgb+vyaveSZVrmxHQmI0G0=", false, function() {
    return [
        (0, _reactRouterDom.useLocation),
        (0, _useSearchResult.useSearchResult)
    ];
});
_c = SearchResults;
exports.default = SearchResults;
var _c;
$RefreshReg$(_c, "SearchResults");

  $parcel$ReactRefreshHelpers$ca4b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./SimilarRestaurnts":"5sGqh","./SearchResultResturantCard":"fBD0X","react-shimmer-effects":"5ORgO","react-router-dom":"9xmpe","react":"21dqq","../customHooks/useSearchResult":"1fReB","./SearchPageSearchBox":"lhdeY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"5sGqh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ac75 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ac75.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _constants = require("../Utilities/constants");
const SimilarRestaurnts = ({ Restaurant  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
        to: "/restaurant-page",
        state: {
            id: Restaurant?.info?.id
        },
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "Search-Result-Restaurant-Card border-[1px] w-[300px] h-[150px] flex justify-around items-center p-2 my-2 rounded-md bg-white overflow-hidden",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "Search-Result-Restaurant",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Search-Result-Restaurant-Image w-[100px] ",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "h-[80px] w-[80px] bg-contain bg-center bg-no-repeat rounded-md",
                                src: (0, _constants.IMAGE_URL) + Restaurant?.info?.cloudinaryImageId
                            }, void 0, false, {
                                fileName: "src/Pages/SimilarRestaurnts.jsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: " bg-white border-opacity-50 border-[1px] text-[9px] font-[900] w-fit py-[2px] px-[4px] text-[#ed5e0e] rounded-md shadow-md relative left-[14px] flex justify-center items-center bottom-[8px] h-fit p-0.5",
                            children: Restaurant?.info?.aggregatedDiscountInfo.header
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Pages/SimilarRestaurnts.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "Search-Result-Restaurant-info w-[180px]",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "text-[15px] font-[600] text-[#3e4152]",
                            children: Restaurant?.info?.name
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "text-[12px]",
                            children: Restaurant?.info?.avgRating >= 4 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "Rating text-white pr-1 pl-1 py-[3px] text-[10px] px-[2px] p-0.5 decoration-slate-50 bg-green-600",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa-regular fa-star fa-small"
                                    }, void 0, false, {
                                        fileName: "src/Pages/SimilarRestaurnts.jsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, undefined),
                                    " ",
                                    Restaurant?.info?.avgRating
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/SimilarRestaurnts.jsx",
                                lineNumber: 24,
                                columnNumber: 49
                            }, undefined) : Restaurant?.info?.avgRating > 2.4 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "Rating py-[3px] text-white pr-1 pl-1 p-0.5 text-[10px] px-[2px] bg-[#db7c38]",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa-regular fa-star fa-small"
                                    }, void 0, false, {
                                        fileName: "src/Pages/SimilarRestaurnts.jsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, undefined),
                                    " ",
                                    Restaurant?.info?.avgRating
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/SimilarRestaurnts.jsx",
                                lineNumber: 27,
                                columnNumber: 61
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "Rating py-[3px] text-slate-400 text-[10px] px-[2px] ",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                        className: "fa-regular fa-star fa-small"
                                    }, void 0, false, {
                                        fileName: "src/Pages/SimilarRestaurnts.jsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, undefined),
                                    " ",
                                    Restaurant?.info?.avgRating
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/SimilarRestaurnts.jsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, undefined),
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: " text-[12px] font-[500] text-[#686b78]",
                            children: [
                                Restaurant?.info?.sla?.deliveryTime,
                                " Min",
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            children: Restaurant?.info?.costForTwoMessage
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: Restaurant?.info?.cuisines.map((cuisine, index)=>{
                                return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-[12px] text-[#686b78] font-[100]",
                                    children: [
                                        cuisine,
                                        ","
                                    ]
                                }, index, true, {
                                    fileName: "src/Pages/SimilarRestaurnts.jsx",
                                    lineNumber: 41,
                                    columnNumber: 20
                                }, undefined);
                            })
                        }, void 0, false, {
                            fileName: "src/Pages/SimilarRestaurnts.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/Pages/SimilarRestaurnts.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/Pages/SimilarRestaurnts.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/Pages/SimilarRestaurnts.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, undefined);
};
_c = SimilarRestaurnts;
exports.default = SimilarRestaurnts;
var _c;
$RefreshReg$(_c, "SimilarRestaurnts");

  $parcel$ReactRefreshHelpers$ac75.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","../Utilities/constants":"5t9MR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"fBD0X":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$425e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$425e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _resultDish = require("./ResultDish");
var _resultDishDefault = parcelHelpers.interopDefault(_resultDish);
var _resultRestaurant = require("./ResultRestaurant");
var _resultRestaurantDefault = parcelHelpers.interopDefault(_resultRestaurant);
const SearchResultResturantCard = ({ Dish , Restaurant  })=>{
    if (Dish) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
        state: {
            id: Dish?.card?.card?.restaurant?.info?.id
        },
        to: "/restaurant-page",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _resultDishDefault.default), {
            Dish: Dish?.card?.card
        }, void 0, false, {
            fileName: "src/Pages/SearchResultResturantCard.jsx",
            lineNumber: 12,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/Pages/SearchResultResturantCard.jsx",
        lineNumber: 9,
        columnNumber: 20
    }, undefined);
    if (Restaurant) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
        state: {
            id: Restaurant?.card?.card?.info?.id
        },
        to: "/restaurant-page",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _resultRestaurantDefault.default), {
            Restaurant: Restaurant?.card?.card?.info
        }, void 0, false, {
            fileName: "src/Pages/SearchResultResturantCard.jsx",
            lineNumber: 17,
            columnNumber: 9
        }, undefined)
    }, void 0, false, {
        fileName: "src/Pages/SearchResultResturantCard.jsx",
        lineNumber: 14,
        columnNumber: 26
    }, undefined);
    else return null;
};
_c = SearchResultResturantCard;
exports.default = SearchResultResturantCard;
var _c;
$RefreshReg$(_c, "SearchResultResturantCard");

  $parcel$ReactRefreshHelpers$425e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","./ResultDish":"d1bhm","./ResultRestaurant":"ajT6S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"d1bhm":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6854 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6854.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _constants = require("../Utilities/constants");
var _react = require("react");
var _reactRedux = require("react-redux");
var _cartSlice = require("../Utilities/cartSlice");
var _s = $RefreshSig$();
const ResultDish = ({ Dish  })=>{
    _s();
    const [isLoaded, setIsLoaded] = (0, _react.useState)(false);
    const dispatch = (0, _reactRedux.useDispatch)();
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Search-Result-Dish-Card bg-white w-[300px] p-2 m-4 rounded-lg h-[200px] flex hover:cursor-pointer justify-evenly ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search-Result-Dish-Info overflow-hidden w-[200px] ",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[11px] font-[800] text-[#686b78] ",
                        children: [
                            "By ",
                            Dish?.restaurant?.info?.name
                        ]
                    }, void 0, true, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                children: [
                                    " ",
                                    Dish?.restaurant?.info?.avgRating >= 4 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "Rating text-white pr-1 pl-1 text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50 bg-green-600",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                className: "fa-regular fa-star fa-small"
                                            }, void 0, false, {
                                                fileName: "src/Pages/ResultDish.jsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, undefined),
                                            " ",
                                            Dish?.restaurant?.info?.avgRating
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Pages/ResultDish.jsx",
                                        lineNumber: 18,
                                        columnNumber: 55
                                    }, undefined) : Dish?.restaurant?.info?.avgRating > 2.8 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "Rating text-white pr-1 pl-1 p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                className: "fa-regular fa-star fa-small"
                                            }, void 0, false, {
                                                fileName: "src/Pages/ResultDish.jsx",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, undefined),
                                            " ",
                                            Dish?.restaurant?.info?.avgRating
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Pages/ResultDish.jsx",
                                        lineNumber: 21,
                                        columnNumber: 67
                                    }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "Rating text-slate-400 text-[10px] py-[3px] px-[2px] ",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                className: "fa-regular fa-star fa-small"
                                            }, void 0, false, {
                                                fileName: "src/Pages/ResultDish.jsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, undefined),
                                            " ",
                                            Dish?.restaurant?.info?.avgRating
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Pages/ResultDish.jsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/ResultDish.jsx",
                                lineNumber: 16,
                                columnNumber: 11
                            }, undefined),
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-[9px]",
                                children: [
                                    Dish?.restaurant?.info?.sla?.deliveryTime,
                                    " Min"
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/ResultDish.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {}, void 0, false, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[14px] font-[700]",
                        children: Dish?.info?.name
                    }, void 0, false, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[12px] font-[500]",
                        children: [
                            "₹ ",
                            Dish?.info?.price / 100
                        ]
                    }, void 0, true, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[10px] py-[3px] px-[2px]",
                        children: Dish?.info?.description
                    }, void 0, false, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Pages/ResultDish.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search-Result-Dish-Add-Cart relative top-8",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "Search-Result-Dish",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                onLoad: ()=>setIsLoaded(true),
                                className: " h-[0px] w-[0px]",
                                src: (0, _constants.IMAGE_URL) + Dish?.info?.imageId
                            }, void 0, false, {
                                fileName: "src/Pages/ResultDish.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, undefined),
                            isLoaded ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]",
                                src: (0, _constants.IMAGE_URL) + Dish?.info?.imageId
                            }, void 0, false, {
                                fileName: "src/Pages/ResultDish.jsx",
                                lineNumber: 43,
                                columnNumber: 23
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: " h-[80px] w-[80px] rounded-md bg-slate-200",
                                src: (0, _constants.IMAGE_URL) + Dish?.info?.imageId
                            }, void 0, false, {
                                fileName: "src/Pages/ResultDish.jsx",
                                lineNumber: 43,
                                columnNumber: 152
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: " bg-white border-opacity-50 border-[1px] border-slate-500 px-4 text-green-600 shadow-md relative left-[9px] bottom-[15px]",
                        onClick: (e)=>{
                            e.preventDefault();
                            dispatch((0, _cartSlice.addItem)({
                                dish: Dish?.info,
                                restaurant: Dish?.restaurant?.info,
                                qty: 1
                            }));
                        },
                        children: "Add"
                    }, void 0, false, {
                        fileName: "src/Pages/ResultDish.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Pages/ResultDish.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Pages/ResultDish.jsx",
        lineNumber: 10,
        columnNumber: 10
    }, undefined);
};
_s(ResultDish, "M/HMtkLavUfSTVTLFmznY/FjuOI=", false, function() {
    return [
        (0, _reactRedux.useDispatch)
    ];
});
_c = ResultDish;
exports.default = ResultDish;
var _c;
$RefreshReg$(_c, "ResultDish");

  $parcel$ReactRefreshHelpers$6854.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","../Utilities/constants":"5t9MR","react":"21dqq","react-redux":"bdVon","../Utilities/cartSlice":"9wB3I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"ajT6S":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1300 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1300.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _constants = require("../Utilities/constants");
const ResultRestaurant = ({ Restaurant  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Search-Result-Restaurant? pl-2 rounded-md my-9 mb-24 flex flex-wrap justify-start items-center relative right-[115px] p-1 bg-white w-[385px] h-[150px] border-[1px] ",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search-Result-Restaurant?-Image w-[100px]",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "Image bg-no-repeat bg-contain bg-center relative top-[10px] h-[90px] w-[90px] rounded-md",
                        src: (0, _constants.IMAGE_URL) + Restaurant?.cloudinaryImageId
                    }, void 0, false, {
                        fileName: "src/Pages/ResultRestaurant.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: " bg-white border-opacity-50 border-[1px] text-[8px] font-[900] w-7/12 h-fit p-0.5 text-[#ed5e0e] rounded-md shadow-md relative left-[13px] bottom-[5px]",
                        children: Restaurant?.aggregatedDiscountInfo.header
                    }, void 0, false, {
                        fileName: "src/Pages/ResultRestaurant.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Pages/ResultRestaurant.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search-Result-Restaurant?-info flex flex-col overflow-hidden flex-wrap w-[250px] h-[100px] ",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-[15px] font-[700] text-[#3e4152]",
                        children: Restaurant?.name
                    }, void 0, false, {
                        fileName: "src/Pages/ResultRestaurant.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-[12px] font-[300] text-[#686b78]",
                                children: Restaurant?.avgRating >= 4 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "Rating text-white pr-1 pl-1 text-[10px] py-[3px] px-[2px] p-0.5 decoration-slate-50 bg-green-600",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            className: "fa-regular fa-star fa-small"
                                        }, void 0, false, {
                                            fileName: "src/Pages/ResultRestaurant.jsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, undefined),
                                        " ",
                                        Restaurant?.avgRating
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Pages/ResultRestaurant.jsx",
                                    lineNumber: 19,
                                    columnNumber: 43
                                }, undefined) : Restaurant?.avgRating > 2.8 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "Rating text-white pr-1 pl-1 p-0.5 text-[10px] py-[3px] px-[2px] bg-[#db7c38]",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            className: "fa-regular fa-star fa-small"
                                        }, void 0, false, {
                                            fileName: "src/Pages/ResultRestaurant.jsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, undefined),
                                        " ",
                                        Restaurant?.avgRating
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Pages/ResultRestaurant.jsx",
                                    lineNumber: 22,
                                    columnNumber: 55
                                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "Rating text-slate-400 text-[10px] py-[3px] px-[2px] ",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                            className: "fa-regular fa-star fa-small"
                                        }, void 0, false, {
                                            fileName: "src/Pages/ResultRestaurant.jsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, undefined),
                                        " ",
                                        Restaurant?.avgRating
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Pages/ResultRestaurant.jsx",
                                    lineNumber: 25,
                                    columnNumber: 25
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/Pages/ResultRestaurant.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, undefined),
                            "  ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: " text-[12px] font-[500] text-[#686b78]",
                                children: [
                                    Restaurant?.sla?.deliveryTime,
                                    " Min"
                                ]
                            }, void 0, true, {
                                fileName: "src/Pages/ResultRestaurant.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, undefined),
                            " ",
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-[12px] font-[500] text-[#686b78]",
                                children: Restaurant?.costForTwoMessage
                            }, void 0, false, {
                                fileName: "src/Pages/ResultRestaurant.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/Pages/ResultRestaurant.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: Restaurant?.cuisines.map((cuisine, index)=>{
                            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-[12px] text-[#686b78] px-[2px] font-[100]",
                                children: [
                                    cuisine,
                                    ","
                                ]
                            }, index, true, {
                                fileName: "src/Pages/ResultRestaurant.jsx",
                                lineNumber: 40,
                                columnNumber: 18
                            }, undefined);
                        })
                    }, void 0, false, {
                        fileName: "src/Pages/ResultRestaurant.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/Pages/ResultRestaurant.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/Pages/ResultRestaurant.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, undefined);
};
_c = ResultRestaurant;
exports.default = ResultRestaurant;
var _c;
$RefreshReg$(_c, "ResultRestaurant");

  $parcel$ReactRefreshHelpers$1300.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../Utilities/constants":"5t9MR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"1fReB":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$f434 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$f434.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useSearchResult", ()=>useSearchResult);
var _react = require("react");
var _myApp = require("../MyApp");
var _s = $RefreshSig$();
const useSearchResult = (item)=>{
    _s();
    const cordinates = (0, _react.useContext)((0, _myApp.locationContext));
    const [searchResturantResult, setSearchResturantResult] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        getQueryData(item?.text, item?.metadata, setSearchResturantResult);
    }, []);
    // seacrh for restaurants,dishes
    const getQueryData = async (query, metaData, setState)=>{
        const queryData = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${cordinates?.latitude}&lng=${cordinates?.longitude}&str=${query}&trackingId=null&submitAction=SUGGESTION&metaData=${metaData}
        `).then((res)=>res.json()).then((res)=>res?.data?.cards[1]?.groupedCard?.cardGroupMap).catch((err)=>{
            throw new Error("Something Went Wrong");
        });
        setState({
            ...queryData
        });
    };
    return searchResturantResult;
};
_s(useSearchResult, "vKlZJPzIxvX+MmEvEH7yUK1WxGY=");

  $parcel$ReactRefreshHelpers$f434.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","../MyApp":"91nZZ"}],"lhdeY":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d680 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d680.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _utils = require("../Utilities/utils");
var _s = $RefreshSig$();
const SearchPageSearchBox = ({ searchText , setSearchText , setSuggestedResturants  })=>{
    _s();
    const inputRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        inputRef.current.focus();
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                ref: inputRef,
                className: "Search-Input w-full h-[50px] text-[20px] border-[1px] p-7",
                value: searchText,
                placeholder: "search for resturants and food ... ",
                onChange: (e)=>{
                    setSearchText(e.target.value);
                    setSuggestedResturants && (0, _utils.getSearchedResturants)(e.target.value, setSuggestedResturants);
                }
            }, void 0, false, {
                fileName: "src/Pages/SearchPageSearchBox.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                className: "relative left-[670px] decoration-[#cacfe9] bottom-[40px] text-slate-500",
                onClick: ()=>{
                    setSearchText("");
                    setSuggestedResturants && setSuggestedResturants([]);
                },
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                    class: "fa-solid fa-xmark fa-2xl"
                }, void 0, false, {
                    fileName: "src/Pages/SearchPageSearchBox.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/Pages/SearchPageSearchBox.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(SearchPageSearchBox, "cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=");
_c = SearchPageSearchBox;
exports.default = SearchPageSearchBox;
var _c;
$RefreshReg$(_c, "SearchPageSearchBox");

  $parcel$ReactRefreshHelpers$d680.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../Utilities/utils":"bIOxy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","fstGL"], null, "parcelRequireb877")

//# sourceMappingURL=SearchResults.0d3eb75b.js.map
