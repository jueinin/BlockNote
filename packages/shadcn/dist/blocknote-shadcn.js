import * as p from "react";
import ze, { createContext as ot, useContext as at, useMemo as We, forwardRef as N, useRef as st, useEffect as it } from "react";
import { assertEmpty as C, mergeCSSClasses as lt } from "@blocknote/core";
import { elementOverflow as dt, mergeRefs as ct, ComponentsContext as bt, BlockNoteViewRaw as ut } from "@blocknote/react";
import { cva as Q } from "class-variance-authority";
import { clsx as ft } from "clsx";
import { extendTailwindMerge as mt } from "tailwind-merge";
import { Slot as Ye } from "@radix-ui/react-slot";
import * as T from "@radix-ui/react-dropdown-menu";
import { ChevronRight as Ue, Check as Ke, Circle as pt, ChevronDown as Je, ChevronUp as gt } from "lucide-react";
import { FormProvider as vt, useFormContext as xt, useForm as ht } from "react-hook-form";
import * as qe from "@radix-ui/react-label";
import * as ee from "@radix-ui/react-popover";
import * as D from "@radix-ui/react-select";
import * as B from "@radix-ui/react-tabs";
import * as Ge from "@radix-ui/react-toggle";
import * as q from "@radix-ui/react-tooltip";
var be = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function yt() {
  if (Be)
    return K;
  Be = 1;
  var r = ze, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(x, m, u) {
    var g, S = {}, _ = null, V = null;
    u !== void 0 && (_ = "" + u), m.key !== void 0 && (_ = "" + m.key), m.ref !== void 0 && (V = m.ref);
    for (g in m)
      a.call(m, g) && !d.hasOwnProperty(g) && (S[g] = m[g]);
    if (x && x.defaultProps)
      for (g in m = x.defaultProps, m)
        S[g] === void 0 && (S[g] = m[g]);
    return { $$typeof: t, type: x, key: _, ref: V, props: S, _owner: i.current };
  }
  return K.Fragment = n, K.jsx = c, K.jsxs = c, K;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function wt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var r = ze, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), x = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), fe = Symbol.iterator, wn = "@@iterator";
    function Cn(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = fe && e[fe] || e[wn];
      return typeof s == "function" ? s : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
          l[f - 1] = arguments[f];
        Nn("error", e, l);
      }
    }
    function Nn(e, s, l) {
      {
        var f = A.ReactDebugCurrentFrame, y = f.getStackAddendum();
        y !== "" && (s += "%s", l = l.concat([y]));
        var w = l.map(function(h) {
          return String(h);
        });
        w.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var jn = !1, Tn = !1, Rn = !1, Sn = !1, En = !1, me;
    me = Symbol.for("react.module.reference");
    function Dn(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === d || En || e === i || e === u || e === g || Sn || e === V || jn || Tn || Rn || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === S || e.$$typeof === c || e.$$typeof === x || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function _n(e, s, l) {
      var f = e.displayName;
      if (f)
        return f;
      var y = s.displayName || s.name || "";
      return y !== "" ? l + "(" + y + ")" : l;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case d:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var s = e;
            return pe(s) + ".Consumer";
          case c:
            var l = e;
            return pe(l._context) + ".Provider";
          case m:
            return _n(e, e.render, "ForwardRef");
          case S:
            var f = e.displayName || null;
            return f !== null ? f : F(e.type) || "Memo";
          case _: {
            var y = e, w = y._payload, h = y._init;
            try {
              return F(h(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, W = 0, ge, ve, xe, he, ye, we, Ce;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function Pn() {
      {
        if (W === 0) {
          ge = console.log, ve = console.info, xe = console.warn, he = console.error, ye = console.group, we = console.groupCollapsed, Ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
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
        W++;
      }
    }
    function In() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ge
            }),
            info: O({}, e, {
              value: ve
            }),
            warn: O({}, e, {
              value: xe
            }),
            error: O({}, e, {
              value: he
            }),
            group: O({}, e, {
              value: ye
            }),
            groupCollapsed: O({}, e, {
              value: we
            }),
            groupEnd: O({}, e, {
              value: Ce
            })
          });
        }
        W < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = A.ReactCurrentDispatcher, re;
    function G(e, s, l) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (y) {
            var f = y.stack.trim().match(/\n( *(at )?)/);
            re = f && f[1] || "";
          }
        return `
` + re + e;
      }
    }
    var oe = !1, H;
    {
      var Mn = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Mn();
    }
    function je(e, s) {
      if (!e || oe)
        return "";
      {
        var l = H.get(e);
        if (l !== void 0)
          return l;
      }
      var f;
      oe = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = te.current, te.current = null, Pn();
      try {
        if (s) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (M) {
              f = M;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (M) {
              f = M;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            f = M;
          }
          e();
        }
      } catch (M) {
        if (M && f && typeof M.stack == "string") {
          for (var v = M.stack.split(`
`), I = f.stack.split(`
`), j = v.length - 1, E = I.length - 1; j >= 1 && E >= 0 && v[j] !== I[E]; )
            E--;
          for (; j >= 1 && E >= 0; j--, E--)
            if (v[j] !== I[E]) {
              if (j !== 1 || E !== 1)
                do
                  if (j--, E--, E < 0 || v[j] !== I[E]) {
                    var k = `
` + v[j].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, k), k;
                  }
                while (j >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        oe = !1, te.current = w, In(), Error.prepareStackTrace = y;
      }
      var z = e ? e.displayName || e.name : "", L = z ? G(z) : "";
      return typeof e == "function" && H.set(e, L), L;
    }
    function kn(e, s, l) {
      return je(e, !1);
    }
    function Fn(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function X(e, s, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Fn(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case u:
          return G("Suspense");
        case g:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return kn(e.render);
          case S:
            return X(e.type, s, l);
          case _: {
            var f = e, y = f._payload, w = f._init;
            try {
              return X(w(y), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Te = {}, Re = A.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var s = e._owner, l = X(e.type, e._source, s ? s.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    function On(e, s, l, f, y) {
      {
        var w = Function.call.bind(Y);
        for (var h in e)
          if (w(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var I = Error((f || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              v = e[h](s, h, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              v = j;
            }
            v && !(v instanceof Error) && (Z(y), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, h, typeof v), Z(null)), v instanceof Error && !(v.message in Te) && (Te[v.message] = !0, Z(y), P("Failed %s type: %s", l, v.message), Z(null));
          }
      }
    }
    var Ln = Array.isArray;
    function ae(e) {
      return Ln(e);
    }
    function Bn(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Vn(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ee(e) {
      if (Vn(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), Se(e);
    }
    var U = A.ReactCurrentOwner, An = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, _e, se;
    se = {};
    function $n(e) {
      if (Y.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function zn(e) {
      if (Y.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Wn(e, s) {
      if (typeof e.ref == "string" && U.current && s && U.current.stateNode !== s) {
        var l = F(U.current.type);
        se[l] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(U.current.type), e.ref), se[l] = !0);
      }
    }
    function Yn(e, s) {
      {
        var l = function() {
          De || (De = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Un(e, s) {
      {
        var l = function() {
          _e || (_e = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Kn = function(e, s, l, f, y, w, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: l,
        props: h,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Jn(e, s, l, f, y) {
      {
        var w, h = {}, v = null, I = null;
        l !== void 0 && (Ee(l), v = "" + l), zn(s) && (Ee(s.key), v = "" + s.key), $n(s) && (I = s.ref, Wn(s, y));
        for (w in s)
          Y.call(s, w) && !An.hasOwnProperty(w) && (h[w] = s[w]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (w in j)
            h[w] === void 0 && (h[w] = j[w]);
        }
        if (v || I) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && Yn(h, E), I && Un(h, E);
        }
        return Kn(e, v, I, y, f, U.current, h);
      }
    }
    var ie = A.ReactCurrentOwner, Pe = A.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var s = e._owner, l = X(e.type, e._source, s ? s.type : null);
        Pe.setExtraStackFrame(l);
      } else
        Pe.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ie() {
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
    function qn(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var Me = {};
    function Gn(e) {
      {
        var s = Ie();
        if (!s) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function ke(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = Gn(s);
        if (Me[l])
          return;
        Me[l] = !0;
        var f = "";
        e && e._owner && e._owner !== ie.current && (f = " It was passed a child from " + F(e._owner.type) + "."), $(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, f), $(null);
      }
    }
    function Fe(e, s) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var l = 0; l < e.length; l++) {
            var f = e[l];
            de(f) && ke(f, s);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = Cn(e);
          if (typeof y == "function" && y !== e.entries)
            for (var w = y.call(e), h; !(h = w.next()).done; )
              de(h.value) && ke(h.value, s);
        }
      }
    }
    function Hn(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === S))
          l = s.propTypes;
        else
          return;
        if (l) {
          var f = F(s);
          On(l, e.props, "prop", f, e);
        } else if (s.PropTypes !== void 0 && !le) {
          le = !0;
          var y = F(s);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xn(e) {
      {
        for (var s = Object.keys(e.props), l = 0; l < s.length; l++) {
          var f = s[l];
          if (f !== "children" && f !== "key") {
            $(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Oe = {};
    function Le(e, s, l, f, y, w) {
      {
        var h = Dn(e);
        if (!h) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = qn(y);
          I ? v += I : v += Ie();
          var j;
          e === null ? j = "null" : ae(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (F(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, v);
        }
        var E = Jn(e, s, l, y, w);
        if (E == null)
          return E;
        if (h) {
          var k = s.children;
          if (k !== void 0)
            if (f)
              if (ae(k)) {
                for (var z = 0; z < k.length; z++)
                  Fe(k[z], e);
                Object.freeze && Object.freeze(k);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(k, e);
        }
        if (Y.call(s, "key")) {
          var L = F(e), M = Object.keys(s).filter(function(rt) {
            return rt !== "key";
          }), ce = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[L + ce]) {
            var tt = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, L, tt, L), Oe[L + ce] = !0;
          }
        }
        return e === a ? Xn(E) : Hn(E), E;
      }
    }
    function Zn(e, s, l) {
      return Le(e, s, l, !0);
    }
    function Qn(e, s, l) {
      return Le(e, s, l, !1);
    }
    var et = Qn, nt = Zn;
    J.Fragment = a, J.jsx = et, J.jsxs = nt;
  }()), J;
}
process.env.NODE_ENV === "production" ? be.exports = yt() : be.exports = wt();
var o = be.exports;
const Ct = mt({
  prefix: "bn-"
});
function b(...r) {
  return Ct(ft(r));
}
const Nt = Q(
  "bn-inline-flex bn-items-center bn-rounded-full bn-border bn-px-2.5 bn-py-0.5 bn-text-xs bn-font-semibold bn-transition-colors focus:bn-outline-none focus:bn-ring-2 focus:bn-ring-ring focus:bn-ring-offset-2",
  {
    variants: {
      variant: {
        default: "bn-border-transparent bn-bg-primary bn-text-primary-foreground hover:bn-bg-primary/80",
        secondary: "bn-border-transparent bn-bg-secondary bn-text-secondary-foreground hover:bn-bg-secondary/80",
        destructive: "bn-border-transparent bn-bg-destructive bn-text-destructive-foreground hover:bn-bg-destructive/80",
        outline: "bn-text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function jt({ className: r, variant: t, ...n }) {
  return /* @__PURE__ */ o.jsx("div", { className: b(Nt({ variant: t }), r), ...n });
}
const Tt = Q(
  "bn-inline-flex bn-items-center bn-justify-center bn-whitespace-nowrap bn-rounded-md bn-text-sm bn-font-medium bn-ring-offset-background bn-transition-colors focus-visible:bn-outline-none focus-visible:bn-ring-2 focus-visible:bn-ring-ring focus-visible:bn-ring-offset-2 disabled:bn-pointer-events-none disabled:bn-opacity-50",
  {
    variants: {
      variant: {
        default: "bn-bg-primary bn-text-primary-foreground hover:bn-bg-primary/90",
        destructive: "bn-bg-destructive bn-text-destructive-foreground hover:bn-bg-destructive/90",
        outline: "bn-border bn-border-input bn-bg-background hover:bn-bg-accent hover:bn-text-accent-foreground",
        secondary: "bn-bg-secondary bn-text-secondary-foreground hover:bn-bg-secondary/80",
        ghost: "hover:bn-bg-accent hover:bn-text-accent-foreground",
        link: "bn-text-primary bn-underline-offset-4 hover:bn-underline"
      },
      size: {
        default: "bn-h-10 bn-px-4 bn-py-2",
        sm: "bn-h-9 bn-rounded-md bn-px-3",
        lg: "bn-h-11 bn-rounded-md bn-px-8",
        icon: "bn-h-10 bn-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), He = p.forwardRef(
  ({ className: r, variant: t, size: n, asChild: a = !1, ...i }, d) => {
    const c = a ? Ye : "button";
    return /* @__PURE__ */ o.jsx(
      c,
      {
        className: b(Tt({ variant: t, size: n, className: r })),
        ref: d,
        ...i
      }
    );
  }
);
He.displayName = "Button";
const Xe = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: n,
    className: b(
      "bn-rounded-lg bn-border bn-bg-card bn-text-card-foreground bn-shadow-sm",
      r
    ),
    ...t
  }
));
Xe.displayName = "Card";
const Rt = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: n,
    className: b("bn-flex bn-flex-col bn-space-y-1.5 bn-p-6", r),
    ...t
  }
));
Rt.displayName = "CardHeader";
const St = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: n,
    className: b(
      "bn-text-2xl bn-font-semibold bn-leading-none bn-tracking-tight",
      r
    ),
    ...t
  }
));
St.displayName = "CardTitle";
const Et = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: n,
    className: b("bn-text-sm bn-text-muted-foreground", r),
    ...t
  }
));
Et.displayName = "CardDescription";
const Ze = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx("div", { ref: n, className: b("bn-p-6 bn-pt-0", r), ...t }));
Ze.displayName = "CardContent";
const Dt = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: n,
    className: b("bn-flex bn-items-center bn-p-6 bn-pt-0", r),
    ...t
  }
));
Dt.displayName = "CardFooter";
const _t = T.Root, Pt = T.Trigger, It = T.Sub, Qe = p.forwardRef(({ className: r, inset: t, children: n, ...a }, i) => /* @__PURE__ */ o.jsxs(
  T.SubTrigger,
  {
    ref: i,
    className: b(
      "bn-flex bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-px-2 bn-py-1.5 bn-text-sm bn-outline-none focus:bn-bg-accent data-[state=open]:bn-bg-accent",
      t && "bn-pl-8",
      r
    ),
    ...a,
    children: [
      n,
      /* @__PURE__ */ o.jsx(Ue, { className: "bn-ml-auto bn-h-4 bn-w-4" })
    ]
  }
));
Qe.displayName = T.SubTrigger.displayName;
const en = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  T.SubContent,
  {
    ref: n,
    className: b(
      "bn-z-50 bn-min-w-[8rem] bn-overflow-hidden bn-rounded-md bn-border bn-bg-popover bn-p-1 bn-text-popover-foreground bn-shadow-lg data-[state=open]:bn-animate-in data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=open]:bn-fade-in-0 data-[state=closed]:bn-zoom-out-95 data-[state=open]:bn-zoom-in-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
      r
    ),
    ...t
  }
));
en.displayName = T.SubContent.displayName;
const nn = p.forwardRef(({ className: r, sideOffset: t = 4, ...n }, a) => (
  // <DropdownMenuPrimitive.Portal>
  /* @__PURE__ */ o.jsx(
    T.Content,
    {
      ref: a,
      sideOffset: t,
      className: b(
        "bn-z-50 bn-min-w-[8rem] bn-overflow-hidden bn-rounded-md bn-border bn-bg-popover bn-p-1 bn-text-popover-foreground bn-shadow-md data-[state=open]:bn-animate-in data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=open]:bn-fade-in-0 data-[state=closed]:bn-zoom-out-95 data-[state=open]:bn-zoom-in-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
        r
      ),
      ...n
    }
  )
));
nn.displayName = T.Content.displayName;
const tn = p.forwardRef(({ className: r, inset: t, ...n }, a) => /* @__PURE__ */ o.jsx(
  T.Item,
  {
    ref: a,
    className: b(
      "bn-relative bn-flex bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-px-2 bn-py-1.5 bn-text-sm bn-outline-none bn-transition-colors focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
      t && "bn-pl-8",
      r
    ),
    ...n
  }
));
tn.displayName = T.Item.displayName;
const rn = p.forwardRef(({ className: r, children: t, checked: n, ...a }, i) => /* @__PURE__ */ o.jsxs(
  T.CheckboxItem,
  {
    ref: i,
    className: b(
      "bn-relative bn-flex bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-py-1.5 bn-pl-8 bn-pr-2 bn-text-sm bn-outline-none bn-transition-colors focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
      r
    ),
    checked: n,
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "bn-absolute bn-left-2 bn-flex bn-h-3.5 bn-w-3.5 bn-items-center bn-justify-center", children: /* @__PURE__ */ o.jsx(T.ItemIndicator, { children: /* @__PURE__ */ o.jsx(Ke, { className: "bn-h-4 bn-w-4" }) }) }),
      t
    ]
  }
));
rn.displayName = T.CheckboxItem.displayName;
const Mt = p.forwardRef(({ className: r, children: t, ...n }, a) => /* @__PURE__ */ o.jsxs(
  T.RadioItem,
  {
    ref: a,
    className: b(
      "bn-relative bn-flex bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-py-1.5 bn-pl-8 bn-pr-2 bn-text-sm bn-outline-none bn-transition-colors focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
      r
    ),
    ...n,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "bn-absolute bn-left-2 bn-flex bn-h-3.5 bn-w-3.5 bn-items-center bn-justify-center", children: /* @__PURE__ */ o.jsx(T.ItemIndicator, { children: /* @__PURE__ */ o.jsx(pt, { className: "bn-h-2 bn-w-2 bn-fill-current" }) }) }),
      t
    ]
  }
));
Mt.displayName = T.RadioItem.displayName;
const on = p.forwardRef(({ className: r, inset: t, ...n }, a) => /* @__PURE__ */ o.jsx(
  T.Label,
  {
    ref: a,
    className: b(
      "bn-px-2 bn-py-1.5 bn-text-sm bn-font-semibold",
      t && "bn-pl-8",
      r
    ),
    ...n
  }
));
on.displayName = T.Label.displayName;
const an = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  T.Separator,
  {
    ref: n,
    className: b("bn--mx-1 bn-my-1 bn-h-px bn-bg-muted", r),
    ...t
  }
));
an.displayName = T.Separator.displayName;
const kt = Q(
  "bn-text-sm bn-font-medium bn-leading-none peer-disabled:bn-cursor-not-allowed peer-disabled:bn-opacity-70"
), ue = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  qe.Root,
  {
    ref: n,
    className: b(kt(), r),
    ...t
  }
));
ue.displayName = qe.Root.displayName;
const Ft = vt, Ot = p.createContext(
  {}
), ne = () => {
  const r = p.useContext(Ot), t = p.useContext(sn), { getFieldState: n, formState: a } = xt(), i = n(r.name, a);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: d } = t;
  return {
    id: d,
    name: r.name,
    formItemId: `${d}-form-item`,
    formDescriptionId: `${d}-form-item-description`,
    formMessageId: `${d}-form-item-message`,
    ...i
  };
}, sn = p.createContext(
  {}
), Lt = p.forwardRef(({ className: r, ...t }, n) => {
  const a = p.useId();
  return /* @__PURE__ */ o.jsx(sn.Provider, { value: { id: a }, children: /* @__PURE__ */ o.jsx("div", { ref: n, className: b("bn-space-y-2", r), ...t }) });
});
Lt.displayName = "FormItem";
const Bt = p.forwardRef(({ className: r, ...t }, n) => {
  const { error: a, formItemId: i } = ne();
  return /* @__PURE__ */ o.jsx(
    ue,
    {
      ref: n,
      className: b(a && "bn-text-destructive", r),
      htmlFor: i,
      ...t
    }
  );
});
Bt.displayName = "FormLabel";
const Vt = p.forwardRef(({ ...r }, t) => {
  const { error: n, formItemId: a, formDescriptionId: i, formMessageId: d } = ne();
  return /* @__PURE__ */ o.jsx(
    Ye,
    {
      ref: t,
      id: a,
      "aria-describedby": n ? `${i} ${d}` : `${i}`,
      "aria-invalid": !!n,
      ...r
    }
  );
});
Vt.displayName = "FormControl";
const At = p.forwardRef(({ className: r, ...t }, n) => {
  const { formDescriptionId: a } = ne();
  return /* @__PURE__ */ o.jsx(
    "p",
    {
      ref: n,
      id: a,
      className: b("bn-text-sm bn-text-muted-foreground", r),
      ...t
    }
  );
});
At.displayName = "FormDescription";
const $t = p.forwardRef(({ className: r, children: t, ...n }, a) => {
  const { error: i, formMessageId: d } = ne(), c = i ? String(i == null ? void 0 : i.message) : t;
  return c ? /* @__PURE__ */ o.jsx(
    "p",
    {
      ref: a,
      id: d,
      className: b("bn-text-sm bn-font-medium bn-text-destructive", r),
      ...n,
      children: c
    }
  ) : null;
});
$t.displayName = "FormMessage";
const ln = p.forwardRef(
  ({ className: r, type: t, ...n }, a) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      className: b(
        "bn-flex bn-h-10 bn-w-full bn-rounded-md bn-border bn-border-input bn-bg-background bn-px-3 bn-py-2 bn-text-sm bn-ring-offset-background file:bn-border-0 file:bn-bg-transparent file:bn-text-sm file:bn-font-medium placeholder:bn-text-muted-foreground focus-visible:bn-outline-none focus-visible:bn-ring-2 focus-visible:bn-ring-ring focus-visible:bn-ring-offset-2 disabled:bn-cursor-not-allowed disabled:bn-opacity-50",
        r
      ),
      ref: a,
      ...n
    }
  )
);
ln.displayName = "Input";
const zt = ee.Root, Wt = ee.Trigger, dn = p.forwardRef(({ className: r, align: t = "center", sideOffset: n = 4, ...a }, i) => (
  // <PopoverPrimitive.Portal>
  /* @__PURE__ */ o.jsx(
    ee.Content,
    {
      ref: i,
      align: t,
      sideOffset: n,
      className: b(
        "bn-z-50 bn-w-72 bn-rounded-md bn-border bn-bg-popover bn-p-4 bn-text-popover-foreground bn-shadow-md bn-outline-none data-[state=open]:bn-animate-in data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=open]:bn-fade-in-0 data-[state=closed]:bn-zoom-out-95 data-[state=open]:bn-zoom-in-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
        r
      ),
      ...a
    }
  )
));
dn.displayName = ee.Content.displayName;
const Yt = D.Root, Ut = D.Value, cn = p.forwardRef(({ className: r, children: t, ...n }, a) => /* @__PURE__ */ o.jsxs(
  D.Trigger,
  {
    ref: a,
    className: b(
      "bn-flex bn-h-10 bn-w-full bn-items-center bn-justify-between bn-rounded-md bn-border bn-border-input bn-bg-background bn-px-3 bn-py-2 bn-text-sm bn-ring-offset-background placeholder:bn-text-muted-foreground focus:bn-outline-none focus:bn-ring-2 focus:bn-ring-ring focus:bn-ring-offset-2 disabled:bn-cursor-not-allowed disabled:bn-opacity-50 [&>span]:bn-line-clamp-1",
      r
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ o.jsx(D.Icon, { asChild: !0, children: /* @__PURE__ */ o.jsx(Je, { className: "bn-h-4 bn-w-4 bn-opacity-50" }) })
    ]
  }
));
cn.displayName = D.Trigger.displayName;
const bn = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  D.ScrollUpButton,
  {
    ref: n,
    className: b(
      "bn-flex bn-cursor-default bn-items-center bn-justify-center bn-py-1",
      r
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(gt, { className: "bn-h-4 bn-w-4" })
  }
));
bn.displayName = D.ScrollUpButton.displayName;
const un = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  D.ScrollDownButton,
  {
    ref: n,
    className: b(
      "bn-flex bn-cursor-default bn-items-center bn-justify-center bn-py-1",
      r
    ),
    ...t,
    children: /* @__PURE__ */ o.jsx(Je, { className: "bn-h-4 bn-w-4" })
  }
));
un.displayName = D.ScrollDownButton.displayName;
const fn = p.forwardRef(({ className: r, children: t, position: n = "popper", ...a }, i) => (
  // <SelectPrimitive.Portal>
  /* @__PURE__ */ o.jsxs(
    D.Content,
    {
      ref: i,
      className: b(
        "bn-relative bn-z-50 bn-max-h-96 bn-min-w-[8rem] bn-overflow-hidden bn-rounded-md bn-border bn-bg-popover bn-text-popover-foreground bn-shadow-md data-[state=open]:bn-animate-in data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=open]:bn-fade-in-0 data-[state=closed]:bn-zoom-out-95 data-[state=open]:bn-zoom-in-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
        n === "popper" && "data-[side=bottom]:bn-translate-y-1 data-[side=left]:bn--translate-x-1 data-[side=right]:bn-translate-x-1 data-[side=top]:bn--translate-y-1",
        r
      ),
      position: n,
      ...a,
      children: [
        /* @__PURE__ */ o.jsx(bn, {}),
        /* @__PURE__ */ o.jsx(
          D.Viewport,
          {
            className: b(
              "bn-p-1",
              n === "popper" && "bn-h-[var(--radix-select-trigger-height)] bn-w-full bn-min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ o.jsx(un, {})
      ]
    }
  )
));
fn.displayName = D.Content.displayName;
const Kt = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  D.Label,
  {
    ref: n,
    className: b(
      "bn-py-1.5 bn-pl-8 bn-pr-2 bn-text-sm bn-font-semibold",
      r
    ),
    ...t
  }
));
Kt.displayName = D.Label.displayName;
const mn = p.forwardRef(({ className: r, children: t, ...n }, a) => /* @__PURE__ */ o.jsxs(
  D.Item,
  {
    ref: a,
    className: b(
      "bn-relative bn-flex bn-w-full bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-py-1.5 bn-pl-8 bn-pr-2 bn-text-sm bn-outline-none focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
      r
    ),
    ...n,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "bn-absolute bn-left-2 bn-flex bn-h-3.5 bn-w-3.5 bn-items-center bn-justify-center", children: /* @__PURE__ */ o.jsx(D.ItemIndicator, { children: /* @__PURE__ */ o.jsx(Ke, { className: "bn-h-4 bn-w-4" }) }) }),
      /* @__PURE__ */ o.jsx(D.ItemText, { children: t })
    ]
  }
));
mn.displayName = D.Item.displayName;
const Jt = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  D.Separator,
  {
    ref: n,
    className: b("bn--mx-1 bn-my-1 bn-h-px bn-bg-muted", r),
    ...t
  }
));
Jt.displayName = D.Separator.displayName;
const qt = B.Root, pn = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  B.List,
  {
    ref: n,
    className: b(
      "bn-inline-flex bn-h-10 bn-items-center bn-justify-center bn-rounded-md bn-bg-muted bn-p-1 bn-text-muted-foreground",
      r
    ),
    ...t
  }
));
pn.displayName = B.List.displayName;
const gn = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  B.Trigger,
  {
    ref: n,
    className: b(
      "bn-inline-flex bn-items-center bn-justify-center bn-whitespace-nowrap bn-rounded-sm bn-px-3 bn-py-1.5 bn-text-sm bn-font-medium bn-ring-offset-background bn-transition-all focus-visible:bn-outline-none focus-visible:bn-ring-2 focus-visible:bn-ring-ring focus-visible:bn-ring-offset-2 disabled:bn-pointer-events-none disabled:bn-opacity-50 data-[state=active]:bn-bg-background data-[state=active]:bn-text-foreground data-[state=active]:bn-shadow-sm",
      r
    ),
    ...t
  }
));
gn.displayName = B.Trigger.displayName;
const vn = p.forwardRef(({ className: r, ...t }, n) => /* @__PURE__ */ o.jsx(
  B.Content,
  {
    ref: n,
    className: b(
      "bn-mt-2 bn-ring-offset-background focus-visible:bn-outline-none focus-visible:bn-ring-2 focus-visible:bn-ring-ring focus-visible:bn-ring-offset-2",
      r
    ),
    ...t
  }
));
vn.displayName = B.Content.displayName;
const Gt = Q(
  "bn-inline-flex bn-items-center bn-justify-center bn-rounded-md bn-text-sm bn-font-medium bn-ring-offset-background bn-transition-colors hover:bn-bg-muted hover:bn-text-muted-foreground focus-visible:bn-outline-none focus-visible:bn-ring-2 focus-visible:bn-ring-ring focus-visible:bn-ring-offset-2 disabled:bn-pointer-events-none disabled:bn-opacity-50 data-[state=on]:bn-bg-accent data-[state=on]:bn-text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bn-bg-transparent",
        outline: "bn-border bn-border-input bn-bg-transparent hover:bn-bg-accent hover:bn-text-accent-foreground"
      },
      size: {
        default: "bn-h-10 bn-px-3",
        sm: "bn-h-9 bn-px-2.5",
        lg: "bn-h-11 bn-px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), xn = p.forwardRef(({ className: r, variant: t, size: n, ...a }, i) => /* @__PURE__ */ o.jsx(
  Ge.Root,
  {
    ref: i,
    className: b(Gt({ variant: t, size: n, className: r })),
    ...a
  }
));
xn.displayName = Ge.Root.displayName;
const Ht = q.Provider, Xt = q.Root, Zt = q.Trigger, hn = p.forwardRef(({ className: r, sideOffset: t = 4, ...n }, a) => /* @__PURE__ */ o.jsx(
  q.Content,
  {
    ref: a,
    sideOffset: t,
    className: b(
      "bn-z-50 bn-overflow-hidden bn-rounded-md bn-border bn-bg-popover bn-px-3 bn-py-1.5 bn-text-sm bn-text-popover-foreground bn-shadow-md bn-animate-in bn-fade-in-0 bn-zoom-in-95 data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=closed]:bn-zoom-out-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
      r
    ),
    ...n
  }
));
hn.displayName = q.Content.displayName;
const Qt = {
  Badge: {
    Badge: jt
  },
  Button: {
    Button: He
  },
  Card: {
    Card: Xe,
    CardContent: Ze
  },
  DropdownMenu: {
    DropdownMenu: _t,
    DropdownMenuCheckboxItem: rn,
    DropdownMenuContent: nn,
    DropdownMenuItem: tn,
    DropdownMenuLabel: on,
    DropdownMenuSeparator: an,
    DropdownMenuSub: It,
    DropdownMenuSubContent: en,
    DropdownMenuSubTrigger: Qe,
    DropdownMenuTrigger: Pt
  },
  Form: {
    Form: Ft
  },
  Input: {
    Input: ln
  },
  Label: {
    Label: ue
  },
  Popover: {
    Popover: zt,
    PopoverContent: dn,
    PopoverTrigger: Wt
  },
  Select: {
    Select: Yt,
    SelectContent: fn,
    SelectItem: mn,
    SelectTrigger: cn,
    SelectValue: Ut
  },
  Tabs: {
    Tabs: qt,
    TabsContent: vn,
    TabsList: pn,
    TabsTrigger: gn
  },
  Toggle: {
    Toggle: xn
  },
  Tooltip: {
    Tooltip: Xt,
    TooltipContent: hn,
    TooltipProvider: Ht,
    TooltipTrigger: Zt
  }
}, yn = ot(void 0);
function R() {
  return at(yn);
}
const er = (r) => {
  const { children: t, ...n } = r;
  C(n);
  const a = R(), i = ht();
  return /* @__PURE__ */ o.jsx(a.Form.Form, { ...i, children: t });
}, nr = (r) => N(
  (t, n) => /* @__PURE__ */ o.jsx(
    r,
    {
      onPointerDown: (a) => {
        a.nativeEvent.fakeEvent || (a.ctrlKey = !0);
      },
      onPointerUp: (a) => {
        const i = new PointerEvent("pointerdown", a.nativeEvent);
        i.fakeEvent = !0, a.target.dispatchEvent(i);
      },
      ...t,
      ref: n
    }
  )
), tr = (r) => {
  const {
    children: t,
    onOpenChange: n,
    position: a,
    // Unused
    sub: i,
    ...d
  } = r;
  C(d);
  const c = R();
  return i ? /* @__PURE__ */ o.jsx(
    c.DropdownMenu.DropdownMenuSub,
    {
      onOpenChange: n,
      children: t
    }
  ) : /* @__PURE__ */ o.jsx(c.DropdownMenu.DropdownMenu, { onOpenChange: n, children: t });
}, rr = (r) => {
  const { children: t, sub: n, ...a } = r;
  C(a);
  const i = R(), d = We(
    () => nr(
      i.DropdownMenu.DropdownMenuTrigger
    ),
    [i.DropdownMenu.DropdownMenuTrigger]
  );
  return n ? /* @__PURE__ */ o.jsx(i.DropdownMenu.DropdownMenuSubTrigger, { children: t }) : /* @__PURE__ */ o.jsx(d, { asChild: !0, ...a, children: t });
}, or = N((r, t) => {
  const { className: n, children: a, sub: i, ...d } = r;
  C(d);
  const c = R();
  return i ? /* @__PURE__ */ o.jsx(
    c.DropdownMenu.DropdownMenuSubContent,
    {
      className: n,
      ref: t,
      children: a
    }
  ) : /* @__PURE__ */ o.jsx(
    c.DropdownMenu.DropdownMenuContent,
    {
      className: n,
      ref: t,
      children: a
    }
  );
}), ar = N((r, t) => {
  const { className: n, children: a, icon: i, checked: d, subTrigger: c, onClick: x, ...m } = r;
  C(m);
  const u = R();
  return c ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    i,
    a
  ] }) : d !== void 0 ? /* @__PURE__ */ o.jsxs(
    u.DropdownMenu.DropdownMenuCheckboxItem,
    {
      className: b(n, "bn-gap-1"),
      ref: t,
      checked: d,
      onClick: x,
      ...m,
      children: [
        i,
        a
      ]
    }
  ) : /* @__PURE__ */ o.jsxs(
    u.DropdownMenu.DropdownMenuItem,
    {
      className: n,
      ref: t,
      onClick: x,
      ...m,
      children: [
        i,
        a,
        c && /* @__PURE__ */ o.jsx(Ue, { className: "bn-ml-auto bn-h-4 bn-w-4" })
      ]
    }
  );
}), sr = N((r, t) => {
  const { className: n, ...a } = r;
  C(a);
  const i = R();
  return /* @__PURE__ */ o.jsx(
    i.DropdownMenu.DropdownMenuSeparator,
    {
      className: n,
      ref: t
    }
  );
}), ir = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  C(i);
  const d = R();
  return /* @__PURE__ */ o.jsx(
    d.DropdownMenu.DropdownMenuLabel,
    {
      className: n,
      ref: t,
      children: a
    }
  );
}), lr = N((r, t) => {
  const {
    className: n,
    tabs: a,
    defaultOpenTab: i,
    openTab: d,
    setOpenTab: c,
    loading: x,
    // TODO: implement loader
    ...m
  } = r;
  C(m);
  const u = R();
  return /* @__PURE__ */ o.jsxs(
    u.Tabs.Tabs,
    {
      className: b(n, "bn-bg-popover bn-p-2 bn-rounded-lg"),
      ref: t,
      value: d,
      defaultValue: i,
      onValueChange: c,
      children: [
        /* @__PURE__ */ o.jsx(u.Tabs.TabsList, { children: a.map((g) => /* @__PURE__ */ o.jsx(u.Tabs.TabsTrigger, { value: g.name, children: g.name }, g.name)) }),
        a.map((g) => /* @__PURE__ */ o.jsx(u.Tabs.TabsContent, { value: g.name, children: /* @__PURE__ */ o.jsx(u.Card.Card, { children: /* @__PURE__ */ o.jsx(u.Card.CardContent, { className: "bn-p-4", children: g.tabPanel }) }) }, g.name))
      ]
    }
  );
}), dr = N((r, t) => {
  const { className: n, children: a, onClick: i, label: d, ...c } = r;
  C(c);
  const x = R();
  return /* @__PURE__ */ o.jsx(
    x.Button.Button,
    {
      type: "submit",
      className: n,
      "aria-label": d,
      ref: t,
      onClick: i,
      children: a
    }
  );
}), cr = N((r, t) => {
  const { className: n, accept: a, value: i, placeholder: d, onChange: c, ...x } = r;
  C(x);
  const m = R();
  return /* @__PURE__ */ o.jsx(
    m.Input.Input,
    {
      type: "file",
      className: n,
      ref: t,
      accept: a,
      value: i ? i.name : void 0,
      onChange: async (u) => c == null ? void 0 : c(u.target.files[0]),
      placeholder: d
    }
  );
}), br = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  return C(i), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: b(
        n,
        "bn-flex bn-flex-col bn-gap-2 bn-items-start bn-justify-center"
      ),
      ref: t,
      children: a
    }
  );
}), ur = N((r, t) => {
  const { className: n, value: a, placeholder: i, onKeyDown: d, onChange: c, ...x } = r;
  C(x);
  const m = R();
  return /* @__PURE__ */ o.jsx(
    m.Input.Input,
    {
      "data-test": "embed-input",
      className: b(n, "bn-w-80"),
      ref: t,
      value: a,
      placeholder: i,
      onKeyDown: d,
      onChange: c
    }
  );
}), fr = (r) => {
  const {
    children: t,
    opened: n,
    position: a,
    // unused
    ...i
  } = r;
  C(i);
  const d = R();
  return /* @__PURE__ */ o.jsx(d.Popover.Popover, { open: n, children: t });
}, mr = N(
  (r, t) => {
    const { children: n, ...a } = r;
    C(a);
    const i = R();
    return /* @__PURE__ */ o.jsx(i.Popover.PopoverTrigger, { ref: t, asChild: !0, children: n });
  }
), pr = N((r, t) => {
  const { className: n, variant: a, children: i, ...d } = r;
  C(d);
  const c = R();
  return /* @__PURE__ */ o.jsx(
    c.Popover.PopoverContent,
    {
      sideOffset: 8,
      className: b(
        n,
        "bn-flex bn-flex-col bn-gap-2",
        a === "panel-popover" ? "bn-p-0 bn-border-none bn-shadow-none bn-max-w-none bn-w-fit" : ""
      ),
      ref: t,
      children: i
    }
  );
}), gr = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  return C(i, !1), /* @__PURE__ */ o.jsx("div", { className: n, ref: t, ...i, children: a });
}), vr = N((r, t) => {
  const {
    className: n,
    children: a,
    icon: i,
    onClick: d,
    onDragEnd: c,
    onDragStart: x,
    draggable: m,
    label: u,
    ...g
  } = r;
  C(g, !1);
  const S = R();
  return /* @__PURE__ */ o.jsxs(
    S.Button.Button,
    {
      variant: "ghost",
      className: b(n, "bn-text-gray-400"),
      ref: t,
      "aria-label": u,
      onClick: d,
      onDragStart: x,
      onDragEnd: c,
      draggable: m,
      ...g,
      children: [
        i,
        a
      ]
    }
  );
}), xr = N((r, t) => {
  const { className: n, children: a, id: i, ...d } = r;
  return C(d), /* @__PURE__ */ o.jsx(
    "div",
    {
      id: i,
      role: "listbox",
      className: b(
        "bn-z-50 bn-min-w-[8rem] bn-overflow-auto bn-rounded-md bn-border bn-bg-popover bn-p-1 bn-text-popover-foreground bn-shadow-md data-[state=open]:bn-animate-in data-[state=closed]:bn-animate-out data-[state=closed]:bn-fade-out-0 data-[state=open]:bn-fade-in-0 data-[state=closed]:bn-zoom-out-95 data-[state=open]:bn-zoom-in-95 data-[side=bottom]:bn-slide-in-from-top-2 data-[side=left]:bn-slide-in-from-right-2 data-[side=right]:bn-slide-in-from-left-2 data-[side=top]:bn-slide-in-from-bottom-2",
        n
      ),
      ref: t,
      children: a
    }
  );
}), hr = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  return C(i), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: b(
        "bn-relative bn-flex bn-cursor-default bn-select-none bn-items-center bn-rounded-sm bn-px-2 bn-py-1.5 bn-text-sm bn-outline-none bn-transition-colors focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
        n
      ),
      ref: t,
      children: /* @__PURE__ */ o.jsx("div", { children: a })
    }
  );
}), yr = N((r, t) => {
  const n = R(), { className: a, item: i, isSelected: d, onClick: c, id: x, ...m } = r;
  C(m);
  const u = st(null);
  return it(() => {
    if (!u.current || !d)
      return;
    const g = dt(u.current);
    g === "top" ? u.current.scrollIntoView(!0) : g === "bottom" && u.current.scrollIntoView(!1);
  }, [d]), /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: b(
        "bn-relative bn-flex bn-cursor-pointer bn-select-none bn-items-center bn-rounded-sm bn-px-2 bn-py-1.5 bn-text-sm bn-outline-none bn-transition-colors focus:bn-bg-accent focus:bn-text-accent-foreground data-[disabled]:bn-pointer-events-none data-[disabled]:bn-opacity-50",
        a
      ),
      ref: ct([t, u]),
      id: x,
      onClick: c,
      role: "option",
      "aria-selected": d || void 0,
      children: [
        i.icon && /* @__PURE__ */ o.jsx("div", { className: "bn-p-3", "data-position": "left", children: i.icon }),
        /* @__PURE__ */ o.jsxs("div", { className: "bn-flex-1", children: [
          /* @__PURE__ */ o.jsx("div", { className: "bn-text-base", children: i.title }),
          /* @__PURE__ */ o.jsx("div", { className: "bn-text-xs", children: i.subtext })
        ] }),
        i.badge && /* @__PURE__ */ o.jsx("div", { "data-position": "right", className: "bn-text-xs", children: /* @__PURE__ */ o.jsx(n.Badge.Badge, { variant: "secondary", children: i.badge }) })
      ]
    }
  );
}), wr = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  return C(i), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: b("bn-px-2 bn-py-1.5 bn-text-sm bn-font-semibold", n),
      ref: t,
      children: a
    }
  );
}), Cr = N((r, t) => {
  const { className: n, children: a, ...i } = r;
  return C(i), /* @__PURE__ */ o.jsx("div", { className: n, ref: t, children: a });
}), Nr = N((r, t) => {
  const {
    className: n,
    children: a,
    draggable: i,
    onDragStart: d,
    onDragEnd: c,
    style: x,
    label: m,
    ...u
  } = r;
  C(u, !1);
  const g = R();
  return /* @__PURE__ */ o.jsx(
    g.Button.Button,
    {
      variant: "ghost",
      className: b(n, "bn-p-0 bn-h-fit bn-w-fit bn-text-gray-400"),
      ref: t,
      "aria-label": m,
      draggable: i,
      onDragStart: d,
      onDragEnd: c,
      style: x,
      ...u,
      children: a
    }
  );
}), jr = N(
  (r) => {
    const {
      className: t,
      name: n,
      label: a,
      icon: i,
      // TODO: implement
      value: d,
      autoFocus: c,
      placeholder: x,
      onKeyDown: m,
      onChange: u,
      onSubmit: g,
      ...S
    } = r;
    C(S);
    const _ = R();
    return a ? /* @__PURE__ */ o.jsxs("div", { children: [
      /* @__PURE__ */ o.jsx(_.Label.Label, { htmlFor: a, children: a }),
      /* @__PURE__ */ o.jsx(
        _.Input.Input,
        {
          className: t,
          id: a,
          name: n,
          autoFocus: c,
          placeholder: x,
          value: d,
          onKeyDown: m,
          onChange: u,
          onSubmit: g
        }
      )
    ] }) : /* @__PURE__ */ o.jsx(
      _.Input.Input,
      {
        "aria-label": n,
        name: n,
        autoFocus: c,
        placeholder: x,
        value: d,
        onKeyDown: m,
        onChange: u,
        onSubmit: g
      }
    );
  }
), Ae = N(
  (r, t) => {
    const { className: n, children: a, onMouseEnter: i, onMouseLeave: d, ...c } = r;
    C(c);
    const x = R();
    return /* @__PURE__ */ o.jsx(x.Tooltip.TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ o.jsx(
      "div",
      {
        className: b(
          n,
          "bn-flex bn-gap-1 bn-p-1 bn-bg-popover bn-text-popover-foreground bn-border bn-rounded-lg bn-shadow-md"
        ),
        ref: t,
        onMouseEnter: i,
        onMouseLeave: d,
        children: a
      }
    ) });
  }
), $e = N(
  (r, t) => {
    const {
      className: n,
      children: a,
      mainTooltip: i,
      secondaryTooltip: d,
      icon: c,
      isSelected: x,
      isDisabled: m,
      onClick: u,
      label: g,
      ...S
    } = r;
    C(S, !1);
    const _ = R(), V = x === void 0 ? /* @__PURE__ */ o.jsxs(
      _.Button.Button,
      {
        className: n,
        variant: "ghost",
        disabled: m,
        onClick: u,
        ref: t,
        "aria-label": g,
        ...S,
        children: [
          c,
          a
        ]
      }
    ) : /* @__PURE__ */ o.jsxs(
      _.Toggle.Toggle,
      {
        className: b(
          n,
          "data-[state=open]:bg-accent data-[state=closed]:text-accent-foreground"
        ),
        "aria-label": g,
        onClick: u,
        pressed: x,
        disabled: m,
        "data-state": x ? "on" : "off",
        "data-disabled": m,
        ref: t,
        ...S,
        children: [
          c,
          a
        ]
      }
    );
    return /* @__PURE__ */ o.jsxs(_.Tooltip.Tooltip, { children: [
      /* @__PURE__ */ o.jsx(_.Tooltip.TooltipTrigger, { asChild: !0, children: V }),
      /* @__PURE__ */ o.jsxs(
        _.Tooltip.TooltipContent,
        {
          className: "bn-flex bn-flex-col bn-items-center",
          children: [
            /* @__PURE__ */ o.jsx("span", { children: i }),
            d && /* @__PURE__ */ o.jsx("span", { children: d })
          ]
        }
      )
    ] });
  }
), Tr = N((r, t) => {
  const { className: n, items: a, isDisabled: i, ...d } = r;
  C(d);
  const c = R(), x = (u) => /* @__PURE__ */ o.jsxs("div", { className: "bn-flex bn-gap-1 bn-items-center", children: [
    u.icon,
    u.text
  ] }), m = a.filter((u) => u.isSelected)[0];
  return m ? /* @__PURE__ */ o.jsxs(
    c.Select.Select,
    {
      value: m.text,
      onValueChange: (u) => {
        var g, S;
        return (S = (g = a.find((_) => _.text === u)).onClick) == null ? void 0 : S.call(g);
      },
      disabled: i,
      children: [
        /* @__PURE__ */ o.jsx(c.Select.SelectTrigger, { className: "bn-border-none", children: /* @__PURE__ */ o.jsx(c.Select.SelectValue, {}) }),
        /* @__PURE__ */ o.jsx(c.Select.SelectContent, { className: n, ref: t, children: a.map((u) => /* @__PURE__ */ o.jsx(
          c.Select.SelectItem,
          {
            disabled: u.isDisabled,
            value: u.text,
            children: /* @__PURE__ */ o.jsx(x, { ...u })
          },
          u.text
        )) })
      ]
    }
  ) : null;
});
const Rr = {
  FormattingToolbar: {
    Root: Ae,
    Button: $e,
    Select: Tr
  },
  FilePanel: {
    Root: lr,
    Button: dr,
    FileInput: cr,
    TabPanel: br,
    TextInput: ur
  },
  LinkToolbar: {
    Root: Ae,
    Button: $e
  },
  SideMenu: {
    Root: gr,
    Button: vr
  },
  SuggestionMenu: {
    Root: xr,
    Item: yr,
    EmptyItem: hr,
    Label: wr,
    Loader: Cr
  },
  TableHandle: {
    Root: Nr
  },
  Generic: {
    Form: {
      Root: er,
      TextInput: jr
    },
    Menu: {
      Root: tr,
      Trigger: rr,
      Dropdown: or,
      Divider: sr,
      Label: ir,
      Item: ar
    },
    Popover: {
      Root: fr,
      Trigger: mr,
      Content: pr
    }
  }
}, Or = (r) => {
  const { className: t, shadCNComponents: n, ...a } = r, i = We(() => ({
    ...Qt,
    ...n
  }), [n]);
  return /* @__PURE__ */ o.jsx(yn.Provider, { value: i, children: /* @__PURE__ */ o.jsx(bt.Provider, { value: Rr, children: /* @__PURE__ */ o.jsx(
    ut,
    {
      className: lt("bn-shadcn", t || ""),
      ...a
    }
  ) }) });
};
export {
  Or as BlockNoteView,
  Rr as components
};
//# sourceMappingURL=blocknote-shadcn.js.map
