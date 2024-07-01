import U, { createContext as Ot, useContext as Ft, useEffect as R, useMemo as M, useState as x, useCallback as _, useRef as he } from "react";
import { useFloating as Nt, useTransitionStyles as Dt, useDismiss as Zn, useInteractions as Un, offset as re, flip as ve, size as zn } from "@floating-ui/react";
import { formatKeyboardShortcut as ke, checkBlockIsFileBlock as ie, checkBlockIsFileBlockWithPlaceholder as le, filenameFromURL as Ct, checkBlockHasDefaultProp as Ae, checkBlockTypeHasDefaultProp as oe, checkBlockIsFileBlockWithPreview as Wn, getDefaultSlashMenuItems as Gn, filterSuggestionItems as $n, mergeCSSClasses as We, inheritedProps as qn, camelToDataKebab as It, createStronglyTypedTiptapNode as At, propsToAttributes as Zt, getParseRules as Yn, getBlockFromPos as Kn, createInternalBlockSpec as Xn, audioParse as Jn, audioBlockConfig as Qn, fileParse as eo, fileBlockConfig as to, imageParse as no, imageBlockConfig as oo, videoParse as ro, videoBlockConfig as io, BlockNoteEditor as lo, addInlineContentKeyboardShortcuts as ao, getInlineContentParseRules as co, nodeToCustomInlineContent as yt, addInlineContentAttributes as so, createInternalInlineContentSpec as uo, stylePropsToAttributes as fo, getStyleParseRules as mo, addStyleAttributes as bo, createInternalStyleSpec as ho } from "@blocknote/core";
import go from "use-prefers-color-scheme";
import po, { flushSync as Ut, createPortal as zt } from "react-dom";
import { NodeViewWrapper as Wt, ReactNodeViewRenderer as Gt, NodeViewContent as $t, Mark as xo } from "@tiptap/react";
const qt = Ot(void 0);
function z(e) {
  return Ft(qt);
}
var Ze = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function vo() {
  if (jt)
    return te;
  jt = 1;
  var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, u, d) {
    var m, h = {}, g = null, j = null;
    d !== void 0 && (g = "" + d), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (m in u)
      o.call(u, m) && !a.hasOwnProperty(m) && (h[m] = u[m]);
    if (s && s.defaultProps)
      for (m in u = s.defaultProps, u)
        h[m] === void 0 && (h[m] = u[m]);
    return { $$typeof: t, type: s, key: g, ref: j, props: h, _owner: l.current };
  }
  return te.Fragment = n, te.jsx = c, te.jsxs = c, te;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function ko() {
  return wt || (wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), T = Symbol.iterator, O = "@@iterator";
    function F(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = T && i[T] || i[O];
      return typeof f == "function" ? f : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(i) {
      {
        for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++)
          b[p - 1] = arguments[p];
        _e("error", i, b);
      }
    }
    function _e(i, f, b) {
      {
        var p = P.ReactDebugCurrentFrame, w = p.getStackAddendum();
        w !== "" && (f += "%s", b = b.concat([w]));
        var V = b.map(function(y) {
          return String(y);
        });
        V.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, V);
      }
    }
    var Se = !1, ce = !1, Me = !1, Ve = !1, fn = !1, Xe;
    Xe = Symbol.for("react.module.reference");
    function mn(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === o || i === a || fn || i === l || i === d || i === m || Ve || i === j || Se || ce || Me || typeof i == "object" && i !== null && (i.$$typeof === g || i.$$typeof === h || i.$$typeof === c || i.$$typeof === s || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Xe || i.getModuleId !== void 0));
    }
    function bn(i, f, b) {
      var p = i.displayName;
      if (p)
        return p;
      var w = f.displayName || f.name || "";
      return w !== "" ? b + "(" + w + ")" : b;
    }
    function Je(i) {
      return i.displayName || "Context";
    }
    function Z(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case l:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case s:
            var f = i;
            return Je(f) + ".Consumer";
          case c:
            var b = i;
            return Je(b._context) + ".Provider";
          case u:
            return bn(i, i.render, "ForwardRef");
          case h:
            var p = i.displayName || null;
            return p !== null ? p : Z(i.type) || "Memo";
          case g: {
            var w = i, V = w._payload, y = w._init;
            try {
              return Z(y(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, J = 0, Qe, et, tt, nt, ot, rt, it;
    function lt() {
    }
    lt.__reactDisabledLog = !0;
    function hn() {
      {
        if (J === 0) {
          Qe = console.log, et = console.info, tt = console.warn, nt = console.error, ot = console.group, rt = console.groupCollapsed, it = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: lt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        J++;
      }
    }
    function gn() {
      {
        if (J--, J === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, i, {
              value: Qe
            }),
            info: G({}, i, {
              value: et
            }),
            warn: G({}, i, {
              value: tt
            }),
            error: G({}, i, {
              value: nt
            }),
            group: G({}, i, {
              value: ot
            }),
            groupCollapsed: G({}, i, {
              value: rt
            }),
            groupEnd: G({}, i, {
              value: it
            })
          });
        }
        J < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Te = P.ReactCurrentDispatcher, Ee;
    function se(i, f, b) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (w) {
            var p = w.stack.trim().match(/\n( *(at )?)/);
            Ee = p && p[1] || "";
          }
        return `
` + Ee + i;
      }
    }
    var Be = !1, ue;
    {
      var pn = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new pn();
    }
    function at(i, f) {
      if (!i || Be)
        return "";
      {
        var b = ue.get(i);
        if (b !== void 0)
          return b;
      }
      var p;
      Be = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Te.current, Te.current = null, hn();
      try {
        if (f) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (D) {
              p = D;
            }
            Reflect.construct(i, [], y);
          } else {
            try {
              y.call();
            } catch (D) {
              p = D;
            }
            i.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            p = D;
          }
          i();
        }
      } catch (D) {
        if (D && p && typeof D.stack == "string") {
          for (var v = D.stack.split(`
`), N = p.stack.split(`
`), B = v.length - 1, L = N.length - 1; B >= 1 && L >= 0 && v[B] !== N[L]; )
            L--;
          for (; B >= 1 && L >= 0; B--, L--)
            if (v[B] !== N[L]) {
              if (B !== 1 || L !== 1)
                do
                  if (B--, L--, L < 0 || v[B] !== N[L]) {
                    var A = `
` + v[B].replace(" at new ", " at ");
                    return i.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", i.displayName)), typeof i == "function" && ue.set(i, A), A;
                  }
                while (B >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Be = !1, Te.current = V, gn(), Error.prepareStackTrace = w;
      }
      var K = i ? i.displayName || i.name : "", $ = K ? se(K) : "";
      return typeof i == "function" && ue.set(i, $), $;
    }
    function xn(i, f, b) {
      return at(i, !1);
    }
    function vn(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function de(i, f, b) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return at(i, vn(i));
      if (typeof i == "string")
        return se(i);
      switch (i) {
        case d:
          return se("Suspense");
        case m:
          return se("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return xn(i.render);
          case h:
            return de(i.type, f, b);
          case g: {
            var p = i, w = p._payload, V = p._init;
            try {
              return de(V(w), f, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, ct = {}, st = P.ReactDebugCurrentFrame;
    function fe(i) {
      if (i) {
        var f = i._owner, b = de(i.type, i._source, f ? f.type : null);
        st.setExtraStackFrame(b);
      } else
        st.setExtraStackFrame(null);
    }
    function kn(i, f, b, p, w) {
      {
        var V = Function.call.bind(Q);
        for (var y in i)
          if (V(i, y)) {
            var v = void 0;
            try {
              if (typeof i[y] != "function") {
                var N = Error((p || "React class") + ": " + b + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw N.name = "Invariant Violation", N;
              }
              v = i[y](f, y, p, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              v = B;
            }
            v && !(v instanceof Error) && (fe(w), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", b, y, typeof v), fe(null)), v instanceof Error && !(v.message in ct) && (ct[v.message] = !0, fe(w), E("Failed %s type: %s", b, v.message), fe(null));
          }
      }
    }
    var Cn = Array.isArray;
    function Re(i) {
      return Cn(i);
    }
    function yn(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, b = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return b;
      }
    }
    function jn(i) {
      try {
        return ut(i), !1;
      } catch {
        return !0;
      }
    }
    function ut(i) {
      return "" + i;
    }
    function dt(i) {
      if (jn(i))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(i)), ut(i);
    }
    var ee = P.ReactCurrentOwner, wn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ft, mt, Le;
    Le = {};
    function Hn(i) {
      if (Q.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function _n(i) {
      if (Q.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Sn(i, f) {
      if (typeof i.ref == "string" && ee.current && f && ee.current.stateNode !== f) {
        var b = Z(ee.current.type);
        Le[b] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(ee.current.type), i.ref), Le[b] = !0);
      }
    }
    function Mn(i, f) {
      {
        var b = function() {
          ft || (ft = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Vn(i, f) {
      {
        var b = function() {
          mt || (mt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Tn = function(i, f, b, p, w, V, y) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: b,
        props: y,
        // Record the component responsible for creating this element.
        _owner: V
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
        value: p
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function En(i, f, b, p, w) {
      {
        var V, y = {}, v = null, N = null;
        b !== void 0 && (dt(b), v = "" + b), _n(f) && (dt(f.key), v = "" + f.key), Hn(f) && (N = f.ref, Sn(f, w));
        for (V in f)
          Q.call(f, V) && !wn.hasOwnProperty(V) && (y[V] = f[V]);
        if (i && i.defaultProps) {
          var B = i.defaultProps;
          for (V in B)
            y[V] === void 0 && (y[V] = B[V]);
        }
        if (v || N) {
          var L = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          v && Mn(y, L), N && Vn(y, L);
        }
        return Tn(i, v, N, w, p, ee.current, y);
      }
    }
    var Pe = P.ReactCurrentOwner, bt = P.ReactDebugCurrentFrame;
    function Y(i) {
      if (i) {
        var f = i._owner, b = de(i.type, i._source, f ? f.type : null);
        bt.setExtraStackFrame(b);
      } else
        bt.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Fe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function ht() {
      {
        if (Pe.current) {
          var i = Z(Pe.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Bn(i) {
      {
        if (i !== void 0) {
          var f = i.fileName.replace(/^.*[\\\/]/, ""), b = i.lineNumber;
          return `

Check your code at ` + f + ":" + b + ".";
        }
        return "";
      }
    }
    var gt = {};
    function Rn(i) {
      {
        var f = ht();
        if (!f) {
          var b = typeof i == "string" ? i : i.displayName || i.name;
          b && (f = `

Check the top-level render call using <` + b + ">.");
        }
        return f;
      }
    }
    function pt(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var b = Rn(f);
        if (gt[b])
          return;
        gt[b] = !0;
        var p = "";
        i && i._owner && i._owner !== Pe.current && (p = " It was passed a child from " + Z(i._owner.type) + "."), Y(i), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, p), Y(null);
      }
    }
    function xt(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Re(i))
          for (var b = 0; b < i.length; b++) {
            var p = i[b];
            Fe(p) && pt(p, f);
          }
        else if (Fe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var w = F(i);
          if (typeof w == "function" && w !== i.entries)
            for (var V = w.call(i), y; !(y = V.next()).done; )
              Fe(y.value) && pt(y.value, f);
        }
      }
    }
    function Ln(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var b;
        if (typeof f == "function")
          b = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === h))
          b = f.propTypes;
        else
          return;
        if (b) {
          var p = Z(f);
          kn(b, i.props, "prop", p, i);
        } else if (f.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var w = Z(f);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pn(i) {
      {
        for (var f = Object.keys(i.props), b = 0; b < f.length; b++) {
          var p = f[b];
          if (p !== "children" && p !== "key") {
            Y(i), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Y(null);
            break;
          }
        }
        i.ref !== null && (Y(i), E("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var vt = {};
    function kt(i, f, b, p, w, V) {
      {
        var y = mn(i);
        if (!y) {
          var v = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var N = Bn(w);
          N ? v += N : v += ht();
          var B;
          i === null ? B = "null" : Re(i) ? B = "array" : i !== void 0 && i.$$typeof === t ? (B = "<" + (Z(i.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : B = typeof i, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, v);
        }
        var L = En(i, f, b, w, V);
        if (L == null)
          return L;
        if (y) {
          var A = f.children;
          if (A !== void 0)
            if (p)
              if (Re(A)) {
                for (var K = 0; K < A.length; K++)
                  xt(A[K], i);
                Object.freeze && Object.freeze(A);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xt(A, i);
        }
        if (Q.call(f, "key")) {
          var $ = Z(i), D = Object.keys(f).filter(function(An) {
            return An !== "key";
          }), Ne = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vt[$ + Ne]) {
            var In = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ne, $, In, $), vt[$ + Ne] = !0;
          }
        }
        return i === o ? Pn(L) : Ln(L), L;
      }
    }
    function On(i, f, b) {
      return kt(i, f, b, !0);
    }
    function Fn(i, f, b) {
      return kt(i, f, b, !1);
    }
    var Nn = Fn, Dn = On;
    ne.Fragment = o, ne.jsx = Nn, ne.jsxs = Dn;
  }()), ne;
}
process.env.NODE_ENV === "production" ? Ze.exports = vo() : Ze.exports = ko();
var r = Ze.exports;
function H(e) {
  const t = z();
  if (!(t != null && t.editor))
    throw new Error(
      "useBlockNoteEditor was called outside of a BlockNoteContext provider or BlockNoteView component"
    );
  return t.editor;
}
function Ge(e, t) {
  const n = z();
  t || (t = n == null ? void 0 : n.editor), R(() => {
    if (!t)
      throw new Error(
        "'editor' is required, either from BlockNoteContext or as a function argument"
      );
    return t.onChange(e);
  }, [e, t]);
}
function $e(e, t) {
  const n = z();
  t || (t = n == null ? void 0 : n.editor), R(() => {
    if (!t)
      throw new Error(
        "'editor' is required, either from BlockNoteContext or as a function argument"
      );
    return t.onSelectionChange(e);
  }, [e, t]);
}
function W(e, t) {
  Ge(e, t), $e(e, t);
}
function ae(e, t, n, o) {
  const { refs: l, update: a, context: c, floatingStyles: s } = Nt({
    open: e,
    ...o
  }), { isMounted: u, styles: d } = Dt(c), m = Zn(c), { getReferenceProps: h, getFloatingProps: g } = Un([m]);
  return R(() => {
    a();
  }, [t, a]), R(() => {
    t !== null && l.setReference({
      getBoundingClientRect: () => t
    });
  }, [t, l]), M(
    () => ({
      isMounted: u,
      ref: l.setFloating,
      style: {
        display: "flex",
        ...d,
        ...s,
        zIndex: n
      },
      getFloatingProps: g,
      getReferenceProps: h
    }),
    [
      s,
      u,
      l.setFloating,
      d,
      n,
      g,
      h
    ]
  );
}
function X(e) {
  const [t, n] = x();
  return R(() => e((o) => {
    n({ ...o });
  }), [e]), t;
}
function Co(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
const yo = Ot(
  void 0
);
function k() {
  return Ft(yo);
}
var Yt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ht = U.createContext && /* @__PURE__ */ U.createContext(Yt), jo = ["attr", "size", "title"];
function wo(e, t) {
  if (e == null)
    return {};
  var n = Ho(e, t), o, l;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (l = 0; l < a.length; l++)
      o = a[l], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function Ho(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      if (t.indexOf(o) >= 0)
        continue;
      n[o] = e[o];
    }
  return n;
}
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}
function _t(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _t(Object(n), !0).forEach(function(o) {
      _o(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function _o(e, t, n) {
  return t = So(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function So(e) {
  var t = Mo(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mo(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kt(e) {
  return e && e.map((t, n) => /* @__PURE__ */ U.createElement(t.tag, pe({
    key: n
  }, t.attr), Kt(t.child)));
}
function C(e) {
  return (t) => /* @__PURE__ */ U.createElement(Vo, ge({
    attr: pe({}, e.attr)
  }, t), Kt(e.child));
}
function Vo(e) {
  var t = (n) => {
    var {
      attr: o,
      size: l,
      title: a
    } = e, c = wo(e, jo), s = l || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ U.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, o, c, {
      className: u,
      style: pe(pe({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ U.createElement("title", null, a), e.children);
  };
  return Ht !== void 0 ? /* @__PURE__ */ U.createElement(Ht.Consumer, null, (n) => t(n)) : t(Yt);
}
function To(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z" }, child: [] }] })(e);
}
function Ce(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z" }, child: [] }] })(e);
}
function Eo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z" }, child: [] }] })(e);
}
function Bo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z" }, child: [] }] })(e);
}
function Ro(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z" }, child: [] }] })(e);
}
function Lo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z" }, child: [] }] })(e);
}
function Po(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 11H12.5C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6H8V11ZM18 15.5C18 17.9853 15.9853 20 13.5 20H6V4H12.5C14.9853 4 17 6.01472 17 8.5C17 9.70431 16.5269 10.7981 15.7564 11.6058C17.0979 12.3847 18 13.837 18 15.5ZM8 13V18H13.5C14.8807 18 16 16.8807 16 15.5C16 14.1193 14.8807 13 13.5 13H8Z" }, child: [] }] })(e);
}
function St(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M5.55397 22H3.3999L10.9999 3H12.9999L20.5999 22H18.4458L16.0458 16H7.95397L5.55397 22ZM8.75397 14H15.2458L11.9999 5.88517L8.75397 14Z" }, child: [] }] })(e);
}
function Xt(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M13 20H11V13H4V20H2V4H4V11H11V4H13V20ZM21.0005 8V20H19.0005L19 10.204L17 10.74V8.67L19.5005 8H21.0005Z" }, child: [] }] })(e);
}
function Jt(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 4V11H11V4H13V20H11V13H4V20H2V4H4ZM18.5 8C20.5711 8 22.25 9.67893 22.25 11.75C22.25 12.6074 21.9623 13.3976 21.4781 14.0292L21.3302 14.2102L18.0343 18H22V20H15L14.9993 18.444L19.8207 12.8981C20.0881 12.5908 20.25 12.1893 20.25 11.75C20.25 10.7835 19.4665 10 18.5 10C17.5818 10 16.8288 10.7071 16.7558 11.6065L16.75 11.75H14.75C14.75 9.67893 16.4289 8 18.5 8Z" }, child: [] }] })(e);
}
function Qt(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M22 8L21.9984 10L19.4934 12.883C21.0823 13.3184 22.25 14.7728 22.25 16.5C22.25 18.5711 20.5711 20.25 18.5 20.25C16.674 20.25 15.1528 18.9449 14.8184 17.2166L16.7821 16.8352C16.9384 17.6413 17.6481 18.25 18.5 18.25C19.4665 18.25 20.25 17.4665 20.25 16.5C20.25 15.5335 19.4665 14.75 18.5 14.75C18.214 14.75 17.944 14.8186 17.7056 14.9403L16.3992 13.3932L19.3484 10H15V8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z" }, child: [] }] })(e);
}
function Oo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z" }, child: [] }] })(e);
}
function Fo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z" }, child: [] }] })(e);
}
function Mt(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 5H11V19H8V21H16V19H13V5H16V3H8V5ZM2 7C1.44772 7 1 7.44772 1 8V16C1 16.5523 1.44772 17 2 17H8V15H3V9H8V7H2ZM16 9H21V15H16V17H22C22.5523 17 23 16.5523 23 16V8C23 7.44772 22.5523 7 22 7H16V9Z" }, child: [] }] })(e);
}
function No(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M15 20H7V18H9.92661L12.0425 6H9V4H17V6H14.0734L11.9575 18H15V20Z" }, child: [] }] })(e);
}
function Do(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 17H22V19H19V22H17V17ZM7 7H2V5H5V2H7V7ZM18.364 15.5355L16.9497 14.1213L18.364 12.7071C20.3166 10.7545 20.3166 7.58866 18.364 5.63604C16.4113 3.68342 13.2455 3.68342 11.2929 5.63604L9.87868 7.05025L8.46447 5.63604L9.87868 4.22183C12.6123 1.48816 17.0445 1.48816 19.7782 4.22183C22.5118 6.9555 22.5118 11.3877 19.7782 14.1213L18.364 15.5355ZM15.5355 18.364L14.1213 19.7782C11.3877 22.5118 6.9555 22.5118 4.22183 19.7782C1.48816 17.0445 1.48816 12.6123 4.22183 9.87868L5.63604 8.46447L7.05025 9.87868L5.63604 11.2929C3.68342 13.2455 3.68342 16.4113 5.63604 18.364C7.58866 20.3166 10.7545 20.3166 12.7071 18.364L14.1213 16.9497L15.5355 18.364ZM14.8284 7.75736L16.2426 9.17157L9.17157 16.2426L7.75736 14.8284L14.8284 7.75736Z" }, child: [] }] })(e);
}
function en(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z" }, child: [] }] })(e);
}
function tn(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z" }, child: [] }] })(e);
}
function nn(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 4H21V6H8V4ZM5 3V6H6V7H3V6H4V4H3V3H5ZM3 14V11.5H5V11H3V10H6V12.5H4V13H6V14H3ZM5 19.5H3V18.5H5V18H3V17H6V21H3V20H5V19.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" }, child: [] }] })(e);
}
function on(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z" }, child: [] }] })(e);
}
function Io(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.1538 14C17.3846 14.5161 17.5 15.0893 17.5 15.7196C17.5 17.0625 16.9762 18.1116 15.9286 18.867C14.8809 19.6223 13.4335 20 11.5862 20C9.94674 20 8.32335 19.6185 6.71592 18.8555V16.6009C8.23538 17.4783 9.7908 17.917 11.3822 17.917C13.9333 17.917 15.2128 17.1846 15.2208 15.7196C15.2208 15.0939 15.0049 14.5598 14.5731 14.1173C14.5339 14.0772 14.4939 14.0381 14.4531 14H3V12H21V14H17.1538ZM13.076 11H7.62908C7.4566 10.8433 7.29616 10.6692 7.14776 10.4778C6.71592 9.92084 6.5 9.24559 6.5 8.45207C6.5 7.21602 6.96583 6.165 7.89749 5.299C8.82916 4.43299 10.2706 4 12.2219 4C13.6934 4 15.1009 4.32808 16.4444 4.98426V7.13591C15.2448 6.44921 13.9293 6.10587 12.4978 6.10587C10.0187 6.10587 8.77917 6.88793 8.77917 8.45207C8.77917 8.87172 8.99709 9.23796 9.43293 9.55079C9.86878 9.86362 10.4066 10.1135 11.0463 10.3004C11.6665 10.4816 12.3431 10.7148 13.076 11H13.076Z" }, child: [] }] })(e);
}
function Ao(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M13 10V14H19V10H13ZM11 10H5V14H11V10ZM13 19H19V16H13V19ZM11 19V16H5V19H11ZM13 5V8H19V5H13ZM11 5H5V8H11V5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" }, child: [] }] })(e);
}
function qe(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M13 6V21H11V6H5V4H19V6H13Z" }, child: [] }] })(e);
}
function Zo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M8 3V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V3H18V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V3H8ZM4 20H20V22H4V20Z" }, child: [] }] })(e);
}
function Uo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z" }, child: [] }] })(e);
}
function rn(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z" }, child: [] }] })(e);
}
function zo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.0082 3C21.556 3 22 3.44495 22 3.9934L22.0007 13.3417C21.3749 13.1204 20.7015 13 20 13V5H4L4.001 19L13.2929 9.70715C13.6528 9.34604 14.22 9.31823 14.6123 9.62322L14.7065 9.70772L18.2521 13.2586C15.791 14.0069 14 16.2943 14 19C14 19.7015 14.1204 20.3749 14.3417 21.0007L2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7Z" }, child: [] }] })(e);
}
function Wo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L12.0012 14.7562L11.995 18.995L16.2414 19.0012L17.571 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z" }, child: [] }] })(e);
}
function Go(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z" }, child: [] }] })(e);
}
function ln(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z" }, child: [] }] })(e);
}
function $o(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" }, child: [] }] })(e);
}
function qo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z" }, child: [] }] })(e);
}
function Yo(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" }, child: [] }] })(e);
}
function I(e) {
  const t = z();
  if (e || (e = t == null ? void 0 : t.editor), !e)
    throw new Error(
      "'editor' is required, either from BlockNoteContext or as a function argument"
    );
  const n = e, [o, l] = x(() => {
    var a;
    return ((a = n.getSelection()) == null ? void 0 : a.blocks) || [n.getTextCursorPosition().block];
  });
  return W(
    () => {
      var a;
      return l(
        ((a = n.getSelection()) == null ? void 0 : a.blocks) || [n.getTextCursorPosition().block]
      );
    },
    n
  ), o;
}
function S() {
  return z().editor.dictionary;
}
const Ko = {
  bold: Po,
  italic: No,
  underline: Zo,
  strike: Io,
  code: To
};
function Xo(e, t) {
  return e in t.schema.styleSchema && t.schema.styleSchema[e].type === e && t.schema.styleSchema[e].propSchema === "boolean";
}
const me = (e) => {
  const t = S(), n = k(), o = H(), l = Xo(
    e.basicTextStyle,
    o
  ), a = I(o), [c, s] = x(
    e.basicTextStyle in o.getActiveStyles()
  );
  W(() => {
    l && s(e.basicTextStyle in o.getActiveStyles());
  }, o);
  const u = (h) => {
    if (o.focus(), !!l) {
      if (o.schema.styleSchema[h].propSchema !== "boolean")
        throw new Error("can only toggle boolean styles");
      o.toggleStyles({ [h]: !0 });
    }
  };
  if (!M(() => l ? !!a.find((h) => h.content !== void 0) : !1, [l, a]) || !o.isEditable)
    return null;
  const m = Ko[e.basicTextStyle];
  return /* @__PURE__ */ r.jsx(
    n.FormattingToolbar.Button,
    {
      className: "bn-button",
      "data-test": e.basicTextStyle,
      onClick: () => u(e.basicTextStyle),
      isSelected: c,
      label: t.formatting_toolbar[e.basicTextStyle].tooltip,
      mainTooltip: t.formatting_toolbar[e.basicTextStyle].tooltip,
      secondaryTooltip: ke(
        t.formatting_toolbar[e.basicTextStyle].secondary_tooltip,
        t.generic.ctrl_shortcut
      ),
      icon: /* @__PURE__ */ r.jsx(m, {})
    }
  );
}, Ue = (e) => {
  const t = e.textColor || "default", n = e.backgroundColor || "default", o = e.size || 16, l = M(
    () => ({
      pointerEvents: "none",
      fontSize: (o * 0.75).toString() + "px",
      height: o.toString() + "px",
      lineHeight: o.toString() + "px",
      textAlign: "center",
      width: o.toString() + "px"
    }),
    [o]
  );
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "bn-color-icon",
      "data-background-color": n,
      "data-text-color": t,
      style: l,
      children: "A"
    }
  );
}, Vt = [
  "default",
  "gray",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink"
], an = (e) => {
  const t = k(), n = S(), o = () => e.text ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Menu.Label, { children: n.color_picker.text_title }),
    Vt.map((a) => /* @__PURE__ */ r.jsx(
      t.Generic.Menu.Item,
      {
        onClick: () => {
          e.onClick && e.onClick(), e.text.setColor(a);
        },
        "data-test": "text-color-" + a,
        icon: /* @__PURE__ */ r.jsx(Ue, { textColor: a, size: e.iconSize }),
        checked: e.text.color === a,
        children: n.color_picker.colors[a]
      },
      "text-color-" + a
    ))
  ] }) : null, l = () => e.background ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Menu.Label, { children: n.color_picker.background_title }),
    Vt.map((a) => /* @__PURE__ */ r.jsx(
      t.Generic.Menu.Item,
      {
        onClick: () => {
          e.onClick && e.onClick(), e.background.setColor(a);
        },
        "data-test": "background-color-" + a,
        icon: /* @__PURE__ */ r.jsx(Ue, { backgroundColor: a, size: e.iconSize }),
        checked: e.background.color === a,
        children: n.color_picker.colors[a]
      },
      "background-color-" + a
    ))
  ] }) : null;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(o, {}),
    /* @__PURE__ */ r.jsx(l, {})
  ] });
};
function Tt(e, t) {
  return `${e}Color` in t.schema.styleSchema && t.schema.styleSchema[`${e}Color`].type === `${e}Color` && t.schema.styleSchema[`${e}Color`].propSchema === "string";
}
const Jo = () => {
  const e = k(), t = S(), n = H(), o = Tt("text", n), l = Tt("background", n), a = I(n), [c, s] = x(
    o && n.getActiveStyles().textColor || "default"
  ), [u, d] = x(
    l && n.getActiveStyles().backgroundColor || "default"
  );
  W(() => {
    o && s(n.getActiveStyles().textColor || "default"), l && d(
      n.getActiveStyles().backgroundColor || "default"
    );
  }, n);
  const m = _(
    (j) => {
      if (!o)
        throw Error(
          "Tried to set text color, but style does not exist in editor schema."
        );
      j === "default" ? n.removeStyles({ textColor: j }) : n.addStyles({ textColor: j }), setTimeout(() => {
        n.focus();
      });
    },
    [n, o]
  ), h = _(
    (j) => {
      if (!l)
        throw Error(
          "Tried to set background color, but style does not exist in editor schema."
        );
      j === "default" ? n.removeStyles({ backgroundColor: j }) : n.addStyles({ backgroundColor: j }), setTimeout(() => {
        n.focus();
      });
    },
    [l, n]
  );
  return !M(() => {
    if (!o && !l)
      return !1;
    for (const j of a)
      if (j.content !== void 0)
        return !0;
    return !1;
  }, [l, a, o]) || !n.isEditable ? null : /* @__PURE__ */ r.jsxs(e.Generic.Menu.Root, { children: [
    /* @__PURE__ */ r.jsx(e.Generic.Menu.Trigger, { children: /* @__PURE__ */ r.jsx(
      e.FormattingToolbar.Button,
      {
        className: "bn-button",
        "data-test": "colors",
        label: t.formatting_toolbar.colors.tooltip,
        mainTooltip: t.formatting_toolbar.colors.tooltip,
        icon: /* @__PURE__ */ r.jsx(
          Ue,
          {
            textColor: c,
            backgroundColor: u,
            size: 20
          }
        )
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      e.Generic.Menu.Dropdown,
      {
        className: "bn-menu-dropdown bn-color-picker-dropdown",
        children: /* @__PURE__ */ r.jsx(
          an,
          {
            text: o ? {
              color: c,
              setColor: m
            } : void 0,
            background: l ? {
              color: u,
              setColor: h
            } : void 0
          }
        )
      }
    )
  ] });
}, cn = (e) => {
  const t = k(), n = S(), { url: o, text: l, editLink: a } = e, [c, s] = x(o), [u, d] = x(l);
  R(() => {
    s(o), d(l);
  }, [l, o]);
  const m = _(
    (T) => {
      T.key === "Enter" && (T.preventDefault(), a(c, u));
    },
    [a, c, u]
  ), h = _(
    (T) => s(T.currentTarget.value),
    []
  ), g = _(
    (T) => d(T.currentTarget.value),
    []
  ), j = _(
    () => a(c, u),
    [a, c, u]
  );
  return /* @__PURE__ */ r.jsxs(t.Generic.Form.Root, { children: [
    /* @__PURE__ */ r.jsx(
      t.Generic.Form.TextInput,
      {
        className: "bn-text-input",
        name: "url",
        icon: /* @__PURE__ */ r.jsx(en, {}),
        autoFocus: !0,
        placeholder: n.link_toolbar.form.url_placeholder,
        value: c,
        onKeyDown: m,
        onChange: h,
        onSubmit: j
      }
    ),
    /* @__PURE__ */ r.jsx(
      t.Generic.Form.TextInput,
      {
        className: "bn-text-input",
        name: "title",
        icon: /* @__PURE__ */ r.jsx(qe, {}),
        placeholder: n.link_toolbar.form.title_placeholder,
        value: u,
        onKeyDown: m,
        onChange: g,
        onSubmit: j
      }
    )
  ] });
};
function Qo(e) {
  return "link" in e.schema.inlineContentSchema && e.schema.inlineContentSchema.link === "link";
}
const er = () => {
  const e = H(), t = k(), n = S(), o = Qo(e), l = I(e), [a, c] = x(e.getSelectedLinkUrl() || ""), [s, u] = x(e.getSelectedText());
  W(() => {
    u(e.getSelectedText() || ""), c(e.getSelectedLinkUrl() || "");
  }, e);
  const d = _(
    (h, g) => {
      e.createLink(h, g), e.focus();
    },
    [e]
  );
  return !M(() => {
    if (!o)
      return !1;
    for (const h of l)
      if (h.content === void 0)
        return !1;
    return !0;
  }, [o, l]) || !("link" in e.schema.inlineContentSchema) || !e.isEditable ? null : /* @__PURE__ */ r.jsxs(t.Generic.Popover.Root, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Popover.Trigger, { children: /* @__PURE__ */ r.jsx(
      t.FormattingToolbar.Button,
      {
        className: "bn-button",
        "data-test": "createLink",
        label: n.formatting_toolbar.link.tooltip,
        mainTooltip: n.formatting_toolbar.link.tooltip,
        secondaryTooltip: ke(
          n.formatting_toolbar.link.secondary_tooltip,
          n.generic.ctrl_shortcut
        ),
        icon: /* @__PURE__ */ r.jsx(en, {})
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Popover.Content,
      {
        className: "bn-popover-content bn-form-popover",
        variant: "form-popover",
        children: /* @__PURE__ */ r.jsx(cn, { url: a, text: s, editLink: d })
      }
    )
  ] });
}, tr = () => {
  const e = S(), t = k(), n = H(), [o, l] = x(), a = I(n), c = M(() => {
    if (a.length !== 1)
      return;
    const d = a[0];
    if (ie(d, n))
      return l(d.props.caption), d;
  }, [n, a]), s = _(
    (d) => {
      c && d.key === "Enter" && (d.preventDefault(), n.updateBlock(c, {
        props: {
          caption: o
          // TODO
        }
      }));
    },
    [o, n, c]
  ), u = _(
    (d) => l(d.currentTarget.value),
    []
  );
  return !c || le(c, n) || !n.isEditable ? null : /* @__PURE__ */ r.jsxs(t.Generic.Popover.Root, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Popover.Trigger, { children: /* @__PURE__ */ r.jsx(
      t.FormattingToolbar.Button,
      {
        className: "bn-button",
        label: e.formatting_toolbar.file_caption.tooltip,
        mainTooltip: e.formatting_toolbar.file_caption.tooltip,
        icon: /* @__PURE__ */ r.jsx(Mt, {}),
        isSelected: c.props.caption !== ""
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Popover.Content,
      {
        className: "bn-popover-content bn-form-popover",
        variant: "form-popover",
        children: /* @__PURE__ */ r.jsx(t.Generic.Form.Root, { children: /* @__PURE__ */ r.jsx(
          t.Generic.Form.TextInput,
          {
            name: "file-caption",
            icon: /* @__PURE__ */ r.jsx(Mt, {}),
            value: o || "",
            autoFocus: !0,
            placeholder: e.formatting_toolbar.file_caption.input_placeholder,
            onKeyDown: s,
            onChange: u
          }
        ) })
      }
    )
  ] });
}, nr = () => {
  const e = S(), t = k(), n = H(), o = I(n), [l, a] = x(
    () => n.canNestBlock()
  );
  W(() => {
    a(n.canNestBlock());
  }, n);
  const c = _(() => {
    n.focus(), n.nestBlock();
  }, [n]);
  return !M(() => !o.find(
    (u) => n.schema.blockSchema[u.type].content !== "inline"
  ), [n.schema.blockSchema, o]) || !n.isEditable ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      "data-test": "nestBlock",
      onClick: c,
      isDisabled: !l,
      label: e.formatting_toolbar.nest.tooltip,
      mainTooltip: e.formatting_toolbar.nest.tooltip,
      secondaryTooltip: ke(
        e.formatting_toolbar.nest.secondary_tooltip,
        e.generic.ctrl_shortcut
      ),
      icon: /* @__PURE__ */ r.jsx(Fo, {})
    }
  );
}, or = () => {
  const e = S(), t = k(), n = H(), o = I(n), [l, a] = x(
    () => n.canUnnestBlock()
  );
  W(() => {
    a(n.canUnnestBlock());
  }, n);
  const c = _(() => {
    n.focus(), n.unnestBlock();
  }, [n]);
  return !M(() => !o.find(
    (u) => n.schema.blockSchema[u.type].content !== "inline"
  ), [n.schema.blockSchema, o]) || !n.isEditable ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      "data-test": "unnestBlock",
      onClick: c,
      isDisabled: !l,
      label: e.formatting_toolbar.unnest.tooltip,
      mainTooltip: e.formatting_toolbar.unnest.tooltip,
      secondaryTooltip: ke(
        e.formatting_toolbar.unnest.secondary_tooltip,
        e.generic.ctrl_shortcut
      ),
      icon: /* @__PURE__ */ r.jsx(Oo, {})
    }
  );
}, rr = (e) => {
  const t = k(), n = S(), { block: o } = e, l = H(), [a, c] = x(""), s = _(
    (m) => {
      c(m.currentTarget.value);
    },
    []
  ), u = _(
    (m) => {
      m.key === "Enter" && (m.preventDefault(), l.updateBlock(o, {
        props: {
          name: Ct(a),
          url: a
        }
      }));
    },
    [l, o, a]
  ), d = _(() => {
    l.updateBlock(o, {
      props: {
        name: Ct(a),
        url: a
      }
    });
  }, [l, o, a]);
  return /* @__PURE__ */ r.jsxs(t.FilePanel.TabPanel, { className: "bn-tab-panel", children: [
    /* @__PURE__ */ r.jsx(
      t.FilePanel.TextInput,
      {
        className: "bn-text-input",
        placeholder: n.file_panel.embed.url_placeholder,
        value: a,
        onChange: s,
        onKeyDown: u,
        "data-test": "embed-input"
      }
    ),
    /* @__PURE__ */ r.jsx(
      t.FilePanel.Button,
      {
        className: "bn-button",
        onClick: d,
        "data-test": "embed-input-button",
        children: n.file_panel.embed.embed_button[o.type] || n.file_panel.embed.embed_button.file
      }
    )
  ] });
}, ir = (e) => {
  var h;
  const t = k(), n = S(), { block: o, setLoading: l } = e, a = H(), [c, s] = x(!1);
  R(() => {
    c && setTimeout(() => {
      s(!1);
    }, 3e3);
  }, [c]);
  const u = _(
    (g) => {
      if (g === null)
        return;
      async function j(T) {
        if (l(!0), a.uploadFile !== void 0)
          try {
            let O = await a.uploadFile(T);
            typeof O == "string" && (O = {
              props: {
                name: T.name,
                url: O
              }
            }), a.updateBlock(o, O);
          } catch {
            s(!0);
          } finally {
            l(!1);
          }
      }
      j(g);
    },
    [o, a, l]
  ), d = a.schema.blockSchema[o.type], m = d.isFileBlock && ((h = d.fileBlockAcceptMimeTypes) != null && h.length) ? d.fileBlockAcceptMimeTypes.join(",") : "*/*";
  return /* @__PURE__ */ r.jsxs(t.FilePanel.TabPanel, { className: "bn-tab-panel", children: [
    /* @__PURE__ */ r.jsx(
      t.FilePanel.FileInput,
      {
        className: "bn-file-input",
        "data-test": "upload-input",
        accept: m,
        placeholder: n.file_panel.upload.file_placeholder[o.type] || n.file_panel.upload.file_placeholder.file,
        value: null,
        onChange: u
      }
    ),
    c && /* @__PURE__ */ r.jsx("div", { className: "bn-error-text", children: n.file_panel.upload.upload_error })
  ] });
}, sn = (e) => {
  const t = k(), n = S(), o = H(), [l, a] = x(!1), c = e.tabs ?? [
    ...o.uploadFile !== void 0 ? [
      {
        name: n.file_panel.upload.title,
        tabPanel: /* @__PURE__ */ r.jsx(ir, { block: e.block, setLoading: a })
      }
    ] : [],
    {
      name: n.file_panel.embed.title,
      tabPanel: /* @__PURE__ */ r.jsx(rr, { block: e.block })
    }
  ], [s, u] = x(
    e.defaultOpenTab || c[0].name
  );
  return /* @__PURE__ */ r.jsx(
    t.FilePanel.Root,
    {
      className: "bn-panel",
      defaultOpenTab: s,
      openTab: s,
      setOpenTab: u,
      tabs: c,
      loading: l
    }
  );
}, lr = () => {
  const e = S(), t = k(), n = H(), o = I(n), [l, a] = x(!1);
  R(() => {
    a(!1);
  }, [o]);
  const c = o.length === 1 ? o[0] : void 0;
  return c === void 0 || !ie(c, n) || !n.isEditable ? null : /* @__PURE__ */ r.jsxs(t.Generic.Popover.Root, { opened: l, position: "bottom", children: [
    /* @__PURE__ */ r.jsx(t.Generic.Popover.Trigger, { children: /* @__PURE__ */ r.jsx(
      t.FormattingToolbar.Button,
      {
        className: "bn-button",
        onClick: () => a(!l),
        isSelected: l,
        mainTooltip: e.formatting_toolbar.file_replace.tooltip[c.type] || e.formatting_toolbar.file_replace.tooltip.file,
        label: e.formatting_toolbar.file_replace.tooltip[c.type] || e.formatting_toolbar.file_replace.tooltip.file,
        icon: /* @__PURE__ */ r.jsx(Wo, {})
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Popover.Content,
      {
        className: "bn-popover-content bn-panel-popover",
        variant: "panel-popover",
        children: /* @__PURE__ */ r.jsx(sn, { block: c })
      }
    )
  ] });
}, ar = {
  left: Ro,
  center: Eo,
  right: Lo,
  justify: Bo
}, De = (e) => {
  const t = k(), n = S(), o = H(), l = I(o), a = M(() => {
    const d = l[0];
    if (Ae("textAlignment", d, o))
      return d.props.textAlignment;
  }, [o, l]), c = _(
    (d) => {
      o.focus();
      for (const m of l)
        oe("textAlignment", m.type, o) && o.updateBlock(m, {
          props: { textAlignment: d }
        });
    },
    [o, l]
  );
  if (!M(() => !!l.find((d) => "textAlignment" in d.props), [l]) || !o.isEditable)
    return null;
  const u = ar[e.textAlignment];
  return /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      "data-test": `alignText${e.textAlignment.slice(0, 1).toUpperCase() + e.textAlignment.slice(1)}`,
      onClick: () => c(e.textAlignment),
      isSelected: a === e.textAlignment,
      label: n.formatting_toolbar[`align_${e.textAlignment}`].tooltip,
      mainTooltip: n.formatting_toolbar[`align_${e.textAlignment}`].tooltip,
      icon: /* @__PURE__ */ r.jsx(u, {})
    }
  );
}, cr = (e) => [
  {
    name: e.slash_menu.paragraph.title,
    type: "paragraph",
    icon: qe,
    isSelected: (t) => t.type === "paragraph"
  },
  {
    name: e.slash_menu.heading.title,
    type: "heading",
    props: { level: 1 },
    icon: Xt,
    isSelected: (t) => t.type === "heading" && "level" in t.props && t.props.level === 1
  },
  {
    name: e.slash_menu.heading_2.title,
    type: "heading",
    props: { level: 2 },
    icon: Jt,
    isSelected: (t) => t.type === "heading" && "level" in t.props && t.props.level === 2
  },
  {
    name: e.slash_menu.heading_3.title,
    type: "heading",
    props: { level: 3 },
    icon: Qt,
    isSelected: (t) => t.type === "heading" && "level" in t.props && t.props.level === 3
  },
  {
    name: e.slash_menu.bullet_list.title,
    type: "bulletListItem",
    icon: on,
    isSelected: (t) => t.type === "bulletListItem"
  },
  {
    name: e.slash_menu.numbered_list.title,
    type: "numberedListItem",
    icon: nn,
    isSelected: (t) => t.type === "numberedListItem"
  },
  {
    name: e.slash_menu.check_list.title,
    type: "checkListItem",
    icon: tn,
    isSelected: (t) => t.type === "checkListItem"
  }
], sr = (e) => {
  const t = k(), n = S(), o = H(), l = I(o), [a, c] = x(o.getTextCursorPosition().block), s = M(() => (e.items || cr(n)).filter(
    (m) => m.type in o.schema.blockSchema
  ), [o, n, e.items]), u = M(
    () => s.find((m) => m.type === a.type) !== void 0,
    [a.type, s]
  ), d = M(() => {
    const m = (h) => {
      o.focus();
      for (const g of l)
        o.updateBlock(g, {
          type: h.type,
          props: h.props
        });
    };
    return s.map((h) => {
      const g = h.icon;
      return {
        text: h.name,
        icon: /* @__PURE__ */ r.jsx(g, { size: 16 }),
        onClick: () => m(h),
        isSelected: h.isSelected(a)
      };
    });
  }, [a, s, o, l]);
  return W(() => {
    c(o.getTextCursorPosition().block);
  }, o), !u || !o.isEditable ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Select,
    {
      className: "bn-select",
      items: d
    }
  );
}, ur = () => {
  const e = S(), t = k(), n = H(), [o, l] = x(), a = I(n), c = M(() => {
    if (a.length !== 1)
      return;
    const d = a[0];
    if (ie(d, n))
      return l(d.props.name), d;
  }, [n, a]), s = _(
    (d) => {
      c && d.key === "Enter" && (d.preventDefault(), n.updateBlock(c, {
        props: {
          name: o
          // TODO
        }
      }));
    },
    [o, n, c]
  ), u = _(
    (d) => l(d.currentTarget.value),
    []
  );
  return !c || le(c, n) || !n.isEditable ? null : /* @__PURE__ */ r.jsxs(t.Generic.Popover.Root, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Popover.Trigger, { children: /* @__PURE__ */ r.jsx(
      t.FormattingToolbar.Button,
      {
        className: "bn-button",
        label: e.formatting_toolbar.file_rename.tooltip[c.type] || e.formatting_toolbar.file_rename.tooltip.file,
        mainTooltip: e.formatting_toolbar.file_rename.tooltip[c.type] || e.formatting_toolbar.file_rename.tooltip.file,
        icon: /* @__PURE__ */ r.jsx(St, {})
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Popover.Content,
      {
        className: "bn-popover-content bn-form-popover",
        variant: "form-popover",
        children: /* @__PURE__ */ r.jsx(t.Generic.Form.Root, { children: /* @__PURE__ */ r.jsx(
          t.Generic.Form.TextInput,
          {
            name: "file-name",
            icon: /* @__PURE__ */ r.jsx(St, {}),
            value: o || "",
            autoFocus: !0,
            placeholder: e.formatting_toolbar.file_rename.input_placeholder[c.type] || e.formatting_toolbar.file_rename.input_placeholder.file,
            onKeyDown: s,
            onChange: u
          }
        ) })
      }
    )
  ] });
}, dr = () => {
  const e = S(), t = k(), n = H(), o = I(n), l = M(() => {
    if (o.length !== 1)
      return;
    const c = o[0];
    if (ie(c, n))
      return c;
  }, [n, o]), a = _(() => {
    l && l.props.url && (n.focus(), n.resolveFileUrl(l.props.url).then((c) => window.open(c)));
  }, [n, l]);
  return !l || le(l, n) ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      label: e.formatting_toolbar.file_download.tooltip[l.type] || e.formatting_toolbar.file_download.tooltip.file,
      mainTooltip: e.formatting_toolbar.file_download.tooltip[l.type] || e.formatting_toolbar.file_download.tooltip.file,
      icon: /* @__PURE__ */ r.jsx(qo, {}),
      onClick: a
    }
  );
}, fr = () => {
  const e = S(), t = k(), n = H(), o = I(n), l = M(() => {
    if (o.length !== 1)
      return;
    const c = o[0];
    if (Wn(c, n))
      return c;
  }, [n, o]), a = _(() => {
    l && n.updateBlock(l, {
      props: {
        showPreview: !l.props.showPreview
        // TODO
      }
    });
  }, [n, l]);
  return !l || le(l, n) || !n.isEditable ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      label: "Toggle preview",
      mainTooltip: e.formatting_toolbar.file_preview_toggle.tooltip,
      icon: /* @__PURE__ */ r.jsx(zo, {}),
      isSelected: l.props.showPreview,
      onClick: a
    }
  );
}, mr = () => {
  const e = S(), t = k(), n = H(), o = I(n), l = M(() => {
    if (o.length !== 1)
      return;
    const c = o[0];
    if (ie(c, n))
      return c;
  }, [n, o]), a = _(() => {
    n.focus(), n.removeBlocks([l]);
  }, [n, l]);
  return !l || le(l, n) || !n.isEditable ? null : /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Button,
    {
      className: "bn-button",
      label: e.formatting_toolbar.file_delete.tooltip[l.type] || e.formatting_toolbar.file_delete.tooltip.file,
      mainTooltip: e.formatting_toolbar.file_delete.tooltip[l.type] || e.formatting_toolbar.file_delete.tooltip.file,
      icon: /* @__PURE__ */ r.jsx($o, {}),
      onClick: a
    }
  );
}, br = (e) => [
  /* @__PURE__ */ r.jsx(sr, { items: e }, "blockTypeSelect"),
  /* @__PURE__ */ r.jsx(tr, {}, "fileCaptionButton"),
  /* @__PURE__ */ r.jsx(lr, {}, "replaceFileButton"),
  /* @__PURE__ */ r.jsx(ur, {}, "fileRenameButton"),
  /* @__PURE__ */ r.jsx(mr, {}, "fileDeleteButton"),
  /* @__PURE__ */ r.jsx(dr, {}, "fileDownloadButton"),
  /* @__PURE__ */ r.jsx(fr, {}, "filePreviewButton"),
  /* @__PURE__ */ r.jsx(me, { basicTextStyle: "bold" }, "boldStyleButton"),
  /* @__PURE__ */ r.jsx(me, { basicTextStyle: "italic" }, "italicStyleButton"),
  /* @__PURE__ */ r.jsx(
    me,
    {
      basicTextStyle: "underline"
    },
    "underlineStyleButton"
  ),
  /* @__PURE__ */ r.jsx(me, { basicTextStyle: "strike" }, "strikeStyleButton"),
  /* @__PURE__ */ r.jsx(De, { textAlignment: "left" }, "textAlignLeftButton"),
  /* @__PURE__ */ r.jsx(De, { textAlignment: "center" }, "textAlignCenterButton"),
  /* @__PURE__ */ r.jsx(De, { textAlignment: "right" }, "textAlignRightButton"),
  /* @__PURE__ */ r.jsx(Jo, {}, "colorStyleButton"),
  /* @__PURE__ */ r.jsx(nr, {}, "nestBlockButton"),
  /* @__PURE__ */ r.jsx(or, {}, "unnestBlockButton"),
  /* @__PURE__ */ r.jsx(er, {}, "createLinkButton")
], hr = (e) => {
  const t = k();
  return /* @__PURE__ */ r.jsx(
    t.FormattingToolbar.Root,
    {
      className: "bn-toolbar bn-formatting-toolbar",
      children: e.children || br(e.blockTypeSelectItems)
    }
  );
}, Et = (e) => {
  switch (e) {
    case "left":
      return "top-start";
    case "center":
      return "top";
    case "right":
      return "top-end";
    default:
      return "top-start";
  }
}, gr = (e) => {
  const t = he(null), n = H(), [o, l] = x(
    () => {
      const g = n.getTextCursorPosition().block;
      return "textAlignment" in g.props ? Et(
        g.props.textAlignment
      ) : "top-start";
    }
  );
  W(() => {
    const g = n.getTextCursorPosition().block;
    "textAlignment" in g.props ? l(
      Et(
        g.props.textAlignment
      )
    ) : l("top-start");
  }, n);
  const a = X(
    n.formattingToolbar.onUpdate.bind(n.formattingToolbar)
  ), { isMounted: c, ref: s, style: u, getFloatingProps: d } = ae(
    (a == null ? void 0 : a.show) || !1,
    (a == null ? void 0 : a.referencePos) || null,
    3e3,
    {
      placement: o,
      middleware: [re(10), ve()],
      onOpenChange: (g, j) => {
        g || (n.formattingToolbar.closeMenu(), n.focus());
      }
    }
  ), m = M(() => Co([t, s]), [t, s]);
  if (!c || !a)
    return null;
  if (!a.show && t.current)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: m,
        style: u,
        dangerouslySetInnerHTML: { __html: t.current.innerHTML }
      }
    );
  const h = e.formattingToolbar || hr;
  return /* @__PURE__ */ r.jsx("div", { ref: m, style: u, ...d(), children: /* @__PURE__ */ r.jsx(h, {}) });
}, pr = (e) => {
  const t = k(), n = S();
  return /* @__PURE__ */ r.jsx(
    t.LinkToolbar.Button,
    {
      className: "bn-button",
      label: n.link_toolbar.delete.tooltip,
      mainTooltip: n.link_toolbar.delete.tooltip,
      isSelected: !1,
      onClick: e.deleteLink,
      icon: /* @__PURE__ */ r.jsx(Do, {})
    }
  );
}, xr = (e) => {
  const t = k(), n = S();
  return /* @__PURE__ */ r.jsxs(t.Generic.Popover.Root, { children: [
    /* @__PURE__ */ r.jsx(t.Generic.Popover.Trigger, { children: /* @__PURE__ */ r.jsx(
      t.LinkToolbar.Button,
      {
        className: "bn-button",
        mainTooltip: n.link_toolbar.edit.tooltip,
        isSelected: !1,
        children: n.link_toolbar.edit.text
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Popover.Content,
      {
        className: "bn-popover-content bn-form-popover",
        variant: "form-popover",
        children: /* @__PURE__ */ r.jsx(cn, { ...e })
      }
    )
  ] });
}, vr = (e) => {
  const t = k(), n = S();
  return /* @__PURE__ */ r.jsx(
    t.LinkToolbar.Button,
    {
      className: "bn-button",
      mainTooltip: n.link_toolbar.open.tooltip,
      label: n.link_toolbar.open.tooltip,
      isSelected: !1,
      onClick: () => {
        window.open(e.url, "_blank");
      },
      icon: /* @__PURE__ */ r.jsx(Yo, {})
    }
  );
}, kr = (e) => {
  const t = k();
  return e.children ? /* @__PURE__ */ r.jsx(t.LinkToolbar.Root, { className: "bn-toolbar bn-link-toolbar", children: e.children }) : /* @__PURE__ */ r.jsxs(
    t.LinkToolbar.Root,
    {
      className: "bn-toolbar bn-link-toolbar",
      onMouseEnter: e.stopHideTimer,
      onMouseLeave: e.startHideTimer,
      children: [
        /* @__PURE__ */ r.jsx(
          xr,
          {
            url: e.url,
            text: e.text,
            editLink: e.editLink
          }
        ),
        /* @__PURE__ */ r.jsx(vr, { url: e.url }),
        /* @__PURE__ */ r.jsx(pr, { deleteLink: e.deleteLink })
      ]
    }
  );
}, Cr = (e) => {
  const t = H(), n = {
    deleteLink: t.linkToolbar.deleteLink,
    editLink: t.linkToolbar.editLink,
    startHideTimer: t.linkToolbar.startHideTimer,
    stopHideTimer: t.linkToolbar.stopHideTimer
  }, o = X(
    t.linkToolbar.onUpdate.bind(t.linkToolbar)
  ), { isMounted: l, ref: a, style: c, getFloatingProps: s } = ae(
    (o == null ? void 0 : o.show) || !1,
    (o == null ? void 0 : o.referencePos) || null,
    4e3,
    {
      placement: "top-start",
      middleware: [re(10), ve()],
      onOpenChange: (g) => {
        g || (t.linkToolbar.closeMenu(), t.focus());
      }
    }
  );
  if (!l || !o)
    return null;
  const { show: u, referencePos: d, ...m } = o, h = e.linkToolbar || kr;
  return /* @__PURE__ */ r.jsx("div", { ref: a, style: c, ...s(), children: /* @__PURE__ */ r.jsx(h, { ...m, ...n }) });
}, yr = (e) => {
  const t = H();
  if (!t.filePanel)
    throw new Error(
      "FileToolbarController can only be used when BlockNote editor schema contains file block"
    );
  const n = X(
    t.filePanel.onUpdate.bind(t.filePanel)
  ), { isMounted: o, ref: l, style: a, getFloatingProps: c } = ae(
    (n == null ? void 0 : n.show) || !1,
    (n == null ? void 0 : n.referencePos) || null,
    5e3,
    {
      placement: "bottom",
      middleware: [re(10), ve()],
      onOpenChange: (h) => {
        h || (t.filePanel.closeMenu(), t.focus());
      }
    }
  );
  if (!o || !n)
    return null;
  const { show: s, referencePos: u, ...d } = n, m = e.filePanel || sn;
  return /* @__PURE__ */ r.jsx("div", { ref: l, style: a, ...c(), children: /* @__PURE__ */ r.jsx(m, { ...d }) });
};
function jr(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" }, child: [] }, { tag: "path", attr: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z" }, child: [] }] })(e);
}
const wr = (e) => {
  const t = k(), n = S();
  return /* @__PURE__ */ r.jsx(
    t.SideMenu.Button,
    {
      className: "bn-button",
      label: n.side_menu.add_block_label,
      icon: /* @__PURE__ */ r.jsx(
        jr,
        {
          size: 24,
          onClick: e.addBlock,
          "data-test": "dragHandleAdd"
        }
      )
    }
  );
};
function un(e) {
  return C({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }, child: [] }] })(e);
}
const Hr = (e) => {
  const t = k(), n = H();
  return !oe("textColor", e.block.type, n) && !oe("backgroundColor", e.block.type, n) ? null : /* @__PURE__ */ r.jsxs(t.Generic.Menu.Root, { position: "right", sub: !0, children: [
    /* @__PURE__ */ r.jsx(t.Generic.Menu.Trigger, { sub: !0, children: /* @__PURE__ */ r.jsx(
      t.Generic.Menu.Item,
      {
        className: "bn-menu-item",
        subTrigger: !0,
        children: e.children
      }
    ) }),
    /* @__PURE__ */ r.jsx(
      t.Generic.Menu.Dropdown,
      {
        sub: !0,
        className: "bn-menu-dropdown bn-color-picker-dropdown",
        children: /* @__PURE__ */ r.jsx(
          an,
          {
            iconSize: 18,
            text: oe(
              "textColor",
              e.block.type,
              n
            ) && Ae("textColor", e.block, n) ? {
              color: e.block.props.textColor,
              setColor: (o) => n.updateBlock(e.block, {
                type: e.block.type,
                props: { textColor: o }
              })
            } : void 0,
            background: oe(
              "backgroundColor",
              e.block.type,
              n
            ) && Ae("backgroundColor", e.block, n) ? {
              color: e.block.props.backgroundColor,
              setColor: (o) => n.updateBlock(e.block, {
                props: { backgroundColor: o }
              })
            } : void 0
          }
        )
      }
    )
  ] });
}, _r = (e) => {
  const t = k(), n = H();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Item,
    {
      className: "bn-menu-item",
      onClick: () => n.removeBlocks([e.block]),
      children: e.children
    }
  );
}, Sr = (e) => {
  const t = k(), n = S();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Dropdown,
    {
      className: "bn-menu-dropdown bn-drag-handle-menu",
      children: e.children || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(_r, { ...e, children: n.drag_handle.delete_menuitem }),
        /* @__PURE__ */ r.jsx(Hr, { ...e, children: n.drag_handle.colors_menuitem })
      ] })
    }
  );
}, Mr = (e) => {
  const t = k(), n = S(), o = e.dragHandleMenu || Sr;
  return /* @__PURE__ */ r.jsxs(
    t.Generic.Menu.Root,
    {
      onOpenChange: (l) => {
        l ? e.freezeMenu() : (e.unfreezeMenu(), e.editor.focus());
      },
      position: "left",
      children: [
        /* @__PURE__ */ r.jsx(t.Generic.Menu.Trigger, { children: /* @__PURE__ */ r.jsx(
          t.SideMenu.Button,
          {
            label: n.side_menu.drag_handle_label,
            draggable: !0,
            onDragStart: e.blockDragStart,
            onDragEnd: e.blockDragEnd,
            className: "bn-button",
            icon: /* @__PURE__ */ r.jsx(un, { size: 24, "data-test": "dragHandle" })
          }
        ) }),
        /* @__PURE__ */ r.jsx(o, { block: e.block })
      ]
    }
  );
}, Vr = (e) => {
  const t = k(), { addBlock: n, ...o } = e, l = M(() => {
    const a = {
      "data-block-type": e.block.type
    };
    return e.block.type === "heading" && (a["data-level"] = e.block.props.level.toString()), e.editor.schema.blockSchema[e.block.type].isFileBlock && (e.block.props.url ? a["data-url"] = "true" : a["data-url"] = "false"), a;
  }, [e.block, e.editor.schema.blockSchema]);
  return /* @__PURE__ */ r.jsx(t.SideMenu.Root, { className: "bn-side-menu", ...l, children: e.children || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(wr, { addBlock: n }),
    /* @__PURE__ */ r.jsx(Mr, { ...o })
  ] }) });
}, Tr = (e) => {
  const t = H(), n = {
    addBlock: t.sideMenu.addBlock,
    blockDragStart: t.sideMenu.blockDragStart,
    blockDragEnd: t.sideMenu.blockDragEnd,
    freezeMenu: t.sideMenu.freezeMenu,
    unfreezeMenu: t.sideMenu.unfreezeMenu
  }, o = X(
    t.sideMenu.onUpdate.bind(t.sideMenu)
  ), { isMounted: l, ref: a, style: c, getFloatingProps: s } = ae(
    (o == null ? void 0 : o.show) || !1,
    (o == null ? void 0 : o.referencePos) || null,
    1e3,
    {
      placement: "left-start"
    }
  );
  if (!l || !o)
    return null;
  const { show: u, referencePos: d, ...m } = o, h = e.sideMenu || Vr;
  return /* @__PURE__ */ r.jsx("div", { ref: a, style: c, ...s(), children: /* @__PURE__ */ r.jsx(h, { ...m, ...n, editor: t }) });
};
function Er(e) {
  const t = k(), n = S(), { items: o, loadingState: l, selectedIndex: a, onItemClick: c } = e, s = l === "loading-initial" || l === "loading" ? /* @__PURE__ */ r.jsx(t.SuggestionMenu.Loader, { className: "bn-suggestion-menu-loader", children: n.suggestion_menu.loading }) : null, u = M(() => {
    let d;
    const m = [];
    for (let h = 0; h < o.length; h++) {
      const g = o[h];
      g.group !== d && (d = g.group, m.push(
        /* @__PURE__ */ r.jsx(
          t.SuggestionMenu.Label,
          {
            className: "bn-suggestion-menu-label",
            children: d
          },
          d
        )
      )), m.push(
        /* @__PURE__ */ r.jsx(
          t.SuggestionMenu.Item,
          {
            className: "bn-suggestion-menu-item",
            item: g,
            id: `bn-suggestion-menu-item-${h}`,
            isSelected: h === a,
            onClick: () => c == null ? void 0 : c(g)
          },
          g.title
        )
      );
    }
    return m;
  }, [t, o, c, a]);
  return /* @__PURE__ */ r.jsxs(
    t.SuggestionMenu.Root,
    {
      id: "bn-suggestion-menu",
      className: "bn-suggestion-menu",
      children: [
        u,
        u.length === 0 && (e.loadingState === "loading" || e.loadingState === "loaded") && /* @__PURE__ */ r.jsx(
          t.SuggestionMenu.EmptyItem,
          {
            className: "bn-suggestion-menu-item",
            children: n.suggestion_menu.no_items_title
          }
        ),
        s
      ]
    }
  );
}
function Br(e, t, n, o = 3) {
  const l = he(0);
  R(() => {
    t !== void 0 && (e.length > 0 ? l.current = t.length : t.length - l.current > o && n());
  }, [n, o, e.length, t]);
}
function Rr(e, t) {
  const [n, o] = x([]), [l, a] = x(!1), c = he(), s = he();
  return R(() => {
    const u = e;
    c.current = e, a(!0), t(e).then((d) => {
      c.current === u && (o(d), a(!1), s.current = u);
    });
  }, [e, t]), {
    items: n || [],
    // The query that was used to retrieve the last set of items may not be the
    // same as the current query as the items from the current query may not
    // have been retrieved yet. This is useful when using the returns of this
    // hook in other hooks.
    usedQuery: s.current,
    loadingState: s.current === void 0 ? "loading-initial" : l ? "loading" : "loaded"
  };
}
function Lr(e, t, n, o) {
  const [l, a] = x(0);
  return R(() => {
    const c = (s) => s.key === "ArrowUp" ? (s.preventDefault(), n.length && a((l - 1 + n.length) % n.length), !0) : s.key === "ArrowDown" ? (s.preventDefault(), n.length && a((l + 1) % n.length), !0) : s.key === "Enter" ? (s.preventDefault(), n.length && (o == null || o(n[l])), !0) : !1;
    return e.domElement.addEventListener(
      "keydown",
      c,
      !0
    ), () => {
      e.domElement.removeEventListener(
        "keydown",
        c,
        !0
      );
    };
  }, [e.domElement, n, l, o]), R(() => {
    a(0);
  }, [t]), {
    selectedIndex: n.length === 0 ? void 0 : l
  };
}
function Pr(e) {
  const n = z().setContentEditableProps, o = H(), {
    getItems: l,
    suggestionMenuComponent: a,
    query: c,
    clearQuery: s,
    closeMenu: u,
    onItemClick: d
  } = e, m = _(
    (F) => {
      u(), s(), d == null || d(F);
    },
    [d, u, s]
  ), { items: h, usedQuery: g, loadingState: j } = Rr(
    c,
    l
  );
  Br(h, g, u);
  const { selectedIndex: T } = Lr(
    o,
    c,
    h,
    m
  );
  R(() => (n((F) => ({
    ...F,
    "aria-expanded": !0,
    "aria-controls": "bn-suggestion-menu"
  })), () => {
    n((F) => ({
      ...F,
      "aria-expanded": !1,
      "aria-controls": void 0
    }));
  }), [n]), R(() => (n((F) => ({
    ...F,
    "aria-activedescendant": T ? "bn-suggestion-menu-item-" + T : void 0
  })), () => {
    n((F) => ({
      ...F,
      "aria-activedescendant": void 0
    }));
  }), [n, T]);
  const O = a;
  return /* @__PURE__ */ r.jsx(
    O,
    {
      items: h,
      onItemClick: m,
      loadingState: j,
      selectedIndex: T
    }
  );
}
const Or = {
  heading: Xt,
  heading_2: Jt,
  heading_3: Qt,
  numbered_list: nn,
  bullet_list: on,
  check_list: tn,
  paragraph: qe,
  table: Ao,
  image: rn,
  video: Uo,
  audio: ln,
  file: Ce
};
function Fr(e) {
  return Gn(e).map((t) => {
    const n = Or[t.key];
    return {
      ...t,
      icon: /* @__PURE__ */ r.jsx(n, { size: 18 })
    };
  });
}
function Nr(e) {
  const t = H(), { triggerCharacter: n, suggestionMenuComponent: o } = e, { onItemClick: l, getItems: a, maxHeight: c, placement: s = "bottom-start" } = e, u = M(() => l || ((P) => {
    P.onItemClick(t);
  }), [t, l]), d = M(() => a || (async (P) => $n(
    Fr(t),
    P
  )), [t, a]), m = {
    closeMenu: t.suggestionMenus.closeMenu,
    clearQuery: t.suggestionMenus.clearQuery
  }, h = _(
    (P) => t.suggestionMenus.onUpdate(n, P),
    [t.suggestionMenus, n]
  ), g = X(h), { isMounted: j, ref: T, style: O, getFloatingProps: F } = ae(
    (g == null ? void 0 : g.show) || !1,
    (g == null ? void 0 : g.referencePos) || null,
    2e3,
    {
      placement: s,
      middleware: [
        re(10),
        // Flips the menu placement to maximize the space available, and prevents
        // the menu from being cut off by the confines of the screen.
        ve(),
        zn({
          apply({ availableHeight: P, elements: E }) {
            Object.assign(E.floating.style, {
              maxHeight: `${c || P - 10}px`
            });
          }
        })
      ],
      onOpenChange(P) {
        P || t.suggestionMenus.closeMenu();
      }
    }
  );
  return !j || !g ? null : /* @__PURE__ */ r.jsx("div", { ref: T, style: O, ...F(), children: /* @__PURE__ */ r.jsx(
    Pr,
    {
      query: g.query,
      closeMenu: m.closeMenu,
      clearQuery: m.clearQuery,
      getItems: d,
      suggestionMenuComponent: o || Er,
      onItemClick: u
    }
  ) });
}
const Dr = (e) => {
  const t = k(), n = S(), o = H();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Item,
    {
      onClick: () => {
        const l = e.block.content.rows[e.index].cells.map(
          () => []
        ), a = [...e.block.content.rows];
        a.splice(e.index + (e.side === "below" ? 1 : 0), 0, {
          cells: l
        }), o.updateBlock(e.block, {
          type: "table",
          content: {
            type: "tableContent",
            rows: a
          }
        });
      },
      children: n.table_handle[`add_${e.side}_menuitem`]
    }
  );
}, Ir = (e) => {
  const t = k(), n = S(), o = H();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Item,
    {
      onClick: () => {
        const l = {
          type: "tableContent",
          rows: e.block.content.rows.map((a) => {
            const c = [...a.cells];
            return c.splice(e.index + (e.side === "right" ? 1 : 0), 0, []), { cells: c };
          })
        };
        o.updateBlock(e.block, {
          type: "table",
          content: l
        });
      },
      children: n.table_handle[`add_${e.side}_menuitem`]
    }
  );
}, Bt = (e) => e.orientation === "row" ? /* @__PURE__ */ r.jsx(Dr, { ...e, side: e.side }) : /* @__PURE__ */ r.jsx(Ir, { ...e, side: e.side }), Ar = (e) => {
  const t = k(), n = S(), o = H();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Item,
    {
      onClick: () => {
        const l = {
          type: "tableContent",
          rows: e.block.content.rows.filter(
            (a, c) => c !== e.index
          )
        };
        o.updateBlock(e.block, {
          type: "table",
          content: l
        });
      },
      children: n.table_handle.delete_row_menuitem
    }
  );
}, Zr = (e) => {
  const t = k(), n = S(), o = H();
  return /* @__PURE__ */ r.jsx(
    t.Generic.Menu.Item,
    {
      onClick: () => {
        const l = {
          type: "tableContent",
          rows: e.block.content.rows.map((a) => ({
            cells: a.cells.filter((c, s) => s !== e.index)
          }))
        };
        o.updateBlock(e.block, {
          type: "table",
          content: l
        });
      },
      children: n.table_handle.delete_column_menuitem
    }
  );
}, Ur = (e) => e.orientation === "row" ? /* @__PURE__ */ r.jsx(Ar, { ...e }) : /* @__PURE__ */ r.jsx(Zr, { ...e }), zr = (e) => {
  const t = k();
  return /* @__PURE__ */ r.jsx(t.Generic.Menu.Dropdown, { className: "bn-table-handle-menu", children: e.children || /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      Ur,
      {
        orientation: e.orientation,
        block: e.block,
        index: e.index
      }
    ),
    /* @__PURE__ */ r.jsx(
      Bt,
      {
        orientation: e.orientation,
        block: e.block,
        index: e.index,
        side: e.orientation === "row" ? "above" : "left"
      }
    ),
    /* @__PURE__ */ r.jsx(
      Bt,
      {
        orientation: e.orientation,
        block: e.block,
        index: e.index,
        side: e.orientation === "row" ? "below" : "right"
      }
    )
  ] }) });
}, Wr = (e) => {
  const t = k(), [n, o] = x(!1), l = e.tableHandleMenu || zr;
  return /* @__PURE__ */ r.jsxs(
    t.Generic.Menu.Root,
    {
      onOpenChange: (a) => {
        a ? (e.freezeHandles(), e.hideOtherSide()) : (e.unfreezeHandles(), e.showOtherSide(), e.editor.focus());
      },
      position: "right",
      children: [
        /* @__PURE__ */ r.jsx(t.Generic.Menu.Trigger, { children: /* @__PURE__ */ r.jsx(
          t.TableHandle.Root,
          {
            className: We(
              "bn-table-handle",
              n ? "bn-table-handle-dragging" : ""
            ),
            draggable: !0,
            onDragStart: (a) => {
              o(!0), e.dragStart(a);
            },
            onDragEnd: () => {
              e.dragEnd(), o(!1);
            },
            style: e.orientation === "column" ? { transform: "rotate(0.25turn)" } : void 0,
            children: e.children || /* @__PURE__ */ r.jsx(un, { size: 24, "data-test": "tableHandle" })
          }
        ) }),
        /* @__PURE__ */ r.jsx(
          l,
          {
            orientation: e.orientation,
            block: e.block,
            index: e.index
          }
        )
      ]
    }
  );
};
function Gr(e, t, n) {
  return n && n.draggedCellOrientation === "row" ? new DOMRect(
    t.x,
    n.mousePos,
    t.width,
    0
  ) : new DOMRect(
    t.x,
    e.y,
    t.width,
    e.height
  );
}
function $r(e, t, n) {
  return n && n.draggedCellOrientation === "col" ? new DOMRect(
    n.mousePos,
    t.y,
    0,
    t.height
  ) : new DOMRect(
    e.x,
    t.y,
    e.width,
    t.height
  );
}
function Rt(e, t, n, o, l) {
  const { refs: a, update: c, context: s, floatingStyles: u } = Nt({
    open: t,
    placement: e === "row" ? "left" : "top",
    middleware: [re(e === "row" ? -10 : -12)]
  }), { isMounted: d, styles: m } = Dt(s);
  return R(() => {
    c();
  }, [n, o, c]), R(() => {
    n === null || o === null || a.setReference({
      getBoundingClientRect: () => (e === "row" ? Gr : $r)(n, o, l)
    });
  }, [l, e, n, o, a]), M(
    () => ({
      isMounted: d,
      ref: a.setFloating,
      style: {
        display: "flex",
        ...m,
        ...u,
        zIndex: 1e4
      }
    }),
    [u, d, a.setFloating, m]
  );
}
function qr(e, t, n, o) {
  const l = Rt(
    "row",
    e,
    t,
    n,
    o
  ), a = Rt(
    "col",
    e,
    t,
    n,
    o
  );
  return M(
    () => ({
      rowHandle: l,
      colHandle: a
    }),
    [a, l]
  );
}
const Yr = (e) => {
  var g, j;
  const t = H();
  if (!t.tableHandles)
    throw new Error(
      "TableHandlesController can only be used when BlockNote editor schema contains table block"
    );
  const n = {
    rowDragStart: t.tableHandles.rowDragStart,
    colDragStart: t.tableHandles.colDragStart,
    dragEnd: t.tableHandles.dragEnd,
    freezeHandles: t.tableHandles.freezeHandles,
    unfreezeHandles: t.tableHandles.unfreezeHandles
  }, o = X(
    t.tableHandles.onUpdate.bind(t.tableHandles)
  ), l = M(() => {
    var T, O;
    return o != null && o.draggingState ? {
      draggedCellOrientation: (T = o == null ? void 0 : o.draggingState) == null ? void 0 : T.draggedCellOrientation,
      mousePos: (O = o == null ? void 0 : o.draggingState) == null ? void 0 : O.mousePos
    } : void 0;
  }, [
    o == null ? void 0 : o.draggingState,
    (g = o == null ? void 0 : o.draggingState) == null ? void 0 : g.draggedCellOrientation,
    (j = o == null ? void 0 : o.draggingState) == null ? void 0 : j.mousePos
  ]), { rowHandle: a, colHandle: c } = qr(
    (o == null ? void 0 : o.show) || !1,
    (o == null ? void 0 : o.referencePosCell) || null,
    (o == null ? void 0 : o.referencePosTable) || null,
    l
  ), [s, u] = x(!1), [d, m] = x(!1);
  if (!a.isMounted || !c.isMounted || !o)
    return null;
  const h = e.tableHandle || Wr;
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    !s && /* @__PURE__ */ r.jsx("div", { ref: a.ref, style: a.style, children: /* @__PURE__ */ r.jsx(
      h,
      {
        editor: t,
        orientation: "row",
        showOtherSide: () => m(!1),
        hideOtherSide: () => m(!0),
        index: o.rowIndex,
        block: o.block,
        dragStart: n.rowDragStart,
        dragEnd: n.dragEnd,
        freezeHandles: n.freezeHandles,
        unfreezeHandles: n.unfreezeHandles
      }
    ) }),
    !d && /* @__PURE__ */ r.jsx("div", { ref: c.ref, style: c.style, children: /* @__PURE__ */ r.jsx(
      h,
      {
        editor: t,
        orientation: "column",
        showOtherSide: () => u(!1),
        hideOtherSide: () => u(!0),
        index: o.colIndex,
        block: o.block,
        dragStart: n.colDragStart,
        dragEnd: n.dragEnd,
        freezeHandles: n.freezeHandles,
        unfreezeHandles: n.unfreezeHandles
      }
    ) })
  ] });
};
function Kr(e) {
  const t = H();
  if (!t)
    throw new Error(
      "BlockNoteDefaultUI must be used within a BlockNoteContext.Provider"
    );
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    e.formattingToolbar !== !1 && /* @__PURE__ */ r.jsx(gr, {}),
    e.linkToolbar !== !1 && /* @__PURE__ */ r.jsx(Cr, {}),
    e.slashMenu !== !1 && /* @__PURE__ */ r.jsx(Nr, { triggerCharacter: "/" }),
    e.sideMenu !== !1 && /* @__PURE__ */ r.jsx(Tr, {}),
    t.filePanel && e.filePanel !== !1 && /* @__PURE__ */ r.jsx(yr, {}),
    t.tableHandles && e.tableHandles !== !1 && /* @__PURE__ */ r.jsx(Yr, {})
  ] });
}
const Xr = ({
  renderers: e
}) => /* @__PURE__ */ r.jsx(r.Fragment, { children: Object.entries(e).map(([t, n]) => zt(n.reactElement, n.element, t)) });
function Jr(e) {
  const [t, n] = x({}), [o, l] = x();
  return R(() => (e.editor._tiptapEditor.contentComponent = {
    /**
     * Used by TipTap
     */
    setRenderer(a, c) {
      n((s) => ({ ...s, [a]: c }));
    },
    /**
     * Used by TipTap
     */
    removeRenderer(a) {
      n((c) => {
        const s = { ...c };
        return delete s[a], s;
      });
    },
    /**
     * Render a single node to a container within the React context (used by BlockNote renderToDOMSpec)
     */
    renderToElement(a, c) {
      Ut(() => {
        l({ node: a, container: c });
      }), l(void 0);
    }
  }, queueMicrotask(() => {
    e.editor._tiptapEditor.createNodeViews();
  }), () => {
    e.editor._tiptapEditor.contentComponent = null;
  }), [e.editor._tiptapEditor]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Xr, { renderers: t }),
    o && zt(o.node, o.container),
    e.children
  ] });
}
const Lt = () => {
};
function Qr(e, t) {
  const {
    editor: n,
    className: o,
    theme: l,
    children: a,
    editable: c,
    onSelectionChange: s,
    onChange: u,
    formattingToolbar: d,
    linkToolbar: m,
    slashMenu: h,
    sideMenu: g,
    filePanel: j,
    tableHandles: T,
    ...O
  } = e, [F, P] = x(), E = z(), _e = go(), Se = (E == null ? void 0 : E.colorSchemePreference) || _e, ce = l || (Se === "dark" ? "dark" : "light");
  Ge(u || Lt, n), $e(s || Lt, n), R(() => {
    n.isEditable = c !== !1;
  }, [c, n]);
  const Me = M(() => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    a,
    /* @__PURE__ */ r.jsx(
      Kr,
      {
        formattingToolbar: d,
        linkToolbar: m,
        slashMenu: h,
        sideMenu: g,
        filePanel: j,
        tableHandles: T
      }
    )
  ] }), [
    a,
    d,
    m,
    j,
    g,
    h,
    T
  ]), Ve = M(() => ({
    ...E,
    editor: n,
    setContentEditableProps: P
  }), [E, n]);
  return /* @__PURE__ */ r.jsx(qt.Provider, { value: Ve, children: /* @__PURE__ */ r.jsx(Jr, { editor: n, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: We(
        "bn-container",
        ce || "",
        o || ""
      ),
      "data-color-scheme": ce,
      ...O,
      ref: t,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            "aria-autocomplete": "list",
            "aria-haspopup": "listbox",
            ref: n._tiptapEditor.mount,
            ...F
          }
        ),
        Me
      ]
    }
  ) }) });
}
const gi = U.forwardRef(Qr);
var ze, be = po;
if (process.env.NODE_ENV === "production")
  ze = be.createRoot, be.hydrateRoot;
else {
  var Pt = be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ze = function(e, t) {
    Pt.usingClientEntryPoint = !0;
    try {
      return be.createRoot(e, t);
    } finally {
      Pt.usingClientEntryPoint = !1;
    }
  };
}
function xe(e, t) {
  let n;
  const o = document.createElement("div");
  let l;
  const { _tiptapEditor: a } = t || {};
  if (a != null && a.contentComponent ? a.contentComponent.renderToElement(
    e((d) => n = d || void 0),
    o
  ) : (l = ze(o), Ut(() => {
    l.render(e((d) => n = d || void 0));
  })), !o.childElementCount)
    return console.warn("ReactInlineContentSpec: renderHTML() failed"), {
      dom: document.createElement("span")
    };
  n == null || n.setAttribute("data-tmp-find", "true");
  const c = o.cloneNode(!0), s = c.firstElementChild, u = c.querySelector(
    "[data-tmp-find]"
  );
  return u == null || u.removeAttribute("data-tmp-find"), l == null || l.unmount(), {
    dom: s,
    contentDOM: u || void 0
  };
}
function Ie(e) {
  var t;
  return (
    // Creates `blockContent` element
    /* @__PURE__ */ r.jsx(
      Wt,
      {
        ...Object.fromEntries(
          Object.entries(e.domAttributes || {}).filter(
            ([n]) => n !== "class"
          )
        ),
        className: We(
          "bn-block-content",
          ((t = e.domAttributes) == null ? void 0 : t.class) || ""
        ),
        "data-content-type": e.blockType,
        ...Object.fromEntries(
          Object.entries(e.blockProps).filter(
            ([n, o]) => !qn.includes(n) && o !== e.propSchema[n].default
          ).map(([n, o]) => [It(n), o])
        ),
        "data-file-block": e.isFileBlock === !0 || void 0,
        children: e.children
      }
    )
  );
}
function ye(e, t) {
  const n = At({
    name: e.type,
    content: e.content === "inline" ? "inline*" : "",
    group: "blockContent",
    selectable: !0,
    addAttributes() {
      return Zt(e.propSchema);
    },
    parseHTML() {
      return Yn(e, t.parse);
    },
    renderHTML() {
      const o = document.createElement("div");
      return o.setAttribute("data-tmp-placeholder", "true"), {
        dom: o
      };
    },
    addNodeView() {
      return (o) => Gt(
        (l) => {
          var m;
          const a = this.options.editor, c = Kn(
            l.getPos,
            a,
            this.editor,
            e.type
          ), s = ((m = this.options.domAttributes) == null ? void 0 : m.blockContent) || {}, u = $t({}).ref, d = t.render;
          return /* @__PURE__ */ r.jsx(
            Ie,
            {
              blockType: c.type,
              blockProps: c.props,
              propSchema: e.propSchema,
              isFileBlock: e.isFileBlock,
              domAttributes: s,
              children: /* @__PURE__ */ r.jsx(
                d,
                {
                  block: c,
                  editor: a,
                  contentRef: u
                }
              )
            }
          );
        },
        {
          className: "bn-react-node-view-renderer"
        }
      )(o);
    }
  });
  return Xn(e, {
    node: n,
    toInternalHTML: (o, l) => {
      var u, d;
      const a = ((u = n.options.domAttributes) == null ? void 0 : u.blockContent) || {}, c = t.render, s = xe(
        (m) => /* @__PURE__ */ r.jsx(
          Ie,
          {
            blockType: o.type,
            blockProps: o.props,
            propSchema: e.propSchema,
            domAttributes: a,
            children: /* @__PURE__ */ r.jsx(
              c,
              {
                block: o,
                editor: l,
                contentRef: m
              }
            )
          }
        ),
        l
      );
      return (d = s.contentDOM) == null || d.setAttribute("data-editable", ""), s;
    },
    toExternalHTML: (o, l) => {
      var u, d;
      const a = ((u = n.options.domAttributes) == null ? void 0 : u.blockContent) || {}, c = t.toExternalHTML || t.render, s = xe((m) => /* @__PURE__ */ r.jsx(
        Ie,
        {
          blockType: o.type,
          blockProps: o.props,
          propSchema: e.propSchema,
          domAttributes: a,
          children: /* @__PURE__ */ r.jsx(
            c,
            {
              block: o,
              editor: l,
              contentRef: m
            }
          )
        }
      ), l);
      return (d = s.contentDOM) == null || d.setAttribute("data-editable", ""), s;
    }
  });
}
const je = (e) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: "bn-file-default-preview",
    contentEditable: !1,
    draggable: !1,
    children: [
      /* @__PURE__ */ r.jsx("div", { className: "bn-file-default-preview-icon", children: /* @__PURE__ */ r.jsx(Ce, { size: 24 }) }),
      /* @__PURE__ */ r.jsx("p", { className: "bn-file-default-preview-name", children: e.block.props.name })
    ]
  }
), q = (e) => /* @__PURE__ */ r.jsxs("div", { className: "bn-file-and-caption-wrapper", children: [
  e.children,
  e.block.props.caption && /* @__PURE__ */ r.jsx("p", { className: "bn-file-caption", children: e.block.props.caption })
] }), we = (e) => {
  const t = _(
    (o) => {
      o.preventDefault();
    },
    []
  ), n = _(() => {
    e.editor._tiptapEditor.view.dispatch(
      e.editor._tiptapEditor.state.tr.setMeta(
        e.editor.filePanel.plugin,
        {
          block: e.block
        }
      )
    );
  }, [
    e.block,
    e.editor._tiptapEditor.state.tr,
    e.editor._tiptapEditor.view,
    e.editor.filePanel
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "bn-add-file-button",
      onMouseDown: t,
      onClick: n,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "bn-add-file-button-icon", children: e.buttonIcon || /* @__PURE__ */ r.jsx(Ce, { size: 24 }) }),
        /* @__PURE__ */ r.jsx("div", { className: "bn-add-file-button-text", children: e.buttonText })
      ]
    }
  );
}, He = (e) => /* @__PURE__ */ r.jsxs("div", { children: [
  e.children,
  /* @__PURE__ */ r.jsx("p", { children: e.caption })
] }), Ye = (e) => /* @__PURE__ */ r.jsxs("figure", { children: [
  e.children,
  /* @__PURE__ */ r.jsx("figcaption", { children: e.caption })
] }), dn = (e) => {
  const [t, n] = x(!1), [o, l] = x(void 0);
  R(() => {
    const d = (h) => {
      let g;
      e.block.props.textAlignment === "center" ? o.handleUsed === "left" ? g = o.initialWidth + (o.initialClientX - h.clientX) * 2 : g = o.initialWidth + (h.clientX - o.initialClientX) * 2 : o.handleUsed === "left" ? g = o.initialWidth + o.initialClientX - h.clientX : g = o.initialWidth + h.clientX - o.initialClientX;
      const j = 64;
      g < j ? e.setWidth(j) : g > e.editor.domElement.firstElementChild.clientWidth ? e.setWidth(e.editor.domElement.firstElementChild.clientWidth) : e.setWidth(g);
    }, m = () => {
      l(void 0), e.editor.updateBlock(e.block, {
        props: {
          previewWidth: e.width
        }
      });
    };
    return o && (window.addEventListener("mousemove", d), window.addEventListener("mouseup", m)), () => {
      window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", m);
    };
  }, [e, o]);
  const a = _(() => {
    e.editor.isEditable && n(!0);
  }, [e.editor.isEditable]), c = _(() => {
    n(!1);
  }, []), s = _(
    (d) => {
      d.preventDefault(), l({
        handleUsed: "left",
        initialWidth: e.width,
        initialClientX: d.clientX
      });
    },
    [e.width]
  ), u = _(
    (d) => {
      d.preventDefault(), l({
        handleUsed: "right",
        initialWidth: e.width,
        initialClientX: d.clientX
      });
    },
    [e.width]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "bn-visual-media-wrapper",
      onMouseEnter: a,
      onMouseLeave: c,
      children: [
        e.children,
        (t || o) && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "bn-visual-media-resize-handle",
              style: { left: "4px" },
              onMouseDown: s
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "bn-visual-media-resize-handle",
              style: { right: "4px" },
              onMouseDown: u
            }
          )
        ] })
      ]
    }
  );
};
function Ke(e) {
  const t = H(), [n, o] = x("loading"), [l, a] = x();
  if (R(() => {
    let c = !0;
    return (async () => {
      let s = "";
      o("loading");
      try {
        s = await t.resolveFileUrl(e);
      } catch {
        o("error");
        return;
      }
      c && (o("loaded"), a(s));
    })(), () => {
      c = !1;
    };
  }, [t, e]), n !== "loaded")
    return {
      loadingState: n
    };
  if (!l)
    throw new Error("Finished fetching file but did not get download URL.");
  return {
    loadingState: n,
    downloadUrl: l
  };
}
const ei = (e) => {
  const t = Ke(e.block.props.url);
  return t.loadingState === "loading" ? null : /* @__PURE__ */ r.jsx(
    "audio",
    {
      className: "bn-audio",
      src: t.downloadUrl,
      controls: !0,
      contentEditable: !1,
      draggable: !1
    }
  );
}, ti = (e) => {
  if (!e.block.props.url)
    return /* @__PURE__ */ r.jsx("p", { children: "Add audio" });
  const t = e.block.props.showPreview ? /* @__PURE__ */ r.jsx("audio", { src: e.block.props.url }) : /* @__PURE__ */ r.jsx("a", { href: e.block.props.url, children: e.block.props.name || e.block.props.url });
  return e.block.props.caption ? e.block.props.showPreview ? /* @__PURE__ */ r.jsx(Ye, { caption: e.block.props.caption, children: t }) : /* @__PURE__ */ r.jsx(He, { caption: e.block.props.caption, children: t }) : t;
}, pi = ye(Qn, {
  render: (e) => /* @__PURE__ */ r.jsx("div", { className: "bn-file-block-content-wrapper", children: e.block.props.url === "" ? /* @__PURE__ */ r.jsx(
    we,
    {
      ...e,
      editor: e.editor,
      buttonText: e.editor.dictionary.file_blocks.audio.add_button_text,
      buttonIcon: /* @__PURE__ */ r.jsx(ln, { size: 24 })
    }
  ) : e.block.props.showPreview ? /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(ei, { block: e.block, editor: e.editor }) }) : /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(
    je,
    {
      block: e.block,
      editor: e.editor
    }
  ) }) }),
  parse: Jn,
  toExternalHTML: (e) => /* @__PURE__ */ r.jsx(ti, { ...e })
}), ni = (e) => {
  if (!e.block.props.url)
    return /* @__PURE__ */ r.jsx("p", { children: "Add file" });
  const t = /* @__PURE__ */ r.jsx("a", { href: e.block.props.url, children: e.block.props.name || e.block.props.url });
  return e.block.props.caption ? /* @__PURE__ */ r.jsx(He, { caption: e.block.props.caption, children: t }) : t;
}, xi = ye(to, {
  render: (e) => /* @__PURE__ */ r.jsx("div", { className: "bn-file-block-content-wrapper", children: e.block.props.url === "" ? /* @__PURE__ */ r.jsx(
    we,
    {
      block: e.block,
      editor: e.editor,
      buttonIcon: /* @__PURE__ */ r.jsx(Ce, { size: 24 }),
      buttonText: e.editor.dictionary.file_blocks.file.add_button_text
    }
  ) : /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(
    je,
    {
      block: e.block,
      editor: e.editor
    }
  ) }) }),
  parse: eo,
  toExternalHTML: (e) => /* @__PURE__ */ r.jsx(ni, { ...e })
}), oi = (e) => {
  const [t, n] = x(
    Math.min(
      e.block.props.previewWidth,
      e.editor.domElement.firstElementChild.clientWidth
    )
  ), o = Ke(e.block.props.url);
  return o.loadingState === "loading" ? null : /* @__PURE__ */ r.jsx(dn, { ...e, width: t, setWidth: n, children: /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "bn-visual-media",
      src: o.downloadUrl,
      alt: e.block.props.caption || "BlockNote image",
      contentEditable: !1,
      draggable: !1,
      width: t
    }
  ) });
}, ri = (e) => {
  if (!e.block.props.url)
    return /* @__PURE__ */ r.jsx("p", { children: "Add image" });
  const t = e.block.props.showPreview ? /* @__PURE__ */ r.jsx(
    "img",
    {
      src: e.block.props.url,
      alt: e.block.props.name || e.block.props.caption || "BlockNote image",
      width: e.block.props.previewWidth
    }
  ) : /* @__PURE__ */ r.jsx("a", { href: e.block.props.url, children: e.block.props.name || e.block.props.url });
  return e.block.props.caption ? e.block.props.showPreview ? /* @__PURE__ */ r.jsx(Ye, { caption: e.block.props.caption, children: t }) : /* @__PURE__ */ r.jsx(He, { caption: e.block.props.caption, children: t }) : t;
}, vi = ye(oo, {
  render: (e) => /* @__PURE__ */ r.jsx("div", { className: "bn-file-block-content-wrapper", children: e.block.props.url === "" ? /* @__PURE__ */ r.jsx(
    we,
    {
      ...e,
      editor: e.editor,
      buttonText: e.editor.dictionary.file_blocks.image.add_button_text,
      buttonIcon: /* @__PURE__ */ r.jsx(rn, { size: 24 })
    }
  ) : e.block.props.showPreview ? /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(oi, { block: e.block, editor: e.editor }) }) : /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(
    je,
    {
      block: e.block,
      editor: e.editor
    }
  ) }) }),
  parse: no,
  toExternalHTML: (e) => /* @__PURE__ */ r.jsx(ri, { ...e })
}), ii = (e) => {
  const [t, n] = x(
    Math.min(
      e.block.props.previewWidth,
      e.editor.domElement.firstElementChild.clientWidth
    )
  ), o = Ke(e.block.props.url);
  return o.loadingState === "loading" ? null : /* @__PURE__ */ r.jsx(dn, { ...e, width: t, setWidth: n, children: /* @__PURE__ */ r.jsx(
    "video",
    {
      className: "bn-visual-media",
      src: o.downloadUrl,
      controls: !0,
      contentEditable: !1,
      draggable: !1,
      width: t
    }
  ) });
}, li = (e) => {
  if (!e.block.props.url)
    return /* @__PURE__ */ r.jsx("p", { children: "Add video" });
  const t = e.block.props.showPreview ? /* @__PURE__ */ r.jsx("video", { src: e.block.props.url }) : /* @__PURE__ */ r.jsx("a", { href: e.block.props.url, children: e.block.props.name || e.block.props.url });
  return e.block.props.caption ? e.block.props.showPreview ? /* @__PURE__ */ r.jsx(Ye, { caption: e.block.props.caption, children: t }) : /* @__PURE__ */ r.jsx(He, { caption: e.block.props.caption, children: t }) : t;
}, ki = ye(io, {
  render: (e) => /* @__PURE__ */ r.jsx("div", { className: "bn-file-block-content-wrapper", children: e.block.props.url === "" ? /* @__PURE__ */ r.jsx(
    we,
    {
      ...e,
      editor: e.editor,
      buttonText: e.editor.dictionary.file_blocks.video.add_button_text,
      buttonIcon: /* @__PURE__ */ r.jsx(Go, { size: 24 })
    }
  ) : e.block.props.showPreview ? /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(ii, { block: e.block, editor: e.editor }) }) : /* @__PURE__ */ r.jsx(q, { block: e.block, editor: e.editor, children: /* @__PURE__ */ r.jsx(
    je,
    {
      block: e.block,
      editor: e.editor
    }
  ) }) }),
  parse: ro,
  toExternalHTML: (e) => /* @__PURE__ */ r.jsx(li, { ...e })
});
function Ci(e) {
  const t = z();
  if (e || (e = t == null ? void 0 : t.editor), !e)
    throw new Error(
      "'editor' is required, either from BlockNoteContext or as a function argument"
    );
  const n = e, [o, l] = x(() => n.getActiveStyles());
  return Ge(() => {
    l(n.getActiveStyles());
  }, n), $e(() => {
    l(n.getActiveStyles());
  }, n), o;
}
const ai = (e = {}, t = []) => M(() => {
  const n = lo.create(e);
  return window && (window.ProseMirror = n._tiptapEditor), n;
}, t), yi = ai;
function ci() {
  const [, e] = x(0);
  return () => e((t) => t + 1);
}
const ji = (e) => {
  const t = ci();
  R(() => {
    const n = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    };
    return e.on("transaction", n), () => {
      e.off("transaction", n);
    };
  }, [e]);
};
function si(e) {
  return (
    // Creates inline content section element
    /* @__PURE__ */ r.jsx(
      Wt,
      {
        as: "span",
        className: "bn-inline-content-section",
        "data-inline-content-type": e.inlineContentType,
        ...Object.fromEntries(
          Object.entries(e.inlineContentProps).filter(([t, n]) => n !== e.propSchema[t].default).map(([t, n]) => [It(t), n])
        ),
        children: e.children
      }
    )
  );
}
function wi(e, t) {
  const n = At({
    name: e.type,
    inline: !0,
    group: "inline",
    selectable: e.content === "styled",
    atom: e.content === "none",
    content: e.content === "styled" ? "inline*" : "",
    addAttributes() {
      return Zt(e.propSchema);
    },
    addKeyboardShortcuts() {
      return ao(e);
    },
    parseHTML() {
      return co(e);
    },
    renderHTML({ node: o }) {
      const l = this.options.editor, a = yt(
        o,
        l.schema.inlineContentSchema,
        l.schema.styleSchema
      ), c = t.render, s = xe(
        (u) => /* @__PURE__ */ r.jsx(c, { inlineContent: a, contentRef: u }),
        l
      );
      return so(
        s,
        e.type,
        o.attrs,
        e.propSchema
      );
    },
    // TODO: needed?
    addNodeView() {
      const o = this.options.editor;
      return (l) => Gt(
        (a) => {
          const c = $t({}).ref, s = t.render;
          return /* @__PURE__ */ r.jsx(
            si,
            {
              inlineContentProps: a.node.attrs,
              inlineContentType: e.type,
              propSchema: e.propSchema,
              children: /* @__PURE__ */ r.jsx(
                s,
                {
                  contentRef: c,
                  inlineContent: yt(
                    a.node,
                    o.schema.inlineContentSchema,
                    o.schema.styleSchema
                  )
                }
              )
            }
          );
        },
        {
          className: "bn-ic-react-node-view-renderer",
          as: "span"
          // contentDOMElementTag: "span", (requires tt upgrade)
        }
      )(l);
    }
  });
  return uo(e, {
    node: n
  });
}
function Hi(e, t) {
  const n = xo.create({
    name: e.type,
    addAttributes() {
      return fo(e.propSchema);
    },
    parseHTML() {
      return mo(e);
    },
    renderHTML({ mark: o }) {
      const l = {};
      e.propSchema === "string" && (l.value = o.attrs.stringValue);
      const a = t.render, c = xe(
        (s) => /* @__PURE__ */ r.jsx(a, { ...l, contentRef: s }),
        void 0
      );
      return bo(
        c,
        e.type,
        o.attrs.stringValue,
        e.propSchema
      );
    }
  });
  return ho(e, {
    mark: n
  });
}
function _i(e) {
  if (!e.parentElement)
    return "none";
  const t = e.getBoundingClientRect(), n = e.parentElement.getBoundingClientRect(), o = t.top < n.top, l = t.bottom > n.bottom;
  return o && l ? "both" : o ? "top" : l ? "bottom" : "none";
}
export {
  wr as AddBlockButton,
  Bt as AddButton,
  Ir as AddColumnButton,
  we as AddFileButton,
  Dr as AddRowButton,
  ei as AudioPreview,
  ti as AudioToExternalHTML,
  me as BasicTextStyleButton,
  Hr as BlockColorsItem,
  Ie as BlockContentWrapper,
  qt as BlockNoteContext,
  Kr as BlockNoteDefaultUI,
  gi as BlockNoteViewRaw,
  sr as BlockTypeSelect,
  Jo as ColorStyleButton,
  yo as ComponentsContext,
  er as CreateLinkButton,
  je as DefaultFilePreview,
  Ur as DeleteButton,
  Zr as DeleteColumnButton,
  pr as DeleteLinkButton,
  Ar as DeleteRowButton,
  Mr as DragHandleButton,
  Sr as DragHandleMenu,
  xr as EditLinkButton,
  cn as EditLinkMenuItems,
  rr as EmbedTab,
  Ye as FigureWithCaption,
  q as FileAndCaptionWrapper,
  tr as FileCaptionButton,
  sn as FilePanel,
  yr as FilePanelController,
  lr as FileReplaceButton,
  ni as FileToExternalHTML,
  hr as FormattingToolbar,
  gr as FormattingToolbarController,
  oi as ImagePreview,
  ri as ImageToExternalHTML,
  si as InlineContentWrapper,
  kr as LinkToolbar,
  Cr as LinkToolbarController,
  He as LinkWithCaption,
  nr as NestBlockButton,
  vr as OpenLinkButton,
  pi as ReactAudioBlock,
  xi as ReactFileBlock,
  vi as ReactImageBlock,
  ki as ReactVideoBlock,
  _r as RemoveBlockItem,
  dn as ResizeHandlesWrapper,
  Vr as SideMenu,
  Tr as SideMenuController,
  Er as SuggestionMenu,
  Nr as SuggestionMenuController,
  Pr as SuggestionMenuWrapper,
  Wr as TableHandle,
  zr as TableHandleMenu,
  Yr as TableHandlesController,
  De as TextAlignButton,
  or as UnnestBlockButton,
  ir as UploadTab,
  ii as VideoPreview,
  li as VideoToExternalHTML,
  cr as blockTypeSelectItems,
  ye as createReactBlockSpec,
  wi as createReactInlineContentSpec,
  Hi as createReactStyleSpec,
  _i as elementOverflow,
  Fr as getDefaultReactSlashMenuItems,
  br as getFormattingToolbarItems,
  Co as mergeRefs,
  Ci as useActiveStyles,
  yi as useBlockNote,
  z as useBlockNoteContext,
  H as useBlockNoteEditor,
  Br as useCloseSuggestionMenuNoItems,
  k as useComponentsContext,
  ai as useCreateBlockNote,
  S as useDictionary,
  Ge as useEditorChange,
  W as useEditorContentOrSelectionChange,
  ji as useEditorForceUpdate,
  $e as useEditorSelectionChange,
  Rr as useLoadSuggestionMenuItems,
  Ke as useResolveUrl,
  I as useSelectedBlocks,
  Lr as useSuggestionMenuKeyboardNavigation,
  qr as useTableHandlesPositioning
};
//# sourceMappingURL=blocknote-react.js.map
