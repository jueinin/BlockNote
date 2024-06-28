import Ae, { forwardRef as R, useRef as Tr, useEffect as _r } from "react";
import { assertEmpty as x, mergeCSSClasses as T, isSafari as kr } from "@blocknote/core";
import { elementOverflow as Sr, mergeRefs as Pr, ComponentsContext as Cr, BlockNoteViewRaw as wr } from "@blocknote/react";
import { FormProvider as ne, FormLabel as Nr, FormInput as ae, Menu as Or, MenuButton as Le, MenuItem as Ne, MenuButtonArrow as Dr, CheckboxCheck as Oe, MenuGroupLabel as Ir, MenuSeparator as Fr, MenuProvider as Mr, TabProvider as Ar, TabList as Lr, Tab as $r, TabPanel as Wr, Button as oe, PopoverDisclosure as Yr, Popover as Vr, PopoverProvider as Br, Group as $e, Toolbar as Ur, TooltipProvider as Kr, TooltipAnchor as Gr, ToolbarItem as We, Tooltip as Jr, SelectProvider as qr, Select as Hr, SelectArrow as zr, SelectPopover as Xr, SelectItem as Zr, SelectItemCheck as Qr } from "@ariakit/react";
var te = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function et() {
  if (De)
    return W;
  De = 1;
  var a = Ae, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(g, u, p) {
    var y, _ = {}, w = null, V = null;
    p !== void 0 && (w = "" + p), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (V = u.ref);
    for (y in u)
      n.call(u, y) && !f.hasOwnProperty(y) && (_[y] = u[y]);
    if (g && g.defaultProps)
      for (y in u = g.defaultProps, u)
        _[y] === void 0 && (_[y] = u[y]);
    return { $$typeof: o, type: g, key: w, ref: V, props: _, _owner: l.current };
  }
  return W.Fragment = i, W.jsx = v, W.jsxs = v, W;
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
var Ie;
function rt() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ae, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), g = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), se = Symbol.iterator, Ye = "@@iterator";
    function Ve(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = se && e[se] || e[Ye];
      return typeof r == "function" ? r : null;
    }
    var I = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          t[c - 1] = arguments[c];
        Be("error", e, t);
      }
    }
    function Be(e, r, t) {
      {
        var c = I.ReactDebugCurrentFrame, b = c.getStackAddendum();
        b !== "" && (r += "%s", t = t.concat([b]));
        var h = t.map(function(m) {
          return String(m);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Ue = !1, Ke = !1, Ge = !1, Je = !1, qe = !1, ie;
    ie = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === f || qe || e === l || e === p || e === y || Je || e === V || Ue || Ke || Ge || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === g || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var c = e.displayName;
      if (c)
        return c;
      var b = r.displayName || r.name || "";
      return b !== "" ? t + "(" + b + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case p:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return le(r) + ".Consumer";
          case v:
            var t = e;
            return le(t._context) + ".Provider";
          case u:
            return ze(e, e.render, "ForwardRef");
          case _:
            var c = e.displayName || null;
            return c !== null ? c : N(e.type) || "Memo";
          case w: {
            var b = e, h = b._payload, m = b._init;
            try {
              return N(m(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, ce, ue, fe, de, ve, me, pe;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Xe() {
      {
        if (A === 0) {
          ce = console.log, ue = console.info, fe = console.warn, de = console.error, ve = console.group, me = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        A++;
      }
    }
    function Ze() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ce
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: fe
            }),
            error: O({}, e, {
              value: de
            }),
            group: O({}, e, {
              value: ve
            }),
            groupCollapsed: O({}, e, {
              value: me
            }),
            groupEnd: O({}, e, {
              value: pe
            })
          });
        }
        A < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = I.ReactCurrentDispatcher, q;
    function B(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (b) {
            var c = b.stack.trim().match(/\n( *(at )?)/);
            q = c && c[1] || "";
          }
        return `
` + q + e;
      }
    }
    var H = !1, U;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Qe();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var c;
      H = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = J.current, J.current = null, Xe();
      try {
        if (r) {
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
            } catch (P) {
              c = P;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (P) {
              c = P;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            c = P;
          }
          e();
        }
      } catch (P) {
        if (P && c && typeof P.stack == "string") {
          for (var d = P.stack.split(`
`), S = c.stack.split(`
`), j = d.length - 1, E = S.length - 1; j >= 1 && E >= 0 && d[j] !== S[E]; )
            E--;
          for (; j >= 1 && E >= 0; j--, E--)
            if (d[j] !== S[E]) {
              if (j !== 1 || E !== 1)
                do
                  if (j--, E--, E < 0 || d[j] !== S[E]) {
                    var C = `
` + d[j].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (j >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        H = !1, J.current = h, Ze(), Error.prepareStackTrace = b;
      }
      var M = e ? e.displayName || e.name : "", D = M ? B(M) : "";
      return typeof e == "function" && U.set(e, D), D;
    }
    function er(e, r, t) {
      return ge(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, rr(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case p:
          return B("Suspense");
        case y:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return er(e.render);
          case _:
            return K(e.type, r, t);
          case w: {
            var c = e, b = c._payload, h = c._init;
            try {
              return K(h(b), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, he = {}, xe = I.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function tr(e, r, t, c, b) {
      {
        var h = Function.call.bind(L);
        for (var m in e)
          if (h(e, m)) {
            var d = void 0;
            try {
              if (typeof e[m] != "function") {
                var S = Error((c || "React class") + ": " + t + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              d = e[m](r, m, c, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              d = j;
            }
            d && !(d instanceof Error) && (G(b), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", t, m, typeof d), G(null)), d instanceof Error && !(d.message in he) && (he[d.message] = !0, G(b), k("Failed %s type: %s", t, d.message), G(null));
          }
      }
    }
    var nr = Array.isArray;
    function z(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Re(e) {
      if (or(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), ye(e);
    }
    var $ = I.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Ee, X;
    X = {};
    function ir(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = N($.current.type);
        X[t] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N($.current.type), e.ref), X[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          je || (je = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, c, b, h, m) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: m,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function vr(e, r, t, c, b) {
      {
        var h, m = {}, d = null, S = null;
        t !== void 0 && (Re(t), d = "" + t), lr(r) && (Re(r.key), d = "" + r.key), ir(r) && (S = r.ref, cr(r, b));
        for (h in r)
          L.call(r, h) && !sr.hasOwnProperty(h) && (m[h] = r[h]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (h in j)
            m[h] === void 0 && (m[h] = j[h]);
        }
        if (d || S) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && ur(m, E), S && fr(m, E);
        }
        return dr(e, d, S, b, c, $.current, m);
      }
    }
    var Z = I.ReactCurrentOwner, Te = I.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function _e() {
      {
        if (Z.current) {
          var e = N(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ke = {};
    function pr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var c = "";
        e && e._owner && e._owner !== Z.current && (c = " It was passed a child from " + N(e._owner.type) + "."), F(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, c), F(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var c = e[t];
            ee(c) && Se(c, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = Ve(e);
          if (typeof b == "function" && b !== e.entries)
            for (var h = b.call(e), m; !(m = h.next()).done; )
              ee(m.value) && Se(m.value, r);
        }
      }
    }
    function br(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var c = N(r);
          tr(t, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var b = N(r);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var c = r[t];
          if (c !== "children" && c !== "key") {
            F(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Ce = {};
    function we(e, r, t, c, b, h) {
      {
        var m = He(e);
        if (!m) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = mr(b);
          S ? d += S : d += _e();
          var j;
          e === null ? j = "null" : z(e) ? j = "array" : e !== void 0 && e.$$typeof === o ? (j = "<" + (N(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, d);
        }
        var E = vr(e, r, t, b, h);
        if (E == null)
          return E;
        if (m) {
          var C = r.children;
          if (C !== void 0)
            if (c)
              if (z(C)) {
                for (var M = 0; M < C.length; M++)
                  Pe(C[M], e);
                Object.freeze && Object.freeze(C);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(C, e);
        }
        if (L.call(r, "key")) {
          var D = N(e), P = Object.keys(r).filter(function(Er) {
            return Er !== "key";
          }), re = P.length > 0 ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[D + re]) {
            var jr = P.length > 0 ? "{" + P.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, D, jr, D), Ce[D + re] = !0;
          }
        }
        return e === n ? gr(E) : br(E), E;
      }
    }
    function hr(e, r, t) {
      return we(e, r, t, !0);
    }
    function xr(e, r, t) {
      return we(e, r, t, !1);
    }
    var yr = xr, Rr = hr;
    Y.Fragment = n, Y.jsx = yr, Y.jsxs = Rr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? te.exports = et() : te.exports = rt();
var s = te.exports;
const tt = (a) => {
  const { children: o, ...i } = a;
  return x(i), /* @__PURE__ */ s.jsx(ne, { children: o });
}, nt = R((a, o) => {
  const {
    className: i,
    name: n,
    label: l,
    icon: f,
    value: v,
    autoFocus: g,
    placeholder: u,
    onKeyDown: p,
    onChange: y,
    onSubmit: _,
    ...w
  } = a;
  return x(w), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    a.label && /* @__PURE__ */ s.jsx(Nr, { name: n, children: l }),
    /* @__PURE__ */ s.jsxs("div", { className: "bn-ak-input-wrapper", children: [
      f,
      /* @__PURE__ */ s.jsx(
        ae,
        {
          className: T("bn-ak-input", i || ""),
          ref: o,
          name: n,
          value: v,
          autoFocus: g,
          placeholder: u,
          onKeyDown: p,
          onChange: y,
          onSubmit: _
        }
      )
    ] })
  ] });
}), at = (a) => {
  const {
    children: o,
    onOpenChange: i,
    position: n,
    sub: l,
    // unused
    ...f
  } = a;
  return x(f), /* @__PURE__ */ s.jsx(
    Mr,
    {
      placement: n,
      setOpen: i,
      virtualFocus: !0,
      children: o
    }
  );
}, ot = R((a, o) => {
  const {
    className: i,
    children: n,
    sub: l,
    // unused
    ...f
  } = a;
  return x(f), /* @__PURE__ */ s.jsx(
    Or,
    {
      unmountOnHide: !0,
      className: T("bn-ak-menu", i || ""),
      ref: o,
      children: n
    }
  );
}), st = R((a, o) => {
  const { className: i, children: n, icon: l, checked: f, subTrigger: v, onClick: g, ...u } = a;
  return x(u), v ? /* @__PURE__ */ s.jsxs(
    Le,
    {
      render: /* @__PURE__ */ s.jsx(Ne, {}),
      className: T("bn-ak-menu-item", i || ""),
      ref: o,
      onClick: g,
      children: [
        l,
        n,
        /* @__PURE__ */ s.jsx(Dr, {}),
        f !== void 0 && /* @__PURE__ */ s.jsx(Oe, { checked: f })
      ]
    }
  ) : /* @__PURE__ */ s.jsxs(
    Ne,
    {
      className: T("bn-ak-menu-item", i || ""),
      ref: o,
      onClick: g,
      children: [
        l,
        n,
        f !== void 0 && /* @__PURE__ */ s.jsx(Oe, { checked: f })
      ]
    }
  );
}), it = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx(
    Ir,
    {
      className: T("bn-ak-group-label", i || ""),
      ref: o,
      children: n
    }
  );
}), lt = (a) => {
  const { children: o, sub: i, ...n } = a;
  return x(n), i ? o : /* @__PURE__ */ s.jsx(Le, { render: o });
}, ct = R((a, o) => {
  const { className: i, ...n } = a;
  return x(n), /* @__PURE__ */ s.jsx(
    Fr,
    {
      className: T("bn-ak-separator", i || ""),
      ref: o
    }
  );
}), ut = R((a, o) => {
  const {
    className: i,
    tabs: n,
    defaultOpenTab: l,
    openTab: f,
    setOpenTab: v,
    loading: g,
    // TODO: implement loading
    ...u
  } = a;
  return x(u), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: T("bn-ak-wrapper", i || ""),
      ref: o,
      children: /* @__PURE__ */ s.jsxs(
        Ar,
        {
          defaultSelectedId: l,
          selectedId: f,
          setActiveId: (p) => {
            p && v(p);
          },
          children: [
            /* @__PURE__ */ s.jsx(Lr, { className: "bn-ak-tab-list", children: n.map((p) => /* @__PURE__ */ s.jsx($r, { className: "bn-ak-tab", id: p.name, children: p.name }, p.name)) }),
            /* @__PURE__ */ s.jsx("div", { className: "bn-ak-panels", children: n.map((p) => /* @__PURE__ */ s.jsx(Wr, { tabId: p.name, children: p.tabPanel }, p.name)) })
          ]
        }
      )
    }
  );
}), ft = R((a, o) => {
  const { className: i, children: n, onClick: l, label: f, ...v } = a;
  return x(v), /* @__PURE__ */ s.jsx(
    oe,
    {
      className: T("bn-ak-button", i || ""),
      onClick: l,
      "aria-label": f,
      ref: o,
      children: n
    }
  );
}), dt = R((a, o) => {
  const { className: i, accept: n, value: l, placeholder: f, onChange: v, ...g } = a;
  return x(g), /* @__PURE__ */ s.jsx(ne, { children: /* @__PURE__ */ s.jsx(
    ae,
    {
      className: i,
      ref: o,
      name: "panel-input",
      type: "file",
      accept: n,
      value: l ? l.name : void 0,
      onChange: async (u) => v == null ? void 0 : v(u.target.files[0]),
      placeholder: f
    }
  ) });
}), vt = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx("div", { className: i, ref: o, children: n });
}), mt = R((a, o) => {
  const { className: i, value: n, placeholder: l, onKeyDown: f, onChange: v, ...g } = a;
  return x(g), /* @__PURE__ */ s.jsx(ne, { children: /* @__PURE__ */ s.jsx(
    ae,
    {
      className: T("bn-ak-input", i || ""),
      name: "panel-input",
      value: n,
      placeholder: l,
      onChange: v,
      onKeyDown: f,
      "data-test": "embed-input",
      ref: o
    }
  ) });
}), pt = R((a, o) => {
  const { children: i, ...n } = a;
  return x(n), /* @__PURE__ */ s.jsx(Yr, { render: i, ref: o });
}), bt = R((a, o) => {
  const { className: i, children: n, variant: l, ...f } = a;
  return x(f), /* @__PURE__ */ s.jsx(
    Vr,
    {
      className: T("bn-ak-popover", i || ""),
      ref: o,
      children: n
    }
  );
}), gt = (a) => {
  const { children: o, opened: i, position: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx(Br, { open: i, placement: n, children: o });
}, ht = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l, !1), /* @__PURE__ */ s.jsx($e, { className: i, ref: o, ...l, children: n });
}), xt = R((a, o) => {
  const {
    className: i,
    children: n,
    icon: l,
    onClick: f,
    label: v,
    onDragEnd: g,
    onDragStart: u,
    draggable: p,
    ...y
  } = a;
  return x(y, !1), /* @__PURE__ */ s.jsxs(
    oe,
    {
      onDragEnd: g,
      onDragStart: u,
      draggable: p,
      "aria-label": v,
      className: T(
        "bn-ak-button bn-ak-secondary",
        i || ""
      ),
      ref: o,
      onClick: f,
      ...y,
      children: [
        l,
        n
      ]
    }
  );
}), yt = R((a, o) => {
  const { className: i, children: n, id: l, ...f } = a;
  return x(f), /* @__PURE__ */ s.jsx(
    $e,
    {
      className: T("bn-ak-menu", i || ""),
      id: l,
      role: "listbox",
      ref: o,
      children: n
    }
  );
}), Rt = R((a, o) => {
  const { className: i, item: n, isSelected: l, onClick: f, id: v, ...g } = a;
  x(g);
  const u = Tr(null);
  return _r(() => {
    if (!u.current || !l)
      return;
    const p = Sr(u.current);
    p === "top" ? u.current.scrollIntoView(!0) : p === "bottom" && u.current.scrollIntoView(!1);
  }, [l]), /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: T("bn-ak-menu-item", i || ""),
      ref: Pr([o, u]),
      id: v,
      onClick: f,
      role: "option",
      "aria-selected": l || void 0,
      children: [
        n.icon && /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "bn-ak-suggestion-menu-item-section",
            "data-position": "left",
            children: n.icon
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "bn-ak-suggestion-menu-item-body", children: [
          /* @__PURE__ */ s.jsx("div", { className: "bn-ak-suggestion-menu-item-title", children: n.title }),
          /* @__PURE__ */ s.jsx("div", { className: "bn-ak-suggestion-menu-item-subtitle", children: n.subtext })
        ] }),
        n.badge && /* @__PURE__ */ s.jsx(
          "div",
          {
            "data-position": "right",
            className: "bn-ak-suggestion-menu-item-section",
            children: /* @__PURE__ */ s.jsx("div", { children: n.badge })
          }
        )
      ]
    }
  );
}), jt = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: T("bn-ak-menu-item", i || ""),
      ref: o,
      children: /* @__PURE__ */ s.jsx("div", { className: "bn-ak-suggestion-menu-item-label", children: n })
    }
  );
}), Et = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx(
    "div",
    {
      className: T("bn-ak-group-label", i || ""),
      ref: o,
      children: n
    }
  );
}), Tt = R((a, o) => {
  const { className: i, children: n, ...l } = a;
  return x(l), /* @__PURE__ */ s.jsx("div", { className: i, ref: o, children: n });
}), _t = R((a, o) => {
  const {
    className: i,
    children: n,
    draggable: l,
    onDragStart: f,
    onDragEnd: v,
    style: g,
    label: u,
    ...p
  } = a;
  return x(p, !1), /* @__PURE__ */ s.jsx(
    oe,
    {
      className: T(
        "bn-ak-button bn-ak-secondary",
        i || ""
      ),
      ref: o,
      "aria-label": u,
      draggable: l,
      onDragStart: f,
      onDragEnd: v,
      style: g,
      ...p,
      children: n
    }
  );
}), Fe = R(
  (a, o) => {
    const { className: i, children: n, onMouseEnter: l, onMouseLeave: f, ...v } = a;
    return x(v), /* @__PURE__ */ s.jsx(
      Ur,
      {
        className: T("bn-ak-toolbar", i || ""),
        ref: o,
        onMouseEnter: l,
        onMouseLeave: f,
        children: n
      }
    );
  }
), Me = R(
  (a, o) => {
    const {
      className: i,
      children: n,
      mainTooltip: l,
      secondaryTooltip: f,
      icon: v,
      isSelected: g,
      isDisabled: u,
      onClick: p,
      label: y,
      ..._
    } = a;
    return x(_, !1), /* @__PURE__ */ s.jsxs(Kr, { children: [
      /* @__PURE__ */ s.jsx(
        Gr,
        {
          className: "link",
          render: /* @__PURE__ */ s.jsxs(
            We,
            {
              "aria-label": y,
              className: T(
                "bn-ak-button bn-ak-secondary",
                i || ""
              ),
              onMouseDown: (w) => {
                kr() && w.currentTarget.focus();
              },
              onClick: p,
              "aria-pressed": g,
              "data-selected": g ? "true" : void 0,
              "data-test": a.mainTooltip.slice(0, 1).toLowerCase() + a.mainTooltip.replace(/\s+/g, "").slice(1),
              disabled: u || !1,
              ref: o,
              ..._,
              children: [
                v,
                n
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ s.jsxs(Jr, { className: "bn-ak-tooltip", children: [
        /* @__PURE__ */ s.jsx("span", { children: l }),
        f && /* @__PURE__ */ s.jsx("span", { children: f })
      ] })
    ] });
  }
), kt = R((a, o) => {
  const { className: i, items: n, isDisabled: l, ...f } = a;
  x(f);
  const v = a.items.filter((u) => u.isSelected)[0], g = (u) => {
    var p, y;
    (y = (p = n.find((_) => _.text === u)).onClick) == null || y.call(p);
  };
  return /* @__PURE__ */ s.jsxs(qr, { value: v.text, setValue: g, children: [
    /* @__PURE__ */ s.jsxs(
      Hr,
      {
        className: "bn-ak-button bn-ak-secondary",
        disabled: l,
        "aria-label": "Text alignment",
        render: /* @__PURE__ */ s.jsx(We, {}),
        children: [
          v.icon,
          " ",
          v.text,
          " ",
          /* @__PURE__ */ s.jsx(zr, {})
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      Xr,
      {
        className: T("bn-ak-popover", i || ""),
        ref: o,
        gutter: 4,
        children: n.map((u) => /* @__PURE__ */ s.jsxs(
          Zr,
          {
            className: "bn-ak-select-item",
            value: u.text,
            children: [
              u.icon,
              u.text,
              u.text === v.text && /* @__PURE__ */ s.jsx(Qr, {})
            ]
          },
          u.text
        ))
      }
    )
  ] });
});
const St = {
  FormattingToolbar: {
    Root: Fe,
    Button: Me,
    Select: kt
  },
  FilePanel: {
    Root: ut,
    Button: ft,
    FileInput: dt,
    TabPanel: vt,
    TextInput: mt
  },
  LinkToolbar: {
    Root: Fe,
    Button: Me
  },
  SideMenu: {
    Root: ht,
    Button: xt
  },
  SuggestionMenu: {
    Root: yt,
    Item: Rt,
    EmptyItem: jt,
    Label: Et,
    Loader: Tt
  },
  TableHandle: {
    Root: _t
  },
  Generic: {
    Form: {
      Root: tt,
      TextInput: nt
    },
    Menu: {
      Root: at,
      Trigger: lt,
      Dropdown: ot,
      Divider: ct,
      Label: it,
      Item: st
    },
    Popover: {
      Root: gt,
      Trigger: pt,
      Content: bt
    }
  }
}, Ot = (a) => {
  const { className: o, ...i } = a;
  return /* @__PURE__ */ s.jsx(Cr.Provider, { value: St, children: /* @__PURE__ */ s.jsx(
    wr,
    {
      className: T("bn-ariakit", o || ""),
      ...i
    }
  ) });
};
export {
  Ot as BlockNoteView,
  St as components
};
//# sourceMappingURL=blocknote-ariakit.js.map
