var Md = Object.defineProperty;
var Sd = (n, t, e) =>
  t in n
    ? Md(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var M = (n, t, e) => Sd(n, typeof t != 'symbol' ? t + '' : t, e);
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
const Ya = !1;
var Bi = Array.isArray,
  Pd = Array.prototype.indexOf,
  oa = Array.from,
  Dd = Object.defineProperty,
  An = Object.getOwnPropertyDescriptor,
  Td = Object.getOwnPropertyDescriptors,
  Od = Object.prototype,
  Ed = Array.prototype,
  $l = Object.getPrototypeOf,
  $a = Object.isExtensible;
function Cd(n) {
  return n();
}
function Tr(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
const le = 2,
  Ul = 4,
  zi = 8,
  la = 16,
  ze = 32,
  Wn = 64,
  bi = 128,
  Jt = 256,
  _i = 512,
  Ut = 1024,
  ke = 2048,
  kn = 4096,
  Ne = 8192,
  Wi = 16384,
  Ad = 32768,
  Hi = 65536,
  Rd = 1 << 17,
  Ld = 1 << 19,
  Xl = 1 << 20,
  Or = 1 << 21,
  Be = Symbol('$state'),
  Fd = Symbol('legacy props');
function Ql(n) {
  return n === this.v;
}
function Id(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == 'object') || typeof n == 'function';
}
function Gl(n) {
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
function qd() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Hn = !1,
  Yd = !1;
function $d() {
  Hn = !0;
}
const ca = 1,
  ua = 2,
  Kl = 4,
  Ud = 8,
  Xd = 16,
  Qd = 2,
  Gd = 1,
  Kd = 2,
  jt = Symbol();
function Jd(n) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let _t = null;
function Ua(n) {
  _t = n;
}
function ue(n, t = !1, e) {
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
  Hn && !t && (_t.l = { s: null, u: null, r1: [], r2: bs(!1) }),
    ah(() => {
      s.d = !0;
    });
}
function de(n) {
  const t = _t;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var e = at,
        s = rt;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var r = a[i];
          Ze(r.effect), Se(r.reaction), Ts(r.fn);
        }
      } finally {
        Ze(e), Se(s);
      }
    }
    (_t = t.p), (t.m = !0);
  }
  return {};
}
function ji() {
  return !Hn || (_t !== null && _t.l === null);
}
function Nt(n) {
  if (typeof n != 'object' || n === null || Be in n) return n;
  const t = $l(n);
  if (t !== Od && t !== Ed) return n;
  var e = new Map(),
    s = Bi(n),
    i = j(0),
    r = rt,
    a = (o) => {
      var l = rt;
      Se(r);
      var c = o();
      return Se(l), c;
    };
  return (
    s && e.set('length', j(n.length)),
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
            ? ((u = a(() => j(c.value))), e.set(l, u))
            : R(
                u,
                a(() => Nt(c.value)),
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
              a(() => j(jt)),
            ),
            cr(i));
        else {
          if (s && typeof l == 'string') {
            var u = e.get('length'),
              d = Number(l);
            Number.isInteger(d) && d < u.v && R(u, d);
          }
          R(c, jt), cr(i);
        }
        return !0;
      },
      get(o, l, c) {
        var g;
        if (l === Be) return n;
        var u = e.get(l),
          d = l in o;
        if (
          (u === void 0 &&
            (!d || ((g = An(o, l)) != null && g.writable)) &&
            ((u = a(() => j(Nt(d ? o[l] : jt)))), e.set(l, u)),
          u !== void 0)
        ) {
          var h = y(u);
          return h === jt ? void 0 : h;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && 'value' in c) {
          var u = e.get(l);
          u && (c.value = y(u));
        } else if (c === void 0) {
          var d = e.get(l),
            h = d == null ? void 0 : d.v;
          if (d !== void 0 && h !== jt)
            return { enumerable: !0, configurable: !0, value: h, writable: !0 };
        }
        return c;
      },
      has(o, l) {
        var h;
        if (l === Be) return !0;
        var c = e.get(l),
          u = (c !== void 0 && c.v !== jt) || Reflect.has(o, l);
        if (
          c !== void 0 ||
          (at !== null && (!u || ((h = An(o, l)) != null && h.writable)))
        ) {
          c === void 0 && ((c = a(() => j(u ? Nt(o[l]) : jt))), e.set(l, c));
          var d = y(c);
          if (d === jt) return !1;
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
              ? R(f, jt)
              : g in o && ((f = a(() => j(jt))), e.set(g + '', f));
          }
        d === void 0
          ? (!h || ((_ = An(o, l)) != null && _.writable)) &&
            ((d = a(() => j(void 0))),
            R(
              d,
              a(() => Nt(c)),
            ),
            e.set(l, d))
          : ((h = d.v !== jt),
            R(
              d,
              a(() => Nt(c)),
            ));
        var p = Reflect.getOwnPropertyDescriptor(o, l);
        if ((p != null && p.set && p.set.call(u, c), !h)) {
          if (s && typeof l == 'string') {
            var m = e.get('length'),
              b = Number(l);
            Number.isInteger(b) && b >= m.v && R(m, b + 1);
          }
          cr(i);
        }
        return !0;
      },
      ownKeys(o) {
        y(i);
        var l = Reflect.ownKeys(o).filter((d) => {
          var h = e.get(d);
          return h === void 0 || h.v !== jt;
        });
        for (var [c, u] of e) u.v !== jt && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Vd();
      },
    })
  );
}
function cr(n, t = 1) {
  R(n, n.v + t);
}
function Xa(n) {
  try {
    if (n !== null && typeof n == 'object' && Be in n) return n[Be];
  } catch {}
  return n;
}
function Zd(n, t) {
  return Object.is(Xa(n), Xa(t));
}
function da(n) {
  var t = le | ke,
    e = rt !== null && (rt.f & le) !== 0 ? rt : null;
  return (
    at === null || (e !== null && (e.f & Jt) !== 0) ? (t |= Jt) : (at.f |= Xl),
    {
      ctx: _t,
      deps: null,
      effects: null,
      equals: Ql,
      f: t,
      fn: n,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? at,
    }
  );
}
function ha(n) {
  const t = da(n);
  return (t.equals = Gl), t;
}
function Jl(n) {
  var t = n.effects;
  if (t !== null) {
    n.effects = null;
    for (var e = 0; e < t.length; e += 1) Je(t[e]);
  }
}
function th(n) {
  for (var t = n.parent; t !== null; ) {
    if ((t.f & le) === 0) return t;
    t = t.parent;
  }
  return null;
}
function Zl(n) {
  var t,
    e = at;
  Ze(th(n));
  try {
    Jl(n), (t = mc(n));
  } finally {
    Ze(e);
  }
  return t;
}
function tc(n) {
  var t = Zl(n),
    e = ($e || (n.f & Jt) !== 0) && n.deps !== null ? kn : Ut;
  ce(n, e), n.equals(t) || ((n.v = t), (n.wv = gc()));
}
const ms = new Map();
function bs(n, t) {
  var e = { f: 0, v: n, reactions: null, equals: Ql, rv: 0, wv: 0 };
  return e;
}
function j(n, t) {
  const e = bs(n);
  return hh(e), e;
}
function Rn(n, t = !1) {
  var s;
  const e = bs(n);
  return (
    t || (e.equals = Gl),
    Hn && _t !== null && _t.l !== null && ((s = _t.l).s ?? (s.s = [])).push(e),
    e
  );
}
function R(n, t, e = !1) {
  rt !== null &&
    !_e &&
    ji() &&
    (rt.f & (le | la)) !== 0 &&
    !(Bt != null && Bt.includes(n)) &&
    qd();
  let s = e ? Nt(t) : t;
  return Er(n, s);
}
function Er(n, t) {
  if (!n.equals(t)) {
    var e = n.v;
    Os ? ms.set(n, t) : ms.set(n, e),
      (n.v = t),
      (n.f & le) !== 0 &&
        ((n.f & ke) !== 0 && Zl(n), ce(n, (n.f & Jt) === 0 ? Ut : kn)),
      (n.wv = gc()),
      ec(n, ke),
      ji() &&
        at !== null &&
        (at.f & Ut) !== 0 &&
        (at.f & (ze | Wn)) === 0 &&
        (ne === null ? fh([n]) : ne.push(n));
  }
  return t;
}
function ec(n, t) {
  var e = n.reactions;
  if (e !== null)
    for (var s = ji(), i = e.length, r = 0; r < i; r++) {
      var a = e[r],
        o = a.f;
      (o & ke) === 0 &&
        ((!s && a === at) ||
          (ce(a, t),
          (o & (Ut | Jt)) !== 0 && ((o & le) !== 0 ? ec(a, kn) : $i(a))));
    }
}
function eh() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let nh = !1;
var Qa, nc, sc, ic;
function sh() {
  if (Qa === void 0) {
    (Qa = window), (nc = /Firefox/.test(navigator.userAgent));
    var n = Element.prototype,
      t = Node.prototype,
      e = Text.prototype;
    (sc = An(t, 'firstChild').get),
      (ic = An(t, 'nextSibling').get),
      $a(n) &&
        ((n.__click = void 0),
        (n.__className = void 0),
        (n.__attributes = null),
        (n.__style = void 0),
        (n.__e = void 0)),
      $a(e) && (e.__t = void 0);
  }
}
function fa(n = '') {
  return document.createTextNode(n);
}
function vi(n) {
  return sc.call(n);
}
function Vi(n) {
  return ic.call(n);
}
function S(n, t) {
  return vi(n);
}
function xe(n, t) {
  {
    var e = vi(n);
    return e instanceof Comment && e.data === '' ? Vi(e) : e;
  }
}
function E(n, t = 1, e = !1) {
  let s = n;
  for (; t--; ) s = Vi(s);
  return s;
}
function ih(n) {
  n.textContent = '';
}
function rc(n) {
  at === null && rt === null && zd(),
    rt !== null && (rt.f & Jt) !== 0 && at === null && Bd(),
    Os && Nd();
}
function rh(n, t) {
  var e = t.last;
  e === null
    ? (t.last = t.first = n)
    : ((e.next = n), (n.prev = e), (t.last = n));
}
function jn(n, t, e, s = !0) {
  var i = at,
    r = {
      ctx: _t,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: n | ke,
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
      pa(r), (r.f |= Ad);
    } catch (l) {
      throw (Je(r), l);
    }
  else t !== null && $i(r);
  var a =
    e &&
    r.deps === null &&
    r.first === null &&
    r.nodes_start === null &&
    r.teardown === null &&
    (r.f & (Xl | bi)) === 0;
  if (!a && s && (i !== null && rh(r, i), rt !== null && (rt.f & le) !== 0)) {
    var o = rt;
    (o.effects ?? (o.effects = [])).push(r);
  }
  return r;
}
function ah(n) {
  const t = jn(zi, null, !1);
  return ce(t, Ut), (t.teardown = n), t;
}
function Me(n) {
  rc();
  var t = at !== null && (at.f & ze) !== 0 && _t !== null && !_t.m;
  if (t) {
    var e = _t;
    (e.e ?? (e.e = [])).push({ fn: n, effect: at, reaction: rt });
  } else {
    var s = Ts(n);
    return s;
  }
}
function oh(n) {
  return rc(), ac(n);
}
function lh(n) {
  const t = jn(Wn, n, !0);
  return (e = {}) =>
    new Promise((s) => {
      e.outro
        ? _s(t, () => {
            Je(t), s(void 0);
          })
        : (Je(t), s(void 0));
    });
}
function Ts(n) {
  return jn(Ul, n, !1);
}
function ac(n) {
  return jn(zi, n, !0);
}
function st(n, t = [], e = da) {
  const s = t.map(e);
  return qi(() => n(...s.map(y)));
}
function qi(n, t = 0) {
  return jn(zi | la | t, n, !0);
}
function Fn(n, t = !0) {
  return jn(zi | ze, n, !0, t);
}
function oc(n) {
  var t = n.teardown;
  if (t !== null) {
    const e = Os,
      s = rt;
    Ga(!0), Se(null);
    try {
      t.call(null);
    } finally {
      Ga(e), Se(s);
    }
  }
}
function lc(n, t = !1) {
  var e = n.first;
  for (n.first = n.last = null; e !== null; ) {
    var s = e.next;
    (e.f & Wn) !== 0 ? (e.parent = null) : Je(e, t), (e = s);
  }
}
function ch(n) {
  for (var t = n.first; t !== null; ) {
    var e = t.next;
    (t.f & ze) === 0 && Je(t), (t = e);
  }
}
function Je(n, t = !0) {
  var e = !1;
  (t || (n.f & Ld) !== 0) &&
    n.nodes_start !== null &&
    (uh(n.nodes_start, n.nodes_end), (e = !0)),
    lc(n, t && !e),
    Mi(n, 0),
    ce(n, Wi);
  var s = n.transitions;
  if (s !== null) for (const r of s) r.stop();
  oc(n);
  var i = n.parent;
  i !== null && i.first !== null && cc(n),
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
    var e = n === t ? null : Vi(n);
    n.remove(), (n = e);
  }
}
function cc(n) {
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
  ga(n, e, !0),
    uc(e, () => {
      Je(n), t && t();
    });
}
function uc(n, t) {
  var e = n.length;
  if (e > 0) {
    var s = () => --e || t();
    for (var i of n) i.out(s);
  } else t();
}
function ga(n, t, e) {
  if ((n.f & Ne) === 0) {
    if (((n.f ^= Ne), n.transitions !== null))
      for (const a of n.transitions) (a.is_global || e) && t.push(a);
    for (var s = n.first; s !== null; ) {
      var i = s.next,
        r = (s.f & Hi) !== 0 || (s.f & ze) !== 0;
      ga(s, t, r ? e : !1), (s = i);
    }
  }
}
function yi(n) {
  dc(n, !0);
}
function dc(n, t) {
  if ((n.f & Ne) !== 0) {
    (n.f ^= Ne), (n.f & Ut) === 0 && (n.f ^= Ut), Es(n) && (ce(n, ke), $i(n));
    for (var e = n.first; e !== null; ) {
      var s = e.next,
        i = (e.f & Hi) !== 0 || (e.f & ze) !== 0;
      dc(e, i ? t : !1), (e = s);
    }
    if (n.transitions !== null)
      for (const r of n.transitions) (r.is_global || t) && r.in();
  }
}
let xi = [];
function dh() {
  var n = xi;
  (xi = []), Tr(n);
}
function hc(n) {
  xi.length === 0 && queueMicrotask(dh), xi.push(n);
}
let si = !1,
  Cr = !1,
  wi = null,
  mn = !1,
  Os = !1;
function Ga(n) {
  Os = n;
}
let ii = [];
let rt = null,
  _e = !1;
function Se(n) {
  rt = n;
}
let at = null;
function Ze(n) {
  at = n;
}
let Bt = null;
function hh(n) {
  rt !== null && rt.f & Or && (Bt === null ? (Bt = [n]) : Bt.push(n));
}
let It = null,
  Qt = 0,
  ne = null;
function fh(n) {
  ne = n;
}
let fc = 1,
  ki = 0,
  $e = !1;
function gc() {
  return ++fc;
}
function Es(n) {
  var d;
  var t = n.f;
  if ((t & ke) !== 0) return !0;
  if ((t & kn) !== 0) {
    var e = n.deps,
      s = (t & Jt) !== 0;
    if (e !== null) {
      var i,
        r,
        a = (t & _i) !== 0,
        o = s && at !== null && !$e,
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
        a && (c.f ^= _i), o && u !== null && (u.f & Jt) === 0 && (c.f ^= Jt);
      }
      for (i = 0; i < l; i++)
        if (((r = e[i]), Es(r) && tc(r), r.wv > n.wv)) return !0;
    }
    (!s || (at !== null && !$e)) && ce(n, Ut);
  }
  return !1;
}
function gh(n, t) {
  for (var e = t; e !== null; ) {
    if ((e.f & bi) !== 0)
      try {
        e.fn(n);
        return;
      } catch {
        e.f ^= bi;
      }
    e = e.parent;
  }
  throw ((si = !1), n);
}
function Ka(n) {
  return (n.f & Wi) === 0 && (n.parent === null || (n.parent.f & bi) === 0);
}
function Yi(n, t, e, s) {
  if (si) {
    if ((e === null && (si = !1), Ka(t))) throw n;
    return;
  }
  if ((e !== null && (si = !0), gh(n, t), Ka(t))) throw n;
}
function pc(n, t, e = !0) {
  var s = n.reactions;
  if (s !== null)
    for (var i = 0; i < s.length; i++) {
      var r = s[i];
      (Bt != null && Bt.includes(n)) ||
        ((r.f & le) !== 0
          ? pc(r, t, !1)
          : t === r && (e ? ce(r, ke) : (r.f & Ut) !== 0 && ce(r, kn), $i(r)));
    }
}
function mc(n) {
  var g;
  var t = It,
    e = Qt,
    s = ne,
    i = rt,
    r = $e,
    a = Bt,
    o = _t,
    l = _e,
    c = n.f;
  (It = null),
    (Qt = 0),
    (ne = null),
    ($e = (c & Jt) !== 0 && (_e || !mn || rt === null)),
    (rt = (c & (ze | Wn)) === 0 ? n : null),
    (Bt = null),
    Ua(n.ctx),
    (_e = !1),
    ki++,
    (n.f |= Or);
  try {
    var u = (0, n.fn)(),
      d = n.deps;
    if (It !== null) {
      var h;
      if ((Mi(n, Qt), d !== null && Qt > 0))
        for (d.length = Qt + It.length, h = 0; h < It.length; h++)
          d[Qt + h] = It[h];
      else n.deps = d = It;
      if (!$e)
        for (h = Qt; h < d.length; h++)
          ((g = d[h]).reactions ?? (g.reactions = [])).push(n);
    } else d !== null && Qt < d.length && (Mi(n, Qt), (d.length = Qt));
    if (
      ji() &&
      ne !== null &&
      !_e &&
      d !== null &&
      (n.f & (le | kn | ke)) === 0
    )
      for (h = 0; h < ne.length; h++) pc(ne[h], n);
    return (
      i !== null &&
        i !== n &&
        (ki++, ne !== null && (s === null ? (s = ne) : s.push(...ne))),
      u
    );
  } finally {
    (It = t),
      (Qt = e),
      (ne = s),
      (rt = i),
      ($e = r),
      (Bt = a),
      Ua(o),
      (_e = l),
      (n.f ^= Or);
  }
}
function ph(n, t) {
  let e = t.reactions;
  if (e !== null) {
    var s = Pd.call(e, n);
    if (s !== -1) {
      var i = e.length - 1;
      i === 0 ? (e = t.reactions = null) : ((e[s] = e[i]), e.pop());
    }
  }
  e === null &&
    (t.f & le) !== 0 &&
    (It === null || !It.includes(t)) &&
    (ce(t, kn), (t.f & (Jt | _i)) === 0 && (t.f ^= _i), Jl(t), Mi(t, 0));
}
function Mi(n, t) {
  var e = n.deps;
  if (e !== null) for (var s = t; s < e.length; s++) ph(n, e[s]);
}
function pa(n) {
  var t = n.f;
  if ((t & Wi) === 0) {
    ce(n, Ut);
    var e = at,
      s = _t,
      i = mn;
    (at = n), (mn = !0);
    try {
      (t & la) !== 0 ? ch(n) : lc(n), oc(n);
      var r = mc(n);
      (n.teardown = typeof r == 'function' ? r : null), (n.wv = fc);
      var a = n.deps,
        o;
      Ya && Yd && n.f & ke;
    } catch (l) {
      Yi(l, n, e, s || n.ctx);
    } finally {
      (mn = i), (at = e);
    }
  }
}
function mh() {
  try {
    Wd();
  } catch (n) {
    if (wi !== null) Yi(n, wi, null);
    else throw n;
  }
}
function bh() {
  var n = mn;
  try {
    var t = 0;
    for (mn = !0; ii.length > 0; ) {
      t++ > 1e3 && mh();
      var e = ii,
        s = e.length;
      ii = [];
      for (var i = 0; i < s; i++) {
        var r = vh(e[i]);
        _h(r);
      }
      ms.clear();
    }
  } finally {
    (Cr = !1), (mn = n), (wi = null);
  }
}
function _h(n) {
  var t = n.length;
  if (t !== 0)
    for (var e = 0; e < t; e++) {
      var s = n[e];
      if ((s.f & (Wi | Ne)) === 0)
        try {
          Es(s) &&
            (pa(s),
            s.deps === null &&
              s.first === null &&
              s.nodes_start === null &&
              (s.teardown === null ? cc(s) : (s.fn = null)));
        } catch (i) {
          Yi(i, s, null, s.ctx);
        }
    }
}
function $i(n) {
  Cr || ((Cr = !0), queueMicrotask(bh));
  for (var t = (wi = n); t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if ((e & (Wn | ze)) !== 0) {
      if ((e & Ut) === 0) return;
      t.f ^= Ut;
    }
  }
  ii.push(t);
}
function vh(n) {
  for (var t = [], e = n; e !== null; ) {
    var s = e.f,
      i = (s & (ze | Wn)) !== 0,
      r = i && (s & Ut) !== 0;
    if (!r && (s & Ne) === 0) {
      if ((s & Ul) !== 0) t.push(e);
      else if (i) e.f ^= Ut;
      else
        try {
          Es(e) && pa(e);
        } catch (l) {
          Yi(l, e, null, e.ctx);
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
function y(n) {
  var t = n.f,
    e = (t & le) !== 0;
  if (rt !== null && !_e) {
    if (!(Bt != null && Bt.includes(n))) {
      var s = rt.deps;
      n.rv < ki &&
        ((n.rv = ki),
        It === null && s !== null && s[Qt] === n
          ? Qt++
          : It === null
            ? (It = [n])
            : (!$e || !It.includes(n)) && It.push(n));
    }
  } else if (e && n.deps === null && n.effects === null) {
    var i = n,
      r = i.parent;
    r !== null && (r.f & Jt) === 0 && (i.f ^= Jt);
  }
  return e && ((i = n), Es(i) && tc(i)), Os && ms.has(n) ? ms.get(n) : n.v;
}
function ma(n) {
  var t = _e;
  try {
    return (_e = !0), n();
  } finally {
    _e = t;
  }
}
const yh = -7169;
function ce(n, t) {
  n.f = (n.f & yh) | t;
}
function xh(n) {
  if (!(typeof n != 'object' || !n || n instanceof EventTarget)) {
    if (Be in n) Ar(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == 'object' && e && Be in e && Ar(e);
      }
  }
}
function Ar(n, t = new Set()) {
  if (
    typeof n == 'object' &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n), n instanceof Date && n.getTime();
    for (let s in n)
      try {
        Ar(n[s], t);
      } catch {}
    const e = $l(n);
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
let Ja = !1;
function Mh() {
  Ja ||
    ((Ja = !0),
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
  var t = rt,
    e = at;
  Se(null), Ze(null);
  try {
    return n();
  } finally {
    Se(t), Ze(e);
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
const bc = new Set(),
  Rr = new Set();
function _c(n) {
  for (var t = 0; t < n.length; t++) bc.add(n[t]);
  for (var e of Rr) e(n);
}
function zs(n) {
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
    Dd(n, 'currentTarget', {
      configurable: !0,
      get() {
        return r || e;
      },
    });
    var u = rt,
      d = at;
    Se(null), Ze(null);
    try {
      for (var h, g = []; r !== null; ) {
        var f = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var p = r['__' + s];
          if (p != null && (!r.disabled || n.target === r))
            if (Bi(p)) {
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
      (n.__root = t), delete n.currentTarget, Se(u), Ze(d);
    }
  }
}
function Dh(n) {
  var t = document.createElement('template');
  return (t.innerHTML = n), t.content;
}
function Lr(n, t) {
  var e = at;
  e.nodes_start === null && ((e.nodes_start = n), (e.nodes_end = t));
}
function z(n, t) {
  var e = (t & Gd) !== 0,
    s = (t & Kd) !== 0,
    i,
    r = !n.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Dh(r ? n : '<!>' + n)), e || (i = vi(i)));
    var a = s || nc ? document.importNode(i, !0) : i.cloneNode(!0);
    if (e) {
      var o = vi(a),
        l = a.lastChild;
      Lr(o, l);
    } else Lr(a, a);
    return a;
  };
}
function Th() {
  var n = document.createDocumentFragment(),
    t = document.createComment(''),
    e = fa();
  return n.append(t, e), Lr(t, e), n;
}
function B(n, t) {
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
const Tn = new Map();
function Eh(
  n,
  { target: t, anchor: e, props: s = {}, events: i, context: r, intro: a = !0 },
) {
  sh();
  var o = new Set(),
    l = (d) => {
      for (var h = 0; h < d.length; h++) {
        var g = d[h];
        if (!o.has(g)) {
          o.add(g);
          var f = kh(g);
          t.addEventListener(g, zs, { passive: f });
          var p = Tn.get(g);
          p === void 0
            ? (document.addEventListener(g, zs, { passive: f }), Tn.set(g, 1))
            : Tn.set(g, p + 1);
        }
      }
    };
  l(oa(bc)), Rr.add(l);
  var c = void 0,
    u = lh(() => {
      var d = e ?? t.appendChild(fa());
      return (
        Fn(() => {
          if (r) {
            ue({});
            var h = _t;
            h.c = r;
          }
          i && (s.$$events = i), (c = n(d, s) || {}), r && de();
        }),
        () => {
          var f;
          for (var h of o) {
            t.removeEventListener(h, zs);
            var g = Tn.get(h);
            --g === 0
              ? (document.removeEventListener(h, zs), Tn.delete(h))
              : Tn.set(h, g);
          }
          Rr.delete(l),
            d !== e && ((f = d.parentNode) == null || f.removeChild(d));
        }
      );
    });
  return Ch.set(c, u), c;
}
let Ch = new WeakMap();
function J(n, t, [e, s] = [0, 0]) {
  var i = n,
    r = null,
    a = null,
    o = jt,
    l = e > 0 ? Hi : 0,
    c = !1;
  const u = (h, g = !0) => {
      (c = !0), d(g, h);
    },
    d = (h, g) => {
      o !== (o = h) &&
        (o
          ? (r ? yi(r) : g && (r = Fn(() => g(i))),
            a &&
              _s(a, () => {
                a = null;
              }))
          : (a ? yi(a) : g && (a = Fn(() => g(i, [e + 1, s]))),
            r &&
              _s(r, () => {
                r = null;
              })));
    };
  qi(() => {
    (c = !1), t(u), c || d(null, null);
  }, l);
}
function vc(n, t) {
  return t;
}
function Ah(n, t, e, s) {
  for (var i = [], r = t.length, a = 0; a < r; a++) ga(t[a].e, i, !0);
  var o = r > 0 && i.length === 0 && e !== null;
  if (o) {
    var l = e.parentNode;
    ih(l), l.append(e), s.clear(), Ye(n, t[0].prev, t[r - 1].next);
  }
  uc(i, () => {
    for (var c = 0; c < r; c++) {
      var u = t[c];
      o || (s.delete(u.k), Ye(n, u.prev, u.next)), Je(u.e, !o);
    }
  });
}
function tn(n, t, e, s, i, r = null) {
  var a = n,
    o = { flags: t, items: new Map(), first: null },
    l = (t & Kl) !== 0;
  if (l) {
    var c = n;
    a = c.appendChild(fa());
  }
  var u = null,
    d = !1,
    h = ha(() => {
      var g = e();
      return Bi(g) ? g : g == null ? [] : oa(g);
    });
  qi(() => {
    var g = y(h),
      f = g.length;
    (d && f === 0) ||
      ((d = f === 0),
      Rh(g, o, a, i, t, s, e),
      r !== null &&
        (f === 0
          ? u
            ? yi(u)
            : (u = Fn(() => r(a)))
          : u !== null &&
            _s(u, () => {
              u = null;
            })),
      y(h));
  });
}
function Rh(n, t, e, s, i, r, a) {
  var V, W, I, H;
  var o = (i & Ud) !== 0,
    l = (i & (ca | ua)) !== 0,
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
    v;
  if (o)
    for (v = 0; v < c; v += 1)
      (_ = n[v]),
        (x = r(_, v)),
        (w = u.get(x)),
        w !== void 0 &&
          ((V = w.a) == null || V.measure(), (p ?? (p = new Set())).add(w));
  for (v = 0; v < c; v += 1) {
    if (((_ = n[v]), (x = r(_, v)), (w = u.get(x)), w === void 0)) {
      var P = h ? h.e.nodes_start : e;
      (f = Fh(P, t, f, f === null ? t.first : f.next, _, x, v, s, i, a)),
        u.set(x, f),
        (m = []),
        (b = []),
        (h = f.next);
      continue;
    }
    if (
      (l && Lh(w, _, v, i),
      (w.e.f & Ne) !== 0 &&
        (yi(w.e),
        o &&
          ((W = w.a) == null || W.unfix(), (p ?? (p = new Set())).delete(w))),
      w !== h)
    ) {
      if (g !== void 0 && g.has(w)) {
        if (m.length < b.length) {
          var O = b[0],
            k;
          f = O.prev;
          var C = m[0],
            L = m[m.length - 1];
          for (k = 0; k < m.length; k += 1) Za(m[k], O, e);
          for (k = 0; k < b.length; k += 1) g.delete(b[k]);
          Ye(t, C.prev, L.next),
            Ye(t, f, C),
            Ye(t, L, O),
            (h = O),
            (f = L),
            (v -= 1),
            (m = []),
            (b = []);
        } else
          g.delete(w),
            Za(w, h, e),
            Ye(t, w.prev, w.next),
            Ye(t, w, f === null ? t.first : f.next),
            Ye(t, f, w),
            (f = w);
        continue;
      }
      for (m = [], b = []; h !== null && h.k !== x; )
        (h.e.f & Ne) === 0 && (g ?? (g = new Set())).add(h),
          b.push(h),
          (h = h.next);
      if (h === null) continue;
      w = h;
    }
    m.push(w), (f = w), (h = w.next);
  }
  if (h !== null || g !== void 0) {
    for (var A = g === void 0 ? [] : oa(g); h !== null; )
      (h.e.f & Ne) === 0 && A.push(h), (h = h.next);
    var T = A.length;
    if (T > 0) {
      var F = (i & Kl) !== 0 && c === 0 ? e : null;
      if (o) {
        for (v = 0; v < T; v += 1) (I = A[v].a) == null || I.measure();
        for (v = 0; v < T; v += 1) (H = A[v].a) == null || H.fix();
      }
      Ah(t, A, F, u);
    }
  }
  o &&
    hc(() => {
      var Y;
      if (p !== void 0) for (w of p) (Y = w.a) == null || Y.apply();
    }),
    (at.first = t.first && t.first.e),
    (at.last = f && f.e);
}
function Lh(n, t, e, s) {
  (s & ca) !== 0 && Er(n.v, t), (s & ua) !== 0 ? Er(n.i, e) : (n.i = e);
}
function Fh(n, t, e, s, i, r, a, o, l, c) {
  var u = (l & ca) !== 0,
    d = (l & Xd) === 0,
    h = u ? (d ? Rn(i) : bs(i)) : i,
    g = (l & ua) === 0 ? a : bs(a),
    f = { i: g, v: h, k: r, a: null, e: null, prev: e, next: s };
  try {
    return (
      (f.e = Fn(() => o(n, h, g, c), nh)),
      (f.e.prev = e && e.e),
      (f.e.next = s && s.e),
      e === null ? (t.first = f) : ((e.next = f), (e.e.next = f.e)),
      s !== null && ((s.prev = f), (s.e.prev = f.e)),
      f
    );
  } finally {
  }
}
function Za(n, t, e) {
  for (
    var s = n.next ? n.next.e.nodes_start : e,
      i = t ? t.e.nodes_start : e,
      r = n.e.nodes_start;
    r !== s;

  ) {
    var a = Vi(r);
    i.before(r), (r = a);
  }
}
function Ye(n, t, e) {
  t === null ? (n.first = e) : ((t.next = e), (t.e.next = e && e.e)),
    e !== null && ((e.prev = t), (e.e.prev = t && t.e));
}
function Ih(n, t, e) {
  var s = n,
    i,
    r;
  qi(() => {
    i !== (i = t()) && (r && (_s(r), (r = null)), i && (r = Fn(() => e(s, i))));
  }, Hi);
}
function yc(n) {
  var t,
    e,
    s = '';
  if (typeof n == 'string' || typeof n == 'number') s += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var i = n.length;
      for (t = 0; t < i; t++)
        n[t] && (e = yc(n[t])) && (s && (s += ' '), (s += e));
    } else for (e in n) n[e] && (s && (s += ' '), (s += e));
  return s;
}
function Nh() {
  for (var n, t, e = 0, s = '', i = arguments.length; e < i; e++)
    (n = arguments[e]) && (t = yc(n)) && (s && (s += ' '), (s += t));
  return s;
}
function Oe(n) {
  return typeof n == 'object' ? Nh(n) : (n ?? '');
}
const to = [
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
          (a === 0 || to.includes(s[a - 1])) &&
          (o === s.length || to.includes(s[o]))
            ? (s = (a === 0 ? '' : s.substring(0, a)) + s.substring(o + 1))
            : (a = o);
        }
  }
  return s === '' ? null : s;
}
function Ot(n, t, e, s, i, r) {
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
function xc(n, t, e) {
  if (n.multiple) return t == null ? void 0 : Bi(t) ? Wh(n, t) : eh();
  for (var s of n.options) {
    var i = cs(s);
    if (Zd(i, t)) {
      s.selected = !0;
      return;
    }
  }
  (!e || t !== void 0) && (n.selectedIndex = -1);
}
function zh(n, t) {
  Ts(() => {
    var e = new MutationObserver(() => {
      var s = n.__value;
      xc(n, s);
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
function Si(n, t, e = t) {
  var s = !0;
  Ph(n, 'change', (i) => {
    var r = i ? '[selected]' : ':checked',
      a;
    if (n.multiple) a = [].map.call(n.querySelectorAll(r), cs);
    else {
      var o = n.querySelector(r) ?? n.querySelector('option:not([disabled])');
      a = o && cs(o);
    }
    e(a);
  }),
    Ts(() => {
      var i = t();
      if ((xc(n, i, s), s && i === void 0)) {
        var r = n.querySelector(':checked');
        r !== null && ((i = cs(r)), e(i));
      }
      (n.__value = i), (s = !1);
    }),
    zh(n);
}
function Wh(n, t) {
  for (var e of n.options) e.selected = t.includes(cs(e));
}
function cs(n) {
  return '__value' in n ? n.__value : n.value;
}
function eo(n, t) {
  return n === t || (n == null ? void 0 : n[Be]) === t;
}
function Vn(n = {}, t, e, s) {
  return (
    Ts(() => {
      var i, r;
      return (
        ac(() => {
          (i = r),
            (r = []),
            ma(() => {
              n !== e(...r) &&
                (t(n, ...r), i && eo(e(...i), n) && t(null, ...i));
            });
        }),
        () => {
          hc(() => {
            r && eo(e(...r), n) && t(null, ...r);
          });
        }
      );
    }),
    n
  );
}
function wc(n = !1) {
  const t = _t,
    e = t.l.u;
  if (!e) return;
  let s = () => xh(t.s);
  if (n) {
    let i = 0,
      r = {};
    const a = da(() => {
      let o = !1;
      const l = t.s;
      for (const c in l) l[c] !== r[c] && ((r[c] = l[c]), (o = !0));
      return o && i++, i;
    });
    s = () => y(a);
  }
  e.b.length &&
    oh(() => {
      no(t, s), Tr(e.b);
    }),
    Me(() => {
      const i = ma(() => e.m.map(Cd));
      return () => {
        for (const r of i) typeof r == 'function' && r();
      };
    }),
    e.a.length &&
      Me(() => {
        no(t, s), Tr(e.a);
      });
}
function no(n, t) {
  if (n.l.s) for (const e of n.l.s) y(e);
  t();
}
let Ws = !1;
function Hh(n) {
  var t = Ws;
  try {
    return (Ws = !1), [n(), Ws];
  } finally {
    Ws = t;
  }
}
function jh(n, t, e, s) {
  var f;
  var i = !Hn || (e & Qd) !== 0,
    r = !1,
    a;
  [a, r] = Hh(() => n[t]);
  var o = Be in n || Fd in n,
    l =
      (((f = An(n, t)) == null ? void 0 : f.set) ??
        (o && t in n && ((p) => (n[t] = p)))) ||
      void 0,
    c = s,
    u = !0,
    d = () => (u && ((u = !1), (c = s)), c);
  a === void 0 && s !== void 0 && (l && i && Hd(), (a = d()), l && l(a));
  var h;
  if (i)
    h = () => {
      var p = n[t];
      return p === void 0 ? d() : ((u = !0), p);
    };
  else {
    var g = ha(() => n[t]);
    (g.f |= Rd),
      (h = () => {
        var p = y(g);
        return p !== void 0 && (c = void 0), p === void 0 ? c : p;
      });
  }
  return h;
}
function De(n) {
  _t === null && Jd(),
    Hn && _t.l !== null
      ? Vh(_t).m.push(n)
      : Me(() => {
          const t = ma(n);
          if (typeof t == 'function') return t;
        });
}
function Vh(n) {
  var t = n.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const qh = '5';
var Yl;
typeof window < 'u' &&
  (
    (Yl = window.__svelte ?? (window.__svelte = {})).v ?? (Yl.v = new Set())
  ).add(qh);
var Yh = z(
  '<nav id="nav" class="svelte-x2u3bz"><ul class="first-half svelte-x2u3bz"><li class="svelte-x2u3bz"><a href="/" class="logo-link svelte-x2u3bz"><img src="/dashboard/logo.png" alt="Main logo" class="svelte-x2u3bz"></a></li></ul> <ul class="second-half svelte-x2u3bz"><li class="svelte-x2u3bz"><a href="/">Home</a></li> <li class="svelte-x2u3bz"><a href="/product">Product Master</a></li> <li class="svelte-x2u3bz"><a href="/suppliers">Suppliers</a></li> <li class="svelte-x2u3bz"><a href="/customers">Customers</a></li> <li class="svelte-x2u3bz"><a href="/inwards">Inwards</a></li> <li class="svelte-x2u3bz"><a href="/outwards">Outwards</a></li></ul></nav>',
);
function $h(n, t) {
  ue(t, !0);
  let e = j('');
  De(() => {
    R(e, window.location.pathname, !0), console.log('currentPath:', y(e));
  });
  function s(k) {
    return k === '/' ? y(e) === '/' : y(e).startsWith(k);
  }
  var i = Yh(),
    r = E(S(i), 2),
    a = S(r),
    o = S(a);
  let l;
  var c = E(a, 2),
    u = S(c);
  let d;
  var h = E(c, 2),
    g = S(h);
  let f;
  var p = E(h, 2),
    m = S(p);
  let b;
  var _ = E(p, 2),
    x = S(_);
  let w;
  var v = E(_, 2),
    P = S(v);
  let O;
  st(
    (k, C, L, A, T, F) => {
      (l = Ot(o, 1, 'svelte-x2u3bz', null, l, k)),
        (d = Ot(u, 1, 'svelte-x2u3bz', null, d, C)),
        (f = Ot(g, 1, 'svelte-x2u3bz', null, f, L)),
        (b = Ot(m, 1, 'svelte-x2u3bz', null, b, A)),
        (w = Ot(x, 1, 'svelte-x2u3bz', null, w, T)),
        (O = Ot(P, 1, 'svelte-x2u3bz', null, O, F));
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
    B(n, i),
    de();
}
$d();
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function Cs(n) {
  return (n + 0.5) | 0;
}
const Ue = (n, t, e) => Math.max(Math.min(n, e), t);
function ss(n) {
  return Ue(Cs(n * 2.55), 0, 255);
}
function Ke(n) {
  return Ue(Cs(n * 255), 0, 255);
}
function Re(n) {
  return Ue(Cs(n / 2.55) / 100, 0, 1);
}
function so(n) {
  return Ue(Cs(n * 100), 0, 100);
}
const ee = {
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
  Fr = [...'0123456789ABCDEF'],
  Uh = (n) => Fr[n & 15],
  Xh = (n) => Fr[(n & 240) >> 4] + Fr[n & 15],
  Hs = (n) => (n & 240) >> 4 === (n & 15),
  Qh = (n) => Hs(n.r) && Hs(n.g) && Hs(n.b) && Hs(n.a);
function Gh(n) {
  var t = n.length,
    e;
  return (
    n[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (ee[n[1]] * 17),
            g: 255 & (ee[n[2]] * 17),
            b: 255 & (ee[n[3]] * 17),
            a: t === 5 ? ee[n[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (ee[n[1]] << 4) | ee[n[2]],
            g: (ee[n[3]] << 4) | ee[n[4]],
            b: (ee[n[5]] << 4) | ee[n[6]],
            a: t === 9 ? (ee[n[7]] << 4) | ee[n[8]] : 255,
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
function kc(n, t, e) {
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
  const s = kc(n, 1, 0.5);
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
function ba(n) {
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
function _a(n, t, e, s) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, s)).map(Ke);
}
function va(n, t, e) {
  return _a(kc, n, t, e);
}
function sf(n, t, e) {
  return _a(ef, n, t, e);
}
function rf(n, t, e) {
  return _a(tf, n, t, e);
}
function Mc(n) {
  return ((n % 360) + 360) % 360;
}
function af(n) {
  const t = Zh.exec(n);
  let e = 255,
    s;
  if (!t) return;
  t[5] !== s && (e = t[6] ? ss(+t[5]) : Ke(+t[5]));
  const i = Mc(+t[2]),
    r = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === 'hwb'
      ? (s = sf(i, r, a))
      : t[1] === 'hsv'
        ? (s = rf(i, r, a))
        : (s = va(i, r, a)),
    { r: s[0], g: s[1], b: s[2], a: e }
  );
}
function of(n, t) {
  var e = ba(n);
  (e[0] = Mc(e[0] + t)), (e = va(e)), (n.r = e[0]), (n.g = e[1]), (n.b = e[2]);
}
function lf(n) {
  if (!n) return;
  const t = ba(n),
    e = t[0],
    s = so(t[1]),
    i = so(t[2]);
  return n.a < 255
    ? `hsla(${e}, ${s}%, ${i}%, ${Re(n.a)})`
    : `hsl(${e}, ${s}%, ${i}%)`;
}
const io = {
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
  ro = {
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
    t = Object.keys(ro),
    e = Object.keys(io);
  let s, i, r, a, o;
  for (s = 0; s < t.length; s++) {
    for (a = o = t[s], i = 0; i < e.length; i++)
      (r = e[i]), (o = o.replace(r, io[r]));
    (r = parseInt(ro[a], 16)),
      (n[o] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
  }
  return n;
}
let js;
function uf(n) {
  js || ((js = cf()), (js.transparent = [0, 0, 0, 0]));
  const t = js[n.toLowerCase()];
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
      e = t[8] ? ss(a) : Ue(a * 255, 0, 255);
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (r = +t[5]),
      (s = 255 & (t[2] ? ss(s) : Ue(s, 0, 255))),
      (i = 255 & (t[4] ? ss(i) : Ue(i, 0, 255))),
      (r = 255 & (t[6] ? ss(r) : Ue(r, 0, 255))),
      { r: s, g: i, b: r, a: e }
    );
  }
}
function ff(n) {
  return (
    n &&
    (n.a < 255
      ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Re(n.a)})`
      : `rgb(${n.r}, ${n.g}, ${n.b})`)
  );
}
const ur = (n) =>
    n <= 0.0031308 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055,
  On = (n) => (n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
function gf(n, t, e) {
  const s = On(Re(n.r)),
    i = On(Re(n.g)),
    r = On(Re(n.b));
  return {
    r: Ke(ur(s + e * (On(Re(t.r)) - s))),
    g: Ke(ur(i + e * (On(Re(t.g)) - i))),
    b: Ke(ur(r + e * (On(Re(t.b)) - r))),
    a: n.a + e * (t.a - n.a),
  };
}
function Vs(n, t, e) {
  if (n) {
    let s = ba(n);
    (s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1))),
      (s = va(s)),
      (n.r = s[0]),
      (n.g = s[1]),
      (n.b = s[2]);
  }
}
function Sc(n, t) {
  return n && Object.assign(t || {}, n);
}
function ao(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(n)
      ? n.length >= 3 &&
        ((t = { r: n[0], g: n[1], b: n[2], a: 255 }),
        n.length > 3 && (t.a = Ke(n[3])))
      : ((t = Sc(n, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Ke(t.a))),
    t
  );
}
function pf(n) {
  return n.charAt(0) === 'r' ? hf(n) : af(n);
}
class vs {
  constructor(t) {
    if (t instanceof vs) return t;
    const e = typeof t;
    let s;
    e === 'object'
      ? (s = ao(t))
      : e === 'string' && (s = Gh(t) || uf(t) || pf(t)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Sc(this._rgb);
    return t && (t.a = Re(t.a)), t;
  }
  set rgb(t) {
    this._rgb = ao(t);
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
    return t && (this._rgb = gf(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new vs(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Ke(t)), this;
  }
  clearer(t) {
    const e = this._rgb;
    return (e.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      e = Cs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Vs(this._rgb, 2, t), this;
  }
  darken(t) {
    return Vs(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Vs(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Vs(this._rgb, 1, -t), this;
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
 */ function Ee() {}
const mf = (() => {
  let n = 0;
  return () => n++;
})();
function G(n) {
  return n == null;
}
function ft(n) {
  if (Array.isArray && Array.isArray(n)) return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function K(n) {
  return n !== null && Object.prototype.toString.call(n) === '[object Object]';
}
function vt(n) {
  return (typeof n == 'number' || n instanceof Number) && isFinite(+n);
}
function Gt(n, t) {
  return vt(n) ? n : t;
}
function X(n, t) {
  return typeof n > 'u' ? t : n;
}
const bf = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? parseFloat(n) / 100 : +n / t,
  Pc = (n, t) =>
    typeof n == 'string' && n.endsWith('%') ? (parseFloat(n) / 100) * t : +n;
function lt(n, t, e) {
  if (n && typeof n.call == 'function') return n.apply(e, t);
}
function nt(n, t, e, s) {
  let i, r, a;
  if (ft(n)) for (r = n.length, i = 0; i < r; i++) t.call(e, n[i], i);
  else if (K(n))
    for (a = Object.keys(n), r = a.length, i = 0; i < r; i++)
      t.call(e, n[a[i]], a[i]);
}
function Pi(n, t) {
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
function Di(n) {
  if (ft(n)) return n.map(Di);
  if (K(n)) {
    const t = Object.create(null),
      e = Object.keys(n),
      s = e.length;
    let i = 0;
    for (; i < s; ++i) t[e[i]] = Di(n[e[i]]);
    return t;
  }
  return n;
}
function Dc(n) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(n) === -1;
}
function _f(n, t, e, s) {
  if (!Dc(n)) return;
  const i = t[n],
    r = e[n];
  K(i) && K(r) ? ys(i, r, s) : (t[n] = Di(r));
}
function ys(n, t, e) {
  const s = ft(t) ? t : [t],
    i = s.length;
  if (!K(n)) return n;
  e = e || {};
  const r = e.merger || _f;
  let a;
  for (let o = 0; o < i; ++o) {
    if (((a = s[o]), !K(a))) continue;
    const l = Object.keys(a);
    for (let c = 0, u = l.length; c < u; ++c) r(l[c], n, a, e);
  }
  return n;
}
function us(n, t) {
  return ys(n, t, { merger: vf });
}
function vf(n, t, e) {
  if (!Dc(n)) return;
  const s = t[n],
    i = e[n];
  K(s) && K(i)
    ? us(s, i)
    : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Di(i));
}
const oo = { '': (n) => n, x: (n) => n.x, y: (n) => n.y };
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
function en(n, t) {
  return (oo[t] || (oo[t] = xf(t)))(n);
}
function ya(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const xs = (n) => typeof n < 'u',
  nn = (n) => typeof n == 'function',
  lo = (n, t) => {
    if (n.size !== t.size) return !1;
    for (const e of n) if (!t.has(e)) return !1;
    return !0;
  };
function wf(n) {
  return n.type === 'mouseup' || n.type === 'click' || n.type === 'contextmenu';
}
const dt = Math.PI,
  ut = 2 * dt,
  kf = ut + dt,
  Ti = Number.POSITIVE_INFINITY,
  Mf = dt / 180,
  kt = dt / 2,
  on = dt / 4,
  co = (dt * 2) / 3,
  Xe = Math.log10,
  we = Math.sign;
function ds(n, t, e) {
  return Math.abs(n - t) < e;
}
function uo(n) {
  const t = Math.round(n);
  n = ds(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(Xe(n))),
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
function In(n) {
  return !Pf(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function Df(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Tc(n, t, e) {
  let s, i, r;
  for (s = 0, i = n.length; s < i; s++)
    (r = n[s][e]),
      isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function ae(n) {
  return n * (dt / 180);
}
function xa(n) {
  return n * (180 / dt);
}
function ho(n) {
  if (!vt(n)) return;
  let t = 1,
    e = 0;
  for (; Math.round(n * t) / t !== n; ) (t *= 10), e++;
  return e;
}
function Oc(n, t) {
  const e = t.x - n.x,
    s = t.y - n.y,
    i = Math.sqrt(e * e + s * s);
  let r = Math.atan2(s, e);
  return r < -0.5 * dt && (r += ut), { angle: r, distance: i };
}
function Ir(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function Tf(n, t) {
  return ((n - t + kf) % ut) - dt;
}
function Kt(n) {
  return ((n % ut) + ut) % ut;
}
function ws(n, t, e, s) {
  const i = Kt(n),
    r = Kt(t),
    a = Kt(e),
    o = Kt(r - i),
    l = Kt(a - i),
    c = Kt(i - r),
    u = Kt(i - a);
  return i === r || i === a || (s && r === a) || (o > l && c < u);
}
function Dt(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Of(n) {
  return Dt(n, -32768, 32767);
}
function Le(n, t, e, s = 1e-6) {
  return n >= Math.min(t, e) - s && n <= Math.max(t, e) + s;
}
function wa(n, t, e) {
  e = e || ((a) => n[a] < t);
  let s = n.length - 1,
    i = 0,
    r;
  for (; s - i > 1; ) (r = (i + s) >> 1), e(r) ? (i = r) : (s = r);
  return { lo: i, hi: s };
}
const Fe = (n, t, e, s) =>
    wa(
      n,
      e,
      s
        ? (i) => {
            const r = n[i][t];
            return r < e || (r === e && n[i + 1][t] === e);
          }
        : (i) => n[i][t] < e,
    ),
  Ef = (n, t, e) => wa(n, e, (s) => n[s][t] >= e);
function Cf(n, t, e) {
  let s = 0,
    i = n.length;
  for (; s < i && n[s] < t; ) s++;
  for (; i > s && n[i - 1] > e; ) i--;
  return s > 0 || i < n.length ? n.slice(s, i) : n;
}
const Ec = ['push', 'pop', 'shift', 'splice', 'unshift'];
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
    Ec.forEach((e) => {
      const s = '_onData' + ya(e),
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
function fo(n, t) {
  const e = n._chartjs;
  if (!e) return;
  const s = e.listeners,
    i = s.indexOf(t);
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (Ec.forEach((r) => {
        delete n[r];
      }),
      delete n._chartjs);
}
function Cc(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Ac = (function () {
  return typeof window > 'u'
    ? function (n) {
        return n();
      }
    : window.requestAnimationFrame;
})();
function Rc(n, t) {
  let e = [],
    s = !1;
  return function (...i) {
    (e = i),
      s ||
        ((s = !0),
        Ac.call(window, () => {
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
const ka = (n) => (n === 'start' ? 'left' : n === 'end' ? 'right' : 'center'),
  Et = (n, t, e) => (n === 'start' ? t : n === 'end' ? e : (t + e) / 2),
  Lf = (n, t, e, s) =>
    n === (s ? 'left' : 'right') ? e : n === 'center' ? (t + e) / 2 : t;
function Lc(n, t, e) {
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
          Fe(l, u, d).lo,
          e ? s : Fe(t, u, a.getPixelForValue(d)).lo,
        )),
        c)
      ) {
        const p = l
          .slice(0, i + 1)
          .reverse()
          .findIndex((m) => !G(m[o.axis]));
        i -= Math.max(0, p);
      }
      i = Dt(i, 0, s - 1);
    }
    if (f) {
      let p = Math.max(
        Fe(l, a.axis, h, !0).hi + 1,
        e ? 0 : Fe(t, u, a.getPixelForValue(h), !0).hi + 1,
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((b) => !G(b[o.axis]));
        p += Math.max(0, m);
      }
      r = Dt(p, i, s) - i;
    } else r = s - i;
  }
  return { start: i, count: r };
}
function Fc(n) {
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
const qs = (n) => n === 0 || n === 1,
  go = (n, t, e) =>
    -(Math.pow(2, 10 * (n -= 1)) * Math.sin(((n - t) * ut) / e)),
  po = (n, t, e) => Math.pow(2, -10 * n) * Math.sin(((n - t) * ut) / e) + 1,
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
    easeInOutSine: (n) => -0.5 * (Math.cos(dt * n) - 1),
    easeInExpo: (n) => (n === 0 ? 0 : Math.pow(2, 10 * (n - 1))),
    easeOutExpo: (n) => (n === 1 ? 1 : -Math.pow(2, -10 * n) + 1),
    easeInOutExpo: (n) =>
      qs(n)
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
    easeInElastic: (n) => (qs(n) ? n : go(n, 0.075, 0.3)),
    easeOutElastic: (n) => (qs(n) ? n : po(n, 0.075, 0.3)),
    easeInOutElastic(n) {
      return qs(n)
        ? n
        : n < 0.5
          ? 0.5 * go(n * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * po(n * 2 - 1, 0.1125, 0.45);
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
function Ma(n) {
  if (n && typeof n == 'object') {
    const t = n.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function mo(n) {
  return Ma(n) ? n : new vs(n);
}
function dr(n) {
  return Ma(n) ? n : new vs(n).saturate(0.5).darken(0.1).hexString();
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
const bo = new Map();
function zf(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let s = bo.get(e);
  return s || ((s = new Intl.NumberFormat(n, t)), bo.set(e, s)), s;
}
function As(n, t, e) {
  return zf(t, e).format(n);
}
const Ic = {
  values(n) {
    return ft(n) ? n : '' + n;
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
    const a = Xe(Math.abs(r)),
      o = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: i, minimumFractionDigits: o, maximumFractionDigits: o };
    return Object.assign(l, this.options.ticks.format), As(n, s, l);
  },
  logarithmic(n, t, e) {
    if (n === 0) return '0';
    const s = e[t].significand || n / Math.pow(10, Math.floor(Xe(n)));
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * e.length
      ? Ic.numeric.call(this, n, t, e)
      : '';
  },
};
function Wf(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Ui = { formatters: Ic };
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
      callback: Ui.formatters.values,
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
const yn = Object.create(null),
  Nr = Object.create(null);
function fs(n, t) {
  if (!t) return n;
  const e = t.split('.');
  for (let s = 0, i = e.length; s < i; ++s) {
    const r = e[s];
    n = n[r] || (n[r] = Object.create(null));
  }
  return n;
}
function hr(n, t, e) {
  return typeof t == 'string' ? ys(fs(n, t), e) : ys(fs(n, ''), t);
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
      (this.hoverBackgroundColor = (s, i) => dr(i.backgroundColor)),
      (this.hoverBorderColor = (s, i) => dr(i.borderColor)),
      (this.hoverColor = (s, i) => dr(i.color)),
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
    return hr(this, t, e);
  }
  get(t) {
    return fs(this, t);
  }
  describe(t, e) {
    return hr(Nr, t, e);
  }
  override(t, e) {
    return hr(yn, t, e);
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
          return K(l) ? Object.assign({}, c, l) : X(l, c);
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
var gt = new jf(
  {
    _scriptable: (n) => !n.startsWith('on'),
    _indexable: (n) => n !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Nf, Bf, Hf],
);
function Vf(n) {
  return !n || G(n.size) || G(n.family)
    ? null
    : (n.style ? n.style + ' ' : '') +
        (n.weight ? n.weight + ' ' : '') +
        n.size +
        'px ' +
        n.family;
}
function Oi(n, t, e, s, i) {
  let r = t[i];
  return (
    r || ((r = t[i] = n.measureText(i).width), e.push(i)), r > s && (s = r), s
  );
}
function qf(n, t, e, s) {
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
    if (((d = e[l]), d != null && !ft(d))) a = Oi(n, i, r, a, d);
    else if (ft(d))
      for (c = 0, u = d.length; c < u; c++)
        (h = d[c]), h != null && !ft(h) && (a = Oi(n, i, r, a, h));
  n.restore();
  const g = r.length / 2;
  if (g > e.length) {
    for (l = 0; l < g; l++) delete i[r[l]];
    r.splice(0, g);
  }
  return a;
}
function ln(n, t, e) {
  const s = n.currentDevicePixelRatio,
    i = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function _o(n, t) {
  (!t && !n) ||
    ((t = t || n.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, n.width, n.height),
    t.restore());
}
function Br(n, t, e, s) {
  Nc(n, t, e, s, null);
}
function Nc(n, t, e, s, i) {
  let r, a, o, l, c, u, d, h;
  const g = t.pointStyle,
    f = t.rotation,
    p = t.radius;
  let m = (f || 0) * Mf;
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
        i ? n.ellipse(e, s, i / 2, p, 0, 0, ut) : n.arc(e, s, p, 0, ut),
          n.closePath();
        break;
      case 'triangle':
        (u = i ? i / 2 : p),
          n.moveTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          (m += co),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          (m += co),
          n.lineTo(e + Math.sin(m) * u, s - Math.cos(m) * p),
          n.closePath();
        break;
      case 'rectRounded':
        (c = p * 0.516),
          (l = p - c),
          (a = Math.cos(m + on) * l),
          (d = Math.cos(m + on) * (i ? i / 2 - c : l)),
          (o = Math.sin(m + on) * l),
          (h = Math.sin(m + on) * (i ? i / 2 - c : l)),
          n.arc(e - d, s - o, c, m - dt, m - kt),
          n.arc(e + h, s - a, c, m - kt, m),
          n.arc(e + d, s + o, c, m, m + kt),
          n.arc(e - h, s + a, c, m + kt, m + dt),
          n.closePath();
        break;
      case 'rect':
        if (!f) {
          (l = Math.SQRT1_2 * p),
            (u = i ? i / 2 : l),
            n.rect(e - u, s - l, 2 * u, 2 * l);
          break;
        }
        m += on;
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
        m += on;
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
          (m += on),
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
function Ie(n, t, e) {
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
function Xi(n, t) {
  n.save(),
    n.beginPath(),
    n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    n.clip();
}
function Qi(n) {
  n.restore();
}
function Yf(n, t, e, s, i) {
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
    G(t.rotation) || n.rotate(t.rotation),
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
function xn(n, t, e, s, i, r = {}) {
  const a = ft(t) ? t : [t],
    o = r.strokeWidth > 0 && r.strokeColor !== '';
  let l, c;
  for (n.save(), n.font = i.string, Uf(n, r), l = 0; l < a.length; ++l)
    (c = a[l]),
      r.backdrop && Qf(n, r.backdrop),
      o &&
        (r.strokeColor && (n.strokeStyle = r.strokeColor),
        G(r.strokeWidth) || (n.lineWidth = r.strokeWidth),
        n.strokeText(c, e, s, r.maxWidth)),
      n.fillText(c, e, s, r.maxWidth),
      Xf(n, e, s, c, r),
      (s += Number(i.lineHeight));
  n.restore();
}
function ks(n, t) {
  const { x: e, y: s, w: i, h: r, radius: a } = t;
  n.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * dt, dt, !0),
    n.lineTo(e, s + r - a.bottomLeft),
    n.arc(e + a.bottomLeft, s + r - a.bottomLeft, a.bottomLeft, dt, kt, !0),
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
function Sa(n, t) {
  const e = {},
    s = K(t),
    i = s ? Object.keys(t) : t,
    r = K(n) ? (s ? (a) => X(n[a], n[t[a]]) : (a) => n[a]) : () => n;
  for (const a of i) e[a] = Zf(r(a));
  return e;
}
function Bc(n) {
  return Sa(n, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function bn(n) {
  return Sa(n, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function Rt(n) {
  const t = Bc(n);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Pt(n, t) {
  (n = n || {}), (t = t || gt.font);
  let e = X(n.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let s = X(n.style, t.style);
  s &&
    !('' + s).match(Kf) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const i = {
    family: X(n.family, t.family),
    lineHeight: Jf(X(n.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: X(n.weight, t.weight),
    string: '',
  };
  return (i.string = Vf(i)), i;
}
function is(n, t, e, s) {
  let i, r, a;
  for (i = 0, r = n.length; i < r; ++i)
    if (((a = n[i]), a !== void 0 && a !== void 0)) return a;
}
function tg(n, t, e) {
  const { min: s, max: i } = n,
    r = Pc(t, (i - s) / 2),
    a = (o, l) => (e && o === 0 ? 0 : o + l);
  return { min: a(s, -Math.abs(r)), max: a(i, r) };
}
function sn(n, t) {
  return Object.assign(Object.create(n), t);
}
function Pa(n, t = [''], e, s, i = () => n[0]) {
  const r = e || n;
  typeof s > 'u' && (s = jc('_fallback', n));
  const a = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: n,
    _rootScopes: r,
    _fallback: s,
    _getTarget: i,
    override: (o) => Pa([o, ...n], t, r, s),
  };
  return new Proxy(a, {
    deleteProperty(o, l) {
      return delete o[l], delete o._keys, delete n[0][l], !0;
    },
    get(o, l) {
      return Wc(o, l, () => lg(l, t, n, o));
    },
    getOwnPropertyDescriptor(o, l) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(o, l) {
      return yo(o).includes(l);
    },
    ownKeys(o) {
      return yo(o);
    },
    set(o, l, c) {
      const u = o._storage || (o._storage = i());
      return (o[l] = u[l] = c), delete o._keys, !0;
    },
  });
}
function Nn(n, t, e, s) {
  const i = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: zc(n, s),
    setContext: (r) => Nn(n, r, e, s),
    override: (r) => Nn(n.override(r), t, e, s),
  };
  return new Proxy(i, {
    deleteProperty(r, a) {
      return delete r[a], delete n[a], !0;
    },
    get(r, a, o) {
      return Wc(r, a, () => ng(r, a, o));
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
function zc(n, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: e = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys,
  } = n;
  return {
    allKeys: i,
    scriptable: e,
    indexable: s,
    isScriptable: nn(e) ? e : () => e,
    isIndexable: nn(s) ? s : () => s,
  };
}
const eg = (n, t) => (n ? n + ya(t) : t),
  Da = (n, t) =>
    K(t) &&
    n !== 'adapters' &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Wc(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === 'constructor')
    return n[t];
  const s = e();
  return (n[t] = s), s;
}
function ng(n, t, e) {
  const { _proxy: s, _context: i, _subProxy: r, _descriptors: a } = n;
  let o = s[t];
  return (
    nn(o) && a.isScriptable(t) && (o = sg(t, o, n, e)),
    ft(o) && o.length && (o = ig(t, o, n, a.isIndexable)),
    Da(t, o) && (o = Nn(o, i, r && r[t], a)),
    o
  );
}
function sg(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _stack: o } = e;
  if (o.has(n))
    throw new Error(
      'Recursion detected: ' + Array.from(o).join('->') + '->' + n,
    );
  o.add(n);
  let l = t(r, a || s);
  return o.delete(n), Da(n, l) && (l = Ta(i._scopes, i, n, l)), l;
}
function ig(n, t, e, s) {
  const { _proxy: i, _context: r, _subProxy: a, _descriptors: o } = e;
  if (typeof r.index < 'u' && s(n)) return t[r.index % t.length];
  if (K(t[0])) {
    const l = t,
      c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const d = Ta(c, i, n, u);
      t.push(Nn(d, r, a && a[n], o));
    }
  }
  return t;
}
function Hc(n, t, e) {
  return nn(n) ? n(t, e) : n;
}
const rg = (n, t) => (n === !0 ? t : typeof n == 'string' ? en(t, n) : void 0);
function ag(n, t, e, s, i) {
  for (const r of t) {
    const a = rg(e, r);
    if (a) {
      n.add(a);
      const o = Hc(a._fallback, e, i);
      if (typeof o < 'u' && o !== e && o !== s) return o;
    } else if (a === !1 && typeof s < 'u' && e !== s) return null;
  }
  return !1;
}
function Ta(n, t, e, s) {
  const i = t._rootScopes,
    r = Hc(t._fallback, e, s),
    a = [...n, ...i],
    o = new Set();
  o.add(s);
  let l = vo(o, a, e, r || e, s);
  return l === null ||
    (typeof r < 'u' && r !== e && ((l = vo(o, a, r, l, s)), l === null))
    ? !1
    : Pa(Array.from(o), [''], i, r, () => og(t, e, s));
}
function vo(n, t, e, s, i) {
  for (; e; ) e = ag(n, t, e, s, i);
  return e;
}
function og(n, t, e) {
  const s = n._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return ft(i) && K(e) ? e : i || {};
}
function lg(n, t, e, s) {
  let i;
  for (const r of t)
    if (((i = jc(eg(r, n), e)), typeof i < 'u'))
      return Da(n, i) ? Ta(e, s, n, i) : i;
}
function jc(n, t) {
  for (const e of t) {
    if (!e) continue;
    const s = e[n];
    if (typeof s < 'u') return s;
  }
}
function yo(n) {
  let t = n._keys;
  return t || (t = n._keys = cg(n._scopes)), t;
}
function cg(n) {
  const t = new Set();
  for (const e of n)
    for (const s of Object.keys(e).filter((i) => !i.startsWith('_'))) t.add(s);
  return Array.from(t);
}
function Vc(n, t, e, s) {
  const { iScale: i } = n,
    { key: r = 'r' } = this._parsing,
    a = new Array(s);
  let o, l, c, u;
  for (o = 0, l = s; o < l; ++o)
    (c = o + e), (u = t[c]), (a[o] = { r: i.parse(en(u, r), c) });
  return a;
}
const ug = Number.EPSILON || 1e-14,
  Bn = (n, t) => t < n.length && !n[t].skip && n[t],
  qc = (n) => (n === 'x' ? 'y' : 'x');
function dg(n, t, e, s) {
  const i = n.skip ? t : n,
    r = t,
    a = e.skip ? t : e,
    o = Ir(r, i),
    l = Ir(a, r);
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
function hg(n, t, e) {
  const s = n.length;
  let i,
    r,
    a,
    o,
    l,
    c = Bn(n, 0);
  for (let u = 0; u < s - 1; ++u)
    if (((l = c), (c = Bn(n, u + 1)), !(!l || !c))) {
      if (ds(t[u], 0, ug)) {
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
function fg(n, t, e = 'x') {
  const s = qc(e),
    i = n.length;
  let r,
    a,
    o,
    l = Bn(n, 0);
  for (let c = 0; c < i; ++c) {
    if (((a = o), (o = l), (l = Bn(n, c + 1)), !o)) continue;
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
function gg(n, t = 'x') {
  const e = qc(t),
    s = n.length,
    i = Array(s).fill(0),
    r = Array(s);
  let a,
    o,
    l,
    c = Bn(n, 0);
  for (a = 0; a < s; ++a)
    if (((o = l), (l = c), (c = Bn(n, a + 1)), !!l)) {
      if (c) {
        const u = c[t] - l[t];
        i[a] = u !== 0 ? (c[e] - l[e]) / u : 0;
      }
      r[a] = o
        ? c
          ? we(i[a - 1]) !== we(i[a])
            ? 0
            : (i[a - 1] + i[a]) / 2
          : i[a - 1]
        : i[a];
    }
  hg(n, i, r), fg(n, r, t);
}
function Ys(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function pg(n, t) {
  let e,
    s,
    i,
    r,
    a,
    o = Ie(n[0], t);
  for (e = 0, s = n.length; e < s; ++e)
    (a = r),
      (r = o),
      (o = e < s - 1 && Ie(n[e + 1], t)),
      r &&
        ((i = n[e]),
        a &&
          ((i.cp1x = Ys(i.cp1x, t.left, t.right)),
          (i.cp1y = Ys(i.cp1y, t.top, t.bottom))),
        o &&
          ((i.cp2x = Ys(i.cp2x, t.left, t.right)),
          (i.cp2y = Ys(i.cp2y, t.top, t.bottom))));
}
function mg(n, t, e, s, i) {
  let r, a, o, l;
  if (
    (t.spanGaps && (n = n.filter((c) => !c.skip)),
    t.cubicInterpolationMode === 'monotone')
  )
    gg(n, i);
  else {
    let c = s ? n[n.length - 1] : n[0];
    for (r = 0, a = n.length; r < a; ++r)
      (o = n[r]),
        (l = dg(c, o, n[Math.min(r + 1, a - (s ? 0 : 1)) % a], t.tension)),
        (o.cp1x = l.previous.x),
        (o.cp1y = l.previous.y),
        (o.cp2x = l.next.x),
        (o.cp2y = l.next.y),
        (c = o);
  }
  t.capBezierPoints && pg(n, e);
}
function Oa() {
  return typeof window < 'u' && typeof document < 'u';
}
function Ea(n) {
  let t = n.parentNode;
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function Ei(n, t, e) {
  let s;
  return (
    typeof n == 'string'
      ? ((s = parseInt(n, 10)),
        n.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[e]))
      : (s = n),
    s
  );
}
const Gi = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function bg(n, t) {
  return Gi(n).getPropertyValue(t);
}
const _g = ['top', 'right', 'bottom', 'left'];
function _n(n, t, e) {
  const s = {};
  e = e ? '-' + e : '';
  for (let i = 0; i < 4; i++) {
    const r = _g[i];
    s[r] = parseFloat(n[t + '-' + r + e]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const vg = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function yg(n, t) {
  const e = n.touches,
    s = e && e.length ? e[0] : n,
    { offsetX: i, offsetY: r } = s;
  let a = !1,
    o,
    l;
  if (vg(i, r, n.target)) (o = i), (l = r);
  else {
    const c = t.getBoundingClientRect();
    (o = s.clientX - c.left), (l = s.clientY - c.top), (a = !0);
  }
  return { x: o, y: l, box: a };
}
function dn(n, t) {
  if ('native' in n) return n;
  const { canvas: e, currentDevicePixelRatio: s } = t,
    i = Gi(e),
    r = i.boxSizing === 'border-box',
    a = _n(i, 'padding'),
    o = _n(i, 'border', 'width'),
    { x: l, y: c, box: u } = yg(n, e),
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
function xg(n, t, e) {
  let s, i;
  if (t === void 0 || e === void 0) {
    const r = n && Ea(n);
    if (!r) (t = n.clientWidth), (e = n.clientHeight);
    else {
      const a = r.getBoundingClientRect(),
        o = Gi(r),
        l = _n(o, 'border', 'width'),
        c = _n(o, 'padding');
      (t = a.width - c.width - l.width),
        (e = a.height - c.height - l.height),
        (s = Ei(o.maxWidth, r, 'clientWidth')),
        (i = Ei(o.maxHeight, r, 'clientHeight'));
    }
  }
  return { width: t, height: e, maxWidth: s || Ti, maxHeight: i || Ti };
}
const $s = (n) => Math.round(n * 10) / 10;
function wg(n, t, e, s) {
  const i = Gi(n),
    r = _n(i, 'margin'),
    a = Ei(i.maxWidth, n, 'clientWidth') || Ti,
    o = Ei(i.maxHeight, n, 'clientHeight') || Ti,
    l = xg(n, t, e);
  let { width: c, height: u } = l;
  if (i.boxSizing === 'content-box') {
    const h = _n(i, 'border', 'width'),
      g = _n(i, 'padding');
    (c -= g.width + h.width), (u -= g.height + h.height);
  }
  return (
    (c = Math.max(0, c - r.width)),
    (u = Math.max(0, s ? c / s : u - r.height)),
    (c = $s(Math.min(c, a, l.maxWidth))),
    (u = $s(Math.min(u, o, l.maxHeight))),
    c && !u && (u = $s(c / 2)),
    (t !== void 0 || e !== void 0) &&
      s &&
      l.height &&
      u > l.height &&
      ((u = l.height), (c = $s(Math.floor(u * s)))),
    { width: c, height: u }
  );
}
function xo(n, t, e) {
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
const kg = (function () {
  let n = !1;
  try {
    const t = {
      get passive() {
        return (n = !0), !1;
      },
    };
    Oa() &&
      (window.addEventListener('test', null, t),
      window.removeEventListener('test', null, t));
  } catch {}
  return n;
})();
function wo(n, t) {
  const e = bg(n, t),
    s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function hn(n, t, e, s) {
  return { x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) };
}
function Mg(n, t, e, s) {
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
function Sg(n, t, e, s) {
  const i = { x: n.cp2x, y: n.cp2y },
    r = { x: t.cp1x, y: t.cp1y },
    a = hn(n, i, e),
    o = hn(i, r, e),
    l = hn(r, t, e),
    c = hn(a, o, e),
    u = hn(o, l, e);
  return hn(c, u, e);
}
const Pg = function (n, t) {
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
  Dg = function () {
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
function Ln(n, t, e) {
  return n ? Pg(t, e) : Dg();
}
function Yc(n, t) {
  let e, s;
  (t === 'ltr' || t === 'rtl') &&
    ((e = n.canvas.style),
    (s = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (n.prevTextDirection = s));
}
function $c(n, t) {
  t !== void 0 &&
    (delete n.prevTextDirection,
    n.canvas.style.setProperty('direction', t[0], t[1]));
}
function Uc(n) {
  return n === 'angle'
    ? { between: ws, compare: Tf, normalize: Kt }
    : { between: Le, compare: (t, e) => t - e, normalize: (t) => t };
}
function ko({ start: n, end: t, count: e, loop: s, style: i }) {
  return {
    start: n % e,
    end: t % e,
    loop: s && (t - n + 1) % e === 0,
    style: i,
  };
}
function Tg(n, t, e) {
  const { property: s, start: i, end: r } = e,
    { between: a, normalize: o } = Uc(s),
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
function Xc(n, t, e) {
  if (!e) return [n];
  const { property: s, start: i, end: r } = e,
    a = t.length,
    { compare: o, between: l, normalize: c } = Uc(s),
    { start: u, end: d, loop: h, style: g } = Tg(n, t, e),
    f = [];
  let p = !1,
    m = null,
    b,
    _,
    x;
  const w = () => l(i, x, b) && o(i, x) !== 0,
    v = () => o(r, b) === 0 || l(r, x, b),
    P = () => p || w(),
    O = () => !p || v();
  for (let k = u, C = u; k <= d; ++k)
    (_ = t[k % a]),
      !_.skip &&
        ((b = c(_[s])),
        b !== x &&
          ((p = l(b, i, r)),
          m === null && P() && (m = o(b, i) === 0 ? k : C),
          m !== null &&
            O() &&
            (f.push(ko({ start: m, end: k, loop: h, count: a, style: g })),
            (m = null)),
          (C = k),
          (x = b)));
  return (
    m !== null && f.push(ko({ start: m, end: d, loop: h, count: a, style: g })),
    f
  );
}
function Qc(n, t) {
  const e = [],
    s = n.segments;
  for (let i = 0; i < s.length; i++) {
    const r = Xc(s[i], n.points, t);
    r.length && e.push(...r);
  }
  return e;
}
function Og(n, t, e, s) {
  let i = 0,
    r = t - 1;
  if (e && !s) for (; i < t && !n[i].skip; ) i++;
  for (; i < t && n[i].skip; ) i++;
  for (i %= t, e && (r += i); r > i && n[r % t].skip; ) r--;
  return (r %= t), { start: i, end: r };
}
function Eg(n, t, e, s) {
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
function Cg(n, t) {
  const e = n.points,
    s = n.options.spanGaps,
    i = e.length;
  if (!i) return [];
  const r = !!n._loop,
    { start: a, end: o } = Og(e, i, r, s);
  if (s === !0) return Mo(n, [{ start: a, end: o, loop: r }], e, t);
  const l = o < a ? o + i : o,
    c = !!n._fullLoop && a === 0 && o === i - 1;
  return Mo(n, Eg(e, a, l, c), e, t);
}
function Mo(n, t, e, s) {
  return !s || !s.setContext || !e ? t : Ag(n, t, e, s);
}
function Ag(n, t, e, s) {
  const i = n._chart.getContext(),
    r = So(n.options),
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
      (m = So(
        s.setContext(
          sn(i, {
            type: 'segment',
            p0: p,
            p1: b,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: a,
          }),
        ),
      )),
        Rg(m, u) && g(d, h - 1, f.loop, u),
        (p = b),
        (u = m);
    }
    d < h - 1 && g(d, h - 1, f.loop, u);
  }
  return c;
}
function So(n) {
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
function Rg(n, t) {
  if (!t) return !1;
  const e = [],
    s = function (i, r) {
      return Ma(r) ? (e.includes(r) || e.push(r), e.indexOf(r)) : r;
    };
  return JSON.stringify(n, s) !== JSON.stringify(t, s);
}
function Us(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function Lg(n, t) {
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
function Gc(n, t) {
  const e = t._clip;
  if (e.disabled) return !1;
  const s = Lg(t, n.chartArea);
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
 */ class Fg {
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
      (this._request = Ac.call(window, () => {
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
var Ce = new Fg();
const Po = 'transparent',
  Ig = {
    boolean(n, t, e) {
      return e > 0.5 ? t : n;
    },
    color(n, t, e) {
      const s = mo(n || Po),
        i = s.valid && mo(t || Po);
      return i && i.valid ? i.mix(s, e).hexString() : t;
    },
    number(n, t, e) {
      return n + (t - n) * e;
    },
  };
class Ng {
  constructor(t, e, s, i) {
    const r = e[s];
    i = is([t.to, i, r, t.from]);
    const a = is([t.from, r, i]);
    (this._active = !0),
      (this._fn = t.fn || Ig[t.type || typeof a]),
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
class Kc {
  constructor(t, e) {
    (this._chart = t), (this._properties = new Map()), this.configure(e);
  }
  configure(t) {
    if (!K(t)) return;
    const e = Object.keys(gt.animation),
      s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i];
      if (!K(r)) return;
      const a = {};
      for (const o of e) a[o] = r[o];
      ((ft(r.properties) && r.properties) || [i]).forEach((o) => {
        (o === i || !s.has(o)) && s.set(o, a);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options,
      i = zg(t, s);
    if (!i) return [];
    const r = this._createAnimations(i, s);
    return (
      s.$shared &&
        Bg(t.options.$animations, s).then(
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
      (r[c] = d = new Ng(h, t, c, u)), i.push(d);
    }
    return i;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length) return Ce.add(this._chart, s), !0;
  }
}
function Bg(n, t) {
  const e = [],
    s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const r = n[s[i]];
    r && r.active() && e.push(r.wait());
  }
  return Promise.all(e);
}
function zg(n, t) {
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
function Do(n, t) {
  const e = (n && n.options) || {},
    s = e.reverse,
    i = e.min === void 0 ? t : 0,
    r = e.max === void 0 ? t : 0;
  return { start: s ? r : i, end: s ? i : r };
}
function Wg(n, t, e) {
  if (e === !1) return !1;
  const s = Do(n, e),
    i = Do(t, e);
  return { top: i.end, right: s.end, bottom: i.start, left: s.start };
}
function Hg(n) {
  let t, e, s, i;
  return (
    K(n)
      ? ((t = n.top), (e = n.right), (s = n.bottom), (i = n.left))
      : (t = e = s = i = n),
    { top: t, right: e, bottom: s, left: i, disabled: n === !1 }
  );
}
function Jc(n, t) {
  const e = [],
    s = n._getSortedDatasetMetas(t);
  let i, r;
  for (i = 0, r = s.length; i < r; ++i) e.push(s[i].index);
  return e;
}
function To(n, t, e, s = {}) {
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
    (c = n.values[l]), vt(c) && (r || t === 0 || we(t) === we(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function jg(n, t) {
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
function fr(n, t) {
  const e = n && n.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function Vg(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function qg(n) {
  const { min: t, max: e, minDefined: s, maxDefined: i } = n.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? e : Number.POSITIVE_INFINITY,
  };
}
function Yg(n, t, e) {
  const s = n[t] || (n[t] = {});
  return s[e] || (s[e] = {});
}
function Oo(n, t, e, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const r = n[i.index];
    if ((e && r > 0) || (!e && r < 0)) return i.index;
  }
  return null;
}
function Eo(n, t) {
  const { chart: e, _cachedMeta: s } = n,
    i = e._stacks || (e._stacks = {}),
    { iScale: r, vScale: a, index: o } = s,
    l = r.axis,
    c = a.axis,
    u = Vg(r, a, s),
    d = t.length;
  let h;
  for (let g = 0; g < d; ++g) {
    const f = t[g],
      { [l]: p, [c]: m } = f,
      b = f._stacks || (f._stacks = {});
    (h = b[c] = Yg(i, u, p)),
      (h[o] = m),
      (h._top = Oo(h, a, !0, s.type)),
      (h._bottom = Oo(h, a, !1, s.type));
    const _ = h._visualValues || (h._visualValues = {});
    _[o] = m;
  }
}
function gr(n, t) {
  const e = n.scales;
  return Object.keys(e)
    .filter((s) => e[s].axis === t)
    .shift();
}
function $g(n, t) {
  return sn(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function Ug(n, t, e) {
  return sn(n, {
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
function Xn(n, t) {
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
const pr = (n) => n === 'reset' || n === 'none',
  Co = (n, t) => (t ? n : Object.assign({}, n)),
  Xg = (n, t, e) =>
    n && !t.hidden && t._stacked && { keys: Jc(e, !0), values: null };
class oe {
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
      (t._stacked = fr(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        );
  }
  updateIndex(t) {
    this.index !== t && Xn(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      s = this.getDataset(),
      i = (d, h, g, f) => (d === 'x' ? h : d === 'r' ? f : g),
      r = (e.xAxisID = X(s.xAxisID, gr(t, 'x'))),
      a = (e.yAxisID = X(s.yAxisID, gr(t, 'y'))),
      o = (e.rAxisID = X(s.rAxisID, gr(t, 'r'))),
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
    this._data && fo(this._data, this), t._stacked && Xn(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      s = this._data;
    if (K(e)) {
      const i = this._cachedMeta;
      this._data = jg(e, i);
    } else if (s !== e) {
      if (s) {
        fo(s, this);
        const i = this._cachedMeta;
        Xn(i), (i._parsed = []);
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
    (e._stacked = fr(e.vScale, e)),
      e.stack !== s.stack && ((i = !0), Xn(e), (e.stack = s.stack)),
      this._resyncElements(t),
      (i || r !== e._stacked) &&
        (Eo(this, e._parsed), (e._stacked = fr(e.vScale, e)));
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
      ft(i[t])
        ? (h = this.parseArrayData(s, i, t, e))
        : K(i[t])
          ? (h = this.parseObjectData(s, i, t, e))
          : (h = this.parsePrimitiveData(s, i, t, e));
      const g = () => d[o] === null || (c && d[o] < c[o]);
      for (u = 0; u < e; ++u)
        (s._parsed[u + t] = d = h[u]), l && (g() && (l = !1), (c = d));
      s._sorted = l;
    }
    a && Eo(this, h);
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
        (c[u] = { x: r.parse(en(g, o), h), y: a.parse(en(g, l), h) });
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
      o = { keys: Jc(i, !0), values: e._stacks[t.axis]._visualValues };
    return To(o, a, r.index, { mode: s });
  }
  updateRangeFromParsed(t, e, s, i) {
    const r = s[e.axis];
    let a = r === null ? NaN : r;
    const o = i && s._stacks[e.axis];
    i && o && ((i.values = o), (a = To(i, r, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a));
  }
  getMinMax(t, e) {
    const s = this._cachedMeta,
      i = s._parsed,
      r = s._sorted && t === s.iScale,
      a = i.length,
      o = this._getOtherScale(t),
      l = Xg(e, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = qg(o);
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
      (e._clip = Hg(
        X(this.options.clip, Wg(e.xScale, e.yScale, this.getMaxOverflow())),
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
      (r = a.$context || (a.$context = Ug(this.getContext(), t, a))),
        (r.parsed = this.getParsed(t)),
        (r.raw = i.data[t]),
        (r.index = r.dataIndex = t);
    } else
      (r =
        this.$context ||
        (this.$context = $g(this.chart.getContext(), this.index))),
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
    if (o) return Co(o, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      d = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      h = c.getOptionScopes(this.getDataset(), u),
      g = Object.keys(gt.elements[t]),
      f = () => this.getContext(s, i, e),
      p = c.resolveNamedOptions(h, g, f, d);
    return p.$shared && ((p.$shared = l), (r[a] = Object.freeze(Co(p, l)))), p;
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
    const c = new Kc(i, l && l.animations);
    return l && l._cacheable && (r[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, e) {
    return !e || pr(t) || this.chart._animationsDisabled;
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
    pr(i) ? Object.assign(t, s) : this._resolveAnimations(e, i).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !pr(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Xn(s, i);
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
M(oe, 'defaults', {}),
  M(oe, 'datasetElementType', null),
  M(oe, 'dataElementType', null);
function Qg(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, r = e.length; i < r; i++)
      s = s.concat(e[i].controller.getAllParsedValues(n));
    n._cache.$bar = Cc(s.sort((i, r) => i - r));
  }
  return n._cache.$bar;
}
function Gg(n) {
  const t = n.iScale,
    e = Qg(t, n.type);
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
function Kg(n, t, e, s) {
  const i = e.barThickness;
  let r, a;
  return (
    G(i)
      ? ((r = t.min * e.categoryPercentage), (a = e.barPercentage))
      : ((r = i * s), (a = 1)),
    { chunk: r / s, ratio: a, start: t.pixels[n] - r / 2 }
  );
}
function Jg(n, t, e, s) {
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
function Zg(n, t, e, s) {
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
function Zc(n, t, e, s) {
  return ft(n) ? Zg(n, t, e, s) : (t[e.axis] = e.parse(n, s)), t;
}
function Ao(n, t, e, s) {
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
      l.push(Zc(h, d, r, c));
  return l;
}
function mr(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function tp(n, t, e) {
  return n !== 0 ? we(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function ep(n) {
  let t, e, s, i, r;
  return (
    n.horizontal
      ? ((t = n.base > n.x), (e = 'left'), (s = 'right'))
      : ((t = n.base < n.y), (e = 'bottom'), (s = 'top')),
    t ? ((i = 'end'), (r = 'start')) : ((i = 'start'), (r = 'end')),
    { start: e, end: s, reverse: t, top: i, bottom: r }
  );
}
function np(n, t, e, s) {
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
  const { start: a, end: o, reverse: l, top: c, bottom: u } = ep(n);
  i === 'middle' &&
    e &&
    ((n.enableBorderRadius = !0),
    (e._top || 0) === s
      ? (i = c)
      : (e._bottom || 0) === s
        ? (i = u)
        : ((r[Ro(u, a, o, l)] = !0), (i = c))),
    (r[Ro(i, a, o, l)] = !0),
    (n.borderSkipped = r);
}
function Ro(n, t, e, s) {
  return s ? ((n = sp(n, t, e)), (n = Lo(n, e, t))) : (n = Lo(n, t, e)), n;
}
function sp(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function Lo(n, t, e) {
  return n === 'start' ? t : n === 'end' ? e : n;
}
function ip(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
class ri extends oe {
  parsePrimitiveData(t, e, s, i) {
    return Ao(t, e, s, i);
  }
  parseArrayData(t, e, s, i) {
    return Ao(t, e, s, i);
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
        (f[r.axis] = r.parse(en(p, c), h)),
        d.push(Zc(en(p, u), f, a, h));
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
      o = mr(a)
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
          r || G(f[o.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(g),
        m = this._calculateBarIndexPixels(g, u),
        b = (f._stacks || {})[o.axis],
        _ = {
          horizontal: c,
          base: p.base,
          enableBorderRadius:
            !b || mr(f._custom) || a === b._top || a === b._bottom,
          x: c ? p.head : m.center,
          y: c ? m.center : p.head,
          height: c ? m.size : Math.abs(p.size),
          width: c ? Math.abs(p.size) : m.size,
        };
      h &&
        (_.options =
          d || this.resolveDataElementOptions(g, t[g].active ? 'active' : i));
      const x = _.options || t[g].options;
      np(_, x, b, a), ip(_, x, u.ratio), this.updateElement(t[g], g, _, i);
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
        if (G(h) || isNaN(h)) return !0;
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
      min: o || Gg(e),
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
      u = mr(c);
    let d = l[e.axis],
      h = 0,
      g = s ? this.applyStack(e, l, s) : d,
      f,
      p;
    g !== d && ((h = g - d), (g = d)),
      u &&
        ((d = c.barStart),
        (g = c.barEnd - c.barStart),
        d !== 0 && we(d) !== we(c.barEnd) && (h = 0),
        (h += d));
    const m = !G(r) && !u ? r : h;
    let b = e.getPixelForValue(m);
    if (
      (this.chart.getDataVisibility(t)
        ? (f = e.getPixelForValue(h + g))
        : (f = b),
      (p = f - b),
      Math.abs(p) < a)
    ) {
      (p = tp(p, e, o) * a), d === o && (b -= p / 2);
      const _ = e.getPixelForDecimal(0),
        x = e.getPixelForDecimal(1),
        w = Math.min(_, x),
        v = Math.max(_, x);
      (b = Math.max(Math.min(b, v), w)),
        (f = b + p),
        s &&
          !u &&
          (l._stacks[e.axis]._visualValues[i] =
            e.getValueForPixel(f) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(o)) {
      const _ = (we(p) * e.getLineWidthForValue(o)) / 2;
      (b += _), (p -= _);
    }
    return { size: p, base: b, head: f, center: f + p / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale,
      i = this.options,
      r = i.skipNull,
      a = X(i.maxBarThickness, 1 / 0);
    let o, l;
    if (e.grouped) {
      const c = r ? this._getStackCount(t) : e.stackCount,
        u = i.barThickness === 'flex' ? Jg(t, e, i, c) : Kg(t, e, i, c),
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
M(ri, 'id', 'bar'),
  M(ri, 'defaults', {
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
  M(ri, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  });
class ai extends oe {
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
      r[a]._custom = X(o[2], this.resolveDataElementOptions(a + s).radius);
    }
    return r;
  }
  parseObjectData(t, e, s, i) {
    const r = super.parseObjectData(t, e, s, i);
    for (let a = 0; a < r.length; a++) {
      const o = e[s + a];
      r[a]._custom = X(
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
      e !== 'active' && (i.radius = 0), (i.radius += X(s && s._custom, r)), i
    );
  }
}
M(ai, 'id', 'bubble'),
  M(ai, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'borderWidth', 'radius'],
      },
    },
  }),
  M(ai, 'overrides', {
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
function rp(n, t, e) {
  let s = 1,
    i = 1,
    r = 0,
    a = 0;
  if (t < ut) {
    const o = n,
      l = o + t,
      c = Math.cos(o),
      u = Math.sin(o),
      d = Math.cos(l),
      h = Math.sin(l),
      g = (x, w, v) => (ws(x, o, l, !0) ? 1 : Math.max(w, w * e, v, v * e)),
      f = (x, w, v) => (ws(x, o, l, !0) ? -1 : Math.min(w, w * e, v, v * e)),
      p = g(0, c, d),
      m = g(kt, u, h),
      b = f(dt, c, d),
      _ = f(dt + kt, u, h);
    (s = (p - b) / 2),
      (i = (m - _) / 2),
      (r = -(p + b) / 2),
      (a = -(m + _) / 2);
  }
  return { ratioX: s, ratioY: i, offsetX: r, offsetY: a };
}
class gn extends oe {
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
      if (K(s[t])) {
        const { key: l = 'value' } = this._parsing;
        r = (c) => +en(s[c], l);
      }
      let a, o;
      for (a = t, o = t + e; a < o; ++a) i._parsed[a] = r(a);
    }
  }
  _getRotation() {
    return ae(this.options.rotation - 90);
  }
  _getCircumference() {
    return ae(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ut,
      e = -ut;
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
      { ratioX: h, ratioY: g, offsetX: f, offsetY: p } = rp(d, u, l),
      m = (s.width - a) / h,
      b = (s.height - a) / g,
      _ = Math.max(Math.min(m, b) / 2, 0),
      x = Pc(this.options.radius, _),
      w = Math.max(x * l, 0),
      v = (x - w) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = f * x),
      (this.offsetY = p * x),
      (i.total = this.calculateTotal()),
      (this.outerRadius = x - v * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - v * c, 0)),
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
      : this.calculateCircumference((i._parsed[t] * r) / ut);
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
        v = {
          x: u + this.offsetX,
          y: d + this.offsetY,
          startAngle: b,
          endAngle: b + x,
          circumference: x,
          outerRadius: f,
          innerRadius: g,
        };
      m &&
        (v.options =
          p || this.resolveDataElementOptions(_, w.active ? 'active' : i)),
        (b += x),
        this.updateElement(w, _, v, i);
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
    return e > 0 && !isNaN(t) ? ut * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = As(e._parsed[t], s.options.locale);
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
    return Math.max(X(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
M(gn, 'id', 'doughnut'),
  M(gn, 'defaults', {
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
  M(gn, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) =>
      t !== 'spacing' &&
      !t.startsWith('borderDash') &&
      !t.startsWith('hoverBorderDash'),
  }),
  M(gn, 'overrides', {
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
class oi extends oe {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: s, data: i = [], _dataset: r } = e,
      a = this.chart._animationsDisabled;
    let { start: o, count: l } = Lc(e, i, a);
    (this._drawStart = o),
      (this._drawCount = l),
      Fc(e) && ((o = 0), (l = i.length)),
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
      m = In(f) ? f : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || r || i === 'none',
      _ = e + s,
      x = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let v = 0; v < x; ++v) {
      const P = t[v],
        O = b ? P : {};
      if (v < e || v >= _) {
        O.skip = !0;
        continue;
      }
      const k = this.getParsed(v),
        C = G(k[g]),
        L = (O[h] = a.getPixelForValue(k[h], v)),
        A = (O[g] =
          r || C
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, k, l) : k[g], v));
      (O.skip = isNaN(L) || isNaN(A) || C),
        (O.stop = v > 0 && Math.abs(k[h] - w[h]) > m),
        p && ((O.parsed = k), (O.raw = c.data[v])),
        d &&
          (O.options =
            u || this.resolveDataElementOptions(v, P.active ? 'active' : i)),
        b || this.updateElement(P, v, O, i),
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
M(oi, 'id', 'line'),
  M(oi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  M(oi, 'overrides', {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
  });
class gs extends oe {
  constructor(t, e) {
    super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = As(e._parsed[t].r, s.options.locale);
    return { label: i[t] || '', value: r };
  }
  parseObjectData(t, e, s, i) {
    return Vc.bind(this)(t, e, s, i);
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
      h = c.getIndexAngle(0) - 0.5 * dt;
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
      ? ae(this.resolveDataElementOptions(t, e).angle || s)
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
class zr extends gn {}
M(zr, 'id', 'pie'),
  M(zr, 'defaults', {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: '100%',
  });
class li extends oe {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: '' + e.getLabelForValue(s[e.axis]),
    };
  }
  parseObjectData(t, e, s, i) {
    return Vc.bind(this)(t, e, s, i);
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
M(li, 'id', 'radar'),
  M(li, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  M(li, 'overrides', {
    aspectRatio: 1,
    scales: { r: { type: 'radialLinear' } },
  });
class ci extends oe {
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
    let { start: r, count: a } = Lc(e, s, i);
    if (
      ((this._drawStart = r),
      (this._drawCount = a),
      Fc(e) && ((r = 0), (a = s.length)),
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
      b = In(p) ? p : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || r || i === 'none';
    let x = e > 0 && this.getParsed(e - 1);
    for (let w = e; w < e + s; ++w) {
      const v = t[w],
        P = this.getParsed(w),
        O = _ ? v : {},
        k = G(P[f]),
        C = (O[g] = a.getPixelForValue(P[g], w)),
        L = (O[f] =
          r || k
            ? o.getBasePixel()
            : o.getPixelForValue(l ? this.applyStack(o, P, l) : P[f], w));
      (O.skip = isNaN(C) || isNaN(L) || k),
        (O.stop = w > 0 && Math.abs(P[g] - x[g]) > b),
        m && ((O.parsed = P), (O.raw = c.data[w])),
        h &&
          (O.options =
            d || this.resolveDataElementOptions(w, v.active ? 'active' : i)),
        _ || this.updateElement(v, w, O, i),
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
M(ci, 'id', 'scatter'),
  M(ci, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    showLine: !1,
    fill: !1,
  }),
  M(ci, 'overrides', {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  });
var ap = Object.freeze({
  __proto__: null,
  BarController: ri,
  BubbleController: ai,
  DoughnutController: gn,
  LineController: oi,
  PieController: zr,
  PolarAreaController: gs,
  RadarController: li,
  ScatterController: ci,
});
function cn() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.',
  );
}
class Ca {
  constructor(t) {
    M(this, 'options');
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Ca.prototype, t);
  }
  init() {}
  formats() {
    return cn();
  }
  parse() {
    return cn();
  }
  format() {
    return cn();
  }
  add() {
    return cn();
  }
  diff() {
    return cn();
  }
  startOf() {
    return cn();
  }
  endOf() {
    return cn();
  }
}
var tu = { _date: Ca };
function op(n, t, e, s) {
  const { controller: i, data: r, _sorted: a } = n,
    o = i._cachedMeta.iScale,
    l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (o && t === o.axis && t !== 'r' && a && r.length) {
    const c = o._reversePixels ? Ef : Fe;
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
            .findIndex((p) => !G(p[d.axis]));
        u.lo -= Math.max(0, g);
        const f = h.slice(u.hi).findIndex((p) => !G(p[d.axis]));
        u.hi += Math.max(0, f);
      }
      return u;
    }
  }
  return { lo: 0, hi: r.length - 1 };
}
function Ki(n, t, e, s, i) {
  const r = n.getSortedVisibleDatasetMetas(),
    a = e[t];
  for (let o = 0, l = r.length; o < l; ++o) {
    const { index: c, data: u } = r[o],
      { lo: d, hi: h } = op(r[o], t, a, i);
    for (let g = d; g <= h; ++g) {
      const f = u[g];
      f.skip || s(f, c, g);
    }
  }
}
function lp(n) {
  const t = n.indexOf('x') !== -1,
    e = n.indexOf('y') !== -1;
  return function (s, i) {
    const r = t ? Math.abs(s.x - i.x) : 0,
      a = e ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
  };
}
function br(n, t, e, s, i) {
  const r = [];
  return (
    (!i && !n.isPointInArea(t)) ||
      Ki(
        n,
        e,
        t,
        function (o, l, c) {
          (!i && !Ie(o, n.chartArea, 0)) ||
            (o.inRange(t.x, t.y, s) &&
              r.push({ element: o, datasetIndex: l, index: c }));
        },
        !0,
      ),
    r
  );
}
function cp(n, t, e, s) {
  let i = [];
  function r(a, o, l) {
    const { startAngle: c, endAngle: u } = a.getProps(
        ['startAngle', 'endAngle'],
        s,
      ),
      { angle: d } = Oc(a, { x: t.x, y: t.y });
    ws(d, c, u) && i.push({ element: a, datasetIndex: o, index: l });
  }
  return Ki(n, e, t, r), i;
}
function up(n, t, e, s, i, r) {
  let a = [];
  const o = lp(e);
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
  return Ki(n, e, t, c), a;
}
function _r(n, t, e, s, i, r) {
  return !r && !n.isPointInArea(t)
    ? []
    : e === 'r' && !s
      ? cp(n, t, e, i)
      : up(n, t, e, s, i, r);
}
function Fo(n, t, e, s, i) {
  const r = [],
    a = e === 'x' ? 'inXRange' : 'inYRange';
  let o = !1;
  return (
    Ki(n, e, t, (l, c, u) => {
      l[a] &&
        l[a](t[e], i) &&
        (r.push({ element: l, datasetIndex: c, index: u }),
        (o = o || l.inRange(t.x, t.y, i)));
    }),
    s && !o ? [] : r
  );
}
var dp = {
  modes: {
    index(n, t, e, s) {
      const i = dn(t, n),
        r = e.axis || 'x',
        a = e.includeInvisible || !1,
        o = e.intersect ? br(n, i, r, s, a) : _r(n, i, r, !1, s, a),
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
      const i = dn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      let o = e.intersect ? br(n, i, r, s, a) : _r(n, i, r, !1, s, a);
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
      const i = dn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return br(n, i, r, s, a);
    },
    nearest(n, t, e, s) {
      const i = dn(t, n),
        r = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return _r(n, i, r, e.intersect, s, a);
    },
    x(n, t, e, s) {
      const i = dn(t, n);
      return Fo(n, i, 'x', e.intersect, s);
    },
    y(n, t, e, s) {
      const i = dn(t, n);
      return Fo(n, i, 'y', e.intersect, s);
    },
  },
};
const eu = ['left', 'top', 'right', 'bottom'];
function Qn(n, t) {
  return n.filter((e) => e.pos === t);
}
function Io(n, t) {
  return n.filter((e) => eu.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Gn(n, t) {
  return n.sort((e, s) => {
    const i = t ? s : e,
      r = t ? e : s;
    return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
  });
}
function hp(n) {
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
function fp(n) {
  const t = {};
  for (const e of n) {
    const { stack: s, pos: i, stackWeight: r } = e;
    if (!s || !eu.includes(i)) continue;
    const a = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    a.count++, (a.weight += r);
  }
  return t;
}
function gp(n, t) {
  const e = fp(n),
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
function pp(n) {
  const t = hp(n),
    e = Gn(
      t.filter((c) => c.box.fullSize),
      !0,
    ),
    s = Gn(Qn(t, 'left'), !0),
    i = Gn(Qn(t, 'right')),
    r = Gn(Qn(t, 'top'), !0),
    a = Gn(Qn(t, 'bottom')),
    o = Io(t, 'x'),
    l = Io(t, 'y');
  return {
    fullSize: e,
    leftAndTop: s.concat(r),
    rightAndBottom: i.concat(l).concat(a).concat(o),
    chartArea: Qn(t, 'chartArea'),
    vertical: s.concat(i).concat(l),
    horizontal: r.concat(a).concat(o),
  };
}
function No(n, t, e, s) {
  return Math.max(n[e], t[e]) + Math.max(n[s], t[s]);
}
function nu(n, t) {
  (n.top = Math.max(n.top, t.top)),
    (n.left = Math.max(n.left, t.left)),
    (n.bottom = Math.max(n.bottom, t.bottom)),
    (n.right = Math.max(n.right, t.right));
}
function mp(n, t, e, s) {
  const { pos: i, box: r } = e,
    a = n.maxPadding;
  if (!K(i)) {
    e.size && (n[i] -= e.size);
    const d = s[e.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, e.horizontal ? r.height : r.width)),
      (e.size = d.size / d.count),
      (n[i] += e.size);
  }
  r.getPadding && nu(a, r.getPadding());
  const o = Math.max(0, t.outerWidth - No(a, n, 'left', 'right')),
    l = Math.max(0, t.outerHeight - No(a, n, 'top', 'bottom')),
    c = o !== n.w,
    u = l !== n.h;
  return (
    (n.w = o),
    (n.h = l),
    e.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function bp(n) {
  const t = n.maxPadding;
  function e(s) {
    const i = Math.max(t[s] - n[s], 0);
    return (n[s] += i), i;
  }
  (n.y += e('top')), (n.x += e('left')), e('right'), e('bottom');
}
function _p(n, t) {
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
      l.update(o.width || t.w, o.height || t.h, _p(o.horizontal, t));
    const { same: d, other: h } = mp(t, e, o, s);
    (c |= d && i.length), (u = u || h), l.fullSize || i.push(o);
  }
  return (c && rs(i, t, e, s)) || u;
}
function Xs(n, t, e, s, i) {
  (n.top = e),
    (n.left = t),
    (n.right = t + s),
    (n.bottom = e + i),
    (n.width = s),
    (n.height = i);
}
function Bo(n, t, e, s) {
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
          ? Xs(l, i.left, a, e.outerWidth - i.right - i.left, h)
          : Xs(l, t.left + c.placed, a, d, h),
        (c.start = a),
        (c.placed += d),
        (a = l.bottom);
    } else {
      const d = t.h * u,
        h = c.size || l.width;
      xs(c.start) && (r = c.start),
        l.fullSize
          ? Xs(l, r, i.top, h, e.outerHeight - i.bottom - i.top)
          : Xs(l, r, t.top + c.placed, h, d),
        (c.start = r),
        (c.placed += d),
        (r = l.right);
    }
  }
  (t.x = r), (t.y = a);
}
var At = {
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
    const i = Rt(n.options.layout.padding),
      r = Math.max(t - i.width, 0),
      a = Math.max(e - i.height, 0),
      o = pp(n.boxes),
      l = o.vertical,
      c = o.horizontal;
    nt(n.boxes, (p) => {
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
    nu(h, Rt(s));
    const g = Object.assign(
        { maxPadding: h, w: r, h: a, x: i.left, y: i.top },
        i,
      ),
      f = gp(l.concat(c), d);
    rs(o.fullSize, g, d, f),
      rs(l, g, d, f),
      rs(c, g, d, f) && rs(l, g, d, f),
      bp(g),
      Bo(o.leftAndTop, g, d, f),
      (g.x += g.w),
      (g.y += g.h),
      Bo(o.rightAndBottom, g, d, f),
      (n.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w,
      }),
      nt(o.chartArea, (p) => {
        const m = p.box;
        Object.assign(m, n.chartArea),
          m.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class su {
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
class vp extends su {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ui = '$chartjs',
  yp = {
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
  zo = (n) => n === null || n === '';
function xp(n, t) {
  const e = n.style,
    s = n.getAttribute('height'),
    i = n.getAttribute('width');
  if (
    ((n[ui] = {
      initial: {
        height: s,
        width: i,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    zo(i))
  ) {
    const r = wo(n, 'width');
    r !== void 0 && (n.width = r);
  }
  if (zo(s))
    if (n.style.height === '') n.height = n.width / (t || 2);
    else {
      const r = wo(n, 'height');
      r !== void 0 && (n.height = r);
    }
  return n;
}
const iu = kg ? { passive: !0 } : !1;
function wp(n, t, e) {
  n && n.addEventListener(t, e, iu);
}
function kp(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, iu);
}
function Mp(n, t) {
  const e = yp[n.type] || n.type,
    { x: s, y: i } = dn(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null,
  };
}
function Ci(n, t) {
  for (const e of n) if (e === t || e.contains(t)) return !0;
}
function Sp(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Ci(o.addedNodes, s)), (a = a && !Ci(o.removedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function Pp(n, t, e) {
  const s = n.canvas,
    i = new MutationObserver((r) => {
      let a = !1;
      for (const o of r)
        (a = a || Ci(o.removedNodes, s)), (a = a && !Ci(o.addedNodes, s));
      a && e();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const Ms = new Map();
let Wo = 0;
function ru() {
  const n = window.devicePixelRatio;
  n !== Wo &&
    ((Wo = n),
    Ms.forEach((t, e) => {
      e.currentDevicePixelRatio !== n && t();
    }));
}
function Dp(n, t) {
  Ms.size || window.addEventListener('resize', ru), Ms.set(n, t);
}
function Tp(n) {
  Ms.delete(n), Ms.size || window.removeEventListener('resize', ru);
}
function Op(n, t, e) {
  const s = n.canvas,
    i = s && Ea(s);
  if (!i) return;
  const r = Rc((o, l) => {
      const c = i.clientWidth;
      e(o, l), c < i.clientWidth && e();
    }, window),
    a = new ResizeObserver((o) => {
      const l = o[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || r(c, u);
    });
  return a.observe(i), Dp(n, r), a;
}
function vr(n, t, e) {
  e && e.disconnect(), t === 'resize' && Tp(n);
}
function Ep(n, t, e) {
  const s = n.canvas,
    i = Rc((r) => {
      n.ctx !== null && e(Mp(r, n));
    }, n);
  return wp(s, t, i), i;
}
class Cp extends su {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext('2d');
    return s && s.canvas === t ? (xp(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[ui]) return !1;
    const s = e[ui].initial;
    ['height', 'width'].forEach((r) => {
      const a = s[r];
      G(a) ? e.removeAttribute(r) : e.setAttribute(r, a);
    });
    const i = s.style || {};
    return (
      Object.keys(i).forEach((r) => {
        e.style[r] = i[r];
      }),
      (e.width = e.width),
      delete e[ui],
      !0
    );
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const i = t.$proxies || (t.$proxies = {}),
      a = { attach: Sp, detach: Pp, resize: Op }[e] || Ep;
    i[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[e];
    if (!i) return;
    (({ attach: vr, detach: vr, resize: vr })[e] || kp)(t, e, i),
      (s[e] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, i) {
    return wg(t, e, s, i);
  }
  isAttached(t) {
    const e = t && Ea(t);
    return !!(e && e.isConnected);
  }
}
function Ap(n) {
  return !Oa() || (typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas)
    ? vp
    : Cp;
}
var ni;
let We =
  ((ni = class {
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
      return In(this.x) && In(this.y);
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
  M(ni, 'defaults', {}),
  M(ni, 'defaultRoutes'),
  ni);
function Rp(n, t) {
  const e = n.options.ticks,
    s = Lp(n),
    i = Math.min(e.maxTicksLimit || s, s),
    r = e.major.enabled ? Ip(t) : [],
    a = r.length,
    o = r[0],
    l = r[a - 1],
    c = [];
  if (a > i) return Np(t, c, r, a / i), c;
  const u = Fp(r, t, i);
  if (a > 0) {
    let d, h;
    const g = a > 1 ? Math.round((l - o) / (a - 1)) : null;
    for (Qs(t, c, u, G(g) ? 0 : o - g, o), d = 0, h = a - 1; d < h; d++)
      Qs(t, c, u, r[d], r[d + 1]);
    return Qs(t, c, u, l, G(g) ? t.length : l + g), c;
  }
  return Qs(t, c, u), c;
}
function Lp(n) {
  const t = n.options.offset,
    e = n._tickSize(),
    s = n._length / e + (t ? 0 : 1),
    i = n._maxLength / e;
  return Math.floor(Math.min(s, i));
}
function Fp(n, t, e) {
  const s = Bp(n),
    i = t.length / e;
  if (!s) return Math.max(i, 1);
  const r = Sf(s);
  for (let a = 0, o = r.length - 1; a < o; a++) {
    const l = r[a];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function Ip(n) {
  const t = [];
  let e, s;
  for (e = 0, s = n.length; e < s; e++) n[e].major && t.push(e);
  return t;
}
function Np(n, t, e, s) {
  let i = 0,
    r = e[0],
    a;
  for (s = Math.ceil(s), a = 0; a < n.length; a++)
    a === r && (t.push(n[a]), i++, (r = e[i * s]));
}
function Qs(n, t, e, s, i) {
  const r = X(s, 0),
    a = Math.min(X(i, n.length), n.length);
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
function Bp(n) {
  const t = n.length;
  let e, s;
  if (t < 2) return !1;
  for (s = n[0], e = 1; e < t; ++e) if (n[e] - n[e - 1] !== s) return !1;
  return s;
}
const zp = (n) => (n === 'left' ? 'right' : n === 'right' ? 'left' : n),
  Ho = (n, t, e) => (t === 'top' || t === 'left' ? n[t] + e : n[t] - e),
  jo = (n, t) => Math.min(t || n, n);
function Vo(n, t) {
  const e = [],
    s = n.length / t,
    i = n.length;
  let r = 0;
  for (; r < i; r += s) e.push(n[Math.floor(r)]);
  return e;
}
function Wp(n, t, e) {
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
function Hp(n, t) {
  nt(n, (e) => {
    const s = e.gc,
      i = s.length / 2;
    let r;
    if (i > t) {
      for (r = 0; r < i; ++r) delete e.data[s[r]];
      s.splice(0, i);
    }
  });
}
function Kn(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function qo(n, t) {
  if (!n.display) return 0;
  const e = Pt(n.font, t),
    s = Rt(n.padding);
  return (ft(n.text) ? n.text.length : 1) * e.lineHeight + s.height;
}
function jp(n, t) {
  return sn(n, { scale: t, type: 'scale' });
}
function Vp(n, t, e) {
  return sn(n, { tick: e, index: t, type: 'tick' });
}
function qp(n, t, e) {
  let s = ka(n);
  return ((e && t !== 'right') || (!e && t === 'right')) && (s = zp(s)), s;
}
function Yp(n, t, e, s) {
  const { top: i, left: r, bottom: a, right: o, chart: l } = n,
    { chartArea: c, scales: u } = l;
  let d = 0,
    h,
    g,
    f;
  const p = a - i,
    m = o - r;
  if (n.isHorizontal()) {
    if (((g = Et(s, r, o)), K(e))) {
      const b = Object.keys(e)[0],
        _ = e[b];
      f = u[b].getPixelForValue(_) + p - t;
    } else
      e === 'center' ? (f = (c.bottom + c.top) / 2 + p - t) : (f = Ho(n, e, t));
    h = o - r;
  } else {
    if (K(e)) {
      const b = Object.keys(e)[0],
        _ = e[b];
      g = u[b].getPixelForValue(_) - m + t;
    } else
      e === 'center' ? (g = (c.left + c.right) / 2 - m + t) : (g = Ho(n, e, t));
    (f = Et(s, a, i)), (d = e === 'left' ? -kt : kt);
  }
  return { titleX: g, titleY: f, maxWidth: h, rotation: d };
}
class Mn extends We {
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
      (t = Gt(t, Number.POSITIVE_INFINITY)),
      (e = Gt(e, Number.NEGATIVE_INFINITY)),
      (s = Gt(s, Number.POSITIVE_INFINITY)),
      (i = Gt(i, Number.NEGATIVE_INFINITY)),
      { min: Gt(t, s), max: Gt(e, i), minDefined: vt(t), maxDefined: vt(e) }
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
      { min: Gt(e, Gt(s, e)), max: Gt(s, Gt(e, s)) }
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
    lt(this.options.beforeUpdate, [this]);
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
        (this._range = tg(this, r, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = o < this.ticks.length;
    this._convertTicksToLabels(l ? Vo(this.ticks, o) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === 'auto') &&
        ((this.ticks = Rp(this, this.ticks)),
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
    lt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    lt(this.options.beforeSetDimensions, [this]);
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
    lt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), lt(this.options[t], [this]);
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
    lt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, i, r;
    for (s = 0, i = t.length; s < i; s++)
      (r = t[s]), (r.label = lt(e.callback, [r.value, s, t], this));
  }
  afterTickToLabelConversion() {
    lt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    lt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      s = jo(this.ticks.length, t.ticks.maxTicksLimit),
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
      g = Dt(this.chart.width - d, 0, this.maxWidth);
    (o = t.offset ? this.maxWidth / s : g / (s - 1)),
      d + 6 > o &&
        ((o = g / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Kn(t.grid) -
          e.padding -
          qo(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (a = xa(
          Math.min(
            Math.asin(Dt((u.highest.height + 6) / o, -1, 1)),
            Math.asin(Dt(l / c, -1, 1)) - Math.asin(Dt(h / c, -1, 1)),
          ),
        )),
        (a = Math.max(i, Math.min(r, a)))),
      (this.labelRotation = a);
  }
  afterCalculateLabelRotation() {
    lt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    lt(this.options.beforeFit, [this]);
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
      const l = qo(i, e.options.font);
      if (
        (o
          ? ((t.width = this.maxWidth), (t.height = Kn(r) + l))
          : ((t.height = this.maxHeight), (t.width = Kn(r) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          g = s.padding * 2,
          f = ae(this.labelRotation),
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
    lt(this.options.afterFit, [this]);
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
      G(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Vo(s, e)),
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
      l = Math.floor(e / jo(e, s));
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
      v;
    for (d = 0; d < e; d += l) {
      if (
        ((f = t[d].label),
        (p = this._resolveTickFontOptions(d)),
        (i.font = m = p.string),
        (b = r[m] = r[m] || { data: {}, gc: [] }),
        (_ = p.lineHeight),
        (x = w = 0),
        !G(f) && !ft(f))
      )
        (x = Oi(i, b.data, b.gc, x, f)), (w = _);
      else if (ft(f))
        for (h = 0, g = f.length; h < g; ++h)
          (v = f[h]),
            !G(v) && !ft(v) && ((x = Oi(i, b.data, b.gc, x, v)), (w += _));
      a.push(x), o.push(w), (c = Math.max(x, c)), (u = Math.max(w, u));
    }
    Hp(r, e);
    const P = a.indexOf(c),
      O = o.indexOf(u),
      k = (C) => ({ width: a[C] || 0, height: o[C] || 0 });
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
    return Of(this._alignToPixels ? ln(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = Vp(this.getContext(), t, s));
    }
    return this.$context || (this.$context = jp(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = ae(this.labelRotation),
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
      h = Kn(r),
      g = [],
      f = o.setContext(this.getContext()),
      p = f.display ? f.width : 0,
      m = p / 2,
      b = function (I) {
        return ln(s, I, p);
      };
    let _, x, w, v, P, O, k, C, L, A, T, F;
    if (a === 'top')
      (_ = b(this.bottom)),
        (O = this.bottom - h),
        (C = _ - m),
        (A = b(t.top) + m),
        (F = t.bottom);
    else if (a === 'bottom')
      (_ = b(this.top)),
        (A = t.top),
        (F = b(t.bottom) - m),
        (O = _ + m),
        (C = this.top + h);
    else if (a === 'left')
      (_ = b(this.right)),
        (P = this.right - h),
        (k = _ - m),
        (L = b(t.left) + m),
        (T = t.right);
    else if (a === 'right')
      (_ = b(this.left)),
        (L = t.left),
        (T = b(t.right) - m),
        (P = _ + m),
        (k = this.left + h);
    else if (e === 'x') {
      if (a === 'center') _ = b((t.top + t.bottom) / 2 + 0.5);
      else if (K(a)) {
        const I = Object.keys(a)[0],
          H = a[I];
        _ = b(this.chart.scales[I].getPixelForValue(H));
      }
      (A = t.top), (F = t.bottom), (O = _ + m), (C = O + h);
    } else if (e === 'y') {
      if (a === 'center') _ = b((t.left + t.right) / 2);
      else if (K(a)) {
        const I = Object.keys(a)[0],
          H = a[I];
        _ = b(this.chart.scales[I].getPixelForValue(H));
      }
      (P = _ - m), (k = P - h), (L = t.left), (T = t.right);
    }
    const V = X(i.ticks.maxTicksLimit, d),
      W = Math.max(1, Math.ceil(d / V));
    for (x = 0; x < d; x += W) {
      const I = this.getContext(x),
        H = r.setContext(I),
        Y = o.setContext(I),
        q = H.lineWidth,
        Q = H.color,
        it = Y.dash || [],
        wt = Y.dashOffset,
        Tt = H.tickWidth,
        pt = H.tickColor,
        ct = H.tickBorderDash || [],
        ot = H.tickBorderDashOffset;
      (w = Wp(this, x, l)),
        w !== void 0 &&
          ((v = ln(s, w, q)),
          c ? (P = k = L = T = v) : (O = C = A = F = v),
          g.push({
            tx1: P,
            ty1: O,
            tx2: k,
            ty2: C,
            x1: L,
            y1: A,
            x2: T,
            y2: F,
            width: q,
            color: Q,
            borderDash: it,
            borderDashOffset: wt,
            tickWidth: Tt,
            tickColor: pt,
            tickBorderDash: ct,
            tickBorderDashOffset: ot,
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
      h = Kn(s.grid),
      g = h + u,
      f = d ? -u : g,
      p = -ae(this.labelRotation),
      m = [];
    let b,
      _,
      x,
      w,
      v,
      P,
      O,
      k,
      C,
      L,
      A,
      T,
      F = 'middle';
    if (i === 'top')
      (P = this.bottom - f), (O = this._getXAxisLabelAlignment());
    else if (i === 'bottom')
      (P = this.top + f), (O = this._getXAxisLabelAlignment());
    else if (i === 'left') {
      const W = this._getYAxisLabelAlignment(h);
      (O = W.textAlign), (v = W.x);
    } else if (i === 'right') {
      const W = this._getYAxisLabelAlignment(h);
      (O = W.textAlign), (v = W.x);
    } else if (e === 'x') {
      if (i === 'center') P = (t.top + t.bottom) / 2 + g;
      else if (K(i)) {
        const W = Object.keys(i)[0],
          I = i[W];
        P = this.chart.scales[W].getPixelForValue(I) + g;
      }
      O = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (i === 'center') v = (t.left + t.right) / 2 - g;
      else if (K(i)) {
        const W = Object.keys(i)[0],
          I = i[W];
        v = this.chart.scales[W].getPixelForValue(I);
      }
      O = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === 'y' && (l === 'start' ? (F = 'top') : l === 'end' && (F = 'bottom'));
    const V = this._getLabelSizes();
    for (b = 0, _ = o.length; b < _; ++b) {
      (x = o[b]), (w = x.label);
      const W = r.setContext(this.getContext(b));
      (k = this.getPixelForTick(b) + r.labelOffset),
        (C = this._resolveTickFontOptions(b)),
        (L = C.lineHeight),
        (A = ft(w) ? w.length : 1);
      const I = A / 2,
        H = W.color,
        Y = W.textStrokeColor,
        q = W.textStrokeWidth;
      let Q = O;
      a
        ? ((v = k),
          O === 'inner' &&
            (b === _ - 1
              ? (Q = this.options.reverse ? 'left' : 'right')
              : b === 0
                ? (Q = this.options.reverse ? 'right' : 'left')
                : (Q = 'center')),
          i === 'top'
            ? c === 'near' || p !== 0
              ? (T = -A * L + L / 2)
              : c === 'center'
                ? (T = -V.highest.height / 2 - I * L + L)
                : (T = -V.highest.height + L / 2)
            : c === 'near' || p !== 0
              ? (T = L / 2)
              : c === 'center'
                ? (T = V.highest.height / 2 - I * L)
                : (T = V.highest.height - A * L),
          d && (T *= -1),
          p !== 0 && !W.showLabelBackdrop && (v += (L / 2) * Math.sin(p)))
        : ((P = k), (T = ((1 - A) * L) / 2));
      let it;
      if (W.showLabelBackdrop) {
        const wt = Rt(W.backdropPadding),
          Tt = V.heights[b],
          pt = V.widths[b];
        let ct = T - wt.top,
          ot = 0 - wt.left;
        switch (F) {
          case 'middle':
            ct -= Tt / 2;
            break;
          case 'bottom':
            ct -= Tt;
            break;
        }
        switch (O) {
          case 'center':
            ot -= pt / 2;
            break;
          case 'right':
            ot -= pt;
            break;
          case 'inner':
            b === _ - 1 ? (ot -= pt) : b > 0 && (ot -= pt / 2);
            break;
        }
        it = {
          left: ot,
          top: ct,
          width: pt + wt.width,
          height: Tt + wt.height,
          color: W.backdropColor,
        };
      }
      m.push({
        label: w,
        font: C,
        textOffset: T,
        options: {
          rotation: p,
          color: H,
          strokeColor: Y,
          strokeWidth: q,
          textAlign: Q,
          textBaseline: F,
          translation: [v, P],
          backdrop: it,
        },
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ae(this.labelRotation)) return t === 'top' ? 'left' : 'right';
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
      ? ((c = ln(t, this.left, a) - a / 2),
        (u = ln(t, this.right, o) + o / 2),
        (d = h = l))
      : ((d = ln(t, this.top, a) - a / 2),
        (h = ln(t, this.bottom, o) + o / 2),
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
    i && Xi(s, i);
    const r = this.getLabelItems(t);
    for (const a of r) {
      const o = a.options,
        l = a.font,
        c = a.label,
        u = a.textOffset;
      xn(s, c, 0, u, l, o);
    }
    i && Qi(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: s, reverse: i },
    } = this;
    if (!s.display) return;
    const r = Pt(s.font),
      a = Rt(s.padding),
      o = s.align;
    let l = r.lineHeight / 2;
    e === 'bottom' || e === 'center' || K(e)
      ? ((l += a.bottom),
        ft(s.text) && (l += r.lineHeight * (s.text.length - 1)))
      : (l += a.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = Yp(this, l, e, o);
    xn(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: d,
      rotation: h,
      textAlign: qp(o, e, i),
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
      s = X(t.grid && t.grid.z, -1),
      i = X(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Mn.prototype.draw
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
    return Pt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Gs {
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
    Xp(e) && (s = this.register(e));
    const i = this.items,
      r = t.id,
      a = this.scope + '.' + r;
    if (!r) throw new Error('class does not have id: ' + t);
    return (
      r in i ||
        ((i[r] = t),
        $p(t, a, s),
        this.override && gt.override(t.id, t.overrides)),
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
      i && s in gt[i] && (delete gt[i][s], this.override && delete yn[s]);
  }
}
function $p(n, t, e) {
  const s = ys(Object.create(null), [
    e ? gt.get(e) : {},
    gt.get(t),
    n.defaults,
  ]);
  gt.set(t, s),
    n.defaultRoutes && Up(t, n.defaultRoutes),
    n.descriptors && gt.describe(t, n.descriptors);
}
function Up(n, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split('.'),
      i = s.pop(),
      r = [n].concat(s).join('.'),
      a = t[e].split('.'),
      o = a.pop(),
      l = a.join('.');
    gt.route(r, i, l, o);
  });
}
function Xp(n) {
  return 'id' in n && 'defaults' in n;
}
class Qp {
  constructor() {
    (this.controllers = new Gs(oe, 'datasets', !0)),
      (this.elements = new Gs(We, 'elements')),
      (this.plugins = new Gs(Object, 'plugins')),
      (this.scales = new Gs(Mn, 'scales')),
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
        : nt(i, (a) => {
            const o = s || this._getRegistryForType(a);
            this._exec(t, o, a);
          });
    });
  }
  _exec(t, e, s) {
    const i = ya(t);
    lt(s['before' + i], [], s), e[t](s), lt(s['after' + i], [], s);
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
var be = new Qp();
class Gp {
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
      if (lt(o, l, a) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    G(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config,
      i = X(s.options && s.options.plugins, {}),
      r = Kp(s);
    return i === !1 && !e ? [] : Zp(t, r, i, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      s = this._cache,
      i = (r, a) =>
        r.filter((o) => !a.some((l) => o.plugin.id === l.plugin.id));
    this._notify(i(e, s), t, 'stop'), this._notify(i(s, e), t, 'start');
  }
}
function Kp(n) {
  const t = {},
    e = [],
    s = Object.keys(be.plugins.items);
  for (let r = 0; r < s.length; r++) e.push(be.getPlugin(s[r]));
  const i = n.plugins || [];
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    e.indexOf(a) === -1 && (e.push(a), (t[a.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function Jp(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function Zp(n, { plugins: t, localIds: e }, s, i) {
  const r = [],
    a = n.getContext();
  for (const o of t) {
    const l = o.id,
      c = Jp(s[l], i);
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
function Wr(n, t) {
  const e = gt.datasets[n] || {};
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
function Yo(n) {
  if (n === 'x' || n === 'y' || n === 'r') return n;
}
function sm(n) {
  if (n === 'top' || n === 'bottom') return 'x';
  if (n === 'left' || n === 'right') return 'y';
}
function Hr(n, ...t) {
  if (Yo(n)) return n;
  for (const e of t) {
    const s =
      e.axis || sm(e.position) || (n.length > 1 && Yo(n[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function $o(n, t, e) {
  if (e[t + 'AxisID'] === n) return { axis: t };
}
function im(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === n || s.yAxisID === n);
    if (e.length) return $o(n, 'x', e[0]) || $o(n, 'y', e[0]);
  }
  return {};
}
function rm(n, t) {
  const e = yn[n.type] || { scales: {} },
    s = t.scales || {},
    i = Wr(n.type, t),
    r = Object.create(null);
  return (
    Object.keys(s).forEach((a) => {
      const o = s[a];
      if (!K(o))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (o._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`,
        );
      const l = Hr(a, o, im(a, n), gt.scales[o.type]),
        c = nm(l, i),
        u = e.scales || {};
      r[a] = us(Object.create(null), [{ axis: l }, o, u[l], u[c]]);
    }),
    n.data.datasets.forEach((a) => {
      const o = a.type || n.type,
        l = a.indexAxis || Wr(o, t),
        u = (yn[o] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = em(d, l),
          g = a[h + 'AxisID'] || h;
        (r[g] = r[g] || Object.create(null)),
          us(r[g], [{ axis: h }, s[g], u[d]]);
      });
    }),
    Object.keys(r).forEach((a) => {
      const o = r[a];
      us(o, [gt.scales[o.type], gt.scale]);
    }),
    r
  );
}
function au(n) {
  const t = n.options || (n.options = {});
  (t.plugins = X(t.plugins, {})), (t.scales = rm(n, t));
}
function ou(n) {
  return (
    (n = n || {}),
    (n.datasets = n.datasets || []),
    (n.labels = n.labels || []),
    n
  );
}
function am(n) {
  return (n = n || {}), (n.data = ou(n.data)), au(n), n;
}
const Uo = new Map(),
  lu = new Set();
function Ks(n, t) {
  let e = Uo.get(n);
  return e || ((e = t()), Uo.set(n, e), lu.add(e)), e;
}
const Jn = (n, t, e) => {
  const s = en(t, e);
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
    this._config.data = ou(t);
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
    this.clearCache(), au(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ks(t, () => [[`datasets.${t}`, '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ks(`${t}.transition.${e}`, () => [
      [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
      [`datasets.${t}`, ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Ks(`${t}-${e}`, () => [
      [`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ''],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      s = this.type;
    return Ks(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), u.forEach((d) => Jn(l, t, d))),
        u.forEach((d) => Jn(l, i, d)),
        u.forEach((d) => Jn(l, yn[r] || {}, d)),
        u.forEach((d) => Jn(l, gt, d)),
        u.forEach((d) => Jn(l, Nr, d));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), lu.has(e) && a.set(e, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, yn[e] || {}, gt.datasets[e] || {}, { type: e }, gt, Nr];
  }
  resolveNamedOptions(t, e, s, i = ['']) {
    const r = { $shared: !0 },
      { resolver: a, subPrefixes: o } = Xo(this._resolverCache, t, i);
    let l = a;
    if (cm(a, e)) {
      (r.$shared = !1), (s = nn(s) ? s() : s);
      const c = this.createResolver(t, s, o);
      l = Nn(a, s, c);
    }
    for (const c of e) r[c] = l[c];
    return r;
  }
  createResolver(t, e, s = [''], i) {
    const { resolver: r } = Xo(this._resolverCache, t, s);
    return K(e) ? Nn(r, e, void 0, i) : r;
  }
}
function Xo(n, t, e) {
  let s = n.get(t);
  s || ((s = new Map()), n.set(t, s));
  const i = e.join();
  let r = s.get(i);
  return (
    r ||
      ((r = {
        resolver: Pa(t, e),
        subPrefixes: e.filter((o) => !o.toLowerCase().includes('hover')),
      }),
      s.set(i, r)),
    r
  );
}
const lm = (n) => K(n) && Object.getOwnPropertyNames(n).some((t) => nn(n[t]));
function cm(n, t) {
  const { isScriptable: e, isIndexable: s } = zc(n);
  for (const i of t) {
    const r = e(i),
      a = s(i),
      o = (a || r) && n[i];
    if ((r && (nn(o) || lm(o))) || (a && ft(o))) return !0;
  }
  return !1;
}
var um = '4.4.9';
const dm = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Qo(n, t) {
  return n === 'top' || n === 'bottom' || (dm.indexOf(n) === -1 && t === 'x');
}
function Go(n, t) {
  return function (e, s) {
    return e[n] === s[n] ? e[t] - s[t] : e[n] - s[n];
  };
}
function Ko(n) {
  const t = n.chart,
    e = t.options.animation;
  t.notifyPlugins('afterRender'), lt(e && e.onComplete, [n], t);
}
function hm(n) {
  const t = n.chart,
    e = t.options.animation;
  lt(e && e.onProgress, [n], t);
}
function cu(n) {
  return (
    Oa() && typeof n == 'string'
      ? (n = document.getElementById(n))
      : n && n.length && (n = n[0]),
    n && n.canvas && (n = n.canvas),
    n
  );
}
const di = {},
  Jo = (n) => {
    const t = cu(n);
    return Object.values(di)
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
function gm(n, t, e, s) {
  return !e || n.type === 'mouseout' ? null : s ? t : n;
}
class Vt {
  static register(...t) {
    be.add(...t), Zo();
  }
  static unregister(...t) {
    be.remove(...t), Zo();
  }
  constructor(t, e) {
    const s = (this.config = new om(e)),
      i = cu(t),
      r = Jo(i);
    if (r)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          r.id +
          "' must be destroyed before the canvas with ID '" +
          r.canvas.id +
          "' can be reused.",
      );
    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
    (this.platform = new (s.platform || Ap(i))()),
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
      (this._plugins = new Gp()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Rf((d) => this.update(d), a.resizeDelay || 0)),
      (this._dataChanges = []),
      (di[this.id] = this),
      !o || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    Ce.listen(this, 'complete', Ko),
      Ce.listen(this, 'progress', hm),
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
    return G(t) ? (e && r ? r : i ? s / i : null) : t;
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
    return be;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive
        ? this.resize()
        : xo(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return _o(this.canvas, this.ctx), this;
  }
  stop() {
    return Ce.stop(this), this;
  }
  resize(t, e) {
    Ce.running(this)
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
      xo(this, o, !0) &&
        (this.notifyPlugins('resize', { size: a }),
        lt(s.onResize, [this, a], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    nt(e, (s, i) => {
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
            l = Hr(a, o),
            c = l === 'r',
            u = l === 'x';
          return {
            options: o,
            dposition: c ? 'chartArea' : u ? 'bottom' : 'left',
            dtype: c ? 'radialLinear' : u ? 'category' : 'linear',
          };
        }),
      )),
      nt(r, (a) => {
        const o = a.options,
          l = o.id,
          c = Hr(l, o),
          u = X(o.type, a.dtype);
        (o.position === void 0 || Qo(o.position, c) !== Qo(a.dposition)) &&
          (o.position = a.dposition),
          (i[l] = !0);
        let d = null;
        if (l in s && s[l].type === u) d = s[l];
        else {
          const h = be.getScale(u);
          (d = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
            (s[d.id] = d);
        }
        d.init(o, t);
      }),
      nt(i, (a, o) => {
        a || delete s[o];
      }),
      nt(s, (a) => {
        At.configure(this, a, a.options), At.addBox(this, a);
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
    this._sortedMetasets = t.slice(0).sort(Go('order', 'index'));
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
        (a.indexAxis = r.indexAxis || Wr(o, this.options)),
        (a.order = r.order || 0),
        (a.index = s),
        (a.label = '' + r.label),
        (a.visible = this.isDatasetVisible(s)),
        a.controller)
      )
        a.controller.updateIndex(s), a.controller.linkScales();
      else {
        const l = be.getController(o),
          { datasetElementType: c, dataElementType: u } = gt.datasets[o];
        Object.assign(l, {
          dataElementType: be.getElement(u),
          datasetElementType: c && be.getElement(c),
        }),
          (a.controller = new l(this, s)),
          t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    nt(
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
        nt(r, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(Go('z', '_idx'));
    const { _active: o, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : o.length && this._updateHoverStyles(o, o, !0),
      this.render();
  }
  _updateScales() {
    nt(this.scales, (t) => {
      At.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      e = new Set(Object.keys(this._listeners)),
      s = new Set(t.events);
    (!lo(e, s) || !!this._responsiveListeners !== t.responsive) &&
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
    for (let r = 1; r < e; r++) if (!lo(i, s(r))) return;
    return Array.from(i)
      .map((r) => r.split(','))
      .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
    At.update(this, this.width, this.height, t);
    const e = this.chartArea,
      s = e.width <= 0 || e.height <= 0;
    (this._layers = []),
      nt(
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
        this._updateDataset(e, nn(t) ? t({ datasetIndex: e }) : t);
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
      (Ce.has(this)
        ? this.attached && !Ce.running(this) && Ce.start(this)
        : (this.draw(), Ko({ chart: this })));
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
      i = Gc(this, t);
    this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
      (i && Xi(e, i),
      t.controller.draw(),
      i && Qi(e),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', s));
  }
  isPointInArea(t) {
    return Ie(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, i) {
    const r = dp.modes[e];
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
      (this.$context = sn(null, { chart: this, type: 'chart' }))
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
      this.stop(), Ce.remove(this), t = 0, e = this.data.datasets.length;
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
        _o(t, e),
        this.platform.releaseContext(e),
        (this.canvas = null),
        (this.ctx = null)),
      delete di[this.id],
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
    nt(this.options.events, (r) => s(r, i));
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
    nt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }),
      (this._listeners = {}),
      nt(this._responsiveListeners, (t, e) => {
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
    !Pi(s, e) &&
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
      c = gm(t, this._lastEvent, s, l);
    s &&
      ((this._lastEvent = null),
      lt(r.onHover, [t, o, this], this),
      l && lt(r.onClick, [t, o, this], this));
    const u = !Pi(o, i);
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
M(Vt, 'defaults', gt),
  M(Vt, 'instances', di),
  M(Vt, 'overrides', yn),
  M(Vt, 'registry', be),
  M(Vt, 'version', um),
  M(Vt, 'getChart', Jo);
function Zo() {
  return nt(Vt.instances, (n) => n._plugins.invalidate());
}
function pm(n, t, e) {
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
function mm(n) {
  return Sa(n, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function bm(n, t, e, s) {
  const i = mm(n.options.borderRadius),
    r = (e - t) / 2,
    a = Math.min(r, (s * t) / 2),
    o = (l) => {
      const c = ((e - Math.min(r, l)) * s) / 2;
      return Dt(l, 0, Math.min(r, c));
    };
  return {
    outerStart: o(i.outerStart),
    outerEnd: o(i.outerEnd),
    innerStart: Dt(i.innerStart, 0, a),
    innerEnd: Dt(i.innerEnd, 0, a),
  };
}
function En(n, t, e, s) {
  return { x: e + n * Math.cos(t), y: s + n * Math.sin(t) };
}
function Ai(n, t, e, s, i, r) {
  const { x: a, y: o, startAngle: l, pixelMargin: c, innerRadius: u } = t,
    d = Math.max(t.outerRadius + s + e - c, 0),
    h = u > 0 ? u + s + e + c : 0;
  let g = 0;
  const f = i - l;
  if (s) {
    const W = u > 0 ? u - s : 0,
      I = d > 0 ? d - s : 0,
      H = (W + I) / 2,
      Y = H !== 0 ? (f * H) / (H + s) : f;
    g = (f - Y) / 2;
  }
  const p = Math.max(0.001, f * d - e / dt) / d,
    m = (f - p) / 2,
    b = l + m + g,
    _ = i - m - g,
    {
      outerStart: x,
      outerEnd: w,
      innerStart: v,
      innerEnd: P,
    } = bm(t, h, d, _ - b),
    O = d - x,
    k = d - w,
    C = b + x / O,
    L = _ - w / k,
    A = h + v,
    T = h + P,
    F = b + v / A,
    V = _ - P / T;
  if ((n.beginPath(), r)) {
    const W = (C + L) / 2;
    if ((n.arc(a, o, d, C, W), n.arc(a, o, d, W, L), w > 0)) {
      const q = En(k, L, a, o);
      n.arc(q.x, q.y, w, L, _ + kt);
    }
    const I = En(T, _, a, o);
    if ((n.lineTo(I.x, I.y), P > 0)) {
      const q = En(T, V, a, o);
      n.arc(q.x, q.y, P, _ + kt, V + Math.PI);
    }
    const H = (_ - P / h + (b + v / h)) / 2;
    if (
      (n.arc(a, o, h, _ - P / h, H, !0),
      n.arc(a, o, h, H, b + v / h, !0),
      v > 0)
    ) {
      const q = En(A, F, a, o);
      n.arc(q.x, q.y, v, F + Math.PI, b - kt);
    }
    const Y = En(O, b, a, o);
    if ((n.lineTo(Y.x, Y.y), x > 0)) {
      const q = En(O, C, a, o);
      n.arc(q.x, q.y, x, b - kt, C);
    }
  } else {
    n.moveTo(a, o);
    const W = Math.cos(C) * d + a,
      I = Math.sin(C) * d + o;
    n.lineTo(W, I);
    const H = Math.cos(L) * d + a,
      Y = Math.sin(L) * d + o;
    n.lineTo(H, Y);
  }
  n.closePath();
}
function _m(n, t, e, s, i) {
  const { fullCircles: r, startAngle: a, circumference: o } = t;
  let l = t.endAngle;
  if (r) {
    Ai(n, t, e, s, l, i);
    for (let c = 0; c < r; ++c) n.fill();
    isNaN(o) || (l = a + (o % ut || ut));
  }
  return Ai(n, t, e, s, l, i), n.fill(), l;
}
function vm(n, t, e, s, i) {
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
    Ai(n, t, e, s, f, i);
    for (let p = 0; p < r; ++p) n.stroke();
    isNaN(o) || (f = a + (o % ut || ut));
  }
  g && pm(n, t, f), r || (Ai(n, t, e, s, f, i), n.stroke());
}
class as extends We {
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
      { angle: a, distance: o } = Oc(r, { x: e, y: s }),
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
      f = X(h, c - l),
      p = ws(a, l, c) && l !== c,
      m = f >= ut || p,
      b = Le(o, u + g, d + g);
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
      (this.fullCircles = i > ut ? Math.floor(i / ut) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * r, Math.sin(l) * r);
    const c = 1 - Math.sin(Math.min(dt, i || 0)),
      u = r * c;
    (e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      _m(e, this, u, a, o),
      vm(e, this, u, a, o),
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
function uu(n, t, e = t) {
  (n.lineCap = X(e.borderCapStyle, t.borderCapStyle)),
    n.setLineDash(X(e.borderDash, t.borderDash)),
    (n.lineDashOffset = X(e.borderDashOffset, t.borderDashOffset)),
    (n.lineJoin = X(e.borderJoinStyle, t.borderJoinStyle)),
    (n.lineWidth = X(e.borderWidth, t.borderWidth)),
    (n.strokeStyle = X(e.borderColor, t.borderColor));
}
function ym(n, t, e) {
  n.lineTo(e.x, e.y);
}
function xm(n) {
  return n.stepped
    ? Yf
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? $f
      : ym;
}
function du(n, t, e = {}) {
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
    { count: a, start: o, loop: l, ilen: c } = du(i, e, s),
    u = xm(r);
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
function km(n, t, e, s) {
  const i = t.points,
    { count: r, start: a, ilen: o } = du(i, e, s),
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
      v = g.y,
      P = w | 0;
    P === f
      ? (v < p ? (p = v) : v > m && (m = v), (u = (d * u + w) / ++d))
      : (x(), n.lineTo(w, v), (f = P), (d = 0), (p = m = v)),
      (b = v);
  }
  x();
}
function jr(n) {
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
    ? Mg
    : n.tension || n.cubicInterpolationMode === 'monotone'
      ? Sg
      : hn;
}
function Sm(n, t, e, s) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, e, s) && i.closePath()),
    uu(n, t.options),
    n.stroke(i);
}
function Pm(n, t, e, s) {
  const { segments: i, options: r } = t,
    a = jr(t);
  for (const o of i)
    uu(n, r, o.style),
      n.beginPath(),
      a(n, t, o, { start: e, end: e + s - 1 }) && n.closePath(),
      n.stroke();
}
const Dm = typeof Path2D == 'function';
function Tm(n, t, e, s) {
  Dm && !t.options.segment ? Sm(n, t, e, s) : Pm(n, t, e, s);
}
class Qe extends We {
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
      mg(this._points, s, t, i, e), (this._pointsUpdated = !0);
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
    return this._segments || (this._segments = Cg(this, this.options.segment));
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
      a = Qc(this, { property: e, start: i, end: i });
    if (!a.length) return;
    const o = [],
      l = Mm(s);
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
    return jr(this)(t, this, e, s);
  }
  path(t, e, s) {
    const i = this.segments,
      r = jr(this);
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
M(Qe, 'id', 'line'),
  M(Qe, 'defaults', {
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
  M(Qe, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  }),
  M(Qe, 'descriptors', {
    _scriptable: !0,
    _indexable: (t) => t !== 'borderDash' && t !== 'fill',
  });
function tl(n, t, e, s) {
  const i = n.options,
    { [e]: r } = n.getProps([e], s);
  return Math.abs(t - r) < i.radius + i.hitRadius;
}
class hi extends We {
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
    return tl(this, e, 'x', s);
  }
  inYRange(e, s) {
    return tl(this, e, 'y', s);
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
      !Ie(this, s, this.size(i) / 2) ||
      ((e.strokeStyle = i.borderColor),
      (e.lineWidth = i.borderWidth),
      (e.fillStyle = i.backgroundColor),
      Br(e, i, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
M(hi, 'id', 'point'),
  M(hi, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  M(hi, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
function hu(n, t) {
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
function Ge(n, t, e, s) {
  return n ? 0 : Dt(t, e, s);
}
function Om(n, t, e) {
  const s = n.options.borderWidth,
    i = n.borderSkipped,
    r = Bc(s);
  return {
    t: Ge(i.top, r.top, 0, e),
    r: Ge(i.right, r.right, 0, t),
    b: Ge(i.bottom, r.bottom, 0, e),
    l: Ge(i.left, r.left, 0, t),
  };
}
function Em(n, t, e) {
  const { enableBorderRadius: s } = n.getProps(['enableBorderRadius']),
    i = n.options.borderRadius,
    r = bn(i),
    a = Math.min(t, e),
    o = n.borderSkipped,
    l = s || K(i);
  return {
    topLeft: Ge(!l || o.top || o.left, r.topLeft, 0, a),
    topRight: Ge(!l || o.top || o.right, r.topRight, 0, a),
    bottomLeft: Ge(!l || o.bottom || o.left, r.bottomLeft, 0, a),
    bottomRight: Ge(!l || o.bottom || o.right, r.bottomRight, 0, a),
  };
}
function Cm(n) {
  const t = hu(n),
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
function yr(n, t, e, s) {
  const i = t === null,
    r = e === null,
    o = n && !(i && r) && hu(n, s);
  return o && (i || Le(t, o.left, o.right)) && (r || Le(e, o.top, o.bottom));
}
function Am(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Rm(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function xr(n, t, e = {}) {
  const s = n.x !== e.x ? -t : 0,
    i = n.y !== e.y ? -t : 0,
    r = (n.x + n.w !== e.x + e.w ? t : 0) - s,
    a = (n.y + n.h !== e.y + e.h ? t : 0) - i;
  return { x: n.x + s, y: n.y + i, w: n.w + r, h: n.h + a, radius: n.radius };
}
class fi extends We {
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
      o = Am(a.radius) ? ks : Rm;
    t.save(),
      (a.w !== r.w || a.h !== r.h) &&
        (t.beginPath(),
        o(t, xr(a, e, r)),
        t.clip(),
        o(t, xr(r, -e, a)),
        (t.fillStyle = s),
        t.fill('evenodd')),
      t.beginPath(),
      o(t, xr(r, e)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, e, s) {
    return yr(this, t, e, s);
  }
  inXRange(t, e) {
    return yr(this, t, null, e);
  }
  inYRange(t, e) {
    return yr(this, null, t, e);
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
M(fi, 'id', 'bar'),
  M(fi, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  M(fi, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  });
var Lm = Object.freeze({
  __proto__: null,
  ArcElement: as,
  BarElement: fi,
  LineElement: Qe,
  PointElement: hi,
});
const Vr = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  el = Vr.map((n) => n.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function fu(n) {
  return Vr[n % Vr.length];
}
function gu(n) {
  return el[n % el.length];
}
function Fm(n, t) {
  return (n.borderColor = fu(t)), (n.backgroundColor = gu(t)), ++t;
}
function Im(n, t) {
  return (n.backgroundColor = n.data.map(() => fu(t++))), t;
}
function Nm(n, t) {
  return (n.backgroundColor = n.data.map(() => gu(t++))), t;
}
function Bm(n) {
  let t = 0;
  return (e, s) => {
    const i = n.getDatasetMeta(s).controller;
    i instanceof gn
      ? (t = Im(e, t))
      : i instanceof gs
        ? (t = Nm(e, t))
        : i && (t = Fm(e, t));
  };
}
function nl(n) {
  let t;
  for (t in n) if (n[t].borderColor || n[t].backgroundColor) return !0;
  return !1;
}
function zm(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function Wm() {
  return (
    gt.borderColor !== 'rgba(0,0,0,0.1)' ||
    gt.backgroundColor !== 'rgba(0,0,0,0.1)'
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
      a = nl(s) || zm(i) || (r && nl(r)) || Wm();
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
    g,
    f,
    p;
  for (a[l++] = n[u], d = 0; d < r - 2; d++) {
    let m = 0,
      b = 0,
      _;
    const x = Math.floor((d + 1) * o) + 1 + t,
      w = Math.min(Math.floor((d + 2) * o) + 1, e) + t,
      v = w - x;
    for (_ = x; _ < w; _++) (m += n[_].x), (b += n[_].y);
    (m /= v), (b /= v);
    const P = Math.floor(d * o) + 1 + t,
      O = Math.min(Math.floor((d + 1) * o) + 1, e) + t,
      { x: k, y: C } = n[u];
    for (g = f = -1, _ = P; _ < O; _++)
      (f = 0.5 * Math.abs((k - m) * (n[_].y - C) - (k - n[_].x) * (b - C))),
        f > g && ((g = f), (h = n[_]), (p = _));
    (a[l++] = h), (u = p);
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
    g,
    f,
    p;
  const m = [],
    b = t + e - 1,
    _ = n[t].x,
    w = n[b].x - _;
  for (a = t; a < t + e; ++a) {
    (o = n[a]), (l = ((o.x - _) / w) * s), (c = o.y);
    const v = l | 0;
    if (v === u)
      c < f ? ((f = c), (d = a)) : c > p && ((p = c), (h = a)),
        (i = (r * i + o.x) / ++r);
    else {
      const P = a - 1;
      if (!G(d) && !G(h)) {
        const O = Math.min(d, h),
          k = Math.max(d, h);
        O !== g && O !== P && m.push({ ...n[O], x: i }),
          k !== g && k !== P && m.push({ ...n[k], x: i });
      }
      a > 0 && P !== g && m.push(n[P]),
        m.push(o),
        (u = v),
        (r = 0),
        (f = p = c),
        (d = h = g = a);
    }
  }
  return m;
}
function pu(n) {
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
function sl(n) {
  n.data.datasets.forEach((t) => {
    pu(t);
  });
}
function qm(n, t) {
  const e = t.length;
  let s = 0,
    i;
  const { iScale: r } = n,
    { min: a, max: o, minDefined: l, maxDefined: c } = r.getUserBounds();
  return (
    l && (s = Dt(Fe(t, r.axis, a).lo, 0, e - 1)),
    c ? (i = Dt(Fe(t, r.axis, o).hi + 1, s, e) - s) : (i = e - s),
    { start: s, count: i }
  );
}
var Ym = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      sl(n);
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
      let { start: d, count: h } = qm(l, c);
      const g = e.threshold || 4 * s;
      if (h <= g) {
        pu(i);
        return;
      }
      G(a) &&
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
    sl(n);
  },
};
function $m(n, t, e) {
  const s = n.segments,
    i = n.points,
    r = t.points,
    a = [];
  for (const o of s) {
    let { start: l, end: c } = o;
    c = Aa(l, c, i);
    const u = qr(e, i[l], i[c], o.loop);
    if (!t.segments) {
      a.push({ source: o, target: u, start: i[l], end: i[c] });
      continue;
    }
    const d = Qc(t, u);
    for (const h of d) {
      const g = qr(e, r[h.start], r[h.end], h.loop),
        f = Xc(o, i, g);
      for (const p of f)
        a.push({
          source: p,
          target: h,
          start: { [e]: il(u, g, 'start', Math.max) },
          end: { [e]: il(u, g, 'end', Math.min) },
        });
    }
  }
  return a;
}
function qr(n, t, e, s) {
  if (s) return;
  let i = t[n],
    r = e[n];
  return (
    n === 'angle' && ((i = Kt(i)), (r = Kt(r))),
    { property: n, start: i, end: r }
  );
}
function Um(n, t) {
  const { x: e = null, y: s = null } = n || {},
    i = t.points,
    r = [];
  return (
    t.segments.forEach(({ start: a, end: o }) => {
      o = Aa(a, o, i);
      const l = i[a],
        c = i[o];
      s !== null
        ? (r.push({ x: l.x, y: s }), r.push({ x: c.x, y: s }))
        : e !== null && (r.push({ x: e, y: l.y }), r.push({ x: e, y: c.y }));
    }),
    r
  );
}
function Aa(n, t, e) {
  for (; t > n; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return t;
}
function il(n, t, e, s) {
  return n && t ? s(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function mu(n, t) {
  let e = [],
    s = !1;
  return (
    ft(n) ? ((s = !0), (e = n)) : (e = Um(n, t)),
    e.length
      ? new Qe({ points: e, options: { tension: 0 }, _loop: s, _fullLoop: s })
      : null
  );
}
function rl(n) {
  return n && n.fill !== !1;
}
function Xm(n, t, e) {
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
function Qm(n, t, e) {
  const s = Zm(n);
  if (K(s)) return isNaN(s.value) ? !1 : s;
  let i = parseFloat(s);
  return vt(i) && Math.floor(i) === i
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
        : K(n)
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
        : K(n)
          ? (s = n.value)
          : (s = t.getBaseValue()),
    s
  );
}
function Zm(n) {
  const t = n.options,
    e = t.fill;
  let s = X(e && e.target, e);
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
  o.push(mu({ x: null, y: t.bottom }, s));
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    for (let u = c.start; u <= c.end; u++) nb(i, a[u], o);
  }
  return new Qe({ points: i, options: {} });
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
    if (Le(i, d, h)) {
      (o = i === d), (l = i === h);
      break;
    }
  }
  return { first: o, last: l, point: s };
}
class bu {
  constructor(t) {
    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
  }
  pathSegment(t, e, s) {
    const { x: i, y: r, radius: a } = this;
    return (
      (e = e || { start: 0, end: ut }),
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
  if (vt(e)) return rb(t, e);
  if (e === 'stack') return tb(n);
  if (e === 'shape') return !0;
  const i = ab(n);
  return i instanceof bu ? i : mu(i, s);
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
  if (vt(s)) {
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
    return new bu({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a),
    });
  }
  for (let l = 0; l < i; ++l) o.push(t.getPointPositionForValue(l, a));
  return o;
}
function wr(n, t, e) {
  const s = ib(t),
    { chart: i, index: r, line: a, scale: o, axis: l } = t,
    c = a.options,
    u = c.fill,
    d = c.backgroundColor,
    { above: h = d, below: g = d } = u || {},
    f = i.getDatasetMeta(r),
    p = Gc(i, f);
  s &&
    a.points.length &&
    (Xi(n, e),
    cb(n, {
      line: a,
      target: s,
      above: h,
      below: g,
      area: e,
      scale: o,
      axis: l,
      clip: p,
    }),
    Qi(n));
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
      (al(n, s, a.top),
      ol(n, { line: e, target: s, color: i, scale: o, property: c, clip: l }),
      n.restore(),
      n.save(),
      al(n, s, a.bottom)),
    ol(n, { line: e, target: s, color: r, scale: o, property: c, clip: l }),
    n.restore();
}
function al(n, t, e) {
  const { segments: s, points: i } = t;
  let r = !0,
    a = !1;
  n.beginPath();
  for (const o of s) {
    const { start: l, end: c } = o,
      u = i[l],
      d = i[Aa(l, c, i)];
    r ? (n.moveTo(u.x, u.y), (r = !1)) : (n.lineTo(u.x, e), n.lineTo(u.x, u.y)),
      (a = !!t.pathSegment(n, o, { move: a })),
      a ? n.closePath() : n.lineTo(d.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function ol(n, t) {
  const { line: e, target: s, property: i, color: r, scale: a, clip: o } = t,
    l = $m(e, s, i);
  for (const { source: c, target: u, start: d, end: h } of l) {
    const { style: { backgroundColor: g = r } = {} } = c,
      f = s !== !0;
    n.save(), (n.fillStyle = g), ub(n, a, o, f && qr(i, d, h)), n.beginPath();
    const p = !!e.pathSegment(n, c);
    let m;
    if (f) {
      p ? n.closePath() : ll(n, s, h, i);
      const b = !!s.pathSegment(n, u, { move: p, reverse: !0 });
      (m = p && b), m || ll(n, s, d, i);
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
function ll(n, t, e, s) {
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
          o instanceof Qe &&
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
        (o.line.updateControlPoints(r, o.axis), s && o.fill && wr(n.ctx, o, r));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return;
    const s = n.getSortedVisibleDatasetMetas();
    for (let i = s.length - 1; i >= 0; --i) {
      const r = s[i].$filler;
      rl(r) && wr(n.ctx, r, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const s = t.meta.$filler;
    !rl(s) || e.drawTime !== 'beforeDatasetDraw' || wr(n.ctx, s, n.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const cl = (n, t) => {
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
class ul extends We {
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
    let e = lt(t.generateLabels, [this.chart], this) || [];
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
      i = Pt(s.font),
      r = i.size,
      a = this._computeTitleHeight(),
      { boxWidth: o, itemHeight: l } = cl(s, r);
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
        const { itemWidth: _, itemHeight: x } = fb(s, e, r, m, i);
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
      a = Ln(r, this.left, this.width);
    if (this.isHorizontal()) {
      let o = 0,
        l = Et(s, this.left + i, this.right - this.lineWidths[o]);
      for (const c of e)
        o !== c.row &&
          ((o = c.row),
          (l = Et(s, this.left + i, this.right - this.lineWidths[o]))),
          (c.top += this.top + t + i),
          (c.left = a.leftForLtr(a.x(l), c.width)),
          (l += c.width + i);
    } else {
      let o = 0,
        l = Et(s, this.top + t + i, this.bottom - this.columnSizes[o].height);
      for (const c of e)
        c.col !== o &&
          ((o = c.col),
          (l = Et(
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
      Xi(t, this), this._draw(), Qi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: i } = this,
      { align: r, labels: a } = t,
      o = gt.color,
      l = Ln(t.rtl, this.left, this.width),
      c = Pt(a.font),
      { padding: u } = a,
      d = c.size,
      h = d / 2;
    let g;
    this.drawTitle(),
      (i.textAlign = l.textAlign('left')),
      (i.textBaseline = 'middle'),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: f, boxHeight: p, itemHeight: m } = cl(a, d),
      b = function (P, O, k) {
        if (isNaN(f) || f <= 0 || isNaN(p) || p < 0) return;
        i.save();
        const C = X(k.lineWidth, 1);
        if (
          ((i.fillStyle = X(k.fillStyle, o)),
          (i.lineCap = X(k.lineCap, 'butt')),
          (i.lineDashOffset = X(k.lineDashOffset, 0)),
          (i.lineJoin = X(k.lineJoin, 'miter')),
          (i.lineWidth = C),
          (i.strokeStyle = X(k.strokeStyle, o)),
          i.setLineDash(X(k.lineDash, [])),
          a.usePointStyle)
        ) {
          const L = {
              radius: (p * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: C,
            },
            A = l.xPlus(P, f / 2),
            T = O + h;
          Nc(i, L, A, T, a.pointStyleWidth && f);
        } else {
          const L = O + Math.max((d - p) / 2, 0),
            A = l.leftForLtr(P, f),
            T = bn(k.borderRadius);
          i.beginPath(),
            Object.values(T).some((F) => F !== 0)
              ? ks(i, { x: A, y: L, w: f, h: p, radius: T })
              : i.rect(A, L, f, p),
            i.fill(),
            C !== 0 && i.stroke();
        }
        i.restore();
      },
      _ = function (P, O, k) {
        xn(i, k.text, P, O + m / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      x = this.isHorizontal(),
      w = this._computeTitleHeight();
    x
      ? (g = {
          x: Et(r, this.left + u, this.right - s[0]),
          y: this.top + u + w,
          line: 0,
        })
      : (g = {
          x: this.left + u,
          y: Et(r, this.top + w + u, this.bottom - e[0].height),
          line: 0,
        }),
      Yc(this.ctx, t.textDirection);
    const v = m + u;
    this.legendItems.forEach((P, O) => {
      (i.strokeStyle = P.fontColor), (i.fillStyle = P.fontColor);
      const k = i.measureText(P.text).width,
        C = l.textAlign(P.textAlign || (P.textAlign = a.textAlign)),
        L = f + h + k;
      let A = g.x,
        T = g.y;
      l.setWidth(this.width),
        x
          ? O > 0 &&
            A + L + u > this.right &&
            ((T = g.y += v),
            g.line++,
            (A = g.x = Et(r, this.left + u, this.right - s[g.line])))
          : O > 0 &&
            T + v > this.bottom &&
            ((A = g.x = A + e[g.line].width + u),
            g.line++,
            (T = g.y =
              Et(r, this.top + w + u, this.bottom - e[g.line].height)));
      const F = l.x(A);
      if (
        (b(F, T, P),
        (A = Lf(C, A + f + h, x ? A + L : this.right, t.rtl)),
        _(l.x(A), T, P),
        x)
      )
        g.x += L + u;
      else if (typeof P.text != 'string') {
        const V = c.lineHeight;
        g.y += _u(P, V) + u;
      } else g.y += v;
    }),
      $c(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      s = Pt(e.font),
      i = Rt(e.padding);
    if (!e.display) return;
    const r = Ln(t.rtl, this.left, this.width),
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
        (d = Et(t.align, d, this.right - h));
    else {
      const f = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      u =
        c +
        Et(
          t.align,
          this.top,
          this.bottom - f - t.labels.padding - this._computeTitleHeight(),
        );
    }
    const g = Et(o, d, d + h);
    (a.textAlign = r.textAlign(ka(o))),
      (a.textBaseline = 'middle'),
      (a.strokeStyle = e.color),
      (a.fillStyle = e.color),
      (a.font = s.string),
      xn(a, e.text, g, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = Pt(t.font),
      s = Rt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, i, r;
    if (Le(t, this.left, this.right) && Le(e, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
        if (
          ((i = r[s]),
          Le(t, i.left, i.left + i.width) && Le(e, i.top, i.top + i.height))
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
      i && !r && lt(e.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !r && lt(e.onHover, [t, s, this], this);
    } else s && lt(e.onClick, [t, s, this], this);
  }
}
function fb(n, t, e, s, i) {
  const r = gb(s, n, t, e),
    a = pb(i, s, t.lineHeight);
  return { itemWidth: r, itemHeight: a };
}
function gb(n, t, e, s) {
  let i = n.text;
  return (
    i &&
      typeof i != 'string' &&
      (i = i.reduce((r, a) => (r.length > a.length ? r : a))),
    t + e.size / 2 + s.measureText(i).width
  );
}
function pb(n, t, e) {
  let s = n;
  return typeof t.text != 'string' && (s = _u(t, e)), s;
}
function _u(n, t) {
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
  _element: ul,
  start(n, t, e) {
    const s = (n.legend = new ul({ ctx: n.ctx, options: e, chart: n }));
    At.configure(n, s, e), At.addBox(n, s);
  },
  stop(n) {
    At.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const s = n.legend;
    At.configure(n, s, e), (s.options = e);
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
            u = Rt(c.borderWidth);
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
class Ra extends We {
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
    const i = ft(s.text) ? s.text.length : 1;
    this._padding = Rt(s.padding);
    const r = i * Pt(s.font).lineHeight + this._padding.height;
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
        ? ((u = Et(o, s, r)), (d = e + t), (c = r - s))
        : (a.position === 'left'
            ? ((u = s + t), (d = Et(o, i, e)), (l = dt * -0.5))
            : ((u = r - t), (d = Et(o, e, i)), (l = dt * 0.5)),
          (c = i - e)),
      { titleX: u, titleY: d, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const s = Pt(e.font),
      r = s.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: o, maxWidth: l, rotation: c } = this._drawArgs(r);
    xn(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: ka(e.align),
      textBaseline: 'middle',
      translation: [a, o],
    });
  }
}
function _b(n, t) {
  const e = new Ra({ ctx: n.ctx, options: t, chart: n });
  At.configure(n, e, t), At.addBox(n, e), (n.titleBlock = e);
}
var vb = {
  id: 'title',
  _element: Ra,
  start(n, t, e) {
    _b(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    At.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const s = n.titleBlock;
    At.configure(n, s, e), (s.options = e);
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
const Js = new WeakMap();
var yb = {
  id: 'subtitle',
  start(n, t, e) {
    const s = new Ra({ ctx: n.ctx, options: e, chart: n });
    At.configure(n, s, e), At.addBox(n, s), Js.set(n, s);
  },
  stop(n) {
    At.removeBox(n, Js.get(n)), Js.delete(n);
  },
  beforeUpdate(n, t, e) {
    const s = Js.get(n);
    At.configure(n, s, e), (s.options = e);
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
          u = Ir(t, c);
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
function me(n, t) {
  return t && (ft(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Ae(n) {
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
function dl(n, t) {
  const e = n.chart.ctx,
    { body: s, footer: i, title: r } = n,
    { boxWidth: a, boxHeight: o } = t,
    l = Pt(t.bodyFont),
    c = Pt(t.titleFont),
    u = Pt(t.footerFont),
    d = r.length,
    h = i.length,
    g = s.length,
    f = Rt(t.padding);
  let p = f.height,
    m = 0,
    b = s.reduce(
      (w, v) => w + v.before.length + v.lines.length + v.after.length,
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
    nt(n.title, x),
    (e.font = l.string),
    nt(n.beforeBody.concat(n.afterBody), x),
    (_ = t.displayColors ? a + 2 + t.boxPadding : 0),
    nt(s, (w) => {
      nt(w.before, x), nt(w.lines, x), nt(w.after, x);
    }),
    (_ = 0),
    (e.font = u.string),
    nt(n.footer, x),
    e.restore(),
    (m += f.width),
    { width: m, height: p }
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
function hl(n, t, e) {
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
function fl(n, t, e, s) {
  const { caretSize: i, caretPadding: r, cornerRadius: a } = n,
    { xAlign: o, yAlign: l } = e,
    c = i + r,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: g } = bn(a);
  let f = Sb(t, o);
  const p = Pb(t, l, c);
  return (
    l === 'center'
      ? o === 'left'
        ? (f += c)
        : o === 'right' && (f -= c)
      : o === 'left'
        ? (f -= Math.max(u, h) + i)
        : o === 'right' && (f += Math.max(d, g) + i),
    { x: Dt(f, 0, s.width - t.width), y: Dt(p, 0, s.height - t.height) }
  );
}
function Zs(n, t, e) {
  const s = Rt(e.padding);
  return t === 'center'
    ? n.x + n.width / 2
    : t === 'right'
      ? n.x + n.width - s.right
      : n.x + s.left;
}
function gl(n) {
  return me([], Ae(n));
}
function Db(n, t, e) {
  return sn(n, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function pl(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const vu = {
  beforeTitle: Ee,
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
  afterTitle: Ee,
  beforeBody: Ee,
  beforeLabel: Ee,
  label(n) {
    if (this && this.options && this.options.mode === 'dataset')
      return n.label + ': ' + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || '';
    t && (t += ': ');
    const e = n.formattedValue;
    return G(e) || (t += e), t;
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
  afterLabel: Ee,
  afterBody: Ee,
  beforeFooter: Ee,
  footer: Ee,
  afterFooter: Ee,
};
function Ht(n, t, e, s) {
  const i = n[t].call(e, s);
  return typeof i > 'u' ? vu[t].call(e, s) : i;
}
class Yr extends We {
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
      r = new Kc(this.chart, i);
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
      i = Ht(s, 'beforeTitle', this, t),
      r = Ht(s, 'title', this, t),
      a = Ht(s, 'afterTitle', this, t);
    let o = [];
    return (o = me(o, Ae(i))), (o = me(o, Ae(r))), (o = me(o, Ae(a))), o;
  }
  getBeforeBody(t, e) {
    return gl(Ht(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e,
      i = [];
    return (
      nt(t, (r) => {
        const a = { before: [], lines: [], after: [] },
          o = pl(s, r);
        me(a.before, Ae(Ht(o, 'beforeLabel', this, r))),
          me(a.lines, Ht(o, 'label', this, r)),
          me(a.after, Ae(Ht(o, 'afterLabel', this, r))),
          i.push(a);
      }),
      i
    );
  }
  getAfterBody(t, e) {
    return gl(Ht(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e,
      i = Ht(s, 'beforeFooter', this, t),
      r = Ht(s, 'footer', this, t),
      a = Ht(s, 'afterFooter', this, t);
    let o = [];
    return (o = me(o, Ae(i))), (o = me(o, Ae(r))), (o = me(o, Ae(a))), o;
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
      nt(o, (u) => {
        const d = pl(t.callbacks, u);
        i.push(Ht(d, 'labelColor', this, u)),
          r.push(Ht(d, 'labelPointStyle', this, u)),
          a.push(Ht(d, 'labelTextColor', this, u));
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
      const l = (this._size = dl(this, s)),
        c = Object.assign({}, o, l),
        u = hl(this.chart, s, c),
        d = fl(s, c, u, this.chart);
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
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: d } = bn(o),
      { x: h, y: g } = t,
      { width: f, height: p } = e;
    let m, b, _, x, w, v;
    return (
      r === 'center'
        ? ((w = g + p / 2),
          i === 'left'
            ? ((m = h), (b = m - a), (x = w + a), (v = w - a))
            : ((m = h + f), (b = m + a), (x = w - a), (v = w + a)),
          (_ = m))
        : (i === 'left'
            ? (b = h + Math.max(l, u) + a)
            : i === 'right'
              ? (b = h + f - Math.max(c, d) - a)
              : (b = this.caretX),
          r === 'top'
            ? ((x = g), (w = x - a), (m = b - a), (_ = b + a))
            : ((x = g + p), (w = x + a), (m = b + a), (_ = b - a)),
          (v = x)),
      { x1: m, x2: b, x3: _, y1: x, y2: w, y3: v }
    );
  }
  drawTitle(t, e, s) {
    const i = this.title,
      r = i.length;
    let a, o, l;
    if (r) {
      const c = Ln(s.rtl, this.x, this.width);
      for (
        t.x = Zs(this, s.titleAlign, s),
          e.textAlign = c.textAlign(s.titleAlign),
          e.textBaseline = 'middle',
          a = Pt(s.titleFont),
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
      u = Pt(r.bodyFont),
      d = Zs(this, 'left', r),
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
        Br(t, p, m, b),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        Br(t, p, m, b);
    } else {
      (t.lineWidth = K(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0);
      const p = i.leftForLtr(h, c),
        m = i.leftForLtr(i.xPlus(h, 1), c - 2),
        b = bn(a.borderRadius);
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
      d = Pt(s.bodyFont);
    let h = d.lineHeight,
      g = 0;
    const f = Ln(s.rtl, this.x, this.width),
      p = function (k) {
        e.fillText(k, f.x(t.x + g), t.y + h / 2), (t.y += h + r);
      },
      m = f.textAlign(a);
    let b, _, x, w, v, P, O;
    for (
      e.textAlign = a,
        e.textBaseline = 'middle',
        e.font = d.string,
        t.x = Zs(this, m, s),
        e.fillStyle = s.bodyColor,
        nt(this.beforeBody, p),
        g = o && m !== 'right' ? (a === 'center' ? c / 2 + u : c + 2 + u) : 0,
        w = 0,
        P = i.length;
      w < P;
      ++w
    ) {
      for (
        b = i[w],
          _ = this.labelTextColors[w],
          e.fillStyle = _,
          nt(b.before, p),
          x = b.lines,
          o &&
            x.length &&
            (this._drawColorBox(e, t, w, f, s),
            (h = Math.max(d.lineHeight, l))),
          v = 0,
          O = x.length;
        v < O;
        ++v
      )
        p(x[v]), (h = d.lineHeight);
      nt(b.after, p);
    }
    (g = 0), (h = d.lineHeight), nt(this.afterBody, p), (t.y -= r);
  }
  drawFooter(t, e, s) {
    const i = this.footer,
      r = i.length;
    let a, o;
    if (r) {
      const l = Ln(s.rtl, this.x, this.width);
      for (
        t.x = Zs(this, s.footerAlign, s),
          t.y += s.footerMarginTop,
          e.textAlign = l.textAlign(s.footerAlign),
          e.textBaseline = 'middle',
          a = Pt(s.footerFont),
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
      } = bn(i.cornerRadius);
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
      const o = (this._size = dl(this, t)),
        l = Object.assign({}, a, this._size),
        c = hl(e, t, l),
        u = fl(t, l, c, e);
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
    const a = Rt(e.padding),
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
      Yc(t, e.textDirection),
      (r.y += a.top),
      this.drawTitle(r, t, e),
      this.drawBody(r, t, e),
      this.drawFooter(r, t, e),
      $c(t, e.textDirection),
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
      r = !Pi(s, i),
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
      l = e || !Pi(a, r) || o;
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
M(Yr, 'positioners', os);
var Tb = {
    id: 'tooltip',
    _element: Yr,
    positioners: os,
    afterInit(n, t, e) {
      e && (n.tooltip = new Yr({ chart: n, options: e }));
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
      callbacks: vu,
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
    Decimation: Ym,
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
const Ab = (n, t) => (n === null ? null : Dt(Math.round(n), 0, t));
function ml(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class $r extends Mn {
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
    if (G(t)) return null;
    const s = this.getLabels();
    return (
      (e =
        isFinite(e) && s[e] === t ? e : Cb(s, t, X(e, t), this._addedLabels)),
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
    return ml.call(this, t);
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
M($r, 'id', 'category'), M($r, 'defaults', { ticks: { callback: ml } });
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
    g = r || 1,
    f = u - 1,
    { min: p, max: m } = t,
    b = !G(a),
    _ = !G(o),
    x = !G(c),
    w = (m - p) / (d + 1);
  let v = uo((m - p) / f / g) * g,
    P,
    O,
    k,
    C;
  if (v < 1e-14 && !b && !_) return [{ value: p }, { value: m }];
  (C = Math.ceil(m / v) - Math.floor(p / v)),
    C > f && (v = uo((C * v) / f / g) * g),
    G(l) || ((P = Math.pow(10, l)), (v = Math.ceil(v * P) / P)),
    i === 'ticks'
      ? ((O = Math.floor(p / v) * v), (k = Math.ceil(m / v) * v))
      : ((O = p), (k = m)),
    b && _ && r && Df((o - a) / r, v / 1e3)
      ? ((C = Math.round(Math.min((o - a) / v, u))),
        (v = (o - a) / C),
        (O = a),
        (k = o))
      : x
        ? ((O = b ? a : O), (k = _ ? o : k), (C = c - 1), (v = (k - O) / C))
        : ((C = (k - O) / v),
          ds(C, Math.round(C), v / 1e3)
            ? (C = Math.round(C))
            : (C = Math.ceil(C)));
  const L = Math.max(ho(v), ho(O));
  (P = Math.pow(10, G(l) ? L : l)),
    (O = Math.round(O * P) / P),
    (k = Math.round(k * P) / P);
  let A = 0;
  for (
    b &&
    (h && O !== a
      ? (e.push({ value: a }),
        O < a && A++,
        ds(Math.round((O + A * v) * P) / P, a, bl(a, w, n)) && A++)
      : O < a && A++);
    A < C;
    ++A
  ) {
    const T = Math.round((O + A * v) * P) / P;
    if (_ && T > o) break;
    e.push({ value: T });
  }
  return (
    _ && h && k !== o
      ? e.length && ds(e[e.length - 1].value, o, bl(o, w, n))
        ? (e[e.length - 1].value = o)
        : e.push({ value: o })
      : (!_ || k === o) && e.push({ value: k }),
    e
  );
}
function bl(n, t, { horizontal: e, minRotation: s }) {
  const i = ae(s),
    r = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
    a = 0.75 * t * ('' + n).length;
  return Math.min(t / r, a);
}
class Ri extends Mn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    return G(t) ||
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
      const l = we(i),
        c = we(r);
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
      t.bounds === 'ticks' && Tc(a, this, 'value'),
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
    return As(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ur extends Ri {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    (this.min = vt(t) ? t : 0),
      (this.max = vt(e) ? e : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      s = ae(this.options.ticks.minRotation),
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
M(Ur, 'id', 'linear'),
  M(Ur, 'defaults', { ticks: { callback: Ui.formatters.numeric } });
const Ss = (n) => Math.floor(Xe(n)),
  un = (n, t) => Math.pow(10, Ss(n) + t);
function _l(n) {
  return n / Math.pow(10, Ss(n)) === 1;
}
function vl(n, t, e) {
  const s = Math.pow(10, e),
    i = Math.floor(n / s);
  return Math.ceil(t / s) - i;
}
function Lb(n, t) {
  const e = t - n;
  let s = Ss(e);
  for (; vl(n, t, s) > 10; ) s++;
  for (; vl(n, t, s) < 10; ) s--;
  return Math.min(s, Ss(n));
}
function Fb(n, { min: t, max: e }) {
  t = Gt(n.min, t);
  const s = [],
    i = Ss(t);
  let r = Lb(t, e),
    a = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const o = Math.pow(10, r),
    l = i > r ? Math.pow(10, i) : 0,
    c = Math.round((t - l) * a) / a,
    u = Math.floor((t - l) / o / 10) * o * 10;
  let d = Math.floor((c - u) / Math.pow(10, r)),
    h = Gt(n.min, Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  for (; h < e; )
    s.push({ value: h, major: _l(h), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (r++, (d = 2), (a = r >= 0 ? 1 : a)),
      (h = Math.round((l + u + d * Math.pow(10, r)) * a) / a);
  const g = Gt(n.max, h);
  return s.push({ value: g, major: _l(g), significand: d }), s;
}
class Xr extends Mn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, e) {
    const s = Ri.prototype.parse.apply(this, [t, e]);
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
        (this.min = t === un(this.min, 0) ? un(this.min, -1) : un(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min,
      i = this.max;
    const r = (o) => (s = t ? s : o),
      a = (o) => (i = e ? i : o);
    s === i && (s <= 0 ? (r(1), a(10)) : (r(un(s, -1)), a(un(i, 1)))),
      s <= 0 && r(un(i, -1)),
      i <= 0 && a(un(s, 1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      s = Fb(e, this);
    return (
      t.bounds === 'ticks' && Tc(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? '0'
      : As(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Xe(t)),
      (this._valueRange = Xe(this.max) - Xe(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Xe(t) - this._startValue) / this._valueRange,
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
M(Xr, 'id', 'logarithmic'),
  M(Xr, 'defaults', {
    ticks: { callback: Ui.formatters.logarithmic, major: { enabled: !0 } },
  });
function Qr(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Rt(t.backdropPadding);
    return X(t.font && t.font.size, gt.font.size) + e.height;
  }
  return 0;
}
function Ib(n, t, e) {
  return (
    (e = ft(e) ? e : [e]), { w: qf(n, t.string, e), h: e.length * t.lineHeight }
  );
}
function yl(n, t, e, s, i) {
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
    o = a.centerPointLabels ? dt / r : 0;
  for (let l = 0; l < r; l++) {
    const c = a.setContext(n.getPointLabelContext(l));
    i[l] = c.padding;
    const u = n.getPointPosition(l, n.drawingArea + i[l], o),
      d = Pt(c.font),
      h = Ib(n.ctx, d, n._pointLabels[l]);
    s[l] = h;
    const g = Kt(n.getIndexAngle(l) + o),
      f = Math.round(xa(g)),
      p = yl(f, u.x, h.w, 0, 180),
      m = yl(f, u.y, h.h, 90, 270);
    Bb(e, t, g, p, m);
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
    c = Math.round(xa(Kt(l.angle + kt))),
    u = qb(l.y, o.h, c),
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
    Ie({ x: e, y: s }, t) ||
    Ie({ x: e, y: r }, t) ||
    Ie({ x: i, y: s }, t) ||
    Ie({ x: i, y: r }, t)
  );
}
function Hb(n, t, e) {
  const s = [],
    i = n._pointLabels.length,
    r = n.options,
    { centerPointLabels: a, display: o } = r.pointLabels,
    l = { extra: Qr(r) / 2, additionalAngle: a ? dt / i : 0 };
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
function qb(n, t, e) {
  return (
    e === 90 || e === 270 ? (n -= t / 2) : (e > 270 || e < 90) && (n -= t), n
  );
}
function Yb(n, t, e) {
  const { left: s, top: i, right: r, bottom: a } = e,
    { backdropColor: o } = t;
  if (!G(o)) {
    const l = bn(t.borderRadius),
      c = Rt(t.backdropPadding);
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
function $b(n, t) {
  const {
    ctx: e,
    options: { pointLabels: s },
  } = n;
  for (let i = t - 1; i >= 0; i--) {
    const r = n._pointLabelItems[i];
    if (!r.visible) continue;
    const a = s.setContext(n.getPointLabelContext(i));
    Yb(e, a, r);
    const o = Pt(a.font),
      { x: l, y: c, textAlign: u } = r;
    xn(e, n._pointLabels[i], l, c + o.lineHeight / 2, o, {
      color: a.color,
      textAlign: u,
      textBaseline: 'middle',
    });
  }
}
function yu(n, t, e, s) {
  const { ctx: i } = n;
  if (e) i.arc(n.xCenter, n.yCenter, t, 0, ut);
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
    yu(n, e, a, s),
    r.closePath(),
    r.stroke(),
    r.restore());
}
function Xb(n, t, e) {
  return sn(n, { label: e, index: t, type: 'pointLabel' });
}
class ls extends Ri {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Rt(Qr(this.options) / 2)),
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
    return Math.ceil(this.drawingArea / Qr(this.options));
  }
  generateTickLabels(t) {
    Ri.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, s) => {
          const i = lt(this.options.pointLabels.callback, [e, s], this);
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
    const e = ut / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0;
    return Kt(t * e + ae(s));
  }
  getDistanceFromCenterForValue(t) {
    if (G(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (G(t)) return NaN;
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
        yu(
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
              g = i.setContext(h),
              f = r.setContext(h);
            Ub(this, g, l, a, f);
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
          u = Pt(c.font);
        if (
          ((r = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = u.string),
            (a = t.measureText(o.label).width),
            (t.fillStyle = c.backdropColor);
          const d = Rt(c.backdropPadding);
          t.fillRect(
            -a / 2 - d.left,
            -r - u.size / 2 - d.top,
            a + d.width,
            u.size + d.height,
          );
        }
        xn(t, o.label, 0, -r, u, {
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
    ticks: { showLabelBackdrop: !0, callback: Ui.formatters.numeric },
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
const Ji = {
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
  qt = Object.keys(Ji);
function xl(n, t) {
  return n - t;
}
function wl(n, t) {
  if (G(t)) return null;
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
            i === 'week' && (In(r) || r === !0)
              ? e.startOf(a, 'isoWeek', r)
              : e.startOf(a, i)),
        +a)
  );
}
function kl(n, t, e, s) {
  const i = qt.length;
  for (let r = qt.indexOf(n); r < i - 1; ++r) {
    const a = Ji[qt[r]],
      o = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (o * a.size)) <= s) return qt[r];
  }
  return qt[i - 1];
}
function Qb(n, t, e, s, i) {
  for (let r = qt.length - 1; r >= qt.indexOf(e); r--) {
    const a = qt[r];
    if (Ji[a].common && n._adapter.diff(i, s, a) >= t - 1) return a;
  }
  return qt[e ? qt.indexOf(e) : 0];
}
function Gb(n) {
  for (let t = qt.indexOf(n) + 1, e = qt.length; t < e; ++t)
    if (Ji[qt[t]].common) return qt[t];
}
function Ml(n, t, e) {
  if (!e) n[t] = !0;
  else if (e.length) {
    const { lo: s, hi: i } = wa(e, t),
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
function Sl(n, t, e) {
  const s = [],
    i = {},
    r = t.length;
  let a, o;
  for (a = 0; a < r; ++a)
    (o = t[a]), (i[o] = a), s.push({ value: o, major: !1 });
  return r === 0 || !e ? s : Kb(n, s, i, e);
}
class Ps extends Mn {
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
      i = (this._adapter = new tu._date(t.adapters.date));
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
    return t === void 0 ? null : wl(this, t);
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
      o = Cf(i, r, a);
    return (
      (this._unit =
        e.unit ||
        (s.autoSkip
          ? kl(e.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : Qb(this, o.length, e.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : Gb(this._unit)),
      this.initOffsets(i),
      t.reverse && o.reverse(),
      Sl(this, o, this._majorUnit)
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
    (e = Dt(e, 0, a)),
      (s = Dt(s, 0, a)),
      (this._offsets = { start: e, end: s, factor: 1 / (e + 1 + s) });
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      s = this.max,
      i = this.options,
      r = i.time,
      a = r.unit || kl(r.minUnit, e, s, this._getLabelCapacity(e)),
      o = X(i.ticks.stepSize, 1),
      l = a === 'week' ? r.isoWeekday : !1,
      c = In(l) || l === !0,
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
    for (h = d, g = 0; h < s; h = +t.add(h, o, a), g++) Ml(u, h, f);
    return (
      (h === s || i.bounds === 'ticks' || g === 1) && Ml(u, h, f),
      Object.keys(u)
        .sort(xl)
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
    if (a) return lt(a, [t, e, s], this);
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
      i = ae(this.isHorizontal() ? e.maxRotation : e.minRotation),
      r = Math.cos(i),
      a = Math.sin(i),
      o = this._resolveTickFontOptions(0).size;
    return { w: s * r + o * a, h: s * a + o * r };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      s = e.displayFormats,
      i = s[e.unit] || s.millisecond,
      r = this._tickFormatFunction(t, 0, Sl(this, [t], this._majorUnit), i),
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
    for (e = 0, s = i.length; e < s; ++e) t.push(wl(this, i[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Cc(t.sort(xl));
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
function ti(n, t, e) {
  let s = 0,
    i = n.length - 1,
    r,
    a,
    o,
    l;
  e
    ? (t >= n[s].pos && t <= n[i].pos && ({ lo: s, hi: i } = Fe(n, 'pos', t)),
      ({ pos: r, time: o } = n[s]),
      ({ pos: a, time: l } = n[i]))
    : (t >= n[s].time &&
        t <= n[i].time &&
        ({ lo: s, hi: i } = Fe(n, 'time', t)),
      ({ time: r, pos: o } = n[s]),
      ({ time: a, pos: l } = n[i]));
  const c = a - r;
  return c ? o + ((l - o) * (t - r)) / c : o;
}
class Gr extends Ps {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    (this._minPos = ti(e, this.min)),
      (this._tableRange = ti(e, this.max) - this._minPos),
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
    return (ti(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      s = this.getDecimalForPixel(t) / e.factor - e.end;
    return ti(this._table, s * this._tableRange + this._minPos, !0);
  }
}
M(Gr, 'id', 'timeseries'), M(Gr, 'defaults', Ps.defaults);
var Jb = Object.freeze({
  __proto__: null,
  CategoryScale: $r,
  LinearScale: Ur,
  LogarithmicScale: Xr,
  RadialLinearScale: ls,
  TimeScale: Ps,
  TimeSeriesScale: Gr,
});
const Zb = [ap, Lm, Ob, Jb];
Vt.register(...Zb);
function xu(n, t) {
  return function () {
    return n.apply(t, arguments);
  };
}
const { toString: t_ } = Object.prototype,
  { getPrototypeOf: La } = Object,
  { iterator: Zi, toStringTag: wu } = Symbol,
  tr = ((n) => (t) => {
    const e = t_.call(t);
    return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  he = (n) => ((n = n.toLowerCase()), (t) => tr(t) === n),
  er = (n) => (t) => typeof t === n,
  { isArray: qn } = Array,
  Ds = er('undefined');
function e_(n) {
  return (
    n !== null &&
    !Ds(n) &&
    n.constructor !== null &&
    !Ds(n.constructor) &&
    Yt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const ku = he('ArrayBuffer');
function n_(n) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(n))
      : (t = n && n.buffer && ku(n.buffer)),
    t
  );
}
const s_ = er('string'),
  Yt = er('function'),
  Mu = er('number'),
  nr = (n) => n !== null && typeof n == 'object',
  i_ = (n) => n === !0 || n === !1,
  gi = (n) => {
    if (tr(n) !== 'object') return !1;
    const t = La(n);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(wu in n) &&
      !(Zi in n)
    );
  },
  r_ = he('Date'),
  a_ = he('File'),
  o_ = he('Blob'),
  l_ = he('FileList'),
  c_ = (n) => nr(n) && Yt(n.pipe),
  u_ = (n) => {
    let t;
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        (Yt(n.append) &&
          ((t = tr(n)) === 'formdata' ||
            (t === 'object' &&
              Yt(n.toString) &&
              n.toString() === '[object FormData]'))))
    );
  },
  d_ = he('URLSearchParams'),
  [h_, f_, g_, p_] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    he,
  ),
  m_ = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Rs(n, t, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > 'u') return;
  let s, i;
  if ((typeof n != 'object' && (n = [n]), qn(n)))
    for (s = 0, i = n.length; s < i; s++) t.call(null, n[s], s, n);
  else {
    const r = e ? Object.getOwnPropertyNames(n) : Object.keys(n),
      a = r.length;
    let o;
    for (s = 0; s < a; s++) (o = r[s]), t.call(null, n[o], o, n);
  }
}
function Su(n, t) {
  t = t.toLowerCase();
  const e = Object.keys(n);
  let s = e.length,
    i;
  for (; s-- > 0; ) if (((i = e[s]), t === i.toLowerCase())) return i;
  return null;
}
const pn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Pu = (n) => !Ds(n) && n !== pn;
function Kr() {
  const { caseless: n } = (Pu(this) && this) || {},
    t = {},
    e = (s, i) => {
      const r = (n && Su(t, i)) || i;
      gi(t[r]) && gi(s)
        ? (t[r] = Kr(t[r], s))
        : gi(s)
          ? (t[r] = Kr({}, s))
          : qn(s)
            ? (t[r] = s.slice())
            : (t[r] = s);
    };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Rs(arguments[s], e);
  return t;
}
const b_ = (n, t, e, { allOwnKeys: s } = {}) => (
    Rs(
      t,
      (i, r) => {
        e && Yt(i) ? (n[r] = xu(i, e)) : (n[r] = i);
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
      n = e !== !1 && La(n);
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
    if (qn(n)) return n;
    let t = n.length;
    if (!Mu(t)) return null;
    const e = new Array(t);
    for (; t-- > 0; ) e[t] = n[t];
    return e;
  },
  k_ = (
    (n) => (t) =>
      n && t instanceof n
  )(typeof Uint8Array < 'u' && La(Uint8Array)),
  M_ = (n, t) => {
    const s = (n && n[Zi]).call(n);
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
  P_ = he('HTMLFormElement'),
  D_ = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, s, i) {
      return s.toUpperCase() + i;
    }),
  Pl = (
    ({ hasOwnProperty: n }) =>
    (t, e) =>
      n.call(t, e)
  )(Object.prototype),
  T_ = he('RegExp'),
  Du = (n, t) => {
    const e = Object.getOwnPropertyDescriptors(n),
      s = {};
    Rs(e, (i, r) => {
      let a;
      (a = t(i, r, n)) !== !1 && (s[r] = a || i);
    }),
      Object.defineProperties(n, s);
  },
  O_ = (n) => {
    Du(n, (t, e) => {
      if (Yt(n) && ['arguments', 'caller', 'callee'].indexOf(e) !== -1)
        return !1;
      const s = n[e];
      if (Yt(s)) {
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
    return qn(n) ? s(n) : s(String(n).split(t)), e;
  },
  C_ = () => {},
  A_ = (n, t) => (n != null && Number.isFinite((n = +n)) ? n : t);
function R_(n) {
  return !!(n && Yt(n.append) && n[wu] === 'FormData' && n[Zi]);
}
const L_ = (n) => {
    const t = new Array(10),
      e = (s, i) => {
        if (nr(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!('toJSON' in s)) {
            t[i] = s;
            const r = qn(s) ? [] : {};
            return (
              Rs(s, (a, o) => {
                const l = e(a, i + 1);
                !Ds(l) && (r[o] = l);
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
  F_ = he('AsyncFunction'),
  I_ = (n) => n && (nr(n) || Yt(n)) && Yt(n.then) && Yt(n.catch),
  Tu = ((n, t) =>
    n
      ? setImmediate
      : t
        ? ((e, s) => (
            pn.addEventListener(
              'message',
              ({ source: i, data: r }) => {
                i === pn && r === e && s.length && s.shift()();
              },
              !1,
            ),
            (i) => {
              s.push(i), pn.postMessage(e, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == 'function',
    Yt(pn.postMessage),
  ),
  N_ =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(pn)
      : (typeof process < 'u' && process.nextTick) || Tu,
  B_ = (n) => n != null && Yt(n[Zi]),
  D = {
    isArray: qn,
    isArrayBuffer: ku,
    isBuffer: e_,
    isFormData: u_,
    isArrayBufferView: n_,
    isString: s_,
    isNumber: Mu,
    isBoolean: i_,
    isObject: nr,
    isPlainObject: gi,
    isReadableStream: h_,
    isRequest: f_,
    isResponse: g_,
    isHeaders: p_,
    isUndefined: Ds,
    isDate: r_,
    isFile: a_,
    isBlob: o_,
    isRegExp: T_,
    isFunction: Yt,
    isStream: c_,
    isURLSearchParams: d_,
    isTypedArray: k_,
    isFileList: l_,
    forEach: Rs,
    merge: Kr,
    extend: b_,
    trim: m_,
    stripBOM: __,
    inherits: v_,
    toFlatObject: y_,
    kindOf: tr,
    kindOfTest: he,
    endsWith: x_,
    toArray: w_,
    forEachEntry: M_,
    matchAll: S_,
    isHTMLForm: P_,
    hasOwnProperty: Pl,
    hasOwnProp: Pl,
    reduceDescriptors: Du,
    freezeMethods: O_,
    toObjectSet: E_,
    toCamelCase: D_,
    noop: C_,
    toFiniteNumber: A_,
    findKey: Su,
    global: pn,
    isContextDefined: Pu,
    isSpecCompliantForm: R_,
    toJSONObject: L_,
    isAsyncFn: F_,
    isThenable: I_,
    setImmediate: Tu,
    asap: N_,
    isIterable: B_,
  };
function U(n, t, e, s, i) {
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
D.inherits(U, Error, {
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
const Ou = U.prototype,
  Eu = {};
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
  Eu[n] = { value: n };
});
Object.defineProperties(U, Eu);
Object.defineProperty(Ou, 'isAxiosError', { value: !0 });
U.from = (n, t, e, s, i, r) => {
  const a = Object.create(Ou);
  return (
    D.toFlatObject(
      n,
      a,
      function (l) {
        return l !== Error.prototype;
      },
      (o) => o !== 'isAxiosError',
    ),
    U.call(a, n.message, t, e, s, i),
    (a.cause = n),
    (a.name = n.name),
    r && Object.assign(a, r),
    a
  );
};
const z_ = null;
function Jr(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function Cu(n) {
  return D.endsWith(n, '[]') ? n.slice(0, -2) : n;
}
function Dl(n, t, e) {
  return n
    ? n
        .concat(t)
        .map(function (i, r) {
          return (i = Cu(i)), !e && r ? '[' + i + ']' : i;
        })
        .join(e ? '.' : '')
    : t;
}
function W_(n) {
  return D.isArray(n) && !n.some(Jr);
}
const H_ = D.toFlatObject(D, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function sr(n, t, e) {
  if (!D.isObject(n)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (e = D.toFlatObject(
      e,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, m) {
        return !D.isUndefined(m[p]);
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
      throw new U('Blob is not supported. Use a Buffer instead.');
    return D.isArrayBuffer(f) || D.isTypedArray(f)
      ? l && typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function u(f, p, m) {
    let b = f;
    if (f && !m && typeof f == 'object') {
      if (D.endsWith(p, '{}'))
        (p = s ? p : p.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (D.isArray(f) && W_(f)) ||
        ((D.isFileList(f) || D.endsWith(p, '[]')) && (b = D.toArray(f)))
      )
        return (
          (p = Cu(p)),
          b.forEach(function (x, w) {
            !(D.isUndefined(x) || x === null) &&
              t.append(
                a === !0 ? Dl([p], w, r) : a === null ? p : p + '[]',
                c(x),
              );
          }),
          !1
        );
    }
    return Jr(f) ? !0 : (t.append(Dl(m, p, r), c(f)), !1);
  }
  const d = [],
    h = Object.assign(H_, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Jr,
    });
  function g(f, p) {
    if (!D.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + p.join('.'));
      d.push(f),
        D.forEach(f, function (b, _) {
          (!(D.isUndefined(b) || b === null) &&
            i.call(t, b, D.isString(_) ? _.trim() : _, p, h)) === !0 &&
            g(b, p ? p.concat(_) : [_]);
        }),
        d.pop();
    }
  }
  if (!D.isObject(n)) throw new TypeError('data must be an object');
  return g(n), t;
}
function Tl(n) {
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
function Fa(n, t) {
  (this._pairs = []), n && sr(n, this, t);
}
const Au = Fa.prototype;
Au.append = function (t, e) {
  this._pairs.push([t, e]);
};
Au.toString = function (t) {
  const e = t
    ? function (s) {
        return t.call(this, s, Tl);
      }
    : Tl;
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
function Ru(n, t, e) {
  if (!t) return n;
  const s = (e && e.encode) || j_;
  D.isFunction(e) && (e = { serialize: e });
  const i = e && e.serialize;
  let r;
  if (
    (i
      ? (r = i(t, e))
      : (r = D.isURLSearchParams(t) ? t.toString() : new Fa(t, e).toString(s)),
    r)
  ) {
    const a = n.indexOf('#');
    a !== -1 && (n = n.slice(0, a)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + r);
  }
  return n;
}
class Ol {
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
const Lu = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  V_ = typeof URLSearchParams < 'u' ? URLSearchParams : Fa,
  q_ = typeof FormData < 'u' ? FormData : null,
  Y_ = typeof Blob < 'u' ? Blob : null,
  $_ = {
    isBrowser: !0,
    classes: { URLSearchParams: V_, FormData: q_, Blob: Y_ },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Ia = typeof window < 'u' && typeof document < 'u',
  Zr = (typeof navigator == 'object' && navigator) || void 0,
  U_ =
    Ia &&
    (!Zr || ['ReactNative', 'NativeScript', 'NS'].indexOf(Zr.product) < 0),
  X_ =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  Q_ = (Ia && window.location.href) || 'http://localhost',
  G_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ia,
        hasStandardBrowserEnv: U_,
        hasStandardBrowserWebWorkerEnv: X_,
        navigator: Zr,
        origin: Q_,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ct = { ...G_, ...$_ };
function K_(n, t) {
  return sr(
    n,
    new Ct.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (e, s, i, r) {
          return Ct.isNode && D.isBuffer(e)
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
function Fu(n) {
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
const Ls = {
  transitional: Lu,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, e) {
      const s = e.getContentType() || '',
        i = s.indexOf('application/json') > -1,
        r = D.isObject(t);
      if ((r && D.isHTMLForm(t) && (t = new FormData(t)), D.isFormData(t)))
        return i ? JSON.stringify(Fu(t)) : t;
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
          return sr(
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
      const e = this.transitional || Ls.transitional,
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
              ? U.from(o, U.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: Ct.classes.FormData, Blob: Ct.classes.Blob },
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
  Ls.headers[n] = {};
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
  El = Symbol('internals');
function Zn(n) {
  return n && String(n).trim().toLowerCase();
}
function pi(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(pi) : String(n);
}
function sv(n) {
  const t = Object.create(null),
    e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = e.exec(n)); ) t[s[1]] = s[2];
  return t;
}
const iv = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function kr(n, t, e, s, i) {
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
let $t = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, s) {
    const i = this;
    function r(o, l, c) {
      const u = Zn(l);
      if (!u) throw new Error('header name must be a non-empty string');
      const d = D.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || l] = pi(o));
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
    if (((t = Zn(t)), t)) {
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
    if (((t = Zn(t)), t)) {
      const s = D.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!e || kr(this, this[s], s, e)));
    }
    return !1;
  }
  delete(t, e) {
    const s = this;
    let i = !1;
    function r(a) {
      if (((a = Zn(a)), a)) {
        const o = D.findKey(s, a);
        o && (!e || kr(s, s[o], o, e)) && (delete s[o], (i = !0));
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
      (!t || kr(this, this[r], r, t, !0)) && (delete this[r], (i = !0));
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
          (e[a] = pi(i)), delete e[r];
          return;
        }
        const o = t ? rv(r) : String(r).trim();
        o !== r && delete e[r], (e[o] = pi(i)), (s[o] = !0);
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
    const s = (this[El] = this[El] = { accessors: {} }).accessors,
      i = this.prototype;
    function r(a) {
      const o = Zn(a);
      s[o] || (av(i, a), (s[o] = !0));
    }
    return D.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
$t.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
D.reduceDescriptors($t.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(s) {
      this[e] = s;
    },
  };
});
D.freezeMethods($t);
function Mr(n, t) {
  const e = this || Ls,
    s = t || e,
    i = $t.from(s.headers);
  let r = s.data;
  return (
    D.forEach(n, function (o) {
      r = o.call(e, r, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    r
  );
}
function Iu(n) {
  return !!(n && n.__CANCEL__);
}
function Yn(n, t, e) {
  U.call(this, n ?? 'canceled', U.ERR_CANCELED, t, e),
    (this.name = 'CanceledError');
}
D.inherits(Yn, U, { __CANCEL__: !0 });
function Nu(n, t, e) {
  const s = e.config.validateStatus;
  !e.status || !s || s(e.status)
    ? n(e)
    : t(
        new U(
          'Request failed with status code ' + e.status,
          [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][
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
      const g = u && c - u;
      return g ? Math.round((h * 1e3) / g) : void 0;
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
const Li = (n, t, e = 3) => {
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
  Cl = (n, t) => {
    const e = n != null;
    return [(s) => t[0]({ lengthComputable: e, total: n, loaded: s }), t[1]];
  },
  Al =
    (n) =>
    (...t) =>
      D.asap(() => n(...t)),
  uv = Ct.hasStandardBrowserEnv
    ? ((n, t) => (e) => (
        (e = new URL(e, Ct.origin)),
        n.protocol === e.protocol &&
          n.host === e.host &&
          (t || n.port === e.port)
      ))(
        new URL(Ct.origin),
        Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent),
      )
    : () => !0,
  dv = Ct.hasStandardBrowserEnv
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
function Bu(n, t, e) {
  let s = !hv(t);
  return n && (s || e == !1) ? fv(n, t) : t;
}
const Rl = (n) => (n instanceof $t ? { ...n } : n);
function wn(n, t) {
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
    headers: (c, u, d) => i(Rl(c), Rl(u), d, !0),
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
const zu = (n) => {
    const t = wn({}, n);
    let {
      data: e,
      withXSRFToken: s,
      xsrfHeaderName: i,
      xsrfCookieName: r,
      headers: a,
      auth: o,
    } = t;
    (t.headers = a = $t.from(a)),
      (t.url = Ru(
        Bu(t.baseURL, t.url, t.allowAbsoluteUrls),
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
      if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
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
      Ct.hasStandardBrowserEnv &&
      (s && D.isFunction(s) && (s = s(t)), s || (s !== !1 && uv(t.url)))
    ) {
      const c = i && r && dv.read(r);
      c && a.set(i, c);
    }
    return t;
  },
  gv = typeof XMLHttpRequest < 'u',
  pv =
    gv &&
    function (n) {
      return new Promise(function (e, s) {
        const i = zu(n);
        let r = i.data;
        const a = $t.from(i.headers).normalize();
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
          const x = $t.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            v = {
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
          Nu(
            function (O) {
              e(O), p();
            },
            function (O) {
              s(O), p();
            },
            v,
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
              (s(new U('Request aborted', U.ECONNABORTED, n, m)), (m = null));
          }),
          (m.onerror = function () {
            s(new U('Network Error', U.ERR_NETWORK, n, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let w = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const v = i.transitional || Lu;
            i.timeoutErrorMessage && (w = i.timeoutErrorMessage),
              s(
                new U(
                  w,
                  v.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  n,
                  m,
                ),
              ),
              (m = null);
          }),
          r === void 0 && a.setContentType(null),
          'setRequestHeader' in m &&
            D.forEach(a.toJSON(), function (w, v) {
              m.setRequestHeader(v, w);
            }),
          D.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          o && o !== 'json' && (m.responseType = i.responseType),
          c && (([h, f] = Li(c, !0)), m.addEventListener('progress', h)),
          l &&
            m.upload &&
            (([d, g] = Li(l)),
            m.upload.addEventListener('progress', d),
            m.upload.addEventListener('loadend', g)),
          (i.cancelToken || i.signal) &&
            ((u = (x) => {
              m &&
                (s(!x || x.type ? new Yn(null, n, m) : x),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener('abort', u)));
        const _ = ov(i.url);
        if (_ && Ct.protocols.indexOf(_) === -1) {
          s(new U('Unsupported protocol ' + _ + ':', U.ERR_BAD_REQUEST, n));
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
            u instanceof U ? u : new Yn(u instanceof Error ? u.message : u),
          );
        }
      };
      let a =
        t &&
        setTimeout(() => {
          (a = null), r(new U(`timeout ${t} of ms exceeded`, U.ETIMEDOUT));
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
  Ll = (n, t, e, s) => {
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
  ir =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Wu = ir && typeof ReadableStream == 'function',
  yv =
    ir &&
    (typeof TextEncoder == 'function'
      ? (
          (n) => (t) =>
            n.encode(t)
        )(new TextEncoder())
      : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
  Hu = (n, ...t) => {
    try {
      return !!n(...t);
    } catch {
      return !1;
    }
  },
  xv =
    Wu &&
    Hu(() => {
      let n = !1;
      const t = new Request(Ct.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (n = !0), 'half';
        },
      }).headers.has('Content-Type');
      return n && !t;
    }),
  Fl = 64 * 1024,
  ta = Wu && Hu(() => D.isReadableStream(new Response('').body)),
  Fi = { stream: ta && ((n) => n.body) };
ir &&
  ((n) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Fi[t] &&
        (Fi[t] = D.isFunction(n[t])
          ? (e) => e[t]()
          : (e, s) => {
              throw new U(
                `Response type '${t}' is not supported`,
                U.ERR_NOT_SUPPORT,
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
        await new Request(Ct.origin, { method: 'POST', body: n }).arrayBuffer()
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
    ir &&
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
      } = zu(n);
      c = c ? (c + '').toLowerCase() : 'text';
      let g = mv([i, r && r.toAbortSignal()], a),
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
          xv &&
          e !== 'get' &&
          e !== 'head' &&
          (m = await kv(u, s)) !== 0
        ) {
          let v = new Request(t, { method: 'POST', body: s, duplex: 'half' }),
            P;
          if (
            (D.isFormData(s) &&
              (P = v.headers.get('content-type')) &&
              u.setContentType(P),
            v.body)
          ) {
            const [O, k] = Cl(m, Li(Al(l)));
            s = Ll(v.body, Fl, O, k);
          }
        }
        D.isString(d) || (d = d ? 'include' : 'omit');
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
        const x = ta && (c === 'stream' || c === 'response');
        if (ta && (o || (x && p))) {
          const v = {};
          ['status', 'statusText', 'headers'].forEach((C) => {
            v[C] = _[C];
          });
          const P = D.toFiniteNumber(_.headers.get('content-length')),
            [O, k] = (o && Cl(P, Li(Al(o), !0))) || [];
          _ = new Response(
            Ll(_.body, Fl, O, () => {
              k && k(), p && p();
            }),
            v,
          );
        }
        c = c || 'text';
        let w = await Fi[D.findKey(Fi, c) || 'text'](_, n);
        return (
          !x && p && p(),
          await new Promise((v, P) => {
            Nu(v, P, {
              data: w,
              headers: $t.from(_.headers),
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
            ? Object.assign(new U('Network Error', U.ERR_NETWORK, n, f), {
                cause: b.cause || b,
              })
            : U.from(b, b && b.code, n, f))
        );
      }
    }),
  ea = { http: z_, xhr: pv, fetch: Mv };
D.forEach(ea, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: t });
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: t });
  }
});
const Il = (n) => `- ${n}`,
  Sv = (n) => D.isFunction(n) || n === null || n === !1,
  ju = {
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
          !Sv(e) && ((s = ea[(a = String(e)).toLowerCase()]), s === void 0))
        )
          throw new U(`Unknown adapter '${a}'`);
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
              r.map(Il).join(`
`)
            : ' ' + Il(r[0])
          : 'as no adapter specified';
        throw new U(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT',
        );
      }
      return s;
    },
    adapters: ea,
  };
function Sr(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Yn(null, n);
}
function Nl(n) {
  return (
    Sr(n),
    (n.headers = $t.from(n.headers)),
    (n.data = Mr.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    ju
      .getAdapter(n.adapter || Ls.adapter)(n)
      .then(
        function (s) {
          return (
            Sr(n),
            (s.data = Mr.call(n, n.transformResponse, s)),
            (s.headers = $t.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            Iu(s) ||
              (Sr(n),
              s &&
                s.response &&
                ((s.response.data = Mr.call(
                  n,
                  n.transformResponse,
                  s.response,
                )),
                (s.response.headers = $t.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const Vu = '1.9.0',
  rr = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, t) => {
    rr[n] = function (s) {
      return typeof s === n || 'a' + (t < 1 ? 'n ' : ' ') + n;
    };
  },
);
const Bl = {};
rr.transitional = function (t, e, s) {
  function i(r, a) {
    return (
      '[Axios v' +
      Vu +
      "] Transitional option '" +
      r +
      "'" +
      a +
      (s ? '. ' + s : '')
    );
  }
  return (r, a, o) => {
    if (t === !1)
      throw new U(
        i(a, ' has been removed' + (e ? ' in ' + e : '')),
        U.ERR_DEPRECATED,
      );
    return (
      e &&
        !Bl[a] &&
        ((Bl[a] = !0),
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
rr.spelling = function (t) {
  return (e, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Pv(n, t, e) {
  if (typeof n != 'object')
    throw new U('options must be an object', U.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(n);
  let i = s.length;
  for (; i-- > 0; ) {
    const r = s[i],
      a = t[r];
    if (a) {
      const o = n[r],
        l = o === void 0 || a(o, r, n);
      if (l !== !0)
        throw new U('option ' + r + ' must be ' + l, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0) throw new U('Unknown option ' + r, U.ERR_BAD_OPTION);
  }
}
const mi = { assertOptions: Pv, validators: rr },
  pe = mi.validators;
let vn = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Ol(), response: new Ol() });
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
      (e = wn(this.defaults, e));
    const { transitional: s, paramsSerializer: i, headers: r } = e;
    s !== void 0 &&
      mi.assertOptions(
        s,
        {
          silentJSONParsing: pe.transitional(pe.boolean),
          forcedJSONParsing: pe.transitional(pe.boolean),
          clarifyTimeoutError: pe.transitional(pe.boolean),
        },
        !1,
      ),
      i != null &&
        (D.isFunction(i)
          ? (e.paramsSerializer = { serialize: i })
          : mi.assertOptions(
              i,
              { encode: pe.function, serialize: pe.function },
              !0,
            )),
      e.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (e.allowAbsoluteUrls = !0)),
      mi.assertOptions(
        e,
        {
          baseUrl: pe.spelling('baseURL'),
          withXsrfToken: pe.spelling('withXSRFToken'),
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
      (e.headers = $t.concat(a, r));
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
      const f = [Nl.bind(this), void 0];
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
      u = Nl.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const e = Bu(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ru(e, t.params, t.paramsSerializer);
  }
};
D.forEach(['delete', 'get', 'head', 'options'], function (t) {
  vn.prototype[t] = function (e, s) {
    return this.request(
      wn(s || {}, { method: t, url: e, data: (s || {}).data }),
    );
  };
});
D.forEach(['post', 'put', 'patch'], function (t) {
  function e(s) {
    return function (r, a, o) {
      return this.request(
        wn(o || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: r,
          data: a,
        }),
      );
    };
  }
  (vn.prototype[t] = e()), (vn.prototype[t + 'Form'] = e(!0));
});
let Dv = class qu {
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
        s.reason || ((s.reason = new Yn(r, a, o)), e(s.reason));
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
      token: new qu(function (i) {
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
const na = {
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
Object.entries(na).forEach(([n, t]) => {
  na[t] = n;
});
function Yu(n) {
  const t = new vn(n),
    e = xu(vn.prototype.request, t);
  return (
    D.extend(e, vn.prototype, t, { allOwnKeys: !0 }),
    D.extend(e, t, null, { allOwnKeys: !0 }),
    (e.create = function (i) {
      return Yu(wn(n, i));
    }),
    e
  );
}
const Z = Yu(Ls);
Z.Axios = vn;
Z.CanceledError = Yn;
Z.CancelToken = Dv;
Z.isCancel = Iu;
Z.VERSION = Vu;
Z.toFormData = sr;
Z.AxiosError = U;
Z.Cancel = Z.CanceledError;
Z.all = function (t) {
  return Promise.all(t);
};
Z.spread = Tv;
Z.isAxiosError = Ov;
Z.mergeConfig = wn;
Z.AxiosHeaders = $t;
Z.formToJSON = (n) => Fu(D.isHTMLForm(n) ? new FormData(n) : n);
Z.getAdapter = ju.getAdapter;
Z.HttpStatusCode = na;
Z.default = Z;
const {
  Axios: Hw,
  AxiosError: jw,
  CanceledError: Vw,
  isCancel: qw,
  CancelToken: Yw,
  VERSION: $w,
  all: Uw,
  Cancel: Xw,
  isAxiosError: Qw,
  spread: Gw,
  toFormData: Kw,
  AxiosHeaders: Jw,
  HttpStatusCode: Zw,
  formToJSON: t1,
  getAdapter: e1,
  mergeConfig: n1,
} = Z;
var Ev = z('<p> </p>'),
  Cv = z(
    '<div class="parent svelte-7my77i"><div class="div1 svelte-7my77i"><p class="main svelte-7my77i">Top Batches Sold</p></div> <div class="div2 svelte-7my77i"><canvas width="400" height="400" class="svelte-7my77i"></canvas></div> <div class="div5 svelte-7my77i"><p class="main1 svelte-7my77i">Top Batches Sold:</p> <!></div></div>',
  );
function sa(n, t) {
  ue(t, !1);
  let e = Rn(),
    s,
    i = Rn([]),
    r = Rn([]),
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
      const p = (await Z.get('http://localhost:3000/api/data/top/five/batches'))
        .data;
      R(
        i,
        p.map((m) => m.batchcode),
      ),
        R(
          r,
          p.map((m) => m.total_sold),
        ),
        (a.labels = y(i)),
        (a.datasets[0].data = y(r)),
        s && s.destroy(),
        (s = new Vt(y(e), {
          type: o(),
          data: a,
          options: { responsive: !0, maintainAspectRatio: !1 },
        }));
    } catch (f) {
      console.error('Error fetching data:', f);
    }
  }
  De(() => {
    l();
  }),
    wc();
  var c = Cv(),
    u = E(S(c), 2),
    d = S(u);
  Vn(
    d,
    (f) => R(e, f),
    () => y(e),
  );
  var h = E(u, 2),
    g = E(S(h), 2);
  tn(
    g,
    1,
    () => y(i),
    vc,
    (f, p, m) => {
      var b = Ev(),
        _ = S(b);
      st(() => N(_, `${y(p) ?? ''}: ${y(r)[m] ?? ''}`)), B(f, b);
    },
  ),
    B(n, c),
    de();
}
var Av = z('<div><p><strong> </strong></p> <p> </p> <p> </p> <p> </p></div>'),
  Rv = z(
    '<div class="card green svelte-9zgg9q"><p><strong>No expired items</strong></p> <p>Inventory is healthy</p></div>',
  ),
  Lv = z(
    '<div class="parent svelte-9zgg9q"><div class="div1 svelte-9zgg9q"><p class="main svelte-9zgg9q"> </p></div> <div class="div2 svelte-9zgg9q"><!></div></div>',
  );
function $u(n, t) {
  ue(t, !1);
  let e = Rn(null),
    s = Rn([]);
  async function i() {
    var b;
    const m = await Z.get('http://localhost:3000/api/data/expired/total');
    R(e, ((b = m.data) == null ? void 0 : b.total_expired_qty) ?? 0);
  }
  async function r() {
    try {
      const m = await Z.get('http://localhost:3000/api/data/expired');
      R(s, m.data);
    } catch (m) {
      console.error('Error fetching expired items:', m);
    }
  }
  De(() => {
    i(), r();
  });
  function a(m) {
    return m > 90 ? 'card red' : m > 30 ? 'card orange' : 'card yellow';
  }
  function o(m) {
    const b = new Date(m);
    return Math.floor((new Date() - b) / (1e3 * 60 * 60 * 24));
  }
  wc();
  var l = Lv(),
    c = S(l),
    u = S(c),
    d = S(u),
    h = E(c, 2),
    g = S(h);
  {
    var f = (m) => {
        var b = Th(),
          _ = xe(b);
        tn(
          _,
          1,
          () => y(s),
          vc,
          (x, w) => {
            var v = Av(),
              P = S(v),
              O = S(P),
              k = S(O),
              C = E(P, 2),
              L = S(C),
              A = E(C, 2),
              T = S(A),
              F = E(A, 2),
              V = S(F);
            st(
              (W, I) => {
                Ot(v, 1, W, 'svelte-9zgg9q'),
                  N(k, y(w).itemname),
                  N(L, `Batch: ${y(w).batchcode ?? ''}`),
                  N(T, `Qty: ${y(w).qty ?? ''}`),
                  N(V, `Expired: ${I ?? ''} days ago`);
              },
              [() => a(o(y(w).expiry)), () => o(y(w).expiry)],
              ha,
            ),
              B(x, v);
          },
        ),
          B(m, b);
      },
      p = (m) => {
        var b = Rv();
        B(m, b);
      };
    J(g, (m) => {
      y(s).length > 0 ? m(f) : m(p, !1);
    });
  }
  st(() => N(d, `Total Expired Items: ${y(e) ?? ''}`)), B(n, l), de();
}
const Uu = 6048e5,
  Fv = 864e5,
  Fs = 6e4,
  Is = 36e5,
  Iv = 1e3,
  zl = Symbol.for('constructDateFrom');
function yt(n, t) {
  return typeof n == 'function'
    ? n(t)
    : n && typeof n == 'object' && zl in n
      ? n[zl](t)
      : n instanceof Date
        ? new n.constructor(t)
        : new Date(t);
}
function $(n, t) {
  return yt(t || n, n);
}
function ar(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in);
  return isNaN(t)
    ? yt((e == null ? void 0 : e.in) || n, NaN)
    : (t && s.setDate(s.getDate() + t), s);
}
function Na(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in);
  if (isNaN(t)) return yt(n, NaN);
  if (!t) return s;
  const i = s.getDate(),
    r = yt(n, s.getTime());
  r.setMonth(s.getMonth() + t + 1, 0);
  const a = r.getDate();
  return i >= a ? r : (s.setFullYear(r.getFullYear(), r.getMonth(), i), s);
}
function Ba(n, t, e) {
  return yt(n, +$(n) + t);
}
function Nv(n, t, e) {
  return Ba(n, t * Is);
}
let Bv = {};
function Sn() {
  return Bv;
}
function Pe(n, t) {
  var o, l, c, u;
  const e = Sn(),
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
    i = $(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? 7 : 0) + r - s;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function zn(n, t) {
  return Pe(n, { ...t, weekStartsOn: 1 });
}
function Xu(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = yt(e, 0);
  i.setFullYear(s + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const r = zn(i),
    a = yt(e, 0);
  a.setFullYear(s, 0, 4), a.setHours(0, 0, 0, 0);
  const o = zn(a);
  return e.getTime() >= r.getTime()
    ? s + 1
    : e.getTime() >= o.getTime()
      ? s
      : s - 1;
}
function Ii(n) {
  const t = $(n),
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
function Pn(n, ...t) {
  const e = yt.bind(
    null,
    t.find((s) => typeof s == 'object'),
  );
  return t.map(e);
}
function ia(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setHours(0, 0, 0, 0), e;
}
function Qu(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t),
    r = ia(s),
    a = ia(i),
    o = +r - Ii(r),
    l = +a - Ii(a);
  return Math.round((o - l) / Fv);
}
function zv(n, t) {
  const e = Xu(n, t),
    s = yt(n, 0);
  return s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0), zn(s);
}
function Wv(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in);
  return s.setTime(s.getTime() + t * Fs), s;
}
function Hv(n, t, e) {
  return Na(n, t * 3, e);
}
function jv(n, t, e) {
  return Ba(n, t * 1e3);
}
function Vv(n, t, e) {
  return ar(n, t * 7, e);
}
function qv(n, t, e) {
  return Na(n, t * 12, e);
}
function ps(n, t) {
  const e = +$(n) - +$(t);
  return e < 0 ? -1 : e > 0 ? 1 : e;
}
function Yv(n) {
  return (
    n instanceof Date ||
    (typeof n == 'object' &&
      Object.prototype.toString.call(n) === '[object Date]')
  );
}
function Gu(n) {
  return !((!Yv(n) && typeof n != 'number') || isNaN(+$(n)));
}
function $v(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t),
    r = s.getFullYear() - i.getFullYear(),
    a = s.getMonth() - i.getMonth();
  return r * 12 + a;
}
function Uv(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t);
  return s.getFullYear() - i.getFullYear();
}
function Ku(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t),
    r = Wl(s, i),
    a = Math.abs(Qu(s, i));
  s.setDate(s.getDate() - r * a);
  const o = +(Wl(s, i) === -r),
    l = r * (a - o);
  return l === 0 ? 0 : l;
}
function Wl(n, t) {
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
function Ns(n) {
  return (t) => {
    const s = (n ? Math[n] : Math.trunc)(t);
    return s === 0 ? 0 : s;
  };
}
function Xv(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t),
    r = (+s - +i) / Is;
  return Ns(e == null ? void 0 : e.roundingMethod)(r);
}
function za(n, t) {
  return +$(n) - +$(t);
}
function Qv(n, t, e) {
  const s = za(n, t) / Fs;
  return Ns(e == null ? void 0 : e.roundingMethod)(s);
}
function Ju(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setHours(23, 59, 59, 999), e;
}
function Zu(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getMonth();
  return (
    e.setFullYear(e.getFullYear(), s + 1, 0), e.setHours(23, 59, 59, 999), e
  );
}
function Gv(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return +Ju(e, t) == +Zu(e, t);
}
function td(n, t, e) {
  const [s, i, r] = Pn(e == null ? void 0 : e.in, n, n, t),
    a = ps(i, r),
    o = Math.abs($v(i, r));
  if (o < 1) return 0;
  i.getMonth() === 1 && i.getDate() > 27 && i.setDate(30),
    i.setMonth(i.getMonth() - a * o);
  let l = ps(i, r) === -a;
  Gv(s) && o === 1 && ps(s, r) === 1 && (l = !1);
  const c = a * (o - +l);
  return c === 0 ? 0 : c;
}
function Kv(n, t, e) {
  const s = td(n, t, e) / 3;
  return Ns(e == null ? void 0 : e.roundingMethod)(s);
}
function Jv(n, t, e) {
  const s = za(n, t) / 1e3;
  return Ns(e == null ? void 0 : e.roundingMethod)(s);
}
function Zv(n, t, e) {
  const s = Ku(n, t, e) / 7;
  return Ns(e == null ? void 0 : e.roundingMethod)(s);
}
function ty(n, t, e) {
  const [s, i] = Pn(e == null ? void 0 : e.in, n, t),
    r = ps(s, i),
    a = Math.abs(Uv(s, i));
  s.setFullYear(1584), i.setFullYear(1584);
  const o = ps(s, i) === -r,
    l = r * (a - +o);
  return l === 0 ? 0 : l;
}
function ey(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3);
  return e.setMonth(i, 1), e.setHours(0, 0, 0, 0), e;
}
function ny(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setDate(1), e.setHours(0, 0, 0, 0), e;
}
function sy(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getFullYear();
  return e.setFullYear(s + 1, 0, 0), e.setHours(23, 59, 59, 999), e;
}
function ed(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setFullYear(e.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
function iy(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setMinutes(59, 59, 999), e;
}
function ry(n, t) {
  var o, l;
  const e = Sn(),
    s =
      e.weekStartsOn ??
      ((l = (o = e.locale) == null ? void 0 : o.options) == null
        ? void 0
        : l.weekStartsOn) ??
      0,
    i = $(n, t == null ? void 0 : t.in),
    r = i.getDay(),
    a = (r < s ? -7 : 0) + 6 - (r - s);
  return i.setDate(i.getDate() + a), i.setHours(23, 59, 59, 999), i;
}
function ay(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setSeconds(59, 999), e;
}
function oy(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getMonth(),
    i = s - (s % 3) + 3;
  return e.setMonth(i, 0), e.setHours(23, 59, 59, 999), e;
}
function ly(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(999), e;
}
const cy = {
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
  uy = (n, t, e) => {
    let s;
    const i = cy[n];
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
function Pr(n) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const dy = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  hy = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  fy = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  gy = {
    date: Pr({ formats: dy, defaultWidth: 'full' }),
    time: Pr({ formats: hy, defaultWidth: 'full' }),
    dateTime: Pr({ formats: fy, defaultWidth: 'full' }),
  },
  py = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  my = (n, t, e, s) => py[n];
function ts(n) {
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
const by = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  _y = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  vy = {
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
  yy = {
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
  xy = {
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
  wy = {
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
  ky = (n, t) => {
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
  My = {
    ordinalNumber: ky,
    era: ts({ values: by, defaultWidth: 'wide' }),
    quarter: ts({
      values: _y,
      defaultWidth: 'wide',
      argumentCallback: (n) => n - 1,
    }),
    month: ts({ values: vy, defaultWidth: 'wide' }),
    day: ts({ values: yy, defaultWidth: 'wide' }),
    dayPeriod: ts({
      values: xy,
      defaultWidth: 'wide',
      formattingValues: wy,
      defaultFormattingWidth: 'wide',
    }),
  };
function es(n) {
  return (t, e = {}) => {
    const s = e.width,
      i = (s && n.matchPatterns[s]) || n.matchPatterns[n.defaultMatchWidth],
      r = t.match(i);
    if (!r) return null;
    const a = r[0],
      o = (s && n.parsePatterns[s]) || n.parsePatterns[n.defaultParseWidth],
      l = Array.isArray(o) ? Py(o, (d) => d.test(a)) : Sy(o, (d) => d.test(a));
    let c;
    (c = n.valueCallback ? n.valueCallback(l) : l),
      (c = e.valueCallback ? e.valueCallback(c) : c);
    const u = t.slice(a.length);
    return { value: c, rest: u };
  };
}
function Sy(n, t) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && t(n[e])) return e;
}
function Py(n, t) {
  for (let e = 0; e < n.length; e++) if (t(n[e])) return e;
}
function Dy(n) {
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
const Ty = /^(\d+)(th|st|nd|rd)?/i,
  Oy = /\d+/i,
  Ey = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Cy = { any: [/^b/i, /^(a|c)/i] },
  Ay = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Ry = { any: [/1/i, /2/i, /3/i, /4/i] },
  Ly = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Fy = {
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
  Iy = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Ny = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  By = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  zy = {
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
  Wy = {
    ordinalNumber: Dy({
      matchPattern: Ty,
      parsePattern: Oy,
      valueCallback: (n) => parseInt(n, 10),
    }),
    era: es({
      matchPatterns: Ey,
      defaultMatchWidth: 'wide',
      parsePatterns: Cy,
      defaultParseWidth: 'any',
    }),
    quarter: es({
      matchPatterns: Ay,
      defaultMatchWidth: 'wide',
      parsePatterns: Ry,
      defaultParseWidth: 'any',
      valueCallback: (n) => n + 1,
    }),
    month: es({
      matchPatterns: Ly,
      defaultMatchWidth: 'wide',
      parsePatterns: Fy,
      defaultParseWidth: 'any',
    }),
    day: es({
      matchPatterns: Iy,
      defaultMatchWidth: 'wide',
      parsePatterns: Ny,
      defaultParseWidth: 'any',
    }),
    dayPeriod: es({
      matchPatterns: By,
      defaultMatchWidth: 'any',
      parsePatterns: zy,
      defaultParseWidth: 'any',
    }),
  },
  nd = {
    code: 'en-US',
    formatDistance: uy,
    formatLong: gy,
    formatRelative: my,
    localize: My,
    match: Wy,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Hy(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return Qu(e, ed(e)) + 1;
}
function sd(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = +zn(e) - +zv(e);
  return Math.round(s / Uu) + 1;
}
function Wa(n, t) {
  var u, d, h, g;
  const e = $(n, t == null ? void 0 : t.in),
    s = e.getFullYear(),
    i = Sn(),
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
  const o = Pe(a, t),
    l = yt((t == null ? void 0 : t.in) || n, 0);
  l.setFullYear(s, 0, r), l.setHours(0, 0, 0, 0);
  const c = Pe(l, t);
  return +e >= +o ? s + 1 : +e >= +c ? s : s - 1;
}
function jy(n, t) {
  var o, l, c, u;
  const e = Sn(),
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
    i = Wa(n, t),
    r = yt((t == null ? void 0 : t.in) || n, 0);
  return r.setFullYear(i, 0, s), r.setHours(0, 0, 0, 0), Pe(r, t);
}
function id(n, t) {
  const e = $(n, t == null ? void 0 : t.in),
    s = +Pe(e, t) - +jy(e, t);
  return Math.round(s / Uu) + 1;
}
function et(n, t) {
  const e = n < 0 ? '-' : '',
    s = Math.abs(n).toString().padStart(t, '0');
  return e + s;
}
const qe = {
    y(n, t) {
      const e = n.getFullYear(),
        s = e > 0 ? e : 1 - e;
      return et(t === 'yy' ? s % 100 : s, t.length);
    },
    M(n, t) {
      const e = n.getMonth();
      return t === 'M' ? String(e + 1) : et(e + 1, 2);
    },
    d(n, t) {
      return et(n.getDate(), t.length);
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
      return et(n.getHours() % 12 || 12, t.length);
    },
    H(n, t) {
      return et(n.getHours(), t.length);
    },
    m(n, t) {
      return et(n.getMinutes(), t.length);
    },
    s(n, t) {
      return et(n.getSeconds(), t.length);
    },
    S(n, t) {
      const e = t.length,
        s = n.getMilliseconds(),
        i = Math.trunc(s * Math.pow(10, e - 3));
      return et(i, t.length);
    },
  },
  Cn = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  Hl = {
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
      return qe.y(n, t);
    },
    Y: function (n, t, e, s) {
      const i = Wa(n, s),
        r = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const a = r % 100;
        return et(a, 2);
      }
      return t === 'Yo'
        ? e.ordinalNumber(r, { unit: 'year' })
        : et(r, t.length);
    },
    R: function (n, t) {
      const e = Xu(n);
      return et(e, t.length);
    },
    u: function (n, t) {
      const e = n.getFullYear();
      return et(e, t.length);
    },
    Q: function (n, t, e) {
      const s = Math.ceil((n.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(s);
        case 'QQ':
          return et(s, 2);
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
          return et(s, 2);
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
          return qe.M(n, t);
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
          return et(s + 1, 2);
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
      const i = id(n, s);
      return t === 'wo'
        ? e.ordinalNumber(i, { unit: 'week' })
        : et(i, t.length);
    },
    I: function (n, t, e) {
      const s = sd(n);
      return t === 'Io'
        ? e.ordinalNumber(s, { unit: 'week' })
        : et(s, t.length);
    },
    d: function (n, t, e) {
      return t === 'do'
        ? e.ordinalNumber(n.getDate(), { unit: 'date' })
        : qe.d(n, t);
    },
    D: function (n, t, e) {
      const s = Hy(n);
      return t === 'Do'
        ? e.ordinalNumber(s, { unit: 'dayOfYear' })
        : et(s, t.length);
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
          return et(r, 2);
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
          return et(r, t.length);
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
          return et(i, t.length);
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
          ? (i = Cn.noon)
          : s === 0
            ? (i = Cn.midnight)
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
          ? (i = Cn.evening)
          : s >= 12
            ? (i = Cn.afternoon)
            : s >= 4
              ? (i = Cn.morning)
              : (i = Cn.night),
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
      return qe.h(n, t);
    },
    H: function (n, t, e) {
      return t === 'Ho'
        ? e.ordinalNumber(n.getHours(), { unit: 'hour' })
        : qe.H(n, t);
    },
    K: function (n, t, e) {
      const s = n.getHours() % 12;
      return t === 'Ko'
        ? e.ordinalNumber(s, { unit: 'hour' })
        : et(s, t.length);
    },
    k: function (n, t, e) {
      let s = n.getHours();
      return (
        s === 0 && (s = 24),
        t === 'ko' ? e.ordinalNumber(s, { unit: 'hour' }) : et(s, t.length)
      );
    },
    m: function (n, t, e) {
      return t === 'mo'
        ? e.ordinalNumber(n.getMinutes(), { unit: 'minute' })
        : qe.m(n, t);
    },
    s: function (n, t, e) {
      return t === 'so'
        ? e.ordinalNumber(n.getSeconds(), { unit: 'second' })
        : qe.s(n, t);
    },
    S: function (n, t) {
      return qe.S(n, t);
    },
    X: function (n, t, e) {
      const s = n.getTimezoneOffset();
      if (s === 0) return 'Z';
      switch (t) {
        case 'X':
          return Vl(s);
        case 'XXXX':
        case 'XX':
          return fn(s);
        case 'XXXXX':
        case 'XXX':
        default:
          return fn(s, ':');
      }
    },
    x: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'x':
          return Vl(s);
        case 'xxxx':
        case 'xx':
          return fn(s);
        case 'xxxxx':
        case 'xxx':
        default:
          return fn(s, ':');
      }
    },
    O: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + jl(s, ':');
        case 'OOOO':
        default:
          return 'GMT' + fn(s, ':');
      }
    },
    z: function (n, t, e) {
      const s = n.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + jl(s, ':');
        case 'zzzz':
        default:
          return 'GMT' + fn(s, ':');
      }
    },
    t: function (n, t, e) {
      const s = Math.trunc(+n / 1e3);
      return et(s, t.length);
    },
    T: function (n, t, e) {
      return et(+n, t.length);
    },
  };
function jl(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = Math.trunc(s / 60),
    r = s % 60;
  return r === 0 ? e + String(i) : e + String(i) + t + et(r, 2);
}
function Vl(n, t) {
  return n % 60 === 0
    ? (n > 0 ? '-' : '+') + et(Math.abs(n) / 60, 2)
    : fn(n, t);
}
function fn(n, t = '') {
  const e = n > 0 ? '-' : '+',
    s = Math.abs(n),
    i = et(Math.trunc(s / 60), 2),
    r = et(s % 60, 2);
  return e + i + t + r;
}
const ql = (n, t) => {
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
  rd = (n, t) => {
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
  Vy = (n, t) => {
    const e = n.match(/(P+)(p+)?/) || [],
      s = e[1],
      i = e[2];
    if (!i) return ql(n, t);
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
    return r.replace('{{date}}', ql(s, t)).replace('{{time}}', rd(i, t));
  },
  ra = { p: rd, P: Vy },
  qy = /^D+$/,
  Yy = /^Y+$/,
  $y = ['D', 'DD', 'YY', 'YYYY'];
function ad(n) {
  return qy.test(n);
}
function od(n) {
  return Yy.test(n);
}
function aa(n, t, e) {
  const s = Uy(n, t, e);
  if ((console.warn(s), $y.includes(n))) throw new RangeError(s);
}
function Uy(n, t, e) {
  const s = n[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${s} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Xy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Qy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Gy = /^'([^]*?)'?$/,
  Ky = /''/g,
  Jy = /[a-zA-Z]/;
function Zy(n, t, e) {
  var u, d, h, g, f, p, m, b;
  const s = Sn(),
    i = (e == null ? void 0 : e.locale) ?? s.locale ?? nd,
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
    o = $(n, e == null ? void 0 : e.in);
  if (!Gu(o)) throw new RangeError('Invalid time value');
  let l = t
    .match(Qy)
    .map((_) => {
      const x = _[0];
      if (x === 'p' || x === 'P') {
        const w = ra[x];
        return w(_, i.formatLong);
      }
      return _;
    })
    .join('')
    .match(Xy)
    .map((_) => {
      if (_ === "''") return { isToken: !1, value: "'" };
      const x = _[0];
      if (x === "'") return { isToken: !1, value: t0(_) };
      if (Hl[x]) return { isToken: !0, value: _ };
      if (x.match(Jy))
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
      ((!(e != null && e.useAdditionalWeekYearTokens) && od(x)) ||
        (!(e != null && e.useAdditionalDayOfYearTokens) && ad(x))) &&
        aa(x, t, String(n));
      const w = Hl[x[0]];
      return w(o, x, i.localize, c);
    })
    .join('');
}
function t0(n) {
  const t = n.match(Gy);
  return t ? t[1].replace(Ky, "'") : n;
}
function e0() {
  return Object.assign({}, Sn());
}
function n0(n, t) {
  const e = $(n, t == null ? void 0 : t.in).getDay();
  return e === 0 ? 7 : e;
}
function s0(n, t) {
  const e = i0(t) ? new t(0) : yt(t, 0);
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
function i0(n) {
  var t;
  return (
    typeof n == 'function' &&
    ((t = n.prototype) == null ? void 0 : t.constructor) === n
  );
}
const r0 = 10;
class ld {
  constructor() {
    M(this, 'subPriority', 0);
  }
  validate(t, e) {
    return !0;
  }
}
class a0 extends ld {
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
class o0 extends ld {
  constructor(e, s) {
    super();
    M(this, 'priority', r0);
    M(this, 'subPriority', -1);
    this.context = e || ((i) => yt(s, i));
  }
  set(e, s) {
    return s.timestampIsSet ? e : yt(e, s0(e, this.context));
  }
}
class tt {
  run(t, e, s, i) {
    const r = this.parse(t, e, s, i);
    return r
      ? {
          setter: new a0(
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
class l0 extends tt {
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
  ve = {
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
function ye(n, t) {
  const e = t.match(n);
  if (!e) return null;
  if (e[0] === 'Z') return { value: 0, rest: t.slice(1) };
  const s = e[1] === '+' ? 1 : -1,
    i = e[2] ? parseInt(e[2], 10) : 0,
    r = e[3] ? parseInt(e[3], 10) : 0,
    a = e[5] ? parseInt(e[5], 10) : 0;
  return { value: s * (i * Is + r * Fs + a * Iv), rest: t.slice(e[0].length) };
}
function cd(n) {
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
function Ni(n, t) {
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
function Ha(n) {
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
function ud(n, t) {
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
function dd(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class c0 extends tt {
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
      const o = ud(i.year, r);
      return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const a = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class u0 extends tt {
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
    const a = Wa(e, r);
    if (i.isTwoDigitYear) {
      const l = ud(i.year, a);
      return (
        e.setFullYear(l, 0, r.firstWeekContainsDate),
        e.setHours(0, 0, 0, 0),
        Pe(e, r)
      );
    }
    const o = !('era' in s) || s.era === 1 ? i.year : 1 - i.year;
    return (
      e.setFullYear(o, 0, r.firstWeekContainsDate),
      e.setHours(0, 0, 0, 0),
      Pe(e, r)
    );
  }
}
class d0 extends tt {
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
    return Ni(s === 'R' ? 4 : s.length, e);
  }
  set(e, s, i) {
    const r = yt(e, 0);
    return r.setFullYear(i, 0, 4), r.setHours(0, 0, 0, 0), zn(r);
  }
}
class h0 extends tt {
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
    return Ni(s === 'u' ? 4 : s.length, e);
  }
  set(e, s, i) {
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class f0 extends tt {
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
class g0 extends tt {
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
class p0 extends tt {
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
class m0 extends tt {
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
function b0(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in),
    i = id(s, e) - t;
  return s.setDate(s.getDate() - i * 7), $(s, e == null ? void 0 : e.in);
}
class _0 extends tt {
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
    return Pe(b0(e, i, r), r);
  }
}
function v0(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in),
    i = sd(s, e) - t;
  return s.setDate(s.getDate() - i * 7), s;
}
class y0 extends tt {
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
    return zn(v0(e, i));
  }
}
const x0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  w0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class k0 extends tt {
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
      r = dd(i),
      a = e.getMonth();
    return r ? s >= 1 && s <= w0[a] : s >= 1 && s <= x0[a];
  }
  set(e, s, i) {
    return e.setDate(i), e.setHours(0, 0, 0, 0), e;
  }
}
class M0 extends tt {
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
    return dd(i) ? s >= 1 && s <= 366 : s >= 1 && s <= 365;
  }
  set(e, s, i) {
    return e.setMonth(0, i), e.setHours(0, 0, 0, 0), e;
  }
}
function ja(n, t, e) {
  var d, h, g, f;
  const s = Sn(),
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
    r = $(n, e == null ? void 0 : e.in),
    a = r.getDay(),
    l = ((t % 7) + 7) % 7,
    c = 7 - i,
    u = t < 0 || t > 6 ? t - ((a + c) % 7) : ((l + c) % 7) - ((a + c) % 7);
  return ar(r, u, e);
}
class S0 extends tt {
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
    return (e = ja(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class P0 extends tt {
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
    return (e = ja(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
class D0 extends tt {
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
    return (e = ja(e, i, r)), e.setHours(0, 0, 0, 0), e;
  }
}
function T0(n, t, e) {
  const s = $(n, e == null ? void 0 : e.in),
    i = n0(s, e),
    r = t - i;
  return ar(s, r, e);
}
class O0 extends tt {
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
    return (e = T0(e, i)), e.setHours(0, 0, 0, 0), e;
  }
}
class E0 extends tt {
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
    return e.setHours(Ha(i), 0, 0, 0), e;
  }
}
class C0 extends tt {
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
    return e.setHours(Ha(i), 0, 0, 0), e;
  }
}
class A0 extends tt {
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
    return e.setHours(Ha(i), 0, 0, 0), e;
  }
}
class R0 extends tt {
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
class L0 extends tt {
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
class F0 extends tt {
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
class I0 extends tt {
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
class N0 extends tt {
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
class B0 extends tt {
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
class z0 extends tt {
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
class W0 extends tt {
  constructor() {
    super(...arguments);
    M(this, 'priority', 10);
    M(this, 'incompatibleTokens', ['t', 'T', 'x']);
  }
  parse(e, s) {
    switch (s) {
      case 'X':
        return ye(ve.basicOptionalMinutes, e);
      case 'XX':
        return ye(ve.basic, e);
      case 'XXXX':
        return ye(ve.basicOptionalSeconds, e);
      case 'XXXXX':
        return ye(ve.extendedOptionalSeconds, e);
      case 'XXX':
      default:
        return ye(ve.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : yt(e, e.getTime() - Ii(e) - i);
  }
}
class H0 extends tt {
  constructor() {
    super(...arguments);
    M(this, 'priority', 10);
    M(this, 'incompatibleTokens', ['t', 'T', 'X']);
  }
  parse(e, s) {
    switch (s) {
      case 'x':
        return ye(ve.basicOptionalMinutes, e);
      case 'xx':
        return ye(ve.basic, e);
      case 'xxxx':
        return ye(ve.basicOptionalSeconds, e);
      case 'xxxxx':
        return ye(ve.extendedOptionalSeconds, e);
      case 'xxx':
      default:
        return ye(ve.extended, e);
    }
  }
  set(e, s, i) {
    return s.timestampIsSet ? e : yt(e, e.getTime() - Ii(e) - i);
  }
}
class j0 extends tt {
  constructor() {
    super(...arguments);
    M(this, 'priority', 40);
    M(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return cd(e);
  }
  set(e, s, i) {
    return [yt(e, i * 1e3), { timestampIsSet: !0 }];
  }
}
class V0 extends tt {
  constructor() {
    super(...arguments);
    M(this, 'priority', 20);
    M(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return cd(e);
  }
  set(e, s, i) {
    return [yt(e, i), { timestampIsSet: !0 }];
  }
}
const q0 = {
    G: new l0(),
    y: new c0(),
    Y: new u0(),
    R: new d0(),
    u: new h0(),
    Q: new f0(),
    q: new g0(),
    M: new p0(),
    L: new m0(),
    w: new _0(),
    I: new y0(),
    d: new k0(),
    D: new M0(),
    E: new S0(),
    e: new P0(),
    c: new D0(),
    i: new O0(),
    a: new E0(),
    b: new C0(),
    B: new A0(),
    h: new R0(),
    H: new L0(),
    K: new F0(),
    k: new I0(),
    m: new N0(),
    s: new B0(),
    S: new z0(),
    X: new W0(),
    x: new H0(),
    t: new j0(),
    T: new V0(),
  },
  Y0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  $0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  U0 = /^'([^]*?)'?$/,
  X0 = /''/g,
  Q0 = /\S/,
  G0 = /[a-zA-Z]/;
function K0(n, t, e, s) {
  var m, b, _, x, w, v, P, O;
  const i = () => yt((s == null ? void 0 : s.in) || e, NaN),
    r = e0(),
    a = (s == null ? void 0 : s.locale) ?? r.locale ?? nd,
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
      ((v = (w = s == null ? void 0 : s.locale) == null ? void 0 : w.options) ==
      null
        ? void 0
        : v.weekStartsOn) ??
      r.weekStartsOn ??
      ((O = (P = r.locale) == null ? void 0 : P.options) == null
        ? void 0
        : O.weekStartsOn) ??
      0;
  if (!t) return n ? i() : $(e, s == null ? void 0 : s.in);
  const c = { firstWeekContainsDate: o, weekStartsOn: l, locale: a },
    u = [new o0(s == null ? void 0 : s.in, e)],
    d = t
      .match($0)
      .map((k) => {
        const C = k[0];
        if (C in ra) {
          const L = ra[C];
          return L(k, a.formatLong);
        }
        return k;
      })
      .join('')
      .match(Y0),
    h = [];
  for (let k of d) {
    !(s != null && s.useAdditionalWeekYearTokens) && od(k) && aa(k, t, n),
      !(s != null && s.useAdditionalDayOfYearTokens) && ad(k) && aa(k, t, n);
    const C = k[0],
      L = q0[C];
    if (L) {
      const { incompatibleTokens: A } = L;
      if (Array.isArray(A)) {
        const F = h.find((V) => A.includes(V.token) || V.token === C);
        if (F)
          throw new RangeError(
            `The format string mustn't contain \`${F.fullToken}\` and \`${k}\` at the same time`,
          );
      } else if (L.incompatibleTokens === '*' && h.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${k}\` and any other token at the same time`,
        );
      h.push({ token: C, fullToken: k });
      const T = L.run(n, k, a.match, c);
      if (!T) return i();
      u.push(T.setter), (n = T.rest);
    } else {
      if (C.match(G0))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            C +
            '`',
        );
      if (
        (k === "''" ? (k = "'") : C === "'" && (k = J0(k)), n.indexOf(k) === 0)
      )
        n = n.slice(k.length);
      else return i();
    }
  }
  if (n.length > 0 && Q0.test(n)) return i();
  const g = u
    .map((k) => k.priority)
    .sort((k, C) => C - k)
    .filter((k, C, L) => L.indexOf(k) === C)
    .map((k) =>
      u
        .filter((C) => C.priority === k)
        .sort((C, L) => L.subPriority - C.subPriority),
    )
    .map((k) => k[0]);
  let f = $(e, s == null ? void 0 : s.in);
  if (isNaN(+f)) return i();
  const p = {};
  for (const k of g) {
    if (!k.validate(f, c)) return i();
    const C = k.set(f, p, c);
    Array.isArray(C) ? ((f = C[0]), Object.assign(p, C[1])) : (f = C);
  }
  return f;
}
function J0(n) {
  return n.match(U0)[1].replace(X0, "'");
}
function Z0(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setMinutes(0, 0, 0), e;
}
function tx(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setSeconds(0, 0), e;
}
function ex(n, t) {
  const e = $(n, t == null ? void 0 : t.in);
  return e.setMilliseconds(0), e;
}
function nx(n, t) {
  const e = () => yt(t == null ? void 0 : t.in, NaN),
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
      u = $(0, t == null ? void 0 : t.in);
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
  return $(a + o + l, t == null ? void 0 : t.in);
}
const ei = {
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
    e = n.split(ei.dateTimeDelimiter);
  let s;
  if (e.length > 2) return t;
  if (
    (/:/.test(e[0])
      ? (s = e[0])
      : ((t.date = e[0]),
        (s = e[1]),
        ei.timeZoneDelimiter.test(t.date) &&
          ((t.date = n.split(ei.timeZoneDelimiter)[0]),
          (s = n.substr(t.date.length, n.length)))),
    s)
  ) {
    const i = ei.timezone.exec(s);
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
    i = ns(e[1]),
    r = ns(e[2]) - 1,
    a = ns(e[3]),
    o = ns(e[4]),
    l = ns(e[5]) - 1;
  if (s) return px(t, o, l) ? dx(t, o, l) : new Date(NaN);
  {
    const c = new Date(0);
    return !fx(t, r, a) || !gx(t, i)
      ? new Date(NaN)
      : (c.setUTCFullYear(t, r, Math.max(i, a)), c);
  }
}
function ns(n) {
  return n ? parseInt(n) : 1;
}
function cx(n) {
  const t = n.match(ix);
  if (!t) return NaN;
  const e = Dr(t[1]),
    s = Dr(t[2]),
    i = Dr(t[3]);
  return mx(e, s, i) ? e * Is + s * Fs + i * 1e3 : NaN;
}
function Dr(n) {
  return (n && parseFloat(n.replace(',', '.'))) || 0;
}
function ux(n) {
  if (n === 'Z') return 0;
  const t = n.match(rx);
  if (!t) return 0;
  const e = t[1] === '+' ? -1 : 1,
    s = parseInt(t[2]),
    i = (t[3] && parseInt(t[3])) || 0;
  return bx(s, i) ? e * (s * Is + i * Fs) : NaN;
}
function dx(n, t, e) {
  const s = new Date(0);
  s.setUTCFullYear(n, 0, 4);
  const i = s.getUTCDay() || 7,
    r = (t - 1) * 7 + e + 1 - i;
  return s.setUTCDate(s.getUTCDate() + r), s;
}
const hx = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hd(n) {
  return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function fx(n, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (hx[t] || (hd(n) ? 29 : 28));
}
function gx(n, t) {
  return t >= 1 && t <= (hd(n) ? 366 : 365);
}
function px(n, t, e) {
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
tu._date.override({
  _id: 'date-fns',
  formats: function () {
    return _x;
  },
  parse: function (n, t) {
    if (n === null || typeof n > 'u') return null;
    const e = typeof n;
    return (
      e === 'number' || n instanceof Date
        ? (n = $(n))
        : e === 'string' &&
          (typeof t == 'string'
            ? (n = K0(n, t, new Date(), this.options))
            : (n = nx(n, this.options))),
      Gu(n) ? n.getTime() : null
    );
  },
  format: function (n, t) {
    return Zy(n, t, this.options);
  },
  add: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return Ba(n, t);
      case 'second':
        return jv(n, t);
      case 'minute':
        return Wv(n, t);
      case 'hour':
        return Nv(n, t);
      case 'day':
        return ar(n, t);
      case 'week':
        return Vv(n, t);
      case 'month':
        return Na(n, t);
      case 'quarter':
        return Hv(n, t);
      case 'year':
        return qv(n, t);
      default:
        return n;
    }
  },
  diff: function (n, t, e) {
    switch (e) {
      case 'millisecond':
        return za(n, t);
      case 'second':
        return Jv(n, t);
      case 'minute':
        return Qv(n, t);
      case 'hour':
        return Xv(n, t);
      case 'day':
        return Ku(n, t);
      case 'week':
        return Zv(n, t);
      case 'month':
        return td(n, t);
      case 'quarter':
        return Kv(n, t);
      case 'year':
        return ty(n, t);
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
        return Z0(n);
      case 'day':
        return ia(n);
      case 'week':
        return Pe(n);
      case 'isoWeek':
        return Pe(n, { weekStartsOn: +e });
      case 'month':
        return ny(n);
      case 'quarter':
        return ey(n);
      case 'year':
        return ed(n);
      default:
        return n;
    }
  },
  endOf: function (n, t) {
    switch (t) {
      case 'second':
        return ly(n);
      case 'minute':
        return ay(n);
      case 'hour':
        return iy(n);
      case 'day':
        return Ju(n);
      case 'week':
        return ry(n);
      case 'month':
        return Zu(n);
      case 'quarter':
        return oy(n);
      case 'year':
        return sy(n);
      default:
        return n;
    }
  },
});
var vx = z(
    '<div class="loading-state svelte-5r0jra"><p>Loading data...</p></div>',
  ),
  yx = z(
    '<div class="error-state svelte-5r0jra"><p class="svelte-5r0jra"> </p></div>',
  ),
  xx = z('<canvas class="svelte-5r0jra"></canvas>'),
  wx = z(
    '<p class="no-data-message svelte-5r0jra">No purchase data available to display chart.</p>',
  ),
  kx = z(
    '<div class="total-summary-card svelte-5r0jra"><p class="total-label svelte-5r0jra">Grand Total Items Purchased</p> <p class="total-value svelte-5r0jra"> </p></div> <div class="chart-wrapper svelte-5r0jra"><!></div>',
    1,
  ),
  Mx = z(
    '<div class="container svelte-5r0jra"><div class="header svelte-5r0jra"><p class="title-text svelte-5r0jra">Total Items Bought Analysis</p></div> <!></div>',
  );
function fd(n, t) {
  ue(t, !0);
  let e = j(null),
    s = j(null),
    i = j(0),
    r = j(!0),
    a = j(''),
    o = Nt({
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
    R(r, !0), R(a, '');
    try {
      const p = (
        await Z.get('http://localhost:3000/api/data/total/items/bought')
      ).data;
      R(i, p.grandTotal || 0, !0);
      const m = p.timeSeries.map((b) => ({
        x: new Date(b.datepurchase),
        y: b.total_bought_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items bought data:', f),
        R(a, 'Failed to load data. Please try again later.'),
        R(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      R(r, !1);
    }
  }
  function c() {
    if (
      y(e) &&
      (y(s) && (y(s).destroy(), R(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((p) => ({ ...p, data: [...p.data] })),
        },
      };
      R(s, new Vt(y(e), f), !0);
    }
  }
  De(() => {
    l();
  }),
    Me(() => {
      !y(r) && y(e) && c();
    });
  var u = Mx(),
    d = E(S(u), 2);
  {
    var h = (f) => {
        var p = vx();
        B(f, p);
      },
      g = (f, p) => {
        {
          var m = (_) => {
              var x = yx(),
                w = S(x),
                v = S(w);
              st(() => N(v, y(a))), B(_, x);
            },
            b = (_) => {
              var x = kx(),
                w = xe(x),
                v = E(S(w), 2),
                P = S(v),
                O = E(w, 2),
                k = S(O);
              {
                var C = (A) => {
                    var T = xx();
                    Vn(
                      T,
                      (F) => R(e, F),
                      () => y(e),
                    ),
                      B(A, T);
                  },
                  L = (A) => {
                    var T = wx();
                    B(A, T);
                  };
                J(k, (A) => {
                  o.data.datasets[0].data.length > 0 ? A(C) : A(L, !1);
                });
              }
              st((A) => N(P, A), [() => y(i).toLocaleString()]), B(_, x);
            };
          J(
            f,
            (_) => {
              y(a) ? _(m) : _(b, !1);
            },
            p,
          );
        }
      };
    J(d, (f) => {
      y(r) ? f(h) : f(g, !1);
    });
  }
  B(n, u), de();
}
var Sx = z(
    '<div class="loading-state svelte-5r0jra"><p>Loading data...</p></div>',
  ),
  Px = z(
    '<div class="error-state svelte-5r0jra"><p class="svelte-5r0jra"> </p></div>',
  ),
  Dx = z('<canvas class="svelte-5r0jra"></canvas>'),
  Tx = z(
    '<p class="no-data-message svelte-5r0jra">No dispatch data available to display chart.</p>',
  ),
  Ox = z(
    '<div class="total-summary-card svelte-5r0jra"><p class="total-label svelte-5r0jra">Grand Total Items Dispatched</p> <p class="total-value svelte-5r0jra"> </p></div> <div class="chart-wrapper svelte-5r0jra"><!></div>',
    1,
  ),
  Ex = z(
    '<div class="container svelte-5r0jra"><div class="header svelte-5r0jra"><p class="title-text svelte-5r0jra">Total Items Sold Analysis</p></div> <!></div>',
  );
function gd(n, t) {
  ue(t, !0);
  let e = j(null),
    s = j(null),
    i = j(0),
    r = j(!0),
    a = j(''),
    o = Nt({
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
    R(r, !0), R(a, '');
    try {
      const p = (await Z.get('http://localhost:3000/api/data/total/items/sold'))
        .data;
      R(i, p.grandTotal || 0, !0);
      const m = p.timeSeries.map((b) => ({
        x: new Date(b.dateout),
        y: b.total_sold_on_date,
      }));
      o.data.datasets[0].data = m;
    } catch (f) {
      console.error('Error fetching total items sold data:', f),
        R(a, 'Failed to load data. Please try again later.'),
        R(i, 0),
        (o.data.datasets[0].data = []);
    } finally {
      R(r, !1);
    }
  }
  function c() {
    if (
      y(e) &&
      (y(s) && (y(s).destroy(), R(s, null)), o.data.datasets[0].data.length > 0)
    ) {
      const f = {
        ...o,
        data: {
          ...o.data,
          datasets: o.data.datasets.map((p) => ({ ...p, data: [...p.data] })),
        },
      };
      R(s, new Vt(y(e), f), !0);
    }
  }
  De(() => {
    l();
  }),
    Me(() => {
      !y(r) && y(e) && c();
    });
  var u = Ex(),
    d = E(S(u), 2);
  {
    var h = (f) => {
        var p = Sx();
        B(f, p);
      },
      g = (f, p) => {
        {
          var m = (_) => {
              var x = Px(),
                w = S(x),
                v = S(w);
              st(() => N(v, y(a))), B(_, x);
            },
            b = (_) => {
              var x = Ox(),
                w = xe(x),
                v = E(S(w), 2),
                P = S(v),
                O = E(w, 2),
                k = S(O);
              {
                var C = (A) => {
                    var T = Dx();
                    Vn(
                      T,
                      (F) => R(e, F),
                      () => y(e),
                    ),
                      B(A, T);
                  },
                  L = (A) => {
                    var T = Tx();
                    B(A, T);
                  };
                J(k, (A) => {
                  o.data.datasets[0].data.length > 0 ? A(C) : A(L, !1);
                });
              }
              st((A) => N(P, A), [() => y(i).toLocaleString()]), B(_, x);
            };
          J(
            f,
            (_) => {
              y(a) ? _(m) : _(b, !1);
            },
            p,
          );
        }
      };
    J(d, (f) => {
      y(r) ? f(h) : f(g, !1);
    });
  }
  B(n, u), de();
}
function Cx(n, t) {
  n.key === 'Escape' && t();
}
var Ax = z(
    '<div class="loading-state svelte-wd31kq"><p>Loading batch list...</p></div>',
  ),
  Rx = z(
    '<div class="error-state svelte-wd31kq"><p class="svelte-wd31kq"> </p></div>',
  ),
  Lx = z('<p class="no-data-message svelte-wd31kq">No batches found.</p>'),
  Fx = (n, t, e) => t(y(e).batchcode),
  Ix = (n, t, e) => t(n, y(e).batchcode),
  Nx = (n, t, e) => {
    n.stopPropagation(), t(y(e).batchcode);
  },
  Bx = z(
    '<tr role="button" tabindex="0" class="batch-row svelte-wd31kq"><td class="svelte-wd31kq"> </td><td class="svelte-wd31kq"> </td><td class="svelte-wd31kq"> </td><td class="svelte-wd31kq"> </td><td class="svelte-wd31kq"> </td><td class="svelte-wd31kq"><button type="button" class="details-button svelte-wd31kq">View Details</button></td></tr>',
  ),
  zx = z(
    '<div class="batch-list-container svelte-wd31kq"><table class="batch-table svelte-wd31kq"><thead><tr><th class="svelte-wd31kq">Batch Code</th><th class="svelte-wd31kq">Item Name</th><th class="svelte-wd31kq">Received Qty</th><th class="svelte-wd31kq">Current Stock</th><th class="svelte-wd31kq">Expiry Date</th><th class="svelte-wd31kq">Actions</th></tr></thead><tbody></tbody></table></div>',
  ),
  Wx = (n) => n.stopPropagation(),
  Hx = z(
    '<div class="loading-state svelte-wd31kq"><p>Loading batch details...</p></div>',
  ),
  jx = z(
    '<div class="error-state svelte-wd31kq"><p class="svelte-wd31kq"> </p></div>',
  ),
  Vx = z(
    '<div class="detail-item full-width svelte-wd31kq"><span class="detail-label svelte-wd31kq">Item Used For:</span> </div>',
  ),
  qx = z(
    '<div class="detail-item full-width svelte-wd31kq"><span class="detail-label svelte-wd31kq">Description 1:</span> </div>',
  ),
  Yx = z(
    '<div class="detail-item full-width svelte-wd31kq"><span class="detail-label svelte-wd31kq">Description 2:</span> </div>',
  ),
  $x = z(
    '<div class="detail-item full-width svelte-wd31kq"><span class="detail-label svelte-wd31kq">Description 3:</span> </div>',
  ),
  Ux = z(
    '<h4 class="sub-header svelte-wd31kq">Inventory Descriptions</h4> <!> <!> <!> <!>',
    1,
  ),
  Xx = z(
    '<h3 class="modal-title svelte-wd31kq" id="modal-title-id"> </h3> <div class="details-grid svelte-wd31kq"><div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Item Name:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Item Code:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Supplier:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Supplier Contact:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Date Purchased:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Expiry Date:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Requested Qty:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Received Qty:</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Current Stock (Inventory):</span> </div> <div class="detail-item svelte-wd31kq"><span class="detail-label svelte-wd31kq">Total Sold from Batch:</span> </div> <!></div>',
    1,
  ),
  Qx = z(
    '<div class="modal-backdrop svelte-wd31kq" role="dialog" aria-modal="true" aria-labelledby="modal-title-id" tabindex="-1"><div class="modal-content svelte-wd31kq" role="document"><button type="button" class="modal-close-button svelte-wd31kq" aria-label="Close modal">×</button> <!></div></div>',
  ),
  Gx = z(
    '<div class="container svelte-wd31kq"><div class="header svelte-wd31kq"><p class="title-text svelte-wd31kq">Batch Overview</p></div> <!></div> <!>',
    1,
  );
function pd(n, t) {
  ue(t, !0);
  let e = j(Nt([])),
    s = j(null),
    i = j(!0),
    r = j(!1),
    a = j(''),
    o = j('');
  async function l() {
    R(i, !0), R(a, '');
    try {
      const v = await Z.get('http://localhost:3000/api/data/batches/summary');
      R(e, v.data, !0);
    } catch (v) {
      console.error('Error fetching batch summary:', v),
        R(a, 'Failed to load batch list.'),
        R(e, [], !0);
    } finally {
      R(i, !1);
    }
  }
  async function c(v) {
    if (v) {
      R(s, null), R(r, !0), R(o, '');
      try {
        const P = await Z.get(
          `http://localhost:3000/api/data/batch/details/${v}`,
        );
        R(s, P.data, !0);
      } catch (P) {
        console.error(`Error fetching details for batch ${v}:`, P),
          R(o, `Failed to load details for batch ${v}.`);
      } finally {
        R(r, !1);
      }
    }
  }
  function u(v) {
    c(v);
  }
  function d() {
    R(s, null), R(o, '');
  }
  function h(v) {
    if (!v) return 'N/A';
    try {
      return new Date(v).toLocaleDateString(void 0, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return v;
    }
  }
  function g(v, P) {
    (v.key === 'Enter' || v.key === ' ') && u(P);
  }
  De(() => {
    l();
  });
  var f = Gx(),
    p = xe(f),
    m = E(S(p), 2);
  {
    var b = (v) => {
        var P = Ax();
        B(v, P);
      },
      _ = (v, P) => {
        {
          var O = (C) => {
              var L = Rx(),
                A = S(L),
                T = S(A);
              st(() => N(T, y(a))), B(C, L);
            },
            k = (C, L) => {
              {
                var A = (F) => {
                    var V = Lx();
                    B(F, V);
                  },
                  T = (F) => {
                    var V = zx(),
                      W = S(V),
                      I = E(S(W));
                    tn(
                      I,
                      21,
                      () => y(e),
                      (H) => H.batchcode,
                      (H, Y) => {
                        var q = Bx();
                        (q.__click = [Fx, u, Y]), (q.__keydown = [Ix, g, Y]);
                        var Q = S(q),
                          it = S(Q),
                          wt = E(Q),
                          Tt = S(wt),
                          pt = E(wt),
                          ct = S(pt),
                          ot = E(pt),
                          mt = S(ot),
                          ht = E(ot),
                          Lt = S(ht),
                          zt = E(ht),
                          Xt = S(zt);
                        (Xt.__click = [Nx, u, Y]),
                          st(
                            (Wt) => {
                              N(it, y(Y).batchcode),
                                N(Tt, y(Y).itemname || 'N/A'),
                                N(ct, y(Y).receivedqty),
                                N(
                                  mt,
                                  y(Y).current_stock === null ||
                                    y(Y).current_stock === void 0
                                    ? 'N/A (Not in Inv.)'
                                    : y(Y).current_stock,
                                ),
                                N(Lt, Wt);
                            },
                            [() => h(y(Y).expiry)],
                          ),
                          B(H, q);
                      },
                    ),
                      B(F, V);
                  };
                J(
                  C,
                  (F) => {
                    y(e).length === 0 ? F(A) : F(T, !1);
                  },
                  L,
                );
              }
            };
          J(
            v,
            (C) => {
              y(a) ? C(O) : C(k, !1);
            },
            P,
          );
        }
      };
    J(m, (v) => {
      y(i) ? v(b) : v(_, !1);
    });
  }
  var x = E(p, 2);
  {
    var w = (v) => {
      var P = Qx();
      (P.__click = d), (P.__keydown = [Cx, d]);
      var O = S(P);
      O.__click = [Wx];
      var k = S(O);
      k.__click = d;
      var C = E(k, 2);
      {
        var L = (T) => {
            var F = Hx();
            B(T, F);
          },
          A = (T, F) => {
            {
              var V = (I) => {
                  var H = jx(),
                    Y = S(H),
                    q = S(Y);
                  st(() => N(q, y(o))), B(I, H);
                },
                W = (I, H) => {
                  {
                    var Y = (q) => {
                      var Q = Xx(),
                        it = xe(Q),
                        wt = S(it),
                        Tt = E(it, 2),
                        pt = S(Tt),
                        ct = E(S(pt)),
                        ot = E(pt, 2),
                        mt = E(S(ot)),
                        ht = E(ot, 2),
                        Lt = E(S(ht)),
                        zt = E(ht, 2),
                        Xt = E(S(zt)),
                        Wt = E(zt, 2),
                        se = E(S(Wt)),
                        Zt = E(Wt, 2),
                        fe = E(S(Zt)),
                        te = E(Zt, 2),
                        ge = E(S(te)),
                        ie = E(te, 2),
                        Te = E(S(ie)),
                        He = E(ie, 2),
                        je = E(S(He)),
                        Ve = E(He, 2),
                        $n = E(S(Ve)),
                        Un = E(Ve, 2);
                      {
                        var or = (rn) => {
                          var Dn = Ux(),
                            Bs = E(xe(Dn), 2);
                          {
                            var lr = (Ft) => {
                              var re = Vx(),
                                an = E(S(re));
                              st(() => N(an, ` ${y(s).itemused ?? ''}`)),
                                B(Ft, re);
                            };
                            J(Bs, (Ft) => {
                              y(s).itemused && Ft(lr);
                            });
                          }
                          var Va = E(Bs, 2);
                          {
                            var yd = (Ft) => {
                              var re = qx(),
                                an = E(S(re));
                              st(() => N(an, ` ${y(s).itemdesc1 ?? ''}`)),
                                B(Ft, re);
                            };
                            J(Va, (Ft) => {
                              y(s).itemdesc1 && Ft(yd);
                            });
                          }
                          var qa = E(Va, 2);
                          {
                            var xd = (Ft) => {
                              var re = Yx(),
                                an = E(S(re));
                              st(() => N(an, ` ${y(s).itemdesc2 ?? ''}`)),
                                B(Ft, re);
                            };
                            J(qa, (Ft) => {
                              y(s).itemdesc2 && Ft(xd);
                            });
                          }
                          var wd = E(qa, 2);
                          {
                            var kd = (Ft) => {
                              var re = $x(),
                                an = E(S(re));
                              st(() => N(an, ` ${y(s).itemdesc3 ?? ''}`)),
                                B(Ft, re);
                            };
                            J(wd, (Ft) => {
                              y(s).itemdesc3 && Ft(kd);
                            });
                          }
                          B(rn, Dn);
                        };
                        J(Un, (rn) => {
                          (y(s).itemused ||
                            y(s).itemdesc1 ||
                            y(s).itemdesc2 ||
                            y(s).itemdesc3) &&
                            rn(or);
                        });
                      }
                      st(
                        (rn, Dn) => {
                          N(wt, `Batch Details: ${y(s).batchcode ?? ''}`),
                            N(ct, ` ${y(s).itemname ?? ''}`),
                            N(mt, ` ${y(s).itemcode ?? ''}`),
                            N(
                              Lt,
                              ` ${y(s).suppname ?? ''} (${y(s).suppcode ?? ''})`,
                            ),
                            N(Xt, ` ${y(s).suppcontact ?? ''}`),
                            N(se, ` ${rn ?? ''}`),
                            N(fe, ` ${Dn ?? ''}`),
                            N(ge, ` ${y(s).requestedqty ?? ''}`),
                            N(Te, ` ${y(s).receivedqty ?? ''}`),
                            N(
                              je,
                              ` ${(y(s).current_stock_in_inventory === null || y(s).current_stock_in_inventory === void 0 ? 'N/A' : y(s).current_stock_in_inventory) ?? ''}`,
                            ),
                            N(
                              $n,
                              ` ${(y(s).total_sold_from_batch || 0) ?? ''}`,
                            );
                        },
                        [() => h(y(s).datepurchase), () => h(y(s).expiry)],
                      ),
                        B(q, Q);
                    };
                    J(
                      I,
                      (q) => {
                        y(s) && q(Y);
                      },
                      H,
                    );
                  }
                };
              J(
                T,
                (I) => {
                  y(o) ? I(V) : I(W, !1);
                },
                F,
              );
            }
          };
        J(C, (T) => {
          y(r) ? T(L) : T(A, !1);
        });
      }
      B(v, P);
    };
    J(x, (v) => {
      (y(s) || y(r)) && v(w);
    });
  }
  B(n, f), de();
}
_c(['click', 'keydown']);
var Kx = z(
    '<div class="loading-state svelte-8ui4t6"><p>Loading low stock items...</p></div>',
  ),
  Jx = z(
    '<div class="error-state svelte-8ui4t6"><p class="svelte-8ui4t6"> </p></div>',
  ),
  Zx = z(
    '<p class="no-data-message svelte-8ui4t6">All items are currently above their defined minimum stock levels.</p>',
  ),
  tw = z(
    '<tr class="item-row"><td class="svelte-8ui4t6"> </td><td class="svelte-8ui4t6"> </td><td class="stock-warning svelte-8ui4t6"> </td><td class="svelte-8ui4t6"> </td></tr>',
  ),
  ew = z(
    '<div class="list-container svelte-8ui4t6"><table class="items-table svelte-8ui4t6"><thead><tr><th class="svelte-8ui4t6">Item Code</th><th class="svelte-8ui4t6">Item Name</th><th class="svelte-8ui4t6">Current Stock</th><th class="svelte-8ui4t6">Min. Stock Level</th></tr></thead><tbody></tbody></table></div>',
  ),
  nw = z(
    '<div class="container svelte-8ui4t6"><div class="header svelte-8ui4t6"><p class="title-text svelte-8ui4t6">Low Stock Items (Below Reorder Point)</p></div> <!></div>',
  );
function md(n, t) {
  ue(t, !0);
  let e = j(Nt([])),
    s = j(!0),
    i = j('');
  async function r() {
    R(s, !0), R(i, '');
    try {
      const u = await Z.get('http://localhost:3000/api/data/lowstock/items');
      R(e, u.data, !0);
    } catch (u) {
      console.error('Error fetching low stock items:', u),
        R(i, 'Failed to load low stock items.'),
        R(e, [], !0);
    } finally {
      R(s, !1);
    }
  }
  De(() => {
    r();
  });
  var a = nw(),
    o = E(S(a), 2);
  {
    var l = (u) => {
        var d = Kx();
        B(u, d);
      },
      c = (u, d) => {
        {
          var h = (f) => {
              var p = Jx(),
                m = S(p),
                b = S(m);
              st(() => N(b, y(i))), B(f, p);
            },
            g = (f, p) => {
              {
                var m = (_) => {
                    var x = Zx();
                    B(_, x);
                  },
                  b = (_) => {
                    var x = ew(),
                      w = S(x),
                      v = E(S(w));
                    tn(
                      v,
                      21,
                      () => y(e),
                      (P) => P.itemcode,
                      (P, O) => {
                        var k = tw(),
                          C = S(k),
                          L = S(C),
                          A = E(C),
                          T = S(A),
                          F = E(A),
                          V = S(F),
                          W = E(F),
                          I = S(W);
                        st(() => {
                          N(L, y(O).itemcode),
                            N(T, y(O).itemname),
                            N(V, y(O).total_current_stock),
                            N(I, y(O).min_stock_level);
                        }),
                          B(P, k);
                      },
                    ),
                      B(_, x);
                  };
                J(
                  f,
                  (_) => {
                    y(e).length === 0 ? _(m) : _(b, !1);
                  },
                  p,
                );
              }
            };
          J(
            u,
            (f) => {
              y(i) ? f(h) : f(g, !1);
            },
            d,
          );
        }
      };
    J(o, (u) => {
      y(s) ? u(l) : u(c, !1);
    });
  }
  B(n, a), de();
}
var sw = z(
    '<div class="loading-state svelte-ic5iee"><p>Loading profit by item...</p></div>',
  ),
  iw = z(
    '<div class="error-state svelte-ic5iee"><p class="svelte-ic5iee"> </p></div>',
  ),
  rw = z(
    '<p class="no-data-message svelte-ic5iee">No profit data by item available.</p>',
  ),
  aw = z(
    '<tr><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="profit-value svelte-ic5iee"> </td></tr>',
  ),
  ow = z(
    '<div class="chart-container-wrapper svelte-ic5iee"><canvas class="svelte-ic5iee"></canvas></div> <div class="list-container small-table svelte-ic5iee"><table class="items-table svelte-ic5iee"><thead><tr><th class="svelte-ic5iee">Item Name</th><th class="svelte-ic5iee">Total Sold Qty</th><th class="svelte-ic5iee">Avg. Purchase Price</th><th class="svelte-ic5iee">Avg. Selling Price</th><th class="svelte-ic5iee">Total Profit</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  lw = z(
    '<div class="loading-state svelte-ic5iee"><p>Loading profit transactions...</p></div>',
  ),
  cw = z(
    '<div class="error-state svelte-ic5iee"><p class="svelte-ic5iee"> </p></div>',
  ),
  uw = z(
    '<p class="no-data-message svelte-ic5iee">No profit transaction data available.</p>',
  ),
  dw = z(
    '<tr class="item-row"><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="svelte-ic5iee"> </td><td class="profit-value svelte-ic5iee"> </td></tr>',
  ),
  hw = z(
    '<div class="list-container svelte-ic5iee"><table class="items-table svelte-ic5iee"><thead><tr><th class="svelte-ic5iee">Sale ID</th><th class="svelte-ic5iee">Date</th><th class="svelte-ic5iee">Item Name</th><th class="svelte-ic5iee">Customer</th><th class="svelte-ic5iee">Qty Sold</th><th class="svelte-ic5iee">Purchase Price/Unit</th><th class="svelte-ic5iee">Selling Price/Unit</th><th class="svelte-ic5iee">Profit/Unit</th><th class="svelte-ic5iee">Total Profit</th></tr></thead><tbody></tbody></table></div>',
  ),
  fw = z(
    '<div class="container svelte-ic5iee"><div class="header svelte-ic5iee"><p class="title-text svelte-ic5iee">Profit Analysis</p></div> <div class="summary-card grand-total-profit-card svelte-ic5iee"><h4 class="svelte-ic5iee">Grand Total Profit</h4> <p class="total-value svelte-ic5iee"> </p></div> <div class="section profit-by-item-section svelte-ic5iee"><h3 class="section-title svelte-ic5iee">Profit by Item</h3> <!></div> <div class="section profit-transactions-section svelte-ic5iee"><h3 class="section-title svelte-ic5iee">Individual Profit Transactions</h3> <!></div></div>',
  );
function bd(n, t) {
  ue(t, !0);
  let e = j(Nt([])),
    s = j(Nt([])),
    i = j(0),
    r = j(!0),
    a = j(!0),
    o = j(''),
    l = j(''),
    c,
    u = j(null);
  async function d() {
    R(r, !0), R(o, '');
    try {
      const T = await Z.get('http://localhost:3000/api/data/profits/summary');
      R(e, T.data.transactions, !0), R(i, T.data.grandTotalProfit, !0);
    } catch (T) {
      console.error('Error fetching profit summary:', T),
        R(o, 'Failed to load profit transactions.'),
        R(e, [], !0),
        R(i, 0);
    } finally {
      R(r, !1);
    }
  }
  async function h() {
    R(a, !0), R(l, '');
    try {
      const T = await Z.get('http://localhost:3000/api/data/profits/byitem');
      R(s, T.data, !0);
    } catch (T) {
      console.error('Error fetching profit by item:', T),
        R(l, 'Failed to load profit by item.'),
        R(s, [], !0);
    } finally {
      R(a, !1);
    }
  }
  function g(T) {
    if (!T) return 'N/A';
    try {
      return new Date(T).toLocaleDateString(void 0, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return T;
    }
  }
  function f(T) {
    return T == null
      ? 'N/A'
      : T.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  function p() {
    if (c && y(s).length > 0) {
      y(u) && (y(u).destroy(), R(u, null));
      const T = y(s).map((W) => W.itemname),
        F = y(s).map((W) => W.total_profit_for_item),
        V = {
          labels: T,
          datasets: [
            {
              label: 'Total Profit by Item',
              data: F,
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
      R(
        u,
        new Vt(c, {
          type: 'bar',
          data: V,
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
    } else y(u) && (y(u).destroy(), R(u, null));
  }
  De(() => {
    d(), h();
  }),
    Me(() => {
      !y(a) && c && p();
    });
  var m = fw(),
    b = E(S(m), 2),
    _ = E(S(b), 2),
    x = S(_),
    w = E(b, 2),
    v = E(S(w), 2);
  {
    var P = (T) => {
        var F = sw();
        B(T, F);
      },
      O = (T, F) => {
        {
          var V = (I) => {
              var H = iw(),
                Y = S(H),
                q = S(Y);
              st(() => N(q, y(l))), B(I, H);
            },
            W = (I, H) => {
              {
                var Y = (Q) => {
                    var it = rw();
                    B(Q, it);
                  },
                  q = (Q) => {
                    var it = ow(),
                      wt = xe(it),
                      Tt = S(wt);
                    Vn(
                      Tt,
                      (mt) => (c = mt),
                      () => c,
                    );
                    var pt = E(wt, 2),
                      ct = S(pt),
                      ot = E(S(ct));
                    tn(
                      ot,
                      21,
                      () => y(s),
                      (mt) => mt.itemcode,
                      (mt, ht) => {
                        var Lt = aw(),
                          zt = S(Lt),
                          Xt = S(zt),
                          Wt = E(zt),
                          se = S(Wt),
                          Zt = E(Wt),
                          fe = S(Zt),
                          te = E(Zt),
                          ge = S(te),
                          ie = E(te),
                          Te = S(ie);
                        st(
                          (He, je, Ve) => {
                            N(Xt, y(ht).itemname),
                              N(se, y(ht).total_quantity_sold),
                              N(fe, He),
                              N(ge, je),
                              N(Te, Ve);
                          },
                          [
                            () => f(y(ht).avg_purchase_price),
                            () => f(y(ht).avg_selling_price),
                            () => f(y(ht).total_profit_for_item),
                          ],
                        ),
                          B(mt, Lt);
                      },
                    ),
                      B(Q, it);
                  };
                J(
                  I,
                  (Q) => {
                    y(s).length === 0 ? Q(Y) : Q(q, !1);
                  },
                  H,
                );
              }
            };
          J(
            T,
            (I) => {
              y(l) ? I(V) : I(W, !1);
            },
            F,
          );
        }
      };
    J(v, (T) => {
      y(a) ? T(P) : T(O, !1);
    });
  }
  var k = E(w, 2),
    C = E(S(k), 2);
  {
    var L = (T) => {
        var F = lw();
        B(T, F);
      },
      A = (T, F) => {
        {
          var V = (I) => {
              var H = cw(),
                Y = S(H),
                q = S(Y);
              st(() => N(q, y(o))), B(I, H);
            },
            W = (I, H) => {
              {
                var Y = (Q) => {
                    var it = uw();
                    B(Q, it);
                  },
                  q = (Q) => {
                    var it = hw(),
                      wt = S(it),
                      Tt = E(S(wt));
                    tn(
                      Tt,
                      21,
                      () => y(e),
                      (pt) => pt.sale_id,
                      (pt, ct) => {
                        var ot = dw(),
                          mt = S(ot),
                          ht = S(mt),
                          Lt = E(mt),
                          zt = S(Lt),
                          Xt = E(Lt),
                          Wt = S(Xt),
                          se = E(Xt),
                          Zt = S(se),
                          fe = E(se),
                          te = S(fe),
                          ge = E(fe),
                          ie = S(ge),
                          Te = E(ge),
                          He = S(Te),
                          je = E(Te),
                          Ve = S(je),
                          $n = E(je),
                          Un = S($n);
                        st(
                          (or, rn, Dn, Bs, lr) => {
                            N(ht, y(ct).sale_id),
                              N(zt, or),
                              N(Wt, y(ct).itemname),
                              N(Zt, y(ct).custname),
                              N(te, y(ct).quantity_sold),
                              N(ie, rn),
                              N(He, Dn),
                              N(Ve, Bs),
                              N(Un, lr);
                          },
                          [
                            () => g(y(ct).sale_date),
                            () => f(y(ct).purchase_price_per_unit),
                            () => f(y(ct).selling_price_per_unit),
                            () => f(y(ct).profit_per_unit),
                            () => f(y(ct).total_profit_for_transaction),
                          ],
                        ),
                          B(pt, ot);
                      },
                    ),
                      B(Q, it);
                  };
                J(
                  I,
                  (Q) => {
                    y(e).length === 0 ? Q(Y) : Q(q, !1);
                  },
                  H,
                );
              }
            };
          J(
            T,
            (I) => {
              y(o) ? I(V) : I(W, !1);
            },
            F,
          );
        }
      };
    J(C, (T) => {
      y(r) ? T(L) : T(A, !1);
    });
  }
  st((T) => N(x, T), [() => f(y(i))]), B(n, m), de();
}
var gw = z(
    '<div class="loading-state svelte-1vhtlpy"><p>Loading top customers...</p></div>',
  ),
  pw = z(
    '<div class="error-state svelte-1vhtlpy"><p class="svelte-1vhtlpy"> </p></div>',
  ),
  mw = z(
    '<p class="no-data-message svelte-1vhtlpy">No customer data available.</p>',
  ),
  bw = z(
    '<tr><td class="svelte-1vhtlpy"> </td><td class="svelte-1vhtlpy"> </td><td class="svelte-1vhtlpy"> </td><td class="svelte-1vhtlpy"> </td><td> </td></tr>',
  ),
  _w = z(
    '<div class="chart-container-wrapper svelte-1vhtlpy"><canvas class="svelte-1vhtlpy"></canvas></div> <div class="list-container svelte-1vhtlpy"><table class="items-table svelte-1vhtlpy"><thead><tr><th class="svelte-1vhtlpy">Customer Name</th><th class="svelte-1vhtlpy">Total Orders</th><th class="svelte-1vhtlpy">Total Quantity Purchased</th><th class="svelte-1vhtlpy">Total Revenue</th><th class="svelte-1vhtlpy">Total Profit</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  vw = z(
    '<div class="container svelte-1vhtlpy"><div class="header svelte-1vhtlpy"><p class="title-text svelte-1vhtlpy">Top Customers</p> <div class="controls svelte-1vhtlpy"><label for="customer-metric-select" class="svelte-1vhtlpy">Display by:</label> <select id="customer-metric-select" class="svelte-1vhtlpy"><option>Total Profit</option><option>Total Revenue</option><option>Total Quantity Purchased</option><option>Total Orders</option></select> <label for="customer-limit-select" class="svelte-1vhtlpy">Show Top:</label> <select id="customer-limit-select" class="svelte-1vhtlpy"><option>3</option><option>5</option><option>10</option></select></div></div> <!></div>',
  );
function _d(n, t) {
  ue(t, !0);
  let e = j(Nt([])),
    s = j(!0),
    i = j(''),
    r,
    a = j(null),
    o = j('total_profit_from_customer'),
    l = j(5);
  async function c() {
    R(s, !0), R(i, '');
    try {
      const T = await Z.get(
        `http://localhost:3000/api/data/top/customers?limit=${y(l)}`,
      );
      R(e, T.data, !0);
    } catch (T) {
      console.error('Error fetching top customers:', T),
        R(i, 'Failed to load top customers.'),
        R(e, [], !0);
    } finally {
      R(s, !1);
    }
  }
  function u() {
    return y(o) === 'total_profit_from_customer'
      ? 'Total Profit'
      : y(o) === 'total_revenue_from_customer'
        ? 'Total Revenue'
        : y(o) === 'total_quantity_purchased'
          ? 'Total Quantity Purchased'
          : y(o) === 'total_orders'
            ? 'Total Orders'
            : 'Value';
  }
  function d() {
    if (r && y(e).length > 0) {
      y(a) && (y(a).destroy(), R(a, null));
      const T = y(e).map((V) => V.custname),
        F = y(e).map((V) => V[y(o)]);
      R(
        a,
        new Vt(r, {
          type: 'bar',
          data: {
            labels: T,
            datasets: [
              {
                label: u(),
                data: F,
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
              x: { beginAtZero: !0, title: { display: !0, text: u() } },
              y: { title: { display: !0, text: 'Customer' } },
            },
            plugins: {
              legend: { display: !1 },
              title: { display: !0, text: `Top ${y(l)} Customers by ${u()}` },
            },
          },
        }),
        !0,
      );
    } else y(a) && (y(a).destroy(), R(a, null));
  }
  function h(T) {
    return T == null
      ? 'N/A'
      : T.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  De(() => {
    c();
  }),
    Me(() => {
      c();
    }),
    Me(() => {
      !y(s) && r && d();
    });
  var g = vw(),
    f = S(g),
    p = E(S(f), 2),
    m = E(S(p), 2),
    b = S(m);
  b.value = b.__value = 'total_profit_from_customer';
  var _ = E(b);
  _.value = _.__value = 'total_revenue_from_customer';
  var x = E(_);
  x.value = x.__value = 'total_quantity_purchased';
  var w = E(x);
  w.value = w.__value = 'total_orders';
  var v = E(m, 4),
    P = S(v);
  P.value = P.__value = 3;
  var O = E(P);
  O.value = O.__value = 5;
  var k = E(O);
  k.value = k.__value = 10;
  var C = E(f, 2);
  {
    var L = (T) => {
        var F = gw();
        B(T, F);
      },
      A = (T, F) => {
        {
          var V = (I) => {
              var H = pw(),
                Y = S(H),
                q = S(Y);
              st(() => N(q, y(i))), B(I, H);
            },
            W = (I, H) => {
              {
                var Y = (Q) => {
                    var it = mw();
                    B(Q, it);
                  },
                  q = (Q) => {
                    var it = _w(),
                      wt = xe(it),
                      Tt = S(wt);
                    Vn(
                      Tt,
                      (mt) => (r = mt),
                      () => r,
                    );
                    var pt = E(wt, 2),
                      ct = S(pt),
                      ot = E(S(ct));
                    tn(
                      ot,
                      21,
                      () => y(e),
                      (mt) => mt.custcode,
                      (mt, ht) => {
                        var Lt = bw(),
                          zt = S(Lt),
                          Xt = S(zt),
                          Wt = E(zt),
                          se = S(Wt),
                          Zt = E(Wt),
                          fe = S(Zt),
                          te = E(Zt),
                          ge = S(te),
                          ie = E(te);
                        let Te;
                        var He = S(ie);
                        st(
                          (je, Ve, $n, Un) => {
                            N(Xt, y(ht).custname),
                              N(se, y(ht).total_orders),
                              N(fe, je),
                              N(ge, Ve),
                              (Te = Ot(ie, 1, 'svelte-1vhtlpy', null, Te, $n)),
                              N(He, Un);
                          },
                          [
                            () =>
                              y(ht).total_quantity_purchased.toLocaleString(),
                            () => h(y(ht).total_revenue_from_customer),
                            () => ({
                              'profit-value':
                                y(ht).total_profit_from_customer > 0,
                              'loss-value':
                                y(ht).total_profit_from_customer < 0,
                            }),
                            () => h(y(ht).total_profit_from_customer),
                          ],
                        ),
                          B(mt, Lt);
                      },
                    ),
                      B(Q, it);
                  };
                J(
                  I,
                  (Q) => {
                    y(e).length === 0 ? Q(Y) : Q(q, !1);
                  },
                  H,
                );
              }
            };
          J(
            T,
            (I) => {
              y(i) ? I(V) : I(W, !1);
            },
            F,
          );
        }
      };
    J(C, (T) => {
      y(s) ? T(L) : T(A, !1);
    });
  }
  Si(
    m,
    () => y(o),
    (T) => R(o, T),
  ),
    Si(
      v,
      () => y(l),
      (T) => R(l, T),
    ),
    B(n, g),
    de();
}
var yw = z(
    '<div class="loading-state svelte-fhehpb"><p>Loading top suppliers...</p></div>',
  ),
  xw = z(
    '<div class="error-state svelte-fhehpb"><p class="svelte-fhehpb"> </p></div>',
  ),
  ww = z(
    '<p class="no-data-message svelte-fhehpb">No supplier data available.</p>',
  ),
  kw = z(
    '<tr><td class="svelte-fhehpb"> </td><td class="svelte-fhehpb"> </td><td class="svelte-fhehpb"> </td><td class="svelte-fhehpb"> </td></tr>',
  ),
  Mw = z(
    '<div class="chart-container-wrapper svelte-fhehpb"><canvas class="svelte-fhehpb"></canvas></div> <div class="list-container svelte-fhehpb"><table class="items-table svelte-fhehpb"><thead><tr><th class="svelte-fhehpb">Supplier Name</th><th class="svelte-fhehpb">Total Batches</th><th class="svelte-fhehpb">Total Quantity Supplied</th><th class="svelte-fhehpb">Total Purchase Value</th></tr></thead><tbody></tbody></table></div>',
    1,
  ),
  Sw = z(
    '<div class="container svelte-fhehpb"><div class="header svelte-fhehpb"><p class="title-text svelte-fhehpb">Top Suppliers</p> <div class="controls svelte-fhehpb"><label for="supplier-metric-select" class="svelte-fhehpb">Display by:</label> <select id="supplier-metric-select" class="svelte-fhehpb"><option>Total Purchase Value</option><option>Total Quantity Supplied</option><option>Total Batches Supplied</option></select> <label for="supplier-limit-select" class="svelte-fhehpb">Show Top:</label> <select id="supplier-limit-select" class="svelte-fhehpb"><option>3</option><option>5</option><option>10</option></select></div></div> <!></div>',
  );
function vd(n, t) {
  ue(t, !0);
  let e = j(Nt([])),
    s = j(!0),
    i = j(''),
    r,
    a = j(null),
    o = j('total_purchase_value'),
    l = j(5);
  async function c() {
    R(s, !0), R(i, '');
    try {
      const A = await Z.get(
        `http://localhost:3000/api/data/top/suppliers?limit=${y(l)}`,
      );
      R(e, A.data, !0);
    } catch (A) {
      console.error('Error fetching top suppliers:', A),
        R(i, 'Failed to load top suppliers.'),
        R(e, [], !0);
    } finally {
      R(s, !1);
    }
  }
  function u() {
    return y(o) === 'total_purchase_value'
      ? 'Total Purchase Value'
      : y(o) === 'total_quantity_supplied'
        ? 'Total Quantity Supplied'
        : y(o) === 'total_batches_supplied'
          ? 'Total Batches Supplied'
          : 'Value';
  }
  function d() {
    if (r && y(e).length > 0) {
      y(a) && (y(a).destroy(), R(a, null));
      const A = y(e).map((F) => F.suppname),
        T = y(e).map((F) => F[y(o)]);
      R(
        a,
        new Vt(r, {
          type: 'bar',
          data: {
            labels: A,
            datasets: [
              {
                label: u(),
                data: T,
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
              x: { beginAtZero: !0, title: { display: !0, text: u() } },
              y: { title: { display: !0, text: 'Supplier' } },
            },
            plugins: {
              legend: { display: !1 },
              title: { display: !0, text: `Top ${y(l)} Suppliers by ${u()}` },
            },
          },
        }),
        !0,
      );
    } else y(a) && (y(a).destroy(), R(a, null));
  }
  function h(A) {
    return A == null
      ? 'N/A'
      : A.toLocaleString(void 0, { style: 'currency', currency: 'INR' });
  }
  De(() => {
    c();
  }),
    Me(() => {
      c();
    }),
    Me(() => {
      !y(s) && r && d();
    });
  var g = Sw(),
    f = S(g),
    p = E(S(f), 2),
    m = E(S(p), 2),
    b = S(m);
  b.value = b.__value = 'total_purchase_value';
  var _ = E(b);
  _.value = _.__value = 'total_quantity_supplied';
  var x = E(_);
  x.value = x.__value = 'total_batches_supplied';
  var w = E(m, 4),
    v = S(w);
  v.value = v.__value = 3;
  var P = E(v);
  P.value = P.__value = 5;
  var O = E(P);
  O.value = O.__value = 10;
  var k = E(f, 2);
  {
    var C = (A) => {
        var T = yw();
        B(A, T);
      },
      L = (A, T) => {
        {
          var F = (W) => {
              var I = xw(),
                H = S(I),
                Y = S(H);
              st(() => N(Y, y(i))), B(W, I);
            },
            V = (W, I) => {
              {
                var H = (q) => {
                    var Q = ww();
                    B(q, Q);
                  },
                  Y = (q) => {
                    var Q = Mw(),
                      it = xe(Q),
                      wt = S(it);
                    Vn(
                      wt,
                      (ot) => (r = ot),
                      () => r,
                    );
                    var Tt = E(it, 2),
                      pt = S(Tt),
                      ct = E(S(pt));
                    tn(
                      ct,
                      21,
                      () => y(e),
                      (ot) => ot.suppcode,
                      (ot, mt) => {
                        var ht = kw(),
                          Lt = S(ht),
                          zt = S(Lt),
                          Xt = E(Lt),
                          Wt = S(Xt),
                          se = E(Xt),
                          Zt = S(se),
                          fe = E(se),
                          te = S(fe);
                        st(
                          (ge, ie) => {
                            N(zt, y(mt).suppname),
                              N(Wt, y(mt).total_batches_supplied),
                              N(Zt, ge),
                              N(te, ie);
                          },
                          [
                            () =>
                              y(mt).total_quantity_supplied.toLocaleString(),
                            () => h(y(mt).total_purchase_value),
                          ],
                        ),
                          B(ot, ht);
                      },
                    ),
                      B(q, Q);
                  };
                J(
                  W,
                  (q) => {
                    y(e).length === 0 ? q(H) : q(Y, !1);
                  },
                  I,
                );
              }
            };
          J(
            A,
            (W) => {
              y(i) ? W(F) : W(V, !1);
            },
            T,
          );
        }
      };
    J(k, (A) => {
      y(s) ? A(C) : A(L, !1);
    });
  }
  Si(
    m,
    () => y(o),
    (A) => R(o, A),
  ),
    Si(
      w,
      () => y(l),
      (A) => R(l, A),
    ),
    B(n, g),
    de();
}
var Pw = (n, t) => t(sa),
  Dw = (n, t) => t($u),
  Tw = (n, t) => t(fd),
  Ow = (n, t) => t(gd),
  Ew = (n, t) => t(pd),
  Cw = (n, t) => t(md),
  Aw = (n, t) => t(bd),
  Rw = (n, t) => t(_d),
  Lw = (n, t) => t(vd),
  Fw = z(
    '<!> <div class="parent svelte-uokmxf"><div class="div1 svelte-uokmxf"><p class="text-internal svelte-uokmxf">Dashboard</p></div> <div class="div2 svelte-uokmxf"><div class="option svelte-uokmxf"><p class="text-internal svelte-uokmxf">Select</p> <div class="selector svelte-uokmxf"><button>Top Selling items</button> <button>Expired items</button> <button>Total Items Bought</button> <button>Total Items Sold</button> <button>Batch Details</button> <button>Low Stock Items</button> <button>Profits</button> <button>Top Customers</button> <button>Top Suppliers</button></div></div></div> <div class="div4 svelte-uokmxf"><div id="op4" class="option svelte-uokmxf"><!></div></div></div>',
    1,
  );
function Iw(n) {
  let t = j(Nt(sa)),
    e = (P) => {
      R(t, P, !0);
    },
    s = (P) => (P == y(t) ? 'yes' : 'no');
  var i = Fw(),
    r = xe(i);
  $h(r, {});
  var a = E(r, 2),
    o = E(S(a), 2),
    l = S(o),
    c = E(S(l), 2),
    u = S(c);
  u.__click = [Pw, e];
  var d = E(u, 2);
  d.__click = [Dw, e];
  var h = E(d, 2);
  h.__click = [Tw, e];
  var g = E(h, 2);
  g.__click = [Ow, e];
  var f = E(g, 2);
  f.__click = [Ew, e];
  var p = E(f, 2);
  p.__click = [Cw, e];
  var m = E(p, 2);
  m.__click = [Aw, e];
  var b = E(m, 2);
  b.__click = [Rw, e];
  var _ = E(b, 2);
  _.__click = [Lw, e];
  var x = E(o, 2),
    w = S(x),
    v = S(w);
  Ih(
    v,
    () => y(t),
    (P, O) => {
      O(P, {});
    },
  ),
    st(
      (P, O, k, C, L, A, T, F, V) => {
        Ot(u, 1, P, 'svelte-uokmxf'),
          Ot(d, 1, O, 'svelte-uokmxf'),
          Ot(h, 1, k, 'svelte-uokmxf'),
          Ot(g, 1, C, 'svelte-uokmxf'),
          Ot(f, 1, L, 'svelte-uokmxf'),
          Ot(p, 1, A, 'svelte-uokmxf'),
          Ot(m, 1, T, 'svelte-uokmxf'),
          Ot(b, 1, F, 'svelte-uokmxf'),
          Ot(_, 1, V, 'svelte-uokmxf');
      },
      [
        () => Oe(s(sa)),
        () => Oe(s($u)),
        () => Oe(s(fd)),
        () => Oe(s(gd)),
        () => Oe(s(pd)),
        () => Oe(s(md)),
        () => Oe(s(bd)),
        () => Oe(s(_d)),
        () => Oe(s(vd)),
      ],
    ),
    B(n, i);
}
_c(['click']);
Oh(Iw, { target: document.getElementById('app') });
