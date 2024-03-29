/**
 * @license
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */

//     Backbone.js 1.1.2
//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */

!(function () {
  var t, e, n, r, i, o, s, a, u, c, l, h, f, p, d, g, v, m, y
  ;(function () {
    function e(t, e, n) {
      for (var r = (n || 0) - 1, i = t ? t.length : 0; ++r < i; )
        if (t[r] === e) return r
      return -1
    }
    function n(t, e) {
      var n = t.criteria,
        r = e.criteria
      if (n !== r) {
        if (n > r || void 0 === n) return 1
        if (n < r || void 0 === r) return -1
      }
      return t.index - e.index
    }
    function r(t) {
      return '\\' + xe[t]
    }
    function i(t, e, n) {
      e || (e = 0), void 0 === n && (n = t ? t.length : 0)
      for (var r = -1, i = n - e || 0, o = Array(i < 0 ? 0 : i); ++r < i; )
        o[r] = t[e + r]
      return o
    }
    function o(t) {
      return t instanceof o ? t : new s(t)
    }
    function s(t, e) {
      ;(this.__chain__ = !!e), (this.__wrapped__ = t)
    }
    function a(t) {
      function e() {
        if (r) {
          var t = r.slice()
          Oe.apply(t, arguments)
        }
        if (this instanceof e) {
          var o = u(n.prototype),
            s = n.apply(o, t || arguments)
          return L(s) ? s : o
        }
        return n.apply(i, t || arguments)
      }
      var n = t[0],
        r = t[2],
        i = t[4]
      return e
    }
    function u(t, e) {
      return L(t) ? Ie(t) : {}
    }
    function c(t, e, n) {
      if ('function' != typeof t) return zt
      if (void 0 === e || !('prototype' in t)) return t
      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n)
          }
        case 2:
          return function (n, r) {
            return t.call(e, n, r)
          }
        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i)
          }
        case 4:
          return function (n, r, i, o) {
            return t.call(e, n, r, i, o)
          }
      }
      return Ht(t, e)
    }
    function l(t) {
      function e() {
        var t = h ? a : this
        if (o) {
          var v = o.slice()
          Oe.apply(v, arguments)
        }
        if (
          (s || p) &&
          (v || (v = i(arguments)), s && Oe.apply(v, s), p && v.length < c)
        )
          return (r |= 16), l([n, d ? r : -4 & r, v, null, a, c])
        if ((v || (v = arguments), f && (n = t[g]), this instanceof e)) {
          t = u(n.prototype)
          var m = n.apply(t, v)
          return L(m) ? m : t
        }
        return n.apply(t, v)
      }
      var n = t[0],
        r = t[1],
        o = t[2],
        s = t[3],
        a = t[4],
        c = t[5],
        h = 1 & r,
        f = 2 & r,
        p = 4 & r,
        d = 8 & r,
        g = n
      return e
    }
    function h(t, e) {
      for (var n = -1, r = b(), i = t ? t.length : 0, o = []; ++n < i; ) {
        var s = t[n]
        r(e, s) < 0 && o.push(s)
      }
      return o
    }
    function f(t, e, n, r) {
      for (var i = (r || 0) - 1, o = t ? t.length : 0, s = []; ++i < o; ) {
        var a = t[i]
        if (
          a &&
          'object' == typeof a &&
          'number' == typeof a.length &&
          (ze(a) || w(a))
        ) {
          e || (a = f(a, e, n))
          var u = -1,
            c = a.length,
            l = s.length
          for (s.length += c; ++u < c; ) s[l++] = a[u]
        } else n || s.push(a)
      }
      return s
    }
    function p(t, e, n, r) {
      if (t === e) return 0 !== t || 1 / t == 1 / e
      var i = typeof t,
        s = typeof e
      if (!(t !== t || (t && be[i]) || (e && be[s]))) return !1
      if (null == t || null == e) return t === e
      var a = Ne.call(t)
      if (a != Ne.call(e)) return !1
      switch (a) {
        case pe:
        case de:
          return +t == +e
        case ge:
          return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e
        case me:
        case ye:
          return t == String(e)
      }
      var u = a == fe
      if (!u) {
        var c = t instanceof o,
          l = e instanceof o
        if (c || l) return p(c ? t.__wrapped__ : t, l ? e.__wrapped__ : e, n, r)
        if (a != ve) return !1
        var h = t.constructor,
          f = e.constructor
        if (
          h != f &&
          !(O(h) && h instanceof h && O(f) && f instanceof f) &&
          'constructor' in t &&
          'constructor' in e
        )
          return !1
      }
      n || (n = []), r || (r = [])
      for (var d = n.length; d--; ) if (n[d] == t) return r[d] == e
      var g = !0,
        v = 0
      if ((n.push(t), r.push(e), u)) {
        if (((v = e.length), (g = v == t.length)))
          for (; v-- && (g = p(t[v], e[v], n, r)); );
        return g
      }
      return (
        Ke(e, function (e, i, o) {
          if (He.call(o, i))
            return v++, !(g = He.call(t, i) && p(t[i], e, n, r)) && se
        }),
        g &&
          Ke(t, function (t, e, n) {
            if (He.call(n, e)) return !(g = --v > -1) && se
          }),
        g
      )
    }
    function d(t, e) {
      return t + De(We() * (e - t + 1))
    }
    function g(t, e, n) {
      for (
        var r = -1, i = b(), o = t ? t.length : 0, s = [], a = n ? [] : s;
        ++r < o;

      ) {
        var u = t[r],
          c = n ? n(u, r, t) : u
        ;(e ? !r || a[a.length - 1] !== c : i(a, c) < 0) &&
          (n && a.push(c), s.push(u))
      }
      return s
    }
    function v(t) {
      return function (e, n, r) {
        var i = {}
        n = Lt(n, r, 3)
        var o = -1,
          s = e ? e.length : 0
        if ('number' == typeof s)
          for (; ++o < s; ) {
            var a = e[o]
            t(i, a, n(a, o, e), e)
          }
        else
          Ze(e, function (e, r, o) {
            t(i, e, n(e, r, o), o)
          })
        return i
      }
    }
    function m(t, e, n, r, i, o) {
      var s = 2 & e,
        u = 16 & e,
        c = 32 & e
      if (!s && !O(t)) throw new TypeError()
      return (
        u && !n.length && ((e &= -17), (u = n = !1)),
        c && !r.length && ((e &= -33), (c = r = !1)),
        (1 == e || 17 === e ? a : l)([t, e, n, r, i, o])
      )
    }
    function y(t) {
      return Ge[t]
    }
    function b() {
      var t = (t = o.indexOf) === yt ? e : t
      return t
    }
    function x(t) {
      return Je[t]
    }
    function w(t) {
      return (
        (t &&
          'object' == typeof t &&
          'number' == typeof t.length &&
          Ne.call(t) == he) ||
        !1
      )
    }
    function T(t) {
      if (!t) return t
      for (var e = 1, n = arguments.length; e < n; e++) {
        var r = arguments[e]
        if (r) for (var i in r) t[i] = r[i]
      }
      return t
    }
    function E(t) {
      return L(t) ? (ze(t) ? i(t) : T({}, t)) : t
    }
    function _(t) {
      if (!t) return t
      for (var e = 1, n = arguments.length; e < n; e++) {
        var r = arguments[e]
        if (r) for (var i in r) void 0 === t[i] && (t[i] = r[i])
      }
      return t
    }
    function C(t) {
      var e = []
      return (
        Ke(t, function (t, n) {
          O(t) && e.push(n)
        }),
        e.sort()
      )
    }
    function S(t, e) {
      return !!t && He.call(t, e)
    }
    function k(t) {
      for (var e = -1, n = Xe(t), r = n.length, i = {}; ++e < r; ) {
        var o = n[e]
        i[t[o]] = o
      }
      return i
    }
    function N(t) {
      return (
        !0 === t ||
        !1 === t ||
        (t && 'object' == typeof t && Ne.call(t) == pe) ||
        !1
      )
    }
    function A(t) {
      return (t && 'object' == typeof t && Ne.call(t) == de) || !1
    }
    function j(t) {
      return (t && 1 === t.nodeType) || !1
    }
    function D(t) {
      if (!t) return !0
      if (ze(t) || M(t)) return !t.length
      for (var e in t) if (He.call(t, e)) return !1
      return !0
    }
    function H(t, e) {
      return p(t, e)
    }
    function R(t) {
      return qe(t) && !Fe(parseFloat(t))
    }
    function O(t) {
      return 'function' == typeof t
    }
    function L(t) {
      return !(!t || !be[typeof t])
    }
    function I(t) {
      return q(t) && t != +t
    }
    function P(t) {
      return null === t
    }
    function q(t) {
      return (
        'number' == typeof t ||
        (t && 'object' == typeof t && Ne.call(t) == ge) ||
        !1
      )
    }
    function F(t) {
      return (t && be[typeof t] && Ne.call(t) == me) || !1
    }
    function M(t) {
      return (
        'string' == typeof t ||
        (t && 'object' == typeof t && Ne.call(t) == ye) ||
        !1
      )
    }
    function $(t) {
      return void 0 === t
    }
    function B(t) {
      var e = []
      Ke(t, function (t, n) {
        e.push(n)
      }),
        (e = h(e, f(arguments, !0, !1, 1)))
      for (var n = -1, r = e.length, i = {}; ++n < r; ) {
        var o = e[n]
        i[o] = t[o]
      }
      return i
    }
    function W(t) {
      for (var e = -1, n = Xe(t), r = n.length, i = Array(r); ++e < r; ) {
        var o = n[e]
        i[e] = [o, t[o]]
      }
      return i
    }
    function U(t) {
      for (
        var e = -1, n = f(arguments, !0, !1, 1), r = n.length, i = {};
        ++e < r;

      ) {
        var o = n[e]
        o in t && (i[o] = t[o])
      }
      return i
    }
    function z(t) {
      for (var e = -1, n = Xe(t), r = n.length, i = Array(r); ++e < r; )
        i[e] = t[n[e]]
      return i
    }
    function V(t, e) {
      var n = b(),
        r = t ? t.length : 0,
        i = !1
      return (
        r && 'number' == typeof r
          ? (i = n(t, e) > -1)
          : Ze(t, function (t) {
              return (i = t === e) && se
            }),
        i
      )
    }
    function X(t, e, n) {
      var r = !0
      e = Lt(e, n, 3)
      var i = -1,
        o = t ? t.length : 0
      if ('number' == typeof o) for (; ++i < o && (r = !!e(t[i], i, t)); );
      else
        Ze(t, function (t, n, i) {
          return !(r = !!e(t, n, i)) && se
        })
      return r
    }
    function G(t, e, n) {
      var r = []
      e = Lt(e, n, 3)
      var i = -1,
        o = t ? t.length : 0
      if ('number' == typeof o)
        for (; ++i < o; ) {
          var s = t[i]
          e(s, i, t) && r.push(s)
        }
      else
        Ze(t, function (t, n, i) {
          e(t, n, i) && r.push(t)
        })
      return r
    }
    function J(t, e, n) {
      e = Lt(e, n, 3)
      var r = -1,
        i = t ? t.length : 0
      if ('number' != typeof i) {
        var o
        return (
          Ze(t, function (t, n, r) {
            if (e(t, n, r)) return (o = t), se
          }),
          o
        )
      }
      for (; ++r < i; ) {
        var s = t[r]
        if (e(s, r, t)) return s
      }
    }
    function Y(t, e) {
      return pt(t, e, !0)
    }
    function Q(t, e, n) {
      var r = -1,
        i = t ? t.length : 0
      if (((e = e && void 0 === n ? e : c(e, n, 3)), 'number' == typeof i))
        for (; ++r < i && e(t[r], r, t) !== se; );
      else Ze(t, e)
    }
    function K(t, e) {
      var n = t ? t.length : 0
      if ('number' == typeof n) for (; n-- && !1 !== e(t[n], n, t); );
      else {
        var r = Xe(t)
        ;(n = r.length),
          Ze(t, function (t, i, o) {
            return (i = r ? r[--n] : --n), !1 === e(o[i], i, o) && se
          })
      }
    }
    function Z(t, e) {
      var n = i(arguments, 2),
        r = -1,
        o = 'function' == typeof e,
        s = t ? t.length : 0,
        a = Array('number' == typeof s ? s : 0)
      return (
        Q(t, function (t) {
          a[++r] = (o ? e : t[e]).apply(t, n)
        }),
        a
      )
    }
    function tt(t, e, n) {
      var r = -1,
        i = t ? t.length : 0
      if (((e = Lt(e, n, 3)), 'number' == typeof i))
        for (var o = Array(i); ++r < i; ) o[r] = e(t[r], r, t)
      else
        (o = []),
          Ze(t, function (t, n, i) {
            o[++r] = e(t, n, i)
          })
      return o
    }
    function et(t, e, n) {
      var r = -1 / 0,
        i = r
      'function' != typeof e && n && n[e] === t && (e = null)
      var o = -1,
        s = t ? t.length : 0
      if (null == e && 'number' == typeof s)
        for (; ++o < s; ) {
          var a = t[o]
          a > i && (i = a)
        }
      else
        (e = Lt(e, n, 3)),
          Q(t, function (t, n, o) {
            var s = e(t, n, o)
            s > r && ((r = s), (i = t))
          })
      return i
    }
    function nt(t, e, n) {
      var r = 1 / 0,
        i = r
      'function' != typeof e && n && n[e] === t && (e = null)
      var o = -1,
        s = t ? t.length : 0
      if (null == e && 'number' == typeof s)
        for (; ++o < s; ) {
          var a = t[o]
          a < i && (i = a)
        }
      else
        (e = Lt(e, n, 3)),
          Q(t, function (t, n, o) {
            var s = e(t, n, o)
            s < r && ((r = s), (i = t))
          })
      return i
    }
    function rt(t, e) {
      var n = -1,
        r = t ? t.length : 0
      if ('number' == typeof r) for (var i = Array(r); ++n < r; ) i[n] = t[n][e]
      return i || tt(t, e)
    }
    function it(t, e, n, r) {
      if (!t) return n
      var i = arguments.length < 3
      e = Lt(e, r, 4)
      var o = -1,
        s = t.length
      if ('number' == typeof s)
        for (i && (n = t[++o]); ++o < s; ) n = e(n, t[o], o, t)
      else
        Ze(t, function (t, r, o) {
          n = i ? ((i = !1), t) : e(n, t, r, o)
        })
      return n
    }
    function ot(t, e, n, r) {
      var i = arguments.length < 3
      return (
        (e = Lt(e, r, 4)),
        K(t, function (t, r, o) {
          n = i ? ((i = !1), t) : e(n, t, r, o)
        }),
        n
      )
    }
    function st(t, e, n) {
      return (
        (e = Lt(e, n, 3)),
        G(t, function (t, n, r) {
          return !e(t, n, r)
        })
      )
    }
    function at(t, e, n) {
      if ((t && 'number' != typeof t.length && (t = z(t)), null == e || n))
        return t ? t[d(0, t.length - 1)] : ie
      var r = ut(t)
      return (r.length = Be($e(0, e), r.length)), r
    }
    function ut(t) {
      var e = -1,
        n = t ? t.length : 0,
        r = Array('number' == typeof n ? n : 0)
      return (
        Q(t, function (t) {
          var n = d(0, ++e)
          ;(r[e] = r[n]), (r[n] = t)
        }),
        r
      )
    }
    function ct(t) {
      var e = t ? t.length : 0
      return 'number' == typeof e ? e : Xe(t).length
    }
    function lt(t, e, n) {
      var r
      e = Lt(e, n, 3)
      var i = -1,
        o = t ? t.length : 0
      if ('number' == typeof o) for (; ++i < o && !(r = e(t[i], i, t)); );
      else
        Ze(t, function (t, n, i) {
          return (r = e(t, n, i)) && se
        })
      return !!r
    }
    function ht(t, e, r) {
      var i = -1,
        o = t ? t.length : 0,
        s = Array('number' == typeof o ? o : 0)
      for (
        e = Lt(e, r, 3),
          Q(t, function (t, n, r) {
            s[++i] = { criteria: e(t, n, r), index: i, value: t }
          }),
          o = s.length,
          s.sort(n);
        o--;

      )
        s[o] = s[o].value
      return s
    }
    function ft(t) {
      return ze(t) ? i(t) : t && 'number' == typeof t.length ? tt(t) : z(t)
    }
    function pt(t, e, n) {
      return n && D(e) ? ie : (n ? J : G)(t, e)
    }
    function dt(t) {
      for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
        var i = t[e]
        i && r.push(i)
      }
      return r
    }
    function gt(t) {
      return h(t, f(arguments, !0, !0, 1))
    }
    function vt(t, e, n) {
      var r = 0,
        o = t ? t.length : 0
      if ('number' != typeof e && null != e) {
        var s = -1
        for (e = Lt(e, n, 3); ++s < o && e(t[s], s, t); ) r++
      } else if (null == (r = e) || n) return t ? t[0] : ie
      return i(t, 0, Be($e(0, r), o))
    }
    function mt(t, e) {
      return f(t, e)
    }
    function yt(t, n, r) {
      if ('number' == typeof r) {
        var i = t ? t.length : 0
        r = r < 0 ? $e(0, i + r) : r || 0
      } else if (r) {
        var o = Ct(t, n)
        return t[o] === n ? o : -1
      }
      return e(t, n, r)
    }
    function bt(t, e, n) {
      var r = 0,
        o = t ? t.length : 0
      if ('number' != typeof e && null != e) {
        var s = o
        for (e = Lt(e, n, 3); s-- && e(t[s], s, t); ) r++
      } else r = null == e || n ? 1 : e || r
      return i(t, 0, Be($e(0, o - r), o))
    }
    function xt(t) {
      var e = arguments,
        n = e.length,
        r = -1,
        i = b(),
        o = t ? t.length : 0,
        s = []
      t: for (; ++r < o; ) {
        var a = t[r]
        if (i(s, a) < 0) {
          for (var u = n; --u; ) if (i(e[u], a) < 0) continue t
          s.push(a)
        }
      }
      return s
    }
    function wt(t, e, n) {
      var r = 0,
        o = t ? t.length : 0
      if ('number' != typeof e && null != e) {
        var s = o
        for (e = Lt(e, n, 3); s-- && e(t[s], s, t); ) r++
      } else if (null == (r = e) || n) return t ? t[o - 1] : ie
      return i(t, $e(0, o - r))
    }
    function Tt(t, e, n) {
      var r = t ? t.length : 0
      for (
        'number' == typeof n && (r = (n < 0 ? $e(0, r + n) : Be(n, r - 1)) + 1);
        r--;

      )
        if (t[r] === e) return r
      return -1
    }
    function Et(t, e, n) {
      ;(t = +t || 0), (n = +n || 1), null == e && ((e = t), (t = 0))
      for (var r = -1, i = $e(0, je((e - t) / n)), o = Array(i); ++r < i; )
        (o[r] = t), (t += n)
      return o
    }
    function _t(t, e, n) {
      if ('number' != typeof e && null != e) {
        var r = 0,
          o = -1,
          s = t ? t.length : 0
        for (e = Lt(e, n, 3); ++o < s && e(t[o], o, t); ) r++
      } else r = null == e || n ? 1 : $e(0, e)
      return i(t, r)
    }
    function Ct(t, e, n, r) {
      var i = 0,
        o = t ? t.length : i
      for (n = n ? Lt(n, r, 1) : zt, e = n(e); i < o; ) {
        var s = (i + o) >>> 1
        n(t[s]) < e ? (i = s + 1) : (o = s)
      }
      return i
    }
    function St(t) {
      return g(f(arguments, !0, !0))
    }
    function kt(t, e, n, r) {
      return (
        'boolean' != typeof e &&
          null != e &&
          ((r = n),
          (n = 'function' != typeof e && r && r[e] === t ? null : e),
          (e = !1)),
        null != n && (n = Lt(n, r, 3)),
        g(t, e, n)
      )
    }
    function Nt(t) {
      return h(t, i(arguments, 1))
    }
    function At() {
      for (
        var t = -1, e = et(rt(arguments, 'length')), n = Array(e < 0 ? 0 : e);
        ++t < e;

      )
        n[t] = rt(arguments, t)
      return n
    }
    function jt(t, e) {
      for (var n = -1, r = t ? t.length : 0, i = {}; ++n < r; ) {
        var o = t[n]
        e ? (i[o] = e[n]) : o && (i[o[0]] = o[1])
      }
      return i
    }
    function Dt(t, e) {
      if (!O(e)) throw new TypeError()
      return function () {
        if (--t < 1) return e.apply(this, arguments)
      }
    }
    function Ht(t, e) {
      return arguments.length > 2
        ? m(t, 17, i(arguments, 2), null, e)
        : m(t, 1, null, null, e)
    }
    function Rt(t) {
      for (
        var e = arguments.length > 1 ? f(arguments, !0, !1, 1) : C(t),
          n = -1,
          r = e.length;
        ++n < r;

      ) {
        var i = e[n]
        t[i] = m(t[i], 1, null, null, t)
      }
      return t
    }
    function Ot() {
      for (var t = arguments, e = t.length; e--; )
        if (!O(t[e])) throw new TypeError()
      return function () {
        for (var e = arguments, n = t.length; n--; ) e = [t[n].apply(this, e)]
        return e[0]
      }
    }
    function Lt(t, e, n) {
      var r = typeof t
      if (null == t || 'function' == r) return c(t, e, n)
      if ('object' != r)
        return function (e) {
          return e[t]
        }
      var i = Xe(t)
      return function (e) {
        for (var n = i.length, r = !1; n-- && (r = e[i[n]] === t[i[n]]); );
        return r
      }
    }
    function It(t, e, n) {
      var r,
        i,
        o,
        s,
        a,
        u,
        c,
        l = 0,
        h = !1,
        f = !0
      if (!O(t)) throw new TypeError()
      if (((e = $e(0, e) || 0), !0 === n)) {
        var p = !0
        f = !1
      } else
        L(n) &&
          ((p = n.leading),
          (h = 'maxWait' in n && ($e(e, n.maxWait) || 0)),
          (f = 'trailing' in n ? n.trailing : f))
      var d = function () {
          var n = e - (Re() - s)
          if (n <= 0) {
            i && clearTimeout(i)
            var h = c
            ;(i = u = c = ie),
              h && ((l = Re()), (o = t.apply(a, r)), u || i || (r = a = null))
          } else u = setTimeout(d, n)
        },
        g = function () {
          u && clearTimeout(u),
            (i = u = c = ie),
            (f || h !== e) &&
              ((l = Re()), (o = t.apply(a, r)), u || i || (r = a = null))
        }
      return function () {
        if (
          ((r = arguments),
          (s = Re()),
          (a = this),
          (c = f && (u || !p)),
          !1 === h)
        )
          var n = p && !u
        else {
          i || p || (l = s)
          var v = h - (s - l),
            m = v <= 0
          m
            ? (i && (i = clearTimeout(i)), (l = s), (o = t.apply(a, r)))
            : i || (i = setTimeout(g, v))
        }
        return (
          m && u
            ? (u = clearTimeout(u))
            : u || e === h || (u = setTimeout(d, e)),
          n && ((m = !0), (o = t.apply(a, r))),
          !m || u || i || (r = a = null),
          o
        )
      }
    }
    function Pt(t) {
      if (!O(t)) throw new TypeError()
      var e = i(arguments, 1)
      return setTimeout(function () {
        t.apply(ie, e)
      }, 1)
    }
    function qt(t, e) {
      if (!O(t)) throw new TypeError()
      var n = i(arguments, 2)
      return setTimeout(function () {
        t.apply(ie, n)
      }, e)
    }
    function Ft(t, e) {
      var n = {}
      return function () {
        var r = e ? e.apply(this, arguments) : ae + arguments[0]
        return He.call(n, r) ? n[r] : (n[r] = t.apply(this, arguments))
      }
    }
    function Mt(t) {
      var e, n
      if (!O(t)) throw new TypeError()
      return function () {
        return e ? n : ((e = !0), (n = t.apply(this, arguments)), (t = null), n)
      }
    }
    function $t(t) {
      return m(t, 16, i(arguments, 1))
    }
    function Bt(t, e, n) {
      var r = !0,
        i = !0
      if (!O(t)) throw new TypeError()
      return (
        !1 === n
          ? (r = !1)
          : L(n) &&
            ((r = 'leading' in n ? n.leading : r),
            (i = 'trailing' in n ? n.trailing : i)),
        (n = {}),
        (n.leading = r),
        (n.maxWait = e),
        (n.trailing = i),
        It(t, e, n)
      )
    }
    function Wt(t, e) {
      return m(e, 16, [t])
    }
    function Ut(t) {
      return null == t ? '' : String(t).replace(Qe, y)
    }
    function zt(t) {
      return t
    }
    function Vt(t) {
      Q(C(t), function (e) {
        var n = (o[e] = t[e])
        o.prototype[e] = function () {
          var t = [this.__wrapped__]
          Oe.apply(t, arguments)
          var e = n.apply(o, t)
          return this.__chain__ ? new s(e, !0) : e
        }
      })
    }
    function Xt() {
      return (we._ = ke), this
    }
    function Gt(t, e) {
      return (
        null == t && null == e && (e = 1),
        (t = +t || 0),
        null == e ? ((e = t), (t = 0)) : (e = +e || 0),
        t + De(We() * (e - t + 1))
      )
    }
    function Jt(t, e) {
      if (t) {
        var n = t[e]
        return O(n) ? t[e]() : n
      }
    }
    function Yt(t, e, n) {
      var i = o,
        s = i.templateSettings
      ;(t = String(t || '')), (n = _({}, n, s))
      var a = 0,
        u = "__p += '",
        c = n.variable,
        l = RegExp(
          (n.escape || ce).source +
            '|' +
            (n.interpolate || ce).source +
            '|' +
            (n.evaluate || ce).source +
            '|$',
          'g'
        )
      t.replace(l, function (e, n, i, o, s) {
        return (
          (u += t.slice(a, s).replace(le, r)),
          n && (u += "' +\n_.escape(" + n + ") +\n'"),
          o && (u += "';\n" + o + ";\n__p += '"),
          i && (u += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"),
          (a = s + e.length),
          e
        )
      }),
        (u += "';\n"),
        c || ((c = 'obj'), (u = 'with (' + c + ' || {}) {\n' + u + '\n}\n')),
        (u =
          'function(' +
          c +
          ") {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" +
          u +
          'return __p\n}')
      try {
        var h = Function('_', 'return ' + u)(i)
      } catch (t) {
        throw ((t.source = u), t)
      }
      return e ? h(e) : ((h.source = u), h)
    }
    function Qt(t, e, n) {
      t = (t = +t) > -1 ? t : 0
      var r = -1,
        i = Array(t)
      for (e = c(e, n, 1); ++r < t; ) i[r] = e(r)
      return i
    }
    function Kt(t) {
      return null == t ? '' : String(t).replace(Ye, x)
    }
    function Zt(t) {
      var e = ++oe + ''
      return t ? t + e : e
    }
    function te(t) {
      return (t = new s(t)), (t.__chain__ = !0), t
    }
    function ee(t, e) {
      return e(t), t
    }
    function ne() {
      return (this.__chain__ = !0), this
    }
    function re() {
      return this.__wrapped__
    }
    var ie,
      oe = 0,
      se = {},
      ae = +new Date() + '',
      ue = /<%=([\s\S]+?)%>/g,
      ce = /($^)/,
      le = /['\n\r\t\u2028\u2029\\]/g,
      he = '[object Arguments]',
      fe = '[object Array]',
      pe = '[object Boolean]',
      de = '[object Date]',
      ge = '[object Number]',
      ve = '[object Object]',
      me = '[object RegExp]',
      ye = '[object String]',
      be = {
        boolean: !1,
        function: !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1,
      },
      xe = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\t': 't',
        '\u2028': 'u2028',
        '\u2029': 'u2029',
      },
      we = (be[typeof window] && window) || this,
      Te = be[typeof exports] && exports && !exports.nodeType && exports,
      Ee = be[typeof module] && module && !module.nodeType && module,
      _e = (Ee && Ee.exports, be[typeof global] && global)
    !_e || (_e.global !== _e && _e.window !== _e) || (we = _e)
    var Ce = [],
      Se = Object.prototype,
      ke = we._,
      Ne = Se.toString,
      Ae = RegExp(
        '^' +
          String(Ne)
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/toString| for [^\]]+/g, '.*?') +
          '$'
      ),
      je = Math.ceil,
      De = Math.floor,
      He = Se.hasOwnProperty,
      Re =
        (Ae.test((Re = Date.now)) && Re) ||
        function () {
          return +new Date()
        },
      Oe = Ce.push,
      Le = Se.propertyIsEnumerable,
      Ie = Ae.test((Ie = Object.create)) && Ie,
      Pe = Ae.test((Pe = Array.isArray)) && Pe,
      qe = we.isFinite,
      Fe = we.isNaN,
      Me = Ae.test((Me = Object.keys)) && Me,
      $e = Math.max,
      Be = Math.min,
      We = Math.random
    s.prototype = o.prototype
    var Ue = {}
    !(function () {
      var t = { 0: 1, length: 1 }
      Ue.spliceObjects = (Ce.splice.call(t, 0, 1), !t[0])
    })(),
      (o.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: ue,
        variable: '',
      }),
      Ie ||
        (u = (function () {
          function t() {}
          return function (e) {
            if (L(e)) {
              t.prototype = e
              var n = new t()
              t.prototype = null
            }
            return n || we.Object()
          }
        })()),
      w(arguments) ||
        (w = function (t) {
          return (
            (t &&
              'object' == typeof t &&
              'number' == typeof t.length &&
              He.call(t, 'callee') &&
              !Le.call(t, 'callee')) ||
            !1
          )
        })
    var ze =
        Pe ||
        function (t) {
          return (
            (t &&
              'object' == typeof t &&
              'number' == typeof t.length &&
              Ne.call(t) == fe) ||
            !1
          )
        },
      Ve = function (t) {
        var e,
          n = t,
          r = []
        if (!n) return r
        if (!be[typeof t]) return r
        for (e in n) He.call(n, e) && r.push(e)
        return r
      },
      Xe = Me
        ? function (t) {
            return L(t) ? Me(t) : []
          }
        : Ve,
      Ge = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
      },
      Je = k(Ge),
      Ye = RegExp('(' + Xe(Je).join('|') + ')', 'g'),
      Qe = RegExp('[' + Xe(Ge).join('') + ']', 'g'),
      Ke = function (t, e) {
        var n,
          r = t,
          i = r
        if (!r) return i
        if (!be[typeof r]) return i
        for (n in r) if (e(r[n], n, t) === se) return i
        return i
      },
      Ze = function (t, e) {
        var n,
          r = t,
          i = r
        if (!r) return i
        if (!be[typeof r]) return i
        for (n in r) if (He.call(r, n) && e(r[n], n, t) === se) return i
        return i
      }
    O(/x/) &&
      (O = function (t) {
        return 'function' == typeof t && '[object Function]' == Ne.call(t)
      })
    var tn = v(function (t, e, n) {
        He.call(t, n) ? t[n]++ : (t[n] = 1)
      }),
      en = v(function (t, e, n) {
        ;(He.call(t, n) ? t[n] : (t[n] = [])).push(e)
      }),
      nn = v(function (t, e, n) {
        t[n] = e
      })
    ;(o.after = Dt),
      (o.bind = Ht),
      (o.bindAll = Rt),
      (o.chain = te),
      (o.compact = dt),
      (o.compose = Ot),
      (o.countBy = tn),
      (o.debounce = It),
      (o.defaults = _),
      (o.defer = Pt),
      (o.delay = qt),
      (o.difference = gt),
      (o.filter = G),
      (o.flatten = mt),
      (o.forEach = Q),
      (o.functions = C),
      (o.groupBy = en),
      (o.indexBy = nn),
      (o.initial = bt),
      (o.intersection = xt),
      (o.invert = k),
      (o.invoke = Z),
      (o.keys = Xe),
      (o.map = tt),
      (o.max = et),
      (o.memoize = Ft),
      (o.min = nt),
      (o.omit = B),
      (o.once = Mt),
      (o.pairs = W),
      (o.partial = $t),
      (o.pick = U),
      (o.pluck = rt),
      (o.range = Et),
      (o.reject = st),
      (o.rest = _t),
      (o.shuffle = ut),
      (o.sortBy = ht),
      (o.tap = ee),
      (o.throttle = Bt),
      (o.times = Qt),
      (o.toArray = ft),
      (o.union = St),
      (o.uniq = kt),
      (o.values = z),
      (o.where = pt),
      (o.without = Nt),
      (o.wrap = Wt),
      (o.zip = At),
      (o.collect = tt),
      (o.drop = _t),
      (o.each = Q),
      (o.extend = T),
      (o.methods = C),
      (o.object = jt),
      (o.select = G),
      (o.tail = _t),
      (o.unique = kt),
      (o.clone = E),
      (o.contains = V),
      (o.escape = Ut),
      (o.every = X),
      (o.find = J),
      (o.has = S),
      (o.identity = zt),
      (o.indexOf = yt),
      (o.isArguments = w),
      (o.isArray = ze),
      (o.isBoolean = N),
      (o.isDate = A),
      (o.isElement = j),
      (o.isEmpty = D),
      (o.isEqual = H),
      (o.isFinite = R),
      (o.isFunction = O),
      (o.isNaN = I),
      (o.isNull = P),
      (o.isNumber = q),
      (o.isObject = L),
      (o.isRegExp = F),
      (o.isString = M),
      (o.isUndefined = $),
      (o.lastIndexOf = Tt),
      (o.mixin = Vt),
      (o.noConflict = Xt),
      (o.random = Gt),
      (o.reduce = it),
      (o.reduceRight = ot),
      (o.result = Jt),
      (o.size = ct),
      (o.some = lt),
      (o.sortedIndex = Ct),
      (o.template = Yt),
      (o.unescape = Kt),
      (o.uniqueId = Zt),
      (o.all = X),
      (o.any = lt),
      (o.detect = J),
      (o.findWhere = Y),
      (o.foldl = it),
      (o.foldr = ot),
      (o.include = V),
      (o.inject = it),
      (o.first = vt),
      (o.last = wt),
      (o.sample = at),
      (o.take = vt),
      (o.head = vt),
      Vt(o),
      (o.VERSION = '2.3.0'),
      (o.prototype.chain = ne),
      (o.prototype.value = re),
      Q(
        ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
        function (t) {
          var e = Ce[t]
          o.prototype[t] = function () {
            var t = this.__wrapped__
            return (
              e.apply(t, arguments),
              Ue.spliceObjects || 0 !== t.length || delete t[0],
              this
            )
          }
        }
      ),
      Q(['concat', 'join', 'slice'], function (t) {
        var e = Ce[t]
        o.prototype[t] = function () {
          var t = this.__wrapped__,
            n = e.apply(t, arguments)
          return this.__chain__ && ((n = new s(n)), (n.__chain__ = !0)), n
        }
      }),
      (we._ = o),
      (t = (function () {
        return o
      })())
  }.call(this),
    (function (t, e) {
      'object' == typeof module && 'object' == typeof module.exports
        ? (module.exports = t.document
            ? e(t, !0)
            : function (t) {
                if (!t.document)
                  throw new Error('jQuery requires a window with a document')
                return e(t)
              })
        : e(t)
    })('undefined' != typeof window ? window : this, function (t, n) {
      function r(t) {
        var e = t.length,
          n = Z.type(t)
        return (
          'function' !== n &&
          !Z.isWindow(t) &&
          (!(1 !== t.nodeType || !e) ||
            'array' === n ||
            0 === e ||
            ('number' == typeof e && e > 0 && e - 1 in t))
        )
      }
      function i(t, e, n) {
        if (Z.isFunction(e))
          return Z.grep(t, function (t, r) {
            return !!e.call(t, r, t) !== n
          })
        if (e.nodeType)
          return Z.grep(t, function (t) {
            return (t === e) !== n
          })
        if ('string' == typeof e) {
          if (at.test(e)) return Z.filter(e, t, n)
          e = Z.filter(e, t)
        }
        return Z.grep(t, function (t) {
          return X.call(e, t) >= 0 !== n
        })
      }
      function o(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t
      }
      function s(t) {
        var e = (pt[t] = {})
        return (
          Z.each(t.match(ft) || [], function (t, n) {
            e[n] = !0
          }),
          e
        )
      }
      function a() {
        K.removeEventListener('DOMContentLoaded', a, !1),
          t.removeEventListener('load', a, !1),
          Z.ready()
      }
      function u() {
        Object.defineProperty((this.cache = {}), 0, {
          get: function () {
            return {}
          },
        }),
          (this.expando = Z.expando + Math.random())
      }
      function c(t, e, n) {
        var r
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((r = 'data-' + e.replace(bt, '-$1').toLowerCase()),
            'string' == typeof (n = t.getAttribute(r)))
          ) {
            try {
              n =
                'true' === n ||
                ('false' !== n &&
                  ('null' === n
                    ? null
                    : +n + '' === n
                    ? +n
                    : yt.test(n)
                    ? Z.parseJSON(n)
                    : n))
            } catch (t) {}
            mt.set(t, e, n)
          } else n = void 0
        return n
      }
      function l() {
        return !0
      }
      function h() {
        return !1
      }
      function f() {
        try {
          return K.activeElement
        } catch (t) {}
      }
      function p(t, e) {
        return Z.nodeName(t, 'table') &&
          Z.nodeName(11 !== e.nodeType ? e : e.firstChild, 'tr')
          ? t.getElementsByTagName('tbody')[0] ||
              t.appendChild(t.ownerDocument.createElement('tbody'))
          : t
      }
      function d(t) {
        return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t
      }
      function g(t) {
        var e = Ot.exec(t.type)
        return e ? (t.type = e[1]) : t.removeAttribute('type'), t
      }
      function v(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
          vt.set(t[n], 'globalEval', !e || vt.get(e[n], 'globalEval'))
      }
      function m(t, e) {
        var n, r, i, o, s, a, u, c
        if (1 === e.nodeType) {
          if (
            vt.hasData(t) &&
            ((o = vt.access(t)), (s = vt.set(e, o)), (c = o.events))
          ) {
            delete s.handle, (s.events = {})
            for (i in c)
              for (n = 0, r = c[i].length; n < r; n++)
                Z.event.add(e, i, c[i][n])
          }
          mt.hasData(t) &&
            ((a = mt.access(t)), (u = Z.extend({}, a)), mt.set(e, u))
        }
      }
      function y(t, e) {
        var n = t.getElementsByTagName
          ? t.getElementsByTagName(e || '*')
          : t.querySelectorAll
          ? t.querySelectorAll(e || '*')
          : []
        return void 0 === e || (e && Z.nodeName(t, e)) ? Z.merge([t], n) : n
      }
      function b(t, e) {
        var n = e.nodeName.toLowerCase()
        'input' === n && Et.test(t.type)
          ? (e.checked = t.checked)
          : ('input' !== n && 'textarea' !== n) ||
            (e.defaultValue = t.defaultValue)
      }
      function x(e, n) {
        var r,
          i = Z(n.createElement(e)).appendTo(n.body),
          o =
            t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0]))
              ? r.display
              : Z.css(i[0], 'display')
        return i.detach(), o
      }
      function w(t) {
        var e = K,
          n = qt[t]
        return (
          n ||
            ((n = x(t, e)),
            ('none' !== n && n) ||
              ((Pt = (
                Pt || Z("<iframe frameborder='0' width='0' height='0'/>")
              ).appendTo(e.documentElement)),
              (e = Pt[0].contentDocument),
              e.write(),
              e.close(),
              (n = x(t, e)),
              Pt.detach()),
            (qt[t] = n)),
          n
        )
      }
      function T(t, e, n) {
        var r,
          i,
          o,
          s,
          a = t.style
        return (
          (n = n || $t(t)),
          n && (s = n.getPropertyValue(e) || n[e]),
          n &&
            ('' !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)),
            Mt.test(s) &&
              Ft.test(e) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? s + '' : s
        )
      }
      function E(t, e) {
        return {
          get: function () {
            return t()
              ? void delete this.get
              : (this.get = e).apply(this, arguments)
          },
        }
      }
      function _(t, e) {
        if (e in t) return e
        for (
          var n = e[0].toUpperCase() + e.slice(1), r = e, i = Xt.length;
          i--;

        )
          if ((e = Xt[i] + n) in t) return e
        return r
      }
      function C(t, e, n) {
        var r = Wt.exec(e)
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : e
      }
      function S(t, e, n, r, i) {
        for (
          var o = n === (r ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0,
            s = 0;
          o < 4;
          o += 2
        )
          'margin' === n && (s += Z.css(t, n + wt[o], !0, i)),
            r
              ? ('content' === n && (s -= Z.css(t, 'padding' + wt[o], !0, i)),
                'margin' !== n &&
                  (s -= Z.css(t, 'border' + wt[o] + 'Width', !0, i)))
              : ((s += Z.css(t, 'padding' + wt[o], !0, i)),
                'padding' !== n &&
                  (s += Z.css(t, 'border' + wt[o] + 'Width', !0, i)))
        return s
      }
      function k(t, e, n) {
        var r = !0,
          i = 'width' === e ? t.offsetWidth : t.offsetHeight,
          o = $t(t),
          s = 'border-box' === Z.css(t, 'boxSizing', !1, o)
        if (i <= 0 || null == i) {
          if (
            ((i = T(t, e, o)),
            (i < 0 || null == i) && (i = t.style[e]),
            Mt.test(i))
          )
            return i
          ;(r = s && (Q.boxSizingReliable() || i === t.style[e])),
            (i = parseFloat(i) || 0)
        }
        return i + S(t, e, n || (s ? 'border' : 'content'), r, o) + 'px'
      }
      function N(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++)
          (r = t[s]),
            r.style &&
              ((o[s] = vt.get(r, 'olddisplay')),
              (n = r.style.display),
              e
                ? (o[s] || 'none' !== n || (r.style.display = ''),
                  '' === r.style.display &&
                    Tt(r) &&
                    (o[s] = vt.access(r, 'olddisplay', w(r.nodeName))))
                : ((i = Tt(r)),
                  ('none' === n && i) ||
                    vt.set(r, 'olddisplay', i ? n : Z.css(r, 'display'))))
        for (s = 0; s < a; s++)
          (r = t[s]),
            r.style &&
              ((e && 'none' !== r.style.display && '' !== r.style.display) ||
                (r.style.display = e ? o[s] || '' : 'none'))
        return t
      }
      function A(t, e, n, r, i) {
        return new A.prototype.init(t, e, n, r, i)
      }
      function j() {
        return (
          setTimeout(function () {
            Gt = void 0
          }),
          (Gt = Z.now())
        )
      }
      function D(t, e) {
        var n,
          r = 0,
          i = { height: t }
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
          (n = wt[r]), (i['margin' + n] = i['padding' + n] = t)
        return e && (i.opacity = i.width = t), i
      }
      function H(t, e, n) {
        for (
          var r, i = (te[e] || []).concat(te['*']), o = 0, s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, e, t))) return r
      }
      function R(t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          c,
          l = this,
          h = {},
          f = t.style,
          p = t.nodeType && Tt(t),
          d = vt.get(t, 'fxshow')
        n.queue ||
          ((a = Z._queueHooks(t, 'fx')),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || u()
            })),
          a.unqueued++,
          l.always(function () {
            l.always(function () {
              a.unqueued--, Z.queue(t, 'fx').length || a.empty.fire()
            })
          })),
          1 === t.nodeType &&
            ('height' in e || 'width' in e) &&
            ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
            (c = Z.css(t, 'display')),
            'inline' ===
              ('none' === c ? vt.get(t, 'olddisplay') || w(t.nodeName) : c) &&
              'none' === Z.css(t, 'float') &&
              (f.display = 'inline-block')),
          n.overflow &&
            ((f.overflow = 'hidden'),
            l.always(function () {
              ;(f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2])
            }))
        for (r in e)
          if (((i = e[r]), Yt.exec(i))) {
            if (
              (delete e[r],
              (o = o || 'toggle' === i),
              i === (p ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !d || void 0 === d[r]) continue
              p = !0
            }
            h[r] = (d && d[r]) || Z.style(t, r)
          } else c = void 0
        if (Z.isEmptyObject(h))
          'inline' === ('none' === c ? w(t.nodeName) : c) && (f.display = c)
        else {
          d
            ? 'hidden' in d && (p = d.hidden)
            : (d = vt.access(t, 'fxshow', {})),
            o && (d.hidden = !p),
            p
              ? Z(t).show()
              : l.done(function () {
                  Z(t).hide()
                }),
            l.done(function () {
              var e
              vt.remove(t, 'fxshow')
              for (e in h) Z.style(t, e, h[e])
            })
          for (r in h)
            (s = H(p ? d[r] : 0, r, l)),
              r in d ||
                ((d[r] = s.start),
                p &&
                  ((s.end = s.start),
                  (s.start = 'width' === r || 'height' === r ? 1 : 0)))
        }
      }
      function O(t, e) {
        var n, r, i, o, s
        for (n in t)
          if (
            ((r = Z.camelCase(n)),
            (i = e[r]),
            (o = t[n]),
            Z.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
            n !== r && ((t[r] = o), delete t[n]),
            (s = Z.cssHooks[r]) && 'expand' in s)
          ) {
            ;(o = s.expand(o)), delete t[r]
            for (n in o) n in t || ((t[n] = o[n]), (e[n] = i))
          } else e[r] = i
      }
      function L(t, e, n) {
        var r,
          i,
          o = 0,
          s = Zt.length,
          a = Z.Deferred().always(function () {
            delete u.elem
          }),
          u = function () {
            if (i) return !1
            for (
              var e = Gt || j(),
                n = Math.max(0, c.startTime + c.duration - e),
                r = n / c.duration || 0,
                o = 1 - r,
                s = 0,
                u = c.tweens.length;
              s < u;
              s++
            )
              c.tweens[s].run(o)
            return (
              a.notifyWith(t, [c, o, n]),
              o < 1 && u ? n : (a.resolveWith(t, [c]), !1)
            )
          },
          c = a.promise({
            elem: t,
            props: Z.extend({}, e),
            opts: Z.extend(!0, { specialEasing: {} }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Gt || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var r = Z.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              )
              return c.tweens.push(r), r
            },
            stop: function (e) {
              var n = 0,
                r = e ? c.tweens.length : 0
              if (i) return this
              for (i = !0; n < r; n++) c.tweens[n].run(1)
              return (
                e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
              )
            },
          }),
          l = c.props
        for (O(l, c.opts.specialEasing); o < s; o++)
          if ((r = Zt[o].call(c, t, l, c.opts))) return r
        return (
          Z.map(l, H, c),
          Z.isFunction(c.opts.start) && c.opts.start.call(t, c),
          Z.fx.timer(Z.extend(u, { elem: t, anim: c, queue: c.opts.queue })),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always)
        )
      }
      function I(t) {
        return function (e, n) {
          'string' != typeof e && ((n = e), (e = '*'))
          var r,
            i = 0,
            o = e.toLowerCase().match(ft) || []
          if (Z.isFunction(n))
            for (; (r = o[i++]); )
              '+' === r[0]
                ? ((r = r.slice(1) || '*'), (t[r] = t[r] || []).unshift(n))
                : (t[r] = t[r] || []).push(n)
        }
      }
      function P(t, e, n, r) {
        function i(a) {
          var u
          return (
            (o[a] = !0),
            Z.each(t[a] || [], function (t, a) {
              var c = a(e, n, r)
              return 'string' != typeof c || s || o[c]
                ? s
                  ? !(u = c)
                  : void 0
                : (e.dataTypes.unshift(c), i(c), !1)
            }),
            u
          )
        }
        var o = {},
          s = t === ye
        return i(e.dataTypes[0]) || (!o['*'] && i('*'))
      }
      function q(t, e) {
        var n,
          r,
          i = Z.ajaxSettings.flatOptions || {}
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n])
        return r && Z.extend(!0, t, r), t
      }
      function F(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes; '*' === u[0]; )
          u.shift(),
            void 0 === r &&
              (r = t.mimeType || e.getResponseHeader('Content-Type'))
        if (r)
          for (i in a)
            if (a[i] && a[i].test(r)) {
              u.unshift(i)
              break
            }
        if (u[0] in n) o = u[0]
        else {
          for (i in n) {
            if (!u[0] || t.converters[i + ' ' + u[0]]) {
              o = i
              break
            }
            s || (s = i)
          }
          o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
      }
      function M(t, e, n, r) {
        var i,
          o,
          s,
          a,
          u,
          c = {},
          l = t.dataTypes.slice()
        if (l[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s]
        for (o = l.shift(); o; )
          if (
            (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            (u = o),
            (o = l.shift()))
          )
            if ('*' === o) o = u
            else if ('*' !== u && u !== o) {
              if (!(s = c[u + ' ' + o] || c['* ' + o]))
                for (i in c)
                  if (
                    ((a = i.split(' ')),
                    a[1] === o && (s = c[u + ' ' + a[0]] || c['* ' + a[0]]))
                  ) {
                    !0 === s
                      ? (s = c[i])
                      : !0 !== c[i] && ((o = a[0]), l.unshift(a[1]))
                    break
                  }
              if (!0 !== s)
                if (s && t.throws) e = s(e)
                else
                  try {
                    e = s(e)
                  } catch (t) {
                    return {
                      state: 'parsererror',
                      error: s ? t : 'No conversion from ' + u + ' to ' + o,
                    }
                  }
            }
        return { state: 'success', data: e }
      }
      function $(t, e, n, r) {
        var i
        if (Z.isArray(e))
          Z.each(e, function (e, i) {
            n || we.test(t)
              ? r(t, i)
              : $(t + '[' + ('object' == typeof i ? e : '') + ']', i, n, r)
          })
        else if (n || 'object' !== Z.type(e)) r(t, e)
        else for (i in e) $(t + '[' + i + ']', e[i], n, r)
      }
      function B(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
      }
      var W = [],
        U = W.slice,
        z = W.concat,
        V = W.push,
        X = W.indexOf,
        G = {},
        J = G.toString,
        Y = G.hasOwnProperty,
        Q = {},
        K = t.document,
        Z = function (t, e) {
          return new Z.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function (t, e) {
          return e.toUpperCase()
        }
      ;(Z.fn = Z.prototype =
        {
          jquery: '2.1.1',
          constructor: Z,
          selector: '',
          length: 0,
          toArray: function () {
            return U.call(this)
          },
          get: function (t) {
            return null != t
              ? t < 0
                ? this[t + this.length]
                : this[t]
              : U.call(this)
          },
          pushStack: function (t) {
            var e = Z.merge(this.constructor(), t)
            return (e.prevObject = this), (e.context = this.context), e
          },
          each: function (t, e) {
            return Z.each(this, t, e)
          },
          map: function (t) {
            return this.pushStack(
              Z.map(this, function (e, n) {
                return t.call(e, n, e)
              })
            )
          },
          slice: function () {
            return this.pushStack(U.apply(this, arguments))
          },
          first: function () {
            return this.eq(0)
          },
          last: function () {
            return this.eq(-1)
          },
          eq: function (t) {
            var e = this.length,
              n = +t + (t < 0 ? e : 0)
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
          },
          end: function () {
            return this.prevObject || this.constructor(null)
          },
          push: V,
          sort: W.sort,
          splice: W.splice,
        }),
        (Z.extend = Z.fn.extend =
          function () {
            var t,
              e,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              u = arguments.length,
              c = !1
            for (
              'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                'object' == typeof s || Z.isFunction(s) || (s = {}),
                a === u && ((s = this), a--);
              a < u;
              a++
            )
              if (null != (t = arguments[a]))
                for (e in t)
                  (n = s[e]),
                    (r = t[e]),
                    s !== r &&
                      (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r)))
                        ? (i
                            ? ((i = !1), (o = n && Z.isArray(n) ? n : []))
                            : (o = n && Z.isPlainObject(n) ? n : {}),
                          (s[e] = Z.extend(c, o, r)))
                        : void 0 !== r && (s[e] = r))
            return s
          }),
        Z.extend({
          expando: 'jQuery' + ('2.1.1' + Math.random()).replace(/\D/g, ''),
          isReady: !0,
          error: function (t) {
            throw new Error(t)
          },
          noop: function () {},
          isFunction: function (t) {
            return 'function' === Z.type(t)
          },
          isArray: Array.isArray,
          isWindow: function (t) {
            return null != t && t === t.window
          },
          isNumeric: function (t) {
            return !Z.isArray(t) && t - parseFloat(t) >= 0
          },
          isPlainObject: function (t) {
            return (
              'object' === Z.type(t) &&
              !t.nodeType &&
              !Z.isWindow(t) &&
              !(
                t.constructor &&
                !Y.call(t.constructor.prototype, 'isPrototypeOf')
              )
            )
          },
          isEmptyObject: function (t) {
            var e
            for (e in t) return !1
            return !0
          },
          type: function (t) {
            return null == t
              ? t + ''
              : 'object' == typeof t || 'function' == typeof t
              ? G[J.call(t)] || 'object'
              : typeof t
          },
          globalEval: function (t) {
            var e,
              n = eval
            ;(t = Z.trim(t)) &&
              (1 === t.indexOf('use strict')
                ? ((e = K.createElement('script')),
                  (e.text = t),
                  K.head.appendChild(e).parentNode.removeChild(e))
                : n(t))
          },
          camelCase: function (t) {
            return t.replace(et, 'ms-').replace(nt, rt)
          },
          nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
          },
          each: function (t, e, n) {
            var i = 0,
              o = t.length,
              s = r(t)
            if (n) {
              if (s) for (; i < o && !1 !== e.apply(t[i], n); i++);
              else for (i in t) if (!1 === e.apply(t[i], n)) break
            } else if (s) for (; i < o && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break
            return t
          },
          trim: function (t) {
            return null == t ? '' : (t + '').replace(tt, '')
          },
          makeArray: function (t, e) {
            var n = e || []
            return (
              null != t &&
                (r(Object(t))
                  ? Z.merge(n, 'string' == typeof t ? [t] : t)
                  : V.call(n, t)),
              n
            )
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : X.call(e, t, n)
          },
          merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++)
              t[i++] = e[r]
            return (t.length = i), t
          },
          grep: function (t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
              !e(t[i], i) !== s && r.push(t[i])
            return r
          },
          map: function (t, e, n) {
            var i,
              o = 0,
              s = t.length,
              a = r(t),
              u = []
            if (a) for (; o < s; o++) null != (i = e(t[o], o, n)) && u.push(i)
            else for (o in t) null != (i = e(t[o], o, n)) && u.push(i)
            return z.apply([], u)
          },
          guid: 1,
          proxy: function (t, e) {
            var n, r, i
            if (
              ('string' == typeof e && ((n = t[e]), (e = t), (t = n)),
              Z.isFunction(t))
            )
              return (
                (r = U.call(arguments, 2)),
                (i = function () {
                  return t.apply(e || this, r.concat(U.call(arguments)))
                }),
                (i.guid = t.guid = t.guid || Z.guid++),
                i
              )
          },
          now: Date.now,
          support: Q,
        }),
        Z.each(
          'Boolean Number String Function Array Date RegExp Object Error'.split(
            ' '
          ),
          function (t, e) {
            G['[object ' + e + ']'] = e.toLowerCase()
          }
        )
      var it = (function (t) {
        function e(t, e, n, r) {
          var i, o, s, a, c, h, f, p, d, g
          if (
            ((e ? e.ownerDocument || e : q) !== j && A(e),
            (e = e || j),
            (n = n || []),
            !t || 'string' != typeof t)
          )
            return n
          if (1 !== (a = e.nodeType) && 9 !== a) return []
          if (H && !r) {
            if ((i = vt.exec(t)))
              if ((s = i[1])) {
                if (9 === a) {
                  if (!(o = e.getElementById(s)) || !o.parentNode) return n
                  if (o.id === s) return n.push(o), n
                } else if (
                  e.ownerDocument &&
                  (o = e.ownerDocument.getElementById(s)) &&
                  I(e, o) &&
                  o.id === s
                )
                  return n.push(o), n
              } else {
                if (i[2]) return Q.apply(n, e.getElementsByTagName(t)), n
                if (
                  (s = i[3]) &&
                  b.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return Q.apply(n, e.getElementsByClassName(s)), n
              }
            if (b.qsa && (!R || !R.test(t))) {
              if (
                ((p = f = P),
                (d = e),
                (g = 9 === a && t),
                1 === a && 'object' !== e.nodeName.toLowerCase())
              ) {
                for (
                  h = E(t),
                    (f = e.getAttribute('id'))
                      ? (p = f.replace(yt, '\\$&'))
                      : e.setAttribute('id', p),
                    p = "[id='" + p + "'] ",
                    c = h.length;
                  c--;

                )
                  h[c] = p + l(h[c])
                ;(d = (mt.test(t) && u(e.parentNode)) || e), (g = h.join(','))
              }
              if (g)
                try {
                  return Q.apply(n, d.querySelectorAll(g)), n
                } catch (t) {
                } finally {
                  f || e.removeAttribute('id')
                }
            }
          }
          return C(t.replace(st, '$1'), e, n, r)
        }
        function n() {
          function t(n, r) {
            return (
              e.push(n + ' ') > x.cacheLength && delete t[e.shift()],
              (t[n + ' '] = r)
            )
          }
          var e = []
          return t
        }
        function r(t) {
          return (t[P] = !0), t
        }
        function i(t) {
          var e = j.createElement('div')
          try {
            return !!t(e)
          } catch (t) {
            return !1
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null)
          }
        }
        function o(t, e) {
          for (var n = t.split('|'), r = t.length; r--; ) x.attrHandle[n[r]] = e
        }
        function s(t, e) {
          var n = e && t,
            r =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              (~e.sourceIndex || V) - (~t.sourceIndex || V)
          if (r) return r
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1
          return t ? 1 : -1
        }
        function a(t) {
          return r(function (e) {
            return (
              (e = +e),
              r(function (n, r) {
                for (var i, o = t([], n.length, e), s = o.length; s--; )
                  n[(i = o[s])] && (n[i] = !(r[i] = n[i]))
              })
            )
          })
        }
        function u(t) {
          return t && typeof t.getElementsByTagName !== z && t
        }
        function c() {}
        function l(t) {
          for (var e = 0, n = t.length, r = ''; e < n; e++) r += t[e].value
          return r
        }
        function h(t, e, n) {
          var r = e.dir,
            i = n && 'parentNode' === r,
            o = M++
          return e.first
            ? function (e, n, o) {
                for (; (e = e[r]); )
                  if (1 === e.nodeType || i) return t(e, n, o)
              }
            : function (e, n, s) {
                var a,
                  u,
                  c = [F, o]
                if (s) {
                  for (; (e = e[r]); )
                    if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                } else
                  for (; (e = e[r]); )
                    if (1 === e.nodeType || i) {
                      if (
                        ((u = e[P] || (e[P] = {})),
                        (a = u[r]) && a[0] === F && a[1] === o)
                      )
                        return (c[2] = a[2])
                      if (((u[r] = c), (c[2] = t(e, n, s)))) return !0
                    }
              }
        }
        function f(t) {
          return t.length > 1
            ? function (e, n, r) {
                for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1
                return !0
              }
            : t[0]
        }
        function p(t, n, r) {
          for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r)
          return r
        }
        function d(t, e, n, r, i) {
          for (var o, s = [], a = 0, u = t.length, c = null != e; a < u; a++)
            (o = t[a]) && ((n && !n(o, r, i)) || (s.push(o), c && e.push(a)))
          return s
        }
        function g(t, e, n, i, o, s) {
          return (
            i && !i[P] && (i = g(i)),
            o && !o[P] && (o = g(o, s)),
            r(function (r, s, a, u) {
              var c,
                l,
                h,
                f = [],
                g = [],
                v = s.length,
                m = r || p(e || '*', a.nodeType ? [a] : a, []),
                y = !t || (!r && e) ? m : d(m, f, t, a, u),
                b = n ? (o || (r ? t : v || i) ? [] : s) : y
              if ((n && n(y, b, a, u), i))
                for (c = d(b, g), i(c, [], a, u), l = c.length; l--; )
                  (h = c[l]) && (b[g[l]] = !(y[g[l]] = h))
              if (r) {
                if (o || t) {
                  if (o) {
                    for (c = [], l = b.length; l--; )
                      (h = b[l]) && c.push((y[l] = h))
                    o(null, (b = []), c, u)
                  }
                  for (l = b.length; l--; )
                    (h = b[l]) &&
                      (c = o ? Z.call(r, h) : f[l]) > -1 &&
                      (r[c] = !(s[c] = h))
                }
              } else (b = d(b === s ? b.splice(v, b.length) : b)), o ? o(null, s, b, u) : Q.apply(s, b)
            })
          )
        }
        function v(t) {
          for (
            var e,
              n,
              r,
              i = t.length,
              o = x.relative[t[0].type],
              s = o || x.relative[' '],
              a = o ? 1 : 0,
              u = h(
                function (t) {
                  return t === e
                },
                s,
                !0
              ),
              c = h(
                function (t) {
                  return Z.call(e, t) > -1
                },
                s,
                !0
              ),
              p = [
                function (t, n, r) {
                  return (
                    (!o && (r || n !== S)) ||
                    ((e = n).nodeType ? u(t, n, r) : c(t, n, r))
                  )
                },
              ];
            a < i;
            a++
          )
            if ((n = x.relative[t[a].type])) p = [h(f(p), n)]
            else {
              if (((n = x.filter[t[a].type].apply(null, t[a].matches)), n[P])) {
                for (r = ++a; r < i && !x.relative[t[r].type]; r++);
                return g(
                  a > 1 && f(p),
                  a > 1 &&
                    l(
                      t
                        .slice(0, a - 1)
                        .concat({ value: ' ' === t[a - 2].type ? '*' : '' })
                    ).replace(st, '$1'),
                  n,
                  a < r && v(t.slice(a, r)),
                  r < i && v((t = t.slice(r))),
                  r < i && l(t)
                )
              }
              p.push(n)
            }
          return f(p)
        }
        function m(t, n) {
          var i = n.length > 0,
            o = t.length > 0,
            s = function (r, s, a, u, c) {
              var l,
                h,
                f,
                p = 0,
                g = '0',
                v = r && [],
                m = [],
                y = S,
                b = r || (o && x.find.TAG('*', c)),
                w = (F += null == y ? 1 : Math.random() || 0.1),
                T = b.length
              for (
                c && (S = s !== j && s);
                g !== T && null != (l = b[g]);
                g++
              ) {
                if (o && l) {
                  for (h = 0; (f = t[h++]); )
                    if (f(l, s, a)) {
                      u.push(l)
                      break
                    }
                  c && (F = w)
                }
                i && ((l = !f && l) && p--, r && v.push(l))
              }
              if (((p += g), i && g !== p)) {
                for (h = 0; (f = n[h++]); ) f(v, m, s, a)
                if (r) {
                  if (p > 0) for (; g--; ) v[g] || m[g] || (m[g] = J.call(u))
                  m = d(m)
                }
                Q.apply(u, m),
                  c && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
              }
              return c && ((F = w), (S = y)), v
            }
          return i ? r(s) : s
        }
        var y,
          b,
          x,
          w,
          T,
          E,
          _,
          C,
          S,
          k,
          N,
          A,
          j,
          D,
          H,
          R,
          O,
          L,
          I,
          P = 'sizzle' + -new Date(),
          q = t.document,
          F = 0,
          M = 0,
          $ = n(),
          B = n(),
          W = n(),
          U = function (t, e) {
            return t === e && (N = !0), 0
          },
          z = 'undefined',
          V = 1 << 31,
          X = {}.hasOwnProperty,
          G = [],
          J = G.pop,
          Y = G.push,
          Q = G.push,
          K = G.slice,
          Z =
            G.indexOf ||
            function (t) {
              for (var e = 0, n = this.length; e < n; e++)
                if (this[e] === t) return e
              return -1
            },
          tt =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          et = '[\\x20\\t\\r\\n\\f]',
          nt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
          rt = nt.replace('w', 'w#'),
          it =
            '\\[' +
            et +
            '*(' +
            nt +
            ')(?:' +
            et +
            '*([*^$|!~]?=)' +
            et +
            '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
            rt +
            '))|)' +
            et +
            '*\\]',
          ot =
            ':(' +
            nt +
            ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
            it +
            ')*)|.*)\\)|)',
          st = new RegExp(
            '^' + et + '+|((?:^|[^\\\\])(?:\\\\.)*)' + et + '+$',
            'g'
          ),
          at = new RegExp('^' + et + '*,' + et + '*'),
          ut = new RegExp('^' + et + '*([>+~]|' + et + ')' + et + '*'),
          ct = new RegExp('=' + et + '*([^\\]\'"]*?)' + et + '*\\]', 'g'),
          lt = new RegExp(ot),
          ht = new RegExp('^' + rt + '$'),
          ft = {
            ID: new RegExp('^#(' + nt + ')'),
            CLASS: new RegExp('^\\.(' + nt + ')'),
            TAG: new RegExp('^(' + nt.replace('w', 'w*') + ')'),
            ATTR: new RegExp('^' + it),
            PSEUDO: new RegExp('^' + ot),
            CHILD: new RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                et +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                et +
                '*(?:([+-]|)' +
                et +
                '*(\\d+)|))' +
                et +
                '*\\)|)',
              'i'
            ),
            bool: new RegExp('^(?:' + tt + ')$', 'i'),
            needsContext: new RegExp(
              '^' +
                et +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                et +
                '*((?:-\\d)?\\d*)' +
                et +
                '*\\)|)(?=[^-]|$)',
              'i'
            ),
          },
          pt = /^(?:input|select|textarea|button)$/i,
          dt = /^h\d$/i,
          gt = /^[^{]+\{\s*\[native \w/,
          vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          mt = /[+~]/,
          yt = /'|\\/g,
          bt = new RegExp(
            '\\\\([\\da-f]{1,6}' + et + '?|(' + et + ')|.)',
            'ig'
          ),
          xt = function (t, e, n) {
            var r = '0x' + e - 65536
            return r !== r || n
              ? e
              : r < 0
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
          }
        try {
          Q.apply((G = K.call(q.childNodes)), q.childNodes),
            G[q.childNodes.length].nodeType
        } catch (t) {
          Q = {
            apply: G.length
              ? function (t, e) {
                  Y.apply(t, K.call(e))
                }
              : function (t, e) {
                  for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                  t.length = n - 1
                },
          }
        }
        ;(b = e.support = {}),
          (T = e.isXML =
            function (t) {
              var e = t && (t.ownerDocument || t).documentElement
              return !!e && 'HTML' !== e.nodeName
            }),
          (A = e.setDocument =
            function (t) {
              var e,
                n = t ? t.ownerDocument || t : q,
                r = n.defaultView
              return n !== j && 9 === n.nodeType && n.documentElement
                ? ((j = n),
                  (D = n.documentElement),
                  (H = !T(n)),
                  r &&
                    r !== r.top &&
                    (r.addEventListener
                      ? r.addEventListener(
                          'unload',
                          function () {
                            A()
                          },
                          !1
                        )
                      : r.attachEvent &&
                        r.attachEvent('onunload', function () {
                          A()
                        })),
                  (b.attributes = i(function (t) {
                    return (t.className = 'i'), !t.getAttribute('className')
                  })),
                  (b.getElementsByTagName = i(function (t) {
                    return (
                      t.appendChild(n.createComment('')),
                      !t.getElementsByTagName('*').length
                    )
                  })),
                  (b.getElementsByClassName =
                    gt.test(n.getElementsByClassName) &&
                    i(function (t) {
                      return (
                        (t.innerHTML =
                          "<div class='a'></div><div class='a i'></div>"),
                        (t.firstChild.className = 'i'),
                        2 === t.getElementsByClassName('i').length
                      )
                    })),
                  (b.getById = i(function (t) {
                    return (
                      (D.appendChild(t).id = P),
                      !n.getElementsByName || !n.getElementsByName(P).length
                    )
                  })),
                  b.getById
                    ? ((x.find.ID = function (t, e) {
                        if (typeof e.getElementById !== z && H) {
                          var n = e.getElementById(t)
                          return n && n.parentNode ? [n] : []
                        }
                      }),
                      (x.filter.ID = function (t) {
                        var e = t.replace(bt, xt)
                        return function (t) {
                          return t.getAttribute('id') === e
                        }
                      }))
                    : (delete x.find.ID,
                      (x.filter.ID = function (t) {
                        var e = t.replace(bt, xt)
                        return function (t) {
                          var n =
                            typeof t.getAttributeNode !== z &&
                            t.getAttributeNode('id')
                          return n && n.value === e
                        }
                      })),
                  (x.find.TAG = b.getElementsByTagName
                    ? function (t, e) {
                        if (typeof e.getElementsByTagName !== z)
                          return e.getElementsByTagName(t)
                      }
                    : function (t, e) {
                        var n,
                          r = [],
                          i = 0,
                          o = e.getElementsByTagName(t)
                        if ('*' === t) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n)
                          return r
                        }
                        return o
                      }),
                  (x.find.CLASS =
                    b.getElementsByClassName &&
                    function (t, e) {
                      if (typeof e.getElementsByClassName !== z && H)
                        return e.getElementsByClassName(t)
                    }),
                  (O = []),
                  (R = []),
                  (b.qsa = gt.test(n.querySelectorAll)) &&
                    (i(function (t) {
                      ;(t.innerHTML =
                        "<select msallowclip=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowclip^='']").length &&
                          R.push('[*^$]=' + et + '*(?:\'\'|"")'),
                        t.querySelectorAll('[selected]').length ||
                          R.push('\\[' + et + '*(?:value|' + tt + ')'),
                        t.querySelectorAll(':checked').length ||
                          R.push(':checked')
                    }),
                    i(function (t) {
                      var e = n.createElement('input')
                      e.setAttribute('type', 'hidden'),
                        t.appendChild(e).setAttribute('name', 'D'),
                        t.querySelectorAll('[name=d]').length &&
                          R.push('name' + et + '*[*^$|!~]?='),
                        t.querySelectorAll(':enabled').length ||
                          R.push(':enabled', ':disabled'),
                        t.querySelectorAll('*,:x'),
                        R.push(',.*:')
                    })),
                  (b.matchesSelector = gt.test(
                    (L =
                      D.matches ||
                      D.webkitMatchesSelector ||
                      D.mozMatchesSelector ||
                      D.oMatchesSelector ||
                      D.msMatchesSelector)
                  )) &&
                    i(function (t) {
                      ;(b.disconnectedMatch = L.call(t, 'div')),
                        L.call(t, "[s!='']:x"),
                        O.push('!=', ot)
                    }),
                  (R = R.length && new RegExp(R.join('|'))),
                  (O = O.length && new RegExp(O.join('|'))),
                  (e = gt.test(D.compareDocumentPosition)),
                  (I =
                    e || gt.test(D.contains)
                      ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode
                          return (
                            t === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(r))
                            )
                          )
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0
                          return !1
                        }),
                  (U = e
                    ? function (t, e) {
                        if (t === e) return (N = !0), 0
                        var r =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition
                        return (
                          r ||
                          ((r =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1),
                          1 & r ||
                          (!b.sortDetached &&
                            e.compareDocumentPosition(t) === r)
                            ? t === n || (t.ownerDocument === q && I(q, t))
                              ? -1
                              : e === n || (e.ownerDocument === q && I(q, e))
                              ? 1
                              : k
                              ? Z.call(k, t) - Z.call(k, e)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        )
                      }
                    : function (t, e) {
                        if (t === e) return (N = !0), 0
                        var r,
                          i = 0,
                          o = t.parentNode,
                          a = e.parentNode,
                          u = [t],
                          c = [e]
                        if (!o || !a)
                          return t === n
                            ? -1
                            : e === n
                            ? 1
                            : o
                            ? -1
                            : a
                            ? 1
                            : k
                            ? Z.call(k, t) - Z.call(k, e)
                            : 0
                        if (o === a) return s(t, e)
                        for (r = t; (r = r.parentNode); ) u.unshift(r)
                        for (r = e; (r = r.parentNode); ) c.unshift(r)
                        for (; u[i] === c[i]; ) i++
                        return i
                          ? s(u[i], c[i])
                          : u[i] === q
                          ? -1
                          : c[i] === q
                          ? 1
                          : 0
                      }),
                  n)
                : j
            }),
          (e.matches = function (t, n) {
            return e(t, null, null, n)
          }),
          (e.matchesSelector = function (t, n) {
            if (
              ((t.ownerDocument || t) !== j && A(t),
              (n = n.replace(ct, "='$1']")),
              b.matchesSelector &&
                H &&
                (!O || !O.test(n)) &&
                (!R || !R.test(n)))
            )
              try {
                var r = L.call(t, n)
                if (
                  r ||
                  b.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return r
              } catch (t) {}
            return e(n, j, null, [t]).length > 0
          }),
          (e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && A(t), I(t, e)
          }),
          (e.attr = function (t, e) {
            ;(t.ownerDocument || t) !== j && A(t)
            var n = x.attrHandle[e.toLowerCase()],
              r =
                n && X.call(x.attrHandle, e.toLowerCase())
                  ? n(t, e, !H)
                  : void 0
            return void 0 !== r
              ? r
              : b.attributes || !H
              ? t.getAttribute(e)
              : (r = t.getAttributeNode(e)) && r.specified
              ? r.value
              : null
          }),
          (e.error = function (t) {
            throw new Error('Syntax error, unrecognized expression: ' + t)
          }),
          (e.uniqueSort = function (t) {
            var e,
              n = [],
              r = 0,
              i = 0
            if (
              ((N = !b.detectDuplicates),
              (k = !b.sortStable && t.slice(0)),
              t.sort(U),
              N)
            ) {
              for (; (e = t[i++]); ) e === t[i] && (r = n.push(i))
              for (; r--; ) t.splice(n[r], 1)
            }
            return (k = null), t
          }),
          (w = e.getText =
            function (t) {
              var e,
                n = '',
                r = 0,
                i = t.nodeType
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof t.textContent) return t.textContent
                  for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                } else if (3 === i || 4 === i) return t.nodeValue
              } else for (; (e = t[r++]); ) n += w(e)
              return n
            }),
          (x = e.selectors =
            {
              cacheLength: 50,
              createPseudo: r,
              match: ft,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(bt, xt)),
                    (t[3] = (t[3] || t[4] || t[5] || '').replace(bt, xt)),
                    '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
                    t.slice(0, 4)
                  )
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    'nth' === t[1].slice(0, 3)
                      ? (t[3] || e.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ('even' === t[3] || 'odd' === t[3]))),
                        (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
                      : t[3] && e.error(t[0]),
                    t
                  )
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2]
                  return ft.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || '')
                        : n &&
                          lt.test(n) &&
                          (e = E(n, !0)) &&
                          (e = n.indexOf(')', n.length - e) - n.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3))
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(bt, xt).toLowerCase()
                  return '*' === t
                    ? function () {
                        return !0
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                      }
                },
                CLASS: function (t) {
                  var e = $[t + ' ']
                  return (
                    e ||
                    ((e = new RegExp(
                      '(^|' + et + ')' + t + '(' + et + '|$)'
                    )) &&
                      $(t, function (t) {
                        return e.test(
                          ('string' == typeof t.className && t.className) ||
                            (typeof t.getAttribute !== z &&
                              t.getAttribute('class')) ||
                            ''
                        )
                      }))
                  )
                },
                ATTR: function (t, n, r) {
                  return function (i) {
                    var o = e.attr(i, t)
                    return null == o
                      ? '!=' === n
                      : !n ||
                          ((o += ''),
                          '=' === n
                            ? o === r
                            : '!=' === n
                            ? o !== r
                            : '^=' === n
                            ? r && 0 === o.indexOf(r)
                            : '*=' === n
                            ? r && o.indexOf(r) > -1
                            : '$=' === n
                            ? r && o.slice(-r.length) === r
                            : '~=' === n
                            ? (' ' + o + ' ').indexOf(r) > -1
                            : '|=' === n &&
                              (o === r || o.slice(0, r.length + 1) === r + '-'))
                  }
                },
                CHILD: function (t, e, n, r, i) {
                  var o = 'nth' !== t.slice(0, 3),
                    s = 'last' !== t.slice(-4),
                    a = 'of-type' === e
                  return 1 === r && 0 === i
                    ? function (t) {
                        return !!t.parentNode
                      }
                    : function (e, n, u) {
                        var c,
                          l,
                          h,
                          f,
                          p,
                          d,
                          g = o !== s ? 'nextSibling' : 'previousSibling',
                          v = e.parentNode,
                          m = a && e.nodeName.toLowerCase(),
                          y = !u && !a
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (h = e; (h = h[g]); )
                                if (
                                  a
                                    ? h.nodeName.toLowerCase() === m
                                    : 1 === h.nodeType
                                )
                                  return !1
                              d = g = 'only' === t && !d && 'nextSibling'
                            }
                            return !0
                          }
                          if (
                            ((d = [s ? v.firstChild : v.lastChild]), s && y)
                          ) {
                            for (
                              l = v[P] || (v[P] = {}),
                                c = l[t] || [],
                                p = c[0] === F && c[1],
                                f = c[0] === F && c[2],
                                h = p && v.childNodes[p];
                              (h =
                                (++p && h && h[g]) || (f = p = 0) || d.pop());

                            )
                              if (1 === h.nodeType && ++f && h === e) {
                                l[t] = [F, p, f]
                                break
                              }
                          } else if (
                            y &&
                            (c = (e[P] || (e[P] = {}))[t]) &&
                            c[0] === F
                          )
                            f = c[1]
                          else
                            for (
                              ;
                              (h =
                                (++p && h && h[g]) || (f = p = 0) || d.pop()) &&
                              ((a
                                ? h.nodeName.toLowerCase() !== m
                                : 1 !== h.nodeType) ||
                                !++f ||
                                (y && ((h[P] || (h[P] = {}))[t] = [F, f]),
                                h !== e));

                            );
                          return (f -= i) === r || (f % r == 0 && f / r >= 0)
                        }
                      }
                },
                PSEUDO: function (t, n) {
                  var i,
                    o =
                      x.pseudos[t] ||
                      x.setFilters[t.toLowerCase()] ||
                      e.error('unsupported pseudo: ' + t)
                  return o[P]
                    ? o(n)
                    : o.length > 1
                    ? ((i = [t, t, '', n]),
                      x.setFilters.hasOwnProperty(t.toLowerCase())
                        ? r(function (t, e) {
                            for (var r, i = o(t, n), s = i.length; s--; )
                              (r = Z.call(t, i[s])), (t[r] = !(e[r] = i[s]))
                          })
                        : function (t) {
                            return o(t, 0, i)
                          })
                    : o
                },
              },
              pseudos: {
                not: r(function (t) {
                  var e = [],
                    n = [],
                    i = _(t.replace(st, '$1'))
                  return i[P]
                    ? r(function (t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--; )
                          (o = s[a]) && (t[a] = !(e[a] = o))
                      })
                    : function (t, r, o) {
                        return (e[0] = t), i(e, null, o, n), !n.pop()
                      }
                }),
                has: r(function (t) {
                  return function (n) {
                    return e(t, n).length > 0
                  }
                }),
                contains: r(function (t) {
                  return function (e) {
                    return (
                      (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    )
                  }
                }),
                lang: r(function (t) {
                  return (
                    ht.test(t || '') || e.error('unsupported lang: ' + t),
                    (t = t.replace(bt, xt).toLowerCase()),
                    function (e) {
                      var n
                      do {
                        if (
                          (n = H
                            ? e.lang
                            : e.getAttribute('xml:lang') ||
                              e.getAttribute('lang'))
                        )
                          return (
                            (n = n.toLowerCase()) === t ||
                            0 === n.indexOf(t + '-')
                          )
                      } while ((e = e.parentNode) && 1 === e.nodeType)
                      return !1
                    }
                  )
                }),
                target: function (e) {
                  var n = t.location && t.location.hash
                  return n && n.slice(1) === e.id
                },
                root: function (t) {
                  return t === D
                },
                focus: function (t) {
                  return (
                    t === j.activeElement &&
                    (!j.hasFocus || j.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  )
                },
                enabled: function (t) {
                  return !1 === t.disabled
                },
                disabled: function (t) {
                  return !0 === t.disabled
                },
                checked: function (t) {
                  var e = t.nodeName.toLowerCase()
                  return (
                    ('input' === e && !!t.checked) ||
                    ('option' === e && !!t.selected)
                  )
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  )
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1
                  return !0
                },
                parent: function (t) {
                  return !x.pseudos.empty(t)
                },
                header: function (t) {
                  return dt.test(t.nodeName)
                },
                input: function (t) {
                  return pt.test(t.nodeName)
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase()
                  return (
                    ('input' === e && 'button' === t.type) || 'button' === e
                  )
                },
                text: function (t) {
                  var e
                  return (
                    'input' === t.nodeName.toLowerCase() &&
                    'text' === t.type &&
                    (null == (e = t.getAttribute('type')) ||
                      'text' === e.toLowerCase())
                  )
                },
                first: a(function () {
                  return [0]
                }),
                last: a(function (t, e) {
                  return [e - 1]
                }),
                eq: a(function (t, e, n) {
                  return [n < 0 ? n + e : n]
                }),
                even: a(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n)
                  return t
                }),
                odd: a(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n)
                  return t
                }),
                lt: a(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n; --r >= 0; ) t.push(r)
                  return t
                }),
                gt: a(function (t, e, n) {
                  for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r)
                  return t
                }),
              },
            }),
          (x.pseudos.nth = x.pseudos.eq)
        for (y in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          x.pseudos[y] = (function (t) {
            return function (e) {
              return 'input' === e.nodeName.toLowerCase() && e.type === t
            }
          })(y)
        for (y in { submit: !0, reset: !0 })
          x.pseudos[y] = (function (t) {
            return function (e) {
              var n = e.nodeName.toLowerCase()
              return ('input' === n || 'button' === n) && e.type === t
            }
          })(y)
        return (
          (c.prototype = x.filters = x.pseudos),
          (x.setFilters = new c()),
          (E = e.tokenize =
            function (t, n) {
              var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l = B[t + ' ']
              if (l) return n ? 0 : l.slice(0)
              for (a = t, u = [], c = x.preFilter; a; ) {
                ;(r && !(i = at.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                  (r = !1),
                  (i = ut.exec(a)) &&
                    ((r = i.shift()),
                    o.push({ value: r, type: i[0].replace(st, ' ') }),
                    (a = a.slice(r.length)))
                for (s in x.filter)
                  !(i = ft[s].exec(a)) ||
                    (c[s] && !(i = c[s](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: s, matches: i }),
                    (a = a.slice(r.length)))
                if (!r) break
              }
              return n ? a.length : a ? e.error(t) : B(t, u).slice(0)
            }),
          (_ = e.compile =
            function (t, e) {
              var n,
                r = [],
                i = [],
                o = W[t + ' ']
              if (!o) {
                for (e || (e = E(t)), n = e.length; n--; )
                  (o = v(e[n])), o[P] ? r.push(o) : i.push(o)
                ;(o = W(t, m(i, r))), (o.selector = t)
              }
              return o
            }),
          (C = e.select =
            function (t, e, n, r) {
              var i,
                o,
                s,
                a,
                c,
                h = 'function' == typeof t && t,
                f = !r && E((t = h.selector || t))
              if (((n = n || []), 1 === f.length)) {
                if (
                  ((o = f[0] = f[0].slice(0)),
                  o.length > 2 &&
                    'ID' === (s = o[0]).type &&
                    b.getById &&
                    9 === e.nodeType &&
                    H &&
                    x.relative[o[1].type])
                ) {
                  if (
                    !(e = (x.find.ID(s.matches[0].replace(bt, xt), e) || [])[0])
                  )
                    return n
                  h && (e = e.parentNode), (t = t.slice(o.shift().value.length))
                }
                for (
                  i = ft.needsContext.test(t) ? 0 : o.length;
                  i-- && ((s = o[i]), !x.relative[(a = s.type)]);

                )
                  if (
                    (c = x.find[a]) &&
                    (r = c(
                      s.matches[0].replace(bt, xt),
                      (mt.test(o[0].type) && u(e.parentNode)) || e
                    ))
                  ) {
                    if ((o.splice(i, 1), !(t = r.length && l(o))))
                      return Q.apply(n, r), n
                    break
                  }
              }
              return (
                (h || _(t, f))(
                  r,
                  e,
                  !H,
                  n,
                  (mt.test(t) && u(e.parentNode)) || e
                ),
                n
              )
            }),
          (b.sortStable = P.split('').sort(U).join('') === P),
          (b.detectDuplicates = !!N),
          A(),
          (b.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement('div'))
          })),
          i(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              '#' === t.firstChild.getAttribute('href')
            )
          }) ||
            o('type|href|height|width', function (t, e, n) {
              if (!n)
                return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2)
            }),
          (b.attributes &&
            i(function (t) {
              return (
                (t.innerHTML = '<input/>'),
                t.firstChild.setAttribute('value', ''),
                '' === t.firstChild.getAttribute('value')
              )
            })) ||
            o('value', function (t, e, n) {
              if (!n && 'input' === t.nodeName.toLowerCase())
                return t.defaultValue
            }),
          i(function (t) {
            return null == t.getAttribute('disabled')
          }) ||
            o(tt, function (t, e, n) {
              var r
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (r = t.getAttributeNode(e)) && r.specified
                  ? r.value
                  : null
            }),
          e
        )
      })(t)
      ;(Z.find = it),
        (Z.expr = it.selectors),
        (Z.expr[':'] = Z.expr.pseudos),
        (Z.unique = it.uniqueSort),
        (Z.text = it.getText),
        (Z.isXMLDoc = it.isXML),
        (Z.contains = it.contains)
      var ot = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/
      ;(Z.filter = function (t, e, n) {
        var r = e[0]
        return (
          n && (t = ':not(' + t + ')'),
          1 === e.length && 1 === r.nodeType
            ? Z.find.matchesSelector(r, t)
              ? [r]
              : []
            : Z.find.matches(
                t,
                Z.grep(e, function (t) {
                  return 1 === t.nodeType
                })
              )
        )
      }),
        Z.fn.extend({
          find: function (t) {
            var e,
              n = this.length,
              r = [],
              i = this
            if ('string' != typeof t)
              return this.pushStack(
                Z(t).filter(function () {
                  for (e = 0; e < n; e++) if (Z.contains(i[e], this)) return !0
                })
              )
            for (e = 0; e < n; e++) Z.find(t, i[e], r)
            return (
              (r = this.pushStack(n > 1 ? Z.unique(r) : r)),
              (r.selector = this.selector ? this.selector + ' ' + t : t),
              r
            )
          },
          filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
          },
          not: function (t) {
            return this.pushStack(i(this, t || [], !0))
          },
          is: function (t) {
            return !!i(
              this,
              'string' == typeof t && ot.test(t) ? Z(t) : t || [],
              !1
            ).length
          },
        })
      var ut,
        ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
      ;((Z.fn.init = function (t, e) {
        var n, r
        if (!t) return this
        if ('string' == typeof t) {
          if (
            !(n =
              '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : ct.exec(t)) ||
            (!n[1] && e)
          )
            return !e || e.jquery
              ? (e || ut).find(t)
              : this.constructor(e).find(t)
          if (n[1]) {
            if (
              ((e = e instanceof Z ? e[0] : e),
              Z.merge(
                this,
                Z.parseHTML(
                  n[1],
                  e && e.nodeType ? e.ownerDocument || e : K,
                  !0
                )
              ),
              st.test(n[1]) && Z.isPlainObject(e))
            )
              for (n in e)
                Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n])
            return this
          }
          return (
            (r = K.getElementById(n[2])),
            r && r.parentNode && ((this.length = 1), (this[0] = r)),
            (this.context = K),
            (this.selector = t),
            this
          )
        }
        return t.nodeType
          ? ((this.context = this[0] = t), (this.length = 1), this)
          : Z.isFunction(t)
          ? void 0 !== ut.ready
            ? ut.ready(t)
            : t(Z)
          : (void 0 !== t.selector &&
              ((this.selector = t.selector), (this.context = t.context)),
            Z.makeArray(t, this))
      }).prototype = Z.fn),
        (ut = Z(K))
      var lt = /^(?:parents|prev(?:Until|All))/,
        ht = { children: !0, contents: !0, next: !0, prev: !0 }
      Z.extend({
        dir: function (t, e, n) {
          for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (i && Z(t).is(n)) break
              r.push(t)
            }
          return r
        },
        sibling: function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t)
          return n
        },
      }),
        Z.fn.extend({
          has: function (t) {
            var e = Z(t, this),
              n = e.length
            return this.filter(function () {
              for (var t = 0; t < n; t++) if (Z.contains(this, e[t])) return !0
            })
          },
          closest: function (t, e) {
            for (
              var n,
                r = 0,
                i = this.length,
                o = [],
                s =
                  ot.test(t) || 'string' != typeof t
                    ? Z(t, e || this.context)
                    : 0;
              r < i;
              r++
            )
              for (n = this[r]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && Z.find.matchesSelector(n, t))
                ) {
                  o.push(n)
                  break
                }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
          },
          index: function (t) {
            return t
              ? 'string' == typeof t
                ? X.call(Z(t), this[0])
                : X.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1
          },
          add: function (t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t)
            )
          },
        }),
        Z.each(
          {
            parent: function (t) {
              var e = t.parentNode
              return e && 11 !== e.nodeType ? e : null
            },
            parents: function (t) {
              return Z.dir(t, 'parentNode')
            },
            parentsUntil: function (t, e, n) {
              return Z.dir(t, 'parentNode', n)
            },
            next: function (t) {
              return o(t, 'nextSibling')
            },
            prev: function (t) {
              return o(t, 'previousSibling')
            },
            nextAll: function (t) {
              return Z.dir(t, 'nextSibling')
            },
            prevAll: function (t) {
              return Z.dir(t, 'previousSibling')
            },
            nextUntil: function (t, e, n) {
              return Z.dir(t, 'nextSibling', n)
            },
            prevUntil: function (t, e, n) {
              return Z.dir(t, 'previousSibling', n)
            },
            siblings: function (t) {
              return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function (t) {
              return Z.sibling(t.firstChild)
            },
            contents: function (t) {
              return t.contentDocument || Z.merge([], t.childNodes)
            },
          },
          function (t, e) {
            Z.fn[t] = function (n, r) {
              var i = Z.map(this, e, n)
              return (
                'Until' !== t.slice(-5) && (r = n),
                r && 'string' == typeof r && (i = Z.filter(r, i)),
                this.length > 1 &&
                  (ht[t] || Z.unique(i), lt.test(t) && i.reverse()),
                this.pushStack(i)
              )
            }
          }
        )
      var ft = /\S+/g,
        pt = {}
      ;(Z.Callbacks = function (t) {
        t = 'string' == typeof t ? pt[t] || s(t) : Z.extend({}, t)
        var e,
          n,
          r,
          i,
          o,
          a,
          u = [],
          c = !t.once && [],
          l = function (s) {
            for (
              e = t.memory && s,
                n = !0,
                a = i || 0,
                i = 0,
                o = u.length,
                r = !0;
              u && a < o;
              a++
            )
              if (!1 === u[a].apply(s[0], s[1]) && t.stopOnFalse) {
                e = !1
                break
              }
            ;(r = !1),
              u && (c ? c.length && l(c.shift()) : e ? (u = []) : h.disable())
          },
          h = {
            add: function () {
              if (u) {
                var n = u.length
                !(function e(n) {
                  Z.each(n, function (n, r) {
                    var i = Z.type(r)
                    'function' === i
                      ? (t.unique && h.has(r)) || u.push(r)
                      : r && r.length && 'string' !== i && e(r)
                  })
                })(arguments),
                  r ? (o = u.length) : e && ((i = n), l(e))
              }
              return this
            },
            remove: function () {
              return (
                u &&
                  Z.each(arguments, function (t, e) {
                    for (var n; (n = Z.inArray(e, u, n)) > -1; )
                      u.splice(n, 1), r && (n <= o && o--, n <= a && a--)
                  }),
                this
              )
            },
            has: function (t) {
              return t ? Z.inArray(t, u) > -1 : !(!u || !u.length)
            },
            empty: function () {
              return (u = []), (o = 0), this
            },
            disable: function () {
              return (u = c = e = void 0), this
            },
            disabled: function () {
              return !u
            },
            lock: function () {
              return (c = void 0), e || h.disable(), this
            },
            locked: function () {
              return !c
            },
            fireWith: function (t, e) {
              return (
                !u ||
                  (n && !c) ||
                  ((e = e || []),
                  (e = [t, e.slice ? e.slice() : e]),
                  r ? c.push(e) : l(e)),
                this
              )
            },
            fire: function () {
              return h.fireWith(this, arguments), this
            },
            fired: function () {
              return !!n
            },
          }
        return h
      }),
        Z.extend({
          Deferred: function (t) {
            var e = [
                ['resolve', 'done', Z.Callbacks('once memory'), 'resolved'],
                ['reject', 'fail', Z.Callbacks('once memory'), 'rejected'],
                ['notify', 'progress', Z.Callbacks('memory')],
              ],
              n = 'pending',
              r = {
                state: function () {
                  return n
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this
                },
                then: function () {
                  var t = arguments
                  return Z.Deferred(function (n) {
                    Z.each(e, function (e, o) {
                      var s = Z.isFunction(t[e]) && t[e]
                      i[o[1]](function () {
                        var t = s && s.apply(this, arguments)
                        t && Z.isFunction(t.promise)
                          ? t
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[o[0] + 'With'](
                              this === r ? n.promise() : this,
                              s ? [t] : arguments
                            )
                      })
                    }),
                      (t = null)
                  }).promise()
                },
                promise: function (t) {
                  return null != t ? Z.extend(t, r) : r
                },
              },
              i = {}
            return (
              (r.pipe = r.then),
              Z.each(e, function (t, o) {
                var s = o[2],
                  a = o[3]
                ;(r[o[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        n = a
                      },
                      e[1 ^ t][2].disable,
                      e[2][2].lock
                    ),
                  (i[o[0]] = function () {
                    return (
                      i[o[0] + 'With'](this === i ? r : this, arguments), this
                    )
                  }),
                  (i[o[0] + 'With'] = s.fireWith)
              }),
              r.promise(i),
              t && t.call(i, i),
              i
            )
          },
          when: function (t) {
            var e,
              n,
              r,
              i = 0,
              o = U.call(arguments),
              s = o.length,
              a = 1 !== s || (t && Z.isFunction(t.promise)) ? s : 0,
              u = 1 === a ? t : Z.Deferred(),
              c = function (t, n, r) {
                return function (i) {
                  ;(n[t] = this),
                    (r[t] = arguments.length > 1 ? U.call(arguments) : i),
                    r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
              }
            if (s > 1)
              for (
                e = new Array(s), n = new Array(s), r = new Array(s);
                i < s;
                i++
              )
                o[i] && Z.isFunction(o[i].promise)
                  ? o[i]
                      .promise()
                      .done(c(i, r, o))
                      .fail(u.reject)
                      .progress(c(i, n, e))
                  : --a
            return a || u.resolveWith(r, o), u.promise()
          },
        })
      var dt
      ;(Z.fn.ready = function (t) {
        return Z.ready.promise().done(t), this
      }),
        Z.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function (t) {
            t ? Z.readyWait++ : Z.ready(!0)
          },
          ready: function (t) {
            ;(!0 === t ? --Z.readyWait : Z.isReady) ||
              ((Z.isReady = !0),
              (!0 !== t && --Z.readyWait > 0) ||
                (dt.resolveWith(K, [Z]),
                Z.fn.triggerHandler &&
                  (Z(K).triggerHandler('ready'), Z(K).off('ready'))))
          },
        }),
        (Z.ready.promise = function (e) {
          return (
            dt ||
              ((dt = Z.Deferred()),
              'complete' === K.readyState
                ? setTimeout(Z.ready)
                : (K.addEventListener('DOMContentLoaded', a, !1),
                  t.addEventListener('load', a, !1))),
            dt.promise(e)
          )
        }),
        Z.ready.promise()
      var gt = (Z.access = function (t, e, n, r, i, o, s) {
        var a = 0,
          u = t.length,
          c = null == n
        if ('object' === Z.type(n)) {
          i = !0
          for (a in n) Z.access(t, e, a, n[a], !0, o, s)
        } else if (
          void 0 !== r &&
          ((i = !0),
          Z.isFunction(r) || (s = !0),
          c &&
            (s
              ? (e.call(t, r), (e = null))
              : ((c = e),
                (e = function (t, e, n) {
                  return c.call(Z(t), n)
                }))),
          e)
        )
          for (; a < u; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)))
        return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
      })
      ;(Z.acceptData = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
      }),
        (u.uid = 1),
        (u.accepts = Z.acceptData),
        (u.prototype = {
          key: function (t) {
            if (!u.accepts(t)) return 0
            var e = {},
              n = t[this.expando]
            if (!n) {
              n = u.uid++
              try {
                ;(e[this.expando] = { value: n }), Object.defineProperties(t, e)
              } catch (r) {
                ;(e[this.expando] = n), Z.extend(t, e)
              }
            }
            return this.cache[n] || (this.cache[n] = {}), n
          },
          set: function (t, e, n) {
            var r,
              i = this.key(t),
              o = this.cache[i]
            if ('string' == typeof e) o[e] = n
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e)
            else for (r in e) o[r] = e[r]
            return o
          },
          get: function (t, e) {
            var n = this.cache[this.key(t)]
            return void 0 === e ? n : n[e]
          },
          access: function (t, e, n) {
            var r
            return void 0 === e || (e && 'string' == typeof e && void 0 === n)
              ? ((r = this.get(t, e)),
                void 0 !== r ? r : this.get(t, Z.camelCase(e)))
              : (this.set(t, e, n), void 0 !== n ? n : e)
          },
          remove: function (t, e) {
            var n,
              r,
              i,
              o = this.key(t),
              s = this.cache[o]
            if (void 0 === e) this.cache[o] = {}
            else {
              Z.isArray(e)
                ? (r = e.concat(e.map(Z.camelCase)))
                : ((i = Z.camelCase(e)),
                  e in s
                    ? (r = [e, i])
                    : ((r = i), (r = r in s ? [r] : r.match(ft) || []))),
                (n = r.length)
              for (; n--; ) delete s[r[n]]
            }
          },
          hasData: function (t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
          },
          discard: function (t) {
            t[this.expando] && delete this.cache[t[this.expando]]
          },
        })
      var vt = new u(),
        mt = new u(),
        yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g
      Z.extend({
        hasData: function (t) {
          return mt.hasData(t) || vt.hasData(t)
        },
        data: function (t, e, n) {
          return mt.access(t, e, n)
        },
        removeData: function (t, e) {
          mt.remove(t, e)
        },
        _data: function (t, e, n) {
          return vt.access(t, e, n)
        },
        _removeData: function (t, e) {
          vt.remove(t, e)
        },
      }),
        Z.fn.extend({
          data: function (t, e) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes
            if (void 0 === t) {
              if (
                this.length &&
                ((i = mt.get(o)),
                1 === o.nodeType && !vt.get(o, 'hasDataAttrs'))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    ((r = s[n].name),
                    0 === r.indexOf('data-') &&
                      ((r = Z.camelCase(r.slice(5))), c(o, r, i[r])))
                vt.set(o, 'hasDataAttrs', !0)
              }
              return i
            }
            return 'object' == typeof t
              ? this.each(function () {
                  mt.set(this, t)
                })
              : gt(
                  this,
                  function (e) {
                    var n,
                      r = Z.camelCase(t)
                    if (o && void 0 === e) {
                      if (void 0 !== (n = mt.get(o, t))) return n
                      if (void 0 !== (n = mt.get(o, r))) return n
                      if (void 0 !== (n = c(o, r, void 0))) return n
                    } else
                      this.each(function () {
                        var n = mt.get(this, r)
                        mt.set(this, r, e),
                          -1 !== t.indexOf('-') &&
                            void 0 !== n &&
                            mt.set(this, t, e)
                      })
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                )
          },
          removeData: function (t) {
            return this.each(function () {
              mt.remove(this, t)
            })
          },
        }),
        Z.extend({
          queue: function (t, e, n) {
            var r
            if (t)
              return (
                (e = (e || 'fx') + 'queue'),
                (r = vt.get(t, e)),
                n &&
                  (!r || Z.isArray(n)
                    ? (r = vt.access(t, e, Z.makeArray(n)))
                    : r.push(n)),
                r || []
              )
          },
          dequeue: function (t, e) {
            e = e || 'fx'
            var n = Z.queue(t, e),
              r = n.length,
              i = n.shift(),
              o = Z._queueHooks(t, e),
              s = function () {
                Z.dequeue(t, e)
              }
            'inprogress' === i && ((i = n.shift()), r--),
              i &&
                ('fx' === e && n.unshift('inprogress'),
                delete o.stop,
                i.call(t, s, o)),
              !r && o && o.empty.fire()
          },
          _queueHooks: function (t, e) {
            var n = e + 'queueHooks'
            return (
              vt.get(t, n) ||
              vt.access(t, n, {
                empty: Z.Callbacks('once memory').add(function () {
                  vt.remove(t, [e + 'queue', n])
                }),
              })
            )
          },
        }),
        Z.fn.extend({
          queue: function (t, e) {
            var n = 2
            return (
              'string' != typeof t && ((e = t), (t = 'fx'), n--),
              arguments.length < n
                ? Z.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = Z.queue(this, t, e)
                    Z._queueHooks(this, t),
                      'fx' === t && 'inprogress' !== n[0] && Z.dequeue(this, t)
                  })
            )
          },
          dequeue: function (t) {
            return this.each(function () {
              Z.dequeue(this, t)
            })
          },
          clearQueue: function (t) {
            return this.queue(t || 'fx', [])
          },
          promise: function (t, e) {
            var n,
              r = 1,
              i = Z.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --r || i.resolveWith(o, [o])
              }
            for (
              'string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx';
              s--;

            )
              (n = vt.get(o[s], t + 'queueHooks')) &&
                n.empty &&
                (r++, n.empty.add(a))
            return a(), i.promise(e)
          },
        })
      var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = ['Top', 'Right', 'Bottom', 'Left'],
        Tt = function (t, e) {
          return (
            (t = e || t),
            'none' === Z.css(t, 'display') || !Z.contains(t.ownerDocument, t)
          )
        },
        Et = /^(?:checkbox|radio)$/i
      !(function () {
        var t = K.createDocumentFragment(),
          e = t.appendChild(K.createElement('div')),
          n = K.createElement('input')
        n.setAttribute('type', 'radio'),
          n.setAttribute('checked', 'checked'),
          n.setAttribute('name', 't'),
          e.appendChild(n),
          (Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = '<textarea>x</textarea>'),
          (Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue)
      })()
      Q.focusinBubbles = 'onfocusin' in t
      var _t = /^key/,
        Ct = /^(?:mouse|pointer|contextmenu)|click/,
        St = /^(?:focusinfocus|focusoutblur)$/,
        kt = /^([^.]*)(?:\.(.+)|)$/
      ;(Z.event = {
        global: {},
        add: function (t, e, n, r, i) {
          var o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            g,
            v = vt.get(t)
          if (v)
            for (
              n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                n.guid || (n.guid = Z.guid++),
                (u = v.events) || (u = v.events = {}),
                (s = v.handle) ||
                  (s = v.handle =
                    function (e) {
                      return void 0 !== Z && Z.event.triggered !== e.type
                        ? Z.event.dispatch.apply(t, arguments)
                        : void 0
                    }),
                e = (e || '').match(ft) || [''],
                c = e.length;
              c--;

            )
              (a = kt.exec(e[c]) || []),
                (p = g = a[1]),
                (d = (a[2] || '').split('.').sort()),
                p &&
                  ((h = Z.event.special[p] || {}),
                  (p = (i ? h.delegateType : h.bindType) || p),
                  (h = Z.event.special[p] || {}),
                  (l = Z.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && Z.expr.match.needsContext.test(i),
                      namespace: d.join('.'),
                    },
                    o
                  )),
                  (f = u[p]) ||
                    ((f = u[p] = []),
                    (f.delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(t, r, d, s)) ||
                      (t.addEventListener && t.addEventListener(p, s, !1))),
                  h.add &&
                    (h.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  i ? f.splice(f.delegateCount++, 0, l) : f.push(l),
                  (Z.event.global[p] = !0))
        },
        remove: function (t, e, n, r, i) {
          var o,
            s,
            a,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            g,
            v = vt.hasData(t) && vt.get(t)
          if (v && (u = v.events)) {
            for (e = (e || '').match(ft) || [''], c = e.length; c--; )
              if (
                ((a = kt.exec(e[c]) || []),
                (p = g = a[1]),
                (d = (a[2] || '').split('.').sort()),
                p)
              ) {
                for (
                  h = Z.event.special[p] || {},
                    p = (r ? h.delegateType : h.bindType) || p,
                    f = u[p] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        '(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)'
                      ),
                    s = o = f.length;
                  o--;

                )
                  (l = f[o]),
                    (!i && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (a && !a.test(l.namespace)) ||
                      (r && r !== l.selector && ('**' !== r || !l.selector)) ||
                      (f.splice(o, 1),
                      l.selector && f.delegateCount--,
                      h.remove && h.remove.call(t, l))
                s &&
                  !f.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, d, v.handle)) ||
                    Z.removeEvent(t, p, v.handle),
                  delete u[p])
              } else for (p in u) Z.event.remove(t, p + e[c], n, r, !0)
            Z.isEmptyObject(u) && (delete v.handle, vt.remove(t, 'events'))
          }
        },
        trigger: function (e, n, r, i) {
          var o,
            s,
            a,
            u,
            c,
            l,
            h,
            f = [r || K],
            p = Y.call(e, 'type') ? e.type : e,
            d = Y.call(e, 'namespace') ? e.namespace.split('.') : []
          if (
            ((s = a = r = r || K),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !St.test(p + Z.event.triggered) &&
              (p.indexOf('.') >= 0 &&
                ((d = p.split('.')), (p = d.shift()), d.sort()),
              (c = p.indexOf(':') < 0 && 'on' + p),
              (e = e[Z.expando]
                ? e
                : new Z.Event(p, 'object' == typeof e && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = d.join('.')),
              (e.namespace_re = e.namespace
                ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (n = null == n ? [e] : Z.makeArray(n, [e])),
              (h = Z.event.special[p] || {}),
              i || !h.trigger || !1 !== h.trigger.apply(r, n)))
          ) {
            if (!i && !h.noBubble && !Z.isWindow(r)) {
              for (
                u = h.delegateType || p, St.test(u + p) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                f.push(s), (a = s)
              a === (r.ownerDocument || K) &&
                f.push(a.defaultView || a.parentWindow || t)
            }
            for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
              (e.type = o > 1 ? u : h.bindType || p),
                (l =
                  (vt.get(s, 'events') || {})[e.type] && vt.get(s, 'handle')),
                l && l.apply(s, n),
                (l = c && s[c]) &&
                  l.apply &&
                  Z.acceptData(s) &&
                  ((e.result = l.apply(s, n)),
                  !1 === e.result && e.preventDefault())
            return (
              (e.type = p),
              i ||
                e.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(f.pop(), n)) ||
                !Z.acceptData(r) ||
                (c &&
                  Z.isFunction(r[p]) &&
                  !Z.isWindow(r) &&
                  ((a = r[c]),
                  a && (r[c] = null),
                  (Z.event.triggered = p),
                  r[p](),
                  (Z.event.triggered = void 0),
                  a && (r[c] = a))),
              e.result
            )
          }
        },
        dispatch: function (t) {
          t = Z.event.fix(t)
          var e,
            n,
            r,
            i,
            o,
            s = [],
            a = U.call(arguments),
            u = (vt.get(this, 'events') || {})[t.type] || [],
            c = Z.event.special[t.type] || {}
          if (
            ((a[0] = t),
            (t.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, t))
          ) {
            for (
              s = Z.event.handlers.call(this, t, u), e = 0;
              (i = s[e++]) && !t.isPropagationStopped();

            )
              for (
                t.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();

              )
                (t.namespace_re && !t.namespace_re.test(o.namespace)) ||
                  ((t.handleObj = o),
                  (t.data = o.data),
                  void 0 !==
                    (r = (
                      (Z.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, a)) &&
                    !1 === (t.result = r) &&
                    (t.preventDefault(), t.stopPropagation()))
            return c.postDispatch && c.postDispatch.call(this, t), t.result
          }
        },
        handlers: function (t, e) {
          var n,
            r,
            i,
            o,
            s = [],
            a = e.delegateCount,
            u = t.target
          if (a && u.nodeType && (!t.button || 'click' !== t.type))
            for (; u !== this; u = u.parentNode || this)
              if (!0 !== u.disabled || 'click' !== t.type) {
                for (r = [], n = 0; n < a; n++)
                  (o = e[n]),
                    (i = o.selector + ' '),
                    void 0 === r[i] &&
                      (r[i] = o.needsContext
                        ? Z(i, this).index(u) >= 0
                        : Z.find(i, this, null, [u]).length),
                    r[i] && r.push(o)
                r.length && s.push({ elem: u, handlers: r })
              }
          return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s
        },
        props:
          'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
            ' '
          ),
        fixHooks: {},
        keyHooks: {
          props: 'char charCode key keyCode'.split(' '),
          filter: function (t, e) {
            return (
              null == t.which &&
                (t.which = null != e.charCode ? e.charCode : e.keyCode),
              t
            )
          },
        },
        mouseHooks: {
          props:
            'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
              ' '
            ),
          filter: function (t, e) {
            var n,
              r,
              i,
              o = e.button
            return (
              null == t.pageX &&
                null != e.clientX &&
                ((n = t.target.ownerDocument || K),
                (r = n.documentElement),
                (i = n.body),
                (t.pageX =
                  e.clientX +
                  ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                  ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                (t.pageY =
                  e.clientY +
                  ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                  ((r && r.clientTop) || (i && i.clientTop) || 0))),
              t.which ||
                void 0 === o ||
                (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
              t
            )
          },
        },
        fix: function (t) {
          if (t[Z.expando]) return t
          var e,
            n,
            r,
            i = t.type,
            o = t,
            s = this.fixHooks[i]
          for (
            s ||
              (this.fixHooks[i] = s =
                Ct.test(i) ? this.mouseHooks : _t.test(i) ? this.keyHooks : {}),
              r = s.props ? this.props.concat(s.props) : this.props,
              t = new Z.Event(o),
              e = r.length;
            e--;

          )
            (n = r[e]), (t[n] = o[n])
          return (
            t.target || (t.target = K),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            s.filter ? s.filter(t, o) : t
          )
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== f() && this.focus) return this.focus(), !1
            },
            delegateType: 'focusin',
          },
          blur: {
            trigger: function () {
              if (this === f() && this.blur) return this.blur(), !1
            },
            delegateType: 'focusout',
          },
          click: {
            trigger: function () {
              if (
                'checkbox' === this.type &&
                this.click &&
                Z.nodeName(this, 'input')
              )
                return this.click(), !1
            },
            _default: function (t) {
              return Z.nodeName(t.target, 'a')
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result)
            },
          },
        },
        simulate: function (t, e, n, r) {
          var i = Z.extend(new Z.Event(), n, {
            type: t,
            isSimulated: !0,
            originalEvent: {},
          })
          r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i),
            i.isDefaultPrevented() && n.preventDefault()
        },
      }),
        (Z.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n, !1)
        }),
        (Z.Event = function (t, e) {
          if (!(this instanceof Z.Event)) return new Z.Event(t, e)
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? l
                  : h))
            : (this.type = t),
            e && Z.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Z.now()),
            (this[Z.expando] = !0)
        }),
        (Z.Event.prototype = {
          isDefaultPrevented: h,
          isPropagationStopped: h,
          isImmediatePropagationStopped: h,
          preventDefault: function () {
            var t = this.originalEvent
            ;(this.isDefaultPrevented = l),
              t && t.preventDefault && t.preventDefault()
          },
          stopPropagation: function () {
            var t = this.originalEvent
            ;(this.isPropagationStopped = l),
              t && t.stopPropagation && t.stopPropagation()
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent
            ;(this.isImmediatePropagationStopped = l),
              t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
              this.stopPropagation()
          },
        }),
        Z.each(
          {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            pointerenter: 'pointerover',
            pointerleave: 'pointerout',
          },
          function (t, e) {
            Z.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  r = this,
                  i = t.relatedTarget,
                  o = t.handleObj
                return (
                  (i && (i === r || Z.contains(r, i))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                )
              },
            }
          }
        ),
        Q.focusinBubbles ||
          Z.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
            var n = function (t) {
              Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            }
            Z.event.special[e] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = vt.access(r, e)
                i || r.addEventListener(t, n, !0), vt.access(r, e, (i || 0) + 1)
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = vt.access(r, e) - 1
                i
                  ? vt.access(r, e, i)
                  : (r.removeEventListener(t, n, !0), vt.remove(r, e))
              },
            }
          }),
        Z.fn.extend({
          on: function (t, e, n, r, i) {
            var o, s
            if ('object' == typeof t) {
              'string' != typeof e && ((n = n || e), (e = void 0))
              for (s in t) this.on(s, e, n, t[s], i)
              return this
            }
            if (
              (null == n && null == r
                ? ((r = e), (n = e = void 0))
                : null == r &&
                  ('string' == typeof e
                    ? ((r = n), (n = void 0))
                    : ((r = n), (n = e), (e = void 0))),
              !1 === r)
            )
              r = h
            else if (!r) return this
            return (
              1 === i &&
                ((o = r),
                (r = function (t) {
                  return Z().off(t), o.apply(this, arguments)
                }),
                (r.guid = o.guid || (o.guid = Z.guid++))),
              this.each(function () {
                Z.event.add(this, t, r, n, e)
              })
            )
          },
          one: function (t, e, n, r) {
            return this.on(t, e, n, r, 1)
          },
          off: function (t, e, n) {
            var r, i
            if (t && t.preventDefault && t.handleObj)
              return (
                (r = t.handleObj),
                Z(t.delegateTarget).off(
                  r.namespace ? r.origType + '.' + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              )
            if ('object' == typeof t) {
              for (i in t) this.off(i, e, t[i])
              return this
            }
            return (
              (!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = h),
              this.each(function () {
                Z.event.remove(this, t, n, e)
              })
            )
          },
          trigger: function (t, e) {
            return this.each(function () {
              Z.event.trigger(t, e, this)
            })
          },
          triggerHandler: function (t, e) {
            var n = this[0]
            if (n) return Z.event.trigger(t, e, n, !0)
          },
        })
      var Nt =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        At = /<([\w:]+)/,
        jt = /<|&#?\w+;/,
        Dt = /<(?:script|style|link)/i,
        Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rt = /^$|\/(?:java|ecma)script/i,
        Ot = /^true\/(.*)/,
        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        It = {
          option: [1, "<select multiple='multiple'>", '</select>'],
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', ''],
        }
      ;(It.optgroup = It.option),
        (It.tbody = It.tfoot = It.colgroup = It.caption = It.thead),
        (It.th = It.td),
        Z.extend({
          clone: function (t, e, n) {
            var r,
              i,
              o,
              s,
              a = t.cloneNode(!0),
              u = Z.contains(t.ownerDocument, t)
            if (
              !(
                Q.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                Z.isXMLDoc(t)
              )
            )
              for (s = y(a), o = y(t), r = 0, i = o.length; r < i; r++)
                b(o[r], s[r])
            if (e)
              if (n)
                for (
                  o = o || y(t), s = s || y(a), r = 0, i = o.length;
                  r < i;
                  r++
                )
                  m(o[r], s[r])
              else m(t, a)
            return (
              (s = y(a, 'script')),
              s.length > 0 && v(s, !u && y(t, 'script')),
              a
            )
          },
          buildFragment: function (t, e, n, r) {
            for (
              var i,
                o,
                s,
                a,
                u,
                c,
                l = e.createDocumentFragment(),
                h = [],
                f = 0,
                p = t.length;
              f < p;
              f++
            )
              if ((i = t[f]) || 0 === i)
                if ('object' === Z.type(i)) Z.merge(h, i.nodeType ? [i] : i)
                else if (jt.test(i)) {
                  for (
                    o = o || l.appendChild(e.createElement('div')),
                      s = (At.exec(i) || ['', ''])[1].toLowerCase(),
                      a = It[s] || It._default,
                      o.innerHTML = a[1] + i.replace(Nt, '<$1></$2>') + a[2],
                      c = a[0];
                    c--;

                  )
                    o = o.lastChild
                  Z.merge(h, o.childNodes),
                    (o = l.firstChild),
                    (o.textContent = '')
                } else h.push(e.createTextNode(i))
            for (l.textContent = '', f = 0; (i = h[f++]); )
              if (
                (!r || -1 === Z.inArray(i, r)) &&
                ((u = Z.contains(i.ownerDocument, i)),
                (o = y(l.appendChild(i), 'script')),
                u && v(o),
                n)
              )
                for (c = 0; (i = o[c++]); ) Rt.test(i.type || '') && n.push(i)
            return l
          },
          cleanData: function (t) {
            for (
              var e, n, r, i, o = Z.event.special, s = 0;
              void 0 !== (n = t[s]);
              s++
            ) {
              if (Z.acceptData(n) && (i = n[vt.expando]) && (e = vt.cache[i])) {
                if (e.events)
                  for (r in e.events)
                    o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle)
                vt.cache[i] && delete vt.cache[i]
              }
              delete mt.cache[n[mt.expando]]
            }
          },
        }),
        Z.fn.extend({
          text: function (t) {
            return gt(
              this,
              function (t) {
                return void 0 === t
                  ? Z.text(this)
                  : this.empty().each(function () {
                      ;(1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t)
                    })
              },
              null,
              t,
              arguments.length
            )
          },
          append: function () {
            return this.domManip(arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                p(this, t).appendChild(t)
              }
            })
          },
          prepend: function () {
            return this.domManip(arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = p(this, t)
                e.insertBefore(t, e.firstChild)
              }
            })
          },
          before: function () {
            return this.domManip(arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this)
            })
          },
          after: function () {
            return this.domManip(arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling)
            })
          },
          remove: function (t, e) {
            for (
              var n, r = t ? Z.filter(t, this) : this, i = 0;
              null != (n = r[i]);
              i++
            )
              e || 1 !== n.nodeType || Z.cleanData(y(n)),
                n.parentNode &&
                  (e && Z.contains(n.ownerDocument, n) && v(y(n, 'script')),
                  n.parentNode.removeChild(n))
            return this
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType && (Z.cleanData(y(t, !1)), (t.textContent = ''))
            return this
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return Z.clone(this, t, e)
              })
            )
          },
          html: function (t) {
            return gt(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  r = this.length
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML
                if (
                  'string' == typeof t &&
                  !Dt.test(t) &&
                  !It[(At.exec(t) || ['', ''])[1].toLowerCase()]
                ) {
                  t = t.replace(Nt, '<$1></$2>')
                  try {
                    for (; n < r; n++)
                      (e = this[n] || {}),
                        1 === e.nodeType &&
                          (Z.cleanData(y(e, !1)), (e.innerHTML = t))
                    e = 0
                  } catch (t) {}
                }
                e && this.empty().append(t)
              },
              null,
              t,
              arguments.length
            )
          },
          replaceWith: function () {
            var t = arguments[0]
            return (
              this.domManip(arguments, function (e) {
                ;(t = this.parentNode),
                  Z.cleanData(y(this)),
                  t && t.replaceChild(e, this)
              }),
              t && (t.length || t.nodeType) ? this : this.remove()
            )
          },
          detach: function (t) {
            return this.remove(t, !0)
          },
          domManip: function (t, e) {
            t = z.apply([], t)
            var n,
              r,
              i,
              o,
              s,
              a,
              u = 0,
              c = this.length,
              l = this,
              h = c - 1,
              f = t[0],
              p = Z.isFunction(f)
            if (
              p ||
              (c > 1 && 'string' == typeof f && !Q.checkClone && Ht.test(f))
            )
              return this.each(function (n) {
                var r = l.eq(n)
                p && (t[0] = f.call(this, n, r.html())), r.domManip(t, e)
              })
            if (
              c &&
              ((n = Z.buildFragment(t, this[0].ownerDocument, !1, this)),
              (r = n.firstChild),
              1 === n.childNodes.length && (n = r),
              r)
            ) {
              for (i = Z.map(y(n, 'script'), d), o = i.length; u < c; u++)
                (s = n),
                  u !== h &&
                    ((s = Z.clone(s, !0, !0)), o && Z.merge(i, y(s, 'script'))),
                  e.call(this[u], s, u)
              if (o)
                for (
                  a = i[i.length - 1].ownerDocument, Z.map(i, g), u = 0;
                  u < o;
                  u++
                )
                  (s = i[u]),
                    Rt.test(s.type || '') &&
                      !vt.access(s, 'globalEval') &&
                      Z.contains(a, s) &&
                      (s.src
                        ? Z._evalUrl && Z._evalUrl(s.src)
                        : Z.globalEval(s.textContent.replace(Lt, '')))
            }
            return this
          },
        }),
        Z.each(
          {
            appendTo: 'append',
            prependTo: 'prepend',
            insertBefore: 'before',
            insertAfter: 'after',
            replaceAll: 'replaceWith',
          },
          function (t, e) {
            Z.fn[t] = function (t) {
              for (
                var n, r = [], i = Z(t), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  Z(i[s])[e](n),
                  V.apply(r, n.get())
              return this.pushStack(r)
            }
          }
        )
      var Pt,
        qt = {},
        Ft = /^margin/,
        Mt = new RegExp('^(' + xt + ')(?!px)[a-z%]+$', 'i'),
        $t = function (t) {
          return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }
      !(function () {
        function e() {
          ;(s.style.cssText =
            '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
            (s.innerHTML = ''),
            i.appendChild(o)
          var e = t.getComputedStyle(s, null)
          ;(n = '1%' !== e.top), (r = '4px' === e.width), i.removeChild(o)
        }
        var n,
          r,
          i = K.documentElement,
          o = K.createElement('div'),
          s = K.createElement('div')
        s.style &&
          ((s.style.backgroundClip = 'content-box'),
          (s.cloneNode(!0).style.backgroundClip = ''),
          (Q.clearCloneStyle = 'content-box' === s.style.backgroundClip),
          (o.style.cssText =
            'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute'),
          o.appendChild(s),
          t.getComputedStyle &&
            Z.extend(Q, {
              pixelPosition: function () {
                return e(), n
              },
              boxSizingReliable: function () {
                return null == r && e(), r
              },
              reliableMarginRight: function () {
                var e,
                  n = s.appendChild(K.createElement('div'))
                return (
                  (n.style.cssText = s.style.cssText =
                    '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
                  (n.style.marginRight = n.style.width = '0'),
                  (s.style.width = '1px'),
                  i.appendChild(o),
                  (e = !parseFloat(t.getComputedStyle(n, null).marginRight)),
                  i.removeChild(o),
                  e
                )
              },
            }))
      })(),
        (Z.swap = function (t, e, n, r) {
          var i,
            o,
            s = {}
          for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o])
          i = n.apply(t, r || [])
          for (o in e) t.style[o] = s[o]
          return i
        })
      var Bt = /^(none|table(?!-c[ea]).+)/,
        Wt = new RegExp('^(' + xt + ')(.*)$', 'i'),
        Ut = new RegExp('^([+-])=(' + xt + ')', 'i'),
        zt = { position: 'absolute', visibility: 'hidden', display: 'block' },
        Vt = { letterSpacing: '0', fontWeight: '400' },
        Xt = ['Webkit', 'O', 'Moz', 'ms']
      Z.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = T(t, 'opacity')
                return '' === n ? '1' : n
              }
            },
          },
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: 'cssFloat' },
        style: function (t, e, n, r) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var i,
              o,
              s,
              a = Z.camelCase(e),
              u = t.style
            if (
              ((e = Z.cssProps[a] || (Z.cssProps[a] = _(u, a))),
              (s = Z.cssHooks[e] || Z.cssHooks[a]),
              void 0 === n)
            )
              return s && 'get' in s && void 0 !== (i = s.get(t, !1, r))
                ? i
                : u[e]
            ;(o = typeof n),
              'string' === o &&
                (i = Ut.exec(n)) &&
                ((n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e))),
                (o = 'number')),
              null != n &&
                n === n &&
                ('number' !== o || Z.cssNumber[a] || (n += 'px'),
                Q.clearCloneStyle ||
                  '' !== n ||
                  0 !== e.indexOf('background') ||
                  (u[e] = 'inherit'),
                (s && 'set' in s && void 0 === (n = s.set(t, n, r))) ||
                  (u[e] = n))
          }
        },
        css: function (t, e, n, r) {
          var i,
            o,
            s,
            a = Z.camelCase(e)
          return (
            (e = Z.cssProps[a] || (Z.cssProps[a] = _(t.style, a))),
            (s = Z.cssHooks[e] || Z.cssHooks[a]),
            s && 'get' in s && (i = s.get(t, !0, n)),
            void 0 === i && (i = T(t, e, r)),
            'normal' === i && e in Vt && (i = Vt[e]),
            '' === n || n
              ? ((o = parseFloat(i)), !0 === n || Z.isNumeric(o) ? o || 0 : i)
              : i
          )
        },
      }),
        Z.each(['height', 'width'], function (t, e) {
          Z.cssHooks[e] = {
            get: function (t, n, r) {
              if (n)
                return Bt.test(Z.css(t, 'display')) && 0 === t.offsetWidth
                  ? Z.swap(t, zt, function () {
                      return k(t, e, r)
                    })
                  : k(t, e, r)
            },
            set: function (t, n, r) {
              var i = r && $t(t)
              return C(
                t,
                n,
                r
                  ? S(t, e, r, 'border-box' === Z.css(t, 'boxSizing', !1, i), i)
                  : 0
              )
            },
          }
        }),
        (Z.cssHooks.marginRight = E(Q.reliableMarginRight, function (t, e) {
          if (e)
            return Z.swap(t, { display: 'inline-block' }, T, [t, 'marginRight'])
        })),
        Z.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
          ;(Z.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = 'string' == typeof n ? n.split(' ') : [n];
                r < 4;
                r++
              )
                i[t + wt[r] + e] = o[r] || o[r - 2] || o[0]
              return i
            },
          }),
            Ft.test(t) || (Z.cssHooks[t + e].set = C)
        }),
        Z.fn.extend({
          css: function (t, e) {
            return gt(
              this,
              function (t, e, n) {
                var r,
                  i,
                  o = {},
                  s = 0
                if (Z.isArray(e)) {
                  for (r = $t(t), i = e.length; s < i; s++)
                    o[e[s]] = Z.css(t, e[s], !1, r)
                  return o
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
              },
              t,
              e,
              arguments.length > 1
            )
          },
          show: function () {
            return N(this, !0)
          },
          hide: function () {
            return N(this)
          },
          toggle: function (t) {
            return 'boolean' == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  Tt(this) ? Z(this).show() : Z(this).hide()
                })
          },
        }),
        (Z.Tween = A),
        (A.prototype = {
          constructor: A,
          init: function (t, e, n, r, i, o) {
            ;(this.elem = t),
              (this.prop = n),
              (this.easing = i || 'swing'),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (Z.cssNumber[n] ? '' : 'px'))
          },
          cur: function () {
            var t = A.propHooks[this.prop]
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
          },
          run: function (t) {
            var e,
              n = A.propHooks[this.prop]
            return (
              this.options.duration
                ? (this.pos = e =
                    Z.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : A.propHooks._default.set(this),
              this
            )
          },
        }),
        (A.prototype.init.prototype = A.prototype),
        (A.propHooks = {
          _default: {
            get: function (t) {
              var e
              return null == t.elem[t.prop] ||
                (t.elem.style && null != t.elem.style[t.prop])
                ? ((e = Z.css(t.elem, t.prop, '')), e && 'auto' !== e ? e : 0)
                : t.elem[t.prop]
            },
            set: function (t) {
              Z.fx.step[t.prop]
                ? Z.fx.step[t.prop](t)
                : t.elem.style &&
                  (null != t.elem.style[Z.cssProps[t.prop]] ||
                    Z.cssHooks[t.prop])
                ? Z.style(t.elem, t.prop, t.now + t.unit)
                : (t.elem[t.prop] = t.now)
            },
          },
        }),
        (A.propHooks.scrollTop = A.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            },
          }),
        (Z.easing = {
          linear: function (t) {
            return t
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2
          },
        }),
        (Z.fx = A.prototype.init),
        (Z.fx.step = {})
      var Gt,
        Jt,
        Yt = /^(?:toggle|show|hide)$/,
        Qt = new RegExp('^(?:([+-])=|)(' + xt + ')([a-z%]*)$', 'i'),
        Kt = /queueHooks$/,
        Zt = [R],
        te = {
          '*': [
            function (t, e) {
              var n = this.createTween(t, e),
                r = n.cur(),
                i = Qt.exec(e),
                o = (i && i[3]) || (Z.cssNumber[t] ? '' : 'px'),
                s =
                  (Z.cssNumber[t] || ('px' !== o && +r)) &&
                  Qt.exec(Z.css(n.elem, t)),
                a = 1,
                u = 20
              if (s && s[3] !== o) {
                ;(o = o || s[3]), (i = i || []), (s = +r || 1)
                do {
                  ;(a = a || '.5'), (s /= a), Z.style(n.elem, t, s + o)
                } while (a !== (a = n.cur() / r) && 1 !== a && --u)
              }
              return (
                i &&
                  ((s = n.start = +s || +r || 0),
                  (n.unit = o),
                  (n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2])),
                n
              )
            },
          ],
        }
      ;(Z.Animation = Z.extend(L, {
        tweener: function (t, e) {
          Z.isFunction(t) ? ((e = t), (t = ['*'])) : (t = t.split(' '))
          for (var n, r = 0, i = t.length; r < i; r++)
            (n = t[r]), (te[n] = te[n] || []), te[n].unshift(e)
        },
        prefilter: function (t, e) {
          e ? Zt.unshift(t) : Zt.push(t)
        },
      })),
        (Z.speed = function (t, e, n) {
          var r =
            t && 'object' == typeof t
              ? Z.extend({}, t)
              : {
                  complete: n || (!n && e) || (Z.isFunction(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !Z.isFunction(e) && e),
                }
          return (
            (r.duration = Z.fx.off
              ? 0
              : 'number' == typeof r.duration
              ? r.duration
              : r.duration in Z.fx.speeds
              ? Z.fx.speeds[r.duration]
              : Z.fx.speeds._default),
            (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
            (r.old = r.complete),
            (r.complete = function () {
              Z.isFunction(r.old) && r.old.call(this),
                r.queue && Z.dequeue(this, r.queue)
            }),
            r
          )
        }),
        Z.fn.extend({
          fadeTo: function (t, e, n, r) {
            return this.filter(Tt)
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, r)
          },
          animate: function (t, e, n, r) {
            var i = Z.isEmptyObject(t),
              o = Z.speed(e, n, r),
              s = function () {
                var e = L(this, Z.extend({}, t), o)
                ;(i || vt.get(this, 'finish')) && e.stop(!0)
              }
            return (
              (s.finish = s),
              i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            )
          },
          stop: function (t, e, n) {
            var r = function (t) {
              var e = t.stop
              delete t.stop, e(n)
            }
            return (
              'string' != typeof t && ((n = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || 'fx', []),
              this.each(function () {
                var e = !0,
                  i = null != t && t + 'queueHooks',
                  o = Z.timers,
                  s = vt.get(this)
                if (i) s[i] && s[i].stop && r(s[i])
                else for (i in s) s[i] && s[i].stop && Kt.test(i) && r(s[i])
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != t && o[i].queue !== t) ||
                    (o[i].anim.stop(n), (e = !1), o.splice(i, 1))
                ;(!e && n) || Z.dequeue(this, t)
              })
            )
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || 'fx'),
              this.each(function () {
                var e,
                  n = vt.get(this),
                  r = n[t + 'queue'],
                  i = n[t + 'queueHooks'],
                  o = Z.timers,
                  s = r ? r.length : 0
                for (
                  n.finish = !0,
                    Z.queue(this, t, []),
                    i && i.stop && i.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1))
                for (e = 0; e < s; e++)
                  r[e] && r[e].finish && r[e].finish.call(this)
                delete n.finish
              })
            )
          },
        }),
        Z.each(['toggle', 'show', 'hide'], function (t, e) {
          var n = Z.fn[e]
          Z.fn[e] = function (t, r, i) {
            return null == t || 'boolean' == typeof t
              ? n.apply(this, arguments)
              : this.animate(D(e, !0), t, r, i)
          }
        }),
        Z.each(
          {
            slideDown: D('show'),
            slideUp: D('hide'),
            slideToggle: D('toggle'),
            fadeIn: { opacity: 'show' },
            fadeOut: { opacity: 'hide' },
            fadeToggle: { opacity: 'toggle' },
          },
          function (t, e) {
            Z.fn[t] = function (t, n, r) {
              return this.animate(e, t, n, r)
            }
          }
        ),
        (Z.timers = []),
        (Z.fx.tick = function () {
          var t,
            e = 0,
            n = Z.timers
          for (Gt = Z.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1)
          n.length || Z.fx.stop(), (Gt = void 0)
        }),
        (Z.fx.timer = function (t) {
          Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
        }),
        (Z.fx.interval = 13),
        (Z.fx.start = function () {
          Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
        }),
        (Z.fx.stop = function () {
          clearInterval(Jt), (Jt = null)
        }),
        (Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (Z.fn.delay = function (t, e) {
          return (
            (t = Z.fx ? Z.fx.speeds[t] || t : t),
            (e = e || 'fx'),
            this.queue(e, function (e, n) {
              var r = setTimeout(e, t)
              n.stop = function () {
                clearTimeout(r)
              }
            })
          )
        }),
        (function () {
          var t = K.createElement('input'),
            e = K.createElement('select'),
            n = e.appendChild(K.createElement('option'))
          ;(t.type = 'checkbox'),
            (Q.checkOn = '' !== t.value),
            (Q.optSelected = n.selected),
            (e.disabled = !0),
            (Q.optDisabled = !n.disabled),
            (t = K.createElement('input')),
            (t.value = 't'),
            (t.type = 'radio'),
            (Q.radioValue = 't' === t.value)
        })()
      var ee,
        ne = Z.expr.attrHandle
      Z.fn.extend({
        attr: function (t, e) {
          return gt(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
          return this.each(function () {
            Z.removeAttr(this, t)
          })
        },
      }),
        Z.extend({
          attr: function (t, e, n) {
            var r,
              i,
              o = t.nodeType
            if (t && 3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? Z.prop(t, e, n)
                : ((1 === o && Z.isXMLDoc(t)) ||
                    ((e = e.toLowerCase()),
                    (r =
                      Z.attrHooks[e] ||
                      (Z.expr.match.bool.test(e) ? ee : void 0))),
                  void 0 === n
                    ? r && 'get' in r && null !== (i = r.get(t, e))
                      ? i
                      : ((i = Z.find.attr(t, e)), null == i ? void 0 : i)
                    : null !== n
                    ? r && 'set' in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ''), n)
                    : void Z.removeAttr(t, e))
          },
          removeAttr: function (t, e) {
            var n,
              r,
              i = 0,
              o = e && e.match(ft)
            if (o && 1 === t.nodeType)
              for (; (n = o[i++]); )
                (r = Z.propFix[n] || n),
                  Z.expr.match.bool.test(n) && (t[r] = !1),
                  t.removeAttribute(n)
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!Q.radioValue && 'radio' === e && Z.nodeName(t, 'input')) {
                  var n = t.value
                  return t.setAttribute('type', e), n && (t.value = n), e
                }
              },
            },
          },
        }),
        (ee = {
          set: function (t, e, n) {
            return !1 === e ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
          },
        }),
        Z.each(Z.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = ne[e] || Z.find.attr
          ne[e] = function (t, e, r) {
            var i, o
            return (
              r ||
                ((o = ne[e]),
                (ne[e] = i),
                (i = null != n(t, e, r) ? e.toLowerCase() : null),
                (ne[e] = o)),
              i
            )
          }
        })
      var re = /^(?:input|select|textarea|button)$/i
      Z.fn.extend({
        prop: function (t, e) {
          return gt(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[Z.propFix[t] || t]
          })
        },
      }),
        Z.extend({
          propFix: { for: 'htmlFor', class: 'className' },
          prop: function (t, e, n) {
            var r,
              i,
              o,
              s = t.nodeType
            if (t && 3 !== s && 8 !== s && 2 !== s)
              return (
                (o = 1 !== s || !Z.isXMLDoc(t)),
                o && ((e = Z.propFix[e] || e), (i = Z.propHooks[e])),
                void 0 !== n
                  ? i && 'set' in i && void 0 !== (r = i.set(t, n, e))
                    ? r
                    : (t[e] = n)
                  : i && 'get' in i && null !== (r = i.get(t, e))
                  ? r
                  : t[e]
              )
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                return t.hasAttribute('tabindex') ||
                  re.test(t.nodeName) ||
                  t.href
                  ? t.tabIndex
                  : -1
              },
            },
          },
        }),
        Q.optSelected ||
          (Z.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode
              return e && e.parentNode && e.parentNode.selectedIndex, null
            },
          }),
        Z.each(
          [
            'tabIndex',
            'readOnly',
            'maxLength',
            'cellSpacing',
            'cellPadding',
            'rowSpan',
            'colSpan',
            'useMap',
            'frameBorder',
            'contentEditable',
          ],
          function () {
            Z.propFix[this.toLowerCase()] = this
          }
        )
      var ie = /[\t\r\n\f]/g
      Z.fn.extend({
        addClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            s,
            a = 'string' == typeof t && t,
            u = 0,
            c = this.length
          if (Z.isFunction(t))
            return this.each(function (e) {
              Z(this).addClass(t.call(this, e, this.className))
            })
          if (a)
            for (e = (t || '').match(ft) || []; u < c; u++)
              if (
                ((n = this[u]),
                (r =
                  1 === n.nodeType &&
                  (n.className
                    ? (' ' + n.className + ' ').replace(ie, ' ')
                    : ' ')))
              ) {
                for (o = 0; (i = e[o++]); )
                  r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
                ;(s = Z.trim(r)), n.className !== s && (n.className = s)
              }
          return this
        },
        removeClass: function (t) {
          var e,
            n,
            r,
            i,
            o,
            s,
            a = 0 === arguments.length || ('string' == typeof t && t),
            u = 0,
            c = this.length
          if (Z.isFunction(t))
            return this.each(function (e) {
              Z(this).removeClass(t.call(this, e, this.className))
            })
          if (a)
            for (e = (t || '').match(ft) || []; u < c; u++)
              if (
                ((n = this[u]),
                (r =
                  1 === n.nodeType &&
                  (n.className
                    ? (' ' + n.className + ' ').replace(ie, ' ')
                    : '')))
              ) {
                for (o = 0; (i = e[o++]); )
                  for (; r.indexOf(' ' + i + ' ') >= 0; )
                    r = r.replace(' ' + i + ' ', ' ')
                ;(s = t ? Z.trim(r) : ''),
                  n.className !== s && (n.className = s)
              }
          return this
        },
        toggleClass: function (t, e) {
          var n = typeof t
          return 'boolean' == typeof e && 'string' === n
            ? e
              ? this.addClass(t)
              : this.removeClass(t)
            : Z.isFunction(t)
            ? this.each(function (n) {
                Z(this).toggleClass(t.call(this, n, this.className, e), e)
              })
            : this.each(function () {
                if ('string' === n)
                  for (
                    var e, r = 0, i = Z(this), o = t.match(ft) || [];
                    (e = o[r++]);

                  )
                    i.hasClass(e) ? i.removeClass(e) : i.addClass(e)
                else
                  ('undefined' !== n && 'boolean' !== n) ||
                    (this.className &&
                      vt.set(this, '__className__', this.className),
                    (this.className =
                      this.className || !1 === t
                        ? ''
                        : vt.get(this, '__className__') || ''))
              })
        },
        hasClass: function (t) {
          for (var e = ' ' + t + ' ', n = 0, r = this.length; n < r; n++)
            if (
              1 === this[n].nodeType &&
              (' ' + this[n].className + ' ').replace(ie, ' ').indexOf(e) >= 0
            )
              return !0
          return !1
        },
      })
      var oe = /\r/g
      Z.fn.extend({
        val: function (t) {
          var e,
            n,
            r,
            i = this[0]
          {
            if (arguments.length)
              return (
                (r = Z.isFunction(t)),
                this.each(function (n) {
                  var i
                  1 === this.nodeType &&
                    ((i = r ? t.call(this, n, Z(this).val()) : t),
                    null == i
                      ? (i = '')
                      : 'number' == typeof i
                      ? (i += '')
                      : Z.isArray(i) &&
                        (i = Z.map(i, function (t) {
                          return null == t ? '' : t + ''
                        })),
                    ((e =
                      Z.valHooks[this.type] ||
                      Z.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in e &&
                      void 0 !== e.set(this, i, 'value')) ||
                      (this.value = i))
                })
              )
            if (i)
              return (e =
                Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()]) &&
                'get' in e &&
                void 0 !== (n = e.get(i, 'value'))
                ? n
                : ((n = i.value),
                  'string' == typeof n ? n.replace(oe, '') : null == n ? '' : n)
          }
        },
      }),
        Z.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = Z.find.attr(t, 'value')
                return null != e ? e : Z.trim(Z.text(t))
              },
            },
            select: {
              get: function (t) {
                for (
                  var e,
                    n,
                    r = t.options,
                    i = t.selectedIndex,
                    o = 'select-one' === t.type || i < 0,
                    s = o ? null : [],
                    a = o ? i + 1 : r.length,
                    u = i < 0 ? a : o ? i : 0;
                  u < a;
                  u++
                )
                  if (
                    ((n = r[u]),
                    (n.selected || u === i) &&
                      (Q.optDisabled
                        ? !n.disabled
                        : null === n.getAttribute('disabled')) &&
                      (!n.parentNode.disabled ||
                        !Z.nodeName(n.parentNode, 'optgroup')))
                  ) {
                    if (((e = Z(n).val()), o)) return e
                    s.push(e)
                  }
                return s
              },
              set: function (t, e) {
                for (
                  var n, r, i = t.options, o = Z.makeArray(e), s = i.length;
                  s--;

                )
                  (r = i[s]),
                    (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0)
                return n || (t.selectedIndex = -1), o
              },
            },
          },
        }),
        Z.each(['radio', 'checkbox'], function () {
          ;(Z.valHooks[this] = {
            set: function (t, e) {
              if (Z.isArray(e))
                return (t.checked = Z.inArray(Z(t).val(), e) >= 0)
            },
          }),
            Q.checkOn ||
              (Z.valHooks[this].get = function (t) {
                return null === t.getAttribute('value') ? 'on' : t.value
              })
        }),
        Z.each(
          'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
            ' '
          ),
          function (t, e) {
            Z.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e)
            }
          }
        ),
        Z.fn.extend({
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
          },
          bind: function (t, e, n) {
            return this.on(t, null, e, n)
          },
          unbind: function (t, e) {
            return this.off(t, null, e)
          },
          delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, '**')
              : this.off(e, t || '**', n)
          },
        })
      var se = Z.now(),
        ae = /\?/
      ;(Z.parseJSON = function (t) {
        return JSON.parse(t + '')
      }),
        (Z.parseXML = function (t) {
          var e, n
          if (!t || 'string' != typeof t) return null
          try {
            ;(n = new DOMParser()), (e = n.parseFromString(t, 'text/xml'))
          } catch (t) {
            e = void 0
          }
          return (
            (e && !e.getElementsByTagName('parsererror').length) ||
              Z.error('Invalid XML: ' + t),
            e
          )
        })
      var ue,
        ce,
        le = /#.*$/,
        he = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        de = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        me = {},
        ye = {},
        be = '*/'.concat('*')
      try {
        ce = location.href
      } catch (t) {
        ;(ce = K.createElement('a')), (ce.href = ''), (ce = ce.href)
      }
      ;(ue = ve.exec(ce.toLowerCase()) || []),
        Z.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: ce,
            type: 'GET',
            isLocal: pe.test(ue[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
              '*': be,
              text: 'text/plain',
              html: 'text/html',
              xml: 'application/xml, text/xml',
              json: 'application/json, text/javascript',
            },
            contents: { xml: /xml/, html: /html/, json: /json/ },
            responseFields: {
              xml: 'responseXML',
              text: 'responseText',
              json: 'responseJSON',
            },
            converters: {
              '* text': String,
              'text html': !0,
              'text json': Z.parseJSON,
              'text xml': Z.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? q(q(t, Z.ajaxSettings), e) : q(Z.ajaxSettings, t)
          },
          ajaxPrefilter: I(me),
          ajaxTransport: I(ye),
          ajax: function (t, e) {
            function n(t, e, n, s) {
              var u,
                l,
                m,
                y,
                x,
                T = e
              2 !== b &&
                ((b = 2),
                a && clearTimeout(a),
                (r = void 0),
                (o = s || ''),
                (w.readyState = t > 0 ? 4 : 0),
                (u = (t >= 200 && t < 300) || 304 === t),
                n && (y = F(h, w, n)),
                (y = M(h, y, w, u)),
                u
                  ? (h.ifModified &&
                      ((x = w.getResponseHeader('Last-Modified')),
                      x && (Z.lastModified[i] = x),
                      (x = w.getResponseHeader('etag')) && (Z.etag[i] = x)),
                    204 === t || 'HEAD' === h.type
                      ? (T = 'nocontent')
                      : 304 === t
                      ? (T = 'notmodified')
                      : ((T = y.state), (l = y.data), (m = y.error), (u = !m)))
                  : ((m = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
                (w.status = t),
                (w.statusText = (e || T) + ''),
                u ? d.resolveWith(f, [l, T, w]) : d.rejectWith(f, [w, T, m]),
                w.statusCode(v),
                (v = void 0),
                c &&
                  p.trigger(u ? 'ajaxSuccess' : 'ajaxError', [w, h, u ? l : m]),
                g.fireWith(f, [w, T]),
                c &&
                  (p.trigger('ajaxComplete', [w, h]),
                  --Z.active || Z.event.trigger('ajaxStop')))
            }
            'object' == typeof t && ((e = t), (t = void 0)), (e = e || {})
            var r,
              i,
              o,
              s,
              a,
              u,
              c,
              l,
              h = Z.ajaxSetup({}, e),
              f = h.context || h,
              p = h.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
              d = Z.Deferred(),
              g = Z.Callbacks('once memory'),
              v = h.statusCode || {},
              m = {},
              y = {},
              b = 0,
              x = 'canceled',
              w = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e
                  if (2 === b) {
                    if (!s)
                      for (s = {}; (e = fe.exec(o)); )
                        s[e[1].toLowerCase()] = e[2]
                    e = s[t.toLowerCase()]
                  }
                  return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                  return 2 === b ? o : null
                },
                setRequestHeader: function (t, e) {
                  var n = t.toLowerCase()
                  return b || ((t = y[n] = y[n] || t), (m[t] = e)), this
                },
                overrideMimeType: function (t) {
                  return b || (h.mimeType = t), this
                },
                statusCode: function (t) {
                  var e
                  if (t)
                    if (b < 2) for (e in t) v[e] = [v[e], t[e]]
                    else w.always(t[w.status])
                  return this
                },
                abort: function (t) {
                  var e = t || x
                  return r && r.abort(e), n(0, e), this
                },
              }
            if (
              ((d.promise(w).complete = g.add),
              (w.success = w.done),
              (w.error = w.fail),
              (h.url = ((t || h.url || ce) + '')
                .replace(le, '')
                .replace(ge, ue[1] + '//')),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = Z.trim(h.dataType || '*')
                .toLowerCase()
                .match(ft) || ['']),
              null == h.crossDomain &&
                ((u = ve.exec(h.url.toLowerCase())),
                (h.crossDomain = !(
                  !u ||
                  (u[1] === ue[1] &&
                    u[2] === ue[2] &&
                    (u[3] || ('http:' === u[1] ? '80' : '443')) ===
                      (ue[3] || ('http:' === ue[1] ? '80' : '443')))
                ))),
              h.data &&
                h.processData &&
                'string' != typeof h.data &&
                (h.data = Z.param(h.data, h.traditional)),
              P(me, h, e, w),
              2 === b)
            )
              return w
            ;(c = h.global),
              c && 0 == Z.active++ && Z.event.trigger('ajaxStart'),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !de.test(h.type)),
              (i = h.url),
              h.hasContent ||
                (h.data &&
                  ((i = h.url += (ae.test(i) ? '&' : '?') + h.data),
                  delete h.data),
                !1 === h.cache &&
                  (h.url = he.test(i)
                    ? i.replace(he, '$1_=' + se++)
                    : i + (ae.test(i) ? '&' : '?') + '_=' + se++)),
              h.ifModified &&
                (Z.lastModified[i] &&
                  w.setRequestHeader('If-Modified-Since', Z.lastModified[i]),
                Z.etag[i] && w.setRequestHeader('If-None-Match', Z.etag[i])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                e.contentType) &&
                w.setRequestHeader('Content-Type', h.contentType),
              w.setRequestHeader(
                'Accept',
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ('*' !== h.dataTypes[0] ? ', ' + be + '; q=0.01' : '')
                  : h.accepts['*']
              )
            for (l in h.headers) w.setRequestHeader(l, h.headers[l])
            if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || 2 === b))
              return w.abort()
            x = 'abort'
            for (l in { success: 1, error: 1, complete: 1 }) w[l](h[l])
            if ((r = P(ye, h, e, w))) {
              ;(w.readyState = 1),
                c && p.trigger('ajaxSend', [w, h]),
                h.async &&
                  h.timeout > 0 &&
                  (a = setTimeout(function () {
                    w.abort('timeout')
                  }, h.timeout))
              try {
                ;(b = 1), r.send(m, n)
              } catch (t) {
                if (!(b < 2)) throw t
                n(-1, t)
              }
            } else n(-1, 'No Transport')
            return w
          },
          getJSON: function (t, e, n) {
            return Z.get(t, e, n, 'json')
          },
          getScript: function (t, e) {
            return Z.get(t, void 0, e, 'script')
          },
        }),
        Z.each(['get', 'post'], function (t, e) {
          Z[e] = function (t, n, r, i) {
            return (
              Z.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
              Z.ajax({ url: t, type: e, dataType: i, data: n, success: r })
            )
          }
        }),
        Z.each(
          [
            'ajaxStart',
            'ajaxStop',
            'ajaxComplete',
            'ajaxError',
            'ajaxSuccess',
            'ajaxSend',
          ],
          function (t, e) {
            Z.fn[e] = function (t) {
              return this.on(e, t)
            }
          }
        ),
        (Z._evalUrl = function (t) {
          return Z.ajax({
            url: t,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            throws: !0,
          })
        }),
        Z.fn.extend({
          wrapAll: function (t) {
            var e
            return Z.isFunction(t)
              ? this.each(function (e) {
                  Z(this).wrapAll(t.call(this, e))
                })
              : (this[0] &&
                  ((e = Z(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild
                      return t
                    })
                    .append(this)),
                this)
          },
          wrapInner: function (t) {
            return Z.isFunction(t)
              ? this.each(function (e) {
                  Z(this).wrapInner(t.call(this, e))
                })
              : this.each(function () {
                  var e = Z(this),
                    n = e.contents()
                  n.length ? n.wrapAll(t) : e.append(t)
                })
          },
          wrap: function (t) {
            var e = Z.isFunction(t)
            return this.each(function (n) {
              Z(this).wrapAll(e ? t.call(this, n) : t)
            })
          },
          unwrap: function () {
            return this.parent()
              .each(function () {
                Z.nodeName(this, 'body') || Z(this).replaceWith(this.childNodes)
              })
              .end()
          },
        }),
        (Z.expr.filters.hidden = function (t) {
          return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }),
        (Z.expr.filters.visible = function (t) {
          return !Z.expr.filters.hidden(t)
        })
      var xe = /%20/g,
        we = /\[\]$/,
        Te = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        _e = /^(?:input|select|textarea|keygen)/i
      ;(Z.param = function (t, e) {
        var n,
          r = [],
          i = function (t, e) {
            ;(e = Z.isFunction(e) ? e() : null == e ? '' : e),
              (r[r.length] =
                encodeURIComponent(t) + '=' + encodeURIComponent(e))
          }
        if (
          (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional),
          Z.isArray(t) || (t.jquery && !Z.isPlainObject(t)))
        )
          Z.each(t, function () {
            i(this.name, this.value)
          })
        else for (n in t) $(n, t[n], e, i)
        return r.join('&').replace(xe, '+')
      }),
        Z.fn.extend({
          serialize: function () {
            return Z.param(this.serializeArray())
          },
          serializeArray: function () {
            return this.map(function () {
              var t = Z.prop(this, 'elements')
              return t ? Z.makeArray(t) : this
            })
              .filter(function () {
                var t = this.type
                return (
                  this.name &&
                  !Z(this).is(':disabled') &&
                  _e.test(this.nodeName) &&
                  !Ee.test(t) &&
                  (this.checked || !Et.test(t))
                )
              })
              .map(function (t, e) {
                var n = Z(this).val()
                return null == n
                  ? null
                  : Z.isArray(n)
                  ? Z.map(n, function (t) {
                      return { name: e.name, value: t.replace(Te, '\r\n') }
                    })
                  : { name: e.name, value: n.replace(Te, '\r\n') }
              })
              .get()
          },
        }),
        (Z.ajaxSettings.xhr = function () {
          try {
            return new XMLHttpRequest()
          } catch (t) {}
        })
      var Ce = 0,
        Se = {},
        ke = { 0: 200, 1223: 204 },
        Ne = Z.ajaxSettings.xhr()
      t.ActiveXObject &&
        Z(t).on('unload', function () {
          for (var t in Se) Se[t]()
        }),
        (Q.cors = !!Ne && 'withCredentials' in Ne),
        (Q.ajax = Ne = !!Ne),
        Z.ajaxTransport(function (t) {
          var e
          if (Q.cors || (Ne && !t.crossDomain))
            return {
              send: function (n, r) {
                var i,
                  o = t.xhr(),
                  s = ++Ce
                if (
                  (o.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (i in t.xhrFields) o[i] = t.xhrFields[i]
                t.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    n['X-Requested-With'] ||
                    (n['X-Requested-With'] = 'XMLHttpRequest')
                for (i in n) o.setRequestHeader(i, n[i])
                ;(e = function (t) {
                  return function () {
                    e &&
                      (delete Se[s],
                      (e = o.onload = o.onerror = null),
                      'abort' === t
                        ? o.abort()
                        : 'error' === t
                        ? r(o.status, o.statusText)
                        : r(
                            ke[o.status] || o.status,
                            o.statusText,
                            'string' == typeof o.responseText
                              ? { text: o.responseText }
                              : void 0,
                            o.getAllResponseHeaders()
                          ))
                  }
                }),
                  (o.onload = e()),
                  (o.onerror = e('error')),
                  (e = Se[s] = e('abort'))
                try {
                  o.send((t.hasContent && t.data) || null)
                } catch (t) {
                  if (e) throw t
                }
              },
              abort: function () {
                e && e()
              },
            }
        }),
        Z.ajaxSetup({
          accepts: {
            script:
              'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
          },
          contents: { script: /(?:java|ecma)script/ },
          converters: {
            'text script': function (t) {
              return Z.globalEval(t), t
            },
          },
        }),
        Z.ajaxPrefilter('script', function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = 'GET')
        }),
        Z.ajaxTransport('script', function (t) {
          if (t.crossDomain) {
            var e, n
            return {
              send: function (r, i) {
                ;(e = Z('<script>')
                  .prop({ async: !0, charset: t.scriptCharset, src: t.url })
                  .on(
                    'load error',
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && i('error' === t.type ? 404 : 200, t.type)
                    })
                  )),
                  K.head.appendChild(e[0])
              },
              abort: function () {
                n && n()
              },
            }
          }
        })
      var Ae = [],
        je = /(=)\?(?=&|$)|\?\?/
      Z.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
          var t = Ae.pop() || Z.expando + '_' + se++
          return (this[t] = !0), t
        },
      }),
        Z.ajaxPrefilter('json jsonp', function (e, n, r) {
          var i,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (je.test(e.url)
                ? 'url'
                : 'string' == typeof e.data &&
                  !(e.contentType || '').indexOf(
                    'application/x-www-form-urlencoded'
                  ) &&
                  je.test(e.data) &&
                  'data')
          if (a || 'jsonp' === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                Z.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(je, '$1' + i))
                : !1 !== e.jsonp &&
                  (e.url += (ae.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
              (e.converters['script json'] = function () {
                return s || Z.error(i + ' was not called'), s[0]
              }),
              (e.dataTypes[0] = 'json'),
              (o = t[i]),
              (t[i] = function () {
                s = arguments
              }),
              r.always(function () {
                ;(t[i] = o),
                  e[i] && ((e.jsonpCallback = n.jsonpCallback), Ae.push(i)),
                  s && Z.isFunction(o) && o(s[0]),
                  (s = o = void 0)
              }),
              'script'
            )
        }),
        (Z.parseHTML = function (t, e, n) {
          if (!t || 'string' != typeof t) return null
          'boolean' == typeof e && ((n = e), (e = !1)), (e = e || K)
          var r = st.exec(t),
            i = !n && []
          return r
            ? [e.createElement(r[1])]
            : ((r = Z.buildFragment([t], e, i)),
              i && i.length && Z(i).remove(),
              Z.merge([], r.childNodes))
        })
      var De = Z.fn.load
      ;(Z.fn.load = function (t, e, n) {
        if ('string' != typeof t && De) return De.apply(this, arguments)
        var r,
          i,
          o,
          s = this,
          a = t.indexOf(' ')
        return (
          a >= 0 && ((r = Z.trim(t.slice(a))), (t = t.slice(0, a))),
          Z.isFunction(e)
            ? ((n = e), (e = void 0))
            : e && 'object' == typeof e && (i = 'POST'),
          s.length > 0 &&
            Z.ajax({ url: t, type: i, dataType: 'html', data: e })
              .done(function (t) {
                ;(o = arguments),
                  s.html(r ? Z('<div>').append(Z.parseHTML(t)).find(r) : t)
              })
              .complete(
                n &&
                  function (t, e) {
                    s.each(n, o || [t.responseText, e, t])
                  }
              ),
          this
        )
      }),
        (Z.expr.filters.animated = function (t) {
          return Z.grep(Z.timers, function (e) {
            return t === e.elem
          }).length
        })
      var He = t.document.documentElement
      ;(Z.offset = {
        setOffset: function (t, e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l = Z.css(t, 'position'),
            h = Z(t),
            f = {}
          'static' === l && (t.style.position = 'relative'),
            (a = h.offset()),
            (o = Z.css(t, 'top')),
            (u = Z.css(t, 'left')),
            (c =
              ('absolute' === l || 'fixed' === l) &&
              (o + u).indexOf('auto') > -1),
            c
              ? ((r = h.position()), (s = r.top), (i = r.left))
              : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
            Z.isFunction(e) && (e = e.call(t, n, a)),
            null != e.top && (f.top = e.top - a.top + s),
            null != e.left && (f.left = e.left - a.left + i),
            'using' in e ? e.using.call(t, f) : h.css(f)
        },
      }),
        Z.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    Z.offset.setOffset(this, t, e)
                  })
            var e,
              n,
              r = this[0],
              i = { top: 0, left: 0 },
              o = r && r.ownerDocument
            if (o)
              return (
                (e = o.documentElement),
                Z.contains(e, r)
                  ? (void 0 !== r.getBoundingClientRect &&
                      (i = r.getBoundingClientRect()),
                    (n = B(o)),
                    {
                      top: i.top + n.pageYOffset - e.clientTop,
                      left: i.left + n.pageXOffset - e.clientLeft,
                    })
                  : i
              )
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n = this[0],
                r = { top: 0, left: 0 }
              return (
                'fixed' === Z.css(n, 'position')
                  ? (e = n.getBoundingClientRect())
                  : ((t = this.offsetParent()),
                    (e = this.offset()),
                    Z.nodeName(t[0], 'html') || (r = t.offset()),
                    (r.top += Z.css(t[0], 'borderTopWidth', !0)),
                    (r.left += Z.css(t[0], 'borderLeftWidth', !0))),
                {
                  top: e.top - r.top - Z.css(n, 'marginTop', !0),
                  left: e.left - r.left - Z.css(n, 'marginLeft', !0),
                }
              )
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent || He;
                t &&
                !Z.nodeName(t, 'html') &&
                'static' === Z.css(t, 'position');

              )
                t = t.offsetParent
              return t || He
            })
          },
        }),
        Z.each(
          { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
          function (e, n) {
            var r = 'pageYOffset' === n
            Z.fn[e] = function (i) {
              return gt(
                this,
                function (e, i, o) {
                  var s = B(e)
                  if (void 0 === o) return s ? s[n] : e[i]
                  s
                    ? s.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset)
                    : (e[i] = o)
                },
                e,
                i,
                arguments.length,
                null
              )
            }
          }
        ),
        Z.each(['top', 'left'], function (t, e) {
          Z.cssHooks[e] = E(Q.pixelPosition, function (t, n) {
            if (n)
              return (n = T(t, e)), Mt.test(n) ? Z(t).position()[e] + 'px' : n
          })
        }),
        Z.each({ Height: 'height', Width: 'width' }, function (t, e) {
          Z.each(
            { padding: 'inner' + t, content: e, '': 'outer' + t },
            function (n, r) {
              Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || 'boolean' != typeof r),
                  s = n || (!0 === r || !0 === i ? 'margin' : 'border')
                return gt(
                  this,
                  function (e, n, r) {
                    var i
                    return Z.isWindow(e)
                      ? e.document.documentElement['client' + t]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body['scroll' + t],
                          i['scroll' + t],
                          e.body['offset' + t],
                          i['offset' + t],
                          i['client' + t]
                        ))
                      : void 0 === r
                      ? Z.css(e, n, s)
                      : Z.style(e, n, r, s)
                  },
                  e,
                  o ? r : void 0,
                  o,
                  null
                )
              }
            }
          )
        }),
        (Z.fn.size = function () {
          return this.length
        }),
        (Z.fn.andSelf = Z.fn.addBack),
        (e = (function () {
          return Z
        })())
      var Re = t.jQuery,
        Oe = t.$
      return (
        (Z.noConflict = function (e) {
          return (
            t.$ === Z && (t.$ = Oe), e && t.jQuery === Z && (t.jQuery = Re), Z
          )
        }),
        void 0 === n && (t.jQuery = t.$ = Z),
        Z
      )
    }),
    (function (r, i) {
      n = (function (t, e, n) {
        return (r.Backbone = i(r, n, t, e)), n
      })(t, e, {})
    })(this, function (t, e, n, r) {
      var i = t.Backbone,
        o = [],
        s = o.slice
      ;(e.VERSION = '1.1.2'),
        (e.$ = r),
        (e.noConflict = function () {
          return (t.Backbone = i), this
        }),
        (e.emulateHTTP = !1),
        (e.emulateJSON = !1)
      var a = (e.Events = {
          on: function (t, e, n) {
            return c(this, 'on', t, [e, n]) && e
              ? (this._events || (this._events = {}),
                (this._events[t] || (this._events[t] = [])).push({
                  callback: e,
                  context: n,
                  ctx: n || this,
                }),
                this)
              : this
          },
          once: function (t, e, r) {
            if (!c(this, 'once', t, [e, r]) || !e) return this
            var i = this,
              o = n.once(function () {
                i.off(t, o), e.apply(this, arguments)
              })
            return (o._callback = e), this.on(t, o, r)
          },
          off: function (t, e, r) {
            var i, o, s, a, u, l, h, f
            if (!this._events || !c(this, 'off', t, [e, r])) return this
            if (!t && !e && !r) return (this._events = void 0), this
            for (
              a = t ? [t] : n.keys(this._events), u = 0, l = a.length;
              u < l;
              u++
            )
              if (((t = a[u]), (s = this._events[t]))) {
                if (((this._events[t] = i = []), e || r))
                  for (h = 0, f = s.length; h < f; h++)
                    (o = s[h]),
                      ((e && e !== o.callback && e !== o.callback._callback) ||
                        (r && r !== o.context)) &&
                        i.push(o)
                i.length || delete this._events[t]
              }
            return this
          },
          trigger: function (t) {
            if (!this._events) return this
            var e = s.call(arguments, 1)
            if (!c(this, 'trigger', t, e)) return this
            var n = this._events[t],
              r = this._events.all
            return n && l(n, e), r && l(r, arguments), this
          },
          stopListening: function (t, e, r) {
            var i = this._listeningTo
            if (!i) return this
            var o = !e && !r
            r || 'object' != typeof e || (r = this),
              t && ((i = {})[t._listenId] = t)
            for (var s in i)
              (t = i[s]),
                t.off(e, r, this),
                (o || n.isEmpty(t._events)) && delete this._listeningTo[s]
            return this
          },
        }),
        u = /\s+/,
        c = function (t, e, n, r) {
          if (!n) return !0
          if ('object' == typeof n) {
            for (var i in n) t[e].apply(t, [i, n[i]].concat(r))
            return !1
          }
          if (u.test(n)) {
            for (var o = n.split(u), s = 0, a = o.length; s < a; s++)
              t[e].apply(t, [o[s]].concat(r))
            return !1
          }
          return !0
        },
        l = function (t, e) {
          var n,
            r = -1,
            i = t.length,
            o = e[0],
            s = e[1],
            a = e[2]
          switch (e.length) {
            case 0:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx)
              return
            case 1:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o)
              return
            case 2:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, s)
              return
            case 3:
              for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, s, a)
              return
            default:
              for (; ++r < i; ) (n = t[r]).callback.apply(n.ctx, e)
              return
          }
        },
        h = { listenTo: 'on', listenToOnce: 'once' }
      n.each(h, function (t, e) {
        a[e] = function (e, r, i) {
          return (
            ((this._listeningTo || (this._listeningTo = {}))[
              e._listenId || (e._listenId = n.uniqueId('l'))
            ] = e),
            i || 'object' != typeof r || (i = this),
            e[t](r, i, this),
            this
          )
        }
      }),
        (a.bind = a.on),
        (a.unbind = a.off),
        n.extend(e, a)
      var f = (e.Model = function (t, e) {
        var r = t || {}
        e || (e = {}),
          (this.cid = n.uniqueId('c')),
          (this.attributes = {}),
          e.collection && (this.collection = e.collection),
          e.parse && (r = this.parse(r, e) || {}),
          (r = n.defaults({}, r, n.result(this, 'defaults'))),
          this.set(r, e),
          (this.changed = {}),
          this.initialize.apply(this, arguments)
      })
      n.extend(f.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: 'id',
        initialize: function () {},
        toJSON: function (t) {
          return n.clone(this.attributes)
        },
        sync: function () {
          return e.sync.apply(this, arguments)
        },
        get: function (t) {
          return this.attributes[t]
        },
        escape: function (t) {
          return n.escape(this.get(t))
        },
        has: function (t) {
          return null != this.get(t)
        },
        set: function (t, e, r) {
          var i, o, s, a, u, c, l, h
          if (null == t) return this
          if (
            ('object' == typeof t ? ((o = t), (r = e)) : ((o = {})[t] = e),
            r || (r = {}),
            !this._validate(o, r))
          )
            return !1
          ;(s = r.unset),
            (u = r.silent),
            (a = []),
            (c = this._changing),
            (this._changing = !0),
            c ||
              ((this._previousAttributes = n.clone(this.attributes)),
              (this.changed = {})),
            (h = this.attributes),
            (l = this._previousAttributes),
            this.idAttribute in o && (this.id = o[this.idAttribute])
          for (i in o)
            (e = o[i]),
              n.isEqual(h[i], e) || a.push(i),
              n.isEqual(l[i], e)
                ? delete this.changed[i]
                : (this.changed[i] = e),
              s ? delete h[i] : (h[i] = e)
          if (!u) {
            a.length && (this._pending = r)
            for (var f = 0, p = a.length; f < p; f++)
              this.trigger('change:' + a[f], this, h[a[f]], r)
          }
          if (c) return this
          if (!u)
            for (; this._pending; )
              (r = this._pending),
                (this._pending = !1),
                this.trigger('change', this, r)
          return (this._pending = !1), (this._changing = !1), this
        },
        unset: function (t, e) {
          return this.set(t, void 0, n.extend({}, e, { unset: !0 }))
        },
        clear: function (t) {
          var e = {}
          for (var r in this.attributes) e[r] = void 0
          return this.set(e, n.extend({}, t, { unset: !0 }))
        },
        hasChanged: function (t) {
          return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
        },
        changedAttributes: function (t) {
          if (!t) return !!this.hasChanged() && n.clone(this.changed)
          var e,
            r = !1,
            i = this._changing ? this._previousAttributes : this.attributes
          for (var o in t)
            n.isEqual(i[o], (e = t[o])) || ((r || (r = {}))[o] = e)
          return r
        },
        previous: function (t) {
          return null != t && this._previousAttributes
            ? this._previousAttributes[t]
            : null
        },
        previousAttributes: function () {
          return n.clone(this._previousAttributes)
        },
        fetch: function (t) {
          ;(t = t ? n.clone(t) : {}), void 0 === t.parse && (t.parse = !0)
          var e = this,
            r = t.success
          return (
            (t.success = function (n) {
              if (!e.set(e.parse(n, t), t)) return !1
              r && r(e, n, t), e.trigger('sync', e, n, t)
            }),
            P(this, t),
            this.sync('read', this, t)
          )
        },
        save: function (t, e, r) {
          var i,
            o,
            s,
            a = this.attributes
          if (
            (null == t || 'object' == typeof t
              ? ((i = t), (r = e))
              : ((i = {})[t] = e),
            (r = n.extend({ validate: !0 }, r)),
            i && !r.wait)
          ) {
            if (!this.set(i, r)) return !1
          } else if (!this._validate(i, r)) return !1
          i && r.wait && (this.attributes = n.extend({}, a, i)),
            void 0 === r.parse && (r.parse = !0)
          var u = this,
            c = r.success
          return (
            (r.success = function (t) {
              u.attributes = a
              var e = u.parse(t, r)
              if (
                (r.wait && (e = n.extend(i || {}, e)),
                n.isObject(e) && !u.set(e, r))
              )
                return !1
              c && c(u, t, r), u.trigger('sync', u, t, r)
            }),
            P(this, r),
            (o = this.isNew() ? 'create' : r.patch ? 'patch' : 'update'),
            'patch' === o && (r.attrs = i),
            (s = this.sync(o, this, r)),
            i && r.wait && (this.attributes = a),
            s
          )
        },
        destroy: function (t) {
          t = t ? n.clone(t) : {}
          var e = this,
            r = t.success,
            i = function () {
              e.trigger('destroy', e, e.collection, t)
            }
          if (
            ((t.success = function (n) {
              ;(t.wait || e.isNew()) && i(),
                r && r(e, n, t),
                e.isNew() || e.trigger('sync', e, n, t)
            }),
            this.isNew())
          )
            return t.success(), !1
          P(this, t)
          var o = this.sync('delete', this, t)
          return t.wait || i(), o
        },
        url: function () {
          var t =
            n.result(this, 'urlRoot') || n.result(this.collection, 'url') || I()
          return this.isNew()
            ? t
            : t.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id)
        },
        parse: function (t, e) {
          return t
        },
        clone: function () {
          return new this.constructor(this.attributes)
        },
        isNew: function () {
          return !this.has(this.idAttribute)
        },
        isValid: function (t) {
          return this._validate({}, n.extend(t || {}, { validate: !0 }))
        },
        _validate: function (t, e) {
          if (!e.validate || !this.validate) return !0
          t = n.extend({}, this.attributes, t)
          var r = (this.validationError = this.validate(t, e) || null)
          return (
            !r ||
            (this.trigger(
              'invalid',
              this,
              r,
              n.extend(e, { validationError: r })
            ),
            !1)
          )
        },
      })
      var p = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit']
      n.each(p, function (t) {
        f.prototype[t] = function () {
          var e = s.call(arguments)
          return e.unshift(this.attributes), n[t].apply(n, e)
        }
      })
      var d = (e.Collection = function (t, e) {
          e || (e = {}),
            e.model && (this.model = e.model),
            void 0 !== e.comparator && (this.comparator = e.comparator),
            this._reset(),
            this.initialize.apply(this, arguments),
            t && this.reset(t, n.extend({ silent: !0 }, e))
        }),
        g = { add: !0, remove: !0, merge: !0 },
        v = { add: !0, remove: !1 }
      n.extend(d.prototype, a, {
        model: f,
        initialize: function () {},
        toJSON: function (t) {
          return this.map(function (e) {
            return e.toJSON(t)
          })
        },
        sync: function () {
          return e.sync.apply(this, arguments)
        },
        add: function (t, e) {
          return this.set(t, n.extend({ merge: !1 }, e, v))
        },
        remove: function (t, e) {
          var r = !n.isArray(t)
          ;(t = r ? [t] : n.clone(t)), e || (e = {})
          var i, o, s, a
          for (i = 0, o = t.length; i < o; i++)
            (a = t[i] = this.get(t[i])) &&
              (delete this._byId[a.id],
              delete this._byId[a.cid],
              (s = this.indexOf(a)),
              this.models.splice(s, 1),
              this.length--,
              e.silent || ((e.index = s), a.trigger('remove', a, this, e)),
              this._removeReference(a, e))
          return r ? t[0] : t
        },
        set: function (t, e) {
          ;(e = n.defaults({}, e, g)), e.parse && (t = this.parse(t, e))
          var r = !n.isArray(t)
          t = r ? (t ? [t] : []) : n.clone(t)
          var i,
            o,
            s,
            a,
            u,
            c,
            l,
            h = e.at,
            p = this.model,
            d = this.comparator && null == h && !1 !== e.sort,
            v = n.isString(this.comparator) ? this.comparator : null,
            m = [],
            y = [],
            b = {},
            x = e.add,
            w = e.merge,
            T = e.remove,
            E = !(d || !x || !T) && []
          for (i = 0, o = t.length; i < o; i++) {
            if (
              ((u = t[i] || {}),
              (s =
                u instanceof f ? (a = u) : u[p.prototype.idAttribute || 'id']),
              (c = this.get(s)))
            )
              T && (b[c.cid] = !0),
                w &&
                  ((u = u === a ? a.attributes : u),
                  e.parse && (u = c.parse(u, e)),
                  c.set(u, e),
                  d && !l && c.hasChanged(v) && (l = !0)),
                (t[i] = c)
            else if (x) {
              if (!(a = t[i] = this._prepareModel(u, e))) continue
              m.push(a), this._addReference(a, e)
            }
            ;(a = c || a),
              !E || (!a.isNew() && b[a.id]) || E.push(a),
              (b[a.id] = !0)
          }
          if (T) {
            for (i = 0, o = this.length; i < o; ++i)
              b[(a = this.models[i]).cid] || y.push(a)
            y.length && this.remove(y, e)
          }
          if (m.length || (E && E.length))
            if ((d && (l = !0), (this.length += m.length), null != h))
              for (i = 0, o = m.length; i < o; i++)
                this.models.splice(h + i, 0, m[i])
            else {
              E && (this.models.length = 0)
              var _ = E || m
              for (i = 0, o = _.length; i < o; i++) this.models.push(_[i])
            }
          if ((l && this.sort({ silent: !0 }), !e.silent)) {
            for (i = 0, o = m.length; i < o; i++)
              (a = m[i]).trigger('add', a, this, e)
            ;(l || (E && E.length)) && this.trigger('sort', this, e)
          }
          return r ? t[0] : t
        },
        reset: function (t, e) {
          e || (e = {})
          for (var r = 0, i = this.models.length; r < i; r++)
            this._removeReference(this.models[r], e)
          return (
            (e.previousModels = this.models),
            this._reset(),
            (t = this.add(t, n.extend({ silent: !0 }, e))),
            e.silent || this.trigger('reset', this, e),
            t
          )
        },
        push: function (t, e) {
          return this.add(t, n.extend({ at: this.length }, e))
        },
        pop: function (t) {
          var e = this.at(this.length - 1)
          return this.remove(e, t), e
        },
        unshift: function (t, e) {
          return this.add(t, n.extend({ at: 0 }, e))
        },
        shift: function (t) {
          var e = this.at(0)
          return this.remove(e, t), e
        },
        slice: function () {
          return s.apply(this.models, arguments)
        },
        get: function (t) {
          if (null != t)
            return this._byId[t] || this._byId[t.id] || this._byId[t.cid]
        },
        at: function (t) {
          return this.models[t]
        },
        where: function (t, e) {
          return n.isEmpty(t)
            ? e
              ? void 0
              : []
            : this[e ? 'find' : 'filter'](function (e) {
                for (var n in t) if (t[n] !== e.get(n)) return !1
                return !0
              })
        },
        findWhere: function (t) {
          return this.where(t, !0)
        },
        sort: function (t) {
          if (!this.comparator)
            throw new Error('Cannot sort a set without a comparator')
          return (
            t || (t = {}),
            n.isString(this.comparator) || 1 === this.comparator.length
              ? (this.models = this.sortBy(this.comparator, this))
              : this.models.sort(n.bind(this.comparator, this)),
            t.silent || this.trigger('sort', this, t),
            this
          )
        },
        pluck: function (t) {
          return n.invoke(this.models, 'get', t)
        },
        fetch: function (t) {
          ;(t = t ? n.clone(t) : {}), void 0 === t.parse && (t.parse = !0)
          var e = t.success,
            r = this
          return (
            (t.success = function (n) {
              var i = t.reset ? 'reset' : 'set'
              r[i](n, t), e && e(r, n, t), r.trigger('sync', r, n, t)
            }),
            P(this, t),
            this.sync('read', this, t)
          )
        },
        create: function (t, e) {
          if (((e = e ? n.clone(e) : {}), !(t = this._prepareModel(t, e))))
            return !1
          e.wait || this.add(t, e)
          var r = this,
            i = e.success
          return (
            (e.success = function (t, n) {
              e.wait && r.add(t, e), i && i(t, n, e)
            }),
            t.save(null, e),
            t
          )
        },
        parse: function (t, e) {
          return t
        },
        clone: function () {
          return new this.constructor(this.models)
        },
        _reset: function () {
          ;(this.length = 0), (this.models = []), (this._byId = {})
        },
        _prepareModel: function (t, e) {
          if (t instanceof f) return t
          ;(e = e ? n.clone(e) : {}), (e.collection = this)
          var r = new this.model(t, e)
          return r.validationError
            ? (this.trigger('invalid', this, r.validationError, e), !1)
            : r
        },
        _addReference: function (t, e) {
          ;(this._byId[t.cid] = t),
            null != t.id && (this._byId[t.id] = t),
            t.collection || (t.collection = this),
            t.on('all', this._onModelEvent, this)
        },
        _removeReference: function (t, e) {
          this === t.collection && delete t.collection,
            t.off('all', this._onModelEvent, this)
        },
        _onModelEvent: function (t, e, n, r) {
          ;(('add' !== t && 'remove' !== t) || n === this) &&
            ('destroy' === t && this.remove(e, r),
            e &&
              t === 'change:' + e.idAttribute &&
              (delete this._byId[e.previous(e.idAttribute)],
              null != e.id && (this._byId[e.id] = e)),
            this.trigger.apply(this, arguments))
        },
      })
      var m = [
        'forEach',
        'each',
        'map',
        'collect',
        'reduce',
        'foldl',
        'inject',
        'reduceRight',
        'foldr',
        'find',
        'detect',
        'filter',
        'select',
        'reject',
        'every',
        'all',
        'some',
        'any',
        'include',
        'contains',
        'invoke',
        'max',
        'min',
        'toArray',
        'size',
        'first',
        'head',
        'take',
        'initial',
        'rest',
        'tail',
        'drop',
        'last',
        'without',
        'difference',
        'indexOf',
        'shuffle',
        'lastIndexOf',
        'isEmpty',
        'chain',
        'sample',
      ]
      n.each(m, function (t) {
        d.prototype[t] = function () {
          var e = s.call(arguments)
          return e.unshift(this.models), n[t].apply(n, e)
        }
      })
      var y = ['groupBy', 'countBy', 'sortBy', 'indexBy']
      n.each(y, function (t) {
        d.prototype[t] = function (e, r) {
          var i = n.isFunction(e)
            ? e
            : function (t) {
                return t.get(e)
              }
          return n[t](this.models, i, r)
        }
      })
      var b = (e.View = function (t) {
          ;(this.cid = n.uniqueId('view')),
            t || (t = {}),
            n.extend(this, n.pick(t, w)),
            this._ensureElement(),
            this.initialize.apply(this, arguments),
            this.delegateEvents()
        }),
        x = /^(\S+)\s*(.*)$/,
        w = [
          'model',
          'collection',
          'el',
          'id',
          'attributes',
          'className',
          'tagName',
          'events',
        ]
      n.extend(b.prototype, a, {
        tagName: 'div',
        $: function (t) {
          return this.$el.find(t)
        },
        initialize: function () {},
        render: function () {
          return this
        },
        remove: function () {
          return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (t, n) {
          return (
            this.$el && this.undelegateEvents(),
            (this.$el = t instanceof e.$ ? t : e.$(t)),
            (this.el = this.$el[0]),
            !1 !== n && this.delegateEvents(),
            this
          )
        },
        delegateEvents: function (t) {
          if (!t && !(t = n.result(this, 'events'))) return this
          this.undelegateEvents()
          for (var e in t) {
            var r = t[e]
            if ((n.isFunction(r) || (r = this[t[e]]), r)) {
              var i = e.match(x),
                o = i[1],
                s = i[2]
              ;(r = n.bind(r, this)),
                (o += '.delegateEvents' + this.cid),
                '' === s ? this.$el.on(o, r) : this.$el.on(o, s, r)
            }
          }
          return this
        },
        undelegateEvents: function () {
          return this.$el.off('.delegateEvents' + this.cid), this
        },
        _ensureElement: function () {
          if (this.el) this.setElement(n.result(this, 'el'), !1)
          else {
            var t = n.extend({}, n.result(this, 'attributes'))
            this.id && (t.id = n.result(this, 'id')),
              this.className && (t.class = n.result(this, 'className'))
            var r = e.$('<' + n.result(this, 'tagName') + '>').attr(t)
            this.setElement(r, !1)
          }
        },
      }),
        (e.sync = function (t, r, i) {
          var o = E[t]
          n.defaults(i || (i = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON,
          })
          var s = { type: o, dataType: 'json' }
          if (
            (i.url || (s.url = n.result(r, 'url') || I()),
            null != i.data ||
              !r ||
              ('create' !== t && 'update' !== t && 'patch' !== t) ||
              ((s.contentType = 'application/json'),
              (s.data = JSON.stringify(i.attrs || r.toJSON(i)))),
            i.emulateJSON &&
              ((s.contentType = 'application/x-www-form-urlencoded'),
              (s.data = s.data ? { model: s.data } : {})),
            i.emulateHTTP && ('PUT' === o || 'DELETE' === o || 'PATCH' === o))
          ) {
            ;(s.type = 'POST'), i.emulateJSON && (s.data._method = o)
            var a = i.beforeSend
            i.beforeSend = function (t) {
              if ((t.setRequestHeader('X-HTTP-Method-Override', o), a))
                return a.apply(this, arguments)
            }
          }
          'GET' === s.type || i.emulateJSON || (s.processData = !1),
            'PATCH' === s.type &&
              T &&
              (s.xhr = function () {
                return new ActiveXObject('Microsoft.XMLHTTP')
              })
          var u = (i.xhr = e.ajax(n.extend(s, i)))
          return r.trigger('request', r, u, i), u
        })
      var T = !(
          'undefined' == typeof window ||
          !window.ActiveXObject ||
          (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
        ),
        E = {
          create: 'POST',
          update: 'PUT',
          patch: 'PATCH',
          delete: 'DELETE',
          read: 'GET',
        }
      e.ajax = function () {
        return e.$.ajax.apply(e.$, arguments)
      }
      var _ = (e.Router = function (t) {
          t || (t = {}),
            t.routes && (this.routes = t.routes),
            this._bindRoutes(),
            this.initialize.apply(this, arguments)
        }),
        C = /\((.*?)\)/g,
        S = /(\(\?)?:\w+/g,
        k = /\*\w+/g,
        N = /[\-{}\[\]+?.,\\\^$|#\s]/g
      n.extend(_.prototype, a, {
        initialize: function () {},
        route: function (t, r, i) {
          n.isRegExp(t) || (t = this._routeToRegExp(t)),
            n.isFunction(r) && ((i = r), (r = '')),
            i || (i = this[r])
          var o = this
          return (
            e.history.route(t, function (n) {
              var s = o._extractParameters(t, n)
              o.execute(i, s),
                o.trigger.apply(o, ['route:' + r].concat(s)),
                o.trigger('route', r, s),
                e.history.trigger('route', o, r, s)
            }),
            this
          )
        },
        execute: function (t, e) {
          t && t.apply(this, e)
        },
        navigate: function (t, n) {
          return e.history.navigate(t, n), this
        },
        _bindRoutes: function () {
          if (this.routes) {
            this.routes = n.result(this, 'routes')
            for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
              this.route(t, this.routes[t])
          }
        },
        _routeToRegExp: function (t) {
          return (
            (t = t
              .replace(N, '\\$&')
              .replace(C, '(?:$1)?')
              .replace(S, function (t, e) {
                return e ? t : '([^/?]+)'
              })
              .replace(k, '([^?]*?)')),
            new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
          )
        },
        _extractParameters: function (t, e) {
          var r = t.exec(e).slice(1)
          return n.map(r, function (t, e) {
            return e === r.length - 1
              ? t || null
              : t
              ? decodeURIComponent(t)
              : null
          })
        },
      })
      var A = (e.History = function () {
          ;(this.handlers = []),
            n.bindAll(this, 'checkUrl'),
            'undefined' != typeof window &&
              ((this.location = window.location),
              (this.history = window.history))
        }),
        j = /^[#\/]|\s+$/g,
        D = /^\/+|\/+$/g,
        H = /msie [\w.]+/,
        R = /\/$/,
        O = /#.*$/
      ;(A.started = !1),
        n.extend(A.prototype, a, {
          interval: 50,
          atRoot: function () {
            return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root
          },
          getHash: function (t) {
            var e = (t || this).location.href.match(/#(.*)$/)
            return e ? e[1] : ''
          },
          getFragment: function (t, e) {
            if (null == t)
              if (this._hasPushState || !this._wantsHashChange || e) {
                t = decodeURI(this.location.pathname + this.location.search)
                var n = this.root.replace(R, '')
                t.indexOf(n) || (t = t.slice(n.length))
              } else t = this.getHash()
            return t.replace(j, '')
          },
          start: function (t) {
            if (A.started)
              throw new Error('Backbone.history has already been started')
            ;(A.started = !0),
              (this.options = n.extend({ root: '/' }, this.options, t)),
              (this.root = this.options.root),
              (this._wantsHashChange = !1 !== this.options.hashChange),
              (this._wantsPushState = !!this.options.pushState),
              (this._hasPushState = !!(
                this.options.pushState &&
                this.history &&
                this.history.pushState
              ))
            var r = this.getFragment(),
              i = document.documentMode,
              o = H.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7)
            if (
              ((this.root = ('/' + this.root + '/').replace(D, '/')),
              o && this._wantsHashChange)
            ) {
              var s = e.$('<iframe src="javascript:0" tabindex="-1">')
              ;(this.iframe = s.hide().appendTo('body')[0].contentWindow),
                this.navigate(r)
            }
            this._hasPushState
              ? e.$(window).on('popstate', this.checkUrl)
              : this._wantsHashChange && 'onhashchange' in window && !o
              ? e.$(window).on('hashchange', this.checkUrl)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval
                )),
              (this.fragment = r)
            var a = this.location
            if (this._wantsHashChange && this._wantsPushState) {
              if (!this._hasPushState && !this.atRoot())
                return (
                  (this.fragment = this.getFragment(null, !0)),
                  this.location.replace(this.root + '#' + this.fragment),
                  !0
                )
              this._hasPushState &&
                this.atRoot() &&
                a.hash &&
                ((this.fragment = this.getHash().replace(j, '')),
                this.history.replaceState(
                  {},
                  document.title,
                  this.root + this.fragment
                ))
            }
            if (!this.options.silent) return this.loadUrl()
          },
          stop: function () {
            e
              .$(window)
              .off('popstate', this.checkUrl)
              .off('hashchange', this.checkUrl),
              this._checkUrlInterval && clearInterval(this._checkUrlInterval),
              (A.started = !1)
          },
          route: function (t, e) {
            this.handlers.unshift({ route: t, callback: e })
          },
          checkUrl: function (t) {
            var e = this.getFragment()
            if (
              (e === this.fragment &&
                this.iframe &&
                (e = this.getFragment(this.getHash(this.iframe))),
              e === this.fragment)
            )
              return !1
            this.iframe && this.navigate(e), this.loadUrl()
          },
          loadUrl: function (t) {
            return (
              (t = this.fragment = this.getFragment(t)),
              n.any(this.handlers, function (e) {
                if (e.route.test(t)) return e.callback(t), !0
              })
            )
          },
          navigate: function (t, e) {
            if (!A.started) return !1
            ;(e && !0 !== e) || (e = { trigger: !!e })
            var n = this.root + (t = this.getFragment(t || ''))
            if (((t = t.replace(O, '')), this.fragment !== t)) {
              if (
                ((this.fragment = t),
                '' === t && '/' !== n && (n = n.slice(0, -1)),
                this._hasPushState)
              )
                this.history[e.replace ? 'replaceState' : 'pushState'](
                  {},
                  document.title,
                  n
                )
              else {
                if (!this._wantsHashChange) return this.location.assign(n)
                this._updateHash(this.location, t, e.replace),
                  this.iframe &&
                    t !== this.getFragment(this.getHash(this.iframe)) &&
                    (e.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, t, e.replace))
              }
              return e.trigger ? this.loadUrl(t) : void 0
            }
          },
          _updateHash: function (t, e, n) {
            if (n) {
              var r = t.href.replace(/(javascript:|#).*$/, '')
              t.replace(r + '#' + e)
            } else t.hash = '#' + e
          },
        }),
        (e.history = new A())
      var L = function (t, e) {
        var r,
          i = this
        ;(r =
          t && n.has(t, 'constructor')
            ? t.constructor
            : function () {
                return i.apply(this, arguments)
              }),
          n.extend(r, i, e)
        var o = function () {
          this.constructor = r
        }
        return (
          (o.prototype = i.prototype),
          (r.prototype = new o()),
          t && n.extend(r.prototype, t),
          (r.__super__ = i.prototype),
          r
        )
      }
      f.extend = d.extend = _.extend = b.extend = A.extend = L
      var I = function () {
          throw new Error('A "url" property or function must be specified')
        },
        P = function (t, e) {
          var n = e.error
          e.error = function (r) {
            n && n(t, r, e), t.trigger('error', t, r, e)
          }
        }
      return e
    }),
    (r = (function (e) {
      var r = n,
        i = t
      return r.View.extend({
        initialize: function (t) {
          ;(this.embed = t.embed),
            (this.station = t.station),
            (this.channel = t.channel),
            (this.gateway = t.gateway),
            (this.className = t.className),
            (this.historyLength = t.historyLength),
            (this.maxHistory = t.maxHistory)
        },
        announce: function () {
          var t = i.template('embed:<%- embedName %>:ready', {
            embedName: this.embed,
          })
          this.channel.trigger(t)
        },
        listenForData: function () {
          var t = i.template('embed:<%- embedName %>:update', {
            embedName: this.embed,
          })
          this.listenTo(this.channel, t, this.update)
        },
        update: function () {
          var t = this.gateway.getDataFor(this.embed)
          'history' === this.embed && (t = this.mapHistoryData(t)),
            this.render(t)
        },
        render: function (t) {
          return this.$el.html(t), this
        },
        mapHistoryData: function (t) {
          var e
          try {
            e = this.className.split('radioco_history')[1]
          } catch (t) {
            e = this.historyLength
          }
          var n = e <= this.maxHistory ? e : this.maxHistory
          return (
            '<ul>' +
            t
              .map(function (t, e) {
                if (e < n)
                  return i.template('<li><%- song %></li>', { song: t.title })
              })
              .join('') +
            '</ul>'
          )
        },
        init: function () {
          this.render('Loading...'), this.announce(), this.listenForData()
        },
      })
    })()),
    (i = (function (e) {
      var r = t,
        i = n
      return function () {
        return r.extend({}, i.Events)
      }
    })()),
    (o = (function (e) {
      var r = n,
        i = t
      return r.Model.extend({
        defaults: function () {
          return {
            status: 'offline',
            current_track: { title: '', start_time: null, artwork_url: null },
            source: { collaborator: null, type: 'automated' },
            collaborators: [],
            relays: [],
          }
        },
        getCurrentTrack: function () {
          return this.get('current_track') || this.defaults().current_track
        },
        getConnectedCollaborators: function () {
          return this.get('collaborators')
        },
        getCollaboratorStatus: function (t) {
          var e = i.find(this.getConnectedCollaborators(), function (e) {
            return e.id === t
          })
          return e ? e.status : 'offline'
        },
        getCollaborator: function (t) {
          var e = i.find(this.getConnectedCollaborators(), function (e) {
            return e.id === t
          })
          return e || null
        },
        getStreamingCollaborator: function () {
          return this.get('collaborators').filter(function (t) {
            return 'streaming' === t.status
          })
        },
        getConnectedRelay: function () {
          return i.find(this.get('relays'), function (t) {
            return 'connected' === t.status
          })
        },
      })
    })()),
    (s = (function (r) {
      function i(t) {
        ;(this.timeout = null),
          (this._intervals = []),
          (this.channel = (t && t.channel) || s({})),
          this._bindEvents()
      }
      var o = n,
        s = e,
        a = t
      return (
        (i.prototype._bindEvents = function () {
          this.channel.on(
            'start:polling',
            function () {
              this.resumeDashboard(), this.userActive()
            }.bind(this)
          ),
            o.history.on('route', this.userActive.bind(this))
        }),
        (i.prototype.userActive = function () {
          this.timeout && clearTimeout(this.timeout),
            (this.timeout = setTimeout(this.pauseDashboard.bind(this), 18e5))
        }),
        (i.prototype.addInterval = function (t, e, n) {
          if (!this.doesExist(t)) {
            var r = { name: t, interval: e || 5e3, action: n }
            return (
              this._startListening(r), this._intervals.push(r), r.intervalId
            )
          }
        }),
        (i.prototype.doesExist = function (t) {
          return !!this.getIntervals().filter(function (e) {
            return e.name === t
          }).length
        }),
        (i.prototype._startListening = function (t) {
          ;(t.intervalId = setInterval(t.action, t.interval)), t.action()
        }),
        (i.prototype.stopListening = function (t) {
          this._intervals = a
            .map(this.getIntervals(), function (e) {
              return t === e.intervalId && clearInterval(e.intervalId), e
            })
            .filter(function (e) {
              return t !== e.intervalId
            })
        }),
        (i.prototype.pauseDashboard = function () {
          this.getIntervals().forEach(function (t) {
            clearInterval(t.intervalId)
          }),
            this.channel.trigger('inactive:modal:show')
        }),
        (i.prototype._stopListeningAll = function () {
          this.getIntervals().forEach(
            function (t) {
              this.stopListening(t.intervalId)
            }.bind(this)
          )
        }),
        (i.prototype.clearAll = function () {
          this._stopListeningAll()
        }),
        (i.prototype.resumeDashboard = function () {
          this.getIntervals().forEach(
            function (t) {
              this._startListening(t)
            }.bind(this)
          )
        }),
        (i.prototype.getIntervals = function () {
          return this._intervals
        }),
        (i.getInstance = function (t) {
          return this._instance || (this._instance = new i(t)), this._instance
        }),
        i
      )
    })()),
    (a = (function (n) {
      function r(t) {
        return (
          h[t.station.get('id')] || (h[t.station.get('id')] = new a()),
          h[t.station.get('id')]
        )
      }
      function i(t, e) {
        ;(this.hostname = e || 'public.radio.co'),
          (this.station = t),
          (this._interval = null),
          (this.pollManager = u.getInstance()),
          (this._pollInterval = 1e4)
      }
      var a = o,
        u = s,
        c = e,
        l = t,
        h = {}
      return (
        (i.prototype = {
          getStatus: function () {
            return (this._status = r(this)), this._startListening()._status
          },
          setStation: function (t) {
            return (this.station = t), this
          },
          stopListening: function () {
            return this.pollManager.stopListening(this._interval), this
          },
          _startListening: function () {
            return (
              (this._interval = this.pollManager.addInterval(
                'status',
                this._pollInterval,
                this._fetch.bind(this)
              )),
              this
            )
          },
          _fetch: function () {
            var t = l.template(
              '//<%- hostname %>/stations/<%- station %>/status?v=' +
                +new Date(),
              { hostname: this.hostname, station: this.station.get('id') }
            )
            return (
              c.ajax({
                url: t,
                dataType: 'json',
                cache: !0,
                success: function (t) {
                  this._status && this._status.set(t)
                }.bind(this),
              }),
              this
            )
          },
        }),
        i
      )
    })()),
    (function (t) {
      'use strict'
      function e() {
        ;(this.bitsNeeded = 0), (this.codePoint = 0)
      }
      function n(t) {
        ;(this.withCredentials = !1),
          (this.readyState = 0),
          (this.status = 0),
          (this.statusText = ''),
          (this.responseText = ''),
          (this.onprogress = H),
          (this.onload = H),
          (this.onerror = H),
          (this.onreadystatechange = H),
          (this._contentType = ''),
          (this._xhr = t),
          (this._sendTimeout = 0),
          (this._abort = H)
      }
      function r(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return String.fromCharCode(t.charCodeAt(0) + 32)
        })
      }
      function i(t) {
        for (
          var e = Object.create(null), n = t.split('\r\n'), i = 0;
          i < n.length;
          i += 1
        ) {
          var o = n[i],
            s = o.split(': '),
            a = s.shift(),
            u = s.join(': ')
          e[r(a)] = u
        }
        this._map = e
      }
      function o() {}
      function s(t) {
        this._headers = t
      }
      function a() {}
      function c() {
        this._listeners = Object.create(null)
      }
      function l(t) {
        y(function () {
          throw t
        }, 0)
      }
      function h(t) {
        ;(this.type = t), (this.target = void 0)
      }
      function f(t, e) {
        h.call(this, t),
          (this.data = e.data),
          (this.lastEventId = e.lastEventId)
      }
      function p(t, e) {
        h.call(this, t),
          (this.status = e.status),
          (this.statusText = e.statusText),
          (this.headers = e.headers)
      }
      function d(t, e) {
        h.call(this, t), (this.error = e.error)
      }
      function g(t, e) {
        c.call(this),
          (e = e || {}),
          (this.onopen = void 0),
          (this.onmessage = void 0),
          (this.onerror = void 0),
          (this.url = void 0),
          (this.readyState = void 0),
          (this.withCredentials = void 0),
          (this.headers = void 0),
          (this._close = void 0),
          m(this, t, e)
      }
      function v() {
        return (void 0 != x && 'withCredentials' in x.prototype) || void 0 == w
          ? new x()
          : new w()
      }
      function m(t, e, r) {
        e = String(e)
        var i = Boolean(r.withCredentials),
          s = r.lastEventIdQueryParameterName || 'lastEventId',
          u = U(1e3),
          c = W(r.heartbeatTimeout, 45e3),
          l = '',
          h = u,
          g = !1,
          m = 0,
          x = r.headers || {},
          w = r.Transport,
          T = V && void 0 == w ? void 0 : new n(void 0 != w ? new w() : v()),
          E =
            null != w && 'string' != typeof w
              ? new w()
              : void 0 == T
              ? new a()
              : new o(),
          _ = void 0,
          C = 0,
          S = R,
          k = '',
          N = '',
          A = '',
          j = '',
          D = q,
          H = 0,
          X = 0,
          G = function (e, n, r, i) {
            if (S === O)
              if (200 === e && void 0 != r && B.test(r)) {
                ;(S = L), (g = Date.now()), (h = u), (t.readyState = L)
                var o = new p('open', { status: e, statusText: n, headers: i })
                t.dispatchEvent(o), z(t, t.onopen, o)
              } else {
                var s = ''
                200 !== e
                  ? (n && (n = n.replace(/\s+/g, ' ')),
                    (s =
                      "EventSource's response has a status " +
                      e +
                      ' ' +
                      n +
                      ' that is not 200. Aborting the connection.'))
                  : (s =
                      "EventSource's response has a Content-Type specifying an unsupported type: " +
                      (void 0 == r ? '-' : r.replace(/\s+/g, ' ')) +
                      '. Aborting the connection.'),
                  Q()
                var o = new p('error', { status: e, statusText: n, headers: i })
                t.dispatchEvent(o), z(t, t.onerror, o), console.error(s)
              }
          },
          J = function (e) {
            if (S === L) {
              for (var n = -1, r = 0; r < e.length; r += 1) {
                var i = e.charCodeAt(r)
                ;(i !== '\n'.charCodeAt(0) && i !== '\r'.charCodeAt(0)) ||
                  (n = r)
              }
              var o = (-1 !== n ? j : '') + e.slice(0, n + 1)
              ;(j = (-1 === n ? j : '') + e.slice(n + 1)),
                '' !== e && ((g = Date.now()), (m += e.length))
              for (var s = 0; s < o.length; s += 1) {
                var i = o.charCodeAt(s)
                if (D === P && i === '\n'.charCodeAt(0)) D = q
                else if (
                  (D === P && (D = q),
                  i === '\r'.charCodeAt(0) || i === '\n'.charCodeAt(0))
                ) {
                  if (D !== q) {
                    D === F && (X = s + 1)
                    var a = o.slice(H, X - 1),
                      p = o.slice(
                        X +
                          (X < s && o.charCodeAt(X) === ' '.charCodeAt(0)
                            ? 1
                            : 0),
                        s
                      )
                    'data' === a
                      ? ((k += '\n'), (k += p))
                      : 'id' === a
                      ? (N = p)
                      : 'event' === a
                      ? (A = p)
                      : 'retry' === a
                      ? ((u = W(p, u)), (h = u))
                      : 'heartbeatTimeout' === a &&
                        ((c = W(p, c)),
                        0 !== C &&
                          (b(C),
                          (C = y(function () {
                            K()
                          }, c))))
                  }
                  if (D === q) {
                    if ('' !== k) {
                      ;(l = N), '' === A && (A = 'message')
                      var d = new f(A, { data: k.slice(1), lastEventId: N })
                      if (
                        (t.dispatchEvent(d),
                        'open' === A
                          ? z(t, t.onopen, d)
                          : 'message' === A
                          ? z(t, t.onmessage, d)
                          : 'error' === A && z(t, t.onerror, d),
                        S === I)
                      )
                        return
                    }
                    ;(k = ''), (A = '')
                  }
                  D = i === '\r'.charCodeAt(0) ? P : q
                } else
                  D === q && ((H = s), (D = F)),
                    D === F
                      ? i === ':'.charCodeAt(0) && ((X = s + 1), (D = M))
                      : D === M && (D = $)
              }
            }
          },
          Y = function (e) {
            if (S === L || S === O) {
              ;(S = R),
                0 !== C && (b(C), (C = 0)),
                (C = y(function () {
                  K()
                }, h)),
                (h = U(Math.min(16 * u, 2 * h))),
                (t.readyState = O)
              var n = new d('error', { error: e })
              t.dispatchEvent(n),
                z(t, t.onerror, n),
                void 0 != e && console.error(e)
            }
          },
          Q = function () {
            ;(S = I),
              void 0 != _ && (_.abort(), (_ = void 0)),
              0 !== C && (b(C), (C = 0)),
              (t.readyState = I)
          },
          K = function () {
            if (((C = 0), S === R)) {
              ;(g = !1),
                (m = 0),
                (C = y(function () {
                  K()
                }, c)),
                (S = O),
                (k = ''),
                (A = ''),
                (N = l),
                (j = ''),
                (H = 0),
                (X = 0),
                (D = q)
              var n = e
              if (
                'data:' !== e.slice(0, 5) &&
                'blob:' !== e.slice(0, 5) &&
                '' !== l
              ) {
                var r = e.indexOf('?')
                ;(n =
                  -1 === r
                    ? e
                    : e.slice(0, r + 1) +
                      e
                        .slice(r + 1)
                        .replace(
                          /(?:^|&)([^=&]*)(?:=[^&]*)?/g,
                          function (t, e) {
                            return e === s ? '' : t
                          }
                        )),
                  (n +=
                    (-1 === e.indexOf('?') ? '?' : '&') +
                    s +
                    '=' +
                    encodeURIComponent(l))
              }
              var i = t.withCredentials,
                o = {}
              o.Accept = 'text/event-stream'
              var a = t.headers
              if (void 0 != a)
                for (var u in a)
                  Object.prototype.hasOwnProperty.call(a, u) && (o[u] = a[u])
              try {
                _ = E.open(T, G, J, Y, n, i, o)
              } catch (t) {
                throw (Q(), t)
              }
            } else if (g || void 0 == _) {
              var h = Math.max((g || Date.now()) + c - Date.now(), 1)
              ;(g = !1),
                (C = y(function () {
                  K()
                }, h))
            } else
              Y(
                new Error(
                  'No activity within ' +
                    c +
                    ' milliseconds. ' +
                    (S === O
                      ? 'No response received.'
                      : m + ' chars received.') +
                    ' Reconnecting.'
                )
              ),
                void 0 != _ && (_.abort(), (_ = void 0))
          }
        ;(t.url = e),
          (t.readyState = O),
          (t.withCredentials = i),
          (t.headers = x),
          (t._close = Q),
          K()
      }
      var y = t.setTimeout,
        b = t.clearTimeout,
        x = t.XMLHttpRequest,
        w = t.XDomainRequest,
        T = t.ActiveXObject,
        E = t.EventSource,
        _ = t.document,
        C = t.Promise,
        S = t.fetch,
        k = t.Response,
        N = t.TextDecoder,
        A = t.TextEncoder,
        j = t.AbortController
      if (
        ('undefined' == typeof window ||
          void 0 === _ ||
          'readyState' in _ ||
          null != _.body ||
          ((_.readyState = 'loading'),
          window.addEventListener(
            'load',
            function (t) {
              _.readyState = 'complete'
            },
            !1
          )),
        null == x &&
          null != T &&
          (x = function () {
            return new T('Microsoft.XMLHTTP')
          }),
        void 0 == Object.create &&
          (Object.create = function (t) {
            function e() {}
            return (e.prototype = t), new e()
          }),
        Date.now ||
          (Date.now = function () {
            return new Date().getTime()
          }),
        void 0 == j)
      ) {
        var D = S
        ;(S = function (t, e) {
          var n = e.signal
          return D(t, {
            headers: e.headers,
            credentials: e.credentials,
            cache: e.cache,
          }).then(function (t) {
            var e = t.body.getReader()
            return (
              (n._reader = e),
              n._aborted && n._reader.cancel(),
              {
                status: t.status,
                statusText: t.statusText,
                headers: t.headers,
                body: {
                  getReader: function () {
                    return e
                  },
                },
              }
            )
          })
        }),
          (j = function () {
            ;(this.signal = { _reader: null, _aborted: !1 }),
              (this.abort = function () {
                null != this.signal._reader && this.signal._reader.cancel(),
                  (this.signal._aborted = !0)
              })
          })
      }
      e.prototype.decode = function (t) {
        function e(t, e, n) {
          if (1 === n) return t >= 128 >> e && t << e <= 2047
          if (2 === n)
            return (
              (t >= 2048 >> e && t << e <= 55295) ||
              (t >= 57344 >> e && t << e <= 65535)
            )
          if (3 === n) return t >= 65536 >> e && t << e <= 1114111
          throw new Error()
        }
        function n(t, e) {
          if (6 === t) return e >> 6 > 15 ? 3 : e > 31 ? 2 : 1
          if (12 === t) return e > 15 ? 3 : 2
          if (18 === t) return 3
          throw new Error()
        }
        for (
          var r = '', i = this.bitsNeeded, o = this.codePoint, s = 0;
          s < t.length;
          s += 1
        ) {
          var a = t[s]
          0 !== i &&
            (a < 128 || a > 191 || !e((o << 6) | (63 & a), i - 6, n(i, o))) &&
            ((i = 0), (o = 65533), (r += String.fromCharCode(o))),
            0 === i
              ? (a >= 0 && a <= 127
                  ? ((i = 0), (o = a))
                  : a >= 192 && a <= 223
                  ? ((i = 6), (o = 31 & a))
                  : a >= 224 && a <= 239
                  ? ((i = 12), (o = 15 & a))
                  : a >= 240 && a <= 247
                  ? ((i = 18), (o = 7 & a))
                  : ((i = 0), (o = 65533)),
                0 === i || e(o, i, n(i, o)) || ((i = 0), (o = 65533)))
              : ((i -= 6), (o = (o << 6) | (63 & a))),
            0 === i &&
              (o <= 65535
                ? (r += String.fromCharCode(o))
                : ((r += String.fromCharCode(55296 + ((o - 65535 - 1) >> 10))),
                  (r += String.fromCharCode(56320 + ((o - 65535 - 1) & 1023)))))
        }
        return (this.bitsNeeded = i), (this.codePoint = o), r
      }
      ;(void 0 != N &&
        void 0 != A &&
        (function () {
          try {
            return (
              'test' === new N().decode(new A().encode('test'), { stream: !0 })
            )
          } catch (t) {
            console.debug(
              'TextDecoder does not support streaming option. Using polyfill instead: ' +
                t
            )
          }
          return !1
        })()) ||
        (N = e)
      var H = function () {}
      ;(n.prototype.open = function (t, e) {
        this._abort(!0)
        var n = this,
          r = this._xhr,
          i = 1,
          o = 0
        this._abort = function (t) {
          0 !== n._sendTimeout && (b(n._sendTimeout), (n._sendTimeout = 0)),
            (1 !== i && 2 !== i && 3 !== i) ||
              ((i = 4),
              (r.onload = H),
              (r.onerror = H),
              (r.onabort = H),
              (r.onprogress = H),
              (r.onreadystatechange = H),
              r.abort(),
              0 !== o && (b(o), (o = 0)),
              t ||
                ((n.readyState = 4), n.onabort(null), n.onreadystatechange())),
            (i = 0)
        }
        var s = function () {
            if (1 === i) {
              var t = 0,
                e = '',
                o = void 0
              if ('contentType' in r) (t = 200), (e = 'OK'), (o = r.contentType)
              else
                try {
                  ;(t = r.status),
                    (e = r.statusText),
                    (o = r.getResponseHeader('Content-Type'))
                } catch (n) {
                  ;(t = 0), (e = ''), (o = void 0)
                }
              0 !== t &&
                ((i = 2),
                (n.readyState = 2),
                (n.status = t),
                (n.statusText = e),
                (n._contentType = o),
                n.onreadystatechange())
            }
          },
          a = function () {
            if ((s(), 2 === i || 3 === i)) {
              i = 3
              var t = ''
              try {
                t = r.responseText
              } catch (t) {}
              ;(n.readyState = 3), (n.responseText = t), n.onprogress()
            }
          },
          u = function (t, e) {
            if (
              ((null != e && null != e.preventDefault) ||
                (e = { preventDefault: H }),
              a(),
              1 === i || 2 === i || 3 === i)
            ) {
              if (
                ((i = 4),
                0 !== o && (b(o), (o = 0)),
                (n.readyState = 4),
                'load' === t)
              )
                n.onload(e)
              else if ('error' === t) n.onerror(e)
              else {
                if ('abort' !== t) throw new TypeError()
                n.onabort(e)
              }
              n.onreadystatechange()
            }
          },
          c = function (t) {
            void 0 != r &&
              (4 === r.readyState
                ? ('onload' in r && 'onerror' in r && 'onabort' in r) ||
                  u('' === r.responseText ? 'error' : 'load', t)
                : 3 === r.readyState
                ? 'onprogress' in r || a()
                : 2 === r.readyState && s())
          },
          l = function () {
            ;(o = y(function () {
              l()
            }, 500)),
              3 === r.readyState && a()
          }
        'onload' in r &&
          (r.onload = function (t) {
            u('load', t)
          }),
          'onerror' in r &&
            (r.onerror = function (t) {
              u('error', t)
            }),
          'onabort' in r &&
            (r.onabort = function (t) {
              u('abort', t)
            }),
          'onprogress' in r && (r.onprogress = a),
          'onreadystatechange' in r &&
            (r.onreadystatechange = function (t) {
              c(t)
            }),
          (!('contentType' in r) && 'ontimeout' in x.prototype) ||
            (e += (-1 === e.indexOf('?') ? '?' : '&') + 'padding=true'),
          r.open(t, e, !0),
          'readyState' in r &&
            (o = y(function () {
              l()
            }, 0))
      }),
        (n.prototype.abort = function () {
          this._abort(!1)
        }),
        (n.prototype.getResponseHeader = function (t) {
          return this._contentType
        }),
        (n.prototype.setRequestHeader = function (t, e) {
          var n = this._xhr
          'setRequestHeader' in n && n.setRequestHeader(t, e)
        }),
        (n.prototype.getAllResponseHeaders = function () {
          return void 0 != this._xhr.getAllResponseHeaders
            ? this._xhr.getAllResponseHeaders() || ''
            : ''
        }),
        (n.prototype.send = function () {
          if (
            !(
              ('ontimeout' in x.prototype &&
                ('sendAsBinary' in x.prototype || 'mozAnon' in x.prototype)) ||
              void 0 == _ ||
              void 0 == _.readyState ||
              'complete' === _.readyState
            )
          ) {
            var t = this
            return void (t._sendTimeout = y(function () {
              ;(t._sendTimeout = 0), t.send()
            }, 4))
          }
          var e = this._xhr
          'withCredentials' in e && (e.withCredentials = this.withCredentials)
          try {
            e.send(void 0)
          } catch (t) {
            throw t
          }
        }),
        (i.prototype.get = function (t) {
          return this._map[r(t)]
        }),
        null != x && null == x.HEADERS_RECEIVED && (x.HEADERS_RECEIVED = 2),
        (o.prototype.open = function (t, e, n, r, o, s, a) {
          t.open('GET', o)
          var u = 0
          ;(t.onprogress = function () {
            var e = t.responseText,
              r = e.slice(u)
            ;(u += r.length), n(r)
          }),
            (t.onerror = function (t) {
              t.preventDefault(), r(new Error('NetworkError'))
            }),
            (t.onload = function () {
              r(null)
            }),
            (t.onabort = function () {
              r(null)
            }),
            (t.onreadystatechange = function () {
              if (t.readyState === x.HEADERS_RECEIVED) {
                var n = t.status,
                  r = t.statusText,
                  o = t.getResponseHeader('Content-Type'),
                  s = t.getAllResponseHeaders()
                e(n, r, o, new i(s))
              }
            }),
            (t.withCredentials = s)
          for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) &&
              t.setRequestHeader(c, a[c])
          return t.send(), t
        }),
        (s.prototype.get = function (t) {
          return this._headers.get(t)
        }),
        (a.prototype.open = function (t, e, n, r, i, o, a) {
          var u = null,
            c = new j(),
            l = c.signal,
            h = new N()
          return (
            S(i, {
              headers: a,
              credentials: o ? 'include' : 'same-origin',
              signal: l,
              cache: 'no-store',
            })
              .then(function (t) {
                return (
                  (u = t.body.getReader()),
                  e(
                    t.status,
                    t.statusText,
                    t.headers.get('Content-Type'),
                    new s(t.headers)
                  ),
                  new C(function (t, e) {
                    var r = function () {
                      u.read()
                        .then(function (e) {
                          if (e.done) t(void 0)
                          else {
                            var i = h.decode(e.value, { stream: !0 })
                            n(i), r()
                          }
                        })
                        .catch(function (t) {
                          e(t)
                        })
                    }
                    r()
                  })
                )
              })
              .catch(function (t) {
                return 'AbortError' === t.name ? void 0 : t
              })
              .then(function (t) {
                r(t)
              }),
            {
              abort: function () {
                null != u && u.cancel(), c.abort()
              },
            }
          )
        }),
        (c.prototype.dispatchEvent = function (t) {
          t.target = this
          var e = this._listeners[t.type]
          if (void 0 != e)
            for (var n = e.length, r = 0; r < n; r += 1) {
              var i = e[r]
              try {
                'function' == typeof i.handleEvent
                  ? i.handleEvent(t)
                  : i.call(this, t)
              } catch (t) {
                l(t)
              }
            }
        }),
        (c.prototype.addEventListener = function (t, e) {
          t = String(t)
          var n = this._listeners,
            r = n[t]
          void 0 == r && ((r = []), (n[t] = r))
          for (var i = !1, o = 0; o < r.length; o += 1) r[o] === e && (i = !0)
          i || r.push(e)
        }),
        (c.prototype.removeEventListener = function (t, e) {
          t = String(t)
          var n = this._listeners,
            r = n[t]
          if (void 0 != r) {
            for (var i = [], o = 0; o < r.length; o += 1)
              r[o] !== e && i.push(r[o])
            0 === i.length ? delete n[t] : (n[t] = i)
          }
        }),
        (f.prototype = Object.create(h.prototype)),
        (p.prototype = Object.create(h.prototype)),
        (d.prototype = Object.create(h.prototype))
      var R = -1,
        O = 0,
        L = 1,
        I = 2,
        P = -1,
        q = 0,
        F = 1,
        M = 2,
        $ = 3,
        B = /^text\/event\-stream(;.*)?$/i,
        W = function (t, e) {
          var n = null == t ? e : parseInt(t, 10)
          return n !== n && (n = e), U(n)
        },
        U = function (t) {
          return Math.min(Math.max(t, 1e3), 18e6)
        },
        z = function (t, e, n) {
          try {
            'function' == typeof e && e.call(t, n)
          } catch (t) {
            l(t)
          }
        },
        V = void 0 != S && void 0 != k && 'body' in k.prototype
      ;(g.prototype = Object.create(c.prototype)),
        (g.prototype.CONNECTING = O),
        (g.prototype.OPEN = L),
        (g.prototype.CLOSED = I),
        (g.prototype.close = function () {
          this._close()
        }),
        (g.CONNECTING = O),
        (g.OPEN = L),
        (g.CLOSED = I),
        (g.prototype.withCredentials = void 0)
      var X = E
      void 0 == x ||
        (void 0 != E && 'withCredentials' in E.prototype) ||
        (X = g),
        (function (t) {
          if ('object' == typeof module && 'object' == typeof module.exports) {
            var e = t(exports)
            void 0 !== e && (module.exports = e)
          } else
            u = (function (e) {
              return 'function' == typeof t ? t(e) : t
            })({})
        })(function (t) {
          return (
            (t = t || {}),
            (t.EventSourcePolyfill = g),
            (t.NativeEventSource = E),
            (t.EventSource = X),
            t
          )
        })
    })(
      'undefined' == typeof globalThis
        ? 'undefined' != typeof window
          ? window
          : 'undefined' != typeof self
          ? self
          : this
        : globalThis
    ),
    (c = (function (e) {
      function n(t, e) {
        ;(this.channel = t),
          (this.station = e),
          (this.topics = []),
          (this.subscriptions = {}),
          (this.source = void 0),
          (this.lastEventId = ''),
          this.bindEvents()
      }
      var r = t,
        i = u
      return (
        (n.prototype = {
          registerTopic: function (t, e, n) {
            this.subscriptions[t] ||
              ((this.lastEventId = n),
              this.topics.push(t),
              (this.subscriptions[t] = { header: e }),
              this.channel.trigger('mercure:topics:changed'))
          },
          deregisterTopic: function (t) {
            if (this.subscriptions[t]) {
              var e = this.topics.indexOf(t)
              this.topics.splice(e, 1),
                delete this.subscriptions[t],
                this.channel.trigger('mercure:topics:changed')
            }
          },
          createSubscription: function () {
            this.source && this.source.close()
            var t,
              e = Object.keys(this.subscriptions).map(
                function (e) {
                  return (
                    (t = this.subscriptions[e].header.mercure),
                    encodeURIComponent(this.subscriptions[e].header.self)
                  )
                }.bind(this)
              )
            if (!t) return !1
            var n =
              t +
              '?topic=' +
              e.join('&topic=') +
              '&Last-Event-ID=' +
              encodeURIComponent(this.lastEventId)
            this.setupEventSource(n)
          },
          setupEventSource: function (t) {
            if ('EventSource' in window) this.source = new EventSource(t)
            else {
              var e = i.EventSourcePolyfill
              this.source = new e(t)
            }
            this.topics.forEach(
              function (t) {
                var e = this.station.get('id') + '/' + t
                t.length <= 0 && (e = this.station.get('id')),
                  this.source.addEventListener(
                    e,
                    function (t) {
                      return (this.lastEventId = t.lastEventId), this.publish(t)
                    }.bind(this)
                  )
              }.bind(this)
            )
          },
          getDataFor: function (t) {
            return this.getSubscription(t) ? this.subscriptions[t].data : null
          },
          publish: function (t) {
            var e = /s[0-9a-f]{9}\//,
              n = t.type.split(e)[1]
            if ((n || (n = this.station.get('id')), this.getSubscription(n))) {
              var i = JSON.parse(t.data)
              this.subscriptions[n].data = i
              var o = r.template('mercure:data:<%- topic %>:received', {
                topic: n,
              })
              this.channel.trigger(o, i)
            }
          },
          getSubscription: function (t) {
            return this.subscriptions[t] ? this.subscriptions[t] : null
          },
          getAllSubscriptions: function () {
            return this.subscriptions
          },
          bindEvents: function () {
            this.channel.on(
              'mercure:topics:changed',
              function () {
                this.createSubscription()
              }.bind(this)
            )
          },
        }),
        n
      )
    })()),
    (l = (function (e) {
      function n(t, e) {
        ;(this.manager = void 0),
          (this.channel = t),
          (this.station = e),
          this.init()
      }
      var r = c,
        i = t
      return (
        (n.prototype = {
          init: function () {
            return (
              window.mercureSubscriptionManager ||
                (window.mercureSubscriptionManager = new r(
                  this.channel,
                  this.station
                )),
              (this.manager = window.mercureSubscriptionManager),
              window.mercureSubscriptionManager
            )
          },
          subscribe: function (t, e, n) {
            this.manager.registerTopic(t, e, n)
          },
          unsubscribe: function (t) {
            var e = !0,
              n = this._getEventToListenTo(t),
              r = i.template('mercure:subscriber:<%- topic %>:check', {
                topic: t,
              })
            this.channel.on(n, function () {
              e = !1
            }),
              this.channel.trigger(r),
              setTimeout(
                function () {
                  e && this.manager.deregisterTopic(t),
                    this.channel.stopListening(n)
                }.bind(this),
                50
              )
          },
          isSubscribedTo: function (t) {
            return !!this.manager.getSubscription(t)
          },
          _getEventToListenTo: function (t) {
            return i.template('mercure:subscriber:<%- topic %>:present', {
              topic: t,
            })
          },
          cleanUp: function () {
            delete window.mercureSubscriptionManager
          },
        }),
        n
      )
    })()),
    (h = (function (n) {
      function r(t, e) {
        ;(this.station = t), (this.hostname = e)
      }
      var i = e,
        o = t
      return (
        (r.prototype = {
          getInitialStateForTopic: function (t) {
            var e
            return (
              (e = t
                ? o.template(
                    '//<%- hostname %>/api/v2/<%- station %>/<%- topic %>',
                    {
                      hostname: this.hostname,
                      station: this.station.id,
                      topic: t,
                    }
                  )
                : o.template('//<%- hostname %>/api/v2/<%- station %>', {
                    hostname: this.hostname,
                    station: this.station.id,
                  })),
              this._fetch(e)
            )
          },
          _fetch: function (t) {
            return new Promise(
              function (e, n) {
                i.ajax({ url: t, dataType: 'json', cache: !0 })
                  .success(
                    function (t, n, r) {
                      e({
                        data: t,
                        header: this._parseLinkHeader(
                          r.getResponseHeader('Link')
                        ),
                      })
                    }.bind(this)
                  )
                  .error(function (t) {
                    n(t)
                  })
              }.bind(this)
            )
          },
          _parseLinkHeader: function (t) {
            var e =
                /<[^>]*>\s*(\s*;\s*[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*")))*(,|$)/g,
              n =
                /[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*"))/g,
              r = t.match(e),
              i = {}
            return (
              r.forEach(function (t) {
                var e = t.split('>'),
                  r = e[0].substring(1)
                e[1].match(n).forEach(function (t) {
                  var e = t.split('='),
                    n = e[1].replace(/["']/g, '')
                  i[n] = r
                })
              }),
              i
            )
          },
        }),
        r
      )
    })()),
    (f = (function (e) {
      function n(t, e, n) {
        ;(this.station = t),
          (this.apiHostname = e),
          (this.channel = n),
          (this.mercureGateway = new i(this.channel, this.station)),
          (this.publicApiGateway = new o(this.station, this.apiHostname)),
          (this.currentData = ''),
          (this.lastEventId = null),
          (this.mercureHeader = null),
          (this.subscribed = !1),
          (this.retryInterval = 1e3),
          (this.retries = 0),
          this.listenForHeartbeat()
      }
      var r = t,
        i = l,
        o = h
      return (
        (n.prototype = {
          getInitialState: function () {
            this.currentData && this.publish(this.currentData),
              this.publicApiGateway
                .getInitialStateForTopic(this.topic)
                .then(
                  function (t) {
                    ;(this.mercureHeader = t.header),
                      this.publish(t.data.data),
                      this.subscribe(),
                      this.resetRetryTimer()
                  }.bind(this)
                )
                .catch(
                  function () {
                    this.beginRetry(this.getInitialState)
                  }.bind(this)
                )
          },
          beginRetry: function (t) {
            this.retries++,
              setTimeout(
                function () {
                  this.handleBackOff(), t.bind(this)()
                }.bind(this),
                this.retryInterval
              )
          },
          handleBackOff: function () {
            if (3e5 !== this.retryInterval)
              return 2 * this.retryInterval > 3e5
                ? void (this.retryInterval = 3e5)
                : void (this.retryInterval = 2 * this.retryInterval)
          },
          resetRetryTimer: function () {
            ;(this.retryInterval = 1e3), (this.retries = 0)
          },
          subscribe: function () {
            this.mercureGateway.subscribe(
              this.topic,
              this.mercureHeader,
              this.lastEventId
            ),
              (this.subscribed = !0)
            var t = r.template('mercure:data:<%- topic %>:received', {
              topic: this.topic,
            })
            this.channel.on(
              t,
              function (t) {
                this.publish(t)
              }.bind(this)
            )
          },
          start: function () {
            this.getInitialState()
          },
          stop: function () {
            ;(this.subscribed = !1), this.mercureGateway.unsubscribe(this.topic)
          },
          isSubscribed: function () {
            return this.subscribed
          },
          setCurrentData: function (t) {
            return (this.currentData = t), this
          },
          getCurrentData: function () {
            return this.currentData
          },
          publish: function (t) {
            this.setCurrentData(t), this.channel.trigger(this.trigger, t)
          },
          listenForHeartbeat: function () {
            var t = r.template('mercure:subscriber:<%- topic %>:check', {
                topic: this.topic,
              }),
              e = r.template('mercure:subscriber:<%- topic %>:present', {
                topic: this.topic,
              })
            this.channel.on(
              t,
              function () {
                this.isSubscribed() && this.channel.trigger(e)
              }.bind(this)
            )
          },
        }),
        n
      )
    })()),
    (p = (function (t) {
      function e(t, e, r) {
        ;(this.topic = 'status'),
          (this.trigger = 'status:changed'),
          n.apply(this, [t, e, r, this.topic, this.trigger])
      }
      var n = f
      return (
        (e.prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        e
      )
    })()),
    (d = (function (t) {
      function e(t, e, r) {
        ;(this.topic = 'track/current'),
          (this.trigger = 'track:currentChanged'),
          (this.lastMessage = null),
          n.apply(this, [t, e, r, this.topic, this.trigger])
      }
      var n = f
      return (
        (e.prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.publish = function (t) {
          var e = new Date(t.start_time)
          e > this.lastMessage &&
            (this.setCurrentData(t),
            (this.lastMessage = e),
            this.channel.trigger(this.trigger))
        }),
        e
      )
    })()),
    (g = (function (e) {
      var r = t,
        i = {
          'schedule.read': "View the station's scheduled events",
          'schedule.write':
            'Create new events and reschedule/update existing events',
          'station.read': "View the station's details and on air status",
          'station.write': "Update the station's settings",
          'station.actions': 'Start/stop broadcasting and skip tracks',
          'collaborator.read': 'View those who collaborate to the station',
          'collaborator.write':
            'Invite new collaborators and update their permssions',
          'track.read': "View the station's tracks",
          'track.write': 'Upload/delete/tag tracks ',
          'tag.read': "View the station's tags",
          'tag.write': 'Create/modify/delete tags',
          'playlist.read': "View the station's playlists",
          'playlist.write': 'Create/modify/delete playlists',
        }
      return n.Model.extend({
        addPermission: function (t) {
          this.set({ permissions: this.get('permissions').concat(t) })
        },
        removePermission: function (t) {
          this.set({ permissions: r.without(this.get('permissions'), t) })
        },
        getDescription: function (t) {
          return i[t] || ''
        },
        hasPermission: function (t) {
          return r.contains(this.get('permissions'), t)
        },
        validate: function (t) {
          if (!r.isArray(t.permissions)) return 'Permissions must be an array.'
        },
      })
    })()),
    (v =
      '{\n\t"College/University": ["College/University"],\n\t"Religious": ["Religious"],\n\t"Classical": ["Classical"],\n\t"Alternative Rock": ["Alternative Rock"],\n\t"Hard Rock / Metal": ["Hard Rock / Metal"],\n\t"Electronica": ["Electronica"],\n\t"Adult Contemporary": ["Adult Contemporary"],\n\t"Eclectic": ["Eclectic"],\n\t"International / World": ["International / World"],\n\t"News / Talk Radio": ["News / Talk Radio"],\n\t"Jazz": ["Jazz"],\n\t"Comedy": ["Comedy"],\n\t"Top 40 / Pop": ["Top 40 / Pop"],\n\t"Classic Rock": ["Classic Rock"],\n\t"\'80s Flashback": ["\'80s Flashback"],\n\t"Blues": ["Blues"],\n\t"Country": ["Country"],\n\t"Hip Hop / Rap": ["Hip Hop / Rap"],\n\t"Golden Oldies": ["Golden Oldies"],\n\t"Ambient": ["Ambient"],\n\t"\'90s Hits": ["\'90s Hits"],\n\t"RnB / Soul": ["RnB / Soul"],\n\t"\'70s Retro": ["\'70s Retro"],\n\t"Sports Radio": ["Sports Radio"],\n\t"Reggae / Island": ["Reggae / Island"],\n\t"House": ["House"],\n\t"Techno": ["Techno"]\n}\n'),
    (m = (function (e) {
      function r(t) {
        this.plan = t || {}
      }
      var i = n,
        o = g,
        s = v,
        a = t
      r.prototype.getListenerLimit = function () {
        return this.plan.listeners || 0
      }
      var u = [
          { value: 16, description: 'Spoken Word' },
          { value: 32, description: 'Talk Show' },
          { value: 48, description: 'AM Radio' },
          { value: 64, description: 'FM Radio' },
          { value: 96, description: 'DAB Radio' },
          { value: 128, description: 'Near CD' },
          { value: 192, description: 'CD' },
        ],
        c = [
          { value: 256, description: 'Studio' },
          { value: 320, description: 'Pro' },
        ],
        l = [
          'BASS',
          'Engelmann Media Radio Listener',
          'Engelmann Radio Listener',
          'Streamripper',
          'StreamRipper',
          'RipCast',
          'FreeAmp',
          'UnknownPlayer',
          'Pathfinder',
          'sr-POSIX',
          'andycadd1',
          'AmiNetRadio',
          'UPLAYER',
          'HiDownload',
          'jake',
          'JetAudio',
          'karrel',
          'TotalRecorder',
          'cr',
        ]
      return (
        a
          .map(JSON.parse(s), function (t, e) {
            return { group: e, options: t }
          })
          .unshift({ val: '', label: '' }),
        i.Model.extend({
          defaults: {
            crossfade: 3,
            countrylist: [],
            ripprotection: !1,
            ripperlist: l,
            unknownagents: !1,
            floodProtectionEnabled: !1,
            connectTime: 0,
            limitIPs: 0,
            language: 'EN',
            logo_url: null,
            hostnameFTP: 'dottie.wavestreamer.com',
            usernameFTP: 'njkf43nfj3442fn43',
            passwordFTP: '4rjnk3nrjk42nrjk32',
            image: '/images/default_logo.png',
            timezone: { name: 'UTC' },
          },
          parse: function (t) {
            var e = t.stream,
              n = t.directory,
              r = !a.isNull(t.geo_protection),
              i = !a.isNull(t.ripper_protection)
            return (
              (t = a.extend(t, {
                geoProtectionEnabled: r,
                countrylist: r && t.geo_protection.countries,
                blockUnknownGeo: r && t.geo_protection.unknown_geo,
                countryaction: r && t.geo_protection.type,
                ripperProtectionEnabled: i,
                ripperlist: i && t.ripper_protection.user_agents,
                unknownagents: i && t.ripper_protection.block_unknown,
                crossfade: e.crossfade_length,
                url: n.website,
                genre: n.genre,
                city: n.city,
                logo_url: t.logo_url,
                country: n.country,
                keywords: n.keywords,
                language: n.language,
                state: n.state,
                description: n.description,
                outputs: a.reduce(
                  a.keys(t.outputs),
                  function (e, n) {
                    return e.push(t.outputs[n]), e
                  },
                  []
                ),
              })),
              a.omit(t, ['stream', 'directory'])
            )
          },
          hasPermission: function (t) {
            return this._role.hasPermission(t)
          },
          getBandwidth: function () {
            return {
              usage: this.get('usage').bandwidth_usage,
              limit: this.get('plan').bandwidth_limit,
            }
          },
          getStorage: function () {
            return {
              usage: this.get('usage').storage_usage,
              limit: this.get('plan').storage_limit,
            }
          },
          getStoragePercentage: function () {
            return +(
              (this.get('usage').storage_usage /
                this.get('plan').storage_limit) *
              100
            ).toFixed(2)
          },
          getPlan: function () {
            return new r(this.get('plan', {}))
          },
          hasFeature: function (t) {
            return !!this.get('plan') && this.get('plan').features[t]
          },
          getTranscoderHostname: function () {
            return this.get('transcoder').hostname
          },
          getTranscoderPort: function () {
            return this.get('transcoder').port
          },
          getAccount: function () {
            return this.get('account')
          },
          _getAvailableBitrates: function () {
            return this.hasFeature('high_quality_streaming') ? a.union(u, c) : u
          },
          getBitrates: function () {
            return a.pluck(this._getAvailableBitrates(), 'value')
          },
          getBitrateDescription: function (t) {
            return a.findWhere(this._getAvailableBitrates(), { value: t })
              .description
          },
          getRippers: function () {
            return this.get('ripperlist') || l
          },
          getStreamingURL: function (t) {
            var e = this.get('streaming_hostname')
            return a.template(
              'https://<%- hostname %>/<%- station %>/<%- output %>',
              { hostname: e, station: this.get('id'), output: t.name }
            )
          },
          getOutput: function (t) {
            return a.findWhere(this.get('outputs'), { name: t })
          },
          getOutputLimit: function () {
            return this.get('plan').outputs
          },
          getBestQualityOutput: function () {
            return a.max(this.get('outputs'), function (t) {
              return t.bitrate
            })
          },
          removeOutput: function (t) {
            return this.set(
              'outputs',
              a.filter(this.get('outputs'), function (e) {
                return e.name !== t
              })
            )
          },
          setOutput: function (t, e) {
            var n = this.get('outputs')
            ;(n = a.reject(n, function (e) {
              return e.name === t
            })),
              n.push(a.extend(e, { oldName: t })),
              this.set({ outputs: n })
          },
          setGeoProtection: function (t, e, n) {
            return this.set(
              a.isString(t) && !a.isEmpty(e)
                ? {
                    geoProtectionEnabled: !0,
                    geo_protection: { type: t, countries: e, unknown_geo: n },
                  }
                : {
                    geo_protection: null,
                    geoProtectionEnabled: !1,
                    unknown_geo: !1,
                  }
            )
          },
          setRipperProtection: function (t, e) {
            return this.set(
              a.isArray(t)
                ? {
                    ripper_protection: { user_agents: t, block_unknown: e },
                    ripperProtectionEnabled: !0,
                  }
                : { ripper_protection: null, ripperProtectionEnabled: !1 }
            )
          },
          validate: function (t) {
            return '' === t.name
              ? 'Every station must have a name!'
              : 'number' != typeof t.crossfade
              ? 'Crossfade must be a number!'
              : 'boolean' != typeof t.ripprotection
              ? 'Ripping protection must be enabled or disabled.'
              : 'boolean' != typeof t.unknownagents
              ? 'Block unknown agents must be enabled or disabled.'
              : void 0
          },
          initialize: function () {
            var t = this.get('account')
            this._role = new o(t ? t.role : {})
          },
          getTimezone: function () {
            return this.get('timezone').name
          },
          getRole: function () {
            return this._role.get('name')
          },
        })
      )
    })()),
    (y = (function (e) {
      function n(t) {
        ;(this.station = new h({ id: t.stationId })),
          (this.publicApiV1Url = t.publicApiV1Url),
          (this.publicApiV2Url = t.publicApiV2Url),
          (this.pollingTypes = t.pollingTypes),
          (this.realtimeTypes = t.realtimeTypes),
          (this.statusGateway = new u(this.station, this.publicApiV1Url)),
          (this.isPolling = !1),
          (this.isPollingNextTrack = !1),
          (this.channel = new s()),
          (this.embeds = []),
          (this.historyLength = 10),
          (this.maxHistory = 20),
          (this.nextTrackResponse = {}),
          (this.data = {})
      }
      var o = r,
        s = i,
        u = a,
        c = p,
        l = d,
        h = m,
        f = t
      return (
        (n.prototype = {
          createEmbed: function (t) {
            var e = this.createEmbedNode(t)
            this.register(t),
              new o({
                embed: t,
                historyLength: this.historyLength,
                maxHistory: this.maxHistory,
                station: this.station,
                channel: this.channel,
                el: e,
                gateway: this,
              }).init()
          },
          createEmbedNode: function (t) {
            var e = 'radioco_' + t,
              n = document.createElement('div')
            n.className = e
            for (
              var r,
                i = document.getElementsByTagName('script'),
                o = f.template('/embed/<%- stationId %>/<%- type %>.js', {
                  stationId: this.station.get('id'),
                  type: t,
                }),
                s = 0,
                a = i.length;
              s < a;
              s++
            )
              if ((i[s].src.match(o) && (r = i[s]), 'history' === t)) {
                var u = this.getParams(i[s].src)
                ;(this.historyLength = u.l ? u.l : this.historyLength),
                  (n.className = 'radioco_history' + this.historyLength)
              }
            return 'HEAD' === r.parentNode.nodeName
              ? document.body.appendChild(n)
              : (r.parentElement.insertBefore(n, r), n)
          },
          getParams: function (t) {
            var e = {},
              n = document.createElement('a')
            n.href = t
            for (
              var r = n.search.substring(1), i = r.split('&'), o = 0;
              o < i.length;
              o++
            ) {
              var s = i[o].split('=')
              e[s[0]] = decodeURIComponent(s[1])
            }
            return e
          },
          register: function (t) {
            var e = f.template('embed:<%- embedName %>:ready', { embedName: t })
            this.channel.on(
              e,
              function () {
                this.embeds.push(t), this.getInitialState(t)
              }.bind(this)
            )
          },
          getInitialState: function (t) {
            if (-1 === this.realtimeTypes.indexOf(t))
              return 'next' === t
                ? this.startNextTrack(t)
                : this.startPollingEmbed(t)
            this.startRealtimeEmbed(t)
          },
          startPollingEmbed: function () {
            this.isPolling ||
              (this.fetchStatus(),
              (this.statusTimer = setInterval(
                function () {
                  this.fetchStatus()
                }.bind(this),
                1e4
              )),
              (this.isPolling = !0))
          },
          fetchStatus: function () {
            var t = f.template(
              '//<%- hostname %>/stations/<%- station %>/status?v=' +
                +new Date(),
              { hostname: this.publicApiV1Url, station: this.station.get('id') }
            )
            return $.ajax({
              url: t,
              dataType: 'json',
              cache: !0,
              success: function (t) {
                ;(this.status = t), this.mapPollingData(t)
              }.bind(this),
            })
          },
          startNextTrack: function () {
            this.isPollingNextTrack ||
              (this.fetchNextTrack(),
              (this.nextTrackTimer = setInterval(
                function () {
                  this.fetchNextTrack()
                }.bind(this),
                1e4
              )),
              (this.isPollingNextTrack = !0))
          },
          fetchNextTrack: function () {
            var t = f.template(
              '//<%- hostname %>/stations/<%- station %>/next?v=' + +new Date(),
              { hostname: this.publicApiV1Url, station: this.station.get('id') }
            )
            return $.ajax({
              url: t,
              dataType: 'json',
              cache: !0,
              success: function (t) {
                ;(this.nextTrackResponse = t),
                  this.mapNextTrackData(t),
                  this.updateData('next')
              }.bind(this),
            })
          },
          mapNextTrackData: function (t) {
            this.data.next = this.updateNextTrack(t)
          },
          mapPollingData: function (t) {
            ;(this.data.dj = this.updateDj(t)),
              (this.data.history = this.updateHistory(t)),
              this.updateData('dj'),
              this.updateData('history')
          },
          updateDj: function (t) {
            var e = t.status,
              n = t.source,
              r = 'Offline'
            return (
              'online' === e &&
                (r = n.collaborator ? n.collaborator.name : 'Live 24/7'),
              r
            )
          },
          updateNextTrack: function (t) {
            return t.next_track ? t.next_track.title : t.station_name
          },
          updateHistory: function (t) {
            return t.history
          },
          startRealtimeEmbed: function (t) {
            switch (t) {
              case 'status':
                this.startStatusEmbed(t)
                break
              case 'artwork':
              case 'song':
                this.startCurrentTrackEmbed(t)
            }
          },
          startStatusEmbed: function (t) {
            this.statusSubscriber ||
              ((this.statusSubscriber = new c(
                this.station,
                this.publicApiV2Url,
                this.channel
              )),
              this.statusSubscriber.start()),
              this.channel.on(
                'status:changed',
                function () {
                  var e = this.statusSubscriber.getCurrentData()
                  ;(this.data.status =
                    'onair' === e.status ? 'online' : 'offline'),
                    this.updateData(t)
                }.bind(this)
              )
          },
          startCurrentTrackEmbed: function () {
            this.currentTrackSubscriber ||
              ((this.currentTrackSubscriber = new l(
                this.station,
                this.publicApiV2Url,
                this.channel
              )),
              this.currentTrackSubscriber.start()),
              this.channel.on(
                'track:currentChanged',
                function () {
                  var t = this.currentTrackSubscriber.getCurrentData()
                  ;(this.data.artwork =
                    '<img src=' + t.artwork_urls.large + '>'),
                    (this.data.song =
                      t.title.length > 0 ? t.title : 'No information'),
                    this.updateData('artwork'),
                    this.updateData('song')
                }.bind(this)
              )
          },
          updateData: function (t) {
            var e = f.template('embed:<%- embedName %>:update', {
              embedName: t,
            })
            this.channel.trigger(e)
          },
          getDataFor: function (t) {
            return this.data[t]
          },
          cleanup: function () {
            this.isPollingNextTrack && clearTimeout(this.nextTrackTimer),
              this.isPolling && clearTimeout(this.statusTimer),
              this.currentTrackSubscriber && this.currentTrackSubscriber.stop(),
              this.statusSubscriber && this.statusSubscriber.stop()
          },
        }),
        n
      )
    })()),
    (function (t) {
      var e = y
      window.createEmbed = function (t) {
        var n = {
          stationId: window.radiocoEmbedSettings.stationId,
          publicApiV1Url: window.radiocoEmbedSettings.publicApiV1Url,
          publicApiV2Url: window.radiocoEmbedSettings.publicApiV2Url,
          pollingTypes: window.radiocoEmbedSettings.pollingTypes,
          realtimeTypes: window.radiocoEmbedSettings.realtimeTypes,
        }
        window.embedGateway || (window.embedGateway = new e(n)),
          window.embedGateway.createEmbed(t)
      }
    })())
})()

;(function () {
  if (!window.radiocoEmbedSettings) {
    window.radiocoEmbedSettings = {
      stationId: 'sa333a8356',
      publicApiV1Url: 'public.radio.co',
      publicApiV2Url: 'public.radio.co',
      pollingTypes:
        '\u005B\u0022history\u0022,\u0022dj\u0022,\u0022next\u0022\u005D',
      realtimeTypes:
        '\u005B\u0022artwork\u0022,\u0022status\u0022,\u0022song\u0022\u005D',
    }
  }

  createEmbed('song')
})()
