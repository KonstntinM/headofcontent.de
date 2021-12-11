module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/section-beiträge","2":"components/section-call-to-action","3":"components/section-content","4":"components/section-content-beitrag","5":"components/section-content-navigation-beitrag","6":"components/section-content-navigation-video","7":"components/section-content-video","8":"components/section-hero","9":"components/section-hero-trailer","10":"components/section-kontakt","11":"components/section-team","12":"components/section-team-member","13":"components/section-videos","14":"components/sectionüber-uns","15":"pages/aktuelles/_id","16":"pages/aktuelles/index","17":"pages/datenschutzerklärung/index","18":"pages/impressum/index","19":"pages/index","20":"pages/login/index","21":"pages/videos/_id","22":"pages/videos/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;

function s(n2) {
  throw new RangeError(o[n2]);
}

const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};

const u = function (n2, t2, o2) {
  let r2 = 0;

  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }

  return e(r2 + 36 * n2 / (n2 + 38));
};

function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);

    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;

      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }

      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");

    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];

      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;

        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);

          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }

        return t4;
      }(n2)).length;

      let f = 128;
      let i = 0;
      let l = 72;

      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }

      const h = t3.length;
      let p = h;

      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;

        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }

        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;

        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;

            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;

              if (n3 < s2) {
                break;
              }

              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }

            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }

        ++i, ++f;
      }

      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;

function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}

function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}

function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}

function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}

function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}

function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}

function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};

  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }

  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];

    if (s.length < 2) {
      continue;
    }

    const key = decode(s[1]);

    if (key === "__proto__" || key === "constructor") {
      continue;
    }

    const value = decodeQueryValue(s[2] || "");

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }

  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }

  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}

function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};

    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }

    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }

  get hostname() {
    return parseHost(this.host).hostname;
  }

  get port() {
    return parseHost(this.host).port || "";
  }

  get username() {
    return parseAuth(this.auth).username;
  }

  get password() {
    return parseAuth(this.auth).password || "";
  }

  get hasProtocol() {
    return this.protocol.length;
  }

  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }

  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }

  get searchParams() {
    const p = new URLSearchParams();

    for (const name in this.query) {
      const value = this.query[name];

      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }

    return p;
  }

  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }

  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }

  get encodedAuth() {
    if (!this.auth) {
      return "";
    }

    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }

  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }

  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }

    Object.assign(this.query, url.query);

    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }

    if (url.hash) {
      this.hash = url.hash;
    }
  }

  toJSON() {
    return this.href;
  }

  toString() {
    return this.href;
  }

}

function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}

function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}

const TRAILING_SLASH_RE = /\/$|\/\?/;

function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }

  return TRAILING_SLASH_RE.test(input);
}

function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }

  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}

function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }

  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}

function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}

function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}

function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}

function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}

function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input;
  }

  return joinURL(_base, input);
}

function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }

  return input;
}

function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}

function getQuery(input) {
  return parseQuery(parseURL(input).search);
}

function isEmptyURL(url) {
  return !url || url === "/";
}

function isNonEmptyURL(url) {
  return url && url !== "/";
}

function joinURL(base, ...input) {
  let url = base || "";

  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }

  return url;
}

function createURL(input) {
  return new $URL(input);
}

function normalizeURL(input) {
  return createURL(input).toString();
}

function resolveURL(base, ...input) {
  const url = createURL(base);

  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }

  return url.toString();
}

function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}

function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}

function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}

function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;

  if (!parsed.protocol) {
    return fullpath;
  }

  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;

function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }

  return value;
}

function destr(val) {
  if (typeof val !== "string") {
    return val;
  }

  const _lval = val.toLowerCase();

  if (_lval === "true") {
    return true;
  }

  if (_lval === "false") {
    return false;
  }

  if (_lval === "null") {
    return null;
  }

  if (_lval === "nan") {
    return NaN;
  }

  if (_lval === "infinity") {
    return Infinity;
  }

  if (_lval === "undefined") {
    return void 0;
  }

  if (!JsonSigRx.test(val)) {
    return val;
  }

  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }

    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}

module.exports = destr;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("06d9abea", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("014a34fa", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("fe3d1842", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1157bfa0", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e7e38b98", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("abort-controller");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("web-streams-polyfill/ponyfill/es2018");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL, URLSearchParams) {/*! MIT License © Sindre Sorhus */
const globals = {};

const getGlobal = property => {
  /* istanbul ignore next */
  if (typeof self !== 'undefined' && self && property in self) {
    return self;
  }
  /* istanbul ignore next */


  if (typeof window !== 'undefined' && window && property in window) {
    return window;
  }

  if (typeof global !== 'undefined' && global && property in global) {
    return global;
  }
  /* istanbul ignore next */


  if (typeof globalThis !== 'undefined' && globalThis) {
    return globalThis;
  }
};

const globalProperties = ['Headers', 'Request', 'Response', 'ReadableStream', 'fetch', 'AbortController', 'FormData'];

for (const property of globalProperties) {
  Object.defineProperty(globals, property, {
    get() {
      const globalObject = getGlobal(property);
      const value = globalObject && globalObject[property];
      return typeof value === 'function' ? value.bind(globalObject) : value;
    }

  });
}

const isObject = value => value !== null && typeof value === 'object';

const supportsAbortController = typeof globals.AbortController === 'function';
const supportsStreams = typeof globals.ReadableStream === 'function';
const supportsFormData = typeof globals.FormData === 'function';

const mergeHeaders = (source1, source2) => {
  const result = new globals.Headers(source1 || {});
  const isHeadersInstance = source2 instanceof globals.Headers;
  const source = new globals.Headers(source2 || {});

  for (const [key, value] of source) {
    if (isHeadersInstance && value === 'undefined' || value === undefined) {
      result.delete(key);
    } else {
      result.set(key, value);
    }
  }

  return result;
};

const deepMerge = (...sources) => {
  let returnValue = {};
  let headers = {};

  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }

      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }

        returnValue = { ...returnValue,
          [key]: value
        };
      }

      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
      }
    }

    returnValue.headers = headers;
  }

  return returnValue;
};

const requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
const responseTypes = {
  json: 'application/json',
  text: 'text/*',
  formData: 'multipart/form-data',
  arrayBuffer: '*/*',
  blob: '*/*'
};
const retryMethods = ['get', 'put', 'head', 'delete', 'options', 'trace'];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const stop = Symbol('stop');

class HTTPError extends Error {
  constructor(response) {
    // Set the message to the status text, such as Unauthorized,
    // with some fallbacks. This message should never be undefined.
    super(response.statusText || String(response.status === 0 || response.status ? response.status : 'Unknown response error'));
    this.name = 'HTTPError';
    this.response = response;
  }

}

class TimeoutError extends Error {
  constructor(request) {
    super('Request timed out');
    this.name = 'TimeoutError';
    this.request = request;
  }

}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); // `Promise.race()` workaround (#91)


const timeout = (request, abortController, options) => new Promise((resolve, reject) => {
  const timeoutID = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }

    reject(new TimeoutError(request));
  }, options.timeout);
  /* eslint-disable promise/prefer-await-to-then */

  options.fetch(request).then(resolve).catch(reject).then(() => {
    clearTimeout(timeoutID);
  });
  /* eslint-enable promise/prefer-await-to-then */
});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

const defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes
};

const normalizeRetryOptions = (retry = {}) => {
  if (typeof retry === 'number') {
    return { ...defaultRetryOptions,
      limit: retry
    };
  }

  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error('retry.methods must be an array');
  }

  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error('retry.statusCodes must be an array');
  }

  return { ...defaultRetryOptions,
    ...retry,
    afterStatusCodes: retryAfterStatusCodes
  };
}; // The maximum value of a 32bit int (see issue #117)


const maxSafeTimeout = 2147483647;

class Ky {
  constructor(input, options = {}) {
    this._retryCount = 0;
    this._input = input;
    this._options = {
      // TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
      credentials: this._input.credentials || 'same-origin',
      ...options,
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod(options.method || this._input.method),
      prefixUrl: String(options.prefixUrl || ''),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
      fetch: options.fetch || globals.fetch
    };

    if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
      throw new TypeError('`input` must be a string, URL, or Request');
    }

    if (this._options.prefixUrl && typeof this._input === 'string') {
      if (this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }

      if (!this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }

      this._input = this._options.prefixUrl + this._input;
    }

    if (supportsAbortController) {
      this.abortController = new globals.AbortController();

      if (this._options.signal) {
        this._options.signal.addEventListener('abort', () => {
          this.abortController.abort();
        });
      }

      this._options.signal = this.abortController.signal;
    }

    this.request = new globals.Request(this._input, this._options);

    if (this._options.searchParams) {
      const searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
      const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams); // To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one

      if ((supportsFormData && this._options.body instanceof globals.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
        this.request.headers.delete('content-type');
      }

      this.request = new globals.Request(new globals.Request(url, this.request), this._options);
    }

    if (this._options.json !== undefined) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set('content-type', 'application/json');
      this.request = new globals.Request(this.request, {
        body: this._options.body
      });
    }

    const fn = async () => {
      if (this._options.timeout > maxSafeTimeout) {
        throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
      }

      await delay(1);
      let response = await this._fetch();

      for (const hook of this._options.hooks.afterResponse) {
        // eslint-disable-next-line no-await-in-loop
        const modifiedResponse = await hook(this.request, this._options, this._decorateResponse(response.clone()));

        if (modifiedResponse instanceof globals.Response) {
          response = modifiedResponse;
        }
      }

      this._decorateResponse(response);

      if (!response.ok && this._options.throwHttpErrors) {
        throw new HTTPError(response);
      } // If `onDownloadProgress` is passed, it uses the stream API internally

      /* istanbul ignore next */


      if (this._options.onDownloadProgress) {
        if (typeof this._options.onDownloadProgress !== 'function') {
          throw new TypeError('The `onDownloadProgress` option must be a function');
        }

        if (!supportsStreams) {
          throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
        }

        return this._stream(response.clone(), this._options.onDownloadProgress);
      }

      return response;
    };

    const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());

    const result = isRetriableMethod ? this._retry(fn) : fn();

    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);
        const response = (await result).clone();

        if (type === 'json') {
          if (response.status === 204) {
            return '';
          }

          if (options.parseJson) {
            return options.parseJson(await response.text());
          }
        }

        return response[type]();
      };
    }

    return result;
  }

  _calculateRetryDelay(error) {
    this._retryCount++;

    if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!this._options.retry.statusCodes.includes(error.response.status)) {
          return 0;
        }

        const retryAfter = error.response.headers.get('Retry-After');

        if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
          let after = Number(retryAfter);

          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1000;
          }

          if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
            return 0;
          }

          return after;
        }

        if (error.response.status === 413) {
          return 0;
        }
      }

      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1000;
    }

    return 0;
  }

  _decorateResponse(response) {
    if (this._options.parseJson) {
      response.json = async () => {
        return this._options.parseJson(await response.text());
      };
    }

    return response;
  }

  async _retry(fn) {
    try {
      return await fn();
    } catch (error) {
      const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);

      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);

        for (const hook of this._options.hooks.beforeRetry) {
          // eslint-disable-next-line no-await-in-loop
          const hookResult = await hook({
            request: this.request,
            options: this._options,
            error,
            retryCount: this._retryCount
          }); // If `stop` is returned from the hook, the retry process is stopped

          if (hookResult === stop) {
            return;
          }
        }

        return this._retry(fn);
      }

      if (this._options.throwHttpErrors) {
        throw error;
      }
    }
  }

  async _fetch() {
    for (const hook of this._options.hooks.beforeRequest) {
      // eslint-disable-next-line no-await-in-loop
      const result = await hook(this.request, this._options);

      if (result instanceof Request) {
        this.request = result;
        break;
      }

      if (result instanceof Response) {
        return result;
      }
    }

    if (this._options.timeout === false) {
      return this._options.fetch(this.request.clone());
    }

    return timeout(this.request.clone(), this.abortController, this._options);
  }
  /* istanbul ignore next */


  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get('content-length')) || 0;
    let transferredBytes = 0;
    return new globals.Response(new globals.ReadableStream({
      start(controller) {
        const reader = response.body.getReader();

        if (onDownloadProgress) {
          onDownloadProgress({
            percent: 0,
            transferredBytes: 0,
            totalBytes
          }, new Uint8Array());
        }

        async function read() {
          const {
            done,
            value
          } = await reader.read();

          if (done) {
            controller.close();
            return;
          }

          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({
              percent,
              transferredBytes,
              totalBytes
            }, value);
          }

          controller.enqueue(value);
          read();
        }

        read();
      }

    }));
  }

}

const validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
      throw new TypeError('The `options` argument must be an object');
    }
  }

  return deepMerge({}, ...sources);
};

const createInstance = defaults => {
  const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));

  for (const method of requestMethods) {
    ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {
      method
    }));
  }

  ky.HTTPError = HTTPError;
  ky.TimeoutError = TimeoutError;

  ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));

  ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));

  ky.stop = stop;
  return ky;
};

/* harmony default export */ __webpack_exports__["a"] = (createInstance());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)["URL"], __webpack_require__(10)["URLSearchParams"]))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;

    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }

  return hooks;
}

function mergeHooks(...hooks) {
  const finalHooks = {};

  for (let _hook of hooks) {
    _hook = flatHooks(_hook);

    for (const key in _hook) {
      if (finalHooks[key]) {
        finalHooks[key].push(_hook[key]);
      } else {
        finalHooks[key] = [_hook[key]];
      }
    }
  }

  for (const key in finalHooks) {
    if (finalHooks[key].length > 1) {
      const arr = finalHooks[key];

      finalHooks[key] = (...args) => serial(arr, fn => fn(...args));
    } else {
      finalHooks[key] = finalHooks[key][0];
    }
  }

  return finalHooks;
}

function serial(tasks, fn) {
  return tasks.reduce((promise, task) => promise.then(() => fn(task)), Promise.resolve(null));
}

class Hookable {
  constructor(logger = console) {
    this._logger = logger;
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
  }

  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {};
    }

    const originalName = name;
    let deprecatedHook;

    while (this._deprecatedHooks[name]) {
      deprecatedHook = this._deprecatedHooks[name];

      if (typeof deprecatedHook === "string") {
        deprecatedHook = {
          to: deprecatedHook
        };
      }

      name = deprecatedHook.to;
    }

    if (deprecatedHook && this._logger) {
      if (!deprecatedHook.message) {
        this._logger.warn(`${originalName} hook has been deprecated` + (deprecatedHook.to ? `, please use ${deprecatedHook.to}` : ""));
      } else {
        this._logger.warn(deprecatedHook.message);
      }
    }

    this._hooks[name] = this._hooks[name] || [];

    this._hooks[name].push(fn);

    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }

  hookOnce(name, fn) {
    let _unreg;

    let _fn = (...args) => {
      _unreg();

      _unreg = null;
      _fn = null;
      return fn(...args);
    };

    _unreg = this.hook(name, _fn);
    return _unreg;
  }

  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);

      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }

      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }

  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }

  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }

  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(key => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach(unreg => unreg());
    };
  }

  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);

    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }

  async callHook(name, ...args) {
    if (!this._hooks[name]) {
      return;
    }

    try {
      await serial(this._hooks[name], fn => fn(...args));
    } catch (err) {
      if (name !== "error") {
        await this.callHook("error", err);
      }

      if (this._logger) {
        if (this._logger.fatal) {
          this._logger.fatal(err);
        } else {
          this._logger.error(err);
        }
      }
    }
  }

}

Hookable.mergeHooks = mergeHooks;
Hookable.prototype.mergeHooks = mergeHooks;
module.exports = Hookable;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

var dist = isHTTPS;

const _location = typeof location !== "undefined" ? location : {
  origin: "",
  pathname: "/"
};

function getURL(req, includePath) {
  if (!req) {
    return _location.origin + (includePath ? _location.pathname : "");
  }

  return encodeURI("http" + (dist(req) ? "s" : "") + "://" + (req.headers["x-forwarded-host"] || req.headers.host) + (includePath ? req.url : ""));
}

module.exports = getURL;

/***/ }),
/* 27 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Head of Content\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Head of Content\"},{\"hid\":\"author\",\"name\":\"author\",\"content\":\"Head of Content\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Head of Content\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Head of Content\"},{\"hid\":\"og:url\",\"name\":\"og:url\",\"property\":\"og:url\",\"content\":\"headofcontent.de\"},{\"hid\":\"og:image\",\"name\":\"og:image\",\"property\":\"og:image\",\"content\":\"headofcontent.de/_nuxt/icons/icon_512x512.c22dfb.png\"},{\"hid\":\"og:image:width\",\"name\":\"og:image:width\",\"property\":\"og:image:width\",\"content\":512},{\"hid\":\"og:image:height\",\"name\":\"og:image:height\",\"property\":\"og:image:height\",\"content\":512},{\"hid\":\"og:image:type\",\"name\":\"og:image:type\",\"property\":\"og:image:type\",\"content\":\"image/png\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.c22dfb.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.c22dfb.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.b87da005.webmanifest\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"de\"}}");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-loading-skeleton");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(48);


/***/ }),
/* 30 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cf690a0.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_435f734c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_435f734c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_435f734c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_435f734c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_435f734c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".accent[data-v-435f734c]{background-image:linear-gradient(90deg,#b8353c,#c4568d);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media (min-width:1024px){.trailer-bg[data-v-435f734c]{transform:translatex(6.5%)}.trailer[data-v-435f734c]{transform:perspective(1000px) rotateY(-5deg) rotateX(0deg) rotate(0deg) scaleY(.95) translatex(6.5%);transition:transform .2s}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0211d3d2", content, true)

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.space-y-1>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0.25rem*(1 - var(--space-y-reverse)));margin-bottom:calc(0.25rem*var(--space-y-reverse))}.space-y-2>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0.5rem*(1 - var(--space-y-reverse)));margin-bottom:calc(0.5rem*var(--space-y-reverse))}.space-y-3>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0.75rem*(1 - var(--space-y-reverse)));margin-bottom:calc(0.75rem*var(--space-y-reverse))}.space-x-3>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0.75rem*var(--space-x-reverse));margin-left:calc(0.75rem*(1 - var(--space-x-reverse)))}.space-y-4>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1rem*var(--space-y-reverse))}.space-x-4>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1rem*var(--space-x-reverse));margin-left:calc(1rem*(1 - var(--space-x-reverse)))}.space-y-5>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1.25rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1.25rem*var(--space-y-reverse))}.space-y-6>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1.5rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1.5rem*var(--space-y-reverse))}.space-x-6>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1.5rem*var(--space-x-reverse));margin-left:calc(1.5rem*(1 - var(--space-x-reverse)))}.space-y-8>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(2rem*(1 - var(--space-y-reverse)));margin-bottom:calc(2rem*var(--space-y-reverse))}.space-y-12>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(3rem*(1 - var(--space-y-reverse)));margin-bottom:calc(3rem*var(--space-y-reverse))}.space-y-16>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(4rem*(1 - var(--space-y-reverse)));margin-bottom:calc(4rem*var(--space-y-reverse))}.-space-x-px>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(-1px*var(--space-x-reverse));margin-left:calc(-1px*(1 - var(--space-x-reverse)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.bg-green-400{--bg-opacity:1;background-color:#68d391;background-color:rgba(104,211,145,var(--bg-opacity))}.bg-blue-400{--bg-opacity:1;background-color:#63b3ed;background-color:rgba(99,179,237,var(--bg-opacity))}.bg-blue-500{--bg-opacity:1;background-color:#4299e1;background-color:rgba(66,153,225,var(--bg-opacity))}.bg-blue-600{--bg-opacity:1;background-color:#3182ce;background-color:rgba(49,130,206,var(--bg-opacity))}.bg-indigo-100{--bg-opacity:1;background-color:#ebf4ff;background-color:rgba(235,244,255,var(--bg-opacity))}.hover\\:bg-blue-600:hover{--bg-opacity:1;background-color:#3182ce;background-color:rgba(49,130,206,var(--bg-opacity))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--gradient-color-stops))}.from-indigo-600{--gradient-from-color:#5a67d8;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(90,103,216,0))}.via-indigo-500{--gradient-via-color:#667eea;--gradient-color-stops:var(--gradient-from-color),var(--gradient-via-color),var(--gradient-to-color,rgba(102,126,234,0))}.to-teal-400{--gradient-to-color:#4fd1c5}.bg-cover{background-size:cover}.border-transparent{border-color:transparent}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-gray-300{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.border-red-500{--border-opacity:1;border-color:#f56565;border-color:rgba(245,101,101,var(--border-opacity))}.border-indigo-500{--border-opacity:1;border-color:#667eea;border-color:rgba(102,126,234,var(--border-opacity))}.focus\\:border-blue-600:focus{--border-opacity:1;border-color:#3182ce;border-color:rgba(49,130,206,var(--border-opacity))}.focus\\:border-indigo-300:focus{--border-opacity:1;border-color:#a3bffa;border-color:rgba(163,191,250,var(--border-opacity))}.focus\\:border-purple-700:focus{--border-opacity:1;border-color:#6b46c1;border-color:rgba(107,70,193,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}.rounded-r-md{border-top-right-radius:.375rem;border-bottom-right-radius:.375rem}.rounded-l-md{border-top-left-radius:.375rem;border-bottom-left-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.self-start{align-self:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.order-first{order:-9999}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-20{height:5rem}.h-48{height:12rem}.h-64{height:16rem}.h-full{height:100%}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}.text-5xl{font-size:3rem}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.leading-none{line-height:1}.leading-tight{line-height:1.25}.list-decimal{list-style-type:decimal}.my-2{margin-top:.5rem;margin-bottom:.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mx-auto{margin-left:auto;margin-right:auto}.-my-2{margin-top:-.5rem;margin-bottom:-.5rem}.-mx-5{margin-left:-1.25rem;margin-right:-1.25rem}.mt-0{margin-top:0}.mb-0{margin-bottom:0}.mt-1{margin-top:.25rem}.ml-1{margin-left:.25rem}.mr-3{margin-right:.75rem}.ml-3{margin-left:.75rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.mt-5{margin-top:1.25rem}.ml-5{margin-left:1.25rem}.mt-6{margin-top:1.5rem}.mr-6{margin-right:1.5rem}.mb-6{margin-bottom:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.mb-10{margin-bottom:2.5rem}.mt-16{margin-top:4rem}.mb-16{margin-bottom:4rem}.mb-20{margin-bottom:5rem}.-mt-20{margin-top:-5rem}.max-w-xs{max-width:20rem}.max-w-3xl{max-width:48rem}.max-w-5xl{max-width:64rem}.max-w-6xl{max-width:72rem}.max-w-screen-xl{max-width:1280px}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.hover\\:opacity-100:hover{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.p-2{padding:.5rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.px-8{padding-left:2rem;padding-right:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.px-12{padding-left:3rem;padding-right:3rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-20{padding-top:5rem;padding-bottom:5rem}.pb-1{padding-bottom:.25rem}.pt-3{padding-top:.75rem}.pr-5{padding-right:1.25rem}.pb-5{padding-bottom:1.25rem}.pl-10{padding-left:2.5rem}.pr-12{padding-right:3rem}.pb-12{padding-bottom:3rem}.pb-16{padding-bottom:4rem}.pt-20{padding-top:5rem}.pb-24{padding-bottom:6rem}.pb-32{padding-bottom:8rem}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.shadow-sm{box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.focus\\:shadow-outline:focus{box-shadow:0 0 0 3px rgba(66,153,225,.5)}.fill-current{fill:currentColor}.text-left{text-align:left}.text-center{text-align:center}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-800{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.text-red-500{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.text-yellow-400{--text-opacity:1;color:#f6e05e;color:rgba(246,224,94,var(--text-opacity))}.text-teal-300{--text-opacity:1;color:#81e6d9;color:rgba(129,230,217,var(--text-opacity))}.text-blue-100{--text-opacity:1;color:#ebf8ff;color:rgba(235,248,255,var(--text-opacity))}.text-blue-300{--text-opacity:1;color:#90cdf4;color:rgba(144,205,244,var(--text-opacity))}.text-blue-400{--text-opacity:1;color:#63b3ed;color:rgba(99,179,237,var(--text-opacity))}.text-blue-500{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.text-indigo-200{--text-opacity:1;color:#c3dafe;color:rgba(195,218,254,var(--text-opacity))}.text-indigo-500{--text-opacity:1;color:#667eea;color:rgba(102,126,234,var(--text-opacity))}.text-indigo-600{--text-opacity:1;color:#5a67d8;color:rgba(90,103,216,var(--text-opacity))}.text-indigo-700{--text-opacity:1;color:#4c51bf;color:rgba(76,81,191,var(--text-opacity))}.text-purple-400{--text-opacity:1;color:#b794f4;color:rgba(183,148,244,var(--text-opacity))}.text-pink-500{--text-opacity:1;color:#ed64a6;color:rgba(237,100,166,var(--text-opacity))}.hover\\:text-gray-400:hover{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.hover\\:text-gray-500:hover{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.hover\\:text-gray-900:hover{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.hover\\:text-blue-500:hover{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.hover\\:text-indigo-600:hover{--text-opacity:1;color:#5a67d8;color:rgba(90,103,216,var(--text-opacity))}.uppercase{text-transform:uppercase}.underline{text-decoration:underline}.tracking-tight{letter-spacing:-.025em}.tracking-normal{letter-spacing:0}.whitespace-no-wrap{white-space:nowrap}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-20{width:5rem}.w-48{width:12rem}.w-auto{width:auto}.w-2\\/4{width:50%}.w-11\\/12{width:91.666667%}.w-full{width:100%}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.gap-6{grid-gap:1.5rem;gap:1.5rem}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.col-span-6{grid-column:span 6/span 6}.col-span-12{grid-column:span 12/span 12}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.scale-100{--transform-scale-x:1;--transform-scale-y:1}.scale-150{--transform-scale-x:1.5;--transform-scale-y:1.5}.hover\\:scale-105:hover{--transform-scale-x:1.05;--transform-scale-y:1.05}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150{transition-duration:.15s}.duration-500{transition-duration:.5s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:640px){.sm\\:space-y-0>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0px*(1 - var(--space-y-reverse)));margin-bottom:calc(0px*var(--space-y-reverse))}.sm\\:space-y-4>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1rem*var(--space-y-reverse))}.sm\\:grid{display:grid}.sm\\:items-center{align-items:center}.sm\\:text-4xl{font-size:2.25rem}.sm\\:text-5xl{font-size:3rem}.sm\\:leading-tight{line-height:1.25}.sm\\:mx-auto{margin-left:auto;margin-right:auto}.sm\\:max-w-xl{max-width:36rem}.sm\\:p-6{padding:1.5rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-12{padding-top:3rem;padding-bottom:3rem}.sm\\:pr-0{padding-right:0}.sm\\:text-center{text-align:center}.sm\\:gap-16{grid-gap:4rem;gap:4rem}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:space-y-0>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(0px*(1 - var(--space-y-reverse)));margin-bottom:calc(0px*var(--space-y-reverse))}.md\\:space-x-0>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0px*var(--space-x-reverse));margin-left:calc(0px*(1 - var(--space-x-reverse)))}.md\\:space-y-5>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(1.25rem*(1 - var(--space-y-reverse)));margin-bottom:calc(1.25rem*var(--space-y-reverse))}.md\\:space-x-5>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1.25rem*var(--space-x-reverse));margin-left:calc(1.25rem*(1 - var(--space-x-reverse)))}.md\\:space-y-10>:not(template)~:not(template){--space-y-reverse:0;margin-top:calc(2.5rem*(1 - var(--space-y-reverse)));margin-bottom:calc(2.5rem*var(--space-y-reverse))}.md\\:space-x-10>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(2.5rem*var(--space-x-reverse));margin-left:calc(2.5rem*(1 - var(--space-x-reverse)))}.md\\:border-b-0{border-bottom-width:0}.md\\:border-r{border-right-width:1px}.md\\:flex{display:flex}.md\\:flex-row{flex-direction:row}.md\\:justify-end{justify-content:flex-end}.md\\:justify-between{justify-content:space-between}.md\\:h-10{height:2.5rem}.md\\:h-56{height:14rem}.md\\:text-lg{font-size:1.125rem}.md\\:text-xl{font-size:1.25rem}.md\\:text-2xl{font-size:1.5rem}.md\\:text-3xl{font-size:1.875rem}.md\\:text-4xl{font-size:2.25rem}.md\\:text-5xl{font-size:3rem}.md\\:text-6xl{font-size:4rem}.md\\:leading-none{line-height:1}.md\\:mt-0{margin-top:0}.md\\:mb-0{margin-bottom:0}.md\\:mr-3{margin-right:.75rem}.md\\:mr-6{margin-right:1.5rem}.md\\:ml-10{margin-left:2.5rem}.md\\:-mt-2{margin-top:-.5rem}.md\\:max-w-xs{max-width:20rem}.md\\:max-w-2xl{max-width:42rem}.md\\:max-w-3xl{max-width:48rem}.md\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.md\\:py-16{padding-top:4rem;padding-bottom:4rem}.md\\:pt-0{padding-top:0}.md\\:pb-0{padding-bottom:0}.md\\:pl-0{padding-left:0}.md\\:pr-3{padding-right:.75rem}.md\\:pr-5{padding-right:1.25rem}.md\\:pr-6{padding-right:1.5rem}.md\\:pr-10{padding-right:2.5rem}.md\\:pt-12{padding-top:3rem}.md\\:pl-16{padding-left:4rem}.md\\:text-left{text-align:left}.md\\:text-center{text-align:center}.md\\:w-10{width:2.5rem}.md\\:w-56{width:14rem}.md\\:w-1\\/2{width:50%}.md\\:col-span-6{grid-column:span 6/span 6}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:block{display:block}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:items-center{align-items:center}.lg\\:justify-center{justify-content:center}.lg\\:order-none{order:0}.lg\\:leading-7{line-height:1.75rem}.lg\\:leading-8{line-height:2rem}.lg\\:my-0{margin-top:0;margin-bottom:0}.lg\\:my-5{margin-top:1.25rem;margin-bottom:1.25rem}.lg\\:mt-0{margin-top:0}.lg\\:mb-0{margin-bottom:0}.lg\\:ml-0{margin-left:0}.lg\\:mt-6{margin-top:1.5rem}.lg\\:-mb-12{margin-bottom:-3rem}.lg\\:max-w-lg{max-width:32rem}.lg\\:max-w-5xl{max-width:64rem}.lg\\:max-w-6xl{max-width:72rem}.lg\\:p-0{padding:0}.lg\\:py-4{padding-top:1rem;padding-bottom:1rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-12{padding-top:3rem;padding-bottom:3rem}.lg\\:px-12{padding-left:3rem;padding-right:3rem}.lg\\:px-16{padding-left:4rem;padding-right:4rem}.lg\\:py-24{padding-top:6rem;padding-bottom:6rem}.lg\\:pt-4{padding-top:1rem}.lg\\:pl-5{padding-left:1.25rem}.lg\\:pt-16{padding-top:4rem}.lg\\:pr-16{padding-right:4rem}.lg\\:absolute{position:absolute}.lg\\:text-left{text-align:left}.lg\\:w-auto{width:auto}.lg\\:w-1\\/2{width:50%}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:col-span-4{grid-column:span 4/span 4}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:inline{display:inline}.xl\\:text-base{font-size:1rem}.xl\\:text-xl{font-size:1.25rem}.xl\\:text-4xl{font-size:2.25rem}.xl\\:text-6xl{font-size:4rem}.xl\\:leading-8{line-height:2rem}.xl\\:leading-9{line-height:2.25rem}.xl\\:mb-0{margin-bottom:0}.xl\\:max-w-md{max-width:28rem}.xl\\:p-8{padding:2rem}.xl\\:px-0{padding-left:0;padding-right:0}.xl\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.xl\\:px-10{padding-left:2.5rem}.xl\\:pr-10,.xl\\:px-10{padding-right:2.5rem}.xl\\:pr-20{padding-right:5rem}.xl\\:tracking-wider{letter-spacing:.05em}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{scroll-behavior:smooth}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/eedd16d.png";

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo{max-width:7rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a57dc9f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a57dc9f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a57dc9f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a57dc9f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_usr_local_lib_node_modules_nuxt_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_usr_local_lib_node_modules_nuxt_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a57dc9f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".icon[data-v-a57dc9f2]{fill:#d1d5db}.icon[data-v-a57dc9f2]:hover{fill:#9ca3af}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-div");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-attrs");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "Navbar", function() { return Navbar; });
__webpack_require__.d(components_namespaceObject, "SectionBeiträge", function() { return SectionBeiträge; });
__webpack_require__.d(components_namespaceObject, "SectionCallToAction", function() { return SectionCallToAction; });
__webpack_require__.d(components_namespaceObject, "SectionContent", function() { return SectionContent; });
__webpack_require__.d(components_namespaceObject, "SectionHero", function() { return SectionHero; });
__webpack_require__.d(components_namespaceObject, "SectionKontakt", function() { return SectionKontakt; });
__webpack_require__.d(components_namespaceObject, "SectionTeam", function() { return SectionTeam; });
__webpack_require__.d(components_namespaceObject, "SectionVideos", function() { return SectionVideos; });
__webpack_require__.d(components_namespaceObject, "SectionÜberUns", function() { return SectionÜberUns; });
__webpack_require__.d(components_namespaceObject, "SectionContentBeitrag", function() { return SectionContentBeitrag; });
__webpack_require__.d(components_namespaceObject, "SectionContentVideo", function() { return SectionContentVideo; });
__webpack_require__.d(components_namespaceObject, "SectionHeroTrailer", function() { return SectionHeroTrailer; });
__webpack_require__.d(components_namespaceObject, "SectionTeamMember", function() { return SectionTeamMember; });
__webpack_require__.d(components_namespaceObject, "SectionContentNavigationBeitrag", function() { return SectionContentNavigationBeitrag; });
__webpack_require__.d(components_namespaceObject, "SectionContentNavigationVideo", function() { return SectionContentNavigationVideo; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.js
var dist = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(3);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(18);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _d7cc6bfc = () => interopDefault(__webpack_require__.e(/* import() | pages/aktuelles/index */ 16).then(__webpack_require__.bind(null, 82)));

const _ac9a91aa = () => interopDefault(__webpack_require__.e(/* import() | pages/datenschutzerklärung/index */ 17).then(__webpack_require__.bind(null, 83)));

const _539760f1 = () => interopDefault(__webpack_require__.e(/* import() | pages/impressum/index */ 18).then(__webpack_require__.bind(null, 84)));

const _9ba93e3a = () => interopDefault(__webpack_require__.e(/* import() | pages/login/index */ 20).then(__webpack_require__.bind(null, 85)));

const _07e76298 = () => interopDefault(__webpack_require__.e(/* import() | pages/videos/index */ 22).then(__webpack_require__.bind(null, 86)));

const _cf93362c = () => interopDefault(__webpack_require__.e(/* import() | pages/aktuelles/_id */ 15).then(__webpack_require__.bind(null, 87)));

const _97f323c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/videos/_id */ 21).then(__webpack_require__.bind(null, 88)));

const _52027f49 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 19).then(__webpack_require__.bind(null, 89)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/aktuelles",
    component: _d7cc6bfc,
    name: "aktuelles"
  }, {
    path: "/datenschutzerkl%C3%A4rung",
    component: _ac9a91aa,
    name: "datenschutzerklärung"
  }, {
    path: "/impressum",
    component: _539760f1,
    name: "impressum"
  }, {
    path: "/login",
    component: _9ba93e3a,
    name: "login"
  }, {
    path: "/videos",
    component: _07e76298,
    name: "videos"
  }, {
    path: "/aktuelles/:id",
    component: _cf93362c,
    name: "aktuelles-id"
  }, {
    path: "/videos/:id",
    component: _97f323c8,
    name: "videos-id"
  }, {
    path: "/",
    component: _52027f49,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=435f734c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative flex flex-col items-center justify-center w-full pb-12 bg-white bg-cover lg:pt-4 min-w-screen"},[_vm._ssrNode("<div class=\"flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0\" data-v-435f734c><div class=\"container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0\" data-v-435f734c><h1 class=\"relative z-20 text-5xl font-extrabold leading-none xl:text-6xl sm:text-center lg:text-left\" data-v-435f734c><span class=\"accent\" data-v-435f734c>Junge, unabhänige</span><br data-v-435f734c> <span class=\"mt-1 text-gray-800 lg:mt-0\" data-v-435f734c>Fehler aus der Hauptstadt</span></h1> <p class=\"relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left\" data-v-435f734c>Es tut uns leid, aber irgendetwas hat nicht so geklappt, wie es sollte. Bitte versuche es etwas später noch einmal.</p> <div class=\"relative flex mt-4\" data-v-435f734c><a href=\"/\" class=\"flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue md:text-lg xl:text-xl md:px-5 xl:px-10\" data-v-435f734c>Zur Startseite</a></div></div> <div class=\"relative w-full px-5 rounded-lg lg:w-1/2 group xl:px-0\" data-v-435f734c><div class=\"trailer relative overflow-hidden rounded-md shadow-2xl cursor-pointer group cursor-pointer\" data-v-435f734c><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" class=\"z-10 object-cover w-full h-full\" data-v-435f734c></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=435f734c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "435f734c",
  "65050638"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "6c0a98a3"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(36);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=70ee752f&
var defaultvue_type_template_id_70ee752f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_70ee752f_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=70ee752f&

// CONCATENATED MODULE: ./layouts/default.vue

var default_script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  default_script,
  defaultvue_type_template_id_70ee752f_render,
  defaultvue_type_template_id_70ee752f_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "bc0b801e"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Navbar: __webpack_require__(49).default,Footer: __webpack_require__(50).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 50)).then(c => wrapFunctional(c.default || c));
const Navbar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const SectionBeiträge = () => __webpack_require__.e(/* import() | components/section-beiträge */ 1).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c));
const SectionCallToAction = () => __webpack_require__.e(/* import() | components/section-call-to-action */ 2).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const SectionContent = () => __webpack_require__.e(/* import() | components/section-content */ 3).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const SectionHero = () => __webpack_require__.e(/* import() | components/section-hero */ 8).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const SectionKontakt = () => __webpack_require__.e(/* import() | components/section-kontakt */ 10).then(__webpack_require__.bind(null, 78)).then(c => wrapFunctional(c.default || c));
const SectionTeam = () => __webpack_require__.e(/* import() | components/section-team */ 11).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c));
const SectionVideos = () => __webpack_require__.e(/* import() | components/section-videos */ 13).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const SectionÜberUns = () => __webpack_require__.e(/* import() | components/sectionüber-uns */ 14).then(__webpack_require__.bind(null, 76)).then(c => wrapFunctional(c.default || c));
const SectionContentBeitrag = () => __webpack_require__.e(/* import() | components/section-content-beitrag */ 4).then(__webpack_require__.bind(null, 53)).then(c => wrapFunctional(c.default || c));
const SectionContentVideo = () => __webpack_require__.e(/* import() | components/section-content-video */ 7).then(__webpack_require__.bind(null, 54)).then(c => wrapFunctional(c.default || c));
const SectionHeroTrailer = () => __webpack_require__.e(/* import() | components/section-hero-trailer */ 9).then(__webpack_require__.bind(null, 60)).then(c => wrapFunctional(c.default || c));
const SectionTeamMember = () => __webpack_require__.e(/* import() | components/section-team-member */ 12).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c));
const SectionContentNavigationBeitrag = () => __webpack_require__.e(/* import() | components/section-content-navigation-beitrag */ 5).then(__webpack_require__.bind(null, 70)).then(c => wrapFunctional(c.default || c));
const SectionContentNavigationVideo = () => __webpack_require__.e(/* import() | components/section-content-navigation-video */ 6).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(19);

// CONCATENATED MODULE: ./.nuxt/hcaptcha.js


const API_URL = "https://hcaptcha.com/1/api.js";

class hcaptcha_HCaptcha {
  constructor({
    siteKey
  }) {
    if (!siteKey) {
      throw new Error("hCaptcha Error: No siteKey specified");
    }

    this._elements = {};
    this.siteKey = siteKey;
    this._ready = false;
    this._eventBus = null;
  }

  init() {
    if (this._ready) {
      return this._ready;
    }

    this._eventBus = new external_events_["EventEmitter"]();
    this._elements = {
      script: document.createElement("script")
    };
    const {
      script
    } = this._elements;
    script.setAttribute('src', `${API_URL}`);
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    this._ready = new Promise((resolve, reject) => {
      document.head.appendChild(script);
    });
    return this._ready;
  }

  getResponse() {
    return new Promise((resolve, reject) => {
      /**
       * The hCaptcha challenge response
       * which must be validated in server side
       */
      resolve(document.querySelector("[data-hcaptcha-response]").getAttribute("data-hcaptcha-response"));
    });
  }

  on(event, callback) {
    return this._eventBus.on(event, callback);
  }

  destroy() {
    if (this._ready) {
      this._ready = false;
      const {
        head
      } = document;
      const {
        style
      } = this._elements;
      const scripts = [...document.head.querySelectorAll("script")].filter(script => script.src.includes("hcaptcha"));

      if (scripts.length) {
        scripts.forEach(script => head.removeChild(script));
      }

      if (head.contains(style)) {
        head.removeChild(style);
      }
    }
  }

}

/* harmony default export */ var _nuxt_hcaptcha = (function (_, inject) {
  const {
    hcaptcha = {}
  } = _.$config || {};
  const options = { ...{
      "siteKey": "286b3a4d-750a-4324-9aa0-c185cf5472a3"
    },
    ...hcaptcha
  };
  external_vue_default.a.component('Hcaptcha', () => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, 90)));
  inject('hcaptcha', new hcaptcha_HCaptcha(options));
});
// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(20);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./.nuxt/markdownit.js


const handlePlugin = plugin => plugin.default || plugin;

/* harmony default export */ var markdownit = (({}, inject) => {
  const md = new external_markdown_it_default.a('default', {
    "linkify": true,
    "breaks": true
  });
  md.use(handlePlugin(__webpack_require__(45)));
  md.use(handlePlugin(__webpack_require__(46)));
  inject('md', md);
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(21);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "abort-controller"
var external_abort_controller_ = __webpack_require__(22);

// EXTERNAL MODULE: external "web-streams-polyfill/ponyfill/es2018"
var es2018_ = __webpack_require__(23);

// CONCATENATED MODULE: ./.nuxt/http.server.js



const TEN_MEGABYTES = 1000 * 1000 * 10;

if (!global.fetch) {
  global.fetch = (url, options) => external_node_fetch_default()(url, {
    highWaterMark: TEN_MEGABYTES,
    ...options
  });
}

if (!global.Headers) {
  global.Headers = external_node_fetch_default.a.Headers;
}

if (!global.Request) {
  global.Request = external_node_fetch_default.a.Request;
}

if (!global.Response) {
  global.Response = external_node_fetch_default.a.Response;
}

if (!global.AbortController) {
  global.AbortController = external_abort_controller_["AbortController"];
}

if (!global.ReadableStream) {
  try {
    global.ReadableStream = es2018_["ReadableStream"];
  } catch (_) {}
}
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(8);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// EXTERNAL MODULE: ./node_modules/destr/dist/index.js
var destr_dist = __webpack_require__(6);
var destr_dist_default = /*#__PURE__*/__webpack_require__.n(destr_dist);

// EXTERNAL MODULE: ./node_modules/ky/index.js
var node_modules_ky = __webpack_require__(24);

// CONCATENATED MODULE: ./.nuxt/http.js




class http_HTTP {
  constructor(defaults, ky = node_modules_ky["a" /* default */]) {
    this._defaults = {
      hooks: {},
      ...defaults
    };
    this._ky = ky;
  }

  getBaseURL() {
    return this._defaults.prefixUrl;
  }

  setBaseURL(baseURL) {
    this._defaults.prefixUrl = baseURL;
  }

  setHeader(name, value) {
    if (!value) {
      delete this._defaults.headers[name];
    } else {
      this._defaults.headers[name] = value;
    }
  }

  setToken(token, type) {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value);
  }

  _hook(name, fn) {
    if (!this._defaults.hooks[name]) {
      this._defaults.hooks[name] = [];
    }

    this._defaults.hooks[name].push(fn);
  }

  onRequest(fn) {
    this._hook('beforeRequest', fn);
  }

  onRetry(fn) {
    this._hook('beforeRetry', fn);
  }

  onResponse(fn) {
    this._hook('afterResponse', fn);
  }

  onError(fn) {
    this._hook('onError', fn);
  }

  create(options) {
    const {
      retry,
      timeout,
      prefixUrl,
      headers
    } = this._defaults;
    return createHttpInstance(external_defu_default()(options, {
      retry,
      timeout,
      prefixUrl,
      headers
    }));
  }

}

for (let method of ['get', 'head', 'delete', 'post', 'put', 'patch']) {
  const hasBody = ['post', 'put', 'patch'].includes(method);

  http_HTTP.prototype[method] = async function (url, arg1, arg2) {
    let options;

    if (!hasBody) {
      options = arg1;
    } else {
      options = arg2 || {};

      if (arg1 !== undefined) {
        if (arg1.constructor === Object || Array.isArray(arg1)) {
          options.json = arg1;
        } else {
          options.body = arg1;
        }
      }
    }

    const _options = { ...this._defaults,
      ...options
    };

    if (/^https?/.test(url)) {
      delete _options.prefixUrl;
    } else if (_options.prefixUrl && typeof url === 'string' && url.startsWith('/')) {
      // Prevents `ky` from throwing "`input` must not begin with a slash when using `prefixUrl`"
      url = url.substr(1);
    }

    try {
      const response = await this._ky[method](url, _options);
      return response;
    } catch (error) {
      // Try to fill error with useful data
      if (error.response) {
        error.statusCode = error.response.status;

        try {
          const text = await error.response.text();

          error.response.text = () => Promise.resolve(text);

          const json = destr_dist_default()(text);

          error.response.json = () => Promise.resolve(json);

          error.response.data = json;
        } catch (_) {}
      } // Call onError hook


      if (_options.hooks.onError) {
        for (const fn of _options.hooks.onError) {
          const res = fn(error);

          if (res !== undefined) {
            return res;
          }
        }
      } // Throw error


      throw error;
    }
  };

  http_HTTP.prototype['$' + method] = function (url, arg1, arg2) {
    return this[method](url, arg1, arg2).then(response => response && response.text ? response.text() : response).then(body => destr_dist_default()(body));
  };
}

const createHttpInstance = options => {
  // Create new HTTP instance
  const http = new http_HTTP(options); // Setup interceptors

  return http;
};

/* harmony default export */ var http = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.http || {}; // prefixUrl

  const prefixUrl =  false ? undefined : runtimeConfig.baseURL || process.env._HTTP_BASE_URL_ || 'http://localhost:3000/';
  const headers = {}; // Defaults

  const defaults = {
    retry: 0,
    timeout:  true ? false : undefined,
    prefixUrl,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    defaults.headers = { ...reqHeaders,
      ...defaults.headers
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    defaults.headers['accept-encoding'] = 'gzip, deflate';
  }

  const http = createHttpInstance(defaults); // Inject http to the context as $http

  ctx.$http = http;
  inject('http', http);
});
// EXTERNAL MODULE: ./node_modules/hookable/dist/hookable.js
var hookable = __webpack_require__(25);
var hookable_default = /*#__PURE__*/__webpack_require__.n(hookable);

// EXTERNAL MODULE: ./node_modules/requrl/dist/requrl.js
var requrl = __webpack_require__(26);
var requrl_default = /*#__PURE__*/__webpack_require__.n(requrl);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/strapi/lib/runtime/utils.js
function getExpirationDate(ms) {
  return new Date(Date.now() + ms);
}
function isExpired(expires) {
  if (!expires) {
    return false;
  }
  return new Date(expires) <= new Date();
}

// CONCATENATED MODULE: ./node_modules/@nuxtjs/strapi/lib/runtime/strapi.js






class strapi_Strapi extends hookable_default.a {
  constructor(ctx, options) {
    super();
    ctx.$config = ctx.$config || {};
    const runtimeConfig = ctx.$config.strapi || {};
    this.$cookies = ctx.app.$cookies;
    this.$http = ctx.$http.create({});
    this.options = options;
    this.state = external_vue_default.a.observable({user: null});
    this.syncToken();
    const url = runtimeConfig.url || this.options.url;
    if ( true && ctx.req && url.startsWith("/")) {
      this.$http.setBaseURL(Object(dist["joinURL"])(requrl_default()(ctx.req), url));
    } else {
      this.$http.setBaseURL(url);
    }
    this.$http.onError((err) => {
      if (!err.response) {
        this.callHook("error", err);
        return;
      }
      const {response: {data: {message: msg}}} = err;
      let message;
      if (Array.isArray(msg)) {
        message = msg[0].messages[0].message;
      } else if (typeof msg === "object" && msg !== null) {
        message = msg.message;
      } else {
        message = msg;
      }
      err.message = message;
      err.original = err.response.data;
      this.callHook("error", err);
    });
  }
  get user() {
    return this.state.user;
  }
  set user(user) {
    external_vue_default.a.set(this.state, "user", user);
  }
  async register(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/local/register", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  async login(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/local", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  forgotPassword(data) {
    this.clearToken();
    return this.$http.$post("/auth/forgot-password", data);
  }
  async resetPassword(data) {
    this.clearToken();
    const {user, jwt} = await this.$http.$post("/auth/reset-password", data);
    this.setToken(jwt);
    await this.setUser(user);
    return {user, jwt};
  }
  sendEmailConfirmation(data) {
    return this.$http.$post("/auth/send-email-confirmation", data);
  }
  async logout() {
    await this.setUser(null);
    this.clearToken();
  }
  async fetchUser() {
    const jwt = this.syncToken();
    if (!jwt) {
      return null;
    }
    try {
      const user = await this.findOne("users", "me");
      await this.setUser(user);
    } catch (e) {
      this.clearToken();
    }
    return this.user;
  }
  async setUser(user) {
    this.user = user;
    await this.callHook("userUpdated", user);
  }
  find(entity, searchParams) {
    return this.$http.$get(`/${entity}`, {searchParams});
  }
  count(entity, searchParams) {
    return this.$http.$get(`/${entity}/count`, {searchParams});
  }
  findOne(entity, id, searchParams) {
    return this.$http.$get(`/${entity}/${id}`, {searchParams});
  }
  create(entity, data) {
    return this.$http.$post(`/${entity}`, data);
  }
  update(entity, id, data) {
    if (typeof id === "object") {
      data = id;
      id = void 0;
    }
    const path = [entity, id].filter(Boolean).join("/");
    return this.$http.$put(`/${path}`, data);
  }
  delete(entity, id) {
    const path = [entity, id].filter(Boolean).join("/");
    return this.$http.$delete(`/${path}`);
  }
  graphql(query) {
    return this.$http.$post("/graphql", query).then((res) => res.data);
  }
  getClientStorage() {
    const storageType = this.options.expires === "session" ? "sessionStorage" : "localStorage";
    if (false) {}
    return null;
  }
  getToken() {
    let token;
    const clientStorage = this.getClientStorage();
    if (clientStorage) {
      const session = destr_dist_default()(clientStorage.getItem(this.options.key));
      if (session && !isExpired(session.expires)) {
        token = session.token;
      }
    }
    if (!token) {
      token = this.$cookies.get(this.options.key);
    }
    return token;
  }
  setToken(token) {
    const expires = this.options.expires === "session" ? void 0 : getExpirationDate(this.options.expires);
    const clientStorage = this.getClientStorage();
    clientStorage && clientStorage.setItem(this.options.key, JSON.stringify({token, expires}));
    this.$cookies.set(this.options.key, token, {
      ...this.options.cookie,
      expires
    });
    this.$http.setToken(token, "Bearer");
  }
  clearToken() {
    this.$http.setToken(false);
    const clientStorage = this.getClientStorage();
    clientStorage && clientStorage.removeItem(this.options.key);
    this.$cookies.remove(this.options.key);
  }
  syncToken(jwt) {
    if (!jwt) {
      jwt = this.getToken();
    }
    if (jwt) {
      this.setToken(jwt);
    } else {
      this.clearToken();
    }
    return jwt;
  }
}

// CONCATENATED MODULE: ./.nuxt/strapi.js


const strapi_options = {
  "url": "https://cms.headofcontent.de",
  "entities": ["Beitrags", "Videos"],
  "key": "strapi_jwt",
  "expires": "session",
  "cookie": {}
};
strapi_options.entities.forEach(entity => {
  let key;
  let type = 'collection';

  if (typeof entity === 'object') {
    key = `$${entity.name}`;
    type = entity.type || 'collection';
    entity = entity.name;
  } else {
    key = `$${entity}`;
  }

  if (strapi_Strapi.prototype.hasOwnProperty(key)) {
    return;
  }

  Object.defineProperty(strapi_Strapi.prototype, key, {
    get() {
      const that = this;
      return {
        single: {
          find(...args) {
            return that.find(entity, ...args);
          },

          update(...args) {
            return that.update(entity, ...args);
          },

          delete(...args) {
            return that.delete(entity, ...args);
          }

        },
        collection: {
          find(...args) {
            return that.find(entity, ...args);
          },

          findOne(...args) {
            return that.findOne(entity, ...args);
          },

          count(...args) {
            return that.count(entity, ...args);
          },

          create(...args) {
            return that.create(entity, ...args);
          },

          update(...args) {
            return that.update(entity, ...args);
          },

          delete(...args) {
            return that.delete(entity, ...args);
          }

        }
      }[type];
    }

  });
});
/* harmony default export */ var _nuxt_strapi = (async function (ctx, inject) {
  const strapi = new strapi_Strapi(ctx, strapi_options);

  if (true) {
    // Check if jwt to get user
    await strapi.fetchUser();
    ctx.beforeNuxtRender(({
      nuxtState
    }) => {
      nuxtState.strapi = strapi.state;
    });
  }

  const {
    nuxtState = {}
  } = ctx || {}; // Client-side hydration

  if (false) {} // SPA mode or fallback


  if (false) {}

  inject('strapi', strapi);
  ctx.$strapi = strapi;
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(7);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(47);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.c22dfb.png",
    "120x120": "/_nuxt/icons/icon_120x120.c22dfb.png",
    "144x144": "/_nuxt/icons/icon_144x144.c22dfb.png",
    "152x152": "/_nuxt/icons/icon_152x152.c22dfb.png",
    "192x192": "/_nuxt/icons/icon_192x192.c22dfb.png",
    "384x384": "/_nuxt/icons/icon_384x384.c22dfb.png",
    "512x512": "/_nuxt/icons/icon_512x512.c22dfb.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.c22dfb.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.c22dfb.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.c22dfb.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.c22dfb.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.c22dfb.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.c22dfb.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.c22dfb.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.c22dfb.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.c22dfb.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.c22dfb.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "vue-loading-skeleton"
var external_vue_loading_skeleton_ = __webpack_require__(28);
var external_vue_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_vue_loading_skeleton_);

// CONCATENATED MODULE: ./plugins/vue-loading-skeleton.js


external_vue_default.a.use(external_vue_loading_skeleton_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./hcaptcha.js (mode: 'all')

 // Source: ./markdownit.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./http.server.js (mode: 'server')

 // Source: ./http.js (mode: 'all')

 // Source: ./strapi.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./workbox.js (mode: 'client')

 // Source: ./pwa/meta.plugin.js (mode: 'all')

 // Source: ./pwa/icon.plugin.js (mode: 'all')

 // Source: ../plugins/vue-loading-skeleton.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Head of Content",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Webseite der unabhänigen Jugendredaktion \"Head of Content\" aus Berlin"
      }, {
        "lang": "de"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "script": [{
        "src": "https:\u002F\u002Fplausible.io\u002Fjs\u002Fplausible.js",
        "data-domain": "headofcontent.de",
        "defer": true
      }, {
        "src": "https:\u002F\u002Fanalytics.headofcontent.de\u002Fjs\u002Fplausible.js",
        "data-domain": "headofcontent.de",
        "defer": true,
        "async": true
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_hcaptcha === 'function') {
    await _nuxt_hcaptcha(app.context, inject);
  }

  if (typeof markdownit === 'function') {
    await markdownit(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if ( true && typeof /* Cannot get final name for export "default" in "./.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/http.server.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof http === 'function') {
    await http(app.context, inject);
  }

  if (typeof _nuxt_strapi === 'function') {
    await _nuxt_strapi(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-loading-skeleton.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-loading-skeleton.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=49361945&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"w-full px-8 text-gray-700 bg-white body-font"},[_vm._ssrNode("<div class=\"container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl\">","</div>",[_c('NuxtLink',{staticClass:"flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0",attrs:{"to":"/"}},[_c('img',{staticClass:"logo mt-1",attrs:{"src":__webpack_require__(40),"alt":"Head of Content"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative flex flex-col md:flex-row\">","</div>",[_vm._ssrNode("<nav class=\"flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0\">","</nav>",[_c('NuxtLink',{staticClass:"mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900",attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900",attrs:{"to":"/videos"}},[_vm._v("Videos")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900",attrs:{"to":"/aktuelles"}},[_vm._v("Aktuelles")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900",attrs:{"to":{ path: '/',hash:'#kontakt'}}},[_vm._v("Kontakt")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end\">","</div>",[_c('NuxtLink',{staticClass:"text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900",attrs:{"to":"/login"}},[_vm._v("\n                  Login\n              ")])],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=49361945&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "31ea35ff"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=a57dc9f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-white"},[_vm._ssrNode("<div class=\"max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8\" data-v-a57dc9f2>","</div>",[_vm._ssrNode("<nav class=\"flex flex-wrap justify-center -mx-5 -my-2\" data-v-a57dc9f2>","</nav>",[_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":{ path: '/',hash:'#ueber-uns'}}},[_vm._v("\n                  Über uns\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":"/videos"}},[_vm._v("\n                  Videos\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":"/aktuelles","href":"#"}},[_vm._v("\n                  Aktuelles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":{ path: '/',hash:'#kontakt'}}},[_vm._v("\n                  Kontakt\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":"/datenschutzerklärung"}},[_vm._v("\n                  Datenschutz\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-5 py-2\" data-v-a57dc9f2>","</div>",[_c('NuxtLink',{staticClass:"text-base leading-6 text-gray-500 hover:text-gray-900",attrs:{"to":"/impressum"}},[_vm._v("\n                  Impressum\n              ")])],1)],2),_vm._ssrNode(" <div class=\"flex justify-center mt-8 space-x-6\" data-v-a57dc9f2><a href=\"https://www.youtube.com/channel/UCmt6Pk-ufnoXl9brisGbtIg\" target=\"_blank\" rel=\"noreferrer\" class=\"text-gray-400 hover:text-gray-500\" data-v-a57dc9f2><span class=\"sr-only\" data-v-a57dc9f2>YouTube</span> <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"26\" height=\"26\" viewBox=\"0 0 350 350\" xml:space=\"preserve\" data-v-a57dc9f2><g id=\"icon\" transform=\"translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\" data-v-a57dc9f2><path d=\"M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\" class=\"icon\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;\" data-v-a57dc9f2></path> <polygon points=\"36,58.5 59.38,45 36,31.5 \" transform=\"  matrix(1 0 0 1 0 0) \" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\" data-v-a57dc9f2></polygon></g></svg></a> <a href=\"https://www.instagram.com/headofcontent_\" target=\"_blank\" rel=\"noreferrer\" class=\"text-gray-400 hover:text-gray-500\" data-v-a57dc9f2><span class=\"sr-only\" data-v-a57dc9f2>Instagram</span> <svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-6 h-6\" data-v-a57dc9f2><path fill-rule=\"evenodd\" d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z\" clip-rule=\"evenodd\" data-v-a57dc9f2></path></svg></a> <a href=\"https://twitter.com/head_of_content\" target=\"_blank\" rel=\"noreferrer\" class=\"text-gray-400 hover:text-gray-500\" data-v-a57dc9f2><span class=\"sr-only\" data-v-a57dc9f2>Twitter</span> <svg aria-hidden=\"true\" fill=\"currentColor\" viewBox=\"0 0 24 24\" class=\"w-6 h-6\" data-v-a57dc9f2><path d=\"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84\" data-v-a57dc9f2></path></svg></a></div> <p class=\"mt-8 text-base leading-6 text-center text-gray-400\" data-v-a57dc9f2><a href=\"https://stark-gemacht.de/de/index.php\" target=\"_blank\" rel=\"noreferrer\" data-v-a57dc9f2>Head of Content wird durch die Jugend-Demokratiefonds Berlin finanziert.</a> <br data-v-a57dc9f2>"+_vm._ssrEscape("\n          © "+_vm._s(new Date().getFullYear())+" Head of Content, All rights reserved.\n      ")+"</p>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=a57dc9f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a57dc9f2",
  "d98fdbec"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map