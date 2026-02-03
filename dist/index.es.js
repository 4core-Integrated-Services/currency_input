import xe, { forwardRef as cr, useState as we, useEffect as dr } from "react";
var B = { exports: {} }, W = {};
var Se;
function vr() {
  if (Se) return W;
  Se = 1;
  var S = xe, T = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.fragment"), O = Object.prototype.hasOwnProperty, j = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(E, c, R) {
    var d, b = {}, _ = null, k = null;
    R !== void 0 && (_ = "" + R), c.key !== void 0 && (_ = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (d in c) O.call(c, d) && !C.hasOwnProperty(d) && (b[d] = c[d]);
    if (E && E.defaultProps) for (d in c = E.defaultProps, c) b[d] === void 0 && (b[d] = c[d]);
    return { $$typeof: T, type: E, key: _, ref: k, props: b, _owner: j.current };
  }
  return W.Fragment = A, W.jsx = h, W.jsxs = h, W;
}
var Y = {};
var Ce;
function pr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var S = xe, T = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.provider"), E = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.suspense_list"), b = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), k = /* @__PURE__ */ Symbol.for("react.offscreen"), N = Symbol.iterator, J = "@@iterator";
    function p(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[J];
      return typeof r == "function" ? r : null;
    }
    var y = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = y.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, Fe = !1, De = !1, Ae = !1, Ie = !1, ee;
    ee = /* @__PURE__ */ Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === O || e === C || Ie || e === j || e === R || e === d || Ae || e === k || ke || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === b || e.$$typeof === h || e.$$typeof === E || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case O:
          return "Fragment";
        case A:
          return "Portal";
        case C:
          return "Profiler";
        case j:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return re(r) + ".Consumer";
          case h:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case _: {
            var i = e, u = i._payload, o = i._init;
            try {
              return w(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, te, ne, ae, oe, ie, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        I++;
      }
    }
    function Ne() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        I < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = y.ReactCurrentDispatcher, G;
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, L;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ve();
    }
    function fe(e, r) {
      if (!e || K)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var m = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, m), m;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = u, Ne(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", x = D ? V(D) : "";
      return typeof e == "function" && L.set(e, x), x;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Me(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Le(e.render);
          case b:
            return M(e.type, r, t);
          case _: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ce = {}, de = y.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var u = Function.call.bind($);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, U(i), f("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Be = Array.isArray;
    function z(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ve(e);
    }
    var ge = y.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, be;
    function Ke(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function He(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: T,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Xe(r, i));
        for (u in r)
          $.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, l), v && Ze(o, l);
        }
        return Qe(e, a, v, i, n, ge.current, o);
      }
    }
    var X = y.ReactCurrentOwner, me = y.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    function he() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Ee = {};
    function tr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + w(e._owner.type) + "."), F(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Re(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = p(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Re(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = w(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, n, i, u) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += he();
          var s;
          e === null ? s = "null" : z(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (z(m)) {
                for (var D = 0; D < m.length; D++)
                  _e(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(m, e);
        }
        if ($.call(r, "key")) {
          var x = w(e), g = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[x + Q]) {
            var lr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, x, lr, x), Te[x + Q] = !0;
          }
        }
        return e === O ? ar(l) : nr(l), l;
      }
    }
    function or(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var ur = ir, sr = or;
    Y.Fragment = O, Y.jsx = ur, Y.jsxs = sr;
  })()), Y;
}
var Pe;
function gr() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? B.exports = vr() : B.exports = pr()), B.exports;
}
var yr = gr();
const mr = cr(
  ({
    value: S = 0,
    onChange: T,
    currency: A = "NGN",
    locale: O = "en-NG",
    className: j = "",
    decimals: C = 2,
    ...h
  }, E) => {
    const [c, R] = we(S), [d, b] = we(!1);
    dr(() => {
      R(S);
    }, [S]);
    const _ = (p) => {
      if (p === "" || p === void 0 || p === null) return "";
      const y = parseFloat(p);
      return isNaN(y) ? "" : new Intl.NumberFormat(O, {
        style: "currency",
        currency: A,
        minimumFractionDigits: C,
        maximumFractionDigits: C
      }).format(y);
    }, k = (p) => p.replace(/[^0-9.]/g, "").replace(/(\..*?)\./g, "$1"), N = (p) => {
      const y = k(p.target.value);
      if (R(y), T) {
        const f = y === "" ? 0 : parseFloat(y);
        T(isNaN(f) ? 0 : f);
      }
    }, J = d ? c : _(c);
    return /* @__PURE__ */ yr.jsx(
      "input",
      {
        ref: E,
        type: "text",
        inputMode: "decimal",
        value: J,
        onChange: N,
        onFocus: (p) => {
          b(!0), h.onFocus?.(p);
        },
        onBlur: (p) => {
          b(!1), h.onBlur?.(p);
        },
        className: `border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed ${j}`,
        ...h
      }
    );
  }
);
export {
  mr as default
};
