var MimeText = (function (t, e) {
    "use strict";
    const r = "function" == typeof Buffer,
        n =
            ("function" == typeof TextDecoder && new TextDecoder(),
            "function" == typeof TextEncoder ? new TextEncoder() : void 0),
        i = Array.prototype.slice.call(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        ),
        o = ((t) => {
            let e = {};
            return t.forEach((t, r) => (e[t] = r)), e;
        })(i),
        u =
            /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        a = String.fromCharCode.bind(String),
        s =
            ("function" == typeof Uint8Array.from &&
                Uint8Array.from.bind(Uint8Array),
            (t) =>
                t
                    .replace(/=/g, "")
                    .replace(/[+\/]/g, (t) => ("+" == t ? "-" : "_"))),
        c = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, ""),
        f = (t) => {
            let e,
                r,
                n,
                o,
                u = "";
            const a = t.length % 3;
            for (let a = 0; a < t.length; ) {
                if (
                    (r = t.charCodeAt(a++)) > 255 ||
                    (n = t.charCodeAt(a++)) > 255 ||
                    (o = t.charCodeAt(a++)) > 255
                )
                    throw new TypeError("invalid character found");
                (e = (r << 16) | (n << 8) | o),
                    (u +=
                        i[(e >> 18) & 63] +
                        i[(e >> 12) & 63] +
                        i[(e >> 6) & 63] +
                        i[63 & e]);
            }
            return a ? u.slice(0, a - 3) + "===".substring(a) : u;
        },
        l =
            "function" == typeof btoa
                ? (t) => btoa(t)
                : r
                  ? (t) => Buffer.from(t, "binary").toString("base64")
                  : f,
        d = r
            ? (t) => Buffer.from(t).toString("base64")
            : (t) => {
                  let e = [];
                  for (let r = 0, n = t.length; r < n; r += 4096)
                      e.push(a.apply(null, t.subarray(r, r + 4096)));
                  return l(e.join(""));
              },
        h = (t) => {
            if (t.length < 2)
                return (e = t.charCodeAt(0)) < 128
                    ? t
                    : e < 2048
                      ? a(192 | (e >>> 6)) + a(128 | (63 & e))
                      : a(224 | ((e >>> 12) & 15)) +
                        a(128 | ((e >>> 6) & 63)) +
                        a(128 | (63 & e));
            var e =
                65536 +
                1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320);
            return (
                a(240 | ((e >>> 18) & 7)) +
                a(128 | ((e >>> 12) & 63)) +
                a(128 | ((e >>> 6) & 63)) +
                a(128 | (63 & e))
            );
        },
        v = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        p = (t) => t.replace(v, h),
        m = r
            ? (t) => Buffer.from(t, "utf8").toString("base64")
            : n
              ? (t) => d(n.encode(t))
              : (t) => l(p(t)),
        y = (t, e = !1) => (e ? s(m(t)) : m(t)),
        g = (t) => y(t, !0),
        b = (t) => {
            if (((t = t.replace(/\s+/g, "")), !u.test(t)))
                throw new TypeError("malformed base64.");
            t += "==".slice(2 - (3 & t.length));
            let e,
                r,
                n,
                i = "";
            for (let u = 0; u < t.length; )
                (e =
                    (o[t.charAt(u++)] << 18) |
                    (o[t.charAt(u++)] << 12) |
                    ((r = o[t.charAt(u++)]) << 6) |
                    (n = o[t.charAt(u++)])),
                    (i +=
                        64 === r
                            ? a((e >> 16) & 255)
                            : 64 === n
                              ? a((e >> 16) & 255, (e >> 8) & 255)
                              : a((e >> 16) & 255, (e >> 8) & 255, 255 & e));
            return i;
        },
        S = y,
        w = g;
    var O =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                  ? self
                  : {};
    function T(t) {
        return t &&
            t.__esModule &&
            Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
    }
    var x,
        M,
        A,
        j,
        E,
        C,
        I,
        P,
        F,
        D,
        L,
        _,
        R,
        B,
        N,
        H,
        k = { exports: {} },
        G = {};
    function V() {
        if (M) return x;
        M = 1;
        var t = function (t) {
            return t && t.Math === Math && t;
        };
        return (x =
            t("object" == typeof globalThis && globalThis) ||
            t("object" == typeof window && window) ||
            t("object" == typeof self && self) ||
            t("object" == typeof O && O) ||
            t("object" == typeof x && x) ||
            (function () {
                return this;
            })() ||
            Function("return this")());
    }
    function W() {
        return j
            ? A
            : ((j = 1),
              (A = function (t) {
                  try {
                      return !!t();
                  } catch (t) {
                      return !0;
                  }
              }));
    }
    function z() {
        return C
            ? E
            : ((C = 1),
              (E = !W()(function () {
                  var t = function () {}.bind();
                  return (
                      "function" != typeof t || t.hasOwnProperty("prototype")
                  );
              })));
    }
    function U() {
        if (P) return I;
        P = 1;
        var t = z(),
            e = Function.prototype,
            r = e.apply,
            n = e.call;
        return (
            (I =
                ("object" == typeof Reflect && Reflect.apply) ||
                (t
                    ? n.bind(r)
                    : function () {
                          return n.apply(r, arguments);
                      })),
            I
        );
    }
    function X() {
        if (D) return F;
        D = 1;
        var t = z(),
            e = Function.prototype,
            r = e.call,
            n = t && e.bind.bind(r, r);
        return (
            (F = t
                ? n
                : function (t) {
                      return function () {
                          return r.apply(t, arguments);
                      };
                  }),
            F
        );
    }
    function q() {
        if (_) return L;
        _ = 1;
        var t = X(),
            e = t({}.toString),
            r = t("".slice);
        return (L = function (t) {
            return r(e(t), 8, -1);
        });
    }
    function Y() {
        if (B) return R;
        B = 1;
        var t = q(),
            e = X();
        return (R = function (r) {
            if ("Function" === t(r)) return e(r);
        });
    }
    function K() {
        if (H) return N;
        H = 1;
        var t = "object" == typeof document && document.all;
        return (N =
            void 0 === t && void 0 !== t
                ? function (e) {
                      return "function" == typeof e || e === t;
                  }
                : function (t) {
                      return "function" == typeof t;
                  });
    }
    var $,
        J,
        Z,
        Q,
        tt = {};
    function et() {
        return J
            ? $
            : ((J = 1),
              ($ = !W()(function () {
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
    function rt() {
        if (Q) return Z;
        Q = 1;
        var t = z(),
            e = Function.prototype.call;
        return (
            (Z = t
                ? e.bind(e)
                : function () {
                      return e.apply(e, arguments);
                  }),
            Z
        );
    }
    var nt,
        it,
        ot,
        ut,
        at,
        st,
        ct,
        ft,
        lt,
        dt,
        ht,
        vt,
        pt,
        mt,
        yt,
        gt,
        bt,
        St,
        wt,
        Ot,
        Tt,
        xt,
        Mt,
        At,
        jt,
        Et,
        Ct,
        It,
        Pt,
        Ft,
        Dt,
        Lt,
        _t,
        Rt,
        Bt,
        Nt,
        Ht,
        kt = {};
    function Gt() {
        if (nt) return kt;
        nt = 1;
        var t = {}.propertyIsEnumerable,
            e = Object.getOwnPropertyDescriptor,
            r = e && !t.call({ 1: 2 }, 1);
        return (
            (kt.f = r
                ? function (t) {
                      var r = e(this, t);
                      return !!r && r.enumerable;
                  }
                : t),
            kt
        );
    }
    function Vt() {
        return ot
            ? it
            : ((ot = 1),
              (it = function (t, e) {
                  return {
                      enumerable: !(1 & t),
                      configurable: !(2 & t),
                      writable: !(4 & t),
                      value: e,
                  };
              }));
    }
    function Wt() {
        if (at) return ut;
        at = 1;
        var t = X(),
            e = W(),
            r = q(),
            n = Object,
            i = t("".split);
        return (ut = e(function () {
            return !n("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" === r(t) ? i(t, "") : n(t);
              }
            : n);
    }
    function zt() {
        return ct
            ? st
            : ((ct = 1),
              (st = function (t) {
                  return null == t;
              }));
    }
    function Ut() {
        if (lt) return ft;
        lt = 1;
        var t = zt(),
            e = TypeError;
        return (ft = function (r) {
            if (t(r)) throw new e("Can't call method on " + r);
            return r;
        });
    }
    function Xt() {
        if (ht) return dt;
        ht = 1;
        var t = Wt(),
            e = Ut();
        return (dt = function (r) {
            return t(e(r));
        });
    }
    function qt() {
        if (pt) return vt;
        pt = 1;
        var t = K();
        return (vt = function (e) {
            return "object" == typeof e ? null !== e : t(e);
        });
    }
    function Yt() {
        return yt ? mt : ((yt = 1), (mt = {}));
    }
    function Kt() {
        if (bt) return gt;
        bt = 1;
        var t = Yt(),
            e = V(),
            r = K(),
            n = function (t) {
                return r(t) ? t : void 0;
            };
        return (
            (gt = function (r, i) {
                return arguments.length < 2
                    ? n(t[r]) || n(e[r])
                    : (t[r] && t[r][i]) || (e[r] && e[r][i]);
            }),
            gt
        );
    }
    function $t() {
        return wt ? St : ((wt = 1), (St = X()({}.isPrototypeOf)));
    }
    function Jt() {
        if (Tt) return Ot;
        Tt = 1;
        var t = V().navigator,
            e = t && t.userAgent;
        return (Ot = e ? String(e) : "");
    }
    function Zt() {
        if (Mt) return xt;
        Mt = 1;
        var t,
            e,
            r = V(),
            n = Jt(),
            i = r.process,
            o = r.Deno,
            u = (i && i.versions) || (o && o.version),
            a = u && u.v8;
        return (
            a &&
                (e =
                    (t = a.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])),
            !e &&
                n &&
                (!(t = n.match(/Edge\/(\d+)/)) || t[1] >= 74) &&
                (t = n.match(/Chrome\/(\d+)/)) &&
                (e = +t[1]),
            (xt = e)
        );
    }
    function Qt() {
        if (jt) return At;
        jt = 1;
        var t = Zt(),
            e = W(),
            r = V().String;
        return (
            (At =
                !!Object.getOwnPropertySymbols &&
                !e(function () {
                    var e = Symbol("symbol detection");
                    return (
                        !r(e) ||
                        !(Object(e) instanceof Symbol) ||
                        (!Symbol.sham && t && t < 41)
                    );
                })),
            At
        );
    }
    function te() {
        return Ct
            ? Et
            : ((Ct = 1),
              (Et =
                  Qt() && !Symbol.sham && "symbol" == typeof Symbol.iterator));
    }
    function ee() {
        if (Pt) return It;
        Pt = 1;
        var t = Kt(),
            e = K(),
            r = $t(),
            n = Object;
        return (It = te()
            ? function (t) {
                  return "symbol" == typeof t;
              }
            : function (i) {
                  var o = t("Symbol");
                  return e(o) && r(o.prototype, n(i));
              });
    }
    function re() {
        if (Dt) return Ft;
        Dt = 1;
        var t = String;
        return (Ft = function (e) {
            try {
                return t(e);
            } catch (t) {
                return "Object";
            }
        });
    }
    function ne() {
        if (_t) return Lt;
        _t = 1;
        var t = K(),
            e = re(),
            r = TypeError;
        return (Lt = function (n) {
            if (t(n)) return n;
            throw new r(e(n) + " is not a function");
        });
    }
    function ie() {
        if (Bt) return Rt;
        Bt = 1;
        var t = ne(),
            e = zt();
        return (Rt = function (r, n) {
            var i = r[n];
            return e(i) ? void 0 : t(i);
        });
    }
    function oe() {
        if (Ht) return Nt;
        Ht = 1;
        var t = rt(),
            e = K(),
            r = qt(),
            n = TypeError;
        return (Nt = function (i, o) {
            var u, a;
            if ("string" === o && e((u = i.toString)) && !r((a = t(u, i))))
                return a;
            if (e((u = i.valueOf)) && !r((a = t(u, i)))) return a;
            if ("string" !== o && e((u = i.toString)) && !r((a = t(u, i))))
                return a;
            throw new n("Can't convert object to primitive value");
        });
    }
    var ue,
        ae,
        se,
        ce,
        fe,
        le,
        de,
        he,
        ve,
        pe,
        me,
        ye,
        ge,
        be,
        Se,
        we,
        Oe,
        Te,
        xe,
        Me,
        Ae,
        je,
        Ee,
        Ce,
        Ie,
        Pe,
        Fe,
        De,
        Le = { exports: {} };
    function _e() {
        return ae ? ue : ((ae = 1), (ue = !0));
    }
    function Re() {
        if (ce) return se;
        ce = 1;
        var t = V(),
            e = Object.defineProperty;
        return (se = function (r, n) {
            try {
                e(t, r, { value: n, configurable: !0, writable: !0 });
            } catch (e) {
                t[r] = n;
            }
            return n;
        });
    }
    function Be() {
        if (fe) return Le.exports;
        fe = 1;
        var t = _e(),
            e = V(),
            r = Re(),
            n = "__core-js_shared__",
            i = (Le.exports = e[n] || r(n, {}));
        return (
            (i.versions || (i.versions = [])).push({
                version: "3.39.0",
                mode: t ? "pure" : "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license:
                    "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
                source: "https://github.com/zloirock/core-js",
            }),
            Le.exports
        );
    }
    function Ne() {
        if (de) return le;
        de = 1;
        var t = Be();
        return (le = function (e, r) {
            return t[e] || (t[e] = r || {});
        });
    }
    function He() {
        if (ve) return he;
        ve = 1;
        var t = Ut(),
            e = Object;
        return (he = function (r) {
            return e(t(r));
        });
    }
    function ke() {
        if (me) return pe;
        me = 1;
        var t = X(),
            e = He(),
            r = t({}.hasOwnProperty);
        return (pe =
            Object.hasOwn ||
            function (t, n) {
                return r(e(t), n);
            });
    }
    function Ge() {
        if (ge) return ye;
        ge = 1;
        var t = X(),
            e = 0,
            r = Math.random(),
            n = t((1).toString);
        return (ye = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + n(++e + r, 36);
        });
    }
    function Ve() {
        if (Se) return be;
        Se = 1;
        var t = V(),
            e = Ne(),
            r = ke(),
            n = Ge(),
            i = Qt(),
            o = te(),
            u = t.Symbol,
            a = e("wks"),
            s = o ? u.for || u : (u && u.withoutSetter) || n;
        return (be = function (t) {
            return (
                r(a, t) || (a[t] = i && r(u, t) ? u[t] : s("Symbol." + t)), a[t]
            );
        });
    }
    function We() {
        if (Oe) return we;
        Oe = 1;
        var t = rt(),
            e = qt(),
            r = ee(),
            n = ie(),
            i = oe(),
            o = TypeError,
            u = Ve()("toPrimitive");
        return (we = function (a, s) {
            if (!e(a) || r(a)) return a;
            var c,
                f = n(a, u);
            if (f) {
                if (
                    (void 0 === s && (s = "default"),
                    (c = t(f, a, s)),
                    !e(c) || r(c))
                )
                    return c;
                throw new o("Can't convert object to primitive value");
            }
            return void 0 === s && (s = "number"), i(a, s);
        });
    }
    function ze() {
        if (xe) return Te;
        xe = 1;
        var t = We(),
            e = ee();
        return (Te = function (r) {
            var n = t(r, "string");
            return e(n) ? n : n + "";
        });
    }
    function Ue() {
        if (Ae) return Me;
        Ae = 1;
        var t = V(),
            e = qt(),
            r = t.document,
            n = e(r) && e(r.createElement);
        return (Me = function (t) {
            return n ? r.createElement(t) : {};
        });
    }
    function Xe() {
        if (Ee) return je;
        Ee = 1;
        var t = et(),
            e = W(),
            r = Ue();
        return (je =
            !t &&
            !e(function () {
                return (
                    7 !==
                    Object.defineProperty(r("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            }));
    }
    function qe() {
        if (Ce) return tt;
        Ce = 1;
        var t = et(),
            e = rt(),
            r = Gt(),
            n = Vt(),
            i = Xt(),
            o = ze(),
            u = ke(),
            a = Xe(),
            s = Object.getOwnPropertyDescriptor;
        return (
            (tt.f = t
                ? s
                : function (t, c) {
                      if (((t = i(t)), (c = o(c)), a))
                          try {
                              return s(t, c);
                          } catch (t) {}
                      if (u(t, c)) return n(!e(r.f, t, c), t[c]);
                  }),
            tt
        );
    }
    function Ye() {
        if (Pe) return Ie;
        Pe = 1;
        var t = W(),
            e = K(),
            r = /#|\.prototype\./,
            n = function (r, n) {
                var s = o[i(r)];
                return s === a || (s !== u && (e(n) ? t(n) : !!n));
            },
            i = (n.normalize = function (t) {
                return String(t).replace(r, ".").toLowerCase();
            }),
            o = (n.data = {}),
            u = (n.NATIVE = "N"),
            a = (n.POLYFILL = "P");
        return (Ie = n);
    }
    function Ke() {
        if (De) return Fe;
        De = 1;
        var t = Y(),
            e = ne(),
            r = z(),
            n = t(t.bind);
        return (
            (Fe = function (t, i) {
                return (
                    e(t),
                    void 0 === i
                        ? t
                        : r
                          ? n(t, i)
                          : function () {
                                return t.apply(i, arguments);
                            }
                );
            }),
            Fe
        );
    }
    var $e,
        Je,
        Ze,
        Qe,
        tr,
        er,
        rr,
        nr,
        ir,
        or,
        ur,
        ar,
        sr,
        cr,
        fr,
        lr,
        dr,
        hr,
        vr,
        pr = {};
    function mr() {
        return Je
            ? $e
            : ((Je = 1),
              ($e =
                  et() &&
                  W()(function () {
                      return (
                          42 !==
                          Object.defineProperty(function () {}, "prototype", {
                              value: 42,
                              writable: !1,
                          }).prototype
                      );
                  })));
    }
    function yr() {
        if (Qe) return Ze;
        Qe = 1;
        var t = qt(),
            e = String,
            r = TypeError;
        return (Ze = function (n) {
            if (t(n)) return n;
            throw new r(e(n) + " is not an object");
        });
    }
    function gr() {
        if (tr) return pr;
        tr = 1;
        var t = et(),
            e = Xe(),
            r = mr(),
            n = yr(),
            i = ze(),
            o = TypeError,
            u = Object.defineProperty,
            a = Object.getOwnPropertyDescriptor,
            s = "enumerable",
            c = "configurable",
            f = "writable";
        return (
            (pr.f = t
                ? r
                    ? function (t, e, r) {
                          if (
                              (n(t),
                              (e = i(e)),
                              n(r),
                              "function" == typeof t &&
                                  "prototype" === e &&
                                  "value" in r &&
                                  f in r &&
                                  !r[f])
                          ) {
                              var o = a(t, e);
                              o &&
                                  o[f] &&
                                  ((t[e] = r.value),
                                  (r = {
                                      configurable: c in r ? r[c] : o[c],
                                      enumerable: s in r ? r[s] : o[s],
                                      writable: !1,
                                  }));
                          }
                          return u(t, e, r);
                      }
                    : u
                : function (t, r, a) {
                      if ((n(t), (r = i(r)), n(a), e))
                          try {
                              return u(t, r, a);
                          } catch (t) {}
                      if ("get" in a || "set" in a)
                          throw new o("Accessors not supported");
                      return "value" in a && (t[r] = a.value), t;
                  }),
            pr
        );
    }
    function br() {
        if (rr) return er;
        rr = 1;
        var t = et(),
            e = gr(),
            r = Vt();
        return (er = t
            ? function (t, n, i) {
                  return e.f(t, n, r(1, i));
              }
            : function (t, e, r) {
                  return (t[e] = r), t;
              });
    }
    function Sr() {
        if (ir) return nr;
        ir = 1;
        var t = V(),
            e = U(),
            r = Y(),
            n = K(),
            i = qe().f,
            o = Ye(),
            u = Yt(),
            a = Ke(),
            s = br(),
            c = ke(),
            f = function (t) {
                var r = function (n, i, o) {
                    if (this instanceof r) {
                        switch (arguments.length) {
                            case 0:
                                return new t();
                            case 1:
                                return new t(n);
                            case 2:
                                return new t(n, i);
                        }
                        return new t(n, i, o);
                    }
                    return e(t, this, arguments);
                };
                return (r.prototype = t.prototype), r;
            };
        return (nr = function (e, l) {
            var d,
                h,
                v,
                p,
                m,
                y,
                g,
                b,
                S,
                w = e.target,
                O = e.global,
                T = e.stat,
                x = e.proto,
                M = O ? t : T ? t[w] : t[w] && t[w].prototype,
                A = O ? u : u[w] || s(u, w, {})[w],
                j = A.prototype;
            for (p in l)
                (h =
                    !(d = o(O ? p : w + (T ? "." : "#") + p, e.forced)) &&
                    M &&
                    c(M, p)),
                    (y = A[p]),
                    h &&
                        (g = e.dontCallGetSet
                            ? (S = i(M, p)) && S.value
                            : M[p]),
                    (m = h && g ? g : l[p]),
                    (d || x || typeof y != typeof m) &&
                        ((b =
                            e.bind && h
                                ? a(m, t)
                                : e.wrap && h
                                  ? f(m)
                                  : x && n(m)
                                    ? r(m)
                                    : m),
                        (e.sham || (m && m.sham) || (y && y.sham)) &&
                            s(b, "sham", !0),
                        s(A, p, b),
                        x &&
                            (c(u, (v = w + "Prototype")) || s(u, v, {}),
                            s(u[v], p, m),
                            e.real && j && (d || !j[p]) && s(j, p, m)));
        });
    }
    function wr() {
        if (or) return G;
        or = 1;
        var t = Sr(),
            e = et(),
            r = gr().f;
        return (
            t(
                {
                    target: "Object",
                    stat: !0,
                    forced: Object.defineProperty !== r,
                    sham: !e,
                },
                { defineProperty: r },
            ),
            G
        );
    }
    function Or() {
        if (ur) return k.exports;
        (ur = 1), wr();
        var t = Yt().Object,
            e = (k.exports = function (e, r, n) {
                return t.defineProperty(e, r, n);
            });
        return t.defineProperty.sham && (e.sham = !0), k.exports;
    }
    function Tr() {
        return sr ? ar : ((sr = 1), (ar = Or()));
    }
    function xr() {
        return fr ? cr : ((fr = 1), (cr = Tr()));
    }
    function Mr() {
        return dr ? lr : ((dr = 1), (lr = xr()));
    }
    function Ar() {
        return vr ? hr : ((vr = 1), (hr = Mr()));
    }
    var jr,
        Er,
        Cr,
        Ir,
        Pr,
        Fr,
        Dr,
        Lr,
        _r,
        Rr,
        Br,
        Nr,
        Hr,
        kr,
        Gr,
        Vr,
        Wr,
        zr,
        Ur,
        Xr,
        qr,
        Yr,
        Kr,
        $r,
        Jr,
        Zr,
        Qr,
        tn,
        en,
        rn = T(Ar()),
        nn = {};
    function on() {
        if (Er) return jr;
        Er = 1;
        var t = q();
        return (jr =
            Array.isArray ||
            function (e) {
                return "Array" === t(e);
            });
    }
    function un() {
        if (Ir) return Cr;
        Ir = 1;
        var t = Math.ceil,
            e = Math.floor;
        return (Cr =
            Math.trunc ||
            function (r) {
                var n = +r;
                return (n > 0 ? e : t)(n);
            });
    }
    function an() {
        if (Fr) return Pr;
        Fr = 1;
        var t = un();
        return (Pr = function (e) {
            var r = +e;
            return r != r || 0 === r ? 0 : t(r);
        });
    }
    function sn() {
        if (Lr) return Dr;
        Lr = 1;
        var t = an(),
            e = Math.min;
        return (Dr = function (r) {
            var n = t(r);
            return n > 0 ? e(n, 9007199254740991) : 0;
        });
    }
    function cn() {
        if (Rr) return _r;
        Rr = 1;
        var t = sn();
        return (_r = function (e) {
            return t(e.length);
        });
    }
    function fn() {
        if (Nr) return Br;
        Nr = 1;
        var t = TypeError;
        return (Br = function (e) {
            if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
            return e;
        });
    }
    function ln() {
        if (kr) return Hr;
        kr = 1;
        var t = et(),
            e = gr(),
            r = Vt();
        return (Hr = function (n, i, o) {
            t ? e.f(n, i, r(0, o)) : (n[i] = o);
        });
    }
    function dn() {
        if (Vr) return Gr;
        Vr = 1;
        var t = {};
        return (
            (t[Ve()("toStringTag")] = "z"), (Gr = "[object z]" === String(t))
        );
    }
    function hn() {
        if (zr) return Wr;
        zr = 1;
        var t = dn(),
            e = K(),
            r = q(),
            n = Ve()("toStringTag"),
            i = Object,
            o =
                "Arguments" ===
                r(
                    (function () {
                        return arguments;
                    })(),
                );
        return (Wr = t
            ? r
            : function (t) {
                  var u, a, s;
                  return void 0 === t
                      ? "Undefined"
                      : null === t
                        ? "Null"
                        : "string" ==
                            typeof (a = (function (t, e) {
                                try {
                                    return t[e];
                                } catch (t) {}
                            })((u = i(t)), n))
                          ? a
                          : o
                            ? r(u)
                            : "Object" === (s = r(u)) && e(u.callee)
                              ? "Arguments"
                              : s;
              });
    }
    function vn() {
        if (Xr) return Ur;
        Xr = 1;
        var t = X(),
            e = K(),
            r = Be(),
            n = t(Function.toString);
        return (
            e(r.inspectSource) ||
                (r.inspectSource = function (t) {
                    return n(t);
                }),
            (Ur = r.inspectSource)
        );
    }
    function pn() {
        if (Yr) return qr;
        Yr = 1;
        var t = X(),
            e = W(),
            r = K(),
            n = hn(),
            i = Kt(),
            o = vn(),
            u = function () {},
            a = i("Reflect", "construct"),
            s = /^\s*(?:class|function)\b/,
            c = t(s.exec),
            f = !s.test(u),
            l = function (t) {
                if (!r(t)) return !1;
                try {
                    return a(u, [], t), !0;
                } catch (t) {
                    return !1;
                }
            },
            d = function (t) {
                if (!r(t)) return !1;
                switch (n(t)) {
                    case "AsyncFunction":
                    case "GeneratorFunction":
                    case "AsyncGeneratorFunction":
                        return !1;
                }
                try {
                    return f || !!c(s, o(t));
                } catch (t) {
                    return !0;
                }
            };
        return (
            (d.sham = !0),
            (qr =
                !a ||
                e(function () {
                    var t;
                    return (
                        l(l.call) ||
                        !l(Object) ||
                        !l(function () {
                            t = !0;
                        }) ||
                        t
                    );
                })
                    ? d
                    : l)
        );
    }
    function mn() {
        if ($r) return Kr;
        $r = 1;
        var t = on(),
            e = pn(),
            r = qt(),
            n = Ve()("species"),
            i = Array;
        return (Kr = function (o) {
            var u;
            return (
                t(o) &&
                    ((u = o.constructor),
                    ((e(u) && (u === i || t(u.prototype))) ||
                        (r(u) && null === (u = u[n]))) &&
                        (u = void 0)),
                void 0 === u ? i : u
            );
        });
    }
    function yn() {
        if (Zr) return Jr;
        Zr = 1;
        var t = mn();
        return (Jr = function (e, r) {
            return new (t(e))(0 === r ? 0 : r);
        });
    }
    function gn() {
        if (tn) return Qr;
        tn = 1;
        var t = W(),
            e = Ve(),
            r = Zt(),
            n = e("species");
        return (Qr = function (e) {
            return (
                r >= 51 ||
                !t(function () {
                    var t = [];
                    return (
                        ((t.constructor = {})[n] = function () {
                            return { foo: 1 };
                        }),
                        1 !== t[e](Boolean).foo
                    );
                })
            );
        });
    }
    var bn,
        Sn,
        wn = {},
        On = {};
    function Tn() {
        if (Sn) return bn;
        Sn = 1;
        var t = hn(),
            e = String;
        return (bn = function (r) {
            if ("Symbol" === t(r))
                throw new TypeError(
                    "Cannot convert a Symbol value to a string",
                );
            return e(r);
        });
    }
    var xn,
        Mn,
        An,
        jn,
        En,
        Cn,
        In,
        Pn,
        Fn,
        Dn,
        Ln,
        _n,
        Rn,
        Bn,
        Nn,
        Hn,
        kn,
        Gn,
        Vn,
        Wn = {};
    function zn() {
        if (Mn) return xn;
        Mn = 1;
        var t = an(),
            e = Math.max,
            r = Math.min;
        return (xn = function (n, i) {
            var o = t(n);
            return o < 0 ? e(o + i, 0) : r(o, i);
        });
    }
    function Un() {
        if (jn) return An;
        jn = 1;
        var t = Xt(),
            e = zn(),
            r = cn(),
            n = function (n) {
                return function (i, o, u) {
                    var a = t(i),
                        s = r(a);
                    if (0 === s) return !n && -1;
                    var c,
                        f = e(u, s);
                    if (n && o != o) {
                        for (; s > f; ) if ((c = a[f++]) != c) return !0;
                    } else
                        for (; s > f; f++)
                            if ((n || f in a) && a[f] === o) return n || f || 0;
                    return !n && -1;
                };
            };
        return (An = { includes: n(!0), indexOf: n(!1) });
    }
    function Xn() {
        return Cn ? En : ((Cn = 1), (En = {}));
    }
    function qn() {
        if (Pn) return In;
        Pn = 1;
        var t = X(),
            e = ke(),
            r = Xt(),
            n = Un().indexOf,
            i = Xn(),
            o = t([].push);
        return (In = function (t, u) {
            var a,
                s = r(t),
                c = 0,
                f = [];
            for (a in s) !e(i, a) && e(s, a) && o(f, a);
            for (; u.length > c; ) e(s, (a = u[c++])) && (~n(f, a) || o(f, a));
            return f;
        });
    }
    function Yn() {
        return Dn
            ? Fn
            : ((Dn = 1),
              (Fn = [
                  "constructor",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "toLocaleString",
                  "toString",
                  "valueOf",
              ]));
    }
    function Kn() {
        if (_n) return Ln;
        _n = 1;
        var t = qn(),
            e = Yn();
        return (Ln =
            Object.keys ||
            function (r) {
                return t(r, e);
            });
    }
    function $n() {
        if (Rn) return Wn;
        Rn = 1;
        var t = et(),
            e = mr(),
            r = gr(),
            n = yr(),
            i = Xt(),
            o = Kn();
        return (
            (Wn.f =
                t && !e
                    ? Object.defineProperties
                    : function (t, e) {
                          n(t);
                          for (
                              var u, a = i(e), s = o(e), c = s.length, f = 0;
                              c > f;

                          )
                              r.f(t, (u = s[f++]), a[u]);
                          return t;
                      }),
            Wn
        );
    }
    function Jn() {
        return Nn ? Bn : ((Nn = 1), (Bn = Kt()("document", "documentElement")));
    }
    function Zn() {
        if (kn) return Hn;
        kn = 1;
        var t = Ne(),
            e = Ge(),
            r = t("keys");
        return (Hn = function (t) {
            return r[t] || (r[t] = e(t));
        });
    }
    function Qn() {
        if (Vn) return Gn;
        Vn = 1;
        var t,
            e = yr(),
            r = $n(),
            n = Yn(),
            i = Xn(),
            o = Jn(),
            u = Ue(),
            a = "prototype",
            s = "script",
            c = Zn()("IE_PROTO"),
            f = function () {},
            l = function (t) {
                return "<" + s + ">" + t + "</" + s + ">";
            },
            d = function (t) {
                t.write(l("")), t.close();
                var e = t.parentWindow.Object;
                return (t = null), e;
            },
            h = function () {
                try {
                    t = new ActiveXObject("htmlfile");
                } catch (t) {}
                var e, r, i;
                h =
                    "undefined" != typeof document
                        ? document.domain && t
                            ? d(t)
                            : ((r = u("iframe")),
                              (i = "java" + s + ":"),
                              (r.style.display = "none"),
                              o.appendChild(r),
                              (r.src = String(i)),
                              (e = r.contentWindow.document).open(),
                              e.write(l("document.F=Object")),
                              e.close(),
                              e.F)
                        : d(t);
                for (var c = n.length; c--; ) delete h[a][n[c]];
                return h();
            };
        return (
            (i[c] = !0),
            (Gn =
                Object.create ||
                function (t, n) {
                    var i;
                    return (
                        null !== t
                            ? ((f[a] = e(t)),
                              (i = new f()),
                              (f[a] = null),
                              (i[c] = t))
                            : (i = h()),
                        void 0 === n ? i : r.f(i, n)
                    );
                })
        );
    }
    var ti,
        ei = {};
    function ri() {
        if (ti) return ei;
        ti = 1;
        var t = qn(),
            e = Yn().concat("length", "prototype");
        return (
            (ei.f =
                Object.getOwnPropertyNames ||
                function (r) {
                    return t(r, e);
                }),
            ei
        );
    }
    var ni,
        ii,
        oi,
        ui = {};
    function ai() {
        return ii ? ni : ((ii = 1), (ni = X()([].slice)));
    }
    function si() {
        if (oi) return ui;
        oi = 1;
        var t = q(),
            e = Xt(),
            r = ri().f,
            n = ai(),
            i =
                "object" == typeof window &&
                window &&
                Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window)
                    : [];
        return (
            (ui.f = function (o) {
                return i && "Window" === t(o)
                    ? (function (t) {
                          try {
                              return r(t);
                          } catch (t) {
                              return n(i);
                          }
                      })(o)
                    : r(e(o));
            }),
            ui
        );
    }
    var ci,
        fi,
        li,
        di,
        hi,
        vi = {};
    function pi() {
        return ci || ((ci = 1), (vi.f = Object.getOwnPropertySymbols)), vi;
    }
    function mi() {
        if (li) return fi;
        li = 1;
        var t = br();
        return (fi = function (e, r, n, i) {
            return i && i.enumerable ? (e[r] = n) : t(e, r, n), e;
        });
    }
    function yi() {
        if (hi) return di;
        hi = 1;
        var t = gr();
        return (di = function (e, r, n) {
            return t.f(e, r, n);
        });
    }
    var gi,
        bi,
        Si,
        wi,
        Oi,
        Ti,
        xi,
        Mi,
        Ai,
        ji,
        Ei,
        Ci,
        Ii,
        Pi,
        Fi,
        Di,
        Li = {};
    function _i() {
        if (gi) return Li;
        gi = 1;
        var t = Ve();
        return (Li.f = t), Li;
    }
    function Ri() {
        if (Si) return bi;
        Si = 1;
        var t = Yt(),
            e = ke(),
            r = _i(),
            n = gr().f;
        return (bi = function (i) {
            var o = t.Symbol || (t.Symbol = {});
            e(o, i) || n(o, i, { value: r.f(i) });
        });
    }
    function Bi() {
        if (Oi) return wi;
        Oi = 1;
        var t = rt(),
            e = Kt(),
            r = Ve(),
            n = mi();
        return (wi = function () {
            var i = e("Symbol"),
                o = i && i.prototype,
                u = o && o.valueOf,
                a = r("toPrimitive");
            o &&
                !o[a] &&
                n(
                    o,
                    a,
                    function (e) {
                        return t(u, this);
                    },
                    { arity: 1 },
                );
        });
    }
    function Ni() {
        if (xi) return Ti;
        xi = 1;
        var t = dn(),
            e = hn();
        return (Ti = t
            ? {}.toString
            : function () {
                  return "[object " + e(this) + "]";
              });
    }
    function Hi() {
        if (Ai) return Mi;
        Ai = 1;
        var t = dn(),
            e = gr().f,
            r = br(),
            n = ke(),
            i = Ni(),
            o = Ve()("toStringTag");
        return (Mi = function (u, a, s, c) {
            var f = s ? u : u && u.prototype;
            f &&
                (n(f, o) || e(f, o, { configurable: !0, value: a }),
                c && !t && r(f, "toString", i));
        });
    }
    function ki() {
        if (Ei) return ji;
        Ei = 1;
        var t = V(),
            e = K(),
            r = t.WeakMap;
        return (ji = e(r) && /native code/.test(String(r)));
    }
    function Gi() {
        if (Ii) return Ci;
        Ii = 1;
        var t,
            e,
            r,
            n = ki(),
            i = V(),
            o = qt(),
            u = br(),
            a = ke(),
            s = Be(),
            c = Zn(),
            f = Xn(),
            l = "Object already initialized",
            d = i.TypeError,
            h = i.WeakMap;
        if (n || s.state) {
            var v = s.state || (s.state = new h());
            (v.get = v.get),
                (v.has = v.has),
                (v.set = v.set),
                (t = function (t, e) {
                    if (v.has(t)) throw new d(l);
                    return (e.facade = t), v.set(t, e), e;
                }),
                (e = function (t) {
                    return v.get(t) || {};
                }),
                (r = function (t) {
                    return v.has(t);
                });
        } else {
            var p = c("state");
            (f[p] = !0),
                (t = function (t, e) {
                    if (a(t, p)) throw new d(l);
                    return (e.facade = t), u(t, p, e), e;
                }),
                (e = function (t) {
                    return a(t, p) ? t[p] : {};
                }),
                (r = function (t) {
                    return a(t, p);
                });
        }
        return (Ci = {
            set: t,
            get: e,
            has: r,
            enforce: function (n) {
                return r(n) ? e(n) : t(n, {});
            },
            getterFor: function (t) {
                return function (r) {
                    var n;
                    if (!o(r) || (n = e(r)).type !== t)
                        throw new d(
                            "Incompatible receiver, " + t + " required",
                        );
                    return n;
                };
            },
        });
    }
    function Vi() {
        if (Fi) return Pi;
        Fi = 1;
        var t = Ke(),
            e = X(),
            r = Wt(),
            n = He(),
            i = cn(),
            o = yn(),
            u = e([].push),
            a = function (e) {
                var a = 1 === e,
                    s = 2 === e,
                    c = 3 === e,
                    f = 4 === e,
                    l = 6 === e,
                    d = 7 === e,
                    h = 5 === e || l;
                return function (v, p, m, y) {
                    for (
                        var g,
                            b,
                            S = n(v),
                            w = r(S),
                            O = i(w),
                            T = t(p, m),
                            x = 0,
                            M = y || o,
                            A = a ? M(v, O) : s || d ? M(v, 0) : void 0;
                        O > x;
                        x++
                    )
                        if ((h || x in w) && ((b = T((g = w[x]), x, S)), e))
                            if (a) A[x] = b;
                            else if (b)
                                switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return g;
                                    case 6:
                                        return x;
                                    case 2:
                                        u(A, g);
                                }
                            else
                                switch (e) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        u(A, g);
                                }
                    return l ? -1 : c || f ? f : A;
                };
            };
        return (Pi = {
            forEach: a(0),
            map: a(1),
            filter: a(2),
            some: a(3),
            every: a(4),
            find: a(5),
            findIndex: a(6),
            filterReject: a(7),
        });
    }
    var Wi,
        zi,
        Ui,
        Xi = {};
    function qi() {
        return zi
            ? Wi
            : ((zi = 1), (Wi = Qt() && !!Symbol.for && !!Symbol.keyFor));
    }
    var Yi,
        Ki = {};
    var $i,
        Ji,
        Zi,
        Qi = {};
    function to() {
        if (Ji) return $i;
        Ji = 1;
        var t = X(),
            e = on(),
            r = K(),
            n = q(),
            i = Tn(),
            o = t([].push);
        return ($i = function (t) {
            if (r(t)) return t;
            if (e(t)) {
                for (var u = t.length, a = [], s = 0; s < u; s++) {
                    var c = t[s];
                    "string" == typeof c
                        ? o(a, c)
                        : ("number" != typeof c &&
                              "Number" !== n(c) &&
                              "String" !== n(c)) ||
                          o(a, i(c));
                }
                var f = a.length,
                    l = !0;
                return function (t, r) {
                    if (l) return (l = !1), r;
                    if (e(this)) return r;
                    for (var n = 0; n < f; n++) if (a[n] === t) return r;
                };
            }
        });
    }
    var eo,
        ro,
        no = {};
    function io() {
        return (
            ro ||
                ((ro = 1),
                (function () {
                    if (Di) return On;
                    Di = 1;
                    var t = Sr(),
                        e = V(),
                        r = rt(),
                        n = X(),
                        i = _e(),
                        o = et(),
                        u = Qt(),
                        a = W(),
                        s = ke(),
                        c = $t(),
                        f = yr(),
                        l = Xt(),
                        d = ze(),
                        h = Tn(),
                        v = Vt(),
                        p = Qn(),
                        m = Kn(),
                        y = ri(),
                        g = si(),
                        b = pi(),
                        S = qe(),
                        w = gr(),
                        O = $n(),
                        T = Gt(),
                        x = mi(),
                        M = yi(),
                        A = Ne(),
                        j = Zn(),
                        E = Xn(),
                        C = Ge(),
                        I = Ve(),
                        P = _i(),
                        F = Ri(),
                        D = Bi(),
                        L = Hi(),
                        _ = Gi(),
                        R = Vi().forEach,
                        B = j("hidden"),
                        N = "Symbol",
                        H = "prototype",
                        k = _.set,
                        G = _.getterFor(N),
                        z = Object[H],
                        U = e.Symbol,
                        q = U && U[H],
                        Y = e.RangeError,
                        K = e.TypeError,
                        $ = e.QObject,
                        J = S.f,
                        Z = w.f,
                        Q = g.f,
                        tt = T.f,
                        nt = n([].push),
                        it = A("symbols"),
                        ot = A("op-symbols"),
                        ut = A("wks"),
                        at = !$ || !$[H] || !$[H].findChild,
                        st = function (t, e, r) {
                            var n = J(z, e);
                            n && delete z[e],
                                Z(t, e, r),
                                n && t !== z && Z(z, e, n);
                        },
                        ct =
                            o &&
                            a(function () {
                                return (
                                    7 !==
                                    p(
                                        Z({}, "a", {
                                            get: function () {
                                                return Z(this, "a", {
                                                    value: 7,
                                                }).a;
                                            },
                                        }),
                                    ).a
                                );
                            })
                                ? st
                                : Z,
                        ft = function (t, e) {
                            var r = (it[t] = p(q));
                            return (
                                k(r, { type: N, tag: t, description: e }),
                                o || (r.description = e),
                                r
                            );
                        },
                        lt = function (t, e, r) {
                            t === z && lt(ot, e, r), f(t);
                            var n = d(e);
                            return (
                                f(r),
                                s(it, n)
                                    ? (r.enumerable
                                          ? (s(t, B) &&
                                                t[B][n] &&
                                                (t[B][n] = !1),
                                            (r = p(r, {
                                                enumerable: v(0, !1),
                                            })))
                                          : (s(t, B) || Z(t, B, v(1, p(null))),
                                            (t[B][n] = !0)),
                                      ct(t, n, r))
                                    : Z(t, n, r)
                            );
                        },
                        dt = function (t, e) {
                            f(t);
                            var n = l(e),
                                i = m(n).concat(mt(n));
                            return (
                                R(i, function (e) {
                                    (o && !r(ht, n, e)) || lt(t, e, n[e]);
                                }),
                                t
                            );
                        },
                        ht = function (t) {
                            var e = d(t),
                                n = r(tt, this, e);
                            return (
                                !(this === z && s(it, e) && !s(ot, e)) &&
                                (!(
                                    n ||
                                    !s(this, e) ||
                                    !s(it, e) ||
                                    (s(this, B) && this[B][e])
                                ) ||
                                    n)
                            );
                        },
                        vt = function (t, e) {
                            var r = l(t),
                                n = d(e);
                            if (r !== z || !s(it, n) || s(ot, n)) {
                                var i = J(r, n);
                                return (
                                    !i ||
                                        !s(it, n) ||
                                        (s(r, B) && r[B][n]) ||
                                        (i.enumerable = !0),
                                    i
                                );
                            }
                        },
                        pt = function (t) {
                            var e = Q(l(t)),
                                r = [];
                            return (
                                R(e, function (t) {
                                    s(it, t) || s(E, t) || nt(r, t);
                                }),
                                r
                            );
                        },
                        mt = function (t) {
                            var e = t === z,
                                r = Q(e ? ot : l(t)),
                                n = [];
                            return (
                                R(r, function (t) {
                                    !s(it, t) ||
                                        (e && !s(z, t)) ||
                                        nt(n, it[t]);
                                }),
                                n
                            );
                        };
                    u ||
                        ((U = function () {
                            if (c(q, this))
                                throw new K("Symbol is not a constructor");
                            var t =
                                    arguments.length && void 0 !== arguments[0]
                                        ? h(arguments[0])
                                        : void 0,
                                n = C(t),
                                i = function (t) {
                                    var o = void 0 === this ? e : this;
                                    o === z && r(i, ot, t),
                                        s(o, B) && s(o[B], n) && (o[B][n] = !1);
                                    var u = v(1, t);
                                    try {
                                        ct(o, n, u);
                                    } catch (t) {
                                        if (!(t instanceof Y)) throw t;
                                        st(o, n, u);
                                    }
                                };
                            return (
                                o &&
                                    at &&
                                    ct(z, n, { configurable: !0, set: i }),
                                ft(n, t)
                            );
                        }),
                        x((q = U[H]), "toString", function () {
                            return G(this).tag;
                        }),
                        x(U, "withoutSetter", function (t) {
                            return ft(C(t), t);
                        }),
                        (T.f = ht),
                        (w.f = lt),
                        (O.f = dt),
                        (S.f = vt),
                        (y.f = g.f = pt),
                        (b.f = mt),
                        (P.f = function (t) {
                            return ft(I(t), t);
                        }),
                        o &&
                            (M(q, "description", {
                                configurable: !0,
                                get: function () {
                                    return G(this).description;
                                },
                            }),
                            i ||
                                x(z, "propertyIsEnumerable", ht, {
                                    unsafe: !0,
                                }))),
                        t(
                            {
                                global: !0,
                                constructor: !0,
                                wrap: !0,
                                forced: !u,
                                sham: !u,
                            },
                            { Symbol: U },
                        ),
                        R(m(ut), function (t) {
                            F(t);
                        }),
                        t(
                            { target: N, stat: !0, forced: !u },
                            {
                                useSetter: function () {
                                    at = !0;
                                },
                                useSimple: function () {
                                    at = !1;
                                },
                            },
                        ),
                        t(
                            {
                                target: "Object",
                                stat: !0,
                                forced: !u,
                                sham: !o,
                            },
                            {
                                create: function (t, e) {
                                    return void 0 === e ? p(t) : dt(p(t), e);
                                },
                                defineProperty: lt,
                                defineProperties: dt,
                                getOwnPropertyDescriptor: vt,
                            },
                        ),
                        t(
                            { target: "Object", stat: !0, forced: !u },
                            { getOwnPropertyNames: pt },
                        ),
                        D(),
                        L(U, N),
                        (E[B] = !0);
                })(),
                (function () {
                    if (Ui) return Xi;
                    Ui = 1;
                    var t = Sr(),
                        e = Kt(),
                        r = ke(),
                        n = Tn(),
                        i = Ne(),
                        o = qi(),
                        u = i("string-to-symbol-registry"),
                        a = i("symbol-to-string-registry");
                    t(
                        { target: "Symbol", stat: !0, forced: !o },
                        {
                            for: function (t) {
                                var i = n(t);
                                if (r(u, i)) return u[i];
                                var o = e("Symbol")(i);
                                return (u[i] = o), (a[o] = i), o;
                            },
                        },
                    );
                })(),
                (function () {
                    if (Yi) return Ki;
                    Yi = 1;
                    var t = Sr(),
                        e = ke(),
                        r = ee(),
                        n = re(),
                        i = Ne(),
                        o = qi(),
                        u = i("symbol-to-string-registry");
                    t(
                        { target: "Symbol", stat: !0, forced: !o },
                        {
                            keyFor: function (t) {
                                if (!r(t))
                                    throw new TypeError(
                                        n(t) + " is not a symbol",
                                    );
                                if (e(u, t)) return u[t];
                            },
                        },
                    );
                })(),
                (function () {
                    if (Zi) return Qi;
                    Zi = 1;
                    var t = Sr(),
                        e = Kt(),
                        r = U(),
                        n = rt(),
                        i = X(),
                        o = W(),
                        u = K(),
                        a = ee(),
                        s = ai(),
                        c = to(),
                        f = Qt(),
                        l = String,
                        d = e("JSON", "stringify"),
                        h = i(/./.exec),
                        v = i("".charAt),
                        p = i("".charCodeAt),
                        m = i("".replace),
                        y = i((1).toString),
                        g = /[\uD800-\uDFFF]/g,
                        b = /^[\uD800-\uDBFF]$/,
                        S = /^[\uDC00-\uDFFF]$/,
                        w =
                            !f ||
                            o(function () {
                                var t = e("Symbol")("stringify detection");
                                return (
                                    "[null]" !== d([t]) ||
                                    "{}" !== d({ a: t }) ||
                                    "{}" !== d(Object(t))
                                );
                            }),
                        O = o(function () {
                            return (
                                '"\\udf06\\ud834"' !== d("\udf06\ud834") ||
                                '"\\udead"' !== d("\udead")
                            );
                        }),
                        T = function (t, e) {
                            var i = s(arguments),
                                o = c(e);
                            if (u(o) || (void 0 !== t && !a(t)))
                                return (
                                    (i[1] = function (t, e) {
                                        if (
                                            (u(o) && (e = n(o, this, l(t), e)),
                                            !a(e))
                                        )
                                            return e;
                                    }),
                                    r(d, null, i)
                                );
                        },
                        x = function (t, e, r) {
                            var n = v(r, e - 1),
                                i = v(r, e + 1);
                            return (h(b, t) && !h(S, i)) ||
                                (h(S, t) && !h(b, n))
                                ? "\\u" + y(p(t, 0), 16)
                                : t;
                        };
                    d &&
                        t(
                            {
                                target: "JSON",
                                stat: !0,
                                arity: 3,
                                forced: w || O,
                            },
                            {
                                stringify: function (t, e, n) {
                                    var i = s(arguments),
                                        o = r(w ? T : d, null, i);
                                    return O && "string" == typeof o
                                        ? m(o, g, x)
                                        : o;
                                },
                            },
                        );
                })(),
                (function () {
                    if (eo) return no;
                    eo = 1;
                    var t = Sr(),
                        e = Qt(),
                        r = W(),
                        n = pi(),
                        i = He();
                    t(
                        {
                            target: "Object",
                            stat: !0,
                            forced:
                                !e ||
                                r(function () {
                                    n.f(1);
                                }),
                        },
                        {
                            getOwnPropertySymbols: function (t) {
                                var e = n.f;
                                return e ? e(i(t)) : [];
                            },
                        },
                    );
                })()),
            wn
        );
    }
    var oo;
    var uo;
    var ao;
    var so,
        co = {};
    function fo() {
        return so || ((so = 1), Ri()("iterator")), co;
    }
    var lo;
    var ho;
    var vo;
    var po;
    var mo;
    var yo;
    var go,
        bo = {};
    function So() {
        if (go) return bo;
        go = 1;
        var t = Ri(),
            e = Bi();
        return t("toPrimitive"), e(), bo;
    }
    var wo,
        Oo = {};
    var To;
    var xo,
        Mo,
        Ao,
        jo = {};
    function Eo() {
        return Ao
            ? Mo
            : ((Ao = 1),
              (function () {
                  if (en) return nn;
                  en = 1;
                  var t = Sr(),
                      e = W(),
                      r = on(),
                      n = qt(),
                      i = He(),
                      o = cn(),
                      u = fn(),
                      a = ln(),
                      s = yn(),
                      c = gn(),
                      f = Ve(),
                      l = Zt(),
                      d = f("isConcatSpreadable"),
                      h =
                          l >= 51 ||
                          !e(function () {
                              var t = [];
                              return (t[d] = !1), t.concat()[0] !== t;
                          }),
                      v = function (t) {
                          if (!n(t)) return !1;
                          var e = t[d];
                          return void 0 !== e ? !!e : r(t);
                      };
                  t(
                      {
                          target: "Array",
                          proto: !0,
                          arity: 1,
                          forced: !h || !c("concat"),
                      },
                      {
                          concat: function (t) {
                              var e,
                                  r,
                                  n,
                                  c,
                                  f,
                                  l = i(this),
                                  d = s(l, 0),
                                  h = 0;
                              for (e = -1, n = arguments.length; e < n; e++)
                                  if (v((f = -1 === e ? l : arguments[e])))
                                      for (
                                          c = o(f), u(h + c), r = 0;
                                          r < c;
                                          r++, h++
                                      )
                                          r in f && a(d, h, f[r]);
                                  else u(h + 1), a(d, h++, f);
                              return (d.length = h), d;
                          },
                      },
                  );
              })(),
              io(),
              oo || ((oo = 1), Ri()("asyncIterator")),
              uo || ((uo = 1), Ri()("hasInstance")),
              ao || ((ao = 1), Ri()("isConcatSpreadable")),
              fo(),
              lo || ((lo = 1), Ri()("match")),
              ho || ((ho = 1), Ri()("matchAll")),
              vo || ((vo = 1), Ri()("replace")),
              po || ((po = 1), Ri()("search")),
              mo || ((mo = 1), Ri()("species")),
              yo || ((yo = 1), Ri()("split")),
              So(),
              (function () {
                  if (wo) return Oo;
                  wo = 1;
                  var t = Kt(),
                      e = Ri(),
                      r = Hi();
                  e("toStringTag"), r(t("Symbol"), "Symbol");
              })(),
              To || ((To = 1), Ri()("unscopables")),
              (function () {
                  if (xo) return jo;
                  xo = 1;
                  var t = V();
                  Hi()(t.JSON, "JSON", !0);
              })(),
              (Mo = Yt().Symbol));
    }
    var Co,
        Io,
        Po,
        Fo,
        Do,
        Lo,
        _o,
        Ro,
        Bo,
        No,
        Ho,
        ko,
        Go,
        Vo,
        Wo,
        zo,
        Uo,
        Xo,
        qo,
        Yo,
        Ko,
        $o,
        Jo,
        Zo,
        Qo,
        tu,
        eu,
        ru,
        nu,
        iu,
        ou,
        uu,
        au,
        su = {};
    function cu() {
        return Io ? Co : ((Io = 1), (Co = function () {}));
    }
    function fu() {
        return Fo ? Po : ((Fo = 1), (Po = {}));
    }
    function lu() {
        if (Lo) return Do;
        Lo = 1;
        var t = et(),
            e = ke(),
            r = Function.prototype,
            n = t && Object.getOwnPropertyDescriptor,
            i = e(r, "name"),
            o = i && "something" === function () {}.name,
            u = i && (!t || (t && n(r, "name").configurable));
        return (Do = { EXISTS: i, PROPER: o, CONFIGURABLE: u });
    }
    function du() {
        return Ro
            ? _o
            : ((Ro = 1),
              (_o = !W()(function () {
                  function t() {}
                  return (
                      (t.prototype.constructor = null),
                      Object.getPrototypeOf(new t()) !== t.prototype
                  );
              })));
    }
    function hu() {
        if (No) return Bo;
        No = 1;
        var t = ke(),
            e = K(),
            r = He(),
            n = Zn(),
            i = du(),
            o = n("IE_PROTO"),
            u = Object,
            a = u.prototype;
        return (Bo = i
            ? u.getPrototypeOf
            : function (n) {
                  var i = r(n);
                  if (t(i, o)) return i[o];
                  var s = i.constructor;
                  return e(s) && i instanceof s
                      ? s.prototype
                      : i instanceof u
                        ? a
                        : null;
              });
    }
    function vu() {
        if (ko) return Ho;
        ko = 1;
        var t,
            e,
            r,
            n = W(),
            i = K(),
            o = qt(),
            u = Qn(),
            a = hu(),
            s = mi(),
            c = Ve(),
            f = _e(),
            l = c("iterator"),
            d = !1;
        return (
            [].keys &&
                ("next" in (r = [].keys())
                    ? (e = a(a(r))) !== Object.prototype && (t = e)
                    : (d = !0)),
            !o(t) ||
            n(function () {
                var e = {};
                return t[l].call(e) !== e;
            })
                ? (t = {})
                : f && (t = u(t)),
            i(t[l]) ||
                s(t, l, function () {
                    return this;
                }),
            (Ho = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: d })
        );
    }
    function pu() {
        if (Vo) return Go;
        Vo = 1;
        var t = vu().IteratorPrototype,
            e = Qn(),
            r = Vt(),
            n = Hi(),
            i = fu(),
            o = function () {
                return this;
            };
        return (Go = function (u, a, s, c) {
            var f = a + " Iterator";
            return (
                (u.prototype = e(t, { next: r(+!c, s) })),
                n(u, f, !1, !0),
                (i[f] = o),
                u
            );
        });
    }
    function mu() {
        if (zo) return Wo;
        zo = 1;
        var t = X(),
            e = ne();
        return (Wo = function (r, n, i) {
            try {
                return t(e(Object.getOwnPropertyDescriptor(r, n)[i]));
            } catch (t) {}
        });
    }
    function yu() {
        if (Xo) return Uo;
        Xo = 1;
        var t = qt();
        return (Uo = function (e) {
            return t(e) || null === e;
        });
    }
    function gu() {
        if (Yo) return qo;
        Yo = 1;
        var t = yu(),
            e = String,
            r = TypeError;
        return (qo = function (n) {
            if (t(n)) return n;
            throw new r("Can't set " + e(n) + " as a prototype");
        });
    }
    function bu() {
        if ($o) return Ko;
        $o = 1;
        var t = mu(),
            e = qt(),
            r = Ut(),
            n = gu();
        return (Ko =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var i,
                          o = !1,
                          u = {};
                      try {
                          (i = t(Object.prototype, "__proto__", "set"))(u, []),
                              (o = u instanceof Array);
                      } catch (t) {}
                      return function (t, u) {
                          return (
                              r(t),
                              n(u),
                              e(t) ? (o ? i(t, u) : (t.__proto__ = u), t) : t
                          );
                      };
                  })()
                : void 0));
    }
    function Su() {
        if (Zo) return Jo;
        Zo = 1;
        var t = Sr(),
            e = rt(),
            r = _e(),
            n = lu(),
            i = K(),
            o = pu(),
            u = hu(),
            a = bu(),
            s = Hi(),
            c = br(),
            f = mi(),
            l = Ve(),
            d = fu(),
            h = vu(),
            v = n.PROPER,
            p = n.CONFIGURABLE,
            m = h.IteratorPrototype,
            y = h.BUGGY_SAFARI_ITERATORS,
            g = l("iterator"),
            b = "keys",
            S = "values",
            w = "entries",
            O = function () {
                return this;
            };
        return (Jo = function (n, l, h, T, x, M, A) {
            o(h, l, T);
            var j,
                E,
                C,
                I = function (t) {
                    if (t === x && _) return _;
                    if (!y && t && t in D) return D[t];
                    switch (t) {
                        case b:
                        case S:
                        case w:
                            return function () {
                                return new h(this, t);
                            };
                    }
                    return function () {
                        return new h(this);
                    };
                },
                P = l + " Iterator",
                F = !1,
                D = n.prototype,
                L = D[g] || D["@@iterator"] || (x && D[x]),
                _ = (!y && L) || I(x),
                R = ("Array" === l && D.entries) || L;
            if (
                (R &&
                    (j = u(R.call(new n()))) !== Object.prototype &&
                    j.next &&
                    (r || u(j) === m || (a ? a(j, m) : i(j[g]) || f(j, g, O)),
                    s(j, P, !0, !0),
                    r && (d[P] = O)),
                v &&
                    x === S &&
                    L &&
                    L.name !== S &&
                    (!r && p
                        ? c(D, "name", S)
                        : ((F = !0),
                          (_ = function () {
                              return e(L, this);
                          }))),
                x)
            )
                if (
                    ((E = { values: I(S), keys: M ? _ : I(b), entries: I(w) }),
                    A)
                )
                    for (C in E) (y || F || !(C in D)) && f(D, C, E[C]);
                else t({ target: l, proto: !0, forced: y || F }, E);
            return (
                (r && !A) || D[g] === _ || f(D, g, _, { name: x }),
                (d[l] = _),
                E
            );
        });
    }
    function wu() {
        return tu
            ? Qo
            : ((tu = 1),
              (Qo = function (t, e) {
                  return { value: t, done: e };
              }));
    }
    function Ou() {
        if (ru) return eu;
        ru = 1;
        var t = Xt(),
            e = cu(),
            r = fu(),
            n = Gi(),
            i = gr().f,
            o = Su(),
            u = wu(),
            a = _e(),
            s = et(),
            c = "Array Iterator",
            f = n.set,
            l = n.getterFor(c);
        eu = o(
            Array,
            "Array",
            function (e, r) {
                f(this, { type: c, target: t(e), index: 0, kind: r });
            },
            function () {
                var t = l(this),
                    e = t.target,
                    r = t.index++;
                if (!e || r >= e.length)
                    return (t.target = null), u(void 0, !0);
                switch (t.kind) {
                    case "keys":
                        return u(r, !1);
                    case "values":
                        return u(e[r], !1);
                }
                return u([r, e[r]], !1);
            },
            "values",
        );
        var d = (r.Arguments = r.Array);
        if (
            (e("keys"),
            e("values"),
            e("entries"),
            !a && s && "values" !== d.name)
        )
            try {
                i(d, "name", { value: "values" });
            } catch (t) {}
        return eu;
    }
    function Tu() {
        return iu
            ? nu
            : ((iu = 1),
              (nu = {
                  CSSRuleList: 0,
                  CSSStyleDeclaration: 0,
                  CSSValueList: 0,
                  ClientRectList: 0,
                  DOMRectList: 0,
                  DOMStringList: 0,
                  DOMTokenList: 1,
                  DataTransferItemList: 0,
                  FileList: 0,
                  HTMLAllCollection: 0,
                  HTMLCollection: 0,
                  HTMLFormElement: 0,
                  HTMLSelectElement: 0,
                  MediaList: 0,
                  MimeTypeArray: 0,
                  NamedNodeMap: 0,
                  NodeList: 1,
                  PaintRequestList: 0,
                  Plugin: 0,
                  PluginArray: 0,
                  SVGLengthList: 0,
                  SVGNumberList: 0,
                  SVGPathSegList: 0,
                  SVGPointList: 0,
                  SVGStringList: 0,
                  SVGTransformList: 0,
                  SourceBufferList: 0,
                  StyleSheetList: 0,
                  TextTrackCueList: 0,
                  TextTrackList: 0,
                  TouchList: 0,
              }));
    }
    function xu() {
        if (ou) return su;
        (ou = 1), Ou();
        var t = Tu(),
            e = V(),
            r = Hi(),
            n = fu();
        for (var i in t) r(e[i], i), (n[i] = n.Array);
        return su;
    }
    function Mu() {
        if (au) return uu;
        au = 1;
        var t = Eo();
        return xu(), (uu = t);
    }
    var Au,
        ju = {};
    var Eu;
    var Cu;
    var Iu, Pu, Fu;
    function Du() {
        if (Fu) return Pu;
        Fu = 1;
        var t = Mu();
        return (
            (function () {
                if (Au) return ju;
                Au = 1;
                var t = Ve(),
                    e = gr().f,
                    r = t("metadata"),
                    n = Function.prototype;
                void 0 === n[r] && e(n, r, { value: null });
            })(),
            Eu || ((Eu = 1), Ri()("asyncDispose")),
            Cu || ((Cu = 1), Ri()("dispose")),
            Iu || ((Iu = 1), Ri()("metadata")),
            (Pu = t)
        );
    }
    var Lu, _u, Ru;
    function Bu() {
        if (_u) return Lu;
        _u = 1;
        var t = Kt(),
            e = X(),
            r = t("Symbol"),
            n = r.keyFor,
            i = e(r.prototype.valueOf);
        return (Lu =
            r.isRegisteredSymbol ||
            function (t) {
                try {
                    return void 0 !== n(i(t));
                } catch (t) {
                    return !1;
                }
            });
    }
    var Nu, Hu, ku;
    function Gu() {
        if (Hu) return Nu;
        Hu = 1;
        for (
            var t = Ne(),
                e = Kt(),
                r = X(),
                n = ee(),
                i = Ve(),
                o = e("Symbol"),
                u = o.isWellKnownSymbol,
                a = e("Object", "getOwnPropertyNames"),
                s = r(o.prototype.valueOf),
                c = t("wks"),
                f = 0,
                l = a(o),
                d = l.length;
            f < d;
            f++
        )
            try {
                var h = l[f];
                n(o[h]) && i(h);
            } catch (t) {}
        return (
            (Nu = function (t) {
                if (u && u(t)) return !0;
                try {
                    for (
                        var e = s(t), r = 0, n = a(c), i = n.length;
                        r < i;
                        r++
                    )
                        if (c[n[r]] == e) return !0;
                } catch (t) {}
                return !1;
            }),
            Nu
        );
    }
    var Vu;
    var Wu;
    var zu;
    var Uu;
    var Xu;
    var qu;
    var Yu;
    var Ku, $u, Ju, Zu, Qu;
    function ta() {
        if (Ju) return $u;
        Ju = 1;
        var t = Du();
        return (
            Ru ||
                ((Ru = 1),
                Sr()(
                    { target: "Symbol", stat: !0 },
                    { isRegisteredSymbol: Bu() },
                )),
            ku ||
                ((ku = 1),
                Sr()(
                    { target: "Symbol", stat: !0, forced: !0 },
                    { isWellKnownSymbol: Gu() },
                )),
            Vu || ((Vu = 1), Ri()("customMatcher")),
            Wu || ((Wu = 1), Ri()("observable")),
            zu ||
                ((zu = 1),
                Sr()(
                    { target: "Symbol", stat: !0, name: "isRegisteredSymbol" },
                    { isRegistered: Bu() },
                )),
            Uu ||
                ((Uu = 1),
                Sr()(
                    {
                        target: "Symbol",
                        stat: !0,
                        name: "isWellKnownSymbol",
                        forced: !0,
                    },
                    { isWellKnown: Gu() },
                )),
            Xu || ((Xu = 1), Ri()("matcher")),
            qu || ((qu = 1), Ri()("metadataKey")),
            Yu || ((Yu = 1), Ri()("patternMatch")),
            Ku || ((Ku = 1), Ri()("replaceAll")),
            ($u = t)
        );
    }
    function ea() {
        return Qu ? Zu : ((Qu = 1), (Zu = ta()));
    }
    var ra,
        na,
        ia,
        oa,
        ua,
        aa,
        sa,
        ca,
        fa,
        la,
        da,
        ha,
        va,
        pa = T(ea()),
        ma = {};
    function ya() {
        if (na) return ra;
        na = 1;
        var t = X(),
            e = an(),
            r = Tn(),
            n = Ut(),
            i = t("".charAt),
            o = t("".charCodeAt),
            u = t("".slice),
            a = function (t) {
                return function (a, s) {
                    var c,
                        f,
                        l = r(n(a)),
                        d = e(s),
                        h = l.length;
                    return d < 0 || d >= h
                        ? t
                            ? ""
                            : void 0
                        : (c = o(l, d)) < 55296 ||
                            c > 56319 ||
                            d + 1 === h ||
                            (f = o(l, d + 1)) < 56320 ||
                            f > 57343
                          ? t
                              ? i(l, d)
                              : c
                          : t
                            ? u(l, d, d + 2)
                            : f - 56320 + ((c - 55296) << 10) + 65536;
                };
            };
        return (ra = { codeAt: a(!1), charAt: a(!0) });
    }
    function ga() {
        return ua
            ? oa
            : ((ua = 1),
              Ou(),
              (function () {
                  if (ia) return ma;
                  ia = 1;
                  var t = ya().charAt,
                      e = Tn(),
                      r = Gi(),
                      n = Su(),
                      i = wu(),
                      o = "String Iterator",
                      u = r.set,
                      a = r.getterFor(o);
                  n(
                      String,
                      "String",
                      function (t) {
                          u(this, { type: o, string: e(t), index: 0 });
                      },
                      function () {
                          var e,
                              r = a(this),
                              n = r.string,
                              o = r.index;
                          return o >= n.length
                              ? i(void 0, !0)
                              : ((e = t(n, o)),
                                (r.index += e.length),
                                i(e, !1));
                      },
                  );
              })(),
              fo(),
              (oa = _i().f("iterator")));
    }
    function ba() {
        if (sa) return aa;
        sa = 1;
        var t = ga();
        return xu(), (aa = t);
    }
    function Sa() {
        return fa ? ca : ((fa = 1), (ca = ba()));
    }
    function wa() {
        return da ? la : ((da = 1), (la = Sa()));
    }
    function Oa() {
        return va ? ha : ((va = 1), (ha = wa()));
    }
    var Ta,
        xa,
        Ma,
        Aa,
        ja,
        Ea,
        Ca,
        Ia,
        Pa,
        Fa,
        Da = T(Oa());
    function La(t) {
        return (
            (La =
                "function" == typeof pa && "symbol" == typeof Da
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t &&
                              "function" == typeof pa &&
                              t.constructor === pa &&
                              t !== pa.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            La(t)
        );
    }
    function _a() {
        return xa ? Ta : ((xa = 1), So(), (Ta = _i().f("toPrimitive")));
    }
    function Ra() {
        return Aa ? Ma : ((Aa = 1), (Ma = _a()));
    }
    function Ba() {
        return Ea ? ja : ((Ea = 1), (ja = Ra()));
    }
    function Na() {
        return Ia ? Ca : ((Ia = 1), (Ca = Ba()));
    }
    function Ha() {
        return Fa ? Pa : ((Fa = 1), (Pa = Na()));
    }
    var ka = T(Ha());
    function Ga(t) {
        var e = (function (t, e) {
            if ("object" != La(t) || !t) return t;
            var r = t[ka];
            if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != La(n)) return n;
                throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                );
            }
            return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == La(e) ? e : e + "";
    }
    function Va(t, e, r) {
        return (
            (e = Ga(e)) in t
                ? rn(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = r),
            t
        );
    }
    class Wa extends Error {
        constructor(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
            super(e),
                Va(this, "name", ""),
                Va(this, "description", ""),
                (this.name = t),
                (this.description = e);
        }
    }
    var za,
        Ua,
        Xa,
        qa,
        Ya,
        Ka,
        $a,
        Ja,
        Za,
        Qa,
        ts,
        es,
        rs,
        ns,
        is,
        os,
        us,
        as,
        ss,
        cs,
        fs,
        ls,
        ds,
        hs = {};
    function vs() {
        return Ua
            ? za
            : ((Ua = 1),
              (za = "\t\n\v\f\r                　\u2028\u2029\ufeff"));
    }
    function ps() {
        if (qa) return Xa;
        qa = 1;
        var t = X(),
            e = Ut(),
            r = Tn(),
            n = vs(),
            i = t("".replace),
            o = RegExp("^[" + n + "]+"),
            u = RegExp("(^|[^" + n + "])[" + n + "]+$"),
            a = function (t) {
                return function (n) {
                    var a = r(e(n));
                    return (
                        1 & t && (a = i(a, o, "")),
                        2 & t && (a = i(a, u, "$1")),
                        a
                    );
                };
            };
        return (Xa = { start: a(1), end: a(2), trim: a(3) });
    }
    function ms() {
        if (Ka) return Ya;
        Ka = 1;
        var t = lu().PROPER,
            e = W(),
            r = vs();
        return (Ya = function (n) {
            return e(function () {
                return !!r[n]() || "​᠎" !== "​᠎"[n]() || (t && r[n].name !== n);
            });
        });
    }
    function ys() {
        if (Za) return Ja;
        Za = 1;
        var t = V(),
            e = Yt();
        return (Ja = function (r, n) {
            var i = e[r + "Prototype"],
                o = i && i[n];
            if (o) return o;
            var u = t[r],
                a = u && u.prototype;
            return a && a[n];
        });
    }
    function gs() {
        return ts
            ? Qa
            : ((ts = 1),
              (function () {
                  if ($a) return hs;
                  $a = 1;
                  var t = Sr(),
                      e = ps().trim;
                  t(
                      { target: "String", proto: !0, forced: ms()("trim") },
                      {
                          trim: function () {
                              return e(this);
                          },
                      },
                  );
              })(),
              (Qa = ys()("String", "trim")));
    }
    function bs() {
        if (rs) return es;
        rs = 1;
        var t = $t(),
            e = gs(),
            r = String.prototype;
        return (es = function (n) {
            var i = n.trim;
            return "string" == typeof n || n === r || (t(r, n) && i === r.trim)
                ? e
                : i;
        });
    }
    function Ss() {
        return is ? ns : ((is = 1), (ns = bs()));
    }
    function ws() {
        return us ? os : ((us = 1), (os = Ss()));
    }
    function Os() {
        return ss ? as : ((ss = 1), (as = ws()));
    }
    function Ts() {
        return fs ? cs : ((fs = 1), (cs = Os()));
    }
    var xs = T(ds ? ls : ((ds = 1), (ls = Ts())));
    class Ms {
        constructor(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "To" };
            Va(this, "reSpecCompliantAddr", /(([^<>\r\n]+)\s)?<[^\r\n]+>/),
                Va(this, "name", ""),
                Va(this, "addr", ""),
                Va(this, "type", "To"),
                (this.type = e.type),
                this.parse(t);
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
                ? '"'.concat(this.name, '" <').concat(this.addr, ">")
                : "<".concat(this.addr, ">");
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
                const e = xs(t).call(t);
                if (e.startsWith("<") && e.endsWith(">"))
                    return (this.addr = e.slice(1, -1)), this;
                const r = e.split(" <");
                return (
                    (r[0] = /^("|')/.test(r[0]) ? r[0].slice(1) : r[0]),
                    (r[0] = /("|')$/.test(r[0]) ? r[0].slice(0, -1) : r[0]),
                    (r[1] = r[1].slice(0, -1)),
                    (this.name = r[0]),
                    (this.addr = r[1]),
                    this
                );
            }
            if ("string" == typeof t) return (this.addr = t), this;
            throw new Wa(
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
    class As {
        constructor(t) {
            Va(this, "envctx", void 0),
                Va(this, "fields", [
                    {
                        name: "Date",
                        generator: () =>
                            new Date()
                                .toUTCString()
                                .replace(/GMT|UTC/gi, "+0000"),
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
                            ""
                                .concat(Math.random().toString(36).slice(2))
                                .concat(Math.random().toString(36).slice(2)) +
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
                ]),
                (this.envctx = t);
        }
        dump() {
            let t = "";
            for (const e of this.fields) {
                if (e.disabled) continue;
                const r = void 0 !== e.value && null !== e.value;
                if (!r && e.required)
                    throw new Wa(
                        "MIMETEXT_MISSING_HEADER",
                        'The "'.concat(e.name, '" header is required.'),
                    );
                if (!r && "function" != typeof e.generator) continue;
                r ||
                    "function" != typeof e.generator ||
                    (e.value = e.generator());
                const n =
                    Object.hasOwn(e, "dump") && "function" == typeof e.dump
                        ? e.dump(e.value)
                        : "string" == typeof e.value
                          ? e.value
                          : "";
                t += "".concat(e.name, ": ").concat(n).concat(this.envctx.eol);
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
                r = new Set(t.map(e));
            this.fields = this.fields.filter((t) => !r.has(e(t.name)));
        }
        has(t) {
            return this.fields.some((e) => lower(e.name) === lower(t));
        }
        set(t, e) {
            const r = (e) => e.name.toLowerCase() === t.toLowerCase();
            if (!!this.fields.some(r)) {
                const n = this.fields.findIndex(r),
                    i = this.fields[n];
                if (i.validate && !i.validate(e))
                    throw new Wa(
                        "MIMETEXT_INVALID_HEADER_VALUE",
                        'The value for the header "'.concat(t, '" is invalid.'),
                    );
                return (this.fields[n].value = e), this.fields[n];
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
                    throw new Wa(
                        "MIMETEXT_INVALID_HEADER_FIELD",
                        "Custom header must have a value.",
                    );
                return this.fields.push(t), t;
            }
            throw new Wa(
                "MIMETEXT_INVALID_HEADER_FIELD",
                "Invalid input for custom header. It must be in type of HeaderField.",
            );
        }
        validateMailboxSingle(t) {
            return t instanceof Ms;
        }
        validateMailboxMulti(t) {
            return t instanceof Ms || this.isArrayOfMailboxes(t);
        }
        dumpMailboxMulti(t) {
            const e = (t) =>
                0 === t.name.length
                    ? t.dump()
                    : "=?utf-8?B?"
                          .concat(this.envctx.toBase64(t.name), "?= <")
                          .concat(t.addr, ">");
            return this.isArrayOfMailboxes(t)
                ? t.map(e).join(",".concat(this.envctx.eol, " "))
                : t instanceof Ms
                  ? e(t)
                  : "";
        }
        dumpMailboxSingle(t) {
            return t instanceof Ms
                ? ((t) =>
                      0 === t.name.length
                          ? t.dump()
                          : "=?utf-8?B?"
                                .concat(this.envctx.toBase64(t.name), "?= <")
                                .concat(t.addr, ">"))(t)
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
                const r = t;
                if (
                    Object.hasOwn(r, "name") &&
                    "string" == typeof r.name &&
                    r.name.length > 0 &&
                    !Object.keys(r).some((t) => !e.includes(t))
                )
                    return !0;
            }
            return !1;
        }
        isObject(t) {
            return !!t && t.constructor === Object;
        }
        isArrayOfMailboxes(t) {
            return this.isArray(t) && t.every((t) => t instanceof Ms);
        }
        isArray(t) {
            return !!t && t.constructor === Array;
        }
    }
    class js extends As {
        constructor(t) {
            super(t),
                Va(this, "fields", [
                    { name: "Content-ID" },
                    { name: "Content-Type" },
                    { name: "Content-Transfer-Encoding" },
                    { name: "Content-Disposition" },
                ]);
        }
    }
    class Es {
        constructor(t, e) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
            Va(this, "envctx", void 0),
                Va(this, "headers", void 0),
                Va(this, "data", void 0),
                (this.envctx = t),
                (this.headers = new js(this.envctx)),
                (this.data = e),
                this.setHeaders(r);
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
    class Cs {
        constructor(t) {
            Va(this, "envctx", void 0),
                Va(this, "headers", void 0),
                Va(this, "boundaries", { mixed: "", alt: "", related: "" }),
                Va(this, "validTypes", ["text/html", "text/plain"]),
                Va(this, "validContentTransferEncodings", [
                    "7bit",
                    "8bit",
                    "binary",
                    "quoted-printable",
                    "base64",
                ]),
                Va(this, "messages", []),
                (this.envctx = t),
                (this.headers = new As(this.envctx)),
                (this.messages = []),
                this.generateBoundaries();
        }
        asRaw() {
            var t;
            const e = this.envctx.eol,
                r = this.headers.dump(),
                n = this.getMessageByType("text/plain"),
                i = this.getMessageByType("text/html"),
                o =
                    null !== (t = null != i ? i : n) && void 0 !== t
                        ? t
                        : void 0;
            if (void 0 === o)
                throw new Wa(
                    "MIMETEXT_MISSING_BODY",
                    "No content added to the message.",
                );
            const u = this.hasAttachments(),
                a = this.hasInlineAttachments(),
                s =
                    a && u
                        ? "mixed+related"
                        : u
                          ? "mixed"
                          : a
                            ? "related"
                            : n && i
                              ? "alternative"
                              : "";
            if ("mixed+related" === s) {
                const t = this.getAttachments()
                        .map(
                            (t) =>
                                "--" +
                                this.boundaries.mixed +
                                e +
                                t.dump() +
                                e +
                                e,
                        )
                        .join("")
                        .slice(0, -1 * e.length),
                    o = this.getInlineAttachments()
                        .map(
                            (t) =>
                                "--" +
                                this.boundaries.related +
                                e +
                                t.dump() +
                                e +
                                e,
                        )
                        .join("")
                        .slice(0, -1 * e.length);
                return (
                    r +
                    e +
                    "Content-Type: multipart/mixed; boundary=" +
                    this.boundaries.mixed +
                    e +
                    e +
                    "--" +
                    this.boundaries.mixed +
                    e +
                    "Content-Type: multipart/related; boundary=" +
                    this.boundaries.related +
                    e +
                    e +
                    this.dumpTextContent(n, i, this.boundaries.related) +
                    e +
                    e +
                    o +
                    "--" +
                    this.boundaries.related +
                    "--" +
                    e +
                    t +
                    "--" +
                    this.boundaries.mixed +
                    "--"
                );
            }
            if ("mixed" === s) {
                const t = this.getAttachments()
                    .map(
                        (t) =>
                            "--" + this.boundaries.mixed + e + t.dump() + e + e,
                    )
                    .join("")
                    .slice(0, -1 * e.length);
                return (
                    r +
                    e +
                    "Content-Type: multipart/mixed; boundary=" +
                    this.boundaries.mixed +
                    e +
                    e +
                    this.dumpTextContent(n, i, this.boundaries.mixed) +
                    e +
                    (n && i ? "" : e) +
                    t +
                    "--" +
                    this.boundaries.mixed +
                    "--"
                );
            }
            if ("related" === s) {
                const t = this.getInlineAttachments()
                    .map(
                        (t) =>
                            "--" +
                            this.boundaries.related +
                            e +
                            t.dump() +
                            e +
                            e,
                    )
                    .join("")
                    .slice(0, -1 * e.length);
                return (
                    r +
                    e +
                    "Content-Type: multipart/related; boundary=" +
                    this.boundaries.related +
                    e +
                    e +
                    this.dumpTextContent(n, i, this.boundaries.related) +
                    e +
                    e +
                    t +
                    "--" +
                    this.boundaries.related +
                    "--"
                );
            }
            return "alternative" === s
                ? r +
                      e +
                      "Content-Type: multipart/alternative; boundary=" +
                      this.boundaries.alt +
                      e +
                      e +
                      this.dumpTextContent(n, i, this.boundaries.alt) +
                      e +
                      e +
                      "--" +
                      this.boundaries.alt +
                      "--"
                : r + e + o.dump();
        }
        asEncoded() {
            return this.envctx.toBase64WebSafe(this.asRaw());
        }
        dumpTextContent(t, e, r) {
            const n = this.envctx.eol,
                i = null != e ? e : t;
            let o = "";
            return (
                (o =
                    t &&
                    e &&
                    (this.hasInlineAttachments() || this.hasAttachments())
                        ? "--" +
                          r +
                          n +
                          "Content-Type: multipart/alternative; boundary=" +
                          this.boundaries.alt +
                          n +
                          n +
                          "--" +
                          this.boundaries.alt +
                          n +
                          t.dump() +
                          n +
                          n +
                          "--" +
                          this.boundaries.alt +
                          n +
                          e.dump() +
                          n +
                          n +
                          "--" +
                          this.boundaries.alt +
                          "--"
                        : t && e
                          ? "--" +
                            r +
                            n +
                            t.dump() +
                            n +
                            n +
                            "--" +
                            r +
                            n +
                            e.dump()
                          : "--" + r + n + i.dump()),
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
            var e, r, n;
            if (
                (this.isObject(t.headers) || (t.headers = {}),
                "string" != typeof t.filename)
            )
                throw new Wa(
                    "MIMETEXT_MISSING_FILENAME",
                    'The property "filename" must exist while adding attachments.',
                );
            let i =
                (null !== (e = t.headers["Content-Type"]) && void 0 !== e
                    ? e
                    : t.contentType) || "none";
            if (!1 === this.envctx.validateContentType(i))
                throw new Wa(
                    "MIMETEXT_INVALID_MESSAGE_TYPE",
                    'You specified an invalid content type "'.concat(i, '".'),
                );
            const o =
                null !==
                    (r =
                        null !== (n = t.headers["Content-Transfer-Encoding"]) &&
                        void 0 !== n
                            ? n
                            : t.encoding) && void 0 !== r
                    ? r
                    : "base64";
            this.validContentTransferEncodings.includes(o) ||
                (i = "application/octet-stream");
            const u = t.headers["Content-ID"];
            "string" == typeof u &&
                u.length > 2 &&
                !u.startsWith("<") &&
                !u.endsWith(">") &&
                (t.headers["Content-ID"] = "<" + t.headers["Content-ID"] + ">");
            const a = t.inline ? "inline" : "attachment";
            return (
                (t.headers = Object.assign({}, t.headers, {
                    "Content-Type": ""
                        .concat(i, '; name="')
                        .concat(t.filename, '"'),
                    "Content-Transfer-Encoding": o,
                    "Content-Disposition": ""
                        .concat(a, '; filename="')
                        .concat(t.filename, '"'),
                })),
                this._addMessage({ data: t.data, headers: t.headers })
            );
        }
        addMessage(t) {
            var e, r, n, i;
            this.isObject(t.headers) || (t.headers = {});
            let o =
                (null !== (e = t.headers["Content-Type"]) && void 0 !== e
                    ? e
                    : t.contentType) || "none";
            if (!this.validTypes.includes(o))
                throw new Wa(
                    "MIMETEXT_INVALID_MESSAGE_TYPE",
                    "Valid content types are "
                        .concat(
                            this.validTypes.join(", "),
                            ' but you specified "',
                        )
                        .concat(o, '".'),
                );
            const u =
                null !==
                    (r =
                        null !== (n = t.headers["Content-Transfer-Encoding"]) &&
                        void 0 !== n
                            ? n
                            : t.encoding) && void 0 !== r
                    ? r
                    : "7bit";
            this.validContentTransferEncodings.includes(u) ||
                (o = "application/octet-stream");
            const a = null !== (i = t.charset) && void 0 !== i ? i : "UTF-8";
            return (
                (t.headers = Object.assign({}, t.headers, {
                    "Content-Type": "".concat(o, "; charset=").concat(a),
                    "Content-Transfer-Encoding": u,
                })),
                this._addMessage({ data: t.data, headers: t.headers })
            );
        }
        _addMessage(t) {
            const e = new Es(this.envctx, t.data, t.headers);
            return this.messages.push(e), e;
        }
        setSender(t) {
            const e = new Ms(
                t,
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "From" },
            );
            return this.setHeader("From", e), e;
        }
        getSender() {
            return this.getHeader("From");
        }
        setRecipients(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "To" };
            const r = (this.isArray(t) ? t : [t]).map((t) => new Ms(t, e));
            return this.setHeader(e.type, r), r;
        }
        getRecipients() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { type: "To" };
            return this.getHeader(t.type);
        }
        setRecipient(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "To" };
            return this.setRecipients(t, e);
        }
        setTo(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "To" };
            return this.setRecipients(t, e);
        }
        setCc(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "Cc" };
            return this.setRecipients(t, e);
        }
        setBcc(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { type: "Bcc" };
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
        stripFingerprints() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : ["Message-ID", "Message-Id", "X-Mailer", "User-Agent"];
            this.headers.removeMany(t);
        }
    }
    const Is = {
        toBase64: function (t) {
            return S(t);
        },
        toBase64WebSafe: function (t) {
            return w(t);
        },
        eol: "\r\n",
        validateContentType: (t) => t.length > 0 && t,
    };
    return (
        (t.MIMEMessage = Cs),
        (t.MIMEMessageContent = Es),
        (t.MIMEMessageHeader = As),
        (t.MIMETextError = Wa),
        (t.Mailbox = Ms),
        (t.createMimeMessage = function () {
            return new Cs(Is);
        }),
        t
    );
})({}, crypto);
//# sourceMappingURL=mimetext.iife.js.map
