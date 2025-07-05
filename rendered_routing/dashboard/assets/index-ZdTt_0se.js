var Md = Object.defineProperty;
var Sd = (n, t, e) =>
  t in n
    ? Md(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var S = (n, t, e) => Sd(n, typeof t != 'symbol' ? t + '' : t, e);
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
const Xa = !1;
var ji = Array.isArray,
  Pd = Array.prototype.indexOf,
  ha = Array.from,
  Dd = Object.defineProperty,
  In = Object.getOwnPropertyDescriptor,
  Td = Object.getOwnPropertyDescriptors,
  Od = Object.prototype,
  Ed = Array.prototype,
  Ql = Object.getPrototypeOf,
  Qa = Object.isExtensible;
function Cd(n) {
  return n();
}
function Rr(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
const ge = 2,
  Gl = 4,
  Vi = 8,
  fa = 16,
  qe = 32,
  qn = 64,
  wi = 128,
  ee = 256,
  ki = 512,
  Xt = 1024,
  Ee = 2048,
  Dn = 4096,
  Ve = 8192,
  Yi = 16384,
  Ad = 32768,
  qi = 65536,
  Rd = 1 << 17,
  Ld = 1 << 19,
  Kl = 1 << 20,
  Lr = 1 << 21,
  Ye = Symbol('$state'),
  Fd = Symbol('legacy props');
function Jl(n) {
  return n === this.v;
}
function Id(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == 'object') || typeof n == 'function';
}
function Zl(n) {
  return !Id(n, this.v);
}
function Nd(n) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Bd() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function zd(n) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function Wd() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Hd(n) {
  throw new Error('https://svelte.dev/e/props_invalid_value');
}
function jd() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Vd() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function Yd() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let $n = !1,
  qd = !1;
function $d() {
  $n = !0;
}
const pa = 1,
  ga = 2,
  tc = 4,
  Ud = 8,
  Xd = 16,
  Qd = 2,
  Gd = 1,
  Kd = 2,
  Vt = Symbol();
function Jd(n) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let yt = null;
function Ga(n) {
  yt = n;
}
function be(n, t = !1, e) {
  var s = (yt = {
    p: yt,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null,
  });
  $n && !t && (yt.l = { s: null, u: null, r1: [], r2: xs(!1) }),
    ah(() => {
      s.d = !0;
    });
}
function _e(n) {
  const t = yt;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var e = dt,
        s = ut;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var r = a[i];
          rn(r.effect), Ce(r.reaction), As(r.fn);
        }
      } finally {
        rn(e), Ce(s);
      }
    }
    (yt = t.p), (t.m = !0);
  }
  return {};
}
function $i() {
  return !$n || (yt !== null && yt.l === null);
}
function Dt(n) {
  if (typeof n != 'object' || n === null || Ye in n) return n;
  const t = Ql(n);
  if (t !== Od && t !== Ed) return n;
  var e = new Map(),
    s = ji(n),
    i = q(0),
    r = ut,
    a = (o) => {
      var l = ut;
      Ce(r);
      var c = o();
      return Ce(l), c;
    };
  return (
    s && e.set('length', q(n.length)),
    new Proxy(n, {
      defineProperty(o, l, c) {
        (!('value' in c) ||
          c.configurable === !1 ||
          c.enumerable === !1 ||
          c.writable === !1) &&
          jd();
        var u = e.get(l);
        return (
          u === void 0
            ? ((u = a(() => q(c.value))), e.set(l, u))
            : A(
                u,
                a(() => Dt(c.value)),
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
              a(() => q(Vt)),
            ),
            pr(i));
        else {
          if (s && typeof l == 'string') {
            var u = e.get('length'),
              d = Number(l);
            Number.isInteger(d) && d < u.v && A(u, d);
          }
          A(c, Vt), pr(i);
        }
        return !0;
      },
      get(o, l, c) {
        var p;
        if (l === Ye) return n;
        var u = e.get(l),
          d = l in o;
        if (
          (u === void 0 &&
            (!d || ((p = In(o, l)) != null && p.writable)) &&
            ((u = a(() => q(Dt(d ? o[l] : Vt)))), e.set(l, u)),
          u !== void 0)
        ) {
          var h = _(u);
          return h === Vt ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && 'value' in c) {
          var u = e.get(l);
          u && (c.value = _(u));
        } else if (c === void 0) {
          var d = e.get(l),
            h = d == null ? void 0 : d.v;
          if (d !== void 0 && h !== Vt)
            return { enumerable: !0, configurable: !0, value: h, writable: !0 };
        }
        return c;
      },
      has(o, l) {
        var h;
        if (l === Ye) return !0;
        var c = e.get(l),
          u = (c !== void 0 && c.v !== Vt) || Reflect.has(o, l);
        if (
          c !== void 0 ||
          (dt !== null && (!u || ((h = In(o, l)) != null && h.writable)))
        ) {
          c === void 0 && ((c = a(() => q(u ? Dt(o[l]) : Vt))), e.set(l, c));
          var d = _(c);
          if (d === Vt) return !1;
        }
        return u;
      },
      set(o, l, c, u) {
        var v;
        var d = e.get(l),
          h = l in o;
        if (s && l === 'length')
          for (var p = c; p < d.v; p += 1) {
            var f = e.get(p + '');
            f !== void 0
              ? A(f, Vt)
              : p in o && ((f = a(() => q(Vt))), e.set(p + '', f));
          }
        d === void 0
          ? (!h || ((v = In(o, l)) != null && v.writable)) &&
            ((d = a(() => q(void 0))),
            A(
              d,
              a(() => Dt(c)),
            ),
            e.set(l, d))
          : ((h = d.v !== Vt),
            A(
              d,
              a(() => Dt(c)),
            ));
        var g = Reflect.getOwnPropertyDescriptor(o, l);
        if ((g != null && g.set && g.set.call(u, c), !h)) {
          if (s && typeof l == 'string') {
            var m = e.get('length'),
              b = Number(l);
            Number.isInteger(b) && b >= m.v && A(m, b + 1);
          }
          pr(i);
        }
        return !0;
      },
      ownKeys(o) {
        _(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var h = e.get(d);
          return h === void 0 || h.v !== Vt;
        });
        for (var [c, u] of e) u.v !== Vt && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Vd();
      },
    })
  );
}
function pr(n, t = 1) {
  A(n, n.v + t);
}
function Ka(n) {
  try {
    if (n !== null && typeof n == 'object' && Ye in n) return n[Ye];
  } catch {}
  return n;
}
function Zd(n, t) {
  return Object.is(Ka(n), Ka(t));
}
function ma(n) {
  var t = ge | Ee,
    e = ut !== null && (ut.f & ge) !== 0 ? ut : null;
  return (
    dt === null || (e !== null && (e.f & ee) !== 0) ? (t |= ee) : (dt.f |= Kl),
    {
      ctx: yt,
      deps: null,
      effects: null,
      equals: Jl,
      f: t,
      fn: n,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? dt,
    }
  );
}
function ba(n) {
  const t = ma(n);
  return (t.equals = Zl), t;
}
function ec(n) {
  var t = n.effects;
  if (t !== null) {
    n.effects = null;
    for (var e = 0; e < t.length; e += 1) sn(t[e]);
  }
}
function th(n) {
  for (var t = n.parent; t !== null; ) {
    if ((t.f & ge) === 0) return t;
    t = t.parent;
  }
  return null;
}
function nc(n) {
  var t,
    e = dt;
  rn(th(n));
  try {
    ec(n), (t = vc(n));
  } finally {
    rn(e);
  }
  return t;
}
function sc(n) {
  var t = nc(n),
    e = (Ge || (n.f & ee) !== 0) && n.deps !== null ? Dn : Xt;
  me(n, e), n.equals(t) || ((n.v = t), (n.wv = bc()));
}
const ys = new Map();
function xs(n, t) {
  var e = { f: 0, v: n, reactions: null, equals: Jl, rv: 0, wv: 0 };
  return e;
}
function q(n, t) {
  const e = xs(n);
  return hh(e), e;
}
function Nn(n, t = !1) {
  var s;
  const e = xs(n);
  return (
    t || (e.equals = Zl),
    $n && yt !== null && yt.l !== null && ((s = yt.l).s ?? (s.s = [])).push(e),
    e
  );
}
function A(n, t, e = !1) {
  ut !== null &&
    !Se &&
    $i() &&
    (ut.f & (ge | fa)) !== 0 &&
    !(Wt != null && Wt.includes(n)) &&
    Yd();
  let s = e ? Dt(t) : t;
  return Fr(n, s);
}
function Fr(n, t) {
  if (!n.equals(t)) {
    var e = n.v;
    Rs ? ys.set(n, t) : ys.set(n, e),
      (n.v = t),
      (n.f & ge) !== 0 &&
        ((n.f & Ee) !== 0 && nc(n), me(n, (n.f & ee) === 0 ? Xt : Dn)),
      (n.wv = bc()),
      ic(n, Ee),
      $i() &&
        dt !== null &&
        (dt.f & Xt) !== 0 &&
        (dt.f & (qe | qn)) === 0 &&
        (re === null ? fh([n]) : re.push(n));
  }
  return t;
}
function ic(n, t) {
  var e = n.reactions;
  if (e !== null)
    for (var s = $i(), i = e.length, r = 0; r < i; r++) {
      var a = e[r],
        o = a.f;
      (o & Ee) === 0 &&
        ((!s && a === dt) ||
          (me(a, t),
          (o & (Xt | ee)) !== 0 && ((o & ge) !== 0 ? ic(a, Dn) : Gi(a))));
    }
}
function eh() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let nh = !1;
var Ja, rc, ac, oc;
function sh() {
  if (Ja === void 0) {
    (Ja = window), (rc = /Firefox/.test(navigator.userAgent));
    var n = Element.prototype,
      t = Node.prototype,
      e = Text.prototype;
    (ac = In(t, 'firstChild').get),
      (oc = In(t, 'nextSibling').get),
      Qa(n) &&
        ((n.__click = void 0),
        (n.__className = void 0),
        (n.__attributes = null),
        (n.__style = void 0),
        (n.__e = void 0)),
      Qa(e) && (e.__t = void 0);
  }
}
function _a(n = '') {
  return document.createTextNode(n);
}
function Mi(n) {
  return ac.call(n);
}
function Ui(n) {
  return oc.call(n);
}
function M(n, t) {
  return Mi(n);
}
function Te(n, t) {
  {
    var e = Mi(n);
    return e instanceof Comment && e.data === '' ? Ui(e) : e;
  }
}
function T(n, t = 1, e = !1) {
  let s = n;
  for (; t--; ) s = Ui(s);
  return s;
}
function ih(n) {
  n.textContent = '';
}
function lc(n) {
  dt === null && ut === null && zd(),
    ut !== null && (ut.f & ee) !== 0 && dt === null && Bd(),
    Rs && Nd();
}
function rh(n, t) {
  var e = t.last;
  e === null
    ? (t.last = t.first = n)
    : ((e.next = n), (n.prev = e), (t.last = n));
}
function Un(n, t, e, s = !0) {
  var i = dt,
    r = {
      ctx: yt,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: n | Ee,
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
      ya(r), (r.f |= Ad);
    } catch (l) {
      throw (sn(r), l);
    }
  else t !== null && Gi(r);
  var a =
    e &&
    r.deps === null &&
    r.first === null &&
    r.nodes_start === null &&
    r.teardown === null &&
    (r.f & (Kl | wi)) === 0;
  if (!a && s && (i !== null && rh(r, i), ut !== null && (ut.f & ge) !== 0)) {
    var o = ut;
    (o.effects ?? (o.effects = [])).push(r);
  }
  return r;
}
function ah(n) {
  const t = Un(Vi, null, !1);
  return me(t, Xt), (t.teardown = n), t;
}
function nn(n) {
  lc();
  var t = dt !== null && (dt.f & qe) !== 0 && yt !== null && !yt.m;
  if (t) {
    var e = yt;
    (e.e ?? (e.e = [])).push({ fn: n, effect: dt, reaction: ut });
  } else {
    var s = As(n);
    return s;
  }
}
function oh(n) {
  return lc(), cc(n);
}
function lh(n) {
  const t = Un(qn, n, !0);
  return (e = {}) =>
    new Promise((s) => {
      e.outro
        ? ws(t, () => {
            sn(t), s(void 0);
          })
        : (sn(t), s(void 0));
    });
}
function As(n) {
  return Un(Gl, n, !1);
}
function cc(n) {
  return Un(Vi, n, !0);
}
function it(n, t = [], e = ma) {
  const s = t.map(e);
  return Xi(() => n(...s.map(_)));
}
function Xi(n, t = 0) {
  return Un(Vi | fa | t, n, !0);
}
function Wn(n, t = !0) {
  return Un(Vi | qe, n, !0, t);
}
function uc(n) {
  var t = n.teardown;
  if (t !== null) {
    const e = Rs,
      s = ut;
    Za(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Za(e), Ce(s);
    }
  }
}
function dc(n, t = !1) {
  var e = n.first;
  for (n.first = n.last = null; e !== null; ) {
    var s = e.next;
    (e.f & qn) !== 0 ? (e.parent = null) : sn(e, t), (e = s);
  }
}
function ch(n) {
  for (var t = n.first; t !== null; ) {
    var e = t.next;
    (t.f & qe) === 0 && sn(t), (t = e);
  }
}
function sn(n, t = !0) {
  var e = !1;
  (t || (n.f & Ld) !== 0) &&
    n.nodes_start !== null &&
    (uh(n.nodes_start, n.nodes_end), (e = !0)),
    dc(n, t && !e),
    Oi(n, 0),
    me(n, Yi);
  var s = n.transitions;
  if (s !== null) for (const r of s) r.stop();
  uc(n);
  var i = n.parent;
  i !== null && i.first !== null && hc(n),
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
function uh(n, t) {
  for (; n !== null; ) {
    var e = n === t ? null : Ui(n);
    n.remove(), (n = e);
  }
}
function hc(n) {
  var t = n.parent,
    e = n.prev,
    s = n.next;
  e !== null && (e.next = s),
    s !== null && (s.prev = e),
    t !== null &&
      (t.first === n && (t.first = s), t.last === n && (t.last = e));
}
function ws(n, t) {
  var e = [];
  va(n, e, !0),
    fc(e, () => {
      sn(n), t && t();
    });
}
function fc(n, t) {
  var e = n.length;
  if (e > 0) {
    var s = () => --e || t();
    for (var i of n) i.out(s);
  } else t();
}
function va(n, t, e) {
  if ((n.f & Ve) === 0) {
    if (((n.f ^= Ve), n.transitions !== null))
      for (const a of n.transitions) (a.is_global || e) && t.push(a);
    for (var s = n.first; s !== null; ) {
      var i = s.next,
        r = (s.f & qi) !== 0 || (s.f & qe) !== 0;
      va(s, t, r ? e : !1), (s = i);
    }
  }
}
function Si(n) {
  pc(n, !0);
}
function pc(n, t) {
  if ((n.f & Ve) !== 0) {
    (n.f ^= Ve), (n.f & Xt) === 0 && (n.f ^= Xt), Ls(n) && (me(n, Ee), Gi(n));
    for (var e = n.first; e !== null; ) {
      var s = e.next,
        i = (e.f & qi) !== 0 || (e.f & qe) !== 0;
      pc(e, i ? t : !1), (e = s);
    }
    if (n.transitions !== null)
      for (const r of n.transitions) (r.is_global || t) && r.in();
  }
}
let Pi = [];
function dh() {
  var n = Pi;
  (Pi = []), Rr(n);
}
function gc(n) {
  Pi.length === 0 && queueMicrotask(dh), Pi.push(n);
}
let li = !1,
  Ir = !1,
  Di = null,
  yn = !1,
  Rs = !1;
function Za(n) {
  Rs = n;
}
let ci = [];
let ut = null,
  Se = !1;
function Ce(n) {
  ut = n;
}
let dt = null;
function rn(n) {
  dt = n;
}
let Wt = null;
function hh(n) {
  ut !== null && ut.f & Lr && (Wt === null ? (Wt = [n]) : Wt.push(n));
}
let zt = null,
  Jt = 0,
  re = null;
function fh(n) {
  re = n;
}
let mc = 1,
  Ti = 0,
  Ge = !1;
function bc() {
  return ++mc;
}
function Ls(n) {
  var d;
  var t = n.f;
  if ((t & Ee) !== 0) return !0;
  if ((t & Dn) !== 0) {
    var e = n.deps,
      s = (t & ee) !== 0;
    if (e !== null) {
      var i,
        r,
        a = (t & ki) !== 0,
        o = s && dt !== null && !Ge,
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
        a && (c.f ^= ki), o && u !== null && (u.f & ee) === 0 && (c.f ^= ee);
      }
      for (i = 0; i < l; i++)
        if (((r = e[i]), Ls(r) && sc(r), r.wv > n.wv)) return !0;
    }
    (!s || (dt !== null && !Ge)) && me(n, Xt);
  }
  return !1;
}
function ph(n, t) {
  for (var e = t; e !== null; ) {
    if ((e.f & wi) !== 0)
      try {
        e.fn(n);
        return;
      } catch {
        e.f ^= wi;
      }
    e = e.parent;
  }
  throw ((li = !1), n);
}
function to(n) {
  return (n.f & Yi) === 0 && (n.parent === null || (n.parent.f & wi) === 0);
}
function Qi(n, t, e, s) {
  if (li) {
    if ((e === null && (li = !1), to(t))) throw n;
    return;
  }
  if ((e !== null && (li = !0), ph(n, t), to(t))) throw n;
}
function _c(n, t, e = !0) {
  var s = n.reactions;
  if (s !== null)
    for (var i = 0; i < s.length; i++) {
      var r = s[i];
      (Wt != null && Wt.includes(n)) ||
        ((r.f & ge) !== 0
          ? _c(r, t, !1)
          : t === r && (e ? me(r, Ee) : (r.f & Xt) !== 0 && me(r, Dn), Gi(r)));
    }
}
function vc(n) {
  var p;
  var t = zt,
    e = Jt,
    s = re,
    i = ut,
    r = Ge,
    a = Wt,
    o = yt,
    l = Se,
    c = n.f;
  (zt = null),
    (Jt = 0),
    (re = null),
    (Ge = (c & ee) !== 0 && (Se || !yn || ut === null)),
    (ut = (c & (qe | qn)) === 0 ? n : null),
    (Wt = null),
    Ga(n.ctx),
    (Se = !1),
    Ti++,
    (n.f |= Lr);
  try {
    var u = (0, n.fn)(),
      d = n.deps;
    if (zt !== null) {
      var h;
      if ((Oi(n, Jt), d !== null && Jt > 0))
        for (d.length = Jt + zt.length, h = 0; h < zt.length; h++)
          d[Jt + h] = zt[h];
      else n.deps = d = zt;
      if (!Ge)
        for (h = Jt; h < d.length; h++)
          ((p = d[h]).reactions ?? (p.reactions = [])).push(n);
    } else d !== null && Jt < d.length && (Oi(n, Jt), (d.length = Jt));
    if (
      $i() &&
      re !== null &&
      !Se &&
      d !== null &&
      (n.f & (ge | Dn | Ee)) === 0
    )
      for (h = 0; h < re.length; h++) _c(re[h], n);
    return (
      i !== null &&
        i !== n &&
        (Ti++, re !== null && (s === null ? (s = re) : s.push(...re))),
      u
    );
  } finally {
    (zt = t),
      (Jt = e),
      (re = s),
      (ut = i),
      (Ge = r),
      (Wt = a),
      Ga(o),
      (Se = l),
      (n.f ^= Lr);
  }
}
function gh(n, t) {
  let e = t.reactions;
  if (e !== null) {
    var s = Pd.call(e, n);
    if (s !== -1) {
      var i = e.length - 1;
      i === 0 ? (e = t.reactions = null) : ((e[s] = e[i]), e.pop());
    }
  }
  e === null &&
    (t.f & ge) !== 0 &&
    (zt === null || !zt.includes(t)) &&
    (me(t, Dn), (t.f & (ee | ki)) === 0 && (t.f ^= ki), ec(t), Oi(t, 0));
}
function Oi(n, t) {
  var e = n.deps;
  if (e !== null) for (var s = t; s < e.length; s++) gh(n, e[s]);
}
function ya(n) {
  var t = n.f;
  if ((t & Yi) === 0) {
    me(n, Xt);
    var e = dt,
      s = yt,
      i = yn;
    (dt = n), (yn = !0);
    try {
      (t & fa) !== 0 ? ch(n) : dc(n), uc(n);
      var r = vc(n);
      (n.teardown = typeof r == 'function' ? r : null), (n.wv = mc);
      var a = n.deps,
        o;
      Xa && qd && n.f & Ee;
    } catch (l) {
      Qi(l, n, e, s || n.ctx);
    } finally {
      (yn = i), (dt = e);
    }
  }
}
function mh() {
  try {
    Wd();
  } catch (n) {
    if (Di !== null) Qi(n, Di, null);
    else throw n;
  }
}
function bh() {
  var n = yn;
  try {
    var t = 0;
    for (yn = !0; ci.length > 0; ) {
      t++ > 1e3 && mh();
      var e = ci,
        s = e.length;
      ci = [];
      for (var i = 0; i < s; i++) {
        var r = vh(e[i]);
        _h(r);
      }
      ys.clear();
    }
  } finally {
    (Ir = !1), (yn = n), (Di = null);
  }
}
function _h(n) {
  var t = n.length;
  if (t !== 0)
    for (var e = 0; e < t; e++) {
      var s = n[e];
      if ((s.f & (Yi | Ve)) === 0)
        try {
          Ls(s) &&
            (ya(s),
            s.deps === null &&
              s.first === null &&
              s.nodes_start === null &&
              (s.teardown === null ? hc(s) : (s.fn = null)));
        } catch (i) {
          Qi(i, s, null, s.ctx);
        }
    }
}
function Gi(n) {
  Ir || ((Ir = !0), queueMicrotask(bh));
  for (var t = (Di = n); t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if ((e & (qn | qe)) !== 0) {
      if ((e & Xt) === 0) return;
      t.f ^= Xt;
    }
  }
  ci.push(t);
}
function vh(n) {
  for (var t = [], e = n; e !== null; ) {
    var s = e.f,
      i = (s & (qe | qn)) !== 0,
      r = i && (s & Xt) !== 0;
    if (!r && (s & Ve) === 0) {
      if ((s & Gl) !== 0) t.push(e);
      else if (i) e.f ^= Xt;
      else
        try {
          Ls(e) && ya(e);
        } catch (l) {
          Qi(l, e, null, e.ctx);
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
function _(n) {
  var t = n.f,
    e = (t & ge) !== 0;
  if (ut !== null && !Se) {
    if (!(Wt != null && Wt.includes(n))) {
      var s = ut.deps;
      n.rv < Ti &&
        ((n.rv = Ti),
        zt === null && s !== null && s[Jt] === n
          ? Jt++
          : zt === null
            ? (zt = [n])
            : (!Ge || !zt.includes(n)) && zt.push(n));
    }
  } else if (e && n.deps === null && n.effects === null) {
    var i = n,
      r = i.parent;
    r !== null && (r.f & ee) === 0 && (i.f ^= ee);
  }
  return e && ((i = n), Ls(i) && sc(i)), Rs && ys.has(n) ? ys.get(n) : n.v;
}
function xa(n) {
  var t = Se;
  try {
    return (Se = !0), n();
  } finally {
    Se = t;
  }
}
const yh = -7169;
function me(n, t) {
  n.f = (n.f & yh) | t;
}
function xh(n) {
  if (!(typeof n != 'object' || !n || n instanceof EventTarget)) {
    if (Ye in n) Nr(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == 'object' && e && Ye in e && Nr(e);
      }
  }
}
function Nr(n, t = new Set()) {
  if (
    typeof n == 'object' &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n), n instanceof Date && n.getTime();
    for (let s in n)
      try {
        Nr(n[s], t);
      } catch {}
    const e = Ql(n);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const s = Td(e);
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
const wh = ['touchstart', 'touchmove'];
function kh(n) {
  return wh.includes(n);
}
let eo = !1;
function Mh() {
  eo ||
    ((eo = !0),
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
function Sh(n) {
  var t = ut,
    e = dt;
  Ce(null), rn(null);
  try {
    return n();
  } finally {
    Ce(t), rn(e);
  }
}
function Ph(n, t, e, s = e) {
  n.addEventListener(t, () => Sh(e));
  const i = n.__on_r;
  i
    ? (n.__on_r = () => {
        i(), s(!0);
      })
    : (n.__on_r = () => s(!0)),
    Mh();
}
const yc = new Set(),
  Br = new Set();
function xc(n) {
  for (var t = 0; t < n.length; t++) yc.add(n[t]);
  for (var e of Br) e(n);
}
function Ys(n) {
  var v;
  var t = this,
    e = t.ownerDocument,
    s = n.type,
    i = ((v = n.composedPath) == null ? void 0 : v.call(n)) || [],
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
    Dd(n, 'currentTarget', {
      configurable: !0,
      get() {
        return r || e;
      },
    });
    var u = ut,
      d = dt;
    Ce(null), rn(null);
    try {
      for (var h, p = []; r !== null; ) {
        var f = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var g = r['__' + s];
          if (g != null && (!r.disabled || n.target === r))
            if (ji(g)) {
              var [m, ...b] = g;
              m.apply(r, [n, ...b]);
            } else g.call(r, n);
        } catch (x) {
          h ? p.push(x) : (h = x);
        }
        if (n.cancelBubble || f === t || f === null) break;
        r = f;
      }
      if (h) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      (n.__root = t), delete n.currentTarget, Ce(u), rn(d);
    }
  }
}
function Dh(n) {
  var t = document.createElement('template');
  return (t.innerHTML = n), t.content;
}
function zr(n, t) {
  var e = dt;
  e.nodes_start === null && ((e.nodes_start = n), (e.nodes_end = t));
}
function W(n, t) {
  var e = (t & Gd) !== 0,
    s = (t & Kd) !== 0,
    i,
    r = !n.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Dh(r ? n : '<!>' + n)), e || (i = Mi(i)));
    var a = s || rc ? document.importNode(i, !0) : i.cloneNode(!0);
    if (e) {
      var o = Mi(a),
        l = a.lastChild;
      zr(o, l);
    } else zr(a, a);
    return a;
  };
}
function Th() {
  var n = document.createDocumentFragment(),
    t = document.createComment(''),
    e = _a();
  return n.append(t, e), zr(t, e), n;
}
function z(n, t) {
  n !== null && n.before(t);
}
function N(n, t) {
  var e = t == null ? '' : typeof t == 'object' ? t + '' : t;
  e !== (n.__t ?? (n.__t = n.nodeValue)) &&
    ((n.__t = e), (n.nodeValue = e + ''));
}
function Oh(n, t) {
  return Eh(n, t);
}
const An = new Map();
function Eh(
  n,
  { target: t, anchor: e, props: s = {}, events: i, context: r, intro: a = !0 },
) {
  sh();
  var o = new Set(),
    l = (d) => {
      for (var h = 0; h < d.length; h++) {
        var p = d[h];
        if (!o.has(p)) {
          o.add(p);
          var f = kh(p);
          t.addEventListener(p, Ys, { passive: f });
          var g = An.get(p);
          g === void 0
            ? (document.addEventListener(p, Ys, { passive: f }), An.set(p, 1))
            : An.set(p, g + 1);
        }
      }
    };
  l(ha(yc)), Br.add(l);
  var c = void 0,
    u = lh(() => {
      var d = e ?? t.appendChild(_a());
      return (
        Wn(() => {
          if (r) {
            be({});
            var h = yt;
            h.c = r;
          }
          i && (s.$$events = i), (c = n(d, s) || {}), r && _e();
        }),
        () => {
          var f;
          for (var h of o) {
            t.removeEventListener(h, Ys);
            var p = An.get(h);
            --p === 0
              ? (document.removeEventListener(h, Ys), An.delete(h))
              : An.set(h, p);
          }
          Br.delete(l),
            d !== e && ((f = d.parentNode) == null || f.removeChild(d));
        }
      );
    });
  return Ch.set(c, u), c;
}
let Ch = new WeakMap();
function st(n, t, [e, s] = [0, 0]) {
  var i = n,
    r = null,
    a = null,
    o = Vt,
    l = e > 0 ? qi : 0,
    c = !1;
  const u = (h, p = !0) => {
      (c = !0), d(p, h);
    },
    d = (h, p) => {
      o !== (o = h) &&
        (o
          ? (r ? Si(r) : p && (r = Wn(() => p(i))),
            a &&
              ws(a, () => {
                a = null;
              }))
          : (a ? Si(a) : p && (a = Wn(() => p(i, [e + 1, s]))),
            r &&
              ws(r, () => {
                r = null;
              })));
    };
  Xi(() => {
    (c = !1), t(u), c || d(null, null);
  }, l);
}
function Ki(n, t) {
  return t;
}
function Ah(n, t, e, s) {
  for (var i = [], r = t.length, a = 0; a < r; a++) va(t[a].e, i, !0);
  var o = r > 0 && i.length === 0 && e !== null;
  if (o) {
    var l = e.parentNode;
    ih(l), l.append(e), s.clear(), Qe(n, t[0].prev, t[r - 1].next);
  }
  fc(i, () => {
    for (var c = 0; c < r; c++) {
      var u = t[c];
      o || (s.delete(u.k), Qe(n, u.prev, u.next)), sn(u.e, !o);
    }
  });
}
function Ae(n, t, e, s, i, r = null) {
  var a = n,
    o = { flags: t, items: new Map(), first: null },
    l = (t & tc) !== 0;
  if (l) {
    var c = n;
    a = c.appendChild(_a());
  }
  var u = null,
    d = !1,
    h = ba(() => {
      var p = e();
      return ji(p) ? p : p == null ? [] : ha(p);
    });
  Xi(() => {
    var p = _(h),
      f = p.length;
    (d && f === 0) ||
      ((d = f === 0),
      Rh(p, o, a, i, t, s, e),
      r !== null &&
        (f === 0
          ? u
            ? Si(u)
            : (u = Wn(() => r(a)))
          : u !== null &&
            ws(u, () => {
              u = null;
            })),
      _(h));
  });
}
function Rh(n, t, e, s, i, r, a) {
  var G, U, Y, X;
  var o = (i & Ud) !== 0,
    l = (i & (pa | ga)) !== 0,
    c = n.length,
    u = t.items,
    d = t.first,
    h = d,
    p,
    f = null,
    g,
    m = [],
    b = [],
    v,
    x,
    w,
    y;
  if (o)
    for (y = 0; y < c; y += 1)
      (v = n[y]),
        (x = r(v, y)),
        (w = u.get(x)),
        w !== void 0 &&
          ((G = w.a) == null || G.measure(), (g ?? (g = new Set())).add(w));
  for (y = 0; y < c; y += 1) {
    if (((v = n[y]), (x = r(v, y)), (w = u.get(x)), w === void 0)) {
      var P = h ? h.e.nodes_start : e;
      (f = Fh(P, t, f, f === null ? t.first : f.next, v, x, y, s, i, a)),
        u.set(x, f),
        (m = []),
        (b = []),
        (h = f.next);
      continue;
    }
    if (
      (l && Lh(w, v, y, i),
      (w.e.f & Ve) !== 0 &&
        (Si(w.e),
        o &&
          ((U = w.a) == null || U.unfix(), (g ?? (g = new Set())).delete(w))),
      w !== h)
    ) {
      if (p !== void 0 && p.has(w)) {
        if (m.length < b.length) {
          var O = b[0],
            k;
          f = O.prev;
          var E = m[0],
            L = m[m.length - 1];
          for (k = 0; k < m.length; k += 1) no(m[k], O, e);
          for (k = 0; k < b.length; k += 1) p.delete(b[k]);
          Qe(t, E.prev, L.next),
            Qe(t, f, E),
            Qe(t, L, O),
            (h = O),
            (f = L),
            (y -= 1),
            (m = []),
            (b = []);
        } else
          p.delete(w),
            no(w, h, e),
            Qe(t, w.prev, w.next),
            Qe(t, w, f === null ? t.first : f.next),
            Qe(t, f, w),
            (f = w);
        continue;
      }
      for (m = [], b = []; h !== null && h.k !== x; )
        (h.e.f & Ve) === 0 && (p ?? (p = new Set())).add(h),
          b.push(h),
          (h = h.next);
      if (h === null) continue;
      w = h;
    }
    m.push(w), (f = w), (h = w.next);
  }
  if (h !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : ha(p); h !== null; )
      (h.e.f & Ve) === 0 && R.push(h), (h = h.next);
    var C = R.length;
    if (C > 0) {
      var H = (i & tc) !== 0 && c === 0 ? e : null;
      if (o) {
        for (y = 0; y < C; y += 1) (Y = R[y].a) == null || Y.measure();
        for (y = 0; y < C; y += 1) (X = R[y].a) == null || X.fix();
      }
      Ah(t, R, H, u);
    }
  }
  o &&
    gc(() => {
      var B;
      if (g !== void 0) for (w of g) (B = w.a) == null || B.apply();
    }),
    (dt.first = t.first && t.first.e),
    (dt.last = f && f.e);
}
function Lh(n, t, e, s) {
  (s & pa) !== 0 && Fr(n.v, t), (s & ga) !== 0 ? Fr(n.i, e) : (n.i = e);
}
function Fh(n, t, e, s, i, r, a, o, l, c) {
  var u = (l & pa) !== 0,
    d = (l & Xd) === 0,
    h = u ? (d ? Nn(i) : xs(i)) : i,
    p = (l & ga) === 0 ? a : xs(a),
    f = { i: p, v: h, k: r, a: null, e: null, prev: e, next: s };
  try {
    return (
      (f.e = Wn(() => o(n, h, p, c), nh)),
      (f.e.prev = e && e.e),
      (f.e.next = s && s.e),
      e === null ? (t.first = f) : ((e.next = f), (e.e.next = f.e)),
      s !== null && ((s.prev = f), (s.e.prev = f.e)),
      f
    );
  } finally {
  }
}
function no(n, t, e) {
  for (
    var s = n.next ? n.next.e.nodes_start : e,
      i = t ? t.e.nodes_start : e,
      r = n.e.nodes_start;
    r !== s;

  ) {
    var a = Ui(r);
    i.before(r), (r = a);
  }
}
function Qe(n, t, e) {
  t === null ? (n.first = e) : ((t.next = e), (t.e.next = e && e.e)),
    e !== null && ((e.prev = t), (e.e.prev = t && t.e));
}
function Ih(n, t, e) {
  var s = n,
    i,
    r;
  Xi(() => {
    i !== (i = t()) && (r && (ws(r), (r = null)), i && (r = Wn(() => e(s, i))));
  }, qi);
}
function wc(n) {
  var t,
    e,
    s = '';
  if (typeof n == 'string' || typeof n == 'number') s += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var i = n.length;
      for (t = 0; t < i; t++)
        n[t] && (e = wc(n[t])) && (s && (s += ' '), (s += e));
    } else for (e in n) n[e] && (s && (s += ' '), (s += e));
  return s;
}
function Nh() {
  for (var n, t, e = 0, s = '', i = arguments.length; e < i; e++)
    (n = arguments[e]) && (t = wc(n)) && (s && (s += ' '), (s += t));
  return s;
}
function we(n) {
  return typeof n == 'object' ? Nh(n) : (n ?? '');
}
const so = [
  ...` 	
\r\f \v\uFEFF`,
];
function Bh(n, t, e) {
  var s = n == null ? '' : '' + n;
  if ((t && (s = s ? s + ' ' + t : t), e)) {
    for (var i in e)
      if (e[i]) s = s ? s + ' ' + i : i;
      else if (s.length)
        for (var r = i.length, a = 0; (a = s.indexOf(i, a)) >= 0; ) {
          var o = a + r;
          (a === 0 || so.includes(s[a - 1])) &&
          (o === s.length || so.includes(s[o]))
            ? (s = (a === 0 ? '' : s.substring(0, a)) + s.substring(o + 1))
            : (a = o);
        }
  }
  return s === '' ? null : s;
}
function At(n, t, e, s, i, r) {
  var a = n.__className;
  if (a !== e || a === void 0) {
    var o = Bh(e, s, r);
    o == null ? n.removeAttribute('class') : (n.className = o),
      (n.__className = e);
  } else if (r && i !== r)
    for (var l in r) {
      var c = !!r[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return r;
}
function kc(n, t, e) {
  if (n.multiple) return t == null ? void 0 : ji(t) ? Wh(n, t) : eh();
  for (var s of n.options) {
    var i = fs(s);
    if (Zd(i, t)) {
      s.selected = !0;
      return;
    }
  }
  (!e || t !== void 0) && (n.selectedIndex = -1);
}
function zh(n, t) {
  As(() => {
    var e = new MutationObserver(() => {
      var s = n.__value;
      kc(n, s);
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
function Bn(n, t, e = t) {
  var s = !0;
  Ph(n, 'change', (i) => {
    var r = i ? '[selected]' : ':checked',
      a;
    if (n.multiple) a = [].map.call(n.querySelectorAll(r), fs);
    else {
      var o = n.querySelector(r) ?? n.querySelector('option:not([disabled])');
      a = o && fs(o);
    }
    e(a);
  }),
    As(() => {
      var i = t();
      if ((kc(n, i, s), s && i === void 0)) {
        var r = n.querySelector(':checked');
        r !== null && ((i = fs(r)), e(i));
      }
      (n.__value = i), (s = !1);
    }),
    zh(n);
}
function Wh(n, t) {
  for (var e of n.options) e.selected = t.includes(fs(e));
}
function fs(n) {
  return '__value' in n ? n.__value : n.value;
}
function io(n, t) {
  return n === t || (n == null ? void 0 : n[Ye]) === t;
}
function Xn(n = {}, t, e, s) {
  return (
    As(() => {
      var i, r;
      return (
        cc(() => {
          (i = r),
            (r = []),
            xa(() => {
              n !== e(...r) &&
                (t(n, ...r), i && io(e(...i), n) && t(null, ...i));
            });
        }),
        () => {
          gc(() => {
            r && io(e(...r), n) && t(null, ...r);
          });
        }
      );
    }),
    n
  );
}
function Mc(n = !1) {
  const t = yt,
    e = t.l.u;
  if (!e) return;
  let s = () => xh(t.s);
  if (n) {
    let i = 0,
      r = {};
    const a = ma(() => {
      let o = !1;
      const l = t.s;
      for (const c in l) l[c] !== r[c] && ((r[c] = l[c]), (o = !0));
      return o && i++, i;
    });
    s = () => _(a);
  }
  e.b.length &&
    oh(() => {
      ro(t, s), Rr(e.b);
    }),
    nn(() => {
      const i = xa(() => e.m.map(Cd));
      return () => {
        for (const r of i) typeof r == 'function' && r();
      };
    }),
    e.a.length &&
      nn(() => {
        ro(t, s), Rr(e.a);
      });
}
function ro(n, t) {
  if (n.l.s) for (const e of n.l.s) _(e);
  t();
}
let qs = !1;
function Hh(n) {
  var t = qs;
  try {
    return (qs = !1), [n(), qs];
  } finally {
    qs = t;
  }
}
function jh(n, t, e, s) {
  var f;
  var i = !$n || (e & Qd) !== 0,
    r = !1,
    a;
  [a, r] = Hh(() => n[t]);
  var o = Ye in n || Fd in n,
    l =
      (((f = In(n, t)) == null ? void 0 : f.set) ??
        (o && t in n && ((g) => (n[t] = g)))) ||
      void 0,
    c = s,
    u = !0,
    d = () => (u && ((u = !1), (c = s)), c);
  a === void 0 && s !== void 0 && (l && i && Hd(), (a = d()), l && l(a));
  var h;
  if (i)
    h = () => {
      var g = n[t];
      return g === void 0 ? d() : ((u = !0), g);
    };
  else {
    var p = ba(() => n[t]);
    (p.f |= Rd),
      (h = () => {
        var g = _(p);
        return g !== void 0 && (c = void 0), g === void 0 ? c : g;
      });
  }
  return h;
}
function Le(n) {
  yt === null && Jd(),
    $n && yt.l !== null
      ? Vh(yt).m.push(n)
      : nn(() => {
          const t = xa(n);
          if (typeof t == 'function') return t;
        });
}
function Vh(n) {
  var t = n.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Yh = '5';
var Xl;
typeof window < 'u' &&
  (
    (Xl = window.__svelte ?? (window.__svelte = {})).v ?? (Xl.v = new Set())
  ).add(Yh);
var qh = W(
  '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/dashboard/logo.png" alt="Main logo" class="svelte-1t3skh"></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
);
function $h(n, t) {
  be(t, !0);
  let e = q('');
  Le(() => {
    A(e, window.location.pathname, !0), console.log('currentPath:', _(e));
  });
  function s(k) {
    return k === '/' ? _(e) === '/' : _(e).startsWith(k);
  }
  var i = qh(),
    r = T(M(i), 2),
    a = M(r),
    o = M(a);
  let l;
  var c = T(a, 2),
    u = M(c);
  let d;
  var h = T(c, 2),
    p = M(h);
  let f;
  var g = T(h, 2),
    m = M(g);
  let b;
  var v = T(g, 2),
    x = M(v);
  let w;
  var y = T(v, 2),
    P = M(y);
  let O;
  it(
    (k, E, L, R, C, H) => {
      (l = At(o, 1, 'svelte-1t3skh', null, l, k)),
        (d = At(u, 1, 'svelte-1t3skh', null, d, E)),
        (f = At(p, 1, 'svelte-1t3skh', null, f, L)),
        (b = At(m, 1, 'svelte-1t3skh', null, b, R)),
        (w = At(x, 1, 'svelte-1t3skh', null, w, C)),
        (O = At(P, 1, 'svelte-1t3skh', null, O, H));
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
    z(n, i),
    _e();
}
$d();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function Fs(n) {
  return (n + 0.5) | 0;
}
const Ke = (n, t, e) => Math.max(Math.min(n, e), t);
function os(n) {
  return Ke(Fs(n * 2.55), 0, 255);
}
function en(n) {
  return Ke(Fs(n * 255), 0, 255);
}
function ze(n) {
  return Ke(Fs(n / 2.55) / 100, 0, 1);
}
function ao(n) {
  return Ke(Fs(n * 100), 0, 100);
}
const ie = {
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
  Wr = [...'0123456789ABCDEF'],
  Uh = (n) => Wr[n & 15],
  Xh = (n) => Wr[(n & 240) >> 4] + Wr[n & 15],
  $s = (n) => (n & 240) >> 4 === (n & 15),
  Qh = (n) => $s(n.r) && $s(n.g) && $s(n.b) && $s(n.a);
function Gh(n) {
  var t = n.length,
    e;
  return (
    n[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (ie[n[1]] * 17),
            g: 255 & (ie[n[2]] * 17),
            b: 255 & (ie[n[3]] * 17),
            a: t === 5 ? ie[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (ie[n[1]] << 4) | ie[n[2]],
            g: (ie[n[3]] << 4) | ie[n[4]],
            b: (ie[n[5]] << 4) | ie[n[6]],
            a: t === 9 ? (ie[n[7]] << 4) | ie[n[8]] : 255,
          })),
    e
  );
}
const Kh = (n, t) => (n < 255 ? t(n) : '');
function Jh(n) {
  var t = Qh(n) ? Uh : Xh;
  return n ? '#' + t(n.r) + t(n.g) + t(n.b) + Kh(n.a, t) : void 0;
}
const Zh =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Sc(n, t, e) {
  const s = t * Math.min(e, 1 - e),
    i = (r, a = (r + n / 30) % 12) =>
      e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [i(0), i(8), i(4)];
}
function tf(n, t, e) {
  const s = (i, r = (i + n / 60) % 6) =>
    e - e * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [s(5), s(3), s(1)];
}
function ef(n, t, e) {
  const s = Sc(n, 1, 0.5);
  let i;
  for (t + e > 1 && ((i = 1 / (t + e)), (t *= i), (e *= i)), i = 0; i < 3; i++)
    (s[i] *= 1 - t - e), (s[i] += t);
  return s;
}
function nf(n, t, e, s, i) {
  return n === i
    ? (t - e) / s + (t < e ? 6 : 0)
    : t === i
      ? (e - n) / s + 2
      : (n - t) / s + 4;
}
function wa(n) {
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
      (l = nf(e, s, i, u, r)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, o]
  );
}
function ka(n, t, e, s) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, s)).map(en);
}
function Ma(n, t, e) {
  return ka(Sc, n, t, e);
}
function sf(n, t, e) {
  return ka(ef, n, t, e);
}
function rf(n, t, e) {
  return ka(tf, n, t, e);
}
function Pc(n) {
  return ((n % 360) + 360) % 360;
}
function af(n) {
  const t = Zh.exec(n);
  let e = 255,
    s;
  if (!t) return;
  t[5] !== s && (e = t[6] ? os(+t[5]) : en(+t[5]));
  const i = Pc(+t[2]),
    r = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === 'hwb'
      ? (s = sf(i, r, a))
      : t[1] === 'hsv'
        ? (s = rf(i, r, a))
        : (s = Ma(i, r, a)),
    { r: s[0], g: s[1], b: s[2], a: e }
  );
}
function of(n, t) {
  var e = wa(n);
  (e[0] = Pc(e[0] + t)), (e = Ma(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
}
function lf(n) {
  if (!n) return;
  const t = wa(n),
    e = t[0],
    s = ao(t[1]),
    i = ao(t[2]);
  return n.a < 255
    ? `hsla(${e}, ${s}%, ${i}%, ${ze(n.a)})`
    : `hsl(${e}, ${s}%, ${i}%)`;
}
const oo = {
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
  lo = {
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
function cf() {
  const n = {},
    t = Object.keys(lo),
    e = Object.keys(oo);
  let s, i, r, a, o;
  for (s = 0; s < t.length; s++) {
    for (a = o = t[s], i = 0; i < e.length; i++)
      (r = e[i]), (o = o.replace(r, oo[r]));
    (r = parseInt(lo[a], 16)),
      (n[o] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
  }
  return n;
}
let Us;
function uf(n) {
  Us || ((Us = cf()), (Us.transparent = [0, 0, 0, 0]));
  const t = Us[n.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const df =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function hf(n) {
  const t = df.exec(n);
  let e = 255,
    s,
    i,
    r;
  if (t) {
    if (t[7] !== s) {
      const a = +t[7];
      e = t[8] ? os(a) : Ke(a * 255, 0, 255);
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (r = +t[5]),
      (s = 255 & (t[2] ? os(s) : Ke(s, 0, 255))),
      (i = 255 & (t[4] ? os(i) : Ke(i, 0, 255))),
      (r = 255 & (t[6] ? os(r) : Ke(r, 0, 255))),
      { r: s, g: i, b: r, a: e }
    );
  }
}
function ff(n) {
  return (
    n &&
    (n.a < 255
      ? `rgba(${n.r}, ${n.g}, ${n.b}, ${ze(n.a)})`
      : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const gr = (n) =>
    n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
  Rn = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function pf(n, t, e) {
  const s = Rn(ze(n.r)),
    i = Rn(ze(n.g)),
    r = Rn(ze(n.b));
  return {
    r: en(gr(s + e * (Rn(ze(t.r)) - s))),
    g: en(gr(i + e * (Rn(ze(t.g)) - i))),
    b: en(gr(r + e * (Rn(ze(t.b)) - r))),
    a: n.a + e * (t.a - n.a),
  };
}
function Xs(n, t, e) {
  if (n) {
    let s = wa(n);
    (s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
      (s = Ma(s)),
      (n.r = s[0]),
      (n.g = s[1]),
      (n.b = s[2]);
  }
}
function Dc(n, t) {
  return n && Object.assign(t || {}, n);
}
function co(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((t = { r: n[0], g: n[1], b: n[2], a: 255 }),
        n.length > 3 && (t.a = en(n[3])))
      : ((t = Dc(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = en(t.a))),
    t
  );
}
function gf(n) {
  return n.charAt(0) === 'r' ? hf(n) : af(n);
}
class ks {
  constructor(t) {
    if (t instanceof ks) return t;
    const e = typeof t;
    let s;
    e === 'object'
      ? (s = co(t))
      : e === 'string' && (s = Gh(t) || uf(t) || gf(t)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Dc(this._rgb);
    return t && (t.a = ze(t.a)), t;
  }
  set rgb(t) {
    this._rgb = co(t);
  }
  rgbString() {
    return this._valid ? ff(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Jh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? lf(this._rgb) : void 0;
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
    return t && (this._rgb = pf(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ks(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = en(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = Fs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Xs(this._rgb, 2, t), this;
  }
  darken(t) {
    return Xs(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Xs(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Xs(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return of(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function Ie() {}
const mf = (() => {
  let n = 0;
  return () => n++;
})();
function et(n) {
  return n == null;
}
function bt(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function nt(n) {
  return n !== null && Object.prototype.toString.call(n) === '[object Object]';
}
function xt(n) {
  return (typeof n == 'number' || n instanceof Number) && isFinite(+n);
}
function Zt(n, t) {
  return xt(n) ? n : t;
}
function tt(n, t) {
  return typeof n > 'u' ? t : n;
}
const bf = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? parseFloat(n) / 100 : +n / t,
  Tc = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n;
function ht(n, t, e) {
  if (n && typeof n.call == 'function') return n.apply(e, t);
}
function ct(n, t, e, s) {
  let i, r, a;
  if (bt(n)) for (r = n.length, i = 0; i < r; i++) t.call(e, n[i], i);
  else if (nt(n))
    for (a = Object.keys(n), r = a.length, i = 0; i < r; i++)
      t.call(e, n[a[i]], a[i]);
}
function Ei(n, t) {
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
function Ci(n) {
  if (bt(n)) return n.map(Ci);
  if (nt(n)) {
    const t = Object.create(null),
      e = Object.keys(n),
      s = e.length;
    let i = 0;
    for (; i < s; ++i) t[e[i]] = Ci(n[e[i]]);
    return t;
  }
  return n;
}
function Oc(n) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1;
}
function _f(n, t, e, s) {
  if (!Oc(n)) return;
  const i = t[n],
    r = e[n];
  nt(i) && nt(r) ? Ms(i, r, s) : (t[n] = Ci(r));
}
function Ms(n, t, e) {
  const s = bt(t) ? t : [t],
    i = s.length;
  if (!nt(n)) return n;
  e = e || {};
  const r = e.merger || _f;
  let a;
  for (let o = 0; o < i; ++o) {
    if (((a = s[o]), !nt(a))) continue;
    const l = Object.keys(a);
    for (let c = 0, u = l.length; c < u; ++c) r(l[c], n, a, e);
  }
  return n;
}
function ps(n, t) {
  return Ms(n, t, { merger: vf });
}
function vf(n, t, e) {
  if (!Oc(n)) return;
  const s = t[n],
    i = e[n];
  nt(s) && nt(i)
    ? ps(s, i)
    : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Ci(i));
}
const uo = { '': (n) => n, x: (n) => n.x, y: (n) => n.y };
function yf(n) {
  const t = n.split('.'),
    e = [];
  let s = '';
  for (const i of t)
    (s += i),
      s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (e.push(s), (s = ''));
  return e;
}
function xf(n) {
  const t = yf(n);
  return (e) => {
    for (const s of t) {
      if (s === '') break;
      e = e && e[s];
    }
    return e;
  };
}
function an(n, t) {
  return (uo[t] || (uo[t] = xf(t)))(n);
}
function Sa(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Ss = (n) => typeof n < 'u',
  on = (n) => typeof n == 'function',
  ho = (n, t) => {
    if (n.size !== t.size) return !1;
    for (const e of n) if (!t.has(e)) return !1;
    return !0;
  };
function wf(n) {
  return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu';
}
const gt = Math.PI,
  pt = 2 * gt,
  kf = pt + gt,
  Ai = Number.POSITIVE_INFINITY,
  Mf = gt / 180,
  Mt = gt / 2,
  dn = gt / 4,
  fo = (gt * 2) / 3,
  Je = Math.log10,
  Oe = Math.sign;
function gs(n, t, e) {
  return Math.abs(n - t) < e;
}
function po(n) {
  const t = Math.round(n);
  n = gs(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(Je(n))),
    s = n / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Sf(n) {
  const t = [],
    e = Math.sqrt(n);
  let s;
  for (s = 1; s < e; s++) n % s === 0 && (t.push(s), t.push(n / s));
  return e === (e | 0) && t.push(e), t.sort((i, r) => i - r).pop(), t;
}
function Pf(n) {
  return (
    typeof n == 'symbol' ||
    (typeof n == 'object' &&
      n !== null &&
      !(Symbol.toPrimitive in n || 'toString' in n || 'valueOf' in n))
  );
}
function Hn(n) {
  return !Pf(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function Df(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Ec(n, t, e) {
  let s, i, r;
  for (s = 0, i = n.length; s < i; s++)
    (r = n[s][e]),
      isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function fe(n) {
  return n * (gt / 180);
}
function Pa(n) {
  return n * (180 / gt);
}
function go(n) {
  if (!xt(n)) return;
  let t = 1,
    e = 0;
  for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
  return e;
}
function Cc(n, t) {
  const e = t.x - n.x,
    s = t.y - n.y,
    i = Math.sqrt(e * e + s * s);
  let r = Math.atan2(s, e);
  return r < -0.5 * gt && (r += pt), { angle: r, distance: i };
}
function Hr(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function Tf(n, t) {
  return ((n - t + kf) % pt) - gt;
}
function te(n) {
  return ((n % pt) + pt) % pt;
}
function Ps(n, t, e, s) {
  const i = te(n),
    r = te(t),
    a = te(e),
    o = te(r - i),
    l = te(a - i),
    c = te(i - r),
    u = te(i - a);
  return i === r || i === a || (s && r === a) || (o > l && c < u);
}
function Et(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Of(n) {
  return Et(n, -32768, 32767);
}
function We(n, t, e, s = 1e-6) {
  return n >= Math.min(t, e) - s && n <= Math.max(t, e) + s;
}
function Da(n, t, e) {
  e = e || ((a) => n[a] < t);
  let s = n.length - 1,
    i = 0,
    r;
  for (; s - i > 1; ) (r = (i + s) >> 1), e(r) ? (i = r) : (s = r);
  return { lo: i, hi: s };
}
const He = (n, t, e, s) =>
    Da(
      n,
      e,
      s
        ? (i) => {
            const r = n[i][t];
            return r < e || (r === e && n[i + 1][t] === e);
          }
        : (i) => n[i][t] < e,
    ),
  Ef = (n, t, e) => Da(n, e, (s) => n[s][t] >= e);
function Cf(n, t, e) {
  let s = 0,
    i = n.length;
  for (; s < i && n[s] < t; ) s++;
  for (; i > s && n[i - 1] > e; ) i--;
  return s > 0 || i < n.length ? n.slice(s, i) : n;
}
const Ac = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Af(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Ac.forEach((e) => {
      const s = '_onData' + Sa(e),
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
function mo(n, t) {
  const e = n._chartjs;
  if (!e) return;
  const s = e.listeners,
    i = s.indexOf(t);
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (Ac.forEach((r) => {
        delete n[r];
      }),
      delete n._chartjs);
}
function Rc(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Lc = (function () {
  return typeof window > 'u'
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Fc(n, t) {
  let e = [],
    s = !1;
  return function (...i) {
    (e = i),
      s ||
        ((s = !0),
        Lc.call(window, () => {
          (s = !1), n.apply(t, e);
        }));
  };
}
function Rf(n, t) {
  let e;
  return function (...s) {
    return (
      t ? (clearTimeout(e), (e = setTimeout(n, t, s))) : n.apply(this, s), t
    );
  };
}
const Ta = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
  Lt = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2),
  Lf = (n, t, e, s) =>
    n === (s ? 'left' : 'right') ? e : n === 'center' ? (t + e) / 2 : t;
function Ic(n, t, e) {
  const s = t.length;
  let i = 0,
    r = s;
  if (n._sorted) {
    const { iScale: a, vScale: o, _parsed: l } = n,
      c = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null,
      u = a.axis,
      { min: d, max: h, minDefined: p, maxDefined: f } = a.getUserBounds();
    if (p) {
      if (
        ((i = Math.min(
          He(l, u, d).lo,
          e ? s : He(t, u, a.getPixelForValue(d)).lo,
        )),
        c)
      ) {
        const g = l
          .slice(0, i + 1)
          .reverse()
          .findIndex((m) => !et(m[o.axis]));
        i -= Math.max(0, g);
      }
      i = Et(i, 0, s - 1);
    }
    if (f) {
      let g = Math.max(
        He(l, a.axis, h, !0).hi + 1,
        e ? 0 : He(t, u, a.getPixelForValue(h), !0).hi + 1,
      );
      if (c) {
        const m = l.slice(g - 1).findIndex((b) => !et(b[o.axis]));
        g += Math.max(0, m);
      }
      r = Et(g, i, s) - i;
    } else r = s - i;
  }
  return { start: i, count: r };
}
function Nc(n) {
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
const Qs = (n) => n === 0 || n === 1,
  bo = (n, t, e) =>
    -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * pt) / e)),
  _o = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * pt) / e) + 1,
  ms = {
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
    easeInSine: (n) => -Math.cos(n * Mt) + 1,
    easeOutSine: (n) => Math.sin(n * Mt),
    easeInOutSine: (n) => -0.5 * (Math.cos(gt * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      Qs(n)
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
    easeInElastic: (n) => (Qs(n) ? n : bo(n, 0.075, 0.3)),
    easeOutElastic: (n) => (Qs(n) ? n : _o(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return Qs(n)
        ? n
        : n < 0.5
          ? 0.5 * bo(n * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * _o(n * 2 - 1, 0.1125, 0.45);
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
    easeInBounce: (n) => 1 - ms.easeOutBounce(1 - n),
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
        ? ms.easeInBounce(n * 2) * 0.5
        : ms.easeOutBounce(n * 2 - 1) * 0.5 + 0.5,
  };
function Oa(n) {
  if (n && typeof n == 'object') {
    const t = n.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function vo(n) {
  return Oa(n) ? n : new ks(n);
}
function mr(n) {
  return Oa(n) ? n : new ks(n).saturate(0.5).darken(0.1).hexString();
}
const Ff = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  If = ['color', 'borderColor', 'backgroundColor'];
function Nf(n) {
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
      colors: { type: 'color', properties: If },
      numbers: { type: 'number', properties: Ff },
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
function Bf(n) {
  n.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const yo = new Map();
function zf(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let s = yo.get(e);
  return s || ((s = new Intl.NumberFormat(n, t)), yo.set(e, s)), s;
}
function Is(n, t, e) {
  return zf(t, e).format(n);
}
const Bc = {
  values(n) {
    return bt(n) ? n : '' + n;
  },
  numeric(n, t, e) {
    if (n === 0) return '0';
    const s = this.chart.options.locale;
    let i,
      r = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = 'scientific'), (r = Wf(n, e));
    }
    const a = Je(Math.abs(r)),
      o = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: i, minimumFractionDigits: o, maximumFractionDigits: o };
    return Object.assign(l, this.options.ticks.format), Is(n, s, l);
  },
  logarithmic(n, t, e) {
    if (n === 0) return '0';
    const s = e[t].significand || n / Math.pow(10, Math.floor(Je(n)));
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length
      ? Bc.numeric.call(this, n, t, e)
      : '';
  },
};
function Wf(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Ji = { formatters: Bc };
function Hf(n) {
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
      callback: Ji.formatters.values,
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
const Mn = Object.create(null),
  jr = Object.create(null);
function bs(n, t) {
  if (!t) return n;
  const e = t.split('.');
  for (let s = 0, i = e.length; s < i; ++s) {
    const r = e[s];
    n = n[r] || (n[r] = Object.create(null));
  }
  return n;
}
function br(n, t, e) {
  return typeof t == 'string' ? Ms(bs(n, t), e) : Ms(bs(n, ''), t);
}
class jf {
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
      (this.hoverBackgroundColor = (s, i) => mr(i.backgroundColor)),
      (this.hoverBorderColor = (s, i) => mr(i.borderColor)),
      (this.hoverColor = (s, i) => mr(i.color)),
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
    return br(this, t, e);
  }
  get(t) {
    return bs(this, t);
  }
  describe(t, e) {
    return br(jr, t, e);
  }
  override(t, e) {
    return br(Mn, t, e);
  }
  route(t, e, s, i) {
    const r = bs(this, t),
      a = bs(this, s),
      o = '_' + e;
    Object.defineProperties(r, {
      [o]: { value: r[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[o],
            c = a[i];
          return nt(l) ? Object.assign({}, c, l) : tt(l, c);
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
var _t = new jf(
  {
    _scriptable: (n) => !n.startsWith('on'),
    _indexable: (n) => n !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Nf, Bf, Hf],
);
function Vf(n) {
  return !n || et(n.size) || et(n.family)
    ? null
    : (n.style ? n.style + ' ' : '') +
        (n.weight ? n.weight + ' ' : '') +
        n.size +
        'px ' +
        n.family;
}
function Ri(n, t, e, s, i) {
  let r = t[i];
  return (
    r || ((r = t[i] = n.measureText(i).width), e.push(i)), r > s && (s = r), s
  );
}
function Yf(n, t, e, s) {
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
    if (((d = e[l]), d != null && !bt(d))) a = Ri(n, i, r, a, d);
    else if (bt(d))
      for (c = 0, u = d.length; c < u; c++)
        (h = d[c]), h != null && !bt(h) && (a = Ri(n, i, r, a, h));
  n.restore();
  const p = r.length / 2;
  if (p > e.length) {
    for (l = 0; l < p; l++) delete i[r[l]];
    r.splice(0, p);
  }
  return a;
}
function hn(n, t, e) {
  const s = n.currentDevicePixelRatio,
    i = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function xo(n, t) {
  (!t && !n) ||
    ((t = t || n.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, n.width, n.height),
    t.restore());
}
function Vr(n, t, e, s) {
  zc(n, t, e, s, null);
}
function zc(n, t, e, s, i) {
  let r, a, o, l, c, u, d, h;
  const p = t.pointStyle,
    f = t.rotation,
    g = t.radius;
  let m = (f || 0) * Mf;
  if (
    p &&
    typeof p == 'object' &&
    ((r = p.toString()),
    r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
  ) {
    n.save(),
      n.translate(e, s),
      n.rotate(m),
      n.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      n.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch ((n.beginPath(), p)) {
      default:
        i ? n.ellipse(e, s, i / 2, g, 0, 0, pt) : n.arc(e, s, g, 0, pt),
          n.closePath();
        break;
      case 'triangle':
        (u = i ? i / 2 : g),
          n.moveTo(e + Math.sin(m) * u, s - Math.cos(m) * g),
          (m += fo),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * g),
          (m += fo),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * g),
          n.closePath();
        break;
      case 'rectRounded':
        (c = g * 0.516),
          (l = g - c),
          (a = Math.cos(m + dn) * l),
          (d = Math.cos(m + dn) * (i ? i / 2 - c : l)),
          (o = Math.sin(m + dn) * l),
          (h = Math.sin(m + dn) * (i ? i / 2 - c : l)),
          n.arc(e - d, s - o, c, m - gt, m - Mt),
          n.arc(e + h, s - a, c, m - Mt, m),
          n.arc(e + d, s + o, c, m, m + Mt),
          n.arc(e - h, s + a, c, m + Mt, m + gt),
          n.closePath();
        break;
      case 'rect':
        if (!f) {
          (l = Math.SQRT1_2 * g),
            (u = i ? i / 2 : l),
            n.rect(e - u, s - l, 2 * u, 2 * l);
          break;
        }
        m += dn;
      case 'rectRot':
        (d = Math.cos(m) * (i ? i / 2 : g)),
          (a = Math.cos(m) * g),
          (o = Math.sin(m) * g),
          (h = Math.sin(m) * (i ? i / 2 : g)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + h, s - a),
          n.lineTo(e + d, s + o),
          n.lineTo(e - h, s + a),
          n.closePath();
        break;
      case 'crossRot':
        m += dn;
      case 'cross':
        (d = Math.cos(m) * (i ? i / 2 : g)),
          (a = Math.cos(m) * g),
          (o = Math.sin(m) * g),
          (h = Math.sin(m) * (i ? i / 2 : g)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a);
        break;
      case 'star':
        (d = Math.cos(m) * (i ? i / 2 : g)),
          (a = Math.cos(m) * g),
          (o = Math.sin(m) * g),
          (h = Math.sin(m) * (i ? i / 2 : g)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a),
          (m += dn),
          (d = Math.cos(m) * (i ? i / 2 : g)),
          (a = Math.cos(m) * g),
          (o = Math.sin(m) * g),
          (h = Math.sin(m) * (i ? i / 2 : g)),
          n.moveTo(e - d, s - o),
          n.lineTo(e + d, s + o),
          n.moveTo(e + h, s - a),
          n.lineTo(e - h, s + a);
        break;
      case 'line':
        (a = i ? i / 2 : Math.cos(m) * g),
          (o = Math.sin(m) * g),
          n.moveTo(e - a, s - o),
          n.lineTo(e + a, s + o);
        break;
      case 'dash':
        n.moveTo(e, s),
          n.lineTo(e + Math.cos(m) * (i ? i / 2 : g), s + Math.sin(m) * g);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function je(n, t, e) {
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
function Zi(n, t) {
  n.save(),
    n.beginPath(),
    n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    n.clip();
}
function tr(n) {
  n.restore();
}
function qf(n, t, e, s, i) {
  if (!t) return n.lineTo(e.x, e.y);
  if (i === 'middle') {
    const r = (t.x + e.x) / 2;
    n.lineTo(r, t.y), n.lineTo(r, e.y);
  } else (i === 'after') != !!s ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function $f(n, t, e, s) {
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
function Uf(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]),
    et(t.rotation) || n.rotate(t.rotation),
    t.color && (n.fillStyle = t.color),
    t.textAlign && (n.textAlign = t.textAlign),
    t.textBaseline && (n.textBaseline = t.textBaseline);
}
function Xf(n, t, e, s, i) {
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
function Qf(n, t) {
  const e = n.fillStyle;
  (n.fillStyle = t.color),
    n.fillRect(t.left, t.top, t.width, t.height),
    (n.fillStyle = e);
}
function Sn(n, t, e, s, i, r = {}) {
  const a = bt(t) ? t : [t],
    o = r.strokeWidth > 0 && r.strokeColor !== '';
  let l, c;
  for (n.save(), n.font = i.string, Uf(n, r), l = 0; l < a.length; ++l)
    (c = a[l]),
      r.backdrop && Qf(n, r.backdrop),
      o &&
        (r.strokeColor && (n.strokeStyle = r.strokeColor),
        et(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
        n.strokeText(c, e, s, r.maxWidth)),
      n.fillText(c, e, s, r.maxWidth),
      Xf(n, e, s, c, r),
      (s += Number(i.lineHeight));
  n.restore();
}
function Ds(n, t) {
  const { x: e, y: s, w: i, h: r, radius: a } = t;
  n.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * gt, gt, !0),
    n.lineTo(e, s + r - a.bottomLeft),
    n.arc(e + a.bottomLeft, s + r - a.bottomLeft, a.bottomLeft, gt, Mt, !0),
    n.lineTo(e + i - a.bottomRight, s + r),
    n.arc(
      e + i - a.bottomRight,
      s + r - a.bottomRight,
      a.bottomRight,
      Mt,
      0,
      !0,
    ),
    n.lineTo(e + i, s + a.topRight),
    n.arc(e + i - a.topRight, s + a.topRight, a.topRight, 0, -Mt, !0),
    n.lineTo(e + a.topLeft, s);
}
const Gf = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Kf = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Jf(n, t) {
  const e = ('' + n).match(Gf);
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
const Zf = (n) => +n || 0;
function Ea(n, t) {
  const e = {},
    s = nt(t),
    i = s ? Object.keys(t) : t,
    r = nt(n) ? (s ? (a) => tt(n[a], n[t[a]]) : (a) => n[a]) : () => n;
  for (const a of i) e[a] = Zf(r(a));
  return e;
}
function Wc(n) {
  return Ea(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function xn(n) {
  return Ea(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function Nt(n) {
  const t = Wc(n);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Tt(n, t) {
  (n = n || {}), (t = t || _t.font);
  let e = tt(n.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let s = tt(n.style, t.style);
  s &&
    !('' + s).match(Kf) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const i = {
    family: tt(n.family, t.family),
    lineHeight: Jf(tt(n.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: tt(n.weight, t.weight),
    string: '',
  };
  return (i.string = Vf(i)), i;
}
function ls(n, t, e, s) {
  let i, r, a;
  for (i = 0, r = n.length; i < r; ++i)
    if (((a = n[i]), a !== void 0 && a !== void 0)) return a;
}
function tp(n, t, e) {
  const { min: s, max: i } = n,
    r = Tc(t, (i - s) / 2),
    a = (o, l) => (e && o === 0 ? 0 : o + l);
  return { min: a(s, -Math.abs(r)), max: a(i, r) };
}
function ln(n, t) {
  return Object.assign(Object.create(n), t);
}
function Ca(n, t = [''], e, s, i = () => n[0]) {
  const r = e || n;
  typeof s > 'u' && (s = Yc('_fallback', n));
  const a = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: n,
    _rootScopes: r,
    _fallback: s,
    _getTarget: i,
    override: (o) => Ca([o, ...n], t, r, s),
  };
  return new Proxy(a, {
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete n[0][l], !0;
    },
    get(o, l) {
      return jc(o, l, () => lp(l, t, n, o));
    },
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(o, l) {
      return ko(o).includes(l);
    },
    ownKeys(o) {
      return ko(o);
    },
    set(o, l, c) {
      const u = o._storage || (o._storage = i());
      return (o[l] = u[l] = c), delete o._keys, !0;
    },
  });
}
function jn(n, t, e, s) {
  const i = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: Hc(n, s),
    setContext: (r) => jn(n, r, e, s),
    override: (r) => jn(n.override(r), t, e, s),
  };
  return new Proxy(i, {
    deleteProperty(r, a) {
      return delete r[a], delete n[a], !0;
    },
    get(r, a, o) {
      return jc(r, a, () => np(r, a, o));
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
function Hc(n, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys,
  } = n;
  return {
    allKeys: i,
    scriptable: e,
    indexable: s,
    isScriptable: on(e) ? e : () => e,
    isIndexable: on(s) ? s : () => s,
  };
}
const ep = (n, t) => (n ? n + Sa(t) : t),
  Aa = (n, t) =>
    nt(t) &&
    n !== 'adapters' &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function jc(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === 'constructor')
    return n[t];
  const s = e();
  return (n[t] = s), s;
}
function np(n, t, e) {
  const { _proxy: s, _context: i, _subProxy: r, _descriptors: a } = n;
  let o = s[t];
  return (
    on(o) && a.isScriptable(t) && (o = sp(t, o, n, e)),
    bt(o) && o.length && (o = ip(t, o, n, a.isIndexable)),
    Aa(t, o) && (o = jn(o, i, r && r[t], a)),
    o
  );
}
function sp(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _stack: o } = e;
  if (o.has(n))
    throw new Error(
      'Recursion detected: ' + Array.from(o).join('->') + '->' + n,
    );
  o.add(n);
  let l = t(r, a || s);
  return o.delete(n), Aa(n, l) && (l = Ra(i._scopes, i, n, l)), l;
}
function ip(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _descriptors: o } = e;
  if (typeof r.index < 'u' && s(n)) return t[r.index % t.length];
  if (nt(t[0])) {
    const l = t,
      c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const d = Ra(c, i, n, u);
      t.push(jn(d, r, a && a[n], o));
    }
  }
  return t;
}
function Vc(n, t, e) {
  return on(n) ? n(t, e) : n;
}
const rp = (n, t) => (n === !0 ? t : typeof n == 'string' ? an(t, n) : void 0);
function ap(n, t, e, s, i) {
  for (const r of t) {
    const a = rp(e, r);
    if (a) {
      n.add(a);
      const o = Vc(a._fallback, e, i);
      if (typeof o < 'u' && o !== e && o !== s) return o;
    } else if (a === !1 && typeof s < 'u' && e !== s) return null;
  }
  return !1;
}
function Ra(n, t, e, s) {
  const i = t._rootScopes,
    r = Vc(t._fallback, e, s),
    a = [...n, ...i],
    o = new Set();
  o.add(s);
  let l = wo(o, a, e, r || e, s);
  return l === null ||
    (typeof r < 'u' && r !== e && ((l = wo(o, a, r, l, s)), l === null))
    ? !1
    : Ca(Array.from(o), [''], i, r, () => op(t, e, s));
}
function wo(n, t, e, s, i) {
  for (; e; ) e = ap(n, t, e, s, i);
  return e;
}
function op(n, t, e) {
  const s = n._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return bt(i) && nt(e) ? e : i || {};
}
function lp(n, t, e, s) {
  let i;
  for (const r of t)
    if (((i = Yc(ep(r, n), e)), typeof i < 'u'))
      return Aa(n, i) ? Ra(e, s, n, i) : i;
}
function Yc(n, t) {
  for (const e of t) {
    if (!e) continue;
    const s = e[n];
    if (typeof s < 'u') return s;
  }
}
function ko(n) {
  let t = n._keys;
  return t || (t = n._keys = cp(n._scopes)), t;
}
function cp(n) {
  const t = new Set();
  for (const e of n)
    for (const s of Object.keys(e).filter((i) => !i.startsWith('_'))) t.add(s);
  return Array.from(t);
}
function qc(n, t, e, s) {
  const { iScale: i } = n,
    { key: r = 'r' } = this._parsing,
    a = new Array(s);
  let o, l, c, u;
  for (o = 0, l = s; o < l; ++o)
    (c = o + e), (u = t[c]), (a[o] = { r: i.parse(an(u, r), c) });
  return a;
}
const up = Number.EPSILON || 1e-14,
  Vn = (n, t) => t < n.length && !n[t].skip && n[t],
  $c = (n) => (n === 'x' ? 'y' : 'x');
function dp(n, t, e, s) {
  const i = n.skip ? t : n,
    r = t,
    a = e.skip ? t : e,
    o = Hr(r, i),
    l = Hr(a, r);
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
function hp(n, t, e) {
  const s = n.length;
  let i,
    r,
    a,
    o,
    l,
    c = Vn(n, 0);
  for (let u = 0; u < s - 1; ++u)
    if (((l = c), (c = Vn(n, u + 1)), !(!l || !c))) {
      if (gs(t[u], 0, up)) {
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
function fp(n, t, e = 'x') {
  const s = $c(e),
    i = n.length;
  let r,
    a,
    o,
    l = Vn(n, 0);
  for (let c = 0; c < i; ++c) {
    if (((a = o), (o = l), (l = Vn(n, c + 1)), !o)) continue;
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
function pp(n, t = 'x') {
  const e = $c(t),
    s = n.length,
    i = Array(s).fill(0),
    r = Array(s);
  let a,
    o,
    l,
    c = Vn(n, 0);
  for (a = 0; a < s; ++a)
    if (((o = l), (l = c), (c = Vn(n, a + 1)), !!l)) {
      if (c) {
        const u = c[t] - l[t];
        i[a] = u !== 0 ? (c[e] - l[e]) / u : 0;
      }
      r[a] = o
        ? c
          ? Oe(i[a - 1]) !== Oe(i[a])
            ? 0
            : (i[a - 1] + i[a]) / 2
          : i[a - 1]
        : i[a];
    }
  hp(n, i, r), fp(n, r, t);
}
function Gs(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function gp(n, t) {
  let e,
    s,
    i,
    r,
    a,
    o = je(n[0], t);
  for (e = 0, s = n.length; e < s; ++e)
    (a = r),
      (r = o),
      (o = e < s - 1 && je(n[e + 1], t)),
      r &&
        ((i = n[e]),
        a &&
          ((i.cp1x = Gs(i.cp1x, t.left, t.right)),
          (i.cp1y = Gs(i.cp1y, t.top, t.bottom))),
        o &&
          ((i.cp2x = Gs(i.cp2x, t.left, t.right)),
          (i.cp2y = Gs(i.cp2y, t.top, t.bottom))));
}
function mp(n, t, e, s, i) {
  let r, a, o, l;
  if (
    (t.spanGaps && (n = n.filter((c) => !c.skip)),
    t.cubicInterpolationMode === 'monotone')
  )
    pp(n, i);
  else {
    let c = s ? n[n.length - 1] : n[0];
    for (r = 0, a = n.length; r < a; ++r)
      (o = n[r]),
        (l = dp(c, o, n[Math.min(r + 1, a - (s ? 0 : 1)) % a], t.tension)),
        (o.cp1x = l.previous.x),
        (o.cp1y = l.previous.y),
        (o.cp2x = l.next.x),
        (o.cp2y = l.next.y),
        (c = o);
  }
  t.capBezierPoints && gp(n, e);
}
function La() {
  return typeof window < 'u' && typeof document < 'u';
}
function Fa(n) {
  let t = n.parentNode;
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function Li(n, t, e) {
  let s;
  return (
    typeof n == 'string'
      ? ((s = parseInt(n, 10)),
        n.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[e]))
      : (s = n),
    s
  );
}
const er = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function bp(n, t) {
  return er(n).getPropertyValue(t);
}
const _p = ['top', 'right', 'bottom', 'left'];
function wn(n, t, e) {
  const s = {};
  e = e ? '-' + e : '';
  for (let i = 0; i < 4; i++) {
    const r = _p[i];
    s[r] = parseFloat(n[t + '-' + r + e]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const vp = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function yp(n, t) {
  const e = n.touches,
    s = e && e.length ? e[0] : n,
    { offsetX: i, offsetY: r } = s;
  let a = !1,
    o,
    l;
  if (vp(i, r, n.target)) (o = i), (l = r);
  else {
    const c = t.getBoundingClientRect();
    (o = s.clientX - c.left), (l = s.clientY - c.top), (a = !0);
  }
  return { x: o, y: l, box: a };
}
function gn(n, t) {
  if ('native' in n) return n;
  const { canvas: e, currentDevicePixelRatio: s } = t,
    i = er(e),
    r = i.boxSizing === 'border-box',
    a = wn(i, 'padding'),
    o = wn(i, 'border', 'width'),
    { x: l, y: c, box: u } = yp(n, e),
    d = a.left + (u && o.left),
    h = a.top + (u && o.top);
  let { width: p, height: f } = t;
  return (
    r && ((p -= a.width + o.width), (f -= a.height + o.height)),
    {
      x: Math.round((((l - d) / p) * e.width) / s),
      y: Math.round((((c - h) / f) * e.height) / s),
    }
  );
}
function xp(n, t, e) {
  let s, i;
  if (t === void 0 || e === void 0) {
    const r = n && Fa(n);
    if (!r) (t = n.clientWidth), (e = n.clientHeight);
    else {
      const a = r.getBoundingClientRect(),
        o = er(r),
        l = wn(o, 'border', 'width'),
        c = wn(o, 'padding');
      (t = a.width - c.width - l.width),
        (e = a.height - c.height - l.height),
        (s = Li(o.maxWidth, r, 'clientWidth')),
        (i = Li(o.maxHeight, r, 'clientHeight'));
    }
  }
  return { width: t, height: e, maxWidth: s || Ai, maxHeight: i || Ai };
}
const Ks = (n) => Math.round(n * 10) / 10;
function wp(n, t, e, s) {
  const i = er(n),
    r = wn(i, 'margin'),
    a = Li(i.maxWidth, n, 'clientWidth') || Ai,
    o = Li(i.maxHeight, n, 'clientHeight') || Ai,
    l = xp(n, t, e);
  let { width: c, height: u } = l;
  if (i.boxSizing === 'content-box') {
    const h = wn(i, 'border', 'width'),
      p = wn(i, 'padding');
    (c -= p.width + h.width), (u -= p.height + h.height);
  }
  return (
    (c = Math.max(0, c - r.width)),
    (u = Math.max(0, s ? c / s : u - r.height)),
    (c = Ks(Math.min(c, a, l.maxWidth))),
    (u = Ks(Math.min(u, o, l.maxHeight))),
    c && !u && (u = Ks(c / 2)),
    (t !== void 0 || e !== void 0) &&
      s &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = Ks(Math.floor(u * s)))),
    { width: c, height: u }
  );
}
function Mo(n, t, e) {
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
const kp = (function () {
  let n = !1;
  try {
    const t = {
      get passive() {
        return (n = !0), !1;
      },
    };
    La() &&
      (window.addEventListener('test', null, t),
      window.removeEventListener('test', null, t));
  } catch {}
  return n;
})();
function So(n, t) {
  const e = bp(n, t),
    s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function mn(n, t, e, s) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function Mp(n, t, e, s) {
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
function Sp(n, t, e, s) {
  const i = { x: n.cp2x, y: n.cp2y },
    r = { x: t.cp1x, y: t.cp1y },
    a = mn(n, i, e),
    o = mn(i, r, e),
    l = mn(r, t, e),
    c = mn(a, o, e),
    u = mn(o, l, e);
  return mn(c, u, e);
}
const Pp = function (n, t) {
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
  Dp = function () {
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
function zn(n, t, e) {
  return n ? Pp(t, e) : Dp();
}
function Uc(n, t) {
  let e, s;
  (t === 'ltr' || t === 'rtl') &&
    ((e = n.canvas.style),
    (s = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (n.prevTextDirection = s));
}
function Xc(n, t) {
  t !== void 0 &&
    (delete n.prevTextDirection,
    n.canvas.style.setProperty('direction', t[0], t[1]));
}
function Qc(n) {
  return n === 'angle'
    ? { between: Ps, compare: Tf, normalize: te }
    : { between: We, compare: (t, e) => t - e, normalize: (t) => t };
}
function Po({ start: n, end: t, count: e, loop: s, style: i }) {
  return {
    start: n % e,
    end: t % e,
    loop: s && (t - n + 1) % e === 0,
    style: i,
  };
}
function Tp(n, t, e) {
  const { property: s, start: i, end: r } = e,
    { between: a, normalize: o } = Qc(s),
    l = t.length;
  let { start: c, end: u, loop: d } = n,
    h,
    p;
  if (d) {
    for (c += l, u += l, h = 0, p = l; h < p && a(o(t[c % l][s]), i, r); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: d, style: n.style };
}
function Gc(n, t, e) {
  if (!e) return [n];
  const { property: s, start: i, end: r } = e,
    a = t.length,
    { compare: o, between: l, normalize: c } = Qc(s),
    { start: u, end: d, loop: h, style: p } = Tp(n, t, e),
    f = [];
  let g = !1,
    m = null,
    b,
    v,
    x;
  const w = () => l(i, x, b) && o(i, x) !== 0,
    y = () => o(r, b) === 0 || l(r, x, b),
    P = () => g || w(),
    O = () => !g || y();
  for (let k = u, E = u; k <= d; ++k)
    (v = t[k % a]),
      !v.skip &&
        ((b = c(v[s])),
        b !== x &&
          ((g = l(b, i, r)),
          m === null && P() && (m = o(b, i) === 0 ? k : E),
          m !== null &&
            O() &&
            (f.push(Po({ start: m, end: k, loop: h, count: a, style: p })),
            (m = null)),
          (E = k),
          (x = b)));
  return (
    m !== null && f.push(Po({ start: m, end: d, loop: h, count: a, style: p })),
    f
  );
}
function Kc(n, t) {
  const e = [],
    s = n.segments;
  for (let i = 0; i < s.length; i++) {
    const r = Gc(s[i], n.points, t);
    r.length && e.push(...r);
  }
  return e;
}
function Op(n, t, e, s) {
  let i = 0,
    r = t - 1;
  if (e && !s) for (; i < t && !n[i].skip; ) i++;
  for (; i < t && n[i].skip; ) i++;
  for (i %= t, e && (r += i); r > i && n[r % t].skip; ) r--;
  return (r %= t), { start: i, end: r };
}
function Ep(n, t, e, s) {
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
function Cp(n, t) {
  const e = n.points,
    s = n.options.spanGaps,
    i = e.length;
  if (!i) return [];
  const r = !!n._loop,
    { start: a, end: o } = Op(e, i, r, s);
  if (s === !0) return Do(n, [{ start: a, end: o, loop: r }], e, t);
  const l = o < a ? o + i : o,
    c = !!n._fullLoop && a === 0 && o === i - 1;
  return Do(n, Ep(e, a, l, c), e, t);
}
function Do(n, t, e, s) {
  return !s || !s.setContext || !e ? t : Ap(n, t, e, s);
}
function Ap(n, t, e, s) {
  const i = n._chart.getContext(),
    r = To(n.options),
    {
      _datasetIndex: a,
      options: { spanGaps: o },
    } = n,
    l = e.length,
    c = [];
  let u = r,
    d = t[0].start,
    h = d;
  function p(f, g, m, b) {
    const v = o ? -1 : 1;
    if (f !== g) {
      for (f += l; e[f % l].skip; ) f -= v;
      for (; e[g % l].skip; ) g += v;
      f % l !== g % l &&
        (c.push({ start: f % l, end: g % l, loop: m, style: b }),
        (u = b),
        (d = g % l));
    }
  }
  for (const f of t) {
    d = o ? d : f.start;
    let g = e[d % l],
      m;
    for (h = d + 1; h <= f.end; h++) {
      const b = e[h % l];
      (m = To(
        s.setContext(
          ln(i, {
            type: 'segment',
            p0: g,
            p1: b,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: a,
          }),
        ),
      )),
        Rp(m, u) && p(d, h - 1, f.loop, u),
        (g = b),
        (u = m);
    }
    d < h - 1 && p(d, h - 1, f.loop, u);
  }
  return c;
}
function To(n) {
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
function Rp(n, t) {
  if (!t) return !1;
  const e = [],
    s = function (i, r) {
      return Oa(r) ? (e.includes(r) || e.push(r), e.indexOf(r)) : r;
    };
  return JSON.stringify(n, s) !== JSON.stringify(t, s);
}
function Js(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function Lp(n, t) {
  const { xScale: e, yScale: s } = n;
  return e && s
    ? {
        left: Js(e, t, 'left'),
        right: Js(e, t, 'right'),
        top: Js(s, t, 'top'),
        bottom: Js(s, t, 'bottom'),
      }
    : t;
}
function Jc(n, t) {
  const e = t._clip;
  if (e.disabled) return !1;
  const s = Lp(t, n.chartArea);
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
 */ class Fp {
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
      (this._request = Lc.call(window, () => {
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
var Ne = new Fp();
const Oo = 'transparent',
  Ip = {
    boolean(n, t, e) {
      return e > 0.5 ? t : n;
    },
    color(n, t, e) {
      const s = vo(n || Oo),
        i = s.valid && vo(t || Oo);
      return i && i.valid ? i.mix(s, e).hexString() : t;
    },
    number(n, t, e) {
      return n + (t - n) * e;
    },
  };
class Np {
  constructor(t, e, s, i) {
    const r = e[s];
    i = ls([t.to, i, r, t.from]);
    const a = ls([t.from, r, i]);
    (this._active = !0),
      (this._fn = t.fn || Ip[t.type || typeof a]),
      (this._easing = ms[t.easing] || ms.linear),
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
        (this._to = ls([t.to, e, i, t.from])),
        (this._from = ls([t.from, i, e]));
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
class Zc {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!nt(t)) return;
    const e = Object.keys(_t.animation),
      s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i];
      if (!nt(r)) return;
      const a = {};
      for (const o of e) a[o] = r[o];
      ((bt(r.properties) && r.properties) || [i]).forEach((o) => {
        (o === i || !s.has(o)) && s.set(o, a);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options,
      i = zp(t, s);
    if (!i) return [];
    const r = this._createAnimations(i, s);
    return (
      s.$shared &&
        Bp(t.options.$animations, s).then(
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
      (r[c] = d = new Np(h, t, c, u)), i.push(d);
    }
    return i;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length) return Ne.add(this._chart, s), !0;
  }
}
function Bp(n, t) {
  const e = [],
    s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const r = n[s[i]];
    r && r.active() && e.push(r.wait());
  }
  return Promise.all(e);
}
function zp(n, t) {
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
function Eo(n, t) {
  const e = (n && n.options) || {},
    s = e.reverse,
    i = e.min === void 0 ? t : 0,
    r = e.max === void 0 ? t : 0;
  return { start: s ? r : i, end: s ? i : r };
}
function Wp(n, t, e) {
  if (e === !1) return !1;
  const s = Eo(n, e),
    i = Eo(t, e);
  return { top: i.end, right: s.end, bottom: i.start, left: s.start };
}
function Hp(n) {
  let t, e, s, i;
  return (
    nt(n)
      ? ((t = n.top), (e = n.right), (s = n.bottom), (i = n.left))
      : (t = e = s = i = n),
    { top: t, right: e, bottom: s, left: i, disabled: n === !1 }
  );
}
function tu(n, t) {
  const e = [],
    s = n._getSortedDatasetMetas(t);
  let i, r;
  for (i = 0, r = s.length; i < r; ++i) e.push(s[i].index);
  return e;
}
function Co(n, t, e, s = {}) {
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
    (c = n.values[l]), xt(c) && (r || t === 0 || Oe(t) === Oe(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function jp(n, t) {
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
function _r(n, t) {
  const e = n && n.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function Vp(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Yp(n) {
  const { min: t, max: e, minDefined: s, maxDefined: i } = n.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? e : Number.POSITIVE_INFINITY,
  };
}
function qp(n, t, e) {
  const s = n[t] || (n[t] = {});
  return s[e] || (s[e] = {});
}
function Ao(n, t, e, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const r = n[i.index];
    if ((e && r > 0) || (!e && r < 0)) return i.index;
  }
  return null;
}
function Ro(n, t) {
  const { chart: e, _cachedMeta: s } = n,
    i = e._stacks || (e._stacks = {}),
    { iScale: r, vScale: a, index: o } = s,
    l = r.axis,
    c = a.axis,
    u = Vp(r, a, s),
    d = t.length;
  let h;
  for (let p = 0; p < d; ++p) {
    const f = t[p],
      { [l]: g, [c]: m } = f,
      b = f._stacks || (f._stacks = {});
    (h = b[c] = qp(i, u, g)),
      (h[o] = m),
      (h._top = Ao(h, a, !0, s.type)),
      (h._bottom = Ao(h, a, !1, s.type));
    const v = h._visualValues || (h._visualValues = {});
    v[o] = m;
  }
}
function vr(n, t) {
  const e = n.scales;
  return Object.keys(e)
    .filter((s) => e[s].axis === t)
    .shift();
}
function $p(n, t) {
  return ln(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function Up(n, t, e) {
  return ln(n, {
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
function Jn(n, t) {
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
const yr = (n) => n === 'reset' || n === 'none',
  Lo = (n, t) => (t ? n : Object.assign({}, n)),
  Xp = (n, t, e) =>
    n && !t.hidden && t._stacked && { keys: tu(e, !0), values: null };
class pe {
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
      (t._stacked = _r(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(t) {
    this.index !== t && Jn(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      s = this.getDataset(),
      i = (d, h, p, f) => (d === 'x' ? h : d === 'r' ? f : p),
      r = (e.xAxisID = tt(s.xAxisID, vr(t, 'x'))),
      a = (e.yAxisID = tt(s.yAxisID, vr(t, 'y'))),
      o = (e.rAxisID = tt(s.rAxisID, vr(t, 'r'))),
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
    this._data && mo(this._data, this), t._stacked && Jn(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      s = this._data;
    if (nt(e)) {
      const i = this._cachedMeta;
      this._data = jp(e, i);
    } else if (s !== e) {
      if (s) {
        mo(s, this);
        const i = this._cachedMeta;
        Jn(i), (i._parsed = []);
      }
      e && Object.isExtensible(e) && Af(e, this),
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
    (e._stacked = _r(e.vScale, e)),
      e.stack !== s.stack && ((i = !0), Jn(e), (e.stack = s.stack)),
      this._resyncElements(t),
      (i || r !== e._stacked) &&
        (Ro(this, e._parsed), (e._stacked = _r(e.vScale, e)));
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
      bt(i[t])
        ? (h = this.parseArrayData(s, i, t, e))
        : nt(i[t])
          ? (h = this.parseObjectData(s, i, t, e))
          : (h = this.parsePrimitiveData(s, i, t, e));
      const p = () => d[o] === null || (c && d[o] < c[o]);
      for (u = 0; u < e; ++u)
        (s._parsed[u + t] = d = h[u]), l && (p() && (l = !1), (c = d));
      s._sorted = l;
    }
    a && Ro(this, h);
  }
  parsePrimitiveData(t, e, s, i) {
    const { iScale: r, vScale: a } = t,
      o = r.axis,
      l = a.axis,
      c = r.getLabels(),
      u = r === a,
      d = new Array(i);
    let h, p, f;
    for (h = 0, p = i; h < p; ++h)
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
    let u, d, h, p;
    for (u = 0, d = i; u < d; ++u)
      (h = u + s),
        (p = e[h]),
        (c[u] = { x: r.parse(an(p, o), h), y: a.parse(an(p, l), h) });
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
      o = { keys: tu(i, !0), values: e._stacks[t.axis]._visualValues };
    return Co(o, a, r.index, { mode: s });
  }
  updateRangeFromParsed(t, e, s, i) {
    const r = s[e.axis];
    let a = r === null ? NaN : r;
    const o = i && s._stacks[e.axis];
    i && o && ((i.values = o), (a = Co(i, r, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a));
  }
  getMinMax(t, e) {
    const s = this._cachedMeta,
      i = s._parsed,
      r = s._sorted && t === s.iScale,
      a = i.length,
      o = this._getOtherScale(t),
      l = Xp(e, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = Yp(o);
    let h, p;
    function f() {
      p = i[h];
      const g = p[o.axis];
      return !xt(p[t.axis]) || u > g || d < g;
    }
    for (
      h = 0;
      h < a && !(!f() && (this.updateRangeFromParsed(c, t, p, l), r));
      ++h
    );
    if (r) {
      for (h = a - 1; h >= 0; --h)
        if (!f()) {
          this.updateRangeFromParsed(c, t, p, l);
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
      (a = e[i][t.axis]), xt(a) && s.push(a);
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
      (e._clip = Hp(
        tt(this.options.clip, Wp(e.xScale, e.yScale, this.getMaxOverflow())),
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
      (r = a.$context || (a.$context = Up(this.getContext(), t, a))),
        (r.parsed = this.getParsed(t)),
        (r.raw = i.data[t]),
        (r.index = r.dataIndex = t);
    } else
      (r =
        this.$context ||
        (this.$context = $p(this.chart.getContext(), this.index))),
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
      l = this.enableOptionSharing && Ss(s);
    if (o) return Lo(o, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      d = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      h = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(_t.elements[t]),
      f = () => this.getContext(s, i, e),
      g = c.resolveNamedOptions(h, p, f, d);
    return g.$shared && ((g.$shared = l), (r[a] = Object.freeze(Lo(g, l)))), g;
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
    const c = new Zc(i, l && l.animations);
    return l && l._cacheable && (r[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || yr(t) || this.chart._animationsDisabled;
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
    yr(i) ? Object.assign(t, s) : this._resolveAnimations(e, i).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !yr(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Jn(s, i);
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
S(pe, 'defaults', {}),
  S(pe, 'datasetElementType', null),
  S(pe, 'dataElementType', null);
function Qp(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, r = e.length; i < r; i++)
      s = s.concat(e[i].controller.getAllParsedValues(n));
    n._cache.$bar = Rc(s.sort((i, r) => i - r));
  }
  return n._cache.$bar;
}
function Gp(n) {
  const t = n.iScale,
    e = Qp(t, n.type);
  let s = t._length,
    i,
    r,
    a,
    o;
  const l = () => {
    a === 32767 ||
      a === -32768 ||
      (Ss(o) && (s = Math.min(s, Math.abs(a - o) || s)), (o = a));
  };
  for (i = 0, r = e.length; i < r; ++i) (a = t.getPixelForValue(e[i])), l();
  for (o = void 0, i = 0, r = t.ticks.length; i < r; ++i)
    (a = t.getPixelForTick(i)), l();
  return s;
}
function Kp(n, t, e, s) {
  const i = e.barThickness;
  let r, a;
  return (
    et(i)
      ? ((r = t.min * e.categoryPercentage), (a = e.barPercentage))
      : ((r = i * s), (a = 1)),
    { chunk: r / s, ratio: a, start: t.pixels[n] - r / 2 }
  );
}
function Jp(n, t, e, s) {
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
function Zp(n, t, e, s) {
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
function eu(n, t, e, s) {
  return bt(n) ? Zp(n, t, e, s) : (t[e.axis] = e.parse(n, s)), t;
}
function Fo(n, t, e, s) {
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
      l.push(eu(h, d, r, c));
  return l;
}
function xr(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function tg(n, t, e) {
  return n !== 0 ? Oe(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function eg(n) {
  let t, e, s, i, r;
  return (
    n.horizontal
      ? ((t = n.base > n.x), (e = 'left'), (s = 'right'))
      : ((t = n.base < n.y), (e = 'bottom'), (s = 'top')),
    t ? ((i = 'end'), (r = 'start')) : ((i = 'start'), (r = 'end')),
    { start: e, end: s, reverse: t, top: i, bottom: r }
  );
}
function ng(n, t, e, s) {
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
  const { start: a, end: o, reverse: l, top: c, bottom: u } = eg(n);
  i === 'middle' &&
    e &&
    ((n.enableBorderRadius = !0),
    (e._top || 0) === s
      ? (i = c)
      : (e._bottom || 0) === s
        ? (i = u)
        : ((r[Io(u, a, o, l)] = !0), (i = c))),
    (r[Io(i, a, o, l)] = !0),
    (n.borderSkipped = r);
}
function Io(n, t, e, s) {
  return s ? ((n = sg(n, t, e)), (n = No(n, e, t))) : (n = No(n, t, e)), n;
}
function sg(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function No(n, t, e) {
  return n === 'start' ? t : n === 'end' ? e : n;
}
function ig(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
class ui extends pe {
  parsePrimitiveData(t, e, s, i) {
    return Fo(t, e, s, i);
  }
  parseArrayData(t, e, s, i) {
    return Fo(t, e, s, i);
  }
  parseObjectData(t, e, s, i) {
    const { iScale: r, vScale: a } = t,
      { xAxisKey: o = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = r.axis === 'x' ? o : l,
      u = a.axis === 'x' ? o : l,
      d = [];
    let h, p, f, g;
    for (h = s, p = s + i; h < p; ++h)
      (g = e[h]),
        (f = {}),
        (f[r.axis] = r.parse(an(g, c), h)),
        d.push(eu(an(g, u), f, a, h));
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
      o = xr(a)
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
    for (let p = e; p < e + s; p++) {
      const f = this.getParsed(p),
        g =
          r || et(f[o.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(p),
        m = this._calculateBarIndexPixels(p, u),
        b = (f._stacks || {})[o.axis],
        v = {
          horizontal: c,
          base: g.base,
          enableBorderRadius:
            !b || xr(f._custom) || a === b._top || a === b._bottom,
          x: c ? g.head : m.center,
          y: c ? m.center : g.head,
          height: c ? m.size : Math.abs(g.size),
          width: c ? Math.abs(g.size) : m.size,
        };
      h &&
        (v.options =
          d || this.resolveDataElementOptions(p, t[p].active ? 'active' : i));
      const x = v.options || t[p].options;
      ng(v, x, b, a), ig(v, x, u.ratio), this.updateElement(t[p], p, v, i);
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
        const d = u._parsed.find((p) => p[s.axis] === l),
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
      min: o || Gp(e),
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
      u = xr(c);
    let d = l[e.axis],
      h = 0,
      p = s ? this.applyStack(e, l, s) : d,
      f,
      g;
    p !== d && ((h = p - d), (p = d)),
      u &&
        ((d = c.barStart),
        (p = c.barEnd - c.barStart),
        d !== 0 && Oe(d) !== Oe(c.barEnd) && (h = 0),
        (h += d));
    const m = !et(r) && !u ? r : h;
    let b = e.getPixelForValue(m);
    if (
      (this.chart.getDataVisibility(t)
        ? (f = e.getPixelForValue(h + p))
        : (f = b),
      (g = f - b),
      Math.abs(g) < a)
    ) {
      (g = tg(g, e, o) * a), d === o && (b -= g / 2);
      const v = e.getPixelForDecimal(0),
        x = e.getPixelForDecimal(1),
        w = Math.min(v, x),
        y = Math.max(v, x);
      (b = Math.max(Math.min(b, y), w)),
        (f = b + g),
        s &&
          !u &&
          (l._stacks[e.axis]._visualValues[i] =
            e.getValueForPixel(f) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(o)) {
      const v = (Oe(g) * e.getLineWidthForValue(o)) / 2;
      (b += v), (g -= v);
    }
    return { size: g, base: b, head: f, center: f + g / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale,
      i = this.options,
      r = i.skipNull,
      a = tt(i.maxBarThickness, 1 / 0);
    let o, l;
    if (e.grouped) {
      const c = r ? this._getStackCount(t) : e.stackCount,
        u = i.barThickness === 'flex' ? Jp(t, e, i, c) : Kp(t, e, i, c),
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
S(ui, 'id', 'bar'),
  S(ui, 'defaults', {
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
  S(ui, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  });
class di extends pe {
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
      r[a]._custom = tt(o[2], this.resolveDataElementOptions(a + s).radius);
    }
    return r;
  }
  parseObjectData(t, e, s, i) {
    const r = super.parseObjectData(t, e, s, i);
    for (let a = 0; a < r.length; a++) {
      const o = e[s + a];
      r[a]._custom = tt(
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
      const p = t[h],
        f = !r && this.getParsed(h),
        g = {},
        m = (g[u] = r ? a.getPixelForDecimal(0.5) : a.getPixelForValue(f[u])),
        b = (g[d] = r ? o.getBasePixel() : o.getPixelForValue(f[d]));
      (g.skip = isNaN(m) || isNaN(b)),
        c &&
          ((g.options =
            l || this.resolveDataElementOptions(h, p.active ? 'active' : i)),
          r && (g.options.radius = 0)),
        this.updateElement(p, h, g, i);
    }
  }
  resolveDataElementOptions(t, e) {
    const s = this.getParsed(t);
    let i = super.resolveDataElementOptions(t, e);
    i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
    const r = i.radius;
    return (
      e !== 'active' && (i.radius = 0), (i.radius += tt(s && s._custom, r)), i
    );
  }
}
S(di, 'id', 'bubble'),
  S(di, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'borderWidth', 'radius'],
      },
    },
  }),
  S(di, 'overrides', {
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
function rg(n, t, e) {
  let s = 1,
    i = 1,
    r = 0,
    a = 0;
  if (t < pt) {
    const o = n,
      l = o + t,
      c = Math.cos(o),
      u = Math.sin(o),
      d = Math.cos(l),
      h = Math.sin(l),
      p = (x, w, y) => (Ps(x, o, l, !0) ? 1 : Math.max(w, w * e, y, y * e)),
      f = (x, w, y) => (Ps(x, o, l, !0) ? -1 : Math.min(w, w * e, y, y * e)),
      g = p(0, c, d),
      m = p(Mt, u, h),
      b = f(gt, c, d),
      v = f(gt + Mt, u, h);
    (s = (g - b) / 2),
      (i = (m - v) / 2),
      (r = -(g + b) / 2),
      (a = -(m + v) / 2);
  }
  return { ratioX: s, ratioY: i, offsetX: r, offsetY: a };
}
class _n extends pe {
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
        r = (c) => +an(s[c], l);
      }
      let a, o;
      for (a = t, o = t + e; a < o; ++a) i._parsed[a] = r(a);
    }
  }
  _getRotation() {
    return fe(this.options.rotation - 90);
  }
  _getCircumference() {
    return fe(this.options.circumference);
  }
  _getRotationExtents() {
    let t = pt,
      e = -pt;
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
      l = Math.min(bf(this.options.cutout, o), 1),
      c = this._getRingWeight(this.index),
      { circumference: u, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: p, offsetX: f, offsetY: g } = rg(d, u, l),
      m = (s.width - a) / h,
      b = (s.height - a) / p,
      v = Math.max(Math.min(m, b) / 2, 0),
      x = Tc(this.options.radius, v),
      w = Math.max(x * l, 0),
      y = (x - w) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = f * x),
      (this.offsetY = g * x),
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
      : this.calculateCircumference((i._parsed[t] * r) / pt);
  }
  updateElements(t, e, s, i) {
    const r = i === 'reset',
      a = this.chart,
      o = a.chartArea,
      c = a.options.animation,
      u = (o.left + o.right) / 2,
      d = (o.top + o.bottom) / 2,
      h = r && c.animateScale,
      p = h ? 0 : this.innerRadius,
      f = h ? 0 : this.outerRadius,
      { sharedOptions: g, includeOptions: m } = this._getSharedOptions(e, i);
    let b = this._getRotation(),
      v;
    for (v = 0; v < e; ++v) b += this._circumference(v, r);
    for (v = e; v < e + s; ++v) {
      const x = this._circumference(v, r),
        w = t[v],
        y = {
          x: u + this.offsetX,
          y: d + this.offsetY,
          startAngle: b,
          endAngle: b + x,
          circumference: x,
          outerRadius: f,
          innerRadius: p,
        };
      m &&
        (y.options =
          g || this.resolveDataElementOptions(v, w.active ? 'active' : i)),
        (b += x),
        this.updateElement(w, v, y, i);
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
    return e > 0 && !isNaN(t) ? pt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Is(e._parsed[t], s.options.locale);
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
    return Math.max(tt(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
S(_n, 'id', 'doughnut'),
  S(_n, 'defaults', {
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
  S(_n, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) =>
      t !== 'spacing' &&
      !t.startsWith('borderDash') &&
      !t.startsWith('hoverBorderDash'),
  }),
  S(_n, 'overrides', {
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
class hi extends pe {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: s, data: i = [], _dataset: r } = e,
      a = this.chart._animationsDisabled;
    let { start: o, count: l } = Ic(e, i, a);
    (this._drawStart = o),
      (this._drawCount = l),
      Nc(e) && ((o = 0), (l = i.length)),
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
      p = o.axis,
      { spanGaps: f, segment: g } = this.options,
      m = Hn(f) ? f : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || r || i === 'none',
      v = e + s,
      x = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let y = 0; y < x; ++y) {
      const P = t[y],
        O = b ? P : {};
      if (y < e || y >= v) {
        O.skip = !0;
        continue;
      }
      const k = this.getParsed(y),
        E = et(k[p]),
        L = (O[h] = a.getPixelForValue(k[h], y)),
        R = (O[p] =
          r || E
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, k, l) : k[p], y));
      (O.skip = isNaN(L) || isNaN(R) || E),
        (O.stop = y > 0 && Math.abs(k[h] - w[h]) > m),
        g && ((O.parsed = k), (O.raw = c.data[y])),
        d &&
          (O.options =
            u || this.resolveDataElementOptions(y, P.active ? 'active' : i)),
        b || this.updateElement(P, y, O, i),
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
S(hi, 'id', 'line'),
  S(hi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  S(hi, 'overrides', {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
  });
class _s extends pe {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Is(e._parsed[t].r, s.options.locale);
    return { label: i[t] || '', value: r };
  }
  parseObjectData(t, e, s, i) {
    return qc.bind(this)(t, e, s, i);
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
      h = c.getIndexAngle(0) - 0.5 * gt;
    let p = h,
      f;
    const g = 360 / this.countVisibleElements();
    for (f = 0; f < e; ++f) p += this._computeAngle(f, i, g);
    for (f = e; f < e + s; f++) {
      const m = t[f];
      let b = p,
        v = p + this._computeAngle(f, i, g),
        x = a.getDataVisibility(f)
          ? c.getDistanceFromCenterForValue(this.getParsed(f).r)
          : 0;
      (p = v), r && (l.animateScale && (x = 0), l.animateRotate && (b = v = h));
      const w = {
        x: u,
        y: d,
        innerRadius: 0,
        outerRadius: x,
        startAngle: b,
        endAngle: v,
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
      ? fe(this.resolveDataElementOptions(t, e).angle || s)
      : 0;
  }
}
S(_s, 'id', 'polarArea'),
  S(_s, 'defaults', {
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
  S(_s, 'overrides', {
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
class Yr extends _n {}
S(Yr, 'id', 'pie'),
  S(Yr, 'defaults', {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: '100%',
  });
class fi extends pe {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: '' + e.getLabelForValue(s[e.axis]),
    };
  }
  parseObjectData(t, e, s, i) {
    return qc.bind(this)(t, e, s, i);
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
        p = {
          x: d,
          y: h,
          angle: u.angle,
          skip: isNaN(d) || isNaN(h),
          options: c,
        };
      this.updateElement(l, o, p, i);
    }
  }
}
S(fi, 'id', 'radar'),
  S(fi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  S(fi, 'overrides', {
    aspectRatio: 1,
    scales: { r: { type: 'radialLinear' } },
  });
class pi extends pe {
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
    let { start: r, count: a } = Ic(e, s, i);
    if (
      ((this._drawStart = r),
      (this._drawCount = a),
      Nc(e) && ((r = 0), (a = s.length)),
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
      p = a.axis,
      f = o.axis,
      { spanGaps: g, segment: m } = this.options,
      b = Hn(g) ? g : Number.POSITIVE_INFINITY,
      v = this.chart._animationsDisabled || r || i === 'none';
    let x = e > 0 && this.getParsed(e - 1);
    for (let w = e; w < e + s; ++w) {
      const y = t[w],
        P = this.getParsed(w),
        O = v ? y : {},
        k = et(P[f]),
        E = (O[p] = a.getPixelForValue(P[p], w)),
        L = (O[f] =
          r || k
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, P, l) : P[f], w));
      (O.skip = isNaN(E) || isNaN(L) || k),
        (O.stop = w > 0 && Math.abs(P[p] - x[p]) > b),
        m && ((O.parsed = P), (O.raw = c.data[w])),
        h &&
          (O.options =
            d || this.resolveDataElementOptions(w, y.active ? 'active' : i)),
        v || this.updateElement(y, w, O, i),
        (x = P);
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
S(pi, 'id', 'scatter'),
  S(pi, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    showLine: !1,
    fill: !1,
  }),
  S(pi, 'overrides', {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
var ag = Object.freeze({
  __proto__: null,
  BarController: ui,
  BubbleController: di,
  DoughnutController: _n,
  LineController: hi,
  PieController: Yr,
  PolarAreaController: _s,
  RadarController: fi,
  ScatterController: pi,
});
function fn() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  );
}
class Ia {
  constructor(t) {
    S(this, 'options');
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Ia.prototype, t);
  }
  init() {}
  formats() {
    return fn();
  }
  parse() {
    return fn();
  }
  format() {
    return fn();
  }
  add() {
    return fn();
  }
  diff() {
    return fn();
  }
  startOf() {
    return fn();
  }
  endOf() {
    return fn();
  }
}
var nu = { _date: Ia };
function og(n, t, e, s) {
  const { controller: i, data: r, _sorted: a } = n,
    o = i._cachedMeta.iScale,
    l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (o && t === o.axis && t !== 'r' && a && r.length) {
    const c = o._reversePixels ? Ef : He;
    if (s) {
      if (i._sharedOptions) {
        const u = r[0],
          d = typeof u.getRange == 'function' && u.getRange(t);
        if (d) {
          const h = c(r, t, e - d),
            p = c(r, t, e + d);
          return { lo: h.lo, hi: p.hi };
        }
      }
    } else {
      const u = c(r, t, e);
      if (l) {
        const { vScale: d } = i._cachedMeta,
          { _parsed: h } = n,
          p = h
            .slice(0, u.lo + 1)
            .reverse()
            .findIndex((g) => !et(g[d.axis]));
        u.lo -= Math.max(0, p);
        const f = h.slice(u.hi).findIndex((g) => !et(g[d.axis]));
        u.hi += Math.max(0, f);
      }
      return u;
    }
  }
  return { lo: 0, hi: r.length - 1 };
}
function nr(n, t, e, s, i) {
  const r = n.getSortedVisibleDatasetMetas(),
    a = e[t];
  for (let o = 0, l = r.length; o < l; ++o) {
    const { index: c, data: u } = r[o],
      { lo: d, hi: h } = og(r[o], t, a, i);
    for (let p = d; p <= h; ++p) {
      const f = u[p];
      f.skip || s(f, c, p);
    }
  }
}
function lg(n) {
  const t = n.indexOf('x') !== -1,
    e = n.indexOf('y') !== -1;
  return function (s, i) {
    const r = t ? Math.abs(s.x - i.x) : 0,
      a = e ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
  };
}
function wr(n, t, e, s, i) {
  const r = [];
  return (
    (!i && !n.isPointInArea(t)) ||
      nr(
        n,
        e,
        t,
        function (o, l, c) {
          (!i && !je(o, n.chartArea, 0)) ||
            (o.inRange(t.x, t.y, s) &&
              r.push({ element: o, datasetIndex: l, index: c }));
        },
        !0,
      ),
    r
  );
}
function cg(n, t, e, s) {
  let i = [];
  function r(a, o, l) {
    const { startAngle: c, endAngle: u } = a.getProps(
        ['startAngle', 'endAngle'],
        s,
      ),
      { angle: d } = Cc(a, { x: t.x, y: t.y });
    Ps(d, c, u) && i.push({ element: a, datasetIndex: o, index: l });
  }
  return nr(n, e, t, r), i;
}
function ug(n, t, e, s, i, r) {
  let a = [];
  const o = lg(e);
  let l = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const p = u.inRange(t.x, t.y, i);
    if (s && !p) return;
    const f = u.getCenterPoint(i);
    if (!(!!r || n.isPointInArea(f)) && !p) return;
    const m = o(t, f);
    m < l
      ? ((a = [{ element: u, datasetIndex: d, index: h }]), (l = m))
      : m === l && a.push({ element: u, datasetIndex: d, index: h });
  }
  return nr(n, e, t, c), a;
}
function kr(n, t, e, s, i, r) {
  return !r && !n.isPointInArea(t)
    ? []
    : e === 'r' && !s
      ? cg(n, t, e, i)
      : ug(n, t, e, s, i, r);
}
function Bo(n, t, e, s, i) {
  const r = [],
    a = e === 'x' ? 'inXRange' : 'inYRange';
  let o = !1;
  return (
    nr(n, e, t, (l, c, u) => {
      l[a] &&
        l[a](t[e], i) &&
        (r.push({ element: l, datasetIndex: c, index: u }),
        (o = o || l.inRange(t.x, t.y, i)));
    }),
    s && !o ? [] : r
  );
}
var dg = {
  modes: {
    index(n, t, e, s) {
      const i = gn(t, n),
        r = e.axis || 'x',
        a = e.includeInvisible || !1,
        o = e.intersect ? wr(n, i, r, s, a) : kr(n, i, r, !1, s, a),
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
      const i = gn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      let o = e.intersect ? wr(n, i, r, s, a) : kr(n, i, r, !1, s, a);
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
      const i = gn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return wr(n, i, r, s, a);
    },
    nearest(n, t, e, s) {
      const i = gn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return kr(n, i, r, e.intersect, s, a);
    },
    x(n, t, e, s) {
      const i = gn(t, n);
      return Bo(n, i, 'x', e.intersect, s);
    },
    y(n, t, e, s) {
      const i = gn(t, n);
      return Bo(n, i, 'y', e.intersect, s);
    },
  },
};
const su = ['left', 'top', 'right', 'bottom'];
function Zn(n, t) {
  return n.filter((e) => e.pos === t);
}
function zo(n, t) {
  return n.filter((e) => su.indexOf(e.pos) === -1 && e.box.axis === t);
}
function ts(n, t) {
  return n.sort((e, s) => {
    const i = t ? s : e,
      r = t ? e : s;
    return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
  });
}
function hg(n) {
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
function fg(n) {
  const t = {};
  for (const e of n) {
    const { stack: s, pos: i, stackWeight: r } = e;
    if (!s || !su.includes(i)) continue;
    const a = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    a.count++, (a.weight += r);
  }
  return t;
}
function pg(n, t) {
  const e = fg(n),
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
function gg(n) {
  const t = hg(n),
    e = ts(
      t.filter((c) => c.box.fullSize),
      !0,
    ),
    s = ts(Zn(t, 'left'), !0),
    i = ts(Zn(t, 'right')),
    r = ts(Zn(t, 'top'), !0),
    a = ts(Zn(t, 'bottom')),
    o = zo(t, 'x'),
    l = zo(t, 'y');
  return {
    fullSize: e,
    leftAndTop: s.concat(r),
    rightAndBottom: i.concat(l).concat(a).concat(o),
    chartArea: Zn(t, 'chartArea'),
    vertical: s.concat(i).concat(l),
    horizontal: r.concat(a).concat(o),
  };
}
function Wo(n, t, e, s) {
  return Math.max(n[e], t[e]) + Math.max(n[s], t[s]);
}
function iu(n, t) {
  (n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right));
}
function mg(n, t, e, s) {
  const { pos: i, box: r } = e,
    a = n.maxPadding;
  if (!nt(i)) {
    e.size && (n[i] -= e.size);
    const d = s[e.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, e.horizontal ? r.height : r.width)),
      (e.size = d.size / d.count),
      (n[i] += e.size);
  }
  r.getPadding && iu(a, r.getPadding());
  const o = Math.max(0, t.outerWidth - Wo(a, n, 'left', 'right')),
    l = Math.max(0, t.outerHeight - Wo(a, n, 'top', 'bottom')),
    c = o !== n.w,
    u = l !== n.h;
  return (
    (n.w = o),
    (n.h = l),
    e.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function bg(n) {
  const t = n.maxPadding;
  function e(s) {
    const i = Math.max(t[s] - n[s], 0);
    return (n[s] += i), i;
  }
  (n.y += e('top')), (n.x += e('left')), e('right'), e('bottom');
}
function _g(n, t) {
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
function cs(n, t, e, s) {
  const i = [];
  let r, a, o, l, c, u;
  for (r = 0, a = n.length, c = 0; r < a; ++r) {
    (o = n[r]),
      (l = o.box),
      l.update(o.width || t.w, o.height || t.h, _g(o.horizontal, t));
    const { same: d, other: h } = mg(t, e, o, s);
    (c |= d && i.length), (u = u || h), l.fullSize || i.push(o);
  }
  return (c && cs(i, t, e, s)) || u;
}
function Zs(n, t, e, s, i) {
  (n.top = e),
    (n.left = t),
    (n.right = t + s),
    (n.bottom = e + i),
    (n.width = s),
    (n.height = i);
}
function Ho(n, t, e, s) {
  const i = e.padding;
  let { x: r, y: a } = t;
  for (const o of n) {
    const l = o.box,
      c = s[o.stack] || { placed: 0, weight: 1 },
      u = o.stackWeight / c.weight || 1;
    if (o.horizontal) {
      const d = t.w * u,
        h = c.size || l.height;
      Ss(c.start) && (a = c.start),
        l.fullSize
          ? Zs(l, i.left, a, e.outerWidth - i.right - i.left, h)
          : Zs(l, t.left + c.placed, a, d, h),
        (c.start = a),
        (c.placed += d),
        (a = l.bottom);
    } else {
      const d = t.h * u,
        h = c.size || l.width;
      Ss(c.start) && (r = c.start),
        l.fullSize
          ? Zs(l, r, i.top, h, e.outerHeight - i.bottom - i.top)
          : Zs(l, r, t.top + c.placed, h, d),
        (c.start = r),
        (c.placed += d),
        (r = l.right);
    }
  }
  (t.x = r), (t.y = a);
}
var It = {
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
    const i = Nt(n.options.layout.padding),
      r = Math.max(t - i.width, 0),
      a = Math.max(e - i.height, 0),
      o = gg(n.boxes),
      l = o.vertical,
      c = o.horizontal;
    ct(n.boxes, (g) => {
      typeof g.beforeLayout == 'function' && g.beforeLayout();
    });
    const u =
        l.reduce(
          (g, m) => (m.box.options && m.box.options.display === !1 ? g : g + 1),
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
    iu(h, Nt(s));
    const p = Object.assign(
        { maxPadding: h, w: r, h: a, x: i.left, y: i.top },
        i,
      ),
      f = pg(l.concat(c), d);
    cs(o.fullSize, p, d, f),
      cs(l, p, d, f),
      cs(c, p, d, f) && cs(l, p, d, f),
      bg(p),
      Ho(o.leftAndTop, p, d, f),
      (p.x += p.w),
      (p.y += p.h),
      Ho(o.rightAndBottom, p, d, f),
      (n.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      ct(o.chartArea, (g) => {
        const m = g.box;
        Object.assign(m, n.chartArea),
          m.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class ru {
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
class vg extends ru {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const gi = '$chartjs',
  yg = {
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
  jo = (n) => n === null || n === '';
function xg(n, t) {
  const e = n.style,
    s = n.getAttribute('height'),
    i = n.getAttribute('width');
  if (
    ((n[gi] = {
      initial: {
        height: s,
        width: i,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    jo(i))
  ) {
    const r = So(n, 'width');
    r !== void 0 && (n.width = r);
  }
  if (jo(s))
    if (n.style.height === '') n.height = n.width / (t || 2);
    else {
      const r = So(n, 'height');
      r !== void 0 && (n.height = r);
    }
  return n;
}
const au = kp ? { passive: !0 } : !1;
function wg(n, t, e) {
  n && n.addEventListener(t, e, au);
}
function kg(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, au);
}
function Mg(n, t) {
  const e = yg[n.type] || n.type,
    { x: s, y: i } = gn(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null,
  };
}
function Fi(n, t) {
  for (const e of n) if (e === t || e.contains(t)) return !0;
}
function Sg(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Fi(o.addedNodes, s)), (a = a && !Fi(o.removedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function Pg(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Fi(o.removedNodes, s)), (a = a && !Fi(o.addedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const Ts = new Map();
let Vo = 0;
function ou() {
  const n = window.devicePixelRatio;
  n !== Vo &&
    ((Vo = n),
    Ts.forEach((t, e) => {
      e.currentDevicePixelRatio !== n && t();
    }));
}
function Dg(n, t) {
  Ts.size || window.addEventListener('resize', ou), Ts.set(n, t);
}
function Tg(n) {
  Ts.delete(n), Ts.size || window.removeEventListener('resize', ou);
}
function Og(n, t, e) {
  const s = n.canvas,
    i = s && Fa(s);
  if (!i) return;
  const r = Fc((o, l) => {
      const c = i.clientWidth;
      e(o, l), c < i.clientWidth && e();
    }, window),
    a = new ResizeObserver((o) => {
      const l = o[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || r(c, u);
    });
  return a.observe(i), Dg(n, r), a;
}
function Mr(n, t, e) {
  e && e.disconnect(), t === 'resize' && Tg(n);
}
function Eg(n, t, e) {
  const s = n.canvas,
    i = Fc((r) => {
      n.ctx !== null && e(Mg(r, n));
    }, n);
  return wg(s, t, i), i;
}
class Cg extends ru {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext('2d');
    return s && s.canvas === t ? (xg(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[gi]) return !1;
    const s = e[gi].initial;
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
      delete e[gi],
      !0
    );
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const i = t.$proxies || (t.$proxies = {}),
      a = { attach: Sg, detach: Pg, resize: Og }[e] || Eg;
    i[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[e];
    if (!i) return;
    (({ attach: Mr, detach: Mr, resize: Mr })[e] || kg)(t, e, i),
      (s[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, i) {
    return wp(t, e, s, i);
  }
  isAttached(t) {
    const e = t && Fa(t);
    return !!(e && e.isConnected);
  }
}
function Ag(n) {
  return !La() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas)
    ? vg
    : Cg;
}
var oi;
let $e =
  ((oi = class {
    constructor() {
      S(this, 'x');
      S(this, 'y');
      S(this, 'active', !1);
      S(this, 'options');
      S(this, '$animations');
    }
    tooltipPosition(t) {
      const { x: e, y: s } = this.getProps(['x', 'y'], t);
      return { x: e, y: s };
    }
    hasValue() {
      return Hn(this.x) && Hn(this.y);
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
  S(oi, 'defaults', {}),
  S(oi, 'defaultRoutes'),
  oi);
function Rg(n, t) {
  const e = n.options.ticks,
    s = Lg(n),
    i = Math.min(e.maxTicksLimit || s, s),
    r = e.major.enabled ? Ig(t) : [],
    a = r.length,
    o = r[0],
    l = r[a - 1],
    c = [];
  if (a > i) return Ng(t, c, r, a / i), c;
  const u = Fg(r, t, i);
  if (a > 0) {
    let d, h;
    const p = a > 1 ? Math.round((l - o) / (a - 1)) : null;
    for (ti(t, c, u, et(p) ? 0 : o - p, o), d = 0, h = a - 1; d < h; d++)
      ti(t, c, u, r[d], r[d + 1]);
    return ti(t, c, u, l, et(p) ? t.length : l + p), c;
  }
  return ti(t, c, u), c;
}
function Lg(n) {
  const t = n.options.offset,
    e = n._tickSize(),
    s = n._length / e + (t ? 0 : 1),
    i = n._maxLength / e;
  return Math.floor(Math.min(s, i));
}
function Fg(n, t, e) {
  const s = Bg(n),
    i = t.length / e;
  if (!s) return Math.max(i, 1);
  const r = Sf(s);
  for (let a = 0, o = r.length - 1; a < o; a++) {
    const l = r[a];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function Ig(n) {
  const t = [];
  let e, s;
  for (e = 0, s = n.length; e < s; e++) n[e].major && t.push(e);
  return t;
}
function Ng(n, t, e, s) {
  let i = 0,
    r = e[0],
    a;
  for (s = Math.ceil(s), a = 0; a < n.length; a++)
    a === r && (t.push(n[a]), i++, (r = e[i * s]));
}
function ti(n, t, e, s, i) {
  const r = tt(s, 0),
    a = Math.min(tt(i, n.length), n.length);
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
function Bg(n) {
  const t = n.length;
  let e, s;
  if (t < 2) return !1;
  for (s = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== s) return !1;
  return s;
}
const zg = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
  Yo = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
  qo = (n, t) => Math.min(t || n, n);
function $o(n, t) {
  const e = [],
    s = n.length / t,
    i = n.length;
  let r = 0;
  for (; r < i; r += s) e.push(n[Math.floor(r)]);
  return e;
}
function Wg(n, t, e) {
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
function Hg(n, t) {
  ct(n, (e) => {
    const s = e.gc,
      i = s.length / 2;
    let r;
    if (i > t) {
      for (r = 0; r < i; ++r) delete e.data[s[r]];
      s.splice(0, i);
    }
  });
}
function es(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Uo(n, t) {
  if (!n.display) return 0;
  const e = Tt(n.font, t),
    s = Nt(n.padding);
  return (bt(n.text) ? n.text.length : 1) * e.lineHeight + s.height;
}
function jg(n, t) {
  return ln(n, { scale: t, type: 'scale' });
}
function Vg(n, t, e) {
  return ln(n, { tick: e, index: t, type: 'tick' });
}
function Yg(n, t, e) {
  let s = Ta(n);
  return ((e && t !== 'right') || (!e && t === 'right')) && (s = zg(s)), s;
}
function qg(n, t, e, s) {
  const { top: i, left: r, bottom: a, right: o, chart: l } = n,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    p,
    f;
  const g = a - i,
    m = o - r;
  if (n.isHorizontal()) {
    if (((p = Lt(s, r, o)), nt(e))) {
      const b = Object.keys(e)[0],
        v = e[b];
      f = u[b].getPixelForValue(v) + g - t;
    } else
      e === 'center' ? (f = (c.bottom + c.top) / 2 + g - t) : (f = Yo(n, e, t));
    h = o - r;
  } else {
    if (nt(e)) {
      const b = Object.keys(e)[0],
        v = e[b];
      p = u[b].getPixelForValue(v) - m + t;
    } else
      e === 'center' ? (p = (c.left + c.right) / 2 - m + t) : (p = Yo(n, e, t));
    (f = Lt(s, a, i)), (d = e === 'left' ? -Mt : Mt);
  }
  return { titleX: p, titleY: f, maxWidth: h, rotation: d };
}
class Tn extends $e {
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
      (t = Zt(t, Number.POSITIVE_INFINITY)),
      (e = Zt(e, Number.NEGATIVE_INFINITY)),
      (s = Zt(s, Number.POSITIVE_INFINITY)),
      (i = Zt(i, Number.NEGATIVE_INFINITY)),
      { min: Zt(t, s), max: Zt(e, i), minDefined: xt(t), maxDefined: xt(e) }
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
      { min: Zt(e, Zt(s, e)), max: Zt(s, Zt(e, s)) }
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
    ht(this.options.beforeUpdate, [this]);
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
        (this._range = tp(this, r, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? $o(this.ticks, o) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === 'auto') &&
        ((this.ticks = Rg(this, this.ticks)),
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
    ht(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ht(this.options.beforeSetDimensions, [this]);
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
    ht(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ht(this.options[t], [this]);
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
    ht(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, i, r;
    for (s = 0, i = t.length; s < i; s++)
      (r = t[s]), (r.label = ht(e.callback, [r.value, s, t], this));
  }
  afterTickToLabelConversion() {
    ht(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ht(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      s = qo(this.ticks.length, t.ticks.maxTicksLimit),
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
      p = Et(this.chart.width - d, 0, this.maxWidth);
    (o = t.offset ? this.maxWidth / s : p / (s - 1)),
      d + 6 > o &&
        ((o = p / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          es(t.grid) -
          e.padding -
          Uo(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (a = Pa(
          Math.min(
            Math.asin(Et((u.highest.height + 6) / o, -1, 1)),
            Math.asin(Et(l / c, -1, 1)) - Math.asin(Et(h / c, -1, 1)),
          ),
        )),
        (a = Math.max(i, Math.min(r, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    ht(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ht(this.options.beforeFit, [this]);
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
      const l = Uo(i, e.options.font);
      if (
        (o
          ? ((t.width = this.maxWidth), (t.height = es(r) + l))
          : ((t.height = this.maxHeight), (t.width = es(r) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          p = s.padding * 2,
          f = fe(this.labelRotation),
          g = Math.cos(f),
          m = Math.sin(f);
        if (o) {
          const b = s.mirror ? 0 : m * d.width + g * h.height;
          t.height = Math.min(this.maxHeight, t.height + b + p);
        } else {
          const b = s.mirror ? 0 : g * d.width + m * h.height;
          t.width = Math.min(this.maxWidth, t.width + b + p);
        }
        this._calculatePadding(c, u, m, g);
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
        p = 0;
      l
        ? c
          ? ((h = i * t.width), (p = s * e.height))
          : ((h = s * t.height), (p = i * e.width))
        : r === 'start'
          ? (p = e.width)
          : r === 'end'
            ? (h = t.width)
            : r !== 'inner' && ((h = t.width / 2), (p = e.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + a) * this.width) / (this.width - u),
          0,
        )),
        (this.paddingRight = Math.max(
          ((p - d + a) * this.width) / (this.width - d),
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
    ht(this.options.afterFit, [this]);
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
      e < s.length && (s = $o(s, e)),
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
      l = Math.floor(e / qo(e, s));
    let c = 0,
      u = 0,
      d,
      h,
      p,
      f,
      g,
      m,
      b,
      v,
      x,
      w,
      y;
    for (d = 0; d < e; d += l) {
      if (
        ((f = t[d].label),
        (g = this._resolveTickFontOptions(d)),
        (i.font = m = g.string),
        (b = r[m] = r[m] || { data: {}, gc: [] }),
        (v = g.lineHeight),
        (x = w = 0),
        !et(f) && !bt(f))
      )
        (x = Ri(i, b.data, b.gc, x, f)), (w = v);
      else if (bt(f))
        for (h = 0, p = f.length; h < p; ++h)
          (y = f[h]),
            !et(y) && !bt(y) && ((x = Ri(i, b.data, b.gc, x, y)), (w += v));
      a.push(x), o.push(w), (c = Math.max(x, c)), (u = Math.max(w, u));
    }
    Hg(r, e);
    const P = a.indexOf(c),
      O = o.indexOf(u),
      k = (E) => ({ width: a[E] || 0, height: o[E] || 0 });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(P),
      highest: k(O),
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
    return Of(this._alignToPixels ? hn(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = Vg(this.getContext(), t, s));
    }
    return this.$context || (this.$context = jg(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = fe(this.labelRotation),
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
      h = es(r),
      p = [],
      f = o.setContext(this.getContext()),
      g = f.display ? f.width : 0,
      m = g / 2,
      b = function (Y) {
        return hn(s, Y, g);
      };
    let v, x, w, y, P, O, k, E, L, R, C, H;
    if (a === 'top')
      (v = b(this.bottom)),
        (O = this.bottom - h),
        (E = v - m),
        (R = b(t.top) + m),
        (H = t.bottom);
    else if (a === 'bottom')
      (v = b(this.top)),
        (R = t.top),
        (H = b(t.bottom) - m),
        (O = v + m),
        (E = this.top + h);
    else if (a === 'left')
      (v = b(this.right)),
        (P = this.right - h),
        (k = v - m),
        (L = b(t.left) + m),
        (C = t.right);
    else if (a === 'right')
      (v = b(this.left)),
        (L = t.left),
        (C = b(t.right) - m),
        (P = v + m),
        (k = this.left + h);
    else if (e === 'x') {
      if (a === 'center') v = b((t.top + t.bottom) / 2 + 0.5);
      else if (nt(a)) {
        const Y = Object.keys(a)[0],
          X = a[Y];
        v = b(this.chart.scales[Y].getPixelForValue(X));
      }
      (R = t.top), (H = t.bottom), (O = v + m), (E = O + h);
    } else if (e === 'y') {
      if (a === 'center') v = b((t.left + t.right) / 2);
      else if (nt(a)) {
        const Y = Object.keys(a)[0],
          X = a[Y];
        v = b(this.chart.scales[Y].getPixelForValue(X));
      }
      (P = v - m), (k = P - h), (L = t.left), (C = t.right);
    }
    const G = tt(i.ticks.maxTicksLimit, d),
      U = Math.max(1, Math.ceil(d / G));
    for (x = 0; x < d; x += U) {
      const Y = this.getContext(x),
        X = r.setContext(Y),
        B = o.setContext(Y),
        F = X.lineWidth,
        j = X.color,
        $ = B.dash || [],
        J = B.dashOffset,
        V = X.tickWidth,
        I = X.tickColor,
        Q = X.tickBorderDash || [],
        ot = X.tickBorderDashOffset;
      (w = Wg(this, x, l)),
        w !== void 0 &&
          ((y = hn(s, w, F)),
          c ? (P = k = L = C = y) : (O = E = R = H = y),
          p.push({
            tx1: P,
            ty1: O,
            tx2: k,
            ty2: E,
            x1: L,
            y1: R,
            x2: C,
            y2: H,
            width: F,
            color: j,
            borderDash: $,
            borderDashOffset: J,
            tickWidth: V,
            tickColor: I,
            tickBorderDash: Q,
            tickBorderDashOffset: ot,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = v), p;
  }
  _computeLabelItems(t) {
    const e = this.axis,
      s = this.options,
      { position: i, ticks: r } = s,
      a = this.isHorizontal(),
      o = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: d } = r,
      h = es(s.grid),
      p = h + u,
      f = d ? -u : p,
      g = -fe(this.labelRotation),
      m = [];
    let b,
      v,
      x,
      w,
      y,
      P,
      O,
      k,
      E,
      L,
      R,
      C,
      H = 'middle';
    if (i === 'top')
      (P = this.bottom - f), (O = this._getXAxisLabelAlignment());
    else if (i === 'bottom')
      (P = this.top + f), (O = this._getXAxisLabelAlignment());
    else if (i === 'left') {
      const U = this._getYAxisLabelAlignment(h);
      (O = U.textAlign), (y = U.x);
    } else if (i === 'right') {
      const U = this._getYAxisLabelAlignment(h);
      (O = U.textAlign), (y = U.x);
    } else if (e === 'x') {
      if (i === 'center') P = (t.top + t.bottom) / 2 + p;
      else if (nt(i)) {
        const U = Object.keys(i)[0],
          Y = i[U];
        P = this.chart.scales[U].getPixelForValue(Y) + p;
      }
      O = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (i === 'center') y = (t.left + t.right) / 2 - p;
      else if (nt(i)) {
        const U = Object.keys(i)[0],
          Y = i[U];
        y = this.chart.scales[U].getPixelForValue(Y);
      }
      O = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === 'y' && (l === 'start' ? (H = 'top') : l === 'end' && (H = 'bottom'));
    const G = this._getLabelSizes();
    for (b = 0, v = o.length; b < v; ++b) {
      (x = o[b]), (w = x.label);
      const U = r.setContext(this.getContext(b));
      (k = this.getPixelForTick(b) + r.labelOffset),
        (E = this._resolveTickFontOptions(b)),
        (L = E.lineHeight),
        (R = bt(w) ? w.length : 1);
      const Y = R / 2,
        X = U.color,
        B = U.textStrokeColor,
        F = U.textStrokeWidth;
      let j = O;
      a
        ? ((y = k),
          O === 'inner' &&
            (b === v - 1
              ? (j = this.options.reverse ? 'left' : 'right')
              : b === 0
                ? (j = this.options.reverse ? 'right' : 'left')
                : (j = 'center')),
          i === 'top'
            ? c === 'near' || g !== 0
              ? (C = -R * L + L / 2)
              : c === 'center'
                ? (C = -G.highest.height / 2 - Y * L + L)
                : (C = -G.highest.height + L / 2)
            : c === 'near' || g !== 0
              ? (C = L / 2)
              : c === 'center'
                ? (C = G.highest.height / 2 - Y * L)
                : (C = G.highest.height - R * L),
          d && (C *= -1),
          g !== 0 && !U.showLabelBackdrop && (y += (L / 2) * Math.sin(g)))
        : ((P = k), (C = ((1 - R) * L) / 2));
      let $;
      if (U.showLabelBackdrop) {
        const J = Nt(U.backdropPadding),
          V = G.heights[b],
          I = G.widths[b];
        let Q = C - J.top,
          ot = 0 - J.left;
        switch (H) {
          case 'middle':
            Q -= V / 2;
            break;
          case 'bottom':
            Q -= V;
            break;
        }
        switch (O) {
          case 'center':
            ot -= I / 2;
            break;
          case 'right':
            ot -= I;
            break;
          case 'inner':
            b === v - 1 ? (ot -= I) : b > 0 && (ot -= I / 2);
            break;
        }
        $ = {
          left: ot,
          top: Q,
          width: I + J.width,
          height: V + J.height,
          color: U.backdropColor,
        };
      }
      m.push({
        label: w,
        font: E,
        textOffset: C,
        options: {
          rotation: g,
          color: X,
          strokeColor: B,
          strokeWidth: F,
          textAlign: j,
          textBaseline: H,
          translation: [y, P],
          backdrop: $,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-fe(this.labelRotation)) return t === 'top' ? 'left' : 'right';
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
      ? ((c = hn(t, this.left, a) - a / 2),
        (u = hn(t, this.right, o) + o / 2),
        (d = h = l))
      : ((d = hn(t, this.top, a) - a / 2),
        (h = hn(t, this.bottom, o) + o / 2),
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
    i && Zi(s, i);
    const r = this.getLabelItems(t);
    for (const a of r) {
      const o = a.options,
        l = a.font,
        c = a.label,
        u = a.textOffset;
      Sn(s, c, 0, u, l, o);
    }
    i && tr(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: s, reverse: i },
    } = this;
    if (!s.display) return;
    const r = Tt(s.font),
      a = Nt(s.padding),
      o = s.align;
    let l = r.lineHeight / 2;
    e === 'bottom' || e === 'center' || nt(e)
      ? ((l += a.bottom),
        bt(s.text) && (l += r.lineHeight * (s.text.length - 1)))
      : (l += a.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = qg(this, l, e, o);
    Sn(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: d,
      rotation: h,
      textAlign: Yg(o, e, i),
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
      s = tt(t.grid && t.grid.z, -1),
      i = tt(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Tn.prototype.draw
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
class ei {
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
    Xg(e) && (s = this.register(e));
    const i = this.items,
      r = t.id,
      a = this.scope + '.' + r;
    if (!r) throw new Error('class does not have id: ' + t);
    return (
      r in i ||
        ((i[r] = t),
        $g(t, a, s),
        this.override && _t.override(t.id, t.overrides)),
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
      i && s in _t[i] && (delete _t[i][s], this.override && delete Mn[s]);
  }
}
function $g(n, t, e) {
  const s = Ms(Object.create(null), [
    e ? _t.get(e) : {},
    _t.get(t),
    n.defaults,
  ]);
  _t.set(t, s),
    n.defaultRoutes && Ug(t, n.defaultRoutes),
    n.descriptors && _t.describe(t, n.descriptors);
}
function Ug(n, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split('.'),
      i = s.pop(),
      r = [n].concat(s).join('.'),
      a = t[e].split('.'),
      o = a.pop(),
      l = a.join('.');
    _t.route(r, i, l, o);
  });
}
function Xg(n) {
  return 'id' in n && 'defaults' in n;
}
class Qg {
  constructor() {
    (this.controllers = new ei(pe, 'datasets', !0)),
      (this.elements = new ei($e, 'elements')),
      (this.plugins = new ei(Object, 'plugins')),
      (this.scales = new ei(Tn, 'scales')),
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
        : ct(i, (a) => {
            const o = s || this._getRegistryForType(a);
            this._exec(t, o, a);
          });
    });
  }
  _exec(t, e, s) {
    const i = Sa(t);
    ht(s['before' + i], [], s), e[t](s), ht(s['after' + i], [], s);
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
var Me = new Qg();
class Gg {
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
      if (ht(o, l, a) === !1 && i.cancelable) return !1;
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
      i = tt(s.options && s.options.plugins, {}),
      r = Kg(s);
    return i === !1 && !e ? [] : Zg(t, r, i, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      s = this._cache,
      i = (r, a) =>
        r.filter((o) => !a.some((l) => o.plugin.id === l.plugin.id));
    this._notify(i(e, s), t, 'stop'), this._notify(i(s, e), t, 'start');
  }
}
function Kg(n) {
  const t = {},
    e = [],
    s = Object.keys(Me.plugins.items);
  for (let r = 0; r < s.length; r++) e.push(Me.getPlugin(s[r]));
  const i = n.plugins || [];
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    e.indexOf(a) === -1 && (e.push(a), (t[a.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function Jg(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function Zg(n, { plugins: t, localIds: e }, s, i) {
  const r = [],
    a = n.getContext();
  for (const o of t) {
    const l = o.id,
      c = Jg(s[l], i);
    c !== null &&
      r.push({
        plugin: o,
        options: tm(n.config, { plugin: o, local: e[l] }, c, a),
      });
  }
  return r;
}
function tm(n, { plugin: t, local: e }, s, i) {
  const r = n.pluginScopeKeys(t),
    a = n.getOptionScopes(s, r);
  return (
    e && t.defaults && a.push(t.defaults),
    n.createResolver(a, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function qr(n, t) {
  const e = _t.datasets[n] || {};
  return (
    ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x'
  );
}
function em(n, t) {
  let e = n;
  return (
    n === '_index_' ? (e = t) : n === '_value_' && (e = t === 'x' ? 'y' : 'x'),
    e
  );
}
function nm(n, t) {
  return n === t ? '_index_' : '_value_';
}
function Xo(n) {
  if (n === 'x' || n === 'y' || n === 'r') return n;
}
function sm(n) {
  if (n === 'top' || n === 'bottom') return 'x';
  if (n === 'left' || n === 'right') return 'y';
}
function $r(n, ...t) {
  if (Xo(n)) return n;
  for (const e of t) {
    const s =
      e.axis || sm(e.position) || (n.length > 1 && Xo(n[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function Qo(n, t, e) {
  if (e[t + 'AxisID'] === n) return { axis: t };
}
function im(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === n || s.yAxisID === n);
    if (e.length) return Qo(n, 'x', e[0]) || Qo(n, 'y', e[0]);
  }
  return {};
}
function rm(n, t) {
  const e = Mn[n.type] || { scales: {} },
    s = t.scales || {},
    i = qr(n.type, t),
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
      const l = $r(a, o, im(a, n), _t.scales[o.type]),
        c = nm(l, i),
        u = e.scales || {};
      r[a] = ps(Object.create(null), [{ axis: l }, o, u[l], u[c]]);
    }),
    n.data.datasets.forEach((a) => {
      const o = a.type || n.type,
        l = a.indexAxis || qr(o, t),
        u = (Mn[o] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = em(d, l),
          p = a[h + 'AxisID'] || h;
        (r[p] = r[p] || Object.create(null)),
          ps(r[p], [{ axis: h }, s[p], u[d]]);
      });
    }),
    Object.keys(r).forEach((a) => {
      const o = r[a];
      ps(o, [_t.scales[o.type], _t.scale]);
    }),
    r
  );
}
function lu(n) {
  const t = n.options || (n.options = {});
  (t.plugins = tt(t.plugins, {})), (t.scales = rm(n, t));
}
function cu(n) {
  return (
    (n = n || {}),
    (n.datasets = n.datasets || []),
    (n.labels = n.labels || []),
    n
  );
}
function am(n) {
  return (n = n || {}), (n.data = cu(n.data)), lu(n), n;
}
const Go = new Map(),
  uu = new Set();
function ni(n, t) {
  let e = Go.get(n);
  return e || ((e = t()), Go.set(n, e), uu.add(e)), e;
}
const ns = (n, t, e) => {
  const s = an(t, e);
  s !== void 0 && n.add(s);
};
class om {
  constructor(t) {
    (this._config = am(t)),
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
    this._config.data = cu(t);
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
    this.clearCache(), lu(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ni(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ni(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return ni(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      s = this.type;
    return ni(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), u.forEach((d) => ns(l, t, d))),
        u.forEach((d) => ns(l, i, d)),
        u.forEach((d) => ns(l, Mn[r] || {}, d)),
        u.forEach((d) => ns(l, _t, d)),
        u.forEach((d) => ns(l, jr, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), uu.has(e) && a.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, Mn[e] || {}, _t.datasets[e] || {}, { type: e }, _t, jr];
  }
  resolveNamedOptions(t, e, s, i = ['']) {
    const r = { $shared: !0 },
      { resolver: a, subPrefixes: o } = Ko(this._resolverCache, t, i);
    let l = a;
    if (cm(a, e)) {
      (r.$shared = !1), (s = on(s) ? s() : s);
      const c = this.createResolver(t, s, o);
      l = jn(a, s, c);
    }
    for (const c of e) r[c] = l[c];
    return r;
  }
  createResolver(t, e, s = [''], i) {
    const { resolver: r } = Ko(this._resolverCache, t, s);
    return nt(e) ? jn(r, e, void 0, i) : r;
  }
}
function Ko(n, t, e) {
  let s = n.get(t);
  s || ((s = new Map()), n.set(t, s));
  const i = e.join();
  let r = s.get(i);
  return (
    r ||
      ((r = {
        resolver: Ca(t, e),
        subPrefixes: e.filter((o) => !o.toLowerCase().includes('hover')),
      }),
      s.set(i, r)),
    r
  );
}
const lm = (n) => nt(n) && Object.getOwnPropertyNames(n).some((t) => on(n[t]));
function cm(n, t) {
  const { isScriptable: e, isIndexable: s } = Hc(n);
  for (const i of t) {
    const r = e(i),
      a = s(i),
      o = (a || r) && n[i];
    if ((r && (on(o) || lm(o))) || (a && bt(o))) return !0;
  }
  return !1;
}
var um = '4.4.9';
const dm = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Jo(n, t) {
  return n === 'top' || n === 'bottom' || (dm.indexOf(n) === -1 && t === 'x');
}
function Zo(n, t) {
  return function (e, s) {
    return e[n] === s[n] ? e[t] - s[t] : e[n] - s[n];
  };
}
function tl(n) {
  const t = n.chart,
    e = t.options.animation;
  t.notifyPlugins('afterRender'), ht(e && e.onComplete, [n], t);
}
function hm(n) {
  const t = n.chart,
    e = t.options.animation;
  ht(e && e.onProgress, [n], t);
}
function du(n) {
  return (
    La() && typeof n == 'string'
      ? (n = document.getElementById(n))
      : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const mi = {},
  el = (n) => {
    const t = du(n);
    return Object.values(mi)
      .filter((e) => e.canvas === t)
      .pop();
  };
function fm(n, t, e) {
  const s = Object.keys(n);
  for (const i of s) {
    const r = +i;
    if (r >= t) {
      const a = n[i];
      delete n[i], (e > 0 || r > t) && (n[r + e] = a);
    }
  }
}
function pm(n, t, e, s) {
  return !e || n.type === 'mouseout' ? null : s ? t : n;
}
class Yt {
  static register(...t) {
    Me.add(...t), nl();
  }
  static unregister(...t) {
    Me.remove(...t), nl();
  }
  constructor(t, e) {
    const s = (this.config = new om(e)),
      i = du(t),
      r = el(i);
    if (r)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          r.id +
          "' must be destroyed before the canvas with ID '" +
          r.canvas.id +
          "' can be reused.",
      );
    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
    (this.platform = new (s.platform || Ag(i))()),
      this.platform.updateConfig(s);
    const o = this.platform.acquireContext(i, a.aspectRatio),
      l = o && o.canvas,
      c = l && l.height,
      u = l && l.width;
    if (
      ((this.id = mf()),
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
      (this._plugins = new Gg()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Rf((d) => this.update(d), a.resizeDelay || 0)),
      (this._dataChanges = []),
      (mi[this.id] = this),
      !o || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    Ne.listen(this, 'complete', tl),
      Ne.listen(this, 'progress', hm),
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
    return Me;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive
        ? this.resize()
        : Mo(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return xo(this.canvas, this.ctx), this;
  }
  stop() {
    return Ne.stop(this), this;
  }
  resize(t, e) {
    Ne.running(this)
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
      Mo(this, o, !0) &&
        (this.notifyPlugins('resize', { size: a }),
        ht(s.onResize, [this, a], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    ct(e, (s, i) => {
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
            l = $r(a, o),
            c = l === 'r',
            u = l === 'x';
          return {
            options: o,
            dposition: c ? 'chartArea' : u ? 'bottom' : 'left',
            dtype: c ? 'radialLinear' : u ? 'category' : 'linear',
          };
        }),
      )),
      ct(r, (a) => {
        const o = a.options,
          l = o.id,
          c = $r(l, o),
          u = tt(o.type, a.dtype);
        (o.position === void 0 || Jo(o.position, c) !== Jo(a.dposition)) &&
          (o.position = a.dposition),
          (i[l] = !0);
        let d = null;
        if (l in s && s[l].type === u) d = s[l];
        else {
          const h = Me.getScale(u);
          (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
            (s[d.id] = d);
        }
        d.init(o, t);
      }),
      ct(i, (a, o) => {
        a || delete s[o];
      }),
      ct(s, (a) => {
        It.configure(this, a, a.options), It.addBox(this, a);
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
    this._sortedMetasets = t.slice(0).sort(Zo('order', 'index'));
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
        (a.indexAxis = r.indexAxis || qr(o, this.options)),
        (a.order = r.order || 0),
        (a.index = s),
        (a.label = '' + r.label),
        (a.visible = this.isDatasetVisible(s)),
        a.controller)
      )
        a.controller.updateIndex(s), a.controller.linkScales();
      else {
        const l = Me.getController(o),
          { datasetElementType: c, dataElementType: u } = _t.datasets[o];
        Object.assign(l, {
          dataElementType: Me.getElement(u),
          datasetElementType: c && Me.getElement(c),
        }),
          (a.controller = new l(this, s)),
          t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    ct(
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
        ct(r, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(Zo('z', '_idx'));
    const { _active: o, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : o.length && this._updateHoverStyles(o, o, !0),
      this.render();
  }
  _updateScales() {
    ct(this.scales, (t) => {
      It.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      s = new Set(t.events);
    (!ho(e, s) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      e = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: r } of e) {
      const a = s === '_removeElements' ? -r : r;
      fm(t, i, a);
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
    for (let r = 1; r < e; r++) if (!ho(i, s(r))) return;
    return Array.from(i)
      .map((r) => r.split(','))
      .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
    It.update(this, this.width, this.height, t);
    const e = this.chartArea,
      s = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      ct(
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
        this._updateDataset(e, on(t) ? t({ datasetIndex: e }) : t);
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
      (Ne.has(this)
        ? this.attached && !Ne.running(this) && Ne.start(this)
        : (this.draw(), tl({ chart: this })));
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
      i = Jc(this, t);
    this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
      (i && Zi(e, i),
      t.controller.draw(),
      i && tr(e),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', s));
  }
  isPointInArea(t) {
    return je(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, i) {
    const r = dg.modes[e];
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
      (this.$context = ln(null, { chart: this, type: 'chart' }))
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
    Ss(e)
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
      this.stop(), Ne.remove(this), t = 0, e = this.data.datasets.length;
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
        xo(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete mi[this.id],
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
    ct(this.options.events, (r) => s(r, i));
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
    ct(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      ct(this._responsiveListeners, (t, e) => {
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
    !Ei(s, e) &&
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
      l = wf(t),
      c = pm(t, this._lastEvent, s, l);
    s &&
      ((this._lastEvent = null),
      ht(r.onHover, [t, o, this], this),
      l && ht(r.onClick, [t, o, this], this));
    const u = !Ei(o, i);
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
S(Yt, 'defaults', _t),
  S(Yt, 'instances', mi),
  S(Yt, 'overrides', Mn),
  S(Yt, 'registry', Me),
  S(Yt, 'version', um),
  S(Yt, 'getChart', el);
function nl() {
  return ct(Yt.instances, (n) => n._plugins.invalidate());
}
function gm(n, t, e) {
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
      : n.arc(r, a, i, e + Mt, s - Mt),
    n.closePath(),
    n.clip();
}
function mm(n) {
  return Ea(n, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function bm(n, t, e, s) {
  const i = mm(n.options.borderRadius),
    r = (e - t) / 2,
    a = Math.min(r, (s * t) / 2),
    o = (l) => {
      const c = ((e - Math.min(r, l)) * s) / 2;
      return Et(l, 0, Math.min(r, c));
    };
  return {
    outerStart: o(i.outerStart),
    outerEnd: o(i.outerEnd),
    innerStart: Et(i.innerStart, 0, a),
    innerEnd: Et(i.innerEnd, 0, a),
  };
}
function Ln(n, t, e, s) {
  return { x: e + n * Math.cos(t), y: s + n * Math.sin(t) };
}
function Ii(n, t, e, s, i, r) {
  const { x: a, y: o, startAngle: l, pixelMargin: c, innerRadius: u } = t,
    d = Math.max(t.outerRadius + s + e - c, 0),
    h = u > 0 ? u + s + e + c : 0;
  let p = 0;
  const f = i - l;
  if (s) {
    const U = u > 0 ? u - s : 0,
      Y = d > 0 ? d - s : 0,
      X = (U + Y) / 2,
      B = X !== 0 ? (f * X) / (X + s) : f;
    p = (f - B) / 2;
  }
  const g = Math.max(0.001, f * d - e / gt) / d,
    m = (f - g) / 2,
    b = l + m + p,
    v = i - m - p,
    {
      outerStart: x,
      outerEnd: w,
      innerStart: y,
      innerEnd: P,
    } = bm(t, h, d, v - b),
    O = d - x,
    k = d - w,
    E = b + x / O,
    L = v - w / k,
    R = h + y,
    C = h + P,
    H = b + y / R,
    G = v - P / C;
  if ((n.beginPath(), r)) {
    const U = (E + L) / 2;
    if ((n.arc(a, o, d, E, U), n.arc(a, o, d, U, L), w > 0)) {
      const F = Ln(k, L, a, o);
      n.arc(F.x, F.y, w, L, v + Mt);
    }
    const Y = Ln(C, v, a, o);
    if ((n.lineTo(Y.x, Y.y), P > 0)) {
      const F = Ln(C, G, a, o);
      n.arc(F.x, F.y, P, v + Mt, G + Math.PI);
    }
    const X = (v - P / h + (b + y / h)) / 2;
    if (
      (n.arc(a, o, h, v - P / h, X, !0),
      n.arc(a, o, h, X, b + y / h, !0),
      y > 0)
    ) {
      const F = Ln(R, H, a, o);
      n.arc(F.x, F.y, y, H + Math.PI, b - Mt);
    }
    const B = Ln(O, b, a, o);
    if ((n.lineTo(B.x, B.y), x > 0)) {
      const F = Ln(O, E, a, o);
      n.arc(F.x, F.y, x, b - Mt, E);
    }
  } else {
    n.moveTo(a, o);
    const U = Math.cos(E) * d + a,
      Y = Math.sin(E) * d + o;
    n.lineTo(U, Y);
    const X = Math.cos(L) * d + a,
      B = Math.sin(L) * d + o;
    n.lineTo(X, B);
  }
  n.closePath();
}
function _m(n, t, e, s, i) {
  const { fullCircles: r, startAngle: a, circumference: o } = t;
  let l = t.endAngle;
  if (r) {
    Ii(n, t, e, s, l, i);
    for (let c = 0; c < r; ++c) n.fill();
    isNaN(o) || (l = a + (o % pt || pt));
  }
  return Ii(n, t, e, s, l, i), n.fill(), l;
}
function vm(n, t, e, s, i) {
  const { fullCircles: r, startAngle: a, circumference: o, options: l } = t,
    {
      borderWidth: c,
      borderJoinStyle: u,
      borderDash: d,
      borderDashOffset: h,
    } = l,
    p = l.borderAlign === 'inner';
  if (!c) return;
  n.setLineDash(d || []),
    (n.lineDashOffset = h),
    p
      ? ((n.lineWidth = c * 2), (n.lineJoin = u || 'round'))
      : ((n.lineWidth = c), (n.lineJoin = u || 'bevel'));
  let f = t.endAngle;
  if (r) {
    Ii(n, t, e, s, f, i);
    for (let g = 0; g < r; ++g) n.stroke();
    isNaN(o) || (f = a + (o % pt || pt));
  }
  p && gm(n, t, f), r || (Ii(n, t, e, s, f, i), n.stroke());
}
class us extends $e {
  constructor(e) {
    super();
    S(this, 'circumference');
    S(this, 'endAngle');
    S(this, 'fullCircles');
    S(this, 'innerRadius');
    S(this, 'outerRadius');
    S(this, 'pixelMargin');
    S(this, 'startAngle');
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
      { angle: a, distance: o } = Cc(r, { x: e, y: s }),
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
      p = (this.options.spacing + this.options.borderWidth) / 2,
      f = tt(h, c - l),
      g = Ps(a, l, c) && l !== c,
      m = f >= pt || g,
      b = We(o, u + p, d + p);
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
      (this.fullCircles = i > pt ? Math.floor(i / pt) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * r, Math.sin(l) * r);
    const c = 1 - Math.sin(Math.min(gt, i || 0)),
      u = r * c;
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      _m(e, this, u, a, o),
      vm(e, this, u, a, o),
      e.restore();
  }
}
S(us, 'id', 'arc'),
  S(us, 'defaults', {
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
  S(us, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  S(us, 'descriptors', {
    _scriptable: !0,
    _indexable: (e) => e !== 'borderDash',
  });
function hu(n, t, e = t) {
  (n.lineCap = tt(e.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(tt(e.borderDash, t.borderDash)),
    (n.lineDashOffset = tt(e.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = tt(e.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = tt(e.borderWidth, t.borderWidth)),
    (n.strokeStyle = tt(e.borderColor, t.borderColor));
}
function ym(n, t, e) {
  n.lineTo(e.x, e.y);
}
function xm(n) {
  return n.stepped
    ? qf
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? $f
      : ym;
}
function fu(n, t, e = {}) {
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
function wm(n, t, e, s) {
  const { points: i, options: r } = t,
    { count: a, start: o, loop: l, ilen: c } = fu(i, e, s),
    u = xm(r);
  let { move: d = !0, reverse: h } = s || {},
    p,
    f,
    g;
  for (p = 0; p <= c; ++p)
    (f = i[(o + (h ? c - p : p)) % a]),
      !f.skip &&
        (d ? (n.moveTo(f.x, f.y), (d = !1)) : u(n, g, f, h, r.stepped),
        (g = f));
  return l && ((f = i[(o + (h ? c : 0)) % a]), u(n, g, f, h, r.stepped)), !!l;
}
function km(n, t, e, s) {
  const i = t.points,
    { count: r, start: a, ilen: o } = fu(i, e, s),
    { move: l = !0, reverse: c } = s || {};
  let u = 0,
    d = 0,
    h,
    p,
    f,
    g,
    m,
    b;
  const v = (w) => (a + (c ? o - w : w)) % r,
    x = () => {
      g !== m && (n.lineTo(u, m), n.lineTo(u, g), n.lineTo(u, b));
    };
  for (l && ((p = i[v(0)]), n.moveTo(p.x, p.y)), h = 0; h <= o; ++h) {
    if (((p = i[v(h)]), p.skip)) continue;
    const w = p.x,
      y = p.y,
      P = w | 0;
    P === f
      ? (y < g ? (g = y) : y > m && (m = y), (u = (d * u + w) / ++d))
      : (x(), n.lineTo(w, y), (f = P), (d = 0), (g = m = y)),
      (b = y);
  }
  x();
}
function Ur(n) {
  const t = n.options,
    e = t.borderDash && t.borderDash.length;
  return !n._decimated &&
    !n._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !e
    ? km
    : wm;
}
function Mm(n) {
  return n.stepped
    ? Mp
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? Sp
      : mn;
}
function Sm(n, t, e, s) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, e, s) && i.closePath()),
    hu(n, t.options),
    n.stroke(i);
}
function Pm(n, t, e, s) {
  const { segments: i, options: r } = t,
    a = Ur(t);
  for (const o of i)
    hu(n, r, o.style),
      n.beginPath(),
      a(n, t, o, { start: e, end: e + s - 1 }) && n.closePath(),
      n.stroke();
}
const Dm = typeof Path2D == 'function';
function Tm(n, t, e, s) {
  Dm && !t.options.segment ? Sm(n, t, e, s) : Pm(n, t, e, s);
}
class Ze extends $e {
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
      mp(this._points, s, t, i, e), (this._pointsUpdated = !0);
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
    return this._segments || (this._segments = Cp(this, this.options.segment));
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
      a = Kc(this, { property: e, start: i, end: i });
    if (!a.length) return;
    const o = [],
      l = Mm(s);
    let c, u;
    for (c = 0, u = a.length; c < u; ++c) {
      const { start: d, end: h } = a[c],
        p = r[d],
        f = r[h];
      if (p === f) {
        o.push(p);
        continue;
      }
      const g = Math.abs((i - p[e]) / (f[e] - p[e])),
        m = l(p, f, g, s.stepped);
      (m[e] = t[e]), o.push(m);
    }
    return o.length === 1 ? o[0] : o;
  }
  pathSegment(t, e, s) {
    return Ur(this)(t, this, e, s);
  }
  path(t, e, s) {
    const i = this.segments,
      r = Ur(this);
    let a = this._loop;
    (e = e || 0), (s = s || this.points.length - e);
    for (const o of i) a &= r(t, this, o, { start: e, end: e + s - 1 });
    return !!a;
  }
  draw(t, e, s, i) {
    const r = this.options || {};
    (this.points || []).length &&
      r.borderWidth &&
      (t.save(), Tm(t, this, s, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
S(Ze, 'id', 'line'),
  S(Ze, 'defaults', {
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
  S(Ze, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  }),
  S(Ze, 'descriptors', {
    _scriptable: !0,
    _indexable: (t) => t !== 'borderDash' && t !== 'fill',
  });
function sl(n, t, e, s) {
  const i = n.options,
    { [e]: r } = n.getProps([e], s);
  return Math.abs(t - r) < i.radius + i.hitRadius;
}
class bi extends $e {
  constructor(e) {
    super();
    S(this, 'parsed');
    S(this, 'skip');
    S(this, 'stop');
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
    return sl(this, e, 'x', s);
  }
  inYRange(e, s) {
    return sl(this, e, 'y', s);
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
      !je(this, s, this.size(i) / 2) ||
      ((e.strokeStyle = i.borderColor),
      (e.lineWidth = i.borderWidth),
      (e.fillStyle = i.backgroundColor),
      Vr(e, i, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
S(bi, 'id', 'point'),
  S(bi, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  S(bi, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
function pu(n, t) {
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
function tn(n, t, e, s) {
  return n ? 0 : Et(t, e, s);
}
function Om(n, t, e) {
  const s = n.options.borderWidth,
    i = n.borderSkipped,
    r = Wc(s);
  return {
    t: tn(i.top, r.top, 0, e),
    r: tn(i.right, r.right, 0, t),
    b: tn(i.bottom, r.bottom, 0, e),
    l: tn(i.left, r.left, 0, t),
  };
}
function Em(n, t, e) {
  const { enableBorderRadius: s } = n.getProps(['enableBorderRadius']),
    i = n.options.borderRadius,
    r = xn(i),
    a = Math.min(t, e),
    o = n.borderSkipped,
    l = s || nt(i);
  return {
    topLeft: tn(!l || o.top || o.left, r.topLeft, 0, a),
    topRight: tn(!l || o.top || o.right, r.topRight, 0, a),
    bottomLeft: tn(!l || o.bottom || o.left, r.bottomLeft, 0, a),
    bottomRight: tn(!l || o.bottom || o.right, r.bottomRight, 0, a),
  };
}
function Cm(n) {
  const t = pu(n),
    e = t.right - t.left,
    s = t.bottom - t.top,
    i = Om(n, e / 2, s / 2),
    r = Em(n, e / 2, s / 2);
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
function Sr(n, t, e, s) {
  const i = t === null,
    r = e === null,
    o = n && !(i && r) && pu(n, s);
  return o && (i || We(t, o.left, o.right)) && (r || We(e, o.top, o.bottom));
}
function Am(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Rm(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function Pr(n, t, e = {}) {
  const s = n.x !== e.x ? -t : 0,
    i = n.y !== e.y ? -t : 0,
    r = (n.x + n.w !== e.x + e.w ? t : 0) - s,
    a = (n.y + n.h !== e.y + e.h ? t : 0) - i;
  return { x: n.x + s, y: n.y + i, w: n.w + r, h: n.h + a, radius: n.radius };
}
class _i extends $e {
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
      { inner: r, outer: a } = Cm(this),
      o = Am(a.radius) ? Ds : Rm;
    t.save(),
      (a.w !== r.w || a.h !== r.h) &&
        (t.beginPath(),
        o(t, Pr(a, e, r)),
        t.clip(),
        o(t, Pr(r, -e, a)),
        (t.fillStyle = s),
        t.fill('evenodd')),
      t.beginPath(),
      o(t, Pr(r, e)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, e, s) {
    return Sr(this, t, e, s);
  }
  inXRange(t, e) {
    return Sr(this, t, null, e);
  }
  inYRange(t, e) {
    return Sr(this, null, t, e);
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
S(_i, 'id', 'bar'),
  S(_i, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  S(_i, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
var Lm = Object.freeze({
  __proto__: null,
  ArcElement: us,
  BarElement: _i,
  LineElement: Ze,
  PointElement: bi,
});
const Xr = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  il = Xr.map((n) => n.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function gu(n) {
  return Xr[n % Xr.length];
}
function mu(n) {
  return il[n % il.length];
}
function Fm(n, t) {
  return (n.borderColor = gu(t)), (n.backgroundColor = mu(t)), ++t;
}
function Im(n, t) {
  return (n.backgroundColor = n.data.map(() => gu(t++))), t;
}
function Nm(n, t) {
  return (n.backgroundColor = n.data.map(() => mu(t++))), t;
}
function Bm(n) {
  let t = 0;
  return (e, s) => {
    const i = n.getDatasetMeta(s).controller;
    i instanceof _n
      ? (t = Im(e, t))
      : i instanceof _s
        ? (t = Nm(e, t))
        : i && (t = Fm(e, t));
  };
}
function rl(n) {
  let t;
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
  return !1;
}
function zm(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function Wm() {
  return (
    _t.borderColor !== 'rgba(0,0,0,0.1)' ||
    _t.backgroundColor !== 'rgba(0,0,0,0.1)'
  );
}
var Hm = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(n, t, e) {
    if (!e.enabled) return;
    const {
        data: { datasets: s },
        options: i,
      } = n.config,
      { elements: r } = i,
      a = rl(s) || zm(i) || (r && rl(r)) || Wm();
    if (!e.forceOverride && a) return;
    const o = Bm(n);
    s.forEach(o);
  },
};
function jm(n, t, e, s, i) {
  const r = i.samples || s;
  if (r >= e) return n.slice(t, t + e);
  const a = [],
    o = (e - 2) / (r - 2);
  let l = 0;
  const c = t + e - 1;
  let u = t,
    d,
    h,
    p,
    f,
    g;
  for (a[l++] = n[u], d = 0; d < r - 2; d++) {
    let m = 0,
      b = 0,
      v;
    const x = Math.floor((d + 1) * o) + 1 + t,
      w = Math.min(Math.floor((d + 2) * o) + 1, e) + t,
      y = w - x;
    for (v = x; v < w; v++) (m += n[v].x), (b += n[v].y);
    (m /= y), (b /= y);
    const P = Math.floor(d * o) + 1 + t,
      O = Math.min(Math.floor((d + 1) * o) + 1, e) + t,
      { x: k, y: E } = n[u];
    for (p = f = -1, v = P; v < O; v++)
      (f = 0.5 * Math.abs((k - m) * (n[v].y - E) - (k - n[v].x) * (b - E))),
        f > p && ((p = f), (h = n[v]), (g = v));
    (a[l++] = h), (u = g);
  }
  return (a[l++] = n[c]), a;
}
function Vm(n, t, e, s) {
  let i = 0,
    r = 0,
    a,
    o,
    l,
    c,
    u,
    d,
    h,
    p,
    f,
    g;
  const m = [],
    b = t + e - 1,
    v = n[t].x,
    w = n[b].x - v;
  for (a = t; a < t + e; ++a) {
    (o = n[a]), (l = ((o.x - v) / w) * s), (c = o.y);
    const y = l | 0;
    if (y === u)
      c < f ? ((f = c), (d = a)) : c > g && ((g = c), (h = a)),
        (i = (r * i + o.x) / ++r);
    else {
      const P = a - 1;
      if (!et(d) && !et(h)) {
        const O = Math.min(d, h),
          k = Math.max(d, h);
        O !== p && O !== P && m.push({ ...n[O], x: i }),
          k !== p && k !== P && m.push({ ...n[k], x: i });
      }
      a > 0 && P !== p && m.push(n[P]),
        m.push(o),
        (u = y),
        (r = 0),
        (f = g = c),
        (d = h = p = a);
    }
  }
  return m;
}
function bu(n) {
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
function al(n) {
  n.data.datasets.forEach((t) => {
    bu(t);
  });
}
function Ym(n, t) {
  const e = t.length;
  let s = 0,
    i;
  const { iScale: r } = n,
    { min: a, max: o, minDefined: l, maxDefined: c } = r.getUserBounds();
  return (
    l && (s = Et(He(t, r.axis, a).lo, 0, e - 1)),
    c ? (i = Et(He(t, r.axis, o).hi + 1, s, e) - s) : (i = e - s),
    { start: s, count: i }
  );
}
var qm = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      al(n);
      return;
    }
    const s = n.width;
    n.data.datasets.forEach((i, r) => {
      const { _data: a, indexAxis: o } = i,
        l = n.getDatasetMeta(r),
        c = a || i.data;
      if (
        ls([o, n.options.indexAxis]) === 'y' ||
        !l.controller.supportsDecimation
      )
        return;
      const u = n.scales[l.xAxisID];
      if ((u.type !== 'linear' && u.type !== 'time') || n.options.parsing)
        return;
      let { start: d, count: h } = Ym(l, c);
      const p = e.threshold || 4 * s;
      if (h <= p) {
        bu(i);
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
          set: function (g) {
            this._data = g;
          },
        }));
      let f;
      switch (e.algorithm) {
        case 'lttb':
          f = jm(c, d, h, s, e);
          break;
        case 'min-max':
          f = Vm(c, d, h, s);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      i._decimated = f;
    });
  },
  destroy(n) {
    al(n);
  },
};
function $m(n, t, e) {
  const s = n.segments,
    i = n.points,
    r = t.points,
    a = [];
  for (const o of s) {
    let { start: l, end: c } = o;
    c = Na(l, c, i);
    const u = Qr(e, i[l], i[c], o.loop);
    if (!t.segments) {
      a.push({ source: o, target: u, start: i[l], end: i[c] });
      continue;
    }
    const d = Kc(t, u);
    for (const h of d) {
      const p = Qr(e, r[h.start], r[h.end], h.loop),
        f = Gc(o, i, p);
      for (const g of f)
        a.push({
          source: g,
          target: h,
          start: { [e]: ol(u, p, 'start', Math.max) },
          end: { [e]: ol(u, p, 'end', Math.min) },
        });
    }
  }
  return a;
}
function Qr(n, t, e, s) {
  if (s) return;
  let i = t[n],
    r = e[n];
  return (
    n === 'angle' && ((i = te(i)), (r = te(r))),
    { property: n, start: i, end: r }
  );
}
function Um(n, t) {
  const { x: e = null, y: s = null } = n || {},
    i = t.points,
    r = [];
  return (
    t.segments.forEach(({ start: a, end: o }) => {
      o = Na(a, o, i);
      const l = i[a],
        c = i[o];
      s !== null
        ? (r.push({ x: l.x, y: s }), r.push({ x: c.x, y: s }))
        : e !== null && (r.push({ x: e, y: l.y }), r.push({ x: e, y: c.y }));
    }),
    r
  );
}
function Na(n, t, e) {
  for (; t > n; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return t;
}
function ol(n, t, e, s) {
  return n && t ? s(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function _u(n, t) {
  let e = [],
    s = !1;
  return (
    bt(n) ? ((s = !0), (e = n)) : (e = Um(n, t)),
    e.length
      ? new Ze({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s })
      : null
  );
}
function ll(n) {
  return n && n.fill !== !1;
}
function Xm(n, t, e) {
  let i = n[t].fill;
  const r = [t];
  let a;
  if (!e) return i;
  for (; i !== !1 && r.indexOf(i) === -1; ) {
    if (!xt(i)) return i;
    if (((a = n[i]), !a)) return !1;
    if (a.visible) return i;
    r.push(i), (i = a.fill);
  }
  return !1;
}
function Qm(n, t, e) {
  const s = Zm(n);
  if (nt(s)) return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return xt(i) && Math.floor(i) === i
    ? Gm(s[0], t, i, e)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
}
function Gm(n, t, e, s) {
  return (
    (n === '-' || n === '+') && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
  );
}
function Km(n, t) {
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
function Jm(n, t, e) {
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
function Zm(n) {
  const t = n.options,
    e = t.fill;
  let s = tt(e && e.target, e);
  return (
    s === void 0 && (s = !!t.backgroundColor),
    s === !1 || s === null ? !1 : s === !0 ? 'origin' : s
  );
}
function tb(n) {
  const { scale: t, index: e, line: s } = n,
    i = [],
    r = s.segments,
    a = s.points,
    o = eb(t, e);
  o.push(_u({ x: null, y: t.bottom }, s));
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    for (let u = c.start; u <= c.end; u++) nb(i, a[u], o);
  }
  return new Ze({ points: i, options: {} });
}
function eb(n, t) {
  const e = [],
    s = n.getMatchingVisibleMetas('line');
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (r.index === t) break;
    r.hidden || e.unshift(r.dataset);
  }
  return e;
}
function nb(n, t, e) {
  const s = [];
  for (let i = 0; i < e.length; i++) {
    const r = e[i],
      { first: a, last: o, point: l } = sb(r, t, 'x');
    if (!(!l || (a && o))) {
      if (a) s.unshift(l);
      else if ((n.push(l), !o)) break;
    }
  }
  n.push(...s);
}
function sb(n, t, e) {
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
    if (We(i, d, h)) {
      (o = i === d), (l = i === h);
      break;
    }
  }
  return { first: o, last: l, point: s };
}
class vu {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, s) {
    const { x: i, y: r, radius: a } = this;
    return (
      (e = e || { start: 0, end: pt }),
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
function ib(n) {
  const { chart: t, fill: e, line: s } = n;
  if (xt(e)) return rb(t, e);
  if (e === 'stack') return tb(n);
  if (e === 'shape') return !0;
  const i = ab(n);
  return i instanceof vu ? i : _u(i, s);
}
function rb(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function ab(n) {
  return (n.scale || {}).getPointPositionForValue ? lb(n) : ob(n);
}
function ob(n) {
  const { scale: t = {}, fill: e } = n,
    s = Km(e, t);
  if (xt(s)) {
    const i = t.isHorizontal();
    return { x: i ? s : null, y: i ? null : s };
  }
  return null;
}
function lb(n) {
  const { scale: t, fill: e } = n,
    s = t.options,
    i = t.getLabels().length,
    r = s.reverse ? t.max : t.min,
    a = Jm(e, t, r),
    o = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, r);
    return new vu({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a),
    });
  }
  for (let l = 0; l < i; ++l) o.push(t.getPointPositionForValue(l, a));
  return o;
}
function Dr(n, t, e) {
  const s = ib(t),
    { chart: i, index: r, line: a, scale: o, axis: l } = t,
    c = a.options,
    u = c.fill,
    d = c.backgroundColor,
    { above: h = d, below: p = d } = u || {},
    f = i.getDatasetMeta(r),
    g = Jc(i, f);
  s &&
    a.points.length &&
    (Zi(n, e),
    cb(n, {
      line: a,
      target: s,
      above: h,
      below: p,
      area: e,
      scale: o,
      axis: l,
      clip: g,
    }),
    tr(n));
}
function cb(n, t) {
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
      (cl(n, s, a.top),
      ul(n, { line: e, target: s, color: i, scale: o, property: c, clip: l }),
      n.restore(),
      n.save(),
      cl(n, s, a.bottom)),
    ul(n, { line: e, target: s, color: r, scale: o, property: c, clip: l }),
    n.restore();
}
function cl(n, t, e) {
  const { segments: s, points: i } = t;
  let r = !0,
    a = !1;
  n.beginPath();
  for (const o of s) {
    const { start: l, end: c } = o,
      u = i[l],
      d = i[Na(l, c, i)];
    r ? (n.moveTo(u.x, u.y), (r = !1)) : (n.lineTo(u.x, e), n.lineTo(u.x, u.y)),
      (a = !!t.pathSegment(n, o, { move: a })),
      a ? n.closePath() : n.lineTo(d.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function ul(n, t) {
  const { line: e, target: s, property: i, color: r, scale: a, clip: o } = t,
    l = $m(e, s, i);
  for (const { source: c, target: u, start: d, end: h } of l) {
    const { style: { backgroundColor: p = r } = {} } = c,
      f = s !== !0;
    n.save(), (n.fillStyle = p), ub(n, a, o, f && Qr(i, d, h)), n.beginPath();
    const g = !!e.pathSegment(n, c);
    let m;
    if (f) {
      g ? n.closePath() : dl(n, s, h, i);
      const b = !!s.pathSegment(n, u, { move: g, reverse: !0 });
      (m = g && b), m || dl(n, s, d, i);
    }
    n.closePath(), n.fill(m ? 'evenodd' : 'nonzero'), n.restore();
  }
}
function ub(n, t, e, s) {
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
function dl(n, t, e, s) {
  const i = t.interpolate(e, s);
  i && n.lineTo(i.x, i.y);
}
var db = {
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
          o instanceof Ze &&
          (l = {
            visible: n.isDatasetVisible(a),
            index: a,
            fill: Qm(o, a, s),
            chart: n,
            axis: r.controller.options.indexAxis,
            scale: r.vScale,
            line: o,
          }),
        (r.$filler = l),
        i.push(l);
    for (a = 0; a < s; ++a)
      (l = i[a]), !(!l || l.fill === !1) && (l.fill = Xm(i, a, e.propagate));
  },
  beforeDraw(n, t, e) {
    const s = e.drawTime === 'beforeDraw',
      i = n.getSortedVisibleDatasetMetas(),
      r = n.chartArea;
    for (let a = i.length - 1; a >= 0; --a) {
      const o = i[a].$filler;
      o &&
        (o.line.updateControlPoints(r, o.axis), s && o.fill && Dr(n.ctx, o, r));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return;
    const s = n.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const r = s[i].$filler;
      ll(r) && Dr(n.ctx, r, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const s = t.meta.$filler;
    !ll(s) || e.drawTime !== 'beforeDatasetDraw' || Dr(n.ctx, s, n.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const hl = (n, t) => {
    let { boxHeight: e = t, boxWidth: s = t } = n;
    return (
      n.usePointStyle &&
        ((e = Math.min(e, t)), (s = n.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  hb = (n, t) =>
    n !== null &&
    t !== null &&
    n.datasetIndex === t.datasetIndex &&
    n.index === t.index;
class fl extends $e {
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
    let e = ht(t.generateLabels, [this.chart], this) || [];
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
      { boxWidth: o, itemHeight: l } = hl(s, r);
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
      p = -u;
    return (
      this.legendItems.forEach((f, g) => {
        const m = s + e / 2 + r.measureText(f.text).width;
        (g === 0 || c[c.length - 1] + m + 2 * o > a) &&
          ((d += u), (c[c.length - (g > 0 ? 0 : 1)] = 0), (p += u), h++),
          (l[g] = { left: 0, top: p, row: h, width: m, height: i }),
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
      p = 0,
      f = 0,
      g = 0;
    return (
      this.legendItems.forEach((m, b) => {
        const { itemWidth: v, itemHeight: x } = fb(s, e, r, m, i);
        b > 0 &&
          p + x + 2 * o > u &&
          ((d += h + o),
          c.push({ width: h, height: p }),
          (f += h + o),
          g++,
          (h = p = 0)),
          (l[b] = { left: f, top: p, col: g, width: v, height: x }),
          (h = Math.max(h, v)),
          (p += x + o);
      }),
      (d += h),
      c.push({ width: h, height: p }),
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
      a = zn(r, this.left, this.width);
    if (this.isHorizontal()) {
      let o = 0,
        l = Lt(s, this.left + i, this.right - this.lineWidths[o]);
      for (const c of e)
        o !== c.row &&
          ((o = c.row),
          (l = Lt(s, this.left + i, this.right - this.lineWidths[o]))),
          (c.top += this.top + t + i),
          (c.left = a.leftForLtr(a.x(l), c.width)),
          (l += c.width + i);
    } else {
      let o = 0,
        l = Lt(s, this.top + t + i, this.bottom - this.columnSizes[o].height);
      for (const c of e)
        c.col !== o &&
          ((o = c.col),
          (l = Lt(
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
      Zi(t, this), this._draw(), tr(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: i } = this,
      { align: r, labels: a } = t,
      o = _t.color,
      l = zn(t.rtl, this.left, this.width),
      c = Tt(a.font),
      { padding: u } = a,
      d = c.size,
      h = d / 2;
    let p;
    this.drawTitle(),
      (i.textAlign = l.textAlign('left')),
      (i.textBaseline = 'middle'),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: f, boxHeight: g, itemHeight: m } = hl(a, d),
      b = function (P, O, k) {
        if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
        i.save();
        const E = tt(k.lineWidth, 1);
        if (
          ((i.fillStyle = tt(k.fillStyle, o)),
          (i.lineCap = tt(k.lineCap, 'butt')),
          (i.lineDashOffset = tt(k.lineDashOffset, 0)),
          (i.lineJoin = tt(k.lineJoin, 'miter')),
          (i.lineWidth = E),
          (i.strokeStyle = tt(k.strokeStyle, o)),
          i.setLineDash(tt(k.lineDash, [])),
          a.usePointStyle)
        ) {
          const L = {
              radius: (g * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: E,
            },
            R = l.xPlus(P, f / 2),
            C = O + h;
          zc(i, L, R, C, a.pointStyleWidth && f);
        } else {
          const L = O + Math.max((d - g) / 2, 0),
            R = l.leftForLtr(P, f),
            C = xn(k.borderRadius);
          i.beginPath(),
            Object.values(C).some((H) => H !== 0)
              ? Ds(i, { x: R, y: L, w: f, h: g, radius: C })
              : i.rect(R, L, f, g),
            i.fill(),
            E !== 0 && i.stroke();
        }
        i.restore();
      },
      v = function (P, O, k) {
        Sn(i, k.text, P, O + m / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      x = this.isHorizontal(),
      w = this._computeTitleHeight();
    x
      ? (p = {
          x: Lt(r, this.left + u, this.right - s[0]),
          y: this.top + u + w,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: Lt(r, this.top + w + u, this.bottom - e[0].height),
          line: 0,
        }),
      Uc(this.ctx, t.textDirection);
    const y = m + u;
    this.legendItems.forEach((P, O) => {
      (i.strokeStyle = P.fontColor), (i.fillStyle = P.fontColor);
      const k = i.measureText(P.text).width,
        E = l.textAlign(P.textAlign || (P.textAlign = a.textAlign)),
        L = f + h + k;
      let R = p.x,
        C = p.y;
      l.setWidth(this.width),
        x
          ? O > 0 &&
            R + L + u > this.right &&
            ((C = p.y += y),
            p.line++,
            (R = p.x = Lt(r, this.left + u, this.right - s[p.line])))
          : O > 0 &&
            C + y > this.bottom &&
            ((R = p.x = R + e[p.line].width + u),
            p.line++,
            (C = p.y =
              Lt(r, this.top + w + u, this.bottom - e[p.line].height)));
      const H = l.x(R);
      if (
        (b(H, C, P),
        (R = Lf(E, R + f + h, x ? R + L : this.right, t.rtl)),
        v(l.x(R), C, P),
        x)
      )
        p.x += L + u;
      else if (typeof P.text != 'string') {
        const G = c.lineHeight;
        p.y += yu(P, G) + u;
      } else p.y += y;
    }),
      Xc(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      s = Tt(e.font),
      i = Nt(e.padding);
    if (!e.display) return;
    const r = zn(t.rtl, this.left, this.width),
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
        (d = Lt(t.align, d, this.right - h));
    else {
      const f = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      u =
        c +
        Lt(
          t.align,
          this.top,
          this.bottom - f - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const p = Lt(o, d, d + h);
    (a.textAlign = r.textAlign(Ta(o))),
      (a.textBaseline = 'middle'),
      (a.strokeStyle = e.color),
      (a.fillStyle = e.color),
      (a.font = s.string),
      Sn(a, e.text, p, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Tt(t.font),
      s = Nt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, i, r;
    if (We(t, this.left, this.right) && We(e, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
        if (
          ((i = r[s]),
          We(t, i.left, i.left + i.width) && We(e, i.top, i.top + i.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!mb(t.type, e)) return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const i = this._hoveredItem,
        r = hb(i, s);
      i && !r && ht(e.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !r && ht(e.onHover, [t, s, this], this);
    } else s && ht(e.onClick, [t, s, this], this);
  }
}
function fb(n, t, e, s, i) {
  const r = pb(s, n, t, e),
    a = gb(i, s, t.lineHeight);
  return { itemWidth: r, itemHeight: a };
}
function pb(n, t, e, s) {
  let i = n.text;
  return (
    i &&
      typeof i != 'string' &&
      (i = i.reduce((r, a) => (r.length > a.length ? r : a))),
    t + e.size / 2 + s.measureText(i).width
  );
}
function gb(n, t, e) {
  let s = n;
  return typeof t.text != 'string' && (s = yu(t, e)), s;
}
function yu(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function mb(n, t) {
  return !!(
    ((n === 'mousemove' || n === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (n === 'click' || n === 'mouseup'))
  );
}
var bb = {
  id: 'legend',
  _element: fl,
  start(n, t, e) {
    const s = (n.legend = new fl({ ctx: n.ctx, options: e, chart: n }));
    It.configure(n, s, e), It.addBox(n, s);
  },
  stop(n) {
    It.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const s = n.legend;
    It.configure(n, s, e), (s.options = e);
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
            u = Nt(c.borderWidth);
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
class Ba extends $e {
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
    const i = bt(s.text) ? s.text.length : 1;
    this._padding = Nt(s.padding);
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
        ? ((u = Lt(o, s, r)), (d = e + t), (c = r - s))
        : (a.position === 'left'
            ? ((u = s + t), (d = Lt(o, i, e)), (l = gt * -0.5))
            : ((u = r - t), (d = Lt(o, e, i)), (l = gt * 0.5)),
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
    Sn(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ta(e.align),
      textBaseline: 'middle',
      translation: [a, o],
    });
  }
}
function _b(n, t) {
  const e = new Ba({ ctx: n.ctx, options: t, chart: n });
  It.configure(n, e, t), It.addBox(n, e), (n.titleBlock = e);
}
var vb = {
  id: 'title',
  _element: Ba,
  start(n, t, e) {
    _b(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    It.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const s = n.titleBlock;
    It.configure(n, s, e), (s.options = e);
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
const si = new WeakMap();
var yb = {
  id: 'subtitle',
  start(n, t, e) {
    const s = new Ba({ ctx: n.ctx, options: e, chart: n });
    It.configure(n, s, e), It.addBox(n, s), si.set(n, s);
  },
  stop(n) {
    It.removeBox(n, si.get(n)), si.delete(n);
  },
  beforeUpdate(n, t, e) {
    const s = si.get(n);
    It.configure(n, s, e), (s.options = e);
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
const ds = {
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
          u = Hr(t, c);
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
function ke(n, t) {
  return t && (bt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Be(n) {
  return (typeof n == 'string' || n instanceof String) &&
    n.indexOf(`
`) > -1
    ? n.split(`
`)
    : n;
}
function xb(n, t) {
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
function pl(n, t) {
  const e = n.chart.ctx,
    { body: s, footer: i, title: r } = n,
    { boxWidth: a, boxHeight: o } = t,
    l = Tt(t.bodyFont),
    c = Tt(t.titleFont),
    u = Tt(t.footerFont),
    d = r.length,
    h = i.length,
    p = s.length,
    f = Nt(t.padding);
  let g = f.height,
    m = 0,
    b = s.reduce(
      (w, y) => w + y.before.length + y.lines.length + y.after.length,
      0,
    );
  if (
    ((b += n.beforeBody.length + n.afterBody.length),
    d &&
      (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const w = t.displayColors ? Math.max(o, l.lineHeight) : l.lineHeight;
    g += p * w + (b - p) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  h && (g += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
  let v = 0;
  const x = function (w) {
    m = Math.max(m, e.measureText(w).width + v);
  };
  return (
    e.save(),
    (e.font = c.string),
    ct(n.title, x),
    (e.font = l.string),
    ct(n.beforeBody.concat(n.afterBody), x),
    (v = t.displayColors ? a + 2 + t.boxPadding : 0),
    ct(s, (w) => {
      ct(w.before, x), ct(w.lines, x), ct(w.after, x);
    }),
    (v = 0),
    (e.font = u.string),
    ct(n.footer, x),
    e.restore(),
    (m += f.width),
    { width: m, height: g }
  );
}
function wb(n, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? 'top' : e > n.height - s / 2 ? 'bottom' : 'center';
}
function kb(n, t, e, s) {
  const { x: i, width: r } = s,
    a = e.caretSize + e.caretPadding;
  if ((n === 'left' && i + r + a > t.width) || (n === 'right' && i - r - a < 0))
    return !0;
}
function Mb(n, t, e, s) {
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
    kb(c, n, t, e) && (c = 'center'),
    c
  );
}
function gl(n, t, e) {
  const s = e.yAlign || t.yAlign || wb(n, e);
  return { xAlign: e.xAlign || t.xAlign || Mb(n, t, e, s), yAlign: s };
}
function Sb(n, t) {
  let { x: e, width: s } = n;
  return t === 'right' ? (e -= s) : t === 'center' && (e -= s / 2), e;
}
function Pb(n, t, e) {
  let { y: s, height: i } = n;
  return (
    t === 'top' ? (s += e) : t === 'bottom' ? (s -= i + e) : (s -= i / 2), s
  );
}
function ml(n, t, e, s) {
  const { caretSize: i, caretPadding: r, cornerRadius: a } = n,
    { xAlign: o, yAlign: l } = e,
    c = i + r,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = xn(a);
  let f = Sb(t, o);
  const g = Pb(t, l, c);
  return (
    l === 'center'
      ? o === 'left'
        ? (f += c)
        : o === 'right' && (f -= c)
      : o === 'left'
        ? (f -= Math.max(u, h) + i)
        : o === 'right' && (f += Math.max(d, p) + i),
    { x: Et(f, 0, s.width - t.width), y: Et(g, 0, s.height - t.height) }
  );
}
function ii(n, t, e) {
  const s = Nt(e.padding);
  return t === 'center'
    ? n.x + n.width / 2
    : t === 'right'
      ? n.x + n.width - s.right
      : n.x + s.left;
}
function bl(n) {
  return ke([], Be(n));
}
function Db(n, t, e) {
  return ln(n, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function _l(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const xu = {
  beforeTitle: Ie,
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
  afterTitle: Ie,
  beforeBody: Ie,
  beforeLabel: Ie,
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
  afterLabel: Ie,
  afterBody: Ie,
  beforeFooter: Ie,
  footer: Ie,
  afterFooter: Ie,
};
function jt(n, t, e, s) {
  const i = n[t].call(e, s);
  return typeof i > 'u' ? xu[t].call(e, s) : i;
}
class Gr extends $e {
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
      r = new Zc(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = Db(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, e) {
    const { callbacks: s } = e,
      i = jt(s, 'beforeTitle', this, t),
      r = jt(s, 'title', this, t),
      a = jt(s, 'afterTitle', this, t);
    let o = [];
    return (o = ke(o, Be(i))), (o = ke(o, Be(r))), (o = ke(o, Be(a))), o;
  }
  getBeforeBody(t, e) {
    return bl(jt(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e,
      i = [];
    return (
      ct(t, (r) => {
        const a = { before: [], lines: [], after: [] },
          o = _l(s, r);
        ke(a.before, Be(jt(o, 'beforeLabel', this, r))),
          ke(a.lines, jt(o, 'label', this, r)),
          ke(a.after, Be(jt(o, 'afterLabel', this, r))),
          i.push(a);
      }),
      i
    );
  }
  getAfterBody(t, e) {
    return bl(jt(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e,
      i = jt(s, 'beforeFooter', this, t),
      r = jt(s, 'footer', this, t),
      a = jt(s, 'afterFooter', this, t);
    let o = [];
    return (o = ke(o, Be(i))), (o = ke(o, Be(r))), (o = ke(o, Be(a))), o;
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
    for (l = 0, c = e.length; l < c; ++l) o.push(xb(this.chart, e[l]));
    return (
      t.filter && (o = o.filter((u, d, h) => t.filter(u, d, h, s))),
      t.itemSort && (o = o.sort((u, d) => t.itemSort(u, d, s))),
      ct(o, (u) => {
        const d = _l(t.callbacks, u);
        i.push(jt(d, 'labelColor', this, u)),
          r.push(jt(d, 'labelPointStyle', this, u)),
          a.push(jt(d, 'labelTextColor', this, u));
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
      const o = ds[s.position].call(this, i, this._eventPosition);
      (a = this._createItems(s)),
        (this.title = this.getTitle(a, s)),
        (this.beforeBody = this.getBeforeBody(a, s)),
        (this.body = this.getBody(a, s)),
        (this.afterBody = this.getAfterBody(a, s)),
        (this.footer = this.getFooter(a, s));
      const l = (this._size = pl(this, s)),
        c = Object.assign({}, o, l),
        u = gl(this.chart, s, c),
        d = ml(s, c, u, this.chart);
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
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = xn(o),
      { x: h, y: p } = t,
      { width: f, height: g } = e;
    let m, b, v, x, w, y;
    return (
      r === 'center'
        ? ((w = p + g / 2),
          i === 'left'
            ? ((m = h), (b = m - a), (x = w + a), (y = w - a))
            : ((m = h + f), (b = m + a), (x = w - a), (y = w + a)),
          (v = m))
        : (i === 'left'
            ? (b = h + Math.max(l, u) + a)
            : i === 'right'
              ? (b = h + f - Math.max(c, d) - a)
              : (b = this.caretX),
          r === 'top'
            ? ((x = p), (w = x - a), (m = b - a), (v = b + a))
            : ((x = p + g), (w = x + a), (m = b + a), (v = b - a)),
          (y = x)),
      { x1: m, x2: b, x3: v, y1: x, y2: w, y3: y }
    );
  }
  drawTitle(t, e, s) {
    const i = this.title,
      r = i.length;
    let a, o, l;
    if (r) {
      const c = zn(s.rtl, this.x, this.width);
      for (
        t.x = ii(this, s.titleAlign, s),
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
      d = ii(this, 'left', r),
      h = i.x(d),
      p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
      f = e.y + p;
    if (r.usePointStyle) {
      const g = {
          radius: Math.min(c, l) / 2,
          pointStyle: o.pointStyle,
          rotation: o.rotation,
          borderWidth: 1,
        },
        m = i.leftForLtr(h, c) + c / 2,
        b = f + l / 2;
      (t.strokeStyle = r.multiKeyBackground),
        (t.fillStyle = r.multiKeyBackground),
        Vr(t, g, m, b),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        Vr(t, g, m, b);
    } else {
      (t.lineWidth = nt(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const g = i.leftForLtr(h, c),
        m = i.leftForLtr(i.xPlus(h, 1), c - 2),
        b = xn(a.borderRadius);
      Object.values(b).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = r.multiKeyBackground),
          Ds(t, { x: g, y: f, w: c, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          Ds(t, { x: m, y: f + 1, w: c - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = r.multiKeyBackground),
          t.fillRect(g, f, c, l),
          t.strokeRect(g, f, c, l),
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
      p = 0;
    const f = zn(s.rtl, this.x, this.width),
      g = function (k) {
        e.fillText(k, f.x(t.x + p), t.y + h / 2), (t.y += h + r);
      },
      m = f.textAlign(a);
    let b, v, x, w, y, P, O;
    for (
      e.textAlign = a,
        e.textBaseline = 'middle',
        e.font = d.string,
        t.x = ii(this, m, s),
        e.fillStyle = s.bodyColor,
        ct(this.beforeBody, g),
        p = o && m !== 'right' ? (a === 'center' ? c / 2 + u : c + 2 + u) : 0,
        w = 0,
        P = i.length;
      w < P;
      ++w
    ) {
      for (
        b = i[w],
          v = this.labelTextColors[w],
          e.fillStyle = v,
          ct(b.before, g),
          x = b.lines,
          o &&
            x.length &&
            (this._drawColorBox(e, t, w, f, s),
            (h = Math.max(d.lineHeight, l))),
          y = 0,
          O = x.length;
        y < O;
        ++y
      )
        g(x[y]), (h = d.lineHeight);
      ct(b.after, g);
    }
    (p = 0), (h = d.lineHeight), ct(this.afterBody, g), (t.y -= r);
  }
  drawFooter(t, e, s) {
    const i = this.footer,
      r = i.length;
    let a, o;
    if (r) {
      const l = zn(s.rtl, this.x, this.width);
      for (
        t.x = ii(this, s.footerAlign, s),
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
        bottomLeft: p,
        bottomRight: f,
      } = xn(i.cornerRadius);
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
      e.lineTo(o + p, l + u),
      e.quadraticCurveTo(o, l + u, o, l + u - p),
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
      const a = ds[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      const o = (this._size = pl(this, t)),
        l = Object.assign({}, a, this._size),
        c = gl(e, t, l),
        u = ml(t, l, c, e);
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
    const a = Nt(e.padding),
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
      Uc(t, e.textDirection),
      (r.y += a.top),
      this.drawTitle(r, t, e),
      this.drawBody(r, t, e),
      this.drawFooter(r, t, e),
      Xc(t, e.textDirection),
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
      r = !Ei(s, i),
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
      l = e || !Ei(a, r) || o;
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
      a = ds[r.position].call(this, t, e);
    return a !== !1 && (s !== a.x || i !== a.y);
  }
}
S(Gr, 'positioners', ds);
var Tb = {
    id: 'tooltip',
    _element: Gr,
    positioners: ds,
    afterInit(n, t, e) {
      e && (n.tooltip = new Gr({ chart: n, options: e }));
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
      callbacks: xu,
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
  Ob = Object.freeze({
    __proto__: null,
    Colors: Hm,
    Decimation: qm,
    Filler: db,
    Legend: bb,
    SubTitle: yb,
    Title: vb,
    Tooltip: Tb,
  });
const Eb = (n, t, e, s) => (
  typeof t == 'string'
    ? ((e = n.push(t) - 1), s.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function Cb(n, t, e, s) {
  const i = n.indexOf(t);
  if (i === -1) return Eb(n, t, e, s);
  const r = n.lastIndexOf(t);
  return i !== r ? e : i;
}
const Ab = (n, t) => (n === null ? null : Et(Math.round(n), 0, t));
function vl(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Kr extends Tn {
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
        isFinite(e) && s[e] === t ? e : Cb(s, t, tt(e, t), this._addedLabels)),
      Ab(e, s.length - 1)
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
    return vl.call(this, t);
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
S(Kr, 'id', 'category'), S(Kr, 'defaults', { ticks: { callback: vl } });
function Rb(n, t) {
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
    p = r || 1,
    f = u - 1,
    { min: g, max: m } = t,
    b = !et(a),
    v = !et(o),
    x = !et(c),
    w = (m - g) / (d + 1);
  let y = po((m - g) / f / p) * p,
    P,
    O,
    k,
    E;
  if (y < 1e-14 && !b && !v) return [{ value: g }, { value: m }];
  (E = Math.ceil(m / y) - Math.floor(g / y)),
    E > f && (y = po((E * y) / f / p) * p),
    et(l) || ((P = Math.pow(10, l)), (y = Math.ceil(y * P) / P)),
    i === 'ticks'
      ? ((O = Math.floor(g / y) * y), (k = Math.ceil(m / y) * y))
      : ((O = g), (k = m)),
    b && v && r && Df((o - a) / r, y / 1e3)
      ? ((E = Math.round(Math.min((o - a) / y, u))),
        (y = (o - a) / E),
        (O = a),
        (k = o))
      : x
        ? ((O = b ? a : O), (k = v ? o : k), (E = c - 1), (y = (k - O) / E))
        : ((E = (k - O) / y),
          gs(E, Math.round(E), y / 1e3)
            ? (E = Math.round(E))
            : (E = Math.ceil(E)));
  const L = Math.max(go(y), go(O));
  (P = Math.pow(10, et(l) ? L : l)),
    (O = Math.round(O * P) / P),
    (k = Math.round(k * P) / P);
  let R = 0;
  for (
    b &&
    (h && O !== a
      ? (e.push({ value: a }),
        O < a && R++,
        gs(Math.round((O + R * y) * P) / P, a, yl(a, w, n)) && R++)
      : O < a && R++);
    R < E;
    ++R
  ) {
    const C = Math.round((O + R * y) * P) / P;
    if (v && C > o) break;
    e.push({ value: C });
  }
  return (
    v && h && k !== o
      ? e.length && gs(e[e.length - 1].value, o, yl(o, w, n))
        ? (e[e.length - 1].value = o)
        : e.push({ value: o })
      : (!v || k === o) && e.push({ value: k }),
    e
  );
}
function yl(n, t, { horizontal: e, minRotation: s }) {
  const i = fe(s),
    r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
    a = 0.75 * t * ('' + n).length;
  return Math.min(t / r, a);
}
class Ni extends Tn {
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
      const l = Oe(i),
        c = Oe(r);
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
      a = Rb(i, r);
    return (
      t.bounds === 'ticks' && Ec(a, this, 'value'),
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
    return Is(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Jr extends Ni {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = xt(t) ? t : 0),
      (this.max = xt(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      s = fe(this.options.ticks.minRotation),
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
S(Jr, 'id', 'linear'),
  S(Jr, 'defaults', { ticks: { callback: Ji.formatters.numeric } });
const Os = (n) => Math.floor(Je(n)),
  pn = (n, t) => Math.pow(10, Os(n) + t);
function xl(n) {
  return n / Math.pow(10, Os(n)) === 1;
}
function wl(n, t, e) {
  const s = Math.pow(10, e),
    i = Math.floor(n / s);
  return Math.ceil(t / s) - i;
}
function Lb(n, t) {
  const e = t - n;
  let s = Os(e);
  for (; wl(n, t, s) > 10; ) s++;
  for (; wl(n, t, s) < 10; ) s--;
  return Math.min(s, Os(n));
}
function Fb(n, { min: t, max: e }) {
  t = Zt(n.min, t);
  const s = [],
    i = Os(t);
  let r = Lb(t, e),
    a = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const o = Math.pow(10, r),
    l = i > r ? Math.pow(10, i) : 0,
    c = Math.round((t - l) * a) / a,
    u = Math.floor((t - l) / o / 10) * o * 10;
  let d = Math.floor((c - u) / Math.pow(10, r)),
    h = Zt(n.min, Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  for (; h < e; )
    s.push({ value: h, major: xl(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (r++, (d = 2), (a = r >= 0 ? 1 : a)),
      (h = Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  const p = Zt(n.max, h);
  return s.push({ value: p, major: xl(p), significand: d }), s;
}
class Zr extends Tn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const s = Ni.prototype.parse.apply(this, [t, e]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return xt(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = xt(t) ? Math.max(0, t) : null),
      (this.max = xt(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !xt(this._userMin) &&
        (this.min = t === pn(this.min, 0) ? pn(this.min, -1) : pn(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min,
      i = this.max;
    const r = (o) => (s = t ? s : o),
      a = (o) => (i = e ? i : o);
    s === i && (s <= 0 ? (r(1), a(10)) : (r(pn(s, -1)), a(pn(i, 1)))),
      s <= 0 && r(pn(i, -1)),
      i <= 0 && a(pn(s, 1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      s = Fb(e, this);
    return (
      t.bounds === 'ticks' && Ec(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? '0'
      : Is(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Je(t)),
      (this._valueRange = Je(this.max) - Je(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Je(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
S(Zr, 'id', 'logarithmic'),
  S(Zr, 'defaults', {
    ticks: { callback: Ji.formatters.logarithmic, major: { enabled: !0 } },
  });
function ta(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Nt(t.backdropPadding);
    return tt(t.font && t.font.size, _t.font.size) + e.height;
  }
  return 0;
}
function Ib(n, t, e) {
  return (
    (e = bt(e) ? e : [e]), { w: Yf(n, t.string, e), h: e.length * t.lineHeight }
  );
}
function kl(n, t, e, s, i) {
  return n === s || n === i
    ? { start: t - e / 2, end: t + e / 2 }
    : n < s || n > i
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
}
function Nb(n) {
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
    o = a.centerPointLabels ? gt / r : 0;
  for (let l = 0; l < r; l++) {
    const c = a.setContext(n.getPointLabelContext(l));
    i[l] = c.padding;
    const u = n.getPointPosition(l, n.drawingArea + i[l], o),
      d = Tt(c.font),
      h = Ib(n.ctx, d, n._pointLabels[l]);
    s[l] = h;
    const p = te(n.getIndexAngle(l) + o),
      f = Math.round(Pa(p)),
      g = kl(f, u.x, h.w, 0, 180),
      m = kl(f, u.y, h.h, 90, 270);
    Bb(e, t, p, g, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (n._pointLabelItems = Hb(n, s, i));
}
function Bb(n, t, e, s, i) {
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
function zb(n, t, e) {
  const s = n.drawingArea,
    { extra: i, additionalAngle: r, padding: a, size: o } = e,
    l = n.getPointPosition(t, s + i + a, r),
    c = Math.round(Pa(te(l.angle + Mt))),
    u = Yb(l.y, o.h, c),
    d = jb(c),
    h = Vb(l.x, o.w, d);
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
function Wb(n, t) {
  if (!t) return !0;
  const { left: e, top: s, right: i, bottom: r } = n;
  return !(
    je({ x: e, y: s }, t) ||
    je({ x: e, y: r }, t) ||
    je({ x: i, y: s }, t) ||
    je({ x: i, y: r }, t)
  );
}
function Hb(n, t, e) {
  const s = [],
    i = n._pointLabels.length,
    r = n.options,
    { centerPointLabels: a, display: o } = r.pointLabels,
    l = { extra: ta(r) / 2, additionalAngle: a ? gt / i : 0 };
  let c;
  for (let u = 0; u < i; u++) {
    (l.padding = e[u]), (l.size = t[u]);
    const d = zb(n, u, l);
    s.push(d), o === 'auto' && ((d.visible = Wb(d, c)), d.visible && (c = d));
  }
  return s;
}
function jb(n) {
  return n === 0 || n === 180 ? 'center' : n < 180 ? 'left' : 'right';
}
function Vb(n, t, e) {
  return e === 'right' ? (n -= t) : e === 'center' && (n -= t / 2), n;
}
function Yb(n, t, e) {
  return (
    e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n
  );
}
function qb(n, t, e) {
  const { left: s, top: i, right: r, bottom: a } = e,
    { backdropColor: o } = t;
  if (!et(o)) {
    const l = xn(t.borderRadius),
      c = Nt(t.backdropPadding);
    n.fillStyle = o;
    const u = s - c.left,
      d = i - c.top,
      h = r - s + c.width,
      p = a - i + c.height;
    Object.values(l).some((f) => f !== 0)
      ? (n.beginPath(), Ds(n, { x: u, y: d, w: h, h: p, radius: l }), n.fill())
      : n.fillRect(u, d, h, p);
  }
}
function $b(n, t) {
  const {
    ctx: e,
    options: { pointLabels: s },
  } = n;
  for (let i = t - 1; i >= 0; i--) {
    const r = n._pointLabelItems[i];
    if (!r.visible) continue;
    const a = s.setContext(n.getPointLabelContext(i));
    qb(e, a, r);
    const o = Tt(a.font),
      { x: l, y: c, textAlign: u } = r;
    Sn(e, n._pointLabels[i], l, c + o.lineHeight / 2, o, {
      color: a.color,
      textAlign: u,
      textBaseline: 'middle',
    });
  }
}
function wu(n, t, e, s) {
  const { ctx: i } = n;
  if (e) i.arc(n.xCenter, n.yCenter, t, 0, pt);
  else {
    let r = n.getPointPosition(0, t);
    i.moveTo(r.x, r.y);
    for (let a = 1; a < s; a++)
      (r = n.getPointPosition(a, t)), i.lineTo(r.x, r.y);
  }
}
function Ub(n, t, e, s, i) {
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
    wu(n, e, a, s),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function Xb(n, t, e) {
  return ln(n, { label: e, index: t, type: 'pointLabel' });
}
class hs extends Ni {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Nt(ta(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      s = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, s) / 2));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    (this.min = xt(t) && !isNaN(t) ? t : 0),
      (this.max = xt(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ta(this.options));
  }
  generateTickLabels(t) {
    Ni.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, s) => {
          const i = ht(this.options.pointLabels.callback, [e, s], this);
          return i || i === 0 ? i : '';
        })
        .filter((e, s) => this.chart.getDataVisibility(s)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? Nb(this)
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
    const e = pt / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0;
    return te(t * e + fe(s));
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
      return Xb(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const i = this.getIndexAngle(t) - Mt + s;
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
        wu(
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
      (e.pointLabels.display && $b(this, a),
      i.display &&
        this.ticks.forEach((u, d) => {
          if (d !== 0 || (d === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(u.value);
            const h = this.getContext(d),
              p = i.setContext(h),
              f = r.setContext(h);
            Ub(this, p, l, a, f);
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
          const d = Nt(c.backdropPadding);
          t.fillRect(
            -a / 2 - d.left,
            -r - u.size / 2 - d.top,
            a + d.width,
            u.size + d.height,
          );
        }
        Sn(t, o.label, 0, -r, u, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
S(hs, 'id', 'radialLinear'),
  S(hs, 'defaults', {
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
    ticks: { showLabelBackdrop: !0, callback: Ji.formatters.numeric },
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
  S(hs, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  S(hs, 'descriptors', { angleLines: { _fallback: 'grid' } });
const sr = {
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
  qt = Object.keys(sr);
function Ml(n, t) {
  return n - t;
}
function Sl(n, t) {
  if (et(t)) return null;
  const e = n._adapter,
    { parser: s, round: i, isoWeekday: r } = n._parseOpts;
  let a = t;
  return (
    typeof s == 'function' && (a = s(a)),
    xt(a) || (a = typeof s == 'string' ? e.parse(a, s) : e.parse(a)),
    a === null
      ? null
      : (i &&
          (a =
            i === 'week' && (Hn(r) || r === !0)
              ? e.startOf(a, 'isoWeek', r)
              : e.startOf(a, i)),
        +a)
  );
}
function Pl(n, t, e, s) {
  const i = qt.length;
  for (let r = qt.indexOf(n); r < i - 1; ++r) {
    const a = sr[qt[r]],
      o = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (o * a.size)) <= s) return qt[r];
  }
  return qt[i - 1];
}
function Qb(n, t, e, s, i) {
  for (let r = qt.length - 1; r >= qt.indexOf(e); r--) {
    const a = qt[r];
    if (sr[a].common && n._adapter.diff(i, s, a) >= t - 1) return a;
  }
  return qt[e ? qt.indexOf(e) : 0];
}
function Gb(n) {
  for (let t = qt.indexOf(n) + 1, e = qt.length; t < e; ++t)
    if (sr[qt[t]].common) return qt[t];
}
function Dl(n, t, e) {
  if (!e) n[t] = !0;
  else if (e.length) {
    const { lo: s, hi: i } = Da(e, t),
      r = e[s] >= t ? e[s] : e[i];
    n[r] = !0;
  }
}
function Kb(n, t, e, s) {
  const i = n._adapter,
    r = +i.startOf(t[0].value, s),
    a = t[t.length - 1].value;
  let o, l;
  for (o = r; o <= a; o = +i.add(o, 1, s))
    (l = e[o]), l >= 0 && (t[l].major = !0);
  return t;
}
function Tl(n, t, e) {
  const s = [],
    i = {},
    r = t.length;
  let a, o;
  for (a = 0; a < r; ++a)
    (o = t[a]), (i[o] = a), s.push({ value: o, major: !1 });
  return r === 0 || !e ? s : Kb(n, s, i, e);
}
class Es extends Tn {
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
      i = (this._adapter = new nu._date(t.adapters.date));
    i.init(e),
      ps(s.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(t),
      (this._normalized = e.normalized);
  }
  parse(t, e) {
    return t === void 0 ? null : Sl(this, t);
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
      (i = xt(i) && !isNaN(i) ? i : +e.startOf(Date.now(), s)),
      (r = xt(r) && !isNaN(r) ? r : +e.endOf(Date.now(), s) + 1),
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
      o = Cf(i, r, a);
    return (
      (this._unit =
        e.unit ||
        (s.autoSkip
          ? Pl(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : Qb(this, o.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : Gb(this._unit)),
      this.initOffsets(i),
      t.reverse && o.reverse(),
      Tl(this, o, this._majorUnit)
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
    (e = Et(e, 0, a)),
      (s = Et(s, 0, a)),
      (this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      s = this.max,
      i = this.options,
      r = i.time,
      a = r.unit || Pl(r.minUnit, e, s, this._getLabelCapacity(e)),
      o = tt(i.ticks.stepSize, 1),
      l = a === 'week' ? r.isoWeekday : !1,
      c = Hn(l) || l === !0,
      u = {};
    let d = e,
      h,
      p;
    if (
      (c && (d = +t.startOf(d, 'isoWeek', l)),
      (d = +t.startOf(d, c ? 'day' : a)),
      t.diff(s, e, a) > 1e5 * o)
    )
      throw new Error(
        e + ' and ' + s + ' are too far apart with stepSize of ' + o + ' ' + a,
      );
    const f = i.ticks.source === 'data' && this.getDataTimestamps();
    for (h = d, p = 0; h < s; h = +t.add(h, o, a), p++) Dl(u, h, f);
    return (
      (h === s || i.bounds === 'ticks' || p === 1) && Dl(u, h, f),
      Object.keys(u)
        .sort(Ml)
        .map((g) => +g)
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
    if (a) return ht(a, [t, e, s], this);
    const o = r.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      u = l && o[l],
      d = c && o[c],
      h = s[e],
      p = c && d && h && h.major;
    return this._adapter.format(t, i || (p ? d : u));
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
      i = fe(this.isHorizontal() ? e.maxRotation : e.minRotation),
      r = Math.cos(i),
      a = Math.sin(i),
      o = this._resolveTickFontOptions(0).size;
    return { w: s * r + o * a, h: s * a + o * r };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      s = e.displayFormats,
      i = s[e.unit] || s.millisecond,
      r = this._tickFormatFunction(t, 0, Tl(this, [t], this._majorUnit), i),
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
    for (e = 0, s = i.length; e < s; ++e) t.push(Sl(this, i[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Rc(t.sort(Ml));
  }
}
S(Es, 'id', 'time'),
  S(Es, 'defaults', {
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
function ri(n, t, e) {
  let s = 0,
    i = n.length - 1,
    r,
    a,
    o,
    l;
  e
    ? (t >= n[s].pos && t <= n[i].pos && ({ lo: s, hi: i } = He(n, 'pos', t)),
      ({ pos: r, time: o } = n[s]),
      ({ pos: a, time: l } = n[i]))
    : (t >= n[s].time &&
        t <= n[i].time &&
        ({ lo: s, hi: i } = He(n, 'time', t)),
      ({ time: r, pos: o } = n[s]),
      ({ time: a, pos: l } = n[i]));
  const c = a - r;
  return c ? o + ((l - o) * (t - r)) / c : o;
}
class ea extends Es {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = ri(e, this.min)),
      (this._tableRange = ri(e, this.max) - this._minPos),
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
    return (ri(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return ri(this._table, s * this._tableRange + this._minPos, !0);
  }
}
S(ea, 'id', 'timeseries'), S(ea, 'defaults', Es.defaults);
var Jb = Object.freeze({
  __proto__: null,
  CategoryScale: Kr,
  LinearScale: Jr,
  LogarithmicScale: Zr,
  RadialLinearScale: hs,
  TimeScale: Es,
  TimeSeriesScale: ea,
});
const Zb = [ag, Lm, Ob, Jb];
Yt.register(...Zb);
function ku(n, t) {
  return function () {
    return n.apply(t, arguments);
  };
}
const { toString: t_ } = Object.prototype,
  { getPrototypeOf: za } = Object,
  { iterator: ir, toStringTag: Mu } = Symbol,
  rr = ((n) => (t) => {
    const e = t_.call(t);
    return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ve = (n) => ((n = n.toLowerCase()), (t) => rr(t) === n),
  ar = (n) => (t) => typeof t === n,
  { isArray: Qn } = Array,
  Cs = ar('undefined');
function e_(n) {
  return (
    n !== null &&
    !Cs(n) &&
    n.constructor !== null &&
    !Cs(n.constructor) &&
    $t(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const Su = ve('ArrayBuffer');
function n_(n) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(n))
      : (t = n && n.buffer && Su(n.buffer)),
    t
  );
}
const s_ = ar('string'),
  $t = ar('function'),
  Pu = ar('number'),
  or = (n) => n !== null && typeof n == 'object',
  i_ = (n) => n === !0 || n === !1,
  vi = (n) => {
    if (rr(n) !== 'object') return !1;
    const t = za(n);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Mu in n) &&
      !(ir in n)
    );
  },
  r_ = ve('Date'),
  a_ = ve('File'),
  o_ = ve('Blob'),
  l_ = ve('FileList'),
  c_ = (n) => or(n) && $t(n.pipe),
  u_ = (n) => {
    let t;
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        ($t(n.append) &&
          ((t = rr(n)) === 'formdata' ||
            (t === 'object' &&
              $t(n.toString) &&
              n.toString() === '[object FormData]'))))
    );
  },
  d_ = ve('URLSearchParams'),
  [h_, f_, p_, g_] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    ve,
  ),
  m_ = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Ns(n, t, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > 'u') return;
  let s, i;
  if ((typeof n != 'object' && (n = [n]), Qn(n)))
    for (s = 0, i = n.length; s < i; s++) t.call(null, n[s], s, n);
  else {
    const r = e ? Object.getOwnPropertyNames(n) : Object.keys(n),
      a = r.length;
    let o;
    for (s = 0; s < a; s++) (o = r[s]), t.call(null, n[o], o, n);
  }
}
function Du(n, t) {
  t = t.toLowerCase();
  const e = Object.keys(n);
  let s = e.length,
    i;
  for (; s-- > 0; ) if (((i = e[s]), t === i.toLowerCase())) return i;
  return null;
}
const vn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Tu = (n) => !Cs(n) && n !== vn;
function na() {
  const { caseless: n } = (Tu(this) && this) || {},
    t = {},
    e = (s, i) => {
      const r = (n && Du(t, i)) || i;
      vi(t[r]) && vi(s)
        ? (t[r] = na(t[r], s))
        : vi(s)
          ? (t[r] = na({}, s))
          : Qn(s)
            ? (t[r] = s.slice())
            : (t[r] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Ns(arguments[s], e);
  return t;
}
const b_ = (n, t, e, { allOwnKeys: s } = {}) => (
    Ns(
      t,
      (i, r) => {
        e && $t(i) ? (n[r] = ku(i, e)) : (n[r] = i);
      },
      { allOwnKeys: s },
    ),
    n
  ),
  __ = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  v_ = (n, t, e, s) => {
    (n.prototype = Object.create(t.prototype, s)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, 'super', { value: t.prototype }),
      e && Object.assign(n.prototype, e);
  },
  y_ = (n, t, e, s) => {
    let i, r, a;
    const o = {};
    if (((t = t || {}), n == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(n), r = i.length; r-- > 0; )
        (a = i[r]), (!s || s(a, n, t)) && !o[a] && ((t[a] = n[a]), (o[a] = !0));
      n = e !== !1 && za(n);
    } while (n && (!e || e(n, t)) && n !== Object.prototype);
    return t;
  },
  x_ = (n, t, e) => {
    (n = String(n)),
      (e === void 0 || e > n.length) && (e = n.length),
      (e -= t.length);
    const s = n.indexOf(t, e);
    return s !== -1 && s === e;
  },
  w_ = (n) => {
    if (!n) return null;
    if (Qn(n)) return n;
    let t = n.length;
    if (!Pu(t)) return null;
    const e = new Array(t);
    for (; t-- > 0; ) e[t] = n[t];
    return e;
  },
  k_ = (
    (n) => (t) =>
      n && t instanceof n
  )(typeof Uint8Array < 'u' && za(Uint8Array)),
  M_ = (n, t) => {
    const s = (n && n[ir]).call(n);
    let i;
    for (; (i = s.next()) && !i.done; ) {
      const r = i.value;
      t.call(n, r[0], r[1]);
    }
  },
  S_ = (n, t) => {
    let e;
    const s = [];
    for (; (e = n.exec(t)) !== null; ) s.push(e);
    return s;
  },
  P_ = ve('HTMLFormElement'),
  D_ = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, s, i) {
      return s.toUpperCase() + i;
    }),
  Ol = (
    ({ hasOwnProperty: n }) =>
    (t, e) =>
      n.call(t, e)
  )(Object.prototype),
  T_ = ve('RegExp'),
  Ou = (n, t) => {
    const e = Object.getOwnPropertyDescriptors(n),
      s = {};
    Ns(e, (i, r) => {
      let a;
      (a = t(i, r, n)) !== !1 && (s[r] = a || i);
    }),
      Object.defineProperties(n, s);
  },
  O_ = (n) => {
    Ou(n, (t, e) => {
      if ($t(n) && ['arguments', 'caller', 'callee'].indexOf(e) !== -1)
        return !1;
      const s = n[e];
      if ($t(s)) {
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
  E_ = (n, t) => {
    const e = {},
      s = (i) => {
        i.forEach((r) => {
          e[r] = !0;
        });
      };
    return Qn(n) ? s(n) : s(String(n).split(t)), e;
  },
  C_ = () => {},
  A_ = (n, t) => (n != null && Number.isFinite((n = +n)) ? n : t);
function R_(n) {
  return !!(n && $t(n.append) && n[Mu] === 'FormData' && n[ir]);
}
const L_ = (n) => {
    const t = new Array(10),
      e = (s, i) => {
        if (or(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            t[i] = s;
            const r = Qn(s) ? [] : {};
            return (
              Ns(s, (a, o) => {
                const l = e(a, i + 1);
                !Cs(l) && (r[o] = l);
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
  F_ = ve('AsyncFunction'),
  I_ = (n) => n && (or(n) || $t(n)) && $t(n.then) && $t(n.catch),
  Eu = ((n, t) =>
    n
      ? setImmediate
      : t
        ? ((e, s) => (
            vn.addEventListener(
              'message',
              ({ source: i, data: r }) => {
                i === vn && r === e && s.length && s.shift()();
              },
              !1,
            ),
            (i) => {
              s.push(i), vn.postMessage(e, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == 'function',
    $t(vn.postMessage),
  ),
  N_ =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(vn)
      : (typeof process < 'u' && process.nextTick) || Eu,
  B_ = (n) => n != null && $t(n[ir]),
  D = {
    isArray: Qn,
    isArrayBuffer: Su,
    isBuffer: e_,
    isFormData: u_,
    isArrayBufferView: n_,
    isString: s_,
    isNumber: Pu,
    isBoolean: i_,
    isObject: or,
    isPlainObject: vi,
    isReadableStream: h_,
    isRequest: f_,
    isResponse: p_,
    isHeaders: g_,
    isUndefined: Cs,
    isDate: r_,
    isFile: a_,
    isBlob: o_,
    isRegExp: T_,
    isFunction: $t,
    isStream: c_,
    isURLSearchParams: d_,
    isTypedArray: k_,
    isFileList: l_,
    forEach: Ns,
    merge: na,
    extend: b_,
    trim: m_,
    stripBOM: __,
    inherits: v_,
    toFlatObject: y_,
    kindOf: rr,
    kindOfTest: ve,
    endsWith: x_,
    toArray: w_,
    forEachEntry: M_,
    matchAll: S_,
    isHTMLForm: P_,
    hasOwnProperty: Ol,
    hasOwnProp: Ol,
    reduceDescriptors: Ou,
    freezeMethods: O_,
    toObjectSet: E_,
    toCamelCase: D_,
    noop: C_,
    toFiniteNumber: A_,
    findKey: Du,
    global: vn,
    isContextDefined: Tu,
    isSpecCompliantForm: R_,
    toJSONObject: L_,
    isAsyncFn: F_,
    isThenable: I_,
    setImmediate: Eu,
    asap: N_,
    isIterable: B_,
  };
function Z(n, t, e, s, i) {
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
D.inherits(Z, Error, {
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
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Cu = Z.prototype,
  Au = {};
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
  Au[n] = { value: n };
});
Object.defineProperties(Z, Au);
Object.defineProperty(Cu, 'isAxiosError', { value: !0 });
Z.from = (n, t, e, s, i, r) => {
  const a = Object.create(Cu);
  return (
    D.toFlatObject(
      n,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (o) => o !== 'isAxiosError',
    ),
    Z.call(a, n.message, t, e, s, i),
    (a.cause = n),
    (a.name = n.name),
    r && Object.assign(a, r),
    a
  );
};
const z_ = null;
function sa(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function Ru(n) {
  return D.endsWith(n, '[]') ? n.slice(0, -2) : n;
}
function El(n, t, e) {
  return n
    ? n
        .concat(t)
        .map(function (i, r) {
          return (i = Ru(i)), !e && r ? '[' + i + ']' : i;
        })
        .join(e ? '.' : '')
    : t;
}
function W_(n) {
  return D.isArray(n) && !n.some(sa);
}
const H_ = D.toFlatObject(D, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function lr(n, t, e) {
  if (!D.isObject(n)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (e = D.toFlatObject(
      e,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, m) {
        return !D.isUndefined(m[g]);
      },
    ));
  const s = e.metaTokens,
    i = e.visitor || u,
    r = e.dots,
    a = e.indexes,
    l = (e.Blob || (typeof Blob < 'u' && Blob)) && D.isSpecCompliantForm(t);
  if (!D.isFunction(i)) throw new TypeError('visitor must be a function');
  function c(f) {
    if (f === null) return '';
    if (D.isDate(f)) return f.toISOString();
    if (!l && D.isBlob(f))
      throw new Z('Blob is not supported. Use a Buffer instead.');
    return D.isArrayBuffer(f) || D.isTypedArray(f)
      ? l && typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function u(f, g, m) {
    let b = f;
    if (f && !m && typeof f == 'object') {
      if (D.endsWith(g, '{}'))
        (g = s ? g : g.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (D.isArray(f) && W_(f)) ||
        ((D.isFileList(f) || D.endsWith(g, '[]')) && (b = D.toArray(f)))
      )
        return (
          (g = Ru(g)),
          b.forEach(function (x, w) {
            !(D.isUndefined(x) || x === null) &&
              t.append(
                a === !0 ? El([g], w, r) : a === null ? g : g + '[]',
                c(x),
              );
          }),
          !1
        );
    }
    return sa(f) ? !0 : (t.append(El(m, g, r), c(f)), !1);
  }
  const d = [],
    h = Object.assign(H_, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: sa,
    });
  function p(f, g) {
    if (!D.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'));
      d.push(f),
        D.forEach(f, function (b, v) {
          (!(D.isUndefined(b) || b === null) &&
            i.call(t, b, D.isString(v) ? v.trim() : v, g, h)) === !0 &&
            p(b, g ? g.concat(v) : [v]);
        }),
        d.pop();
    }
  }
  if (!D.isObject(n)) throw new TypeError('data must be an object');
  return p(n), t;
}
function Cl(n) {
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
function Wa(n, t) {
  (this._pairs = []), n && lr(n, this, t);
}
const Lu = Wa.prototype;
Lu.append = function (t, e) {
  this._pairs.push([t, e]);
};
Lu.toString = function (t) {
  const e = t
    ? function (s) {
        return t.call(this, s, Cl);
      }
    : Cl;
  return this._pairs
    .map(function (i) {
      return e(i[0]) + '=' + e(i[1]);
    }, '')
    .join('&');
};
function j_(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Fu(n, t, e) {
  if (!t) return n;
  const s = (e && e.encode) || j_;
  D.isFunction(e) && (e = { serialize: e });
  const i = e && e.serialize;
  let r;
  if (
    (i
      ? (r = i(t, e))
      : (r = D.isURLSearchParams(t) ? t.toString() : new Wa(t, e).toString(s)),
    r)
  ) {
    const a = n.indexOf('#');
    a !== -1 && (n = n.slice(0, a)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + r);
  }
  return n;
}
class Al {
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
    D.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const Iu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  V_ = typeof URLSearchParams < 'u' ? URLSearchParams : Wa,
  Y_ = typeof FormData < 'u' ? FormData : null,
  q_ = typeof Blob < 'u' ? Blob : null,
  $_ = {
    isBrowser: !0,
    classes: { URLSearchParams: V_, FormData: Y_, Blob: q_ },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Ha = typeof window < 'u' && typeof document < 'u',
  ia = (typeof navigator == 'object' && navigator) || void 0,
  U_ =
    Ha &&
    (!ia || ['ReactNative', 'NativeScript', 'NS'].indexOf(ia.product) < 0),
  X_ =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Q_ = (Ha && window.location.href) || 'http://localhost',
  G_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ha,
        hasStandardBrowserEnv: U_,
        hasStandardBrowserWebWorkerEnv: X_,
        navigator: ia,
        origin: Q_,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ft = { ...G_, ...$_ };
function K_(n, t) {
  return lr(
    n,
    new Ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (e, s, i, r) {
          return Ft.isNode && D.isBuffer(e)
            ? (this.append(s, e.toString('base64')), !1)
            : r.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function J_(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function Z_(n) {
  const t = {},
    e = Object.keys(n);
  let s;
  const i = e.length;
  let r;
  for (s = 0; s < i; s++) (r = e[s]), (t[r] = n[r]);
  return t;
}
function Nu(n) {
  function t(e, s, i, r) {
    let a = e[r++];
    if (a === '__proto__') return !0;
    const o = Number.isFinite(+a),
      l = r >= e.length;
    return (
      (a = !a && D.isArray(i) ? i.length : a),
      l
        ? (D.hasOwnProp(i, a) ? (i[a] = [i[a], s]) : (i[a] = s), !o)
        : ((!i[a] || !D.isObject(i[a])) && (i[a] = []),
          t(e, s, i[a], r) && D.isArray(i[a]) && (i[a] = Z_(i[a])),
          !o)
    );
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const e = {};
    return (
      D.forEachEntry(n, (s, i) => {
        t(J_(s), i, e, 0);
      }),
      e
    );
  }
  return null;
}
function tv(n, t, e) {
  if (D.isString(n))
    try {
      return (t || JSON.parse)(n), D.trim(n);
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s;
    }
  return (e || JSON.stringify)(n);
}
const Bs = {
  transitional: Iu,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, e) {
      const s = e.getContentType() || '',
        i = s.indexOf('application/json') > -1,
        r = D.isObject(t);
      if ((r && D.isHTMLForm(t) && (t = new FormData(t)), D.isFormData(t)))
        return i ? JSON.stringify(Nu(t)) : t;
      if (
        D.isArrayBuffer(t) ||
        D.isBuffer(t) ||
        D.isStream(t) ||
        D.isFile(t) ||
        D.isBlob(t) ||
        D.isReadableStream(t)
      )
        return t;
      if (D.isArrayBufferView(t)) return t.buffer;
      if (D.isURLSearchParams(t))
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
          return K_(t, this.formSerializer).toString();
        if ((o = D.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return lr(
            o ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return r || i ? (e.setContentType('application/json', !1), tv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const e = this.transitional || Bs.transitional,
        s = e && e.forcedJSONParsing,
        i = this.responseType === 'json';
      if (D.isResponse(t) || D.isReadableStream(t)) return t;
      if (t && D.isString(t) && ((s && !this.responseType) || i)) {
        const a = !(e && e.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (o) {
          if (a)
            throw o.name === 'SyntaxError'
              ? Z.from(o, Z.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Ft.classes.FormData, Blob: Ft.classes.Blob },
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
D.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (n) => {
  Bs.headers[n] = {};
});
const ev = D.toObjectSet([
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
  nv = (n) => {
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
              !(!e || (t[e] && ev[e])) &&
                (e === 'set-cookie'
                  ? t[e]
                    ? t[e].push(s)
                    : (t[e] = [s])
                  : (t[e] = t[e] ? t[e] + ', ' + s : s));
          }),
      t
    );
  },
  Rl = Symbol('internals');
function ss(n) {
  return n && String(n).trim().toLowerCase();
}
function yi(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(yi) : String(n);
}
function sv(n) {
  const t = Object.create(null),
    e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = e.exec(n)); ) t[s[1]] = s[2];
  return t;
}
const iv = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Tr(n, t, e, s, i) {
  if (D.isFunction(s)) return s.call(this, t, e);
  if ((i && (t = e), !!D.isString(t))) {
    if (D.isString(s)) return t.indexOf(s) !== -1;
    if (D.isRegExp(s)) return s.test(t);
  }
}
function rv(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, e, s) => e.toUpperCase() + s);
}
function av(n, t) {
  const e = D.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((s) => {
    Object.defineProperty(n, s + e, {
      value: function (i, r, a) {
        return this[s].call(this, t, i, r, a);
      },
      configurable: !0,
    });
  });
}
let Ut = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, s) {
    const i = this;
    function r(o, l, c) {
      const u = ss(l);
      if (!u) throw new Error('header name must be a non-empty string');
      const d = D.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || l] = yi(o));
    }
    const a = (o, l) => D.forEach(o, (c, u) => r(c, u, l));
    if (D.isPlainObject(t) || t instanceof this.constructor) a(t, e);
    else if (D.isString(t) && (t = t.trim()) && !iv(t)) a(nv(t), e);
    else if (D.isObject(t) && D.isIterable(t)) {
      let o = {},
        l,
        c;
      for (const u of t) {
        if (!D.isArray(u))
          throw TypeError('Object iterator must return a key-value pair');
        o[(c = u[0])] = (l = o[c])
          ? D.isArray(l)
            ? [...l, u[1]]
            : [l, u[1]]
          : u[1];
      }
      a(o, e);
    } else t != null && r(e, t, s);
    return this;
  }
  get(t, e) {
    if (((t = ss(t)), t)) {
      const s = D.findKey(this, t);
      if (s) {
        const i = this[s];
        if (!e) return i;
        if (e === !0) return sv(i);
        if (D.isFunction(e)) return e.call(this, i, s);
        if (D.isRegExp(e)) return e.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, e) {
    if (((t = ss(t)), t)) {
      const s = D.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!e || Tr(this, this[s], s, e)));
    }
    return !1;
  }
  delete(t, e) {
    const s = this;
    let i = !1;
    function r(a) {
      if (((a = ss(a)), a)) {
        const o = D.findKey(s, a);
        o && (!e || Tr(s, s[o], o, e)) && (delete s[o], (i = !0));
      }
    }
    return D.isArray(t) ? t.forEach(r) : r(t), i;
  }
  clear(t) {
    const e = Object.keys(this);
    let s = e.length,
      i = !1;
    for (; s--; ) {
      const r = e[s];
      (!t || Tr(this, this[r], r, t, !0)) && (delete this[r], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const e = this,
      s = {};
    return (
      D.forEach(this, (i, r) => {
        const a = D.findKey(s, r);
        if (a) {
          (e[a] = yi(i)), delete e[r];
          return;
        }
        const o = t ? rv(r) : String(r).trim();
        o !== r && delete e[r], (e[o] = yi(i)), (s[o] = !0);
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
      D.forEach(this, (s, i) => {
        s != null && s !== !1 && (e[i] = t && D.isArray(s) ? s.join(', ') : s);
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
    const s = (this[Rl] = this[Rl] = { accessors: {} }).accessors,
      i = this.prototype;
    function r(a) {
      const o = ss(a);
      s[o] || (av(i, a), (s[o] = !0));
    }
    return D.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
Ut.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
D.reduceDescriptors(Ut.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(s) {
      this[e] = s;
    },
  };
});
D.freezeMethods(Ut);
function Or(n, t) {
  const e = this || Bs,
    s = t || e,
    i = Ut.from(s.headers);
  let r = s.data;
  return (
    D.forEach(n, function (o) {
      r = o.call(e, r, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    r
  );
}
function Bu(n) {
  return !!(n && n.__CANCEL__);
}
function Gn(n, t, e) {
  Z.call(this, n ?? 'canceled', Z.ERR_CANCELED, t, e),
    (this.name = 'CanceledError');
}
D.inherits(Gn, Z, { __CANCEL__: !0 });
function zu(n, t, e) {
  const s = e.config.validateStatus;
  !e.status || !s || s(e.status)
    ? n(e)
    : t(
        new Z(
          'Request failed with status code ' + e.status,
          [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][
            Math.floor(e.status / 100) - 4
          ],
          e.config,
          e.request,
          e,
        ),
      );
}
function ov(n) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (t && t[1]) || '';
}
function lv(n, t) {
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
      const p = u && c - u;
      return p ? Math.round((h * 1e3) / p) : void 0;
    }
  );
}
function cv(n, t) {
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
const Bi = (n, t, e = 3) => {
    let s = 0;
    const i = lv(50, 250);
    return cv((r) => {
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
  Ll = (n, t) => {
    const e = n != null;
    return [(s) => t[0]({ lengthComputable: e, total: n, loaded: s }), t[1]];
  },
  Fl =
    (n) =>
    (...t) =>
      D.asap(() => n(...t)),
  uv = Ft.hasStandardBrowserEnv
    ? ((n, t) => (e) => (
        (e = new URL(e, Ft.origin)),
        n.protocol === e.protocol &&
          n.host === e.host &&
          (t || n.port === e.port)
      ))(
        new URL(Ft.origin),
        Ft.navigator && /(msie|trident)/i.test(Ft.navigator.userAgent),
      )
    : () => !0,
  dv = Ft.hasStandardBrowserEnv
    ? {
        write(n, t, e, s, i, r) {
          const a = [n + '=' + encodeURIComponent(t)];
          D.isNumber(e) && a.push('expires=' + new Date(e).toGMTString()),
            D.isString(s) && a.push('path=' + s),
            D.isString(i) && a.push('domain=' + i),
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
function hv(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function fv(n, t) {
  return t ? n.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : n;
}
function Wu(n, t, e) {
  let s = !hv(t);
  return n && (s || e == !1) ? fv(n, t) : t;
}
const Il = (n) => (n instanceof Ut ? { ...n } : n);
function Pn(n, t) {
  t = t || {};
  const e = {};
  function s(c, u, d, h) {
    return D.isPlainObject(c) && D.isPlainObject(u)
      ? D.merge.call({ caseless: h }, c, u)
      : D.isPlainObject(u)
        ? D.merge({}, u)
        : D.isArray(u)
          ? u.slice()
          : u;
  }
  function i(c, u, d, h) {
    if (D.isUndefined(u)) {
      if (!D.isUndefined(c)) return s(void 0, c, d, h);
    } else return s(c, u, d, h);
  }
  function r(c, u) {
    if (!D.isUndefined(u)) return s(void 0, u);
  }
  function a(c, u) {
    if (D.isUndefined(u)) {
      if (!D.isUndefined(c)) return s(void 0, c);
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
    headers: (c, u, d) => i(Il(c), Il(u), d, !0),
  };
  return (
    D.forEach(Object.keys(Object.assign({}, n, t)), function (u) {
      const d = l[u] || i,
        h = d(n[u], t[u], u);
      (D.isUndefined(h) && d !== o) || (e[u] = h);
    }),
    e
  );
}
const Hu = (n) => {
    const t = Pn({}, n);
    let {
      data: e,
      withXSRFToken: s,
      xsrfHeaderName: i,
      xsrfCookieName: r,
      headers: a,
      auth: o,
    } = t;
    (t.headers = a = Ut.from(a)),
      (t.url = Fu(
        Wu(t.baseURL, t.url, t.allowAbsoluteUrls),
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
    if (D.isFormData(e)) {
      if (Ft.hasStandardBrowserEnv || Ft.hasStandardBrowserWebWorkerEnv)
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
      Ft.hasStandardBrowserEnv &&
      (s && D.isFunction(s) && (s = s(t)), s || (s !== !1 && uv(t.url)))
    ) {
      const c = i && r && dv.read(r);
      c && a.set(i, c);
    }
    return t;
  },
  pv = typeof XMLHttpRequest < 'u',
  gv =
    pv &&
    function (n) {
      return new Promise(function (e, s) {
        const i = Hu(n);
        let r = i.data;
        const a = Ut.from(i.headers).normalize();
        let { responseType: o, onUploadProgress: l, onDownloadProgress: c } = i,
          u,
          d,
          h,
          p,
          f;
        function g() {
          p && p(),
            f && f(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener('abort', u);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function b() {
          if (!m) return;
          const x = Ut.from(
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
          zu(
            function (O) {
              e(O), g();
            },
            function (O) {
              s(O), g();
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
              (s(new Z('Request aborted', Z.ECONNABORTED, n, m)), (m = null));
          }),
          (m.onerror = function () {
            s(new Z('Network Error', Z.ERR_NETWORK, n, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let w = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const y = i.transitional || Iu;
            i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
              s(
                new Z(
                  w,
                  y.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED,
                  n,
                  m,
                ),
              ),
              (m = null);
          }),
          r === void 0 && a.setContentType(null),
          'setRequestHeader' in m &&
            D.forEach(a.toJSON(), function (w, y) {
              m.setRequestHeader(y, w);
            }),
          D.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          o && o !== 'json' && (m.responseType = i.responseType),
          c && (([h, f] = Bi(c, !0)), m.addEventListener('progress', h)),
          l &&
            m.upload &&
            (([d, p] = Bi(l)),
            m.upload.addEventListener('progress', d),
            m.upload.addEventListener('loadend', p)),
          (i.cancelToken || i.signal) &&
            ((u = (x) => {
              m &&
                (s(!x || x.type ? new Gn(null, n, m) : x),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener('abort', u)));
        const v = ov(i.url);
        if (v && Ft.protocols.indexOf(v) === -1) {
          s(new Z('Unsupported protocol ' + v + ':', Z.ERR_BAD_REQUEST, n));
          return;
        }
        m.send(r || null);
      });
    },
  mv = (n, t) => {
    const { length: e } = (n = n ? n.filter(Boolean) : []);
    if (t || e) {
      let s = new AbortController(),
        i;
      const r = function (c) {
        if (!i) {
          (i = !0), o();
          const u = c instanceof Error ? c : this.reason;
          s.abort(
            u instanceof Z ? u : new Gn(u instanceof Error ? u.message : u),
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), r(new Z(`timeout ${t} of ms exceeded`, Z.ETIMEDOUT));
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
      return (l.unsubscribe = () => D.asap(o)), l;
    }
  },
  bv = function* (n, t) {
    let e = n.byteLength;
    if (e < t) {
      yield n;
      return;
    }
    let s = 0,
      i;
    for (; s < e; ) (i = s + t), yield n.slice(s, i), (s = i);
  },
  _v = async function* (n, t) {
    for await (const e of vv(n)) yield* bv(e, t);
  },
  vv = async function* (n) {
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
  Nl = (n, t, e, s) => {
    const i = _v(n, t);
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
  cr =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  ju = cr && typeof ReadableStream == 'function',
  yv =
    cr &&
    (typeof TextEncoder == 'function'
      ? (
          (n) => (t) =>
            n.encode(t)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Vu = (n, ...t) => {
    try {
      return !!n(...t);
    } catch {
      return !1;
    }
  },
  xv =
    ju &&
    Vu(() => {
      let n = !1;
      const t = new Request(Ft.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (n = !0), 'half';
        },
      }).headers.has('Content-Type');
      return n && !t;
    }),
  Bl = 64 * 1024,
  ra = ju && Vu(() => D.isReadableStream(new Response('').body)),
  zi = { stream: ra && ((n) => n.body) };
cr &&
  ((n) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !zi[t] &&
        (zi[t] = D.isFunction(n[t])
          ? (e) => e[t]()
          : (e, s) => {
              throw new Z(
                `Response type '${t}' is not supported`,
                Z.ERR_NOT_SUPPORT,
                s,
              );
            });
    });
  })(new Response());
const wv = async (n) => {
    if (n == null) return 0;
    if (D.isBlob(n)) return n.size;
    if (D.isSpecCompliantForm(n))
      return (
        await new Request(Ft.origin, { method: 'POST', body: n }).arrayBuffer()
      ).byteLength;
    if (D.isArrayBufferView(n) || D.isArrayBuffer(n)) return n.byteLength;
    if ((D.isURLSearchParams(n) && (n = n + ''), D.isString(n)))
      return (await yv(n)).byteLength;
  },
  kv = async (n, t) => {
    const e = D.toFiniteNumber(n.getContentLength());
    return e ?? wv(t);
  },
  Mv =
    cr &&
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
      } = Hu(n);
      c = c ? (c + '').toLowerCase() : 'text';
      let p = mv([i, r && r.toAbortSignal()], a),
        f;
      const g =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let m;
      try {
        if (
          l &&
          xv &&
          e !== 'get' &&
          e !== 'head' &&
          (m = await kv(u, s)) !== 0
        ) {
          let y = new Request(t, { method: 'POST', body: s, duplex: 'half' }),
            P;
          if (
            (D.isFormData(s) &&
              (P = y.headers.get('content-type')) &&
              u.setContentType(P),
            y.body)
          ) {
            const [O, k] = Ll(m, Bi(Fl(l)));
            s = Nl(y.body, Bl, O, k);
          }
        }
        D.isString(d) || (d = d ? 'include' : 'omit');
        const b = 'credentials' in Request.prototype;
        f = new Request(t, {
          ...h,
          signal: p,
          method: e.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: s,
          duplex: 'half',
          credentials: b ? d : void 0,
        });
        let v = await fetch(f);
        const x = ra && (c === 'stream' || c === 'response');
        if (ra && (o || (x && g))) {
          const y = {};
          ['status', 'statusText', 'headers'].forEach((E) => {
            y[E] = v[E];
          });
          const P = D.toFiniteNumber(v.headers.get('content-length')),
            [O, k] = (o && Ll(P, Bi(Fl(o), !0))) || [];
          v = new Response(
            Nl(v.body, Bl, O, () => {
              k && k(), g && g();
            }),
            y,
          );
        }
        c = c || 'text';
        let w = await zi[D.findKey(zi, c) || 'text'](v, n);
        return (
          !x && g && g(),
          await new Promise((y, P) => {
            zu(y, P, {
              data: w,
              headers: Ut.from(v.headers),
              status: v.status,
              statusText: v.statusText,
              config: n,
              request: f,
            });
          })
        );
      } catch (b) {
        throw (
          (g && g(),
          b && b.name === 'TypeError' && /Load failed|fetch/i.test(b.message)
            ? Object.assign(new Z('Network Error', Z.ERR_NETWORK, n, f), {
                cause: b.cause || b,
              })
            : Z.from(b, b && b.code, n, f))
        );
      }
    }),
  aa = { http: z_, xhr: gv, fetch: Mv };
D.forEach(aa, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: t });
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: t });
  }
});
const zl = (n) => `- ${n}`,
  Sv = (n) => D.isFunction(n) || n === null || n === !1,
  Yu = {
    getAdapter: (n) => {
      n = D.isArray(n) ? n : [n];
      const { length: t } = n;
      let e, s;
      const i = {};
      for (let r = 0; r < t; r++) {
        e = n[r];
        let a;
        if (
          ((s = e),
          !Sv(e) && ((s = aa[(a = String(e)).toLowerCase()]), s === void 0))
        )
          throw new Z(`Unknown adapter '${a}'`);
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
              r.map(zl).join(`
`)
            : ' ' + zl(r[0])
          : 'as no adapter specified';
        throw new Z(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT',
        );
      }
      return s;
    },
    adapters: aa,
  };
function Er(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Gn(null, n);
}
function Wl(n) {
  return (
    Er(n),
    (n.headers = Ut.from(n.headers)),
    (n.data = Or.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    Yu.getAdapter(n.adapter || Bs.adapter)(n).then(
      function (s) {
        return (
          Er(n),
          (s.data = Or.call(n, n.transformResponse, s)),
          (s.headers = Ut.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Bu(s) ||
            (Er(n),
            s &&
              s.response &&
              ((s.response.data = Or.call(n, n.transformResponse, s.response)),
              (s.response.headers = Ut.from(s.response.headers)))),
          Promise.reject(s)
        );
      },
    )
  );
}
const qu = '1.9.0',
  ur = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, t) => {
    ur[n] = function (s) {
      return typeof s === n || 'a' + (t < 1 ? 'n ' : ' ') + n;
    };
  },
);
const Hl = {};
ur.transitional = function (t, e, s) {
  function i(r, a) {
    return (
      '[Axios v' +
      qu +
      "] Transitional option '" +
      r +
      "'" +
      a +
      (s ? '. ' + s : '')
    );
  }
  return (r, a, o) => {
    if (t === !1)
      throw new Z(
        i(a, ' has been removed' + (e ? ' in ' + e : '')),
        Z.ERR_DEPRECATED,
      );
    return (
      e &&
        !Hl[a] &&
        ((Hl[a] = !0),
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
ur.spelling = function (t) {
  return (e, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Pv(n, t, e) {
  if (typeof n != 'object')
    throw new Z('options must be an object', Z.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let i = s.length;
  for (; i-- > 0; ) {
    const r = s[i],
      a = t[r];
    if (a) {
      const o = n[r],
        l = o === void 0 || a(o, r, n);
      if (l !== !0)
        throw new Z('option ' + r + ' must be ' + l, Z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0) throw new Z('Unknown option ' + r, Z.ERR_BAD_OPTION);
  }
}
const xi = { assertOptions: Pv, validators: ur },
  xe = xi.validators;
let kn = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Al(), response: new Al() });
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
      (e = Pn(this.defaults, e));
    const { transitional: s, paramsSerializer: i, headers: r } = e;
    s !== void 0 &&
      xi.assertOptions(
        s,
        {
          silentJSONParsing: xe.transitional(xe.boolean),
          forcedJSONParsing: xe.transitional(xe.boolean),
          clarifyTimeoutError: xe.transitional(xe.boolean),
        },
        !1,
      ),
      i != null &&
        (D.isFunction(i)
          ? (e.paramsSerializer = { serialize: i })
          : xi.assertOptions(
              i,
              { encode: xe.function, serialize: xe.function },
              !0,
            )),
      e.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (e.allowAbsoluteUrls = !0)),
      xi.assertOptions(
        e,
        {
          baseUrl: xe.spelling('baseURL'),
          withXsrfToken: xe.spelling('withXSRFToken'),
        },
        !0,
      ),
      (e.method = (e.method || this.defaults.method || 'get').toLowerCase());
    let a = r && D.merge(r.common, r[e.method]);
    r &&
      D.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (f) => {
          delete r[f];
        },
      ),
      (e.headers = Ut.concat(a, r));
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == 'function' && g.runWhen(e) === !1) ||
        ((l = l && g.synchronous), o.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u,
      d = 0,
      h;
    if (!l) {
      const f = [Wl.bind(this), void 0];
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
    let p = e;
    for (d = 0; d < h; ) {
      const f = o[d++],
        g = o[d++];
      try {
        p = f(p);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      u = Wl.call(this, p);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Pn(this.defaults, t);
    const e = Wu(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fu(e, t.params, t.paramsSerializer);
  }
};
D.forEach(['delete', 'get', 'head', 'options'], function (t) {
  kn.prototype[t] = function (e, s) {
    return this.request(
      Pn(s || {}, { method: t, url: e, data: (s || {}).data }),
    );
  };
});
D.forEach(['post', 'put', 'patch'], function (t) {
  function e(s) {
    return function (r, a, o) {
      return this.request(
        Pn(o || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: r,
          data: a,
        }),
      );
    };
  }
  (kn.prototype[t] = e()), (kn.prototype[t + 'Form'] = e(!0));
});
let Dv = class $u {
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
        s.reason || ((s.reason = new Gn(r, a, o)), e(s.reason));
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
      token: new $u(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Tv(n) {
  return function (e) {
    return n.apply(null, e);
  };
}
function Ov(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const oa = {
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
Object.entries(oa).forEach(([n, t]) => {
  oa[t] = n;
});
function Uu(n) {
  const t = new kn(n),
    e = ku(kn.prototype.request, t);
  return (
    D.extend(e, kn.prototype, t, { allOwnKeys: !0 }),
    D.extend(e, t, null, { allOwnKeys: !0 }),
    (e.create = function (i) {
      return Uu(Pn(n, i));
    }),
    e
  );
}
const rt = Uu(Bs);
rt.Axios = kn;
rt.CanceledError = Gn;
rt.CancelToken = Dv;
rt.isCancel = Bu;
rt.VERSION = qu;
rt.toFormData = lr;
rt.AxiosError = Z;
rt.Cancel = rt.CanceledError;
rt.all = function (t) {
  return Promise.all(t);
};
rt.spread = Tv;
rt.isAxiosError = Ov;
rt.mergeConfig = Pn;
rt.AxiosHeaders = Ut;
rt.formToJSON = (n) => Nu(D.isHTMLForm(n) ? new FormData(n) : n);
rt.getAdapter = Yu.getAdapter;
rt.HttpStatusCode = oa;
rt.default = rt;
const {
  Axios: Vw,
  AxiosError: Yw,
  CanceledError: qw,
  isCancel: $w,
  CancelToken: Uw,
  VERSION: Xw,
  all: Qw,
  Cancel: Gw,
  isAxiosError: Kw,
  spread: Jw,
  toFormData: Zw,
  AxiosHeaders: t1,
  HttpStatusCode: e1,
  formToJSON: n1,
  getAdapter: s1,
  mergeConfig: i1,
} = rt;
var Ev = W('<p> </p>'),
  Cv = W(
    '<div class="parent svelte-nhan8g"><div class="div1 svelte-nhan8g"><p class="main svelte-nhan8g">Top Batches Sold</p></div> <div class="div2 svelte-nhan8g"><canvas width="400" height="400" class="svelte-nhan8g"></canvas></div> <div class="div5 svelte-nhan8g"><p class="main1 svelte-nhan8g">Top Batches Sold:</p> <!></div></div>',
  );
function la(n, t) {
  be(t, !1);
  let e = Nn(),
    s,
    i = Nn([]),
    r = Nn([]),
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
    o = jh(t, 'type', 8, 'pie');
  async function l() {
    try {
      const g = (
        await rt.get('http://localhost:3000/api/data/top/five/batches')
      ).data;
      A(
        i,
        g.map((m) => m.batchcode),
      ),
        A(
          r,
          g.map((m) => m.total_sold),
        ),
        (a.labels = _(i)),
        (a.datasets[0].data = _(r)),
        s && s.destroy(),
        (s = new Yt(_(e), {
          type: o(),
          data: a,
          options: { responsive: !0, maintainAspectRatio: !1 },
        }));
    } catch (f) {
      console.error('Error fetching data:', f);
    }
  }
  Le(() => {
    l();
  }),
    Mc();
  var c = Cv(),
    u = T(M(c), 2),
    d = M(u);
  Xn(
    d,
    (f) => A(e, f),
    () => _(e),
  );
  var h = T(u, 2),
    p = T(M(h), 2);
  Ae(
    p,
    1,
    () => _(i),
    Ki,
    (f, g, m) => {
      var b = Ev(),
        v = M(b);
      it(() => N(v, `${_(g) ?? ''}: ${_(r)[m] ?? ''}`)), z(f, b);
    },
  ),
    z(n, c),
    _e();
}
var Av = W('<div><p><strong> </strong></p> <p> </p> <p> </p> <p> </p></div>'),
  Rv = W(
    '<div class="card green svelte-12l8rrg"><p><strong>No expired items</strong></p> <p>Inventory is healthy</p></div>',
  ),
  Lv = W(
    '<div class="parent svelte-12l8rrg"><div class="div1 svelte-12l8rrg"><p class="main svelte-12l8rrg"> </p></div> <div class="div2 svelte-12l8rrg"><!></div></div>',
  );
function Xu(n, t) {
  be(t, !1);
  let e = Nn(null),
    s = Nn([]);
  async function i() {
    var b;
    const m = await rt.get('http://localhost:3000/api/data/expired/total');
    A(e, ((b = m.data) == null ? void 0 : b.total_expired_qty) ?? 0);
  }
  async function r() {
    try {
      const m = await rt.get('http://localhost:3000/api/data/expired');
      A(s, m.data);
    } catch (m) {
      console.error('Error fetching expired items:', m);
    }
  }
  Le(() => {
    i(), r();
  });
  function a(m) {
    return m > 90 ? 'card red' : m > 30 ? 'card orange' : 'card yellow';
  }
  function o(m) {
    const b = new Date(m);
    return Math.floor((new Date() - b) / (1e3 * 60 * 60 * 24));
  }
  Mc();
  var l = Lv(),
    c = M(l),
    u = M(c),
    d = M(u),
    h = T(c, 2),
    p = M(h);
  {
    var f = (m) => {
        var b = Th(),
          v = Te(b);
        Ae(
          v,
          1,
          () => _(s),
          Ki,
          (x, w) => {
            var y = Av(),
              P = M(y),
              O = M(P),
              k = M(O),
              E = T(P, 2),
              L = M(E),
              R = T(E, 2),
              C = M(R),
              H = T(R, 2),
              G = M(H);
            it(
              (U, Y) => {
                At(y, 1, U, 'svelte-12l8rrg'),
                  N(k, _(w).itemname),
                  N(L, `Batch: ${_(w).batchcode ?? ''}`),
                  N(C, `Qty: ${_(w).qty ?? ''}`),
                  N(G, `Expired: ${Y ?? ''} days ago`);
              },
              [() => we(a(o(_(w).expiry))), () => o(_(w).expiry)],
              ba,
            ),
              z(x, y);
          },
        ),
          z(m, b);
      },
      g = (m) => {
        var b = Rv();
        z(m, b);
      };
    st(p, (m) => {
      _(s).length > 0 ? m(f) : m(g, !1);
    });
  }
  it(() => N(d, `Total Expired Items: ${_(e) ?? ''}`)), z(n, l), _e();
}
const Qu = 6048e5,
  Fv = 864e5,
  zs = 6e4,
  Ws = 36e5,
  Iv = 1e3,
  jl = Symbol.for('constructDateFrom');
function wt(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && jl in n
      ? n[jl](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function K(n, t) {
  return wt(t || n, n);
}
function dr(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in);
  return isNaN(t)
    ? wt((e == null ? void 0 : e.in) || n, NaN)
    : (t && s.setDate(s.getDate() + t), s);
}
function ja(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in);
  if (isNaN(t)) return wt(n, NaN);
  if (!t) return s;
  const i = s.getDate(),
    r = wt(n, s.getTime());
  r.setMonth(s.getMonth() + t + 1, 0);
  const a = r.getDate();
  return i >= a ? r : (s.setFullYear(r.getFullYear(), r.getMonth(), i), s);
}
function Va(n, t, e) {
  return wt(n, +K(n) + t);
}
function Nv(n, t, e) {
  return Va(n, t * Ws);
}
let Bv = {};
function On() {
  return Bv;
}
function Re(n, t) {
  var o, l, c, u;
  const e = On(),
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
    i = K(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? 7 : 0) + r - s;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function Yn(n, t) {
  return Re(n, { ...t, weekStartsOn: 1 });
}
function Gu(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = wt(e, 0);
  i.setFullYear(s + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const r = Yn(i),
    a = wt(e, 0);
  a.setFullYear(s, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Yn(a);
  return e.getTime() >= r.getTime()
    ? s + 1
    : e.getTime() >= o.getTime()
      ? s
      : s - 1;
}
function Wi(n) {
  const t = K(n),
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
function En(n, ...t) {
  const e = wt.bind(
    null,
    t.find((s) => typeof s == 'object'),
  );
  return t.map(e);
}
function ca(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setHours(0, 0, 0, 0), e;
}
function Ku(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t),
    r = ca(s),
    a = ca(i),
    o = +r - Wi(r),
    l = +a - Wi(a);
  return Math.round((o - l) / Fv);
}
function zv(n, t) {
  const e = Gu(n, t),
    s = wt(n, 0);
  return s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0), Yn(s);
}
function Wv(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in);
  return s.setTime(s.getTime() + t * zs), s;
}
function Hv(n, t, e) {
  return ja(n, t * 3, e);
}
function jv(n, t, e) {
  return Va(n, t * 1e3);
}
function Vv(n, t, e) {
  return dr(n, t * 7, e);
}
function Yv(n, t, e) {
  return ja(n, t * 12, e);
}
function vs(n, t) {
  const e = +K(n) - +K(t);
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function qv(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' &&
      Object.prototype.toString.call(n) === '[object Date]')
  );
}
function Ju(n) {
  return !((!qv(n) && typeof n != 'number') || isNaN(+K(n)));
}
function $v(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t),
    r = s.getFullYear() - i.getFullYear(),
    a = s.getMonth() - i.getMonth();
  return r * 12 + a;
}
function Uv(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t);
  return s.getFullYear() - i.getFullYear();
}
function Zu(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t),
    r = Vl(s, i),
    a = Math.abs(Ku(s, i));
  s.setDate(s.getDate() - r * a);
  const o = +(Vl(s, i) === -r),
    l = r * (a - o);
  return l === 0 ? 0 : l;
}
function Vl(n, t) {
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
function Hs(n) {
  return (t) => {
    const s = (n ? Math[n] : Math.trunc)(t);
    return s === 0 ? 0 : s;
  };
}
function Xv(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t),
    r = (+s - +i) / Ws;
  return Hs(e == null ? void 0 : e.roundingMethod)(r);
}
function Ya(n, t) {
  return +K(n) - +K(t);
}
function Qv(n, t, e) {
  const s = Ya(n, t) / zs;
  return Hs(e == null ? void 0 : e.roundingMethod)(s);
}
function td(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setHours(23, 59, 59, 999), e;
}
function ed(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), s + 1, 0), e.setHours(23, 59, 59, 999), e
  );
}
function Gv(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return +td(e, t) == +ed(e, t);
}
function nd(n, t, e) {
  const [s, i, r] = En(e == null ? void 0 : e.in, n, n, t),
    a = vs(i, r),
    o = Math.abs($v(i, r));
  if (o < 1) return 0;
  i.getMonth() === 1 && i.getDate() > 27 && i.setDate(30),
    i.setMonth(i.getMonth() - a * o);
  let l = vs(i, r) === -a;
  Gv(s) && o === 1 && vs(s, r) === 1 && (l = !1);
  const c = a * (o - +l);
  return c === 0 ? 0 : c;
}
function Kv(n, t, e) {
  const s = nd(n, t, e) / 3;
  return Hs(e == null ? void 0 : e.roundingMethod)(s);
}
function Jv(n, t, e) {
  const s = Ya(n, t) / 1e3;
  return Hs(e == null ? void 0 : e.roundingMethod)(s);
}
function Zv(n, t, e) {
  const s = Zu(n, t, e) / 7;
  return Hs(e == null ? void 0 : e.roundingMethod)(s);
}
function t0(n, t, e) {
  const [s, i] = En(e == null ? void 0 : e.in, n, t),
    r = vs(s, i),
    a = Math.abs(Uv(s, i));
  s.setFullYear(1584), i.setFullYear(1584);
  const o = vs(s, i) === -r,
    l = r * (a - +o);
  return l === 0 ? 0 : l;
}
function e0(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3);
  return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
}
function n0(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function s0(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getFullYear();
  return e.setFullYear(s + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
function sd(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function i0(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setMinutes(59, 59, 999), e;
}
function r0(n, t) {
  var o, l;
  const e = On(),
    s =
      e.weekStartsOn ??
      ((l = (o = e.locale) == null ? void 0 : o.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    i = K(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? -7 : 0) + 6 - (r - s);
  return i.setDate(i.getDate() + a), i.setHours(23, 59, 59, 999), i;
}
function a0(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setSeconds(59, 999), e;
}
function o0(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3) + 3;
  return e.setMonth(i, 0), e.setHours(23, 59, 59, 999), e;
}
function l0(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(999), e;
}
const c0 = {
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
  u0 = (n, t, e) => {
    let s;
    const i = c0[n];
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
function Cr(n) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const d0 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  h0 = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  f0 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  p0 = {
    date: Cr({ formats: d0, defaultWidth: 'full' }),
    time: Cr({ formats: h0, defaultWidth: 'full' }),
    dateTime: Cr({ formats: f0, defaultWidth: 'full' }),
  },
  g0 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  m0 = (n, t, e, s) => g0[n];
function is(n) {
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
const b0 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  _0 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  v0 = {
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
  y0 = {
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
  x0 = {
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
  w0 = {
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
  k0 = (n, t) => {
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
  M0 = {
    ordinalNumber: k0,
    era: is({ values: b0, defaultWidth: 'wide' }),
    quarter: is({
      values: _0,
      defaultWidth: 'wide',
      argumentCallback: (n) => n - 1,
    }),
    month: is({ values: v0, defaultWidth: 'wide' }),
    day: is({ values: y0, defaultWidth: 'wide' }),
    dayPeriod: is({
      values: x0,
      defaultWidth: 'wide',
      formattingValues: w0,
      defaultFormattingWidth: 'wide',
    }),
  };
function rs(n) {
  return (t, e = {}) => {
    const s = e.width,
      i = (s && n.matchPatterns[s]) || n.matchPatterns[n.defaultMatchWidth],
      r = t.match(i);
    if (!r) return null;
    const a = r[0],
      o = (s && n.parsePatterns[s]) || n.parsePatterns[n.defaultParseWidth],
      l = Array.isArray(o) ? P0(o, (d) => d.test(a)) : S0(o, (d) => d.test(a));
    let c;
    (c = n.valueCallback ? n.valueCallback(l) : l),
      (c = e.valueCallback ? e.valueCallback(c) : c);
    const u = t.slice(a.length);
    return { value: c, rest: u };
  };
}
function S0(n, t) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e])) return e;
}
function P0(n, t) {
  for (let e = 0; e < n.length; e++) if (t(n[e])) return e;
}
function D0(n) {
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
const T0 = /^(\d+)(th|st|nd|rd)?/i,
  O0 = /\d+/i,
  E0 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  C0 = { any: [/^b/i, /^(a|c)/i] },
  A0 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  R0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  L0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  F0 = {
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
  I0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  N0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  B0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  z0 = {
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
  W0 = {
    ordinalNumber: D0({
      matchPattern: T0,
      parsePattern: O0,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: rs({
      matchPatterns: E0,
      defaultMatchWidth: 'wide',
      parsePatterns: C0,
      defaultParseWidth: 'any',
    }),
    quarter: rs({
      matchPatterns: A0,
      defaultMatchWidth: 'wide',
      parsePatterns: R0,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: rs({
      matchPatterns: L0,
      defaultMatchWidth: 'wide',
      parsePatterns: F0,
      defaultParseWidth: 'any',
    }),
    day: rs({
      matchPatterns: I0,
      defaultMatchWidth: 'wide',
      parsePatterns: N0,
      defaultParseWidth: 'any',
    }),
    dayPeriod: rs({
      matchPatterns: B0,
      defaultMatchWidth: 'any',
      parsePatterns: z0,
      defaultParseWidth: 'any',
    }),
  },
  id = {
    code: 'en-US',
    formatDistance: u0,
    formatLong: p0,
    formatRelative: m0,
    localize: M0,
    match: W0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function H0(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return Ku(e, sd(e)) + 1;
}
function rd(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = +Yn(e) - +zv(e);
  return Math.round(s / Qu) + 1;
}
function qa(n, t) {
  var u, d, h, p;
  const e = K(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = On(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((p = (h = i.locale) == null ? void 0 : h.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    a = wt((t == null ? void 0 : t.in) || n, 0);
  a.setFullYear(s + 1, 0, r), a.setHours(0, 0, 0, 0);
  const o = Re(a, t),
    l = wt((t == null ? void 0 : t.in) || n, 0);
  l.setFullYear(s, 0, r), l.setHours(0, 0, 0, 0);
  const c = Re(l, t);
  return +e >= +o ? s + 1 : +e >= +c ? s : s - 1;
}
function j0(n, t) {
  var o, l, c, u;
  const e = On(),
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
    i = qa(n, t),
    r = wt((t == null ? void 0 : t.in) || n, 0);
  return r.setFullYear(i, 0, s), r.setHours(0, 0, 0, 0), Re(r, t);
}
function ad(n, t) {
  const e = K(n, t == null ? void 0 : t.in),
    s = +Re(e, t) - +j0(e, t);
  return Math.round(s / Qu) + 1;
}
function lt(n, t) {
  const e = n < 0 ? '-' : '',
    s = Math.abs(n).toString().padStart(t, '0');
  return e + s;
}
const Xe = {
    y(n, t) {
      const e = n.getFullYear(),
        s = e > 0 ? e : 1 - e;
      return lt(t === 'yy' ? s % 100 : s, t.length);
    },
    M(n, t) {
      const e = n.getMonth();
      return t === 'M' ? String(e + 1) : lt(e + 1, 2);
    },
    d(n, t) {
      return lt(n.getDate(), t.length);
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
      return lt(n.getHours() % 12 || 12, t.length);
    },
    H(n, t) {
      return lt(n.getHours(), t.length);
    },
    m(n, t) {
      return lt(n.getMinutes(), t.length);
    },
    s(n, t) {
      return lt(n.getSeconds(), t.length);
    },
    S(n, t) {
      const e = t.length,
        s = n.getMilliseconds(),
        i = Math.trunc(s * Math.pow(10, e - 3));
      return lt(i, t.length);
    },
  },
  Fn = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Yl = {
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
      return Xe.y(n, t);
    },
    Y: function (n, t, e, s) {
      const i = qa(n, s),
        r = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const a = r % 100;
        return lt(a, 2);
      }
      return t === 'Yo'
        ? e.ordinalNumber(r, { unit: 'year' })
        : lt(r, t.length);
    },
    R: function (n, t) {
      const e = Gu(n);
      return lt(e, t.length);
    },
    u: function (n, t) {
      const e = n.getFullYear();
      return lt(e, t.length);
    },
    Q: function (n, t, e) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(s);
        case 'QQ':
          return lt(s, 2);
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
          return lt(s, 2);
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
          return Xe.M(n, t);
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
          return lt(s + 1, 2);
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
      const i = ad(n, s);
      return t === 'wo'
        ? e.ordinalNumber(i, { unit: 'week' })
        : lt(i, t.length);
    },
    I: function (n, t, e) {
      const s = rd(n);
      return t === 'Io'
        ? e.ordinalNumber(s, { unit: 'week' })
        : lt(s, t.length);
    },
    d: function (n, t, e) {
      return t === 'do'
        ? e.ordinalNumber(n.getDate(), { unit: 'date' })
        : Xe.d(n, t);
    },
    D: function (n, t, e) {
      const s = H0(n);
      return t === 'Do'
        ? e.ordinalNumber(s, { unit: 'dayOfYear' })
        : lt(s, t.length);
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
          return lt(r, 2);
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
          return lt(r, t.length);
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
          return lt(i, t.length);
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
          ? (i = Fn.noon)
          : s === 0
            ? (i = Fn.midnight)
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
          ? (i = Fn.evening)
          : s >= 12
            ? (i = Fn.afternoon)
            : s >= 4
              ? (i = Fn.morning)
              : (i = Fn.night),
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
      return Xe.h(n, t);
    },
    H: function (n, t, e) {
      return t === 'Ho'
        ? e.ordinalNumber(n.getHours(), { unit: 'hour' })
        : Xe.H(n, t);
    },
    K: function (n, t, e) {
      const s = n.getHours() % 12;
      return t === 'Ko'
        ? e.ordinalNumber(s, { unit: 'hour' })
        : lt(s, t.length);
    },
    k: function (n, t, e) {
      let s = n.getHours();
      return (
        s === 0 && (s = 24),
        t === 'ko' ? e.ordinalNumber(s, { unit: 'hour' }) : lt(s, t.length)
      );
    },
    m: function (n, t, e) {
      return t === 'mo'
        ? e.ordinalNumber(n.getMinutes(), { unit: 'minute' })
        : Xe.m(n, t);
    },
    s: function (n, t, e) {
      return t === 'so'
        ? e.ordinalNumber(n.getSeconds(), { unit: 'second' })
        : Xe.s(n, t);
    },
    S: function (n, t) {
      return Xe.S(n, t);
    },
    X: function (n, t, e) {
      const s = n.getTimezoneOffset();
      if (s === 0) return 'Z';
      switch (t) {
        case 'X':
          return $l(s);
        case 'XXXX':
        case 'XX':
          return bn(s);
        case 'XXXXX':
        case 'XXX':
        default:
          return bn(s, ':');
      }
    },
    x: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return $l(s);
        case 'xxxx':
        case 'xx':
          return bn(s);
        case 'xxxxx':
        case 'xxx':
        default:
          return bn(s, ':');
      }
    },
    O: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + ql(s, ':');
        case 'OOOO':
        default:
          return 'GMT' + bn(s, ':');
      }
    },
    z: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + ql(s, ':');
        case 'zzzz':
        default:
          return 'GMT' + bn(s, ':');
      }
    },
    t: function (n, t, e) {
      const s = Math.trunc(+n / 1e3);
      return lt(s, t.length);
    },
    T: function (n, t, e) {
      return lt(+n, t.length);
    },
  };
function ql(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = Math.trunc(s / 60),
    r = s % 60;
  return r === 0 ? e + String(i) : e + String(i) + t + lt(r, 2);
}
function $l(n, t) {
  return n % 60 === 0
    ? (n > 0 ? '-' : '+') + lt(Math.abs(n) / 60, 2)
    : bn(n, t);
}
function bn(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = lt(Math.trunc(s / 60), 2),
    r = lt(s % 60, 2);
  return e + i + t + r;
}
const Ul = (n, t) => {
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
  od = (n, t) => {
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
  V0 = (n, t) => {
    const e = n.match(/(P+)(p+)?/) || [],
      s = e[1],
      i = e[2];
    if (!i) return Ul(n, t);
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
    return r.replace('{{date}}', Ul(s, t)).replace('{{time}}', od(i, t));
  },
  ua = { p: od, P: V0 },
  Y0 = /^D+$/,
  q0 = /^Y+$/,
  $0 = ['D', 'DD', 'YY', 'YYYY'];
function ld(n) {
  return Y0.test(n);
}
function cd(n) {
  return q0.test(n);
}
function da(n, t, e) {
  const s = U0(n, t, e);
  if ((console.warn(s), $0.includes(n))) throw new RangeError(s);
}
function U0(n, t, e) {
  const s = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const X0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Q0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  G0 = /^'([^]*?)'?$/,
  K0 = /''/g,
  J0 = /[a-zA-Z]/;
function Z0(n, t, e) {
  var u, d, h, p, f, g, m, b;
  const s = On(),
    i = (e == null ? void 0 : e.locale) ?? s.locale ?? id,
    r =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((d = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((p = (h = s.locale) == null ? void 0 : h.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((g = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) ==
      null
        ? void 0
        : g.weekStartsOn) ??
      s.weekStartsOn ??
      ((b = (m = s.locale) == null ? void 0 : m.options) == null
        ? void 0
        : b.weekStartsOn) ??
      0,
    o = K(n, e == null ? void 0 : e.in);
  if (!Ju(o)) throw new RangeError('Invalid time value');
  let l = t
    .match(Q0)
    .map((v) => {
      const x = v[0];
      if (x === 'p' || x === 'P') {
        const w = ua[x];
        return w(v, i.formatLong);
      }
      return v;
    })
    .join('')
    .match(X0)
    .map((v) => {
      if (v === "''") return { isToken: !1, value: "'" };
      const x = v[0];
      if (x === "'") return { isToken: !1, value: ty(v) };
      if (Yl[x]) return { isToken: !0, value: v };
      if (x.match(J0))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            x +
            '`',
        );
      return { isToken: !1, value: v };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(o, l));
  const c = { firstWeekContainsDate: r, weekStartsOn: a, locale: i };
  return l
    .map((v) => {
      if (!v.isToken) return v.value;
      const x = v.value;
      ((!(e != null && e.useAdditionalWeekYearTokens) && cd(x)) ||
        (!(e != null && e.useAdditionalDayOfYearTokens) && ld(x))) &&
        da(x, t, String(n));
      const w = Yl[x[0]];
      return w(o, x, i.localize, c);
    })
    .join('');
}
function ty(n) {
  const t = n.match(G0);
  return t ? t[1].replace(K0, "'") : n;
}
function ey() {
  return Object.assign({}, On());
}
function ny(n, t) {
  const e = K(n, t == null ? void 0 : t.in).getDay();
  return e === 0 ? 7 : e;
}
function sy(n, t) {
  const e = iy(t) ? new t(0) : wt(t, 0);
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
function iy(n) {
  var t;
  return (
    typeof n == 'function' &&
    ((t = n.prototype) == null ? void 0 : t.constructor) === n
  );
}
const ry = 10;
class ud {
  constructor() {
    S(this, 'subPriority', 0);
  }
  validate(t, e) {
    return !0;
  }
}
class ay extends ud {
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
class oy extends ud {
  constructor(e, s) {
    super();
    S(this, 'priority', ry);
    S(this, 'subPriority', -1);
    this.context = e || ((i) => wt(s, i));
  }
  set(e, s) {
    return s.timestampIsSet ? e : wt(e, sy(e, this.context));
  }
}
class at {
  run(t, e, s, i) {
    const r = this.parse(t, e, s, i);
    return r
      ? {
          setter: new ay(
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
class ly extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 140);
    S(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
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
const St = {
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
  Pe = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function Pt(n, t) {
  return n && { value: t(n.value), rest: n.rest };
}
function vt(n, t) {
  const e = t.match(n);
  return e ? { value: parseInt(e[0], 10), rest: t.slice(e[0].length) } : null;
}
function De(n, t) {
  const e = t.match(n);
  if (!e) return null;
  if (e[0] === 'Z') return { value: 0, rest: t.slice(1) };
  const s = e[1] === '+' ? 1 : -1,
    i = e[2] ? parseInt(e[2], 10) : 0,
    r = e[3] ? parseInt(e[3], 10) : 0,
    a = e[5] ? parseInt(e[5], 10) : 0;
  return { value: s * (i * Ws + r * zs + a * Iv), rest: t.slice(e[0].length) };
}
function dd(n) {
  return vt(St.anyDigitsSigned, n);
}
function kt(n, t) {
  switch (n) {
    case 1:
      return vt(St.singleDigit, t);
    case 2:
      return vt(St.twoDigits, t);
    case 3:
      return vt(St.threeDigits, t);
    case 4:
      return vt(St.fourDigits, t);
    default:
      return vt(new RegExp('^\\d{1,' + n + '}'), t);
  }
}
function Hi(n, t) {
  switch (n) {
    case 1:
      return vt(St.singleDigitSigned, t);
    case 2:
      return vt(St.twoDigitsSigned, t);
    case 3:
      return vt(St.threeDigitsSigned, t);
    case 4:
      return vt(St.fourDigitsSigned, t);
    default:
      return vt(new RegExp('^-?\\d{1,' + n + '}'), t);
  }
}
function $a(n) {
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
function hd(n, t) {
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
function fd(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class cy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 130);
    S(this, 'incompatibleTokens', [
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
        return Pt(kt(4, e), r);
      case 'yo':
        return Pt(i.ordinalNumber(e, { unit: 'year' }), r);
      default:
        return Pt(kt(s.length, e), r);
    }
  }
  validate(e, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(e, s, i) {
    const r = e.getFullYear();
    if (i.isTwoDigitYear) {
      const o = hd(i.year, r);
      return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const a = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class uy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 130);
    S(this, 'incompatibleTokens', [
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
        return Pt(kt(4, e), r);
      case 'Yo':
        return Pt(i.ordinalNumber(e, { unit: 'year' }), r);
      default:
        return Pt(kt(s.length, e), r);
    }
  }
  validate(e, s) {
    return s.isTwoDigitYear || s.year > 0;
  }
  set(e, s, i, r) {
    const a = qa(e, r);
    if (i.isTwoDigitYear) {
      const l = hd(i.year, a);
      return (
        e.setFullYear(l, 0, r.firstWeekContainsDate),
        e.setHours(0, 0, 0, 0),
        Re(e, r)
      );
    }
    const o = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return (
      e.setFullYear(o, 0, r.firstWeekContainsDate),
      e.setHours(0, 0, 0, 0),
      Re(e, r)
    );
  }
}
class dy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 130);
    S(this, 'incompatibleTokens', [
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
    return Hi(s === 'R' ? 4 : s.length, e);
  }
  set(e, s, i) {
    const r = wt(e, 0);
    return r.setFullYear(i, 0, 4), r.setHours(0, 0, 0, 0), Yn(r);
  }
}
class hy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 130);
    S(this, 'incompatibleTokens', [
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
    return Hi(s === 'u' ? 4 : s.length, e);
  }
  set(e, s, i) {
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class fy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 120);
    S(this, 'incompatibleTokens', [
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
        return kt(s.length, e);
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
class py extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 120);
    S(this, 'incompatibleTokens', [
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
        return kt(s.length, e);
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
class gy extends at {
  constructor() {
    super(...arguments);
    S(this, 'incompatibleTokens', [
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
    S(this, 'priority', 110);
  }
  parse(e, s, i) {
    const r = (a) => a - 1;
    switch (s) {
      case 'M':
        return Pt(vt(St.month, e), r);
      case 'MM':
        return Pt(kt(2, e), r);
      case 'Mo':
        return Pt(i.ordinalNumber(e, { unit: 'month' }), r);
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
class my extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 110);
    S(this, 'incompatibleTokens', [
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
        return Pt(vt(St.month, e), r);
      case 'LL':
        return Pt(kt(2, e), r);
      case 'Lo':
        return Pt(i.ordinalNumber(e, { unit: 'month' }), r);
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
function by(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in),
    i = ad(s, e) - t;
  return s.setDate(s.getDate() - i * 7), K(s, e == null ? void 0 : e.in);
}
class _y extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 100);
    S(this, 'incompatibleTokens', [
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
        return vt(St.week, e);
      case 'wo':
        return i.ordinalNumber(e, { unit: 'week' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 53;
  }
  set(e, s, i, r) {
    return Re(by(e, i, r), r);
  }
}
function vy(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in),
    i = rd(s, e) - t;
  return s.setDate(s.getDate() - i * 7), s;
}
class yy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 100);
    S(this, 'incompatibleTokens', [
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
        return vt(St.week, e);
      case 'Io':
        return i.ordinalNumber(e, { unit: 'week' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 53;
  }
  set(e, s, i) {
    return Yn(vy(e, i));
  }
}
const xy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  wy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class ky extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'subPriority', 1);
    S(this, 'incompatibleTokens', [
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
        return vt(St.date, e);
      case 'do':
        return i.ordinalNumber(e, { unit: 'date' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    const i = e.getFullYear(),
      r = fd(i),
      a = e.getMonth();
    return r ? s >= 1 && s <= wy[a] : s >= 1 && s <= xy[a];
  }
  set(e, s, i) {
    return e.setDate(i), e.setHours(0, 0, 0, 0), e;
  }
}
class My extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'subpriority', 1);
    S(this, 'incompatibleTokens', [
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
        return vt(St.dayOfYear, e);
      case 'Do':
        return i.ordinalNumber(e, { unit: 'date' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    const i = e.getFullYear();
    return fd(i) ? s >= 1 && s <= 366 : s >= 1 && s <= 365;
  }
  set(e, s, i) {
    return e.setMonth(0, i), e.setHours(0, 0, 0, 0), e;
  }
}
function Ua(n, t, e) {
  var d, h, p, f;
  const s = On(),
    i =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((h = (d = e == null ? void 0 : e.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : h.weekStartsOn) ??
      s.weekStartsOn ??
      ((f = (p = s.locale) == null ? void 0 : p.options) == null
        ? void 0
        : f.weekStartsOn) ??
      0,
    r = K(n, e == null ? void 0 : e.in),
    a = r.getDay(),
    l = ((t % 7) + 7) % 7,
    c = 7 - i,
    u = t < 0 || t > 6 ? t - ((a + c) % 7) : ((l + c) % 7) - ((a + c) % 7);
  return dr(r, u, e);
}
class Sy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
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
    return (e = Ua(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class Py extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'incompatibleTokens', [
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
        return Pt(kt(s.length, e), a);
      case 'eo':
        return Pt(i.ordinalNumber(e, { unit: 'day' }), a);
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
    return (e = Ua(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class Dy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'incompatibleTokens', [
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
        return Pt(kt(s.length, e), a);
      case 'co':
        return Pt(i.ordinalNumber(e, { unit: 'day' }), a);
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
    return (e = Ua(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
function Ty(n, t, e) {
  const s = K(n, e == null ? void 0 : e.in),
    i = ny(s, e),
    r = t - i;
  return dr(s, r, e);
}
class Oy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 90);
    S(this, 'incompatibleTokens', [
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
        return kt(s.length, e);
      case 'io':
        return i.ordinalNumber(e, { unit: 'day' });
      case 'iii':
        return Pt(
          i.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            i.day(e, { width: 'short', context: 'formatting' }) ||
            i.day(e, { width: 'narrow', context: 'formatting' }),
          r,
        );
      case 'iiiii':
        return Pt(i.day(e, { width: 'narrow', context: 'formatting' }), r);
      case 'iiiiii':
        return Pt(
          i.day(e, { width: 'short', context: 'formatting' }) ||
            i.day(e, { width: 'narrow', context: 'formatting' }),
          r,
        );
      case 'iiii':
      default:
        return Pt(
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
    return (e = Ty(e, i)), e.setHours(0, 0, 0, 0), e;
  }
}
class Ey extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 80);
    S(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
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
    return e.setHours($a(i), 0, 0, 0), e;
  }
}
class Cy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 80);
    S(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
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
    return e.setHours($a(i), 0, 0, 0), e;
  }
}
class Ay extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 80);
    S(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
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
    return e.setHours($a(i), 0, 0, 0), e;
  }
}
class Ry extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 70);
    S(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'h':
        return vt(St.hour12h, e);
      case 'ho':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return kt(s.length, e);
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
class Ly extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 70);
    S(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'H':
        return vt(St.hour23h, e);
      case 'Ho':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 23;
  }
  set(e, s, i) {
    return e.setHours(i, 0, 0, 0), e;
  }
}
class Fy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 70);
    S(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'K':
        return vt(St.hour11h, e);
      case 'Ko':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return kt(s.length, e);
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
class Iy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 70);
    S(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'k':
        return vt(St.hour24h, e);
      case 'ko':
        return i.ordinalNumber(e, { unit: 'hour' });
      default:
        return kt(s.length, e);
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
class Ny extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 60);
    S(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 'm':
        return vt(St.minute, e);
      case 'mo':
        return i.ordinalNumber(e, { unit: 'minute' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 59;
  }
  set(e, s, i) {
    return e.setMinutes(i, 0, 0), e;
  }
}
class By extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 50);
    S(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s, i) {
    switch (s) {
      case 's':
        return vt(St.second, e);
      case 'so':
        return i.ordinalNumber(e, { unit: 'second' });
      default:
        return kt(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 0 && s <= 59;
  }
  set(e, s, i) {
    return e.setSeconds(i, 0), e;
  }
}
class zy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 30);
    S(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, s) {
    const i = (r) => Math.trunc(r * Math.pow(10, -s.length + 3));
    return Pt(kt(s.length, e), i);
  }
  set(e, s, i) {
    return e.setMilliseconds(i), e;
  }
}
class Wy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 10);
    S(this, 'incompatibleTokens', ['t', 'T', 'x']);
  }
  parse(e, s) {
    switch (s) {
      case 'X':
        return De(Pe.basicOptionalMinutes, e);
      case 'XX':
        return De(Pe.basic, e);
      case 'XXXX':
        return De(Pe.basicOptionalSeconds, e);
      case 'XXXXX':
        return De(Pe.extendedOptionalSeconds, e);
      case 'XXX':
      default:
        return De(Pe.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : wt(e, e.getTime() - Wi(e) - i);
  }
}
class Hy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 10);
    S(this, 'incompatibleTokens', ['t', 'T', 'X']);
  }
  parse(e, s) {
    switch (s) {
      case 'x':
        return De(Pe.basicOptionalMinutes, e);
      case 'xx':
        return De(Pe.basic, e);
      case 'xxxx':
        return De(Pe.basicOptionalSeconds, e);
      case 'xxxxx':
        return De(Pe.extendedOptionalSeconds, e);
      case 'xxx':
      default:
        return De(Pe.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : wt(e, e.getTime() - Wi(e) - i);
  }
}
class jy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 40);
    S(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return dd(e);
  }
  set(e, s, i) {
    return [wt(e, i * 1e3), { timestampIsSet: !0 }];
  }
}
class Vy extends at {
  constructor() {
    super(...arguments);
    S(this, 'priority', 20);
    S(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return dd(e);
  }
  set(e, s, i) {
    return [wt(e, i), { timestampIsSet: !0 }];
  }
}
const Yy = {
    G: new ly(),
    y: new cy(),
    Y: new uy(),
    R: new dy(),
    u: new hy(),
    Q: new fy(),
    q: new py(),
    M: new gy(),
    L: new my(),
    w: new _y(),
    I: new yy(),
    d: new ky(),
    D: new My(),
    E: new Sy(),
    e: new Py(),
    c: new Dy(),
    i: new Oy(),
    a: new Ey(),
    b: new Cy(),
    B: new Ay(),
    h: new Ry(),
    H: new Ly(),
    K: new Fy(),
    k: new Iy(),
    m: new Ny(),
    s: new By(),
    S: new zy(),
    X: new Wy(),
    x: new Hy(),
    t: new jy(),
    T: new Vy(),
  },
  qy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  $y = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Uy = /^'([^]*?)'?$/,
  Xy = /''/g,
  Qy = /\S/,
  Gy = /[a-zA-Z]/;
function Ky(n, t, e, s) {
  var m, b, v, x, w, y, P, O;
  const i = () => wt((s == null ? void 0 : s.in) || e, NaN),
    r = ey(),
    a = (s == null ? void 0 : s.locale) ?? r.locale ?? id,
    o =
      (s == null ? void 0 : s.firstWeekContainsDate) ??
      ((b = (m = s == null ? void 0 : s.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : b.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((x = (v = r.locale) == null ? void 0 : v.options) == null
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
      ((O = (P = r.locale) == null ? void 0 : P.options) == null
        ? void 0
        : O.weekStartsOn) ??
      0;
  if (!t) return n ? i() : K(e, s == null ? void 0 : s.in);
  const c = { firstWeekContainsDate: o, weekStartsOn: l, locale: a },
    u = [new oy(s == null ? void 0 : s.in, e)],
    d = t
      .match($y)
      .map((k) => {
        const E = k[0];
        if (E in ua) {
          const L = ua[E];
          return L(k, a.formatLong);
        }
        return k;
      })
      .join('')
      .match(qy),
    h = [];
  for (let k of d) {
    !(s != null && s.useAdditionalWeekYearTokens) && cd(k) && da(k, t, n),
      !(s != null && s.useAdditionalDayOfYearTokens) && ld(k) && da(k, t, n);
    const E = k[0],
      L = Yy[E];
    if (L) {
      const { incompatibleTokens: R } = L;
      if (Array.isArray(R)) {
        const H = h.find((G) => R.includes(G.token) || G.token === E);
        if (H)
          throw new RangeError(
            `The format string mustn't contain \`${H.fullToken}\` and \`${k}\` at the same time`,
          );
      } else if (L.incompatibleTokens === '*' && h.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${k}\` and any other token at the same time`,
        );
      h.push({ token: E, fullToken: k });
      const C = L.run(n, k, a.match, c);
      if (!C) return i();
      u.push(C.setter), (n = C.rest);
    } else {
      if (E.match(Gy))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            E +
            '`',
        );
      if (
        (k === "''" ? (k = "'") : E === "'" && (k = Jy(k)), n.indexOf(k) === 0)
      )
        n = n.slice(k.length);
      else return i();
    }
  }
  if (n.length > 0 && Qy.test(n)) return i();
  const p = u
    .map((k) => k.priority)
    .sort((k, E) => E - k)
    .filter((k, E, L) => L.indexOf(k) === E)
    .map((k) =>
      u
        .filter((E) => E.priority === k)
        .sort((E, L) => L.subPriority - E.subPriority),
    )
    .map((k) => k[0]);
  let f = K(e, s == null ? void 0 : s.in);
  if (isNaN(+f)) return i();
  const g = {};
  for (const k of p) {
    if (!k.validate(f, c)) return i();
    const E = k.set(f, g, c);
    Array.isArray(E) ? ((f = E[0]), Object.assign(g, E[1])) : (f = E);
  }
  return f;
}
function Jy(n) {
  return n.match(Uy)[1].replace(Xy, "'");
}
function Zy(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setMinutes(0, 0, 0), e;
}
function tx(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setSeconds(0, 0), e;
}
function ex(n, t) {
  const e = K(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(0), e;
}
function nx(n, t) {
  const e = () => wt(t == null ? void 0 : t.in, NaN),
    s = (t == null ? void 0 : t.additionalDigits) ?? 2,
    i = ax(n);
  let r;
  if (i.date) {
    const c = ox(i.date, s);
    r = lx(c.restDateString, c.year);
  }
  if (!r || isNaN(+r)) return e();
  const a = +r;
  let o = 0,
    l;
  if (i.time && ((o = cx(i.time)), isNaN(o))) return e();
  if (i.timezone) {
    if (((l = ux(i.timezone)), isNaN(l))) return e();
  } else {
    const c = new Date(a + o),
      u = K(0, t == null ? void 0 : t.in);
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
  return K(a + o + l, t == null ? void 0 : t.in);
}
const ai = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  sx = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  ix =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  rx = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ax(n) {
  const t = {},
    e = n.split(ai.dateTimeDelimiter);
  let s;
  if (e.length > 2) return t;
  if (
    (/:/.test(e[0])
      ? (s = e[0])
      : ((t.date = e[0]),
        (s = e[1]),
        ai.timeZoneDelimiter.test(t.date) &&
          ((t.date = n.split(ai.timeZoneDelimiter)[0]),
          (s = n.substr(t.date.length, n.length)))),
    s)
  ) {
    const i = ai.timezone.exec(s);
    i ? ((t.time = s.replace(i[1], '')), (t.timezone = i[1])) : (t.time = s);
  }
  return t;
}
function ox(n, t) {
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
function lx(n, t) {
  if (t === null) return new Date(NaN);
  const e = n.match(sx);
  if (!e) return new Date(NaN);
  const s = !!e[4],
    i = as(e[1]),
    r = as(e[2]) - 1,
    a = as(e[3]),
    o = as(e[4]),
    l = as(e[5]) - 1;
  if (s) return gx(t, o, l) ? dx(t, o, l) : new Date(NaN);
  {
    const c = new Date(0);
    return !fx(t, r, a) || !px(t, i)
      ? new Date(NaN)
      : (c.setUTCFullYear(t, r, Math.max(i, a)), c);
  }
}
function as(n) {
  return n ? parseInt(n) : 1;
}
function cx(n) {
  const t = n.match(ix);
  if (!t) return NaN;
  const e = Ar(t[1]),
    s = Ar(t[2]),
    i = Ar(t[3]);
  return mx(e, s, i) ? e * Ws + s * zs + i * 1e3 : NaN;
}
function Ar(n) {
  return (n && parseFloat(n.replace(',', '.'))) || 0;
}
function ux(n) {
  if (n === 'Z') return 0;
  const t = n.match(rx);
  if (!t) return 0;
  const e = t[1] === '+' ? -1 : 1,
    s = parseInt(t[2]),
    i = (t[3] && parseInt(t[3])) || 0;
  return bx(s, i) ? e * (s * Ws + i * zs) : NaN;
}
function dx(n, t, e) {
  const s = new Date(0);
  s.setUTCFullYear(n, 0, 4);
  const i = s.getUTCDay() || 7,
    r = (t - 1) * 7 + e + 1 - i;
  return s.setUTCDate(s.getUTCDate() + r), s;
}
const hx = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function pd(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function fx(n, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (hx[t] || (pd(n) ? 29 : 28));
}
function px(n, t) {
  return t >= 1 && t <= (pd(n) ? 366 : 365);
}
function gx(n, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function mx(n, t, e) {
  return n === 24
    ? t === 0 && e === 0
    : e >= 0 && e < 60 && t >= 0 && t < 60 && n >= 0 && n < 25;
}
function bx(n, t) {
  return t >= 0 && t <= 59;
}
/*!
 * chartjs-adapter-date-fns v3.0.0
 * https://www.chartjs.org
 * (c) 2022 chartjs-adapter-date-fns Contributors
 * Released under the MIT license
 */ const _x = {
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
nu._date.override({
  _id: 'date-fns',
  formats: function () {
    return _x;
  },
  parse: function (n, t) {
    if (n === null || typeof n > 'u') return null;
    const e = typeof n;
    return (
      e === 'number' || n instanceof Date
        ? (n = K(n))
        : e === 'string' &&
          (typeof t == 'string'
            ? (n = Ky(n, t, new Date(), this.options))
            : (n = nx(n, this.options))),
      Ju(n) ? n.getTime() : null
    );
  },
  format: function (n, t) {
    return Z0(n, t, this.options);
  },
  add: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return Va(n, t);
      case 'second':
        return jv(n, t);
      case 'minute':
        return Wv(n, t);
      case 'hour':
        return Nv(n, t);
      case 'day':
        return dr(n, t);
      case 'week':
        return Vv(n, t);
      case 'month':
        return ja(n, t);
      case 'quarter':
        return Hv(n, t);
      case 'year':
        return Yv(n, t);
      default:
        return n;
    }
  },
  diff: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return Ya(n, t);
      case 'second':
        return Jv(n, t);
      case 'minute':
        return Qv(n, t);
      case 'hour':
        return Xv(n, t);
      case 'day':
        return Zu(n, t);
      case 'week':
        return Zv(n, t);
      case 'month':
        return nd(n, t);
      case 'quarter':
        return Kv(n, t);
      case 'year':
        return t0(n, t);
      default:
        return 0;
    }
  },
  startOf: function (n, t, e) {
    switch (t) {
      case 'second':
        return ex(n);
      case 'minute':
        return tx(n);
      case 'hour':
        return Zy(n);
      case 'day':
        return ca(n);
      case 'week':
        return Re(n);
      case 'isoWeek':
        return Re(n, { weekStartsOn: +e });
      case 'month':
        return n0(n);
      case 'quarter':
        return e0(n);
      case 'year':
        return sd(n);
      default:
        return n;
    }
  },
  endOf: function (n, t) {
    switch (t) {
      case 'second':
        return l0(n);
      case 'minute':
        return a0(n);
      case 'hour':
        return i0(n);
      case 'day':
        return td(n);
      case 'week':
        return r0(n);
      case 'month':
        return ed(n);
      case 'quarter':
        return o0(n);
      case 'year':
        return s0(n);
      default:
        return n;
    }
  },
});
var vx = W(
    '<div class="loading-state svelte-12nq1a0"><p>Loading data...</p></div>',
  ),
  yx = W(
    '<div class="error-state svelte-12nq1a0"><p class="svelte-12nq1a0"> </p></div>',
  ),
  xx = W('<canvas class="svelte-12nq1a0"></canvas>'),
  wx = W(
    '<p class="no-data-message svelte-12nq1a0">No purchase data available to display chart.</p>',
  ),
  kx = W(
    '<div class="total-summary-card svelte-12nq1a0"><p class="total-label svelte-12nq1a0">Grand Total Items Purchased</p> <p class="total-value svelte-12nq1a0"> </p></div> <div class="chart-wrapper svelte-12nq1a0"><!></div>',
    1,
  ),
  Mx = W(
    '<div class="container svelte-12nq1a0"><div class="header svelte-12nq1a0"><p class="title-text svelte-12nq1a0">Total Items Bought Analysis</p></div> <!></div>',
  );
function gd(n, t) {
  be(t, !0);
  let e = q(null),
    s = q(null),
    i = q(0),
    r = q(!0),
    a = q(''),
    o = Dt({
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
                let g = f.dataset.label || '';
                return (
                  g && (g += ': '),
                  f.parsed.y !== null &&
                    (g += f.parsed.y.toLocaleString() + ' items'),
                  g
                );
              },
            },
          },
        },
        interaction: { mode: 'index', intersect: !1 },
      },
    });
  async function l() {
    A(r, !0), A(a, '');
    try {
      const g = (
        await rt.get('http://localhost:3000/api/data/total/items/bought')
      ).data;
      A(i, g.grandTotal || 0, !0);
      const m = g.timeSeries.map((b) => ({
        x: new Date(b.datepurchase),
        y: b.total_bought_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items bought data:', f),
        A(a, 'Failed to load data. Please try again later.'),
        A(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      A(r, !1);
    }
  }
  function c() {
    if (
      _(e) &&
      (_(s) && (_(s).destroy(), A(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((g) => ({ ...g, data: [...g.data] })),
        },
      };
      A(s, new Yt(_(e), f), !0);
    }
  }
  Le(() => {
    l();
  }),
    nn(() => {
      !_(r) && _(e) && c();
    });
  var u = Mx(),
    d = T(M(u), 2);
  {
    var h = (f) => {
        var g = vx();
        z(f, g);
      },
      p = (f, g) => {
        {
          var m = (v) => {
              var x = yx(),
                w = M(x),
                y = M(w);
              it(() => N(y, _(a))), z(v, x);
            },
            b = (v) => {
              var x = kx(),
                w = Te(x),
                y = T(M(w), 2),
                P = M(y),
                O = T(w, 2),
                k = M(O);
              {
                var E = (R) => {
                    var C = xx();
                    Xn(
                      C,
                      (H) => A(e, H),
                      () => _(e),
                    ),
                      z(R, C);
                  },
                  L = (R) => {
                    var C = wx();
                    z(R, C);
                  };
                st(k, (R) => {
                  o.data.datasets[0].data.length > 0 ? R(E) : R(L, !1);
                });
              }
              it((R) => N(P, R), [() => _(i).toLocaleString()]), z(v, x);
            };
          st(
            f,
            (v) => {
              _(a) ? v(m) : v(b, !1);
            },
            g,
          );
        }
      };
    st(d, (f) => {
      _(r) ? f(h) : f(p, !1);
    });
  }
  z(n, u), _e();
}
var Sx = W(
    '<div class="loading-state svelte-12nq1a0"><p>Loading data...</p></div>',
  ),
  Px = W(
    '<div class="error-state svelte-12nq1a0"><p class="svelte-12nq1a0"> </p></div>',
  ),
  Dx = W('<canvas class="svelte-12nq1a0"></canvas>'),
  Tx = W(
    '<p class="no-data-message svelte-12nq1a0">No dispatch data available to display chart.</p>',
  ),
  Ox = W(
    '<div class="total-summary-card svelte-12nq1a0"><p class="total-label svelte-12nq1a0">Grand Total Items Dispatched</p> <p class="total-value svelte-12nq1a0"> </p></div> <div class="chart-wrapper svelte-12nq1a0"><!></div>',
    1,
  ),
  Ex = W(
    '<div class="container svelte-12nq1a0"><div class="header svelte-12nq1a0"><p class="title-text svelte-12nq1a0">Total Items Sold Analysis</p></div> <!></div>',
  );
function md(n, t) {
  be(t, !0);
  let e = q(null),
    s = q(null),
    i = q(0),
    r = q(!0),
    a = q(''),
    o = Dt({
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
                let g = f.dataset.label || '';
                return (
                  g && (g += ': '),
                  f.parsed.y !== null &&
                    (g += f.parsed.y.toLocaleString() + ' items'),
                  g
                );
              },
            },
          },
        },
        interaction: { mode: 'index', intersect: !1 },
      },
    });
  async function l() {
    A(r, !0), A(a, '');
    try {
      const g = (
        await rt.get('http://localhost:3000/api/data/total/items/sold')
      ).data;
      A(i, g.grandTotal || 0, !0);
      const m = g.timeSeries.map((b) => ({
        x: new Date(b.dateout),
        y: b.total_sold_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items sold data:', f),
        A(a, 'Failed to load data. Please try again later.'),
        A(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      A(r, !1);
    }
  }
  function c() {
    if (
      _(e) &&
      (_(s) && (_(s).destroy(), A(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((g) => ({ ...g, data: [...g.data] })),
        },
      };
      A(s, new Yt(_(e), f), !0);
    }
  }
  Le(() => {
    l();
  }),
    nn(() => {
      !_(r) && _(e) && c();
    });
  var u = Ex(),
    d = T(M(u), 2);
  {
    var h = (f) => {
        var g = Sx();
        z(f, g);
      },
      p = (f, g) => {
        {
          var m = (v) => {
              var x = Px(),
                w = M(x),
                y = M(w);
              it(() => N(y, _(a))), z(v, x);
            },
            b = (v) => {
              var x = Ox(),
                w = Te(x),
                y = T(M(w), 2),
                P = M(y),
                O = T(w, 2),
                k = M(O);
              {
                var E = (R) => {
                    var C = Dx();
                    Xn(
                      C,
                      (H) => A(e, H),
                      () => _(e),
                    ),
                      z(R, C);
                  },
                  L = (R) => {
                    var C = Tx();
                    z(R, C);
                  };
                st(k, (R) => {
                  o.data.datasets[0].data.length > 0 ? R(E) : R(L, !1);
                });
              }
              it((R) => N(P, R), [() => _(i).toLocaleString()]), z(v, x);
            };
          st(
            f,
            (v) => {
              _(a) ? v(m) : v(b, !1);
            },
            g,
          );
        }
      };
    st(d, (f) => {
      _(r) ? f(h) : f(p, !1);
    });
  }
  z(n, u), _e();
}
function Cx(n, t) {
  n.key === 'Escape' && t();
}
var Ax = W(
    '<div class="loading-state svelte-1ac4944"><p>Loading batch list...</p></div>',
  ),
  Rx = W(
    '<div class="error-state svelte-1ac4944"><p class="svelte-1ac4944"> </p></div>',
  ),
  Lx = W('<p class="no-data-message svelte-1ac4944">No batches found.</p>'),
  Fx = (n, t, e) => t(_(e).batchcode),
  Ix = (n, t, e) => t(n, _(e).batchcode),
  Nx = (n, t, e) => {
    n.stopPropagation(), t(_(e).batchcode);
  },
  Bx = W(
    '<tr role="button" tabindex="0" class="batch-row svelte-1ac4944"><td class="svelte-1ac4944"> </td><td class="svelte-1ac4944"> </td><td class="svelte-1ac4944"> </td><td class="svelte-1ac4944"> </td><td class="svelte-1ac4944"> </td><td class="svelte-1ac4944"><button type="button" class="details-button svelte-1ac4944">View Details</button></td></tr>',
  ),
  zx = W(
    '<div class="batch-list-container svelte-1ac4944"><table class="batch-table svelte-1ac4944"><thead><tr><th class="svelte-1ac4944">Batch Code</th><th class="svelte-1ac4944">Item Name</th><th class="svelte-1ac4944">Received Qty</th><th class="svelte-1ac4944">Current Stock</th><th class="svelte-1ac4944">Expiry Date</th><th class="svelte-1ac4944">Actions</th></tr></thead><tbody></tbody></table></div>',
  ),
  Wx = (n) => n.stopPropagation(),
  Hx = W(
    '<div class="loading-state svelte-1ac4944"><p>Loading batch details...</p></div>',
  ),
  jx = W(
    '<div class="error-state svelte-1ac4944"><p class="svelte-1ac4944"> </p></div>',
  ),
  Vx = W(
    '<div class="detail-item full-width svelte-1ac4944"><span class="detail-label svelte-1ac4944">Item Used For:</span> </div>',
  ),
  Yx = W(
    '<div class="detail-item full-width svelte-1ac4944"><span class="detail-label svelte-1ac4944">Description 1:</span> </div>',
  ),
  qx = W(
    '<div class="detail-item full-width svelte-1ac4944"><span class="detail-label svelte-1ac4944">Description 2:</span> </div>',
  ),
  $x = W(
    '<div class="detail-item full-width svelte-1ac4944"><span class="detail-label svelte-1ac4944">Description 3:</span> </div>',
  ),
  Ux = W(
    '<h4 class="sub-header svelte-1ac4944">Inventory Descriptions</h4> <!> <!> <!> <!>',
    1,
  ),
  Xx = W(
    '<h3 class="modal-title svelte-1ac4944" id="modal-title-id"> </h3> <div class="details-grid svelte-1ac4944"><div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Item Name:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Item Code:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Supplier:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Supplier Contact:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Date Purchased:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Expiry Date:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Requested Qty:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Received Qty:</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Current Stock (Inventory):</span> </div> <div class="detail-item svelte-1ac4944"><span class="detail-label svelte-1ac4944">Total Sold from Batch:</span> </div> <!></div>',
    1,
  ),
  Qx = W(
    '<div class="modal-backdrop svelte-1ac4944" role="dialog" aria-modal="true" aria-labelledby="modal-title-id" tabindex="-1"><div class="modal-content svelte-1ac4944" role="document"><button type="button" class="modal-close-button svelte-1ac4944" aria-label="Close modal">×</button> <!></div></div>',
  ),
  Gx = W(
    '<div class="container svelte-1ac4944"><div class="header svelte-1ac4944"><p class="title-text svelte-1ac4944">Batch Overview</p></div> <!></div> <!>',
    1,
  );
function bd(n, t) {
  be(t, !0);
  let e = q(Dt([])),
    s = q(null),
    i = q(!0),
    r = q(!1),
    a = q(''),
    o = q('');
  async function l() {
    A(i, !0), A(a, '');
    try {
      const y = await rt.get('http://localhost:3000/api/data/batches/summary');
      A(e, y.data, !0);
    } catch (y) {
      console.error('Error fetching batch summary:', y),
        A(a, 'Failed to load batch list.'),
        A(e, [], !0);
    } finally {
      A(i, !1);
    }
  }
  async function c(y) {
    if (y) {
      A(s, null), A(r, !0), A(o, '');
      try {
        const P = await rt.get(
          `http://localhost:3000/api/data/batch/details/${y}`,
        );
        A(s, P.data, !0);
      } catch (P) {
        console.error(`Error fetching details for batch ${y}:`, P),
          A(o, `Failed to load details for batch ${y}.`);
      } finally {
        A(r, !1);
      }
    }
  }
  function u(y) {
    c(y);
  }
  function d() {
    A(s, null), A(o, '');
  }
  function h(y) {
    if (!y) return 'N/A';
    try {
      return new Date(y).toLocaleDateString(void 0, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return y;
    }
  }
  function p(y, P) {
    (y.key === 'Enter' || y.key === ' ') && u(P);
  }
  Le(() => {
    l();
  });
  var f = Gx(),
    g = Te(f),
    m = T(M(g), 2);
  {
    var b = (y) => {
        var P = Ax();
        z(y, P);
      },
      v = (y, P) => {
        {
          var O = (E) => {
              var L = Rx(),
                R = M(L),
                C = M(R);
              it(() => N(C, _(a))), z(E, L);
            },
            k = (E, L) => {
              {
                var R = (H) => {
                    var G = Lx();
                    z(H, G);
                  },
                  C = (H) => {
                    var G = zx(),
                      U = M(G),
                      Y = T(M(U));
                    Ae(
                      Y,
                      21,
                      () => _(e),
                      (X) => X.batchcode,
                      (X, B) => {
                        var F = Bx();
                        (F.__click = [Fx, u, B]), (F.__keydown = [Ix, p, B]);
                        var j = M(F),
                          $ = M(j),
                          J = T(j),
                          V = M(J),
                          I = T(J),
                          Q = M(I),
                          ot = T(I),
                          ft = M(ot),
                          mt = T(ot),
                          Rt = M(mt),
                          Qt = T(mt),
                          ne = M(Qt);
                        (ne.__click = [Nx, u, B]),
                          it(
                            (Gt) => {
                              N($, _(B).batchcode),
                                N(V, _(B).itemname || 'N/A'),
                                N(Q, _(B).receivedqty),
                                N(
                                  ft,
                                  _(B).current_stock === null ||
                                    _(B).current_stock === void 0
                                    ? 'N/A (Not in Inv.)'
                                    : _(B).current_stock,
                                ),
                                N(Rt, Gt);
                            },
                            [() => h(_(B).expiry)],
                          ),
                          z(X, F);
                      },
                    ),
                      z(H, G);
                  };
                st(
                  E,
                  (H) => {
                    _(e).length === 0 ? H(R) : H(C, !1);
                  },
                  L,
                );
              }
            };
          st(
            y,
            (E) => {
              _(a) ? E(O) : E(k, !1);
            },
            P,
          );
        }
      };
    st(m, (y) => {
      _(i) ? y(b) : y(v, !1);
    });
  }
  var x = T(g, 2);
  {
    var w = (y) => {
      var P = Qx();
      (P.__click = d), (P.__keydown = [Cx, d]);
      var O = M(P);
      O.__click = [Wx];
      var k = M(O);
      k.__click = d;
      var E = T(k, 2);
      {
        var L = (C) => {
            var H = Hx();
            z(C, H);
          },
          R = (C, H) => {
            {
              var G = (Y) => {
                  var X = jx(),
                    B = M(X),
                    F = M(B);
                  it(() => N(F, _(o))), z(Y, X);
                },
                U = (Y, X) => {
                  {
                    var B = (F) => {
                      var j = Xx(),
                        $ = Te(j),
                        J = M($),
                        V = T($, 2),
                        I = M(V),
                        Q = T(M(I)),
                        ot = T(I, 2),
                        ft = T(M(ot)),
                        mt = T(ot, 2),
                        Rt = T(M(mt)),
                        Qt = T(mt, 2),
                        ne = T(M(Qt)),
                        Gt = T(Qt, 2),
                        Ht = T(M(Gt)),
                        Ot = T(Gt, 2),
                        Ct = T(M(Ot)),
                        Kt = T(Ot, 2),
                        ae = T(M(Kt)),
                        oe = T(Kt, 2),
                        le = T(M(oe)),
                        ce = T(oe, 2),
                        ue = T(M(ce)),
                        de = T(ce, 2),
                        Ue = T(M(de)),
                        cn = T(de, 2);
                      {
                        var Fe = (se) => {
                          var ye = Ux(),
                            Cn = T(Te(ye), 2);
                          {
                            var Kn = (Bt) => {
                              var he = Vx(),
                                un = T(M(he));
                              it(() => N(un, ` ${_(s).itemused ?? ''}`)),
                                z(Bt, he);
                            };
                            st(Cn, (Bt) => {
                              _(s).itemused && Bt(Kn);
                            });
                          }
                          var js = T(Cn, 2);
                          {
                            var hr = (Bt) => {
                              var he = Yx(),
                                un = T(M(he));
                              it(() => N(un, ` ${_(s).itemdesc1 ?? ''}`)),
                                z(Bt, he);
                            };
                            st(js, (Bt) => {
                              _(s).itemdesc1 && Bt(hr);
                            });
                          }
                          var Vs = T(js, 2);
                          {
                            var fr = (Bt) => {
                              var he = qx(),
                                un = T(M(he));
                              it(() => N(un, ` ${_(s).itemdesc2 ?? ''}`)),
                                z(Bt, he);
                            };
                            st(Vs, (Bt) => {
                              _(s).itemdesc2 && Bt(fr);
                            });
                          }
                          var wd = T(Vs, 2);
                          {
                            var kd = (Bt) => {
                              var he = $x(),
                                un = T(M(he));
                              it(() => N(un, ` ${_(s).itemdesc3 ?? ''}`)),
                                z(Bt, he);
                            };
                            st(wd, (Bt) => {
                              _(s).itemdesc3 && Bt(kd);
                            });
                          }
                          z(se, ye);
                        };
                        st(cn, (se) => {
                          (_(s).itemused ||
                            _(s).itemdesc1 ||
                            _(s).itemdesc2 ||
                            _(s).itemdesc3) &&
                            se(Fe);
                        });
                      }
                      it(
                        (se, ye) => {
                          N(J, `Batch Details: ${_(s).batchcode ?? ''}`),
                            N(Q, ` ${_(s).itemname ?? ''}`),
                            N(ft, ` ${_(s).itemcode ?? ''}`),
                            N(
                              Rt,
                              ` ${_(s).suppname ?? ''} (${_(s).suppcode ?? ''})`,
                            ),
                            N(ne, ` ${_(s).suppcontact ?? ''}`),
                            N(Ht, ` ${se ?? ''}`),
                            N(Ct, ` ${ye ?? ''}`),
                            N(ae, ` ${_(s).requestedqty ?? ''}`),
                            N(le, ` ${_(s).receivedqty ?? ''}`),
                            N(
                              ue,
                              ` ${(_(s).current_stock_in_inventory === null || _(s).current_stock_in_inventory === void 0 ? 'N/A' : _(s).current_stock_in_inventory) ?? ''}`,
                            ),
                            N(
                              Ue,
                              ` ${(_(s).total_sold_from_batch || 0) ?? ''}`,
                            );
                        },
                        [() => h(_(s).datepurchase), () => h(_(s).expiry)],
                      ),
                        z(F, j);
                    };
                    st(
                      Y,
                      (F) => {
                        _(s) && F(B);
                      },
                      X,
                    );
                  }
                };
              st(
                C,
                (Y) => {
                  _(o) ? Y(G) : Y(U, !1);
                },
                H,
              );
            }
          };
        st(E, (C) => {
          _(r) ? C(L) : C(R, !1);
        });
      }
      z(y, P);
    };
    st(x, (y) => {
      (_(s) || _(r)) && y(w);
    });
  }
  z(n, f), _e();
}
xc(['click', 'keydown']);
var Kx = W(
    '<div class="loading-state svelte-ze32jh"><p>Loading low stock items...</p></div>',
  ),
  Jx = W(
    '<div class="error-state svelte-ze32jh"><p class="svelte-ze32jh"> </p></div>',
  ),
  Zx = W(
    '<p class="no-data-message svelte-ze32jh">All items are currently above their defined minimum stock levels.</p>',
  ),
  tw = W(
    '<tr class="item-row"><td class="svelte-ze32jh"> </td><td class="svelte-ze32jh"> </td><td class="stock-warning svelte-ze32jh"> </td><td class="svelte-ze32jh"> </td></tr>',
  ),
  ew = W(
    '<div class="list-container svelte-ze32jh"><table class="items-table svelte-ze32jh"><thead><tr><th class="svelte-ze32jh">Item Code</th><th class="svelte-ze32jh">Item Name</th><th class="svelte-ze32jh">Current Stock</th><th class="svelte-ze32jh">Min. Stock Level</th></tr></thead><tbody></tbody></table></div>',
  ),
  nw = W(
    '<div class="container svelte-ze32jh"><div class="header svelte-ze32jh"><p class="title-text svelte-ze32jh">Low Stock Items (Below Reorder Point)</p></div> <!></div>',
  );
function _d(n, t) {
  be(t, !0);
  let e = q(Dt([])),
    s = q(!0),
    i = q('');
  async function r() {
    A(s, !0), A(i, '');
    try {
      const u = await rt.get('http://localhost:3000/api/data/lowstock/items');
      A(e, u.data, !0);
    } catch (u) {
      console.error('Error fetching low stock items:', u),
        A(i, 'Failed to load low stock items.'),
        A(e, [], !0);
    } finally {
      A(s, !1);
    }
  }
  Le(() => {
    r();
  });
  var a = nw(),
    o = T(M(a), 2);
  {
    var l = (u) => {
        var d = Kx();
        z(u, d);
      },
      c = (u, d) => {
        {
          var h = (f) => {
              var g = Jx(),
                m = M(g),
                b = M(m);
              it(() => N(b, _(i))), z(f, g);
            },
            p = (f, g) => {
              {
                var m = (v) => {
                    var x = Zx();
                    z(v, x);
                  },
                  b = (v) => {
                    var x = ew(),
                      w = M(x),
                      y = T(M(w));
                    Ae(
                      y,
                      21,
                      () => _(e),
                      (P) => P.itemcode,
                      (P, O) => {
                        var k = tw(),
                          E = M(k),
                          L = M(E),
                          R = T(E),
                          C = M(R),
                          H = T(R),
                          G = M(H),
                          U = T(H),
                          Y = M(U);
                        it(() => {
                          N(L, _(O).itemcode),
                            N(C, _(O).itemname),
                            N(G, _(O).total_current_stock),
                            N(Y, _(O).min_stock_level);
                        }),
                          z(P, k);
                      },
                    ),
                      z(v, x);
                  };
                st(
                  f,
                  (v) => {
                    _(e).length === 0 ? v(m) : v(b, !1);
                  },
                  g,
                );
              }
            };
          st(
            u,
            (f) => {
              _(i) ? f(h) : f(p, !1);
            },
            d,
          );
        }
      };
    st(o, (u) => {
      _(s) ? u(l) : u(c, !1);
    });
  }
  z(n, a), _e();
}
var sw = W(
    '<div class="loading-state svelte-vpn0sc"><p>Loading profit by item...</p></div>',
  ),
  iw = W(
    '<div class="error-state svelte-vpn0sc"><p class="svelte-vpn0sc"> </p></div>',
  ),
  rw = W(
    '<p class="no-data-message svelte-vpn0sc">No profit data by item available.</p>',
  ),
  aw = W(
    '<tr><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="profit-value svelte-vpn0sc"> </td></tr>',
  ),
  ow = W(
    '<div class="chart-container-wrapper svelte-vpn0sc"><canvas class="svelte-vpn0sc"></canvas></div> <div class="list-container small-table svelte-vpn0sc"><table class="items-table svelte-vpn0sc"><thead><tr><th class="svelte-vpn0sc">Item Name</th><th class="svelte-vpn0sc">Total Sold Qty</th><th class="svelte-vpn0sc">Avg. Purchase Price</th><th class="svelte-vpn0sc">Avg. Selling Price</th><th class="svelte-vpn0sc">Total Profit</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  lw = W(
    '<div class="loading-state svelte-vpn0sc"><p>Loading profit transactions...</p></div>',
  ),
  cw = W(
    '<div class="error-state svelte-vpn0sc"><p class="svelte-vpn0sc"> </p></div>',
  ),
  uw = W(
    '<p class="no-data-message svelte-vpn0sc">No profit transaction data available.</p>',
  ),
  dw = W(
    '<tr class="item-row"><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="svelte-vpn0sc"> </td><td class="profit-value svelte-vpn0sc"> </td></tr>',
  ),
  hw = W(
    '<div class="list-container svelte-vpn0sc"><table class="items-table svelte-vpn0sc"><thead><tr><th class="svelte-vpn0sc">Sale ID</th><th class="svelte-vpn0sc">Date</th><th class="svelte-vpn0sc">Item Name</th><th class="svelte-vpn0sc">Customer</th><th class="svelte-vpn0sc">Qty Sold</th><th class="svelte-vpn0sc">Purchase Price/Unit</th><th class="svelte-vpn0sc">Selling Price/Unit</th><th class="svelte-vpn0sc">Profit/Unit</th><th class="svelte-vpn0sc">Total Profit</th></tr></thead><tbody></tbody></table></div>',
  ),
  fw = W(
    '<div class="container svelte-vpn0sc"><div class="header svelte-vpn0sc"><p class="title-text svelte-vpn0sc">Profit Analysis</p></div> <div class="summary-card grand-total-profit-card svelte-vpn0sc"><h4 class="svelte-vpn0sc">Grand Total Profit</h4> <p class="total-value svelte-vpn0sc"> </p></div> <div class="section profit-by-item-section svelte-vpn0sc"><h3 class="section-title svelte-vpn0sc">Profit by Item</h3> <!></div> <div class="section profit-transactions-section svelte-vpn0sc"><h3 class="section-title svelte-vpn0sc">Individual Profit Transactions</h3> <!></div></div>',
  );
function vd(n, t) {
  be(t, !0);
  let e = q(Dt([])),
    s = q(Dt([])),
    i = q(0),
    r = q(!0),
    a = q(!0),
    o = q(''),
    l = q(''),
    c,
    u = q(null);
  async function d() {
    A(r, !0), A(o, '');
    try {
      const C = await rt.get('http://localhost:3000/api/data/profits/summary');
      A(e, C.data.transactions, !0), A(i, C.data.grandTotalProfit, !0);
    } catch (C) {
      console.error('Error fetching profit summary:', C),
        A(o, 'Failed to load profit transactions.'),
        A(e, [], !0),
        A(i, 0);
    } finally {
      A(r, !1);
    }
  }
  async function h() {
    A(a, !0), A(l, '');
    try {
      const C = await rt.get('http://localhost:3000/api/data/profits/byitem');
      A(s, C.data, !0);
    } catch (C) {
      console.error('Error fetching profit by item:', C),
        A(l, 'Failed to load profit by item.'),
        A(s, [], !0);
    } finally {
      A(a, !1);
    }
  }
  function p(C) {
    if (!C) return 'N/A';
    try {
      return new Date(C).toLocaleDateString(void 0, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return C;
    }
  }
  function f(C) {
    return C == null
      ? 'N/A'
      : C.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  function g() {
    if (c && _(s).length > 0) {
      _(u) && (_(u).destroy(), A(u, null));
      const C = _(s).map((U) => U.itemname),
        H = _(s).map((U) => U.total_profit_for_item),
        G = {
          labels: C,
          datasets: [
            {
              label: 'Total Profit by Item',
              data: H,
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
      A(
        u,
        new Yt(c, {
          type: 'bar',
          data: G,
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
    } else _(u) && (_(u).destroy(), A(u, null));
  }
  Le(() => {
    d(), h();
  }),
    nn(() => {
      !_(a) && c && g();
    });
  var m = fw(),
    b = T(M(m), 2),
    v = T(M(b), 2),
    x = M(v),
    w = T(b, 2),
    y = T(M(w), 2);
  {
    var P = (C) => {
        var H = sw();
        z(C, H);
      },
      O = (C, H) => {
        {
          var G = (Y) => {
              var X = iw(),
                B = M(X),
                F = M(B);
              it(() => N(F, _(l))), z(Y, X);
            },
            U = (Y, X) => {
              {
                var B = (j) => {
                    var $ = rw();
                    z(j, $);
                  },
                  F = (j) => {
                    var $ = ow(),
                      J = Te($),
                      V = M(J);
                    Xn(
                      V,
                      (ft) => (c = ft),
                      () => c,
                    );
                    var I = T(J, 2),
                      Q = M(I),
                      ot = T(M(Q));
                    Ae(
                      ot,
                      21,
                      () => _(s),
                      (ft) => ft.itemcode,
                      (ft, mt) => {
                        var Rt = aw(),
                          Qt = M(Rt),
                          ne = M(Qt),
                          Gt = T(Qt),
                          Ht = M(Gt),
                          Ot = T(Gt),
                          Ct = M(Ot),
                          Kt = T(Ot),
                          ae = M(Kt),
                          oe = T(Kt),
                          le = M(oe);
                        it(
                          (ce, ue, de) => {
                            N(ne, _(mt).itemname),
                              N(Ht, _(mt).total_quantity_sold),
                              N(Ct, ce),
                              N(ae, ue),
                              N(le, de);
                          },
                          [
                            () => f(_(mt).avg_purchase_price),
                            () => f(_(mt).avg_selling_price),
                            () => f(_(mt).total_profit_for_item),
                          ],
                        ),
                          z(ft, Rt);
                      },
                    ),
                      z(j, $);
                  };
                st(
                  Y,
                  (j) => {
                    _(s).length === 0 ? j(B) : j(F, !1);
                  },
                  X,
                );
              }
            };
          st(
            C,
            (Y) => {
              _(l) ? Y(G) : Y(U, !1);
            },
            H,
          );
        }
      };
    st(y, (C) => {
      _(a) ? C(P) : C(O, !1);
    });
  }
  var k = T(w, 2),
    E = T(M(k), 2);
  {
    var L = (C) => {
        var H = lw();
        z(C, H);
      },
      R = (C, H) => {
        {
          var G = (Y) => {
              var X = cw(),
                B = M(X),
                F = M(B);
              it(() => N(F, _(o))), z(Y, X);
            },
            U = (Y, X) => {
              {
                var B = (j) => {
                    var $ = uw();
                    z(j, $);
                  },
                  F = (j) => {
                    var $ = hw(),
                      J = M($),
                      V = T(M(J));
                    Ae(
                      V,
                      21,
                      () => _(e),
                      (I) => I.sale_id,
                      (I, Q) => {
                        var ot = dw(),
                          ft = M(ot),
                          mt = M(ft),
                          Rt = T(ft),
                          Qt = M(Rt),
                          ne = T(Rt),
                          Gt = M(ne),
                          Ht = T(ne),
                          Ot = M(Ht),
                          Ct = T(Ht),
                          Kt = M(Ct),
                          ae = T(Ct),
                          oe = M(ae),
                          le = T(ae),
                          ce = M(le),
                          ue = T(le),
                          de = M(ue),
                          Ue = T(ue),
                          cn = M(Ue);
                        it(
                          (Fe, se, ye, Cn, Kn) => {
                            N(mt, _(Q).sale_id),
                              N(Qt, Fe),
                              N(Gt, _(Q).itemname),
                              N(Ot, _(Q).custname),
                              N(Kt, _(Q).quantity_sold),
                              N(oe, se),
                              N(ce, ye),
                              N(de, Cn),
                              N(cn, Kn);
                          },
                          [
                            () => p(_(Q).sale_date),
                            () => f(_(Q).purchase_price_per_unit),
                            () => f(_(Q).selling_price_per_unit),
                            () => f(_(Q).profit_per_unit),
                            () => f(_(Q).total_profit_for_transaction),
                          ],
                        ),
                          z(I, ot);
                      },
                    ),
                      z(j, $);
                  };
                st(
                  Y,
                  (j) => {
                    _(e).length === 0 ? j(B) : j(F, !1);
                  },
                  X,
                );
              }
            };
          st(
            C,
            (Y) => {
              _(o) ? Y(G) : Y(U, !1);
            },
            H,
          );
        }
      };
    st(E, (C) => {
      _(r) ? C(L) : C(R, !1);
    });
  }
  it((C) => N(x, C), [() => f(_(i))]), z(n, m), _e();
}
var pw = W('<option> </option>'),
  gw = W(
    '<div class="loading-state svelte-1czxpiu"><p>Loading top customers...</p></div>',
  ),
  mw = W(
    '<div class="error-state svelte-1czxpiu"><p class="svelte-1czxpiu"> </p></div>',
  ),
  bw = W('<p class="no-data-message svelte-1czxpiu"> </p>'),
  _w = W(
    '<tr><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td class="svelte-1czxpiu"> </td><td> </td><td class="svelte-1czxpiu"> </td></tr>',
  ),
  vw = W(
    '<div class="chart-container-wrapper svelte-1czxpiu"><canvas class="svelte-1czxpiu"></canvas></div> <div class="list-container svelte-1czxpiu"><table class="items-table svelte-1czxpiu"><thead><tr><th class="svelte-1czxpiu">Customer Name</th><th class="svelte-1czxpiu">Total Orders</th><th class="svelte-1czxpiu">Total Quantity Purchased</th><th class="svelte-1czxpiu">Total Revenue</th><th class="svelte-1czxpiu">Total Profit</th><th class="svelte-1czxpiu">Year</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  yw = W(
    '<div class="container svelte-1czxpiu"><div class="header svelte-1czxpiu"><p class="title-text svelte-1czxpiu">Top Customers</p> <div class="controls svelte-1czxpiu"><label for="customer-metric-select" class="svelte-1czxpiu">Display by:</label> <select id="customer-metric-select" class="svelte-1czxpiu"><option>Total Profit</option><option>Total Revenue</option><option>Total Quantity Purchased</option><option>Total Orders</option></select> <label for="customer-limit-select" class="svelte-1czxpiu">Show Top:</label> <select id="customer-limit-select" class="svelte-1czxpiu"><option>3</option><option>5</option><option>10</option></select> <label for="year-select" class="svelte-1czxpiu">Year:</label> <select id="year-select" class="svelte-1czxpiu"><option>All Years</option><!></select></div></div> <!></div>',
  );
function yd(n, t) {
  be(t, !0);
  let e = q(Dt([])),
    s = q(!0),
    i = q(''),
    r,
    a = q(null),
    o = q('total_profit_from_customer'),
    l = q(5),
    c = q('all'),
    u = q(Dt([])),
    d = q(Dt([]));
  async function h() {
    A(s, !0), A(i, '');
    try {
      const F = await rt.get('http://localhost:3000/api/data/top/customers');
      A(d, F.data, !0), p(_(d));
    } catch (F) {
      console.error('Error fetching top customers:', F),
        A(i, 'Failed to load top customers.'),
        A(e, [], !0),
        A(u, [], !0),
        A(d, [], !0);
    } finally {
      A(s, !1);
    }
  }
  function p(F) {
    const j = new Set(),
      $ = {},
      J = {};
    F.forEach((I) => {
      const Q = I.sale_year;
      Q && j.add(Q),
        J[I.custname] ||
          (J[I.custname] = {
            custcode: I.custcode,
            custname: I.custname,
            total_orders: 0,
            total_quantity_purchased: 0,
            total_revenue_from_customer: 0,
            total_profit_from_customer: 0,
          }),
        (J[I.custname].total_orders += I.total_orders),
        (J[I.custname].total_quantity_purchased += I.total_quantity_purchased),
        (J[I.custname].total_revenue_from_customer +=
          I.total_revenue_from_customer),
        (J[I.custname].total_profit_from_customer +=
          I.total_profit_from_customer),
        Q &&
          ($[Q] || ($[Q] = {}),
          $[Q][I.custname] ||
            ($[Q][I.custname] = {
              custcode: I.custcode,
              custname: I.custname,
              total_orders: 0,
              total_quantity_purchased: 0,
              total_revenue_from_customer: 0,
              total_profit_from_customer: 0,
            }),
          ($[Q][I.custname].total_orders += I.total_orders),
          ($[Q][I.custname].total_quantity_purchased +=
            I.total_quantity_purchased),
          ($[Q][I.custname].total_revenue_from_customer +=
            I.total_revenue_from_customer),
          ($[Q][I.custname].total_profit_from_customer +=
            I.total_profit_from_customer));
    }),
      A(
        u,
        Array.from(j).sort((I, Q) => Q - I),
        !0,
      );
    let V = [];
    if (_(c) === 'all') V = Object.values(J);
    else {
      const I = String(_(c));
      $[I] && (V = Object.values($[I]));
    }
    A(e, V.sort((I, Q) => Q[_(o)] - I[_(o)]).slice(0, _(l)), !0);
  }
  function f() {
    return _(o) === 'total_profit_from_customer'
      ? 'Total Profit'
      : _(o) === 'total_revenue_from_customer'
        ? 'Total Revenue'
        : _(o) === 'total_quantity_purchased'
          ? 'Total Quantity Purchased'
          : _(o) === 'total_orders'
            ? 'Total Orders'
            : 'Value';
  }
  function g() {
    if (r && _(e).length > 0) {
      _(a) && (_(a).destroy(), A(a, null));
      const F = _(e).map(($) => $.custname),
        j = _(e).map(($) => $[_(o)]);
      A(
        a,
        new Yt(r, {
          type: 'bar',
          data: {
            labels: F,
            datasets: [
              {
                label: f(),
                data: j,
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
                text: `Top ${_(l)} Customers by ${f()} (${_(c) === 'all' ? 'All Years' : _(c)})`,
              },
            },
          },
        }),
        !0,
      );
    } else _(a) && (_(a).destroy(), A(a, null));
  }
  function m(F) {
    return F == null
      ? 'N/A'
      : F.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  Le(() => {
    h();
  }),
    nn(() => {
      !_(s) && _(d).length > 0
        ? (p(_(d)), g())
        : !_(s) && _(d).length === 0 && _(a) && (_(a).destroy(), A(a, null));
    });
  var b = yw(),
    v = M(b),
    x = T(M(v), 2),
    w = T(M(x), 2),
    y = M(w);
  y.value = y.__value = 'total_profit_from_customer';
  var P = T(y);
  P.value = P.__value = 'total_revenue_from_customer';
  var O = T(P);
  O.value = O.__value = 'total_quantity_purchased';
  var k = T(O);
  k.value = k.__value = 'total_orders';
  var E = T(w, 4),
    L = M(E);
  L.value = L.__value = 3;
  var R = T(L);
  R.value = R.__value = 5;
  var C = T(R);
  C.value = C.__value = 10;
  var H = T(E, 4),
    G = M(H);
  G.value = G.__value = 'all';
  var U = T(G);
  Ae(
    U,
    17,
    () => _(u),
    Ki,
    (F, j) => {
      var $ = pw(),
        J = {},
        V = M($);
      it(() => {
        J !== (J = _(j)) && ($.value = ($.__value = _(j)) ?? ''), N(V, _(j));
      }),
        z(F, $);
    },
  );
  var Y = T(v, 2);
  {
    var X = (F) => {
        var j = gw();
        z(F, j);
      },
      B = (F, j) => {
        {
          var $ = (V) => {
              var I = mw(),
                Q = M(I),
                ot = M(Q);
              it(() => N(ot, _(i))), z(V, I);
            },
            J = (V, I) => {
              {
                var Q = (ft) => {
                    var mt = bw(),
                      Rt = M(mt);
                    it(() =>
                      N(
                        Rt,
                        `No customer data available for ${(_(c) === 'all' ? 'all years' : _(c)) ?? ''}.`,
                      ),
                    ),
                      z(ft, mt);
                  },
                  ot = (ft) => {
                    var mt = vw(),
                      Rt = Te(mt),
                      Qt = M(Rt);
                    Xn(
                      Qt,
                      (Ot) => (r = Ot),
                      () => r,
                    );
                    var ne = T(Rt, 2),
                      Gt = M(ne),
                      Ht = T(M(Gt));
                    Ae(
                      Ht,
                      21,
                      () => _(e),
                      (Ot) => Ot.custcode,
                      (Ot, Ct) => {
                        var Kt = _w(),
                          ae = M(Kt),
                          oe = M(ae),
                          le = T(ae),
                          ce = M(le),
                          ue = T(le),
                          de = M(ue),
                          Ue = T(ue),
                          cn = M(Ue),
                          Fe = T(Ue);
                        let se;
                        var ye = M(Fe),
                          Cn = T(Fe),
                          Kn = M(Cn);
                        it(
                          (js, hr, Vs, fr) => {
                            N(oe, _(Ct).custname),
                              N(ce, _(Ct).total_orders),
                              N(de, js),
                              N(cn, hr),
                              (se = At(Fe, 1, 'svelte-1czxpiu', null, se, Vs)),
                              N(ye, fr),
                              N(Kn, _(c) === 'all' ? 'All' : _(c));
                          },
                          [
                            () =>
                              _(Ct).total_quantity_purchased.toLocaleString(),
                            () => m(_(Ct).total_revenue_from_customer),
                            () => ({
                              'profit-value':
                                _(Ct).total_profit_from_customer > 0,
                              'loss-value':
                                _(Ct).total_profit_from_customer < 0,
                            }),
                            () => m(_(Ct).total_profit_from_customer),
                          ],
                        ),
                          z(Ot, Kt);
                      },
                    ),
                      z(ft, mt);
                  };
                st(
                  V,
                  (ft) => {
                    _(e).length === 0 ? ft(Q) : ft(ot, !1);
                  },
                  I,
                );
              }
            };
          st(
            F,
            (V) => {
              _(i) ? V($) : V(J, !1);
            },
            j,
          );
        }
      };
    st(Y, (F) => {
      _(s) ? F(X) : F(B, !1);
    });
  }
  Bn(
    w,
    () => _(o),
    (F) => A(o, F),
  ),
    Bn(
      E,
      () => _(l),
      (F) => A(l, F),
    ),
    Bn(
      H,
      () => _(c),
      (F) => A(c, F),
    ),
    z(n, b),
    _e();
}
var xw = W('<option> </option>'),
  ww = W(
    '<div class="loading-state svelte-gbyltb"><p>Loading top suppliers...</p></div>',
  ),
  kw = W(
    '<div class="error-state svelte-gbyltb"><p class="svelte-gbyltb"> </p></div>',
  ),
  Mw = W('<p class="no-data-message svelte-gbyltb"> </p>'),
  Sw = W(
    '<tr><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td><td class="svelte-gbyltb"> </td></tr>',
  ),
  Pw = W(
    '<div class="chart-container-wrapper svelte-gbyltb"><canvas class="svelte-gbyltb"></canvas></div> <div class="list-container svelte-gbyltb"><table class="items-table svelte-gbyltb"><thead><tr><th class="svelte-gbyltb">Supplier Name</th><th class="svelte-gbyltb">Total Batches</th><th class="svelte-gbyltb">Total Quantity Supplied</th><th class="svelte-gbyltb">Total Purchase Value</th><th class="svelte-gbyltb">Year</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  Dw = W(
    '<div class="container svelte-gbyltb"><div class="header svelte-gbyltb"><p class="title-text svelte-gbyltb">Top Suppliers</p> <div class="controls svelte-gbyltb"><label for="supplier-metric-select" class="svelte-gbyltb">Display by:</label> <select id="supplier-metric-select" class="svelte-gbyltb"><option>Total Purchase Value</option><option>Total Quantity Supplied</option><option>Total Batches Supplied</option></select> <label for="supplier-limit-select" class="svelte-gbyltb">Show Top:</label> <select id="supplier-limit-select" class="svelte-gbyltb"><option>3</option><option>5</option><option>10</option></select> <label for="year-select" class="svelte-gbyltb">Year:</label> <select id="year-select" class="svelte-gbyltb"><option>All Years</option><!></select></div></div> <!></div>',
  );
function xd(n, t) {
  be(t, !0);
  let e = q(Dt([])),
    s = q(!0),
    i = q(''),
    r,
    a = q(null),
    o = q('total_purchase_value'),
    l = q(5),
    c = q('all'),
    u = q(Dt([])),
    d = q(Dt([]));
  async function h() {
    A(s, !0), A(i, '');
    try {
      const B = await rt.get('http://localhost:3000/api/data/top/suppliers');
      A(d, B.data, !0), p(_(d));
    } catch (B) {
      console.error('Error fetching top suppliers:', B),
        A(i, 'Failed to load top suppliers.'),
        A(e, [], !0),
        A(u, [], !0),
        A(d, [], !0);
    } finally {
      A(s, !1);
    }
  }
  function p(B) {
    const F = new Set(),
      j = {},
      $ = {};
    B.forEach((V) => {
      const I = V.purchase_year;
      F.add(I),
        $[V.suppname] ||
          ($[V.suppname] = {
            suppcode: V.suppcode,
            suppname: V.suppname,
            total_purchase_value: 0,
            total_quantity_supplied: 0,
            total_batches_supplied: 0,
          }),
        ($[V.suppname].total_purchase_value += V.total_purchase_value),
        ($[V.suppname].total_quantity_supplied += V.total_quantity_supplied),
        ($[V.suppname].total_batches_supplied += V.total_batches_supplied),
        j[I] || (j[I] = {}),
        j[I][V.suppname] ||
          (j[I][V.suppname] = {
            suppcode: V.suppcode,
            suppname: V.suppname,
            total_purchase_value: 0,
            total_quantity_supplied: 0,
            total_batches_supplied: 0,
          }),
        (j[I][V.suppname].total_purchase_value += V.total_purchase_value),
        (j[I][V.suppname].total_quantity_supplied += V.total_quantity_supplied),
        (j[I][V.suppname].total_batches_supplied += V.total_batches_supplied);
    }),
      A(
        u,
        Array.from(F).sort((V, I) => I - V),
        !0,
      );
    let J = [];
    if (_(c) === 'all') J = Object.values($);
    else {
      const V = String(_(c));
      j[V] && (J = Object.values(j[V]));
    }
    A(e, J.sort((V, I) => I[_(o)] - V[_(o)]).slice(0, _(l)), !0);
  }
  function f() {
    return _(o) === 'total_purchase_value'
      ? 'Total Purchase Value'
      : _(o) === 'total_quantity_supplied'
        ? 'Total Quantity Supplied'
        : _(o) === 'total_batches_supplied'
          ? 'Total Batches Supplied'
          : 'Value';
  }
  function g() {
    if (r && _(e).length > 0) {
      _(a) && (_(a).destroy(), A(a, null));
      const B = _(e).map((j) => j.suppname),
        F = _(e).map((j) => j[_(o)]);
      A(
        a,
        new Yt(r, {
          type: 'bar',
          data: {
            labels: B,
            datasets: [
              {
                label: f(),
                data: F,
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
                text: `Top ${_(l)} Suppliers by ${f()} (${_(c) === 'all' ? 'All Years' : _(c)})`,
              },
            },
          },
        }),
        !0,
      );
    } else _(a) && (_(a).destroy(), A(a, null));
  }
  function m(B) {
    return B == null
      ? 'N/A'
      : B.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  Le(() => {
    h();
  }),
    nn(() => {
      !_(s) && _(d).length > 0
        ? (p(_(d)), g())
        : !_(s) && _(d).length === 0 && _(a) && (_(a).destroy(), A(a, null));
    });
  var b = Dw(),
    v = M(b),
    x = T(M(v), 2),
    w = T(M(x), 2),
    y = M(w);
  y.value = y.__value = 'total_purchase_value';
  var P = T(y);
  P.value = P.__value = 'total_quantity_supplied';
  var O = T(P);
  O.value = O.__value = 'total_batches_supplied';
  var k = T(w, 4),
    E = M(k);
  E.value = E.__value = 3;
  var L = T(E);
  L.value = L.__value = 5;
  var R = T(L);
  R.value = R.__value = 10;
  var C = T(k, 4),
    H = M(C);
  H.value = H.__value = 'all';
  var G = T(H);
  Ae(
    G,
    17,
    () => _(u),
    Ki,
    (B, F) => {
      var j = xw(),
        $ = {},
        J = M(j);
      it(() => {
        $ !== ($ = _(F)) && (j.value = (j.__value = _(F)) ?? ''), N(J, _(F));
      }),
        z(B, j);
    },
  );
  var U = T(v, 2);
  {
    var Y = (B) => {
        var F = ww();
        z(B, F);
      },
      X = (B, F) => {
        {
          var j = (J) => {
              var V = kw(),
                I = M(V),
                Q = M(I);
              it(() => N(Q, _(i))), z(J, V);
            },
            $ = (J, V) => {
              {
                var I = (ot) => {
                    var ft = Mw(),
                      mt = M(ft);
                    it(() =>
                      N(
                        mt,
                        `No supplier data available for ${(_(c) === 'all' ? 'all years' : _(c)) ?? ''}.`,
                      ),
                    ),
                      z(ot, ft);
                  },
                  Q = (ot) => {
                    var ft = Pw(),
                      mt = Te(ft),
                      Rt = M(mt);
                    Xn(
                      Rt,
                      (Ht) => (r = Ht),
                      () => r,
                    );
                    var Qt = T(mt, 2),
                      ne = M(Qt),
                      Gt = T(M(ne));
                    Ae(
                      Gt,
                      21,
                      () => _(e),
                      (Ht) => Ht.suppcode,
                      (Ht, Ot) => {
                        var Ct = Sw(),
                          Kt = M(Ct),
                          ae = M(Kt),
                          oe = T(Kt),
                          le = M(oe),
                          ce = T(oe),
                          ue = M(ce),
                          de = T(ce),
                          Ue = M(de),
                          cn = T(de),
                          Fe = M(cn);
                        it(
                          (se, ye) => {
                            N(ae, _(Ot).suppname),
                              N(le, _(Ot).total_batches_supplied),
                              N(ue, se),
                              N(Ue, ye),
                              N(Fe, _(c) === 'all' ? 'All' : _(c));
                          },
                          [
                            () =>
                              _(Ot).total_quantity_supplied.toLocaleString(),
                            () => m(_(Ot).total_purchase_value),
                          ],
                        ),
                          z(Ht, Ct);
                      },
                    ),
                      z(ot, ft);
                  };
                st(
                  J,
                  (ot) => {
                    _(e).length === 0 ? ot(I) : ot(Q, !1);
                  },
                  V,
                );
              }
            };
          st(
            B,
            (J) => {
              _(i) ? J(j) : J($, !1);
            },
            F,
          );
        }
      };
    st(U, (B) => {
      _(s) ? B(Y) : B(X, !1);
    });
  }
  Bn(
    w,
    () => _(o),
    (B) => A(o, B),
  ),
    Bn(
      k,
      () => _(l),
      (B) => A(l, B),
    ),
    Bn(
      C,
      () => _(c),
      (B) => A(c, B),
    ),
    z(n, b),
    _e();
}
var Tw = (n, t) => t(la),
  Ow = (n, t) => t(Xu),
  Ew = (n, t) => t(gd),
  Cw = (n, t) => t(md),
  Aw = (n, t) => t(bd),
  Rw = (n, t) => t(_d),
  Lw = (n, t) => t(vd),
  Fw = (n, t) => t(yd),
  Iw = (n, t) => t(xd),
  Nw = W(
    '<!> <div class="parent svelte-g1sdvk"><div class="div1 svelte-g1sdvk"><p class="text-internal svelte-g1sdvk">Dashboard</p></div> <div class="div2 svelte-g1sdvk"><div class="option svelte-g1sdvk"><p class="text-internal svelte-g1sdvk">Select</p> <div class="selector svelte-g1sdvk"><button>Top Selling items</button> <button>Expired items</button> <button>Total Items Bought</button> <button>Total Items Sold</button> <button>Batch Details</button> <button>Low Stock Items</button> <button>Profits</button> <button>Top Customers</button> <button>Top Suppliers</button></div></div></div> <div class="div4 svelte-g1sdvk"><div id="op4" class="option svelte-g1sdvk"><!></div></div></div>',
    1,
  );
function Bw(n) {
  let t = q(Dt(la)),
    e = (P) => {
      A(t, P, !0);
    },
    s = (P) => (P == _(t) ? 'yes' : 'no');
  var i = Nw(),
    r = Te(i);
  $h(r, {});
  var a = T(r, 2),
    o = T(M(a), 2),
    l = M(o),
    c = T(M(l), 2),
    u = M(c);
  u.__click = [Tw, e];
  var d = T(u, 2);
  d.__click = [Ow, e];
  var h = T(d, 2);
  h.__click = [Ew, e];
  var p = T(h, 2);
  p.__click = [Cw, e];
  var f = T(p, 2);
  f.__click = [Aw, e];
  var g = T(f, 2);
  g.__click = [Rw, e];
  var m = T(g, 2);
  m.__click = [Lw, e];
  var b = T(m, 2);
  b.__click = [Fw, e];
  var v = T(b, 2);
  v.__click = [Iw, e];
  var x = T(o, 2),
    w = M(x),
    y = M(w);
  Ih(
    y,
    () => _(t),
    (P, O) => {
      O(P, {});
    },
  ),
    it(
      (P, O, k, E, L, R, C, H, G) => {
        At(u, 1, P, 'svelte-g1sdvk'),
          At(d, 1, O, 'svelte-g1sdvk'),
          At(h, 1, k, 'svelte-g1sdvk'),
          At(p, 1, E, 'svelte-g1sdvk'),
          At(f, 1, L, 'svelte-g1sdvk'),
          At(g, 1, R, 'svelte-g1sdvk'),
          At(m, 1, C, 'svelte-g1sdvk'),
          At(b, 1, H, 'svelte-g1sdvk'),
          At(v, 1, G, 'svelte-g1sdvk');
      },
      [
        () => we(s(la)),
        () => we(s(Xu)),
        () => we(s(gd)),
        () => we(s(md)),
        () => we(s(bd)),
        () => we(s(_d)),
        () => we(s(vd)),
        () => we(s(yd)),
        () => we(s(xd)),
      ],
    ),
    z(n, i);
}
xc(['click']);
Oh(Bw, { target: document.getElementById('app') });
