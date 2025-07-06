(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) n(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === 'childList')
        for (const s of i.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function n(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = e(a);
    fetch(a.href, i);
  }
})();
const Y0 = !1;
var $i = Array.isArray,
  _u = Array.prototype.indexOf,
  Zs = Array.from,
  of = Object.defineProperty,
  Aa = Object.getOwnPropertyDescriptor,
  wu = Object.getOwnPropertyDescriptors,
  Eu = Object.prototype,
  Tu = Array.prototype,
  ff = Object.getPrototypeOf,
  X0 = Object.isExtensible;
const un = () => {};
function yu(t) {
  return t();
}
function Ei(t) {
  for (var r = 0; r < t.length; r++) t[r]();
}
const fr = 2,
  lf = 4,
  zi = 8,
  Qs = 16,
  Zr = 32,
  fa = 64,
  e0 = 128,
  or = 256,
  Ti = 512,
  gr = 1024,
  zr = 2048,
  Mn = 4096,
  Yr = 8192,
  t0 = 16384,
  cf = 32768,
  r0 = 65536,
  Su = 1 << 17,
  K0 = 1 << 18,
  Au = 1 << 19,
  uf = 1 << 20,
  Ps = 1 << 21,
  Dn = Symbol('$state');
function hf(t) {
  return t === this.v;
}
function df(t, r) {
  return t != t
    ? r == r
    : t !== r || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function pf(t) {
  return !df(t, this.v);
}
function Fu(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Cu() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Du(t) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function Ou() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Nu() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Ru() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function ku() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Ka = !1,
  Iu = !1;
function bu() {
  Ka = !0;
}
const n0 = 1,
  a0 = 2,
  vf = 4,
  Pu = 8,
  Mu = 16,
  Lu = 1,
  Bu = 2,
  Kt = Symbol();
function Uu(t) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let ht = null;
function $0(t) {
  ht = t;
}
function i0(t, r = !1, e) {
  var n = (ht = {
    p: ht,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null,
  });
  Ka && !r && (ht.l = { s: null, u: null, r1: [], r2: Pa(!1) }),
    Ji(() => {
      n.d = !0;
    });
}
function s0(t) {
  const r = ht;
  if (r !== null) {
    const s = r.e;
    if (s !== null) {
      var e = Qe,
        n = We;
      r.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var i = s[a];
          dn(i.effect), Pr(i.reaction), za(i.fn);
        }
      } finally {
        dn(e), Pr(n);
      }
    }
    (ht = r.p), (r.m = !0);
  }
  return {};
}
function $a() {
  return !Ka || (ht !== null && ht.l === null);
}
function Ta(t) {
  if (typeof t != 'object' || t === null || Dn in t) return t;
  const r = ff(t);
  if (r !== Eu && r !== Tu) return t;
  var e = new Map(),
    n = $i(t),
    a = jr(0),
    i = We,
    s = (o) => {
      var l = We;
      Pr(i);
      var f = o();
      return Pr(l), f;
    };
  return (
    n && e.set('length', jr(t.length)),
    new Proxy(t, {
      defineProperty(o, l, f) {
        (!('value' in f) ||
          f.configurable === !1 ||
          f.enumerable === !1 ||
          f.writable === !1) &&
          Nu();
        var c = e.get(l);
        return (
          c === void 0
            ? (c = s(() => {
                var d = jr(f.value);
                return e.set(l, d), d;
              }))
            : ve(c, f.value, !0),
          !0
        );
      },
      deleteProperty(o, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in o) {
            const u = s(() => jr(Kt));
            e.set(l, u), vs(a);
          }
        } else {
          if (n && typeof l == 'string') {
            var c = e.get('length'),
              d = Number(l);
            Number.isInteger(d) && d < c.v && ve(c, d);
          }
          ve(f, Kt), vs(a);
        }
        return !0;
      },
      get(o, l, f) {
        if (l === Dn) return t;
        var c = e.get(l),
          d = l in o;
        if (
          (c === void 0 &&
            (!d || Aa(o, l)?.writable) &&
            ((c = s(() => {
              var p = Ta(d ? o[l] : Kt),
                v = jr(p);
              return v;
            })),
            e.set(l, c)),
          c !== void 0)
        ) {
          var u = q(c);
          return u === Kt ? void 0 : u;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && 'value' in f) {
          var c = e.get(l);
          c && (f.value = q(c));
        } else if (f === void 0) {
          var d = e.get(l),
            u = d?.v;
          if (d !== void 0 && u !== Kt)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return f;
      },
      has(o, l) {
        if (l === Dn) return !0;
        var f = e.get(l),
          c = (f !== void 0 && f.v !== Kt) || Reflect.has(o, l);
        if (f !== void 0 || (Qe !== null && (!c || Aa(o, l)?.writable))) {
          f === void 0 &&
            ((f = s(() => {
              var u = c ? Ta(o[l]) : Kt,
                p = jr(u);
              return p;
            })),
            e.set(l, f));
          var d = q(f);
          if (d === Kt) return !1;
        }
        return c;
      },
      set(o, l, f, c) {
        var d = e.get(l),
          u = l in o;
        if (n && l === 'length')
          for (var p = f; p < d.v; p += 1) {
            var v = e.get(p + '');
            v !== void 0
              ? ve(v, Kt)
              : p in o && ((v = s(() => jr(Kt))), e.set(p + '', v));
          }
        if (d === void 0)
          (!u || Aa(o, l)?.writable) &&
            ((d = s(() => jr(void 0))), ve(d, Ta(f)), e.set(l, d));
        else {
          u = d.v !== Kt;
          var h = s(() => Ta(f));
          ve(d, h);
        }
        var x = Reflect.getOwnPropertyDescriptor(o, l);
        if ((x?.set && x.set.call(c, f), !u)) {
          if (n && typeof l == 'string') {
            var D = e.get('length'),
              C = Number(l);
            Number.isInteger(C) && C >= D.v && ve(D, C + 1);
          }
          vs(a);
        }
        return !0;
      },
      ownKeys(o) {
        q(a);
        var l = Reflect.ownKeys(o).filter((d) => {
          var u = e.get(d);
          return u === void 0 || u.v !== Kt;
        });
        for (var [f, c] of e) c.v !== Kt && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Ru();
      },
    })
  );
}
function vs(t, r = 1) {
  ve(t, t.v + r);
}
function z0(t) {
  try {
    if (t !== null && typeof t == 'object' && Dn in t) return t[Dn];
  } catch {}
  return t;
}
function Hu(t, r) {
  return Object.is(z0(t), z0(r));
}
function o0(t) {
  var r = fr | zr,
    e = We !== null && (We.f & fr) !== 0 ? We : null;
  return (
    Qe === null || (e !== null && (e.f & or) !== 0) ? (r |= or) : (Qe.f |= uf),
    {
      ctx: ht,
      deps: null,
      effects: null,
      equals: hf,
      f: r,
      fn: t,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? Qe,
    }
  );
}
function sn(t) {
  const r = o0(t);
  return (r.equals = pf), r;
}
function mf(t) {
  var r = t.effects;
  if (r !== null) {
    t.effects = null;
    for (var e = 0; e < r.length; e += 1) hn(r[e]);
  }
}
function Wu(t) {
  for (var r = t.parent; r !== null; ) {
    if ((r.f & fr) === 0) return r;
    r = r.parent;
  }
  return null;
}
function xf(t) {
  var r,
    e = Qe;
  dn(Wu(t));
  try {
    mf(t), (r = Pf(t));
  } finally {
    dn(e);
  }
  return r;
}
function gf(t) {
  var r = xf(t);
  if ((t.equals(r) || ((t.v = r), (t.wv = If())), !ca)) {
    var e = (fn || (t.f & or) !== 0) && t.deps !== null ? Mn : gr;
    Mr(t, e);
  }
}
const ba = new Map();
function Pa(t, r) {
  var e = { f: 0, v: t, reactions: null, equals: hf, rv: 0, wv: 0 };
  return e;
}
function jr(t, r) {
  const e = Pa(t);
  return Qu(e), e;
}
function et(t, r = !1, e = !0) {
  const n = Pa(t);
  return (
    r || (n.equals = pf),
    Ka && e && ht !== null && ht.l !== null && (ht.l.s ??= []).push(n),
    n
  );
}
function ve(t, r, e = !1) {
  We !== null &&
    (!br || (We.f & K0) !== 0) &&
    $a() &&
    (We.f & (fr | Qs | K0)) !== 0 &&
    !(xr?.[1].includes(t) && xr[0] === We) &&
    ku();
  let n = e ? Ta(r) : r;
  return Ma(t, n);
}
function Ma(t, r) {
  if (!t.equals(r)) {
    var e = t.v;
    ca ? ba.set(t, r) : ba.set(t, e),
      (t.v = r),
      (t.f & fr) !== 0 &&
        ((t.f & zr) !== 0 && xf(t), Mr(t, (t.f & or) === 0 ? gr : Mn)),
      (t.wv = If()),
      _f(t, zr),
      $a() &&
        Qe !== null &&
        (Qe.f & gr) !== 0 &&
        (Qe.f & (Zr | fa)) === 0 &&
        (vr === null ? eh([t]) : vr.push(t));
  }
  return r;
}
function _f(t, r) {
  var e = t.reactions;
  if (e !== null)
    for (var n = $a(), a = e.length, i = 0; i < a; i++) {
      var s = e[i],
        o = s.f;
      (o & zr) === 0 &&
        ((!n && s === Qe) ||
          (Mr(s, r),
          (o & (gr | or)) !== 0 && ((o & fr) !== 0 ? _f(s, Mn) : h0(s))));
    }
}
function Vu() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let ju = !1;
var q0, wf, Ef, Tf;
function Gu() {
  if (q0 === void 0) {
    (q0 = window), (wf = /Firefox/.test(navigator.userAgent));
    var t = Element.prototype,
      r = Node.prototype,
      e = Text.prototype;
    (Ef = Aa(r, 'firstChild').get),
      (Tf = Aa(r, 'nextSibling').get),
      X0(t) &&
        ((t.__click = void 0),
        (t.__className = void 0),
        (t.__attributes = null),
        (t.__style = void 0),
        (t.__e = void 0)),
      X0(e) && (e.__t = void 0);
  }
}
function f0(t = '') {
  return document.createTextNode(t);
}
function yi(t) {
  return Ef.call(t);
}
function qi(t) {
  return Tf.call(t);
}
function Ae(t, r) {
  return yi(t);
}
function J0(t, r) {
  {
    var e = yi(t);
    return e instanceof Comment && e.data === '' ? qi(e) : e;
  }
}
function Te(t, r = 1, e = !1) {
  let n = t;
  for (; r--; ) n = qi(n);
  return n;
}
function Yu(t) {
  t.textContent = '';
}
function yf(t) {
  Qe === null && We === null && Du(),
    We !== null && (We.f & or) !== 0 && Qe === null && Cu(),
    ca && Fu();
}
function Xu(t, r) {
  var e = r.last;
  e === null
    ? (r.last = r.first = t)
    : ((e.next = t), (t.prev = e), (r.last = t));
}
function la(t, r, e, n = !0) {
  var a = Qe,
    i = {
      ctx: ht,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: t | zr,
      first: null,
      fn: r,
      last: null,
      next: null,
      parent: a,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
    };
  if (e)
    try {
      u0(i), (i.f |= cf);
    } catch (l) {
      throw (hn(i), l);
    }
  else r !== null && h0(i);
  var s =
    e &&
    i.deps === null &&
    i.first === null &&
    i.nodes_start === null &&
    i.teardown === null &&
    (i.f & (uf | e0)) === 0;
  if (!s && n && (a !== null && Xu(i, a), We !== null && (We.f & fr) !== 0)) {
    var o = We;
    (o.effects ??= []).push(i);
  }
  return i;
}
function Ji(t) {
  const r = la(zi, null, !1);
  return Mr(r, gr), (r.teardown = t), r;
}
function Ms(t) {
  yf();
  var r = Qe !== null && (Qe.f & Zr) !== 0 && ht !== null && !ht.m;
  if (r) {
    var e = ht;
    (e.e ??= []).push({ fn: t, effect: Qe, reaction: We });
  } else {
    var n = za(t);
    return n;
  }
}
function Ku(t) {
  return yf(), Sf(t);
}
function $u(t) {
  const r = la(fa, t, !0);
  return (e = {}) =>
    new Promise((n) => {
      e.outro
        ? Si(r, () => {
            hn(r), n(void 0);
          })
        : (hn(r), n(void 0));
    });
}
function za(t) {
  return la(lf, t, !1);
}
function Sf(t) {
  return la(zi, t, !0);
}
function at(t, r = [], e = o0) {
  const n = r.map(e);
  return l0(() => t(...n.map(q)));
}
function l0(t, r = 0) {
  return la(zi | Qs | r, t, !0);
}
function La(t, r = !0) {
  return la(zi | Zr, t, !0, r);
}
function Af(t) {
  var r = t.teardown;
  if (r !== null) {
    const e = ca,
      n = We;
    Z0(!0), Pr(null);
    try {
      r.call(null);
    } finally {
      Z0(e), Pr(n);
    }
  }
}
function Ff(t, r = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    var n = e.next;
    (e.f & fa) !== 0 ? (e.parent = null) : hn(e, r), (e = n);
  }
}
function zu(t) {
  for (var r = t.first; r !== null; ) {
    var e = r.next;
    (r.f & Zr) === 0 && hn(r), (r = e);
  }
}
function hn(t, r = !0) {
  var e = !1;
  (r || (t.f & Au) !== 0) &&
    t.nodes_start !== null &&
    t.nodes_end !== null &&
    (qu(t.nodes_start, t.nodes_end), (e = !0)),
    Ff(t, r && !e),
    Oi(t, 0),
    Mr(t, t0);
  var n = t.transitions;
  if (n !== null) for (const i of n) i.stop();
  Af(t);
  var a = t.parent;
  a !== null && a.first !== null && Cf(t),
    (t.next =
      t.prev =
      t.teardown =
      t.ctx =
      t.deps =
      t.fn =
      t.nodes_start =
      t.nodes_end =
        null);
}
function qu(t, r) {
  for (; t !== null; ) {
    var e = t === r ? null : qi(t);
    t.remove(), (t = e);
  }
}
function Cf(t) {
  var r = t.parent,
    e = t.prev,
    n = t.next;
  e !== null && (e.next = n),
    n !== null && (n.prev = e),
    r !== null &&
      (r.first === t && (r.first = n), r.last === t && (r.last = e));
}
function Si(t, r) {
  var e = [];
  c0(t, e, !0),
    Df(e, () => {
      hn(t), r && r();
    });
}
function Df(t, r) {
  var e = t.length;
  if (e > 0) {
    var n = () => --e || r();
    for (var a of t) a.out(n);
  } else r();
}
function c0(t, r, e) {
  if ((t.f & Yr) === 0) {
    if (((t.f ^= Yr), t.transitions !== null))
      for (const s of t.transitions) (s.is_global || e) && r.push(s);
    for (var n = t.first; n !== null; ) {
      var a = n.next,
        i = (n.f & r0) !== 0 || (n.f & Zr) !== 0;
      c0(n, r, i ? e : !1), (n = a);
    }
  }
}
function Ai(t) {
  Of(t, !0);
}
function Of(t, r) {
  if ((t.f & Yr) !== 0) {
    t.f ^= Yr;
    for (var e = t.first; e !== null; ) {
      var n = e.next,
        a = (e.f & r0) !== 0 || (e.f & Zr) !== 0;
      Of(e, a ? r : !1), (e = n);
    }
    if (t.transitions !== null)
      for (const i of t.transitions) (i.is_global || r) && i.in();
  }
}
let Fi = [];
function Ju() {
  var t = Fi;
  (Fi = []), Ei(t);
}
function Nf(t) {
  Fi.length === 0 && queueMicrotask(Ju), Fi.push(t);
}
function Zu(t) {
  var r = Qe;
  if ((r.f & cf) === 0) {
    if ((r.f & e0) === 0) throw t;
    r.fn(t);
  } else Rf(t, r);
}
function Rf(t, r) {
  for (; r !== null; ) {
    if ((r.f & e0) !== 0)
      try {
        r.fn(t);
        return;
      } catch {}
    r = r.parent;
  }
  throw t;
}
let Ls = !1,
  Ci = null,
  On = !1,
  ca = !1;
function Z0(t) {
  ca = t;
}
let xi = [];
let We = null,
  br = !1;
function Pr(t) {
  We = t;
}
let Qe = null;
function dn(t) {
  Qe = t;
}
let xr = null;
function Qu(t) {
  We !== null && We.f & Ps && (xr === null ? (xr = [We, [t]]) : xr[1].push(t));
}
let Vt = null,
  rr = 0,
  vr = null;
function eh(t) {
  vr = t;
}
let kf = 1,
  Di = 0,
  fn = !1,
  Sn = null;
function If() {
  return ++kf;
}
function Zi(t) {
  var r = t.f;
  if ((r & zr) !== 0) return !0;
  if ((r & Mn) !== 0) {
    var e = t.deps,
      n = (r & or) !== 0;
    if (e !== null) {
      var a,
        i,
        s = (r & Ti) !== 0,
        o = n && Qe !== null && !fn,
        l = e.length;
      if (s || o) {
        var f = t,
          c = f.parent;
        for (a = 0; a < l; a++)
          (i = e[a]),
            (s || !i?.reactions?.includes(f)) && (i.reactions ??= []).push(f);
        s && (f.f ^= Ti), o && c !== null && (c.f & or) === 0 && (f.f ^= or);
      }
      for (a = 0; a < l; a++)
        if (((i = e[a]), Zi(i) && gf(i), i.wv > t.wv)) return !0;
    }
    (!n || (Qe !== null && !fn)) && Mr(t, gr);
  }
  return !1;
}
function bf(t, r, e = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (xr?.[1].includes(t) && xr[0] === We) ||
        ((i.f & fr) !== 0
          ? bf(i, r, !1)
          : r === i && (e ? Mr(i, zr) : (i.f & gr) !== 0 && Mr(i, Mn), h0(i)));
    }
}
function Pf(t) {
  var r = Vt,
    e = rr,
    n = vr,
    a = We,
    i = fn,
    s = xr,
    o = ht,
    l = br,
    f = t.f;
  (Vt = null),
    (rr = 0),
    (vr = null),
    (fn = (f & or) !== 0 && (br || !On || We === null)),
    (We = (f & (Zr | fa)) === 0 ? t : null),
    (xr = null),
    $0(t.ctx),
    (br = !1),
    Di++,
    (t.f |= Ps);
  try {
    var c = (0, t.fn)(),
      d = t.deps;
    if (Vt !== null) {
      var u;
      if ((Oi(t, rr), d !== null && rr > 0))
        for (d.length = rr + Vt.length, u = 0; u < Vt.length; u++)
          d[rr + u] = Vt[u];
      else t.deps = d = Vt;
      if (!fn || ((f & fr) !== 0 && t.reactions !== null))
        for (u = rr; u < d.length; u++) (d[u].reactions ??= []).push(t);
    } else d !== null && rr < d.length && (Oi(t, rr), (d.length = rr));
    if (
      $a() &&
      vr !== null &&
      !br &&
      d !== null &&
      (t.f & (fr | Mn | zr)) === 0
    )
      for (u = 0; u < vr.length; u++) bf(vr[u], t);
    return (
      a !== null &&
        a !== t &&
        (Di++, vr !== null && (n === null ? (n = vr) : n.push(...vr))),
      c
    );
  } catch (p) {
    Zu(p);
  } finally {
    (Vt = r),
      (rr = e),
      (vr = n),
      (We = a),
      (fn = i),
      (xr = s),
      $0(o),
      (br = l),
      (t.f ^= Ps);
  }
}
function th(t, r) {
  let e = r.reactions;
  if (e !== null) {
    var n = _u.call(e, t);
    if (n !== -1) {
      var a = e.length - 1;
      a === 0 ? (e = r.reactions = null) : ((e[n] = e[a]), e.pop());
    }
  }
  e === null &&
    (r.f & fr) !== 0 &&
    (Vt === null || !Vt.includes(r)) &&
    (Mr(r, Mn), (r.f & (or | Ti)) === 0 && (r.f ^= Ti), mf(r), Oi(r, 0));
}
function Oi(t, r) {
  var e = t.deps;
  if (e !== null) for (var n = r; n < e.length; n++) th(t, e[n]);
}
function u0(t) {
  var r = t.f;
  if ((r & t0) === 0) {
    Mr(t, gr);
    var e = Qe,
      n = On;
    (Qe = t), (On = !0);
    try {
      (r & Qs) !== 0 ? zu(t) : Ff(t), Af(t);
      var a = Pf(t);
      (t.teardown = typeof a == 'function' ? a : null), (t.wv = kf);
      var i;
      Y0 && Iu && (t.f & zr) !== 0 && t.deps;
    } finally {
      (On = n), (Qe = e);
    }
  }
}
function rh() {
  try {
    Ou();
  } catch (t) {
    if (Ci !== null) Rf(t, Ci);
    else throw t;
  }
}
function nh() {
  var t = On;
  try {
    var r = 0;
    for (On = !0; xi.length > 0; ) {
      r++ > 1e3 && rh();
      var e = xi,
        n = e.length;
      xi = [];
      for (var a = 0; a < n; a++) {
        var i = ih(e[a]);
        ah(i);
      }
      ba.clear();
    }
  } finally {
    (Ls = !1), (On = t), (Ci = null);
  }
}
function ah(t) {
  var r = t.length;
  if (r !== 0)
    for (var e = 0; e < r; e++) {
      var n = t[e];
      (n.f & (t0 | Yr)) === 0 &&
        Zi(n) &&
        (u0(n),
        n.deps === null &&
          n.first === null &&
          n.nodes_start === null &&
          (n.teardown === null ? Cf(n) : (n.fn = null)));
    }
}
function h0(t) {
  Ls || ((Ls = !0), queueMicrotask(nh));
  for (var r = (Ci = t); r.parent !== null; ) {
    r = r.parent;
    var e = r.f;
    if ((e & (fa | Zr)) !== 0) {
      if ((e & gr) === 0) return;
      r.f ^= gr;
    }
  }
  xi.push(r);
}
function ih(t) {
  for (var r = [], e = t; e !== null; ) {
    var n = e.f,
      a = (n & (Zr | fa)) !== 0,
      i = a && (n & gr) !== 0;
    if (!i && (n & Yr) === 0) {
      (n & lf) !== 0 ? r.push(e) : a ? (e.f ^= gr) : Zi(e) && u0(e);
      var s = e.first;
      if (s !== null) {
        e = s;
        continue;
      }
    }
    var o = e.parent;
    for (e = e.next; e === null && o !== null; ) (e = o.next), (o = o.parent);
  }
  return r;
}
function q(t) {
  var r = t.f,
    e = (r & fr) !== 0;
  if ((Sn !== null && Sn.add(t), We !== null && !br)) {
    if (!xr?.[1].includes(t) || xr[0] !== We) {
      var n = We.deps;
      t.rv < Di &&
        ((t.rv = Di),
        Vt === null && n !== null && n[rr] === t
          ? rr++
          : Vt === null
            ? (Vt = [t])
            : (!fn || !Vt.includes(t)) && Vt.push(t));
    }
  } else if (e && t.deps === null && t.effects === null) {
    var a = t,
      i = a.parent;
    i !== null && (i.f & or) === 0 && (a.f ^= or);
  }
  return e && ((a = t), Zi(a) && gf(a)), ca && ba.has(t) ? ba.get(t) : t.v;
}
function sh(t) {
  var r = Sn;
  Sn = new Set();
  var e = Sn,
    n;
  try {
    if ((Ln(t), r !== null)) for (n of Sn) r.add(n);
  } finally {
    Sn = r;
  }
  return e;
}
function ai(t) {
  var r = sh(() => Ln(t));
  for (var e of r)
    if ((e.f & Su) !== 0)
      for (const n of e.deps || []) (n.f & fr) === 0 && Ma(n, n.v);
    else Ma(e, e.v);
}
function Ln(t) {
  var r = br;
  try {
    return (br = !0), t();
  } finally {
    br = r;
  }
}
const oh = -7169;
function Mr(t, r) {
  t.f = (t.f & oh) | r;
}
function fh(t) {
  if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
    if (Dn in t) Bs(t);
    else if (!Array.isArray(t))
      for (let r in t) {
        const e = t[r];
        typeof e == 'object' && e && Dn in e && Bs(e);
      }
  }
}
function Bs(t, r = new Set()) {
  if (
    typeof t == 'object' &&
    t !== null &&
    !(t instanceof EventTarget) &&
    !r.has(t)
  ) {
    r.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Bs(t[n], r);
      } catch {}
    const e = ff(t);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const n = wu(e);
      for (let a in n) {
        const i = n[a].get;
        if (i)
          try {
            i.call(t);
          } catch {}
      }
    }
  }
}
const lh = ['touchstart', 'touchmove'];
function ch(t) {
  return lh.includes(t);
}
let Q0 = !1;
function uh() {
  Q0 ||
    ((Q0 = !0),
    document.addEventListener(
      'reset',
      (t) => {
        Promise.resolve().then(() => {
          if (!t.defaultPrevented)
            for (const r of t.target.elements) r.__on_r?.();
        });
      },
      { capture: !0 },
    ));
}
function Mf(t) {
  var r = We,
    e = Qe;
  Pr(null), dn(null);
  try {
    return t();
  } finally {
    Pr(r), dn(e);
  }
}
function Lf(t, r, e, n = e) {
  t.addEventListener(r, () => Mf(e));
  const a = t.__on_r;
  a
    ? (t.__on_r = () => {
        a(), n(!0);
      })
    : (t.__on_r = () => n(!0)),
    uh();
}
const hh = new Set(),
  eo = new Set();
function dh(t, r, e, n = {}) {
  function a(i) {
    if ((n.capture || ya.call(r, i), !i.cancelBubble))
      return Mf(() => e?.call(this, i));
  }
  return (
    t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
      ? Nf(() => {
          r.addEventListener(t, a, n);
        })
      : r.addEventListener(t, a, n),
    a
  );
}
function Xn(t, r, e, n, a) {
  var i = { capture: n, passive: a },
    s = dh(t, r, e, i);
  (r === document.body ||
    r === window ||
    r === document ||
    r instanceof HTMLMediaElement) &&
    Ji(() => {
      r.removeEventListener(t, s, i);
    });
}
function ya(t) {
  var r = this,
    e = r.ownerDocument,
    n = t.type,
    a = t.composedPath?.() || [],
    i = a[0] || t.target,
    s = 0,
    o = t.__root;
  if (o) {
    var l = a.indexOf(o);
    if (l !== -1 && (r === document || r === window)) {
      t.__root = r;
      return;
    }
    var f = a.indexOf(r);
    if (f === -1) return;
    l <= f && (s = l);
  }
  if (((i = a[s] || t.target), i !== r)) {
    of(t, 'currentTarget', {
      configurable: !0,
      get() {
        return i || e;
      },
    });
    var c = We,
      d = Qe;
    Pr(null), dn(null);
    try {
      for (var u, p = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var h = i['__' + n];
          if (h != null && (!i.disabled || t.target === i))
            if ($i(h)) {
              var [x, ...D] = h;
              x.apply(i, [t, ...D]);
            } else h.call(i, t);
        } catch (C) {
          u ? p.push(C) : (u = C);
        }
        if (t.cancelBubble || v === r || v === null) break;
        i = v;
      }
      if (u) {
        for (let C of p)
          queueMicrotask(() => {
            throw C;
          });
        throw u;
      }
    } finally {
      (t.__root = r), delete t.currentTarget, Pr(c), dn(d);
    }
  }
}
function ph(t) {
  var r = document.createElement('template');
  return (r.innerHTML = t.replaceAll('<!>', '<!---->')), r.content;
}
function Us(t, r) {
  var e = Qe;
  e.nodes_start === null && ((e.nodes_start = t), (e.nodes_end = r));
}
function tt(t, r) {
  var e = (r & Lu) !== 0,
    n = (r & Bu) !== 0,
    a,
    i = !t.startsWith('<!>');
  return () => {
    a === void 0 && ((a = ph(i ? t : '<!>' + t)), e || (a = yi(a)));
    var s = n || wf ? document.importNode(a, !0) : a.cloneNode(!0);
    if (e) {
      var o = yi(s),
        l = s.lastChild;
      Us(o, l);
    } else Us(s, s);
    return s;
  };
}
function hr(t = '') {
  {
    var r = f0(t + '');
    return Us(r, r), r;
  }
}
function be(t, r) {
  t !== null && t.before(r);
}
function vt(t, r) {
  var e = r == null ? '' : typeof r == 'object' ? r + '' : r;
  e !== (t.__t ??= t.nodeValue) && ((t.__t = e), (t.nodeValue = e + ''));
}
function vh(t, r) {
  return mh(t, r);
}
const Kn = new Map();
function mh(
  t,
  { target: r, anchor: e, props: n = {}, events: a, context: i, intro: s = !0 },
) {
  Gu();
  var o = new Set(),
    l = (d) => {
      for (var u = 0; u < d.length; u++) {
        var p = d[u];
        if (!o.has(p)) {
          o.add(p);
          var v = ch(p);
          r.addEventListener(p, ya, { passive: v });
          var h = Kn.get(p);
          h === void 0
            ? (document.addEventListener(p, ya, { passive: v }), Kn.set(p, 1))
            : Kn.set(p, h + 1);
        }
      }
    };
  l(Zs(hh)), eo.add(l);
  var f = void 0,
    c = $u(() => {
      var d = e ?? r.appendChild(f0());
      return (
        La(() => {
          if (i) {
            i0({});
            var u = ht;
            u.c = i;
          }
          a && (n.$$events = a), (f = t(d, n) || {}), i && s0();
        }),
        () => {
          for (var u of o) {
            r.removeEventListener(u, ya);
            var p = Kn.get(u);
            --p === 0
              ? (document.removeEventListener(u, ya), Kn.delete(u))
              : Kn.set(u, p);
          }
          eo.delete(l), d !== e && d.parentNode?.removeChild(d);
        }
      );
    });
  return xh.set(f, c), f;
}
let xh = new WeakMap();
function yt(t, r, [e, n] = [0, 0]) {
  var a = t,
    i = null,
    s = null,
    o = Kt,
    l = e > 0 ? r0 : 0,
    f = !1;
  const c = (u, p = !0) => {
      (f = !0), d(p, u);
    },
    d = (u, p) => {
      o !== (o = u) &&
        (o
          ? (i ? Ai(i) : p && (i = La(() => p(a))),
            s &&
              Si(s, () => {
                s = null;
              }))
          : (s ? Ai(s) : p && (s = La(() => p(a, [e + 1, n]))),
            i &&
              Si(i, () => {
                i = null;
              })));
    };
  l0(() => {
    (f = !1), r(c), f || d(null, null);
  }, l);
}
function ii(t, r) {
  return r;
}
function gh(t, r, e, n) {
  for (var a = [], i = r.length, s = 0; s < i; s++) c0(r[s].e, a, !0);
  var o = i > 0 && a.length === 0 && e !== null;
  if (o) {
    var l = e.parentNode;
    Yu(l), l.append(e), n.clear(), on(t, r[0].prev, r[i - 1].next);
  }
  Df(a, () => {
    for (var f = 0; f < i; f++) {
      var c = r[f];
      o || (n.delete(c.k), on(t, c.prev, c.next)), hn(c.e, !o);
    }
  });
}
function _a(t, r, e, n, a, i = null) {
  var s = t,
    o = { flags: r, items: new Map(), first: null },
    l = (r & vf) !== 0;
  if (l) {
    var f = t;
    s = f.appendChild(f0());
  }
  var c = null,
    d = !1,
    u = sn(() => {
      var p = e();
      return $i(p) ? p : p == null ? [] : Zs(p);
    });
  l0(() => {
    var p = q(u),
      v = p.length;
    (d && v === 0) ||
      ((d = v === 0),
      _h(p, o, s, a, r, n, e),
      i !== null &&
        (v === 0
          ? c
            ? Ai(c)
            : (c = La(() => i(s)))
          : c !== null &&
            Si(c, () => {
              c = null;
            })),
      q(u));
  });
}
function _h(t, r, e, n, a, i, s) {
  var o = (a & Pu) !== 0,
    l = (a & (n0 | a0)) !== 0,
    f = t.length,
    c = r.items,
    d = r.first,
    u = d,
    p,
    v = null,
    h,
    x = [],
    D = [],
    C,
    F,
    k,
    j;
  if (o)
    for (j = 0; j < f; j += 1)
      (C = t[j]),
        (F = i(C, j)),
        (k = c.get(F)),
        k !== void 0 && (k.a?.measure(), (h ??= new Set()).add(k));
  for (j = 0; j < f; j += 1) {
    if (((C = t[j]), (F = i(C, j)), (k = c.get(F)), k === void 0)) {
      var te = u ? u.e.nodes_start : e;
      (v = Eh(te, r, v, v === null ? r.first : v.next, C, F, j, n, a, s)),
        c.set(F, v),
        (x = []),
        (D = []),
        (u = v.next);
      continue;
    }
    if (
      (l && wh(k, C, j, a),
      (k.e.f & Yr) !== 0 &&
        (Ai(k.e), o && (k.a?.unfix(), (h ??= new Set()).delete(k))),
      k !== u)
    ) {
      if (p !== void 0 && p.has(k)) {
        if (x.length < D.length) {
          var R = D[0],
            H;
          v = R.prev;
          var L = x[0],
            X = x[x.length - 1];
          for (H = 0; H < x.length; H += 1) to(x[H], R, e);
          for (H = 0; H < D.length; H += 1) p.delete(D[H]);
          on(r, L.prev, X.next),
            on(r, v, L),
            on(r, X, R),
            (u = R),
            (v = X),
            (j -= 1),
            (x = []),
            (D = []);
        } else
          p.delete(k),
            to(k, u, e),
            on(r, k.prev, k.next),
            on(r, k, v === null ? r.first : v.next),
            on(r, v, k),
            (v = k);
        continue;
      }
      for (x = [], D = []; u !== null && u.k !== F; )
        (u.e.f & Yr) === 0 && (p ??= new Set()).add(u), D.push(u), (u = u.next);
      if (u === null) continue;
      k = u;
    }
    x.push(k), (v = k), (u = k.next);
  }
  if (u !== null || p !== void 0) {
    for (var K = p === void 0 ? [] : Zs(p); u !== null; )
      (u.e.f & Yr) === 0 && K.push(u), (u = u.next);
    var J = K.length;
    if (J > 0) {
      var ie = (a & vf) !== 0 && f === 0 ? e : null;
      if (o) {
        for (j = 0; j < J; j += 1) K[j].a?.measure();
        for (j = 0; j < J; j += 1) K[j].a?.fix();
      }
      gh(r, K, ie, c);
    }
  }
  o &&
    Nf(() => {
      if (h !== void 0) for (k of h) k.a?.apply();
    }),
    (Qe.first = r.first && r.first.e),
    (Qe.last = v && v.e);
}
function wh(t, r, e, n) {
  (n & n0) !== 0 && Ma(t.v, r), (n & a0) !== 0 ? Ma(t.i, e) : (t.i = e);
}
function Eh(t, r, e, n, a, i, s, o, l, f) {
  var c = (l & n0) !== 0,
    d = (l & Mu) === 0,
    u = c ? (d ? et(a, !1, !1) : Pa(a)) : a,
    p = (l & a0) === 0 ? s : Pa(s),
    v = { i: p, v: u, k: i, a: null, e: null, prev: e, next: n };
  try {
    return (
      (v.e = La(() => o(t, u, p, f), ju)),
      (v.e.prev = e && e.e),
      (v.e.next = n && n.e),
      e === null ? (r.first = v) : ((e.next = v), (e.e.next = v.e)),
      n !== null && ((n.prev = v), (n.e.prev = v.e)),
      v
    );
  } finally {
  }
}
function to(t, r, e) {
  for (
    var n = t.next ? t.next.e.nodes_start : e,
      a = r ? r.e.nodes_start : e,
      i = t.e.nodes_start;
    i !== n;

  ) {
    var s = qi(i);
    a.before(i), (i = s);
  }
}
function on(t, r, e) {
  r === null ? (t.first = e) : ((r.next = e), (r.e.next = e && e.e)),
    e !== null && ((e.prev = r), (e.e.prev = r && r.e));
}
function Th(t, r, e) {
  za(() => {
    var n = Ln(() => r(t, e?.()) || {});
    if (n?.destroy) return () => n.destroy();
  });
}
const ro = [
  ...` 	
\r\f \v\uFEFF`,
];
function yh(t, r, e) {
  var n = '' + t;
  if (e) {
    for (var a in e)
      if (e[a]) n = n ? n + ' ' + a : a;
      else if (n.length)
        for (var i = a.length, s = 0; (s = n.indexOf(a, s)) >= 0; ) {
          var o = s + i;
          (s === 0 || ro.includes(n[s - 1])) &&
          (o === n.length || ro.includes(n[o]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(o + 1))
            : (s = o);
        }
  }
  return n === '' ? null : n;
}
function $n(t, r, e, n, a, i) {
  var s = t.__className;
  if (s !== e || s === void 0) {
    var o = yh(e, n, i);
    o == null ? t.removeAttribute('class') : (t.className = o),
      (t.__className = e);
  } else if (i && a !== i)
    for (var l in i) {
      var f = !!i[l];
      (a == null || f !== !!a[l]) && t.classList.toggle(l, f);
    }
  return i;
}
function Bf(t, r, e) {
  if (t.multiple) {
    if (r == null) return;
    if (!$i(r)) return Vu();
    for (var n of t.options) n.selected = r.includes(Fa(n));
    return;
  }
  for (n of t.options) {
    var a = Fa(n);
    if (Hu(a, r)) {
      n.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function Sh(t) {
  var r = new MutationObserver(() => {
    Bf(t, t.__value);
  });
  r.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ['value'],
  }),
    Ji(() => {
      r.disconnect();
    });
}
function si(t, r, e = r) {
  var n = !0;
  Lf(t, 'change', (a) => {
    var i = a ? '[selected]' : ':checked',
      s;
    if (t.multiple) s = [].map.call(t.querySelectorAll(i), Fa);
    else {
      var o = t.querySelector(i) ?? t.querySelector('option:not([disabled])');
      s = o && Fa(o);
    }
    e(s);
  }),
    za(() => {
      var a = r();
      if ((Bf(t, a, n), n && a === void 0)) {
        var i = t.querySelector(':checked');
        i !== null && ((a = Fa(i)), e(a));
      }
      (t.__value = a), (n = !1);
    }),
    Sh(t);
}
function Fa(t) {
  return '__value' in t ? t.__value : t.value;
}
function ct(t, r, e = r) {
  var n = $a();
  Lf(t, 'input', (a) => {
    var i = a ? t.defaultValue : t.value;
    if (((i = ms(t) ? xs(i) : i), e(i), n && i !== (i = r()))) {
      var s = t.selectionStart,
        o = t.selectionEnd;
      (t.value = i ?? ''),
        o !== null &&
          ((t.selectionStart = s),
          (t.selectionEnd = Math.min(o, t.value.length)));
    }
  }),
    Ln(r) == null && t.value && e(ms(t) ? xs(t.value) : t.value),
    Sf(() => {
      var a = r();
      (ms(t) && a === xs(t.value)) ||
        (t.type === 'date' && !a && !t.value) ||
        (a !== t.value && (t.value = a ?? ''));
    });
}
function ms(t) {
  var r = t.type;
  return r === 'number' || r === 'range';
}
function xs(t) {
  return t === '' ? null : +t;
}
function Ah(t) {
  return function (...r) {
    var e = r[0];
    return e.preventDefault(), t?.apply(this, r);
  };
}
function Fh(t = !1) {
  const r = ht,
    e = r.l.u;
  if (!e) return;
  let n = () => fh(r.s);
  if (t) {
    let a = 0,
      i = {};
    const s = o0(() => {
      let o = !1;
      const l = r.s;
      for (const f in l) l[f] !== i[f] && ((i[f] = l[f]), (o = !0));
      return o && a++, a;
    });
    n = () => q(s);
  }
  e.b.length &&
    Ku(() => {
      no(r, n), Ei(e.b);
    }),
    Ms(() => {
      const a = Ln(() => e.m.map(yu));
      return () => {
        for (const i of a) typeof i == 'function' && i();
      };
    }),
    e.a.length &&
      Ms(() => {
        no(r, n), Ei(e.a);
      });
}
function no(t, r) {
  if (t.l.s) for (const e of t.l.s) q(e);
  r();
}
function d0(t, r, e) {
  if (t == null) return r(void 0), e && e(void 0), un;
  const n = Ln(() => t.subscribe(r, e));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const zn = [];
function Ch(t, r) {
  return { subscribe: Gr(t, r).subscribe };
}
function Gr(t, r = un) {
  let e = null;
  const n = new Set();
  function a(o) {
    if (df(t, o) && ((t = o), e)) {
      const l = !zn.length;
      for (const f of n) f[1](), zn.push(f, t);
      if (l) {
        for (let f = 0; f < zn.length; f += 2) zn[f][0](zn[f + 1]);
        zn.length = 0;
      }
    }
  }
  function i(o) {
    a(o(t));
  }
  function s(o, l = un) {
    const f = [o, l];
    return (
      n.add(f),
      n.size === 1 && (e = r(a, i) || un),
      o(t),
      () => {
        n.delete(f), n.size === 0 && e && (e(), (e = null));
      }
    );
  }
  return { set: a, update: i, subscribe: s };
}
function Dh(t, r, e) {
  const n = !Array.isArray(t),
    a = n ? [t] : t;
  if (!a.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const i = r.length < 2;
  return Ch(e, (s, o) => {
    let l = !1;
    const f = [];
    let c = 0,
      d = un;
    const u = () => {
        if (c) return;
        d();
        const v = r(n ? f[0] : f, s, o);
        i ? s(v) : (d = typeof v == 'function' ? v : un);
      },
      p = a.map((v, h) =>
        d0(
          v,
          (x) => {
            (f[h] = x), (c &= ~(1 << h)), l && u();
          },
          () => {
            c |= 1 << h;
          },
        ),
      );
    return (
      (l = !0),
      u(),
      function () {
        Ei(p), d(), (l = !1);
      }
    );
  });
}
function Oh(t) {
  let r;
  return d0(t, (e) => (r = e))(), r;
}
let Hs = Symbol();
function Vr(t, r, e) {
  const n = (e[r] ??= { store: null, source: et(void 0), unsubscribe: un });
  if (n.store !== t && !(Hs in e))
    if ((n.unsubscribe(), (n.store = t ?? null), t == null))
      (n.source.v = void 0), (n.unsubscribe = un);
    else {
      var a = !0;
      (n.unsubscribe = d0(t, (i) => {
        a ? (n.source.v = i) : ve(n.source, i);
      })),
        (a = !1);
    }
  return t && Hs in e ? Oh(t) : q(n.source);
}
function Nh(t, r) {
  return t.set(r), r;
}
function Rh() {
  const t = {};
  function r() {
    Ji(() => {
      for (var e in t) t[e].unsubscribe();
      of(t, Hs, { enumerable: !1, value: !0 });
    });
  }
  return [t, r];
}
function Uf(t) {
  ht === null && Uu(),
    Ka && ht.l !== null
      ? kh(ht).m.push(t)
      : Ms(() => {
          const r = Ln(t);
          if (typeof r == 'function') return r;
        });
}
function kh(t) {
  var r = t.l;
  return (r.u ??= { a: [], b: [], m: [] });
}
const Ih = '5';
typeof window < 'u' && ((window.__svelte ??= {}).v ??= new Set()).add(Ih);
bu();
function Hf(t, r) {
  return function () {
    return t.apply(r, arguments);
  };
}
const { toString: bh } = Object.prototype,
  { getPrototypeOf: p0 } = Object,
  { iterator: Qi, toStringTag: Wf } = Symbol,
  es = ((t) => (r) => {
    const e = bh.call(r);
    return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Or = (t) => ((t = t.toLowerCase()), (r) => es(r) === t),
  ts = (t) => (r) => typeof r === t,
  { isArray: ua } = Array,
  Ba = ts('undefined');
function Ph(t) {
  return (
    t !== null &&
    !Ba(t) &&
    t.constructor !== null &&
    !Ba(t.constructor) &&
    zt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Vf = Or('ArrayBuffer');
function Mh(t) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(t))
      : (r = t && t.buffer && Vf(t.buffer)),
    r
  );
}
const Lh = ts('string'),
  zt = ts('function'),
  jf = ts('number'),
  rs = (t) => t !== null && typeof t == 'object',
  Bh = (t) => t === !0 || t === !1,
  gi = (t) => {
    if (es(t) !== 'object') return !1;
    const r = p0(t);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Wf in t) &&
      !(Qi in t)
    );
  },
  Uh = Or('Date'),
  Hh = Or('File'),
  Wh = Or('Blob'),
  Vh = Or('FileList'),
  jh = (t) => rs(t) && zt(t.pipe),
  Gh = (t) => {
    let r;
    return (
      t &&
      ((typeof FormData == 'function' && t instanceof FormData) ||
        (zt(t.append) &&
          ((r = es(t)) === 'formdata' ||
            (r === 'object' &&
              zt(t.toString) &&
              t.toString() === '[object FormData]'))))
    );
  },
  Yh = Or('URLSearchParams'),
  [Xh, Kh, $h, zh] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Or,
  ),
  qh = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function qa(t, r, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > 'u') return;
  let n, a;
  if ((typeof t != 'object' && (t = [t]), ua(t)))
    for (n = 0, a = t.length; n < a; n++) r.call(null, t[n], n, t);
  else {
    const i = e ? Object.getOwnPropertyNames(t) : Object.keys(t),
      s = i.length;
    let o;
    for (n = 0; n < s; n++) (o = i[n]), r.call(null, t[o], o, t);
  }
}
function Gf(t, r) {
  r = r.toLowerCase();
  const e = Object.keys(t);
  let n = e.length,
    a;
  for (; n-- > 0; ) if (((a = e[n]), r === a.toLowerCase())) return a;
  return null;
}
const Cn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Yf = (t) => !Ba(t) && t !== Cn;
function Ws() {
  const { caseless: t } = (Yf(this) && this) || {},
    r = {},
    e = (n, a) => {
      const i = (t && Gf(r, a)) || a;
      gi(r[i]) && gi(n)
        ? (r[i] = Ws(r[i], n))
        : gi(n)
          ? (r[i] = Ws({}, n))
          : ua(n)
            ? (r[i] = n.slice())
            : (r[i] = n);
    };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && qa(arguments[n], e);
  return r;
}
const Jh = (t, r, e, { allOwnKeys: n } = {}) => (
    qa(
      r,
      (a, i) => {
        e && zt(a) ? (t[i] = Hf(a, e)) : (t[i] = a);
      },
      { allOwnKeys: n },
    ),
    t
  ),
  Zh = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  Qh = (t, r, e, n) => {
    (t.prototype = Object.create(r.prototype, n)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, 'super', { value: r.prototype }),
      e && Object.assign(t.prototype, e);
  },
  e1 = (t, r, e, n) => {
    let a, i, s;
    const o = {};
    if (((r = r || {}), t == null)) return r;
    do {
      for (a = Object.getOwnPropertyNames(t), i = a.length; i-- > 0; )
        (s = a[i]), (!n || n(s, t, r)) && !o[s] && ((r[s] = t[s]), (o[s] = !0));
      t = e !== !1 && p0(t);
    } while (t && (!e || e(t, r)) && t !== Object.prototype);
    return r;
  },
  t1 = (t, r, e) => {
    (t = String(t)),
      (e === void 0 || e > t.length) && (e = t.length),
      (e -= r.length);
    const n = t.indexOf(r, e);
    return n !== -1 && n === e;
  },
  r1 = (t) => {
    if (!t) return null;
    if (ua(t)) return t;
    let r = t.length;
    if (!jf(r)) return null;
    const e = new Array(r);
    for (; r-- > 0; ) e[r] = t[r];
    return e;
  },
  n1 = (
    (t) => (r) =>
      t && r instanceof t
  )(typeof Uint8Array < 'u' && p0(Uint8Array)),
  a1 = (t, r) => {
    const n = (t && t[Qi]).call(t);
    let a;
    for (; (a = n.next()) && !a.done; ) {
      const i = a.value;
      r.call(t, i[0], i[1]);
    }
  },
  i1 = (t, r) => {
    let e;
    const n = [];
    for (; (e = t.exec(r)) !== null; ) n.push(e);
    return n;
  },
  s1 = Or('HTMLFormElement'),
  o1 = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, a) {
      return n.toUpperCase() + a;
    }),
  ao = (
    ({ hasOwnProperty: t }) =>
    (r, e) =>
      t.call(r, e)
  )(Object.prototype),
  f1 = Or('RegExp'),
  Xf = (t, r) => {
    const e = Object.getOwnPropertyDescriptors(t),
      n = {};
    qa(e, (a, i) => {
      let s;
      (s = r(a, i, t)) !== !1 && (n[i] = s || a);
    }),
      Object.defineProperties(t, n);
  },
  l1 = (t) => {
    Xf(t, (r, e) => {
      if (zt(t) && ['arguments', 'caller', 'callee'].indexOf(e) !== -1)
        return !1;
      const n = t[e];
      if (zt(n)) {
        if (((r.enumerable = !1), 'writable' in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + e + "'");
          });
      }
    });
  },
  c1 = (t, r) => {
    const e = {},
      n = (a) => {
        a.forEach((i) => {
          e[i] = !0;
        });
      };
    return ua(t) ? n(t) : n(String(t).split(r)), e;
  },
  u1 = () => {},
  h1 = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r);
function d1(t) {
  return !!(t && zt(t.append) && t[Wf] === 'FormData' && t[Qi]);
}
const p1 = (t) => {
    const r = new Array(10),
      e = (n, a) => {
        if (rs(n)) {
          if (r.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            r[a] = n;
            const i = ua(n) ? [] : {};
            return (
              qa(n, (s, o) => {
                const l = e(s, a + 1);
                !Ba(l) && (i[o] = l);
              }),
              (r[a] = void 0),
              i
            );
          }
        }
        return n;
      };
    return e(t, 0);
  },
  v1 = Or('AsyncFunction'),
  m1 = (t) => t && (rs(t) || zt(t)) && zt(t.then) && zt(t.catch),
  Kf = ((t, r) =>
    t
      ? setImmediate
      : r
        ? ((e, n) => (
            Cn.addEventListener(
              'message',
              ({ source: a, data: i }) => {
                a === Cn && i === e && n.length && n.shift()();
              },
              !1,
            ),
            (a) => {
              n.push(a), Cn.postMessage(e, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == 'function',
    zt(Cn.postMessage),
  ),
  x1 =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Cn)
      : (typeof process < 'u' && process.nextTick) || Kf,
  g1 = (t) => t != null && zt(t[Qi]),
  V = {
    isArray: ua,
    isArrayBuffer: Vf,
    isBuffer: Ph,
    isFormData: Gh,
    isArrayBufferView: Mh,
    isString: Lh,
    isNumber: jf,
    isBoolean: Bh,
    isObject: rs,
    isPlainObject: gi,
    isReadableStream: Xh,
    isRequest: Kh,
    isResponse: $h,
    isHeaders: zh,
    isUndefined: Ba,
    isDate: Uh,
    isFile: Hh,
    isBlob: Wh,
    isRegExp: f1,
    isFunction: zt,
    isStream: jh,
    isURLSearchParams: Yh,
    isTypedArray: n1,
    isFileList: Vh,
    forEach: qa,
    merge: Ws,
    extend: Jh,
    trim: qh,
    stripBOM: Zh,
    inherits: Qh,
    toFlatObject: e1,
    kindOf: es,
    kindOfTest: Or,
    endsWith: t1,
    toArray: r1,
    forEachEntry: a1,
    matchAll: i1,
    isHTMLForm: s1,
    hasOwnProperty: ao,
    hasOwnProp: ao,
    reduceDescriptors: Xf,
    freezeMethods: l1,
    toObjectSet: c1,
    toCamelCase: o1,
    noop: u1,
    toFiniteNumber: h1,
    findKey: Gf,
    global: Cn,
    isContextDefined: Yf,
    isSpecCompliantForm: d1,
    toJSONObject: p1,
    isAsyncFn: v1,
    isThenable: m1,
    setImmediate: Kf,
    asap: x1,
    isIterable: g1,
  };
function Re(t, r, e, n, a) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = 'AxiosError'),
    r && (this.code = r),
    e && (this.config = e),
    n && (this.request = n),
    a && ((this.response = a), (this.status = a.status ? a.status : null));
}
V.inherits(Re, Error, {
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
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const $f = Re.prototype,
  zf = {};
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
].forEach((t) => {
  zf[t] = { value: t };
});
Object.defineProperties(Re, zf);
Object.defineProperty($f, 'isAxiosError', { value: !0 });
Re.from = (t, r, e, n, a, i) => {
  const s = Object.create($f);
  return (
    V.toFlatObject(
      t,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (o) => o !== 'isAxiosError',
    ),
    Re.call(s, t.message, r, e, n, a),
    (s.cause = t),
    (s.name = t.name),
    i && Object.assign(s, i),
    s
  );
};
const _1 = null;
function Vs(t) {
  return V.isPlainObject(t) || V.isArray(t);
}
function qf(t) {
  return V.endsWith(t, '[]') ? t.slice(0, -2) : t;
}
function io(t, r, e) {
  return t
    ? t
        .concat(r)
        .map(function (a, i) {
          return (a = qf(a)), !e && i ? '[' + a + ']' : a;
        })
        .join(e ? '.' : '')
    : r;
}
function w1(t) {
  return V.isArray(t) && !t.some(Vs);
}
const E1 = V.toFlatObject(V, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function ns(t, r, e) {
  if (!V.isObject(t)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (e = V.toFlatObject(
      e,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, x) {
        return !V.isUndefined(x[h]);
      },
    ));
  const n = e.metaTokens,
    a = e.visitor || c,
    i = e.dots,
    s = e.indexes,
    l = (e.Blob || (typeof Blob < 'u' && Blob)) && V.isSpecCompliantForm(r);
  if (!V.isFunction(a)) throw new TypeError('visitor must be a function');
  function f(v) {
    if (v === null) return '';
    if (V.isDate(v)) return v.toISOString();
    if (V.isBoolean(v)) return v.toString();
    if (!l && V.isBlob(v))
      throw new Re('Blob is not supported. Use a Buffer instead.');
    return V.isArrayBuffer(v) || V.isTypedArray(v)
      ? l && typeof Blob == 'function'
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, h, x) {
    let D = v;
    if (v && !x && typeof v == 'object') {
      if (V.endsWith(h, '{}'))
        (h = n ? h : h.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (V.isArray(v) && w1(v)) ||
        ((V.isFileList(v) || V.endsWith(h, '[]')) && (D = V.toArray(v)))
      )
        return (
          (h = qf(h)),
          D.forEach(function (F, k) {
            !(V.isUndefined(F) || F === null) &&
              r.append(
                s === !0 ? io([h], k, i) : s === null ? h : h + '[]',
                f(F),
              );
          }),
          !1
        );
    }
    return Vs(v) ? !0 : (r.append(io(x, h, i), f(v)), !1);
  }
  const d = [],
    u = Object.assign(E1, {
      defaultVisitor: c,
      convertValue: f,
      isVisitable: Vs,
    });
  function p(v, h) {
    if (!V.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error('Circular reference detected in ' + h.join('.'));
      d.push(v),
        V.forEach(v, function (D, C) {
          (!(V.isUndefined(D) || D === null) &&
            a.call(r, D, V.isString(C) ? C.trim() : C, h, u)) === !0 &&
            p(D, h ? h.concat(C) : [C]);
        }),
        d.pop();
    }
  }
  if (!V.isObject(t)) throw new TypeError('data must be an object');
  return p(t), r;
}
function so(t) {
  const r = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (n) {
    return r[n];
  });
}
function v0(t, r) {
  (this._pairs = []), t && ns(t, this, r);
}
const Jf = v0.prototype;
Jf.append = function (r, e) {
  this._pairs.push([r, e]);
};
Jf.toString = function (r) {
  const e = r
    ? function (n) {
        return r.call(this, n, so);
      }
    : so;
  return this._pairs
    .map(function (a) {
      return e(a[0]) + '=' + e(a[1]);
    }, '')
    .join('&');
};
function T1(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Zf(t, r, e) {
  if (!r) return t;
  const n = (e && e.encode) || T1;
  V.isFunction(e) && (e = { serialize: e });
  const a = e && e.serialize;
  let i;
  if (
    (a
      ? (i = a(r, e))
      : (i = V.isURLSearchParams(r) ? r.toString() : new v0(r, e).toString(n)),
    i)
  ) {
    const s = t.indexOf('#');
    s !== -1 && (t = t.slice(0, s)),
      (t += (t.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return t;
}
class oo {
  constructor() {
    this.handlers = [];
  }
  use(r, e, n) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: e,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    V.forEach(this.handlers, function (n) {
      n !== null && r(n);
    });
  }
}
const Qf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  y1 = typeof URLSearchParams < 'u' ? URLSearchParams : v0,
  S1 = typeof FormData < 'u' ? FormData : null,
  A1 = typeof Blob < 'u' ? Blob : null,
  F1 = {
    isBrowser: !0,
    classes: { URLSearchParams: y1, FormData: S1, Blob: A1 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  m0 = typeof window < 'u' && typeof document < 'u',
  js = (typeof navigator == 'object' && navigator) || void 0,
  C1 =
    m0 &&
    (!js || ['ReactNative', 'NativeScript', 'NS'].indexOf(js.product) < 0),
  D1 =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  O1 = (m0 && window.location.href) || 'http://localhost',
  N1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: m0,
        hasStandardBrowserEnv: C1,
        hasStandardBrowserWebWorkerEnv: D1,
        navigator: js,
        origin: O1,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Lt = { ...N1, ...F1 };
function R1(t, r) {
  return ns(
    t,
    new Lt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (e, n, a, i) {
          return Lt.isNode && V.isBuffer(e)
            ? (this.append(n, e.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function k1(t) {
  return V.matchAll(/\w+|\[(\w*)]/g, t).map((r) =>
    r[0] === '[]' ? '' : r[1] || r[0],
  );
}
function I1(t) {
  const r = {},
    e = Object.keys(t);
  let n;
  const a = e.length;
  let i;
  for (n = 0; n < a; n++) (i = e[n]), (r[i] = t[i]);
  return r;
}
function el(t) {
  function r(e, n, a, i) {
    let s = e[i++];
    if (s === '__proto__') return !0;
    const o = Number.isFinite(+s),
      l = i >= e.length;
    return (
      (s = !s && V.isArray(a) ? a.length : s),
      l
        ? (V.hasOwnProp(a, s) ? (a[s] = [a[s], n]) : (a[s] = n), !o)
        : ((!a[s] || !V.isObject(a[s])) && (a[s] = []),
          r(e, n, a[s], i) && V.isArray(a[s]) && (a[s] = I1(a[s])),
          !o)
    );
  }
  if (V.isFormData(t) && V.isFunction(t.entries)) {
    const e = {};
    return (
      V.forEachEntry(t, (n, a) => {
        r(k1(n), a, e, 0);
      }),
      e
    );
  }
  return null;
}
function b1(t, r, e) {
  if (V.isString(t))
    try {
      return (r || JSON.parse)(t), V.trim(t);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (e || JSON.stringify)(t);
}
const Ja = {
  transitional: Qf,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, e) {
      const n = e.getContentType() || '',
        a = n.indexOf('application/json') > -1,
        i = V.isObject(r);
      if ((i && V.isHTMLForm(r) && (r = new FormData(r)), V.isFormData(r)))
        return a ? JSON.stringify(el(r)) : r;
      if (
        V.isArrayBuffer(r) ||
        V.isBuffer(r) ||
        V.isStream(r) ||
        V.isFile(r) ||
        V.isBlob(r) ||
        V.isReadableStream(r)
      )
        return r;
      if (V.isArrayBufferView(r)) return r.buffer;
      if (V.isURLSearchParams(r))
        return (
          e.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          r.toString()
        );
      let o;
      if (i) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return R1(r, this.formSerializer).toString();
        if ((o = V.isFileList(r)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return ns(
            o ? { 'files[]': r } : r,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return i || a ? (e.setContentType('application/json', !1), b1(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const e = this.transitional || Ja.transitional,
        n = e && e.forcedJSONParsing,
        a = this.responseType === 'json';
      if (V.isResponse(r) || V.isReadableStream(r)) return r;
      if (r && V.isString(r) && ((n && !this.responseType) || a)) {
        const s = !(e && e.silentJSONParsing) && a;
        try {
          return JSON.parse(r);
        } catch (o) {
          if (s)
            throw o.name === 'SyntaxError'
              ? Re.from(o, Re.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Lt.classes.FormData, Blob: Lt.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
V.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (t) => {
  Ja.headers[t] = {};
});
const P1 = V.toObjectSet([
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
  M1 = (t) => {
    const r = {};
    let e, n, a;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (s) {
            (a = s.indexOf(':')),
              (e = s.substring(0, a).trim().toLowerCase()),
              (n = s.substring(a + 1).trim()),
              !(!e || (r[e] && P1[e])) &&
                (e === 'set-cookie'
                  ? r[e]
                    ? r[e].push(n)
                    : (r[e] = [n])
                  : (r[e] = r[e] ? r[e] + ', ' + n : n));
          }),
      r
    );
  },
  fo = Symbol('internals');
function wa(t) {
  return t && String(t).trim().toLowerCase();
}
function _i(t) {
  return t === !1 || t == null ? t : V.isArray(t) ? t.map(_i) : String(t);
}
function L1(t) {
  const r = Object.create(null),
    e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = e.exec(t)); ) r[n[1]] = n[2];
  return r;
}
const B1 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function gs(t, r, e, n, a) {
  if (V.isFunction(n)) return n.call(this, r, e);
  if ((a && (r = e), !!V.isString(r))) {
    if (V.isString(n)) return r.indexOf(n) !== -1;
    if (V.isRegExp(n)) return n.test(r);
  }
}
function U1(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, e, n) => e.toUpperCase() + n);
}
function H1(t, r) {
  const e = V.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(t, n + e, {
      value: function (a, i, s) {
        return this[n].call(this, r, a, i, s);
      },
      configurable: !0,
    });
  });
}
let qt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, n) {
    const a = this;
    function i(o, l, f) {
      const c = wa(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const d = V.findKey(a, c);
      (!d || a[d] === void 0 || f === !0 || (f === void 0 && a[d] !== !1)) &&
        (a[d || l] = _i(o));
    }
    const s = (o, l) => V.forEach(o, (f, c) => i(f, c, l));
    if (V.isPlainObject(r) || r instanceof this.constructor) s(r, e);
    else if (V.isString(r) && (r = r.trim()) && !B1(r)) s(M1(r), e);
    else if (V.isObject(r) && V.isIterable(r)) {
      let o = {},
        l,
        f;
      for (const c of r) {
        if (!V.isArray(c))
          throw TypeError('Object iterator must return a key-value pair');
        o[(f = c[0])] = (l = o[f])
          ? V.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(o, e);
    } else r != null && i(e, r, n);
    return this;
  }
  get(r, e) {
    if (((r = wa(r)), r)) {
      const n = V.findKey(this, r);
      if (n) {
        const a = this[n];
        if (!e) return a;
        if (e === !0) return L1(a);
        if (V.isFunction(e)) return e.call(this, a, n);
        if (V.isRegExp(e)) return e.exec(a);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, e) {
    if (((r = wa(r)), r)) {
      const n = V.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!e || gs(this, this[n], n, e)));
    }
    return !1;
  }
  delete(r, e) {
    const n = this;
    let a = !1;
    function i(s) {
      if (((s = wa(s)), s)) {
        const o = V.findKey(n, s);
        o && (!e || gs(n, n[o], o, e)) && (delete n[o], (a = !0));
      }
    }
    return V.isArray(r) ? r.forEach(i) : i(r), a;
  }
  clear(r) {
    const e = Object.keys(this);
    let n = e.length,
      a = !1;
    for (; n--; ) {
      const i = e[n];
      (!r || gs(this, this[i], i, r, !0)) && (delete this[i], (a = !0));
    }
    return a;
  }
  normalize(r) {
    const e = this,
      n = {};
    return (
      V.forEach(this, (a, i) => {
        const s = V.findKey(n, i);
        if (s) {
          (e[s] = _i(a)), delete e[i];
          return;
        }
        const o = r ? U1(i) : String(i).trim();
        o !== i && delete e[i], (e[o] = _i(a)), (n[o] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const e = Object.create(null);
    return (
      V.forEach(this, (n, a) => {
        n != null && n !== !1 && (e[a] = r && V.isArray(n) ? n.join(', ') : n);
      }),
      e
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, e]) => r + ': ' + e).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...e) {
    const n = new this(r);
    return e.forEach((a) => n.set(a)), n;
  }
  static accessor(r) {
    const n = (this[fo] = this[fo] = { accessors: {} }).accessors,
      a = this.prototype;
    function i(s) {
      const o = wa(s);
      n[o] || (H1(a, s), (n[o] = !0));
    }
    return V.isArray(r) ? r.forEach(i) : i(r), this;
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
V.reduceDescriptors(qt.prototype, ({ value: t }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(n) {
      this[e] = n;
    },
  };
});
V.freezeMethods(qt);
function _s(t, r) {
  const e = this || Ja,
    n = r || e,
    a = qt.from(n.headers);
  let i = n.data;
  return (
    V.forEach(t, function (o) {
      i = o.call(e, i, a.normalize(), r ? r.status : void 0);
    }),
    a.normalize(),
    i
  );
}
function tl(t) {
  return !!(t && t.__CANCEL__);
}
function ha(t, r, e) {
  Re.call(this, t ?? 'canceled', Re.ERR_CANCELED, r, e),
    (this.name = 'CanceledError');
}
V.inherits(ha, Re, { __CANCEL__: !0 });
function rl(t, r, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status)
    ? t(e)
    : r(
        new Re(
          'Request failed with status code ' + e.status,
          [Re.ERR_BAD_REQUEST, Re.ERR_BAD_RESPONSE][
            Math.floor(e.status / 100) - 4
          ],
          e.config,
          e.request,
          e,
        ),
      );
}
function W1(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (r && r[1]) || '';
}
function V1(t, r) {
  t = t || 10;
  const e = new Array(t),
    n = new Array(t);
  let a = 0,
    i = 0,
    s;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (l) {
      const f = Date.now(),
        c = n[i];
      s || (s = f), (e[a] = l), (n[a] = f);
      let d = i,
        u = 0;
      for (; d !== a; ) (u += e[d++]), (d = d % t);
      if (((a = (a + 1) % t), a === i && (i = (i + 1) % t), f - s < r)) return;
      const p = c && f - c;
      return p ? Math.round((u * 1e3) / p) : void 0;
    }
  );
}
function j1(t, r) {
  let e = 0,
    n = 1e3 / r,
    a,
    i;
  const s = (f, c = Date.now()) => {
    (e = c), (a = null), i && (clearTimeout(i), (i = null)), t.apply(null, f);
  };
  return [
    (...f) => {
      const c = Date.now(),
        d = c - e;
      d >= n
        ? s(f, c)
        : ((a = f),
          i ||
            (i = setTimeout(() => {
              (i = null), s(a);
            }, n - d)));
    },
    () => a && s(a),
  ];
}
const Ni = (t, r, e = 3) => {
    let n = 0;
    const a = V1(50, 250);
    return j1((i) => {
      const s = i.loaded,
        o = i.lengthComputable ? i.total : void 0,
        l = s - n,
        f = a(l),
        c = s <= o;
      n = s;
      const d = {
        loaded: s,
        total: o,
        progress: o ? s / o : void 0,
        bytes: l,
        rate: f || void 0,
        estimated: f && o && c ? (o - s) / f : void 0,
        event: i,
        lengthComputable: o != null,
        [r ? 'download' : 'upload']: !0,
      };
      t(d);
    }, e);
  },
  lo = (t, r) => {
    const e = t != null;
    return [(n) => r[0]({ lengthComputable: e, total: t, loaded: n }), r[1]];
  },
  co =
    (t) =>
    (...r) =>
      V.asap(() => t(...r)),
  G1 = Lt.hasStandardBrowserEnv
    ? ((t, r) => (e) => (
        (e = new URL(e, Lt.origin)),
        t.protocol === e.protocol &&
          t.host === e.host &&
          (r || t.port === e.port)
      ))(
        new URL(Lt.origin),
        Lt.navigator && /(msie|trident)/i.test(Lt.navigator.userAgent),
      )
    : () => !0,
  Y1 = Lt.hasStandardBrowserEnv
    ? {
        write(t, r, e, n, a, i) {
          const s = [t + '=' + encodeURIComponent(r)];
          V.isNumber(e) && s.push('expires=' + new Date(e).toGMTString()),
            V.isString(n) && s.push('path=' + n),
            V.isString(a) && s.push('domain=' + a),
            i === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(t) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(t) {
          this.write(t, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function X1(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function K1(t, r) {
  return r ? t.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : t;
}
function nl(t, r, e) {
  let n = !X1(r);
  return t && (n || e == !1) ? K1(t, r) : r;
}
const uo = (t) => (t instanceof qt ? { ...t } : t);
function kn(t, r) {
  r = r || {};
  const e = {};
  function n(f, c, d, u) {
    return V.isPlainObject(f) && V.isPlainObject(c)
      ? V.merge.call({ caseless: u }, f, c)
      : V.isPlainObject(c)
        ? V.merge({}, c)
        : V.isArray(c)
          ? c.slice()
          : c;
  }
  function a(f, c, d, u) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f)) return n(void 0, f, d, u);
    } else return n(f, c, d, u);
  }
  function i(f, c) {
    if (!V.isUndefined(c)) return n(void 0, c);
  }
  function s(f, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f)) return n(void 0, f);
    } else return n(void 0, c);
  }
  function o(f, c, d) {
    if (d in r) return n(f, c);
    if (d in t) return n(void 0, f);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: o,
    headers: (f, c, d) => a(uo(f), uo(c), d, !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, t, r)), function (c) {
      const d = l[c] || a,
        u = d(t[c], r[c], c);
      (V.isUndefined(u) && d !== o) || (e[c] = u);
    }),
    e
  );
}
const al = (t) => {
    const r = kn({}, t);
    let {
      data: e,
      withXSRFToken: n,
      xsrfHeaderName: a,
      xsrfCookieName: i,
      headers: s,
      auth: o,
    } = r;
    (r.headers = s = qt.from(s)),
      (r.url = Zf(
        nl(r.baseURL, r.url, r.allowAbsoluteUrls),
        t.params,
        t.paramsSerializer,
      )),
      o &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (o.username || '') +
                ':' +
                (o.password ? unescape(encodeURIComponent(o.password)) : ''),
            ),
        );
    let l;
    if (V.isFormData(e)) {
      if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [f, ...c] = l
          ? l
              .split(';')
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([f || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      Lt.hasStandardBrowserEnv &&
      (n && V.isFunction(n) && (n = n(r)), n || (n !== !1 && G1(r.url)))
    ) {
      const f = a && i && Y1.read(i);
      f && s.set(a, f);
    }
    return r;
  },
  $1 = typeof XMLHttpRequest < 'u',
  z1 =
    $1 &&
    function (t) {
      return new Promise(function (e, n) {
        const a = al(t);
        let i = a.data;
        const s = qt.from(a.headers).normalize();
        let { responseType: o, onUploadProgress: l, onDownloadProgress: f } = a,
          c,
          d,
          u,
          p,
          v;
        function h() {
          p && p(),
            v && v(),
            a.cancelToken && a.cancelToken.unsubscribe(c),
            a.signal && a.signal.removeEventListener('abort', c);
        }
        let x = new XMLHttpRequest();
        x.open(a.method.toUpperCase(), a.url, !0), (x.timeout = a.timeout);
        function D() {
          if (!x) return;
          const F = qt.from(
              'getAllResponseHeaders' in x && x.getAllResponseHeaders(),
            ),
            j = {
              data:
                !o || o === 'text' || o === 'json'
                  ? x.responseText
                  : x.response,
              status: x.status,
              statusText: x.statusText,
              headers: F,
              config: t,
              request: x,
            };
          rl(
            function (R) {
              e(R), h();
            },
            function (R) {
              n(R), h();
            },
            j,
          ),
            (x = null);
        }
        'onloadend' in x
          ? (x.onloadend = D)
          : (x.onreadystatechange = function () {
              !x ||
                x.readyState !== 4 ||
                (x.status === 0 &&
                  !(x.responseURL && x.responseURL.indexOf('file:') === 0)) ||
                setTimeout(D);
            }),
          (x.onabort = function () {
            x &&
              (n(new Re('Request aborted', Re.ECONNABORTED, t, x)), (x = null));
          }),
          (x.onerror = function () {
            n(new Re('Network Error', Re.ERR_NETWORK, t, x)), (x = null);
          }),
          (x.ontimeout = function () {
            let k = a.timeout
              ? 'timeout of ' + a.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const j = a.transitional || Qf;
            a.timeoutErrorMessage && (k = a.timeoutErrorMessage),
              n(
                new Re(
                  k,
                  j.clarifyTimeoutError ? Re.ETIMEDOUT : Re.ECONNABORTED,
                  t,
                  x,
                ),
              ),
              (x = null);
          }),
          i === void 0 && s.setContentType(null),
          'setRequestHeader' in x &&
            V.forEach(s.toJSON(), function (k, j) {
              x.setRequestHeader(j, k);
            }),
          V.isUndefined(a.withCredentials) ||
            (x.withCredentials = !!a.withCredentials),
          o && o !== 'json' && (x.responseType = a.responseType),
          f && (([u, v] = Ni(f, !0)), x.addEventListener('progress', u)),
          l &&
            x.upload &&
            (([d, p] = Ni(l)),
            x.upload.addEventListener('progress', d),
            x.upload.addEventListener('loadend', p)),
          (a.cancelToken || a.signal) &&
            ((c = (F) => {
              x &&
                (n(!F || F.type ? new ha(null, t, x) : F),
                x.abort(),
                (x = null));
            }),
            a.cancelToken && a.cancelToken.subscribe(c),
            a.signal &&
              (a.signal.aborted ? c() : a.signal.addEventListener('abort', c)));
        const C = W1(a.url);
        if (C && Lt.protocols.indexOf(C) === -1) {
          n(new Re('Unsupported protocol ' + C + ':', Re.ERR_BAD_REQUEST, t));
          return;
        }
        x.send(i || null);
      });
    },
  q1 = (t, r) => {
    const { length: e } = (t = t ? t.filter(Boolean) : []);
    if (r || e) {
      let n = new AbortController(),
        a;
      const i = function (f) {
        if (!a) {
          (a = !0), o();
          const c = f instanceof Error ? f : this.reason;
          n.abort(
            c instanceof Re ? c : new ha(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        r &&
        setTimeout(() => {
          (s = null), i(new Re(`timeout ${r} of ms exceeded`, Re.ETIMEDOUT));
        }, r);
      const o = () => {
        t &&
          (s && clearTimeout(s),
          (s = null),
          t.forEach((f) => {
            f.unsubscribe
              ? f.unsubscribe(i)
              : f.removeEventListener('abort', i);
          }),
          (t = null));
      };
      t.forEach((f) => f.addEventListener('abort', i));
      const { signal: l } = n;
      return (l.unsubscribe = () => V.asap(o)), l;
    }
  },
  J1 = function* (t, r) {
    let e = t.byteLength;
    if (e < r) {
      yield t;
      return;
    }
    let n = 0,
      a;
    for (; n < e; ) (a = n + r), yield t.slice(n, a), (n = a);
  },
  Z1 = async function* (t, r) {
    for await (const e of Q1(t)) yield* J1(e, r);
  },
  Q1 = async function* (t) {
    if (t[Symbol.asyncIterator]) {
      yield* t;
      return;
    }
    const r = t.getReader();
    try {
      for (;;) {
        const { done: e, value: n } = await r.read();
        if (e) break;
        yield n;
      }
    } finally {
      await r.cancel();
    }
  },
  ho = (t, r, e, n) => {
    const a = Z1(t, r);
    let i = 0,
      s,
      o = (l) => {
        s || ((s = !0), n && n(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: f, value: c } = await a.next();
            if (f) {
              o(), l.close();
              return;
            }
            let d = c.byteLength;
            if (e) {
              let u = (i += d);
              e(u);
            }
            l.enqueue(new Uint8Array(c));
          } catch (f) {
            throw (o(f), f);
          }
        },
        cancel(l) {
          return o(l), a.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  as =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  il = as && typeof ReadableStream == 'function',
  ed =
    as &&
    (typeof TextEncoder == 'function'
      ? (
          (t) => (r) =>
            t.encode(r)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  sl = (t, ...r) => {
    try {
      return !!t(...r);
    } catch {
      return !1;
    }
  },
  td =
    il &&
    sl(() => {
      let t = !1;
      const r = new Request(Lt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (t = !0), 'half';
        },
      }).headers.has('Content-Type');
      return t && !r;
    }),
  po = 64 * 1024,
  Gs = il && sl(() => V.isReadableStream(new Response('').body)),
  Ri = { stream: Gs && ((t) => t.body) };
as &&
  ((t) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !Ri[r] &&
        (Ri[r] = V.isFunction(t[r])
          ? (e) => e[r]()
          : (e, n) => {
              throw new Re(
                `Response type '${r}' is not supported`,
                Re.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const rd = async (t) => {
    if (t == null) return 0;
    if (V.isBlob(t)) return t.size;
    if (V.isSpecCompliantForm(t))
      return (
        await new Request(Lt.origin, { method: 'POST', body: t }).arrayBuffer()
      ).byteLength;
    if (V.isArrayBufferView(t) || V.isArrayBuffer(t)) return t.byteLength;
    if ((V.isURLSearchParams(t) && (t = t + ''), V.isString(t)))
      return (await ed(t)).byteLength;
  },
  nd = async (t, r) => {
    const e = V.toFiniteNumber(t.getContentLength());
    return e ?? rd(r);
  },
  ad =
    as &&
    (async (t) => {
      let {
        url: r,
        method: e,
        data: n,
        signal: a,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: o,
        onUploadProgress: l,
        responseType: f,
        headers: c,
        withCredentials: d = 'same-origin',
        fetchOptions: u,
      } = al(t);
      f = f ? (f + '').toLowerCase() : 'text';
      let p = q1([a, i && i.toAbortSignal()], s),
        v;
      const h =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let x;
      try {
        if (
          l &&
          td &&
          e !== 'get' &&
          e !== 'head' &&
          (x = await nd(c, n)) !== 0
        ) {
          let j = new Request(r, { method: 'POST', body: n, duplex: 'half' }),
            te;
          if (
            (V.isFormData(n) &&
              (te = j.headers.get('content-type')) &&
              c.setContentType(te),
            j.body)
          ) {
            const [R, H] = lo(x, Ni(co(l)));
            n = ho(j.body, po, R, H);
          }
        }
        V.isString(d) || (d = d ? 'include' : 'omit');
        const D = 'credentials' in Request.prototype;
        v = new Request(r, {
          ...u,
          signal: p,
          method: e.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: D ? d : void 0,
        });
        let C = await fetch(v, u);
        const F = Gs && (f === 'stream' || f === 'response');
        if (Gs && (o || (F && h))) {
          const j = {};
          ['status', 'statusText', 'headers'].forEach((L) => {
            j[L] = C[L];
          });
          const te = V.toFiniteNumber(C.headers.get('content-length')),
            [R, H] = (o && lo(te, Ni(co(o), !0))) || [];
          C = new Response(
            ho(C.body, po, R, () => {
              H && H(), h && h();
            }),
            j,
          );
        }
        f = f || 'text';
        let k = await Ri[V.findKey(Ri, f) || 'text'](C, t);
        return (
          !F && h && h(),
          await new Promise((j, te) => {
            rl(j, te, {
              data: k,
              headers: qt.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: t,
              request: v,
            });
          })
        );
      } catch (D) {
        throw (
          (h && h(),
          D && D.name === 'TypeError' && /Load failed|fetch/i.test(D.message)
            ? Object.assign(new Re('Network Error', Re.ERR_NETWORK, t, v), {
                cause: D.cause || D,
              })
            : Re.from(D, D && D.code, t, v))
        );
      }
    }),
  Ys = { http: _1, xhr: z1, fetch: ad };
V.forEach(Ys, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, 'name', { value: r });
    } catch {}
    Object.defineProperty(t, 'adapterName', { value: r });
  }
});
const vo = (t) => `- ${t}`,
  id = (t) => V.isFunction(t) || t === null || t === !1,
  ol = {
    getAdapter: (t) => {
      t = V.isArray(t) ? t : [t];
      const { length: r } = t;
      let e, n;
      const a = {};
      for (let i = 0; i < r; i++) {
        e = t[i];
        let s;
        if (
          ((n = e),
          !id(e) && ((n = Ys[(s = String(e)).toLowerCase()]), n === void 0))
        )
          throw new Re(`Unknown adapter '${s}'`);
        if (n) break;
        a[s || '#' + i] = n;
      }
      if (!n) {
        const i = Object.entries(a).map(
          ([o, l]) =>
            `adapter ${o} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let s = r
          ? i.length > 1
            ? `since :
` +
              i.map(vo).join(`
`)
            : ' ' + vo(i[0])
          : 'as no adapter specified';
        throw new Re(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: Ys,
  };
function ws(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new ha(null, t);
}
function mo(t) {
  return (
    ws(t),
    (t.headers = qt.from(t.headers)),
    (t.data = _s.call(t, t.transformRequest)),
    ['post', 'put', 'patch'].indexOf(t.method) !== -1 &&
      t.headers.setContentType('application/x-www-form-urlencoded', !1),
    ol
      .getAdapter(t.adapter || Ja.adapter)(t)
      .then(
        function (n) {
          return (
            ws(t),
            (n.data = _s.call(t, t.transformResponse, n)),
            (n.headers = qt.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            tl(n) ||
              (ws(t),
              n &&
                n.response &&
                ((n.response.data = _s.call(
                  t,
                  t.transformResponse,
                  n.response,
                )),
                (n.response.headers = qt.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const fl = '1.10.0',
  is = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (t, r) => {
    is[t] = function (n) {
      return typeof n === t || 'a' + (r < 1 ? 'n ' : ' ') + t;
    };
  },
);
const xo = {};
is.transitional = function (r, e, n) {
  function a(i, s) {
    return (
      '[Axios v' +
      fl +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (i, s, o) => {
    if (r === !1)
      throw new Re(
        a(s, ' has been removed' + (e ? ' in ' + e : '')),
        Re.ERR_DEPRECATED,
      );
    return (
      e &&
        !xo[s] &&
        ((xo[s] = !0),
        console.warn(
          a(
            s,
            ' has been deprecated since v' +
              e +
              ' and will be removed in the near future',
          ),
        )),
      r ? r(i, s, o) : !0
    );
  };
};
is.spelling = function (r) {
  return (e, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function sd(t, r, e) {
  if (typeof t != 'object')
    throw new Re('options must be an object', Re.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let a = n.length;
  for (; a-- > 0; ) {
    const i = n[a],
      s = r[i];
    if (s) {
      const o = t[i],
        l = o === void 0 || s(o, i, t);
      if (l !== !0)
        throw new Re('option ' + i + ' must be ' + l, Re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0) throw new Re('Unknown option ' + i, Re.ERR_BAD_OPTION);
  }
}
const wi = { assertOptions: sd, validators: is },
  Rr = wi.validators;
let Nn = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new oo(), response: new oo() });
  }
  async request(r, e) {
    try {
      return await this._request(r, e);
    } catch (n) {
      if (n instanceof Error) {
        let a = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(a)
          : (a = new Error());
        const i = a.stack ? a.stack.replace(/^.+\n/, '') : '';
        try {
          n.stack
            ? i &&
              !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
              (n.stack +=
                `
` + i)
            : (n.stack = i);
        } catch {}
      }
      throw n;
    }
  }
  _request(r, e) {
    typeof r == 'string' ? ((e = e || {}), (e.url = r)) : (e = r || {}),
      (e = kn(this.defaults, e));
    const { transitional: n, paramsSerializer: a, headers: i } = e;
    n !== void 0 &&
      wi.assertOptions(
        n,
        {
          silentJSONParsing: Rr.transitional(Rr.boolean),
          forcedJSONParsing: Rr.transitional(Rr.boolean),
          clarifyTimeoutError: Rr.transitional(Rr.boolean),
        },
        !1,
      ),
      a != null &&
        (V.isFunction(a)
          ? (e.paramsSerializer = { serialize: a })
          : wi.assertOptions(
              a,
              { encode: Rr.function, serialize: Rr.function },
              !0,
            )),
      e.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (e.allowAbsoluteUrls = !0)),
      wi.assertOptions(
        e,
        {
          baseUrl: Rr.spelling('baseURL'),
          withXsrfToken: Rr.spelling('withXSRFToken'),
        },
        !0,
      ),
      (e.method = (e.method || this.defaults.method || 'get').toLowerCase());
    let s = i && V.merge(i.common, i[e.method]);
    i &&
      V.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (v) => {
          delete i[v];
        },
      ),
      (e.headers = qt.concat(s, i));
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == 'function' && h.runWhen(e) === !1) ||
        ((l = l && h.synchronous), o.unshift(h.fulfilled, h.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (h) {
      f.push(h.fulfilled, h.rejected);
    });
    let c,
      d = 0,
      u;
    if (!l) {
      const v = [mo.bind(this), void 0];
      for (
        v.unshift.apply(v, o),
          v.push.apply(v, f),
          u = v.length,
          c = Promise.resolve(e);
        d < u;

      )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    u = o.length;
    let p = e;
    for (d = 0; d < u; ) {
      const v = o[d++],
        h = o[d++];
      try {
        p = v(p);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      c = mo.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, u = f.length; d < u; ) c = c.then(f[d++], f[d++]);
    return c;
  }
  getUri(r) {
    r = kn(this.defaults, r);
    const e = nl(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Zf(e, r.params, r.paramsSerializer);
  }
};
V.forEach(['delete', 'get', 'head', 'options'], function (r) {
  Nn.prototype[r] = function (e, n) {
    return this.request(
      kn(n || {}, { method: r, url: e, data: (n || {}).data }),
    );
  };
});
V.forEach(['post', 'put', 'patch'], function (r) {
  function e(n) {
    return function (i, s, o) {
      return this.request(
        kn(o || {}, {
          method: r,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (Nn.prototype[r] = e()), (Nn.prototype[r + 'Form'] = e(!0));
});
let od = class ll {
  constructor(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    let e;
    this.promise = new Promise(function (i) {
      e = i;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; ) n._listeners[i](a);
      n._listeners = null;
    }),
      (this.promise.then = (a) => {
        let i;
        const s = new Promise((o) => {
          n.subscribe(o), (i = o);
        }).then(a);
        return (
          (s.cancel = function () {
            n.unsubscribe(i);
          }),
          s
        );
      }),
      r(function (i, s, o) {
        n.reason || ((n.reason = new ha(i, s, o)), e(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const e = this._listeners.indexOf(r);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      e = (n) => {
        r.abort(n);
      };
    return (
      this.subscribe(e),
      (r.signal.unsubscribe = () => this.unsubscribe(e)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new ll(function (a) {
        r = a;
      }),
      cancel: r,
    };
  }
};
function fd(t) {
  return function (e) {
    return t.apply(null, e);
  };
}
function ld(t) {
  return V.isObject(t) && t.isAxiosError === !0;
}
const Xs = {
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
Object.entries(Xs).forEach(([t, r]) => {
  Xs[r] = t;
});
function cl(t) {
  const r = new Nn(t),
    e = Hf(Nn.prototype.request, r);
  return (
    V.extend(e, Nn.prototype, r, { allOwnKeys: !0 }),
    V.extend(e, r, null, { allOwnKeys: !0 }),
    (e.create = function (a) {
      return cl(kn(t, a));
    }),
    e
  );
}
const it = cl(Ja);
it.Axios = Nn;
it.CanceledError = ha;
it.CancelToken = od;
it.isCancel = tl;
it.VERSION = fl;
it.toFormData = ns;
it.AxiosError = Re;
it.Cancel = it.CanceledError;
it.all = function (r) {
  return Promise.all(r);
};
it.spread = fd;
it.isAxiosError = ld;
it.mergeConfig = kn;
it.AxiosHeaders = qt;
it.formToJSON = (t) => el(V.isHTMLForm(t) ? new FormData(t) : t);
it.getAdapter = ol.getAdapter;
it.HttpStatusCode = Xs;
it.default = it;
const {
  Axios: Mw,
  AxiosError: Lw,
  CanceledError: Bw,
  isCancel: Uw,
  CancelToken: Hw,
  VERSION: Ww,
  all: Vw,
  Cancel: jw,
  isAxiosError: Gw,
  spread: Yw,
  toFormData: Xw,
  AxiosHeaders: Kw,
  HttpStatusCode: $w,
  formToJSON: zw,
  getAdapter: qw,
  mergeConfig: Jw,
} = it;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var ki = {};
ki.version = '0.18.5';
var ul = 1252,
  cd = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  hl = function (t) {
    cd.indexOf(t) != -1 && (ul = t);
  };
function ud() {
  hl(1252);
}
var Ua = function (t) {
  hl(t);
};
function hd() {
  Ua(1200), ud();
}
var oi = function (r) {
    return String.fromCharCode(r);
  },
  go = function (r) {
    return String.fromCharCode(r);
  },
  Ii,
  ln = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function Ha(t) {
  for (
    var r = '', e = 0, n = 0, a = 0, i = 0, s = 0, o = 0, l = 0, f = 0;
    f < t.length;

  )
    (e = t.charCodeAt(f++)),
      (i = e >> 2),
      (n = t.charCodeAt(f++)),
      (s = ((e & 3) << 4) | (n >> 4)),
      (a = t.charCodeAt(f++)),
      (o = ((n & 15) << 2) | (a >> 6)),
      (l = a & 63),
      isNaN(n) ? (o = l = 64) : isNaN(a) && (l = 64),
      (r += ln.charAt(i) + ln.charAt(s) + ln.charAt(o) + ln.charAt(l));
  return r;
}
function qr(t) {
  var r = '',
    e = 0,
    n = 0,
    a = 0,
    i = 0,
    s = 0,
    o = 0,
    l = 0;
  t = t.replace(/[^\w\+\/\=]/g, '');
  for (var f = 0; f < t.length; )
    (i = ln.indexOf(t.charAt(f++))),
      (s = ln.indexOf(t.charAt(f++))),
      (e = (i << 2) | (s >> 4)),
      (r += String.fromCharCode(e)),
      (o = ln.indexOf(t.charAt(f++))),
      (n = ((s & 15) << 4) | (o >> 2)),
      o !== 64 && (r += String.fromCharCode(n)),
      (l = ln.indexOf(t.charAt(f++))),
      (a = ((o & 3) << 6) | l),
      l !== 64 && (r += String.fromCharCode(a));
  return r;
}
var je = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  Qr = (function () {
    if (typeof Buffer < 'u') {
      var t = !Buffer.from;
      if (!t)
        try {
          Buffer.from('foo', 'utf8');
        } catch {
          t = !0;
        }
      return t
        ? function (r, e) {
            return e ? new Buffer(r, e) : new Buffer(r);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function In(t) {
  return je
    ? Buffer.alloc
      ? Buffer.alloc(t)
      : new Buffer(t)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(t)
      : new Array(t);
}
function _o(t) {
  return je
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(t)
      : new Buffer(t)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(t)
      : new Array(t);
}
var Fr = function (r) {
  return je
    ? Qr(r, 'binary')
    : r.split('').map(function (e) {
        return e.charCodeAt(0) & 255;
      });
};
function ss(t) {
  if (typeof ArrayBuffer > 'u') return Fr(t);
  for (
    var r = new ArrayBuffer(t.length), e = new Uint8Array(r), n = 0;
    n != t.length;
    ++n
  )
    e[n] = t.charCodeAt(n) & 255;
  return r;
}
function Za(t) {
  if (Array.isArray(t))
    return t
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var r = [], e = 0; e < t.length; ++e) r[e] = String.fromCharCode(t[e]);
  return r.join('');
}
function dd(t) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(t);
}
var Rt = je
  ? function (t) {
      return Buffer.concat(
        t.map(function (r) {
          return Buffer.isBuffer(r) ? r : Qr(r);
        }),
      );
    }
  : function (t) {
      if (typeof Uint8Array < 'u') {
        var r = 0,
          e = 0;
        for (r = 0; r < t.length; ++r) e += t[r].length;
        var n = new Uint8Array(e),
          a = 0;
        for (r = 0, e = 0; r < t.length; e += a, ++r)
          if (((a = t[r].length), t[r] instanceof Uint8Array)) n.set(t[r], e);
          else {
            if (typeof t[r] == 'string') throw 'wtf';
            n.set(new Uint8Array(t[r]), e);
          }
        return n;
      }
      return [].concat.apply(
        [],
        t.map(function (i) {
          return Array.isArray(i) ? i : [].slice.call(i);
        }),
      );
    };
function pd(t) {
  for (
    var r = [], e = 0, n = t.length + 250, a = In(t.length + 255), i = 0;
    i < t.length;
    ++i
  ) {
    var s = t.charCodeAt(i);
    if (s < 128) a[e++] = s;
    else if (s < 2048)
      (a[e++] = 192 | ((s >> 6) & 31)), (a[e++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var o = t.charCodeAt(++i) & 1023;
      (a[e++] = 240 | ((s >> 8) & 7)),
        (a[e++] = 128 | ((s >> 2) & 63)),
        (a[e++] = 128 | ((o >> 6) & 15) | ((s & 3) << 4)),
        (a[e++] = 128 | (o & 63));
    } else
      (a[e++] = 224 | ((s >> 12) & 15)),
        (a[e++] = 128 | ((s >> 6) & 63)),
        (a[e++] = 128 | (s & 63));
    e > n && (r.push(a.slice(0, e)), (e = 0), (a = In(65535)), (n = 65530));
  }
  return r.push(a.slice(0, e)), Rt(r);
}
var Ca = /\u0000/g,
  fi = /[\u0001-\u0006]/g;
function ta(t) {
  for (var r = '', e = t.length - 1; e >= 0; ) r += t.charAt(e--);
  return r;
}
function Cr(t, r) {
  var e = '' + t;
  return e.length >= r ? e : ut('0', r - e.length) + e;
}
function x0(t, r) {
  var e = '' + t;
  return e.length >= r ? e : ut(' ', r - e.length) + e;
}
function bi(t, r) {
  var e = '' + t;
  return e.length >= r ? e : e + ut(' ', r - e.length);
}
function vd(t, r) {
  var e = '' + Math.round(t);
  return e.length >= r ? e : ut('0', r - e.length) + e;
}
function md(t, r) {
  var e = '' + t;
  return e.length >= r ? e : ut('0', r - e.length) + e;
}
var wo = Math.pow(2, 32);
function qn(t, r) {
  if (t > wo || t < -wo) return vd(t, r);
  var e = Math.round(t);
  return md(e, r);
}
function Pi(t, r) {
  return (
    (r = r || 0),
    t.length >= 7 + r &&
      (t.charCodeAt(r) | 32) === 103 &&
      (t.charCodeAt(r + 1) | 32) === 101 &&
      (t.charCodeAt(r + 2) | 32) === 110 &&
      (t.charCodeAt(r + 3) | 32) === 101 &&
      (t.charCodeAt(r + 4) | 32) === 114 &&
      (t.charCodeAt(r + 5) | 32) === 97 &&
      (t.charCodeAt(r + 6) | 32) === 108
  );
}
var Eo = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Es = [
    ['J', 'Jan', 'January'],
    ['F', 'Feb', 'February'],
    ['M', 'Mar', 'March'],
    ['A', 'Apr', 'April'],
    ['M', 'May', 'May'],
    ['J', 'Jun', 'June'],
    ['J', 'Jul', 'July'],
    ['A', 'Aug', 'August'],
    ['S', 'Sep', 'September'],
    ['O', 'Oct', 'October'],
    ['N', 'Nov', 'November'],
    ['D', 'Dec', 'December'],
  ];
function xd(t) {
  return (
    t || (t = {}),
    (t[0] = 'General'),
    (t[1] = '0'),
    (t[2] = '0.00'),
    (t[3] = '#,##0'),
    (t[4] = '#,##0.00'),
    (t[9] = '0%'),
    (t[10] = '0.00%'),
    (t[11] = '0.00E+00'),
    (t[12] = '# ?/?'),
    (t[13] = '# ??/??'),
    (t[14] = 'm/d/yy'),
    (t[15] = 'd-mmm-yy'),
    (t[16] = 'd-mmm'),
    (t[17] = 'mmm-yy'),
    (t[18] = 'h:mm AM/PM'),
    (t[19] = 'h:mm:ss AM/PM'),
    (t[20] = 'h:mm'),
    (t[21] = 'h:mm:ss'),
    (t[22] = 'm/d/yy h:mm'),
    (t[37] = '#,##0 ;(#,##0)'),
    (t[38] = '#,##0 ;[Red](#,##0)'),
    (t[39] = '#,##0.00;(#,##0.00)'),
    (t[40] = '#,##0.00;[Red](#,##0.00)'),
    (t[45] = 'mm:ss'),
    (t[46] = '[h]:mm:ss'),
    (t[47] = 'mmss.0'),
    (t[48] = '##0.0E+0'),
    (t[49] = '@'),
    (t[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    t
  );
}
var dt = {
    0: 'General',
    1: '0',
    2: '0.00',
    3: '#,##0',
    4: '#,##0.00',
    9: '0%',
    10: '0.00%',
    11: '0.00E+00',
    12: '# ?/?',
    13: '# ??/??',
    14: 'm/d/yy',
    15: 'd-mmm-yy',
    16: 'd-mmm',
    17: 'mmm-yy',
    18: 'h:mm AM/PM',
    19: 'h:mm:ss AM/PM',
    20: 'h:mm',
    21: 'h:mm:ss',
    22: 'm/d/yy h:mm',
    37: '#,##0 ;(#,##0)',
    38: '#,##0 ;[Red](#,##0)',
    39: '#,##0.00;(#,##0.00)',
    40: '#,##0.00;[Red](#,##0.00)',
    45: 'mm:ss',
    46: '[h]:mm:ss',
    47: 'mmss.0',
    48: '##0.0E+0',
    49: '@',
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
  },
  To = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0,
  },
  gd = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
  };
function Mi(t, r, e) {
  for (
    var n = t < 0 ? -1 : 1,
      a = t * n,
      i = 0,
      s = 1,
      o = 0,
      l = 1,
      f = 0,
      c = 0,
      d = Math.floor(a);
    f < r &&
    ((d = Math.floor(a)), (o = d * s + i), (c = d * f + l), !(a - d < 5e-8));

  )
    (a = 1 / (a - d)), (i = s), (s = o), (l = f), (f = c);
  if ((c > r && (f > r ? ((c = l), (o = i)) : ((c = f), (o = s))), !e))
    return [0, n * o, c];
  var u = Math.floor((n * o) / c);
  return [u, n * o - u * c, c];
}
function li(t, r, e) {
  if (t > 2958465 || t < 0) return null;
  var n = t | 0,
    a = Math.floor(86400 * (t - n)),
    i = 0,
    s = [],
    o = {
      D: n,
      T: a,
      u: 86400 * (t - n) - a,
      y: 0,
      m: 0,
      d: 0,
      H: 0,
      M: 0,
      S: 0,
      q: 0,
    };
  if (
    (Math.abs(o.u) < 1e-6 && (o.u = 0),
    r && r.date1904 && (n += 1462),
    o.u > 0.9999 && ((o.u = 0), ++a == 86400 && ((o.T = a = 0), ++n, ++o.D)),
    n === 60)
  )
    (s = e ? [1317, 10, 29] : [1900, 2, 29]), (i = 3);
  else if (n === 0) (s = e ? [1317, 8, 29] : [1900, 1, 0]), (i = 6);
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1),
      (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (i = l.getDay()),
      n < 60 && (i = (i + 6) % 7),
      e && (i = Ad(l, s));
  }
  return (
    (o.y = s[0]),
    (o.m = s[1]),
    (o.d = s[2]),
    (o.S = a % 60),
    (a = Math.floor(a / 60)),
    (o.M = a % 60),
    (a = Math.floor(a / 60)),
    (o.H = a),
    (o.q = i),
    o
  );
}
var dl = new Date(1899, 11, 31, 0, 0, 0),
  _d = dl.getTime(),
  wd = new Date(1900, 2, 1, 0, 0, 0);
function pl(t, r) {
  var e = t.getTime();
  return (
    r ? (e -= 1461 * 24 * 60 * 60 * 1e3) : t >= wd && (e += 24 * 60 * 60 * 1e3),
    (e - (_d + (t.getTimezoneOffset() - dl.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function g0(t) {
  return t.indexOf('.') == -1 ? t : t.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function Ed(t) {
  return t.indexOf('E') == -1
    ? t
    : t
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function Td(t) {
  var r = t < 0 ? 12 : 11,
    e = g0(t.toFixed(12));
  return e.length <= r || ((e = t.toPrecision(10)), e.length <= r)
    ? e
    : t.toExponential(5);
}
function yd(t) {
  var r = g0(t.toFixed(11));
  return r.length > (t < 0 ? 12 : 11) || r === '0' || r === '-0'
    ? t.toPrecision(6)
    : r;
}
function Sd(t) {
  var r = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E),
    e;
  return (
    r >= -4 && r <= -1
      ? (e = t.toPrecision(10 + r))
      : Math.abs(r) <= 9
        ? (e = Td(t))
        : r === 10
          ? (e = t.toFixed(10).substr(0, 12))
          : (e = yd(t)),
    g0(Ed(e.toUpperCase()))
  );
}
function Ks(t, r) {
  switch (typeof t) {
    case 'string':
      return t;
    case 'boolean':
      return t ? 'TRUE' : 'FALSE';
    case 'number':
      return (t | 0) === t ? t.toString(10) : Sd(t);
    case 'undefined':
      return '';
    case 'object':
      if (t == null) return '';
      if (t instanceof Date) return pn(14, pl(t, r && r.date1904), r);
  }
  throw new Error('unsupported value in General format: ' + t);
}
function Ad(t, r) {
  r[0] -= 581;
  var e = t.getDay();
  return t < 60 && (e = (e + 6) % 7), e;
}
function Fd(t, r, e, n) {
  var a = '',
    i = 0,
    s = 0,
    o = e.y,
    l,
    f = 0;
  switch (t) {
    case 98:
      o = e.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          (l = o % 100), (f = 2);
          break;
        default:
          (l = o % 1e4), (f = 4);
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          (l = e.m), (f = r.length);
          break;
        case 3:
          return Es[e.m - 1][1];
        case 5:
          return Es[e.m - 1][0];
        default:
          return Es[e.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (l = e.d), (f = r.length);
          break;
        case 3:
          return Eo[e.q][0];
        default:
          return Eo[e.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          (l = 1 + ((e.H + 11) % 12)), (f = r.length);
          break;
        default:
          throw 'bad hour format: ' + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          (l = e.H), (f = r.length);
          break;
        default:
          throw 'bad hour format: ' + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          (l = e.M), (f = r.length);
          break;
        default:
          throw 'bad minute format: ' + r;
      }
      break;
    case 115:
      if (r != 's' && r != 'ss' && r != '.0' && r != '.00' && r != '.000')
        throw 'bad second format: ' + r;
      return e.u === 0 && (r == 's' || r == 'ss')
        ? Cr(e.S, r.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (i = Math.round(s * (e.S + e.u))),
          i >= 60 * s && (i = 0),
          r === 's'
            ? i === 0
              ? '0'
              : '' + i / s
            : ((a = Cr(i, 2 + n)),
              r === 'ss' ? a.substr(0, 2) : '.' + a.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case '[h]':
        case '[hh]':
          l = e.D * 24 + e.H;
          break;
        case '[m]':
        case '[mm]':
          l = (e.D * 24 + e.H) * 60 + e.M;
          break;
        case '[s]':
        case '[ss]':
          l = ((e.D * 24 + e.H) * 60 + e.M) * 60 + Math.round(e.S + e.u);
          break;
        default:
          throw 'bad abstime format: ' + r;
      }
      f = r.length === 3 ? 1 : 2;
      break;
    case 101:
      (l = o), (f = 1);
      break;
  }
  var c = f > 0 ? Cr(l, f) : '';
  return c;
}
function cn(t) {
  var r = 3;
  if (t.length <= r) return t;
  for (var e = t.length % r, n = t.substr(0, e); e != t.length; e += r)
    n += (n.length > 0 ? ',' : '') + t.substr(e, r);
  return n;
}
var vl = /%/g;
function Cd(t, r, e) {
  var n = r.replace(vl, ''),
    a = r.length - n.length;
  return Xr(t, n, e * Math.pow(10, 2 * a)) + ut('%', a);
}
function Dd(t, r, e) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return Xr(t, r.substr(0, n), e / Math.pow(10, 3 * (r.length - n)));
}
function ml(t, r) {
  var e,
    n = t.indexOf('E') - t.indexOf('.') - 1;
  if (t.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + ml(t, -r);
    var a = t.indexOf('.');
    a === -1 && (a = t.indexOf('E'));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % a;
    if (
      (i < 0 && (i += a),
      (e = (r / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      e.indexOf('e') === -1)
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (
        e.indexOf('.') === -1
          ? (e = e.charAt(0) + '.' + e.substr(1) + 'E+' + (s - e.length + i))
          : (e += 'E+' + (s - i));
        e.substr(0, 2) === '0.';

      )
        (e = e.charAt(0) + e.substr(2, a) + '.' + e.substr(2 + a)),
          (e = e.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'));
      e = e.replace(/\+-/, '-');
    }
    e = e.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
      return l + f + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E';
    });
  } else e = r.toExponential(n);
  return (
    t.match(/E\+00$/) &&
      e.match(/e[+-]\d$/) &&
      (e = e.substr(0, e.length - 1) + '0' + e.charAt(e.length - 1)),
    t.match(/E\-/) && e.match(/e\+/) && (e = e.replace(/e\+/, 'e')),
    e.replace('e', 'E')
  );
}
var xl = /# (\?+)( ?)\/( ?)(\d+)/;
function Od(t, r, e) {
  var n = parseInt(t[4], 10),
    a = Math.round(r * n),
    i = Math.floor(a / n),
    s = a - i * n,
    o = n;
  return (
    e +
    (i === 0 ? '' : '' + i) +
    ' ' +
    (s === 0
      ? ut(' ', t[1].length + 1 + t[4].length)
      : x0(s, t[1].length) + t[2] + '/' + t[3] + Cr(o, t[4].length))
  );
}
function Nd(t, r, e) {
  return e + (r === 0 ? '' : '' + r) + ut(' ', t[1].length + 2 + t[4].length);
}
var gl = /^#*0*\.([0#]+)/,
  _l = /\).*[0#]/,
  wl = /\(###\) ###\\?-####/;
function jt(t) {
  for (var r = '', e, n = 0; n != t.length; ++n)
    switch ((e = t.charCodeAt(n))) {
      case 35:
        break;
      case 63:
        r += ' ';
        break;
      case 48:
        r += '0';
        break;
      default:
        r += String.fromCharCode(e);
    }
  return r;
}
function yo(t, r) {
  var e = Math.pow(10, r);
  return '' + Math.round(t * e) / e;
}
function So(t, r) {
  var e = t - Math.floor(t),
    n = Math.pow(10, r);
  return r < ('' + Math.round(e * n)).length ? 0 : Math.round(e * n);
}
function Rd(t, r) {
  return r < ('' + Math.round((t - Math.floor(t)) * Math.pow(10, r))).length
    ? 1
    : 0;
}
function kd(t) {
  return t < 2147483647 && t > -2147483648
    ? '' + (t >= 0 ? t | 0 : (t - 1) | 0)
    : '' + Math.floor(t);
}
function dr(t, r, e) {
  if (t.charCodeAt(0) === 40 && !r.match(_l)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return e >= 0 ? dr('n', n, e) : '(' + dr('n', n, -e) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return Dd(t, r, e);
  if (r.indexOf('%') !== -1) return Cd(t, r, e);
  if (r.indexOf('E') !== -1) return ml(r, e);
  if (r.charCodeAt(0) === 36)
    return '$' + dr(t, r.substr(r.charAt(1) == ' ' ? 2 : 1), e);
  var a,
    i,
    s,
    o,
    l = Math.abs(e),
    f = e < 0 ? '-' : '';
  if (r.match(/^00+$/)) return f + qn(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (a = qn(e, 0)),
      a === '0' && (a = ''),
      a.length > r.length ? a : jt(r.substr(0, r.length - a.length)) + a
    );
  if ((i = r.match(xl))) return Od(i, l, f);
  if (r.match(/^#+0+$/)) return f + qn(l, r.length - r.indexOf('0'));
  if ((i = r.match(gl)))
    return (
      (a = yo(e, i[1].length)
        .replace(/^([^\.]+)$/, '$1.' + jt(i[1]))
        .replace(/\.$/, '.' + jt(i[1]))
        .replace(/\.(\d*)$/, function (v, h) {
          return '.' + h + ut('0', jt(i[1]).length - h.length);
        })),
      r.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (i = r.match(/^(0*)\.(#*)$/))))
    return (
      f +
      yo(l, i[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, i[1].length ? '0.' : '.')
    );
  if ((i = r.match(/^#{1,3},##0(\.?)$/))) return f + cn(qn(l, 0));
  if ((i = r.match(/^#,##0\.([#0]*0)$/)))
    return e < 0
      ? '-' + dr(t, r, -e)
      : cn('' + (Math.floor(e) + Rd(e, i[1].length))) +
          '.' +
          Cr(So(e, i[1].length), i[1].length);
  if ((i = r.match(/^#,#*,#0/))) return dr(t, r.replace(/^#,#*,/, ''), e);
  if ((i = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = ta(dr(t, r.replace(/[\\-]/g, ''), e))),
      (s = 0),
      ta(
        ta(r.replace(/\\/g, '')).replace(/[0#]/g, function (v) {
          return s < a.length ? a.charAt(s++) : v === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(wl))
    return (
      (a = dr(t, '##########', e)),
      '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    );
  var c = '';
  if ((i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = Mi(l, Math.pow(10, s) - 1, !1)),
      (a = '' + f),
      (c = Xr('n', i[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = bi(o[2], s)),
      c.length < i[4].length &&
        (c = jt(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    );
  if ((i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = Mi(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? x0(o[1], s) + i[2] + '/' + i[3] + bi(o[2], s)
          : ut(' ', 2 * s + 1 + i[2].length + i[3].length))
    );
  if ((i = r.match(/^[#0?]+$/)))
    return (
      (a = qn(e, 0)),
      r.length <= a.length ? a : jt(r.substr(0, r.length - a.length)) + a
    );
  if ((i = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (a = '' + e.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'));
    var d = r.indexOf('.') - s,
      u = r.length - a.length - d;
    return jt(r.substr(0, d) + a + r.substr(r.length - u));
  }
  if ((i = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = So(e, i[1].length)),
      e < 0
        ? '-' + dr(t, r, -e)
        : cn(kd(e))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (v) {
              return '00,' + (v.length < 3 ? Cr(0, 3 - v.length) : '') + v;
            }) +
          '.' +
          Cr(s, i[1].length)
    );
  switch (r) {
    case '###,##0.00':
      return dr(t, '#,##0.00', e);
    case '###,###':
    case '##,###':
    case '#,###':
      var p = cn(qn(l, 0));
      return p !== '0' ? f + p : '';
    case '###,###.00':
      return dr(t, '###,##0.00', e).replace(/^0\./, '.');
    case '#,###.00':
      return dr(t, '#,##0.00', e).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + r + '|');
}
function Id(t, r, e) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return Xr(t, r.substr(0, n), e / Math.pow(10, 3 * (r.length - n)));
}
function bd(t, r, e) {
  var n = r.replace(vl, ''),
    a = r.length - n.length;
  return Xr(t, n, e * Math.pow(10, 2 * a)) + ut('%', a);
}
function El(t, r) {
  var e,
    n = t.indexOf('E') - t.indexOf('.') - 1;
  if (t.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + El(t, -r);
    var a = t.indexOf('.');
    a === -1 && (a = t.indexOf('E'));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % a;
    if (
      (i < 0 && (i += a),
      (e = (r / Math.pow(10, i)).toPrecision(n + 1 + ((a + i) % a))),
      !e.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      e.indexOf('.') === -1
        ? (e = e.charAt(0) + '.' + e.substr(1) + 'E+' + (s - e.length + i))
        : (e += 'E+' + (s - i)),
        (e = e.replace(/\+-/, '-'));
    }
    e = e.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
      return l + f + c.substr(0, (a + i) % a) + '.' + c.substr(i) + 'E';
    });
  } else e = r.toExponential(n);
  return (
    t.match(/E\+00$/) &&
      e.match(/e[+-]\d$/) &&
      (e = e.substr(0, e.length - 1) + '0' + e.charAt(e.length - 1)),
    t.match(/E\-/) && e.match(/e\+/) && (e = e.replace(/e\+/, 'e')),
    e.replace('e', 'E')
  );
}
function kr(t, r, e) {
  if (t.charCodeAt(0) === 40 && !r.match(_l)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return e >= 0 ? kr('n', n, e) : '(' + kr('n', n, -e) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return Id(t, r, e);
  if (r.indexOf('%') !== -1) return bd(t, r, e);
  if (r.indexOf('E') !== -1) return El(r, e);
  if (r.charCodeAt(0) === 36)
    return '$' + kr(t, r.substr(r.charAt(1) == ' ' ? 2 : 1), e);
  var a,
    i,
    s,
    o,
    l = Math.abs(e),
    f = e < 0 ? '-' : '';
  if (r.match(/^00+$/)) return f + Cr(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (a = '' + e),
      e === 0 && (a = ''),
      a.length > r.length ? a : jt(r.substr(0, r.length - a.length)) + a
    );
  if ((i = r.match(xl))) return Nd(i, l, f);
  if (r.match(/^#+0+$/)) return f + Cr(l, r.length - r.indexOf('0'));
  if ((i = r.match(gl)))
    return (
      (a = ('' + e)
        .replace(/^([^\.]+)$/, '$1.' + jt(i[1]))
        .replace(/\.$/, '.' + jt(i[1]))),
      (a = a.replace(/\.(\d*)$/, function (v, h) {
        return '.' + h + ut('0', jt(i[1]).length - h.length);
      })),
      r.indexOf('0.') !== -1 ? a : a.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (i = r.match(/^(0*)\.(#*)$/))))
    return (
      f +
      ('' + l)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, i[1].length ? '0.' : '.')
    );
  if ((i = r.match(/^#{1,3},##0(\.?)$/))) return f + cn('' + l);
  if ((i = r.match(/^#,##0\.([#0]*0)$/)))
    return e < 0 ? '-' + kr(t, r, -e) : cn('' + e) + '.' + ut('0', i[1].length);
  if ((i = r.match(/^#,#*,#0/))) return kr(t, r.replace(/^#,#*,/, ''), e);
  if ((i = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (a = ta(kr(t, r.replace(/[\\-]/g, ''), e))),
      (s = 0),
      ta(
        ta(r.replace(/\\/g, '')).replace(/[0#]/g, function (v) {
          return s < a.length ? a.charAt(s++) : v === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(wl))
    return (
      (a = kr(t, '##########', e)),
      '(' + a.substr(0, 3) + ') ' + a.substr(3, 3) + '-' + a.substr(6)
    );
  var c = '';
  if ((i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(i[4].length, 7)),
      (o = Mi(l, Math.pow(10, s) - 1, !1)),
      (a = '' + f),
      (c = Xr('n', i[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (a += c + i[2] + '/' + i[3]),
      (c = bi(o[2], s)),
      c.length < i[4].length &&
        (c = jt(i[4].substr(i[4].length - c.length)) + c),
      (a += c),
      a
    );
  if ((i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(i[1].length, i[4].length), 7)),
      (o = Mi(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? x0(o[1], s) + i[2] + '/' + i[3] + bi(o[2], s)
          : ut(' ', 2 * s + 1 + i[2].length + i[3].length))
    );
  if ((i = r.match(/^[#0?]+$/)))
    return (
      (a = '' + e),
      r.length <= a.length ? a : jt(r.substr(0, r.length - a.length)) + a
    );
  if ((i = r.match(/^([#0]+)\.([#0]+)$/))) {
    (a = '' + e.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = a.indexOf('.'));
    var d = r.indexOf('.') - s,
      u = r.length - a.length - d;
    return jt(r.substr(0, d) + a + r.substr(r.length - u));
  }
  if ((i = r.match(/^00,000\.([#0]*0)$/)))
    return e < 0
      ? '-' + kr(t, r, -e)
      : cn('' + e)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (v) {
            return '00,' + (v.length < 3 ? Cr(0, 3 - v.length) : '') + v;
          }) +
          '.' +
          Cr(0, i[1].length);
  switch (r) {
    case '###,###':
    case '##,###':
    case '#,###':
      var p = cn('' + l);
      return p !== '0' ? f + p : '';
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          kr(t, r.slice(0, r.lastIndexOf('.')), e) +
          jt(r.slice(r.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + r + '|');
}
function Xr(t, r, e) {
  return (e | 0) === e ? kr(t, r, e) : dr(t, r, e);
}
function Pd(t) {
  for (var r = [], e = !1, n = 0, a = 0; n < t.length; ++n)
    switch (t.charCodeAt(n)) {
      case 34:
        e = !e;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        (r[r.length] = t.substr(a, n - a)), (a = n + 1);
    }
  if (((r[r.length] = t.substr(a)), e === !0))
    throw new Error('Format |' + t + '| unterminated string ');
  return r;
}
var Tl = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function yl(t) {
  for (var r = 0, e = '', n = ''; r < t.length; )
    switch ((e = t.charAt(r))) {
      case 'G':
        Pi(t, r) && (r += 6), r++;
        break;
      case '"':
        for (; t.charCodeAt(++r) !== 34 && r < t.length; );
        ++r;
        break;
      case '\\':
        r += 2;
        break;
      case '_':
        r += 2;
        break;
      case '@':
        ++r;
        break;
      case 'B':
      case 'b':
        if (t.charAt(r + 1) === '1' || t.charAt(r + 1) === '2') return !0;
      case 'M':
      case 'D':
      case 'Y':
      case 'H':
      case 'S':
      case 'E':
      case 'm':
      case 'd':
      case 'y':
      case 'h':
      case 's':
      case 'e':
      case 'g':
        return !0;
      case 'A':
      case 'a':
      case '上':
        if (
          t.substr(r, 3).toUpperCase() === 'A/P' ||
          t.substr(r, 5).toUpperCase() === 'AM/PM' ||
          t.substr(r, 5).toUpperCase() === '上午/下午'
        )
          return !0;
        ++r;
        break;
      case '[':
        for (n = e; t.charAt(r++) !== ']' && r < t.length; ) n += t.charAt(r);
        if (n.match(Tl)) return !0;
        break;
      case '.':
      case '0':
      case '#':
        for (
          ;
          r < t.length &&
          ('0#?.,E+-%'.indexOf((e = t.charAt(++r))) > -1 ||
            (e == '\\' &&
              t.charAt(r + 1) == '-' &&
              '0#'.indexOf(t.charAt(r + 2)) > -1));

        );
        break;
      case '?':
        for (; t.charAt(++r) === e; );
        break;
      case '*':
        ++r, (t.charAt(r) == ' ' || t.charAt(r) == '*') && ++r;
        break;
      case '(':
      case ')':
        ++r;
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        for (; r < t.length && '0123456789'.indexOf(t.charAt(++r)) > -1; );
        break;
      case ' ':
        ++r;
        break;
      default:
        ++r;
        break;
    }
  return !1;
}
function Md(t, r, e, n) {
  for (
    var a = [], i = '', s = 0, o = '', l = 't', f, c, d, u = 'H';
    s < t.length;

  )
    switch ((o = t.charAt(s))) {
      case 'G':
        if (!Pi(t, s))
          throw new Error('unrecognized character ' + o + ' in ' + t);
        (a[a.length] = { t: 'G', v: 'General' }), (s += 7);
        break;
      case '"':
        for (i = ''; (d = t.charCodeAt(++s)) !== 34 && s < t.length; )
          i += String.fromCharCode(d);
        (a[a.length] = { t: 't', v: i }), ++s;
        break;
      case '\\':
        var p = t.charAt(++s),
          v = p === '(' || p === ')' ? p : 't';
        (a[a.length] = { t: v, v: p }), ++s;
        break;
      case '_':
        (a[a.length] = { t: 't', v: ' ' }), (s += 2);
        break;
      case '@':
        (a[a.length] = { t: 'T', v: r }), ++s;
        break;
      case 'B':
      case 'b':
        if (t.charAt(s + 1) === '1' || t.charAt(s + 1) === '2') {
          if (f == null && ((f = li(r, e, t.charAt(s + 1) === '2')), f == null))
            return '';
          (a[a.length] = { t: 'X', v: t.substr(s, 2) }), (l = o), (s += 2);
          break;
        }
      case 'M':
      case 'D':
      case 'Y':
      case 'H':
      case 'S':
      case 'E':
        o = o.toLowerCase();
      case 'm':
      case 'd':
      case 'y':
      case 'h':
      case 's':
      case 'e':
      case 'g':
        if (r < 0 || (f == null && ((f = li(r, e)), f == null))) return '';
        for (i = o; ++s < t.length && t.charAt(s).toLowerCase() === o; ) i += o;
        o === 'm' && l.toLowerCase() === 'h' && (o = 'M'),
          o === 'h' && (o = u),
          (a[a.length] = { t: o, v: i }),
          (l = o);
        break;
      case 'A':
      case 'a':
      case '上':
        var h = { t: o, v: o };
        if (
          (f == null && (f = li(r, e)),
          t.substr(s, 3).toUpperCase() === 'A/P'
            ? (f != null && (h.v = f.H >= 12 ? 'P' : 'A'),
              (h.t = 'T'),
              (u = 'h'),
              (s += 3))
            : t.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (f != null && (h.v = f.H >= 12 ? 'PM' : 'AM'),
                (h.t = 'T'),
                (s += 5),
                (u = 'h'))
              : t.substr(s, 5).toUpperCase() === '上午/下午'
                ? (f != null && (h.v = f.H >= 12 ? '下午' : '上午'),
                  (h.t = 'T'),
                  (s += 5),
                  (u = 'h'))
                : ((h.t = 't'), ++s),
          f == null && h.t === 'T')
        )
          return '';
        (a[a.length] = h), (l = o);
        break;
      case '[':
        for (i = o; t.charAt(s++) !== ']' && s < t.length; ) i += t.charAt(s);
        if (i.slice(-1) !== ']') throw 'unterminated "[" block: |' + i + '|';
        if (i.match(Tl)) {
          if (f == null && ((f = li(r, e)), f == null)) return '';
          (a[a.length] = { t: 'Z', v: i.toLowerCase() }), (l = i.charAt(1));
        } else
          i.indexOf('$') > -1 &&
            ((i = (i.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            yl(t) || (a[a.length] = { t: 't', v: i }));
        break;
      case '.':
        if (f != null) {
          for (i = o; ++s < t.length && (o = t.charAt(s)) === '0'; ) i += o;
          a[a.length] = { t: 's', v: i };
          break;
        }
      case '0':
      case '#':
        for (
          i = o;
          ++s < t.length && '0#?.,E+-%'.indexOf((o = t.charAt(s))) > -1;

        )
          i += o;
        a[a.length] = { t: 'n', v: i };
        break;
      case '?':
        for (i = o; t.charAt(++s) === o; ) i += o;
        (a[a.length] = { t: o, v: i }), (l = o);
        break;
      case '*':
        ++s, (t.charAt(s) == ' ' || t.charAt(s) == '*') && ++s;
        break;
      case '(':
      case ')':
        (a[a.length] = { t: n === 1 ? 't' : o, v: o }), ++s;
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        for (i = o; s < t.length && '0123456789'.indexOf(t.charAt(++s)) > -1; )
          i += t.charAt(s);
        a[a.length] = { t: 'D', v: i };
        break;
      case ' ':
        (a[a.length] = { t: o, v: o }), ++s;
        break;
      case '$':
        (a[a.length] = { t: 't', v: '$' }), ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o) === -1)
          throw new Error('unrecognized character ' + o + ' in ' + t);
        (a[a.length] = { t: 't', v: o }), ++s;
        break;
    }
  var x = 0,
    D = 0,
    C;
  for (s = a.length - 1, l = 't'; s >= 0; --s)
    switch (a[s].t) {
      case 'h':
      case 'H':
        (a[s].t = u), (l = 'h'), x < 1 && (x = 1);
        break;
      case 's':
        (C = a[s].v.match(/\.0+$/)) && (D = Math.max(D, C[0].length - 1)),
          x < 3 && (x = 3);
      case 'd':
      case 'y':
      case 'M':
      case 'e':
        l = a[s].t;
        break;
      case 'm':
        l === 's' && ((a[s].t = 'M'), x < 2 && (x = 2));
        break;
      case 'X':
        break;
      case 'Z':
        x < 1 && a[s].v.match(/[Hh]/) && (x = 1),
          x < 2 && a[s].v.match(/[Mm]/) && (x = 2),
          x < 3 && a[s].v.match(/[Ss]/) && (x = 3);
    }
  switch (x) {
    case 0:
      break;
    case 1:
      f.u >= 0.5 && ((f.u = 0), ++f.S),
        f.S >= 60 && ((f.S = 0), ++f.M),
        f.M >= 60 && ((f.M = 0), ++f.H);
      break;
    case 2:
      f.u >= 0.5 && ((f.u = 0), ++f.S), f.S >= 60 && ((f.S = 0), ++f.M);
      break;
  }
  var F = '',
    k;
  for (s = 0; s < a.length; ++s)
    switch (a[s].t) {
      case 't':
      case 'T':
      case ' ':
      case 'D':
        break;
      case 'X':
        (a[s].v = ''), (a[s].t = ';');
        break;
      case 'd':
      case 'm':
      case 'y':
      case 'h':
      case 'H':
      case 'M':
      case 's':
      case 'e':
      case 'b':
      case 'Z':
        (a[s].v = Fd(a[s].t.charCodeAt(0), a[s].v, f, D)), (a[s].t = 't');
        break;
      case 'n':
      case '?':
        for (
          k = s + 1;
          a[k] != null &&
          ((o = a[k].t) === '?' ||
            o === 'D' ||
            ((o === ' ' || o === 't') &&
              a[k + 1] != null &&
              (a[k + 1].t === '?' ||
                (a[k + 1].t === 't' && a[k + 1].v === '/'))) ||
            (a[s].t === '(' && (o === ' ' || o === 'n' || o === ')')) ||
            (o === 't' &&
              (a[k].v === '/' ||
                (a[k].v === ' ' && a[k + 1] != null && a[k + 1].t == '?'))));

        )
          (a[s].v += a[k].v), (a[k] = { v: '', t: ';' }), ++k;
        (F += a[s].v), (s = k - 1);
        break;
      case 'G':
        (a[s].t = 't'), (a[s].v = Ks(r, e));
        break;
    }
  var j = '',
    te,
    R;
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((te = r < 0 && F.charCodeAt(0) === 45 ? -r : r), (R = Xr('n', F, te)))
      : ((te = r < 0 && n > 1 ? -r : r),
        (R = Xr('n', F, te)),
        te < 0 &&
          a[0] &&
          a[0].t == 't' &&
          ((R = R.substr(1)), (a[0].v = '-' + a[0].v))),
      (k = R.length - 1);
    var H = a.length;
    for (s = 0; s < a.length; ++s)
      if (a[s] != null && a[s].t != 't' && a[s].v.indexOf('.') > -1) {
        H = s;
        break;
      }
    var L = a.length;
    if (H === a.length && R.indexOf('E') === -1) {
      for (s = a.length - 1; s >= 0; --s)
        a[s] == null ||
          'n?'.indexOf(a[s].t) === -1 ||
          (k >= a[s].v.length - 1
            ? ((k -= a[s].v.length), (a[s].v = R.substr(k + 1, a[s].v.length)))
            : k < 0
              ? (a[s].v = '')
              : ((a[s].v = R.substr(0, k + 1)), (k = -1)),
          (a[s].t = 't'),
          (L = s));
      k >= 0 && L < a.length && (a[L].v = R.substr(0, k + 1) + a[L].v);
    } else if (H !== a.length && R.indexOf('E') === -1) {
      for (k = R.indexOf('.') - 1, s = H; s >= 0; --s)
        if (!(a[s] == null || 'n?'.indexOf(a[s].t) === -1)) {
          for (
            c =
              a[s].v.indexOf('.') > -1 && s === H
                ? a[s].v.indexOf('.') - 1
                : a[s].v.length - 1,
              j = a[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            k >= 0 &&
              (a[s].v.charAt(c) === '0' || a[s].v.charAt(c) === '#') &&
              (j = R.charAt(k--) + j);
          (a[s].v = j), (a[s].t = 't'), (L = s);
        }
      for (
        k >= 0 && L < a.length && (a[L].v = R.substr(0, k + 1) + a[L].v),
          k = R.indexOf('.') + 1,
          s = H;
        s < a.length;
        ++s
      )
        if (!(a[s] == null || ('n?('.indexOf(a[s].t) === -1 && s !== H))) {
          for (
            c =
              a[s].v.indexOf('.') > -1 && s === H ? a[s].v.indexOf('.') + 1 : 0,
              j = a[s].v.substr(0, c);
            c < a[s].v.length;
            ++c
          )
            k < R.length && (j += R.charAt(k++));
          (a[s].v = j), (a[s].t = 't'), (L = s);
        }
    }
  }
  for (s = 0; s < a.length; ++s)
    a[s] != null &&
      'n?'.indexOf(a[s].t) > -1 &&
      ((te = n > 1 && r < 0 && s > 0 && a[s - 1].v === '-' ? -r : r),
      (a[s].v = Xr(a[s].t, a[s].v, te)),
      (a[s].t = 't'));
  var X = '';
  for (s = 0; s !== a.length; ++s) a[s] != null && (X += a[s].v);
  return X;
}
var Ao = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Fo(t, r) {
  if (r == null) return !1;
  var e = parseFloat(r[2]);
  switch (r[1]) {
    case '=':
      if (t == e) return !0;
      break;
    case '>':
      if (t > e) return !0;
      break;
    case '<':
      if (t < e) return !0;
      break;
    case '<>':
      if (t != e) return !0;
      break;
    case '>=':
      if (t >= e) return !0;
      break;
    case '<=':
      if (t <= e) return !0;
      break;
  }
  return !1;
}
function Ld(t, r) {
  var e = Pd(t),
    n = e.length,
    a = e[n - 1].indexOf('@');
  if ((n < 4 && a > -1 && --n, e.length > 4))
    throw new Error('cannot find right format for |' + e.join('|') + '|');
  if (typeof r != 'number')
    return [4, e.length === 4 || a > -1 ? e[e.length - 1] : '@'];
  switch (e.length) {
    case 1:
      e =
        a > -1
          ? ['General', 'General', 'General', e[0]]
          : [e[0], e[0], e[0], '@'];
      break;
    case 2:
      e = a > -1 ? [e[0], e[0], e[0], e[1]] : [e[0], e[1], e[0], '@'];
      break;
    case 3:
      e = a > -1 ? [e[0], e[1], e[0], e[2]] : [e[0], e[1], e[2], '@'];
      break;
  }
  var i = r > 0 ? e[0] : r < 0 ? e[1] : e[2];
  if (e[0].indexOf('[') === -1 && e[1].indexOf('[') === -1) return [n, i];
  if (e[0].match(/\[[=<>]/) != null || e[1].match(/\[[=<>]/) != null) {
    var s = e[0].match(Ao),
      o = e[1].match(Ao);
    return Fo(r, s)
      ? [n, e[0]]
      : Fo(r, o)
        ? [n, e[1]]
        : [n, e[s != null && o != null ? 2 : 1]];
  }
  return [n, i];
}
function pn(t, r, e) {
  e == null && (e = {});
  var n = '';
  switch (typeof t) {
    case 'string':
      t == 'm/d/yy' && e.dateNF ? (n = e.dateNF) : (n = t);
      break;
    case 'number':
      t == 14 && e.dateNF
        ? (n = e.dateNF)
        : (n = (e.table != null ? e.table : dt)[t]),
        n == null && (n = (e.table && e.table[To[t]]) || dt[To[t]]),
        n == null && (n = gd[t] || 'General');
      break;
  }
  if (Pi(n, 0)) return Ks(r, e);
  r instanceof Date && (r = pl(r, e.date1904));
  var a = Ld(n, r);
  if (Pi(a[1])) return Ks(r, e);
  if (r === !0) r = 'TRUE';
  else if (r === !1) r = 'FALSE';
  else if (r === '' || r == null) return '';
  return Md(a[1], r, e, a[0]);
}
function Sl(t, r) {
  if (typeof r != 'number') {
    r = +r || -1;
    for (var e = 0; e < 392; ++e) {
      if (dt[e] == null) {
        r < 0 && (r = e);
        continue;
      }
      if (dt[e] == t) {
        r = e;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (dt[r] = t), r;
}
function os(t) {
  for (var r = 0; r != 392; ++r) t[r] !== void 0 && Sl(t[r], r);
}
function fs() {
  dt = xd();
}
var Al = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function Bd(t) {
  var r = typeof t == 'number' ? dt[t] : t;
  return (r = r.replace(Al, '(\\d+)')), new RegExp('^' + r + '$');
}
function Ud(t, r, e) {
  var n = -1,
    a = -1,
    i = -1,
    s = -1,
    o = -1,
    l = -1;
  (r.match(Al) || []).forEach(function (d, u) {
    var p = parseInt(e[u + 1], 10);
    switch (d.toLowerCase().charAt(0)) {
      case 'y':
        n = p;
        break;
      case 'd':
        i = p;
        break;
      case 'h':
        s = p;
        break;
      case 's':
        l = p;
        break;
      case 'm':
        s >= 0 ? (o = p) : (a = p);
        break;
    }
  }),
    l >= 0 && o == -1 && a >= 0 && ((o = a), (a = -1));
  var f =
    ('' + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
    '-' +
    ('00' + (a >= 1 ? a : 1)).slice(-2) +
    '-' +
    ('00' + (i >= 1 ? i : 1)).slice(-2);
  f.length == 7 && (f = '0' + f), f.length == 8 && (f = '20' + f);
  var c =
    ('00' + (s >= 0 ? s : 0)).slice(-2) +
    ':' +
    ('00' + (o >= 0 ? o : 0)).slice(-2) +
    ':' +
    ('00' + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && o == -1 && l == -1
    ? f
    : n == -1 && a == -1 && i == -1
      ? c
      : f + 'T' + c;
}
var Hd = (function () {
    var t = {};
    t.version = '1.2.0';
    function r() {
      for (var R = 0, H = new Array(256), L = 0; L != 256; ++L)
        (R = L),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (H[L] = R);
      return typeof Int32Array < 'u' ? new Int32Array(H) : H;
    }
    var e = r();
    function n(R) {
      var H = 0,
        L = 0,
        X = 0,
        K = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (X = 0; X != 256; ++X) K[X] = R[X];
      for (X = 0; X != 256; ++X)
        for (L = R[X], H = 256 + X; H < 4096; H += 256)
          L = K[H] = (L >>> 8) ^ R[L & 255];
      var J = [];
      for (X = 1; X != 16; ++X)
        J[X - 1] =
          typeof Int32Array < 'u'
            ? K.subarray(X * 256, X * 256 + 256)
            : K.slice(X * 256, X * 256 + 256);
      return J;
    }
    var a = n(e),
      i = a[0],
      s = a[1],
      o = a[2],
      l = a[3],
      f = a[4],
      c = a[5],
      d = a[6],
      u = a[7],
      p = a[8],
      v = a[9],
      h = a[10],
      x = a[11],
      D = a[12],
      C = a[13],
      F = a[14];
    function k(R, H) {
      for (var L = H ^ -1, X = 0, K = R.length; X < K; )
        L = (L >>> 8) ^ e[(L ^ R.charCodeAt(X++)) & 255];
      return ~L;
    }
    function j(R, H) {
      for (var L = H ^ -1, X = R.length - 15, K = 0; K < X; )
        L =
          F[R[K++] ^ (L & 255)] ^
          C[R[K++] ^ ((L >> 8) & 255)] ^
          D[R[K++] ^ ((L >> 16) & 255)] ^
          x[R[K++] ^ (L >>> 24)] ^
          h[R[K++]] ^
          v[R[K++]] ^
          p[R[K++]] ^
          u[R[K++]] ^
          d[R[K++]] ^
          c[R[K++]] ^
          f[R[K++]] ^
          l[R[K++]] ^
          o[R[K++]] ^
          s[R[K++]] ^
          i[R[K++]] ^
          e[R[K++]];
      for (X += 15; K < X; ) L = (L >>> 8) ^ e[(L ^ R[K++]) & 255];
      return ~L;
    }
    function te(R, H) {
      for (var L = H ^ -1, X = 0, K = R.length, J = 0, ie = 0; X < K; )
        (J = R.charCodeAt(X++)),
          J < 128
            ? (L = (L >>> 8) ^ e[(L ^ J) & 255])
            : J < 2048
              ? ((L = (L >>> 8) ^ e[(L ^ (192 | ((J >> 6) & 31))) & 255]),
                (L = (L >>> 8) ^ e[(L ^ (128 | (J & 63))) & 255]))
              : J >= 55296 && J < 57344
                ? ((J = (J & 1023) + 64),
                  (ie = R.charCodeAt(X++) & 1023),
                  (L = (L >>> 8) ^ e[(L ^ (240 | ((J >> 8) & 7))) & 255]),
                  (L = (L >>> 8) ^ e[(L ^ (128 | ((J >> 2) & 63))) & 255]),
                  (L =
                    (L >>> 8) ^
                    e[(L ^ (128 | ((ie >> 6) & 15) | ((J & 3) << 4))) & 255]),
                  (L = (L >>> 8) ^ e[(L ^ (128 | (ie & 63))) & 255]))
                : ((L = (L >>> 8) ^ e[(L ^ (224 | ((J >> 12) & 15))) & 255]),
                  (L = (L >>> 8) ^ e[(L ^ (128 | ((J >> 6) & 63))) & 255]),
                  (L = (L >>> 8) ^ e[(L ^ (128 | (J & 63))) & 255]));
      return ~L;
    }
    return (t.table = e), (t.bstr = k), (t.buf = j), (t.str = te), t;
  })(),
  Ze = (function () {
    var r = {};
    r.version = '1.2.1';
    function e(m, _) {
      for (
        var w = m.split('/'),
          E = _.split('/'),
          y = 0,
          S = 0,
          P = Math.min(w.length, E.length);
        y < P;
        ++y
      ) {
        if ((S = w[y].length - E[y].length)) return S;
        if (w[y] != E[y]) return w[y] < E[y] ? -1 : 1;
      }
      return w.length - E.length;
    }
    function n(m) {
      if (m.charAt(m.length - 1) == '/')
        return m.slice(0, -1).indexOf('/') === -1 ? m : n(m.slice(0, -1));
      var _ = m.lastIndexOf('/');
      return _ === -1 ? m : m.slice(0, _ + 1);
    }
    function a(m) {
      if (m.charAt(m.length - 1) == '/') return a(m.slice(0, -1));
      var _ = m.lastIndexOf('/');
      return _ === -1 ? m : m.slice(_ + 1);
    }
    function i(m, _) {
      typeof _ == 'string' && (_ = new Date(_));
      var w = _.getHours();
      (w = (w << 6) | _.getMinutes()),
        (w = (w << 5) | (_.getSeconds() >>> 1)),
        m.write_shift(2, w);
      var E = _.getFullYear() - 1980;
      (E = (E << 4) | (_.getMonth() + 1)),
        (E = (E << 5) | _.getDate()),
        m.write_shift(2, E);
    }
    function s(m) {
      var _ = m.read_shift(2) & 65535,
        w = m.read_shift(2) & 65535,
        E = new Date(),
        y = w & 31;
      w >>>= 5;
      var S = w & 15;
      (w >>>= 4),
        E.setMilliseconds(0),
        E.setFullYear(w + 1980),
        E.setMonth(S - 1),
        E.setDate(y);
      var P = _ & 31;
      _ >>>= 5;
      var G = _ & 63;
      return (
        (_ >>>= 6), E.setHours(_), E.setMinutes(G), E.setSeconds(P << 1), E
      );
    }
    function o(m) {
      ar(m, 0);
      for (var _ = {}, w = 0; m.l <= m.length - 4; ) {
        var E = m.read_shift(2),
          y = m.read_shift(2),
          S = m.l + y,
          P = {};
        switch (E) {
          case 21589:
            (w = m.read_shift(1)),
              w & 1 && (P.mtime = m.read_shift(4)),
              y > 5 &&
                (w & 2 && (P.atime = m.read_shift(4)),
                w & 4 && (P.ctime = m.read_shift(4))),
              P.mtime && (P.mt = new Date(P.mtime * 1e3));
            break;
        }
        (m.l = S), (_[E] = P);
      }
      return _;
    }
    var l;
    function f() {
      return l || (l = {});
    }
    function c(m, _) {
      if (m[0] == 80 && m[1] == 75) return ee(m, _);
      if ((m[0] | 32) == 109 && (m[1] | 32) == 105) return ue(m, _);
      if (m.length < 512)
        throw new Error('CFB file size ' + m.length + ' < 512');
      var w = 3,
        E = 512,
        y = 0,
        S = 0,
        P = 0,
        G = 0,
        b = 0,
        M = [],
        B = m.slice(0, 512);
      ar(B, 0);
      var Q = d(B);
      switch (((w = Q[0]), w)) {
        case 3:
          E = 512;
          break;
        case 4:
          E = 4096;
          break;
        case 0:
          if (Q[1] == 0) return ee(m, _);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + w);
      }
      E !== 512 && ((B = m.slice(0, E)), ar(B, 28));
      var oe = m.slice(0, E);
      u(B, w);
      var de = B.read_shift(4, 'i');
      if (w === 3 && de !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + de);
      (B.l += 4),
        (P = B.read_shift(4, 'i')),
        (B.l += 4),
        B.chk('00100000', 'Mini Stream Cutoff Size: '),
        (G = B.read_shift(4, 'i')),
        (y = B.read_shift(4, 'i')),
        (b = B.read_shift(4, 'i')),
        (S = B.read_shift(4, 'i'));
      for (
        var ae = -1, pe = 0;
        pe < 109 && ((ae = B.read_shift(4, 'i')), !(ae < 0));
        ++pe
      )
        M[pe] = ae;
      var Oe = p(m, E);
      x(b, S, Oe, E, M);
      var Ee = C(Oe, P, M, E);
      (Ee[P].name = '!Directory'),
        y > 0 && G !== ie && (Ee[G].name = '!MiniFAT'),
        (Ee[M[0]].name = '!FAT'),
        (Ee.fat_addrs = M),
        (Ee.ssz = E);
      var Me = {},
        Je = [],
        Tr = [],
        Xt = [];
      F(P, Ee, Oe, Je, y, Me, Tr, G), v(Tr, Xt, Je), Je.shift();
      var yn = { FileIndex: Tr, FullPaths: Xt };
      return _ && _.raw && (yn.raw = { header: oe, sectors: Oe }), yn;
    }
    function d(m) {
      if (m[m.l] == 80 && m[m.l + 1] == 75) return [0, 0];
      m.chk(Pe, 'Header Signature: '), (m.l += 16);
      var _ = m.read_shift(2, 'u');
      return [m.read_shift(2, 'u'), _];
    }
    function u(m, _) {
      var w = 9;
      switch (((m.l += 2), (w = m.read_shift(2)))) {
        case 9:
          if (_ != 3) throw new Error('Sector Shift: Expected 9 saw ' + w);
          break;
        case 12:
          if (_ != 4) throw new Error('Sector Shift: Expected 12 saw ' + w);
          break;
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + w);
      }
      m.chk('0600', 'Mini Sector Shift: '), m.chk('000000000000', 'Reserved: ');
    }
    function p(m, _) {
      for (var w = Math.ceil(m.length / _) - 1, E = [], y = 1; y < w; ++y)
        E[y - 1] = m.slice(y * _, (y + 1) * _);
      return (E[w - 1] = m.slice(w * _)), E;
    }
    function v(m, _, w) {
      for (
        var E = 0, y = 0, S = 0, P = 0, G = 0, b = w.length, M = [], B = [];
        E < b;
        ++E
      )
        (M[E] = B[E] = E), (_[E] = w[E]);
      for (; G < B.length; ++G)
        (E = B[G]),
          (y = m[E].L),
          (S = m[E].R),
          (P = m[E].C),
          M[E] === E &&
            (y !== -1 && M[y] !== y && (M[E] = M[y]),
            S !== -1 && M[S] !== S && (M[E] = M[S])),
          P !== -1 && (M[P] = E),
          y !== -1 &&
            E != M[E] &&
            ((M[y] = M[E]), B.lastIndexOf(y) < G && B.push(y)),
          S !== -1 &&
            E != M[E] &&
            ((M[S] = M[E]), B.lastIndexOf(S) < G && B.push(S));
      for (E = 1; E < b; ++E)
        M[E] === E &&
          (S !== -1 && M[S] !== S
            ? (M[E] = M[S])
            : y !== -1 && M[y] !== y && (M[E] = M[y]));
      for (E = 1; E < b; ++E)
        if (m[E].type !== 0) {
          if (((G = E), G != M[G]))
            do (G = M[G]), (_[E] = _[G] + '/' + _[E]);
            while (G !== 0 && M[G] !== -1 && G != M[G]);
          M[E] = -1;
        }
      for (_[0] += '/', E = 1; E < b; ++E) m[E].type !== 2 && (_[E] += '/');
    }
    function h(m, _, w) {
      for (var E = m.start, y = m.size, S = [], P = E; w && y > 0 && P >= 0; )
        S.push(_.slice(P * J, P * J + J)), (y -= J), (P = An(w, P * 4));
      return S.length === 0 ? Y(0) : Rt(S).slice(0, m.size);
    }
    function x(m, _, w, E, y) {
      var S = ie;
      if (m === ie) {
        if (_ !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (m !== -1) {
        var P = w[m],
          G = (E >>> 2) - 1;
        if (!P) return;
        for (var b = 0; b < G && (S = An(P, b * 4)) !== ie; ++b) y.push(S);
        x(An(P, E - 4), _ - 1, w, E, y);
      }
    }
    function D(m, _, w, E, y) {
      var S = [],
        P = [];
      y || (y = []);
      var G = E - 1,
        b = 0,
        M = 0;
      for (b = _; b >= 0; ) {
        (y[b] = !0), (S[S.length] = b), P.push(m[b]);
        var B = w[Math.floor((b * 4) / E)];
        if (((M = (b * 4) & G), E < 4 + M))
          throw new Error('FAT boundary crossed: ' + b + ' 4 ' + E);
        if (!m[B]) break;
        b = An(m[B], M);
      }
      return { nodes: S, data: bo([P]) };
    }
    function C(m, _, w, E) {
      var y = m.length,
        S = [],
        P = [],
        G = [],
        b = [],
        M = E - 1,
        B = 0,
        Q = 0,
        oe = 0,
        de = 0;
      for (B = 0; B < y; ++B)
        if (((G = []), (oe = B + _), oe >= y && (oe -= y), !P[oe])) {
          b = [];
          var ae = [];
          for (Q = oe; Q >= 0; ) {
            (ae[Q] = !0), (P[Q] = !0), (G[G.length] = Q), b.push(m[Q]);
            var pe = w[Math.floor((Q * 4) / E)];
            if (((de = (Q * 4) & M), E < 4 + de))
              throw new Error('FAT boundary crossed: ' + Q + ' 4 ' + E);
            if (!m[pe] || ((Q = An(m[pe], de)), ae[Q])) break;
          }
          S[oe] = { nodes: G, data: bo([b]) };
        }
      return S;
    }
    function F(m, _, w, E, y, S, P, G) {
      for (
        var b = 0, M = E.length ? 2 : 0, B = _[m].data, Q = 0, oe = 0, de;
        Q < B.length;
        Q += 128
      ) {
        var ae = B.slice(Q, Q + 128);
        ar(ae, 64),
          (oe = ae.read_shift(2)),
          (de = y0(ae, 0, oe - M)),
          E.push(de);
        var pe = {
            name: de,
            type: ae.read_shift(1),
            color: ae.read_shift(1),
            L: ae.read_shift(4, 'i'),
            R: ae.read_shift(4, 'i'),
            C: ae.read_shift(4, 'i'),
            clsid: ae.read_shift(16),
            state: ae.read_shift(4, 'i'),
            start: 0,
            size: 0,
          },
          Oe =
            ae.read_shift(2) +
            ae.read_shift(2) +
            ae.read_shift(2) +
            ae.read_shift(2);
        Oe !== 0 && (pe.ct = k(ae, ae.l - 8));
        var Ee =
          ae.read_shift(2) +
          ae.read_shift(2) +
          ae.read_shift(2) +
          ae.read_shift(2);
        Ee !== 0 && (pe.mt = k(ae, ae.l - 8)),
          (pe.start = ae.read_shift(4, 'i')),
          (pe.size = ae.read_shift(4, 'i')),
          pe.size < 0 &&
            pe.start < 0 &&
            ((pe.size = pe.type = 0), (pe.start = ie), (pe.name = '')),
          pe.type === 5
            ? ((b = pe.start), y > 0 && b !== ie && (_[b].name = '!StreamData'))
            : pe.size >= 4096
              ? ((pe.storage = 'fat'),
                _[pe.start] === void 0 &&
                  (_[pe.start] = D(w, pe.start, _.fat_addrs, _.ssz)),
                (_[pe.start].name = pe.name),
                (pe.content = _[pe.start].data.slice(0, pe.size)))
              : ((pe.storage = 'minifat'),
                pe.size < 0
                  ? (pe.size = 0)
                  : b !== ie &&
                    pe.start !== ie &&
                    _[b] &&
                    (pe.content = h(pe, _[b].data, (_[G] || {}).data))),
          pe.content && ar(pe.content, 0),
          (S[de] = pe),
          P.push(pe);
      }
    }
    function k(m, _) {
      return new Date(
        ((sr(m, _ + 4) / 1e7) * Math.pow(2, 32) +
          sr(m, _) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function j(m, _) {
      return f(), c(l.readFileSync(m), _);
    }
    function te(m, _) {
      var w = _ && _.type;
      switch (
        (w || (je && Buffer.isBuffer(m) && (w = 'buffer')), w || 'base64')
      ) {
        case 'file':
          return j(m, _);
        case 'base64':
          return c(Fr(qr(m)), _);
        case 'binary':
          return c(Fr(m), _);
      }
      return c(m, _);
    }
    function R(m, _) {
      var w = _ || {},
        E = w.root || 'Root Entry';
      if (
        (m.FullPaths || (m.FullPaths = []),
        m.FileIndex || (m.FileIndex = []),
        m.FullPaths.length !== m.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure');
      m.FullPaths.length === 0 &&
        ((m.FullPaths[0] = E + '/'), (m.FileIndex[0] = { name: E, type: 5 })),
        w.CLSID && (m.FileIndex[0].clsid = w.CLSID),
        H(m);
    }
    function H(m) {
      var _ = 'Sh33tJ5';
      if (!Ze.find(m, '/' + _)) {
        var w = Y(4);
        (w[0] = 55),
          (w[1] = w[3] = 50),
          (w[2] = 54),
          m.FileIndex.push({
            name: _,
            type: 2,
            content: w,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          m.FullPaths.push(m.FullPaths[0] + _),
          L(m);
      }
    }
    function L(m, _) {
      R(m);
      for (var w = !1, E = !1, y = m.FullPaths.length - 1; y >= 0; --y) {
        var S = m.FileIndex[y];
        switch (S.type) {
          case 0:
            E ? (w = !0) : (m.FileIndex.pop(), m.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (E = !0),
              isNaN(S.R * S.L * S.C) && (w = !0),
              S.R > -1 && S.L > -1 && S.R == S.L && (w = !0);
            break;
          default:
            w = !0;
            break;
        }
      }
      if (!(!w && !_)) {
        var P = new Date(1987, 1, 19),
          G = 0,
          b = Object.create ? Object.create(null) : {},
          M = [];
        for (y = 0; y < m.FullPaths.length; ++y)
          (b[m.FullPaths[y]] = !0),
            m.FileIndex[y].type !== 0 &&
              M.push([m.FullPaths[y], m.FileIndex[y]]);
        for (y = 0; y < M.length; ++y) {
          var B = n(M[y][0]);
          (E = b[B]),
            E ||
              (M.push([
                B,
                {
                  name: a(B).replace('/', ''),
                  type: 1,
                  clsid: ot,
                  ct: P,
                  mt: P,
                  content: null,
                },
              ]),
              (b[B] = !0));
        }
        for (
          M.sort(function (de, ae) {
            return e(de[0], ae[0]);
          }),
            m.FullPaths = [],
            m.FileIndex = [],
            y = 0;
          y < M.length;
          ++y
        )
          (m.FullPaths[y] = M[y][0]), (m.FileIndex[y] = M[y][1]);
        for (y = 0; y < M.length; ++y) {
          var Q = m.FileIndex[y],
            oe = m.FullPaths[y];
          if (
            ((Q.name = a(oe).replace('/', '')),
            (Q.L = Q.R = Q.C = -(Q.color = 1)),
            (Q.size = Q.content ? Q.content.length : 0),
            (Q.start = 0),
            (Q.clsid = Q.clsid || ot),
            y === 0)
          )
            (Q.C = M.length > 1 ? 1 : -1), (Q.size = 0), (Q.type = 5);
          else if (oe.slice(-1) == '/') {
            for (G = y + 1; G < M.length && n(m.FullPaths[G]) != oe; ++G);
            for (
              Q.C = G >= M.length ? -1 : G, G = y + 1;
              G < M.length && n(m.FullPaths[G]) != n(oe);
              ++G
            );
            (Q.R = G >= M.length ? -1 : G), (Q.type = 1);
          } else
            n(m.FullPaths[y + 1] || '') == n(oe) && (Q.R = y + 1), (Q.type = 2);
        }
      }
    }
    function X(m, _) {
      var w = _ || {};
      if (w.fileType == 'mad') return De(m, w);
      switch ((L(m), w.fileType)) {
        case 'zip':
          return nt(m, w);
      }
      var E = (function (de) {
          for (var ae = 0, pe = 0, Oe = 0; Oe < de.FileIndex.length; ++Oe) {
            var Ee = de.FileIndex[Oe];
            if (Ee.content) {
              var Me = Ee.content.length;
              Me > 0 &&
                (Me < 4096 ? (ae += (Me + 63) >> 6) : (pe += (Me + 511) >> 9));
            }
          }
          for (
            var Je = (de.FullPaths.length + 3) >> 2,
              Tr = (ae + 7) >> 3,
              Xt = (ae + 127) >> 7,
              yn = Tr + pe + Je + Xt,
              Hr = (yn + 127) >> 7,
              xa = Hr <= 109 ? 0 : Math.ceil((Hr - 109) / 127);
            (yn + Hr + xa + 127) >> 7 > Hr;

          )
            xa = ++Hr <= 109 ? 0 : Math.ceil((Hr - 109) / 127);
          var ur = [1, xa, Hr, Xt, Je, pe, ae, 0];
          return (
            (de.FileIndex[0].size = ae << 6),
            (ur[7] =
              (de.FileIndex[0].start =
                ur[0] + ur[1] + ur[2] + ur[3] + ur[4] + ur[5]) +
              ((ur[6] + 7) >> 3)),
            ur
          );
        })(m),
        y = Y(E[7] << 9),
        S = 0,
        P = 0;
      {
        for (S = 0; S < 8; ++S) y.write_shift(1, Ce[S]);
        for (S = 0; S < 8; ++S) y.write_shift(2, 0);
        for (
          y.write_shift(2, 62),
            y.write_shift(2, 3),
            y.write_shift(2, 65534),
            y.write_shift(2, 9),
            y.write_shift(2, 6),
            S = 0;
          S < 3;
          ++S
        )
          y.write_shift(2, 0);
        for (
          y.write_shift(4, 0),
            y.write_shift(4, E[2]),
            y.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1),
            y.write_shift(4, 0),
            y.write_shift(4, 4096),
            y.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : ie),
            y.write_shift(4, E[3]),
            y.write_shift(-4, E[1] ? E[0] - 1 : ie),
            y.write_shift(4, E[1]),
            S = 0;
          S < 109;
          ++S
        )
          y.write_shift(-4, S < E[2] ? E[1] + S : -1);
      }
      if (E[1])
        for (P = 0; P < E[1]; ++P) {
          for (; S < 236 + P * 127; ++S)
            y.write_shift(-4, S < E[2] ? E[1] + S : -1);
          y.write_shift(-4, P === E[1] - 1 ? ie : P + 1);
        }
      var G = function (de) {
        for (P += de; S < P - 1; ++S) y.write_shift(-4, S + 1);
        de && (++S, y.write_shift(-4, ie));
      };
      for (P = S = 0, P += E[1]; S < P; ++S) y.write_shift(-4, ze.DIFSECT);
      for (P += E[2]; S < P; ++S) y.write_shift(-4, ze.FATSECT);
      G(E[3]), G(E[4]);
      for (var b = 0, M = 0, B = m.FileIndex[0]; b < m.FileIndex.length; ++b)
        (B = m.FileIndex[b]),
          B.content &&
            ((M = B.content.length),
            !(M < 4096) && ((B.start = P), G((M + 511) >> 9)));
      for (G((E[6] + 7) >> 3); y.l & 511; ) y.write_shift(-4, ze.ENDOFCHAIN);
      for (P = S = 0, b = 0; b < m.FileIndex.length; ++b)
        (B = m.FileIndex[b]),
          B.content &&
            ((M = B.content.length),
            !(!M || M >= 4096) && ((B.start = P), G((M + 63) >> 6)));
      for (; y.l & 511; ) y.write_shift(-4, ze.ENDOFCHAIN);
      for (S = 0; S < E[4] << 2; ++S) {
        var Q = m.FullPaths[S];
        if (!Q || Q.length === 0) {
          for (b = 0; b < 17; ++b) y.write_shift(4, 0);
          for (b = 0; b < 3; ++b) y.write_shift(4, -1);
          for (b = 0; b < 12; ++b) y.write_shift(4, 0);
          continue;
        }
        (B = m.FileIndex[S]), S === 0 && (B.start = B.size ? B.start - 1 : ie);
        var oe = (S === 0 && w.root) || B.name;
        if (
          ((M = 2 * (oe.length + 1)),
          y.write_shift(64, oe, 'utf16le'),
          y.write_shift(2, M),
          y.write_shift(1, B.type),
          y.write_shift(1, B.color),
          y.write_shift(-4, B.L),
          y.write_shift(-4, B.R),
          y.write_shift(-4, B.C),
          B.clsid)
        )
          y.write_shift(16, B.clsid, 'hex');
        else for (b = 0; b < 4; ++b) y.write_shift(4, 0);
        y.write_shift(4, B.state || 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, B.start),
          y.write_shift(4, B.size),
          y.write_shift(4, 0);
      }
      for (S = 1; S < m.FileIndex.length; ++S)
        if (((B = m.FileIndex[S]), B.size >= 4096))
          if (((y.l = (B.start + 1) << 9), je && Buffer.isBuffer(B.content)))
            B.content.copy(y, y.l, 0, B.size), (y.l += (B.size + 511) & -512);
          else {
            for (b = 0; b < B.size; ++b) y.write_shift(1, B.content[b]);
            for (; b & 511; ++b) y.write_shift(1, 0);
          }
      for (S = 1; S < m.FileIndex.length; ++S)
        if (((B = m.FileIndex[S]), B.size > 0 && B.size < 4096))
          if (je && Buffer.isBuffer(B.content))
            B.content.copy(y, y.l, 0, B.size), (y.l += (B.size + 63) & -64);
          else {
            for (b = 0; b < B.size; ++b) y.write_shift(1, B.content[b]);
            for (; b & 63; ++b) y.write_shift(1, 0);
          }
      if (je) y.l = y.length;
      else for (; y.l < y.length; ) y.write_shift(1, 0);
      return y;
    }
    function K(m, _) {
      var w = m.FullPaths.map(function (b) {
          return b.toUpperCase();
        }),
        E = w.map(function (b) {
          var M = b.split('/');
          return M[M.length - (b.slice(-1) == '/' ? 2 : 1)];
        }),
        y = !1;
      _.charCodeAt(0) === 47
        ? ((y = !0), (_ = w[0].slice(0, -1) + _))
        : (y = _.indexOf('/') !== -1);
      var S = _.toUpperCase(),
        P = y === !0 ? w.indexOf(S) : E.indexOf(S);
      if (P !== -1) return m.FileIndex[P];
      var G = !S.match(fi);
      for (
        S = S.replace(Ca, ''), G && (S = S.replace(fi, '!')), P = 0;
        P < w.length;
        ++P
      )
        if (
          (G ? w[P].replace(fi, '!') : w[P]).replace(Ca, '') == S ||
          (G ? E[P].replace(fi, '!') : E[P]).replace(Ca, '') == S
        )
          return m.FileIndex[P];
      return null;
    }
    var J = 64,
      ie = -2,
      Pe = 'd0cf11e0a1b11ae1',
      Ce = [208, 207, 17, 224, 161, 177, 26, 225],
      ot = '00000000000000000000000000000000',
      ze = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ie,
        FREESECT: -1,
        HEADER_SIGNATURE: Pe,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: ot,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function pt(m, _, w) {
      f();
      var E = X(m, w);
      l.writeFileSync(_, E);
    }
    function qe(m) {
      for (var _ = new Array(m.length), w = 0; w < m.length; ++w)
        _[w] = String.fromCharCode(m[w]);
      return _.join('');
    }
    function mt(m, _) {
      var w = X(m, _);
      switch ((_ && _.type) || 'buffer') {
        case 'file':
          return f(), l.writeFileSync(_.filename, w), w;
        case 'binary':
          return typeof w == 'string' ? w : qe(w);
        case 'base64':
          return Ha(typeof w == 'string' ? w : qe(w));
        case 'buffer':
          if (je) return Buffer.isBuffer(w) ? w : Qr(w);
        case 'array':
          return typeof w == 'string' ? Fr(w) : w;
      }
      return w;
    }
    var ft;
    function A(m) {
      try {
        var _ = m.InflateRaw,
          w = new _();
        if (
          (w._processChunk(new Uint8Array([3, 0]), w._finishFlushFlag),
          w.bytesRead)
        )
          ft = m;
        else throw new Error('zlib does not expose bytesRead');
      } catch (E) {
        console.error('cannot use native zlib: ' + (E.message || E));
      }
    }
    function U(m, _) {
      if (!ft) return Yn(m, _);
      var w = ft.InflateRaw,
        E = new w(),
        y = E._processChunk(m.slice(m.l), E._finishFlushFlag);
      return (m.l += E.bytesRead), y;
    }
    function I(m) {
      return ft ? ft.deflateRawSync(m) : jn(m);
    }
    var O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      z = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      ge = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function _e(m) {
      var _ =
        (((m << 1) | (m << 11)) & 139536) | (((m << 5) | (m << 15)) & 558144);
      return ((_ >> 16) | (_ >> 8) | _) & 255;
    }
    for (
      var xe = typeof Uint8Array < 'u',
        le = xe ? new Uint8Array(256) : [],
        Le = 0;
      Le < 256;
      ++Le
    )
      le[Le] = _e(Le);
    function ke(m, _) {
      var w = le[m & 255];
      return _ <= 8
        ? w >>> (8 - _)
        : ((w = (w << 8) | le[(m >> 8) & 255]),
          _ <= 16
            ? w >>> (16 - _)
            : ((w = (w << 8) | le[(m >> 16) & 255]), w >>> (24 - _)));
    }
    function Et(m, _) {
      var w = _ & 7,
        E = _ >>> 3;
      return ((m[E] | (w <= 6 ? 0 : m[E + 1] << 8)) >>> w) & 3;
    }
    function Be(m, _) {
      var w = _ & 7,
        E = _ >>> 3;
      return ((m[E] | (w <= 5 ? 0 : m[E + 1] << 8)) >>> w) & 7;
    }
    function Ct(m, _) {
      var w = _ & 7,
        E = _ >>> 3;
      return ((m[E] | (w <= 4 ? 0 : m[E + 1] << 8)) >>> w) & 15;
    }
    function rt(m, _) {
      var w = _ & 7,
        E = _ >>> 3;
      return ((m[E] | (w <= 3 ? 0 : m[E + 1] << 8)) >>> w) & 31;
    }
    function he(m, _) {
      var w = _ & 7,
        E = _ >>> 3;
      return ((m[E] | (w <= 1 ? 0 : m[E + 1] << 8)) >>> w) & 127;
    }
    function Dt(m, _, w) {
      var E = _ & 7,
        y = _ >>> 3,
        S = (1 << w) - 1,
        P = m[y] >>> E;
      return (
        w < 8 - E ||
          ((P |= m[y + 1] << (8 - E)), w < 16 - E) ||
          ((P |= m[y + 2] << (16 - E)), w < 24 - E) ||
          (P |= m[y + 3] << (24 - E)),
        P & S
      );
    }
    function Pt(m, _, w) {
      var E = _ & 7,
        y = _ >>> 3;
      return (
        E <= 5
          ? (m[y] |= (w & 7) << E)
          : ((m[y] |= (w << E) & 255), (m[y + 1] = (w & 7) >> (8 - E))),
        _ + 3
      );
    }
    function wr(m, _, w) {
      var E = _ & 7,
        y = _ >>> 3;
      return (w = (w & 1) << E), (m[y] |= w), _ + 1;
    }
    function Nr(m, _, w) {
      var E = _ & 7,
        y = _ >>> 3;
      return (w <<= E), (m[y] |= w & 255), (w >>>= 8), (m[y + 1] = w), _ + 8;
    }
    function en(m, _, w) {
      var E = _ & 7,
        y = _ >>> 3;
      return (
        (w <<= E),
        (m[y] |= w & 255),
        (w >>>= 8),
        (m[y + 1] = w & 255),
        (m[y + 2] = w >>> 8),
        _ + 16
      );
    }
    function Br(m, _) {
      var w = m.length,
        E = 2 * w > _ ? 2 * w : _ + 5,
        y = 0;
      if (w >= _) return m;
      if (je) {
        var S = _o(E);
        if (m.copy) m.copy(S);
        else for (; y < m.length; ++y) S[y] = m[y];
        return S;
      } else if (xe) {
        var P = new Uint8Array(E);
        if (P.set) P.set(m);
        else for (; y < w; ++y) P[y] = m[y];
        return P;
      }
      return (m.length = E), m;
    }
    function Ht(m) {
      for (var _ = new Array(m), w = 0; w < m; ++w) _[w] = 0;
      return _;
    }
    function cr(m, _, w) {
      var E = 1,
        y = 0,
        S = 0,
        P = 0,
        G = 0,
        b = m.length,
        M = xe ? new Uint16Array(32) : Ht(32);
      for (S = 0; S < 32; ++S) M[S] = 0;
      for (S = b; S < w; ++S) m[S] = 0;
      b = m.length;
      var B = xe ? new Uint16Array(b) : Ht(b);
      for (S = 0; S < b; ++S) M[(y = m[S])]++, E < y && (E = y), (B[S] = 0);
      for (M[0] = 0, S = 1; S <= E; ++S) M[S + 16] = G = (G + M[S - 1]) << 1;
      for (S = 0; S < b; ++S) (G = m[S]), G != 0 && (B[S] = M[G + 16]++);
      var Q = 0;
      for (S = 0; S < b; ++S)
        if (((Q = m[S]), Q != 0))
          for (
            G = ke(B[S], E) >> (E - Q), P = (1 << (E + 4 - Q)) - 1;
            P >= 0;
            --P
          )
            _[G | (P << Q)] = (Q & 15) | (S << 4);
      return E;
    }
    var tn = xe ? new Uint16Array(512) : Ht(512),
      rn = xe ? new Uint16Array(32) : Ht(32);
    if (!xe) {
      for (var Er = 0; Er < 512; ++Er) tn[Er] = 0;
      for (Er = 0; Er < 32; ++Er) rn[Er] = 0;
    }
    (function () {
      for (var m = [], _ = 0; _ < 32; _++) m.push(5);
      cr(m, rn, 32);
      var w = [];
      for (_ = 0; _ <= 143; _++) w.push(8);
      for (; _ <= 255; _++) w.push(9);
      for (; _ <= 279; _++) w.push(7);
      for (; _ <= 287; _++) w.push(8);
      cr(w, tn, 288);
    })();
    var gn = (function () {
      for (
        var _ = xe ? new Uint8Array(32768) : [], w = 0, E = 0;
        w < ge.length - 1;
        ++w
      )
        for (; E < ge[w + 1]; ++E) _[E] = w;
      for (; E < 32768; ++E) _[E] = 29;
      var y = xe ? new Uint8Array(259) : [];
      for (w = 0, E = 0; w < z.length - 1; ++w)
        for (; E < z[w + 1]; ++E) y[E] = w;
      function S(G, b) {
        for (var M = 0; M < G.length; ) {
          var B = Math.min(65535, G.length - M),
            Q = M + B == G.length;
          for (
            b.write_shift(1, +Q),
              b.write_shift(2, B),
              b.write_shift(2, ~B & 65535);
            B-- > 0;

          )
            b[b.l++] = G[M++];
        }
        return b.l;
      }
      function P(G, b) {
        for (
          var M = 0, B = 0, Q = xe ? new Uint16Array(32768) : [];
          B < G.length;

        ) {
          var oe = Math.min(65535, G.length - B);
          if (oe < 10) {
            for (
              M = Pt(b, M, +(B + oe == G.length)),
                M & 7 && (M += 8 - (M & 7)),
                b.l = (M / 8) | 0,
                b.write_shift(2, oe),
                b.write_shift(2, ~oe & 65535);
              oe-- > 0;

            )
              b[b.l++] = G[B++];
            M = b.l * 8;
            continue;
          }
          M = Pt(b, M, +(B + oe == G.length) + 2);
          for (var de = 0; oe-- > 0; ) {
            var ae = G[B];
            de = ((de << 5) ^ ae) & 32767;
            var pe = -1,
              Oe = 0;
            if (
              (pe = Q[de]) &&
              ((pe |= B & -32768), pe > B && (pe -= 32768), pe < B)
            )
              for (; G[pe + Oe] == G[B + Oe] && Oe < 250; ) ++Oe;
            if (Oe > 2) {
              (ae = y[Oe]),
                ae <= 22
                  ? (M = Nr(b, M, le[ae + 1] >> 1) - 1)
                  : (Nr(b, M, 3),
                    (M += 5),
                    Nr(b, M, le[ae - 23] >> 5),
                    (M += 3));
              var Ee = ae < 8 ? 0 : (ae - 4) >> 2;
              Ee > 0 && (en(b, M, Oe - z[ae]), (M += Ee)),
                (ae = _[B - pe]),
                (M = Nr(b, M, le[ae] >> 3)),
                (M -= 3);
              var Me = ae < 4 ? 0 : (ae - 2) >> 1;
              Me > 0 && (en(b, M, B - pe - ge[ae]), (M += Me));
              for (var Je = 0; Je < Oe; ++Je)
                (Q[de] = B & 32767), (de = ((de << 5) ^ G[B]) & 32767), ++B;
              oe -= Oe - 1;
            } else
              ae <= 143 ? (ae = ae + 48) : (M = wr(b, M, 1)),
                (M = Nr(b, M, le[ae])),
                (Q[de] = B & 32767),
                ++B;
          }
          M = Nr(b, M, 0) - 1;
        }
        return (b.l = ((M + 7) / 8) | 0), b.l;
      }
      return function (b, M) {
        return b.length < 8 ? S(b, M) : P(b, M);
      };
    })();
    function jn(m) {
      var _ = Y(50 + Math.floor(m.length * 1.1)),
        w = gn(m, _);
      return _.slice(0, w);
    }
    var _n = xe ? new Uint16Array(32768) : Ht(32768),
      nn = xe ? new Uint16Array(32768) : Ht(32768),
      wn = xe ? new Uint16Array(128) : Ht(128),
      Gn = 1,
      Ge = 1;
    function En(m, _) {
      var w = rt(m, _) + 257;
      _ += 5;
      var E = rt(m, _) + 1;
      _ += 5;
      var y = Ct(m, _) + 4;
      _ += 4;
      for (
        var S = 0,
          P = xe ? new Uint8Array(19) : Ht(19),
          G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          b = 1,
          M = xe ? new Uint8Array(8) : Ht(8),
          B = xe ? new Uint8Array(8) : Ht(8),
          Q = P.length,
          oe = 0;
        oe < y;
        ++oe
      )
        (P[O[oe]] = S = Be(m, _)), b < S && (b = S), M[S]++, (_ += 3);
      var de = 0;
      for (M[0] = 0, oe = 1; oe <= b; ++oe) B[oe] = de = (de + M[oe - 1]) << 1;
      for (oe = 0; oe < Q; ++oe) (de = P[oe]) != 0 && (G[oe] = B[de]++);
      var ae = 0;
      for (oe = 0; oe < Q; ++oe)
        if (((ae = P[oe]), ae != 0)) {
          de = le[G[oe]] >> (8 - ae);
          for (var pe = (1 << (7 - ae)) - 1; pe >= 0; --pe)
            wn[de | (pe << ae)] = (ae & 7) | (oe << 3);
        }
      var Oe = [];
      for (b = 1; Oe.length < w + E; )
        switch (((de = wn[he(m, _)]), (_ += de & 7), (de >>>= 3))) {
          case 16:
            for (S = 3 + Et(m, _), _ += 2, de = Oe[Oe.length - 1]; S-- > 0; )
              Oe.push(de);
            break;
          case 17:
            for (S = 3 + Be(m, _), _ += 3; S-- > 0; ) Oe.push(0);
            break;
          case 18:
            for (S = 11 + he(m, _), _ += 7; S-- > 0; ) Oe.push(0);
            break;
          default:
            Oe.push(de), b < de && (b = de);
            break;
        }
      var Ee = Oe.slice(0, w),
        Me = Oe.slice(w);
      for (oe = w; oe < 286; ++oe) Ee[oe] = 0;
      for (oe = E; oe < 30; ++oe) Me[oe] = 0;
      return (Gn = cr(Ee, _n, 286)), (Ge = cr(Me, nn, 30)), _;
    }
    function Tn(m, _) {
      if (m[0] == 3 && !(m[1] & 3)) return [In(_), 2];
      for (
        var w = 0,
          E = 0,
          y = _o(_ || 1 << 18),
          S = 0,
          P = y.length >>> 0,
          G = 0,
          b = 0;
        (E & 1) == 0;

      ) {
        if (((E = Be(m, w)), (w += 3), E >>> 1))
          E >> 1 == 1
            ? ((G = 9), (b = 5))
            : ((w = En(m, w)), (G = Gn), (b = Ge));
        else {
          w & 7 && (w += 8 - (w & 7));
          var M = m[w >>> 3] | (m[(w >>> 3) + 1] << 8);
          if (((w += 32), M > 0))
            for (
              !_ && P < S + M && ((y = Br(y, S + M)), (P = y.length));
              M-- > 0;

            )
              (y[S++] = m[w >>> 3]), (w += 8);
          continue;
        }
        for (;;) {
          !_ && P < S + 32767 && ((y = Br(y, S + 32767)), (P = y.length));
          var B = Dt(m, w, G),
            Q = E >>> 1 == 1 ? tn[B] : _n[B];
          if (((w += Q & 15), (Q >>>= 4), ((Q >>> 8) & 255) === 0)) y[S++] = Q;
          else {
            if (Q == 256) break;
            Q -= 257;
            var oe = Q < 8 ? 0 : (Q - 4) >> 2;
            oe > 5 && (oe = 0);
            var de = S + z[Q];
            oe > 0 && ((de += Dt(m, w, oe)), (w += oe)),
              (B = Dt(m, w, b)),
              (Q = E >>> 1 == 1 ? rn[B] : nn[B]),
              (w += Q & 15),
              (Q >>>= 4);
            var ae = Q < 4 ? 0 : (Q - 2) >> 1,
              pe = ge[Q];
            for (
              ae > 0 && ((pe += Dt(m, w, ae)), (w += ae)),
                !_ && P < de && ((y = Br(y, de + 100)), (P = y.length));
              S < de;

            )
              (y[S] = y[S - pe]), ++S;
          }
        }
      }
      return _ ? [y, (w + 7) >>> 3] : [y.slice(0, S), (w + 7) >>> 3];
    }
    function Yn(m, _) {
      var w = m.slice(m.l || 0),
        E = Tn(w, _);
      return (m.l += E[1]), E[0];
    }
    function Ur(m, _) {
      if (m) typeof console < 'u' && console.error(_);
      else throw new Error(_);
    }
    function ee(m, _) {
      var w = m;
      ar(w, 0);
      var E = [],
        y = [],
        S = { FileIndex: E, FullPaths: y };
      R(S, { root: _.root });
      for (
        var P = w.length - 4;
        (w[P] != 80 || w[P + 1] != 75 || w[P + 2] != 5 || w[P + 3] != 6) &&
        P >= 0;

      )
        --P;
      (w.l = P + 4), (w.l += 4);
      var G = w.read_shift(2);
      w.l += 6;
      var b = w.read_shift(4);
      for (w.l = b, P = 0; P < G; ++P) {
        w.l += 20;
        var M = w.read_shift(4),
          B = w.read_shift(4),
          Q = w.read_shift(2),
          oe = w.read_shift(2),
          de = w.read_shift(2);
        w.l += 8;
        var ae = w.read_shift(4),
          pe = o(w.slice(w.l + Q, w.l + Q + oe));
        w.l += Q + oe + de;
        var Oe = w.l;
        (w.l = ae + 4), ye(w, M, B, S, pe), (w.l = Oe);
      }
      return S;
    }
    function ye(m, _, w, E, y) {
      m.l += 2;
      var S = m.read_shift(2),
        P = m.read_shift(2),
        G = s(m);
      if (S & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var b = m.read_shift(4),
          M = m.read_shift(4),
          B = m.read_shift(4),
          Q = m.read_shift(2),
          oe = m.read_shift(2),
          de = '',
          ae = 0;
        ae < Q;
        ++ae
      )
        de += String.fromCharCode(m[m.l++]);
      if (oe) {
        var pe = o(m.slice(m.l, m.l + oe));
        (pe[21589] || {}).mt && (G = pe[21589].mt),
          ((y || {})[21589] || {}).mt && (G = y[21589].mt);
      }
      m.l += oe;
      var Oe = m.slice(m.l, m.l + M);
      switch (P) {
        case 8:
          Oe = U(m, B);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + P);
      }
      var Ee = !1;
      S & 8 &&
        ((b = m.read_shift(4)),
        b == 134695760 && ((b = m.read_shift(4)), (Ee = !0)),
        (M = m.read_shift(4)),
        (B = m.read_shift(4))),
        M != _ && Ur(Ee, 'Bad compressed size: ' + _ + ' != ' + M),
        B != w && Ur(Ee, 'Bad uncompressed size: ' + w + ' != ' + B),
        Fe(E, de, Oe, { unsafe: !0, mt: G });
    }
    function nt(m, _) {
      var w = _ || {},
        E = [],
        y = [],
        S = Y(1),
        P = w.compression ? 8 : 0,
        G = 0,
        b = 0,
        M = 0,
        B = 0,
        Q = 0,
        oe = m.FullPaths[0],
        de = oe,
        ae = m.FileIndex[0],
        pe = [],
        Oe = 0;
      for (b = 1; b < m.FullPaths.length; ++b)
        if (
          ((de = m.FullPaths[b].slice(oe.length)),
          (ae = m.FileIndex[b]),
          !(!ae.size || !ae.content || de == 'Sh33tJ5'))
        ) {
          var Ee = B,
            Me = Y(de.length);
          for (M = 0; M < de.length; ++M)
            Me.write_shift(1, de.charCodeAt(M) & 127);
          (Me = Me.slice(0, Me.l)), (pe[Q] = Hd.buf(ae.content, 0));
          var Je = ae.content;
          P == 8 && (Je = I(Je)),
            (S = Y(30)),
            S.write_shift(4, 67324752),
            S.write_shift(2, 20),
            S.write_shift(2, G),
            S.write_shift(2, P),
            ae.mt ? i(S, ae.mt) : S.write_shift(4, 0),
            S.write_shift(-4, pe[Q]),
            S.write_shift(4, Je.length),
            S.write_shift(4, ae.content.length),
            S.write_shift(2, Me.length),
            S.write_shift(2, 0),
            (B += S.length),
            E.push(S),
            (B += Me.length),
            E.push(Me),
            (B += Je.length),
            E.push(Je),
            (S = Y(46)),
            S.write_shift(4, 33639248),
            S.write_shift(2, 0),
            S.write_shift(2, 20),
            S.write_shift(2, G),
            S.write_shift(2, P),
            S.write_shift(4, 0),
            S.write_shift(-4, pe[Q]),
            S.write_shift(4, Je.length),
            S.write_shift(4, ae.content.length),
            S.write_shift(2, Me.length),
            S.write_shift(2, 0),
            S.write_shift(2, 0),
            S.write_shift(2, 0),
            S.write_shift(2, 0),
            S.write_shift(4, 0),
            S.write_shift(4, Ee),
            (Oe += S.l),
            y.push(S),
            (Oe += Me.length),
            y.push(Me),
            ++Q;
        }
      return (
        (S = Y(22)),
        S.write_shift(4, 101010256),
        S.write_shift(2, 0),
        S.write_shift(2, 0),
        S.write_shift(2, Q),
        S.write_shift(2, Q),
        S.write_shift(4, Oe),
        S.write_shift(4, B),
        S.write_shift(2, 0),
        Rt([Rt(E), Rt(y), S])
      );
    }
    var lt = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function g(m, _) {
      if (m.ctype) return m.ctype;
      var w = m.name || '',
        E = w.match(/\.([^\.]+)$/);
      return (E && lt[E[1]]) ||
        (_ && ((E = (w = _).match(/[\.\\]([^\.\\])+$/)), E && lt[E[1]]))
        ? lt[E[1]]
        : 'application/octet-stream';
    }
    function T(m) {
      for (var _ = Ha(m), w = [], E = 0; E < _.length; E += 76)
        w.push(_.slice(E, E + 76));
      return (
        w.join(`\r
`) +
        `\r
`
      );
    }
    function N(m) {
      var _ = m.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (M) {
          var B = M.charCodeAt(0).toString(16).toUpperCase();
          return '=' + (B.length == 1 ? '0' + B : B);
        },
      );
      (_ = _.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
        _.charAt(0) ==
          `
` && (_ = '=0D' + _.slice(1)),
        (_ = _.replace(/\r(?!\n)/gm, '=0D')
          .replace(
            /\n\n/gm,
            `
=0A`,
          )
          .replace(/([^\r\n])\n/gm, '$1=0A'));
      for (
        var w = [],
          E = _.split(`\r
`),
          y = 0;
        y < E.length;
        ++y
      ) {
        var S = E[y];
        if (S.length == 0) {
          w.push('');
          continue;
        }
        for (var P = 0; P < S.length; ) {
          var G = 76,
            b = S.slice(P, P + G);
          b.charAt(G - 1) == '='
            ? G--
            : b.charAt(G - 2) == '='
              ? (G -= 2)
              : b.charAt(G - 3) == '=' && (G -= 3),
            (b = S.slice(P, P + G)),
            (P += G),
            P < S.length && (b += '='),
            w.push(b);
        }
      }
      return w.join(`\r
`);
    }
    function W(m) {
      for (var _ = [], w = 0; w < m.length; ++w) {
        for (var E = m[w]; w <= m.length && E.charAt(E.length - 1) == '='; )
          E = E.slice(0, E.length - 1) + m[++w];
        _.push(E);
      }
      for (var y = 0; y < _.length; ++y)
        _[y] = _[y].replace(/[=][0-9A-Fa-f]{2}/g, function (S) {
          return String.fromCharCode(parseInt(S.slice(1), 16));
        });
      return Fr(
        _.join(`\r
`),
      );
    }
    function re(m, _, w) {
      for (var E = '', y = '', S = '', P, G = 0; G < 10; ++G) {
        var b = _[G];
        if (!b || b.match(/^\s*$/)) break;
        var M = b.match(/^(.*?):\s*([^\s].*)$/);
        if (M)
          switch (M[1].toLowerCase()) {
            case 'content-location':
              E = M[2].trim();
              break;
            case 'content-type':
              S = M[2].trim();
              break;
            case 'content-transfer-encoding':
              y = M[2].trim();
              break;
          }
      }
      switch ((++G, y.toLowerCase())) {
        case 'base64':
          P = Fr(qr(_.slice(G).join('')));
          break;
        case 'quoted-printable':
          P = W(_.slice(G));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + y);
      }
      var B = Fe(m, E.slice(w.length), P, { unsafe: !0 });
      S && (B.ctype = S);
    }
    function ue(m, _) {
      if (qe(m.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var w = (_ && _.root) || '',
        E = (je && Buffer.isBuffer(m) ? m.toString('binary') : qe(m)).split(`\r
`),
        y = 0,
        S = '';
      for (y = 0; y < E.length; ++y)
        if (
          ((S = E[y]),
          !!/^Content-Location:/i.test(S) &&
            ((S = S.slice(S.indexOf('file'))),
            w || (w = S.slice(0, S.lastIndexOf('/') + 1)),
            S.slice(0, w.length) != w))
        )
          for (
            ;
            w.length > 0 &&
            ((w = w.slice(0, w.length - 1)),
            (w = w.slice(0, w.lastIndexOf('/') + 1)),
            S.slice(0, w.length) != w);

          );
      var P = (E[1] || '').match(/boundary="(.*?)"/);
      if (!P) throw new Error('MAD cannot find boundary');
      var G = '--' + (P[1] || ''),
        b = [],
        M = [],
        B = { FileIndex: b, FullPaths: M };
      R(B);
      var Q,
        oe = 0;
      for (y = 0; y < E.length; ++y) {
        var de = E[y];
        (de !== G && de !== G + '--') ||
          (oe++ && re(B, E.slice(Q, y), w), (Q = y));
      }
      return B;
    }
    function De(m, _) {
      var w = _ || {},
        E = w.boundary || 'SheetJS';
      E = '------=' + E;
      for (
        var y = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
            '',
            '',
            '',
          ],
          S = m.FullPaths[0],
          P = S,
          G = m.FileIndex[0],
          b = 1;
        b < m.FullPaths.length;
        ++b
      )
        if (
          ((P = m.FullPaths[b].slice(S.length)),
          (G = m.FileIndex[b]),
          !(!G.size || !G.content || P == 'Sh33tJ5'))
        ) {
          P = P.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (Oe) {
              return '_x' + Oe.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (Oe) {
            return '_u' + Oe.charCodeAt(0).toString(16) + '_';
          });
          for (
            var M = G.content,
              B = je && Buffer.isBuffer(M) ? M.toString('binary') : qe(M),
              Q = 0,
              oe = Math.min(1024, B.length),
              de = 0,
              ae = 0;
            ae <= oe;
            ++ae
          )
            (de = B.charCodeAt(ae)) >= 32 && de < 128 && ++Q;
          var pe = Q >= (oe * 4) / 5;
          y.push(E),
            y.push(
              'Content-Location: ' + (w.root || 'file:///C:/SheetJS/') + P,
            ),
            y.push(
              'Content-Transfer-Encoding: ' +
                (pe ? 'quoted-printable' : 'base64'),
            ),
            y.push('Content-Type: ' + g(G, P)),
            y.push(''),
            y.push(pe ? N(B) : T(B));
        }
      return (
        y.push(
          E +
            `--\r
`,
        ),
        y.join(`\r
`)
      );
    }
    function we(m) {
      var _ = {};
      return R(_, m), _;
    }
    function Fe(m, _, w, E) {
      var y = E && E.unsafe;
      y || R(m);
      var S = !y && Ze.find(m, _);
      if (!S) {
        var P = m.FullPaths[0];
        _.slice(0, P.length) == P
          ? (P = _)
          : (P.slice(-1) != '/' && (P += '/'),
            (P = (P + _).replace('//', '/'))),
          (S = { name: a(_), type: 2 }),
          m.FileIndex.push(S),
          m.FullPaths.push(P),
          y || Ze.utils.cfb_gc(m);
      }
      return (
        (S.content = w),
        (S.size = w ? w.length : 0),
        E &&
          (E.CLSID && (S.clsid = E.CLSID),
          E.mt && (S.mt = E.mt),
          E.ct && (S.ct = E.ct)),
        S
      );
    }
    function me(m, _) {
      R(m);
      var w = Ze.find(m, _);
      if (w) {
        for (var E = 0; E < m.FileIndex.length; ++E)
          if (m.FileIndex[E] == w)
            return m.FileIndex.splice(E, 1), m.FullPaths.splice(E, 1), !0;
      }
      return !1;
    }
    function Se(m, _, w) {
      R(m);
      var E = Ze.find(m, _);
      if (E) {
        for (var y = 0; y < m.FileIndex.length; ++y)
          if (m.FileIndex[y] == E)
            return (m.FileIndex[y].name = a(w)), (m.FullPaths[y] = w), !0;
      }
      return !1;
    }
    function Ue(m) {
      L(m, !0);
    }
    return (
      (r.find = K),
      (r.read = te),
      (r.parse = c),
      (r.write = mt),
      (r.writeFile = pt),
      (r.utils = {
        cfb_new: we,
        cfb_add: Fe,
        cfb_del: me,
        cfb_mov: Se,
        cfb_gc: Ue,
        ReadShift: Oa,
        CheckField: jl,
        prep_blob: ar,
        bconcat: Rt,
        use_zlib: A,
        _deflateRaw: jn,
        _inflateRaw: Yn,
        consts: ze,
      }),
      r
    );
  })();
function Wd(t) {
  return typeof t == 'string' ? ss(t) : Array.isArray(t) ? dd(t) : t;
}
function Qa(t, r, e) {
  if (typeof Deno < 'u') {
    if (e && typeof r == 'string')
      switch (e) {
        case 'utf8':
          r = new TextEncoder(e).encode(r);
          break;
        case 'binary':
          r = ss(r);
          break;
        default:
          throw new Error('Unsupported encoding ' + e);
      }
    return Deno.writeFileSync(t, r);
  }
  var n = e == 'utf8' ? Va(r) : r;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, t);
  if (typeof Blob < 'u') {
    var a = new Blob([Wd(n)], { type: 'application/octet-stream' });
    if (typeof navigator < 'u' && navigator.msSaveBlob)
      return navigator.msSaveBlob(a, t);
    if (typeof saveAs < 'u') return saveAs(a, t);
    if (
      typeof URL < 'u' &&
      typeof document < 'u' &&
      document.createElement &&
      URL.createObjectURL
    ) {
      var i = URL.createObjectURL(a);
      if (
        typeof chrome == 'object' &&
        typeof (chrome.downloads || {}).download == 'function'
      )
        return (
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(i);
            }, 6e4),
          chrome.downloads.download({ url: i, filename: t, saveAs: !0 })
        );
      var s = document.createElement('a');
      if (s.download != null)
        return (
          (s.download = t),
          (s.href = i),
          document.body.appendChild(s),
          s.click(),
          document.body.removeChild(s),
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(i);
            }, 6e4),
          i
        );
    }
  }
  if (typeof $ < 'u' && typeof File < 'u' && typeof Folder < 'u')
    try {
      var o = File(t);
      return (
        o.open('w'),
        (o.encoding = 'binary'),
        Array.isArray(r) && (r = Za(r)),
        o.write(r),
        o.close(),
        r
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + t);
}
function bt(t) {
  for (var r = Object.keys(t), e = [], n = 0; n < r.length; ++n)
    Object.prototype.hasOwnProperty.call(t, r[n]) && e.push(r[n]);
  return e;
}
function Co(t, r) {
  for (var e = [], n = bt(t), a = 0; a !== n.length; ++a)
    e[t[n[a]][r]] == null && (e[t[n[a]][r]] = n[a]);
  return e;
}
function _0(t) {
  for (var r = [], e = bt(t), n = 0; n !== e.length; ++n) r[t[e[n]]] = e[n];
  return r;
}
function ls(t) {
  for (var r = [], e = bt(t), n = 0; n !== e.length; ++n)
    r[t[e[n]]] = parseInt(e[n], 10);
  return r;
}
function Vd(t) {
  for (var r = [], e = bt(t), n = 0; n !== e.length; ++n)
    r[t[e[n]]] == null && (r[t[e[n]]] = []), r[t[e[n]]].push(e[n]);
  return r;
}
var Li = new Date(1899, 11, 30, 0, 0, 0);
function Zt(t, r) {
  var e = t.getTime(),
    n = Li.getTime() + (t.getTimezoneOffset() - Li.getTimezoneOffset()) * 6e4;
  return (e - n) / (24 * 60 * 60 * 1e3);
}
var Fl = new Date(),
  jd = Li.getTime() + (Fl.getTimezoneOffset() - Li.getTimezoneOffset()) * 6e4,
  Do = Fl.getTimezoneOffset();
function Cl(t) {
  var r = new Date();
  return (
    r.setTime(t * 24 * 60 * 60 * 1e3 + jd),
    r.getTimezoneOffset() !== Do &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - Do) * 6e4),
    r
  );
}
var Oo = new Date('2017-02-19T19:06:09.000Z'),
  Dl = isNaN(Oo.getFullYear()) ? new Date('2/19/17') : Oo,
  Gd = Dl.getFullYear() == 2017;
function Yt(t, r) {
  var e = new Date(t);
  if (Gd)
    return (
      r > 0
        ? e.setTime(e.getTime() + e.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && e.setTime(e.getTime() - e.getTimezoneOffset() * 60 * 1e3),
      e
    );
  if (t instanceof Date) return t;
  if (Dl.getFullYear() == 1917 && !isNaN(e.getFullYear())) {
    var n = e.getFullYear();
    return t.indexOf('' + n) > -1 || e.setFullYear(e.getFullYear() + 100), e;
  }
  var a = t.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    i = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
  return (
    t.indexOf('Z') > -1 &&
      (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)),
    i
  );
}
function cs(t, r) {
  if (je && Buffer.isBuffer(t)) return t.toString('binary');
  if (typeof TextDecoder < 'u')
    try {
      var e = {
        '€': '',
        '‚': '',
        ƒ: '',
        '„': '',
        '…': '',
        '†': '',
        '‡': '',
        ˆ: '',
        '‰': '',
        Š: '',
        '‹': '',
        Œ: '',
        Ž: '',
        '‘': '',
        '’': '',
        '“': '',
        '”': '',
        '•': '',
        '–': '',
        '—': '',
        '˜': '',
        '™': '',
        š: '',
        '›': '',
        œ: '',
        ž: '',
        Ÿ: '',
      };
      return (
        Array.isArray(t) && (t = new Uint8Array(t)),
        new TextDecoder('latin1')
          .decode(t)
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (i) {
            return e[i] || i;
          })
      );
    } catch {}
  for (var n = [], a = 0; a != t.length; ++a) n.push(String.fromCharCode(t[a]));
  return n.join('');
}
function Qt(t) {
  if (typeof JSON < 'u' && !Array.isArray(t))
    return JSON.parse(JSON.stringify(t));
  if (typeof t != 'object' || t == null) return t;
  if (t instanceof Date) return new Date(t.getTime());
  var r = {};
  for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) && (r[e] = Qt(t[e]));
  return r;
}
function ut(t, r) {
  for (var e = ''; e.length < r; ) e += t;
  return e;
}
function Kr(t) {
  var r = Number(t);
  if (!isNaN(r)) return isFinite(r) ? r : NaN;
  if (!/\d/.test(t)) return r;
  var e = 1,
    n = t
      .replace(/([\d]),([\d])/g, '$1$2')
      .replace(/[$]/g, '')
      .replace(/[%]/g, function () {
        return (e *= 100), '';
      });
  return !isNaN((r = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (a, i) {
      return (e = -e), i;
    })),
    !isNaN((r = Number(n))))
    ? r / e
    : r;
}
var Yd = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];
function Wa(t) {
  var r = new Date(t),
    e = new Date(NaN),
    n = r.getYear(),
    a = r.getMonth(),
    i = r.getDate();
  if (isNaN(i)) return e;
  var s = t.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
      s.length > 3 && Yd.indexOf(s) == -1)
    )
      return e;
  } else if (s.match(/[a-z]/)) return e;
  return n < 0 || n > 8099
    ? e
    : (a > 0 || i > 1) && n != 101
      ? r
      : t.match(/[^-0-9:,\/\\]/)
        ? e
        : r;
}
function Ie(t, r, e) {
  if (t.FullPaths) {
    if (typeof e == 'string') {
      var n;
      return je ? (n = Qr(e)) : (n = pd(e)), Ze.utils.cfb_add(t, r, n);
    }
    Ze.utils.cfb_add(t, r, e);
  } else t.file(r, e);
}
function w0() {
  return Ze.utils.cfb_new();
}
var wt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  Xd = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  E0 = _0(Xd),
  T0 = /[&<>'"]/g,
  Kd = /[\u0000-\u0008\u000b-\u001f]/g;
function Ke(t) {
  var r = t + '';
  return r
    .replace(T0, function (e) {
      return E0[e];
    })
    .replace(Kd, function (e) {
      return '_x' + ('000' + e.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function No(t) {
  return Ke(t).replace(/ /g, '_x0020_');
}
var Ol = /[\u0000-\u001f]/g;
function $d(t) {
  var r = t + '';
  return r
    .replace(T0, function (e) {
      return E0[e];
    })
    .replace(/\n/g, '<br/>')
    .replace(Ol, function (e) {
      return '&#x' + ('000' + e.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function zd(t) {
  var r = t + '';
  return r
    .replace(T0, function (e) {
      return E0[e];
    })
    .replace(Ol, function (e) {
      return '&#x' + e.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function qd(t) {
  return t.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function Jd(t) {
  switch (t) {
    case 1:
    case !0:
    case '1':
    case 'true':
    case 'TRUE':
      return !0;
    default:
      return !1;
  }
}
function Ts(t) {
  for (var r = '', e = 0, n = 0, a = 0, i = 0, s = 0, o = 0; e < t.length; ) {
    if (((n = t.charCodeAt(e++)), n < 128)) {
      r += String.fromCharCode(n);
      continue;
    }
    if (((a = t.charCodeAt(e++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= a & 63), (r += String.fromCharCode(s));
      continue;
    }
    if (((i = t.charCodeAt(e++)), n < 240)) {
      r += String.fromCharCode(((n & 15) << 12) | ((a & 63) << 6) | (i & 63));
      continue;
    }
    (s = t.charCodeAt(e++)),
      (o =
        (((n & 7) << 18) | ((a & 63) << 12) | ((i & 63) << 6) | (s & 63)) -
        65536),
      (r += String.fromCharCode(55296 + ((o >>> 10) & 1023))),
      (r += String.fromCharCode(56320 + (o & 1023)));
  }
  return r;
}
function Ro(t) {
  var r = In(2 * t.length),
    e,
    n,
    a = 1,
    i = 0,
    s = 0,
    o;
  for (n = 0; n < t.length; n += a)
    (a = 1),
      (o = t.charCodeAt(n)) < 128
        ? (e = o)
        : o < 224
          ? ((e = (o & 31) * 64 + (t.charCodeAt(n + 1) & 63)), (a = 2))
          : o < 240
            ? ((e =
                (o & 15) * 4096 +
                (t.charCodeAt(n + 1) & 63) * 64 +
                (t.charCodeAt(n + 2) & 63)),
              (a = 3))
            : ((a = 4),
              (e =
                (o & 7) * 262144 +
                (t.charCodeAt(n + 1) & 63) * 4096 +
                (t.charCodeAt(n + 2) & 63) * 64 +
                (t.charCodeAt(n + 3) & 63)),
              (e -= 65536),
              (s = 55296 + ((e >>> 10) & 1023)),
              (e = 56320 + (e & 1023))),
      s !== 0 && ((r[i++] = s & 255), (r[i++] = s >>> 8), (s = 0)),
      (r[i++] = e % 256),
      (r[i++] = e >>> 8);
  return r.slice(0, i).toString('ucs2');
}
function ko(t) {
  return Qr(t, 'binary').toString('utf8');
}
var ci = 'foo bar bazâð£',
  Da = (je && ((ko(ci) == Ts(ci) && ko) || (Ro(ci) == Ts(ci) && Ro))) || Ts,
  Va = je
    ? function (t) {
        return Qr(t, 'utf8').toString('binary');
      }
    : function (t) {
        for (var r = [], e = 0, n = 0, a = 0; e < t.length; )
          switch (((n = t.charCodeAt(e++)), !0)) {
            case n < 128:
              r.push(String.fromCharCode(n));
              break;
            case n < 2048:
              r.push(String.fromCharCode(192 + (n >> 6))),
                r.push(String.fromCharCode(128 + (n & 63)));
              break;
            case n >= 55296 && n < 57344:
              (n -= 55296),
                (a = t.charCodeAt(e++) - 56320 + (n << 10)),
                r.push(String.fromCharCode(240 + ((a >> 18) & 7))),
                r.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                r.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                r.push(String.fromCharCode(128 + (a & 63)));
              break;
            default:
              r.push(String.fromCharCode(224 + (n >> 12))),
                r.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                r.push(String.fromCharCode(128 + (n & 63)));
          }
        return r.join('');
      },
  Zd = (function () {
    var t = [
      ['nbsp', ' '],
      ['middot', '·'],
      ['quot', '"'],
      ['apos', "'"],
      ['gt', '>'],
      ['lt', '<'],
      ['amp', '&'],
    ].map(function (r) {
      return [new RegExp('&' + r[0] + ';', 'ig'), r[1]];
    });
    return function (e) {
      for (
        var n = e
            .replace(/^[\t\n\r ]+/, '')
            .replace(/[\t\n\r ]+$/, '')
            .replace(/>\s+/g, '>')
            .replace(/\s+</g, '<')
            .replace(/[\t\n\r ]+/g, ' ')
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`,
            )
            .replace(/<[^>]*>/g, ''),
          a = 0;
        a < t.length;
        ++a
      )
        n = n.replace(t[a][0], t[a][1]);
      return n;
    };
  })(),
  Nl = /(^\s|\s$|\n)/;
function kt(t, r) {
  return (
    '<' +
    t +
    (r.match(Nl) ? ' xml:space="preserve"' : '') +
    '>' +
    r +
    '</' +
    t +
    '>'
  );
}
function ja(t) {
  return bt(t)
    .map(function (r) {
      return ' ' + r + '="' + t[r] + '"';
    })
    .join('');
}
function se(t, r, e) {
  return (
    '<' +
    t +
    (e != null ? ja(e) : '') +
    (r != null
      ? (r.match(Nl) ? ' xml:space="preserve"' : '') + '>' + r + '</' + t
      : '/') +
    '>'
  );
}
function $s(t, r) {
  try {
    return t.toISOString().replace(/\.\d*/, '');
  } catch (e) {
    if (r) throw e;
  }
  return '';
}
function Qd(t, r) {
  switch (typeof t) {
    case 'string':
      var e = se('vt:lpwstr', Ke(t));
      return (e = e.replace(/&quot;/g, '_x0022_')), e;
    case 'number':
      return se((t | 0) == t ? 'vt:i4' : 'vt:r8', Ke(String(t)));
    case 'boolean':
      return se('vt:bool', t ? 'true' : 'false');
  }
  if (t instanceof Date) return se('vt:filetime', $s(t));
  throw new Error('Unable to serialize ' + t);
}
var St = {
    CORE_PROPS:
      'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
    CUST_PROPS:
      'http://schemas.openxmlformats.org/officeDocument/2006/custom-properties',
    EXT_PROPS:
      'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
    CT: 'http://schemas.openxmlformats.org/package/2006/content-types',
    RELS: 'http://schemas.openxmlformats.org/package/2006/relationships',
    TCMNT:
      'http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments',
    dc: 'http://purl.org/dc/elements/1.1/',
    dcterms: 'http://purl.org/dc/terms/',
    dcmitype: 'http://purl.org/dc/dcmitype/',
    r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    vt: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    xsd: 'http://www.w3.org/2001/XMLSchema',
  },
  da = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  ir = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function ep(t, r) {
  for (
    var e = 1 - 2 * (t[r + 7] >>> 7),
      n = ((t[r + 7] & 127) << 4) + ((t[r + 6] >>> 4) & 15),
      a = t[r + 6] & 15,
      i = 5;
    i >= 0;
    --i
  )
    a = a * 256 + t[r + i];
  return n == 2047
    ? a == 0
      ? e * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (a += Math.pow(2, 52))),
      e * Math.pow(2, n - 52) * a);
}
function tp(t, r, e) {
  var n = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7,
    a = 0,
    i = 0,
    s = n ? -r : r;
  isFinite(s)
    ? s == 0
      ? (a = i = 0)
      : ((a = Math.floor(Math.log(s) / Math.LN2)),
        (i = s * Math.pow(2, 52 - a)),
        a <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))
          ? (a = -1022)
          : ((i -= Math.pow(2, 52)), (a += 1023)))
    : ((a = 2047), (i = isNaN(r) ? 26985 : 0));
  for (var o = 0; o <= 5; ++o, i /= 256) t[e + o] = i & 255;
  (t[e + 6] = ((a & 15) << 4) | (i & 15)), (t[e + 7] = (a >> 4) | n);
}
var Io = function (t) {
    for (var r = [], e = 10240, n = 0; n < t[0].length; ++n)
      if (t[0][n])
        for (var a = 0, i = t[0][n].length; a < i; a += e)
          r.push.apply(r, t[0][n].slice(a, a + e));
    return r;
  },
  bo = je
    ? function (t) {
        return t[0].length > 0 && Buffer.isBuffer(t[0][0])
          ? Buffer.concat(
              t[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : Qr(r);
              }),
            )
          : Io(t);
      }
    : Io,
  Po = function (t, r, e) {
    for (var n = [], a = r; a < e; a += 2)
      n.push(String.fromCharCode(Sa(t, a)));
    return n.join('').replace(Ca, '');
  },
  y0 = je
    ? function (t, r, e) {
        return Buffer.isBuffer(t)
          ? t.toString('utf16le', r, e).replace(Ca, '')
          : Po(t, r, e);
      }
    : Po,
  Mo = function (t, r, e) {
    for (var n = [], a = r; a < r + e; ++a)
      n.push(('0' + t[a].toString(16)).slice(-2));
    return n.join('');
  },
  Rl = je
    ? function (t, r, e) {
        return Buffer.isBuffer(t) ? t.toString('hex', r, r + e) : Mo(t, r, e);
      }
    : Mo,
  Lo = function (t, r, e) {
    for (var n = [], a = r; a < e; a++) n.push(String.fromCharCode(Qn(t, a)));
    return n.join('');
  },
  ei = je
    ? function (r, e, n) {
        return Buffer.isBuffer(r) ? r.toString('utf8', e, n) : Lo(r, e, n);
      }
    : Lo,
  kl = function (t, r) {
    var e = sr(t, r);
    return e > 0 ? ei(t, r + 4, r + 4 + e - 1) : '';
  },
  Il = kl,
  bl = function (t, r) {
    var e = sr(t, r);
    return e > 0 ? ei(t, r + 4, r + 4 + e - 1) : '';
  },
  Pl = bl,
  Ml = function (t, r) {
    var e = 2 * sr(t, r);
    return e > 0 ? ei(t, r + 4, r + 4 + e - 1) : '';
  },
  Ll = Ml,
  Bl = function (r, e) {
    var n = sr(r, e);
    return n > 0 ? y0(r, e + 4, e + 4 + n) : '';
  },
  Ul = Bl,
  Hl = function (t, r) {
    var e = sr(t, r);
    return e > 0 ? ei(t, r + 4, r + 4 + e) : '';
  },
  Wl = Hl,
  Vl = function (t, r) {
    return ep(t, r);
  },
  Bi = Vl,
  S0 = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  };
je &&
  ((Il = function (r, e) {
    if (!Buffer.isBuffer(r)) return kl(r, e);
    var n = r.readUInt32LE(e);
    return n > 0 ? r.toString('utf8', e + 4, e + 4 + n - 1) : '';
  }),
  (Pl = function (r, e) {
    if (!Buffer.isBuffer(r)) return bl(r, e);
    var n = r.readUInt32LE(e);
    return n > 0 ? r.toString('utf8', e + 4, e + 4 + n - 1) : '';
  }),
  (Ll = function (r, e) {
    if (!Buffer.isBuffer(r)) return Ml(r, e);
    var n = 2 * r.readUInt32LE(e);
    return r.toString('utf16le', e + 4, e + 4 + n - 1);
  }),
  (Ul = function (r, e) {
    if (!Buffer.isBuffer(r)) return Bl(r, e);
    var n = r.readUInt32LE(e);
    return r.toString('utf16le', e + 4, e + 4 + n);
  }),
  (Wl = function (r, e) {
    if (!Buffer.isBuffer(r)) return Hl(r, e);
    var n = r.readUInt32LE(e);
    return r.toString('utf8', e + 4, e + 4 + n);
  }),
  (Bi = function (r, e) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(e) : Vl(r, e);
  }),
  (S0 = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  }));
var Qn = function (t, r) {
    return t[r];
  },
  Sa = function (t, r) {
    return t[r + 1] * 256 + t[r];
  },
  rp = function (t, r) {
    var e = t[r + 1] * 256 + t[r];
    return e < 32768 ? e : (65535 - e + 1) * -1;
  },
  sr = function (t, r) {
    return t[r + 3] * (1 << 24) + (t[r + 2] << 16) + (t[r + 1] << 8) + t[r];
  },
  An = function (t, r) {
    return (t[r + 3] << 24) | (t[r + 2] << 16) | (t[r + 1] << 8) | t[r];
  },
  np = function (t, r) {
    return (t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3];
  };
function Oa(t, r) {
  var e = '',
    n,
    a,
    i = [],
    s,
    o,
    l,
    f;
  switch (r) {
    case 'dbcs':
      if (((f = this.l), je && Buffer.isBuffer(this)))
        e = this.slice(this.l, this.l + 2 * t).toString('utf16le');
      else
        for (l = 0; l < t; ++l)
          (e += String.fromCharCode(Sa(this, f))), (f += 2);
      t *= 2;
      break;
    case 'utf8':
      e = ei(this, this.l, this.l + t);
      break;
    case 'utf16le':
      (t *= 2), (e = y0(this, this.l, this.l + t));
      break;
    case 'wstr':
      return Oa.call(this, t, 'dbcs');
    case 'lpstr-ansi':
      (e = Il(this, this.l)), (t = 4 + sr(this, this.l));
      break;
    case 'lpstr-cp':
      (e = Pl(this, this.l)), (t = 4 + sr(this, this.l));
      break;
    case 'lpwstr':
      (e = Ll(this, this.l)), (t = 4 + 2 * sr(this, this.l));
      break;
    case 'lpp4':
      (t = 4 + sr(this, this.l)), (e = Ul(this, this.l)), t & 2 && (t += 2);
      break;
    case '8lpp4':
      (t = 4 + sr(this, this.l)),
        (e = Wl(this, this.l)),
        t & 3 && (t += 4 - (t & 3));
      break;
    case 'cstr':
      for (t = 0, e = ''; (s = Qn(this, this.l + t++)) !== 0; ) i.push(oi(s));
      e = i.join('');
      break;
    case '_wstr':
      for (t = 0, e = ''; (s = Sa(this, this.l + t)) !== 0; )
        i.push(oi(s)), (t += 2);
      (t += 2), (e = i.join(''));
      break;
    case 'dbcs-cont':
      for (e = '', f = this.l, l = 0; l < t; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Qn(this, f)),
            (this.l = f + 1),
            (o = Oa.call(this, t - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + o
          );
        i.push(oi(Sa(this, f))), (f += 2);
      }
      (e = i.join('')), (t *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (e = '', f = this.l, l = 0; l != t; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Qn(this, f)),
            (this.l = f + 1),
            (o = Oa.call(this, t - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            i.join('') + o
          );
        i.push(oi(Qn(this, f))), (f += 1);
      }
      e = i.join('');
      break;
    default:
      switch (t) {
        case 1:
          return (n = Qn(this, this.l)), this.l++, n;
        case 2:
          return (n = (r === 'i' ? rp : Sa)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return r === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (t > 0 ? An : np)(this, this.l)), (this.l += 4), n)
            : ((a = sr(this, this.l)), (this.l += 4), a);
        case 8:
        case -8:
          if (r === 'f')
            return (
              t == 8
                ? (a = Bi(this, this.l))
                : (a = Bi(
                    [
                      this[this.l + 7],
                      this[this.l + 6],
                      this[this.l + 5],
                      this[this.l + 4],
                      this[this.l + 3],
                      this[this.l + 2],
                      this[this.l + 1],
                      this[this.l + 0],
                    ],
                    0,
                  )),
              (this.l += 8),
              a
            );
          t = 8;
        case 16:
          e = Rl(this, this.l, t);
          break;
      }
  }
  return (this.l += t), e;
}
var ap = function (t, r, e) {
    (t[e] = r & 255),
      (t[e + 1] = (r >>> 8) & 255),
      (t[e + 2] = (r >>> 16) & 255),
      (t[e + 3] = (r >>> 24) & 255);
  },
  ip = function (t, r, e) {
    (t[e] = r & 255),
      (t[e + 1] = (r >> 8) & 255),
      (t[e + 2] = (r >> 16) & 255),
      (t[e + 3] = (r >> 24) & 255);
  },
  sp = function (t, r, e) {
    (t[e] = r & 255), (t[e + 1] = (r >>> 8) & 255);
  };
function op(t, r, e) {
  var n = 0,
    a = 0;
  if (e === 'dbcs') {
    for (a = 0; a != r.length; ++a) sp(this, r.charCodeAt(a), this.l + 2 * a);
    n = 2 * r.length;
  } else if (e === 'sbcs') {
    for (r = r.replace(/[^\x00-\x7F]/g, '_'), a = 0; a != r.length; ++a)
      this[this.l + a] = r.charCodeAt(a) & 255;
    n = r.length;
  } else if (e === 'hex') {
    for (; a < t; ++a)
      this[this.l++] = parseInt(r.slice(2 * a, 2 * a + 2), 16) || 0;
    return this;
  } else if (e === 'utf16le') {
    var i = Math.min(this.l + t, this.length);
    for (a = 0; a < Math.min(r.length, t); ++a) {
      var s = r.charCodeAt(a);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < i; ) this[this.l++] = 0;
    return this;
  } else
    switch (t) {
      case 1:
        (n = 1), (this[this.l] = r & 255);
        break;
      case 2:
        (n = 2),
          (this[this.l] = r & 255),
          (r >>>= 8),
          (this[this.l + 1] = r & 255);
        break;
      case 3:
        (n = 3),
          (this[this.l] = r & 255),
          (r >>>= 8),
          (this[this.l + 1] = r & 255),
          (r >>>= 8),
          (this[this.l + 2] = r & 255);
        break;
      case 4:
        (n = 4), ap(this, r, this.l);
        break;
      case 8:
        if (((n = 8), e === 'f')) {
          tp(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), ip(this, r, this.l);
        break;
    }
  return (this.l += n), this;
}
function jl(t, r) {
  var e = Rl(this, this.l, t.length >> 1);
  if (e !== t) throw new Error(r + 'Expected ' + t + ' saw ' + e);
  this.l += t.length >> 1;
}
function ar(t, r) {
  (t.l = r), (t.read_shift = Oa), (t.chk = jl), (t.write_shift = op);
}
function Lr(t, r) {
  t.l += r;
}
function Y(t) {
  var r = In(t);
  return ar(r, 0), r;
}
function Jt() {
  var t = [],
    r = je ? 256 : 2048,
    e = function (f) {
      var c = Y(f);
      return ar(c, 0), c;
    },
    n = e(r),
    a = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && t.push(n),
        (n = null));
    },
    i = function (f) {
      return n && f < n.length - n.l ? n : (a(), (n = e(Math.max(f + 1, r))));
    },
    s = function () {
      return a(), Rt(t);
    },
    o = function (f) {
      a(), (n = f), n.l == null && (n.l = n.length), i(r);
    };
  return { next: i, push: o, end: s, _bufs: t };
}
function Z(t, r, e, n) {
  var a = +r,
    i;
  if (!isNaN(a)) {
    n || (n = e_[a].p || (e || []).length || 0),
      (i = 1 + (a >= 128 ? 1 : 0) + 1),
      n >= 128 && ++i,
      n >= 16384 && ++i,
      n >= 2097152 && ++i;
    var s = t.next(i);
    a <= 127
      ? s.write_shift(1, a)
      : (s.write_shift(1, (a & 127) + 128), s.write_shift(1, a >> 7));
    for (var o = 0; o != 4; ++o)
      if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7);
      else {
        s.write_shift(1, n);
        break;
      }
    n > 0 && S0(e) && t.push(e);
  }
}
function Na(t, r, e) {
  var n = Qt(t);
  if (
    (r.s
      ? (n.cRel && (n.c += r.s.c), n.rRel && (n.r += r.s.r))
      : (n.cRel && (n.c += r.c), n.rRel && (n.r += r.r)),
    !e || e.biff < 12)
  ) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function Bo(t, r, e) {
  var n = Qt(t);
  return (n.s = Na(n.s, r.s, e)), (n.e = Na(n.e, r.s, e)), n;
}
function Ra(t, r) {
  if (t.cRel && t.c < 0) for (t = Qt(t); t.c < 0; ) t.c += r > 8 ? 16384 : 256;
  if (t.rRel && t.r < 0)
    for (t = Qt(t); t.r < 0; ) t.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var e = $e(t);
  return (
    !t.cRel && t.cRel != null && (e = cp(e)),
    !t.rRel && t.rRel != null && (e = fp(e)),
    e
  );
}
function ys(t, r) {
  return t.s.r == 0 &&
    !t.s.rRel &&
    t.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !t.e.rRel
    ? (t.s.cRel ? '' : '$') +
        Bt(t.s.c) +
        ':' +
        (t.e.cRel ? '' : '$') +
        Bt(t.e.c)
    : t.s.c == 0 &&
        !t.s.cRel &&
        t.e.c == (r.biff >= 12 ? 16383 : 255) &&
        !t.e.cRel
      ? (t.s.rRel ? '' : '$') +
        It(t.s.r) +
        ':' +
        (t.e.rRel ? '' : '$') +
        It(t.e.r)
      : Ra(t.s, r.biff) + ':' + Ra(t.e, r.biff);
}
function A0(t) {
  return parseInt(lp(t), 10) - 1;
}
function It(t) {
  return '' + (t + 1);
}
function fp(t) {
  return t.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function lp(t) {
  return t.replace(/\$(\d+)$/, '$1');
}
function F0(t) {
  for (var r = up(t), e = 0, n = 0; n !== r.length; ++n)
    e = 26 * e + r.charCodeAt(n) - 64;
  return e - 1;
}
function Bt(t) {
  if (t < 0) throw new Error('invalid column ' + t);
  var r = '';
  for (++t; t; t = Math.floor((t - 1) / 26))
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r;
}
function cp(t) {
  return t.replace(/^([A-Z])/, '$$$1');
}
function up(t) {
  return t.replace(/^\$([A-Z])/, '$1');
}
function hp(t) {
  return t.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function At(t) {
  for (var r = 0, e = 0, n = 0; n < t.length; ++n) {
    var a = t.charCodeAt(n);
    a >= 48 && a <= 57
      ? (r = 10 * r + (a - 48))
      : a >= 65 && a <= 90 && (e = 26 * e + (a - 64));
  }
  return { c: e - 1, r: r - 1 };
}
function $e(t) {
  for (var r = t.c + 1, e = ''; r; r = ((r - 1) / 26) | 0)
    e = String.fromCharCode(((r - 1) % 26) + 65) + e;
  return e + (t.r + 1);
}
function lr(t) {
  var r = t.indexOf(':');
  return r == -1
    ? { s: At(t), e: At(t) }
    : { s: At(t.slice(0, r)), e: At(t.slice(r + 1)) };
}
function _t(t, r) {
  return typeof r > 'u' || typeof r == 'number'
    ? _t(t.s, t.e)
    : (typeof t != 'string' && (t = $e(t)),
      typeof r != 'string' && (r = $e(r)),
      t == r ? t : t + ':' + r);
}
function st(t) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    e = 0,
    n = 0,
    a = 0,
    i = t.length;
  for (e = 0; n < i && !((a = t.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    e = 26 * e + a;
  for (
    r.s.c = --e, e = 0;
    n < i && !((a = t.charCodeAt(n) - 48) < 0 || a > 9);
    ++n
  )
    e = 10 * e + a;
  if (((r.s.r = --e), n === i || a != 10))
    return (r.e.c = r.s.c), (r.e.r = r.s.r), r;
  for (++n, e = 0; n != i && !((a = t.charCodeAt(n) - 64) < 1 || a > 26); ++n)
    e = 26 * e + a;
  for (
    r.e.c = --e, e = 0;
    n != i && !((a = t.charCodeAt(n) - 48) < 0 || a > 9);
    ++n
  )
    e = 10 * e + a;
  return (r.e.r = --e), r;
}
function Uo(t, r) {
  var e = t.t == 'd' && r instanceof Date;
  if (t.z != null)
    try {
      return (t.w = pn(t.z, e ? Zt(r) : r));
    } catch {}
  try {
    return (t.w = pn((t.XF || {}).numFmtId || (e ? 14 : 0), e ? Zt(r) : r));
  } catch {
    return '' + r;
  }
}
function Jr(t, r, e) {
  return t == null || t.t == null || t.t == 'z'
    ? ''
    : t.w !== void 0
      ? t.w
      : (t.t == 'd' && !t.z && e && e.dateNF && (t.z = e.dateNF),
        t.t == 'e' ? ti[t.v] || t.v : r == null ? Uo(t, t.v) : Uo(t, r));
}
function Bn(t, r) {
  var e = r && r.sheet ? r.sheet : 'Sheet1',
    n = {};
  return (n[e] = t), { SheetNames: [e], Sheets: n };
}
function Gl(t, r, e) {
  var n = e || {},
    a = t ? Array.isArray(t) : n.dense,
    i = t || (a ? [] : {}),
    s = 0,
    o = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? At(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
    i['!ref'] || (i['!ref'] = 'A1:A1');
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i['!ref']) {
    var c = st(i['!ref']);
    (f.s.c = c.s.c),
      (f.s.r = c.s.r),
      (f.e.c = Math.max(f.e.c, c.e.c)),
      (f.e.r = Math.max(f.e.r, c.e.r)),
      s == -1 && (f.e.r = s = c.e.r + 1);
  }
  for (var d = 0; d != r.length; ++d)
    if (r[d]) {
      if (!Array.isArray(r[d]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var u = 0; u != r[d].length; ++u)
        if (!(typeof r[d][u] > 'u')) {
          var p = { v: r[d][u] },
            v = s + d,
            h = o + u;
          if (
            (f.s.r > v && (f.s.r = v),
            f.s.c > h && (f.s.c = h),
            f.e.r < v && (f.e.r = v),
            f.e.c < h && (f.e.c = h),
            r[d][u] &&
              typeof r[d][u] == 'object' &&
              !Array.isArray(r[d][u]) &&
              !(r[d][u] instanceof Date))
          )
            p = r[d][u];
          else if (
            (Array.isArray(p.v) && ((p.f = r[d][u][1]), (p.v = p.v[0])),
            p.v === null)
          )
            if (p.f) p.t = 'n';
            else if (n.nullError) (p.t = 'e'), (p.v = 0);
            else if (n.sheetStubs) p.t = 'z';
            else continue;
          else
            typeof p.v == 'number'
              ? (p.t = 'n')
              : typeof p.v == 'boolean'
                ? (p.t = 'b')
                : p.v instanceof Date
                  ? ((p.z = n.dateNF || dt[14]),
                    n.cellDates
                      ? ((p.t = 'd'), (p.w = pn(p.z, Zt(p.v))))
                      : ((p.t = 'n'), (p.v = Zt(p.v)), (p.w = pn(p.z, p.v))))
                  : (p.t = 's');
          if (a)
            i[v] || (i[v] = []),
              i[v][h] && i[v][h].z && (p.z = i[v][h].z),
              (i[v][h] = p);
          else {
            var x = $e({ c: h, r: v });
            i[x] && i[x].z && (p.z = i[x].z), (i[x] = p);
          }
        }
    }
  return f.s.c < 1e7 && (i['!ref'] = _t(f)), i;
}
function pa(t, r) {
  return Gl(null, t, r);
}
function dp(t) {
  return t.read_shift(4, 'i');
}
function Dr(t, r) {
  return r || (r = Y(4)), r.write_shift(4, t), r;
}
function Ut(t) {
  var r = t.read_shift(4);
  return r === 0 ? '' : t.read_shift(r, 'dbcs');
}
function Ft(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = Y(4 + 2 * t.length))),
    r.write_shift(4, t.length),
    t.length > 0 && r.write_shift(0, t, 'dbcs'),
    e ? r.slice(0, r.l) : r
  );
}
function pp(t) {
  return { ich: t.read_shift(2), ifnt: t.read_shift(2) };
}
function vp(t, r) {
  return r || (r = Y(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function C0(t, r) {
  var e = t.l,
    n = t.read_shift(1),
    a = Ut(t),
    i = [],
    s = { t: a, h: a };
  if ((n & 1) !== 0) {
    for (var o = t.read_shift(4), l = 0; l != o; ++l) i.push(pp(t));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (t.l = e + r), s;
}
function mp(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = Y(15 + 4 * t.t.length))),
    r.write_shift(1, 0),
    Ft(t.t, r),
    e ? r.slice(0, r.l) : r
  );
}
var xp = C0;
function gp(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = Y(23 + 4 * t.t.length))),
    r.write_shift(1, 1),
    Ft(t.t, r),
    r.write_shift(4, 1),
    vp({}, r),
    e ? r.slice(0, r.l) : r
  );
}
function _r(t) {
  var r = t.read_shift(4),
    e = t.read_shift(2);
  return (e += t.read_shift(1) << 16), t.l++, { c: r, iStyleRef: e };
}
function Un(t, r) {
  return (
    r == null && (r = Y(8)),
    r.write_shift(-4, t.c),
    r.write_shift(3, t.iStyleRef || t.s),
    r.write_shift(1, 0),
    r
  );
}
function Hn(t) {
  var r = t.read_shift(2);
  return (r += t.read_shift(1) << 16), t.l++, { c: -1, iStyleRef: r };
}
function Wn(t, r) {
  return (
    r == null && (r = Y(4)),
    r.write_shift(3, t.iStyleRef || t.s),
    r.write_shift(1, 0),
    r
  );
}
var _p = Ut,
  Yl = Ft;
function D0(t) {
  var r = t.read_shift(4);
  return r === 0 || r === 4294967295 ? '' : t.read_shift(r, 'dbcs');
}
function Ui(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = Y(127))),
    r.write_shift(4, t.length > 0 ? t.length : 4294967295),
    t.length > 0 && r.write_shift(0, t, 'dbcs'),
    e ? r.slice(0, r.l) : r
  );
}
var wp = Ut,
  zs = D0,
  O0 = Ui;
function Xl(t) {
  var r = t.slice(t.l, t.l + 4),
    e = r[0] & 1,
    n = r[0] & 2;
  t.l += 4;
  var a =
    n === 0 ? Bi([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : An(r, 0) >> 2;
  return e ? a / 100 : a;
}
function Kl(t, r) {
  r == null && (r = Y(4));
  var e = 0,
    n = 0,
    a = t * 100;
  if (
    (t == (t | 0) && t >= -536870912 && t < 1 << 29
      ? (n = 1)
      : a == (a | 0) && a >= -536870912 && a < 1 << 29 && ((n = 1), (e = 1)),
    n)
  )
    r.write_shift(-4, ((e ? a : t) << 2) + (e + 2));
  else throw new Error('unsupported RkNumber ' + t);
}
function $l(t) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = t.read_shift(4)),
    (r.e.r = t.read_shift(4)),
    (r.s.c = t.read_shift(4)),
    (r.e.c = t.read_shift(4)),
    r
  );
}
function Ep(t, r) {
  return (
    r || (r = Y(16)),
    r.write_shift(4, t.s.r),
    r.write_shift(4, t.e.r),
    r.write_shift(4, t.s.c),
    r.write_shift(4, t.e.c),
    r
  );
}
var Vn = $l,
  va = Ep;
function ma(t) {
  if (t.length - t.l < 8) throw 'XLS Xnum Buffer underflow';
  return t.read_shift(8, 'f');
}
function bn(t, r) {
  return (r || Y(8)).write_shift(8, t, 'f');
}
function Tp(t) {
  var r = {},
    e = t.read_shift(1),
    n = e >>> 1,
    a = t.read_shift(1),
    i = t.read_shift(2, 'i'),
    s = t.read_shift(1),
    o = t.read_shift(1),
    l = t.read_shift(1);
  switch ((t.l++, n)) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = a;
      var f = Rp[a];
      f && (r.rgb = qo(f));
      break;
    case 2:
      r.rgb = qo([s, o, l]);
      break;
    case 3:
      r.theme = a;
      break;
  }
  return i != 0 && (r.tint = i > 0 ? i / 32767 : i / 32768), r;
}
function Hi(t, r) {
  if ((r || (r = Y(8)), !t || t.auto))
    return r.write_shift(4, 0), r.write_shift(4, 0), r;
  t.index != null
    ? (r.write_shift(1, 2), r.write_shift(1, t.index))
    : t.theme != null
      ? (r.write_shift(1, 6), r.write_shift(1, t.theme))
      : (r.write_shift(1, 5), r.write_shift(1, 0));
  var e = t.tint || 0;
  if (
    (e > 0 ? (e *= 32767) : e < 0 && (e *= 32768),
    r.write_shift(2, e),
    !t.rgb || t.theme != null)
  )
    r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  else {
    var n = t.rgb || 'FFFFFF';
    typeof n == 'number' && (n = ('000000' + n.toString(16)).slice(-6)),
      r.write_shift(1, parseInt(n.slice(0, 2), 16)),
      r.write_shift(1, parseInt(n.slice(2, 4), 16)),
      r.write_shift(1, parseInt(n.slice(4, 6), 16)),
      r.write_shift(1, 255);
  }
  return r;
}
function yp(t) {
  var r = t.read_shift(1);
  t.l++;
  var e = {
    fBold: r & 1,
    fItalic: r & 2,
    fUnderline: r & 4,
    fStrikeout: r & 8,
    fOutline: r & 16,
    fShadow: r & 32,
    fCondense: r & 64,
    fExtend: r & 128,
  };
  return e;
}
function Sp(t, r) {
  r || (r = Y(2));
  var e =
    (t.italic ? 2 : 0) |
    (t.strike ? 8 : 0) |
    (t.outline ? 16 : 0) |
    (t.shadow ? 32 : 0) |
    (t.condense ? 64 : 0) |
    (t.extend ? 128 : 0);
  return r.write_shift(1, e), r.write_shift(1, 0), r;
}
var zl = 2,
  nr = 3,
  ui = 11,
  Wi = 19,
  hi = 64,
  Ap = 65,
  Fp = 71,
  Cp = 4108,
  Dp = 4126,
  Nt = 80,
  Ho = {
    1: { n: 'CodePage', t: zl },
    2: { n: 'Category', t: Nt },
    3: { n: 'PresentationFormat', t: Nt },
    4: { n: 'ByteCount', t: nr },
    5: { n: 'LineCount', t: nr },
    6: { n: 'ParagraphCount', t: nr },
    7: { n: 'SlideCount', t: nr },
    8: { n: 'NoteCount', t: nr },
    9: { n: 'HiddenCount', t: nr },
    10: { n: 'MultimediaClipCount', t: nr },
    11: { n: 'ScaleCrop', t: ui },
    12: { n: 'HeadingPairs', t: Cp },
    13: { n: 'TitlesOfParts', t: Dp },
    14: { n: 'Manager', t: Nt },
    15: { n: 'Company', t: Nt },
    16: { n: 'LinksUpToDate', t: ui },
    17: { n: 'CharacterCount', t: nr },
    19: { n: 'SharedDoc', t: ui },
    22: { n: 'HyperlinksChanged', t: ui },
    23: { n: 'AppVersion', t: nr, p: 'version' },
    24: { n: 'DigSig', t: Ap },
    26: { n: 'ContentType', t: Nt },
    27: { n: 'ContentStatus', t: Nt },
    28: { n: 'Language', t: Nt },
    29: { n: 'Version', t: Nt },
    255: {},
    2147483648: { n: 'Locale', t: Wi },
    2147483651: { n: 'Behavior', t: Wi },
    1919054434: {},
  },
  Wo = {
    1: { n: 'CodePage', t: zl },
    2: { n: 'Title', t: Nt },
    3: { n: 'Subject', t: Nt },
    4: { n: 'Author', t: Nt },
    5: { n: 'Keywords', t: Nt },
    6: { n: 'Comments', t: Nt },
    7: { n: 'Template', t: Nt },
    8: { n: 'LastAuthor', t: Nt },
    9: { n: 'RevNumber', t: Nt },
    10: { n: 'EditTime', t: hi },
    11: { n: 'LastPrinted', t: hi },
    12: { n: 'CreatedDate', t: hi },
    13: { n: 'ModifiedDate', t: hi },
    14: { n: 'PageCount', t: nr },
    15: { n: 'WordCount', t: nr },
    16: { n: 'CharCount', t: nr },
    17: { n: 'Thumbnail', t: Fp },
    18: { n: 'Application', t: Nt },
    19: { n: 'DocSecurity', t: nr },
    255: {},
    2147483648: { n: 'Locale', t: Wi },
    2147483651: { n: 'Behavior', t: Wi },
    1919054434: {},
  };
function Op(t) {
  return t.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
  });
}
var Np = Op([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215,
    16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128,
    8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164,
    13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960,
    65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
    10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232,
    16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
    3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  Rp = Qt(Np),
  ti = {
    0: '#NULL!',
    7: '#DIV/0!',
    15: '#VALUE!',
    23: '#REF!',
    29: '#NAME?',
    36: '#NUM!',
    42: '#N/A',
    43: '#GETTING_DATA',
    255: '#WTF?',
  },
  kp = {
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml':
      'workbooks',
    'application/vnd.ms-excel.sheet.macroEnabled.main+xml': 'workbooks',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.main': 'workbooks',
    'application/vnd.ms-excel.addin.macroEnabled.main+xml': 'workbooks',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml':
      'workbooks',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml':
      'sheets',
    'application/vnd.ms-excel.worksheet': 'sheets',
    'application/vnd.ms-excel.binIndexWs': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml':
      'charts',
    'application/vnd.ms-excel.chartsheet': 'charts',
    'application/vnd.ms-excel.macrosheet+xml': 'macros',
    'application/vnd.ms-excel.macrosheet': 'macros',
    'application/vnd.ms-excel.intlmacrosheet': 'TODO',
    'application/vnd.ms-excel.binIndexMs': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml':
      'dialogs',
    'application/vnd.ms-excel.dialogsheet': 'dialogs',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml':
      'strs',
    'application/vnd.ms-excel.sharedStrings': 'strs',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml':
      'styles',
    'application/vnd.ms-excel.styles': 'styles',
    'application/vnd.openxmlformats-package.core-properties+xml': 'coreprops',
    'application/vnd.openxmlformats-officedocument.custom-properties+xml':
      'custprops',
    'application/vnd.openxmlformats-officedocument.extended-properties+xml':
      'extprops',
    'application/vnd.openxmlformats-officedocument.customXmlProperties+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty':
      'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml':
      'comments',
    'application/vnd.ms-excel.comments': 'comments',
    'application/vnd.ms-excel.threadedcomments+xml': 'threadedcomments',
    'application/vnd.ms-excel.person+xml': 'people',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml':
      'metadata',
    'application/vnd.ms-excel.sheetMetadata': 'metadata',
    'application/vnd.ms-excel.pivotTable': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.chart+xml': 'TODO',
    'application/vnd.ms-office.chartcolorstyle+xml': 'TODO',
    'application/vnd.ms-office.chartstyle+xml': 'TODO',
    'application/vnd.ms-office.chartex+xml': 'TODO',
    'application/vnd.ms-excel.calcChain': 'calcchains',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml':
      'calcchains',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings':
      'TODO',
    'application/vnd.ms-office.activeX': 'TODO',
    'application/vnd.ms-office.activeX+xml': 'TODO',
    'application/vnd.ms-excel.attachedToolbars': 'TODO',
    'application/vnd.ms-excel.connections': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml':
      'TODO',
    'application/vnd.ms-excel.externalLink': 'links',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml':
      'links',
    'application/vnd.ms-excel.pivotCacheDefinition': 'TODO',
    'application/vnd.ms-excel.pivotCacheRecords': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml':
      'TODO',
    'application/vnd.ms-excel.queryTable': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml':
      'TODO',
    'application/vnd.ms-excel.userNames': 'TODO',
    'application/vnd.ms-excel.revisionHeaders': 'TODO',
    'application/vnd.ms-excel.revisionLog': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml':
      'TODO',
    'application/vnd.ms-excel.tableSingleCells': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml':
      'TODO',
    'application/vnd.ms-excel.slicer': 'TODO',
    'application/vnd.ms-excel.slicerCache': 'TODO',
    'application/vnd.ms-excel.slicer+xml': 'TODO',
    'application/vnd.ms-excel.slicerCache+xml': 'TODO',
    'application/vnd.ms-excel.wsSortMap': 'TODO',
    'application/vnd.ms-excel.table': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.theme+xml': 'themes',
    'application/vnd.openxmlformats-officedocument.themeOverride+xml': 'TODO',
    'application/vnd.ms-excel.Timeline+xml': 'TODO',
    'application/vnd.ms-excel.TimelineCache+xml': 'TODO',
    'application/vnd.ms-office.vbaProject': 'vba',
    'application/vnd.ms-office.vbaProjectSignature': 'TODO',
    'application/vnd.ms-office.volatileDependencies': 'TODO',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml':
      'TODO',
    'application/vnd.ms-excel.controlproperties+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.model+data': 'TODO',
    'application/vnd.ms-excel.Survey+xml': 'TODO',
    'application/vnd.openxmlformats-officedocument.drawing+xml': 'drawings',
    'application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml':
      'TODO',
    'application/vnd.openxmlformats-officedocument.vmlDrawing': 'TODO',
    'application/vnd.openxmlformats-package.relationships+xml': 'rels',
    'application/vnd.openxmlformats-officedocument.oleObject': 'TODO',
    'image/png': 'TODO',
    sheet: 'js',
  },
  di = {
    workbooks: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml',
      xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.main+xml',
      xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.main',
      xlam: 'application/vnd.ms-excel.addin.macroEnabled.main+xml',
      xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml',
    },
    strs: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml',
      xlsb: 'application/vnd.ms-excel.sharedStrings',
    },
    comments: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml',
      xlsb: 'application/vnd.ms-excel.comments',
    },
    sheets: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml',
      xlsb: 'application/vnd.ms-excel.worksheet',
    },
    charts: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml',
      xlsb: 'application/vnd.ms-excel.chartsheet',
    },
    dialogs: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml',
      xlsb: 'application/vnd.ms-excel.dialogsheet',
    },
    macros: {
      xlsx: 'application/vnd.ms-excel.macrosheet+xml',
      xlsb: 'application/vnd.ms-excel.macrosheet',
    },
    metadata: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml',
      xlsb: 'application/vnd.ms-excel.sheetMetadata',
    },
    styles: {
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml',
      xlsb: 'application/vnd.ms-excel.styles',
    },
  };
function ql() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: '',
  };
}
function Jl(t, r) {
  var e = Vd(kp),
    n = [],
    a;
  (n[n.length] = wt),
    (n[n.length] = se('Types', null, {
      xmlns: St.CT,
      'xmlns:xsd': St.xsd,
      'xmlns:xsi': St.xsi,
    })),
    (n = n.concat(
      [
        ['xml', 'application/xml'],
        ['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
        ['vml', 'application/vnd.openxmlformats-officedocument.vmlDrawing'],
        ['data', 'application/vnd.openxmlformats-officedocument.model+data'],
        ['bmp', 'image/bmp'],
        ['png', 'image/png'],
        ['gif', 'image/gif'],
        ['emf', 'image/x-emf'],
        ['wmf', 'image/x-wmf'],
        ['jpg', 'image/jpeg'],
        ['jpeg', 'image/jpeg'],
        ['tif', 'image/tiff'],
        ['tiff', 'image/tiff'],
        ['pdf', 'application/pdf'],
        ['rels', 'application/vnd.openxmlformats-package.relationships+xml'],
      ].map(function (l) {
        return se('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var i = function (l) {
      t[l] &&
        t[l].length > 0 &&
        ((a = t[l][0]),
        (n[n.length] = se('Override', null, {
          PartName: (a[0] == '/' ? '' : '/') + a,
          ContentType: di[l][r.bookType] || di[l].xlsx,
        })));
    },
    s = function (l) {
      (t[l] || []).forEach(function (f) {
        n[n.length] = se('Override', null, {
          PartName: (f[0] == '/' ? '' : '/') + f,
          ContentType: di[l][r.bookType] || di[l].xlsx,
        });
      });
    },
    o = function (l) {
      (t[l] || []).forEach(function (f) {
        n[n.length] = se('Override', null, {
          PartName: (f[0] == '/' ? '' : '/') + f,
          ContentType: e[l][0],
        });
      });
    };
  return (
    i('workbooks'),
    s('sheets'),
    s('charts'),
    o('themes'),
    ['strs', 'styles'].forEach(i),
    ['coreprops', 'extprops', 'custprops'].forEach(o),
    o('vba'),
    o('comments'),
    o('threadedcomments'),
    o('drawings'),
    s('metadata'),
    o('people'),
    n.length > 2 &&
      ((n[n.length] = '</Types>'), (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var He = {
  WB: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
  HLINK:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink',
  VML: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing',
  XPATH:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath',
  XMISS:
    'http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing',
  CMNT: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments',
  CORE_PROPS:
    'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties',
  EXT_PROPS:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties',
  CUST_PROPS:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties',
  SST: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings',
  STY: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles',
  THEME:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme',
  WS: [
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet',
    'http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet',
  ],
  DRAW: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing',
  XLMETA:
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata',
  TCMNT:
    'http://schemas.microsoft.com/office/2017/10/relationships/threadedComment',
  PEOPLE: 'http://schemas.microsoft.com/office/2017/10/relationships/person',
  VBA: 'http://schemas.microsoft.com/office/2006/relationships/vbaProject',
};
function Zl(t) {
  var r = t.lastIndexOf('/');
  return t.slice(0, r + 1) + '_rels/' + t.slice(r + 1) + '.rels';
}
function ra(t) {
  var r = [wt, se('Relationships', null, { xmlns: St.RELS })];
  return (
    bt(t['!id']).forEach(function (e) {
      r[r.length] = se('Relationship', null, t['!id'][e]);
    }),
    r.length > 2 &&
      ((r[r.length] = '</Relationships>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Xe(t, r, e, n, a, i) {
  if (
    (a || (a = {}),
    t['!id'] || (t['!id'] = {}),
    t['!idx'] || (t['!idx'] = 1),
    r < 0)
  )
    for (r = t['!idx']; t['!id']['rId' + r]; ++r);
  if (
    ((t['!idx'] = r + 1),
    (a.Id = 'rId' + r),
    (a.Type = n),
    (a.Target = e),
    [He.HLINK, He.XPATH, He.XMISS].indexOf(a.Type) > -1 &&
      (a.TargetMode = 'External'),
    t['!id'][a.Id])
  )
    throw new Error('Cannot rewrite rId ' + r);
  return (t['!id'][a.Id] = a), (t[('/' + a.Target).replace('//', '/')] = a), r;
}
function Ip(t) {
  var r = [wt];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
    r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var e = 0; e < t.length; ++e)
    r.push(
      '  <manifest:file-entry manifest:full-path="' +
        t[e][0] +
        '" manifest:media-type="' +
        t[e][1] +
        `"/>
`,
    );
  return r.push('</manifest:manifest>'), r.join('');
}
function Vo(t, r, e) {
  return [
    '  <rdf:Description rdf:about="' +
      t +
      `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
      (e || 'odf') +
      '#' +
      r +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join('');
}
function bp(t, r) {
  return [
    '  <rdf:Description rdf:about="' +
      t +
      `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
      r +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join('');
}
function Pp(t) {
  var r = [wt];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var e = 0; e != t.length; ++e)
    r.push(Vo(t[e][0], t[e][1])), r.push(bp('', t[e][0]));
  return r.push(Vo('', 'Document', 'pkg')), r.push('</rdf:RDF>'), r.join('');
}
function Ql() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    ki.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Rn = [
  ['cp:category', 'Category'],
  ['cp:contentStatus', 'ContentStatus'],
  ['cp:keywords', 'Keywords'],
  ['cp:lastModifiedBy', 'LastAuthor'],
  ['cp:lastPrinted', 'LastPrinted'],
  ['cp:revision', 'RevNumber'],
  ['cp:version', 'Version'],
  ['dc:creator', 'Author'],
  ['dc:description', 'Comments'],
  ['dc:identifier', 'Identifier'],
  ['dc:language', 'Language'],
  ['dc:subject', 'Subject'],
  ['dc:title', 'Title'],
  ['dcterms:created', 'CreatedDate', 'date'],
  ['dcterms:modified', 'ModifiedDate', 'date'],
];
function Ss(t, r, e, n, a) {
  a[t] != null ||
    r == null ||
    r === '' ||
    ((a[t] = r), (r = Ke(r)), (n[n.length] = e ? se(t, r, e) : kt(t, r)));
}
function ec(t, r) {
  var e = r || {},
    n = [
      wt,
      se('cp:coreProperties', null, {
        'xmlns:cp': St.CORE_PROPS,
        'xmlns:dc': St.dc,
        'xmlns:dcterms': St.dcterms,
        'xmlns:dcmitype': St.dcmitype,
        'xmlns:xsi': St.xsi,
      }),
    ],
    a = {};
  if (!t && !e.Props) return n.join('');
  t &&
    (t.CreatedDate != null &&
      Ss(
        'dcterms:created',
        typeof t.CreatedDate == 'string'
          ? t.CreatedDate
          : $s(t.CreatedDate, e.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a,
      ),
    t.ModifiedDate != null &&
      Ss(
        'dcterms:modified',
        typeof t.ModifiedDate == 'string'
          ? t.ModifiedDate
          : $s(t.ModifiedDate, e.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        a,
      ));
  for (var i = 0; i != Rn.length; ++i) {
    var s = Rn[i],
      o = e.Props && e.Props[s[1]] != null ? e.Props[s[1]] : t ? t[s[1]] : null;
    o === !0
      ? (o = '1')
      : o === !1
        ? (o = '0')
        : typeof o == 'number' && (o = String(o)),
      o != null && Ss(s[0], o, null, n, a);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var na = [
    ['Application', 'Application', 'string'],
    ['AppVersion', 'AppVersion', 'string'],
    ['Company', 'Company', 'string'],
    ['DocSecurity', 'DocSecurity', 'string'],
    ['Manager', 'Manager', 'string'],
    ['HyperlinksChanged', 'HyperlinksChanged', 'bool'],
    ['SharedDoc', 'SharedDoc', 'bool'],
    ['LinksUpToDate', 'LinksUpToDate', 'bool'],
    ['ScaleCrop', 'ScaleCrop', 'bool'],
    ['HeadingPairs', 'HeadingPairs', 'raw'],
    ['TitlesOfParts', 'TitlesOfParts', 'raw'],
  ],
  tc = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function rc(t) {
  var r = [],
    e = se;
  return (
    t || (t = {}),
    (t.Application = 'SheetJS'),
    (r[r.length] = wt),
    (r[r.length] = se('Properties', null, {
      xmlns: St.EXT_PROPS,
      'xmlns:vt': St.vt,
    })),
    na.forEach(function (n) {
      if (t[n[1]] !== void 0) {
        var a;
        switch (n[2]) {
          case 'string':
            a = Ke(String(t[n[1]]));
            break;
          case 'bool':
            a = t[n[1]] ? 'true' : 'false';
            break;
        }
        a !== void 0 && (r[r.length] = e(n[0], a));
      }
    }),
    (r[r.length] = e(
      'HeadingPairs',
      e(
        'vt:vector',
        e('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>') +
          e('vt:variant', e('vt:i4', String(t.Worksheets))),
        { size: 2, baseType: 'variant' },
      ),
    )),
    (r[r.length] = e(
      'TitlesOfParts',
      e(
        'vt:vector',
        t.SheetNames.map(function (n) {
          return '<vt:lpstr>' + Ke(n) + '</vt:lpstr>';
        }).join(''),
        { size: t.Worksheets, baseType: 'lpstr' },
      ),
    )),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function nc(t) {
  var r = [
    wt,
    se('Properties', null, { xmlns: St.CUST_PROPS, 'xmlns:vt': St.vt }),
  ];
  if (!t) return r.join('');
  var e = 1;
  return (
    bt(t).forEach(function (a) {
      ++e,
        (r[r.length] = se('property', Qd(t[a]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: e,
          name: Ke(a),
        }));
    }),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
var jo = {
  Title: 'Title',
  Subject: 'Subject',
  Author: 'Author',
  Keywords: 'Keywords',
  Comments: 'Description',
  LastAuthor: 'LastAuthor',
  RevNumber: 'Revision',
  Application: 'AppName',
  LastPrinted: 'LastPrinted',
  CreatedDate: 'Created',
  ModifiedDate: 'LastSaved',
  Category: 'Category',
  Manager: 'Manager',
  Company: 'Company',
  AppVersion: 'Version',
  ContentStatus: 'ContentStatus',
  Identifier: 'Identifier',
  Language: 'Language',
};
function Mp(t, r) {
  var e = [];
  return (
    bt(jo)
      .map(function (n) {
        for (var a = 0; a < Rn.length; ++a) if (Rn[a][1] == n) return Rn[a];
        for (a = 0; a < na.length; ++a) if (na[a][1] == n) return na[a];
        throw n;
      })
      .forEach(function (n) {
        if (t[n[1]] != null) {
          var a =
            r && r.Props && r.Props[n[1]] != null ? r.Props[n[1]] : t[n[1]];
          switch (n[2]) {
            case 'date':
              a = new Date(a).toISOString().replace(/\.\d*Z/, 'Z');
              break;
          }
          typeof a == 'number'
            ? (a = String(a))
            : a === !0 || a === !1
              ? (a = a ? '1' : '0')
              : a instanceof Date &&
                (a = new Date(a).toISOString().replace(/\.\d*Z/, '')),
            e.push(kt(jo[n[1]] || n[1], a));
        }
      }),
    se('DocumentProperties', e.join(''), { xmlns: ir.o })
  );
}
function Lp(t, r) {
  var e = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    a = [];
  return (
    t &&
      bt(t).forEach(function (i) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          for (var s = 0; s < Rn.length; ++s) if (i == Rn[s][1]) return;
          for (s = 0; s < na.length; ++s) if (i == na[s][1]) return;
          for (s = 0; s < e.length; ++s) if (i == e[s]) return;
          var o = t[i],
            l = 'string';
          typeof o == 'number'
            ? ((l = 'float'), (o = String(o)))
            : o === !0 || o === !1
              ? ((l = 'boolean'), (o = o ? '1' : '0'))
              : (o = String(o)),
            a.push(se(No(i), o, { 'dt:dt': l }));
        }
      }),
    r &&
      bt(r).forEach(function (i) {
        if (
          Object.prototype.hasOwnProperty.call(r, i) &&
          !(t && Object.prototype.hasOwnProperty.call(t, i))
        ) {
          var s = r[i],
            o = 'string';
          typeof s == 'number'
            ? ((o = 'float'), (s = String(s)))
            : s === !0 || s === !1
              ? ((o = 'boolean'), (s = s ? '1' : '0'))
              : s instanceof Date
                ? ((o = 'dateTime.tz'), (s = s.toISOString()))
                : (s = String(s)),
            a.push(se(No(i), s, { 'dt:dt': o }));
        }
      }),
    '<' + n + ' xmlns="' + ir.o + '">' + a.join('') + '</' + n + '>'
  );
}
function Bp(t) {
  var r = typeof t == 'string' ? new Date(Date.parse(t)) : t,
    e = r.getTime() / 1e3 + 11644473600,
    n = e % Math.pow(2, 32),
    a = (e - n) / Math.pow(2, 32);
  (n *= 1e7), (a *= 1e7);
  var i = (n / Math.pow(2, 32)) | 0;
  i > 0 && ((n = n % Math.pow(2, 32)), (a += i));
  var s = Y(8);
  return s.write_shift(4, n), s.write_shift(4, a), s;
}
function Go(t, r) {
  var e = Y(4),
    n = Y(4);
  switch ((e.write_shift(4, t == 80 ? 31 : t), t)) {
    case 3:
      n.write_shift(-4, r);
      break;
    case 5:
      (n = Y(8)), n.write_shift(8, r, 'f');
      break;
    case 11:
      n.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      n = Bp(r);
      break;
    case 31:
    case 80:
      for (
        n = Y(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)),
          n.write_shift(4, r.length + 1),
          n.write_shift(0, r, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + t + ' ' + r);
  }
  return Rt([e, n]);
}
var ac = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function Up(t) {
  switch (typeof t) {
    case 'boolean':
      return 11;
    case 'number':
      return (t | 0) == t ? 3 : 5;
    case 'string':
      return 31;
    case 'object':
      if (t instanceof Date) return 64;
      break;
  }
  return -1;
}
function Yo(t, r, e) {
  var n = Y(8),
    a = [],
    i = [],
    s = 8,
    o = 0,
    l = Y(8),
    f = Y(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    f.write_shift(4, 1),
    i.push(l),
    a.push(f),
    (s += 8 + l.length),
    !r)
  ) {
    (f = Y(8)), f.write_shift(4, 0), a.unshift(f);
    var c = [Y(4)];
    for (c[0].write_shift(4, t.length), o = 0; o < t.length; ++o) {
      var d = t[o][0];
      for (
        l = Y(8 + 2 * (d.length + 1) + (d.length % 2 ? 0 : 2)),
          l.write_shift(4, o + 2),
          l.write_shift(4, d.length + 1),
          l.write_shift(0, d, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = Rt(c)), i.unshift(l), (s += 8 + l.length);
  }
  for (o = 0; o < t.length; ++o)
    if (
      !(r && !r[t[o][0]]) &&
      !(ac.indexOf(t[o][0]) > -1 || tc.indexOf(t[o][0]) > -1) &&
      t[o][1] != null
    ) {
      var u = t[o][1],
        p = 0;
      if (r) {
        p = +r[t[o][0]];
        var v = e[p];
        if (v.p == 'version' && typeof u == 'string') {
          var h = u.split('.');
          u = (+h[0] << 16) + (+h[1] || 0);
        }
        l = Go(v.t, u);
      } else {
        var x = Up(u);
        x == -1 && ((x = 31), (u = String(u))), (l = Go(x, u));
      }
      i.push(l),
        (f = Y(8)),
        f.write_shift(4, r ? p : 2 + o),
        a.push(f),
        (s += 8 + l.length);
    }
  var D = 8 * (i.length + 1);
  for (o = 0; o < i.length; ++o) a[o].write_shift(4, D), (D += i[o].length);
  return (
    n.write_shift(4, s), n.write_shift(4, i.length), Rt([n].concat(a).concat(i))
  );
}
function Xo(t, r, e, n, a, i) {
  var s = Y(a ? 68 : 48),
    o = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Ze.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, a ? 2 : 1),
    s.write_shift(16, r, 'hex'),
    s.write_shift(4, a ? 68 : 48);
  var l = Yo(t, e, n);
  if ((o.push(l), a)) {
    var f = Yo(a, null, null);
    s.write_shift(16, i, 'hex'), s.write_shift(4, 68 + l.length), o.push(f);
  }
  return Rt(o);
}
function Hp(t, r) {
  r || (r = Y(t));
  for (var e = 0; e < t; ++e) r.write_shift(1, 0);
  return r;
}
function Wp(t, r) {
  return t.read_shift(r) === 1;
}
function Gt(t, r) {
  return r || (r = Y(2)), r.write_shift(2, +!!t), r;
}
function ic(t) {
  return t.read_shift(2, 'u');
}
function mr(t, r) {
  return r || (r = Y(2)), r.write_shift(2, t), r;
}
function sc(t, r, e) {
  return (
    e || (e = Y(2)),
    e.write_shift(1, r == 'e' ? +t : +!!t),
    e.write_shift(1, r == 'e' ? 1 : 0),
    e
  );
}
function oc(t, r, e) {
  var n = t.read_shift(e && e.biff >= 12 ? 2 : 1),
    a = 'sbcs-cont';
  if ((e && e.biff >= 8, !e || e.biff == 8)) {
    var i = t.read_shift(1);
    i && (a = 'dbcs-cont');
  } else e.biff == 12 && (a = 'wstr');
  e.biff >= 2 && e.biff <= 5 && (a = 'cpstr');
  var s = n ? t.read_shift(n, a) : '';
  return s;
}
function Vp(t) {
  var r = t.t || '',
    e = Y(3);
  e.write_shift(2, r.length), e.write_shift(1, 1);
  var n = Y(2 * r.length);
  n.write_shift(2 * r.length, r, 'utf16le');
  var a = [e, n];
  return Rt(a);
}
function jp(t, r, e) {
  var n;
  if (e) {
    if (e.biff >= 2 && e.biff <= 5) return t.read_shift(r, 'cpstr');
    if (e.biff >= 12) return t.read_shift(r, 'dbcs-cont');
  }
  var a = t.read_shift(1);
  return (
    a === 0
      ? (n = t.read_shift(r, 'sbcs-cont'))
      : (n = t.read_shift(r, 'dbcs-cont')),
    n
  );
}
function Gp(t, r, e) {
  var n = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return n === 0 ? (t.l++, '') : jp(t, n, e);
}
function Yp(t, r, e) {
  if (e.biff > 5) return Gp(t, r, e);
  var n = t.read_shift(1);
  return n === 0
    ? (t.l++, '')
    : t.read_shift(n, e.biff <= 4 || !t.lens ? 'cpstr' : 'sbcs-cont');
}
function fc(t, r, e) {
  return (
    e || (e = Y(3 + 2 * t.length)),
    e.write_shift(2, t.length),
    e.write_shift(1, 1),
    e.write_shift(31, t, 'utf16le'),
    e
  );
}
function Ko(t, r) {
  r || (r = Y(6 + t.length * 2)), r.write_shift(4, 1 + t.length);
  for (var e = 0; e < t.length; ++e) r.write_shift(2, t.charCodeAt(e));
  return r.write_shift(2, 0), r;
}
function Xp(t) {
  var r = Y(512),
    e = 0,
    n = t.Target;
  n.slice(0, 7) == 'file://' && (n = n.slice(7));
  var a = n.indexOf('#'),
    i = a > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case '#':
      i = 28;
      break;
    case '.':
      i &= -3;
      break;
  }
  r.write_shift(4, 2), r.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (e = 0; e < s.length; ++e) r.write_shift(4, s[e]);
  if (i == 28) (n = n.slice(1)), Ko(n, r);
  else if (i & 2) {
    for (
      s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), e = 0;
      e < s.length;
      ++e
    )
      r.write_shift(1, parseInt(s[e], 16));
    var o = a > -1 ? n.slice(0, a) : n;
    for (r.write_shift(4, 2 * (o.length + 1)), e = 0; e < o.length; ++e)
      r.write_shift(2, o.charCodeAt(e));
    r.write_shift(2, 0), i & 8 && Ko(a > -1 ? n.slice(a + 1) : '', r);
  } else {
    for (
      s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), e = 0;
      e < s.length;
      ++e
    )
      r.write_shift(1, parseInt(s[e], 16));
    for (
      var l = 0;
      n.slice(l * 3, l * 3 + 3) == '../' || n.slice(l * 3, l * 3 + 3) == '..\\';

    )
      ++l;
    for (
      r.write_shift(2, l), r.write_shift(4, n.length - 3 * l + 1), e = 0;
      e < n.length - 3 * l;
      ++e
    )
      r.write_shift(1, n.charCodeAt(e + 3 * l) & 255);
    for (
      r.write_shift(1, 0),
        r.write_shift(2, 65535),
        r.write_shift(2, 57005),
        e = 0;
      e < 6;
      ++e
    )
      r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function Pn(t, r, e, n) {
  return (
    n || (n = Y(6)),
    n.write_shift(2, t),
    n.write_shift(2, r),
    n.write_shift(2, e || 0),
    n
  );
}
function Kp(t, r, e) {
  var n = e.biff > 8 ? 4 : 2,
    a = t.read_shift(n),
    i = t.read_shift(n, 'i'),
    s = t.read_shift(n, 'i');
  return [a, i, s];
}
function $p(t) {
  var r = t.read_shift(2),
    e = t.read_shift(2),
    n = t.read_shift(2),
    a = t.read_shift(2);
  return { s: { c: n, r }, e: { c: a, r: e } };
}
function lc(t, r) {
  return (
    r || (r = Y(8)),
    r.write_shift(2, t.s.r),
    r.write_shift(2, t.e.r),
    r.write_shift(2, t.s.c),
    r.write_shift(2, t.e.c),
    r
  );
}
function N0(t, r, e) {
  var n = 1536,
    a = 16;
  switch (e.bookType) {
    case 'biff8':
      break;
    case 'biff5':
      (n = 1280), (a = 8);
      break;
    case 'biff4':
      (n = 4), (a = 6);
      break;
    case 'biff3':
      (n = 3), (a = 6);
      break;
    case 'biff2':
      (n = 2), (a = 4);
      break;
    case 'xla':
      break;
    default:
      throw new Error('unsupported BIFF version');
  }
  var i = Y(a);
  return (
    i.write_shift(2, n),
    i.write_shift(2, r),
    a > 4 && i.write_shift(2, 29282),
    a > 6 && i.write_shift(2, 1997),
    a > 8 &&
      (i.write_shift(2, 49161),
      i.write_shift(2, 1),
      i.write_shift(2, 1798),
      i.write_shift(2, 0)),
    i
  );
}
function zp(t, r) {
  var e = !r || r.biff == 8,
    n = Y(e ? 112 : 54);
  for (
    n.write_shift(r.biff == 8 ? 2 : 1, 7),
      e && n.write_shift(1, 0),
      n.write_shift(4, 859007059),
      n.write_shift(4, 5458548 | (e ? 0 : 536870912));
    n.l < n.length;

  )
    n.write_shift(1, e ? 0 : 32);
  return n;
}
function qp(t, r) {
  var e = !r || r.biff >= 8 ? 2 : 1,
    n = Y(8 + e * t.name.length);
  n.write_shift(4, t.pos),
    n.write_shift(1, t.hs || 0),
    n.write_shift(1, t.dt),
    n.write_shift(1, t.name.length),
    r.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(e * t.name.length, t.name, r.biff < 8 ? 'sbcs' : 'utf16le');
  var a = n.slice(0, n.l);
  return (a.l = n.l), a;
}
function Jp(t, r) {
  var e = Y(8);
  e.write_shift(4, t.Count), e.write_shift(4, t.Unique);
  for (var n = [], a = 0; a < t.length; ++a) n[a] = Vp(t[a]);
  var i = Rt([e].concat(n));
  return (
    (i.parts = [e.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    i
  );
}
function Zp() {
  var t = Y(18);
  return (
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(2, 29280),
    t.write_shift(2, 17600),
    t.write_shift(2, 56),
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(2, 1),
    t.write_shift(2, 500),
    t
  );
}
function Qp(t) {
  var r = Y(18),
    e = 1718;
  return (
    t && t.RTL && (e |= 64),
    r.write_shift(2, e),
    r.write_shift(4, 0),
    r.write_shift(4, 64),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
function ev(t, r) {
  var e = t.name || 'Arial',
    n = r && r.biff == 5,
    a = n ? 15 + e.length : 16 + 2 * e.length,
    i = Y(a);
  return (
    i.write_shift(2, t.sz * 20),
    i.write_shift(4, 0),
    i.write_shift(2, 400),
    i.write_shift(4, 0),
    i.write_shift(2, 0),
    i.write_shift(1, e.length),
    n || i.write_shift(1, 1),
    i.write_shift((n ? 1 : 2) * e.length, e, n ? 'sbcs' : 'utf16le'),
    i
  );
}
function tv(t, r, e, n) {
  var a = Y(10);
  return Pn(t, r, n, a), a.write_shift(4, e), a;
}
function rv(t, r, e, n, a) {
  var i = !a || a.biff == 8,
    s = Y(8 + +i + (1 + i) * e.length);
  return (
    Pn(t, r, n, s),
    s.write_shift(2, e.length),
    i && s.write_shift(1, 1),
    s.write_shift((1 + i) * e.length, e, i ? 'utf16le' : 'sbcs'),
    s
  );
}
function nv(t, r, e, n) {
  var a = e && e.biff == 5;
  n || (n = Y(a ? 3 + r.length : 5 + 2 * r.length)),
    n.write_shift(2, t),
    n.write_shift(a ? 1 : 2, r.length),
    a || n.write_shift(1, 1),
    n.write_shift((a ? 1 : 2) * r.length, r, a ? 'sbcs' : 'utf16le');
  var i = n.length > n.l ? n.slice(0, n.l) : n;
  return i.l == null && (i.l = i.length), i;
}
function av(t, r) {
  var e = r.biff == 8 || !r.biff ? 4 : 2,
    n = Y(2 * e + 6);
  return (
    n.write_shift(e, t.s.r),
    n.write_shift(e, t.e.r + 1),
    n.write_shift(2, t.s.c),
    n.write_shift(2, t.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function $o(t, r, e, n) {
  var a = e && e.biff == 5;
  n || (n = Y(a ? 16 : 20)),
    n.write_shift(2, 0),
    t.style
      ? (n.write_shift(2, t.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, t.numFmtId || 0), n.write_shift(2, r << 4));
  var i = 0;
  return (
    t.numFmtId > 0 && a && (i |= 1024),
    n.write_shift(4, i),
    n.write_shift(4, 0),
    a || n.write_shift(4, 0),
    n.write_shift(2, 0),
    n
  );
}
function iv(t) {
  var r = Y(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function sv(t, r, e, n, a, i) {
  var s = Y(8);
  return Pn(t, r, n, s), sc(e, i, s), s;
}
function ov(t, r, e, n) {
  var a = Y(14);
  return Pn(t, r, n, a), bn(e, a), a;
}
function fv(t, r, e) {
  if (e.biff < 8) return lv(t, r, e);
  for (
    var n = [], a = t.l + r, i = t.read_shift(e.biff > 8 ? 4 : 2);
    i-- !== 0;

  )
    n.push(Kp(t, e.biff > 8 ? 12 : 6, e));
  if (t.l != a) throw new Error('Bad ExternSheet: ' + t.l + ' != ' + a);
  return n;
}
function lv(t, r, e) {
  t[t.l + 1] == 3 && t[t.l]++;
  var n = oc(t, r, e);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function cv(t) {
  var r = Y(2 + t.length * 8);
  r.write_shift(2, t.length);
  for (var e = 0; e < t.length; ++e) lc(t[e], r);
  return r;
}
function uv(t) {
  var r = Y(24),
    e = At(t[0]);
  r.write_shift(2, e.r),
    r.write_shift(2, e.r),
    r.write_shift(2, e.c),
    r.write_shift(2, e.c);
  for (
    var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), a = 0;
    a < 16;
    ++a
  )
    r.write_shift(1, parseInt(n[a], 16));
  return Rt([r, Xp(t[1])]);
}
function hv(t) {
  var r = t[1].Tooltip,
    e = Y(10 + 2 * (r.length + 1));
  e.write_shift(2, 2048);
  var n = At(t[0]);
  e.write_shift(2, n.r),
    e.write_shift(2, n.r),
    e.write_shift(2, n.c),
    e.write_shift(2, n.c);
  for (var a = 0; a < r.length; ++a) e.write_shift(2, r.charCodeAt(a));
  return e.write_shift(2, 0), e;
}
function dv(t) {
  return t || (t = Y(4)), t.write_shift(2, 1), t.write_shift(2, 1), t;
}
function pv(t, r, e) {
  if (!e.cellStyles) return Lr(t, r);
  var n = e && e.biff >= 12 ? 4 : 2,
    a = t.read_shift(n),
    i = t.read_shift(n),
    s = t.read_shift(n),
    o = t.read_shift(n),
    l = t.read_shift(2);
  n == 2 && (t.l += 2);
  var f = { s: a, e: i, w: s, ixfe: o, flags: l };
  return (e.biff >= 5 || !e.biff) && (f.level = (l >> 8) & 7), f;
}
function vv(t, r) {
  var e = Y(12);
  e.write_shift(2, r),
    e.write_shift(2, r),
    e.write_shift(2, t.width * 256),
    e.write_shift(2, 0);
  var n = 0;
  return (
    t.hidden && (n |= 1),
    e.write_shift(1, n),
    (n = t.level || 0),
    e.write_shift(1, n),
    e.write_shift(2, 0),
    e
  );
}
function mv(t) {
  for (var r = Y(2 * t), e = 0; e < t; ++e) r.write_shift(2, e + 1);
  return r;
}
function xv(t, r, e) {
  var n = Y(15);
  return ni(n, t, r), n.write_shift(8, e, 'f'), n;
}
function gv(t, r, e) {
  var n = Y(9);
  return ni(n, t, r), n.write_shift(2, e), n;
}
var _v = (function () {
    var t = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969,
      },
      r = _0({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
      });
    function e(o, l) {
      var f = [],
        c = In(1);
      switch (l.type) {
        case 'base64':
          c = Fr(qr(o));
          break;
        case 'binary':
          c = Fr(o);
          break;
        case 'buffer':
        case 'array':
          c = o;
          break;
      }
      ar(c, 0);
      var d = c.read_shift(1),
        u = !!(d & 136),
        p = !1,
        v = !1;
      switch (d) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (p = !0), (u = !0);
          break;
        case 49:
          (p = !0), (u = !0);
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          v = !0;
          break;
        case 245:
          break;
        default:
          throw new Error('DBF Unsupported Version: ' + d.toString(16));
      }
      var h = 0,
        x = 521;
      d == 2 && (h = c.read_shift(2)),
        (c.l += 3),
        d != 2 && (h = c.read_shift(4)),
        h > 1048576 && (h = 1e6),
        d != 2 && (x = c.read_shift(2));
      var D = c.read_shift(2),
        C = l.codepage || 1252;
      d != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (C = t[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        v && (c.l += 36);
      for (
        var F = [],
          k = {},
          j = Math.min(c.length, d == 2 ? 521 : x - 10 - (p ? 264 : 0)),
          te = v ? 32 : 11;
        c.l < j && c[c.l] != 13;

      )
        switch (
          ((k = {}),
          (k.name = Ii.utils
            .decode(C, c.slice(c.l, c.l + te))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += te),
          (k.type = String.fromCharCode(c.read_shift(1))),
          d != 2 && !v && (k.offset = c.read_shift(4)),
          (k.len = c.read_shift(1)),
          d == 2 && (k.offset = c.read_shift(2)),
          (k.dec = c.read_shift(1)),
          k.name.length && F.push(k),
          d != 2 && (c.l += v ? 13 : 14),
          k.type)
        ) {
          case 'B':
            (!p || k.len != 8) &&
              l.WTF &&
              console.log('Skipping ' + k.name + ':' + k.type);
            break;
          case 'G':
          case 'P':
            l.WTF && console.log('Skipping ' + k.name + ':' + k.type);
            break;
          case '+':
          case '0':
          case '@':
          case 'C':
          case 'D':
          case 'F':
          case 'I':
          case 'L':
          case 'M':
          case 'N':
          case 'O':
          case 'T':
          case 'Y':
            break;
          default:
            throw new Error('Unknown Field Type: ' + k.type);
        }
      if ((c[c.l] !== 13 && (c.l = x - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l]);
      c.l = x;
      var R = 0,
        H = 0;
      for (f[0] = [], H = 0; H != F.length; ++H) f[0][H] = F[H].name;
      for (; h-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += D;
          continue;
        }
        for (++c.l, f[++R] = [], H = 0, H = 0; H != F.length; ++H) {
          var L = c.slice(c.l, c.l + F[H].len);
          (c.l += F[H].len), ar(L, 0);
          var X = Ii.utils.decode(C, L);
          switch (F[H].type) {
            case 'C':
              X.trim().length && (f[R][H] = X.replace(/\s+$/, ''));
              break;
            case 'D':
              X.length === 8
                ? (f[R][H] = new Date(
                    +X.slice(0, 4),
                    +X.slice(4, 6) - 1,
                    +X.slice(6, 8),
                  ))
                : (f[R][H] = X);
              break;
            case 'F':
              f[R][H] = parseFloat(X.trim());
              break;
            case '+':
            case 'I':
              f[R][H] = v
                ? L.read_shift(-4, 'i') ^ 2147483648
                : L.read_shift(4, 'i');
              break;
            case 'L':
              switch (X.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  f[R][H] = !0;
                  break;
                case 'N':
                case 'F':
                  f[R][H] = !1;
                  break;
                case '':
                case '?':
                  break;
                default:
                  throw new Error('DBF Unrecognized L:|' + X + '|');
              }
              break;
            case 'M':
              if (!u)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + d.toString(16),
                );
              f[R][H] =
                '##MEMO##' + (v ? parseInt(X.trim(), 10) : L.read_shift(4));
              break;
            case 'N':
              (X = X.replace(/\u0000/g, '').trim()),
                X && X != '.' && (f[R][H] = +X || 0);
              break;
            case '@':
              f[R][H] = new Date(L.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              f[R][H] = new Date(
                (L.read_shift(4) - 2440588) * 864e5 + L.read_shift(4),
              );
              break;
            case 'Y':
              f[R][H] =
                L.read_shift(4, 'i') / 1e4 +
                (L.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              f[R][H] = -L.read_shift(-8, 'f');
              break;
            case 'B':
              if (p && F[H].len == 8) {
                f[R][H] = L.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              L.l += F[H].len;
              break;
            case '0':
              if (F[H].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + F[H].type);
          }
        }
      }
      if (d != 2 && c.l < c.length && c[c.l++] != 26)
        throw new Error(
          'DBF EOF Marker missing ' +
            (c.l - 1) +
            ' of ' +
            c.length +
            ' ' +
            c[c.l - 1].toString(16),
        );
      return l && l.sheetRows && (f = f.slice(0, l.sheetRows)), (l.DBF = F), f;
    }
    function n(o, l) {
      var f = l || {};
      f.dateNF || (f.dateNF = 'yyyymmdd');
      var c = pa(e(o, f), f);
      return (
        (c['!cols'] = f.DBF.map(function (d) {
          return { wch: d.len, DBF: d };
        })),
        delete f.DBF,
        c
      );
    }
    function a(o, l) {
      try {
        return Bn(n(o, l), l);
      } catch (f) {
        if (l && l.WTF) throw f;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var i = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(o, l) {
      var f = l || {};
      if ((+f.codepage >= 0 && Ua(+f.codepage), f.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = Jt(),
        d = Xi(o, { header: 1, raw: !0, cellDates: !0 }),
        u = d[0],
        p = d.slice(1),
        v = o['!cols'] || [],
        h = 0,
        x = 0,
        D = 0,
        C = 1;
      for (h = 0; h < u.length; ++h) {
        if (((v[h] || {}).DBF || {}).name) {
          (u[h] = v[h].DBF.name), ++D;
          continue;
        }
        if (u[h] != null) {
          if (
            (++D,
            typeof u[h] == 'number' && (u[h] = u[h].toString(10)),
            typeof u[h] != 'string')
          )
            throw new Error(
              'DBF Invalid column name ' + u[h] + ' |' + typeof u[h] + '|',
            );
          if (u.indexOf(u[h]) !== h) {
            for (x = 0; x < 1024; ++x)
              if (u.indexOf(u[h] + '_' + x) == -1) {
                u[h] += '_' + x;
                break;
              }
          }
        }
      }
      var F = st(o['!ref']),
        k = [],
        j = [],
        te = [];
      for (h = 0; h <= F.e.c - F.s.c; ++h) {
        var R = '',
          H = '',
          L = 0,
          X = [];
        for (x = 0; x < p.length; ++x) p[x][h] != null && X.push(p[x][h]);
        if (X.length == 0 || u[h] == null) {
          k[h] = '?';
          continue;
        }
        for (x = 0; x < X.length; ++x) {
          switch (typeof X[x]) {
            case 'number':
              H = 'B';
              break;
            case 'string':
              H = 'C';
              break;
            case 'boolean':
              H = 'L';
              break;
            case 'object':
              H = X[x] instanceof Date ? 'D' : 'C';
              break;
            default:
              H = 'C';
          }
          (L = Math.max(L, String(X[x]).length)), (R = R && R != H ? 'C' : H);
        }
        L > 250 && (L = 250),
          (H = ((v[h] || {}).DBF || {}).type),
          H == 'C' && v[h].DBF.len > L && (L = v[h].DBF.len),
          R == 'B' &&
            H == 'N' &&
            ((R = 'N'), (te[h] = v[h].DBF.dec), (L = v[h].DBF.len)),
          (j[h] = R == 'C' || H == 'N' ? L : i[R] || 0),
          (C += j[h]),
          (k[h] = R);
      }
      var K = c.next(32);
      for (
        K.write_shift(4, 318902576),
          K.write_shift(4, p.length),
          K.write_shift(2, 296 + 32 * D),
          K.write_shift(2, C),
          h = 0;
        h < 4;
        ++h
      )
        K.write_shift(4, 0);
      for (
        K.write_shift(4, 0 | ((+r[ul] || 3) << 8)), h = 0, x = 0;
        h < u.length;
        ++h
      )
        if (u[h] != null) {
          var J = c.next(32),
            ie = (u[h].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          J.write_shift(1, ie, 'sbcs'),
            J.write_shift(1, k[h] == '?' ? 'C' : k[h], 'sbcs'),
            J.write_shift(4, x),
            J.write_shift(1, j[h] || i[k[h]] || 0),
            J.write_shift(1, te[h] || 0),
            J.write_shift(1, 2),
            J.write_shift(4, 0),
            J.write_shift(1, 0),
            J.write_shift(4, 0),
            J.write_shift(4, 0),
            (x += j[h] || i[k[h]] || 0);
        }
      var Pe = c.next(264);
      for (Pe.write_shift(4, 13), h = 0; h < 65; ++h) Pe.write_shift(4, 0);
      for (h = 0; h < p.length; ++h) {
        var Ce = c.next(C);
        for (Ce.write_shift(1, 0), x = 0; x < u.length; ++x)
          if (u[x] != null)
            switch (k[x]) {
              case 'L':
                Ce.write_shift(1, p[h][x] == null ? 63 : p[h][x] ? 84 : 70);
                break;
              case 'B':
                Ce.write_shift(8, p[h][x] || 0, 'f');
                break;
              case 'N':
                var ot = '0';
                for (
                  typeof p[h][x] == 'number' &&
                    (ot = p[h][x].toFixed(te[x] || 0)),
                    D = 0;
                  D < j[x] - ot.length;
                  ++D
                )
                  Ce.write_shift(1, 32);
                Ce.write_shift(1, ot, 'sbcs');
                break;
              case 'D':
                p[h][x]
                  ? (Ce.write_shift(
                      4,
                      ('0000' + p[h][x].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    Ce.write_shift(
                      2,
                      ('00' + (p[h][x].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    Ce.write_shift(
                      2,
                      ('00' + p[h][x].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : Ce.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var ze = String(p[h][x] != null ? p[h][x] : '').slice(0, j[x]);
                for (
                  Ce.write_shift(1, ze, 'sbcs'), D = 0;
                  D < j[x] - ze.length;
                  ++D
                )
                  Ce.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: a, to_sheet: n, from_sheet: s };
  })(),
  wv = (function () {
    var t = {
        AA: 'À',
        BA: 'Á',
        CA: 'Â',
        DA: 195,
        HA: 'Ä',
        JA: 197,
        AE: 'È',
        BE: 'É',
        CE: 'Ê',
        HE: 'Ë',
        AI: 'Ì',
        BI: 'Í',
        CI: 'Î',
        HI: 'Ï',
        AO: 'Ò',
        BO: 'Ó',
        CO: 'Ô',
        DO: 213,
        HO: 'Ö',
        AU: 'Ù',
        BU: 'Ú',
        CU: 'Û',
        HU: 'Ü',
        Aa: 'à',
        Ba: 'á',
        Ca: 'â',
        Da: 227,
        Ha: 'ä',
        Ja: 229,
        Ae: 'è',
        Be: 'é',
        Ce: 'ê',
        He: 'ë',
        Ai: 'ì',
        Bi: 'í',
        Ci: 'î',
        Hi: 'ï',
        Ao: 'ò',
        Bo: 'ó',
        Co: 'ô',
        Do: 245,
        Ho: 'ö',
        Au: 'ù',
        Bu: 'ú',
        Cu: 'û',
        Hu: 'ü',
        KC: 'Ç',
        Kc: 'ç',
        q: 'æ',
        z: 'œ',
        a: 'Æ',
        j: 'Œ',
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        'B ': 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        '!': 161,
        '"': 162,
        '#': 163,
        '(': 164,
        '%': 165,
        "'": 167,
        'H ': 168,
        '+': 171,
        ';': 187,
        '<': 188,
        '=': 189,
        '>': 190,
        '?': 191,
        '{': 223,
      },
      r = new RegExp(
        '\x1BN(' +
          bt(t)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      e = function (u, p) {
        var v = t[p];
        return typeof v == 'number' ? go(v) : v;
      },
      n = function (u, p, v) {
        var h = ((p.charCodeAt(0) - 32) << 4) | (v.charCodeAt(0) - 48);
        return h == 59 ? u : go(h);
      };
    t['|'] = 254;
    function a(u, p) {
      switch (p.type) {
        case 'base64':
          return i(qr(u), p);
        case 'binary':
          return i(u, p);
        case 'buffer':
          return i(je && Buffer.isBuffer(u) ? u.toString('binary') : Za(u), p);
        case 'array':
          return i(cs(u), p);
      }
      throw new Error('Unrecognized type ' + p.type);
    }
    function i(u, p) {
      var v = u.split(/[\n\r]+/),
        h = -1,
        x = -1,
        D = 0,
        C = 0,
        F = [],
        k = [],
        j = null,
        te = {},
        R = [],
        H = [],
        L = [],
        X = 0,
        K;
      for (+p.codepage >= 0 && Ua(+p.codepage); D !== v.length; ++D) {
        X = 0;
        var J = v[D].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(r, e),
          ie = J.replace(/;;/g, '\0')
            .split(';')
            .map(function (O) {
              return O.replace(/\u0000/g, ';');
            }),
          Pe = ie[0],
          Ce;
        if (J.length > 0)
          switch (Pe) {
            case 'ID':
              break;
            case 'E':
              break;
            case 'B':
              break;
            case 'O':
              break;
            case 'W':
              break;
            case 'P':
              ie[1].charAt(0) == 'P' && k.push(J.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var ot = !1,
                ze = !1,
                pt = !1,
                qe = !1,
                mt = -1,
                ft = -1;
              for (C = 1; C < ie.length; ++C)
                switch (ie[C].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (x = parseInt(ie[C].slice(1)) - 1), (ze = !0);
                    break;
                  case 'Y':
                    for (
                      h = parseInt(ie[C].slice(1)) - 1,
                        ze || (x = 0),
                        K = F.length;
                      K <= h;
                      ++K
                    )
                      F[K] = [];
                    break;
                  case 'K':
                    (Ce = ie[C].slice(1)),
                      Ce.charAt(0) === '"'
                        ? (Ce = Ce.slice(1, Ce.length - 1))
                        : Ce === 'TRUE'
                          ? (Ce = !0)
                          : Ce === 'FALSE'
                            ? (Ce = !1)
                            : isNaN(Kr(Ce))
                              ? isNaN(Wa(Ce).getDate()) || (Ce = Yt(Ce))
                              : ((Ce = Kr(Ce)),
                                j !== null && yl(j) && (Ce = Cl(Ce))),
                      (ot = !0);
                    break;
                  case 'E':
                    qe = !0;
                    var A = gm(ie[C].slice(1), { r: h, c: x });
                    F[h][x] = [F[h][x], A];
                    break;
                  case 'S':
                    (pt = !0), (F[h][x] = [F[h][x], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    mt = parseInt(ie[C].slice(1)) - 1;
                    break;
                  case 'C':
                    ft = parseInt(ie[C].slice(1)) - 1;
                    break;
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + J);
                }
              if (
                (ot &&
                  (F[h][x] && F[h][x].length == 2
                    ? (F[h][x][0] = Ce)
                    : (F[h][x] = Ce),
                  (j = null)),
                pt)
              ) {
                if (qe)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var U = mt > -1 && F[mt][ft];
                if (!U || !U[1])
                  throw new Error('SYLK shared formula cannot find base');
                F[h][x][1] = _m(U[1], { r: h - mt, c: x - ft });
              }
              break;
            case 'F':
              var I = 0;
              for (C = 1; C < ie.length; ++C)
                switch (ie[C].charAt(0)) {
                  case 'X':
                    (x = parseInt(ie[C].slice(1)) - 1), ++I;
                    break;
                  case 'Y':
                    for (
                      h = parseInt(ie[C].slice(1)) - 1, K = F.length;
                      K <= h;
                      ++K
                    )
                      F[K] = [];
                    break;
                  case 'M':
                    X = parseInt(ie[C].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    j = k[parseInt(ie[C].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      L = ie[C].slice(1).split(' '), K = parseInt(L[0], 10);
                      K <= parseInt(L[1], 10);
                      ++K
                    )
                      (X = parseInt(L[2], 10)),
                        (H[K - 1] = X === 0 ? { hidden: !0 } : { wch: X }),
                        R0(H[K - 1]);
                    break;
                  case 'C':
                    (x = parseInt(ie[C].slice(1)) - 1), H[x] || (H[x] = {});
                    break;
                  case 'R':
                    (h = parseInt(ie[C].slice(1)) - 1),
                      R[h] || (R[h] = {}),
                      X > 0
                        ? ((R[h].hpt = X), (R[h].hpx = pc(X)))
                        : X === 0 && (R[h].hidden = !0);
                    break;
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + J);
                }
              I < 1 && (j = null);
              break;
            default:
              if (p && p.WTF) throw new Error('SYLK bad record ' + J);
          }
      }
      return (
        R.length > 0 && (te['!rows'] = R),
        H.length > 0 && (te['!cols'] = H),
        p && p.sheetRows && (F = F.slice(0, p.sheetRows)),
        [F, te]
      );
    }
    function s(u, p) {
      var v = a(u, p),
        h = v[0],
        x = v[1],
        D = pa(h, p);
      return (
        bt(x).forEach(function (C) {
          D[C] = x[C];
        }),
        D
      );
    }
    function o(u, p) {
      return Bn(s(u, p), p);
    }
    function l(u, p, v, h) {
      var x = 'C;Y' + (v + 1) + ';X' + (h + 1) + ';K';
      switch (u.t) {
        case 'n':
          (x += u.v || 0), u.f && !u.F && (x += ';E' + I0(u.f, { r: v, c: h }));
          break;
        case 'b':
          x += u.v ? 'TRUE' : 'FALSE';
          break;
        case 'e':
          x += u.w || u.v;
          break;
        case 'd':
          x += '"' + (u.w || u.v) + '"';
          break;
        case 's':
          x += '"' + u.v.replace(/"/g, '').replace(/;/g, ';;') + '"';
          break;
      }
      return x;
    }
    function f(u, p) {
      p.forEach(function (v, h) {
        var x = 'F;W' + (h + 1) + ' ' + (h + 1) + ' ';
        v.hidden
          ? (x += '0')
          : (typeof v.width == 'number' && !v.wpx && (v.wpx = Vi(v.width)),
            typeof v.wpx == 'number' && !v.wch && (v.wch = ji(v.wpx)),
            typeof v.wch == 'number' && (x += Math.round(v.wch))),
          x.charAt(x.length - 1) != ' ' && u.push(x);
      });
    }
    function c(u, p) {
      p.forEach(function (v, h) {
        var x = 'F;';
        v.hidden
          ? (x += 'M0;')
          : v.hpt
            ? (x += 'M' + 20 * v.hpt + ';')
            : v.hpx && (x += 'M' + 20 * Gi(v.hpx) + ';'),
          x.length > 2 && u.push(x + 'R' + (h + 1));
      });
    }
    function d(u, p) {
      var v = ['ID;PWXL;N;E'],
        h = [],
        x = st(u['!ref']),
        D,
        C = Array.isArray(u),
        F = `\r
`;
      v.push('P;PGeneral'),
        v.push('F;P0;DG0G8;M255'),
        u['!cols'] && f(v, u['!cols']),
        u['!rows'] && c(v, u['!rows']),
        v.push(
          'B;Y' +
            (x.e.r - x.s.r + 1) +
            ';X' +
            (x.e.c - x.s.c + 1) +
            ';D' +
            [x.s.c, x.s.r, x.e.c, x.e.r].join(' '),
        );
      for (var k = x.s.r; k <= x.e.r; ++k)
        for (var j = x.s.c; j <= x.e.c; ++j) {
          var te = $e({ r: k, c: j });
          (D = C ? (u[k] || [])[j] : u[te]),
            !(!D || (D.v == null && (!D.f || D.F))) && h.push(l(D, u, k, j));
        }
      return v.join(F) + F + h.join(F) + F + 'E' + F;
    }
    return { to_workbook: o, to_sheet: s, from_sheet: d };
  })(),
  Ev = (function () {
    function t(i, s) {
      switch (s.type) {
        case 'base64':
          return r(qr(i), s);
        case 'binary':
          return r(i, s);
        case 'buffer':
          return r(je && Buffer.isBuffer(i) ? i.toString('binary') : Za(i), s);
        case 'array':
          return r(cs(i), s);
      }
      throw new Error('Unrecognized type ' + s.type);
    }
    function r(i, s) {
      for (
        var o = i.split(`
`),
          l = -1,
          f = -1,
          c = 0,
          d = [];
        c !== o.length;
        ++c
      ) {
        if (o[c].trim() === 'BOT') {
          (d[++l] = []), (f = 0);
          continue;
        }
        if (!(l < 0)) {
          var u = o[c].trim().split(','),
            p = u[0],
            v = u[1];
          ++c;
          for (
            var h = o[c] || '';
            (h.match(/["]/g) || []).length & 1 && c < o.length - 1;

          )
            h +=
              `
` + o[++c];
          switch (((h = h.trim()), +p)) {
            case -1:
              if (h === 'BOT') {
                (d[++l] = []), (f = 0);
                continue;
              } else if (h !== 'EOD')
                throw new Error('Unrecognized DIF special command ' + h);
              break;
            case 0:
              h === 'TRUE'
                ? (d[l][f] = !0)
                : h === 'FALSE'
                  ? (d[l][f] = !1)
                  : isNaN(Kr(v))
                    ? isNaN(Wa(v).getDate())
                      ? (d[l][f] = v)
                      : (d[l][f] = Yt(v))
                    : (d[l][f] = Kr(v)),
                ++f;
              break;
            case 1:
              (h = h.slice(1, h.length - 1)),
                (h = h.replace(/""/g, '"')),
                h && h.match(/^=".*"$/) && (h = h.slice(2, -1)),
                (d[l][f++] = h !== '' ? h : null);
              break;
          }
          if (h === 'EOD') break;
        }
      }
      return s && s.sheetRows && (d = d.slice(0, s.sheetRows)), d;
    }
    function e(i, s) {
      return pa(t(i, s), s);
    }
    function n(i, s) {
      return Bn(e(i, s), s);
    }
    var a = (function () {
      var i = function (l, f, c, d, u) {
          l.push(f),
            l.push(c + ',' + d),
            l.push('"' + u.replace(/"/g, '""') + '"');
        },
        s = function (l, f, c, d) {
          l.push(f + ',' + c),
            l.push(f == 1 ? '"' + d.replace(/"/g, '""') + '"' : d);
        };
      return function (l) {
        var f = [],
          c = st(l['!ref']),
          d,
          u = Array.isArray(l);
        i(f, 'TABLE', 0, 1, 'sheetjs'),
          i(f, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          i(f, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          i(f, 'DATA', 0, 0, '');
        for (var p = c.s.r; p <= c.e.r; ++p) {
          s(f, -1, 0, 'BOT');
          for (var v = c.s.c; v <= c.e.c; ++v) {
            var h = $e({ r: p, c: v });
            if (((d = u ? (l[p] || [])[v] : l[h]), !d)) {
              s(f, 1, 0, '');
              continue;
            }
            switch (d.t) {
              case 'n':
                var x = d.w;
                !x && d.v != null && (x = d.v),
                  x == null
                    ? d.f && !d.F
                      ? s(f, 1, 0, '=' + d.f)
                      : s(f, 1, 0, '')
                    : s(f, 0, x, 'V');
                break;
              case 'b':
                s(f, 0, d.v ? 1 : 0, d.v ? 'TRUE' : 'FALSE');
                break;
              case 's':
                s(f, 1, 0, isNaN(d.v) ? d.v : '="' + d.v + '"');
                break;
              case 'd':
                d.w || (d.w = pn(d.z || dt[14], Zt(Yt(d.v)))),
                  s(f, 0, d.w, 'V');
                break;
              default:
                s(f, 1, 0, '');
            }
          }
        }
        s(f, -1, 0, 'EOD');
        var D = `\r
`,
          C = f.join(D);
        return C;
      };
    })();
    return { to_workbook: n, to_sheet: e, from_sheet: a };
  })(),
  cc = (function () {
    function t(d) {
      return d
        .replace(/\\b/g, '\\')
        .replace(/\\c/g, ':')
        .replace(
          /\\n/g,
          `
`,
        );
    }
    function r(d) {
      return d.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n');
    }
    function e(d, u) {
      for (
        var p = d.split(`
`),
          v = -1,
          h = -1,
          x = 0,
          D = [];
        x !== p.length;
        ++x
      ) {
        var C = p[x].trim().split(':');
        if (C[0] === 'cell') {
          var F = At(C[1]);
          if (D.length <= F.r)
            for (v = D.length; v <= F.r; ++v) D[v] || (D[v] = []);
          switch (((v = F.r), (h = F.c), C[2])) {
            case 't':
              D[v][h] = t(C[3]);
              break;
            case 'v':
              D[v][h] = +C[3];
              break;
            case 'vtf':
              var k = C[C.length - 1];
            case 'vtc':
              switch (C[3]) {
                case 'nl':
                  D[v][h] = !!+C[4];
                  break;
                default:
                  D[v][h] = +C[4];
                  break;
              }
              C[2] == 'vtf' && (D[v][h] = [D[v][h], k]);
          }
        }
      }
      return u && u.sheetRows && (D = D.slice(0, u.sheetRows)), D;
    }
    function n(d, u) {
      return pa(e(d, u), u);
    }
    function a(d, u) {
      return Bn(n(d, u), u);
    }
    var i = [
        'socialcalc:version:1.5',
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave',
      ].join(`
`),
      s =
        [
          '--SocialCalcSpreadsheetControlSave',
          'Content-type: text/plain; charset=UTF-8',
        ].join(`
`) +
        `
`,
      o = ['# SocialCalc Spreadsheet Control Save', 'part:sheet'].join(`
`),
      l = '--SocialCalcSpreadsheetControlSave--';
    function f(d) {
      if (!d || !d['!ref']) return '';
      for (
        var u = [],
          p = [],
          v,
          h = '',
          x = lr(d['!ref']),
          D = Array.isArray(d),
          C = x.s.r;
        C <= x.e.r;
        ++C
      )
        for (var F = x.s.c; F <= x.e.c; ++F)
          if (
            ((h = $e({ r: C, c: F })),
            (v = D ? (d[C] || [])[F] : d[h]),
            !(!v || v.v == null || v.t === 'z'))
          ) {
            switch (((p = ['cell', h, 't']), v.t)) {
              case 's':
              case 'str':
                p.push(r(v.v));
                break;
              case 'n':
                v.f
                  ? ((p[2] = 'vtf'),
                    (p[3] = 'n'),
                    (p[4] = v.v),
                    (p[5] = r(v.f)))
                  : ((p[2] = 'v'), (p[3] = v.v));
                break;
              case 'b':
                (p[2] = 'vt' + (v.f ? 'f' : 'c')),
                  (p[3] = 'nl'),
                  (p[4] = v.v ? '1' : '0'),
                  (p[5] = r(v.f || (v.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var k = Zt(Yt(v.v));
                (p[2] = 'vtc'),
                  (p[3] = 'nd'),
                  (p[4] = '' + k),
                  (p[5] = v.w || pn(v.z || dt[14], k));
                break;
              case 'e':
                continue;
            }
            u.push(p.join(':'));
          }
      return (
        u.push(
          'sheet:c:' +
            (x.e.c - x.s.c + 1) +
            ':r:' +
            (x.e.r - x.s.r + 1) +
            ':tvf:1',
        ),
        u.push('valueformat:1:text-wiki'),
        u.join(`
`)
      );
    }
    function c(d) {
      return [i, s, o, s, f(d), l].join(`
`);
    }
    return { to_workbook: a, to_sheet: n, from_sheet: c };
  })(),
  Tv = (function () {
    function t(c, d, u, p, v) {
      v.raw
        ? (d[u][p] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (d[u][p] = !0)
            : c === 'FALSE'
              ? (d[u][p] = !1)
              : isNaN(Kr(c))
                ? isNaN(Wa(c).getDate())
                  ? (d[u][p] = c)
                  : (d[u][p] = Yt(c))
                : (d[u][p] = Kr(c)));
    }
    function r(c, d) {
      var u = d || {},
        p = [];
      if (!c || c.length === 0) return p;
      for (
        var v = c.split(/[\r\n]/), h = v.length - 1;
        h >= 0 && v[h].length === 0;

      )
        --h;
      for (var x = 10, D = 0, C = 0; C <= h; ++C)
        (D = v[C].indexOf(' ')),
          D == -1 ? (D = v[C].length) : D++,
          (x = Math.max(x, D));
      for (C = 0; C <= h; ++C) {
        p[C] = [];
        var F = 0;
        for (
          t(v[C].slice(0, x).trim(), p, C, F, u), F = 1;
          F <= (v[C].length - x) / 10 + 1;
          ++F
        )
          t(v[C].slice(x + (F - 1) * 10, x + F * 10).trim(), p, C, F, u);
      }
      return u.sheetRows && (p = p.slice(0, u.sheetRows)), p;
    }
    var e = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function a(c) {
      for (var d = {}, u = !1, p = 0, v = 0; p < c.length; ++p)
        (v = c.charCodeAt(p)) == 34
          ? (u = !u)
          : !u && v in e && (d[v] = (d[v] || 0) + 1);
      v = [];
      for (p in d)
        Object.prototype.hasOwnProperty.call(d, p) && v.push([d[p], p]);
      if (!v.length) {
        d = n;
        for (p in d)
          Object.prototype.hasOwnProperty.call(d, p) && v.push([d[p], p]);
      }
      return (
        v.sort(function (h, x) {
          return h[0] - x[0] || n[h[1]] - n[x[1]];
        }),
        e[v.pop()[1]] || 44
      );
    }
    function i(c, d) {
      var u = d || {},
        p = '',
        v = u.dense ? [] : {},
        h = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((p = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((p = c.charAt(4)), (c = c.slice(6)))
            : (p = a(c.slice(0, 1024)))
        : u && u.FS
          ? (p = u.FS)
          : (p = a(c.slice(0, 1024)));
      var x = 0,
        D = 0,
        C = 0,
        F = 0,
        k = 0,
        j = p.charCodeAt(0),
        te = !1,
        R = 0,
        H = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var L = u.dateNF != null ? Bd(u.dateNF) : null;
      function X() {
        var K = c.slice(F, k),
          J = {};
        if (
          (K.charAt(0) == '"' &&
            K.charAt(K.length - 1) == '"' &&
            (K = K.slice(1, -1).replace(/""/g, '"')),
          K.length === 0)
        )
          J.t = 'z';
        else if (u.raw) (J.t = 's'), (J.v = K);
        else if (K.trim().length === 0) (J.t = 's'), (J.v = K);
        else if (K.charCodeAt(0) == 61)
          K.charCodeAt(1) == 34 && K.charCodeAt(K.length - 1) == 34
            ? ((J.t = 's'), (J.v = K.slice(2, -1).replace(/""/g, '"')))
            : wm(K)
              ? ((J.t = 'n'), (J.f = K.slice(1)))
              : ((J.t = 's'), (J.v = K));
        else if (K == 'TRUE') (J.t = 'b'), (J.v = !0);
        else if (K == 'FALSE') (J.t = 'b'), (J.v = !1);
        else if (!isNaN((C = Kr(K))))
          (J.t = 'n'), u.cellText !== !1 && (J.w = K), (J.v = C);
        else if (!isNaN(Wa(K).getDate()) || (L && K.match(L))) {
          J.z = u.dateNF || dt[14];
          var ie = 0;
          L &&
            K.match(L) &&
            ((K = Ud(K, u.dateNF, K.match(L) || [])), (ie = 1)),
            u.cellDates
              ? ((J.t = 'd'), (J.v = Yt(K, ie)))
              : ((J.t = 'n'), (J.v = Zt(Yt(K, ie)))),
            u.cellText !== !1 &&
              (J.w = pn(J.z, J.v instanceof Date ? Zt(J.v) : J.v)),
            u.cellNF || delete J.z;
        } else (J.t = 's'), (J.v = K);
        if (
          (J.t == 'z' ||
            (u.dense
              ? (v[x] || (v[x] = []), (v[x][D] = J))
              : (v[$e({ c: D, r: x })] = J)),
          (F = k + 1),
          (H = c.charCodeAt(F)),
          h.e.c < D && (h.e.c = D),
          h.e.r < x && (h.e.r = x),
          R == j)
        )
          ++D;
        else if (((D = 0), ++x, u.sheetRows && u.sheetRows <= x)) return !0;
      }
      e: for (; k < c.length; ++k)
        switch ((R = c.charCodeAt(k))) {
          case 34:
            H === 34 && (te = !te);
            break;
          case j:
          case 10:
          case 13:
            if (!te && X()) break e;
            break;
        }
      return k - F > 0 && X(), (v['!ref'] = _t(h)), v;
    }
    function s(c, d) {
      return !(d && d.PRN) ||
        d.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? i(c, d)
        : pa(r(c, d), d);
    }
    function o(c, d) {
      var u = '',
        p = d.type == 'string' ? [0, 0, 0, 0] : b_(c, d);
      switch (d.type) {
        case 'base64':
          u = qr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          d.codepage == 65001
            ? (u = c.toString('utf8'))
            : (d.codepage && typeof Ii < 'u') ||
              (u = je && Buffer.isBuffer(c) ? c.toString('binary') : Za(c));
          break;
        case 'array':
          u = cs(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + d.type);
      }
      return (
        p[0] == 239 && p[1] == 187 && p[2] == 191
          ? (u = Da(u.slice(3)))
          : d.type != 'string' && d.type != 'buffer' && d.codepage == 65001
            ? (u = Da(u))
            : d.type == 'binary' && typeof Ii < 'u',
        u.slice(0, 19) == 'socialcalc:version:'
          ? cc.to_sheet(d.type == 'string' ? u : Da(u), d)
          : s(u, d)
      );
    }
    function l(c, d) {
      return Bn(o(c, d), d);
    }
    function f(c) {
      for (
        var d = [], u = st(c['!ref']), p, v = Array.isArray(c), h = u.s.r;
        h <= u.e.r;
        ++h
      ) {
        for (var x = [], D = u.s.c; D <= u.e.c; ++D) {
          var C = $e({ r: h, c: D });
          if (((p = v ? (c[h] || [])[D] : c[C]), !p || p.v == null)) {
            x.push('          ');
            continue;
          }
          for (
            var F = (p.w || (Jr(p), p.w) || '').slice(0, 10);
            F.length < 10;

          )
            F += ' ';
          x.push(F + (D === 0 ? ' ' : ''));
        }
        d.push(x.join(''));
      }
      return d.join(`
`);
    }
    return { to_workbook: l, to_sheet: o, from_sheet: f };
  })(),
  zo = (function () {
    function t(A, U, I) {
      if (A) {
        ar(A, A.l || 0);
        for (var O = I.Enum || mt; A.l < A.length; ) {
          var z = A.read_shift(2),
            ge = O[z] || O[65535],
            _e = A.read_shift(2),
            xe = A.l + _e,
            le = ge.f && ge.f(A, _e, I);
          if (((A.l = xe), U(le, ge, z))) return;
        }
      }
    }
    function r(A, U) {
      switch (U.type) {
        case 'base64':
          return e(Fr(qr(A)), U);
        case 'binary':
          return e(Fr(A), U);
        case 'buffer':
        case 'array':
          return e(A, U);
      }
      throw 'Unsupported type ' + U.type;
    }
    function e(A, U) {
      if (!A) return A;
      var I = U || {},
        O = I.dense ? [] : {},
        z = 'Sheet1',
        ge = '',
        _e = 0,
        xe = {},
        le = [],
        Le = [],
        ke = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        Et = I.sheetRows || 0;
      if (
        A[2] == 0 &&
        (A[3] == 8 || A[3] == 9) &&
        A.length >= 16 &&
        A[14] == 5 &&
        A[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (A[2] == 2)
        (I.Enum = mt),
          t(
            A,
            function (he, Dt, Pt) {
              switch (Pt) {
                case 0:
                  (I.vers = he), he >= 4096 && (I.qpro = !0);
                  break;
                case 6:
                  ke = he;
                  break;
                case 204:
                  he && (ge = he);
                  break;
                case 222:
                  ge = he;
                  break;
                case 15:
                case 51:
                  I.qpro || (he[1].v = he[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Pt == 14 &&
                    (he[2] & 112) == 112 &&
                    (he[2] & 15) > 1 &&
                    (he[2] & 15) < 15 &&
                    ((he[1].z = I.dateNF || dt[14]),
                    I.cellDates && ((he[1].t = 'd'), (he[1].v = Cl(he[1].v)))),
                    I.qpro &&
                      he[3] > _e &&
                      ((O['!ref'] = _t(ke)),
                      (xe[z] = O),
                      le.push(z),
                      (O = I.dense ? [] : {}),
                      (ke = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (_e = he[3]),
                      (z = ge || 'Sheet' + (_e + 1)),
                      (ge = ''));
                  var wr = I.dense ? (O[he[0].r] || [])[he[0].c] : O[$e(he[0])];
                  if (wr) {
                    (wr.t = he[1].t),
                      (wr.v = he[1].v),
                      he[1].z != null && (wr.z = he[1].z),
                      he[1].f != null && (wr.f = he[1].f);
                    break;
                  }
                  I.dense
                    ? (O[he[0].r] || (O[he[0].r] = []),
                      (O[he[0].r][he[0].c] = he[1]))
                    : (O[$e(he[0])] = he[1]);
                  break;
              }
            },
            I,
          );
      else if (A[2] == 26 || A[2] == 14)
        (I.Enum = ft),
          A[2] == 14 && ((I.qpro = !0), (A.l = 0)),
          t(
            A,
            function (he, Dt, Pt) {
              switch (Pt) {
                case 204:
                  z = he;
                  break;
                case 22:
                  he[1].v = he[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (he[3] > _e &&
                      ((O['!ref'] = _t(ke)),
                      (xe[z] = O),
                      le.push(z),
                      (O = I.dense ? [] : {}),
                      (ke = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (_e = he[3]),
                      (z = 'Sheet' + (_e + 1))),
                    Et > 0 && he[0].r >= Et)
                  )
                    break;
                  I.dense
                    ? (O[he[0].r] || (O[he[0].r] = []),
                      (O[he[0].r][he[0].c] = he[1]))
                    : (O[$e(he[0])] = he[1]),
                    ke.e.c < he[0].c && (ke.e.c = he[0].c),
                    ke.e.r < he[0].r && (ke.e.r = he[0].r);
                  break;
                case 27:
                  he[14e3] && (Le[he[14e3][0]] = he[14e3][1]);
                  break;
                case 1537:
                  (Le[he[0]] = he[1]), he[0] == _e && (z = he[1]);
                  break;
              }
            },
            I,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + A[2]);
      if (
        ((O['!ref'] = _t(ke)), (xe[ge || z] = O), le.push(ge || z), !Le.length)
      )
        return { SheetNames: le, Sheets: xe };
      for (var Be = {}, Ct = [], rt = 0; rt < Le.length; ++rt)
        xe[le[rt]]
          ? (Ct.push(Le[rt] || le[rt]), (Be[Le[rt]] = xe[Le[rt]] || xe[le[rt]]))
          : (Ct.push(Le[rt]), (Be[Le[rt]] = { '!ref': 'A1' }));
      return { SheetNames: Ct, Sheets: Be };
    }
    function n(A, U) {
      var I = U || {};
      if ((+I.codepage >= 0 && Ua(+I.codepage), I.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var O = Jt(),
        z = st(A['!ref']),
        ge = Array.isArray(A),
        _e = [];
      fe(O, 0, i(1030)), fe(O, 6, l(z));
      for (var xe = Math.min(z.e.r, 8191), le = z.s.r; le <= xe; ++le)
        for (var Le = It(le), ke = z.s.c; ke <= z.e.c; ++ke) {
          le === z.s.r && (_e[ke] = Bt(ke));
          var Et = _e[ke] + Le,
            Be = ge ? (A[le] || [])[ke] : A[Et];
          if (!(!Be || Be.t == 'z'))
            if (Be.t == 'n')
              (Be.v | 0) == Be.v && Be.v >= -32768 && Be.v <= 32767
                ? fe(O, 13, p(le, ke, Be.v))
                : fe(O, 14, h(le, ke, Be.v));
            else {
              var Ct = Jr(Be);
              fe(O, 15, d(le, ke, Ct.slice(0, 239)));
            }
        }
      return fe(O, 1), O.end();
    }
    function a(A, U) {
      var I = U || {};
      if ((+I.codepage >= 0 && Ua(+I.codepage), I.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var O = Jt();
      fe(O, 0, s(A));
      for (var z = 0, ge = 0; z < A.SheetNames.length; ++z)
        (A.Sheets[A.SheetNames[z]] || {})['!ref'] &&
          fe(O, 27, qe(A.SheetNames[z], ge++));
      var _e = 0;
      for (z = 0; z < A.SheetNames.length; ++z) {
        var xe = A.Sheets[A.SheetNames[z]];
        if (!(!xe || !xe['!ref'])) {
          for (
            var le = st(xe['!ref']),
              Le = Array.isArray(xe),
              ke = [],
              Et = Math.min(le.e.r, 8191),
              Be = le.s.r;
            Be <= Et;
            ++Be
          )
            for (var Ct = It(Be), rt = le.s.c; rt <= le.e.c; ++rt) {
              Be === le.s.r && (ke[rt] = Bt(rt));
              var he = ke[rt] + Ct,
                Dt = Le ? (xe[Be] || [])[rt] : xe[he];
              if (!(!Dt || Dt.t == 'z'))
                if (Dt.t == 'n') fe(O, 23, X(Be, rt, _e, Dt.v));
                else {
                  var Pt = Jr(Dt);
                  fe(O, 22, R(Be, rt, _e, Pt.slice(0, 239)));
                }
            }
          ++_e;
        }
      }
      return fe(O, 1), O.end();
    }
    function i(A) {
      var U = Y(2);
      return U.write_shift(2, A), U;
    }
    function s(A) {
      var U = Y(26);
      U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
      for (var I = 0, O = 0, z = 0, ge = 0; ge < A.SheetNames.length; ++ge) {
        var _e = A.SheetNames[ge],
          xe = A.Sheets[_e];
        if (!(!xe || !xe['!ref'])) {
          ++z;
          var le = lr(xe['!ref']);
          I < le.e.r && (I = le.e.r), O < le.e.c && (O = le.e.c);
        }
      }
      return (
        I > 8191 && (I = 8191),
        U.write_shift(2, I),
        U.write_shift(1, z),
        U.write_shift(1, O),
        U.write_shift(2, 0),
        U.write_shift(2, 0),
        U.write_shift(1, 1),
        U.write_shift(1, 2),
        U.write_shift(4, 0),
        U.write_shift(4, 0),
        U
      );
    }
    function o(A, U, I) {
      var O = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return U == 8 && I.qpro
        ? ((O.s.c = A.read_shift(1)),
          A.l++,
          (O.s.r = A.read_shift(2)),
          (O.e.c = A.read_shift(1)),
          A.l++,
          (O.e.r = A.read_shift(2)),
          O)
        : ((O.s.c = A.read_shift(2)),
          (O.s.r = A.read_shift(2)),
          U == 12 && I.qpro && (A.l += 2),
          (O.e.c = A.read_shift(2)),
          (O.e.r = A.read_shift(2)),
          U == 12 && I.qpro && (A.l += 2),
          O.s.c == 65535 && (O.s.c = O.e.c = O.s.r = O.e.r = 0),
          O);
    }
    function l(A) {
      var U = Y(8);
      return (
        U.write_shift(2, A.s.c),
        U.write_shift(2, A.s.r),
        U.write_shift(2, A.e.c),
        U.write_shift(2, A.e.r),
        U
      );
    }
    function f(A, U, I) {
      var O = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        I.qpro && I.vers != 20768
          ? ((O[0].c = A.read_shift(1)),
            (O[3] = A.read_shift(1)),
            (O[0].r = A.read_shift(2)),
            (A.l += 2))
          : ((O[2] = A.read_shift(1)),
            (O[0].c = A.read_shift(2)),
            (O[0].r = A.read_shift(2))),
        O
      );
    }
    function c(A, U, I) {
      var O = A.l + U,
        z = f(A, U, I);
      if (((z[1].t = 's'), I.vers == 20768)) {
        A.l++;
        var ge = A.read_shift(1);
        return (z[1].v = A.read_shift(ge, 'utf8')), z;
      }
      return I.qpro && A.l++, (z[1].v = A.read_shift(O - A.l, 'cstr')), z;
    }
    function d(A, U, I) {
      var O = Y(7 + I.length);
      O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, A),
        O.write_shift(1, 39);
      for (var z = 0; z < O.length; ++z) {
        var ge = I.charCodeAt(z);
        O.write_shift(1, ge >= 128 ? 95 : ge);
      }
      return O.write_shift(1, 0), O;
    }
    function u(A, U, I) {
      var O = f(A, U, I);
      return (O[1].v = A.read_shift(2, 'i')), O;
    }
    function p(A, U, I) {
      var O = Y(7);
      return (
        O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, A),
        O.write_shift(2, I, 'i'),
        O
      );
    }
    function v(A, U, I) {
      var O = f(A, U, I);
      return (O[1].v = A.read_shift(8, 'f')), O;
    }
    function h(A, U, I) {
      var O = Y(13);
      return (
        O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, A),
        O.write_shift(8, I, 'f'),
        O
      );
    }
    function x(A, U, I) {
      var O = A.l + U,
        z = f(A, U, I);
      if (((z[1].v = A.read_shift(8, 'f')), I.qpro)) A.l = O;
      else {
        var ge = A.read_shift(2);
        k(A.slice(A.l, A.l + ge), z), (A.l += ge);
      }
      return z;
    }
    function D(A, U, I) {
      var O = U & 32768;
      return (
        (U &= -32769),
        (U = (O ? A : 0) + (U >= 8192 ? U - 16384 : U)),
        (O ? '' : '$') + (I ? Bt(U) : It(U))
      );
    }
    var C = {
        51: ['FALSE', 0],
        52: ['TRUE', 0],
        70: ['LEN', 1],
        80: ['SUM', 69],
        81: ['AVERAGEA', 69],
        82: ['COUNTA', 69],
        83: ['MINA', 69],
        84: ['MAXA', 69],
        111: ['T', 1],
      },
      F = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '+',
        '-',
        '*',
        '/',
        '^',
        '=',
        '<>',
        '<=',
        '>=',
        '<',
        '>',
        '',
        '',
        '',
        '',
        '&',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ];
    function k(A, U) {
      ar(A, 0);
      for (
        var I = [], O = 0, z = '', ge = '', _e = '', xe = '';
        A.l < A.length;

      ) {
        var le = A[A.l++];
        switch (le) {
          case 0:
            I.push(A.read_shift(8, 'f'));
            break;
          case 1:
            (ge = D(U[0].c, A.read_shift(2), !0)),
              (z = D(U[0].r, A.read_shift(2), !1)),
              I.push(ge + z);
            break;
          case 2:
            {
              var Le = D(U[0].c, A.read_shift(2), !0),
                ke = D(U[0].r, A.read_shift(2), !1);
              (ge = D(U[0].c, A.read_shift(2), !0)),
                (z = D(U[0].r, A.read_shift(2), !1)),
                I.push(Le + ke + ':' + ge + z);
            }
            break;
          case 3:
            if (A.l < A.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            I.push('(' + I.pop() + ')');
            break;
          case 5:
            I.push(A.read_shift(2));
            break;
          case 6:
            {
              for (var Et = ''; (le = A[A.l++]); )
                Et += String.fromCharCode(le);
              I.push('"' + Et.replace(/"/g, '""') + '"');
            }
            break;
          case 8:
            I.push('-' + I.pop());
            break;
          case 23:
            I.push('+' + I.pop());
            break;
          case 22:
            I.push('NOT(' + I.pop() + ')');
            break;
          case 20:
          case 21:
            (xe = I.pop()),
              (_e = I.pop()),
              I.push(['AND', 'OR'][le - 20] + '(' + _e + ',' + xe + ')');
            break;
          default:
            if (le < 32 && F[le])
              (xe = I.pop()), (_e = I.pop()), I.push(_e + F[le] + xe);
            else if (C[le]) {
              if (((O = C[le][1]), O == 69 && (O = A[A.l++]), O > I.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    le.toString(16) +
                    ':|' +
                    I.join('|') +
                    '|',
                );
                return;
              }
              var Be = I.slice(-O);
              (I.length -= O), I.push(C[le][0] + '(' + Be.join(',') + ')');
            } else
              return le <= 7
                ? console.error('WK1 invalid opcode ' + le.toString(16))
                : le <= 24
                  ? console.error('WK1 unsupported op ' + le.toString(16))
                  : le <= 30
                    ? console.error('WK1 invalid opcode ' + le.toString(16))
                    : le <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + le.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + le.toString(16),
                        );
        }
      }
      I.length == 1
        ? (U[1].f = '' + I[0])
        : console.error('WK1 bad formula parse |' + I.join('|') + '|');
    }
    function j(A) {
      var U = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (U[0].r = A.read_shift(2)), (U[3] = A[A.l++]), (U[0].c = A[A.l++]), U
      );
    }
    function te(A, U) {
      var I = j(A);
      return (I[1].t = 's'), (I[1].v = A.read_shift(U - 4, 'cstr')), I;
    }
    function R(A, U, I, O) {
      var z = Y(6 + O.length);
      z.write_shift(2, A),
        z.write_shift(1, I),
        z.write_shift(1, U),
        z.write_shift(1, 39);
      for (var ge = 0; ge < O.length; ++ge) {
        var _e = O.charCodeAt(ge);
        z.write_shift(1, _e >= 128 ? 95 : _e);
      }
      return z.write_shift(1, 0), z;
    }
    function H(A, U) {
      var I = j(A);
      I[1].v = A.read_shift(2);
      var O = I[1].v >> 1;
      if (I[1].v & 1)
        switch (O & 7) {
          case 0:
            O = (O >> 3) * 5e3;
            break;
          case 1:
            O = (O >> 3) * 500;
            break;
          case 2:
            O = (O >> 3) / 20;
            break;
          case 3:
            O = (O >> 3) / 200;
            break;
          case 4:
            O = (O >> 3) / 2e3;
            break;
          case 5:
            O = (O >> 3) / 2e4;
            break;
          case 6:
            O = (O >> 3) / 16;
            break;
          case 7:
            O = (O >> 3) / 64;
            break;
        }
      return (I[1].v = O), I;
    }
    function L(A, U) {
      var I = j(A),
        O = A.read_shift(4),
        z = A.read_shift(4),
        ge = A.read_shift(2);
      if (ge == 65535)
        return (
          O === 0 && z === 3221225472
            ? ((I[1].t = 'e'), (I[1].v = 15))
            : O === 0 && z === 3489660928
              ? ((I[1].t = 'e'), (I[1].v = 42))
              : (I[1].v = 0),
          I
        );
      var _e = ge & 32768;
      return (
        (ge = (ge & 32767) - 16446),
        (I[1].v =
          (1 - _e * 2) * (z * Math.pow(2, ge + 32) + O * Math.pow(2, ge))),
        I
      );
    }
    function X(A, U, I, O) {
      var z = Y(14);
      if (
        (z.write_shift(2, A), z.write_shift(1, I), z.write_shift(1, U), O == 0)
      )
        return (
          z.write_shift(4, 0), z.write_shift(4, 0), z.write_shift(2, 65535), z
        );
      var ge = 0,
        _e = 0,
        xe = 0,
        le = 0;
      return (
        O < 0 && ((ge = 1), (O = -O)),
        (_e = Math.log2(O) | 0),
        (O /= Math.pow(2, _e - 31)),
        (le = O >>> 0),
        (le & 2147483648) == 0 && ((O /= 2), ++_e, (le = O >>> 0)),
        (O -= le),
        (le |= 2147483648),
        (le >>>= 0),
        (O *= Math.pow(2, 32)),
        (xe = O >>> 0),
        z.write_shift(4, xe),
        z.write_shift(4, le),
        (_e += 16383 + (ge ? 32768 : 0)),
        z.write_shift(2, _e),
        z
      );
    }
    function K(A, U) {
      var I = L(A);
      return (A.l += U - 14), I;
    }
    function J(A, U) {
      var I = j(A),
        O = A.read_shift(4);
      return (I[1].v = O >> 6), I;
    }
    function ie(A, U) {
      var I = j(A),
        O = A.read_shift(8, 'f');
      return (I[1].v = O), I;
    }
    function Pe(A, U) {
      var I = ie(A);
      return (A.l += U - 10), I;
    }
    function Ce(A, U) {
      return A[A.l + U - 1] == 0 ? A.read_shift(U, 'cstr') : '';
    }
    function ot(A, U) {
      var I = A[A.l++];
      I > U - 1 && (I = U - 1);
      for (var O = ''; O.length < I; ) O += String.fromCharCode(A[A.l++]);
      return O;
    }
    function ze(A, U, I) {
      if (!(!I.qpro || U < 21)) {
        var O = A.read_shift(1);
        (A.l += 17), (A.l += 1), (A.l += 2);
        var z = A.read_shift(U - 21, 'cstr');
        return [O, z];
      }
    }
    function pt(A, U) {
      for (var I = {}, O = A.l + U; A.l < O; ) {
        var z = A.read_shift(2);
        if (z == 14e3) {
          for (I[z] = [0, ''], I[z][0] = A.read_shift(2); A[A.l]; )
            (I[z][1] += String.fromCharCode(A[A.l])), A.l++;
          A.l++;
        }
      }
      return I;
    }
    function qe(A, U) {
      var I = Y(5 + A.length);
      I.write_shift(2, 14e3), I.write_shift(2, U);
      for (var O = 0; O < A.length; ++O) {
        var z = A.charCodeAt(O);
        I[I.l++] = z > 127 ? 95 : z;
      }
      return (I[I.l++] = 0), I;
    }
    var mt = {
        0: { n: 'BOF', f: ic },
        1: { n: 'EOF' },
        2: { n: 'CALCMODE' },
        3: { n: 'CALCORDER' },
        4: { n: 'SPLIT' },
        5: { n: 'SYNC' },
        6: { n: 'RANGE', f: o },
        7: { n: 'WINDOW1' },
        8: { n: 'COLW1' },
        9: { n: 'WINTWO' },
        10: { n: 'COLW2' },
        11: { n: 'NAME' },
        12: { n: 'BLANK' },
        13: { n: 'INTEGER', f: u },
        14: { n: 'NUMBER', f: v },
        15: { n: 'LABEL', f: c },
        16: { n: 'FORMULA', f: x },
        24: { n: 'TABLE' },
        25: { n: 'ORANGE' },
        26: { n: 'PRANGE' },
        27: { n: 'SRANGE' },
        28: { n: 'FRANGE' },
        29: { n: 'KRANGE1' },
        32: { n: 'HRANGE' },
        35: { n: 'KRANGE2' },
        36: { n: 'PROTEC' },
        37: { n: 'FOOTER' },
        38: { n: 'HEADER' },
        39: { n: 'SETUP' },
        40: { n: 'MARGINS' },
        41: { n: 'LABELFMT' },
        42: { n: 'TITLES' },
        43: { n: 'SHEETJS' },
        45: { n: 'GRAPH' },
        46: { n: 'NGRAPH' },
        47: { n: 'CALCCOUNT' },
        48: { n: 'UNFORMATTED' },
        49: { n: 'CURSORW12' },
        50: { n: 'WINDOW' },
        51: { n: 'STRING', f: c },
        55: { n: 'PASSWORD' },
        56: { n: 'LOCKED' },
        60: { n: 'QUERY' },
        61: { n: 'QUERYNAME' },
        62: { n: 'PRINT' },
        63: { n: 'PRINTNAME' },
        64: { n: 'GRAPH2' },
        65: { n: 'GRAPHNAME' },
        66: { n: 'ZOOM' },
        67: { n: 'SYMSPLIT' },
        68: { n: 'NSROWS' },
        69: { n: 'NSCOLS' },
        70: { n: 'RULER' },
        71: { n: 'NNAME' },
        72: { n: 'ACOMM' },
        73: { n: 'AMACRO' },
        74: { n: 'PARSE' },
        102: { n: 'PRANGES??' },
        103: { n: 'RRANGES??' },
        104: { n: 'FNAME??' },
        105: { n: 'MRANGES??' },
        204: { n: 'SHEETNAMECS', f: Ce },
        222: { n: 'SHEETNAMELP', f: ot },
        65535: { n: '' },
      },
      ft = {
        0: { n: 'BOF' },
        1: { n: 'EOF' },
        2: { n: 'PASSWORD' },
        3: { n: 'CALCSET' },
        4: { n: 'WINDOWSET' },
        5: { n: 'SHEETCELLPTR' },
        6: { n: 'SHEETLAYOUT' },
        7: { n: 'COLUMNWIDTH' },
        8: { n: 'HIDDENCOLUMN' },
        9: { n: 'USERRANGE' },
        10: { n: 'SYSTEMRANGE' },
        11: { n: 'ZEROFORCE' },
        12: { n: 'SORTKEYDIR' },
        13: { n: 'FILESEAL' },
        14: { n: 'DATAFILLNUMS' },
        15: { n: 'PRINTMAIN' },
        16: { n: 'PRINTSTRING' },
        17: { n: 'GRAPHMAIN' },
        18: { n: 'GRAPHSTRING' },
        19: { n: '??' },
        20: { n: 'ERRCELL' },
        21: { n: 'NACELL' },
        22: { n: 'LABEL16', f: te },
        23: { n: 'NUMBER17', f: L },
        24: { n: 'NUMBER18', f: H },
        25: { n: 'FORMULA19', f: K },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: pt },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: J },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: ie },
        40: { n: 'FORMULA28', f: Pe },
        142: { n: '??' },
        147: { n: '??' },
        150: { n: '??' },
        151: { n: '??' },
        152: { n: '??' },
        153: { n: '??' },
        154: { n: '??' },
        155: { n: '??' },
        156: { n: '??' },
        163: { n: '??' },
        174: { n: '??' },
        175: { n: '??' },
        176: { n: '??' },
        177: { n: '??' },
        184: { n: '??' },
        185: { n: '??' },
        186: { n: '??' },
        187: { n: '??' },
        188: { n: '??' },
        195: { n: '??' },
        201: { n: '??' },
        204: { n: 'SHEETNAMECS', f: Ce },
        205: { n: '??' },
        206: { n: '??' },
        207: { n: '??' },
        208: { n: '??' },
        256: { n: '??' },
        259: { n: '??' },
        260: { n: '??' },
        261: { n: '??' },
        262: { n: '??' },
        263: { n: '??' },
        265: { n: '??' },
        266: { n: '??' },
        267: { n: '??' },
        268: { n: '??' },
        270: { n: '??' },
        271: { n: '??' },
        384: { n: '??' },
        389: { n: '??' },
        390: { n: '??' },
        393: { n: '??' },
        396: { n: '??' },
        512: { n: '??' },
        514: { n: '??' },
        513: { n: '??' },
        516: { n: '??' },
        517: { n: '??' },
        640: { n: '??' },
        641: { n: '??' },
        642: { n: '??' },
        643: { n: '??' },
        644: { n: '??' },
        645: { n: '??' },
        646: { n: '??' },
        647: { n: '??' },
        648: { n: '??' },
        658: { n: '??' },
        659: { n: '??' },
        660: { n: '??' },
        661: { n: '??' },
        662: { n: '??' },
        665: { n: '??' },
        666: { n: '??' },
        768: { n: '??' },
        772: { n: '??' },
        1537: { n: 'SHEETINFOQP', f: ze },
        1600: { n: '??' },
        1602: { n: '??' },
        1793: { n: '??' },
        1794: { n: '??' },
        1795: { n: '??' },
        1796: { n: '??' },
        1920: { n: '??' },
        2048: { n: '??' },
        2049: { n: '??' },
        2052: { n: '??' },
        2688: { n: '??' },
        10998: { n: '??' },
        12849: { n: '??' },
        28233: { n: '??' },
        28484: { n: '??' },
        65535: { n: '' },
      };
    return { sheet_to_wk1: n, book_to_wk3: a, to_workbook: r };
  })(),
  yv = /^\s|\s$|[\t\n\r]/;
function uc(t, r) {
  if (!r.bookSST) return '';
  var e = [wt];
  e[e.length] = se('sst', null, {
    xmlns: da[0],
    count: t.Count,
    uniqueCount: t.Unique,
  });
  for (var n = 0; n != t.length; ++n)
    if (t[n] != null) {
      var a = t[n],
        i = '<si>';
      a.r
        ? (i += a.r)
        : ((i += '<t'),
          a.t || (a.t = ''),
          a.t.match(yv) && (i += ' xml:space="preserve"'),
          (i += '>' + Ke(a.t) + '</t>')),
        (i += '</si>'),
        (e[e.length] = i);
    }
  return (
    e.length > 2 &&
      ((e[e.length] = '</sst>'), (e[1] = e[1].replace('/>', '>'))),
    e.join('')
  );
}
function Sv(t) {
  return [t.read_shift(4), t.read_shift(4)];
}
function Av(t, r) {
  return (
    r || (r = Y(8)), r.write_shift(4, t.Count), r.write_shift(4, t.Unique), r
  );
}
var Fv = mp;
function Cv(t) {
  var r = Jt();
  Z(r, 159, Av(t));
  for (var e = 0; e < t.length; ++e) Z(r, 19, Fv(t[e]));
  return Z(r, 160), r.end();
}
function Dv(t) {
  for (var r = [], e = t.split(''), n = 0; n < e.length; ++n)
    r[n] = e[n].charCodeAt(0);
  return r;
}
function hc(t) {
  var r = 0,
    e,
    n = Dv(t),
    a = n.length + 1,
    i,
    s,
    o,
    l,
    f;
  for (e = In(a), e[0] = n.length, i = 1; i != a; ++i) e[i] = n[i - 1];
  for (i = a - 1; i >= 0; --i)
    (s = e[i]),
      (o = (r & 16384) === 0 ? 0 : 1),
      (l = (r << 1) & 32767),
      (f = o | l),
      (r = f ^ s);
  return r ^ 52811;
}
var Ov = (function () {
  function t(a, i) {
    switch (i.type) {
      case 'base64':
        return r(qr(a), i);
      case 'binary':
        return r(a, i);
      case 'buffer':
        return r(je && Buffer.isBuffer(a) ? a.toString('binary') : Za(a), i);
      case 'array':
        return r(cs(a), i);
    }
    throw new Error('Unrecognized type ' + i.type);
  }
  function r(a, i) {
    var s = i || {},
      o = s.dense ? [] : {},
      l = a.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error('RTF missing table');
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (c, d) {
        Array.isArray(o) && (o[d] = []);
        for (var u = /\\\w+\b/g, p = 0, v, h = -1; (v = u.exec(c)); ) {
          switch (v[0]) {
            case '\\cell':
              var x = c.slice(p, u.lastIndex - v[0].length);
              if ((x[0] == ' ' && (x = x.slice(1)), ++h, x.length)) {
                var D = { v: x, t: 's' };
                Array.isArray(o) ? (o[d][h] = D) : (o[$e({ r: d, c: h })] = D);
              }
              break;
          }
          p = u.lastIndex;
        }
        h > f.e.c && (f.e.c = h);
      }),
      (o['!ref'] = _t(f)),
      o
    );
  }
  function e(a, i) {
    return Bn(t(a, i), i);
  }
  function n(a) {
    for (
      var i = ['{\\rtf1\\ansi'],
        s = st(a['!ref']),
        o,
        l = Array.isArray(a),
        f = s.s.r;
      f <= s.e.r;
      ++f
    ) {
      i.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) i.push('\\cellx' + (c + 1));
      for (i.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var d = $e({ r: f, c });
        (o = l ? (a[f] || [])[c] : a[d]),
          !(!o || (o.v == null && (!o.f || o.F))) &&
            (i.push(' ' + (o.w || (Jr(o), o.w))), i.push('\\cell'));
      }
      i.push('\\pard\\intbl\\row');
    }
    return i.join('') + '}';
  }
  return { to_workbook: e, to_sheet: t, from_sheet: n };
})();
function qo(t) {
  for (var r = 0, e = 1; r != 3; ++r)
    e = e * 256 + (t[r] > 255 ? 255 : t[r] < 0 ? 0 : t[r]);
  return e.toString(16).toUpperCase().slice(1);
}
var Nv = 6,
  $r = Nv;
function Vi(t) {
  return Math.floor((t + Math.round(128 / $r) / 256) * $r);
}
function ji(t) {
  return Math.floor(((t - 5) / $r) * 100 + 0.5) / 100;
}
function qs(t) {
  return Math.round(((t * $r + 5) / $r) * 256) / 256;
}
function R0(t) {
  t.width
    ? ((t.wpx = Vi(t.width)), (t.wch = ji(t.wpx)), (t.MDW = $r))
    : t.wpx
      ? ((t.wch = ji(t.wpx)), (t.width = qs(t.wch)), (t.MDW = $r))
      : typeof t.wch == 'number' &&
        ((t.width = qs(t.wch)), (t.wpx = Vi(t.width)), (t.MDW = $r)),
    t.customWidth && delete t.customWidth;
}
var Rv = 96,
  dc = Rv;
function Gi(t) {
  return (t * 96) / dc;
}
function pc(t) {
  return (t * dc) / 96;
}
function kv(t) {
  var r = ['<numFmts>'];
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (e) {
      for (var n = e[0]; n <= e[1]; ++n)
        t[n] != null &&
          (r[r.length] = se('numFmt', null, {
            numFmtId: n,
            formatCode: Ke(t[n]),
          }));
    }),
    r.length === 1
      ? ''
      : ((r[r.length] = '</numFmts>'),
        (r[0] = se('numFmts', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function Iv(t) {
  var r = [];
  return (
    (r[r.length] = se('cellXfs', null)),
    t.forEach(function (e) {
      r[r.length] = se('xf', null, e);
    }),
    (r[r.length] = '</cellXfs>'),
    r.length === 2
      ? ''
      : ((r[0] = se('cellXfs', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function vc(t, r) {
  var e = [wt, se('styleSheet', null, { xmlns: da[0], 'xmlns:vt': St.vt })],
    n;
  return (
    t.SSF && (n = kv(t.SSF)) != null && (e[e.length] = n),
    (e[e.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (e[e.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (e[e.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (e[e.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Iv(r.cellXfs)) && (e[e.length] = n),
    (e[e.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (e[e.length] = '<dxfs count="0"/>'),
    (e[e.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    e.length > 2 &&
      ((e[e.length] = '</styleSheet>'), (e[1] = e[1].replace('/>', '>'))),
    e.join('')
  );
}
function bv(t, r) {
  var e = t.read_shift(2),
    n = Ut(t);
  return [e, n];
}
function Pv(t, r, e) {
  e || (e = Y(6 + 4 * r.length)), e.write_shift(2, t), Ft(r, e);
  var n = e.length > e.l ? e.slice(0, e.l) : e;
  return e.l == null && (e.l = e.length), n;
}
function Mv(t, r, e) {
  var n = {};
  n.sz = t.read_shift(2) / 20;
  var a = yp(t);
  a.fItalic && (n.italic = 1),
    a.fCondense && (n.condense = 1),
    a.fExtend && (n.extend = 1),
    a.fShadow && (n.shadow = 1),
    a.fOutline && (n.outline = 1),
    a.fStrikeout && (n.strike = 1);
  var i = t.read_shift(2);
  switch ((i === 700 && (n.bold = 1), t.read_shift(2))) {
    case 1:
      n.vertAlign = 'superscript';
      break;
    case 2:
      n.vertAlign = 'subscript';
      break;
  }
  var s = t.read_shift(1);
  s != 0 && (n.underline = s);
  var o = t.read_shift(1);
  o > 0 && (n.family = o);
  var l = t.read_shift(1);
  switch (
    (l > 0 && (n.charset = l), t.l++, (n.color = Tp(t)), t.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = Ut(t)), n;
}
function Lv(t, r) {
  r || (r = Y(25 + 4 * 32)),
    r.write_shift(2, t.sz * 20),
    Sp(t, r),
    r.write_shift(2, t.bold ? 700 : 400);
  var e = 0;
  t.vertAlign == 'superscript'
    ? (e = 1)
    : t.vertAlign == 'subscript' && (e = 2),
    r.write_shift(2, e),
    r.write_shift(1, t.underline || 0),
    r.write_shift(1, t.family || 0),
    r.write_shift(1, t.charset || 0),
    r.write_shift(1, 0),
    Hi(t.color, r);
  var n = 0;
  return (
    (n = 2),
    r.write_shift(1, n),
    Ft(t.name, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
var Bv = [
    'none',
    'solid',
    'mediumGray',
    'darkGray',
    'lightGray',
    'darkHorizontal',
    'darkVertical',
    'darkDown',
    'darkUp',
    'darkGrid',
    'darkTrellis',
    'lightHorizontal',
    'lightVertical',
    'lightDown',
    'lightUp',
    'lightGrid',
    'lightTrellis',
    'gray125',
    'gray0625',
  ],
  As,
  Uv = Lr;
function Jo(t, r) {
  r || (r = Y(4 * 3 + 8 * 7 + 16 * 1)), As || (As = _0(Bv));
  var e = As[t.patternType];
  e == null && (e = 40), r.write_shift(4, e);
  var n = 0;
  if (e != 40)
    for (Hi({ auto: 1 }, r), Hi({ auto: 1 }, r); n < 12; ++n)
      r.write_shift(4, 0);
  else {
    for (; n < 4; ++n) r.write_shift(4, 0);
    for (; n < 12; ++n) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function Hv(t, r) {
  var e = t.l + r,
    n = t.read_shift(2),
    a = t.read_shift(2);
  return (t.l = e), { ixfe: n, numFmtId: a };
}
function mc(t, r, e) {
  e || (e = Y(16)),
    e.write_shift(2, r || 0),
    e.write_shift(2, t.numFmtId || 0),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e.write_shift(1, 0);
  var n = 0;
  return (
    e.write_shift(1, n),
    e.write_shift(1, 0),
    e.write_shift(1, 0),
    e.write_shift(1, 0),
    e
  );
}
function Ea(t, r) {
  return (
    r || (r = Y(10)),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var Wv = Lr;
function Vv(t, r) {
  return (
    r || (r = Y(51)),
    r.write_shift(1, 0),
    Ea(null, r),
    Ea(null, r),
    Ea(null, r),
    Ea(null, r),
    Ea(null, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function jv(t, r) {
  return (
    r || (r = Y(12 + 4 * 10)),
    r.write_shift(4, t.xfId),
    r.write_shift(2, 1),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    Ui(t.name || '', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Gv(t, r, e) {
  var n = Y(2052);
  return (
    n.write_shift(4, t),
    Ui(r, n),
    Ui(e, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Yv(t, r) {
  if (r) {
    var e = 0;
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a) r[a] != null && ++e;
    }),
      e != 0 &&
        (Z(t, 615, Dr(e)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var a = n[0]; a <= n[1]; ++a)
            r[a] != null && Z(t, 44, Pv(a, r[a]));
        }),
        Z(t, 616));
  }
}
function Xv(t) {
  var r = 1;
  Z(t, 611, Dr(r)),
    Z(t, 43, Lv({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    Z(t, 612);
}
function Kv(t) {
  var r = 2;
  Z(t, 603, Dr(r)),
    Z(t, 45, Jo({ patternType: 'none' })),
    Z(t, 45, Jo({ patternType: 'gray125' })),
    Z(t, 604);
}
function $v(t) {
  var r = 1;
  Z(t, 613, Dr(r)), Z(t, 46, Vv()), Z(t, 614);
}
function zv(t) {
  var r = 1;
  Z(t, 626, Dr(r)), Z(t, 47, mc({ numFmtId: 0 }, 65535)), Z(t, 627);
}
function qv(t, r) {
  Z(t, 617, Dr(r.length)),
    r.forEach(function (e) {
      Z(t, 47, mc(e, 0));
    }),
    Z(t, 618);
}
function Jv(t) {
  var r = 1;
  Z(t, 619, Dr(r)), Z(t, 48, jv({ xfId: 0, name: 'Normal' })), Z(t, 620);
}
function Zv(t) {
  var r = 0;
  Z(t, 505, Dr(r)), Z(t, 506);
}
function Qv(t) {
  var r = 0;
  Z(t, 508, Gv(r, 'TableStyleMedium9', 'PivotStyleMedium4')), Z(t, 509);
}
function em(t, r) {
  var e = Jt();
  return (
    Z(e, 278),
    Yv(e, t.SSF),
    Xv(e),
    Kv(e),
    $v(e),
    zv(e),
    qv(e, r.cellXfs),
    Jv(e),
    Zv(e),
    Qv(e),
    Z(e, 279),
    e.end()
  );
}
function xc(t, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (t && typeof t.raw == 'string') return t.raw;
  var e = [wt];
  return (
    (e[e.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (e[e.length] = '<a:themeElements>'),
    (e[e.length] = '<a:clrScheme name="Office">'),
    (e[e.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (e[e.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (e[e.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (e[e.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (e[e.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (e[e.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (e[e.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (e[e.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (e[e.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (e[e.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (e[e.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (e[e.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (e[e.length] = '</a:clrScheme>'),
    (e[e.length] = '<a:fontScheme name="Office">'),
    (e[e.length] = '<a:majorFont>'),
    (e[e.length] = '<a:latin typeface="Cambria"/>'),
    (e[e.length] = '<a:ea typeface=""/>'),
    (e[e.length] = '<a:cs typeface=""/>'),
    (e[e.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (e[e.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (e[e.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (e[e.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (e[e.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (e[e.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (e[e.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (e[e.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (e[e.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (e[e.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (e[e.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (e[e.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (e[e.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (e[e.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (e[e.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (e[e.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (e[e.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (e[e.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (e[e.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (e[e.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (e[e.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (e[e.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (e[e.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (e[e.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (e[e.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (e[e.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (e[e.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (e[e.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (e[e.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (e[e.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (e[e.length] = '</a:majorFont>'),
    (e[e.length] = '<a:minorFont>'),
    (e[e.length] = '<a:latin typeface="Calibri"/>'),
    (e[e.length] = '<a:ea typeface=""/>'),
    (e[e.length] = '<a:cs typeface=""/>'),
    (e[e.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (e[e.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (e[e.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (e[e.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (e[e.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (e[e.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (e[e.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (e[e.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (e[e.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (e[e.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (e[e.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (e[e.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (e[e.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (e[e.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (e[e.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (e[e.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (e[e.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (e[e.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (e[e.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (e[e.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (e[e.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (e[e.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (e[e.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (e[e.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (e[e.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (e[e.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (e[e.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (e[e.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (e[e.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (e[e.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (e[e.length] = '</a:minorFont>'),
    (e[e.length] = '</a:fontScheme>'),
    (e[e.length] = '<a:fmtScheme name="Office">'),
    (e[e.length] = '<a:fillStyleLst>'),
    (e[e.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (e[e.length] = '<a:gradFill rotWithShape="1">'),
    (e[e.length] = '<a:gsLst>'),
    (e[e.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (e[e.length] = '</a:gsLst>'),
    (e[e.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (e[e.length] = '</a:gradFill>'),
    (e[e.length] = '<a:gradFill rotWithShape="1">'),
    (e[e.length] = '<a:gsLst>'),
    (e[e.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (e[e.length] = '</a:gsLst>'),
    (e[e.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (e[e.length] = '</a:gradFill>'),
    (e[e.length] = '</a:fillStyleLst>'),
    (e[e.length] = '<a:lnStyleLst>'),
    (e[e.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (e[e.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (e[e.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (e[e.length] = '</a:lnStyleLst>'),
    (e[e.length] = '<a:effectStyleLst>'),
    (e[e.length] = '<a:effectStyle>'),
    (e[e.length] = '<a:effectLst>'),
    (e[e.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (e[e.length] = '</a:effectLst>'),
    (e[e.length] = '</a:effectStyle>'),
    (e[e.length] = '<a:effectStyle>'),
    (e[e.length] = '<a:effectLst>'),
    (e[e.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (e[e.length] = '</a:effectLst>'),
    (e[e.length] = '</a:effectStyle>'),
    (e[e.length] = '<a:effectStyle>'),
    (e[e.length] = '<a:effectLst>'),
    (e[e.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (e[e.length] = '</a:effectLst>'),
    (e[e.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (e[e.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (e[e.length] = '</a:effectStyle>'),
    (e[e.length] = '</a:effectStyleLst>'),
    (e[e.length] = '<a:bgFillStyleLst>'),
    (e[e.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (e[e.length] = '<a:gradFill rotWithShape="1">'),
    (e[e.length] = '<a:gsLst>'),
    (e[e.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (e[e.length] = '</a:gsLst>'),
    (e[e.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (e[e.length] = '</a:gradFill>'),
    (e[e.length] = '<a:gradFill rotWithShape="1">'),
    (e[e.length] = '<a:gsLst>'),
    (e[e.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (e[e.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (e[e.length] = '</a:gsLst>'),
    (e[e.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (e[e.length] = '</a:gradFill>'),
    (e[e.length] = '</a:bgFillStyleLst>'),
    (e[e.length] = '</a:fmtScheme>'),
    (e[e.length] = '</a:themeElements>'),
    (e[e.length] = '<a:objectDefaults>'),
    (e[e.length] = '<a:spDef>'),
    (e[e.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (e[e.length] = '</a:spDef>'),
    (e[e.length] = '<a:lnDef>'),
    (e[e.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (e[e.length] = '</a:lnDef>'),
    (e[e.length] = '</a:objectDefaults>'),
    (e[e.length] = '<a:extraClrSchemeLst/>'),
    (e[e.length] = '</a:theme>'),
    e.join('')
  );
}
function tm(t, r) {
  return { flags: t.read_shift(4), version: t.read_shift(4), name: Ut(t) };
}
function rm(t) {
  var r = Y(12 + 2 * t.name.length);
  return (
    r.write_shift(4, t.flags),
    r.write_shift(4, t.version),
    Ft(t.name, r),
    r.slice(0, r.l)
  );
}
function nm(t) {
  for (var r = [], e = t.read_shift(4); e-- > 0; )
    r.push([t.read_shift(4), t.read_shift(4)]);
  return r;
}
function am(t) {
  var r = Y(4 + 8 * t.length);
  r.write_shift(4, t.length);
  for (var e = 0; e < t.length; ++e)
    r.write_shift(4, t[e][0]), r.write_shift(4, t[e][1]);
  return r;
}
function im(t, r) {
  var e = Y(8 + 2 * r.length);
  return e.write_shift(4, t), Ft(r, e), e.slice(0, e.l);
}
function sm(t) {
  return (t.l += 4), t.read_shift(4) != 0;
}
function om(t, r) {
  var e = Y(8);
  return e.write_shift(4, t), e.write_shift(4, 1), e;
}
function fm() {
  var t = Jt();
  return (
    Z(t, 332),
    Z(t, 334, Dr(1)),
    Z(t, 335, rm({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    Z(t, 336),
    Z(t, 339, im(1, 'XLDAPR')),
    Z(t, 52),
    Z(t, 35, Dr(514)),
    Z(t, 4096, Dr(0)),
    Z(t, 4097, mr(1)),
    Z(t, 36),
    Z(t, 53),
    Z(t, 340),
    Z(t, 337, om(1)),
    Z(t, 51, am([[1, 0]])),
    Z(t, 338),
    Z(t, 333),
    t.end()
  );
}
function gc() {
  var t = [wt];
  return (
    t.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),
    t.join('')
  );
}
function lm(t) {
  var r = {};
  r.i = t.read_shift(4);
  var e = {};
  (e.r = t.read_shift(4)), (e.c = t.read_shift(4)), (r.r = $e(e));
  var n = t.read_shift(1);
  return n & 2 && (r.l = '1'), n & 8 && (r.a = '1'), r;
}
var ea = 1024;
function _c(t, r) {
  for (
    var e = [21600, 21600],
      n = ['m0,0l0', e[1], e[0], e[1], e[0], '0xe'].join(','),
      a = [
        se('xml', null, {
          'xmlns:v': ir.v,
          'xmlns:o': ir.o,
          'xmlns:x': ir.x,
          'xmlns:mv': ir.mv,
        }).replace(/\/>/, '>'),
        se('o:shapelayout', se('o:idmap', null, { 'v:ext': 'edit', data: t }), {
          'v:ext': 'edit',
        }),
        se(
          'v:shapetype',
          [
            se('v:stroke', null, { joinstyle: 'miter' }),
            se('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: e.join(','), path: n },
        ),
      ];
    ea < t * 1e3;

  )
    ea += 1e3;
  return (
    r.forEach(function (i) {
      var s = At(i[0]),
        o = { color2: '#BEFF82', type: 'gradient' };
      o.type == 'gradient' && (o.angle = '-180');
      var l =
          o.type == 'gradient'
            ? se('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        f = se('v:fill', l, o),
        c = { on: 't', obscured: 't' };
      ++ea,
        (a = a.concat([
          '<v:shape' +
            ja({
              id: '_x0000_s' + ea,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (i[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          f,
          se('v:shadow', null, c),
          se('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          kt(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          kt('x:AutoFill', 'False'),
          kt('x:Row', String(s.r)),
          kt('x:Column', String(s.c)),
          i[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    a.push('</xml>'),
    a.join('')
  );
}
function wc(t) {
  var r = [wt, se('comments', null, { xmlns: da[0] })],
    e = [];
  return (
    r.push('<authors>'),
    t.forEach(function (n) {
      n[1].forEach(function (a) {
        var i = Ke(a.a);
        e.indexOf(i) == -1 && (e.push(i), r.push('<author>' + i + '</author>')),
          a.T &&
            a.ID &&
            e.indexOf('tc=' + a.ID) == -1 &&
            (e.push('tc=' + a.ID), r.push('<author>tc=' + a.ID + '</author>'));
      });
    }),
    e.length == 0 && (e.push('SheetJ5'), r.push('<author>SheetJ5</author>')),
    r.push('</authors>'),
    r.push('<commentList>'),
    t.forEach(function (n) {
      var a = 0,
        i = [];
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (a = e.indexOf('tc=' + n[1][0].ID))
          : n[1].forEach(function (l) {
              l.a && (a = e.indexOf(Ke(l.a))), i.push(l.t || '');
            }),
        r.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'),
        i.length <= 1)
      )
        r.push(kt('t', Ke(i[0] || '')));
      else {
        for (
          var s =
              `Comment:
    ` +
              i[0] +
              `
`,
            o = 1;
          o < i.length;
          ++o
        )
          s +=
            `Reply:
    ` +
            i[o] +
            `
`;
        r.push(kt('t', Ke(s)));
      }
      r.push('</text></comment>');
    }),
    r.push('</commentList>'),
    r.length > 2 &&
      ((r[r.length] = '</comments>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function cm(t, r, e) {
  var n = [
    wt,
    se('ThreadedComments', null, { xmlns: St.TCMNT }).replace(/[\/]>/, '>'),
  ];
  return (
    t.forEach(function (a) {
      var i = '';
      (a[1] || []).forEach(function (s, o) {
        if (!s.T) {
          delete s.ID;
          return;
        }
        s.a && r.indexOf(s.a) == -1 && r.push(s.a);
        var l = {
          ref: a[0],
          id:
            '{54EE7951-7262-4200-6969-' +
            ('000000000000' + e.tcid++).slice(-12) +
            '}',
        };
        o == 0 ? (i = l.id) : (l.parentId = i),
          (s.ID = l.id),
          s.a &&
            (l.personId =
              '{54EE7950-7262-4200-6969-' +
              ('000000000000' + r.indexOf(s.a)).slice(-12) +
              '}'),
          n.push(se('threadedComment', kt('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function um(t) {
  var r = [
    wt,
    se('personList', null, { xmlns: St.TCMNT, 'xmlns:x': da[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    t.forEach(function (e, n) {
      r.push(
        se('person', null, {
          displayName: e,
          id:
            '{54EE7950-7262-4200-6969-' + ('000000000000' + n).slice(-12) + '}',
          userId: e,
          providerId: 'None',
        }),
      );
    }),
    r.push('</personList>'),
    r.join('')
  );
}
function hm(t) {
  var r = {};
  r.iauthor = t.read_shift(4);
  var e = Vn(t);
  return (r.rfx = e.s), (r.ref = $e(e.s)), (t.l += 16), r;
}
function dm(t, r) {
  return (
    r == null && (r = Y(36)),
    r.write_shift(4, t[1].iauthor),
    va(t[0], r),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var pm = Ut;
function vm(t) {
  return Ft(t.slice(0, 54));
}
function mm(t) {
  var r = Jt(),
    e = [];
  return (
    Z(r, 628),
    Z(r, 630),
    t.forEach(function (n) {
      n[1].forEach(function (a) {
        e.indexOf(a.a) > -1 || (e.push(a.a.slice(0, 54)), Z(r, 632, vm(a.a)));
      });
    }),
    Z(r, 631),
    Z(r, 633),
    t.forEach(function (n) {
      n[1].forEach(function (a) {
        a.iauthor = e.indexOf(a.a);
        var i = { s: At(n[0]), e: At(n[0]) };
        Z(r, 635, dm([i, a])),
          a.t && a.t.length > 0 && Z(r, 637, gp(a)),
          Z(r, 636),
          delete a.iauthor;
      });
    }),
    Z(r, 634),
    Z(r, 629),
    r.end()
  );
}
function xm(t, r) {
  r.FullPaths.forEach(function (e, n) {
    if (n != 0) {
      var a = e.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      a.slice(-1) !== '/' && Ze.utils.cfb_add(t, a, r.FileIndex[n].content);
    }
  });
}
var Ec = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  gm = (function () {
    var t =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      r = { r: 0, c: 0 };
    function e(n, a, i, s) {
      var o = !1,
        l = !1;
      i.length == 0
        ? (l = !0)
        : i.charAt(0) == '[' && ((l = !0), (i = i.slice(1, -1))),
        s.length == 0
          ? (o = !0)
          : s.charAt(0) == '[' && ((o = !0), (s = s.slice(1, -1)));
      var f = i.length > 0 ? parseInt(i, 10) | 0 : 0,
        c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
      return (
        o ? (c += r.c) : --c,
        l ? (f += r.r) : --f,
        a + (o ? '' : '$') + Bt(c) + (l ? '' : '$') + It(f)
      );
    }
    return function (a, i) {
      return (r = i), a.replace(t, e);
    };
  })(),
  k0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  I0 = (function () {
    return function (r, e) {
      return r.replace(k0, function (n, a, i, s, o, l) {
        var f = F0(s) - (i ? 0 : e.c),
          c = A0(l) - (o ? 0 : e.r),
          d = c == 0 ? '' : o ? c + 1 : '[' + c + ']',
          u = f == 0 ? '' : i ? f + 1 : '[' + f + ']';
        return a + 'R' + d + 'C' + u;
      });
    };
  })();
function _m(t, r) {
  return t.replace(k0, function (e, n, a, i, s, o) {
    return (
      n +
      (a == '$' ? a + i : Bt(F0(i) + r.c)) +
      (s == '$' ? s + o : It(A0(o) + r.r))
    );
  });
}
function wm(t) {
  return t.length != 1;
}
function xt(t) {
  t.l += 1;
}
function vn(t, r) {
  var e = t.read_shift(2);
  return [e & 16383, (e >> 14) & 1, (e >> 15) & 1];
}
function Tc(t, r, e) {
  var n = 2;
  if (e) {
    if (e.biff >= 2 && e.biff <= 5) return yc(t);
    e.biff == 12 && (n = 4);
  }
  var a = t.read_shift(n),
    i = t.read_shift(n),
    s = vn(t),
    o = vn(t);
  return {
    s: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: i, c: o[0], cRel: o[1], rRel: o[2] },
  };
}
function yc(t) {
  var r = vn(t),
    e = vn(t),
    n = t.read_shift(1),
    a = t.read_shift(1);
  return {
    s: { r: r[0], c: n, cRel: r[1], rRel: r[2] },
    e: { r: e[0], c: a, cRel: e[1], rRel: e[2] },
  };
}
function Em(t, r, e) {
  if (e.biff < 8) return yc(t);
  var n = t.read_shift(e.biff == 12 ? 4 : 2),
    a = t.read_shift(e.biff == 12 ? 4 : 2),
    i = vn(t),
    s = vn(t);
  return {
    s: { r: n, c: i[0], cRel: i[1], rRel: i[2] },
    e: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Sc(t, r, e) {
  if (e && e.biff >= 2 && e.biff <= 5) return Tm(t);
  var n = t.read_shift(e && e.biff == 12 ? 4 : 2),
    a = vn(t);
  return { r: n, c: a[0], cRel: a[1], rRel: a[2] };
}
function Tm(t) {
  var r = vn(t),
    e = t.read_shift(1);
  return { r: r[0], c: e, cRel: r[1], rRel: r[2] };
}
function ym(t) {
  var r = t.read_shift(2),
    e = t.read_shift(2);
  return {
    r,
    c: e & 255,
    fQuoted: !!(e & 16384),
    cRel: e >> 15,
    rRel: e >> 15,
  };
}
function Sm(t, r, e) {
  var n = e && e.biff ? e.biff : 8;
  if (n >= 2 && n <= 5) return Am(t);
  var a = t.read_shift(n >= 12 ? 4 : 2),
    i = t.read_shift(2),
    s = (i & 16384) >> 14,
    o = (i & 32768) >> 15;
  if (((i &= 16383), o == 1)) for (; a > 524287; ) a -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: a, c: i, cRel: s, rRel: o };
}
function Am(t) {
  var r = t.read_shift(2),
    e = t.read_shift(1),
    n = (r & 32768) >> 15,
    a = (r & 16384) >> 14;
  return (
    (r &= 16383),
    n == 1 && r >= 8192 && (r = r - 16384),
    a == 1 && e >= 128 && (e = e - 256),
    { r, c: e, cRel: a, rRel: n }
  );
}
function Fm(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    a = Tc(t, e.biff >= 2 && e.biff <= 5 ? 6 : 8, e);
  return [n, a];
}
function Cm(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    a = t.read_shift(2, 'i'),
    i = 8;
  if (e)
    switch (e.biff) {
      case 5:
        (t.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  var s = Tc(t, i, e);
  return [n, a, s];
}
function Dm(t, r, e) {
  var n = (t[t.l++] & 96) >> 5;
  return (t.l += e && e.biff > 8 ? 12 : e.biff < 8 ? 6 : 8), [n];
}
function Om(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    a = t.read_shift(2),
    i = 8;
  if (e)
    switch (e.biff) {
      case 5:
        (t.l += 12), (i = 6);
        break;
      case 12:
        i = 12;
        break;
    }
  return (t.l += i), [n, a];
}
function Nm(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    a = Em(t, r - 1, e);
  return [n, a];
}
function Rm(t, r, e) {
  var n = (t[t.l++] & 96) >> 5;
  return (t.l += e.biff == 2 ? 6 : e.biff == 12 ? 14 : 7), [n];
}
function Zo(t) {
  var r = t[t.l + 1] & 1,
    e = 1;
  return (t.l += 4), [r, e];
}
function km(t, r, e) {
  t.l += 2;
  for (
    var n = t.read_shift(e && e.biff == 2 ? 1 : 2), a = [], i = 0;
    i <= n;
    ++i
  )
    a.push(t.read_shift(e && e.biff == 2 ? 1 : 2));
  return a;
}
function Im(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [n, t.read_shift(e && e.biff == 2 ? 1 : 2)];
}
function bm(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [n, t.read_shift(e && e.biff == 2 ? 1 : 2)];
}
function Pm(t) {
  var r = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [r, t.read_shift(2)];
}
function Mm(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += e && e.biff == 2 ? 3 : 4), [n];
}
function Ac(t) {
  var r = t.read_shift(1),
    e = t.read_shift(1);
  return [r, e];
}
function Lm(t) {
  return t.read_shift(2), Ac(t);
}
function Bm(t) {
  return t.read_shift(2), Ac(t);
}
function Um(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var a = Sc(t, 0, e);
  return [n, a];
}
function Hm(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var a = Sm(t, 0, e);
  return [n, a];
}
function Wm(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var a = t.read_shift(2);
  e && e.biff == 5 && (t.l += 12);
  var i = Sc(t, 0, e);
  return [n, a, i];
}
function Vm(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var a = t.read_shift(e && e.biff <= 3 ? 1 : 2);
  return [Vx[a], Dc[a], n];
}
function jm(t, r, e) {
  var n = t[t.l++],
    a = t.read_shift(1),
    i = e && e.biff <= 3 ? [n == 88 ? -1 : 0, t.read_shift(1)] : Gm(t);
  return [a, (i[0] === 0 ? Dc : Wx)[i[1]]];
}
function Gm(t) {
  return [t[t.l + 1] >> 7, t.read_shift(2) & 32767];
}
function Ym(t, r, e) {
  t.l += e && e.biff == 2 ? 3 : 4;
}
function Xm(t, r, e) {
  if ((t.l++, e && e.biff == 12)) return [t.read_shift(4, 'i'), 0];
  var n = t.read_shift(2),
    a = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, a];
}
function Km(t) {
  return t.l++, ti[t.read_shift(1)];
}
function $m(t) {
  return t.l++, t.read_shift(2);
}
function zm(t) {
  return t.l++, t.read_shift(1) !== 0;
}
function qm(t) {
  return t.l++, ma(t);
}
function Jm(t, r, e) {
  return t.l++, oc(t, r - 1, e);
}
function Zm(t, r) {
  var e = [t.read_shift(1)];
  if (r == 12)
    switch (e[0]) {
      case 2:
        e[0] = 4;
        break;
      case 4:
        e[0] = 16;
        break;
      case 0:
        e[0] = 1;
        break;
      case 1:
        e[0] = 2;
        break;
    }
  switch (e[0]) {
    case 4:
      (e[1] = Wp(t, 1) ? 'TRUE' : 'FALSE'), r != 12 && (t.l += 7);
      break;
    case 37:
    case 16:
      (e[1] = ti[t[t.l]]), (t.l += r == 12 ? 4 : 8);
      break;
    case 0:
      t.l += 8;
      break;
    case 1:
      e[1] = ma(t);
      break;
    case 2:
      e[1] = Yp(t, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error('Bad SerAr: ' + e[0]);
  }
  return e;
}
function Qm(t, r, e) {
  for (var n = t.read_shift(e.biff == 12 ? 4 : 2), a = [], i = 0; i != n; ++i)
    a.push((e.biff == 12 ? Vn : $p)(t));
  return a;
}
function ex(t, r, e) {
  var n = 0,
    a = 0;
  e.biff == 12
    ? ((n = t.read_shift(4)), (a = t.read_shift(4)))
    : ((a = 1 + t.read_shift(1)), (n = 1 + t.read_shift(2))),
    e.biff >= 2 && e.biff < 8 && (--n, --a == 0 && (a = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var o = 0; o != a; ++o) s[i][o] = Zm(t, e.biff);
  return s;
}
function tx(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3,
    a = !e || e.biff >= 8 ? 4 : 2,
    i = t.read_shift(a);
  switch (e.biff) {
    case 2:
      t.l += 5;
      break;
    case 3:
    case 4:
      t.l += 8;
      break;
    case 5:
      t.l += 12;
      break;
  }
  return [n, 0, i];
}
function rx(t, r, e) {
  if (e.biff == 5) return nx(t);
  var n = (t.read_shift(1) >>> 5) & 3,
    a = t.read_shift(2),
    i = t.read_shift(4);
  return [n, a, i];
}
function nx(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2, 'i');
  t.l += 8;
  var n = t.read_shift(2);
  return (t.l += 12), [r, e, n];
}
function ax(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3;
  t.l += e && e.biff == 2 ? 3 : 4;
  var a = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, a];
}
function ix(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3,
    a = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, a];
}
function sx(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3;
  return (t.l += 4), e.biff < 8 && t.l--, e.biff == 12 && (t.l += 2), [n];
}
function ox(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    a = t.read_shift(2),
    i = 4;
  if (e)
    switch (e.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return (t.l += i), [n, a];
}
var fx = Lr,
  lx = Lr,
  cx = Lr;
function ri(t, r, e) {
  return (t.l += 2), [ym(t)];
}
function b0(t) {
  return (t.l += 6), [];
}
var ux = ri,
  hx = b0,
  dx = b0,
  px = ri;
function Fc(t) {
  return (t.l += 2), [ic(t), t.read_shift(2) & 1];
}
var vx = ri,
  mx = Fc,
  xx = b0,
  gx = ri,
  _x = ri,
  wx = [
    'Data',
    'All',
    'Headers',
    '??',
    '?Data2',
    '??',
    '?DataHeaders',
    '??',
    'Totals',
    '??',
    '??',
    '??',
    '?DataTotals',
    '??',
    '??',
    '??',
    '?Current',
  ];
function Ex(t) {
  t.l += 2;
  var r = t.read_shift(2),
    e = t.read_shift(2),
    n = t.read_shift(4),
    a = t.read_shift(2),
    i = t.read_shift(2),
    s = wx[(e >> 2) & 31];
  return { ixti: r, coltype: e & 3, rt: s, idx: n, c: a, C: i };
}
function Tx(t) {
  return (t.l += 2), [t.read_shift(4)];
}
function yx(t, r, e) {
  return (t.l += 5), (t.l += 2), (t.l += e.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function Sx(t, r, e) {
  return (t.l += e.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function Ax(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2);
  return [r, e];
}
function Fx(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2);
  return [r, e];
}
function Cx(t) {
  return (t.l += 4), [0, 0];
}
var Qo = {
    1: { n: 'PtgExp', f: Xm },
    2: { n: 'PtgTbl', f: cx },
    3: { n: 'PtgAdd', f: xt },
    4: { n: 'PtgSub', f: xt },
    5: { n: 'PtgMul', f: xt },
    6: { n: 'PtgDiv', f: xt },
    7: { n: 'PtgPower', f: xt },
    8: { n: 'PtgConcat', f: xt },
    9: { n: 'PtgLt', f: xt },
    10: { n: 'PtgLe', f: xt },
    11: { n: 'PtgEq', f: xt },
    12: { n: 'PtgGe', f: xt },
    13: { n: 'PtgGt', f: xt },
    14: { n: 'PtgNe', f: xt },
    15: { n: 'PtgIsect', f: xt },
    16: { n: 'PtgUnion', f: xt },
    17: { n: 'PtgRange', f: xt },
    18: { n: 'PtgUplus', f: xt },
    19: { n: 'PtgUminus', f: xt },
    20: { n: 'PtgPercent', f: xt },
    21: { n: 'PtgParen', f: xt },
    22: { n: 'PtgMissArg', f: xt },
    23: { n: 'PtgStr', f: Jm },
    26: { n: 'PtgSheet', f: yx },
    27: { n: 'PtgEndSheet', f: Sx },
    28: { n: 'PtgErr', f: Km },
    29: { n: 'PtgBool', f: zm },
    30: { n: 'PtgInt', f: $m },
    31: { n: 'PtgNum', f: qm },
    32: { n: 'PtgArray', f: Rm },
    33: { n: 'PtgFunc', f: Vm },
    34: { n: 'PtgFuncVar', f: jm },
    35: { n: 'PtgName', f: tx },
    36: { n: 'PtgRef', f: Um },
    37: { n: 'PtgArea', f: Fm },
    38: { n: 'PtgMemArea', f: ax },
    39: { n: 'PtgMemErr', f: fx },
    40: { n: 'PtgMemNoMem', f: lx },
    41: { n: 'PtgMemFunc', f: ix },
    42: { n: 'PtgRefErr', f: sx },
    43: { n: 'PtgAreaErr', f: Dm },
    44: { n: 'PtgRefN', f: Hm },
    45: { n: 'PtgAreaN', f: Nm },
    46: { n: 'PtgMemAreaN', f: Ax },
    47: { n: 'PtgMemNoMemN', f: Fx },
    57: { n: 'PtgNameX', f: rx },
    58: { n: 'PtgRef3d', f: Wm },
    59: { n: 'PtgArea3d', f: Cm },
    60: { n: 'PtgRefErr3d', f: ox },
    61: { n: 'PtgAreaErr3d', f: Om },
    255: {},
  },
  Dx = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61,
  },
  Ox = {
    1: { n: 'PtgElfLel', f: Fc },
    2: { n: 'PtgElfRw', f: gx },
    3: { n: 'PtgElfCol', f: ux },
    6: { n: 'PtgElfRwV', f: _x },
    7: { n: 'PtgElfColV', f: px },
    10: { n: 'PtgElfRadical', f: vx },
    11: { n: 'PtgElfRadicalS', f: xx },
    13: { n: 'PtgElfColS', f: hx },
    15: { n: 'PtgElfColSV', f: dx },
    16: { n: 'PtgElfRadicalLel', f: mx },
    25: { n: 'PtgList', f: Ex },
    29: { n: 'PtgSxName', f: Tx },
    255: {},
  },
  Nx = {
    0: { n: 'PtgAttrNoop', f: Cx },
    1: { n: 'PtgAttrSemi', f: Mm },
    2: { n: 'PtgAttrIf', f: bm },
    4: { n: 'PtgAttrChoose', f: km },
    8: { n: 'PtgAttrGoto', f: Im },
    16: { n: 'PtgAttrSum', f: Ym },
    32: { n: 'PtgAttrBaxcel', f: Zo },
    33: { n: 'PtgAttrBaxcel', f: Zo },
    64: { n: 'PtgAttrSpace', f: Lm },
    65: { n: 'PtgAttrSpaceSemi', f: Bm },
    128: { n: 'PtgAttrIfError', f: Pm },
    255: {},
  };
function Rx(t, r, e, n) {
  if (n.biff < 8) return Lr(t, r);
  for (var a = t.l + r, i = [], s = 0; s !== e.length; ++s)
    switch (e[s][0]) {
      case 'PtgArray':
        (e[s][1] = ex(t, 0, n)), i.push(e[s][1]);
        break;
      case 'PtgMemArea':
        (e[s][2] = Qm(t, e[s][1], n)), i.push(e[s][2]);
        break;
      case 'PtgExp':
        n && n.biff == 12 && ((e[s][1][1] = t.read_shift(4)), i.push(e[s][1]));
        break;
      case 'PtgList':
      case 'PtgElfRadicalS':
      case 'PtgElfColS':
      case 'PtgElfColSV':
        throw 'Unsupported ' + e[s][0];
    }
  return (r = a - t.l), r !== 0 && i.push(Lr(t, r)), i;
}
function kx(t, r, e) {
  for (var n = t.l + r, a, i, s = []; n != t.l; )
    (r = n - t.l),
      (i = t[t.l]),
      (a = Qo[i] || Qo[Dx[i]]),
      (i === 24 || i === 25) && (a = (i === 24 ? Ox : Nx)[t[t.l + 1]]),
      !a || !a.f ? Lr(t, r) : s.push([a.n, a.f(t, r, e)]);
  return s;
}
function Ix(t) {
  for (var r = [], e = 0; e < t.length; ++e) {
    for (var n = t[e], a = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      if (s)
        switch (s[0]) {
          case 2:
            a.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            a.push(s[1]);
        }
      else a.push('');
    }
    r.push(a.join(','));
  }
  return r.join(';');
}
var bx = {
  PtgAdd: '+',
  PtgConcat: '&',
  PtgDiv: '/',
  PtgEq: '=',
  PtgGe: '>=',
  PtgGt: '>',
  PtgLe: '<=',
  PtgLt: '<',
  PtgMul: '*',
  PtgNe: '<>',
  PtgPower: '^',
  PtgSub: '-',
};
function Px(t, r) {
  if (!t && !(r && r.biff <= 5 && r.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(t) ? "'" + t + "'" : t;
}
function Cc(t, r, e) {
  if (!t) return 'SH33TJSERR0';
  if (e.biff > 8 && (!t.XTI || !t.XTI[r])) return t.SheetNames[r];
  if (!t.XTI) return 'SH33TJSERR6';
  var n = t.XTI[r];
  if (e.biff < 8)
    return (
      r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? '' : t.XTI[r - 1]
    );
  if (!n) return 'SH33TJSERR1';
  var a = '';
  if (e.biff > 8)
    switch (t[n[0]][0]) {
      case 357:
        return (
          (a = n[1] == -1 ? '#REF' : t.SheetNames[n[1]]),
          n[1] == n[2] ? a : a + ':' + t.SheetNames[n[2]]
        );
      case 358:
        return e.SID != null ? t.SheetNames[e.SID] : 'SH33TJSSAME' + t[n[0]][0];
      case 355:
      default:
        return 'SH33TJSSRC' + t[n[0]][0];
    }
  switch (t[n[0]][0][0]) {
    case 1025:
      return (
        (a = n[1] == -1 ? '#REF' : t.SheetNames[n[1]] || 'SH33TJSERR3'),
        n[1] == n[2] ? a : a + ':' + t.SheetNames[n[2]]
      );
    case 14849:
      return t[n[0]]
        .slice(1)
        .map(function (i) {
          return i.Name;
        })
        .join(';;');
    default:
      return t[n[0]][0][3]
        ? ((a = n[1] == -1 ? '#REF' : t[n[0]][0][3][n[1]] || 'SH33TJSERR4'),
          n[1] == n[2] ? a : a + ':' + t[n[0]][0][3][n[2]])
        : 'SH33TJSERR2';
  }
}
function ef(t, r, e) {
  var n = Cc(t, r, e);
  return n == '#REF' ? n : Px(n, e);
}
function oa(t, r, e, n, a) {
  var i = (a && a.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    o = [],
    l,
    f,
    c,
    d = 0,
    u = 0,
    p,
    v = '';
  if (!t[0] || !t[0][0]) return '';
  for (var h = -1, x = '', D = 0, C = t[0].length; D < C; ++D) {
    var F = t[0][D];
    switch (F[0]) {
      case 'PtgUminus':
        o.push('-' + o.pop());
        break;
      case 'PtgUplus':
        o.push('+' + o.pop());
        break;
      case 'PtgPercent':
        o.push(o.pop() + '%');
        break;
      case 'PtgAdd':
      case 'PtgConcat':
      case 'PtgDiv':
      case 'PtgEq':
      case 'PtgGe':
      case 'PtgGt':
      case 'PtgLe':
      case 'PtgLt':
      case 'PtgMul':
      case 'PtgNe':
      case 'PtgPower':
      case 'PtgSub':
        if (((l = o.pop()), (f = o.pop()), h >= 0)) {
          switch (t[0][h][1][0]) {
            case 0:
              x = ut(' ', t[0][h][1][1]);
              break;
            case 1:
              x = ut('\r', t[0][h][1][1]);
              break;
            default:
              if (((x = ''), a.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + t[0][h][1][0]);
          }
          (f = f + x), (h = -1);
        }
        o.push(f + bx[F[0]] + l);
        break;
      case 'PtgIsect':
        (l = o.pop()), (f = o.pop()), o.push(f + ' ' + l);
        break;
      case 'PtgUnion':
        (l = o.pop()), (f = o.pop()), o.push(f + ',' + l);
        break;
      case 'PtgRange':
        (l = o.pop()), (f = o.pop()), o.push(f + ':' + l);
        break;
      case 'PtgAttrChoose':
        break;
      case 'PtgAttrGoto':
        break;
      case 'PtgAttrIf':
        break;
      case 'PtgAttrIfError':
        break;
      case 'PtgRef':
        (c = Na(F[1][1], s, a)), o.push(Ra(c, i));
        break;
      case 'PtgRefN':
        (c = e ? Na(F[1][1], e, a) : F[1][1]), o.push(Ra(c, i));
        break;
      case 'PtgRef3d':
        (d = F[1][1]),
          (c = Na(F[1][2], s, a)),
          (v = ef(n, d, a)),
          o.push(v + '!' + Ra(c, i));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var k = F[1][0],
          j = F[1][1];
        k || (k = 0), (k &= 127);
        var te = k == 0 ? [] : o.slice(-k);
        (o.length -= k),
          j === 'User' && (j = te.shift()),
          o.push(j + '(' + te.join(',') + ')');
        break;
      case 'PtgBool':
        o.push(F[1] ? 'TRUE' : 'FALSE');
        break;
      case 'PtgInt':
        o.push(F[1]);
        break;
      case 'PtgNum':
        o.push(String(F[1]));
        break;
      case 'PtgStr':
        o.push('"' + F[1].replace(/"/g, '""') + '"');
        break;
      case 'PtgErr':
        o.push(F[1]);
        break;
      case 'PtgAreaN':
        (p = Bo(F[1][1], e ? { s: e } : s, a)), o.push(ys(p, a));
        break;
      case 'PtgArea':
        (p = Bo(F[1][1], s, a)), o.push(ys(p, a));
        break;
      case 'PtgArea3d':
        (d = F[1][1]),
          (p = F[1][2]),
          (v = ef(n, d, a)),
          o.push(v + '!' + ys(p, a));
        break;
      case 'PtgAttrSum':
        o.push('SUM(' + o.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = F[1][2];
        var R = (n.names || [])[u - 1] || (n[0] || [])[u],
          H = R ? R.Name : 'SH33TJSNAME' + String(u);
        H && H.slice(0, 6) == '_xlfn.' && !a.xlfn && (H = H.slice(6)),
          o.push(H);
        break;
      case 'PtgNameX':
        var L = F[1][1];
        u = F[1][2];
        var X;
        if (a.biff <= 5) L < 0 && (L = -L), n[L] && (X = n[L][u]);
        else {
          var K = '';
          if (
            (((n[L] || [])[0] || [])[0] == 14849 ||
              (((n[L] || [])[0] || [])[0] == 1025
                ? n[L][u] &&
                  n[L][u].itab > 0 &&
                  (K = n.SheetNames[n[L][u].itab - 1] + '!')
                : (K = n.SheetNames[u - 1] + '!')),
            n[L] && n[L][u])
          )
            K += n[L][u].Name;
          else if (n[0] && n[0][u]) K += n[0][u].Name;
          else {
            var J = (Cc(n, L, a) || '').split(';;');
            J[u - 1] ? (K = J[u - 1]) : (K += 'SH33TJSERRX');
          }
          o.push(K);
          break;
        }
        X || (X = { Name: 'SH33TJSERRY' }), o.push(X.Name);
        break;
      case 'PtgParen':
        var ie = '(',
          Pe = ')';
        if (h >= 0) {
          switch (((x = ''), t[0][h][1][0])) {
            case 2:
              ie = ut(' ', t[0][h][1][1]) + ie;
              break;
            case 3:
              ie = ut('\r', t[0][h][1][1]) + ie;
              break;
            case 4:
              Pe = ut(' ', t[0][h][1][1]) + Pe;
              break;
            case 5:
              Pe = ut('\r', t[0][h][1][1]) + Pe;
              break;
            default:
              if (a.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + t[0][h][1][0]);
          }
          h = -1;
        }
        o.push(ie + o.pop() + Pe);
        break;
      case 'PtgRefErr':
        o.push('#REF!');
        break;
      case 'PtgRefErr3d':
        o.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: F[1][1], r: F[1][0] };
        var Ce = { c: e.c, r: e.r };
        if (n.sharedf[$e(c)]) {
          var ot = n.sharedf[$e(c)];
          o.push(oa(ot, s, Ce, n, a));
        } else {
          var ze = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((f = n.arrayf[l]),
              !(c.c < f[0].s.c || c.c > f[0].e.c) &&
                !(c.r < f[0].s.r || c.r > f[0].e.r))
            ) {
              o.push(oa(f[1], s, Ce, n, a)), (ze = !0);
              break;
            }
          ze || o.push(F[1]);
        }
        break;
      case 'PtgArray':
        o.push('{' + Ix(F[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        h = D;
        break;
      case 'PtgTbl':
        break;
      case 'PtgMemErr':
        break;
      case 'PtgMissArg':
        o.push('');
        break;
      case 'PtgAreaErr':
        o.push('#REF!');
        break;
      case 'PtgAreaErr3d':
        o.push('#REF!');
        break;
      case 'PtgList':
        o.push('Table' + F[1].idx + '[#' + F[1].rt + ']');
        break;
      case 'PtgMemAreaN':
      case 'PtgMemNoMemN':
      case 'PtgAttrNoop':
      case 'PtgSheet':
      case 'PtgEndSheet':
        break;
      case 'PtgMemFunc':
        break;
      case 'PtgMemNoMem':
        break;
      case 'PtgElfCol':
      case 'PtgElfColS':
      case 'PtgElfColSV':
      case 'PtgElfColV':
      case 'PtgElfLel':
      case 'PtgElfRadical':
      case 'PtgElfRadicalLel':
      case 'PtgElfRadicalS':
      case 'PtgElfRw':
      case 'PtgElfRwV':
        throw new Error('Unsupported ELFs');
      case 'PtgSxName':
        throw new Error('Unrecognized Formula Token: ' + String(F));
      default:
        throw new Error('Unrecognized Formula Token: ' + String(F));
    }
    var pt = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (a.biff != 3 && h >= 0 && pt.indexOf(t[0][D][0]) == -1) {
      F = t[0][h];
      var qe = !0;
      switch (F[1][0]) {
        case 4:
          qe = !1;
        case 0:
          x = ut(' ', F[1][1]);
          break;
        case 5:
          qe = !1;
        case 1:
          x = ut('\r', F[1][1]);
          break;
        default:
          if (((x = ''), a.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0]);
      }
      o.push((qe ? x : '') + o.pop() + (qe ? '' : x)), (h = -1);
    }
  }
  if (o.length > 1 && a.WTF) throw new Error('bad formula stack');
  return o[0];
}
function Mx(t) {
  if (t == null) {
    var r = Y(8);
    return (
      r.write_shift(1, 3),
      r.write_shift(1, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 65535),
      r
    );
  } else if (typeof t == 'number') return bn(t);
  return bn(0);
}
function Lx(t, r, e, n, a) {
  var i = Pn(r, e, a),
    s = Mx(t.v),
    o = Y(6),
    l = 33;
  o.write_shift(2, l), o.write_shift(4, 0);
  for (var f = Y(t.bf.length), c = 0; c < t.bf.length; ++c) f[c] = t.bf[c];
  var d = Rt([i, s, o, f]);
  return d;
}
function us(t, r, e) {
  var n = t.read_shift(4),
    a = kx(t, n, e),
    i = t.read_shift(4),
    s = i > 0 ? Rx(t, i, a, e) : null;
  return [a, s];
}
var Bx = us,
  hs = us,
  Ux = us,
  Hx = us,
  Wx = {
    0: 'BEEP',
    1: 'OPEN',
    2: 'OPEN.LINKS',
    3: 'CLOSE.ALL',
    4: 'SAVE',
    5: 'SAVE.AS',
    6: 'FILE.DELETE',
    7: 'PAGE.SETUP',
    8: 'PRINT',
    9: 'PRINTER.SETUP',
    10: 'QUIT',
    11: 'NEW.WINDOW',
    12: 'ARRANGE.ALL',
    13: 'WINDOW.SIZE',
    14: 'WINDOW.MOVE',
    15: 'FULL',
    16: 'CLOSE',
    17: 'RUN',
    22: 'SET.PRINT.AREA',
    23: 'SET.PRINT.TITLES',
    24: 'SET.PAGE.BREAK',
    25: 'REMOVE.PAGE.BREAK',
    26: 'FONT',
    27: 'DISPLAY',
    28: 'PROTECT.DOCUMENT',
    29: 'PRECISION',
    30: 'A1.R1C1',
    31: 'CALCULATE.NOW',
    32: 'CALCULATION',
    34: 'DATA.FIND',
    35: 'EXTRACT',
    36: 'DATA.DELETE',
    37: 'SET.DATABASE',
    38: 'SET.CRITERIA',
    39: 'SORT',
    40: 'DATA.SERIES',
    41: 'TABLE',
    42: 'FORMAT.NUMBER',
    43: 'ALIGNMENT',
    44: 'STYLE',
    45: 'BORDER',
    46: 'CELL.PROTECTION',
    47: 'COLUMN.WIDTH',
    48: 'UNDO',
    49: 'CUT',
    50: 'COPY',
    51: 'PASTE',
    52: 'CLEAR',
    53: 'PASTE.SPECIAL',
    54: 'EDIT.DELETE',
    55: 'INSERT',
    56: 'FILL.RIGHT',
    57: 'FILL.DOWN',
    61: 'DEFINE.NAME',
    62: 'CREATE.NAMES',
    63: 'FORMULA.GOTO',
    64: 'FORMULA.FIND',
    65: 'SELECT.LAST.CELL',
    66: 'SHOW.ACTIVE.CELL',
    67: 'GALLERY.AREA',
    68: 'GALLERY.BAR',
    69: 'GALLERY.COLUMN',
    70: 'GALLERY.LINE',
    71: 'GALLERY.PIE',
    72: 'GALLERY.SCATTER',
    73: 'COMBINATION',
    74: 'PREFERRED',
    75: 'ADD.OVERLAY',
    76: 'GRIDLINES',
    77: 'SET.PREFERRED',
    78: 'AXES',
    79: 'LEGEND',
    80: 'ATTACH.TEXT',
    81: 'ADD.ARROW',
    82: 'SELECT.CHART',
    83: 'SELECT.PLOT.AREA',
    84: 'PATTERNS',
    85: 'MAIN.CHART',
    86: 'OVERLAY',
    87: 'SCALE',
    88: 'FORMAT.LEGEND',
    89: 'FORMAT.TEXT',
    90: 'EDIT.REPEAT',
    91: 'PARSE',
    92: 'JUSTIFY',
    93: 'HIDE',
    94: 'UNHIDE',
    95: 'WORKSPACE',
    96: 'FORMULA',
    97: 'FORMULA.FILL',
    98: 'FORMULA.ARRAY',
    99: 'DATA.FIND.NEXT',
    100: 'DATA.FIND.PREV',
    101: 'FORMULA.FIND.NEXT',
    102: 'FORMULA.FIND.PREV',
    103: 'ACTIVATE',
    104: 'ACTIVATE.NEXT',
    105: 'ACTIVATE.PREV',
    106: 'UNLOCKED.NEXT',
    107: 'UNLOCKED.PREV',
    108: 'COPY.PICTURE',
    109: 'SELECT',
    110: 'DELETE.NAME',
    111: 'DELETE.FORMAT',
    112: 'VLINE',
    113: 'HLINE',
    114: 'VPAGE',
    115: 'HPAGE',
    116: 'VSCROLL',
    117: 'HSCROLL',
    118: 'ALERT',
    119: 'NEW',
    120: 'CANCEL.COPY',
    121: 'SHOW.CLIPBOARD',
    122: 'MESSAGE',
    124: 'PASTE.LINK',
    125: 'APP.ACTIVATE',
    126: 'DELETE.ARROW',
    127: 'ROW.HEIGHT',
    128: 'FORMAT.MOVE',
    129: 'FORMAT.SIZE',
    130: 'FORMULA.REPLACE',
    131: 'SEND.KEYS',
    132: 'SELECT.SPECIAL',
    133: 'APPLY.NAMES',
    134: 'REPLACE.FONT',
    135: 'FREEZE.PANES',
    136: 'SHOW.INFO',
    137: 'SPLIT',
    138: 'ON.WINDOW',
    139: 'ON.DATA',
    140: 'DISABLE.INPUT',
    142: 'OUTLINE',
    143: 'LIST.NAMES',
    144: 'FILE.CLOSE',
    145: 'SAVE.WORKBOOK',
    146: 'DATA.FORM',
    147: 'COPY.CHART',
    148: 'ON.TIME',
    149: 'WAIT',
    150: 'FORMAT.FONT',
    151: 'FILL.UP',
    152: 'FILL.LEFT',
    153: 'DELETE.OVERLAY',
    155: 'SHORT.MENUS',
    159: 'SET.UPDATE.STATUS',
    161: 'COLOR.PALETTE',
    162: 'DELETE.STYLE',
    163: 'WINDOW.RESTORE',
    164: 'WINDOW.MAXIMIZE',
    166: 'CHANGE.LINK',
    167: 'CALCULATE.DOCUMENT',
    168: 'ON.KEY',
    169: 'APP.RESTORE',
    170: 'APP.MOVE',
    171: 'APP.SIZE',
    172: 'APP.MINIMIZE',
    173: 'APP.MAXIMIZE',
    174: 'BRING.TO.FRONT',
    175: 'SEND.TO.BACK',
    185: 'MAIN.CHART.TYPE',
    186: 'OVERLAY.CHART.TYPE',
    187: 'SELECT.END',
    188: 'OPEN.MAIL',
    189: 'SEND.MAIL',
    190: 'STANDARD.FONT',
    191: 'CONSOLIDATE',
    192: 'SORT.SPECIAL',
    193: 'GALLERY.3D.AREA',
    194: 'GALLERY.3D.COLUMN',
    195: 'GALLERY.3D.LINE',
    196: 'GALLERY.3D.PIE',
    197: 'VIEW.3D',
    198: 'GOAL.SEEK',
    199: 'WORKGROUP',
    200: 'FILL.GROUP',
    201: 'UPDATE.LINK',
    202: 'PROMOTE',
    203: 'DEMOTE',
    204: 'SHOW.DETAIL',
    206: 'UNGROUP',
    207: 'OBJECT.PROPERTIES',
    208: 'SAVE.NEW.OBJECT',
    209: 'SHARE',
    210: 'SHARE.NAME',
    211: 'DUPLICATE',
    212: 'APPLY.STYLE',
    213: 'ASSIGN.TO.OBJECT',
    214: 'OBJECT.PROTECTION',
    215: 'HIDE.OBJECT',
    216: 'SET.EXTRACT',
    217: 'CREATE.PUBLISHER',
    218: 'SUBSCRIBE.TO',
    219: 'ATTRIBUTES',
    220: 'SHOW.TOOLBAR',
    222: 'PRINT.PREVIEW',
    223: 'EDIT.COLOR',
    224: 'SHOW.LEVELS',
    225: 'FORMAT.MAIN',
    226: 'FORMAT.OVERLAY',
    227: 'ON.RECALC',
    228: 'EDIT.SERIES',
    229: 'DEFINE.STYLE',
    240: 'LINE.PRINT',
    243: 'ENTER.DATA',
    249: 'GALLERY.RADAR',
    250: 'MERGE.STYLES',
    251: 'EDITION.OPTIONS',
    252: 'PASTE.PICTURE',
    253: 'PASTE.PICTURE.LINK',
    254: 'SPELLING',
    256: 'ZOOM',
    259: 'INSERT.OBJECT',
    260: 'WINDOW.MINIMIZE',
    265: 'SOUND.NOTE',
    266: 'SOUND.PLAY',
    267: 'FORMAT.SHAPE',
    268: 'EXTEND.POLYGON',
    269: 'FORMAT.AUTO',
    272: 'GALLERY.3D.BAR',
    273: 'GALLERY.3D.SURFACE',
    274: 'FILL.AUTO',
    276: 'CUSTOMIZE.TOOLBAR',
    277: 'ADD.TOOL',
    278: 'EDIT.OBJECT',
    279: 'ON.DOUBLECLICK',
    280: 'ON.ENTRY',
    281: 'WORKBOOK.ADD',
    282: 'WORKBOOK.MOVE',
    283: 'WORKBOOK.COPY',
    284: 'WORKBOOK.OPTIONS',
    285: 'SAVE.WORKSPACE',
    288: 'CHART.WIZARD',
    289: 'DELETE.TOOL',
    290: 'MOVE.TOOL',
    291: 'WORKBOOK.SELECT',
    292: 'WORKBOOK.ACTIVATE',
    293: 'ASSIGN.TO.TOOL',
    295: 'COPY.TOOL',
    296: 'RESET.TOOL',
    297: 'CONSTRAIN.NUMERIC',
    298: 'PASTE.TOOL',
    302: 'WORKBOOK.NEW',
    305: 'SCENARIO.CELLS',
    306: 'SCENARIO.DELETE',
    307: 'SCENARIO.ADD',
    308: 'SCENARIO.EDIT',
    309: 'SCENARIO.SHOW',
    310: 'SCENARIO.SHOW.NEXT',
    311: 'SCENARIO.SUMMARY',
    312: 'PIVOT.TABLE.WIZARD',
    313: 'PIVOT.FIELD.PROPERTIES',
    314: 'PIVOT.FIELD',
    315: 'PIVOT.ITEM',
    316: 'PIVOT.ADD.FIELDS',
    318: 'OPTIONS.CALCULATION',
    319: 'OPTIONS.EDIT',
    320: 'OPTIONS.VIEW',
    321: 'ADDIN.MANAGER',
    322: 'MENU.EDITOR',
    323: 'ATTACH.TOOLBARS',
    324: 'VBAActivate',
    325: 'OPTIONS.CHART',
    328: 'VBA.INSERT.FILE',
    330: 'VBA.PROCEDURE.DEFINITION',
    336: 'ROUTING.SLIP',
    338: 'ROUTE.DOCUMENT',
    339: 'MAIL.LOGON',
    342: 'INSERT.PICTURE',
    343: 'EDIT.TOOL',
    344: 'GALLERY.DOUGHNUT',
    350: 'CHART.TREND',
    352: 'PIVOT.ITEM.PROPERTIES',
    354: 'WORKBOOK.INSERT',
    355: 'OPTIONS.TRANSITION',
    356: 'OPTIONS.GENERAL',
    370: 'FILTER.ADVANCED',
    373: 'MAIL.ADD.MAILER',
    374: 'MAIL.DELETE.MAILER',
    375: 'MAIL.REPLY',
    376: 'MAIL.REPLY.ALL',
    377: 'MAIL.FORWARD',
    378: 'MAIL.NEXT.LETTER',
    379: 'DATA.LABEL',
    380: 'INSERT.TITLE',
    381: 'FONT.PROPERTIES',
    382: 'MACRO.OPTIONS',
    383: 'WORKBOOK.HIDE',
    384: 'WORKBOOK.UNHIDE',
    385: 'WORKBOOK.DELETE',
    386: 'WORKBOOK.NAME',
    388: 'GALLERY.CUSTOM',
    390: 'ADD.CHART.AUTOFORMAT',
    391: 'DELETE.CHART.AUTOFORMAT',
    392: 'CHART.ADD.DATA',
    393: 'AUTO.OUTLINE',
    394: 'TAB.ORDER',
    395: 'SHOW.DIALOG',
    396: 'SELECT.ALL',
    397: 'UNGROUP.SHEETS',
    398: 'SUBTOTAL.CREATE',
    399: 'SUBTOTAL.REMOVE',
    400: 'RENAME.OBJECT',
    412: 'WORKBOOK.SCROLL',
    413: 'WORKBOOK.NEXT',
    414: 'WORKBOOK.PREV',
    415: 'WORKBOOK.TAB.SPLIT',
    416: 'FULL.SCREEN',
    417: 'WORKBOOK.PROTECT',
    420: 'SCROLLBAR.PROPERTIES',
    421: 'PIVOT.SHOW.PAGES',
    422: 'TEXT.TO.COLUMNS',
    423: 'FORMAT.CHARTTYPE',
    424: 'LINK.FORMAT',
    425: 'TRACER.DISPLAY',
    430: 'TRACER.NAVIGATE',
    431: 'TRACER.CLEAR',
    432: 'TRACER.ERROR',
    433: 'PIVOT.FIELD.GROUP',
    434: 'PIVOT.FIELD.UNGROUP',
    435: 'CHECKBOX.PROPERTIES',
    436: 'LABEL.PROPERTIES',
    437: 'LISTBOX.PROPERTIES',
    438: 'EDITBOX.PROPERTIES',
    439: 'PIVOT.REFRESH',
    440: 'LINK.COMBO',
    441: 'OPEN.TEXT',
    442: 'HIDE.DIALOG',
    443: 'SET.DIALOG.FOCUS',
    444: 'ENABLE.OBJECT',
    445: 'PUSHBUTTON.PROPERTIES',
    446: 'SET.DIALOG.DEFAULT',
    447: 'FILTER',
    448: 'FILTER.SHOW.ALL',
    449: 'CLEAR.OUTLINE',
    450: 'FUNCTION.WIZARD',
    451: 'ADD.LIST.ITEM',
    452: 'SET.LIST.ITEM',
    453: 'REMOVE.LIST.ITEM',
    454: 'SELECT.LIST.ITEM',
    455: 'SET.CONTROL.VALUE',
    456: 'SAVE.COPY.AS',
    458: 'OPTIONS.LISTS.ADD',
    459: 'OPTIONS.LISTS.DELETE',
    460: 'SERIES.AXES',
    461: 'SERIES.X',
    462: 'SERIES.Y',
    463: 'ERRORBAR.X',
    464: 'ERRORBAR.Y',
    465: 'FORMAT.CHART',
    466: 'SERIES.ORDER',
    467: 'MAIL.LOGOFF',
    468: 'CLEAR.ROUTING.SLIP',
    469: 'APP.ACTIVATE.MICROSOFT',
    470: 'MAIL.EDIT.MAILER',
    471: 'ON.SHEET',
    472: 'STANDARD.WIDTH',
    473: 'SCENARIO.MERGE',
    474: 'SUMMARY.INFO',
    475: 'FIND.FILE',
    476: 'ACTIVE.CELL.FONT',
    477: 'ENABLE.TIPWIZARD',
    478: 'VBA.MAKE.ADDIN',
    480: 'INSERTDATATABLE',
    481: 'WORKGROUP.OPTIONS',
    482: 'MAIL.SEND.MAILER',
    485: 'AUTOCORRECT',
    489: 'POST.DOCUMENT',
    491: 'PICKLIST',
    493: 'VIEW.SHOW',
    494: 'VIEW.DEFINE',
    495: 'VIEW.DELETE',
    509: 'SHEET.BACKGROUND',
    510: 'INSERT.MAP.OBJECT',
    511: 'OPTIONS.MENONO',
    517: 'MSOCHECKS',
    518: 'NORMAL',
    519: 'LAYOUT',
    520: 'RM.PRINT.AREA',
    521: 'CLEAR.PRINT.AREA',
    522: 'ADD.PRINT.AREA',
    523: 'MOVE.BRK',
    545: 'HIDECURR.NOTE',
    546: 'HIDEALL.NOTES',
    547: 'DELETE.NOTE',
    548: 'TRAVERSE.NOTES',
    549: 'ACTIVATE.NOTES',
    620: 'PROTECT.REVISIONS',
    621: 'UNPROTECT.REVISIONS',
    647: 'OPTIONS.ME',
    653: 'WEB.PUBLISH',
    667: 'NEWWEBQUERY',
    673: 'PIVOT.TABLE.CHART',
    753: 'OPTIONS.SAVE',
    755: 'OPTIONS.SPELL',
    808: 'HIDEALL.INKANNOTS',
  },
  Dc = {
    0: 'COUNT',
    1: 'IF',
    2: 'ISNA',
    3: 'ISERROR',
    4: 'SUM',
    5: 'AVERAGE',
    6: 'MIN',
    7: 'MAX',
    8: 'ROW',
    9: 'COLUMN',
    10: 'NA',
    11: 'NPV',
    12: 'STDEV',
    13: 'DOLLAR',
    14: 'FIXED',
    15: 'SIN',
    16: 'COS',
    17: 'TAN',
    18: 'ATAN',
    19: 'PI',
    20: 'SQRT',
    21: 'EXP',
    22: 'LN',
    23: 'LOG10',
    24: 'ABS',
    25: 'INT',
    26: 'SIGN',
    27: 'ROUND',
    28: 'LOOKUP',
    29: 'INDEX',
    30: 'REPT',
    31: 'MID',
    32: 'LEN',
    33: 'VALUE',
    34: 'TRUE',
    35: 'FALSE',
    36: 'AND',
    37: 'OR',
    38: 'NOT',
    39: 'MOD',
    40: 'DCOUNT',
    41: 'DSUM',
    42: 'DAVERAGE',
    43: 'DMIN',
    44: 'DMAX',
    45: 'DSTDEV',
    46: 'VAR',
    47: 'DVAR',
    48: 'TEXT',
    49: 'LINEST',
    50: 'TREND',
    51: 'LOGEST',
    52: 'GROWTH',
    53: 'GOTO',
    54: 'HALT',
    55: 'RETURN',
    56: 'PV',
    57: 'FV',
    58: 'NPER',
    59: 'PMT',
    60: 'RATE',
    61: 'MIRR',
    62: 'IRR',
    63: 'RAND',
    64: 'MATCH',
    65: 'DATE',
    66: 'TIME',
    67: 'DAY',
    68: 'MONTH',
    69: 'YEAR',
    70: 'WEEKDAY',
    71: 'HOUR',
    72: 'MINUTE',
    73: 'SECOND',
    74: 'NOW',
    75: 'AREAS',
    76: 'ROWS',
    77: 'COLUMNS',
    78: 'OFFSET',
    79: 'ABSREF',
    80: 'RELREF',
    81: 'ARGUMENT',
    82: 'SEARCH',
    83: 'TRANSPOSE',
    84: 'ERROR',
    85: 'STEP',
    86: 'TYPE',
    87: 'ECHO',
    88: 'SET.NAME',
    89: 'CALLER',
    90: 'DEREF',
    91: 'WINDOWS',
    92: 'SERIES',
    93: 'DOCUMENTS',
    94: 'ACTIVE.CELL',
    95: 'SELECTION',
    96: 'RESULT',
    97: 'ATAN2',
    98: 'ASIN',
    99: 'ACOS',
    100: 'CHOOSE',
    101: 'HLOOKUP',
    102: 'VLOOKUP',
    103: 'LINKS',
    104: 'INPUT',
    105: 'ISREF',
    106: 'GET.FORMULA',
    107: 'GET.NAME',
    108: 'SET.VALUE',
    109: 'LOG',
    110: 'EXEC',
    111: 'CHAR',
    112: 'LOWER',
    113: 'UPPER',
    114: 'PROPER',
    115: 'LEFT',
    116: 'RIGHT',
    117: 'EXACT',
    118: 'TRIM',
    119: 'REPLACE',
    120: 'SUBSTITUTE',
    121: 'CODE',
    122: 'NAMES',
    123: 'DIRECTORY',
    124: 'FIND',
    125: 'CELL',
    126: 'ISERR',
    127: 'ISTEXT',
    128: 'ISNUMBER',
    129: 'ISBLANK',
    130: 'T',
    131: 'N',
    132: 'FOPEN',
    133: 'FCLOSE',
    134: 'FSIZE',
    135: 'FREADLN',
    136: 'FREAD',
    137: 'FWRITELN',
    138: 'FWRITE',
    139: 'FPOS',
    140: 'DATEVALUE',
    141: 'TIMEVALUE',
    142: 'SLN',
    143: 'SYD',
    144: 'DDB',
    145: 'GET.DEF',
    146: 'REFTEXT',
    147: 'TEXTREF',
    148: 'INDIRECT',
    149: 'REGISTER',
    150: 'CALL',
    151: 'ADD.BAR',
    152: 'ADD.MENU',
    153: 'ADD.COMMAND',
    154: 'ENABLE.COMMAND',
    155: 'CHECK.COMMAND',
    156: 'RENAME.COMMAND',
    157: 'SHOW.BAR',
    158: 'DELETE.MENU',
    159: 'DELETE.COMMAND',
    160: 'GET.CHART.ITEM',
    161: 'DIALOG.BOX',
    162: 'CLEAN',
    163: 'MDETERM',
    164: 'MINVERSE',
    165: 'MMULT',
    166: 'FILES',
    167: 'IPMT',
    168: 'PPMT',
    169: 'COUNTA',
    170: 'CANCEL.KEY',
    171: 'FOR',
    172: 'WHILE',
    173: 'BREAK',
    174: 'NEXT',
    175: 'INITIATE',
    176: 'REQUEST',
    177: 'POKE',
    178: 'EXECUTE',
    179: 'TERMINATE',
    180: 'RESTART',
    181: 'HELP',
    182: 'GET.BAR',
    183: 'PRODUCT',
    184: 'FACT',
    185: 'GET.CELL',
    186: 'GET.WORKSPACE',
    187: 'GET.WINDOW',
    188: 'GET.DOCUMENT',
    189: 'DPRODUCT',
    190: 'ISNONTEXT',
    191: 'GET.NOTE',
    192: 'NOTE',
    193: 'STDEVP',
    194: 'VARP',
    195: 'DSTDEVP',
    196: 'DVARP',
    197: 'TRUNC',
    198: 'ISLOGICAL',
    199: 'DCOUNTA',
    200: 'DELETE.BAR',
    201: 'UNREGISTER',
    204: 'USDOLLAR',
    205: 'FINDB',
    206: 'SEARCHB',
    207: 'REPLACEB',
    208: 'LEFTB',
    209: 'RIGHTB',
    210: 'MIDB',
    211: 'LENB',
    212: 'ROUNDUP',
    213: 'ROUNDDOWN',
    214: 'ASC',
    215: 'DBCS',
    216: 'RANK',
    219: 'ADDRESS',
    220: 'DAYS360',
    221: 'TODAY',
    222: 'VDB',
    223: 'ELSE',
    224: 'ELSE.IF',
    225: 'END.IF',
    226: 'FOR.CELL',
    227: 'MEDIAN',
    228: 'SUMPRODUCT',
    229: 'SINH',
    230: 'COSH',
    231: 'TANH',
    232: 'ASINH',
    233: 'ACOSH',
    234: 'ATANH',
    235: 'DGET',
    236: 'CREATE.OBJECT',
    237: 'VOLATILE',
    238: 'LAST.ERROR',
    239: 'CUSTOM.UNDO',
    240: 'CUSTOM.REPEAT',
    241: 'FORMULA.CONVERT',
    242: 'GET.LINK.INFO',
    243: 'TEXT.BOX',
    244: 'INFO',
    245: 'GROUP',
    246: 'GET.OBJECT',
    247: 'DB',
    248: 'PAUSE',
    251: 'RESUME',
    252: 'FREQUENCY',
    253: 'ADD.TOOLBAR',
    254: 'DELETE.TOOLBAR',
    255: 'User',
    256: 'RESET.TOOLBAR',
    257: 'EVALUATE',
    258: 'GET.TOOLBAR',
    259: 'GET.TOOL',
    260: 'SPELLING.CHECK',
    261: 'ERROR.TYPE',
    262: 'APP.TITLE',
    263: 'WINDOW.TITLE',
    264: 'SAVE.TOOLBAR',
    265: 'ENABLE.TOOL',
    266: 'PRESS.TOOL',
    267: 'REGISTER.ID',
    268: 'GET.WORKBOOK',
    269: 'AVEDEV',
    270: 'BETADIST',
    271: 'GAMMALN',
    272: 'BETAINV',
    273: 'BINOMDIST',
    274: 'CHIDIST',
    275: 'CHIINV',
    276: 'COMBIN',
    277: 'CONFIDENCE',
    278: 'CRITBINOM',
    279: 'EVEN',
    280: 'EXPONDIST',
    281: 'FDIST',
    282: 'FINV',
    283: 'FISHER',
    284: 'FISHERINV',
    285: 'FLOOR',
    286: 'GAMMADIST',
    287: 'GAMMAINV',
    288: 'CEILING',
    289: 'HYPGEOMDIST',
    290: 'LOGNORMDIST',
    291: 'LOGINV',
    292: 'NEGBINOMDIST',
    293: 'NORMDIST',
    294: 'NORMSDIST',
    295: 'NORMINV',
    296: 'NORMSINV',
    297: 'STANDARDIZE',
    298: 'ODD',
    299: 'PERMUT',
    300: 'POISSON',
    301: 'TDIST',
    302: 'WEIBULL',
    303: 'SUMXMY2',
    304: 'SUMX2MY2',
    305: 'SUMX2PY2',
    306: 'CHITEST',
    307: 'CORREL',
    308: 'COVAR',
    309: 'FORECAST',
    310: 'FTEST',
    311: 'INTERCEPT',
    312: 'PEARSON',
    313: 'RSQ',
    314: 'STEYX',
    315: 'SLOPE',
    316: 'TTEST',
    317: 'PROB',
    318: 'DEVSQ',
    319: 'GEOMEAN',
    320: 'HARMEAN',
    321: 'SUMSQ',
    322: 'KURT',
    323: 'SKEW',
    324: 'ZTEST',
    325: 'LARGE',
    326: 'SMALL',
    327: 'QUARTILE',
    328: 'PERCENTILE',
    329: 'PERCENTRANK',
    330: 'MODE',
    331: 'TRIMMEAN',
    332: 'TINV',
    334: 'MOVIE.COMMAND',
    335: 'GET.MOVIE',
    336: 'CONCATENATE',
    337: 'POWER',
    338: 'PIVOT.ADD.DATA',
    339: 'GET.PIVOT.TABLE',
    340: 'GET.PIVOT.FIELD',
    341: 'GET.PIVOT.ITEM',
    342: 'RADIANS',
    343: 'DEGREES',
    344: 'SUBTOTAL',
    345: 'SUMIF',
    346: 'COUNTIF',
    347: 'COUNTBLANK',
    348: 'SCENARIO.GET',
    349: 'OPTIONS.LISTS.GET',
    350: 'ISPMT',
    351: 'DATEDIF',
    352: 'DATESTRING',
    353: 'NUMBERSTRING',
    354: 'ROMAN',
    355: 'OPEN.DIALOG',
    356: 'SAVE.DIALOG',
    357: 'VIEW.GET',
    358: 'GETPIVOTDATA',
    359: 'HYPERLINK',
    360: 'PHONETIC',
    361: 'AVERAGEA',
    362: 'MAXA',
    363: 'MINA',
    364: 'STDEVPA',
    365: 'VARPA',
    366: 'STDEVA',
    367: 'VARA',
    368: 'BAHTTEXT',
    369: 'THAIDAYOFWEEK',
    370: 'THAIDIGIT',
    371: 'THAIMONTHOFYEAR',
    372: 'THAINUMSOUND',
    373: 'THAINUMSTRING',
    374: 'THAISTRINGLENGTH',
    375: 'ISTHAIDIGIT',
    376: 'ROUNDBAHTDOWN',
    377: 'ROUNDBAHTUP',
    378: 'THAIYEAR',
    379: 'RTD',
    380: 'CUBEVALUE',
    381: 'CUBEMEMBER',
    382: 'CUBEMEMBERPROPERTY',
    383: 'CUBERANKEDMEMBER',
    384: 'HEX2BIN',
    385: 'HEX2DEC',
    386: 'HEX2OCT',
    387: 'DEC2BIN',
    388: 'DEC2HEX',
    389: 'DEC2OCT',
    390: 'OCT2BIN',
    391: 'OCT2HEX',
    392: 'OCT2DEC',
    393: 'BIN2DEC',
    394: 'BIN2OCT',
    395: 'BIN2HEX',
    396: 'IMSUB',
    397: 'IMDIV',
    398: 'IMPOWER',
    399: 'IMABS',
    400: 'IMSQRT',
    401: 'IMLN',
    402: 'IMLOG2',
    403: 'IMLOG10',
    404: 'IMSIN',
    405: 'IMCOS',
    406: 'IMEXP',
    407: 'IMARGUMENT',
    408: 'IMCONJUGATE',
    409: 'IMAGINARY',
    410: 'IMREAL',
    411: 'COMPLEX',
    412: 'IMSUM',
    413: 'IMPRODUCT',
    414: 'SERIESSUM',
    415: 'FACTDOUBLE',
    416: 'SQRTPI',
    417: 'QUOTIENT',
    418: 'DELTA',
    419: 'GESTEP',
    420: 'ISEVEN',
    421: 'ISODD',
    422: 'MROUND',
    423: 'ERF',
    424: 'ERFC',
    425: 'BESSELJ',
    426: 'BESSELK',
    427: 'BESSELY',
    428: 'BESSELI',
    429: 'XIRR',
    430: 'XNPV',
    431: 'PRICEMAT',
    432: 'YIELDMAT',
    433: 'INTRATE',
    434: 'RECEIVED',
    435: 'DISC',
    436: 'PRICEDISC',
    437: 'YIELDDISC',
    438: 'TBILLEQ',
    439: 'TBILLPRICE',
    440: 'TBILLYIELD',
    441: 'PRICE',
    442: 'YIELD',
    443: 'DOLLARDE',
    444: 'DOLLARFR',
    445: 'NOMINAL',
    446: 'EFFECT',
    447: 'CUMPRINC',
    448: 'CUMIPMT',
    449: 'EDATE',
    450: 'EOMONTH',
    451: 'YEARFRAC',
    452: 'COUPDAYBS',
    453: 'COUPDAYS',
    454: 'COUPDAYSNC',
    455: 'COUPNCD',
    456: 'COUPNUM',
    457: 'COUPPCD',
    458: 'DURATION',
    459: 'MDURATION',
    460: 'ODDLPRICE',
    461: 'ODDLYIELD',
    462: 'ODDFPRICE',
    463: 'ODDFYIELD',
    464: 'RANDBETWEEN',
    465: 'WEEKNUM',
    466: 'AMORDEGRC',
    467: 'AMORLINC',
    468: 'CONVERT',
    724: 'SHEETJS',
    469: 'ACCRINT',
    470: 'ACCRINTM',
    471: 'WORKDAY',
    472: 'NETWORKDAYS',
    473: 'GCD',
    474: 'MULTINOMIAL',
    475: 'LCM',
    476: 'FVSCHEDULE',
    477: 'CUBEKPIMEMBER',
    478: 'CUBESET',
    479: 'CUBESETCOUNT',
    480: 'IFERROR',
    481: 'COUNTIFS',
    482: 'SUMIFS',
    483: 'AVERAGEIF',
    484: 'AVERAGEIFS',
  },
  Vx = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0,
  };
function jx(t) {
  var r = 'of:=' + t.replace(k0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return r.replace(/;/g, '|').replace(/,/g, ';');
}
function Gx(t) {
  return t.replace(/\./, '!');
}
var ka = typeof Map < 'u';
function P0(t, r, e) {
  var n = 0,
    a = t.length;
  if (e) {
    if (ka ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r)) {
      for (var i = ka ? e.get(r) : e[r]; n < i.length; ++n)
        if (t[i[n]].t === r) return t.Count++, i[n];
    }
  } else for (; n < a; ++n) if (t[n].t === r) return t.Count++, n;
  return (
    (t[a] = { t: r }),
    t.Count++,
    t.Unique++,
    e &&
      (ka
        ? (e.has(r) || e.set(r, []), e.get(r).push(a))
        : (Object.prototype.hasOwnProperty.call(e, r) || (e[r] = []),
          e[r].push(a))),
    a
  );
}
function ds(t, r) {
  var e = { min: t + 1, max: t + 1 },
    n = -1;
  return (
    r.MDW && ($r = r.MDW),
    r.width != null
      ? (e.customWidth = 1)
      : r.wpx != null
        ? (n = ji(r.wpx))
        : r.wch != null && (n = r.wch),
    n > -1
      ? ((e.width = qs(n)), (e.customWidth = 1))
      : r.width != null && (e.width = r.width),
    r.hidden && (e.hidden = !0),
    r.level != null && (e.outlineLevel = e.level = r.level),
    e
  );
}
function Oc(t, r) {
  if (t) {
    var e = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t.left == null && (t.left = e[0]),
      t.right == null && (t.right = e[1]),
      t.top == null && (t.top = e[2]),
      t.bottom == null && (t.bottom = e[3]),
      t.header == null && (t.header = e[4]),
      t.footer == null && (t.footer = e[5]);
  }
}
function xn(t, r, e) {
  var n = e.revssf[r.z != null ? r.z : 'General'],
    a = 60,
    i = t.length;
  if (n == null && e.ssf) {
    for (; a < 392; ++a)
      if (e.ssf[a] == null) {
        Sl(r.z, a), (e.ssf[a] = r.z), (e.revssf[r.z] = n = a);
        break;
      }
  }
  for (a = 0; a != i; ++a) if (t[a].numFmtId === n) return a;
  return (
    (t[i] = {
      numFmtId: n,
      fontId: 0,
      fillId: 0,
      borderId: 0,
      xfId: 0,
      applyNumberFormat: 1,
    }),
    i
  );
}
function Yx(t, r, e) {
  if (t && t['!ref']) {
    var n = st(t['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + e + '): ' + t['!ref']);
  }
}
function Xx(t) {
  if (t.length === 0) return '';
  for (
    var r = '<mergeCells count="' + t.length + '">', e = 0;
    e != t.length;
    ++e
  )
    r += '<mergeCell ref="' + _t(t[e]) + '"/>';
  return r + '</mergeCells>';
}
function Kx(t, r, e, n, a) {
  var i = !1,
    s = {},
    o = null;
  if (n.bookType !== 'xlsx' && r.vbaraw) {
    var l = r.SheetNames[e];
    try {
      r.Workbook && (l = r.Workbook.Sheets[e].CodeName || l);
    } catch {}
    (i = !0), (s.codeName = Va(Ke(l)));
  }
  if (t && t['!outline']) {
    var f = { summaryBelow: 1, summaryRight: 1 };
    t['!outline'].above && (f.summaryBelow = 0),
      t['!outline'].left && (f.summaryRight = 0),
      (o = (o || '') + se('outlinePr', null, f));
  }
  (!i && !o) || (a[a.length] = se('sheetPr', o, s));
}
var $x = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  zx = [
    'formatColumns',
    'formatRows',
    'formatCells',
    'insertColumns',
    'insertRows',
    'insertHyperlinks',
    'deleteColumns',
    'deleteRows',
    'sort',
    'autoFilter',
    'pivotTables',
  ];
function qx(t) {
  var r = { sheet: 1 };
  return (
    $x.forEach(function (e) {
      t[e] != null && t[e] && (r[e] = '1');
    }),
    zx.forEach(function (e) {
      t[e] != null && !t[e] && (r[e] = '0');
    }),
    t.password && (r.password = hc(t.password).toString(16).toUpperCase()),
    se('sheetProtection', null, r)
  );
}
function Jx(t) {
  return Oc(t), se('pageMargins', null, t);
}
function Zx(t, r) {
  for (var e = ['<cols>'], n, a = 0; a != r.length; ++a)
    (n = r[a]) && (e[e.length] = se('col', null, ds(a, n)));
  return (e[e.length] = '</cols>'), e.join('');
}
function Qx(t, r, e, n) {
  var a = typeof t.ref == 'string' ? t.ref : _t(t.ref);
  e.Workbook || (e.Workbook = { Sheets: [] }),
    e.Workbook.Names || (e.Workbook.Names = []);
  var i = e.Workbook.Names,
    s = lr(a);
  s.s.r == s.e.r && ((s.e.r = lr(r['!ref']).e.r), (a = _t(s)));
  for (var o = 0; o < i.length; ++o) {
    var l = i[o];
    if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
      l.Ref = "'" + e.SheetNames[n] + "'!" + a;
      break;
    }
  }
  return (
    o == i.length &&
      i.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + e.SheetNames[n] + "'!" + a,
      }),
    se('autoFilter', null, { ref: a })
  );
}
function eg(t, r, e, n) {
  var a = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (a.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    se('sheetViews', se('sheetView', null, a), {})
  );
}
function tg(t, r, e, n) {
  if (
    (t.c && e['!comments'].push([r, t.c]),
    (t.v === void 0 && typeof t.f != 'string') || (t.t === 'z' && !t.f))
  )
    return '';
  var a = '',
    i = t.t,
    s = t.v;
  if (t.t !== 'z')
    switch (t.t) {
      case 'b':
        a = t.v ? '1' : '0';
        break;
      case 'n':
        a = '' + t.v;
        break;
      case 'e':
        a = ti[t.v];
        break;
      case 'd':
        n && n.cellDates
          ? (a = Yt(t.v, -1).toISOString())
          : ((t = Qt(t)), (t.t = 'n'), (a = '' + (t.v = Zt(Yt(t.v))))),
          typeof t.z > 'u' && (t.z = dt[14]);
        break;
      default:
        a = t.v;
        break;
    }
  var o = kt('v', Ke(a)),
    l = { r },
    f = xn(n.cellXfs, t, n);
  switch ((f !== 0 && (l.s = f), t.t)) {
    case 'n':
      break;
    case 'd':
      l.t = 'd';
      break;
    case 'b':
      l.t = 'b';
      break;
    case 'e':
      l.t = 'e';
      break;
    case 'z':
      break;
    default:
      if (t.v == null) {
        delete t.t;
        break;
      }
      if (t.v.length > 32767)
        throw new Error('Text length must not exceed 32767 characters');
      if (n && n.bookSST) {
        (o = kt('v', '' + P0(n.Strings, t.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((t.t != i && ((t.t = i), (t.v = s)), typeof t.f == 'string' && t.f)) {
    var c =
      t.F && t.F.slice(0, r.length) == r ? { t: 'array', ref: t.F } : null;
    o = se('f', Ke(t.f), c) + (t.v != null ? o : '');
  }
  return t.l && e['!links'].push([r, t.l]), t.D && (l.cm = 1), se('c', o, l);
}
function rg(t, r, e, n) {
  var a = [],
    i = [],
    s = st(t['!ref']),
    o = '',
    l,
    f = '',
    c = [],
    d = 0,
    u = 0,
    p = t['!rows'],
    v = Array.isArray(t),
    h = { r: f },
    x,
    D = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = Bt(u);
  for (d = s.s.r; d <= s.e.r; ++d) {
    for (i = [], f = It(d), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + f;
      var C = v ? (t[d] || [])[u] : t[l];
      C !== void 0 && (o = tg(C, l, t, r)) != null && i.push(o);
    }
    (i.length > 0 || (p && p[d])) &&
      ((h = { r: f }),
      p &&
        p[d] &&
        ((x = p[d]),
        x.hidden && (h.hidden = 1),
        (D = -1),
        x.hpx ? (D = Gi(x.hpx)) : x.hpt && (D = x.hpt),
        D > -1 && ((h.ht = D), (h.customHeight = 1)),
        x.level && (h.outlineLevel = x.level)),
      (a[a.length] = se('row', i.join(''), h)));
  }
  if (p)
    for (; d < p.length; ++d)
      p &&
        p[d] &&
        ((h = { r: d + 1 }),
        (x = p[d]),
        x.hidden && (h.hidden = 1),
        (D = -1),
        x.hpx ? (D = Gi(x.hpx)) : x.hpt && (D = x.hpt),
        D > -1 && ((h.ht = D), (h.customHeight = 1)),
        x.level && (h.outlineLevel = x.level),
        (a[a.length] = se('row', '', h)));
  return a.join('');
}
function Nc(t, r, e, n) {
  var a = [wt, se('worksheet', null, { xmlns: da[0], 'xmlns:r': St.r })],
    i = e.SheetNames[t],
    s = 0,
    o = '',
    l = e.Sheets[i];
  l == null && (l = {});
  var f = l['!ref'] || 'A1',
    c = st(f);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF)
      throw new Error('Range ' + f + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (f = _t(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var d = [];
  Kx(l, e, t, r, a),
    (a[a.length] = se('dimension', null, { ref: f })),
    (a[a.length] = eg(l, r, t, e)),
    r.sheetFormat &&
      (a[a.length] = se('sheetFormatPr', null, {
        defaultRowHeight: r.sheetFormat.defaultRowHeight || '16',
        baseColWidth: r.sheetFormat.baseColWidth || '10',
        outlineLevelRow: r.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (a[a.length] = Zx(l, l['!cols'])),
    (a[(s = a.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((o = rg(l, r)), o.length > 0 && (a[a.length] = o)),
    a.length > s + 1 &&
      ((a[a.length] = '</sheetData>'), (a[s] = a[s].replace('/>', '>'))),
    l['!protect'] && (a[a.length] = qx(l['!protect'])),
    l['!autofilter'] != null && (a[a.length] = Qx(l['!autofilter'], l, e, t)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (a[a.length] = Xx(l['!merges']));
  var u = -1,
    p,
    v = -1;
  return (
    l['!links'].length > 0 &&
      ((a[a.length] = '<hyperlinks>'),
      l['!links'].forEach(function (h) {
        h[1].Target &&
          ((p = { ref: h[0] }),
          h[1].Target.charAt(0) != '#' &&
            ((v = Xe(n, -1, Ke(h[1].Target).replace(/#.*$/, ''), He.HLINK)),
            (p['r:id'] = 'rId' + v)),
          (u = h[1].Target.indexOf('#')) > -1 &&
            (p.location = Ke(h[1].Target.slice(u + 1))),
          h[1].Tooltip && (p.tooltip = Ke(h[1].Tooltip)),
          (a[a.length] = se('hyperlink', null, p)));
      }),
      (a[a.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (a[a.length] = Jx(l['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) &&
      (a[a.length] = kt(
        'ignoredErrors',
        se('ignoredError', null, { numberStoredAsText: 1, sqref: f }),
      )),
    d.length > 0 &&
      ((v = Xe(n, -1, '../drawings/drawing' + (t + 1) + '.xml', He.DRAW)),
      (a[a.length] = se('drawing', null, { 'r:id': 'rId' + v })),
      (l['!drawing'] = d)),
    l['!comments'].length > 0 &&
      ((v = Xe(n, -1, '../drawings/vmlDrawing' + (t + 1) + '.vml', He.VML)),
      (a[a.length] = se('legacyDrawing', null, { 'r:id': 'rId' + v })),
      (l['!legacy'] = v)),
    a.length > 1 &&
      ((a[a.length] = '</worksheet>'), (a[1] = a[1].replace('/>', '>'))),
    a.join('')
  );
}
function ng(t, r) {
  var e = {},
    n = t.l + r;
  (e.r = t.read_shift(4)), (t.l += 4);
  var a = t.read_shift(2);
  t.l += 1;
  var i = t.read_shift(1);
  return (
    (t.l = n),
    i & 7 && (e.level = i & 7),
    i & 16 && (e.hidden = !0),
    i & 32 && (e.hpt = a / 20),
    e
  );
}
function ag(t, r, e) {
  var n = Y(145),
    a = (e['!rows'] || [])[t] || {};
  n.write_shift(4, t), n.write_shift(4, 0);
  var i = 320;
  a.hpx ? (i = Gi(a.hpx) * 20) : a.hpt && (i = a.hpt * 20),
    n.write_shift(2, i),
    n.write_shift(1, 0);
  var s = 0;
  a.level && (s |= a.level),
    a.hidden && (s |= 16),
    (a.hpx || a.hpt) && (s |= 32),
    n.write_shift(1, s),
    n.write_shift(1, 0);
  var o = 0,
    l = n.l;
  n.l += 4;
  for (var f = { r: t, c: 0 }, c = 0; c < 16; ++c)
    if (!(r.s.c > (c + 1) << 10 || r.e.c < c << 10)) {
      for (var d = -1, u = -1, p = c << 10; p < (c + 1) << 10; ++p) {
        f.c = p;
        var v = Array.isArray(e) ? (e[f.r] || [])[f.c] : e[$e(f)];
        v && (d < 0 && (d = p), (u = p));
      }
      d < 0 || (++o, n.write_shift(4, d), n.write_shift(4, u));
    }
  var h = n.l;
  return (
    (n.l = l),
    n.write_shift(4, o),
    (n.l = h),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function ig(t, r, e, n) {
  var a = ag(n, e, r);
  (a.length > 17 || (r['!rows'] || [])[n]) && Z(t, 0, a);
}
var sg = Vn,
  og = va;
function fg() {}
function lg(t, r) {
  var e = {},
    n = t[t.l];
  return (
    ++t.l,
    (e.above = !(n & 64)),
    (e.left = !(n & 128)),
    (t.l += 18),
    (e.name = _p(t)),
    e
  );
}
function cg(t, r, e) {
  e == null && (e = Y(84 + 4 * t.length));
  var n = 192;
  r && (r.above && (n &= -65), r.left && (n &= -129)), e.write_shift(1, n);
  for (var a = 1; a < 3; ++a) e.write_shift(1, 0);
  return (
    Hi({ auto: 1 }, e),
    e.write_shift(-4, -1),
    e.write_shift(-4, -1),
    Yl(t, e),
    e.slice(0, e.l)
  );
}
function ug(t) {
  var r = _r(t);
  return [r];
}
function hg(t, r, e) {
  return e == null && (e = Y(8)), Un(r, e);
}
function dg(t) {
  var r = Hn(t);
  return [r];
}
function pg(t, r, e) {
  return e == null && (e = Y(4)), Wn(r, e);
}
function vg(t) {
  var r = _r(t),
    e = t.read_shift(1);
  return [r, e, 'b'];
}
function mg(t, r, e) {
  return e == null && (e = Y(9)), Un(r, e), e.write_shift(1, t.v ? 1 : 0), e;
}
function xg(t) {
  var r = Hn(t),
    e = t.read_shift(1);
  return [r, e, 'b'];
}
function gg(t, r, e) {
  return e == null && (e = Y(5)), Wn(r, e), e.write_shift(1, t.v ? 1 : 0), e;
}
function _g(t) {
  var r = _r(t),
    e = t.read_shift(1);
  return [r, e, 'e'];
}
function wg(t, r, e) {
  return e == null && (e = Y(9)), Un(r, e), e.write_shift(1, t.v), e;
}
function Eg(t) {
  var r = Hn(t),
    e = t.read_shift(1);
  return [r, e, 'e'];
}
function Tg(t, r, e) {
  return (
    e == null && (e = Y(8)),
    Wn(r, e),
    e.write_shift(1, t.v),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function yg(t) {
  var r = _r(t),
    e = t.read_shift(4);
  return [r, e, 's'];
}
function Sg(t, r, e) {
  return e == null && (e = Y(12)), Un(r, e), e.write_shift(4, r.v), e;
}
function Ag(t) {
  var r = Hn(t),
    e = t.read_shift(4);
  return [r, e, 's'];
}
function Fg(t, r, e) {
  return e == null && (e = Y(8)), Wn(r, e), e.write_shift(4, r.v), e;
}
function Cg(t) {
  var r = _r(t),
    e = ma(t);
  return [r, e, 'n'];
}
function Dg(t, r, e) {
  return e == null && (e = Y(16)), Un(r, e), bn(t.v, e), e;
}
function Og(t) {
  var r = Hn(t),
    e = ma(t);
  return [r, e, 'n'];
}
function Ng(t, r, e) {
  return e == null && (e = Y(12)), Wn(r, e), bn(t.v, e), e;
}
function Rg(t) {
  var r = _r(t),
    e = Xl(t);
  return [r, e, 'n'];
}
function kg(t, r, e) {
  return e == null && (e = Y(12)), Un(r, e), Kl(t.v, e), e;
}
function Ig(t) {
  var r = Hn(t),
    e = Xl(t);
  return [r, e, 'n'];
}
function bg(t, r, e) {
  return e == null && (e = Y(8)), Wn(r, e), Kl(t.v, e), e;
}
function Pg(t) {
  var r = _r(t),
    e = C0(t);
  return [r, e, 'is'];
}
function Mg(t) {
  var r = _r(t),
    e = Ut(t);
  return [r, e, 'str'];
}
function Lg(t, r, e) {
  return (
    e == null && (e = Y(12 + 4 * t.v.length)),
    Un(r, e),
    Ft(t.v, e),
    e.length > e.l ? e.slice(0, e.l) : e
  );
}
function Bg(t) {
  var r = Hn(t),
    e = Ut(t);
  return [r, e, 'str'];
}
function Ug(t, r, e) {
  return (
    e == null && (e = Y(8 + 4 * t.v.length)),
    Wn(r, e),
    Ft(t.v, e),
    e.length > e.l ? e.slice(0, e.l) : e
  );
}
function Hg(t, r, e) {
  var n = t.l + r,
    a = _r(t);
  a.r = e['!row'];
  var i = t.read_shift(1),
    s = [a, i, 'b'];
  if (e.cellFormula) {
    t.l += 2;
    var o = hs(t, n - t.l, e);
    s[3] = oa(o, null, a, e.supbooks, e);
  } else t.l = n;
  return s;
}
function Wg(t, r, e) {
  var n = t.l + r,
    a = _r(t);
  a.r = e['!row'];
  var i = t.read_shift(1),
    s = [a, i, 'e'];
  if (e.cellFormula) {
    t.l += 2;
    var o = hs(t, n - t.l, e);
    s[3] = oa(o, null, a, e.supbooks, e);
  } else t.l = n;
  return s;
}
function Vg(t, r, e) {
  var n = t.l + r,
    a = _r(t);
  a.r = e['!row'];
  var i = ma(t),
    s = [a, i, 'n'];
  if (e.cellFormula) {
    t.l += 2;
    var o = hs(t, n - t.l, e);
    s[3] = oa(o, null, a, e.supbooks, e);
  } else t.l = n;
  return s;
}
function jg(t, r, e) {
  var n = t.l + r,
    a = _r(t);
  a.r = e['!row'];
  var i = Ut(t),
    s = [a, i, 'str'];
  if (e.cellFormula) {
    t.l += 2;
    var o = hs(t, n - t.l, e);
    s[3] = oa(o, null, a, e.supbooks, e);
  } else t.l = n;
  return s;
}
var Gg = Vn,
  Yg = va;
function Xg(t, r) {
  return r == null && (r = Y(4)), r.write_shift(4, t), r;
}
function Kg(t, r) {
  var e = t.l + r,
    n = Vn(t),
    a = D0(t),
    i = Ut(t),
    s = Ut(t),
    o = Ut(t);
  t.l = e;
  var l = { rfx: n, relId: a, loc: i, display: o };
  return s && (l.Tooltip = s), l;
}
function $g(t, r) {
  var e = Y(50 + 4 * (t[1].Target.length + (t[1].Tooltip || '').length));
  va({ s: At(t[0]), e: At(t[0]) }, e), O0('rId' + r, e);
  var n = t[1].Target.indexOf('#'),
    a = n == -1 ? '' : t[1].Target.slice(n + 1);
  return Ft(a || '', e), Ft(t[1].Tooltip || '', e), Ft('', e), e.slice(0, e.l);
}
function zg() {}
function qg(t, r, e) {
  var n = t.l + r,
    a = $l(t),
    i = t.read_shift(1),
    s = [a];
  if (((s[2] = i), e.cellFormula)) {
    var o = Bx(t, n - t.l, e);
    s[1] = o;
  } else t.l = n;
  return s;
}
function Jg(t, r, e) {
  var n = t.l + r,
    a = Vn(t),
    i = [a];
  if (e.cellFormula) {
    var s = Hx(t, n - t.l, e);
    (i[1] = s), (t.l = n);
  } else t.l = n;
  return i;
}
function Zg(t, r, e) {
  e == null && (e = Y(18));
  var n = ds(t, r);
  e.write_shift(-4, t),
    e.write_shift(-4, t),
    e.write_shift(4, (n.width || 10) * 256),
    e.write_shift(4, 0);
  var a = 0;
  return (
    r.hidden && (a |= 1),
    typeof n.width == 'number' && (a |= 2),
    r.level && (a |= r.level << 8),
    e.write_shift(2, a),
    e
  );
}
var Rc = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function Qg(t) {
  var r = {};
  return (
    Rc.forEach(function (e) {
      r[e] = ma(t);
    }),
    r
  );
}
function e2(t, r) {
  return (
    r == null && (r = Y(6 * 8)),
    Oc(t),
    Rc.forEach(function (e) {
      bn(t[e], r);
    }),
    r
  );
}
function t2(t) {
  var r = t.read_shift(2);
  return (t.l += 28), { RTL: r & 32 };
}
function r2(t, r, e) {
  e == null && (e = Y(30));
  var n = 924;
  return (
    (((r || {}).Views || [])[0] || {}).RTL && (n |= 32),
    e.write_shift(2, n),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(1, 0),
    e.write_shift(1, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 100),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(4, 0),
    e
  );
}
function n2(t) {
  var r = Y(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), va(t, r), r;
}
function a2(t, r) {
  return (
    r == null && (r = Y(16 * 4 + 2)),
    r.write_shift(2, t.password ? hc(t.password) : 0),
    r.write_shift(4, 1),
    [
      ['objects', !1],
      ['scenarios', !1],
      ['formatCells', !0],
      ['formatColumns', !0],
      ['formatRows', !0],
      ['insertColumns', !0],
      ['insertRows', !0],
      ['insertHyperlinks', !0],
      ['deleteColumns', !0],
      ['deleteRows', !0],
      ['selectLockedCells', !1],
      ['sort', !0],
      ['autoFilter', !0],
      ['pivotTables', !0],
      ['selectUnlockedCells', !1],
    ].forEach(function (e) {
      e[1]
        ? r.write_shift(4, t[e[0]] != null && !t[e[0]] ? 1 : 0)
        : r.write_shift(4, t[e[0]] != null && t[e[0]] ? 0 : 1);
    }),
    r
  );
}
function i2() {}
function s2() {}
function o2(t, r, e, n, a, i, s) {
  if (r.v === void 0) return !1;
  var o = '';
  switch (r.t) {
    case 'b':
      o = r.v ? '1' : '0';
      break;
    case 'd':
      (r = Qt(r)), (r.z = r.z || dt[14]), (r.v = Zt(Yt(r.v))), (r.t = 'n');
      break;
    case 'n':
    case 'e':
      o = '' + r.v;
      break;
    default:
      o = r.v;
      break;
  }
  var l = { r: e, c: n };
  switch (
    ((l.s = xn(a.cellXfs, r, a)),
    r.l && i['!links'].push([$e(l), r.l]),
    r.c && i['!comments'].push([$e(l), r.c]),
    r.t)
  ) {
    case 's':
    case 'str':
      return (
        a.bookSST
          ? ((o = P0(a.Strings, r.v, a.revStrings)),
            (l.t = 's'),
            (l.v = o),
            s ? Z(t, 18, Fg(r, l)) : Z(t, 7, Sg(r, l)))
          : ((l.t = 'str'), s ? Z(t, 17, Ug(r, l)) : Z(t, 6, Lg(r, l))),
        !0
      );
    case 'n':
      return (
        r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3
          ? s
            ? Z(t, 13, bg(r, l))
            : Z(t, 2, kg(r, l))
          : s
            ? Z(t, 16, Ng(r, l))
            : Z(t, 5, Dg(r, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? Z(t, 15, gg(r, l)) : Z(t, 4, mg(r, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? Z(t, 14, Tg(r, l)) : Z(t, 3, wg(r, l)), !0;
  }
  return s ? Z(t, 12, pg(r, l)) : Z(t, 1, hg(r, l)), !0;
}
function f2(t, r, e, n) {
  var a = st(r['!ref'] || 'A1'),
    i,
    s = '',
    o = [];
  Z(t, 145);
  var l = Array.isArray(r),
    f = a.e.r;
  r['!rows'] && (f = Math.max(a.e.r, r['!rows'].length - 1));
  for (var c = a.s.r; c <= f; ++c) {
    (s = It(c)), ig(t, r, a, c);
    var d = !1;
    if (c <= a.e.r)
      for (var u = a.s.c; u <= a.e.c; ++u) {
        c === a.s.r && (o[u] = Bt(u)), (i = o[u] + s);
        var p = l ? (r[c] || [])[u] : r[i];
        if (!p) {
          d = !1;
          continue;
        }
        d = o2(t, p, c, u, n, r, d);
      }
  }
  Z(t, 146);
}
function l2(t, r) {
  !r ||
    !r['!merges'] ||
    (Z(t, 177, Xg(r['!merges'].length)),
    r['!merges'].forEach(function (e) {
      Z(t, 176, Yg(e));
    }),
    Z(t, 178));
}
function c2(t, r) {
  !r ||
    !r['!cols'] ||
    (Z(t, 390),
    r['!cols'].forEach(function (e, n) {
      e && Z(t, 60, Zg(n, e));
    }),
    Z(t, 391));
}
function u2(t, r) {
  !r || !r['!ref'] || (Z(t, 648), Z(t, 649, n2(st(r['!ref']))), Z(t, 650));
}
function h2(t, r, e) {
  r['!links'].forEach(function (n) {
    if (n[1].Target) {
      var a = Xe(e, -1, n[1].Target.replace(/#.*$/, ''), He.HLINK);
      Z(t, 494, $g(n, a));
    }
  }),
    delete r['!links'];
}
function d2(t, r, e, n) {
  if (r['!comments'].length > 0) {
    var a = Xe(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', He.VML);
    Z(t, 551, O0('rId' + a)), (r['!legacy'] = a);
  }
}
function p2(t, r, e, n) {
  if (r['!autofilter']) {
    var a = r['!autofilter'],
      i = typeof a.ref == 'string' ? a.ref : _t(a.ref);
    e.Workbook || (e.Workbook = { Sheets: [] }),
      e.Workbook.Names || (e.Workbook.Names = []);
    var s = e.Workbook.Names,
      o = lr(i);
    o.s.r == o.e.r && ((o.e.r = lr(r['!ref']).e.r), (i = _t(o)));
    for (var l = 0; l < s.length; ++l) {
      var f = s[l];
      if (f.Name == '_xlnm._FilterDatabase' && f.Sheet == n) {
        f.Ref = "'" + e.SheetNames[n] + "'!" + i;
        break;
      }
    }
    l == s.length &&
      s.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + e.SheetNames[n] + "'!" + i,
      }),
      Z(t, 161, va(st(i))),
      Z(t, 162);
  }
}
function v2(t, r, e) {
  Z(t, 133), Z(t, 137, r2(r, e)), Z(t, 138), Z(t, 134);
}
function m2(t, r) {
  r['!protect'] && Z(t, 535, a2(r['!protect']));
}
function x2(t, r, e, n) {
  var a = Jt(),
    i = e.SheetNames[t],
    s = e.Sheets[i] || {},
    o = i;
  try {
    e && e.Workbook && (o = e.Workbook.Sheets[t].CodeName || o);
  } catch {}
  var l = st(s['!ref'] || 'A1');
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (r.WTF)
      throw new Error(
        'Range ' + (s['!ref'] || 'A1') + ' exceeds format limit A1:XFD1048576',
      );
    (l.e.c = Math.min(l.e.c, 16383)), (l.e.r = Math.min(l.e.c, 1048575));
  }
  return (
    (s['!links'] = []),
    (s['!comments'] = []),
    Z(a, 129),
    (e.vbaraw || s['!outline']) && Z(a, 147, cg(o, s['!outline'])),
    Z(a, 148, og(l)),
    v2(a, s, e.Workbook),
    c2(a, s),
    f2(a, s, t, r),
    m2(a, s),
    p2(a, s, e, t),
    l2(a, s),
    h2(a, s, n),
    s['!margins'] && Z(a, 476, e2(s['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) && u2(a, s),
    d2(a, s, t, n),
    Z(a, 130),
    a.end()
  );
}
function g2(t, r) {
  t.l += 10;
  var e = Ut(t);
  return { name: e };
}
var _2 = [
  ['allowRefreshQuery', !1, 'bool'],
  ['autoCompressPictures', !0, 'bool'],
  ['backupFile', !1, 'bool'],
  ['checkCompatibility', !1, 'bool'],
  ['CodeName', ''],
  ['date1904', !1, 'bool'],
  ['defaultThemeVersion', 0, 'int'],
  ['filterPrivacy', !1, 'bool'],
  ['hidePivotFieldList', !1, 'bool'],
  ['promptedSolutions', !1, 'bool'],
  ['publishItems', !1, 'bool'],
  ['refreshAllConnections', !1, 'bool'],
  ['saveExternalLinkValues', !0, 'bool'],
  ['showBorderUnselectedTables', !0, 'bool'],
  ['showInkAnnotation', !0, 'bool'],
  ['showObjects', 'all'],
  ['showPivotChartFilter', !1, 'bool'],
  ['updateLinks', 'userSet'],
];
function w2(t) {
  return !t.Workbook || !t.Workbook.WBProps
    ? 'false'
    : Jd(t.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var E2 = '][*?/\\'.split('');
function kc(t, r) {
  if (t.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var e = !0;
  return (
    E2.forEach(function (n) {
      if (t.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    e
  );
}
function T2(t, r, e) {
  t.forEach(function (n, a) {
    kc(n);
    for (var i = 0; i < a; ++i)
      if (n == t[i]) throw new Error('Duplicate Sheet Name: ' + n);
    if (e) {
      var s = (r && r[a] && r[a].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function y2(t) {
  if (!t || !t.SheetNames || !t.Sheets) throw new Error('Invalid Workbook');
  if (!t.SheetNames.length) throw new Error('Workbook is empty');
  var r = (t.Workbook && t.Workbook.Sheets) || [];
  T2(t.SheetNames, r, !!t.vbaraw);
  for (var e = 0; e < t.SheetNames.length; ++e)
    Yx(t.Sheets[t.SheetNames[e]], t.SheetNames[e], e);
}
function Ic(t) {
  var r = [wt];
  r[r.length] = se('workbook', null, { xmlns: da[0], 'xmlns:r': St.r });
  var e = t.Workbook && (t.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  t.Workbook &&
    t.Workbook.WBProps &&
    (_2.forEach(function (o) {
      t.Workbook.WBProps[o[0]] != null &&
        t.Workbook.WBProps[o[0]] != o[1] &&
        (n[o[0]] = t.Workbook.WBProps[o[0]]);
    }),
    t.Workbook.WBProps.CodeName &&
      ((n.codeName = t.Workbook.WBProps.CodeName), delete n.CodeName)),
    (r[r.length] = se('workbookPr', null, n));
  var a = (t.Workbook && t.Workbook.Sheets) || [],
    i = 0;
  if (a && a[0] && a[0].Hidden) {
    for (
      r[r.length] = '<bookViews>', i = 0;
      i != t.SheetNames.length && !(!a[i] || !a[i].Hidden);
      ++i
    );
    i == t.SheetNames.length && (i = 0),
      (r[r.length] =
        '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>'),
      (r[r.length] = '</bookViews>');
  }
  for (r[r.length] = '<sheets>', i = 0; i != t.SheetNames.length; ++i) {
    var s = { name: Ke(t.SheetNames[i].slice(0, 31)) };
    if (((s.sheetId = '' + (i + 1)), (s['r:id'] = 'rId' + (i + 1)), a[i]))
      switch (a[i].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    r[r.length] = se('sheet', null, s);
  }
  return (
    (r[r.length] = '</sheets>'),
    e &&
      ((r[r.length] = '<definedNames>'),
      t.Workbook &&
        t.Workbook.Names &&
        t.Workbook.Names.forEach(function (o) {
          var l = { name: o.Name };
          o.Comment && (l.comment = o.Comment),
            o.Sheet != null && (l.localSheetId = '' + o.Sheet),
            o.Hidden && (l.hidden = '1'),
            o.Ref && (r[r.length] = se('definedName', Ke(o.Ref), l));
        }),
      (r[r.length] = '</definedNames>')),
    r.length > 2 &&
      ((r[r.length] = '</workbook>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function S2(t, r) {
  var e = {};
  return (
    (e.Hidden = t.read_shift(4)),
    (e.iTabID = t.read_shift(4)),
    (e.strRelID = zs(t)),
    (e.name = Ut(t)),
    e
  );
}
function A2(t, r) {
  return (
    r || (r = Y(127)),
    r.write_shift(4, t.Hidden),
    r.write_shift(4, t.iTabID),
    O0(t.strRelID, r),
    Ft(t.name.slice(0, 31), r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function F2(t, r) {
  var e = {},
    n = t.read_shift(4);
  e.defaultThemeVersion = t.read_shift(4);
  var a = r > 8 ? Ut(t) : '';
  return (
    a.length > 0 && (e.CodeName = a),
    (e.autoCompressPictures = !!(n & 65536)),
    (e.backupFile = !!(n & 64)),
    (e.checkCompatibility = !!(n & 4096)),
    (e.date1904 = !!(n & 1)),
    (e.filterPrivacy = !!(n & 8)),
    (e.hidePivotFieldList = !!(n & 1024)),
    (e.promptedSolutions = !!(n & 16)),
    (e.publishItems = !!(n & 2048)),
    (e.refreshAllConnections = !!(n & 262144)),
    (e.saveExternalLinkValues = !!(n & 128)),
    (e.showBorderUnselectedTables = !!(n & 4)),
    (e.showInkAnnotation = !!(n & 32)),
    (e.showObjects = ['all', 'placeholders', 'none'][(n >> 13) & 3]),
    (e.showPivotChartFilter = !!(n & 32768)),
    (e.updateLinks = ['userSet', 'never', 'always'][(n >> 8) & 3]),
    e
  );
}
function C2(t, r) {
  r || (r = Y(72));
  var e = 0;
  return (
    t && t.filterPrivacy && (e |= 8),
    r.write_shift(4, e),
    r.write_shift(4, 0),
    Yl((t && t.CodeName) || 'ThisWorkbook', r),
    r.slice(0, r.l)
  );
}
function D2(t, r, e) {
  var n = t.l + r;
  (t.l += 4), (t.l += 1);
  var a = t.read_shift(4),
    i = wp(t),
    s = Ux(t, 0, e),
    o = D0(t);
  t.l = n;
  var l = { Name: i, Ptg: s };
  return a < 268435455 && (l.Sheet = a), o && (l.Comment = o), l;
}
function O2(t, r) {
  Z(t, 143);
  for (var e = 0; e != r.SheetNames.length; ++e) {
    var n =
        (r.Workbook &&
          r.Workbook.Sheets &&
          r.Workbook.Sheets[e] &&
          r.Workbook.Sheets[e].Hidden) ||
        0,
      a = {
        Hidden: n,
        iTabID: e + 1,
        strRelID: 'rId' + (e + 1),
        name: r.SheetNames[e],
      };
    Z(t, 156, A2(a));
  }
  Z(t, 144);
}
function N2(t, r) {
  r || (r = Y(127));
  for (var e = 0; e != 4; ++e) r.write_shift(4, 0);
  return (
    Ft('SheetJS', r),
    Ft(ki.version, r),
    Ft(ki.version, r),
    Ft('7262', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function R2(t, r) {
  r || (r = Y(29)),
    r.write_shift(-4, 0),
    r.write_shift(-4, 460),
    r.write_shift(4, 28800),
    r.write_shift(4, 17600),
    r.write_shift(4, 500),
    r.write_shift(4, t),
    r.write_shift(4, t);
  var e = 120;
  return r.write_shift(1, e), r.length > r.l ? r.slice(0, r.l) : r;
}
function k2(t, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var e = r.Workbook.Sheets, n = 0, a = -1, i = -1; n < e.length; ++n)
      !e[n] || (!e[n].Hidden && a == -1)
        ? (a = n)
        : e[n].Hidden == 1 && i == -1 && (i = n);
    i > a || (Z(t, 135), Z(t, 158, R2(a)), Z(t, 136));
  }
}
function I2(t, r) {
  var e = Jt();
  return (
    Z(e, 131),
    Z(e, 128, N2()),
    Z(e, 153, C2((t.Workbook && t.Workbook.WBProps) || null)),
    k2(e, t),
    O2(e, t),
    Z(e, 132),
    e.end()
  );
}
function b2(t, r, e) {
  return (r.slice(-4) === '.bin' ? I2 : Ic)(t);
}
function P2(t, r, e, n, a) {
  return (r.slice(-4) === '.bin' ? x2 : Nc)(t, e, n, a);
}
function M2(t, r, e) {
  return (r.slice(-4) === '.bin' ? em : vc)(t, e);
}
function L2(t, r, e) {
  return (r.slice(-4) === '.bin' ? Cv : uc)(t, e);
}
function B2(t, r, e) {
  return (r.slice(-4) === '.bin' ? mm : wc)(t);
}
function U2(t) {
  return (t.slice(-4) === '.bin' ? fm : gc)();
}
function H2(t, r) {
  var e = [];
  return (
    t.Props && e.push(Mp(t.Props, r)),
    t.Custprops && e.push(Lp(t.Props, t.Custprops)),
    e.join('')
  );
}
function W2() {
  return '';
}
function V2(t, r) {
  var e = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    r.cellXfs.forEach(function (n, a) {
      var i = [];
      i.push(se('NumberFormat', null, { 'ss:Format': Ke(dt[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + a) };
      e.push(se('Style', i.join(''), s));
    }),
    se('Styles', e.join(''))
  );
}
function bc(t) {
  return se('NamedRange', null, {
    'ss:Name': t.Name,
    'ss:RefersTo': '=' + I0(t.Ref, { r: 0, c: 0 }),
  });
}
function j2(t) {
  if (!((t || {}).Workbook || {}).Names) return '';
  for (var r = t.Workbook.Names, e = [], n = 0; n < r.length; ++n) {
    var a = r[n];
    a.Sheet == null && (a.Name.match(/^_xlfn\./) || e.push(bc(a)));
  }
  return se('Names', e.join(''));
}
function G2(t, r, e, n) {
  if (!t || !((n || {}).Workbook || {}).Names) return '';
  for (var a = n.Workbook.Names, i = [], s = 0; s < a.length; ++s) {
    var o = a[s];
    o.Sheet == e && (o.Name.match(/^_xlfn\./) || i.push(bc(o)));
  }
  return i.join('');
}
function Y2(t, r, e, n) {
  if (!t) return '';
  var a = [];
  if (
    (t['!margins'] &&
      (a.push('<PageSetup>'),
      t['!margins'].header &&
        a.push(se('Header', null, { 'x:Margin': t['!margins'].header })),
      t['!margins'].footer &&
        a.push(se('Footer', null, { 'x:Margin': t['!margins'].footer })),
      a.push(
        se('PageMargins', null, {
          'x:Bottom': t['!margins'].bottom || '0.75',
          'x:Left': t['!margins'].left || '0.7',
          'x:Right': t['!margins'].right || '0.7',
          'x:Top': t['!margins'].top || '0.75',
        }),
      ),
      a.push('</PageSetup>')),
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[e])
  )
    if (n.Workbook.Sheets[e].Hidden)
      a.push(
        se(
          'Visible',
          n.Workbook.Sheets[e].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden',
          {},
        ),
      );
    else {
      for (
        var i = 0;
        i < e && !(n.Workbook.Sheets[i] && !n.Workbook.Sheets[i].Hidden);
        ++i
      );
      i == e && a.push('<Selected/>');
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
      a.push('<DisplayRightToLeft/>'),
    t['!protect'] &&
      (a.push(kt('ProtectContents', 'True')),
      t['!protect'].objects && a.push(kt('ProtectObjects', 'True')),
      t['!protect'].scenarios && a.push(kt('ProtectScenarios', 'True')),
      t['!protect'].selectLockedCells != null &&
      !t['!protect'].selectLockedCells
        ? a.push(kt('EnableSelection', 'NoSelection'))
        : t['!protect'].selectUnlockedCells != null &&
          !t['!protect'].selectUnlockedCells &&
          a.push(kt('EnableSelection', 'UnlockedCells')),
      [
        ['formatCells', 'AllowFormatCells'],
        ['formatColumns', 'AllowSizeCols'],
        ['formatRows', 'AllowSizeRows'],
        ['insertColumns', 'AllowInsertCols'],
        ['insertRows', 'AllowInsertRows'],
        ['insertHyperlinks', 'AllowInsertHyperlinks'],
        ['deleteColumns', 'AllowDeleteCols'],
        ['deleteRows', 'AllowDeleteRows'],
        ['sort', 'AllowSort'],
        ['autoFilter', 'AllowFilter'],
        ['pivotTables', 'AllowUsePivotTables'],
      ].forEach(function (s) {
        t['!protect'][s[0]] && a.push('<' + s[1] + '/>');
      })),
    a.length == 0 ? '' : se('WorksheetOptions', a.join(''), { xmlns: ir.x })
  );
}
function X2(t) {
  return t
    .map(function (r) {
      var e = qd(r.t || ''),
        n = se('ss:Data', e, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return se('Comment', n, { 'ss:Author': r.a });
    })
    .join('');
}
function K2(t, r, e, n, a, i, s) {
  if (!t || (t.v == null && t.f == null)) return '';
  var o = {};
  if (
    (t.f && (o['ss:Formula'] = '=' + Ke(I0(t.f, s))),
    t.F && t.F.slice(0, r.length) == r)
  ) {
    var l = At(t.F.slice(r.length + 1));
    o['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (t.l &&
      t.l.Target &&
      ((o['ss:HRef'] = Ke(t.l.Target)),
      t.l.Tooltip && (o['x:HRefScreenTip'] = Ke(t.l.Tooltip))),
    e['!merges'])
  )
    for (var f = e['!merges'], c = 0; c != f.length; ++c)
      f[c].s.c != s.c ||
        f[c].s.r != s.r ||
        (f[c].e.c > f[c].s.c && (o['ss:MergeAcross'] = f[c].e.c - f[c].s.c),
        f[c].e.r > f[c].s.r && (o['ss:MergeDown'] = f[c].e.r - f[c].s.r));
  var d = '',
    u = '';
  switch (t.t) {
    case 'z':
      if (!n.sheetStubs) return '';
      break;
    case 'n':
      (d = 'Number'), (u = String(t.v));
      break;
    case 'b':
      (d = 'Boolean'), (u = t.v ? '1' : '0');
      break;
    case 'e':
      (d = 'Error'), (u = ti[t.v]);
      break;
    case 'd':
      (d = 'DateTime'),
        (u = new Date(t.v).toISOString()),
        t.z == null && (t.z = t.z || dt[14]);
      break;
    case 's':
      (d = 'String'), (u = zd(t.v || ''));
      break;
  }
  var p = xn(n.cellXfs, t, n);
  (o['ss:StyleID'] = 's' + (21 + p)), (o['ss:Index'] = s.c + 1);
  var v = t.v != null ? u : '',
    h = t.t == 'z' ? '' : '<Data ss:Type="' + d + '">' + v + '</Data>';
  return (t.c || []).length > 0 && (h += X2(t.c)), se('Cell', h, o);
}
function $2(t, r) {
  var e = '<Row ss:Index="' + (t + 1) + '"';
  return (
    r &&
      (r.hpt && !r.hpx && (r.hpx = pc(r.hpt)),
      r.hpx && (e += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
      r.hidden && (e += ' ss:Hidden="1"')),
    e + '>'
  );
}
function z2(t, r, e, n) {
  if (!t['!ref']) return '';
  var a = st(t['!ref']),
    i = t['!merges'] || [],
    s = 0,
    o = [];
  t['!cols'] &&
    t['!cols'].forEach(function (x, D) {
      R0(x);
      var C = !!x.width,
        F = ds(D, x),
        k = { 'ss:Index': D + 1 };
      C && (k['ss:Width'] = Vi(F.width)),
        x.hidden && (k['ss:Hidden'] = '1'),
        o.push(se('Column', null, k));
    });
  for (var l = Array.isArray(t), f = a.s.r; f <= a.e.r; ++f) {
    for (var c = [$2(f, (t['!rows'] || [])[f])], d = a.s.c; d <= a.e.c; ++d) {
      var u = !1;
      for (s = 0; s != i.length; ++s)
        if (
          !(i[s].s.c > d) &&
          !(i[s].s.r > f) &&
          !(i[s].e.c < d) &&
          !(i[s].e.r < f)
        ) {
          (i[s].s.c != d || i[s].s.r != f) && (u = !0);
          break;
        }
      if (!u) {
        var p = { r: f, c: d },
          v = $e(p),
          h = l ? (t[f] || [])[d] : t[v];
        c.push(K2(h, v, t, r, e, n, p));
      }
    }
    c.push('</Row>'), c.length > 2 && o.push(c.join(''));
  }
  return o.join('');
}
function q2(t, r, e) {
  var n = [],
    a = e.SheetNames[t],
    i = e.Sheets[a],
    s = i ? G2(i, r, t, e) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = i ? z2(i, r, t, e) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(Y2(i, r, t, e)),
    n.join('')
  );
}
function J2(t, r) {
  r || (r = {}),
    t.SSF || (t.SSF = Qt(dt)),
    t.SSF &&
      (fs(),
      os(t.SSF),
      (r.revssf = ls(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF),
      (r.cellXfs = []),
      xn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var e = [];
  e.push(H2(t, r)), e.push(W2()), e.push(''), e.push('');
  for (var n = 0; n < t.SheetNames.length; ++n)
    e.push(se('Worksheet', q2(n, r, t), { 'ss:Name': Ke(t.SheetNames[n]) }));
  return (
    (e[2] = V2(t, r)),
    (e[3] = j2(t)),
    wt +
      se('Workbook', e.join(''), {
        xmlns: ir.ss,
        'xmlns:o': ir.o,
        'xmlns:x': ir.x,
        'xmlns:ss': ir.ss,
        'xmlns:dt': ir.dt,
        'xmlns:html': ir.html,
      })
  );
}
var Fs = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function Z2(t, r) {
  var e = [],
    n = [],
    a = [],
    i = 0,
    s,
    o = Co(Ho, 'n'),
    l = Co(Wo, 'n');
  if (t.Props)
    for (s = bt(t.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(o, s[i])
        ? e
        : Object.prototype.hasOwnProperty.call(l, s[i])
          ? n
          : a
      ).push([s[i], t.Props[s[i]]]);
  if (t.Custprops)
    for (s = bt(t.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(t.Props || {}, s[i]) ||
        (Object.prototype.hasOwnProperty.call(o, s[i])
          ? e
          : Object.prototype.hasOwnProperty.call(l, s[i])
            ? n
            : a
        ).push([s[i], t.Custprops[s[i]]]);
  var f = [];
  for (i = 0; i < a.length; ++i)
    ac.indexOf(a[i][0]) > -1 ||
      tc.indexOf(a[i][0]) > -1 ||
      (a[i][1] != null && f.push(a[i]));
  n.length && Ze.utils.cfb_add(r, '/SummaryInformation', Xo(n, Fs.SI, l, Wo)),
    (e.length || f.length) &&
      Ze.utils.cfb_add(
        r,
        '/DocumentSummaryInformation',
        Xo(e, Fs.DSI, o, Ho, f.length ? f : null, Fs.UDI),
      );
}
function Q2(t, r) {
  var e = r || {},
    n = Ze.utils.cfb_new({ root: 'R' }),
    a = '/Workbook';
  switch (e.bookType || 'xls') {
    case 'xls':
      e.bookType = 'biff8';
    case 'xla':
      e.bookType || (e.bookType = 'xla');
    case 'biff8':
      (a = '/Workbook'), (e.biff = 8);
      break;
    case 'biff5':
      (a = '/Book'), (e.biff = 5);
      break;
    default:
      throw new Error('invalid type ' + e.bookType + ' for XLS CFB');
  }
  return (
    Ze.utils.cfb_add(n, a, Pc(t, e)),
    e.biff == 8 && (t.Props || t.Custprops) && Z2(t, n),
    e.biff == 8 &&
      t.vbaraw &&
      xm(
        n,
        Ze.read(t.vbaraw, {
          type: typeof t.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var e_ = {
  0: { f: ng },
  1: { f: ug },
  2: { f: Rg },
  3: { f: _g },
  4: { f: vg },
  5: { f: Cg },
  6: { f: Mg },
  7: { f: yg },
  8: { f: jg },
  9: { f: Vg },
  10: { f: Hg },
  11: { f: Wg },
  12: { f: dg },
  13: { f: Ig },
  14: { f: Eg },
  15: { f: xg },
  16: { f: Og },
  17: { f: Bg },
  18: { f: Ag },
  19: { f: C0 },
  20: {},
  21: {},
  22: {},
  23: {},
  24: {},
  25: {},
  26: {},
  27: {},
  28: {},
  29: {},
  30: {},
  31: {},
  32: {},
  33: {},
  34: {},
  35: { T: 1 },
  36: { T: -1 },
  37: { T: 1 },
  38: { T: -1 },
  39: { f: D2 },
  40: {},
  42: {},
  43: { f: Mv },
  44: { f: bv },
  45: { f: Uv },
  46: { f: Wv },
  47: { f: Hv },
  48: {},
  49: { f: dp },
  50: {},
  51: { f: nm },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: pv },
  62: { f: Pg },
  63: { f: lm },
  64: { f: i2 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Lr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: t2 },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: lg },
  148: { f: sg, p: 16 },
  151: { f: zg },
  152: {},
  153: { f: F2 },
  154: {},
  155: {},
  156: { f: S2 },
  157: {},
  158: {},
  159: { T: 1, f: Sv },
  160: { T: -1 },
  161: { T: 1, f: Vn },
  162: { T: -1 },
  163: { T: 1 },
  164: { T: -1 },
  165: { T: 1 },
  166: { T: -1 },
  167: {},
  168: {},
  169: {},
  170: {},
  171: {},
  172: { T: 1 },
  173: { T: -1 },
  174: {},
  175: {},
  176: { f: Gg },
  177: { T: 1 },
  178: { T: -1 },
  179: { T: 1 },
  180: { T: -1 },
  181: { T: 1 },
  182: { T: -1 },
  183: { T: 1 },
  184: { T: -1 },
  185: { T: 1 },
  186: { T: -1 },
  187: { T: 1 },
  188: { T: -1 },
  189: { T: 1 },
  190: { T: -1 },
  191: { T: 1 },
  192: { T: -1 },
  193: { T: 1 },
  194: { T: -1 },
  195: { T: 1 },
  196: { T: -1 },
  197: { T: 1 },
  198: { T: -1 },
  199: { T: 1 },
  200: { T: -1 },
  201: { T: 1 },
  202: { T: -1 },
  203: { T: 1 },
  204: { T: -1 },
  205: { T: 1 },
  206: { T: -1 },
  207: { T: 1 },
  208: { T: -1 },
  209: { T: 1 },
  210: { T: -1 },
  211: { T: 1 },
  212: { T: -1 },
  213: { T: 1 },
  214: { T: -1 },
  215: { T: 1 },
  216: { T: -1 },
  217: { T: 1 },
  218: { T: -1 },
  219: { T: 1 },
  220: { T: -1 },
  221: { T: 1 },
  222: { T: -1 },
  223: { T: 1 },
  224: { T: -1 },
  225: { T: 1 },
  226: { T: -1 },
  227: { T: 1 },
  228: { T: -1 },
  229: { T: 1 },
  230: { T: -1 },
  231: { T: 1 },
  232: { T: -1 },
  233: { T: 1 },
  234: { T: -1 },
  235: { T: 1 },
  236: { T: -1 },
  237: { T: 1 },
  238: { T: -1 },
  239: { T: 1 },
  240: { T: -1 },
  241: { T: 1 },
  242: { T: -1 },
  243: { T: 1 },
  244: { T: -1 },
  245: { T: 1 },
  246: { T: -1 },
  247: { T: 1 },
  248: { T: -1 },
  249: { T: 1 },
  250: { T: -1 },
  251: { T: 1 },
  252: { T: -1 },
  253: { T: 1 },
  254: { T: -1 },
  255: { T: 1 },
  256: { T: -1 },
  257: { T: 1 },
  258: { T: -1 },
  259: { T: 1 },
  260: { T: -1 },
  261: { T: 1 },
  262: { T: -1 },
  263: { T: 1 },
  264: { T: -1 },
  265: { T: 1 },
  266: { T: -1 },
  267: { T: 1 },
  268: { T: -1 },
  269: { T: 1 },
  270: { T: -1 },
  271: { T: 1 },
  272: { T: -1 },
  273: { T: 1 },
  274: { T: -1 },
  275: { T: 1 },
  276: { T: -1 },
  277: {},
  278: { T: 1 },
  279: { T: -1 },
  280: { T: 1 },
  281: { T: -1 },
  282: { T: 1 },
  283: { T: 1 },
  284: { T: -1 },
  285: { T: 1 },
  286: { T: -1 },
  287: { T: 1 },
  288: { T: -1 },
  289: { T: 1 },
  290: { T: -1 },
  291: { T: 1 },
  292: { T: -1 },
  293: { T: 1 },
  294: { T: -1 },
  295: { T: 1 },
  296: { T: -1 },
  297: { T: 1 },
  298: { T: -1 },
  299: { T: 1 },
  300: { T: -1 },
  301: { T: 1 },
  302: { T: -1 },
  303: { T: 1 },
  304: { T: -1 },
  305: { T: 1 },
  306: { T: -1 },
  307: { T: 1 },
  308: { T: -1 },
  309: { T: 1 },
  310: { T: -1 },
  311: { T: 1 },
  312: { T: -1 },
  313: { T: -1 },
  314: { T: 1 },
  315: { T: -1 },
  316: { T: 1 },
  317: { T: -1 },
  318: { T: 1 },
  319: { T: -1 },
  320: { T: 1 },
  321: { T: -1 },
  322: { T: 1 },
  323: { T: -1 },
  324: { T: 1 },
  325: { T: -1 },
  326: { T: 1 },
  327: { T: -1 },
  328: { T: 1 },
  329: { T: -1 },
  330: { T: 1 },
  331: { T: -1 },
  332: { T: 1 },
  333: { T: -1 },
  334: { T: 1 },
  335: { f: tm },
  336: { T: -1 },
  337: { f: sm, T: 1 },
  338: { T: -1 },
  339: { T: 1 },
  340: { T: -1 },
  341: { T: 1 },
  342: { T: -1 },
  343: { T: 1 },
  344: { T: -1 },
  345: { T: 1 },
  346: { T: -1 },
  347: { T: 1 },
  348: { T: -1 },
  349: { T: 1 },
  350: { T: -1 },
  351: {},
  352: {},
  353: { T: 1 },
  354: { T: -1 },
  355: { f: zs },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: fv },
  363: {},
  364: {},
  366: {},
  367: {},
  368: {},
  369: {},
  370: {},
  371: {},
  372: { T: 1 },
  373: { T: -1 },
  374: { T: 1 },
  375: { T: -1 },
  376: { T: 1 },
  377: { T: -1 },
  378: { T: 1 },
  379: { T: -1 },
  380: { T: 1 },
  381: { T: -1 },
  382: { T: 1 },
  383: { T: -1 },
  384: { T: 1 },
  385: { T: -1 },
  386: { T: 1 },
  387: { T: -1 },
  388: { T: 1 },
  389: { T: -1 },
  390: { T: 1 },
  391: { T: -1 },
  392: { T: 1 },
  393: { T: -1 },
  394: { T: 1 },
  395: { T: -1 },
  396: {},
  397: {},
  398: {},
  399: {},
  400: {},
  401: { T: 1 },
  403: {},
  404: {},
  405: {},
  406: {},
  407: {},
  408: {},
  409: {},
  410: {},
  411: {},
  412: {},
  413: {},
  414: {},
  415: {},
  416: {},
  417: {},
  418: {},
  419: {},
  420: {},
  421: {},
  422: { T: 1 },
  423: { T: 1 },
  424: { T: -1 },
  425: { T: -1 },
  426: { f: qg },
  427: { f: Jg },
  428: {},
  429: { T: 1 },
  430: { T: -1 },
  431: { T: 1 },
  432: { T: -1 },
  433: { T: 1 },
  434: { T: -1 },
  435: { T: 1 },
  436: { T: -1 },
  437: { T: 1 },
  438: { T: -1 },
  439: { T: 1 },
  440: { T: -1 },
  441: { T: 1 },
  442: { T: -1 },
  443: { T: 1 },
  444: { T: -1 },
  445: { T: 1 },
  446: { T: -1 },
  447: { T: 1 },
  448: { T: -1 },
  449: { T: 1 },
  450: { T: -1 },
  451: { T: 1 },
  452: { T: -1 },
  453: { T: 1 },
  454: { T: -1 },
  455: { T: 1 },
  456: { T: -1 },
  457: { T: 1 },
  458: { T: -1 },
  459: { T: 1 },
  460: { T: -1 },
  461: { T: 1 },
  462: { T: -1 },
  463: { T: 1 },
  464: { T: -1 },
  465: { T: 1 },
  466: { T: -1 },
  467: { T: 1 },
  468: { T: -1 },
  469: { T: 1 },
  470: { T: -1 },
  471: {},
  472: {},
  473: { T: 1 },
  474: { T: -1 },
  475: {},
  476: { f: Qg },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: fg },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: Kg },
  495: { T: 1 },
  496: { T: -1 },
  497: { T: 1 },
  498: { T: -1 },
  499: {},
  500: { T: 1 },
  501: { T: -1 },
  502: { T: 1 },
  503: { T: -1 },
  504: {},
  505: { T: 1 },
  506: { T: -1 },
  507: {},
  508: { T: 1 },
  509: { T: -1 },
  510: { T: 1 },
  511: { T: -1 },
  512: {},
  513: {},
  514: { T: 1 },
  515: { T: -1 },
  516: { T: 1 },
  517: { T: -1 },
  518: { T: 1 },
  519: { T: -1 },
  520: { T: 1 },
  521: { T: -1 },
  522: {},
  523: {},
  524: {},
  525: {},
  526: {},
  527: {},
  528: { T: 1 },
  529: { T: -1 },
  530: { T: 1 },
  531: { T: -1 },
  532: { T: 1 },
  533: { T: -1 },
  534: {},
  535: {},
  536: {},
  537: {},
  538: { T: 1 },
  539: { T: -1 },
  540: { T: 1 },
  541: { T: -1 },
  542: { T: 1 },
  548: {},
  549: {},
  550: { f: zs },
  551: {},
  552: {},
  553: {},
  554: { T: 1 },
  555: { T: -1 },
  556: { T: 1 },
  557: { T: -1 },
  558: { T: 1 },
  559: { T: -1 },
  560: { T: 1 },
  561: { T: -1 },
  562: {},
  564: {},
  565: { T: 1 },
  566: { T: -1 },
  569: { T: 1 },
  570: { T: -1 },
  572: {},
  573: { T: 1 },
  574: { T: -1 },
  577: {},
  578: {},
  579: {},
  580: {},
  581: {},
  582: {},
  583: {},
  584: {},
  585: {},
  586: {},
  587: {},
  588: { T: -1 },
  589: {},
  590: { T: 1 },
  591: { T: -1 },
  592: { T: 1 },
  593: { T: -1 },
  594: { T: 1 },
  595: { T: -1 },
  596: {},
  597: { T: 1 },
  598: { T: -1 },
  599: { T: 1 },
  600: { T: -1 },
  601: { T: 1 },
  602: { T: -1 },
  603: { T: 1 },
  604: { T: -1 },
  605: { T: 1 },
  606: { T: -1 },
  607: {},
  608: { T: 1 },
  609: { T: -1 },
  610: {},
  611: { T: 1 },
  612: { T: -1 },
  613: { T: 1 },
  614: { T: -1 },
  615: { T: 1 },
  616: { T: -1 },
  617: { T: 1 },
  618: { T: -1 },
  619: { T: 1 },
  620: { T: -1 },
  625: {},
  626: { T: 1 },
  627: { T: -1 },
  628: { T: 1 },
  629: { T: -1 },
  630: { T: 1 },
  631: { T: -1 },
  632: { f: pm },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: hm },
  636: { T: -1 },
  637: { f: xp },
  638: { T: 1 },
  639: {},
  640: { T: -1 },
  641: { T: 1 },
  642: { T: -1 },
  643: { T: 1 },
  644: {},
  645: { T: -1 },
  646: { T: 1 },
  648: { T: 1 },
  649: {},
  650: { T: -1 },
  651: { f: g2 },
  652: {},
  653: { T: 1 },
  654: { T: -1 },
  655: { T: 1 },
  656: { T: -1 },
  657: { T: 1 },
  658: { T: -1 },
  659: {},
  660: { T: 1 },
  661: {},
  662: { T: -1 },
  663: {},
  664: { T: 1 },
  665: {},
  666: { T: -1 },
  667: {},
  668: {},
  669: {},
  671: { T: 1 },
  672: { T: -1 },
  673: { T: 1 },
  674: { T: -1 },
  675: {},
  676: {},
  677: {},
  678: {},
  679: {},
  680: {},
  681: {},
  1024: {},
  1025: {},
  1026: { T: 1 },
  1027: { T: -1 },
  1028: { T: 1 },
  1029: { T: -1 },
  1030: {},
  1031: { T: 1 },
  1032: { T: -1 },
  1033: { T: 1 },
  1034: { T: -1 },
  1035: {},
  1036: {},
  1037: {},
  1038: { T: 1 },
  1039: { T: -1 },
  1040: {},
  1041: { T: 1 },
  1042: { T: -1 },
  1043: {},
  1044: {},
  1045: {},
  1046: { T: 1 },
  1047: { T: -1 },
  1048: { T: 1 },
  1049: { T: -1 },
  1050: {},
  1051: { T: 1 },
  1052: { T: 1 },
  1053: { f: s2 },
  1054: { T: 1 },
  1055: {},
  1056: { T: 1 },
  1057: { T: -1 },
  1058: { T: 1 },
  1059: { T: -1 },
  1061: {},
  1062: { T: 1 },
  1063: { T: -1 },
  1064: { T: 1 },
  1065: { T: -1 },
  1066: { T: 1 },
  1067: { T: -1 },
  1068: { T: 1 },
  1069: { T: -1 },
  1070: { T: 1 },
  1071: { T: -1 },
  1072: { T: 1 },
  1073: { T: -1 },
  1075: { T: 1 },
  1076: { T: -1 },
  1077: { T: 1 },
  1078: { T: -1 },
  1079: { T: 1 },
  1080: { T: -1 },
  1081: { T: 1 },
  1082: { T: -1 },
  1083: { T: 1 },
  1084: { T: -1 },
  1085: {},
  1086: { T: 1 },
  1087: { T: -1 },
  1088: { T: 1 },
  1089: { T: -1 },
  1090: { T: 1 },
  1091: { T: -1 },
  1092: { T: 1 },
  1093: { T: -1 },
  1094: { T: 1 },
  1095: { T: -1 },
  1096: {},
  1097: { T: 1 },
  1098: {},
  1099: { T: -1 },
  1100: { T: 1 },
  1101: { T: -1 },
  1102: {},
  1103: {},
  1104: {},
  1105: {},
  1111: {},
  1112: {},
  1113: { T: 1 },
  1114: { T: -1 },
  1115: { T: 1 },
  1116: { T: -1 },
  1117: {},
  1118: { T: 1 },
  1119: { T: -1 },
  1120: { T: 1 },
  1121: { T: -1 },
  1122: { T: 1 },
  1123: { T: -1 },
  1124: { T: 1 },
  1125: { T: -1 },
  1126: {},
  1128: { T: 1 },
  1129: { T: -1 },
  1130: {},
  1131: { T: 1 },
  1132: { T: -1 },
  1133: { T: 1 },
  1134: { T: -1 },
  1135: { T: 1 },
  1136: { T: -1 },
  1137: { T: 1 },
  1138: { T: -1 },
  1139: { T: 1 },
  1140: { T: -1 },
  1141: {},
  1142: { T: 1 },
  1143: { T: -1 },
  1144: { T: 1 },
  1145: { T: -1 },
  1146: {},
  1147: { T: 1 },
  1148: { T: -1 },
  1149: { T: 1 },
  1150: { T: -1 },
  1152: { T: 1 },
  1153: { T: -1 },
  1154: { T: -1 },
  1155: { T: -1 },
  1156: { T: -1 },
  1157: { T: 1 },
  1158: { T: -1 },
  1159: { T: 1 },
  1160: { T: -1 },
  1161: { T: 1 },
  1162: { T: -1 },
  1163: { T: 1 },
  1164: { T: -1 },
  1165: { T: 1 },
  1166: { T: -1 },
  1167: { T: 1 },
  1168: { T: -1 },
  1169: { T: 1 },
  1170: { T: -1 },
  1171: {},
  1172: { T: 1 },
  1173: { T: -1 },
  1177: {},
  1178: { T: 1 },
  1180: {},
  1181: {},
  1182: {},
  2048: { T: 1 },
  2049: { T: -1 },
  2050: {},
  2051: { T: 1 },
  2052: { T: -1 },
  2053: {},
  2054: {},
  2055: { T: 1 },
  2056: { T: -1 },
  2057: { T: 1 },
  2058: { T: -1 },
  2060: {},
  2067: {},
  2068: { T: 1 },
  2069: { T: -1 },
  2070: {},
  2071: {},
  2072: { T: 1 },
  2073: { T: -1 },
  2075: {},
  2076: {},
  2077: { T: 1 },
  2078: { T: -1 },
  2079: {},
  2080: { T: 1 },
  2081: { T: -1 },
  2082: {},
  2083: { T: 1 },
  2084: { T: -1 },
  2085: { T: 1 },
  2086: { T: -1 },
  2087: { T: 1 },
  2088: { T: -1 },
  2089: { T: 1 },
  2090: { T: -1 },
  2091: {},
  2092: {},
  2093: { T: 1 },
  2094: { T: -1 },
  2095: {},
  2096: { T: 1 },
  2097: { T: -1 },
  2098: { T: 1 },
  2099: { T: -1 },
  2100: { T: 1 },
  2101: { T: -1 },
  2102: {},
  2103: { T: 1 },
  2104: { T: -1 },
  2105: {},
  2106: { T: 1 },
  2107: { T: -1 },
  2108: {},
  2109: { T: 1 },
  2110: { T: -1 },
  2111: { T: 1 },
  2112: { T: -1 },
  2113: { T: 1 },
  2114: { T: -1 },
  2115: {},
  2116: {},
  2117: {},
  2118: { T: 1 },
  2119: { T: -1 },
  2120: {},
  2121: { T: 1 },
  2122: { T: -1 },
  2123: { T: 1 },
  2124: { T: -1 },
  2125: {},
  2126: { T: 1 },
  2127: { T: -1 },
  2128: {},
  2129: { T: 1 },
  2130: { T: -1 },
  2131: { T: 1 },
  2132: { T: -1 },
  2133: { T: 1 },
  2134: {},
  2135: {},
  2136: {},
  2137: { T: 1 },
  2138: { T: -1 },
  2139: { T: 1 },
  2140: { T: -1 },
  2141: {},
  3072: {},
  3073: {},
  4096: { T: 1 },
  4097: { T: -1 },
  5002: { T: 1 },
  5003: { T: -1 },
  5081: { T: 1 },
  5082: { T: -1 },
  5083: {},
  5084: { T: 1 },
  5085: { T: -1 },
  5086: { T: 1 },
  5087: { T: -1 },
  5088: {},
  5089: {},
  5090: {},
  5092: { T: 1 },
  5093: { T: -1 },
  5094: {},
  5095: { T: 1 },
  5096: { T: -1 },
  5097: {},
  5099: {},
  65535: { n: '' },
};
function fe(t, r, e, n) {
  var a = r;
  if (!isNaN(a)) {
    var i = n || (e || []).length || 0,
      s = t.next(4);
    s.write_shift(2, a), s.write_shift(2, i), i > 0 && S0(e) && t.push(e);
  }
}
function t_(t, r, e, n) {
  var a = (e || []).length || 0;
  if (a <= 8224) return fe(t, r, e, a);
  var i = r;
  if (!isNaN(i)) {
    for (
      var s = e.parts || [], o = 0, l = 0, f = 0;
      f + (s[o] || 8224) <= 8224;

    )
      (f += s[o] || 8224), o++;
    var c = t.next(4);
    for (
      c.write_shift(2, i),
        c.write_shift(2, f),
        t.push(e.slice(l, l + f)),
        l += f;
      l < a;

    ) {
      for (
        c = t.next(4), c.write_shift(2, 60), f = 0;
        f + (s[o] || 8224) <= 8224;

      )
        (f += s[o] || 8224), o++;
      c.write_shift(2, f), t.push(e.slice(l, l + f)), (l += f);
    }
  }
}
function ni(t, r, e) {
  return (
    t || (t = Y(7)),
    t.write_shift(2, r),
    t.write_shift(2, e),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t
  );
}
function r_(t, r, e, n) {
  var a = Y(9);
  return ni(a, t, r), sc(e, n || 'b', a), a;
}
function n_(t, r, e) {
  var n = Y(8 + 2 * e.length);
  return (
    ni(n, t, r),
    n.write_shift(1, e.length),
    n.write_shift(e.length, e, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function a_(t, r, e, n) {
  if (r.v != null)
    switch (r.t) {
      case 'd':
      case 'n':
        var a = r.t == 'd' ? Zt(Yt(r.v)) : r.v;
        a == (a | 0) && a >= 0 && a < 65536
          ? fe(t, 2, gv(e, n, a))
          : fe(t, 3, xv(e, n, a));
        return;
      case 'b':
      case 'e':
        fe(t, 5, r_(e, n, r.v, r.t));
        return;
      case 's':
      case 'str':
        fe(t, 4, n_(e, n, (r.v || '').slice(0, 255)));
        return;
    }
  fe(t, 1, ni(null, e, n));
}
function i_(t, r, e, n) {
  var a = Array.isArray(r),
    i = st(r['!ref'] || 'A1'),
    s,
    o = '',
    l = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (n.WTF)
      throw new Error(
        'Range ' + (r['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (i.e.c = Math.min(i.e.c, 255)),
      (i.e.r = Math.min(i.e.c, 16383)),
      (s = _t(i));
  }
  for (var f = i.s.r; f <= i.e.r; ++f) {
    o = It(f);
    for (var c = i.s.c; c <= i.e.c; ++c) {
      f === i.s.r && (l[c] = Bt(c)), (s = l[c] + o);
      var d = a ? (r[f] || [])[c] : r[s];
      d && a_(t, d, f, c);
    }
  }
}
function s_(t, r) {
  for (var e = r || {}, n = Jt(), a = 0, i = 0; i < t.SheetNames.length; ++i)
    t.SheetNames[i] == e.sheet && (a = i);
  if (a == 0 && e.sheet && t.SheetNames[0] != e.sheet)
    throw new Error('Sheet not found: ' + e.sheet);
  return (
    fe(n, e.biff == 4 ? 1033 : e.biff == 3 ? 521 : 9, N0(t, 16, e)),
    i_(n, t.Sheets[t.SheetNames[a]], a, e),
    fe(n, 10),
    n.end()
  );
}
function o_(t, r, e) {
  fe(t, 49, ev({ sz: 12, name: 'Arial' }, e));
}
function f_(t, r, e) {
  r &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var a = n[0]; a <= n[1]; ++a)
        r[a] != null && fe(t, 1054, nv(a, r[a], e));
    });
}
function l_(t, r) {
  var e = Y(19);
  e.write_shift(4, 2151),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 3),
    e.write_shift(1, 1),
    e.write_shift(4, 0),
    fe(t, 2151, e),
    (e = Y(39)),
    e.write_shift(4, 2152),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 3),
    e.write_shift(1, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 1),
    e.write_shift(4, 4),
    e.write_shift(2, 0),
    lc(st(r['!ref'] || 'A1'), e),
    e.write_shift(4, 4),
    fe(t, 2152, e);
}
function c_(t, r) {
  for (var e = 0; e < 16; ++e) fe(t, 224, $o({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function (n) {
    fe(t, 224, $o(n, 0, r));
  });
}
function u_(t, r) {
  for (var e = 0; e < r['!links'].length; ++e) {
    var n = r['!links'][e];
    fe(t, 440, uv(n)), n[1].Tooltip && fe(t, 2048, hv(n));
  }
  delete r['!links'];
}
function h_(t, r) {
  if (r) {
    var e = 0;
    r.forEach(function (n, a) {
      ++e <= 256 && n && fe(t, 125, vv(ds(a, n), a));
    });
  }
}
function d_(t, r, e, n, a) {
  var i = 16 + xn(a.cellXfs, r, a);
  if (r.v == null && !r.bf) {
    fe(t, 513, Pn(e, n, i));
    return;
  }
  if (r.bf) fe(t, 6, Lx(r, e, n, a, i));
  else
    switch (r.t) {
      case 'd':
      case 'n':
        var s = r.t == 'd' ? Zt(Yt(r.v)) : r.v;
        fe(t, 515, ov(e, n, s, i));
        break;
      case 'b':
      case 'e':
        fe(t, 517, sv(e, n, r.v, i, a, r.t));
        break;
      case 's':
      case 'str':
        if (a.bookSST) {
          var o = P0(a.Strings, r.v, a.revStrings);
          fe(t, 253, tv(e, n, o, i));
        } else fe(t, 516, rv(e, n, (r.v || '').slice(0, 255), i, a));
        break;
      default:
        fe(t, 513, Pn(e, n, i));
    }
}
function p_(t, r, e) {
  var n = Jt(),
    a = e.SheetNames[t],
    i = e.Sheets[a] || {},
    s = (e || {}).Workbook || {},
    o = (s.Sheets || [])[t] || {},
    l = Array.isArray(i),
    f = r.biff == 8,
    c,
    d = '',
    u = [],
    p = st(i['!ref'] || 'A1'),
    v = f ? 65536 : 16384;
  if (p.e.c > 255 || p.e.r >= v) {
    if (r.WTF)
      throw new Error(
        'Range ' + (i['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (p.e.c = Math.min(p.e.c, 255)), (p.e.r = Math.min(p.e.c, v - 1));
  }
  fe(n, 2057, N0(e, 16, r)),
    fe(n, 13, mr(1)),
    fe(n, 12, mr(100)),
    fe(n, 15, Gt(!0)),
    fe(n, 17, Gt(!1)),
    fe(n, 16, bn(0.001)),
    fe(n, 95, Gt(!0)),
    fe(n, 42, Gt(!1)),
    fe(n, 43, Gt(!1)),
    fe(n, 130, mr(1)),
    fe(n, 128, iv()),
    fe(n, 131, Gt(!1)),
    fe(n, 132, Gt(!1)),
    f && h_(n, i['!cols']),
    fe(n, 512, av(p, r)),
    f && (i['!links'] = []);
  for (var h = p.s.r; h <= p.e.r; ++h) {
    d = It(h);
    for (var x = p.s.c; x <= p.e.c; ++x) {
      h === p.s.r && (u[x] = Bt(x)), (c = u[x] + d);
      var D = l ? (i[h] || [])[x] : i[c];
      D && (d_(n, D, h, x, r), f && D.l && i['!links'].push([c, D.l]));
    }
  }
  var C = o.CodeName || o.name || a;
  return (
    f && fe(n, 574, Qp((s.Views || [])[0])),
    f && (i['!merges'] || []).length && fe(n, 229, cv(i['!merges'])),
    f && u_(n, i),
    fe(n, 442, fc(C)),
    f && l_(n, i),
    fe(n, 10),
    n.end()
  );
}
function v_(t, r, e) {
  var n = Jt(),
    a = (t || {}).Workbook || {},
    i = a.Sheets || [],
    s = a.WBProps || {},
    o = e.biff == 8,
    l = e.biff == 5;
  if (
    (fe(n, 2057, N0(t, 5, e)),
    e.bookType == 'xla' && fe(n, 135),
    fe(n, 225, o ? mr(1200) : null),
    fe(n, 193, Hp(2)),
    l && fe(n, 191),
    l && fe(n, 192),
    fe(n, 226),
    fe(n, 92, zp('SheetJS', e)),
    fe(n, 66, mr(o ? 1200 : 1252)),
    o && fe(n, 353, mr(0)),
    o && fe(n, 448),
    fe(n, 317, mv(t.SheetNames.length)),
    o && t.vbaraw && fe(n, 211),
    o && t.vbaraw)
  ) {
    var f = s.CodeName || 'ThisWorkbook';
    fe(n, 442, fc(f));
  }
  fe(n, 156, mr(17)),
    fe(n, 25, Gt(!1)),
    fe(n, 18, Gt(!1)),
    fe(n, 19, mr(0)),
    o && fe(n, 431, Gt(!1)),
    o && fe(n, 444, mr(0)),
    fe(n, 61, Zp()),
    fe(n, 64, Gt(!1)),
    fe(n, 141, mr(0)),
    fe(n, 34, Gt(w2(t) == 'true')),
    fe(n, 14, Gt(!0)),
    o && fe(n, 439, Gt(!1)),
    fe(n, 218, mr(0)),
    o_(n, t, e),
    f_(n, t.SSF, e),
    c_(n, e),
    o && fe(n, 352, Gt(!1));
  var c = n.end(),
    d = Jt();
  o && fe(d, 140, dv()), o && e.Strings && t_(d, 252, Jp(e.Strings)), fe(d, 10);
  var u = d.end(),
    p = Jt(),
    v = 0,
    h = 0;
  for (h = 0; h < t.SheetNames.length; ++h)
    v += (o ? 12 : 11) + (o ? 2 : 1) * t.SheetNames[h].length;
  var x = c.length + v + u.length;
  for (h = 0; h < t.SheetNames.length; ++h) {
    var D = i[h] || {};
    fe(
      p,
      133,
      qp({ pos: x, hs: D.Hidden || 0, dt: 0, name: t.SheetNames[h] }, e),
    ),
      (x += r[h].length);
  }
  var C = p.end();
  if (v != C.length) throw new Error('BS8 ' + v + ' != ' + C.length);
  var F = [];
  return (
    c.length && F.push(c), C.length && F.push(C), u.length && F.push(u), Rt(F)
  );
}
function m_(t, r) {
  var e = r || {},
    n = [];
  t && !t.SSF && (t.SSF = Qt(dt)),
    t &&
      t.SSF &&
      (fs(),
      os(t.SSF),
      (e.revssf = ls(t.SSF)),
      (e.revssf[t.SSF[65535]] = 0),
      (e.ssf = t.SSF)),
    (e.Strings = []),
    (e.Strings.Count = 0),
    (e.Strings.Unique = 0),
    M0(e),
    (e.cellXfs = []),
    xn(e.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {});
  for (var a = 0; a < t.SheetNames.length; ++a) n[n.length] = p_(a, e, t);
  return n.unshift(v_(t, n, e)), Rt(n);
}
function Pc(t, r) {
  for (var e = 0; e <= t.SheetNames.length; ++e) {
    var n = t.Sheets[t.SheetNames[e]];
    if (!(!n || !n['!ref'])) {
      var a = lr(n['!ref']);
      a.e.c > 255 &&
        typeof console < 'u' &&
        console.error &&
        console.error(
          "Worksheet '" +
            t.SheetNames[e] +
            "' extends beyond column IV (255).  Data may be lost.",
        );
    }
  }
  var i = r || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return m_(t, r);
    case 4:
    case 3:
    case 2:
      return s_(t, r);
  }
  throw new Error('invalid type ' + i.bookType + ' for BIFF');
}
function x_(t, r, e, n) {
  for (var a = t['!merges'] || [], i = [], s = r.s.c; s <= r.e.c; ++s) {
    for (var o = 0, l = 0, f = 0; f < a.length; ++f)
      if (!(a[f].s.r > e || a[f].s.c > s) && !(a[f].e.r < e || a[f].e.c < s)) {
        if (a[f].s.r < e || a[f].s.c < s) {
          o = -1;
          break;
        }
        (o = a[f].e.r - a[f].s.r + 1), (l = a[f].e.c - a[f].s.c + 1);
        break;
      }
    if (!(o < 0)) {
      var c = $e({ r: e, c: s }),
        d = n.dense ? (t[e] || [])[s] : t[c],
        u = (d && d.v != null && (d.h || $d(d.w || (Jr(d), d.w) || ''))) || '',
        p = {};
      o > 1 && (p.rowspan = o),
        l > 1 && (p.colspan = l),
        n.editable
          ? (u = '<span contenteditable="true">' + u + '</span>')
          : d &&
            ((p['data-t'] = (d && d.t) || 'z'),
            d.v != null && (p['data-v'] = d.v),
            d.z != null && (p['data-z'] = d.z),
            d.l &&
              (d.l.Target || '#').charAt(0) != '#' &&
              (u = '<a href="' + d.l.Target + '">' + u + '</a>')),
        (p.id = (n.id || 'sjs') + '-' + c),
        i.push(se('td', u, p));
    }
  }
  var v = '<tr>';
  return v + i.join('') + '</tr>';
}
var g_ =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  __ = '</body></html>';
function w_(t, r, e) {
  var n = [];
  return n.join('') + '<table' + (e && e.id ? ' id="' + e.id + '"' : '') + '>';
}
function Mc(t, r) {
  var e = r || {},
    n = e.header != null ? e.header : g_,
    a = e.footer != null ? e.footer : __,
    i = [n],
    s = lr(t['!ref']);
  (e.dense = Array.isArray(t)), i.push(w_(t, s, e));
  for (var o = s.s.r; o <= s.e.r; ++o) i.push(x_(t, s, o, e));
  return i.push('</table>' + a), i.join('');
}
function Lc(t, r, e) {
  var n = e || {},
    a = 0,
    i = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') a = n.origin;
    else {
      var s = typeof n.origin == 'string' ? At(n.origin) : n.origin;
      (a = s.r), (i = s.c);
    }
  var o = r.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, o.length),
    f = { s: { r: 0, c: 0 }, e: { r: a, c: i } };
  if (t['!ref']) {
    var c = lr(t['!ref']);
    (f.s.r = Math.min(f.s.r, c.s.r)),
      (f.s.c = Math.min(f.s.c, c.s.c)),
      (f.e.r = Math.max(f.e.r, c.e.r)),
      (f.e.c = Math.max(f.e.c, c.e.c)),
      a == -1 && (f.e.r = a = c.e.r + 1);
  }
  var d = [],
    u = 0,
    p = t['!rows'] || (t['!rows'] = []),
    v = 0,
    h = 0,
    x = 0,
    D = 0,
    C = 0,
    F = 0;
  for (t['!cols'] || (t['!cols'] = []); v < o.length && h < l; ++v) {
    var k = o[v];
    if (tf(k)) {
      if (n.display) continue;
      p[h] = { hidden: !0 };
    }
    var j = k.children;
    for (x = D = 0; x < j.length; ++x) {
      var te = j[x];
      if (!(n.display && tf(te))) {
        var R = te.hasAttribute('data-v')
            ? te.getAttribute('data-v')
            : te.hasAttribute('v')
              ? te.getAttribute('v')
              : Zd(te.innerHTML),
          H = te.getAttribute('data-z') || te.getAttribute('z');
        for (u = 0; u < d.length; ++u) {
          var L = d[u];
          L.s.c == D + i &&
            L.s.r < h + a &&
            h + a <= L.e.r &&
            ((D = L.e.c + 1 - i), (u = -1));
        }
        (F = +te.getAttribute('colspan') || 1),
          ((C = +te.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            d.push({
              s: { r: h + a, c: D + i },
              e: { r: h + a + (C || 1) - 1, c: D + i + (F || 1) - 1 },
            });
        var X = { t: 's', v: R },
          K = te.getAttribute('data-t') || te.getAttribute('t') || '';
        R != null &&
          (R.length == 0
            ? (X.t = K || 'z')
            : n.raw ||
              R.trim().length == 0 ||
              K == 's' ||
              (R === 'TRUE'
                ? (X = { t: 'b', v: !0 })
                : R === 'FALSE'
                  ? (X = { t: 'b', v: !1 })
                  : isNaN(Kr(R))
                    ? isNaN(Wa(R).getDate()) ||
                      ((X = { t: 'd', v: Yt(R) }),
                      n.cellDates || (X = { t: 'n', v: Zt(X.v) }),
                      (X.z = n.dateNF || dt[14]))
                    : (X = { t: 'n', v: Kr(R) }))),
          X.z === void 0 && H != null && (X.z = H);
        var J = '',
          ie = te.getElementsByTagName('A');
        if (ie && ie.length)
          for (
            var Pe = 0;
            Pe < ie.length &&
            !(
              ie[Pe].hasAttribute('href') &&
              ((J = ie[Pe].getAttribute('href')), J.charAt(0) != '#')
            );
            ++Pe
          );
        J && J.charAt(0) != '#' && (X.l = { Target: J }),
          n.dense
            ? (t[h + a] || (t[h + a] = []), (t[h + a][D + i] = X))
            : (t[$e({ c: D + i, r: h + a })] = X),
          f.e.c < D + i && (f.e.c = D + i),
          (D += F);
      }
    }
    ++h;
  }
  return (
    d.length && (t['!merges'] = (t['!merges'] || []).concat(d)),
    (f.e.r = Math.max(f.e.r, h - 1 + a)),
    (t['!ref'] = _t(f)),
    h >= l && (t['!fullref'] = _t(((f.e.r = o.length - v + h - 1 + a), f))),
    t
  );
}
function Bc(t, r) {
  var e = r || {},
    n = e.dense ? [] : {};
  return Lc(n, t, r);
}
function E_(t, r) {
  return Bn(Bc(t, r), r);
}
function tf(t) {
  var r = '',
    e = T_(t);
  return (
    e && (r = e(t).getPropertyValue('display')),
    r || (r = t.style && t.style.display),
    r === 'none'
  );
}
function T_(t) {
  return t.ownerDocument.defaultView &&
    typeof t.ownerDocument.defaultView.getComputedStyle == 'function'
    ? t.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var y_ = (function () {
    var t = [
        '<office:master-styles>',
        '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
        '<style:header/>',
        '<style:header-left style:display="false"/>',
        '<style:footer/>',
        '<style:footer-left style:display="false"/>',
        '</style:master-page>',
        '</office:master-styles>',
      ].join(''),
      r =
        '<office:document-styles ' +
        ja({
          'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
          'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
          'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
          'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
          'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
          'xmlns:fo':
            'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
          'xmlns:svg':
            'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
          'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
          'office:version': '1.2',
        }) +
        '>' +
        t +
        '</office:document-styles>';
    return function () {
      return wt + r;
    };
  })(),
  rf = (function () {
    var t = function (i) {
        return Ke(i)
          .replace(/  +/g, function (s) {
            return '<text:s text:c="' + s.length + '"/>';
          })
          .replace(/\t/g, '<text:tab/>')
          .replace(/\n/g, '</text:p><text:p>')
          .replace(/^ /, '<text:s/>')
          .replace(/ $/, '<text:s/>');
      },
      r = `          <table:table-cell />
`,
      e = `          <table:covered-table-cell/>
`,
      n = function (i, s, o) {
        var l = [];
        l.push(
          '      <table:table table:name="' +
            Ke(s.SheetNames[o]) +
            `" table:style-name="ta1">
`,
        );
        var f = 0,
          c = 0,
          d = lr(i['!ref'] || 'A1'),
          u = i['!merges'] || [],
          p = 0,
          v = Array.isArray(i);
        if (i['!cols'])
          for (c = 0; c <= d.e.c; ++c)
            l.push(
              '        <table:table-column' +
                (i['!cols'][c]
                  ? ' table:style-name="co' + i['!cols'][c].ods + '"'
                  : '') +
                `></table:table-column>
`,
            );
        var h = '',
          x = i['!rows'] || [];
        for (f = 0; f < d.s.r; ++f)
          (h = x[f] ? ' table:style-name="ro' + x[f].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                h +
                `></table:table-row>
`,
            );
        for (; f <= d.e.r; ++f) {
          for (
            h = x[f] ? ' table:style-name="ro' + x[f].ods + '"' : '',
              l.push(
                '        <table:table-row' +
                  h +
                  `>
`,
              ),
              c = 0;
            c < d.s.c;
            ++c
          )
            l.push(r);
          for (; c <= d.e.c; ++c) {
            var D = !1,
              C = {},
              F = '';
            for (p = 0; p != u.length; ++p)
              if (
                !(u[p].s.c > c) &&
                !(u[p].s.r > f) &&
                !(u[p].e.c < c) &&
                !(u[p].e.r < f)
              ) {
                (u[p].s.c != c || u[p].s.r != f) && (D = !0),
                  (C['table:number-columns-spanned'] = u[p].e.c - u[p].s.c + 1),
                  (C['table:number-rows-spanned'] = u[p].e.r - u[p].s.r + 1);
                break;
              }
            if (D) {
              l.push(e);
              continue;
            }
            var k = $e({ r: f, c }),
              j = v ? (i[f] || [])[c] : i[k];
            if (
              j &&
              j.f &&
              ((C['table:formula'] = Ke(jx(j.f))),
              j.F && j.F.slice(0, k.length) == k)
            ) {
              var te = lr(j.F);
              (C['table:number-matrix-columns-spanned'] = te.e.c - te.s.c + 1),
                (C['table:number-matrix-rows-spanned'] = te.e.r - te.s.r + 1);
            }
            if (!j) {
              l.push(r);
              continue;
            }
            switch (j.t) {
              case 'b':
                (F = j.v ? 'TRUE' : 'FALSE'),
                  (C['office:value-type'] = 'boolean'),
                  (C['office:boolean-value'] = j.v ? 'true' : 'false');
                break;
              case 'n':
                (F = j.w || String(j.v || 0)),
                  (C['office:value-type'] = 'float'),
                  (C['office:value'] = j.v || 0);
                break;
              case 's':
              case 'str':
                (F = j.v == null ? '' : j.v),
                  (C['office:value-type'] = 'string');
                break;
              case 'd':
                (F = j.w || Yt(j.v).toISOString()),
                  (C['office:value-type'] = 'date'),
                  (C['office:date-value'] = Yt(j.v).toISOString()),
                  (C['table:style-name'] = 'ce1');
                break;
              default:
                l.push(r);
                continue;
            }
            var R = t(F);
            if (j.l && j.l.Target) {
              var H = j.l.Target;
              (H = H.charAt(0) == '#' ? '#' + Gx(H.slice(1)) : H),
                H.charAt(0) != '#' && !H.match(/^\w+:/) && (H = '../' + H),
                (R = se('text:a', R, {
                  'xlink:href': H.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                se('table:table-cell', se('text:p', R, {}), C) +
                `
`,
            );
          }
          l.push(`        </table:table-row>
`);
        }
        return (
          l.push(`      </table:table>
`),
          l.join('')
        );
      },
      a = function (i, s) {
        i.push(` <office:automatic-styles>
`),
          i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),
          i.push(`   <number:month number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:day number:style="long"/>
`),
          i.push(`   <number:text>/</number:text>
`),
          i.push(`   <number:year/>
`),
          i.push(`  </number:date-style>
`);
        var o = 0;
        s.SheetNames.map(function (f) {
          return s.Sheets[f];
        }).forEach(function (f) {
          if (f && f['!cols']) {
            for (var c = 0; c < f['!cols'].length; ++c)
              if (f['!cols'][c]) {
                var d = f['!cols'][c];
                if (d.width == null && d.wpx == null && d.wch == null) continue;
                R0(d), (d.ods = o);
                var u = f['!cols'][c].wpx + 'px';
                i.push(
                  '  <style:style style:name="co' +
                    o +
                    `" style:family="table-column">
`,
                ),
                  i.push(
                    '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                      u +
                      `"/>
`,
                  ),
                  i.push(`  </style:style>
`),
                  ++o;
              }
          }
        });
        var l = 0;
        s.SheetNames.map(function (f) {
          return s.Sheets[f];
        }).forEach(function (f) {
          if (f && f['!rows']) {
            for (var c = 0; c < f['!rows'].length; ++c)
              if (f['!rows'][c]) {
                f['!rows'][c].ods = l;
                var d = f['!rows'][c].hpx + 'px';
                i.push(
                  '  <style:style style:name="ro' +
                    l +
                    `" style:family="table-row">
`,
                ),
                  i.push(
                    '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                      d +
                      `"/>
`,
                  ),
                  i.push(`  </style:style>
`),
                  ++l;
              }
          }
        }),
          i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),
          i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),
          i.push(`  </style:style>
`),
          i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),
          i.push(` </office:automatic-styles>
`);
      };
    return function (s, o) {
      var l = [wt],
        f = ja({
          'xmlns:office': 'urn:oasis:names:tc:opendocument:xmlns:office:1.0',
          'xmlns:table': 'urn:oasis:names:tc:opendocument:xmlns:table:1.0',
          'xmlns:style': 'urn:oasis:names:tc:opendocument:xmlns:style:1.0',
          'xmlns:text': 'urn:oasis:names:tc:opendocument:xmlns:text:1.0',
          'xmlns:draw': 'urn:oasis:names:tc:opendocument:xmlns:drawing:1.0',
          'xmlns:fo':
            'urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
          'xmlns:meta': 'urn:oasis:names:tc:opendocument:xmlns:meta:1.0',
          'xmlns:number': 'urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0',
          'xmlns:presentation':
            'urn:oasis:names:tc:opendocument:xmlns:presentation:1.0',
          'xmlns:svg':
            'urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0',
          'xmlns:chart': 'urn:oasis:names:tc:opendocument:xmlns:chart:1.0',
          'xmlns:dr3d': 'urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0',
          'xmlns:math': 'http://www.w3.org/1998/Math/MathML',
          'xmlns:form': 'urn:oasis:names:tc:opendocument:xmlns:form:1.0',
          'xmlns:script': 'urn:oasis:names:tc:opendocument:xmlns:script:1.0',
          'xmlns:ooo': 'http://openoffice.org/2004/office',
          'xmlns:ooow': 'http://openoffice.org/2004/writer',
          'xmlns:oooc': 'http://openoffice.org/2004/calc',
          'xmlns:dom': 'http://www.w3.org/2001/xml-events',
          'xmlns:xforms': 'http://www.w3.org/2002/xforms',
          'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xmlns:sheet': 'urn:oasis:names:tc:opendocument:sh33tjs:1.0',
          'xmlns:rpt': 'http://openoffice.org/2005/report',
          'xmlns:of': 'urn:oasis:names:tc:opendocument:xmlns:of:1.2',
          'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
          'xmlns:grddl': 'http://www.w3.org/2003/g/data-view#',
          'xmlns:tableooo': 'http://openoffice.org/2009/table',
          'xmlns:drawooo': 'http://openoffice.org/2010/draw',
          'xmlns:calcext':
            'urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0',
          'xmlns:loext':
            'urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0',
          'xmlns:field':
            'urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0',
          'xmlns:formx':
            'urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0',
          'xmlns:css3t': 'http://www.w3.org/TR/css3-text/',
          'office:version': '1.2',
        }),
        c = ja({
          'xmlns:config': 'urn:oasis:names:tc:opendocument:xmlns:config:1.0',
          'office:mimetype': 'application/vnd.oasis.opendocument.spreadsheet',
        });
      o.bookType == 'fods'
        ? (l.push(
            '<office:document' +
              f +
              c +
              `>
`,
          ),
          l.push(Ql().replace(/office:document-meta/g, 'office:meta')))
        : l.push(
            '<office:document-content' +
              f +
              `>
`,
          ),
        a(l, s),
        l.push(`  <office:body>
`),
        l.push(`    <office:spreadsheet>
`);
      for (var d = 0; d != s.SheetNames.length; ++d)
        l.push(n(s.Sheets[s.SheetNames[d]], s, d));
      return (
        l.push(`    </office:spreadsheet>
`),
        l.push(`  </office:body>
`),
        o.bookType == 'fods'
          ? l.push('</office:document>')
          : l.push('</office:document-content>'),
        l.join('')
      );
    };
  })();
function Uc(t, r) {
  if (r.bookType == 'fods') return rf(t, r);
  var e = w0(),
    n = '',
    a = [],
    i = [];
  return (
    (n = 'mimetype'),
    Ie(e, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    Ie(e, n, rf(t, r)),
    a.push([n, 'text/xml']),
    i.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    Ie(e, n, y_(t, r)),
    a.push([n, 'text/xml']),
    i.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    Ie(e, n, wt + Ql()),
    a.push([n, 'text/xml']),
    i.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    Ie(e, n, Pp(i)),
    a.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    Ie(e, n, Ip(a)),
    e
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function Yi(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function S_(t) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(t) : Fr(Va(t));
}
function A_(t, r) {
  e: for (var e = 0; e <= t.length - r.length; ++e) {
    for (var n = 0; n < r.length; ++n) if (t[e + n] != r[n]) continue e;
    return !0;
  }
  return !1;
}
function mn(t) {
  var r = t.reduce(function (a, i) {
      return a + i.length;
    }, 0),
    e = new Uint8Array(r),
    n = 0;
  return (
    t.forEach(function (a) {
      e.set(a, n), (n += a.length);
    }),
    e
  );
}
function F_(t, r, e) {
  var n =
      Math.floor(e == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(e))) + 6176 - 20,
    a = e / Math.pow(10, n - 6176);
  (t[r + 15] |= n >> 7), (t[r + 14] |= (n & 127) << 1);
  for (var i = 0; a >= 1; ++i, a /= 256) t[r + i] = a & 255;
  t[r + 15] |= e >= 0 ? 0 : 128;
}
function Ga(t, r) {
  var e = r ? r[0] : 0,
    n = t[e] & 127;
  e: if (
    t[e++] >= 128 &&
    ((n |= (t[e] & 127) << 7),
    t[e++] < 128 ||
      ((n |= (t[e] & 127) << 14), t[e++] < 128) ||
      ((n |= (t[e] & 127) << 21), t[e++] < 128) ||
      ((n += (t[e] & 127) * Math.pow(2, 28)), ++e, t[e++] < 128) ||
      ((n += (t[e] & 127) * Math.pow(2, 35)), ++e, t[e++] < 128) ||
      ((n += (t[e] & 127) * Math.pow(2, 42)), ++e, t[e++] < 128))
  )
    break e;
  return r && (r[0] = e), n;
}
function Ye(t) {
  var r = new Uint8Array(7);
  r[0] = t & 127;
  var e = 1;
  e: if (t > 127) {
    if (
      ((r[e - 1] |= 128),
      (r[e] = (t >> 7) & 127),
      ++e,
      t <= 16383 ||
        ((r[e - 1] |= 128), (r[e] = (t >> 14) & 127), ++e, t <= 2097151) ||
        ((r[e - 1] |= 128), (r[e] = (t >> 21) & 127), ++e, t <= 268435455) ||
        ((r[e - 1] |= 128),
        (r[e] = ((t / 256) >>> 21) & 127),
        ++e,
        t <= 34359738367) ||
        ((r[e - 1] |= 128),
        (r[e] = ((t / 65536) >>> 21) & 127),
        ++e,
        t <= 4398046511103))
    )
      break e;
    (r[e - 1] |= 128), (r[e] = ((t / 16777216) >>> 21) & 127), ++e;
  }
  return r.slice(0, e);
}
function aa(t) {
  var r = 0,
    e = t[r] & 127;
  e: if (t[r++] >= 128) {
    if (
      ((e |= (t[r] & 127) << 7),
      t[r++] < 128 ||
        ((e |= (t[r] & 127) << 14), t[r++] < 128) ||
        ((e |= (t[r] & 127) << 21), t[r++] < 128))
    )
      break e;
    e |= (t[r] & 127) << 28;
  }
  return e;
}
function Tt(t) {
  for (var r = [], e = [0]; e[0] < t.length; ) {
    var n = e[0],
      a = Ga(t, e),
      i = a & 7;
    a = Math.floor(a / 8);
    var s = 0,
      o;
    if (a == 0) break;
    switch (i) {
      case 0:
        {
          for (var l = e[0]; t[e[0]++] >= 128; );
          o = t.slice(l, e[0]);
        }
        break;
      case 5:
        (s = 4), (o = t.slice(e[0], e[0] + s)), (e[0] += s);
        break;
      case 1:
        (s = 8), (o = t.slice(e[0], e[0] + s)), (e[0] += s);
        break;
      case 2:
        (s = Ga(t, e)), (o = t.slice(e[0], e[0] + s)), (e[0] += s);
        break;
      case 3:
      case 4:
      default:
        throw new Error(
          'PB Type '
            .concat(i, ' for Field ')
            .concat(a, ' at offset ')
            .concat(n),
        );
    }
    var f = { data: o, type: i };
    r[a] == null ? (r[a] = [f]) : r[a].push(f);
  }
  return r;
}
function Ot(t) {
  var r = [];
  return (
    t.forEach(function (e, n) {
      e.forEach(function (a) {
        a.data &&
          (r.push(Ye(n * 8 + a.type)),
          a.type == 2 && r.push(Ye(a.data.length)),
          r.push(a.data));
      });
    }),
    mn(r)
  );
}
function Sr(t) {
  for (var r, e = [], n = [0]; n[0] < t.length; ) {
    var a = Ga(t, n),
      i = Tt(t.slice(n[0], n[0] + a));
    n[0] += a;
    var s = { id: aa(i[1][0].data), messages: [] };
    i[2].forEach(function (o) {
      var l = Tt(o.data),
        f = aa(l[3][0].data);
      s.messages.push({ meta: l, data: t.slice(n[0], n[0] + f) }), (n[0] += f);
    }),
      (r = i[3]) != null && r[0] && (s.merge = aa(i[3][0].data) >>> 0 > 0),
      e.push(s);
  }
  return e;
}
function Jn(t) {
  var r = [];
  return (
    t.forEach(function (e) {
      var n = [];
      (n[1] = [{ data: Ye(e.id), type: 0 }]),
        (n[2] = []),
        e.merge != null && (n[3] = [{ data: Ye(+!!e.merge), type: 0 }]);
      var a = [];
      e.messages.forEach(function (s) {
        a.push(s.data),
          (s.meta[3] = [{ type: 0, data: Ye(s.data.length) }]),
          n[2].push({ data: Ot(s.meta), type: 2 });
      });
      var i = Ot(n);
      r.push(Ye(i.length)),
        r.push(i),
        a.forEach(function (s) {
          return r.push(s);
        });
    }),
    mn(r)
  );
}
function C_(t, r) {
  if (t != 0) throw new Error('Unexpected Snappy chunk type '.concat(t));
  for (var e = [0], n = Ga(r, e), a = []; e[0] < r.length; ) {
    var i = r[e[0]] & 3;
    if (i == 0) {
      var s = r[e[0]++] >> 2;
      if (s < 60) ++s;
      else {
        var o = s - 59;
        (s = r[e[0]]),
          o > 1 && (s |= r[e[0] + 1] << 8),
          o > 2 && (s |= r[e[0] + 2] << 16),
          o > 3 && (s |= r[e[0] + 3] << 24),
          (s >>>= 0),
          s++,
          (e[0] += o);
      }
      a.push(r.slice(e[0], e[0] + s)), (e[0] += s);
      continue;
    } else {
      var l = 0,
        f = 0;
      if (
        (i == 1
          ? ((f = ((r[e[0]] >> 2) & 7) + 4),
            (l = (r[e[0]++] & 224) << 3),
            (l |= r[e[0]++]))
          : ((f = (r[e[0]++] >> 2) + 1),
            i == 2
              ? ((l = r[e[0]] | (r[e[0] + 1] << 8)), (e[0] += 2))
              : ((l =
                  (r[e[0]] |
                    (r[e[0] + 1] << 8) |
                    (r[e[0] + 2] << 16) |
                    (r[e[0] + 3] << 24)) >>>
                  0),
                (e[0] += 4))),
        (a = [mn(a)]),
        l == 0)
      )
        throw new Error('Invalid offset 0');
      if (l > a[0].length) throw new Error('Invalid offset beyond length');
      if (f >= l)
        for (a.push(a[0].slice(-l)), f -= l; f >= a[a.length - 1].length; )
          a.push(a[a.length - 1]), (f -= a[a.length - 1].length);
      a.push(a[0].slice(-l, -l + f));
    }
  }
  var c = mn(a);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Ar(t) {
  for (var r = [], e = 0; e < t.length; ) {
    var n = t[e++],
      a = t[e] | (t[e + 1] << 8) | (t[e + 2] << 16);
    (e += 3), r.push(C_(n, t.slice(e, e + a))), (e += a);
  }
  if (e !== t.length) throw new Error('data is not a valid framed stream!');
  return mn(r);
}
function Zn(t) {
  for (var r = [], e = 0; e < t.length; ) {
    var n = Math.min(t.length - e, 268435455),
      a = new Uint8Array(4);
    r.push(a);
    var i = Ye(n),
      s = i.length;
    r.push(i),
      n <= 60
        ? (s++, r.push(new Uint8Array([(n - 1) << 2])))
        : n <= 256
          ? ((s += 2), r.push(new Uint8Array([240, (n - 1) & 255])))
          : n <= 65536
            ? ((s += 3),
              r.push(
                new Uint8Array([244, (n - 1) & 255, ((n - 1) >> 8) & 255]),
              ))
            : n <= 16777216
              ? ((s += 4),
                r.push(
                  new Uint8Array([
                    248,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                  ]),
                ))
              : n <= 4294967296 &&
                ((s += 5),
                r.push(
                  new Uint8Array([
                    252,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                    ((n - 1) >>> 24) & 255,
                  ]),
                )),
      r.push(t.slice(e, e + n)),
      (s += n),
      (a[0] = 0),
      (a[1] = s & 255),
      (a[2] = (s >> 8) & 255),
      (a[3] = (s >> 16) & 255),
      (e += n);
  }
  return mn(r);
}
function Cs(t, r) {
  var e = new Uint8Array(32),
    n = Yi(e),
    a = 12,
    i = 0;
  switch (((e[0] = 5), t.t)) {
    case 'n':
      (e[1] = 2), F_(e, a, t.v), (i |= 1), (a += 16);
      break;
    case 'b':
      (e[1] = 6), n.setFloat64(a, t.v ? 1 : 0, !0), (i |= 2), (a += 8);
      break;
    case 's':
      if (r.indexOf(t.v) == -1)
        throw new Error('Value '.concat(t.v, ' missing from SST!'));
      (e[1] = 3), n.setUint32(a, r.indexOf(t.v), !0), (i |= 8), (a += 4);
      break;
    default:
      throw 'unsupported cell type ' + t.t;
  }
  return n.setUint32(8, i, !0), e.slice(0, a);
}
function Ds(t, r) {
  var e = new Uint8Array(32),
    n = Yi(e),
    a = 12,
    i = 0;
  switch (((e[0] = 3), t.t)) {
    case 'n':
      (e[2] = 2), n.setFloat64(a, t.v, !0), (i |= 32), (a += 8);
      break;
    case 'b':
      (e[2] = 6), n.setFloat64(a, t.v ? 1 : 0, !0), (i |= 32), (a += 8);
      break;
    case 's':
      if (r.indexOf(t.v) == -1)
        throw new Error('Value '.concat(t.v, ' missing from SST!'));
      (e[2] = 3), n.setUint32(a, r.indexOf(t.v), !0), (i |= 16), (a += 4);
      break;
    default:
      throw 'unsupported cell type ' + t.t;
  }
  return n.setUint32(4, i, !0), e.slice(0, a);
}
function an(t) {
  var r = Tt(t);
  return Ga(r[1][0].data);
}
function D_(t, r, e) {
  var n, a, i, s;
  if (!((n = t[6]) != null && n[0]) || !((a = t[7]) != null && a[0]))
    throw 'Mutation only works on post-BNC storages!';
  var o =
    (((s = (i = t[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) &&
      aa(t[8][0].data) > 0) ||
    !1;
  if (o) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      f = Yi(t[7][0].data),
      c = 0,
      d = [],
      u = Yi(t[4][0].data),
      p = 0,
      v = [],
      h = 0;
    h < r.length;
    ++h
  ) {
    if (r[h] == null) {
      f.setUint16(h * 2, 65535, !0), u.setUint16(h * 2, 65535);
      continue;
    }
    f.setUint16(h * 2, c, !0), u.setUint16(h * 2, p, !0);
    var x, D;
    switch (typeof r[h]) {
      case 'string':
        (x = Cs({ t: 's', v: r[h] }, e)), (D = Ds({ t: 's', v: r[h] }, e));
        break;
      case 'number':
        (x = Cs({ t: 'n', v: r[h] }, e)), (D = Ds({ t: 'n', v: r[h] }, e));
        break;
      case 'boolean':
        (x = Cs({ t: 'b', v: r[h] }, e)), (D = Ds({ t: 'b', v: r[h] }, e));
        break;
      default:
        throw new Error('Unsupported value ' + r[h]);
    }
    d.push(x), (c += x.length), v.push(D), (p += D.length), ++l;
  }
  for (t[2][0].data = Ye(l); h < t[7][0].data.length / 2; ++h)
    f.setUint16(h * 2, 65535, !0), u.setUint16(h * 2, 65535, !0);
  return (t[6][0].data = mn(d)), (t[3][0].data = mn(v)), l;
}
function O_(t, r) {
  if (!r || !r.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var e = t.Sheets[t.SheetNames[0]];
  t.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = lr(e['!ref']);
  n.s.r = n.s.c = 0;
  var a = !1;
  n.e.c > 9 && ((a = !0), (n.e.c = 9)),
    n.e.r > 49 && ((a = !0), (n.e.r = 49)),
    a &&
      console.error(
        'The Numbers writer is currently limited to '.concat(_t(n)),
      );
  var i = Xi(e, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  i.forEach(function (U) {
    return U.forEach(function (I) {
      typeof I == 'string' && s.push(I);
    });
  });
  var o = {},
    l = [],
    f = Ze.read(r.numbers, { type: 'base64' });
  f.FileIndex.map(function (U, I) {
    return [U, f.FullPaths[I]];
  }).forEach(function (U) {
    var I = U[0],
      O = U[1];
    if (I.type == 2 && I.name.match(/\.iwa/)) {
      var z = I.content,
        ge = Ar(z),
        _e = Sr(ge);
      _e.forEach(function (xe) {
        l.push(xe.id),
          (o[xe.id] = {
            deps: [],
            location: O,
            type: aa(xe.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (U, I) {
      return U - I;
    });
  var c = l
    .filter(function (U) {
      return U > 1;
    })
    .map(function (U) {
      return [U, Ye(U)];
    });
  f.FileIndex.map(function (U, I) {
    return [U, f.FullPaths[I]];
  }).forEach(function (U) {
    var I = U[0];
    if ((U[1], !!I.name.match(/\.iwa/))) {
      var O = Sr(Ar(I.content));
      O.forEach(function (z) {
        z.messages.forEach(function (ge) {
          c.forEach(function (_e) {
            z.messages.some(function (xe) {
              return aa(xe.meta[1][0].data) != 11006 && A_(xe.data, _e[1]);
            }) && o[_e[0]].deps.push(z.id);
          });
        });
      });
    }
  });
  for (
    var d = Ze.find(f, o[1].location), u = Sr(Ar(d.content)), p, v = 0;
    v < u.length;
    ++v
  ) {
    var h = u[v];
    h.id == 1 && (p = h);
  }
  var x = an(Tt(p.messages[0].data)[1][0].data);
  for (
    d = Ze.find(f, o[x].location), u = Sr(Ar(d.content)), v = 0;
    v < u.length;
    ++v
  )
    (h = u[v]), h.id == x && (p = h);
  for (
    x = an(Tt(p.messages[0].data)[2][0].data),
      d = Ze.find(f, o[x].location),
      u = Sr(Ar(d.content)),
      v = 0;
    v < u.length;
    ++v
  )
    (h = u[v]), h.id == x && (p = h);
  for (
    x = an(Tt(p.messages[0].data)[2][0].data),
      d = Ze.find(f, o[x].location),
      u = Sr(Ar(d.content)),
      v = 0;
    v < u.length;
    ++v
  )
    (h = u[v]), h.id == x && (p = h);
  var D = Tt(p.messages[0].data);
  {
    (D[6][0].data = Ye(n.e.r + 1)), (D[7][0].data = Ye(n.e.c + 1));
    var C = an(D[46][0].data),
      F = Ze.find(f, o[C].location),
      k = Sr(Ar(F.content));
    {
      for (var j = 0; j < k.length && k[j].id != C; ++j);
      if (k[j].id != C) throw 'Bad ColumnRowUIDMapArchive';
      var te = Tt(k[j].messages[0].data);
      (te[1] = []), (te[2] = []), (te[3] = []);
      for (var R = 0; R <= n.e.c; ++R) {
        var H = [];
        (H[1] = H[2] = [{ type: 0, data: Ye(R + 420690) }]),
          te[1].push({ type: 2, data: Ot(H) }),
          te[2].push({ type: 0, data: Ye(R) }),
          te[3].push({ type: 0, data: Ye(R) });
      }
      (te[4] = []), (te[5] = []), (te[6] = []);
      for (var L = 0; L <= n.e.r; ++L)
        (H = []),
          (H[1] = H[2] = [{ type: 0, data: Ye(L + 726270) }]),
          te[4].push({ type: 2, data: Ot(H) }),
          te[5].push({ type: 0, data: Ye(L) }),
          te[6].push({ type: 0, data: Ye(L) });
      k[j].messages[0].data = Ot(te);
    }
    (F.content = Zn(Jn(k))), (F.size = F.content.length), delete D[46];
    var X = Tt(D[4][0].data);
    {
      X[7][0].data = Ye(n.e.r + 1);
      var K = Tt(X[1][0].data),
        J = an(K[2][0].data);
      (F = Ze.find(f, o[J].location)), (k = Sr(Ar(F.content)));
      {
        if (k[0].id != J) throw 'Bad HeaderStorageBucket';
        var ie = Tt(k[0].messages[0].data);
        for (L = 0; L < i.length; ++L) {
          var Pe = Tt(ie[2][0].data);
          (Pe[1][0].data = Ye(L)),
            (Pe[4][0].data = Ye(i[L].length)),
            (ie[2][L] = { type: ie[2][0].type, data: Ot(Pe) });
        }
        k[0].messages[0].data = Ot(ie);
      }
      (F.content = Zn(Jn(k))), (F.size = F.content.length);
      var Ce = an(X[2][0].data);
      (F = Ze.find(f, o[Ce].location)), (k = Sr(Ar(F.content)));
      {
        if (k[0].id != Ce) throw 'Bad HeaderStorageBucket';
        for (ie = Tt(k[0].messages[0].data), R = 0; R <= n.e.c; ++R)
          (Pe = Tt(ie[2][0].data)),
            (Pe[1][0].data = Ye(R)),
            (Pe[4][0].data = Ye(n.e.r + 1)),
            (ie[2][R] = { type: ie[2][0].type, data: Ot(Pe) });
        k[0].messages[0].data = Ot(ie);
      }
      (F.content = Zn(Jn(k))), (F.size = F.content.length);
      var ot = an(X[4][0].data);
      (function () {
        for (
          var U = Ze.find(f, o[ot].location), I = Sr(Ar(U.content)), O, z = 0;
          z < I.length;
          ++z
        ) {
          var ge = I[z];
          ge.id == ot && (O = ge);
        }
        var _e = Tt(O.messages[0].data);
        {
          _e[3] = [];
          var xe = [];
          s.forEach(function (ke, Et) {
            (xe[1] = [{ type: 0, data: Ye(Et) }]),
              (xe[2] = [{ type: 0, data: Ye(1) }]),
              (xe[3] = [{ type: 2, data: S_(ke) }]),
              _e[3].push({ type: 2, data: Ot(xe) });
          });
        }
        O.messages[0].data = Ot(_e);
        var le = Jn(I),
          Le = Zn(le);
        (U.content = Le), (U.size = U.content.length);
      })();
      var ze = Tt(X[3][0].data);
      {
        var pt = ze[1][0];
        delete ze[2];
        var qe = Tt(pt.data);
        {
          var mt = an(qe[2][0].data);
          (function () {
            for (
              var U = Ze.find(f, o[mt].location),
                I = Sr(Ar(U.content)),
                O,
                z = 0;
              z < I.length;
              ++z
            ) {
              var ge = I[z];
              ge.id == mt && (O = ge);
            }
            var _e = Tt(O.messages[0].data);
            {
              delete _e[6], delete ze[7];
              var xe = new Uint8Array(_e[5][0].data);
              _e[5] = [];
              for (var le = 0, Le = 0; Le <= n.e.r; ++Le) {
                var ke = Tt(xe);
                (le += D_(ke, i[Le], s)),
                  (ke[1][0].data = Ye(Le)),
                  _e[5].push({ data: Ot(ke), type: 2 });
              }
              (_e[1] = [{ type: 0, data: Ye(n.e.c + 1) }]),
                (_e[2] = [{ type: 0, data: Ye(n.e.r + 1) }]),
                (_e[3] = [{ type: 0, data: Ye(le) }]),
                (_e[4] = [{ type: 0, data: Ye(n.e.r + 1) }]);
            }
            O.messages[0].data = Ot(_e);
            var Et = Jn(I),
              Be = Zn(Et);
            (U.content = Be), (U.size = U.content.length);
          })();
        }
        pt.data = Ot(qe);
      }
      X[3][0].data = Ot(ze);
    }
    D[4][0].data = Ot(X);
  }
  p.messages[0].data = Ot(D);
  var ft = Jn(u),
    A = Zn(ft);
  return (d.content = A), (d.size = d.content.length), f;
}
function N_(t) {
  return function (e) {
    for (var n = 0; n != t.length; ++n) {
      var a = t[n];
      e[a[0]] === void 0 && (e[a[0]] = a[1]),
        a[2] === 'n' && (e[a[0]] = Number(e[a[0]]));
    }
  };
}
function M0(t) {
  N_([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(t);
}
function R_(t, r) {
  return r.bookType == 'ods'
    ? Uc(t, r)
    : r.bookType == 'numbers'
      ? O_(t, r)
      : r.bookType == 'xlsb'
        ? k_(t, r)
        : I_(t, r);
}
function k_(t, r) {
  (ea = 1024),
    t && !t.SSF && (t.SSF = Qt(dt)),
    t &&
      t.SSF &&
      (fs(),
      os(t.SSF),
      (r.revssf = ls(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    ka
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var e = r.bookType == 'xlsb' ? 'bin' : 'xml',
    n = Ec.indexOf(r.bookType) > -1,
    a = ql();
  M0((r = r || {}));
  var i = w0(),
    s = '',
    o = 0;
  if (
    ((r.cellXfs = []),
    xn(r.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {}),
    (s = 'docProps/core.xml'),
    Ie(i, s, ec(t.Props, r)),
    a.coreprops.push(s),
    Xe(r.rels, 2, s, He.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(t.Props && t.Props.SheetNames))
  )
    if (!t.Workbook || !t.Workbook.Sheets) t.Props.SheetNames = t.SheetNames;
    else {
      for (var l = [], f = 0; f < t.SheetNames.length; ++f)
        (t.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(t.SheetNames[f]);
      t.Props.SheetNames = l;
    }
  for (
    t.Props.Worksheets = t.Props.SheetNames.length,
      Ie(i, s, rc(t.Props)),
      a.extprops.push(s),
      Xe(r.rels, 3, s, He.EXT_PROPS),
      t.Custprops !== t.Props &&
        bt(t.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        Ie(i, s, nc(t.Custprops)),
        a.custprops.push(s),
        Xe(r.rels, 4, s, He.CUST_PROPS)),
      o = 1;
    o <= t.SheetNames.length;
    ++o
  ) {
    var c = { '!id': {} },
      d = t.Sheets[t.SheetNames[o - 1]],
      u = (d || {})['!type'] || 'sheet';
    switch (u) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + o + '.' + e),
          Ie(i, s, P2(o - 1, s, r, t, c)),
          a.sheets.push(s),
          Xe(r.wbrels, -1, 'worksheets/sheet' + o + '.' + e, He.WS[0]);
    }
    if (d) {
      var p = d['!comments'],
        v = !1,
        h = '';
      p &&
        p.length > 0 &&
        ((h = 'xl/comments' + o + '.' + e),
        Ie(i, h, B2(p, h)),
        a.comments.push(h),
        Xe(c, -1, '../comments' + o + '.' + e, He.CMNT),
        (v = !0)),
        d['!legacy'] &&
          v &&
          Ie(i, 'xl/drawings/vmlDrawing' + o + '.vml', _c(o, d['!comments'])),
        delete d['!comments'],
        delete d['!legacy'];
    }
    c['!id'].rId1 && Ie(i, Zl(s), ra(c));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + e),
      Ie(i, s, L2(r.Strings, s, r)),
      a.strs.push(s),
      Xe(r.wbrels, -1, 'sharedStrings.' + e, He.SST)),
    (s = 'xl/workbook.' + e),
    Ie(i, s, b2(t, s)),
    a.workbooks.push(s),
    Xe(r.rels, 1, s, He.WB),
    (s = 'xl/theme/theme1.xml'),
    Ie(i, s, xc(t.Themes, r)),
    a.themes.push(s),
    Xe(r.wbrels, -1, 'theme/theme1.xml', He.THEME),
    (s = 'xl/styles.' + e),
    Ie(i, s, M2(t, s, r)),
    a.styles.push(s),
    Xe(r.wbrels, -1, 'styles.' + e, He.STY),
    t.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      Ie(i, s, t.vbaraw),
      a.vba.push(s),
      Xe(r.wbrels, -1, 'vbaProject.bin', He.VBA)),
    (s = 'xl/metadata.' + e),
    Ie(i, s, U2(s)),
    a.metadata.push(s),
    Xe(r.wbrels, -1, 'metadata.' + e, He.XLMETA),
    Ie(i, '[Content_Types].xml', Jl(a, r)),
    Ie(i, '_rels/.rels', ra(r.rels)),
    Ie(i, 'xl/_rels/workbook.' + e + '.rels', ra(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    i
  );
}
function I_(t, r) {
  (ea = 1024),
    t && !t.SSF && (t.SSF = Qt(dt)),
    t &&
      t.SSF &&
      (fs(),
      os(t.SSF),
      (r.revssf = ls(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    ka
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var e = 'xml',
    n = Ec.indexOf(r.bookType) > -1,
    a = ql();
  M0((r = r || {}));
  var i = w0(),
    s = '',
    o = 0;
  if (
    ((r.cellXfs = []),
    xn(r.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {}),
    (s = 'docProps/core.xml'),
    Ie(i, s, ec(t.Props, r)),
    a.coreprops.push(s),
    Xe(r.rels, 2, s, He.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(t.Props && t.Props.SheetNames))
  )
    if (!t.Workbook || !t.Workbook.Sheets) t.Props.SheetNames = t.SheetNames;
    else {
      for (var l = [], f = 0; f < t.SheetNames.length; ++f)
        (t.Workbook.Sheets[f] || {}).Hidden != 2 && l.push(t.SheetNames[f]);
      t.Props.SheetNames = l;
    }
  (t.Props.Worksheets = t.Props.SheetNames.length),
    Ie(i, s, rc(t.Props)),
    a.extprops.push(s),
    Xe(r.rels, 3, s, He.EXT_PROPS),
    t.Custprops !== t.Props &&
      bt(t.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      Ie(i, s, nc(t.Custprops)),
      a.custprops.push(s),
      Xe(r.rels, 4, s, He.CUST_PROPS));
  var c = ['SheetJ5'];
  for (r.tcid = 0, o = 1; o <= t.SheetNames.length; ++o) {
    var d = { '!id': {} },
      u = t.Sheets[t.SheetNames[o - 1]],
      p = (u || {})['!type'] || 'sheet';
    switch (p) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + o + '.' + e),
          Ie(i, s, Nc(o - 1, r, t, d)),
          a.sheets.push(s),
          Xe(r.wbrels, -1, 'worksheets/sheet' + o + '.' + e, He.WS[0]);
    }
    if (u) {
      var v = u['!comments'],
        h = !1,
        x = '';
      if (v && v.length > 0) {
        var D = !1;
        v.forEach(function (C) {
          C[1].forEach(function (F) {
            F.T == !0 && (D = !0);
          });
        }),
          D &&
            ((x = 'xl/threadedComments/threadedComment' + o + '.' + e),
            Ie(i, x, cm(v, c, r)),
            a.threadedcomments.push(x),
            Xe(
              d,
              -1,
              '../threadedComments/threadedComment' + o + '.' + e,
              He.TCMNT,
            )),
          (x = 'xl/comments' + o + '.' + e),
          Ie(i, x, wc(v)),
          a.comments.push(x),
          Xe(d, -1, '../comments' + o + '.' + e, He.CMNT),
          (h = !0);
      }
      u['!legacy'] &&
        h &&
        Ie(i, 'xl/drawings/vmlDrawing' + o + '.vml', _c(o, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    d['!id'].rId1 && Ie(i, Zl(s), ra(d));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + e),
      Ie(i, s, uc(r.Strings, r)),
      a.strs.push(s),
      Xe(r.wbrels, -1, 'sharedStrings.' + e, He.SST)),
    (s = 'xl/workbook.' + e),
    Ie(i, s, Ic(t)),
    a.workbooks.push(s),
    Xe(r.rels, 1, s, He.WB),
    (s = 'xl/theme/theme1.xml'),
    Ie(i, s, xc(t.Themes, r)),
    a.themes.push(s),
    Xe(r.wbrels, -1, 'theme/theme1.xml', He.THEME),
    (s = 'xl/styles.' + e),
    Ie(i, s, vc(t, r)),
    a.styles.push(s),
    Xe(r.wbrels, -1, 'styles.' + e, He.STY),
    t.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      Ie(i, s, t.vbaraw),
      a.vba.push(s),
      Xe(r.wbrels, -1, 'vbaProject.bin', He.VBA)),
    (s = 'xl/metadata.' + e),
    Ie(i, s, gc()),
    a.metadata.push(s),
    Xe(r.wbrels, -1, 'metadata.' + e, He.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      Ie(i, s, um(c)),
      a.people.push(s),
      Xe(r.wbrels, -1, 'persons/person.xml', He.PEOPLE)),
    Ie(i, '[Content_Types].xml', Jl(a, r)),
    Ie(i, '_rels/.rels', ra(r.rels)),
    Ie(i, 'xl/_rels/workbook.' + e + '.rels', ra(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    i
  );
}
function b_(t, r) {
  var e = '';
  switch ((r || {}).type || 'base64') {
    case 'buffer':
      return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]];
    case 'base64':
      e = qr(t.slice(0, 12));
      break;
    case 'binary':
      e = t;
      break;
    case 'array':
      return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]];
    default:
      throw new Error('Unrecognized type ' + ((r && r.type) || 'undefined'));
  }
  return [
    e.charCodeAt(0),
    e.charCodeAt(1),
    e.charCodeAt(2),
    e.charCodeAt(3),
    e.charCodeAt(4),
    e.charCodeAt(5),
    e.charCodeAt(6),
    e.charCodeAt(7),
  ];
}
function Hc(t, r) {
  switch (r.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      r.type = '';
      break;
    case 'file':
      return Qa(r.file, Ze.write(t, { type: je ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + r.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
  return Ze.write(t, r);
}
function P_(t, r) {
  var e = Qt(r || {}),
    n = R_(t, e);
  return M_(n, e);
}
function M_(t, r) {
  var e = {},
    n = je ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
  if ((r.compression && (e.compression = 'DEFLATE'), r.password)) e.type = n;
  else
    switch (r.type) {
      case 'base64':
        e.type = 'base64';
        break;
      case 'binary':
        e.type = 'string';
        break;
      case 'string':
        throw new Error(
          "'string' output type invalid for '" + r.bookType + "' files",
        );
      case 'buffer':
      case 'file':
        e.type = n;
        break;
      default:
        throw new Error('Unrecognized type ' + r.type);
    }
  var a = t.FullPaths
    ? Ze.write(t, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[e.type] || e.type,
        compression: !!r.compression,
      })
    : t.generate(e);
  if (typeof Deno < 'u' && typeof a == 'string') {
    if (r.type == 'binary' || r.type == 'base64') return a;
    a = new Uint8Array(ss(a));
  }
  return r.password && typeof encrypt_agile < 'u'
    ? Hc(encrypt_agile(a, r.password), r)
    : r.type === 'file'
      ? Qa(r.file, a)
      : r.type == 'string'
        ? Da(a)
        : a;
}
function L_(t, r) {
  var e = r || {},
    n = Q2(t, e);
  return Hc(n, e);
}
function Ir(t, r, e) {
  e || (e = '');
  var n = e + t;
  switch (r.type) {
    case 'base64':
      return Ha(Va(n));
    case 'binary':
      return Va(n);
    case 'string':
      return t;
    case 'file':
      return Qa(r.file, n, 'utf8');
    case 'buffer':
      return je
        ? Qr(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : Ir(n, { type: 'binary' })
              .split('')
              .map(function (a) {
                return a.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function B_(t, r) {
  switch (r.type) {
    case 'base64':
      return Ha(t);
    case 'binary':
      return t;
    case 'string':
      return t;
    case 'file':
      return Qa(r.file, t, 'binary');
    case 'buffer':
      return je
        ? Qr(t, 'binary')
        : t.split('').map(function (e) {
            return e.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function pi(t, r) {
  switch (r.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var e = '', n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
      return r.type == 'base64' ? Ha(e) : r.type == 'string' ? Da(e) : e;
    case 'file':
      return Qa(r.file, t);
    case 'buffer':
      return t;
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
}
function Wc(t, r) {
  hd(), y2(t);
  var e = Qt(r || {});
  if (
    (e.cellStyles && ((e.cellNF = !0), (e.sheetStubs = !0)), e.type == 'array')
  ) {
    e.type = 'binary';
    var n = Wc(t, e);
    return (e.type = 'array'), ss(n);
  }
  var a = 0;
  if (
    e.sheet &&
    (typeof e.sheet == 'number'
      ? (a = e.sheet)
      : (a = t.SheetNames.indexOf(e.sheet)),
    !t.SheetNames[a])
  )
    throw new Error('Sheet not found: ' + e.sheet + ' : ' + typeof e.sheet);
  switch (e.bookType || 'xlsb') {
    case 'xml':
    case 'xlml':
      return Ir(J2(t, e), e);
    case 'slk':
    case 'sylk':
      return Ir(wv.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'htm':
    case 'html':
      return Ir(Mc(t.Sheets[t.SheetNames[a]], e), e);
    case 'txt':
      return B_(Vc(t.Sheets[t.SheetNames[a]], e), e);
    case 'csv':
      return Ir(L0(t.Sheets[t.SheetNames[a]], e), e, '\uFEFF');
    case 'dif':
      return Ir(Ev.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'dbf':
      return pi(_v.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'prn':
      return Ir(Tv.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'rtf':
      return Ir(Ov.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'eth':
      return Ir(cc.from_sheet(t.Sheets[t.SheetNames[a]], e), e);
    case 'fods':
      return Ir(Uc(t, e), e);
    case 'wk1':
      return pi(zo.sheet_to_wk1(t.Sheets[t.SheetNames[a]], e), e);
    case 'wk3':
      return pi(zo.book_to_wk3(t, e), e);
    case 'biff2':
      e.biff || (e.biff = 2);
    case 'biff3':
      e.biff || (e.biff = 3);
    case 'biff4':
      return e.biff || (e.biff = 4), pi(Pc(t, e), e);
    case 'biff5':
      e.biff || (e.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return e.biff || (e.biff = 8), L_(t, e);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return P_(t, e);
    default:
      throw new Error('Unrecognized bookType |' + e.bookType + '|');
  }
}
function U_(t) {
  if (!t.bookType) {
    var r = {
        xls: 'biff8',
        htm: 'html',
        slk: 'sylk',
        socialcalc: 'eth',
        Sh33tJS: 'WTF',
      },
      e = t.file.slice(t.file.lastIndexOf('.')).toLowerCase();
    e.match(/^\.[a-z]+$/) && (t.bookType = e.slice(1)),
      (t.bookType = r[t.bookType] || t.bookType);
  }
}
function H_(t, r, e) {
  var n = {};
  return (n.type = 'file'), (n.file = r), U_(n), Wc(t, n);
}
function W_(t, r, e, n, a, i, s, o) {
  var l = It(e),
    f = o.defval,
    c = o.raw || !Object.prototype.hasOwnProperty.call(o, 'raw'),
    d = !0,
    u = a === 1 ? [] : {};
  if (a !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, '__rowNum__', { value: e, enumerable: !1 });
      } catch {
        u.__rowNum__ = e;
      }
    else u.__rowNum__ = e;
  if (!s || t[e])
    for (var p = r.s.c; p <= r.e.c; ++p) {
      var v = s ? t[e][p] : t[n[p] + l];
      if (v === void 0 || v.t === void 0) {
        if (f === void 0) continue;
        i[p] != null && (u[i[p]] = f);
        continue;
      }
      var h = v.v;
      switch (v.t) {
        case 'z':
          if (h == null) break;
          continue;
        case 'e':
          h = h == 0 ? null : void 0;
          break;
        case 's':
        case 'd':
        case 'b':
        case 'n':
          break;
        default:
          throw new Error('unrecognized type ' + v.t);
      }
      if (i[p] != null) {
        if (h == null)
          if (v.t == 'e' && h === null) u[i[p]] = null;
          else if (f !== void 0) u[i[p]] = f;
          else if (c && h === null) u[i[p]] = null;
          else continue;
        else
          u[i[p]] =
            c && (v.t !== 'n' || (v.t === 'n' && o.rawNumbers !== !1))
              ? h
              : Jr(v, h, o);
        h != null && (d = !1);
      }
    }
  return { row: u, isempty: d };
}
function Xi(t, r) {
  if (t == null || t['!ref'] == null) return [];
  var e = { t: 'n', v: 0 },
    n = 0,
    a = 1,
    i = [],
    s = 0,
    o = '',
    l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    f = r || {},
    c = f.range != null ? f.range : t['!ref'];
  switch (
    (f.header === 1
      ? (n = 1)
      : f.header === 'A'
        ? (n = 2)
        : Array.isArray(f.header)
          ? (n = 3)
          : f.header == null && (n = 0),
    typeof c)
  ) {
    case 'string':
      l = st(c);
      break;
    case 'number':
      (l = st(t['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (a = 0);
  var d = It(l.s.r),
    u = [],
    p = [],
    v = 0,
    h = 0,
    x = Array.isArray(t),
    D = l.s.r,
    C = 0,
    F = {};
  x && !t[D] && (t[D] = []);
  var k = (f.skipHidden && t['!cols']) || [],
    j = (f.skipHidden && t['!rows']) || [];
  for (C = l.s.c; C <= l.e.c; ++C)
    if (!(k[C] || {}).hidden)
      switch (((u[C] = Bt(C)), (e = x ? t[D][C] : t[u[C] + d]), n)) {
        case 1:
          i[C] = C - l.s.c;
          break;
        case 2:
          i[C] = u[C];
          break;
        case 3:
          i[C] = f.header[C - l.s.c];
          break;
        default:
          if (
            (e == null && (e = { w: '__EMPTY', t: 's' }),
            (o = s = Jr(e, null, f)),
            (h = F[s] || 0),
            !h)
          )
            F[s] = 1;
          else {
            do o = s + '_' + h++;
            while (F[o]);
            (F[s] = h), (F[o] = 1);
          }
          i[C] = o;
      }
  for (D = l.s.r + a; D <= l.e.r; ++D)
    if (!(j[D] || {}).hidden) {
      var te = W_(t, l, D, u, n, i, x, f);
      (te.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) &&
        (p[v++] = te.row);
    }
  return (p.length = v), p;
}
var nf = /"/g;
function V_(t, r, e, n, a, i, s, o) {
  for (var l = !0, f = [], c = '', d = It(e), u = r.s.c; u <= r.e.c; ++u)
    if (n[u]) {
      var p = o.dense ? (t[e] || [])[u] : t[n[u] + d];
      if (p == null) c = '';
      else if (p.v != null) {
        (l = !1),
          (c = '' + (o.rawNumbers && p.t == 'n' ? p.v : Jr(p, null, o)));
        for (var v = 0, h = 0; v !== c.length; ++v)
          if (
            (h = c.charCodeAt(v)) === a ||
            h === i ||
            h === 34 ||
            o.forceQuotes
          ) {
            c = '"' + c.replace(nf, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        p.f != null && !p.F
          ? ((l = !1),
            (c = '=' + p.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(nf, '""') + '"'))
          : (c = '');
      f.push(c);
    }
  return o.blankrows === !1 && l ? null : f.join(s);
}
function L0(t, r) {
  var e = [],
    n = r ?? {};
  if (t == null || t['!ref'] == null) return '';
  var a = st(t['!ref']),
    i = n.FS !== void 0 ? n.FS : ',',
    s = i.charCodeAt(0),
    o =
      n.RS !== void 0
        ? n.RS
        : `
`,
    l = o.charCodeAt(0),
    f = new RegExp((i == '|' ? '\\|' : i) + '+$'),
    c = '',
    d = [];
  n.dense = Array.isArray(t);
  for (
    var u = (n.skipHidden && t['!cols']) || [],
      p = (n.skipHidden && t['!rows']) || [],
      v = a.s.c;
    v <= a.e.c;
    ++v
  )
    (u[v] || {}).hidden || (d[v] = Bt(v));
  for (var h = 0, x = a.s.r; x <= a.e.r; ++x)
    (p[x] || {}).hidden ||
      ((c = V_(t, a, x, d, s, l, i, n)),
      c != null &&
        (n.strip && (c = c.replace(f, '')),
        (c || n.blankrows !== !1) && e.push((h++ ? o : '') + c)));
  return delete n.dense, e.join('');
}
function Vc(t, r) {
  r || (r = {}),
    (r.FS = '	'),
    (r.RS = `
`);
  var e = L0(t, r);
  return e;
}
function j_(t) {
  var r = '',
    e,
    n = '';
  if (t == null || t['!ref'] == null) return [];
  var a = st(t['!ref']),
    i = '',
    s = [],
    o,
    l = [],
    f = Array.isArray(t);
  for (o = a.s.c; o <= a.e.c; ++o) s[o] = Bt(o);
  for (var c = a.s.r; c <= a.e.r; ++c)
    for (i = It(c), o = a.s.c; o <= a.e.c; ++o)
      if (
        ((r = s[o] + i),
        (e = f ? (t[c] || [])[o] : t[r]),
        (n = ''),
        e !== void 0)
      ) {
        if (e.F != null) {
          if (((r = e.F), !e.f)) continue;
          (n = e.f), r.indexOf(':') == -1 && (r = r + ':' + r);
        }
        if (e.f != null) n = e.f;
        else {
          if (e.t == 'z') continue;
          if (e.t == 'n' && e.v != null) n = '' + e.v;
          else if (e.t == 'b') n = e.v ? 'TRUE' : 'FALSE';
          else if (e.w !== void 0) n = "'" + e.w;
          else {
            if (e.v === void 0) continue;
            e.t == 's' ? (n = "'" + e.v) : (n = '' + e.v);
          }
        }
        l[l.length] = r + '=' + n;
      }
  return l;
}
function jc(t, r, e) {
  var n = e || {},
    a = +!n.skipHeader,
    i = t || {},
    s = 0,
    o = 0;
  if (i && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? At(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
  var f,
    c = { s: { c: 0, r: 0 }, e: { c: o, r: s + r.length - 1 + a } };
  if (i['!ref']) {
    var d = st(i['!ref']);
    (c.e.c = Math.max(c.e.c, d.e.c)),
      (c.e.r = Math.max(c.e.r, d.e.r)),
      s == -1 && ((s = d.e.r + 1), (c.e.r = s + r.length - 1 + a));
  } else s == -1 && ((s = 0), (c.e.r = r.length - 1 + a));
  var u = n.header || [],
    p = 0;
  r.forEach(function (h, x) {
    bt(h).forEach(function (D) {
      (p = u.indexOf(D)) == -1 && (u[(p = u.length)] = D);
      var C = h[D],
        F = 'z',
        k = '',
        j = $e({ c: o + p, r: s + x + a });
      (f = Ya(i, j)),
        C && typeof C == 'object' && !(C instanceof Date)
          ? (i[j] = C)
          : (typeof C == 'number'
              ? (F = 'n')
              : typeof C == 'boolean'
                ? (F = 'b')
                : typeof C == 'string'
                  ? (F = 's')
                  : C instanceof Date
                    ? ((F = 'd'),
                      n.cellDates || ((F = 'n'), (C = Zt(C))),
                      (k = n.dateNF || dt[14]))
                    : C === null && n.nullError && ((F = 'e'), (C = 0)),
            f
              ? ((f.t = F), (f.v = C), delete f.w, delete f.R, k && (f.z = k))
              : (i[j] = f = { t: F, v: C }),
            k && (f.z = k));
    });
  }),
    (c.e.c = Math.max(c.e.c, o + u.length - 1));
  var v = It(s);
  if (a) for (p = 0; p < u.length; ++p) i[Bt(p + o) + v] = { t: 's', v: u[p] };
  return (i['!ref'] = _t(c)), i;
}
function G_(t, r) {
  return jc(null, t, r);
}
function Ya(t, r, e) {
  if (typeof r == 'string') {
    if (Array.isArray(t)) {
      var n = At(r);
      return t[n.r] || (t[n.r] = []), t[n.r][n.c] || (t[n.r][n.c] = { t: 'z' });
    }
    return t[r] || (t[r] = { t: 'z' });
  }
  return typeof r != 'number' ? Ya(t, $e(r)) : Ya(t, $e({ r, c: e || 0 }));
}
function Y_(t, r) {
  if (typeof r == 'number') {
    if (r >= 0 && t.SheetNames.length > r) return r;
    throw new Error('Cannot find sheet # ' + r);
  } else if (typeof r == 'string') {
    var e = t.SheetNames.indexOf(r);
    if (e > -1) return e;
    throw new Error('Cannot find sheet name |' + r + '|');
  } else throw new Error('Cannot find sheet |' + r + '|');
}
function X_() {
  return { SheetNames: [], Sheets: {} };
}
function K_(t, r, e, n) {
  var a = 1;
  if (!e)
    for (
      ;
      a <= 65535 && t.SheetNames.indexOf((e = 'Sheet' + a)) != -1;
      ++a, e = void 0
    );
  if (!e || t.SheetNames.length >= 65535)
    throw new Error('Too many worksheets');
  if (n && t.SheetNames.indexOf(e) >= 0) {
    var i = e.match(/(^.*?)(\d+)$/);
    a = (i && +i[2]) || 0;
    var s = (i && i[1]) || e;
    for (++a; a <= 65535 && t.SheetNames.indexOf((e = s + a)) != -1; ++a);
  }
  if ((kc(e), t.SheetNames.indexOf(e) >= 0))
    throw new Error('Worksheet with name |' + e + '| already exists!');
  return t.SheetNames.push(e), (t.Sheets[e] = r), e;
}
function $_(t, r, e) {
  t.Workbook || (t.Workbook = {}),
    t.Workbook.Sheets || (t.Workbook.Sheets = []);
  var n = Y_(t, r);
  switch ((t.Workbook.Sheets[n] || (t.Workbook.Sheets[n] = {}), e)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error('Bad sheet visibility setting ' + e);
  }
  t.Workbook.Sheets[n].Hidden = e;
}
function z_(t, r) {
  return (t.z = r), t;
}
function Gc(t, r, e) {
  return r ? ((t.l = { Target: r }), e && (t.l.Tooltip = e)) : delete t.l, t;
}
function q_(t, r, e) {
  return Gc(t, '#' + r, e);
}
function J_(t, r, e) {
  t.c || (t.c = []), t.c.push({ t: r, a: e || 'SheetJS' });
}
function Z_(t, r, e, n) {
  for (
    var a = typeof r != 'string' ? r : st(r),
      i = typeof r == 'string' ? r : _t(r),
      s = a.s.r;
    s <= a.e.r;
    ++s
  )
    for (var o = a.s.c; o <= a.e.c; ++o) {
      var l = Ya(t, s, o);
      (l.t = 'n'),
        (l.F = i),
        delete l.v,
        s == a.s.r && o == a.s.c && ((l.f = e), n && (l.D = !0));
    }
  return t;
}
var Os = {
    encode_col: Bt,
    encode_row: It,
    encode_cell: $e,
    encode_range: _t,
    decode_col: F0,
    decode_row: A0,
    split_cell: hp,
    decode_cell: At,
    decode_range: lr,
    format_cell: Jr,
    sheet_add_aoa: Gl,
    sheet_add_json: jc,
    sheet_add_dom: Lc,
    aoa_to_sheet: pa,
    json_to_sheet: G_,
    table_to_sheet: Bc,
    table_to_book: E_,
    sheet_to_csv: L0,
    sheet_to_txt: Vc,
    sheet_to_json: Xi,
    sheet_to_html: Mc,
    sheet_to_formulae: j_,
    sheet_to_row_object_array: Xi,
    sheet_get_cell: Ya,
    book_new: X_,
    book_append_sheet: K_,
    book_set_sheet_visibility: $_,
    cell_set_number_format: z_,
    cell_set_hyperlink: Gc,
    cell_set_internal_link: q_,
    cell_add_comment: J_,
    sheet_set_array_formula: Z_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  Q_ = tt(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/inwards/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function ew(t, r) {
  i0(r, !0);
  let e = jr('');
  Uf(() => {
    ve(e, window.location.pathname, !0), console.log('currentPath:', q(e));
  });
  function n(H) {
    return H === '/' ? q(e) === '/' : q(e).startsWith(H);
  }
  var a = Q_(),
    i = Te(Ae(a), 2),
    s = Ae(i),
    o = Ae(s);
  let l;
  var f = Te(s, 2),
    c = Ae(f);
  let d;
  var u = Te(f, 2),
    p = Ae(u);
  let v;
  var h = Te(u, 2),
    x = Ae(h);
  let D;
  var C = Te(h, 2),
    F = Ae(C);
  let k;
  var j = Te(C, 2),
    te = Ae(j);
  let R;
  at(
    (H, L, X, K, J, ie) => {
      (l = $n(o, 1, 'svelte-1t3skh', null, l, H)),
        (d = $n(c, 1, 'svelte-1t3skh', null, d, L)),
        (v = $n(p, 1, 'svelte-1t3skh', null, v, X)),
        (D = $n(x, 1, 'svelte-1t3skh', null, D, K)),
        (k = $n(F, 1, 'svelte-1t3skh', null, k, J)),
        (R = $n(te, 1, 'svelte-1t3skh', null, R, ie));
    },
    [
      () => ({ active: n('/') }),
      () => ({ active: n('/product') }),
      () => ({ active: n('/suppliers') }),
      () => ({ active: n('/customers') }),
      () => ({ active: n('/inwards') }),
      () => ({ active: n('/outwards') }),
    ],
  ),
    be(t, a),
    s0();
}
var Ns = [
    'onChange',
    'onClose',
    'onDayCreate',
    'onDestroy',
    'onKeyDown',
    'onMonthChange',
    'onOpen',
    'onParseConfig',
    'onReady',
    'onValueUpdate',
    'onYearChange',
    'onPreCalendarPosition',
  ],
  ia = {
    _disable: [],
    allowInput: !1,
    allowInvalidPreload: !1,
    altFormat: 'F j, Y',
    altInput: !1,
    altInputClass: 'form-control input',
    animate:
      typeof window == 'object' &&
      window.navigator.userAgent.indexOf('MSIE') === -1,
    ariaDateFormat: 'F j, Y',
    autoFillDefaultTime: !0,
    clickOpens: !0,
    closeOnSelect: !0,
    conjunction: ', ',
    dateFormat: 'Y-m-d',
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: !1,
    enableSeconds: !1,
    enableTime: !1,
    errorHandler: function (t) {
      return typeof console < 'u' && console.warn(t);
    },
    getWeek: function (t) {
      var r = new Date(t.getTime());
      r.setHours(0, 0, 0, 0),
        r.setDate(r.getDate() + 3 - ((r.getDay() + 6) % 7));
      var e = new Date(r.getFullYear(), 0, 4);
      return (
        1 +
        Math.round(
          ((r.getTime() - e.getTime()) / 864e5 - 3 + ((e.getDay() + 6) % 7)) /
            7,
        )
      );
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: !1,
    locale: 'default',
    minuteIncrement: 5,
    mode: 'single',
    monthSelectorType: 'dropdown',
    nextArrow:
      "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: !1,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: 'auto',
    positionElement: void 0,
    prevArrow:
      "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: !1,
    showMonths: 1,
    static: !1,
    time_24hr: !1,
    weekNumbers: !1,
    wrap: !1,
  },
  Xa = {
    weekdays: {
      shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      longhand: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
    months: {
      shorthand: [
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
      longhand: [
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
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (t) {
      var r = t % 100;
      if (r > 3 && r < 21) return 'th';
      switch (r % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    },
    rangeSeparator: ' to ',
    weekAbbreviation: 'Wk',
    scrollTitle: 'Scroll to increment',
    toggleTitle: 'Click to toggle',
    amPM: ['AM', 'PM'],
    yearAriaLabel: 'Year',
    monthAriaLabel: 'Month',
    hourAriaLabel: 'Hour',
    minuteAriaLabel: 'Minute',
    time_24hr: !1,
  },
  $t = function (t, r) {
    return r === void 0 && (r = 2), ('000' + t).slice(r * -1);
  },
  pr = function (t) {
    return t === !0 ? 1 : 0;
  };
function af(t, r) {
  var e;
  return function () {
    var n = this,
      a = arguments;
    clearTimeout(e),
      (e = setTimeout(function () {
        return t.apply(n, a);
      }, r));
  };
}
var Rs = function (t) {
  return t instanceof Array ? t : [t];
};
function Wt(t, r, e) {
  if (e === !0) return t.classList.add(r);
  t.classList.remove(r);
}
function Ve(t, r, e) {
  var n = window.document.createElement(t);
  return (
    (r = r || ''),
    (e = e || ''),
    (n.className = r),
    e !== void 0 && (n.textContent = e),
    n
  );
}
function vi(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
}
function Yc(t, r) {
  if (r(t)) return t;
  if (t.parentNode) return Yc(t.parentNode, r);
}
function mi(t, r) {
  var e = Ve('div', 'numInputWrapper'),
    n = Ve('input', 'numInput ' + t),
    a = Ve('span', 'arrowUp'),
    i = Ve('span', 'arrowDown');
  if (
    (navigator.userAgent.indexOf('MSIE 9.0') === -1
      ? (n.type = 'number')
      : ((n.type = 'text'), (n.pattern = '\\d*')),
    r !== void 0)
  )
    for (var s in r) n.setAttribute(s, r[s]);
  return e.appendChild(n), e.appendChild(a), e.appendChild(i), e;
}
function er(t) {
  try {
    if (typeof t.composedPath == 'function') {
      var r = t.composedPath();
      return r[0];
    }
    return t.target;
  } catch {
    return t.target;
  }
}
var ks = function () {},
  Ki = function (t, r, e) {
    return e.months[r ? 'shorthand' : 'longhand'][t];
  },
  tw = {
    D: ks,
    F: function (t, r, e) {
      t.setMonth(e.months.longhand.indexOf(r));
    },
    G: function (t, r) {
      t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(r));
    },
    H: function (t, r) {
      t.setHours(parseFloat(r));
    },
    J: function (t, r) {
      t.setDate(parseFloat(r));
    },
    K: function (t, r, e) {
      t.setHours(
        (t.getHours() % 12) + 12 * pr(new RegExp(e.amPM[1], 'i').test(r)),
      );
    },
    M: function (t, r, e) {
      t.setMonth(e.months.shorthand.indexOf(r));
    },
    S: function (t, r) {
      t.setSeconds(parseFloat(r));
    },
    U: function (t, r) {
      return new Date(parseFloat(r) * 1e3);
    },
    W: function (t, r, e) {
      var n = parseInt(r),
        a = new Date(t.getFullYear(), 0, 2 + (n - 1) * 7, 0, 0, 0, 0);
      return a.setDate(a.getDate() - a.getDay() + e.firstDayOfWeek), a;
    },
    Y: function (t, r) {
      t.setFullYear(parseFloat(r));
    },
    Z: function (t, r) {
      return new Date(r);
    },
    d: function (t, r) {
      t.setDate(parseFloat(r));
    },
    h: function (t, r) {
      t.setHours((t.getHours() >= 12 ? 12 : 0) + parseFloat(r));
    },
    i: function (t, r) {
      t.setMinutes(parseFloat(r));
    },
    j: function (t, r) {
      t.setDate(parseFloat(r));
    },
    l: ks,
    m: function (t, r) {
      t.setMonth(parseFloat(r) - 1);
    },
    n: function (t, r) {
      t.setMonth(parseFloat(r) - 1);
    },
    s: function (t, r) {
      t.setSeconds(parseFloat(r));
    },
    u: function (t, r) {
      return new Date(parseFloat(r));
    },
    w: ks,
    y: function (t, r) {
      t.setFullYear(2e3 + parseFloat(r));
    },
  },
  Fn = {
    D: '',
    F: '',
    G: '(\\d\\d|\\d)',
    H: '(\\d\\d|\\d)',
    J: '(\\d\\d|\\d)\\w+',
    K: '',
    M: '',
    S: '(\\d\\d|\\d)',
    U: '(.+)',
    W: '(\\d\\d|\\d)',
    Y: '(\\d{4})',
    Z: '(.+)',
    d: '(\\d\\d|\\d)',
    h: '(\\d\\d|\\d)',
    i: '(\\d\\d|\\d)',
    j: '(\\d\\d|\\d)',
    l: '',
    m: '(\\d\\d|\\d)',
    n: '(\\d\\d|\\d)',
    s: '(\\d\\d|\\d)',
    u: '(.+)',
    w: '(\\d\\d|\\d)',
    y: '(\\d{2})',
  },
  Ia = {
    Z: function (t) {
      return t.toISOString();
    },
    D: function (t, r, e) {
      return r.weekdays.shorthand[Ia.w(t, r, e)];
    },
    F: function (t, r, e) {
      return Ki(Ia.n(t, r, e) - 1, !1, r);
    },
    G: function (t, r, e) {
      return $t(Ia.h(t, r, e));
    },
    H: function (t) {
      return $t(t.getHours());
    },
    J: function (t, r) {
      return r.ordinal !== void 0
        ? t.getDate() + r.ordinal(t.getDate())
        : t.getDate();
    },
    K: function (t, r) {
      return r.amPM[pr(t.getHours() > 11)];
    },
    M: function (t, r) {
      return Ki(t.getMonth(), !0, r);
    },
    S: function (t) {
      return $t(t.getSeconds());
    },
    U: function (t) {
      return t.getTime() / 1e3;
    },
    W: function (t, r, e) {
      return e.getWeek(t);
    },
    Y: function (t) {
      return $t(t.getFullYear(), 4);
    },
    d: function (t) {
      return $t(t.getDate());
    },
    h: function (t) {
      return t.getHours() % 12 ? t.getHours() % 12 : 12;
    },
    i: function (t) {
      return $t(t.getMinutes());
    },
    j: function (t) {
      return t.getDate();
    },
    l: function (t, r) {
      return r.weekdays.longhand[t.getDay()];
    },
    m: function (t) {
      return $t(t.getMonth() + 1);
    },
    n: function (t) {
      return t.getMonth() + 1;
    },
    s: function (t) {
      return t.getSeconds();
    },
    u: function (t) {
      return t.getTime();
    },
    w: function (t) {
      return t.getDay();
    },
    y: function (t) {
      return String(t.getFullYear()).substring(2);
    },
  },
  Xc = function (t) {
    var r = t.config,
      e = r === void 0 ? ia : r,
      n = t.l10n,
      a = n === void 0 ? Xa : n,
      i = t.isMobile,
      s = i === void 0 ? !1 : i;
    return function (o, l, f) {
      var c = f || a;
      return e.formatDate !== void 0 && !s
        ? e.formatDate(o, l, c)
        : l
            .split('')
            .map(function (d, u, p) {
              return Ia[d] && p[u - 1] !== '\\'
                ? Ia[d](o, c, e)
                : d !== '\\'
                  ? d
                  : '';
            })
            .join('');
    };
  },
  Js = function (t) {
    var r = t.config,
      e = r === void 0 ? ia : r,
      n = t.l10n,
      a = n === void 0 ? Xa : n;
    return function (i, s, o, l) {
      if (!(i !== 0 && !i)) {
        var f = l || a,
          c,
          d = i;
        if (i instanceof Date) c = new Date(i.getTime());
        else if (typeof i != 'string' && i.toFixed !== void 0) c = new Date(i);
        else if (typeof i == 'string') {
          var u = s || (e || ia).dateFormat,
            p = String(i).trim();
          if (p === 'today') (c = new Date()), (o = !0);
          else if (e && e.parseDate) c = e.parseDate(i, u);
          else if (/Z$/.test(p) || /GMT$/.test(p)) c = new Date(i);
          else {
            for (
              var v = void 0, h = [], x = 0, D = 0, C = '';
              x < u.length;
              x++
            ) {
              var F = u[x],
                k = F === '\\',
                j = u[x - 1] === '\\' || k;
              if (Fn[F] && !j) {
                C += Fn[F];
                var te = new RegExp(C).exec(i);
                te &&
                  (v = !0) &&
                  h[F !== 'Y' ? 'push' : 'unshift']({
                    fn: tw[F],
                    val: te[++D],
                  });
              } else k || (C += '.');
            }
            (c =
              !e || !e.noCalendar
                ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                : new Date(new Date().setHours(0, 0, 0, 0))),
              h.forEach(function (R) {
                var H = R.fn,
                  L = R.val;
                return (c = H(c, L, f) || c);
              }),
              (c = v ? c : void 0);
          }
        }
        if (!(c instanceof Date && !isNaN(c.getTime()))) {
          e.errorHandler(new Error('Invalid date provided: ' + d));
          return;
        }
        return o === !0 && c.setHours(0, 0, 0, 0), c;
      }
    };
  };
function tr(t, r, e) {
  return (
    e === void 0 && (e = !0),
    e !== !1
      ? new Date(t.getTime()).setHours(0, 0, 0, 0) -
        new Date(r.getTime()).setHours(0, 0, 0, 0)
      : t.getTime() - r.getTime()
  );
}
var rw = function (t, r, e) {
    return t > Math.min(r, e) && t < Math.max(r, e);
  },
  Is = function (t, r, e) {
    return t * 3600 + r * 60 + e;
  },
  nw = function (t) {
    var r = Math.floor(t / 3600),
      e = (t - r * 3600) / 60;
    return [r, e, t - r * 3600 - e * 60];
  },
  aw = { DAY: 864e5 };
function bs(t) {
  var r = t.defaultHour,
    e = t.defaultMinute,
    n = t.defaultSeconds;
  if (t.minDate !== void 0) {
    var a = t.minDate.getHours(),
      i = t.minDate.getMinutes(),
      s = t.minDate.getSeconds();
    r < a && (r = a),
      r === a && e < i && (e = i),
      r === a && e === i && n < s && (n = t.minDate.getSeconds());
  }
  if (t.maxDate !== void 0) {
    var o = t.maxDate.getHours(),
      l = t.maxDate.getMinutes();
    (r = Math.min(r, o)),
      r === o && (e = Math.min(l, e)),
      r === o && e === l && (n = t.maxDate.getSeconds());
  }
  return { hours: r, minutes: e, seconds: n };
}
typeof Object.assign != 'function' &&
  (Object.assign = function (t) {
    for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
    if (!t) throw TypeError('Cannot convert undefined or null to object');
    for (
      var n = function (o) {
          o &&
            Object.keys(o).forEach(function (l) {
              return (t[l] = o[l]);
            });
        },
        a = 0,
        i = r;
      a < i.length;
      a++
    ) {
      var s = i[a];
      n(s);
    }
    return t;
  });
var Mt = function () {
    return (
      (Mt =
        Object.assign ||
        function (t) {
          for (var r, e = 1, n = arguments.length; e < n; e++) {
            r = arguments[e];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
          }
          return t;
        }),
      Mt.apply(this, arguments)
    );
  },
  sf = function () {
    for (var t = 0, r = 0, e = arguments.length; r < e; r++)
      t += arguments[r].length;
    for (var n = Array(t), a = 0, r = 0; r < e; r++)
      for (var i = arguments[r], s = 0, o = i.length; s < o; s++, a++)
        n[a] = i[s];
    return n;
  },
  iw = 300;
function sw(t, r) {
  var e = { config: Mt(Mt({}, ia), gt.defaultConfig), l10n: Xa };
  (e.parseDate = Js({ config: e.config, l10n: e.l10n })),
    (e._handlers = []),
    (e.pluginElements = []),
    (e.loadedPlugins = []),
    (e._bind = h),
    (e._setHoursFromDate = u),
    (e._positionCalendar = Pt),
    (e.changeMonth = ft),
    (e.changeYear = ge),
    (e.clear = A),
    (e.close = U),
    (e.onMouseOver = ke),
    (e._createElement = Ve),
    (e.createDay = te),
    (e.destroy = I),
    (e.isEnabled = _e),
    (e.jumpToDate = C),
    (e.updateValue = ye),
    (e.open = Be),
    (e.redraw = en),
    (e.set = tn),
    (e.setDate = Er),
    (e.toggle = Gn);
  function n() {
    e.utils = {
      getDaysInMonth: function (g, T) {
        return (
          g === void 0 && (g = e.currentMonth),
          T === void 0 && (T = e.currentYear),
          g === 1 && ((T % 4 === 0 && T % 100 !== 0) || T % 400 === 0)
            ? 29
            : e.l10n.daysInMonth[g]
        );
      },
    };
  }
  function a() {
    (e.element = e.input = t),
      (e.isOpen = !1),
      rt(),
      Dt(),
      _n(),
      jn(),
      n(),
      e.isMobile || j(),
      D(),
      (e.selectedDates.length || e.config.noCalendar) &&
        (e.config.enableTime &&
          u(e.config.noCalendar ? e.latestSelectedDateObj : void 0),
        ye(!1)),
      o();
    var g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && g && Pt(), Ge('onReady');
  }
  function i() {
    var g;
    return (
      ((g = e.calendarContainer) === null || g === void 0
        ? void 0
        : g.getRootNode()
      ).activeElement || document.activeElement
    );
  }
  function s(g) {
    return g.bind(e);
  }
  function o() {
    var g = e.config;
    (g.weekNumbers === !1 && g.showMonths === 1) ||
      (g.noCalendar !== !0 &&
        window.requestAnimationFrame(function () {
          if (
            (e.calendarContainer !== void 0 &&
              ((e.calendarContainer.style.visibility = 'hidden'),
              (e.calendarContainer.style.display = 'block')),
            e.daysContainer !== void 0)
          ) {
            var T = (e.days.offsetWidth + 1) * g.showMonths;
            (e.daysContainer.style.width = T + 'px'),
              (e.calendarContainer.style.width =
                T +
                (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) +
                'px'),
              e.calendarContainer.style.removeProperty('visibility'),
              e.calendarContainer.style.removeProperty('display');
          }
        }));
  }
  function l(g) {
    if (e.selectedDates.length === 0) {
      var T =
          e.config.minDate === void 0 || tr(new Date(), e.config.minDate) >= 0
            ? new Date()
            : new Date(e.config.minDate.getTime()),
        N = bs(e.config);
      T.setHours(N.hours, N.minutes, N.seconds, T.getMilliseconds()),
        (e.selectedDates = [T]),
        (e.latestSelectedDateObj = T);
    }
    g !== void 0 && g.type !== 'blur' && lt(g);
    var W = e._input.value;
    d(), ye(), e._input.value !== W && e._debouncedChange();
  }
  function f(g, T) {
    return (g % 12) + 12 * pr(T === e.l10n.amPM[1]);
  }
  function c(g) {
    switch (g % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return g % 12;
    }
  }
  function d() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var g = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24,
        T = (parseInt(e.minuteElement.value, 10) || 0) % 60,
        N =
          e.secondElement !== void 0
            ? (parseInt(e.secondElement.value, 10) || 0) % 60
            : 0;
      e.amPM !== void 0 && (g = f(g, e.amPM.textContent));
      var W =
          e.config.minTime !== void 0 ||
          (e.config.minDate &&
            e.minDateHasTime &&
            e.latestSelectedDateObj &&
            tr(e.latestSelectedDateObj, e.config.minDate, !0) === 0),
        re =
          e.config.maxTime !== void 0 ||
          (e.config.maxDate &&
            e.maxDateHasTime &&
            e.latestSelectedDateObj &&
            tr(e.latestSelectedDateObj, e.config.maxDate, !0) === 0);
      if (
        e.config.maxTime !== void 0 &&
        e.config.minTime !== void 0 &&
        e.config.minTime > e.config.maxTime
      ) {
        var ue = Is(
            e.config.minTime.getHours(),
            e.config.minTime.getMinutes(),
            e.config.minTime.getSeconds(),
          ),
          De = Is(
            e.config.maxTime.getHours(),
            e.config.maxTime.getMinutes(),
            e.config.maxTime.getSeconds(),
          ),
          we = Is(g, T, N);
        if (we > De && we < ue) {
          var Fe = nw(ue);
          (g = Fe[0]), (T = Fe[1]), (N = Fe[2]);
        }
      } else {
        if (re) {
          var me =
            e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          (g = Math.min(g, me.getHours())),
            g === me.getHours() && (T = Math.min(T, me.getMinutes())),
            T === me.getMinutes() && (N = Math.min(N, me.getSeconds()));
        }
        if (W) {
          var Se =
            e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          (g = Math.max(g, Se.getHours())),
            g === Se.getHours() && T < Se.getMinutes() && (T = Se.getMinutes()),
            T === Se.getMinutes() && (N = Math.max(N, Se.getSeconds()));
        }
      }
      p(g, T, N);
    }
  }
  function u(g) {
    var T = g || e.latestSelectedDateObj;
    T && T instanceof Date && p(T.getHours(), T.getMinutes(), T.getSeconds());
  }
  function p(g, T, N) {
    e.latestSelectedDateObj !== void 0 &&
      e.latestSelectedDateObj.setHours(g % 24, T, N || 0, 0),
      !(!e.hourElement || !e.minuteElement || e.isMobile) &&
        ((e.hourElement.value = $t(
          e.config.time_24hr ? g : ((12 + g) % 12) + 12 * pr(g % 12 === 0),
        )),
        (e.minuteElement.value = $t(T)),
        e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[pr(g >= 12)]),
        e.secondElement !== void 0 && (e.secondElement.value = $t(N)));
  }
  function v(g) {
    var T = er(g),
      N = parseInt(T.value) + (g.delta || 0);
    (N / 1e3 > 1 || (g.key === 'Enter' && !/[^\d]/.test(N.toString()))) &&
      ge(N);
  }
  function h(g, T, N, W) {
    if (T instanceof Array)
      return T.forEach(function (re) {
        return h(g, re, N, W);
      });
    if (g instanceof Array)
      return g.forEach(function (re) {
        return h(re, T, N, W);
      });
    g.addEventListener(T, N, W),
      e._handlers.push({
        remove: function () {
          return g.removeEventListener(T, N, W);
        },
      });
  }
  function x() {
    Ge('onChange');
  }
  function D() {
    if (
      (e.config.wrap &&
        ['open', 'close', 'toggle', 'clear'].forEach(function (N) {
          Array.prototype.forEach.call(
            e.element.querySelectorAll('[data-' + N + ']'),
            function (W) {
              return h(W, 'click', e[N]);
            },
          );
        }),
      e.isMobile)
    ) {
      wn();
      return;
    }
    var g = af(Et, 50);
    if (
      ((e._debouncedChange = af(x, iw)),
      e.daysContainer &&
        !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        h(e.daysContainer, 'mouseover', function (N) {
          e.config.mode === 'range' && ke(er(N));
        }),
      h(e._input, 'keydown', Le),
      e.calendarContainer !== void 0 && h(e.calendarContainer, 'keydown', Le),
      !e.config.inline && !e.config.static && h(window, 'resize', g),
      window.ontouchstart !== void 0
        ? h(window.document, 'touchstart', z)
        : h(window.document, 'mousedown', z),
      h(window.document, 'focus', z, { capture: !0 }),
      e.config.clickOpens === !0 &&
        (h(e._input, 'focus', e.open), h(e._input, 'click', e.open)),
      e.daysContainer !== void 0 &&
        (h(e.monthNav, 'click', nt),
        h(e.monthNav, ['keyup', 'increment'], v),
        h(e.daysContainer, 'click', Ht)),
      e.timeContainer !== void 0 &&
        e.minuteElement !== void 0 &&
        e.hourElement !== void 0)
    ) {
      var T = function (N) {
        return er(N).select();
      };
      h(e.timeContainer, ['increment'], l),
        h(e.timeContainer, 'blur', l, { capture: !0 }),
        h(e.timeContainer, 'click', F),
        h([e.hourElement, e.minuteElement], ['focus', 'click'], T),
        e.secondElement !== void 0 &&
          h(e.secondElement, 'focus', function () {
            return e.secondElement && e.secondElement.select();
          }),
        e.amPM !== void 0 &&
          h(e.amPM, 'click', function (N) {
            l(N);
          });
    }
    e.config.allowInput && h(e._input, 'blur', le);
  }
  function C(g, T) {
    var N =
        g !== void 0
          ? e.parseDate(g)
          : e.latestSelectedDateObj ||
            (e.config.minDate && e.config.minDate > e.now
              ? e.config.minDate
              : e.config.maxDate && e.config.maxDate < e.now
                ? e.config.maxDate
                : e.now),
      W = e.currentYear,
      re = e.currentMonth;
    try {
      N !== void 0 &&
        ((e.currentYear = N.getFullYear()), (e.currentMonth = N.getMonth()));
    } catch (ue) {
      (ue.message = 'Invalid date supplied: ' + N), e.config.errorHandler(ue);
    }
    T && e.currentYear !== W && (Ge('onYearChange'), ie()),
      T &&
        (e.currentYear !== W || e.currentMonth !== re) &&
        Ge('onMonthChange'),
      e.redraw();
  }
  function F(g) {
    var T = er(g);
    ~T.className.indexOf('arrow') &&
      k(g, T.classList.contains('arrowUp') ? 1 : -1);
  }
  function k(g, T, N) {
    var W = g && er(g),
      re = N || (W && W.parentNode && W.parentNode.firstChild),
      ue = En('increment');
    (ue.delta = T), re && re.dispatchEvent(ue);
  }
  function j() {
    var g = window.document.createDocumentFragment();
    if (
      ((e.calendarContainer = Ve('div', 'flatpickr-calendar')),
      (e.calendarContainer.tabIndex = -1),
      !e.config.noCalendar)
    ) {
      if (
        (g.appendChild(ot()),
        (e.innerContainer = Ve('div', 'flatpickr-innerContainer')),
        e.config.weekNumbers)
      ) {
        var T = mt(),
          N = T.weekWrapper,
          W = T.weekNumbers;
        e.innerContainer.appendChild(N),
          (e.weekNumbers = W),
          (e.weekWrapper = N);
      }
      (e.rContainer = Ve('div', 'flatpickr-rContainer')),
        e.rContainer.appendChild(pt()),
        e.daysContainer ||
          ((e.daysContainer = Ve('div', 'flatpickr-days')),
          (e.daysContainer.tabIndex = -1)),
        J(),
        e.rContainer.appendChild(e.daysContainer),
        e.innerContainer.appendChild(e.rContainer),
        g.appendChild(e.innerContainer);
    }
    e.config.enableTime && g.appendChild(ze()),
      Wt(e.calendarContainer, 'rangeMode', e.config.mode === 'range'),
      Wt(e.calendarContainer, 'animate', e.config.animate === !0),
      Wt(e.calendarContainer, 'multiMonth', e.config.showMonths > 1),
      e.calendarContainer.appendChild(g);
    var re =
      e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if (
      (e.config.inline || e.config.static) &&
      (e.calendarContainer.classList.add(e.config.inline ? 'inline' : 'static'),
      e.config.inline &&
        (!re && e.element.parentNode
          ? e.element.parentNode.insertBefore(
              e.calendarContainer,
              e._input.nextSibling,
            )
          : e.config.appendTo !== void 0 &&
            e.config.appendTo.appendChild(e.calendarContainer)),
      e.config.static)
    ) {
      var ue = Ve('div', 'flatpickr-wrapper');
      e.element.parentNode && e.element.parentNode.insertBefore(ue, e.element),
        ue.appendChild(e.element),
        e.altInput && ue.appendChild(e.altInput),
        ue.appendChild(e.calendarContainer);
    }
    !e.config.static &&
      !e.config.inline &&
      (e.config.appendTo !== void 0
        ? e.config.appendTo
        : window.document.body
      ).appendChild(e.calendarContainer);
  }
  function te(g, T, N, W) {
    var re = _e(T, !0),
      ue = Ve('span', g, T.getDate().toString());
    return (
      (ue.dateObj = T),
      (ue.$i = W),
      ue.setAttribute('aria-label', e.formatDate(T, e.config.ariaDateFormat)),
      g.indexOf('hidden') === -1 &&
        tr(T, e.now) === 0 &&
        ((e.todayDateElem = ue),
        ue.classList.add('today'),
        ue.setAttribute('aria-current', 'date')),
      re
        ? ((ue.tabIndex = -1),
          Tn(T) &&
            (ue.classList.add('selected'),
            (e.selectedDateElem = ue),
            e.config.mode === 'range' &&
              (Wt(
                ue,
                'startRange',
                e.selectedDates[0] && tr(T, e.selectedDates[0], !0) === 0,
              ),
              Wt(
                ue,
                'endRange',
                e.selectedDates[1] && tr(T, e.selectedDates[1], !0) === 0,
              ),
              g === 'nextMonthDay' && ue.classList.add('inRange'))))
        : ue.classList.add('flatpickr-disabled'),
      e.config.mode === 'range' &&
        Yn(T) &&
        !Tn(T) &&
        ue.classList.add('inRange'),
      e.weekNumbers &&
        e.config.showMonths === 1 &&
        g !== 'prevMonthDay' &&
        W % 7 === 6 &&
        e.weekNumbers.insertAdjacentHTML(
          'beforeend',
          "<span class='flatpickr-day'>" + e.config.getWeek(T) + '</span>',
        ),
      Ge('onDayCreate', ue),
      ue
    );
  }
  function R(g) {
    g.focus(), e.config.mode === 'range' && ke(g);
  }
  function H(g) {
    for (
      var T = g > 0 ? 0 : e.config.showMonths - 1,
        N = g > 0 ? e.config.showMonths : -1,
        W = T;
      W != N;
      W += g
    )
      for (
        var re = e.daysContainer.children[W],
          ue = g > 0 ? 0 : re.children.length - 1,
          De = g > 0 ? re.children.length : -1,
          we = ue;
        we != De;
        we += g
      ) {
        var Fe = re.children[we];
        if (Fe.className.indexOf('hidden') === -1 && _e(Fe.dateObj)) return Fe;
      }
  }
  function L(g, T) {
    for (
      var N =
          g.className.indexOf('Month') === -1
            ? g.dateObj.getMonth()
            : e.currentMonth,
        W = T > 0 ? e.config.showMonths : -1,
        re = T > 0 ? 1 : -1,
        ue = N - e.currentMonth;
      ue != W;
      ue += re
    )
      for (
        var De = e.daysContainer.children[ue],
          we =
            N - e.currentMonth === ue
              ? g.$i + T
              : T < 0
                ? De.children.length - 1
                : 0,
          Fe = De.children.length,
          me = we;
        me >= 0 && me < Fe && me != (T > 0 ? Fe : -1);
        me += re
      ) {
        var Se = De.children[me];
        if (
          Se.className.indexOf('hidden') === -1 &&
          _e(Se.dateObj) &&
          Math.abs(g.$i - me) >= Math.abs(T)
        )
          return R(Se);
      }
    e.changeMonth(re), X(H(re), 0);
  }
  function X(g, T) {
    var N = i(),
      W = xe(N || document.body),
      re =
        g !== void 0
          ? g
          : W
            ? N
            : e.selectedDateElem !== void 0 && xe(e.selectedDateElem)
              ? e.selectedDateElem
              : e.todayDateElem !== void 0 && xe(e.todayDateElem)
                ? e.todayDateElem
                : H(T > 0 ? 1 : -1);
    re === void 0 ? e._input.focus() : W ? L(re, T) : R(re);
  }
  function K(g, T) {
    for (
      var N = (new Date(g, T, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7,
        W = e.utils.getDaysInMonth((T - 1 + 12) % 12, g),
        re = e.utils.getDaysInMonth(T, g),
        ue = window.document.createDocumentFragment(),
        De = e.config.showMonths > 1,
        we = De ? 'prevMonthDay hidden' : 'prevMonthDay',
        Fe = De ? 'nextMonthDay hidden' : 'nextMonthDay',
        me = W + 1 - N,
        Se = 0;
      me <= W;
      me++, Se++
    )
      ue.appendChild(te('flatpickr-day ' + we, new Date(g, T - 1, me), me, Se));
    for (me = 1; me <= re; me++, Se++)
      ue.appendChild(te('flatpickr-day', new Date(g, T, me), me, Se));
    for (
      var Ue = re + 1;
      Ue <= 42 - N && (e.config.showMonths === 1 || Se % 7 !== 0);
      Ue++, Se++
    )
      ue.appendChild(
        te('flatpickr-day ' + Fe, new Date(g, T + 1, Ue % re), Ue, Se),
      );
    var m = Ve('div', 'dayContainer');
    return m.appendChild(ue), m;
  }
  function J() {
    if (e.daysContainer !== void 0) {
      vi(e.daysContainer), e.weekNumbers && vi(e.weekNumbers);
      for (
        var g = document.createDocumentFragment(), T = 0;
        T < e.config.showMonths;
        T++
      ) {
        var N = new Date(e.currentYear, e.currentMonth, 1);
        N.setMonth(e.currentMonth + T),
          g.appendChild(K(N.getFullYear(), N.getMonth()));
      }
      e.daysContainer.appendChild(g),
        (e.days = e.daysContainer.firstChild),
        e.config.mode === 'range' && e.selectedDates.length === 1 && ke();
    }
  }
  function ie() {
    if (
      !(e.config.showMonths > 1 || e.config.monthSelectorType !== 'dropdown')
    ) {
      var g = function (W) {
        return e.config.minDate !== void 0 &&
          e.currentYear === e.config.minDate.getFullYear() &&
          W < e.config.minDate.getMonth()
          ? !1
          : !(
              e.config.maxDate !== void 0 &&
              e.currentYear === e.config.maxDate.getFullYear() &&
              W > e.config.maxDate.getMonth()
            );
      };
      (e.monthsDropdownContainer.tabIndex = -1),
        (e.monthsDropdownContainer.innerHTML = '');
      for (var T = 0; T < 12; T++)
        if (g(T)) {
          var N = Ve('option', 'flatpickr-monthDropdown-month');
          (N.value = new Date(e.currentYear, T).getMonth().toString()),
            (N.textContent = Ki(T, e.config.shorthandCurrentMonth, e.l10n)),
            (N.tabIndex = -1),
            e.currentMonth === T && (N.selected = !0),
            e.monthsDropdownContainer.appendChild(N);
        }
    }
  }
  function Pe() {
    var g = Ve('div', 'flatpickr-month'),
      T = window.document.createDocumentFragment(),
      N;
    e.config.showMonths > 1 || e.config.monthSelectorType === 'static'
      ? (N = Ve('span', 'cur-month'))
      : ((e.monthsDropdownContainer = Ve(
          'select',
          'flatpickr-monthDropdown-months',
        )),
        e.monthsDropdownContainer.setAttribute(
          'aria-label',
          e.l10n.monthAriaLabel,
        ),
        h(e.monthsDropdownContainer, 'change', function (De) {
          var we = er(De),
            Fe = parseInt(we.value, 10);
          e.changeMonth(Fe - e.currentMonth), Ge('onMonthChange');
        }),
        ie(),
        (N = e.monthsDropdownContainer));
    var W = mi('cur-year', { tabindex: '-1' }),
      re = W.getElementsByTagName('input')[0];
    re.setAttribute('aria-label', e.l10n.yearAriaLabel),
      e.config.minDate &&
        re.setAttribute('min', e.config.minDate.getFullYear().toString()),
      e.config.maxDate &&
        (re.setAttribute('max', e.config.maxDate.getFullYear().toString()),
        (re.disabled =
          !!e.config.minDate &&
          e.config.minDate.getFullYear() === e.config.maxDate.getFullYear()));
    var ue = Ve('div', 'flatpickr-current-month');
    return (
      ue.appendChild(N),
      ue.appendChild(W),
      T.appendChild(ue),
      g.appendChild(T),
      { container: g, yearElement: re, monthElement: N }
    );
  }
  function Ce() {
    vi(e.monthNav),
      e.monthNav.appendChild(e.prevMonthNav),
      e.config.showMonths && ((e.yearElements = []), (e.monthElements = []));
    for (var g = e.config.showMonths; g--; ) {
      var T = Pe();
      e.yearElements.push(T.yearElement),
        e.monthElements.push(T.monthElement),
        e.monthNav.appendChild(T.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function ot() {
    return (
      (e.monthNav = Ve('div', 'flatpickr-months')),
      (e.yearElements = []),
      (e.monthElements = []),
      (e.prevMonthNav = Ve('span', 'flatpickr-prev-month')),
      (e.prevMonthNav.innerHTML = e.config.prevArrow),
      (e.nextMonthNav = Ve('span', 'flatpickr-next-month')),
      (e.nextMonthNav.innerHTML = e.config.nextArrow),
      Ce(),
      Object.defineProperty(e, '_hidePrevMonthArrow', {
        get: function () {
          return e.__hidePrevMonthArrow;
        },
        set: function (g) {
          e.__hidePrevMonthArrow !== g &&
            (Wt(e.prevMonthNav, 'flatpickr-disabled', g),
            (e.__hidePrevMonthArrow = g));
        },
      }),
      Object.defineProperty(e, '_hideNextMonthArrow', {
        get: function () {
          return e.__hideNextMonthArrow;
        },
        set: function (g) {
          e.__hideNextMonthArrow !== g &&
            (Wt(e.nextMonthNav, 'flatpickr-disabled', g),
            (e.__hideNextMonthArrow = g));
        },
      }),
      (e.currentYearElement = e.yearElements[0]),
      Ur(),
      e.monthNav
    );
  }
  function ze() {
    e.calendarContainer.classList.add('hasTime'),
      e.config.noCalendar && e.calendarContainer.classList.add('noCalendar');
    var g = bs(e.config);
    (e.timeContainer = Ve('div', 'flatpickr-time')),
      (e.timeContainer.tabIndex = -1);
    var T = Ve('span', 'flatpickr-time-separator', ':'),
      N = mi('flatpickr-hour', { 'aria-label': e.l10n.hourAriaLabel });
    e.hourElement = N.getElementsByTagName('input')[0];
    var W = mi('flatpickr-minute', { 'aria-label': e.l10n.minuteAriaLabel });
    if (
      ((e.minuteElement = W.getElementsByTagName('input')[0]),
      (e.hourElement.tabIndex = e.minuteElement.tabIndex = -1),
      (e.hourElement.value = $t(
        e.latestSelectedDateObj
          ? e.latestSelectedDateObj.getHours()
          : e.config.time_24hr
            ? g.hours
            : c(g.hours),
      )),
      (e.minuteElement.value = $t(
        e.latestSelectedDateObj
          ? e.latestSelectedDateObj.getMinutes()
          : g.minutes,
      )),
      e.hourElement.setAttribute('step', e.config.hourIncrement.toString()),
      e.minuteElement.setAttribute('step', e.config.minuteIncrement.toString()),
      e.hourElement.setAttribute('min', e.config.time_24hr ? '0' : '1'),
      e.hourElement.setAttribute('max', e.config.time_24hr ? '23' : '12'),
      e.hourElement.setAttribute('maxlength', '2'),
      e.minuteElement.setAttribute('min', '0'),
      e.minuteElement.setAttribute('max', '59'),
      e.minuteElement.setAttribute('maxlength', '2'),
      e.timeContainer.appendChild(N),
      e.timeContainer.appendChild(T),
      e.timeContainer.appendChild(W),
      e.config.time_24hr && e.timeContainer.classList.add('time24hr'),
      e.config.enableSeconds)
    ) {
      e.timeContainer.classList.add('hasSeconds');
      var re = mi('flatpickr-second');
      (e.secondElement = re.getElementsByTagName('input')[0]),
        (e.secondElement.value = $t(
          e.latestSelectedDateObj
            ? e.latestSelectedDateObj.getSeconds()
            : g.seconds,
        )),
        e.secondElement.setAttribute(
          'step',
          e.minuteElement.getAttribute('step'),
        ),
        e.secondElement.setAttribute('min', '0'),
        e.secondElement.setAttribute('max', '59'),
        e.secondElement.setAttribute('maxlength', '2'),
        e.timeContainer.appendChild(
          Ve('span', 'flatpickr-time-separator', ':'),
        ),
        e.timeContainer.appendChild(re);
    }
    return (
      e.config.time_24hr ||
        ((e.amPM = Ve(
          'span',
          'flatpickr-am-pm',
          e.l10n.amPM[
            pr(
              (e.latestSelectedDateObj
                ? e.hourElement.value
                : e.config.defaultHour) > 11,
            )
          ],
        )),
        (e.amPM.title = e.l10n.toggleTitle),
        (e.amPM.tabIndex = -1),
        e.timeContainer.appendChild(e.amPM)),
      e.timeContainer
    );
  }
  function pt() {
    e.weekdayContainer
      ? vi(e.weekdayContainer)
      : (e.weekdayContainer = Ve('div', 'flatpickr-weekdays'));
    for (var g = e.config.showMonths; g--; ) {
      var T = Ve('div', 'flatpickr-weekdaycontainer');
      e.weekdayContainer.appendChild(T);
    }
    return qe(), e.weekdayContainer;
  }
  function qe() {
    if (e.weekdayContainer) {
      var g = e.l10n.firstDayOfWeek,
        T = sf(e.l10n.weekdays.shorthand);
      g > 0 && g < T.length && (T = sf(T.splice(g, T.length), T.splice(0, g)));
      for (var N = e.config.showMonths; N--; )
        e.weekdayContainer.children[N].innerHTML =
          `
      <span class='flatpickr-weekday'>
        ` +
          T.join("</span><span class='flatpickr-weekday'>") +
          `
      </span>
      `;
    }
  }
  function mt() {
    e.calendarContainer.classList.add('hasWeeks');
    var g = Ve('div', 'flatpickr-weekwrapper');
    g.appendChild(Ve('span', 'flatpickr-weekday', e.l10n.weekAbbreviation));
    var T = Ve('div', 'flatpickr-weeks');
    return g.appendChild(T), { weekWrapper: g, weekNumbers: T };
  }
  function ft(g, T) {
    T === void 0 && (T = !0);
    var N = T ? g : g - e.currentMonth;
    (N < 0 && e._hidePrevMonthArrow === !0) ||
      (N > 0 && e._hideNextMonthArrow === !0) ||
      ((e.currentMonth += N),
      (e.currentMonth < 0 || e.currentMonth > 11) &&
        ((e.currentYear += e.currentMonth > 11 ? 1 : -1),
        (e.currentMonth = (e.currentMonth + 12) % 12),
        Ge('onYearChange'),
        ie()),
      J(),
      Ge('onMonthChange'),
      Ur());
  }
  function A(g, T) {
    if (
      (g === void 0 && (g = !0),
      T === void 0 && (T = !0),
      (e.input.value = ''),
      e.altInput !== void 0 && (e.altInput.value = ''),
      e.mobileInput !== void 0 && (e.mobileInput.value = ''),
      (e.selectedDates = []),
      (e.latestSelectedDateObj = void 0),
      T === !0 &&
        ((e.currentYear = e._initialDate.getFullYear()),
        (e.currentMonth = e._initialDate.getMonth())),
      e.config.enableTime === !0)
    ) {
      var N = bs(e.config),
        W = N.hours,
        re = N.minutes,
        ue = N.seconds;
      p(W, re, ue);
    }
    e.redraw(), g && Ge('onChange');
  }
  function U() {
    (e.isOpen = !1),
      e.isMobile ||
        (e.calendarContainer !== void 0 &&
          e.calendarContainer.classList.remove('open'),
        e._input !== void 0 && e._input.classList.remove('active')),
      Ge('onClose');
  }
  function I() {
    e.config !== void 0 && Ge('onDestroy');
    for (var g = e._handlers.length; g--; ) e._handlers[g].remove();
    if (((e._handlers = []), e.mobileInput))
      e.mobileInput.parentNode &&
        e.mobileInput.parentNode.removeChild(e.mobileInput),
        (e.mobileInput = void 0);
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var T = e.calendarContainer.parentNode;
        if ((T.lastChild && T.removeChild(T.lastChild), T.parentNode)) {
          for (; T.firstChild; ) T.parentNode.insertBefore(T.firstChild, T);
          T.parentNode.removeChild(T);
        }
      } else e.calendarContainer.parentNode.removeChild(e.calendarContainer);
    e.altInput &&
      ((e.input.type = 'text'),
      e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput),
      delete e.altInput),
      e.input &&
        ((e.input.type = e.input._type),
        e.input.classList.remove('flatpickr-input'),
        e.input.removeAttribute('readonly')),
      [
        '_showTimeInput',
        'latestSelectedDateObj',
        '_hideNextMonthArrow',
        '_hidePrevMonthArrow',
        '__hideNextMonthArrow',
        '__hidePrevMonthArrow',
        'isMobile',
        'isOpen',
        'selectedDateElem',
        'minDateHasTime',
        'maxDateHasTime',
        'days',
        'daysContainer',
        '_input',
        '_positionElement',
        'innerContainer',
        'rContainer',
        'monthNav',
        'todayDateElem',
        'calendarContainer',
        'weekdayContainer',
        'prevMonthNav',
        'nextMonthNav',
        'monthsDropdownContainer',
        'currentMonthElement',
        'currentYearElement',
        'navigationCurrentMonth',
        'selectedDateElem',
        'config',
      ].forEach(function (N) {
        try {
          delete e[N];
        } catch {}
      });
  }
  function O(g) {
    return e.calendarContainer.contains(g);
  }
  function z(g) {
    if (e.isOpen && !e.config.inline) {
      var T = er(g),
        N = O(T),
        W =
          T === e.input ||
          T === e.altInput ||
          e.element.contains(T) ||
          (g.path &&
            g.path.indexOf &&
            (~g.path.indexOf(e.input) || ~g.path.indexOf(e.altInput))),
        re = !W && !N && !O(g.relatedTarget),
        ue = !e.config.ignoredFocusElements.some(function (De) {
          return De.contains(T);
        });
      re &&
        ue &&
        (e.config.allowInput &&
          e.setDate(
            e._input.value,
            !1,
            e.config.altInput ? e.config.altFormat : e.config.dateFormat,
          ),
        e.timeContainer !== void 0 &&
          e.minuteElement !== void 0 &&
          e.hourElement !== void 0 &&
          e.input.value !== '' &&
          e.input.value !== void 0 &&
          l(),
        e.close(),
        e.config &&
          e.config.mode === 'range' &&
          e.selectedDates.length === 1 &&
          e.clear(!1));
    }
  }
  function ge(g) {
    if (
      !(
        !g ||
        (e.config.minDate && g < e.config.minDate.getFullYear()) ||
        (e.config.maxDate && g > e.config.maxDate.getFullYear())
      )
    ) {
      var T = g,
        N = e.currentYear !== T;
      (e.currentYear = T || e.currentYear),
        e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear()
          ? (e.currentMonth = Math.min(
              e.config.maxDate.getMonth(),
              e.currentMonth,
            ))
          : e.config.minDate &&
            e.currentYear === e.config.minDate.getFullYear() &&
            (e.currentMonth = Math.max(
              e.config.minDate.getMonth(),
              e.currentMonth,
            )),
        N && (e.redraw(), Ge('onYearChange'), ie());
    }
  }
  function _e(g, T) {
    var N;
    T === void 0 && (T = !0);
    var W = e.parseDate(g, void 0, T);
    if (
      (e.config.minDate &&
        W &&
        tr(W, e.config.minDate, T !== void 0 ? T : !e.minDateHasTime) < 0) ||
      (e.config.maxDate &&
        W &&
        tr(W, e.config.maxDate, T !== void 0 ? T : !e.maxDateHasTime) > 0)
    )
      return !1;
    if (!e.config.enable && e.config.disable.length === 0) return !0;
    if (W === void 0) return !1;
    for (
      var re = !!e.config.enable,
        ue =
          (N = e.config.enable) !== null && N !== void 0 ? N : e.config.disable,
        De = 0,
        we = void 0;
      De < ue.length;
      De++
    ) {
      if (((we = ue[De]), typeof we == 'function' && we(W))) return re;
      if (we instanceof Date && W !== void 0 && we.getTime() === W.getTime())
        return re;
      if (typeof we == 'string') {
        var Fe = e.parseDate(we, void 0, !0);
        return Fe && Fe.getTime() === W.getTime() ? re : !re;
      } else if (
        typeof we == 'object' &&
        W !== void 0 &&
        we.from &&
        we.to &&
        W.getTime() >= we.from.getTime() &&
        W.getTime() <= we.to.getTime()
      )
        return re;
    }
    return !re;
  }
  function xe(g) {
    return e.daysContainer !== void 0
      ? g.className.indexOf('hidden') === -1 &&
          g.className.indexOf('flatpickr-disabled') === -1 &&
          e.daysContainer.contains(g)
      : !1;
  }
  function le(g) {
    var T = g.target === e._input,
      N = e._input.value.trimEnd() !== ee();
    T &&
      N &&
      !(g.relatedTarget && O(g.relatedTarget)) &&
      e.setDate(
        e._input.value,
        !0,
        g.target === e.altInput ? e.config.altFormat : e.config.dateFormat,
      );
  }
  function Le(g) {
    var T = er(g),
      N = e.config.wrap ? t.contains(T) : T === e._input,
      W = e.config.allowInput,
      re = e.isOpen && (!W || !N),
      ue = e.config.inline && N && !W;
    if (g.keyCode === 13 && N) {
      if (W)
        return (
          e.setDate(
            e._input.value,
            !0,
            T === e.altInput ? e.config.altFormat : e.config.dateFormat,
          ),
          e.close(),
          T.blur()
        );
      e.open();
    } else if (O(T) || re || ue) {
      var De = !!e.timeContainer && e.timeContainer.contains(T);
      switch (g.keyCode) {
        case 13:
          De ? (g.preventDefault(), l(), Br()) : Ht(g);
          break;
        case 27:
          g.preventDefault(), Br();
          break;
        case 8:
        case 46:
          N && !e.config.allowInput && (g.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!De && !N) {
            g.preventDefault();
            var we = i();
            if (e.daysContainer !== void 0 && (W === !1 || (we && xe(we)))) {
              var Fe = g.keyCode === 39 ? 1 : -1;
              g.ctrlKey
                ? (g.stopPropagation(), ft(Fe), X(H(1), 0))
                : X(void 0, Fe);
            }
          } else e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          g.preventDefault();
          var me = g.keyCode === 40 ? 1 : -1;
          (e.daysContainer && T.$i !== void 0) ||
          T === e.input ||
          T === e.altInput
            ? g.ctrlKey
              ? (g.stopPropagation(), ge(e.currentYear - me), X(H(1), 0))
              : De || X(void 0, me * 7)
            : T === e.currentYearElement
              ? ge(e.currentYear - me)
              : e.config.enableTime &&
                (!De && e.hourElement && e.hourElement.focus(),
                l(g),
                e._debouncedChange());
          break;
        case 9:
          if (De) {
            var Se = [e.hourElement, e.minuteElement, e.secondElement, e.amPM]
                .concat(e.pluginElements)
                .filter(function (_) {
                  return _;
                }),
              Ue = Se.indexOf(T);
            if (Ue !== -1) {
              var m = Se[Ue + (g.shiftKey ? -1 : 1)];
              g.preventDefault(), (m || e._input).focus();
            }
          } else
            !e.config.noCalendar &&
              e.daysContainer &&
              e.daysContainer.contains(T) &&
              g.shiftKey &&
              (g.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && T === e.amPM)
      switch (g.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          (e.amPM.textContent = e.l10n.amPM[0]), d(), ye();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          (e.amPM.textContent = e.l10n.amPM[1]), d(), ye();
          break;
      }
    (N || O(T)) && Ge('onKeyDown', g);
  }
  function ke(g, T) {
    if (
      (T === void 0 && (T = 'flatpickr-day'),
      !(
        e.selectedDates.length !== 1 ||
        (g &&
          (!g.classList.contains(T) ||
            g.classList.contains('flatpickr-disabled')))
      ))
    ) {
      for (
        var N = g
            ? g.dateObj.getTime()
            : e.days.firstElementChild.dateObj.getTime(),
          W = e.parseDate(e.selectedDates[0], void 0, !0).getTime(),
          re = Math.min(N, e.selectedDates[0].getTime()),
          ue = Math.max(N, e.selectedDates[0].getTime()),
          De = !1,
          we = 0,
          Fe = 0,
          me = re;
        me < ue;
        me += aw.DAY
      )
        _e(new Date(me), !0) ||
          ((De = De || (me > re && me < ue)),
          me < W && (!we || me > we)
            ? (we = me)
            : me > W && (!Fe || me < Fe) && (Fe = me));
      var Se = Array.from(
        e.rContainer.querySelectorAll(
          '*:nth-child(-n+' + e.config.showMonths + ') > .' + T,
        ),
      );
      Se.forEach(function (Ue) {
        var m = Ue.dateObj,
          _ = m.getTime(),
          w = (we > 0 && _ < we) || (Fe > 0 && _ > Fe);
        if (w) {
          Ue.classList.add('notAllowed'),
            ['inRange', 'startRange', 'endRange'].forEach(function (E) {
              Ue.classList.remove(E);
            });
          return;
        } else if (De && !w) return;
        ['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(
          function (E) {
            Ue.classList.remove(E);
          },
        ),
          g !== void 0 &&
            (g.classList.add(
              N <= e.selectedDates[0].getTime() ? 'startRange' : 'endRange',
            ),
            W < N && _ === W
              ? Ue.classList.add('startRange')
              : W > N && _ === W && Ue.classList.add('endRange'),
            _ >= we &&
              (Fe === 0 || _ <= Fe) &&
              rw(_, W, N) &&
              Ue.classList.add('inRange'));
      });
    }
  }
  function Et() {
    e.isOpen && !e.config.static && !e.config.inline && Pt();
  }
  function Be(g, T) {
    if ((T === void 0 && (T = e._positionElement), e.isMobile === !0)) {
      if (g) {
        g.preventDefault();
        var N = er(g);
        N && N.blur();
      }
      e.mobileInput !== void 0 &&
        (e.mobileInput.focus(), e.mobileInput.click()),
        Ge('onOpen');
      return;
    } else if (e._input.disabled || e.config.inline) return;
    var W = e.isOpen;
    (e.isOpen = !0),
      W ||
        (e.calendarContainer.classList.add('open'),
        e._input.classList.add('active'),
        Ge('onOpen'),
        Pt(T)),
      e.config.enableTime === !0 &&
        e.config.noCalendar === !0 &&
        e.config.allowInput === !1 &&
        (g === void 0 || !e.timeContainer.contains(g.relatedTarget)) &&
        setTimeout(function () {
          return e.hourElement.select();
        }, 50);
  }
  function Ct(g) {
    return function (T) {
      var N = (e.config['_' + g + 'Date'] = e.parseDate(
          T,
          e.config.dateFormat,
        )),
        W = e.config['_' + (g === 'min' ? 'max' : 'min') + 'Date'];
      N !== void 0 &&
        (e[g === 'min' ? 'minDateHasTime' : 'maxDateHasTime'] =
          N.getHours() > 0 || N.getMinutes() > 0 || N.getSeconds() > 0),
        e.selectedDates &&
          ((e.selectedDates = e.selectedDates.filter(function (re) {
            return _e(re);
          })),
          !e.selectedDates.length && g === 'min' && u(N),
          ye()),
        e.daysContainer &&
          (en(),
          N !== void 0
            ? (e.currentYearElement[g] = N.getFullYear().toString())
            : e.currentYearElement.removeAttribute(g),
          (e.currentYearElement.disabled =
            !!W && N !== void 0 && W.getFullYear() === N.getFullYear()));
    };
  }
  function rt() {
    var g = [
        'wrap',
        'weekNumbers',
        'allowInput',
        'allowInvalidPreload',
        'clickOpens',
        'time_24hr',
        'enableTime',
        'noCalendar',
        'altInput',
        'shorthandCurrentMonth',
        'inline',
        'static',
        'enableSeconds',
        'disableMobile',
      ],
      T = Mt(Mt({}, JSON.parse(JSON.stringify(t.dataset || {}))), r),
      N = {};
    (e.config.parseDate = T.parseDate),
      (e.config.formatDate = T.formatDate),
      Object.defineProperty(e.config, 'enable', {
        get: function () {
          return e.config._enable;
        },
        set: function (Se) {
          e.config._enable = gn(Se);
        },
      }),
      Object.defineProperty(e.config, 'disable', {
        get: function () {
          return e.config._disable;
        },
        set: function (Se) {
          e.config._disable = gn(Se);
        },
      });
    var W = T.mode === 'time';
    if (!T.dateFormat && (T.enableTime || W)) {
      var re = gt.defaultConfig.dateFormat || ia.dateFormat;
      N.dateFormat =
        T.noCalendar || W
          ? 'H:i' + (T.enableSeconds ? ':S' : '')
          : re + ' H:i' + (T.enableSeconds ? ':S' : '');
    }
    if (T.altInput && (T.enableTime || W) && !T.altFormat) {
      var ue = gt.defaultConfig.altFormat || ia.altFormat;
      N.altFormat =
        T.noCalendar || W
          ? 'h:i' + (T.enableSeconds ? ':S K' : ' K')
          : ue + (' h:i' + (T.enableSeconds ? ':S' : '') + ' K');
    }
    Object.defineProperty(e.config, 'minDate', {
      get: function () {
        return e.config._minDate;
      },
      set: Ct('min'),
    }),
      Object.defineProperty(e.config, 'maxDate', {
        get: function () {
          return e.config._maxDate;
        },
        set: Ct('max'),
      });
    var De = function (Se) {
      return function (Ue) {
        e.config[Se === 'min' ? '_minTime' : '_maxTime'] = e.parseDate(
          Ue,
          'H:i:S',
        );
      };
    };
    Object.defineProperty(e.config, 'minTime', {
      get: function () {
        return e.config._minTime;
      },
      set: De('min'),
    }),
      Object.defineProperty(e.config, 'maxTime', {
        get: function () {
          return e.config._maxTime;
        },
        set: De('max'),
      }),
      T.mode === 'time' &&
        ((e.config.noCalendar = !0), (e.config.enableTime = !0)),
      Object.assign(e.config, N, T);
    for (var we = 0; we < g.length; we++)
      e.config[g[we]] = e.config[g[we]] === !0 || e.config[g[we]] === 'true';
    Ns.filter(function (Se) {
      return e.config[Se] !== void 0;
    }).forEach(function (Se) {
      e.config[Se] = Rs(e.config[Se] || []).map(s);
    }),
      (e.isMobile =
        !e.config.disableMobile &&
        !e.config.inline &&
        e.config.mode === 'single' &&
        !e.config.disable.length &&
        !e.config.enable &&
        !e.config.weekNumbers &&
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ));
    for (var we = 0; we < e.config.plugins.length; we++) {
      var Fe = e.config.plugins[we](e) || {};
      for (var me in Fe)
        Ns.indexOf(me) > -1
          ? (e.config[me] = Rs(Fe[me]).map(s).concat(e.config[me]))
          : typeof T[me] > 'u' && (e.config[me] = Fe[me]);
    }
    T.altInputClass ||
      (e.config.altInputClass = he().className + ' ' + e.config.altInputClass),
      Ge('onParseConfig');
  }
  function he() {
    return e.config.wrap ? t.querySelector('[data-input]') : t;
  }
  function Dt() {
    typeof e.config.locale != 'object' &&
      typeof gt.l10ns[e.config.locale] > 'u' &&
      e.config.errorHandler(
        new Error('flatpickr: invalid locale ' + e.config.locale),
      ),
      (e.l10n = Mt(
        Mt({}, gt.l10ns.default),
        typeof e.config.locale == 'object'
          ? e.config.locale
          : e.config.locale !== 'default'
            ? gt.l10ns[e.config.locale]
            : void 0,
      )),
      (Fn.D = '(' + e.l10n.weekdays.shorthand.join('|') + ')'),
      (Fn.l = '(' + e.l10n.weekdays.longhand.join('|') + ')'),
      (Fn.M = '(' + e.l10n.months.shorthand.join('|') + ')'),
      (Fn.F = '(' + e.l10n.months.longhand.join('|') + ')'),
      (Fn.K =
        '(' +
        e.l10n.amPM[0] +
        '|' +
        e.l10n.amPM[1] +
        '|' +
        e.l10n.amPM[0].toLowerCase() +
        '|' +
        e.l10n.amPM[1].toLowerCase() +
        ')');
    var g = Mt(Mt({}, r), JSON.parse(JSON.stringify(t.dataset || {})));
    g.time_24hr === void 0 &&
      gt.defaultConfig.time_24hr === void 0 &&
      (e.config.time_24hr = e.l10n.time_24hr),
      (e.formatDate = Xc(e)),
      (e.parseDate = Js({ config: e.config, l10n: e.l10n }));
  }
  function Pt(g) {
    if (typeof e.config.position == 'function')
      return void e.config.position(e, g);
    if (e.calendarContainer !== void 0) {
      Ge('onPreCalendarPosition');
      var T = g || e._positionElement,
        N = Array.prototype.reduce.call(
          e.calendarContainer.children,
          function (oe, de) {
            return oe + de.offsetHeight;
          },
          0,
        ),
        W = e.calendarContainer.offsetWidth,
        re = e.config.position.split(' '),
        ue = re[0],
        De = re.length > 1 ? re[1] : null,
        we = T.getBoundingClientRect(),
        Fe = window.innerHeight - we.bottom,
        me = ue === 'above' || (ue !== 'below' && Fe < N && we.top > N),
        Se = window.pageYOffset + we.top + (me ? -N - 2 : T.offsetHeight + 2);
      if (
        (Wt(e.calendarContainer, 'arrowTop', !me),
        Wt(e.calendarContainer, 'arrowBottom', me),
        !e.config.inline)
      ) {
        var Ue = window.pageXOffset + we.left,
          m = !1,
          _ = !1;
        De === 'center'
          ? ((Ue -= (W - we.width) / 2), (m = !0))
          : De === 'right' && ((Ue -= W - we.width), (_ = !0)),
          Wt(e.calendarContainer, 'arrowLeft', !m && !_),
          Wt(e.calendarContainer, 'arrowCenter', m),
          Wt(e.calendarContainer, 'arrowRight', _);
        var w =
            window.document.body.offsetWidth - (window.pageXOffset + we.right),
          E = Ue + W > window.document.body.offsetWidth,
          y = w + W > window.document.body.offsetWidth;
        if ((Wt(e.calendarContainer, 'rightMost', E), !e.config.static))
          if (((e.calendarContainer.style.top = Se + 'px'), !E))
            (e.calendarContainer.style.left = Ue + 'px'),
              (e.calendarContainer.style.right = 'auto');
          else if (!y)
            (e.calendarContainer.style.left = 'auto'),
              (e.calendarContainer.style.right = w + 'px');
          else {
            var S = wr();
            if (S === void 0) return;
            var P = window.document.body.offsetWidth,
              G = Math.max(0, P / 2 - W / 2),
              b = '.flatpickr-calendar.centerMost:before',
              M = '.flatpickr-calendar.centerMost:after',
              B = S.cssRules.length,
              Q = '{left:' + we.left + 'px;right:auto;}';
            Wt(e.calendarContainer, 'rightMost', !1),
              Wt(e.calendarContainer, 'centerMost', !0),
              S.insertRule(b + ',' + M + Q, B),
              (e.calendarContainer.style.left = G + 'px'),
              (e.calendarContainer.style.right = 'auto');
          }
      }
    }
  }
  function wr() {
    for (var g = null, T = 0; T < document.styleSheets.length; T++) {
      var N = document.styleSheets[T];
      if (N.cssRules) {
        try {
          N.cssRules;
        } catch {
          continue;
        }
        g = N;
        break;
      }
    }
    return g ?? Nr();
  }
  function Nr() {
    var g = document.createElement('style');
    return document.head.appendChild(g), g.sheet;
  }
  function en() {
    e.config.noCalendar || e.isMobile || (ie(), Ur(), J());
  }
  function Br() {
    e._input.focus(),
      window.navigator.userAgent.indexOf('MSIE') !== -1 ||
      navigator.msMaxTouchPoints !== void 0
        ? setTimeout(e.close, 0)
        : e.close();
  }
  function Ht(g) {
    g.preventDefault(), g.stopPropagation();
    var T = function (Se) {
        return (
          Se.classList &&
          Se.classList.contains('flatpickr-day') &&
          !Se.classList.contains('flatpickr-disabled') &&
          !Se.classList.contains('notAllowed')
        );
      },
      N = Yc(er(g), T);
    if (N !== void 0) {
      var W = N,
        re = (e.latestSelectedDateObj = new Date(W.dateObj.getTime())),
        ue =
          (re.getMonth() < e.currentMonth ||
            re.getMonth() > e.currentMonth + e.config.showMonths - 1) &&
          e.config.mode !== 'range';
      if (((e.selectedDateElem = W), e.config.mode === 'single'))
        e.selectedDates = [re];
      else if (e.config.mode === 'multiple') {
        var De = Tn(re);
        De ? e.selectedDates.splice(parseInt(De), 1) : e.selectedDates.push(re);
      } else
        e.config.mode === 'range' &&
          (e.selectedDates.length === 2 && e.clear(!1, !1),
          (e.latestSelectedDateObj = re),
          e.selectedDates.push(re),
          tr(re, e.selectedDates[0], !0) !== 0 &&
            e.selectedDates.sort(function (Se, Ue) {
              return Se.getTime() - Ue.getTime();
            }));
      if ((d(), ue)) {
        var we = e.currentYear !== re.getFullYear();
        (e.currentYear = re.getFullYear()),
          (e.currentMonth = re.getMonth()),
          we && (Ge('onYearChange'), ie()),
          Ge('onMonthChange');
      }
      if (
        (Ur(),
        J(),
        ye(),
        !ue && e.config.mode !== 'range' && e.config.showMonths === 1
          ? R(W)
          : e.selectedDateElem !== void 0 &&
            e.hourElement === void 0 &&
            e.selectedDateElem &&
            e.selectedDateElem.focus(),
        e.hourElement !== void 0 &&
          e.hourElement !== void 0 &&
          e.hourElement.focus(),
        e.config.closeOnSelect)
      ) {
        var Fe = e.config.mode === 'single' && !e.config.enableTime,
          me =
            e.config.mode === 'range' &&
            e.selectedDates.length === 2 &&
            !e.config.enableTime;
        (Fe || me) && Br();
      }
      x();
    }
  }
  var cr = {
    locale: [Dt, qe],
    showMonths: [Ce, o, pt],
    minDate: [C],
    maxDate: [C],
    positionElement: [nn],
    clickOpens: [
      function () {
        e.config.clickOpens === !0
          ? (h(e._input, 'focus', e.open), h(e._input, 'click', e.open))
          : (e._input.removeEventListener('focus', e.open),
            e._input.removeEventListener('click', e.open));
      },
    ],
  };
  function tn(g, T) {
    if (g !== null && typeof g == 'object') {
      Object.assign(e.config, g);
      for (var N in g)
        cr[N] !== void 0 &&
          cr[N].forEach(function (W) {
            return W();
          });
    } else
      (e.config[g] = T),
        cr[g] !== void 0
          ? cr[g].forEach(function (W) {
              return W();
            })
          : Ns.indexOf(g) > -1 && (e.config[g] = Rs(T));
    e.redraw(), ye(!0);
  }
  function rn(g, T) {
    var N = [];
    if (g instanceof Array)
      N = g.map(function (W) {
        return e.parseDate(W, T);
      });
    else if (g instanceof Date || typeof g == 'number') N = [e.parseDate(g, T)];
    else if (typeof g == 'string')
      switch (e.config.mode) {
        case 'single':
        case 'time':
          N = [e.parseDate(g, T)];
          break;
        case 'multiple':
          N = g.split(e.config.conjunction).map(function (W) {
            return e.parseDate(W, T);
          });
          break;
        case 'range':
          N = g.split(e.l10n.rangeSeparator).map(function (W) {
            return e.parseDate(W, T);
          });
          break;
      }
    else
      e.config.errorHandler(
        new Error('Invalid date supplied: ' + JSON.stringify(g)),
      );
    (e.selectedDates = e.config.allowInvalidPreload
      ? N
      : N.filter(function (W) {
          return W instanceof Date && _e(W, !1);
        })),
      e.config.mode === 'range' &&
        e.selectedDates.sort(function (W, re) {
          return W.getTime() - re.getTime();
        });
  }
  function Er(g, T, N) {
    if (
      (T === void 0 && (T = !1),
      N === void 0 && (N = e.config.dateFormat),
      (g !== 0 && !g) || (g instanceof Array && g.length === 0))
    )
      return e.clear(T);
    rn(g, N),
      (e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1]),
      e.redraw(),
      C(void 0, T),
      u(),
      e.selectedDates.length === 0 && e.clear(!1),
      ye(T),
      T && Ge('onChange');
  }
  function gn(g) {
    return g
      .slice()
      .map(function (T) {
        return typeof T == 'string' || typeof T == 'number' || T instanceof Date
          ? e.parseDate(T, void 0, !0)
          : T && typeof T == 'object' && T.from && T.to
            ? {
                from: e.parseDate(T.from, void 0),
                to: e.parseDate(T.to, void 0),
              }
            : T;
      })
      .filter(function (T) {
        return T;
      });
  }
  function jn() {
    (e.selectedDates = []), (e.now = e.parseDate(e.config.now) || new Date());
    var g =
      e.config.defaultDate ||
      ((e.input.nodeName === 'INPUT' || e.input.nodeName === 'TEXTAREA') &&
      e.input.placeholder &&
      e.input.value === e.input.placeholder
        ? null
        : e.input.value);
    g && rn(g, e.config.dateFormat),
      (e._initialDate =
        e.selectedDates.length > 0
          ? e.selectedDates[0]
          : e.config.minDate && e.config.minDate.getTime() > e.now.getTime()
            ? e.config.minDate
            : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime()
              ? e.config.maxDate
              : e.now),
      (e.currentYear = e._initialDate.getFullYear()),
      (e.currentMonth = e._initialDate.getMonth()),
      e.selectedDates.length > 0 &&
        (e.latestSelectedDateObj = e.selectedDates[0]),
      e.config.minTime !== void 0 &&
        (e.config.minTime = e.parseDate(e.config.minTime, 'H:i')),
      e.config.maxTime !== void 0 &&
        (e.config.maxTime = e.parseDate(e.config.maxTime, 'H:i')),
      (e.minDateHasTime =
        !!e.config.minDate &&
        (e.config.minDate.getHours() > 0 ||
          e.config.minDate.getMinutes() > 0 ||
          e.config.minDate.getSeconds() > 0)),
      (e.maxDateHasTime =
        !!e.config.maxDate &&
        (e.config.maxDate.getHours() > 0 ||
          e.config.maxDate.getMinutes() > 0 ||
          e.config.maxDate.getSeconds() > 0));
  }
  function _n() {
    if (((e.input = he()), !e.input)) {
      e.config.errorHandler(new Error('Invalid input element specified'));
      return;
    }
    (e.input._type = e.input.type),
      (e.input.type = 'text'),
      e.input.classList.add('flatpickr-input'),
      (e._input = e.input),
      e.config.altInput &&
        ((e.altInput = Ve(e.input.nodeName, e.config.altInputClass)),
        (e._input = e.altInput),
        (e.altInput.placeholder = e.input.placeholder),
        (e.altInput.disabled = e.input.disabled),
        (e.altInput.required = e.input.required),
        (e.altInput.tabIndex = e.input.tabIndex),
        (e.altInput.type = 'text'),
        e.input.setAttribute('type', 'hidden'),
        !e.config.static &&
          e.input.parentNode &&
          e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)),
      e.config.allowInput || e._input.setAttribute('readonly', 'readonly'),
      nn();
  }
  function nn() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function wn() {
    var g = e.config.enableTime
      ? e.config.noCalendar
        ? 'time'
        : 'datetime-local'
      : 'date';
    (e.mobileInput = Ve('input', e.input.className + ' flatpickr-mobile')),
      (e.mobileInput.tabIndex = 1),
      (e.mobileInput.type = g),
      (e.mobileInput.disabled = e.input.disabled),
      (e.mobileInput.required = e.input.required),
      (e.mobileInput.placeholder = e.input.placeholder),
      (e.mobileFormatStr =
        g === 'datetime-local'
          ? 'Y-m-d\\TH:i:S'
          : g === 'date'
            ? 'Y-m-d'
            : 'H:i:S'),
      e.selectedDates.length > 0 &&
        (e.mobileInput.defaultValue = e.mobileInput.value =
          e.formatDate(e.selectedDates[0], e.mobileFormatStr)),
      e.config.minDate &&
        (e.mobileInput.min = e.formatDate(e.config.minDate, 'Y-m-d')),
      e.config.maxDate &&
        (e.mobileInput.max = e.formatDate(e.config.maxDate, 'Y-m-d')),
      e.input.getAttribute('step') &&
        (e.mobileInput.step = String(e.input.getAttribute('step'))),
      (e.input.type = 'hidden'),
      e.altInput !== void 0 && (e.altInput.type = 'hidden');
    try {
      e.input.parentNode &&
        e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling);
    } catch {}
    h(e.mobileInput, 'change', function (T) {
      e.setDate(er(T).value, !1, e.mobileFormatStr),
        Ge('onChange'),
        Ge('onClose');
    });
  }
  function Gn(g) {
    if (e.isOpen === !0) return e.close();
    e.open(g);
  }
  function Ge(g, T) {
    if (e.config !== void 0) {
      var N = e.config[g];
      if (N !== void 0 && N.length > 0)
        for (var W = 0; N[W] && W < N.length; W++)
          N[W](e.selectedDates, e.input.value, e, T);
      g === 'onChange' &&
        (e.input.dispatchEvent(En('change')),
        e.input.dispatchEvent(En('input')));
    }
  }
  function En(g) {
    var T = document.createEvent('Event');
    return T.initEvent(g, !0, !0), T;
  }
  function Tn(g) {
    for (var T = 0; T < e.selectedDates.length; T++) {
      var N = e.selectedDates[T];
      if (N instanceof Date && tr(N, g) === 0) return '' + T;
    }
    return !1;
  }
  function Yn(g) {
    return e.config.mode !== 'range' || e.selectedDates.length < 2
      ? !1
      : tr(g, e.selectedDates[0]) >= 0 && tr(g, e.selectedDates[1]) <= 0;
  }
  function Ur() {
    e.config.noCalendar ||
      e.isMobile ||
      !e.monthNav ||
      (e.yearElements.forEach(function (g, T) {
        var N = new Date(e.currentYear, e.currentMonth, 1);
        N.setMonth(e.currentMonth + T),
          e.config.showMonths > 1 || e.config.monthSelectorType === 'static'
            ? (e.monthElements[T].textContent =
                Ki(N.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + ' ')
            : (e.monthsDropdownContainer.value = N.getMonth().toString()),
          (g.value = N.getFullYear().toString());
      }),
      (e._hidePrevMonthArrow =
        e.config.minDate !== void 0 &&
        (e.currentYear === e.config.minDate.getFullYear()
          ? e.currentMonth <= e.config.minDate.getMonth()
          : e.currentYear < e.config.minDate.getFullYear())),
      (e._hideNextMonthArrow =
        e.config.maxDate !== void 0 &&
        (e.currentYear === e.config.maxDate.getFullYear()
          ? e.currentMonth + 1 > e.config.maxDate.getMonth()
          : e.currentYear > e.config.maxDate.getFullYear())));
  }
  function ee(g) {
    var T = g || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates
      .map(function (N) {
        return e.formatDate(N, T);
      })
      .filter(function (N, W, re) {
        return (
          e.config.mode !== 'range' ||
          e.config.enableTime ||
          re.indexOf(N) === W
        );
      })
      .join(
        e.config.mode !== 'range'
          ? e.config.conjunction
          : e.l10n.rangeSeparator,
      );
  }
  function ye(g) {
    g === void 0 && (g = !0),
      e.mobileInput !== void 0 &&
        e.mobileFormatStr &&
        (e.mobileInput.value =
          e.latestSelectedDateObj !== void 0
            ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr)
            : ''),
      (e.input.value = ee(e.config.dateFormat)),
      e.altInput !== void 0 && (e.altInput.value = ee(e.config.altFormat)),
      g !== !1 && Ge('onValueUpdate');
  }
  function nt(g) {
    var T = er(g),
      N = e.prevMonthNav.contains(T),
      W = e.nextMonthNav.contains(T);
    N || W
      ? ft(N ? -1 : 1)
      : e.yearElements.indexOf(T) >= 0
        ? T.select()
        : T.classList.contains('arrowUp')
          ? e.changeYear(e.currentYear + 1)
          : T.classList.contains('arrowDown') &&
            e.changeYear(e.currentYear - 1);
  }
  function lt(g) {
    g.preventDefault();
    var T = g.type === 'keydown',
      N = er(g),
      W = N;
    e.amPM !== void 0 &&
      N === e.amPM &&
      (e.amPM.textContent =
        e.l10n.amPM[pr(e.amPM.textContent === e.l10n.amPM[0])]);
    var re = parseFloat(W.getAttribute('min')),
      ue = parseFloat(W.getAttribute('max')),
      De = parseFloat(W.getAttribute('step')),
      we = parseInt(W.value, 10),
      Fe = g.delta || (T ? (g.which === 38 ? 1 : -1) : 0),
      me = we + De * Fe;
    if (typeof W.value < 'u' && W.value.length === 2) {
      var Se = W === e.hourElement,
        Ue = W === e.minuteElement;
      me < re
        ? ((me = ue + me + pr(!Se) + (pr(Se) && pr(!e.amPM))),
          Ue && k(void 0, -1, e.hourElement))
        : me > ue &&
          ((me = W === e.hourElement ? me - ue - pr(!e.amPM) : re),
          Ue && k(void 0, 1, e.hourElement)),
        e.amPM &&
          Se &&
          (De === 1 ? me + we === 23 : Math.abs(me - we) > De) &&
          (e.amPM.textContent =
            e.l10n.amPM[pr(e.amPM.textContent === e.l10n.amPM[0])]),
        (W.value = $t(me));
    }
  }
  return a(), e;
}
function sa(t, r) {
  for (
    var e = Array.prototype.slice.call(t).filter(function (s) {
        return s instanceof HTMLElement;
      }),
      n = [],
      a = 0;
    a < e.length;
    a++
  ) {
    var i = e[a];
    try {
      if (i.getAttribute('data-fp-omit') !== null) continue;
      i._flatpickr !== void 0 &&
        (i._flatpickr.destroy(), (i._flatpickr = void 0)),
        (i._flatpickr = sw(i, r || {})),
        n.push(i._flatpickr);
    } catch (s) {
      console.error(s);
    }
  }
  return n.length === 1 ? n[0] : n;
}
typeof HTMLElement < 'u' &&
  typeof HTMLCollection < 'u' &&
  typeof NodeList < 'u' &&
  ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr =
    function (t) {
      return sa(this, t);
    }),
  (HTMLElement.prototype.flatpickr = function (t) {
    return sa([this], t);
  }));
var gt = function (t, r) {
  return typeof t == 'string'
    ? sa(window.document.querySelectorAll(t), r)
    : t instanceof Node
      ? sa([t], r)
      : sa(t, r);
};
gt.defaultConfig = {};
gt.l10ns = { en: Mt({}, Xa), default: Mt({}, Xa) };
gt.localize = function (t) {
  gt.l10ns.default = Mt(Mt({}, gt.l10ns.default), t);
};
gt.setDefaults = function (t) {
  gt.defaultConfig = Mt(Mt({}, gt.defaultConfig), t);
};
gt.parseDate = Js({});
gt.formatDate = Xc({});
gt.compareDates = tr;
typeof jQuery < 'u' &&
  typeof jQuery.fn < 'u' &&
  (jQuery.fn.flatpickr = function (t) {
    return sa(this, t);
  });
Date.prototype.fp_incr = function (t) {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() + (typeof t == 'string' ? parseInt(t, 10) : t),
  );
};
typeof window < 'u' && (window.flatpickr = gt);
var ow = tt('<option> </option>'),
  fw = tt('<option> </option>'),
  lw = tt(
    '<div class="add-form svelte-enmc9l"><h3 class="svelte-enmc9l">Add New Inwards Record</h3> <form class="svelte-enmc9l"><div class="form-group svelte-enmc9l"><label for="addBatchCode" class="svelte-enmc9l">Batch Code:</label> <input id="addBatchCode" type="text" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addItemCode" class="svelte-enmc9l">Item Code:</label> <select id="addItemCode" required class="svelte-enmc9l"><option disabled>Select an Item</option><!></select></div> <div class="form-group svelte-enmc9l"><label for="addSuppCode" class="svelte-enmc9l">Supplier Code:</label> <select id="addSuppCode" required class="svelte-enmc9l"><option disabled>Select a Supplier</option><!></select></div> <div class="form-group svelte-enmc9l"><label for="addRequestedQty" class="svelte-enmc9l">Requested Quantity:</label> <input id="addRequestedQty" type="number" min="0" step="0.001" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addReceivedQty" class="svelte-enmc9l">Received Quantity:</label> <input id="addReceivedQty" type="number" min="0" step="0.001" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addPurchasePrice" class="svelte-enmc9l">Purchase Price/Unit:</label> <input id="addPurchasePrice" type="number" step="0.001" min="0" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addEstimatePercentage" class="svelte-enmc9l">Estimated Profit (%):</label> <input id="addEstimatePercentage" type="number" step="0.01" min="0" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addDatePurchase" class="svelte-enmc9l">Purchase Date (DD/MM/YYYY):</label> <input id="addDatePurchase" type="text" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addExpiryDays" class="svelte-enmc9l">Expiry Days (from purchase):</label> <input id="addExpiryDays" type="number" min="0" step="0.001" required class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addItemUsed" class="svelte-enmc9l">Item Used For:</label> <input id="addItemUsed" type="text" class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addDesc1" class="svelte-enmc9l">Description 1:</label> <input id="addDesc1" type="text" class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addDesc2" class="svelte-enmc9l">Description 2:</label> <input id="addDesc2" type="text" class="svelte-enmc9l"/></div> <div class="form-group svelte-enmc9l"><label for="addDesc3" class="svelte-enmc9l">Description 3:</label> <input id="addDesc3" type="text" class="svelte-enmc9l"/></div> <div class="form-action svelte-enmc9l"><button type="submit" class="btn add-btn svelte-enmc9l">Add Record</button></div></form></div>',
  ),
  cw = tt('<p class="status svelte-enmc9l">Loading inwards records...</p>'),
  uw = tt('<p class="status error svelte-enmc9l"> </p>'),
  hw = tt('<p class="status svelte-enmc9l">No inwards records found.</p>'),
  dw = tt('<p class="status svelte-enmc9l"> </p>'),
  pw = tt('<option> </option>'),
  vw = tt('<select required></select>'),
  mw = tt('<option> </option>'),
  xw = tt('<select required></select>'),
  gw = tt('<input type="number" min="0" step="0.001" required/>'),
  _w = tt('<input type="number" min="0" step="0.001" required/>'),
  ww = tt('<input type="number" step="0.001" min="0" required/>'),
  Ew = tt('<input type="number" step="0.01" min="0" required/>'),
  Tw = tt('<input id="editedDatePurchase" type="text" required/>'),
  yw = tt('<input type="number" min="0" step="0.001" required/>'),
  Sw = tt('<input type="text"/>'),
  Aw = tt('<input type="text"/>'),
  Fw = tt('<input type="text"/>'),
  Cw = tt('<input type="text"/>'),
  Dw = tt(
    '<button class="btn save-btn svelte-enmc9l" title="Save Changes">Save</button> <button class="btn cancel-btn svelte-enmc9l" title="Cancel Edit">Cancel</button>',
    1,
  ),
  Ow = tt(
    '<button class="btn edit-btn svelte-enmc9l" title="Edit Record">Edit</button>',
  ),
  Nw = tt(
    '<tr class="svelte-enmc9l"><td class="svelte-enmc9l"> </td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"> </td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td><td class="svelte-enmc9l"><!></td></tr>',
  ),
  Rw = tt(
    '<div class="table-container svelte-enmc9l"><table class="svelte-enmc9l"><thead class="svelte-enmc9l"><tr><th class="svelte-enmc9l">Batch Code</th><th class="svelte-enmc9l">Item Code</th><th class="svelte-enmc9l">Supplier Code</th><th class="svelte-enmc9l">Req. Qty</th><th class="svelte-enmc9l">Rec. Qty</th><th class="svelte-enmc9l">Price/Unit</th><th class="svelte-enmc9l">Est. Profit (%)</th><th class="svelte-enmc9l">P. Date</th><th class="svelte-enmc9l">Exp. Date</th><th class="svelte-enmc9l">Exp. Days</th><th class="svelte-enmc9l">Used For</th><th class="svelte-enmc9l">Desc 1</th><th class="svelte-enmc9l">Desc 2</th><th class="svelte-enmc9l">Desc 3</th><th class="svelte-enmc9l">Actions</th></tr></thead><tbody class="svelte-enmc9l"></tbody></table></div>',
  ),
  kw = tt(
    '<!> <div class="wrapper svelte-enmc9l"><div class="card svelte-enmc9l"><div class="header svelte-enmc9l"><h2>Manage Inwards Records</h2> <div class="controls svelte-enmc9l"><input placeholder="Search all fields..." class="search-input svelte-enmc9l"/> <button class="btn excel-btn svelte-enmc9l">Export Excel</button> <button class="btn add-new-toggle-btn svelte-enmc9l"> </button></div></div> <!> <!></div></div>',
    1,
  );
function Iw(t, r) {
  i0(r, !1);
  const [e, n] = Rh(),
    a = () => Vr(x, '$searchTerm', e),
    i = () => Vr(F, '$showAddForm', e),
    s = () => Vr(D, '$itemOptions', e),
    o = () => Vr(C, '$supplierOptions', e),
    l = () => Vr(v, '$isLoading', e),
    f = () => Vr(p, '$rawInwards', e),
    c = () => Vr(h, '$errorMessage', e),
    d = () => Vr(Pt, '$filteredInwards', e),
    u = () => Vr(ze, '$editingBatchCode', e),
    p = Gr([]),
    v = Gr(!0),
    h = Gr(''),
    x = Gr(''),
    D = Gr([]),
    C = Gr([]),
    F = Gr(!1);
  let k = et(''),
    j = et(''),
    te = et(''),
    R = et(0),
    H = et(0),
    L = et(0),
    X = et(0),
    K = et(''),
    J = et(0),
    ie = et(''),
    Pe = et(''),
    Ce = et(''),
    ot = et('');
  const ze = Gr(null);
  let pt = et(''),
    qe = et(''),
    mt = et(0),
    ft = et(0),
    A = et(0),
    U = et(0),
    I = et(''),
    O = et(0),
    z = et(''),
    ge = et(''),
    _e = et(''),
    xe = et('');
  const le = 'http://localhost:3000/api/inwards';
  async function Le() {
    v.set(!0), h.set('');
    try {
      const ee = await it.get(le),
        ye = (Array.isArray(ee.data) ? ee.data : []).map((nt) => ({
          ...nt,
          expiryDays: Be(nt.datepurchase, nt.expiry),
        }));
      p.set(ye);
    } catch (ee) {
      const ye =
        ee.response?.data?.error ||
        ee.message ||
        'Failed to fetch inwards records.';
      h.set(ye), p.set([]);
    } finally {
      v.set(!1);
    }
  }
  async function ke() {
    try {
      const ee = await it.get(`${le}/item-list`);
      D.set(ee.data);
    } catch {
      h.set('Failed to fetch item list.'), D.set([]);
    }
  }
  async function Et() {
    try {
      const ee = await it.get(`${le}/supplier-list`);
      C.set(ee.data);
    } catch {
      h.set('Failed to fetch supplier list.'), C.set([]);
    }
  }
  Uf(async () => {
    await Le(),
      await ke(),
      await Et(),
      gt('#addDatePurchase', {
        dateFormat: 'd/m/Y',
        altInput: !0,
        altFormat: 'd/m/Y',
        onClose(ee, ye, nt) {
          if (ee.length > 0) {
            const lt = ee[0];
            ve(K, lt.toISOString().split('T')[0]);
          } else ve(K, '');
        },
      }),
      ze.subscribe((ee) => {});
  });
  function Be(ee, ye) {
    if (!ee || !ye) return null;
    const nt = new Date(ee),
      lt = new Date(ye);
    if (isNaN(nt.getTime()) || isNaN(lt.getTime())) return null;
    const g = lt.getTime() - nt.getTime();
    return Math.round(g / (1e3 * 60 * 60 * 24));
  }
  function Ct(ee) {
    if (!ee) return 'N/A';
    const ye = new Date(ee);
    return isNaN(ye.getTime())
      ? ee
      : ye.toLocaleDateString(void 0, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  }
  function rt(ee) {
    return ee == null || isNaN(Number(ee))
      ? 'N/A'
      : Number(ee).toLocaleString(void 0, {
          style: 'currency',
          currency: 'INR',
        });
  }
  function he(ee) {
    return ee == null || isNaN(Number(ee)) ? 'N/A' : Number(ee).toFixed(3);
  }
  function Dt(ee) {
    return ee == null || isNaN(Number(ee))
      ? 'N/A'
      : `${Number(ee).toFixed(2)}%`;
  }
  const Pt = Dh([p, x], ([ee, ye]) => {
    if (!ye.trim()) return ee;
    const nt = ye.toLowerCase();
    return ee.filter((lt) =>
      Object.values(lt).some(
        (g) => g != null && String(g).toLowerCase().includes(nt),
      ),
    );
  });
  async function wr() {
    h.set('');
    const ee = {
      batchcode: q(k).trim(),
      itemcode: q(j).trim(),
      suppcode: q(te).trim(),
      requestedqty: Number(q(R)),
      receivedqty: Number(q(H)),
      purchase_price_per_unit: Number(q(L)),
      estimate_percentage: Number(q(X)),
      datepurchase: q(K).trim(),
      expiryDays: Number(q(J)),
      itemused: q(ie).trim() || null,
      itemdesc1: q(Pe).trim() || null,
      itemdesc2: q(Ce).trim() || null,
      itemdesc3: q(ot).trim() || null,
    };
    if (
      !ee.batchcode ||
      !ee.itemcode ||
      !ee.suppcode ||
      isNaN(ee.requestedqty) ||
      ee.requestedqty < 0 ||
      isNaN(ee.receivedqty) ||
      ee.receivedqty < 0 ||
      isNaN(ee.purchase_price_per_unit) ||
      ee.purchase_price_per_unit < 0 ||
      isNaN(ee.estimate_percentage) ||
      ee.estimate_percentage < 0 ||
      !ee.datepurchase ||
      isNaN(ee.expiryDays) ||
      ee.expiryDays < 0
    ) {
      h.set(
        'Please fill all required fields correctly (quantities, expiry days, price, percentage non-negative, and dates valid).',
      );
      return;
    }
    if (ee.receivedqty > ee.requestedqty) {
      h.set('Received quantity cannot exceed requested quantity.');
      return;
    }
    try {
      await it.post(le, ee),
        ve(k, ''),
        ve(j, ''),
        ve(te, ''),
        ve(R, 0),
        ve(H, 0),
        ve(L, 0),
        ve(X, 0),
        ve(K, ''),
        ve(J, 0),
        ve(ie, ''),
        ve(Pe, ''),
        ve(Ce, ''),
        ve(ot, ''),
        await Le(),
        F.set(!1);
    } catch (ye) {
      const nt =
        ye.response?.data?.error ||
        ye.response?.statusText ||
        ye.message ||
        'Failed to add inwards record.';
      h.set(`Error adding inwards record: ${nt}`);
    }
  }
  function Nr(ee) {
    h.set(''),
      ze.set(ee.batchcode),
      ve(pt, ee.itemcode),
      ve(qe, ee.suppcode),
      ve(mt, ee.requestedqty),
      ve(ft, ee.receivedqty),
      ve(A, ee.purchase_price_per_unit),
      ve(U, ee.estimate_percentage),
      ve(I, ee.datepurchase),
      ve(O, ee.expiryDays),
      ve(z, ee.itemused || ''),
      ve(ge, ee.itemdesc1 || ''),
      ve(_e, ee.itemdesc2 || ''),
      ve(xe, ee.itemdesc3 || '');
  }
  function en() {
    h.set(''),
      ze.set(null),
      ve(pt, ''),
      ve(qe, ''),
      ve(mt, 0),
      ve(ft, 0),
      ve(A, 0),
      ve(U, 0),
      ve(I, ''),
      ve(O, 0),
      ve(z, ''),
      ve(ge, ''),
      ve(_e, ''),
      ve(xe, '');
  }
  async function Br(ee) {
    h.set('');
    const ye = {
      itemcode: q(pt).trim(),
      suppcode: q(qe).trim(),
      requestedqty: Number(q(mt)),
      receivedqty: Number(q(ft)),
      purchase_price_per_unit: Number(q(A)),
      estimate_percentage: Number(q(U)),
      datepurchase: q(I).trim(),
      expiryDays: Number(q(O)),
      itemused: q(z).trim() || null,
      itemdesc1: q(ge).trim() || null,
      itemdesc2: q(_e).trim() || null,
      itemdesc3: q(xe).trim() || null,
    };
    if (
      !ye.itemcode ||
      !ye.suppcode ||
      isNaN(ye.requestedqty) ||
      ye.requestedqty < 0 ||
      isNaN(ye.receivedqty) ||
      ye.receivedqty < 0 ||
      isNaN(ye.purchase_price_per_unit) ||
      ye.purchase_price_per_unit < 0 ||
      isNaN(ye.estimate_percentage) ||
      ye.estimate_percentage < 0 ||
      !ye.datepurchase ||
      isNaN(ye.expiryDays) ||
      ye.expiryDays < 0
    ) {
      h.set(
        'Edited fields must be valid (quantities, expiry days, price, percentage non-negative, and dates valid).',
      );
      return;
    }
    if (ye.receivedqty > ye.requestedqty) {
      h.set('Edited received quantity cannot exceed requested quantity.');
      return;
    }
    try {
      await it.put(`${le}/${ee}`, ye), await Le(), en();
    } catch (nt) {
      const lt =
        nt.response?.data?.error ||
        nt.message ||
        'Failed to update inwards record.';
      h.set(`Error updating inwards record: ${lt}`);
    }
  }
  function Ht() {
    const ee = p;
    if (!ee || ee.length === 0) {
      alert('No inwards data to export.');
      return;
    }
    const ye = ee.map((g) => ({
        'Batch Code': g.batchcode,
        'Item Code': g.itemcode,
        'Supplier Code': g.suppcode,
        'Requested Qty': he(g.requestedqty),
        'Received Qty': he(g.receivedqty),
        'Purchase Price Per Unit': he(g.purchase_price_per_unit),
        'Estimated Profit (%)': he(g.estimate_percentage),
        'Purchase Date': Ct(g.datepurchase),
        'Expiry Date': Ct(g.expiry),
        'Expiry Days': he(g.expiryDays),
        'Item Used For': g.itemused,
        'Description 1': g.itemdesc1,
        'Description 2': g.itemdesc2,
        'Description 3': g.itemdesc3,
      })),
      nt = Os.json_to_sheet(ye),
      lt = Os.book_new();
    Os.book_append_sheet(lt, nt, 'InwardsRecords'),
      H_(lt, 'InwardsRecords.xlsx');
  }
  Fh();
  var cr = kw(),
    tn = J0(cr);
  ew(tn, {});
  var rn = Te(tn, 2),
    Er = Ae(rn),
    gn = Ae(Er),
    jn = Te(Ae(gn), 2),
    _n = Ae(jn),
    nn = Te(_n, 2),
    wn = Te(nn, 2),
    Gn = Ae(wn),
    Ge = Te(gn, 2);
  {
    var En = (ee) => {
      var ye = lw(),
        nt = Te(Ae(ye), 2),
        lt = Ae(nt),
        g = Te(Ae(lt), 2),
        T = Te(lt, 2),
        N = Te(Ae(T), 2);
      at(() => {
        q(j),
          ai(() => {
            s();
          });
      });
      var W = Ae(N);
      W.value = W.__value = '';
      var re = Te(W);
      _a(re, 1, s, ii, (Ee, Me) => {
        var Je = ow(),
          Tr = Ae(Je),
          Xt = {};
        at(() => {
          vt(Tr, `${q(Me).itemname ?? ''} (${q(Me).itemcode ?? ''})`),
            Xt !== (Xt = q(Me).itemcode) &&
              (Je.value = (Je.__value = q(Me).itemcode) ?? '');
        }),
          be(Ee, Je);
      });
      var ue = Te(T, 2),
        De = Te(Ae(ue), 2);
      at(() => {
        q(te),
          ai(() => {
            o();
          });
      });
      var we = Ae(De);
      we.value = we.__value = '';
      var Fe = Te(we);
      _a(Fe, 1, o, ii, (Ee, Me) => {
        var Je = fw(),
          Tr = Ae(Je),
          Xt = {};
        at(() => {
          vt(Tr, `${q(Me).suppname ?? ''} (${q(Me).suppcode ?? ''})`),
            Xt !== (Xt = q(Me).suppcode) &&
              (Je.value = (Je.__value = q(Me).suppcode) ?? '');
        }),
          be(Ee, Je);
      });
      var me = Te(ue, 2),
        Se = Te(Ae(me), 2),
        Ue = Te(me, 2),
        m = Te(Ae(Ue), 2),
        _ = Te(Ue, 2),
        w = Te(Ae(_), 2),
        E = Te(_, 2),
        y = Te(Ae(E), 2),
        S = Te(E, 2),
        P = Te(Ae(S), 2),
        G = Te(S, 2),
        b = Te(Ae(G), 2),
        M = Te(G, 2),
        B = Te(Ae(M), 2),
        Q = Te(M, 2),
        oe = Te(Ae(Q), 2),
        de = Te(Q, 2),
        ae = Te(Ae(de), 2),
        pe = Te(de, 2),
        Oe = Te(Ae(pe), 2);
      ct(
        g,
        () => q(k),
        (Ee) => ve(k, Ee),
      ),
        si(
          N,
          () => q(j),
          (Ee) => ve(j, Ee),
        ),
        si(
          De,
          () => q(te),
          (Ee) => ve(te, Ee),
        ),
        ct(
          Se,
          () => q(R),
          (Ee) => ve(R, Ee),
        ),
        ct(
          m,
          () => q(H),
          (Ee) => ve(H, Ee),
        ),
        ct(
          w,
          () => q(L),
          (Ee) => ve(L, Ee),
        ),
        ct(
          y,
          () => q(X),
          (Ee) => ve(X, Ee),
        ),
        ct(
          P,
          () => q(K),
          (Ee) => ve(K, Ee),
        ),
        ct(
          b,
          () => q(J),
          (Ee) => ve(J, Ee),
        ),
        ct(
          B,
          () => q(ie),
          (Ee) => ve(ie, Ee),
        ),
        ct(
          oe,
          () => q(Pe),
          (Ee) => ve(Pe, Ee),
        ),
        ct(
          ae,
          () => q(Ce),
          (Ee) => ve(Ce, Ee),
        ),
        ct(
          Oe,
          () => q(ot),
          (Ee) => ve(ot, Ee),
        ),
        Xn('submit', nt, Ah(wr)),
        be(ee, ye);
    };
    yt(Ge, (ee) => {
      i() && ee(En);
    });
  }
  var Tn = Te(Ge, 2);
  {
    var Yn = (ee) => {
        var ye = cw();
        be(ee, ye);
      },
      Ur = (ee, ye) => {
        {
          var nt = (g) => {
              var T = uw(),
                N = Ae(T);
              at(() => vt(N, c())), be(g, T);
            },
            lt = (g, T) => {
              {
                var N = (re) => {
                    var ue = hw();
                    be(re, ue);
                  },
                  W = (re, ue) => {
                    {
                      var De = (Fe) => {
                          var me = dw(),
                            Se = Ae(me);
                          at(() => vt(Se, `No records match "${a() ?? ''}".`)),
                            be(Fe, me);
                        },
                        we = (Fe) => {
                          var me = Rw(),
                            Se = Ae(me),
                            Ue = Te(Ae(Se));
                          _a(
                            Ue,
                            5,
                            d,
                            (m) => m.batchcode,
                            (m, _) => {
                              var w = Nw(),
                                E = Ae(w),
                                y = Ae(E),
                                S = Te(E),
                                P = Ae(S);
                              {
                                var G = (ne) => {
                                    var ce = vw();
                                    at(() => {
                                      q(pt),
                                        ai(() => {
                                          s();
                                        });
                                    }),
                                      _a(ce, 5, s, ii, (Ne, yr) => {
                                        var Wr = pw(),
                                          ps = Ae(Wr),
                                          ga = {};
                                        at(() => {
                                          vt(
                                            ps,
                                            `${q(yr).itemname ?? ''} (${q(yr).itemcode ?? ''})`,
                                          ),
                                            ga !== (ga = q(yr).itemcode) &&
                                              (Wr.value =
                                                (Wr.__value = q(yr).itemcode) ??
                                                '');
                                        }),
                                          be(Ne, Wr);
                                      }),
                                      si(
                                        ce,
                                        () => q(pt),
                                        (Ne) => ve(pt, Ne),
                                      ),
                                      be(ne, ce);
                                  },
                                  b = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).itemcode ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(P, (ne) => {
                                  u() === q(_).batchcode ? ne(G) : ne(b, !1);
                                });
                              }
                              var M = Te(S),
                                B = Ae(M);
                              {
                                var Q = (ne) => {
                                    var ce = xw();
                                    at(() => {
                                      q(qe),
                                        ai(() => {
                                          o();
                                        });
                                    }),
                                      _a(ce, 5, o, ii, (Ne, yr) => {
                                        var Wr = mw(),
                                          ps = Ae(Wr),
                                          ga = {};
                                        at(() => {
                                          vt(
                                            ps,
                                            `${q(yr).suppname ?? ''} (${q(yr).suppcode ?? ''})`,
                                          ),
                                            ga !== (ga = q(yr).suppcode) &&
                                              (Wr.value =
                                                (Wr.__value = q(yr).suppcode) ??
                                                '');
                                        }),
                                          be(Ne, Wr);
                                      }),
                                      si(
                                        ce,
                                        () => q(qe),
                                        (Ne) => ve(qe, Ne),
                                      ),
                                      be(ne, ce);
                                  },
                                  oe = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).suppcode ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(B, (ne) => {
                                  u() === q(_).batchcode ? ne(Q) : ne(oe, !1);
                                });
                              }
                              var de = Te(M),
                                ae = Ae(de);
                              {
                                var pe = (ne) => {
                                    var ce = gw();
                                    ct(
                                      ce,
                                      () => q(mt),
                                      (Ne) => ve(mt, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  Oe = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => he(q(_).requestedqty)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(ae, (ne) => {
                                  u() === q(_).batchcode ? ne(pe) : ne(Oe, !1);
                                });
                              }
                              var Ee = Te(de),
                                Me = Ae(Ee);
                              {
                                var Je = (ne) => {
                                    var ce = _w();
                                    ct(
                                      ce,
                                      () => q(ft),
                                      (Ne) => ve(ft, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  Tr = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => he(q(_).receivedqty)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(Me, (ne) => {
                                  u() === q(_).batchcode ? ne(Je) : ne(Tr, !1);
                                });
                              }
                              var Xt = Te(Ee),
                                yn = Ae(Xt);
                              {
                                var Hr = (ne) => {
                                    var ce = ww();
                                    ct(
                                      ce,
                                      () => q(A),
                                      (Ne) => ve(A, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  xa = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => rt(q(_).purchase_price_per_unit)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(yn, (ne) => {
                                  u() === q(_).batchcode ? ne(Hr) : ne(xa, !1);
                                });
                              }
                              var ur = Te(Xt),
                                Kc = Ae(ur);
                              {
                                var $c = (ne) => {
                                    var ce = Ew();
                                    ct(
                                      ce,
                                      () => q(U),
                                      (Ne) => ve(U, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  zc = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => Dt(q(_).estimate_percentage)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(Kc, (ne) => {
                                  u() === q(_).batchcode ? ne($c) : ne(zc, !1);
                                });
                              }
                              var B0 = Te(ur),
                                qc = Ae(B0);
                              {
                                var Jc = (ne) => {
                                    var ce = Tw();
                                    za(() =>
                                      ct(
                                        ce,
                                        () => q(I),
                                        (Ne) => ve(I, Ne),
                                      ),
                                    ),
                                      Th(ce, (Ne) => initEditFlatpickr?.(Ne)),
                                      be(ne, ce);
                                  },
                                  Zc = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => Ct(q(_).datepurchase)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(qc, (ne) => {
                                  u() === q(_).batchcode ? ne(Jc) : ne(Zc, !1);
                                });
                              }
                              var U0 = Te(B0),
                                Qc = Ae(U0),
                                H0 = Te(U0),
                                eu = Ae(H0);
                              {
                                var tu = (ne) => {
                                    var ce = yw();
                                    ct(
                                      ce,
                                      () => q(O),
                                      (Ne) => ve(O, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  ru = (ne) => {
                                    var ce = hr();
                                    at(
                                      (Ne) => vt(ce, Ne),
                                      [() => he(q(_).expiryDays)],
                                      sn,
                                    ),
                                      be(ne, ce);
                                  };
                                yt(eu, (ne) => {
                                  u() === q(_).batchcode ? ne(tu) : ne(ru, !1);
                                });
                              }
                              var W0 = Te(H0),
                                nu = Ae(W0);
                              {
                                var au = (ne) => {
                                    var ce = Sw();
                                    ct(
                                      ce,
                                      () => q(z),
                                      (Ne) => ve(z, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  iu = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).itemused ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(nu, (ne) => {
                                  u() === q(_).batchcode ? ne(au) : ne(iu, !1);
                                });
                              }
                              var V0 = Te(W0),
                                su = Ae(V0);
                              {
                                var ou = (ne) => {
                                    var ce = Aw();
                                    ct(
                                      ce,
                                      () => q(ge),
                                      (Ne) => ve(ge, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  fu = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).itemdesc1 ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(su, (ne) => {
                                  u() === q(_).batchcode ? ne(ou) : ne(fu, !1);
                                });
                              }
                              var j0 = Te(V0),
                                lu = Ae(j0);
                              {
                                var cu = (ne) => {
                                    var ce = Fw();
                                    ct(
                                      ce,
                                      () => q(_e),
                                      (Ne) => ve(_e, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  uu = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).itemdesc2 ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(lu, (ne) => {
                                  u() === q(_).batchcode ? ne(cu) : ne(uu, !1);
                                });
                              }
                              var G0 = Te(j0),
                                hu = Ae(G0);
                              {
                                var du = (ne) => {
                                    var ce = Cw();
                                    ct(
                                      ce,
                                      () => q(xe),
                                      (Ne) => ve(xe, Ne),
                                    ),
                                      be(ne, ce);
                                  },
                                  pu = (ne) => {
                                    var ce = hr();
                                    at(() => vt(ce, q(_).itemdesc3 ?? 'N/A')),
                                      be(ne, ce);
                                  };
                                yt(hu, (ne) => {
                                  u() === q(_).batchcode ? ne(du) : ne(pu, !1);
                                });
                              }
                              var vu = Te(G0),
                                mu = Ae(vu);
                              {
                                var xu = (ne) => {
                                    var ce = Dw(),
                                      Ne = J0(ce),
                                      yr = Te(Ne, 2);
                                    Xn('click', Ne, () => Br(q(_).batchcode)),
                                      Xn('click', yr, en),
                                      be(ne, ce);
                                  },
                                  gu = (ne) => {
                                    var ce = Ow();
                                    Xn('click', ce, () => Nr(q(_))), be(ne, ce);
                                  };
                                yt(mu, (ne) => {
                                  u() === q(_).batchcode ? ne(xu) : ne(gu, !1);
                                });
                              }
                              at(
                                (ne) => {
                                  vt(y, q(_).batchcode ?? 'N/A'), vt(Qc, ne);
                                },
                                [() => Ct(q(_).expiry)],
                                sn,
                              ),
                                be(m, w);
                            },
                          ),
                            be(Fe, me);
                        };
                      yt(
                        re,
                        (Fe) => {
                          d().length === 0 && a().trim() ? Fe(De) : Fe(we, !1);
                        },
                        ue,
                      );
                    }
                  };
                yt(
                  g,
                  (re) => {
                    f().length === 0 ? re(N) : re(W, !1);
                  },
                  T,
                );
              }
            };
          yt(
            ee,
            (g) => {
              c() ? g(nt) : g(lt, !1);
            },
            ye,
          );
        }
      };
    yt(Tn, (ee) => {
      l() && f().length === 0 ? ee(Yn) : ee(Ur, !1);
    });
  }
  at(() => vt(Gn, i() ? 'Hide Add Form' : 'Add New Record')),
    ct(_n, a, (ee) => Nh(x, ee)),
    Xn('click', nn, Ht),
    Xn('click', wn, () => F.update((ee) => !ee)),
    be(t, cr),
    s0(),
    n();
}
vh(Iw, { target: document.getElementById('app') });
