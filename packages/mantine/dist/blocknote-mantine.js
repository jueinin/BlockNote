import D, { forwardRef as R, createContext as zr, useState as Wr, useRef as ce, useCallback as de, useContext as Br, useEffect as Vr } from "react";
import { assertEmpty as j, isSafari as fe, mergeCSSClasses as Yr } from "@blocknote/core";
import { elementOverflow as Ur, useBlockNoteContext as Kr, ComponentsContext as Gr, BlockNoteViewRaw as Hr } from "@blocknote/react";
import { TextInput as Je, Menu as O, CheckIcon as qe, Group as N, Tabs as X, LoadingOverlay as Jr, Button as U, FileInput as qr, Popover as Xr, PopoverTarget as Zr, PopoverDropdown as Qr, ActionIcon as Xe, Stack as be, Text as Z, Badge as et, Loader as rt, Tooltip as tt, MantineProvider as nt } from "@mantine/core";
import ot from "use-prefers-color-scheme";
import { mergeRefs as ge, useFocusWithin as at, useFocusTrap as it } from "@mantine/hooks";
var ve = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function st() {
  if (We)
    return V;
  We = 1;
  var r = D, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, d, b) {
    var h, w = {}, k = null, K = null;
    b !== void 0 && (k = "" + b), d.key !== void 0 && (k = "" + d.key), d.ref !== void 0 && (K = d.ref);
    for (h in d)
      o.call(d, h) && !u.hasOwnProperty(h) && (w[h] = d[h]);
    if (c && c.defaultProps)
      for (h in d = c.defaultProps, d)
        w[h] === void 0 && (w[h] = d[h]);
    return { $$typeof: n, type: c, key: k, ref: K, props: w, _owner: i.current };
  }
  return V.Fragment = t, V.jsx = f, V.jsxs = f, V;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function lt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var r = D, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), me = Symbol.iterator, nr = "@@iterator";
    function or(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = me && e[me] || e[nr];
      return typeof a == "function" ? a : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
          s[v - 1] = arguments[v];
        ar("error", e, s);
      }
    }
    function ar(e, a, s) {
      {
        var v = L.ReactDebugCurrentFrame, p = v.getStackAddendum();
        p !== "" && (a += "%s", s = s.concat([p]));
        var y = s.map(function(m) {
          return String(m);
        });
        y.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var ir = !1, sr = !1, lr = !1, ur = !1, cr = !1, pe;
    pe = Symbol.for("react.module.reference");
    function dr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || cr || e === i || e === b || e === h || ur || e === K || ir || sr || lr || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === w || e.$$typeof === f || e.$$typeof === c || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function fr(e, a, s) {
      var v = e.displayName;
      if (v)
        return v;
      var p = a.displayName || a.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var a = e;
            return he(a) + ".Consumer";
          case f:
            var s = e;
            return he(s._context) + ".Provider";
          case d:
            return fr(e, e.render, "ForwardRef");
          case w:
            var v = e.displayName || null;
            return v !== null ? v : F(e.type) || "Memo";
          case k: {
            var p = e, y = p._payload, m = p._init;
            try {
              return F(m(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, z = 0, xe, ye, je, Re, Ee, Te, we;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function vr() {
      {
        if (z === 0) {
          xe = console.log, ye = console.info, je = console.warn, Re = console.error, Ee = console.group, Te = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function br() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: xe
            }),
            info: M({}, e, {
              value: ye
            }),
            warn: M({}, e, {
              value: je
            }),
            error: M({}, e, {
              value: Re
            }),
            group: M({}, e, {
              value: Ee
            }),
            groupCollapsed: M({}, e, {
              value: Te
            }),
            groupEnd: M({}, e, {
              value: we
            })
          });
        }
        z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = L.ReactCurrentDispatcher, te;
    function G(e, a, s) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (p) {
            var v = p.stack.trim().match(/\n( *(at )?)/);
            te = v && v[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, H;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new gr();
    }
    function Se(e, a) {
      if (!e || ne)
        return "";
      {
        var s = H.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ne = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = re.current, re.current = null, vr();
      try {
        if (a) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (_) {
              v = _;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (_) {
              v = _;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            v = _;
          }
          e();
        }
      } catch (_) {
        if (_ && v && typeof _.stack == "string") {
          for (var g = _.stack.split(`
`), P = v.stack.split(`
`), E = g.length - 1, T = P.length - 1; E >= 1 && T >= 0 && g[E] !== P[T]; )
            T--;
          for (; E >= 1 && T >= 0; E--, T--)
            if (g[E] !== P[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, T < 0 || g[E] !== P[T]) {
                    var C = `
` + g[E].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (E >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = y, br(), Error.prepareStackTrace = p;
      }
      var $ = e ? e.displayName || e.name : "", I = $ ? G($) : "";
      return typeof e == "function" && H.set(e, I), I;
    }
    function mr(e, a, s) {
      return Se(e, !1);
    }
    function pr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function J(e, a, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, pr(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case b:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return mr(e.render);
          case w:
            return J(e.type, a, s);
          case k: {
            var v = e, p = v._payload, y = v._init;
            try {
              return J(y(p), a, s);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, Pe = {}, _e = L.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var a = e._owner, s = J(e.type, e._source, a ? a.type : null);
        _e.setExtraStackFrame(s);
      } else
        _e.setExtraStackFrame(null);
    }
    function hr(e, a, s, v, p) {
      {
        var y = Function.call.bind(W);
        for (var m in e)
          if (y(e, m)) {
            var g = void 0;
            try {
              if (typeof e[m] != "function") {
                var P = Error((v || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              g = e[m](a, m, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              g = E;
            }
            g && !(g instanceof Error) && (q(p), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, m, typeof g), q(null)), g instanceof Error && !(g.message in Pe) && (Pe[g.message] = !0, q(p), S("Failed %s type: %s", s, g.message), q(null));
          }
      }
    }
    var xr = Array.isArray;
    function oe(e) {
      return xr(e);
    }
    function yr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, s = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function jr(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Oe(e) {
      if (jr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), Ce(e);
    }
    var B = L.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, De, ae;
    ae = {};
    function Er(e) {
      if (W.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Tr(e) {
      if (W.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, a) {
      if (typeof e.ref == "string" && B.current && a && B.current.stateNode !== a) {
        var s = F(B.current.type);
        ae[s] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(B.current.type), e.ref), ae[s] = !0);
      }
    }
    function kr(e, a) {
      {
        var s = function() {
          Fe || (Fe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Sr(e, a) {
      {
        var s = function() {
          De || (De = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Pr = function(e, a, s, v, p, y, m) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function _r(e, a, s, v, p) {
      {
        var y, m = {}, g = null, P = null;
        s !== void 0 && (Oe(s), g = "" + s), Tr(a) && (Oe(a.key), g = "" + a.key), Er(a) && (P = a.ref, wr(a, p));
        for (y in a)
          W.call(a, y) && !Rr.hasOwnProperty(y) && (m[y] = a[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            m[y] === void 0 && (m[y] = E[y]);
        }
        if (g || P) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && kr(m, T), P && Sr(m, T);
        }
        return Pr(e, g, P, p, v, B.current, m);
      }
    }
    var ie = L.ReactCurrentOwner, Ne = L.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var a = e._owner, s = J(e.type, e._source, a ? a.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Me() {
      {
        if (ie.current) {
          var e = F(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Cr(e) {
      {
        if (e !== void 0) {
          var a = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + a + ":" + s + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Or(e) {
      {
        var a = Me();
        if (!a) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (a = `

Check the top-level render call using <` + s + ">.");
        }
        return a;
      }
    }
    function Le(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Or(a);
        if (Ie[s])
          return;
        Ie[s] = !0;
        var v = "";
        e && e._owner && e._owner !== ie.current && (v = " It was passed a child from " + F(e._owner.type) + "."), A(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), A(null);
      }
    }
    function Ae(e, a) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            le(v) && Le(v, a);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = or(e);
          if (typeof p == "function" && p !== e.entries)
            for (var y = p.call(e), m; !(m = y.next()).done; )
              le(m.value) && Le(m.value, a);
        }
      }
    }
    function Fr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var s;
        if (typeof a == "function")
          s = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === w))
          s = a.propTypes;
        else
          return;
        if (s) {
          var v = F(a);
          hr(s, e.props, "prop", v, e);
        } else if (a.PropTypes !== void 0 && !se) {
          se = !0;
          var p = F(a);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(e) {
      {
        for (var a = Object.keys(e.props), s = 0; s < a.length; s++) {
          var v = a[s];
          if (v !== "children" && v !== "key") {
            A(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var $e = {};
    function ze(e, a, s, v, p, y) {
      {
        var m = dr(e);
        if (!m) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Cr(p);
          P ? g += P : g += Me();
          var E;
          e === null ? E = "null" : oe(e) ? E = "array" : e !== void 0 && e.$$typeof === n ? (E = "<" + (F(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, g);
        }
        var T = _r(e, a, s, p, y);
        if (T == null)
          return T;
        if (m) {
          var C = a.children;
          if (C !== void 0)
            if (v)
              if (oe(C)) {
                for (var $ = 0; $ < C.length; $++)
                  Ae(C[$], e);
                Object.freeze && Object.freeze(C);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(C, e);
        }
        if (W.call(a, "key")) {
          var I = F(e), _ = Object.keys(a).filter(function($r) {
            return $r !== "key";
          }), ue = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[I + ue]) {
            var Ar = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, I, Ar, I), $e[I + ue] = !0;
          }
        }
        return e === o ? Dr(T) : Fr(T), T;
      }
    }
    function Nr(e, a, s) {
      return ze(e, a, s, !0);
    }
    function Mr(e, a, s) {
      return ze(e, a, s, !1);
    }
    var Ir = Mr, Lr = Nr;
    Y.Fragment = o, Y.jsx = Ir, Y.jsxs = Lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? ve.exports = st() : ve.exports = lt();
var l = ve.exports;
const Ze = (r, n, t = !1) => {
  const o = [];
  function i(u, f = "--bn") {
    for (const c in u) {
      const d = c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), b = `${f}-${d}`;
      typeof u[c] != "object" ? (typeof u[c] == "number" && (u[c] = `${u[c]}px`), t ? n.style.removeProperty(b) : n.style.setProperty(b, u[c].toString())) : i(u[c], b);
    }
  }
  return i(r), o;
}, Ve = (r, n) => Ze(r, n), ut = {
  colors: {
    editor: {
      text: void 0,
      background: void 0
    },
    menu: {
      text: void 0,
      background: void 0
    },
    tooltip: {
      text: void 0,
      background: void 0
    },
    hovered: {
      text: void 0,
      background: void 0
    },
    selected: {
      text: void 0,
      background: void 0
    },
    disabled: {
      text: void 0,
      background: void 0
    },
    shadow: void 0,
    border: void 0,
    sideMenu: void 0,
    highlights: {
      gray: {
        text: void 0,
        background: void 0
      },
      brown: {
        text: void 0,
        background: void 0
      },
      red: {
        text: void 0,
        background: void 0
      },
      orange: {
        text: void 0,
        background: void 0
      },
      yellow: {
        text: void 0,
        background: void 0
      },
      green: {
        text: void 0,
        background: void 0
      },
      blue: {
        text: void 0,
        background: void 0
      },
      purple: {
        text: void 0,
        background: void 0
      },
      pink: {
        text: void 0,
        background: void 0
      }
    }
  },
  borderRadius: void 0,
  fontFamily: void 0
}, ct = (r) => Ze(ut, r, !0), dt = R((r, n) => {
  const {
    className: t,
    name: o,
    label: i,
    icon: u,
    value: f,
    autoFocus: c,
    placeholder: d,
    onKeyDown: b,
    onChange: h,
    onSubmit: w,
    ...k
  } = r;
  return j(k), /* @__PURE__ */ l.jsx(
    Je,
    {
      size: "xs",
      className: t,
      ref: n,
      name: o,
      label: i,
      leftSection: u,
      value: f,
      autoFocus: c,
      "data-autofocus": c ? "true" : void 0,
      placeholder: d,
      onKeyDown: b,
      onChange: h,
      onSubmit: w
    }
  );
});
var Qe = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ye = D.createContext && /* @__PURE__ */ D.createContext(Qe), ft = ["attr", "size", "title"];
function vt(r, n) {
  if (r == null)
    return {};
  var t = bt(r, n), o, i;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (i = 0; i < u.length; i++)
      o = u[i], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (t[o] = r[o]);
  }
  return t;
}
function bt(r, n) {
  if (r == null)
    return {};
  var t = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (n.indexOf(o) >= 0)
        continue;
      t[o] = r[o];
    }
  return t;
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(r) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    }
    return r;
  }, Q.apply(this, arguments);
}
function Ue(r, n) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    n && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ee(r) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ue(Object(t), !0).forEach(function(o) {
      gt(r, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ue(Object(t)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return r;
}
function gt(r, n, t) {
  return n = mt(n), n in r ? Object.defineProperty(r, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = t, r;
}
function mt(r) {
  var n = pt(r, "string");
  return typeof n == "symbol" ? n : n + "";
}
function pt(r, n) {
  if (typeof r != "object" || !r)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(r, n || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(r);
}
function er(r) {
  return r && r.map((n, t) => /* @__PURE__ */ D.createElement(n.tag, ee({
    key: t
  }, n.attr), er(n.child)));
}
function rr(r) {
  return (n) => /* @__PURE__ */ D.createElement(ht, Q({
    attr: ee({}, r.attr)
  }, n), er(r.child));
}
function ht(r) {
  var n = (t) => {
    var {
      attr: o,
      size: i,
      title: u
    } = r, f = vt(r, ft), c = i || t.size || "1em", d;
    return t.className && (d = t.className), r.className && (d = (d ? d + " " : "") + r.className), /* @__PURE__ */ D.createElement("svg", Q({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, o, f, {
      className: d,
      style: ee(ee({
        color: r.color || t.color
      }, t.style), r.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && /* @__PURE__ */ D.createElement("title", null, u), r.children);
  };
  return Ye !== void 0 ? /* @__PURE__ */ D.createElement(Ye.Consumer, null, (t) => n(t)) : n(Qe);
}
function xt(r) {
  return rr({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }, child: [] }] })(r);
}
function yt(r) {
  return rr({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }, child: [] }] })(r);
}
const tr = zr(void 0), jt = R((r, n) => {
  const {
    children: t,
    onOpenChange: o,
    position: i,
    sub: u,
    // not used
    ...f
  } = r;
  j(f);
  const [c, d] = Wr(!1), b = ce(null), h = ce(), w = de(() => {
    h.current && clearTimeout(h.current), h.current = setTimeout(() => {
      d(!1);
    }, 250);
  }, []), k = de(() => {
    h.current && clearTimeout(h.current), d(!0);
  }, []);
  return /* @__PURE__ */ l.jsx(
    tr.Provider,
    {
      value: {
        onMenuMouseOver: k,
        onMenuMouseLeave: w
      },
      children: /* @__PURE__ */ l.jsx(
        O.Item,
        {
          className: "bn-menu-item bn-mt-sub-menu-item",
          ref: ge(n, b),
          onMouseOver: k,
          onMouseLeave: w,
          children: /* @__PURE__ */ l.jsx(
            O,
            {
              portalProps: {
                target: b.current ? b.current.parentElement : void 0
              },
              middlewares: { flip: !0, shift: !0, inline: !1, size: !0 },
              trigger: "hover",
              opened: c,
              onClose: () => o == null ? void 0 : o(!1),
              onOpen: () => o == null ? void 0 : o(!0),
              position: i,
              children: t
            }
          )
        }
      )
    }
  );
}), Rt = (r) => {
  const { children: n, onOpenChange: t, position: o, sub: i, ...u } = r;
  return j(u), i ? /* @__PURE__ */ l.jsx(jt, { ...r }) : /* @__PURE__ */ l.jsx(
    O,
    {
      withinPortal: !1,
      middlewares: { flip: !0, shift: !0, inline: !1, size: !0 },
      onClose: () => t == null ? void 0 : t(!1),
      onOpen: () => t == null ? void 0 : t(!0),
      position: o,
      children: n
    }
  );
}, Et = R((r, n) => {
  const { className: t, children: o, icon: i, checked: u, subTrigger: f, onClick: c, ...d } = r;
  return j(d, !1), f ? /* @__PURE__ */ l.jsxs("div", { ref: n, ...d, children: [
    o,
    /* @__PURE__ */ l.jsx(yt, { size: 15 })
  ] }) : /* @__PURE__ */ l.jsx(
    O.Item,
    {
      className: t,
      ref: n,
      leftSection: i,
      rightSection: u ? /* @__PURE__ */ l.jsx(qe, { size: 10 }) : u === !1 ? /* @__PURE__ */ l.jsx("div", { className: "bn-tick-space" }) : null,
      onClick: c,
      ...d,
      children: o
    }
  );
}), Tt = (r) => {
  const {
    children: n,
    sub: t,
    // unused
    ...o
  } = r;
  return j(o), /* @__PURE__ */ l.jsx(O.Target, { children: n });
}, wt = R((r, n) => {
  const {
    className: t,
    children: o,
    sub: i,
    //unused
    ...u
  } = r;
  j(u);
  const f = Br(tr);
  return /* @__PURE__ */ l.jsx(
    O.Dropdown,
    {
      className: t,
      ref: n,
      onMouseOver: f == null ? void 0 : f.onMenuMouseOver,
      onMouseLeave: f == null ? void 0 : f.onMenuMouseLeave,
      children: o
    }
  );
}), kt = R((r, n) => {
  const { className: t, ...o } = r;
  return j(o), /* @__PURE__ */ l.jsx(O.Divider, { className: t, ref: n });
}), St = R((r, n) => {
  const { className: t, children: o, ...i } = r;
  return j(i), /* @__PURE__ */ l.jsx(O.Label, { className: t, ref: n, children: o });
}), Pt = R((r, n) => {
  const {
    className: t,
    tabs: o,
    defaultOpenTab: i,
    openTab: u,
    setOpenTab: f,
    loading: c,
    ...d
  } = r;
  return j(d), /* @__PURE__ */ l.jsx(N, { className: t, ref: n, children: /* @__PURE__ */ l.jsxs(
    X,
    {
      value: u,
      defaultValue: i,
      onChange: f,
      children: [
        c && /* @__PURE__ */ l.jsx(Jr, { visible: c }),
        /* @__PURE__ */ l.jsx(X.List, { children: o.map((b) => /* @__PURE__ */ l.jsx(
          X.Tab,
          {
            "data-test": `${b.name.toLowerCase()}-tab`,
            value: b.name,
            children: b.name
          },
          b.name
        )) }),
        o.map((b) => /* @__PURE__ */ l.jsx(X.Panel, { value: b.name, children: b.tabPanel }, b.name))
      ]
    }
  ) });
}), _t = R((r, n) => {
  const { className: t, children: o, onClick: i, label: u, ...f } = r;
  return j(f), /* @__PURE__ */ l.jsx(
    U,
    {
      size: "xs",
      "aria-label": u,
      className: t,
      ref: n,
      onClick: i,
      ...f,
      children: o
    }
  );
}), Ct = R((r, n) => {
  const { className: t, accept: o, value: i, placeholder: u, onChange: f, ...c } = r;
  return j(c), /* @__PURE__ */ l.jsx(
    qr,
    {
      size: "xs",
      className: t,
      ref: n,
      accept: o,
      value: i,
      placeholder: u,
      onChange: f,
      ...c
    }
  );
}), Ot = R((r, n) => {
  const { className: t, children: o, ...i } = r;
  return j(i), /* @__PURE__ */ l.jsx("div", { className: t, ref: n, children: o });
}), Ft = R((r, n) => {
  const { className: t, value: o, placeholder: i, onKeyDown: u, onChange: f, ...c } = r;
  return j(c), /* @__PURE__ */ l.jsx(
    Je,
    {
      size: "xs",
      "data-test": "embed-input",
      className: t,
      ref: n,
      value: o,
      placeholder: i,
      onKeyDown: u,
      onChange: f
    }
  );
}), Dt = (r) => {
  const { children: n, opened: t, position: o, ...i } = r;
  return j(i), /* @__PURE__ */ l.jsx(
    Xr,
    {
      withinPortal: !1,
      zIndex: 1e4,
      opened: t,
      position: o,
      children: n
    }
  );
}, Nt = (r) => {
  const { children: n, ...t } = r;
  return j(t), /* @__PURE__ */ l.jsx(Zr, { children: n });
}, Mt = R((r, n) => {
  const {
    className: t,
    children: o,
    variant: i,
    // unused
    ...u
  } = r;
  return j(u), /* @__PURE__ */ l.jsx(Qr, { className: t, ref: n, children: o });
}), It = R((r, n) => {
  const { className: t, children: o, ...i } = r;
  return j(i, !1), /* @__PURE__ */ l.jsx(
    N,
    {
      align: "center",
      gap: 0,
      className: t,
      ref: n,
      ...i,
      children: o
    }
  );
}), Lt = R((r, n) => {
  const {
    className: t,
    children: o,
    icon: i,
    onClick: u,
    onDragEnd: f,
    onDragStart: c,
    draggable: d,
    label: b,
    ...h
  } = r;
  return j(h, !1), i ? /* @__PURE__ */ l.jsx(
    Xe,
    {
      size: 24,
      className: t,
      ref: n,
      onClick: u,
      onDragEnd: f,
      onDragStart: c,
      draggable: d,
      "aria-label": b,
      ...h,
      children: i
    }
  ) : /* @__PURE__ */ l.jsx(
    U,
    {
      className: t,
      ref: n,
      onClick: u,
      onDragEnd: f,
      onDragStart: c,
      draggable: d,
      "aria-label": b,
      ...h,
      children: o
    }
  );
}), At = R((r, n) => {
  const { className: t, children: o, id: i, ...u } = r;
  return j(u), /* @__PURE__ */ l.jsx(
    be,
    {
      gap: 0,
      className: t,
      ref: n,
      id: i,
      role: "listbox",
      children: o
    }
  );
}), $t = R((r, n) => {
  const { className: t, children: o, ...i } = r;
  return j(i), /* @__PURE__ */ l.jsx(N, { className: t, ref: n, children: /* @__PURE__ */ l.jsx(N, { className: "bn-mt-suggestion-menu-item-title", children: o }) });
}), zt = R((r, n) => {
  const { className: t, isSelected: o, onClick: i, item: u, id: f, ...c } = r;
  j(c);
  const d = ce(null);
  return Vr(() => {
    if (!d.current || !o)
      return;
    const b = Ur(d.current);
    b === "top" ? d.current.scrollIntoView(!0) : b === "bottom" && d.current.scrollIntoView(!1);
  }, [o]), /* @__PURE__ */ l.jsxs(
    N,
    {
      gap: 0,
      className: t,
      ref: ge(n, d),
      id: f,
      role: "option",
      onClick: i,
      "aria-selected": o || void 0,
      children: [
        u.icon && /* @__PURE__ */ l.jsx(
          N,
          {
            className: "bn-mt-suggestion-menu-item-section",
            "data-position": "left",
            children: u.icon
          }
        ),
        /* @__PURE__ */ l.jsxs(be, { gap: 0, className: "bn-mt-suggestion-menu-item-body", children: [
          /* @__PURE__ */ l.jsx(Z, { className: "bn-mt-suggestion-menu-item-title", children: u.title }),
          /* @__PURE__ */ l.jsx(Z, { className: "bn-mt-suggestion-menu-item-subtitle", children: u.subtext })
        ] }),
        u.badge && /* @__PURE__ */ l.jsx(
          N,
          {
            "data-position": "right",
            className: "bn-mt-suggestion-menu-item-section",
            children: /* @__PURE__ */ l.jsx(et, { size: "xs", children: u.badge })
          }
        )
      ]
    }
  );
}), Wt = R((r, n) => {
  const { className: t, children: o, ...i } = r;
  return j(i), /* @__PURE__ */ l.jsx(N, { className: t, ref: n, children: o });
}), Bt = R((r, n) => {
  const {
    className: t,
    children: o,
    // unused, using "dots" instead
    ...i
  } = r;
  return j(i), /* @__PURE__ */ l.jsx(rt, { className: t, type: "dots", ref: n });
}), Vt = R((r, n) => {
  const {
    className: t,
    children: o,
    draggable: i,
    onDragStart: u,
    onDragEnd: f,
    style: c,
    label: d,
    ...b
  } = r;
  return j(b, !1), /* @__PURE__ */ l.jsx(
    U,
    {
      className: t,
      ref: n,
      "aria-label": d,
      draggable: i,
      onDragStart: u,
      onDragEnd: f,
      style: c,
      ...b,
      children: o
    }
  );
}), Ke = R(
  (r, n) => {
    const { className: t, children: o, onMouseEnter: i, onMouseLeave: u, ...f } = r;
    j(f);
    const { ref: c, focused: d } = at(), b = it(d), h = ge(n, c, b);
    return /* @__PURE__ */ l.jsx(
      N,
      {
        className: t,
        ref: h,
        role: "toolbar",
        onMouseEnter: i,
        onMouseLeave: u,
        children: o
      }
    );
  }
), Yt = (r) => /* @__PURE__ */ l.jsxs(be, { gap: 0, className: "bn-tooltip", children: [
  /* @__PURE__ */ l.jsx(Z, { size: "sm", children: r.mainTooltip }),
  r.secondaryTooltip && /* @__PURE__ */ l.jsx(Z, { size: "xs", children: r.secondaryTooltip })
] }), Ge = R(
  (r, n) => {
    const {
      className: t,
      children: o,
      mainTooltip: i,
      secondaryTooltip: u,
      icon: f,
      isSelected: c,
      isDisabled: d,
      onClick: b,
      label: h,
      ...w
    } = r;
    return j(w, !1), /* @__PURE__ */ l.jsx(
      tt,
      {
        withinPortal: !1,
        label: /* @__PURE__ */ l.jsx(
          Yt,
          {
            mainTooltip: i,
            secondaryTooltip: u
          }
        ),
        children: o ? /* @__PURE__ */ l.jsx(
          U,
          {
            "aria-label": h,
            className: t,
            onMouseDown: (k) => {
              fe() && k.currentTarget.focus();
            },
            onClick: b,
            "aria-pressed": c,
            "data-selected": c || void 0,
            "data-test": i.slice(0, 1).toLowerCase() + i.replace(/\s+/g, "").slice(1),
            size: "xs",
            disabled: d || !1,
            ref: n,
            ...w,
            children: o
          }
        ) : /* @__PURE__ */ l.jsx(
          Xe,
          {
            className: t,
            "aria-label": h,
            onMouseDown: (k) => {
              fe() && k.currentTarget.focus();
            },
            onClick: b,
            "aria-pressed": c,
            "data-selected": c || void 0,
            "data-test": i.slice(0, 1).toLowerCase() + i.replace(/\s+/g, "").slice(1),
            size: 30,
            disabled: d || !1,
            ref: n,
            ...w,
            children: f
          }
        )
      }
    );
  }
), Ut = R((r, n) => {
  const { className: t, items: o, isDisabled: i, ...u } = r;
  j(u);
  const f = o.filter((c) => c.isSelected)[0];
  return f ? /* @__PURE__ */ l.jsxs(
    O,
    {
      withinPortal: !1,
      transitionProps: {
        exitDuration: 0
      },
      disabled: i,
      middlewares: { flip: !0, shift: !0, inline: !1, size: !0 },
      children: [
        /* @__PURE__ */ l.jsx(O.Target, { children: /* @__PURE__ */ l.jsx(
          U,
          {
            onMouseDown: (c) => {
              fe() && c.currentTarget.focus();
            },
            leftSection: f.icon,
            rightSection: /* @__PURE__ */ l.jsx(xt, {}),
            size: "xs",
            variant: "subtle",
            disabled: i,
            children: f.text
          }
        ) }),
        /* @__PURE__ */ l.jsx(O.Dropdown, { className: t, ref: n, children: o.map((c) => /* @__PURE__ */ l.jsx(
          O.Item,
          {
            onClick: c.onClick,
            leftSection: c.icon,
            rightSection: c.isSelected ? /* @__PURE__ */ l.jsx(qe, { size: 10, className: "bn-tick-icon" }) : (
              // Ensures space for tick even if item isn't currently selected.
              /* @__PURE__ */ l.jsx("div", { className: "bn-tick-space" })
            ),
            disabled: c.isDisabled,
            children: c.text
          },
          c.text
        )) })
      ]
    }
  ) : null;
});
const x = [
  "#FFFFFF",
  "#EFEFEF",
  "#CFCFCF",
  "#AFAFAF",
  "#7F7F7F",
  "#3F3F3F",
  "#1F1F1F",
  "#161616",
  "#0F0F0F",
  "#000000"
], He = {
  colors: {
    editor: {
      text: x[5],
      background: x[0]
    },
    menu: {
      text: x[5],
      background: x[0]
    },
    tooltip: {
      text: x[5],
      background: x[1]
    },
    hovered: {
      text: x[5],
      background: x[1]
    },
    selected: {
      text: x[0],
      background: x[5]
    },
    disabled: {
      text: x[3],
      background: x[1]
    },
    shadow: x[2],
    border: x[1],
    sideMenu: x[2],
    highlights: {
      gray: {
        text: "#9b9a97",
        background: "#ebeced"
      },
      brown: {
        text: "#64473a",
        background: "#e9e5e3"
      },
      red: {
        text: "#e03e3e",
        background: "#fbe4e4"
      },
      orange: {
        text: "#d9730d",
        background: "#f6e9d9"
      },
      yellow: {
        text: "#dfab01",
        background: "#fbf3db"
      },
      green: {
        text: "#4d6461",
        background: "#ddedea"
      },
      blue: {
        text: "#0b6e99",
        background: "#ddebf1"
      },
      purple: {
        text: "#6940a5",
        background: "#eae4f2"
      },
      pink: {
        text: "#ad1a72",
        background: "#f4dfeb"
      }
    }
  },
  borderRadius: 6,
  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Open Sans", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
}, en = {
  colors: {
    editor: {
      text: x[2],
      background: x[6]
    },
    menu: {
      text: x[2],
      background: x[6]
    },
    tooltip: {
      text: x[2],
      background: x[7]
    },
    hovered: {
      text: x[2],
      background: x[7]
    },
    selected: {
      text: x[2],
      background: x[8]
    },
    disabled: {
      text: x[5],
      background: x[7]
    },
    shadow: x[8],
    border: x[7],
    sideMenu: x[4],
    highlights: {
      gray: {
        text: "#bebdb8",
        background: "#9b9a97"
      },
      brown: {
        text: "#8e6552",
        background: "#64473a"
      },
      red: {
        text: "#ec4040",
        background: "#be3434"
      },
      orange: {
        text: "#e3790d",
        background: "#b7600a"
      },
      yellow: {
        text: "#dfab01",
        background: "#b58b00"
      },
      green: {
        text: "#6b8b87",
        background: "#4d6461"
      },
      blue: {
        text: "#0e87bc",
        background: "#0b6e99"
      },
      purple: {
        text: "#8552d7",
        background: "#6940a5"
      },
      pink: {
        text: "#da208f",
        background: "#ad1a72"
      }
    }
  },
  borderRadius: He.borderRadius,
  fontFamily: He.fontFamily
}, Kt = {
  FormattingToolbar: {
    Root: Ke,
    Button: Ge,
    Select: Ut
  },
  FilePanel: {
    Root: Pt,
    Button: _t,
    FileInput: Ct,
    TabPanel: Ot,
    TextInput: Ft
  },
  LinkToolbar: {
    Root: Ke,
    Button: Ge
  },
  SideMenu: {
    Root: It,
    Button: Lt
  },
  SuggestionMenu: {
    Root: At,
    Item: zt,
    EmptyItem: $t,
    Label: Wt,
    Loader: Bt
  },
  TableHandle: {
    Root: Vt
  },
  Generic: {
    Form: {
      Root: (r) => /* @__PURE__ */ l.jsx("div", { children: r.children }),
      TextInput: dt
    },
    Menu: {
      Root: Rt,
      Trigger: Tt,
      Dropdown: wt,
      Divider: kt,
      Label: St,
      Item: Et
    },
    Popover: {
      Root: Dt,
      Trigger: Nt,
      Content: Mt
    }
  }
}, Gt = {
  // Removes button press effect
  activeClassName: ""
}, rn = (r) => {
  const { className: n, theme: t, ...o } = r, i = Kr(), u = ot(), f = (i == null ? void 0 : i.colorSchemePreference) || u, c = de(
    (d) => {
      if (d && (ct(d), typeof t == "object")) {
        if ("light" in t && "dark" in t) {
          Ve(
            t[f === "dark" ? "dark" : "light"],
            d
          );
          return;
        }
        Ve(t, d);
        return;
      }
    },
    [f, t]
  );
  return /* @__PURE__ */ l.jsx(Gr.Provider, { value: Kt, children: /* @__PURE__ */ l.jsx(
    nt,
    {
      theme: Gt,
      cssVariablesSelector: ".bn-mantine",
      getRootElement: () => {
      },
      children: /* @__PURE__ */ l.jsx(
        Hr,
        {
          className: Yr("bn-mantine", n || ""),
          theme: typeof t == "object" ? void 0 : t,
          ...o,
          ref: c
        }
      )
    }
  ) });
};
export {
  rn as BlockNoteView,
  Ve as applyBlockNoteCSSVariablesFromTheme,
  Kt as components,
  en as darkDefaultTheme,
  x as defaultColorScheme,
  He as lightDefaultTheme,
  ct as removeBlockNoteCSSVariables
};
//# sourceMappingURL=blocknote-mantine.js.map
