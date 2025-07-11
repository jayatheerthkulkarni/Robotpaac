(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const s of a.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (a.credentials = 'omit')
          : (a.credentials = 'same-origin'),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = e(i);
    fetch(i.href, a);
  }
})();
const b0 = !1;
var Wa = Array.isArray,
  Pc = Array.prototype.indexOf,
  $s = Array.from,
  qo = Object.defineProperty,
  _i = Object.getOwnPropertyDescriptor,
  Lc = Object.getOwnPropertyDescriptors,
  Bc = Object.prototype,
  Uc = Array.prototype,
  Jo = Object.getPrototypeOf,
  M0 = Object.isExtensible;
const cn = () => {};
function Hc(t) {
  return t();
}
function pa(t) {
  for (var r = 0; r < t.length; r++) t[r]();
}
const lr = 2,
  Zo = 4,
  Va = 8,
  Xs = 16,
  tn = 32,
  ti = 64,
  Ks = 128,
  fr = 256,
  xa = 512,
  gr = 1024,
  Zr = 2048,
  Rn = 4096,
  Kr = 8192,
  zs = 16384,
  Qo = 32768,
  qs = 65536,
  Wc = 1 << 17,
  P0 = 1 << 18,
  Vc = 1 << 19,
  ef = 1 << 20,
  Ds = 1 << 21,
  Sn = Symbol('$state');
function tf(t) {
  return t === this.v;
}
function Js(t, r) {
  return t != t
    ? r == r
    : t !== r || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function rf(t) {
  return !Js(t, this.v);
}
function jc(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Gc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Yc(t) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function $c() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Xc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Kc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function zc() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Wi = !1,
  qc = !1;
function Jc() {
  Wi = !0;
}
const Zs = 1,
  Qs = 2,
  nf = 4,
  Zc = 8,
  Qc = 16,
  eu = 1,
  tu = 2,
  $t = Symbol();
function ru(t) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let ot = null;
function L0(t) {
  ot = t;
}
function e0(t, r = !1, e) {
  var n = (ot = {
    p: ot,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null,
  });
  Wi && !r && (ot.l = { s: null, u: null, r1: [], r2: Oi(!1) }),
    Ga(() => {
      n.d = !0;
    });
}
function t0(t) {
  const r = ot;
  if (r !== null) {
    const s = r.e;
    if (s !== null) {
      var e = qe,
        n = We;
      r.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          hn(a.effect), Lr(a.reaction), Qn(a.fn);
        }
      } finally {
        hn(e), Lr(n);
      }
    }
    (ot = r.p), (r.m = !0);
  }
  return {};
}
function Vi() {
  return !Wi || (ot !== null && ot.l === null);
}
function xi(t) {
  if (typeof t != 'object' || t === null || Sn in t) return t;
  const r = Jo(t);
  if (r !== Bc && r !== Uc) return t;
  var e = new Map(),
    n = Wa(t),
    i = $r(0),
    a = We,
    s = (o) => {
      var l = We;
      Lr(a);
      var f = o();
      return Lr(l), f;
    };
  return (
    n && e.set('length', $r(t.length)),
    new Proxy(t, {
      defineProperty(o, l, f) {
        (!('value' in f) ||
          f.configurable === !1 ||
          f.enumerable === !1 ||
          f.writable === !1) &&
          Xc();
        var c = e.get(l);
        return (
          c === void 0
            ? (c = s(() => {
                var h = $r(f.value);
                return e.set(l, h), h;
              }))
            : Ue(c, f.value, !0),
          !0
        );
      },
      deleteProperty(o, l) {
        var f = e.get(l);
        if (f === void 0) {
          if (l in o) {
            const u = s(() => $r($t));
            e.set(l, u), fs(i);
          }
        } else {
          if (n && typeof l == 'string') {
            var c = e.get('length'),
              h = Number(l);
            Number.isInteger(h) && h < c.v && Ue(c, h);
          }
          Ue(f, $t), fs(i);
        }
        return !0;
      },
      get(o, l, f) {
        if (l === Sn) return t;
        var c = e.get(l),
          h = l in o;
        if (
          (c === void 0 &&
            (!h || _i(o, l)?.writable) &&
            ((c = s(() => {
              var p = xi(h ? o[l] : $t),
                x = $r(p);
              return x;
            })),
            e.set(l, c)),
          c !== void 0)
        ) {
          var u = ue(c);
          return u === $t ? void 0 : u;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && 'value' in f) {
          var c = e.get(l);
          c && (f.value = ue(c));
        } else if (f === void 0) {
          var h = e.get(l),
            u = h?.v;
          if (h !== void 0 && u !== $t)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return f;
      },
      has(o, l) {
        if (l === Sn) return !0;
        var f = e.get(l),
          c = (f !== void 0 && f.v !== $t) || Reflect.has(o, l);
        if (f !== void 0 || (qe !== null && (!c || _i(o, l)?.writable))) {
          f === void 0 &&
            ((f = s(() => {
              var u = c ? xi(o[l]) : $t,
                p = $r(u);
              return p;
            })),
            e.set(l, f));
          var h = ue(f);
          if (h === $t) return !1;
        }
        return c;
      },
      set(o, l, f, c) {
        var h = e.get(l),
          u = l in o;
        if (n && l === 'length')
          for (var p = f; p < h.v; p += 1) {
            var x = e.get(p + '');
            x !== void 0
              ? Ue(x, $t)
              : p in o && ((x = s(() => $r($t))), e.set(p + '', x));
          }
        if (h === void 0)
          (!u || _i(o, l)?.writable) &&
            ((h = s(() => $r(void 0))), Ue(h, xi(f)), e.set(l, h));
        else {
          u = h.v !== $t;
          var d = s(() => xi(f));
          Ue(h, d);
        }
        var m = Reflect.getOwnPropertyDescriptor(o, l);
        if ((m?.set && m.set.call(c, f), !u)) {
          if (n && typeof l == 'string') {
            var A = e.get('length'),
              D = Number(l);
            Number.isInteger(D) && D >= A.v && Ue(A, D + 1);
          }
          fs(i);
        }
        return !0;
      },
      ownKeys(o) {
        ue(i);
        var l = Reflect.ownKeys(o).filter((h) => {
          var u = e.get(h);
          return u === void 0 || u.v !== $t;
        });
        for (var [f, c] of e) c.v !== $t && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Kc();
      },
    })
  );
}
function fs(t, r = 1) {
  Ue(t, t.v + r);
}
function B0(t) {
  try {
    if (t !== null && typeof t == 'object' && Sn in t) return t[Sn];
  } catch {}
  return t;
}
function nu(t, r) {
  return Object.is(B0(t), B0(r));
}
function r0(t) {
  var r = lr | Zr,
    e = We !== null && (We.f & lr) !== 0 ? We : null;
  return (
    qe === null || (e !== null && (e.f & fr) !== 0) ? (r |= fr) : (qe.f |= ef),
    {
      ctx: ot,
      deps: null,
      effects: null,
      equals: tf,
      f: r,
      fn: t,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? qe,
    }
  );
}
function vi(t) {
  const r = r0(t);
  return (r.equals = rf), r;
}
function af(t) {
  var r = t.effects;
  if (r !== null) {
    t.effects = null;
    for (var e = 0; e < r.length; e += 1) un(r[e]);
  }
}
function iu(t) {
  for (var r = t.parent; r !== null; ) {
    if ((r.f & lr) === 0) return r;
    r = r.parent;
  }
  return null;
}
function sf(t) {
  var r,
    e = qe;
  hn(iu(t));
  try {
    af(t), (r = Sf(t));
  } finally {
    hn(e);
  }
  return r;
}
function of(t) {
  var r = sf(t);
  if ((t.equals(r) || ((t.v = r), (t.wv = Ef())), !ni)) {
    var e = (on || (t.f & fr) !== 0) && t.deps !== null ? Rn : gr;
    Br(t, e);
  }
}
const Di = new Map();
function Oi(t, r) {
  var e = { f: 0, v: t, reactions: null, equals: tf, rv: 0, wv: 0 };
  return e;
}
function $r(t, r) {
  const e = Oi(t);
  return vu(e), e;
}
function rr(t, r = !1, e = !0) {
  const n = Oi(t);
  return (
    r || (n.equals = rf),
    Wi && e && ot !== null && ot.l !== null && (ot.l.s ??= []).push(n),
    n
  );
}
function Ue(t, r, e = !1) {
  We !== null &&
    (!Pr || (We.f & P0) !== 0) &&
    Vi() &&
    (We.f & (lr | Xs | P0)) !== 0 &&
    !(mr?.[1].includes(t) && mr[0] === We) &&
    zc();
  let n = e ? xi(r) : r;
  return Ni(t, n);
}
function Ni(t, r) {
  if (!t.equals(r)) {
    var e = t.v;
    ni ? Di.set(t, r) : Di.set(t, e),
      (t.v = r),
      (t.f & lr) !== 0 &&
        ((t.f & Zr) !== 0 && sf(t), Br(t, (t.f & fr) === 0 ? gr : Rn)),
      (t.wv = Ef()),
      ff(t, Zr),
      Vi() &&
        qe !== null &&
        (qe.f & gr) !== 0 &&
        (qe.f & (tn | ti)) === 0 &&
        (xr === null ? mu([t]) : xr.push(t));
  }
  return r;
}
function ff(t, r) {
  var e = t.reactions;
  if (e !== null)
    for (var n = Vi(), i = e.length, a = 0; a < i; a++) {
      var s = e[a],
        o = s.f;
      (o & Zr) === 0 &&
        ((!n && s === qe) ||
          (Br(s, r),
          (o & (gr | fr)) !== 0 && ((o & lr) !== 0 ? ff(s, Rn) : f0(s))));
    }
}
function au() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let su = !1;
var U0, lf, cf, uf;
function ou() {
  if (U0 === void 0) {
    (U0 = window), (lf = /Firefox/.test(navigator.userAgent));
    var t = Element.prototype,
      r = Node.prototype,
      e = Text.prototype;
    (cf = _i(r, 'firstChild').get),
      (uf = _i(r, 'nextSibling').get),
      M0(t) &&
        ((t.__click = void 0),
        (t.__className = void 0),
        (t.__attributes = null),
        (t.__style = void 0),
        (t.__e = void 0)),
      M0(e) && (e.__t = void 0);
  }
}
function n0(t = '') {
  return document.createTextNode(t);
}
function va(t) {
  return cf.call(t);
}
function ja(t) {
  return uf.call(t);
}
function Fe(t, r) {
  return va(t);
}
function H0(t, r) {
  {
    var e = va(t);
    return e instanceof Comment && e.data === '' ? ja(e) : e;
  }
}
function Ie(t, r = 1, e = !1) {
  let n = t;
  for (; r--; ) n = ja(n);
  return n;
}
function fu(t) {
  t.textContent = '';
}
function hf(t) {
  qe === null && We === null && Yc(),
    We !== null && (We.f & fr) !== 0 && qe === null && Gc(),
    ni && jc();
}
function lu(t, r) {
  var e = r.last;
  e === null
    ? (r.last = r.first = t)
    : ((e.next = t), (t.prev = e), (r.last = t));
}
function ri(t, r, e, n = !0) {
  var i = qe,
    a = {
      ctx: ot,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: t | Zr,
      first: null,
      fn: r,
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
      o0(a), (a.f |= Qo);
    } catch (l) {
      throw (un(a), l);
    }
  else r !== null && f0(a);
  var s =
    e &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (ef | Ks)) === 0;
  if (!s && n && (i !== null && lu(a, i), We !== null && (We.f & lr) !== 0)) {
    var o = We;
    (o.effects ??= []).push(a);
  }
  return a;
}
function Ga(t) {
  const r = ri(Va, null, !1);
  return Br(r, gr), (r.teardown = t), r;
}
function Os(t) {
  hf();
  var r = qe !== null && (qe.f & tn) !== 0 && ot !== null && !ot.m;
  if (r) {
    var e = ot;
    (e.e ??= []).push({ fn: t, effect: qe, reaction: We });
  } else {
    var n = Qn(t);
    return n;
  }
}
function cu(t) {
  return hf(), i0(t);
}
function uu(t) {
  const r = ri(ti, t, !0);
  return (e = {}) =>
    new Promise((n) => {
      e.outro
        ? ma(r, () => {
            un(r), n(void 0);
          })
        : (un(r), n(void 0));
    });
}
function Qn(t) {
  return ri(Zo, t, !1);
}
function i0(t) {
  return ri(Va, t, !0);
}
function _t(t, r = [], e = r0) {
  const n = r.map(e);
  return a0(() => t(...n.map(ue)));
}
function a0(t, r = 0) {
  return ri(Va | Xs | r, t, !0);
}
function Ri(t, r = !0) {
  return ri(Va | tn, t, !0, r);
}
function df(t) {
  var r = t.teardown;
  if (r !== null) {
    const e = ni,
      n = We;
    W0(!0), Lr(null);
    try {
      r.call(null);
    } finally {
      W0(e), Lr(n);
    }
  }
}
function pf(t, r = !1) {
  var e = t.first;
  for (t.first = t.last = null; e !== null; ) {
    var n = e.next;
    (e.f & ti) !== 0 ? (e.parent = null) : un(e, r), (e = n);
  }
}
function hu(t) {
  for (var r = t.first; r !== null; ) {
    var e = r.next;
    (r.f & tn) === 0 && un(r), (r = e);
  }
}
function un(t, r = !0) {
  var e = !1;
  (r || (t.f & Vc) !== 0) &&
    t.nodes_start !== null &&
    t.nodes_end !== null &&
    (du(t.nodes_start, t.nodes_end), (e = !0)),
    pf(t, r && !e),
    Ta(t, 0),
    Br(t, zs);
  var n = t.transitions;
  if (n !== null) for (const a of n) a.stop();
  df(t);
  var i = t.parent;
  i !== null && i.first !== null && xf(t),
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
function du(t, r) {
  for (; t !== null; ) {
    var e = t === r ? null : ja(t);
    t.remove(), (t = e);
  }
}
function xf(t) {
  var r = t.parent,
    e = t.prev,
    n = t.next;
  e !== null && (e.next = n),
    n !== null && (n.prev = e),
    r !== null &&
      (r.first === t && (r.first = n), r.last === t && (r.last = e));
}
function ma(t, r) {
  var e = [];
  s0(t, e, !0),
    vf(e, () => {
      un(t), r && r();
    });
}
function vf(t, r) {
  var e = t.length;
  if (e > 0) {
    var n = () => --e || r();
    for (var i of t) i.out(n);
  } else r();
}
function s0(t, r, e) {
  if ((t.f & Kr) === 0) {
    if (((t.f ^= Kr), t.transitions !== null))
      for (const s of t.transitions) (s.is_global || e) && r.push(s);
    for (var n = t.first; n !== null; ) {
      var i = n.next,
        a = (n.f & qs) !== 0 || (n.f & tn) !== 0;
      s0(n, r, a ? e : !1), (n = i);
    }
  }
}
function ga(t) {
  mf(t, !0);
}
function mf(t, r) {
  if ((t.f & Kr) !== 0) {
    t.f ^= Kr;
    for (var e = t.first; e !== null; ) {
      var n = e.next,
        i = (e.f & qs) !== 0 || (e.f & tn) !== 0;
      mf(e, i ? r : !1), (e = n);
    }
    if (t.transitions !== null)
      for (const a of t.transitions) (a.is_global || r) && a.in();
  }
}
let _a = [];
function pu() {
  var t = _a;
  (_a = []), pa(t);
}
function gf(t) {
  _a.length === 0 && queueMicrotask(pu), _a.push(t);
}
function xu(t) {
  var r = qe;
  if ((r.f & Qo) === 0) {
    if ((r.f & Ks) === 0) throw t;
    r.fn(t);
  } else _f(t, r);
}
function _f(t, r) {
  for (; r !== null; ) {
    if ((r.f & Ks) !== 0)
      try {
        r.fn(t);
        return;
      } catch {}
    r = r.parent;
  }
  throw t;
}
let Ns = !1,
  wa = null,
  yn = !1,
  ni = !1;
function W0(t) {
  ni = t;
}
let ca = [];
let We = null,
  Pr = !1;
function Lr(t) {
  We = t;
}
let qe = null;
function hn(t) {
  qe = t;
}
let mr = null;
function vu(t) {
  We !== null && We.f & Ds && (mr === null ? (mr = [We, [t]]) : mr[1].push(t));
}
let Bt = null,
  nr = 0,
  xr = null;
function mu(t) {
  xr = t;
}
let wf = 1,
  Ea = 0,
  on = !1,
  _n = null;
function Ef() {
  return ++wf;
}
function Ya(t) {
  var r = t.f;
  if ((r & Zr) !== 0) return !0;
  if ((r & Rn) !== 0) {
    var e = t.deps,
      n = (r & fr) !== 0;
    if (e !== null) {
      var i,
        a,
        s = (r & xa) !== 0,
        o = n && qe !== null && !on,
        l = e.length;
      if (s || o) {
        var f = t,
          c = f.parent;
        for (i = 0; i < l; i++)
          (a = e[i]),
            (s || !a?.reactions?.includes(f)) && (a.reactions ??= []).push(f);
        s && (f.f ^= xa), o && c !== null && (c.f & fr) === 0 && (f.f ^= fr);
      }
      for (i = 0; i < l; i++)
        if (((a = e[i]), Ya(a) && of(a), a.wv > t.wv)) return !0;
    }
    (!n || (qe !== null && !on)) && Br(t, gr);
  }
  return !1;
}
function Tf(t, r, e = !0) {
  var n = t.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (mr?.[1].includes(t) && mr[0] === We) ||
        ((a.f & lr) !== 0
          ? Tf(a, r, !1)
          : r === a && (e ? Br(a, Zr) : (a.f & gr) !== 0 && Br(a, Rn), f0(a)));
    }
}
function Sf(t) {
  var r = Bt,
    e = nr,
    n = xr,
    i = We,
    a = on,
    s = mr,
    o = ot,
    l = Pr,
    f = t.f;
  (Bt = null),
    (nr = 0),
    (xr = null),
    (on = (f & fr) !== 0 && (Pr || !yn || We === null)),
    (We = (f & (tn | ti)) === 0 ? t : null),
    (mr = null),
    L0(t.ctx),
    (Pr = !1),
    Ea++,
    (t.f |= Ds);
  try {
    var c = (0, t.fn)(),
      h = t.deps;
    if (Bt !== null) {
      var u;
      if ((Ta(t, nr), h !== null && nr > 0))
        for (h.length = nr + Bt.length, u = 0; u < Bt.length; u++)
          h[nr + u] = Bt[u];
      else t.deps = h = Bt;
      if (!on || ((f & lr) !== 0 && t.reactions !== null))
        for (u = nr; u < h.length; u++) (h[u].reactions ??= []).push(t);
    } else h !== null && nr < h.length && (Ta(t, nr), (h.length = nr));
    if (
      Vi() &&
      xr !== null &&
      !Pr &&
      h !== null &&
      (t.f & (lr | Rn | Zr)) === 0
    )
      for (u = 0; u < xr.length; u++) Tf(xr[u], t);
    return (
      i !== null &&
        i !== t &&
        (Ea++, xr !== null && (n === null ? (n = xr) : n.push(...xr))),
      c
    );
  } catch (p) {
    xu(p);
  } finally {
    (Bt = r),
      (nr = e),
      (xr = n),
      (We = i),
      (on = a),
      (mr = s),
      L0(o),
      (Pr = l),
      (t.f ^= Ds);
  }
}
function gu(t, r) {
  let e = r.reactions;
  if (e !== null) {
    var n = Pc.call(e, t);
    if (n !== -1) {
      var i = e.length - 1;
      i === 0 ? (e = r.reactions = null) : ((e[n] = e[i]), e.pop());
    }
  }
  e === null &&
    (r.f & lr) !== 0 &&
    (Bt === null || !Bt.includes(r)) &&
    (Br(r, Rn), (r.f & (fr | xa)) === 0 && (r.f ^= xa), af(r), Ta(r, 0));
}
function Ta(t, r) {
  var e = t.deps;
  if (e !== null) for (var n = r; n < e.length; n++) gu(t, e[n]);
}
function o0(t) {
  var r = t.f;
  if ((r & zs) === 0) {
    Br(t, gr);
    var e = qe,
      n = yn;
    (qe = t), (yn = !0);
    try {
      (r & Xs) !== 0 ? hu(t) : pf(t), df(t);
      var i = Sf(t);
      (t.teardown = typeof i == 'function' ? i : null), (t.wv = wf);
      var a;
      b0 && qc && (t.f & Zr) !== 0 && t.deps;
    } finally {
      (yn = n), (qe = e);
    }
  }
}
function _u() {
  try {
    $c();
  } catch (t) {
    if (wa !== null) _f(t, wa);
    else throw t;
  }
}
function wu() {
  var t = yn;
  try {
    var r = 0;
    for (yn = !0; ca.length > 0; ) {
      r++ > 1e3 && _u();
      var e = ca,
        n = e.length;
      ca = [];
      for (var i = 0; i < n; i++) {
        var a = Tu(e[i]);
        Eu(a);
      }
      Di.clear();
    }
  } finally {
    (Ns = !1), (yn = t), (wa = null);
  }
}
function Eu(t) {
  var r = t.length;
  if (r !== 0)
    for (var e = 0; e < r; e++) {
      var n = t[e];
      (n.f & (zs | Kr)) === 0 &&
        Ya(n) &&
        (o0(n),
        n.deps === null &&
          n.first === null &&
          n.nodes_start === null &&
          (n.teardown === null ? xf(n) : (n.fn = null)));
    }
}
function f0(t) {
  Ns || ((Ns = !0), queueMicrotask(wu));
  for (var r = (wa = t); r.parent !== null; ) {
    r = r.parent;
    var e = r.f;
    if ((e & (ti | tn)) !== 0) {
      if ((e & gr) === 0) return;
      r.f ^= gr;
    }
  }
  ca.push(r);
}
function Tu(t) {
  for (var r = [], e = t; e !== null; ) {
    var n = e.f,
      i = (n & (tn | ti)) !== 0,
      a = i && (n & gr) !== 0;
    if (!a && (n & Kr) === 0) {
      (n & Zo) !== 0 ? r.push(e) : i ? (e.f ^= gr) : Ya(e) && o0(e);
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
function ue(t) {
  var r = t.f,
    e = (r & lr) !== 0;
  if ((_n !== null && _n.add(t), We !== null && !Pr)) {
    if (!mr?.[1].includes(t) || mr[0] !== We) {
      var n = We.deps;
      t.rv < Ea &&
        ((t.rv = Ea),
        Bt === null && n !== null && n[nr] === t
          ? nr++
          : Bt === null
            ? (Bt = [t])
            : (!on || !Bt.includes(t)) && Bt.push(t));
    }
  } else if (e && t.deps === null && t.effects === null) {
    var i = t,
      a = i.parent;
    a !== null && (a.f & fr) === 0 && (i.f ^= fr);
  }
  return e && ((i = t), Ya(i) && of(i)), ni && Di.has(t) ? Di.get(t) : t.v;
}
function Su(t) {
  var r = _n;
  _n = new Set();
  var e = _n,
    n;
  try {
    if ((kn(t), r !== null)) for (n of _n) r.add(n);
  } finally {
    _n = r;
  }
  return e;
}
function Ji(t) {
  var r = Su(() => kn(t));
  for (var e of r)
    if ((e.f & Wc) !== 0)
      for (const n of e.deps || []) (n.f & lr) === 0 && Ni(n, n.v);
    else Ni(e, e.v);
}
function kn(t) {
  var r = Pr;
  try {
    return (Pr = !0), t();
  } finally {
    Pr = r;
  }
}
const yu = -7169;
function Br(t, r) {
  t.f = (t.f & yu) | r;
}
function yf(t) {
  if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
    if (Sn in t) Rs(t);
    else if (!Array.isArray(t))
      for (let r in t) {
        const e = t[r];
        typeof e == 'object' && e && Sn in e && Rs(e);
      }
  }
}
function Rs(t, r = new Set()) {
  if (
    typeof t == 'object' &&
    t !== null &&
    !(t instanceof EventTarget) &&
    !r.has(t)
  ) {
    r.add(t), t instanceof Date && t.getTime();
    for (let n in t)
      try {
        Rs(t[n], r);
      } catch {}
    const e = Jo(t);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const n = Lc(e);
      for (let i in n) {
        const a = n[i].get;
        if (a)
          try {
            a.call(t);
          } catch {}
      }
    }
  }
}
const Au = ['touchstart', 'touchmove'];
function Cu(t) {
  return Au.includes(t);
}
let V0 = !1;
function Fu() {
  V0 ||
    ((V0 = !0),
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
function Af(t) {
  var r = We,
    e = qe;
  Lr(null), hn(null);
  try {
    return t();
  } finally {
    Lr(r), hn(e);
  }
}
function Cf(t, r, e, n = e) {
  t.addEventListener(r, () => Af(e));
  const i = t.__on_r;
  i
    ? (t.__on_r = () => {
        i(), n(!0);
      })
    : (t.__on_r = () => n(!0)),
    Fu();
}
const Du = new Set(),
  j0 = new Set();
function Ou(t, r, e, n = {}) {
  function i(a) {
    if ((n.capture || mi.call(r, a), !a.cancelBubble))
      return Af(() => e?.call(this, a));
  }
  return (
    t.startsWith('pointer') || t.startsWith('touch') || t === 'wheel'
      ? gf(() => {
          r.addEventListener(t, i, n);
        })
      : r.addEventListener(t, i, n),
    i
  );
}
function Bn(t, r, e, n, i) {
  var a = { capture: n, passive: i },
    s = Ou(t, r, e, a);
  (r === document.body ||
    r === window ||
    r === document ||
    r instanceof HTMLMediaElement) &&
    Ga(() => {
      r.removeEventListener(t, s, a);
    });
}
function mi(t) {
  var r = this,
    e = r.ownerDocument,
    n = t.type,
    i = t.composedPath?.() || [],
    a = i[0] || t.target,
    s = 0,
    o = t.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (r === document || r === window)) {
      t.__root = r;
      return;
    }
    var f = i.indexOf(r);
    if (f === -1) return;
    l <= f && (s = l);
  }
  if (((a = i[s] || t.target), a !== r)) {
    qo(t, 'currentTarget', {
      configurable: !0,
      get() {
        return a || e;
      },
    });
    var c = We,
      h = qe;
    Lr(null), hn(null);
    try {
      for (var u, p = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var d = a['__' + n];
          if (d != null && (!a.disabled || t.target === a))
            if (Wa(d)) {
              var [m, ...A] = d;
              m.apply(a, [t, ...A]);
            } else d.call(a, t);
        } catch (D) {
          u ? p.push(D) : (u = D);
        }
        if (t.cancelBubble || x === r || x === null) break;
        a = x;
      }
      if (u) {
        for (let D of p)
          queueMicrotask(() => {
            throw D;
          });
        throw u;
      }
    } finally {
      (t.__root = r), delete t.currentTarget, Lr(c), hn(h);
    }
  }
}
function Nu(t) {
  var r = document.createElement('template');
  return (r.innerHTML = t.replaceAll('<!>', '<!---->')), r.content;
}
function ks(t, r) {
  var e = qe;
  e.nodes_start === null && ((e.nodes_start = t), (e.nodes_end = r));
}
function dt(t, r) {
  var e = (r & eu) !== 0,
    n = (r & tu) !== 0,
    i,
    a = !t.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Nu(a ? t : '<!>' + t)), e || (i = va(i)));
    var s = n || lf ? document.importNode(i, !0) : i.cloneNode(!0);
    if (e) {
      var o = va(s),
        l = s.lastChild;
      ks(o, l);
    } else ks(s, s);
    return s;
  };
}
function ui(t = '') {
  {
    var r = n0(t + '');
    return ks(r, r), r;
  }
}
function tt(t, r) {
  t !== null && t.before(r);
}
function Yt(t, r) {
  var e = r == null ? '' : typeof r == 'object' ? r + '' : r;
  e !== (t.__t ??= t.nodeValue) && ((t.__t = e), (t.nodeValue = e + ''));
}
function Ru(t, r) {
  return ku(t, r);
}
const Un = new Map();
function ku(
  t,
  { target: r, anchor: e, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  ou();
  var o = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var p = h[u];
        if (!o.has(p)) {
          o.add(p);
          var x = Cu(p);
          r.addEventListener(p, mi, { passive: x });
          var d = Un.get(p);
          d === void 0
            ? (document.addEventListener(p, mi, { passive: x }), Un.set(p, 1))
            : Un.set(p, d + 1);
        }
      }
    };
  l($s(Du)), j0.add(l);
  var f = void 0,
    c = uu(() => {
      var h = e ?? r.appendChild(n0());
      return (
        Ri(() => {
          if (a) {
            e0({});
            var u = ot;
            u.c = a;
          }
          i && (n.$$events = i), (f = t(h, n) || {}), a && t0();
        }),
        () => {
          for (var u of o) {
            r.removeEventListener(u, mi);
            var p = Un.get(u);
            --p === 0
              ? (document.removeEventListener(u, mi), Un.delete(u))
              : Un.set(u, p);
          }
          j0.delete(l), h !== e && h.parentNode?.removeChild(h);
        }
      );
    });
  return Iu.set(f, c), f;
}
let Iu = new WeakMap();
function Sr(t, r, [e, n] = [0, 0]) {
  var i = t,
    a = null,
    s = null,
    o = $t,
    l = e > 0 ? qs : 0,
    f = !1;
  const c = (u, p = !0) => {
      (f = !0), h(p, u);
    },
    h = (u, p) => {
      o !== (o = u) &&
        (o
          ? (a ? ga(a) : p && (a = Ri(() => p(i))),
            s &&
              ma(s, () => {
                s = null;
              }))
          : (s ? ga(s) : p && (s = Ri(() => p(i, [e + 1, n]))),
            a &&
              ma(a, () => {
                a = null;
              })));
    };
  a0(() => {
    (f = !1), r(c), f || h(null, null);
  }, l);
}
function Zi(t, r) {
  return r;
}
function bu(t, r, e, n) {
  for (var i = [], a = r.length, s = 0; s < a; s++) s0(r[s].e, i, !0);
  var o = a > 0 && i.length === 0 && e !== null;
  if (o) {
    var l = e.parentNode;
    fu(l), l.append(e), n.clear(), sn(t, r[0].prev, r[a - 1].next);
  }
  vf(i, () => {
    for (var f = 0; f < a; f++) {
      var c = r[f];
      o || (n.delete(c.k), sn(t, c.prev, c.next)), un(c.e, !o);
    }
  });
}
function hi(t, r, e, n, i, a = null) {
  var s = t,
    o = { flags: r, items: new Map(), first: null },
    l = (r & nf) !== 0;
  if (l) {
    var f = t;
    s = f.appendChild(n0());
  }
  var c = null,
    h = !1,
    u = vi(() => {
      var p = e();
      return Wa(p) ? p : p == null ? [] : $s(p);
    });
  a0(() => {
    var p = ue(u),
      x = p.length;
    (h && x === 0) ||
      ((h = x === 0),
      Mu(p, o, s, i, r, n, e),
      a !== null &&
        (x === 0
          ? c
            ? ga(c)
            : (c = Ri(() => a(s)))
          : c !== null &&
            ma(c, () => {
              c = null;
            })),
      ue(u));
  });
}
function Mu(t, r, e, n, i, a, s) {
  var o = (i & Zc) !== 0,
    l = (i & (Zs | Qs)) !== 0,
    f = t.length,
    c = r.items,
    h = r.first,
    u = h,
    p,
    x = null,
    d,
    m = [],
    A = [],
    D,
    F,
    k,
    j;
  if (o)
    for (j = 0; j < f; j += 1)
      (D = t[j]),
        (F = a(D, j)),
        (k = c.get(F)),
        k !== void 0 && (k.a?.measure(), (d ??= new Set()).add(k));
  for (j = 0; j < f; j += 1) {
    if (((D = t[j]), (F = a(D, j)), (k = c.get(F)), k === void 0)) {
      var ee = u ? u.e.nodes_start : e;
      (x = Lu(ee, r, x, x === null ? r.first : x.next, D, F, j, n, i, s)),
        c.set(F, x),
        (m = []),
        (A = []),
        (u = x.next);
      continue;
    }
    if (
      (l && Pu(k, D, j, i),
      (k.e.f & Kr) !== 0 &&
        (ga(k.e), o && (k.a?.unfix(), (d ??= new Set()).delete(k))),
      k !== u)
    ) {
      if (p !== void 0 && p.has(k)) {
        if (m.length < A.length) {
          var N = A[0],
            W;
          x = N.prev;
          var M = m[0],
            X = m[m.length - 1];
          for (W = 0; W < m.length; W += 1) G0(m[W], N, e);
          for (W = 0; W < A.length; W += 1) p.delete(A[W]);
          sn(r, M.prev, X.next),
            sn(r, x, M),
            sn(r, X, N),
            (u = N),
            (x = X),
            (j -= 1),
            (m = []),
            (A = []);
        } else
          p.delete(k),
            G0(k, u, e),
            sn(r, k.prev, k.next),
            sn(r, k, x === null ? r.first : x.next),
            sn(r, x, k),
            (x = k);
        continue;
      }
      for (m = [], A = []; u !== null && u.k !== F; )
        (u.e.f & Kr) === 0 && (p ??= new Set()).add(u), A.push(u), (u = u.next);
      if (u === null) continue;
      k = u;
    }
    m.push(k), (x = k), (u = k.next);
  }
  if (u !== null || p !== void 0) {
    for (var K = p === void 0 ? [] : $s(p); u !== null; )
      (u.e.f & Kr) === 0 && K.push(u), (u = u.next);
    var J = K.length;
    if (J > 0) {
      var ne = (i & nf) !== 0 && f === 0 ? e : null;
      if (o) {
        for (j = 0; j < J; j += 1) K[j].a?.measure();
        for (j = 0; j < J; j += 1) K[j].a?.fix();
      }
      bu(r, K, ne, c);
    }
  }
  o &&
    gf(() => {
      if (d !== void 0) for (k of d) k.a?.apply();
    }),
    (qe.first = r.first && r.first.e),
    (qe.last = x && x.e);
}
function Pu(t, r, e, n) {
  (n & Zs) !== 0 && Ni(t.v, r), (n & Qs) !== 0 ? Ni(t.i, e) : (t.i = e);
}
function Lu(t, r, e, n, i, a, s, o, l, f) {
  var c = (l & Zs) !== 0,
    h = (l & Qc) === 0,
    u = c ? (h ? rr(i, !1, !1) : Oi(i)) : i,
    p = (l & Qs) === 0 ? s : Oi(s),
    x = { i: p, v: u, k: a, a: null, e: null, prev: e, next: n };
  try {
    return (
      (x.e = Ri(() => o(t, u, p, f), su)),
      (x.e.prev = e && e.e),
      (x.e.next = n && n.e),
      e === null ? (r.first = x) : ((e.next = x), (e.e.next = x.e)),
      n !== null && ((n.prev = x), (n.e.prev = x.e)),
      x
    );
  } finally {
  }
}
function G0(t, r, e) {
  for (
    var n = t.next ? t.next.e.nodes_start : e,
      i = r ? r.e.nodes_start : e,
      a = t.e.nodes_start;
    a !== n;

  ) {
    var s = ja(a);
    i.before(a), (a = s);
  }
}
function sn(t, r, e) {
  r === null ? (t.first = e) : ((r.next = e), (r.e.next = e && e.e)),
    e !== null && ((e.prev = r), (e.e.prev = r && r.e));
}
function Y0(t, r, e) {
  Qn(() => {
    var n = kn(() => r(t, e?.()) || {});
    if (e && n?.update) {
      var i = !1,
        a = {};
      i0(() => {
        var s = e();
        yf(s), i && Js(a, s) && ((a = s), n.update(s));
      }),
        (i = !0);
    }
    if (n?.destroy) return () => n.destroy();
  });
}
const $0 = [
  ...` 	
\r\f \v\uFEFF`,
];
function Bu(t, r, e) {
  var n = '' + t;
  if (e) {
    for (var i in e)
      if (e[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var o = s + a;
          (s === 0 || $0.includes(n[s - 1])) &&
          (o === n.length || $0.includes(n[o]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(o + 1))
            : (s = o);
        }
  }
  return n === '' ? null : n;
}
function Hn(t, r, e, n, i, a) {
  var s = t.__className;
  if (s !== e || s === void 0) {
    var o = Bu(e, n, a);
    o == null ? t.removeAttribute('class') : (t.className = o),
      (t.__className = e);
  } else if (a && i !== a)
    for (var l in a) {
      var f = !!a[l];
      (i == null || f !== !!i[l]) && t.classList.toggle(l, f);
    }
  return a;
}
function Ff(t, r, e) {
  if (t.multiple) {
    if (r == null) return;
    if (!Wa(r)) return au();
    for (var n of t.options) n.selected = r.includes(wi(n));
    return;
  }
  for (n of t.options) {
    var i = wi(n);
    if (nu(i, r)) {
      n.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function Uu(t) {
  var r = new MutationObserver(() => {
    Ff(t, t.__value);
  });
  r.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ['value'],
  }),
    Ga(() => {
      r.disconnect();
    });
}
function Qi(t, r, e = r) {
  var n = !0;
  Cf(t, 'change', (i) => {
    var a = i ? '[selected]' : ':checked',
      s;
    if (t.multiple) s = [].map.call(t.querySelectorAll(a), wi);
    else {
      var o = t.querySelector(a) ?? t.querySelector('option:not([disabled])');
      s = o && wi(o);
    }
    e(s);
  }),
    Qn(() => {
      var i = r();
      if ((Ff(t, i, n), n && i === void 0)) {
        var a = t.querySelector(':checked');
        a !== null && ((i = wi(a)), e(i));
      }
      (t.__value = i), (n = !1);
    }),
    Uu(t);
}
function wi(t) {
  return '__value' in t ? t.__value : t.value;
}
function nn(t, r, e = r) {
  var n = Vi();
  Cf(t, 'input', (i) => {
    var a = i ? t.defaultValue : t.value;
    if (((a = ls(t) ? cs(a) : a), e(a), n && a !== (a = r()))) {
      var s = t.selectionStart,
        o = t.selectionEnd;
      (t.value = a ?? ''),
        o !== null &&
          ((t.selectionStart = s),
          (t.selectionEnd = Math.min(o, t.value.length)));
    }
  }),
    kn(r) == null && t.value && e(ls(t) ? cs(t.value) : t.value),
    i0(() => {
      var i = r();
      (ls(t) && i === cs(t.value)) ||
        (t.type === 'date' && !i && !t.value) ||
        (i !== t.value && (t.value = i ?? ''));
    });
}
function ls(t) {
  var r = t.type;
  return r === 'number' || r === 'range';
}
function cs(t) {
  return t === '' ? null : +t;
}
function Hu(t) {
  return function (...r) {
    var e = r[0];
    return e.preventDefault(), t?.apply(this, r);
  };
}
function Wu(t = !1) {
  const r = ot,
    e = r.l.u;
  if (!e) return;
  let n = () => yf(r.s);
  if (t) {
    let i = 0,
      a = {};
    const s = r0(() => {
      let o = !1;
      const l = r.s;
      for (const f in l) l[f] !== a[f] && ((a[f] = l[f]), (o = !0));
      return o && i++, i;
    });
    n = () => ue(s);
  }
  e.b.length &&
    cu(() => {
      X0(r, n), pa(e.b);
    }),
    Os(() => {
      const i = kn(() => e.m.map(Hc));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    e.a.length &&
      Os(() => {
        X0(r, n), pa(e.a);
      });
}
function X0(t, r) {
  if (t.l.s) for (const e of t.l.s) ue(e);
  r();
}
function l0(t, r, e) {
  if (t == null) return r(void 0), e && e(void 0), cn;
  const n = kn(() => t.subscribe(r, e));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Wn = [];
function Vu(t, r) {
  return { subscribe: Xr(t, r).subscribe };
}
function Xr(t, r = cn) {
  let e = null;
  const n = new Set();
  function i(o) {
    if (Js(t, o) && ((t = o), e)) {
      const l = !Wn.length;
      for (const f of n) f[1](), Wn.push(f, t);
      if (l) {
        for (let f = 0; f < Wn.length; f += 2) Wn[f][0](Wn[f + 1]);
        Wn.length = 0;
      }
    }
  }
  function a(o) {
    i(o(t));
  }
  function s(o, l = cn) {
    const f = [o, l];
    return (
      n.add(f),
      n.size === 1 && (e = r(i, a) || cn),
      o(t),
      () => {
        n.delete(f), n.size === 0 && e && (e(), (e = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function ju(t, r, e) {
  const n = !Array.isArray(t),
    i = n ? [t] : t;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = r.length < 2;
  return Vu(e, (s, o) => {
    let l = !1;
    const f = [];
    let c = 0,
      h = cn;
    const u = () => {
        if (c) return;
        h();
        const x = r(n ? f[0] : f, s, o);
        a ? s(x) : (h = typeof x == 'function' ? x : cn);
      },
      p = i.map((x, d) =>
        l0(
          x,
          (m) => {
            (f[d] = m), (c &= ~(1 << d)), l && u();
          },
          () => {
            c |= 1 << d;
          },
        ),
      );
    return (
      (l = !0),
      u(),
      function () {
        pa(p), h(), (l = !1);
      }
    );
  });
}
function Is(t) {
  let r;
  return l0(t, (e) => (r = e))(), r;
}
let bs = Symbol();
function Yr(t, r, e) {
  const n = (e[r] ??= { store: null, source: rr(void 0), unsubscribe: cn });
  if (n.store !== t && !(bs in e))
    if ((n.unsubscribe(), (n.store = t ?? null), t == null))
      (n.source.v = void 0), (n.unsubscribe = cn);
    else {
      var i = !0;
      (n.unsubscribe = l0(t, (a) => {
        i ? (n.source.v = a) : Ue(n.source, a);
      })),
        (i = !1);
    }
  return t && bs in e ? Is(t) : ue(n.source);
}
function Gu(t, r) {
  return t.set(r), r;
}
function Yu() {
  const t = {};
  function r() {
    Ga(() => {
      for (var e in t) t[e].unsubscribe();
      qo(t, bs, { enumerable: !1, value: !0 });
    });
  }
  return [t, r];
}
function Df(t) {
  ot === null && ru(),
    Wi && ot.l !== null
      ? $u(ot).m.push(t)
      : Os(() => {
          const r = kn(t);
          if (typeof r == 'function') return r;
        });
}
function $u(t) {
  var r = t.l;
  return (r.u ??= { a: [], b: [], m: [] });
}
const Xu = '5';
typeof window < 'u' && ((window.__svelte ??= {}).v ??= new Set()).add(Xu);
Jc();
function Of(t, r) {
  return function () {
    return t.apply(r, arguments);
  };
}
const { toString: Ku } = Object.prototype,
  { getPrototypeOf: c0 } = Object,
  { iterator: $a, toStringTag: Nf } = Symbol,
  Xa = ((t) => (r) => {
    const e = Ku.call(r);
    return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Or = (t) => ((t = t.toLowerCase()), (r) => Xa(r) === t),
  Ka = (t) => (r) => typeof r === t,
  { isArray: ii } = Array,
  ki = Ka('undefined');
function zu(t) {
  return (
    t !== null &&
    !ki(t) &&
    t.constructor !== null &&
    !ki(t.constructor) &&
    Kt(t.constructor.isBuffer) &&
    t.constructor.isBuffer(t)
  );
}
const Rf = Or('ArrayBuffer');
function qu(t) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(t))
      : (r = t && t.buffer && Rf(t.buffer)),
    r
  );
}
const Ju = Ka('string'),
  Kt = Ka('function'),
  kf = Ka('number'),
  za = (t) => t !== null && typeof t == 'object',
  Zu = (t) => t === !0 || t === !1,
  ua = (t) => {
    if (Xa(t) !== 'object') return !1;
    const r = c0(t);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Nf in t) &&
      !($a in t)
    );
  },
  Qu = Or('Date'),
  eh = Or('File'),
  th = Or('Blob'),
  rh = Or('FileList'),
  nh = (t) => za(t) && Kt(t.pipe),
  ih = (t) => {
    let r;
    return (
      t &&
      ((typeof FormData == 'function' && t instanceof FormData) ||
        (Kt(t.append) &&
          ((r = Xa(t)) === 'formdata' ||
            (r === 'object' &&
              Kt(t.toString) &&
              t.toString() === '[object FormData]'))))
    );
  },
  ah = Or('URLSearchParams'),
  [sh, oh, fh, lh] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Or,
  ),
  ch = (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ji(t, r, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > 'u') return;
  let n, i;
  if ((typeof t != 'object' && (t = [t]), ii(t)))
    for (n = 0, i = t.length; n < i; n++) r.call(null, t[n], n, t);
  else {
    const a = e ? Object.getOwnPropertyNames(t) : Object.keys(t),
      s = a.length;
    let o;
    for (n = 0; n < s; n++) (o = a[n]), r.call(null, t[o], o, t);
  }
}
function If(t, r) {
  r = r.toLowerCase();
  const e = Object.keys(t);
  let n = e.length,
    i;
  for (; n-- > 0; ) if (((i = e[n]), r === i.toLowerCase())) return i;
  return null;
}
const Tn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  bf = (t) => !ki(t) && t !== Tn;
function Ms() {
  const { caseless: t } = (bf(this) && this) || {},
    r = {},
    e = (n, i) => {
      const a = (t && If(r, i)) || i;
      ua(r[a]) && ua(n)
        ? (r[a] = Ms(r[a], n))
        : ua(n)
          ? (r[a] = Ms({}, n))
          : ii(n)
            ? (r[a] = n.slice())
            : (r[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ji(arguments[n], e);
  return r;
}
const uh = (t, r, e, { allOwnKeys: n } = {}) => (
    ji(
      r,
      (i, a) => {
        e && Kt(i) ? (t[a] = Of(i, e)) : (t[a] = i);
      },
      { allOwnKeys: n },
    ),
    t
  ),
  hh = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
  dh = (t, r, e, n) => {
    (t.prototype = Object.create(r.prototype, n)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, 'super', { value: r.prototype }),
      e && Object.assign(t.prototype, e);
  },
  ph = (t, r, e, n) => {
    let i, a, s;
    const o = {};
    if (((r = r || {}), t == null)) return r;
    do {
      for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, t, r)) && !o[s] && ((r[s] = t[s]), (o[s] = !0));
      t = e !== !1 && c0(t);
    } while (t && (!e || e(t, r)) && t !== Object.prototype);
    return r;
  },
  xh = (t, r, e) => {
    (t = String(t)),
      (e === void 0 || e > t.length) && (e = t.length),
      (e -= r.length);
    const n = t.indexOf(r, e);
    return n !== -1 && n === e;
  },
  vh = (t) => {
    if (!t) return null;
    if (ii(t)) return t;
    let r = t.length;
    if (!kf(r)) return null;
    const e = new Array(r);
    for (; r-- > 0; ) e[r] = t[r];
    return e;
  },
  mh = (
    (t) => (r) =>
      t && r instanceof t
  )(typeof Uint8Array < 'u' && c0(Uint8Array)),
  gh = (t, r) => {
    const n = (t && t[$a]).call(t);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      r.call(t, a[0], a[1]);
    }
  },
  _h = (t, r) => {
    let e;
    const n = [];
    for (; (e = t.exec(r)) !== null; ) n.push(e);
    return n;
  },
  wh = Or('HTMLFormElement'),
  Eh = (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, i) {
      return n.toUpperCase() + i;
    }),
  K0 = (
    ({ hasOwnProperty: t }) =>
    (r, e) =>
      t.call(r, e)
  )(Object.prototype),
  Th = Or('RegExp'),
  Mf = (t, r) => {
    const e = Object.getOwnPropertyDescriptors(t),
      n = {};
    ji(e, (i, a) => {
      let s;
      (s = r(i, a, t)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(t, n);
  },
  Sh = (t) => {
    Mf(t, (r, e) => {
      if (Kt(t) && ['arguments', 'caller', 'callee'].indexOf(e) !== -1)
        return !1;
      const n = t[e];
      if (Kt(n)) {
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
  yh = (t, r) => {
    const e = {},
      n = (i) => {
        i.forEach((a) => {
          e[a] = !0;
        });
      };
    return ii(t) ? n(t) : n(String(t).split(r)), e;
  },
  Ah = () => {},
  Ch = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r);
function Fh(t) {
  return !!(t && Kt(t.append) && t[Nf] === 'FormData' && t[$a]);
}
const Dh = (t) => {
    const r = new Array(10),
      e = (n, i) => {
        if (za(n)) {
          if (r.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            r[i] = n;
            const a = ii(n) ? [] : {};
            return (
              ji(n, (s, o) => {
                const l = e(s, i + 1);
                !ki(l) && (a[o] = l);
              }),
              (r[i] = void 0),
              a
            );
          }
        }
        return n;
      };
    return e(t, 0);
  },
  Oh = Or('AsyncFunction'),
  Nh = (t) => t && (za(t) || Kt(t)) && Kt(t.then) && Kt(t.catch),
  Pf = ((t, r) =>
    t
      ? setImmediate
      : r
        ? ((e, n) => (
            Tn.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Tn && a === e && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Tn.postMessage(e, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (e) => setTimeout(e))(
    typeof setImmediate == 'function',
    Kt(Tn.postMessage),
  ),
  Rh =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Tn)
      : (typeof process < 'u' && process.nextTick) || Pf,
  kh = (t) => t != null && Kt(t[$a]),
  V = {
    isArray: ii,
    isArrayBuffer: Rf,
    isBuffer: zu,
    isFormData: ih,
    isArrayBufferView: qu,
    isString: Ju,
    isNumber: kf,
    isBoolean: Zu,
    isObject: za,
    isPlainObject: ua,
    isReadableStream: sh,
    isRequest: oh,
    isResponse: fh,
    isHeaders: lh,
    isUndefined: ki,
    isDate: Qu,
    isFile: eh,
    isBlob: th,
    isRegExp: Th,
    isFunction: Kt,
    isStream: nh,
    isURLSearchParams: ah,
    isTypedArray: mh,
    isFileList: rh,
    forEach: ji,
    merge: Ms,
    extend: uh,
    trim: ch,
    stripBOM: hh,
    inherits: dh,
    toFlatObject: ph,
    kindOf: Xa,
    kindOfTest: Or,
    endsWith: xh,
    toArray: vh,
    forEachEntry: gh,
    matchAll: _h,
    isHTMLForm: wh,
    hasOwnProperty: K0,
    hasOwnProp: K0,
    reduceDescriptors: Mf,
    freezeMethods: Sh,
    toObjectSet: yh,
    toCamelCase: Eh,
    noop: Ah,
    toFiniteNumber: Ch,
    findKey: If,
    global: Tn,
    isContextDefined: bf,
    isSpecCompliantForm: Fh,
    toJSONObject: Dh,
    isAsyncFn: Oh,
    isThenable: Nh,
    setImmediate: Pf,
    asap: Rh,
    isIterable: kh,
  };
function Ae(t, r, e, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = 'AxiosError'),
    r && (this.code = r),
    e && (this.config = e),
    n && (this.request = n),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
V.inherits(Ae, Error, {
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
const Lf = Ae.prototype,
  Bf = {};
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
  Bf[t] = { value: t };
});
Object.defineProperties(Ae, Bf);
Object.defineProperty(Lf, 'isAxiosError', { value: !0 });
Ae.from = (t, r, e, n, i, a) => {
  const s = Object.create(Lf);
  return (
    V.toFlatObject(
      t,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (o) => o !== 'isAxiosError',
    ),
    Ae.call(s, t.message, r, e, n, i),
    (s.cause = t),
    (s.name = t.name),
    a && Object.assign(s, a),
    s
  );
};
const Ih = null;
function Ps(t) {
  return V.isPlainObject(t) || V.isArray(t);
}
function Uf(t) {
  return V.endsWith(t, '[]') ? t.slice(0, -2) : t;
}
function z0(t, r, e) {
  return t
    ? t
        .concat(r)
        .map(function (i, a) {
          return (i = Uf(i)), !e && a ? '[' + i + ']' : i;
        })
        .join(e ? '.' : '')
    : r;
}
function bh(t) {
  return V.isArray(t) && !t.some(Ps);
}
const Mh = V.toFlatObject(V, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function qa(t, r, e) {
  if (!V.isObject(t)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (e = V.toFlatObject(
      e,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, m) {
        return !V.isUndefined(m[d]);
      },
    ));
  const n = e.metaTokens,
    i = e.visitor || c,
    a = e.dots,
    s = e.indexes,
    l = (e.Blob || (typeof Blob < 'u' && Blob)) && V.isSpecCompliantForm(r);
  if (!V.isFunction(i)) throw new TypeError('visitor must be a function');
  function f(x) {
    if (x === null) return '';
    if (V.isDate(x)) return x.toISOString();
    if (V.isBoolean(x)) return x.toString();
    if (!l && V.isBlob(x))
      throw new Ae('Blob is not supported. Use a Buffer instead.');
    return V.isArrayBuffer(x) || V.isTypedArray(x)
      ? l && typeof Blob == 'function'
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function c(x, d, m) {
    let A = x;
    if (x && !m && typeof x == 'object') {
      if (V.endsWith(d, '{}'))
        (d = n ? d : d.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (V.isArray(x) && bh(x)) ||
        ((V.isFileList(x) || V.endsWith(d, '[]')) && (A = V.toArray(x)))
      )
        return (
          (d = Uf(d)),
          A.forEach(function (F, k) {
            !(V.isUndefined(F) || F === null) &&
              r.append(
                s === !0 ? z0([d], k, a) : s === null ? d : d + '[]',
                f(F),
              );
          }),
          !1
        );
    }
    return Ps(x) ? !0 : (r.append(z0(m, d, a), f(x)), !1);
  }
  const h = [],
    u = Object.assign(Mh, {
      defaultVisitor: c,
      convertValue: f,
      isVisitable: Ps,
    });
  function p(x, d) {
    if (!V.isUndefined(x)) {
      if (h.indexOf(x) !== -1)
        throw Error('Circular reference detected in ' + d.join('.'));
      h.push(x),
        V.forEach(x, function (A, D) {
          (!(V.isUndefined(A) || A === null) &&
            i.call(r, A, V.isString(D) ? D.trim() : D, d, u)) === !0 &&
            p(A, d ? d.concat(D) : [D]);
        }),
        h.pop();
    }
  }
  if (!V.isObject(t)) throw new TypeError('data must be an object');
  return p(t), r;
}
function q0(t) {
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
function u0(t, r) {
  (this._pairs = []), t && qa(t, this, r);
}
const Hf = u0.prototype;
Hf.append = function (r, e) {
  this._pairs.push([r, e]);
};
Hf.toString = function (r) {
  const e = r
    ? function (n) {
        return r.call(this, n, q0);
      }
    : q0;
  return this._pairs
    .map(function (i) {
      return e(i[0]) + '=' + e(i[1]);
    }, '')
    .join('&');
};
function Ph(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Wf(t, r, e) {
  if (!r) return t;
  const n = (e && e.encode) || Ph;
  V.isFunction(e) && (e = { serialize: e });
  const i = e && e.serialize;
  let a;
  if (
    (i
      ? (a = i(r, e))
      : (a = V.isURLSearchParams(r) ? r.toString() : new u0(r, e).toString(n)),
    a)
  ) {
    const s = t.indexOf('#');
    s !== -1 && (t = t.slice(0, s)),
      (t += (t.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return t;
}
class J0 {
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
const Vf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Lh = typeof URLSearchParams < 'u' ? URLSearchParams : u0,
  Bh = typeof FormData < 'u' ? FormData : null,
  Uh = typeof Blob < 'u' ? Blob : null,
  Hh = {
    isBrowser: !0,
    classes: { URLSearchParams: Lh, FormData: Bh, Blob: Uh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  h0 = typeof window < 'u' && typeof document < 'u',
  Ls = (typeof navigator == 'object' && navigator) || void 0,
  Wh =
    h0 &&
    (!Ls || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ls.product) < 0),
  Vh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  jh = (h0 && window.location.href) || 'http://localhost',
  Gh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: h0,
        hasStandardBrowserEnv: Wh,
        hasStandardBrowserWebWorkerEnv: Vh,
        navigator: Ls,
        origin: jh,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  It = { ...Gh, ...Hh };
function Yh(t, r) {
  return qa(
    t,
    new It.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (e, n, i, a) {
          return It.isNode && V.isBuffer(e)
            ? (this.append(n, e.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function $h(t) {
  return V.matchAll(/\w+|\[(\w*)]/g, t).map((r) =>
    r[0] === '[]' ? '' : r[1] || r[0],
  );
}
function Xh(t) {
  const r = {},
    e = Object.keys(t);
  let n;
  const i = e.length;
  let a;
  for (n = 0; n < i; n++) (a = e[n]), (r[a] = t[a]);
  return r;
}
function jf(t) {
  function r(e, n, i, a) {
    let s = e[a++];
    if (s === '__proto__') return !0;
    const o = Number.isFinite(+s),
      l = a >= e.length;
    return (
      (s = !s && V.isArray(i) ? i.length : s),
      l
        ? (V.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !o)
        : ((!i[s] || !V.isObject(i[s])) && (i[s] = []),
          r(e, n, i[s], a) && V.isArray(i[s]) && (i[s] = Xh(i[s])),
          !o)
    );
  }
  if (V.isFormData(t) && V.isFunction(t.entries)) {
    const e = {};
    return (
      V.forEachEntry(t, (n, i) => {
        r($h(n), i, e, 0);
      }),
      e
    );
  }
  return null;
}
function Kh(t, r, e) {
  if (V.isString(t))
    try {
      return (r || JSON.parse)(t), V.trim(t);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (e || JSON.stringify)(t);
}
const Gi = {
  transitional: Vf,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, e) {
      const n = e.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = V.isObject(r);
      if ((a && V.isHTMLForm(r) && (r = new FormData(r)), V.isFormData(r)))
        return i ? JSON.stringify(jf(r)) : r;
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
      if (a) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return Yh(r, this.formSerializer).toString();
        if ((o = V.isFileList(r)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return qa(
            o ? { 'files[]': r } : r,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (e.setContentType('application/json', !1), Kh(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const e = this.transitional || Gi.transitional,
        n = e && e.forcedJSONParsing,
        i = this.responseType === 'json';
      if (V.isResponse(r) || V.isReadableStream(r)) return r;
      if (r && V.isString(r) && ((n && !this.responseType) || i)) {
        const s = !(e && e.silentJSONParsing) && i;
        try {
          return JSON.parse(r);
        } catch (o) {
          if (s)
            throw o.name === 'SyntaxError'
              ? Ae.from(o, Ae.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: It.classes.FormData, Blob: It.classes.Blob },
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
  Gi.headers[t] = {};
});
const zh = V.toObjectSet([
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
  qh = (t) => {
    const r = {};
    let e, n, i;
    return (
      t &&
        t
          .split(
            `
`,
          )
          .forEach(function (s) {
            (i = s.indexOf(':')),
              (e = s.substring(0, i).trim().toLowerCase()),
              (n = s.substring(i + 1).trim()),
              !(!e || (r[e] && zh[e])) &&
                (e === 'set-cookie'
                  ? r[e]
                    ? r[e].push(n)
                    : (r[e] = [n])
                  : (r[e] = r[e] ? r[e] + ', ' + n : n));
          }),
      r
    );
  },
  Z0 = Symbol('internals');
function di(t) {
  return t && String(t).trim().toLowerCase();
}
function ha(t) {
  return t === !1 || t == null ? t : V.isArray(t) ? t.map(ha) : String(t);
}
function Jh(t) {
  const r = Object.create(null),
    e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = e.exec(t)); ) r[n[1]] = n[2];
  return r;
}
const Zh = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function us(t, r, e, n, i) {
  if (V.isFunction(n)) return n.call(this, r, e);
  if ((i && (r = e), !!V.isString(r))) {
    if (V.isString(n)) return r.indexOf(n) !== -1;
    if (V.isRegExp(n)) return n.test(r);
  }
}
function Qh(t) {
  return t
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, e, n) => e.toUpperCase() + n);
}
function e1(t, r) {
  const e = V.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(t, n + e, {
      value: function (i, a, s) {
        return this[n].call(this, r, i, a, s);
      },
      configurable: !0,
    });
  });
}
let zt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, n) {
    const i = this;
    function a(o, l, f) {
      const c = di(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = V.findKey(i, c);
      (!h || i[h] === void 0 || f === !0 || (f === void 0 && i[h] !== !1)) &&
        (i[h || l] = ha(o));
    }
    const s = (o, l) => V.forEach(o, (f, c) => a(f, c, l));
    if (V.isPlainObject(r) || r instanceof this.constructor) s(r, e);
    else if (V.isString(r) && (r = r.trim()) && !Zh(r)) s(qh(r), e);
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
    } else r != null && a(e, r, n);
    return this;
  }
  get(r, e) {
    if (((r = di(r)), r)) {
      const n = V.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!e) return i;
        if (e === !0) return Jh(i);
        if (V.isFunction(e)) return e.call(this, i, n);
        if (V.isRegExp(e)) return e.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, e) {
    if (((r = di(r)), r)) {
      const n = V.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!e || us(this, this[n], n, e)));
    }
    return !1;
  }
  delete(r, e) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = di(s)), s)) {
        const o = V.findKey(n, s);
        o && (!e || us(n, n[o], o, e)) && (delete n[o], (i = !0));
      }
    }
    return V.isArray(r) ? r.forEach(a) : a(r), i;
  }
  clear(r) {
    const e = Object.keys(this);
    let n = e.length,
      i = !1;
    for (; n--; ) {
      const a = e[n];
      (!r || us(this, this[a], a, r, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(r) {
    const e = this,
      n = {};
    return (
      V.forEach(this, (i, a) => {
        const s = V.findKey(n, a);
        if (s) {
          (e[s] = ha(i)), delete e[a];
          return;
        }
        const o = r ? Qh(a) : String(a).trim();
        o !== a && delete e[a], (e[o] = ha(i)), (n[o] = !0);
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
      V.forEach(this, (n, i) => {
        n != null && n !== !1 && (e[i] = r && V.isArray(n) ? n.join(', ') : n);
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
    return e.forEach((i) => n.set(i)), n;
  }
  static accessor(r) {
    const n = (this[Z0] = this[Z0] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const o = di(s);
      n[o] || (e1(i, s), (n[o] = !0));
    }
    return V.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
zt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
V.reduceDescriptors(zt.prototype, ({ value: t }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(n) {
      this[e] = n;
    },
  };
});
V.freezeMethods(zt);
function hs(t, r) {
  const e = this || Gi,
    n = r || e,
    i = zt.from(n.headers);
  let a = n.data;
  return (
    V.forEach(t, function (o) {
      a = o.call(e, a, i.normalize(), r ? r.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function Gf(t) {
  return !!(t && t.__CANCEL__);
}
function ai(t, r, e) {
  Ae.call(this, t ?? 'canceled', Ae.ERR_CANCELED, r, e),
    (this.name = 'CanceledError');
}
V.inherits(ai, Ae, { __CANCEL__: !0 });
function Yf(t, r, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status)
    ? t(e)
    : r(
        new Ae(
          'Request failed with status code ' + e.status,
          [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][
            Math.floor(e.status / 100) - 4
          ],
          e.config,
          e.request,
          e,
        ),
      );
}
function t1(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return (r && r[1]) || '';
}
function r1(t, r) {
  t = t || 10;
  const e = new Array(t),
    n = new Array(t);
  let i = 0,
    a = 0,
    s;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (l) {
      const f = Date.now(),
        c = n[a];
      s || (s = f), (e[i] = l), (n[i] = f);
      let h = a,
        u = 0;
      for (; h !== i; ) (u += e[h++]), (h = h % t);
      if (((i = (i + 1) % t), i === a && (a = (a + 1) % t), f - s < r)) return;
      const p = c && f - c;
      return p ? Math.round((u * 1e3) / p) : void 0;
    }
  );
}
function n1(t, r) {
  let e = 0,
    n = 1e3 / r,
    i,
    a;
  const s = (f, c = Date.now()) => {
    (e = c), (i = null), a && (clearTimeout(a), (a = null)), t.apply(null, f);
  };
  return [
    (...f) => {
      const c = Date.now(),
        h = c - e;
      h >= n
        ? s(f, c)
        : ((i = f),
          a ||
            (a = setTimeout(() => {
              (a = null), s(i);
            }, n - h)));
    },
    () => i && s(i),
  ];
}
const Sa = (t, r, e = 3) => {
    let n = 0;
    const i = r1(50, 250);
    return n1((a) => {
      const s = a.loaded,
        o = a.lengthComputable ? a.total : void 0,
        l = s - n,
        f = i(l),
        c = s <= o;
      n = s;
      const h = {
        loaded: s,
        total: o,
        progress: o ? s / o : void 0,
        bytes: l,
        rate: f || void 0,
        estimated: f && o && c ? (o - s) / f : void 0,
        event: a,
        lengthComputable: o != null,
        [r ? 'download' : 'upload']: !0,
      };
      t(h);
    }, e);
  },
  Q0 = (t, r) => {
    const e = t != null;
    return [(n) => r[0]({ lengthComputable: e, total: t, loaded: n }), r[1]];
  },
  eo =
    (t) =>
    (...r) =>
      V.asap(() => t(...r)),
  i1 = It.hasStandardBrowserEnv
    ? ((t, r) => (e) => (
        (e = new URL(e, It.origin)),
        t.protocol === e.protocol &&
          t.host === e.host &&
          (r || t.port === e.port)
      ))(
        new URL(It.origin),
        It.navigator && /(msie|trident)/i.test(It.navigator.userAgent),
      )
    : () => !0,
  a1 = It.hasStandardBrowserEnv
    ? {
        write(t, r, e, n, i, a) {
          const s = [t + '=' + encodeURIComponent(r)];
          V.isNumber(e) && s.push('expires=' + new Date(e).toGMTString()),
            V.isString(n) && s.push('path=' + n),
            V.isString(i) && s.push('domain=' + i),
            a === !0 && s.push('secure'),
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
function s1(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function o1(t, r) {
  return r ? t.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : t;
}
function $f(t, r, e) {
  let n = !s1(r);
  return t && (n || e == !1) ? o1(t, r) : r;
}
const to = (t) => (t instanceof zt ? { ...t } : t);
function Fn(t, r) {
  r = r || {};
  const e = {};
  function n(f, c, h, u) {
    return V.isPlainObject(f) && V.isPlainObject(c)
      ? V.merge.call({ caseless: u }, f, c)
      : V.isPlainObject(c)
        ? V.merge({}, c)
        : V.isArray(c)
          ? c.slice()
          : c;
  }
  function i(f, c, h, u) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f)) return n(void 0, f, h, u);
    } else return n(f, c, h, u);
  }
  function a(f, c) {
    if (!V.isUndefined(c)) return n(void 0, c);
  }
  function s(f, c) {
    if (V.isUndefined(c)) {
      if (!V.isUndefined(f)) return n(void 0, f);
    } else return n(void 0, c);
  }
  function o(f, c, h) {
    if (h in r) return n(f, c);
    if (h in t) return n(void 0, f);
  }
  const l = {
    url: a,
    method: a,
    data: a,
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
    headers: (f, c, h) => i(to(f), to(c), h, !0),
  };
  return (
    V.forEach(Object.keys(Object.assign({}, t, r)), function (c) {
      const h = l[c] || i,
        u = h(t[c], r[c], c);
      (V.isUndefined(u) && h !== o) || (e[c] = u);
    }),
    e
  );
}
const Xf = (t) => {
    const r = Fn({}, t);
    let {
      data: e,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: o,
    } = r;
    (r.headers = s = zt.from(s)),
      (r.url = Wf(
        $f(r.baseURL, r.url, r.allowAbsoluteUrls),
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
      if (It.hasStandardBrowserEnv || It.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [f, ...c] = l
          ? l
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        s.setContentType([f || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      It.hasStandardBrowserEnv &&
      (n && V.isFunction(n) && (n = n(r)), n || (n !== !1 && i1(r.url)))
    ) {
      const f = i && a && a1.read(a);
      f && s.set(i, f);
    }
    return r;
  },
  f1 = typeof XMLHttpRequest < 'u',
  l1 =
    f1 &&
    function (t) {
      return new Promise(function (e, n) {
        const i = Xf(t);
        let a = i.data;
        const s = zt.from(i.headers).normalize();
        let { responseType: o, onUploadProgress: l, onDownloadProgress: f } = i,
          c,
          h,
          u,
          p,
          x;
        function d() {
          p && p(),
            x && x(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener('abort', c);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function A() {
          if (!m) return;
          const F = zt.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            j = {
              data:
                !o || o === 'text' || o === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: F,
              config: t,
              request: m,
            };
          Yf(
            function (N) {
              e(N), d();
            },
            function (N) {
              n(N), d();
            },
            j,
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = A)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(A);
            }),
          (m.onabort = function () {
            m &&
              (n(new Ae('Request aborted', Ae.ECONNABORTED, t, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new Ae('Network Error', Ae.ERR_NETWORK, t, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let k = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const j = i.transitional || Vf;
            i.timeoutErrorMessage && (k = i.timeoutErrorMessage),
              n(
                new Ae(
                  k,
                  j.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED,
                  t,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            V.forEach(s.toJSON(), function (k, j) {
              m.setRequestHeader(j, k);
            }),
          V.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          o && o !== 'json' && (m.responseType = i.responseType),
          f && (([u, x] = Sa(f, !0)), m.addEventListener('progress', u)),
          l &&
            m.upload &&
            (([h, p] = Sa(l)),
            m.upload.addEventListener('progress', h),
            m.upload.addEventListener('loadend', p)),
          (i.cancelToken || i.signal) &&
            ((c = (F) => {
              m &&
                (n(!F || F.type ? new ai(null, t, m) : F),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const D = t1(i.url);
        if (D && It.protocols.indexOf(D) === -1) {
          n(new Ae('Unsupported protocol ' + D + ':', Ae.ERR_BAD_REQUEST, t));
          return;
        }
        m.send(a || null);
      });
    },
  c1 = (t, r) => {
    const { length: e } = (t = t ? t.filter(Boolean) : []);
    if (r || e) {
      let n = new AbortController(),
        i;
      const a = function (f) {
        if (!i) {
          (i = !0), o();
          const c = f instanceof Error ? f : this.reason;
          n.abort(
            c instanceof Ae ? c : new ai(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        r &&
        setTimeout(() => {
          (s = null), a(new Ae(`timeout ${r} of ms exceeded`, Ae.ETIMEDOUT));
        }, r);
      const o = () => {
        t &&
          (s && clearTimeout(s),
          (s = null),
          t.forEach((f) => {
            f.unsubscribe
              ? f.unsubscribe(a)
              : f.removeEventListener('abort', a);
          }),
          (t = null));
      };
      t.forEach((f) => f.addEventListener('abort', a));
      const { signal: l } = n;
      return (l.unsubscribe = () => V.asap(o)), l;
    }
  },
  u1 = function* (t, r) {
    let e = t.byteLength;
    if (e < r) {
      yield t;
      return;
    }
    let n = 0,
      i;
    for (; n < e; ) (i = n + r), yield t.slice(n, i), (n = i);
  },
  h1 = async function* (t, r) {
    for await (const e of d1(t)) yield* u1(e, r);
  },
  d1 = async function* (t) {
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
  ro = (t, r, e, n) => {
    const i = h1(t, r);
    let a = 0,
      s,
      o = (l) => {
        s || ((s = !0), n && n(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: f, value: c } = await i.next();
            if (f) {
              o(), l.close();
              return;
            }
            let h = c.byteLength;
            if (e) {
              let u = (a += h);
              e(u);
            }
            l.enqueue(new Uint8Array(c));
          } catch (f) {
            throw (o(f), f);
          }
        },
        cancel(l) {
          return o(l), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  Ja =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Kf = Ja && typeof ReadableStream == 'function',
  p1 =
    Ja &&
    (typeof TextEncoder == 'function'
      ? (
          (t) => (r) =>
            t.encode(r)
        )(new TextEncoder())
      : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
  zf = (t, ...r) => {
    try {
      return !!t(...r);
    } catch {
      return !1;
    }
  },
  x1 =
    Kf &&
    zf(() => {
      let t = !1;
      const r = new Request(It.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (t = !0), 'half';
        },
      }).headers.has('Content-Type');
      return t && !r;
    }),
  no = 64 * 1024,
  Bs = Kf && zf(() => V.isReadableStream(new Response('').body)),
  ya = { stream: Bs && ((t) => t.body) };
Ja &&
  ((t) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !ya[r] &&
        (ya[r] = V.isFunction(t[r])
          ? (e) => e[r]()
          : (e, n) => {
              throw new Ae(
                `Response type '${r}' is not supported`,
                Ae.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const v1 = async (t) => {
    if (t == null) return 0;
    if (V.isBlob(t)) return t.size;
    if (V.isSpecCompliantForm(t))
      return (
        await new Request(It.origin, { method: 'POST', body: t }).arrayBuffer()
      ).byteLength;
    if (V.isArrayBufferView(t) || V.isArrayBuffer(t)) return t.byteLength;
    if ((V.isURLSearchParams(t) && (t = t + ''), V.isString(t)))
      return (await p1(t)).byteLength;
  },
  m1 = async (t, r) => {
    const e = V.toFiniteNumber(t.getContentLength());
    return e ?? v1(r);
  },
  g1 =
    Ja &&
    (async (t) => {
      let {
        url: r,
        method: e,
        data: n,
        signal: i,
        cancelToken: a,
        timeout: s,
        onDownloadProgress: o,
        onUploadProgress: l,
        responseType: f,
        headers: c,
        withCredentials: h = 'same-origin',
        fetchOptions: u,
      } = Xf(t);
      f = f ? (f + '').toLowerCase() : 'text';
      let p = c1([i, a && a.toAbortSignal()], s),
        x;
      const d =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let m;
      try {
        if (
          l &&
          x1 &&
          e !== 'get' &&
          e !== 'head' &&
          (m = await m1(c, n)) !== 0
        ) {
          let j = new Request(r, { method: 'POST', body: n, duplex: 'half' }),
            ee;
          if (
            (V.isFormData(n) &&
              (ee = j.headers.get('content-type')) &&
              c.setContentType(ee),
            j.body)
          ) {
            const [N, W] = Q0(m, Sa(eo(l)));
            n = ro(j.body, no, N, W);
          }
        }
        V.isString(h) || (h = h ? 'include' : 'omit');
        const A = 'credentials' in Request.prototype;
        x = new Request(r, {
          ...u,
          signal: p,
          method: e.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: A ? h : void 0,
        });
        let D = await fetch(x, u);
        const F = Bs && (f === 'stream' || f === 'response');
        if (Bs && (o || (F && d))) {
          const j = {};
          ['status', 'statusText', 'headers'].forEach((M) => {
            j[M] = D[M];
          });
          const ee = V.toFiniteNumber(D.headers.get('content-length')),
            [N, W] = (o && Q0(ee, Sa(eo(o), !0))) || [];
          D = new Response(
            ro(D.body, no, N, () => {
              W && W(), d && d();
            }),
            j,
          );
        }
        f = f || 'text';
        let k = await ya[V.findKey(ya, f) || 'text'](D, t);
        return (
          !F && d && d(),
          await new Promise((j, ee) => {
            Yf(j, ee, {
              data: k,
              headers: zt.from(D.headers),
              status: D.status,
              statusText: D.statusText,
              config: t,
              request: x,
            });
          })
        );
      } catch (A) {
        throw (
          (d && d(),
          A && A.name === 'TypeError' && /Load failed|fetch/i.test(A.message)
            ? Object.assign(new Ae('Network Error', Ae.ERR_NETWORK, t, x), {
                cause: A.cause || A,
              })
            : Ae.from(A, A && A.code, t, x))
        );
      }
    }),
  Us = { http: Ih, xhr: l1, fetch: g1 };
V.forEach(Us, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, 'name', { value: r });
    } catch {}
    Object.defineProperty(t, 'adapterName', { value: r });
  }
});
const io = (t) => `- ${t}`,
  _1 = (t) => V.isFunction(t) || t === null || t === !1,
  qf = {
    getAdapter: (t) => {
      t = V.isArray(t) ? t : [t];
      const { length: r } = t;
      let e, n;
      const i = {};
      for (let a = 0; a < r; a++) {
        e = t[a];
        let s;
        if (
          ((n = e),
          !_1(e) && ((n = Us[(s = String(e)).toLowerCase()]), n === void 0))
        )
          throw new Ae(`Unknown adapter '${s}'`);
        if (n) break;
        i[s || '#' + a] = n;
      }
      if (!n) {
        const a = Object.entries(i).map(
          ([o, l]) =>
            `adapter ${o} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let s = r
          ? a.length > 1
            ? `since :
` +
              a.map(io).join(`
`)
            : ' ' + io(a[0])
          : 'as no adapter specified';
        throw new Ae(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: Us,
  };
function ds(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new ai(null, t);
}
function ao(t) {
  return (
    ds(t),
    (t.headers = zt.from(t.headers)),
    (t.data = hs.call(t, t.transformRequest)),
    ['post', 'put', 'patch'].indexOf(t.method) !== -1 &&
      t.headers.setContentType('application/x-www-form-urlencoded', !1),
    qf
      .getAdapter(t.adapter || Gi.adapter)(t)
      .then(
        function (n) {
          return (
            ds(t),
            (n.data = hs.call(t, t.transformResponse, n)),
            (n.headers = zt.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Gf(n) ||
              (ds(t),
              n &&
                n.response &&
                ((n.response.data = hs.call(
                  t,
                  t.transformResponse,
                  n.response,
                )),
                (n.response.headers = zt.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Jf = '1.10.0',
  Za = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (t, r) => {
    Za[t] = function (n) {
      return typeof n === t || 'a' + (r < 1 ? 'n ' : ' ') + t;
    };
  },
);
const so = {};
Za.transitional = function (r, e, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      Jf +
      "] Transitional option '" +
      a +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (a, s, o) => {
    if (r === !1)
      throw new Ae(
        i(s, ' has been removed' + (e ? ' in ' + e : '')),
        Ae.ERR_DEPRECATED,
      );
    return (
      e &&
        !so[s] &&
        ((so[s] = !0),
        console.warn(
          i(
            s,
            ' has been deprecated since v' +
              e +
              ' and will be removed in the near future',
          ),
        )),
      r ? r(a, s, o) : !0
    );
  };
};
Za.spelling = function (r) {
  return (e, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function w1(t, r, e) {
  if (typeof t != 'object')
    throw new Ae('options must be an object', Ae.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = r[a];
    if (s) {
      const o = t[a],
        l = o === void 0 || s(o, a, t);
      if (l !== !0)
        throw new Ae('option ' + a + ' must be ' + l, Ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0) throw new Ae('Unknown option ' + a, Ae.ERR_BAD_OPTION);
  }
}
const da = { assertOptions: w1, validators: Za },
  Ir = da.validators;
let An = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new J0(), response: new J0() });
  }
  async request(r, e) {
    try {
      return await this._request(r, e);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const a = i.stack ? i.stack.replace(/^.+\n/, '') : '';
        try {
          n.stack
            ? a &&
              !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, '')) &&
              (n.stack +=
                `
` + a)
            : (n.stack = a);
        } catch {}
      }
      throw n;
    }
  }
  _request(r, e) {
    typeof r == 'string' ? ((e = e || {}), (e.url = r)) : (e = r || {}),
      (e = Fn(this.defaults, e));
    const { transitional: n, paramsSerializer: i, headers: a } = e;
    n !== void 0 &&
      da.assertOptions(
        n,
        {
          silentJSONParsing: Ir.transitional(Ir.boolean),
          forcedJSONParsing: Ir.transitional(Ir.boolean),
          clarifyTimeoutError: Ir.transitional(Ir.boolean),
        },
        !1,
      ),
      i != null &&
        (V.isFunction(i)
          ? (e.paramsSerializer = { serialize: i })
          : da.assertOptions(
              i,
              { encode: Ir.function, serialize: Ir.function },
              !0,
            )),
      e.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (e.allowAbsoluteUrls = !0)),
      da.assertOptions(
        e,
        {
          baseUrl: Ir.spelling('baseURL'),
          withXsrfToken: Ir.spelling('withXSRFToken'),
        },
        !0,
      ),
      (e.method = (e.method || this.defaults.method || 'get').toLowerCase());
    let s = a && V.merge(a.common, a[e.method]);
    a &&
      V.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (x) => {
          delete a[x];
        },
      ),
      (e.headers = zt.concat(s, a));
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == 'function' && d.runWhen(e) === !1) ||
        ((l = l && d.synchronous), o.unshift(d.fulfilled, d.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (d) {
      f.push(d.fulfilled, d.rejected);
    });
    let c,
      h = 0,
      u;
    if (!l) {
      const x = [ao.bind(this), void 0];
      for (
        x.unshift.apply(x, o),
          x.push.apply(x, f),
          u = x.length,
          c = Promise.resolve(e);
        h < u;

      )
        c = c.then(x[h++], x[h++]);
      return c;
    }
    u = o.length;
    let p = e;
    for (h = 0; h < u; ) {
      const x = o[h++],
        d = o[h++];
      try {
        p = x(p);
      } catch (m) {
        d.call(this, m);
        break;
      }
    }
    try {
      c = ao.call(this, p);
    } catch (x) {
      return Promise.reject(x);
    }
    for (h = 0, u = f.length; h < u; ) c = c.then(f[h++], f[h++]);
    return c;
  }
  getUri(r) {
    r = Fn(this.defaults, r);
    const e = $f(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Wf(e, r.params, r.paramsSerializer);
  }
};
V.forEach(['delete', 'get', 'head', 'options'], function (r) {
  An.prototype[r] = function (e, n) {
    return this.request(
      Fn(n || {}, { method: r, url: e, data: (n || {}).data }),
    );
  };
});
V.forEach(['post', 'put', 'patch'], function (r) {
  function e(n) {
    return function (a, s, o) {
      return this.request(
        Fn(o || {}, {
          method: r,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (An.prototype[r] = e()), (An.prototype[r + 'Form'] = e(!0));
});
let E1 = class Zf {
  constructor(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    let e;
    this.promise = new Promise(function (a) {
      e = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; ) n._listeners[a](i);
      n._listeners = null;
    }),
      (this.promise.then = (i) => {
        let a;
        const s = new Promise((o) => {
          n.subscribe(o), (a = o);
        }).then(i);
        return (
          (s.cancel = function () {
            n.unsubscribe(a);
          }),
          s
        );
      }),
      r(function (a, s, o) {
        n.reason || ((n.reason = new ai(a, s, o)), e(n.reason));
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
      token: new Zf(function (i) {
        r = i;
      }),
      cancel: r,
    };
  }
};
function T1(t) {
  return function (e) {
    return t.apply(null, e);
  };
}
function S1(t) {
  return V.isObject(t) && t.isAxiosError === !0;
}
const Hs = {
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
Object.entries(Hs).forEach(([t, r]) => {
  Hs[r] = t;
});
function Qf(t) {
  const r = new An(t),
    e = Of(An.prototype.request, r);
  return (
    V.extend(e, An.prototype, r, { allOwnKeys: !0 }),
    V.extend(e, r, null, { allOwnKeys: !0 }),
    (e.create = function (i) {
      return Qf(Fn(t, i));
    }),
    e
  );
}
const at = Qf(Gi);
at.Axios = An;
at.CanceledError = ai;
at.CancelToken = E1;
at.isCancel = Gf;
at.VERSION = Jf;
at.toFormData = qa;
at.AxiosError = Ae;
at.Cancel = at.CanceledError;
at.all = function (r) {
  return Promise.all(r);
};
at.spread = T1;
at.isAxiosError = S1;
at.mergeConfig = Fn;
at.AxiosHeaders = zt;
at.formToJSON = (t) => jf(V.isHTMLForm(t) ? new FormData(t) : t);
at.getAdapter = qf.getAdapter;
at.HttpStatusCode = Hs;
at.default = at;
const {
  Axios: j_,
  AxiosError: G_,
  CanceledError: Y_,
  isCancel: $_,
  CancelToken: X_,
  VERSION: K_,
  all: z_,
  Cancel: q_,
  isAxiosError: J_,
  spread: Z_,
  toFormData: Q_,
  AxiosHeaders: ew,
  HttpStatusCode: tw,
  formToJSON: rw,
  getAdapter: nw,
  mergeConfig: iw,
} = at;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Aa = {};
Aa.version = '0.18.5';
var el = 1252,
  y1 = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  tl = function (t) {
    y1.indexOf(t) != -1 && (el = t);
  };
function A1() {
  tl(1252);
}
var Ii = function (t) {
  tl(t);
};
function C1() {
  Ii(1200), A1();
}
var ea = function (r) {
    return String.fromCharCode(r);
  },
  oo = function (r) {
    return String.fromCharCode(r);
  },
  Ca,
  fn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function bi(t) {
  for (
    var r = '', e = 0, n = 0, i = 0, a = 0, s = 0, o = 0, l = 0, f = 0;
    f < t.length;

  )
    (e = t.charCodeAt(f++)),
      (a = e >> 2),
      (n = t.charCodeAt(f++)),
      (s = ((e & 3) << 4) | (n >> 4)),
      (i = t.charCodeAt(f++)),
      (o = ((n & 15) << 2) | (i >> 6)),
      (l = i & 63),
      isNaN(n) ? (o = l = 64) : isNaN(i) && (l = 64),
      (r += fn.charAt(a) + fn.charAt(s) + fn.charAt(o) + fn.charAt(l));
  return r;
}
function Qr(t) {
  var r = '',
    e = 0,
    n = 0,
    i = 0,
    a = 0,
    s = 0,
    o = 0,
    l = 0;
  t = t.replace(/[^\w\+\/\=]/g, '');
  for (var f = 0; f < t.length; )
    (a = fn.indexOf(t.charAt(f++))),
      (s = fn.indexOf(t.charAt(f++))),
      (e = (a << 2) | (s >> 4)),
      (r += String.fromCharCode(e)),
      (o = fn.indexOf(t.charAt(f++))),
      (n = ((s & 15) << 4) | (o >> 2)),
      o !== 64 && (r += String.fromCharCode(n)),
      (l = fn.indexOf(t.charAt(f++))),
      (i = ((o & 3) << 6) | l),
      l !== 64 && (r += String.fromCharCode(i));
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
  rn = (function () {
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
function Dn(t) {
  return je
    ? Buffer.alloc
      ? Buffer.alloc(t)
      : new Buffer(t)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(t)
      : new Array(t);
}
function fo(t) {
  return je
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(t)
      : new Buffer(t)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(t)
      : new Array(t);
}
var Cr = function (r) {
  return je
    ? rn(r, 'binary')
    : r.split('').map(function (e) {
        return e.charCodeAt(0) & 255;
      });
};
function Qa(t) {
  if (typeof ArrayBuffer > 'u') return Cr(t);
  for (
    var r = new ArrayBuffer(t.length), e = new Uint8Array(r), n = 0;
    n != t.length;
    ++n
  )
    e[n] = t.charCodeAt(n) & 255;
  return r;
}
function Yi(t) {
  if (Array.isArray(t))
    return t
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var r = [], e = 0; e < t.length; ++e) r[e] = String.fromCharCode(t[e]);
  return r.join('');
}
function F1(t) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(t);
}
var Dt = je
  ? function (t) {
      return Buffer.concat(
        t.map(function (r) {
          return Buffer.isBuffer(r) ? r : rn(r);
        }),
      );
    }
  : function (t) {
      if (typeof Uint8Array < 'u') {
        var r = 0,
          e = 0;
        for (r = 0; r < t.length; ++r) e += t[r].length;
        var n = new Uint8Array(e),
          i = 0;
        for (r = 0, e = 0; r < t.length; e += i, ++r)
          if (((i = t[r].length), t[r] instanceof Uint8Array)) n.set(t[r], e);
          else {
            if (typeof t[r] == 'string') throw 'wtf';
            n.set(new Uint8Array(t[r]), e);
          }
        return n;
      }
      return [].concat.apply(
        [],
        t.map(function (a) {
          return Array.isArray(a) ? a : [].slice.call(a);
        }),
      );
    };
function D1(t) {
  for (
    var r = [], e = 0, n = t.length + 250, i = Dn(t.length + 255), a = 0;
    a < t.length;
    ++a
  ) {
    var s = t.charCodeAt(a);
    if (s < 128) i[e++] = s;
    else if (s < 2048)
      (i[e++] = 192 | ((s >> 6) & 31)), (i[e++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var o = t.charCodeAt(++a) & 1023;
      (i[e++] = 240 | ((s >> 8) & 7)),
        (i[e++] = 128 | ((s >> 2) & 63)),
        (i[e++] = 128 | ((o >> 6) & 15) | ((s & 3) << 4)),
        (i[e++] = 128 | (o & 63));
    } else
      (i[e++] = 224 | ((s >> 12) & 15)),
        (i[e++] = 128 | ((s >> 6) & 63)),
        (i[e++] = 128 | (s & 63));
    e > n && (r.push(i.slice(0, e)), (e = 0), (i = Dn(65535)), (n = 65530));
  }
  return r.push(i.slice(0, e)), Dt(r);
}
var Ei = /\u0000/g,
  ta = /[\u0001-\u0006]/g;
function Xn(t) {
  for (var r = '', e = t.length - 1; e >= 0; ) r += t.charAt(e--);
  return r;
}
function Fr(t, r) {
  var e = '' + t;
  return e.length >= r ? e : st('0', r - e.length) + e;
}
function d0(t, r) {
  var e = '' + t;
  return e.length >= r ? e : st(' ', r - e.length) + e;
}
function Fa(t, r) {
  var e = '' + t;
  return e.length >= r ? e : e + st(' ', r - e.length);
}
function O1(t, r) {
  var e = '' + Math.round(t);
  return e.length >= r ? e : st('0', r - e.length) + e;
}
function N1(t, r) {
  var e = '' + t;
  return e.length >= r ? e : st('0', r - e.length) + e;
}
var lo = Math.pow(2, 32);
function Vn(t, r) {
  if (t > lo || t < -lo) return O1(t, r);
  var e = Math.round(t);
  return N1(e, r);
}
function Da(t, r) {
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
var co = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  ps = [
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
function R1(t) {
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
var ft = {
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
  uo = {
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
  k1 = {
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
function Oa(t, r, e) {
  for (
    var n = t < 0 ? -1 : 1,
      i = t * n,
      a = 0,
      s = 1,
      o = 0,
      l = 1,
      f = 0,
      c = 0,
      h = Math.floor(i);
    f < r &&
    ((h = Math.floor(i)), (o = h * s + a), (c = h * f + l), !(i - h < 5e-8));

  )
    (i = 1 / (i - h)), (a = s), (s = o), (l = f), (f = c);
  if ((c > r && (f > r ? ((c = l), (o = a)) : ((c = f), (o = s))), !e))
    return [0, n * o, c];
  var u = Math.floor((n * o) / c);
  return [u, n * o - u * c, c];
}
function ra(t, r, e) {
  if (t > 2958465 || t < 0) return null;
  var n = t | 0,
    i = Math.floor(86400 * (t - n)),
    a = 0,
    s = [],
    o = {
      D: n,
      T: i,
      u: 86400 * (t - n) - i,
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
    o.u > 0.9999 && ((o.u = 0), ++i == 86400 && ((o.T = i = 0), ++n, ++o.D)),
    n === 60)
  )
    (s = e ? [1317, 10, 29] : [1900, 2, 29]), (a = 3);
  else if (n === 0) (s = e ? [1317, 8, 29] : [1900, 1, 0]), (a = 6);
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1),
      (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (a = l.getDay()),
      n < 60 && (a = (a + 6) % 7),
      e && (a = U1(l, s));
  }
  return (
    (o.y = s[0]),
    (o.m = s[1]),
    (o.d = s[2]),
    (o.S = i % 60),
    (i = Math.floor(i / 60)),
    (o.M = i % 60),
    (i = Math.floor(i / 60)),
    (o.H = i),
    (o.q = a),
    o
  );
}
var rl = new Date(1899, 11, 31, 0, 0, 0),
  I1 = rl.getTime(),
  b1 = new Date(1900, 2, 1, 0, 0, 0);
function nl(t, r) {
  var e = t.getTime();
  return (
    r ? (e -= 1461 * 24 * 60 * 60 * 1e3) : t >= b1 && (e += 24 * 60 * 60 * 1e3),
    (e - (I1 + (t.getTimezoneOffset() - rl.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function p0(t) {
  return t.indexOf('.') == -1 ? t : t.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function M1(t) {
  return t.indexOf('E') == -1
    ? t
    : t
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function P1(t) {
  var r = t < 0 ? 12 : 11,
    e = p0(t.toFixed(12));
  return e.length <= r || ((e = t.toPrecision(10)), e.length <= r)
    ? e
    : t.toExponential(5);
}
function L1(t) {
  var r = p0(t.toFixed(11));
  return r.length > (t < 0 ? 12 : 11) || r === '0' || r === '-0'
    ? t.toPrecision(6)
    : r;
}
function B1(t) {
  var r = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E),
    e;
  return (
    r >= -4 && r <= -1
      ? (e = t.toPrecision(10 + r))
      : Math.abs(r) <= 9
        ? (e = P1(t))
        : r === 10
          ? (e = t.toFixed(10).substr(0, 12))
          : (e = L1(t)),
    p0(M1(e.toUpperCase()))
  );
}
function Ws(t, r) {
  switch (typeof t) {
    case 'string':
      return t;
    case 'boolean':
      return t ? 'TRUE' : 'FALSE';
    case 'number':
      return (t | 0) === t ? t.toString(10) : B1(t);
    case 'undefined':
      return '';
    case 'object':
      if (t == null) return '';
      if (t instanceof Date) return dn(14, nl(t, r && r.date1904), r);
  }
  throw new Error('unsupported value in General format: ' + t);
}
function U1(t, r) {
  r[0] -= 581;
  var e = t.getDay();
  return t < 60 && (e = (e + 6) % 7), e;
}
function H1(t, r, e, n) {
  var i = '',
    a = 0,
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
          return ps[e.m - 1][1];
        case 5:
          return ps[e.m - 1][0];
        default:
          return ps[e.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (l = e.d), (f = r.length);
          break;
        case 3:
          return co[e.q][0];
        default:
          return co[e.q][1];
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
        ? Fr(e.S, r.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (e.S + e.u))),
          a >= 60 * s && (a = 0),
          r === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = Fr(a, 2 + n)),
              r === 'ss' ? i.substr(0, 2) : '.' + i.substr(2, r.length - 1)));
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
  var c = f > 0 ? Fr(l, f) : '';
  return c;
}
function ln(t) {
  var r = 3;
  if (t.length <= r) return t;
  for (var e = t.length % r, n = t.substr(0, e); e != t.length; e += r)
    n += (n.length > 0 ? ',' : '') + t.substr(e, r);
  return n;
}
var il = /%/g;
function W1(t, r, e) {
  var n = r.replace(il, ''),
    i = r.length - n.length;
  return zr(t, n, e * Math.pow(10, 2 * i)) + st('%', i);
}
function V1(t, r, e) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return zr(t, r.substr(0, n), e / Math.pow(10, 3 * (r.length - n)));
}
function al(t, r) {
  var e,
    n = t.indexOf('E') - t.indexOf('.') - 1;
  if (t.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + al(t, -r);
    var i = t.indexOf('.');
    i === -1 && (i = t.indexOf('E'));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (e = (r / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      e.indexOf('e') === -1)
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (
        e.indexOf('.') === -1
          ? (e = e.charAt(0) + '.' + e.substr(1) + 'E+' + (s - e.length + a))
          : (e += 'E+' + (s - a));
        e.substr(0, 2) === '0.';

      )
        (e = e.charAt(0) + e.substr(2, i) + '.' + e.substr(2 + i)),
          (e = e.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'));
      e = e.replace(/\+-/, '-');
    }
    e = e.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
      return l + f + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
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
var sl = /# (\?+)( ?)\/( ?)(\d+)/;
function j1(t, r, e) {
  var n = parseInt(t[4], 10),
    i = Math.round(r * n),
    a = Math.floor(i / n),
    s = i - a * n,
    o = n;
  return (
    e +
    (a === 0 ? '' : '' + a) +
    ' ' +
    (s === 0
      ? st(' ', t[1].length + 1 + t[4].length)
      : d0(s, t[1].length) + t[2] + '/' + t[3] + Fr(o, t[4].length))
  );
}
function G1(t, r, e) {
  return e + (r === 0 ? '' : '' + r) + st(' ', t[1].length + 2 + t[4].length);
}
var ol = /^#*0*\.([0#]+)/,
  fl = /\).*[0#]/,
  ll = /\(###\) ###\\?-####/;
function Ut(t) {
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
function ho(t, r) {
  var e = Math.pow(10, r);
  return '' + Math.round(t * e) / e;
}
function po(t, r) {
  var e = t - Math.floor(t),
    n = Math.pow(10, r);
  return r < ('' + Math.round(e * n)).length ? 0 : Math.round(e * n);
}
function Y1(t, r) {
  return r < ('' + Math.round((t - Math.floor(t)) * Math.pow(10, r))).length
    ? 1
    : 0;
}
function $1(t) {
  return t < 2147483647 && t > -2147483648
    ? '' + (t >= 0 ? t | 0 : (t - 1) | 0)
    : '' + Math.floor(t);
}
function dr(t, r, e) {
  if (t.charCodeAt(0) === 40 && !r.match(fl)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return e >= 0 ? dr('n', n, e) : '(' + dr('n', n, -e) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return V1(t, r, e);
  if (r.indexOf('%') !== -1) return W1(t, r, e);
  if (r.indexOf('E') !== -1) return al(r, e);
  if (r.charCodeAt(0) === 36)
    return '$' + dr(t, r.substr(r.charAt(1) == ' ' ? 2 : 1), e);
  var i,
    a,
    s,
    o,
    l = Math.abs(e),
    f = e < 0 ? '-' : '';
  if (r.match(/^00+$/)) return f + Vn(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = Vn(e, 0)),
      i === '0' && (i = ''),
      i.length > r.length ? i : Ut(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(sl))) return j1(a, l, f);
  if (r.match(/^#+0+$/)) return f + Vn(l, r.length - r.indexOf('0'));
  if ((a = r.match(ol)))
    return (
      (i = ho(e, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + Ut(a[1]))
        .replace(/\.$/, '.' + Ut(a[1]))
        .replace(/\.(\d*)$/, function (x, d) {
          return '.' + d + st('0', Ut(a[1]).length - d.length);
        })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      f +
      ho(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return f + ln(Vn(l, 0));
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return e < 0
      ? '-' + dr(t, r, -e)
      : ln('' + (Math.floor(e) + Y1(e, a[1].length))) +
          '.' +
          Fr(po(e, a[1].length), a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return dr(t, r.replace(/^#,#*,/, ''), e);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = Xn(dr(t, r.replace(/[\\-]/g, ''), e))),
      (s = 0),
      Xn(
        Xn(r.replace(/\\/g, '')).replace(/[0#]/g, function (x) {
          return s < i.length ? i.charAt(s++) : x === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(ll))
    return (
      (i = dr(t, '##########', e)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (o = Oa(l, Math.pow(10, s) - 1, !1)),
      (i = '' + f),
      (c = zr('n', a[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Fa(o[2], s)),
      c.length < a[4].length &&
        (c = Ut(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (o = Oa(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? d0(o[1], s) + a[2] + '/' + a[3] + Fa(o[2], s)
          : st(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = Vn(e, 0)),
      r.length <= i.length ? i : Ut(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + e.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return Ut(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = po(e, a[1].length)),
      e < 0
        ? '-' + dr(t, r, -e)
        : ln($1(e))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (x) {
              return '00,' + (x.length < 3 ? Fr(0, 3 - x.length) : '') + x;
            }) +
          '.' +
          Fr(s, a[1].length)
    );
  switch (r) {
    case '###,##0.00':
      return dr(t, '#,##0.00', e);
    case '###,###':
    case '##,###':
    case '#,###':
      var p = ln(Vn(l, 0));
      return p !== '0' ? f + p : '';
    case '###,###.00':
      return dr(t, '###,##0.00', e).replace(/^0\./, '.');
    case '#,###.00':
      return dr(t, '#,##0.00', e).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + r + '|');
}
function X1(t, r, e) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return zr(t, r.substr(0, n), e / Math.pow(10, 3 * (r.length - n)));
}
function K1(t, r, e) {
  var n = r.replace(il, ''),
    i = r.length - n.length;
  return zr(t, n, e * Math.pow(10, 2 * i)) + st('%', i);
}
function cl(t, r) {
  var e,
    n = t.indexOf('E') - t.indexOf('.') - 1;
  if (t.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + cl(t, -r);
    var i = t.indexOf('.');
    i === -1 && (i = t.indexOf('E'));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (e = (r / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      !e.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      e.indexOf('.') === -1
        ? (e = e.charAt(0) + '.' + e.substr(1) + 'E+' + (s - e.length + a))
        : (e += 'E+' + (s - a)),
        (e = e.replace(/\+-/, '-'));
    }
    e = e.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (o, l, f, c) {
      return l + f + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
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
function br(t, r, e) {
  if (t.charCodeAt(0) === 40 && !r.match(fl)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return e >= 0 ? br('n', n, e) : '(' + br('n', n, -e) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return X1(t, r, e);
  if (r.indexOf('%') !== -1) return K1(t, r, e);
  if (r.indexOf('E') !== -1) return cl(r, e);
  if (r.charCodeAt(0) === 36)
    return '$' + br(t, r.substr(r.charAt(1) == ' ' ? 2 : 1), e);
  var i,
    a,
    s,
    o,
    l = Math.abs(e),
    f = e < 0 ? '-' : '';
  if (r.match(/^00+$/)) return f + Fr(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = '' + e),
      e === 0 && (i = ''),
      i.length > r.length ? i : Ut(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(sl))) return G1(a, l, f);
  if (r.match(/^#+0+$/)) return f + Fr(l, r.length - r.indexOf('0'));
  if ((a = r.match(ol)))
    return (
      (i = ('' + e)
        .replace(/^([^\.]+)$/, '$1.' + Ut(a[1]))
        .replace(/\.$/, '.' + Ut(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (x, d) {
        return '.' + d + st('0', Ut(a[1]).length - d.length);
      })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      f +
      ('' + l)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return f + ln('' + l);
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return e < 0 ? '-' + br(t, r, -e) : ln('' + e) + '.' + st('0', a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return br(t, r.replace(/^#,#*,/, ''), e);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = Xn(br(t, r.replace(/[\\-]/g, ''), e))),
      (s = 0),
      Xn(
        Xn(r.replace(/\\/g, '')).replace(/[0#]/g, function (x) {
          return s < i.length ? i.charAt(s++) : x === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(ll))
    return (
      (i = br(t, '##########', e)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (o = Oa(l, Math.pow(10, s) - 1, !1)),
      (i = '' + f),
      (c = zr('n', a[1], o[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Fa(o[2], s)),
      c.length < a[4].length &&
        (c = Ut(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (o = Oa(l, Math.pow(10, s) - 1, !0)),
      f +
        (o[0] || (o[1] ? '' : '0')) +
        ' ' +
        (o[1]
          ? d0(o[1], s) + a[2] + '/' + a[3] + Fa(o[2], s)
          : st(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = '' + e),
      r.length <= i.length ? i : Ut(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + e.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return Ut(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return e < 0
      ? '-' + br(t, r, -e)
      : ln('' + e)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (x) {
            return '00,' + (x.length < 3 ? Fr(0, 3 - x.length) : '') + x;
          }) +
          '.' +
          Fr(0, a[1].length);
  switch (r) {
    case '###,###':
    case '##,###':
    case '#,###':
      var p = ln('' + l);
      return p !== '0' ? f + p : '';
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          br(t, r.slice(0, r.lastIndexOf('.')), e) +
          Ut(r.slice(r.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + r + '|');
}
function zr(t, r, e) {
  return (e | 0) === e ? br(t, r, e) : dr(t, r, e);
}
function z1(t) {
  for (var r = [], e = !1, n = 0, i = 0; n < t.length; ++n)
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
        (r[r.length] = t.substr(i, n - i)), (i = n + 1);
    }
  if (((r[r.length] = t.substr(i)), e === !0))
    throw new Error('Format |' + t + '| unterminated string ');
  return r;
}
var ul = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function hl(t) {
  for (var r = 0, e = '', n = ''; r < t.length; )
    switch ((e = t.charAt(r))) {
      case 'G':
        Da(t, r) && (r += 6), r++;
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
        if (n.match(ul)) return !0;
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
function q1(t, r, e, n) {
  for (
    var i = [], a = '', s = 0, o = '', l = 't', f, c, h, u = 'H';
    s < t.length;

  )
    switch ((o = t.charAt(s))) {
      case 'G':
        if (!Da(t, s))
          throw new Error('unrecognized character ' + o + ' in ' + t);
        (i[i.length] = { t: 'G', v: 'General' }), (s += 7);
        break;
      case '"':
        for (a = ''; (h = t.charCodeAt(++s)) !== 34 && s < t.length; )
          a += String.fromCharCode(h);
        (i[i.length] = { t: 't', v: a }), ++s;
        break;
      case '\\':
        var p = t.charAt(++s),
          x = p === '(' || p === ')' ? p : 't';
        (i[i.length] = { t: x, v: p }), ++s;
        break;
      case '_':
        (i[i.length] = { t: 't', v: ' ' }), (s += 2);
        break;
      case '@':
        (i[i.length] = { t: 'T', v: r }), ++s;
        break;
      case 'B':
      case 'b':
        if (t.charAt(s + 1) === '1' || t.charAt(s + 1) === '2') {
          if (f == null && ((f = ra(r, e, t.charAt(s + 1) === '2')), f == null))
            return '';
          (i[i.length] = { t: 'X', v: t.substr(s, 2) }), (l = o), (s += 2);
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
        if (r < 0 || (f == null && ((f = ra(r, e)), f == null))) return '';
        for (a = o; ++s < t.length && t.charAt(s).toLowerCase() === o; ) a += o;
        o === 'm' && l.toLowerCase() === 'h' && (o = 'M'),
          o === 'h' && (o = u),
          (i[i.length] = { t: o, v: a }),
          (l = o);
        break;
      case 'A':
      case 'a':
      case '上':
        var d = { t: o, v: o };
        if (
          (f == null && (f = ra(r, e)),
          t.substr(s, 3).toUpperCase() === 'A/P'
            ? (f != null && (d.v = f.H >= 12 ? 'P' : 'A'),
              (d.t = 'T'),
              (u = 'h'),
              (s += 3))
            : t.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (f != null && (d.v = f.H >= 12 ? 'PM' : 'AM'),
                (d.t = 'T'),
                (s += 5),
                (u = 'h'))
              : t.substr(s, 5).toUpperCase() === '上午/下午'
                ? (f != null && (d.v = f.H >= 12 ? '下午' : '上午'),
                  (d.t = 'T'),
                  (s += 5),
                  (u = 'h'))
                : ((d.t = 't'), ++s),
          f == null && d.t === 'T')
        )
          return '';
        (i[i.length] = d), (l = o);
        break;
      case '[':
        for (a = o; t.charAt(s++) !== ']' && s < t.length; ) a += t.charAt(s);
        if (a.slice(-1) !== ']') throw 'unterminated "[" block: |' + a + '|';
        if (a.match(ul)) {
          if (f == null && ((f = ra(r, e)), f == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            hl(t) || (i[i.length] = { t: 't', v: a }));
        break;
      case '.':
        if (f != null) {
          for (a = o; ++s < t.length && (o = t.charAt(s)) === '0'; ) a += o;
          i[i.length] = { t: 's', v: a };
          break;
        }
      case '0':
      case '#':
        for (
          a = o;
          ++s < t.length && '0#?.,E+-%'.indexOf((o = t.charAt(s))) > -1;

        )
          a += o;
        i[i.length] = { t: 'n', v: a };
        break;
      case '?':
        for (a = o; t.charAt(++s) === o; ) a += o;
        (i[i.length] = { t: o, v: a }), (l = o);
        break;
      case '*':
        ++s, (t.charAt(s) == ' ' || t.charAt(s) == '*') && ++s;
        break;
      case '(':
      case ')':
        (i[i.length] = { t: n === 1 ? 't' : o, v: o }), ++s;
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
        for (a = o; s < t.length && '0123456789'.indexOf(t.charAt(++s)) > -1; )
          a += t.charAt(s);
        i[i.length] = { t: 'D', v: a };
        break;
      case ' ':
        (i[i.length] = { t: o, v: o }), ++s;
        break;
      case '$':
        (i[i.length] = { t: 't', v: '$' }), ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(o) === -1)
          throw new Error('unrecognized character ' + o + ' in ' + t);
        (i[i.length] = { t: 't', v: o }), ++s;
        break;
    }
  var m = 0,
    A = 0,
    D;
  for (s = i.length - 1, l = 't'; s >= 0; --s)
    switch (i[s].t) {
      case 'h':
      case 'H':
        (i[s].t = u), (l = 'h'), m < 1 && (m = 1);
        break;
      case 's':
        (D = i[s].v.match(/\.0+$/)) && (A = Math.max(A, D[0].length - 1)),
          m < 3 && (m = 3);
      case 'd':
      case 'y':
      case 'M':
      case 'e':
        l = i[s].t;
        break;
      case 'm':
        l === 's' && ((i[s].t = 'M'), m < 2 && (m = 2));
        break;
      case 'X':
        break;
      case 'Z':
        m < 1 && i[s].v.match(/[Hh]/) && (m = 1),
          m < 2 && i[s].v.match(/[Mm]/) && (m = 2),
          m < 3 && i[s].v.match(/[Ss]/) && (m = 3);
    }
  switch (m) {
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
  for (s = 0; s < i.length; ++s)
    switch (i[s].t) {
      case 't':
      case 'T':
      case ' ':
      case 'D':
        break;
      case 'X':
        (i[s].v = ''), (i[s].t = ';');
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
        (i[s].v = H1(i[s].t.charCodeAt(0), i[s].v, f, A)), (i[s].t = 't');
        break;
      case 'n':
      case '?':
        for (
          k = s + 1;
          i[k] != null &&
          ((o = i[k].t) === '?' ||
            o === 'D' ||
            ((o === ' ' || o === 't') &&
              i[k + 1] != null &&
              (i[k + 1].t === '?' ||
                (i[k + 1].t === 't' && i[k + 1].v === '/'))) ||
            (i[s].t === '(' && (o === ' ' || o === 'n' || o === ')')) ||
            (o === 't' &&
              (i[k].v === '/' ||
                (i[k].v === ' ' && i[k + 1] != null && i[k + 1].t == '?'))));

        )
          (i[s].v += i[k].v), (i[k] = { v: '', t: ';' }), ++k;
        (F += i[s].v), (s = k - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = Ws(r, e));
        break;
    }
  var j = '',
    ee,
    N;
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((ee = r < 0 && F.charCodeAt(0) === 45 ? -r : r), (N = zr('n', F, ee)))
      : ((ee = r < 0 && n > 1 ? -r : r),
        (N = zr('n', F, ee)),
        ee < 0 &&
          i[0] &&
          i[0].t == 't' &&
          ((N = N.substr(1)), (i[0].v = '-' + i[0].v))),
      (k = N.length - 1);
    var W = i.length;
    for (s = 0; s < i.length; ++s)
      if (i[s] != null && i[s].t != 't' && i[s].v.indexOf('.') > -1) {
        W = s;
        break;
      }
    var M = i.length;
    if (W === i.length && N.indexOf('E') === -1) {
      for (s = i.length - 1; s >= 0; --s)
        i[s] == null ||
          'n?'.indexOf(i[s].t) === -1 ||
          (k >= i[s].v.length - 1
            ? ((k -= i[s].v.length), (i[s].v = N.substr(k + 1, i[s].v.length)))
            : k < 0
              ? (i[s].v = '')
              : ((i[s].v = N.substr(0, k + 1)), (k = -1)),
          (i[s].t = 't'),
          (M = s));
      k >= 0 && M < i.length && (i[M].v = N.substr(0, k + 1) + i[M].v);
    } else if (W !== i.length && N.indexOf('E') === -1) {
      for (k = N.indexOf('.') - 1, s = W; s >= 0; --s)
        if (!(i[s] == null || 'n?'.indexOf(i[s].t) === -1)) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === W
                ? i[s].v.indexOf('.') - 1
                : i[s].v.length - 1,
              j = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            k >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (j = N.charAt(k--) + j);
          (i[s].v = j), (i[s].t = 't'), (M = s);
        }
      for (
        k >= 0 && M < i.length && (i[M].v = N.substr(0, k + 1) + i[M].v),
          k = N.indexOf('.') + 1,
          s = W;
        s < i.length;
        ++s
      )
        if (!(i[s] == null || ('n?('.indexOf(i[s].t) === -1 && s !== W))) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === W ? i[s].v.indexOf('.') + 1 : 0,
              j = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            k < N.length && (j += N.charAt(k++));
          (i[s].v = j), (i[s].t = 't'), (M = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((ee = n > 1 && r < 0 && s > 0 && i[s - 1].v === '-' ? -r : r),
      (i[s].v = zr(i[s].t, i[s].v, ee)),
      (i[s].t = 't'));
  var X = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (X += i[s].v);
  return X;
}
var xo = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function vo(t, r) {
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
function J1(t, r) {
  var e = z1(t),
    n = e.length,
    i = e[n - 1].indexOf('@');
  if ((n < 4 && i > -1 && --n, e.length > 4))
    throw new Error('cannot find right format for |' + e.join('|') + '|');
  if (typeof r != 'number')
    return [4, e.length === 4 || i > -1 ? e[e.length - 1] : '@'];
  switch (e.length) {
    case 1:
      e =
        i > -1
          ? ['General', 'General', 'General', e[0]]
          : [e[0], e[0], e[0], '@'];
      break;
    case 2:
      e = i > -1 ? [e[0], e[0], e[0], e[1]] : [e[0], e[1], e[0], '@'];
      break;
    case 3:
      e = i > -1 ? [e[0], e[1], e[0], e[2]] : [e[0], e[1], e[2], '@'];
      break;
  }
  var a = r > 0 ? e[0] : r < 0 ? e[1] : e[2];
  if (e[0].indexOf('[') === -1 && e[1].indexOf('[') === -1) return [n, a];
  if (e[0].match(/\[[=<>]/) != null || e[1].match(/\[[=<>]/) != null) {
    var s = e[0].match(xo),
      o = e[1].match(xo);
    return vo(r, s)
      ? [n, e[0]]
      : vo(r, o)
        ? [n, e[1]]
        : [n, e[s != null && o != null ? 2 : 1]];
  }
  return [n, a];
}
function dn(t, r, e) {
  e == null && (e = {});
  var n = '';
  switch (typeof t) {
    case 'string':
      t == 'm/d/yy' && e.dateNF ? (n = e.dateNF) : (n = t);
      break;
    case 'number':
      t == 14 && e.dateNF
        ? (n = e.dateNF)
        : (n = (e.table != null ? e.table : ft)[t]),
        n == null && (n = (e.table && e.table[uo[t]]) || ft[uo[t]]),
        n == null && (n = k1[t] || 'General');
      break;
  }
  if (Da(n, 0)) return Ws(r, e);
  r instanceof Date && (r = nl(r, e.date1904));
  var i = J1(n, r);
  if (Da(i[1])) return Ws(r, e);
  if (r === !0) r = 'TRUE';
  else if (r === !1) r = 'FALSE';
  else if (r === '' || r == null) return '';
  return q1(i[1], r, e, i[0]);
}
function dl(t, r) {
  if (typeof r != 'number') {
    r = +r || -1;
    for (var e = 0; e < 392; ++e) {
      if (ft[e] == null) {
        r < 0 && (r = e);
        continue;
      }
      if (ft[e] == t) {
        r = e;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (ft[r] = t), r;
}
function es(t) {
  for (var r = 0; r != 392; ++r) t[r] !== void 0 && dl(t[r], r);
}
function ts() {
  ft = R1();
}
var pl = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function Z1(t) {
  var r = typeof t == 'number' ? ft[t] : t;
  return (r = r.replace(pl, '(\\d+)')), new RegExp('^' + r + '$');
}
function Q1(t, r, e) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    o = -1,
    l = -1;
  (r.match(pl) || []).forEach(function (h, u) {
    var p = parseInt(e[u + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case 'y':
        n = p;
        break;
      case 'd':
        a = p;
        break;
      case 'h':
        s = p;
        break;
      case 's':
        l = p;
        break;
      case 'm':
        s >= 0 ? (o = p) : (i = p);
        break;
    }
  }),
    l >= 0 && o == -1 && i >= 0 && ((o = i), (i = -1));
  var f =
    ('' + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
    '-' +
    ('00' + (i >= 1 ? i : 1)).slice(-2) +
    '-' +
    ('00' + (a >= 1 ? a : 1)).slice(-2);
  f.length == 7 && (f = '0' + f), f.length == 8 && (f = '20' + f);
  var c =
    ('00' + (s >= 0 ? s : 0)).slice(-2) +
    ':' +
    ('00' + (o >= 0 ? o : 0)).slice(-2) +
    ':' +
    ('00' + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && o == -1 && l == -1
    ? f
    : n == -1 && i == -1 && a == -1
      ? c
      : f + 'T' + c;
}
var ed = (function () {
    var t = {};
    t.version = '1.2.0';
    function r() {
      for (var N = 0, W = new Array(256), M = 0; M != 256; ++M)
        (N = M),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (N = N & 1 ? -306674912 ^ (N >>> 1) : N >>> 1),
          (W[M] = N);
      return typeof Int32Array < 'u' ? new Int32Array(W) : W;
    }
    var e = r();
    function n(N) {
      var W = 0,
        M = 0,
        X = 0,
        K = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (X = 0; X != 256; ++X) K[X] = N[X];
      for (X = 0; X != 256; ++X)
        for (M = N[X], W = 256 + X; W < 4096; W += 256)
          M = K[W] = (M >>> 8) ^ N[M & 255];
      var J = [];
      for (X = 1; X != 16; ++X)
        J[X - 1] =
          typeof Int32Array < 'u'
            ? K.subarray(X * 256, X * 256 + 256)
            : K.slice(X * 256, X * 256 + 256);
      return J;
    }
    var i = n(e),
      a = i[0],
      s = i[1],
      o = i[2],
      l = i[3],
      f = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      p = i[8],
      x = i[9],
      d = i[10],
      m = i[11],
      A = i[12],
      D = i[13],
      F = i[14];
    function k(N, W) {
      for (var M = W ^ -1, X = 0, K = N.length; X < K; )
        M = (M >>> 8) ^ e[(M ^ N.charCodeAt(X++)) & 255];
      return ~M;
    }
    function j(N, W) {
      for (var M = W ^ -1, X = N.length - 15, K = 0; K < X; )
        M =
          F[N[K++] ^ (M & 255)] ^
          D[N[K++] ^ ((M >> 8) & 255)] ^
          A[N[K++] ^ ((M >> 16) & 255)] ^
          m[N[K++] ^ (M >>> 24)] ^
          d[N[K++]] ^
          x[N[K++]] ^
          p[N[K++]] ^
          u[N[K++]] ^
          h[N[K++]] ^
          c[N[K++]] ^
          f[N[K++]] ^
          l[N[K++]] ^
          o[N[K++]] ^
          s[N[K++]] ^
          a[N[K++]] ^
          e[N[K++]];
      for (X += 15; K < X; ) M = (M >>> 8) ^ e[(M ^ N[K++]) & 255];
      return ~M;
    }
    function ee(N, W) {
      for (var M = W ^ -1, X = 0, K = N.length, J = 0, ne = 0; X < K; )
        (J = N.charCodeAt(X++)),
          J < 128
            ? (M = (M >>> 8) ^ e[(M ^ J) & 255])
            : J < 2048
              ? ((M = (M >>> 8) ^ e[(M ^ (192 | ((J >> 6) & 31))) & 255]),
                (M = (M >>> 8) ^ e[(M ^ (128 | (J & 63))) & 255]))
              : J >= 55296 && J < 57344
                ? ((J = (J & 1023) + 64),
                  (ne = N.charCodeAt(X++) & 1023),
                  (M = (M >>> 8) ^ e[(M ^ (240 | ((J >> 8) & 7))) & 255]),
                  (M = (M >>> 8) ^ e[(M ^ (128 | ((J >> 2) & 63))) & 255]),
                  (M =
                    (M >>> 8) ^
                    e[(M ^ (128 | ((ne >> 6) & 15) | ((J & 3) << 4))) & 255]),
                  (M = (M >>> 8) ^ e[(M ^ (128 | (ne & 63))) & 255]))
                : ((M = (M >>> 8) ^ e[(M ^ (224 | ((J >> 12) & 15))) & 255]),
                  (M = (M >>> 8) ^ e[(M ^ (128 | ((J >> 6) & 63))) & 255]),
                  (M = (M >>> 8) ^ e[(M ^ (128 | (J & 63))) & 255]));
      return ~M;
    }
    return (t.table = e), (t.bstr = k), (t.buf = j), (t.str = ee), t;
  })(),
  ze = (function () {
    var r = {};
    r.version = '1.2.1';
    function e(v, T) {
      for (
        var _ = v.split('/'),
          w = T.split('/'),
          S = 0,
          y = 0,
          P = Math.min(_.length, w.length);
        S < P;
        ++S
      ) {
        if ((y = _[S].length - w[S].length)) return y;
        if (_[S] != w[S]) return _[S] < w[S] ? -1 : 1;
      }
      return _.length - w.length;
    }
    function n(v) {
      if (v.charAt(v.length - 1) == '/')
        return v.slice(0, -1).indexOf('/') === -1 ? v : n(v.slice(0, -1));
      var T = v.lastIndexOf('/');
      return T === -1 ? v : v.slice(0, T + 1);
    }
    function i(v) {
      if (v.charAt(v.length - 1) == '/') return i(v.slice(0, -1));
      var T = v.lastIndexOf('/');
      return T === -1 ? v : v.slice(T + 1);
    }
    function a(v, T) {
      typeof T == 'string' && (T = new Date(T));
      var _ = T.getHours();
      (_ = (_ << 6) | T.getMinutes()),
        (_ = (_ << 5) | (T.getSeconds() >>> 1)),
        v.write_shift(2, _);
      var w = T.getFullYear() - 1980;
      (w = (w << 4) | (T.getMonth() + 1)),
        (w = (w << 5) | T.getDate()),
        v.write_shift(2, w);
    }
    function s(v) {
      var T = v.read_shift(2) & 65535,
        _ = v.read_shift(2) & 65535,
        w = new Date(),
        S = _ & 31;
      _ >>>= 5;
      var y = _ & 15;
      (_ >>>= 4),
        w.setMilliseconds(0),
        w.setFullYear(_ + 1980),
        w.setMonth(y - 1),
        w.setDate(S);
      var P = T & 31;
      T >>>= 5;
      var Y = T & 63;
      return (
        (T >>>= 6), w.setHours(T), w.setMinutes(Y), w.setSeconds(P << 1), w
      );
    }
    function o(v) {
      ar(v, 0);
      for (var T = {}, _ = 0; v.l <= v.length - 4; ) {
        var w = v.read_shift(2),
          S = v.read_shift(2),
          y = v.l + S,
          P = {};
        switch (w) {
          case 21589:
            (_ = v.read_shift(1)),
              _ & 1 && (P.mtime = v.read_shift(4)),
              S > 5 &&
                (_ & 2 && (P.atime = v.read_shift(4)),
                _ & 4 && (P.ctime = v.read_shift(4))),
              P.mtime && (P.mt = new Date(P.mtime * 1e3));
            break;
        }
        (v.l = y), (T[w] = P);
      }
      return T;
    }
    var l;
    function f() {
      return l || (l = {});
    }
    function c(v, T) {
      if (v[0] == 80 && v[1] == 75) return hr(v, T);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return ce(v, T);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        w = 512,
        S = 0,
        y = 0,
        P = 0,
        Y = 0,
        b = 0,
        L = [],
        B = v.slice(0, 512);
      ar(B, 0);
      var Q = h(B);
      switch (((_ = Q[0]), _)) {
        case 3:
          w = 512;
          break;
        case 4:
          w = 4096;
          break;
        case 0:
          if (Q[1] == 0) return hr(v, T);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      w !== 512 && ((B = v.slice(0, w)), ar(B, 28));
      var se = v.slice(0, w);
      u(B, _);
      var he = B.read_shift(4, 'i');
      if (_ === 3 && he !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + he);
      (B.l += 4),
        (P = B.read_shift(4, 'i')),
        (B.l += 4),
        B.chk('00100000', 'Mini Stream Cutoff Size: '),
        (Y = B.read_shift(4, 'i')),
        (S = B.read_shift(4, 'i')),
        (b = B.read_shift(4, 'i')),
        (y = B.read_shift(4, 'i'));
      for (
        var re = -1, z = 0;
        z < 109 && ((re = B.read_shift(4, 'i')), !(re < 0));
        ++z
      )
        L[z] = re;
      var oe = p(v, w);
      m(b, y, oe, w, L);
      var Ee = D(oe, P, L, w);
      (Ee[P].name = '!Directory'),
        S > 0 && Y !== ne && (Ee[Y].name = '!MiniFAT'),
        (Ee[L[0]].name = '!FAT'),
        (Ee.fat_addrs = L),
        (Ee.ssz = w);
      var Re = {},
        et = [],
        jr = [],
        Tr = [];
      F(P, Ee, oe, et, S, Re, jr, Y), x(jr, Tr, et), et.shift();
      var ci = { FileIndex: jr, FullPaths: Tr };
      return T && T.raw && (ci.raw = { header: se, sectors: oe }), ci;
    }
    function h(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(ke, 'Header Signature: '), (v.l += 16);
      var T = v.read_shift(2, 'u');
      return [v.read_shift(2, 'u'), T];
    }
    function u(v, T) {
      var _ = 9;
      switch (((v.l += 2), (_ = v.read_shift(2)))) {
        case 9:
          if (T != 3) throw new Error('Sector Shift: Expected 9 saw ' + _);
          break;
        case 12:
          if (T != 4) throw new Error('Sector Shift: Expected 12 saw ' + _);
          break;
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + _);
      }
      v.chk('0600', 'Mini Sector Shift: '), v.chk('000000000000', 'Reserved: ');
    }
    function p(v, T) {
      for (var _ = Math.ceil(v.length / T) - 1, w = [], S = 1; S < _; ++S)
        w[S - 1] = v.slice(S * T, (S + 1) * T);
      return (w[_ - 1] = v.slice(_ * T)), w;
    }
    function x(v, T, _) {
      for (
        var w = 0, S = 0, y = 0, P = 0, Y = 0, b = _.length, L = [], B = [];
        w < b;
        ++w
      )
        (L[w] = B[w] = w), (T[w] = _[w]);
      for (; Y < B.length; ++Y)
        (w = B[Y]),
          (S = v[w].L),
          (y = v[w].R),
          (P = v[w].C),
          L[w] === w &&
            (S !== -1 && L[S] !== S && (L[w] = L[S]),
            y !== -1 && L[y] !== y && (L[w] = L[y])),
          P !== -1 && (L[P] = w),
          S !== -1 &&
            w != L[w] &&
            ((L[S] = L[w]), B.lastIndexOf(S) < Y && B.push(S)),
          y !== -1 &&
            w != L[w] &&
            ((L[y] = L[w]), B.lastIndexOf(y) < Y && B.push(y));
      for (w = 1; w < b; ++w)
        L[w] === w &&
          (y !== -1 && L[y] !== y
            ? (L[w] = L[y])
            : S !== -1 && L[S] !== S && (L[w] = L[S]));
      for (w = 1; w < b; ++w)
        if (v[w].type !== 0) {
          if (((Y = w), Y != L[Y]))
            do (Y = L[Y]), (T[w] = T[Y] + '/' + T[w]);
            while (Y !== 0 && L[Y] !== -1 && Y != L[Y]);
          L[w] = -1;
        }
      for (T[0] += '/', w = 1; w < b; ++w) v[w].type !== 2 && (T[w] += '/');
    }
    function d(v, T, _) {
      for (var w = v.start, S = v.size, y = [], P = w; _ && S > 0 && P >= 0; )
        y.push(T.slice(P * J, P * J + J)), (S -= J), (P = wn(_, P * 4));
      return y.length === 0 ? G(0) : Dt(y).slice(0, v.size);
    }
    function m(v, T, _, w, S) {
      var y = ne;
      if (v === ne) {
        if (T !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var P = _[v],
          Y = (w >>> 2) - 1;
        if (!P) return;
        for (var b = 0; b < Y && (y = wn(P, b * 4)) !== ne; ++b) S.push(y);
        m(wn(P, w - 4), T - 1, _, w, S);
      }
    }
    function A(v, T, _, w, S) {
      var y = [],
        P = [];
      S || (S = []);
      var Y = w - 1,
        b = 0,
        L = 0;
      for (b = T; b >= 0; ) {
        (S[b] = !0), (y[y.length] = b), P.push(v[b]);
        var B = _[Math.floor((b * 4) / w)];
        if (((L = (b * 4) & Y), w < 4 + L))
          throw new Error('FAT boundary crossed: ' + b + ' 4 ' + w);
        if (!v[B]) break;
        b = wn(v[B], L);
      }
      return { nodes: y, data: yo([P]) };
    }
    function D(v, T, _, w) {
      var S = v.length,
        y = [],
        P = [],
        Y = [],
        b = [],
        L = w - 1,
        B = 0,
        Q = 0,
        se = 0,
        he = 0;
      for (B = 0; B < S; ++B)
        if (((Y = []), (se = B + T), se >= S && (se -= S), !P[se])) {
          b = [];
          var re = [];
          for (Q = se; Q >= 0; ) {
            (re[Q] = !0), (P[Q] = !0), (Y[Y.length] = Q), b.push(v[Q]);
            var z = _[Math.floor((Q * 4) / w)];
            if (((he = (Q * 4) & L), w < 4 + he))
              throw new Error('FAT boundary crossed: ' + Q + ' 4 ' + w);
            if (!v[z] || ((Q = wn(v[z], he)), re[Q])) break;
          }
          y[se] = { nodes: Y, data: yo([b]) };
        }
      return y;
    }
    function F(v, T, _, w, S, y, P, Y) {
      for (
        var b = 0, L = w.length ? 2 : 0, B = T[v].data, Q = 0, se = 0, he;
        Q < B.length;
        Q += 128
      ) {
        var re = B.slice(Q, Q + 128);
        ar(re, 64),
          (se = re.read_shift(2)),
          (he = _0(re, 0, se - L)),
          w.push(he);
        var z = {
            name: he,
            type: re.read_shift(1),
            color: re.read_shift(1),
            L: re.read_shift(4, 'i'),
            R: re.read_shift(4, 'i'),
            C: re.read_shift(4, 'i'),
            clsid: re.read_shift(16),
            state: re.read_shift(4, 'i'),
            start: 0,
            size: 0,
          },
          oe =
            re.read_shift(2) +
            re.read_shift(2) +
            re.read_shift(2) +
            re.read_shift(2);
        oe !== 0 && (z.ct = k(re, re.l - 8));
        var Ee =
          re.read_shift(2) +
          re.read_shift(2) +
          re.read_shift(2) +
          re.read_shift(2);
        Ee !== 0 && (z.mt = k(re, re.l - 8)),
          (z.start = re.read_shift(4, 'i')),
          (z.size = re.read_shift(4, 'i')),
          z.size < 0 &&
            z.start < 0 &&
            ((z.size = z.type = 0), (z.start = ne), (z.name = '')),
          z.type === 5
            ? ((b = z.start), S > 0 && b !== ne && (T[b].name = '!StreamData'))
            : z.size >= 4096
              ? ((z.storage = 'fat'),
                T[z.start] === void 0 &&
                  (T[z.start] = A(_, z.start, T.fat_addrs, T.ssz)),
                (T[z.start].name = z.name),
                (z.content = T[z.start].data.slice(0, z.size)))
              : ((z.storage = 'minifat'),
                z.size < 0
                  ? (z.size = 0)
                  : b !== ne &&
                    z.start !== ne &&
                    T[b] &&
                    (z.content = d(z, T[b].data, (T[Y] || {}).data))),
          z.content && ar(z.content, 0),
          (y[he] = z),
          P.push(z);
      }
    }
    function k(v, T) {
      return new Date(
        ((or(v, T + 4) / 1e7) * Math.pow(2, 32) +
          or(v, T) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function j(v, T) {
      return f(), c(l.readFileSync(v), T);
    }
    function ee(v, T) {
      var _ = T && T.type;
      switch (
        (_ || (je && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return j(v, T);
        case 'base64':
          return c(Cr(Qr(v)), T);
        case 'binary':
          return c(Cr(v), T);
      }
      return c(v, T);
    }
    function N(v, T) {
      var _ = T || {},
        w = _.root || 'Root Entry';
      if (
        (v.FullPaths || (v.FullPaths = []),
        v.FileIndex || (v.FileIndex = []),
        v.FullPaths.length !== v.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure');
      v.FullPaths.length === 0 &&
        ((v.FullPaths[0] = w + '/'), (v.FileIndex[0] = { name: w, type: 5 })),
        _.CLSID && (v.FileIndex[0].clsid = _.CLSID),
        W(v);
    }
    function W(v) {
      var T = 'Sh33tJ5';
      if (!ze.find(v, '/' + T)) {
        var _ = G(4);
        (_[0] = 55),
          (_[1] = _[3] = 50),
          (_[2] = 54),
          v.FileIndex.push({
            name: T,
            type: 2,
            content: _,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          v.FullPaths.push(v.FullPaths[0] + T),
          M(v);
      }
    }
    function M(v, T) {
      N(v);
      for (var _ = !1, w = !1, S = v.FullPaths.length - 1; S >= 0; --S) {
        var y = v.FileIndex[S];
        switch (y.type) {
          case 0:
            w ? (_ = !0) : (v.FileIndex.pop(), v.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (w = !0),
              isNaN(y.R * y.L * y.C) && (_ = !0),
              y.R > -1 && y.L > -1 && y.R == y.L && (_ = !0);
            break;
          default:
            _ = !0;
            break;
        }
      }
      if (!(!_ && !T)) {
        var P = new Date(1987, 1, 19),
          Y = 0,
          b = Object.create ? Object.create(null) : {},
          L = [];
        for (S = 0; S < v.FullPaths.length; ++S)
          (b[v.FullPaths[S]] = !0),
            v.FileIndex[S].type !== 0 &&
              L.push([v.FullPaths[S], v.FileIndex[S]]);
        for (S = 0; S < L.length; ++S) {
          var B = n(L[S][0]);
          (w = b[B]),
            w ||
              (L.push([
                B,
                {
                  name: i(B).replace('/', ''),
                  type: 1,
                  clsid: nt,
                  ct: P,
                  mt: P,
                  content: null,
                },
              ]),
              (b[B] = !0));
        }
        for (
          L.sort(function (he, re) {
            return e(he[0], re[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            S = 0;
          S < L.length;
          ++S
        )
          (v.FullPaths[S] = L[S][0]), (v.FileIndex[S] = L[S][1]);
        for (S = 0; S < L.length; ++S) {
          var Q = v.FileIndex[S],
            se = v.FullPaths[S];
          if (
            ((Q.name = i(se).replace('/', '')),
            (Q.L = Q.R = Q.C = -(Q.color = 1)),
            (Q.size = Q.content ? Q.content.length : 0),
            (Q.start = 0),
            (Q.clsid = Q.clsid || nt),
            S === 0)
          )
            (Q.C = L.length > 1 ? 1 : -1), (Q.size = 0), (Q.type = 5);
          else if (se.slice(-1) == '/') {
            for (Y = S + 1; Y < L.length && n(v.FullPaths[Y]) != se; ++Y);
            for (
              Q.C = Y >= L.length ? -1 : Y, Y = S + 1;
              Y < L.length && n(v.FullPaths[Y]) != n(se);
              ++Y
            );
            (Q.R = Y >= L.length ? -1 : Y), (Q.type = 1);
          } else
            n(v.FullPaths[S + 1] || '') == n(se) && (Q.R = S + 1), (Q.type = 2);
        }
      }
    }
    function X(v, T) {
      var _ = T || {};
      if (_.fileType == 'mad') return Te(v, _);
      switch ((M(v), _.fileType)) {
        case 'zip':
          return Vr(v, _);
      }
      var w = (function (he) {
          for (var re = 0, z = 0, oe = 0; oe < he.FileIndex.length; ++oe) {
            var Ee = he.FileIndex[oe];
            if (Ee.content) {
              var Re = Ee.content.length;
              Re > 0 &&
                (Re < 4096 ? (re += (Re + 63) >> 6) : (z += (Re + 511) >> 9));
            }
          }
          for (
            var et = (he.FullPaths.length + 3) >> 2,
              jr = (re + 7) >> 3,
              Tr = (re + 127) >> 7,
              ci = jr + z + et + Tr,
              gn = (ci + 127) >> 7,
              os = gn <= 109 ? 0 : Math.ceil((gn - 109) / 127);
            (ci + gn + os + 127) >> 7 > gn;

          )
            os = ++gn <= 109 ? 0 : Math.ceil((gn - 109) / 127);
          var Gr = [1, os, gn, Tr, et, z, re, 0];
          return (
            (he.FileIndex[0].size = re << 6),
            (Gr[7] =
              (he.FileIndex[0].start =
                Gr[0] + Gr[1] + Gr[2] + Gr[3] + Gr[4] + Gr[5]) +
              ((Gr[6] + 7) >> 3)),
            Gr
          );
        })(v),
        S = G(w[7] << 9),
        y = 0,
        P = 0;
      {
        for (y = 0; y < 8; ++y) S.write_shift(1, _e[y]);
        for (y = 0; y < 8; ++y) S.write_shift(2, 0);
        for (
          S.write_shift(2, 62),
            S.write_shift(2, 3),
            S.write_shift(2, 65534),
            S.write_shift(2, 9),
            S.write_shift(2, 6),
            y = 0;
          y < 3;
          ++y
        )
          S.write_shift(2, 0);
        for (
          S.write_shift(4, 0),
            S.write_shift(4, w[2]),
            S.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1),
            S.write_shift(4, 0),
            S.write_shift(4, 4096),
            S.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : ne),
            S.write_shift(4, w[3]),
            S.write_shift(-4, w[1] ? w[0] - 1 : ne),
            S.write_shift(4, w[1]),
            y = 0;
          y < 109;
          ++y
        )
          S.write_shift(-4, y < w[2] ? w[1] + y : -1);
      }
      if (w[1])
        for (P = 0; P < w[1]; ++P) {
          for (; y < 236 + P * 127; ++y)
            S.write_shift(-4, y < w[2] ? w[1] + y : -1);
          S.write_shift(-4, P === w[1] - 1 ? ne : P + 1);
        }
      var Y = function (he) {
        for (P += he; y < P - 1; ++y) S.write_shift(-4, y + 1);
        he && (++y, S.write_shift(-4, ne));
      };
      for (P = y = 0, P += w[1]; y < P; ++y) S.write_shift(-4, Je.DIFSECT);
      for (P += w[2]; y < P; ++y) S.write_shift(-4, Je.FATSECT);
      Y(w[3]), Y(w[4]);
      for (var b = 0, L = 0, B = v.FileIndex[0]; b < v.FileIndex.length; ++b)
        (B = v.FileIndex[b]),
          B.content &&
            ((L = B.content.length),
            !(L < 4096) && ((B.start = P), Y((L + 511) >> 9)));
      for (Y((w[6] + 7) >> 3); S.l & 511; ) S.write_shift(-4, Je.ENDOFCHAIN);
      for (P = y = 0, b = 0; b < v.FileIndex.length; ++b)
        (B = v.FileIndex[b]),
          B.content &&
            ((L = B.content.length),
            !(!L || L >= 4096) && ((B.start = P), Y((L + 63) >> 6)));
      for (; S.l & 511; ) S.write_shift(-4, Je.ENDOFCHAIN);
      for (y = 0; y < w[4] << 2; ++y) {
        var Q = v.FullPaths[y];
        if (!Q || Q.length === 0) {
          for (b = 0; b < 17; ++b) S.write_shift(4, 0);
          for (b = 0; b < 3; ++b) S.write_shift(4, -1);
          for (b = 0; b < 12; ++b) S.write_shift(4, 0);
          continue;
        }
        (B = v.FileIndex[y]), y === 0 && (B.start = B.size ? B.start - 1 : ne);
        var se = (y === 0 && _.root) || B.name;
        if (
          ((L = 2 * (se.length + 1)),
          S.write_shift(64, se, 'utf16le'),
          S.write_shift(2, L),
          S.write_shift(1, B.type),
          S.write_shift(1, B.color),
          S.write_shift(-4, B.L),
          S.write_shift(-4, B.R),
          S.write_shift(-4, B.C),
          B.clsid)
        )
          S.write_shift(16, B.clsid, 'hex');
        else for (b = 0; b < 4; ++b) S.write_shift(4, 0);
        S.write_shift(4, B.state || 0),
          S.write_shift(4, 0),
          S.write_shift(4, 0),
          S.write_shift(4, 0),
          S.write_shift(4, 0),
          S.write_shift(4, B.start),
          S.write_shift(4, B.size),
          S.write_shift(4, 0);
      }
      for (y = 1; y < v.FileIndex.length; ++y)
        if (((B = v.FileIndex[y]), B.size >= 4096))
          if (((S.l = (B.start + 1) << 9), je && Buffer.isBuffer(B.content)))
            B.content.copy(S, S.l, 0, B.size), (S.l += (B.size + 511) & -512);
          else {
            for (b = 0; b < B.size; ++b) S.write_shift(1, B.content[b]);
            for (; b & 511; ++b) S.write_shift(1, 0);
          }
      for (y = 1; y < v.FileIndex.length; ++y)
        if (((B = v.FileIndex[y]), B.size > 0 && B.size < 4096))
          if (je && Buffer.isBuffer(B.content))
            B.content.copy(S, S.l, 0, B.size), (S.l += (B.size + 63) & -64);
          else {
            for (b = 0; b < B.size; ++b) S.write_shift(1, B.content[b]);
            for (; b & 63; ++b) S.write_shift(1, 0);
          }
      if (je) S.l = S.length;
      else for (; S.l < S.length; ) S.write_shift(1, 0);
      return S;
    }
    function K(v, T) {
      var _ = v.FullPaths.map(function (b) {
          return b.toUpperCase();
        }),
        w = _.map(function (b) {
          var L = b.split('/');
          return L[L.length - (b.slice(-1) == '/' ? 2 : 1)];
        }),
        S = !1;
      T.charCodeAt(0) === 47
        ? ((S = !0), (T = _[0].slice(0, -1) + T))
        : (S = T.indexOf('/') !== -1);
      var y = T.toUpperCase(),
        P = S === !0 ? _.indexOf(y) : w.indexOf(y);
      if (P !== -1) return v.FileIndex[P];
      var Y = !y.match(ta);
      for (
        y = y.replace(Ei, ''), Y && (y = y.replace(ta, '!')), P = 0;
        P < _.length;
        ++P
      )
        if (
          (Y ? _[P].replace(ta, '!') : _[P]).replace(Ei, '') == y ||
          (Y ? w[P].replace(ta, '!') : w[P]).replace(Ei, '') == y
        )
          return v.FileIndex[P];
      return null;
    }
    var J = 64,
      ne = -2,
      ke = 'd0cf11e0a1b11ae1',
      _e = [208, 207, 17, 224, 161, 177, 26, 225],
      nt = '00000000000000000000000000000000',
      Je = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ne,
        FREESECT: -1,
        HEADER_SIGNATURE: ke,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: nt,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function gt(v, T, _) {
      f();
      var w = X(v, _);
      l.writeFileSync(T, w);
    }
    function it(v) {
      for (var T = new Array(v.length), _ = 0; _ < v.length; ++_)
        T[_] = String.fromCharCode(v[_]);
      return T.join('');
    }
    function St(v, T) {
      var _ = X(v, T);
      switch ((T && T.type) || 'buffer') {
        case 'file':
          return f(), l.writeFileSync(T.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : it(_);
        case 'base64':
          return bi(typeof _ == 'string' ? _ : it(_));
        case 'buffer':
          if (je) return Buffer.isBuffer(_) ? _ : rn(_);
        case 'array':
          return typeof _ == 'string' ? Cr(_) : _;
      }
      return _;
    }
    var xt;
    function C(v) {
      try {
        var T = v.InflateRaw,
          _ = new T();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          xt = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (w) {
        console.error('cannot use native zlib: ' + (w.message || w));
      }
    }
    function U(v, T) {
      if (!xt) return kr(v, T);
      var _ = xt.InflateRaw,
        w = new _(),
        S = w._processChunk(v.slice(v.l), w._finishFlushFlag);
      return (v.l += w.bytesRead), S;
    }
    function I(v) {
      return xt ? xt.deflateRawSync(v) : Qt(v);
    }
    var O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      q = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      xe = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function ve(v) {
      var T =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((T >> 16) | (T >> 8) | T) & 255;
    }
    for (
      var de = typeof Uint8Array < 'u',
        fe = de ? new Uint8Array(256) : [],
        Me = 0;
      Me < 256;
      ++Me
    )
      fe[Me] = ve(Me);
    function Ce(v, T) {
      var _ = fe[v & 255];
      return T <= 8
        ? _ >>> (8 - T)
        : ((_ = (_ << 8) | fe[(v >> 8) & 255]),
          T <= 16
            ? _ >>> (16 - T)
            : ((_ = (_ << 8) | fe[(v >> 16) & 255]), _ >>> (24 - T)));
    }
    function lt(v, T) {
      var _ = T & 7,
        w = T >>> 3;
      return ((v[w] | (_ <= 6 ? 0 : v[w + 1] << 8)) >>> _) & 3;
    }
    function be(v, T) {
      var _ = T & 7,
        w = T >>> 3;
      return ((v[w] | (_ <= 5 ? 0 : v[w + 1] << 8)) >>> _) & 7;
    }
    function Pt(v, T) {
      var _ = T & 7,
        w = T >>> 3;
      return ((v[w] | (_ <= 4 ? 0 : v[w + 1] << 8)) >>> _) & 15;
    }
    function Ze(v, T) {
      var _ = T & 7,
        w = T >>> 3;
      return ((v[w] | (_ <= 3 ? 0 : v[w + 1] << 8)) >>> _) & 31;
    }
    function pe(v, T) {
      var _ = T & 7,
        w = T >>> 3;
      return ((v[w] | (_ <= 1 ? 0 : v[w + 1] << 8)) >>> _) & 127;
    }
    function yt(v, T, _) {
      var w = T & 7,
        S = T >>> 3,
        y = (1 << _) - 1,
        P = v[S] >>> w;
      return (
        _ < 8 - w ||
          ((P |= v[S + 1] << (8 - w)), _ < 16 - w) ||
          ((P |= v[S + 2] << (16 - w)), _ < 24 - w) ||
          (P |= v[S + 3] << (24 - w)),
        P & y
      );
    }
    function At(v, T, _) {
      var w = T & 7,
        S = T >>> 3;
      return (
        w <= 5
          ? (v[S] |= (_ & 7) << w)
          : ((v[S] |= (_ << w) & 255), (v[S + 1] = (_ & 7) >> (8 - w))),
        T + 3
      );
    }
    function wr(v, T, _) {
      var w = T & 7,
        S = T >>> 3;
      return (_ = (_ & 1) << w), (v[S] |= _), T + 1;
    }
    function Nr(v, T, _) {
      var w = T & 7,
        S = T >>> 3;
      return (_ <<= w), (v[S] |= _ & 255), (_ >>>= 8), (v[S + 1] = _), T + 8;
    }
    function mn(v, T, _) {
      var w = T & 7,
        S = T >>> 3;
      return (
        (_ <<= w),
        (v[S] |= _ & 255),
        (_ >>>= 8),
        (v[S + 1] = _ & 255),
        (v[S + 2] = _ >>> 8),
        T + 16
      );
    }
    function Hr(v, T) {
      var _ = v.length,
        w = 2 * _ > T ? 2 * _ : T + 5,
        S = 0;
      if (_ >= T) return v;
      if (je) {
        var y = fo(w);
        if (v.copy) v.copy(y);
        else for (; S < v.length; ++S) y[S] = v[S];
        return y;
      } else if (de) {
        var P = new Uint8Array(w);
        if (P.set) P.set(v);
        else for (; S < _; ++S) P[S] = v[S];
        return P;
      }
      return (v.length = w), v;
    }
    function le(v) {
      for (var T = new Array(v), _ = 0; _ < v; ++_) T[_] = 0;
      return T;
    }
    function Ne(v, T, _) {
      var w = 1,
        S = 0,
        y = 0,
        P = 0,
        Y = 0,
        b = v.length,
        L = de ? new Uint16Array(32) : le(32);
      for (y = 0; y < 32; ++y) L[y] = 0;
      for (y = b; y < _; ++y) v[y] = 0;
      b = v.length;
      var B = de ? new Uint16Array(b) : le(b);
      for (y = 0; y < b; ++y) L[(S = v[y])]++, w < S && (w = S), (B[y] = 0);
      for (L[0] = 0, y = 1; y <= w; ++y) L[y + 16] = Y = (Y + L[y - 1]) << 1;
      for (y = 0; y < b; ++y) (Y = v[y]), Y != 0 && (B[y] = L[Y + 16]++);
      var Q = 0;
      for (y = 0; y < b; ++y)
        if (((Q = v[y]), Q != 0))
          for (
            Y = Ce(B[y], w) >> (w - Q), P = (1 << (w + 4 - Q)) - 1;
            P >= 0;
            --P
          )
            T[Y | (P << Q)] = (Q & 15) | (y << 4);
      return w;
    }
    var ye = de ? new Uint16Array(512) : le(512),
      Pe = de ? new Uint16Array(32) : le(32);
    if (!de) {
      for (var Oe = 0; Oe < 512; ++Oe) ye[Oe] = 0;
      for (Oe = 0; Oe < 32; ++Oe) Pe[Oe] = 0;
    }
    (function () {
      for (var v = [], T = 0; T < 32; T++) v.push(5);
      Ne(v, Pe, 32);
      var _ = [];
      for (T = 0; T <= 143; T++) _.push(8);
      for (; T <= 255; T++) _.push(9);
      for (; T <= 279; T++) _.push(7);
      for (; T <= 287; T++) _.push(8);
      Ne(_, ye, 288);
    })();
    var vt = (function () {
      for (
        var T = de ? new Uint8Array(32768) : [], _ = 0, w = 0;
        _ < xe.length - 1;
        ++_
      )
        for (; w < xe[_ + 1]; ++w) T[w] = _;
      for (; w < 32768; ++w) T[w] = 29;
      var S = de ? new Uint8Array(259) : [];
      for (_ = 0, w = 0; _ < q.length - 1; ++_)
        for (; w < q[_ + 1]; ++w) S[w] = _;
      function y(Y, b) {
        for (var L = 0; L < Y.length; ) {
          var B = Math.min(65535, Y.length - L),
            Q = L + B == Y.length;
          for (
            b.write_shift(1, +Q),
              b.write_shift(2, B),
              b.write_shift(2, ~B & 65535);
            B-- > 0;

          )
            b[b.l++] = Y[L++];
        }
        return b.l;
      }
      function P(Y, b) {
        for (
          var L = 0, B = 0, Q = de ? new Uint16Array(32768) : [];
          B < Y.length;

        ) {
          var se = Math.min(65535, Y.length - B);
          if (se < 10) {
            for (
              L = At(b, L, +(B + se == Y.length)),
                L & 7 && (L += 8 - (L & 7)),
                b.l = (L / 8) | 0,
                b.write_shift(2, se),
                b.write_shift(2, ~se & 65535);
              se-- > 0;

            )
              b[b.l++] = Y[B++];
            L = b.l * 8;
            continue;
          }
          L = At(b, L, +(B + se == Y.length) + 2);
          for (var he = 0; se-- > 0; ) {
            var re = Y[B];
            he = ((he << 5) ^ re) & 32767;
            var z = -1,
              oe = 0;
            if (
              (z = Q[he]) &&
              ((z |= B & -32768), z > B && (z -= 32768), z < B)
            )
              for (; Y[z + oe] == Y[B + oe] && oe < 250; ) ++oe;
            if (oe > 2) {
              (re = S[oe]),
                re <= 22
                  ? (L = Nr(b, L, fe[re + 1] >> 1) - 1)
                  : (Nr(b, L, 3),
                    (L += 5),
                    Nr(b, L, fe[re - 23] >> 5),
                    (L += 3));
              var Ee = re < 8 ? 0 : (re - 4) >> 2;
              Ee > 0 && (mn(b, L, oe - q[re]), (L += Ee)),
                (re = T[B - z]),
                (L = Nr(b, L, fe[re] >> 3)),
                (L -= 3);
              var Re = re < 4 ? 0 : (re - 2) >> 1;
              Re > 0 && (mn(b, L, B - z - xe[re]), (L += Re));
              for (var et = 0; et < oe; ++et)
                (Q[he] = B & 32767), (he = ((he << 5) ^ Y[B]) & 32767), ++B;
              se -= oe - 1;
            } else
              re <= 143 ? (re = re + 48) : (L = wr(b, L, 1)),
                (L = Nr(b, L, fe[re])),
                (Q[he] = B & 32767),
                ++B;
          }
          L = Nr(b, L, 0) - 1;
        }
        return (b.l = ((L + 7) / 8) | 0), b.l;
      }
      return function (b, L) {
        return b.length < 8 ? y(b, L) : P(b, L);
      };
    })();
    function Qt(v) {
      var T = G(50 + Math.floor(v.length * 1.1)),
        _ = vt(v, T);
      return T.slice(0, _);
    }
    var Rr = de ? new Uint16Array(32768) : le(32768),
      Vt = de ? new Uint16Array(32768) : le(32768),
      Er = de ? new Uint16Array(128) : le(128),
      Wr = 1,
      Le = 1;
    function jt(v, T) {
      var _ = Ze(v, T) + 257;
      T += 5;
      var w = Ze(v, T) + 1;
      T += 5;
      var S = Pt(v, T) + 4;
      T += 4;
      for (
        var y = 0,
          P = de ? new Uint8Array(19) : le(19),
          Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          b = 1,
          L = de ? new Uint8Array(8) : le(8),
          B = de ? new Uint8Array(8) : le(8),
          Q = P.length,
          se = 0;
        se < S;
        ++se
      )
        (P[O[se]] = y = be(v, T)), b < y && (b = y), L[y]++, (T += 3);
      var he = 0;
      for (L[0] = 0, se = 1; se <= b; ++se) B[se] = he = (he + L[se - 1]) << 1;
      for (se = 0; se < Q; ++se) (he = P[se]) != 0 && (Y[se] = B[he]++);
      var re = 0;
      for (se = 0; se < Q; ++se)
        if (((re = P[se]), re != 0)) {
          he = fe[Y[se]] >> (8 - re);
          for (var z = (1 << (7 - re)) - 1; z >= 0; --z)
            Er[he | (z << re)] = (re & 7) | (se << 3);
        }
      var oe = [];
      for (b = 1; oe.length < _ + w; )
        switch (((he = Er[pe(v, T)]), (T += he & 7), (he >>>= 3))) {
          case 16:
            for (y = 3 + lt(v, T), T += 2, he = oe[oe.length - 1]; y-- > 0; )
              oe.push(he);
            break;
          case 17:
            for (y = 3 + be(v, T), T += 3; y-- > 0; ) oe.push(0);
            break;
          case 18:
            for (y = 11 + pe(v, T), T += 7; y-- > 0; ) oe.push(0);
            break;
          default:
            oe.push(he), b < he && (b = he);
            break;
        }
      var Ee = oe.slice(0, _),
        Re = oe.slice(_);
      for (se = _; se < 286; ++se) Ee[se] = 0;
      for (se = w; se < 30; ++se) Re[se] = 0;
      return (Wr = Ne(Ee, Rr, 286)), (Le = Ne(Re, Vt, 30)), T;
    }
    function Gt(v, T) {
      if (v[0] == 3 && !(v[1] & 3)) return [Dn(T), 2];
      for (
        var _ = 0,
          w = 0,
          S = fo(T || 1 << 18),
          y = 0,
          P = S.length >>> 0,
          Y = 0,
          b = 0;
        (w & 1) == 0;

      ) {
        if (((w = be(v, _)), (_ += 3), w >>> 1))
          w >> 1 == 1
            ? ((Y = 9), (b = 5))
            : ((_ = jt(v, _)), (Y = Wr), (b = Le));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var L = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), L > 0))
            for (
              !T && P < y + L && ((S = Hr(S, y + L)), (P = S.length));
              L-- > 0;

            )
              (S[y++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !T && P < y + 32767 && ((S = Hr(S, y + 32767)), (P = S.length));
          var B = yt(v, _, Y),
            Q = w >>> 1 == 1 ? ye[B] : Rr[B];
          if (((_ += Q & 15), (Q >>>= 4), ((Q >>> 8) & 255) === 0)) S[y++] = Q;
          else {
            if (Q == 256) break;
            Q -= 257;
            var se = Q < 8 ? 0 : (Q - 4) >> 2;
            se > 5 && (se = 0);
            var he = y + q[Q];
            se > 0 && ((he += yt(v, _, se)), (_ += se)),
              (B = yt(v, _, b)),
              (Q = w >>> 1 == 1 ? Pe[B] : Vt[B]),
              (_ += Q & 15),
              (Q >>>= 4);
            var re = Q < 4 ? 0 : (Q - 2) >> 1,
              z = xe[Q];
            for (
              re > 0 && ((z += yt(v, _, re)), (_ += re)),
                !T && P < he && ((S = Hr(S, he + 100)), (P = S.length));
              y < he;

            )
              (S[y] = S[y - z]), ++y;
          }
        }
      }
      return T ? [S, (_ + 7) >>> 3] : [S.slice(0, y), (_ + 7) >>> 3];
    }
    function kr(v, T) {
      var _ = v.slice(v.l || 0),
        w = Gt(_, T);
      return (v.l += w[1]), w[0];
    }
    function ur(v, T) {
      if (v) typeof console < 'u' && console.error(T);
      else throw new Error(T);
    }
    function hr(v, T) {
      var _ = v;
      ar(_, 0);
      var w = [],
        S = [],
        y = { FileIndex: w, FullPaths: S };
      N(y, { root: T.root });
      for (
        var P = _.length - 4;
        (_[P] != 80 || _[P + 1] != 75 || _[P + 2] != 5 || _[P + 3] != 6) &&
        P >= 0;

      )
        --P;
      (_.l = P + 4), (_.l += 4);
      var Y = _.read_shift(2);
      _.l += 6;
      var b = _.read_shift(4);
      for (_.l = b, P = 0; P < Y; ++P) {
        _.l += 20;
        var L = _.read_shift(4),
          B = _.read_shift(4),
          Q = _.read_shift(2),
          se = _.read_shift(2),
          he = _.read_shift(2);
        _.l += 8;
        var re = _.read_shift(4),
          z = o(_.slice(_.l + Q, _.l + Q + se));
        _.l += Q + se + he;
        var oe = _.l;
        (_.l = re + 4), Ge(_, L, B, y, z), (_.l = oe);
      }
      return y;
    }
    function Ge(v, T, _, w, S) {
      v.l += 2;
      var y = v.read_shift(2),
        P = v.read_shift(2),
        Y = s(v);
      if (y & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var b = v.read_shift(4),
          L = v.read_shift(4),
          B = v.read_shift(4),
          Q = v.read_shift(2),
          se = v.read_shift(2),
          he = '',
          re = 0;
        re < Q;
        ++re
      )
        he += String.fromCharCode(v[v.l++]);
      if (se) {
        var z = o(v.slice(v.l, v.l + se));
        (z[21589] || {}).mt && (Y = z[21589].mt),
          ((S || {})[21589] || {}).mt && (Y = S[21589].mt);
      }
      v.l += se;
      var oe = v.slice(v.l, v.l + L);
      switch (P) {
        case 8:
          oe = U(v, B);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + P);
      }
      var Ee = !1;
      y & 8 &&
        ((b = v.read_shift(4)),
        b == 134695760 && ((b = v.read_shift(4)), (Ee = !0)),
        (L = v.read_shift(4)),
        (B = v.read_shift(4))),
        L != T && ur(Ee, 'Bad compressed size: ' + T + ' != ' + L),
        B != _ && ur(Ee, 'Bad uncompressed size: ' + _ + ' != ' + B),
        Se(w, he, oe, { unsafe: !0, mt: Y });
    }
    function Vr(v, T) {
      var _ = T || {},
        w = [],
        S = [],
        y = G(1),
        P = _.compression ? 8 : 0,
        Y = 0,
        b = 0,
        L = 0,
        B = 0,
        Q = 0,
        se = v.FullPaths[0],
        he = se,
        re = v.FileIndex[0],
        z = [],
        oe = 0;
      for (b = 1; b < v.FullPaths.length; ++b)
        if (
          ((he = v.FullPaths[b].slice(se.length)),
          (re = v.FileIndex[b]),
          !(!re.size || !re.content || he == 'Sh33tJ5'))
        ) {
          var Ee = B,
            Re = G(he.length);
          for (L = 0; L < he.length; ++L)
            Re.write_shift(1, he.charCodeAt(L) & 127);
          (Re = Re.slice(0, Re.l)), (z[Q] = ed.buf(re.content, 0));
          var et = re.content;
          P == 8 && (et = I(et)),
            (y = G(30)),
            y.write_shift(4, 67324752),
            y.write_shift(2, 20),
            y.write_shift(2, Y),
            y.write_shift(2, P),
            re.mt ? a(y, re.mt) : y.write_shift(4, 0),
            y.write_shift(-4, z[Q]),
            y.write_shift(4, et.length),
            y.write_shift(4, re.content.length),
            y.write_shift(2, Re.length),
            y.write_shift(2, 0),
            (B += y.length),
            w.push(y),
            (B += Re.length),
            w.push(Re),
            (B += et.length),
            w.push(et),
            (y = G(46)),
            y.write_shift(4, 33639248),
            y.write_shift(2, 0),
            y.write_shift(2, 20),
            y.write_shift(2, Y),
            y.write_shift(2, P),
            y.write_shift(4, 0),
            y.write_shift(-4, z[Q]),
            y.write_shift(4, et.length),
            y.write_shift(4, re.content.length),
            y.write_shift(2, Re.length),
            y.write_shift(2, 0),
            y.write_shift(2, 0),
            y.write_shift(2, 0),
            y.write_shift(2, 0),
            y.write_shift(4, 0),
            y.write_shift(4, Ee),
            (oe += y.l),
            S.push(y),
            (oe += Re.length),
            S.push(Re),
            ++Q;
        }
      return (
        (y = G(22)),
        y.write_shift(4, 101010256),
        y.write_shift(2, 0),
        y.write_shift(2, 0),
        y.write_shift(2, Q),
        y.write_shift(2, Q),
        y.write_shift(4, oe),
        y.write_shift(4, B),
        y.write_shift(2, 0),
        Dt([Dt(w), Dt(S), y])
      );
    }
    var Qe = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function g(v, T) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        w = _.match(/\.([^\.]+)$/);
      return (w && Qe[w[1]]) ||
        (T && ((w = (_ = T).match(/[\.\\]([^\.\\])+$/)), w && Qe[w[1]]))
        ? Qe[w[1]]
        : 'application/octet-stream';
    }
    function E(v) {
      for (var T = bi(v), _ = [], w = 0; w < T.length; w += 76)
        _.push(T.slice(w, w + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function R(v) {
      var T = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (L) {
          var B = L.charCodeAt(0).toString(16).toUpperCase();
          return '=' + (B.length == 1 ? '0' + B : B);
        },
      );
      (T = T.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
        T.charAt(0) ==
          `
` && (T = '=0D' + T.slice(1)),
        (T = T.replace(/\r(?!\n)/gm, '=0D')
          .replace(
            /\n\n/gm,
            `
=0A`,
          )
          .replace(/([^\r\n])\n/gm, '$1=0A'));
      for (
        var _ = [],
          w = T.split(`\r
`),
          S = 0;
        S < w.length;
        ++S
      ) {
        var y = w[S];
        if (y.length == 0) {
          _.push('');
          continue;
        }
        for (var P = 0; P < y.length; ) {
          var Y = 76,
            b = y.slice(P, P + Y);
          b.charAt(Y - 1) == '='
            ? Y--
            : b.charAt(Y - 2) == '='
              ? (Y -= 2)
              : b.charAt(Y - 3) == '=' && (Y -= 3),
            (b = y.slice(P, P + Y)),
            (P += Y),
            P < y.length && (b += '='),
            _.push(b);
        }
      }
      return _.join(`\r
`);
    }
    function H(v) {
      for (var T = [], _ = 0; _ < v.length; ++_) {
        for (var w = v[_]; _ <= v.length && w.charAt(w.length - 1) == '='; )
          w = w.slice(0, w.length - 1) + v[++_];
        T.push(w);
      }
      for (var S = 0; S < T.length; ++S)
        T[S] = T[S].replace(/[=][0-9A-Fa-f]{2}/g, function (y) {
          return String.fromCharCode(parseInt(y.slice(1), 16));
        });
      return Cr(
        T.join(`\r
`),
      );
    }
    function te(v, T, _) {
      for (var w = '', S = '', y = '', P, Y = 0; Y < 10; ++Y) {
        var b = T[Y];
        if (!b || b.match(/^\s*$/)) break;
        var L = b.match(/^(.*?):\s*([^\s].*)$/);
        if (L)
          switch (L[1].toLowerCase()) {
            case 'content-location':
              w = L[2].trim();
              break;
            case 'content-type':
              y = L[2].trim();
              break;
            case 'content-transfer-encoding':
              S = L[2].trim();
              break;
          }
      }
      switch ((++Y, S.toLowerCase())) {
        case 'base64':
          P = Cr(Qr(T.slice(Y).join('')));
          break;
        case 'quoted-printable':
          P = H(T.slice(Y));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + S);
      }
      var B = Se(v, w.slice(_.length), P, { unsafe: !0 });
      y && (B.ctype = y);
    }
    function ce(v, T) {
      if (it(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (T && T.root) || '',
        w = (je && Buffer.isBuffer(v) ? v.toString('binary') : it(v)).split(`\r
`),
        S = 0,
        y = '';
      for (S = 0; S < w.length; ++S)
        if (
          ((y = w[S]),
          !!/^Content-Location:/i.test(y) &&
            ((y = y.slice(y.indexOf('file'))),
            _ || (_ = y.slice(0, y.lastIndexOf('/') + 1)),
            y.slice(0, _.length) != _))
        )
          for (
            ;
            _.length > 0 &&
            ((_ = _.slice(0, _.length - 1)),
            (_ = _.slice(0, _.lastIndexOf('/') + 1)),
            y.slice(0, _.length) != _);

          );
      var P = (w[1] || '').match(/boundary="(.*?)"/);
      if (!P) throw new Error('MAD cannot find boundary');
      var Y = '--' + (P[1] || ''),
        b = [],
        L = [],
        B = { FileIndex: b, FullPaths: L };
      N(B);
      var Q,
        se = 0;
      for (S = 0; S < w.length; ++S) {
        var he = w[S];
        (he !== Y && he !== Y + '--') ||
          (se++ && te(B, w.slice(Q, S), _), (Q = S));
      }
      return B;
    }
    function Te(v, T) {
      var _ = T || {},
        w = _.boundary || 'SheetJS';
      w = '------=' + w;
      for (
        var S = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/related; boundary="' + w.slice(2) + '"',
            '',
            '',
            '',
          ],
          y = v.FullPaths[0],
          P = y,
          Y = v.FileIndex[0],
          b = 1;
        b < v.FullPaths.length;
        ++b
      )
        if (
          ((P = v.FullPaths[b].slice(y.length)),
          (Y = v.FileIndex[b]),
          !(!Y.size || !Y.content || P == 'Sh33tJ5'))
        ) {
          P = P.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (oe) {
              return '_x' + oe.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (oe) {
            return '_u' + oe.charCodeAt(0).toString(16) + '_';
          });
          for (
            var L = Y.content,
              B = je && Buffer.isBuffer(L) ? L.toString('binary') : it(L),
              Q = 0,
              se = Math.min(1024, B.length),
              he = 0,
              re = 0;
            re <= se;
            ++re
          )
            (he = B.charCodeAt(re)) >= 32 && he < 128 && ++Q;
          var z = Q >= (se * 4) / 5;
          S.push(w),
            S.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + P,
            ),
            S.push(
              'Content-Transfer-Encoding: ' +
                (z ? 'quoted-printable' : 'base64'),
            ),
            S.push('Content-Type: ' + g(Y, P)),
            S.push(''),
            S.push(z ? R(B) : E(B));
        }
      return (
        S.push(
          w +
            `--\r
`,
        ),
        S.join(`\r
`)
      );
    }
    function ge(v) {
      var T = {};
      return N(T, v), T;
    }
    function Se(v, T, _, w) {
      var S = w && w.unsafe;
      S || N(v);
      var y = !S && ze.find(v, T);
      if (!y) {
        var P = v.FullPaths[0];
        T.slice(0, P.length) == P
          ? (P = T)
          : (P.slice(-1) != '/' && (P += '/'),
            (P = (P + T).replace('//', '/'))),
          (y = { name: i(T), type: 2 }),
          v.FileIndex.push(y),
          v.FullPaths.push(P),
          S || ze.utils.cfb_gc(v);
      }
      return (
        (y.content = _),
        (y.size = _ ? _.length : 0),
        w &&
          (w.CLSID && (y.clsid = w.CLSID),
          w.mt && (y.mt = w.mt),
          w.ct && (y.ct = w.ct)),
        y
      );
    }
    function me(v, T) {
      N(v);
      var _ = ze.find(v, T);
      if (_) {
        for (var w = 0; w < v.FileIndex.length; ++w)
          if (v.FileIndex[w] == _)
            return v.FileIndex.splice(w, 1), v.FullPaths.splice(w, 1), !0;
      }
      return !1;
    }
    function we(v, T, _) {
      N(v);
      var w = ze.find(v, T);
      if (w) {
        for (var S = 0; S < v.FileIndex.length; ++S)
          if (v.FileIndex[S] == w)
            return (v.FileIndex[S].name = i(_)), (v.FullPaths[S] = _), !0;
      }
      return !1;
    }
    function Be(v) {
      M(v, !0);
    }
    return (
      (r.find = K),
      (r.read = ee),
      (r.parse = c),
      (r.write = St),
      (r.writeFile = gt),
      (r.utils = {
        cfb_new: ge,
        cfb_add: Se,
        cfb_del: me,
        cfb_mov: we,
        cfb_gc: Be,
        ReadShift: Si,
        CheckField: kl,
        prep_blob: ar,
        bconcat: Dt,
        use_zlib: C,
        _deflateRaw: Qt,
        _inflateRaw: kr,
        consts: Je,
      }),
      r
    );
  })();
function td(t) {
  return typeof t == 'string' ? Qa(t) : Array.isArray(t) ? F1(t) : t;
}
function $i(t, r, e) {
  if (typeof Deno < 'u') {
    if (e && typeof r == 'string')
      switch (e) {
        case 'utf8':
          r = new TextEncoder(e).encode(r);
          break;
        case 'binary':
          r = Qa(r);
          break;
        default:
          throw new Error('Unsupported encoding ' + e);
      }
    return Deno.writeFileSync(t, r);
  }
  var n = e == 'utf8' ? Pi(r) : r;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, t);
  if (typeof Blob < 'u') {
    var i = new Blob([td(n)], { type: 'application/octet-stream' });
    if (typeof navigator < 'u' && navigator.msSaveBlob)
      return navigator.msSaveBlob(i, t);
    if (typeof saveAs < 'u') return saveAs(i, t);
    if (
      typeof URL < 'u' &&
      typeof document < 'u' &&
      document.createElement &&
      URL.createObjectURL
    ) {
      var a = URL.createObjectURL(i);
      if (
        typeof chrome == 'object' &&
        typeof (chrome.downloads || {}).download == 'function'
      )
        return (
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(a);
            }, 6e4),
          chrome.downloads.download({ url: a, filename: t, saveAs: !0 })
        );
      var s = document.createElement('a');
      if (s.download != null)
        return (
          (s.download = t),
          (s.href = a),
          document.body.appendChild(s),
          s.click(),
          document.body.removeChild(s),
          URL.revokeObjectURL &&
            typeof setTimeout < 'u' &&
            setTimeout(function () {
              URL.revokeObjectURL(a);
            }, 6e4),
          a
        );
    }
  }
  if (typeof $ < 'u' && typeof File < 'u' && typeof Folder < 'u')
    try {
      var o = File(t);
      return (
        o.open('w'),
        (o.encoding = 'binary'),
        Array.isArray(r) && (r = Yi(r)),
        o.write(r),
        o.close(),
        r
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + t);
}
function Rt(t) {
  for (var r = Object.keys(t), e = [], n = 0; n < r.length; ++n)
    Object.prototype.hasOwnProperty.call(t, r[n]) && e.push(r[n]);
  return e;
}
function mo(t, r) {
  for (var e = [], n = Rt(t), i = 0; i !== n.length; ++i)
    e[t[n[i]][r]] == null && (e[t[n[i]][r]] = n[i]);
  return e;
}
function x0(t) {
  for (var r = [], e = Rt(t), n = 0; n !== e.length; ++n) r[t[e[n]]] = e[n];
  return r;
}
function rs(t) {
  for (var r = [], e = Rt(t), n = 0; n !== e.length; ++n)
    r[t[e[n]]] = parseInt(e[n], 10);
  return r;
}
function rd(t) {
  for (var r = [], e = Rt(t), n = 0; n !== e.length; ++n)
    r[t[e[n]]] == null && (r[t[e[n]]] = []), r[t[e[n]]].push(e[n]);
  return r;
}
var Na = new Date(1899, 11, 30, 0, 0, 0);
function Jt(t, r) {
  var e = t.getTime(),
    n = Na.getTime() + (t.getTimezoneOffset() - Na.getTimezoneOffset()) * 6e4;
  return (e - n) / (24 * 60 * 60 * 1e3);
}
var xl = new Date(),
  nd = Na.getTime() + (xl.getTimezoneOffset() - Na.getTimezoneOffset()) * 6e4,
  go = xl.getTimezoneOffset();
function vl(t) {
  var r = new Date();
  return (
    r.setTime(t * 24 * 60 * 60 * 1e3 + nd),
    r.getTimezoneOffset() !== go &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - go) * 6e4),
    r
  );
}
var _o = new Date('2017-02-19T19:06:09.000Z'),
  ml = isNaN(_o.getFullYear()) ? new Date('2/19/17') : _o,
  id = ml.getFullYear() == 2017;
function Wt(t, r) {
  var e = new Date(t);
  if (id)
    return (
      r > 0
        ? e.setTime(e.getTime() + e.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && e.setTime(e.getTime() - e.getTimezoneOffset() * 60 * 1e3),
      e
    );
  if (t instanceof Date) return t;
  if (ml.getFullYear() == 1917 && !isNaN(e.getFullYear())) {
    var n = e.getFullYear();
    return t.indexOf('' + n) > -1 || e.setFullYear(e.getFullYear() + 100), e;
  }
  var i = t.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    a = new Date(+i[0], +i[1] - 1, +i[2], +i[3] || 0, +i[4] || 0, +i[5] || 0);
  return (
    t.indexOf('Z') > -1 &&
      (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)),
    a
  );
}
function ns(t, r) {
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
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (a) {
            return e[a] || a;
          })
      );
    } catch {}
  for (var n = [], i = 0; i != t.length; ++i) n.push(String.fromCharCode(t[i]));
  return n.join('');
}
function Zt(t) {
  if (typeof JSON < 'u' && !Array.isArray(t))
    return JSON.parse(JSON.stringify(t));
  if (typeof t != 'object' || t == null) return t;
  if (t instanceof Date) return new Date(t.getTime());
  var r = {};
  for (var e in t)
    Object.prototype.hasOwnProperty.call(t, e) && (r[e] = Zt(t[e]));
  return r;
}
function st(t, r) {
  for (var e = ''; e.length < r; ) e += t;
  return e;
}
function qr(t) {
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
    ((n = n.replace(/[(](.*)[)]/, function (i, a) {
      return (e = -e), a;
    })),
    !isNaN((r = Number(n))))
    ? r / e
    : r;
}
var ad = [
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
function Mi(t) {
  var r = new Date(t),
    e = new Date(NaN),
    n = r.getYear(),
    i = r.getMonth(),
    a = r.getDate();
  if (isNaN(a)) return e;
  var s = t.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
      s.length > 3 && ad.indexOf(s) == -1)
    )
      return e;
  } else if (s.match(/[a-z]/)) return e;
  return n < 0 || n > 8099
    ? e
    : (i > 0 || a > 1) && n != 101
      ? r
      : t.match(/[^-0-9:,\/\\]/)
        ? e
        : r;
}
function De(t, r, e) {
  if (t.FullPaths) {
    if (typeof e == 'string') {
      var n;
      return je ? (n = rn(e)) : (n = D1(e)), ze.utils.cfb_add(t, r, n);
    }
    ze.utils.cfb_add(t, r, e);
  } else t.file(r, e);
}
function v0() {
  return ze.utils.cfb_new();
}
var pt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  sd = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  m0 = x0(sd),
  g0 = /[&<>'"]/g,
  od = /[\u0000-\u0008\u000b-\u001f]/g;
function Xe(t) {
  var r = t + '';
  return r
    .replace(g0, function (e) {
      return m0[e];
    })
    .replace(od, function (e) {
      return '_x' + ('000' + e.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function wo(t) {
  return Xe(t).replace(/ /g, '_x0020_');
}
var gl = /[\u0000-\u001f]/g;
function fd(t) {
  var r = t + '';
  return r
    .replace(g0, function (e) {
      return m0[e];
    })
    .replace(/\n/g, '<br/>')
    .replace(gl, function (e) {
      return '&#x' + ('000' + e.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function ld(t) {
  var r = t + '';
  return r
    .replace(g0, function (e) {
      return m0[e];
    })
    .replace(gl, function (e) {
      return '&#x' + e.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function cd(t) {
  return t.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function ud(t) {
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
function xs(t) {
  for (var r = '', e = 0, n = 0, i = 0, a = 0, s = 0, o = 0; e < t.length; ) {
    if (((n = t.charCodeAt(e++)), n < 128)) {
      r += String.fromCharCode(n);
      continue;
    }
    if (((i = t.charCodeAt(e++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= i & 63), (r += String.fromCharCode(s));
      continue;
    }
    if (((a = t.charCodeAt(e++)), n < 240)) {
      r += String.fromCharCode(((n & 15) << 12) | ((i & 63) << 6) | (a & 63));
      continue;
    }
    (s = t.charCodeAt(e++)),
      (o =
        (((n & 7) << 18) | ((i & 63) << 12) | ((a & 63) << 6) | (s & 63)) -
        65536),
      (r += String.fromCharCode(55296 + ((o >>> 10) & 1023))),
      (r += String.fromCharCode(56320 + (o & 1023)));
  }
  return r;
}
function Eo(t) {
  var r = Dn(2 * t.length),
    e,
    n,
    i = 1,
    a = 0,
    s = 0,
    o;
  for (n = 0; n < t.length; n += i)
    (i = 1),
      (o = t.charCodeAt(n)) < 128
        ? (e = o)
        : o < 224
          ? ((e = (o & 31) * 64 + (t.charCodeAt(n + 1) & 63)), (i = 2))
          : o < 240
            ? ((e =
                (o & 15) * 4096 +
                (t.charCodeAt(n + 1) & 63) * 64 +
                (t.charCodeAt(n + 2) & 63)),
              (i = 3))
            : ((i = 4),
              (e =
                (o & 7) * 262144 +
                (t.charCodeAt(n + 1) & 63) * 4096 +
                (t.charCodeAt(n + 2) & 63) * 64 +
                (t.charCodeAt(n + 3) & 63)),
              (e -= 65536),
              (s = 55296 + ((e >>> 10) & 1023)),
              (e = 56320 + (e & 1023))),
      s !== 0 && ((r[a++] = s & 255), (r[a++] = s >>> 8), (s = 0)),
      (r[a++] = e % 256),
      (r[a++] = e >>> 8);
  return r.slice(0, a).toString('ucs2');
}
function To(t) {
  return rn(t, 'binary').toString('utf8');
}
var na = 'foo bar bazâð£',
  Ti = (je && ((To(na) == xs(na) && To) || (Eo(na) == xs(na) && Eo))) || xs,
  Pi = je
    ? function (t) {
        return rn(t, 'utf8').toString('binary');
      }
    : function (t) {
        for (var r = [], e = 0, n = 0, i = 0; e < t.length; )
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
                (i = t.charCodeAt(e++) - 56320 + (n << 10)),
                r.push(String.fromCharCode(240 + ((i >> 18) & 7))),
                r.push(String.fromCharCode(144 + ((i >> 12) & 63))),
                r.push(String.fromCharCode(128 + ((i >> 6) & 63))),
                r.push(String.fromCharCode(128 + (i & 63)));
              break;
            default:
              r.push(String.fromCharCode(224 + (n >> 12))),
                r.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                r.push(String.fromCharCode(128 + (n & 63)));
          }
        return r.join('');
      },
  hd = (function () {
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
          i = 0;
        i < t.length;
        ++i
      )
        n = n.replace(t[i][0], t[i][1]);
      return n;
    };
  })(),
  _l = /(^\s|\s$|\n)/;
function Ot(t, r) {
  return (
    '<' +
    t +
    (r.match(_l) ? ' xml:space="preserve"' : '') +
    '>' +
    r +
    '</' +
    t +
    '>'
  );
}
function Li(t) {
  return Rt(t)
    .map(function (r) {
      return ' ' + r + '="' + t[r] + '"';
    })
    .join('');
}
function ie(t, r, e) {
  return (
    '<' +
    t +
    (e != null ? Li(e) : '') +
    (r != null
      ? (r.match(_l) ? ' xml:space="preserve"' : '') + '>' + r + '</' + t
      : '/') +
    '>'
  );
}
function Vs(t, r) {
  try {
    return t.toISOString().replace(/\.\d*/, '');
  } catch (e) {
    if (r) throw e;
  }
  return '';
}
function dd(t, r) {
  switch (typeof t) {
    case 'string':
      var e = ie('vt:lpwstr', Xe(t));
      return (e = e.replace(/&quot;/g, '_x0022_')), e;
    case 'number':
      return ie((t | 0) == t ? 'vt:i4' : 'vt:r8', Xe(String(t)));
    case 'boolean':
      return ie('vt:bool', t ? 'true' : 'false');
  }
  if (t instanceof Date) return ie('vt:filetime', Vs(t));
  throw new Error('Unable to serialize ' + t);
}
var wt = {
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
  si = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  sr = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function pd(t, r) {
  for (
    var e = 1 - 2 * (t[r + 7] >>> 7),
      n = ((t[r + 7] & 127) << 4) + ((t[r + 6] >>> 4) & 15),
      i = t[r + 6] & 15,
      a = 5;
    a >= 0;
    --a
  )
    i = i * 256 + t[r + a];
  return n == 2047
    ? i == 0
      ? e * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (i += Math.pow(2, 52))),
      e * Math.pow(2, n - 52) * i);
}
function xd(t, r, e) {
  var n = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7,
    i = 0,
    a = 0,
    s = n ? -r : r;
  isFinite(s)
    ? s == 0
      ? (i = a = 0)
      : ((i = Math.floor(Math.log(s) / Math.LN2)),
        (a = s * Math.pow(2, 52 - i)),
        i <= -1023 && (!isFinite(a) || a < Math.pow(2, 52))
          ? (i = -1022)
          : ((a -= Math.pow(2, 52)), (i += 1023)))
    : ((i = 2047), (a = isNaN(r) ? 26985 : 0));
  for (var o = 0; o <= 5; ++o, a /= 256) t[e + o] = a & 255;
  (t[e + 6] = ((i & 15) << 4) | (a & 15)), (t[e + 7] = (i >> 4) | n);
}
var So = function (t) {
    for (var r = [], e = 10240, n = 0; n < t[0].length; ++n)
      if (t[0][n])
        for (var i = 0, a = t[0][n].length; i < a; i += e)
          r.push.apply(r, t[0][n].slice(i, i + e));
    return r;
  },
  yo = je
    ? function (t) {
        return t[0].length > 0 && Buffer.isBuffer(t[0][0])
          ? Buffer.concat(
              t[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : rn(r);
              }),
            )
          : So(t);
      }
    : So,
  Ao = function (t, r, e) {
    for (var n = [], i = r; i < e; i += 2)
      n.push(String.fromCharCode(gi(t, i)));
    return n.join('').replace(Ei, '');
  },
  _0 = je
    ? function (t, r, e) {
        return Buffer.isBuffer(t)
          ? t.toString('utf16le', r, e).replace(Ei, '')
          : Ao(t, r, e);
      }
    : Ao,
  Co = function (t, r, e) {
    for (var n = [], i = r; i < r + e; ++i)
      n.push(('0' + t[i].toString(16)).slice(-2));
    return n.join('');
  },
  wl = je
    ? function (t, r, e) {
        return Buffer.isBuffer(t) ? t.toString('hex', r, r + e) : Co(t, r, e);
      }
    : Co,
  Fo = function (t, r, e) {
    for (var n = [], i = r; i < e; i++) n.push(String.fromCharCode(Yn(t, i)));
    return n.join('');
  },
  Xi = je
    ? function (r, e, n) {
        return Buffer.isBuffer(r) ? r.toString('utf8', e, n) : Fo(r, e, n);
      }
    : Fo,
  El = function (t, r) {
    var e = or(t, r);
    return e > 0 ? Xi(t, r + 4, r + 4 + e - 1) : '';
  },
  Tl = El,
  Sl = function (t, r) {
    var e = or(t, r);
    return e > 0 ? Xi(t, r + 4, r + 4 + e - 1) : '';
  },
  yl = Sl,
  Al = function (t, r) {
    var e = 2 * or(t, r);
    return e > 0 ? Xi(t, r + 4, r + 4 + e - 1) : '';
  },
  Cl = Al,
  Fl = function (r, e) {
    var n = or(r, e);
    return n > 0 ? _0(r, e + 4, e + 4 + n) : '';
  },
  Dl = Fl,
  Ol = function (t, r) {
    var e = or(t, r);
    return e > 0 ? Xi(t, r + 4, r + 4 + e) : '';
  },
  Nl = Ol,
  Rl = function (t, r) {
    return pd(t, r);
  },
  Ra = Rl,
  w0 = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  };
je &&
  ((Tl = function (r, e) {
    if (!Buffer.isBuffer(r)) return El(r, e);
    var n = r.readUInt32LE(e);
    return n > 0 ? r.toString('utf8', e + 4, e + 4 + n - 1) : '';
  }),
  (yl = function (r, e) {
    if (!Buffer.isBuffer(r)) return Sl(r, e);
    var n = r.readUInt32LE(e);
    return n > 0 ? r.toString('utf8', e + 4, e + 4 + n - 1) : '';
  }),
  (Cl = function (r, e) {
    if (!Buffer.isBuffer(r)) return Al(r, e);
    var n = 2 * r.readUInt32LE(e);
    return r.toString('utf16le', e + 4, e + 4 + n - 1);
  }),
  (Dl = function (r, e) {
    if (!Buffer.isBuffer(r)) return Fl(r, e);
    var n = r.readUInt32LE(e);
    return r.toString('utf16le', e + 4, e + 4 + n);
  }),
  (Nl = function (r, e) {
    if (!Buffer.isBuffer(r)) return Ol(r, e);
    var n = r.readUInt32LE(e);
    return r.toString('utf8', e + 4, e + 4 + n);
  }),
  (Ra = function (r, e) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(e) : Rl(r, e);
  }),
  (w0 = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  }));
var Yn = function (t, r) {
    return t[r];
  },
  gi = function (t, r) {
    return t[r + 1] * 256 + t[r];
  },
  vd = function (t, r) {
    var e = t[r + 1] * 256 + t[r];
    return e < 32768 ? e : (65535 - e + 1) * -1;
  },
  or = function (t, r) {
    return t[r + 3] * (1 << 24) + (t[r + 2] << 16) + (t[r + 1] << 8) + t[r];
  },
  wn = function (t, r) {
    return (t[r + 3] << 24) | (t[r + 2] << 16) | (t[r + 1] << 8) | t[r];
  },
  md = function (t, r) {
    return (t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3];
  };
function Si(t, r) {
  var e = '',
    n,
    i,
    a = [],
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
          (e += String.fromCharCode(gi(this, f))), (f += 2);
      t *= 2;
      break;
    case 'utf8':
      e = Xi(this, this.l, this.l + t);
      break;
    case 'utf16le':
      (t *= 2), (e = _0(this, this.l, this.l + t));
      break;
    case 'wstr':
      return Si.call(this, t, 'dbcs');
    case 'lpstr-ansi':
      (e = Tl(this, this.l)), (t = 4 + or(this, this.l));
      break;
    case 'lpstr-cp':
      (e = yl(this, this.l)), (t = 4 + or(this, this.l));
      break;
    case 'lpwstr':
      (e = Cl(this, this.l)), (t = 4 + 2 * or(this, this.l));
      break;
    case 'lpp4':
      (t = 4 + or(this, this.l)), (e = Dl(this, this.l)), t & 2 && (t += 2);
      break;
    case '8lpp4':
      (t = 4 + or(this, this.l)),
        (e = Nl(this, this.l)),
        t & 3 && (t += 4 - (t & 3));
      break;
    case 'cstr':
      for (t = 0, e = ''; (s = Yn(this, this.l + t++)) !== 0; ) a.push(ea(s));
      e = a.join('');
      break;
    case '_wstr':
      for (t = 0, e = ''; (s = gi(this, this.l + t)) !== 0; )
        a.push(ea(s)), (t += 2);
      (t += 2), (e = a.join(''));
      break;
    case 'dbcs-cont':
      for (e = '', f = this.l, l = 0; l < t; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Yn(this, f)),
            (this.l = f + 1),
            (o = Si.call(this, t - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + o
          );
        a.push(ea(gi(this, f))), (f += 2);
      }
      (e = a.join('')), (t *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (e = '', f = this.l, l = 0; l != t; ++l) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return (
            (s = Yn(this, f)),
            (this.l = f + 1),
            (o = Si.call(this, t - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + o
          );
        a.push(ea(Yn(this, f))), (f += 1);
      }
      e = a.join('');
      break;
    default:
      switch (t) {
        case 1:
          return (n = Yn(this, this.l)), this.l++, n;
        case 2:
          return (n = (r === 'i' ? vd : gi)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return r === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (t > 0 ? wn : md)(this, this.l)), (this.l += 4), n)
            : ((i = or(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (r === 'f')
            return (
              t == 8
                ? (i = Ra(this, this.l))
                : (i = Ra(
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
              i
            );
          t = 8;
        case 16:
          e = wl(this, this.l, t);
          break;
      }
  }
  return (this.l += t), e;
}
var gd = function (t, r, e) {
    (t[e] = r & 255),
      (t[e + 1] = (r >>> 8) & 255),
      (t[e + 2] = (r >>> 16) & 255),
      (t[e + 3] = (r >>> 24) & 255);
  },
  _d = function (t, r, e) {
    (t[e] = r & 255),
      (t[e + 1] = (r >> 8) & 255),
      (t[e + 2] = (r >> 16) & 255),
      (t[e + 3] = (r >> 24) & 255);
  },
  wd = function (t, r, e) {
    (t[e] = r & 255), (t[e + 1] = (r >>> 8) & 255);
  };
function Ed(t, r, e) {
  var n = 0,
    i = 0;
  if (e === 'dbcs') {
    for (i = 0; i != r.length; ++i) wd(this, r.charCodeAt(i), this.l + 2 * i);
    n = 2 * r.length;
  } else if (e === 'sbcs') {
    for (r = r.replace(/[^\x00-\x7F]/g, '_'), i = 0; i != r.length; ++i)
      this[this.l + i] = r.charCodeAt(i) & 255;
    n = r.length;
  } else if (e === 'hex') {
    for (; i < t; ++i)
      this[this.l++] = parseInt(r.slice(2 * i, 2 * i + 2), 16) || 0;
    return this;
  } else if (e === 'utf16le') {
    var a = Math.min(this.l + t, this.length);
    for (i = 0; i < Math.min(r.length, t); ++i) {
      var s = r.charCodeAt(i);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < a; ) this[this.l++] = 0;
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
        (n = 4), gd(this, r, this.l);
        break;
      case 8:
        if (((n = 8), e === 'f')) {
          xd(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), _d(this, r, this.l);
        break;
    }
  return (this.l += n), this;
}
function kl(t, r) {
  var e = wl(this, this.l, t.length >> 1);
  if (e !== t) throw new Error(r + 'Expected ' + t + ' saw ' + e);
  this.l += t.length >> 1;
}
function ar(t, r) {
  (t.l = r), (t.read_shift = Si), (t.chk = kl), (t.write_shift = Ed);
}
function Ur(t, r) {
  t.l += r;
}
function G(t) {
  var r = Dn(t);
  return ar(r, 0), r;
}
function qt() {
  var t = [],
    r = je ? 256 : 2048,
    e = function (f) {
      var c = G(f);
      return ar(c, 0), c;
    },
    n = e(r),
    i = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && t.push(n),
        (n = null));
    },
    a = function (f) {
      return n && f < n.length - n.l ? n : (i(), (n = e(Math.max(f + 1, r))));
    },
    s = function () {
      return i(), Dt(t);
    },
    o = function (f) {
      i(), (n = f), n.l == null && (n.l = n.length), a(r);
    };
  return { next: a, push: o, end: s, _bufs: t };
}
function Z(t, r, e, n) {
  var i = +r,
    a;
  if (!isNaN(i)) {
    n || (n = p2[i].p || (e || []).length || 0),
      (a = 1 + (i >= 128 ? 1 : 0) + 1),
      n >= 128 && ++a,
      n >= 16384 && ++a,
      n >= 2097152 && ++a;
    var s = t.next(a);
    i <= 127
      ? s.write_shift(1, i)
      : (s.write_shift(1, (i & 127) + 128), s.write_shift(1, i >> 7));
    for (var o = 0; o != 4; ++o)
      if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7);
      else {
        s.write_shift(1, n);
        break;
      }
    n > 0 && w0(e) && t.push(e);
  }
}
function yi(t, r, e) {
  var n = Zt(t);
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
function Do(t, r, e) {
  var n = Zt(t);
  return (n.s = yi(n.s, r.s, e)), (n.e = yi(n.e, r.s, e)), n;
}
function Ai(t, r) {
  if (t.cRel && t.c < 0) for (t = Zt(t); t.c < 0; ) t.c += r > 8 ? 16384 : 256;
  if (t.rRel && t.r < 0)
    for (t = Zt(t); t.r < 0; ) t.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var e = Ke(t);
  return (
    !t.cRel && t.cRel != null && (e = yd(e)),
    !t.rRel && t.rRel != null && (e = Td(e)),
    e
  );
}
function vs(t, r) {
  return t.s.r == 0 &&
    !t.s.rRel &&
    t.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !t.e.rRel
    ? (t.s.cRel ? '' : '$') +
        bt(t.s.c) +
        ':' +
        (t.e.cRel ? '' : '$') +
        bt(t.e.c)
    : t.s.c == 0 &&
        !t.s.cRel &&
        t.e.c == (r.biff >= 12 ? 16383 : 255) &&
        !t.e.cRel
      ? (t.s.rRel ? '' : '$') +
        Nt(t.s.r) +
        ':' +
        (t.e.rRel ? '' : '$') +
        Nt(t.e.r)
      : Ai(t.s, r.biff) + ':' + Ai(t.e, r.biff);
}
function E0(t) {
  return parseInt(Sd(t), 10) - 1;
}
function Nt(t) {
  return '' + (t + 1);
}
function Td(t) {
  return t.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function Sd(t) {
  return t.replace(/\$(\d+)$/, '$1');
}
function T0(t) {
  for (var r = Ad(t), e = 0, n = 0; n !== r.length; ++n)
    e = 26 * e + r.charCodeAt(n) - 64;
  return e - 1;
}
function bt(t) {
  if (t < 0) throw new Error('invalid column ' + t);
  var r = '';
  for (++t; t; t = Math.floor((t - 1) / 26))
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r;
}
function yd(t) {
  return t.replace(/^([A-Z])/, '$$$1');
}
function Ad(t) {
  return t.replace(/^\$([A-Z])/, '$1');
}
function Cd(t) {
  return t.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function Et(t) {
  for (var r = 0, e = 0, n = 0; n < t.length; ++n) {
    var i = t.charCodeAt(n);
    i >= 48 && i <= 57
      ? (r = 10 * r + (i - 48))
      : i >= 65 && i <= 90 && (e = 26 * e + (i - 64));
  }
  return { c: e - 1, r: r - 1 };
}
function Ke(t) {
  for (var r = t.c + 1, e = ''; r; r = ((r - 1) / 26) | 0)
    e = String.fromCharCode(((r - 1) % 26) + 65) + e;
  return e + (t.r + 1);
}
function cr(t) {
  var r = t.indexOf(':');
  return r == -1
    ? { s: Et(t), e: Et(t) }
    : { s: Et(t.slice(0, r)), e: Et(t.slice(r + 1)) };
}
function ht(t, r) {
  return typeof r > 'u' || typeof r == 'number'
    ? ht(t.s, t.e)
    : (typeof t != 'string' && (t = Ke(t)),
      typeof r != 'string' && (r = Ke(r)),
      t == r ? t : t + ':' + r);
}
function rt(t) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    e = 0,
    n = 0,
    i = 0,
    a = t.length;
  for (e = 0; n < a && !((i = t.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    e = 26 * e + i;
  for (
    r.s.c = --e, e = 0;
    n < a && !((i = t.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    e = 10 * e + i;
  if (((r.s.r = --e), n === a || i != 10))
    return (r.e.c = r.s.c), (r.e.r = r.s.r), r;
  for (++n, e = 0; n != a && !((i = t.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    e = 26 * e + i;
  for (
    r.e.c = --e, e = 0;
    n != a && !((i = t.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    e = 10 * e + i;
  return (r.e.r = --e), r;
}
function Oo(t, r) {
  var e = t.t == 'd' && r instanceof Date;
  if (t.z != null)
    try {
      return (t.w = dn(t.z, e ? Jt(r) : r));
    } catch {}
  try {
    return (t.w = dn((t.XF || {}).numFmtId || (e ? 14 : 0), e ? Jt(r) : r));
  } catch {
    return '' + r;
  }
}
function en(t, r, e) {
  return t == null || t.t == null || t.t == 'z'
    ? ''
    : t.w !== void 0
      ? t.w
      : (t.t == 'd' && !t.z && e && e.dateNF && (t.z = e.dateNF),
        t.t == 'e' ? Ki[t.v] || t.v : r == null ? Oo(t, t.v) : Oo(t, r));
}
function In(t, r) {
  var e = r && r.sheet ? r.sheet : 'Sheet1',
    n = {};
  return (n[e] = t), { SheetNames: [e], Sheets: n };
}
function Il(t, r, e) {
  var n = e || {},
    i = t ? Array.isArray(t) : n.dense,
    a = t || (i ? [] : {}),
    s = 0,
    o = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Et(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = rt(a['!ref']);
    (f.s.c = c.s.c),
      (f.s.r = c.s.r),
      (f.e.c = Math.max(f.e.c, c.e.c)),
      (f.e.r = Math.max(f.e.r, c.e.r)),
      s == -1 && (f.e.r = s = c.e.r + 1);
  }
  for (var h = 0; h != r.length; ++h)
    if (r[h]) {
      if (!Array.isArray(r[h]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var u = 0; u != r[h].length; ++u)
        if (!(typeof r[h][u] > 'u')) {
          var p = { v: r[h][u] },
            x = s + h,
            d = o + u;
          if (
            (f.s.r > x && (f.s.r = x),
            f.s.c > d && (f.s.c = d),
            f.e.r < x && (f.e.r = x),
            f.e.c < d && (f.e.c = d),
            r[h][u] &&
              typeof r[h][u] == 'object' &&
              !Array.isArray(r[h][u]) &&
              !(r[h][u] instanceof Date))
          )
            p = r[h][u];
          else if (
            (Array.isArray(p.v) && ((p.f = r[h][u][1]), (p.v = p.v[0])),
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
                  ? ((p.z = n.dateNF || ft[14]),
                    n.cellDates
                      ? ((p.t = 'd'), (p.w = dn(p.z, Jt(p.v))))
                      : ((p.t = 'n'), (p.v = Jt(p.v)), (p.w = dn(p.z, p.v))))
                  : (p.t = 's');
          if (i)
            a[x] || (a[x] = []),
              a[x][d] && a[x][d].z && (p.z = a[x][d].z),
              (a[x][d] = p);
          else {
            var m = Ke({ c: d, r: x });
            a[m] && a[m].z && (p.z = a[m].z), (a[m] = p);
          }
        }
    }
  return f.s.c < 1e7 && (a['!ref'] = ht(f)), a;
}
function oi(t, r) {
  return Il(null, t, r);
}
function Fd(t) {
  return t.read_shift(4, 'i');
}
function Dr(t, r) {
  return r || (r = G(4)), r.write_shift(4, t), r;
}
function Mt(t) {
  var r = t.read_shift(4);
  return r === 0 ? '' : t.read_shift(r, 'dbcs');
}
function Tt(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = G(4 + 2 * t.length))),
    r.write_shift(4, t.length),
    t.length > 0 && r.write_shift(0, t, 'dbcs'),
    e ? r.slice(0, r.l) : r
  );
}
function Dd(t) {
  return { ich: t.read_shift(2), ifnt: t.read_shift(2) };
}
function Od(t, r) {
  return r || (r = G(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function S0(t, r) {
  var e = t.l,
    n = t.read_shift(1),
    i = Mt(t),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var o = t.read_shift(4), l = 0; l != o; ++l) a.push(Dd(t));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (t.l = e + r), s;
}
function Nd(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = G(15 + 4 * t.t.length))),
    r.write_shift(1, 0),
    Tt(t.t, r),
    e ? r.slice(0, r.l) : r
  );
}
var Rd = S0;
function kd(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = G(23 + 4 * t.t.length))),
    r.write_shift(1, 1),
    Tt(t.t, r),
    r.write_shift(4, 1),
    Od({}, r),
    e ? r.slice(0, r.l) : r
  );
}
function _r(t) {
  var r = t.read_shift(4),
    e = t.read_shift(2);
  return (e += t.read_shift(1) << 16), t.l++, { c: r, iStyleRef: e };
}
function bn(t, r) {
  return (
    r == null && (r = G(8)),
    r.write_shift(-4, t.c),
    r.write_shift(3, t.iStyleRef || t.s),
    r.write_shift(1, 0),
    r
  );
}
function Mn(t) {
  var r = t.read_shift(2);
  return (r += t.read_shift(1) << 16), t.l++, { c: -1, iStyleRef: r };
}
function Pn(t, r) {
  return (
    r == null && (r = G(4)),
    r.write_shift(3, t.iStyleRef || t.s),
    r.write_shift(1, 0),
    r
  );
}
var Id = Mt,
  bl = Tt;
function y0(t) {
  var r = t.read_shift(4);
  return r === 0 || r === 4294967295 ? '' : t.read_shift(r, 'dbcs');
}
function ka(t, r) {
  var e = !1;
  return (
    r == null && ((e = !0), (r = G(127))),
    r.write_shift(4, t.length > 0 ? t.length : 4294967295),
    t.length > 0 && r.write_shift(0, t, 'dbcs'),
    e ? r.slice(0, r.l) : r
  );
}
var bd = Mt,
  js = y0,
  A0 = ka;
function Ml(t) {
  var r = t.slice(t.l, t.l + 4),
    e = r[0] & 1,
    n = r[0] & 2;
  t.l += 4;
  var i =
    n === 0 ? Ra([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : wn(r, 0) >> 2;
  return e ? i / 100 : i;
}
function Pl(t, r) {
  r == null && (r = G(4));
  var e = 0,
    n = 0,
    i = t * 100;
  if (
    (t == (t | 0) && t >= -536870912 && t < 1 << 29
      ? (n = 1)
      : i == (i | 0) && i >= -536870912 && i < 1 << 29 && ((n = 1), (e = 1)),
    n)
  )
    r.write_shift(-4, ((e ? i : t) << 2) + (e + 2));
  else throw new Error('unsupported RkNumber ' + t);
}
function Ll(t) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = t.read_shift(4)),
    (r.e.r = t.read_shift(4)),
    (r.s.c = t.read_shift(4)),
    (r.e.c = t.read_shift(4)),
    r
  );
}
function Md(t, r) {
  return (
    r || (r = G(16)),
    r.write_shift(4, t.s.r),
    r.write_shift(4, t.e.r),
    r.write_shift(4, t.s.c),
    r.write_shift(4, t.e.c),
    r
  );
}
var Ln = Ll,
  fi = Md;
function li(t) {
  if (t.length - t.l < 8) throw 'XLS Xnum Buffer underflow';
  return t.read_shift(8, 'f');
}
function On(t, r) {
  return (r || G(8)).write_shift(8, t, 'f');
}
function Pd(t) {
  var r = {},
    e = t.read_shift(1),
    n = e >>> 1,
    i = t.read_shift(1),
    a = t.read_shift(2, 'i'),
    s = t.read_shift(1),
    o = t.read_shift(1),
    l = t.read_shift(1);
  switch ((t.l++, n)) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = i;
      var f = Yd[i];
      f && (r.rgb = Ho(f));
      break;
    case 2:
      r.rgb = Ho([s, o, l]);
      break;
    case 3:
      r.theme = i;
      break;
  }
  return a != 0 && (r.tint = a > 0 ? a / 32767 : a / 32768), r;
}
function Ia(t, r) {
  if ((r || (r = G(8)), !t || t.auto))
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
function Ld(t) {
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
function Bd(t, r) {
  r || (r = G(2));
  var e =
    (t.italic ? 2 : 0) |
    (t.strike ? 8 : 0) |
    (t.outline ? 16 : 0) |
    (t.shadow ? 32 : 0) |
    (t.condense ? 64 : 0) |
    (t.extend ? 128 : 0);
  return r.write_shift(1, e), r.write_shift(1, 0), r;
}
var Bl = 2,
  ir = 3,
  ia = 11,
  ba = 19,
  aa = 64,
  Ud = 65,
  Hd = 71,
  Wd = 4108,
  Vd = 4126,
  Ft = 80,
  No = {
    1: { n: 'CodePage', t: Bl },
    2: { n: 'Category', t: Ft },
    3: { n: 'PresentationFormat', t: Ft },
    4: { n: 'ByteCount', t: ir },
    5: { n: 'LineCount', t: ir },
    6: { n: 'ParagraphCount', t: ir },
    7: { n: 'SlideCount', t: ir },
    8: { n: 'NoteCount', t: ir },
    9: { n: 'HiddenCount', t: ir },
    10: { n: 'MultimediaClipCount', t: ir },
    11: { n: 'ScaleCrop', t: ia },
    12: { n: 'HeadingPairs', t: Wd },
    13: { n: 'TitlesOfParts', t: Vd },
    14: { n: 'Manager', t: Ft },
    15: { n: 'Company', t: Ft },
    16: { n: 'LinksUpToDate', t: ia },
    17: { n: 'CharacterCount', t: ir },
    19: { n: 'SharedDoc', t: ia },
    22: { n: 'HyperlinksChanged', t: ia },
    23: { n: 'AppVersion', t: ir, p: 'version' },
    24: { n: 'DigSig', t: Ud },
    26: { n: 'ContentType', t: Ft },
    27: { n: 'ContentStatus', t: Ft },
    28: { n: 'Language', t: Ft },
    29: { n: 'Version', t: Ft },
    255: {},
    2147483648: { n: 'Locale', t: ba },
    2147483651: { n: 'Behavior', t: ba },
    1919054434: {},
  },
  Ro = {
    1: { n: 'CodePage', t: Bl },
    2: { n: 'Title', t: Ft },
    3: { n: 'Subject', t: Ft },
    4: { n: 'Author', t: Ft },
    5: { n: 'Keywords', t: Ft },
    6: { n: 'Comments', t: Ft },
    7: { n: 'Template', t: Ft },
    8: { n: 'LastAuthor', t: Ft },
    9: { n: 'RevNumber', t: Ft },
    10: { n: 'EditTime', t: aa },
    11: { n: 'LastPrinted', t: aa },
    12: { n: 'CreatedDate', t: aa },
    13: { n: 'ModifiedDate', t: aa },
    14: { n: 'PageCount', t: ir },
    15: { n: 'WordCount', t: ir },
    16: { n: 'CharCount', t: ir },
    17: { n: 'Thumbnail', t: Hd },
    18: { n: 'Application', t: Ft },
    19: { n: 'DocSecurity', t: ir },
    255: {},
    2147483648: { n: 'Locale', t: ba },
    2147483651: { n: 'Behavior', t: ba },
    1919054434: {},
  };
function jd(t) {
  return t.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
  });
}
var Gd = jd([
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
  Yd = Zt(Gd),
  Ki = {
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
  $d = {
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
  sa = {
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
function Ul() {
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
function Hl(t, r) {
  var e = rd($d),
    n = [],
    i;
  (n[n.length] = pt),
    (n[n.length] = ie('Types', null, {
      xmlns: wt.CT,
      'xmlns:xsd': wt.xsd,
      'xmlns:xsi': wt.xsi,
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
        return ie('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var a = function (l) {
      t[l] &&
        t[l].length > 0 &&
        ((i = t[l][0]),
        (n[n.length] = ie('Override', null, {
          PartName: (i[0] == '/' ? '' : '/') + i,
          ContentType: sa[l][r.bookType] || sa[l].xlsx,
        })));
    },
    s = function (l) {
      (t[l] || []).forEach(function (f) {
        n[n.length] = ie('Override', null, {
          PartName: (f[0] == '/' ? '' : '/') + f,
          ContentType: sa[l][r.bookType] || sa[l].xlsx,
        });
      });
    },
    o = function (l) {
      (t[l] || []).forEach(function (f) {
        n[n.length] = ie('Override', null, {
          PartName: (f[0] == '/' ? '' : '/') + f,
          ContentType: e[l][0],
        });
      });
    };
  return (
    a('workbooks'),
    s('sheets'),
    s('charts'),
    o('themes'),
    ['strs', 'styles'].forEach(a),
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
function Wl(t) {
  var r = t.lastIndexOf('/');
  return t.slice(0, r + 1) + '_rels/' + t.slice(r + 1) + '.rels';
}
function Kn(t) {
  var r = [pt, ie('Relationships', null, { xmlns: wt.RELS })];
  return (
    Rt(t['!id']).forEach(function (e) {
      r[r.length] = ie('Relationship', null, t['!id'][e]);
    }),
    r.length > 2 &&
      ((r[r.length] = '</Relationships>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function $e(t, r, e, n, i, a) {
  if (
    (i || (i = {}),
    t['!id'] || (t['!id'] = {}),
    t['!idx'] || (t['!idx'] = 1),
    r < 0)
  )
    for (r = t['!idx']; t['!id']['rId' + r]; ++r);
  if (
    ((t['!idx'] = r + 1),
    (i.Id = 'rId' + r),
    (i.Type = n),
    (i.Target = e),
    [He.HLINK, He.XPATH, He.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    t['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + r);
  return (t['!id'][i.Id] = i), (t[('/' + i.Target).replace('//', '/')] = i), r;
}
function Xd(t) {
  var r = [pt];
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
function ko(t, r, e) {
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
function Kd(t, r) {
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
function zd(t) {
  var r = [pt];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var e = 0; e != t.length; ++e)
    r.push(ko(t[e][0], t[e][1])), r.push(Kd('', t[e][0]));
  return r.push(ko('', 'Document', 'pkg')), r.push('</rdf:RDF>'), r.join('');
}
function Vl() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Aa.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Cn = [
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
function ms(t, r, e, n, i) {
  i[t] != null ||
    r == null ||
    r === '' ||
    ((i[t] = r), (r = Xe(r)), (n[n.length] = e ? ie(t, r, e) : Ot(t, r)));
}
function jl(t, r) {
  var e = r || {},
    n = [
      pt,
      ie('cp:coreProperties', null, {
        'xmlns:cp': wt.CORE_PROPS,
        'xmlns:dc': wt.dc,
        'xmlns:dcterms': wt.dcterms,
        'xmlns:dcmitype': wt.dcmitype,
        'xmlns:xsi': wt.xsi,
      }),
    ],
    i = {};
  if (!t && !e.Props) return n.join('');
  t &&
    (t.CreatedDate != null &&
      ms(
        'dcterms:created',
        typeof t.CreatedDate == 'string'
          ? t.CreatedDate
          : Vs(t.CreatedDate, e.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    t.ModifiedDate != null &&
      ms(
        'dcterms:modified',
        typeof t.ModifiedDate == 'string'
          ? t.ModifiedDate
          : Vs(t.ModifiedDate, e.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != Cn.length; ++a) {
    var s = Cn[a],
      o = e.Props && e.Props[s[1]] != null ? e.Props[s[1]] : t ? t[s[1]] : null;
    o === !0
      ? (o = '1')
      : o === !1
        ? (o = '0')
        : typeof o == 'number' && (o = String(o)),
      o != null && ms(s[0], o, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var zn = [
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
  Gl = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function Yl(t) {
  var r = [],
    e = ie;
  return (
    t || (t = {}),
    (t.Application = 'SheetJS'),
    (r[r.length] = pt),
    (r[r.length] = ie('Properties', null, {
      xmlns: wt.EXT_PROPS,
      'xmlns:vt': wt.vt,
    })),
    zn.forEach(function (n) {
      if (t[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = Xe(String(t[n[1]]));
            break;
          case 'bool':
            i = t[n[1]] ? 'true' : 'false';
            break;
        }
        i !== void 0 && (r[r.length] = e(n[0], i));
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
          return '<vt:lpstr>' + Xe(n) + '</vt:lpstr>';
        }).join(''),
        { size: t.Worksheets, baseType: 'lpstr' },
      ),
    )),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function $l(t) {
  var r = [
    pt,
    ie('Properties', null, { xmlns: wt.CUST_PROPS, 'xmlns:vt': wt.vt }),
  ];
  if (!t) return r.join('');
  var e = 1;
  return (
    Rt(t).forEach(function (i) {
      ++e,
        (r[r.length] = ie('property', dd(t[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: e,
          name: Xe(i),
        }));
    }),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
var Io = {
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
function qd(t, r) {
  var e = [];
  return (
    Rt(Io)
      .map(function (n) {
        for (var i = 0; i < Cn.length; ++i) if (Cn[i][1] == n) return Cn[i];
        for (i = 0; i < zn.length; ++i) if (zn[i][1] == n) return zn[i];
        throw n;
      })
      .forEach(function (n) {
        if (t[n[1]] != null) {
          var i =
            r && r.Props && r.Props[n[1]] != null ? r.Props[n[1]] : t[n[1]];
          switch (n[2]) {
            case 'date':
              i = new Date(i).toISOString().replace(/\.\d*Z/, 'Z');
              break;
          }
          typeof i == 'number'
            ? (i = String(i))
            : i === !0 || i === !1
              ? (i = i ? '1' : '0')
              : i instanceof Date &&
                (i = new Date(i).toISOString().replace(/\.\d*Z/, '')),
            e.push(Ot(Io[n[1]] || n[1], i));
        }
      }),
    ie('DocumentProperties', e.join(''), { xmlns: sr.o })
  );
}
function Jd(t, r) {
  var e = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    t &&
      Rt(t).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          for (var s = 0; s < Cn.length; ++s) if (a == Cn[s][1]) return;
          for (s = 0; s < zn.length; ++s) if (a == zn[s][1]) return;
          for (s = 0; s < e.length; ++s) if (a == e[s]) return;
          var o = t[a],
            l = 'string';
          typeof o == 'number'
            ? ((l = 'float'), (o = String(o)))
            : o === !0 || o === !1
              ? ((l = 'boolean'), (o = o ? '1' : '0'))
              : (o = String(o)),
            i.push(ie(wo(a), o, { 'dt:dt': l }));
        }
      }),
    r &&
      Rt(r).forEach(function (a) {
        if (
          Object.prototype.hasOwnProperty.call(r, a) &&
          !(t && Object.prototype.hasOwnProperty.call(t, a))
        ) {
          var s = r[a],
            o = 'string';
          typeof s == 'number'
            ? ((o = 'float'), (s = String(s)))
            : s === !0 || s === !1
              ? ((o = 'boolean'), (s = s ? '1' : '0'))
              : s instanceof Date
                ? ((o = 'dateTime.tz'), (s = s.toISOString()))
                : (s = String(s)),
            i.push(ie(wo(a), s, { 'dt:dt': o }));
        }
      }),
    '<' + n + ' xmlns="' + sr.o + '">' + i.join('') + '</' + n + '>'
  );
}
function Zd(t) {
  var r = typeof t == 'string' ? new Date(Date.parse(t)) : t,
    e = r.getTime() / 1e3 + 11644473600,
    n = e % Math.pow(2, 32),
    i = (e - n) / Math.pow(2, 32);
  (n *= 1e7), (i *= 1e7);
  var a = (n / Math.pow(2, 32)) | 0;
  a > 0 && ((n = n % Math.pow(2, 32)), (i += a));
  var s = G(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function bo(t, r) {
  var e = G(4),
    n = G(4);
  switch ((e.write_shift(4, t == 80 ? 31 : t), t)) {
    case 3:
      n.write_shift(-4, r);
      break;
    case 5:
      (n = G(8)), n.write_shift(8, r, 'f');
      break;
    case 11:
      n.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      n = Zd(r);
      break;
    case 31:
    case 80:
      for (
        n = G(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)),
          n.write_shift(4, r.length + 1),
          n.write_shift(0, r, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + t + ' ' + r);
  }
  return Dt([e, n]);
}
var Xl = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function Qd(t) {
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
function Mo(t, r, e) {
  var n = G(8),
    i = [],
    a = [],
    s = 8,
    o = 0,
    l = G(8),
    f = G(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    f.write_shift(4, 1),
    a.push(l),
    i.push(f),
    (s += 8 + l.length),
    !r)
  ) {
    (f = G(8)), f.write_shift(4, 0), i.unshift(f);
    var c = [G(4)];
    for (c[0].write_shift(4, t.length), o = 0; o < t.length; ++o) {
      var h = t[o][0];
      for (
        l = G(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)),
          l.write_shift(4, o + 2),
          l.write_shift(4, h.length + 1),
          l.write_shift(0, h, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = Dt(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (o = 0; o < t.length; ++o)
    if (
      !(r && !r[t[o][0]]) &&
      !(Xl.indexOf(t[o][0]) > -1 || Gl.indexOf(t[o][0]) > -1) &&
      t[o][1] != null
    ) {
      var u = t[o][1],
        p = 0;
      if (r) {
        p = +r[t[o][0]];
        var x = e[p];
        if (x.p == 'version' && typeof u == 'string') {
          var d = u.split('.');
          u = (+d[0] << 16) + (+d[1] || 0);
        }
        l = bo(x.t, u);
      } else {
        var m = Qd(u);
        m == -1 && ((m = 31), (u = String(u))), (l = bo(m, u));
      }
      a.push(l),
        (f = G(8)),
        f.write_shift(4, r ? p : 2 + o),
        i.push(f),
        (s += 8 + l.length);
    }
  var A = 8 * (a.length + 1);
  for (o = 0; o < a.length; ++o) i[o].write_shift(4, A), (A += a[o].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), Dt([n].concat(i).concat(a))
  );
}
function Po(t, r, e, n, i, a) {
  var s = G(i ? 68 : 48),
    o = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, ze.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, r, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = Mo(t, e, n);
  if ((o.push(l), i)) {
    var f = Mo(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), o.push(f);
  }
  return Dt(o);
}
function ep(t, r) {
  r || (r = G(t));
  for (var e = 0; e < t; ++e) r.write_shift(1, 0);
  return r;
}
function tp(t, r) {
  return t.read_shift(r) === 1;
}
function Ht(t, r) {
  return r || (r = G(2)), r.write_shift(2, +!!t), r;
}
function Kl(t) {
  return t.read_shift(2, 'u');
}
function vr(t, r) {
  return r || (r = G(2)), r.write_shift(2, t), r;
}
function zl(t, r, e) {
  return (
    e || (e = G(2)),
    e.write_shift(1, r == 'e' ? +t : +!!t),
    e.write_shift(1, r == 'e' ? 1 : 0),
    e
  );
}
function ql(t, r, e) {
  var n = t.read_shift(e && e.biff >= 12 ? 2 : 1),
    i = 'sbcs-cont';
  if ((e && e.biff >= 8, !e || e.biff == 8)) {
    var a = t.read_shift(1);
    a && (i = 'dbcs-cont');
  } else e.biff == 12 && (i = 'wstr');
  e.biff >= 2 && e.biff <= 5 && (i = 'cpstr');
  var s = n ? t.read_shift(n, i) : '';
  return s;
}
function rp(t) {
  var r = t.t || '',
    e = G(3);
  e.write_shift(2, r.length), e.write_shift(1, 1);
  var n = G(2 * r.length);
  n.write_shift(2 * r.length, r, 'utf16le');
  var i = [e, n];
  return Dt(i);
}
function np(t, r, e) {
  var n;
  if (e) {
    if (e.biff >= 2 && e.biff <= 5) return t.read_shift(r, 'cpstr');
    if (e.biff >= 12) return t.read_shift(r, 'dbcs-cont');
  }
  var i = t.read_shift(1);
  return (
    i === 0
      ? (n = t.read_shift(r, 'sbcs-cont'))
      : (n = t.read_shift(r, 'dbcs-cont')),
    n
  );
}
function ip(t, r, e) {
  var n = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return n === 0 ? (t.l++, '') : np(t, n, e);
}
function ap(t, r, e) {
  if (e.biff > 5) return ip(t, r, e);
  var n = t.read_shift(1);
  return n === 0
    ? (t.l++, '')
    : t.read_shift(n, e.biff <= 4 || !t.lens ? 'cpstr' : 'sbcs-cont');
}
function Jl(t, r, e) {
  return (
    e || (e = G(3 + 2 * t.length)),
    e.write_shift(2, t.length),
    e.write_shift(1, 1),
    e.write_shift(31, t, 'utf16le'),
    e
  );
}
function Lo(t, r) {
  r || (r = G(6 + t.length * 2)), r.write_shift(4, 1 + t.length);
  for (var e = 0; e < t.length; ++e) r.write_shift(2, t.charCodeAt(e));
  return r.write_shift(2, 0), r;
}
function sp(t) {
  var r = G(512),
    e = 0,
    n = t.Target;
  n.slice(0, 7) == 'file://' && (n = n.slice(7));
  var i = n.indexOf('#'),
    a = i > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case '#':
      a = 28;
      break;
    case '.':
      a &= -3;
      break;
  }
  r.write_shift(4, 2), r.write_shift(4, a);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (e = 0; e < s.length; ++e) r.write_shift(4, s[e]);
  if (a == 28) (n = n.slice(1)), Lo(n, r);
  else if (a & 2) {
    for (
      s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), e = 0;
      e < s.length;
      ++e
    )
      r.write_shift(1, parseInt(s[e], 16));
    var o = i > -1 ? n.slice(0, i) : n;
    for (r.write_shift(4, 2 * (o.length + 1)), e = 0; e < o.length; ++e)
      r.write_shift(2, o.charCodeAt(e));
    r.write_shift(2, 0), a & 8 && Lo(i > -1 ? n.slice(i + 1) : '', r);
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
function Nn(t, r, e, n) {
  return (
    n || (n = G(6)),
    n.write_shift(2, t),
    n.write_shift(2, r),
    n.write_shift(2, e || 0),
    n
  );
}
function op(t, r, e) {
  var n = e.biff > 8 ? 4 : 2,
    i = t.read_shift(n),
    a = t.read_shift(n, 'i'),
    s = t.read_shift(n, 'i');
  return [i, a, s];
}
function fp(t) {
  var r = t.read_shift(2),
    e = t.read_shift(2),
    n = t.read_shift(2),
    i = t.read_shift(2);
  return { s: { c: n, r }, e: { c: i, r: e } };
}
function Zl(t, r) {
  return (
    r || (r = G(8)),
    r.write_shift(2, t.s.r),
    r.write_shift(2, t.e.r),
    r.write_shift(2, t.s.c),
    r.write_shift(2, t.e.c),
    r
  );
}
function C0(t, r, e) {
  var n = 1536,
    i = 16;
  switch (e.bookType) {
    case 'biff8':
      break;
    case 'biff5':
      (n = 1280), (i = 8);
      break;
    case 'biff4':
      (n = 4), (i = 6);
      break;
    case 'biff3':
      (n = 3), (i = 6);
      break;
    case 'biff2':
      (n = 2), (i = 4);
      break;
    case 'xla':
      break;
    default:
      throw new Error('unsupported BIFF version');
  }
  var a = G(i);
  return (
    a.write_shift(2, n),
    a.write_shift(2, r),
    i > 4 && a.write_shift(2, 29282),
    i > 6 && a.write_shift(2, 1997),
    i > 8 &&
      (a.write_shift(2, 49161),
      a.write_shift(2, 1),
      a.write_shift(2, 1798),
      a.write_shift(2, 0)),
    a
  );
}
function lp(t, r) {
  var e = !r || r.biff == 8,
    n = G(e ? 112 : 54);
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
function cp(t, r) {
  var e = !r || r.biff >= 8 ? 2 : 1,
    n = G(8 + e * t.name.length);
  n.write_shift(4, t.pos),
    n.write_shift(1, t.hs || 0),
    n.write_shift(1, t.dt),
    n.write_shift(1, t.name.length),
    r.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(e * t.name.length, t.name, r.biff < 8 ? 'sbcs' : 'utf16le');
  var i = n.slice(0, n.l);
  return (i.l = n.l), i;
}
function up(t, r) {
  var e = G(8);
  e.write_shift(4, t.Count), e.write_shift(4, t.Unique);
  for (var n = [], i = 0; i < t.length; ++i) n[i] = rp(t[i]);
  var a = Dt([e].concat(n));
  return (
    (a.parts = [e.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function hp() {
  var t = G(18);
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
function dp(t) {
  var r = G(18),
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
function pp(t, r) {
  var e = t.name || 'Arial',
    n = r && r.biff == 5,
    i = n ? 15 + e.length : 16 + 2 * e.length,
    a = G(i);
  return (
    a.write_shift(2, t.sz * 20),
    a.write_shift(4, 0),
    a.write_shift(2, 400),
    a.write_shift(4, 0),
    a.write_shift(2, 0),
    a.write_shift(1, e.length),
    n || a.write_shift(1, 1),
    a.write_shift((n ? 1 : 2) * e.length, e, n ? 'sbcs' : 'utf16le'),
    a
  );
}
function xp(t, r, e, n) {
  var i = G(10);
  return Nn(t, r, n, i), i.write_shift(4, e), i;
}
function vp(t, r, e, n, i) {
  var a = !i || i.biff == 8,
    s = G(8 + +a + (1 + a) * e.length);
  return (
    Nn(t, r, n, s),
    s.write_shift(2, e.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * e.length, e, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function mp(t, r, e, n) {
  var i = e && e.biff == 5;
  n || (n = G(i ? 3 + r.length : 5 + 2 * r.length)),
    n.write_shift(2, t),
    n.write_shift(i ? 1 : 2, r.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * r.length, r, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function gp(t, r) {
  var e = r.biff == 8 || !r.biff ? 4 : 2,
    n = G(2 * e + 6);
  return (
    n.write_shift(e, t.s.r),
    n.write_shift(e, t.e.r + 1),
    n.write_shift(2, t.s.c),
    n.write_shift(2, t.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function Bo(t, r, e, n) {
  var i = e && e.biff == 5;
  n || (n = G(i ? 16 : 20)),
    n.write_shift(2, 0),
    t.style
      ? (n.write_shift(2, t.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, t.numFmtId || 0), n.write_shift(2, r << 4));
  var a = 0;
  return (
    t.numFmtId > 0 && i && (a |= 1024),
    n.write_shift(4, a),
    n.write_shift(4, 0),
    i || n.write_shift(4, 0),
    n.write_shift(2, 0),
    n
  );
}
function _p(t) {
  var r = G(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function wp(t, r, e, n, i, a) {
  var s = G(8);
  return Nn(t, r, n, s), zl(e, a, s), s;
}
function Ep(t, r, e, n) {
  var i = G(14);
  return Nn(t, r, n, i), On(e, i), i;
}
function Tp(t, r, e) {
  if (e.biff < 8) return Sp(t, r, e);
  for (
    var n = [], i = t.l + r, a = t.read_shift(e.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(op(t, e.biff > 8 ? 12 : 6, e));
  if (t.l != i) throw new Error('Bad ExternSheet: ' + t.l + ' != ' + i);
  return n;
}
function Sp(t, r, e) {
  t[t.l + 1] == 3 && t[t.l]++;
  var n = ql(t, r, e);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function yp(t) {
  var r = G(2 + t.length * 8);
  r.write_shift(2, t.length);
  for (var e = 0; e < t.length; ++e) Zl(t[e], r);
  return r;
}
function Ap(t) {
  var r = G(24),
    e = Et(t[0]);
  r.write_shift(2, e.r),
    r.write_shift(2, e.r),
    r.write_shift(2, e.c),
    r.write_shift(2, e.c);
  for (
    var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), i = 0;
    i < 16;
    ++i
  )
    r.write_shift(1, parseInt(n[i], 16));
  return Dt([r, sp(t[1])]);
}
function Cp(t) {
  var r = t[1].Tooltip,
    e = G(10 + 2 * (r.length + 1));
  e.write_shift(2, 2048);
  var n = Et(t[0]);
  e.write_shift(2, n.r),
    e.write_shift(2, n.r),
    e.write_shift(2, n.c),
    e.write_shift(2, n.c);
  for (var i = 0; i < r.length; ++i) e.write_shift(2, r.charCodeAt(i));
  return e.write_shift(2, 0), e;
}
function Fp(t) {
  return t || (t = G(4)), t.write_shift(2, 1), t.write_shift(2, 1), t;
}
function Dp(t, r, e) {
  if (!e.cellStyles) return Ur(t, r);
  var n = e && e.biff >= 12 ? 4 : 2,
    i = t.read_shift(n),
    a = t.read_shift(n),
    s = t.read_shift(n),
    o = t.read_shift(n),
    l = t.read_shift(2);
  n == 2 && (t.l += 2);
  var f = { s: i, e: a, w: s, ixfe: o, flags: l };
  return (e.biff >= 5 || !e.biff) && (f.level = (l >> 8) & 7), f;
}
function Op(t, r) {
  var e = G(12);
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
function Np(t) {
  for (var r = G(2 * t), e = 0; e < t; ++e) r.write_shift(2, e + 1);
  return r;
}
function Rp(t, r, e) {
  var n = G(15);
  return qi(n, t, r), n.write_shift(8, e, 'f'), n;
}
function kp(t, r, e) {
  var n = G(9);
  return qi(n, t, r), n.write_shift(2, e), n;
}
var Ip = (function () {
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
      r = x0({
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
        c = Dn(1);
      switch (l.type) {
        case 'base64':
          c = Cr(Qr(o));
          break;
        case 'binary':
          c = Cr(o);
          break;
        case 'buffer':
        case 'array':
          c = o;
          break;
      }
      ar(c, 0);
      var h = c.read_shift(1),
        u = !!(h & 136),
        p = !1,
        x = !1;
      switch (h) {
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
          x = !0;
          break;
        case 245:
          break;
        default:
          throw new Error('DBF Unsupported Version: ' + h.toString(16));
      }
      var d = 0,
        m = 521;
      h == 2 && (d = c.read_shift(2)),
        (c.l += 3),
        h != 2 && (d = c.read_shift(4)),
        d > 1048576 && (d = 1e6),
        h != 2 && (m = c.read_shift(2));
      var A = c.read_shift(2),
        D = l.codepage || 1252;
      h != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (D = t[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        x && (c.l += 36);
      for (
        var F = [],
          k = {},
          j = Math.min(c.length, h == 2 ? 521 : m - 10 - (p ? 264 : 0)),
          ee = x ? 32 : 11;
        c.l < j && c[c.l] != 13;

      )
        switch (
          ((k = {}),
          (k.name = Ca.utils
            .decode(D, c.slice(c.l, c.l + ee))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += ee),
          (k.type = String.fromCharCode(c.read_shift(1))),
          h != 2 && !x && (k.offset = c.read_shift(4)),
          (k.len = c.read_shift(1)),
          h == 2 && (k.offset = c.read_shift(2)),
          (k.dec = c.read_shift(1)),
          k.name.length && F.push(k),
          h != 2 && (c.l += x ? 13 : 14),
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
      if ((c[c.l] !== 13 && (c.l = m - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l]);
      c.l = m;
      var N = 0,
        W = 0;
      for (f[0] = [], W = 0; W != F.length; ++W) f[0][W] = F[W].name;
      for (; d-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += A;
          continue;
        }
        for (++c.l, f[++N] = [], W = 0, W = 0; W != F.length; ++W) {
          var M = c.slice(c.l, c.l + F[W].len);
          (c.l += F[W].len), ar(M, 0);
          var X = Ca.utils.decode(D, M);
          switch (F[W].type) {
            case 'C':
              X.trim().length && (f[N][W] = X.replace(/\s+$/, ''));
              break;
            case 'D':
              X.length === 8
                ? (f[N][W] = new Date(
                    +X.slice(0, 4),
                    +X.slice(4, 6) - 1,
                    +X.slice(6, 8),
                  ))
                : (f[N][W] = X);
              break;
            case 'F':
              f[N][W] = parseFloat(X.trim());
              break;
            case '+':
            case 'I':
              f[N][W] = x
                ? M.read_shift(-4, 'i') ^ 2147483648
                : M.read_shift(4, 'i');
              break;
            case 'L':
              switch (X.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  f[N][W] = !0;
                  break;
                case 'N':
                case 'F':
                  f[N][W] = !1;
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
                  'DBF Unexpected MEMO for type ' + h.toString(16),
                );
              f[N][W] =
                '##MEMO##' + (x ? parseInt(X.trim(), 10) : M.read_shift(4));
              break;
            case 'N':
              (X = X.replace(/\u0000/g, '').trim()),
                X && X != '.' && (f[N][W] = +X || 0);
              break;
            case '@':
              f[N][W] = new Date(M.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              f[N][W] = new Date(
                (M.read_shift(4) - 2440588) * 864e5 + M.read_shift(4),
              );
              break;
            case 'Y':
              f[N][W] =
                M.read_shift(4, 'i') / 1e4 +
                (M.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              f[N][W] = -M.read_shift(-8, 'f');
              break;
            case 'B':
              if (p && F[W].len == 8) {
                f[N][W] = M.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              M.l += F[W].len;
              break;
            case '0':
              if (F[W].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + F[W].type);
          }
        }
      }
      if (h != 2 && c.l < c.length && c[c.l++] != 26)
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
      var c = oi(e(o, f), f);
      return (
        (c['!cols'] = f.DBF.map(function (h) {
          return { wch: h.len, DBF: h };
        })),
        delete f.DBF,
        c
      );
    }
    function i(o, l) {
      try {
        return In(n(o, l), l);
      } catch (f) {
        if (l && l.WTF) throw f;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(o, l) {
      var f = l || {};
      if ((+f.codepage >= 0 && Ii(+f.codepage), f.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = qt(),
        h = Ua(o, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        p = h.slice(1),
        x = o['!cols'] || [],
        d = 0,
        m = 0,
        A = 0,
        D = 1;
      for (d = 0; d < u.length; ++d) {
        if (((x[d] || {}).DBF || {}).name) {
          (u[d] = x[d].DBF.name), ++A;
          continue;
        }
        if (u[d] != null) {
          if (
            (++A,
            typeof u[d] == 'number' && (u[d] = u[d].toString(10)),
            typeof u[d] != 'string')
          )
            throw new Error(
              'DBF Invalid column name ' + u[d] + ' |' + typeof u[d] + '|',
            );
          if (u.indexOf(u[d]) !== d) {
            for (m = 0; m < 1024; ++m)
              if (u.indexOf(u[d] + '_' + m) == -1) {
                u[d] += '_' + m;
                break;
              }
          }
        }
      }
      var F = rt(o['!ref']),
        k = [],
        j = [],
        ee = [];
      for (d = 0; d <= F.e.c - F.s.c; ++d) {
        var N = '',
          W = '',
          M = 0,
          X = [];
        for (m = 0; m < p.length; ++m) p[m][d] != null && X.push(p[m][d]);
        if (X.length == 0 || u[d] == null) {
          k[d] = '?';
          continue;
        }
        for (m = 0; m < X.length; ++m) {
          switch (typeof X[m]) {
            case 'number':
              W = 'B';
              break;
            case 'string':
              W = 'C';
              break;
            case 'boolean':
              W = 'L';
              break;
            case 'object':
              W = X[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              W = 'C';
          }
          (M = Math.max(M, String(X[m]).length)), (N = N && N != W ? 'C' : W);
        }
        M > 250 && (M = 250),
          (W = ((x[d] || {}).DBF || {}).type),
          W == 'C' && x[d].DBF.len > M && (M = x[d].DBF.len),
          N == 'B' &&
            W == 'N' &&
            ((N = 'N'), (ee[d] = x[d].DBF.dec), (M = x[d].DBF.len)),
          (j[d] = N == 'C' || W == 'N' ? M : a[N] || 0),
          (D += j[d]),
          (k[d] = N);
      }
      var K = c.next(32);
      for (
        K.write_shift(4, 318902576),
          K.write_shift(4, p.length),
          K.write_shift(2, 296 + 32 * A),
          K.write_shift(2, D),
          d = 0;
        d < 4;
        ++d
      )
        K.write_shift(4, 0);
      for (
        K.write_shift(4, 0 | ((+r[el] || 3) << 8)), d = 0, m = 0;
        d < u.length;
        ++d
      )
        if (u[d] != null) {
          var J = c.next(32),
            ne = (u[d].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          J.write_shift(1, ne, 'sbcs'),
            J.write_shift(1, k[d] == '?' ? 'C' : k[d], 'sbcs'),
            J.write_shift(4, m),
            J.write_shift(1, j[d] || a[k[d]] || 0),
            J.write_shift(1, ee[d] || 0),
            J.write_shift(1, 2),
            J.write_shift(4, 0),
            J.write_shift(1, 0),
            J.write_shift(4, 0),
            J.write_shift(4, 0),
            (m += j[d] || a[k[d]] || 0);
        }
      var ke = c.next(264);
      for (ke.write_shift(4, 13), d = 0; d < 65; ++d) ke.write_shift(4, 0);
      for (d = 0; d < p.length; ++d) {
        var _e = c.next(D);
        for (_e.write_shift(1, 0), m = 0; m < u.length; ++m)
          if (u[m] != null)
            switch (k[m]) {
              case 'L':
                _e.write_shift(1, p[d][m] == null ? 63 : p[d][m] ? 84 : 70);
                break;
              case 'B':
                _e.write_shift(8, p[d][m] || 0, 'f');
                break;
              case 'N':
                var nt = '0';
                for (
                  typeof p[d][m] == 'number' &&
                    (nt = p[d][m].toFixed(ee[m] || 0)),
                    A = 0;
                  A < j[m] - nt.length;
                  ++A
                )
                  _e.write_shift(1, 32);
                _e.write_shift(1, nt, 'sbcs');
                break;
              case 'D':
                p[d][m]
                  ? (_e.write_shift(
                      4,
                      ('0000' + p[d][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    _e.write_shift(
                      2,
                      ('00' + (p[d][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    _e.write_shift(
                      2,
                      ('00' + p[d][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : _e.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var Je = String(p[d][m] != null ? p[d][m] : '').slice(0, j[m]);
                for (
                  _e.write_shift(1, Je, 'sbcs'), A = 0;
                  A < j[m] - Je.length;
                  ++A
                )
                  _e.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  bp = (function () {
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
          Rt(t)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      e = function (u, p) {
        var x = t[p];
        return typeof x == 'number' ? oo(x) : x;
      },
      n = function (u, p, x) {
        var d = ((p.charCodeAt(0) - 32) << 4) | (x.charCodeAt(0) - 48);
        return d == 59 ? u : oo(d);
      };
    t['|'] = 254;
    function i(u, p) {
      switch (p.type) {
        case 'base64':
          return a(Qr(u), p);
        case 'binary':
          return a(u, p);
        case 'buffer':
          return a(je && Buffer.isBuffer(u) ? u.toString('binary') : Yi(u), p);
        case 'array':
          return a(ns(u), p);
      }
      throw new Error('Unrecognized type ' + p.type);
    }
    function a(u, p) {
      var x = u.split(/[\n\r]+/),
        d = -1,
        m = -1,
        A = 0,
        D = 0,
        F = [],
        k = [],
        j = null,
        ee = {},
        N = [],
        W = [],
        M = [],
        X = 0,
        K;
      for (+p.codepage >= 0 && Ii(+p.codepage); A !== x.length; ++A) {
        X = 0;
        var J = x[A].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(r, e),
          ne = J.replace(/;;/g, '\0')
            .split(';')
            .map(function (O) {
              return O.replace(/\u0000/g, ';');
            }),
          ke = ne[0],
          _e;
        if (J.length > 0)
          switch (ke) {
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
              ne[1].charAt(0) == 'P' && k.push(J.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var nt = !1,
                Je = !1,
                gt = !1,
                it = !1,
                St = -1,
                xt = -1;
              for (D = 1; D < ne.length; ++D)
                switch (ne[D].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(ne[D].slice(1)) - 1), (Je = !0);
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ne[D].slice(1)) - 1,
                        Je || (m = 0),
                        K = F.length;
                      K <= d;
                      ++K
                    )
                      F[K] = [];
                    break;
                  case 'K':
                    (_e = ne[D].slice(1)),
                      _e.charAt(0) === '"'
                        ? (_e = _e.slice(1, _e.length - 1))
                        : _e === 'TRUE'
                          ? (_e = !0)
                          : _e === 'FALSE'
                            ? (_e = !1)
                            : isNaN(qr(_e))
                              ? isNaN(Mi(_e).getDate()) || (_e = Wt(_e))
                              : ((_e = qr(_e)),
                                j !== null && hl(j) && (_e = vl(_e))),
                      (nt = !0);
                    break;
                  case 'E':
                    it = !0;
                    var C = kx(ne[D].slice(1), { r: d, c: m });
                    F[d][m] = [F[d][m], C];
                    break;
                  case 'S':
                    (gt = !0), (F[d][m] = [F[d][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    St = parseInt(ne[D].slice(1)) - 1;
                    break;
                  case 'C':
                    xt = parseInt(ne[D].slice(1)) - 1;
                    break;
                  default:
                    if (p && p.WTF) throw new Error('SYLK bad record ' + J);
                }
              if (
                (nt &&
                  (F[d][m] && F[d][m].length == 2
                    ? (F[d][m][0] = _e)
                    : (F[d][m] = _e),
                  (j = null)),
                gt)
              ) {
                if (it)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var U = St > -1 && F[St][xt];
                if (!U || !U[1])
                  throw new Error('SYLK shared formula cannot find base');
                F[d][m][1] = Ix(U[1], { r: d - St, c: m - xt });
              }
              break;
            case 'F':
              var I = 0;
              for (D = 1; D < ne.length; ++D)
                switch (ne[D].charAt(0)) {
                  case 'X':
                    (m = parseInt(ne[D].slice(1)) - 1), ++I;
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ne[D].slice(1)) - 1, K = F.length;
                      K <= d;
                      ++K
                    )
                      F[K] = [];
                    break;
                  case 'M':
                    X = parseInt(ne[D].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    j = k[parseInt(ne[D].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      M = ne[D].slice(1).split(' '), K = parseInt(M[0], 10);
                      K <= parseInt(M[1], 10);
                      ++K
                    )
                      (X = parseInt(M[2], 10)),
                        (W[K - 1] = X === 0 ? { hidden: !0 } : { wch: X }),
                        F0(W[K - 1]);
                    break;
                  case 'C':
                    (m = parseInt(ne[D].slice(1)) - 1), W[m] || (W[m] = {});
                    break;
                  case 'R':
                    (d = parseInt(ne[D].slice(1)) - 1),
                      N[d] || (N[d] = {}),
                      X > 0
                        ? ((N[d].hpt = X), (N[d].hpx = nc(X)))
                        : X === 0 && (N[d].hidden = !0);
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
        N.length > 0 && (ee['!rows'] = N),
        W.length > 0 && (ee['!cols'] = W),
        p && p.sheetRows && (F = F.slice(0, p.sheetRows)),
        [F, ee]
      );
    }
    function s(u, p) {
      var x = i(u, p),
        d = x[0],
        m = x[1],
        A = oi(d, p);
      return (
        Rt(m).forEach(function (D) {
          A[D] = m[D];
        }),
        A
      );
    }
    function o(u, p) {
      return In(s(u, p), p);
    }
    function l(u, p, x, d) {
      var m = 'C;Y' + (x + 1) + ';X' + (d + 1) + ';K';
      switch (u.t) {
        case 'n':
          (m += u.v || 0), u.f && !u.F && (m += ';E' + O0(u.f, { r: x, c: d }));
          break;
        case 'b':
          m += u.v ? 'TRUE' : 'FALSE';
          break;
        case 'e':
          m += u.w || u.v;
          break;
        case 'd':
          m += '"' + (u.w || u.v) + '"';
          break;
        case 's':
          m += '"' + u.v.replace(/"/g, '').replace(/;/g, ';;') + '"';
          break;
      }
      return m;
    }
    function f(u, p) {
      p.forEach(function (x, d) {
        var m = 'F;W' + (d + 1) + ' ' + (d + 1) + ' ';
        x.hidden
          ? (m += '0')
          : (typeof x.width == 'number' && !x.wpx && (x.wpx = Ma(x.width)),
            typeof x.wpx == 'number' && !x.wch && (x.wch = Pa(x.wpx)),
            typeof x.wch == 'number' && (m += Math.round(x.wch))),
          m.charAt(m.length - 1) != ' ' && u.push(m);
      });
    }
    function c(u, p) {
      p.forEach(function (x, d) {
        var m = 'F;';
        x.hidden
          ? (m += 'M0;')
          : x.hpt
            ? (m += 'M' + 20 * x.hpt + ';')
            : x.hpx && (m += 'M' + 20 * La(x.hpx) + ';'),
          m.length > 2 && u.push(m + 'R' + (d + 1));
      });
    }
    function h(u, p) {
      var x = ['ID;PWXL;N;E'],
        d = [],
        m = rt(u['!ref']),
        A,
        D = Array.isArray(u),
        F = `\r
`;
      x.push('P;PGeneral'),
        x.push('F;P0;DG0G8;M255'),
        u['!cols'] && f(x, u['!cols']),
        u['!rows'] && c(x, u['!rows']),
        x.push(
          'B;Y' +
            (m.e.r - m.s.r + 1) +
            ';X' +
            (m.e.c - m.s.c + 1) +
            ';D' +
            [m.s.c, m.s.r, m.e.c, m.e.r].join(' '),
        );
      for (var k = m.s.r; k <= m.e.r; ++k)
        for (var j = m.s.c; j <= m.e.c; ++j) {
          var ee = Ke({ r: k, c: j });
          (A = D ? (u[k] || [])[j] : u[ee]),
            !(!A || (A.v == null && (!A.f || A.F))) && d.push(l(A, u, k, j));
        }
      return x.join(F) + F + d.join(F) + F + 'E' + F;
    }
    return { to_workbook: o, to_sheet: s, from_sheet: h };
  })(),
  Mp = (function () {
    function t(a, s) {
      switch (s.type) {
        case 'base64':
          return r(Qr(a), s);
        case 'binary':
          return r(a, s);
        case 'buffer':
          return r(je && Buffer.isBuffer(a) ? a.toString('binary') : Yi(a), s);
        case 'array':
          return r(ns(a), s);
      }
      throw new Error('Unrecognized type ' + s.type);
    }
    function r(a, s) {
      for (
        var o = a.split(`
`),
          l = -1,
          f = -1,
          c = 0,
          h = [];
        c !== o.length;
        ++c
      ) {
        if (o[c].trim() === 'BOT') {
          (h[++l] = []), (f = 0);
          continue;
        }
        if (!(l < 0)) {
          var u = o[c].trim().split(','),
            p = u[0],
            x = u[1];
          ++c;
          for (
            var d = o[c] || '';
            (d.match(/["]/g) || []).length & 1 && c < o.length - 1;

          )
            d +=
              `
` + o[++c];
          switch (((d = d.trim()), +p)) {
            case -1:
              if (d === 'BOT') {
                (h[++l] = []), (f = 0);
                continue;
              } else if (d !== 'EOD')
                throw new Error('Unrecognized DIF special command ' + d);
              break;
            case 0:
              d === 'TRUE'
                ? (h[l][f] = !0)
                : d === 'FALSE'
                  ? (h[l][f] = !1)
                  : isNaN(qr(x))
                    ? isNaN(Mi(x).getDate())
                      ? (h[l][f] = x)
                      : (h[l][f] = Wt(x))
                    : (h[l][f] = qr(x)),
                ++f;
              break;
            case 1:
              (d = d.slice(1, d.length - 1)),
                (d = d.replace(/""/g, '"')),
                d && d.match(/^=".*"$/) && (d = d.slice(2, -1)),
                (h[l][f++] = d !== '' ? d : null);
              break;
          }
          if (d === 'EOD') break;
        }
      }
      return s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h;
    }
    function e(a, s) {
      return oi(t(a, s), s);
    }
    function n(a, s) {
      return In(e(a, s), s);
    }
    var i = (function () {
      var a = function (l, f, c, h, u) {
          l.push(f),
            l.push(c + ',' + h),
            l.push('"' + u.replace(/"/g, '""') + '"');
        },
        s = function (l, f, c, h) {
          l.push(f + ',' + c),
            l.push(f == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
        };
      return function (l) {
        var f = [],
          c = rt(l['!ref']),
          h,
          u = Array.isArray(l);
        a(f, 'TABLE', 0, 1, 'sheetjs'),
          a(f, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(f, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(f, 'DATA', 0, 0, '');
        for (var p = c.s.r; p <= c.e.r; ++p) {
          s(f, -1, 0, 'BOT');
          for (var x = c.s.c; x <= c.e.c; ++x) {
            var d = Ke({ r: p, c: x });
            if (((h = u ? (l[p] || [])[x] : l[d]), !h)) {
              s(f, 1, 0, '');
              continue;
            }
            switch (h.t) {
              case 'n':
                var m = h.w;
                !m && h.v != null && (m = h.v),
                  m == null
                    ? h.f && !h.F
                      ? s(f, 1, 0, '=' + h.f)
                      : s(f, 1, 0, '')
                    : s(f, 0, m, 'V');
                break;
              case 'b':
                s(f, 0, h.v ? 1 : 0, h.v ? 'TRUE' : 'FALSE');
                break;
              case 's':
                s(f, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
                break;
              case 'd':
                h.w || (h.w = dn(h.z || ft[14], Jt(Wt(h.v)))),
                  s(f, 0, h.w, 'V');
                break;
              default:
                s(f, 1, 0, '');
            }
          }
        }
        s(f, -1, 0, 'EOD');
        var A = `\r
`,
          D = f.join(A);
        return D;
      };
    })();
    return { to_workbook: n, to_sheet: e, from_sheet: i };
  })(),
  Ql = (function () {
    function t(h) {
      return h
        .replace(/\\b/g, '\\')
        .replace(/\\c/g, ':')
        .replace(
          /\\n/g,
          `
`,
        );
    }
    function r(h) {
      return h.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n');
    }
    function e(h, u) {
      for (
        var p = h.split(`
`),
          x = -1,
          d = -1,
          m = 0,
          A = [];
        m !== p.length;
        ++m
      ) {
        var D = p[m].trim().split(':');
        if (D[0] === 'cell') {
          var F = Et(D[1]);
          if (A.length <= F.r)
            for (x = A.length; x <= F.r; ++x) A[x] || (A[x] = []);
          switch (((x = F.r), (d = F.c), D[2])) {
            case 't':
              A[x][d] = t(D[3]);
              break;
            case 'v':
              A[x][d] = +D[3];
              break;
            case 'vtf':
              var k = D[D.length - 1];
            case 'vtc':
              switch (D[3]) {
                case 'nl':
                  A[x][d] = !!+D[4];
                  break;
                default:
                  A[x][d] = +D[4];
                  break;
              }
              D[2] == 'vtf' && (A[x][d] = [A[x][d], k]);
          }
        }
      }
      return u && u.sheetRows && (A = A.slice(0, u.sheetRows)), A;
    }
    function n(h, u) {
      return oi(e(h, u), u);
    }
    function i(h, u) {
      return In(n(h, u), u);
    }
    var a = [
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
    function f(h) {
      if (!h || !h['!ref']) return '';
      for (
        var u = [],
          p = [],
          x,
          d = '',
          m = cr(h['!ref']),
          A = Array.isArray(h),
          D = m.s.r;
        D <= m.e.r;
        ++D
      )
        for (var F = m.s.c; F <= m.e.c; ++F)
          if (
            ((d = Ke({ r: D, c: F })),
            (x = A ? (h[D] || [])[F] : h[d]),
            !(!x || x.v == null || x.t === 'z'))
          ) {
            switch (((p = ['cell', d, 't']), x.t)) {
              case 's':
              case 'str':
                p.push(r(x.v));
                break;
              case 'n':
                x.f
                  ? ((p[2] = 'vtf'),
                    (p[3] = 'n'),
                    (p[4] = x.v),
                    (p[5] = r(x.f)))
                  : ((p[2] = 'v'), (p[3] = x.v));
                break;
              case 'b':
                (p[2] = 'vt' + (x.f ? 'f' : 'c')),
                  (p[3] = 'nl'),
                  (p[4] = x.v ? '1' : '0'),
                  (p[5] = r(x.f || (x.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var k = Jt(Wt(x.v));
                (p[2] = 'vtc'),
                  (p[3] = 'nd'),
                  (p[4] = '' + k),
                  (p[5] = x.w || dn(x.z || ft[14], k));
                break;
              case 'e':
                continue;
            }
            u.push(p.join(':'));
          }
      return (
        u.push(
          'sheet:c:' +
            (m.e.c - m.s.c + 1) +
            ':r:' +
            (m.e.r - m.s.r + 1) +
            ':tvf:1',
        ),
        u.push('valueformat:1:text-wiki'),
        u.join(`
`)
      );
    }
    function c(h) {
      return [a, s, o, s, f(h), l].join(`
`);
    }
    return { to_workbook: i, to_sheet: n, from_sheet: c };
  })(),
  Pp = (function () {
    function t(c, h, u, p, x) {
      x.raw
        ? (h[u][p] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (h[u][p] = !0)
            : c === 'FALSE'
              ? (h[u][p] = !1)
              : isNaN(qr(c))
                ? isNaN(Mi(c).getDate())
                  ? (h[u][p] = c)
                  : (h[u][p] = Wt(c))
                : (h[u][p] = qr(c)));
    }
    function r(c, h) {
      var u = h || {},
        p = [];
      if (!c || c.length === 0) return p;
      for (
        var x = c.split(/[\r\n]/), d = x.length - 1;
        d >= 0 && x[d].length === 0;

      )
        --d;
      for (var m = 10, A = 0, D = 0; D <= d; ++D)
        (A = x[D].indexOf(' ')),
          A == -1 ? (A = x[D].length) : A++,
          (m = Math.max(m, A));
      for (D = 0; D <= d; ++D) {
        p[D] = [];
        var F = 0;
        for (
          t(x[D].slice(0, m).trim(), p, D, F, u), F = 1;
          F <= (x[D].length - m) / 10 + 1;
          ++F
        )
          t(x[D].slice(m + (F - 1) * 10, m + F * 10).trim(), p, D, F, u);
      }
      return u.sheetRows && (p = p.slice(0, u.sheetRows)), p;
    }
    var e = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var h = {}, u = !1, p = 0, x = 0; p < c.length; ++p)
        (x = c.charCodeAt(p)) == 34
          ? (u = !u)
          : !u && x in e && (h[x] = (h[x] || 0) + 1);
      x = [];
      for (p in h)
        Object.prototype.hasOwnProperty.call(h, p) && x.push([h[p], p]);
      if (!x.length) {
        h = n;
        for (p in h)
          Object.prototype.hasOwnProperty.call(h, p) && x.push([h[p], p]);
      }
      return (
        x.sort(function (d, m) {
          return d[0] - m[0] || n[d[1]] - n[m[1]];
        }),
        e[x.pop()[1]] || 44
      );
    }
    function a(c, h) {
      var u = h || {},
        p = '',
        x = u.dense ? [] : {},
        d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((p = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((p = c.charAt(4)), (c = c.slice(6)))
            : (p = i(c.slice(0, 1024)))
        : u && u.FS
          ? (p = u.FS)
          : (p = i(c.slice(0, 1024)));
      var m = 0,
        A = 0,
        D = 0,
        F = 0,
        k = 0,
        j = p.charCodeAt(0),
        ee = !1,
        N = 0,
        W = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var M = u.dateNF != null ? Z1(u.dateNF) : null;
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
            : bx(K)
              ? ((J.t = 'n'), (J.f = K.slice(1)))
              : ((J.t = 's'), (J.v = K));
        else if (K == 'TRUE') (J.t = 'b'), (J.v = !0);
        else if (K == 'FALSE') (J.t = 'b'), (J.v = !1);
        else if (!isNaN((D = qr(K))))
          (J.t = 'n'), u.cellText !== !1 && (J.w = K), (J.v = D);
        else if (!isNaN(Mi(K).getDate()) || (M && K.match(M))) {
          J.z = u.dateNF || ft[14];
          var ne = 0;
          M &&
            K.match(M) &&
            ((K = Q1(K, u.dateNF, K.match(M) || [])), (ne = 1)),
            u.cellDates
              ? ((J.t = 'd'), (J.v = Wt(K, ne)))
              : ((J.t = 'n'), (J.v = Jt(Wt(K, ne)))),
            u.cellText !== !1 &&
              (J.w = dn(J.z, J.v instanceof Date ? Jt(J.v) : J.v)),
            u.cellNF || delete J.z;
        } else (J.t = 's'), (J.v = K);
        if (
          (J.t == 'z' ||
            (u.dense
              ? (x[m] || (x[m] = []), (x[m][A] = J))
              : (x[Ke({ c: A, r: m })] = J)),
          (F = k + 1),
          (W = c.charCodeAt(F)),
          d.e.c < A && (d.e.c = A),
          d.e.r < m && (d.e.r = m),
          N == j)
        )
          ++A;
        else if (((A = 0), ++m, u.sheetRows && u.sheetRows <= m)) return !0;
      }
      e: for (; k < c.length; ++k)
        switch ((N = c.charCodeAt(k))) {
          case 34:
            W === 34 && (ee = !ee);
            break;
          case j:
          case 10:
          case 13:
            if (!ee && X()) break e;
            break;
        }
      return k - F > 0 && X(), (x['!ref'] = ht(d)), x;
    }
    function s(c, h) {
      return !(h && h.PRN) ||
        h.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, h)
        : oi(r(c, h), h);
    }
    function o(c, h) {
      var u = '',
        p = h.type == 'string' ? [0, 0, 0, 0] : K2(c, h);
      switch (h.type) {
        case 'base64':
          u = Qr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          h.codepage == 65001
            ? (u = c.toString('utf8'))
            : (h.codepage && typeof Ca < 'u') ||
              (u = je && Buffer.isBuffer(c) ? c.toString('binary') : Yi(c));
          break;
        case 'array':
          u = ns(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + h.type);
      }
      return (
        p[0] == 239 && p[1] == 187 && p[2] == 191
          ? (u = Ti(u.slice(3)))
          : h.type != 'string' && h.type != 'buffer' && h.codepage == 65001
            ? (u = Ti(u))
            : h.type == 'binary' && typeof Ca < 'u',
        u.slice(0, 19) == 'socialcalc:version:'
          ? Ql.to_sheet(h.type == 'string' ? u : Ti(u), h)
          : s(u, h)
      );
    }
    function l(c, h) {
      return In(o(c, h), h);
    }
    function f(c) {
      for (
        var h = [], u = rt(c['!ref']), p, x = Array.isArray(c), d = u.s.r;
        d <= u.e.r;
        ++d
      ) {
        for (var m = [], A = u.s.c; A <= u.e.c; ++A) {
          var D = Ke({ r: d, c: A });
          if (((p = x ? (c[d] || [])[A] : c[D]), !p || p.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var F = (p.w || (en(p), p.w) || '').slice(0, 10);
            F.length < 10;

          )
            F += ' ';
          m.push(F + (A === 0 ? ' ' : ''));
        }
        h.push(m.join(''));
      }
      return h.join(`
`);
    }
    return { to_workbook: l, to_sheet: o, from_sheet: f };
  })(),
  Uo = (function () {
    function t(C, U, I) {
      if (C) {
        ar(C, C.l || 0);
        for (var O = I.Enum || St; C.l < C.length; ) {
          var q = C.read_shift(2),
            xe = O[q] || O[65535],
            ve = C.read_shift(2),
            de = C.l + ve,
            fe = xe.f && xe.f(C, ve, I);
          if (((C.l = de), U(fe, xe, q))) return;
        }
      }
    }
    function r(C, U) {
      switch (U.type) {
        case 'base64':
          return e(Cr(Qr(C)), U);
        case 'binary':
          return e(Cr(C), U);
        case 'buffer':
        case 'array':
          return e(C, U);
      }
      throw 'Unsupported type ' + U.type;
    }
    function e(C, U) {
      if (!C) return C;
      var I = U || {},
        O = I.dense ? [] : {},
        q = 'Sheet1',
        xe = '',
        ve = 0,
        de = {},
        fe = [],
        Me = [],
        Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        lt = I.sheetRows || 0;
      if (
        C[2] == 0 &&
        (C[3] == 8 || C[3] == 9) &&
        C.length >= 16 &&
        C[14] == 5 &&
        C[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (C[2] == 2)
        (I.Enum = St),
          t(
            C,
            function (pe, yt, At) {
              switch (At) {
                case 0:
                  (I.vers = pe), pe >= 4096 && (I.qpro = !0);
                  break;
                case 6:
                  Ce = pe;
                  break;
                case 204:
                  pe && (xe = pe);
                  break;
                case 222:
                  xe = pe;
                  break;
                case 15:
                case 51:
                  I.qpro || (pe[1].v = pe[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  At == 14 &&
                    (pe[2] & 112) == 112 &&
                    (pe[2] & 15) > 1 &&
                    (pe[2] & 15) < 15 &&
                    ((pe[1].z = I.dateNF || ft[14]),
                    I.cellDates && ((pe[1].t = 'd'), (pe[1].v = vl(pe[1].v)))),
                    I.qpro &&
                      pe[3] > ve &&
                      ((O['!ref'] = ht(Ce)),
                      (de[q] = O),
                      fe.push(q),
                      (O = I.dense ? [] : {}),
                      (Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ve = pe[3]),
                      (q = xe || 'Sheet' + (ve + 1)),
                      (xe = ''));
                  var wr = I.dense ? (O[pe[0].r] || [])[pe[0].c] : O[Ke(pe[0])];
                  if (wr) {
                    (wr.t = pe[1].t),
                      (wr.v = pe[1].v),
                      pe[1].z != null && (wr.z = pe[1].z),
                      pe[1].f != null && (wr.f = pe[1].f);
                    break;
                  }
                  I.dense
                    ? (O[pe[0].r] || (O[pe[0].r] = []),
                      (O[pe[0].r][pe[0].c] = pe[1]))
                    : (O[Ke(pe[0])] = pe[1]);
                  break;
              }
            },
            I,
          );
      else if (C[2] == 26 || C[2] == 14)
        (I.Enum = xt),
          C[2] == 14 && ((I.qpro = !0), (C.l = 0)),
          t(
            C,
            function (pe, yt, At) {
              switch (At) {
                case 204:
                  q = pe;
                  break;
                case 22:
                  pe[1].v = pe[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (pe[3] > ve &&
                      ((O['!ref'] = ht(Ce)),
                      (de[q] = O),
                      fe.push(q),
                      (O = I.dense ? [] : {}),
                      (Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ve = pe[3]),
                      (q = 'Sheet' + (ve + 1))),
                    lt > 0 && pe[0].r >= lt)
                  )
                    break;
                  I.dense
                    ? (O[pe[0].r] || (O[pe[0].r] = []),
                      (O[pe[0].r][pe[0].c] = pe[1]))
                    : (O[Ke(pe[0])] = pe[1]),
                    Ce.e.c < pe[0].c && (Ce.e.c = pe[0].c),
                    Ce.e.r < pe[0].r && (Ce.e.r = pe[0].r);
                  break;
                case 27:
                  pe[14e3] && (Me[pe[14e3][0]] = pe[14e3][1]);
                  break;
                case 1537:
                  (Me[pe[0]] = pe[1]), pe[0] == ve && (q = pe[1]);
                  break;
              }
            },
            I,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + C[2]);
      if (
        ((O['!ref'] = ht(Ce)), (de[xe || q] = O), fe.push(xe || q), !Me.length)
      )
        return { SheetNames: fe, Sheets: de };
      for (var be = {}, Pt = [], Ze = 0; Ze < Me.length; ++Ze)
        de[fe[Ze]]
          ? (Pt.push(Me[Ze] || fe[Ze]), (be[Me[Ze]] = de[Me[Ze]] || de[fe[Ze]]))
          : (Pt.push(Me[Ze]), (be[Me[Ze]] = { '!ref': 'A1' }));
      return { SheetNames: Pt, Sheets: be };
    }
    function n(C, U) {
      var I = U || {};
      if ((+I.codepage >= 0 && Ii(+I.codepage), I.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var O = qt(),
        q = rt(C['!ref']),
        xe = Array.isArray(C),
        ve = [];
      ae(O, 0, a(1030)), ae(O, 6, l(q));
      for (var de = Math.min(q.e.r, 8191), fe = q.s.r; fe <= de; ++fe)
        for (var Me = Nt(fe), Ce = q.s.c; Ce <= q.e.c; ++Ce) {
          fe === q.s.r && (ve[Ce] = bt(Ce));
          var lt = ve[Ce] + Me,
            be = xe ? (C[fe] || [])[Ce] : C[lt];
          if (!(!be || be.t == 'z'))
            if (be.t == 'n')
              (be.v | 0) == be.v && be.v >= -32768 && be.v <= 32767
                ? ae(O, 13, p(fe, Ce, be.v))
                : ae(O, 14, d(fe, Ce, be.v));
            else {
              var Pt = en(be);
              ae(O, 15, h(fe, Ce, Pt.slice(0, 239)));
            }
        }
      return ae(O, 1), O.end();
    }
    function i(C, U) {
      var I = U || {};
      if ((+I.codepage >= 0 && Ii(+I.codepage), I.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var O = qt();
      ae(O, 0, s(C));
      for (var q = 0, xe = 0; q < C.SheetNames.length; ++q)
        (C.Sheets[C.SheetNames[q]] || {})['!ref'] &&
          ae(O, 27, it(C.SheetNames[q], xe++));
      var ve = 0;
      for (q = 0; q < C.SheetNames.length; ++q) {
        var de = C.Sheets[C.SheetNames[q]];
        if (!(!de || !de['!ref'])) {
          for (
            var fe = rt(de['!ref']),
              Me = Array.isArray(de),
              Ce = [],
              lt = Math.min(fe.e.r, 8191),
              be = fe.s.r;
            be <= lt;
            ++be
          )
            for (var Pt = Nt(be), Ze = fe.s.c; Ze <= fe.e.c; ++Ze) {
              be === fe.s.r && (Ce[Ze] = bt(Ze));
              var pe = Ce[Ze] + Pt,
                yt = Me ? (de[be] || [])[Ze] : de[pe];
              if (!(!yt || yt.t == 'z'))
                if (yt.t == 'n') ae(O, 23, X(be, Ze, ve, yt.v));
                else {
                  var At = en(yt);
                  ae(O, 22, N(be, Ze, ve, At.slice(0, 239)));
                }
            }
          ++ve;
        }
      }
      return ae(O, 1), O.end();
    }
    function a(C) {
      var U = G(2);
      return U.write_shift(2, C), U;
    }
    function s(C) {
      var U = G(26);
      U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
      for (var I = 0, O = 0, q = 0, xe = 0; xe < C.SheetNames.length; ++xe) {
        var ve = C.SheetNames[xe],
          de = C.Sheets[ve];
        if (!(!de || !de['!ref'])) {
          ++q;
          var fe = cr(de['!ref']);
          I < fe.e.r && (I = fe.e.r), O < fe.e.c && (O = fe.e.c);
        }
      }
      return (
        I > 8191 && (I = 8191),
        U.write_shift(2, I),
        U.write_shift(1, q),
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
    function o(C, U, I) {
      var O = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return U == 8 && I.qpro
        ? ((O.s.c = C.read_shift(1)),
          C.l++,
          (O.s.r = C.read_shift(2)),
          (O.e.c = C.read_shift(1)),
          C.l++,
          (O.e.r = C.read_shift(2)),
          O)
        : ((O.s.c = C.read_shift(2)),
          (O.s.r = C.read_shift(2)),
          U == 12 && I.qpro && (C.l += 2),
          (O.e.c = C.read_shift(2)),
          (O.e.r = C.read_shift(2)),
          U == 12 && I.qpro && (C.l += 2),
          O.s.c == 65535 && (O.s.c = O.e.c = O.s.r = O.e.r = 0),
          O);
    }
    function l(C) {
      var U = G(8);
      return (
        U.write_shift(2, C.s.c),
        U.write_shift(2, C.s.r),
        U.write_shift(2, C.e.c),
        U.write_shift(2, C.e.r),
        U
      );
    }
    function f(C, U, I) {
      var O = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        I.qpro && I.vers != 20768
          ? ((O[0].c = C.read_shift(1)),
            (O[3] = C.read_shift(1)),
            (O[0].r = C.read_shift(2)),
            (C.l += 2))
          : ((O[2] = C.read_shift(1)),
            (O[0].c = C.read_shift(2)),
            (O[0].r = C.read_shift(2))),
        O
      );
    }
    function c(C, U, I) {
      var O = C.l + U,
        q = f(C, U, I);
      if (((q[1].t = 's'), I.vers == 20768)) {
        C.l++;
        var xe = C.read_shift(1);
        return (q[1].v = C.read_shift(xe, 'utf8')), q;
      }
      return I.qpro && C.l++, (q[1].v = C.read_shift(O - C.l, 'cstr')), q;
    }
    function h(C, U, I) {
      var O = G(7 + I.length);
      O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, C),
        O.write_shift(1, 39);
      for (var q = 0; q < O.length; ++q) {
        var xe = I.charCodeAt(q);
        O.write_shift(1, xe >= 128 ? 95 : xe);
      }
      return O.write_shift(1, 0), O;
    }
    function u(C, U, I) {
      var O = f(C, U, I);
      return (O[1].v = C.read_shift(2, 'i')), O;
    }
    function p(C, U, I) {
      var O = G(7);
      return (
        O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, C),
        O.write_shift(2, I, 'i'),
        O
      );
    }
    function x(C, U, I) {
      var O = f(C, U, I);
      return (O[1].v = C.read_shift(8, 'f')), O;
    }
    function d(C, U, I) {
      var O = G(13);
      return (
        O.write_shift(1, 255),
        O.write_shift(2, U),
        O.write_shift(2, C),
        O.write_shift(8, I, 'f'),
        O
      );
    }
    function m(C, U, I) {
      var O = C.l + U,
        q = f(C, U, I);
      if (((q[1].v = C.read_shift(8, 'f')), I.qpro)) C.l = O;
      else {
        var xe = C.read_shift(2);
        k(C.slice(C.l, C.l + xe), q), (C.l += xe);
      }
      return q;
    }
    function A(C, U, I) {
      var O = U & 32768;
      return (
        (U &= -32769),
        (U = (O ? C : 0) + (U >= 8192 ? U - 16384 : U)),
        (O ? '' : '$') + (I ? bt(U) : Nt(U))
      );
    }
    var D = {
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
    function k(C, U) {
      ar(C, 0);
      for (
        var I = [], O = 0, q = '', xe = '', ve = '', de = '';
        C.l < C.length;

      ) {
        var fe = C[C.l++];
        switch (fe) {
          case 0:
            I.push(C.read_shift(8, 'f'));
            break;
          case 1:
            (xe = A(U[0].c, C.read_shift(2), !0)),
              (q = A(U[0].r, C.read_shift(2), !1)),
              I.push(xe + q);
            break;
          case 2:
            {
              var Me = A(U[0].c, C.read_shift(2), !0),
                Ce = A(U[0].r, C.read_shift(2), !1);
              (xe = A(U[0].c, C.read_shift(2), !0)),
                (q = A(U[0].r, C.read_shift(2), !1)),
                I.push(Me + Ce + ':' + xe + q);
            }
            break;
          case 3:
            if (C.l < C.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            I.push('(' + I.pop() + ')');
            break;
          case 5:
            I.push(C.read_shift(2));
            break;
          case 6:
            {
              for (var lt = ''; (fe = C[C.l++]); )
                lt += String.fromCharCode(fe);
              I.push('"' + lt.replace(/"/g, '""') + '"');
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
            (de = I.pop()),
              (ve = I.pop()),
              I.push(['AND', 'OR'][fe - 20] + '(' + ve + ',' + de + ')');
            break;
          default:
            if (fe < 32 && F[fe])
              (de = I.pop()), (ve = I.pop()), I.push(ve + F[fe] + de);
            else if (D[fe]) {
              if (((O = D[fe][1]), O == 69 && (O = C[C.l++]), O > I.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    fe.toString(16) +
                    ':|' +
                    I.join('|') +
                    '|',
                );
                return;
              }
              var be = I.slice(-O);
              (I.length -= O), I.push(D[fe][0] + '(' + be.join(',') + ')');
            } else
              return fe <= 7
                ? console.error('WK1 invalid opcode ' + fe.toString(16))
                : fe <= 24
                  ? console.error('WK1 unsupported op ' + fe.toString(16))
                  : fe <= 30
                    ? console.error('WK1 invalid opcode ' + fe.toString(16))
                    : fe <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + fe.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + fe.toString(16),
                        );
        }
      }
      I.length == 1
        ? (U[1].f = '' + I[0])
        : console.error('WK1 bad formula parse |' + I.join('|') + '|');
    }
    function j(C) {
      var U = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (U[0].r = C.read_shift(2)), (U[3] = C[C.l++]), (U[0].c = C[C.l++]), U
      );
    }
    function ee(C, U) {
      var I = j(C);
      return (I[1].t = 's'), (I[1].v = C.read_shift(U - 4, 'cstr')), I;
    }
    function N(C, U, I, O) {
      var q = G(6 + O.length);
      q.write_shift(2, C),
        q.write_shift(1, I),
        q.write_shift(1, U),
        q.write_shift(1, 39);
      for (var xe = 0; xe < O.length; ++xe) {
        var ve = O.charCodeAt(xe);
        q.write_shift(1, ve >= 128 ? 95 : ve);
      }
      return q.write_shift(1, 0), q;
    }
    function W(C, U) {
      var I = j(C);
      I[1].v = C.read_shift(2);
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
    function M(C, U) {
      var I = j(C),
        O = C.read_shift(4),
        q = C.read_shift(4),
        xe = C.read_shift(2);
      if (xe == 65535)
        return (
          O === 0 && q === 3221225472
            ? ((I[1].t = 'e'), (I[1].v = 15))
            : O === 0 && q === 3489660928
              ? ((I[1].t = 'e'), (I[1].v = 42))
              : (I[1].v = 0),
          I
        );
      var ve = xe & 32768;
      return (
        (xe = (xe & 32767) - 16446),
        (I[1].v =
          (1 - ve * 2) * (q * Math.pow(2, xe + 32) + O * Math.pow(2, xe))),
        I
      );
    }
    function X(C, U, I, O) {
      var q = G(14);
      if (
        (q.write_shift(2, C), q.write_shift(1, I), q.write_shift(1, U), O == 0)
      )
        return (
          q.write_shift(4, 0), q.write_shift(4, 0), q.write_shift(2, 65535), q
        );
      var xe = 0,
        ve = 0,
        de = 0,
        fe = 0;
      return (
        O < 0 && ((xe = 1), (O = -O)),
        (ve = Math.log2(O) | 0),
        (O /= Math.pow(2, ve - 31)),
        (fe = O >>> 0),
        (fe & 2147483648) == 0 && ((O /= 2), ++ve, (fe = O >>> 0)),
        (O -= fe),
        (fe |= 2147483648),
        (fe >>>= 0),
        (O *= Math.pow(2, 32)),
        (de = O >>> 0),
        q.write_shift(4, de),
        q.write_shift(4, fe),
        (ve += 16383 + (xe ? 32768 : 0)),
        q.write_shift(2, ve),
        q
      );
    }
    function K(C, U) {
      var I = M(C);
      return (C.l += U - 14), I;
    }
    function J(C, U) {
      var I = j(C),
        O = C.read_shift(4);
      return (I[1].v = O >> 6), I;
    }
    function ne(C, U) {
      var I = j(C),
        O = C.read_shift(8, 'f');
      return (I[1].v = O), I;
    }
    function ke(C, U) {
      var I = ne(C);
      return (C.l += U - 10), I;
    }
    function _e(C, U) {
      return C[C.l + U - 1] == 0 ? C.read_shift(U, 'cstr') : '';
    }
    function nt(C, U) {
      var I = C[C.l++];
      I > U - 1 && (I = U - 1);
      for (var O = ''; O.length < I; ) O += String.fromCharCode(C[C.l++]);
      return O;
    }
    function Je(C, U, I) {
      if (!(!I.qpro || U < 21)) {
        var O = C.read_shift(1);
        (C.l += 17), (C.l += 1), (C.l += 2);
        var q = C.read_shift(U - 21, 'cstr');
        return [O, q];
      }
    }
    function gt(C, U) {
      for (var I = {}, O = C.l + U; C.l < O; ) {
        var q = C.read_shift(2);
        if (q == 14e3) {
          for (I[q] = [0, ''], I[q][0] = C.read_shift(2); C[C.l]; )
            (I[q][1] += String.fromCharCode(C[C.l])), C.l++;
          C.l++;
        }
      }
      return I;
    }
    function it(C, U) {
      var I = G(5 + C.length);
      I.write_shift(2, 14e3), I.write_shift(2, U);
      for (var O = 0; O < C.length; ++O) {
        var q = C.charCodeAt(O);
        I[I.l++] = q > 127 ? 95 : q;
      }
      return (I[I.l++] = 0), I;
    }
    var St = {
        0: { n: 'BOF', f: Kl },
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
        14: { n: 'NUMBER', f: x },
        15: { n: 'LABEL', f: c },
        16: { n: 'FORMULA', f: m },
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
        204: { n: 'SHEETNAMECS', f: _e },
        222: { n: 'SHEETNAMELP', f: nt },
        65535: { n: '' },
      },
      xt = {
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
        22: { n: 'LABEL16', f: ee },
        23: { n: 'NUMBER17', f: M },
        24: { n: 'NUMBER18', f: W },
        25: { n: 'FORMULA19', f: K },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: gt },
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
        39: { n: 'NUMBER27', f: ne },
        40: { n: 'FORMULA28', f: ke },
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
        204: { n: 'SHEETNAMECS', f: _e },
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
        1537: { n: 'SHEETINFOQP', f: Je },
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
    return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
  })(),
  Lp = /^\s|\s$|[\t\n\r]/;
function ec(t, r) {
  if (!r.bookSST) return '';
  var e = [pt];
  e[e.length] = ie('sst', null, {
    xmlns: si[0],
    count: t.Count,
    uniqueCount: t.Unique,
  });
  for (var n = 0; n != t.length; ++n)
    if (t[n] != null) {
      var i = t[n],
        a = '<si>';
      i.r
        ? (a += i.r)
        : ((a += '<t'),
          i.t || (i.t = ''),
          i.t.match(Lp) && (a += ' xml:space="preserve"'),
          (a += '>' + Xe(i.t) + '</t>')),
        (a += '</si>'),
        (e[e.length] = a);
    }
  return (
    e.length > 2 &&
      ((e[e.length] = '</sst>'), (e[1] = e[1].replace('/>', '>'))),
    e.join('')
  );
}
function Bp(t) {
  return [t.read_shift(4), t.read_shift(4)];
}
function Up(t, r) {
  return (
    r || (r = G(8)), r.write_shift(4, t.Count), r.write_shift(4, t.Unique), r
  );
}
var Hp = Nd;
function Wp(t) {
  var r = qt();
  Z(r, 159, Up(t));
  for (var e = 0; e < t.length; ++e) Z(r, 19, Hp(t[e]));
  return Z(r, 160), r.end();
}
function Vp(t) {
  for (var r = [], e = t.split(''), n = 0; n < e.length; ++n)
    r[n] = e[n].charCodeAt(0);
  return r;
}
function tc(t) {
  var r = 0,
    e,
    n = Vp(t),
    i = n.length + 1,
    a,
    s,
    o,
    l,
    f;
  for (e = Dn(i), e[0] = n.length, a = 1; a != i; ++a) e[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = e[a]),
      (o = (r & 16384) === 0 ? 0 : 1),
      (l = (r << 1) & 32767),
      (f = o | l),
      (r = f ^ s);
  return r ^ 52811;
}
var jp = (function () {
  function t(i, a) {
    switch (a.type) {
      case 'base64':
        return r(Qr(i), a);
      case 'binary':
        return r(i, a);
      case 'buffer':
        return r(je && Buffer.isBuffer(i) ? i.toString('binary') : Yi(i), a);
      case 'array':
        return r(ns(i), a);
    }
    throw new Error('Unrecognized type ' + a.type);
  }
  function r(i, a) {
    var s = a || {},
      o = s.dense ? [] : {},
      l = i.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error('RTF missing table');
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (c, h) {
        Array.isArray(o) && (o[h] = []);
        for (var u = /\\\w+\b/g, p = 0, x, d = -1; (x = u.exec(c)); ) {
          switch (x[0]) {
            case '\\cell':
              var m = c.slice(p, u.lastIndex - x[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++d, m.length)) {
                var A = { v: m, t: 's' };
                Array.isArray(o) ? (o[h][d] = A) : (o[Ke({ r: h, c: d })] = A);
              }
              break;
          }
          p = u.lastIndex;
        }
        d > f.e.c && (f.e.c = d);
      }),
      (o['!ref'] = ht(f)),
      o
    );
  }
  function e(i, a) {
    return In(t(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = rt(i['!ref']),
        o,
        l = Array.isArray(i),
        f = s.s.r;
      f <= s.e.r;
      ++f
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var h = Ke({ r: f, c });
        (o = l ? (i[f] || [])[c] : i[h]),
          !(!o || (o.v == null && (!o.f || o.F))) &&
            (a.push(' ' + (o.w || (en(o), o.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: e, to_sheet: t, from_sheet: n };
})();
function Ho(t) {
  for (var r = 0, e = 1; r != 3; ++r)
    e = e * 256 + (t[r] > 255 ? 255 : t[r] < 0 ? 0 : t[r]);
  return e.toString(16).toUpperCase().slice(1);
}
var Gp = 6,
  Jr = Gp;
function Ma(t) {
  return Math.floor((t + Math.round(128 / Jr) / 256) * Jr);
}
function Pa(t) {
  return Math.floor(((t - 5) / Jr) * 100 + 0.5) / 100;
}
function Gs(t) {
  return Math.round(((t * Jr + 5) / Jr) * 256) / 256;
}
function F0(t) {
  t.width
    ? ((t.wpx = Ma(t.width)), (t.wch = Pa(t.wpx)), (t.MDW = Jr))
    : t.wpx
      ? ((t.wch = Pa(t.wpx)), (t.width = Gs(t.wch)), (t.MDW = Jr))
      : typeof t.wch == 'number' &&
        ((t.width = Gs(t.wch)), (t.wpx = Ma(t.width)), (t.MDW = Jr)),
    t.customWidth && delete t.customWidth;
}
var Yp = 96,
  rc = Yp;
function La(t) {
  return (t * 96) / rc;
}
function nc(t) {
  return (t * rc) / 96;
}
function $p(t) {
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
          (r[r.length] = ie('numFmt', null, {
            numFmtId: n,
            formatCode: Xe(t[n]),
          }));
    }),
    r.length === 1
      ? ''
      : ((r[r.length] = '</numFmts>'),
        (r[0] = ie('numFmts', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function Xp(t) {
  var r = [];
  return (
    (r[r.length] = ie('cellXfs', null)),
    t.forEach(function (e) {
      r[r.length] = ie('xf', null, e);
    }),
    (r[r.length] = '</cellXfs>'),
    r.length === 2
      ? ''
      : ((r[0] = ie('cellXfs', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function ic(t, r) {
  var e = [pt, ie('styleSheet', null, { xmlns: si[0], 'xmlns:vt': wt.vt })],
    n;
  return (
    t.SSF && (n = $p(t.SSF)) != null && (e[e.length] = n),
    (e[e.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (e[e.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (e[e.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (e[e.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Xp(r.cellXfs)) && (e[e.length] = n),
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
function Kp(t, r) {
  var e = t.read_shift(2),
    n = Mt(t);
  return [e, n];
}
function zp(t, r, e) {
  e || (e = G(6 + 4 * r.length)), e.write_shift(2, t), Tt(r, e);
  var n = e.length > e.l ? e.slice(0, e.l) : e;
  return e.l == null && (e.l = e.length), n;
}
function qp(t, r, e) {
  var n = {};
  n.sz = t.read_shift(2) / 20;
  var i = Ld(t);
  i.fItalic && (n.italic = 1),
    i.fCondense && (n.condense = 1),
    i.fExtend && (n.extend = 1),
    i.fShadow && (n.shadow = 1),
    i.fOutline && (n.outline = 1),
    i.fStrikeout && (n.strike = 1);
  var a = t.read_shift(2);
  switch ((a === 700 && (n.bold = 1), t.read_shift(2))) {
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
    (l > 0 && (n.charset = l), t.l++, (n.color = Pd(t)), t.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = Mt(t)), n;
}
function Jp(t, r) {
  r || (r = G(25 + 4 * 32)),
    r.write_shift(2, t.sz * 20),
    Bd(t, r),
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
    Ia(t.color, r);
  var n = 0;
  return (
    (n = 2),
    r.write_shift(1, n),
    Tt(t.name, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
var Zp = [
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
  gs,
  Qp = Ur;
function Wo(t, r) {
  r || (r = G(4 * 3 + 8 * 7 + 16 * 1)), gs || (gs = x0(Zp));
  var e = gs[t.patternType];
  e == null && (e = 40), r.write_shift(4, e);
  var n = 0;
  if (e != 40)
    for (Ia({ auto: 1 }, r), Ia({ auto: 1 }, r); n < 12; ++n)
      r.write_shift(4, 0);
  else {
    for (; n < 4; ++n) r.write_shift(4, 0);
    for (; n < 12; ++n) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function ex(t, r) {
  var e = t.l + r,
    n = t.read_shift(2),
    i = t.read_shift(2);
  return (t.l = e), { ixfe: n, numFmtId: i };
}
function ac(t, r, e) {
  e || (e = G(16)),
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
function pi(t, r) {
  return (
    r || (r = G(10)),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var tx = Ur;
function rx(t, r) {
  return (
    r || (r = G(51)),
    r.write_shift(1, 0),
    pi(null, r),
    pi(null, r),
    pi(null, r),
    pi(null, r),
    pi(null, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function nx(t, r) {
  return (
    r || (r = G(12 + 4 * 10)),
    r.write_shift(4, t.xfId),
    r.write_shift(2, 1),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    ka(t.name || '', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function ix(t, r, e) {
  var n = G(2052);
  return (
    n.write_shift(4, t),
    ka(r, n),
    ka(e, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function ax(t, r) {
  if (r) {
    var e = 0;
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i) r[i] != null && ++e;
    }),
      e != 0 &&
        (Z(t, 615, Dr(e)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            r[i] != null && Z(t, 44, zp(i, r[i]));
        }),
        Z(t, 616));
  }
}
function sx(t) {
  var r = 1;
  Z(t, 611, Dr(r)),
    Z(t, 43, Jp({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    Z(t, 612);
}
function ox(t) {
  var r = 2;
  Z(t, 603, Dr(r)),
    Z(t, 45, Wo({ patternType: 'none' })),
    Z(t, 45, Wo({ patternType: 'gray125' })),
    Z(t, 604);
}
function fx(t) {
  var r = 1;
  Z(t, 613, Dr(r)), Z(t, 46, rx()), Z(t, 614);
}
function lx(t) {
  var r = 1;
  Z(t, 626, Dr(r)), Z(t, 47, ac({ numFmtId: 0 }, 65535)), Z(t, 627);
}
function cx(t, r) {
  Z(t, 617, Dr(r.length)),
    r.forEach(function (e) {
      Z(t, 47, ac(e, 0));
    }),
    Z(t, 618);
}
function ux(t) {
  var r = 1;
  Z(t, 619, Dr(r)), Z(t, 48, nx({ xfId: 0, name: 'Normal' })), Z(t, 620);
}
function hx(t) {
  var r = 0;
  Z(t, 505, Dr(r)), Z(t, 506);
}
function dx(t) {
  var r = 0;
  Z(t, 508, ix(r, 'TableStyleMedium9', 'PivotStyleMedium4')), Z(t, 509);
}
function px(t, r) {
  var e = qt();
  return (
    Z(e, 278),
    ax(e, t.SSF),
    sx(e),
    ox(e),
    fx(e),
    lx(e),
    cx(e, r.cellXfs),
    ux(e),
    hx(e),
    dx(e),
    Z(e, 279),
    e.end()
  );
}
function sc(t, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (t && typeof t.raw == 'string') return t.raw;
  var e = [pt];
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
function xx(t, r) {
  return { flags: t.read_shift(4), version: t.read_shift(4), name: Mt(t) };
}
function vx(t) {
  var r = G(12 + 2 * t.name.length);
  return (
    r.write_shift(4, t.flags),
    r.write_shift(4, t.version),
    Tt(t.name, r),
    r.slice(0, r.l)
  );
}
function mx(t) {
  for (var r = [], e = t.read_shift(4); e-- > 0; )
    r.push([t.read_shift(4), t.read_shift(4)]);
  return r;
}
function gx(t) {
  var r = G(4 + 8 * t.length);
  r.write_shift(4, t.length);
  for (var e = 0; e < t.length; ++e)
    r.write_shift(4, t[e][0]), r.write_shift(4, t[e][1]);
  return r;
}
function _x(t, r) {
  var e = G(8 + 2 * r.length);
  return e.write_shift(4, t), Tt(r, e), e.slice(0, e.l);
}
function wx(t) {
  return (t.l += 4), t.read_shift(4) != 0;
}
function Ex(t, r) {
  var e = G(8);
  return e.write_shift(4, t), e.write_shift(4, 1), e;
}
function Tx() {
  var t = qt();
  return (
    Z(t, 332),
    Z(t, 334, Dr(1)),
    Z(t, 335, vx({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    Z(t, 336),
    Z(t, 339, _x(1, 'XLDAPR')),
    Z(t, 52),
    Z(t, 35, Dr(514)),
    Z(t, 4096, Dr(0)),
    Z(t, 4097, vr(1)),
    Z(t, 36),
    Z(t, 53),
    Z(t, 340),
    Z(t, 337, Ex(1)),
    Z(t, 51, gx([[1, 0]])),
    Z(t, 338),
    Z(t, 333),
    t.end()
  );
}
function oc() {
  var t = [pt];
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
function Sx(t) {
  var r = {};
  r.i = t.read_shift(4);
  var e = {};
  (e.r = t.read_shift(4)), (e.c = t.read_shift(4)), (r.r = Ke(e));
  var n = t.read_shift(1);
  return n & 2 && (r.l = '1'), n & 8 && (r.a = '1'), r;
}
var $n = 1024;
function fc(t, r) {
  for (
    var e = [21600, 21600],
      n = ['m0,0l0', e[1], e[0], e[1], e[0], '0xe'].join(','),
      i = [
        ie('xml', null, {
          'xmlns:v': sr.v,
          'xmlns:o': sr.o,
          'xmlns:x': sr.x,
          'xmlns:mv': sr.mv,
        }).replace(/\/>/, '>'),
        ie('o:shapelayout', ie('o:idmap', null, { 'v:ext': 'edit', data: t }), {
          'v:ext': 'edit',
        }),
        ie(
          'v:shapetype',
          [
            ie('v:stroke', null, { joinstyle: 'miter' }),
            ie('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: e.join(','), path: n },
        ),
      ];
    $n < t * 1e3;

  )
    $n += 1e3;
  return (
    r.forEach(function (a) {
      var s = Et(a[0]),
        o = { color2: '#BEFF82', type: 'gradient' };
      o.type == 'gradient' && (o.angle = '-180');
      var l =
          o.type == 'gradient'
            ? ie('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        f = ie('v:fill', l, o),
        c = { on: 't', obscured: 't' };
      ++$n,
        (i = i.concat([
          '<v:shape' +
            Li({
              id: '_x0000_s' + $n,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (a[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          f,
          ie('v:shadow', null, c),
          ie('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          Ot(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          Ot('x:AutoFill', 'False'),
          Ot('x:Row', String(s.r)),
          Ot('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function lc(t) {
  var r = [pt, ie('comments', null, { xmlns: si[0] })],
    e = [];
  return (
    r.push('<authors>'),
    t.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = Xe(i.a);
        e.indexOf(a) == -1 && (e.push(a), r.push('<author>' + a + '</author>')),
          i.T &&
            i.ID &&
            e.indexOf('tc=' + i.ID) == -1 &&
            (e.push('tc=' + i.ID), r.push('<author>tc=' + i.ID + '</author>'));
      });
    }),
    e.length == 0 && (e.push('SheetJ5'), r.push('<author>SheetJ5</author>')),
    r.push('</authors>'),
    r.push('<commentList>'),
    t.forEach(function (n) {
      var i = 0,
        a = [];
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (i = e.indexOf('tc=' + n[1][0].ID))
          : n[1].forEach(function (l) {
              l.a && (i = e.indexOf(Xe(l.a))), a.push(l.t || '');
            }),
        r.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        r.push(Ot('t', Xe(a[0] || '')));
      else {
        for (
          var s =
              `Comment:
    ` +
              a[0] +
              `
`,
            o = 1;
          o < a.length;
          ++o
        )
          s +=
            `Reply:
    ` +
            a[o] +
            `
`;
        r.push(Ot('t', Xe(s)));
      }
      r.push('</text></comment>');
    }),
    r.push('</commentList>'),
    r.length > 2 &&
      ((r[r.length] = '</comments>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function yx(t, r, e) {
  var n = [
    pt,
    ie('ThreadedComments', null, { xmlns: wt.TCMNT }).replace(/[\/]>/, '>'),
  ];
  return (
    t.forEach(function (i) {
      var a = '';
      (i[1] || []).forEach(function (s, o) {
        if (!s.T) {
          delete s.ID;
          return;
        }
        s.a && r.indexOf(s.a) == -1 && r.push(s.a);
        var l = {
          ref: i[0],
          id:
            '{54EE7951-7262-4200-6969-' +
            ('000000000000' + e.tcid++).slice(-12) +
            '}',
        };
        o == 0 ? (a = l.id) : (l.parentId = a),
          (s.ID = l.id),
          s.a &&
            (l.personId =
              '{54EE7950-7262-4200-6969-' +
              ('000000000000' + r.indexOf(s.a)).slice(-12) +
              '}'),
          n.push(ie('threadedComment', Ot('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function Ax(t) {
  var r = [
    pt,
    ie('personList', null, { xmlns: wt.TCMNT, 'xmlns:x': si[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    t.forEach(function (e, n) {
      r.push(
        ie('person', null, {
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
function Cx(t) {
  var r = {};
  r.iauthor = t.read_shift(4);
  var e = Ln(t);
  return (r.rfx = e.s), (r.ref = Ke(e.s)), (t.l += 16), r;
}
function Fx(t, r) {
  return (
    r == null && (r = G(36)),
    r.write_shift(4, t[1].iauthor),
    fi(t[0], r),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var Dx = Mt;
function Ox(t) {
  return Tt(t.slice(0, 54));
}
function Nx(t) {
  var r = qt(),
    e = [];
  return (
    Z(r, 628),
    Z(r, 630),
    t.forEach(function (n) {
      n[1].forEach(function (i) {
        e.indexOf(i.a) > -1 || (e.push(i.a.slice(0, 54)), Z(r, 632, Ox(i.a)));
      });
    }),
    Z(r, 631),
    Z(r, 633),
    t.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = e.indexOf(i.a);
        var a = { s: Et(n[0]), e: Et(n[0]) };
        Z(r, 635, Fx([a, i])),
          i.t && i.t.length > 0 && Z(r, 637, kd(i)),
          Z(r, 636),
          delete i.iauthor;
      });
    }),
    Z(r, 634),
    Z(r, 629),
    r.end()
  );
}
function Rx(t, r) {
  r.FullPaths.forEach(function (e, n) {
    if (n != 0) {
      var i = e.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && ze.utils.cfb_add(t, i, r.FileIndex[n].content);
    }
  });
}
var cc = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  kx = (function () {
    var t =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      r = { r: 0, c: 0 };
    function e(n, i, a, s) {
      var o = !1,
        l = !1;
      a.length == 0
        ? (l = !0)
        : a.charAt(0) == '[' && ((l = !0), (a = a.slice(1, -1))),
        s.length == 0
          ? (o = !0)
          : s.charAt(0) == '[' && ((o = !0), (s = s.slice(1, -1)));
      var f = a.length > 0 ? parseInt(a, 10) | 0 : 0,
        c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
      return (
        o ? (c += r.c) : --c,
        l ? (f += r.r) : --f,
        i + (o ? '' : '$') + bt(c) + (l ? '' : '$') + Nt(f)
      );
    }
    return function (i, a) {
      return (r = a), i.replace(t, e);
    };
  })(),
  D0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  O0 = (function () {
    return function (r, e) {
      return r.replace(D0, function (n, i, a, s, o, l) {
        var f = T0(s) - (a ? 0 : e.c),
          c = E0(l) - (o ? 0 : e.r),
          h = c == 0 ? '' : o ? c + 1 : '[' + c + ']',
          u = f == 0 ? '' : a ? f + 1 : '[' + f + ']';
        return i + 'R' + h + 'C' + u;
      });
    };
  })();
function Ix(t, r) {
  return t.replace(D0, function (e, n, i, a, s, o) {
    return (
      n +
      (i == '$' ? i + a : bt(T0(a) + r.c)) +
      (s == '$' ? s + o : Nt(E0(o) + r.r))
    );
  });
}
function bx(t) {
  return t.length != 1;
}
function ct(t) {
  t.l += 1;
}
function pn(t, r) {
  var e = t.read_shift(2);
  return [e & 16383, (e >> 14) & 1, (e >> 15) & 1];
}
function uc(t, r, e) {
  var n = 2;
  if (e) {
    if (e.biff >= 2 && e.biff <= 5) return hc(t);
    e.biff == 12 && (n = 4);
  }
  var i = t.read_shift(n),
    a = t.read_shift(n),
    s = pn(t),
    o = pn(t);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: o[0], cRel: o[1], rRel: o[2] },
  };
}
function hc(t) {
  var r = pn(t),
    e = pn(t),
    n = t.read_shift(1),
    i = t.read_shift(1);
  return {
    s: { r: r[0], c: n, cRel: r[1], rRel: r[2] },
    e: { r: e[0], c: i, cRel: e[1], rRel: e[2] },
  };
}
function Mx(t, r, e) {
  if (e.biff < 8) return hc(t);
  var n = t.read_shift(e.biff == 12 ? 4 : 2),
    i = t.read_shift(e.biff == 12 ? 4 : 2),
    a = pn(t),
    s = pn(t);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function dc(t, r, e) {
  if (e && e.biff >= 2 && e.biff <= 5) return Px(t);
  var n = t.read_shift(e && e.biff == 12 ? 4 : 2),
    i = pn(t);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function Px(t) {
  var r = pn(t),
    e = t.read_shift(1);
  return { r: r[0], c: e, cRel: r[1], rRel: r[2] };
}
function Lx(t) {
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
function Bx(t, r, e) {
  var n = e && e.biff ? e.biff : 8;
  if (n >= 2 && n <= 5) return Ux(t);
  var i = t.read_shift(n >= 12 ? 4 : 2),
    a = t.read_shift(2),
    s = (a & 16384) >> 14,
    o = (a & 32768) >> 15;
  if (((a &= 16383), o == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: o };
}
function Ux(t) {
  var r = t.read_shift(2),
    e = t.read_shift(1),
    n = (r & 32768) >> 15,
    i = (r & 16384) >> 14;
  return (
    (r &= 16383),
    n == 1 && r >= 8192 && (r = r - 16384),
    i == 1 && e >= 128 && (e = e - 256),
    { r, c: e, cRel: i, rRel: n }
  );
}
function Hx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    i = uc(t, e.biff >= 2 && e.biff <= 5 ? 6 : 8, e);
  return [n, i];
}
function Wx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    i = t.read_shift(2, 'i'),
    a = 8;
  if (e)
    switch (e.biff) {
      case 5:
        (t.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  var s = uc(t, a, e);
  return [n, i, s];
}
function Vx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5;
  return (t.l += e && e.biff > 8 ? 12 : e.biff < 8 ? 6 : 8), [n];
}
function jx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    i = t.read_shift(2),
    a = 8;
  if (e)
    switch (e.biff) {
      case 5:
        (t.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  return (t.l += a), [n, i];
}
function Gx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    i = Mx(t, r - 1, e);
  return [n, i];
}
function Yx(t, r, e) {
  var n = (t[t.l++] & 96) >> 5;
  return (t.l += e.biff == 2 ? 6 : e.biff == 12 ? 14 : 7), [n];
}
function Vo(t) {
  var r = t[t.l + 1] & 1,
    e = 1;
  return (t.l += 4), [r, e];
}
function $x(t, r, e) {
  t.l += 2;
  for (
    var n = t.read_shift(e && e.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(t.read_shift(e && e.biff == 2 ? 1 : 2));
  return i;
}
function Xx(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [n, t.read_shift(e && e.biff == 2 ? 1 : 2)];
}
function Kx(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [n, t.read_shift(e && e.biff == 2 ? 1 : 2)];
}
function zx(t) {
  var r = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += 2), [r, t.read_shift(2)];
}
function qx(t, r, e) {
  var n = t[t.l + 1] & 255 ? 1 : 0;
  return (t.l += e && e.biff == 2 ? 3 : 4), [n];
}
function pc(t) {
  var r = t.read_shift(1),
    e = t.read_shift(1);
  return [r, e];
}
function Jx(t) {
  return t.read_shift(2), pc(t);
}
function Zx(t) {
  return t.read_shift(2), pc(t);
}
function Qx(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var i = dc(t, 0, e);
  return [n, i];
}
function ev(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var i = Bx(t, 0, e);
  return [n, i];
}
function tv(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var i = t.read_shift(2);
  e && e.biff == 5 && (t.l += 12);
  var a = dc(t, 0, e);
  return [n, i, a];
}
function rv(t, r, e) {
  var n = (t[t.l] & 96) >> 5;
  t.l += 1;
  var i = t.read_shift(e && e.biff <= 3 ? 1 : 2);
  return [rm[i], mc[i], n];
}
function nv(t, r, e) {
  var n = t[t.l++],
    i = t.read_shift(1),
    a = e && e.biff <= 3 ? [n == 88 ? -1 : 0, t.read_shift(1)] : iv(t);
  return [i, (a[0] === 0 ? mc : tm)[a[1]]];
}
function iv(t) {
  return [t[t.l + 1] >> 7, t.read_shift(2) & 32767];
}
function av(t, r, e) {
  t.l += e && e.biff == 2 ? 3 : 4;
}
function sv(t, r, e) {
  if ((t.l++, e && e.biff == 12)) return [t.read_shift(4, 'i'), 0];
  var n = t.read_shift(2),
    i = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, i];
}
function ov(t) {
  return t.l++, Ki[t.read_shift(1)];
}
function fv(t) {
  return t.l++, t.read_shift(2);
}
function lv(t) {
  return t.l++, t.read_shift(1) !== 0;
}
function cv(t) {
  return t.l++, li(t);
}
function uv(t, r, e) {
  return t.l++, ql(t, r - 1, e);
}
function hv(t, r) {
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
      (e[1] = tp(t, 1) ? 'TRUE' : 'FALSE'), r != 12 && (t.l += 7);
      break;
    case 37:
    case 16:
      (e[1] = Ki[t[t.l]]), (t.l += r == 12 ? 4 : 8);
      break;
    case 0:
      t.l += 8;
      break;
    case 1:
      e[1] = li(t);
      break;
    case 2:
      e[1] = ap(t, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error('Bad SerAr: ' + e[0]);
  }
  return e;
}
function dv(t, r, e) {
  for (var n = t.read_shift(e.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((e.biff == 12 ? Ln : fp)(t));
  return i;
}
function pv(t, r, e) {
  var n = 0,
    i = 0;
  e.biff == 12
    ? ((n = t.read_shift(4)), (i = t.read_shift(4)))
    : ((i = 1 + t.read_shift(1)), (n = 1 + t.read_shift(2))),
    e.biff >= 2 && e.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var o = 0; o != i; ++o) s[a][o] = hv(t, e.biff);
  return s;
}
function xv(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3,
    i = !e || e.biff >= 8 ? 4 : 2,
    a = t.read_shift(i);
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
  return [n, 0, a];
}
function vv(t, r, e) {
  if (e.biff == 5) return mv(t);
  var n = (t.read_shift(1) >>> 5) & 3,
    i = t.read_shift(2),
    a = t.read_shift(4);
  return [n, i, a];
}
function mv(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2, 'i');
  t.l += 8;
  var n = t.read_shift(2);
  return (t.l += 12), [r, e, n];
}
function gv(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3;
  t.l += e && e.biff == 2 ? 3 : 4;
  var i = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, i];
}
function _v(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3,
    i = t.read_shift(e && e.biff == 2 ? 1 : 2);
  return [n, i];
}
function wv(t, r, e) {
  var n = (t.read_shift(1) >>> 5) & 3;
  return (t.l += 4), e.biff < 8 && t.l--, e.biff == 12 && (t.l += 2), [n];
}
function Ev(t, r, e) {
  var n = (t[t.l++] & 96) >> 5,
    i = t.read_shift(2),
    a = 4;
  if (e)
    switch (e.biff) {
      case 5:
        a = 15;
        break;
      case 12:
        a = 6;
        break;
    }
  return (t.l += a), [n, i];
}
var Tv = Ur,
  Sv = Ur,
  yv = Ur;
function zi(t, r, e) {
  return (t.l += 2), [Lx(t)];
}
function N0(t) {
  return (t.l += 6), [];
}
var Av = zi,
  Cv = N0,
  Fv = N0,
  Dv = zi;
function xc(t) {
  return (t.l += 2), [Kl(t), t.read_shift(2) & 1];
}
var Ov = zi,
  Nv = xc,
  Rv = N0,
  kv = zi,
  Iv = zi,
  bv = [
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
function Mv(t) {
  t.l += 2;
  var r = t.read_shift(2),
    e = t.read_shift(2),
    n = t.read_shift(4),
    i = t.read_shift(2),
    a = t.read_shift(2),
    s = bv[(e >> 2) & 31];
  return { ixti: r, coltype: e & 3, rt: s, idx: n, c: i, C: a };
}
function Pv(t) {
  return (t.l += 2), [t.read_shift(4)];
}
function Lv(t, r, e) {
  return (t.l += 5), (t.l += 2), (t.l += e.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function Bv(t, r, e) {
  return (t.l += e.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function Uv(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2);
  return [r, e];
}
function Hv(t) {
  var r = (t.read_shift(1) >>> 5) & 3,
    e = t.read_shift(2);
  return [r, e];
}
function Wv(t) {
  return (t.l += 4), [0, 0];
}
var jo = {
    1: { n: 'PtgExp', f: sv },
    2: { n: 'PtgTbl', f: yv },
    3: { n: 'PtgAdd', f: ct },
    4: { n: 'PtgSub', f: ct },
    5: { n: 'PtgMul', f: ct },
    6: { n: 'PtgDiv', f: ct },
    7: { n: 'PtgPower', f: ct },
    8: { n: 'PtgConcat', f: ct },
    9: { n: 'PtgLt', f: ct },
    10: { n: 'PtgLe', f: ct },
    11: { n: 'PtgEq', f: ct },
    12: { n: 'PtgGe', f: ct },
    13: { n: 'PtgGt', f: ct },
    14: { n: 'PtgNe', f: ct },
    15: { n: 'PtgIsect', f: ct },
    16: { n: 'PtgUnion', f: ct },
    17: { n: 'PtgRange', f: ct },
    18: { n: 'PtgUplus', f: ct },
    19: { n: 'PtgUminus', f: ct },
    20: { n: 'PtgPercent', f: ct },
    21: { n: 'PtgParen', f: ct },
    22: { n: 'PtgMissArg', f: ct },
    23: { n: 'PtgStr', f: uv },
    26: { n: 'PtgSheet', f: Lv },
    27: { n: 'PtgEndSheet', f: Bv },
    28: { n: 'PtgErr', f: ov },
    29: { n: 'PtgBool', f: lv },
    30: { n: 'PtgInt', f: fv },
    31: { n: 'PtgNum', f: cv },
    32: { n: 'PtgArray', f: Yx },
    33: { n: 'PtgFunc', f: rv },
    34: { n: 'PtgFuncVar', f: nv },
    35: { n: 'PtgName', f: xv },
    36: { n: 'PtgRef', f: Qx },
    37: { n: 'PtgArea', f: Hx },
    38: { n: 'PtgMemArea', f: gv },
    39: { n: 'PtgMemErr', f: Tv },
    40: { n: 'PtgMemNoMem', f: Sv },
    41: { n: 'PtgMemFunc', f: _v },
    42: { n: 'PtgRefErr', f: wv },
    43: { n: 'PtgAreaErr', f: Vx },
    44: { n: 'PtgRefN', f: ev },
    45: { n: 'PtgAreaN', f: Gx },
    46: { n: 'PtgMemAreaN', f: Uv },
    47: { n: 'PtgMemNoMemN', f: Hv },
    57: { n: 'PtgNameX', f: vv },
    58: { n: 'PtgRef3d', f: tv },
    59: { n: 'PtgArea3d', f: Wx },
    60: { n: 'PtgRefErr3d', f: Ev },
    61: { n: 'PtgAreaErr3d', f: jx },
    255: {},
  },
  Vv = {
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
  jv = {
    1: { n: 'PtgElfLel', f: xc },
    2: { n: 'PtgElfRw', f: kv },
    3: { n: 'PtgElfCol', f: Av },
    6: { n: 'PtgElfRwV', f: Iv },
    7: { n: 'PtgElfColV', f: Dv },
    10: { n: 'PtgElfRadical', f: Ov },
    11: { n: 'PtgElfRadicalS', f: Rv },
    13: { n: 'PtgElfColS', f: Cv },
    15: { n: 'PtgElfColSV', f: Fv },
    16: { n: 'PtgElfRadicalLel', f: Nv },
    25: { n: 'PtgList', f: Mv },
    29: { n: 'PtgSxName', f: Pv },
    255: {},
  },
  Gv = {
    0: { n: 'PtgAttrNoop', f: Wv },
    1: { n: 'PtgAttrSemi', f: qx },
    2: { n: 'PtgAttrIf', f: Kx },
    4: { n: 'PtgAttrChoose', f: $x },
    8: { n: 'PtgAttrGoto', f: Xx },
    16: { n: 'PtgAttrSum', f: av },
    32: { n: 'PtgAttrBaxcel', f: Vo },
    33: { n: 'PtgAttrBaxcel', f: Vo },
    64: { n: 'PtgAttrSpace', f: Jx },
    65: { n: 'PtgAttrSpaceSemi', f: Zx },
    128: { n: 'PtgAttrIfError', f: zx },
    255: {},
  };
function Yv(t, r, e, n) {
  if (n.biff < 8) return Ur(t, r);
  for (var i = t.l + r, a = [], s = 0; s !== e.length; ++s)
    switch (e[s][0]) {
      case 'PtgArray':
        (e[s][1] = pv(t, 0, n)), a.push(e[s][1]);
        break;
      case 'PtgMemArea':
        (e[s][2] = dv(t, e[s][1], n)), a.push(e[s][2]);
        break;
      case 'PtgExp':
        n && n.biff == 12 && ((e[s][1][1] = t.read_shift(4)), a.push(e[s][1]));
        break;
      case 'PtgList':
      case 'PtgElfRadicalS':
      case 'PtgElfColS':
      case 'PtgElfColSV':
        throw 'Unsupported ' + e[s][0];
    }
  return (r = i - t.l), r !== 0 && a.push(Ur(t, r)), a;
}
function $v(t, r, e) {
  for (var n = t.l + r, i, a, s = []; n != t.l; )
    (r = n - t.l),
      (a = t[t.l]),
      (i = jo[a] || jo[Vv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? jv : Gv)[t[t.l + 1]]),
      !i || !i.f ? Ur(t, r) : s.push([i.n, i.f(t, r, e)]);
  return s;
}
function Xv(t) {
  for (var r = [], e = 0; e < t.length; ++e) {
    for (var n = t[e], i = [], a = 0; a < n.length; ++a) {
      var s = n[a];
      if (s)
        switch (s[0]) {
          case 2:
            i.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            i.push(s[1]);
        }
      else i.push('');
    }
    r.push(i.join(','));
  }
  return r.join(';');
}
var Kv = {
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
function zv(t, r) {
  if (!t && !(r && r.biff <= 5 && r.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(t) ? "'" + t + "'" : t;
}
function vc(t, r, e) {
  if (!t) return 'SH33TJSERR0';
  if (e.biff > 8 && (!t.XTI || !t.XTI[r])) return t.SheetNames[r];
  if (!t.XTI) return 'SH33TJSERR6';
  var n = t.XTI[r];
  if (e.biff < 8)
    return (
      r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? '' : t.XTI[r - 1]
    );
  if (!n) return 'SH33TJSERR1';
  var i = '';
  if (e.biff > 8)
    switch (t[n[0]][0]) {
      case 357:
        return (
          (i = n[1] == -1 ? '#REF' : t.SheetNames[n[1]]),
          n[1] == n[2] ? i : i + ':' + t.SheetNames[n[2]]
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
        (i = n[1] == -1 ? '#REF' : t.SheetNames[n[1]] || 'SH33TJSERR3'),
        n[1] == n[2] ? i : i + ':' + t.SheetNames[n[2]]
      );
    case 14849:
      return t[n[0]]
        .slice(1)
        .map(function (a) {
          return a.Name;
        })
        .join(';;');
    default:
      return t[n[0]][0][3]
        ? ((i = n[1] == -1 ? '#REF' : t[n[0]][0][3][n[1]] || 'SH33TJSERR4'),
          n[1] == n[2] ? i : i + ':' + t[n[0]][0][3][n[2]])
        : 'SH33TJSERR2';
  }
}
function Go(t, r, e) {
  var n = vc(t, r, e);
  return n == '#REF' ? n : zv(n, e);
}
function ei(t, r, e, n, i) {
  var a = (i && i.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    o = [],
    l,
    f,
    c,
    h = 0,
    u = 0,
    p,
    x = '';
  if (!t[0] || !t[0][0]) return '';
  for (var d = -1, m = '', A = 0, D = t[0].length; A < D; ++A) {
    var F = t[0][A];
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
        if (((l = o.pop()), (f = o.pop()), d >= 0)) {
          switch (t[0][d][1][0]) {
            case 0:
              m = st(' ', t[0][d][1][1]);
              break;
            case 1:
              m = st('\r', t[0][d][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + t[0][d][1][0]);
          }
          (f = f + m), (d = -1);
        }
        o.push(f + Kv[F[0]] + l);
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
        (c = yi(F[1][1], s, i)), o.push(Ai(c, a));
        break;
      case 'PtgRefN':
        (c = e ? yi(F[1][1], e, i) : F[1][1]), o.push(Ai(c, a));
        break;
      case 'PtgRef3d':
        (h = F[1][1]),
          (c = yi(F[1][2], s, i)),
          (x = Go(n, h, i)),
          o.push(x + '!' + Ai(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var k = F[1][0],
          j = F[1][1];
        k || (k = 0), (k &= 127);
        var ee = k == 0 ? [] : o.slice(-k);
        (o.length -= k),
          j === 'User' && (j = ee.shift()),
          o.push(j + '(' + ee.join(',') + ')');
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
        (p = Do(F[1][1], e ? { s: e } : s, i)), o.push(vs(p, i));
        break;
      case 'PtgArea':
        (p = Do(F[1][1], s, i)), o.push(vs(p, i));
        break;
      case 'PtgArea3d':
        (h = F[1][1]),
          (p = F[1][2]),
          (x = Go(n, h, i)),
          o.push(x + '!' + vs(p, i));
        break;
      case 'PtgAttrSum':
        o.push('SUM(' + o.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = F[1][2];
        var N = (n.names || [])[u - 1] || (n[0] || [])[u],
          W = N ? N.Name : 'SH33TJSNAME' + String(u);
        W && W.slice(0, 6) == '_xlfn.' && !i.xlfn && (W = W.slice(6)),
          o.push(W);
        break;
      case 'PtgNameX':
        var M = F[1][1];
        u = F[1][2];
        var X;
        if (i.biff <= 5) M < 0 && (M = -M), n[M] && (X = n[M][u]);
        else {
          var K = '';
          if (
            (((n[M] || [])[0] || [])[0] == 14849 ||
              (((n[M] || [])[0] || [])[0] == 1025
                ? n[M][u] &&
                  n[M][u].itab > 0 &&
                  (K = n.SheetNames[n[M][u].itab - 1] + '!')
                : (K = n.SheetNames[u - 1] + '!')),
            n[M] && n[M][u])
          )
            K += n[M][u].Name;
          else if (n[0] && n[0][u]) K += n[0][u].Name;
          else {
            var J = (vc(n, M, i) || '').split(';;');
            J[u - 1] ? (K = J[u - 1]) : (K += 'SH33TJSERRX');
          }
          o.push(K);
          break;
        }
        X || (X = { Name: 'SH33TJSERRY' }), o.push(X.Name);
        break;
      case 'PtgParen':
        var ne = '(',
          ke = ')';
        if (d >= 0) {
          switch (((m = ''), t[0][d][1][0])) {
            case 2:
              ne = st(' ', t[0][d][1][1]) + ne;
              break;
            case 3:
              ne = st('\r', t[0][d][1][1]) + ne;
              break;
            case 4:
              ke = st(' ', t[0][d][1][1]) + ke;
              break;
            case 5:
              ke = st('\r', t[0][d][1][1]) + ke;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + t[0][d][1][0]);
          }
          d = -1;
        }
        o.push(ne + o.pop() + ke);
        break;
      case 'PtgRefErr':
        o.push('#REF!');
        break;
      case 'PtgRefErr3d':
        o.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: F[1][1], r: F[1][0] };
        var _e = { c: e.c, r: e.r };
        if (n.sharedf[Ke(c)]) {
          var nt = n.sharedf[Ke(c)];
          o.push(ei(nt, s, _e, n, i));
        } else {
          var Je = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((f = n.arrayf[l]),
              !(c.c < f[0].s.c || c.c > f[0].e.c) &&
                !(c.r < f[0].s.r || c.r > f[0].e.r))
            ) {
              o.push(ei(f[1], s, _e, n, i)), (Je = !0);
              break;
            }
          Je || o.push(F[1]);
        }
        break;
      case 'PtgArray':
        o.push('{' + Xv(F[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        d = A;
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
    var gt = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && d >= 0 && gt.indexOf(t[0][A][0]) == -1) {
      F = t[0][d];
      var it = !0;
      switch (F[1][0]) {
        case 4:
          it = !1;
        case 0:
          m = st(' ', F[1][1]);
          break;
        case 5:
          it = !1;
        case 1:
          m = st('\r', F[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0]);
      }
      o.push((it ? m : '') + o.pop() + (it ? '' : m)), (d = -1);
    }
  }
  if (o.length > 1 && i.WTF) throw new Error('bad formula stack');
  return o[0];
}
function qv(t) {
  if (t == null) {
    var r = G(8);
    return (
      r.write_shift(1, 3),
      r.write_shift(1, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 65535),
      r
    );
  } else if (typeof t == 'number') return On(t);
  return On(0);
}
function Jv(t, r, e, n, i) {
  var a = Nn(r, e, i),
    s = qv(t.v),
    o = G(6),
    l = 33;
  o.write_shift(2, l), o.write_shift(4, 0);
  for (var f = G(t.bf.length), c = 0; c < t.bf.length; ++c) f[c] = t.bf[c];
  var h = Dt([a, s, o, f]);
  return h;
}
function is(t, r, e) {
  var n = t.read_shift(4),
    i = $v(t, n, e),
    a = t.read_shift(4),
    s = a > 0 ? Yv(t, a, i, e) : null;
  return [i, s];
}
var Zv = is,
  as = is,
  Qv = is,
  em = is,
  tm = {
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
  mc = {
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
  rm = {
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
function nm(t) {
  var r = 'of:=' + t.replace(D0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return r.replace(/;/g, '|').replace(/,/g, ';');
}
function im(t) {
  return t.replace(/\./, '!');
}
var Ci = typeof Map < 'u';
function R0(t, r, e) {
  var n = 0,
    i = t.length;
  if (e) {
    if (Ci ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r)) {
      for (var a = Ci ? e.get(r) : e[r]; n < a.length; ++n)
        if (t[a[n]].t === r) return t.Count++, a[n];
    }
  } else for (; n < i; ++n) if (t[n].t === r) return t.Count++, n;
  return (
    (t[i] = { t: r }),
    t.Count++,
    t.Unique++,
    e &&
      (Ci
        ? (e.has(r) || e.set(r, []), e.get(r).push(i))
        : (Object.prototype.hasOwnProperty.call(e, r) || (e[r] = []),
          e[r].push(i))),
    i
  );
}
function ss(t, r) {
  var e = { min: t + 1, max: t + 1 },
    n = -1;
  return (
    r.MDW && (Jr = r.MDW),
    r.width != null
      ? (e.customWidth = 1)
      : r.wpx != null
        ? (n = Pa(r.wpx))
        : r.wch != null && (n = r.wch),
    n > -1
      ? ((e.width = Gs(n)), (e.customWidth = 1))
      : r.width != null && (e.width = r.width),
    r.hidden && (e.hidden = !0),
    r.level != null && (e.outlineLevel = e.level = r.level),
    e
  );
}
function gc(t, r) {
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
function vn(t, r, e) {
  var n = e.revssf[r.z != null ? r.z : 'General'],
    i = 60,
    a = t.length;
  if (n == null && e.ssf) {
    for (; i < 392; ++i)
      if (e.ssf[i] == null) {
        dl(r.z, i), (e.ssf[i] = r.z), (e.revssf[r.z] = n = i);
        break;
      }
  }
  for (i = 0; i != a; ++i) if (t[i].numFmtId === n) return i;
  return (
    (t[a] = {
      numFmtId: n,
      fontId: 0,
      fillId: 0,
      borderId: 0,
      xfId: 0,
      applyNumberFormat: 1,
    }),
    a
  );
}
function am(t, r, e) {
  if (t && t['!ref']) {
    var n = rt(t['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + e + '): ' + t['!ref']);
  }
}
function sm(t) {
  if (t.length === 0) return '';
  for (
    var r = '<mergeCells count="' + t.length + '">', e = 0;
    e != t.length;
    ++e
  )
    r += '<mergeCell ref="' + ht(t[e]) + '"/>';
  return r + '</mergeCells>';
}
function om(t, r, e, n, i) {
  var a = !1,
    s = {},
    o = null;
  if (n.bookType !== 'xlsx' && r.vbaraw) {
    var l = r.SheetNames[e];
    try {
      r.Workbook && (l = r.Workbook.Sheets[e].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = Pi(Xe(l)));
  }
  if (t && t['!outline']) {
    var f = { summaryBelow: 1, summaryRight: 1 };
    t['!outline'].above && (f.summaryBelow = 0),
      t['!outline'].left && (f.summaryRight = 0),
      (o = (o || '') + ie('outlinePr', null, f));
  }
  (!a && !o) || (i[i.length] = ie('sheetPr', o, s));
}
var fm = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  lm = [
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
function cm(t) {
  var r = { sheet: 1 };
  return (
    fm.forEach(function (e) {
      t[e] != null && t[e] && (r[e] = '1');
    }),
    lm.forEach(function (e) {
      t[e] != null && !t[e] && (r[e] = '0');
    }),
    t.password && (r.password = tc(t.password).toString(16).toUpperCase()),
    ie('sheetProtection', null, r)
  );
}
function um(t) {
  return gc(t), ie('pageMargins', null, t);
}
function hm(t, r) {
  for (var e = ['<cols>'], n, i = 0; i != r.length; ++i)
    (n = r[i]) && (e[e.length] = ie('col', null, ss(i, n)));
  return (e[e.length] = '</cols>'), e.join('');
}
function dm(t, r, e, n) {
  var i = typeof t.ref == 'string' ? t.ref : ht(t.ref);
  e.Workbook || (e.Workbook = { Sheets: [] }),
    e.Workbook.Names || (e.Workbook.Names = []);
  var a = e.Workbook.Names,
    s = cr(i);
  s.s.r == s.e.r && ((s.e.r = cr(r['!ref']).e.r), (i = ht(s)));
  for (var o = 0; o < a.length; ++o) {
    var l = a[o];
    if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
      l.Ref = "'" + e.SheetNames[n] + "'!" + i;
      break;
    }
  }
  return (
    o == a.length &&
      a.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + e.SheetNames[n] + "'!" + i,
      }),
    ie('autoFilter', null, { ref: i })
  );
}
function pm(t, r, e, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    ie('sheetViews', ie('sheetView', null, i), {})
  );
}
function xm(t, r, e, n) {
  if (
    (t.c && e['!comments'].push([r, t.c]),
    (t.v === void 0 && typeof t.f != 'string') || (t.t === 'z' && !t.f))
  )
    return '';
  var i = '',
    a = t.t,
    s = t.v;
  if (t.t !== 'z')
    switch (t.t) {
      case 'b':
        i = t.v ? '1' : '0';
        break;
      case 'n':
        i = '' + t.v;
        break;
      case 'e':
        i = Ki[t.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = Wt(t.v, -1).toISOString())
          : ((t = Zt(t)), (t.t = 'n'), (i = '' + (t.v = Jt(Wt(t.v))))),
          typeof t.z > 'u' && (t.z = ft[14]);
        break;
      default:
        i = t.v;
        break;
    }
  var o = Ot('v', Xe(i)),
    l = { r },
    f = vn(n.cellXfs, t, n);
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
        (o = Ot('v', '' + R0(n.Strings, t.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((t.t != a && ((t.t = a), (t.v = s)), typeof t.f == 'string' && t.f)) {
    var c =
      t.F && t.F.slice(0, r.length) == r ? { t: 'array', ref: t.F } : null;
    o = ie('f', Xe(t.f), c) + (t.v != null ? o : '');
  }
  return t.l && e['!links'].push([r, t.l]), t.D && (l.cm = 1), ie('c', o, l);
}
function vm(t, r, e, n) {
  var i = [],
    a = [],
    s = rt(t['!ref']),
    o = '',
    l,
    f = '',
    c = [],
    h = 0,
    u = 0,
    p = t['!rows'],
    x = Array.isArray(t),
    d = { r: f },
    m,
    A = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = bt(u);
  for (h = s.s.r; h <= s.e.r; ++h) {
    for (a = [], f = Nt(h), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + f;
      var D = x ? (t[h] || [])[u] : t[l];
      D !== void 0 && (o = xm(D, l, t, r)) != null && a.push(o);
    }
    (a.length > 0 || (p && p[h])) &&
      ((d = { r: f }),
      p &&
        p[h] &&
        ((m = p[h]),
        m.hidden && (d.hidden = 1),
        (A = -1),
        m.hpx ? (A = La(m.hpx)) : m.hpt && (A = m.hpt),
        A > -1 && ((d.ht = A), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level)),
      (i[i.length] = ie('row', a.join(''), d)));
  }
  if (p)
    for (; h < p.length; ++h)
      p &&
        p[h] &&
        ((d = { r: h + 1 }),
        (m = p[h]),
        m.hidden && (d.hidden = 1),
        (A = -1),
        m.hpx ? (A = La(m.hpx)) : m.hpt && (A = m.hpt),
        A > -1 && ((d.ht = A), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level),
        (i[i.length] = ie('row', '', d)));
  return i.join('');
}
function _c(t, r, e, n) {
  var i = [pt, ie('worksheet', null, { xmlns: si[0], 'xmlns:r': wt.r })],
    a = e.SheetNames[t],
    s = 0,
    o = '',
    l = e.Sheets[a];
  l == null && (l = {});
  var f = l['!ref'] || 'A1',
    c = rt(f);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF)
      throw new Error('Range ' + f + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (f = ht(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var h = [];
  om(l, e, t, r, i),
    (i[i.length] = ie('dimension', null, { ref: f })),
    (i[i.length] = pm(l, r, t, e)),
    r.sheetFormat &&
      (i[i.length] = ie('sheetFormatPr', null, {
        defaultRowHeight: r.sheetFormat.defaultRowHeight || '16',
        baseColWidth: r.sheetFormat.baseColWidth || '10',
        outlineLevelRow: r.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = hm(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((o = vm(l, r)), o.length > 0 && (i[i.length] = o)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = cm(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = dm(l['!autofilter'], l, e, t)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = sm(l['!merges']));
  var u = -1,
    p,
    x = -1;
  return (
    l['!links'].length > 0 &&
      ((i[i.length] = '<hyperlinks>'),
      l['!links'].forEach(function (d) {
        d[1].Target &&
          ((p = { ref: d[0] }),
          d[1].Target.charAt(0) != '#' &&
            ((x = $e(n, -1, Xe(d[1].Target).replace(/#.*$/, ''), He.HLINK)),
            (p['r:id'] = 'rId' + x)),
          (u = d[1].Target.indexOf('#')) > -1 &&
            (p.location = Xe(d[1].Target.slice(u + 1))),
          d[1].Tooltip && (p.tooltip = Xe(d[1].Tooltip)),
          (i[i.length] = ie('hyperlink', null, p)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = um(l['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) &&
      (i[i.length] = Ot(
        'ignoredErrors',
        ie('ignoredError', null, { numberStoredAsText: 1, sqref: f }),
      )),
    h.length > 0 &&
      ((x = $e(n, -1, '../drawings/drawing' + (t + 1) + '.xml', He.DRAW)),
      (i[i.length] = ie('drawing', null, { 'r:id': 'rId' + x })),
      (l['!drawing'] = h)),
    l['!comments'].length > 0 &&
      ((x = $e(n, -1, '../drawings/vmlDrawing' + (t + 1) + '.vml', He.VML)),
      (i[i.length] = ie('legacyDrawing', null, { 'r:id': 'rId' + x })),
      (l['!legacy'] = x)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function mm(t, r) {
  var e = {},
    n = t.l + r;
  (e.r = t.read_shift(4)), (t.l += 4);
  var i = t.read_shift(2);
  t.l += 1;
  var a = t.read_shift(1);
  return (
    (t.l = n),
    a & 7 && (e.level = a & 7),
    a & 16 && (e.hidden = !0),
    a & 32 && (e.hpt = i / 20),
    e
  );
}
function gm(t, r, e) {
  var n = G(145),
    i = (e['!rows'] || [])[t] || {};
  n.write_shift(4, t), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = La(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
    n.write_shift(2, a),
    n.write_shift(1, 0);
  var s = 0;
  i.level && (s |= i.level),
    i.hidden && (s |= 16),
    (i.hpx || i.hpt) && (s |= 32),
    n.write_shift(1, s),
    n.write_shift(1, 0);
  var o = 0,
    l = n.l;
  n.l += 4;
  for (var f = { r: t, c: 0 }, c = 0; c < 16; ++c)
    if (!(r.s.c > (c + 1) << 10 || r.e.c < c << 10)) {
      for (var h = -1, u = -1, p = c << 10; p < (c + 1) << 10; ++p) {
        f.c = p;
        var x = Array.isArray(e) ? (e[f.r] || [])[f.c] : e[Ke(f)];
        x && (h < 0 && (h = p), (u = p));
      }
      h < 0 || (++o, n.write_shift(4, h), n.write_shift(4, u));
    }
  var d = n.l;
  return (
    (n.l = l),
    n.write_shift(4, o),
    (n.l = d),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function _m(t, r, e, n) {
  var i = gm(n, e, r);
  (i.length > 17 || (r['!rows'] || [])[n]) && Z(t, 0, i);
}
var wm = Ln,
  Em = fi;
function Tm() {}
function Sm(t, r) {
  var e = {},
    n = t[t.l];
  return (
    ++t.l,
    (e.above = !(n & 64)),
    (e.left = !(n & 128)),
    (t.l += 18),
    (e.name = Id(t)),
    e
  );
}
function ym(t, r, e) {
  e == null && (e = G(84 + 4 * t.length));
  var n = 192;
  r && (r.above && (n &= -65), r.left && (n &= -129)), e.write_shift(1, n);
  for (var i = 1; i < 3; ++i) e.write_shift(1, 0);
  return (
    Ia({ auto: 1 }, e),
    e.write_shift(-4, -1),
    e.write_shift(-4, -1),
    bl(t, e),
    e.slice(0, e.l)
  );
}
function Am(t) {
  var r = _r(t);
  return [r];
}
function Cm(t, r, e) {
  return e == null && (e = G(8)), bn(r, e);
}
function Fm(t) {
  var r = Mn(t);
  return [r];
}
function Dm(t, r, e) {
  return e == null && (e = G(4)), Pn(r, e);
}
function Om(t) {
  var r = _r(t),
    e = t.read_shift(1);
  return [r, e, 'b'];
}
function Nm(t, r, e) {
  return e == null && (e = G(9)), bn(r, e), e.write_shift(1, t.v ? 1 : 0), e;
}
function Rm(t) {
  var r = Mn(t),
    e = t.read_shift(1);
  return [r, e, 'b'];
}
function km(t, r, e) {
  return e == null && (e = G(5)), Pn(r, e), e.write_shift(1, t.v ? 1 : 0), e;
}
function Im(t) {
  var r = _r(t),
    e = t.read_shift(1);
  return [r, e, 'e'];
}
function bm(t, r, e) {
  return e == null && (e = G(9)), bn(r, e), e.write_shift(1, t.v), e;
}
function Mm(t) {
  var r = Mn(t),
    e = t.read_shift(1);
  return [r, e, 'e'];
}
function Pm(t, r, e) {
  return (
    e == null && (e = G(8)),
    Pn(r, e),
    e.write_shift(1, t.v),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function Lm(t) {
  var r = _r(t),
    e = t.read_shift(4);
  return [r, e, 's'];
}
function Bm(t, r, e) {
  return e == null && (e = G(12)), bn(r, e), e.write_shift(4, r.v), e;
}
function Um(t) {
  var r = Mn(t),
    e = t.read_shift(4);
  return [r, e, 's'];
}
function Hm(t, r, e) {
  return e == null && (e = G(8)), Pn(r, e), e.write_shift(4, r.v), e;
}
function Wm(t) {
  var r = _r(t),
    e = li(t);
  return [r, e, 'n'];
}
function Vm(t, r, e) {
  return e == null && (e = G(16)), bn(r, e), On(t.v, e), e;
}
function jm(t) {
  var r = Mn(t),
    e = li(t);
  return [r, e, 'n'];
}
function Gm(t, r, e) {
  return e == null && (e = G(12)), Pn(r, e), On(t.v, e), e;
}
function Ym(t) {
  var r = _r(t),
    e = Ml(t);
  return [r, e, 'n'];
}
function $m(t, r, e) {
  return e == null && (e = G(12)), bn(r, e), Pl(t.v, e), e;
}
function Xm(t) {
  var r = Mn(t),
    e = Ml(t);
  return [r, e, 'n'];
}
function Km(t, r, e) {
  return e == null && (e = G(8)), Pn(r, e), Pl(t.v, e), e;
}
function zm(t) {
  var r = _r(t),
    e = S0(t);
  return [r, e, 'is'];
}
function qm(t) {
  var r = _r(t),
    e = Mt(t);
  return [r, e, 'str'];
}
function Jm(t, r, e) {
  return (
    e == null && (e = G(12 + 4 * t.v.length)),
    bn(r, e),
    Tt(t.v, e),
    e.length > e.l ? e.slice(0, e.l) : e
  );
}
function Zm(t) {
  var r = Mn(t),
    e = Mt(t);
  return [r, e, 'str'];
}
function Qm(t, r, e) {
  return (
    e == null && (e = G(8 + 4 * t.v.length)),
    Pn(r, e),
    Tt(t.v, e),
    e.length > e.l ? e.slice(0, e.l) : e
  );
}
function eg(t, r, e) {
  var n = t.l + r,
    i = _r(t);
  i.r = e['!row'];
  var a = t.read_shift(1),
    s = [i, a, 'b'];
  if (e.cellFormula) {
    t.l += 2;
    var o = as(t, n - t.l, e);
    s[3] = ei(o, null, i, e.supbooks, e);
  } else t.l = n;
  return s;
}
function tg(t, r, e) {
  var n = t.l + r,
    i = _r(t);
  i.r = e['!row'];
  var a = t.read_shift(1),
    s = [i, a, 'e'];
  if (e.cellFormula) {
    t.l += 2;
    var o = as(t, n - t.l, e);
    s[3] = ei(o, null, i, e.supbooks, e);
  } else t.l = n;
  return s;
}
function rg(t, r, e) {
  var n = t.l + r,
    i = _r(t);
  i.r = e['!row'];
  var a = li(t),
    s = [i, a, 'n'];
  if (e.cellFormula) {
    t.l += 2;
    var o = as(t, n - t.l, e);
    s[3] = ei(o, null, i, e.supbooks, e);
  } else t.l = n;
  return s;
}
function ng(t, r, e) {
  var n = t.l + r,
    i = _r(t);
  i.r = e['!row'];
  var a = Mt(t),
    s = [i, a, 'str'];
  if (e.cellFormula) {
    t.l += 2;
    var o = as(t, n - t.l, e);
    s[3] = ei(o, null, i, e.supbooks, e);
  } else t.l = n;
  return s;
}
var ig = Ln,
  ag = fi;
function sg(t, r) {
  return r == null && (r = G(4)), r.write_shift(4, t), r;
}
function og(t, r) {
  var e = t.l + r,
    n = Ln(t),
    i = y0(t),
    a = Mt(t),
    s = Mt(t),
    o = Mt(t);
  t.l = e;
  var l = { rfx: n, relId: i, loc: a, display: o };
  return s && (l.Tooltip = s), l;
}
function fg(t, r) {
  var e = G(50 + 4 * (t[1].Target.length + (t[1].Tooltip || '').length));
  fi({ s: Et(t[0]), e: Et(t[0]) }, e), A0('rId' + r, e);
  var n = t[1].Target.indexOf('#'),
    i = n == -1 ? '' : t[1].Target.slice(n + 1);
  return Tt(i || '', e), Tt(t[1].Tooltip || '', e), Tt('', e), e.slice(0, e.l);
}
function lg() {}
function cg(t, r, e) {
  var n = t.l + r,
    i = Ll(t),
    a = t.read_shift(1),
    s = [i];
  if (((s[2] = a), e.cellFormula)) {
    var o = Zv(t, n - t.l, e);
    s[1] = o;
  } else t.l = n;
  return s;
}
function ug(t, r, e) {
  var n = t.l + r,
    i = Ln(t),
    a = [i];
  if (e.cellFormula) {
    var s = em(t, n - t.l, e);
    (a[1] = s), (t.l = n);
  } else t.l = n;
  return a;
}
function hg(t, r, e) {
  e == null && (e = G(18));
  var n = ss(t, r);
  e.write_shift(-4, t),
    e.write_shift(-4, t),
    e.write_shift(4, (n.width || 10) * 256),
    e.write_shift(4, 0);
  var i = 0;
  return (
    r.hidden && (i |= 1),
    typeof n.width == 'number' && (i |= 2),
    r.level && (i |= r.level << 8),
    e.write_shift(2, i),
    e
  );
}
var wc = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function dg(t) {
  var r = {};
  return (
    wc.forEach(function (e) {
      r[e] = li(t);
    }),
    r
  );
}
function pg(t, r) {
  return (
    r == null && (r = G(6 * 8)),
    gc(t),
    wc.forEach(function (e) {
      On(t[e], r);
    }),
    r
  );
}
function xg(t) {
  var r = t.read_shift(2);
  return (t.l += 28), { RTL: r & 32 };
}
function vg(t, r, e) {
  e == null && (e = G(30));
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
function mg(t) {
  var r = G(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), fi(t, r), r;
}
function gg(t, r) {
  return (
    r == null && (r = G(16 * 4 + 2)),
    r.write_shift(2, t.password ? tc(t.password) : 0),
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
function _g() {}
function wg() {}
function Eg(t, r, e, n, i, a, s) {
  if (r.v === void 0) return !1;
  var o = '';
  switch (r.t) {
    case 'b':
      o = r.v ? '1' : '0';
      break;
    case 'd':
      (r = Zt(r)), (r.z = r.z || ft[14]), (r.v = Jt(Wt(r.v))), (r.t = 'n');
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
    ((l.s = vn(i.cellXfs, r, i)),
    r.l && a['!links'].push([Ke(l), r.l]),
    r.c && a['!comments'].push([Ke(l), r.c]),
    r.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((o = R0(i.Strings, r.v, i.revStrings)),
            (l.t = 's'),
            (l.v = o),
            s ? Z(t, 18, Hm(r, l)) : Z(t, 7, Bm(r, l)))
          : ((l.t = 'str'), s ? Z(t, 17, Qm(r, l)) : Z(t, 6, Jm(r, l))),
        !0
      );
    case 'n':
      return (
        r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3
          ? s
            ? Z(t, 13, Km(r, l))
            : Z(t, 2, $m(r, l))
          : s
            ? Z(t, 16, Gm(r, l))
            : Z(t, 5, Vm(r, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? Z(t, 15, km(r, l)) : Z(t, 4, Nm(r, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? Z(t, 14, Pm(r, l)) : Z(t, 3, bm(r, l)), !0;
  }
  return s ? Z(t, 12, Dm(r, l)) : Z(t, 1, Cm(r, l)), !0;
}
function Tg(t, r, e, n) {
  var i = rt(r['!ref'] || 'A1'),
    a,
    s = '',
    o = [];
  Z(t, 145);
  var l = Array.isArray(r),
    f = i.e.r;
  r['!rows'] && (f = Math.max(i.e.r, r['!rows'].length - 1));
  for (var c = i.s.r; c <= f; ++c) {
    (s = Nt(c)), _m(t, r, i, c);
    var h = !1;
    if (c <= i.e.r)
      for (var u = i.s.c; u <= i.e.c; ++u) {
        c === i.s.r && (o[u] = bt(u)), (a = o[u] + s);
        var p = l ? (r[c] || [])[u] : r[a];
        if (!p) {
          h = !1;
          continue;
        }
        h = Eg(t, p, c, u, n, r, h);
      }
  }
  Z(t, 146);
}
function Sg(t, r) {
  !r ||
    !r['!merges'] ||
    (Z(t, 177, sg(r['!merges'].length)),
    r['!merges'].forEach(function (e) {
      Z(t, 176, ag(e));
    }),
    Z(t, 178));
}
function yg(t, r) {
  !r ||
    !r['!cols'] ||
    (Z(t, 390),
    r['!cols'].forEach(function (e, n) {
      e && Z(t, 60, hg(n, e));
    }),
    Z(t, 391));
}
function Ag(t, r) {
  !r || !r['!ref'] || (Z(t, 648), Z(t, 649, mg(rt(r['!ref']))), Z(t, 650));
}
function Cg(t, r, e) {
  r['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = $e(e, -1, n[1].Target.replace(/#.*$/, ''), He.HLINK);
      Z(t, 494, fg(n, i));
    }
  }),
    delete r['!links'];
}
function Fg(t, r, e, n) {
  if (r['!comments'].length > 0) {
    var i = $e(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', He.VML);
    Z(t, 551, A0('rId' + i)), (r['!legacy'] = i);
  }
}
function Dg(t, r, e, n) {
  if (r['!autofilter']) {
    var i = r['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : ht(i.ref);
    e.Workbook || (e.Workbook = { Sheets: [] }),
      e.Workbook.Names || (e.Workbook.Names = []);
    var s = e.Workbook.Names,
      o = cr(a);
    o.s.r == o.e.r && ((o.e.r = cr(r['!ref']).e.r), (a = ht(o)));
    for (var l = 0; l < s.length; ++l) {
      var f = s[l];
      if (f.Name == '_xlnm._FilterDatabase' && f.Sheet == n) {
        f.Ref = "'" + e.SheetNames[n] + "'!" + a;
        break;
      }
    }
    l == s.length &&
      s.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + e.SheetNames[n] + "'!" + a,
      }),
      Z(t, 161, fi(rt(a))),
      Z(t, 162);
  }
}
function Og(t, r, e) {
  Z(t, 133), Z(t, 137, vg(r, e)), Z(t, 138), Z(t, 134);
}
function Ng(t, r) {
  r['!protect'] && Z(t, 535, gg(r['!protect']));
}
function Rg(t, r, e, n) {
  var i = qt(),
    a = e.SheetNames[t],
    s = e.Sheets[a] || {},
    o = a;
  try {
    e && e.Workbook && (o = e.Workbook.Sheets[t].CodeName || o);
  } catch {}
  var l = rt(s['!ref'] || 'A1');
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
    Z(i, 129),
    (e.vbaraw || s['!outline']) && Z(i, 147, ym(o, s['!outline'])),
    Z(i, 148, Em(l)),
    Og(i, s, e.Workbook),
    yg(i, s),
    Tg(i, s, t, r),
    Ng(i, s),
    Dg(i, s, e, t),
    Sg(i, s),
    Cg(i, s, n),
    s['!margins'] && Z(i, 476, pg(s['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) && Ag(i, s),
    Fg(i, s, t, n),
    Z(i, 130),
    i.end()
  );
}
function kg(t, r) {
  t.l += 10;
  var e = Mt(t);
  return { name: e };
}
var Ig = [
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
function bg(t) {
  return !t.Workbook || !t.Workbook.WBProps
    ? 'false'
    : ud(t.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var Mg = '][*?/\\'.split('');
function Ec(t, r) {
  if (t.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var e = !0;
  return (
    Mg.forEach(function (n) {
      if (t.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    e
  );
}
function Pg(t, r, e) {
  t.forEach(function (n, i) {
    Ec(n);
    for (var a = 0; a < i; ++a)
      if (n == t[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (e) {
      var s = (r && r[i] && r[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function Lg(t) {
  if (!t || !t.SheetNames || !t.Sheets) throw new Error('Invalid Workbook');
  if (!t.SheetNames.length) throw new Error('Workbook is empty');
  var r = (t.Workbook && t.Workbook.Sheets) || [];
  Pg(t.SheetNames, r, !!t.vbaraw);
  for (var e = 0; e < t.SheetNames.length; ++e)
    am(t.Sheets[t.SheetNames[e]], t.SheetNames[e], e);
}
function Tc(t) {
  var r = [pt];
  r[r.length] = ie('workbook', null, { xmlns: si[0], 'xmlns:r': wt.r });
  var e = t.Workbook && (t.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  t.Workbook &&
    t.Workbook.WBProps &&
    (Ig.forEach(function (o) {
      t.Workbook.WBProps[o[0]] != null &&
        t.Workbook.WBProps[o[0]] != o[1] &&
        (n[o[0]] = t.Workbook.WBProps[o[0]]);
    }),
    t.Workbook.WBProps.CodeName &&
      ((n.codeName = t.Workbook.WBProps.CodeName), delete n.CodeName)),
    (r[r.length] = ie('workbookPr', null, n));
  var i = (t.Workbook && t.Workbook.Sheets) || [],
    a = 0;
  if (i && i[0] && i[0].Hidden) {
    for (
      r[r.length] = '<bookViews>', a = 0;
      a != t.SheetNames.length && !(!i[a] || !i[a].Hidden);
      ++a
    );
    a == t.SheetNames.length && (a = 0),
      (r[r.length] =
        '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>'),
      (r[r.length] = '</bookViews>');
  }
  for (r[r.length] = '<sheets>', a = 0; a != t.SheetNames.length; ++a) {
    var s = { name: Xe(t.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    r[r.length] = ie('sheet', null, s);
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
            o.Ref && (r[r.length] = ie('definedName', Xe(o.Ref), l));
        }),
      (r[r.length] = '</definedNames>')),
    r.length > 2 &&
      ((r[r.length] = '</workbook>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Bg(t, r) {
  var e = {};
  return (
    (e.Hidden = t.read_shift(4)),
    (e.iTabID = t.read_shift(4)),
    (e.strRelID = js(t)),
    (e.name = Mt(t)),
    e
  );
}
function Ug(t, r) {
  return (
    r || (r = G(127)),
    r.write_shift(4, t.Hidden),
    r.write_shift(4, t.iTabID),
    A0(t.strRelID, r),
    Tt(t.name.slice(0, 31), r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Hg(t, r) {
  var e = {},
    n = t.read_shift(4);
  e.defaultThemeVersion = t.read_shift(4);
  var i = r > 8 ? Mt(t) : '';
  return (
    i.length > 0 && (e.CodeName = i),
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
function Wg(t, r) {
  r || (r = G(72));
  var e = 0;
  return (
    t && t.filterPrivacy && (e |= 8),
    r.write_shift(4, e),
    r.write_shift(4, 0),
    bl((t && t.CodeName) || 'ThisWorkbook', r),
    r.slice(0, r.l)
  );
}
function Vg(t, r, e) {
  var n = t.l + r;
  (t.l += 4), (t.l += 1);
  var i = t.read_shift(4),
    a = bd(t),
    s = Qv(t, 0, e),
    o = y0(t);
  t.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), o && (l.Comment = o), l;
}
function jg(t, r) {
  Z(t, 143);
  for (var e = 0; e != r.SheetNames.length; ++e) {
    var n =
        (r.Workbook &&
          r.Workbook.Sheets &&
          r.Workbook.Sheets[e] &&
          r.Workbook.Sheets[e].Hidden) ||
        0,
      i = {
        Hidden: n,
        iTabID: e + 1,
        strRelID: 'rId' + (e + 1),
        name: r.SheetNames[e],
      };
    Z(t, 156, Ug(i));
  }
  Z(t, 144);
}
function Gg(t, r) {
  r || (r = G(127));
  for (var e = 0; e != 4; ++e) r.write_shift(4, 0);
  return (
    Tt('SheetJS', r),
    Tt(Aa.version, r),
    Tt(Aa.version, r),
    Tt('7262', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Yg(t, r) {
  r || (r = G(29)),
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
function $g(t, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var e = r.Workbook.Sheets, n = 0, i = -1, a = -1; n < e.length; ++n)
      !e[n] || (!e[n].Hidden && i == -1)
        ? (i = n)
        : e[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (Z(t, 135), Z(t, 158, Yg(i)), Z(t, 136));
  }
}
function Xg(t, r) {
  var e = qt();
  return (
    Z(e, 131),
    Z(e, 128, Gg()),
    Z(e, 153, Wg((t.Workbook && t.Workbook.WBProps) || null)),
    $g(e, t),
    jg(e, t),
    Z(e, 132),
    e.end()
  );
}
function Kg(t, r, e) {
  return (r.slice(-4) === '.bin' ? Xg : Tc)(t);
}
function zg(t, r, e, n, i) {
  return (r.slice(-4) === '.bin' ? Rg : _c)(t, e, n, i);
}
function qg(t, r, e) {
  return (r.slice(-4) === '.bin' ? px : ic)(t, e);
}
function Jg(t, r, e) {
  return (r.slice(-4) === '.bin' ? Wp : ec)(t, e);
}
function Zg(t, r, e) {
  return (r.slice(-4) === '.bin' ? Nx : lc)(t);
}
function Qg(t) {
  return (t.slice(-4) === '.bin' ? Tx : oc)();
}
function e2(t, r) {
  var e = [];
  return (
    t.Props && e.push(qd(t.Props, r)),
    t.Custprops && e.push(Jd(t.Props, t.Custprops)),
    e.join('')
  );
}
function t2() {
  return '';
}
function r2(t, r) {
  var e = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    r.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(ie('NumberFormat', null, { 'ss:Format': Xe(ft[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      e.push(ie('Style', a.join(''), s));
    }),
    ie('Styles', e.join(''))
  );
}
function Sc(t) {
  return ie('NamedRange', null, {
    'ss:Name': t.Name,
    'ss:RefersTo': '=' + O0(t.Ref, { r: 0, c: 0 }),
  });
}
function n2(t) {
  if (!((t || {}).Workbook || {}).Names) return '';
  for (var r = t.Workbook.Names, e = [], n = 0; n < r.length; ++n) {
    var i = r[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || e.push(Sc(i)));
  }
  return ie('Names', e.join(''));
}
function i2(t, r, e, n) {
  if (!t || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var o = i[s];
    o.Sheet == e && (o.Name.match(/^_xlfn\./) || a.push(Sc(o)));
  }
  return a.join('');
}
function a2(t, r, e, n) {
  if (!t) return '';
  var i = [];
  if (
    (t['!margins'] &&
      (i.push('<PageSetup>'),
      t['!margins'].header &&
        i.push(ie('Header', null, { 'x:Margin': t['!margins'].header })),
      t['!margins'].footer &&
        i.push(ie('Footer', null, { 'x:Margin': t['!margins'].footer })),
      i.push(
        ie('PageMargins', null, {
          'x:Bottom': t['!margins'].bottom || '0.75',
          'x:Left': t['!margins'].left || '0.7',
          'x:Right': t['!margins'].right || '0.7',
          'x:Top': t['!margins'].top || '0.75',
        }),
      ),
      i.push('</PageSetup>')),
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[e])
  )
    if (n.Workbook.Sheets[e].Hidden)
      i.push(
        ie(
          'Visible',
          n.Workbook.Sheets[e].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden',
          {},
        ),
      );
    else {
      for (
        var a = 0;
        a < e && !(n.Workbook.Sheets[a] && !n.Workbook.Sheets[a].Hidden);
        ++a
      );
      a == e && i.push('<Selected/>');
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
      i.push('<DisplayRightToLeft/>'),
    t['!protect'] &&
      (i.push(Ot('ProtectContents', 'True')),
      t['!protect'].objects && i.push(Ot('ProtectObjects', 'True')),
      t['!protect'].scenarios && i.push(Ot('ProtectScenarios', 'True')),
      t['!protect'].selectLockedCells != null &&
      !t['!protect'].selectLockedCells
        ? i.push(Ot('EnableSelection', 'NoSelection'))
        : t['!protect'].selectUnlockedCells != null &&
          !t['!protect'].selectUnlockedCells &&
          i.push(Ot('EnableSelection', 'UnlockedCells')),
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
        t['!protect'][s[0]] && i.push('<' + s[1] + '/>');
      })),
    i.length == 0 ? '' : ie('WorksheetOptions', i.join(''), { xmlns: sr.x })
  );
}
function s2(t) {
  return t
    .map(function (r) {
      var e = cd(r.t || ''),
        n = ie('ss:Data', e, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return ie('Comment', n, { 'ss:Author': r.a });
    })
    .join('');
}
function o2(t, r, e, n, i, a, s) {
  if (!t || (t.v == null && t.f == null)) return '';
  var o = {};
  if (
    (t.f && (o['ss:Formula'] = '=' + Xe(O0(t.f, s))),
    t.F && t.F.slice(0, r.length) == r)
  ) {
    var l = Et(t.F.slice(r.length + 1));
    o['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (t.l &&
      t.l.Target &&
      ((o['ss:HRef'] = Xe(t.l.Target)),
      t.l.Tooltip && (o['x:HRefScreenTip'] = Xe(t.l.Tooltip))),
    e['!merges'])
  )
    for (var f = e['!merges'], c = 0; c != f.length; ++c)
      f[c].s.c != s.c ||
        f[c].s.r != s.r ||
        (f[c].e.c > f[c].s.c && (o['ss:MergeAcross'] = f[c].e.c - f[c].s.c),
        f[c].e.r > f[c].s.r && (o['ss:MergeDown'] = f[c].e.r - f[c].s.r));
  var h = '',
    u = '';
  switch (t.t) {
    case 'z':
      if (!n.sheetStubs) return '';
      break;
    case 'n':
      (h = 'Number'), (u = String(t.v));
      break;
    case 'b':
      (h = 'Boolean'), (u = t.v ? '1' : '0');
      break;
    case 'e':
      (h = 'Error'), (u = Ki[t.v]);
      break;
    case 'd':
      (h = 'DateTime'),
        (u = new Date(t.v).toISOString()),
        t.z == null && (t.z = t.z || ft[14]);
      break;
    case 's':
      (h = 'String'), (u = ld(t.v || ''));
      break;
  }
  var p = vn(n.cellXfs, t, n);
  (o['ss:StyleID'] = 's' + (21 + p)), (o['ss:Index'] = s.c + 1);
  var x = t.v != null ? u : '',
    d = t.t == 'z' ? '' : '<Data ss:Type="' + h + '">' + x + '</Data>';
  return (t.c || []).length > 0 && (d += s2(t.c)), ie('Cell', d, o);
}
function f2(t, r) {
  var e = '<Row ss:Index="' + (t + 1) + '"';
  return (
    r &&
      (r.hpt && !r.hpx && (r.hpx = nc(r.hpt)),
      r.hpx && (e += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
      r.hidden && (e += ' ss:Hidden="1"')),
    e + '>'
  );
}
function l2(t, r, e, n) {
  if (!t['!ref']) return '';
  var i = rt(t['!ref']),
    a = t['!merges'] || [],
    s = 0,
    o = [];
  t['!cols'] &&
    t['!cols'].forEach(function (m, A) {
      F0(m);
      var D = !!m.width,
        F = ss(A, m),
        k = { 'ss:Index': A + 1 };
      D && (k['ss:Width'] = Ma(F.width)),
        m.hidden && (k['ss:Hidden'] = '1'),
        o.push(ie('Column', null, k));
    });
  for (var l = Array.isArray(t), f = i.s.r; f <= i.e.r; ++f) {
    for (var c = [f2(f, (t['!rows'] || [])[f])], h = i.s.c; h <= i.e.c; ++h) {
      var u = !1;
      for (s = 0; s != a.length; ++s)
        if (
          !(a[s].s.c > h) &&
          !(a[s].s.r > f) &&
          !(a[s].e.c < h) &&
          !(a[s].e.r < f)
        ) {
          (a[s].s.c != h || a[s].s.r != f) && (u = !0);
          break;
        }
      if (!u) {
        var p = { r: f, c: h },
          x = Ke(p),
          d = l ? (t[f] || [])[h] : t[x];
        c.push(o2(d, x, t, r, e, n, p));
      }
    }
    c.push('</Row>'), c.length > 2 && o.push(c.join(''));
  }
  return o.join('');
}
function c2(t, r, e) {
  var n = [],
    i = e.SheetNames[t],
    a = e.Sheets[i],
    s = a ? i2(a, r, t, e) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? l2(a, r, t, e) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(a2(a, r, t, e)),
    n.join('')
  );
}
function u2(t, r) {
  r || (r = {}),
    t.SSF || (t.SSF = Zt(ft)),
    t.SSF &&
      (ts(),
      es(t.SSF),
      (r.revssf = rs(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF),
      (r.cellXfs = []),
      vn(r.cellXfs, {}, { revssf: { General: 0 } }));
  var e = [];
  e.push(e2(t, r)), e.push(t2()), e.push(''), e.push('');
  for (var n = 0; n < t.SheetNames.length; ++n)
    e.push(ie('Worksheet', c2(n, r, t), { 'ss:Name': Xe(t.SheetNames[n]) }));
  return (
    (e[2] = r2(t, r)),
    (e[3] = n2(t)),
    pt +
      ie('Workbook', e.join(''), {
        xmlns: sr.ss,
        'xmlns:o': sr.o,
        'xmlns:x': sr.x,
        'xmlns:ss': sr.ss,
        'xmlns:dt': sr.dt,
        'xmlns:html': sr.html,
      })
  );
}
var _s = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function h2(t, r) {
  var e = [],
    n = [],
    i = [],
    a = 0,
    s,
    o = mo(No, 'n'),
    l = mo(Ro, 'n');
  if (t.Props)
    for (s = Rt(t.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(o, s[a])
        ? e
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], t.Props[s[a]]]);
  if (t.Custprops)
    for (s = Rt(t.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(t.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(o, s[a])
          ? e
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], t.Custprops[s[a]]]);
  var f = [];
  for (a = 0; a < i.length; ++a)
    Xl.indexOf(i[a][0]) > -1 ||
      Gl.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && f.push(i[a]));
  n.length && ze.utils.cfb_add(r, '/SummaryInformation', Po(n, _s.SI, l, Ro)),
    (e.length || f.length) &&
      ze.utils.cfb_add(
        r,
        '/DocumentSummaryInformation',
        Po(e, _s.DSI, o, No, f.length ? f : null, _s.UDI),
      );
}
function d2(t, r) {
  var e = r || {},
    n = ze.utils.cfb_new({ root: 'R' }),
    i = '/Workbook';
  switch (e.bookType || 'xls') {
    case 'xls':
      e.bookType = 'biff8';
    case 'xla':
      e.bookType || (e.bookType = 'xla');
    case 'biff8':
      (i = '/Workbook'), (e.biff = 8);
      break;
    case 'biff5':
      (i = '/Book'), (e.biff = 5);
      break;
    default:
      throw new Error('invalid type ' + e.bookType + ' for XLS CFB');
  }
  return (
    ze.utils.cfb_add(n, i, yc(t, e)),
    e.biff == 8 && (t.Props || t.Custprops) && h2(t, n),
    e.biff == 8 &&
      t.vbaraw &&
      Rx(
        n,
        ze.read(t.vbaraw, {
          type: typeof t.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var p2 = {
  0: { f: mm },
  1: { f: Am },
  2: { f: Ym },
  3: { f: Im },
  4: { f: Om },
  5: { f: Wm },
  6: { f: qm },
  7: { f: Lm },
  8: { f: ng },
  9: { f: rg },
  10: { f: eg },
  11: { f: tg },
  12: { f: Fm },
  13: { f: Xm },
  14: { f: Mm },
  15: { f: Rm },
  16: { f: jm },
  17: { f: Zm },
  18: { f: Um },
  19: { f: S0 },
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
  39: { f: Vg },
  40: {},
  42: {},
  43: { f: qp },
  44: { f: Kp },
  45: { f: Qp },
  46: { f: tx },
  47: { f: ex },
  48: {},
  49: { f: Fd },
  50: {},
  51: { f: mx },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Dp },
  62: { f: zm },
  63: { f: Sx },
  64: { f: _g },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Ur, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: xg },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: Sm },
  148: { f: wm, p: 16 },
  151: { f: lg },
  152: {},
  153: { f: Hg },
  154: {},
  155: {},
  156: { f: Bg },
  157: {},
  158: {},
  159: { T: 1, f: Bp },
  160: { T: -1 },
  161: { T: 1, f: Ln },
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
  176: { f: ig },
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
  335: { f: xx },
  336: { T: -1 },
  337: { f: wx, T: 1 },
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
  355: { f: js },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Tp },
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
  426: { f: cg },
  427: { f: ug },
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
  476: { f: dg },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: Tm },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: og },
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
  550: { f: js },
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
  632: { f: Dx },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: Cx },
  636: { T: -1 },
  637: { f: Rd },
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
  651: { f: kg },
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
  1053: { f: wg },
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
function ae(t, r, e, n) {
  var i = r;
  if (!isNaN(i)) {
    var a = n || (e || []).length || 0,
      s = t.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && w0(e) && t.push(e);
  }
}
function x2(t, r, e, n) {
  var i = (e || []).length || 0;
  if (i <= 8224) return ae(t, r, e, i);
  var a = r;
  if (!isNaN(a)) {
    for (
      var s = e.parts || [], o = 0, l = 0, f = 0;
      f + (s[o] || 8224) <= 8224;

    )
      (f += s[o] || 8224), o++;
    var c = t.next(4);
    for (
      c.write_shift(2, a),
        c.write_shift(2, f),
        t.push(e.slice(l, l + f)),
        l += f;
      l < i;

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
function qi(t, r, e) {
  return (
    t || (t = G(7)),
    t.write_shift(2, r),
    t.write_shift(2, e),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t
  );
}
function v2(t, r, e, n) {
  var i = G(9);
  return qi(i, t, r), zl(e, n || 'b', i), i;
}
function m2(t, r, e) {
  var n = G(8 + 2 * e.length);
  return (
    qi(n, t, r),
    n.write_shift(1, e.length),
    n.write_shift(e.length, e, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function g2(t, r, e, n) {
  if (r.v != null)
    switch (r.t) {
      case 'd':
      case 'n':
        var i = r.t == 'd' ? Jt(Wt(r.v)) : r.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? ae(t, 2, kp(e, n, i))
          : ae(t, 3, Rp(e, n, i));
        return;
      case 'b':
      case 'e':
        ae(t, 5, v2(e, n, r.v, r.t));
        return;
      case 's':
      case 'str':
        ae(t, 4, m2(e, n, (r.v || '').slice(0, 255)));
        return;
    }
  ae(t, 1, qi(null, e, n));
}
function _2(t, r, e, n) {
  var i = Array.isArray(r),
    a = rt(r['!ref'] || 'A1'),
    s,
    o = '',
    l = [];
  if (a.e.c > 255 || a.e.r > 16383) {
    if (n.WTF)
      throw new Error(
        'Range ' + (r['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (a.e.c = Math.min(a.e.c, 255)),
      (a.e.r = Math.min(a.e.c, 16383)),
      (s = ht(a));
  }
  for (var f = a.s.r; f <= a.e.r; ++f) {
    o = Nt(f);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      f === a.s.r && (l[c] = bt(c)), (s = l[c] + o);
      var h = i ? (r[f] || [])[c] : r[s];
      h && g2(t, h, f, c);
    }
  }
}
function w2(t, r) {
  for (var e = r || {}, n = qt(), i = 0, a = 0; a < t.SheetNames.length; ++a)
    t.SheetNames[a] == e.sheet && (i = a);
  if (i == 0 && e.sheet && t.SheetNames[0] != e.sheet)
    throw new Error('Sheet not found: ' + e.sheet);
  return (
    ae(n, e.biff == 4 ? 1033 : e.biff == 3 ? 521 : 9, C0(t, 16, e)),
    _2(n, t.Sheets[t.SheetNames[i]], i, e),
    ae(n, 10),
    n.end()
  );
}
function E2(t, r, e) {
  ae(t, 49, pp({ sz: 12, name: 'Arial' }, e));
}
function T2(t, r, e) {
  r &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        r[i] != null && ae(t, 1054, mp(i, r[i], e));
    });
}
function S2(t, r) {
  var e = G(19);
  e.write_shift(4, 2151),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 3),
    e.write_shift(1, 1),
    e.write_shift(4, 0),
    ae(t, 2151, e),
    (e = G(39)),
    e.write_shift(4, 2152),
    e.write_shift(4, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 3),
    e.write_shift(1, 0),
    e.write_shift(4, 0),
    e.write_shift(2, 1),
    e.write_shift(4, 4),
    e.write_shift(2, 0),
    Zl(rt(r['!ref'] || 'A1'), e),
    e.write_shift(4, 4),
    ae(t, 2152, e);
}
function y2(t, r) {
  for (var e = 0; e < 16; ++e) ae(t, 224, Bo({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function (n) {
    ae(t, 224, Bo(n, 0, r));
  });
}
function A2(t, r) {
  for (var e = 0; e < r['!links'].length; ++e) {
    var n = r['!links'][e];
    ae(t, 440, Ap(n)), n[1].Tooltip && ae(t, 2048, Cp(n));
  }
  delete r['!links'];
}
function C2(t, r) {
  if (r) {
    var e = 0;
    r.forEach(function (n, i) {
      ++e <= 256 && n && ae(t, 125, Op(ss(i, n), i));
    });
  }
}
function F2(t, r, e, n, i) {
  var a = 16 + vn(i.cellXfs, r, i);
  if (r.v == null && !r.bf) {
    ae(t, 513, Nn(e, n, a));
    return;
  }
  if (r.bf) ae(t, 6, Jv(r, e, n, i, a));
  else
    switch (r.t) {
      case 'd':
      case 'n':
        var s = r.t == 'd' ? Jt(Wt(r.v)) : r.v;
        ae(t, 515, Ep(e, n, s, a));
        break;
      case 'b':
      case 'e':
        ae(t, 517, wp(e, n, r.v, a, i, r.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var o = R0(i.Strings, r.v, i.revStrings);
          ae(t, 253, xp(e, n, o, a));
        } else ae(t, 516, vp(e, n, (r.v || '').slice(0, 255), a, i));
        break;
      default:
        ae(t, 513, Nn(e, n, a));
    }
}
function D2(t, r, e) {
  var n = qt(),
    i = e.SheetNames[t],
    a = e.Sheets[i] || {},
    s = (e || {}).Workbook || {},
    o = (s.Sheets || [])[t] || {},
    l = Array.isArray(a),
    f = r.biff == 8,
    c,
    h = '',
    u = [],
    p = rt(a['!ref'] || 'A1'),
    x = f ? 65536 : 16384;
  if (p.e.c > 255 || p.e.r >= x) {
    if (r.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (p.e.c = Math.min(p.e.c, 255)), (p.e.r = Math.min(p.e.c, x - 1));
  }
  ae(n, 2057, C0(e, 16, r)),
    ae(n, 13, vr(1)),
    ae(n, 12, vr(100)),
    ae(n, 15, Ht(!0)),
    ae(n, 17, Ht(!1)),
    ae(n, 16, On(0.001)),
    ae(n, 95, Ht(!0)),
    ae(n, 42, Ht(!1)),
    ae(n, 43, Ht(!1)),
    ae(n, 130, vr(1)),
    ae(n, 128, _p()),
    ae(n, 131, Ht(!1)),
    ae(n, 132, Ht(!1)),
    f && C2(n, a['!cols']),
    ae(n, 512, gp(p, r)),
    f && (a['!links'] = []);
  for (var d = p.s.r; d <= p.e.r; ++d) {
    h = Nt(d);
    for (var m = p.s.c; m <= p.e.c; ++m) {
      d === p.s.r && (u[m] = bt(m)), (c = u[m] + h);
      var A = l ? (a[d] || [])[m] : a[c];
      A && (F2(n, A, d, m, r), f && A.l && a['!links'].push([c, A.l]));
    }
  }
  var D = o.CodeName || o.name || i;
  return (
    f && ae(n, 574, dp((s.Views || [])[0])),
    f && (a['!merges'] || []).length && ae(n, 229, yp(a['!merges'])),
    f && A2(n, a),
    ae(n, 442, Jl(D)),
    f && S2(n, a),
    ae(n, 10),
    n.end()
  );
}
function O2(t, r, e) {
  var n = qt(),
    i = (t || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    o = e.biff == 8,
    l = e.biff == 5;
  if (
    (ae(n, 2057, C0(t, 5, e)),
    e.bookType == 'xla' && ae(n, 135),
    ae(n, 225, o ? vr(1200) : null),
    ae(n, 193, ep(2)),
    l && ae(n, 191),
    l && ae(n, 192),
    ae(n, 226),
    ae(n, 92, lp('SheetJS', e)),
    ae(n, 66, vr(o ? 1200 : 1252)),
    o && ae(n, 353, vr(0)),
    o && ae(n, 448),
    ae(n, 317, Np(t.SheetNames.length)),
    o && t.vbaraw && ae(n, 211),
    o && t.vbaraw)
  ) {
    var f = s.CodeName || 'ThisWorkbook';
    ae(n, 442, Jl(f));
  }
  ae(n, 156, vr(17)),
    ae(n, 25, Ht(!1)),
    ae(n, 18, Ht(!1)),
    ae(n, 19, vr(0)),
    o && ae(n, 431, Ht(!1)),
    o && ae(n, 444, vr(0)),
    ae(n, 61, hp()),
    ae(n, 64, Ht(!1)),
    ae(n, 141, vr(0)),
    ae(n, 34, Ht(bg(t) == 'true')),
    ae(n, 14, Ht(!0)),
    o && ae(n, 439, Ht(!1)),
    ae(n, 218, vr(0)),
    E2(n, t, e),
    T2(n, t.SSF, e),
    y2(n, e),
    o && ae(n, 352, Ht(!1));
  var c = n.end(),
    h = qt();
  o && ae(h, 140, Fp()), o && e.Strings && x2(h, 252, up(e.Strings)), ae(h, 10);
  var u = h.end(),
    p = qt(),
    x = 0,
    d = 0;
  for (d = 0; d < t.SheetNames.length; ++d)
    x += (o ? 12 : 11) + (o ? 2 : 1) * t.SheetNames[d].length;
  var m = c.length + x + u.length;
  for (d = 0; d < t.SheetNames.length; ++d) {
    var A = a[d] || {};
    ae(
      p,
      133,
      cp({ pos: m, hs: A.Hidden || 0, dt: 0, name: t.SheetNames[d] }, e),
    ),
      (m += r[d].length);
  }
  var D = p.end();
  if (x != D.length) throw new Error('BS8 ' + x + ' != ' + D.length);
  var F = [];
  return (
    c.length && F.push(c), D.length && F.push(D), u.length && F.push(u), Dt(F)
  );
}
function N2(t, r) {
  var e = r || {},
    n = [];
  t && !t.SSF && (t.SSF = Zt(ft)),
    t &&
      t.SSF &&
      (ts(),
      es(t.SSF),
      (e.revssf = rs(t.SSF)),
      (e.revssf[t.SSF[65535]] = 0),
      (e.ssf = t.SSF)),
    (e.Strings = []),
    (e.Strings.Count = 0),
    (e.Strings.Unique = 0),
    k0(e),
    (e.cellXfs = []),
    vn(e.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {});
  for (var i = 0; i < t.SheetNames.length; ++i) n[n.length] = D2(i, e, t);
  return n.unshift(O2(t, n, e)), Dt(n);
}
function yc(t, r) {
  for (var e = 0; e <= t.SheetNames.length; ++e) {
    var n = t.Sheets[t.SheetNames[e]];
    if (!(!n || !n['!ref'])) {
      var i = cr(n['!ref']);
      i.e.c > 255 &&
        typeof console < 'u' &&
        console.error &&
        console.error(
          "Worksheet '" +
            t.SheetNames[e] +
            "' extends beyond column IV (255).  Data may be lost.",
        );
    }
  }
  var a = r || {};
  switch (a.biff || 2) {
    case 8:
    case 5:
      return N2(t, r);
    case 4:
    case 3:
    case 2:
      return w2(t, r);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function R2(t, r, e, n) {
  for (var i = t['!merges'] || [], a = [], s = r.s.c; s <= r.e.c; ++s) {
    for (var o = 0, l = 0, f = 0; f < i.length; ++f)
      if (!(i[f].s.r > e || i[f].s.c > s) && !(i[f].e.r < e || i[f].e.c < s)) {
        if (i[f].s.r < e || i[f].s.c < s) {
          o = -1;
          break;
        }
        (o = i[f].e.r - i[f].s.r + 1), (l = i[f].e.c - i[f].s.c + 1);
        break;
      }
    if (!(o < 0)) {
      var c = Ke({ r: e, c: s }),
        h = n.dense ? (t[e] || [])[s] : t[c],
        u = (h && h.v != null && (h.h || fd(h.w || (en(h), h.w) || ''))) || '',
        p = {};
      o > 1 && (p.rowspan = o),
        l > 1 && (p.colspan = l),
        n.editable
          ? (u = '<span contenteditable="true">' + u + '</span>')
          : h &&
            ((p['data-t'] = (h && h.t) || 'z'),
            h.v != null && (p['data-v'] = h.v),
            h.z != null && (p['data-z'] = h.z),
            h.l &&
              (h.l.Target || '#').charAt(0) != '#' &&
              (u = '<a href="' + h.l.Target + '">' + u + '</a>')),
        (p.id = (n.id || 'sjs') + '-' + c),
        a.push(ie('td', u, p));
    }
  }
  var x = '<tr>';
  return x + a.join('') + '</tr>';
}
var k2 =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  I2 = '</body></html>';
function b2(t, r, e) {
  var n = [];
  return n.join('') + '<table' + (e && e.id ? ' id="' + e.id + '"' : '') + '>';
}
function Ac(t, r) {
  var e = r || {},
    n = e.header != null ? e.header : k2,
    i = e.footer != null ? e.footer : I2,
    a = [n],
    s = cr(t['!ref']);
  (e.dense = Array.isArray(t)), a.push(b2(t, s, e));
  for (var o = s.s.r; o <= s.e.r; ++o) a.push(R2(t, s, o, e));
  return a.push('</table>' + i), a.join('');
}
function Cc(t, r, e) {
  var n = e || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? Et(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var o = r.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, o.length),
    f = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (t['!ref']) {
    var c = cr(t['!ref']);
    (f.s.r = Math.min(f.s.r, c.s.r)),
      (f.s.c = Math.min(f.s.c, c.s.c)),
      (f.e.r = Math.max(f.e.r, c.e.r)),
      (f.e.c = Math.max(f.e.c, c.e.c)),
      i == -1 && (f.e.r = i = c.e.r + 1);
  }
  var h = [],
    u = 0,
    p = t['!rows'] || (t['!rows'] = []),
    x = 0,
    d = 0,
    m = 0,
    A = 0,
    D = 0,
    F = 0;
  for (t['!cols'] || (t['!cols'] = []); x < o.length && d < l; ++x) {
    var k = o[x];
    if (Yo(k)) {
      if (n.display) continue;
      p[d] = { hidden: !0 };
    }
    var j = k.children;
    for (m = A = 0; m < j.length; ++m) {
      var ee = j[m];
      if (!(n.display && Yo(ee))) {
        var N = ee.hasAttribute('data-v')
            ? ee.getAttribute('data-v')
            : ee.hasAttribute('v')
              ? ee.getAttribute('v')
              : hd(ee.innerHTML),
          W = ee.getAttribute('data-z') || ee.getAttribute('z');
        for (u = 0; u < h.length; ++u) {
          var M = h[u];
          M.s.c == A + a &&
            M.s.r < d + i &&
            d + i <= M.e.r &&
            ((A = M.e.c + 1 - a), (u = -1));
        }
        (F = +ee.getAttribute('colspan') || 1),
          ((D = +ee.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            h.push({
              s: { r: d + i, c: A + a },
              e: { r: d + i + (D || 1) - 1, c: A + a + (F || 1) - 1 },
            });
        var X = { t: 's', v: N },
          K = ee.getAttribute('data-t') || ee.getAttribute('t') || '';
        N != null &&
          (N.length == 0
            ? (X.t = K || 'z')
            : n.raw ||
              N.trim().length == 0 ||
              K == 's' ||
              (N === 'TRUE'
                ? (X = { t: 'b', v: !0 })
                : N === 'FALSE'
                  ? (X = { t: 'b', v: !1 })
                  : isNaN(qr(N))
                    ? isNaN(Mi(N).getDate()) ||
                      ((X = { t: 'd', v: Wt(N) }),
                      n.cellDates || (X = { t: 'n', v: Jt(X.v) }),
                      (X.z = n.dateNF || ft[14]))
                    : (X = { t: 'n', v: qr(N) }))),
          X.z === void 0 && W != null && (X.z = W);
        var J = '',
          ne = ee.getElementsByTagName('A');
        if (ne && ne.length)
          for (
            var ke = 0;
            ke < ne.length &&
            !(
              ne[ke].hasAttribute('href') &&
              ((J = ne[ke].getAttribute('href')), J.charAt(0) != '#')
            );
            ++ke
          );
        J && J.charAt(0) != '#' && (X.l = { Target: J }),
          n.dense
            ? (t[d + i] || (t[d + i] = []), (t[d + i][A + a] = X))
            : (t[Ke({ c: A + a, r: d + i })] = X),
          f.e.c < A + a && (f.e.c = A + a),
          (A += F);
      }
    }
    ++d;
  }
  return (
    h.length && (t['!merges'] = (t['!merges'] || []).concat(h)),
    (f.e.r = Math.max(f.e.r, d - 1 + i)),
    (t['!ref'] = ht(f)),
    d >= l && (t['!fullref'] = ht(((f.e.r = o.length - x + d - 1 + i), f))),
    t
  );
}
function Fc(t, r) {
  var e = r || {},
    n = e.dense ? [] : {};
  return Cc(n, t, r);
}
function M2(t, r) {
  return In(Fc(t, r), r);
}
function Yo(t) {
  var r = '',
    e = P2(t);
  return (
    e && (r = e(t).getPropertyValue('display')),
    r || (r = t.style && t.style.display),
    r === 'none'
  );
}
function P2(t) {
  return t.ownerDocument.defaultView &&
    typeof t.ownerDocument.defaultView.getComputedStyle == 'function'
    ? t.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var L2 = (function () {
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
        Li({
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
      return pt + r;
    };
  })(),
  $o = (function () {
    var t = function (a) {
        return Xe(a)
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
      n = function (a, s, o) {
        var l = [];
        l.push(
          '      <table:table table:name="' +
            Xe(s.SheetNames[o]) +
            `" table:style-name="ta1">
`,
        );
        var f = 0,
          c = 0,
          h = cr(a['!ref'] || 'A1'),
          u = a['!merges'] || [],
          p = 0,
          x = Array.isArray(a);
        if (a['!cols'])
          for (c = 0; c <= h.e.c; ++c)
            l.push(
              '        <table:table-column' +
                (a['!cols'][c]
                  ? ' table:style-name="co' + a['!cols'][c].ods + '"'
                  : '') +
                `></table:table-column>
`,
            );
        var d = '',
          m = a['!rows'] || [];
        for (f = 0; f < h.s.r; ++f)
          (d = m[f] ? ' table:style-name="ro' + m[f].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                d +
                `></table:table-row>
`,
            );
        for (; f <= h.e.r; ++f) {
          for (
            d = m[f] ? ' table:style-name="ro' + m[f].ods + '"' : '',
              l.push(
                '        <table:table-row' +
                  d +
                  `>
`,
              ),
              c = 0;
            c < h.s.c;
            ++c
          )
            l.push(r);
          for (; c <= h.e.c; ++c) {
            var A = !1,
              D = {},
              F = '';
            for (p = 0; p != u.length; ++p)
              if (
                !(u[p].s.c > c) &&
                !(u[p].s.r > f) &&
                !(u[p].e.c < c) &&
                !(u[p].e.r < f)
              ) {
                (u[p].s.c != c || u[p].s.r != f) && (A = !0),
                  (D['table:number-columns-spanned'] = u[p].e.c - u[p].s.c + 1),
                  (D['table:number-rows-spanned'] = u[p].e.r - u[p].s.r + 1);
                break;
              }
            if (A) {
              l.push(e);
              continue;
            }
            var k = Ke({ r: f, c }),
              j = x ? (a[f] || [])[c] : a[k];
            if (
              j &&
              j.f &&
              ((D['table:formula'] = Xe(nm(j.f))),
              j.F && j.F.slice(0, k.length) == k)
            ) {
              var ee = cr(j.F);
              (D['table:number-matrix-columns-spanned'] = ee.e.c - ee.s.c + 1),
                (D['table:number-matrix-rows-spanned'] = ee.e.r - ee.s.r + 1);
            }
            if (!j) {
              l.push(r);
              continue;
            }
            switch (j.t) {
              case 'b':
                (F = j.v ? 'TRUE' : 'FALSE'),
                  (D['office:value-type'] = 'boolean'),
                  (D['office:boolean-value'] = j.v ? 'true' : 'false');
                break;
              case 'n':
                (F = j.w || String(j.v || 0)),
                  (D['office:value-type'] = 'float'),
                  (D['office:value'] = j.v || 0);
                break;
              case 's':
              case 'str':
                (F = j.v == null ? '' : j.v),
                  (D['office:value-type'] = 'string');
                break;
              case 'd':
                (F = j.w || Wt(j.v).toISOString()),
                  (D['office:value-type'] = 'date'),
                  (D['office:date-value'] = Wt(j.v).toISOString()),
                  (D['table:style-name'] = 'ce1');
                break;
              default:
                l.push(r);
                continue;
            }
            var N = t(F);
            if (j.l && j.l.Target) {
              var W = j.l.Target;
              (W = W.charAt(0) == '#' ? '#' + im(W.slice(1)) : W),
                W.charAt(0) != '#' && !W.match(/^\w+:/) && (W = '../' + W),
                (N = ie('text:a', N, {
                  'xlink:href': W.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                ie('table:table-cell', ie('text:p', N, {}), D) +
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
      i = function (a, s) {
        a.push(` <office:automatic-styles>
`),
          a.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),
          a.push(`   <number:month number:style="long"/>
`),
          a.push(`   <number:text>/</number:text>
`),
          a.push(`   <number:day number:style="long"/>
`),
          a.push(`   <number:text>/</number:text>
`),
          a.push(`   <number:year/>
`),
          a.push(`  </number:date-style>
`);
        var o = 0;
        s.SheetNames.map(function (f) {
          return s.Sheets[f];
        }).forEach(function (f) {
          if (f && f['!cols']) {
            for (var c = 0; c < f['!cols'].length; ++c)
              if (f['!cols'][c]) {
                var h = f['!cols'][c];
                if (h.width == null && h.wpx == null && h.wch == null) continue;
                F0(h), (h.ods = o);
                var u = f['!cols'][c].wpx + 'px';
                a.push(
                  '  <style:style style:name="co' +
                    o +
                    `" style:family="table-column">
`,
                ),
                  a.push(
                    '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                      u +
                      `"/>
`,
                  ),
                  a.push(`  </style:style>
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
                var h = f['!rows'][c].hpx + 'px';
                a.push(
                  '  <style:style style:name="ro' +
                    l +
                    `" style:family="table-row">
`,
                ),
                  a.push(
                    '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                      h +
                      `"/>
`,
                  ),
                  a.push(`  </style:style>
`),
                  ++l;
              }
          }
        }),
          a.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),
          a.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),
          a.push(`  </style:style>
`),
          a.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),
          a.push(` </office:automatic-styles>
`);
      };
    return function (s, o) {
      var l = [pt],
        f = Li({
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
        c = Li({
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
          l.push(Vl().replace(/office:document-meta/g, 'office:meta')))
        : l.push(
            '<office:document-content' +
              f +
              `>
`,
          ),
        i(l, s),
        l.push(`  <office:body>
`),
        l.push(`    <office:spreadsheet>
`);
      for (var h = 0; h != s.SheetNames.length; ++h)
        l.push(n(s.Sheets[s.SheetNames[h]], s, h));
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
function Dc(t, r) {
  if (r.bookType == 'fods') return $o(t, r);
  var e = v0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    De(e, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    De(e, n, $o(t, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    De(e, n, L2(t, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    De(e, n, pt + Vl()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    De(e, n, zd(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    De(e, n, Xd(i)),
    e
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function Ba(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function B2(t) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(t) : Cr(Pi(t));
}
function U2(t, r) {
  e: for (var e = 0; e <= t.length - r.length; ++e) {
    for (var n = 0; n < r.length; ++n) if (t[e + n] != r[n]) continue e;
    return !0;
  }
  return !1;
}
function xn(t) {
  var r = t.reduce(function (i, a) {
      return i + a.length;
    }, 0),
    e = new Uint8Array(r),
    n = 0;
  return (
    t.forEach(function (i) {
      e.set(i, n), (n += i.length);
    }),
    e
  );
}
function H2(t, r, e) {
  var n =
      Math.floor(e == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(e))) + 6176 - 20,
    i = e / Math.pow(10, n - 6176);
  (t[r + 15] |= n >> 7), (t[r + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) t[r + a] = i & 255;
  t[r + 15] |= e >= 0 ? 0 : 128;
}
function Bi(t, r) {
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
function qn(t) {
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
function mt(t) {
  for (var r = [], e = [0]; e[0] < t.length; ) {
    var n = e[0],
      i = Bi(t, e),
      a = i & 7;
    i = Math.floor(i / 8);
    var s = 0,
      o;
    if (i == 0) break;
    switch (a) {
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
        (s = Bi(t, e)), (o = t.slice(e[0], e[0] + s)), (e[0] += s);
        break;
      case 3:
      case 4:
      default:
        throw new Error(
          'PB Type '
            .concat(a, ' for Field ')
            .concat(i, ' at offset ')
            .concat(n),
        );
    }
    var f = { data: o, type: a };
    r[i] == null ? (r[i] = [f]) : r[i].push(f);
  }
  return r;
}
function Ct(t) {
  var r = [];
  return (
    t.forEach(function (e, n) {
      e.forEach(function (i) {
        i.data &&
          (r.push(Ye(n * 8 + i.type)),
          i.type == 2 && r.push(Ye(i.data.length)),
          r.push(i.data));
      });
    }),
    xn(r)
  );
}
function yr(t) {
  for (var r, e = [], n = [0]; n[0] < t.length; ) {
    var i = Bi(t, n),
      a = mt(t.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: qn(a[1][0].data), messages: [] };
    a[2].forEach(function (o) {
      var l = mt(o.data),
        f = qn(l[3][0].data);
      s.messages.push({ meta: l, data: t.slice(n[0], n[0] + f) }), (n[0] += f);
    }),
      (r = a[3]) != null && r[0] && (s.merge = qn(a[3][0].data) >>> 0 > 0),
      e.push(s);
  }
  return e;
}
function jn(t) {
  var r = [];
  return (
    t.forEach(function (e) {
      var n = [];
      (n[1] = [{ data: Ye(e.id), type: 0 }]),
        (n[2] = []),
        e.merge != null && (n[3] = [{ data: Ye(+!!e.merge), type: 0 }]);
      var i = [];
      e.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: Ye(s.data.length) }]),
          n[2].push({ data: Ct(s.meta), type: 2 });
      });
      var a = Ct(n);
      r.push(Ye(a.length)),
        r.push(a),
        i.forEach(function (s) {
          return r.push(s);
        });
    }),
    xn(r)
  );
}
function W2(t, r) {
  if (t != 0) throw new Error('Unexpected Snappy chunk type '.concat(t));
  for (var e = [0], n = Bi(r, e), i = []; e[0] < r.length; ) {
    var a = r[e[0]] & 3;
    if (a == 0) {
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
      i.push(r.slice(e[0], e[0] + s)), (e[0] += s);
      continue;
    } else {
      var l = 0,
        f = 0;
      if (
        (a == 1
          ? ((f = ((r[e[0]] >> 2) & 7) + 4),
            (l = (r[e[0]++] & 224) << 3),
            (l |= r[e[0]++]))
          : ((f = (r[e[0]++] >> 2) + 1),
            a == 2
              ? ((l = r[e[0]] | (r[e[0] + 1] << 8)), (e[0] += 2))
              : ((l =
                  (r[e[0]] |
                    (r[e[0] + 1] << 8) |
                    (r[e[0] + 2] << 16) |
                    (r[e[0] + 3] << 24)) >>>
                  0),
                (e[0] += 4))),
        (i = [xn(i)]),
        l == 0)
      )
        throw new Error('Invalid offset 0');
      if (l > i[0].length) throw new Error('Invalid offset beyond length');
      if (f >= l)
        for (i.push(i[0].slice(-l)), f -= l; f >= i[i.length - 1].length; )
          i.push(i[i.length - 1]), (f -= i[i.length - 1].length);
      i.push(i[0].slice(-l, -l + f));
    }
  }
  var c = xn(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Ar(t) {
  for (var r = [], e = 0; e < t.length; ) {
    var n = t[e++],
      i = t[e] | (t[e + 1] << 8) | (t[e + 2] << 16);
    (e += 3), r.push(W2(n, t.slice(e, e + i))), (e += i);
  }
  if (e !== t.length) throw new Error('data is not a valid framed stream!');
  return xn(r);
}
function Gn(t) {
  for (var r = [], e = 0; e < t.length; ) {
    var n = Math.min(t.length - e, 268435455),
      i = new Uint8Array(4);
    r.push(i);
    var a = Ye(n),
      s = a.length;
    r.push(a),
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
      (i[0] = 0),
      (i[1] = s & 255),
      (i[2] = (s >> 8) & 255),
      (i[3] = (s >> 16) & 255),
      (e += n);
  }
  return xn(r);
}
function ws(t, r) {
  var e = new Uint8Array(32),
    n = Ba(e),
    i = 12,
    a = 0;
  switch (((e[0] = 5), t.t)) {
    case 'n':
      (e[1] = 2), H2(e, i, t.v), (a |= 1), (i += 16);
      break;
    case 'b':
      (e[1] = 6), n.setFloat64(i, t.v ? 1 : 0, !0), (a |= 2), (i += 8);
      break;
    case 's':
      if (r.indexOf(t.v) == -1)
        throw new Error('Value '.concat(t.v, ' missing from SST!'));
      (e[1] = 3), n.setUint32(i, r.indexOf(t.v), !0), (a |= 8), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + t.t;
  }
  return n.setUint32(8, a, !0), e.slice(0, i);
}
function Es(t, r) {
  var e = new Uint8Array(32),
    n = Ba(e),
    i = 12,
    a = 0;
  switch (((e[0] = 3), t.t)) {
    case 'n':
      (e[2] = 2), n.setFloat64(i, t.v, !0), (a |= 32), (i += 8);
      break;
    case 'b':
      (e[2] = 6), n.setFloat64(i, t.v ? 1 : 0, !0), (a |= 32), (i += 8);
      break;
    case 's':
      if (r.indexOf(t.v) == -1)
        throw new Error('Value '.concat(t.v, ' missing from SST!'));
      (e[2] = 3), n.setUint32(i, r.indexOf(t.v), !0), (a |= 16), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + t.t;
  }
  return n.setUint32(4, a, !0), e.slice(0, i);
}
function an(t) {
  var r = mt(t);
  return Bi(r[1][0].data);
}
function V2(t, r, e) {
  var n, i, a, s;
  if (!((n = t[6]) != null && n[0]) || !((i = t[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var o =
    (((s = (a = t[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      qn(t[8][0].data) > 0) ||
    !1;
  if (o) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      f = Ba(t[7][0].data),
      c = 0,
      h = [],
      u = Ba(t[4][0].data),
      p = 0,
      x = [],
      d = 0;
    d < r.length;
    ++d
  ) {
    if (r[d] == null) {
      f.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535);
      continue;
    }
    f.setUint16(d * 2, c, !0), u.setUint16(d * 2, p, !0);
    var m, A;
    switch (typeof r[d]) {
      case 'string':
        (m = ws({ t: 's', v: r[d] }, e)), (A = Es({ t: 's', v: r[d] }, e));
        break;
      case 'number':
        (m = ws({ t: 'n', v: r[d] }, e)), (A = Es({ t: 'n', v: r[d] }, e));
        break;
      case 'boolean':
        (m = ws({ t: 'b', v: r[d] }, e)), (A = Es({ t: 'b', v: r[d] }, e));
        break;
      default:
        throw new Error('Unsupported value ' + r[d]);
    }
    h.push(m), (c += m.length), x.push(A), (p += A.length), ++l;
  }
  for (t[2][0].data = Ye(l); d < t[7][0].data.length / 2; ++d)
    f.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535, !0);
  return (t[6][0].data = xn(h)), (t[3][0].data = xn(x)), l;
}
function j2(t, r) {
  if (!r || !r.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var e = t.Sheets[t.SheetNames[0]];
  t.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = cr(e['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(ht(n)),
      );
  var a = Ua(e, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (U) {
    return U.forEach(function (I) {
      typeof I == 'string' && s.push(I);
    });
  });
  var o = {},
    l = [],
    f = ze.read(r.numbers, { type: 'base64' });
  f.FileIndex.map(function (U, I) {
    return [U, f.FullPaths[I]];
  }).forEach(function (U) {
    var I = U[0],
      O = U[1];
    if (I.type == 2 && I.name.match(/\.iwa/)) {
      var q = I.content,
        xe = Ar(q),
        ve = yr(xe);
      ve.forEach(function (de) {
        l.push(de.id),
          (o[de.id] = {
            deps: [],
            location: O,
            type: qn(de.messages[0].meta[1][0].data),
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
      var O = yr(Ar(I.content));
      O.forEach(function (q) {
        q.messages.forEach(function (xe) {
          c.forEach(function (ve) {
            q.messages.some(function (de) {
              return qn(de.meta[1][0].data) != 11006 && U2(de.data, ve[1]);
            }) && o[ve[0]].deps.push(q.id);
          });
        });
      });
    }
  });
  for (
    var h = ze.find(f, o[1].location), u = yr(Ar(h.content)), p, x = 0;
    x < u.length;
    ++x
  ) {
    var d = u[x];
    d.id == 1 && (p = d);
  }
  var m = an(mt(p.messages[0].data)[1][0].data);
  for (
    h = ze.find(f, o[m].location), u = yr(Ar(h.content)), x = 0;
    x < u.length;
    ++x
  )
    (d = u[x]), d.id == m && (p = d);
  for (
    m = an(mt(p.messages[0].data)[2][0].data),
      h = ze.find(f, o[m].location),
      u = yr(Ar(h.content)),
      x = 0;
    x < u.length;
    ++x
  )
    (d = u[x]), d.id == m && (p = d);
  for (
    m = an(mt(p.messages[0].data)[2][0].data),
      h = ze.find(f, o[m].location),
      u = yr(Ar(h.content)),
      x = 0;
    x < u.length;
    ++x
  )
    (d = u[x]), d.id == m && (p = d);
  var A = mt(p.messages[0].data);
  {
    (A[6][0].data = Ye(n.e.r + 1)), (A[7][0].data = Ye(n.e.c + 1));
    var D = an(A[46][0].data),
      F = ze.find(f, o[D].location),
      k = yr(Ar(F.content));
    {
      for (var j = 0; j < k.length && k[j].id != D; ++j);
      if (k[j].id != D) throw 'Bad ColumnRowUIDMapArchive';
      var ee = mt(k[j].messages[0].data);
      (ee[1] = []), (ee[2] = []), (ee[3] = []);
      for (var N = 0; N <= n.e.c; ++N) {
        var W = [];
        (W[1] = W[2] = [{ type: 0, data: Ye(N + 420690) }]),
          ee[1].push({ type: 2, data: Ct(W) }),
          ee[2].push({ type: 0, data: Ye(N) }),
          ee[3].push({ type: 0, data: Ye(N) });
      }
      (ee[4] = []), (ee[5] = []), (ee[6] = []);
      for (var M = 0; M <= n.e.r; ++M)
        (W = []),
          (W[1] = W[2] = [{ type: 0, data: Ye(M + 726270) }]),
          ee[4].push({ type: 2, data: Ct(W) }),
          ee[5].push({ type: 0, data: Ye(M) }),
          ee[6].push({ type: 0, data: Ye(M) });
      k[j].messages[0].data = Ct(ee);
    }
    (F.content = Gn(jn(k))), (F.size = F.content.length), delete A[46];
    var X = mt(A[4][0].data);
    {
      X[7][0].data = Ye(n.e.r + 1);
      var K = mt(X[1][0].data),
        J = an(K[2][0].data);
      (F = ze.find(f, o[J].location)), (k = yr(Ar(F.content)));
      {
        if (k[0].id != J) throw 'Bad HeaderStorageBucket';
        var ne = mt(k[0].messages[0].data);
        for (M = 0; M < a.length; ++M) {
          var ke = mt(ne[2][0].data);
          (ke[1][0].data = Ye(M)),
            (ke[4][0].data = Ye(a[M].length)),
            (ne[2][M] = { type: ne[2][0].type, data: Ct(ke) });
        }
        k[0].messages[0].data = Ct(ne);
      }
      (F.content = Gn(jn(k))), (F.size = F.content.length);
      var _e = an(X[2][0].data);
      (F = ze.find(f, o[_e].location)), (k = yr(Ar(F.content)));
      {
        if (k[0].id != _e) throw 'Bad HeaderStorageBucket';
        for (ne = mt(k[0].messages[0].data), N = 0; N <= n.e.c; ++N)
          (ke = mt(ne[2][0].data)),
            (ke[1][0].data = Ye(N)),
            (ke[4][0].data = Ye(n.e.r + 1)),
            (ne[2][N] = { type: ne[2][0].type, data: Ct(ke) });
        k[0].messages[0].data = Ct(ne);
      }
      (F.content = Gn(jn(k))), (F.size = F.content.length);
      var nt = an(X[4][0].data);
      (function () {
        for (
          var U = ze.find(f, o[nt].location), I = yr(Ar(U.content)), O, q = 0;
          q < I.length;
          ++q
        ) {
          var xe = I[q];
          xe.id == nt && (O = xe);
        }
        var ve = mt(O.messages[0].data);
        {
          ve[3] = [];
          var de = [];
          s.forEach(function (Ce, lt) {
            (de[1] = [{ type: 0, data: Ye(lt) }]),
              (de[2] = [{ type: 0, data: Ye(1) }]),
              (de[3] = [{ type: 2, data: B2(Ce) }]),
              ve[3].push({ type: 2, data: Ct(de) });
          });
        }
        O.messages[0].data = Ct(ve);
        var fe = jn(I),
          Me = Gn(fe);
        (U.content = Me), (U.size = U.content.length);
      })();
      var Je = mt(X[3][0].data);
      {
        var gt = Je[1][0];
        delete Je[2];
        var it = mt(gt.data);
        {
          var St = an(it[2][0].data);
          (function () {
            for (
              var U = ze.find(f, o[St].location),
                I = yr(Ar(U.content)),
                O,
                q = 0;
              q < I.length;
              ++q
            ) {
              var xe = I[q];
              xe.id == St && (O = xe);
            }
            var ve = mt(O.messages[0].data);
            {
              delete ve[6], delete Je[7];
              var de = new Uint8Array(ve[5][0].data);
              ve[5] = [];
              for (var fe = 0, Me = 0; Me <= n.e.r; ++Me) {
                var Ce = mt(de);
                (fe += V2(Ce, a[Me], s)),
                  (Ce[1][0].data = Ye(Me)),
                  ve[5].push({ data: Ct(Ce), type: 2 });
              }
              (ve[1] = [{ type: 0, data: Ye(n.e.c + 1) }]),
                (ve[2] = [{ type: 0, data: Ye(n.e.r + 1) }]),
                (ve[3] = [{ type: 0, data: Ye(fe) }]),
                (ve[4] = [{ type: 0, data: Ye(n.e.r + 1) }]);
            }
            O.messages[0].data = Ct(ve);
            var lt = jn(I),
              be = Gn(lt);
            (U.content = be), (U.size = U.content.length);
          })();
        }
        gt.data = Ct(it);
      }
      X[3][0].data = Ct(Je);
    }
    A[4][0].data = Ct(X);
  }
  p.messages[0].data = Ct(A);
  var xt = jn(u),
    C = Gn(xt);
  return (h.content = C), (h.size = h.content.length), f;
}
function G2(t) {
  return function (e) {
    for (var n = 0; n != t.length; ++n) {
      var i = t[n];
      e[i[0]] === void 0 && (e[i[0]] = i[1]),
        i[2] === 'n' && (e[i[0]] = Number(e[i[0]]));
    }
  };
}
function k0(t) {
  G2([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(t);
}
function Y2(t, r) {
  return r.bookType == 'ods'
    ? Dc(t, r)
    : r.bookType == 'numbers'
      ? j2(t, r)
      : r.bookType == 'xlsb'
        ? $2(t, r)
        : X2(t, r);
}
function $2(t, r) {
  ($n = 1024),
    t && !t.SSF && (t.SSF = Zt(ft)),
    t &&
      t.SSF &&
      (ts(),
      es(t.SSF),
      (r.revssf = rs(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Ci
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var e = r.bookType == 'xlsb' ? 'bin' : 'xml',
    n = cc.indexOf(r.bookType) > -1,
    i = Ul();
  k0((r = r || {}));
  var a = v0(),
    s = '',
    o = 0;
  if (
    ((r.cellXfs = []),
    vn(r.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {}),
    (s = 'docProps/core.xml'),
    De(a, s, jl(t.Props, r)),
    i.coreprops.push(s),
    $e(r.rels, 2, s, He.CORE_PROPS),
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
      De(a, s, Yl(t.Props)),
      i.extprops.push(s),
      $e(r.rels, 3, s, He.EXT_PROPS),
      t.Custprops !== t.Props &&
        Rt(t.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        De(a, s, $l(t.Custprops)),
        i.custprops.push(s),
        $e(r.rels, 4, s, He.CUST_PROPS)),
      o = 1;
    o <= t.SheetNames.length;
    ++o
  ) {
    var c = { '!id': {} },
      h = t.Sheets[t.SheetNames[o - 1]],
      u = (h || {})['!type'] || 'sheet';
    switch (u) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + o + '.' + e),
          De(a, s, zg(o - 1, s, r, t, c)),
          i.sheets.push(s),
          $e(r.wbrels, -1, 'worksheets/sheet' + o + '.' + e, He.WS[0]);
    }
    if (h) {
      var p = h['!comments'],
        x = !1,
        d = '';
      p &&
        p.length > 0 &&
        ((d = 'xl/comments' + o + '.' + e),
        De(a, d, Zg(p, d)),
        i.comments.push(d),
        $e(c, -1, '../comments' + o + '.' + e, He.CMNT),
        (x = !0)),
        h['!legacy'] &&
          x &&
          De(a, 'xl/drawings/vmlDrawing' + o + '.vml', fc(o, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    c['!id'].rId1 && De(a, Wl(s), Kn(c));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + e),
      De(a, s, Jg(r.Strings, s, r)),
      i.strs.push(s),
      $e(r.wbrels, -1, 'sharedStrings.' + e, He.SST)),
    (s = 'xl/workbook.' + e),
    De(a, s, Kg(t, s)),
    i.workbooks.push(s),
    $e(r.rels, 1, s, He.WB),
    (s = 'xl/theme/theme1.xml'),
    De(a, s, sc(t.Themes, r)),
    i.themes.push(s),
    $e(r.wbrels, -1, 'theme/theme1.xml', He.THEME),
    (s = 'xl/styles.' + e),
    De(a, s, qg(t, s, r)),
    i.styles.push(s),
    $e(r.wbrels, -1, 'styles.' + e, He.STY),
    t.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      De(a, s, t.vbaraw),
      i.vba.push(s),
      $e(r.wbrels, -1, 'vbaProject.bin', He.VBA)),
    (s = 'xl/metadata.' + e),
    De(a, s, Qg(s)),
    i.metadata.push(s),
    $e(r.wbrels, -1, 'metadata.' + e, He.XLMETA),
    De(a, '[Content_Types].xml', Hl(i, r)),
    De(a, '_rels/.rels', Kn(r.rels)),
    De(a, 'xl/_rels/workbook.' + e + '.rels', Kn(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function X2(t, r) {
  ($n = 1024),
    t && !t.SSF && (t.SSF = Zt(ft)),
    t &&
      t.SSF &&
      (ts(),
      es(t.SSF),
      (r.revssf = rs(t.SSF)),
      (r.revssf[t.SSF[65535]] = 0),
      (r.ssf = t.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Ci
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var e = 'xml',
    n = cc.indexOf(r.bookType) > -1,
    i = Ul();
  k0((r = r || {}));
  var a = v0(),
    s = '',
    o = 0;
  if (
    ((r.cellXfs = []),
    vn(r.cellXfs, {}, { revssf: { General: 0 } }),
    t.Props || (t.Props = {}),
    (s = 'docProps/core.xml'),
    De(a, s, jl(t.Props, r)),
    i.coreprops.push(s),
    $e(r.rels, 2, s, He.CORE_PROPS),
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
    De(a, s, Yl(t.Props)),
    i.extprops.push(s),
    $e(r.rels, 3, s, He.EXT_PROPS),
    t.Custprops !== t.Props &&
      Rt(t.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      De(a, s, $l(t.Custprops)),
      i.custprops.push(s),
      $e(r.rels, 4, s, He.CUST_PROPS));
  var c = ['SheetJ5'];
  for (r.tcid = 0, o = 1; o <= t.SheetNames.length; ++o) {
    var h = { '!id': {} },
      u = t.Sheets[t.SheetNames[o - 1]],
      p = (u || {})['!type'] || 'sheet';
    switch (p) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + o + '.' + e),
          De(a, s, _c(o - 1, r, t, h)),
          i.sheets.push(s),
          $e(r.wbrels, -1, 'worksheets/sheet' + o + '.' + e, He.WS[0]);
    }
    if (u) {
      var x = u['!comments'],
        d = !1,
        m = '';
      if (x && x.length > 0) {
        var A = !1;
        x.forEach(function (D) {
          D[1].forEach(function (F) {
            F.T == !0 && (A = !0);
          });
        }),
          A &&
            ((m = 'xl/threadedComments/threadedComment' + o + '.' + e),
            De(a, m, yx(x, c, r)),
            i.threadedcomments.push(m),
            $e(
              h,
              -1,
              '../threadedComments/threadedComment' + o + '.' + e,
              He.TCMNT,
            )),
          (m = 'xl/comments' + o + '.' + e),
          De(a, m, lc(x)),
          i.comments.push(m),
          $e(h, -1, '../comments' + o + '.' + e, He.CMNT),
          (d = !0);
      }
      u['!legacy'] &&
        d &&
        De(a, 'xl/drawings/vmlDrawing' + o + '.vml', fc(o, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    h['!id'].rId1 && De(a, Wl(s), Kn(h));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + e),
      De(a, s, ec(r.Strings, r)),
      i.strs.push(s),
      $e(r.wbrels, -1, 'sharedStrings.' + e, He.SST)),
    (s = 'xl/workbook.' + e),
    De(a, s, Tc(t)),
    i.workbooks.push(s),
    $e(r.rels, 1, s, He.WB),
    (s = 'xl/theme/theme1.xml'),
    De(a, s, sc(t.Themes, r)),
    i.themes.push(s),
    $e(r.wbrels, -1, 'theme/theme1.xml', He.THEME),
    (s = 'xl/styles.' + e),
    De(a, s, ic(t, r)),
    i.styles.push(s),
    $e(r.wbrels, -1, 'styles.' + e, He.STY),
    t.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      De(a, s, t.vbaraw),
      i.vba.push(s),
      $e(r.wbrels, -1, 'vbaProject.bin', He.VBA)),
    (s = 'xl/metadata.' + e),
    De(a, s, oc()),
    i.metadata.push(s),
    $e(r.wbrels, -1, 'metadata.' + e, He.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      De(a, s, Ax(c)),
      i.people.push(s),
      $e(r.wbrels, -1, 'persons/person.xml', He.PEOPLE)),
    De(a, '[Content_Types].xml', Hl(i, r)),
    De(a, '_rels/.rels', Kn(r.rels)),
    De(a, 'xl/_rels/workbook.' + e + '.rels', Kn(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function K2(t, r) {
  var e = '';
  switch ((r || {}).type || 'base64') {
    case 'buffer':
      return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]];
    case 'base64':
      e = Qr(t.slice(0, 12));
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
function Oc(t, r) {
  switch (r.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      r.type = '';
      break;
    case 'file':
      return $i(r.file, ze.write(t, { type: je ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + r.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
  return ze.write(t, r);
}
function z2(t, r) {
  var e = Zt(r || {}),
    n = Y2(t, e);
  return q2(n, e);
}
function q2(t, r) {
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
  var i = t.FullPaths
    ? ze.write(t, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[e.type] || e.type,
        compression: !!r.compression,
      })
    : t.generate(e);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (r.type == 'binary' || r.type == 'base64') return i;
    i = new Uint8Array(Qa(i));
  }
  return r.password && typeof encrypt_agile < 'u'
    ? Oc(encrypt_agile(i, r.password), r)
    : r.type === 'file'
      ? $i(r.file, i)
      : r.type == 'string'
        ? Ti(i)
        : i;
}
function J2(t, r) {
  var e = r || {},
    n = d2(t, e);
  return Oc(n, e);
}
function Mr(t, r, e) {
  e || (e = '');
  var n = e + t;
  switch (r.type) {
    case 'base64':
      return bi(Pi(n));
    case 'binary':
      return Pi(n);
    case 'string':
      return t;
    case 'file':
      return $i(r.file, n, 'utf8');
    case 'buffer':
      return je
        ? rn(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : Mr(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function Z2(t, r) {
  switch (r.type) {
    case 'base64':
      return bi(t);
    case 'binary':
      return t;
    case 'string':
      return t;
    case 'file':
      return $i(r.file, t, 'binary');
    case 'buffer':
      return je
        ? rn(t, 'binary')
        : t.split('').map(function (e) {
            return e.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function oa(t, r) {
  switch (r.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var e = '', n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
      return r.type == 'base64' ? bi(e) : r.type == 'string' ? Ti(e) : e;
    case 'file':
      return $i(r.file, t);
    case 'buffer':
      return t;
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
}
function Nc(t, r) {
  C1(), Lg(t);
  var e = Zt(r || {});
  if (
    (e.cellStyles && ((e.cellNF = !0), (e.sheetStubs = !0)), e.type == 'array')
  ) {
    e.type = 'binary';
    var n = Nc(t, e);
    return (e.type = 'array'), Qa(n);
  }
  var i = 0;
  if (
    e.sheet &&
    (typeof e.sheet == 'number'
      ? (i = e.sheet)
      : (i = t.SheetNames.indexOf(e.sheet)),
    !t.SheetNames[i])
  )
    throw new Error('Sheet not found: ' + e.sheet + ' : ' + typeof e.sheet);
  switch (e.bookType || 'xlsb') {
    case 'xml':
    case 'xlml':
      return Mr(u2(t, e), e);
    case 'slk':
    case 'sylk':
      return Mr(bp.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'htm':
    case 'html':
      return Mr(Ac(t.Sheets[t.SheetNames[i]], e), e);
    case 'txt':
      return Z2(Rc(t.Sheets[t.SheetNames[i]], e), e);
    case 'csv':
      return Mr(I0(t.Sheets[t.SheetNames[i]], e), e, '\uFEFF');
    case 'dif':
      return Mr(Mp.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'dbf':
      return oa(Ip.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'prn':
      return Mr(Pp.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'rtf':
      return Mr(jp.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'eth':
      return Mr(Ql.from_sheet(t.Sheets[t.SheetNames[i]], e), e);
    case 'fods':
      return Mr(Dc(t, e), e);
    case 'wk1':
      return oa(Uo.sheet_to_wk1(t.Sheets[t.SheetNames[i]], e), e);
    case 'wk3':
      return oa(Uo.book_to_wk3(t, e), e);
    case 'biff2':
      e.biff || (e.biff = 2);
    case 'biff3':
      e.biff || (e.biff = 3);
    case 'biff4':
      return e.biff || (e.biff = 4), oa(yc(t, e), e);
    case 'biff5':
      e.biff || (e.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return e.biff || (e.biff = 8), J2(t, e);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return z2(t, e);
    default:
      throw new Error('Unrecognized bookType |' + e.bookType + '|');
  }
}
function Q2(t) {
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
function e_(t, r, e) {
  var n = {};
  return (n.type = 'file'), (n.file = r), Q2(n), Nc(t, n);
}
function t_(t, r, e, n, i, a, s, o) {
  var l = Nt(e),
    f = o.defval,
    c = o.raw || !Object.prototype.hasOwnProperty.call(o, 'raw'),
    h = !0,
    u = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, '__rowNum__', { value: e, enumerable: !1 });
      } catch {
        u.__rowNum__ = e;
      }
    else u.__rowNum__ = e;
  if (!s || t[e])
    for (var p = r.s.c; p <= r.e.c; ++p) {
      var x = s ? t[e][p] : t[n[p] + l];
      if (x === void 0 || x.t === void 0) {
        if (f === void 0) continue;
        a[p] != null && (u[a[p]] = f);
        continue;
      }
      var d = x.v;
      switch (x.t) {
        case 'z':
          if (d == null) break;
          continue;
        case 'e':
          d = d == 0 ? null : void 0;
          break;
        case 's':
        case 'd':
        case 'b':
        case 'n':
          break;
        default:
          throw new Error('unrecognized type ' + x.t);
      }
      if (a[p] != null) {
        if (d == null)
          if (x.t == 'e' && d === null) u[a[p]] = null;
          else if (f !== void 0) u[a[p]] = f;
          else if (c && d === null) u[a[p]] = null;
          else continue;
        else
          u[a[p]] =
            c && (x.t !== 'n' || (x.t === 'n' && o.rawNumbers !== !1))
              ? d
              : en(x, d, o);
        d != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function Ua(t, r) {
  if (t == null || t['!ref'] == null) return [];
  var e = { t: 'n', v: 0 },
    n = 0,
    i = 1,
    a = [],
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
      l = rt(c);
      break;
    case 'number':
      (l = rt(t['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var h = Nt(l.s.r),
    u = [],
    p = [],
    x = 0,
    d = 0,
    m = Array.isArray(t),
    A = l.s.r,
    D = 0,
    F = {};
  m && !t[A] && (t[A] = []);
  var k = (f.skipHidden && t['!cols']) || [],
    j = (f.skipHidden && t['!rows']) || [];
  for (D = l.s.c; D <= l.e.c; ++D)
    if (!(k[D] || {}).hidden)
      switch (((u[D] = bt(D)), (e = m ? t[A][D] : t[u[D] + h]), n)) {
        case 1:
          a[D] = D - l.s.c;
          break;
        case 2:
          a[D] = u[D];
          break;
        case 3:
          a[D] = f.header[D - l.s.c];
          break;
        default:
          if (
            (e == null && (e = { w: '__EMPTY', t: 's' }),
            (o = s = en(e, null, f)),
            (d = F[s] || 0),
            !d)
          )
            F[s] = 1;
          else {
            do o = s + '_' + d++;
            while (F[o]);
            (F[s] = d), (F[o] = 1);
          }
          a[D] = o;
      }
  for (A = l.s.r + i; A <= l.e.r; ++A)
    if (!(j[A] || {}).hidden) {
      var ee = t_(t, l, A, u, n, a, m, f);
      (ee.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) &&
        (p[x++] = ee.row);
    }
  return (p.length = x), p;
}
var Xo = /"/g;
function r_(t, r, e, n, i, a, s, o) {
  for (var l = !0, f = [], c = '', h = Nt(e), u = r.s.c; u <= r.e.c; ++u)
    if (n[u]) {
      var p = o.dense ? (t[e] || [])[u] : t[n[u] + h];
      if (p == null) c = '';
      else if (p.v != null) {
        (l = !1),
          (c = '' + (o.rawNumbers && p.t == 'n' ? p.v : en(p, null, o)));
        for (var x = 0, d = 0; x !== c.length; ++x)
          if (
            (d = c.charCodeAt(x)) === i ||
            d === a ||
            d === 34 ||
            o.forceQuotes
          ) {
            c = '"' + c.replace(Xo, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        p.f != null && !p.F
          ? ((l = !1),
            (c = '=' + p.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(Xo, '""') + '"'))
          : (c = '');
      f.push(c);
    }
  return o.blankrows === !1 && l ? null : f.join(s);
}
function I0(t, r) {
  var e = [],
    n = r ?? {};
  if (t == null || t['!ref'] == null) return '';
  var i = rt(t['!ref']),
    a = n.FS !== void 0 ? n.FS : ',',
    s = a.charCodeAt(0),
    o =
      n.RS !== void 0
        ? n.RS
        : `
`,
    l = o.charCodeAt(0),
    f = new RegExp((a == '|' ? '\\|' : a) + '+$'),
    c = '',
    h = [];
  n.dense = Array.isArray(t);
  for (
    var u = (n.skipHidden && t['!cols']) || [],
      p = (n.skipHidden && t['!rows']) || [],
      x = i.s.c;
    x <= i.e.c;
    ++x
  )
    (u[x] || {}).hidden || (h[x] = bt(x));
  for (var d = 0, m = i.s.r; m <= i.e.r; ++m)
    (p[m] || {}).hidden ||
      ((c = r_(t, i, m, h, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(f, '')),
        (c || n.blankrows !== !1) && e.push((d++ ? o : '') + c)));
  return delete n.dense, e.join('');
}
function Rc(t, r) {
  r || (r = {}),
    (r.FS = '	'),
    (r.RS = `
`);
  var e = I0(t, r);
  return e;
}
function n_(t) {
  var r = '',
    e,
    n = '';
  if (t == null || t['!ref'] == null) return [];
  var i = rt(t['!ref']),
    a = '',
    s = [],
    o,
    l = [],
    f = Array.isArray(t);
  for (o = i.s.c; o <= i.e.c; ++o) s[o] = bt(o);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = Nt(c), o = i.s.c; o <= i.e.c; ++o)
      if (
        ((r = s[o] + a),
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
function kc(t, r, e) {
  var n = e || {},
    i = +!n.skipHeader,
    a = t || {},
    s = 0,
    o = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Et(n.origin) : n.origin;
      (s = l.r), (o = l.c);
    }
  var f,
    c = { s: { c: 0, r: 0 }, e: { c: o, r: s + r.length - 1 + i } };
  if (a['!ref']) {
    var h = rt(a['!ref']);
    (c.e.c = Math.max(c.e.c, h.e.c)),
      (c.e.r = Math.max(c.e.r, h.e.r)),
      s == -1 && ((s = h.e.r + 1), (c.e.r = s + r.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = r.length - 1 + i));
  var u = n.header || [],
    p = 0;
  r.forEach(function (d, m) {
    Rt(d).forEach(function (A) {
      (p = u.indexOf(A)) == -1 && (u[(p = u.length)] = A);
      var D = d[A],
        F = 'z',
        k = '',
        j = Ke({ c: o + p, r: s + m + i });
      (f = Ui(a, j)),
        D && typeof D == 'object' && !(D instanceof Date)
          ? (a[j] = D)
          : (typeof D == 'number'
              ? (F = 'n')
              : typeof D == 'boolean'
                ? (F = 'b')
                : typeof D == 'string'
                  ? (F = 's')
                  : D instanceof Date
                    ? ((F = 'd'),
                      n.cellDates || ((F = 'n'), (D = Jt(D))),
                      (k = n.dateNF || ft[14]))
                    : D === null && n.nullError && ((F = 'e'), (D = 0)),
            f
              ? ((f.t = F), (f.v = D), delete f.w, delete f.R, k && (f.z = k))
              : (a[j] = f = { t: F, v: D }),
            k && (f.z = k));
    });
  }),
    (c.e.c = Math.max(c.e.c, o + u.length - 1));
  var x = Nt(s);
  if (i) for (p = 0; p < u.length; ++p) a[bt(p + o) + x] = { t: 's', v: u[p] };
  return (a['!ref'] = ht(c)), a;
}
function i_(t, r) {
  return kc(null, t, r);
}
function Ui(t, r, e) {
  if (typeof r == 'string') {
    if (Array.isArray(t)) {
      var n = Et(r);
      return t[n.r] || (t[n.r] = []), t[n.r][n.c] || (t[n.r][n.c] = { t: 'z' });
    }
    return t[r] || (t[r] = { t: 'z' });
  }
  return typeof r != 'number' ? Ui(t, Ke(r)) : Ui(t, Ke({ r, c: e || 0 }));
}
function a_(t, r) {
  if (typeof r == 'number') {
    if (r >= 0 && t.SheetNames.length > r) return r;
    throw new Error('Cannot find sheet # ' + r);
  } else if (typeof r == 'string') {
    var e = t.SheetNames.indexOf(r);
    if (e > -1) return e;
    throw new Error('Cannot find sheet name |' + r + '|');
  } else throw new Error('Cannot find sheet |' + r + '|');
}
function s_() {
  return { SheetNames: [], Sheets: {} };
}
function o_(t, r, e, n) {
  var i = 1;
  if (!e)
    for (
      ;
      i <= 65535 && t.SheetNames.indexOf((e = 'Sheet' + i)) != -1;
      ++i, e = void 0
    );
  if (!e || t.SheetNames.length >= 65535)
    throw new Error('Too many worksheets');
  if (n && t.SheetNames.indexOf(e) >= 0) {
    var a = e.match(/(^.*?)(\d+)$/);
    i = (a && +a[2]) || 0;
    var s = (a && a[1]) || e;
    for (++i; i <= 65535 && t.SheetNames.indexOf((e = s + i)) != -1; ++i);
  }
  if ((Ec(e), t.SheetNames.indexOf(e) >= 0))
    throw new Error('Worksheet with name |' + e + '| already exists!');
  return t.SheetNames.push(e), (t.Sheets[e] = r), e;
}
function f_(t, r, e) {
  t.Workbook || (t.Workbook = {}),
    t.Workbook.Sheets || (t.Workbook.Sheets = []);
  var n = a_(t, r);
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
function l_(t, r) {
  return (t.z = r), t;
}
function Ic(t, r, e) {
  return r ? ((t.l = { Target: r }), e && (t.l.Tooltip = e)) : delete t.l, t;
}
function c_(t, r, e) {
  return Ic(t, '#' + r, e);
}
function u_(t, r, e) {
  t.c || (t.c = []), t.c.push({ t: r, a: e || 'SheetJS' });
}
function h_(t, r, e, n) {
  for (
    var i = typeof r != 'string' ? r : rt(r),
      a = typeof r == 'string' ? r : ht(r),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var o = i.s.c; o <= i.e.c; ++o) {
      var l = Ui(t, s, o);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && o == i.s.c && ((l.f = e), n && (l.D = !0));
    }
  return t;
}
var Ts = {
    encode_col: bt,
    encode_row: Nt,
    encode_cell: Ke,
    encode_range: ht,
    decode_col: T0,
    decode_row: E0,
    split_cell: Cd,
    decode_cell: Et,
    decode_range: cr,
    format_cell: en,
    sheet_add_aoa: Il,
    sheet_add_json: kc,
    sheet_add_dom: Cc,
    aoa_to_sheet: oi,
    json_to_sheet: i_,
    table_to_sheet: Fc,
    table_to_book: M2,
    sheet_to_csv: I0,
    sheet_to_txt: Rc,
    sheet_to_json: Ua,
    sheet_to_html: Ac,
    sheet_to_formulae: n_,
    sheet_to_row_object_array: Ua,
    sheet_get_cell: Ui,
    book_new: s_,
    book_append_sheet: o_,
    book_set_sheet_visibility: f_,
    cell_set_number_format: l_,
    cell_set_hyperlink: Ic,
    cell_set_internal_link: c_,
    cell_add_comment: u_,
    sheet_set_array_formula: h_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  d_ = dt(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/outwards/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function p_(t, r) {
  e0(r, !0);
  let e = $r('');
  Df(() => {
    Ue(e, window.location.pathname, !0), console.log('currentPath:', ue(e));
  });
  function n(W) {
    return W === '/' ? ue(e) === '/' : ue(e).startsWith(W);
  }
  var i = d_(),
    a = Ie(Fe(i), 2),
    s = Fe(a),
    o = Fe(s);
  let l;
  var f = Ie(s, 2),
    c = Fe(f);
  let h;
  var u = Ie(f, 2),
    p = Fe(u);
  let x;
  var d = Ie(u, 2),
    m = Fe(d);
  let A;
  var D = Ie(d, 2),
    F = Fe(D);
  let k;
  var j = Ie(D, 2),
    ee = Fe(j);
  let N;
  _t(
    (W, M, X, K, J, ne) => {
      (l = Hn(o, 1, 'svelte-1t3skh', null, l, W)),
        (h = Hn(c, 1, 'svelte-1t3skh', null, h, M)),
        (x = Hn(p, 1, 'svelte-1t3skh', null, x, X)),
        (A = Hn(m, 1, 'svelte-1t3skh', null, A, K)),
        (k = Hn(F, 1, 'svelte-1t3skh', null, k, J)),
        (N = Hn(ee, 1, 'svelte-1t3skh', null, N, ne));
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
    tt(t, i),
    t0();
}
var Ss = [
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
  Jn = {
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
  Hi = {
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
  Xt = function (t, r) {
    return r === void 0 && (r = 2), ('000' + t).slice(r * -1);
  },
  pr = function (t) {
    return t === !0 ? 1 : 0;
  };
function Ko(t, r) {
  var e;
  return function () {
    var n = this,
      i = arguments;
    clearTimeout(e),
      (e = setTimeout(function () {
        return t.apply(n, i);
      }, r));
  };
}
var ys = function (t) {
  return t instanceof Array ? t : [t];
};
function Lt(t, r, e) {
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
function fa(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
}
function bc(t, r) {
  if (r(t)) return t;
  if (t.parentNode) return bc(t.parentNode, r);
}
function la(t, r) {
  var e = Ve('div', 'numInputWrapper'),
    n = Ve('input', 'numInput ' + t),
    i = Ve('span', 'arrowUp'),
    a = Ve('span', 'arrowDown');
  if (
    (navigator.userAgent.indexOf('MSIE 9.0') === -1
      ? (n.type = 'number')
      : ((n.type = 'text'), (n.pattern = '\\d*')),
    r !== void 0)
  )
    for (var s in r) n.setAttribute(s, r[s]);
  return e.appendChild(n), e.appendChild(i), e.appendChild(a), e;
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
var As = function () {},
  Ha = function (t, r, e) {
    return e.months[r ? 'shorthand' : 'longhand'][t];
  },
  x_ = {
    D: As,
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
        i = new Date(t.getFullYear(), 0, 2 + (n - 1) * 7, 0, 0, 0, 0);
      return i.setDate(i.getDate() - i.getDay() + e.firstDayOfWeek), i;
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
    l: As,
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
    w: As,
    y: function (t, r) {
      t.setFullYear(2e3 + parseFloat(r));
    },
  },
  En = {
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
  Fi = {
    Z: function (t) {
      return t.toISOString();
    },
    D: function (t, r, e) {
      return r.weekdays.shorthand[Fi.w(t, r, e)];
    },
    F: function (t, r, e) {
      return Ha(Fi.n(t, r, e) - 1, !1, r);
    },
    G: function (t, r, e) {
      return Xt(Fi.h(t, r, e));
    },
    H: function (t) {
      return Xt(t.getHours());
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
      return Ha(t.getMonth(), !0, r);
    },
    S: function (t) {
      return Xt(t.getSeconds());
    },
    U: function (t) {
      return t.getTime() / 1e3;
    },
    W: function (t, r, e) {
      return e.getWeek(t);
    },
    Y: function (t) {
      return Xt(t.getFullYear(), 4);
    },
    d: function (t) {
      return Xt(t.getDate());
    },
    h: function (t) {
      return t.getHours() % 12 ? t.getHours() % 12 : 12;
    },
    i: function (t) {
      return Xt(t.getMinutes());
    },
    j: function (t) {
      return t.getDate();
    },
    l: function (t, r) {
      return r.weekdays.longhand[t.getDay()];
    },
    m: function (t) {
      return Xt(t.getMonth() + 1);
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
  Mc = function (t) {
    var r = t.config,
      e = r === void 0 ? Jn : r,
      n = t.l10n,
      i = n === void 0 ? Hi : n,
      a = t.isMobile,
      s = a === void 0 ? !1 : a;
    return function (o, l, f) {
      var c = f || i;
      return e.formatDate !== void 0 && !s
        ? e.formatDate(o, l, c)
        : l
            .split('')
            .map(function (h, u, p) {
              return Fi[h] && p[u - 1] !== '\\'
                ? Fi[h](o, c, e)
                : h !== '\\'
                  ? h
                  : '';
            })
            .join('');
    };
  },
  Ys = function (t) {
    var r = t.config,
      e = r === void 0 ? Jn : r,
      n = t.l10n,
      i = n === void 0 ? Hi : n;
    return function (a, s, o, l) {
      if (!(a !== 0 && !a)) {
        var f = l || i,
          c,
          h = a;
        if (a instanceof Date) c = new Date(a.getTime());
        else if (typeof a != 'string' && a.toFixed !== void 0) c = new Date(a);
        else if (typeof a == 'string') {
          var u = s || (e || Jn).dateFormat,
            p = String(a).trim();
          if (p === 'today') (c = new Date()), (o = !0);
          else if (e && e.parseDate) c = e.parseDate(a, u);
          else if (/Z$/.test(p) || /GMT$/.test(p)) c = new Date(a);
          else {
            for (
              var x = void 0, d = [], m = 0, A = 0, D = '';
              m < u.length;
              m++
            ) {
              var F = u[m],
                k = F === '\\',
                j = u[m - 1] === '\\' || k;
              if (En[F] && !j) {
                D += En[F];
                var ee = new RegExp(D).exec(a);
                ee &&
                  (x = !0) &&
                  d[F !== 'Y' ? 'push' : 'unshift']({
                    fn: x_[F],
                    val: ee[++A],
                  });
              } else k || (D += '.');
            }
            (c =
              !e || !e.noCalendar
                ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                : new Date(new Date().setHours(0, 0, 0, 0))),
              d.forEach(function (N) {
                var W = N.fn,
                  M = N.val;
                return (c = W(c, M, f) || c);
              }),
              (c = x ? c : void 0);
          }
        }
        if (!(c instanceof Date && !isNaN(c.getTime()))) {
          e.errorHandler(new Error('Invalid date provided: ' + h));
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
var v_ = function (t, r, e) {
    return t > Math.min(r, e) && t < Math.max(r, e);
  },
  Cs = function (t, r, e) {
    return t * 3600 + r * 60 + e;
  },
  m_ = function (t) {
    var r = Math.floor(t / 3600),
      e = (t - r * 3600) / 60;
    return [r, e, t - r * 3600 - e * 60];
  },
  g_ = { DAY: 864e5 };
function Fs(t) {
  var r = t.defaultHour,
    e = t.defaultMinute,
    n = t.defaultSeconds;
  if (t.minDate !== void 0) {
    var i = t.minDate.getHours(),
      a = t.minDate.getMinutes(),
      s = t.minDate.getSeconds();
    r < i && (r = i),
      r === i && e < a && (e = a),
      r === i && e === a && n < s && (n = t.minDate.getSeconds());
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
        i = 0,
        a = r;
      i < a.length;
      i++
    ) {
      var s = a[i];
      n(s);
    }
    return t;
  });
var kt = function () {
    return (
      (kt =
        Object.assign ||
        function (t) {
          for (var r, e = 1, n = arguments.length; e < n; e++) {
            r = arguments[e];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
      kt.apply(this, arguments)
    );
  },
  zo = function () {
    for (var t = 0, r = 0, e = arguments.length; r < e; r++)
      t += arguments[r].length;
    for (var n = Array(t), i = 0, r = 0; r < e; r++)
      for (var a = arguments[r], s = 0, o = a.length; s < o; s++, i++)
        n[i] = a[s];
    return n;
  },
  __ = 300;
function w_(t, r) {
  var e = { config: kt(kt({}, Jn), ut.defaultConfig), l10n: Hi };
  (e.parseDate = Ys({ config: e.config, l10n: e.l10n })),
    (e._handlers = []),
    (e.pluginElements = []),
    (e.loadedPlugins = []),
    (e._bind = d),
    (e._setHoursFromDate = u),
    (e._positionCalendar = At),
    (e.changeMonth = xt),
    (e.changeYear = xe),
    (e.clear = C),
    (e.close = U),
    (e.onMouseOver = Ce),
    (e._createElement = Ve),
    (e.createDay = ee),
    (e.destroy = I),
    (e.isEnabled = ve),
    (e.jumpToDate = D),
    (e.updateValue = Ge),
    (e.open = be),
    (e.redraw = mn),
    (e.set = ye),
    (e.setDate = Oe),
    (e.toggle = Wr);
  function n() {
    e.utils = {
      getDaysInMonth: function (g, E) {
        return (
          g === void 0 && (g = e.currentMonth),
          E === void 0 && (E = e.currentYear),
          g === 1 && ((E % 4 === 0 && E % 100 !== 0) || E % 400 === 0)
            ? 29
            : e.l10n.daysInMonth[g]
        );
      },
    };
  }
  function i() {
    (e.element = e.input = t),
      (e.isOpen = !1),
      Ze(),
      yt(),
      Rr(),
      Qt(),
      n(),
      e.isMobile || j(),
      A(),
      (e.selectedDates.length || e.config.noCalendar) &&
        (e.config.enableTime &&
          u(e.config.noCalendar ? e.latestSelectedDateObj : void 0),
        Ge(!1)),
      o();
    var g = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !e.isMobile && g && At(), Le('onReady');
  }
  function a() {
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
            var E = (e.days.offsetWidth + 1) * g.showMonths;
            (e.daysContainer.style.width = E + 'px'),
              (e.calendarContainer.style.width =
                E +
                (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) +
                'px'),
              e.calendarContainer.style.removeProperty('visibility'),
              e.calendarContainer.style.removeProperty('display');
          }
        }));
  }
  function l(g) {
    if (e.selectedDates.length === 0) {
      var E =
          e.config.minDate === void 0 || tr(new Date(), e.config.minDate) >= 0
            ? new Date()
            : new Date(e.config.minDate.getTime()),
        R = Fs(e.config);
      E.setHours(R.hours, R.minutes, R.seconds, E.getMilliseconds()),
        (e.selectedDates = [E]),
        (e.latestSelectedDateObj = E);
    }
    g !== void 0 && g.type !== 'blur' && Qe(g);
    var H = e._input.value;
    h(), Ge(), e._input.value !== H && e._debouncedChange();
  }
  function f(g, E) {
    return (g % 12) + 12 * pr(E === e.l10n.amPM[1]);
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
  function h() {
    if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
      var g = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24,
        E = (parseInt(e.minuteElement.value, 10) || 0) % 60,
        R =
          e.secondElement !== void 0
            ? (parseInt(e.secondElement.value, 10) || 0) % 60
            : 0;
      e.amPM !== void 0 && (g = f(g, e.amPM.textContent));
      var H =
          e.config.minTime !== void 0 ||
          (e.config.minDate &&
            e.minDateHasTime &&
            e.latestSelectedDateObj &&
            tr(e.latestSelectedDateObj, e.config.minDate, !0) === 0),
        te =
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
        var ce = Cs(
            e.config.minTime.getHours(),
            e.config.minTime.getMinutes(),
            e.config.minTime.getSeconds(),
          ),
          Te = Cs(
            e.config.maxTime.getHours(),
            e.config.maxTime.getMinutes(),
            e.config.maxTime.getSeconds(),
          ),
          ge = Cs(g, E, R);
        if (ge > Te && ge < ce) {
          var Se = m_(ce);
          (g = Se[0]), (E = Se[1]), (R = Se[2]);
        }
      } else {
        if (te) {
          var me =
            e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
          (g = Math.min(g, me.getHours())),
            g === me.getHours() && (E = Math.min(E, me.getMinutes())),
            E === me.getMinutes() && (R = Math.min(R, me.getSeconds()));
        }
        if (H) {
          var we =
            e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
          (g = Math.max(g, we.getHours())),
            g === we.getHours() && E < we.getMinutes() && (E = we.getMinutes()),
            E === we.getMinutes() && (R = Math.max(R, we.getSeconds()));
        }
      }
      p(g, E, R);
    }
  }
  function u(g) {
    var E = g || e.latestSelectedDateObj;
    E && E instanceof Date && p(E.getHours(), E.getMinutes(), E.getSeconds());
  }
  function p(g, E, R) {
    e.latestSelectedDateObj !== void 0 &&
      e.latestSelectedDateObj.setHours(g % 24, E, R || 0, 0),
      !(!e.hourElement || !e.minuteElement || e.isMobile) &&
        ((e.hourElement.value = Xt(
          e.config.time_24hr ? g : ((12 + g) % 12) + 12 * pr(g % 12 === 0),
        )),
        (e.minuteElement.value = Xt(E)),
        e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[pr(g >= 12)]),
        e.secondElement !== void 0 && (e.secondElement.value = Xt(R)));
  }
  function x(g) {
    var E = er(g),
      R = parseInt(E.value) + (g.delta || 0);
    (R / 1e3 > 1 || (g.key === 'Enter' && !/[^\d]/.test(R.toString()))) &&
      xe(R);
  }
  function d(g, E, R, H) {
    if (E instanceof Array)
      return E.forEach(function (te) {
        return d(g, te, R, H);
      });
    if (g instanceof Array)
      return g.forEach(function (te) {
        return d(te, E, R, H);
      });
    g.addEventListener(E, R, H),
      e._handlers.push({
        remove: function () {
          return g.removeEventListener(E, R, H);
        },
      });
  }
  function m() {
    Le('onChange');
  }
  function A() {
    if (
      (e.config.wrap &&
        ['open', 'close', 'toggle', 'clear'].forEach(function (R) {
          Array.prototype.forEach.call(
            e.element.querySelectorAll('[data-' + R + ']'),
            function (H) {
              return d(H, 'click', e[R]);
            },
          );
        }),
      e.isMobile)
    ) {
      Er();
      return;
    }
    var g = Ko(lt, 50);
    if (
      ((e._debouncedChange = Ko(m, __)),
      e.daysContainer &&
        !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        d(e.daysContainer, 'mouseover', function (R) {
          e.config.mode === 'range' && Ce(er(R));
        }),
      d(e._input, 'keydown', Me),
      e.calendarContainer !== void 0 && d(e.calendarContainer, 'keydown', Me),
      !e.config.inline && !e.config.static && d(window, 'resize', g),
      window.ontouchstart !== void 0
        ? d(window.document, 'touchstart', q)
        : d(window.document, 'mousedown', q),
      d(window.document, 'focus', q, { capture: !0 }),
      e.config.clickOpens === !0 &&
        (d(e._input, 'focus', e.open), d(e._input, 'click', e.open)),
      e.daysContainer !== void 0 &&
        (d(e.monthNav, 'click', Vr),
        d(e.monthNav, ['keyup', 'increment'], x),
        d(e.daysContainer, 'click', le)),
      e.timeContainer !== void 0 &&
        e.minuteElement !== void 0 &&
        e.hourElement !== void 0)
    ) {
      var E = function (R) {
        return er(R).select();
      };
      d(e.timeContainer, ['increment'], l),
        d(e.timeContainer, 'blur', l, { capture: !0 }),
        d(e.timeContainer, 'click', F),
        d([e.hourElement, e.minuteElement], ['focus', 'click'], E),
        e.secondElement !== void 0 &&
          d(e.secondElement, 'focus', function () {
            return e.secondElement && e.secondElement.select();
          }),
        e.amPM !== void 0 &&
          d(e.amPM, 'click', function (R) {
            l(R);
          });
    }
    e.config.allowInput && d(e._input, 'blur', fe);
  }
  function D(g, E) {
    var R =
        g !== void 0
          ? e.parseDate(g)
          : e.latestSelectedDateObj ||
            (e.config.minDate && e.config.minDate > e.now
              ? e.config.minDate
              : e.config.maxDate && e.config.maxDate < e.now
                ? e.config.maxDate
                : e.now),
      H = e.currentYear,
      te = e.currentMonth;
    try {
      R !== void 0 &&
        ((e.currentYear = R.getFullYear()), (e.currentMonth = R.getMonth()));
    } catch (ce) {
      (ce.message = 'Invalid date supplied: ' + R), e.config.errorHandler(ce);
    }
    E && e.currentYear !== H && (Le('onYearChange'), ne()),
      E &&
        (e.currentYear !== H || e.currentMonth !== te) &&
        Le('onMonthChange'),
      e.redraw();
  }
  function F(g) {
    var E = er(g);
    ~E.className.indexOf('arrow') &&
      k(g, E.classList.contains('arrowUp') ? 1 : -1);
  }
  function k(g, E, R) {
    var H = g && er(g),
      te = R || (H && H.parentNode && H.parentNode.firstChild),
      ce = jt('increment');
    (ce.delta = E), te && te.dispatchEvent(ce);
  }
  function j() {
    var g = window.document.createDocumentFragment();
    if (
      ((e.calendarContainer = Ve('div', 'flatpickr-calendar')),
      (e.calendarContainer.tabIndex = -1),
      !e.config.noCalendar)
    ) {
      if (
        (g.appendChild(nt()),
        (e.innerContainer = Ve('div', 'flatpickr-innerContainer')),
        e.config.weekNumbers)
      ) {
        var E = St(),
          R = E.weekWrapper,
          H = E.weekNumbers;
        e.innerContainer.appendChild(R),
          (e.weekNumbers = H),
          (e.weekWrapper = R);
      }
      (e.rContainer = Ve('div', 'flatpickr-rContainer')),
        e.rContainer.appendChild(gt()),
        e.daysContainer ||
          ((e.daysContainer = Ve('div', 'flatpickr-days')),
          (e.daysContainer.tabIndex = -1)),
        J(),
        e.rContainer.appendChild(e.daysContainer),
        e.innerContainer.appendChild(e.rContainer),
        g.appendChild(e.innerContainer);
    }
    e.config.enableTime && g.appendChild(Je()),
      Lt(e.calendarContainer, 'rangeMode', e.config.mode === 'range'),
      Lt(e.calendarContainer, 'animate', e.config.animate === !0),
      Lt(e.calendarContainer, 'multiMonth', e.config.showMonths > 1),
      e.calendarContainer.appendChild(g);
    var te =
      e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
    if (
      (e.config.inline || e.config.static) &&
      (e.calendarContainer.classList.add(e.config.inline ? 'inline' : 'static'),
      e.config.inline &&
        (!te && e.element.parentNode
          ? e.element.parentNode.insertBefore(
              e.calendarContainer,
              e._input.nextSibling,
            )
          : e.config.appendTo !== void 0 &&
            e.config.appendTo.appendChild(e.calendarContainer)),
      e.config.static)
    ) {
      var ce = Ve('div', 'flatpickr-wrapper');
      e.element.parentNode && e.element.parentNode.insertBefore(ce, e.element),
        ce.appendChild(e.element),
        e.altInput && ce.appendChild(e.altInput),
        ce.appendChild(e.calendarContainer);
    }
    !e.config.static &&
      !e.config.inline &&
      (e.config.appendTo !== void 0
        ? e.config.appendTo
        : window.document.body
      ).appendChild(e.calendarContainer);
  }
  function ee(g, E, R, H) {
    var te = ve(E, !0),
      ce = Ve('span', g, E.getDate().toString());
    return (
      (ce.dateObj = E),
      (ce.$i = H),
      ce.setAttribute('aria-label', e.formatDate(E, e.config.ariaDateFormat)),
      g.indexOf('hidden') === -1 &&
        tr(E, e.now) === 0 &&
        ((e.todayDateElem = ce),
        ce.classList.add('today'),
        ce.setAttribute('aria-current', 'date')),
      te
        ? ((ce.tabIndex = -1),
          Gt(E) &&
            (ce.classList.add('selected'),
            (e.selectedDateElem = ce),
            e.config.mode === 'range' &&
              (Lt(
                ce,
                'startRange',
                e.selectedDates[0] && tr(E, e.selectedDates[0], !0) === 0,
              ),
              Lt(
                ce,
                'endRange',
                e.selectedDates[1] && tr(E, e.selectedDates[1], !0) === 0,
              ),
              g === 'nextMonthDay' && ce.classList.add('inRange'))))
        : ce.classList.add('flatpickr-disabled'),
      e.config.mode === 'range' &&
        kr(E) &&
        !Gt(E) &&
        ce.classList.add('inRange'),
      e.weekNumbers &&
        e.config.showMonths === 1 &&
        g !== 'prevMonthDay' &&
        H % 7 === 6 &&
        e.weekNumbers.insertAdjacentHTML(
          'beforeend',
          "<span class='flatpickr-day'>" + e.config.getWeek(E) + '</span>',
        ),
      Le('onDayCreate', ce),
      ce
    );
  }
  function N(g) {
    g.focus(), e.config.mode === 'range' && Ce(g);
  }
  function W(g) {
    for (
      var E = g > 0 ? 0 : e.config.showMonths - 1,
        R = g > 0 ? e.config.showMonths : -1,
        H = E;
      H != R;
      H += g
    )
      for (
        var te = e.daysContainer.children[H],
          ce = g > 0 ? 0 : te.children.length - 1,
          Te = g > 0 ? te.children.length : -1,
          ge = ce;
        ge != Te;
        ge += g
      ) {
        var Se = te.children[ge];
        if (Se.className.indexOf('hidden') === -1 && ve(Se.dateObj)) return Se;
      }
  }
  function M(g, E) {
    for (
      var R =
          g.className.indexOf('Month') === -1
            ? g.dateObj.getMonth()
            : e.currentMonth,
        H = E > 0 ? e.config.showMonths : -1,
        te = E > 0 ? 1 : -1,
        ce = R - e.currentMonth;
      ce != H;
      ce += te
    )
      for (
        var Te = e.daysContainer.children[ce],
          ge =
            R - e.currentMonth === ce
              ? g.$i + E
              : E < 0
                ? Te.children.length - 1
                : 0,
          Se = Te.children.length,
          me = ge;
        me >= 0 && me < Se && me != (E > 0 ? Se : -1);
        me += te
      ) {
        var we = Te.children[me];
        if (
          we.className.indexOf('hidden') === -1 &&
          ve(we.dateObj) &&
          Math.abs(g.$i - me) >= Math.abs(E)
        )
          return N(we);
      }
    e.changeMonth(te), X(W(te), 0);
  }
  function X(g, E) {
    var R = a(),
      H = de(R || document.body),
      te =
        g !== void 0
          ? g
          : H
            ? R
            : e.selectedDateElem !== void 0 && de(e.selectedDateElem)
              ? e.selectedDateElem
              : e.todayDateElem !== void 0 && de(e.todayDateElem)
                ? e.todayDateElem
                : W(E > 0 ? 1 : -1);
    te === void 0 ? e._input.focus() : H ? M(te, E) : N(te);
  }
  function K(g, E) {
    for (
      var R = (new Date(g, E, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7,
        H = e.utils.getDaysInMonth((E - 1 + 12) % 12, g),
        te = e.utils.getDaysInMonth(E, g),
        ce = window.document.createDocumentFragment(),
        Te = e.config.showMonths > 1,
        ge = Te ? 'prevMonthDay hidden' : 'prevMonthDay',
        Se = Te ? 'nextMonthDay hidden' : 'nextMonthDay',
        me = H + 1 - R,
        we = 0;
      me <= H;
      me++, we++
    )
      ce.appendChild(ee('flatpickr-day ' + ge, new Date(g, E - 1, me), me, we));
    for (me = 1; me <= te; me++, we++)
      ce.appendChild(ee('flatpickr-day', new Date(g, E, me), me, we));
    for (
      var Be = te + 1;
      Be <= 42 - R && (e.config.showMonths === 1 || we % 7 !== 0);
      Be++, we++
    )
      ce.appendChild(
        ee('flatpickr-day ' + Se, new Date(g, E + 1, Be % te), Be, we),
      );
    var v = Ve('div', 'dayContainer');
    return v.appendChild(ce), v;
  }
  function J() {
    if (e.daysContainer !== void 0) {
      fa(e.daysContainer), e.weekNumbers && fa(e.weekNumbers);
      for (
        var g = document.createDocumentFragment(), E = 0;
        E < e.config.showMonths;
        E++
      ) {
        var R = new Date(e.currentYear, e.currentMonth, 1);
        R.setMonth(e.currentMonth + E),
          g.appendChild(K(R.getFullYear(), R.getMonth()));
      }
      e.daysContainer.appendChild(g),
        (e.days = e.daysContainer.firstChild),
        e.config.mode === 'range' && e.selectedDates.length === 1 && Ce();
    }
  }
  function ne() {
    if (
      !(e.config.showMonths > 1 || e.config.monthSelectorType !== 'dropdown')
    ) {
      var g = function (H) {
        return e.config.minDate !== void 0 &&
          e.currentYear === e.config.minDate.getFullYear() &&
          H < e.config.minDate.getMonth()
          ? !1
          : !(
              e.config.maxDate !== void 0 &&
              e.currentYear === e.config.maxDate.getFullYear() &&
              H > e.config.maxDate.getMonth()
            );
      };
      (e.monthsDropdownContainer.tabIndex = -1),
        (e.monthsDropdownContainer.innerHTML = '');
      for (var E = 0; E < 12; E++)
        if (g(E)) {
          var R = Ve('option', 'flatpickr-monthDropdown-month');
          (R.value = new Date(e.currentYear, E).getMonth().toString()),
            (R.textContent = Ha(E, e.config.shorthandCurrentMonth, e.l10n)),
            (R.tabIndex = -1),
            e.currentMonth === E && (R.selected = !0),
            e.monthsDropdownContainer.appendChild(R);
        }
    }
  }
  function ke() {
    var g = Ve('div', 'flatpickr-month'),
      E = window.document.createDocumentFragment(),
      R;
    e.config.showMonths > 1 || e.config.monthSelectorType === 'static'
      ? (R = Ve('span', 'cur-month'))
      : ((e.monthsDropdownContainer = Ve(
          'select',
          'flatpickr-monthDropdown-months',
        )),
        e.monthsDropdownContainer.setAttribute(
          'aria-label',
          e.l10n.monthAriaLabel,
        ),
        d(e.monthsDropdownContainer, 'change', function (Te) {
          var ge = er(Te),
            Se = parseInt(ge.value, 10);
          e.changeMonth(Se - e.currentMonth), Le('onMonthChange');
        }),
        ne(),
        (R = e.monthsDropdownContainer));
    var H = la('cur-year', { tabindex: '-1' }),
      te = H.getElementsByTagName('input')[0];
    te.setAttribute('aria-label', e.l10n.yearAriaLabel),
      e.config.minDate &&
        te.setAttribute('min', e.config.minDate.getFullYear().toString()),
      e.config.maxDate &&
        (te.setAttribute('max', e.config.maxDate.getFullYear().toString()),
        (te.disabled =
          !!e.config.minDate &&
          e.config.minDate.getFullYear() === e.config.maxDate.getFullYear()));
    var ce = Ve('div', 'flatpickr-current-month');
    return (
      ce.appendChild(R),
      ce.appendChild(H),
      E.appendChild(ce),
      g.appendChild(E),
      { container: g, yearElement: te, monthElement: R }
    );
  }
  function _e() {
    fa(e.monthNav),
      e.monthNav.appendChild(e.prevMonthNav),
      e.config.showMonths && ((e.yearElements = []), (e.monthElements = []));
    for (var g = e.config.showMonths; g--; ) {
      var E = ke();
      e.yearElements.push(E.yearElement),
        e.monthElements.push(E.monthElement),
        e.monthNav.appendChild(E.container);
    }
    e.monthNav.appendChild(e.nextMonthNav);
  }
  function nt() {
    return (
      (e.monthNav = Ve('div', 'flatpickr-months')),
      (e.yearElements = []),
      (e.monthElements = []),
      (e.prevMonthNav = Ve('span', 'flatpickr-prev-month')),
      (e.prevMonthNav.innerHTML = e.config.prevArrow),
      (e.nextMonthNav = Ve('span', 'flatpickr-next-month')),
      (e.nextMonthNav.innerHTML = e.config.nextArrow),
      _e(),
      Object.defineProperty(e, '_hidePrevMonthArrow', {
        get: function () {
          return e.__hidePrevMonthArrow;
        },
        set: function (g) {
          e.__hidePrevMonthArrow !== g &&
            (Lt(e.prevMonthNav, 'flatpickr-disabled', g),
            (e.__hidePrevMonthArrow = g));
        },
      }),
      Object.defineProperty(e, '_hideNextMonthArrow', {
        get: function () {
          return e.__hideNextMonthArrow;
        },
        set: function (g) {
          e.__hideNextMonthArrow !== g &&
            (Lt(e.nextMonthNav, 'flatpickr-disabled', g),
            (e.__hideNextMonthArrow = g));
        },
      }),
      (e.currentYearElement = e.yearElements[0]),
      ur(),
      e.monthNav
    );
  }
  function Je() {
    e.calendarContainer.classList.add('hasTime'),
      e.config.noCalendar && e.calendarContainer.classList.add('noCalendar');
    var g = Fs(e.config);
    (e.timeContainer = Ve('div', 'flatpickr-time')),
      (e.timeContainer.tabIndex = -1);
    var E = Ve('span', 'flatpickr-time-separator', ':'),
      R = la('flatpickr-hour', { 'aria-label': e.l10n.hourAriaLabel });
    e.hourElement = R.getElementsByTagName('input')[0];
    var H = la('flatpickr-minute', { 'aria-label': e.l10n.minuteAriaLabel });
    if (
      ((e.minuteElement = H.getElementsByTagName('input')[0]),
      (e.hourElement.tabIndex = e.minuteElement.tabIndex = -1),
      (e.hourElement.value = Xt(
        e.latestSelectedDateObj
          ? e.latestSelectedDateObj.getHours()
          : e.config.time_24hr
            ? g.hours
            : c(g.hours),
      )),
      (e.minuteElement.value = Xt(
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
      e.timeContainer.appendChild(R),
      e.timeContainer.appendChild(E),
      e.timeContainer.appendChild(H),
      e.config.time_24hr && e.timeContainer.classList.add('time24hr'),
      e.config.enableSeconds)
    ) {
      e.timeContainer.classList.add('hasSeconds');
      var te = la('flatpickr-second');
      (e.secondElement = te.getElementsByTagName('input')[0]),
        (e.secondElement.value = Xt(
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
        e.timeContainer.appendChild(te);
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
  function gt() {
    e.weekdayContainer
      ? fa(e.weekdayContainer)
      : (e.weekdayContainer = Ve('div', 'flatpickr-weekdays'));
    for (var g = e.config.showMonths; g--; ) {
      var E = Ve('div', 'flatpickr-weekdaycontainer');
      e.weekdayContainer.appendChild(E);
    }
    return it(), e.weekdayContainer;
  }
  function it() {
    if (e.weekdayContainer) {
      var g = e.l10n.firstDayOfWeek,
        E = zo(e.l10n.weekdays.shorthand);
      g > 0 && g < E.length && (E = zo(E.splice(g, E.length), E.splice(0, g)));
      for (var R = e.config.showMonths; R--; )
        e.weekdayContainer.children[R].innerHTML =
          `
      <span class='flatpickr-weekday'>
        ` +
          E.join("</span><span class='flatpickr-weekday'>") +
          `
      </span>
      `;
    }
  }
  function St() {
    e.calendarContainer.classList.add('hasWeeks');
    var g = Ve('div', 'flatpickr-weekwrapper');
    g.appendChild(Ve('span', 'flatpickr-weekday', e.l10n.weekAbbreviation));
    var E = Ve('div', 'flatpickr-weeks');
    return g.appendChild(E), { weekWrapper: g, weekNumbers: E };
  }
  function xt(g, E) {
    E === void 0 && (E = !0);
    var R = E ? g : g - e.currentMonth;
    (R < 0 && e._hidePrevMonthArrow === !0) ||
      (R > 0 && e._hideNextMonthArrow === !0) ||
      ((e.currentMonth += R),
      (e.currentMonth < 0 || e.currentMonth > 11) &&
        ((e.currentYear += e.currentMonth > 11 ? 1 : -1),
        (e.currentMonth = (e.currentMonth + 12) % 12),
        Le('onYearChange'),
        ne()),
      J(),
      Le('onMonthChange'),
      ur());
  }
  function C(g, E) {
    if (
      (g === void 0 && (g = !0),
      E === void 0 && (E = !0),
      (e.input.value = ''),
      e.altInput !== void 0 && (e.altInput.value = ''),
      e.mobileInput !== void 0 && (e.mobileInput.value = ''),
      (e.selectedDates = []),
      (e.latestSelectedDateObj = void 0),
      E === !0 &&
        ((e.currentYear = e._initialDate.getFullYear()),
        (e.currentMonth = e._initialDate.getMonth())),
      e.config.enableTime === !0)
    ) {
      var R = Fs(e.config),
        H = R.hours,
        te = R.minutes,
        ce = R.seconds;
      p(H, te, ce);
    }
    e.redraw(), g && Le('onChange');
  }
  function U() {
    (e.isOpen = !1),
      e.isMobile ||
        (e.calendarContainer !== void 0 &&
          e.calendarContainer.classList.remove('open'),
        e._input !== void 0 && e._input.classList.remove('active')),
      Le('onClose');
  }
  function I() {
    e.config !== void 0 && Le('onDestroy');
    for (var g = e._handlers.length; g--; ) e._handlers[g].remove();
    if (((e._handlers = []), e.mobileInput))
      e.mobileInput.parentNode &&
        e.mobileInput.parentNode.removeChild(e.mobileInput),
        (e.mobileInput = void 0);
    else if (e.calendarContainer && e.calendarContainer.parentNode)
      if (e.config.static && e.calendarContainer.parentNode) {
        var E = e.calendarContainer.parentNode;
        if ((E.lastChild && E.removeChild(E.lastChild), E.parentNode)) {
          for (; E.firstChild; ) E.parentNode.insertBefore(E.firstChild, E);
          E.parentNode.removeChild(E);
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
      ].forEach(function (R) {
        try {
          delete e[R];
        } catch {}
      });
  }
  function O(g) {
    return e.calendarContainer.contains(g);
  }
  function q(g) {
    if (e.isOpen && !e.config.inline) {
      var E = er(g),
        R = O(E),
        H =
          E === e.input ||
          E === e.altInput ||
          e.element.contains(E) ||
          (g.path &&
            g.path.indexOf &&
            (~g.path.indexOf(e.input) || ~g.path.indexOf(e.altInput))),
        te = !H && !R && !O(g.relatedTarget),
        ce = !e.config.ignoredFocusElements.some(function (Te) {
          return Te.contains(E);
        });
      te &&
        ce &&
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
  function xe(g) {
    if (
      !(
        !g ||
        (e.config.minDate && g < e.config.minDate.getFullYear()) ||
        (e.config.maxDate && g > e.config.maxDate.getFullYear())
      )
    ) {
      var E = g,
        R = e.currentYear !== E;
      (e.currentYear = E || e.currentYear),
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
        R && (e.redraw(), Le('onYearChange'), ne());
    }
  }
  function ve(g, E) {
    var R;
    E === void 0 && (E = !0);
    var H = e.parseDate(g, void 0, E);
    if (
      (e.config.minDate &&
        H &&
        tr(H, e.config.minDate, E !== void 0 ? E : !e.minDateHasTime) < 0) ||
      (e.config.maxDate &&
        H &&
        tr(H, e.config.maxDate, E !== void 0 ? E : !e.maxDateHasTime) > 0)
    )
      return !1;
    if (!e.config.enable && e.config.disable.length === 0) return !0;
    if (H === void 0) return !1;
    for (
      var te = !!e.config.enable,
        ce =
          (R = e.config.enable) !== null && R !== void 0 ? R : e.config.disable,
        Te = 0,
        ge = void 0;
      Te < ce.length;
      Te++
    ) {
      if (((ge = ce[Te]), typeof ge == 'function' && ge(H))) return te;
      if (ge instanceof Date && H !== void 0 && ge.getTime() === H.getTime())
        return te;
      if (typeof ge == 'string') {
        var Se = e.parseDate(ge, void 0, !0);
        return Se && Se.getTime() === H.getTime() ? te : !te;
      } else if (
        typeof ge == 'object' &&
        H !== void 0 &&
        ge.from &&
        ge.to &&
        H.getTime() >= ge.from.getTime() &&
        H.getTime() <= ge.to.getTime()
      )
        return te;
    }
    return !te;
  }
  function de(g) {
    return e.daysContainer !== void 0
      ? g.className.indexOf('hidden') === -1 &&
          g.className.indexOf('flatpickr-disabled') === -1 &&
          e.daysContainer.contains(g)
      : !1;
  }
  function fe(g) {
    var E = g.target === e._input,
      R = e._input.value.trimEnd() !== hr();
    E &&
      R &&
      !(g.relatedTarget && O(g.relatedTarget)) &&
      e.setDate(
        e._input.value,
        !0,
        g.target === e.altInput ? e.config.altFormat : e.config.dateFormat,
      );
  }
  function Me(g) {
    var E = er(g),
      R = e.config.wrap ? t.contains(E) : E === e._input,
      H = e.config.allowInput,
      te = e.isOpen && (!H || !R),
      ce = e.config.inline && R && !H;
    if (g.keyCode === 13 && R) {
      if (H)
        return (
          e.setDate(
            e._input.value,
            !0,
            E === e.altInput ? e.config.altFormat : e.config.dateFormat,
          ),
          e.close(),
          E.blur()
        );
      e.open();
    } else if (O(E) || te || ce) {
      var Te = !!e.timeContainer && e.timeContainer.contains(E);
      switch (g.keyCode) {
        case 13:
          Te ? (g.preventDefault(), l(), Hr()) : le(g);
          break;
        case 27:
          g.preventDefault(), Hr();
          break;
        case 8:
        case 46:
          R && !e.config.allowInput && (g.preventDefault(), e.clear());
          break;
        case 37:
        case 39:
          if (!Te && !R) {
            g.preventDefault();
            var ge = a();
            if (e.daysContainer !== void 0 && (H === !1 || (ge && de(ge)))) {
              var Se = g.keyCode === 39 ? 1 : -1;
              g.ctrlKey
                ? (g.stopPropagation(), xt(Se), X(W(1), 0))
                : X(void 0, Se);
            }
          } else e.hourElement && e.hourElement.focus();
          break;
        case 38:
        case 40:
          g.preventDefault();
          var me = g.keyCode === 40 ? 1 : -1;
          (e.daysContainer && E.$i !== void 0) ||
          E === e.input ||
          E === e.altInput
            ? g.ctrlKey
              ? (g.stopPropagation(), xe(e.currentYear - me), X(W(1), 0))
              : Te || X(void 0, me * 7)
            : E === e.currentYearElement
              ? xe(e.currentYear - me)
              : e.config.enableTime &&
                (!Te && e.hourElement && e.hourElement.focus(),
                l(g),
                e._debouncedChange());
          break;
        case 9:
          if (Te) {
            var we = [e.hourElement, e.minuteElement, e.secondElement, e.amPM]
                .concat(e.pluginElements)
                .filter(function (T) {
                  return T;
                }),
              Be = we.indexOf(E);
            if (Be !== -1) {
              var v = we[Be + (g.shiftKey ? -1 : 1)];
              g.preventDefault(), (v || e._input).focus();
            }
          } else
            !e.config.noCalendar &&
              e.daysContainer &&
              e.daysContainer.contains(E) &&
              g.shiftKey &&
              (g.preventDefault(), e._input.focus());
          break;
      }
    }
    if (e.amPM !== void 0 && E === e.amPM)
      switch (g.key) {
        case e.l10n.amPM[0].charAt(0):
        case e.l10n.amPM[0].charAt(0).toLowerCase():
          (e.amPM.textContent = e.l10n.amPM[0]), h(), Ge();
          break;
        case e.l10n.amPM[1].charAt(0):
        case e.l10n.amPM[1].charAt(0).toLowerCase():
          (e.amPM.textContent = e.l10n.amPM[1]), h(), Ge();
          break;
      }
    (R || O(E)) && Le('onKeyDown', g);
  }
  function Ce(g, E) {
    if (
      (E === void 0 && (E = 'flatpickr-day'),
      !(
        e.selectedDates.length !== 1 ||
        (g &&
          (!g.classList.contains(E) ||
            g.classList.contains('flatpickr-disabled')))
      ))
    ) {
      for (
        var R = g
            ? g.dateObj.getTime()
            : e.days.firstElementChild.dateObj.getTime(),
          H = e.parseDate(e.selectedDates[0], void 0, !0).getTime(),
          te = Math.min(R, e.selectedDates[0].getTime()),
          ce = Math.max(R, e.selectedDates[0].getTime()),
          Te = !1,
          ge = 0,
          Se = 0,
          me = te;
        me < ce;
        me += g_.DAY
      )
        ve(new Date(me), !0) ||
          ((Te = Te || (me > te && me < ce)),
          me < H && (!ge || me > ge)
            ? (ge = me)
            : me > H && (!Se || me < Se) && (Se = me));
      var we = Array.from(
        e.rContainer.querySelectorAll(
          '*:nth-child(-n+' + e.config.showMonths + ') > .' + E,
        ),
      );
      we.forEach(function (Be) {
        var v = Be.dateObj,
          T = v.getTime(),
          _ = (ge > 0 && T < ge) || (Se > 0 && T > Se);
        if (_) {
          Be.classList.add('notAllowed'),
            ['inRange', 'startRange', 'endRange'].forEach(function (w) {
              Be.classList.remove(w);
            });
          return;
        } else if (Te && !_) return;
        ['startRange', 'inRange', 'endRange', 'notAllowed'].forEach(
          function (w) {
            Be.classList.remove(w);
          },
        ),
          g !== void 0 &&
            (g.classList.add(
              R <= e.selectedDates[0].getTime() ? 'startRange' : 'endRange',
            ),
            H < R && T === H
              ? Be.classList.add('startRange')
              : H > R && T === H && Be.classList.add('endRange'),
            T >= ge &&
              (Se === 0 || T <= Se) &&
              v_(T, H, R) &&
              Be.classList.add('inRange'));
      });
    }
  }
  function lt() {
    e.isOpen && !e.config.static && !e.config.inline && At();
  }
  function be(g, E) {
    if ((E === void 0 && (E = e._positionElement), e.isMobile === !0)) {
      if (g) {
        g.preventDefault();
        var R = er(g);
        R && R.blur();
      }
      e.mobileInput !== void 0 &&
        (e.mobileInput.focus(), e.mobileInput.click()),
        Le('onOpen');
      return;
    } else if (e._input.disabled || e.config.inline) return;
    var H = e.isOpen;
    (e.isOpen = !0),
      H ||
        (e.calendarContainer.classList.add('open'),
        e._input.classList.add('active'),
        Le('onOpen'),
        At(E)),
      e.config.enableTime === !0 &&
        e.config.noCalendar === !0 &&
        e.config.allowInput === !1 &&
        (g === void 0 || !e.timeContainer.contains(g.relatedTarget)) &&
        setTimeout(function () {
          return e.hourElement.select();
        }, 50);
  }
  function Pt(g) {
    return function (E) {
      var R = (e.config['_' + g + 'Date'] = e.parseDate(
          E,
          e.config.dateFormat,
        )),
        H = e.config['_' + (g === 'min' ? 'max' : 'min') + 'Date'];
      R !== void 0 &&
        (e[g === 'min' ? 'minDateHasTime' : 'maxDateHasTime'] =
          R.getHours() > 0 || R.getMinutes() > 0 || R.getSeconds() > 0),
        e.selectedDates &&
          ((e.selectedDates = e.selectedDates.filter(function (te) {
            return ve(te);
          })),
          !e.selectedDates.length && g === 'min' && u(R),
          Ge()),
        e.daysContainer &&
          (mn(),
          R !== void 0
            ? (e.currentYearElement[g] = R.getFullYear().toString())
            : e.currentYearElement.removeAttribute(g),
          (e.currentYearElement.disabled =
            !!H && R !== void 0 && H.getFullYear() === R.getFullYear()));
    };
  }
  function Ze() {
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
      E = kt(kt({}, JSON.parse(JSON.stringify(t.dataset || {}))), r),
      R = {};
    (e.config.parseDate = E.parseDate),
      (e.config.formatDate = E.formatDate),
      Object.defineProperty(e.config, 'enable', {
        get: function () {
          return e.config._enable;
        },
        set: function (we) {
          e.config._enable = vt(we);
        },
      }),
      Object.defineProperty(e.config, 'disable', {
        get: function () {
          return e.config._disable;
        },
        set: function (we) {
          e.config._disable = vt(we);
        },
      });
    var H = E.mode === 'time';
    if (!E.dateFormat && (E.enableTime || H)) {
      var te = ut.defaultConfig.dateFormat || Jn.dateFormat;
      R.dateFormat =
        E.noCalendar || H
          ? 'H:i' + (E.enableSeconds ? ':S' : '')
          : te + ' H:i' + (E.enableSeconds ? ':S' : '');
    }
    if (E.altInput && (E.enableTime || H) && !E.altFormat) {
      var ce = ut.defaultConfig.altFormat || Jn.altFormat;
      R.altFormat =
        E.noCalendar || H
          ? 'h:i' + (E.enableSeconds ? ':S K' : ' K')
          : ce + (' h:i' + (E.enableSeconds ? ':S' : '') + ' K');
    }
    Object.defineProperty(e.config, 'minDate', {
      get: function () {
        return e.config._minDate;
      },
      set: Pt('min'),
    }),
      Object.defineProperty(e.config, 'maxDate', {
        get: function () {
          return e.config._maxDate;
        },
        set: Pt('max'),
      });
    var Te = function (we) {
      return function (Be) {
        e.config[we === 'min' ? '_minTime' : '_maxTime'] = e.parseDate(
          Be,
          'H:i:S',
        );
      };
    };
    Object.defineProperty(e.config, 'minTime', {
      get: function () {
        return e.config._minTime;
      },
      set: Te('min'),
    }),
      Object.defineProperty(e.config, 'maxTime', {
        get: function () {
          return e.config._maxTime;
        },
        set: Te('max'),
      }),
      E.mode === 'time' &&
        ((e.config.noCalendar = !0), (e.config.enableTime = !0)),
      Object.assign(e.config, R, E);
    for (var ge = 0; ge < g.length; ge++)
      e.config[g[ge]] = e.config[g[ge]] === !0 || e.config[g[ge]] === 'true';
    Ss.filter(function (we) {
      return e.config[we] !== void 0;
    }).forEach(function (we) {
      e.config[we] = ys(e.config[we] || []).map(s);
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
    for (var ge = 0; ge < e.config.plugins.length; ge++) {
      var Se = e.config.plugins[ge](e) || {};
      for (var me in Se)
        Ss.indexOf(me) > -1
          ? (e.config[me] = ys(Se[me]).map(s).concat(e.config[me]))
          : typeof E[me] > 'u' && (e.config[me] = Se[me]);
    }
    E.altInputClass ||
      (e.config.altInputClass = pe().className + ' ' + e.config.altInputClass),
      Le('onParseConfig');
  }
  function pe() {
    return e.config.wrap ? t.querySelector('[data-input]') : t;
  }
  function yt() {
    typeof e.config.locale != 'object' &&
      typeof ut.l10ns[e.config.locale] > 'u' &&
      e.config.errorHandler(
        new Error('flatpickr: invalid locale ' + e.config.locale),
      ),
      (e.l10n = kt(
        kt({}, ut.l10ns.default),
        typeof e.config.locale == 'object'
          ? e.config.locale
          : e.config.locale !== 'default'
            ? ut.l10ns[e.config.locale]
            : void 0,
      )),
      (En.D = '(' + e.l10n.weekdays.shorthand.join('|') + ')'),
      (En.l = '(' + e.l10n.weekdays.longhand.join('|') + ')'),
      (En.M = '(' + e.l10n.months.shorthand.join('|') + ')'),
      (En.F = '(' + e.l10n.months.longhand.join('|') + ')'),
      (En.K =
        '(' +
        e.l10n.amPM[0] +
        '|' +
        e.l10n.amPM[1] +
        '|' +
        e.l10n.amPM[0].toLowerCase() +
        '|' +
        e.l10n.amPM[1].toLowerCase() +
        ')');
    var g = kt(kt({}, r), JSON.parse(JSON.stringify(t.dataset || {})));
    g.time_24hr === void 0 &&
      ut.defaultConfig.time_24hr === void 0 &&
      (e.config.time_24hr = e.l10n.time_24hr),
      (e.formatDate = Mc(e)),
      (e.parseDate = Ys({ config: e.config, l10n: e.l10n }));
  }
  function At(g) {
    if (typeof e.config.position == 'function')
      return void e.config.position(e, g);
    if (e.calendarContainer !== void 0) {
      Le('onPreCalendarPosition');
      var E = g || e._positionElement,
        R = Array.prototype.reduce.call(
          e.calendarContainer.children,
          function (se, he) {
            return se + he.offsetHeight;
          },
          0,
        ),
        H = e.calendarContainer.offsetWidth,
        te = e.config.position.split(' '),
        ce = te[0],
        Te = te.length > 1 ? te[1] : null,
        ge = E.getBoundingClientRect(),
        Se = window.innerHeight - ge.bottom,
        me = ce === 'above' || (ce !== 'below' && Se < R && ge.top > R),
        we = window.pageYOffset + ge.top + (me ? -R - 2 : E.offsetHeight + 2);
      if (
        (Lt(e.calendarContainer, 'arrowTop', !me),
        Lt(e.calendarContainer, 'arrowBottom', me),
        !e.config.inline)
      ) {
        var Be = window.pageXOffset + ge.left,
          v = !1,
          T = !1;
        Te === 'center'
          ? ((Be -= (H - ge.width) / 2), (v = !0))
          : Te === 'right' && ((Be -= H - ge.width), (T = !0)),
          Lt(e.calendarContainer, 'arrowLeft', !v && !T),
          Lt(e.calendarContainer, 'arrowCenter', v),
          Lt(e.calendarContainer, 'arrowRight', T);
        var _ =
            window.document.body.offsetWidth - (window.pageXOffset + ge.right),
          w = Be + H > window.document.body.offsetWidth,
          S = _ + H > window.document.body.offsetWidth;
        if ((Lt(e.calendarContainer, 'rightMost', w), !e.config.static))
          if (((e.calendarContainer.style.top = we + 'px'), !w))
            (e.calendarContainer.style.left = Be + 'px'),
              (e.calendarContainer.style.right = 'auto');
          else if (!S)
            (e.calendarContainer.style.left = 'auto'),
              (e.calendarContainer.style.right = _ + 'px');
          else {
            var y = wr();
            if (y === void 0) return;
            var P = window.document.body.offsetWidth,
              Y = Math.max(0, P / 2 - H / 2),
              b = '.flatpickr-calendar.centerMost:before',
              L = '.flatpickr-calendar.centerMost:after',
              B = y.cssRules.length,
              Q = '{left:' + ge.left + 'px;right:auto;}';
            Lt(e.calendarContainer, 'rightMost', !1),
              Lt(e.calendarContainer, 'centerMost', !0),
              y.insertRule(b + ',' + L + Q, B),
              (e.calendarContainer.style.left = Y + 'px'),
              (e.calendarContainer.style.right = 'auto');
          }
      }
    }
  }
  function wr() {
    for (var g = null, E = 0; E < document.styleSheets.length; E++) {
      var R = document.styleSheets[E];
      if (R.cssRules) {
        try {
          R.cssRules;
        } catch {
          continue;
        }
        g = R;
        break;
      }
    }
    return g ?? Nr();
  }
  function Nr() {
    var g = document.createElement('style');
    return document.head.appendChild(g), g.sheet;
  }
  function mn() {
    e.config.noCalendar || e.isMobile || (ne(), ur(), J());
  }
  function Hr() {
    e._input.focus(),
      window.navigator.userAgent.indexOf('MSIE') !== -1 ||
      navigator.msMaxTouchPoints !== void 0
        ? setTimeout(e.close, 0)
        : e.close();
  }
  function le(g) {
    g.preventDefault(), g.stopPropagation();
    var E = function (we) {
        return (
          we.classList &&
          we.classList.contains('flatpickr-day') &&
          !we.classList.contains('flatpickr-disabled') &&
          !we.classList.contains('notAllowed')
        );
      },
      R = bc(er(g), E);
    if (R !== void 0) {
      var H = R,
        te = (e.latestSelectedDateObj = new Date(H.dateObj.getTime())),
        ce =
          (te.getMonth() < e.currentMonth ||
            te.getMonth() > e.currentMonth + e.config.showMonths - 1) &&
          e.config.mode !== 'range';
      if (((e.selectedDateElem = H), e.config.mode === 'single'))
        e.selectedDates = [te];
      else if (e.config.mode === 'multiple') {
        var Te = Gt(te);
        Te ? e.selectedDates.splice(parseInt(Te), 1) : e.selectedDates.push(te);
      } else
        e.config.mode === 'range' &&
          (e.selectedDates.length === 2 && e.clear(!1, !1),
          (e.latestSelectedDateObj = te),
          e.selectedDates.push(te),
          tr(te, e.selectedDates[0], !0) !== 0 &&
            e.selectedDates.sort(function (we, Be) {
              return we.getTime() - Be.getTime();
            }));
      if ((h(), ce)) {
        var ge = e.currentYear !== te.getFullYear();
        (e.currentYear = te.getFullYear()),
          (e.currentMonth = te.getMonth()),
          ge && (Le('onYearChange'), ne()),
          Le('onMonthChange');
      }
      if (
        (ur(),
        J(),
        Ge(),
        !ce && e.config.mode !== 'range' && e.config.showMonths === 1
          ? N(H)
          : e.selectedDateElem !== void 0 &&
            e.hourElement === void 0 &&
            e.selectedDateElem &&
            e.selectedDateElem.focus(),
        e.hourElement !== void 0 &&
          e.hourElement !== void 0 &&
          e.hourElement.focus(),
        e.config.closeOnSelect)
      ) {
        var Se = e.config.mode === 'single' && !e.config.enableTime,
          me =
            e.config.mode === 'range' &&
            e.selectedDates.length === 2 &&
            !e.config.enableTime;
        (Se || me) && Hr();
      }
      m();
    }
  }
  var Ne = {
    locale: [yt, it],
    showMonths: [_e, o, gt],
    minDate: [D],
    maxDate: [D],
    positionElement: [Vt],
    clickOpens: [
      function () {
        e.config.clickOpens === !0
          ? (d(e._input, 'focus', e.open), d(e._input, 'click', e.open))
          : (e._input.removeEventListener('focus', e.open),
            e._input.removeEventListener('click', e.open));
      },
    ],
  };
  function ye(g, E) {
    if (g !== null && typeof g == 'object') {
      Object.assign(e.config, g);
      for (var R in g)
        Ne[R] !== void 0 &&
          Ne[R].forEach(function (H) {
            return H();
          });
    } else
      (e.config[g] = E),
        Ne[g] !== void 0
          ? Ne[g].forEach(function (H) {
              return H();
            })
          : Ss.indexOf(g) > -1 && (e.config[g] = ys(E));
    e.redraw(), Ge(!0);
  }
  function Pe(g, E) {
    var R = [];
    if (g instanceof Array)
      R = g.map(function (H) {
        return e.parseDate(H, E);
      });
    else if (g instanceof Date || typeof g == 'number') R = [e.parseDate(g, E)];
    else if (typeof g == 'string')
      switch (e.config.mode) {
        case 'single':
        case 'time':
          R = [e.parseDate(g, E)];
          break;
        case 'multiple':
          R = g.split(e.config.conjunction).map(function (H) {
            return e.parseDate(H, E);
          });
          break;
        case 'range':
          R = g.split(e.l10n.rangeSeparator).map(function (H) {
            return e.parseDate(H, E);
          });
          break;
      }
    else
      e.config.errorHandler(
        new Error('Invalid date supplied: ' + JSON.stringify(g)),
      );
    (e.selectedDates = e.config.allowInvalidPreload
      ? R
      : R.filter(function (H) {
          return H instanceof Date && ve(H, !1);
        })),
      e.config.mode === 'range' &&
        e.selectedDates.sort(function (H, te) {
          return H.getTime() - te.getTime();
        });
  }
  function Oe(g, E, R) {
    if (
      (E === void 0 && (E = !1),
      R === void 0 && (R = e.config.dateFormat),
      (g !== 0 && !g) || (g instanceof Array && g.length === 0))
    )
      return e.clear(E);
    Pe(g, R),
      (e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1]),
      e.redraw(),
      D(void 0, E),
      u(),
      e.selectedDates.length === 0 && e.clear(!1),
      Ge(E),
      E && Le('onChange');
  }
  function vt(g) {
    return g
      .slice()
      .map(function (E) {
        return typeof E == 'string' || typeof E == 'number' || E instanceof Date
          ? e.parseDate(E, void 0, !0)
          : E && typeof E == 'object' && E.from && E.to
            ? {
                from: e.parseDate(E.from, void 0),
                to: e.parseDate(E.to, void 0),
              }
            : E;
      })
      .filter(function (E) {
        return E;
      });
  }
  function Qt() {
    (e.selectedDates = []), (e.now = e.parseDate(e.config.now) || new Date());
    var g =
      e.config.defaultDate ||
      ((e.input.nodeName === 'INPUT' || e.input.nodeName === 'TEXTAREA') &&
      e.input.placeholder &&
      e.input.value === e.input.placeholder
        ? null
        : e.input.value);
    g && Pe(g, e.config.dateFormat),
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
  function Rr() {
    if (((e.input = pe()), !e.input)) {
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
      Vt();
  }
  function Vt() {
    e._positionElement = e.config.positionElement || e._input;
  }
  function Er() {
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
    d(e.mobileInput, 'change', function (E) {
      e.setDate(er(E).value, !1, e.mobileFormatStr),
        Le('onChange'),
        Le('onClose');
    });
  }
  function Wr(g) {
    if (e.isOpen === !0) return e.close();
    e.open(g);
  }
  function Le(g, E) {
    if (e.config !== void 0) {
      var R = e.config[g];
      if (R !== void 0 && R.length > 0)
        for (var H = 0; R[H] && H < R.length; H++)
          R[H](e.selectedDates, e.input.value, e, E);
      g === 'onChange' &&
        (e.input.dispatchEvent(jt('change')),
        e.input.dispatchEvent(jt('input')));
    }
  }
  function jt(g) {
    var E = document.createEvent('Event');
    return E.initEvent(g, !0, !0), E;
  }
  function Gt(g) {
    for (var E = 0; E < e.selectedDates.length; E++) {
      var R = e.selectedDates[E];
      if (R instanceof Date && tr(R, g) === 0) return '' + E;
    }
    return !1;
  }
  function kr(g) {
    return e.config.mode !== 'range' || e.selectedDates.length < 2
      ? !1
      : tr(g, e.selectedDates[0]) >= 0 && tr(g, e.selectedDates[1]) <= 0;
  }
  function ur() {
    e.config.noCalendar ||
      e.isMobile ||
      !e.monthNav ||
      (e.yearElements.forEach(function (g, E) {
        var R = new Date(e.currentYear, e.currentMonth, 1);
        R.setMonth(e.currentMonth + E),
          e.config.showMonths > 1 || e.config.monthSelectorType === 'static'
            ? (e.monthElements[E].textContent =
                Ha(R.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + ' ')
            : (e.monthsDropdownContainer.value = R.getMonth().toString()),
          (g.value = R.getFullYear().toString());
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
  function hr(g) {
    var E = g || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
    return e.selectedDates
      .map(function (R) {
        return e.formatDate(R, E);
      })
      .filter(function (R, H, te) {
        return (
          e.config.mode !== 'range' ||
          e.config.enableTime ||
          te.indexOf(R) === H
        );
      })
      .join(
        e.config.mode !== 'range'
          ? e.config.conjunction
          : e.l10n.rangeSeparator,
      );
  }
  function Ge(g) {
    g === void 0 && (g = !0),
      e.mobileInput !== void 0 &&
        e.mobileFormatStr &&
        (e.mobileInput.value =
          e.latestSelectedDateObj !== void 0
            ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr)
            : ''),
      (e.input.value = hr(e.config.dateFormat)),
      e.altInput !== void 0 && (e.altInput.value = hr(e.config.altFormat)),
      g !== !1 && Le('onValueUpdate');
  }
  function Vr(g) {
    var E = er(g),
      R = e.prevMonthNav.contains(E),
      H = e.nextMonthNav.contains(E);
    R || H
      ? xt(R ? -1 : 1)
      : e.yearElements.indexOf(E) >= 0
        ? E.select()
        : E.classList.contains('arrowUp')
          ? e.changeYear(e.currentYear + 1)
          : E.classList.contains('arrowDown') &&
            e.changeYear(e.currentYear - 1);
  }
  function Qe(g) {
    g.preventDefault();
    var E = g.type === 'keydown',
      R = er(g),
      H = R;
    e.amPM !== void 0 &&
      R === e.amPM &&
      (e.amPM.textContent =
        e.l10n.amPM[pr(e.amPM.textContent === e.l10n.amPM[0])]);
    var te = parseFloat(H.getAttribute('min')),
      ce = parseFloat(H.getAttribute('max')),
      Te = parseFloat(H.getAttribute('step')),
      ge = parseInt(H.value, 10),
      Se = g.delta || (E ? (g.which === 38 ? 1 : -1) : 0),
      me = ge + Te * Se;
    if (typeof H.value < 'u' && H.value.length === 2) {
      var we = H === e.hourElement,
        Be = H === e.minuteElement;
      me < te
        ? ((me = ce + me + pr(!we) + (pr(we) && pr(!e.amPM))),
          Be && k(void 0, -1, e.hourElement))
        : me > ce &&
          ((me = H === e.hourElement ? me - ce - pr(!e.amPM) : te),
          Be && k(void 0, 1, e.hourElement)),
        e.amPM &&
          we &&
          (Te === 1 ? me + ge === 23 : Math.abs(me - ge) > Te) &&
          (e.amPM.textContent =
            e.l10n.amPM[pr(e.amPM.textContent === e.l10n.amPM[0])]),
        (H.value = Xt(me));
    }
  }
  return i(), e;
}
function Zn(t, r) {
  for (
    var e = Array.prototype.slice.call(t).filter(function (s) {
        return s instanceof HTMLElement;
      }),
      n = [],
      i = 0;
    i < e.length;
    i++
  ) {
    var a = e[i];
    try {
      if (a.getAttribute('data-fp-omit') !== null) continue;
      a._flatpickr !== void 0 &&
        (a._flatpickr.destroy(), (a._flatpickr = void 0)),
        (a._flatpickr = w_(a, r || {})),
        n.push(a._flatpickr);
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
      return Zn(this, t);
    }),
  (HTMLElement.prototype.flatpickr = function (t) {
    return Zn([this], t);
  }));
var ut = function (t, r) {
  return typeof t == 'string'
    ? Zn(window.document.querySelectorAll(t), r)
    : t instanceof Node
      ? Zn([t], r)
      : Zn(t, r);
};
ut.defaultConfig = {};
ut.l10ns = { en: kt({}, Hi), default: kt({}, Hi) };
ut.localize = function (t) {
  ut.l10ns.default = kt(kt({}, ut.l10ns.default), t);
};
ut.setDefaults = function (t) {
  ut.defaultConfig = kt(kt({}, ut.defaultConfig), t);
};
ut.parseDate = Ys({});
ut.formatDate = Mc({});
ut.compareDates = tr;
typeof jQuery < 'u' &&
  typeof jQuery.fn < 'u' &&
  (jQuery.fn.flatpickr = function (t) {
    return Zn(this, t);
  });
Date.prototype.fp_incr = function (t) {
  return new Date(
    this.getFullYear(),
    this.getMonth(),
    this.getDate() + (typeof t == 'string' ? parseInt(t, 10) : t),
  );
};
typeof window < 'u' && (window.flatpickr = ut);
var E_ = dt('<option> </option>'),
  T_ = dt('<option> </option>'),
  S_ = dt(
    '<div class="add-form svelte-oer18s"><h3 class="svelte-oer18s">Add New Outwards Record</h3> <form class="svelte-oer18s"><div class="form-group svelte-oer18s"><label for="addOutId" class="svelte-oer18s">Outward ID:</label> <input id="addOutId" type="text" required class="svelte-oer18s"/></div> <div class="form-group svelte-oer18s"><label for="addBatchCode" class="svelte-oer18s">Batch (Item - Stock):</label> <select id="addBatchCode" required class="svelte-oer18s"><option disabled>Select a Batch</option><!></select></div> <div class="form-group svelte-oer18s"><label for="addCustCode" class="svelte-oer18s">Customer:</label> <select id="addCustCode" required class="svelte-oer18s"><option disabled>Select a Customer</option><!></select></div> <div class="form-group svelte-oer18s"><label for="addQty" class="svelte-oer18s">Quantity:</label> <input id="addQty" type="number" min="0.001" step="0.001" required class="svelte-oer18s"/></div> <div class="form-group svelte-oer18s"><label for="addSellingPrice" class="svelte-oer18s">Selling Price/Unit:</label> <input id="addSellingPrice" type="number" min="0" step="0.001" required class="svelte-oer18s"/></div> <div class="form-group svelte-oer18s"><label for="addDateOut" class="svelte-oer18s">Date Out:</label> <input id="addDateOut" type="text" required class="svelte-oer18s"/></div> <div class="form-action svelte-oer18s"><button type="submit" class="btn add-btn svelte-oer18s">Add Record</button></div></form></div>',
  ),
  y_ = dt('<p class="status svelte-oer18s">Loading outwards records...</p>'),
  A_ = dt('<p class="status error svelte-oer18s"> </p>'),
  C_ = dt('<p class="status svelte-oer18s">No outwards records found.</p>'),
  F_ = dt('<p class="status svelte-oer18s"> </p>'),
  D_ = dt('<option> </option>'),
  O_ = dt('<select class="edit-input svelte-oer18s" required></select>'),
  N_ = dt('<option> </option>'),
  R_ = dt('<select class="edit-input svelte-oer18s" required></select>'),
  k_ = dt(
    '<input class="edit-input svelte-oer18s" type="number" min="0.001" step="0.001" required/>',
  ),
  I_ = dt(
    '<input class="edit-input svelte-oer18s" type="number" min="0" step="0.001" required/>',
  ),
  b_ = dt('<input class="edit-input svelte-oer18s" type="text" required/>'),
  M_ = dt(
    '<button class="btn save-btn svelte-oer18s" title="Save Changes">Save</button> <button class="btn cancel-btn svelte-oer18s" title="Cancel Edit">Cancel</button>',
    1,
  ),
  P_ = dt(
    '<button class="btn edit-btn svelte-oer18s" title="Edit Record">Edit</button>',
  ),
  L_ = dt(
    '<tr class="svelte-oer18s"><td class="svelte-oer18s"> </td><td class="svelte-oer18s"><!></td><td class="svelte-oer18s"> </td><td class="svelte-oer18s"><!></td><td class="svelte-oer18s"><!></td><td class="svelte-oer18s"><!></td><td class="svelte-oer18s"><!></td><td class="svelte-oer18s"><!></td></tr>',
  ),
  B_ = dt(
    '<div class="table-container svelte-oer18s"><table class="svelte-oer18s"><thead class="svelte-oer18s"><tr><th class="svelte-oer18s">Outward ID</th><th class="svelte-oer18s">Batch Code</th><th class="svelte-oer18s">Item Name</th><th class="svelte-oer18s">Customer</th><th class="svelte-oer18s">Quantity</th><th class="svelte-oer18s">Price/Unit</th><th class="svelte-oer18s">Date Out</th><th class="svelte-oer18s">Actions</th></tr></thead><tbody class="svelte-oer18s"></tbody></table></div>',
  ),
  U_ = dt(
    '<!> <div class="wrapper svelte-oer18s"><div class="card svelte-oer18s"><div class="header svelte-oer18s"><h2>Manage Outwards Records</h2> <div class="controls svelte-oer18s"><input placeholder="Search all fields..." class="search-input svelte-oer18s"/> <button class="btn excel-btn svelte-oer18s">Export Excel</button> <button class="btn add-new-toggle-btn svelte-oer18s"> </button></div></div> <!> <!></div></div>',
    1,
  );
function H_(t, r) {
  e0(r, !1);
  const [e, n] = Yu(),
    i = () => Yr(x, '$batches', e),
    a = () => Yr(D, '$searchTerm', e),
    s = () => Yr(F, '$showAddForm', e),
    o = () => Yr(d, '$customers', e),
    l = () => Yr(m, '$isLoading', e),
    f = () => Yr(p, '$rawOutwards', e),
    c = () => Yr(A, '$errorMessage', e),
    h = () => Yr(U, '$filteredOutwards', e),
    u = () => Yr(X, '$editingOutId', e),
    p = Xr([]),
    x = Xr([]),
    d = Xr([]),
    m = Xr(!0),
    A = Xr(''),
    D = Xr(''),
    F = Xr(!1);
  let k = rr(''),
    j = rr(''),
    ee = rr(''),
    N = rr(0),
    W = rr(0),
    M = rr('');
  const X = Xr(null);
  let K = rr(''),
    J = rr(''),
    ne = rr(0),
    ke = rr(0),
    _e = rr('');
  const nt = 'http://localhost:3000/api/outwards';
  async function Je() {
    m.set(!0), A.set('');
    try {
      const le = await at.get(nt);
      p.set(Array.isArray(le.data) ? le.data : []);
    } catch (le) {
      const Ne =
        le.response?.data?.error ||
        le.message ||
        'Failed to fetch outwards records.';
      A.set(Ne), p.set([]);
    } finally {
      m.set(!1);
    }
  }
  async function gt() {
    try {
      const le = await at.get(`${nt}/batch-customer-lists`);
      x.set(le.data.batches), d.set(le.data.customers);
    } catch {
      A.set('Failed to fetch batch and customer lists for forms.'),
        x.set([]),
        d.set([]);
    }
  }
  Df(async () => {
    await Je(), await gt();
  });
  function it(le, Ne) {
    const ye = ut(le, {
      dateFormat: 'Y-m-d',
      altInput: !0,
      altFormat: 'd/m/Y',
      defaultDate: Ne,
      onClose(Pe) {
        Pe.length > 0
          ? ((le.value = Pe[0].toISOString().split('T')[0]),
            le.dispatchEvent(new Event('input', { bubbles: !0 })))
          : ((le.value = ''),
            le.dispatchEvent(new Event('input', { bubbles: !0 })));
      },
    });
    return {
      update(Pe) {
        ye.setDate(Pe, !1);
      },
      destroy() {
        ye.destroy();
      },
    };
  }
  function St(le) {
    if (!le) return 'N/A';
    const Ne = new Date(le);
    if (isNaN(Ne.getTime())) return le;
    const ye = String(Ne.getDate()).padStart(2, '0'),
      Pe = String(Ne.getMonth() + 1).padStart(2, '0'),
      Oe = Ne.getFullYear();
    return `${ye}/${Pe}/${Oe}`;
  }
  function xt(le) {
    return le == null || isNaN(Number(le))
      ? 'N/A'
      : Number(le).toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
        });
  }
  function C(le) {
    return le == null || isNaN(Number(le)) ? 'N/A' : Number(le).toFixed(3);
  }
  const U = ju([p, D], ([le, Ne]) => {
    if (!Ne.trim()) return le;
    const ye = Ne.toLowerCase();
    return le.filter((Pe) =>
      Object.values(Pe).some(
        (Oe) => Oe != null && String(Oe).toLowerCase().includes(ye),
      ),
    );
  });
  async function I() {
    A.set('');
    const le = i().find((Pe) => Pe.batchcode === ue(j)),
      Ne = le ? le.current_stock : 0,
      ye = {
        outid: ue(k).trim(),
        batchcode: ue(j).trim(),
        custcode: ue(ee).trim(),
        qty: Number(ue(N)),
        selling_price_per_unit: Number(ue(W)),
        dateout: ue(M).trim(),
      };
    if (
      !ye.outid ||
      !ye.batchcode ||
      !ye.custcode ||
      isNaN(ye.qty) ||
      ye.qty <= 0 ||
      isNaN(ye.selling_price_per_unit) ||
      ye.selling_price_per_unit < 0 ||
      !ye.dateout
    ) {
      A.set(
        'Please fill all required fields correctly (quantity positive, price non-negative, and date valid).',
      );
      return;
    }
    if (ye.qty > Ne) {
      A.set(`Not enough stock in batch ${ue(j)}. Available: ${C(Ne)}`);
      return;
    }
    try {
      await at.post(nt, ye),
        Ue(k, ''),
        Ue(j, ''),
        Ue(ee, ''),
        Ue(N, 0),
        Ue(W, 0),
        Ue(M, ''),
        await Je(),
        await gt(),
        F.set(!1);
    } catch (Pe) {
      const Oe =
        Pe.response?.data?.error ||
        Pe.response?.statusText ||
        Pe.message ||
        'Failed to add outwards record.';
      A.set(`Error adding outwards record: ${Oe}`);
    }
  }
  function O(le) {
    A.set(''),
      X.set(le.outid),
      Ue(K, le.batchcode),
      Ue(J, le.custcode),
      Ue(ne, le.qty),
      Ue(ke, le.selling_price_per_unit),
      Ue(
        _e,
        le.dateout ? new Date(le.dateout).toISOString().split('T')[0] : '',
      );
  }
  function q() {
    A.set(''), X.set(null);
  }
  async function xe(le) {
    A.set('');
    const Ne = Is(p).find((vt) => vt.outid === le);
    if (!Ne) {
      A.set('Cannot find original record to save.');
      return;
    }
    const ye = {
      batchcode: ue(K).trim(),
      custcode: ue(J).trim(),
      qty: Number(ue(ne)),
      selling_price_per_unit: Number(ue(ke)),
      dateout: ue(_e).trim(),
    };
    if (
      !ye.batchcode ||
      !ye.custcode ||
      isNaN(ye.qty) ||
      ye.qty <= 0 ||
      isNaN(ye.selling_price_per_unit) ||
      ye.selling_price_per_unit < 0 ||
      !ye.dateout
    ) {
      A.set(
        'Edited fields must be valid (quantity positive, price non-negative, and date valid).',
      );
      return;
    }
    const Pe = i().find((vt) => vt.batchcode === ye.batchcode);
    let Oe = Pe ? Pe.current_stock : 0;
    if ((ye.batchcode === Ne.batchcode && (Oe += Ne.qty), ye.qty > Oe)) {
      A.set(
        `Not enough stock in batch ${ye.batchcode}. Available for this transaction: ${C(Oe)}`,
      );
      return;
    }
    try {
      await at.put(`${nt}/${le}`, ye), await Je(), await gt(), q();
    } catch (vt) {
      const Qt =
        vt.response?.data?.error ||
        vt.message ||
        'Failed to update outwards record.';
      A.set(`Error updating outwards record: ${Qt}`);
    }
  }
  function ve() {
    const le = Is(U);
    if (!le || le.length === 0) {
      alert('No outwards data to export.');
      return;
    }
    const Ne = le.map((Oe) => ({
        'Outward ID': Oe.outid,
        'Batch Code': Oe.batchcode,
        'Item Code': Oe.itemcode,
        'Item Name': Oe.itemname,
        'Customer Code': Oe.custcode,
        'Customer Name': Oe.custname,
        Quantity: C(Oe.qty),
        'Selling Price Per Unit': C(Oe.selling_price_per_unit),
        'Date Out': St(Oe.dateout),
      })),
      ye = Ts.json_to_sheet(Ne),
      Pe = Ts.book_new();
    Ts.book_append_sheet(Pe, ye, 'OutwardsRecords'),
      e_(Pe, 'OutwardsRecords.xlsx');
  }
  Wu();
  var de = U_(),
    fe = H0(de);
  p_(fe, {});
  var Me = Ie(fe, 2),
    Ce = Fe(Me),
    lt = Fe(Ce),
    be = Ie(Fe(lt), 2),
    Pt = Fe(be),
    Ze = Ie(Pt, 2),
    pe = Ie(Ze, 2),
    yt = Fe(pe),
    At = Ie(lt, 2);
  {
    var wr = (le) => {
      var Ne = S_(),
        ye = Ie(Fe(Ne), 2),
        Pe = Fe(ye),
        Oe = Ie(Fe(Pe), 2),
        vt = Ie(Pe, 2),
        Qt = Ie(Fe(vt), 2);
      _t(() => {
        ue(j),
          Ji(() => {
            i();
          });
      });
      var Rr = Fe(Qt);
      Rr.value = Rr.__value = '';
      var Vt = Ie(Rr);
      hi(Vt, 1, i, Zi, (Qe, g) => {
        var E = E_(),
          R = Fe(E),
          H = {};
        _t(
          (te) => {
            Yt(
              R,
              `${ue(g).itemname ?? ''} (${ue(g).batchcode ?? ''}) - Stock: ${te ?? ''}`,
            ),
              H !== (H = ue(g).batchcode) &&
                (E.value = (E.__value = ue(g).batchcode) ?? '');
          },
          [() => C(ue(g).current_stock)],
          vi,
        ),
          tt(Qe, E);
      });
      var Er = Ie(vt, 2),
        Wr = Ie(Fe(Er), 2);
      _t(() => {
        ue(ee),
          Ji(() => {
            o();
          });
      });
      var Le = Fe(Wr);
      Le.value = Le.__value = '';
      var jt = Ie(Le);
      hi(jt, 1, o, Zi, (Qe, g) => {
        var E = T_(),
          R = Fe(E),
          H = {};
        _t(() => {
          Yt(R, `${ue(g).custname ?? ''} (${ue(g).custcode ?? ''})`),
            H !== (H = ue(g).custcode) &&
              (E.value = (E.__value = ue(g).custcode) ?? '');
        }),
          tt(Qe, E);
      });
      var Gt = Ie(Er, 2),
        kr = Ie(Fe(Gt), 2),
        ur = Ie(Gt, 2),
        hr = Ie(Fe(ur), 2),
        Ge = Ie(ur, 2),
        Vr = Ie(Fe(Ge), 2);
      Qn(() =>
        nn(
          Vr,
          () => ue(M),
          (Qe) => Ue(M, Qe),
        ),
      ),
        Y0(Vr, (Qe) => it?.(Qe)),
        nn(
          Oe,
          () => ue(k),
          (Qe) => Ue(k, Qe),
        ),
        Qi(
          Qt,
          () => ue(j),
          (Qe) => Ue(j, Qe),
        ),
        Qi(
          Wr,
          () => ue(ee),
          (Qe) => Ue(ee, Qe),
        ),
        nn(
          kr,
          () => ue(N),
          (Qe) => Ue(N, Qe),
        ),
        nn(
          hr,
          () => ue(W),
          (Qe) => Ue(W, Qe),
        ),
        Bn('submit', ye, Hu(I)),
        tt(le, Ne);
    };
    Sr(At, (le) => {
      s() && le(wr);
    });
  }
  var Nr = Ie(At, 2);
  {
    var mn = (le) => {
        var Ne = y_();
        tt(le, Ne);
      },
      Hr = (le, Ne) => {
        {
          var ye = (Oe) => {
              var vt = A_(),
                Qt = Fe(vt);
              _t(() => Yt(Qt, c())), tt(Oe, vt);
            },
            Pe = (Oe, vt) => {
              {
                var Qt = (Vt) => {
                    var Er = C_();
                    tt(Vt, Er);
                  },
                  Rr = (Vt, Er) => {
                    {
                      var Wr = (jt) => {
                          var Gt = F_(),
                            kr = Fe(Gt);
                          _t(() => Yt(kr, `No records match "${a() ?? ''}".`)),
                            tt(jt, Gt);
                        },
                        Le = (jt) => {
                          var Gt = B_(),
                            kr = Fe(Gt),
                            ur = Ie(Fe(kr));
                          hi(
                            ur,
                            5,
                            h,
                            (hr) => hr.outid,
                            (hr, Ge) => {
                              var Vr = L_(),
                                Qe = Fe(Vr),
                                g = Fe(Qe),
                                E = Ie(Qe),
                                R = Fe(E);
                              {
                                var H = (z) => {
                                    var oe = O_();
                                    _t(() => {
                                      ue(K),
                                        Ji(() => {
                                          i();
                                        });
                                    }),
                                      hi(oe, 5, i, Zi, (Ee, Re) => {
                                        var et = D_(),
                                          jr = Fe(et),
                                          Tr = {};
                                        _t(() => {
                                          Yt(
                                            jr,
                                            `${ue(Re).batchcode ?? ''} (${ue(Re).itemname ?? ''})`,
                                          ),
                                            Tr !== (Tr = ue(Re).batchcode) &&
                                              (et.value =
                                                (et.__value =
                                                  ue(Re).batchcode) ?? '');
                                        }),
                                          tt(Ee, et);
                                      }),
                                      Qi(
                                        oe,
                                        () => ue(K),
                                        (Ee) => Ue(K, Ee),
                                      ),
                                      tt(z, oe);
                                  },
                                  te = (z) => {
                                    var oe = ui();
                                    _t(() => Yt(oe, ue(Ge).batchcode ?? 'N/A')),
                                      tt(z, oe);
                                  };
                                Sr(R, (z) => {
                                  u() === ue(Ge).outid ? z(H) : z(te, !1);
                                });
                              }
                              var ce = Ie(E),
                                Te = Fe(ce),
                                ge = Ie(ce),
                                Se = Fe(ge);
                              {
                                var me = (z) => {
                                    var oe = R_();
                                    _t(() => {
                                      ue(J),
                                        Ji(() => {
                                          o();
                                        });
                                    }),
                                      hi(oe, 5, o, Zi, (Ee, Re) => {
                                        var et = N_(),
                                          jr = Fe(et),
                                          Tr = {};
                                        _t(() => {
                                          Yt(
                                            jr,
                                            `${ue(Re).custname ?? ''} (${ue(Re).custcode ?? ''})`,
                                          ),
                                            Tr !== (Tr = ue(Re).custcode) &&
                                              (et.value =
                                                (et.__value =
                                                  ue(Re).custcode) ?? '');
                                        }),
                                          tt(Ee, et);
                                      }),
                                      Qi(
                                        oe,
                                        () => ue(J),
                                        (Ee) => Ue(J, Ee),
                                      ),
                                      tt(z, oe);
                                  },
                                  we = (z) => {
                                    var oe = ui();
                                    _t(() =>
                                      Yt(
                                        oe,
                                        `${ue(Ge).custname ?? 'N/A' ?? ''} (${ue(Ge).custcode ?? 'N/A' ?? ''})`,
                                      ),
                                    ),
                                      tt(z, oe);
                                  };
                                Sr(Se, (z) => {
                                  u() === ue(Ge).outid ? z(me) : z(we, !1);
                                });
                              }
                              var Be = Ie(ge),
                                v = Fe(Be);
                              {
                                var T = (z) => {
                                    var oe = k_();
                                    nn(
                                      oe,
                                      () => ue(ne),
                                      (Ee) => Ue(ne, Ee),
                                    ),
                                      tt(z, oe);
                                  },
                                  _ = (z) => {
                                    var oe = ui();
                                    _t(
                                      (Ee) => Yt(oe, Ee),
                                      [() => C(ue(Ge).qty)],
                                      vi,
                                    ),
                                      tt(z, oe);
                                  };
                                Sr(v, (z) => {
                                  u() === ue(Ge).outid ? z(T) : z(_, !1);
                                });
                              }
                              var w = Ie(Be),
                                S = Fe(w);
                              {
                                var y = (z) => {
                                    var oe = I_();
                                    nn(
                                      oe,
                                      () => ue(ke),
                                      (Ee) => Ue(ke, Ee),
                                    ),
                                      tt(z, oe);
                                  },
                                  P = (z) => {
                                    var oe = ui();
                                    _t(
                                      (Ee) => Yt(oe, Ee),
                                      [() => xt(ue(Ge).selling_price_per_unit)],
                                      vi,
                                    ),
                                      tt(z, oe);
                                  };
                                Sr(S, (z) => {
                                  u() === ue(Ge).outid ? z(y) : z(P, !1);
                                });
                              }
                              var Y = Ie(w),
                                b = Fe(Y);
                              {
                                var L = (z) => {
                                    var oe = b_();
                                    Qn(() =>
                                      nn(
                                        oe,
                                        () => ue(_e),
                                        (Ee) => Ue(_e, Ee),
                                      ),
                                    ),
                                      Y0(
                                        oe,
                                        (Ee, Re) => it?.(Ee, Re),
                                        () => ue(_e),
                                      ),
                                      tt(z, oe);
                                  },
                                  B = (z) => {
                                    var oe = ui();
                                    _t(
                                      (Ee) => Yt(oe, Ee),
                                      [() => St(ue(Ge).dateout)],
                                      vi,
                                    ),
                                      tt(z, oe);
                                  };
                                Sr(b, (z) => {
                                  u() === ue(Ge).outid ? z(L) : z(B, !1);
                                });
                              }
                              var Q = Ie(Y),
                                se = Fe(Q);
                              {
                                var he = (z) => {
                                    var oe = M_(),
                                      Ee = H0(oe),
                                      Re = Ie(Ee, 2);
                                    Bn('click', Ee, () => xe(ue(Ge).outid)),
                                      Bn('click', Re, q),
                                      tt(z, oe);
                                  },
                                  re = (z) => {
                                    var oe = P_();
                                    Bn('click', oe, () => O(ue(Ge))), tt(z, oe);
                                  };
                                Sr(se, (z) => {
                                  u() === ue(Ge).outid ? z(he) : z(re, !1);
                                });
                              }
                              _t(() => {
                                Yt(g, ue(Ge).outid ?? 'N/A'),
                                  Yt(Te, ue(Ge).itemname ?? 'N/A');
                              }),
                                tt(hr, Vr);
                            },
                          ),
                            tt(jt, Gt);
                        };
                      Sr(
                        Vt,
                        (jt) => {
                          h().length === 0 && a().trim() ? jt(Wr) : jt(Le, !1);
                        },
                        Er,
                      );
                    }
                  };
                Sr(
                  Oe,
                  (Vt) => {
                    f().length === 0 ? Vt(Qt) : Vt(Rr, !1);
                  },
                  vt,
                );
              }
            };
          Sr(
            le,
            (Oe) => {
              c() ? Oe(ye) : Oe(Pe, !1);
            },
            Ne,
          );
        }
      };
    Sr(Nr, (le) => {
      l() && f().length === 0 ? le(mn) : le(Hr, !1);
    });
  }
  _t(() => Yt(yt, s() ? 'Hide Add Form' : 'Add New Record')),
    nn(Pt, a, (le) => Gu(D, le)),
    Bn('click', Ze, ve),
    Bn('click', pe, () => F.update((le) => !le)),
    tt(t, de),
    t0(),
    n();
}
Ru(H_, { target: document.getElementById('app') });
