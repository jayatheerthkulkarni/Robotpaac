var yd = Object.defineProperty;
var xd = (n, t, e) =>
  t in n
    ? yd(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var M = (n, t, e) => xd(n, typeof t != 'symbol' ? t + '' : t, e);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === 'childList')
        for (const a of r.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = e(i);
    fetch(i.href, r);
  }
})();
const ja = !1;
var Ii = Array.isArray,
  wd = Array.prototype.indexOf,
  ra = Array.from,
  kd = Object.defineProperty,
  En = Object.getOwnPropertyDescriptor,
  Md = Object.getOwnPropertyDescriptors,
  Sd = Object.prototype,
  Pd = Array.prototype,
  Vl = Object.getPrototypeOf,
  Va = Object.isExtensible;
function Td(n) {
  return n();
}
function Pr(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
const ne = 2,
  ql = 4,
  Ni = 8,
  aa = 16,
  Re = 32,
  zn = 64,
  mi = 128,
  Qt = 256,
  bi = 512,
  Yt = 1024,
  me = 2048,
  yn = 4096,
  Ce = 8192,
  Bi = 16384,
  Dd = 32768,
  zi = 65536,
  Od = 1 << 17,
  Ed = 1 << 19,
  Yl = 1 << 20,
  Tr = 1 << 21,
  Ae = Symbol('$state'),
  Cd = Symbol('legacy props');
function Ul(n) {
  return n === this.v;
}
function Ad(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == 'object') || typeof n == 'function';
}
function $l(n) {
  return !Ad(n, this.v);
}
function Rd(n) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Ld() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Fd(n) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function Id() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Nd(n) {
  throw new Error('https://svelte.dev/e/props_invalid_value');
}
function Bd() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function zd() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function Wd() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Wn = !1,
  Hd = !1;
function jd() {
  Wn = !0;
}
const oa = 1,
  la = 2,
  Xl = 4,
  Vd = 8,
  qd = 16,
  Yd = 2,
  Ud = 1,
  $d = 2,
  Wt = Symbol();
function Xd(n) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let _t = null;
function qa(n) {
  _t = n;
}
function ie(n, t = !1, e) {
  var s = (_t = {
    p: _t,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null,
  });
  Wn && !t && (_t.l = { s: null, u: null, r1: [], r2: bs(!1) }),
    sc(() => {
      s.d = !0;
    });
}
function re(n) {
  const t = _t;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var e = ct,
        s = lt;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var r = a[i];
          Ke(r.effect), be(r.reaction), Ds(r.fn);
        }
      } finally {
        Ke(e), be(s);
      }
    }
    (_t = t.p), (t.m = !0);
  }
  return {};
}
function Wi() {
  return !Wn || (_t !== null && _t.l === null);
}
function Pt(n) {
  if (typeof n != 'object' || n === null || Ae in n) return n;
  const t = Vl(n);
  if (t !== Sd && t !== Pd) return n;
  var e = new Map(),
    s = Ii(n),
    i = V(0),
    r = lt,
    a = (o) => {
      var l = lt;
      be(r);
      var c = o();
      return be(l), c;
    };
  return (
    s && e.set('length', V(n.length)),
    new Proxy(n, {
      defineProperty(o, l, c) {
        (!('value' in c) ||
          c.configurable === !1 ||
          c.enumerable === !1 ||
          c.writable === !1) &&
          Bd();
        var u = e.get(l);
        return (
          u === void 0
            ? ((u = a(() => V(c.value))), e.set(l, u))
            : C(
                u,
                a(() => Pt(c.value)),
              ),
          !0
        );
      },
      deleteProperty(o, l) {
        var c = e.get(l);
        if (c === void 0)
          l in o &&
            (e.set(
              l,
              a(() => V(Wt)),
            ),
            or(i));
        else {
          if (s && typeof l == 'string') {
            var u = e.get('length'),
              d = Number(l);
            Number.isInteger(d) && d < u.v && C(u, d);
          }
          C(c, Wt), or(i);
        }
        return !0;
      },
      get(o, l, c) {
        var g;
        if (l === Ae) return n;
        var u = e.get(l),
          d = l in o;
        if (
          (u === void 0 &&
            (!d || ((g = En(o, l)) != null && g.writable)) &&
            ((u = a(() => V(Pt(d ? o[l] : Wt)))), e.set(l, u)),
          u !== void 0)
        ) {
          var h = v(u);
          return h === Wt ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && 'value' in c) {
          var u = e.get(l);
          u && (c.value = v(u));
        } else if (c === void 0) {
          var d = e.get(l),
            h = d == null ? void 0 : d.v;
          if (d !== void 0 && h !== Wt)
            return { enumerable: !0, configurable: !0, value: h, writable: !0 };
        }
        return c;
      },
      has(o, l) {
        var h;
        if (l === Ae) return !0;
        var c = e.get(l),
          u = (c !== void 0 && c.v !== Wt) || Reflect.has(o, l);
        if (
          c !== void 0 ||
          (ct !== null && (!u || ((h = En(o, l)) != null && h.writable)))
        ) {
          c === void 0 && ((c = a(() => V(u ? Pt(o[l]) : Wt))), e.set(l, c));
          var d = v(c);
          if (d === Wt) return !1;
        }
        return u;
      },
      set(o, l, c, u) {
        var _;
        var d = e.get(l),
          h = l in o;
        if (s && l === 'length')
          for (var g = c; g < d.v; g += 1) {
            var f = e.get(g + '');
            f !== void 0
              ? C(f, Wt)
              : g in o && ((f = a(() => V(Wt))), e.set(g + '', f));
          }
        d === void 0
          ? (!h || ((_ = En(o, l)) != null && _.writable)) &&
            ((d = a(() => V(void 0))),
            C(
              d,
              a(() => Pt(c)),
            ),
            e.set(l, d))
          : ((h = d.v !== Wt),
            C(
              d,
              a(() => Pt(c)),
            ));
        var p = Reflect.getOwnPropertyDescriptor(o, l);
        if ((p != null && p.set && p.set.call(u, c), !h)) {
          if (s && typeof l == 'string') {
            var m = e.get('length'),
              b = Number(l);
            Number.isInteger(b) && b >= m.v && C(m, b + 1);
          }
          or(i);
        }
        return !0;
      },
      ownKeys(o) {
        v(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var h = e.get(d);
          return h === void 0 || h.v !== Wt;
        });
        for (var [c, u] of e) u.v !== Wt && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        zd();
      },
    })
  );
}
function or(n, t = 1) {
  C(n, n.v + t);
}
function Ya(n) {
  try {
    if (n !== null && typeof n == 'object' && Ae in n) return n[Ae];
  } catch {}
  return n;
}
function Qd(n, t) {
  return Object.is(Ya(n), Ya(t));
}
function ca(n) {
  var t = ne | me,
    e = lt !== null && (lt.f & ne) !== 0 ? lt : null;
  return (
    ct === null || (e !== null && (e.f & Qt) !== 0) ? (t |= Qt) : (ct.f |= Yl),
    {
      ctx: _t,
      deps: null,
      effects: null,
      equals: Ul,
      f: t,
      fn: n,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? ct,
    }
  );
}
function ua(n) {
  const t = ca(n);
  return (t.equals = $l), t;
}
function Ql(n) {
  var t = n.effects;
  if (t !== null) {
    n.effects = null;
    for (var e = 0; e < t.length; e += 1) Ge(t[e]);
  }
}
function Gd(n) {
  for (var t = n.parent; t !== null; ) {
    if ((t.f & ne) === 0) return t;
    t = t.parent;
  }
  return null;
}
function Gl(n) {
  var t,
    e = ct;
  Ke(Gd(n));
  try {
    Ql(n), (t = fc(n));
  } finally {
    Ke(e);
  }
  return t;
}
function Kl(n) {
  var t = Gl(n),
    e = (Ve || (n.f & Qt) !== 0) && n.deps !== null ? yn : Yt;
  se(n, e), n.equals(t) || ((n.v = t), (n.wv = dc()));
}
const ms = new Map();
function bs(n, t) {
  var e = { f: 0, v: n, reactions: null, equals: Ul, rv: 0, wv: 0 };
  return e;
}
function V(n, t) {
  const e = bs(n);
  return oh(e), e;
}
function Cn(n, t = !1) {
  var s;
  const e = bs(n);
  return (
    t || (e.equals = $l),
    Wn && _t !== null && _t.l !== null && ((s = _t.l).s ?? (s.s = [])).push(e),
    e
  );
}
function C(n, t, e = !1) {
  lt !== null &&
    !he &&
    Wi() &&
    (lt.f & (ne | aa)) !== 0 &&
    !(Bt != null && Bt.includes(n)) &&
    Wd();
  let s = e ? Pt(t) : t;
  return Dr(n, s);
}
function Dr(n, t) {
  if (!n.equals(t)) {
    var e = n.v;
    Os ? ms.set(n, t) : ms.set(n, e),
      (n.v = t),
      (n.f & ne) !== 0 &&
        ((n.f & me) !== 0 && Gl(n), se(n, (n.f & Qt) === 0 ? Yt : yn)),
      (n.wv = dc()),
      Jl(n, me),
      Wi() &&
        ct !== null &&
        (ct.f & Yt) !== 0 &&
        (ct.f & (Re | zn)) === 0 &&
        (Zt === null ? lh([n]) : Zt.push(n));
  }
  return t;
}
function Jl(n, t) {
  var e = n.reactions;
  if (e !== null)
    for (var s = Wi(), i = e.length, r = 0; r < i; r++) {
      var a = e[r],
        o = a.f;
      (o & me) === 0 &&
        ((!s && a === ct) ||
          (se(a, t),
          (o & (Yt | Qt)) !== 0 && ((o & ne) !== 0 ? Jl(a, yn) : qi(a))));
    }
}
function Kd() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let Jd = !1;
var Ua, Zl, tc, ec;
function Zd() {
  if (Ua === void 0) {
    (Ua = window), (Zl = /Firefox/.test(navigator.userAgent));
    var n = Element.prototype,
      t = Node.prototype,
      e = Text.prototype;
    (tc = En(t, 'firstChild').get),
      (ec = En(t, 'nextSibling').get),
      Va(n) &&
        ((n.__click = void 0),
        (n.__className = void 0),
        (n.__attributes = null),
        (n.__style = void 0),
        (n.__e = void 0)),
      Va(e) && (e.__t = void 0);
  }
}
function da(n = '') {
  return document.createTextNode(n);
}
function _i(n) {
  return tc.call(n);
}
function Hi(n) {
  return ec.call(n);
}
function P(n, t) {
  return _i(n);
}
function tn(n, t) {
  {
    var e = _i(n);
    return e instanceof Comment && e.data === '' ? Hi(e) : e;
  }
}
function A(n, t = 1, e = !1) {
  let s = n;
  for (; t--; ) s = Hi(s);
  return s;
}
function th(n) {
  n.textContent = '';
}
function nc(n) {
  ct === null && lt === null && Fd(),
    lt !== null && (lt.f & Qt) !== 0 && ct === null && Ld(),
    Os && Rd();
}
function eh(n, t) {
  var e = t.last;
  e === null
    ? (t.last = t.first = n)
    : ((e.next = n), (n.prev = e), (t.last = n));
}
function Hn(n, t, e, s = !0) {
  var i = ct,
    r = {
      ctx: _t,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: n | me,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: i,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
    };
  if (e)
    try {
      ga(r), (r.f |= Dd);
    } catch (l) {
      throw (Ge(r), l);
    }
  else t !== null && qi(r);
  var a =
    e &&
    r.deps === null &&
    r.first === null &&
    r.nodes_start === null &&
    r.teardown === null &&
    (r.f & (Yl | mi)) === 0;
  if (!a && s && (i !== null && eh(r, i), lt !== null && (lt.f & ne) !== 0)) {
    var o = lt;
    (o.effects ?? (o.effects = [])).push(r);
  }
  return r;
}
function sc(n) {
  const t = Hn(Ni, null, !1);
  return se(t, Yt), (t.teardown = n), t;
}
function Qe(n) {
  nc();
  var t = ct !== null && (ct.f & Re) !== 0 && _t !== null && !_t.m;
  if (t) {
    var e = _t;
    (e.e ?? (e.e = [])).push({ fn: n, effect: ct, reaction: lt });
  } else {
    var s = Ds(n);
    return s;
  }
}
function nh(n) {
  return nc(), ic(n);
}
function sh(n) {
  const t = Hn(zn, n, !0);
  return (e = {}) =>
    new Promise((s) => {
      e.outro
        ? _s(t, () => {
            Ge(t), s(void 0);
          })
        : (Ge(t), s(void 0));
    });
}
function Ds(n) {
  return Hn(ql, n, !1);
}
function ic(n) {
  return Hn(Ni, n, !0);
}
function ot(n, t = [], e = ca) {
  const s = t.map(e);
  return ji(() => n(...s.map(v)));
}
function ji(n, t = 0) {
  return Hn(Ni | aa | t, n, !0);
}
function Ln(n, t = !0) {
  return Hn(Ni | Re, n, !0, t);
}
function rc(n) {
  var t = n.teardown;
  if (t !== null) {
    const e = Os,
      s = lt;
    $a(!0), be(null);
    try {
      t.call(null);
    } finally {
      $a(e), be(s);
    }
  }
}
function ac(n, t = !1) {
  var e = n.first;
  for (n.first = n.last = null; e !== null; ) {
    var s = e.next;
    (e.f & zn) !== 0 ? (e.parent = null) : Ge(e, t), (e = s);
  }
}
function ih(n) {
  for (var t = n.first; t !== null; ) {
    var e = t.next;
    (t.f & Re) === 0 && Ge(t), (t = e);
  }
}
function Ge(n, t = !0) {
  var e = !1;
  (t || (n.f & Ed) !== 0) &&
    n.nodes_start !== null &&
    (rh(n.nodes_start, n.nodes_end), (e = !0)),
    ac(n, t && !e),
    ki(n, 0),
    se(n, Bi);
  var s = n.transitions;
  if (s !== null) for (const r of s) r.stop();
  rc(n);
  var i = n.parent;
  i !== null && i.first !== null && oc(n),
    (n.next =
      n.prev =
      n.teardown =
      n.ctx =
      n.deps =
      n.fn =
      n.nodes_start =
      n.nodes_end =
        null);
}
function rh(n, t) {
  for (; n !== null; ) {
    var e = n === t ? null : Hi(n);
    n.remove(), (n = e);
  }
}
function oc(n) {
  var t = n.parent,
    e = n.prev,
    s = n.next;
  e !== null && (e.next = s),
    s !== null && (s.prev = e),
    t !== null &&
      (t.first === n && (t.first = s), t.last === n && (t.last = e));
}
function _s(n, t) {
  var e = [];
  ha(n, e, !0),
    lc(e, () => {
      Ge(n), t && t();
    });
}
function lc(n, t) {
  var e = n.length;
  if (e > 0) {
    var s = () => --e || t();
    for (var i of n) i.out(s);
  } else t();
}
function ha(n, t, e) {
  if ((n.f & Ce) === 0) {
    if (((n.f ^= Ce), n.transitions !== null))
      for (const a of n.transitions) (a.is_global || e) && t.push(a);
    for (var s = n.first; s !== null; ) {
      var i = s.next,
        r = (s.f & zi) !== 0 || (s.f & Re) !== 0;
      ha(s, t, r ? e : !1), (s = i);
    }
  }
}
function vi(n) {
  cc(n, !0);
}
function cc(n, t) {
  if ((n.f & Ce) !== 0) {
    (n.f ^= Ce), (n.f & Yt) === 0 && (n.f ^= Yt), Es(n) && (se(n, me), qi(n));
    for (var e = n.first; e !== null; ) {
      var s = e.next,
        i = (e.f & zi) !== 0 || (e.f & Re) !== 0;
      cc(e, i ? t : !1), (e = s);
    }
    if (n.transitions !== null)
      for (const r of n.transitions) (r.is_global || t) && r.in();
  }
}
let yi = [];
function ah() {
  var n = yi;
  (yi = []), Pr(n);
}
function fa(n) {
  yi.length === 0 && queueMicrotask(ah), yi.push(n);
}
let ni = !1,
  Or = !1,
  xi = null,
  fn = !1,
  Os = !1;
function $a(n) {
  Os = n;
}
let si = [];
let lt = null,
  he = !1;
function be(n) {
  lt = n;
}
let ct = null;
function Ke(n) {
  ct = n;
}
let Bt = null;
function oh(n) {
  lt !== null && lt.f & Tr && (Bt === null ? (Bt = [n]) : Bt.push(n));
}
let Nt = null,
  Ut = 0,
  Zt = null;
function lh(n) {
  Zt = n;
}
let uc = 1,
  wi = 0,
  Ve = !1;
function dc() {
  return ++uc;
}
function Es(n) {
  var d;
  var t = n.f;
  if ((t & me) !== 0) return !0;
  if ((t & yn) !== 0) {
    var e = n.deps,
      s = (t & Qt) !== 0;
    if (e !== null) {
      var i,
        r,
        a = (t & bi) !== 0,
        o = s && ct !== null && !Ve,
        l = e.length;
      if (a || o) {
        var c = n,
          u = c.parent;
        for (i = 0; i < l; i++)
          (r = e[i]),
            (a ||
              !(
                (d = r == null ? void 0 : r.reactions) != null && d.includes(c)
              )) &&
              (r.reactions ?? (r.reactions = [])).push(c);
        a && (c.f ^= bi), o && u !== null && (u.f & Qt) === 0 && (c.f ^= Qt);
      }
      for (i = 0; i < l; i++)
        if (((r = e[i]), Es(r) && Kl(r), r.wv > n.wv)) return !0;
    }
    (!s || (ct !== null && !Ve)) && se(n, Yt);
  }
  return !1;
}
function ch(n, t) {
  for (var e = t; e !== null; ) {
    if ((e.f & mi) !== 0)
      try {
        e.fn(n);
        return;
      } catch {
        e.f ^= mi;
      }
    e = e.parent;
  }
  throw ((ni = !1), n);
}
function Xa(n) {
  return (n.f & Bi) === 0 && (n.parent === null || (n.parent.f & mi) === 0);
}
function Vi(n, t, e, s) {
  if (ni) {
    if ((e === null && (ni = !1), Xa(t))) throw n;
    return;
  }
  if ((e !== null && (ni = !0), ch(n, t), Xa(t))) throw n;
}
function hc(n, t, e = !0) {
  var s = n.reactions;
  if (s !== null)
    for (var i = 0; i < s.length; i++) {
      var r = s[i];
      (Bt != null && Bt.includes(n)) ||
        ((r.f & ne) !== 0
          ? hc(r, t, !1)
          : t === r && (e ? se(r, me) : (r.f & Yt) !== 0 && se(r, yn), qi(r)));
    }
}
function fc(n) {
  var g;
  var t = Nt,
    e = Ut,
    s = Zt,
    i = lt,
    r = Ve,
    a = Bt,
    o = _t,
    l = he,
    c = n.f;
  (Nt = null),
    (Ut = 0),
    (Zt = null),
    (Ve = (c & Qt) !== 0 && (he || !fn || lt === null)),
    (lt = (c & (Re | zn)) === 0 ? n : null),
    (Bt = null),
    qa(n.ctx),
    (he = !1),
    wi++,
    (n.f |= Tr);
  try {
    var u = (0, n.fn)(),
      d = n.deps;
    if (Nt !== null) {
      var h;
      if ((ki(n, Ut), d !== null && Ut > 0))
        for (d.length = Ut + Nt.length, h = 0; h < Nt.length; h++)
          d[Ut + h] = Nt[h];
      else n.deps = d = Nt;
      if (!Ve)
        for (h = Ut; h < d.length; h++)
          ((g = d[h]).reactions ?? (g.reactions = [])).push(n);
    } else d !== null && Ut < d.length && (ki(n, Ut), (d.length = Ut));
    if (
      Wi() &&
      Zt !== null &&
      !he &&
      d !== null &&
      (n.f & (ne | yn | me)) === 0
    )
      for (h = 0; h < Zt.length; h++) hc(Zt[h], n);
    return (
      i !== null &&
        i !== n &&
        (wi++, Zt !== null && (s === null ? (s = Zt) : s.push(...Zt))),
      u
    );
  } finally {
    (Nt = t),
      (Ut = e),
      (Zt = s),
      (lt = i),
      (Ve = r),
      (Bt = a),
      qa(o),
      (he = l),
      (n.f ^= Tr);
  }
}
function uh(n, t) {
  let e = t.reactions;
  if (e !== null) {
    var s = wd.call(e, n);
    if (s !== -1) {
      var i = e.length - 1;
      i === 0 ? (e = t.reactions = null) : ((e[s] = e[i]), e.pop());
    }
  }
  e === null &&
    (t.f & ne) !== 0 &&
    (Nt === null || !Nt.includes(t)) &&
    (se(t, yn), (t.f & (Qt | bi)) === 0 && (t.f ^= bi), Ql(t), ki(t, 0));
}
function ki(n, t) {
  var e = n.deps;
  if (e !== null) for (var s = t; s < e.length; s++) uh(n, e[s]);
}
function ga(n) {
  var t = n.f;
  if ((t & Bi) === 0) {
    se(n, Yt);
    var e = ct,
      s = _t,
      i = fn;
    (ct = n), (fn = !0);
    try {
      (t & aa) !== 0 ? ih(n) : ac(n), rc(n);
      var r = fc(n);
      (n.teardown = typeof r == 'function' ? r : null), (n.wv = uc);
      var a = n.deps,
        o;
      ja && Hd && n.f & me;
    } catch (l) {
      Vi(l, n, e, s || n.ctx);
    } finally {
      (fn = i), (ct = e);
    }
  }
}
function dh() {
  try {
    Id();
  } catch (n) {
    if (xi !== null) Vi(n, xi, null);
    else throw n;
  }
}
function hh() {
  var n = fn;
  try {
    var t = 0;
    for (fn = !0; si.length > 0; ) {
      t++ > 1e3 && dh();
      var e = si,
        s = e.length;
      si = [];
      for (var i = 0; i < s; i++) {
        var r = gh(e[i]);
        fh(r);
      }
      ms.clear();
    }
  } finally {
    (Or = !1), (fn = n), (xi = null);
  }
}
function fh(n) {
  var t = n.length;
  if (t !== 0)
    for (var e = 0; e < t; e++) {
      var s = n[e];
      if ((s.f & (Bi | Ce)) === 0)
        try {
          Es(s) &&
            (ga(s),
            s.deps === null &&
              s.first === null &&
              s.nodes_start === null &&
              (s.teardown === null ? oc(s) : (s.fn = null)));
        } catch (i) {
          Vi(i, s, null, s.ctx);
        }
    }
}
function qi(n) {
  Or || ((Or = !0), queueMicrotask(hh));
  for (var t = (xi = n); t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if ((e & (zn | Re)) !== 0) {
      if ((e & Yt) === 0) return;
      t.f ^= Yt;
    }
  }
  si.push(t);
}
function gh(n) {
  for (var t = [], e = n; e !== null; ) {
    var s = e.f,
      i = (s & (Re | zn)) !== 0,
      r = i && (s & Yt) !== 0;
    if (!r && (s & Ce) === 0) {
      if ((s & ql) !== 0) t.push(e);
      else if (i) e.f ^= Yt;
      else
        try {
          Es(e) && ga(e);
        } catch (l) {
          Vi(l, e, null, e.ctx);
        }
      var a = e.first;
      if (a !== null) {
        e = a;
        continue;
      }
    }
    var o = e.parent;
    for (e = e.next; e === null && o !== null; ) (e = o.next), (o = o.parent);
  }
  return t;
}
function v(n) {
  var t = n.f,
    e = (t & ne) !== 0;
  if (lt !== null && !he) {
    if (!(Bt != null && Bt.includes(n))) {
      var s = lt.deps;
      n.rv < wi &&
        ((n.rv = wi),
        Nt === null && s !== null && s[Ut] === n
          ? Ut++
          : Nt === null
            ? (Nt = [n])
            : (!Ve || !Nt.includes(n)) && Nt.push(n));
    }
  } else if (e && n.deps === null && n.effects === null) {
    var i = n,
      r = i.parent;
    r !== null && (r.f & Qt) === 0 && (i.f ^= Qt);
  }
  return e && ((i = n), Es(i) && Kl(i)), Os && ms.has(n) ? ms.get(n) : n.v;
}
function pa(n) {
  var t = he;
  try {
    return (he = !0), n();
  } finally {
    he = t;
  }
}
const ph = -7169;
function se(n, t) {
  n.f = (n.f & ph) | t;
}
function mh(n) {
  if (!(typeof n != 'object' || !n || n instanceof EventTarget)) {
    if (Ae in n) Er(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == 'object' && e && Ae in e && Er(e);
      }
  }
}
function Er(n, t = new Set()) {
  if (
    typeof n == 'object' &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n), n instanceof Date && n.getTime();
    for (let s in n)
      try {
        Er(n[s], t);
      } catch {}
    const e = Vl(n);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const s = Md(e);
      for (let i in s) {
        const r = s[i].get;
        if (r)
          try {
            r.call(n);
          } catch {}
      }
    }
  }
}
const bh = ['touchstart', 'touchmove'];
function _h(n) {
  return bh.includes(n);
}
let Qa = !1;
function vh() {
  Qa ||
    ((Qa = !0),
    document.addEventListener(
      'reset',
      (n) => {
        Promise.resolve().then(() => {
          var t;
          if (!n.defaultPrevented)
            for (const e of n.target.elements)
              (t = e.__on_r) == null || t.call(e);
        });
      },
      { capture: !0 },
    ));
}
function gc(n) {
  var t = lt,
    e = ct;
  be(null), Ke(null);
  try {
    return n();
  } finally {
    be(t), Ke(e);
  }
}
function yh(n, t, e, s = e) {
  n.addEventListener(t, () => gc(e));
  const i = n.__on_r;
  i
    ? (n.__on_r = () => {
        i(), s(!0);
      })
    : (n.__on_r = () => s(!0)),
    vh();
}
const pc = new Set(),
  Cr = new Set();
function xh(n, t, e, s = {}) {
  function i(r) {
    if ((s.capture || ns.call(t, r), !r.cancelBubble))
      return gc(() => (e == null ? void 0 : e.call(this, r)));
  }
  return (
    n.startsWith('pointer') || n.startsWith('touch') || n === 'wheel'
      ? fa(() => {
          t.addEventListener(n, i, s);
        })
      : t.addEventListener(n, i, s),
    i
  );
}
function wh(n, t, e, s, i) {
  var r = { capture: s, passive: i },
    a = xh(n, t, e, r);
  (t === document.body || t === window || t === document) &&
    sc(() => {
      t.removeEventListener(n, a, r);
    });
}
function kh(n) {
  for (var t = 0; t < n.length; t++) pc.add(n[t]);
  for (var e of Cr) e(n);
}
function ns(n) {
  var _;
  var t = this,
    e = t.ownerDocument,
    s = n.type,
    i = ((_ = n.composedPath) == null ? void 0 : _.call(n)) || [],
    r = i[0] || n.target,
    a = 0,
    o = n.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === window)) {
      n.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1) return;
    l <= c && (a = l);
  }
  if (((r = i[a] || n.target), r !== t)) {
    kd(n, 'currentTarget', {
      configurable: !0,
      get() {
        return r || e;
      },
    });
    var u = lt,
      d = ct;
    be(null), Ke(null);
    try {
      for (var h, g = []; r !== null; ) {
        var f = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var p = r['__' + s];
          if (p != null && (!r.disabled || n.target === r))
            if (Ii(p)) {
              var [m, ...b] = p;
              m.apply(r, [n, ...b]);
            } else p.call(r, n);
        } catch (x) {
          h ? g.push(x) : (h = x);
        }
        if (n.cancelBubble || f === t || f === null) break;
        r = f;
      }
      if (h) {
        for (let x of g)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      (n.__root = t), delete n.currentTarget, be(u), Ke(d);
    }
  }
}
function Mh(n) {
  var t = document.createElement('template');
  return (t.innerHTML = n), t.content;
}
function Ar(n, t) {
  var e = ct;
  e.nodes_start === null && ((e.nodes_start = n), (e.nodes_end = t));
}
function z(n, t) {
  var e = (t & Ud) !== 0,
    s = (t & $d) !== 0,
    i,
    r = !n.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Mh(r ? n : '<!>' + n)), e || (i = _i(i)));
    var a = s || Zl ? document.importNode(i, !0) : i.cloneNode(!0);
    if (e) {
      var o = _i(a),
        l = a.lastChild;
      Ar(o, l);
    } else Ar(a, a);
    return a;
  };
}
function Sh() {
  var n = document.createDocumentFragment(),
    t = document.createComment(''),
    e = da();
  return n.append(t, e), Ar(t, e), n;
}
function N(n, t) {
  n !== null && n.before(t);
}
function j(n, t) {
  var e = t == null ? '' : typeof t == 'object' ? t + '' : t;
  e !== (n.__t ?? (n.__t = n.nodeValue)) &&
    ((n.__t = e), (n.nodeValue = e + ''));
}
function Ph(n, t) {
  return Th(n, t);
}
const Pn = new Map();
function Th(
  n,
  { target: t, anchor: e, props: s = {}, events: i, context: r, intro: a = !0 },
) {
  Zd();
  var o = new Set(),
    l = (d) => {
      for (var h = 0; h < d.length; h++) {
        var g = d[h];
        if (!o.has(g)) {
          o.add(g);
          var f = _h(g);
          t.addEventListener(g, ns, { passive: f });
          var p = Pn.get(g);
          p === void 0
            ? (document.addEventListener(g, ns, { passive: f }), Pn.set(g, 1))
            : Pn.set(g, p + 1);
        }
      }
    };
  l(ra(pc)), Cr.add(l);
  var c = void 0,
    u = sh(() => {
      var d = e ?? t.appendChild(da());
      return (
        Ln(() => {
          if (r) {
            ie({});
            var h = _t;
            h.c = r;
          }
          i && (s.$$events = i), (c = n(d, s) || {}), r && re();
        }),
        () => {
          var f;
          for (var h of o) {
            t.removeEventListener(h, ns);
            var g = Pn.get(h);
            --g === 0
              ? (document.removeEventListener(h, ns), Pn.delete(h))
              : Pn.set(h, g);
          }
          Cr.delete(l),
            d !== e && ((f = d.parentNode) == null || f.removeChild(d));
        }
      );
    });
  return Dh.set(c, u), c;
}
let Dh = new WeakMap();
function dt(n, t, [e, s] = [0, 0]) {
  var i = n,
    r = null,
    a = null,
    o = Wt,
    l = e > 0 ? zi : 0,
    c = !1;
  const u = (h, g = !0) => {
      (c = !0), d(g, h);
    },
    d = (h, g) => {
      o !== (o = h) &&
        (o
          ? (r ? vi(r) : g && (r = Ln(() => g(i))),
            a &&
              _s(a, () => {
                a = null;
              }))
          : (a ? vi(a) : g && (a = Ln(() => g(i, [e + 1, s]))),
            r &&
              _s(r, () => {
                r = null;
              })));
    };
  ji(() => {
    (c = !1), t(u), c || d(null, null);
  }, l);
}
function Cs(n, t) {
  return t;
}
function Oh(n, t, e, s) {
  for (var i = [], r = t.length, a = 0; a < r; a++) ha(t[a].e, i, !0);
  var o = r > 0 && i.length === 0 && e !== null;
  if (o) {
    var l = e.parentNode;
    th(l), l.append(e), s.clear(), je(n, t[0].prev, t[r - 1].next);
  }
  lc(i, () => {
    for (var c = 0; c < r; c++) {
      var u = t[c];
      o || (s.delete(u.k), je(n, u.prev, u.next)), Ge(u.e, !o);
    }
  });
}
function _e(n, t, e, s, i, r = null) {
  var a = n,
    o = { flags: t, items: new Map(), first: null },
    l = (t & Xl) !== 0;
  if (l) {
    var c = n;
    a = c.appendChild(da());
  }
  var u = null,
    d = !1,
    h = ua(() => {
      var g = e();
      return Ii(g) ? g : g == null ? [] : ra(g);
    });
  ji(() => {
    var g = v(h),
      f = g.length;
    (d && f === 0) ||
      ((d = f === 0),
      Eh(g, o, a, i, t, s, e),
      r !== null &&
        (f === 0
          ? u
            ? vi(u)
            : (u = Ln(() => r(a)))
          : u !== null &&
            _s(u, () => {
              u = null;
            })),
      v(h));
  });
}
function Eh(n, t, e, s, i, r, a) {
  var Z, U, q, K;
  var o = (i & Vd) !== 0,
    l = (i & (oa | la)) !== 0,
    c = n.length,
    u = t.items,
    d = t.first,
    h = d,
    g,
    f = null,
    p,
    m = [],
    b = [],
    _,
    x,
    w,
    y;
  if (o)
    for (y = 0; y < c; y += 1)
      (_ = n[y]),
        (x = r(_, y)),
        (w = u.get(x)),
        w !== void 0 &&
          ((Z = w.a) == null || Z.measure(), (p ?? (p = new Set())).add(w));
  for (y = 0; y < c; y += 1) {
    if (((_ = n[y]), (x = r(_, y)), (w = u.get(x)), w === void 0)) {
      var D = h ? h.e.nodes_start : e;
      (f = Ah(D, t, f, f === null ? t.first : f.next, _, x, y, s, i, a)),
        u.set(x, f),
        (m = []),
        (b = []),
        (h = f.next);
      continue;
    }
    if (
      (l && Ch(w, _, y, i),
      (w.e.f & Ce) !== 0 &&
        (vi(w.e),
        o &&
          ((U = w.a) == null || U.unfix(), (p ?? (p = new Set())).delete(w))),
      w !== h)
    ) {
      if (g !== void 0 && g.has(w)) {
        if (m.length < b.length) {
          var T = b[0],
            k;
          f = T.prev;
          var O = m[0],
            L = m[m.length - 1];
          for (k = 0; k < m.length; k += 1) Ga(m[k], T, e);
          for (k = 0; k < b.length; k += 1) g.delete(b[k]);
          je(t, O.prev, L.next),
            je(t, f, O),
            je(t, L, T),
            (h = T),
            (f = L),
            (y -= 1),
            (m = []),
            (b = []);
        } else
          g.delete(w),
            Ga(w, h, e),
            je(t, w.prev, w.next),
            je(t, w, f === null ? t.first : f.next),
            je(t, f, w),
            (f = w);
        continue;
      }
      for (m = [], b = []; h !== null && h.k !== x; )
        (h.e.f & Ce) === 0 && (g ?? (g = new Set())).add(h),
          b.push(h),
          (h = h.next);
      if (h === null) continue;
      w = h;
    }
    m.push(w), (f = w), (h = w.next);
  }
  if (h !== null || g !== void 0) {
    for (var R = g === void 0 ? [] : ra(g); h !== null; )
      (h.e.f & Ce) === 0 && R.push(h), (h = h.next);
    var E = R.length;
    if (E > 0) {
      var W = (i & Xl) !== 0 && c === 0 ? e : null;
      if (o) {
        for (y = 0; y < E; y += 1) (q = R[y].a) == null || q.measure();
        for (y = 0; y < E; y += 1) (K = R[y].a) == null || K.fix();
      }
      Oh(t, R, W, u);
    }
  }
  o &&
    fa(() => {
      var Y;
      if (p !== void 0) for (w of p) (Y = w.a) == null || Y.apply();
    }),
    (ct.first = t.first && t.first.e),
    (ct.last = f && f.e);
}
function Ch(n, t, e, s) {
  (s & oa) !== 0 && Dr(n.v, t), (s & la) !== 0 ? Dr(n.i, e) : (n.i = e);
}
function Ah(n, t, e, s, i, r, a, o, l, c) {
  var u = (l & oa) !== 0,
    d = (l & qd) === 0,
    h = u ? (d ? Cn(i) : bs(i)) : i,
    g = (l & la) === 0 ? a : bs(a),
    f = { i: g, v: h, k: r, a: null, e: null, prev: e, next: s };
  try {
    return (
      (f.e = Ln(() => o(n, h, g, c), Jd)),
      (f.e.prev = e && e.e),
      (f.e.next = s && s.e),
      e === null ? (t.first = f) : ((e.next = f), (e.e.next = f.e)),
      s !== null && ((s.prev = f), (s.e.prev = f.e)),
      f
    );
  } finally {
  }
}
function Ga(n, t, e) {
  for (
    var s = n.next ? n.next.e.nodes_start : e,
      i = t ? t.e.nodes_start : e,
      r = n.e.nodes_start;
    r !== s;

  ) {
    var a = Hi(r);
    i.before(r), (r = a);
  }
}
function je(n, t, e) {
  t === null ? (n.first = e) : ((t.next = e), (t.e.next = e && e.e)),
    e !== null && ((e.prev = t), (e.e.prev = t && t.e));
}
function Rh(n, t, e) {
  var s = n,
    i,
    r;
  ji(() => {
    i !== (i = t()) && (r && (_s(r), (r = null)), i && (r = Ln(() => e(s, i))));
  }, zi);
}
function mc(n) {
  var t,
    e,
    s = '';
  if (typeof n == 'string' || typeof n == 'number') s += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var i = n.length;
      for (t = 0; t < i; t++)
        n[t] && (e = mc(n[t])) && (s && (s += ' '), (s += e));
    } else for (e in n) n[e] && (s && (s += ' '), (s += e));
  return s;
}
function Lh() {
  for (var n, t, e = 0, s = '', i = arguments.length; e < i; e++)
    (n = arguments[e]) && (t = mc(n)) && (s && (s += ' '), (s += t));
  return s;
}
function ce(n) {
  return typeof n == 'object' ? Lh(n) : (n ?? '');
}
const Ka = [
  ...` 	
\r\f \v\uFEFF`,
];
function Fh(n, t, e) {
  var s = n == null ? '' : '' + n;
  if ((t && (s = s ? s + ' ' + t : t), e)) {
    for (var i in e)
      if (e[i]) s = s ? s + ' ' + i : i;
      else if (s.length)
        for (var r = i.length, a = 0; (a = s.indexOf(i, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || Ka.includes(s[a - 1])) &&
          (o === s.length || Ka.includes(s[o]))
            ? (s = (a === 0 ? '' : s.substring(0, a)) + s.substring(o + 1))
            : (a = o);
        }
  }
  return s === '' ? null : s;
}
function Et(n, t, e, s, i, r) {
  var a = n.__className;
  if (a !== e || a === void 0) {
    var o = Fh(e, s, r);
    o == null ? n.removeAttribute('class') : (n.className = o),
      (n.__className = e);
  } else if (r && i !== r)
    for (var l in r) {
      var c = !!r[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function bc(n, t, e) {
  if (n.multiple) return t == null ? void 0 : Ii(t) ? Nh(n, t) : Kd();
  for (var s of n.options) {
    var i = cs(s);
    if (Qd(i, t)) {
      s.selected = !0;
      return;
    }
  }
  (!e || t !== void 0) && (n.selectedIndex = -1);
}
function Ih(n, t) {
  Ds(() => {
    var e = new MutationObserver(() => {
      var s = n.__value;
      bc(n, s);
    });
    return (
      e.observe(n, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ['value'],
      }),
      () => {
        e.disconnect();
      }
    );
  });
}
function An(n, t, e = t) {
  var s = !0;
  yh(n, 'change', (i) => {
    var r = i ? '[selected]' : ':checked',
      a;
    if (n.multiple) a = [].map.call(n.querySelectorAll(r), cs);
    else {
      var o = n.querySelector(r) ?? n.querySelector('option:not([disabled])');
      a = o && cs(o);
    }
    e(a);
  }),
    Ds(() => {
      var i = t();
      if ((bc(n, i, s), s && i === void 0)) {
        var r = n.querySelector(':checked');
        r !== null && ((i = cs(r)), e(i));
      }
      (n.__value = i), (s = !1);
    }),
    Ih(n);
}
function Nh(n, t) {
  for (var e of n.options) e.selected = t.includes(cs(e));
}
function cs(n) {
  return '__value' in n ? n.__value : n.value;
}
function Ja(n, t) {
  return n === t || (n == null ? void 0 : n[Ae]) === t;
}
function jn(n = {}, t, e, s) {
  return (
    Ds(() => {
      var i, r;
      return (
        ic(() => {
          (i = r),
            (r = []),
            pa(() => {
              n !== e(...r) &&
                (t(n, ...r), i && Ja(e(...i), n) && t(null, ...i));
            });
        }),
        () => {
          fa(() => {
            r && Ja(e(...r), n) && t(null, ...r);
          });
        }
      );
    }),
    n
  );
}
function _c(n = !1) {
  const t = _t,
    e = t.l.u;
  if (!e) return;
  let s = () => mh(t.s);
  if (n) {
    let i = 0,
      r = {};
    const a = ca(() => {
      let o = !1;
      const l = t.s;
      for (const c in l) l[c] !== r[c] && ((r[c] = l[c]), (o = !0));
      return o && i++, i;
    });
    s = () => v(a);
  }
  e.b.length &&
    nh(() => {
      Za(t, s), Pr(e.b);
    }),
    Qe(() => {
      const i = pa(() => e.m.map(Td));
      return () => {
        for (const r of i) typeof r == 'function' && r();
      };
    }),
    e.a.length &&
      Qe(() => {
        Za(t, s), Pr(e.a);
      });
}
function Za(n, t) {
  if (n.l.s) for (const e of n.l.s) v(e);
  t();
}
let zs = !1;
function Bh(n) {
  var t = zs;
  try {
    return (zs = !1), [n(), zs];
  } finally {
    zs = t;
  }
}
function zh(n, t, e, s) {
  var f;
  var i = !Wn || (e & Yd) !== 0,
    r = !1,
    a;
  [a, r] = Bh(() => n[t]);
  var o = Ae in n || Cd in n,
    l =
      (((f = En(n, t)) == null ? void 0 : f.set) ??
        (o && t in n && ((p) => (n[t] = p)))) ||
      void 0,
    c = s,
    u = !0,
    d = () => (u && ((u = !1), (c = s)), c);
  a === void 0 && s !== void 0 && (l && i && Nd(), (a = d()), l && l(a));
  var h;
  if (i)
    h = () => {
      var p = n[t];
      return p === void 0 ? d() : ((u = !0), p);
    };
  else {
    var g = ua(() => n[t]);
    (g.f |= Od),
      (h = () => {
        var p = v(g);
        return p !== void 0 && (c = void 0), p === void 0 ? c : p;
      });
  }
  return h;
}
function ye(n) {
  _t === null && Xd(),
    Wn && _t.l !== null
      ? Wh(_t).m.push(n)
      : Qe(() => {
          const t = pa(n);
          if (typeof t == 'function') return t;
        });
}
function Wh(n) {
  var t = n.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Hh = '5';
var jl;
typeof window < 'u' &&
  (
    (jl = window.__svelte ?? (window.__svelte = {})).v ?? (jl.v = new Set())
  ).add(Hh);
var jh = z(
  '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/dashboard/logo.png" alt="Main logo" class="svelte-1t3skh"></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
);
function Vh(n, t) {
  ie(t, !0);
  let e = V('');
  ye(() => {
    C(e, window.location.pathname, !0), console.log('currentPath:', v(e));
  });
  function s(k) {
    return k === '/' ? v(e) === '/' : v(e).startsWith(k);
  }
  var i = jh(),
    r = A(P(i), 2),
    a = P(r),
    o = P(a);
  let l;
  var c = A(a, 2),
    u = P(c);
  let d;
  var h = A(c, 2),
    g = P(h);
  let f;
  var p = A(h, 2),
    m = P(p);
  let b;
  var _ = A(p, 2),
    x = P(_);
  let w;
  var y = A(_, 2),
    D = P(y);
  let T;
  ot(
    (k, O, L, R, E, W) => {
      (l = Et(o, 1, 'svelte-1t3skh', null, l, k)),
        (d = Et(u, 1, 'svelte-1t3skh', null, d, O)),
        (f = Et(g, 1, 'svelte-1t3skh', null, f, L)),
        (b = Et(m, 1, 'svelte-1t3skh', null, b, R)),
        (w = Et(x, 1, 'svelte-1t3skh', null, w, E)),
        (T = Et(D, 1, 'svelte-1t3skh', null, T, W));
    },
    [
      () => ({ active: s('/') }),
      () => ({ active: s('/product') }),
      () => ({ active: s('/suppliers') }),
      () => ({ active: s('/customers') }),
      () => ({ active: s('/inwards') }),
      () => ({ active: s('/outwards') }),
    ],
  ),
    N(n, i),
    re();
}
jd();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function As(n) {
  return (n + 0.5) | 0;
}
const qe = (n, t, e) => Math.max(Math.min(n, e), t);
function ss(n) {
  return qe(As(n * 2.55), 0, 255);
}
function Xe(n) {
  return qe(As(n * 255), 0, 255);
}
function Te(n) {
  return qe(As(n / 2.55) / 100, 0, 1);
}
function to(n) {
  return qe(As(n * 100), 0, 100);
}
const Jt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Rr = [...'0123456789ABCDEF'],
  qh = (n) => Rr[n & 15],
  Yh = (n) => Rr[(n & 240) >> 4] + Rr[n & 15],
  Ws = (n) => (n & 240) >> 4 === (n & 15),
  Uh = (n) => Ws(n.r) && Ws(n.g) && Ws(n.b) && Ws(n.a);
function $h(n) {
  var t = n.length,
    e;
  return (
    n[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (Jt[n[1]] * 17),
            g: 255 & (Jt[n[2]] * 17),
            b: 255 & (Jt[n[3]] * 17),
            a: t === 5 ? Jt[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (Jt[n[1]] << 4) | Jt[n[2]],
            g: (Jt[n[3]] << 4) | Jt[n[4]],
            b: (Jt[n[5]] << 4) | Jt[n[6]],
            a: t === 9 ? (Jt[n[7]] << 4) | Jt[n[8]] : 255,
          })),
    e
  );
}
const Xh = (n, t) => (n < 255 ? t(n) : '');
function Qh(n) {
  var t = Uh(n) ? qh : Yh;
  return n ? '#' + t(n.r) + t(n.g) + t(n.b) + Xh(n.a, t) : void 0;
}
const Gh =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function vc(n, t, e) {
  const s = t * Math.min(e, 1 - e),
    i = (r, a = (r + n / 30) % 12) =>
      e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [i(0), i(8), i(4)];
}
function Kh(n, t, e) {
  const s = (i, r = (i + n / 60) % 6) =>
    e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [s(5), s(3), s(1)];
}
function Jh(n, t, e) {
  const s = vc(n, 1, 0.5);
  let i;
  for (t + e > 1 && ((i = 1 / (t + e)), (t *= i), (e *= i)), i = 0; i < 3; i++)
    (s[i] *= 1 - t - e), (s[i] += t);
  return s;
}
function Zh(n, t, e, s, i) {
  return n === i
    ? (t - e) / s + (t < e ? 6 : 0)
    : t === i
      ? (e - n) / s + 2
      : (n - t) / s + 4;
}
function ma(n) {
  const e = n.r / 255,
    s = n.g / 255,
    i = n.b / 255,
    r = Math.max(e, s, i),
    a = Math.min(e, s, i),
    o = (r + a) / 2;
  let l, c, u;
  return (
    r !== a &&
      ((u = r - a),
      (c = o > 0.5 ? u / (2 - r - a) : u / (r + a)),
      (l = Zh(e, s, i, u, r)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, o]
  );
}
function ba(n, t, e, s) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, s)).map(Xe);
}
function _a(n, t, e) {
  return ba(vc, n, t, e);
}
function tf(n, t, e) {
  return ba(Jh, n, t, e);
}
function ef(n, t, e) {
  return ba(Kh, n, t, e);
}
function yc(n) {
  return ((n % 360) + 360) % 360;
}
function nf(n) {
  const t = Gh.exec(n);
  let e = 255,
    s;
  if (!t) return;
  t[5] !== s && (e = t[6] ? ss(+t[5]) : Xe(+t[5]));
  const i = yc(+t[2]),
    r = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === 'hwb'
      ? (s = tf(i, r, a))
      : t[1] === 'hsv'
        ? (s = ef(i, r, a))
        : (s = _a(i, r, a)),
    { r: s[0], g: s[1], b: s[2], a: e }
  );
}
function sf(n, t) {
  var e = ma(n);
  (e[0] = yc(e[0] + t)), (e = _a(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
}
function rf(n) {
  if (!n) return;
  const t = ma(n),
    e = t[0],
    s = to(t[1]),
    i = to(t[2]);
  return n.a < 255
    ? `hsla(${e}, ${s}%, ${i}%, ${Te(n.a)})`
    : `hsl(${e}, ${s}%, ${i}%)`;
}
const eo = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  no = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
function af() {
  const n = {},
    t = Object.keys(no),
    e = Object.keys(eo);
  let s, i, r, a, o;
  for (s = 0; s < t.length; s++) {
    for (a = o = t[s], i = 0; i < e.length; i++)
      (r = e[i]), (o = o.replace(r, eo[r]));
    (r = parseInt(no[a], 16)),
      (n[o] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
  }
  return n;
}
let Hs;
function of(n) {
  Hs || ((Hs = af()), (Hs.transparent = [0, 0, 0, 0]));
  const t = Hs[n.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const lf =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function cf(n) {
  const t = lf.exec(n);
  let e = 255,
    s,
    i,
    r;
  if (t) {
    if (t[7] !== s) {
      const a = +t[7];
      e = t[8] ? ss(a) : qe(a * 255, 0, 255);
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (r = +t[5]),
      (s = 255 & (t[2] ? ss(s) : qe(s, 0, 255))),
      (i = 255 & (t[4] ? ss(i) : qe(i, 0, 255))),
      (r = 255 & (t[6] ? ss(r) : qe(r, 0, 255))),
      { r: s, g: i, b: r, a: e }
    );
  }
}
function uf(n) {
  return (
    n &&
    (n.a < 255
      ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Te(n.a)})`
      : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const lr = (n) =>
    n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
  Tn = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function df(n, t, e) {
  const s = Tn(Te(n.r)),
    i = Tn(Te(n.g)),
    r = Tn(Te(n.b));
  return {
    r: Xe(lr(s + e * (Tn(Te(t.r)) - s))),
    g: Xe(lr(i + e * (Tn(Te(t.g)) - i))),
    b: Xe(lr(r + e * (Tn(Te(t.b)) - r))),
    a: n.a + e * (t.a - n.a),
  };
}
function js(n, t, e) {
  if (n) {
    let s = ma(n);
    (s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
      (s = _a(s)),
      (n.r = s[0]),
      (n.g = s[1]),
      (n.b = s[2]);
  }
}
function xc(n, t) {
  return n && Object.assign(t || {}, n);
}
function so(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((t = { r: n[0], g: n[1], b: n[2], a: 255 }),
        n.length > 3 && (t.a = Xe(n[3])))
      : ((t = xc(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Xe(t.a))),
    t
  );
}
function hf(n) {
  return n.charAt(0) === 'r' ? cf(n) : nf(n);
}
class vs {
  constructor(t) {
    if (t instanceof vs) return t;
    const e = typeof t;
    let s;
    e === 'object'
      ? (s = so(t))
      : e === 'string' && (s = $h(t) || of(t) || hf(t)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = xc(this._rgb);
    return t && (t.a = Te(t.a)), t;
  }
  set rgb(t) {
    this._rgb = so(t);
  }
  rgbString() {
    return this._valid ? uf(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Qh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? rf(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb,
        i = t.rgb;
      let r;
      const a = e === r ? 0.5 : e,
        o = 2 * a - 1,
        l = s.a - i.a,
        c = ((o * l === -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
      (r = 1 - c),
        (s.r = 255 & (c * s.r + r * i.r + 0.5)),
        (s.g = 255 & (c * s.g + r * i.g + 0.5)),
        (s.b = 255 & (c * s.b + r * i.b + 0.5)),
        (s.a = a * s.a + (1 - a) * i.a),
        (this.rgb = s);
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = df(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new vs(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Xe(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = As(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = e), this;
  }
  opaquer(t) {
    const e = this._rgb;
    return (e.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return js(this._rgb, 2, t), this;
  }
  darken(t) {
    return js(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return js(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return js(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return sf(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function Me() {}
const ff = (() => {
  let n = 0;
  return () => n++;
})();
function et(n) {
  return n == null;
}
function gt(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function nt(n) {
  return n !== null && Object.prototype.toString.call(n) === '[object Object]';
}
function vt(n) {
  return (typeof n == 'number' || n instanceof Number) && isFinite(+n);
}
function $t(n, t) {
  return vt(n) ? n : t;
}
function G(n, t) {
  return typeof n > 'u' ? t : n;
}
const gf = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? parseFloat(n) / 100 : +n / t,
  wc = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n;
function ut(n, t, e) {
  if (n && typeof n.call == 'function') return n.apply(e, t);
}
function at(n, t, e, s) {
  let i, r, a;
  if (gt(n)) for (r = n.length, i = 0; i < r; i++) t.call(e, n[i], i);
  else if (nt(n))
    for (a = Object.keys(n), r = a.length, i = 0; i < r; i++)
      t.call(e, n[a[i]], a[i]);
}
function Mi(n, t) {
  let e, s, i, r;
  if (!n || !t || n.length !== t.length) return !1;
  for (e = 0, s = n.length; e < s; ++e)
    if (
      ((i = n[e]),
      (r = t[e]),
      i.datasetIndex !== r.datasetIndex || i.index !== r.index)
    )
      return !1;
  return !0;
}
function Si(n) {
  if (gt(n)) return n.map(Si);
  if (nt(n)) {
    const t = Object.create(null),
      e = Object.keys(n),
      s = e.length;
    let i = 0;
    for (; i < s; ++i) t[e[i]] = Si(n[e[i]]);
    return t;
  }
  return n;
}
function kc(n) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1;
}
function pf(n, t, e, s) {
  if (!kc(n)) return;
  const i = t[n],
    r = e[n];
  nt(i) && nt(r) ? ys(i, r, s) : (t[n] = Si(r));
}
function ys(n, t, e) {
  const s = gt(t) ? t : [t],
    i = s.length;
  if (!nt(n)) return n;
  e = e || {};
  const r = e.merger || pf;
  let a;
  for (let o = 0; o < i; ++o) {
    if (((a = s[o]), !nt(a))) continue;
    const l = Object.keys(a);
    for (let c = 0, u = l.length; c < u; ++c) r(l[c], n, a, e);
  }
  return n;
}
function us(n, t) {
  return ys(n, t, { merger: mf });
}
function mf(n, t, e) {
  if (!kc(n)) return;
  const s = t[n],
    i = e[n];
  nt(s) && nt(i)
    ? us(s, i)
    : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Si(i));
}
const io = { '': (n) => n, x: (n) => n.x, y: (n) => n.y };
function bf(n) {
  const t = n.split('.'),
    e = [];
  let s = '';
  for (const i of t)
    (s += i),
      s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (e.push(s), (s = ''));
  return e;
}
function _f(n) {
  const t = bf(n);
  return (e) => {
    for (const s of t) {
      if (s === '') break;
      e = e && e[s];
    }
    return e;
  };
}
function Je(n, t) {
  return (io[t] || (io[t] = _f(t)))(n);
}
function va(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const xs = (n) => typeof n < 'u',
  Ze = (n) => typeof n == 'function',
  ro = (n, t) => {
    if (n.size !== t.size) return !1;
    for (const e of n) if (!t.has(e)) return !1;
    return !0;
  };
function vf(n) {
  return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu';
}
const ft = Math.PI,
  ht = 2 * ft,
  yf = ht + ft,
  Pi = Number.POSITIVE_INFINITY,
  xf = ft / 180,
  kt = ft / 2,
  sn = ft / 4,
  ao = (ft * 2) / 3,
  Ye = Math.log10,
  pe = Math.sign;
function ds(n, t, e) {
  return Math.abs(n - t) < e;
}
function oo(n) {
  const t = Math.round(n);
  n = ds(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(Ye(n))),
    s = n / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function wf(n) {
  const t = [],
    e = Math.sqrt(n);
  let s;
  for (s = 1; s < e; s++) n % s === 0 && (t.push(s), t.push(n / s));
  return e === (e | 0) && t.push(e), t.sort((i, r) => i - r).pop(), t;
}
function kf(n) {
  return (
    typeof n == 'symbol' ||
    (typeof n == 'object' &&
      n !== null &&
      !(Symbol.toPrimitive in n || 'toString' in n || 'valueOf' in n))
  );
}
function Fn(n) {
  return !kf(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function Mf(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Mc(n, t, e) {
  let s, i, r;
  for (s = 0, i = n.length; s < i; s++)
    (r = n[s][e]),
      isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function te(n) {
  return n * (ft / 180);
}
function ya(n) {
  return n * (180 / ft);
}
function lo(n) {
  if (!vt(n)) return;
  let t = 1,
    e = 0;
  for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
  return e;
}
function Sc(n, t) {
  const e = t.x - n.x,
    s = t.y - n.y,
    i = Math.sqrt(e * e + s * s);
  let r = Math.atan2(s, e);
  return r < -0.5 * ft && (r += ht), { angle: r, distance: i };
}
function Lr(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function Sf(n, t) {
  return ((n - t + yf) % ht) - ft;
}
function Xt(n) {
  return ((n % ht) + ht) % ht;
}
function ws(n, t, e, s) {
  const i = Xt(n),
    r = Xt(t),
    a = Xt(e),
    o = Xt(r - i),
    l = Xt(a - i),
    c = Xt(i - r),
    u = Xt(i - a);
  return i === r || i === a || (s && r === a) || (o > l && c < u);
}
function Ot(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Pf(n) {
  return Ot(n, -32768, 32767);
}
function De(n, t, e, s = 1e-6) {
  return n >= Math.min(t, e) - s && n <= Math.max(t, e) + s;
}
function xa(n, t, e) {
  e = e || ((a) => n[a] < t);
  let s = n.length - 1,
    i = 0,
    r;
  for (; s - i > 1; ) (r = (i + s) >> 1), e(r) ? (i = r) : (s = r);
  return { lo: i, hi: s };
}
const Oe = (n, t, e, s) =>
    xa(
      n,
      e,
      s
        ? (i) => {
            const r = n[i][t];
            return r < e || (r === e && n[i + 1][t] === e);
          }
        : (i) => n[i][t] < e,
    ),
  Tf = (n, t, e) => xa(n, e, (s) => n[s][t] >= e);
function Df(n, t, e) {
  let s = 0,
    i = n.length;
  for (; s < i && n[s] < t; ) s++;
  for (; i > s && n[i - 1] > e; ) i--;
  return s > 0 || i < n.length ? n.slice(s, i) : n;
}
const Pc = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Of(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Pc.forEach((e) => {
      const s = '_onData' + va(e),
        i = n[e];
      Object.defineProperty(n, e, {
        configurable: !0,
        enumerable: !1,
        value(...r) {
          const a = i.apply(this, r);
          return (
            n._chartjs.listeners.forEach((o) => {
              typeof o[s] == 'function' && o[s](...r);
            }),
            a
          );
        },
      });
    });
}
function co(n, t) {
  const e = n._chartjs;
  if (!e) return;
  const s = e.listeners,
    i = s.indexOf(t);
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (Pc.forEach((r) => {
        delete n[r];
      }),
      delete n._chartjs);
}
function Tc(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Dc = (function () {
  return typeof window > 'u'
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Oc(n, t) {
  let e = [],
    s = !1;
  return function (...i) {
    (e = i),
      s ||
        ((s = !0),
        Dc.call(window, () => {
          (s = !1), n.apply(t, e);
        }));
  };
}
function Ef(n, t) {
  let e;
  return function (...s) {
    return (
      t ? (clearTimeout(e), (e = setTimeout(n, t, s))) : n.apply(this, s), t
    );
  };
}
const wa = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
  Ct = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2),
  Cf = (n, t, e, s) =>
    n === (s ? 'left' : 'right') ? e : n === 'center' ? (t + e) / 2 : t;
function Ec(n, t, e) {
  const s = t.length;
  let i = 0,
    r = s;
  if (n._sorted) {
    const { iScale: a, vScale: o, _parsed: l } = n,
      c = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null,
      u = a.axis,
      { min: d, max: h, minDefined: g, maxDefined: f } = a.getUserBounds();
    if (g) {
      if (
        ((i = Math.min(
          Oe(l, u, d).lo,
          e ? s : Oe(t, u, a.getPixelForValue(d)).lo,
        )),
        c)
      ) {
        const p = l
          .slice(0, i + 1)
          .reverse()
          .findIndex((m) => !et(m[o.axis]));
        i -= Math.max(0, p);
      }
      i = Ot(i, 0, s - 1);
    }
    if (f) {
      let p = Math.max(
        Oe(l, a.axis, h, !0).hi + 1,
        e ? 0 : Oe(t, u, a.getPixelForValue(h), !0).hi + 1,
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((b) => !et(b[o.axis]));
        p += Math.max(0, m);
      }
      r = Ot(p, i, s) - i;
    } else r = s - i;
  }
  return { start: i, count: r };
}
function Cc(n) {
  const { xScale: t, yScale: e, _scaleRanges: s } = n,
    i = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!s) return (n._scaleRanges = i), !0;
  const r =
    s.xmin !== t.min ||
    s.xmax !== t.max ||
    s.ymin !== e.min ||
    s.ymax !== e.max;
  return Object.assign(s, i), r;
}
const Vs = (n) => n === 0 || n === 1,
  uo = (n, t, e) =>
    -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * ht) / e)),
  ho = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * ht) / e) + 1,
  hs = {
    linear: (n) => n,
    easeInQuad: (n) => n * n,
    easeOutQuad: (n) => -n * (n - 2),
    easeInOutQuad: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
    easeInCubic: (n) => n * n * n,
    easeOutCubic: (n) => (n -= 1) * n * n + 1,
    easeInOutCubic: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
    easeInQuart: (n) => n * n * n * n,
    easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
    easeInOutQuart: (n) =>
      (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
    easeInQuint: (n) => n * n * n * n * n,
    easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
    easeInOutQuint: (n) =>
      (n /= 0.5) < 1
        ? 0.5 * n * n * n * n * n
        : 0.5 * ((n -= 2) * n * n * n * n + 2),
    easeInSine: (n) => -Math.cos(n * kt) + 1,
    easeOutSine: (n) => Math.sin(n * kt),
    easeInOutSine: (n) => -0.5 * (Math.cos(ft * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      Vs(n)
        ? n
        : n < 0.5
          ? 0.5 * Math.pow(2, 10 * (n * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
    easeInCirc: (n) => (n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1)),
    easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
    easeInOutCirc: (n) =>
      (n /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - n * n) - 1)
        : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
    easeInElastic: (n) => (Vs(n) ? n : uo(n, 0.075, 0.3)),
    easeOutElastic: (n) => (Vs(n) ? n : ho(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return Vs(n)
        ? n
        : n < 0.5
          ? 0.5 * uo(n * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * ho(n * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(n) {
      return n * n * ((1.70158 + 1) * n - 1.70158);
    },
    easeOutBack(n) {
      return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
    },
    easeInOutBack(n) {
      let t = 1.70158;
      return (n /= 0.5) < 1
        ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t))
        : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
    },
    easeInBounce: (n) => 1 - hs.easeOutBounce(1 - n),
    easeOutBounce(n) {
      return n < 1 / 2.75
        ? 7.5625 * n * n
        : n < 2 / 2.75
          ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75
          : n < 2.5 / 2.75
            ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375
            : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
    },
    easeInOutBounce: (n) =>
      n < 0.5
        ? hs.easeInBounce(n * 2) * 0.5
        : hs.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
  };
function ka(n) {
  if (n && typeof n == 'object') {
    const t = n.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function fo(n) {
  return ka(n) ? n : new vs(n);
}
function cr(n) {
  return ka(n) ? n : new vs(n).saturate(0.5).darken(0.1).hexString();
}
const Af = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  Rf = ['color', 'borderColor', 'backgroundColor'];
function Lf(n) {
  n.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    n.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    n.set('animations', {
      colors: { type: 'color', properties: Rf },
      numbers: { type: 'number', properties: Af },
    }),
    n.describe('animations', { _fallback: 'animation' }),
    n.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: 'transparent' },
          visible: { type: 'boolean', duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
        },
      },
    });
}
function Ff(n) {
  n.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const go = new Map();
function If(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let s = go.get(e);
  return s || ((s = new Intl.NumberFormat(n, t)), go.set(e, s)), s;
}
function Rs(n, t, e) {
  return If(t, e).format(n);
}
const Ac = {
  values(n) {
    return gt(n) ? n : '' + n;
  },
  numeric(n, t, e) {
    if (n === 0) return '0';
    const s = this.chart.options.locale;
    let i,
      r = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = 'scientific'), (r = Nf(n, e));
    }
    const a = Ye(Math.abs(r)),
      o = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: i, minimumFractionDigits: o, maximumFractionDigits: o };
    return Object.assign(l, this.options.ticks.format), Rs(n, s, l);
  },
  logarithmic(n, t, e) {
    if (n === 0) return '0';
    const s = e[t].significand || n / Math.pow(10, Math.floor(Ye(n)));
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length
      ? Ac.numeric.call(this, n, t, e)
      : '';
  },
};
function Nf(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Yi = { formatters: Ac };
function Bf(n) {
  n.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Yi.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    n.route('scale.ticks', 'color', '', 'color'),
    n.route('scale.grid', 'color', '', 'borderColor'),
    n.route('scale.border', 'color', '', 'borderColor'),
    n.route('scale.title', 'color', '', 'color'),
    n.describe('scale', {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith('before') &&
        !t.startsWith('after') &&
        t !== 'callback' &&
        t !== 'parser',
      _indexable: (t) =>
        t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    n.describe('scales', { _fallback: 'scale' }),
    n.describe('scale.ticks', {
      _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
      _indexable: (t) => t !== 'backdropPadding',
    });
}
const bn = Object.create(null),
  Fr = Object.create(null);
function fs(n, t) {
  if (!t) return n;
  const e = t.split('.');
  for (let s = 0, i = e.length; s < i; ++s) {
    const r = e[s];
    n = n[r] || (n[r] = Object.create(null));
  }
  return n;
}
function ur(n, t, e) {
  return typeof t == 'string' ? ys(fs(n, t), e) : ys(fs(n, ''), t);
}
class zf {
  constructor(t, e) {
    (this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove',
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, i) => cr(i.backgroundColor)),
      (this.hoverBorderColor = (s, i) => cr(i.borderColor)),
      (this.hoverColor = (s, i) => cr(i.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e);
  }
  set(t, e) {
    return ur(this, t, e);
  }
  get(t) {
    return fs(this, t);
  }
  describe(t, e) {
    return ur(Fr, t, e);
  }
  override(t, e) {
    return ur(bn, t, e);
  }
  route(t, e, s, i) {
    const r = fs(this, t),
      a = fs(this, s),
      o = '_' + e;
    Object.defineProperties(r, {
      [o]: { value: r[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[o],
            c = a[i];
          return nt(l) ? Object.assign({}, c, l) : G(l, c);
        },
        set(l) {
          this[o] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var pt = new zf(
  {
    _scriptable: (n) => !n.startsWith('on'),
    _indexable: (n) => n !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Lf, Ff, Bf],
);
function Wf(n) {
  return !n || et(n.size) || et(n.family)
    ? null
    : (n.style ? n.style + ' ' : '') +
        (n.weight ? n.weight + ' ' : '') +
        n.size +
        'px ' +
        n.family;
}
function Ti(n, t, e, s, i) {
  let r = t[i];
  return (
    r || ((r = t[i] = n.measureText(i).width), e.push(i)), r > s && (s = r), s
  );
}
function Hf(n, t, e, s) {
  s = s || {};
  let i = (s.data = s.data || {}),
    r = (s.garbageCollect = s.garbageCollect || []);
  s.font !== t &&
    ((i = s.data = {}), (r = s.garbageCollect = []), (s.font = t)),
    n.save(),
    (n.font = t);
  let a = 0;
  const o = e.length;
  let l, c, u, d, h;
  for (l = 0; l < o; l++)
    if (((d = e[l]), d != null && !gt(d))) a = Ti(n, i, r, a, d);
    else if (gt(d))
      for (c = 0, u = d.length; c < u; c++)
        (h = d[c]), h != null && !gt(h) && (a = Ti(n, i, r, a, h));
  n.restore();
  const g = r.length / 2;
  if (g > e.length) {
    for (l = 0; l < g; l++) delete i[r[l]];
    r.splice(0, g);
  }
  return a;
}
function rn(n, t, e) {
  const s = n.currentDevicePixelRatio,
    i = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function po(n, t) {
  (!t && !n) ||
    ((t = t || n.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, n.width, n.height),
    t.restore());
}
function Ir(n, t, e, s) {
  Rc(n, t, e, s, null);
}
function Rc(n, t, e, s, i) {
  let r, a, o, l, c, u, d, h;
  const g = t.pointStyle,
    f = t.rotation,
    p = t.radius;
  let m = (f || 0) * xf;
  if (
    g &&
    typeof g == 'object' &&
    ((r = g.toString()),
    r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
  ) {
    n.save(),
      n.translate(e, s),
      n.rotate(m),
      n.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
      n.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch ((n.beginPath(), g)) {
      default:
        i ? n.ellipse(e, s, i / 2, p, 0, 0, ht) : n.arc(e, s, p, 0, ht),
          n.closePath();
        break;
      case 'triangle':
        (u = i ? i / 2 : p),
          n.moveTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          (m += ao),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          (m += ao),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          n.closePath();
        break;
      case 'rectRounded':
        (c = p * 0.516),
          (l = p - c),
          (a = Math.cos(m + sn) * l),
          (d = Math.cos(m + sn) * (i ? i / 2 - c : l)),
          (o = Math.sin(m + sn) * l),
          (h = Math.sin(m + sn) * (i ? i / 2 - c : l)),
          n.arc(e - d, s - o, c, m - ft, m - kt),
          n.arc(e + h, s - a, c, m - kt, m),
          n.arc(e + d, s + o, c, m, m + kt),
          n.arc(e - h, s + a, c, m + kt, m + ft),
          n.closePath();
        break;
      case 'rect':
        if (!f) {
          (l = Math.SQRT1_2 * p),
            (u = i ? i / 2 : l),
            n.rect(e - u, s - l, 2 * u, 2 * l);
          break;
        }
        m += sn;
      case 'rectRot':
        (d = Math.cos(m) * (i ? i / 2 : p)),
          (a = Math.cos(m) * p),
          (o = Math.sin(m) * p),
          (h = Math.sin(m) * (i ? i / 2 : p)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + h, s - a),
          n.lineTo(e + d, s + o),
          n.lineTo(e - h, s + a),
          n.closePath();
        break;
      case 'crossRot':
        m += sn;
      case 'cross':
        (d = Math.cos(m) * (i ? i / 2 : p)),
          (a = Math.cos(m) * p),
          (o = Math.sin(m) * p),
          (h = Math.sin(m) * (i ? i / 2 : p)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a);
        break;
      case 'star':
        (d = Math.cos(m) * (i ? i / 2 : p)),
          (a = Math.cos(m) * p),
          (o = Math.sin(m) * p),
          (h = Math.sin(m) * (i ? i / 2 : p)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a),
          (m += sn),
          (d = Math.cos(m) * (i ? i / 2 : p)),
          (a = Math.cos(m) * p),
          (o = Math.sin(m) * p),
          (h = Math.sin(m) * (i ? i / 2 : p)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a);
        break;
      case 'line':
        (a = i ? i / 2 : Math.cos(m) * p),
          (o = Math.sin(m) * p),
          n.moveTo(e - a, s - o),
          n.lineTo(e + a, s + o);
        break;
      case 'dash':
        n.moveTo(e, s),
          n.lineTo(e + Math.cos(m) * (i ? i / 2 : p), s + Math.sin(m) * p);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function Ee(n, t, e) {
  return (
    (e = e || 0.5),
    !t ||
      (n &&
        n.x > t.left - e &&
        n.x < t.right + e &&
        n.y > t.top - e &&
        n.y < t.bottom + e)
  );
}
function Ui(n, t) {
  n.save(),
    n.beginPath(),
    n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    n.clip();
}
function $i(n) {
  n.restore();
}
function jf(n, t, e, s, i) {
  if (!t) return n.lineTo(e.x, e.y);
  if (i === 'middle') {
    const r = (t.x + e.x) / 2;
    n.lineTo(r, t.y), n.lineTo(r, e.y);
  } else (i === 'after') != !!s ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Vf(n, t, e, s) {
  if (!t) return n.lineTo(e.x, e.y);
  n.bezierCurveTo(
    s ? t.cp1x : t.cp2x,
    s ? t.cp1y : t.cp2y,
    s ? e.cp2x : e.cp1x,
    s ? e.cp2y : e.cp1y,
    e.x,
    e.y,
  );
}
function qf(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]),
    et(t.rotation) || n.rotate(t.rotation),
    t.color && (n.fillStyle = t.color),
    t.textAlign && (n.textAlign = t.textAlign),
    t.textBaseline && (n.textBaseline = t.textBaseline);
}
function Yf(n, t, e, s, i) {
  if (i.strikethrough || i.underline) {
    const r = n.measureText(s),
      a = t - r.actualBoundingBoxLeft,
      o = t + r.actualBoundingBoxRight,
      l = e - r.actualBoundingBoxAscent,
      c = e + r.actualBoundingBoxDescent,
      u = i.strikethrough ? (l + c) / 2 : c;
    (n.strokeStyle = n.fillStyle),
      n.beginPath(),
      (n.lineWidth = i.decorationWidth || 2),
      n.moveTo(a, u),
      n.lineTo(o, u),
      n.stroke();
  }
}
function Uf(n, t) {
  const e = n.fillStyle;
  (n.fillStyle = t.color),
    n.fillRect(t.left, t.top, t.width, t.height),
    (n.fillStyle = e);
}
function _n(n, t, e, s, i, r = {}) {
  const a = gt(t) ? t : [t],
    o = r.strokeWidth > 0 && r.strokeColor !== '';
  let l, c;
  for (n.save(), n.font = i.string, qf(n, r), l = 0; l < a.length; ++l)
    (c = a[l]),
      r.backdrop && Uf(n, r.backdrop),
      o &&
        (r.strokeColor && (n.strokeStyle = r.strokeColor),
        et(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
        n.strokeText(c, e, s, r.maxWidth)),
      n.fillText(c, e, s, r.maxWidth),
      Yf(n, e, s, c, r),
      (s += Number(i.lineHeight));
  n.restore();
}
function ks(n, t) {
  const { x: e, y: s, w: i, h: r, radius: a } = t;
  n.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * ft, ft, !0),
    n.lineTo(e, s + r - a.bottomLeft),
    n.arc(e + a.bottomLeft, s + r - a.bottomLeft, a.bottomLeft, ft, kt, !0),
    n.lineTo(e + i - a.bottomRight, s + r),
    n.arc(
      e + i - a.bottomRight,
      s + r - a.bottomRight,
      a.bottomRight,
      kt,
      0,
      !0,
    ),
    n.lineTo(e + i, s + a.topRight),
    n.arc(e + i - a.topRight, s + a.topRight, a.topRight, 0, -kt, !0),
    n.lineTo(e + a.topLeft, s);
}
const $f = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Xf = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Qf(n, t) {
  const e = ('' + n).match($f);
  if (!e || e[1] === 'normal') return t * 1.2;
  switch (((n = +e[2]), e[3])) {
    case 'px':
      return n;
    case '%':
      n /= 100;
      break;
  }
  return t * n;
}
const Gf = (n) => +n || 0;
function Ma(n, t) {
  const e = {},
    s = nt(t),
    i = s ? Object.keys(t) : t,
    r = nt(n) ? (s ? (a) => G(n[a], n[t[a]]) : (a) => n[a]) : () => n;
  for (const a of i) e[a] = Gf(r(a));
  return e;
}
function Lc(n) {
  return Ma(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function gn(n) {
  return Ma(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function Lt(n) {
  const t = Lc(n);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Tt(n, t) {
  (n = n || {}), (t = t || pt.font);
  let e = G(n.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let s = G(n.style, t.style);
  s &&
    !('' + s).match(Xf) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const i = {
    family: G(n.family, t.family),
    lineHeight: Qf(G(n.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: G(n.weight, t.weight),
    string: '',
  };
  return (i.string = Wf(i)), i;
}
function is(n, t, e, s) {
  let i, r, a;
  for (i = 0, r = n.length; i < r; ++i)
    if (((a = n[i]), a !== void 0 && a !== void 0)) return a;
}
function Kf(n, t, e) {
  const { min: s, max: i } = n,
    r = wc(t, (i - s) / 2),
    a = (o, l) => (e && o === 0 ? 0 : o + l);
  return { min: a(s, -Math.abs(r)), max: a(i, r) };
}
function en(n, t) {
  return Object.assign(Object.create(n), t);
}
function Sa(n, t = [''], e, s, i = () => n[0]) {
  const r = e || n;
  typeof s > 'u' && (s = Bc('_fallback', n));
  const a = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: n,
    _rootScopes: r,
    _fallback: s,
    _getTarget: i,
    override: (o) => Sa([o, ...n], t, r, s),
  };
  return new Proxy(a, {
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete n[0][l], !0;
    },
    get(o, l) {
      return Ic(o, l, () => rg(l, t, n, o));
    },
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(o, l) {
      return bo(o).includes(l);
    },
    ownKeys(o) {
      return bo(o);
    },
    set(o, l, c) {
      const u = o._storage || (o._storage = i());
      return (o[l] = u[l] = c), delete o._keys, !0;
    },
  });
}
function In(n, t, e, s) {
  const i = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Fc(n, s),
    setContext: (r) => In(n, r, e, s),
    override: (r) => In(n.override(r), t, e, s),
  };
  return new Proxy(i, {
    deleteProperty(r, a) {
      return delete r[a], delete n[a], !0;
    },
    get(r, a, o) {
      return Ic(r, a, () => Zf(r, a, o));
    },
    getOwnPropertyDescriptor(r, a) {
      return r._descriptors.allKeys
        ? Reflect.has(n, a)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(n, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    has(r, a) {
      return Reflect.has(n, a);
    },
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    set(r, a, o) {
      return (n[a] = o), delete r[a], !0;
    },
  });
}
function Fc(n, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys,
  } = n;
  return {
    allKeys: i,
    scriptable: e,
    indexable: s,
    isScriptable: Ze(e) ? e : () => e,
    isIndexable: Ze(s) ? s : () => s,
  };
}
const Jf = (n, t) => (n ? n + va(t) : t),
  Pa = (n, t) =>
    nt(t) &&
    n !== 'adapters' &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Ic(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === 'constructor')
    return n[t];
  const s = e();
  return (n[t] = s), s;
}
function Zf(n, t, e) {
  const { _proxy: s, _context: i, _subProxy: r, _descriptors: a } = n;
  let o = s[t];
  return (
    Ze(o) && a.isScriptable(t) && (o = tg(t, o, n, e)),
    gt(o) && o.length && (o = eg(t, o, n, a.isIndexable)),
    Pa(t, o) && (o = In(o, i, r && r[t], a)),
    o
  );
}
function tg(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _stack: o } = e;
  if (o.has(n))
    throw new Error(
      'Recursion detected: ' + Array.from(o).join('->') + '->' + n,
    );
  o.add(n);
  let l = t(r, a || s);
  return o.delete(n), Pa(n, l) && (l = Ta(i._scopes, i, n, l)), l;
}
function eg(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _descriptors: o } = e;
  if (typeof r.index < 'u' && s(n)) return t[r.index % t.length];
  if (nt(t[0])) {
    const l = t,
      c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const d = Ta(c, i, n, u);
      t.push(In(d, r, a && a[n], o));
    }
  }
  return t;
}
function Nc(n, t, e) {
  return Ze(n) ? n(t, e) : n;
}
const ng = (n, t) => (n === !0 ? t : typeof n == 'string' ? Je(t, n) : void 0);
function sg(n, t, e, s, i) {
  for (const r of t) {
    const a = ng(e, r);
    if (a) {
      n.add(a);
      const o = Nc(a._fallback, e, i);
      if (typeof o < 'u' && o !== e && o !== s) return o;
    } else if (a === !1 && typeof s < 'u' && e !== s) return null;
  }
  return !1;
}
function Ta(n, t, e, s) {
  const i = t._rootScopes,
    r = Nc(t._fallback, e, s),
    a = [...n, ...i],
    o = new Set();
  o.add(s);
  let l = mo(o, a, e, r || e, s);
  return l === null ||
    (typeof r < 'u' && r !== e && ((l = mo(o, a, r, l, s)), l === null))
    ? !1
    : Sa(Array.from(o), [''], i, r, () => ig(t, e, s));
}
function mo(n, t, e, s, i) {
  for (; e; ) e = sg(n, t, e, s, i);
  return e;
}
function ig(n, t, e) {
  const s = n._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return gt(i) && nt(e) ? e : i || {};
}
function rg(n, t, e, s) {
  let i;
  for (const r of t)
    if (((i = Bc(Jf(r, n), e)), typeof i < 'u'))
      return Pa(n, i) ? Ta(e, s, n, i) : i;
}
function Bc(n, t) {
  for (const e of t) {
    if (!e) continue;
    const s = e[n];
    if (typeof s < 'u') return s;
  }
}
function bo(n) {
  let t = n._keys;
  return t || (t = n._keys = ag(n._scopes)), t;
}
function ag(n) {
  const t = new Set();
  for (const e of n)
    for (const s of Object.keys(e).filter((i) => !i.startsWith('_'))) t.add(s);
  return Array.from(t);
}
function zc(n, t, e, s) {
  const { iScale: i } = n,
    { key: r = 'r' } = this._parsing,
    a = new Array(s);
  let o, l, c, u;
  for (o = 0, l = s; o < l; ++o)
    (c = o + e), (u = t[c]), (a[o] = { r: i.parse(Je(u, r), c) });
  return a;
}
const og = Number.EPSILON || 1e-14,
  Nn = (n, t) => t < n.length && !n[t].skip && n[t],
  Wc = (n) => (n === 'x' ? 'y' : 'x');
function lg(n, t, e, s) {
  const i = n.skip ? t : n,
    r = t,
    a = e.skip ? t : e,
    o = Lr(r, i),
    l = Lr(a, r);
  let c = o / (o + l),
    u = l / (o + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const d = s * c,
    h = s * u;
  return {
    previous: { x: r.x - d * (a.x - i.x), y: r.y - d * (a.y - i.y) },
    next: { x: r.x + h * (a.x - i.x), y: r.y + h * (a.y - i.y) },
  };
}
function cg(n, t, e) {
  const s = n.length;
  let i,
    r,
    a,
    o,
    l,
    c = Nn(n, 0);
  for (let u = 0; u < s - 1; ++u)
    if (((l = c), (c = Nn(n, u + 1)), !(!l || !c))) {
      if (ds(t[u], 0, og)) {
        e[u] = e[u + 1] = 0;
        continue;
      }
      (i = e[u] / t[u]),
        (r = e[u + 1] / t[u]),
        (o = Math.pow(i, 2) + Math.pow(r, 2)),
        !(o <= 9) &&
          ((a = 3 / Math.sqrt(o)),
          (e[u] = i * a * t[u]),
          (e[u + 1] = r * a * t[u]));
    }
}
function ug(n, t, e = 'x') {
  const s = Wc(e),
    i = n.length;
  let r,
    a,
    o,
    l = Nn(n, 0);
  for (let c = 0; c < i; ++c) {
    if (((a = o), (o = l), (l = Nn(n, c + 1)), !o)) continue;
    const u = o[e],
      d = o[s];
    a &&
      ((r = (u - a[e]) / 3),
      (o[`cp1${e}`] = u - r),
      (o[`cp1${s}`] = d - r * t[c])),
      l &&
        ((r = (l[e] - u) / 3),
        (o[`cp2${e}`] = u + r),
        (o[`cp2${s}`] = d + r * t[c]));
  }
}
function dg(n, t = 'x') {
  const e = Wc(t),
    s = n.length,
    i = Array(s).fill(0),
    r = Array(s);
  let a,
    o,
    l,
    c = Nn(n, 0);
  for (a = 0; a < s; ++a)
    if (((o = l), (l = c), (c = Nn(n, a + 1)), !!l)) {
      if (c) {
        const u = c[t] - l[t];
        i[a] = u !== 0 ? (c[e] - l[e]) / u : 0;
      }
      r[a] = o
        ? c
          ? pe(i[a - 1]) !== pe(i[a])
            ? 0
            : (i[a - 1] + i[a]) / 2
          : i[a - 1]
        : i[a];
    }
  cg(n, i, r), ug(n, r, t);
}
function qs(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function hg(n, t) {
  let e,
    s,
    i,
    r,
    a,
    o = Ee(n[0], t);
  for (e = 0, s = n.length; e < s; ++e)
    (a = r),
      (r = o),
      (o = e < s - 1 && Ee(n[e + 1], t)),
      r &&
        ((i = n[e]),
        a &&
          ((i.cp1x = qs(i.cp1x, t.left, t.right)),
          (i.cp1y = qs(i.cp1y, t.top, t.bottom))),
        o &&
          ((i.cp2x = qs(i.cp2x, t.left, t.right)),
          (i.cp2y = qs(i.cp2y, t.top, t.bottom))));
}
function fg(n, t, e, s, i) {
  let r, a, o, l;
  if (
    (t.spanGaps && (n = n.filter((c) => !c.skip)),
    t.cubicInterpolationMode === 'monotone')
  )
    dg(n, i);
  else {
    let c = s ? n[n.length - 1] : n[0];
    for (r = 0, a = n.length; r < a; ++r)
      (o = n[r]),
        (l = lg(c, o, n[Math.min(r + 1, a - (s ? 0 : 1)) % a], t.tension)),
        (o.cp1x = l.previous.x),
        (o.cp1y = l.previous.y),
        (o.cp2x = l.next.x),
        (o.cp2y = l.next.y),
        (c = o);
  }
  t.capBezierPoints && hg(n, e);
}
function Da() {
  return typeof window < 'u' && typeof document < 'u';
}
function Oa(n) {
  let t = n.parentNode;
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function Di(n, t, e) {
  let s;
  return (
    typeof n == 'string'
      ? ((s = parseInt(n, 10)),
        n.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[e]))
      : (s = n),
    s
  );
}
const Xi = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function gg(n, t) {
  return Xi(n).getPropertyValue(t);
}
const pg = ['top', 'right', 'bottom', 'left'];
function pn(n, t, e) {
  const s = {};
  e = e ? '-' + e : '';
  for (let i = 0; i < 4; i++) {
    const r = pg[i];
    s[r] = parseFloat(n[t + '-' + r + e]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const mg = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function bg(n, t) {
  const e = n.touches,
    s = e && e.length ? e[0] : n,
    { offsetX: i, offsetY: r } = s;
  let a = !1,
    o,
    l;
  if (mg(i, r, n.target)) (o = i), (l = r);
  else {
    const c = t.getBoundingClientRect();
    (o = s.clientX - c.left), (l = s.clientY - c.top), (a = !0);
  }
  return { x: o, y: l, box: a };
}
function ln(n, t) {
  if ('native' in n) return n;
  const { canvas: e, currentDevicePixelRatio: s } = t,
    i = Xi(e),
    r = i.boxSizing === 'border-box',
    a = pn(i, 'padding'),
    o = pn(i, 'border', 'width'),
    { x: l, y: c, box: u } = bg(n, e),
    d = a.left + (u && o.left),
    h = a.top + (u && o.top);
  let { width: g, height: f } = t;
  return (
    r && ((g -= a.width + o.width), (f -= a.height + o.height)),
    {
      x: Math.round((((l - d) / g) * e.width) / s),
      y: Math.round((((c - h) / f) * e.height) / s),
    }
  );
}
function _g(n, t, e) {
  let s, i;
  if (t === void 0 || e === void 0) {
    const r = n && Oa(n);
    if (!r) (t = n.clientWidth), (e = n.clientHeight);
    else {
      const a = r.getBoundingClientRect(),
        o = Xi(r),
        l = pn(o, 'border', 'width'),
        c = pn(o, 'padding');
      (t = a.width - c.width - l.width),
        (e = a.height - c.height - l.height),
        (s = Di(o.maxWidth, r, 'clientWidth')),
        (i = Di(o.maxHeight, r, 'clientHeight'));
    }
  }
  return { width: t, height: e, maxWidth: s || Pi, maxHeight: i || Pi };
}
const Ys = (n) => Math.round(n * 10) / 10;
function vg(n, t, e, s) {
  const i = Xi(n),
    r = pn(i, 'margin'),
    a = Di(i.maxWidth, n, 'clientWidth') || Pi,
    o = Di(i.maxHeight, n, 'clientHeight') || Pi,
    l = _g(n, t, e);
  let { width: c, height: u } = l;
  if (i.boxSizing === 'content-box') {
    const h = pn(i, 'border', 'width'),
      g = pn(i, 'padding');
    (c -= g.width + h.width), (u -= g.height + h.height);
  }
  return (
    (c = Math.max(0, c - r.width)),
    (u = Math.max(0, s ? c / s : u - r.height)),
    (c = Ys(Math.min(c, a, l.maxWidth))),
    (u = Ys(Math.min(u, o, l.maxHeight))),
    c && !u && (u = Ys(c / 2)),
    (t !== void 0 || e !== void 0) &&
      s &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = Ys(Math.floor(u * s)))),
    { width: c, height: u }
  );
}
function _o(n, t, e) {
  const s = t || 1,
    i = Math.floor(n.height * s),
    r = Math.floor(n.width * s);
  (n.height = Math.floor(n.height)), (n.width = Math.floor(n.width));
  const a = n.canvas;
  return (
    a.style &&
      (e || (!a.style.height && !a.style.width)) &&
      ((a.style.height = `${n.height}px`), (a.style.width = `${n.width}px`)),
    n.currentDevicePixelRatio !== s || a.height !== i || a.width !== r
      ? ((n.currentDevicePixelRatio = s),
        (a.height = i),
        (a.width = r),
        n.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const yg = (function () {
  let n = !1;
  try {
    const t = {
      get passive() {
        return (n = !0), !1;
      },
    };
    Da() &&
      (window.addEventListener('test', null, t),
      window.removeEventListener('test', null, t));
  } catch {}
  return n;
})();
function vo(n, t) {
  const e = gg(n, t),
    s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function cn(n, t, e, s) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function xg(n, t, e, s) {
  return {
    x: n.x + e * (t.x - n.x),
    y:
      s === 'middle'
        ? e < 0.5
          ? n.y
          : t.y
        : s === 'after'
          ? e < 1
            ? n.y
            : t.y
          : e > 0
            ? t.y
            : n.y,
  };
}
function wg(n, t, e, s) {
  const i = { x: n.cp2x, y: n.cp2y },
    r = { x: t.cp1x, y: t.cp1y },
    a = cn(n, i, e),
    o = cn(i, r, e),
    l = cn(r, t, e),
    c = cn(a, o, e),
    u = cn(o, l, e);
  return cn(c, u, e);
}
const kg = function (n, t) {
    return {
      x(e) {
        return n + n + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === 'center' ? e : e === 'right' ? 'left' : 'right';
      },
      xPlus(e, s) {
        return e - s;
      },
      leftForLtr(e, s) {
        return e - s;
      },
    };
  },
  Mg = function () {
    return {
      x(n) {
        return n;
      },
      setWidth(n) {},
      textAlign(n) {
        return n;
      },
      xPlus(n, t) {
        return n + t;
      },
      leftForLtr(n, t) {
        return n;
      },
    };
  };
function Rn(n, t, e) {
  return n ? kg(t, e) : Mg();
}
function Hc(n, t) {
  let e, s;
  (t === 'ltr' || t === 'rtl') &&
    ((e = n.canvas.style),
    (s = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (n.prevTextDirection = s));
}
function jc(n, t) {
  t !== void 0 &&
    (delete n.prevTextDirection,
    n.canvas.style.setProperty('direction', t[0], t[1]));
}
function Vc(n) {
  return n === 'angle'
    ? { between: ws, compare: Sf, normalize: Xt }
    : { between: De, compare: (t, e) => t - e, normalize: (t) => t };
}
function yo({ start: n, end: t, count: e, loop: s, style: i }) {
  return {
    start: n % e,
    end: t % e,
    loop: s && (t - n + 1) % e === 0,
    style: i,
  };
}
function Sg(n, t, e) {
  const { property: s, start: i, end: r } = e,
    { between: a, normalize: o } = Vc(s),
    l = t.length;
  let { start: c, end: u, loop: d } = n,
    h,
    g;
  if (d) {
    for (c += l, u += l, h = 0, g = l; h < g && a(o(t[c % l][s]), i, r); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: n.style };
}
function qc(n, t, e) {
  if (!e) return [n];
  const { property: s, start: i, end: r } = e,
    a = t.length,
    { compare: o, between: l, normalize: c } = Vc(s),
    { start: u, end: d, loop: h, style: g } = Sg(n, t, e),
    f = [];
  let p = !1,
    m = null,
    b,
    _,
    x;
  const w = () => l(i, x, b) && o(i, x) !== 0,
    y = () => o(r, b) === 0 || l(r, x, b),
    D = () => p || w(),
    T = () => !p || y();
  for (let k = u, O = u; k <= d; ++k)
    (_ = t[k % a]),
      !_.skip &&
        ((b = c(_[s])),
        b !== x &&
          ((p = l(b, i, r)),
          m === null && D() && (m = o(b, i) === 0 ? k : O),
          m !== null &&
            T() &&
            (f.push(yo({ start: m, end: k, loop: h, count: a, style: g })),
            (m = null)),
          (O = k),
          (x = b)));
  return (
    m !== null && f.push(yo({ start: m, end: d, loop: h, count: a, style: g })),
    f
  );
}
function Yc(n, t) {
  const e = [],
    s = n.segments;
  for (let i = 0; i < s.length; i++) {
    const r = qc(s[i], n.points, t);
    r.length && e.push(...r);
  }
  return e;
}
function Pg(n, t, e, s) {
  let i = 0,
    r = t - 1;
  if (e && !s) for (; i < t && !n[i].skip; ) i++;
  for (; i < t && n[i].skip; ) i++;
  for (i %= t, e && (r += i); r > i && n[r % t].skip; ) r--;
  return (r %= t), { start: i, end: r };
}
function Tg(n, t, e, s) {
  const i = n.length,
    r = [];
  let a = t,
    o = n[t],
    l;
  for (l = t + 1; l <= e; ++l) {
    const c = n[l % i];
    c.skip || c.stop
      ? o.skip ||
        ((s = !1),
        r.push({ start: t % i, end: (l - 1) % i, loop: s }),
        (t = a = c.stop ? l : null))
      : ((a = l), o.skip && (t = l)),
      (o = c);
  }
  return a !== null && r.push({ start: t % i, end: a % i, loop: s }), r;
}
function Dg(n, t) {
  const e = n.points,
    s = n.options.spanGaps,
    i = e.length;
  if (!i) return [];
  const r = !!n._loop,
    { start: a, end: o } = Pg(e, i, r, s);
  if (s === !0) return xo(n, [{ start: a, end: o, loop: r }], e, t);
  const l = o < a ? o + i : o,
    c = !!n._fullLoop && a === 0 && o === i - 1;
  return xo(n, Tg(e, a, l, c), e, t);
}
function xo(n, t, e, s) {
  return !s || !s.setContext || !e ? t : Og(n, t, e, s);
}
function Og(n, t, e, s) {
  const i = n._chart.getContext(),
    r = wo(n.options),
    {
      _datasetIndex: a,
      options: { spanGaps: o },
    } = n,
    l = e.length,
    c = [];
  let u = r,
    d = t[0].start,
    h = d;
  function g(f, p, m, b) {
    const _ = o ? -1 : 1;
    if (f !== p) {
      for (f += l; e[f % l].skip; ) f -= _;
      for (; e[p % l].skip; ) p += _;
      f % l !== p % l &&
        (c.push({ start: f % l, end: p % l, loop: m, style: b }),
        (u = b),
        (d = p % l));
    }
  }
  for (const f of t) {
    d = o ? d : f.start;
    let p = e[d % l],
      m;
    for (h = d + 1; h <= f.end; h++) {
      const b = e[h % l];
      (m = wo(
        s.setContext(
          en(i, {
            type: 'segment',
            p0: p,
            p1: b,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: a,
          }),
        ),
      )),
        Eg(m, u) && g(d, h - 1, f.loop, u),
        (p = b),
        (u = m);
    }
    d < h - 1 && g(d, h - 1, f.loop, u);
  }
  return c;
}
function wo(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor,
  };
}
function Eg(n, t) {
  if (!t) return !1;
  const e = [],
    s = function (i, r) {
      return ka(r) ? (e.includes(r) || e.push(r), e.indexOf(r)) : r;
    };
  return JSON.stringify(n, s) !== JSON.stringify(t, s);
}
function Us(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function Cg(n, t) {
  const { xScale: e, yScale: s } = n;
  return e && s
    ? {
        left: Us(e, t, 'left'),
        right: Us(e, t, 'right'),
        top: Us(s, t, 'top'),
        bottom: Us(s, t, 'bottom'),
      }
    : t;
}
function Uc(n, t) {
  const e = t._clip;
  if (e.disabled) return !1;
  const s = Cg(t, n.chartArea);
  return {
    left: e.left === !1 ? 0 : s.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? n.width : s.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : s.top - (e.top === !0 ? 0 : e.top),
    bottom:
      e.bottom === !1 ? n.height : s.bottom + (e.bottom === !0 ? 0 : e.bottom),
  };
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class Ag {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, e, s, i) {
    const r = e.listeners[i],
      a = e.duration;
    r.forEach((o) =>
      o({
        chart: t,
        initial: e.initial,
        numSteps: a,
        currentStep: Math.min(s - e.start, a),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Dc.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length) return;
      const r = s.items;
      let a = r.length - 1,
        o = !1,
        l;
      for (; a >= 0; --a)
        (l = r[a]),
          l._active
            ? (l._total > s.duration && (s.duration = l._total),
              l.tick(t),
              (o = !0))
            : ((r[a] = r[r.length - 1]), r.pop());
      o && (i.draw(), this._notify(i, s, t, 'progress')),
        r.length ||
          ((s.running = !1),
          this._notify(i, s, t, 'complete'),
          (s.initial = !1)),
        (e += r.length);
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        e.set(t, s)),
      s
    );
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((s, i) => Math.max(s, i._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const s = e.items;
    let i = s.length - 1;
    for (; i >= 0; --i) s[i].cancel();
    (e.items = []), this._notify(t, e, Date.now(), 'complete');
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Se = new Ag();
const ko = 'transparent',
  Rg = {
    boolean(n, t, e) {
      return e > 0.5 ? t : n;
    },
    color(n, t, e) {
      const s = fo(n || ko),
        i = s.valid && fo(t || ko);
      return i && i.valid ? i.mix(s, e).hexString() : t;
    },
    number(n, t, e) {
      return n + (t - n) * e;
    },
  };
class Lg {
  constructor(t, e, s, i) {
    const r = e[s];
    i = is([t.to, i, r, t.from]);
    const a = is([t.from, r, i]);
    (this._active = !0),
      (this._fn = t.fn || Rg[t.type || typeof a]),
      (this._easing = hs[t.easing] || hs.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = s),
      (this._from = a),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        r = s - this._start,
        a = this._duration - r;
      (this._start = s),
        (this._duration = Math.floor(Math.max(a, t.duration))),
        (this._total += r),
        (this._loop = !!t.loop),
        (this._to = is([t.to, e, i, t.from])),
        (this._from = is([t.from, i, e]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      s = this._duration,
      i = this._prop,
      r = this._from,
      a = this._loop,
      o = this._to;
    let l;
    if (((this._active = r !== o && (a || e < s)), !this._active)) {
      (this._target[i] = o), this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[i] = r;
      return;
    }
    (l = (e / s) % 2),
      (l = a && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[i] = this._fn(r, o, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({ res: e, rej: s });
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      s = this._promises || [];
    for (let i = 0; i < s.length; i++) s[i][e]();
  }
}
class $c {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!nt(t)) return;
    const e = Object.keys(pt.animation),
      s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i];
      if (!nt(r)) return;
      const a = {};
      for (const o of e) a[o] = r[o];
      ((gt(r.properties) && r.properties) || [i]).forEach((o) => {
        (o === i || !s.has(o)) && s.set(o, a);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options,
      i = Ig(t, s);
    if (!i) return [];
    const r = this._createAnimations(i, s);
    return (
      s.$shared &&
        Fg(t.options.$animations, s).then(
          () => {
            t.options = s;
          },
          () => {},
        ),
      r
    );
  }
  _createAnimations(t, e) {
    const s = this._properties,
      i = [],
      r = t.$animations || (t.$animations = {}),
      a = Object.keys(e),
      o = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === '$') continue;
      if (c === 'options') {
        i.push(...this._animateOptions(t, e));
        continue;
      }
      const u = e[c];
      let d = r[c];
      const h = s.get(c);
      if (d)
        if (h && d.active()) {
          d.update(h, u, o);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        t[c] = u;
        continue;
      }
      (r[c] = d = new Lg(h, t, c, u)), i.push(d);
    }
    return i;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length) return Se.add(this._chart, s), !0;
  }
}
function Fg(n, t) {
  const e = [],
    s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const r = n[s[i]];
    r && r.active() && e.push(r.wait());
  }
  return Promise.all(e);
}
function Ig(n, t) {
  if (!t) return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return (
    e.$shared &&
      (n.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })),
    e
  );
}
function Mo(n, t) {
  const e = (n && n.options) || {},
    s = e.reverse,
    i = e.min === void 0 ? t : 0,
    r = e.max === void 0 ? t : 0;
  return { start: s ? r : i, end: s ? i : r };
}
function Ng(n, t, e) {
  if (e === !1) return !1;
  const s = Mo(n, e),
    i = Mo(t, e);
  return { top: i.end, right: s.end, bottom: i.start, left: s.start };
}
function Bg(n) {
  let t, e, s, i;
  return (
    nt(n)
      ? ((t = n.top), (e = n.right), (s = n.bottom), (i = n.left))
      : (t = e = s = i = n),
    { top: t, right: e, bottom: s, left: i, disabled: n === !1 }
  );
}
function Xc(n, t) {
  const e = [],
    s = n._getSortedDatasetMetas(t);
  let i, r;
  for (i = 0, r = s.length; i < r; ++i) e.push(s[i].index);
  return e;
}
function So(n, t, e, s = {}) {
  const i = n.keys,
    r = s.mode === 'single';
  let a, o, l, c;
  if (t === null) return;
  let u = !1;
  for (a = 0, o = i.length; a < o; ++a) {
    if (((l = +i[a]), l === e)) {
      if (((u = !0), s.all)) continue;
      break;
    }
    (c = n.values[l]), vt(c) && (r || t === 0 || pe(t) === pe(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function zg(n, t) {
  const { iScale: e, vScale: s } = t,
    i = e.axis === 'x' ? 'x' : 'y',
    r = s.axis === 'x' ? 'x' : 'y',
    a = Object.keys(n),
    o = new Array(a.length);
  let l, c, u;
  for (l = 0, c = a.length; l < c; ++l)
    (u = a[l]), (o[l] = { [i]: u, [r]: n[u] });
  return o;
}
function dr(n, t) {
  const e = n && n.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function Wg(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Hg(n) {
  const { min: t, max: e, minDefined: s, maxDefined: i } = n.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? e : Number.POSITIVE_INFINITY,
  };
}
function jg(n, t, e) {
  const s = n[t] || (n[t] = {});
  return s[e] || (s[e] = {});
}
function Po(n, t, e, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const r = n[i.index];
    if ((e && r > 0) || (!e && r < 0)) return i.index;
  }
  return null;
}
function To(n, t) {
  const { chart: e, _cachedMeta: s } = n,
    i = e._stacks || (e._stacks = {}),
    { iScale: r, vScale: a, index: o } = s,
    l = r.axis,
    c = a.axis,
    u = Wg(r, a, s),
    d = t.length;
  let h;
  for (let g = 0; g < d; ++g) {
    const f = t[g],
      { [l]: p, [c]: m } = f,
      b = f._stacks || (f._stacks = {});
    (h = b[c] = jg(i, u, p)),
      (h[o] = m),
      (h._top = Po(h, a, !0, s.type)),
      (h._bottom = Po(h, a, !1, s.type));
    const _ = h._visualValues || (h._visualValues = {});
    _[o] = m;
  }
}
function hr(n, t) {
  const e = n.scales;
  return Object.keys(e)
    .filter((s) => e[s].axis === t)
    .shift();
}
function Vg(n, t) {
  return en(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function qg(n, t, e) {
  return en(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: 'default',
    type: 'data',
  });
}
function $n(n, t) {
  const e = n.controller.index,
    s = n.vScale && n.vScale.axis;
  if (s) {
    t = t || n._parsed;
    for (const i of t) {
      const r = i._stacks;
      if (!r || r[s] === void 0 || r[s][e] === void 0) return;
      delete r[s][e],
        r[s]._visualValues !== void 0 &&
          r[s]._visualValues[e] !== void 0 &&
          delete r[s]._visualValues[e];
    }
  }
}
const fr = (n) => n === 'reset' || n === 'none',
  Do = (n, t) => (t ? n : Object.assign({}, n)),
  Yg = (n, t, e) =>
    n && !t.hidden && t._stacked && { keys: Xc(e, !0), values: null };
class ee {
  constructor(t, e) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = dr(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(t) {
    this.index !== t && $n(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      s = this.getDataset(),
      i = (d, h, g, f) => (d === 'x' ? h : d === 'r' ? f : g),
      r = (e.xAxisID = G(s.xAxisID, hr(t, 'x'))),
      a = (e.yAxisID = G(s.yAxisID, hr(t, 'y'))),
      o = (e.rAxisID = G(s.rAxisID, hr(t, 'r'))),
      l = e.indexAxis,
      c = (e.iAxisID = i(l, r, a, o)),
      u = (e.vAxisID = i(l, a, r, o));
    (e.xScale = this.getScaleForId(r)),
      (e.yScale = this.getScaleForId(a)),
      (e.rScale = this.getScaleForId(o)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && co(this._data, this), t._stacked && $n(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      s = this._data;
    if (nt(e)) {
      const i = this._cachedMeta;
      this._data = zg(e, i);
    } else if (s !== e) {
      if (s) {
        co(s, this);
        const i = this._cachedMeta;
        $n(i), (i._parsed = []);
      }
      e && Object.isExtensible(e) && Of(e, this),
        (this._syncList = []),
        (this._data = e);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      s = this.getDataset();
    let i = !1;
    this._dataCheck();
    const r = e._stacked;
    (e._stacked = dr(e.vScale, e)),
      e.stack !== s.stack && ((i = !0), $n(e), (e.stack = s.stack)),
      this._resyncElements(t),
      (i || r !== e._stacked) &&
        (To(this, e._parsed), (e._stacked = dr(e.vScale, e)));
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      s = t.getOptionScopes(this.getDataset(), e, !0);
    (this.options = t.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: i } = this,
      { iScale: r, _stacked: a } = s,
      o = r.axis;
    let l = t === 0 && e === i.length ? !0 : s._sorted,
      c = t > 0 && s._parsed[t - 1],
      u,
      d,
      h;
    if (this._parsing === !1) (s._parsed = i), (s._sorted = !0), (h = i);
    else {
      gt(i[t])
        ? (h = this.parseArrayData(s, i, t, e))
        : nt(i[t])
          ? (h = this.parseObjectData(s, i, t, e))
          : (h = this.parsePrimitiveData(s, i, t, e));
      const g = () => d[o] === null || (c && d[o] < c[o]);
      for (u = 0; u < e; ++u)
        (s._parsed[u + t] = d = h[u]), l && (g() && (l = !1), (c = d));
      s._sorted = l;
    }
    a && To(this, h);
  }
  parsePrimitiveData(t, e, s, i) {
    const { iScale: r, vScale: a } = t,
      o = r.axis,
      l = a.axis,
      c = r.getLabels(),
      u = r === a,
      d = new Array(i);
    let h, g, f;
    for (h = 0, g = i; h < g; ++h)
      (f = h + s),
        (d[h] = { [o]: u || r.parse(c[f], f), [l]: a.parse(e[f], f) });
    return d;
  }
  parseArrayData(t, e, s, i) {
    const { xScale: r, yScale: a } = t,
      o = new Array(i);
    let l, c, u, d;
    for (l = 0, c = i; l < c; ++l)
      (u = l + s),
        (d = e[u]),
        (o[l] = { x: r.parse(d[0], u), y: a.parse(d[1], u) });
    return o;
  }
  parseObjectData(t, e, s, i) {
    const { xScale: r, yScale: a } = t,
      { xAxisKey: o = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = new Array(i);
    let u, d, h, g;
    for (u = 0, d = i; u < d; ++u)
      (h = u + s),
        (g = e[h]),
        (c[u] = { x: r.parse(Je(g, o), h), y: a.parse(Je(g, l), h) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const i = this.chart,
      r = this._cachedMeta,
      a = e[t.axis],
      o = { keys: Xc(i, !0), values: e._stacks[t.axis]._visualValues };
    return So(o, a, r.index, { mode: s });
  }
  updateRangeFromParsed(t, e, s, i) {
    const r = s[e.axis];
    let a = r === null ? NaN : r;
    const o = i && s._stacks[e.axis];
    i && o && ((i.values = o), (a = So(i, r, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a));
  }
  getMinMax(t, e) {
    const s = this._cachedMeta,
      i = s._parsed,
      r = s._sorted && t === s.iScale,
      a = i.length,
      o = this._getOtherScale(t),
      l = Yg(e, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = Hg(o);
    let h, g;
    function f() {
      g = i[h];
      const p = g[o.axis];
      return !vt(g[t.axis]) || u > p || d < p;
    }
    for (
      h = 0;
      h < a && !(!f() && (this.updateRangeFromParsed(c, t, g, l), r));
      ++h
    );
    if (r) {
      for (h = a - 1; h >= 0; --h)
        if (!f()) {
          this.updateRangeFromParsed(c, t, g, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      s = [];
    let i, r, a;
    for (i = 0, r = e.length; i < r; ++i)
      (a = e[i][t.axis]), vt(a) && s.push(a);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = e.iScale,
      i = e.vScale,
      r = this.getParsed(t);
    return {
      label: s ? '' + s.getLabelForValue(r[s.axis]) : '',
      value: i ? '' + i.getLabelForValue(r[i.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || 'default'),
      (e._clip = Bg(
        G(this.options.clip, Ng(e.xScale, e.yScale, this.getMaxOverflow())),
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      s = this._cachedMeta,
      i = s.data || [],
      r = e.chartArea,
      a = [],
      o = this._drawStart || 0,
      l = this._drawCount || i.length - o,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (s.dataset && s.dataset.draw(t, r, o, l), u = o; u < o + l; ++u) {
      const d = i[u];
      d.hidden || (d.active && c ? a.push(d) : d.draw(t, r));
    }
    for (u = 0; u < a.length; ++u) a[u].draw(t, r);
  }
  getStyle(t, e) {
    const s = e ? 'active' : 'default';
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const i = this.getDataset();
    let r;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      (r = a.$context || (a.$context = qg(this.getContext(), t, a))),
        (r.parsed = this.getParsed(t)),
        (r.raw = i.data[t]),
        (r.index = r.dataIndex = t);
    } else
      (r =
        this.$context ||
        (this.$context = Vg(this.chart.getContext(), this.index))),
        (r.dataset = i),
        (r.index = r.datasetIndex = this.index);
    return (r.active = !!e), (r.mode = s), r;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', s) {
    const i = e === 'active',
      r = this._cachedDataOpts,
      a = t + '-' + e,
      o = r[a],
      l = this.enableOptionSharing && xs(s);
    if (o) return Do(o, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      d = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      h = c.getOptionScopes(this.getDataset(), u),
      g = Object.keys(pt.elements[t]),
      f = () => this.getContext(s, i, e),
      p = c.resolveNamedOptions(h, g, f, d);
    return p.$shared && ((p.$shared = l), (r[a] = Object.freeze(Do(p, l)))), p;
  }
  _resolveAnimations(t, e, s) {
    const i = this.chart,
      r = this._cachedDataOpts,
      a = `animation-${e}`,
      o = r[a];
    if (o) return o;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, e),
        h = u.getOptionScopes(this.getDataset(), d);
      l = u.createResolver(h, this.getContext(t, s, e));
    }
    const c = new $c(i, l && l.animations);
    return l && l._cacheable && (r[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || fr(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e),
      i = this._sharedOptions,
      r = this.getSharedOptions(s),
      a = this.includeOptions(e, r) || r !== i;
    return (
      this.updateSharedOptions(r, e, s), { sharedOptions: r, includeOptions: a }
    );
  }
  updateElement(t, e, s, i) {
    fr(i) ? Object.assign(t, s) : this._resolveAnimations(e, i).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !fr(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, i) {
    t.active = i;
    const r = this.getStyle(e, i);
    this._resolveAnimations(e, s, i).update(t, {
      options: (!i && this.getSharedOptions(r)) || r,
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, 'active', !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      s = this._cachedMeta.data;
    for (const [o, l, c] of this._syncList) this[o](l, c);
    this._syncList = [];
    const i = s.length,
      r = e.length,
      a = Math.min(r, i);
    a && this.parse(0, a),
      r > i
        ? this._insertElements(i, r - i, t)
        : r < i && this._removeElements(r, i - r);
  }
  _insertElements(t, e, s = !0) {
    const i = this._cachedMeta,
      r = i.data,
      a = t + e;
    let o;
    const l = (c) => {
      for (c.length += e, o = c.length - 1; o >= a; o--) c[o] = c[o - e];
    };
    for (l(r), o = t; o < a; ++o) r[o] = new this.dataElementType();
    this._parsing && l(i._parsed),
      this.parse(t, e),
      s && this.updateElements(r, t, e, 'reset');
  }
  updateElements(t, e, s, i) {}
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, e);
      s._stacked && $n(s, i);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, s, i] = t;
      this[e](s, i);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const s = arguments.length - 2;
    s && this._sync(['_insertElements', t, s]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
M(ee, 'defaults', {}),
  M(ee, 'datasetElementType', null),
  M(ee, 'dataElementType', null);
function Ug(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, r = e.length; i < r; i++)
      s = s.concat(e[i].controller.getAllParsedValues(n));
    n._cache.$bar = Tc(s.sort((i, r) => i - r));
  }
  return n._cache.$bar;
}
function $g(n) {
  const t = n.iScale,
    e = Ug(t, n.type);
  let s = t._length,
    i,
    r,
    a,
    o;
  const l = () => {
    a === 32767 ||
      a === -32768 ||
      (xs(o) && (s = Math.min(s, Math.abs(a - o) || s)), (o = a));
  };
  for (i = 0, r = e.length; i < r; ++i) (a = t.getPixelForValue(e[i])), l();
  for (o = void 0, i = 0, r = t.ticks.length; i < r; ++i)
    (a = t.getPixelForTick(i)), l();
  return s;
}
function Xg(n, t, e, s) {
  const i = e.barThickness;
  let r, a;
  return (
    et(i)
      ? ((r = t.min * e.categoryPercentage), (a = e.barPercentage))
      : ((r = i * s), (a = 1)),
    { chunk: r / s, ratio: a, start: t.pixels[n] - r / 2 }
  );
}
function Qg(n, t, e, s) {
  const i = t.pixels,
    r = i[n];
  let a = n > 0 ? i[n - 1] : null,
    o = n < i.length - 1 ? i[n + 1] : null;
  const l = e.categoryPercentage;
  a === null && (a = r - (o === null ? t.end - t.start : o - r)),
    o === null && (o = r + r - a);
  const c = r - ((r - Math.min(a, o)) / 2) * l;
  return {
    chunk: ((Math.abs(o - a) / 2) * l) / s,
    ratio: e.barPercentage,
    start: c,
  };
}
function Gg(n, t, e, s) {
  const i = e.parse(n[0], s),
    r = e.parse(n[1], s),
    a = Math.min(i, r),
    o = Math.max(i, r);
  let l = a,
    c = o;
  Math.abs(a) > Math.abs(o) && ((l = o), (c = a)),
    (t[e.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: i, end: r, min: a, max: o });
}
function Qc(n, t, e, s) {
  return gt(n) ? Gg(n, t, e, s) : (t[e.axis] = e.parse(n, s)), t;
}
function Oo(n, t, e, s) {
  const i = n.iScale,
    r = n.vScale,
    a = i.getLabels(),
    o = i === r,
    l = [];
  let c, u, d, h;
  for (c = e, u = e + s; c < u; ++c)
    (h = t[c]),
      (d = {}),
      (d[i.axis] = o || i.parse(a[c], c)),
      l.push(Qc(h, d, r, c));
  return l;
}
function gr(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Kg(n, t, e) {
  return n !== 0 ? pe(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Jg(n) {
  let t, e, s, i, r;
  return (
    n.horizontal
      ? ((t = n.base > n.x), (e = 'left'), (s = 'right'))
      : ((t = n.base < n.y), (e = 'bottom'), (s = 'top')),
    t ? ((i = 'end'), (r = 'start')) : ((i = 'start'), (r = 'end')),
    { start: e, end: s, reverse: t, top: i, bottom: r }
  );
}
function Zg(n, t, e, s) {
  let i = t.borderSkipped;
  const r = {};
  if (!i) {
    n.borderSkipped = r;
    return;
  }
  if (i === !0) {
    n.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: a, end: o, reverse: l, top: c, bottom: u } = Jg(n);
  i === 'middle' &&
    e &&
    ((n.enableBorderRadius = !0),
    (e._top || 0) === s
      ? (i = c)
      : (e._bottom || 0) === s
        ? (i = u)
        : ((r[Eo(u, a, o, l)] = !0), (i = c))),
    (r[Eo(i, a, o, l)] = !0),
    (n.borderSkipped = r);
}
function Eo(n, t, e, s) {
  return s ? ((n = tp(n, t, e)), (n = Co(n, e, t))) : (n = Co(n, t, e)), n;
}
function tp(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function Co(n, t, e) {
  return n === 'start' ? t : n === 'end' ? e : n;
}
function ep(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
class ii extends ee {
  parsePrimitiveData(t, e, s, i) {
    return Oo(t, e, s, i);
  }
  parseArrayData(t, e, s, i) {
    return Oo(t, e, s, i);
  }
  parseObjectData(t, e, s, i) {
    const { iScale: r, vScale: a } = t,
      { xAxisKey: o = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = r.axis === 'x' ? o : l,
      u = a.axis === 'x' ? o : l,
      d = [];
    let h, g, f, p;
    for (h = s, g = s + i; h < g; ++h)
      (p = e[h]),
        (f = {}),
        (f[r.axis] = r.parse(Je(p, c), h)),
        d.push(Qc(Je(p, u), f, a, h));
    return d;
  }
  updateRangeFromParsed(t, e, s, i) {
    super.updateRangeFromParsed(t, e, s, i);
    const r = s._custom;
    r &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: s, vScale: i } = e,
      r = this.getParsed(t),
      a = r._custom,
      o = gr(a)
        ? '[' + a.start + ', ' + a.end + ']'
        : '' + i.getLabelForValue(r[i.axis]);
    return { label: '' + s.getLabelForValue(r[s.axis]), value: o };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      {
        index: a,
        _cachedMeta: { vScale: o },
      } = this,
      l = o.getBasePixel(),
      c = o.isHorizontal(),
      u = this._getRuler(),
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(e, i);
    for (let g = e; g < e + s; g++) {
      const f = this.getParsed(g),
        p =
          r || et(f[o.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(g),
        m = this._calculateBarIndexPixels(g, u),
        b = (f._stacks || {})[o.axis],
        _ = {
          horizontal: c,
          base: p.base,
          enableBorderRadius:
            !b || gr(f._custom) || a === b._top || a === b._bottom,
          x: c ? p.head : m.center,
          y: c ? m.center : p.head,
          height: c ? m.size : Math.abs(p.size),
          width: c ? Math.abs(p.size) : m.size,
        };
      h &&
        (_.options =
          d || this.resolveDataElementOptions(g, t[g].active ? 'active' : i));
      const x = _.options || t[g].options;
      Zg(_, x, b, a), ep(_, x, u.ratio), this.updateElement(t[g], g, _, i);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta,
      i = s
        .getMatchingVisibleMetas(this._type)
        .filter((u) => u.controller.options.grouped),
      r = s.options.stacked,
      a = [],
      o = this._cachedMeta.controller.getParsed(e),
      l = o && o[s.axis],
      c = (u) => {
        const d = u._parsed.find((g) => g[s.axis] === l),
          h = d && d[u.vScale.axis];
        if (et(h) || isNaN(h)) return !0;
      };
    for (const u of i)
      if (
        !(e !== void 0 && c(u)) &&
        ((r === !1 ||
          a.indexOf(u.stack) === -1 ||
          (r === void 0 && u.stack === void 0)) &&
          a.push(u.stack),
        u.index === t)
      )
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const i = this._getStacks(t, s),
      r = e !== void 0 ? i.indexOf(e) : -1;
    return r === -1 ? i.length - 1 : r;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      s = e.iScale,
      i = [];
    let r, a;
    for (r = 0, a = e.data.length; r < a; ++r)
      i.push(s.getPixelForValue(this.getParsed(r)[s.axis], r));
    const o = t.barThickness;
    return {
      min: o || $g(e),
      pixels: i,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: o ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: s, index: i },
        options: { base: r, minBarLength: a },
      } = this,
      o = r || 0,
      l = this.getParsed(t),
      c = l._custom,
      u = gr(c);
    let d = l[e.axis],
      h = 0,
      g = s ? this.applyStack(e, l, s) : d,
      f,
      p;
    g !== d && ((h = g - d), (g = d)),
      u &&
        ((d = c.barStart),
        (g = c.barEnd - c.barStart),
        d !== 0 && pe(d) !== pe(c.barEnd) && (h = 0),
        (h += d));
    const m = !et(r) && !u ? r : h;
    let b = e.getPixelForValue(m);
    if (
      (this.chart.getDataVisibility(t)
        ? (f = e.getPixelForValue(h + g))
        : (f = b),
      (p = f - b),
      Math.abs(p) < a)
    ) {
      (p = Kg(p, e, o) * a), d === o && (b -= p / 2);
      const _ = e.getPixelForDecimal(0),
        x = e.getPixelForDecimal(1),
        w = Math.min(_, x),
        y = Math.max(_, x);
      (b = Math.max(Math.min(b, y), w)),
        (f = b + p),
        s &&
          !u &&
          (l._stacks[e.axis]._visualValues[i] =
            e.getValueForPixel(f) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(o)) {
      const _ = (pe(p) * e.getLineWidthForValue(o)) / 2;
      (b += _), (p -= _);
    }
    return { size: p, base: b, head: f, center: f + p / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale,
      i = this.options,
      r = i.skipNull,
      a = G(i.maxBarThickness, 1 / 0);
    let o, l;
    if (e.grouped) {
      const c = r ? this._getStackCount(t) : e.stackCount,
        u = i.barThickness === 'flex' ? Qg(t, e, i, c) : Xg(t, e, i, c),
        d = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          r ? t : void 0,
        );
      (o = u.start + u.chunk * d + u.chunk / 2),
        (l = Math.min(a, u.chunk * u.ratio));
    } else
      (o = s.getPixelForValue(this.getParsed(t)[s.axis], t)),
        (l = Math.min(a, e.min * e.ratio));
    return { base: o - l / 2, head: o + l / 2, center: o, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      s = t.data,
      i = s.length;
    let r = 0;
    for (; r < i; ++r)
      this.getParsed(r)[e.axis] !== null &&
        !s[r].hidden &&
        s[r].draw(this._ctx);
  }
}
M(ii, 'id', 'bar'),
  M(ii, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'base', 'width', 'height'],
      },
    },
  }),
  M(ii, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  });
class ri extends ee {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, e, s, i) {
    const r = super.parsePrimitiveData(t, e, s, i);
    for (let a = 0; a < r.length; a++)
      r[a]._custom = this.resolveDataElementOptions(a + s).radius;
    return r;
  }
  parseArrayData(t, e, s, i) {
    const r = super.parseArrayData(t, e, s, i);
    for (let a = 0; a < r.length; a++) {
      const o = e[s + a];
      r[a]._custom = G(o[2], this.resolveDataElementOptions(a + s).radius);
    }
    return r;
  }
  parseObjectData(t, e, s, i) {
    const r = super.parseObjectData(t, e, s, i);
    for (let a = 0; a < r.length; a++) {
      const o = e[s + a];
      r[a]._custom = G(
        o && o.r && +o.r,
        this.resolveDataElementOptions(a + s).radius,
      );
    }
    return r;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let s = t.length - 1; s >= 0; --s)
      e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart.data.labels || [],
      { xScale: i, yScale: r } = e,
      a = this.getParsed(t),
      o = i.getLabelForValue(a.x),
      l = r.getLabelForValue(a.y),
      c = a._custom;
    return {
      label: s[t] || '',
      value: '(' + o + ', ' + l + (c ? ', ' + c : '') + ')',
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      { iScale: a, vScale: o } = this._cachedMeta,
      { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, i),
      u = a.axis,
      d = o.axis;
    for (let h = e; h < e + s; h++) {
      const g = t[h],
        f = !r && this.getParsed(h),
        p = {},
        m = (p[u] = r ? a.getPixelForDecimal(0.5) : a.getPixelForValue(f[u])),
        b = (p[d] = r ? o.getBasePixel() : o.getPixelForValue(f[d]));
      (p.skip = isNaN(m) || isNaN(b)),
        c &&
          ((p.options =
            l || this.resolveDataElementOptions(h, g.active ? 'active' : i)),
          r && (p.options.radius = 0)),
        this.updateElement(g, h, p, i);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let i = super.resolveDataElementOptions(t, e);
    i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
    const r = i.radius;
    return (
      e !== 'active' && (i.radius = 0), (i.radius += G(s && s._custom, r)), i
    );
  }
}
M(ri, 'id', 'bubble'),
  M(ri, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'borderWidth', 'radius'],
      },
    },
  }),
  M(ri, 'overrides', {
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
function np(n, t, e) {
  let s = 1,
    i = 1,
    r = 0,
    a = 0;
  if (t < ht) {
    const o = n,
      l = o + t,
      c = Math.cos(o),
      u = Math.sin(o),
      d = Math.cos(l),
      h = Math.sin(l),
      g = (x, w, y) => (ws(x, o, l, !0) ? 1 : Math.max(w, w * e, y, y * e)),
      f = (x, w, y) => (ws(x, o, l, !0) ? -1 : Math.min(w, w * e, y, y * e)),
      p = g(0, c, d),
      m = g(kt, u, h),
      b = f(ft, c, d),
      _ = f(ft + kt, u, h);
    (s = (p - b) / 2),
      (i = (m - _) / 2),
      (r = -(p + b) / 2),
      (a = -(m + _) / 2);
  }
  return { ratioX: s, ratioY: i, offsetX: r, offsetY: a };
}
class dn extends ee {
  constructor(t, e) {
    super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, e) {
    const s = this.getDataset().data,
      i = this._cachedMeta;
    if (this._parsing === !1) i._parsed = s;
    else {
      let r = (l) => +s[l];
      if (nt(s[t])) {
        const { key: l = 'value' } = this._parsing;
        r = (c) => +Je(s[c], l);
      }
      let a, o;
      for (a = t, o = t + e; a < o; ++a) i._parsed[a] = r(a);
    }
  }
  _getRotation() {
    return te(this.options.rotation - 90);
  }
  _getCircumference() {
    return te(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ht,
      e = -ht;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (
        this.chart.isDatasetVisible(s) &&
        this.chart.getDatasetMeta(s).type === this._type
      ) {
        const i = this.chart.getDatasetMeta(s).controller,
          r = i._getRotation(),
          a = i._getCircumference();
        (t = Math.min(t, r)), (e = Math.max(e, r + a));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: s } = e,
      i = this._cachedMeta,
      r = i.data,
      a =
        this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
      o = Math.max((Math.min(s.width, s.height) - a) / 2, 0),
      l = Math.min(gf(this.options.cutout, o), 1),
      c = this._getRingWeight(this.index),
      { circumference: u, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: g, offsetX: f, offsetY: p } = np(d, u, l),
      m = (s.width - a) / h,
      b = (s.height - a) / g,
      _ = Math.max(Math.min(m, b) / 2, 0),
      x = wc(this.options.radius, _),
      w = Math.max(x * l, 0),
      y = (x - w) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = f * x),
      (this.offsetY = p * x),
      (i.total = this.calculateTotal()),
      (this.outerRadius = x - y * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - y * c, 0)),
      this.updateElements(r, 0, r.length, t);
  }
  _circumference(t, e) {
    const s = this.options,
      i = this._cachedMeta,
      r = this._getCircumference();
    return (e && s.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      i._parsed[t] === null ||
      i.data[t].hidden
      ? 0
      : this.calculateCircumference((i._parsed[t] * r) / ht);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      a = this.chart,
      o = a.chartArea,
      c = a.options.animation,
      u = (o.left + o.right) / 2,
      d = (o.top + o.bottom) / 2,
      h = r && c.animateScale,
      g = h ? 0 : this.innerRadius,
      f = h ? 0 : this.outerRadius,
      { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, i);
    let b = this._getRotation(),
      _;
    for (_ = 0; _ < e; ++_) b += this._circumference(_, r);
    for (_ = e; _ < e + s; ++_) {
      const x = this._circumference(_, r),
        w = t[_],
        y = {
          x: u + this.offsetX,
          y: d + this.offsetY,
          startAngle: b,
          endAngle: b + x,
          circumference: x,
          outerRadius: f,
          innerRadius: g,
        };
      m &&
        (y.options =
          p || this.resolveDataElementOptions(_, w.active ? 'active' : i)),
        (b += x),
        this.updateElement(w, _, y, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let s = 0,
      i;
    for (i = 0; i < e.length; i++) {
      const r = t._parsed[i];
      r !== null &&
        !isNaN(r) &&
        this.chart.getDataVisibility(i) &&
        !e[i].hidden &&
        (s += Math.abs(r));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? ht * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Rs(e._parsed[t], s.options.locale);
    return { label: i[t] || '', value: r };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let i, r, a, o, l;
    if (!t) {
      for (i = 0, r = s.data.datasets.length; i < r; ++i)
        if (s.isDatasetVisible(i)) {
          (a = s.getDatasetMeta(i)), (t = a.data), (o = a.controller);
          break;
        }
    }
    if (!t) return 0;
    for (i = 0, r = t.length; i < r; ++i)
      (l = o.resolveDataElementOptions(i)),
        l.borderAlign !== 'inner' &&
          (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, i = t.length; s < i; ++s) {
      const r = this.resolveDataElementOptions(s);
      e = Math.max(e, r.offset || 0, r.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(G(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
M(dn, 'id', 'doughnut'),
  M(dn, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }),
  M(dn, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) =>
      t !== 'spacing' &&
      !t.startsWith('borderDash') &&
      !t.startsWith('hoverBorderDash'),
  }),
  M(dn, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: s, color: i },
              } = t.legend.options;
              return e.labels.map((r, a) => {
                const l = t.getDatasetMeta(0).controller.getStyle(a);
                return {
                  text: r,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: i,
                  lineWidth: l.borderWidth,
                  pointStyle: s,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, s) {
          s.chart.toggleDataVisibility(e.index), s.chart.update();
        },
      },
    },
  });
class ai extends ee {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: s, data: i = [], _dataset: r } = e,
      a = this.chart._animationsDisabled;
    let { start: o, count: l } = Ec(e, i, a);
    (this._drawStart = o),
      (this._drawCount = l),
      Cc(e) && ((o = 0), (l = i.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!r._decimated),
      (s.points = i);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !a, options: c }, t),
      this.updateElements(i, o, l, t);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      { iScale: a, vScale: o, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, i),
      h = a.axis,
      g = o.axis,
      { spanGaps: f, segment: p } = this.options,
      m = Fn(f) ? f : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || r || i === 'none',
      _ = e + s,
      x = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let y = 0; y < x; ++y) {
      const D = t[y],
        T = b ? D : {};
      if (y < e || y >= _) {
        T.skip = !0;
        continue;
      }
      const k = this.getParsed(y),
        O = et(k[g]),
        L = (T[h] = a.getPixelForValue(k[h], y)),
        R = (T[g] =
          r || O
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, k, l) : k[g], y));
      (T.skip = isNaN(L) || isNaN(R) || O),
        (T.stop = y > 0 && Math.abs(k[h] - w[h]) > m),
        p && ((T.parsed = k), (T.raw = c.data[y])),
        d &&
          (T.options =
            u || this.resolveDataElementOptions(y, D.active ? 'active' : i)),
        b || this.updateElement(D, y, T, i),
        (w = k);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      s = (e.options && e.options.borderWidth) || 0,
      i = t.data || [];
    if (!i.length) return s;
    const r = i[0].size(this.resolveDataElementOptions(0)),
      a = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(s, r, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
M(ai, 'id', 'line'),
  M(ai, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  M(ai, 'overrides', {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
  });
class gs extends ee {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Rs(e._parsed[t].r, s.options.locale);
    return { label: i[t] || '', value: r };
  }
  parseObjectData(t, e, s, i) {
    return zc.bind(this)(t, e, s, i);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((s, i) => {
        const r = this.getParsed(i).r;
        !isNaN(r) &&
          this.chart.getDataVisibility(i) &&
          (r < e.min && (e.min = r), r > e.max && (e.max = r));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      s = t.options,
      i = Math.min(e.right - e.left, e.bottom - e.top),
      r = Math.max(i / 2, 0),
      a = Math.max(s.cutoutPercentage ? (r / 100) * s.cutoutPercentage : 1, 0),
      o = (r - a) / t.getVisibleDatasetCount();
    (this.outerRadius = r - o * this.index),
      (this.innerRadius = this.outerRadius - o);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      a = this.chart,
      l = a.options.animation,
      c = this._cachedMeta.rScale,
      u = c.xCenter,
      d = c.yCenter,
      h = c.getIndexAngle(0) - 0.5 * ft;
    let g = h,
      f;
    const p = 360 / this.countVisibleElements();
    for (f = 0; f < e; ++f) g += this._computeAngle(f, i, p);
    for (f = e; f < e + s; f++) {
      const m = t[f];
      let b = g,
        _ = g + this._computeAngle(f, i, p),
        x = a.getDataVisibility(f)
          ? c.getDistanceFromCenterForValue(this.getParsed(f).r)
          : 0;
      (g = _), r && (l.animateScale && (x = 0), l.animateRotate && (b = _ = h));
      const w = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: x,
        startAngle: b,
        endAngle: _,
        options: this.resolveDataElementOptions(f, m.active ? 'active' : i),
      };
      this.updateElement(m, f, w, i);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((s, i) => {
        !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t)
      ? te(this.resolveDataElementOptions(t, e).angle || s)
      : 0;
  }
}
M(gs, 'id', 'polarArea'),
  M(gs, 'defaults', {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'x',
          'y',
          'startAngle',
          'endAngle',
          'innerRadius',
          'outerRadius',
        ],
      },
    },
    indexAxis: 'r',
    startAngle: 0,
  }),
  M(gs, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: s, color: i },
              } = t.legend.options;
              return e.labels.map((r, a) => {
                const l = t.getDatasetMeta(0).controller.getStyle(a);
                return {
                  text: r,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: i,
                  lineWidth: l.borderWidth,
                  pointStyle: s,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, s) {
          s.chart.toggleDataVisibility(e.index), s.chart.update();
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  });
class Nr extends dn {}
M(Nr, 'id', 'pie'),
  M(Nr, 'defaults', {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: '100%',
  });
class oi extends ee {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: '' + e.getLabelForValue(s[e.axis]),
    };
  }
  parseObjectData(t, e, s, i) {
    return zc.bind(this)(t, e, s, i);
  }
  update(t) {
    const e = this._cachedMeta,
      s = e.dataset,
      i = e.data || [],
      r = e.iScale.getLabels();
    if (((s.points = i), t !== 'resize')) {
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      const o = { _loop: !0, _fullLoop: r.length === i.length, options: a };
      this.updateElement(s, void 0, o, t);
    }
    this.updateElements(i, 0, i.length, t);
  }
  updateElements(t, e, s, i) {
    const r = this._cachedMeta.rScale,
      a = i === 'reset';
    for (let o = e; o < e + s; o++) {
      const l = t[o],
        c = this.resolveDataElementOptions(o, l.active ? 'active' : i),
        u = r.getPointPositionForValue(o, this.getParsed(o).r),
        d = a ? r.xCenter : u.x,
        h = a ? r.yCenter : u.y,
        g = {
          x: d,
          y: h,
          angle: u.angle,
          skip: isNaN(d) || isNaN(h),
          options: c,
        };
      this.updateElement(l, o, g, i);
    }
  }
}
M(oi, 'id', 'radar'),
  M(oi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  M(oi, 'overrides', {
    aspectRatio: 1,
    scales: { r: { type: 'radialLinear' } },
  });
class li extends ee {
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart.data.labels || [],
      { xScale: i, yScale: r } = e,
      a = this.getParsed(t),
      o = i.getLabelForValue(a.x),
      l = r.getLabelForValue(a.y);
    return { label: s[t] || '', value: '(' + o + ', ' + l + ')' };
  }
  update(t) {
    const e = this._cachedMeta,
      { data: s = [] } = e,
      i = this.chart._animationsDisabled;
    let { start: r, count: a } = Ec(e, s, i);
    if (
      ((this._drawStart = r),
      (this._drawCount = a),
      Cc(e) && ((r = 0), (a = s.length)),
      this.options.showLine)
    ) {
      this.datasetElementType || this.addElements();
      const { dataset: o, _dataset: l } = e;
      (o._chart = this.chart),
        (o._datasetIndex = this.index),
        (o._decimated = !!l._decimated),
        (o.points = s);
      const c = this.resolveDatasetElementOptions(t);
      (c.segment = this.options.segment),
        this.updateElement(o, void 0, { animated: !i, options: c }, t);
    } else
      this.datasetElementType &&
        (delete e.dataset, (this.datasetElementType = !1));
    this.updateElements(s, r, a, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement('line')),
      super.addElements();
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      { iScale: a, vScale: o, _stacked: l, _dataset: c } = this._cachedMeta,
      u = this.resolveDataElementOptions(e, i),
      d = this.getSharedOptions(u),
      h = this.includeOptions(i, d),
      g = a.axis,
      f = o.axis,
      { spanGaps: p, segment: m } = this.options,
      b = Fn(p) ? p : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || r || i === 'none';
    let x = e > 0 && this.getParsed(e - 1);
    for (let w = e; w < e + s; ++w) {
      const y = t[w],
        D = this.getParsed(w),
        T = _ ? y : {},
        k = et(D[f]),
        O = (T[g] = a.getPixelForValue(D[g], w)),
        L = (T[f] =
          r || k
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, D, l) : D[f], w));
      (T.skip = isNaN(O) || isNaN(L) || k),
        (T.stop = w > 0 && Math.abs(D[g] - x[g]) > b),
        m && ((T.parsed = D), (T.raw = c.data[w])),
        h &&
          (T.options =
            d || this.resolveDataElementOptions(w, y.active ? 'active' : i)),
        _ || this.updateElement(y, w, T, i),
        (x = D);
    }
    this.updateSharedOptions(d, i, u);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let o = 0;
      for (let l = e.length - 1; l >= 0; --l)
        o = Math.max(o, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return o > 0 && o;
    }
    const s = t.dataset,
      i = (s.options && s.options.borderWidth) || 0;
    if (!e.length) return i;
    const r = e[0].size(this.resolveDataElementOptions(0)),
      a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(i, r, a) / 2;
  }
}
M(li, 'id', 'scatter'),
  M(li, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    showLine: !1,
    fill: !1,
  }),
  M(li, 'overrides', {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
var sp = Object.freeze({
  __proto__: null,
  BarController: ii,
  BubbleController: ri,
  DoughnutController: dn,
  LineController: ai,
  PieController: Nr,
  PolarAreaController: gs,
  RadarController: oi,
  ScatterController: li,
});
function an() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  );
}
class Ea {
  constructor(t) {
    M(this, 'options');
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Ea.prototype, t);
  }
  init() {}
  formats() {
    return an();
  }
  parse() {
    return an();
  }
  format() {
    return an();
  }
  add() {
    return an();
  }
  diff() {
    return an();
  }
  startOf() {
    return an();
  }
  endOf() {
    return an();
  }
}
var Gc = { _date: Ea };
function ip(n, t, e, s) {
  const { controller: i, data: r, _sorted: a } = n,
    o = i._cachedMeta.iScale,
    l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (o && t === o.axis && t !== 'r' && a && r.length) {
    const c = o._reversePixels ? Tf : Oe;
    if (s) {
      if (i._sharedOptions) {
        const u = r[0],
          d = typeof u.getRange == 'function' && u.getRange(t);
        if (d) {
          const h = c(r, t, e - d),
            g = c(r, t, e + d);
          return { lo: h.lo, hi: g.hi };
        }
      }
    } else {
      const u = c(r, t, e);
      if (l) {
        const { vScale: d } = i._cachedMeta,
          { _parsed: h } = n,
          g = h
            .slice(0, u.lo + 1)
            .reverse()
            .findIndex((p) => !et(p[d.axis]));
        u.lo -= Math.max(0, g);
        const f = h.slice(u.hi).findIndex((p) => !et(p[d.axis]));
        u.hi += Math.max(0, f);
      }
      return u;
    }
  }
  return { lo: 0, hi: r.length - 1 };
}
function Qi(n, t, e, s, i) {
  const r = n.getSortedVisibleDatasetMetas(),
    a = e[t];
  for (let o = 0, l = r.length; o < l; ++o) {
    const { index: c, data: u } = r[o],
      { lo: d, hi: h } = ip(r[o], t, a, i);
    for (let g = d; g <= h; ++g) {
      const f = u[g];
      f.skip || s(f, c, g);
    }
  }
}
function rp(n) {
  const t = n.indexOf('x') !== -1,
    e = n.indexOf('y') !== -1;
  return function (s, i) {
    const r = t ? Math.abs(s.x - i.x) : 0,
      a = e ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
  };
}
function pr(n, t, e, s, i) {
  const r = [];
  return (
    (!i && !n.isPointInArea(t)) ||
      Qi(
        n,
        e,
        t,
        function (o, l, c) {
          (!i && !Ee(o, n.chartArea, 0)) ||
            (o.inRange(t.x, t.y, s) &&
              r.push({ element: o, datasetIndex: l, index: c }));
        },
        !0,
      ),
    r
  );
}
function ap(n, t, e, s) {
  let i = [];
  function r(a, o, l) {
    const { startAngle: c, endAngle: u } = a.getProps(
        ['startAngle', 'endAngle'],
        s,
      ),
      { angle: d } = Sc(a, { x: t.x, y: t.y });
    ws(d, c, u) && i.push({ element: a, datasetIndex: o, index: l });
  }
  return Qi(n, e, t, r), i;
}
function op(n, t, e, s, i, r) {
  let a = [];
  const o = rp(e);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const g = u.inRange(t.x, t.y, i);
    if (s && !g) return;
    const f = u.getCenterPoint(i);
    if (!(!!r || n.isPointInArea(f)) && !g) return;
    const m = o(t, f);
    m < l
      ? ((a = [{ element: u, datasetIndex: d, index: h }]), (l = m))
      : m === l && a.push({ element: u, datasetIndex: d, index: h });
  }
  return Qi(n, e, t, c), a;
}
function mr(n, t, e, s, i, r) {
  return !r && !n.isPointInArea(t)
    ? []
    : e === 'r' && !s
      ? ap(n, t, e, i)
      : op(n, t, e, s, i, r);
}
function Ao(n, t, e, s, i) {
  const r = [],
    a = e === 'x' ? 'inXRange' : 'inYRange';
  let o = !1;
  return (
    Qi(n, e, t, (l, c, u) => {
      l[a] &&
        l[a](t[e], i) &&
        (r.push({ element: l, datasetIndex: c, index: u }),
        (o = o || l.inRange(t.x, t.y, i)));
    }),
    s && !o ? [] : r
  );
}
var lp = {
  modes: {
    index(n, t, e, s) {
      const i = ln(t, n),
        r = e.axis || 'x',
        a = e.includeInvisible || !1,
        o = e.intersect ? pr(n, i, r, s, a) : mr(n, i, r, !1, s, a),
        l = [];
      return o.length
        ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = o[0].index,
              d = c.data[u];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: c.index, index: u });
          }),
          l)
        : [];
    },
    dataset(n, t, e, s) {
      const i = ln(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      let o = e.intersect ? pr(n, i, r, s, a) : mr(n, i, r, !1, s, a);
      if (o.length > 0) {
        const l = o[0].datasetIndex,
          c = n.getDatasetMeta(l).data;
        o = [];
        for (let u = 0; u < c.length; ++u)
          o.push({ element: c[u], datasetIndex: l, index: u });
      }
      return o;
    },
    point(n, t, e, s) {
      const i = ln(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return pr(n, i, r, s, a);
    },
    nearest(n, t, e, s) {
      const i = ln(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return mr(n, i, r, e.intersect, s, a);
    },
    x(n, t, e, s) {
      const i = ln(t, n);
      return Ao(n, i, 'x', e.intersect, s);
    },
    y(n, t, e, s) {
      const i = ln(t, n);
      return Ao(n, i, 'y', e.intersect, s);
    },
  },
};
const Kc = ['left', 'top', 'right', 'bottom'];
function Xn(n, t) {
  return n.filter((e) => e.pos === t);
}
function Ro(n, t) {
  return n.filter((e) => Kc.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Qn(n, t) {
  return n.sort((e, s) => {
    const i = t ? s : e,
      r = t ? e : s;
    return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
  });
}
function cp(n) {
  const t = [];
  let e, s, i, r, a, o;
  for (e = 0, s = (n || []).length; e < s; ++e)
    (i = n[e]),
      ({
        position: r,
        options: { stack: a, stackWeight: o = 1 },
      } = i),
      t.push({
        index: e,
        box: i,
        pos: r,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: a && r + a,
        stackWeight: o,
      });
  return t;
}
function up(n) {
  const t = {};
  for (const e of n) {
    const { stack: s, pos: i, stackWeight: r } = e;
    if (!s || !Kc.includes(i)) continue;
    const a = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    a.count++, (a.weight += r);
  }
  return t;
}
function dp(n, t) {
  const e = up(n),
    { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let r, a, o;
  for (r = 0, a = n.length; r < a; ++r) {
    o = n[r];
    const { fullSize: l } = o.box,
      c = e[o.stack],
      u = c && o.stackWeight / c.weight;
    o.horizontal
      ? ((o.width = u ? u * s : l && t.availableWidth), (o.height = i))
      : ((o.width = s), (o.height = u ? u * i : l && t.availableHeight));
  }
  return e;
}
function hp(n) {
  const t = cp(n),
    e = Qn(
      t.filter((c) => c.box.fullSize),
      !0,
    ),
    s = Qn(Xn(t, 'left'), !0),
    i = Qn(Xn(t, 'right')),
    r = Qn(Xn(t, 'top'), !0),
    a = Qn(Xn(t, 'bottom')),
    o = Ro(t, 'x'),
    l = Ro(t, 'y');
  return {
    fullSize: e,
    leftAndTop: s.concat(r),
    rightAndBottom: i.concat(l).concat(a).concat(o),
    chartArea: Xn(t, 'chartArea'),
    vertical: s.concat(i).concat(l),
    horizontal: r.concat(a).concat(o),
  };
}
function Lo(n, t, e, s) {
  return Math.max(n[e], t[e]) + Math.max(n[s], t[s]);
}
function Jc(n, t) {
  (n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right));
}
function fp(n, t, e, s) {
  const { pos: i, box: r } = e,
    a = n.maxPadding;
  if (!nt(i)) {
    e.size && (n[i] -= e.size);
    const d = s[e.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, e.horizontal ? r.height : r.width)),
      (e.size = d.size / d.count),
      (n[i] += e.size);
  }
  r.getPadding && Jc(a, r.getPadding());
  const o = Math.max(0, t.outerWidth - Lo(a, n, 'left', 'right')),
    l = Math.max(0, t.outerHeight - Lo(a, n, 'top', 'bottom')),
    c = o !== n.w,
    u = l !== n.h;
  return (
    (n.w = o),
    (n.h = l),
    e.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function gp(n) {
  const t = n.maxPadding;
  function e(s) {
    const i = Math.max(t[s] - n[s], 0);
    return (n[s] += i), i;
  }
  (n.y += e('top')), (n.x += e('left')), e('right'), e('bottom');
}
function pp(n, t) {
  const e = t.maxPadding;
  function s(i) {
    const r = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((a) => {
        r[a] = Math.max(t[a], e[a]);
      }),
      r
    );
  }
  return s(n ? ['left', 'right'] : ['top', 'bottom']);
}
function rs(n, t, e, s) {
  const i = [];
  let r, a, o, l, c, u;
  for (r = 0, a = n.length, c = 0; r < a; ++r) {
    (o = n[r]),
      (l = o.box),
      l.update(o.width || t.w, o.height || t.h, pp(o.horizontal, t));
    const { same: d, other: h } = fp(t, e, o, s);
    (c |= d && i.length), (u = u || h), l.fullSize || i.push(o);
  }
  return (c && rs(i, t, e, s)) || u;
}
function $s(n, t, e, s, i) {
  (n.top = e),
    (n.left = t),
    (n.right = t + s),
    (n.bottom = e + i),
    (n.width = s),
    (n.height = i);
}
function Fo(n, t, e, s) {
  const i = e.padding;
  let { x: r, y: a } = t;
  for (const o of n) {
    const l = o.box,
      c = s[o.stack] || { placed: 0, weight: 1 },
      u = o.stackWeight / c.weight || 1;
    if (o.horizontal) {
      const d = t.w * u,
        h = c.size || l.height;
      xs(c.start) && (a = c.start),
        l.fullSize
          ? $s(l, i.left, a, e.outerWidth - i.right - i.left, h)
          : $s(l, t.left + c.placed, a, d, h),
        (c.start = a),
        (c.placed += d),
        (a = l.bottom);
    } else {
      const d = t.h * u,
        h = c.size || l.width;
      xs(c.start) && (r = c.start),
        l.fullSize
          ? $s(l, r, i.top, h, e.outerHeight - i.bottom - i.top)
          : $s(l, r, t.top + c.placed, h, d),
        (c.start = r),
        (c.placed += d),
        (r = l.right);
    }
  }
  (t.x = r), (t.y = a);
}
var Rt = {
  addBox(n, t) {
    n.boxes || (n.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    (t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight);
  },
  update(n, t, e, s) {
    if (!n) return;
    const i = Lt(n.options.layout.padding),
      r = Math.max(t - i.width, 0),
      a = Math.max(e - i.height, 0),
      o = hp(n.boxes),
      l = o.vertical,
      c = o.horizontal;
    at(n.boxes, (p) => {
      typeof p.beforeLayout == 'function' && p.beforeLayout();
    });
    const u =
        l.reduce(
          (p, m) => (m.box.options && m.box.options.display === !1 ? p : p + 1),
          0,
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: i,
        availableWidth: r,
        availableHeight: a,
        vBoxMaxWidth: r / 2 / u,
        hBoxMaxHeight: a / 2,
      }),
      h = Object.assign({}, i);
    Jc(h, Lt(s));
    const g = Object.assign(
        { maxPadding: h, w: r, h: a, x: i.left, y: i.top },
        i,
      ),
      f = dp(l.concat(c), d);
    rs(o.fullSize, g, d, f),
      rs(l, g, d, f),
      rs(c, g, d, f) && rs(l, g, d, f),
      gp(g),
      Fo(o.leftAndTop, g, d, f),
      (g.x += g.w),
      (g.y += g.h),
      Fo(o.rightAndBottom, g, d, f),
      (n.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w,
      }),
      at(o.chartArea, (p) => {
        const m = p.box;
        Object.assign(m, n.chartArea),
          m.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Zc {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {}
  removeEventListener(t, e, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, i) {
    return (
      (e = Math.max(0, e || t.width)),
      (s = s || t.height),
      { width: e, height: Math.max(0, i ? Math.floor(e / i) : s) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class mp extends Zc {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ci = '$chartjs',
  bp = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  Io = (n) => n === null || n === '';
function _p(n, t) {
  const e = n.style,
    s = n.getAttribute('height'),
    i = n.getAttribute('width');
  if (
    ((n[ci] = {
      initial: {
        height: s,
        width: i,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    Io(i))
  ) {
    const r = vo(n, 'width');
    r !== void 0 && (n.width = r);
  }
  if (Io(s))
    if (n.style.height === '') n.height = n.width / (t || 2);
    else {
      const r = vo(n, 'height');
      r !== void 0 && (n.height = r);
    }
  return n;
}
const tu = yg ? { passive: !0 } : !1;
function vp(n, t, e) {
  n && n.addEventListener(t, e, tu);
}
function yp(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, tu);
}
function xp(n, t) {
  const e = bp[n.type] || n.type,
    { x: s, y: i } = ln(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null,
  };
}
function Oi(n, t) {
  for (const e of n) if (e === t || e.contains(t)) return !0;
}
function wp(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Oi(o.addedNodes, s)), (a = a && !Oi(o.removedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function kp(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Oi(o.removedNodes, s)), (a = a && !Oi(o.addedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const Ms = new Map();
let No = 0;
function eu() {
  const n = window.devicePixelRatio;
  n !== No &&
    ((No = n),
    Ms.forEach((t, e) => {
      e.currentDevicePixelRatio !== n && t();
    }));
}
function Mp(n, t) {
  Ms.size || window.addEventListener('resize', eu), Ms.set(n, t);
}
function Sp(n) {
  Ms.delete(n), Ms.size || window.removeEventListener('resize', eu);
}
function Pp(n, t, e) {
  const s = n.canvas,
    i = s && Oa(s);
  if (!i) return;
  const r = Oc((o, l) => {
      const c = i.clientWidth;
      e(o, l), c < i.clientWidth && e();
    }, window),
    a = new ResizeObserver((o) => {
      const l = o[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || r(c, u);
    });
  return a.observe(i), Mp(n, r), a;
}
function br(n, t, e) {
  e && e.disconnect(), t === 'resize' && Sp(n);
}
function Tp(n, t, e) {
  const s = n.canvas,
    i = Oc((r) => {
      n.ctx !== null && e(xp(r, n));
    }, n);
  return vp(s, t, i), i;
}
class Dp extends Zc {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext('2d');
    return s && s.canvas === t ? (_p(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[ci]) return !1;
    const s = e[ci].initial;
    ['height', 'width'].forEach((r) => {
      const a = s[r];
      et(a) ? e.removeAttribute(r) : e.setAttribute(r, a);
    });
    const i = s.style || {};
    return (
      Object.keys(i).forEach((r) => {
        e.style[r] = i[r];
      }),
      (e.width = e.width),
      delete e[ci],
      !0
    );
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const i = t.$proxies || (t.$proxies = {}),
      a = { attach: wp, detach: kp, resize: Pp }[e] || Tp;
    i[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[e];
    if (!i) return;
    (({ attach: br, detach: br, resize: br })[e] || yp)(t, e, i),
      (s[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, i) {
    return vg(t, e, s, i);
  }
  isAttached(t) {
    const e = t && Oa(t);
    return !!(e && e.isConnected);
  }
}
function Op(n) {
  return !Da() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas)
    ? mp
    : Dp;
}
var ei;
let Le =
  ((ei = class {
    constructor() {
      M(this, 'x');
      M(this, 'y');
      M(this, 'active', !1);
      M(this, 'options');
      M(this, '$animations');
    }
    tooltipPosition(t) {
      const { x: e, y: s } = this.getProps(['x', 'y'], t);
      return { x: e, y: s };
    }
    hasValue() {
      return Fn(this.x) && Fn(this.y);
    }
    getProps(t, e) {
      const s = this.$animations;
      if (!e || !s) return this;
      const i = {};
      return (
        t.forEach((r) => {
          i[r] = s[r] && s[r].active() ? s[r]._to : this[r];
        }),
        i
      );
    }
  }),
  M(ei, 'defaults', {}),
  M(ei, 'defaultRoutes'),
  ei);
function Ep(n, t) {
  const e = n.options.ticks,
    s = Cp(n),
    i = Math.min(e.maxTicksLimit || s, s),
    r = e.major.enabled ? Rp(t) : [],
    a = r.length,
    o = r[0],
    l = r[a - 1],
    c = [];
  if (a > i) return Lp(t, c, r, a / i), c;
  const u = Ap(r, t, i);
  if (a > 0) {
    let d, h;
    const g = a > 1 ? Math.round((l - o) / (a - 1)) : null;
    for (Xs(t, c, u, et(g) ? 0 : o - g, o), d = 0, h = a - 1; d < h; d++)
      Xs(t, c, u, r[d], r[d + 1]);
    return Xs(t, c, u, l, et(g) ? t.length : l + g), c;
  }
  return Xs(t, c, u), c;
}
function Cp(n) {
  const t = n.options.offset,
    e = n._tickSize(),
    s = n._length / e + (t ? 0 : 1),
    i = n._maxLength / e;
  return Math.floor(Math.min(s, i));
}
function Ap(n, t, e) {
  const s = Fp(n),
    i = t.length / e;
  if (!s) return Math.max(i, 1);
  const r = wf(s);
  for (let a = 0, o = r.length - 1; a < o; a++) {
    const l = r[a];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function Rp(n) {
  const t = [];
  let e, s;
  for (e = 0, s = n.length; e < s; e++) n[e].major && t.push(e);
  return t;
}
function Lp(n, t, e, s) {
  let i = 0,
    r = e[0],
    a;
  for (s = Math.ceil(s), a = 0; a < n.length; a++)
    a === r && (t.push(n[a]), i++, (r = e[i * s]));
}
function Xs(n, t, e, s, i) {
  const r = G(s, 0),
    a = Math.min(G(i, n.length), n.length);
  let o = 0,
    l,
    c,
    u;
  for (
    e = Math.ceil(e), i && ((l = i - s), (e = l / Math.floor(l / e))), u = r;
    u < 0;

  )
    o++, (u = Math.round(r + o * e));
  for (c = Math.max(r, 0); c < a; c++)
    c === u && (t.push(n[c]), o++, (u = Math.round(r + o * e)));
}
function Fp(n) {
  const t = n.length;
  let e, s;
  if (t < 2) return !1;
  for (s = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== s) return !1;
  return s;
}
const Ip = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
  Bo = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
  zo = (n, t) => Math.min(t || n, n);
function Wo(n, t) {
  const e = [],
    s = n.length / t,
    i = n.length;
  let r = 0;
  for (; r < i; r += s) e.push(n[Math.floor(r)]);
  return e;
}
function Np(n, t, e) {
  const s = n.ticks.length,
    i = Math.min(t, s - 1),
    r = n._startPixel,
    a = n._endPixel,
    o = 1e-6;
  let l = n.getPixelForTick(i),
    c;
  if (
    !(
      e &&
      (s === 1
        ? (c = Math.max(l - r, a - l))
        : t === 0
          ? (c = (n.getPixelForTick(1) - l) / 2)
          : (c = (l - n.getPixelForTick(i - 1)) / 2),
      (l += i < t ? c : -c),
      l < r - o || l > a + o)
    )
  )
    return l;
}
function Bp(n, t) {
  at(n, (e) => {
    const s = e.gc,
      i = s.length / 2;
    let r;
    if (i > t) {
      for (r = 0; r < i; ++r) delete e.data[s[r]];
      s.splice(0, i);
    }
  });
}
function Gn(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Ho(n, t) {
  if (!n.display) return 0;
  const e = Tt(n.font, t),
    s = Lt(n.padding);
  return (gt(n.text) ? n.text.length : 1) * e.lineHeight + s.height;
}
function zp(n, t) {
  return en(n, { scale: t, type: 'scale' });
}
function Wp(n, t, e) {
  return en(n, { tick: e, index: t, type: 'tick' });
}
function Hp(n, t, e) {
  let s = wa(n);
  return ((e && t !== 'right') || (!e && t === 'right')) && (s = Ip(s)), s;
}
function jp(n, t, e, s) {
  const { top: i, left: r, bottom: a, right: o, chart: l } = n,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    g,
    f;
  const p = a - i,
    m = o - r;
  if (n.isHorizontal()) {
    if (((g = Ct(s, r, o)), nt(e))) {
      const b = Object.keys(e)[0],
        _ = e[b];
      f = u[b].getPixelForValue(_) + p - t;
    } else
      e === 'center' ? (f = (c.bottom + c.top) / 2 + p - t) : (f = Bo(n, e, t));
    h = o - r;
  } else {
    if (nt(e)) {
      const b = Object.keys(e)[0],
        _ = e[b];
      g = u[b].getPixelForValue(_) - m + t;
    } else
      e === 'center' ? (g = (c.left + c.right) / 2 - m + t) : (g = Bo(n, e, t));
    (f = Ct(s, a, i)), (d = e === 'left' ? -kt : kt);
  }
  return { titleX: g, titleY: f, maxWidth: h, rotation: d };
}
class xn extends Le {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: i } = this;
    return (
      (t = $t(t, Number.POSITIVE_INFINITY)),
      (e = $t(e, Number.NEGATIVE_INFINITY)),
      (s = $t(s, Number.POSITIVE_INFINITY)),
      (i = $t(i, Number.NEGATIVE_INFINITY)),
      { min: $t(t, s), max: $t(e, i), minDefined: vt(t), maxDefined: vt(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: i, maxDefined: r } = this.getUserBounds(),
      a;
    if (i && r) return { min: e, max: s };
    const o = this.getMatchingVisibleMetas();
    for (let l = 0, c = o.length; l < c; ++l)
      (a = o[l].controller.getMinMax(this, t)),
        i || (e = Math.min(e, a.min)),
        r || (s = Math.max(s, a.max));
    return (
      (e = r && e > s ? s : e),
      (s = i && e > s ? e : s),
      { min: $t(e, $t(s, e)), max: $t(s, $t(e, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    ut(this.options.beforeUpdate, [this]);
  }
  update(t, e, s) {
    const { beginAtZero: i, grace: r, ticks: a } = this.options,
      o = a.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Kf(this, r, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? Wo(this.ticks, o) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === 'auto') &&
        ((this.ticks = Ep(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      e,
      s;
    this.isHorizontal()
      ? ((e = this.left), (s = this.right))
      : ((e = this.top), (s = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = s),
      (this._reversePixels = t),
      (this._length = s - e),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    ut(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ut(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    ut(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ut(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    ut(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, i, r;
    for (s = 0, i = t.length; s < i; s++)
      (r = t[s]), (r.label = ut(e.callback, [r.value, s, t], this));
  }
  afterTickToLabelConversion() {
    ut(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ut(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      s = zo(this.ticks.length, t.ticks.maxTicksLimit),
      i = e.minRotation || 0,
      r = e.maxRotation;
    let a = i,
      o,
      l,
      c;
    if (
      !this._isVisible() ||
      !e.display ||
      i >= r ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      h = u.highest.height,
      g = Ot(this.chart.width - d, 0, this.maxWidth);
    (o = t.offset ? this.maxWidth / s : g / (s - 1)),
      d + 6 > o &&
        ((o = g / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Gn(t.grid) -
          e.padding -
          Ho(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (a = ya(
          Math.min(
            Math.asin(Ot((u.highest.height + 6) / o, -1, 1)),
            Math.asin(Ot(l / c, -1, 1)) - Math.asin(Ot(h / c, -1, 1)),
          ),
        )),
        (a = Math.max(i, Math.min(r, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    ut(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ut(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: s, title: i, grid: r },
      } = this,
      a = this._isVisible(),
      o = this.isHorizontal();
    if (a) {
      const l = Ho(i, e.options.font);
      if (
        (o
          ? ((t.width = this.maxWidth), (t.height = Gn(r) + l))
          : ((t.height = this.maxHeight), (t.width = Gn(r) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          g = s.padding * 2,
          f = te(this.labelRotation),
          p = Math.cos(f),
          m = Math.sin(f);
        if (o) {
          const b = s.mirror ? 0 : m * d.width + p * h.height;
          t.height = Math.min(this.maxHeight, t.height + b + g);
        } else {
          const b = s.mirror ? 0 : p * d.width + m * h.height;
          t.width = Math.min(this.maxWidth, t.width + b + g);
        }
        this._calculatePadding(c, u, m, p);
      }
    }
    this._handleMargins(),
      o
        ? ((this.width = this._length =
            e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            e.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, e, s, i) {
    const {
        ticks: { align: r, padding: a },
        position: o,
      } = this.options,
      l = this.labelRotation !== 0,
      c = o !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        g = 0;
      l
        ? c
          ? ((h = i * t.width), (g = s * e.height))
          : ((h = s * t.height), (g = i * e.width))
        : r === 'start'
          ? (g = e.width)
          : r === 'end'
            ? (h = t.width)
            : r !== 'inner' && ((h = t.width / 2), (g = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + a) * this.width) / (this.width - u),
          0,
        )),
        (this.paddingRight = Math.max(
          ((g - d + a) * this.width) / (this.width - d),
          0,
        ));
    } else {
      let u = e.height / 2,
        d = t.height / 2;
      r === 'start'
        ? ((u = 0), (d = t.height))
        : r === 'end' && ((u = e.height), (d = 0)),
        (this.paddingTop = u + a),
        (this.paddingBottom = d + a);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    ut(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === 'top' || e === 'bottom' || t === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      et(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Wo(s, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit,
          ));
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: i, _longestTextCache: r } = this,
      a = [],
      o = [],
      l = Math.floor(e / zo(e, s));
    let c = 0,
      u = 0,
      d,
      h,
      g,
      f,
      p,
      m,
      b,
      _,
      x,
      w,
      y;
    for (d = 0; d < e; d += l) {
      if (
        ((f = t[d].label),
        (p = this._resolveTickFontOptions(d)),
        (i.font = m = p.string),
        (b = r[m] = r[m] || { data: {}, gc: [] }),
        (_ = p.lineHeight),
        (x = w = 0),
        !et(f) && !gt(f))
      )
        (x = Ti(i, b.data, b.gc, x, f)), (w = _);
      else if (gt(f))
        for (h = 0, g = f.length; h < g; ++h)
          (y = f[h]),
            !et(y) && !gt(y) && ((x = Ti(i, b.data, b.gc, x, y)), (w += _));
      a.push(x), o.push(w), (c = Math.max(x, c)), (u = Math.max(w, u));
    }
    Bp(r, e);
    const D = a.indexOf(c),
      T = o.indexOf(u),
      k = (O) => ({ width: a[O] || 0, height: o[O] || 0 });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(D),
      highest: k(T),
      widths: a,
      heights: o,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Pf(this._alignToPixels ? rn(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Wp(this.getContext(), t, s));
    }
    return this.$context || (this.$context = zp(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = te(this.labelRotation),
      s = Math.abs(Math.cos(e)),
      i = Math.abs(Math.sin(e)),
      r = this._getLabelSizes(),
      a = t.autoSkipPadding || 0,
      o = r ? r.widest.width + a : 0,
      l = r ? r.highest.height + a : 0;
    return this.isHorizontal()
      ? l * s > o * i
        ? o / s
        : l / i
      : l * i < o * s
        ? l / s
        : o / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      s = this.chart,
      i = this.options,
      { grid: r, position: a, border: o } = i,
      l = r.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      h = Gn(r),
      g = [],
      f = o.setContext(this.getContext()),
      p = f.display ? f.width : 0,
      m = p / 2,
      b = function (q) {
        return rn(s, q, p);
      };
    let _, x, w, y, D, T, k, O, L, R, E, W;
    if (a === 'top')
      (_ = b(this.bottom)),
        (T = this.bottom - h),
        (O = _ - m),
        (R = b(t.top) + m),
        (W = t.bottom);
    else if (a === 'bottom')
      (_ = b(this.top)),
        (R = t.top),
        (W = b(t.bottom) - m),
        (T = _ + m),
        (O = this.top + h);
    else if (a === 'left')
      (_ = b(this.right)),
        (D = this.right - h),
        (k = _ - m),
        (L = b(t.left) + m),
        (E = t.right);
    else if (a === 'right')
      (_ = b(this.left)),
        (L = t.left),
        (E = b(t.right) - m),
        (D = _ + m),
        (k = this.left + h);
    else if (e === 'x') {
      if (a === 'center') _ = b((t.top + t.bottom) / 2 + 0.5);
      else if (nt(a)) {
        const q = Object.keys(a)[0],
          K = a[q];
        _ = b(this.chart.scales[q].getPixelForValue(K));
      }
      (R = t.top), (W = t.bottom), (T = _ + m), (O = T + h);
    } else if (e === 'y') {
      if (a === 'center') _ = b((t.left + t.right) / 2);
      else if (nt(a)) {
        const q = Object.keys(a)[0],
          K = a[q];
        _ = b(this.chart.scales[q].getPixelForValue(K));
      }
      (D = _ - m), (k = D - h), (L = t.left), (E = t.right);
    }
    const Z = G(i.ticks.maxTicksLimit, d),
      U = Math.max(1, Math.ceil(d / Z));
    for (x = 0; x < d; x += U) {
      const q = this.getContext(x),
        K = r.setContext(q),
        Y = o.setContext(q),
        I = K.lineWidth,
        H = K.color,
        $ = Y.dash || [],
        tt = Y.dashOffset,
        B = K.tickWidth,
        F = K.tickColor,
        J = K.tickBorderDash || [],
        mt = K.tickBorderDashOffset;
      (w = Np(this, x, l)),
        w !== void 0 &&
          ((y = rn(s, w, I)),
          c ? (D = k = L = E = y) : (T = O = R = W = y),
          g.push({
            tx1: D,
            ty1: T,
            tx2: k,
            ty2: O,
            x1: L,
            y1: R,
            x2: E,
            y2: W,
            width: I,
            color: H,
            borderDash: $,
            borderDashOffset: tt,
            tickWidth: B,
            tickColor: F,
            tickBorderDash: J,
            tickBorderDashOffset: mt,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = _), g;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      s = this.options,
      { position: i, ticks: r } = s,
      a = this.isHorizontal(),
      o = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = r,
      h = Gn(s.grid),
      g = h + u,
      f = d ? -u : g,
      p = -te(this.labelRotation),
      m = [];
    let b,
      _,
      x,
      w,
      y,
      D,
      T,
      k,
      O,
      L,
      R,
      E,
      W = 'middle';
    if (i === 'top')
      (D = this.bottom - f), (T = this._getXAxisLabelAlignment());
    else if (i === 'bottom')
      (D = this.top + f), (T = this._getXAxisLabelAlignment());
    else if (i === 'left') {
      const U = this._getYAxisLabelAlignment(h);
      (T = U.textAlign), (y = U.x);
    } else if (i === 'right') {
      const U = this._getYAxisLabelAlignment(h);
      (T = U.textAlign), (y = U.x);
    } else if (e === 'x') {
      if (i === 'center') D = (t.top + t.bottom) / 2 + g;
      else if (nt(i)) {
        const U = Object.keys(i)[0],
          q = i[U];
        D = this.chart.scales[U].getPixelForValue(q) + g;
      }
      T = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (i === 'center') y = (t.left + t.right) / 2 - g;
      else if (nt(i)) {
        const U = Object.keys(i)[0],
          q = i[U];
        y = this.chart.scales[U].getPixelForValue(q);
      }
      T = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === 'y' && (l === 'start' ? (W = 'top') : l === 'end' && (W = 'bottom'));
    const Z = this._getLabelSizes();
    for (b = 0, _ = o.length; b < _; ++b) {
      (x = o[b]), (w = x.label);
      const U = r.setContext(this.getContext(b));
      (k = this.getPixelForTick(b) + r.labelOffset),
        (O = this._resolveTickFontOptions(b)),
        (L = O.lineHeight),
        (R = gt(w) ? w.length : 1);
      const q = R / 2,
        K = U.color,
        Y = U.textStrokeColor,
        I = U.textStrokeWidth;
      let H = T;
      a
        ? ((y = k),
          T === 'inner' &&
            (b === _ - 1
              ? (H = this.options.reverse ? 'left' : 'right')
              : b === 0
                ? (H = this.options.reverse ? 'right' : 'left')
                : (H = 'center')),
          i === 'top'
            ? c === 'near' || p !== 0
              ? (E = -R * L + L / 2)
              : c === 'center'
                ? (E = -Z.highest.height / 2 - q * L + L)
                : (E = -Z.highest.height + L / 2)
            : c === 'near' || p !== 0
              ? (E = L / 2)
              : c === 'center'
                ? (E = Z.highest.height / 2 - q * L)
                : (E = Z.highest.height - R * L),
          d && (E *= -1),
          p !== 0 && !U.showLabelBackdrop && (y += (L / 2) * Math.sin(p)))
        : ((D = k), (E = ((1 - R) * L) / 2));
      let $;
      if (U.showLabelBackdrop) {
        const tt = Lt(U.backdropPadding),
          B = Z.heights[b],
          F = Z.widths[b];
        let J = E - tt.top,
          mt = 0 - tt.left;
        switch (W) {
          case 'middle':
            J -= B / 2;
            break;
          case 'bottom':
            J -= B;
            break;
        }
        switch (T) {
          case 'center':
            mt -= F / 2;
            break;
          case 'right':
            mt -= F;
            break;
          case 'inner':
            b === _ - 1 ? (mt -= F) : b > 0 && (mt -= F / 2);
            break;
        }
        $ = {
          left: mt,
          top: J,
          width: F + tt.width,
          height: B + tt.height,
          color: U.backdropColor,
        };
      }
      m.push({
        label: w,
        font: O,
        textOffset: E,
        options: {
          rotation: p,
          color: K,
          strokeColor: Y,
          strokeWidth: I,
          textAlign: H,
          textBaseline: W,
          translation: [y, D],
          backdrop: $,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-te(this.labelRotation)) return t === 'top' ? 'left' : 'right';
    let i = 'center';
    return (
      e.align === 'start'
        ? (i = 'left')
        : e.align === 'end'
          ? (i = 'right')
          : e.align === 'inner' && (i = 'inner'),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: s, mirror: i, padding: r },
      } = this.options,
      a = this._getLabelSizes(),
      o = t + r,
      l = a.widest.width;
    let c, u;
    return (
      e === 'left'
        ? i
          ? ((u = this.right + r),
            s === 'near'
              ? (c = 'left')
              : s === 'center'
                ? ((c = 'center'), (u += l / 2))
                : ((c = 'right'), (u += l)))
          : ((u = this.right - o),
            s === 'near'
              ? (c = 'right')
              : s === 'center'
                ? ((c = 'center'), (u -= l / 2))
                : ((c = 'left'), (u = this.left)))
        : e === 'right'
          ? i
            ? ((u = this.left + r),
              s === 'near'
                ? (c = 'right')
                : s === 'center'
                  ? ((c = 'center'), (u -= l / 2))
                  : ((c = 'left'), (u -= l)))
            : ((u = this.left + o),
              s === 'near'
                ? (c = 'left')
                : s === 'center'
                  ? ((c = 'center'), (u += l / 2))
                  : ((c = 'right'), (u = this.right)))
          : (c = 'right'),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === 'left' || e === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === 'top' || e === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: s,
      top: i,
      width: r,
      height: a,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(s, i, r, a), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const i = this.ticks.findIndex((r) => r.value === t);
    return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      s = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let r, a;
    const o = (l, c, u) => {
      !u.width ||
        !u.color ||
        (s.save(),
        (s.lineWidth = u.width),
        (s.strokeStyle = u.color),
        s.setLineDash(u.borderDash || []),
        (s.lineDashOffset = u.borderDashOffset),
        s.beginPath(),
        s.moveTo(l.x, l.y),
        s.lineTo(c.x, c.y),
        s.stroke(),
        s.restore());
    };
    if (e.display)
      for (r = 0, a = i.length; r < a; ++r) {
        const l = i[r];
        e.drawOnChartArea && o({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          e.drawTicks &&
            o(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              },
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: s, grid: i },
      } = this,
      r = s.setContext(this.getContext()),
      a = s.display ? r.width : 0;
    if (!a) return;
    const o = i.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, u, d, h;
    this.isHorizontal()
      ? ((c = rn(t, this.left, a) - a / 2),
        (u = rn(t, this.right, o) + o / 2),
        (d = h = l))
      : ((d = rn(t, this.top, a) - a / 2),
        (h = rn(t, this.bottom, o) + o / 2),
        (c = u = l)),
      e.save(),
      (e.lineWidth = r.width),
      (e.strokeStyle = r.color),
      e.beginPath(),
      e.moveTo(c, d),
      e.lineTo(u, h),
      e.stroke(),
      e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      i = this._computeLabelArea();
    i && Ui(s, i);
    const r = this.getLabelItems(t);
    for (const a of r) {
      const o = a.options,
        l = a.font,
        c = a.label,
        u = a.textOffset;
      _n(s, c, 0, u, l, o);
    }
    i && $i(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: s, reverse: i },
    } = this;
    if (!s.display) return;
    const r = Tt(s.font),
      a = Lt(s.padding),
      o = s.align;
    let l = r.lineHeight / 2;
    e === 'bottom' || e === 'center' || nt(e)
      ? ((l += a.bottom),
        gt(s.text) && (l += r.lineHeight * (s.text.length - 1)))
      : (l += a.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = jp(this, l, e, o);
    _n(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: d,
      rotation: h,
      textAlign: Hp(o, e, i),
      textBaseline: 'middle',
      translation: [c, u],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      s = G(t.grid && t.grid.z, -1),
      i = G(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== xn.prototype.draw
      ? [
          {
            z: e,
            draw: (r) => {
              this.draw(r);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (r) => {
              this.drawBackground(), this.drawGrid(r), this.drawTitle();
            },
          },
          {
            z: i,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (r) => {
              this.drawLabels(r);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + 'AxisID',
      i = [];
    let r, a;
    for (r = 0, a = e.length; r < a; ++r) {
      const o = e[r];
      o[s] === this.id && (!t || o.type === t) && i.push(o);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return Tt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Qs {
  constructor(t, e, s) {
    (this.type = t),
      (this.scope = e),
      (this.override = s),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype,
    );
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Yp(e) && (s = this.register(e));
    const i = this.items,
      r = t.id,
      a = this.scope + '.' + r;
    if (!r) throw new Error('class does not have id: ' + t);
    return (
      r in i ||
        ((i[r] = t),
        Vp(t, a, s),
        this.override && pt.override(t.id, t.overrides)),
      a
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      s = t.id,
      i = this.scope;
    s in e && delete e[s],
      i && s in pt[i] && (delete pt[i][s], this.override && delete bn[s]);
  }
}
function Vp(n, t, e) {
  const s = ys(Object.create(null), [
    e ? pt.get(e) : {},
    pt.get(t),
    n.defaults,
  ]);
  pt.set(t, s),
    n.defaultRoutes && qp(t, n.defaultRoutes),
    n.descriptors && pt.describe(t, n.descriptors);
}
function qp(n, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split('.'),
      i = s.pop(),
      r = [n].concat(s).join('.'),
      a = t[e].split('.'),
      o = a.pop(),
      l = a.join('.');
    pt.route(r, i, l, o);
  });
}
function Yp(n) {
  return 'id' in n && 'defaults' in n;
}
class Up {
  constructor() {
    (this.controllers = new Qs(ee, 'datasets', !0)),
      (this.elements = new Qs(Le, 'elements')),
      (this.plugins = new Qs(Object, 'plugins')),
      (this.scales = new Qs(xn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, s) {
    [...e].forEach((i) => {
      const r = s || this._getRegistryForType(i);
      s || r.isForType(i) || (r === this.plugins && i.id)
        ? this._exec(t, r, i)
        : at(i, (a) => {
            const o = s || this._getRegistryForType(a);
            this._exec(t, o, a);
          });
    });
  }
  _exec(t, e, s) {
    const i = va(t);
    ut(s['before' + i], [], s), e[t](s), ut(s['after' + i], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t)) return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const i = e.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + '.');
    return i;
  }
}
var de = new Up();
class $p {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, i) {
    e === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, 'install'));
    const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      a = this._notify(r, t, e, s);
    return (
      e === 'afterDestroy' &&
        (this._notify(r, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      a
    );
  }
  _notify(t, e, s, i) {
    i = i || {};
    for (const r of t) {
      const a = r.plugin,
        o = a[s],
        l = [e, i, r.options];
      if (ut(o, l, a) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    et(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config,
      i = G(s.options && s.options.plugins, {}),
      r = Xp(s);
    return i === !1 && !e ? [] : Gp(t, r, i, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      s = this._cache,
      i = (r, a) =>
        r.filter((o) => !a.some((l) => o.plugin.id === l.plugin.id));
    this._notify(i(e, s), t, 'stop'), this._notify(i(s, e), t, 'start');
  }
}
function Xp(n) {
  const t = {},
    e = [],
    s = Object.keys(de.plugins.items);
  for (let r = 0; r < s.length; r++) e.push(de.getPlugin(s[r]));
  const i = n.plugins || [];
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    e.indexOf(a) === -1 && (e.push(a), (t[a.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function Qp(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function Gp(n, { plugins: t, localIds: e }, s, i) {
  const r = [],
    a = n.getContext();
  for (const o of t) {
    const l = o.id,
      c = Qp(s[l], i);
    c !== null &&
      r.push({
        plugin: o,
        options: Kp(n.config, { plugin: o, local: e[l] }, c, a),
      });
  }
  return r;
}
function Kp(n, { plugin: t, local: e }, s, i) {
  const r = n.pluginScopeKeys(t),
    a = n.getOptionScopes(s, r);
  return (
    e && t.defaults && a.push(t.defaults),
    n.createResolver(a, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Br(n, t) {
  const e = pt.datasets[n] || {};
  return (
    ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x'
  );
}
function Jp(n, t) {
  let e = n;
  return (
    n === '_index_' ? (e = t) : n === '_value_' && (e = t === 'x' ? 'y' : 'x'),
    e
  );
}
function Zp(n, t) {
  return n === t ? '_index_' : '_value_';
}
function jo(n) {
  if (n === 'x' || n === 'y' || n === 'r') return n;
}
function tm(n) {
  if (n === 'top' || n === 'bottom') return 'x';
  if (n === 'left' || n === 'right') return 'y';
}
function zr(n, ...t) {
  if (jo(n)) return n;
  for (const e of t) {
    const s =
      e.axis || tm(e.position) || (n.length > 1 && jo(n[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function Vo(n, t, e) {
  if (e[t + 'AxisID'] === n) return { axis: t };
}
function em(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === n || s.yAxisID === n);
    if (e.length) return Vo(n, 'x', e[0]) || Vo(n, 'y', e[0]);
  }
  return {};
}
function nm(n, t) {
  const e = bn[n.type] || { scales: {} },
    s = t.scales || {},
    i = Br(n.type, t),
    r = Object.create(null);
  return (
    Object.keys(s).forEach((a) => {
      const o = s[a];
      if (!nt(o))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (o._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`,
        );
      const l = zr(a, o, em(a, n), pt.scales[o.type]),
        c = Zp(l, i),
        u = e.scales || {};
      r[a] = us(Object.create(null), [{ axis: l }, o, u[l], u[c]]);
    }),
    n.data.datasets.forEach((a) => {
      const o = a.type || n.type,
        l = a.indexAxis || Br(o, t),
        u = (bn[o] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = Jp(d, l),
          g = a[h + 'AxisID'] || h;
        (r[g] = r[g] || Object.create(null)),
          us(r[g], [{ axis: h }, s[g], u[d]]);
      });
    }),
    Object.keys(r).forEach((a) => {
      const o = r[a];
      us(o, [pt.scales[o.type], pt.scale]);
    }),
    r
  );
}
function nu(n) {
  const t = n.options || (n.options = {});
  (t.plugins = G(t.plugins, {})), (t.scales = nm(n, t));
}
function su(n) {
  return (
    (n = n || {}),
    (n.datasets = n.datasets || []),
    (n.labels = n.labels || []),
    n
  );
}
function sm(n) {
  return (n = n || {}), (n.data = su(n.data)), nu(n), n;
}
const qo = new Map(),
  iu = new Set();
function Gs(n, t) {
  let e = qo.get(n);
  return e || ((e = t()), qo.set(n, e), iu.add(e)), e;
}
const Kn = (n, t, e) => {
  const s = Je(t, e);
  s !== void 0 && n.add(s);
};
class im {
  constructor(t) {
    (this._config = sm(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = su(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), nu(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Gs(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Gs(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Gs(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      s = this.type;
    return Gs(`${s}-plugin-${e}`, () => [
      [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let i = s.get(t);
    return (!i || e) && ((i = new Map()), s.set(t, i)), i;
  }
  getOptionScopes(t, e, s) {
    const { options: i, type: r } = this,
      a = this._cachedScopes(t, s),
      o = a.get(e);
    if (o) return o;
    const l = new Set();
    e.forEach((u) => {
      t && (l.add(t), u.forEach((d) => Kn(l, t, d))),
        u.forEach((d) => Kn(l, i, d)),
        u.forEach((d) => Kn(l, bn[r] || {}, d)),
        u.forEach((d) => Kn(l, pt, d)),
        u.forEach((d) => Kn(l, Fr, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), iu.has(e) && a.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, bn[e] || {}, pt.datasets[e] || {}, { type: e }, pt, Fr];
  }
  resolveNamedOptions(t, e, s, i = ['']) {
    const r = { $shared: !0 },
      { resolver: a, subPrefixes: o } = Yo(this._resolverCache, t, i);
    let l = a;
    if (am(a, e)) {
      (r.$shared = !1), (s = Ze(s) ? s() : s);
      const c = this.createResolver(t, s, o);
      l = In(a, s, c);
    }
    for (const c of e) r[c] = l[c];
    return r;
  }
  createResolver(t, e, s = [''], i) {
    const { resolver: r } = Yo(this._resolverCache, t, s);
    return nt(e) ? In(r, e, void 0, i) : r;
  }
}
function Yo(n, t, e) {
  let s = n.get(t);
  s || ((s = new Map()), n.set(t, s));
  const i = e.join();
  let r = s.get(i);
  return (
    r ||
      ((r = {
        resolver: Sa(t, e),
        subPrefixes: e.filter((o) => !o.toLowerCase().includes('hover')),
      }),
      s.set(i, r)),
    r
  );
}
const rm = (n) => nt(n) && Object.getOwnPropertyNames(n).some((t) => Ze(n[t]));
function am(n, t) {
  const { isScriptable: e, isIndexable: s } = Fc(n);
  for (const i of t) {
    const r = e(i),
      a = s(i),
      o = (a || r) && n[i];
    if ((r && (Ze(o) || rm(o))) || (a && gt(o))) return !0;
  }
  return !1;
}
var om = '4.4.9';
const lm = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Uo(n, t) {
  return n === 'top' || n === 'bottom' || (lm.indexOf(n) === -1 && t === 'x');
}
function $o(n, t) {
  return function (e, s) {
    return e[n] === s[n] ? e[t] - s[t] : e[n] - s[n];
  };
}
function Xo(n) {
  const t = n.chart,
    e = t.options.animation;
  t.notifyPlugins('afterRender'), ut(e && e.onComplete, [n], t);
}
function cm(n) {
  const t = n.chart,
    e = t.options.animation;
  ut(e && e.onProgress, [n], t);
}
function ru(n) {
  return (
    Da() && typeof n == 'string'
      ? (n = document.getElementById(n))
      : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const ui = {},
  Qo = (n) => {
    const t = ru(n);
    return Object.values(ui)
      .filter((e) => e.canvas === t)
      .pop();
  };
function um(n, t, e) {
  const s = Object.keys(n);
  for (const i of s) {
    const r = +i;
    if (r >= t) {
      const a = n[i];
      delete n[i], (e > 0 || r > t) && (n[r + e] = a);
    }
  }
}
function dm(n, t, e, s) {
  return !e || n.type === 'mouseout' ? null : s ? t : n;
}
class Ht {
  static register(...t) {
    de.add(...t), Go();
  }
  static unregister(...t) {
    de.remove(...t), Go();
  }
  constructor(t, e) {
    const s = (this.config = new im(e)),
      i = ru(t),
      r = Qo(i);
    if (r)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          r.id +
          "' must be destroyed before the canvas with ID '" +
          r.canvas.id +
          "' can be reused.",
      );
    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
    (this.platform = new (s.platform || Op(i))()),
      this.platform.updateConfig(s);
    const o = this.platform.acquireContext(i, a.aspectRatio),
      l = o && o.canvas,
      c = l && l.height,
      u = l && l.width;
    if (
      ((this.id = ff()),
      (this.ctx = o),
      (this.canvas = l),
      (this.width = u),
      (this.height = c),
      (this._options = a),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new $p()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Ef((d) => this.update(d), a.resizeDelay || 0)),
      (this._dataChanges = []),
      (ui[this.id] = this),
      !o || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    Se.listen(this, 'complete', Xo),
      Se.listen(this, 'progress', cm),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: e },
      width: s,
      height: i,
      _aspectRatio: r,
    } = this;
    return et(t) ? (e && r ? r : i ? s / i : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return de;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive
        ? this.resize()
        : _o(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return po(this.canvas, this.ctx), this;
  }
  stop() {
    return Se.stop(this), this;
  }
  resize(t, e) {
    Se.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: e })
      : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options,
      i = this.canvas,
      r = s.maintainAspectRatio && this.aspectRatio,
      a = this.platform.getMaximumSize(i, t, e, r),
      o = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? 'resize' : 'attach';
    (this.width = a.width),
      (this.height = a.height),
      (this._aspectRatio = this.aspectRatio),
      _o(this, o, !0) &&
        (this.notifyPlugins('resize', { size: a }),
        ut(s.onResize, [this, a], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    at(e, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      e = t.scales,
      s = this.scales,
      i = Object.keys(s).reduce((a, o) => ((a[o] = !1), a), {});
    let r = [];
    e &&
      (r = r.concat(
        Object.keys(e).map((a) => {
          const o = e[a],
            l = zr(a, o),
            c = l === 'r',
            u = l === 'x';
          return {
            options: o,
            dposition: c ? 'chartArea' : u ? 'bottom' : 'left',
            dtype: c ? 'radialLinear' : u ? 'category' : 'linear',
          };
        }),
      )),
      at(r, (a) => {
        const o = a.options,
          l = o.id,
          c = zr(l, o),
          u = G(o.type, a.dtype);
        (o.position === void 0 || Uo(o.position, c) !== Uo(a.dposition)) &&
          (o.position = a.dposition),
          (i[l] = !0);
        let d = null;
        if (l in s && s[l].type === u) d = s[l];
        else {
          const h = de.getScale(u);
          (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
            (s[d.id] = d);
        }
        d.init(o, t);
      }),
      at(i, (a, o) => {
        a || delete s[o];
      }),
      at(s, (a) => {
        Rt.configure(this, a, a.options), Rt.addBox(this, a);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      e = this.data.datasets.length,
      s = t.length;
    if ((t.sort((i, r) => i.index - r.index), s > e)) {
      for (let i = e; i < s; ++i) this._destroyDatasetMeta(i);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort($o('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: e },
    } = this;
    t.length > e.length && delete this._stacks,
      t.forEach((s, i) => {
        e.filter((r) => r === s._dataset).length === 0 &&
          this._destroyDatasetMeta(i);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      e = this.data.datasets;
    let s, i;
    for (this._removeUnreferencedMetasets(), s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      let a = this.getDatasetMeta(s);
      const o = r.type || this.config.type;
      if (
        (a.type &&
          a.type !== o &&
          (this._destroyDatasetMeta(s), (a = this.getDatasetMeta(s))),
        (a.type = o),
        (a.indexAxis = r.indexAxis || Br(o, this.options)),
        (a.order = r.order || 0),
        (a.index = s),
        (a.label = '' + r.label),
        (a.visible = this.isDatasetVisible(s)),
        a.controller)
      )
        a.controller.updateIndex(s), a.controller.linkScales();
      else {
        const l = de.getController(o),
          { datasetElementType: c, dataElementType: u } = pt.datasets[o];
        Object.assign(l, {
          dataElementType: de.getElement(u),
          datasetElementType: c && de.getElement(c),
        }),
          (a.controller = new l(this, s)),
          t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    at(
      this.data.datasets,
      (t, e) => {
        this.getDatasetMeta(e).controller.reset();
      },
      this,
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins('reset');
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = (this._options = e.createResolver(
        e.chartOptionScopes(),
        this.getContext(),
      )),
      i = (this._animationsDisabled = !s.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let a = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: d } = this.getDatasetMeta(c),
        h = !i && r.indexOf(d) === -1;
      d.buildOrUpdateElements(h), (a = Math.max(+d.getMaxOverflow(), a));
    }
    (a = this._minPadding = s.layout.autoPadding ? a : 0),
      this._updateLayout(a),
      i ||
        at(r, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort($o('z', '_idx'));
    const { _active: o, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : o.length && this._updateHoverStyles(o, o, !0),
      this.render();
  }
  _updateScales() {
    at(this.scales, (t) => {
      Rt.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      s = new Set(t.events);
    (!ro(e, s) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: r } of e) {
      const a = s === '_removeElements' ? -r : r;
      um(t, i, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const e = this.data.datasets.length,
      s = (r) =>
        new Set(
          t
            .filter((a) => a[0] === r)
            .map((a, o) => o + ',' + a.splice(1).join(',')),
        ),
      i = s(0);
    for (let r = 1; r < e; r++) if (!ro(i, s(r))) return;
    return Array.from(i)
      .map((r) => r.split(','))
      .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
    Rt.update(this, this.width, this.height, t);
    const e = this.chartArea,
      s = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      at(
        this.boxes,
        (i) => {
          (s && i.position === 'chartArea') ||
            (i.configure && i.configure(), this._layers.push(...i._layers()));
        },
        this,
      ),
      this._layers.forEach((i, r) => {
        i._idx = r;
      }),
      this.notifyPlugins('afterLayout');
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins('beforeDatasetsUpdate', {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, Ze(t) ? t({ datasetIndex: e }) : t);
      this.notifyPlugins('afterDatasetsUpdate', { mode: t });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t),
      i = { meta: s, index: t, mode: e, cancelable: !0 };
    this.notifyPlugins('beforeDatasetUpdate', i) !== !1 &&
      (s.controller._update(e),
      (i.cancelable = !1),
      this.notifyPlugins('afterDatasetUpdate', i));
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (Se.has(this)
        ? this.attached && !Se.running(this) && Se.start(this)
        : (this.draw(), Xo({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: i } = this._resizeBeforeDraw;
      (this._resizeBeforeDraw = null), this._resize(s, i);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets,
      s = [];
    let i, r;
    for (i = 0, r = e.length; i < r; ++i) {
      const a = e[i];
      (!t || a.visible) && s.push(a);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(t) {
    const e = this.ctx,
      s = { meta: t, index: t.index, cancelable: !0 },
      i = Uc(this, t);
    this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
      (i && Ui(e, i),
      t.controller.draw(),
      i && $i(e),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', s));
  }
  isPointInArea(t) {
    return Ee(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, i) {
    const r = lp.modes[e];
    return typeof r == 'function' ? r(this, t, s, i) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t],
      s = this._metasets;
    let i = s.filter((r) => r && r._dataset === e).pop();
    return (
      i ||
        ((i = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (e && e.order) || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1,
        }),
        s.push(i)),
      i
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = en(null, { chart: this, type: 'chart' }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e) return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == 'boolean' ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const i = s ? 'show' : 'hide',
      r = this.getDatasetMeta(t),
      a = r.controller._resolveAnimations(void 0, i);
    xs(e)
      ? ((r.data[e].hidden = !s), this.update())
      : (this.setDatasetVisibility(t, s),
        a.update(r, { visible: s }),
        this.update((o) => (o.datasetIndex === t ? i : void 0)));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (
      this.stop(), Se.remove(this), t = 0, e = this.data.datasets.length;
      t < e;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const { canvas: t, ctx: e } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        po(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete ui[this.id],
      this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      e = this.platform,
      s = (r, a) => {
        e.addEventListener(this, r, a), (t[r] = a);
      },
      i = (r, a, o) => {
        (r.offsetX = a), (r.offsetY = o), this._eventHandler(r);
      };
    at(this.options.events, (r) => s(r, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      e = this.platform,
      s = (l, c) => {
        e.addEventListener(this, l, c), (t[l] = c);
      },
      i = (l, c) => {
        t[l] && (e.removeEventListener(this, l, c), delete t[l]);
      },
      r = (l, c) => {
        this.canvas && this.resize(l, c);
      };
    let a;
    const o = () => {
      i('attach', o),
        (this.attached = !0),
        this.resize(),
        s('resize', r),
        s('detach', a);
    };
    (a = () => {
      (this.attached = !1),
        i('resize', r),
        this._stop(),
        this._resize(0, 0),
        s('attach', o);
    }),
      e.isAttached(this.canvas) ? o() : a();
  }
  unbindEvents() {
    at(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      at(this._responsiveListeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, e, s) {
    const i = s ? 'set' : 'remove';
    let r, a, o, l;
    for (
      e === 'dataset' &&
        ((r = this.getDatasetMeta(t[0].datasetIndex)),
        r.controller['_' + i + 'DatasetHoverStyle']()),
        o = 0,
        l = t.length;
      o < l;
      ++o
    ) {
      a = t[o];
      const c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[i + 'HoverStyle'](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [],
      s = t.map(({ datasetIndex: r, index: a }) => {
        const o = this.getDatasetMeta(r);
        if (!o) throw new Error('No dataset found at index ' + r);
        return { datasetIndex: r, element: o.data[a], index: a };
      });
    !Mi(s, e) &&
      ((this._active = s),
      (this._lastEvent = null),
      this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const i = this.options.hover,
      r = (l, c) =>
        l.filter(
          (u) =>
            !c.some(
              (d) => u.datasetIndex === d.datasetIndex && u.index === d.index,
            ),
        ),
      a = r(e, t),
      o = s ? t : r(t, e);
    a.length && this.updateHoverStyle(a, i.mode, !1),
      o.length && i.mode && this.updateHoverStyle(o, i.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
        event: t,
        replay: e,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      i = (a) =>
        (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins('beforeEvent', s, i) === !1) return;
    const r = this._handleEvent(t, e, s.inChartArea);
    return (
      (s.cancelable = !1),
      this.notifyPlugins('afterEvent', s, i),
      (r || s.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, e, s) {
    const { _active: i = [], options: r } = this,
      a = e,
      o = this._getActiveElements(t, i, s, a),
      l = vf(t),
      c = dm(t, this._lastEvent, s, l);
    s &&
      ((this._lastEvent = null),
      ut(r.onHover, [t, o, this], this),
      l && ut(r.onClick, [t, o, this], this));
    const u = !Mi(o, i);
    return (
      (u || e) && ((this._active = o), this._updateHoverStyles(o, i, e)),
      (this._lastEvent = c),
      u
    );
  }
  _getActiveElements(t, e, s, i) {
    if (t.type === 'mouseout') return [];
    if (!s) return e;
    const r = this.options.hover;
    return this.getElementsAtEventForMode(t, r.mode, r, i);
  }
}
M(Ht, 'defaults', pt),
  M(Ht, 'instances', ui),
  M(Ht, 'overrides', bn),
  M(Ht, 'registry', de),
  M(Ht, 'version', om),
  M(Ht, 'getChart', Qo);
function Go() {
  return at(Ht.instances, (n) => n._plugins.invalidate());
}
function hm(n, t, e) {
  const {
    startAngle: s,
    pixelMargin: i,
    x: r,
    y: a,
    outerRadius: o,
    innerRadius: l,
  } = t;
  let c = i / o;
  n.beginPath(),
    n.arc(r, a, o, s - c, e + c),
    l > i
      ? ((c = i / l), n.arc(r, a, l, e + c, s - c, !0))
      : n.arc(r, a, i, e + kt, s - kt),
    n.closePath(),
    n.clip();
}
function fm(n) {
  return Ma(n, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function gm(n, t, e, s) {
  const i = fm(n.options.borderRadius),
    r = (e - t) / 2,
    a = Math.min(r, (s * t) / 2),
    o = (l) => {
      const c = ((e - Math.min(r, l)) * s) / 2;
      return Ot(l, 0, Math.min(r, c));
    };
  return {
    outerStart: o(i.outerStart),
    outerEnd: o(i.outerEnd),
    innerStart: Ot(i.innerStart, 0, a),
    innerEnd: Ot(i.innerEnd, 0, a),
  };
}
function Dn(n, t, e, s) {
  return { x: e + n * Math.cos(t), y: s + n * Math.sin(t) };
}
function Ei(n, t, e, s, i, r) {
  const { x: a, y: o, startAngle: l, pixelMargin: c, innerRadius: u } = t,
    d = Math.max(t.outerRadius + s + e - c, 0),
    h = u > 0 ? u + s + e + c : 0;
  let g = 0;
  const f = i - l;
  if (s) {
    const U = u > 0 ? u - s : 0,
      q = d > 0 ? d - s : 0,
      K = (U + q) / 2,
      Y = K !== 0 ? (f * K) / (K + s) : f;
    g = (f - Y) / 2;
  }
  const p = Math.max(0.001, f * d - e / ft) / d,
    m = (f - p) / 2,
    b = l + m + g,
    _ = i - m - g,
    {
      outerStart: x,
      outerEnd: w,
      innerStart: y,
      innerEnd: D,
    } = gm(t, h, d, _ - b),
    T = d - x,
    k = d - w,
    O = b + x / T,
    L = _ - w / k,
    R = h + y,
    E = h + D,
    W = b + y / R,
    Z = _ - D / E;
  if ((n.beginPath(), r)) {
    const U = (O + L) / 2;
    if ((n.arc(a, o, d, O, U), n.arc(a, o, d, U, L), w > 0)) {
      const I = Dn(k, L, a, o);
      n.arc(I.x, I.y, w, L, _ + kt);
    }
    const q = Dn(E, _, a, o);
    if ((n.lineTo(q.x, q.y), D > 0)) {
      const I = Dn(E, Z, a, o);
      n.arc(I.x, I.y, D, _ + kt, Z + Math.PI);
    }
    const K = (_ - D / h + (b + y / h)) / 2;
    if (
      (n.arc(a, o, h, _ - D / h, K, !0),
      n.arc(a, o, h, K, b + y / h, !0),
      y > 0)
    ) {
      const I = Dn(R, W, a, o);
      n.arc(I.x, I.y, y, W + Math.PI, b - kt);
    }
    const Y = Dn(T, b, a, o);
    if ((n.lineTo(Y.x, Y.y), x > 0)) {
      const I = Dn(T, O, a, o);
      n.arc(I.x, I.y, x, b - kt, O);
    }
  } else {
    n.moveTo(a, o);
    const U = Math.cos(O) * d + a,
      q = Math.sin(O) * d + o;
    n.lineTo(U, q);
    const K = Math.cos(L) * d + a,
      Y = Math.sin(L) * d + o;
    n.lineTo(K, Y);
  }
  n.closePath();
}
function pm(n, t, e, s, i) {
  const { fullCircles: r, startAngle: a, circumference: o } = t;
  let l = t.endAngle;
  if (r) {
    Ei(n, t, e, s, l, i);
    for (let c = 0; c < r; ++c) n.fill();
    isNaN(o) || (l = a + (o % ht || ht));
  }
  return Ei(n, t, e, s, l, i), n.fill(), l;
}
function mm(n, t, e, s, i) {
  const { fullCircles: r, startAngle: a, circumference: o, options: l } = t,
    {
      borderWidth: c,
      borderJoinStyle: u,
      borderDash: d,
      borderDashOffset: h,
    } = l,
    g = l.borderAlign === 'inner';
  if (!c) return;
  n.setLineDash(d || []),
    (n.lineDashOffset = h),
    g
      ? ((n.lineWidth = c * 2), (n.lineJoin = u || 'round'))
      : ((n.lineWidth = c), (n.lineJoin = u || 'bevel'));
  let f = t.endAngle;
  if (r) {
    Ei(n, t, e, s, f, i);
    for (let p = 0; p < r; ++p) n.stroke();
    isNaN(o) || (f = a + (o % ht || ht));
  }
  g && hm(n, t, f), r || (Ei(n, t, e, s, f, i), n.stroke());
}
class as extends Le {
  constructor(e) {
    super();
    M(this, 'circumference');
    M(this, 'endAngle');
    M(this, 'fullCircles');
    M(this, 'innerRadius');
    M(this, 'outerRadius');
    M(this, 'pixelMargin');
    M(this, 'startAngle');
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      e && Object.assign(this, e);
  }
  inRange(e, s, i) {
    const r = this.getProps(['x', 'y'], i),
      { angle: a, distance: o } = Sc(r, { x: e, y: s }),
      {
        startAngle: l,
        endAngle: c,
        innerRadius: u,
        outerRadius: d,
        circumference: h,
      } = this.getProps(
        [
          'startAngle',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'circumference',
        ],
        i,
      ),
      g = (this.options.spacing + this.options.borderWidth) / 2,
      f = G(h, c - l),
      p = ws(a, l, c) && l !== c,
      m = f >= ht || p,
      b = De(o, u + g, d + g);
    return m && b;
  }
  getCenterPoint(e) {
    const {
        x: s,
        y: i,
        startAngle: r,
        endAngle: a,
        innerRadius: o,
        outerRadius: l,
      } = this.getProps(
        ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
        e,
      ),
      { offset: c, spacing: u } = this.options,
      d = (r + a) / 2,
      h = (o + l + u + c) / 2;
    return { x: s + Math.cos(d) * h, y: i + Math.sin(d) * h };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: s, circumference: i } = this,
      r = (s.offset || 0) / 4,
      a = (s.spacing || 0) / 2,
      o = s.circular;
    if (
      ((this.pixelMargin = s.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = i > ht ? Math.floor(i / ht) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * r, Math.sin(l) * r);
    const c = 1 - Math.sin(Math.min(ft, i || 0)),
      u = r * c;
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      pm(e, this, u, a, o),
      mm(e, this, u, a, o),
      e.restore();
  }
}
M(as, 'id', 'arc'),
  M(as, 'defaults', {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  M(as, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  M(as, 'descriptors', {
    _scriptable: !0,
    _indexable: (e) => e !== 'borderDash',
  });
function au(n, t, e = t) {
  (n.lineCap = G(e.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(G(e.borderDash, t.borderDash)),
    (n.lineDashOffset = G(e.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = G(e.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = G(e.borderWidth, t.borderWidth)),
    (n.strokeStyle = G(e.borderColor, t.borderColor));
}
function bm(n, t, e) {
  n.lineTo(e.x, e.y);
}
function _m(n) {
  return n.stepped
    ? jf
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? Vf
      : bm;
}
function ou(n, t, e = {}) {
  const s = n.length,
    { start: i = 0, end: r = s - 1 } = e,
    { start: a, end: o } = t,
    l = Math.max(i, a),
    c = Math.min(r, o),
    u = (i < a && r < a) || (i > o && r > o);
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? s + c - l : c - l,
  };
}
function vm(n, t, e, s) {
  const { points: i, options: r } = t,
    { count: a, start: o, loop: l, ilen: c } = ou(i, e, s),
    u = _m(r);
  let { move: d = !0, reverse: h } = s || {},
    g,
    f,
    p;
  for (g = 0; g <= c; ++g)
    (f = i[(o + (h ? c - g : g)) % a]),
      !f.skip &&
        (d ? (n.moveTo(f.x, f.y), (d = !1)) : u(n, p, f, h, r.stepped),
        (p = f));
  return l && ((f = i[(o + (h ? c : 0)) % a]), u(n, p, f, h, r.stepped)), !!l;
}
function ym(n, t, e, s) {
  const i = t.points,
    { count: r, start: a, ilen: o } = ou(i, e, s),
    { move: l = !0, reverse: c } = s || {};
  let u = 0,
    d = 0,
    h,
    g,
    f,
    p,
    m,
    b;
  const _ = (w) => (a + (c ? o - w : w)) % r,
    x = () => {
      p !== m && (n.lineTo(u, m), n.lineTo(u, p), n.lineTo(u, b));
    };
  for (l && ((g = i[_(0)]), n.moveTo(g.x, g.y)), h = 0; h <= o; ++h) {
    if (((g = i[_(h)]), g.skip)) continue;
    const w = g.x,
      y = g.y,
      D = w | 0;
    D === f
      ? (y < p ? (p = y) : y > m && (m = y), (u = (d * u + w) / ++d))
      : (x(), n.lineTo(w, y), (f = D), (d = 0), (p = m = y)),
      (b = y);
  }
  x();
}
function Wr(n) {
  const t = n.options,
    e = t.borderDash && t.borderDash.length;
  return !n._decimated &&
    !n._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !e
    ? ym
    : vm;
}
function xm(n) {
  return n.stepped
    ? xg
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? wg
      : cn;
}
function wm(n, t, e, s) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, e, s) && i.closePath()),
    au(n, t.options),
    n.stroke(i);
}
function km(n, t, e, s) {
  const { segments: i, options: r } = t,
    a = Wr(t);
  for (const o of i)
    au(n, r, o.style),
      n.beginPath(),
      a(n, t, o, { start: e, end: e + s - 1 }) && n.closePath(),
      n.stroke();
}
const Mm = typeof Path2D == 'function';
function Sm(n, t, e, s) {
  Mm && !t.options.segment ? wm(n, t, e, s) : km(n, t, e, s);
}
class Ue extends Le {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === 'monotone') &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      fg(this._points, s, t, i, e), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Dg(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options,
      i = t[e],
      r = this.points,
      a = Yc(this, { property: e, start: i, end: i });
    if (!a.length) return;
    const o = [],
      l = xm(s);
    let c, u;
    for (c = 0, u = a.length; c < u; ++c) {
      const { start: d, end: h } = a[c],
        g = r[d],
        f = r[h];
      if (g === f) {
        o.push(g);
        continue;
      }
      const p = Math.abs((i - g[e]) / (f[e] - g[e])),
        m = l(g, f, p, s.stepped);
      (m[e] = t[e]), o.push(m);
    }
    return o.length === 1 ? o[0] : o;
  }
  pathSegment(t, e, s) {
    return Wr(this)(t, this, e, s);
  }
  path(t, e, s) {
    const i = this.segments,
      r = Wr(this);
    let a = this._loop;
    (e = e || 0), (s = s || this.points.length - e);
    for (const o of i) a &= r(t, this, o, { start: e, end: e + s - 1 });
    return !!a;
  }
  draw(t, e, s, i) {
    const r = this.options || {};
    (this.points || []).length &&
      r.borderWidth &&
      (t.save(), Sm(t, this, s, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
M(Ue, 'id', 'line'),
  M(Ue, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  M(Ue, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  }),
  M(Ue, 'descriptors', {
    _scriptable: !0,
    _indexable: (t) => t !== 'borderDash' && t !== 'fill',
  });
function Ko(n, t, e, s) {
  const i = n.options,
    { [e]: r } = n.getProps([e], s);
  return Math.abs(t - r) < i.radius + i.hitRadius;
}
class di extends Le {
  constructor(e) {
    super();
    M(this, 'parsed');
    M(this, 'skip');
    M(this, 'stop');
    (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e);
  }
  inRange(e, s, i) {
    const r = this.options,
      { x: a, y: o } = this.getProps(['x', 'y'], i);
    return (
      Math.pow(e - a, 2) + Math.pow(s - o, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(e, s) {
    return Ko(this, e, 'x', s);
  }
  inYRange(e, s) {
    return Ko(this, e, 'y', s);
  }
  getCenterPoint(e) {
    const { x: s, y: i } = this.getProps(['x', 'y'], e);
    return { x: s, y: i };
  }
  size(e) {
    e = e || this.options || {};
    let s = e.radius || 0;
    s = Math.max(s, (s && e.hoverRadius) || 0);
    const i = (s && e.borderWidth) || 0;
    return (s + i) * 2;
  }
  draw(e, s) {
    const i = this.options;
    this.skip ||
      i.radius < 0.1 ||
      !Ee(this, s, this.size(i) / 2) ||
      ((e.strokeStyle = i.borderColor),
      (e.lineWidth = i.borderWidth),
      (e.fillStyle = i.backgroundColor),
      Ir(e, i, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
M(di, 'id', 'point'),
  M(di, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  M(di, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
function lu(n, t) {
  const {
    x: e,
    y: s,
    base: i,
    width: r,
    height: a,
  } = n.getProps(['x', 'y', 'base', 'width', 'height'], t);
  let o, l, c, u, d;
  return (
    n.horizontal
      ? ((d = a / 2),
        (o = Math.min(e, i)),
        (l = Math.max(e, i)),
        (c = s - d),
        (u = s + d))
      : ((d = r / 2),
        (o = e - d),
        (l = e + d),
        (c = Math.min(s, i)),
        (u = Math.max(s, i))),
    { left: o, top: c, right: l, bottom: u }
  );
}
function $e(n, t, e, s) {
  return n ? 0 : Ot(t, e, s);
}
function Pm(n, t, e) {
  const s = n.options.borderWidth,
    i = n.borderSkipped,
    r = Lc(s);
  return {
    t: $e(i.top, r.top, 0, e),
    r: $e(i.right, r.right, 0, t),
    b: $e(i.bottom, r.bottom, 0, e),
    l: $e(i.left, r.left, 0, t),
  };
}
function Tm(n, t, e) {
  const { enableBorderRadius: s } = n.getProps(['enableBorderRadius']),
    i = n.options.borderRadius,
    r = gn(i),
    a = Math.min(t, e),
    o = n.borderSkipped,
    l = s || nt(i);
  return {
    topLeft: $e(!l || o.top || o.left, r.topLeft, 0, a),
    topRight: $e(!l || o.top || o.right, r.topRight, 0, a),
    bottomLeft: $e(!l || o.bottom || o.left, r.bottomLeft, 0, a),
    bottomRight: $e(!l || o.bottom || o.right, r.bottomRight, 0, a),
  };
}
function Dm(n) {
  const t = lu(n),
    e = t.right - t.left,
    s = t.bottom - t.top,
    i = Pm(n, e / 2, s / 2),
    r = Tm(n, e / 2, s / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: s, radius: r },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: e - i.l - i.r,
      h: s - i.t - i.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, r.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(i.b, i.r)),
      },
    },
  };
}
function _r(n, t, e, s) {
  const i = t === null,
    r = e === null,
    o = n && !(i && r) && lu(n, s);
  return o && (i || De(t, o.left, o.right)) && (r || De(e, o.top, o.bottom));
}
function Om(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Em(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function vr(n, t, e = {}) {
  const s = n.x !== e.x ? -t : 0,
    i = n.y !== e.y ? -t : 0,
    r = (n.x + n.w !== e.x + e.w ? t : 0) - s,
    a = (n.y + n.h !== e.y + e.h ? t : 0) - i;
  return { x: n.x + s, y: n.y + i, w: n.w + r, h: n.h + a, radius: n.radius };
}
class hi extends Le {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: s, backgroundColor: i },
      } = this,
      { inner: r, outer: a } = Dm(this),
      o = Om(a.radius) ? ks : Em;
    t.save(),
      (a.w !== r.w || a.h !== r.h) &&
        (t.beginPath(),
        o(t, vr(a, e, r)),
        t.clip(),
        o(t, vr(r, -e, a)),
        (t.fillStyle = s),
        t.fill('evenodd')),
      t.beginPath(),
      o(t, vr(r, e)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, e, s) {
    return _r(this, t, e, s);
  }
  inXRange(t, e) {
    return _r(this, t, null, e);
  }
  inYRange(t, e) {
    return _r(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: s,
      base: i,
      horizontal: r,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
    return { x: r ? (e + i) / 2 : e, y: r ? s : (s + i) / 2 };
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2;
  }
}
M(hi, 'id', 'bar'),
  M(hi, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  M(hi, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
var Cm = Object.freeze({
  __proto__: null,
  ArcElement: as,
  BarElement: hi,
  LineElement: Ue,
  PointElement: di,
});
const Hr = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  Jo = Hr.map((n) => n.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function cu(n) {
  return Hr[n % Hr.length];
}
function uu(n) {
  return Jo[n % Jo.length];
}
function Am(n, t) {
  return (n.borderColor = cu(t)), (n.backgroundColor = uu(t)), ++t;
}
function Rm(n, t) {
  return (n.backgroundColor = n.data.map(() => cu(t++))), t;
}
function Lm(n, t) {
  return (n.backgroundColor = n.data.map(() => uu(t++))), t;
}
function Fm(n) {
  let t = 0;
  return (e, s) => {
    const i = n.getDatasetMeta(s).controller;
    i instanceof dn
      ? (t = Rm(e, t))
      : i instanceof gs
        ? (t = Lm(e, t))
        : i && (t = Am(e, t));
  };
}
function Zo(n) {
  let t;
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
  return !1;
}
function Im(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function Nm() {
  return (
    pt.borderColor !== 'rgba(0,0,0,0.1)' ||
    pt.backgroundColor !== 'rgba(0,0,0,0.1)'
  );
}
var Bm = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(n, t, e) {
    if (!e.enabled) return;
    const {
        data: { datasets: s },
        options: i,
      } = n.config,
      { elements: r } = i,
      a = Zo(s) || Im(i) || (r && Zo(r)) || Nm();
    if (!e.forceOverride && a) return;
    const o = Fm(n);
    s.forEach(o);
  },
};
function zm(n, t, e, s, i) {
  const r = i.samples || s;
  if (r >= e) return n.slice(t, t + e);
  const a = [],
    o = (e - 2) / (r - 2);
  let l = 0;
  const c = t + e - 1;
  let u = t,
    d,
    h,
    g,
    f,
    p;
  for (a[l++] = n[u], d = 0; d < r - 2; d++) {
    let m = 0,
      b = 0,
      _;
    const x = Math.floor((d + 1) * o) + 1 + t,
      w = Math.min(Math.floor((d + 2) * o) + 1, e) + t,
      y = w - x;
    for (_ = x; _ < w; _++) (m += n[_].x), (b += n[_].y);
    (m /= y), (b /= y);
    const D = Math.floor(d * o) + 1 + t,
      T = Math.min(Math.floor((d + 1) * o) + 1, e) + t,
      { x: k, y: O } = n[u];
    for (g = f = -1, _ = D; _ < T; _++)
      (f = 0.5 * Math.abs((k - m) * (n[_].y - O) - (k - n[_].x) * (b - O))),
        f > g && ((g = f), (h = n[_]), (p = _));
    (a[l++] = h), (u = p);
  }
  return (a[l++] = n[c]), a;
}
function Wm(n, t, e, s) {
  let i = 0,
    r = 0,
    a,
    o,
    l,
    c,
    u,
    d,
    h,
    g,
    f,
    p;
  const m = [],
    b = t + e - 1,
    _ = n[t].x,
    w = n[b].x - _;
  for (a = t; a < t + e; ++a) {
    (o = n[a]), (l = ((o.x - _) / w) * s), (c = o.y);
    const y = l | 0;
    if (y === u)
      c < f ? ((f = c), (d = a)) : c > p && ((p = c), (h = a)),
        (i = (r * i + o.x) / ++r);
    else {
      const D = a - 1;
      if (!et(d) && !et(h)) {
        const T = Math.min(d, h),
          k = Math.max(d, h);
        T !== g && T !== D && m.push({ ...n[T], x: i }),
          k !== g && k !== D && m.push({ ...n[k], x: i });
      }
      a > 0 && D !== g && m.push(n[D]),
        m.push(o),
        (u = y),
        (r = 0),
        (f = p = c),
        (d = h = g = a);
    }
  }
  return m;
}
function du(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated,
      delete n._data,
      Object.defineProperty(n, 'data', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      });
  }
}
function tl(n) {
  n.data.datasets.forEach((t) => {
    du(t);
  });
}
function Hm(n, t) {
  const e = t.length;
  let s = 0,
    i;
  const { iScale: r } = n,
    { min: a, max: o, minDefined: l, maxDefined: c } = r.getUserBounds();
  return (
    l && (s = Ot(Oe(t, r.axis, a).lo, 0, e - 1)),
    c ? (i = Ot(Oe(t, r.axis, o).hi + 1, s, e) - s) : (i = e - s),
    { start: s, count: i }
  );
}
var jm = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      tl(n);
      return;
    }
    const s = n.width;
    n.data.datasets.forEach((i, r) => {
      const { _data: a, indexAxis: o } = i,
        l = n.getDatasetMeta(r),
        c = a || i.data;
      if (
        is([o, n.options.indexAxis]) === 'y' ||
        !l.controller.supportsDecimation
      )
        return;
      const u = n.scales[l.xAxisID];
      if ((u.type !== 'linear' && u.type !== 'time') || n.options.parsing)
        return;
      let { start: d, count: h } = Hm(l, c);
      const g = e.threshold || 4 * s;
      if (h <= g) {
        du(i);
        return;
      }
      et(a) &&
        ((i._data = c),
        delete i.data,
        Object.defineProperty(i, 'data', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (p) {
            this._data = p;
          },
        }));
      let f;
      switch (e.algorithm) {
        case 'lttb':
          f = zm(c, d, h, s, e);
          break;
        case 'min-max':
          f = Wm(c, d, h, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      i._decimated = f;
    });
  },
  destroy(n) {
    tl(n);
  },
};
function Vm(n, t, e) {
  const s = n.segments,
    i = n.points,
    r = t.points,
    a = [];
  for (const o of s) {
    let { start: l, end: c } = o;
    c = Ca(l, c, i);
    const u = jr(e, i[l], i[c], o.loop);
    if (!t.segments) {
      a.push({ source: o, target: u, start: i[l], end: i[c] });
      continue;
    }
    const d = Yc(t, u);
    for (const h of d) {
      const g = jr(e, r[h.start], r[h.end], h.loop),
        f = qc(o, i, g);
      for (const p of f)
        a.push({
          source: p,
          target: h,
          start: { [e]: el(u, g, 'start', Math.max) },
          end: { [e]: el(u, g, 'end', Math.min) },
        });
    }
  }
  return a;
}
function jr(n, t, e, s) {
  if (s) return;
  let i = t[n],
    r = e[n];
  return (
    n === 'angle' && ((i = Xt(i)), (r = Xt(r))),
    { property: n, start: i, end: r }
  );
}
function qm(n, t) {
  const { x: e = null, y: s = null } = n || {},
    i = t.points,
    r = [];
  return (
    t.segments.forEach(({ start: a, end: o }) => {
      o = Ca(a, o, i);
      const l = i[a],
        c = i[o];
      s !== null
        ? (r.push({ x: l.x, y: s }), r.push({ x: c.x, y: s }))
        : e !== null && (r.push({ x: e, y: l.y }), r.push({ x: e, y: c.y }));
    }),
    r
  );
}
function Ca(n, t, e) {
  for (; t > n; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return t;
}
function el(n, t, e, s) {
  return n && t ? s(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function hu(n, t) {
  let e = [],
    s = !1;
  return (
    gt(n) ? ((s = !0), (e = n)) : (e = qm(n, t)),
    e.length
      ? new Ue({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s })
      : null
  );
}
function nl(n) {
  return n && n.fill !== !1;
}
function Ym(n, t, e) {
  let i = n[t].fill;
  const r = [t];
  let a;
  if (!e) return i;
  for (; i !== !1 && r.indexOf(i) === -1; ) {
    if (!vt(i)) return i;
    if (((a = n[i]), !a)) return !1;
    if (a.visible) return i;
    r.push(i), (i = a.fill);
  }
  return !1;
}
function Um(n, t, e) {
  const s = Gm(n);
  if (nt(s)) return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return vt(i) && Math.floor(i) === i
    ? $m(s[0], t, i, e)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
}
function $m(n, t, e, s) {
  return (
    (n === '-' || n === '+') && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
  );
}
function Xm(n, t) {
  let e = null;
  return (
    n === 'start'
      ? (e = t.bottom)
      : n === 'end'
        ? (e = t.top)
        : nt(n)
          ? (e = t.getPixelForValue(n.value))
          : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function Qm(n, t, e) {
  let s;
  return (
    n === 'start'
      ? (s = e)
      : n === 'end'
        ? (s = t.options.reverse ? t.min : t.max)
        : nt(n)
          ? (s = n.value)
          : (s = t.getBaseValue()),
    s
  );
}
function Gm(n) {
  const t = n.options,
    e = t.fill;
  let s = G(e && e.target, e);
  return (
    s === void 0 && (s = !!t.backgroundColor),
    s === !1 || s === null ? !1 : s === !0 ? 'origin' : s
  );
}
function Km(n) {
  const { scale: t, index: e, line: s } = n,
    i = [],
    r = s.segments,
    a = s.points,
    o = Jm(t, e);
  o.push(hu({ x: null, y: t.bottom }, s));
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    for (let u = c.start; u <= c.end; u++) Zm(i, a[u], o);
  }
  return new Ue({ points: i, options: {} });
}
function Jm(n, t) {
  const e = [],
    s = n.getMatchingVisibleMetas('line');
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (r.index === t) break;
    r.hidden || e.unshift(r.dataset);
  }
  return e;
}
function Zm(n, t, e) {
  const s = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i],
      { first: a, last: o, point: l } = tb(r, t, 'x');
    if (!(!l || (a && o))) {
      if (a) s.unshift(l);
      else if ((n.push(l), !o)) break;
    }
  }
  n.push(...s);
}
function tb(n, t, e) {
  const s = n.interpolate(t, e);
  if (!s) return {};
  const i = s[e],
    r = n.segments,
    a = n.points;
  let o = !1,
    l = !1;
  for (let c = 0; c < r.length; c++) {
    const u = r[c],
      d = a[u.start][e],
      h = a[u.end][e];
    if (De(i, d, h)) {
      (o = i === d), (l = i === h);
      break;
    }
  }
  return { first: o, last: l, point: s };
}
class fu {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, s) {
    const { x: i, y: r, radius: a } = this;
    return (
      (e = e || { start: 0, end: ht }),
      t.arc(i, r, a, e.end, e.start, !0),
      !s.bounds
    );
  }
  interpolate(t) {
    const { x: e, y: s, radius: i } = this,
      r = t.angle;
    return { x: e + Math.cos(r) * i, y: s + Math.sin(r) * i, angle: r };
  }
}
function eb(n) {
  const { chart: t, fill: e, line: s } = n;
  if (vt(e)) return nb(t, e);
  if (e === 'stack') return Km(n);
  if (e === 'shape') return !0;
  const i = sb(n);
  return i instanceof fu ? i : hu(i, s);
}
function nb(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function sb(n) {
  return (n.scale || {}).getPointPositionForValue ? rb(n) : ib(n);
}
function ib(n) {
  const { scale: t = {}, fill: e } = n,
    s = Xm(e, t);
  if (vt(s)) {
    const i = t.isHorizontal();
    return { x: i ? s : null, y: i ? null : s };
  }
  return null;
}
function rb(n) {
  const { scale: t, fill: e } = n,
    s = t.options,
    i = t.getLabels().length,
    r = s.reverse ? t.max : t.min,
    a = Qm(e, t, r),
    o = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, r);
    return new fu({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a),
    });
  }
  for (let l = 0; l < i; ++l) o.push(t.getPointPositionForValue(l, a));
  return o;
}
function yr(n, t, e) {
  const s = eb(t),
    { chart: i, index: r, line: a, scale: o, axis: l } = t,
    c = a.options,
    u = c.fill,
    d = c.backgroundColor,
    { above: h = d, below: g = d } = u || {},
    f = i.getDatasetMeta(r),
    p = Uc(i, f);
  s &&
    a.points.length &&
    (Ui(n, e),
    ab(n, {
      line: a,
      target: s,
      above: h,
      below: g,
      area: e,
      scale: o,
      axis: l,
      clip: p,
    }),
    $i(n));
}
function ab(n, t) {
  const {
      line: e,
      target: s,
      above: i,
      below: r,
      area: a,
      scale: o,
      clip: l,
    } = t,
    c = e._loop ? 'angle' : t.axis;
  n.save(),
    c === 'x' &&
      r !== i &&
      (sl(n, s, a.top),
      il(n, { line: e, target: s, color: i, scale: o, property: c, clip: l }),
      n.restore(),
      n.save(),
      sl(n, s, a.bottom)),
    il(n, { line: e, target: s, color: r, scale: o, property: c, clip: l }),
    n.restore();
}
function sl(n, t, e) {
  const { segments: s, points: i } = t;
  let r = !0,
    a = !1;
  n.beginPath();
  for (const o of s) {
    const { start: l, end: c } = o,
      u = i[l],
      d = i[Ca(l, c, i)];
    r ? (n.moveTo(u.x, u.y), (r = !1)) : (n.lineTo(u.x, e), n.lineTo(u.x, u.y)),
      (a = !!t.pathSegment(n, o, { move: a })),
      a ? n.closePath() : n.lineTo(d.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function il(n, t) {
  const { line: e, target: s, property: i, color: r, scale: a, clip: o } = t,
    l = Vm(e, s, i);
  for (const { source: c, target: u, start: d, end: h } of l) {
    const { style: { backgroundColor: g = r } = {} } = c,
      f = s !== !0;
    n.save(), (n.fillStyle = g), ob(n, a, o, f && jr(i, d, h)), n.beginPath();
    const p = !!e.pathSegment(n, c);
    let m;
    if (f) {
      p ? n.closePath() : rl(n, s, h, i);
      const b = !!s.pathSegment(n, u, { move: p, reverse: !0 });
      (m = p && b), m || rl(n, s, d, i);
    }
    n.closePath(), n.fill(m ? 'evenodd' : 'nonzero'), n.restore();
  }
}
function ob(n, t, e, s) {
  const i = t.chart.chartArea,
    { property: r, start: a, end: o } = s || {};
  if (r === 'x' || r === 'y') {
    let l, c, u, d;
    r === 'x'
      ? ((l = a), (c = i.top), (u = o), (d = i.bottom))
      : ((l = i.left), (c = a), (u = i.right), (d = o)),
      n.beginPath(),
      e &&
        ((l = Math.max(l, e.left)),
        (u = Math.min(u, e.right)),
        (c = Math.max(c, e.top)),
        (d = Math.min(d, e.bottom))),
      n.rect(l, c, u - l, d - c),
      n.clip();
  }
}
function rl(n, t, e, s) {
  const i = t.interpolate(e, s);
  i && n.lineTo(i.x, i.y);
}
var lb = {
  id: 'filler',
  afterDatasetsUpdate(n, t, e) {
    const s = (n.data.datasets || []).length,
      i = [];
    let r, a, o, l;
    for (a = 0; a < s; ++a)
      (r = n.getDatasetMeta(a)),
        (o = r.dataset),
        (l = null),
        o &&
          o.options &&
          o instanceof Ue &&
          (l = {
            visible: n.isDatasetVisible(a),
            index: a,
            fill: Um(o, a, s),
            chart: n,
            axis: r.controller.options.indexAxis,
            scale: r.vScale,
            line: o,
          }),
        (r.$filler = l),
        i.push(l);
    for (a = 0; a < s; ++a)
      (l = i[a]), !(!l || l.fill === !1) && (l.fill = Ym(i, a, e.propagate));
  },
  beforeDraw(n, t, e) {
    const s = e.drawTime === 'beforeDraw',
      i = n.getSortedVisibleDatasetMetas(),
      r = n.chartArea;
    for (let a = i.length - 1; a >= 0; --a) {
      const o = i[a].$filler;
      o &&
        (o.line.updateControlPoints(r, o.axis), s && o.fill && yr(n.ctx, o, r));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return;
    const s = n.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const r = s[i].$filler;
      nl(r) && yr(n.ctx, r, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const s = t.meta.$filler;
    !nl(s) || e.drawTime !== 'beforeDatasetDraw' || yr(n.ctx, s, n.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const al = (n, t) => {
    let { boxHeight: e = t, boxWidth: s = t } = n;
    return (
      n.usePointStyle &&
        ((e = Math.min(e, t)), (s = n.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  cb = (n, t) =>
    n !== null &&
    t !== null &&
    n.datasetIndex === t.datasetIndex &&
    n.index === t.index;
class ol extends Le {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e, s) {
    (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = ut(t.generateLabels, [this.chart], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))),
      t.sort && (e = e.sort((s, i) => t.sort(s, i, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e);
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels,
      i = Tt(s.font),
      r = i.size,
      a = this._computeTitleHeight(),
      { boxWidth: o, itemHeight: l } = al(s, r);
    let c, u;
    (e.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(a, r, o, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(a, i, o, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, e, s, i) {
    const {
        ctx: r,
        maxWidth: a,
        options: {
          labels: { padding: o },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = i + o;
    let d = t;
    (r.textAlign = 'left'), (r.textBaseline = 'middle');
    let h = -1,
      g = -u;
    return (
      this.legendItems.forEach((f, p) => {
        const m = s + e / 2 + r.measureText(f.text).width;
        (p === 0 || c[c.length - 1] + m + 2 * o > a) &&
          ((d += u), (c[c.length - (p > 0 ? 0 : 1)] = 0), (g += u), h++),
          (l[p] = { left: 0, top: g, row: h, width: m, height: i }),
          (c[c.length - 1] += m + o);
      }),
      d
    );
  }
  _fitCols(t, e, s, i) {
    const {
        ctx: r,
        maxHeight: a,
        options: {
          labels: { padding: o },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = a - t;
    let d = o,
      h = 0,
      g = 0,
      f = 0,
      p = 0;
    return (
      this.legendItems.forEach((m, b) => {
        const { itemWidth: _, itemHeight: x } = ub(s, e, r, m, i);
        b > 0 &&
          g + x + 2 * o > u &&
          ((d += h + o),
          c.push({ width: h, height: g }),
          (f += h + o),
          p++,
          (h = g = 0)),
          (l[b] = { left: f, top: g, col: p, width: _, height: x }),
          (h = Math.max(h, _)),
          (g += x + o);
      }),
      (d += h),
      c.push({ width: h, height: g }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: s,
          labels: { padding: i },
          rtl: r,
        },
      } = this,
      a = Rn(r, this.left, this.width);
    if (this.isHorizontal()) {
      let o = 0,
        l = Ct(s, this.left + i, this.right - this.lineWidths[o]);
      for (const c of e)
        o !== c.row &&
          ((o = c.row),
          (l = Ct(s, this.left + i, this.right - this.lineWidths[o]))),
          (c.top += this.top + t + i),
          (c.left = a.leftForLtr(a.x(l), c.width)),
          (l += c.width + i);
    } else {
      let o = 0,
        l = Ct(s, this.top + t + i, this.bottom - this.columnSizes[o].height);
      for (const c of e)
        c.col !== o &&
          ((o = c.col),
          (l = Ct(
            s,
            this.top + t + i,
            this.bottom - this.columnSizes[o].height,
          ))),
          (c.top = l),
          (c.left += this.left + i),
          (c.left = a.leftForLtr(a.x(c.left), c.width)),
          (l += c.height + i);
    }
  }
  isHorizontal() {
    return (
      this.options.position === 'top' || this.options.position === 'bottom'
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ui(t, this), this._draw(), $i(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: i } = this,
      { align: r, labels: a } = t,
      o = pt.color,
      l = Rn(t.rtl, this.left, this.width),
      c = Tt(a.font),
      { padding: u } = a,
      d = c.size,
      h = d / 2;
    let g;
    this.drawTitle(),
      (i.textAlign = l.textAlign('left')),
      (i.textBaseline = 'middle'),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: f, boxHeight: p, itemHeight: m } = al(a, d),
      b = function (D, T, k) {
        if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
        i.save();
        const O = G(k.lineWidth, 1);
        if (
          ((i.fillStyle = G(k.fillStyle, o)),
          (i.lineCap = G(k.lineCap, 'butt')),
          (i.lineDashOffset = G(k.lineDashOffset, 0)),
          (i.lineJoin = G(k.lineJoin, 'miter')),
          (i.lineWidth = O),
          (i.strokeStyle = G(k.strokeStyle, o)),
          i.setLineDash(G(k.lineDash, [])),
          a.usePointStyle)
        ) {
          const L = {
              radius: (p * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: O,
            },
            R = l.xPlus(D, f / 2),
            E = T + h;
          Rc(i, L, R, E, a.pointStyleWidth && f);
        } else {
          const L = T + Math.max((d - p) / 2, 0),
            R = l.leftForLtr(D, f),
            E = gn(k.borderRadius);
          i.beginPath(),
            Object.values(E).some((W) => W !== 0)
              ? ks(i, { x: R, y: L, w: f, h: p, radius: E })
              : i.rect(R, L, f, p),
            i.fill(),
            O !== 0 && i.stroke();
        }
        i.restore();
      },
      _ = function (D, T, k) {
        _n(i, k.text, D, T + m / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      x = this.isHorizontal(),
      w = this._computeTitleHeight();
    x
      ? (g = {
          x: Ct(r, this.left + u, this.right - s[0]),
          y: this.top + u + w,
          line: 0,
        })
      : (g = {
          x: this.left + u,
          y: Ct(r, this.top + w + u, this.bottom - e[0].height),
          line: 0,
        }),
      Hc(this.ctx, t.textDirection);
    const y = m + u;
    this.legendItems.forEach((D, T) => {
      (i.strokeStyle = D.fontColor), (i.fillStyle = D.fontColor);
      const k = i.measureText(D.text).width,
        O = l.textAlign(D.textAlign || (D.textAlign = a.textAlign)),
        L = f + h + k;
      let R = g.x,
        E = g.y;
      l.setWidth(this.width),
        x
          ? T > 0 &&
            R + L + u > this.right &&
            ((E = g.y += y),
            g.line++,
            (R = g.x = Ct(r, this.left + u, this.right - s[g.line])))
          : T > 0 &&
            E + y > this.bottom &&
            ((R = g.x = R + e[g.line].width + u),
            g.line++,
            (E = g.y =
              Ct(r, this.top + w + u, this.bottom - e[g.line].height)));
      const W = l.x(R);
      if (
        (b(W, E, D),
        (R = Cf(O, R + f + h, x ? R + L : this.right, t.rtl)),
        _(l.x(R), E, D),
        x)
      )
        g.x += L + u;
      else if (typeof D.text != 'string') {
        const Z = c.lineHeight;
        g.y += gu(D, Z) + u;
      } else g.y += y;
    }),
      jc(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      s = Tt(e.font),
      i = Lt(e.padding);
    if (!e.display) return;
    const r = Rn(t.rtl, this.left, this.width),
      a = this.ctx,
      o = e.position,
      l = s.size / 2,
      c = i.top + l;
    let u,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = Ct(t.align, d, this.right - h));
    else {
      const f = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      u =
        c +
        Ct(
          t.align,
          this.top,
          this.bottom - f - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const g = Ct(o, d, d + h);
    (a.textAlign = r.textAlign(wa(o))),
      (a.textBaseline = 'middle'),
      (a.strokeStyle = e.color),
      (a.fillStyle = e.color),
      (a.font = s.string),
      _n(a, e.text, g, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Tt(t.font),
      s = Lt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, i, r;
    if (De(t, this.left, this.right) && De(e, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
        if (
          ((i = r[s]),
          De(t, i.left, i.left + i.width) && De(e, i.top, i.top + i.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!fb(t.type, e)) return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const i = this._hoveredItem,
        r = cb(i, s);
      i && !r && ut(e.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !r && ut(e.onHover, [t, s, this], this);
    } else s && ut(e.onClick, [t, s, this], this);
  }
}
function ub(n, t, e, s, i) {
  const r = db(s, n, t, e),
    a = hb(i, s, t.lineHeight);
  return { itemWidth: r, itemHeight: a };
}
function db(n, t, e, s) {
  let i = n.text;
  return (
    i &&
      typeof i != 'string' &&
      (i = i.reduce((r, a) => (r.length > a.length ? r : a))),
    t + e.size / 2 + s.measureText(i).width
  );
}
function hb(n, t, e) {
  let s = n;
  return typeof t.text != 'string' && (s = gu(t, e)), s;
}
function gu(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function fb(n, t) {
  return !!(
    ((n === 'mousemove' || n === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (n === 'click' || n === 'mouseup'))
  );
}
var gb = {
  id: 'legend',
  _element: ol,
  start(n, t, e) {
    const s = (n.legend = new ol({ ctx: n.ctx, options: e, chart: n }));
    Rt.configure(n, s, e), Rt.addBox(n, s);
  },
  stop(n) {
    Rt.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const s = n.legend;
    Rt.configure(n, s, e), (s.options = e);
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const s = t.datasetIndex,
        i = e.chart;
      i.isDatasetVisible(s)
        ? (i.hide(s), (t.hidden = !0))
        : (i.show(s), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets,
          {
            labels: {
              usePointStyle: e,
              pointStyle: s,
              textAlign: i,
              color: r,
              useBorderRadius: a,
              borderRadius: o,
            },
          } = n.legend.options;
        return n._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0),
            u = Lt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: r,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: a && (o || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: 'center',
      text: '',
    },
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith('on'),
    labels: {
      _scriptable: (n) => !['generateLabels', 'filter', 'sort'].includes(n),
    },
  },
};
class Aa extends Le {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, e) {
    const s = this.options;
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = e);
    const i = gt(s.text) ? s.text.length : 1;
    this._padding = Lt(s.padding);
    const r = i * Tt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = r) : (this.width = r);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === 'top' || t === 'bottom';
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: i, right: r, options: a } = this,
      o = a.align;
    let l = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = Ct(o, s, r)), (d = e + t), (c = r - s))
        : (a.position === 'left'
            ? ((u = s + t), (d = Ct(o, i, e)), (l = ft * -0.5))
            : ((u = r - t), (d = Ct(o, e, i)), (l = ft * 0.5)),
          (c = i - e)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const s = Tt(e.font),
      r = s.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: o, maxWidth: l, rotation: c } = this._drawArgs(r);
    _n(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: wa(e.align),
      textBaseline: 'middle',
      translation: [a, o],
    });
  }
}
function pb(n, t) {
  const e = new Aa({ ctx: n.ctx, options: t, chart: n });
  Rt.configure(n, e, t), Rt.addBox(n, e), (n.titleBlock = e);
}
var mb = {
  id: 'title',
  _element: Aa,
  start(n, t, e) {
    pb(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Rt.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const s = n.titleBlock;
    Rt.configure(n, s, e), (s.options = e);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ks = new WeakMap();
var bb = {
  id: 'subtitle',
  start(n, t, e) {
    const s = new Aa({ ctx: n.ctx, options: e, chart: n });
    Rt.configure(n, s, e), Rt.addBox(n, s), Ks.set(n, s);
  },
  stop(n) {
    Rt.removeBox(n, Ks.get(n)), Ks.delete(n);
  },
  beforeUpdate(n, t, e) {
    const s = Ks.get(n);
    Rt.configure(n, s, e), (s.options = e);
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'normal' },
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const os = {
  average(n) {
    if (!n.length) return !1;
    let t,
      e,
      s = new Set(),
      i = 0,
      r = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const o = n[t].element;
      if (o && o.hasValue()) {
        const l = o.tooltipPosition();
        s.add(l.x), (i += l.y), ++r;
      }
    }
    return r === 0 || s.size === 0
      ? !1
      : { x: [...s].reduce((o, l) => o + l) / s.size, y: i / r };
  },
  nearest(n, t) {
    if (!n.length) return !1;
    let e = t.x,
      s = t.y,
      i = Number.POSITIVE_INFINITY,
      r,
      a,
      o;
    for (r = 0, a = n.length; r < a; ++r) {
      const l = n[r].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = Lr(t, c);
        u < i && ((i = u), (o = l));
      }
    }
    if (o) {
      const l = o.tooltipPosition();
      (e = l.x), (s = l.y);
    }
    return { x: e, y: s };
  },
};
function ue(n, t) {
  return t && (gt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Pe(n) {
  return (typeof n == 'string' || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n;
}
function _b(n, t) {
  const { element: e, datasetIndex: s, index: i } = t,
    r = n.getDatasetMeta(s).controller,
    { label: a, value: o } = r.getLabelAndValue(i);
  return {
    chart: n,
    label: a,
    parsed: r.getParsed(i),
    raw: n.data.datasets[s].data[i],
    formattedValue: o,
    dataset: r.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: e,
  };
}
function ll(n, t) {
  const e = n.chart.ctx,
    { body: s, footer: i, title: r } = n,
    { boxWidth: a, boxHeight: o } = t,
    l = Tt(t.bodyFont),
    c = Tt(t.titleFont),
    u = Tt(t.footerFont),
    d = r.length,
    h = i.length,
    g = s.length,
    f = Lt(t.padding);
  let p = f.height,
    m = 0,
    b = s.reduce(
      (w, y) => w + y.before.length + y.lines.length + y.after.length,
      0,
    );
  if (
    ((b += n.beforeBody.length + n.afterBody.length),
    d &&
      (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const w = t.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight;
    p += g * w + (b - g) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  h && (p += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
  let _ = 0;
  const x = function (w) {
    m = Math.max(m, e.measureText(w).width + _);
  };
  return (
    e.save(),
    (e.font = c.string),
    at(n.title, x),
    (e.font = l.string),
    at(n.beforeBody.concat(n.afterBody), x),
    (_ = t.displayColors ? a + 2 + t.boxPadding : 0),
    at(s, (w) => {
      at(w.before, x), at(w.lines, x), at(w.after, x);
    }),
    (_ = 0),
    (e.font = u.string),
    at(n.footer, x),
    e.restore(),
    (m += f.width),
    { width: m, height: p }
  );
}
function vb(n, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? 'top' : e > n.height - s / 2 ? 'bottom' : 'center';
}
function yb(n, t, e, s) {
  const { x: i, width: r } = s,
    a = e.caretSize + e.caretPadding;
  if ((n === 'left' && i + r + a > t.width) || (n === 'right' && i - r - a < 0))
    return !0;
}
function xb(n, t, e, s) {
  const { x: i, width: r } = e,
    {
      width: a,
      chartArea: { left: o, right: l },
    } = n;
  let c = 'center';
  return (
    s === 'center'
      ? (c = i <= (o + l) / 2 ? 'left' : 'right')
      : i <= r / 2
        ? (c = 'left')
        : i >= a - r / 2 && (c = 'right'),
    yb(c, n, t, e) && (c = 'center'),
    c
  );
}
function cl(n, t, e) {
  const s = e.yAlign || t.yAlign || vb(n, e);
  return { xAlign: e.xAlign || t.xAlign || xb(n, t, e, s), yAlign: s };
}
function wb(n, t) {
  let { x: e, width: s } = n;
  return t === 'right' ? (e -= s) : t === 'center' && (e -= s / 2), e;
}
function kb(n, t, e) {
  let { y: s, height: i } = n;
  return (
    t === 'top' ? (s += e) : t === 'bottom' ? (s -= i + e) : (s -= i / 2), s
  );
}
function ul(n, t, e, s) {
  const { caretSize: i, caretPadding: r, cornerRadius: a } = n,
    { xAlign: o, yAlign: l } = e,
    c = i + r,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: g } = gn(a);
  let f = wb(t, o);
  const p = kb(t, l, c);
  return (
    l === 'center'
      ? o === 'left'
        ? (f += c)
        : o === 'right' && (f -= c)
      : o === 'left'
        ? (f -= Math.max(u, h) + i)
        : o === 'right' && (f += Math.max(d, g) + i),
    { x: Ot(f, 0, s.width - t.width), y: Ot(p, 0, s.height - t.height) }
  );
}
function Js(n, t, e) {
  const s = Lt(e.padding);
  return t === 'center'
    ? n.x + n.width / 2
    : t === 'right'
      ? n.x + n.width - s.right
      : n.x + s.left;
}
function dl(n) {
  return ue([], Pe(n));
}
function Mb(n, t, e) {
  return en(n, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function hl(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const pu = {
  beforeTitle: Me,
  title(n) {
    if (n.length > 0) {
      const t = n[0],
        e = t.chart.data.labels,
        s = e ? e.length : 0;
      if (this && this.options && this.options.mode === 'dataset')
        return t.dataset.label || '';
      if (t.label) return t.label;
      if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
    }
    return '';
  },
  afterTitle: Me,
  beforeBody: Me,
  beforeLabel: Me,
  label(n) {
    if (this && this.options && this.options.mode === 'dataset')
      return n.label + ': ' + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || '';
    t && (t += ': ');
    const e = n.formattedValue;
    return et(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart
      .getDatasetMeta(n.datasetIndex)
      .controller.getStyle(n.dataIndex);
    return { pointStyle: e.pointStyle, rotation: e.rotation };
  },
  afterLabel: Me,
  afterBody: Me,
  beforeFooter: Me,
  footer: Me,
  afterFooter: Me,
};
function zt(n, t, e, s) {
  const i = n[t].call(e, s);
  return typeof i > 'u' ? pu[t].call(e, s) : i;
}
class Vr extends Le {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      s = this.options.setContext(this.getContext()),
      i = s.enabled && e.options.animation && s.animations,
      r = new $c(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Mb(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, e) {
    const { callbacks: s } = e,
      i = zt(s, 'beforeTitle', this, t),
      r = zt(s, 'title', this, t),
      a = zt(s, 'afterTitle', this, t);
    let o = [];
    return (o = ue(o, Pe(i))), (o = ue(o, Pe(r))), (o = ue(o, Pe(a))), o;
  }
  getBeforeBody(t, e) {
    return dl(zt(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e,
      i = [];
    return (
      at(t, (r) => {
        const a = { before: [], lines: [], after: [] },
          o = hl(s, r);
        ue(a.before, Pe(zt(o, 'beforeLabel', this, r))),
          ue(a.lines, zt(o, 'label', this, r)),
          ue(a.after, Pe(zt(o, 'afterLabel', this, r))),
          i.push(a);
      }),
      i
    );
  }
  getAfterBody(t, e) {
    return dl(zt(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e,
      i = zt(s, 'beforeFooter', this, t),
      r = zt(s, 'footer', this, t),
      a = zt(s, 'afterFooter', this, t);
    let o = [];
    return (o = ue(o, Pe(i))), (o = ue(o, Pe(r))), (o = ue(o, Pe(a))), o;
  }
  _createItems(t) {
    const e = this._active,
      s = this.chart.data,
      i = [],
      r = [],
      a = [];
    let o = [],
      l,
      c;
    for (l = 0, c = e.length; l < c; ++l) o.push(_b(this.chart, e[l]));
    return (
      t.filter && (o = o.filter((u, d, h) => t.filter(u, d, h, s))),
      t.itemSort && (o = o.sort((u, d) => t.itemSort(u, d, s))),
      at(o, (u) => {
        const d = hl(t.callbacks, u);
        i.push(zt(d, 'labelColor', this, u)),
          r.push(zt(d, 'labelPointStyle', this, u)),
          a.push(zt(d, 'labelTextColor', this, u));
      }),
      (this.labelColors = i),
      (this.labelPointStyles = r),
      (this.labelTextColors = a),
      (this.dataPoints = o),
      o
    );
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()),
      i = this._active;
    let r,
      a = [];
    if (!i.length) this.opacity !== 0 && (r = { opacity: 0 });
    else {
      const o = os[s.position].call(this, i, this._eventPosition);
      (a = this._createItems(s)),
        (this.title = this.getTitle(a, s)),
        (this.beforeBody = this.getBeforeBody(a, s)),
        (this.body = this.getBody(a, s)),
        (this.afterBody = this.getAfterBody(a, s)),
        (this.footer = this.getFooter(a, s));
      const l = (this._size = ll(this, s)),
        c = Object.assign({}, o, l),
        u = cl(this.chart, s, c),
        d = ul(s, c, u, this.chart);
      (this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (r = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: o.x,
          caretY: o.y,
        });
    }
    (this._tooltipItems = a),
      (this.$context = void 0),
      r && this._resolveAnimations().update(this, r),
      t &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: e });
  }
  drawCaret(t, e, s, i) {
    const r = this.getCaretPosition(t, s, i);
    e.lineTo(r.x1, r.y1), e.lineTo(r.x2, r.y2), e.lineTo(r.x3, r.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: i, yAlign: r } = this,
      { caretSize: a, cornerRadius: o } = s,
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = gn(o),
      { x: h, y: g } = t,
      { width: f, height: p } = e;
    let m, b, _, x, w, y;
    return (
      r === 'center'
        ? ((w = g + p / 2),
          i === 'left'
            ? ((m = h), (b = m - a), (x = w + a), (y = w - a))
            : ((m = h + f), (b = m + a), (x = w - a), (y = w + a)),
          (_ = m))
        : (i === 'left'
            ? (b = h + Math.max(l, u) + a)
            : i === 'right'
              ? (b = h + f - Math.max(c, d) - a)
              : (b = this.caretX),
          r === 'top'
            ? ((x = g), (w = x - a), (m = b - a), (_ = b + a))
            : ((x = g + p), (w = x + a), (m = b + a), (_ = b - a)),
          (y = x)),
      { x1: m, x2: b, x3: _, y1: x, y2: w, y3: y }
    );
  }
  drawTitle(t, e, s) {
    const i = this.title,
      r = i.length;
    let a, o, l;
    if (r) {
      const c = Rn(s.rtl, this.x, this.width);
      for (
        t.x = Js(this, s.titleAlign, s),
          e.textAlign = c.textAlign(s.titleAlign),
          e.textBaseline = 'middle',
          a = Tt(s.titleFont),
          o = s.titleSpacing,
          e.fillStyle = s.titleColor,
          e.font = a.string,
          l = 0;
        l < r;
        ++l
      )
        e.fillText(i[l], c.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + o),
          l + 1 === r && (t.y += s.titleMarginBottom - o);
    }
  }
  _drawColorBox(t, e, s, i, r) {
    const a = this.labelColors[s],
      o = this.labelPointStyles[s],
      { boxHeight: l, boxWidth: c } = r,
      u = Tt(r.bodyFont),
      d = Js(this, 'left', r),
      h = i.x(d),
      g = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
      f = e.y + g;
    if (r.usePointStyle) {
      const p = {
          radius: Math.min(c, l) / 2,
          pointStyle: o.pointStyle,
          rotation: o.rotation,
          borderWidth: 1,
        },
        m = i.leftForLtr(h, c) + c / 2,
        b = f + l / 2;
      (t.strokeStyle = r.multiKeyBackground),
        (t.fillStyle = r.multiKeyBackground),
        Ir(t, p, m, b),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        Ir(t, p, m, b);
    } else {
      (t.lineWidth = nt(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const p = i.leftForLtr(h, c),
        m = i.leftForLtr(i.xPlus(h, 1), c - 2),
        b = gn(a.borderRadius);
      Object.values(b).some((_) => _ !== 0)
        ? (t.beginPath(),
          (t.fillStyle = r.multiKeyBackground),
          ks(t, { x: p, y: f, w: c, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          ks(t, { x: m, y: f + 1, w: c - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = r.multiKeyBackground),
          t.fillRect(p, f, c, l),
          t.strokeRect(p, f, c, l),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(m, f + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: i } = this,
      {
        bodySpacing: r,
        bodyAlign: a,
        displayColors: o,
        boxHeight: l,
        boxWidth: c,
        boxPadding: u,
      } = s,
      d = Tt(s.bodyFont);
    let h = d.lineHeight,
      g = 0;
    const f = Rn(s.rtl, this.x, this.width),
      p = function (k) {
        e.fillText(k, f.x(t.x + g), t.y + h / 2), (t.y += h + r);
      },
      m = f.textAlign(a);
    let b, _, x, w, y, D, T;
    for (
      e.textAlign = a,
        e.textBaseline = 'middle',
        e.font = d.string,
        t.x = Js(this, m, s),
        e.fillStyle = s.bodyColor,
        at(this.beforeBody, p),
        g = o && m !== 'right' ? (a === 'center' ? c / 2 + u : c + 2 + u) : 0,
        w = 0,
        D = i.length;
      w < D;
      ++w
    ) {
      for (
        b = i[w],
          _ = this.labelTextColors[w],
          e.fillStyle = _,
          at(b.before, p),
          x = b.lines,
          o &&
            x.length &&
            (this._drawColorBox(e, t, w, f, s),
            (h = Math.max(d.lineHeight, l))),
          y = 0,
          T = x.length;
        y < T;
        ++y
      )
        p(x[y]), (h = d.lineHeight);
      at(b.after, p);
    }
    (g = 0), (h = d.lineHeight), at(this.afterBody, p), (t.y -= r);
  }
  drawFooter(t, e, s) {
    const i = this.footer,
      r = i.length;
    let a, o;
    if (r) {
      const l = Rn(s.rtl, this.x, this.width);
      for (
        t.x = Js(this, s.footerAlign, s),
          t.y += s.footerMarginTop,
          e.textAlign = l.textAlign(s.footerAlign),
          e.textBaseline = 'middle',
          a = Tt(s.footerFont),
          e.fillStyle = s.footerColor,
          e.font = a.string,
          o = 0;
        o < r;
        ++o
      )
        e.fillText(i[o], l.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + s.footerSpacing);
    }
  }
  drawBackground(t, e, s, i) {
    const { xAlign: r, yAlign: a } = this,
      { x: o, y: l } = t,
      { width: c, height: u } = s,
      {
        topLeft: d,
        topRight: h,
        bottomLeft: g,
        bottomRight: f,
      } = gn(i.cornerRadius);
    (e.fillStyle = i.backgroundColor),
      (e.strokeStyle = i.borderColor),
      (e.lineWidth = i.borderWidth),
      e.beginPath(),
      e.moveTo(o + d, l),
      a === 'top' && this.drawCaret(t, e, s, i),
      e.lineTo(o + c - h, l),
      e.quadraticCurveTo(o + c, l, o + c, l + h),
      a === 'center' && r === 'right' && this.drawCaret(t, e, s, i),
      e.lineTo(o + c, l + u - f),
      e.quadraticCurveTo(o + c, l + u, o + c - f, l + u),
      a === 'bottom' && this.drawCaret(t, e, s, i),
      e.lineTo(o + g, l + u),
      e.quadraticCurveTo(o, l + u, o, l + u - g),
      a === 'center' && r === 'left' && this.drawCaret(t, e, s, i),
      e.lineTo(o, l + d),
      e.quadraticCurveTo(o, l, o + d, l),
      e.closePath(),
      e.fill(),
      i.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      s = this.$animations,
      i = s && s.x,
      r = s && s.y;
    if (i || r) {
      const a = os[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      const o = (this._size = ll(this, t)),
        l = Object.assign({}, a, this._size),
        c = cl(e, t, l),
        u = ul(t, l, c, e);
      (i._to !== u.x || r._to !== u.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = o.width),
        (this.height = o.height),
        (this.caretX = a.x),
        (this.caretY = a.y),
        this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(e);
    const i = { width: this.width, height: this.height },
      r = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const a = Lt(e.padding),
      o =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      o &&
      (t.save(),
      (t.globalAlpha = s),
      this.drawBackground(r, t, i, e),
      Hc(t, e.textDirection),
      (r.y += a.top),
      this.drawTitle(r, t, e),
      this.drawBody(r, t, e),
      this.drawFooter(r, t, e),
      jc(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active,
      i = t.map(({ datasetIndex: o, index: l }) => {
        const c = this.chart.getDatasetMeta(o);
        if (!c) throw new Error('Cannot find a dataset at index ' + o);
        return { datasetIndex: o, element: c.data[l], index: l };
      }),
      r = !Mi(s, i),
      a = this._positionChanged(i, e);
    (r || a) &&
      ((this._active = i),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options,
      r = this._active || [],
      a = this._getActiveElements(t, r, e, s),
      o = this._positionChanged(a, t),
      l = e || !Mi(a, r) || o;
    return (
      l &&
        ((this._active = a),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, s, i) {
    const r = this.options;
    if (t.type === 'mouseout') return [];
    if (!i)
      return e.filter(
        (o) =>
          this.chart.data.datasets[o.datasetIndex] &&
          this.chart
            .getDatasetMeta(o.datasetIndex)
            .controller.getParsed(o.index) !== void 0,
      );
    const a = this.chart.getElementsAtEventForMode(t, r.mode, r, s);
    return r.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: i, options: r } = this,
      a = os[r.position].call(this, t, e);
    return a !== !1 && (s !== a.x || i !== a.y);
  }
}
M(Vr, 'positioners', os);
var Sb = {
    id: 'tooltip',
    _element: Vr,
    positioners: os,
    afterInit(n, t, e) {
      e && (n.tooltip = new Vr({ chart: n, options: e }));
    },
    beforeUpdate(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    reset(n, t, e) {
      n.tooltip && n.tooltip.initialize(e);
    },
    afterDraw(n) {
      const t = n.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (
          n.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1
        )
          return;
        t.draw(n.ctx), n.notifyPlugins('afterTooltipDraw', e);
      }
    },
    afterEvent(n, t) {
      if (n.tooltip) {
        const e = t.replay;
        n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (n, t) => t.bodyFont.size,
      boxWidth: (n, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: {
          type: 'number',
          properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
        },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: pu,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (n) =>
        n !== 'filter' && n !== 'itemSort' && n !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  },
  Pb = Object.freeze({
    __proto__: null,
    Colors: Bm,
    Decimation: jm,
    Filler: lb,
    Legend: gb,
    SubTitle: bb,
    Title: mb,
    Tooltip: Sb,
  });
const Tb = (n, t, e, s) => (
  typeof t == 'string'
    ? ((e = n.push(t) - 1), s.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function Db(n, t, e, s) {
  const i = n.indexOf(t);
  if (i === -1) return Tb(n, t, e, s);
  const r = n.lastIndexOf(t);
  return i !== r ? e : i;
}
const Ob = (n, t) => (n === null ? null : Ot(Math.round(n), 0, t));
function fl(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class qr extends xn {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: i, label: r } of e) s[i] === r && s.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (et(t)) return null;
    const s = this.getLabels();
    return (
      (e =
        isFinite(e) && s[e] === t ? e : Db(s, t, G(e, t), this._addedLabels)),
      Ob(e, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: i } = this.getMinMax(!0);
    this.options.bounds === 'ticks' &&
      (t || (s = 0), e || (i = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      s = this.options.offset,
      i = [];
    let r = this.getLabels();
    (r = t === 0 && e === r.length - 1 ? r : r.slice(t, e + 1)),
      (this._valueRange = Math.max(r.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0));
    for (let a = t; a <= e; a++) i.push({ value: a });
    return i;
  }
  getLabelForValue(t) {
    return fl.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
M(qr, 'id', 'category'), M(qr, 'defaults', { ticks: { callback: fl } });
function Eb(n, t) {
  const e = [],
    {
      bounds: i,
      step: r,
      min: a,
      max: o,
      precision: l,
      count: c,
      maxTicks: u,
      maxDigits: d,
      includeBounds: h,
    } = n,
    g = r || 1,
    f = u - 1,
    { min: p, max: m } = t,
    b = !et(a),
    _ = !et(o),
    x = !et(c),
    w = (m - p) / (d + 1);
  let y = oo((m - p) / f / g) * g,
    D,
    T,
    k,
    O;
  if (y < 1e-14 && !b && !_) return [{ value: p }, { value: m }];
  (O = Math.ceil(m / y) - Math.floor(p / y)),
    O > f && (y = oo((O * y) / f / g) * g),
    et(l) || ((D = Math.pow(10, l)), (y = Math.ceil(y * D) / D)),
    i === 'ticks'
      ? ((T = Math.floor(p / y) * y), (k = Math.ceil(m / y) * y))
      : ((T = p), (k = m)),
    b && _ && r && Mf((o - a) / r, y / 1e3)
      ? ((O = Math.round(Math.min((o - a) / y, u))),
        (y = (o - a) / O),
        (T = a),
        (k = o))
      : x
        ? ((T = b ? a : T), (k = _ ? o : k), (O = c - 1), (y = (k - T) / O))
        : ((O = (k - T) / y),
          ds(O, Math.round(O), y / 1e3)
            ? (O = Math.round(O))
            : (O = Math.ceil(O)));
  const L = Math.max(lo(y), lo(T));
  (D = Math.pow(10, et(l) ? L : l)),
    (T = Math.round(T * D) / D),
    (k = Math.round(k * D) / D);
  let R = 0;
  for (
    b &&
    (h && T !== a
      ? (e.push({ value: a }),
        T < a && R++,
        ds(Math.round((T + R * y) * D) / D, a, gl(a, w, n)) && R++)
      : T < a && R++);
    R < O;
    ++R
  ) {
    const E = Math.round((T + R * y) * D) / D;
    if (_ && E > o) break;
    e.push({ value: E });
  }
  return (
    _ && h && k !== o
      ? e.length && ds(e[e.length - 1].value, o, gl(o, w, n))
        ? (e[e.length - 1].value = o)
        : e.push({ value: o })
      : (!_ || k === o) && e.push({ value: k }),
    e
  );
}
function gl(n, t, { horizontal: e, minRotation: s }) {
  const i = te(s),
    r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
    a = 0.75 * t * ('' + n).length;
  return Math.min(t / r, a);
}
class Ci extends xn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return et(t) ||
      ((typeof t == 'number' || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: i, max: r } = this;
    const a = (l) => (i = e ? i : l),
      o = (l) => (r = s ? r : l);
    if (t) {
      const l = pe(i),
        c = pe(r);
      l < 0 && c < 0 ? o(0) : l > 0 && c > 0 && a(0);
    }
    if (i === r) {
      let l = r === 0 ? 1 : Math.abs(r * 0.05);
      o(r + l), t || a(i - l);
    }
    (this.min = i), (this.max = r);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t,
      i;
    return (
      s
        ? ((i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`,
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (e = e || 11)),
      e && (i = Math.min(e, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const i = {
        maxTicks: s,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      r = this._range || this,
      a = Eb(i, r);
    return (
      t.bounds === 'ticks' && Mc(a, this, 'value'),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (s - e) / Math.max(t.length - 1, 1) / 2;
      (e -= i), (s += i);
    }
    (this._startValue = e), (this._endValue = s), (this._valueRange = s - e);
  }
  getLabelForValue(t) {
    return Rs(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Yr extends Ci {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = vt(t) ? t : 0),
      (this.max = vt(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      s = te(this.options.ticks.minRotation),
      i = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
      r = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, r.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
M(Yr, 'id', 'linear'),
  M(Yr, 'defaults', { ticks: { callback: Yi.formatters.numeric } });
const Ss = (n) => Math.floor(Ye(n)),
  on = (n, t) => Math.pow(10, Ss(n) + t);
function pl(n) {
  return n / Math.pow(10, Ss(n)) === 1;
}
function ml(n, t, e) {
  const s = Math.pow(10, e),
    i = Math.floor(n / s);
  return Math.ceil(t / s) - i;
}
function Cb(n, t) {
  const e = t - n;
  let s = Ss(e);
  for (; ml(n, t, s) > 10; ) s++;
  for (; ml(n, t, s) < 10; ) s--;
  return Math.min(s, Ss(n));
}
function Ab(n, { min: t, max: e }) {
  t = $t(n.min, t);
  const s = [],
    i = Ss(t);
  let r = Cb(t, e),
    a = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const o = Math.pow(10, r),
    l = i > r ? Math.pow(10, i) : 0,
    c = Math.round((t - l) * a) / a,
    u = Math.floor((t - l) / o / 10) * o * 10;
  let d = Math.floor((c - u) / Math.pow(10, r)),
    h = $t(n.min, Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  for (; h < e; )
    s.push({ value: h, major: pl(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (r++, (d = 2), (a = r >= 0 ? 1 : a)),
      (h = Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  const g = $t(n.max, h);
  return s.push({ value: g, major: pl(g), significand: d }), s;
}
class Ur extends xn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const s = Ci.prototype.parse.apply(this, [t, e]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return vt(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = vt(t) ? Math.max(0, t) : null),
      (this.max = vt(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !vt(this._userMin) &&
        (this.min = t === on(this.min, 0) ? on(this.min, -1) : on(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min,
      i = this.max;
    const r = (o) => (s = t ? s : o),
      a = (o) => (i = e ? i : o);
    s === i && (s <= 0 ? (r(1), a(10)) : (r(on(s, -1)), a(on(i, 1)))),
      s <= 0 && r(on(i, -1)),
      i <= 0 && a(on(s, 1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      s = Ab(e, this);
    return (
      t.bounds === 'ticks' && Mc(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? '0'
      : Rs(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Ye(t)),
      (this._valueRange = Ye(this.max) - Ye(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Ye(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
M(Ur, 'id', 'logarithmic'),
  M(Ur, 'defaults', {
    ticks: { callback: Yi.formatters.logarithmic, major: { enabled: !0 } },
  });
function $r(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Lt(t.backdropPadding);
    return G(t.font && t.font.size, pt.font.size) + e.height;
  }
  return 0;
}
function Rb(n, t, e) {
  return (
    (e = gt(e) ? e : [e]), { w: Hf(n, t.string, e), h: e.length * t.lineHeight }
  );
}
function bl(n, t, e, s, i) {
  return n === s || n === i
    ? { start: t - e / 2, end: t + e / 2 }
    : n < s || n > i
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
}
function Lb(n) {
  const t = {
      l: n.left + n._padding.left,
      r: n.right - n._padding.right,
      t: n.top + n._padding.top,
      b: n.bottom - n._padding.bottom,
    },
    e = Object.assign({}, t),
    s = [],
    i = [],
    r = n._pointLabels.length,
    a = n.options.pointLabels,
    o = a.centerPointLabels ? ft / r : 0;
  for (let l = 0; l < r; l++) {
    const c = a.setContext(n.getPointLabelContext(l));
    i[l] = c.padding;
    const u = n.getPointPosition(l, n.drawingArea + i[l], o),
      d = Tt(c.font),
      h = Rb(n.ctx, d, n._pointLabels[l]);
    s[l] = h;
    const g = Xt(n.getIndexAngle(l) + o),
      f = Math.round(ya(g)),
      p = bl(f, u.x, h.w, 0, 180),
      m = bl(f, u.y, h.h, 90, 270);
    Fb(e, t, g, p, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (n._pointLabelItems = Bb(n, s, i));
}
function Fb(n, t, e, s, i) {
  const r = Math.abs(Math.sin(e)),
    a = Math.abs(Math.cos(e));
  let o = 0,
    l = 0;
  s.start < t.l
    ? ((o = (t.l - s.start) / r), (n.l = Math.min(n.l, t.l - o)))
    : s.end > t.r && ((o = (s.end - t.r) / r), (n.r = Math.max(n.r, t.r + o))),
    i.start < t.t
      ? ((l = (t.t - i.start) / a), (n.t = Math.min(n.t, t.t - l)))
      : i.end > t.b &&
        ((l = (i.end - t.b) / a), (n.b = Math.max(n.b, t.b + l)));
}
function Ib(n, t, e) {
  const s = n.drawingArea,
    { extra: i, additionalAngle: r, padding: a, size: o } = e,
    l = n.getPointPosition(t, s + i + a, r),
    c = Math.round(ya(Xt(l.angle + kt))),
    u = Hb(l.y, o.h, c),
    d = zb(c),
    h = Wb(l.x, o.w, d);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: d,
    left: h,
    top: u,
    right: h + o.w,
    bottom: u + o.h,
  };
}
function Nb(n, t) {
  if (!t) return !0;
  const { left: e, top: s, right: i, bottom: r } = n;
  return !(
    Ee({ x: e, y: s }, t) ||
    Ee({ x: e, y: r }, t) ||
    Ee({ x: i, y: s }, t) ||
    Ee({ x: i, y: r }, t)
  );
}
function Bb(n, t, e) {
  const s = [],
    i = n._pointLabels.length,
    r = n.options,
    { centerPointLabels: a, display: o } = r.pointLabels,
    l = { extra: $r(r) / 2, additionalAngle: a ? ft / i : 0 };
  let c;
  for (let u = 0; u < i; u++) {
    (l.padding = e[u]), (l.size = t[u]);
    const d = Ib(n, u, l);
    s.push(d), o === 'auto' && ((d.visible = Nb(d, c)), d.visible && (c = d));
  }
  return s;
}
function zb(n) {
  return n === 0 || n === 180 ? 'center' : n < 180 ? 'left' : 'right';
}
function Wb(n, t, e) {
  return e === 'right' ? (n -= t) : e === 'center' && (n -= t / 2), n;
}
function Hb(n, t, e) {
  return (
    e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n
  );
}
function jb(n, t, e) {
  const { left: s, top: i, right: r, bottom: a } = e,
    { backdropColor: o } = t;
  if (!et(o)) {
    const l = gn(t.borderRadius),
      c = Lt(t.backdropPadding);
    n.fillStyle = o;
    const u = s - c.left,
      d = i - c.top,
      h = r - s + c.width,
      g = a - i + c.height;
    Object.values(l).some((f) => f !== 0)
      ? (n.beginPath(), ks(n, { x: u, y: d, w: h, h: g, radius: l }), n.fill())
      : n.fillRect(u, d, h, g);
  }
}
function Vb(n, t) {
  const {
    ctx: e,
    options: { pointLabels: s },
  } = n;
  for (let i = t - 1; i >= 0; i--) {
    const r = n._pointLabelItems[i];
    if (!r.visible) continue;
    const a = s.setContext(n.getPointLabelContext(i));
    jb(e, a, r);
    const o = Tt(a.font),
      { x: l, y: c, textAlign: u } = r;
    _n(e, n._pointLabels[i], l, c + o.lineHeight / 2, o, {
      color: a.color,
      textAlign: u,
      textBaseline: 'middle',
    });
  }
}
function mu(n, t, e, s) {
  const { ctx: i } = n;
  if (e) i.arc(n.xCenter, n.yCenter, t, 0, ht);
  else {
    let r = n.getPointPosition(0, t);
    i.moveTo(r.x, r.y);
    for (let a = 1; a < s; a++)
      (r = n.getPointPosition(a, t)), i.lineTo(r.x, r.y);
  }
}
function qb(n, t, e, s, i) {
  const r = n.ctx,
    a = t.circular,
    { color: o, lineWidth: l } = t;
  (!a && !s) ||
    !o ||
    !l ||
    e < 0 ||
    (r.save(),
    (r.strokeStyle = o),
    (r.lineWidth = l),
    r.setLineDash(i.dash || []),
    (r.lineDashOffset = i.dashOffset),
    r.beginPath(),
    mu(n, e, a, s),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function Yb(n, t, e) {
  return en(n, { label: e, index: t, type: 'pointLabel' });
}
class ls extends Ci {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Lt($r(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      s = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, s) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = vt(t) && !isNaN(t) ? t : 0),
      (this.max = vt(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / $r(this.options));
  }
  generateTickLabels(t) {
    Ci.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, s) => {
          const i = ut(this.options.pointLabels.callback, [e, s], this);
          return i || i === 0 ? i : '';
        })
        .filter((e, s) => this.chart.getDataVisibility(s)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Lb(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, i) {
    (this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((s - i) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, e, s, i),
      ));
  }
  getIndexAngle(t) {
    const e = ht / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0;
    return Xt(t * e + te(s));
  }
  getDistanceFromCenterForValue(t) {
    if (et(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (et(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Yb(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const i = this.getIndexAngle(t) - kt + s;
    return {
      x: Math.cos(i) * e + this.xCenter,
      y: Math.sin(i) * e + this.yCenter,
      angle: i,
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: i, bottom: r } = this._pointLabelItems[t];
    return { left: e, top: s, right: i, bottom: r };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(),
        s.beginPath(),
        mu(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          e,
          this._pointLabels.length,
        ),
        s.closePath(),
        (s.fillStyle = t),
        s.fill(),
        s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: s, grid: i, border: r } = e,
      a = this._pointLabels.length;
    let o, l, c;
    if (
      (e.pointLabels.display && Vb(this, a),
      i.display &&
        this.ticks.forEach((u, d) => {
          if (d !== 0 || (d === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(u.value);
            const h = this.getContext(d),
              g = i.setContext(h),
              f = r.setContext(h);
            qb(this, g, l, a, f);
          }
        }),
      s.display)
    ) {
      for (t.save(), o = a - 1; o >= 0; o--) {
        const u = s.setContext(this.getPointLabelContext(o)),
          { color: d, lineWidth: h } = u;
        !h ||
          !d ||
          ((t.lineWidth = h),
          (t.strokeStyle = d),
          t.setLineDash(u.borderDash),
          (t.lineDashOffset = u.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            e.reverse ? this.min : this.max,
          )),
          (c = this.getPointPosition(o, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      s = e.ticks;
    if (!s.display) return;
    const i = this.getIndexAngle(0);
    let r, a;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(i),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((o, l) => {
        if (l === 0 && this.min >= 0 && !e.reverse) return;
        const c = s.setContext(this.getContext(l)),
          u = Tt(c.font);
        if (
          ((r = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = u.string),
            (a = t.measureText(o.label).width),
            (t.fillStyle = c.backdropColor);
          const d = Lt(c.backdropPadding);
          t.fillRect(
            -a / 2 - d.left,
            -r - u.size / 2 - d.top,
            a + d.width,
            u.size + d.height,
          );
        }
        _n(t, o.label, 0, -r, u, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
M(ls, 'id', 'radialLinear'),
  M(ls, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Yi.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  M(ls, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  M(ls, 'descriptors', { angleLines: { _fallback: 'grid' } });
const Gi = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  jt = Object.keys(Gi);
function _l(n, t) {
  return n - t;
}
function vl(n, t) {
  if (et(t)) return null;
  const e = n._adapter,
    { parser: s, round: i, isoWeekday: r } = n._parseOpts;
  let a = t;
  return (
    typeof s == 'function' && (a = s(a)),
    vt(a) || (a = typeof s == 'string' ? e.parse(a, s) : e.parse(a)),
    a === null
      ? null
      : (i &&
          (a =
            i === 'week' && (Fn(r) || r === !0)
              ? e.startOf(a, 'isoWeek', r)
              : e.startOf(a, i)),
        +a)
  );
}
function yl(n, t, e, s) {
  const i = jt.length;
  for (let r = jt.indexOf(n); r < i - 1; ++r) {
    const a = Gi[jt[r]],
      o = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (o * a.size)) <= s) return jt[r];
  }
  return jt[i - 1];
}
function Ub(n, t, e, s, i) {
  for (let r = jt.length - 1; r >= jt.indexOf(e); r--) {
    const a = jt[r];
    if (Gi[a].common && n._adapter.diff(i, s, a) >= t - 1) return a;
  }
  return jt[e ? jt.indexOf(e) : 0];
}
function $b(n) {
  for (let t = jt.indexOf(n) + 1, e = jt.length; t < e; ++t)
    if (Gi[jt[t]].common) return jt[t];
}
function xl(n, t, e) {
  if (!e) n[t] = !0;
  else if (e.length) {
    const { lo: s, hi: i } = xa(e, t),
      r = e[s] >= t ? e[s] : e[i];
    n[r] = !0;
  }
}
function Xb(n, t, e, s) {
  const i = n._adapter,
    r = +i.startOf(t[0].value, s),
    a = t[t.length - 1].value;
  let o, l;
  for (o = r; o <= a; o = +i.add(o, 1, s))
    (l = e[o]), l >= 0 && (t[l].major = !0);
  return t;
}
function wl(n, t, e) {
  const s = [],
    i = {},
    r = t.length;
  let a, o;
  for (a = 0; a < r; ++a)
    (o = t[a]), (i[o] = a), s.push({ value: o, major: !1 });
  return r === 0 || !e ? s : Xb(n, s, i, e);
}
class Ps extends xn {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}),
      i = (this._adapter = new Gc._date(t.adapters.date));
    i.init(e),
      us(s.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : vl(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      s = t.time.unit || 'day';
    let { min: i, max: r, minDefined: a, maxDefined: o } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !o && !isNaN(c.max) && (r = Math.max(r, c.max));
    }
    (!a || !o) &&
      (l(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') &&
        l(this.getMinMax(!1))),
      (i = vt(i) && !isNaN(i) ? i : +e.startOf(Date.now(), s)),
      (r = vt(r) && !isNaN(r) ? r : +e.endOf(Date.now(), s) + 1),
      (this.min = Math.min(i, r - 1)),
      (this.max = Math.max(i + 1, r));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return t.length && ((e = t[0]), (s = t[t.length - 1])), { min: e, max: s };
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      s = t.ticks,
      i = s.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    t.bounds === 'ticks' &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const r = this.min,
      a = this.max,
      o = Df(i, r, a);
    return (
      (this._unit =
        e.unit ||
        (s.autoSkip
          ? yl(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : Ub(this, o.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : $b(this._unit)),
      this.initOffsets(i),
      t.reverse && o.reverse(),
      wl(this, o, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0,
      s = 0,
      i,
      r;
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (e = 1 - i)
        : (e = (this.getDecimalForValue(t[1]) - i) / 2),
      (r = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (s = r)
        : (s = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
    const a = t.length < 3 ? 0.5 : 0.25;
    (e = Ot(e, 0, a)),
      (s = Ot(s, 0, a)),
      (this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      s = this.max,
      i = this.options,
      r = i.time,
      a = r.unit || yl(r.minUnit, e, s, this._getLabelCapacity(e)),
      o = G(i.ticks.stepSize, 1),
      l = a === 'week' ? r.isoWeekday : !1,
      c = Fn(l) || l === !0,
      u = {};
    let d = e,
      h,
      g;
    if (
      (c && (d = +t.startOf(d, 'isoWeek', l)),
      (d = +t.startOf(d, c ? 'day' : a)),
      t.diff(s, e, a) > 1e5 * o)
    )
      throw new Error(
        e + ' and ' + s + ' are too far apart with stepSize of ' + o + ' ' + a,
      );
    const f = i.ticks.source === 'data' && this.getDataTimestamps();
    for (h = d, g = 0; h < s; h = +t.add(h, o, a), g++) xl(u, h, f);
    return (
      (h === s || i.bounds === 'ticks' || g === 1) && xl(u, h, f),
      Object.keys(u)
        .sort(_l)
        .map((p) => +p)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? e.format(t, s.tooltipFormat)
      : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const i = this.options.time.displayFormats,
      r = this._unit,
      a = e || i[r];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, e, s, i) {
    const r = this.options,
      a = r.ticks.callback;
    if (a) return ut(a, [t, e, s], this);
    const o = r.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && o[l],
      d = c && o[c],
      h = s[e],
      g = c && d && h && h.major;
    return this._adapter.format(t, i || (g ? d : u));
  }
  generateTickLabels(t) {
    let e, s, i;
    for (e = 0, s = t.length; e < s; ++e)
      (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      s = this.ctx.measureText(t).width,
      i = te(this.isHorizontal() ? e.maxRotation : e.minRotation),
      r = Math.cos(i),
      a = Math.sin(i),
      o = this._resolveTickFontOptions(0).size;
    return { w: s * r + o * a, h: s * a + o * r };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      s = e.displayFormats,
      i = s[e.unit] || s.millisecond,
      r = this._tickFormatFunction(t, 0, wl(this, [t], this._majorUnit), i),
      a = this._getLabelSize(r),
      o =
        Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) -
        1;
    return o > 0 ? o : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      s;
    if (t.length) return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (e = 0, s = i.length; e < s; ++e)
      t = t.concat(i[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length) return t;
    const i = this.getLabels();
    for (e = 0, s = i.length; e < s; ++e) t.push(vl(this, i[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Tc(t.sort(_l));
  }
}
M(Ps, 'id', 'time'),
  M(Ps, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  });
function Zs(n, t, e) {
  let s = 0,
    i = n.length - 1,
    r,
    a,
    o,
    l;
  e
    ? (t >= n[s].pos && t <= n[i].pos && ({ lo: s, hi: i } = Oe(n, 'pos', t)),
      ({ pos: r, time: o } = n[s]),
      ({ pos: a, time: l } = n[i]))
    : (t >= n[s].time &&
        t <= n[i].time &&
        ({ lo: s, hi: i } = Oe(n, 'time', t)),
      ({ time: r, pos: o } = n[s]),
      ({ time: a, pos: l } = n[i]));
  const c = a - r;
  return c ? o + ((l - o) * (t - r)) / c : o;
}
class Xr extends Ps {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = Zs(e, this.min)),
      (this._tableRange = Zs(e, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this,
      i = [],
      r = [];
    let a, o, l, c, u;
    for (a = 0, o = t.length; a < o; ++a)
      (c = t[a]), c >= e && c <= s && i.push(c);
    if (i.length < 2)
      return [
        { time: e, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (a = 0, o = i.length; a < o; ++a)
      (u = i[a + 1]),
        (l = i[a - 1]),
        (c = i[a]),
        Math.round((u + l) / 2) !== c && r.push({ time: c, pos: a / (o - 1) });
    return r;
  }
  _generate() {
    const t = this.min,
      e = this.max;
    let s = super.getDataTimestamps();
    return (
      (!s.includes(t) || !s.length) && s.splice(0, 0, t),
      (!s.includes(e) || s.length === 1) && s.push(e),
      s.sort((i, r) => i - r)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      e.length && s.length
        ? (t = this.normalize(e.concat(s)))
        : (t = e.length ? e : s),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Zs(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Zs(this._table, s * this._tableRange + this._minPos, !0);
  }
}
M(Xr, 'id', 'timeseries'), M(Xr, 'defaults', Ps.defaults);
var Qb = Object.freeze({
  __proto__: null,
  CategoryScale: qr,
  LinearScale: Yr,
  LogarithmicScale: Ur,
  RadialLinearScale: ls,
  TimeScale: Ps,
  TimeSeriesScale: Xr,
});
const Gb = [sp, Cm, Pb, Qb];
Ht.register(...Gb);
function bu(n, t) {
  return function () {
    return n.apply(t, arguments);
  };
}
const { toString: Kb } = Object.prototype,
  { getPrototypeOf: Ra } = Object,
  { iterator: Ki, toStringTag: _u } = Symbol,
  Ji = ((n) => (t) => {
    const e = Kb.call(t);
    return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ae = (n) => ((n = n.toLowerCase()), (t) => Ji(t) === n),
  Zi = (n) => (t) => typeof t === n,
  { isArray: Vn } = Array,
  Ts = Zi('undefined');
function Jb(n) {
  return (
    n !== null &&
    !Ts(n) &&
    n.constructor !== null &&
    !Ts(n.constructor) &&
    Vt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const vu = ae('ArrayBuffer');
function Zb(n) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(n))
      : (t = n && n.buffer && vu(n.buffer)),
    t
  );
}
const t_ = Zi('string'),
  Vt = Zi('function'),
  yu = Zi('number'),
  tr = (n) => n !== null && typeof n == 'object',
  e_ = (n) => n === !0 || n === !1,
  fi = (n) => {
    if (Ji(n) !== 'object') return !1;
    const t = Ra(n);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(_u in n) &&
      !(Ki in n)
    );
  },
  n_ = ae('Date'),
  s_ = ae('File'),
  i_ = ae('Blob'),
  r_ = ae('FileList'),
  a_ = (n) => tr(n) && Vt(n.pipe),
  o_ = (n) => {
    let t;
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        (Vt(n.append) &&
          ((t = Ji(n)) === 'formdata' ||
            (t === 'object' &&
              Vt(n.toString) &&
              n.toString() === '[object FormData]'))))
    );
  },
  l_ = ae('URLSearchParams'),
  [c_, u_, d_, h_] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ae,
  ),
  f_ = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Ls(n, t, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > 'u') return;
  let s, i;
  if ((typeof n != 'object' && (n = [n]), Vn(n)))
    for (s = 0, i = n.length; s < i; s++) t.call(null, n[s], s, n);
  else {
    const r = e ? Object.getOwnPropertyNames(n) : Object.keys(n),
      a = r.length;
    let o;
    for (s = 0; s < a; s++) (o = r[s]), t.call(null, n[o], o, n);
  }
}
function xu(n, t) {
  t = t.toLowerCase();
  const e = Object.keys(n);
  let s = e.length,
    i;
  for (; s-- > 0; ) if (((i = e[s]), t === i.toLowerCase())) return i;
  return null;
}
const hn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  wu = (n) => !Ts(n) && n !== hn;
function Qr() {
  const { caseless: n } = (wu(this) && this) || {},
    t = {},
    e = (s, i) => {
      const r = (n && xu(t, i)) || i;
      fi(t[r]) && fi(s)
        ? (t[r] = Qr(t[r], s))
        : fi(s)
          ? (t[r] = Qr({}, s))
          : Vn(s)
            ? (t[r] = s.slice())
            : (t[r] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Ls(arguments[s], e);
  return t;
}
const g_ = (n, t, e, { allOwnKeys: s } = {}) => (
    Ls(
      t,
      (i, r) => {
        e && Vt(i) ? (n[r] = bu(i, e)) : (n[r] = i);
      },
      { allOwnKeys: s },
    ),
    n
  ),
  p_ = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  m_ = (n, t, e, s) => {
    (n.prototype = Object.create(t.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, 'super', { value: t.prototype }),
      e && Object.assign(n.prototype, e);
  },
  b_ = (n, t, e, s) => {
    let i, r, a;
    const o = {};
    if (((t = t || {}), n == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(n), r = i.length; r-- > 0; )
        (a = i[r]), (!s || s(a, n, t)) && !o[a] && ((t[a] = n[a]), (o[a] = !0));
      n = e !== !1 && Ra(n);
    } while (n && (!e || e(n, t)) && n !== Object.prototype);
    return t;
  },
  __ = (n, t, e) => {
    (n = String(n)),
      (e === void 0 || e > n.length) && (e = n.length),
      (e -= t.length);
    const s = n.indexOf(t, e);
    return s !== -1 && s === e;
  },
  v_ = (n) => {
    if (!n) return null;
    if (Vn(n)) return n;
    let t = n.length;
    if (!yu(t)) return null;
    const e = new Array(t);
    for (; t-- > 0; ) e[t] = n[t];
    return e;
  },
  y_ = (
    (n) => (t) =>
      n && t instanceof n
  )(typeof Uint8Array < 'u' && Ra(Uint8Array)),
  x_ = (n, t) => {
    const s = (n && n[Ki]).call(n);
    let i;
    for (; (i = s.next()) && !i.done; ) {
      const r = i.value;
      t.call(n, r[0], r[1]);
    }
  },
  w_ = (n, t) => {
    let e;
    const s = [];
    for (; (e = n.exec(t)) !== null; ) s.push(e);
    return s;
  },
  k_ = ae('HTMLFormElement'),
  M_ = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, s, i) {
      return s.toUpperCase() + i;
    }),
  kl = (
    ({ hasOwnProperty: n }) =>
    (t, e) =>
      n.call(t, e)
  )(Object.prototype),
  S_ = ae('RegExp'),
  ku = (n, t) => {
    const e = Object.getOwnPropertyDescriptors(n),
      s = {};
    Ls(e, (i, r) => {
      let a;
      (a = t(i, r, n)) !== !1 && (s[r] = a || i);
    }),
      Object.defineProperties(n, s);
  },
  P_ = (n) => {
    ku(n, (t, e) => {
      if (Vt(n) && ['arguments', 'caller', 'callee'].indexOf(e) !== -1)
        return !1;
      const s = n[e];
      if (Vt(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + e + "'");
          });
      }
    });
  },
  T_ = (n, t) => {
    const e = {},
      s = (i) => {
        i.forEach((r) => {
          e[r] = !0;
        });
      };
    return Vn(n) ? s(n) : s(String(n).split(t)), e;
  },
  D_ = () => {},
  O_ = (n, t) => (n != null && Number.isFinite((n = +n)) ? n : t);
function E_(n) {
  return !!(n && Vt(n.append) && n[_u] === 'FormData' && n[Ki]);
}
const C_ = (n) => {
    const t = new Array(10),
      e = (s, i) => {
        if (tr(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            t[i] = s;
            const r = Vn(s) ? [] : {};
            return (
              Ls(s, (a, o) => {
                const l = e(a, i + 1);
                !Ts(l) && (r[o] = l);
              }),
              (t[i] = void 0),
              r
            );
          }
        }
        return s;
      };
    return e(n, 0);
  },
  A_ = ae('AsyncFunction'),
  R_ = (n) => n && (tr(n) || Vt(n)) && Vt(n.then) && Vt(n.catch),
  Mu = ((n, t) =>
    n
      ? setImmediate
      : t
        ? ((e, s) => (
            hn.addEventListener(
              'message',
              ({ source: i, data: r }) => {
                i === hn && r === e && s.length && s.shift()();
              },
              !1,
            ),
            (i) => {
              s.push(i), hn.postMessage(e, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == 'function',
    Vt(hn.postMessage),
  ),
  L_ =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(hn)
      : (typeof process < 'u' && process.nextTick) || Mu,
  F_ = (n) => n != null && Vt(n[Ki]),
  S = {
    isArray: Vn,
    isArrayBuffer: vu,
    isBuffer: Jb,
    isFormData: o_,
    isArrayBufferView: Zb,
    isString: t_,
    isNumber: yu,
    isBoolean: e_,
    isObject: tr,
    isPlainObject: fi,
    isReadableStream: c_,
    isRequest: u_,
    isResponse: d_,
    isHeaders: h_,
    isUndefined: Ts,
    isDate: n_,
    isFile: s_,
    isBlob: i_,
    isRegExp: S_,
    isFunction: Vt,
    isStream: a_,
    isURLSearchParams: l_,
    isTypedArray: y_,
    isFileList: r_,
    forEach: Ls,
    merge: Qr,
    extend: g_,
    trim: f_,
    stripBOM: p_,
    inherits: m_,
    toFlatObject: b_,
    kindOf: Ji,
    kindOfTest: ae,
    endsWith: __,
    toArray: v_,
    forEachEntry: x_,
    matchAll: w_,
    isHTMLForm: k_,
    hasOwnProperty: kl,
    hasOwnProp: kl,
    reduceDescriptors: ku,
    freezeMethods: P_,
    toObjectSet: T_,
    toCamelCase: M_,
    noop: D_,
    toFiniteNumber: O_,
    findKey: xu,
    global: hn,
    isContextDefined: wu,
    isSpecCompliantForm: E_,
    toJSONObject: C_,
    isAsyncFn: A_,
    isThenable: R_,
    setImmediate: Mu,
    asap: L_,
    isIterable: F_,
  };
function Q(n, t, e, s, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    e && (this.config = e),
    s && (this.request = s),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
S.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Su = Q.prototype,
  Pu = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((n) => {
  Pu[n] = { value: n };
});
Object.defineProperties(Q, Pu);
Object.defineProperty(Su, 'isAxiosError', { value: !0 });
Q.from = (n, t, e, s, i, r) => {
  const a = Object.create(Su);
  return (
    S.toFlatObject(
      n,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (o) => o !== 'isAxiosError',
    ),
    Q.call(a, n.message, t, e, s, i),
    (a.cause = n),
    (a.name = n.name),
    r && Object.assign(a, r),
    a
  );
};
const I_ = null;
function Gr(n) {
  return S.isPlainObject(n) || S.isArray(n);
}
function Tu(n) {
  return S.endsWith(n, '[]') ? n.slice(0, -2) : n;
}
function Ml(n, t, e) {
  return n
    ? n
        .concat(t)
        .map(function (i, r) {
          return (i = Tu(i)), !e && r ? '[' + i + ']' : i;
        })
        .join(e ? '.' : '')
    : t;
}
function N_(n) {
  return S.isArray(n) && !n.some(Gr);
}
const B_ = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function er(n, t, e) {
  if (!S.isObject(n)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (e = S.toFlatObject(
      e,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, m) {
        return !S.isUndefined(m[p]);
      },
    ));
  const s = e.metaTokens,
    i = e.visitor || u,
    r = e.dots,
    a = e.indexes,
    l = (e.Blob || (typeof Blob < 'u' && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(i)) throw new TypeError('visitor must be a function');
  function c(f) {
    if (f === null) return '';
    if (S.isDate(f)) return f.toISOString();
    if (!l && S.isBlob(f))
      throw new Q('Blob is not supported. Use a Buffer instead.');
    return S.isArrayBuffer(f) || S.isTypedArray(f)
      ? l && typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function u(f, p, m) {
    let b = f;
    if (f && !m && typeof f == 'object') {
      if (S.endsWith(p, '{}'))
        (p = s ? p : p.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (S.isArray(f) && N_(f)) ||
        ((S.isFileList(f) || S.endsWith(p, '[]')) && (b = S.toArray(f)))
      )
        return (
          (p = Tu(p)),
          b.forEach(function (x, w) {
            !(S.isUndefined(x) || x === null) &&
              t.append(
                a === !0 ? Ml([p], w, r) : a === null ? p : p + '[]',
                c(x),
              );
          }),
          !1
        );
    }
    return Gr(f) ? !0 : (t.append(Ml(m, p, r), c(f)), !1);
  }
  const d = [],
    h = Object.assign(B_, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Gr,
    });
  function g(f, p) {
    if (!S.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + p.join('.'));
      d.push(f),
        S.forEach(f, function (b, _) {
          (!(S.isUndefined(b) || b === null) &&
            i.call(t, b, S.isString(_) ? _.trim() : _, p, h)) === !0 &&
            g(b, p ? p.concat(_) : [_]);
        }),
        d.pop();
    }
  }
  if (!S.isObject(n)) throw new TypeError('data must be an object');
  return g(n), t;
}
function Sl(n) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function La(n, t) {
  (this._pairs = []), n && er(n, this, t);
}
const Du = La.prototype;
Du.append = function (t, e) {
  this._pairs.push([t, e]);
};
Du.toString = function (t) {
  const e = t
    ? function (s) {
        return t.call(this, s, Sl);
      }
    : Sl;
  return this._pairs
    .map(function (i) {
      return e(i[0]) + '=' + e(i[1]);
    }, '')
    .join('&');
};
function z_(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Ou(n, t, e) {
  if (!t) return n;
  const s = (e && e.encode) || z_;
  S.isFunction(e) && (e = { serialize: e });
  const i = e && e.serialize;
  let r;
  if (
    (i
      ? (r = i(t, e))
      : (r = S.isURLSearchParams(t) ? t.toString() : new La(t, e).toString(s)),
    r)
  ) {
    const a = n.indexOf('#');
    a !== -1 && (n = n.slice(0, a)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + r);
  }
  return n;
}
class Pl {
  constructor() {
    this.handlers = [];
  }
  use(t, e, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: e,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Eu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  W_ = typeof URLSearchParams < 'u' ? URLSearchParams : La,
  H_ = typeof FormData < 'u' ? FormData : null,
  j_ = typeof Blob < 'u' ? Blob : null,
  V_ = {
    isBrowser: !0,
    classes: { URLSearchParams: W_, FormData: H_, Blob: j_ },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Fa = typeof window < 'u' && typeof document < 'u',
  Kr = (typeof navigator == 'object' && navigator) || void 0,
  q_ =
    Fa &&
    (!Kr || ['ReactNative', 'NativeScript', 'NS'].indexOf(Kr.product) < 0),
  Y_ =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  U_ = (Fa && window.location.href) || 'http://localhost',
  $_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Fa,
        hasStandardBrowserEnv: q_,
        hasStandardBrowserWebWorkerEnv: Y_,
        navigator: Kr,
        origin: U_,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  At = { ...$_, ...V_ };
function X_(n, t) {
  return er(
    n,
    new At.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (e, s, i, r) {
          return At.isNode && S.isBuffer(e)
            ? (this.append(s, e.toString('base64')), !1)
            : r.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Q_(n) {
  return S.matchAll(/\w+|\[(\w*)]/g, n).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function G_(n) {
  const t = {},
    e = Object.keys(n);
  let s;
  const i = e.length;
  let r;
  for (s = 0; s < i; s++) (r = e[s]), (t[r] = n[r]);
  return t;
}
function Cu(n) {
  function t(e, s, i, r) {
    let a = e[r++];
    if (a === '__proto__') return !0;
    const o = Number.isFinite(+a),
      l = r >= e.length;
    return (
      (a = !a && S.isArray(i) ? i.length : a),
      l
        ? (S.hasOwnProp(i, a) ? (i[a] = [i[a], s]) : (i[a] = s), !o)
        : ((!i[a] || !S.isObject(i[a])) && (i[a] = []),
          t(e, s, i[a], r) && S.isArray(i[a]) && (i[a] = G_(i[a])),
          !o)
    );
  }
  if (S.isFormData(n) && S.isFunction(n.entries)) {
    const e = {};
    return (
      S.forEachEntry(n, (s, i) => {
        t(Q_(s), i, e, 0);
      }),
      e
    );
  }
  return null;
}
function K_(n, t, e) {
  if (S.isString(n))
    try {
      return (t || JSON.parse)(n), S.trim(n);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (e || JSON.stringify)(n);
}
const Fs = {
  transitional: Eu,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, e) {
      const s = e.getContentType() || '',
        i = s.indexOf('application/json') > -1,
        r = S.isObject(t);
      if ((r && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i ? JSON.stringify(Cu(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          e.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let o;
      if (r) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return X_(t, this.formSerializer).toString();
        if ((o = S.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return er(
            o ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return r || i ? (e.setContentType('application/json', !1), K_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const e = this.transitional || Fs.transitional,
        s = e && e.forcedJSONParsing,
        i = this.responseType === 'json';
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((s && !this.responseType) || i)) {
        const a = !(e && e.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (a)
            throw o.name === 'SyntaxError'
              ? Q.from(o, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: At.classes.FormData, Blob: At.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
S.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (n) => {
  Fs.headers[n] = {};
});
const J_ = S.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Z_ = (n) => {
    const t = {};
    let e, s, i;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (a) {
            (i = a.indexOf(':')),
              (e = a.substring(0, i).trim().toLowerCase()),
              (s = a.substring(i + 1).trim()),
              !(!e || (t[e] && J_[e])) &&
                (e === 'set-cookie'
                  ? t[e]
                    ? t[e].push(s)
                    : (t[e] = [s])
                  : (t[e] = t[e] ? t[e] + ', ' + s : s));
          }),
      t
    );
  },
  Tl = Symbol('internals');
function Jn(n) {
  return n && String(n).trim().toLowerCase();
}
function gi(n) {
  return n === !1 || n == null ? n : S.isArray(n) ? n.map(gi) : String(n);
}
function tv(n) {
  const t = Object.create(null),
    e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = e.exec(n)); ) t[s[1]] = s[2];
  return t;
}
const ev = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function xr(n, t, e, s, i) {
  if (S.isFunction(s)) return s.call(this, t, e);
  if ((i && (t = e), !!S.isString(t))) {
    if (S.isString(s)) return t.indexOf(s) !== -1;
    if (S.isRegExp(s)) return s.test(t);
  }
}
function nv(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, e, s) => e.toUpperCase() + s);
}
function sv(n, t) {
  const e = S.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(n, s + e, {
      value: function (i, r, a) {
        return this[s].call(this, t, i, r, a);
      },
      configurable: !0,
    });
  });
}
let qt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, s) {
    const i = this;
    function r(o, l, c) {
      const u = Jn(l);
      if (!u) throw new Error('header name must be a non-empty string');
      const d = S.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || l] = gi(o));
    }
    const a = (o, l) => S.forEach(o, (c, u) => r(c, u, l));
    if (S.isPlainObject(t) || t instanceof this.constructor) a(t, e);
    else if (S.isString(t) && (t = t.trim()) && !ev(t)) a(Z_(t), e);
    else if (S.isObject(t) && S.isIterable(t)) {
      let o = {},
        l,
        c;
      for (const u of t) {
        if (!S.isArray(u))
          throw TypeError('Object iterator must return a key-value pair');
        o[(c = u[0])] = (l = o[c])
          ? S.isArray(l)
            ? [...l, u[1]]
            : [l, u[1]]
          : u[1];
      }
      a(o, e);
    } else t != null && r(e, t, s);
    return this;
  }
  get(t, e) {
    if (((t = Jn(t)), t)) {
      const s = S.findKey(this, t);
      if (s) {
        const i = this[s];
        if (!e) return i;
        if (e === !0) return tv(i);
        if (S.isFunction(e)) return e.call(this, i, s);
        if (S.isRegExp(e)) return e.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, e) {
    if (((t = Jn(t)), t)) {
      const s = S.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!e || xr(this, this[s], s, e)));
    }
    return !1;
  }
  delete(t, e) {
    const s = this;
    let i = !1;
    function r(a) {
      if (((a = Jn(a)), a)) {
        const o = S.findKey(s, a);
        o && (!e || xr(s, s[o], o, e)) && (delete s[o], (i = !0));
      }
    }
    return S.isArray(t) ? t.forEach(r) : r(t), i;
  }
  clear(t) {
    const e = Object.keys(this);
    let s = e.length,
      i = !1;
    for (; s--; ) {
      const r = e[s];
      (!t || xr(this, this[r], r, t, !0)) && (delete this[r], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const e = this,
      s = {};
    return (
      S.forEach(this, (i, r) => {
        const a = S.findKey(s, r);
        if (a) {
          (e[a] = gi(i)), delete e[r];
          return;
        }
        const o = t ? nv(r) : String(r).trim();
        o !== r && delete e[r], (e[o] = gi(i)), (s[o] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = Object.create(null);
    return (
      S.forEach(this, (s, i) => {
        s != null && s !== !1 && (e[i] = t && S.isArray(s) ? s.join(', ') : s);
      }),
      e
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, e]) => t + ': ' + e).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    const s = new this(t);
    return e.forEach((i) => s.set(i)), s;
  }
  static accessor(t) {
    const s = (this[Tl] = this[Tl] = { accessors: {} }).accessors,
      i = this.prototype;
    function r(a) {
      const o = Jn(a);
      s[o] || (sv(i, a), (s[o] = !0));
    }
    return S.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
qt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
S.reduceDescriptors(qt.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(s) {
      this[e] = s;
    },
  };
});
S.freezeMethods(qt);
function wr(n, t) {
  const e = this || Fs,
    s = t || e,
    i = qt.from(s.headers);
  let r = s.data;
  return (
    S.forEach(n, function (o) {
      r = o.call(e, r, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    r
  );
}
function Au(n) {
  return !!(n && n.__CANCEL__);
}
function qn(n, t, e) {
  Q.call(this, n ?? 'canceled', Q.ERR_CANCELED, t, e),
    (this.name = 'CanceledError');
}
S.inherits(qn, Q, { __CANCEL__: !0 });
function Ru(n, t, e) {
  const s = e.config.validateStatus;
  !e.status || !s || s(e.status)
    ? n(e)
    : t(
        new Q(
          'Request failed with status code ' + e.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(e.status / 100) - 4
          ],
          e.config,
          e.request,
          e,
        ),
      );
}
function iv(n) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (t && t[1]) || '';
}
function rv(n, t) {
  n = n || 10;
  const e = new Array(n),
    s = new Array(n);
  let i = 0,
    r = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = s[r];
      a || (a = c), (e[i] = l), (s[i] = c);
      let d = r,
        h = 0;
      for (; d !== i; ) (h += e[d++]), (d = d % n);
      if (((i = (i + 1) % n), i === r && (r = (r + 1) % n), c - a < t)) return;
      const g = u && c - u;
      return g ? Math.round((h * 1e3) / g) : void 0;
    }
  );
}
function av(n, t) {
  let e = 0,
    s = 1e3 / t,
    i,
    r;
  const a = (c, u = Date.now()) => {
    (e = u), (i = null), r && (clearTimeout(r), (r = null)), n.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - e;
      d >= s
        ? a(c, u)
        : ((i = c),
          r ||
            (r = setTimeout(() => {
              (r = null), a(i);
            }, s - d)));
    },
    () => i && a(i),
  ];
}
const Ai = (n, t, e = 3) => {
    let s = 0;
    const i = rv(50, 250);
    return av((r) => {
      const a = r.loaded,
        o = r.lengthComputable ? r.total : void 0,
        l = a - s,
        c = i(l),
        u = a <= o;
      s = a;
      const d = {
        loaded: a,
        total: o,
        progress: o ? a / o : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && o && u ? (o - a) / c : void 0,
        event: r,
        lengthComputable: o != null,
        [t ? 'download' : 'upload']: !0,
      };
      n(d);
    }, e);
  },
  Dl = (n, t) => {
    const e = n != null;
    return [(s) => t[0]({ lengthComputable: e, total: n, loaded: s }), t[1]];
  },
  Ol =
    (n) =>
    (...t) =>
      S.asap(() => n(...t)),
  ov = At.hasStandardBrowserEnv
    ? ((n, t) => (e) => (
        (e = new URL(e, At.origin)),
        n.protocol === e.protocol &&
          n.host === e.host &&
          (t || n.port === e.port)
      ))(
        new URL(At.origin),
        At.navigator && /(msie|trident)/i.test(At.navigator.userAgent),
      )
    : () => !0,
  lv = At.hasStandardBrowserEnv
    ? {
        write(n, t, e, s, i, r) {
          const a = [n + '=' + encodeURIComponent(t)];
          S.isNumber(e) && a.push('expires=' + new Date(e).toGMTString()),
            S.isString(s) && a.push('path=' + s),
            S.isString(i) && a.push('domain=' + i),
            r === !0 && a.push('secure'),
            (document.cookie = a.join('; '));
        },
        read(n) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(n) {
          this.write(n, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function cv(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function uv(n, t) {
  return t ? n.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : n;
}
function Lu(n, t, e) {
  let s = !cv(t);
  return n && (s || e == !1) ? uv(n, t) : t;
}
const El = (n) => (n instanceof qt ? { ...n } : n);
function vn(n, t) {
  t = t || {};
  const e = {};
  function s(c, u, d, h) {
    return S.isPlainObject(c) && S.isPlainObject(u)
      ? S.merge.call({ caseless: h }, c, u)
      : S.isPlainObject(u)
        ? S.merge({}, u)
        : S.isArray(u)
          ? u.slice()
          : u;
  }
  function i(c, u, d, h) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c)) return s(void 0, c, d, h);
    } else return s(c, u, d, h);
  }
  function r(c, u) {
    if (!S.isUndefined(u)) return s(void 0, u);
  }
  function a(c, u) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c)) return s(void 0, c);
    } else return s(void 0, u);
  }
  function o(c, u, d) {
    if (d in t) return s(c, u);
    if (d in n) return s(void 0, c);
  }
  const l = {
    url: r,
    method: r,
    data: r,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: o,
    headers: (c, u, d) => i(El(c), El(u), d, !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, n, t)), function (u) {
      const d = l[u] || i,
        h = d(n[u], t[u], u);
      (S.isUndefined(h) && d !== o) || (e[u] = h);
    }),
    e
  );
}
const Fu = (n) => {
    const t = vn({}, n);
    let {
      data: e,
      withXSRFToken: s,
      xsrfHeaderName: i,
      xsrfCookieName: r,
      headers: a,
      auth: o,
    } = t;
    (t.headers = a = qt.from(a)),
      (t.url = Ou(
        Lu(t.baseURL, t.url, t.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer,
      )),
      o &&
        a.set(
          'Authorization',
          'Basic ' +
            btoa(
              (o.username || '') +
                ':' +
                (o.password ? unescape(encodeURIComponent(o.password)) : ''),
            ),
        );
    let l;
    if (S.isFormData(e)) {
      if (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv)
        a.setContentType(void 0);
      else if ((l = a.getContentType()) !== !1) {
        const [c, ...u] = l
          ? l
              .split(';')
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        a.setContentType([c || 'multipart/form-data', ...u].join('; '));
      }
    }
    if (
      At.hasStandardBrowserEnv &&
      (s && S.isFunction(s) && (s = s(t)), s || (s !== !1 && ov(t.url)))
    ) {
      const c = i && r && lv.read(r);
      c && a.set(i, c);
    }
    return t;
  },
  dv = typeof XMLHttpRequest < 'u',
  hv =
    dv &&
    function (n) {
      return new Promise(function (e, s) {
        const i = Fu(n);
        let r = i.data;
        const a = qt.from(i.headers).normalize();
        let { responseType: o, onUploadProgress: l, onDownloadProgress: c } = i,
          u,
          d,
          h,
          g,
          f;
        function p() {
          g && g(),
            f && f(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener('abort', u);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function b() {
          if (!m) return;
          const x = qt.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            y = {
              data:
                !o || o === 'text' || o === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: x,
              config: n,
              request: m,
            };
          Ru(
            function (T) {
              e(T), p();
            },
            function (T) {
              s(T), p();
            },
            y,
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = b)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(b);
            }),
          (m.onabort = function () {
            m &&
              (s(new Q('Request aborted', Q.ECONNABORTED, n, m)), (m = null));
          }),
          (m.onerror = function () {
            s(new Q('Network Error', Q.ERR_NETWORK, n, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let w = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const y = i.transitional || Eu;
            i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
              s(
                new Q(
                  w,
                  y.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  n,
                  m,
                ),
              ),
              (m = null);
          }),
          r === void 0 && a.setContentType(null),
          'setRequestHeader' in m &&
            S.forEach(a.toJSON(), function (w, y) {
              m.setRequestHeader(y, w);
            }),
          S.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          o && o !== 'json' && (m.responseType = i.responseType),
          c && (([h, f] = Ai(c, !0)), m.addEventListener('progress', h)),
          l &&
            m.upload &&
            (([d, g] = Ai(l)),
            m.upload.addEventListener('progress', d),
            m.upload.addEventListener('loadend', g)),
          (i.cancelToken || i.signal) &&
            ((u = (x) => {
              m &&
                (s(!x || x.type ? new qn(null, n, m) : x),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener('abort', u)));
        const _ = iv(i.url);
        if (_ && At.protocols.indexOf(_) === -1) {
          s(new Q('Unsupported protocol ' + _ + ':', Q.ERR_BAD_REQUEST, n));
          return;
        }
        m.send(r || null);
      });
    },
  fv = (n, t) => {
    const { length: e } = (n = n ? n.filter(Boolean) : []);
    if (t || e) {
      let s = new AbortController(),
        i;
      const r = function (c) {
        if (!i) {
          (i = !0), o();
          const u = c instanceof Error ? c : this.reason;
          s.abort(
            u instanceof Q ? u : new qn(u instanceof Error ? u.message : u),
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), r(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
        }, t);
      const o = () => {
        n &&
          (a && clearTimeout(a),
          (a = null),
          n.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(r)
              : c.removeEventListener('abort', r);
          }),
          (n = null));
      };
      n.forEach((c) => c.addEventListener('abort', r));
      const { signal: l } = s;
      return (l.unsubscribe = () => S.asap(o)), l;
    }
  },
  gv = function* (n, t) {
    let e = n.byteLength;
    if (e < t) {
      yield n;
      return;
    }
    let s = 0,
      i;
    for (; s < e; ) (i = s + t), yield n.slice(s, i), (s = i);
  },
  pv = async function* (n, t) {
    for await (const e of mv(n)) yield* gv(e, t);
  },
  mv = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const t = n.getReader();
    try {
      for (;;) {
        const { done: e, value: s } = await t.read();
        if (e) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  Cl = (n, t, e, s) => {
    const i = pv(n, t);
    let r = 0,
      a,
      o = (l) => {
        a || ((a = !0), s && s(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: u } = await i.next();
            if (c) {
              o(), l.close();
              return;
            }
            let d = u.byteLength;
            if (e) {
              let h = (r += d);
              e(h);
            }
            l.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (o(c), c);
          }
        },
        cancel(l) {
          return o(l), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  nr =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Iu = nr && typeof ReadableStream == 'function',
  bv =
    nr &&
    (typeof TextEncoder == 'function'
      ? (
          (n) => (t) =>
            n.encode(t)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Nu = (n, ...t) => {
    try {
      return !!n(...t);
    } catch {
      return !1;
    }
  },
  _v =
    Iu &&
    Nu(() => {
      let n = !1;
      const t = new Request(At.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (n = !0), 'half';
        },
      }).headers.has('Content-Type');
      return n && !t;
    }),
  Al = 64 * 1024,
  Jr = Iu && Nu(() => S.isReadableStream(new Response('').body)),
  Ri = { stream: Jr && ((n) => n.body) };
nr &&
  ((n) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Ri[t] &&
        (Ri[t] = S.isFunction(n[t])
          ? (e) => e[t]()
          : (e, s) => {
              throw new Q(
                `Response type '${t}' is not supported`,
                Q.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const vv = async (n) => {
    if (n == null) return 0;
    if (S.isBlob(n)) return n.size;
    if (S.isSpecCompliantForm(n))
      return (
        await new Request(At.origin, { method: 'POST', body: n }).arrayBuffer()
      ).byteLength;
    if (S.isArrayBufferView(n) || S.isArrayBuffer(n)) return n.byteLength;
    if ((S.isURLSearchParams(n) && (n = n + ''), S.isString(n)))
      return (await bv(n)).byteLength;
  },
  yv = async (n, t) => {
    const e = S.toFiniteNumber(n.getContentLength());
    return e ?? vv(t);
  },
  xv =
    nr &&
    (async (n) => {
      let {
        url: t,
        method: e,
        data: s,
        signal: i,
        cancelToken: r,
        timeout: a,
        onDownloadProgress: o,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = 'same-origin',
        fetchOptions: h,
      } = Fu(n);
      c = c ? (c + '').toLowerCase() : 'text';
      let g = fv([i, r && r.toAbortSignal()], a),
        f;
      const p =
        g &&
        g.unsubscribe &&
        (() => {
          g.unsubscribe();
        });
      let m;
      try {
        if (
          l &&
          _v &&
          e !== 'get' &&
          e !== 'head' &&
          (m = await yv(u, s)) !== 0
        ) {
          let y = new Request(t, { method: 'POST', body: s, duplex: 'half' }),
            D;
          if (
            (S.isFormData(s) &&
              (D = y.headers.get('content-type')) &&
              u.setContentType(D),
            y.body)
          ) {
            const [T, k] = Dl(m, Ai(Ol(l)));
            s = Cl(y.body, Al, T, k);
          }
        }
        S.isString(d) || (d = d ? 'include' : 'omit');
        const b = 'credentials' in Request.prototype;
        f = new Request(t, {
          ...h,
          signal: g,
          method: e.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: b ? d : void 0,
        });
        let _ = await fetch(f);
        const x = Jr && (c === 'stream' || c === 'response');
        if (Jr && (o || (x && p))) {
          const y = {};
          ['status', 'statusText', 'headers'].forEach((O) => {
            y[O] = _[O];
          });
          const D = S.toFiniteNumber(_.headers.get('content-length')),
            [T, k] = (o && Dl(D, Ai(Ol(o), !0))) || [];
          _ = new Response(
            Cl(_.body, Al, T, () => {
              k && k(), p && p();
            }),
            y,
          );
        }
        c = c || 'text';
        let w = await Ri[S.findKey(Ri, c) || 'text'](_, n);
        return (
          !x && p && p(),
          await new Promise((y, D) => {
            Ru(y, D, {
              data: w,
              headers: qt.from(_.headers),
              status: _.status,
              statusText: _.statusText,
              config: n,
              request: f,
            });
          })
        );
      } catch (b) {
        throw (
          (p && p(),
          b && b.name === 'TypeError' && /Load failed|fetch/i.test(b.message)
            ? Object.assign(new Q('Network Error', Q.ERR_NETWORK, n, f), {
                cause: b.cause || b,
              })
            : Q.from(b, b && b.code, n, f))
        );
      }
    }),
  Zr = { http: I_, xhr: hv, fetch: xv };
S.forEach(Zr, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: t });
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: t });
  }
});
const Rl = (n) => `- ${n}`,
  wv = (n) => S.isFunction(n) || n === null || n === !1,
  Bu = {
    getAdapter: (n) => {
      n = S.isArray(n) ? n : [n];
      const { length: t } = n;
      let e, s;
      const i = {};
      for (let r = 0; r < t; r++) {
        e = n[r];
        let a;
        if (
          ((s = e),
          !wv(e) && ((s = Zr[(a = String(e)).toLowerCase()]), s === void 0))
        )
          throw new Q(`Unknown adapter '${a}'`);
        if (s) break;
        i[a || '#' + r] = s;
      }
      if (!s) {
        const r = Object.entries(i).map(
          ([o, l]) =>
            `adapter ${o} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let a = t
          ? r.length > 1
            ? `since :
` +
              r.map(Rl).join(`
`)
            : ' ' + Rl(r[0])
          : 'as no adapter specified';
        throw new Q(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT',
        );
      }
      return s;
    },
    adapters: Zr,
  };
function kr(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new qn(null, n);
}
function Ll(n) {
  return (
    kr(n),
    (n.headers = qt.from(n.headers)),
    (n.data = wr.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    Bu.getAdapter(n.adapter || Fs.adapter)(n).then(
      function (s) {
        return (
          kr(n),
          (s.data = wr.call(n, n.transformResponse, s)),
          (s.headers = qt.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Au(s) ||
            (kr(n),
            s &&
              s.response &&
              ((s.response.data = wr.call(n, n.transformResponse, s.response)),
              (s.response.headers = qt.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const zu = '1.9.0',
  sr = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, t) => {
    sr[n] = function (s) {
      return typeof s === n || 'a' + (t < 1 ? 'n ' : ' ') + n;
    };
  },
);
const Fl = {};
sr.transitional = function (t, e, s) {
  function i(r, a) {
    return (
      '[Axios v' +
      zu +
      "] Transitional option '" +
      r +
      "'" +
      a +
      (s ? '. ' + s : '')
    );
  }
  return (r, a, o) => {
    if (t === !1)
      throw new Q(
        i(a, ' has been removed' + (e ? ' in ' + e : '')),
        Q.ERR_DEPRECATED,
      );
    return (
      e &&
        !Fl[a] &&
        ((Fl[a] = !0),
        console.warn(
          i(
            a,
            ' has been deprecated since v' +
              e +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(r, a, o) : !0
    );
  };
};
sr.spelling = function (t) {
  return (e, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function kv(n, t, e) {
  if (typeof n != 'object')
    throw new Q('options must be an object', Q.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let i = s.length;
  for (; i-- > 0; ) {
    const r = s[i],
      a = t[r];
    if (a) {
      const o = n[r],
        l = o === void 0 || a(o, r, n);
      if (l !== !0)
        throw new Q('option ' + r + ' must be ' + l, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0) throw new Q('Unknown option ' + r, Q.ERR_BAD_OPTION);
  }
}
const pi = { assertOptions: kv, validators: sr },
  le = pi.validators;
let mn = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Pl(), response: new Pl() });
  }
  async request(t, e) {
    try {
      return await this._request(t, e);
    } catch (s) {
      if (s instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const r = i.stack ? i.stack.replace(/^.+\n/, '') : '';
        try {
          s.stack
            ? r &&
              !String(s.stack).endsWith(r.replace(/^.+\n.+\n/, '')) &&
              (s.stack +=
                `
` + r)
            : (s.stack = r);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, e) {
    typeof t == 'string' ? ((e = e || {}), (e.url = t)) : (e = t || {}),
      (e = vn(this.defaults, e));
    const { transitional: s, paramsSerializer: i, headers: r } = e;
    s !== void 0 &&
      pi.assertOptions(
        s,
        {
          silentJSONParsing: le.transitional(le.boolean),
          forcedJSONParsing: le.transitional(le.boolean),
          clarifyTimeoutError: le.transitional(le.boolean),
        },
        !1,
      ),
      i != null &&
        (S.isFunction(i)
          ? (e.paramsSerializer = { serialize: i })
          : pi.assertOptions(
              i,
              { encode: le.function, serialize: le.function },
              !0,
            )),
      e.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (e.allowAbsoluteUrls = !0)),
      pi.assertOptions(
        e,
        {
          baseUrl: le.spelling('baseURL'),
          withXsrfToken: le.spelling('withXSRFToken'),
        },
        !0,
      ),
      (e.method = (e.method || this.defaults.method || 'get').toLowerCase());
    let a = r && S.merge(r.common, r[e.method]);
    r &&
      S.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (f) => {
          delete r[f];
        },
      ),
      (e.headers = qt.concat(a, r));
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function (p) {
      (typeof p.runWhen == 'function' && p.runWhen(e) === !1) ||
        ((l = l && p.synchronous), o.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u,
      d = 0,
      h;
    if (!l) {
      const f = [Ll.bind(this), void 0];
      for (
        f.unshift.apply(f, o),
          f.push.apply(f, c),
          h = f.length,
          u = Promise.resolve(e);
        d < h;

      )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    h = o.length;
    let g = e;
    for (d = 0; d < h; ) {
      const f = o[d++],
        p = o[d++];
      try {
        g = f(g);
      } catch (m) {
        p.call(this, m);
        break;
      }
    }
    try {
      u = Ll.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = vn(this.defaults, t);
    const e = Lu(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ou(e, t.params, t.paramsSerializer);
  }
};
S.forEach(['delete', 'get', 'head', 'options'], function (t) {
  mn.prototype[t] = function (e, s) {
    return this.request(
      vn(s || {}, { method: t, url: e, data: (s || {}).data }),
    );
  };
});
S.forEach(['post', 'put', 'patch'], function (t) {
  function e(s) {
    return function (r, a, o) {
      return this.request(
        vn(o || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: r,
          data: a,
        }),
      );
    };
  }
  (mn.prototype[t] = e()), (mn.prototype[t + 'Form'] = e(!0));
});
let Mv = class Wu {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let e;
    this.promise = new Promise(function (r) {
      e = r;
    });
    const s = this;
    this.promise.then((i) => {
      if (!s._listeners) return;
      let r = s._listeners.length;
      for (; r-- > 0; ) s._listeners[r](i);
      s._listeners = null;
    }),
      (this.promise.then = (i) => {
        let r;
        const a = new Promise((o) => {
          s.subscribe(o), (r = o);
        }).then(i);
        return (
          (a.cancel = function () {
            s.unsubscribe(r);
          }),
          a
        );
      }),
      t(function (r, a, o) {
        s.reason || ((s.reason = new qn(r, a, o)), e(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const e = this._listeners.indexOf(t);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      e = (s) => {
        t.abort(s);
      };
    return (
      this.subscribe(e),
      (t.signal.unsubscribe = () => this.unsubscribe(e)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Wu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Sv(n) {
  return function (e) {
    return n.apply(null, e);
  };
}
function Pv(n) {
  return S.isObject(n) && n.isAxiosError === !0;
}
const ta = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ta).forEach(([n, t]) => {
  ta[t] = n;
});
function Hu(n) {
  const t = new mn(n),
    e = bu(mn.prototype.request, t);
  return (
    S.extend(e, mn.prototype, t, { allOwnKeys: !0 }),
    S.extend(e, t, null, { allOwnKeys: !0 }),
    (e.create = function (i) {
      return Hu(vn(n, i));
    }),
    e
  );
}
const st = Hu(Fs);
st.Axios = mn;
st.CanceledError = qn;
st.CancelToken = Mv;
st.isCancel = Au;
st.VERSION = zu;
st.toFormData = er;
st.AxiosError = Q;
st.Cancel = st.CanceledError;
st.all = function (t) {
  return Promise.all(t);
};
st.spread = Sv;
st.isAxiosError = Pv;
st.mergeConfig = vn;
st.AxiosHeaders = qt;
st.formToJSON = (n) => Cu(S.isHTMLForm(n) ? new FormData(n) : n);
st.getAdapter = Bu.getAdapter;
st.HttpStatusCode = ta;
st.default = st;
const {
  Axios: Pw,
  AxiosError: Tw,
  CanceledError: Dw,
  isCancel: Ow,
  CancelToken: Ew,
  VERSION: Cw,
  all: Aw,
  Cancel: Rw,
  isAxiosError: Lw,
  spread: Fw,
  toFormData: Iw,
  AxiosHeaders: Nw,
  HttpStatusCode: Bw,
  formToJSON: zw,
  getAdapter: Ww,
  mergeConfig: Hw,
} = st;
var Tv = z('<p> </p>'),
  Dv = z(
    '<div class="parent svelte-nhan8g"><div class="div1 svelte-nhan8g"><p class="main svelte-nhan8g">Top Batches Sold</p></div> <div class="div2 svelte-nhan8g"><canvas width="400" height="400" class="svelte-nhan8g"></canvas></div> <div class="div5 svelte-nhan8g"><p class="main1 svelte-nhan8g">Top Batches Sold:</p> <!></div></div>',
  );
function ea(n, t) {
  ie(t, !1);
  let e = Cn(),
    s,
    i = Cn([]),
    r = Cn([]),
    a = {
      labels: [],
      datasets: [
        {
          label: 'Items Sold',
          data: [],
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#ffce56',
            '#cc65fe',
            '#2ecc71',
          ],
        },
      ],
    },
    o = zh(t, 'type', 8, 'pie');
  async function l() {
    try {
      const p = (
        await st.get('http://localhost:3000/api/data/top/five/batches')
      ).data;
      C(
        i,
        p.map((m) => m.batchcode),
      ),
        C(
          r,
          p.map((m) => m.total_sold),
        ),
        (a.labels = v(i)),
        (a.datasets[0].data = v(r)),
        s && s.destroy(),
        (s = new Ht(v(e), {
          type: o(),
          data: a,
          options: { responsive: !0, maintainAspectRatio: !1 },
        }));
    } catch (f) {
      console.error('Error fetching data:', f);
    }
  }
  ye(() => {
    l();
  }),
    _c();
  var c = Dv(),
    u = A(P(c), 2),
    d = P(u);
  jn(
    d,
    (f) => C(e, f),
    () => v(e),
  );
  var h = A(u, 2),
    g = A(P(h), 2);
  _e(
    g,
    1,
    () => v(i),
    Cs,
    (f, p, m) => {
      var b = Tv(),
        _ = P(b);
      ot(() => j(_, `${v(p) ?? ''}: ${v(r)[m] ?? ''}`)), N(f, b);
    },
  ),
    N(n, c),
    re();
}
var Ov = z('<div><p><strong> </strong></p> <p> </p> <p> </p> <p> </p></div>'),
  Ev = z(
    '<div class="card green svelte-12l8rrg"><p><strong>No expired items</strong></p> <p>Inventory is healthy</p></div>',
  ),
  Cv = z(
    '<div class="parent svelte-12l8rrg"><div class="div1 svelte-12l8rrg"><p class="main svelte-12l8rrg"> </p></div> <div class="div2 svelte-12l8rrg"><!></div></div>',
  );
function ju(n, t) {
  ie(t, !1);
  let e = Cn(null),
    s = Cn([]);
  async function i() {
    var b;
    const m = await st.get('http://localhost:3000/api/data/expired/total');
    C(e, ((b = m.data) == null ? void 0 : b.total_expired_qty) ?? 0);
  }
  async function r() {
    try {
      const m = await st.get('http://localhost:3000/api/data/expired');
      C(s, m.data);
    } catch (m) {
      console.error('Error fetching expired items:', m);
    }
  }
  ye(() => {
    i(), r();
  });
  function a(m) {
    return m > 90 ? 'card red' : m > 30 ? 'card orange' : 'card yellow';
  }
  function o(m) {
    const b = new Date(m);
    return Math.floor((new Date() - b) / (1e3 * 60 * 60 * 24));
  }
  _c();
  var l = Cv(),
    c = P(l),
    u = P(c),
    d = P(u),
    h = A(c, 2),
    g = P(h);
  {
    var f = (m) => {
        var b = Sh(),
          _ = tn(b);
        _e(
          _,
          1,
          () => v(s),
          Cs,
          (x, w) => {
            var y = Ov(),
              D = P(y),
              T = P(D),
              k = P(T),
              O = A(D, 2),
              L = P(O),
              R = A(O, 2),
              E = P(R),
              W = A(R, 2),
              Z = P(W);
            ot(
              (U, q) => {
                Et(y, 1, U, 'svelte-12l8rrg'),
                  j(k, v(w).itemname),
                  j(L, `Batch: ${v(w).batchcode ?? ''}`),
                  j(E, `Qty: ${v(w).qty ?? ''}`),
                  j(Z, `Expired: ${q ?? ''} days ago`);
              },
              [() => ce(a(o(v(w).expiry))), () => o(v(w).expiry)],
              ua,
            ),
              N(x, y);
          },
        ),
          N(m, b);
      },
      p = (m) => {
        var b = Ev();
        N(m, b);
      };
    dt(g, (m) => {
      v(s).length > 0 ? m(f) : m(p, !1);
    });
  }
  ot(() => j(d, `Total Expired Items: ${v(e) ?? ''}`)), N(n, l), re();
}
const Vu = 6048e5,
  Av = 864e5,
  Is = 6e4,
  Ns = 36e5,
  Rv = 1e3,
  Il = Symbol.for('constructDateFrom');
function yt(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && Il in n
      ? n[Il](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function X(n, t) {
  return yt(t || n, n);
}
function ir(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in);
  return isNaN(t)
    ? yt((e == null ? void 0 : e.in) || n, NaN)
    : (t && s.setDate(s.getDate() + t), s);
}
function Ia(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in);
  if (isNaN(t)) return yt(n, NaN);
  if (!t) return s;
  const i = s.getDate(),
    r = yt(n, s.getTime());
  r.setMonth(s.getMonth() + t + 1, 0);
  const a = r.getDate();
  return i >= a ? r : (s.setFullYear(r.getFullYear(), r.getMonth(), i), s);
}
function Na(n, t, e) {
  return yt(n, +X(n) + t);
}
function Lv(n, t, e) {
  return Na(n, t * Ns);
}
let Fv = {};
function wn() {
  return Fv;
}
function ve(n, t) {
  var o, l, c, u;
  const e = wn(),
    s =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      e.weekStartsOn ??
      ((u = (c = e.locale) == null ? void 0 : c.options) == null
        ? void 0
        : u.weekStartsOn) ??
      0,
    i = X(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? 7 : 0) + r - s;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function Bn(n, t) {
  return ve(n, { ...t, weekStartsOn: 1 });
}
function qu(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = yt(e, 0);
  i.setFullYear(s + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const r = Bn(i),
    a = yt(e, 0);
  a.setFullYear(s, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Bn(a);
  return e.getTime() >= r.getTime()
    ? s + 1
    : e.getTime() >= o.getTime()
      ? s
      : s - 1;
}
function Li(n) {
  const t = X(n),
    e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return e.setUTCFullYear(t.getFullYear()), +n - +e;
}
function kn(n, ...t) {
  const e = yt.bind(
    null,
    t.find((s) => typeof s == 'object'),
  );
  return t.map(e);
}
function na(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setHours(0, 0, 0, 0), e;
}
function Yu(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t),
    r = na(s),
    a = na(i),
    o = +r - Li(r),
    l = +a - Li(a);
  return Math.round((o - l) / Av);
}
function Iv(n, t) {
  const e = qu(n, t),
    s = yt(n, 0);
  return s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0), Bn(s);
}
function Nv(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in);
  return s.setTime(s.getTime() + t * Is), s;
}
function Bv(n, t, e) {
  return Ia(n, t * 3, e);
}
function zv(n, t, e) {
  return Na(n, t * 1e3);
}
function Wv(n, t, e) {
  return ir(n, t * 7, e);
}
function Hv(n, t, e) {
  return Ia(n, t * 12, e);
}
function ps(n, t) {
  const e = +X(n) - +X(t);
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function jv(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' &&
      Object.prototype.toString.call(n) === '[object Date]')
  );
}
function Uu(n) {
  return !((!jv(n) && typeof n != 'number') || isNaN(+X(n)));
}
function Vv(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t),
    r = s.getFullYear() - i.getFullYear(),
    a = s.getMonth() - i.getMonth();
  return r * 12 + a;
}
function qv(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t);
  return s.getFullYear() - i.getFullYear();
}
function $u(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t),
    r = Nl(s, i),
    a = Math.abs(Yu(s, i));
  s.setDate(s.getDate() - r * a);
  const o = +(Nl(s, i) === -r),
    l = r * (a - o);
  return l === 0 ? 0 : l;
}
function Nl(n, t) {
  const e =
    n.getFullYear() - t.getFullYear() ||
    n.getMonth() - t.getMonth() ||
    n.getDate() - t.getDate() ||
    n.getHours() - t.getHours() ||
    n.getMinutes() - t.getMinutes() ||
    n.getSeconds() - t.getSeconds() ||
    n.getMilliseconds() - t.getMilliseconds();
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function Bs(n) {
  return (t) => {
    const s = (n ? Math[n] : Math.trunc)(t);
    return s === 0 ? 0 : s;
  };
}
function Yv(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t),
    r = (+s - +i) / Ns;
  return Bs(e == null ? void 0 : e.roundingMethod)(r);
}
function Ba(n, t) {
  return +X(n) - +X(t);
}
function Uv(n, t, e) {
  const s = Ba(n, t) / Is;
  return Bs(e == null ? void 0 : e.roundingMethod)(s);
}
function Xu(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setHours(23, 59, 59, 999), e;
}
function Qu(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), s + 1, 0), e.setHours(23, 59, 59, 999), e
  );
}
function $v(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return +Xu(e, t) == +Qu(e, t);
}
function Gu(n, t, e) {
  const [s, i, r] = kn(e == null ? void 0 : e.in, n, n, t),
    a = ps(i, r),
    o = Math.abs(Vv(i, r));
  if (o < 1) return 0;
  i.getMonth() === 1 && i.getDate() > 27 && i.setDate(30),
    i.setMonth(i.getMonth() - a * o);
  let l = ps(i, r) === -a;
  $v(s) && o === 1 && ps(s, r) === 1 && (l = !1);
  const c = a * (o - +l);
  return c === 0 ? 0 : c;
}
function Xv(n, t, e) {
  const s = Gu(n, t, e) / 3;
  return Bs(e == null ? void 0 : e.roundingMethod)(s);
}
function Qv(n, t, e) {
  const s = Ba(n, t) / 1e3;
  return Bs(e == null ? void 0 : e.roundingMethod)(s);
}
function Gv(n, t, e) {
  const s = $u(n, t, e) / 7;
  return Bs(e == null ? void 0 : e.roundingMethod)(s);
}
function Kv(n, t, e) {
  const [s, i] = kn(e == null ? void 0 : e.in, n, t),
    r = ps(s, i),
    a = Math.abs(qv(s, i));
  s.setFullYear(1584), i.setFullYear(1584);
  const o = ps(s, i) === -r,
    l = r * (a - +o);
  return l === 0 ? 0 : l;
}
function Jv(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3);
  return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
}
function Zv(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function t0(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getFullYear();
  return e.setFullYear(s + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
function Ku(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function e0(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setMinutes(59, 59, 999), e;
}
function n0(n, t) {
  var o, l;
  const e = wn(),
    s =
      e.weekStartsOn ??
      ((l = (o = e.locale) == null ? void 0 : o.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    i = X(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? -7 : 0) + 6 - (r - s);
  return i.setDate(i.getDate() + a), i.setHours(23, 59, 59, 999), i;
}
function s0(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setSeconds(59, 999), e;
}
function i0(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3) + 3;
  return e.setMonth(i, 0), e.setHours(23, 59, 59, 999), e;
}
function r0(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(999), e;
}
const a0 = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  o0 = (n, t, e) => {
    let s;
    const i = a0[n];
    return (
      typeof i == 'string'
        ? (s = i)
        : t === 1
          ? (s = i.one)
          : (s = i.other.replace('{{count}}', t.toString())),
      e != null && e.addSuffix
        ? e.comparison && e.comparison > 0
          ? 'in ' + s
          : s + ' ago'
        : s
    );
  };
function Mr(n) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const l0 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  c0 = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  u0 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  d0 = {
    date: Mr({ formats: l0, defaultWidth: 'full' }),
    time: Mr({ formats: c0, defaultWidth: 'full' }),
    dateTime: Mr({ formats: u0, defaultWidth: 'full' }),
  },
  h0 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  f0 = (n, t, e, s) => h0[n];
function Zn(n) {
  return (t, e) => {
    const s = e != null && e.context ? String(e.context) : 'standalone';
    let i;
    if (s === 'formatting' && n.formattingValues) {
      const a = n.defaultFormattingWidth || n.defaultWidth,
        o = e != null && e.width ? String(e.width) : a;
      i = n.formattingValues[o] || n.formattingValues[a];
    } else {
      const a = n.defaultWidth,
        o = e != null && e.width ? String(e.width) : n.defaultWidth;
      i = n.values[o] || n.values[a];
    }
    const r = n.argumentCallback ? n.argumentCallback(t) : t;
    return i[r];
  };
}
const g0 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  p0 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  m0 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  b0 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  _0 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  v0 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  y0 = (n, t) => {
    const e = Number(n),
      s = e % 100;
    if (s > 20 || s < 10)
      switch (s % 10) {
        case 1:
          return e + 'st';
        case 2:
          return e + 'nd';
        case 3:
          return e + 'rd';
      }
    return e + 'th';
  },
  x0 = {
    ordinalNumber: y0,
    era: Zn({ values: g0, defaultWidth: 'wide' }),
    quarter: Zn({
      values: p0,
      defaultWidth: 'wide',
      argumentCallback: (n) => n - 1,
    }),
    month: Zn({ values: m0, defaultWidth: 'wide' }),
    day: Zn({ values: b0, defaultWidth: 'wide' }),
    dayPeriod: Zn({
      values: _0,
      defaultWidth: 'wide',
      formattingValues: v0,
      defaultFormattingWidth: 'wide',
    }),
  };
function ts(n) {
  return (t, e = {}) => {
    const s = e.width,
      i = (s && n.matchPatterns[s]) || n.matchPatterns[n.defaultMatchWidth],
      r = t.match(i);
    if (!r) return null;
    const a = r[0],
      o = (s && n.parsePatterns[s]) || n.parsePatterns[n.defaultParseWidth],
      l = Array.isArray(o) ? k0(o, (d) => d.test(a)) : w0(o, (d) => d.test(a));
    let c;
    (c = n.valueCallback ? n.valueCallback(l) : l),
      (c = e.valueCallback ? e.valueCallback(c) : c);
    const u = t.slice(a.length);
    return { value: c, rest: u };
  };
}
function w0(n, t) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e])) return e;
}
function k0(n, t) {
  for (let e = 0; e < n.length; e++) if (t(n[e])) return e;
}
function M0(n) {
  return (t, e = {}) => {
    const s = t.match(n.matchPattern);
    if (!s) return null;
    const i = s[0],
      r = t.match(n.parsePattern);
    if (!r) return null;
    let a = n.valueCallback ? n.valueCallback(r[0]) : r[0];
    a = e.valueCallback ? e.valueCallback(a) : a;
    const o = t.slice(i.length);
    return { value: a, rest: o };
  };
}
const S0 = /^(\d+)(th|st|nd|rd)?/i,
  P0 = /\d+/i,
  T0 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  D0 = { any: [/^b/i, /^(a|c)/i] },
  O0 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  E0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  C0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  A0 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  R0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  L0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  F0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  I0 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  N0 = {
    ordinalNumber: M0({
      matchPattern: S0,
      parsePattern: P0,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: ts({
      matchPatterns: T0,
      defaultMatchWidth: 'wide',
      parsePatterns: D0,
      defaultParseWidth: 'any',
    }),
    quarter: ts({
      matchPatterns: O0,
      defaultMatchWidth: 'wide',
      parsePatterns: E0,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: ts({
      matchPatterns: C0,
      defaultMatchWidth: 'wide',
      parsePatterns: A0,
      defaultParseWidth: 'any',
    }),
    day: ts({
      matchPatterns: R0,
      defaultMatchWidth: 'wide',
      parsePatterns: L0,
      defaultParseWidth: 'any',
    }),
    dayPeriod: ts({
      matchPatterns: F0,
      defaultMatchWidth: 'any',
      parsePatterns: I0,
      defaultParseWidth: 'any',
    }),
  },
  Ju = {
    code: 'en-US',
    formatDistance: o0,
    formatLong: d0,
    formatRelative: f0,
    localize: x0,
    match: N0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function B0(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return Yu(e, Ku(e)) + 1;
}
function Zu(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = +Bn(e) - +Iv(e);
  return Math.round(s / Vu) + 1;
}
function za(n, t) {
  var u, d, h, g;
  const e = X(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = wn(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((g = (h = i.locale) == null ? void 0 : h.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    a = yt((t == null ? void 0 : t.in) || n, 0);
  a.setFullYear(s + 1, 0, r), a.setHours(0, 0, 0, 0);
  const o = ve(a, t),
    l = yt((t == null ? void 0 : t.in) || n, 0);
  l.setFullYear(s, 0, r), l.setHours(0, 0, 0, 0);
  const c = ve(l, t);
  return +e >= +o ? s + 1 : +e >= +c ? s : s - 1;
}
function z0(n, t) {
  var o, l, c, u;
  const e = wn(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      e.firstWeekContainsDate ??
      ((u = (c = e.locale) == null ? void 0 : c.options) == null
        ? void 0
        : u.firstWeekContainsDate) ??
      1,
    i = za(n, t),
    r = yt((t == null ? void 0 : t.in) || n, 0);
  return r.setFullYear(i, 0, s), r.setHours(0, 0, 0, 0), ve(r, t);
}
function td(n, t) {
  const e = X(n, t == null ? void 0 : t.in),
    s = +ve(e, t) - +z0(e, t);
  return Math.round(s / Vu) + 1;
}
function rt(n, t) {
  const e = n < 0 ? '-' : '',
    s = Math.abs(n).toString().padStart(t, '0');
  return e + s;
}
const He = {
    y(n, t) {
      const e = n.getFullYear(),
        s = e > 0 ? e : 1 - e;
      return rt(t === 'yy' ? s % 100 : s, t.length);
    },
    M(n, t) {
      const e = n.getMonth();
      return t === 'M' ? String(e + 1) : rt(e + 1, 2);
    },
    d(n, t) {
      return rt(n.getDate(), t.length);
    },
    a(n, t) {
      const e = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return e.toUpperCase();
        case 'aaa':
          return e;
        case 'aaaaa':
          return e[0];
        case 'aaaa':
        default:
          return e === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(n, t) {
      return rt(n.getHours() % 12 || 12, t.length);
    },
    H(n, t) {
      return rt(n.getHours(), t.length);
    },
    m(n, t) {
      return rt(n.getMinutes(), t.length);
    },
    s(n, t) {
      return rt(n.getSeconds(), t.length);
    },
    S(n, t) {
      const e = t.length,
        s = n.getMilliseconds(),
        i = Math.trunc(s * Math.pow(10, e - 3));
      return rt(i, t.length);
    },
  },
  On = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Bl = {
    G: function (n, t, e) {
      const s = n.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return e.era(s, { width: 'abbreviated' });
        case 'GGGGG':
          return e.era(s, { width: 'narrow' });
        case 'GGGG':
        default:
          return e.era(s, { width: 'wide' });
      }
    },
    y: function (n, t, e) {
      if (t === 'yo') {
        const s = n.getFullYear(),
          i = s > 0 ? s : 1 - s;
        return e.ordinalNumber(i, { unit: 'year' });
      }
      return He.y(n, t);
    },
    Y: function (n, t, e, s) {
      const i = za(n, s),
        r = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const a = r % 100;
        return rt(a, 2);
      }
      return t === 'Yo'
        ? e.ordinalNumber(r, { unit: 'year' })
        : rt(r, t.length);
    },
    R: function (n, t) {
      const e = qu(n);
      return rt(e, t.length);
    },
    u: function (n, t) {
      const e = n.getFullYear();
      return rt(e, t.length);
    },
    Q: function (n, t, e) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(s);
        case 'QQ':
          return rt(s, 2);
        case 'Qo':
          return e.ordinalNumber(s, { unit: 'quarter' });
        case 'QQQ':
          return e.quarter(s, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return e.quarter(s, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return e.quarter(s, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, t, e) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'q':
          return String(s);
        case 'qq':
          return rt(s, 2);
        case 'qo':
          return e.ordinalNumber(s, { unit: 'quarter' });
        case 'qqq':
          return e.quarter(s, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return e.quarter(s, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return e.quarter(s, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, t, e) {
      const s = n.getMonth();
      switch (t) {
        case 'M':
        case 'MM':
          return He.M(n, t);
        case 'Mo':
          return e.ordinalNumber(s + 1, { unit: 'month' });
        case 'MMM':
          return e.month(s, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return e.month(s, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return e.month(s, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, t, e) {
      const s = n.getMonth();
      switch (t) {
        case 'L':
          return String(s + 1);
        case 'LL':
          return rt(s + 1, 2);
        case 'Lo':
          return e.ordinalNumber(s + 1, { unit: 'month' });
        case 'LLL':
          return e.month(s, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return e.month(s, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return e.month(s, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, t, e, s) {
      const i = td(n, s);
      return t === 'wo'
        ? e.ordinalNumber(i, { unit: 'week' })
        : rt(i, t.length);
    },
    I: function (n, t, e) {
      const s = Zu(n);
      return t === 'Io'
        ? e.ordinalNumber(s, { unit: 'week' })
        : rt(s, t.length);
    },
    d: function (n, t, e) {
      return t === 'do'
        ? e.ordinalNumber(n.getDate(), { unit: 'date' })
        : He.d(n, t);
    },
    D: function (n, t, e) {
      const s = B0(n);
      return t === 'Do'
        ? e.ordinalNumber(s, { unit: 'dayOfYear' })
        : rt(s, t.length);
    },
    E: function (n, t, e) {
      const s = n.getDay();
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return e.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return e.day(s, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return e.day(s, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return e.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, t, e, s) {
      const i = n.getDay(),
        r = (i - s.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(r);
        case 'ee':
          return rt(r, 2);
        case 'eo':
          return e.ordinalNumber(r, { unit: 'day' });
        case 'eee':
          return e.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return e.day(i, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return e.day(i, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return e.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (n, t, e, s) {
      const i = n.getDay(),
        r = (i - s.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(r);
        case 'cc':
          return rt(r, t.length);
        case 'co':
          return e.ordinalNumber(r, { unit: 'day' });
        case 'ccc':
          return e.day(i, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return e.day(i, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return e.day(i, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return e.day(i, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (n, t, e) {
      const s = n.getDay(),
        i = s === 0 ? 7 : s;
      switch (t) {
        case 'i':
          return String(i);
        case 'ii':
          return rt(i, t.length);
        case 'io':
          return e.ordinalNumber(i, { unit: 'day' });
        case 'iii':
          return e.day(s, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return e.day(s, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return e.day(s, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return e.day(s, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, t, e) {
      const i = n.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return e.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'aaa':
          return e
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'aaaaa':
          return e.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return e.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (n, t, e) {
      const s = n.getHours();
      let i;
      switch (
        (s === 12
          ? (i = On.noon)
          : s === 0
            ? (i = On.midnight)
            : (i = s / 12 >= 1 ? 'pm' : 'am'),
        t)
      ) {
        case 'b':
        case 'bb':
          return e.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'bbb':
          return e
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'bbbbb':
          return e.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return e.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (n, t, e) {
      const s = n.getHours();
      let i;
      switch (
        (s >= 17
          ? (i = On.evening)
          : s >= 12
            ? (i = On.afternoon)
            : s >= 4
              ? (i = On.morning)
              : (i = On.night),
        t)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return e.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'BBBBB':
          return e.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return e.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (n, t, e) {
      if (t === 'ho') {
        let s = n.getHours() % 12;
        return s === 0 && (s = 12), e.ordinalNumber(s, { unit: 'hour' });
      }
      return He.h(n, t);
    },
    H: function (n, t, e) {
      return t === 'Ho'
        ? e.ordinalNumber(n.getHours(), { unit: 'hour' })
        : He.H(n, t);
    },
    K: function (n, t, e) {
      const s = n.getHours() % 12;
      return t === 'Ko'
        ? e.ordinalNumber(s, { unit: 'hour' })
        : rt(s, t.length);
    },
    k: function (n, t, e) {
      let s = n.getHours();
      return (
        s === 0 && (s = 24),
        t === 'ko' ? e.ordinalNumber(s, { unit: 'hour' }) : rt(s, t.length)
      );
    },
    m: function (n, t, e) {
      return t === 'mo'
        ? e.ordinalNumber(n.getMinutes(), { unit: 'minute' })
        : He.m(n, t);
    },
    s: function (n, t, e) {
      return t === 'so'
        ? e.ordinalNumber(n.getSeconds(), { unit: 'second' })
        : He.s(n, t);
    },
    S: function (n, t) {
      return He.S(n, t);
    },
    X: function (n, t, e) {
      const s = n.getTimezoneOffset();
      if (s === 0) return 'Z';
      switch (t) {
        case 'X':
          return Wl(s);
        case 'XXXX':
        case 'XX':
          return un(s);
        case 'XXXXX':
        case 'XXX':
        default:
          return un(s, ':');
      }
    },
    x: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return Wl(s);
        case 'xxxx':
        case 'xx':
          return un(s);
        case 'xxxxx':
        case 'xxx':
        default:
          return un(s, ':');
      }
    },
    O: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + zl(s, ':');
        case 'OOOO':
        default:
          return 'GMT' + un(s, ':');
      }
    },
    z: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + zl(s, ':');
        case 'zzzz':
        default:
          return 'GMT' + un(s, ':');
      }
    },
    t: function (n, t, e) {
      const s = Math.trunc(+n / 1e3);
      return rt(s, t.length);
    },
    T: function (n, t, e) {
      return rt(+n, t.length);
    },
  };
function zl(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = Math.trunc(s / 60),
    r = s % 60;
  return r === 0 ? e + String(i) : e + String(i) + t + rt(r, 2);
}
function Wl(n, t) {
  return n % 60 === 0
    ? (n > 0 ? '-' : '+') + rt(Math.abs(n) / 60, 2)
    : un(n, t);
}
function un(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = rt(Math.trunc(s / 60), 2),
    r = rt(s % 60, 2);
  return e + i + t + r;
}
const Hl = (n, t) => {
    switch (n) {
      case 'P':
        return t.date({ width: 'short' });
      case 'PP':
        return t.date({ width: 'medium' });
      case 'PPP':
        return t.date({ width: 'long' });
      case 'PPPP':
      default:
        return t.date({ width: 'full' });
    }
  },
  ed = (n, t) => {
    switch (n) {
      case 'p':
        return t.time({ width: 'short' });
      case 'pp':
        return t.time({ width: 'medium' });
      case 'ppp':
        return t.time({ width: 'long' });
      case 'pppp':
      default:
        return t.time({ width: 'full' });
    }
  },
  W0 = (n, t) => {
    const e = n.match(/(P+)(p+)?/) || [],
      s = e[1],
      i = e[2];
    if (!i) return Hl(n, t);
    let r;
    switch (s) {
      case 'P':
        r = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        r = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        r = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        r = t.dateTime({ width: 'full' });
        break;
    }
    return r.replace('{{date}}', Hl(s, t)).replace('{{time}}', ed(i, t));
  },
  sa = { p: ed, P: W0 },
  H0 = /^D+$/,
  j0 = /^Y+$/,
  V0 = ['D', 'DD', 'YY', 'YYYY'];
function nd(n) {
  return H0.test(n);
}
function sd(n) {
  return j0.test(n);
}
function ia(n, t, e) {
  const s = q0(n, t, e);
  if ((console.warn(s), V0.includes(n))) throw new RangeError(s);
}
function q0(n, t, e) {
  const s = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Y0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  U0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  $0 = /^'([^]*?)'?$/,
  X0 = /''/g,
  Q0 = /[a-zA-Z]/;
function G0(n, t, e) {
  var u, d, h, g, f, p, m, b;
  const s = wn(),
    i = (e == null ? void 0 : e.locale) ?? s.locale ?? Ju,
    r =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((g = (h = s.locale) == null ? void 0 : h.options) == null
        ? void 0
        : g.firstWeekContainsDate) ??
      1,
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((p = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) ==
      null
        ? void 0
        : p.weekStartsOn) ??
      s.weekStartsOn ??
      ((b = (m = s.locale) == null ? void 0 : m.options) == null
        ? void 0
        : b.weekStartsOn) ??
      0,
    o = X(n, e == null ? void 0 : e.in);
  if (!Uu(o)) throw new RangeError('Invalid time value');
  let l = t
    .match(U0)
    .map((_) => {
      const x = _[0];
      if (x === 'p' || x === 'P') {
        const w = sa[x];
        return w(_, i.formatLong);
      }
      return _;
    })
    .join('')
    .match(Y0)
    .map((_) => {
      if (_ === "''") return { isToken: !1, value: "'" };
      const x = _[0];
      if (x === "'") return { isToken: !1, value: K0(_) };
      if (Bl[x]) return { isToken: !0, value: _ };
      if (x.match(Q0))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            x +
            '`',
        );
      return { isToken: !1, value: _ };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(o, l));
  const c = { firstWeekContainsDate: r, weekStartsOn: a, locale: i };
  return l
    .map((_) => {
      if (!_.isToken) return _.value;
      const x = _.value;
      ((!(e != null && e.useAdditionalWeekYearTokens) && sd(x)) ||
        (!(e != null && e.useAdditionalDayOfYearTokens) && nd(x))) &&
        ia(x, t, String(n));
      const w = Bl[x[0]];
      return w(o, x, i.localize, c);
    })
    .join('');
}
function K0(n) {
  const t = n.match($0);
  return t ? t[1].replace(X0, "'") : n;
}
function J0() {
  return Object.assign({}, wn());
}
function Z0(n, t) {
  const e = X(n, t == null ? void 0 : t.in).getDay();
  return e === 0 ? 7 : e;
}
function ty(n, t) {
  const e = ey(t) ? new t(0) : yt(t, 0);
  return (
    e.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
    e.setHours(
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds(),
    ),
    e
  );
}
function ey(n) {
  var t;
  return (
    typeof n == 'function' &&
    ((t = n.prototype) == null ? void 0 : t.constructor) === n
  );
}
const ny = 10;
class id {
  constructor() {
    M(this, 'subPriority', 0);
  }
  validate(t, e) {
    return !0;
  }
}
class sy extends id {
  constructor(t, e, s, i, r) {
    super(),
      (this.value = t),
      (this.validateValue = e),
      (this.setValue = s),
      (this.priority = i),
      r && (this.subPriority = r);
  }
  validate(t, e) {
    return this.validateValue(t, this.value, e);
  }
  set(t, e, s) {
    return this.setValue(t, e, this.value, s);
  }
}
class iy extends id {
  constructor(e, s) {
    super();
    M(this, 'priority', ny);
    M(this, 'subPriority', -1);
    this.context = e || ((i) => yt(s, i));
  }
  set(e, s) {
    return s.timestampIsSet ? e : yt(e, ty(e, this.context));
  }
}
class it {
  run(t, e, s, i) {
    const r = this.parse(t, e, s, i);
    return r
      ? {
          setter: new sy(
            r.value,
            this.validate,
            this.set,
            this.priority,
            this.subPriority,
          ),
          rest: r.rest,
        }
      : null;
  }
  validate(t, e, s) {
    return !0;
  }
}
class ry extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 140);
    M(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'G':
      case 'GG':
      case 'GGG':
        return (
          i.era(e, { width: 'abbreviated' }) || i.era(e, { width: 'narrow' })
        );
      case 'GGGGG':
        return i.era(e, { width: 'narrow' });
      case 'GGGG':
      default:
        return (
          i.era(e, { width: 'wide' }) ||
          i.era(e, { width: 'abbreviated' }) ||
          i.era(e, { width: 'narrow' })
        );
    }
  }
  set(e, s, i) {
    return (s.era = i), e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const Mt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  fe = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function St(n, t) {
  return n && { value: t(n.value), rest: n.rest };
}
function bt(n, t) {
  const e = t.match(n);
  return e ? { value: parseInt(e[0], 10), rest: t.slice(e[0].length) } : null;
}
function ge(n, t) {
  const e = t.match(n);
  if (!e) return null;
  if (e[0] === 'Z') return { value: 0, rest: t.slice(1) };
  const s = e[1] === '+' ? 1 : -1,
    i = e[2] ? parseInt(e[2], 10) : 0,
    r = e[3] ? parseInt(e[3], 10) : 0,
    a = e[5] ? parseInt(e[5], 10) : 0;
  return { value: s * (i * Ns + r * Is + a * Rv), rest: t.slice(e[0].length) };
}
function rd(n) {
  return bt(Mt.anyDigitsSigned, n);
}
function xt(n, t) {
  switch (n) {
    case 1:
      return bt(Mt.singleDigit, t);
    case 2:
      return bt(Mt.twoDigits, t);
    case 3:
      return bt(Mt.threeDigits, t);
    case 4:
      return bt(Mt.fourDigits, t);
    default:
      return bt(new RegExp('^\\d{1,' + n + '}'), t);
  }
}
function Fi(n, t) {
  switch (n) {
    case 1:
      return bt(Mt.singleDigitSigned, t);
    case 2:
      return bt(Mt.twoDigitsSigned, t);
    case 3:
      return bt(Mt.threeDigitsSigned, t);
    case 4:
      return bt(Mt.fourDigitsSigned, t);
    default:
      return bt(new RegExp('^-?\\d{1,' + n + '}'), t);
  }
}
function Wa(n) {
  switch (n) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function ad(n, t) {
  const e = t > 0,
    s = e ? t : 1 - t;
  let i;
  if (s <= 50) i = n || 100;
  else {
    const r = s + 50,
      a = Math.trunc(r / 100) * 100,
      o = n >= r % 100;
    i = n + a - (o ? 100 : 0);
  }
  return e ? i : 1 - i;
}
function od(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class ay extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 130);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'u',
      'w',
      'I',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    const r = (a) => ({ year: a, isTwoDigitYear: s === 'yy' });
    switch (s) {
      case 'y':
        return St(xt(4, e), r);
      case 'yo':
        return St(i.ordinalNumber(e, { unit: 'year' }), r);
      default:
        return St(xt(s.length, e), r);
    }
  }
  validate(e, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(e, s, i) {
    const r = e.getFullYear();
    if (i.isTwoDigitYear) {
      const o = ad(i.year, r);
      return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const a = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class oy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 130);
    M(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'Q',
      'q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'i',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    const r = (a) => ({ year: a, isTwoDigitYear: s === 'YY' });
    switch (s) {
      case 'Y':
        return St(xt(4, e), r);
      case 'Yo':
        return St(i.ordinalNumber(e, { unit: 'year' }), r);
      default:
        return St(xt(s.length, e), r);
    }
  }
  validate(e, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(e, s, i, r) {
    const a = za(e, r);
    if (i.isTwoDigitYear) {
      const l = ad(i.year, a);
      return (
        e.setFullYear(l, 0, r.firstWeekContainsDate),
        e.setHours(0, 0, 0, 0),
        ve(e, r)
      );
    }
    const o = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return (
      e.setFullYear(o, 0, r.firstWeekContainsDate),
      e.setHours(0, 0, 0, 0),
      ve(e, r)
    );
  }
}
class ly extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 130);
    M(this, 'incompatibleTokens', [
      'G',
      'y',
      'Y',
      'u',
      'Q',
      'q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s) {
    return Fi(s === 'R' ? 4 : s.length, e);
  }
  set(e, s, i) {
    const r = yt(e, 0);
    return r.setFullYear(i, 0, 4), r.setHours(0, 0, 0, 0), Bn(r);
  }
}
class cy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 130);
    M(this, 'incompatibleTokens', [
      'G',
      'y',
      'Y',
      'R',
      'w',
      'I',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s) {
    return Fi(s === 'u' ? 4 : s.length, e);
  }
  set(e, s, i) {
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class uy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 120);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'Q':
      case 'QQ':
        return xt(s.length, e);
      case 'Qo':
        return i.ordinalNumber(e, { unit: 'quarter' });
      case 'QQQ':
        return (
          i.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.quarter(e, { width: 'narrow', context: 'formatting' })
        );
      case 'QQQQQ':
        return i.quarter(e, { width: 'narrow', context: 'formatting' });
      case 'QQQQ':
      default:
        return (
          i.quarter(e, { width: 'wide', context: 'formatting' }) ||
          i.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.quarter(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 4;
  }
  set(e, s, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class dy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 120);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'Q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'q':
      case 'qq':
        return xt(s.length, e);
      case 'qo':
        return i.ordinalNumber(e, { unit: 'quarter' });
      case 'qqq':
        return (
          i.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.quarter(e, { width: 'narrow', context: 'standalone' })
        );
      case 'qqqqq':
        return i.quarter(e, { width: 'narrow', context: 'standalone' });
      case 'qqqq':
      default:
        return (
          i.quarter(e, { width: 'wide', context: 'standalone' }) ||
          i.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.quarter(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 4;
  }
  set(e, s, i) {
    return e.setMonth((i - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class hy extends it {
  constructor() {
    super(...arguments);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'L',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
    M(this, 'priority', 110);
  }
  parse(e, s, i) {
    const r = (a) => a - 1;
    switch (s) {
      case 'M':
        return St(bt(Mt.month, e), r);
      case 'MM':
        return St(xt(2, e), r);
      case 'Mo':
        return St(i.ordinalNumber(e, { unit: 'month' }), r);
      case 'MMM':
        return (
          i.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.month(e, { width: 'narrow', context: 'formatting' })
        );
      case 'MMMMM':
        return i.month(e, { width: 'narrow', context: 'formatting' });
      case 'MMMM':
      default:
        return (
          i.month(e, { width: 'wide', context: 'formatting' }) ||
          i.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.month(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 11;
  }
  set(e, s, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class fy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 110);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'M',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    const r = (a) => a - 1;
    switch (s) {
      case 'L':
        return St(bt(Mt.month, e), r);
      case 'LL':
        return St(xt(2, e), r);
      case 'Lo':
        return St(i.ordinalNumber(e, { unit: 'month' }), r);
      case 'LLL':
        return (
          i.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.month(e, { width: 'narrow', context: 'standalone' })
        );
      case 'LLLLL':
        return i.month(e, { width: 'narrow', context: 'standalone' });
      case 'LLLL':
      default:
        return (
          i.month(e, { width: 'wide', context: 'standalone' }) ||
          i.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.month(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 11;
  }
  set(e, s, i) {
    return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function gy(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in),
    i = td(s, e) - t;
  return s.setDate(s.getDate() - i * 7), X(s, e == null ? void 0 : e.in);
}
class py extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 100);
    M(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'i',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'w':
        return bt(Mt.week, e);
      case 'wo':
        return i.ordinalNumber(e, { unit: 'week' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 53;
  }
  set(e, s, i, r) {
    return ve(gy(e, i, r), r);
  }
}
function my(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in),
    i = Zu(s, e) - t;
  return s.setDate(s.getDate() - i * 7), s;
}
class by extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 100);
    M(this, 'incompatibleTokens', [
      'y',
      'Y',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'I':
        return bt(Mt.week, e);
      case 'Io':
        return i.ordinalNumber(e, { unit: 'week' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 53;
  }
  set(e, s, i) {
    return Bn(my(e, i));
  }
}
const _y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  vy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class yy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'subPriority', 1);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'd':
        return bt(Mt.date, e);
      case 'do':
        return i.ordinalNumber(e, { unit: 'date' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    const i = e.getFullYear(),
      r = od(i),
      a = e.getMonth();
    return r ? s >= 1 && s <= vy[a] : s >= 1 && s <= _y[a];
  }
  set(e, s, i) {
    return e.setDate(i), e.setHours(0, 0, 0, 0), e;
  }
}
class xy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'subpriority', 1);
    M(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'E',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    switch (s) {
      case 'D':
      case 'DD':
        return bt(Mt.dayOfYear, e);
      case 'Do':
        return i.ordinalNumber(e, { unit: 'date' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    const i = e.getFullYear();
    return od(i) ? s >= 1 && s <= 366 : s >= 1 && s <= 365;
  }
  set(e, s, i) {
    return e.setMonth(0, i), e.setHours(0, 0, 0, 0), e;
  }
}
function Ha(n, t, e) {
  var d, h, g, f;
  const s = wn(),
    i =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((h = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : h.weekStartsOn) ??
      s.weekStartsOn ??
      ((f = (g = s.locale) == null ? void 0 : g.options) == null
        ? void 0
        : f.weekStartsOn) ??
      0,
    r = X(n, e == null ? void 0 : e.in),
    a = r.getDay(),
    l = ((t % 7) + 7) % 7,
    c = 7 - i,
    u = t < 0 || t > 6 ? t - ((a + c) % 7) : ((l + c) % 7) - ((a + c) % 7);
  return ir(r, u, e);
}
class wy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'E':
      case 'EE':
      case 'EEE':
        return (
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEEE':
        return i.day(e, { width: 'narrow', context: 'formatting' });
      case 'EEEEEE':
        return (
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEE':
      default:
        return (
          i.day(e, { width: 'wide', context: 'formatting' }) ||
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 6;
  }
  set(e, s, i, r) {
    return (e = Ha(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class ky extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'E',
      'i',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i, r) {
    const a = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return ((o + r.weekStartsOn + 6) % 7) + l;
    };
    switch (s) {
      case 'e':
      case 'ee':
        return St(xt(s.length, e), a);
      case 'eo':
        return St(i.ordinalNumber(e, { unit: 'day' }), a);
      case 'eee':
        return (
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeeee':
        return i.day(e, { width: 'narrow', context: 'formatting' });
      case 'eeeeee':
        return (
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeee':
      default:
        return (
          i.day(e, { width: 'wide', context: 'formatting' }) ||
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.day(e, { width: 'short', context: 'formatting' }) ||
          i.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 6;
  }
  set(e, s, i, r) {
    return (e = Ha(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class My extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'E',
      'i',
      'e',
      't',
      'T',
    ]);
  }
  parse(e, s, i, r) {
    const a = (o) => {
      const l = Math.floor((o - 1) / 7) * 7;
      return ((o + r.weekStartsOn + 6) % 7) + l;
    };
    switch (s) {
      case 'c':
      case 'cc':
        return St(xt(s.length, e), a);
      case 'co':
        return St(i.ordinalNumber(e, { unit: 'day' }), a);
      case 'ccc':
        return (
          i.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.day(e, { width: 'short', context: 'standalone' }) ||
          i.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'ccccc':
        return i.day(e, { width: 'narrow', context: 'standalone' });
      case 'cccccc':
        return (
          i.day(e, { width: 'short', context: 'standalone' }) ||
          i.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'cccc':
      default:
        return (
          i.day(e, { width: 'wide', context: 'standalone' }) ||
          i.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          i.day(e, { width: 'short', context: 'standalone' }) ||
          i.day(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 6;
  }
  set(e, s, i, r) {
    return (e = Ha(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
function Sy(n, t, e) {
  const s = X(n, e == null ? void 0 : e.in),
    i = Z0(s, e),
    r = t - i;
  return ir(s, r, e);
}
class Py extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 90);
    M(this, 'incompatibleTokens', [
      'y',
      'Y',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'E',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, s, i) {
    const r = (a) => (a === 0 ? 7 : a);
    switch (s) {
      case 'i':
      case 'ii':
        return xt(s.length, e);
      case 'io':
        return i.ordinalNumber(e, { unit: 'day' });
      case 'iii':
        return St(
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            i.day(e, { width: 'short', context: 'formatting' }) ||
            i.day(e, { width: 'narrow', context: 'formatting' }),
          r,
        );
      case 'iiiii':
        return St(i.day(e, { width: 'narrow', context: 'formatting' }), r);
      case 'iiiiii':
        return St(
          i.day(e, { width: 'short', context: 'formatting' }) ||
            i.day(e, { width: 'narrow', context: 'formatting' }),
          r,
        );
      case 'iiii':
      default:
        return St(
          i.day(e, { width: 'wide', context: 'formatting' }) ||
            i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            i.day(e, { width: 'short', context: 'formatting' }) ||
            i.day(e, { width: 'narrow', context: 'formatting' }),
          r,
        );
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 7;
  }
  set(e, s, i) {
    return (e = Sy(e, i)), e.setHours(0, 0, 0, 0), e;
  }
}
class Ty extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 80);
    M(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'a':
      case 'aa':
      case 'aaa':
        return (
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'aaaaa':
        return i.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'aaaa':
      default:
        return (
          i.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, s, i) {
    return e.setHours(Wa(i), 0, 0, 0), e;
  }
}
class Dy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 80);
    M(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'b':
      case 'bb':
      case 'bbb':
        return (
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'bbbbb':
        return i.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'bbbb':
      default:
        return (
          i.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, s, i) {
    return e.setHours(Wa(i), 0, 0, 0), e;
  }
}
class Oy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 80);
    M(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'B':
      case 'BB':
      case 'BBB':
        return (
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'BBBBB':
        return i.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'BBBB':
      default:
        return (
          i.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          i.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, s, i) {
    return e.setHours(Wa(i), 0, 0, 0), e;
  }
}
class Ey extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 70);
    M(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'h':
        return bt(Mt.hour12h, e);
      case 'ho':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 12;
  }
  set(e, s, i) {
    const r = e.getHours() >= 12;
    return (
      r && i < 12
        ? e.setHours(i + 12, 0, 0, 0)
        : !r && i === 12
          ? e.setHours(0, 0, 0, 0)
          : e.setHours(i, 0, 0, 0),
      e
    );
  }
}
class Cy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 70);
    M(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'H':
        return bt(Mt.hour23h, e);
      case 'Ho':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 23;
  }
  set(e, s, i) {
    return e.setHours(i, 0, 0, 0), e;
  }
}
class Ay extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 70);
    M(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'K':
        return bt(Mt.hour11h, e);
      case 'Ko':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 11;
  }
  set(e, s, i) {
    return (
      e.getHours() >= 12 && i < 12
        ? e.setHours(i + 12, 0, 0, 0)
        : e.setHours(i, 0, 0, 0),
      e
    );
  }
}
class Ry extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 70);
    M(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'k':
        return bt(Mt.hour24h, e);
      case 'ko':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 24;
  }
  set(e, s, i) {
    const r = i <= 24 ? i % 24 : i;
    return e.setHours(r, 0, 0, 0), e;
  }
}
class Ly extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 60);
    M(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'm':
        return bt(Mt.minute, e);
      case 'mo':
        return i.ordinalNumber(e, { unit: 'minute' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 59;
  }
  set(e, s, i) {
    return e.setMinutes(i, 0, 0), e;
  }
}
class Fy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 50);
    M(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 's':
        return bt(Mt.second, e);
      case 'so':
        return i.ordinalNumber(e, { unit: 'second' });
      default:
        return xt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 59;
  }
  set(e, s, i) {
    return e.setSeconds(i, 0), e;
  }
}
class Iy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 30);
    M(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s) {
    const i = (r) => Math.trunc(r * Math.pow(10, -s.length + 3));
    return St(xt(s.length, e), i);
  }
  set(e, s, i) {
    return e.setMilliseconds(i), e;
  }
}
class Ny extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 10);
    M(this, 'incompatibleTokens', ['t', 'T', 'x']);
  }
  parse(e, s) {
    switch (s) {
      case 'X':
        return ge(fe.basicOptionalMinutes, e);
      case 'XX':
        return ge(fe.basic, e);
      case 'XXXX':
        return ge(fe.basicOptionalSeconds, e);
      case 'XXXXX':
        return ge(fe.extendedOptionalSeconds, e);
      case 'XXX':
      default:
        return ge(fe.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : yt(e, e.getTime() - Li(e) - i);
  }
}
class By extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 10);
    M(this, 'incompatibleTokens', ['t', 'T', 'X']);
  }
  parse(e, s) {
    switch (s) {
      case 'x':
        return ge(fe.basicOptionalMinutes, e);
      case 'xx':
        return ge(fe.basic, e);
      case 'xxxx':
        return ge(fe.basicOptionalSeconds, e);
      case 'xxxxx':
        return ge(fe.extendedOptionalSeconds, e);
      case 'xxx':
      default:
        return ge(fe.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : yt(e, e.getTime() - Li(e) - i);
  }
}
class zy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 40);
    M(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return rd(e);
  }
  set(e, s, i) {
    return [yt(e, i * 1e3), { timestampIsSet: !0 }];
  }
}
class Wy extends it {
  constructor() {
    super(...arguments);
    M(this, 'priority', 20);
    M(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return rd(e);
  }
  set(e, s, i) {
    return [yt(e, i), { timestampIsSet: !0 }];
  }
}
const Hy = {
    G: new ry(),
    y: new ay(),
    Y: new oy(),
    R: new ly(),
    u: new cy(),
    Q: new uy(),
    q: new dy(),
    M: new hy(),
    L: new fy(),
    w: new py(),
    I: new by(),
    d: new yy(),
    D: new xy(),
    E: new wy(),
    e: new ky(),
    c: new My(),
    i: new Py(),
    a: new Ty(),
    b: new Dy(),
    B: new Oy(),
    h: new Ey(),
    H: new Cy(),
    K: new Ay(),
    k: new Ry(),
    m: new Ly(),
    s: new Fy(),
    S: new Iy(),
    X: new Ny(),
    x: new By(),
    t: new zy(),
    T: new Wy(),
  },
  jy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Vy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  qy = /^'([^]*?)'?$/,
  Yy = /''/g,
  Uy = /\S/,
  $y = /[a-zA-Z]/;
function Xy(n, t, e, s) {
  var m, b, _, x, w, y, D, T;
  const i = () => yt((s == null ? void 0 : s.in) || e, NaN),
    r = J0(),
    a = (s == null ? void 0 : s.locale) ?? r.locale ?? Ju,
    o =
      (s == null ? void 0 : s.firstWeekContainsDate) ??
      ((b = (m = s == null ? void 0 : s.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : b.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((x = (_ = r.locale) == null ? void 0 : _.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    l =
      (s == null ? void 0 : s.weekStartsOn) ??
      ((y = (w = s == null ? void 0 : s.locale) == null ? void 0 : w.options) ==
      null
        ? void 0
        : y.weekStartsOn) ??
      r.weekStartsOn ??
      ((T = (D = r.locale) == null ? void 0 : D.options) == null
        ? void 0
        : T.weekStartsOn) ??
      0;
  if (!t) return n ? i() : X(e, s == null ? void 0 : s.in);
  const c = { firstWeekContainsDate: o, weekStartsOn: l, locale: a },
    u = [new iy(s == null ? void 0 : s.in, e)],
    d = t
      .match(Vy)
      .map((k) => {
        const O = k[0];
        if (O in sa) {
          const L = sa[O];
          return L(k, a.formatLong);
        }
        return k;
      })
      .join('')
      .match(jy),
    h = [];
  for (let k of d) {
    !(s != null && s.useAdditionalWeekYearTokens) && sd(k) && ia(k, t, n),
      !(s != null && s.useAdditionalDayOfYearTokens) && nd(k) && ia(k, t, n);
    const O = k[0],
      L = Hy[O];
    if (L) {
      const { incompatibleTokens: R } = L;
      if (Array.isArray(R)) {
        const W = h.find((Z) => R.includes(Z.token) || Z.token === O);
        if (W)
          throw new RangeError(
            `The format string mustn't contain \`${W.fullToken}\` and \`${k}\` at the same time`,
          );
      } else if (L.incompatibleTokens === '*' && h.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${k}\` and any other token at the same time`,
        );
      h.push({ token: O, fullToken: k });
      const E = L.run(n, k, a.match, c);
      if (!E) return i();
      u.push(E.setter), (n = E.rest);
    } else {
      if (O.match($y))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            O +
            '`',
        );
      if (
        (k === "''" ? (k = "'") : O === "'" && (k = Qy(k)), n.indexOf(k) === 0)
      )
        n = n.slice(k.length);
      else return i();
    }
  }
  if (n.length > 0 && Uy.test(n)) return i();
  const g = u
    .map((k) => k.priority)
    .sort((k, O) => O - k)
    .filter((k, O, L) => L.indexOf(k) === O)
    .map((k) =>
      u
        .filter((O) => O.priority === k)
        .sort((O, L) => L.subPriority - O.subPriority),
    )
    .map((k) => k[0]);
  let f = X(e, s == null ? void 0 : s.in);
  if (isNaN(+f)) return i();
  const p = {};
  for (const k of g) {
    if (!k.validate(f, c)) return i();
    const O = k.set(f, p, c);
    Array.isArray(O) ? ((f = O[0]), Object.assign(p, O[1])) : (f = O);
  }
  return f;
}
function Qy(n) {
  return n.match(qy)[1].replace(Yy, "'");
}
function Gy(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setMinutes(0, 0, 0), e;
}
function Ky(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setSeconds(0, 0), e;
}
function Jy(n, t) {
  const e = X(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(0), e;
}
function Zy(n, t) {
  const e = () => yt(t == null ? void 0 : t.in, NaN),
    s = (t == null ? void 0 : t.additionalDigits) ?? 2,
    i = sx(n);
  let r;
  if (i.date) {
    const c = ix(i.date, s);
    r = rx(c.restDateString, c.year);
  }
  if (!r || isNaN(+r)) return e();
  const a = +r;
  let o = 0,
    l;
  if (i.time && ((o = ax(i.time)), isNaN(o))) return e();
  if (i.timezone) {
    if (((l = ox(i.timezone)), isNaN(l))) return e();
  } else {
    const c = new Date(a + o),
      u = X(0, t == null ? void 0 : t.in);
    return (
      u.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()),
      u.setHours(
        c.getUTCHours(),
        c.getUTCMinutes(),
        c.getUTCSeconds(),
        c.getUTCMilliseconds(),
      ),
      u
    );
  }
  return X(a + o + l, t == null ? void 0 : t.in);
}
const ti = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  tx = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  ex =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  nx = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function sx(n) {
  const t = {},
    e = n.split(ti.dateTimeDelimiter);
  let s;
  if (e.length > 2) return t;
  if (
    (/:/.test(e[0])
      ? (s = e[0])
      : ((t.date = e[0]),
        (s = e[1]),
        ti.timeZoneDelimiter.test(t.date) &&
          ((t.date = n.split(ti.timeZoneDelimiter)[0]),
          (s = n.substr(t.date.length, n.length)))),
    s)
  ) {
    const i = ti.timezone.exec(s);
    i ? ((t.time = s.replace(i[1], '')), (t.timezone = i[1])) : (t.time = s);
  }
  return t;
}
function ix(n, t) {
  const e = new RegExp(
      '^(?:(\\d{4}|[+-]\\d{' +
        (4 + t) +
        '})|(\\d{2}|[+-]\\d{' +
        (2 + t) +
        '})$)',
    ),
    s = n.match(e);
  if (!s) return { year: NaN, restDateString: '' };
  const i = s[1] ? parseInt(s[1]) : null,
    r = s[2] ? parseInt(s[2]) : null;
  return {
    year: r === null ? i : r * 100,
    restDateString: n.slice((s[1] || s[2]).length),
  };
}
function rx(n, t) {
  if (t === null) return new Date(NaN);
  const e = n.match(tx);
  if (!e) return new Date(NaN);
  const s = !!e[4],
    i = es(e[1]),
    r = es(e[2]) - 1,
    a = es(e[3]),
    o = es(e[4]),
    l = es(e[5]) - 1;
  if (s) return hx(t, o, l) ? lx(t, o, l) : new Date(NaN);
  {
    const c = new Date(0);
    return !ux(t, r, a) || !dx(t, i)
      ? new Date(NaN)
      : (c.setUTCFullYear(t, r, Math.max(i, a)), c);
  }
}
function es(n) {
  return n ? parseInt(n) : 1;
}
function ax(n) {
  const t = n.match(ex);
  if (!t) return NaN;
  const e = Sr(t[1]),
    s = Sr(t[2]),
    i = Sr(t[3]);
  return fx(e, s, i) ? e * Ns + s * Is + i * 1e3 : NaN;
}
function Sr(n) {
  return (n && parseFloat(n.replace(',', '.'))) || 0;
}
function ox(n) {
  if (n === 'Z') return 0;
  const t = n.match(nx);
  if (!t) return 0;
  const e = t[1] === '+' ? -1 : 1,
    s = parseInt(t[2]),
    i = (t[3] && parseInt(t[3])) || 0;
  return gx(s, i) ? e * (s * Ns + i * Is) : NaN;
}
function lx(n, t, e) {
  const s = new Date(0);
  s.setUTCFullYear(n, 0, 4);
  const i = s.getUTCDay() || 7,
    r = (t - 1) * 7 + e + 1 - i;
  return s.setUTCDate(s.getUTCDate() + r), s;
}
const cx = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ld(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function ux(n, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (cx[t] || (ld(n) ? 29 : 28));
}
function dx(n, t) {
  return t >= 1 && t <= (ld(n) ? 366 : 365);
}
function hx(n, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function fx(n, t, e) {
  return n === 24
    ? t === 0 && e === 0
    : e >= 0 && e < 60 && t >= 0 && t < 60 && n >= 0 && n < 25;
}
function gx(n, t) {
  return t >= 0 && t <= 59;
}
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */ const px = {
  datetime: 'MMM d, yyyy, h:mm:ss aaaa',
  millisecond: 'h:mm:ss.SSS aaaa',
  second: 'h:mm:ss aaaa',
  minute: 'h:mm aaaa',
  hour: 'ha',
  day: 'MMM d',
  week: 'PP',
  month: 'MMM yyyy',
  quarter: 'qqq - yyyy',
  year: 'yyyy',
};
Gc._date.override({
  _id: 'date-fns',
  formats: function () {
    return px;
  },
  parse: function (n, t) {
    if (n === null || typeof n > 'u') return null;
    const e = typeof n;
    return (
      e === 'number' || n instanceof Date
        ? (n = X(n))
        : e === 'string' &&
          (typeof t == 'string'
            ? (n = Xy(n, t, new Date(), this.options))
            : (n = Zy(n, this.options))),
      Uu(n) ? n.getTime() : null
    );
  },
  format: function (n, t) {
    return G0(n, t, this.options);
  },
  add: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return Na(n, t);
      case 'second':
        return zv(n, t);
      case 'minute':
        return Nv(n, t);
      case 'hour':
        return Lv(n, t);
      case 'day':
        return ir(n, t);
      case 'week':
        return Wv(n, t);
      case 'month':
        return Ia(n, t);
      case 'quarter':
        return Bv(n, t);
      case 'year':
        return Hv(n, t);
      default:
        return n;
    }
  },
  diff: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return Ba(n, t);
      case 'second':
        return Qv(n, t);
      case 'minute':
        return Uv(n, t);
      case 'hour':
        return Yv(n, t);
      case 'day':
        return $u(n, t);
      case 'week':
        return Gv(n, t);
      case 'month':
        return Gu(n, t);
      case 'quarter':
        return Xv(n, t);
      case 'year':
        return Kv(n, t);
      default:
        return 0;
    }
  },
  startOf: function (n, t, e) {
    switch (t) {
      case 'second':
        return Jy(n);
      case 'minute':
        return Ky(n);
      case 'hour':
        return Gy(n);
      case 'day':
        return na(n);
      case 'week':
        return ve(n);
      case 'isoWeek':
        return ve(n, { weekStartsOn: +e });
      case 'month':
        return Zv(n);
      case 'quarter':
        return Jv(n);
      case 'year':
        return Ku(n);
      default:
        return n;
    }
  },
  endOf: function (n, t) {
    switch (t) {
      case 'second':
        return r0(n);
      case 'minute':
        return s0(n);
      case 'hour':
        return e0(n);
      case 'day':
        return Xu(n);
      case 'week':
        return n0(n);
      case 'month':
        return Qu(n);
      case 'quarter':
        return i0(n);
      case 'year':
        return t0(n);
      default:
        return n;
    }
  },
});
var mx = z(
    '<div class="loading-state svelte-12nq1a0"><p>Loading data...</p></div>',
  ),
  bx = z(
    '<div class="error-state svelte-12nq1a0"><p class="svelte-12nq1a0"> </p></div>',
  ),
  _x = z('<canvas class="svelte-12nq1a0"></canvas>'),
  vx = z(
    '<p class="no-data-message svelte-12nq1a0">No purchase data available to display chart.</p>',
  ),
  yx = z(
    '<div class="total-summary-card svelte-12nq1a0"><p class="total-label svelte-12nq1a0">Grand Total Items Purchased</p> <p class="total-value svelte-12nq1a0"> </p></div> <div class="chart-wrapper svelte-12nq1a0"><!></div>',
    1,
  ),
  xx = z(
    '<div class="container svelte-12nq1a0"><div class="header svelte-12nq1a0"><p class="title-text svelte-12nq1a0">Total Items Bought Analysis</p></div> <!></div>',
  );
function cd(n, t) {
  ie(t, !0);
  let e = V(null),
    s = V(null),
    i = V(0),
    r = V(!0),
    a = V(''),
    o = Pt({
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Items Bought Over Time',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: !0,
          },
        ],
      },
      options: {
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'MMM dd, yyyy',
              displayFormats: { day: 'MMM dd' },
            },
            title: { display: !0, text: 'Date of Purchase' },
            grid: { display: !1 },
          },
          y: {
            beginAtZero: !0,
            title: { display: !0, text: 'Quantity Bought' },
            grid: { color: 'rgba(200, 200, 200, 0.3)' },
          },
        },
        plugins: {
          legend: { position: 'top', labels: { font: { size: 14 } } },
          title: { display: !1 },
          tooltip: {
            mode: 'index',
            intersect: !1,
            callbacks: {
              label(f) {
                let p = f.dataset.label || '';
                return (
                  p && (p += ': '),
                  f.parsed.y !== null &&
                    (p += f.parsed.y.toLocaleString() + ' items'),
                  p
                );
              },
            },
          },
        },
        interaction: { mode: 'index', intersect: !1 },
      },
    });
  async function l() {
    C(r, !0), C(a, '');
    try {
      const p = (
        await st.get('http://localhost:3000/api/data/total/items/bought')
      ).data;
      C(i, p.grandTotal || 0, !0);
      const m = p.timeSeries.map((b) => ({
        x: new Date(b.datepurchase),
        y: b.total_bought_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items bought data:', f),
        C(a, 'Failed to load data. Please try again later.'),
        C(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      C(r, !1);
    }
  }
  function c() {
    if (
      v(e) &&
      (v(s) && (v(s).destroy(), C(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((p) => ({ ...p, data: [...p.data] })),
        },
      };
      C(s, new Ht(v(e), f), !0);
    }
  }
  ye(() => {
    l();
  }),
    Qe(() => {
      !v(r) && v(e) && c();
    });
  var u = xx(),
    d = A(P(u), 2);
  {
    var h = (f) => {
        var p = mx();
        N(f, p);
      },
      g = (f, p) => {
        {
          var m = (_) => {
              var x = bx(),
                w = P(x),
                y = P(w);
              ot(() => j(y, v(a))), N(_, x);
            },
            b = (_) => {
              var x = yx(),
                w = tn(x),
                y = A(P(w), 2),
                D = P(y),
                T = A(w, 2),
                k = P(T);
              {
                var O = (R) => {
                    var E = _x();
                    jn(
                      E,
                      (W) => C(e, W),
                      () => v(e),
                    ),
                      N(R, E);
                  },
                  L = (R) => {
                    var E = vx();
                    N(R, E);
                  };
                dt(k, (R) => {
                  o.data.datasets[0].data.length > 0 ? R(O) : R(L, !1);
                });
              }
              ot((R) => j(D, R), [() => v(i).toLocaleString()]), N(_, x);
            };
          dt(
            f,
            (_) => {
              v(a) ? _(m) : _(b, !1);
            },
            p,
          );
        }
      };
    dt(d, (f) => {
      v(r) ? f(h) : f(g, !1);
    });
  }
  N(n, u), re();
}
var wx = z(
    '<div class="loading-state svelte-12nq1a0"><p>Loading data...</p></div>',
  ),
  kx = z(
    '<div class="error-state svelte-12nq1a0"><p class="svelte-12nq1a0"> </p></div>',
  ),
  Mx = z('<canvas class="svelte-12nq1a0"></canvas>'),
  Sx = z(
    '<p class="no-data-message svelte-12nq1a0">No dispatch data available to display chart.</p>',
  ),
  Px = z(
    '<div class="total-summary-card svelte-12nq1a0"><p class="total-label svelte-12nq1a0">Grand Total Items Dispatched</p> <p class="total-value svelte-12nq1a0"> </p></div> <div class="chart-wrapper svelte-12nq1a0"><!></div>',
    1,
  ),
  Tx = z(
    '<div class="container svelte-12nq1a0"><div class="header svelte-12nq1a0"><p class="title-text svelte-12nq1a0">Total Items Sold Analysis</p></div> <!></div>',
  );
function ud(n, t) {
  ie(t, !0);
  let e = V(null),
    s = V(null),
    i = V(0),
    r = V(!0),
    a = V(''),
    o = Pt({
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Items Sold Over Time',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.1,
            fill: !0,
          },
        ],
      },
      options: {
        responsive: !0,
        maintainAspectRatio: !1,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'MMM dd, yyyy',
              displayFormats: { day: 'MMM dd' },
            },
            title: { display: !0, text: 'Date of Dispatch' },
            grid: { display: !1 },
          },
          y: {
            beginAtZero: !0,
            title: { display: !0, text: 'Quantity Sold' },
            grid: { color: 'rgba(200, 200, 200, 0.3)' },
          },
        },
        plugins: {
          legend: { position: 'top', labels: { font: { size: 14 } } },
          title: { display: !1 },
          tooltip: {
            mode: 'index',
            intersect: !1,
            callbacks: {
              label(f) {
                let p = f.dataset.label || '';
                return (
                  p && (p += ': '),
                  f.parsed.y !== null &&
                    (p += f.parsed.y.toLocaleString() + ' items'),
                  p
                );
              },
            },
          },
        },
        interaction: { mode: 'index', intersect: !1 },
      },
    });
  async function l() {
    C(r, !0), C(a, '');
    try {
      const p = (
        await st.get('http://localhost:3000/api/data/total/items/sold')
      ).data;
      C(i, p.grandTotal || 0, !0);
      const m = p.timeSeries.map((b) => ({
        x: new Date(b.dateout),
        y: b.total_sold_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items sold data:', f),
        C(a, 'Failed to load data. Please try again later.'),
        C(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      C(r, !1);
    }
  }
  function c() {
    if (
      v(e) &&
      (v(s) && (v(s).destroy(), C(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((p) => ({ ...p, data: [...p.data] })),
        },
      };
      C(s, new Ht(v(e), f), !0);
    }
  }
  ye(() => {
    l();
  }),
    Qe(() => {
      !v(r) && v(e) && c();
    });
  var u = Tx(),
    d = A(P(u), 2);
  {
    var h = (f) => {
        var p = wx();
        N(f, p);
      },
      g = (f, p) => {
        {
          var m = (_) => {
              var x = kx(),
                w = P(x),
                y = P(w);
              ot(() => j(y, v(a))), N(_, x);
            },
            b = (_) => {
              var x = Px(),
                w = tn(x),
                y = A(P(w), 2),
                D = P(y),
                T = A(w, 2),
                k = P(T);
              {
                var O = (R) => {
                    var E = Mx();
                    jn(
                      E,
                      (W) => C(e, W),
                      () => v(e),
                    ),
                      N(R, E);
                  },
                  L = (R) => {
                    var E = Sx();
                    N(R, E);
                  };
                dt(k, (R) => {
                  o.data.datasets[0].data.length > 0 ? R(O) : R(L, !1);
                });
              }
              ot((R) => j(D, R), [() => v(i).toLocaleString()]), N(_, x);
            };
          dt(
            f,
            (_) => {
              v(a) ? _(m) : _(b, !1);
            },
            p,
          );
        }
      };
    dt(d, (f) => {
      v(r) ? f(h) : f(g, !1);
    });
  }
  N(n, u), re();
}
var Dx = z(
    '<div class="loading-state svelte-1pq81e5"><p>Loading items...</p></div>',
  ),
  Ox = z(
    '<div class="error-state svelte-1pq81e5"><p class="svelte-1pq81e5"> </p></div>',
  ),
  Ex = z(
    '<div class="success-state svelte-1pq81e5"><p class="svelte-1pq81e5"> </p></div>',
  ),
  Cx = z(
    '<tr><td class="svelte-1pq81e5"> </td><td class="svelte-1pq81e5"> </td><td class="svelte-1pq81e5"> </td><td class="svelte-1pq81e5"><button class="delete-button svelte-1pq81e5">Delete</button></td></tr>',
  ),
  Ax = z(
    '<!> <div class="item-list-container svelte-1pq81e5"><table class="item-table svelte-1pq81e5"><thead><tr><th class="svelte-1pq81e5">Item Code</th><th class="svelte-1pq81e5">Item Name</th><th class="svelte-1pq81e5">Min Stock Level</th><th class="svelte-1pq81e5">Actions</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  Rx = z(
    '<div class="container svelte-1pq81e5"><div class="header svelte-1pq81e5"><p class="title-text svelte-1pq81e5">Item List</p></div> <!></div>',
  );
function dd(n, t) {
  ie(t, !0);
  let e = V(Pt([])),
    s = V(!0),
    i = V(''),
    r = V('');
  async function a() {
    C(s, !0), C(i, ''), C(r, '');
    try {
      const h = await st.get('http://localhost:3000/api/data/items/summary');
      C(e, h.data, !0);
    } catch (h) {
      console.error('Error fetching items:', h),
        C(i, 'Failed to fetch item list.'),
        C(e, [], !0);
    } finally {
      C(s, !1);
    }
  }
  async function o(h) {
    C(i, ''), C(r, '');
    try {
      await st.delete(`http://localhost:3000/api/data/item/${h}`),
        C(r, `Item ${h} deleted.`),
        a();
    } catch {
      C(i, `Cannot delete ${h} — item is still in use.`);
    }
  }
  ye(() => {
    a();
  });
  var l = Rx(),
    c = A(P(l), 2);
  {
    var u = (h) => {
        var g = Dx();
        N(h, g);
      },
      d = (h, g) => {
        {
          var f = (m) => {
              var b = Ox(),
                _ = P(b),
                x = P(_);
              ot(() => j(x, v(i))), N(m, b);
            },
            p = (m) => {
              var b = Ax(),
                _ = tn(b);
              {
                var x = (T) => {
                  var k = Ex(),
                    O = P(k),
                    L = P(O);
                  ot(() => j(L, v(r))), N(T, k);
                };
                dt(_, (T) => {
                  v(r) && T(x);
                });
              }
              var w = A(_, 2),
                y = P(w),
                D = A(P(y));
              _e(
                D,
                21,
                () => v(e),
                Cs,
                (T, k) => {
                  var O = Cx(),
                    L = P(O),
                    R = P(L),
                    E = A(L),
                    W = P(E),
                    Z = A(E),
                    U = P(Z),
                    q = A(Z),
                    K = P(q);
                  ot(() => {
                    j(R, v(k).itemcode),
                      j(W, v(k).itemname),
                      j(U, v(k).min_stock_level),
                      (K.disabled =
                        v(k).used_in_inwards ||
                        v(k).used_in_inventory ||
                        v(k).used_in_outwards);
                  }),
                    wh('click', K, () => o(v(k).itemcode)),
                    N(T, O);
                },
              ),
                N(m, b);
            };
          dt(
            h,
            (m) => {
              v(i) ? m(f) : m(p, !1);
            },
            g,
          );
        }
      };
    dt(c, (h) => {
      v(s) ? h(u) : h(d, !1);
    });
  }
  N(n, l), re();
}
var Lx = z(
    '<div class="loading-state svelte-ze32jh"><p>Loading low stock items...</p></div>',
  ),
  Fx = z(
    '<div class="error-state svelte-ze32jh"><p class="svelte-ze32jh"> </p></div>',
  ),
  Ix = z(
    '<p class="no-data-message svelte-ze32jh">All items are currently above their defined minimum stock levels.</p>',
  ),
  Nx = z(
    '<tr class="item-row"><td class="svelte-ze32jh"> </td><td class="svelte-ze32jh"> </td><td class="stock-warning svelte-ze32jh"> </td><td class="svelte-ze32jh"> </td></tr>',
  ),
  Bx = z(
    '<div class="list-container svelte-ze32jh"><table class="items-table svelte-ze32jh"><thead><tr><th class="svelte-ze32jh">Item Code</th><th class="svelte-ze32jh">Item Name</th><th class="svelte-ze32jh">Current Stock</th><th class="svelte-ze32jh">Min. Stock Level</th></tr></thead><tbody></tbody></table></div>',
  ),
  zx = z(
    '<div class="container svelte-ze32jh"><div class="header svelte-ze32jh"><p class="title-text svelte-ze32jh">Low Stock Items (Below Reorder Point)</p></div> <!></div>',
  );
function hd(n, t) {
  ie(t, !0);
  let e = V(Pt([])),
    s = V(!0),
    i = V('');
  async function r() {
    C(s, !0), C(i, '');
    try {
      const u = await st.get('http://localhost:3000/api/data/lowstock/items');
      C(e, u.data, !0);
    } catch (u) {
      console.error('Error fetching low stock items:', u),
        C(i, 'Failed to load low stock items.'),
        C(e, [], !0);
    } finally {
      C(s, !1);
    }
  }
  ye(() => {
    r();
  });
  var a = zx(),
    o = A(P(a), 2);
  {
    var l = (u) => {
        var d = Lx();
        N(u, d);
      },
      c = (u, d) => {
        {
          var h = (f) => {
              var p = Fx(),
                m = P(p),
                b = P(m);
              ot(() => j(b, v(i))), N(f, p);
            },
            g = (f, p) => {
              {
                var m = (_) => {
                    var x = Ix();
                    N(_, x);
                  },
                  b = (_) => {
                    var x = Bx(),
                      w = P(x),
                      y = A(P(w));
                    _e(
                      y,
                      21,
                      () => v(e),
                      (D) => D.itemcode,
                      (D, T) => {
                        var k = Nx(),
                          O = P(k),
                          L = P(O),
                          R = A(O),
                          E = P(R),
                          W = A(R),
                          Z = P(W),
                          U = A(W),
                          q = P(U);
                        ot(() => {
                          j(L, v(T).itemcode),
                            j(E, v(T).itemname),
                            j(Z, v(T).total_current_stock),
                            j(q, v(T).min_stock_level);
                        }),
                          N(D, k);
                      },
                    ),
                      N(_, x);
                  };
                dt(
                  f,
                  (_) => {
                    v(e).length === 0 ? _(m) : _(b, !1);
                  },
                  p,
                );
              }
            };
          dt(
            u,
            (f) => {
              v(i) ? f(h) : f(g, !1);
            },
            d,
          );
        }
      };
    dt(o, (u) => {
      v(s) ? u(l) : u(c, !1);
    });
  }
  N(n, a), re();
}
var Wx = z(
    '<div class="loading-state svelte-vpn0sc"><p>Loading profit by item...</p></div>',
  ),
  Hx = z(
    '<div class="error-state svelte-vpn0sc"><p class="svelte-vpn0sc"> </p></div>',
  ),
  jx = z(
    '<p class="no-data-message svelte-vpn0sc">No profit data by item available.</p>',
  ),
  Vx = z(
    '<tr><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="profit-value svelte-vpn0sc"> </td></tr>',
  ),
  qx = z(
    '<div class="chart-container-wrapper svelte-vpn0sc"><canvas class="svelte-vpn0sc"></canvas></div> <div class="list-container small-table svelte-vpn0sc"><table class="items-table svelte-vpn0sc"><thead><tr><th class="svelte-vpn0sc">Item Name</th><th class="svelte-vpn0sc">Total Sold Qty</th><th class="svelte-vpn0sc">Avg. Purchase Price</th><th class="svelte-vpn0sc">Avg. Selling Price</th><th class="svelte-vpn0sc">Total Profit</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  Yx = z(
    '<div class="loading-state svelte-vpn0sc"><p>Loading profit transactions...</p></div>',
  ),
  Ux = z(
    '<div class="error-state svelte-vpn0sc"><p class="svelte-vpn0sc"> </p></div>',
  ),
  $x = z(
    '<p class="no-data-message svelte-vpn0sc">No profit transaction data available.</p>',
  ),
  Xx = z(
    '<tr class="item-row"><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="profit-value svelte-vpn0sc"> </td></tr>',
  ),
  Qx = z(
    '<div class="list-container svelte-vpn0sc"><table class="items-table svelte-vpn0sc"><thead><tr><th class="svelte-vpn0sc">Sale ID</th><th class="svelte-vpn0sc">Date</th><th class="svelte-vpn0sc">Item Name</th><th class="svelte-vpn0sc">Customer</th><th class="svelte-vpn0sc">Qty Sold</th><th class="svelte-vpn0sc">Purchase Price/Unit</th><th class="svelte-vpn0sc">Selling Price/Unit</th><th class="svelte-vpn0sc">Profit/Unit</th><th class="svelte-vpn0sc">Total Profit</th></tr></thead><tbody></tbody></table></div>',
  ),
  Gx = z(
    '<div class="container svelte-vpn0sc"><div class="header svelte-vpn0sc"><p class="title-text svelte-vpn0sc">Profit Analysis</p></div> <div class="summary-card grand-total-profit-card svelte-vpn0sc"><h4 class="svelte-vpn0sc">Grand Total Profit</h4> <p class="total-value svelte-vpn0sc"> </p></div> <div class="section profit-by-item-section svelte-vpn0sc"><h3 class="section-title svelte-vpn0sc">Profit by Item</h3> <!></div> <div class="section profit-transactions-section svelte-vpn0sc"><h3 class="section-title svelte-vpn0sc">Individual Profit Transactions</h3> <!></div></div>',
  );
function fd(n, t) {
  ie(t, !0);
  let e = V(Pt([])),
    s = V(Pt([])),
    i = V(0),
    r = V(!0),
    a = V(!0),
    o = V(''),
    l = V(''),
    c,
    u = V(null);
  async function d() {
    C(r, !0), C(o, '');
    try {
      const E = await st.get('http://localhost:3000/api/data/profits/summary');
      C(e, E.data.transactions, !0), C(i, E.data.grandTotalProfit, !0);
    } catch (E) {
      console.error('Error fetching profit summary:', E),
        C(o, 'Failed to load profit transactions.'),
        C(e, [], !0),
        C(i, 0);
    } finally {
      C(r, !1);
    }
  }
  async function h() {
    C(a, !0), C(l, '');
    try {
      const E = await st.get('http://localhost:3000/api/data/profits/byitem');
      C(s, E.data, !0);
    } catch (E) {
      console.error('Error fetching profit by item:', E),
        C(l, 'Failed to load profit by item.'),
        C(s, [], !0);
    } finally {
      C(a, !1);
    }
  }
  function g(E) {
    if (!E) return 'N/A';
    try {
      return new Date(E).toLocaleDateString(void 0, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return E;
    }
  }
  function f(E) {
    return E == null
      ? 'N/A'
      : E.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  function p() {
    if (c && v(s).length > 0) {
      v(u) && (v(u).destroy(), C(u, null));
      const E = v(s).map((U) => U.itemname),
        W = v(s).map((U) => U.total_profit_for_item),
        Z = {
          labels: E,
          datasets: [
            {
              label: 'Total Profit by Item',
              data: W,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(199, 199, 199, 0.7)',
                'rgba(83, 102, 255, 0.7)',
                'rgba(40, 159, 64, 0.7)',
                'rgba(210, 99, 132, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)',
                'rgba(83, 102, 255, 1)',
                'rgba(40, 159, 64, 1)',
                'rgba(210, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };
      C(
        u,
        new Ht(c, {
          type: 'bar',
          data: Z,
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            indexAxis: 'y',
            scales: {
              x: {
                beginAtZero: !0,
                title: { display: !0, text: 'Total Profit' },
              },
              y: { title: { display: !0, text: 'Item' } },
            },
            plugins: {
              legend: { display: !1 },
              title: { display: !0, text: 'Top Profitable Items' },
            },
          },
        }),
        !0,
      );
    } else v(u) && (v(u).destroy(), C(u, null));
  }
  ye(() => {
    d(), h();
  }),
    Qe(() => {
      !v(a) && c && p();
    });
  var m = Gx(),
    b = A(P(m), 2),
    _ = A(P(b), 2),
    x = P(_),
    w = A(b, 2),
    y = A(P(w), 2);
  {
    var D = (E) => {
        var W = Wx();
        N(E, W);
      },
      T = (E, W) => {
        {
          var Z = (q) => {
              var K = Hx(),
                Y = P(K),
                I = P(Y);
              ot(() => j(I, v(l))), N(q, K);
            },
            U = (q, K) => {
              {
                var Y = (H) => {
                    var $ = jx();
                    N(H, $);
                  },
                  I = (H) => {
                    var $ = qx(),
                      tt = tn($),
                      B = P(tt);
                    jn(
                      B,
                      (wt) => (c = wt),
                      () => c,
                    );
                    var F = A(tt, 2),
                      J = P(F),
                      mt = A(P(J));
                    _e(
                      mt,
                      21,
                      () => v(s),
                      (wt) => wt.itemcode,
                      (wt, Dt) => {
                        var Gt = Vx(),
                          Fe = P(Gt),
                          Ie = P(Fe),
                          Ne = A(Fe),
                          Kt = P(Ne),
                          Ft = A(Ne),
                          It = P(Ft),
                          oe = A(Ft),
                          xe = P(oe),
                          Be = A(oe),
                          we = P(Be);
                        ot(
                          (ze, ke, We) => {
                            j(Ie, v(Dt).itemname),
                              j(Kt, v(Dt).total_quantity_sold),
                              j(It, ze),
                              j(xe, ke),
                              j(we, We);
                          },
                          [
                            () => f(v(Dt).avg_purchase_price),
                            () => f(v(Dt).avg_selling_price),
                            () => f(v(Dt).total_profit_for_item),
                          ],
                        ),
                          N(wt, Gt);
                      },
                    ),
                      N(H, $);
                  };
                dt(
                  q,
                  (H) => {
                    v(s).length === 0 ? H(Y) : H(I, !1);
                  },
                  K,
                );
              }
            };
          dt(
            E,
            (q) => {
              v(l) ? q(Z) : q(U, !1);
            },
            W,
          );
        }
      };
    dt(y, (E) => {
      v(a) ? E(D) : E(T, !1);
    });
  }
  var k = A(w, 2),
    O = A(P(k), 2);
  {
    var L = (E) => {
        var W = Yx();
        N(E, W);
      },
      R = (E, W) => {
        {
          var Z = (q) => {
              var K = Ux(),
                Y = P(K),
                I = P(Y);
              ot(() => j(I, v(o))), N(q, K);
            },
            U = (q, K) => {
              {
                var Y = (H) => {
                    var $ = $x();
                    N(H, $);
                  },
                  I = (H) => {
                    var $ = Qx(),
                      tt = P($),
                      B = A(P(tt));
                    _e(
                      B,
                      21,
                      () => v(e),
                      (F) => F.sale_id,
                      (F, J) => {
                        var mt = Xx(),
                          wt = P(mt),
                          Dt = P(wt),
                          Gt = A(wt),
                          Fe = P(Gt),
                          Ie = A(Gt),
                          Ne = P(Ie),
                          Kt = A(Ie),
                          Ft = P(Kt),
                          It = A(Kt),
                          oe = P(It),
                          xe = A(It),
                          Be = P(xe),
                          we = A(xe),
                          ze = P(we),
                          ke = A(we),
                          We = P(ke),
                          Mn = A(ke),
                          Yn = P(Mn);
                        ot(
                          (nn, Sn, Un, rr, ar) => {
                            j(Dt, v(J).sale_id),
                              j(Fe, nn),
                              j(Ne, v(J).itemname),
                              j(Ft, v(J).custname),
                              j(oe, v(J).quantity_sold),
                              j(Be, Sn),
                              j(ze, Un),
                              j(We, rr),
                              j(Yn, ar);
                          },
                          [
                            () => g(v(J).sale_date),
                            () => f(v(J).purchase_price_per_unit),
                            () => f(v(J).selling_price_per_unit),
                            () => f(v(J).profit_per_unit),
                            () => f(v(J).total_profit_for_transaction),
                          ],
                        ),
                          N(F, mt);
                      },
                    ),
                      N(H, $);
                  };
                dt(
                  q,
                  (H) => {
                    v(e).length === 0 ? H(Y) : H(I, !1);
                  },
                  K,
                );
              }
            };
          dt(
            E,
            (q) => {
              v(o) ? q(Z) : q(U, !1);
            },
            W,
          );
        }
      };
    dt(O, (E) => {
      v(r) ? E(L) : E(R, !1);
    });
  }
  ot((E) => j(x, E), [() => f(v(i))]), N(n, m), re();
}
var Kx = z('<option> </option>'),
  Jx = z(
    '<div class="loading-state svelte-1czxpiu"><p>Loading top customers...</p></div>',
  ),
  Zx = z(
    '<div class="error-state svelte-1czxpiu"><p class="svelte-1czxpiu"> </p></div>',
  ),
  tw = z('<p class="no-data-message svelte-1czxpiu"> </p>'),
  ew = z(
    '<tr><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td> </td><td class="svelte-1czxpiu"> </td></tr>',
  ),
  nw = z(
    '<div class="chart-container-wrapper svelte-1czxpiu"><canvas class="svelte-1czxpiu"></canvas></div> <div class="list-container svelte-1czxpiu"><table class="items-table svelte-1czxpiu"><thead><tr><th class="svelte-1czxpiu">Customer Name</th><th class="svelte-1czxpiu">Total Orders</th><th class="svelte-1czxpiu">Total Quantity Purchased</th><th class="svelte-1czxpiu">Total Revenue</th><th class="svelte-1czxpiu">Total Profit</th><th class="svelte-1czxpiu">Year</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  sw = z(
    '<div class="container svelte-1czxpiu"><div class="header svelte-1czxpiu"><p class="title-text svelte-1czxpiu">Top Customers</p> <div class="controls svelte-1czxpiu"><label for="customer-metric-select" class="svelte-1czxpiu">Display by:</label> <select id="customer-metric-select" class="svelte-1czxpiu"><option>Total Profit</option><option>Total Revenue</option><option>Total Quantity Purchased</option><option>Total Orders</option></select> <label for="customer-limit-select" class="svelte-1czxpiu">Show Top:</label> <select id="customer-limit-select" class="svelte-1czxpiu"><option>3</option><option>5</option><option>10</option></select> <label for="year-select" class="svelte-1czxpiu">Year:</label> <select id="year-select" class="svelte-1czxpiu"><option>All Years</option><!></select></div></div> <!></div>',
  );
function gd(n, t) {
  ie(t, !0);
  let e = V(Pt([])),
    s = V(!0),
    i = V(''),
    r,
    a = V(null),
    o = V('total_profit_from_customer'),
    l = V(5),
    c = V('all'),
    u = V(Pt([])),
    d = V(Pt([]));
  async function h() {
    C(s, !0), C(i, '');
    try {
      const I = await st.get('http://localhost:3000/api/data/top/customers');
      C(d, I.data, !0), g(v(d));
    } catch (I) {
      console.error('Error fetching top customers:', I),
        C(i, 'Failed to load top customers.'),
        C(e, [], !0),
        C(u, [], !0),
        C(d, [], !0);
    } finally {
      C(s, !1);
    }
  }
  function g(I) {
    const H = new Set(),
      $ = {},
      tt = {};
    I.forEach((F) => {
      const J = F.sale_year;
      J && H.add(J),
        tt[F.custname] ||
          (tt[F.custname] = {
            custcode: F.custcode,
            custname: F.custname,
            total_orders: 0,
            total_quantity_purchased: 0,
            total_revenue_from_customer: 0,
            total_profit_from_customer: 0,
          }),
        (tt[F.custname].total_orders += F.total_orders),
        (tt[F.custname].total_quantity_purchased += F.total_quantity_purchased),
        (tt[F.custname].total_revenue_from_customer +=
          F.total_revenue_from_customer),
        (tt[F.custname].total_profit_from_customer +=
          F.total_profit_from_customer),
        J &&
          ($[J] || ($[J] = {}),
          $[J][F.custname] ||
            ($[J][F.custname] = {
              custcode: F.custcode,
              custname: F.custname,
              total_orders: 0,
              total_quantity_purchased: 0,
              total_revenue_from_customer: 0,
              total_profit_from_customer: 0,
            }),
          ($[J][F.custname].total_orders += F.total_orders),
          ($[J][F.custname].total_quantity_purchased +=
            F.total_quantity_purchased),
          ($[J][F.custname].total_revenue_from_customer +=
            F.total_revenue_from_customer),
          ($[J][F.custname].total_profit_from_customer +=
            F.total_profit_from_customer));
    }),
      C(
        u,
        Array.from(H).sort((F, J) => J - F),
        !0,
      );
    let B = [];
    if (v(c) === 'all') B = Object.values(tt);
    else {
      const F = String(v(c));
      $[F] && (B = Object.values($[F]));
    }
    C(e, B.sort((F, J) => J[v(o)] - F[v(o)]).slice(0, v(l)), !0);
  }
  function f() {
    return v(o) === 'total_profit_from_customer'
      ? 'Total Profit'
      : v(o) === 'total_revenue_from_customer'
        ? 'Total Revenue'
        : v(o) === 'total_quantity_purchased'
          ? 'Total Quantity Purchased'
          : v(o) === 'total_orders'
            ? 'Total Orders'
            : 'Value';
  }
  function p() {
    if (r && v(e).length > 0) {
      v(a) && (v(a).destroy(), C(a, null));
      const I = v(e).map(($) => $.custname),
        H = v(e).map(($) => $[v(o)]);
      C(
        a,
        new Ht(r, {
          type: 'bar',
          data: {
            labels: I,
            datasets: [
              {
                label: f(),
                data: H,
                backgroundColor: 'rgba(153, 102, 255, 0.7)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: 'y',
            responsive: !0,
            maintainAspectRatio: !1,
            scales: {
              x: { beginAtZero: !0, title: { display: !0, text: f() } },
              y: { title: { display: !0, text: 'Customer' } },
            },
            plugins: {
              legend: { display: !1 },
              title: {
                display: !0,
                text: `Top ${v(l)} Customers by ${f()} (${v(c) === 'all' ? 'All Years' : v(c)})`,
              },
            },
          },
        }),
        !0,
      );
    } else v(a) && (v(a).destroy(), C(a, null));
  }
  function m(I) {
    return I == null
      ? 'N/A'
      : I.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  ye(() => {
    h();
  }),
    Qe(() => {
      !v(s) && v(d).length > 0
        ? (g(v(d)), p())
        : !v(s) && v(d).length === 0 && v(a) && (v(a).destroy(), C(a, null));
    });
  var b = sw(),
    _ = P(b),
    x = A(P(_), 2),
    w = A(P(x), 2),
    y = P(w);
  y.value = y.__value = 'total_profit_from_customer';
  var D = A(y);
  D.value = D.__value = 'total_revenue_from_customer';
  var T = A(D);
  T.value = T.__value = 'total_quantity_purchased';
  var k = A(T);
  k.value = k.__value = 'total_orders';
  var O = A(w, 4),
    L = P(O);
  L.value = L.__value = 3;
  var R = A(L);
  R.value = R.__value = 5;
  var E = A(R);
  E.value = E.__value = 10;
  var W = A(O, 4),
    Z = P(W);
  Z.value = Z.__value = 'all';
  var U = A(Z);
  _e(
    U,
    17,
    () => v(u),
    Cs,
    (I, H) => {
      var $ = Kx(),
        tt = {},
        B = P($);
      ot(() => {
        tt !== (tt = v(H)) && ($.value = ($.__value = v(H)) ?? ''), j(B, v(H));
      }),
        N(I, $);
    },
  );
  var q = A(_, 2);
  {
    var K = (I) => {
        var H = Jx();
        N(I, H);
      },
      Y = (I, H) => {
        {
          var $ = (B) => {
              var F = Zx(),
                J = P(F),
                mt = P(J);
              ot(() => j(mt, v(i))), N(B, F);
            },
            tt = (B, F) => {
              {
                var J = (wt) => {
                    var Dt = tw(),
                      Gt = P(Dt);
                    ot(() =>
                      j(
                        Gt,
                        `No customer data available for ${(v(c) === 'all' ? 'all years' : v(c)) ?? ''}.`,
                      ),
                    ),
                      N(wt, Dt);
                  },
                  mt = (wt) => {
                    var Dt = nw(),
                      Gt = tn(Dt),
                      Fe = P(Gt);
                    jn(
                      Fe,
                      (Ft) => (r = Ft),
                      () => r,
                    );
                    var Ie = A(Gt, 2),
                      Ne = P(Ie),
                      Kt = A(P(Ne));
                    _e(
                      Kt,
                      21,
                      () => v(e),
                      (Ft) => Ft.custcode,
                      (Ft, It) => {
                        var oe = ew(),
                          xe = P(oe),
                          Be = P(xe),
                          we = A(xe),
                          ze = P(we),
                          ke = A(we),
                          We = P(ke),
                          Mn = A(ke),
                          Yn = P(Mn),
                          nn = A(Mn);
                        let Sn;
                        var Un = P(nn),
                          rr = A(nn),
                          ar = P(rr);
                        ot(
                          (md, bd, _d, vd) => {
                            j(Be, v(It).custname),
                              j(ze, v(It).total_orders),
                              j(We, md),
                              j(Yn, bd),
                              (Sn = Et(nn, 1, 'svelte-1czxpiu', null, Sn, _d)),
                              j(Un, vd),
                              j(ar, v(c) === 'all' ? 'All' : v(c));
                          },
                          [
                            () =>
                              v(It).total_quantity_purchased.toLocaleString(),
                            () => m(v(It).total_revenue_from_customer),
                            () => ({
                              'profit-value':
                                v(It).total_profit_from_customer > 0,
                              'loss-value':
                                v(It).total_profit_from_customer < 0,
                            }),
                            () => m(v(It).total_profit_from_customer),
                          ],
                        ),
                          N(Ft, oe);
                      },
                    ),
                      N(wt, Dt);
                  };
                dt(
                  B,
                  (wt) => {
                    v(e).length === 0 ? wt(J) : wt(mt, !1);
                  },
                  F,
                );
              }
            };
          dt(
            I,
            (B) => {
              v(i) ? B($) : B(tt, !1);
            },
            H,
          );
        }
      };
    dt(q, (I) => {
      v(s) ? I(K) : I(Y, !1);
    });
  }
  An(
    w,
    () => v(o),
    (I) => C(o, I),
  ),
    An(
      O,
      () => v(l),
      (I) => C(l, I),
    ),
    An(
      W,
      () => v(c),
      (I) => C(c, I),
    ),
    N(n, b),
    re();
}
var iw = z('<option> </option>'),
  rw = z(
    '<div class="loading-state svelte-gbyltb"><p>Loading top suppliers...</p></div>',
  ),
  aw = z(
    '<div class="error-state svelte-gbyltb"><p class="svelte-gbyltb"> </p></div>',
  ),
  ow = z('<p class="no-data-message svelte-gbyltb"> </p>'),
  lw = z(
    '<tr><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td></tr>',
  ),
  cw = z(
    '<div class="chart-container-wrapper svelte-gbyltb"><canvas class="svelte-gbyltb"></canvas></div> <div class="list-container svelte-gbyltb"><table class="items-table svelte-gbyltb"><thead><tr><th class="svelte-gbyltb">Supplier Name</th><th class="svelte-gbyltb">Total Batches</th><th class="svelte-gbyltb">Total Quantity Supplied</th><th class="svelte-gbyltb">Total Purchase Value</th><th class="svelte-gbyltb">Year</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  uw = z(
    '<div class="container svelte-gbyltb"><div class="header svelte-gbyltb"><p class="title-text svelte-gbyltb">Top Suppliers</p> <div class="controls svelte-gbyltb"><label for="supplier-metric-select" class="svelte-gbyltb">Display by:</label> <select id="supplier-metric-select" class="svelte-gbyltb"><option>Total Purchase Value</option><option>Total Quantity Supplied</option><option>Total Batches Supplied</option></select> <label for="supplier-limit-select" class="svelte-gbyltb">Show Top:</label> <select id="supplier-limit-select" class="svelte-gbyltb"><option>3</option><option>5</option><option>10</option></select> <label for="year-select" class="svelte-gbyltb">Year:</label> <select id="year-select" class="svelte-gbyltb"><option>All Years</option><!></select></div></div> <!></div>',
  );
function pd(n, t) {
  ie(t, !0);
  let e = V(Pt([])),
    s = V(!0),
    i = V(''),
    r,
    a = V(null),
    o = V('total_purchase_value'),
    l = V(5),
    c = V('all'),
    u = V(Pt([])),
    d = V(Pt([]));
  async function h() {
    C(s, !0), C(i, '');
    try {
      const Y = await st.get('http://localhost:3000/api/data/top/suppliers');
      C(d, Y.data, !0), g(v(d));
    } catch (Y) {
      console.error('Error fetching top suppliers:', Y),
        C(i, 'Failed to load top suppliers.'),
        C(e, [], !0),
        C(u, [], !0),
        C(d, [], !0);
    } finally {
      C(s, !1);
    }
  }
  function g(Y) {
    const I = new Set(),
      H = {},
      $ = {};
    Y.forEach((B) => {
      const F = B.purchase_year;
      I.add(F),
        $[B.suppname] ||
          ($[B.suppname] = {
            suppcode: B.suppcode,
            suppname: B.suppname,
            total_purchase_value: 0,
            total_quantity_supplied: 0,
            total_batches_supplied: 0,
          }),
        ($[B.suppname].total_purchase_value += B.total_purchase_value),
        ($[B.suppname].total_quantity_supplied += B.total_quantity_supplied),
        ($[B.suppname].total_batches_supplied += B.total_batches_supplied),
        H[F] || (H[F] = {}),
        H[F][B.suppname] ||
          (H[F][B.suppname] = {
            suppcode: B.suppcode,
            suppname: B.suppname,
            total_purchase_value: 0,
            total_quantity_supplied: 0,
            total_batches_supplied: 0,
          }),
        (H[F][B.suppname].total_purchase_value += B.total_purchase_value),
        (H[F][B.suppname].total_quantity_supplied += B.total_quantity_supplied),
        (H[F][B.suppname].total_batches_supplied += B.total_batches_supplied);
    }),
      C(
        u,
        Array.from(I).sort((B, F) => F - B),
        !0,
      );
    let tt = [];
    if (v(c) === 'all') tt = Object.values($);
    else {
      const B = String(v(c));
      H[B] && (tt = Object.values(H[B]));
    }
    C(e, tt.sort((B, F) => F[v(o)] - B[v(o)]).slice(0, v(l)), !0);
  }
  function f() {
    return v(o) === 'total_purchase_value'
      ? 'Total Purchase Value'
      : v(o) === 'total_quantity_supplied'
        ? 'Total Quantity Supplied'
        : v(o) === 'total_batches_supplied'
          ? 'Total Batches Supplied'
          : 'Value';
  }
  function p() {
    if (r && v(e).length > 0) {
      v(a) && (v(a).destroy(), C(a, null));
      const Y = v(e).map((H) => H.suppname),
        I = v(e).map((H) => H[v(o)]);
      C(
        a,
        new Ht(r, {
          type: 'bar',
          data: {
            labels: Y,
            datasets: [
              {
                label: f(),
                data: I,
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: 'y',
            responsive: !0,
            maintainAspectRatio: !1,
            scales: {
              x: { beginAtZero: !0, title: { display: !0, text: f() } },
              y: { title: { display: !0, text: 'Supplier' } },
            },
            plugins: {
              legend: { display: !1 },
              title: {
                display: !0,
                text: `Top ${v(l)} Suppliers by ${f()} (${v(c) === 'all' ? 'All Years' : v(c)})`,
              },
            },
          },
        }),
        !0,
      );
    } else v(a) && (v(a).destroy(), C(a, null));
  }
  function m(Y) {
    return Y == null
      ? 'N/A'
      : Y.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  ye(() => {
    h();
  }),
    Qe(() => {
      !v(s) && v(d).length > 0
        ? (g(v(d)), p())
        : !v(s) && v(d).length === 0 && v(a) && (v(a).destroy(), C(a, null));
    });
  var b = uw(),
    _ = P(b),
    x = A(P(_), 2),
    w = A(P(x), 2),
    y = P(w);
  y.value = y.__value = 'total_purchase_value';
  var D = A(y);
  D.value = D.__value = 'total_quantity_supplied';
  var T = A(D);
  T.value = T.__value = 'total_batches_supplied';
  var k = A(w, 4),
    O = P(k);
  O.value = O.__value = 3;
  var L = A(O);
  L.value = L.__value = 5;
  var R = A(L);
  R.value = R.__value = 10;
  var E = A(k, 4),
    W = P(E);
  W.value = W.__value = 'all';
  var Z = A(W);
  _e(
    Z,
    17,
    () => v(u),
    Cs,
    (Y, I) => {
      var H = iw(),
        $ = {},
        tt = P(H);
      ot(() => {
        $ !== ($ = v(I)) && (H.value = (H.__value = v(I)) ?? ''), j(tt, v(I));
      }),
        N(Y, H);
    },
  );
  var U = A(_, 2);
  {
    var q = (Y) => {
        var I = rw();
        N(Y, I);
      },
      K = (Y, I) => {
        {
          var H = (tt) => {
              var B = aw(),
                F = P(B),
                J = P(F);
              ot(() => j(J, v(i))), N(tt, B);
            },
            $ = (tt, B) => {
              {
                var F = (mt) => {
                    var wt = ow(),
                      Dt = P(wt);
                    ot(() =>
                      j(
                        Dt,
                        `No supplier data available for ${(v(c) === 'all' ? 'all years' : v(c)) ?? ''}.`,
                      ),
                    ),
                      N(mt, wt);
                  },
                  J = (mt) => {
                    var wt = cw(),
                      Dt = tn(wt),
                      Gt = P(Dt);
                    jn(
                      Gt,
                      (Kt) => (r = Kt),
                      () => r,
                    );
                    var Fe = A(Dt, 2),
                      Ie = P(Fe),
                      Ne = A(P(Ie));
                    _e(
                      Ne,
                      21,
                      () => v(e),
                      (Kt) => Kt.suppcode,
                      (Kt, Ft) => {
                        var It = lw(),
                          oe = P(It),
                          xe = P(oe),
                          Be = A(oe),
                          we = P(Be),
                          ze = A(Be),
                          ke = P(ze),
                          We = A(ze),
                          Mn = P(We),
                          Yn = A(We),
                          nn = P(Yn);
                        ot(
                          (Sn, Un) => {
                            j(xe, v(Ft).suppname),
                              j(we, v(Ft).total_batches_supplied),
                              j(ke, Sn),
                              j(Mn, Un),
                              j(nn, v(c) === 'all' ? 'All' : v(c));
                          },
                          [
                            () =>
                              v(Ft).total_quantity_supplied.toLocaleString(),
                            () => m(v(Ft).total_purchase_value),
                          ],
                        ),
                          N(Kt, It);
                      },
                    ),
                      N(mt, wt);
                  };
                dt(
                  tt,
                  (mt) => {
                    v(e).length === 0 ? mt(F) : mt(J, !1);
                  },
                  B,
                );
              }
            };
          dt(
            Y,
            (tt) => {
              v(i) ? tt(H) : tt($, !1);
            },
            I,
          );
        }
      };
    dt(U, (Y) => {
      v(s) ? Y(q) : Y(K, !1);
    });
  }
  An(
    w,
    () => v(o),
    (Y) => C(o, Y),
  ),
    An(
      k,
      () => v(l),
      (Y) => C(l, Y),
    ),
    An(
      E,
      () => v(c),
      (Y) => C(c, Y),
    ),
    N(n, b),
    re();
}
var dw = (n, t) => t(ea),
  hw = (n, t) => t(ju),
  fw = (n, t) => t(cd),
  gw = (n, t) => t(ud),
  pw = (n, t) => t(dd),
  mw = (n, t) => t(hd),
  bw = (n, t) => t(fd),
  _w = (n, t) => t(gd),
  vw = (n, t) => t(pd),
  yw = z(
    '<!> <div class="parent svelte-g1sdvk"><div class="div1 svelte-g1sdvk"><p class="text-internal svelte-g1sdvk">Dashboard</p></div> <div class="div2 svelte-g1sdvk"><div class="option svelte-g1sdvk"><p class="text-internal svelte-g1sdvk">Select</p> <div class="selector svelte-g1sdvk"><button>Top Selling items</button> <button>Expired items</button> <button>Total Items Bought</button> <button>Total Items Sold</button> <button>Item Details</button> <button>Low Stock Items</button> <button>Profits</button> <button>Top Customers</button> <button>Top Suppliers</button></div></div></div> <div class="div4 svelte-g1sdvk"><div id="op4" class="option svelte-g1sdvk"><!></div></div></div>',
    1,
  );
function xw(n) {
  let t = V(Pt(ea)),
    e = (D) => {
      C(t, D, !0);
    },
    s = (D) => (D == v(t) ? 'yes' : 'no');
  var i = yw(),
    r = tn(i);
  Vh(r, {});
  var a = A(r, 2),
    o = A(P(a), 2),
    l = P(o),
    c = A(P(l), 2),
    u = P(c);
  u.__click = [dw, e];
  var d = A(u, 2);
  d.__click = [hw, e];
  var h = A(d, 2);
  h.__click = [fw, e];
  var g = A(h, 2);
  g.__click = [gw, e];
  var f = A(g, 2);
  f.__click = [pw, e];
  var p = A(f, 2);
  p.__click = [mw, e];
  var m = A(p, 2);
  m.__click = [bw, e];
  var b = A(m, 2);
  b.__click = [_w, e];
  var _ = A(b, 2);
  _.__click = [vw, e];
  var x = A(o, 2),
    w = P(x),
    y = P(w);
  Rh(
    y,
    () => v(t),
    (D, T) => {
      T(D, {});
    },
  ),
    ot(
      (D, T, k, O, L, R, E, W, Z) => {
        Et(u, 1, D, 'svelte-g1sdvk'),
          Et(d, 1, T, 'svelte-g1sdvk'),
          Et(h, 1, k, 'svelte-g1sdvk'),
          Et(g, 1, O, 'svelte-g1sdvk'),
          Et(f, 1, L, 'svelte-g1sdvk'),
          Et(p, 1, R, 'svelte-g1sdvk'),
          Et(m, 1, E, 'svelte-g1sdvk'),
          Et(b, 1, W, 'svelte-g1sdvk'),
          Et(_, 1, Z, 'svelte-g1sdvk');
      },
      [
        () => ce(s(ea)),
        () => ce(s(ju)),
        () => ce(s(cd)),
        () => ce(s(ud)),
        () => ce(s(dd)),
        () => ce(s(hd)),
        () => ce(s(fd)),
        () => ce(s(gd)),
        () => ce(s(pd)),
      ],
    ),
    N(n, i);
}
kh(['click']);
Ph(xw, { target: document.getElementById('app') });
