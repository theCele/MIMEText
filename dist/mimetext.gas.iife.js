var MimeText = (function (t, e) {
    "use strict";
    class n extends Error {
        name = "";
        description = "";
        constructor(t, e = "") {
            super(e), (this.name = t), (this.description = e);
        }
    }
    var r,
        i,
        o,
        s,
        a,
        u,
        c,
        d,
        f =
            "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof window
                  ? window
                  : "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                      ? self
                      : {};
    function l(t) {
        return t &&
            t.__esModule &&
            Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
    }
    function h() {
        return i
            ? r
            : ((i = 1),
              (r = function (t) {
                  try {
                      return !!t();
                  } catch (t) {
                      return !0;
                  }
              }));
    }
    function p() {
        return s
            ? o
            : ((s = 1),
              (o = !h()(function () {
                  var t = function () {}.bind();
                  return (
                      "function" != typeof t || t.hasOwnProperty("prototype")
                  );
              })));
    }
    function m() {
        if (u) return a;
        u = 1;
        var t = p(),
            e = Function.prototype,
            n = e.call,
            r = t && e.bind.bind(n, n);
        return (
            (a = t
                ? r
                : function (t) {
                      return function () {
                          return n.apply(t, arguments);
                      };
                  }),
            a
        );
    }
    function v() {
        return d ? c : ((d = 1), (c = m()({}.isPrototypeOf)));
    }
    var b,
        y,
        g,
        M,
        T,
        w,
        x,
        E,
        S,
        j,
        O = {};
    function C() {
        if (y) return b;
        y = 1;
        var t = function (t) {
            return t && t.Math === Math && t;
        };
        return (b =
            t("object" == typeof globalThis && globalThis) ||
            t("object" == typeof window && window) ||
            t("object" == typeof self && self) ||
            t("object" == typeof f && f) ||
            t("object" == typeof b && b) ||
            (function () {
                return this;
            })() ||
            Function("return this")());
    }
    function I() {
        if (M) return g;
        M = 1;
        var t = p(),
            e = Function.prototype,
            n = e.apply,
            r = e.call;
        return (
            (g =
                ("object" == typeof Reflect && Reflect.apply) ||
                (t
                    ? r.bind(n)
                    : function () {
                          return r.apply(n, arguments);
                      })),
            g
        );
    }
    function A() {
        if (w) return T;
        w = 1;
        var t = m(),
            e = t({}.toString),
            n = t("".slice);
        return (T = function (t) {
            return n(e(t), 8, -1);
        });
    }
    function _() {
        if (E) return x;
        E = 1;
        var t = A(),
            e = m();
        return (x = function (n) {
            if ("Function" === t(n)) return e(n);
        });
    }
    function D() {
        if (j) return S;
        j = 1;
        var t = "object" == typeof document && document.all;
        return (S =
            void 0 === t && void 0 !== t
                ? function (e) {
                      return "function" == typeof e || e === t;
                  }
                : function (t) {
                      return "function" == typeof t;
                  });
    }
    var $,
        H,
        P,
        B,
        L = {};
    function R() {
        return H
            ? $
            : ((H = 1),
              ($ = !h()(function () {
                  return (
                      7 !==
                      Object.defineProperty({}, 1, {
                          get: function () {
                              return 7;
                          },
                      })[1]
                  );
              })));
    }
    function F() {
        if (B) return P;
        B = 1;
        var t = p(),
            e = Function.prototype.call;
        return (
            (P = t
                ? e.bind(e)
                : function () {
                      return e.apply(e, arguments);
                  }),
            P
        );
    }
    var N,
        X,
        U,
        V,
        W,
        k,
        z,
        G,
        q,
        Y,
        J,
        K,
        Q,
        Z,
        tt,
        et,
        nt,
        rt,
        it,
        ot,
        st,
        at,
        ut,
        ct,
        dt,
        ft,
        lt,
        ht,
        pt,
        mt,
        vt,
        bt,
        yt,
        gt,
        Mt,
        Tt = {};
    function wt() {
        if (N) return Tt;
        N = 1;
        var t = {}.propertyIsEnumerable,
            e = Object.getOwnPropertyDescriptor,
            n = e && !t.call({ 1: 2 }, 1);
        return (
            (Tt.f = n
                ? function (t) {
                      var n = e(this, t);
                      return !!n && n.enumerable;
                  }
                : t),
            Tt
        );
    }
    function xt() {
        return U
            ? X
            : ((U = 1),
              (X = function (t, e) {
                  return {
                      enumerable: !(1 & t),
                      configurable: !(2 & t),
                      writable: !(4 & t),
                      value: e,
                  };
              }));
    }
    function Et() {
        if (W) return V;
        W = 1;
        var t = m(),
            e = h(),
            n = A(),
            r = Object,
            i = t("".split);
        return (V = e(function () {
            return !r("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" === n(t) ? i(t, "") : r(t);
              }
            : r);
    }
    function St() {
        return z
            ? k
            : ((z = 1),
              (k = function (t) {
                  return null == t;
              }));
    }
    function jt() {
        if (q) return G;
        q = 1;
        var t = St(),
            e = TypeError;
        return (G = function (n) {
            if (t(n)) throw new e("Can't call method on " + n);
            return n;
        });
    }
    function Ot() {
        if (J) return Y;
        J = 1;
        var t = Et(),
            e = jt();
        return (Y = function (n) {
            return t(e(n));
        });
    }
    function Ct() {
        if (Q) return K;
        Q = 1;
        var t = D();
        return (K = function (e) {
            return "object" == typeof e ? null !== e : t(e);
        });
    }
    function It() {
        return tt ? Z : ((tt = 1), (Z = {}));
    }
    function At() {
        if (nt) return et;
        nt = 1;
        var t = It(),
            e = C(),
            n = D(),
            r = function (t) {
                return n(t) ? t : void 0;
            };
        return (
            (et = function (n, i) {
                return arguments.length < 2
                    ? r(t[n]) || r(e[n])
                    : (t[n] && t[n][i]) || (e[n] && e[n][i]);
            }),
            et
        );
    }
    function _t() {
        if (it) return rt;
        it = 1;
        var t = C().navigator,
            e = t && t.userAgent;
        return (rt = e ? String(e) : "");
    }
    function Dt() {
        if (st) return ot;
        st = 1;
        var t,
            e,
            n = C(),
            r = _t(),
            i = n.process,
            o = n.Deno,
            s = (i && i.versions) || (o && o.version),
            a = s && s.v8;
        return (
            a &&
                (e =
                    (t = a.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])),
            !e &&
                r &&
                (!(t = r.match(/Edge\/(\d+)/)) || t[1] >= 74) &&
                (t = r.match(/Chrome\/(\d+)/)) &&
                (e = +t[1]),
            (ot = e)
        );
    }
    function $t() {
        if (ut) return at;
        ut = 1;
        var t = Dt(),
            e = h(),
            n = C().String;
        return (at =
            !!Object.getOwnPropertySymbols &&
            !e(function () {
                var e = Symbol("symbol detection");
                return (
                    !n(e) ||
                    !(Object(e) instanceof Symbol) ||
                    (!Symbol.sham && t && t < 41)
                );
            }));
    }
    function Ht() {
        return dt
            ? ct
            : ((dt = 1),
              (ct =
                  $t() && !Symbol.sham && "symbol" == typeof Symbol.iterator));
    }
    function Pt() {
        if (lt) return ft;
        lt = 1;
        var t = At(),
            e = D(),
            n = v(),
            r = Object;
        return (ft = Ht()
            ? function (t) {
                  return "symbol" == typeof t;
              }
            : function (i) {
                  var o = t("Symbol");
                  return e(o) && n(o.prototype, r(i));
              });
    }
    function Bt() {
        if (pt) return ht;
        pt = 1;
        var t = String;
        return (ht = function (e) {
            try {
                return t(e);
            } catch (t) {
                return "Object";
            }
        });
    }
    function Lt() {
        if (vt) return mt;
        vt = 1;
        var t = D(),
            e = Bt(),
            n = TypeError;
        return (mt = function (r) {
            if (t(r)) return r;
            throw new n(e(r) + " is not a function");
        });
    }
    function Rt() {
        if (yt) return bt;
        yt = 1;
        var t = Lt(),
            e = St();
        return (bt = function (n, r) {
            var i = n[r];
            return e(i) ? void 0 : t(i);
        });
    }
    function Ft() {
        if (Mt) return gt;
        Mt = 1;
        var t = F(),
            e = D(),
            n = Ct(),
            r = TypeError;
        return (gt = function (i, o) {
            var s, a;
            if ("string" === o && e((s = i.toString)) && !n((a = t(s, i))))
                return a;
            if (e((s = i.valueOf)) && !n((a = t(s, i)))) return a;
            if ("string" !== o && e((s = i.toString)) && !n((a = t(s, i))))
                return a;
            throw new r("Can't convert object to primitive value");
        });
    }
    var Nt,
        Xt,
        Ut,
        Vt,
        Wt,
        kt,
        zt,
        Gt,
        qt,
        Yt,
        Jt,
        Kt,
        Qt,
        Zt,
        te,
        ee,
        ne,
        re,
        ie,
        oe,
        se,
        ae,
        ue,
        ce,
        de,
        fe,
        le,
        he,
        pe = { exports: {} };
    function me() {
        return Xt ? Nt : ((Xt = 1), (Nt = !0));
    }
    function ve() {
        if (Vt) return Ut;
        Vt = 1;
        var t = C(),
            e = Object.defineProperty;
        return (Ut = function (n, r) {
            try {
                e(t, n, { value: r, configurable: !0, writable: !0 });
            } catch (e) {
                t[n] = r;
            }
            return r;
        });
    }
    function be() {
        if (Wt) return pe.exports;
        Wt = 1;
        var t = me(),
            e = C(),
            n = ve(),
            r = "__core-js_shared__",
            i = (pe.exports = e[r] || n(r, {}));
        return (
            (i.versions || (i.versions = [])).push({
                version: "3.39.0",
                mode: t ? "pure" : "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license:
                    "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
                source: "https://github.com/zloirock/core-js",
            }),
            pe.exports
        );
    }
    function ye() {
        if (zt) return kt;
        zt = 1;
        var t = be();
        return (kt = function (e, n) {
            return t[e] || (t[e] = n || {});
        });
    }
    function ge() {
        if (qt) return Gt;
        qt = 1;
        var t = jt(),
            e = Object;
        return (Gt = function (n) {
            return e(t(n));
        });
    }
    function Me() {
        if (Jt) return Yt;
        Jt = 1;
        var t = m(),
            e = ge(),
            n = t({}.hasOwnProperty);
        return (Yt =
            Object.hasOwn ||
            function (t, r) {
                return n(e(t), r);
            });
    }
    function Te() {
        if (Qt) return Kt;
        Qt = 1;
        var t = m(),
            e = 0,
            n = Math.random(),
            r = t((1).toString);
        return (Kt = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + r(++e + n, 36);
        });
    }
    function we() {
        if (te) return Zt;
        te = 1;
        var t = C(),
            e = ye(),
            n = Me(),
            r = Te(),
            i = $t(),
            o = Ht(),
            s = t.Symbol,
            a = e("wks"),
            u = o ? s.for || s : (s && s.withoutSetter) || r;
        return (Zt = function (t) {
            return (
                n(a, t) || (a[t] = i && n(s, t) ? s[t] : u("Symbol." + t)), a[t]
            );
        });
    }
    function xe() {
        if (ne) return ee;
        ne = 1;
        var t = F(),
            e = Ct(),
            n = Pt(),
            r = Rt(),
            i = Ft(),
            o = TypeError,
            s = we()("toPrimitive");
        return (ee = function (a, u) {
            if (!e(a) || n(a)) return a;
            var c,
                d = r(a, s);
            if (d) {
                if (
                    (void 0 === u && (u = "default"),
                    (c = t(d, a, u)),
                    !e(c) || n(c))
                )
                    return c;
                throw new o("Can't convert object to primitive value");
            }
            return void 0 === u && (u = "number"), i(a, u);
        });
    }
    function Ee() {
        if (ie) return re;
        ie = 1;
        var t = xe(),
            e = Pt();
        return (re = function (n) {
            var r = t(n, "string");
            return e(r) ? r : r + "";
        });
    }
    function Se() {
        if (se) return oe;
        se = 1;
        var t = C(),
            e = Ct(),
            n = t.document,
            r = e(n) && e(n.createElement);
        return (oe = function (t) {
            return r ? n.createElement(t) : {};
        });
    }
    function je() {
        if (ue) return ae;
        ue = 1;
        var t = R(),
            e = h(),
            n = Se();
        return (ae =
            !t &&
            !e(function () {
                return (
                    7 !==
                    Object.defineProperty(n("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            }));
    }
    function Oe() {
        if (ce) return L;
        ce = 1;
        var t = R(),
            e = F(),
            n = wt(),
            r = xt(),
            i = Ot(),
            o = Ee(),
            s = Me(),
            a = je(),
            u = Object.getOwnPropertyDescriptor;
        return (
            (L.f = t
                ? u
                : function (t, c) {
                      if (((t = i(t)), (c = o(c)), a))
                          try {
                              return u(t, c);
                          } catch (t) {}
                      if (s(t, c)) return r(!e(n.f, t, c), t[c]);
                  }),
            L
        );
    }
    function Ce() {
        if (fe) return de;
        fe = 1;
        var t = h(),
            e = D(),
            n = /#|\.prototype\./,
            r = function (n, r) {
                var u = o[i(n)];
                return u === a || (u !== s && (e(r) ? t(r) : !!r));
            },
            i = (r.normalize = function (t) {
                return String(t).replace(n, ".").toLowerCase();
            }),
            o = (r.data = {}),
            s = (r.NATIVE = "N"),
            a = (r.POLYFILL = "P");
        return (de = r);
    }
    function Ie() {
        if (he) return le;
        he = 1;
        var t = _(),
            e = Lt(),
            n = p(),
            r = t(t.bind);
        return (
            (le = function (t, i) {
                return (
                    e(t),
                    void 0 === i
                        ? t
                        : n
                          ? r(t, i)
                          : function () {
                                return t.apply(i, arguments);
                            }
                );
            }),
            le
        );
    }
    var Ae,
        _e,
        De,
        $e,
        He,
        Pe,
        Be,
        Le,
        Re,
        Fe,
        Ne,
        Xe,
        Ue,
        Ve,
        We,
        ke,
        ze,
        Ge,
        qe,
        Ye,
        Je,
        Ke,
        Qe,
        Ze,
        tn,
        en,
        nn,
        rn,
        on,
        sn,
        an,
        un,
        cn,
        dn,
        fn,
        ln,
        hn,
        pn,
        mn,
        vn,
        bn = {};
    function yn() {
        return _e
            ? Ae
            : ((_e = 1),
              (Ae =
                  R() &&
                  h()(function () {
                      return (
                          42 !==
                          Object.defineProperty(function () {}, "prototype", {
                              value: 42,
                              writable: !1,
                          }).prototype
                      );
                  })));
    }
    function gn() {
        if ($e) return De;
        $e = 1;
        var t = Ct(),
            e = String,
            n = TypeError;
        return (De = function (r) {
            if (t(r)) return r;
            throw new n(e(r) + " is not an object");
        });
    }
    function Mn() {
        if (He) return bn;
        He = 1;
        var t = R(),
            e = je(),
            n = yn(),
            r = gn(),
            i = Ee(),
            o = TypeError,
            s = Object.defineProperty,
            a = Object.getOwnPropertyDescriptor,
            u = "enumerable",
            c = "configurable",
            d = "writable";
        return (
            (bn.f = t
                ? n
                    ? function (t, e, n) {
                          if (
                              (r(t),
                              (e = i(e)),
                              r(n),
                              "function" == typeof t &&
                                  "prototype" === e &&
                                  "value" in n &&
                                  d in n &&
                                  !n[d])
                          ) {
                              var o = a(t, e);
                              o &&
                                  o[d] &&
                                  ((t[e] = n.value),
                                  (n = {
                                      configurable: c in n ? n[c] : o[c],
                                      enumerable: u in n ? n[u] : o[u],
                                      writable: !1,
                                  }));
                          }
                          return s(t, e, n);
                      }
                    : s
                : function (t, n, a) {
                      if ((r(t), (n = i(n)), r(a), e))
                          try {
                              return s(t, n, a);
                          } catch (t) {}
                      if ("get" in a || "set" in a)
                          throw new o("Accessors not supported");
                      return "value" in a && (t[n] = a.value), t;
                  }),
            bn
        );
    }
    function Tn() {
        if (Be) return Pe;
        Be = 1;
        var t = R(),
            e = Mn(),
            n = xt();
        return (Pe = t
            ? function (t, r, i) {
                  return e.f(t, r, n(1, i));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              });
    }
    function wn() {
        if (Re) return Le;
        Re = 1;
        var t = C(),
            e = I(),
            n = _(),
            r = D(),
            i = Oe().f,
            o = Ce(),
            s = It(),
            a = Ie(),
            u = Tn(),
            c = Me(),
            d = function (t) {
                var n = function (r, i, o) {
                    if (this instanceof n) {
                        switch (arguments.length) {
                            case 0:
                                return new t();
                            case 1:
                                return new t(r);
                            case 2:
                                return new t(r, i);
                        }
                        return new t(r, i, o);
                    }
                    return e(t, this, arguments);
                };
                return (n.prototype = t.prototype), n;
            };
        return (Le = function (e, f) {
            var l,
                h,
                p,
                m,
                v,
                b,
                y,
                g,
                M,
                T = e.target,
                w = e.global,
                x = e.stat,
                E = e.proto,
                S = w ? t : x ? t[T] : t[T] && t[T].prototype,
                j = w ? s : s[T] || u(s, T, {})[T],
                O = j.prototype;
            for (m in f)
                (h =
                    !(l = o(w ? m : T + (x ? "." : "#") + m, e.forced)) &&
                    S &&
                    c(S, m)),
                    (b = j[m]),
                    h &&
                        (y = e.dontCallGetSet
                            ? (M = i(S, m)) && M.value
                            : S[m]),
                    (v = h && y ? y : f[m]),
                    (l || E || typeof b != typeof v) &&
                        ((g =
                            e.bind && h
                                ? a(v, t)
                                : e.wrap && h
                                  ? d(v)
                                  : E && r(v)
                                    ? n(v)
                                    : v),
                        (e.sham || (v && v.sham) || (b && b.sham)) &&
                            u(g, "sham", !0),
                        u(j, m, g),
                        E &&
                            (c(s, (p = T + "Prototype")) || u(s, p, {}),
                            u(s[p], m, v),
                            e.real && O && (l || !O[m]) && u(O, m, v)));
        });
    }
    function xn() {
        if (Ne) return Fe;
        Ne = 1;
        var t = {};
        return (
            (t[we()("toStringTag")] = "z"), (Fe = "[object z]" === String(t))
        );
    }
    function En() {
        if (Ue) return Xe;
        Ue = 1;
        var t = xn(),
            e = D(),
            n = A(),
            r = we()("toStringTag"),
            i = Object,
            o =
                "Arguments" ===
                n(
                    (function () {
                        return arguments;
                    })(),
                );
        return (Xe = t
            ? n
            : function (t) {
                  var s, a, u;
                  return void 0 === t
                      ? "Undefined"
                      : null === t
                        ? "Null"
                        : "string" ==
                            typeof (a = (function (t, e) {
                                try {
                                    return t[e];
                                } catch (t) {}
                            })((s = i(t)), r))
                          ? a
                          : o
                            ? n(s)
                            : "Object" === (u = n(s)) && e(s.callee)
                              ? "Arguments"
                              : u;
              });
    }
    function Sn() {
        if (We) return Ve;
        We = 1;
        var t = En(),
            e = String;
        return (Ve = function (n) {
            if ("Symbol" === t(n))
                throw new TypeError(
                    "Cannot convert a Symbol value to a string",
                );
            return e(n);
        });
    }
    function jn() {
        return ze
            ? ke
            : ((ze = 1),
              (ke = "\t\n\v\f\r                　\u2028\u2029\ufeff"));
    }
    function On() {
        if (qe) return Ge;
        qe = 1;
        var t = m(),
            e = jt(),
            n = Sn(),
            r = jn(),
            i = t("".replace),
            o = RegExp("^[" + r + "]+"),
            s = RegExp("(^|[^" + r + "])[" + r + "]+$"),
            a = function (t) {
                return function (r) {
                    var a = n(e(r));
                    return (
                        1 & t && (a = i(a, o, "")),
                        2 & t && (a = i(a, s, "$1")),
                        a
                    );
                };
            };
        return (Ge = { start: a(1), end: a(2), trim: a(3) });
    }
    function Cn() {
        if (Je) return Ye;
        Je = 1;
        var t = R(),
            e = Me(),
            n = Function.prototype,
            r = t && Object.getOwnPropertyDescriptor,
            i = e(n, "name"),
            o = i && "something" === function () {}.name,
            s = i && (!t || (t && r(n, "name").configurable));
        return (Ye = { EXISTS: i, PROPER: o, CONFIGURABLE: s });
    }
    function In() {
        if (Qe) return Ke;
        Qe = 1;
        var t = Cn().PROPER,
            e = h(),
            n = jn();
        return (Ke = function (r) {
            return e(function () {
                return !!n[r]() || "​᠎" !== "​᠎"[r]() || (t && n[r].name !== r);
            });
        });
    }
    function An() {
        if (en) return tn;
        en = 1;
        var t = C(),
            e = It();
        return (tn = function (n, r) {
            var i = e[n + "Prototype"],
                o = i && i[r];
            if (o) return o;
            var s = t[n],
                a = s && s.prototype;
            return a && a[r];
        });
    }
    function _n() {
        return rn
            ? nn
            : ((rn = 1),
              (function () {
                  if (Ze) return O;
                  Ze = 1;
                  var t = wn(),
                      e = On().trim;
                  t(
                      { target: "String", proto: !0, forced: In()("trim") },
                      {
                          trim: function () {
                              return e(this);
                          },
                      },
                  );
              })(),
              (nn = An()("String", "trim")));
    }
    function Dn() {
        if (sn) return on;
        sn = 1;
        var t = v(),
            e = _n(),
            n = String.prototype;
        return (on = function (r) {
            var i = r.trim;
            return "string" == typeof r || r === n || (t(n, r) && i === n.trim)
                ? e
                : i;
        });
    }
    function $n() {
        return un ? an : ((un = 1), (an = Dn()));
    }
    function Hn() {
        return dn ? cn : ((dn = 1), (cn = $n()));
    }
    function Pn() {
        return ln ? fn : ((ln = 1), (fn = Hn()));
    }
    function Bn() {
        return pn ? hn : ((pn = 1), (hn = Pn()));
    }
    var Ln = l(vn ? mn : ((vn = 1), (mn = Bn())));
    class Rn {
        reSpecCompliantAddr = /(([^<>\r\n]+)\s)?<[^\r\n]+>/;
        name = "";
        addr = "";
        type = "To";
        constructor(t, e = { type: "To" }) {
            (this.type = e.type), this.parse(t);
        }
        getAddrDomain() {
            if (this.addr.includes("@")) {
                const t = this.addr.split("@");
                if (t.length > 1) return t[1];
            }
            return "";
        }
        dump() {
            return this.name.length > 0
                ? `"${this.name}" <${this.addr}>`
                : `<${this.addr}>`;
        }
        parse(t) {
            if (this.isMailboxAddrObject(t))
                return (
                    (this.addr = t.addr),
                    "string" == typeof t.name && (this.name = t.name),
                    "string" == typeof t.type && (this.type = t.type),
                    this
                );
            if (this.isMailboxAddrText(t)) {
                const e = Ln(t).call(t);
                if (e.startsWith("<") && e.endsWith(">"))
                    return (this.addr = e.slice(1, -1)), this;
                const n = e.split(" <");
                return (
                    (n[0] = /^("|')/.test(n[0]) ? n[0].slice(1) : n[0]),
                    (n[0] = /("|')$/.test(n[0]) ? n[0].slice(0, -1) : n[0]),
                    (n[1] = n[1].slice(0, -1)),
                    (this.name = n[0]),
                    (this.addr = n[1]),
                    this
                );
            }
            if ("string" == typeof t) return (this.addr = t), this;
            throw new n(
                "MIMETEXT_INVALID_MAILBOX",
                "Couldn't recognize the input.",
            );
        }
        isMailboxAddrText(t) {
            return "string" == typeof t && this.reSpecCompliantAddr.test(t);
        }
        isMailboxAddrObject(t) {
            return this.isObject(t) && Object.hasOwn(t, "addr");
        }
        isObject(t) {
            return !!t && t.constructor === Object;
        }
    }
    class Fn {
        fields = [
            {
                name: "Date",
                generator: () =>
                    new Date().toUTCString().replace(/GMT|UTC/gi, "+0000"),
            },
            {
                name: "From",
                required: !0,
                validate: (t) => this.validateMailboxSingle(t),
                dump: (t) => this.dumpMailboxSingle(t),
            },
            {
                name: "Sender",
                validate: (t) => this.validateMailboxSingle(t),
                dump: (t) => this.dumpMailboxSingle(t),
            },
            {
                name: "Reply-To",
                validate: (t) => this.validateMailboxSingle(t),
                dump: (t) => this.dumpMailboxSingle(t),
            },
            {
                name: "To",
                validate: (t) => this.validateMailboxMulti(t),
                dump: (t) => this.dumpMailboxMulti(t),
            },
            {
                name: "Cc",
                validate: (t) => this.validateMailboxMulti(t),
                dump: (t) => this.dumpMailboxMulti(t),
            },
            {
                name: "Bcc",
                validate: (t) => this.validateMailboxMulti(t),
                dump: (t) => this.dumpMailboxMulti(t),
            },
            {
                name: "Message-ID",
                generator: () =>
                    "<" +
                    `${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}` +
                    "@" +
                    this.fields
                        .filter((t) => "From" === t.name)[0]
                        .value.getAddrDomain() +
                    ">",
            },
            {
                name: "Subject",
                required: !0,
                dump: (t) =>
                    "string" == typeof t
                        ? "=?utf-8?B?" + this.envctx.toBase64(t) + "?="
                        : "",
            },
            { name: "MIME-Version", generator: () => "1.0" },
        ];
        constructor(t) {
            this.envctx = t;
        }
        dump() {
            let t = "";
            for (const e of this.fields) {
                if (e.disabled) continue;
                const r = void 0 !== e.value && null !== e.value;
                if (!r && e.required)
                    throw new n(
                        "MIMETEXT_MISSING_HEADER",
                        `The "${e.name}" header is required.`,
                    );
                if (!r && "function" != typeof e.generator) continue;
                r ||
                    "function" != typeof e.generator ||
                    (e.value = e.generator());
                const i =
                    Object.hasOwn(e, "dump") && "function" == typeof e.dump
                        ? e.dump(e.value)
                        : "string" == typeof e.value
                          ? e.value
                          : "";
                t += `${e.name}: ${i}${this.envctx.eol}`;
            }
            return t.slice(0, -1 * this.envctx.eol.length);
        }
        toObject() {
            return this.fields.reduce((t, e) => ((t[e.name] = e.value), t), {});
        }
        get(t) {
            const e = this.fields.findIndex(
                (e) => e.name.toLowerCase() === t.toLowerCase(),
            );
            return -1 !== e ? this.fields[e].value : void 0;
        }
        remove(t) {
            const e = t.toLowerCase();
            this.fields = this.fields.filter((t) => t.name.toLowerCase() !== e);
        }
        removeMany(t) {
            const e = (t) => t.toLowerCase(),
                n = new Set(t.map(e));
            this.fields = this.fields.filter((t) => !n.has(e(t.name)));
        }
        has(t) {
            return this.fields.some((e) => lower(e.name) === lower(t));
        }
        set(t, e) {
            const r = (e) => e.name.toLowerCase() === t.toLowerCase();
            if (!!this.fields.some(r)) {
                const i = this.fields.findIndex(r),
                    o = this.fields[i];
                if (o.validate && !o.validate(e))
                    throw new n(
                        "MIMETEXT_INVALID_HEADER_VALUE",
                        `The value for the header "${t}" is invalid.`,
                    );
                return (this.fields[i].value = e), this.fields[i];
            }
            return this.setCustom({
                name: t,
                value: e,
                custom: !0,
                dump: (t) => ("string" == typeof t ? t : ""),
            });
        }
        setCustom(t) {
            if (this.isHeaderField(t)) {
                if ("string" != typeof t.value)
                    throw new n(
                        "MIMETEXT_INVALID_HEADER_FIELD",
                        "Custom header must have a value.",
                    );
                return this.fields.push(t), t;
            }
            throw new n(
                "MIMETEXT_INVALID_HEADER_FIELD",
                "Invalid input for custom header. It must be in type of HeaderField.",
            );
        }
        validateMailboxSingle(t) {
            return t instanceof Rn;
        }
        validateMailboxMulti(t) {
            return t instanceof Rn || this.isArrayOfMailboxes(t);
        }
        dumpMailboxMulti(t) {
            const e = (t) =>
                0 === t.name.length
                    ? t.dump()
                    : `=?utf-8?B?${this.envctx.toBase64(t.name)}?= <${t.addr}>`;
            return this.isArrayOfMailboxes(t)
                ? t.map(e).join(`,${this.envctx.eol} `)
                : t instanceof Rn
                  ? e(t)
                  : "";
        }
        dumpMailboxSingle(t) {
            return t instanceof Rn
                ? ((t) =>
                      0 === t.name.length
                          ? t.dump()
                          : `=?utf-8?B?${this.envctx.toBase64(t.name)}?= <${t.addr}>`)(
                      t,
                  )
                : "";
        }
        isHeaderField(t) {
            const e = [
                "name",
                "value",
                "dump",
                "required",
                "disabled",
                "generator",
                "custom",
            ];
            if (this.isObject(t)) {
                const n = t;
                if (
                    Object.hasOwn(n, "name") &&
                    "string" == typeof n.name &&
                    n.name.length > 0 &&
                    !Object.keys(n).some((t) => !e.includes(t))
                )
                    return !0;
            }
            return !1;
        }
        isObject(t) {
            return !!t && t.constructor === Object;
        }
        isArrayOfMailboxes(t) {
            return this.isArray(t) && t.every((t) => t instanceof Rn);
        }
        isArray(t) {
            return !!t && t.constructor === Array;
        }
    }
    class Nn extends Fn {
        fields = [
            { name: "Content-ID" },
            { name: "Content-Type" },
            { name: "Content-Transfer-Encoding" },
            { name: "Content-Disposition" },
        ];
        constructor(t) {
            super(t);
        }
    }
    class Xn {
        constructor(t, e, n = {}) {
            (this.envctx = t),
                (this.headers = new Nn(this.envctx)),
                (this.data = e),
                this.setHeaders(n);
        }
        dump() {
            const t = this.envctx.eol;
            return this.headers.dump() + t + t + this.data;
        }
        isAttachment() {
            const t = this.headers.get("Content-Disposition");
            return "string" == typeof t && t.includes("attachment");
        }
        isInlineAttachment() {
            const t = this.headers.get("Content-Disposition");
            return "string" == typeof t && t.includes("inline");
        }
        setHeader(t, e) {
            return this.headers.set(t, e), t;
        }
        getHeader(t) {
            return this.headers.get(t);
        }
        setHeaders(t) {
            return Object.keys(t).map((e) => this.setHeader(e, t[e]));
        }
        getHeaders() {
            return this.headers.toObject();
        }
    }
    class Un {
        boundaries = { mixed: "", alt: "", related: "" };
        validTypes = ["text/html", "text/plain"];
        validContentTransferEncodings = [
            "7bit",
            "8bit",
            "binary",
            "quoted-printable",
            "base64",
        ];
        messages = [];
        constructor(t) {
            (this.envctx = t),
                (this.headers = new Fn(this.envctx)),
                (this.messages = []),
                this.generateBoundaries();
        }
        asRaw() {
            const t = this.envctx.eol,
                e = this.headers.dump(),
                r = this.getMessageByType("text/plain"),
                i = this.getMessageByType("text/html"),
                o = i ?? r ?? void 0;
            if (void 0 === o)
                throw new n(
                    "MIMETEXT_MISSING_BODY",
                    "No content added to the message.",
                );
            const s = this.hasAttachments(),
                a = this.hasInlineAttachments(),
                u =
                    a && s
                        ? "mixed+related"
                        : s
                          ? "mixed"
                          : a
                            ? "related"
                            : r && i
                              ? "alternative"
                              : "";
            if ("mixed+related" === u) {
                const n = this.getAttachments()
                        .map(
                            (e) =>
                                "--" +
                                this.boundaries.mixed +
                                t +
                                e.dump() +
                                t +
                                t,
                        )
                        .join("")
                        .slice(0, -1 * t.length),
                    o = this.getInlineAttachments()
                        .map(
                            (e) =>
                                "--" +
                                this.boundaries.related +
                                t +
                                e.dump() +
                                t +
                                t,
                        )
                        .join("")
                        .slice(0, -1 * t.length);
                return (
                    e +
                    t +
                    "Content-Type: multipart/mixed; boundary=" +
                    this.boundaries.mixed +
                    t +
                    t +
                    "--" +
                    this.boundaries.mixed +
                    t +
                    "Content-Type: multipart/related; boundary=" +
                    this.boundaries.related +
                    t +
                    t +
                    this.dumpTextContent(r, i, this.boundaries.related) +
                    t +
                    t +
                    o +
                    "--" +
                    this.boundaries.related +
                    "--" +
                    t +
                    n +
                    "--" +
                    this.boundaries.mixed +
                    "--"
                );
            }
            if ("mixed" === u) {
                const n = this.getAttachments()
                    .map(
                        (e) =>
                            "--" + this.boundaries.mixed + t + e.dump() + t + t,
                    )
                    .join("")
                    .slice(0, -1 * t.length);
                return (
                    e +
                    t +
                    "Content-Type: multipart/mixed; boundary=" +
                    this.boundaries.mixed +
                    t +
                    t +
                    this.dumpTextContent(r, i, this.boundaries.mixed) +
                    t +
                    (r && i ? "" : t) +
                    n +
                    "--" +
                    this.boundaries.mixed +
                    "--"
                );
            }
            if ("related" === u) {
                const n = this.getInlineAttachments()
                    .map(
                        (e) =>
                            "--" +
                            this.boundaries.related +
                            t +
                            e.dump() +
                            t +
                            t,
                    )
                    .join("")
                    .slice(0, -1 * t.length);
                return (
                    e +
                    t +
                    "Content-Type: multipart/related; boundary=" +
                    this.boundaries.related +
                    t +
                    t +
                    this.dumpTextContent(r, i, this.boundaries.related) +
                    t +
                    t +
                    n +
                    "--" +
                    this.boundaries.related +
                    "--"
                );
            }
            return "alternative" === u
                ? e +
                      t +
                      "Content-Type: multipart/alternative; boundary=" +
                      this.boundaries.alt +
                      t +
                      t +
                      this.dumpTextContent(r, i, this.boundaries.alt) +
                      t +
                      t +
                      "--" +
                      this.boundaries.alt +
                      "--"
                : e + t + o.dump();
        }
        asEncoded() {
            return this.envctx.toBase64WebSafe(this.asRaw());
        }
        dumpTextContent(t, e, n) {
            const r = this.envctx.eol,
                i = e ?? t;
            let o = "";
            return (
                (o =
                    t &&
                    e &&
                    (this.hasInlineAttachments() || this.hasAttachments())
                        ? "--" +
                          n +
                          r +
                          "Content-Type: multipart/alternative; boundary=" +
                          this.boundaries.alt +
                          r +
                          r +
                          "--" +
                          this.boundaries.alt +
                          r +
                          t.dump() +
                          r +
                          r +
                          "--" +
                          this.boundaries.alt +
                          r +
                          e.dump() +
                          r +
                          r +
                          "--" +
                          this.boundaries.alt +
                          "--"
                        : t && e
                          ? "--" +
                            n +
                            r +
                            t.dump() +
                            r +
                            r +
                            "--" +
                            n +
                            r +
                            e.dump()
                          : "--" + n + r + i.dump()),
                o
            );
        }
        hasInlineAttachments() {
            return this.messages.some((t) => t.isInlineAttachment());
        }
        hasAttachments() {
            return this.messages.some((t) => t.isAttachment());
        }
        getAttachments() {
            const t = (t) => t.isAttachment();
            return this.messages.some(t) ? this.messages.filter(t) : [];
        }
        getInlineAttachments() {
            const t = (t) => t.isInlineAttachment();
            return this.messages.some(t) ? this.messages.filter(t) : [];
        }
        getMessageByType(t) {
            const e = (e) =>
                !e.isAttachment() &&
                !e.isInlineAttachment() &&
                (e.getHeader("Content-Type") || "").includes(t);
            return this.messages.some(e) ? this.messages.filter(e)[0] : void 0;
        }
        addAttachment(t) {
            if (
                (this.isObject(t.headers) || (t.headers = {}),
                "string" != typeof t.filename)
            )
                throw new n(
                    "MIMETEXT_MISSING_FILENAME",
                    'The property "filename" must exist while adding attachments.',
                );
            let e = (t.headers["Content-Type"] ?? t.contentType) || "none";
            if (!1 === this.envctx.validateContentType(e))
                throw new n(
                    "MIMETEXT_INVALID_MESSAGE_TYPE",
                    `You specified an invalid content type "${e}".`,
                );
            const r =
                t.headers["Content-Transfer-Encoding"] ??
                t.encoding ??
                "base64";
            this.validContentTransferEncodings.includes(r) ||
                (e = "application/octet-stream");
            const i = t.headers["Content-ID"];
            "string" == typeof i &&
                i.length > 2 &&
                !i.startsWith("<") &&
                !i.endsWith(">") &&
                (t.headers["Content-ID"] = "<" + t.headers["Content-ID"] + ">");
            const o = t.inline ? "inline" : "attachment";
            return (
                (t.headers = Object.assign({}, t.headers, {
                    "Content-Type": `${e}; name="${t.filename}"`,
                    "Content-Transfer-Encoding": r,
                    "Content-Disposition": `${o}; filename="${t.filename}"`,
                })),
                this._addMessage({ data: t.data, headers: t.headers })
            );
        }
        addMessage(t) {
            this.isObject(t.headers) || (t.headers = {});
            let e = (t.headers["Content-Type"] ?? t.contentType) || "none";
            if (!this.validTypes.includes(e))
                throw new n(
                    "MIMETEXT_INVALID_MESSAGE_TYPE",
                    `Valid content types are ${this.validTypes.join(", ")} but you specified "${e}".`,
                );
            const r =
                t.headers["Content-Transfer-Encoding"] ?? t.encoding ?? "7bit";
            this.validContentTransferEncodings.includes(r) ||
                (e = "application/octet-stream");
            const i = t.charset ?? "UTF-8";
            return (
                (t.headers = Object.assign({}, t.headers, {
                    "Content-Type": `${e}; charset=${i}`,
                    "Content-Transfer-Encoding": r,
                })),
                this._addMessage({ data: t.data, headers: t.headers })
            );
        }
        _addMessage(t) {
            const e = new Xn(this.envctx, t.data, t.headers);
            return this.messages.push(e), e;
        }
        setSender(t, e = { type: "From" }) {
            const n = new Rn(t, e);
            return this.setHeader("From", n), n;
        }
        getSender() {
            return this.getHeader("From");
        }
        setRecipients(t, e = { type: "To" }) {
            const n = (this.isArray(t) ? t : [t]).map((t) => new Rn(t, e));
            return this.setHeader(e.type, n), n;
        }
        getRecipients(t = { type: "To" }) {
            return this.getHeader(t.type);
        }
        setRecipient(t, e = { type: "To" }) {
            return this.setRecipients(t, e);
        }
        setTo(t, e = { type: "To" }) {
            return this.setRecipients(t, e);
        }
        setCc(t, e = { type: "Cc" }) {
            return this.setRecipients(t, e);
        }
        setBcc(t, e = { type: "Bcc" }) {
            return this.setRecipients(t, e);
        }
        setSubject(t) {
            return this.setHeader("subject", t), t;
        }
        getSubject() {
            return this.getHeader("subject");
        }
        setHeader(t, e) {
            return this.headers.set(t, e), t;
        }
        getHeader(t) {
            return this.headers.get(t);
        }
        setHeaders(t) {
            return Object.keys(t).map((e) => this.setHeader(e, t[e]));
        }
        getHeaders() {
            return this.headers.toObject();
        }
        toBase64(t) {
            return this.envctx.toBase64(t);
        }
        toBase64WebSafe(t) {
            return this.envctx.toBase64WebSafe(t);
        }
        generateBoundaries() {
            const t = () => {
                const t = (t) => e.randomBytes(t).toString("hex");
                return "000000000000" + t(8) + t(3);
            };
            this.boundaries = { mixed: t(), alt: t(), related: t() };
        }
        isArray(t) {
            return !!t && t.constructor === Array;
        }
        isObject(t) {
            return !!t && t.constructor === Object;
        }
        stripFingerprints(
            t = ["Message-ID", "Message-Id", "X-Mailer", "User-Agent"],
        ) {
            this.headers.removeMany(t);
        }
    }
    const Vn = {
        toBase64: function (t) {
            return Utilities.base64Encode(t, Utilities.Charset.UTF_8);
        },
        toBase64WebSafe: function (t) {
            return Utilities.base64EncodeWebSafe(t);
        },
        eol: "\r\n",
        validateContentType: (t) => t.length > 0 && t,
    };
    return (
        (t.MIMEMessage = Un),
        (t.MIMEMessageContent = Xn),
        (t.MIMEMessageHeader = Fn),
        (t.MIMETextError = n),
        (t.Mailbox = Rn),
        (t.createMimeMessage = function () {
            return new Un(Vn);
        }),
        t
    );
})({}, crypto);
//# sourceMappingURL=mimetext.gas.iife.js.map
