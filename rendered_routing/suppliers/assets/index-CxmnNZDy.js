(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const s of a.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
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
    const a = r(i);
    fetch(i.href, a);
  }
})();
const M0 = !1;
var Ja = Array.isArray,
  Yl = Array.prototype.indexOf,
  Za = Array.from,
  Js = Object.defineProperty,
  Fn = Object.getOwnPropertyDescriptor,
  Zs = Object.getOwnPropertyDescriptors,
  ql = Object.prototype,
  Jl = Array.prototype,
  Qa = Object.getPrototypeOf,
  b0 = Object.isExtensible;
const vt = () => {};
function Zl(e) {
  return e();
}
function Si(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
const Ur = 2,
  Qs = 4,
  Yi = 8,
  e0 = 16,
  ft = 32,
  fn = 64,
  Ai = 128,
  Cr = 256,
  yi = 512,
  mr = 1024,
  zr = 2048,
  Pt = 4096,
  rt = 8192,
  qi = 16384,
  Ql = 32768,
  r0 = 65536,
  ec = 1 << 19,
  ef = 1 << 20,
  Ba = 1 << 21,
  Cn = Symbol('$state');
function rf(e) {
  return e === this.v;
}
function tf(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function nf(e) {
  return !tf(e, this.v);
}
function rc(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function tc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function nc(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function ic() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function ac() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function sc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function fc() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let $n = !1,
  oc = !1;
function lc() {
  $n = !0;
}
const cc = 1,
  uc = 2,
  hc = 16,
  xc = 1,
  dc = 2,
  xr = Symbol(),
  pc = 'http://www.w3.org/1999/xhtml';
function vc(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let Ie = null;
function U0(e) {
  Ie = e;
}
function t0(e, t = !1, r) {
  var n = (Ie = {
    p: Ie,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  $n && !t && (Ie.l = { s: null, u: null, r1: [], r2: Bn(!1) }),
    a0(() => {
      n.d = !0;
    });
}
function n0(e) {
  const t = Ie;
  if (t !== null) {
    const s = t.e;
    if (s !== null) {
      var r = ye,
        n = Ae;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          _t(a.effect), Kr(a.reaction), vf(a.fn);
        }
      } finally {
        _t(r), Kr(n);
      }
    }
    (Ie = t.p), (t.m = !0);
  }
  return {};
}
function zn() {
  return !$n || (Ie !== null && Ie.l === null);
}
function Jt(e) {
  if (typeof e != 'object' || e === null || Cn in e) return e;
  const t = Qa(e);
  if (t !== ql && t !== Jl) return e;
  var r = new Map(),
    n = Ja(e),
    i = et(0),
    a = Ae,
    s = (f) => {
      var l = Ae;
      Kr(a);
      var o = f();
      return Kr(l), o;
    };
  return (
    n && r.set('length', et(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          ac();
        var c = r.get(l);
        return (
          c === void 0
            ? ((c = s(() => et(o.value))), r.set(l, c))
            : rr(
                c,
                s(() => Jt(o.value)),
              ),
          !0
        );
      },
      deleteProperty(f, l) {
        var o = r.get(l);
        if (o === void 0)
          l in f &&
            (r.set(
              l,
              s(() => et(xr)),
            ),
            Ea(i));
        else {
          if (n && typeof l == 'string') {
            var c = r.get('length'),
              u = Number(l);
            Number.isInteger(u) && u < c.v && rr(c, u);
          }
          rr(o, xr), Ea(i);
        }
        return !0;
      },
      get(f, l, o) {
        var d;
        if (l === Cn) return e;
        var c = r.get(l),
          u = l in f;
        if (
          (c === void 0 &&
            (!u || ((d = Fn(f, l)) != null && d.writable)) &&
            ((c = s(() => et(Jt(u ? f[l] : xr)))), r.set(l, c)),
          c !== void 0)
        ) {
          var h = we(c);
          return h === xr ? void 0 : h;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = r.get(l);
          c && (o.value = we(c));
        } else if (o === void 0) {
          var u = r.get(l),
            h = u == null ? void 0 : u.v;
          if (u !== void 0 && h !== xr)
            return { enumerable: !0, configurable: !0, value: h, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        var h;
        if (l === Cn) return !0;
        var o = r.get(l),
          c = (o !== void 0 && o.v !== xr) || Reflect.has(f, l);
        if (
          o !== void 0 ||
          (ye !== null && (!c || ((h = Fn(f, l)) != null && h.writable)))
        ) {
          o === void 0 && ((o = s(() => et(c ? Jt(f[l]) : xr))), r.set(l, o));
          var u = we(o);
          if (u === xr) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var C;
        var u = r.get(l),
          h = l in f;
        if (n && l === 'length')
          for (var d = o; d < u.v; d += 1) {
            var p = r.get(d + '');
            p !== void 0
              ? rr(p, xr)
              : d in f && ((p = s(() => et(xr))), r.set(d + '', p));
          }
        u === void 0
          ? (!h || ((C = Fn(f, l)) != null && C.writable)) &&
            ((u = s(() => et(void 0))),
            rr(
              u,
              s(() => Jt(o)),
            ),
            r.set(l, u))
          : ((h = u.v !== xr),
            rr(
              u,
              s(() => Jt(o)),
            ));
        var x = Reflect.getOwnPropertyDescriptor(f, l);
        if ((x != null && x.set && x.set.call(c, o), !h)) {
          if (n && typeof l == 'string') {
            var m = r.get('length'),
              S = Number(l);
            Number.isInteger(S) && S >= m.v && rr(m, S + 1);
          }
          Ea(i);
        }
        return !0;
      },
      ownKeys(f) {
        we(i);
        var l = Reflect.ownKeys(f).filter((u) => {
          var h = r.get(u);
          return h === void 0 || h.v !== xr;
        });
        for (var [o, c] of r) c.v !== xr && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        sc();
      },
    })
  );
}
function Ea(e, t = 1) {
  rr(e, e.v + t);
}
function i0(e) {
  var t = Ur | zr,
    r = Ae !== null && (Ae.f & Ur) !== 0 ? Ae : null;
  return (
    ye === null || (r !== null && (r.f & Cr) !== 0) ? (t |= Cr) : (ye.f |= ef),
    {
      ctx: Ie,
      deps: null,
      effects: null,
      equals: rf,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: r ?? ye,
    }
  );
}
function af(e) {
  const t = i0(e);
  return (t.equals = nf), t;
}
function sf(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1) mt(t[r]);
  }
}
function mc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ur) === 0) return t;
    t = t.parent;
  }
  return null;
}
function ff(e) {
  var t,
    r = ye;
  _t(mc(e));
  try {
    sf(e), (t = Ff(e));
  } finally {
    _t(r);
  }
  return t;
}
function of(e) {
  var t = ff(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = Af())), !ln)) {
    var r = (xt || (e.f & Cr) !== 0) && e.deps !== null ? Pt : mr;
    Hr(e, r);
  }
}
const Ln = new Map();
function Bn(e, t) {
  var r = { f: 0, v: e, reactions: null, equals: rf, rv: 0, wv: 0 };
  return r;
}
function et(e, t) {
  const r = Bn(e);
  return Rc(r), r;
}
function On(e, t = !1) {
  var n;
  const r = Bn(e);
  return (
    t || (r.equals = nf),
    $n && Ie !== null && Ie.l !== null && ((n = Ie.l).s ?? (n.s = [])).push(r),
    r
  );
}
function rr(e, t, r = !1) {
  Ae !== null &&
    !$r &&
    zn() &&
    (Ae.f & (Ur | e0)) !== 0 &&
    !(cr != null && cr.includes(e)) &&
    fc();
  let n = r ? Jt(t) : t;
  return lf(e, n);
}
function lf(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    ln ? Ln.set(e, t) : Ln.set(e, r),
      (e.v = t),
      (e.f & Ur) !== 0 &&
        ((e.f & zr) !== 0 && ff(e), Hr(e, (e.f & Cr) === 0 ? mr : Pt)),
      (e.wv = Af()),
      cf(e, zr),
      zn() &&
        ye !== null &&
        (ye.f & mr) !== 0 &&
        (ye.f & (ft | fn)) === 0 &&
        (Nr === null ? Nc([e]) : Nr.push(e));
  }
  return t;
}
function cf(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = zn(), i = r.length, a = 0; a < i; a++) {
      var s = r[a],
        f = s.f;
      (f & zr) === 0 &&
        ((!n && s === ye) ||
          (Hr(s, t),
          (f & (mr | Cr)) !== 0 && ((f & Ur) !== 0 ? cf(s, Pt) : Qi(s))));
    }
}
let _c = !1;
var H0, uf, hf, xf;
function gc() {
  if (H0 === void 0) {
    (H0 = window), (uf = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      t = Node.prototype,
      r = Text.prototype;
    (hf = Fn(t, 'firstChild').get),
      (xf = Fn(t, 'nextSibling').get),
      b0(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      b0(r) && (r.__t = void 0);
  }
}
function df(e = '') {
  return document.createTextNode(e);
}
function Fi(e) {
  return hf.call(e);
}
function Ji(e) {
  return xf.call(e);
}
function Fe(e, t) {
  return Fi(e);
}
function Ec(e, t) {
  {
    var r = Fi(e);
    return r instanceof Comment && r.data === '' ? Ji(r) : r;
  }
}
function Ke(e, t = 1, r = !1) {
  let n = e;
  for (; t--; ) n = Ji(n);
  return n;
}
function Tc(e) {
  e.textContent = '';
}
function pf(e) {
  ye === null && Ae === null && nc(),
    Ae !== null && (Ae.f & Cr) !== 0 && ye === null && tc(),
    ln && rc();
}
function wc(e, t) {
  var r = t.last;
  r === null
    ? (t.last = t.first = e)
    : ((r.next = e), (e.prev = r), (t.last = e));
}
function on(e, t, r, n = !0) {
  var i = ye,
    a = {
      ctx: Ie,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | zr,
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
  if (r)
    try {
      o0(a), (a.f |= Ql);
    } catch (l) {
      throw (mt(a), l);
    }
  else t !== null && Qi(a);
  var s =
    r &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (ef | Ai)) === 0;
  if (!s && n && (i !== null && wc(a, i), Ae !== null && (Ae.f & Ur) !== 0)) {
    var f = Ae;
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function a0(e) {
  const t = on(Yi, null, !1);
  return Hr(t, mr), (t.teardown = e), t;
}
function Ma(e) {
  pf();
  var t = ye !== null && (ye.f & ft) !== 0 && Ie !== null && !Ie.m;
  if (t) {
    var r = Ie;
    (r.e ?? (r.e = [])).push({ fn: e, effect: ye, reaction: Ae });
  } else {
    var n = vf(e);
    return n;
  }
}
function Sc(e) {
  return pf(), mf(e);
}
function Ac(e) {
  const t = on(fn, e, !0);
  return (r = {}) =>
    new Promise((n) => {
      r.outro
        ? Ci(t, () => {
            mt(t), n(void 0);
          })
        : (mt(t), n(void 0));
    });
}
function vf(e) {
  return on(Qs, e, !1);
}
function mf(e) {
  return on(Yi, e, !0);
}
function mi(e, t = [], r = i0) {
  const n = t.map(r);
  return s0(() => e(...n.map(we)));
}
function s0(e, t = 0) {
  return on(Yi | e0 | t, e, !0);
}
function Mn(e, t = !0) {
  return on(Yi | ft, e, !0, t);
}
function _f(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ln,
      n = Ae;
    W0(!0), Kr(null);
    try {
      t.call(null);
    } finally {
      W0(r), Kr(n);
    }
  }
}
function gf(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & fn) !== 0 ? (r.parent = null) : mt(r, t), (r = n);
  }
}
function yc(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ft) === 0 && mt(t), (t = r);
  }
}
function mt(e, t = !0) {
  var r = !1;
  (t || (e.f & ec) !== 0) &&
    e.nodes_start !== null &&
    (Fc(e.nodes_start, e.nodes_end), (r = !0)),
    gf(e, t && !r),
    ki(e, 0),
    Hr(e, qi);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  _f(e);
  var i = e.parent;
  i !== null && i.first !== null && Ef(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
        null);
}
function Fc(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : Ji(e);
    e.remove(), (e = r);
  }
}
function Ef(e) {
  var t = e.parent,
    r = e.prev,
    n = e.next;
  r !== null && (r.next = n),
    n !== null && (n.prev = r),
    t !== null &&
      (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Ci(e, t) {
  var r = [];
  f0(e, r, !0),
    Tf(r, () => {
      mt(e), t && t();
    });
}
function Tf(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e) i.out(n);
  } else t();
}
function f0(e, t, r) {
  if ((e.f & rt) === 0) {
    if (((e.f ^= rt), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & r0) !== 0 || (n.f & ft) !== 0;
      f0(n, t, a ? r : !1), (n = i);
    }
  }
}
function Oi(e) {
  wf(e, !0);
}
function wf(e, t) {
  if ((e.f & rt) !== 0) {
    (e.f ^= rt), (e.f & mr) === 0 && (e.f ^= mr), Kn(e) && (Hr(e, zr), Qi(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next,
        i = (r.f & r0) !== 0 || (r.f & ft) !== 0;
      wf(r, i ? t : !1), (r = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || t) && a.in();
  }
}
let Ri = [];
function Cc() {
  var e = Ri;
  (Ri = []), Si(e);
}
function Oc(e) {
  Ri.length === 0 && queueMicrotask(Cc), Ri.push(e);
}
let _i = !1,
  ba = !1,
  Ni = null,
  Ct = !1,
  ln = !1;
function W0(e) {
  ln = e;
}
let gi = [];
let Ae = null,
  $r = !1;
function Kr(e) {
  Ae = e;
}
let ye = null;
function _t(e) {
  ye = e;
}
let cr = null;
function Rc(e) {
  Ae !== null && Ae.f & Ba && (cr === null ? (cr = [e]) : cr.push(e));
}
let fr = null,
  wr = 0,
  Nr = null;
function Nc(e) {
  Nr = e;
}
let Sf = 1,
  Di = 0,
  xt = !1;
function Af() {
  return ++Sf;
}
function Kn(e) {
  var u;
  var t = e.f;
  if ((t & zr) !== 0) return !0;
  if ((t & Pt) !== 0) {
    var r = e.deps,
      n = (t & Cr) !== 0;
    if (r !== null) {
      var i,
        a,
        s = (t & yi) !== 0,
        f = n && ye !== null && !xt,
        l = r.length;
      if (s || f) {
        var o = e,
          c = o.parent;
        for (i = 0; i < l; i++)
          (a = r[i]),
            (s ||
              !(
                (u = a == null ? void 0 : a.reactions) != null && u.includes(o)
              )) &&
              (a.reactions ?? (a.reactions = [])).push(o);
        s && (o.f ^= yi), f && c !== null && (c.f & Cr) === 0 && (o.f ^= Cr);
      }
      for (i = 0; i < l; i++)
        if (((a = r[i]), Kn(a) && of(a), a.wv > e.wv)) return !0;
    }
    (!n || (ye !== null && !xt)) && Hr(e, mr);
  }
  return !1;
}
function Dc(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Ai) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ai;
      }
    r = r.parent;
  }
  throw ((_i = !1), e);
}
function V0(e) {
  return (e.f & qi) === 0 && (e.parent === null || (e.parent.f & Ai) === 0);
}
function Zi(e, t, r, n) {
  if (_i) {
    if ((r === null && (_i = !1), V0(t))) throw e;
    return;
  }
  if ((r !== null && (_i = !0), Dc(e, t), V0(t))) throw e;
}
function yf(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (cr != null && cr.includes(e)) ||
        ((a.f & Ur) !== 0
          ? yf(a, t, !1)
          : t === a && (r ? Hr(a, zr) : (a.f & mr) !== 0 && Hr(a, Pt), Qi(a)));
    }
}
function Ff(e) {
  var d;
  var t = fr,
    r = wr,
    n = Nr,
    i = Ae,
    a = xt,
    s = cr,
    f = Ie,
    l = $r,
    o = e.f;
  (fr = null),
    (wr = 0),
    (Nr = null),
    (xt = (o & Cr) !== 0 && ($r || !Ct || Ae === null)),
    (Ae = (o & (ft | fn)) === 0 ? e : null),
    (cr = null),
    U0(e.ctx),
    ($r = !1),
    Di++,
    (e.f |= Ba);
  try {
    var c = (0, e.fn)(),
      u = e.deps;
    if (fr !== null) {
      var h;
      if ((ki(e, wr), u !== null && wr > 0))
        for (u.length = wr + fr.length, h = 0; h < fr.length; h++)
          u[wr + h] = fr[h];
      else e.deps = u = fr;
      if (!xt)
        for (h = wr; h < u.length; h++)
          ((d = u[h]).reactions ?? (d.reactions = [])).push(e);
    } else u !== null && wr < u.length && (ki(e, wr), (u.length = wr));
    if (
      zn() &&
      Nr !== null &&
      !$r &&
      u !== null &&
      (e.f & (Ur | Pt | zr)) === 0
    )
      for (h = 0; h < Nr.length; h++) yf(Nr[h], e);
    return (
      i !== null &&
        i !== e &&
        (Di++, Nr !== null && (n === null ? (n = Nr) : n.push(...Nr))),
      c
    );
  } finally {
    (fr = t),
      (wr = r),
      (Nr = n),
      (Ae = i),
      (xt = a),
      (cr = s),
      U0(f),
      ($r = l),
      (e.f ^= Ba);
  }
}
function kc(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Yl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? (r = t.reactions = null) : ((r[n] = r[i]), r.pop());
    }
  }
  r === null &&
    (t.f & Ur) !== 0 &&
    (fr === null || !fr.includes(t)) &&
    (Hr(t, Pt), (t.f & (Cr | yi)) === 0 && (t.f ^= yi), sf(t), ki(t, 0));
}
function ki(e, t) {
  var r = e.deps;
  if (r !== null) for (var n = t; n < r.length; n++) kc(e, r[n]);
}
function o0(e) {
  var t = e.f;
  if ((t & qi) === 0) {
    Hr(e, mr);
    var r = ye,
      n = Ie,
      i = Ct;
    (ye = e), (Ct = !0);
    try {
      (t & e0) !== 0 ? yc(e) : gf(e), _f(e);
      var a = Ff(e);
      (e.teardown = typeof a == 'function' ? a : null), (e.wv = Sf);
      var s = e.deps,
        f;
      M0 && oc && e.f & zr;
    } catch (l) {
      Zi(l, e, r, n || e.ctx);
    } finally {
      (Ct = i), (ye = r);
    }
  }
}
function Ic() {
  try {
    ic();
  } catch (e) {
    if (Ni !== null) Zi(e, Ni, null);
    else throw e;
  }
}
function Pc() {
  var e = Ct;
  try {
    var t = 0;
    for (Ct = !0; gi.length > 0; ) {
      t++ > 1e3 && Ic();
      var r = gi,
        n = r.length;
      gi = [];
      for (var i = 0; i < n; i++) {
        var a = Bc(r[i]);
        Lc(a);
      }
      Ln.clear();
    }
  } finally {
    (ba = !1), (Ct = e), (Ni = null);
  }
}
function Lc(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if ((n.f & (qi | rt)) === 0)
        try {
          Kn(n) &&
            (o0(n),
            n.deps === null &&
              n.first === null &&
              n.nodes_start === null &&
              (n.teardown === null ? Ef(n) : (n.fn = null)));
        } catch (i) {
          Zi(i, n, null, n.ctx);
        }
    }
}
function Qi(e) {
  ba || ((ba = !0), queueMicrotask(Pc));
  for (var t = (Ni = e); t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (fn | ft)) !== 0) {
      if ((r & mr) === 0) return;
      t.f ^= mr;
    }
  }
  gi.push(t);
}
function Bc(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f,
      i = (n & (ft | fn)) !== 0,
      a = i && (n & mr) !== 0;
    if (!a && (n & rt) === 0) {
      if ((n & Qs) !== 0) t.push(r);
      else if (i) r.f ^= mr;
      else
        try {
          Kn(r) && o0(r);
        } catch (l) {
          Zi(l, r, null, r.ctx);
        }
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; ) (r = f.next), (f = f.parent);
  }
  return t;
}
function we(e) {
  var t = e.f,
    r = (t & Ur) !== 0;
  if (Ae !== null && !$r) {
    if (!(cr != null && cr.includes(e))) {
      var n = Ae.deps;
      e.rv < Di &&
        ((e.rv = Di),
        fr === null && n !== null && n[wr] === e
          ? wr++
          : fr === null
            ? (fr = [e])
            : (!xt || !fr.includes(e)) && fr.push(e));
    }
  } else if (r && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & Cr) === 0 && (i.f ^= Cr);
  }
  return r && ((i = e), Kn(i) && of(i)), ln && Ln.has(e) ? Ln.get(e) : e.v;
}
function ea(e) {
  var t = $r;
  try {
    return ($r = !0), e();
  } finally {
    $r = t;
  }
}
const Mc = -7169;
function Hr(e, t) {
  e.f = (e.f & Mc) | t;
}
function bc(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Cn in e) Ua(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == 'object' && r && Cn in r && Ua(r);
      }
  }
}
function Ua(e, t = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !t.has(e)
  ) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Ua(e[n], t);
      } catch {}
    const r = Qa(e);
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const n = Zs(r);
      for (let i in n) {
        const a = n[i].get;
        if (a)
          try {
            a.call(e);
          } catch {}
      }
    }
  }
}
const Uc = ['touchstart', 'touchmove'];
function Hc(e) {
  return Uc.includes(e);
}
let G0 = !1;
function Wc() {
  G0 ||
    ((G0 = !0),
    document.addEventListener(
      'reset',
      (e) => {
        Promise.resolve().then(() => {
          var t;
          if (!e.defaultPrevented)
            for (const r of e.target.elements)
              (t = r.__on_r) == null || t.call(r);
        });
      },
      { capture: !0 },
    ));
}
function Cf(e) {
  var t = Ae,
    r = ye;
  Kr(null), _t(null);
  try {
    return e();
  } finally {
    Kr(t), _t(r);
  }
}
function Vc(e, t, r, n = r) {
  e.addEventListener(t, () => Cf(r));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    Wc();
}
const Gc = new Set(),
  j0 = new Set();
function jc(e, t, r, n = {}) {
  function i(a) {
    if ((n.capture || An.call(t, a), !a.cancelBubble))
      return Cf(() => (r == null ? void 0 : r.call(this, a)));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? Oc(() => {
          t.addEventListener(e, i, n);
        })
      : t.addEventListener(e, i, n),
    i
  );
}
function Ta(e, t, r, n, i) {
  var a = { capture: n, passive: i },
    s = jc(e, t, r, a);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    a0(() => {
      t.removeEventListener(e, s, a);
    });
}
function An(e) {
  var C;
  var t = this,
    r = t.ownerDocument,
    n = e.type,
    i = ((C = e.composedPath) == null ? void 0 : C.call(e)) || [],
    a = i[0] || e.target,
    s = 0,
    f = e.__root;
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var o = i.indexOf(t);
    if (o === -1) return;
    l <= o && (s = l);
  }
  if (((a = i[s] || e.target), a !== t)) {
    Js(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || r;
      },
    });
    var c = Ae,
      u = ye;
    Kr(null), _t(null);
    try {
      for (var h, d = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var x = a['__' + n];
          if (x != null && (!a.disabled || e.target === a))
            if (Ja(x)) {
              var [m, ...S] = x;
              m.apply(a, [e, ...S]);
            } else x.call(a, e);
        } catch (F) {
          h ? d.push(F) : (h = F);
        }
        if (e.cancelBubble || p === t || p === null) break;
        a = p;
      }
      if (h) {
        for (let F of d)
          queueMicrotask(() => {
            throw F;
          });
        throw h;
      }
    } finally {
      (e.__root = t), delete e.currentTarget, Kr(c), _t(u);
    }
  }
}
function Xc(e) {
  var t = document.createElement('template');
  return (t.innerHTML = e.replaceAll('<!>', '<!---->')), t.content;
}
function X0(e, t) {
  var r = ye;
  r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function wt(e, t) {
  var r = (t & xc) !== 0,
    n = (t & dc) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Xc(a ? e : '<!>' + e)), r || (i = Fi(i)));
    var s = n || uf ? document.importNode(i, !0) : i.cloneNode(!0);
    if (r) {
      var f = Fi(s),
        l = s.lastChild;
      X0(f, l);
    } else X0(s, s);
    return s;
  };
}
function ut(e, t) {
  e !== null && e.before(t);
}
function Tn(e, t) {
  var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = r), (e.nodeValue = r + ''));
}
function $c(e, t) {
  return zc(e, t);
}
const jt = new Map();
function zc(
  e,
  { target: t, anchor: r, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  gc();
  var f = new Set(),
    l = (u) => {
      for (var h = 0; h < u.length; h++) {
        var d = u[h];
        if (!f.has(d)) {
          f.add(d);
          var p = Hc(d);
          t.addEventListener(d, An, { passive: p });
          var x = jt.get(d);
          x === void 0
            ? (document.addEventListener(d, An, { passive: p }), jt.set(d, 1))
            : jt.set(d, x + 1);
        }
      }
    };
  l(Za(Gc)), j0.add(l);
  var o = void 0,
    c = Ac(() => {
      var u = r ?? t.appendChild(df());
      return (
        Mn(() => {
          if (a) {
            t0({});
            var h = Ie;
            h.c = a;
          }
          i && (n.$$events = i), (o = e(u, n) || {}), a && n0();
        }),
        () => {
          var p;
          for (var h of f) {
            t.removeEventListener(h, An);
            var d = jt.get(h);
            --d === 0
              ? (document.removeEventListener(h, An), jt.delete(h))
              : jt.set(h, d);
          }
          j0.delete(l),
            u !== r && ((p = u.parentNode) == null || p.removeChild(u));
        }
      );
    });
  return Kc.set(o, c), o;
}
let Kc = new WeakMap();
function fi(e, t, [r, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = xr,
    l = r > 0 ? r0 : 0,
    o = !1;
  const c = (h, d = !0) => {
      (o = !0), u(d, h);
    },
    u = (h, d) => {
      f !== (f = h) &&
        (f
          ? (a ? Oi(a) : d && (a = Mn(() => d(i))),
            s &&
              Ci(s, () => {
                s = null;
              }))
          : (s ? Oi(s) : d && (s = Mn(() => d(i, [r + 1, n]))),
            a &&
              Ci(a, () => {
                a = null;
              })));
    };
  s0(() => {
    (o = !1), t(c), o || u(null, null);
  }, l);
}
function Yc(e, t, r, n) {
  for (var i = [], a = t.length, s = 0; s < a; s++) f0(t[s].e, i, !0);
  var f = a > 0 && i.length === 0 && r !== null;
  if (f) {
    var l = r.parentNode;
    Tc(l), l.append(r), n.clear(), ht(e, t[0].prev, t[a - 1].next);
  }
  Tf(i, () => {
    for (var o = 0; o < a; o++) {
      var c = t[o];
      f || (n.delete(c.k), ht(e, c.prev, c.next)), mt(c.e, !f);
    }
  });
}
function qc(e, t, r, n, i, a = null) {
  var s = e,
    f = { flags: t, items: new Map(), first: null };
  {
    var l = e;
    s = l.appendChild(df());
  }
  var o = null,
    c = !1,
    u = af(() => {
      var h = r();
      return Ja(h) ? h : h == null ? [] : Za(h);
    });
  s0(() => {
    var h = we(u),
      d = h.length;
    (c && d === 0) ||
      ((c = d === 0),
      Jc(h, f, s, i, t, n, r),
      a !== null &&
        (d === 0
          ? o
            ? Oi(o)
            : (o = Mn(() => a(s)))
          : o !== null &&
            Ci(o, () => {
              o = null;
            })),
      we(u));
  });
}
function Jc(e, t, r, n, i, a, s) {
  var f = e.length,
    l = t.items,
    o = t.first,
    c = o,
    u,
    h = null,
    d = [],
    p = [],
    x,
    m,
    S,
    C;
  for (C = 0; C < f; C += 1) {
    if (((x = e[C]), (m = a(x, C)), (S = l.get(m)), S === void 0)) {
      var F = c ? c.e.nodes_start : r;
      (h = Qc(F, t, h, h === null ? t.first : h.next, x, m, C, n, i, s)),
        l.set(m, h),
        (d = []),
        (p = []),
        (c = h.next);
      continue;
    }
    if ((Zc(S, x, C), (S.e.f & rt) !== 0 && Oi(S.e), S !== c)) {
      if (u !== void 0 && u.has(S)) {
        if (d.length < p.length) {
          var k = p[0],
            V;
          h = k.prev;
          var q = d[0],
            O = d[d.length - 1];
          for (V = 0; V < d.length; V += 1) $0(d[V], k, r);
          for (V = 0; V < p.length; V += 1) u.delete(p[V]);
          ht(t, q.prev, O.next),
            ht(t, h, q),
            ht(t, O, k),
            (c = k),
            (h = O),
            (C -= 1),
            (d = []),
            (p = []);
        } else
          u.delete(S),
            $0(S, c, r),
            ht(t, S.prev, S.next),
            ht(t, S, h === null ? t.first : h.next),
            ht(t, h, S),
            (h = S);
        continue;
      }
      for (d = [], p = []; c !== null && c.k !== m; )
        (c.e.f & rt) === 0 && (u ?? (u = new Set())).add(c),
          p.push(c),
          (c = c.next);
      if (c === null) continue;
      S = c;
    }
    d.push(S), (h = S), (c = S.next);
  }
  if (c !== null || u !== void 0) {
    for (var H = u === void 0 ? [] : Za(u); c !== null; )
      (c.e.f & rt) === 0 && H.push(c), (c = c.next);
    var I = H.length;
    if (I > 0) {
      var G = f === 0 ? r : null;
      Yc(t, H, G, l);
    }
  }
  (ye.first = t.first && t.first.e), (ye.last = h && h.e);
}
function Zc(e, t, r, n) {
  lf(e.v, t), (e.i = r);
}
function Qc(e, t, r, n, i, a, s, f, l, o) {
  var c = (l & cc) !== 0,
    u = (l & hc) === 0,
    h = c ? (u ? On(i) : Bn(i)) : i,
    d = (l & uc) === 0 ? s : Bn(s),
    p = { i: d, v: h, k: a, a: null, e: null, prev: r, next: n };
  try {
    return (
      (p.e = Mn(() => f(e, h, d, o), _c)),
      (p.e.prev = r && r.e),
      (p.e.next = n && n.e),
      r === null ? (t.first = p) : ((r.next = p), (r.e.next = p.e)),
      n !== null && ((n.prev = p), (n.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function $0(e, t, r) {
  for (
    var n = e.next ? e.next.e.nodes_start : r,
      i = t ? t.e.nodes_start : r,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = Ji(a);
    i.before(a), (a = s);
  }
}
function ht(e, t, r) {
  t === null ? (e.first = r) : ((t.next = r), (t.e.next = r && r.e)),
    r !== null && ((r.prev = t), (r.e.prev = t && t.e));
}
const z0 = [
  ...` 	
\r\f \v\uFEFF`,
];
function eu(e, t, r) {
  var n = '' + e;
  if (r) {
    for (var i in r)
      if (r[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || z0.includes(n[s - 1])) &&
          (f === n.length || z0.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function Xt(e, t, r, n, i, a) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var f = eu(r, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = r);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
const ru = Symbol('is custom element'),
  tu = Symbol('is html');
function nu(e, t, r, n) {
  var i = iu(e);
  i[t] !== (i[t] = r) &&
    (r == null
      ? e.removeAttribute(t)
      : typeof r != 'string' && au(e).includes(t)
        ? (e[t] = r)
        : e.setAttribute(t, r));
}
function iu(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [ru]: e.nodeName.includes('-'),
      [tu]: e.namespaceURI === pc,
    })
  );
}
var K0 = new Map();
function au(e) {
  var t = K0.get(e.nodeName);
  if (t) return t;
  K0.set(e.nodeName, (t = []));
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = Zs(n);
    for (var a in r) r[a].set && t.push(a);
    n = Qa(n);
  }
  return t;
}
function oi(e, t, r = t) {
  var n = zn();
  Vc(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = wa(e) ? Sa(a) : a), r(a), n && a !== (a = t()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    ea(t) == null && e.value && r(wa(e) ? Sa(e.value) : e.value),
    mf(() => {
      var i = t();
      (wa(e) && i === Sa(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function wa(e) {
  var t = e.type;
  return t === 'number' || t === 'range';
}
function Sa(e) {
  return e === '' ? null : +e;
}
function su(e) {
  return function (...t) {
    var r = t[0];
    return r.preventDefault(), e == null ? void 0 : e.apply(this, t);
  };
}
function fu(e = !1) {
  const t = Ie,
    r = t.l.u;
  if (!r) return;
  let n = () => bc(t.s);
  if (e) {
    let i = 0,
      a = {};
    const s = i0(() => {
      let f = !1;
      const l = t.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => we(s);
  }
  r.b.length &&
    Sc(() => {
      Y0(t, n), Si(r.b);
    }),
    Ma(() => {
      const i = ea(() => r.m.map(Zl));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    r.a.length &&
      Ma(() => {
        Y0(t, n), Si(r.a);
      });
}
function Y0(e, t) {
  if (e.l.s) for (const r of e.l.s) we(r);
  t();
}
function l0(e, t, r) {
  if (e == null) return t(void 0), r && r(void 0), vt;
  const n = ea(() => e.subscribe(t, r));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const $t = [];
function ou(e, t) {
  return { subscribe: Zt(e, t).subscribe };
}
function Zt(e, t = vt) {
  let r = null;
  const n = new Set();
  function i(f) {
    if (tf(e, f) && ((e = f), r)) {
      const l = !$t.length;
      for (const o of n) o[1](), $t.push(o, e);
      if (l) {
        for (let o = 0; o < $t.length; o += 2) $t[o][0]($t[o + 1]);
        $t.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = vt) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (r = t(i, a) || vt),
      f(e),
      () => {
        n.delete(o), n.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function lu(e, t, r) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = t.length < 2;
  return ou(r, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      u = vt;
    const h = () => {
        if (c) return;
        u();
        const p = t(n ? o[0] : o, s, f);
        a ? s(p) : (u = typeof p == 'function' ? p : vt);
      },
      d = i.map((p, x) =>
        l0(
          p,
          (m) => {
            (o[x] = m), (c &= ~(1 << x)), l && h();
          },
          () => {
            c |= 1 << x;
          },
        ),
      );
    return (
      (l = !0),
      h(),
      function () {
        Si(d), u(), (l = !1);
      }
    );
  });
}
function cu(e) {
  let t;
  return l0(e, (r) => (t = r))(), t;
}
let Ha = Symbol();
function zt(e, t, r) {
  const n =
    r[t] ?? (r[t] = { store: null, source: On(void 0), unsubscribe: vt });
  if (n.store !== e && !(Ha in r))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = vt);
    else {
      var i = !0;
      (n.unsubscribe = l0(e, (a) => {
        i ? (n.source.v = a) : rr(n.source, a);
      })),
        (i = !1);
    }
  return e && Ha in r ? cu(e) : we(n.source);
}
function uu(e, t) {
  return e.set(t), t;
}
function hu() {
  const e = {};
  function t() {
    a0(() => {
      for (var r in e) e[r].unsubscribe();
      Js(e, Ha, { enumerable: !1, value: !0 });
    });
  }
  return [e, t];
}
function Of(e) {
  Ie === null && vc(),
    $n && Ie.l !== null
      ? xu(Ie).m.push(e)
      : Ma(() => {
          const t = ea(e);
          if (typeof t == 'function') return t;
        });
}
function xu(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const du = '5';
var qs;
typeof window < 'u' &&
  (
    (qs = window.__svelte ?? (window.__svelte = {})).v ?? (qs.v = new Set())
  ).add(du);
lc();
function Rf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: pu } = Object.prototype,
  { getPrototypeOf: c0 } = Object,
  { iterator: ra, toStringTag: Nf } = Symbol,
  ta = ((e) => (t) => {
    const r = pu.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Wr = (e) => ((e = e.toLowerCase()), (t) => ta(t) === e),
  na = (e) => (t) => typeof t === e,
  { isArray: cn } = Array,
  bn = na('undefined');
function vu(e) {
  return (
    e !== null &&
    !bn(e) &&
    e.constructor !== null &&
    !bn(e.constructor) &&
    dr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Df = Wr('ArrayBuffer');
function mu(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Df(e.buffer)),
    t
  );
}
const _u = na('string'),
  dr = na('function'),
  kf = na('number'),
  ia = (e) => e !== null && typeof e == 'object',
  gu = (e) => e === !0 || e === !1,
  Ei = (e) => {
    if (ta(e) !== 'object') return !1;
    const t = c0(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Nf in e) &&
      !(ra in e)
    );
  },
  Eu = Wr('Date'),
  Tu = Wr('File'),
  wu = Wr('Blob'),
  Su = Wr('FileList'),
  Au = (e) => ia(e) && dr(e.pipe),
  yu = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (dr(e.append) &&
          ((t = ta(e)) === 'formdata' ||
            (t === 'object' &&
              dr(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Fu = Wr('URLSearchParams'),
  [Cu, Ou, Ru, Nu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Wr,
  ),
  Du = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Yn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), cn(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), t.call(null, e[f], f, e);
  }
}
function If(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    i;
  for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Ft =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Pf = (e) => !bn(e) && e !== Ft;
function Wa() {
  const { caseless: e } = (Pf(this) && this) || {},
    t = {},
    r = (n, i) => {
      const a = (e && If(t, i)) || i;
      Ei(t[a]) && Ei(n)
        ? (t[a] = Wa(t[a], n))
        : Ei(n)
          ? (t[a] = Wa({}, n))
          : cn(n)
            ? (t[a] = n.slice())
            : (t[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Yn(arguments[n], r);
  return t;
}
const ku = (e, t, r, { allOwnKeys: n } = {}) => (
    Yn(
      t,
      (i, a) => {
        r && dr(i) ? (e[a] = Rf(i, r)) : (e[a] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  Iu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Pu = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  Lu = (e, t, r, n) => {
    let i, a, s;
    const f = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, e, t)) && !f[s] && ((t[s] = e[s]), (f[s] = !0));
      e = r !== !1 && c0(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  Bu = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  Mu = (e) => {
    if (!e) return null;
    if (cn(e)) return e;
    let t = e.length;
    if (!kf(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  bu = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && c0(Uint8Array)),
  Uu = (e, t) => {
    const n = (e && e[ra]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      t.call(e, a[0], a[1]);
    }
  },
  Hu = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Wu = Wr('HTMLFormElement'),
  Vu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  q0 = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Gu = Wr('RegExp'),
  Lf = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    Yn(r, (i, a) => {
      let s;
      (s = t(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  ju = (e) => {
    Lf(e, (t, r) => {
      if (dr(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (dr(n)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  Xu = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((a) => {
          r[a] = !0;
        });
      };
    return cn(e) ? n(e) : n(String(e).split(t)), r;
  },
  $u = () => {},
  zu = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Ku(e) {
  return !!(e && dr(e.append) && e[Nf] === 'FormData' && e[ra]);
}
const Yu = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (ia(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            t[i] = n;
            const a = cn(n) ? [] : {};
            return (
              Yn(n, (s, f) => {
                const l = r(s, i + 1);
                !bn(l) && (a[f] = l);
              }),
              (t[i] = void 0),
              a
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  qu = Wr('AsyncFunction'),
  Ju = (e) => e && (ia(e) || dr(e)) && dr(e.then) && dr(e.catch),
  Bf = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            Ft.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Ft && a === r && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Ft.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    dr(Ft.postMessage),
  ),
  Zu =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Ft)
      : (typeof process < 'u' && process.nextTick) || Bf,
  Qu = (e) => e != null && dr(e[ra]),
  M = {
    isArray: cn,
    isArrayBuffer: Df,
    isBuffer: vu,
    isFormData: yu,
    isArrayBufferView: mu,
    isString: _u,
    isNumber: kf,
    isBoolean: gu,
    isObject: ia,
    isPlainObject: Ei,
    isReadableStream: Cu,
    isRequest: Ou,
    isResponse: Ru,
    isHeaders: Nu,
    isUndefined: bn,
    isDate: Eu,
    isFile: Tu,
    isBlob: wu,
    isRegExp: Gu,
    isFunction: dr,
    isStream: Au,
    isURLSearchParams: Fu,
    isTypedArray: bu,
    isFileList: Su,
    forEach: Yn,
    merge: Wa,
    extend: ku,
    trim: Du,
    stripBOM: Iu,
    inherits: Pu,
    toFlatObject: Lu,
    kindOf: ta,
    kindOfTest: Wr,
    endsWith: Bu,
    toArray: Mu,
    forEachEntry: Uu,
    matchAll: Hu,
    isHTMLForm: Wu,
    hasOwnProperty: q0,
    hasOwnProp: q0,
    reduceDescriptors: Lf,
    freezeMethods: ju,
    toObjectSet: Xu,
    toCamelCase: Vu,
    noop: $u,
    toFiniteNumber: zu,
    findKey: If,
    global: Ft,
    isContextDefined: Pf,
    isSpecCompliantForm: Ku,
    toJSONObject: Yu,
    isAsyncFn: qu,
    isThenable: Ju,
    setImmediate: Bf,
    asap: Zu,
    isIterable: Qu,
  };
function ce(e, t, r, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
M.inherits(ce, Error, {
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
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Mf = ce.prototype,
  bf = {};
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
].forEach((e) => {
  bf[e] = { value: e };
});
Object.defineProperties(ce, bf);
Object.defineProperty(Mf, 'isAxiosError', { value: !0 });
ce.from = (e, t, r, n, i, a) => {
  const s = Object.create(Mf);
  return (
    M.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    ce.call(s, e.message, t, r, n, i),
    (s.cause = e),
    (s.name = e.name),
    a && Object.assign(s, a),
    s
  );
};
const eh = null;
function Va(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Uf(e) {
  return M.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function J0(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, a) {
          return (i = Uf(i)), !r && a ? '[' + i + ']' : i;
        })
        .join(r ? '.' : '')
    : t;
}
function rh(e) {
  return M.isArray(e) && !e.some(Va);
}
const th = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function aa(e, t, r) {
  if (!M.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (r = M.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, m) {
        return !M.isUndefined(m[x]);
      },
    ));
  const n = r.metaTokens,
    i = r.visitor || c,
    a = r.dots,
    s = r.indexes,
    l = (r.Blob || (typeof Blob < 'u' && Blob)) && M.isSpecCompliantForm(t);
  if (!M.isFunction(i)) throw new TypeError('visitor must be a function');
  function o(p) {
    if (p === null) return '';
    if (M.isDate(p)) return p.toISOString();
    if (!l && M.isBlob(p))
      throw new ce('Blob is not supported. Use a Buffer instead.');
    return M.isArrayBuffer(p) || M.isTypedArray(p)
      ? l && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, x, m) {
    let S = p;
    if (p && !m && typeof p == 'object') {
      if (M.endsWith(x, '{}'))
        (x = n ? x : x.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (M.isArray(p) && rh(p)) ||
        ((M.isFileList(p) || M.endsWith(x, '[]')) && (S = M.toArray(p)))
      )
        return (
          (x = Uf(x)),
          S.forEach(function (F, k) {
            !(M.isUndefined(F) || F === null) &&
              t.append(
                s === !0 ? J0([x], k, a) : s === null ? x : x + '[]',
                o(F),
              );
          }),
          !1
        );
    }
    return Va(p) ? !0 : (t.append(J0(m, x, a), o(p)), !1);
  }
  const u = [],
    h = Object.assign(th, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: Va,
    });
  function d(p, x) {
    if (!M.isUndefined(p)) {
      if (u.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      u.push(p),
        M.forEach(p, function (S, C) {
          (!(M.isUndefined(S) || S === null) &&
            i.call(t, S, M.isString(C) ? C.trim() : C, x, h)) === !0 &&
            d(S, x ? x.concat(C) : [C]);
        }),
        u.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError('data must be an object');
  return d(e), t;
}
function Z0(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function u0(e, t) {
  (this._pairs = []), e && aa(e, this, t);
}
const Hf = u0.prototype;
Hf.append = function (t, r) {
  this._pairs.push([t, r]);
};
Hf.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, Z0);
      }
    : Z0;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + '=' + r(i[1]);
    }, '')
    .join('&');
};
function nh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Wf(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || nh;
  M.isFunction(r) && (r = { serialize: r });
  const i = r && r.serialize;
  let a;
  if (
    (i
      ? (a = i(t, r))
      : (a = M.isURLSearchParams(t) ? t.toString() : new u0(t, r).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class Q0 {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
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
    M.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const Vf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ih = typeof URLSearchParams < 'u' ? URLSearchParams : u0,
  ah = typeof FormData < 'u' ? FormData : null,
  sh = typeof Blob < 'u' ? Blob : null,
  fh = {
    isBrowser: !0,
    classes: { URLSearchParams: ih, FormData: ah, Blob: sh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  h0 = typeof window < 'u' && typeof document < 'u',
  Ga = (typeof navigator == 'object' && navigator) || void 0,
  oh =
    h0 &&
    (!Ga || ['ReactNative', 'NativeScript', 'NS'].indexOf(Ga.product) < 0),
  lh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ch = (h0 && window.location.href) || 'http://localhost',
  uh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: h0,
        hasStandardBrowserEnv: oh,
        hasStandardBrowserWebWorkerEnv: lh,
        navigator: Ga,
        origin: ch,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  tr = { ...uh, ...fh };
function hh(e, t) {
  return aa(
    e,
    new tr.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, i, a) {
          return tr.isNode && M.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function xh(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function dh(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++) (a = r[n]), (t[a] = e[a]);
  return t;
}
function Gf(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === '__proto__') return !0;
    const f = Number.isFinite(+s),
      l = a >= r.length;
    return (
      (s = !s && M.isArray(i) ? i.length : s),
      l
        ? (M.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !f)
        : ((!i[s] || !M.isObject(i[s])) && (i[s] = []),
          t(r, n, i[s], a) && M.isArray(i[s]) && (i[s] = dh(i[s])),
          !f)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return (
      M.forEachEntry(e, (n, i) => {
        t(xh(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function ph(e, t, r) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (r || JSON.stringify)(e);
}
const qn = {
  transitional: Vf,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = M.isObject(t);
      if ((a && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return i ? JSON.stringify(Gf(t)) : t;
      if (
        M.isArrayBuffer(t) ||
        M.isBuffer(t) ||
        M.isStream(t) ||
        M.isFile(t) ||
        M.isBlob(t) ||
        M.isReadableStream(t)
      )
        return t;
      if (M.isArrayBufferView(t)) return t.buffer;
      if (M.isURLSearchParams(t))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let f;
      if (a) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return hh(t, this.formSerializer).toString();
        if ((f = M.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return aa(
            f ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (r.setContentType('application/json', !1), ph(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || qn.transitional,
        n = r && r.forcedJSONParsing,
        i = this.responseType === 'json';
      if (M.isResponse(t) || M.isReadableStream(t)) return t;
      if (t && M.isString(t) && ((n && !this.responseType) || i)) {
        const s = !(r && r.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (f) {
          if (s)
            throw f.name === 'SyntaxError'
              ? ce.from(f, ce.ERR_BAD_RESPONSE, this, null, this.response)
              : f;
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
  env: { FormData: tr.classes.FormData, Blob: tr.classes.Blob },
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
M.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  qn.headers[e] = {};
});
const vh = M.toObjectSet([
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
  mh = (e) => {
    const t = {};
    let r, n, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (i = s.indexOf(':')),
              (r = s.substring(0, i).trim().toLowerCase()),
              (n = s.substring(i + 1).trim()),
              !(!r || (t[r] && vh[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n));
          }),
      t
    );
  },
  es = Symbol('internals');
function wn(e) {
  return e && String(e).trim().toLowerCase();
}
function Ti(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Ti) : String(e);
}
function _h(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const gh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Aa(e, t, r, n, i) {
  if (M.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!M.isString(t))) {
    if (M.isString(n)) return t.indexOf(n) !== -1;
    if (M.isRegExp(n)) return n.test(t);
  }
}
function Eh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Th(e, t) {
  const r = M.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (i, a, s) {
        return this[n].call(this, t, i, a, s);
      },
      configurable: !0,
    });
  });
}
let pr = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(f, l, o) {
      const c = wn(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const u = M.findKey(i, c);
      (!u || i[u] === void 0 || o === !0 || (o === void 0 && i[u] !== !1)) &&
        (i[u || l] = Ti(f));
    }
    const s = (f, l) => M.forEach(f, (o, c) => a(o, c, l));
    if (M.isPlainObject(t) || t instanceof this.constructor) s(t, r);
    else if (M.isString(t) && (t = t.trim()) && !gh(t)) s(mh(t), r);
    else if (M.isObject(t) && M.isIterable(t)) {
      let f = {},
        l,
        o;
      for (const c of t) {
        if (!M.isArray(c))
          throw TypeError('Object iterator must return a key-value pair');
        f[(o = c[0])] = (l = f[o])
          ? M.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(f, r);
    } else t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (((t = wn(t)), t)) {
      const n = M.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return _h(i);
        if (M.isFunction(r)) return r.call(this, i, n);
        if (M.isRegExp(r)) return r.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, r) {
    if (((t = wn(t)), t)) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Aa(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = wn(s)), s)) {
        const f = M.findKey(n, s);
        f && (!r || Aa(n, n[f], f, r)) && (delete n[f], (i = !0));
      }
    }
    return M.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Aa(this, this[a], a, t, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      M.forEach(this, (i, a) => {
        const s = M.findKey(n, a);
        if (s) {
          (r[s] = Ti(i)), delete r[a];
          return;
        }
        const f = t ? Eh(a) : String(a).trim();
        f !== a && delete r[a], (r[f] = Ti(i)), (n[f] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      M.forEach(this, (n, i) => {
        n != null && n !== !1 && (r[i] = t && M.isArray(n) ? n.join(', ') : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ': ' + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(t) {
    const n = (this[es] = this[es] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = wn(s);
      n[f] || (Th(i, s), (n[f] = !0));
    }
    return M.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
pr.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
M.reduceDescriptors(pr.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
M.freezeMethods(pr);
function ya(e, t) {
  const r = this || qn,
    n = t || r,
    i = pr.from(n.headers);
  let a = n.data;
  return (
    M.forEach(e, function (f) {
      a = f.call(r, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function jf(e) {
  return !!(e && e.__CANCEL__);
}
function un(e, t, r) {
  ce.call(this, e ?? 'canceled', ce.ERR_CANCELED, t, r),
    (this.name = 'CanceledError');
}
M.inherits(un, ce, { __CANCEL__: !0 });
function Xf(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new ce(
          'Request failed with status code ' + r.status,
          [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function wh(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function Sh(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let i = 0,
    a = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const o = Date.now(),
        c = n[a];
      s || (s = o), (r[i] = l), (n[i] = o);
      let u = a,
        h = 0;
      for (; u !== i; ) (h += r[u++]), (u = u % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), o - s < t)) return;
      const d = c && o - c;
      return d ? Math.round((h * 1e3) / d) : void 0;
    }
  );
}
function Ah(e, t) {
  let r = 0,
    n = 1e3 / t,
    i,
    a;
  const s = (o, c = Date.now()) => {
    (r = c), (i = null), a && (clearTimeout(a), (a = null)), e.apply(null, o);
  };
  return [
    (...o) => {
      const c = Date.now(),
        u = c - r;
      u >= n
        ? s(o, c)
        : ((i = o),
          a ||
            (a = setTimeout(() => {
              (a = null), s(i);
            }, n - u)));
    },
    () => i && s(i),
  ];
}
const Ii = (e, t, r = 3) => {
    let n = 0;
    const i = Sh(50, 250);
    return Ah((a) => {
      const s = a.loaded,
        f = a.lengthComputable ? a.total : void 0,
        l = s - n,
        o = i(l),
        c = s <= f;
      n = s;
      const u = {
        loaded: s,
        total: f,
        progress: f ? s / f : void 0,
        bytes: l,
        rate: o || void 0,
        estimated: o && f && c ? (f - s) / o : void 0,
        event: a,
        lengthComputable: f != null,
        [t ? 'download' : 'upload']: !0,
      };
      e(u);
    }, r);
  },
  rs = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  ts =
    (e) =>
    (...t) =>
      M.asap(() => e(...t)),
  yh = tr.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, tr.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(tr.origin),
        tr.navigator && /(msie|trident)/i.test(tr.navigator.userAgent),
      )
    : () => !0,
  Fh = tr.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, i, a) {
          const s = [e + '=' + encodeURIComponent(t)];
          M.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
            M.isString(n) && s.push('path=' + n),
            M.isString(i) && s.push('domain=' + i),
            a === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Ch(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Oh(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function $f(e, t, r) {
  let n = !Ch(t);
  return e && (n || r == !1) ? Oh(e, t) : t;
}
const ns = (e) => (e instanceof pr ? { ...e } : e);
function Nt(e, t) {
  t = t || {};
  const r = {};
  function n(o, c, u, h) {
    return M.isPlainObject(o) && M.isPlainObject(c)
      ? M.merge.call({ caseless: h }, o, c)
      : M.isPlainObject(c)
        ? M.merge({}, c)
        : M.isArray(c)
          ? c.slice()
          : c;
  }
  function i(o, c, u, h) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(o)) return n(void 0, o, u, h);
    } else return n(o, c, u, h);
  }
  function a(o, c) {
    if (!M.isUndefined(c)) return n(void 0, c);
  }
  function s(o, c) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(o)) return n(void 0, o);
    } else return n(void 0, c);
  }
  function f(o, c, u) {
    if (u in t) return n(o, c);
    if (u in e) return n(void 0, o);
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
    validateStatus: f,
    headers: (o, c, u) => i(ns(o), ns(c), u, !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const u = l[c] || i,
        h = u(e[c], t[c], c);
      (M.isUndefined(h) && u !== f) || (r[c] = h);
    }),
    r
  );
}
const zf = (e) => {
    const t = Nt({}, e);
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = t;
    (t.headers = s = pr.from(s)),
      (t.url = Wf(
        $f(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      f &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (f.username || '') +
                ':' +
                (f.password ? unescape(encodeURIComponent(f.password)) : ''),
            ),
        );
    let l;
    if (M.isFormData(r)) {
      if (tr.hasStandardBrowserEnv || tr.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [o, ...c] = l
          ? l
              .split(';')
              .map((u) => u.trim())
              .filter(Boolean)
          : [];
        s.setContentType([o || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      tr.hasStandardBrowserEnv &&
      (n && M.isFunction(n) && (n = n(t)), n || (n !== !1 && yh(t.url)))
    ) {
      const o = i && a && Fh.read(a);
      o && s.set(i, o);
    }
    return t;
  },
  Rh = typeof XMLHttpRequest < 'u',
  Nh =
    Rh &&
    function (e) {
      return new Promise(function (r, n) {
        const i = zf(e);
        let a = i.data;
        const s = pr.from(i.headers).normalize();
        let { responseType: f, onUploadProgress: l, onDownloadProgress: o } = i,
          c,
          u,
          h,
          d,
          p;
        function x() {
          d && d(),
            p && p(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener('abort', c);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function S() {
          if (!m) return;
          const F = pr.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            V = {
              data:
                !f || f === 'text' || f === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: F,
              config: e,
              request: m,
            };
          Xf(
            function (O) {
              r(O), x();
            },
            function (O) {
              n(O), x();
            },
            V,
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = S)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(S);
            }),
          (m.onabort = function () {
            m &&
              (n(new ce('Request aborted', ce.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new ce('Network Error', ce.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let k = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const V = i.transitional || Vf;
            i.timeoutErrorMessage && (k = i.timeoutErrorMessage),
              n(
                new ce(
                  k,
                  V.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            M.forEach(s.toJSON(), function (k, V) {
              m.setRequestHeader(V, k);
            }),
          M.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([h, p] = Ii(o, !0)), m.addEventListener('progress', h)),
          l &&
            m.upload &&
            (([u, d] = Ii(l)),
            m.upload.addEventListener('progress', u),
            m.upload.addEventListener('loadend', d)),
          (i.cancelToken || i.signal) &&
            ((c = (F) => {
              m &&
                (n(!F || F.type ? new un(null, e, m) : F),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const C = wh(i.url);
        if (C && tr.protocols.indexOf(C) === -1) {
          n(new ce('Unsupported protocol ' + C + ':', ce.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  Dh = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof ce ? c : new un(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), a(new ce(`timeout ${t} of ms exceeded`, ce.ETIMEDOUT));
        }, t);
      const f = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((o) => {
            o.unsubscribe
              ? o.unsubscribe(a)
              : o.removeEventListener('abort', a);
          }),
          (e = null));
      };
      e.forEach((o) => o.addEventListener('abort', a));
      const { signal: l } = n;
      return (l.unsubscribe = () => M.asap(f)), l;
    }
  },
  kh = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  Ih = async function* (e, t) {
    for await (const r of Ph(e)) yield* kh(r, t);
  },
  Ph = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: r, value: n } = await t.read();
        if (r) break;
        yield n;
      }
    } finally {
      await t.cancel();
    }
  },
  is = (e, t, r, n) => {
    const i = Ih(e, t);
    let a = 0,
      s,
      f = (l) => {
        s || ((s = !0), n && n(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: o, value: c } = await i.next();
            if (o) {
              f(), l.close();
              return;
            }
            let u = c.byteLength;
            if (r) {
              let h = (a += u);
              r(h);
            }
            l.enqueue(new Uint8Array(c));
          } catch (o) {
            throw (f(o), o);
          }
        },
        cancel(l) {
          return f(l), i.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  sa =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Kf = sa && typeof ReadableStream == 'function',
  Lh =
    sa &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Yf = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Bh =
    Kf &&
    Yf(() => {
      let e = !1;
      const t = new Request(tr.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  as = 64 * 1024,
  ja = Kf && Yf(() => M.isReadableStream(new Response('').body)),
  Pi = { stream: ja && ((e) => e.body) };
sa &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Pi[t] &&
        (Pi[t] = M.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new ce(
                `Response type '${t}' is not supported`,
                ce.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const Mh = async (e) => {
    if (e == null) return 0;
    if (M.isBlob(e)) return e.size;
    if (M.isSpecCompliantForm(e))
      return (
        await new Request(tr.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (M.isArrayBufferView(e) || M.isArrayBuffer(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ''), M.isString(e)))
      return (await Lh(e)).byteLength;
  },
  bh = async (e, t) => {
    const r = M.toFiniteNumber(e.getContentLength());
    return r ?? Mh(t);
  },
  Uh =
    sa &&
    (async (e) => {
      let {
        url: t,
        method: r,
        data: n,
        signal: i,
        cancelToken: a,
        timeout: s,
        onDownloadProgress: f,
        onUploadProgress: l,
        responseType: o,
        headers: c,
        withCredentials: u = 'same-origin',
        fetchOptions: h,
      } = zf(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let d = Dh([i, a && a.toAbortSignal()], s),
        p;
      const x =
        d &&
        d.unsubscribe &&
        (() => {
          d.unsubscribe();
        });
      let m;
      try {
        if (
          l &&
          Bh &&
          r !== 'get' &&
          r !== 'head' &&
          (m = await bh(c, n)) !== 0
        ) {
          let V = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
            q;
          if (
            (M.isFormData(n) &&
              (q = V.headers.get('content-type')) &&
              c.setContentType(q),
            V.body)
          ) {
            const [O, H] = rs(m, Ii(ts(l)));
            n = is(V.body, as, O, H);
          }
        }
        M.isString(u) || (u = u ? 'include' : 'omit');
        const S = 'credentials' in Request.prototype;
        p = new Request(t, {
          ...h,
          signal: d,
          method: r.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: S ? u : void 0,
        });
        let C = await fetch(p);
        const F = ja && (o === 'stream' || o === 'response');
        if (ja && (f || (F && x))) {
          const V = {};
          ['status', 'statusText', 'headers'].forEach((I) => {
            V[I] = C[I];
          });
          const q = M.toFiniteNumber(C.headers.get('content-length')),
            [O, H] = (f && rs(q, Ii(ts(f), !0))) || [];
          C = new Response(
            is(C.body, as, O, () => {
              H && H(), x && x();
            }),
            V,
          );
        }
        o = o || 'text';
        let k = await Pi[M.findKey(Pi, o) || 'text'](C, e);
        return (
          !F && x && x(),
          await new Promise((V, q) => {
            Xf(V, q, {
              data: k,
              headers: pr.from(C.headers),
              status: C.status,
              statusText: C.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (S) {
        throw (
          (x && x(),
          S && S.name === 'TypeError' && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new ce('Network Error', ce.ERR_NETWORK, e, p), {
                cause: S.cause || S,
              })
            : ce.from(S, S && S.code, e, p))
        );
      }
    }),
  Xa = { http: eh, xhr: Nh, fetch: Uh };
M.forEach(Xa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const ss = (e) => `- ${e}`,
  Hh = (e) => M.isFunction(e) || e === null || e === !1,
  qf = {
    getAdapter: (e) => {
      e = M.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, n;
      const i = {};
      for (let a = 0; a < t; a++) {
        r = e[a];
        let s;
        if (
          ((n = r),
          !Hh(r) && ((n = Xa[(s = String(r)).toLowerCase()]), n === void 0))
        )
          throw new ce(`Unknown adapter '${s}'`);
        if (n) break;
        i[s || '#' + a] = n;
      }
      if (!n) {
        const a = Object.entries(i).map(
          ([f, l]) =>
            `adapter ${f} ` +
            (l === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let s = t
          ? a.length > 1
            ? `since :
` +
              a.map(ss).join(`
`)
            : ' ' + ss(a[0])
          : 'as no adapter specified';
        throw new ce(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: Xa,
  };
function Fa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new un(null, e);
}
function fs(e) {
  return (
    Fa(e),
    (e.headers = pr.from(e.headers)),
    (e.data = ya.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    qf
      .getAdapter(e.adapter || qn.adapter)(e)
      .then(
        function (n) {
          return (
            Fa(e),
            (n.data = ya.call(e, e.transformResponse, n)),
            (n.headers = pr.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            jf(n) ||
              (Fa(e),
              n &&
                n.response &&
                ((n.response.data = ya.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = pr.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Jf = '1.9.0',
  fa = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    fa[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const os = {};
fa.transitional = function (t, r, n) {
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
  return (a, s, f) => {
    if (t === !1)
      throw new ce(
        i(s, ' has been removed' + (r ? ' in ' + r : '')),
        ce.ERR_DEPRECATED,
      );
    return (
      r &&
        !os[s] &&
        ((os[s] = !0),
        console.warn(
          i(
            s,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(a, s, f) : !0
    );
  };
};
fa.spelling = function (t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Wh(e, t, r) {
  if (typeof e != 'object')
    throw new ce('options must be an object', ce.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = t[a];
    if (s) {
      const f = e[a],
        l = f === void 0 || s(f, a, e);
      if (l !== !0)
        throw new ce('option ' + a + ' must be ' + l, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new ce('Unknown option ' + a, ce.ERR_BAD_OPTION);
  }
}
const wi = { assertOptions: Wh, validators: fa },
  Gr = wi.validators;
let Ot = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new Q0(), response: new Q0() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
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
  _request(t, r) {
    typeof t == 'string' ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Nt(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 &&
      wi.assertOptions(
        n,
        {
          silentJSONParsing: Gr.transitional(Gr.boolean),
          forcedJSONParsing: Gr.transitional(Gr.boolean),
          clarifyTimeoutError: Gr.transitional(Gr.boolean),
        },
        !1,
      ),
      i != null &&
        (M.isFunction(i)
          ? (r.paramsSerializer = { serialize: i })
          : wi.assertOptions(
              i,
              { encode: Gr.function, serialize: Gr.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      wi.assertOptions(
        r,
        {
          baseUrl: Gr.spelling('baseURL'),
          withXsrfToken: Gr.spelling('withXSRFToken'),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase());
    let s = a && M.merge(a.common, a[r.method]);
    a &&
      M.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete a[p];
        },
      ),
      (r.headers = pr.concat(s, a));
    const f = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(r) === !1) ||
        ((l = l && x.synchronous), f.unshift(x.fulfilled, x.rejected));
    });
    const o = [];
    this.interceptors.response.forEach(function (x) {
      o.push(x.fulfilled, x.rejected);
    });
    let c,
      u = 0,
      h;
    if (!l) {
      const p = [fs.bind(this), void 0];
      for (
        p.unshift.apply(p, f),
          p.push.apply(p, o),
          h = p.length,
          c = Promise.resolve(r);
        u < h;

      )
        c = c.then(p[u++], p[u++]);
      return c;
    }
    h = f.length;
    let d = r;
    for (u = 0; u < h; ) {
      const p = f[u++],
        x = f[u++];
      try {
        d = p(d);
      } catch (m) {
        x.call(this, m);
        break;
      }
    }
    try {
      c = fs.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (u = 0, h = o.length; u < h; ) c = c.then(o[u++], o[u++]);
    return c;
  }
  getUri(t) {
    t = Nt(this.defaults, t);
    const r = $f(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Wf(r, t.params, t.paramsSerializer);
  }
};
M.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Ot.prototype[t] = function (r, n) {
    return this.request(
      Nt(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
M.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (a, s, f) {
      return this.request(
        Nt(f || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (Ot.prototype[t] = r()), (Ot.prototype[t + 'Form'] = r(!0));
});
let Vh = class Zf {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let r;
    this.promise = new Promise(function (a) {
      r = a;
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
        const s = new Promise((f) => {
          n.subscribe(f), (a = f);
        }).then(i);
        return (
          (s.cancel = function () {
            n.unsubscribe(a);
          }),
          s
        );
      }),
      t(function (a, s, f) {
        n.reason || ((n.reason = new un(a, s, f)), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (n) => {
        t.abort(n);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Zf(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function Gh(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function jh(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const $a = {
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
Object.entries($a).forEach(([e, t]) => {
  $a[t] = e;
});
function Qf(e) {
  const t = new Ot(e),
    r = Rf(Ot.prototype.request, t);
  return (
    M.extend(r, Ot.prototype, t, { allOwnKeys: !0 }),
    M.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return Qf(Nt(e, i));
    }),
    r
  );
}
const Ne = Qf(qn);
Ne.Axios = Ot;
Ne.CanceledError = un;
Ne.CancelToken = Vh;
Ne.isCancel = jf;
Ne.VERSION = Jf;
Ne.toFormData = aa;
Ne.AxiosError = ce;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (t) {
  return Promise.all(t);
};
Ne.spread = Gh;
Ne.isAxiosError = jh;
Ne.mergeConfig = Nt;
Ne.AxiosHeaders = pr;
Ne.formToJSON = (e) => Gf(M.isHTMLForm(e) ? new FormData(e) : e);
Ne.getAdapter = qf.getAdapter;
Ne.HttpStatusCode = $a;
Ne.default = Ne;
const {
  Axios: $_,
  AxiosError: z_,
  CanceledError: K_,
  isCancel: Y_,
  CancelToken: q_,
  VERSION: J_,
  all: Z_,
  Cancel: Q_,
  isAxiosError: eg,
  spread: rg,
  toFormData: tg,
  AxiosHeaders: ng,
  HttpStatusCode: ig,
  formToJSON: ag,
  getAdapter: sg,
  mergeConfig: fg,
} = Ne;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Li = {};
Li.version = '0.18.5';
var eo = 1252,
  Xh = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  ro = function (e) {
    Xh.indexOf(e) != -1 && (eo = e);
  };
function $h() {
  ro(1252);
}
var Un = function (e) {
  ro(e);
};
function zh() {
  Un(1200), $h();
}
var li = function (t) {
    return String.fromCharCode(t);
  },
  ls = function (t) {
    return String.fromCharCode(t);
  },
  cs,
  dt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function Hn(e) {
  for (
    var t = '', r = 0, n = 0, i = 0, a = 0, s = 0, f = 0, l = 0, o = 0;
    o < e.length;

  )
    (r = e.charCodeAt(o++)),
      (a = r >> 2),
      (n = e.charCodeAt(o++)),
      (s = ((r & 3) << 4) | (n >> 4)),
      (i = e.charCodeAt(o++)),
      (f = ((n & 15) << 2) | (i >> 6)),
      (l = i & 63),
      isNaN(n) ? (f = l = 64) : isNaN(i) && (l = 64),
      (t += dt.charAt(a) + dt.charAt(s) + dt.charAt(f) + dt.charAt(l));
  return t;
}
function at(e) {
  var t = '',
    r = 0,
    n = 0,
    i = 0,
    a = 0,
    s = 0,
    f = 0,
    l = 0;
  e = e.replace(/[^\w\+\/\=]/g, '');
  for (var o = 0; o < e.length; )
    (a = dt.indexOf(e.charAt(o++))),
      (s = dt.indexOf(e.charAt(o++))),
      (r = (a << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (f = dt.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (t += String.fromCharCode(n)),
      (l = dt.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (t += String.fromCharCode(i));
  return t;
}
var ve = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  ot = (function () {
    if (typeof Buffer < 'u') {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from('foo', 'utf8');
        } catch {
          e = !0;
        }
      return e
        ? function (t, r) {
            return r ? new Buffer(t, r) : new Buffer(t);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function Dt(e) {
  return ve
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function us(e) {
  return ve
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var Br = function (t) {
  return ve
    ? ot(t, 'binary')
    : t.split('').map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function oa(e) {
  if (typeof ArrayBuffer > 'u') return Br(e);
  for (
    var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
    n != e.length;
    ++n
  )
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function Jn(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join('');
}
function Kh(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(e);
}
var qe = ve
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : ot(t);
        }),
      );
    }
  : function (e) {
      if (typeof Uint8Array < 'u') {
        var t = 0,
          r = 0;
        for (t = 0; t < e.length; ++t) r += e[t].length;
        var n = new Uint8Array(r),
          i = 0;
        for (t = 0, r = 0; t < e.length; r += i, ++t)
          if (((i = e[t].length), e[t] instanceof Uint8Array)) n.set(e[t], r);
          else {
            if (typeof e[t] == 'string') throw 'wtf';
            n.set(new Uint8Array(e[t]), r);
          }
        return n;
      }
      return [].concat.apply(
        [],
        e.map(function (a) {
          return Array.isArray(a) ? a : [].slice.call(a);
        }),
      );
    };
function Yh(e) {
  for (
    var t = [], r = 0, n = e.length + 250, i = Dt(e.length + 255), a = 0;
    a < e.length;
    ++a
  ) {
    var s = e.charCodeAt(a);
    if (s < 128) i[r++] = s;
    else if (s < 2048)
      (i[r++] = 192 | ((s >> 6) & 31)), (i[r++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++a) & 1023;
      (i[r++] = 240 | ((s >> 8) & 7)),
        (i[r++] = 128 | ((s >> 2) & 63)),
        (i[r++] = 128 | ((f >> 6) & 15) | ((s & 3) << 4)),
        (i[r++] = 128 | (f & 63));
    } else
      (i[r++] = 224 | ((s >> 12) & 15)),
        (i[r++] = 128 | ((s >> 6) & 63)),
        (i[r++] = 128 | (s & 63));
    r > n && (t.push(i.slice(0, r)), (r = 0), (i = Dt(65535)), (n = 65530));
  }
  return t.push(i.slice(0, r)), qe(t);
}
var Rn = /\u0000/g,
  ci = /[\u0001-\u0006]/g;
function rn(e) {
  for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function Mr(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Le('0', t - r.length) + r;
}
function x0(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Le(' ', t - r.length) + r;
}
function Bi(e, t) {
  var r = '' + e;
  return r.length >= t ? r : r + Le(' ', t - r.length);
}
function qh(e, t) {
  var r = '' + Math.round(e);
  return r.length >= t ? r : Le('0', t - r.length) + r;
}
function Jh(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Le('0', t - r.length) + r;
}
var hs = Math.pow(2, 32);
function Kt(e, t) {
  if (e > hs || e < -hs) return qh(e, t);
  var r = Math.round(e);
  return Jh(r, t);
}
function Mi(e, t) {
  return (
    (t = t || 0),
    e.length >= 7 + t &&
      (e.charCodeAt(t) | 32) === 103 &&
      (e.charCodeAt(t + 1) | 32) === 101 &&
      (e.charCodeAt(t + 2) | 32) === 110 &&
      (e.charCodeAt(t + 3) | 32) === 101 &&
      (e.charCodeAt(t + 4) | 32) === 114 &&
      (e.charCodeAt(t + 5) | 32) === 97 &&
      (e.charCodeAt(t + 6) | 32) === 108
  );
}
var xs = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Ca = [
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
function Zh(e) {
  return (
    e || (e = {}),
    (e[0] = 'General'),
    (e[1] = '0'),
    (e[2] = '0.00'),
    (e[3] = '#,##0'),
    (e[4] = '#,##0.00'),
    (e[9] = '0%'),
    (e[10] = '0.00%'),
    (e[11] = '0.00E+00'),
    (e[12] = '# ?/?'),
    (e[13] = '# ??/??'),
    (e[14] = 'm/d/yy'),
    (e[15] = 'd-mmm-yy'),
    (e[16] = 'd-mmm'),
    (e[17] = 'mmm-yy'),
    (e[18] = 'h:mm AM/PM'),
    (e[19] = 'h:mm:ss AM/PM'),
    (e[20] = 'h:mm'),
    (e[21] = 'h:mm:ss'),
    (e[22] = 'm/d/yy h:mm'),
    (e[37] = '#,##0 ;(#,##0)'),
    (e[38] = '#,##0 ;[Red](#,##0)'),
    (e[39] = '#,##0.00;(#,##0.00)'),
    (e[40] = '#,##0.00;[Red](#,##0.00)'),
    (e[45] = 'mm:ss'),
    (e[46] = '[h]:mm:ss'),
    (e[47] = 'mmss.0'),
    (e[48] = '##0.0E+0'),
    (e[49] = '@'),
    (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    e
  );
}
var Be = {
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
  ds = {
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
  Qh = {
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
function bi(e, t, r) {
  for (
    var n = e < 0 ? -1 : 1,
      i = e * n,
      a = 0,
      s = 1,
      f = 0,
      l = 1,
      o = 0,
      c = 0,
      u = Math.floor(i);
    o < t &&
    ((u = Math.floor(i)), (f = u * s + a), (c = u * o + l), !(i - u < 5e-8));

  )
    (i = 1 / (i - u)), (a = s), (s = f), (l = o), (o = c);
  if ((c > t && (o > t ? ((c = l), (f = a)) : ((c = o), (f = s))), !r))
    return [0, n * f, c];
  var h = Math.floor((n * f) / c);
  return [h, n * f - h * c, c];
}
function ui(e, t, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0,
    i = Math.floor(86400 * (e - n)),
    a = 0,
    s = [],
    f = {
      D: n,
      T: i,
      u: 86400 * (e - n) - i,
      y: 0,
      m: 0,
      d: 0,
      H: 0,
      M: 0,
      S: 0,
      q: 0,
    };
  if (
    (Math.abs(f.u) < 1e-6 && (f.u = 0),
    t && t.date1904 && (n += 1462),
    f.u > 0.9999 && ((f.u = 0), ++i == 86400 && ((f.T = i = 0), ++n, ++f.D)),
    n === 60)
  )
    (s = r ? [1317, 10, 29] : [1900, 2, 29]), (a = 3);
  else if (n === 0) (s = r ? [1317, 8, 29] : [1900, 1, 0]), (a = 6);
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1),
      (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (a = l.getDay()),
      n < 60 && (a = (a + 6) % 7),
      r && (a = s1(l, s));
  }
  return (
    (f.y = s[0]),
    (f.m = s[1]),
    (f.d = s[2]),
    (f.S = i % 60),
    (i = Math.floor(i / 60)),
    (f.M = i % 60),
    (i = Math.floor(i / 60)),
    (f.H = i),
    (f.q = a),
    f
  );
}
var to = new Date(1899, 11, 31, 0, 0, 0),
  e1 = to.getTime(),
  r1 = new Date(1900, 2, 1, 0, 0, 0);
function no(e, t) {
  var r = e.getTime();
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= r1 && (r += 24 * 60 * 60 * 1e3),
    (r - (e1 + (e.getTimezoneOffset() - to.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function d0(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function t1(e) {
  return e.indexOf('E') == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function n1(e) {
  var t = e < 0 ? 12 : 11,
    r = d0(e.toFixed(12));
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t)
    ? r
    : e.toExponential(5);
}
function i1(e) {
  var t = d0(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0'
    ? e.toPrecision(6)
    : t;
}
function a1(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
        ? (r = n1(e))
        : t === 10
          ? (r = e.toFixed(10).substr(0, 12))
          : (r = i1(e)),
    d0(t1(r.toUpperCase()))
  );
}
function za(e, t) {
  switch (typeof e) {
    case 'string':
      return e;
    case 'boolean':
      return e ? 'TRUE' : 'FALSE';
    case 'number':
      return (e | 0) === e ? e.toString(10) : a1(e);
    case 'undefined':
      return '';
    case 'object':
      if (e == null) return '';
      if (e instanceof Date) return gt(14, no(e, t && t.date1904), t);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function s1(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function f1(e, t, r, n) {
  var i = '',
    a = 0,
    s = 0,
    f = r.y,
    l,
    o = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          (l = f % 100), (o = 2);
          break;
        default:
          (l = f % 1e4), (o = 4);
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.m), (o = t.length);
          break;
        case 3:
          return Ca[r.m - 1][1];
        case 5:
          return Ca[r.m - 1][0];
        default:
          return Ca[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.d), (o = t.length);
          break;
        case 3:
          return xs[r.q][0];
        default:
          return xs[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          (l = 1 + ((r.H + 11) % 12)), (o = t.length);
          break;
        default:
          throw 'bad hour format: ' + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.H), (o = t.length);
          break;
        default:
          throw 'bad hour format: ' + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.M), (o = t.length);
          break;
        default:
          throw 'bad minute format: ' + t;
      }
      break;
    case 115:
      if (t != 's' && t != 'ss' && t != '.0' && t != '.00' && t != '.000')
        throw 'bad second format: ' + t;
      return r.u === 0 && (t == 's' || t == 'ss')
        ? Mr(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (r.S + r.u))),
          a >= 60 * s && (a = 0),
          t === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = Mr(a, 2 + n)),
              t === 'ss' ? i.substr(0, 2) : '.' + i.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case '[h]':
        case '[hh]':
          l = r.D * 24 + r.H;
          break;
        case '[m]':
        case '[mm]':
          l = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case '[s]':
        case '[ss]':
          l = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw 'bad abstime format: ' + t;
      }
      o = t.length === 3 ? 1 : 2;
      break;
    case 101:
      (l = f), (o = 1);
      break;
  }
  var c = o > 0 ? Mr(l, o) : '';
  return c;
}
function pt(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? ',' : '') + e.substr(r, t);
  return n;
}
var io = /%/g;
function o1(e, t, r) {
  var n = t.replace(io, ''),
    i = t.length - n.length;
  return tt(e, n, r * Math.pow(10, 2 * i)) + Le('%', i);
}
function l1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return tt(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function ao(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + ao(e, -t);
    var i = e.indexOf('.');
    i === -1 && (i = e.indexOf('E'));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (r = (t / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      r.indexOf('e') === -1)
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (
        r.indexOf('.') === -1
          ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + a))
          : (r += 'E+' + (s - a));
        r.substr(0, 2) === '0.';

      )
        (r = r.charAt(0) + r.substr(2, i) + '.' + r.substr(2 + i)),
          (r = r.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'));
      r = r.replace(/\+-/, '-');
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, l, o, c) {
      return l + o + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
    });
  } else r = t.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
    r.replace('e', 'E')
  );
}
var so = /# (\?+)( ?)\/( ?)(\d+)/;
function c1(e, t, r) {
  var n = parseInt(e[4], 10),
    i = Math.round(t * n),
    a = Math.floor(i / n),
    s = i - a * n,
    f = n;
  return (
    r +
    (a === 0 ? '' : '' + a) +
    ' ' +
    (s === 0
      ? Le(' ', e[1].length + 1 + e[4].length)
      : x0(s, e[1].length) + e[2] + '/' + e[3] + Mr(f, e[4].length))
  );
}
function u1(e, t, r) {
  return r + (t === 0 ? '' : '' + t) + Le(' ', e[1].length + 2 + e[4].length);
}
var fo = /^#*0*\.([0#]+)/,
  oo = /\).*[0#]/,
  lo = /\(###\) ###\\?-####/;
function or(e) {
  for (var t = '', r, n = 0; n != e.length; ++n)
    switch ((r = e.charCodeAt(n))) {
      case 35:
        break;
      case 63:
        t += ' ';
        break;
      case 48:
        t += '0';
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function ps(e, t) {
  var r = Math.pow(10, t);
  return '' + Math.round(e * r) / r;
}
function vs(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t);
  return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function h1(e, t) {
  return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length
    ? 1
    : 0;
}
function x1(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e);
}
function Rr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(oo)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? Rr('n', n, r) : '(' + Rr('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return l1(e, t, r);
  if (t.indexOf('%') !== -1) return o1(e, t, r);
  if (t.indexOf('E') !== -1) return ao(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + Rr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + Kt(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = Kt(r, 0)),
      i === '0' && (i = ''),
      i.length > t.length ? i : or(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(so))) return c1(a, l, o);
  if (t.match(/^#+0+$/)) return o + Kt(l, t.length - t.indexOf('0'));
  if ((a = t.match(fo)))
    return (
      (i = ps(r, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + or(a[1]))
        .replace(/\.$/, '.' + or(a[1]))
        .replace(/\.(\d*)$/, function (p, x) {
          return '.' + x + Le('0', or(a[1]).length - x.length);
        })),
      t.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((t = t.replace(/^#+([0.])/, '$1')), (a = t.match(/^(0*)\.(#*)$/))))
    return (
      o +
      ps(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + pt(Kt(l, 0));
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? '-' + Rr(e, t, -r)
      : pt('' + (Math.floor(r) + h1(r, a[1].length))) +
          '.' +
          Mr(vs(r, a[1].length), a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return Rr(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = rn(Rr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      rn(
        rn(t.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(lo))
    return (
      (i = Rr(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = bi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = tt('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Bi(f[2], s)),
      c.length < a[4].length &&
        (c = or(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = bi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? x0(f[1], s) + a[2] + '/' + a[3] + Bi(f[2], s)
          : Le(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = Kt(r, 0)),
      t.length <= i.length ? i : or(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var u = t.indexOf('.') - s,
      h = t.length - i.length - u;
    return or(t.substr(0, u) + i + t.substr(t.length - h));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = vs(r, a[1].length)),
      r < 0
        ? '-' + Rr(e, t, -r)
        : pt(x1(r))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (p) {
              return '00,' + (p.length < 3 ? Mr(0, 3 - p.length) : '') + p;
            }) +
          '.' +
          Mr(s, a[1].length)
    );
  switch (t) {
    case '###,##0.00':
      return Rr(e, '#,##0.00', r);
    case '###,###':
    case '##,###':
    case '#,###':
      var d = pt(Kt(l, 0));
      return d !== '0' ? o + d : '';
    case '###,###.00':
      return Rr(e, '###,##0.00', r).replace(/^0\./, '.');
    case '#,###.00':
      return Rr(e, '#,##0.00', r).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + t + '|');
}
function d1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return tt(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function p1(e, t, r) {
  var n = t.replace(io, ''),
    i = t.length - n.length;
  return tt(e, n, r * Math.pow(10, 2 * i)) + Le('%', i);
}
function co(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + co(e, -t);
    var i = e.indexOf('.');
    i === -1 && (i = e.indexOf('E'));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (r = (t / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      !r.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf('.') === -1
        ? (r = r.charAt(0) + '.' + r.substr(1) + 'E+' + (s - r.length + a))
        : (r += 'E+' + (s - a)),
        (r = r.replace(/\+-/, '-'));
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, l, o, c) {
      return l + o + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
    });
  } else r = t.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      r.match(/e[+-]\d$/) &&
      (r = r.substr(0, r.length - 1) + '0' + r.charAt(r.length - 1)),
    e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, 'e')),
    r.replace('e', 'E')
  );
}
function jr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(oo)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? jr('n', n, r) : '(' + jr('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return d1(e, t, r);
  if (t.indexOf('%') !== -1) return p1(e, t, r);
  if (t.indexOf('E') !== -1) return co(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + jr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + Mr(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = '' + r),
      r === 0 && (i = ''),
      i.length > t.length ? i : or(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(so))) return u1(a, l, o);
  if (t.match(/^#+0+$/)) return o + Mr(l, t.length - t.indexOf('0'));
  if ((a = t.match(fo)))
    return (
      (i = ('' + r)
        .replace(/^([^\.]+)$/, '$1.' + or(a[1]))
        .replace(/\.$/, '.' + or(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (p, x) {
        return '.' + x + Le('0', or(a[1]).length - x.length);
      })),
      t.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((t = t.replace(/^#+([0.])/, '$1')), (a = t.match(/^(0*)\.(#*)$/))))
    return (
      o +
      ('' + l)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + pt('' + l);
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? '-' + jr(e, t, -r) : pt('' + r) + '.' + Le('0', a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return jr(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = rn(jr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      rn(
        rn(t.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(lo))
    return (
      (i = jr(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = bi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = tt('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Bi(f[2], s)),
      c.length < a[4].length &&
        (c = or(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = bi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? x0(f[1], s) + a[2] + '/' + a[3] + Bi(f[2], s)
          : Le(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = '' + r),
      t.length <= i.length ? i : or(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var u = t.indexOf('.') - s,
      h = t.length - i.length - u;
    return or(t.substr(0, u) + i + t.substr(t.length - h));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? '-' + jr(e, t, -r)
      : pt('' + r)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (p) {
            return '00,' + (p.length < 3 ? Mr(0, 3 - p.length) : '') + p;
          }) +
          '.' +
          Mr(0, a[1].length);
  switch (t) {
    case '###,###':
    case '##,###':
    case '#,###':
      var d = pt('' + l);
      return d !== '0' ? o + d : '';
    default:
      if (t.match(/\.[0#?]*$/))
        return (
          jr(e, t.slice(0, t.lastIndexOf('.')), r) +
          or(t.slice(t.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + t + '|');
}
function tt(e, t, r) {
  return (r | 0) === r ? jr(e, t, r) : Rr(e, t, r);
}
function v1(e) {
  for (var t = [], r = !1, n = 0, i = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        (t[t.length] = e.substr(i, n - i)), (i = n + 1);
    }
  if (((t[t.length] = e.substr(i)), r === !0))
    throw new Error('Format |' + e + '| unterminated string ');
  return t;
}
var uo = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ho(e) {
  for (var t = 0, r = '', n = ''; t < e.length; )
    switch ((r = e.charAt(t))) {
      case 'G':
        Mi(e, t) && (t += 6), t++;
        break;
      case '"':
        for (; e.charCodeAt(++t) !== 34 && t < e.length; );
        ++t;
        break;
      case '\\':
        t += 2;
        break;
      case '_':
        t += 2;
        break;
      case '@':
        ++t;
        break;
      case 'B':
      case 'b':
        if (e.charAt(t + 1) === '1' || e.charAt(t + 1) === '2') return !0;
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
          e.substr(t, 3).toUpperCase() === 'A/P' ||
          e.substr(t, 5).toUpperCase() === 'AM/PM' ||
          e.substr(t, 5).toUpperCase() === '上午/下午'
        )
          return !0;
        ++t;
        break;
      case '[':
        for (n = r; e.charAt(t++) !== ']' && t < e.length; ) n += e.charAt(t);
        if (n.match(uo)) return !0;
        break;
      case '.':
      case '0':
      case '#':
        for (
          ;
          t < e.length &&
          ('0#?.,E+-%'.indexOf((r = e.charAt(++t))) > -1 ||
            (r == '\\' &&
              e.charAt(t + 1) == '-' &&
              '0#'.indexOf(e.charAt(t + 2)) > -1));

        );
        break;
      case '?':
        for (; e.charAt(++t) === r; );
        break;
      case '*':
        ++t, (e.charAt(t) == ' ' || e.charAt(t) == '*') && ++t;
        break;
      case '(':
      case ')':
        ++t;
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
        for (; t < e.length && '0123456789'.indexOf(e.charAt(++t)) > -1; );
        break;
      case ' ':
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function m1(e, t, r, n) {
  for (
    var i = [], a = '', s = 0, f = '', l = 't', o, c, u, h = 'H';
    s < e.length;

  )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!Mi(e, s))
          throw new Error('unrecognized character ' + f + ' in ' + e);
        (i[i.length] = { t: 'G', v: 'General' }), (s += 7);
        break;
      case '"':
        for (a = ''; (u = e.charCodeAt(++s)) !== 34 && s < e.length; )
          a += String.fromCharCode(u);
        (i[i.length] = { t: 't', v: a }), ++s;
        break;
      case '\\':
        var d = e.charAt(++s),
          p = d === '(' || d === ')' ? d : 't';
        (i[i.length] = { t: p, v: d }), ++s;
        break;
      case '_':
        (i[i.length] = { t: 't', v: ' ' }), (s += 2);
        break;
      case '@':
        (i[i.length] = { t: 'T', v: t }), ++s;
        break;
      case 'B':
      case 'b':
        if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
          if (o == null && ((o = ui(t, r, e.charAt(s + 1) === '2')), o == null))
            return '';
          (i[i.length] = { t: 'X', v: e.substr(s, 2) }), (l = f), (s += 2);
          break;
        }
      case 'M':
      case 'D':
      case 'Y':
      case 'H':
      case 'S':
      case 'E':
        f = f.toLowerCase();
      case 'm':
      case 'd':
      case 'y':
      case 'h':
      case 's':
      case 'e':
      case 'g':
        if (t < 0 || (o == null && ((o = ui(t, r)), o == null))) return '';
        for (a = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) a += f;
        f === 'm' && l.toLowerCase() === 'h' && (f = 'M'),
          f === 'h' && (f = h),
          (i[i.length] = { t: f, v: a }),
          (l = f);
        break;
      case 'A':
      case 'a':
      case '上':
        var x = { t: f, v: f };
        if (
          (o == null && (o = ui(t, r)),
          e.substr(s, 3).toUpperCase() === 'A/P'
            ? (o != null && (x.v = o.H >= 12 ? 'P' : 'A'),
              (x.t = 'T'),
              (h = 'h'),
              (s += 3))
            : e.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (o != null && (x.v = o.H >= 12 ? 'PM' : 'AM'),
                (x.t = 'T'),
                (s += 5),
                (h = 'h'))
              : e.substr(s, 5).toUpperCase() === '上午/下午'
                ? (o != null && (x.v = o.H >= 12 ? '下午' : '上午'),
                  (x.t = 'T'),
                  (s += 5),
                  (h = 'h'))
                : ((x.t = 't'), ++s),
          o == null && x.t === 'T')
        )
          return '';
        (i[i.length] = x), (l = f);
        break;
      case '[':
        for (a = f; e.charAt(s++) !== ']' && s < e.length; ) a += e.charAt(s);
        if (a.slice(-1) !== ']') throw 'unterminated "[" block: |' + a + '|';
        if (a.match(uo)) {
          if (o == null && ((o = ui(t, r)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            ho(e) || (i[i.length] = { t: 't', v: a }));
        break;
      case '.':
        if (o != null) {
          for (a = f; ++s < e.length && (f = e.charAt(s)) === '0'; ) a += f;
          i[i.length] = { t: 's', v: a };
          break;
        }
      case '0':
      case '#':
        for (
          a = f;
          ++s < e.length && '0#?.,E+-%'.indexOf((f = e.charAt(s))) > -1;

        )
          a += f;
        i[i.length] = { t: 'n', v: a };
        break;
      case '?':
        for (a = f; e.charAt(++s) === f; ) a += f;
        (i[i.length] = { t: f, v: a }), (l = f);
        break;
      case '*':
        ++s, (e.charAt(s) == ' ' || e.charAt(s) == '*') && ++s;
        break;
      case '(':
      case ')':
        (i[i.length] = { t: n === 1 ? 't' : f, v: f }), ++s;
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
        for (a = f; s < e.length && '0123456789'.indexOf(e.charAt(++s)) > -1; )
          a += e.charAt(s);
        i[i.length] = { t: 'D', v: a };
        break;
      case ' ':
        (i[i.length] = { t: f, v: f }), ++s;
        break;
      case '$':
        (i[i.length] = { t: 't', v: '$' }), ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error('unrecognized character ' + f + ' in ' + e);
        (i[i.length] = { t: 't', v: f }), ++s;
        break;
    }
  var m = 0,
    S = 0,
    C;
  for (s = i.length - 1, l = 't'; s >= 0; --s)
    switch (i[s].t) {
      case 'h':
      case 'H':
        (i[s].t = h), (l = 'h'), m < 1 && (m = 1);
        break;
      case 's':
        (C = i[s].v.match(/\.0+$/)) && (S = Math.max(S, C[0].length - 1)),
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
      o.u >= 0.5 && ((o.u = 0), ++o.S),
        o.S >= 60 && ((o.S = 0), ++o.M),
        o.M >= 60 && ((o.M = 0), ++o.H);
      break;
    case 2:
      o.u >= 0.5 && ((o.u = 0), ++o.S), o.S >= 60 && ((o.S = 0), ++o.M);
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
        (i[s].v = f1(i[s].t.charCodeAt(0), i[s].v, o, S)), (i[s].t = 't');
        break;
      case 'n':
      case '?':
        for (
          k = s + 1;
          i[k] != null &&
          ((f = i[k].t) === '?' ||
            f === 'D' ||
            ((f === ' ' || f === 't') &&
              i[k + 1] != null &&
              (i[k + 1].t === '?' ||
                (i[k + 1].t === 't' && i[k + 1].v === '/'))) ||
            (i[s].t === '(' && (f === ' ' || f === 'n' || f === ')')) ||
            (f === 't' &&
              (i[k].v === '/' ||
                (i[k].v === ' ' && i[k + 1] != null && i[k + 1].t == '?'))));

        )
          (i[s].v += i[k].v), (i[k] = { v: '', t: ';' }), ++k;
        (F += i[s].v), (s = k - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = za(t, r));
        break;
    }
  var V = '',
    q,
    O;
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((q = t < 0 && F.charCodeAt(0) === 45 ? -t : t), (O = tt('n', F, q)))
      : ((q = t < 0 && n > 1 ? -t : t),
        (O = tt('n', F, q)),
        q < 0 &&
          i[0] &&
          i[0].t == 't' &&
          ((O = O.substr(1)), (i[0].v = '-' + i[0].v))),
      (k = O.length - 1);
    var H = i.length;
    for (s = 0; s < i.length; ++s)
      if (i[s] != null && i[s].t != 't' && i[s].v.indexOf('.') > -1) {
        H = s;
        break;
      }
    var I = i.length;
    if (H === i.length && O.indexOf('E') === -1) {
      for (s = i.length - 1; s >= 0; --s)
        i[s] == null ||
          'n?'.indexOf(i[s].t) === -1 ||
          (k >= i[s].v.length - 1
            ? ((k -= i[s].v.length), (i[s].v = O.substr(k + 1, i[s].v.length)))
            : k < 0
              ? (i[s].v = '')
              : ((i[s].v = O.substr(0, k + 1)), (k = -1)),
          (i[s].t = 't'),
          (I = s));
      k >= 0 && I < i.length && (i[I].v = O.substr(0, k + 1) + i[I].v);
    } else if (H !== i.length && O.indexOf('E') === -1) {
      for (k = O.indexOf('.') - 1, s = H; s >= 0; --s)
        if (!(i[s] == null || 'n?'.indexOf(i[s].t) === -1)) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === H
                ? i[s].v.indexOf('.') - 1
                : i[s].v.length - 1,
              V = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            k >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (V = O.charAt(k--) + V);
          (i[s].v = V), (i[s].t = 't'), (I = s);
        }
      for (
        k >= 0 && I < i.length && (i[I].v = O.substr(0, k + 1) + i[I].v),
          k = O.indexOf('.') + 1,
          s = H;
        s < i.length;
        ++s
      )
        if (!(i[s] == null || ('n?('.indexOf(i[s].t) === -1 && s !== H))) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === H ? i[s].v.indexOf('.') + 1 : 0,
              V = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            k < O.length && (V += O.charAt(k++));
          (i[s].v = V), (i[s].t = 't'), (I = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((q = n > 1 && t < 0 && s > 0 && i[s - 1].v === '-' ? -t : t),
      (i[s].v = tt(i[s].t, i[s].v, q)),
      (i[s].t = 't'));
  var G = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (G += i[s].v);
  return G;
}
var ms = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function _s(e, t) {
  if (t == null) return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case '=':
      if (e == r) return !0;
      break;
    case '>':
      if (e > r) return !0;
      break;
    case '<':
      if (e < r) return !0;
      break;
    case '<>':
      if (e != r) return !0;
      break;
    case '>=':
      if (e >= r) return !0;
      break;
    case '<=':
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function _1(e, t) {
  var r = v1(e),
    n = r.length,
    i = r[n - 1].indexOf('@');
  if ((n < 4 && i > -1 && --n, r.length > 4))
    throw new Error('cannot find right format for |' + r.join('|') + '|');
  if (typeof t != 'number')
    return [4, r.length === 4 || i > -1 ? r[r.length - 1] : '@'];
  switch (r.length) {
    case 1:
      r =
        i > -1
          ? ['General', 'General', 'General', r[0]]
          : [r[0], r[0], r[0], '@'];
      break;
    case 2:
      r = i > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], '@'];
      break;
    case 3:
      r = i > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], '@'];
      break;
  }
  var a = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf('[') === -1 && r[1].indexOf('[') === -1) return [n, a];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(ms),
      f = r[1].match(ms);
    return _s(t, s)
      ? [n, r[0]]
      : _s(t, f)
        ? [n, r[1]]
        : [n, r[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function gt(e, t, r) {
  r == null && (r = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && r.dateNF
        ? (n = r.dateNF)
        : (n = (r.table != null ? r.table : Be)[e]),
        n == null && (n = (r.table && r.table[ds[e]]) || Be[ds[e]]),
        n == null && (n = Qh[e] || 'General');
      break;
  }
  if (Mi(n, 0)) return za(t, r);
  t instanceof Date && (t = no(t, r.date1904));
  var i = _1(n, t);
  if (Mi(i[1])) return za(t, r);
  if (t === !0) t = 'TRUE';
  else if (t === !1) t = 'FALSE';
  else if (t === '' || t == null) return '';
  return m1(i[1], t, r, i[0]);
}
function xo(e, t) {
  if (typeof t != 'number') {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (Be[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (Be[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return (Be[t] = e), t;
}
function la(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && xo(e[t], t);
}
function ca() {
  Be = Zh();
}
var po = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function g1(e) {
  var t = typeof e == 'number' ? Be[e] : e;
  return (t = t.replace(po, '(\\d+)')), new RegExp('^' + t + '$');
}
function E1(e, t, r) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (t.match(po) || []).forEach(function (u, h) {
    var d = parseInt(r[h + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case 'y':
        n = d;
        break;
      case 'd':
        a = d;
        break;
      case 'h':
        s = d;
        break;
      case 's':
        l = d;
        break;
      case 'm':
        s >= 0 ? (f = d) : (i = d);
        break;
    }
  }),
    l >= 0 && f == -1 && i >= 0 && ((f = i), (i = -1));
  var o =
    ('' + (n >= 0 ? n : new Date().getFullYear())).slice(-4) +
    '-' +
    ('00' + (i >= 1 ? i : 1)).slice(-2) +
    '-' +
    ('00' + (a >= 1 ? a : 1)).slice(-2);
  o.length == 7 && (o = '0' + o), o.length == 8 && (o = '20' + o);
  var c =
    ('00' + (s >= 0 ? s : 0)).slice(-2) +
    ':' +
    ('00' + (f >= 0 ? f : 0)).slice(-2) +
    ':' +
    ('00' + (l >= 0 ? l : 0)).slice(-2);
  return s == -1 && f == -1 && l == -1
    ? o
    : n == -1 && i == -1 && a == -1
      ? c
      : o + 'T' + c;
}
var T1 = (function () {
    var e = {};
    e.version = '1.2.0';
    function t() {
      for (var O = 0, H = new Array(256), I = 0; I != 256; ++I)
        (O = I),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (H[I] = O);
      return typeof Int32Array < 'u' ? new Int32Array(H) : H;
    }
    var r = t();
    function n(O) {
      var H = 0,
        I = 0,
        G = 0,
        X = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (G = 0; G != 256; ++G) X[G] = O[G];
      for (G = 0; G != 256; ++G)
        for (I = O[G], H = 256 + G; H < 4096; H += 256)
          I = X[H] = (I >>> 8) ^ O[I & 255];
      var z = [];
      for (G = 1; G != 16; ++G)
        z[G - 1] =
          typeof Int32Array < 'u'
            ? X.subarray(G * 256, G * 256 + 256)
            : X.slice(G * 256, G * 256 + 256);
      return z;
    }
    var i = n(r),
      a = i[0],
      s = i[1],
      f = i[2],
      l = i[3],
      o = i[4],
      c = i[5],
      u = i[6],
      h = i[7],
      d = i[8],
      p = i[9],
      x = i[10],
      m = i[11],
      S = i[12],
      C = i[13],
      F = i[14];
    function k(O, H) {
      for (var I = H ^ -1, G = 0, X = O.length; G < X; )
        I = (I >>> 8) ^ r[(I ^ O.charCodeAt(G++)) & 255];
      return ~I;
    }
    function V(O, H) {
      for (var I = H ^ -1, G = O.length - 15, X = 0; X < G; )
        I =
          F[O[X++] ^ (I & 255)] ^
          C[O[X++] ^ ((I >> 8) & 255)] ^
          S[O[X++] ^ ((I >> 16) & 255)] ^
          m[O[X++] ^ (I >>> 24)] ^
          x[O[X++]] ^
          p[O[X++]] ^
          d[O[X++]] ^
          h[O[X++]] ^
          u[O[X++]] ^
          c[O[X++]] ^
          o[O[X++]] ^
          l[O[X++]] ^
          f[O[X++]] ^
          s[O[X++]] ^
          a[O[X++]] ^
          r[O[X++]];
      for (G += 15; X < G; ) I = (I >>> 8) ^ r[(I ^ O[X++]) & 255];
      return ~I;
    }
    function q(O, H) {
      for (var I = H ^ -1, G = 0, X = O.length, z = 0, ne = 0; G < X; )
        (z = O.charCodeAt(G++)),
          z < 128
            ? (I = (I >>> 8) ^ r[(I ^ z) & 255])
            : z < 2048
              ? ((I = (I >>> 8) ^ r[(I ^ (192 | ((z >> 6) & 31))) & 255]),
                (I = (I >>> 8) ^ r[(I ^ (128 | (z & 63))) & 255]))
              : z >= 55296 && z < 57344
                ? ((z = (z & 1023) + 64),
                  (ne = O.charCodeAt(G++) & 1023),
                  (I = (I >>> 8) ^ r[(I ^ (240 | ((z >> 8) & 7))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | ((z >> 2) & 63))) & 255]),
                  (I =
                    (I >>> 8) ^
                    r[(I ^ (128 | ((ne >> 6) & 15) | ((z & 3) << 4))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | (ne & 63))) & 255]))
                : ((I = (I >>> 8) ^ r[(I ^ (224 | ((z >> 12) & 15))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | ((z >> 6) & 63))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | (z & 63))) & 255]));
      return ~I;
    }
    return (e.table = r), (e.bstr = k), (e.buf = V), (e.str = q), e;
  })(),
  Se = (function () {
    var t = {};
    t.version = '1.2.1';
    function r(v, E) {
      for (
        var _ = v.split('/'),
          g = E.split('/'),
          T = 0,
          w = 0,
          D = Math.min(_.length, g.length);
        T < D;
        ++T
      ) {
        if ((w = _[T].length - g[T].length)) return w;
        if (_[T] != g[T]) return _[T] < g[T] ? -1 : 1;
      }
      return _.length - g.length;
    }
    function n(v) {
      if (v.charAt(v.length - 1) == '/')
        return v.slice(0, -1).indexOf('/') === -1 ? v : n(v.slice(0, -1));
      var E = v.lastIndexOf('/');
      return E === -1 ? v : v.slice(0, E + 1);
    }
    function i(v) {
      if (v.charAt(v.length - 1) == '/') return i(v.slice(0, -1));
      var E = v.lastIndexOf('/');
      return E === -1 ? v : v.slice(E + 1);
    }
    function a(v, E) {
      typeof E == 'string' && (E = new Date(E));
      var _ = E.getHours();
      (_ = (_ << 6) | E.getMinutes()),
        (_ = (_ << 5) | (E.getSeconds() >>> 1)),
        v.write_shift(2, _);
      var g = E.getFullYear() - 1980;
      (g = (g << 4) | (E.getMonth() + 1)),
        (g = (g << 5) | E.getDate()),
        v.write_shift(2, g);
    }
    function s(v) {
      var E = v.read_shift(2) & 65535,
        _ = v.read_shift(2) & 65535,
        g = new Date(),
        T = _ & 31;
      _ >>>= 5;
      var w = _ & 15;
      (_ >>>= 4),
        g.setMilliseconds(0),
        g.setFullYear(_ + 1980),
        g.setMonth(w - 1),
        g.setDate(T);
      var D = E & 31;
      E >>>= 5;
      var W = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(W), g.setSeconds(D << 1), g
      );
    }
    function f(v) {
      Ar(v, 0);
      for (var E = {}, _ = 0; v.l <= v.length - 4; ) {
        var g = v.read_shift(2),
          T = v.read_shift(2),
          w = v.l + T,
          D = {};
        switch (g) {
          case 21589:
            (_ = v.read_shift(1)),
              _ & 1 && (D.mtime = v.read_shift(4)),
              T > 5 &&
                (_ & 2 && (D.atime = v.read_shift(4)),
                _ & 4 && (D.ctime = v.read_shift(4))),
              D.mtime && (D.mt = new Date(D.mtime * 1e3));
            break;
        }
        (v.l = w), (E[g] = D);
      }
      return E;
    }
    var l;
    function o() {
      return l || (l = {});
    }
    function c(v, E) {
      if (v[0] == 80 && v[1] == 75) return B0(v, E);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return Gl(v, E);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        D = 0,
        W = 0,
        N = 0,
        P = [],
        L = v.slice(0, 512);
      Ar(L, 0);
      var K = u(L);
      switch (((_ = K[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (K[1] == 0) return B0(v, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = v.slice(0, g)), Ar(L, 28));
      var te = v.slice(0, g);
      h(L, _);
      var fe = L.read_shift(4, 'i');
      if (_ === 3 && fe !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + fe);
      (L.l += 4),
        (D = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (W = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (N = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var Y = -1, ae = 0;
        ae < 109 && ((Y = L.read_shift(4, 'i')), !(Y < 0));
        ++ae
      )
        P[ae] = Y;
      var le = d(v, g);
      m(N, w, le, g, P);
      var De = C(le, D, P, g);
      (De[D].name = '!Directory'),
        T > 0 && W !== ne && (De[W].name = '!MiniFAT'),
        (De[P[0]].name = '!FAT'),
        (De.fat_addrs = P),
        (De.ssz = g);
      var ke = {},
        er = [],
        _n = [],
        gn = [];
      F(D, De, le, er, T, ke, _n, W), p(_n, gn, er), er.shift();
      var En = { FileIndex: _n, FullPaths: gn };
      return E && E.raw && (En.raw = { header: te, sectors: le }), En;
    }
    function u(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(me, 'Header Signature: '), (v.l += 16);
      var E = v.read_shift(2, 'u');
      return [v.read_shift(2, 'u'), E];
    }
    function h(v, E) {
      var _ = 9;
      switch (((v.l += 2), (_ = v.read_shift(2)))) {
        case 9:
          if (E != 3) throw new Error('Sector Shift: Expected 9 saw ' + _);
          break;
        case 12:
          if (E != 4) throw new Error('Sector Shift: Expected 12 saw ' + _);
          break;
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + _);
      }
      v.chk('0600', 'Mini Sector Shift: '), v.chk('000000000000', 'Reserved: ');
    }
    function d(v, E) {
      for (var _ = Math.ceil(v.length / E) - 1, g = [], T = 1; T < _; ++T)
        g[T - 1] = v.slice(T * E, (T + 1) * E);
      return (g[_ - 1] = v.slice(_ * E)), g;
    }
    function p(v, E, _) {
      for (
        var g = 0, T = 0, w = 0, D = 0, W = 0, N = _.length, P = [], L = [];
        g < N;
        ++g
      )
        (P[g] = L[g] = g), (E[g] = _[g]);
      for (; W < L.length; ++W)
        (g = L[W]),
          (T = v[g].L),
          (w = v[g].R),
          (D = v[g].C),
          P[g] === g &&
            (T !== -1 && P[T] !== T && (P[g] = P[T]),
            w !== -1 && P[w] !== w && (P[g] = P[w])),
          D !== -1 && (P[D] = g),
          T !== -1 &&
            g != P[g] &&
            ((P[T] = P[g]), L.lastIndexOf(T) < W && L.push(T)),
          w !== -1 &&
            g != P[g] &&
            ((P[w] = P[g]), L.lastIndexOf(w) < W && L.push(w));
      for (g = 1; g < N; ++g)
        P[g] === g &&
          (w !== -1 && P[w] !== w
            ? (P[g] = P[w])
            : T !== -1 && P[T] !== T && (P[g] = P[T]));
      for (g = 1; g < N; ++g)
        if (v[g].type !== 0) {
          if (((W = g), W != P[W]))
            do (W = P[W]), (E[g] = E[W] + '/' + E[g]);
            while (W !== 0 && P[W] !== -1 && W != P[W]);
          P[g] = -1;
        }
      for (E[0] += '/', g = 1; g < N; ++g) v[g].type !== 2 && (E[g] += '/');
    }
    function x(v, E, _) {
      for (var g = v.start, T = v.size, w = [], D = g; _ && T > 0 && D >= 0; )
        w.push(E.slice(D * z, D * z + z)), (T -= z), (D = yt(_, D * 4));
      return w.length === 0 ? U(0) : qe(w).slice(0, v.size);
    }
    function m(v, E, _, g, T) {
      var w = ne;
      if (v === ne) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var D = _[v],
          W = (g >>> 2) - 1;
        if (!D) return;
        for (var N = 0; N < W && (w = yt(D, N * 4)) !== ne; ++N) T.push(w);
        m(yt(D, g - 4), E - 1, _, g, T);
      }
    }
    function S(v, E, _, g, T) {
      var w = [],
        D = [];
      T || (T = []);
      var W = g - 1,
        N = 0,
        P = 0;
      for (N = E; N >= 0; ) {
        (T[N] = !0), (w[w.length] = N), D.push(v[N]);
        var L = _[Math.floor((N * 4) / g)];
        if (((P = (N * 4) & W), g < 4 + P))
          throw new Error('FAT boundary crossed: ' + N + ' 4 ' + g);
        if (!v[L]) break;
        N = yt(v[L], P);
      }
      return { nodes: w, data: Fs([D]) };
    }
    function C(v, E, _, g) {
      var T = v.length,
        w = [],
        D = [],
        W = [],
        N = [],
        P = g - 1,
        L = 0,
        K = 0,
        te = 0,
        fe = 0;
      for (L = 0; L < T; ++L)
        if (((W = []), (te = L + E), te >= T && (te -= T), !D[te])) {
          N = [];
          var Y = [];
          for (K = te; K >= 0; ) {
            (Y[K] = !0), (D[K] = !0), (W[W.length] = K), N.push(v[K]);
            var ae = _[Math.floor((K * 4) / g)];
            if (((fe = (K * 4) & P), g < 4 + fe))
              throw new Error('FAT boundary crossed: ' + K + ' 4 ' + g);
            if (!v[ae] || ((K = yt(v[ae], fe)), Y[K])) break;
          }
          w[te] = { nodes: W, data: Fs([N]) };
        }
      return w;
    }
    function F(v, E, _, g, T, w, D, W) {
      for (
        var N = 0, P = g.length ? 2 : 0, L = E[v].data, K = 0, te = 0, fe;
        K < L.length;
        K += 128
      ) {
        var Y = L.slice(K, K + 128);
        Ar(Y, 64), (te = Y.read_shift(2)), (fe = g0(Y, 0, te - P)), g.push(fe);
        var ae = {
            name: fe,
            type: Y.read_shift(1),
            color: Y.read_shift(1),
            L: Y.read_shift(4, 'i'),
            R: Y.read_shift(4, 'i'),
            C: Y.read_shift(4, 'i'),
            clsid: Y.read_shift(16),
            state: Y.read_shift(4, 'i'),
            start: 0,
            size: 0,
          },
          le =
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2);
        le !== 0 && (ae.ct = k(Y, Y.l - 8));
        var De =
          Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2);
        De !== 0 && (ae.mt = k(Y, Y.l - 8)),
          (ae.start = Y.read_shift(4, 'i')),
          (ae.size = Y.read_shift(4, 'i')),
          ae.size < 0 &&
            ae.start < 0 &&
            ((ae.size = ae.type = 0), (ae.start = ne), (ae.name = '')),
          ae.type === 5
            ? ((N = ae.start), T > 0 && N !== ne && (E[N].name = '!StreamData'))
            : ae.size >= 4096
              ? ((ae.storage = 'fat'),
                E[ae.start] === void 0 &&
                  (E[ae.start] = S(_, ae.start, E.fat_addrs, E.ssz)),
                (E[ae.start].name = ae.name),
                (ae.content = E[ae.start].data.slice(0, ae.size)))
              : ((ae.storage = 'minifat'),
                ae.size < 0
                  ? (ae.size = 0)
                  : N !== ne &&
                    ae.start !== ne &&
                    E[N] &&
                    (ae.content = x(ae, E[N].data, (E[W] || {}).data))),
          ae.content && Ar(ae.content, 0),
          (w[fe] = ae),
          D.push(ae);
      }
    }
    function k(v, E) {
      return new Date(
        ((Fr(v, E + 4) / 1e7) * Math.pow(2, 32) +
          Fr(v, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function V(v, E) {
      return o(), c(l.readFileSync(v), E);
    }
    function q(v, E) {
      var _ = E && E.type;
      switch (
        (_ || (ve && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return V(v, E);
        case 'base64':
          return c(Br(at(v)), E);
        case 'binary':
          return c(Br(v), E);
      }
      return c(v, E);
    }
    function O(v, E) {
      var _ = E || {},
        g = _.root || 'Root Entry';
      if (
        (v.FullPaths || (v.FullPaths = []),
        v.FileIndex || (v.FileIndex = []),
        v.FullPaths.length !== v.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure');
      v.FullPaths.length === 0 &&
        ((v.FullPaths[0] = g + '/'), (v.FileIndex[0] = { name: g, type: 5 })),
        _.CLSID && (v.FileIndex[0].clsid = _.CLSID),
        H(v);
    }
    function H(v) {
      var E = 'Sh33tJ5';
      if (!Se.find(v, '/' + E)) {
        var _ = U(4);
        (_[0] = 55),
          (_[1] = _[3] = 50),
          (_[2] = 54),
          v.FileIndex.push({
            name: E,
            type: 2,
            content: _,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          v.FullPaths.push(v.FullPaths[0] + E),
          I(v);
      }
    }
    function I(v, E) {
      O(v);
      for (var _ = !1, g = !1, T = v.FullPaths.length - 1; T >= 0; --T) {
        var w = v.FileIndex[T];
        switch (w.type) {
          case 0:
            g ? (_ = !0) : (v.FileIndex.pop(), v.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (g = !0),
              isNaN(w.R * w.L * w.C) && (_ = !0),
              w.R > -1 && w.L > -1 && w.R == w.L && (_ = !0);
            break;
          default:
            _ = !0;
            break;
        }
      }
      if (!(!_ && !E)) {
        var D = new Date(1987, 1, 19),
          W = 0,
          N = Object.create ? Object.create(null) : {},
          P = [];
        for (T = 0; T < v.FullPaths.length; ++T)
          (N[v.FullPaths[T]] = !0),
            v.FileIndex[T].type !== 0 &&
              P.push([v.FullPaths[T], v.FileIndex[T]]);
        for (T = 0; T < P.length; ++T) {
          var L = n(P[T][0]);
          (g = N[L]),
            g ||
              (P.push([
                L,
                {
                  name: i(L).replace('/', ''),
                  type: 1,
                  clsid: We,
                  ct: D,
                  mt: D,
                  content: null,
                },
              ]),
              (N[L] = !0));
        }
        for (
          P.sort(function (fe, Y) {
            return r(fe[0], Y[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            T = 0;
          T < P.length;
          ++T
        )
          (v.FullPaths[T] = P[T][0]), (v.FileIndex[T] = P[T][1]);
        for (T = 0; T < P.length; ++T) {
          var K = v.FileIndex[T],
            te = v.FullPaths[T];
          if (
            ((K.name = i(te).replace('/', '')),
            (K.L = K.R = K.C = -(K.color = 1)),
            (K.size = K.content ? K.content.length : 0),
            (K.start = 0),
            (K.clsid = K.clsid || We),
            T === 0)
          )
            (K.C = P.length > 1 ? 1 : -1), (K.size = 0), (K.type = 5);
          else if (te.slice(-1) == '/') {
            for (W = T + 1; W < P.length && n(v.FullPaths[W]) != te; ++W);
            for (
              K.C = W >= P.length ? -1 : W, W = T + 1;
              W < P.length && n(v.FullPaths[W]) != n(te);
              ++W
            );
            (K.R = W >= P.length ? -1 : W), (K.type = 1);
          } else
            n(v.FullPaths[T + 1] || '') == n(te) && (K.R = T + 1), (K.type = 2);
        }
      }
    }
    function G(v, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return jl(v, _);
      switch ((I(v), _.fileType)) {
        case 'zip':
          return Ml(v, _);
      }
      var g = (function (fe) {
          for (var Y = 0, ae = 0, le = 0; le < fe.FileIndex.length; ++le) {
            var De = fe.FileIndex[le];
            if (De.content) {
              var ke = De.content.length;
              ke > 0 &&
                (ke < 4096 ? (Y += (ke + 63) >> 6) : (ae += (ke + 511) >> 9));
            }
          }
          for (
            var er = (fe.FullPaths.length + 3) >> 2,
              _n = (Y + 7) >> 3,
              gn = (Y + 127) >> 7,
              En = _n + ae + er + gn,
              At = (En + 127) >> 7,
              ga = At <= 109 ? 0 : Math.ceil((At - 109) / 127);
            (En + At + ga + 127) >> 7 > At;

          )
            ga = ++At <= 109 ? 0 : Math.ceil((At - 109) / 127);
          var Qr = [1, ga, At, gn, er, ae, Y, 0];
          return (
            (fe.FileIndex[0].size = Y << 6),
            (Qr[7] =
              (fe.FileIndex[0].start =
                Qr[0] + Qr[1] + Qr[2] + Qr[3] + Qr[4] + Qr[5]) +
              ((Qr[6] + 7) >> 3)),
            Qr
          );
        })(v),
        T = U(g[7] << 9),
        w = 0,
        D = 0;
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, oe[w]);
        for (w = 0; w < 8; ++w) T.write_shift(2, 0);
        for (
          T.write_shift(2, 62),
            T.write_shift(2, 3),
            T.write_shift(2, 65534),
            T.write_shift(2, 9),
            T.write_shift(2, 6),
            w = 0;
          w < 3;
          ++w
        )
          T.write_shift(2, 0);
        for (
          T.write_shift(4, 0),
            T.write_shift(4, g[2]),
            T.write_shift(4, g[0] + g[1] + g[2] + g[3] - 1),
            T.write_shift(4, 0),
            T.write_shift(4, 4096),
            T.write_shift(4, g[3] ? g[0] + g[1] + g[2] - 1 : ne),
            T.write_shift(4, g[3]),
            T.write_shift(-4, g[1] ? g[0] - 1 : ne),
            T.write_shift(4, g[1]),
            w = 0;
          w < 109;
          ++w
        )
          T.write_shift(-4, w < g[2] ? g[1] + w : -1);
      }
      if (g[1])
        for (D = 0; D < g[1]; ++D) {
          for (; w < 236 + D * 127; ++w)
            T.write_shift(-4, w < g[2] ? g[1] + w : -1);
          T.write_shift(-4, D === g[1] - 1 ? ne : D + 1);
        }
      var W = function (fe) {
        for (D += fe; w < D - 1; ++w) T.write_shift(-4, w + 1);
        fe && (++w, T.write_shift(-4, ne));
      };
      for (D = w = 0, D += g[1]; w < D; ++w) T.write_shift(-4, Oe.DIFSECT);
      for (D += g[2]; w < D; ++w) T.write_shift(-4, Oe.FATSECT);
      W(g[3]), W(g[4]);
      for (var N = 0, P = 0, L = v.FileIndex[0]; N < v.FileIndex.length; ++N)
        (L = v.FileIndex[N]),
          L.content &&
            ((P = L.content.length),
            !(P < 4096) && ((L.start = D), W((P + 511) >> 9)));
      for (W((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, Oe.ENDOFCHAIN);
      for (D = w = 0, N = 0; N < v.FileIndex.length; ++N)
        (L = v.FileIndex[N]),
          L.content &&
            ((P = L.content.length),
            !(!P || P >= 4096) && ((L.start = D), W((P + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, Oe.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var K = v.FullPaths[w];
        if (!K || K.length === 0) {
          for (N = 0; N < 17; ++N) T.write_shift(4, 0);
          for (N = 0; N < 3; ++N) T.write_shift(4, -1);
          for (N = 0; N < 12; ++N) T.write_shift(4, 0);
          continue;
        }
        (L = v.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : ne);
        var te = (w === 0 && _.root) || L.name;
        if (
          ((P = 2 * (te.length + 1)),
          T.write_shift(64, te, 'utf16le'),
          T.write_shift(2, P),
          T.write_shift(1, L.type),
          T.write_shift(1, L.color),
          T.write_shift(-4, L.L),
          T.write_shift(-4, L.R),
          T.write_shift(-4, L.C),
          L.clsid)
        )
          T.write_shift(16, L.clsid, 'hex');
        else for (N = 0; N < 4; ++N) T.write_shift(4, 0);
        T.write_shift(4, L.state || 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, 0),
          T.write_shift(4, L.start),
          T.write_shift(4, L.size),
          T.write_shift(4, 0);
      }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size >= 4096))
          if (((T.l = (L.start + 1) << 9), ve && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 511; ++N) T.write_shift(1, 0);
          }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (ve && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 63; ++N) T.write_shift(1, 0);
          }
      if (ve) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function X(v, E) {
      var _ = v.FullPaths.map(function (N) {
          return N.toUpperCase();
        }),
        g = _.map(function (N) {
          var P = N.split('/');
          return P[P.length - (N.slice(-1) == '/' ? 2 : 1)];
        }),
        T = !1;
      E.charCodeAt(0) === 47
        ? ((T = !0), (E = _[0].slice(0, -1) + E))
        : (T = E.indexOf('/') !== -1);
      var w = E.toUpperCase(),
        D = T === !0 ? _.indexOf(w) : g.indexOf(w);
      if (D !== -1) return v.FileIndex[D];
      var W = !w.match(ci);
      for (
        w = w.replace(Rn, ''), W && (w = w.replace(ci, '!')), D = 0;
        D < _.length;
        ++D
      )
        if (
          (W ? _[D].replace(ci, '!') : _[D]).replace(Rn, '') == w ||
          (W ? g[D].replace(ci, '!') : g[D]).replace(Rn, '') == w
        )
          return v.FileIndex[D];
      return null;
    }
    var z = 64,
      ne = -2,
      me = 'd0cf11e0a1b11ae1',
      oe = [208, 207, 17, 224, 161, 177, 26, 225],
      We = '00000000000000000000000000000000',
      Oe = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ne,
        FREESECT: -1,
        HEADER_SIGNATURE: me,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: We,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function hr(v, E, _) {
      o();
      var g = G(v, _);
      l.writeFileSync(E, g);
    }
    function Me(v) {
      for (var E = new Array(v.length), _ = 0; _ < v.length; ++_)
        E[_] = String.fromCharCode(v[_]);
      return E.join('');
    }
    function ar(v, E) {
      var _ = G(v, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : Me(_);
        case 'base64':
          return Hn(typeof _ == 'string' ? _ : Me(_));
        case 'buffer':
          if (ve) return Buffer.isBuffer(_) ? _ : ot(_);
        case 'array':
          return typeof _ == 'string' ? Br(_) : _;
      }
      return _;
    }
    var sr;
    function y(v) {
      try {
        var E = v.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          sr = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function B(v, E) {
      if (!sr) return P0(v, E);
      var _ = sr.InflateRaw,
        g = new _(),
        T = g._processChunk(v.slice(v.l), g._finishFlushFlag);
      return (v.l += g.bytesRead), T;
    }
    function R(v) {
      return sr ? sr.deflateRawSync(v) : mn(v);
    }
    var A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      b = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      Q = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function ie(v) {
      var E =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var re = typeof Uint8Array < 'u',
        ee = re ? new Uint8Array(256) : [],
        pe = 0;
      pe < 256;
      ++pe
    )
      ee[pe] = ie(pe);
    function he(v, E) {
      var _ = ee[v & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | ee[(v >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | ee[(v >> 16) & 255]), _ >>> (24 - E)));
    }
    function Pe(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 6 ? 0 : v[g + 1] << 8)) >>> _) & 3;
    }
    function xe(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 5 ? 0 : v[g + 1] << 8)) >>> _) & 7;
    }
    function Ir(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 4 ? 0 : v[g + 1] << 8)) >>> _) & 15;
    }
    function Re(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 3 ? 0 : v[g + 1] << 8)) >>> _) & 31;
    }
    function se(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 1 ? 0 : v[g + 1] << 8)) >>> _) & 127;
    }
    function Ge(v, E, _) {
      var g = E & 7,
        T = E >>> 3,
        w = (1 << _) - 1,
        D = v[T] >>> g;
      return (
        _ < 8 - g ||
          ((D |= v[T + 1] << (8 - g)), _ < 16 - g) ||
          ((D |= v[T + 2] << (16 - g)), _ < 24 - g) ||
          (D |= v[T + 3] << (24 - g)),
        D & w
      );
    }
    function Er(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (v[T] |= (_ & 7) << g)
          : ((v[T] |= (_ << g) & 255), (v[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function qr(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (v[T] |= _), E + 1;
    }
    function Vr(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (v[T] |= _ & 255), (_ >>>= 8), (v[T + 1] = _), E + 8;
    }
    function Jr(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        (_ <<= g),
        (v[T] |= _ & 255),
        (_ >>>= 8),
        (v[T + 1] = _ & 255),
        (v[T + 2] = _ >>> 8),
        E + 16
      );
    }
    function Ht(v, E) {
      var _ = v.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return v;
      if (ve) {
        var w = us(g);
        if (v.copy) v.copy(w);
        else for (; T < v.length; ++T) w[T] = v[T];
        return w;
      } else if (re) {
        var D = new Uint8Array(g);
        if (D.set) D.set(v);
        else for (; T < _; ++T) D[T] = v[T];
        return D;
      }
      return (v.length = g), v;
    }
    function Tr(v) {
      for (var E = new Array(v), _ = 0; _ < v; ++_) E[_] = 0;
      return E;
    }
    function Wt(v, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        D = 0,
        W = 0,
        N = v.length,
        P = re ? new Uint16Array(32) : Tr(32);
      for (w = 0; w < 32; ++w) P[w] = 0;
      for (w = N; w < _; ++w) v[w] = 0;
      N = v.length;
      var L = re ? new Uint16Array(N) : Tr(N);
      for (w = 0; w < N; ++w) P[(T = v[w])]++, g < T && (g = T), (L[w] = 0);
      for (P[0] = 0, w = 1; w <= g; ++w) P[w + 16] = W = (W + P[w - 1]) << 1;
      for (w = 0; w < N; ++w) (W = v[w]), W != 0 && (L[w] = P[W + 16]++);
      var K = 0;
      for (w = 0; w < N; ++w)
        if (((K = v[w]), K != 0))
          for (
            W = he(L[w], g) >> (g - K), D = (1 << (g + 4 - K)) - 1;
            D >= 0;
            --D
          )
            E[W | (D << K)] = (K & 15) | (w << 4);
      return g;
    }
    var vn = re ? new Uint16Array(512) : Tr(512),
      Vt = re ? new Uint16Array(32) : Tr(32);
    if (!re) {
      for (var Zr = 0; Zr < 512; ++Zr) vn[Zr] = 0;
      for (Zr = 0; Zr < 32; ++Zr) Vt[Zr] = 0;
    }
    (function () {
      for (var v = [], E = 0; E < 32; E++) v.push(5);
      Wt(v, Vt, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      Wt(_, vn, 288);
    })();
    var va = (function () {
      for (
        var E = re ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < Q.length - 1;
        ++_
      )
        for (; g < Q[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = re ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < b.length - 1; ++_)
        for (; g < b[_ + 1]; ++g) T[g] = _;
      function w(W, N) {
        for (var P = 0; P < W.length; ) {
          var L = Math.min(65535, W.length - P),
            K = P + L == W.length;
          for (
            N.write_shift(1, +K),
              N.write_shift(2, L),
              N.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            N[N.l++] = W[P++];
        }
        return N.l;
      }
      function D(W, N) {
        for (
          var P = 0, L = 0, K = re ? new Uint16Array(32768) : [];
          L < W.length;

        ) {
          var te = Math.min(65535, W.length - L);
          if (te < 10) {
            for (
              P = Er(N, P, +(L + te == W.length)),
                P & 7 && (P += 8 - (P & 7)),
                N.l = (P / 8) | 0,
                N.write_shift(2, te),
                N.write_shift(2, ~te & 65535);
              te-- > 0;

            )
              N[N.l++] = W[L++];
            P = N.l * 8;
            continue;
          }
          P = Er(N, P, +(L + te == W.length) + 2);
          for (var fe = 0; te-- > 0; ) {
            var Y = W[L];
            fe = ((fe << 5) ^ Y) & 32767;
            var ae = -1,
              le = 0;
            if (
              (ae = K[fe]) &&
              ((ae |= L & -32768), ae > L && (ae -= 32768), ae < L)
            )
              for (; W[ae + le] == W[L + le] && le < 250; ) ++le;
            if (le > 2) {
              (Y = T[le]),
                Y <= 22
                  ? (P = Vr(N, P, ee[Y + 1] >> 1) - 1)
                  : (Vr(N, P, 3),
                    (P += 5),
                    Vr(N, P, ee[Y - 23] >> 5),
                    (P += 3));
              var De = Y < 8 ? 0 : (Y - 4) >> 2;
              De > 0 && (Jr(N, P, le - b[Y]), (P += De)),
                (Y = E[L - ae]),
                (P = Vr(N, P, ee[Y] >> 3)),
                (P -= 3);
              var ke = Y < 4 ? 0 : (Y - 2) >> 1;
              ke > 0 && (Jr(N, P, L - ae - Q[Y]), (P += ke));
              for (var er = 0; er < le; ++er)
                (K[fe] = L & 32767), (fe = ((fe << 5) ^ W[L]) & 32767), ++L;
              te -= le - 1;
            } else
              Y <= 143 ? (Y = Y + 48) : (P = qr(N, P, 1)),
                (P = Vr(N, P, ee[Y])),
                (K[fe] = L & 32767),
                ++L;
          }
          P = Vr(N, P, 0) - 1;
        }
        return (N.l = ((P + 7) / 8) | 0), N.l;
      }
      return function (N, P) {
        return N.length < 8 ? w(N, P) : D(N, P);
      };
    })();
    function mn(v) {
      var E = U(50 + Math.floor(v.length * 1.1)),
        _ = va(v, E);
      return E.slice(0, _);
    }
    var ni = re ? new Uint16Array(32768) : Tr(32768),
      ii = re ? new Uint16Array(32768) : Tr(32768),
      ai = re ? new Uint16Array(128) : Tr(128),
      Gt = 1,
      lt = 1;
    function ma(v, E) {
      var _ = Re(v, E) + 257;
      E += 5;
      var g = Re(v, E) + 1;
      E += 5;
      var T = Ir(v, E) + 4;
      E += 4;
      for (
        var w = 0,
          D = re ? new Uint8Array(19) : Tr(19),
          W = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          N = 1,
          P = re ? new Uint8Array(8) : Tr(8),
          L = re ? new Uint8Array(8) : Tr(8),
          K = D.length,
          te = 0;
        te < T;
        ++te
      )
        (D[A[te]] = w = xe(v, E)), N < w && (N = w), P[w]++, (E += 3);
      var fe = 0;
      for (P[0] = 0, te = 1; te <= N; ++te) L[te] = fe = (fe + P[te - 1]) << 1;
      for (te = 0; te < K; ++te) (fe = D[te]) != 0 && (W[te] = L[fe]++);
      var Y = 0;
      for (te = 0; te < K; ++te)
        if (((Y = D[te]), Y != 0)) {
          fe = ee[W[te]] >> (8 - Y);
          for (var ae = (1 << (7 - Y)) - 1; ae >= 0; --ae)
            ai[fe | (ae << Y)] = (Y & 7) | (te << 3);
        }
      var le = [];
      for (N = 1; le.length < _ + g; )
        switch (((fe = ai[se(v, E)]), (E += fe & 7), (fe >>>= 3))) {
          case 16:
            for (w = 3 + Pe(v, E), E += 2, fe = le[le.length - 1]; w-- > 0; )
              le.push(fe);
            break;
          case 17:
            for (w = 3 + xe(v, E), E += 3; w-- > 0; ) le.push(0);
            break;
          case 18:
            for (w = 11 + se(v, E), E += 7; w-- > 0; ) le.push(0);
            break;
          default:
            le.push(fe), N < fe && (N = fe);
            break;
        }
      var De = le.slice(0, _),
        ke = le.slice(_);
      for (te = _; te < 286; ++te) De[te] = 0;
      for (te = g; te < 30; ++te) ke[te] = 0;
      return (Gt = Wt(De, ni, 286)), (lt = Wt(ke, ii, 30)), E;
    }
    function Ll(v, E) {
      if (v[0] == 3 && !(v[1] & 3)) return [Dt(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = us(E || 1 << 18),
          w = 0,
          D = T.length >>> 0,
          W = 0,
          N = 0;
        (g & 1) == 0;

      ) {
        if (((g = xe(v, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((W = 9), (N = 5))
            : ((_ = ma(v, _)), (W = Gt), (N = lt));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var P = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), P > 0))
            for (
              !E && D < w + P && ((T = Ht(T, w + P)), (D = T.length));
              P-- > 0;

            )
              (T[w++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && D < w + 32767 && ((T = Ht(T, w + 32767)), (D = T.length));
          var L = Ge(v, _, W),
            K = g >>> 1 == 1 ? vn[L] : ni[L];
          if (((_ += K & 15), (K >>>= 4), ((K >>> 8) & 255) === 0)) T[w++] = K;
          else {
            if (K == 256) break;
            K -= 257;
            var te = K < 8 ? 0 : (K - 4) >> 2;
            te > 5 && (te = 0);
            var fe = w + b[K];
            te > 0 && ((fe += Ge(v, _, te)), (_ += te)),
              (L = Ge(v, _, N)),
              (K = g >>> 1 == 1 ? Vt[L] : ii[L]),
              (_ += K & 15),
              (K >>>= 4);
            var Y = K < 4 ? 0 : (K - 2) >> 1,
              ae = Q[K];
            for (
              Y > 0 && ((ae += Ge(v, _, Y)), (_ += Y)),
                !E && D < fe && ((T = Ht(T, fe + 100)), (D = T.length));
              w < fe;

            )
              (T[w] = T[w - ae]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function P0(v, E) {
      var _ = v.slice(v.l || 0),
        g = Ll(_, E);
      return (v.l += g[1]), g[0];
    }
    function L0(v, E) {
      if (v) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function B0(v, E) {
      var _ = v;
      Ar(_, 0);
      var g = [],
        T = [],
        w = { FileIndex: g, FullPaths: T };
      O(w, { root: E.root });
      for (
        var D = _.length - 4;
        (_[D] != 80 || _[D + 1] != 75 || _[D + 2] != 5 || _[D + 3] != 6) &&
        D >= 0;

      )
        --D;
      (_.l = D + 4), (_.l += 4);
      var W = _.read_shift(2);
      _.l += 6;
      var N = _.read_shift(4);
      for (_.l = N, D = 0; D < W; ++D) {
        _.l += 20;
        var P = _.read_shift(4),
          L = _.read_shift(4),
          K = _.read_shift(2),
          te = _.read_shift(2),
          fe = _.read_shift(2);
        _.l += 8;
        var Y = _.read_shift(4),
          ae = f(_.slice(_.l + K, _.l + K + te));
        _.l += K + te + fe;
        var le = _.l;
        (_.l = Y + 4), Bl(_, P, L, w, ae), (_.l = le);
      }
      return w;
    }
    function Bl(v, E, _, g, T) {
      v.l += 2;
      var w = v.read_shift(2),
        D = v.read_shift(2),
        W = s(v);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var N = v.read_shift(4),
          P = v.read_shift(4),
          L = v.read_shift(4),
          K = v.read_shift(2),
          te = v.read_shift(2),
          fe = '',
          Y = 0;
        Y < K;
        ++Y
      )
        fe += String.fromCharCode(v[v.l++]);
      if (te) {
        var ae = f(v.slice(v.l, v.l + te));
        (ae[21589] || {}).mt && (W = ae[21589].mt),
          ((T || {})[21589] || {}).mt && (W = T[21589].mt);
      }
      v.l += te;
      var le = v.slice(v.l, v.l + P);
      switch (D) {
        case 8:
          le = B(v, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + D);
      }
      var De = !1;
      w & 8 &&
        ((N = v.read_shift(4)),
        N == 134695760 && ((N = v.read_shift(4)), (De = !0)),
        (P = v.read_shift(4)),
        (L = v.read_shift(4))),
        P != E && L0(De, 'Bad compressed size: ' + E + ' != ' + P),
        L != _ && L0(De, 'Bad uncompressed size: ' + _ + ' != ' + L),
        _a(g, fe, le, { unsafe: !0, mt: W });
    }
    function Ml(v, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = U(1),
        D = _.compression ? 8 : 0,
        W = 0,
        N = 0,
        P = 0,
        L = 0,
        K = 0,
        te = v.FullPaths[0],
        fe = te,
        Y = v.FileIndex[0],
        ae = [],
        le = 0;
      for (N = 1; N < v.FullPaths.length; ++N)
        if (
          ((fe = v.FullPaths[N].slice(te.length)),
          (Y = v.FileIndex[N]),
          !(!Y.size || !Y.content || fe == 'Sh33tJ5'))
        ) {
          var De = L,
            ke = U(fe.length);
          for (P = 0; P < fe.length; ++P)
            ke.write_shift(1, fe.charCodeAt(P) & 127);
          (ke = ke.slice(0, ke.l)), (ae[K] = T1.buf(Y.content, 0));
          var er = Y.content;
          D == 8 && (er = R(er)),
            (w = U(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, W),
            w.write_shift(2, D),
            Y.mt ? a(w, Y.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ae[K]),
            w.write_shift(4, er.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, ke.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += ke.length),
            g.push(ke),
            (L += er.length),
            g.push(er),
            (w = U(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, W),
            w.write_shift(2, D),
            w.write_shift(4, 0),
            w.write_shift(-4, ae[K]),
            w.write_shift(4, er.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, ke.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, De),
            (le += w.l),
            T.push(w),
            (le += ke.length),
            T.push(ke),
            ++K;
        }
      return (
        (w = U(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, K),
        w.write_shift(2, K),
        w.write_shift(4, le),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        qe([qe(g), qe(T), w])
      );
    }
    var si = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function bl(v, E) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && si[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && si[g[1]]))
        ? si[g[1]]
        : 'application/octet-stream';
    }
    function Ul(v) {
      for (var E = Hn(v), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function Hl(v) {
      var E = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (P) {
          var L = P.charCodeAt(0).toString(16).toUpperCase();
          return '=' + (L.length == 1 ? '0' + L : L);
        },
      );
      (E = E.replace(/ $/gm, '=20').replace(/\t$/gm, '=09')),
        E.charAt(0) ==
          `
` && (E = '=0D' + E.slice(1)),
        (E = E.replace(/\r(?!\n)/gm, '=0D')
          .replace(
            /\n\n/gm,
            `
=0A`,
          )
          .replace(/([^\r\n])\n/gm, '$1=0A'));
      for (
        var _ = [],
          g = E.split(`\r
`),
          T = 0;
        T < g.length;
        ++T
      ) {
        var w = g[T];
        if (w.length == 0) {
          _.push('');
          continue;
        }
        for (var D = 0; D < w.length; ) {
          var W = 76,
            N = w.slice(D, D + W);
          N.charAt(W - 1) == '='
            ? W--
            : N.charAt(W - 2) == '='
              ? (W -= 2)
              : N.charAt(W - 3) == '=' && (W -= 3),
            (N = w.slice(D, D + W)),
            (D += W),
            D < w.length && (N += '='),
            _.push(N);
        }
      }
      return _.join(`\r
`);
    }
    function Wl(v) {
      for (var E = [], _ = 0; _ < v.length; ++_) {
        for (var g = v[_]; _ <= v.length && g.charAt(g.length - 1) == '='; )
          g = g.slice(0, g.length - 1) + v[++_];
        E.push(g);
      }
      for (var T = 0; T < E.length; ++T)
        E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return Br(
        E.join(`\r
`),
      );
    }
    function Vl(v, E, _) {
      for (var g = '', T = '', w = '', D, W = 0; W < 10; ++W) {
        var N = E[W];
        if (!N || N.match(/^\s*$/)) break;
        var P = N.match(/^(.*?):\s*([^\s].*)$/);
        if (P)
          switch (P[1].toLowerCase()) {
            case 'content-location':
              g = P[2].trim();
              break;
            case 'content-type':
              w = P[2].trim();
              break;
            case 'content-transfer-encoding':
              T = P[2].trim();
              break;
          }
      }
      switch ((++W, T.toLowerCase())) {
        case 'base64':
          D = Br(at(E.slice(W).join('')));
          break;
        case 'quoted-printable':
          D = Wl(E.slice(W));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = _a(v, g.slice(_.length), D, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function Gl(v, E) {
      if (Me(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (ve && Buffer.isBuffer(v) ? v.toString('binary') : Me(v)).split(`\r
`),
        T = 0,
        w = '';
      for (T = 0; T < g.length; ++T)
        if (
          ((w = g[T]),
          !!/^Content-Location:/i.test(w) &&
            ((w = w.slice(w.indexOf('file'))),
            _ || (_ = w.slice(0, w.lastIndexOf('/') + 1)),
            w.slice(0, _.length) != _))
        )
          for (
            ;
            _.length > 0 &&
            ((_ = _.slice(0, _.length - 1)),
            (_ = _.slice(0, _.lastIndexOf('/') + 1)),
            w.slice(0, _.length) != _);

          );
      var D = (g[1] || '').match(/boundary="(.*?)"/);
      if (!D) throw new Error('MAD cannot find boundary');
      var W = '--' + (D[1] || ''),
        N = [],
        P = [],
        L = { FileIndex: N, FullPaths: P };
      O(L);
      var K,
        te = 0;
      for (T = 0; T < g.length; ++T) {
        var fe = g[T];
        (fe !== W && fe !== W + '--') ||
          (te++ && Vl(L, g.slice(K, T), _), (K = T));
      }
      return L;
    }
    function jl(v, E) {
      var _ = E || {},
        g = _.boundary || 'SheetJS';
      g = '------=' + g;
      for (
        var T = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/related; boundary="' + g.slice(2) + '"',
            '',
            '',
            '',
          ],
          w = v.FullPaths[0],
          D = w,
          W = v.FileIndex[0],
          N = 1;
        N < v.FullPaths.length;
        ++N
      )
        if (
          ((D = v.FullPaths[N].slice(w.length)),
          (W = v.FileIndex[N]),
          !(!W.size || !W.content || D == 'Sh33tJ5'))
        ) {
          D = D.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (le) {
              return '_x' + le.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (le) {
            return '_u' + le.charCodeAt(0).toString(16) + '_';
          });
          for (
            var P = W.content,
              L = ve && Buffer.isBuffer(P) ? P.toString('binary') : Me(P),
              K = 0,
              te = Math.min(1024, L.length),
              fe = 0,
              Y = 0;
            Y <= te;
            ++Y
          )
            (fe = L.charCodeAt(Y)) >= 32 && fe < 128 && ++K;
          var ae = K >= (te * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + D,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (ae ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + bl(W, D)),
            T.push(''),
            T.push(ae ? Hl(L) : Ul(L));
        }
      return (
        T.push(
          g +
            `--\r
`,
        ),
        T.join(`\r
`)
      );
    }
    function Xl(v) {
      var E = {};
      return O(E, v), E;
    }
    function _a(v, E, _, g) {
      var T = g && g.unsafe;
      T || O(v);
      var w = !T && Se.find(v, E);
      if (!w) {
        var D = v.FullPaths[0];
        E.slice(0, D.length) == D
          ? (D = E)
          : (D.slice(-1) != '/' && (D += '/'),
            (D = (D + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          v.FileIndex.push(w),
          v.FullPaths.push(D),
          T || Se.utils.cfb_gc(v);
      }
      return (
        (w.content = _),
        (w.size = _ ? _.length : 0),
        g &&
          (g.CLSID && (w.clsid = g.CLSID),
          g.mt && (w.mt = g.mt),
          g.ct && (w.ct = g.ct)),
        w
      );
    }
    function $l(v, E) {
      O(v);
      var _ = Se.find(v, E);
      if (_) {
        for (var g = 0; g < v.FileIndex.length; ++g)
          if (v.FileIndex[g] == _)
            return v.FileIndex.splice(g, 1), v.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function zl(v, E, _) {
      O(v);
      var g = Se.find(v, E);
      if (g) {
        for (var T = 0; T < v.FileIndex.length; ++T)
          if (v.FileIndex[T] == g)
            return (v.FileIndex[T].name = i(_)), (v.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function Kl(v) {
      I(v, !0);
    }
    return (
      (t.find = X),
      (t.read = q),
      (t.parse = c),
      (t.write = ar),
      (t.writeFile = hr),
      (t.utils = {
        cfb_new: Xl,
        cfb_add: _a,
        cfb_del: $l,
        cfb_mov: zl,
        cfb_gc: Kl,
        ReadShift: Dn,
        CheckField: Io,
        prep_blob: Ar,
        bconcat: qe,
        use_zlib: y,
        _deflateRaw: mn,
        _inflateRaw: P0,
        consts: Oe,
      }),
      t
    );
  })();
function w1(e) {
  return typeof e == 'string' ? oa(e) : Array.isArray(e) ? Kh(e) : e;
}
function Zn(e, t, r) {
  if (typeof Deno < 'u') {
    if (r && typeof t == 'string')
      switch (r) {
        case 'utf8':
          t = new TextEncoder(r).encode(t);
          break;
        case 'binary':
          t = oa(t);
          break;
        default:
          throw new Error('Unsupported encoding ' + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == 'utf8' ? Vn(t) : t;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e);
  if (typeof Blob < 'u') {
    var i = new Blob([w1(n)], { type: 'application/octet-stream' });
    if (typeof navigator < 'u' && navigator.msSaveBlob)
      return navigator.msSaveBlob(i, e);
    if (typeof saveAs < 'u') return saveAs(i, e);
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
          chrome.downloads.download({ url: a, filename: e, saveAs: !0 })
        );
      var s = document.createElement('a');
      if (s.download != null)
        return (
          (s.download = e),
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
      var f = File(e);
      return (
        f.open('w'),
        (f.encoding = 'binary'),
        Array.isArray(t) && (t = Jn(t)),
        f.write(t),
        f.close(),
        t
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function Qe(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function gs(e, t) {
  for (var r = [], n = Qe(e), i = 0; i !== n.length; ++i)
    r[e[n[i]][t]] == null && (r[e[n[i]][t]] = n[i]);
  return r;
}
function p0(e) {
  for (var t = [], r = Qe(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function ua(e) {
  for (var t = [], r = Qe(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function S1(e) {
  for (var t = [], r = Qe(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var Ui = new Date(1899, 11, 30, 0, 0, 0);
function _r(e, t) {
  var r = e.getTime(),
    n = Ui.getTime() + (e.getTimezoneOffset() - Ui.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var vo = new Date(),
  A1 = Ui.getTime() + (vo.getTimezoneOffset() - Ui.getTimezoneOffset()) * 6e4,
  Es = vo.getTimezoneOffset();
function mo(e) {
  var t = new Date();
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + A1),
    t.getTimezoneOffset() !== Es &&
      t.setTime(t.getTime() + (t.getTimezoneOffset() - Es) * 6e4),
    t
  );
}
var Ts = new Date('2017-02-19T19:06:09.000Z'),
  _o = isNaN(Ts.getFullYear()) ? new Date('2/19/17') : Ts,
  y1 = _o.getFullYear() == 2017;
function ur(e, t) {
  var r = new Date(e);
  if (y1)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    );
  if (e instanceof Date) return e;
  if (_o.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf('' + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var i = e.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    a = new Date(+i[0], +i[1] - 1, +i[2], +i[3] || 0, +i[4] || 0, +i[5] || 0);
  return (
    e.indexOf('Z') > -1 &&
      (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)),
    a
  );
}
function ha(e, t) {
  if (ve && Buffer.isBuffer(e)) return e.toString('binary');
  if (typeof TextDecoder < 'u')
    try {
      var r = {
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
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder('latin1')
          .decode(e)
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (a) {
            return r[a] || a;
          })
      );
    } catch {}
  for (var n = [], i = 0; i != e.length; ++i) n.push(String.fromCharCode(e[i]));
  return n.join('');
}
function gr(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = gr(e[r]));
  return t;
}
function Le(e, t) {
  for (var r = ''; r.length < t; ) r += e;
  return r;
}
function nt(e) {
  var t = Number(e);
  if (!isNaN(t)) return isFinite(t) ? t : NaN;
  if (!/\d/.test(e)) return t;
  var r = 1,
    n = e
      .replace(/([\d]),([\d])/g, '$1$2')
      .replace(/[$]/g, '')
      .replace(/[%]/g, function () {
        return (r *= 100), '';
      });
  return !isNaN((t = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (i, a) {
      return (r = -r), a;
    })),
    !isNaN((t = Number(n))))
    ? t / r
    : t;
}
var F1 = [
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
function Wn(e) {
  var t = new Date(e),
    r = new Date(NaN),
    n = t.getYear(),
    i = t.getMonth(),
    a = t.getDate();
  if (isNaN(a)) return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
      s.length > 3 && F1.indexOf(s) == -1)
    )
      return r;
  } else if (s.match(/[a-z]/)) return r;
  return n < 0 || n > 8099
    ? r
    : (i > 0 || a > 1) && n != 101
      ? t
      : e.match(/[^-0-9:,\/\\]/)
        ? r
        : t;
}
function ue(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == 'string') {
      var n;
      return ve ? (n = ot(r)) : (n = Yh(r)), Se.utils.cfb_add(e, t, n);
    }
    Se.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function v0() {
  return Se.utils.cfb_new();
}
var He = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  C1 = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  m0 = p0(C1),
  _0 = /[&<>'"]/g,
  O1 = /[\u0000-\u0008\u000b-\u001f]/g;
function Ee(e) {
  var t = e + '';
  return t
    .replace(_0, function (r) {
      return m0[r];
    })
    .replace(O1, function (r) {
      return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function ws(e) {
  return Ee(e).replace(/ /g, '_x0020_');
}
var go = /[\u0000-\u001f]/g;
function R1(e) {
  var t = e + '';
  return t
    .replace(_0, function (r) {
      return m0[r];
    })
    .replace(/\n/g, '<br/>')
    .replace(go, function (r) {
      return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function N1(e) {
  var t = e + '';
  return t
    .replace(_0, function (r) {
      return m0[r];
    })
    .replace(go, function (r) {
      return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function D1(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function k1(e) {
  switch (e) {
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
function Oa(e) {
  for (var t = '', r = 0, n = 0, i = 0, a = 0, s = 0, f = 0; r < e.length; ) {
    if (((n = e.charCodeAt(r++)), n < 128)) {
      t += String.fromCharCode(n);
      continue;
    }
    if (((i = e.charCodeAt(r++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= i & 63), (t += String.fromCharCode(s));
      continue;
    }
    if (((a = e.charCodeAt(r++)), n < 240)) {
      t += String.fromCharCode(((n & 15) << 12) | ((i & 63) << 6) | (a & 63));
      continue;
    }
    (s = e.charCodeAt(r++)),
      (f =
        (((n & 7) << 18) | ((i & 63) << 12) | ((a & 63) << 6) | (s & 63)) -
        65536),
      (t += String.fromCharCode(55296 + ((f >>> 10) & 1023))),
      (t += String.fromCharCode(56320 + (f & 1023)));
  }
  return t;
}
function Ss(e) {
  var t = Dt(2 * e.length),
    r,
    n,
    i = 1,
    a = 0,
    s = 0,
    f;
  for (n = 0; n < e.length; n += i)
    (i = 1),
      (f = e.charCodeAt(n)) < 128
        ? (r = f)
        : f < 224
          ? ((r = (f & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (i = 2))
          : f < 240
            ? ((r =
                (f & 15) * 4096 +
                (e.charCodeAt(n + 1) & 63) * 64 +
                (e.charCodeAt(n + 2) & 63)),
              (i = 3))
            : ((i = 4),
              (r =
                (f & 7) * 262144 +
                (e.charCodeAt(n + 1) & 63) * 4096 +
                (e.charCodeAt(n + 2) & 63) * 64 +
                (e.charCodeAt(n + 3) & 63)),
              (r -= 65536),
              (s = 55296 + ((r >>> 10) & 1023)),
              (r = 56320 + (r & 1023))),
      s !== 0 && ((t[a++] = s & 255), (t[a++] = s >>> 8), (s = 0)),
      (t[a++] = r % 256),
      (t[a++] = r >>> 8);
  return t.slice(0, a).toString('ucs2');
}
function As(e) {
  return ot(e, 'binary').toString('utf8');
}
var hi = 'foo bar bazâð£',
  Nn = (ve && ((As(hi) == Oa(hi) && As) || (Ss(hi) == Oa(hi) && Ss))) || Oa,
  Vn = ve
    ? function (e) {
        return ot(e, 'utf8').toString('binary');
      }
    : function (e) {
        for (var t = [], r = 0, n = 0, i = 0; r < e.length; )
          switch (((n = e.charCodeAt(r++)), !0)) {
            case n < 128:
              t.push(String.fromCharCode(n));
              break;
            case n < 2048:
              t.push(String.fromCharCode(192 + (n >> 6))),
                t.push(String.fromCharCode(128 + (n & 63)));
              break;
            case n >= 55296 && n < 57344:
              (n -= 55296),
                (i = e.charCodeAt(r++) - 56320 + (n << 10)),
                t.push(String.fromCharCode(240 + ((i >> 18) & 7))),
                t.push(String.fromCharCode(144 + ((i >> 12) & 63))),
                t.push(String.fromCharCode(128 + ((i >> 6) & 63))),
                t.push(String.fromCharCode(128 + (i & 63)));
              break;
            default:
              t.push(String.fromCharCode(224 + (n >> 12))),
                t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                t.push(String.fromCharCode(128 + (n & 63)));
          }
        return t.join('');
      },
  I1 = (function () {
    var e = [
      ['nbsp', ' '],
      ['middot', '·'],
      ['quot', '"'],
      ['apos', "'"],
      ['gt', '>'],
      ['lt', '<'],
      ['amp', '&'],
    ].map(function (t) {
      return [new RegExp('&' + t[0] + ';', 'ig'), t[1]];
    });
    return function (r) {
      for (
        var n = r
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
        i < e.length;
        ++i
      )
        n = n.replace(e[i][0], e[i][1]);
      return n;
    };
  })(),
  Eo = /(^\s|\s$|\n)/;
function Je(e, t) {
  return (
    '<' +
    e +
    (t.match(Eo) ? ' xml:space="preserve"' : '') +
    '>' +
    t +
    '</' +
    e +
    '>'
  );
}
function Gn(e) {
  return Qe(e)
    .map(function (t) {
      return ' ' + t + '="' + e[t] + '"';
    })
    .join('');
}
function J(e, t, r) {
  return (
    '<' +
    e +
    (r != null ? Gn(r) : '') +
    (t != null
      ? (t.match(Eo) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e
      : '/') +
    '>'
  );
}
function Ka(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, '');
  } catch (r) {
    if (t) throw r;
  }
  return '';
}
function P1(e, t) {
  switch (typeof e) {
    case 'string':
      var r = J('vt:lpwstr', Ee(e));
      return (r = r.replace(/&quot;/g, '_x0022_')), r;
    case 'number':
      return J((e | 0) == e ? 'vt:i4' : 'vt:r8', Ee(String(e)));
    case 'boolean':
      return J('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return J('vt:filetime', Ka(e));
  throw new Error('Unable to serialize ' + e);
}
var je = {
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
  hn = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  yr = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function L1(e, t) {
  for (
    var r = 1 - 2 * (e[t + 7] >>> 7),
      n = ((e[t + 7] & 127) << 4) + ((e[t + 6] >>> 4) & 15),
      i = e[t + 6] & 15,
      a = 5;
    a >= 0;
    --a
  )
    i = i * 256 + e[t + a];
  return n == 2047
    ? i == 0
      ? r * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (i += Math.pow(2, 52))),
      r * Math.pow(2, n - 52) * i);
}
function B1(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
    i = 0,
    a = 0,
    s = n ? -t : t;
  isFinite(s)
    ? s == 0
      ? (i = a = 0)
      : ((i = Math.floor(Math.log(s) / Math.LN2)),
        (a = s * Math.pow(2, 52 - i)),
        i <= -1023 && (!isFinite(a) || a < Math.pow(2, 52))
          ? (i = -1022)
          : ((a -= Math.pow(2, 52)), (i += 1023)))
    : ((i = 2047), (a = isNaN(t) ? 26985 : 0));
  for (var f = 0; f <= 5; ++f, a /= 256) e[r + f] = a & 255;
  (e[r + 6] = ((i & 15) << 4) | (a & 15)), (e[r + 7] = (i >> 4) | n);
}
var ys = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += r)
          t.push.apply(t, e[0][n].slice(i, i + r));
    return t;
  },
  Fs = ve
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : ot(t);
              }),
            )
          : ys(e);
      }
    : ys,
  Cs = function (e, t, r) {
    for (var n = [], i = t; i < r; i += 2)
      n.push(String.fromCharCode(yn(e, i)));
    return n.join('').replace(Rn, '');
  },
  g0 = ve
    ? function (e, t, r) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', t, r).replace(Rn, '')
          : Cs(e, t, r);
      }
    : Cs,
  Os = function (e, t, r) {
    for (var n = [], i = t; i < t + r; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  To = ve
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : Os(e, t, r);
      }
    : Os,
  Rs = function (e, t, r) {
    for (var n = [], i = t; i < r; i++) n.push(String.fromCharCode(Qt(e, i)));
    return n.join('');
  },
  Qn = ve
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : Rs(t, r, n);
      }
    : Rs,
  wo = function (e, t) {
    var r = Fr(e, t);
    return r > 0 ? Qn(e, t + 4, t + 4 + r - 1) : '';
  },
  So = wo,
  Ao = function (e, t) {
    var r = Fr(e, t);
    return r > 0 ? Qn(e, t + 4, t + 4 + r - 1) : '';
  },
  yo = Ao,
  Fo = function (e, t) {
    var r = 2 * Fr(e, t);
    return r > 0 ? Qn(e, t + 4, t + 4 + r - 1) : '';
  },
  Co = Fo,
  Oo = function (t, r) {
    var n = Fr(t, r);
    return n > 0 ? g0(t, r + 4, r + 4 + n) : '';
  },
  Ro = Oo,
  No = function (e, t) {
    var r = Fr(e, t);
    return r > 0 ? Qn(e, t + 4, t + 4 + r) : '';
  },
  Do = No,
  ko = function (e, t) {
    return L1(e, t);
  },
  Hi = ko,
  E0 = function (t) {
    return (
      Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  };
ve &&
  ((So = function (t, r) {
    if (!Buffer.isBuffer(t)) return wo(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (yo = function (t, r) {
    if (!Buffer.isBuffer(t)) return Ao(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (Co = function (t, r) {
    if (!Buffer.isBuffer(t)) return Fo(t, r);
    var n = 2 * t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n - 1);
  }),
  (Ro = function (t, r) {
    if (!Buffer.isBuffer(t)) return Oo(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n);
  }),
  (Do = function (t, r) {
    if (!Buffer.isBuffer(t)) return No(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf8', r + 4, r + 4 + n);
  }),
  (Hi = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : ko(t, r);
  }),
  (E0 = function (t) {
    return (
      Buffer.isBuffer(t) ||
      Array.isArray(t) ||
      (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  }));
var Qt = function (e, t) {
    return e[t];
  },
  yn = function (e, t) {
    return e[t + 1] * 256 + e[t];
  },
  M1 = function (e, t) {
    var r = e[t + 1] * 256 + e[t];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  Fr = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
  },
  yt = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
  },
  b1 = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
  };
function Dn(e, t) {
  var r = '',
    n,
    i,
    a = [],
    s,
    f,
    l,
    o;
  switch (t) {
    case 'dbcs':
      if (((o = this.l), ve && Buffer.isBuffer(this)))
        r = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (r += String.fromCharCode(yn(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      r = Qn(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (r = g0(this, this.l, this.l + e));
      break;
    case 'wstr':
      return Dn.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (r = So(this, this.l)), (e = 4 + Fr(this, this.l));
      break;
    case 'lpstr-cp':
      (r = yo(this, this.l)), (e = 4 + Fr(this, this.l));
      break;
    case 'lpwstr':
      (r = Co(this, this.l)), (e = 4 + 2 * Fr(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + Fr(this, this.l)), (r = Ro(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + Fr(this, this.l)),
        (r = Do(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, r = ''; (s = Qt(this, this.l + e++)) !== 0; ) a.push(li(s));
      r = a.join('');
      break;
    case '_wstr':
      for (e = 0, r = ''; (s = yn(this, this.l + e)) !== 0; )
        a.push(li(s)), (e += 2);
      (e += 2), (r = a.join(''));
      break;
    case 'dbcs-cont':
      for (r = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = Qt(this, o)),
            (this.l = o + 1),
            (f = Dn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(li(yn(this, o))), (o += 2);
      }
      (r = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (r = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = Qt(this, o)),
            (this.l = o + 1),
            (f = Dn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(li(Qt(this, o))), (o += 1);
      }
      r = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = Qt(this, this.l)), this.l++, n;
        case 2:
          return (n = (t === 'i' ? M1 : yn)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return t === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? yt : b1)(this, this.l)), (this.l += 4), n)
            : ((i = Fr(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (t === 'f')
            return (
              e == 8
                ? (i = Hi(this, this.l))
                : (i = Hi(
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
          e = 8;
        case 16:
          r = To(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var U1 = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255);
  },
  H1 = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255);
  },
  W1 = function (e, t, r) {
    (e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255);
  };
function V1(e, t, r) {
  var n = 0,
    i = 0;
  if (r === 'dbcs') {
    for (i = 0; i != t.length; ++i) W1(this, t.charCodeAt(i), this.l + 2 * i);
    n = 2 * t.length;
  } else if (r === 'sbcs') {
    for (t = t.replace(/[^\x00-\x7F]/g, '_'), i = 0; i != t.length; ++i)
      this[this.l + i] = t.charCodeAt(i) & 255;
    n = t.length;
  } else if (r === 'hex') {
    for (; i < e; ++i)
      this[this.l++] = parseInt(t.slice(2 * i, 2 * i + 2), 16) || 0;
    return this;
  } else if (r === 'utf16le') {
    var a = Math.min(this.l + e, this.length);
    for (i = 0; i < Math.min(t.length, e); ++i) {
      var s = t.charCodeAt(i);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < a; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        (n = 1), (this[this.l] = t & 255);
        break;
      case 2:
        (n = 2),
          (this[this.l] = t & 255),
          (t >>>= 8),
          (this[this.l + 1] = t & 255);
        break;
      case 3:
        (n = 3),
          (this[this.l] = t & 255),
          (t >>>= 8),
          (this[this.l + 1] = t & 255),
          (t >>>= 8),
          (this[this.l + 2] = t & 255);
        break;
      case 4:
        (n = 4), U1(this, t, this.l);
        break;
      case 8:
        if (((n = 8), r === 'f')) {
          B1(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), H1(this, t, this.l);
        break;
    }
  return (this.l += n), this;
}
function Io(e, t) {
  var r = To(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r);
  this.l += e.length >> 1;
}
function Ar(e, t) {
  (e.l = t), (e.read_shift = Dn), (e.chk = Io), (e.write_shift = V1);
}
function Yr(e, t) {
  e.l += t;
}
function U(e) {
  var t = Dt(e);
  return Ar(t, 0), t;
}
function vr() {
  var e = [],
    t = ve ? 256 : 2048,
    r = function (o) {
      var c = U(o);
      return Ar(c, 0), c;
    },
    n = r(t),
    i = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && e.push(n),
        (n = null));
    },
    a = function (o) {
      return n && o < n.length - n.l ? n : (i(), (n = r(Math.max(o + 1, t))));
    },
    s = function () {
      return i(), qe(e);
    },
    f = function (o) {
      i(), (n = o), n.l == null && (n.l = n.length), a(t);
    };
  return { next: a, push: f, end: s, _bufs: e };
}
function j(e, t, r, n) {
  var i = +t,
    a;
  if (!isNaN(i)) {
    n || (n = Lm[i].p || (r || []).length || 0),
      (a = 1 + (i >= 128 ? 1 : 0) + 1),
      n >= 128 && ++a,
      n >= 16384 && ++a,
      n >= 2097152 && ++a;
    var s = e.next(a);
    i <= 127
      ? s.write_shift(1, i)
      : (s.write_shift(1, (i & 127) + 128), s.write_shift(1, i >> 7));
    for (var f = 0; f != 4; ++f)
      if (n >= 128) s.write_shift(1, (n & 127) + 128), (n >>= 7);
      else {
        s.write_shift(1, n);
        break;
      }
    n > 0 && E0(r) && e.push(r);
  }
}
function kn(e, t, r) {
  var n = gr(e);
  if (
    (t.s
      ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r))
      : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)),
    !r || r.biff < 12)
  ) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function Ns(e, t, r) {
  var n = gr(e);
  return (n.s = kn(n.s, t.s, r)), (n.e = kn(n.e, t.s, r)), n;
}
function In(e, t) {
  if (e.cRel && e.c < 0) for (e = gr(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = gr(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = Te(e);
  return (
    !e.cRel && e.cRel != null && (r = X1(r)),
    !e.rRel && e.rRel != null && (r = G1(r)),
    r
  );
}
function Ra(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        nr(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        nr(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (t.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        Ze(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        Ze(e.e.r)
      : In(e.s, t.biff) + ':' + In(e.e, t.biff);
}
function T0(e) {
  return parseInt(j1(e), 10) - 1;
}
function Ze(e) {
  return '' + (e + 1);
}
function G1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function j1(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function w0(e) {
  for (var t = $1(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function nr(e) {
  if (e < 0) throw new Error('invalid column ' + e);
  var t = '';
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode(((e - 1) % 26) + 65) + t;
  return t;
}
function X1(e) {
  return e.replace(/^([A-Z])/, '$$$1');
}
function $1(e) {
  return e.replace(/^\$([A-Z])/, '$1');
}
function z1(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function Xe(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (t = 10 * t + (i - 48))
      : i >= 65 && i <= 90 && (r = 26 * r + (i - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function Te(e) {
  for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function Or(e) {
  var t = e.indexOf(':');
  return t == -1
    ? { s: Xe(e), e: Xe(e) }
    : { s: Xe(e.slice(0, t)), e: Xe(e.slice(t + 1)) };
}
function Ue(e, t) {
  return typeof t > 'u' || typeof t == 'number'
    ? Ue(e.s, e.e)
    : (typeof e != 'string' && (e = Te(e)),
      typeof t != 'string' && (t = Te(t)),
      e == t ? e : e + ':' + t);
}
function Ce(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    r = 0,
    n = 0,
    i = 0,
    a = e.length;
  for (r = 0; n < a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    r = 26 * r + i;
  for (
    t.s.c = --r, r = 0;
    n < a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    r = 10 * r + i;
  if (((t.s.r = --r), n === a || i != 10))
    return (t.e.c = t.s.c), (t.e.r = t.s.r), t;
  for (++n, r = 0; n != a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    r = 26 * r + i;
  for (
    t.e.c = --r, r = 0;
    n != a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    r = 10 * r + i;
  return (t.e.r = --r), t;
}
function Ds(e, t) {
  var r = e.t == 'd' && t instanceof Date;
  if (e.z != null)
    try {
      return (e.w = gt(e.z, r ? _r(t) : t));
    } catch {}
  try {
    return (e.w = gt((e.XF || {}).numFmtId || (r ? 14 : 0), r ? _r(t) : t));
  } catch {
    return '' + t;
  }
}
function st(e, t, r) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
        e.t == 'e' ? ei[e.v] || e.v : t == null ? Ds(e, e.v) : Ds(e, t));
}
function Lt(e, t) {
  var r = t && t.sheet ? t.sheet : 'Sheet1',
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function Po(e, t, r) {
  var n = r || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Xe(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = Ce(a['!ref']);
    (o.s.c = c.s.c),
      (o.s.r = c.s.r),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      s == -1 && (o.e.r = s = c.e.r + 1);
  }
  for (var u = 0; u != t.length; ++u)
    if (t[u]) {
      if (!Array.isArray(t[u]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var h = 0; h != t[u].length; ++h)
        if (!(typeof t[u][h] > 'u')) {
          var d = { v: t[u][h] },
            p = s + u,
            x = f + h;
          if (
            (o.s.r > p && (o.s.r = p),
            o.s.c > x && (o.s.c = x),
            o.e.r < p && (o.e.r = p),
            o.e.c < x && (o.e.c = x),
            t[u][h] &&
              typeof t[u][h] == 'object' &&
              !Array.isArray(t[u][h]) &&
              !(t[u][h] instanceof Date))
          )
            d = t[u][h];
          else if (
            (Array.isArray(d.v) && ((d.f = t[u][h][1]), (d.v = d.v[0])),
            d.v === null)
          )
            if (d.f) d.t = 'n';
            else if (n.nullError) (d.t = 'e'), (d.v = 0);
            else if (n.sheetStubs) d.t = 'z';
            else continue;
          else
            typeof d.v == 'number'
              ? (d.t = 'n')
              : typeof d.v == 'boolean'
                ? (d.t = 'b')
                : d.v instanceof Date
                  ? ((d.z = n.dateNF || Be[14]),
                    n.cellDates
                      ? ((d.t = 'd'), (d.w = gt(d.z, _r(d.v))))
                      : ((d.t = 'n'), (d.v = _r(d.v)), (d.w = gt(d.z, d.v))))
                  : (d.t = 's');
          if (i)
            a[p] || (a[p] = []),
              a[p][x] && a[p][x].z && (d.z = a[p][x].z),
              (a[p][x] = d);
          else {
            var m = Te({ c: x, r: p });
            a[m] && a[m].z && (d.z = a[m].z), (a[m] = d);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = Ue(o)), a;
}
function xn(e, t) {
  return Po(null, e, t);
}
function K1(e) {
  return e.read_shift(4, 'i');
}
function br(e, t) {
  return t || (t = U(4)), t.write_shift(4, e), t;
}
function ir(e) {
  var t = e.read_shift(4);
  return t === 0 ? '' : e.read_shift(t, 'dbcs');
}
function $e(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
function Y1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function q1(e, t) {
  return t || (t = U(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function S0(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    i = ir(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(Y1(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + t), s;
}
function J1(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    $e(e.t, t),
    r ? t.slice(0, t.l) : t
  );
}
var Z1 = S0;
function Q1(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    $e(e.t, t),
    t.write_shift(4, 1),
    q1({}, t),
    r ? t.slice(0, t.l) : t
  );
}
function kr(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r };
}
function Bt(e, t) {
  return (
    t == null && (t = U(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
function Mt(e) {
  var t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t };
}
function bt(e, t) {
  return (
    t == null && (t = U(4)),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
var ex = ir,
  Lo = $e;
function A0(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs');
}
function Wi(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
var rx = ir,
  Ya = A0,
  y0 = Wi;
function Bo(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? Hi([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : yt(t, 0) >> 2;
  return r ? i / 100 : i;
}
function Mo(e, t) {
  t == null && (t = U(4));
  var r = 0,
    n = 0,
    i = e * 100;
  if (
    (e == (e | 0) && e >= -536870912 && e < 1 << 29
      ? (n = 1)
      : i == (i | 0) && i >= -536870912 && i < 1 << 29 && ((n = 1), (r = 1)),
    n)
  )
    t.write_shift(-4, ((r ? i : e) << 2) + (r + 2));
  else throw new Error('unsupported RkNumber ' + e);
}
function bo(e) {
  var t = { s: {}, e: {} };
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  );
}
function tx(e, t) {
  return (
    t || (t = U(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  );
}
var Ut = bo,
  dn = tx;
function pn(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function kt(e, t) {
  return (t || U(8)).write_shift(8, e, 'f');
}
function nx(e) {
  var t = {},
    r = e.read_shift(1),
    n = r >>> 1,
    i = e.read_shift(1),
    a = e.read_shift(2, 'i'),
    s = e.read_shift(1),
    f = e.read_shift(1),
    l = e.read_shift(1);
  switch ((e.l++, n)) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = i;
      var o = hx[i];
      o && (t.rgb = Vs(o));
      break;
    case 2:
      t.rgb = Vs([s, f, l]);
      break;
    case 3:
      t.theme = i;
      break;
  }
  return a != 0 && (t.tint = a > 0 ? a / 32767 : a / 32768), t;
}
function Vi(e, t) {
  if ((t || (t = U(8)), !e || e.auto))
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null
    ? (t.write_shift(1, 2), t.write_shift(1, e.index))
    : e.theme != null
      ? (t.write_shift(1, 6), t.write_shift(1, e.theme))
      : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (
    (r > 0 ? (r *= 32767) : r < 0 && (r *= 32768),
    t.write_shift(2, r),
    !e.rgb || e.theme != null)
  )
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || 'FFFFFF';
    typeof n == 'number' && (n = ('000000' + n.toString(16)).slice(-6)),
      t.write_shift(1, parseInt(n.slice(0, 2), 16)),
      t.write_shift(1, parseInt(n.slice(2, 4), 16)),
      t.write_shift(1, parseInt(n.slice(4, 6), 16)),
      t.write_shift(1, 255);
  }
  return t;
}
function ix(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128,
  };
  return r;
}
function ax(e, t) {
  t || (t = U(2));
  var r =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var Uo = 2,
  Sr = 3,
  xi = 11,
  Gi = 19,
  di = 64,
  sx = 65,
  fx = 71,
  ox = 4108,
  lx = 4126,
  Ye = 80,
  ks = {
    1: { n: 'CodePage', t: Uo },
    2: { n: 'Category', t: Ye },
    3: { n: 'PresentationFormat', t: Ye },
    4: { n: 'ByteCount', t: Sr },
    5: { n: 'LineCount', t: Sr },
    6: { n: 'ParagraphCount', t: Sr },
    7: { n: 'SlideCount', t: Sr },
    8: { n: 'NoteCount', t: Sr },
    9: { n: 'HiddenCount', t: Sr },
    10: { n: 'MultimediaClipCount', t: Sr },
    11: { n: 'ScaleCrop', t: xi },
    12: { n: 'HeadingPairs', t: ox },
    13: { n: 'TitlesOfParts', t: lx },
    14: { n: 'Manager', t: Ye },
    15: { n: 'Company', t: Ye },
    16: { n: 'LinksUpToDate', t: xi },
    17: { n: 'CharacterCount', t: Sr },
    19: { n: 'SharedDoc', t: xi },
    22: { n: 'HyperlinksChanged', t: xi },
    23: { n: 'AppVersion', t: Sr, p: 'version' },
    24: { n: 'DigSig', t: sx },
    26: { n: 'ContentType', t: Ye },
    27: { n: 'ContentStatus', t: Ye },
    28: { n: 'Language', t: Ye },
    29: { n: 'Version', t: Ye },
    255: {},
    2147483648: { n: 'Locale', t: Gi },
    2147483651: { n: 'Behavior', t: Gi },
    1919054434: {},
  },
  Is = {
    1: { n: 'CodePage', t: Uo },
    2: { n: 'Title', t: Ye },
    3: { n: 'Subject', t: Ye },
    4: { n: 'Author', t: Ye },
    5: { n: 'Keywords', t: Ye },
    6: { n: 'Comments', t: Ye },
    7: { n: 'Template', t: Ye },
    8: { n: 'LastAuthor', t: Ye },
    9: { n: 'RevNumber', t: Ye },
    10: { n: 'EditTime', t: di },
    11: { n: 'LastPrinted', t: di },
    12: { n: 'CreatedDate', t: di },
    13: { n: 'ModifiedDate', t: di },
    14: { n: 'PageCount', t: Sr },
    15: { n: 'WordCount', t: Sr },
    16: { n: 'CharCount', t: Sr },
    17: { n: 'Thumbnail', t: fx },
    18: { n: 'Application', t: Ye },
    19: { n: 'DocSecurity', t: Sr },
    255: {},
    2147483648: { n: 'Locale', t: Gi },
    2147483651: { n: 'Behavior', t: Gi },
    1919054434: {},
  };
function cx(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  });
}
var ux = cx([
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
  hx = gr(ux),
  ei = {
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
  xx = {
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
  pi = {
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
function Ho() {
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
function Wo(e, t) {
  var r = S1(xx),
    n = [],
    i;
  (n[n.length] = He),
    (n[n.length] = J('Types', null, {
      xmlns: je.CT,
      'xmlns:xsd': je.xsd,
      'xmlns:xsi': je.xsi,
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
        return J('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var a = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((i = e[l][0]),
        (n[n.length] = J('Override', null, {
          PartName: (i[0] == '/' ? '' : '/') + i,
          ContentType: pi[l][t.bookType] || pi[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = J('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: pi[l][t.bookType] || pi[l].xlsx,
        });
      });
    },
    f = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = J('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: r[l][0],
        });
      });
    };
  return (
    a('workbooks'),
    s('sheets'),
    s('charts'),
    f('themes'),
    ['strs', 'styles'].forEach(a),
    ['coreprops', 'extprops', 'custprops'].forEach(f),
    f('vba'),
    f('comments'),
    f('threadedcomments'),
    f('drawings'),
    s('metadata'),
    f('people'),
    n.length > 2 &&
      ((n[n.length] = '</Types>'), (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var de = {
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
function Vo(e) {
  var t = e.lastIndexOf('/');
  return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels';
}
function tn(e) {
  var t = [He, J('Relationships', null, { xmlns: je.RELS })];
  return (
    Qe(e['!id']).forEach(function (r) {
      t[t.length] = J('Relationship', null, e['!id'][r]);
    }),
    t.length > 2 &&
      ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function ge(e, t, r, n, i, a) {
  if (
    (i || (i = {}),
    e['!id'] || (e['!id'] = {}),
    e['!idx'] || (e['!idx'] = 1),
    t < 0)
  )
    for (t = e['!idx']; e['!id']['rId' + t]; ++t);
  if (
    ((e['!idx'] = t + 1),
    (i.Id = 'rId' + t),
    (i.Type = n),
    (i.Target = r),
    [de.HLINK, de.XPATH, de.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + t);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), t;
}
function dx(e) {
  var t = [He];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
    t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push(
      '  <manifest:file-entry manifest:full-path="' +
        e[r][0] +
        '" manifest:media-type="' +
        e[r][1] +
        `"/>
`,
    );
  return t.push('</manifest:manifest>'), t.join('');
}
function Ps(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
      (r || 'odf') +
      '#' +
      t +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join('');
}
function px(e, t) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
      t +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join('');
}
function vx(e) {
  var t = [He];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(Ps(e[r][0], e[r][1])), t.push(px('', e[r][0]));
  return t.push(Ps('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('');
}
function Go() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Li.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Rt = [
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
function Na(e, t, r, n, i) {
  i[e] != null ||
    t == null ||
    t === '' ||
    ((i[e] = t), (t = Ee(t)), (n[n.length] = r ? J(e, t, r) : Je(e, t)));
}
function jo(e, t) {
  var r = t || {},
    n = [
      He,
      J('cp:coreProperties', null, {
        'xmlns:cp': je.CORE_PROPS,
        'xmlns:dc': je.dc,
        'xmlns:dcterms': je.dcterms,
        'xmlns:dcmitype': je.dcmitype,
        'xmlns:xsi': je.xsi,
      }),
    ],
    i = {};
  if (!e && !r.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      Na(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : Ka(e.CreatedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      Na(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : Ka(e.ModifiedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != Rt.length; ++a) {
    var s = Rt[a],
      f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && Na(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var nn = [
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
  Xo = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function $o(e) {
  var t = [],
    r = J;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (t[t.length] = He),
    (t[t.length] = J('Properties', null, {
      xmlns: je.EXT_PROPS,
      'xmlns:vt': je.vt,
    })),
    nn.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = Ee(String(e[n[1]]));
            break;
          case 'bool':
            i = e[n[1]] ? 'true' : 'false';
            break;
        }
        i !== void 0 && (t[t.length] = r(n[0], i));
      }
    }),
    (t[t.length] = r(
      'HeadingPairs',
      r(
        'vt:vector',
        r('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>') +
          r('vt:variant', r('vt:i4', String(e.Worksheets))),
        { size: 2, baseType: 'variant' },
      ),
    )),
    (t[t.length] = r(
      'TitlesOfParts',
      r(
        'vt:vector',
        e.SheetNames.map(function (n) {
          return '<vt:lpstr>' + Ee(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function zo(e) {
  var t = [
    He,
    J('Properties', null, { xmlns: je.CUST_PROPS, 'xmlns:vt': je.vt }),
  ];
  if (!e) return t.join('');
  var r = 1;
  return (
    Qe(e).forEach(function (i) {
      ++r,
        (t[t.length] = J('property', P1(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: r,
          name: Ee(i),
        }));
    }),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
var Ls = {
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
function mx(e, t) {
  var r = [];
  return (
    Qe(Ls)
      .map(function (n) {
        for (var i = 0; i < Rt.length; ++i) if (Rt[i][1] == n) return Rt[i];
        for (i = 0; i < nn.length; ++i) if (nn[i][1] == n) return nn[i];
        throw n;
      })
      .forEach(function (n) {
        if (e[n[1]] != null) {
          var i =
            t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
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
            r.push(Je(Ls[n[1]] || n[1], i));
        }
      }),
    J('DocumentProperties', r.join(''), { xmlns: yr.o })
  );
}
function _x(e, t) {
  var r = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      Qe(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < Rt.length; ++s) if (a == Rt[s][1]) return;
          for (s = 0; s < nn.length; ++s) if (a == nn[s][1]) return;
          for (s = 0; s < r.length; ++s) if (a == r[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(J(ws(a), f, { 'dt:dt': l }));
        }
      }),
    t &&
      Qe(t).forEach(function (a) {
        if (
          Object.prototype.hasOwnProperty.call(t, a) &&
          !(e && Object.prototype.hasOwnProperty.call(e, a))
        ) {
          var s = t[a],
            f = 'string';
          typeof s == 'number'
            ? ((f = 'float'), (s = String(s)))
            : s === !0 || s === !1
              ? ((f = 'boolean'), (s = s ? '1' : '0'))
              : s instanceof Date
                ? ((f = 'dateTime.tz'), (s = s.toISOString()))
                : (s = String(s)),
            i.push(J(ws(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + yr.o + '">' + i.join('') + '</' + n + '>'
  );
}
function gx(e) {
  var t = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    r = t.getTime() / 1e3 + 11644473600,
    n = r % Math.pow(2, 32),
    i = (r - n) / Math.pow(2, 32);
  (n *= 1e7), (i *= 1e7);
  var a = (n / Math.pow(2, 32)) | 0;
  a > 0 && ((n = n % Math.pow(2, 32)), (i += a));
  var s = U(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function Bs(e, t) {
  var r = U(4),
    n = U(4);
  switch ((r.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      (n = U(8)), n.write_shift(8, t, 'f');
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = gx(t);
      break;
    case 31:
    case 80:
      for (
        n = U(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)),
          n.write_shift(4, t.length + 1),
          n.write_shift(0, t, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + t);
  }
  return qe([r, n]);
}
var Ko = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function Ex(e) {
  switch (typeof e) {
    case 'boolean':
      return 11;
    case 'number':
      return (e | 0) == e ? 3 : 5;
    case 'string':
      return 31;
    case 'object':
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function Ms(e, t, r) {
  var n = U(8),
    i = [],
    a = [],
    s = 8,
    f = 0,
    l = U(8),
    o = U(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    o.write_shift(4, 1),
    a.push(l),
    i.push(o),
    (s += 8 + l.length),
    !t)
  ) {
    (o = U(8)), o.write_shift(4, 0), i.unshift(o);
    var c = [U(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var u = e[f][0];
      for (
        l = U(8 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)),
          l.write_shift(4, f + 2),
          l.write_shift(4, u.length + 1),
          l.write_shift(0, u, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = qe(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(t && !t[e[f][0]]) &&
      !(Ko.indexOf(e[f][0]) > -1 || Xo.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var h = e[f][1],
        d = 0;
      if (t) {
        d = +t[e[f][0]];
        var p = r[d];
        if (p.p == 'version' && typeof h == 'string') {
          var x = h.split('.');
          h = (+x[0] << 16) + (+x[1] || 0);
        }
        l = Bs(p.t, h);
      } else {
        var m = Ex(h);
        m == -1 && ((m = 31), (h = String(h))), (l = Bs(m, h));
      }
      a.push(l),
        (o = U(8)),
        o.write_shift(4, t ? d : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var S = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, S), (S += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), qe([n].concat(i).concat(a))
  );
}
function bs(e, t, r, n, i, a) {
  var s = U(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Se.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, t, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = Ms(e, r, n);
  if ((f.push(l), i)) {
    var o = Ms(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return qe(f);
}
function Tx(e, t) {
  t || (t = U(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function wx(e, t) {
  return e.read_shift(t) === 1;
}
function lr(e, t) {
  return t || (t = U(2)), t.write_shift(2, +!!e), t;
}
function Yo(e) {
  return e.read_shift(2, 'u');
}
function Dr(e, t) {
  return t || (t = U(2)), t.write_shift(2, e), t;
}
function qo(e, t, r) {
  return (
    r || (r = U(2)),
    r.write_shift(1, t == 'e' ? +e : +!!e),
    r.write_shift(1, t == 'e' ? 1 : 0),
    r
  );
}
function Jo(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
    i = 'sbcs-cont';
  if ((r && r.biff >= 8, !r || r.biff == 8)) {
    var a = e.read_shift(1);
    a && (i = 'dbcs-cont');
  } else r.biff == 12 && (i = 'wstr');
  r.biff >= 2 && r.biff <= 5 && (i = 'cpstr');
  var s = n ? e.read_shift(n, i) : '';
  return s;
}
function Sx(e) {
  var t = e.t || '',
    r = U(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = U(2 * t.length);
  n.write_shift(2 * t.length, t, 'utf16le');
  var i = [r, n];
  return qe(i);
}
function Ax(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, 'cpstr');
    if (r.biff >= 12) return e.read_shift(t, 'dbcs-cont');
  }
  var i = e.read_shift(1);
  return (
    i === 0
      ? (n = e.read_shift(t, 'sbcs-cont'))
      : (n = e.read_shift(t, 'dbcs-cont')),
    n
  );
}
function yx(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : Ax(e, n, r);
}
function Fx(e, t, r) {
  if (r.biff > 5) return yx(e, t, r);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function Zo(e, t, r) {
  return (
    r || (r = U(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, 'utf16le'),
    r
  );
}
function Us(e, t) {
  t || (t = U(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function Cx(e) {
  var t = U(512),
    r = 0,
    n = e.Target;
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
  t.write_shift(4, 2), t.write_shift(4, a);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r) t.write_shift(4, s[r]);
  if (a == 28) (n = n.slice(1)), Us(n, t);
  else if (a & 2) {
    for (
      s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), r = 0;
      r < s.length;
      ++r
    )
      t.write_shift(1, parseInt(s[r], 16));
    var f = i > -1 ? n.slice(0, i) : n;
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r));
    t.write_shift(2, 0), a & 8 && Us(i > -1 ? n.slice(i + 1) : '', t);
  } else {
    for (
      s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), r = 0;
      r < s.length;
      ++r
    )
      t.write_shift(1, parseInt(s[r], 16));
    for (
      var l = 0;
      n.slice(l * 3, l * 3 + 3) == '../' || n.slice(l * 3, l * 3 + 3) == '..\\';

    )
      ++l;
    for (
      t.write_shift(2, l), t.write_shift(4, n.length - 3 * l + 1), r = 0;
      r < n.length - 3 * l;
      ++r
    )
      t.write_shift(1, n.charCodeAt(r + 3 * l) & 255);
    for (
      t.write_shift(1, 0),
        t.write_shift(2, 65535),
        t.write_shift(2, 57005),
        r = 0;
      r < 6;
      ++r
    )
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function It(e, t, r, n) {
  return (
    n || (n = U(6)),
    n.write_shift(2, e),
    n.write_shift(2, t),
    n.write_shift(2, r || 0),
    n
  );
}
function Ox(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function Rx(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: i, r } };
}
function Qo(e, t) {
  return (
    t || (t = U(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  );
}
function F0(e, t, r) {
  var n = 1536,
    i = 16;
  switch (r.bookType) {
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
  var a = U(i);
  return (
    a.write_shift(2, n),
    a.write_shift(2, t),
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
function Nx(e, t) {
  var r = !t || t.biff == 8,
    n = U(r ? 112 : 54);
  for (
    n.write_shift(t.biff == 8 ? 2 : 1, 7),
      r && n.write_shift(1, 0),
      n.write_shift(4, 859007059),
      n.write_shift(4, 5458548 | (r ? 0 : 536870912));
    n.l < n.length;

  )
    n.write_shift(1, r ? 0 : 32);
  return n;
}
function Dx(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1,
    n = U(8 + r * e.name.length);
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    t.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(r * e.name.length, e.name, t.biff < 8 ? 'sbcs' : 'utf16le');
  var i = n.slice(0, n.l);
  return (i.l = n.l), i;
}
function kx(e, t) {
  var r = U(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = Sx(e[i]);
  var a = qe([r].concat(n));
  return (
    (a.parts = [r.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function Ix() {
  var e = U(18);
  return (
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 29280),
    e.write_shift(2, 17600),
    e.write_shift(2, 56),
    e.write_shift(2, 0),
    e.write_shift(2, 0),
    e.write_shift(2, 1),
    e.write_shift(2, 500),
    e
  );
}
function Px(e) {
  var t = U(18),
    r = 1718;
  return (
    e && e.RTL && (r |= 64),
    t.write_shift(2, r),
    t.write_shift(4, 0),
    t.write_shift(4, 64),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
function Lx(e, t) {
  var r = e.name || 'Arial',
    n = t && t.biff == 5,
    i = n ? 15 + r.length : 16 + 2 * r.length,
    a = U(i);
  return (
    a.write_shift(2, e.sz * 20),
    a.write_shift(4, 0),
    a.write_shift(2, 400),
    a.write_shift(4, 0),
    a.write_shift(2, 0),
    a.write_shift(1, r.length),
    n || a.write_shift(1, 1),
    a.write_shift((n ? 1 : 2) * r.length, r, n ? 'sbcs' : 'utf16le'),
    a
  );
}
function Bx(e, t, r, n) {
  var i = U(10);
  return It(e, t, n, i), i.write_shift(4, r), i;
}
function Mx(e, t, r, n, i) {
  var a = !i || i.biff == 8,
    s = U(8 + +a + (1 + a) * r.length);
  return (
    It(e, t, n, s),
    s.write_shift(2, r.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * r.length, r, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function bx(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = U(i ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, t.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * t.length, t, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function Ux(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2,
    n = U(2 * r + 6);
  return (
    n.write_shift(r, e.s.r),
    n.write_shift(r, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function Hs(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = U(i ? 16 : 20)),
    n.write_shift(2, 0),
    e.style
      ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var a = 0;
  return (
    e.numFmtId > 0 && i && (a |= 1024),
    n.write_shift(4, a),
    n.write_shift(4, 0),
    i || n.write_shift(4, 0),
    n.write_shift(2, 0),
    n
  );
}
function Hx(e) {
  var t = U(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function Wx(e, t, r, n, i, a) {
  var s = U(8);
  return It(e, t, n, s), qo(r, a, s), s;
}
function Vx(e, t, r, n) {
  var i = U(14);
  return It(e, t, n, i), kt(r, i), i;
}
function Gx(e, t, r) {
  if (r.biff < 8) return jx(e, t, r);
  for (
    var n = [], i = e.l + t, a = e.read_shift(r.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(Ox(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function jx(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = Jo(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Xx(e) {
  var t = U(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) Qo(e[r], t);
  return t;
}
function $x(e) {
  var t = U(24),
    r = Xe(e[0]);
  t.write_shift(2, r.r),
    t.write_shift(2, r.r),
    t.write_shift(2, r.c),
    t.write_shift(2, r.c);
  for (
    var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), i = 0;
    i < 16;
    ++i
  )
    t.write_shift(1, parseInt(n[i], 16));
  return qe([t, Cx(e[1])]);
}
function zx(e) {
  var t = e[1].Tooltip,
    r = U(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = Xe(e[0]);
  r.write_shift(2, n.r),
    r.write_shift(2, n.r),
    r.write_shift(2, n.c),
    r.write_shift(2, n.c);
  for (var i = 0; i < t.length; ++i) r.write_shift(2, t.charCodeAt(i));
  return r.write_shift(2, 0), r;
}
function Kx(e) {
  return e || (e = U(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Yx(e, t, r) {
  if (!r.cellStyles) return Yr(e, t);
  var n = r && r.biff >= 12 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n),
    s = e.read_shift(n),
    f = e.read_shift(n),
    l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var o = { s: i, e: a, w: s, ixfe: f, flags: l };
  return (r.biff >= 5 || !r.biff) && (o.level = (l >> 8) & 7), o;
}
function qx(e, t) {
  var r = U(12);
  r.write_shift(2, t),
    r.write_shift(2, t),
    r.write_shift(2, e.width * 256),
    r.write_shift(2, 0);
  var n = 0;
  return (
    e.hidden && (n |= 1),
    r.write_shift(1, n),
    (n = e.level || 0),
    r.write_shift(1, n),
    r.write_shift(2, 0),
    r
  );
}
function Jx(e) {
  for (var t = U(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function Zx(e, t, r) {
  var n = U(15);
  return ti(n, e, t), n.write_shift(8, r, 'f'), n;
}
function Qx(e, t, r) {
  var n = U(9);
  return ti(n, e, t), n.write_shift(2, r), n;
}
var ed = (function () {
    var e = {
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
      t = p0({
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
    function r(f, l) {
      var o = [],
        c = Dt(1);
      switch (l.type) {
        case 'base64':
          c = Br(at(f));
          break;
        case 'binary':
          c = Br(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      Ar(c, 0);
      var u = c.read_shift(1),
        h = !!(u & 136),
        d = !1,
        p = !1;
      switch (u) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (d = !0), (h = !0);
          break;
        case 49:
          (d = !0), (h = !0);
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          p = !0;
          break;
        case 245:
          break;
        default:
          throw new Error('DBF Unsupported Version: ' + u.toString(16));
      }
      var x = 0,
        m = 521;
      u == 2 && (x = c.read_shift(2)),
        (c.l += 3),
        u != 2 && (x = c.read_shift(4)),
        x > 1048576 && (x = 1e6),
        u != 2 && (m = c.read_shift(2));
      var S = c.read_shift(2),
        C = l.codepage || 1252;
      u != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (C = e[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        p && (c.l += 36);
      for (
        var F = [],
          k = {},
          V = Math.min(c.length, u == 2 ? 521 : m - 10 - (d ? 264 : 0)),
          q = p ? 32 : 11;
        c.l < V && c[c.l] != 13;

      )
        switch (
          ((k = {}),
          (k.name = cs.utils
            .decode(C, c.slice(c.l, c.l + q))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += q),
          (k.type = String.fromCharCode(c.read_shift(1))),
          u != 2 && !p && (k.offset = c.read_shift(4)),
          (k.len = c.read_shift(1)),
          u == 2 && (k.offset = c.read_shift(2)),
          (k.dec = c.read_shift(1)),
          k.name.length && F.push(k),
          u != 2 && (c.l += p ? 13 : 14),
          k.type)
        ) {
          case 'B':
            (!d || k.len != 8) &&
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
      var O = 0,
        H = 0;
      for (o[0] = [], H = 0; H != F.length; ++H) o[0][H] = F[H].name;
      for (; x-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += S;
          continue;
        }
        for (++c.l, o[++O] = [], H = 0, H = 0; H != F.length; ++H) {
          var I = c.slice(c.l, c.l + F[H].len);
          (c.l += F[H].len), Ar(I, 0);
          var G = cs.utils.decode(C, I);
          switch (F[H].type) {
            case 'C':
              G.trim().length && (o[O][H] = G.replace(/\s+$/, ''));
              break;
            case 'D':
              G.length === 8
                ? (o[O][H] = new Date(
                    +G.slice(0, 4),
                    +G.slice(4, 6) - 1,
                    +G.slice(6, 8),
                  ))
                : (o[O][H] = G);
              break;
            case 'F':
              o[O][H] = parseFloat(G.trim());
              break;
            case '+':
            case 'I':
              o[O][H] = p
                ? I.read_shift(-4, 'i') ^ 2147483648
                : I.read_shift(4, 'i');
              break;
            case 'L':
              switch (G.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  o[O][H] = !0;
                  break;
                case 'N':
                case 'F':
                  o[O][H] = !1;
                  break;
                case '':
                case '?':
                  break;
                default:
                  throw new Error('DBF Unrecognized L:|' + G + '|');
              }
              break;
            case 'M':
              if (!h)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + u.toString(16),
                );
              o[O][H] =
                '##MEMO##' + (p ? parseInt(G.trim(), 10) : I.read_shift(4));
              break;
            case 'N':
              (G = G.replace(/\u0000/g, '').trim()),
                G && G != '.' && (o[O][H] = +G || 0);
              break;
            case '@':
              o[O][H] = new Date(I.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              o[O][H] = new Date(
                (I.read_shift(4) - 2440588) * 864e5 + I.read_shift(4),
              );
              break;
            case 'Y':
              o[O][H] =
                I.read_shift(4, 'i') / 1e4 +
                (I.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              o[O][H] = -I.read_shift(-8, 'f');
              break;
            case 'B':
              if (d && F[H].len == 8) {
                o[O][H] = I.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              I.l += F[H].len;
              break;
            case '0':
              if (F[H].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + F[H].type);
          }
        }
      }
      if (u != 2 && c.l < c.length && c[c.l++] != 26)
        throw new Error(
          'DBF EOF Marker missing ' +
            (c.l - 1) +
            ' of ' +
            c.length +
            ' ' +
            c[c.l - 1].toString(16),
        );
      return l && l.sheetRows && (o = o.slice(0, l.sheetRows)), (l.DBF = F), o;
    }
    function n(f, l) {
      var o = l || {};
      o.dateNF || (o.dateNF = 'yyyymmdd');
      var c = xn(r(f, o), o);
      return (
        (c['!cols'] = o.DBF.map(function (u) {
          return { wch: u.len, DBF: u };
        })),
        delete o.DBF,
        c
      );
    }
    function i(f, l) {
      try {
        return Lt(n(f, l), l);
      } catch (o) {
        if (l && l.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(f, l) {
      var o = l || {};
      if ((+o.codepage >= 0 && Un(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = vr(),
        u = Ki(f, { header: 1, raw: !0, cellDates: !0 }),
        h = u[0],
        d = u.slice(1),
        p = f['!cols'] || [],
        x = 0,
        m = 0,
        S = 0,
        C = 1;
      for (x = 0; x < h.length; ++x) {
        if (((p[x] || {}).DBF || {}).name) {
          (h[x] = p[x].DBF.name), ++S;
          continue;
        }
        if (h[x] != null) {
          if (
            (++S,
            typeof h[x] == 'number' && (h[x] = h[x].toString(10)),
            typeof h[x] != 'string')
          )
            throw new Error(
              'DBF Invalid column name ' + h[x] + ' |' + typeof h[x] + '|',
            );
          if (h.indexOf(h[x]) !== x) {
            for (m = 0; m < 1024; ++m)
              if (h.indexOf(h[x] + '_' + m) == -1) {
                h[x] += '_' + m;
                break;
              }
          }
        }
      }
      var F = Ce(f['!ref']),
        k = [],
        V = [],
        q = [];
      for (x = 0; x <= F.e.c - F.s.c; ++x) {
        var O = '',
          H = '',
          I = 0,
          G = [];
        for (m = 0; m < d.length; ++m) d[m][x] != null && G.push(d[m][x]);
        if (G.length == 0 || h[x] == null) {
          k[x] = '?';
          continue;
        }
        for (m = 0; m < G.length; ++m) {
          switch (typeof G[m]) {
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
              H = G[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              H = 'C';
          }
          (I = Math.max(I, String(G[m]).length)), (O = O && O != H ? 'C' : H);
        }
        I > 250 && (I = 250),
          (H = ((p[x] || {}).DBF || {}).type),
          H == 'C' && p[x].DBF.len > I && (I = p[x].DBF.len),
          O == 'B' &&
            H == 'N' &&
            ((O = 'N'), (q[x] = p[x].DBF.dec), (I = p[x].DBF.len)),
          (V[x] = O == 'C' || H == 'N' ? I : a[O] || 0),
          (C += V[x]),
          (k[x] = O);
      }
      var X = c.next(32);
      for (
        X.write_shift(4, 318902576),
          X.write_shift(4, d.length),
          X.write_shift(2, 296 + 32 * S),
          X.write_shift(2, C),
          x = 0;
        x < 4;
        ++x
      )
        X.write_shift(4, 0);
      for (
        X.write_shift(4, 0 | ((+t[eo] || 3) << 8)), x = 0, m = 0;
        x < h.length;
        ++x
      )
        if (h[x] != null) {
          var z = c.next(32),
            ne = (h[x].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          z.write_shift(1, ne, 'sbcs'),
            z.write_shift(1, k[x] == '?' ? 'C' : k[x], 'sbcs'),
            z.write_shift(4, m),
            z.write_shift(1, V[x] || a[k[x]] || 0),
            z.write_shift(1, q[x] || 0),
            z.write_shift(1, 2),
            z.write_shift(4, 0),
            z.write_shift(1, 0),
            z.write_shift(4, 0),
            z.write_shift(4, 0),
            (m += V[x] || a[k[x]] || 0);
        }
      var me = c.next(264);
      for (me.write_shift(4, 13), x = 0; x < 65; ++x) me.write_shift(4, 0);
      for (x = 0; x < d.length; ++x) {
        var oe = c.next(C);
        for (oe.write_shift(1, 0), m = 0; m < h.length; ++m)
          if (h[m] != null)
            switch (k[m]) {
              case 'L':
                oe.write_shift(1, d[x][m] == null ? 63 : d[x][m] ? 84 : 70);
                break;
              case 'B':
                oe.write_shift(8, d[x][m] || 0, 'f');
                break;
              case 'N':
                var We = '0';
                for (
                  typeof d[x][m] == 'number' &&
                    (We = d[x][m].toFixed(q[m] || 0)),
                    S = 0;
                  S < V[m] - We.length;
                  ++S
                )
                  oe.write_shift(1, 32);
                oe.write_shift(1, We, 'sbcs');
                break;
              case 'D':
                d[x][m]
                  ? (oe.write_shift(
                      4,
                      ('0000' + d[x][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    oe.write_shift(
                      2,
                      ('00' + (d[x][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    oe.write_shift(
                      2,
                      ('00' + d[x][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : oe.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var Oe = String(d[x][m] != null ? d[x][m] : '').slice(0, V[m]);
                for (
                  oe.write_shift(1, Oe, 'sbcs'), S = 0;
                  S < V[m] - Oe.length;
                  ++S
                )
                  oe.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  rd = (function () {
    var e = {
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
      t = new RegExp(
        '\x1BN(' +
          Qe(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      r = function (h, d) {
        var p = e[d];
        return typeof p == 'number' ? ls(p) : p;
      },
      n = function (h, d, p) {
        var x = ((d.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return x == 59 ? h : ls(x);
      };
    e['|'] = 254;
    function i(h, d) {
      switch (d.type) {
        case 'base64':
          return a(at(h), d);
        case 'binary':
          return a(h, d);
        case 'buffer':
          return a(ve && Buffer.isBuffer(h) ? h.toString('binary') : Jn(h), d);
        case 'array':
          return a(ha(h), d);
      }
      throw new Error('Unrecognized type ' + d.type);
    }
    function a(h, d) {
      var p = h.split(/[\n\r]+/),
        x = -1,
        m = -1,
        S = 0,
        C = 0,
        F = [],
        k = [],
        V = null,
        q = {},
        O = [],
        H = [],
        I = [],
        G = 0,
        X;
      for (+d.codepage >= 0 && Un(+d.codepage); S !== p.length; ++S) {
        G = 0;
        var z = p[S].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          ne = z
            .replace(/;;/g, '\0')
            .split(';')
            .map(function (A) {
              return A.replace(/\u0000/g, ';');
            }),
          me = ne[0],
          oe;
        if (z.length > 0)
          switch (me) {
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
              ne[1].charAt(0) == 'P' && k.push(z.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var We = !1,
                Oe = !1,
                hr = !1,
                Me = !1,
                ar = -1,
                sr = -1;
              for (C = 1; C < ne.length; ++C)
                switch (ne[C].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(ne[C].slice(1)) - 1), (Oe = !0);
                    break;
                  case 'Y':
                    for (
                      x = parseInt(ne[C].slice(1)) - 1,
                        Oe || (m = 0),
                        X = F.length;
                      X <= x;
                      ++X
                    )
                      F[X] = [];
                    break;
                  case 'K':
                    (oe = ne[C].slice(1)),
                      oe.charAt(0) === '"'
                        ? (oe = oe.slice(1, oe.length - 1))
                        : oe === 'TRUE'
                          ? (oe = !0)
                          : oe === 'FALSE'
                            ? (oe = !1)
                            : isNaN(nt(oe))
                              ? isNaN(Wn(oe).getDate()) || (oe = ur(oe))
                              : ((oe = nt(oe)),
                                V !== null && ho(V) && (oe = mo(oe))),
                      (We = !0);
                    break;
                  case 'E':
                    Me = !0;
                    var y = Qd(ne[C].slice(1), { r: x, c: m });
                    F[x][m] = [F[x][m], y];
                    break;
                  case 'S':
                    (hr = !0), (F[x][m] = [F[x][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    ar = parseInt(ne[C].slice(1)) - 1;
                    break;
                  case 'C':
                    sr = parseInt(ne[C].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + z);
                }
              if (
                (We &&
                  (F[x][m] && F[x][m].length == 2
                    ? (F[x][m][0] = oe)
                    : (F[x][m] = oe),
                  (V = null)),
                hr)
              ) {
                if (Me)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var B = ar > -1 && F[ar][sr];
                if (!B || !B[1])
                  throw new Error('SYLK shared formula cannot find base');
                F[x][m][1] = ep(B[1], { r: x - ar, c: m - sr });
              }
              break;
            case 'F':
              var R = 0;
              for (C = 1; C < ne.length; ++C)
                switch (ne[C].charAt(0)) {
                  case 'X':
                    (m = parseInt(ne[C].slice(1)) - 1), ++R;
                    break;
                  case 'Y':
                    for (
                      x = parseInt(ne[C].slice(1)) - 1, X = F.length;
                      X <= x;
                      ++X
                    )
                      F[X] = [];
                    break;
                  case 'M':
                    G = parseInt(ne[C].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    V = k[parseInt(ne[C].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      I = ne[C].slice(1).split(' '), X = parseInt(I[0], 10);
                      X <= parseInt(I[1], 10);
                      ++X
                    )
                      (G = parseInt(I[2], 10)),
                        (H[X - 1] = G === 0 ? { hidden: !0 } : { wch: G }),
                        C0(H[X - 1]);
                    break;
                  case 'C':
                    (m = parseInt(ne[C].slice(1)) - 1), H[m] || (H[m] = {});
                    break;
                  case 'R':
                    (x = parseInt(ne[C].slice(1)) - 1),
                      O[x] || (O[x] = {}),
                      G > 0
                        ? ((O[x].hpt = G), (O[x].hpx = il(G)))
                        : G === 0 && (O[x].hidden = !0);
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + z);
                }
              R < 1 && (V = null);
              break;
            default:
              if (d && d.WTF) throw new Error('SYLK bad record ' + z);
          }
      }
      return (
        O.length > 0 && (q['!rows'] = O),
        H.length > 0 && (q['!cols'] = H),
        d && d.sheetRows && (F = F.slice(0, d.sheetRows)),
        [F, q]
      );
    }
    function s(h, d) {
      var p = i(h, d),
        x = p[0],
        m = p[1],
        S = xn(x, d);
      return (
        Qe(m).forEach(function (C) {
          S[C] = m[C];
        }),
        S
      );
    }
    function f(h, d) {
      return Lt(s(h, d), d);
    }
    function l(h, d, p, x) {
      var m = 'C;Y' + (p + 1) + ';X' + (x + 1) + ';K';
      switch (h.t) {
        case 'n':
          (m += h.v || 0), h.f && !h.F && (m += ';E' + R0(h.f, { r: p, c: x }));
          break;
        case 'b':
          m += h.v ? 'TRUE' : 'FALSE';
          break;
        case 'e':
          m += h.w || h.v;
          break;
        case 'd':
          m += '"' + (h.w || h.v) + '"';
          break;
        case 's':
          m += '"' + h.v.replace(/"/g, '').replace(/;/g, ';;') + '"';
          break;
      }
      return m;
    }
    function o(h, d) {
      d.forEach(function (p, x) {
        var m = 'F;W' + (x + 1) + ' ' + (x + 1) + ' ';
        p.hidden
          ? (m += '0')
          : (typeof p.width == 'number' && !p.wpx && (p.wpx = ji(p.width)),
            typeof p.wpx == 'number' && !p.wch && (p.wch = Xi(p.wpx)),
            typeof p.wch == 'number' && (m += Math.round(p.wch))),
          m.charAt(m.length - 1) != ' ' && h.push(m);
      });
    }
    function c(h, d) {
      d.forEach(function (p, x) {
        var m = 'F;';
        p.hidden
          ? (m += 'M0;')
          : p.hpt
            ? (m += 'M' + 20 * p.hpt + ';')
            : p.hpx && (m += 'M' + 20 * $i(p.hpx) + ';'),
          m.length > 2 && h.push(m + 'R' + (x + 1));
      });
    }
    function u(h, d) {
      var p = ['ID;PWXL;N;E'],
        x = [],
        m = Ce(h['!ref']),
        S,
        C = Array.isArray(h),
        F = `\r
`;
      p.push('P;PGeneral'),
        p.push('F;P0;DG0G8;M255'),
        h['!cols'] && o(p, h['!cols']),
        h['!rows'] && c(p, h['!rows']),
        p.push(
          'B;Y' +
            (m.e.r - m.s.r + 1) +
            ';X' +
            (m.e.c - m.s.c + 1) +
            ';D' +
            [m.s.c, m.s.r, m.e.c, m.e.r].join(' '),
        );
      for (var k = m.s.r; k <= m.e.r; ++k)
        for (var V = m.s.c; V <= m.e.c; ++V) {
          var q = Te({ r: k, c: V });
          (S = C ? (h[k] || [])[V] : h[q]),
            !(!S || (S.v == null && (!S.f || S.F))) && x.push(l(S, h, k, V));
        }
      return p.join(F) + F + x.join(F) + F + 'E' + F;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: u };
  })(),
  td = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return t(at(a), s);
        case 'binary':
          return t(a, s);
        case 'buffer':
          return t(ve && Buffer.isBuffer(a) ? a.toString('binary') : Jn(a), s);
        case 'array':
          return t(ha(a), s);
      }
      throw new Error('Unrecognized type ' + s.type);
    }
    function t(a, s) {
      for (
        var f = a.split(`
`),
          l = -1,
          o = -1,
          c = 0,
          u = [];
        c !== f.length;
        ++c
      ) {
        if (f[c].trim() === 'BOT') {
          (u[++l] = []), (o = 0);
          continue;
        }
        if (!(l < 0)) {
          var h = f[c].trim().split(','),
            d = h[0],
            p = h[1];
          ++c;
          for (
            var x = f[c] || '';
            (x.match(/["]/g) || []).length & 1 && c < f.length - 1;

          )
            x +=
              `
` + f[++c];
          switch (((x = x.trim()), +d)) {
            case -1:
              if (x === 'BOT') {
                (u[++l] = []), (o = 0);
                continue;
              } else if (x !== 'EOD')
                throw new Error('Unrecognized DIF special command ' + x);
              break;
            case 0:
              x === 'TRUE'
                ? (u[l][o] = !0)
                : x === 'FALSE'
                  ? (u[l][o] = !1)
                  : isNaN(nt(p))
                    ? isNaN(Wn(p).getDate())
                      ? (u[l][o] = p)
                      : (u[l][o] = ur(p))
                    : (u[l][o] = nt(p)),
                ++o;
              break;
            case 1:
              (x = x.slice(1, x.length - 1)),
                (x = x.replace(/""/g, '"')),
                x && x.match(/^=".*"$/) && (x = x.slice(2, -1)),
                (u[l][o++] = x !== '' ? x : null);
              break;
          }
          if (x === 'EOD') break;
        }
      }
      return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u;
    }
    function r(a, s) {
      return xn(e(a, s), s);
    }
    function n(a, s) {
      return Lt(r(a, s), s);
    }
    var i = (function () {
      var a = function (l, o, c, u, h) {
          l.push(o),
            l.push(c + ',' + u),
            l.push('"' + h.replace(/"/g, '""') + '"');
        },
        s = function (l, o, c, u) {
          l.push(o + ',' + c),
            l.push(o == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
        };
      return function (l) {
        var o = [],
          c = Ce(l['!ref']),
          u,
          h = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var d = c.s.r; d <= c.e.r; ++d) {
          s(o, -1, 0, 'BOT');
          for (var p = c.s.c; p <= c.e.c; ++p) {
            var x = Te({ r: d, c: p });
            if (((u = h ? (l[d] || [])[p] : l[x]), !u)) {
              s(o, 1, 0, '');
              continue;
            }
            switch (u.t) {
              case 'n':
                var m = u.w;
                !m && u.v != null && (m = u.v),
                  m == null
                    ? u.f && !u.F
                      ? s(o, 1, 0, '=' + u.f)
                      : s(o, 1, 0, '')
                    : s(o, 0, m, 'V');
                break;
              case 'b':
                s(o, 0, u.v ? 1 : 0, u.v ? 'TRUE' : 'FALSE');
                break;
              case 's':
                s(o, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
                break;
              case 'd':
                u.w || (u.w = gt(u.z || Be[14], _r(ur(u.v)))),
                  s(o, 0, u.w, 'V');
                break;
              default:
                s(o, 1, 0, '');
            }
          }
        }
        s(o, -1, 0, 'EOD');
        var S = `\r
`,
          C = o.join(S);
        return C;
      };
    })();
    return { to_workbook: n, to_sheet: r, from_sheet: i };
  })(),
  el = (function () {
    function e(u) {
      return u
        .replace(/\\b/g, '\\')
        .replace(/\\c/g, ':')
        .replace(
          /\\n/g,
          `
`,
        );
    }
    function t(u) {
      return u.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n');
    }
    function r(u, h) {
      for (
        var d = u.split(`
`),
          p = -1,
          x = -1,
          m = 0,
          S = [];
        m !== d.length;
        ++m
      ) {
        var C = d[m].trim().split(':');
        if (C[0] === 'cell') {
          var F = Xe(C[1]);
          if (S.length <= F.r)
            for (p = S.length; p <= F.r; ++p) S[p] || (S[p] = []);
          switch (((p = F.r), (x = F.c), C[2])) {
            case 't':
              S[p][x] = e(C[3]);
              break;
            case 'v':
              S[p][x] = +C[3];
              break;
            case 'vtf':
              var k = C[C.length - 1];
            case 'vtc':
              switch (C[3]) {
                case 'nl':
                  S[p][x] = !!+C[4];
                  break;
                default:
                  S[p][x] = +C[4];
                  break;
              }
              C[2] == 'vtf' && (S[p][x] = [S[p][x], k]);
          }
        }
      }
      return h && h.sheetRows && (S = S.slice(0, h.sheetRows)), S;
    }
    function n(u, h) {
      return xn(r(u, h), h);
    }
    function i(u, h) {
      return Lt(n(u, h), h);
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
      f = ['# SocialCalc Spreadsheet Control Save', 'part:sheet'].join(`
`),
      l = '--SocialCalcSpreadsheetControlSave--';
    function o(u) {
      if (!u || !u['!ref']) return '';
      for (
        var h = [],
          d = [],
          p,
          x = '',
          m = Or(u['!ref']),
          S = Array.isArray(u),
          C = m.s.r;
        C <= m.e.r;
        ++C
      )
        for (var F = m.s.c; F <= m.e.c; ++F)
          if (
            ((x = Te({ r: C, c: F })),
            (p = S ? (u[C] || [])[F] : u[x]),
            !(!p || p.v == null || p.t === 'z'))
          ) {
            switch (((d = ['cell', x, 't']), p.t)) {
              case 's':
              case 'str':
                d.push(t(p.v));
                break;
              case 'n':
                p.f
                  ? ((d[2] = 'vtf'),
                    (d[3] = 'n'),
                    (d[4] = p.v),
                    (d[5] = t(p.f)))
                  : ((d[2] = 'v'), (d[3] = p.v));
                break;
              case 'b':
                (d[2] = 'vt' + (p.f ? 'f' : 'c')),
                  (d[3] = 'nl'),
                  (d[4] = p.v ? '1' : '0'),
                  (d[5] = t(p.f || (p.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var k = _r(ur(p.v));
                (d[2] = 'vtc'),
                  (d[3] = 'nd'),
                  (d[4] = '' + k),
                  (d[5] = p.w || gt(p.z || Be[14], k));
                break;
              case 'e':
                continue;
            }
            h.push(d.join(':'));
          }
      return (
        h.push(
          'sheet:c:' +
            (m.e.c - m.s.c + 1) +
            ':r:' +
            (m.e.r - m.s.r + 1) +
            ':tvf:1',
        ),
        h.push('valueformat:1:text-wiki'),
        h.join(`
`)
      );
    }
    function c(u) {
      return [a, s, f, s, o(u), l].join(`
`);
    }
    return { to_workbook: i, to_sheet: n, from_sheet: c };
  })(),
  nd = (function () {
    function e(c, u, h, d, p) {
      p.raw
        ? (u[h][d] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (u[h][d] = !0)
            : c === 'FALSE'
              ? (u[h][d] = !1)
              : isNaN(nt(c))
                ? isNaN(Wn(c).getDate())
                  ? (u[h][d] = c)
                  : (u[h][d] = ur(c))
                : (u[h][d] = nt(c)));
    }
    function t(c, u) {
      var h = u || {},
        d = [];
      if (!c || c.length === 0) return d;
      for (
        var p = c.split(/[\r\n]/), x = p.length - 1;
        x >= 0 && p[x].length === 0;

      )
        --x;
      for (var m = 10, S = 0, C = 0; C <= x; ++C)
        (S = p[C].indexOf(' ')),
          S == -1 ? (S = p[C].length) : S++,
          (m = Math.max(m, S));
      for (C = 0; C <= x; ++C) {
        d[C] = [];
        var F = 0;
        for (
          e(p[C].slice(0, m).trim(), d, C, F, h), F = 1;
          F <= (p[C].length - m) / 10 + 1;
          ++F
        )
          e(p[C].slice(m + (F - 1) * 10, m + F * 10).trim(), d, C, F, h);
      }
      return h.sheetRows && (d = d.slice(0, h.sheetRows)), d;
    }
    var r = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var u = {}, h = !1, d = 0, p = 0; d < c.length; ++d)
        (p = c.charCodeAt(d)) == 34
          ? (h = !h)
          : !h && p in r && (u[p] = (u[p] || 0) + 1);
      p = [];
      for (d in u)
        Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
      if (!p.length) {
        u = n;
        for (d in u)
          Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
      }
      return (
        p.sort(function (x, m) {
          return x[0] - m[0] || n[x[1]] - n[m[1]];
        }),
        r[p.pop()[1]] || 44
      );
    }
    function a(c, u) {
      var h = u || {},
        d = '',
        p = h.dense ? [] : {},
        x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((d = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((d = c.charAt(4)), (c = c.slice(6)))
            : (d = i(c.slice(0, 1024)))
        : h && h.FS
          ? (d = h.FS)
          : (d = i(c.slice(0, 1024)));
      var m = 0,
        S = 0,
        C = 0,
        F = 0,
        k = 0,
        V = d.charCodeAt(0),
        q = !1,
        O = 0,
        H = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var I = h.dateNF != null ? g1(h.dateNF) : null;
      function G() {
        var X = c.slice(F, k),
          z = {};
        if (
          (X.charAt(0) == '"' &&
            X.charAt(X.length - 1) == '"' &&
            (X = X.slice(1, -1).replace(/""/g, '"')),
          X.length === 0)
        )
          z.t = 'z';
        else if (h.raw) (z.t = 's'), (z.v = X);
        else if (X.trim().length === 0) (z.t = 's'), (z.v = X);
        else if (X.charCodeAt(0) == 61)
          X.charCodeAt(1) == 34 && X.charCodeAt(X.length - 1) == 34
            ? ((z.t = 's'), (z.v = X.slice(2, -1).replace(/""/g, '"')))
            : rp(X)
              ? ((z.t = 'n'), (z.f = X.slice(1)))
              : ((z.t = 's'), (z.v = X));
        else if (X == 'TRUE') (z.t = 'b'), (z.v = !0);
        else if (X == 'FALSE') (z.t = 'b'), (z.v = !1);
        else if (!isNaN((C = nt(X))))
          (z.t = 'n'), h.cellText !== !1 && (z.w = X), (z.v = C);
        else if (!isNaN(Wn(X).getDate()) || (I && X.match(I))) {
          z.z = h.dateNF || Be[14];
          var ne = 0;
          I &&
            X.match(I) &&
            ((X = E1(X, h.dateNF, X.match(I) || [])), (ne = 1)),
            h.cellDates
              ? ((z.t = 'd'), (z.v = ur(X, ne)))
              : ((z.t = 'n'), (z.v = _r(ur(X, ne)))),
            h.cellText !== !1 &&
              (z.w = gt(z.z, z.v instanceof Date ? _r(z.v) : z.v)),
            h.cellNF || delete z.z;
        } else (z.t = 's'), (z.v = X);
        if (
          (z.t == 'z' ||
            (h.dense
              ? (p[m] || (p[m] = []), (p[m][S] = z))
              : (p[Te({ c: S, r: m })] = z)),
          (F = k + 1),
          (H = c.charCodeAt(F)),
          x.e.c < S && (x.e.c = S),
          x.e.r < m && (x.e.r = m),
          O == V)
        )
          ++S;
        else if (((S = 0), ++m, h.sheetRows && h.sheetRows <= m)) return !0;
      }
      e: for (; k < c.length; ++k)
        switch ((O = c.charCodeAt(k))) {
          case 34:
            H === 34 && (q = !q);
            break;
          case V:
          case 10:
          case 13:
            if (!q && G()) break e;
            break;
        }
      return k - F > 0 && G(), (p['!ref'] = Ue(x)), p;
    }
    function s(c, u) {
      return !(u && u.PRN) ||
        u.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, u)
        : xn(t(c, u), u);
    }
    function f(c, u) {
      var h = '',
        d = u.type == 'string' ? [0, 0, 0, 0] : p_(c, u);
      switch (u.type) {
        case 'base64':
          h = at(c);
          break;
        case 'binary':
          h = c;
          break;
        case 'buffer':
          u.codepage == 65001
            ? (h = c.toString('utf8'))
            : (u.codepage,
              (h = ve && Buffer.isBuffer(c) ? c.toString('binary') : Jn(c)));
          break;
        case 'array':
          h = ha(c);
          break;
        case 'string':
          h = c;
          break;
        default:
          throw new Error('Unrecognized type ' + u.type);
      }
      return (
        d[0] == 239 && d[1] == 187 && d[2] == 191
          ? (h = Nn(h.slice(3)))
          : u.type != 'string' && u.type != 'buffer' && u.codepage == 65001
            ? (h = Nn(h))
            : u.type == 'binary',
        h.slice(0, 19) == 'socialcalc:version:'
          ? el.to_sheet(u.type == 'string' ? h : Nn(h), u)
          : s(h, u)
      );
    }
    function l(c, u) {
      return Lt(f(c, u), u);
    }
    function o(c) {
      for (
        var u = [], h = Ce(c['!ref']), d, p = Array.isArray(c), x = h.s.r;
        x <= h.e.r;
        ++x
      ) {
        for (var m = [], S = h.s.c; S <= h.e.c; ++S) {
          var C = Te({ r: x, c: S });
          if (((d = p ? (c[x] || [])[S] : c[C]), !d || d.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var F = (d.w || (st(d), d.w) || '').slice(0, 10);
            F.length < 10;

          )
            F += ' ';
          m.push(F + (S === 0 ? ' ' : ''));
        }
        u.push(m.join(''));
      }
      return u.join(`
`);
    }
    return { to_workbook: l, to_sheet: f, from_sheet: o };
  })(),
  Ws = (function () {
    function e(y, B, R) {
      if (y) {
        Ar(y, y.l || 0);
        for (var A = R.Enum || ar; y.l < y.length; ) {
          var b = y.read_shift(2),
            Q = A[b] || A[65535],
            ie = y.read_shift(2),
            re = y.l + ie,
            ee = Q.f && Q.f(y, ie, R);
          if (((y.l = re), B(ee, Q, b))) return;
        }
      }
    }
    function t(y, B) {
      switch (B.type) {
        case 'base64':
          return r(Br(at(y)), B);
        case 'binary':
          return r(Br(y), B);
        case 'buffer':
        case 'array':
          return r(y, B);
      }
      throw 'Unsupported type ' + B.type;
    }
    function r(y, B) {
      if (!y) return y;
      var R = B || {},
        A = R.dense ? [] : {},
        b = 'Sheet1',
        Q = '',
        ie = 0,
        re = {},
        ee = [],
        pe = [],
        he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        Pe = R.sheetRows || 0;
      if (
        y[2] == 0 &&
        (y[3] == 8 || y[3] == 9) &&
        y.length >= 16 &&
        y[14] == 5 &&
        y[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (y[2] == 2)
        (R.Enum = ar),
          e(
            y,
            function (se, Ge, Er) {
              switch (Er) {
                case 0:
                  (R.vers = se), se >= 4096 && (R.qpro = !0);
                  break;
                case 6:
                  he = se;
                  break;
                case 204:
                  se && (Q = se);
                  break;
                case 222:
                  Q = se;
                  break;
                case 15:
                case 51:
                  R.qpro || (se[1].v = se[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Er == 14 &&
                    (se[2] & 112) == 112 &&
                    (se[2] & 15) > 1 &&
                    (se[2] & 15) < 15 &&
                    ((se[1].z = R.dateNF || Be[14]),
                    R.cellDates && ((se[1].t = 'd'), (se[1].v = mo(se[1].v)))),
                    R.qpro &&
                      se[3] > ie &&
                      ((A['!ref'] = Ue(he)),
                      (re[b] = A),
                      ee.push(b),
                      (A = R.dense ? [] : {}),
                      (he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ie = se[3]),
                      (b = Q || 'Sheet' + (ie + 1)),
                      (Q = ''));
                  var qr = R.dense ? (A[se[0].r] || [])[se[0].c] : A[Te(se[0])];
                  if (qr) {
                    (qr.t = se[1].t),
                      (qr.v = se[1].v),
                      se[1].z != null && (qr.z = se[1].z),
                      se[1].f != null && (qr.f = se[1].f);
                    break;
                  }
                  R.dense
                    ? (A[se[0].r] || (A[se[0].r] = []),
                      (A[se[0].r][se[0].c] = se[1]))
                    : (A[Te(se[0])] = se[1]);
                  break;
              }
            },
            R,
          );
      else if (y[2] == 26 || y[2] == 14)
        (R.Enum = sr),
          y[2] == 14 && ((R.qpro = !0), (y.l = 0)),
          e(
            y,
            function (se, Ge, Er) {
              switch (Er) {
                case 204:
                  b = se;
                  break;
                case 22:
                  se[1].v = se[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (se[3] > ie &&
                      ((A['!ref'] = Ue(he)),
                      (re[b] = A),
                      ee.push(b),
                      (A = R.dense ? [] : {}),
                      (he = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (ie = se[3]),
                      (b = 'Sheet' + (ie + 1))),
                    Pe > 0 && se[0].r >= Pe)
                  )
                    break;
                  R.dense
                    ? (A[se[0].r] || (A[se[0].r] = []),
                      (A[se[0].r][se[0].c] = se[1]))
                    : (A[Te(se[0])] = se[1]),
                    he.e.c < se[0].c && (he.e.c = se[0].c),
                    he.e.r < se[0].r && (he.e.r = se[0].r);
                  break;
                case 27:
                  se[14e3] && (pe[se[14e3][0]] = se[14e3][1]);
                  break;
                case 1537:
                  (pe[se[0]] = se[1]), se[0] == ie && (b = se[1]);
                  break;
              }
            },
            R,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + y[2]);
      if (((A['!ref'] = Ue(he)), (re[Q || b] = A), ee.push(Q || b), !pe.length))
        return { SheetNames: ee, Sheets: re };
      for (var xe = {}, Ir = [], Re = 0; Re < pe.length; ++Re)
        re[ee[Re]]
          ? (Ir.push(pe[Re] || ee[Re]), (xe[pe[Re]] = re[pe[Re]] || re[ee[Re]]))
          : (Ir.push(pe[Re]), (xe[pe[Re]] = { '!ref': 'A1' }));
      return { SheetNames: Ir, Sheets: xe };
    }
    function n(y, B) {
      var R = B || {};
      if ((+R.codepage >= 0 && Un(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var A = vr(),
        b = Ce(y['!ref']),
        Q = Array.isArray(y),
        ie = [];
      Z(A, 0, a(1030)), Z(A, 6, l(b));
      for (var re = Math.min(b.e.r, 8191), ee = b.s.r; ee <= re; ++ee)
        for (var pe = Ze(ee), he = b.s.c; he <= b.e.c; ++he) {
          ee === b.s.r && (ie[he] = nr(he));
          var Pe = ie[he] + pe,
            xe = Q ? (y[ee] || [])[he] : y[Pe];
          if (!(!xe || xe.t == 'z'))
            if (xe.t == 'n')
              (xe.v | 0) == xe.v && xe.v >= -32768 && xe.v <= 32767
                ? Z(A, 13, d(ee, he, xe.v))
                : Z(A, 14, x(ee, he, xe.v));
            else {
              var Ir = st(xe);
              Z(A, 15, u(ee, he, Ir.slice(0, 239)));
            }
        }
      return Z(A, 1), A.end();
    }
    function i(y, B) {
      var R = B || {};
      if ((+R.codepage >= 0 && Un(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var A = vr();
      Z(A, 0, s(y));
      for (var b = 0, Q = 0; b < y.SheetNames.length; ++b)
        (y.Sheets[y.SheetNames[b]] || {})['!ref'] &&
          Z(A, 27, Me(y.SheetNames[b], Q++));
      var ie = 0;
      for (b = 0; b < y.SheetNames.length; ++b) {
        var re = y.Sheets[y.SheetNames[b]];
        if (!(!re || !re['!ref'])) {
          for (
            var ee = Ce(re['!ref']),
              pe = Array.isArray(re),
              he = [],
              Pe = Math.min(ee.e.r, 8191),
              xe = ee.s.r;
            xe <= Pe;
            ++xe
          )
            for (var Ir = Ze(xe), Re = ee.s.c; Re <= ee.e.c; ++Re) {
              xe === ee.s.r && (he[Re] = nr(Re));
              var se = he[Re] + Ir,
                Ge = pe ? (re[xe] || [])[Re] : re[se];
              if (!(!Ge || Ge.t == 'z'))
                if (Ge.t == 'n') Z(A, 23, G(xe, Re, ie, Ge.v));
                else {
                  var Er = st(Ge);
                  Z(A, 22, O(xe, Re, ie, Er.slice(0, 239)));
                }
            }
          ++ie;
        }
      }
      return Z(A, 1), A.end();
    }
    function a(y) {
      var B = U(2);
      return B.write_shift(2, y), B;
    }
    function s(y) {
      var B = U(26);
      B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
      for (var R = 0, A = 0, b = 0, Q = 0; Q < y.SheetNames.length; ++Q) {
        var ie = y.SheetNames[Q],
          re = y.Sheets[ie];
        if (!(!re || !re['!ref'])) {
          ++b;
          var ee = Or(re['!ref']);
          R < ee.e.r && (R = ee.e.r), A < ee.e.c && (A = ee.e.c);
        }
      }
      return (
        R > 8191 && (R = 8191),
        B.write_shift(2, R),
        B.write_shift(1, b),
        B.write_shift(1, A),
        B.write_shift(2, 0),
        B.write_shift(2, 0),
        B.write_shift(1, 1),
        B.write_shift(1, 2),
        B.write_shift(4, 0),
        B.write_shift(4, 0),
        B
      );
    }
    function f(y, B, R) {
      var A = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return B == 8 && R.qpro
        ? ((A.s.c = y.read_shift(1)),
          y.l++,
          (A.s.r = y.read_shift(2)),
          (A.e.c = y.read_shift(1)),
          y.l++,
          (A.e.r = y.read_shift(2)),
          A)
        : ((A.s.c = y.read_shift(2)),
          (A.s.r = y.read_shift(2)),
          B == 12 && R.qpro && (y.l += 2),
          (A.e.c = y.read_shift(2)),
          (A.e.r = y.read_shift(2)),
          B == 12 && R.qpro && (y.l += 2),
          A.s.c == 65535 && (A.s.c = A.e.c = A.s.r = A.e.r = 0),
          A);
    }
    function l(y) {
      var B = U(8);
      return (
        B.write_shift(2, y.s.c),
        B.write_shift(2, y.s.r),
        B.write_shift(2, y.e.c),
        B.write_shift(2, y.e.r),
        B
      );
    }
    function o(y, B, R) {
      var A = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        R.qpro && R.vers != 20768
          ? ((A[0].c = y.read_shift(1)),
            (A[3] = y.read_shift(1)),
            (A[0].r = y.read_shift(2)),
            (y.l += 2))
          : ((A[2] = y.read_shift(1)),
            (A[0].c = y.read_shift(2)),
            (A[0].r = y.read_shift(2))),
        A
      );
    }
    function c(y, B, R) {
      var A = y.l + B,
        b = o(y, B, R);
      if (((b[1].t = 's'), R.vers == 20768)) {
        y.l++;
        var Q = y.read_shift(1);
        return (b[1].v = y.read_shift(Q, 'utf8')), b;
      }
      return R.qpro && y.l++, (b[1].v = y.read_shift(A - y.l, 'cstr')), b;
    }
    function u(y, B, R) {
      var A = U(7 + R.length);
      A.write_shift(1, 255),
        A.write_shift(2, B),
        A.write_shift(2, y),
        A.write_shift(1, 39);
      for (var b = 0; b < A.length; ++b) {
        var Q = R.charCodeAt(b);
        A.write_shift(1, Q >= 128 ? 95 : Q);
      }
      return A.write_shift(1, 0), A;
    }
    function h(y, B, R) {
      var A = o(y, B, R);
      return (A[1].v = y.read_shift(2, 'i')), A;
    }
    function d(y, B, R) {
      var A = U(7);
      return (
        A.write_shift(1, 255),
        A.write_shift(2, B),
        A.write_shift(2, y),
        A.write_shift(2, R, 'i'),
        A
      );
    }
    function p(y, B, R) {
      var A = o(y, B, R);
      return (A[1].v = y.read_shift(8, 'f')), A;
    }
    function x(y, B, R) {
      var A = U(13);
      return (
        A.write_shift(1, 255),
        A.write_shift(2, B),
        A.write_shift(2, y),
        A.write_shift(8, R, 'f'),
        A
      );
    }
    function m(y, B, R) {
      var A = y.l + B,
        b = o(y, B, R);
      if (((b[1].v = y.read_shift(8, 'f')), R.qpro)) y.l = A;
      else {
        var Q = y.read_shift(2);
        k(y.slice(y.l, y.l + Q), b), (y.l += Q);
      }
      return b;
    }
    function S(y, B, R) {
      var A = B & 32768;
      return (
        (B &= -32769),
        (B = (A ? y : 0) + (B >= 8192 ? B - 16384 : B)),
        (A ? '' : '$') + (R ? nr(B) : Ze(B))
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
    function k(y, B) {
      Ar(y, 0);
      for (
        var R = [], A = 0, b = '', Q = '', ie = '', re = '';
        y.l < y.length;

      ) {
        var ee = y[y.l++];
        switch (ee) {
          case 0:
            R.push(y.read_shift(8, 'f'));
            break;
          case 1:
            (Q = S(B[0].c, y.read_shift(2), !0)),
              (b = S(B[0].r, y.read_shift(2), !1)),
              R.push(Q + b);
            break;
          case 2:
            {
              var pe = S(B[0].c, y.read_shift(2), !0),
                he = S(B[0].r, y.read_shift(2), !1);
              (Q = S(B[0].c, y.read_shift(2), !0)),
                (b = S(B[0].r, y.read_shift(2), !1)),
                R.push(pe + he + ':' + Q + b);
            }
            break;
          case 3:
            if (y.l < y.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            R.push('(' + R.pop() + ')');
            break;
          case 5:
            R.push(y.read_shift(2));
            break;
          case 6:
            {
              for (var Pe = ''; (ee = y[y.l++]); )
                Pe += String.fromCharCode(ee);
              R.push('"' + Pe.replace(/"/g, '""') + '"');
            }
            break;
          case 8:
            R.push('-' + R.pop());
            break;
          case 23:
            R.push('+' + R.pop());
            break;
          case 22:
            R.push('NOT(' + R.pop() + ')');
            break;
          case 20:
          case 21:
            (re = R.pop()),
              (ie = R.pop()),
              R.push(['AND', 'OR'][ee - 20] + '(' + ie + ',' + re + ')');
            break;
          default:
            if (ee < 32 && F[ee])
              (re = R.pop()), (ie = R.pop()), R.push(ie + F[ee] + re);
            else if (C[ee]) {
              if (((A = C[ee][1]), A == 69 && (A = y[y.l++]), A > R.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    ee.toString(16) +
                    ':|' +
                    R.join('|') +
                    '|',
                );
                return;
              }
              var xe = R.slice(-A);
              (R.length -= A), R.push(C[ee][0] + '(' + xe.join(',') + ')');
            } else
              return ee <= 7
                ? console.error('WK1 invalid opcode ' + ee.toString(16))
                : ee <= 24
                  ? console.error('WK1 unsupported op ' + ee.toString(16))
                  : ee <= 30
                    ? console.error('WK1 invalid opcode ' + ee.toString(16))
                    : ee <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + ee.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + ee.toString(16),
                        );
        }
      }
      R.length == 1
        ? (B[1].f = '' + R[0])
        : console.error('WK1 bad formula parse |' + R.join('|') + '|');
    }
    function V(y) {
      var B = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (B[0].r = y.read_shift(2)), (B[3] = y[y.l++]), (B[0].c = y[y.l++]), B
      );
    }
    function q(y, B) {
      var R = V(y);
      return (R[1].t = 's'), (R[1].v = y.read_shift(B - 4, 'cstr')), R;
    }
    function O(y, B, R, A) {
      var b = U(6 + A.length);
      b.write_shift(2, y),
        b.write_shift(1, R),
        b.write_shift(1, B),
        b.write_shift(1, 39);
      for (var Q = 0; Q < A.length; ++Q) {
        var ie = A.charCodeAt(Q);
        b.write_shift(1, ie >= 128 ? 95 : ie);
      }
      return b.write_shift(1, 0), b;
    }
    function H(y, B) {
      var R = V(y);
      R[1].v = y.read_shift(2);
      var A = R[1].v >> 1;
      if (R[1].v & 1)
        switch (A & 7) {
          case 0:
            A = (A >> 3) * 5e3;
            break;
          case 1:
            A = (A >> 3) * 500;
            break;
          case 2:
            A = (A >> 3) / 20;
            break;
          case 3:
            A = (A >> 3) / 200;
            break;
          case 4:
            A = (A >> 3) / 2e3;
            break;
          case 5:
            A = (A >> 3) / 2e4;
            break;
          case 6:
            A = (A >> 3) / 16;
            break;
          case 7:
            A = (A >> 3) / 64;
            break;
        }
      return (R[1].v = A), R;
    }
    function I(y, B) {
      var R = V(y),
        A = y.read_shift(4),
        b = y.read_shift(4),
        Q = y.read_shift(2);
      if (Q == 65535)
        return (
          A === 0 && b === 3221225472
            ? ((R[1].t = 'e'), (R[1].v = 15))
            : A === 0 && b === 3489660928
              ? ((R[1].t = 'e'), (R[1].v = 42))
              : (R[1].v = 0),
          R
        );
      var ie = Q & 32768;
      return (
        (Q = (Q & 32767) - 16446),
        (R[1].v =
          (1 - ie * 2) * (b * Math.pow(2, Q + 32) + A * Math.pow(2, Q))),
        R
      );
    }
    function G(y, B, R, A) {
      var b = U(14);
      if (
        (b.write_shift(2, y), b.write_shift(1, R), b.write_shift(1, B), A == 0)
      )
        return (
          b.write_shift(4, 0), b.write_shift(4, 0), b.write_shift(2, 65535), b
        );
      var Q = 0,
        ie = 0,
        re = 0,
        ee = 0;
      return (
        A < 0 && ((Q = 1), (A = -A)),
        (ie = Math.log2(A) | 0),
        (A /= Math.pow(2, ie - 31)),
        (ee = A >>> 0),
        (ee & 2147483648) == 0 && ((A /= 2), ++ie, (ee = A >>> 0)),
        (A -= ee),
        (ee |= 2147483648),
        (ee >>>= 0),
        (A *= Math.pow(2, 32)),
        (re = A >>> 0),
        b.write_shift(4, re),
        b.write_shift(4, ee),
        (ie += 16383 + (Q ? 32768 : 0)),
        b.write_shift(2, ie),
        b
      );
    }
    function X(y, B) {
      var R = I(y);
      return (y.l += B - 14), R;
    }
    function z(y, B) {
      var R = V(y),
        A = y.read_shift(4);
      return (R[1].v = A >> 6), R;
    }
    function ne(y, B) {
      var R = V(y),
        A = y.read_shift(8, 'f');
      return (R[1].v = A), R;
    }
    function me(y, B) {
      var R = ne(y);
      return (y.l += B - 10), R;
    }
    function oe(y, B) {
      return y[y.l + B - 1] == 0 ? y.read_shift(B, 'cstr') : '';
    }
    function We(y, B) {
      var R = y[y.l++];
      R > B - 1 && (R = B - 1);
      for (var A = ''; A.length < R; ) A += String.fromCharCode(y[y.l++]);
      return A;
    }
    function Oe(y, B, R) {
      if (!(!R.qpro || B < 21)) {
        var A = y.read_shift(1);
        (y.l += 17), (y.l += 1), (y.l += 2);
        var b = y.read_shift(B - 21, 'cstr');
        return [A, b];
      }
    }
    function hr(y, B) {
      for (var R = {}, A = y.l + B; y.l < A; ) {
        var b = y.read_shift(2);
        if (b == 14e3) {
          for (R[b] = [0, ''], R[b][0] = y.read_shift(2); y[y.l]; )
            (R[b][1] += String.fromCharCode(y[y.l])), y.l++;
          y.l++;
        }
      }
      return R;
    }
    function Me(y, B) {
      var R = U(5 + y.length);
      R.write_shift(2, 14e3), R.write_shift(2, B);
      for (var A = 0; A < y.length; ++A) {
        var b = y.charCodeAt(A);
        R[R.l++] = b > 127 ? 95 : b;
      }
      return (R[R.l++] = 0), R;
    }
    var ar = {
        0: { n: 'BOF', f: Yo },
        1: { n: 'EOF' },
        2: { n: 'CALCMODE' },
        3: { n: 'CALCORDER' },
        4: { n: 'SPLIT' },
        5: { n: 'SYNC' },
        6: { n: 'RANGE', f },
        7: { n: 'WINDOW1' },
        8: { n: 'COLW1' },
        9: { n: 'WINTWO' },
        10: { n: 'COLW2' },
        11: { n: 'NAME' },
        12: { n: 'BLANK' },
        13: { n: 'INTEGER', f: h },
        14: { n: 'NUMBER', f: p },
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
        204: { n: 'SHEETNAMECS', f: oe },
        222: { n: 'SHEETNAMELP', f: We },
        65535: { n: '' },
      },
      sr = {
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
        22: { n: 'LABEL16', f: q },
        23: { n: 'NUMBER17', f: I },
        24: { n: 'NUMBER18', f: H },
        25: { n: 'FORMULA19', f: X },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: hr },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: z },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: ne },
        40: { n: 'FORMULA28', f: me },
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
        204: { n: 'SHEETNAMECS', f: oe },
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
        1537: { n: 'SHEETINFOQP', f: Oe },
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
    return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: t };
  })(),
  id = /^\s|\s$|[\t\n\r]/;
function rl(e, t) {
  if (!t.bookSST) return '';
  var r = [He];
  r[r.length] = J('sst', null, {
    xmlns: hn[0],
    count: e.Count,
    uniqueCount: e.Unique,
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var i = e[n],
        a = '<si>';
      i.r
        ? (a += i.r)
        : ((a += '<t'),
          i.t || (i.t = ''),
          i.t.match(id) && (a += ' xml:space="preserve"'),
          (a += '>' + Ee(i.t) + '</t>')),
        (a += '</si>'),
        (r[r.length] = a);
    }
  return (
    r.length > 2 &&
      ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function ad(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function sd(e, t) {
  return (
    t || (t = U(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
  );
}
var fd = J1;
function od(e) {
  var t = vr();
  j(t, 159, sd(e));
  for (var r = 0; r < e.length; ++r) j(t, 19, fd(e[r]));
  return j(t, 160), t.end();
}
function ld(e) {
  for (var t = [], r = e.split(''), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function tl(e) {
  var t = 0,
    r,
    n = ld(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (r = Dt(i), r[0] = n.length, a = 1; a != i; ++a) r[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = r[a]),
      (f = (t & 16384) === 0 ? 0 : 1),
      (l = (t << 1) & 32767),
      (o = f | l),
      (t = o ^ s);
  return t ^ 52811;
}
var cd = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return t(at(i), a);
      case 'binary':
        return t(i, a);
      case 'buffer':
        return t(ve && Buffer.isBuffer(i) ? i.toString('binary') : Jn(i), a);
      case 'array':
        return t(ha(i), a);
    }
    throw new Error('Unrecognized type ' + a.type);
  }
  function t(i, a) {
    var s = a || {},
      f = s.dense ? [] : {},
      l = i.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error('RTF missing table');
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (c, u) {
        Array.isArray(f) && (f[u] = []);
        for (var h = /\\\w+\b/g, d = 0, p, x = -1; (p = h.exec(c)); ) {
          switch (p[0]) {
            case '\\cell':
              var m = c.slice(d, h.lastIndex - p[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++x, m.length)) {
                var S = { v: m, t: 's' };
                Array.isArray(f) ? (f[u][x] = S) : (f[Te({ r: u, c: x })] = S);
              }
              break;
          }
          d = h.lastIndex;
        }
        x > o.e.c && (o.e.c = x);
      }),
      (f['!ref'] = Ue(o)),
      f
    );
  }
  function r(i, a) {
    return Lt(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = Ce(i['!ref']),
        f,
        l = Array.isArray(i),
        o = s.s.r;
      o <= s.e.r;
      ++o
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var u = Te({ r: o, c });
        (f = l ? (i[o] || [])[c] : i[u]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (a.push(' ' + (f.w || (st(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function Vs(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var ud = 6,
  it = ud;
function ji(e) {
  return Math.floor((e + Math.round(128 / it) / 256) * it);
}
function Xi(e) {
  return Math.floor(((e - 5) / it) * 100 + 0.5) / 100;
}
function qa(e) {
  return Math.round(((e * it + 5) / it) * 256) / 256;
}
function C0(e) {
  e.width
    ? ((e.wpx = ji(e.width)), (e.wch = Xi(e.wpx)), (e.MDW = it))
    : e.wpx
      ? ((e.wch = Xi(e.wpx)), (e.width = qa(e.wch)), (e.MDW = it))
      : typeof e.wch == 'number' &&
        ((e.width = qa(e.wch)), (e.wpx = ji(e.width)), (e.MDW = it)),
    e.customWidth && delete e.customWidth;
}
var hd = 96,
  nl = hd;
function $i(e) {
  return (e * 96) / nl;
}
function il(e) {
  return (e * nl) / 96;
}
function xd(e) {
  var t = ['<numFmts>'];
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (r) {
      for (var n = r[0]; n <= r[1]; ++n)
        e[n] != null &&
          (t[t.length] = J('numFmt', null, {
            numFmtId: n,
            formatCode: Ee(e[n]),
          }));
    }),
    t.length === 1
      ? ''
      : ((t[t.length] = '</numFmts>'),
        (t[0] = J('numFmts', null, { count: t.length - 2 }).replace('/>', '>')),
        t.join(''))
  );
}
function dd(e) {
  var t = [];
  return (
    (t[t.length] = J('cellXfs', null)),
    e.forEach(function (r) {
      t[t.length] = J('xf', null, r);
    }),
    (t[t.length] = '</cellXfs>'),
    t.length === 2
      ? ''
      : ((t[0] = J('cellXfs', null, { count: t.length - 2 }).replace(
          '/>',
          '>',
        )),
        t.join(''))
  );
}
function al(e, t) {
  var r = [He, J('styleSheet', null, { xmlns: hn[0], 'xmlns:vt': je.vt })],
    n;
  return (
    e.SSF && (n = xd(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = dd(t.cellXfs)) && (r[r.length] = n),
    (r[r.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (r[r.length] = '<dxfs count="0"/>'),
    (r[r.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    r.length > 2 &&
      ((r[r.length] = '</styleSheet>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function pd(e, t) {
  var r = e.read_shift(2),
    n = ir(e);
  return [r, n];
}
function vd(e, t, r) {
  r || (r = U(6 + 4 * t.length)), r.write_shift(2, e), $e(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function md(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = ix(e);
  i.fItalic && (n.italic = 1),
    i.fCondense && (n.condense = 1),
    i.fExtend && (n.extend = 1),
    i.fShadow && (n.shadow = 1),
    i.fOutline && (n.outline = 1),
    i.fStrikeout && (n.strike = 1);
  var a = e.read_shift(2);
  switch ((a === 700 && (n.bold = 1), e.read_shift(2))) {
    case 1:
      n.vertAlign = 'superscript';
      break;
    case 2:
      n.vertAlign = 'subscript';
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var f = e.read_shift(1);
  f > 0 && (n.family = f);
  var l = e.read_shift(1);
  switch (
    (l > 0 && (n.charset = l), e.l++, (n.color = nx(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = ir(e)), n;
}
function _d(e, t) {
  t || (t = U(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    ax(e, t),
    t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == 'superscript'
    ? (r = 1)
    : e.vertAlign == 'subscript' && (r = 2),
    t.write_shift(2, r),
    t.write_shift(1, e.underline || 0),
    t.write_shift(1, e.family || 0),
    t.write_shift(1, e.charset || 0),
    t.write_shift(1, 0),
    Vi(e.color, t);
  var n = 0;
  return (
    (n = 2),
    t.write_shift(1, n),
    $e(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
var gd = [
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
  Da,
  Ed = Yr;
function Gs(e, t) {
  t || (t = U(4 * 3 + 8 * 7 + 16 * 1)), Da || (Da = p0(gd));
  var r = Da[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (Vi({ auto: 1 }, t), Vi({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function Td(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: i };
}
function sl(e, t, r) {
  r || (r = U(16)),
    r.write_shift(2, t || 0),
    r.write_shift(2, e.numFmtId || 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0);
  var n = 0;
  return (
    r.write_shift(1, n),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r
  );
}
function Sn(e, t) {
  return (
    t || (t = U(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var wd = Yr;
function Sd(e, t) {
  return (
    t || (t = U(51)),
    t.write_shift(1, 0),
    Sn(null, t),
    Sn(null, t),
    Sn(null, t),
    Sn(null, t),
    Sn(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function Ad(e, t) {
  return (
    t || (t = U(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    Wi(e.name || '', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function yd(e, t, r) {
  var n = U(2052);
  return (
    n.write_shift(4, e),
    Wi(t, n),
    Wi(r, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Fd(e, t) {
  if (t) {
    var r = 0;
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i) t[i] != null && ++r;
    }),
      r != 0 &&
        (j(e, 615, br(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            t[i] != null && j(e, 44, vd(i, t[i]));
        }),
        j(e, 616));
  }
}
function Cd(e) {
  var t = 1;
  j(e, 611, br(t)),
    j(e, 43, _d({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    j(e, 612);
}
function Od(e) {
  var t = 2;
  j(e, 603, br(t)),
    j(e, 45, Gs({ patternType: 'none' })),
    j(e, 45, Gs({ patternType: 'gray125' })),
    j(e, 604);
}
function Rd(e) {
  var t = 1;
  j(e, 613, br(t)), j(e, 46, Sd()), j(e, 614);
}
function Nd(e) {
  var t = 1;
  j(e, 626, br(t)), j(e, 47, sl({ numFmtId: 0 }, 65535)), j(e, 627);
}
function Dd(e, t) {
  j(e, 617, br(t.length)),
    t.forEach(function (r) {
      j(e, 47, sl(r, 0));
    }),
    j(e, 618);
}
function kd(e) {
  var t = 1;
  j(e, 619, br(t)), j(e, 48, Ad({ xfId: 0, name: 'Normal' })), j(e, 620);
}
function Id(e) {
  var t = 0;
  j(e, 505, br(t)), j(e, 506);
}
function Pd(e) {
  var t = 0;
  j(e, 508, yd(t, 'TableStyleMedium9', 'PivotStyleMedium4')), j(e, 509);
}
function Ld(e, t) {
  var r = vr();
  return (
    j(r, 278),
    Fd(r, e.SSF),
    Cd(r),
    Od(r),
    Rd(r),
    Nd(r),
    Dd(r, t.cellXfs),
    kd(r),
    Id(r),
    Pd(r),
    j(r, 279),
    r.end()
  );
}
function fl(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var r = [He];
  return (
    (r[r.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (r[r.length] = '<a:themeElements>'),
    (r[r.length] = '<a:clrScheme name="Office">'),
    (r[r.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (r[r.length] = '</a:clrScheme>'),
    (r[r.length] = '<a:fontScheme name="Office">'),
    (r[r.length] = '<a:majorFont>'),
    (r[r.length] = '<a:latin typeface="Cambria"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = '</a:majorFont>'),
    (r[r.length] = '<a:minorFont>'),
    (r[r.length] = '<a:latin typeface="Calibri"/>'),
    (r[r.length] = '<a:ea typeface=""/>'),
    (r[r.length] = '<a:cs typeface=""/>'),
    (r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (r[r.length] = '</a:minorFont>'),
    (r[r.length] = '</a:fontScheme>'),
    (r[r.length] = '<a:fmtScheme name="Office">'),
    (r[r.length] = '<a:fillStyleLst>'),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '</a:fillStyleLst>'),
    (r[r.length] = '<a:lnStyleLst>'),
    (r[r.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (r[r.length] = '</a:lnStyleLst>'),
    (r[r.length] = '<a:effectStyleLst>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '<a:effectStyle>'),
    (r[r.length] = '<a:effectLst>'),
    (r[r.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (r[r.length] = '</a:effectLst>'),
    (r[r.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (r[r.length] = '</a:effectStyle>'),
    (r[r.length] = '</a:effectStyleLst>'),
    (r[r.length] = '<a:bgFillStyleLst>'),
    (r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '<a:gradFill rotWithShape="1">'),
    (r[r.length] = '<a:gsLst>'),
    (r[r.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (r[r.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (r[r.length] = '</a:gsLst>'),
    (r[r.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (r[r.length] = '</a:gradFill>'),
    (r[r.length] = '</a:bgFillStyleLst>'),
    (r[r.length] = '</a:fmtScheme>'),
    (r[r.length] = '</a:themeElements>'),
    (r[r.length] = '<a:objectDefaults>'),
    (r[r.length] = '<a:spDef>'),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (r[r.length] = '</a:spDef>'),
    (r[r.length] = '<a:lnDef>'),
    (r[r.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (r[r.length] = '</a:lnDef>'),
    (r[r.length] = '</a:objectDefaults>'),
    (r[r.length] = '<a:extraClrSchemeLst/>'),
    (r[r.length] = '</a:theme>'),
    r.join('')
  );
}
function Bd(e, t) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: ir(e) };
}
function Md(e) {
  var t = U(12 + 2 * e.name.length);
  return (
    t.write_shift(4, e.flags),
    t.write_shift(4, e.version),
    $e(e.name, t),
    t.slice(0, t.l)
  );
}
function bd(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Ud(e) {
  var t = U(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function Hd(e, t) {
  var r = U(8 + 2 * t.length);
  return r.write_shift(4, e), $e(t, r), r.slice(0, r.l);
}
function Wd(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function Vd(e, t) {
  var r = U(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function Gd() {
  var e = vr();
  return (
    j(e, 332),
    j(e, 334, br(1)),
    j(e, 335, Md({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    j(e, 336),
    j(e, 339, Hd(1, 'XLDAPR')),
    j(e, 52),
    j(e, 35, br(514)),
    j(e, 4096, br(0)),
    j(e, 4097, Dr(1)),
    j(e, 36),
    j(e, 53),
    j(e, 340),
    j(e, 337, Vd(1)),
    j(e, 51, Ud([[1, 0]])),
    j(e, 338),
    j(e, 333),
    e.end()
  );
}
function ol() {
  var e = [He];
  return (
    e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
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
    e.join('')
  );
}
function jd(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = Te(r));
  var n = e.read_shift(1);
  return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t;
}
var en = 1024;
function ll(e, t) {
  for (
    var r = [21600, 21600],
      n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
      i = [
        J('xml', null, {
          'xmlns:v': yr.v,
          'xmlns:o': yr.o,
          'xmlns:x': yr.x,
          'xmlns:mv': yr.mv,
        }).replace(/\/>/, '>'),
        J('o:shapelayout', J('o:idmap', null, { 'v:ext': 'edit', data: e }), {
          'v:ext': 'edit',
        }),
        J(
          'v:shapetype',
          [
            J('v:stroke', null, { joinstyle: 'miter' }),
            J('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n },
        ),
      ];
    en < e * 1e3;

  )
    en += 1e3;
  return (
    t.forEach(function (a) {
      var s = Xe(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? J('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = J('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++en,
        (i = i.concat([
          '<v:shape' +
            Gn({
              id: '_x0000_s' + en,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (a[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          o,
          J('v:shadow', null, c),
          J('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          Je(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          Je('x:AutoFill', 'False'),
          Je('x:Row', String(s.r)),
          Je('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function cl(e) {
  var t = [He, J('comments', null, { xmlns: hn[0] })],
    r = [];
  return (
    t.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = Ee(i.a);
        r.indexOf(a) == -1 && (r.push(a), t.push('<author>' + a + '</author>')),
          i.T &&
            i.ID &&
            r.indexOf('tc=' + i.ID) == -1 &&
            (r.push('tc=' + i.ID), t.push('<author>tc=' + i.ID + '</author>'));
      });
    }),
    r.length == 0 && (r.push('SheetJ5'), t.push('<author>SheetJ5</author>')),
    t.push('</authors>'),
    t.push('<commentList>'),
    e.forEach(function (n) {
      var i = 0,
        a = [];
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (i = r.indexOf('tc=' + n[1][0].ID))
          : n[1].forEach(function (l) {
              l.a && (i = r.indexOf(Ee(l.a))), a.push(l.t || '');
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        t.push(Je('t', Ee(a[0] || '')));
      else {
        for (
          var s =
              `Comment:
    ` +
              a[0] +
              `
`,
            f = 1;
          f < a.length;
          ++f
        )
          s +=
            `Reply:
    ` +
            a[f] +
            `
`;
        t.push(Je('t', Ee(s)));
      }
      t.push('</text></comment>');
    }),
    t.push('</commentList>'),
    t.length > 2 &&
      ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Xd(e, t, r) {
  var n = [
    He,
    J('ThreadedComments', null, { xmlns: je.TCMNT }).replace(/[\/]>/, '>'),
  ];
  return (
    e.forEach(function (i) {
      var a = '';
      (i[1] || []).forEach(function (s, f) {
        if (!s.T) {
          delete s.ID;
          return;
        }
        s.a && t.indexOf(s.a) == -1 && t.push(s.a);
        var l = {
          ref: i[0],
          id:
            '{54EE7951-7262-4200-6969-' +
            ('000000000000' + r.tcid++).slice(-12) +
            '}',
        };
        f == 0 ? (a = l.id) : (l.parentId = a),
          (s.ID = l.id),
          s.a &&
            (l.personId =
              '{54EE7950-7262-4200-6969-' +
              ('000000000000' + t.indexOf(s.a)).slice(-12) +
              '}'),
          n.push(J('threadedComment', Je('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function $d(e) {
  var t = [
    He,
    J('personList', null, { xmlns: je.TCMNT, 'xmlns:x': hn[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    e.forEach(function (r, n) {
      t.push(
        J('person', null, {
          displayName: r,
          id:
            '{54EE7950-7262-4200-6969-' + ('000000000000' + n).slice(-12) + '}',
          userId: r,
          providerId: 'None',
        }),
      );
    }),
    t.push('</personList>'),
    t.join('')
  );
}
function zd(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Ut(e);
  return (t.rfx = r.s), (t.ref = Te(r.s)), (e.l += 16), t;
}
function Kd(e, t) {
  return (
    t == null && (t = U(36)),
    t.write_shift(4, e[1].iauthor),
    dn(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var Yd = ir;
function qd(e) {
  return $e(e.slice(0, 54));
}
function Jd(e) {
  var t = vr(),
    r = [];
  return (
    j(t, 628),
    j(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        r.indexOf(i.a) > -1 || (r.push(i.a.slice(0, 54)), j(t, 632, qd(i.a)));
      });
    }),
    j(t, 631),
    j(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = r.indexOf(i.a);
        var a = { s: Xe(n[0]), e: Xe(n[0]) };
        j(t, 635, Kd([a, i])),
          i.t && i.t.length > 0 && j(t, 637, Q1(i)),
          j(t, 636),
          delete i.iauthor;
      });
    }),
    j(t, 634),
    j(t, 629),
    t.end()
  );
}
function Zd(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var i = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Se.utils.cfb_add(e, i, t.FileIndex[n].content);
    }
  });
}
var ul = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  Qd = (function () {
    var e =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      t = { r: 0, c: 0 };
    function r(n, i, a, s) {
      var f = !1,
        l = !1;
      a.length == 0
        ? (l = !0)
        : a.charAt(0) == '[' && ((l = !0), (a = a.slice(1, -1))),
        s.length == 0
          ? (f = !0)
          : s.charAt(0) == '[' && ((f = !0), (s = s.slice(1, -1)));
      var o = a.length > 0 ? parseInt(a, 10) | 0 : 0,
        c = s.length > 0 ? parseInt(s, 10) | 0 : 0;
      return (
        f ? (c += t.c) : --c,
        l ? (o += t.r) : --o,
        i + (f ? '' : '$') + nr(c) + (l ? '' : '$') + Ze(o)
      );
    }
    return function (i, a) {
      return (t = a), i.replace(e, r);
    };
  })(),
  O0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  R0 = (function () {
    return function (t, r) {
      return t.replace(O0, function (n, i, a, s, f, l) {
        var o = w0(s) - (a ? 0 : r.c),
          c = T0(l) - (f ? 0 : r.r),
          u = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          h = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + u + 'C' + h;
      });
    };
  })();
function ep(e, t) {
  return e.replace(O0, function (r, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : nr(w0(a) + t.c)) +
      (s == '$' ? s + f : Ze(T0(f) + t.r))
    );
  });
}
function rp(e) {
  return e.length != 1;
}
function be(e) {
  e.l += 1;
}
function Et(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function hl(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return xl(e);
    r.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n),
    a = e.read_shift(n),
    s = Et(e),
    f = Et(e);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: f[0], cRel: f[1], rRel: f[2] },
  };
}
function xl(e) {
  var t = Et(e),
    r = Et(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: i, cRel: r[1], rRel: r[2] },
  };
}
function tp(e, t, r) {
  if (r.biff < 8) return xl(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    i = e.read_shift(r.biff == 12 ? 4 : 2),
    a = Et(e),
    s = Et(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function dl(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return np(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    i = Et(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function np(e) {
  var t = Et(e),
    r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function ip(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2);
  return {
    r: t,
    c: r & 255,
    fQuoted: !!(r & 16384),
    cRel: r >> 15,
    rRel: r >> 15,
  };
}
function ap(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return sp(e);
  var i = e.read_shift(n >= 12 ? 4 : 2),
    a = e.read_shift(2),
    s = (a & 16384) >> 14,
    f = (a & 32768) >> 15;
  if (((a &= 16383), f == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: f };
}
function sp(e) {
  var t = e.read_shift(2),
    r = e.read_shift(1),
    n = (t & 32768) >> 15,
    i = (t & 16384) >> 14;
  return (
    (t &= 16383),
    n == 1 && t >= 8192 && (t = t - 16384),
    i == 1 && r >= 128 && (r = r - 256),
    { r: t, c: r, cRel: i, rRel: n }
  );
}
function fp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = hl(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, i];
}
function op(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2, 'i'),
    a = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  var s = hl(e, a, r);
  return [n, i, s];
}
function lp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function cp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2),
    a = 8;
  if (r)
    switch (r.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  return (e.l += a), [n, i];
}
function up(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = tp(e, t - 1, r);
  return [n, i];
}
function hp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function js(e) {
  var t = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [t, r];
}
function xp(e, t, r) {
  e.l += 2;
  for (
    var n = e.read_shift(r && r.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return i;
}
function dp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function pp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function vp(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [t, e.read_shift(2)];
}
function mp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function pl(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1);
  return [t, r];
}
function _p(e) {
  return e.read_shift(2), pl(e);
}
function gp(e) {
  return e.read_shift(2), pl(e);
}
function Ep(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = dl(e, 0, r);
  return [n, i];
}
function Tp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = ap(e, 0, r);
  return [n, i];
}
function wp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var a = dl(e, 0, r);
  return [n, i, a];
}
function Sp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [Sv[i], _l[i], n];
}
function Ap(e, t, r) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : yp(e);
  return [i, (a[0] === 0 ? _l : wv)[a[1]]];
}
function yp(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Fp(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Cp(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0];
  var n = e.read_shift(2),
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Op(e) {
  return e.l++, ei[e.read_shift(1)];
}
function Rp(e) {
  return e.l++, e.read_shift(2);
}
function Np(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Dp(e) {
  return e.l++, pn(e);
}
function kp(e, t, r) {
  return e.l++, Jo(e, t - 1, r);
}
function Ip(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      (r[1] = wx(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (r[1] = ei[e[e.l]]), (e.l += t == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = pn(e);
      break;
    case 2:
      r[1] = Fx(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error('Bad SerAr: ' + r[0]);
  }
  return r;
}
function Pp(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((r.biff == 12 ? Ut : Rx)(e));
  return i;
}
function Lp(e, t, r) {
  var n = 0,
    i = 0;
  r.biff == 12
    ? ((n = e.read_shift(4)), (i = e.read_shift(4)))
    : ((i = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var f = 0; f != i; ++f) s[a][f] = Ip(e, r.biff);
  return s;
}
function Bp(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = !r || r.biff >= 8 ? 4 : 2,
    a = e.read_shift(i);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, a];
}
function Mp(e, t, r) {
  if (r.biff == 5) return bp(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function bp(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [t, r, n];
}
function Up(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Hp(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Wp(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Vp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2),
    a = 4;
  if (r)
    switch (r.biff) {
      case 5:
        a = 15;
        break;
      case 12:
        a = 6;
        break;
    }
  return (e.l += a), [n, i];
}
var Gp = Yr,
  jp = Yr,
  Xp = Yr;
function ri(e, t, r) {
  return (e.l += 2), [ip(e)];
}
function N0(e) {
  return (e.l += 6), [];
}
var $p = ri,
  zp = N0,
  Kp = N0,
  Yp = ri;
function vl(e) {
  return (e.l += 2), [Yo(e), e.read_shift(2) & 1];
}
var qp = ri,
  Jp = vl,
  Zp = N0,
  Qp = ri,
  ev = ri,
  rv = [
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
function tv(e) {
  e.l += 2;
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    i = e.read_shift(2),
    a = e.read_shift(2),
    s = rv[(r >> 2) & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: i, C: a };
}
function nv(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function iv(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function av(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function sv(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function fv(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function ov(e) {
  return (e.l += 4), [0, 0];
}
var Xs = {
    1: { n: 'PtgExp', f: Cp },
    2: { n: 'PtgTbl', f: Xp },
    3: { n: 'PtgAdd', f: be },
    4: { n: 'PtgSub', f: be },
    5: { n: 'PtgMul', f: be },
    6: { n: 'PtgDiv', f: be },
    7: { n: 'PtgPower', f: be },
    8: { n: 'PtgConcat', f: be },
    9: { n: 'PtgLt', f: be },
    10: { n: 'PtgLe', f: be },
    11: { n: 'PtgEq', f: be },
    12: { n: 'PtgGe', f: be },
    13: { n: 'PtgGt', f: be },
    14: { n: 'PtgNe', f: be },
    15: { n: 'PtgIsect', f: be },
    16: { n: 'PtgUnion', f: be },
    17: { n: 'PtgRange', f: be },
    18: { n: 'PtgUplus', f: be },
    19: { n: 'PtgUminus', f: be },
    20: { n: 'PtgPercent', f: be },
    21: { n: 'PtgParen', f: be },
    22: { n: 'PtgMissArg', f: be },
    23: { n: 'PtgStr', f: kp },
    26: { n: 'PtgSheet', f: iv },
    27: { n: 'PtgEndSheet', f: av },
    28: { n: 'PtgErr', f: Op },
    29: { n: 'PtgBool', f: Np },
    30: { n: 'PtgInt', f: Rp },
    31: { n: 'PtgNum', f: Dp },
    32: { n: 'PtgArray', f: hp },
    33: { n: 'PtgFunc', f: Sp },
    34: { n: 'PtgFuncVar', f: Ap },
    35: { n: 'PtgName', f: Bp },
    36: { n: 'PtgRef', f: Ep },
    37: { n: 'PtgArea', f: fp },
    38: { n: 'PtgMemArea', f: Up },
    39: { n: 'PtgMemErr', f: Gp },
    40: { n: 'PtgMemNoMem', f: jp },
    41: { n: 'PtgMemFunc', f: Hp },
    42: { n: 'PtgRefErr', f: Wp },
    43: { n: 'PtgAreaErr', f: lp },
    44: { n: 'PtgRefN', f: Tp },
    45: { n: 'PtgAreaN', f: up },
    46: { n: 'PtgMemAreaN', f: sv },
    47: { n: 'PtgMemNoMemN', f: fv },
    57: { n: 'PtgNameX', f: Mp },
    58: { n: 'PtgRef3d', f: wp },
    59: { n: 'PtgArea3d', f: op },
    60: { n: 'PtgRefErr3d', f: Vp },
    61: { n: 'PtgAreaErr3d', f: cp },
    255: {},
  },
  lv = {
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
  cv = {
    1: { n: 'PtgElfLel', f: vl },
    2: { n: 'PtgElfRw', f: Qp },
    3: { n: 'PtgElfCol', f: $p },
    6: { n: 'PtgElfRwV', f: ev },
    7: { n: 'PtgElfColV', f: Yp },
    10: { n: 'PtgElfRadical', f: qp },
    11: { n: 'PtgElfRadicalS', f: Zp },
    13: { n: 'PtgElfColS', f: zp },
    15: { n: 'PtgElfColSV', f: Kp },
    16: { n: 'PtgElfRadicalLel', f: Jp },
    25: { n: 'PtgList', f: tv },
    29: { n: 'PtgSxName', f: nv },
    255: {},
  },
  uv = {
    0: { n: 'PtgAttrNoop', f: ov },
    1: { n: 'PtgAttrSemi', f: mp },
    2: { n: 'PtgAttrIf', f: pp },
    4: { n: 'PtgAttrChoose', f: xp },
    8: { n: 'PtgAttrGoto', f: dp },
    16: { n: 'PtgAttrSum', f: Fp },
    32: { n: 'PtgAttrBaxcel', f: js },
    33: { n: 'PtgAttrBaxcel', f: js },
    64: { n: 'PtgAttrSpace', f: _p },
    65: { n: 'PtgAttrSpaceSemi', f: gp },
    128: { n: 'PtgAttrIfError', f: vp },
    255: {},
  };
function hv(e, t, r, n) {
  if (n.biff < 8) return Yr(e, t);
  for (var i = e.l + t, a = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case 'PtgArray':
        (r[s][1] = Lp(e, 0, n)), a.push(r[s][1]);
        break;
      case 'PtgMemArea':
        (r[s][2] = Pp(e, r[s][1], n)), a.push(r[s][2]);
        break;
      case 'PtgExp':
        n && n.biff == 12 && ((r[s][1][1] = e.read_shift(4)), a.push(r[s][1]));
        break;
      case 'PtgList':
      case 'PtgElfRadicalS':
      case 'PtgElfColS':
      case 'PtgElfColSV':
        throw 'Unsupported ' + r[s][0];
    }
  return (t = i - e.l), t !== 0 && a.push(Yr(e, t)), a;
}
function xv(e, t, r) {
  for (var n = e.l + t, i, a, s = []; n != e.l; )
    (t = n - e.l),
      (a = e[e.l]),
      (i = Xs[a] || Xs[lv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? cv : uv)[e[e.l + 1]]),
      !i || !i.f ? Yr(e, t) : s.push([i.n, i.f(e, t, r)]);
  return s;
}
function dv(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], i = [], a = 0; a < n.length; ++a) {
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
    t.push(i.join(','));
  }
  return t.join(';');
}
var pv = {
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
function vv(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function ml(e, t, r) {
  if (!e) return 'SH33TJSERR0';
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
  if (!e.XTI) return 'SH33TJSERR6';
  var n = e.XTI[t];
  if (r.biff < 8)
    return (
      t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? '' : e.XTI[t - 1]
    );
  if (!n) return 'SH33TJSERR1';
  var i = '';
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return (
          (i = n[1] == -1 ? '#REF' : e.SheetNames[n[1]]),
          n[1] == n[2] ? i : i + ':' + e.SheetNames[n[2]]
        );
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : 'SH33TJSSAME' + e[n[0]][0];
      case 355:
      default:
        return 'SH33TJSSRC' + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return (
        (i = n[1] == -1 ? '#REF' : e.SheetNames[n[1]] || 'SH33TJSERR3'),
        n[1] == n[2] ? i : i + ':' + e.SheetNames[n[2]]
      );
    case 14849:
      return e[n[0]]
        .slice(1)
        .map(function (a) {
          return a.Name;
        })
        .join(';;');
    default:
      return e[n[0]][0][3]
        ? ((i = n[1] == -1 ? '#REF' : e[n[0]][0][3][n[1]] || 'SH33TJSERR4'),
          n[1] == n[2] ? i : i + ':' + e[n[0]][0][3][n[2]])
        : 'SH33TJSERR2';
  }
}
function $s(e, t, r) {
  var n = ml(e, t, r);
  return n == '#REF' ? n : vv(n, r);
}
function sn(e, t, r, n, i) {
  var a = (i && i.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    f = [],
    l,
    o,
    c,
    u = 0,
    h = 0,
    d,
    p = '';
  if (!e[0] || !e[0][0]) return '';
  for (var x = -1, m = '', S = 0, C = e[0].length; S < C; ++S) {
    var F = e[0][S];
    switch (F[0]) {
      case 'PtgUminus':
        f.push('-' + f.pop());
        break;
      case 'PtgUplus':
        f.push('+' + f.pop());
        break;
      case 'PtgPercent':
        f.push(f.pop() + '%');
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
        if (((l = f.pop()), (o = f.pop()), x >= 0)) {
          switch (e[0][x][1][0]) {
            case 0:
              m = Le(' ', e[0][x][1][1]);
              break;
            case 1:
              m = Le('\r', e[0][x][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          (o = o + m), (x = -1);
        }
        f.push(o + pv[F[0]] + l);
        break;
      case 'PtgIsect':
        (l = f.pop()), (o = f.pop()), f.push(o + ' ' + l);
        break;
      case 'PtgUnion':
        (l = f.pop()), (o = f.pop()), f.push(o + ',' + l);
        break;
      case 'PtgRange':
        (l = f.pop()), (o = f.pop()), f.push(o + ':' + l);
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
        (c = kn(F[1][1], s, i)), f.push(In(c, a));
        break;
      case 'PtgRefN':
        (c = r ? kn(F[1][1], r, i) : F[1][1]), f.push(In(c, a));
        break;
      case 'PtgRef3d':
        (u = F[1][1]),
          (c = kn(F[1][2], s, i)),
          (p = $s(n, u, i)),
          f.push(p + '!' + In(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var k = F[1][0],
          V = F[1][1];
        k || (k = 0), (k &= 127);
        var q = k == 0 ? [] : f.slice(-k);
        (f.length -= k),
          V === 'User' && (V = q.shift()),
          f.push(V + '(' + q.join(',') + ')');
        break;
      case 'PtgBool':
        f.push(F[1] ? 'TRUE' : 'FALSE');
        break;
      case 'PtgInt':
        f.push(F[1]);
        break;
      case 'PtgNum':
        f.push(String(F[1]));
        break;
      case 'PtgStr':
        f.push('"' + F[1].replace(/"/g, '""') + '"');
        break;
      case 'PtgErr':
        f.push(F[1]);
        break;
      case 'PtgAreaN':
        (d = Ns(F[1][1], r ? { s: r } : s, i)), f.push(Ra(d, i));
        break;
      case 'PtgArea':
        (d = Ns(F[1][1], s, i)), f.push(Ra(d, i));
        break;
      case 'PtgArea3d':
        (u = F[1][1]),
          (d = F[1][2]),
          (p = $s(n, u, i)),
          f.push(p + '!' + Ra(d, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        h = F[1][2];
        var O = (n.names || [])[h - 1] || (n[0] || [])[h],
          H = O ? O.Name : 'SH33TJSNAME' + String(h);
        H && H.slice(0, 6) == '_xlfn.' && !i.xlfn && (H = H.slice(6)),
          f.push(H);
        break;
      case 'PtgNameX':
        var I = F[1][1];
        h = F[1][2];
        var G;
        if (i.biff <= 5) I < 0 && (I = -I), n[I] && (G = n[I][h]);
        else {
          var X = '';
          if (
            (((n[I] || [])[0] || [])[0] == 14849 ||
              (((n[I] || [])[0] || [])[0] == 1025
                ? n[I][h] &&
                  n[I][h].itab > 0 &&
                  (X = n.SheetNames[n[I][h].itab - 1] + '!')
                : (X = n.SheetNames[h - 1] + '!')),
            n[I] && n[I][h])
          )
            X += n[I][h].Name;
          else if (n[0] && n[0][h]) X += n[0][h].Name;
          else {
            var z = (ml(n, I, i) || '').split(';;');
            z[h - 1] ? (X = z[h - 1]) : (X += 'SH33TJSERRX');
          }
          f.push(X);
          break;
        }
        G || (G = { Name: 'SH33TJSERRY' }), f.push(G.Name);
        break;
      case 'PtgParen':
        var ne = '(',
          me = ')';
        if (x >= 0) {
          switch (((m = ''), e[0][x][1][0])) {
            case 2:
              ne = Le(' ', e[0][x][1][1]) + ne;
              break;
            case 3:
              ne = Le('\r', e[0][x][1][1]) + ne;
              break;
            case 4:
              me = Le(' ', e[0][x][1][1]) + me;
              break;
            case 5:
              me = Le('\r', e[0][x][1][1]) + me;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          x = -1;
        }
        f.push(ne + f.pop() + me);
        break;
      case 'PtgRefErr':
        f.push('#REF!');
        break;
      case 'PtgRefErr3d':
        f.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: F[1][1], r: F[1][0] };
        var oe = { c: r.c, r: r.r };
        if (n.sharedf[Te(c)]) {
          var We = n.sharedf[Te(c)];
          f.push(sn(We, s, oe, n, i));
        } else {
          var Oe = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(sn(o[1], s, oe, n, i)), (Oe = !0);
              break;
            }
          Oe || f.push(F[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + dv(F[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        x = S;
        break;
      case 'PtgTbl':
        break;
      case 'PtgMemErr':
        break;
      case 'PtgMissArg':
        f.push('');
        break;
      case 'PtgAreaErr':
        f.push('#REF!');
        break;
      case 'PtgAreaErr3d':
        f.push('#REF!');
        break;
      case 'PtgList':
        f.push('Table' + F[1].idx + '[#' + F[1].rt + ']');
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
    var hr = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && x >= 0 && hr.indexOf(e[0][S][0]) == -1) {
      F = e[0][x];
      var Me = !0;
      switch (F[1][0]) {
        case 4:
          Me = !1;
        case 0:
          m = Le(' ', F[1][1]);
          break;
        case 5:
          Me = !1;
        case 1:
          m = Le('\r', F[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0]);
      }
      f.push((Me ? m : '') + f.pop() + (Me ? '' : m)), (x = -1);
    }
  }
  if (f.length > 1 && i.WTF) throw new Error('bad formula stack');
  return f[0];
}
function mv(e) {
  if (e == null) {
    var t = U(8);
    return (
      t.write_shift(1, 3),
      t.write_shift(1, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 0),
      t.write_shift(2, 65535),
      t
    );
  } else if (typeof e == 'number') return kt(e);
  return kt(0);
}
function _v(e, t, r, n, i) {
  var a = It(t, r, i),
    s = mv(e.v),
    f = U(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = U(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var u = qe([a, s, f, o]);
  return u;
}
function xa(e, t, r) {
  var n = e.read_shift(4),
    i = xv(e, n, r),
    a = e.read_shift(4),
    s = a > 0 ? hv(e, a, i, r) : null;
  return [i, s];
}
var gv = xa,
  da = xa,
  Ev = xa,
  Tv = xa,
  wv = {
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
  _l = {
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
  Sv = {
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
function Av(e) {
  var t = 'of:=' + e.replace(O0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return t.replace(/;/g, '|').replace(/,/g, ';');
}
function yv(e) {
  return e.replace(/\./, '!');
}
var Pn = typeof Map < 'u';
function D0(e, t, r) {
  var n = 0,
    i = e.length;
  if (r) {
    if (Pn ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var a = Pn ? r.get(t) : r[t]; n < a.length; ++n)
        if (e[a[n]].t === t) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === t) return e.Count++, n;
  return (
    (e[i] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (Pn
        ? (r.has(t) || r.set(t, []), r.get(t).push(i))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []),
          r[t].push(i))),
    i
  );
}
function pa(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    t.MDW && (it = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
        ? (n = Xi(t.wpx))
        : t.wch != null && (n = t.wch),
    n > -1
      ? ((r.width = qa(n)), (r.customWidth = 1))
      : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  );
}
function gl(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    e.left == null && (e.left = r[0]),
      e.right == null && (e.right = r[1]),
      e.top == null && (e.top = r[2]),
      e.bottom == null && (e.bottom = r[3]),
      e.header == null && (e.header = r[4]),
      e.footer == null && (e.footer = r[5]);
  }
}
function St(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && r.ssf) {
    for (; i < 392; ++i)
      if (r.ssf[i] == null) {
        xo(t.z, i), (r.ssf[i] = t.z), (r.revssf[t.z] = n = i);
        break;
      }
  }
  for (i = 0; i != a; ++i) if (e[i].numFmtId === n) return i;
  return (
    (e[a] = {
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
function Fv(e, t, r) {
  if (e && e['!ref']) {
    var n = Ce(e['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + r + '): ' + e['!ref']);
  }
}
function Cv(e) {
  if (e.length === 0) return '';
  for (
    var t = '<mergeCells count="' + e.length + '">', r = 0;
    r != e.length;
    ++r
  )
    t += '<mergeCell ref="' + Ue(e[r]) + '"/>';
  return t + '</mergeCells>';
}
function Ov(e, t, r, n, i) {
  var a = !1,
    s = {},
    f = null;
  if (n.bookType !== 'xlsx' && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = Vn(Ee(l)));
  }
  if (e && e['!outline']) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e['!outline'].above && (o.summaryBelow = 0),
      e['!outline'].left && (o.summaryRight = 0),
      (f = (f || '') + J('outlinePr', null, o));
  }
  (!a && !f) || (i[i.length] = J('sheetPr', f, s));
}
var Rv = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  Nv = [
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
function Dv(e) {
  var t = { sheet: 1 };
  return (
    Rv.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = '1');
    }),
    Nv.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = '0');
    }),
    e.password && (t.password = tl(e.password).toString(16).toUpperCase()),
    J('sheetProtection', null, t)
  );
}
function kv(e) {
  return gl(e), J('pageMargins', null, e);
}
function Iv(e, t) {
  for (var r = ['<cols>'], n, i = 0; i != t.length; ++i)
    (n = t[i]) && (r[r.length] = J('col', null, pa(i, n)));
  return (r[r.length] = '</cols>'), r.join('');
}
function Pv(e, t, r, n) {
  var i = typeof e.ref == 'string' ? e.ref : Ue(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }),
    r.Workbook.Names || (r.Workbook.Names = []);
  var a = r.Workbook.Names,
    s = Or(i);
  s.s.r == s.e.r && ((s.e.r = Or(t['!ref']).e.r), (i = Ue(s)));
  for (var f = 0; f < a.length; ++f) {
    var l = a[f];
    if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
      l.Ref = "'" + r.SheetNames[n] + "'!" + i;
      break;
    }
  }
  return (
    f == a.length &&
      a.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + r.SheetNames[n] + "'!" + i,
      }),
    J('autoFilter', null, { ref: i })
  );
}
function Lv(e, t, r, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    J('sheetViews', J('sheetView', null, i), {})
  );
}
function Bv(e, t, r, n) {
  if (
    (e.c && r['!comments'].push([t, e.c]),
    (e.v === void 0 && typeof e.f != 'string') || (e.t === 'z' && !e.f))
  )
    return '';
  var i = '',
    a = e.t,
    s = e.v;
  if (e.t !== 'z')
    switch (e.t) {
      case 'b':
        i = e.v ? '1' : '0';
        break;
      case 'n':
        i = '' + e.v;
        break;
      case 'e':
        i = ei[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = ur(e.v, -1).toISOString())
          : ((e = gr(e)), (e.t = 'n'), (i = '' + (e.v = _r(ur(e.v))))),
          typeof e.z > 'u' && (e.z = Be[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = Je('v', Ee(i)),
    l = { r: t },
    o = St(n.cellXfs, e, n);
  switch ((o !== 0 && (l.s = o), e.t)) {
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
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error('Text length must not exceed 32767 characters');
      if (n && n.bookSST) {
        (f = Je('v', '' + D0(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null;
    f = J('f', Ee(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && r['!links'].push([t, e.l]), e.D && (l.cm = 1), J('c', f, l);
}
function Mv(e, t, r, n) {
  var i = [],
    a = [],
    s = Ce(e['!ref']),
    f = '',
    l,
    o = '',
    c = [],
    u = 0,
    h = 0,
    d = e['!rows'],
    p = Array.isArray(e),
    x = { r: o },
    m,
    S = -1;
  for (h = s.s.c; h <= s.e.c; ++h) c[h] = nr(h);
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (a = [], o = Ze(u), h = s.s.c; h <= s.e.c; ++h) {
      l = c[h] + o;
      var C = p ? (e[u] || [])[h] : e[l];
      C !== void 0 && (f = Bv(C, l, e, t)) != null && a.push(f);
    }
    (a.length > 0 || (d && d[u])) &&
      ((x = { r: o }),
      d &&
        d[u] &&
        ((m = d[u]),
        m.hidden && (x.hidden = 1),
        (S = -1),
        m.hpx ? (S = $i(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((x.ht = S), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level)),
      (i[i.length] = J('row', a.join(''), x)));
  }
  if (d)
    for (; u < d.length; ++u)
      d &&
        d[u] &&
        ((x = { r: u + 1 }),
        (m = d[u]),
        m.hidden && (x.hidden = 1),
        (S = -1),
        m.hpx ? (S = $i(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((x.ht = S), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level),
        (i[i.length] = J('row', '', x)));
  return i.join('');
}
function El(e, t, r, n) {
  var i = [He, J('worksheet', null, { xmlns: hn[0], 'xmlns:r': je.r })],
    a = r.SheetNames[e],
    s = 0,
    f = '',
    l = r.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = Ce(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = Ue(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var u = [];
  Ov(l, r, e, t, i),
    (i[i.length] = J('dimension', null, { ref: o })),
    (i[i.length] = Lv(l, t, e, r)),
    t.sheetFormat &&
      (i[i.length] = J('sheetFormatPr', null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
        baseColWidth: t.sheetFormat.baseColWidth || '10',
        outlineLevelRow: t.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = Iv(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = Mv(l, t)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = Dv(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = Pv(l['!autofilter'], l, r, e)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = Cv(l['!merges']));
  var h = -1,
    d,
    p = -1;
  return (
    l['!links'].length > 0 &&
      ((i[i.length] = '<hyperlinks>'),
      l['!links'].forEach(function (x) {
        x[1].Target &&
          ((d = { ref: x[0] }),
          x[1].Target.charAt(0) != '#' &&
            ((p = ge(n, -1, Ee(x[1].Target).replace(/#.*$/, ''), de.HLINK)),
            (d['r:id'] = 'rId' + p)),
          (h = x[1].Target.indexOf('#')) > -1 &&
            (d.location = Ee(x[1].Target.slice(h + 1))),
          x[1].Tooltip && (d.tooltip = Ee(x[1].Tooltip)),
          (i[i.length] = J('hyperlink', null, d)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = kv(l['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (i[i.length] = Je(
        'ignoredErrors',
        J('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    u.length > 0 &&
      ((p = ge(n, -1, '../drawings/drawing' + (e + 1) + '.xml', de.DRAW)),
      (i[i.length] = J('drawing', null, { 'r:id': 'rId' + p })),
      (l['!drawing'] = u)),
    l['!comments'].length > 0 &&
      ((p = ge(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', de.VML)),
      (i[i.length] = J('legacyDrawing', null, { 'r:id': 'rId' + p })),
      (l['!legacy'] = p)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function bv(e, t) {
  var r = {},
    n = e.l + t;
  (r.r = e.read_shift(4)), (e.l += 4);
  var i = e.read_shift(2);
  e.l += 1;
  var a = e.read_shift(1);
  return (
    (e.l = n),
    a & 7 && (r.level = a & 7),
    a & 16 && (r.hidden = !0),
    a & 32 && (r.hpt = i / 20),
    r
  );
}
function Uv(e, t, r) {
  var n = U(145),
    i = (r['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = $i(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
    n.write_shift(2, a),
    n.write_shift(1, 0);
  var s = 0;
  i.level && (s |= i.level),
    i.hidden && (s |= 16),
    (i.hpx || i.hpt) && (s |= 32),
    n.write_shift(1, s),
    n.write_shift(1, 0);
  var f = 0,
    l = n.l;
  n.l += 4;
  for (var o = { r: e, c: 0 }, c = 0; c < 16; ++c)
    if (!(t.s.c > (c + 1) << 10 || t.e.c < c << 10)) {
      for (var u = -1, h = -1, d = c << 10; d < (c + 1) << 10; ++d) {
        o.c = d;
        var p = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[Te(o)];
        p && (u < 0 && (u = d), (h = d));
      }
      u < 0 || (++f, n.write_shift(4, u), n.write_shift(4, h));
    }
  var x = n.l;
  return (
    (n.l = l),
    n.write_shift(4, f),
    (n.l = x),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Hv(e, t, r, n) {
  var i = Uv(n, r, t);
  (i.length > 17 || (t['!rows'] || [])[n]) && j(e, 0, i);
}
var Wv = Ut,
  Vv = dn;
function Gv() {}
function jv(e, t) {
  var r = {},
    n = e[e.l];
  return (
    ++e.l,
    (r.above = !(n & 64)),
    (r.left = !(n & 128)),
    (e.l += 18),
    (r.name = ex(e)),
    r
  );
}
function Xv(e, t, r) {
  r == null && (r = U(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var i = 1; i < 3; ++i) r.write_shift(1, 0);
  return (
    Vi({ auto: 1 }, r),
    r.write_shift(-4, -1),
    r.write_shift(-4, -1),
    Lo(e, r),
    r.slice(0, r.l)
  );
}
function $v(e) {
  var t = kr(e);
  return [t];
}
function zv(e, t, r) {
  return r == null && (r = U(8)), Bt(t, r);
}
function Kv(e) {
  var t = Mt(e);
  return [t];
}
function Yv(e, t, r) {
  return r == null && (r = U(4)), bt(t, r);
}
function qv(e) {
  var t = kr(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function Jv(e, t, r) {
  return r == null && (r = U(9)), Bt(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Zv(e) {
  var t = Mt(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function Qv(e, t, r) {
  return r == null && (r = U(5)), bt(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function e2(e) {
  var t = kr(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function r2(e, t, r) {
  return r == null && (r = U(9)), Bt(t, r), r.write_shift(1, e.v), r;
}
function t2(e) {
  var t = Mt(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function n2(e, t, r) {
  return (
    r == null && (r = U(8)),
    bt(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  );
}
function i2(e) {
  var t = kr(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function a2(e, t, r) {
  return r == null && (r = U(12)), Bt(t, r), r.write_shift(4, t.v), r;
}
function s2(e) {
  var t = Mt(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function f2(e, t, r) {
  return r == null && (r = U(8)), bt(t, r), r.write_shift(4, t.v), r;
}
function o2(e) {
  var t = kr(e),
    r = pn(e);
  return [t, r, 'n'];
}
function l2(e, t, r) {
  return r == null && (r = U(16)), Bt(t, r), kt(e.v, r), r;
}
function c2(e) {
  var t = Mt(e),
    r = pn(e);
  return [t, r, 'n'];
}
function u2(e, t, r) {
  return r == null && (r = U(12)), bt(t, r), kt(e.v, r), r;
}
function h2(e) {
  var t = kr(e),
    r = Bo(e);
  return [t, r, 'n'];
}
function x2(e, t, r) {
  return r == null && (r = U(12)), Bt(t, r), Mo(e.v, r), r;
}
function d2(e) {
  var t = Mt(e),
    r = Bo(e);
  return [t, r, 'n'];
}
function p2(e, t, r) {
  return r == null && (r = U(8)), bt(t, r), Mo(e.v, r), r;
}
function v2(e) {
  var t = kr(e),
    r = S0(e);
  return [t, r, 'is'];
}
function m2(e) {
  var t = kr(e),
    r = ir(e);
  return [t, r, 'str'];
}
function _2(e, t, r) {
  return (
    r == null && (r = U(12 + 4 * e.v.length)),
    Bt(t, r),
    $e(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function g2(e) {
  var t = Mt(e),
    r = ir(e);
  return [t, r, 'str'];
}
function E2(e, t, r) {
  return (
    r == null && (r = U(8 + 4 * e.v.length)),
    bt(t, r),
    $e(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function T2(e, t, r) {
  var n = e.l + t,
    i = kr(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (r.cellFormula) {
    e.l += 2;
    var f = da(e, n - e.l, r);
    s[3] = sn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function w2(e, t, r) {
  var n = e.l + t,
    i = kr(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (r.cellFormula) {
    e.l += 2;
    var f = da(e, n - e.l, r);
    s[3] = sn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function S2(e, t, r) {
  var n = e.l + t,
    i = kr(e);
  i.r = r['!row'];
  var a = pn(e),
    s = [i, a, 'n'];
  if (r.cellFormula) {
    e.l += 2;
    var f = da(e, n - e.l, r);
    s[3] = sn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function A2(e, t, r) {
  var n = e.l + t,
    i = kr(e);
  i.r = r['!row'];
  var a = ir(e),
    s = [i, a, 'str'];
  if (r.cellFormula) {
    e.l += 2;
    var f = da(e, n - e.l, r);
    s[3] = sn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
var y2 = Ut,
  F2 = dn;
function C2(e, t) {
  return t == null && (t = U(4)), t.write_shift(4, e), t;
}
function O2(e, t) {
  var r = e.l + t,
    n = Ut(e),
    i = A0(e),
    a = ir(e),
    s = ir(e),
    f = ir(e);
  e.l = r;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function R2(e, t) {
  var r = U(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  dn({ s: Xe(e[0]), e: Xe(e[0]) }, r), y0('rId' + t, r);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return $e(i || '', r), $e(e[1].Tooltip || '', r), $e('', r), r.slice(0, r.l);
}
function N2() {}
function D2(e, t, r) {
  var n = e.l + t,
    i = bo(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), r.cellFormula)) {
    var f = gv(e, n - e.l, r);
    s[1] = f;
  } else e.l = n;
  return s;
}
function k2(e, t, r) {
  var n = e.l + t,
    i = Ut(e),
    a = [i];
  if (r.cellFormula) {
    var s = Tv(e, n - e.l, r);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function I2(e, t, r) {
  r == null && (r = U(18));
  var n = pa(e, t);
  r.write_shift(-4, e),
    r.write_shift(-4, e),
    r.write_shift(4, (n.width || 10) * 256),
    r.write_shift(4, 0);
  var i = 0;
  return (
    t.hidden && (i |= 1),
    typeof n.width == 'number' && (i |= 2),
    t.level && (i |= t.level << 8),
    r.write_shift(2, i),
    r
  );
}
var Tl = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function P2(e) {
  var t = {};
  return (
    Tl.forEach(function (r) {
      t[r] = pn(e);
    }),
    t
  );
}
function L2(e, t) {
  return (
    t == null && (t = U(6 * 8)),
    gl(e),
    Tl.forEach(function (r) {
      kt(e[r], t);
    }),
    t
  );
}
function B2(e) {
  var t = e.read_shift(2);
  return (e.l += 28), { RTL: t & 32 };
}
function M2(e, t, r) {
  r == null && (r = U(30));
  var n = 924;
  return (
    (((t || {}).Views || [])[0] || {}).RTL && (n |= 32),
    r.write_shift(2, n),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 100),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(2, 0),
    r.write_shift(4, 0),
    r
  );
}
function b2(e) {
  var t = U(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), dn(e, t), t;
}
function U2(e, t) {
  return (
    t == null && (t = U(16 * 4 + 2)),
    t.write_shift(2, e.password ? tl(e.password) : 0),
    t.write_shift(4, 1),
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
    ].forEach(function (r) {
      r[1]
        ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0)
        : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
    }),
    t
  );
}
function H2() {}
function W2() {}
function V2(e, t, r, n, i, a, s) {
  if (t.v === void 0) return !1;
  var f = '';
  switch (t.t) {
    case 'b':
      f = t.v ? '1' : '0';
      break;
    case 'd':
      (t = gr(t)), (t.z = t.z || Be[14]), (t.v = _r(ur(t.v))), (t.t = 'n');
      break;
    case 'n':
    case 'e':
      f = '' + t.v;
      break;
    default:
      f = t.v;
      break;
  }
  var l = { r, c: n };
  switch (
    ((l.s = St(i.cellXfs, t, i)),
    t.l && a['!links'].push([Te(l), t.l]),
    t.c && a['!comments'].push([Te(l), t.c]),
    t.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = D0(i.Strings, t.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? j(e, 18, f2(t, l)) : j(e, 7, a2(t, l)))
          : ((l.t = 'str'), s ? j(e, 17, E2(t, l)) : j(e, 6, _2(t, l))),
        !0
      );
    case 'n':
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? j(e, 13, p2(t, l))
            : j(e, 2, x2(t, l))
          : s
            ? j(e, 16, u2(t, l))
            : j(e, 5, l2(t, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? j(e, 15, Qv(t, l)) : j(e, 4, Jv(t, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? j(e, 14, n2(t, l)) : j(e, 3, r2(t, l)), !0;
  }
  return s ? j(e, 12, Yv(t, l)) : j(e, 1, zv(t, l)), !0;
}
function G2(e, t, r, n) {
  var i = Ce(t['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  j(e, 145);
  var l = Array.isArray(t),
    o = i.e.r;
  t['!rows'] && (o = Math.max(i.e.r, t['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = Ze(c)), Hv(e, t, i, c);
    var u = !1;
    if (c <= i.e.r)
      for (var h = i.s.c; h <= i.e.c; ++h) {
        c === i.s.r && (f[h] = nr(h)), (a = f[h] + s);
        var d = l ? (t[c] || [])[h] : t[a];
        if (!d) {
          u = !1;
          continue;
        }
        u = V2(e, d, c, h, n, t, u);
      }
  }
  j(e, 146);
}
function j2(e, t) {
  !t ||
    !t['!merges'] ||
    (j(e, 177, C2(t['!merges'].length)),
    t['!merges'].forEach(function (r) {
      j(e, 176, F2(r));
    }),
    j(e, 178));
}
function X2(e, t) {
  !t ||
    !t['!cols'] ||
    (j(e, 390),
    t['!cols'].forEach(function (r, n) {
      r && j(e, 60, I2(n, r));
    }),
    j(e, 391));
}
function $2(e, t) {
  !t || !t['!ref'] || (j(e, 648), j(e, 649, b2(Ce(t['!ref']))), j(e, 650));
}
function z2(e, t, r) {
  t['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = ge(r, -1, n[1].Target.replace(/#.*$/, ''), de.HLINK);
      j(e, 494, R2(n, i));
    }
  }),
    delete t['!links'];
}
function K2(e, t, r, n) {
  if (t['!comments'].length > 0) {
    var i = ge(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', de.VML);
    j(e, 551, y0('rId' + i)), (t['!legacy'] = i);
  }
}
function Y2(e, t, r, n) {
  if (t['!autofilter']) {
    var i = t['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : Ue(i.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }),
      r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names,
      f = Or(a);
    f.s.r == f.e.r && ((f.e.r = Or(t['!ref']).e.r), (a = Ue(f)));
    for (var l = 0; l < s.length; ++l) {
      var o = s[l];
      if (o.Name == '_xlnm._FilterDatabase' && o.Sheet == n) {
        o.Ref = "'" + r.SheetNames[n] + "'!" + a;
        break;
      }
    }
    l == s.length &&
      s.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + r.SheetNames[n] + "'!" + a,
      }),
      j(e, 161, dn(Ce(a))),
      j(e, 162);
  }
}
function q2(e, t, r) {
  j(e, 133), j(e, 137, M2(t, r)), j(e, 138), j(e, 134);
}
function J2(e, t) {
  t['!protect'] && j(e, 535, U2(t['!protect']));
}
function Z2(e, t, r, n) {
  var i = vr(),
    a = r.SheetNames[e],
    s = r.Sheets[a] || {},
    f = a;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = Ce(s['!ref'] || 'A1');
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error(
        'Range ' + (s['!ref'] || 'A1') + ' exceeds format limit A1:XFD1048576',
      );
    (l.e.c = Math.min(l.e.c, 16383)), (l.e.r = Math.min(l.e.c, 1048575));
  }
  return (
    (s['!links'] = []),
    (s['!comments'] = []),
    j(i, 129),
    (r.vbaraw || s['!outline']) && j(i, 147, Xv(f, s['!outline'])),
    j(i, 148, Vv(l)),
    q2(i, s, r.Workbook),
    X2(i, s),
    G2(i, s, e, t),
    J2(i, s),
    Y2(i, s, r, e),
    j2(i, s),
    z2(i, s, n),
    s['!margins'] && j(i, 476, L2(s['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) && $2(i, s),
    K2(i, s, e, n),
    j(i, 130),
    i.end()
  );
}
function Q2(e, t) {
  e.l += 10;
  var r = ir(e);
  return { name: r };
}
var em = [
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
function rm(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : k1(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var tm = '][*?/\\'.split('');
function wl(e, t) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var r = !0;
  return (
    tm.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    r
  );
}
function nm(e, t, r) {
  e.forEach(function (n, i) {
    wl(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (r) {
      var s = (t && t[i] && t[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function im(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var t = (e.Workbook && e.Workbook.Sheets) || [];
  nm(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    Fv(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Sl(e) {
  var t = [He];
  t[t.length] = J('workbook', null, { xmlns: hn[0], 'xmlns:r': je.r });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  e.Workbook &&
    e.Workbook.WBProps &&
    (em.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = J('workbookPr', null, n));
  var i = (e.Workbook && e.Workbook.Sheets) || [],
    a = 0;
  if (i && i[0] && i[0].Hidden) {
    for (
      t[t.length] = '<bookViews>', a = 0;
      a != e.SheetNames.length && !(!i[a] || !i[a].Hidden);
      ++a
    );
    a == e.SheetNames.length && (a = 0),
      (t[t.length] =
        '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>'),
      (t[t.length] = '</bookViews>');
  }
  for (t[t.length] = '<sheets>', a = 0; a != e.SheetNames.length; ++a) {
    var s = { name: Ee(e.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    t[t.length] = J('sheet', null, s);
  }
  return (
    (t[t.length] = '</sheets>'),
    r &&
      ((t[t.length] = '<definedNames>'),
      e.Workbook &&
        e.Workbook.Names &&
        e.Workbook.Names.forEach(function (f) {
          var l = { name: f.Name };
          f.Comment && (l.comment = f.Comment),
            f.Sheet != null && (l.localSheetId = '' + f.Sheet),
            f.Hidden && (l.hidden = '1'),
            f.Ref && (t[t.length] = J('definedName', Ee(f.Ref), l));
        }),
      (t[t.length] = '</definedNames>')),
    t.length > 2 &&
      ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function am(e, t) {
  var r = {};
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = Ya(e)),
    (r.name = ir(e)),
    r
  );
}
function sm(e, t) {
  return (
    t || (t = U(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    y0(e.strRelID, t),
    $e(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function fm(e, t) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var i = t > 8 ? ir(e) : '';
  return (
    i.length > 0 && (r.CodeName = i),
    (r.autoCompressPictures = !!(n & 65536)),
    (r.backupFile = !!(n & 64)),
    (r.checkCompatibility = !!(n & 4096)),
    (r.date1904 = !!(n & 1)),
    (r.filterPrivacy = !!(n & 8)),
    (r.hidePivotFieldList = !!(n & 1024)),
    (r.promptedSolutions = !!(n & 16)),
    (r.publishItems = !!(n & 2048)),
    (r.refreshAllConnections = !!(n & 262144)),
    (r.saveExternalLinkValues = !!(n & 128)),
    (r.showBorderUnselectedTables = !!(n & 4)),
    (r.showInkAnnotation = !!(n & 32)),
    (r.showObjects = ['all', 'placeholders', 'none'][(n >> 13) & 3]),
    (r.showPivotChartFilter = !!(n & 32768)),
    (r.updateLinks = ['userSet', 'never', 'always'][(n >> 8) & 3]),
    r
  );
}
function om(e, t) {
  t || (t = U(72));
  var r = 0;
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    Lo((e && e.CodeName) || 'ThisWorkbook', t),
    t.slice(0, t.l)
  );
}
function lm(e, t, r) {
  var n = e.l + t;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = rx(e),
    s = Ev(e, 0, r),
    f = A0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function cm(e, t) {
  j(e, 143);
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n =
        (t.Workbook &&
          t.Workbook.Sheets &&
          t.Workbook.Sheets[r] &&
          t.Workbook.Sheets[r].Hidden) ||
        0,
      i = {
        Hidden: n,
        iTabID: r + 1,
        strRelID: 'rId' + (r + 1),
        name: t.SheetNames[r],
      };
    j(e, 156, sm(i));
  }
  j(e, 144);
}
function um(e, t) {
  t || (t = U(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return (
    $e('SheetJS', t),
    $e(Li.version, t),
    $e(Li.version, t),
    $e('7262', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function hm(e, t) {
  t || (t = U(29)),
    t.write_shift(-4, 0),
    t.write_shift(-4, 460),
    t.write_shift(4, 28800),
    t.write_shift(4, 17600),
    t.write_shift(4, 500),
    t.write_shift(4, e),
    t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function xm(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, i = -1, a = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && i == -1)
        ? (i = n)
        : r[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (j(e, 135), j(e, 158, hm(i)), j(e, 136));
  }
}
function dm(e, t) {
  var r = vr();
  return (
    j(r, 131),
    j(r, 128, um()),
    j(r, 153, om((e.Workbook && e.Workbook.WBProps) || null)),
    xm(r, e),
    cm(r, e),
    j(r, 132),
    r.end()
  );
}
function pm(e, t, r) {
  return (t.slice(-4) === '.bin' ? dm : Sl)(e);
}
function vm(e, t, r, n, i) {
  return (t.slice(-4) === '.bin' ? Z2 : El)(e, r, n, i);
}
function mm(e, t, r) {
  return (t.slice(-4) === '.bin' ? Ld : al)(e, r);
}
function _m(e, t, r) {
  return (t.slice(-4) === '.bin' ? od : rl)(e, r);
}
function gm(e, t, r) {
  return (t.slice(-4) === '.bin' ? Jd : cl)(e);
}
function Em(e) {
  return (e.slice(-4) === '.bin' ? Gd : ol)();
}
function Tm(e, t) {
  var r = [];
  return (
    e.Props && r.push(mx(e.Props, t)),
    e.Custprops && r.push(_x(e.Props, e.Custprops)),
    r.join('')
  );
}
function wm() {
  return '';
}
function Sm(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    t.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(J('NumberFormat', null, { 'ss:Format': Ee(Be[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      r.push(J('Style', a.join(''), s));
    }),
    J('Styles', r.join(''))
  );
}
function Al(e) {
  return J('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + R0(e.Ref, { r: 0, c: 0 }),
  });
}
function Am(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var i = t[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || r.push(Al(i)));
  }
  return J('Names', r.join(''));
}
function ym(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || a.push(Al(f)));
  }
  return a.join('');
}
function Fm(e, t, r, n) {
  if (!e) return '';
  var i = [];
  if (
    (e['!margins'] &&
      (i.push('<PageSetup>'),
      e['!margins'].header &&
        i.push(J('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer &&
        i.push(J('Footer', null, { 'x:Margin': e['!margins'].footer })),
      i.push(
        J('PageMargins', null, {
          'x:Bottom': e['!margins'].bottom || '0.75',
          'x:Left': e['!margins'].left || '0.7',
          'x:Right': e['!margins'].right || '0.7',
          'x:Top': e['!margins'].top || '0.75',
        }),
      ),
      i.push('</PageSetup>')),
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
  )
    if (n.Workbook.Sheets[r].Hidden)
      i.push(
        J(
          'Visible',
          n.Workbook.Sheets[r].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden',
          {},
        ),
      );
    else {
      for (
        var a = 0;
        a < r && !(n.Workbook.Sheets[a] && !n.Workbook.Sheets[a].Hidden);
        ++a
      );
      a == r && i.push('<Selected/>');
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
      i.push('<DisplayRightToLeft/>'),
    e['!protect'] &&
      (i.push(Je('ProtectContents', 'True')),
      e['!protect'].objects && i.push(Je('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(Je('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(Je('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(Je('EnableSelection', 'UnlockedCells')),
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
        e['!protect'][s[0]] && i.push('<' + s[1] + '/>');
      })),
    i.length == 0 ? '' : J('WorksheetOptions', i.join(''), { xmlns: yr.x })
  );
}
function Cm(e) {
  return e
    .map(function (t) {
      var r = D1(t.t || ''),
        n = J('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return J('Comment', n, { 'ss:Author': t.a });
    })
    .join('');
}
function Om(e, t, r, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + Ee(R0(e.f, s))),
    e.F && e.F.slice(0, t.length) == t)
  ) {
    var l = Xe(e.F.slice(t.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = Ee(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = Ee(e.l.Tooltip))),
    r['!merges'])
  )
    for (var o = r['!merges'], c = 0; c != o.length; ++c)
      o[c].s.c != s.c ||
        o[c].s.r != s.r ||
        (o[c].e.c > o[c].s.c && (f['ss:MergeAcross'] = o[c].e.c - o[c].s.c),
        o[c].e.r > o[c].s.r && (f['ss:MergeDown'] = o[c].e.r - o[c].s.r));
  var u = '',
    h = '';
  switch (e.t) {
    case 'z':
      if (!n.sheetStubs) return '';
      break;
    case 'n':
      (u = 'Number'), (h = String(e.v));
      break;
    case 'b':
      (u = 'Boolean'), (h = e.v ? '1' : '0');
      break;
    case 'e':
      (u = 'Error'), (h = ei[e.v]);
      break;
    case 'd':
      (u = 'DateTime'),
        (h = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || Be[14]);
      break;
    case 's':
      (u = 'String'), (h = N1(e.v || ''));
      break;
  }
  var d = St(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + d)), (f['ss:Index'] = s.c + 1);
  var p = e.v != null ? h : '',
    x = e.t == 'z' ? '' : '<Data ss:Type="' + u + '">' + p + '</Data>';
  return (e.c || []).length > 0 && (x += Cm(e.c)), J('Cell', x, f);
}
function Rm(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = il(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + '>'
  );
}
function Nm(e, t, r, n) {
  if (!e['!ref']) return '';
  var i = Ce(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, S) {
      C0(m);
      var C = !!m.width,
        F = pa(S, m),
        k = { 'ss:Index': S + 1 };
      C && (k['ss:Width'] = ji(F.width)),
        m.hidden && (k['ss:Hidden'] = '1'),
        f.push(J('Column', null, k));
    });
  for (var l = Array.isArray(e), o = i.s.r; o <= i.e.r; ++o) {
    for (var c = [Rm(o, (e['!rows'] || [])[o])], u = i.s.c; u <= i.e.c; ++u) {
      var h = !1;
      for (s = 0; s != a.length; ++s)
        if (
          !(a[s].s.c > u) &&
          !(a[s].s.r > o) &&
          !(a[s].e.c < u) &&
          !(a[s].e.r < o)
        ) {
          (a[s].s.c != u || a[s].s.r != o) && (h = !0);
          break;
        }
      if (!h) {
        var d = { r: o, c: u },
          p = Te(d),
          x = l ? (e[o] || [])[u] : e[p];
        c.push(Om(x, p, e, t, r, n, d));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function Dm(e, t, r) {
  var n = [],
    i = r.SheetNames[e],
    a = r.Sheets[i],
    s = a ? ym(a, t, e, r) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? Nm(a, t, e, r) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(Fm(a, t, e, r)),
    n.join('')
  );
}
function km(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = gr(Be)),
    e.SSF &&
      (ca(),
      la(e.SSF),
      (t.revssf = ua(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      St(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(Tm(e, t)), r.push(wm()), r.push(''), r.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(J('Worksheet', Dm(n, t, e), { 'ss:Name': Ee(e.SheetNames[n]) }));
  return (
    (r[2] = Sm(e, t)),
    (r[3] = Am(e)),
    He +
      J('Workbook', r.join(''), {
        xmlns: yr.ss,
        'xmlns:o': yr.o,
        'xmlns:x': yr.x,
        'xmlns:ss': yr.ss,
        'xmlns:dt': yr.dt,
        'xmlns:html': yr.html,
      })
  );
}
var ka = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function Im(e, t) {
  var r = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = gs(ks, 'n'),
    l = gs(Is, 'n');
  if (e.Props)
    for (s = Qe(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? r
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = Qe(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    Ko.indexOf(i[a][0]) > -1 ||
      Xo.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Se.utils.cfb_add(t, '/SummaryInformation', bs(n, ka.SI, l, Is)),
    (r.length || o.length) &&
      Se.utils.cfb_add(
        t,
        '/DocumentSummaryInformation',
        bs(r, ka.DSI, f, ks, o.length ? o : null, ka.UDI),
      );
}
function Pm(e, t) {
  var r = t || {},
    n = Se.utils.cfb_new({ root: 'R' }),
    i = '/Workbook';
  switch (r.bookType || 'xls') {
    case 'xls':
      r.bookType = 'biff8';
    case 'xla':
      r.bookType || (r.bookType = 'xla');
    case 'biff8':
      (i = '/Workbook'), (r.biff = 8);
      break;
    case 'biff5':
      (i = '/Book'), (r.biff = 5);
      break;
    default:
      throw new Error('invalid type ' + r.bookType + ' for XLS CFB');
  }
  return (
    Se.utils.cfb_add(n, i, yl(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && Im(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      Zd(
        n,
        Se.read(e.vbaraw, {
          type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var Lm = {
  0: { f: bv },
  1: { f: $v },
  2: { f: h2 },
  3: { f: e2 },
  4: { f: qv },
  5: { f: o2 },
  6: { f: m2 },
  7: { f: i2 },
  8: { f: A2 },
  9: { f: S2 },
  10: { f: T2 },
  11: { f: w2 },
  12: { f: Kv },
  13: { f: d2 },
  14: { f: t2 },
  15: { f: Zv },
  16: { f: c2 },
  17: { f: g2 },
  18: { f: s2 },
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
  39: { f: lm },
  40: {},
  42: {},
  43: { f: md },
  44: { f: pd },
  45: { f: Ed },
  46: { f: wd },
  47: { f: Td },
  48: {},
  49: { f: K1 },
  50: {},
  51: { f: bd },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Yx },
  62: { f: v2 },
  63: { f: jd },
  64: { f: H2 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: Yr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: B2 },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: jv },
  148: { f: Wv, p: 16 },
  151: { f: N2 },
  152: {},
  153: { f: fm },
  154: {},
  155: {},
  156: { f: am },
  157: {},
  158: {},
  159: { T: 1, f: ad },
  160: { T: -1 },
  161: { T: 1, f: Ut },
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
  176: { f: y2 },
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
  335: { f: Bd },
  336: { T: -1 },
  337: { f: Wd, T: 1 },
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
  355: { f: Ya },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Gx },
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
  426: { f: D2 },
  427: { f: k2 },
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
  476: { f: P2 },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: Gv },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: O2 },
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
  550: { f: Ya },
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
  632: { f: Yd },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: zd },
  636: { T: -1 },
  637: { f: Z1 },
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
  651: { f: Q2 },
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
  1053: { f: W2 },
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
function Z(e, t, r, n) {
  var i = t;
  if (!isNaN(i)) {
    var a = n || (r || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && E0(r) && e.push(r);
  }
}
function Bm(e, t, r, n) {
  var i = (r || []).length || 0;
  if (i <= 8224) return Z(e, t, r, i);
  var a = t;
  if (!isNaN(a)) {
    for (
      var s = r.parts || [], f = 0, l = 0, o = 0;
      o + (s[f] || 8224) <= 8224;

    )
      (o += s[f] || 8224), f++;
    var c = e.next(4);
    for (
      c.write_shift(2, a),
        c.write_shift(2, o),
        e.push(r.slice(l, l + o)),
        l += o;
      l < i;

    ) {
      for (
        c = e.next(4), c.write_shift(2, 60), o = 0;
        o + (s[f] || 8224) <= 8224;

      )
        (o += s[f] || 8224), f++;
      c.write_shift(2, o), e.push(r.slice(l, l + o)), (l += o);
    }
  }
}
function ti(e, t, r) {
  return (
    e || (e = U(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function Mm(e, t, r, n) {
  var i = U(9);
  return ti(i, e, t), qo(r, n || 'b', i), i;
}
function bm(e, t, r) {
  var n = U(8 + 2 * r.length);
  return (
    ti(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function Um(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case 'd':
      case 'n':
        var i = t.t == 'd' ? _r(ur(t.v)) : t.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? Z(e, 2, Qx(r, n, i))
          : Z(e, 3, Zx(r, n, i));
        return;
      case 'b':
      case 'e':
        Z(e, 5, Mm(r, n, t.v, t.t));
        return;
      case 's':
      case 'str':
        Z(e, 4, bm(r, n, (t.v || '').slice(0, 255)));
        return;
    }
  Z(e, 1, ti(null, r, n));
}
function Hm(e, t, r, n) {
  var i = Array.isArray(t),
    a = Ce(t['!ref'] || 'A1'),
    s,
    f = '',
    l = [];
  if (a.e.c > 255 || a.e.r > 16383) {
    if (n.WTF)
      throw new Error(
        'Range ' + (t['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (a.e.c = Math.min(a.e.c, 255)),
      (a.e.r = Math.min(a.e.c, 16383)),
      (s = Ue(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = Ze(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = nr(c)), (s = l[c] + f);
      var u = i ? (t[o] || [])[c] : t[s];
      u && Um(e, u, o, c);
    }
  }
}
function Wm(e, t) {
  for (var r = t || {}, n = vr(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == r.sheet && (i = a);
  if (i == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error('Sheet not found: ' + r.sheet);
  return (
    Z(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, F0(e, 16, r)),
    Hm(n, e.Sheets[e.SheetNames[i]], i, r),
    Z(n, 10),
    n.end()
  );
}
function Vm(e, t, r) {
  Z(e, 49, Lx({ sz: 12, name: 'Arial' }, r));
}
function Gm(e, t, r) {
  t &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        t[i] != null && Z(e, 1054, bx(i, t[i], r));
    });
}
function jm(e, t) {
  var r = U(19);
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    Z(e, 2151, r),
    (r = U(39)),
    r.write_shift(4, 2152),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 1),
    r.write_shift(4, 4),
    r.write_shift(2, 0),
    Qo(Ce(t['!ref'] || 'A1'), r),
    r.write_shift(4, 4),
    Z(e, 2152, r);
}
function Xm(e, t) {
  for (var r = 0; r < 16; ++r) Z(e, 224, Hs({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function (n) {
    Z(e, 224, Hs(n, 0, t));
  });
}
function $m(e, t) {
  for (var r = 0; r < t['!links'].length; ++r) {
    var n = t['!links'][r];
    Z(e, 440, $x(n)), n[1].Tooltip && Z(e, 2048, zx(n));
  }
  delete t['!links'];
}
function zm(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function (n, i) {
      ++r <= 256 && n && Z(e, 125, qx(pa(i, n), i));
    });
  }
}
function Km(e, t, r, n, i) {
  var a = 16 + St(i.cellXfs, t, i);
  if (t.v == null && !t.bf) {
    Z(e, 513, It(r, n, a));
    return;
  }
  if (t.bf) Z(e, 6, _v(t, r, n, i, a));
  else
    switch (t.t) {
      case 'd':
      case 'n':
        var s = t.t == 'd' ? _r(ur(t.v)) : t.v;
        Z(e, 515, Vx(r, n, s, a));
        break;
      case 'b':
      case 'e':
        Z(e, 517, Wx(r, n, t.v, a, i, t.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = D0(i.Strings, t.v, i.revStrings);
          Z(e, 253, Bx(r, n, f, a));
        } else Z(e, 516, Mx(r, n, (t.v || '').slice(0, 255), a, i));
        break;
      default:
        Z(e, 513, It(r, n, a));
    }
}
function Ym(e, t, r) {
  var n = vr(),
    i = r.SheetNames[e],
    a = r.Sheets[i] || {},
    s = (r || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = t.biff == 8,
    c,
    u = '',
    h = [],
    d = Ce(a['!ref'] || 'A1'),
    p = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= p) {
    if (t.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (d.e.c = Math.min(d.e.c, 255)), (d.e.r = Math.min(d.e.c, p - 1));
  }
  Z(n, 2057, F0(r, 16, t)),
    Z(n, 13, Dr(1)),
    Z(n, 12, Dr(100)),
    Z(n, 15, lr(!0)),
    Z(n, 17, lr(!1)),
    Z(n, 16, kt(0.001)),
    Z(n, 95, lr(!0)),
    Z(n, 42, lr(!1)),
    Z(n, 43, lr(!1)),
    Z(n, 130, Dr(1)),
    Z(n, 128, Hx()),
    Z(n, 131, lr(!1)),
    Z(n, 132, lr(!1)),
    o && zm(n, a['!cols']),
    Z(n, 512, Ux(d, t)),
    o && (a['!links'] = []);
  for (var x = d.s.r; x <= d.e.r; ++x) {
    u = Ze(x);
    for (var m = d.s.c; m <= d.e.c; ++m) {
      x === d.s.r && (h[m] = nr(m)), (c = h[m] + u);
      var S = l ? (a[x] || [])[m] : a[c];
      S && (Km(n, S, x, m, t), o && S.l && a['!links'].push([c, S.l]));
    }
  }
  var C = f.CodeName || f.name || i;
  return (
    o && Z(n, 574, Px((s.Views || [])[0])),
    o && (a['!merges'] || []).length && Z(n, 229, Xx(a['!merges'])),
    o && $m(n, a),
    Z(n, 442, Zo(C)),
    o && jm(n, a),
    Z(n, 10),
    n.end()
  );
}
function qm(e, t, r) {
  var n = vr(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = r.biff == 8,
    l = r.biff == 5;
  if (
    (Z(n, 2057, F0(e, 5, r)),
    r.bookType == 'xla' && Z(n, 135),
    Z(n, 225, f ? Dr(1200) : null),
    Z(n, 193, Tx(2)),
    l && Z(n, 191),
    l && Z(n, 192),
    Z(n, 226),
    Z(n, 92, Nx('SheetJS', r)),
    Z(n, 66, Dr(f ? 1200 : 1252)),
    f && Z(n, 353, Dr(0)),
    f && Z(n, 448),
    Z(n, 317, Jx(e.SheetNames.length)),
    f && e.vbaraw && Z(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    Z(n, 442, Zo(o));
  }
  Z(n, 156, Dr(17)),
    Z(n, 25, lr(!1)),
    Z(n, 18, lr(!1)),
    Z(n, 19, Dr(0)),
    f && Z(n, 431, lr(!1)),
    f && Z(n, 444, Dr(0)),
    Z(n, 61, Ix()),
    Z(n, 64, lr(!1)),
    Z(n, 141, Dr(0)),
    Z(n, 34, lr(rm(e) == 'true')),
    Z(n, 14, lr(!0)),
    f && Z(n, 439, lr(!1)),
    Z(n, 218, Dr(0)),
    Vm(n, e, r),
    Gm(n, e.SSF, r),
    Xm(n, r),
    f && Z(n, 352, lr(!1));
  var c = n.end(),
    u = vr();
  f && Z(u, 140, Kx()), f && r.Strings && Bm(u, 252, kx(r.Strings)), Z(u, 10);
  var h = u.end(),
    d = vr(),
    p = 0,
    x = 0;
  for (x = 0; x < e.SheetNames.length; ++x)
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[x].length;
  var m = c.length + p + h.length;
  for (x = 0; x < e.SheetNames.length; ++x) {
    var S = a[x] || {};
    Z(
      d,
      133,
      Dx({ pos: m, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[x] }, r),
    ),
      (m += t[x].length);
  }
  var C = d.end();
  if (p != C.length) throw new Error('BS8 ' + p + ' != ' + C.length);
  var F = [];
  return (
    c.length && F.push(c), C.length && F.push(C), h.length && F.push(h), qe(F)
  );
}
function Jm(e, t) {
  var r = t || {},
    n = [];
  e && !e.SSF && (e.SSF = gr(Be)),
    e &&
      e.SSF &&
      (ca(),
      la(e.SSF),
      (r.revssf = ua(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    k0(r),
    (r.cellXfs = []),
    St(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = Ym(i, r, e);
  return n.unshift(qm(e, n, r)), qe(n);
}
function yl(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n['!ref'])) {
      var i = Or(n['!ref']);
      i.e.c > 255 &&
        typeof console < 'u' &&
        console.error &&
        console.error(
          "Worksheet '" +
            e.SheetNames[r] +
            "' extends beyond column IV (255).  Data may be lost.",
        );
    }
  }
  var a = t || {};
  switch (a.biff || 2) {
    case 8:
    case 5:
      return Jm(e, t);
    case 4:
    case 3:
    case 2:
      return Wm(e, t);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function Zm(e, t, r, n) {
  for (var i = e['!merges'] || [], a = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, l = 0, o = 0; o < i.length; ++o)
      if (!(i[o].s.r > r || i[o].s.c > s) && !(i[o].e.r < r || i[o].e.c < s)) {
        if (i[o].s.r < r || i[o].s.c < s) {
          f = -1;
          break;
        }
        (f = i[o].e.r - i[o].s.r + 1), (l = i[o].e.c - i[o].s.c + 1);
        break;
      }
    if (!(f < 0)) {
      var c = Te({ r, c: s }),
        u = n.dense ? (e[r] || [])[s] : e[c],
        h = (u && u.v != null && (u.h || R1(u.w || (st(u), u.w) || ''))) || '',
        d = {};
      f > 1 && (d.rowspan = f),
        l > 1 && (d.colspan = l),
        n.editable
          ? (h = '<span contenteditable="true">' + h + '</span>')
          : u &&
            ((d['data-t'] = (u && u.t) || 'z'),
            u.v != null && (d['data-v'] = u.v),
            u.z != null && (d['data-z'] = u.z),
            u.l &&
              (u.l.Target || '#').charAt(0) != '#' &&
              (h = '<a href="' + u.l.Target + '">' + h + '</a>')),
        (d.id = (n.id || 'sjs') + '-' + c),
        a.push(J('td', h, d));
    }
  }
  var p = '<tr>';
  return p + a.join('') + '</tr>';
}
var Qm =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  e_ = '</body></html>';
function r_(e, t, r) {
  var n = [];
  return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>';
}
function Fl(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : Qm,
    i = r.footer != null ? r.footer : e_,
    a = [n],
    s = Or(e['!ref']);
  (r.dense = Array.isArray(e)), a.push(r_(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(Zm(e, s, f, r));
  return a.push('</table>' + i), a.join('');
}
function Cl(e, t, r) {
  var n = r || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? Xe(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = t.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = Or(e['!ref']);
    (o.s.r = Math.min(o.s.r, c.s.r)),
      (o.s.c = Math.min(o.s.c, c.s.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      i == -1 && (o.e.r = i = c.e.r + 1);
  }
  var u = [],
    h = 0,
    d = e['!rows'] || (e['!rows'] = []),
    p = 0,
    x = 0,
    m = 0,
    S = 0,
    C = 0,
    F = 0;
  for (e['!cols'] || (e['!cols'] = []); p < f.length && x < l; ++p) {
    var k = f[p];
    if (zs(k)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var V = k.children;
    for (m = S = 0; m < V.length; ++m) {
      var q = V[m];
      if (!(n.display && zs(q))) {
        var O = q.hasAttribute('data-v')
            ? q.getAttribute('data-v')
            : q.hasAttribute('v')
              ? q.getAttribute('v')
              : I1(q.innerHTML),
          H = q.getAttribute('data-z') || q.getAttribute('z');
        for (h = 0; h < u.length; ++h) {
          var I = u[h];
          I.s.c == S + a &&
            I.s.r < x + i &&
            x + i <= I.e.r &&
            ((S = I.e.c + 1 - a), (h = -1));
        }
        (F = +q.getAttribute('colspan') || 1),
          ((C = +q.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            u.push({
              s: { r: x + i, c: S + a },
              e: { r: x + i + (C || 1) - 1, c: S + a + (F || 1) - 1 },
            });
        var G = { t: 's', v: O },
          X = q.getAttribute('data-t') || q.getAttribute('t') || '';
        O != null &&
          (O.length == 0
            ? (G.t = X || 'z')
            : n.raw ||
              O.trim().length == 0 ||
              X == 's' ||
              (O === 'TRUE'
                ? (G = { t: 'b', v: !0 })
                : O === 'FALSE'
                  ? (G = { t: 'b', v: !1 })
                  : isNaN(nt(O))
                    ? isNaN(Wn(O).getDate()) ||
                      ((G = { t: 'd', v: ur(O) }),
                      n.cellDates || (G = { t: 'n', v: _r(G.v) }),
                      (G.z = n.dateNF || Be[14]))
                    : (G = { t: 'n', v: nt(O) }))),
          G.z === void 0 && H != null && (G.z = H);
        var z = '',
          ne = q.getElementsByTagName('A');
        if (ne && ne.length)
          for (
            var me = 0;
            me < ne.length &&
            !(
              ne[me].hasAttribute('href') &&
              ((z = ne[me].getAttribute('href')), z.charAt(0) != '#')
            );
            ++me
          );
        z && z.charAt(0) != '#' && (G.l = { Target: z }),
          n.dense
            ? (e[x + i] || (e[x + i] = []), (e[x + i][S + a] = G))
            : (e[Te({ c: S + a, r: x + i })] = G),
          o.e.c < S + a && (o.e.c = S + a),
          (S += F);
      }
    }
    ++x;
  }
  return (
    u.length && (e['!merges'] = (e['!merges'] || []).concat(u)),
    (o.e.r = Math.max(o.e.r, x - 1 + i)),
    (e['!ref'] = Ue(o)),
    x >= l && (e['!fullref'] = Ue(((o.e.r = f.length - p + x - 1 + i), o))),
    e
  );
}
function Ol(e, t) {
  var r = t || {},
    n = r.dense ? [] : {};
  return Cl(n, e, t);
}
function t_(e, t) {
  return Lt(Ol(e, t), t);
}
function zs(e) {
  var t = '',
    r = n_(e);
  return (
    r && (t = r(e).getPropertyValue('display')),
    t || (t = e.style && e.style.display),
    t === 'none'
  );
}
function n_(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var i_ = (function () {
    var e = [
        '<office:master-styles>',
        '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
        '<style:header/>',
        '<style:header-left style:display="false"/>',
        '<style:footer/>',
        '<style:footer-left style:display="false"/>',
        '</style:master-page>',
        '</office:master-styles>',
      ].join(''),
      t =
        '<office:document-styles ' +
        Gn({
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
        e +
        '</office:document-styles>';
    return function () {
      return He + t;
    };
  })(),
  Ks = (function () {
    var e = function (a) {
        return Ee(a)
          .replace(/  +/g, function (s) {
            return '<text:s text:c="' + s.length + '"/>';
          })
          .replace(/\t/g, '<text:tab/>')
          .replace(/\n/g, '</text:p><text:p>')
          .replace(/^ /, '<text:s/>')
          .replace(/ $/, '<text:s/>');
      },
      t = `          <table:table-cell />
`,
      r = `          <table:covered-table-cell/>
`,
      n = function (a, s, f) {
        var l = [];
        l.push(
          '      <table:table table:name="' +
            Ee(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          u = Or(a['!ref'] || 'A1'),
          h = a['!merges'] || [],
          d = 0,
          p = Array.isArray(a);
        if (a['!cols'])
          for (c = 0; c <= u.e.c; ++c)
            l.push(
              '        <table:table-column' +
                (a['!cols'][c]
                  ? ' table:style-name="co' + a['!cols'][c].ods + '"'
                  : '') +
                `></table:table-column>
`,
            );
        var x = '',
          m = a['!rows'] || [];
        for (o = 0; o < u.s.r; ++o)
          (x = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                x +
                `></table:table-row>
`,
            );
        for (; o <= u.e.r; ++o) {
          for (
            x = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : '',
              l.push(
                '        <table:table-row' +
                  x +
                  `>
`,
              ),
              c = 0;
            c < u.s.c;
            ++c
          )
            l.push(t);
          for (; c <= u.e.c; ++c) {
            var S = !1,
              C = {},
              F = '';
            for (d = 0; d != h.length; ++d)
              if (
                !(h[d].s.c > c) &&
                !(h[d].s.r > o) &&
                !(h[d].e.c < c) &&
                !(h[d].e.r < o)
              ) {
                (h[d].s.c != c || h[d].s.r != o) && (S = !0),
                  (C['table:number-columns-spanned'] = h[d].e.c - h[d].s.c + 1),
                  (C['table:number-rows-spanned'] = h[d].e.r - h[d].s.r + 1);
                break;
              }
            if (S) {
              l.push(r);
              continue;
            }
            var k = Te({ r: o, c }),
              V = p ? (a[o] || [])[c] : a[k];
            if (
              V &&
              V.f &&
              ((C['table:formula'] = Ee(Av(V.f))),
              V.F && V.F.slice(0, k.length) == k)
            ) {
              var q = Or(V.F);
              (C['table:number-matrix-columns-spanned'] = q.e.c - q.s.c + 1),
                (C['table:number-matrix-rows-spanned'] = q.e.r - q.s.r + 1);
            }
            if (!V) {
              l.push(t);
              continue;
            }
            switch (V.t) {
              case 'b':
                (F = V.v ? 'TRUE' : 'FALSE'),
                  (C['office:value-type'] = 'boolean'),
                  (C['office:boolean-value'] = V.v ? 'true' : 'false');
                break;
              case 'n':
                (F = V.w || String(V.v || 0)),
                  (C['office:value-type'] = 'float'),
                  (C['office:value'] = V.v || 0);
                break;
              case 's':
              case 'str':
                (F = V.v == null ? '' : V.v),
                  (C['office:value-type'] = 'string');
                break;
              case 'd':
                (F = V.w || ur(V.v).toISOString()),
                  (C['office:value-type'] = 'date'),
                  (C['office:date-value'] = ur(V.v).toISOString()),
                  (C['table:style-name'] = 'ce1');
                break;
              default:
                l.push(t);
                continue;
            }
            var O = e(F);
            if (V.l && V.l.Target) {
              var H = V.l.Target;
              (H = H.charAt(0) == '#' ? '#' + yv(H.slice(1)) : H),
                H.charAt(0) != '#' && !H.match(/^\w+:/) && (H = '../' + H),
                (O = J('text:a', O, {
                  'xlink:href': H.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                J('table:table-cell', J('text:p', O, {}), C) +
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
        var f = 0;
        s.SheetNames.map(function (o) {
          return s.Sheets[o];
        }).forEach(function (o) {
          if (o && o['!cols']) {
            for (var c = 0; c < o['!cols'].length; ++c)
              if (o['!cols'][c]) {
                var u = o['!cols'][c];
                if (u.width == null && u.wpx == null && u.wch == null) continue;
                C0(u), (u.ods = f);
                var h = o['!cols'][c].wpx + 'px';
                a.push(
                  '  <style:style style:name="co' +
                    f +
                    `" style:family="table-column">
`,
                ),
                  a.push(
                    '   <style:table-column-properties fo:break-before="auto" style:column-width="' +
                      h +
                      `"/>
`,
                  ),
                  a.push(`  </style:style>
`),
                  ++f;
              }
          }
        });
        var l = 0;
        s.SheetNames.map(function (o) {
          return s.Sheets[o];
        }).forEach(function (o) {
          if (o && o['!rows']) {
            for (var c = 0; c < o['!rows'].length; ++c)
              if (o['!rows'][c]) {
                o['!rows'][c].ods = l;
                var u = o['!rows'][c].hpx + 'px';
                a.push(
                  '  <style:style style:name="ro' +
                    l +
                    `" style:family="table-row">
`,
                ),
                  a.push(
                    '   <style:table-row-properties fo:break-before="auto" style:row-height="' +
                      u +
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
    return function (s, f) {
      var l = [He],
        o = Gn({
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
        c = Gn({
          'xmlns:config': 'urn:oasis:names:tc:opendocument:xmlns:config:1.0',
          'office:mimetype': 'application/vnd.oasis.opendocument.spreadsheet',
        });
      f.bookType == 'fods'
        ? (l.push(
            '<office:document' +
              o +
              c +
              `>
`,
          ),
          l.push(Go().replace(/office:document-meta/g, 'office:meta')))
        : l.push(
            '<office:document-content' +
              o +
              `>
`,
          ),
        i(l, s),
        l.push(`  <office:body>
`),
        l.push(`    <office:spreadsheet>
`);
      for (var u = 0; u != s.SheetNames.length; ++u)
        l.push(n(s.Sheets[s.SheetNames[u]], s, u));
      return (
        l.push(`    </office:spreadsheet>
`),
        l.push(`  </office:body>
`),
        f.bookType == 'fods'
          ? l.push('</office:document>')
          : l.push('</office:document-content>'),
        l.join('')
      );
    };
  })();
function Rl(e, t) {
  if (t.bookType == 'fods') return Ks(e, t);
  var r = v0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    ue(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    ue(r, n, Ks(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    ue(r, n, i_(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    ue(r, n, He + Go()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    ue(r, n, vx(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    ue(r, n, dx(i)),
    r
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function zi(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function a_(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : Br(Vn(e));
}
function s_(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e;
    return !0;
  }
  return !1;
}
function Tt(e) {
  var t = e.reduce(function (i, a) {
      return i + a.length;
    }, 0),
    r = new Uint8Array(t),
    n = 0;
  return (
    e.forEach(function (i) {
      r.set(i, n), (n += i.length);
    }),
    r
  );
}
function f_(e, t, r) {
  var n =
      Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    i = r / Math.pow(10, n - 6176);
  (e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[t + a] = i & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function jn(e, t) {
  var r = t ? t[0] : 0,
    n = e[r] & 127;
  e: if (
    e[r++] >= 128 &&
    ((n |= (e[r] & 127) << 7),
    e[r++] < 128 ||
      ((n |= (e[r] & 127) << 14), e[r++] < 128) ||
      ((n |= (e[r] & 127) << 21), e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 28)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 35)), ++r, e[r++] < 128) ||
      ((n += (e[r] & 127) * Math.pow(2, 42)), ++r, e[r++] < 128))
  )
    break e;
  return t && (t[0] = r), n;
}
function _e(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e: if (e > 127) {
    if (
      ((t[r - 1] |= 128),
      (t[r] = (e >> 7) & 127),
      ++r,
      e <= 16383 ||
        ((t[r - 1] |= 128), (t[r] = (e >> 14) & 127), ++r, e <= 2097151) ||
        ((t[r - 1] |= 128), (t[r] = (e >> 21) & 127), ++r, e <= 268435455) ||
        ((t[r - 1] |= 128),
        (t[r] = ((e / 256) >>> 21) & 127),
        ++r,
        e <= 34359738367) ||
        ((t[r - 1] |= 128),
        (t[r] = ((e / 65536) >>> 21) & 127),
        ++r,
        e <= 4398046511103))
    )
      break e;
    (t[r - 1] |= 128), (t[r] = ((e / 16777216) >>> 21) & 127), ++r;
  }
  return t.slice(0, r);
}
function an(e) {
  var t = 0,
    r = e[t] & 127;
  e: if (e[t++] >= 128) {
    if (
      ((r |= (e[t] & 127) << 7),
      e[t++] < 128 ||
        ((r |= (e[t] & 127) << 14), e[t++] < 128) ||
        ((r |= (e[t] & 127) << 21), e[t++] < 128))
    )
      break e;
    r |= (e[t] & 127) << 28;
  }
  return r;
}
function Ve(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      i = jn(e, r),
      a = i & 7;
    i = Math.floor(i / 8);
    var s = 0,
      f;
    if (i == 0) break;
    switch (a) {
      case 0:
        {
          for (var l = r[0]; e[r[0]++] >= 128; );
          f = e.slice(l, r[0]);
        }
        break;
      case 5:
        (s = 4), (f = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 1:
        (s = 8), (f = e.slice(r[0], r[0] + s)), (r[0] += s);
        break;
      case 2:
        (s = jn(e, r)), (f = e.slice(r[0], r[0] + s)), (r[0] += s);
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
    var o = { data: f, type: a };
    t[i] == null ? (t[i] = [o]) : t[i].push(o);
  }
  return t;
}
function ze(e) {
  var t = [];
  return (
    e.forEach(function (r, n) {
      r.forEach(function (i) {
        i.data &&
          (t.push(_e(n * 8 + i.type)),
          i.type == 2 && t.push(_e(i.data.length)),
          t.push(i.data));
      });
    }),
    Tt(t)
  );
}
function Pr(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var i = jn(e, n),
      a = Ve(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: an(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = Ve(f.data),
        o = an(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (t = a[3]) != null && t[0] && (s.merge = an(a[3][0].data) >>> 0 > 0),
      r.push(s);
  }
  return r;
}
function Yt(e) {
  var t = [];
  return (
    e.forEach(function (r) {
      var n = [];
      (n[1] = [{ data: _e(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: _e(+!!r.merge), type: 0 }]);
      var i = [];
      r.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: _e(s.data.length) }]),
          n[2].push({ data: ze(s.meta), type: 2 });
      });
      var a = ze(n);
      t.push(_e(a.length)),
        t.push(a),
        i.forEach(function (s) {
          return t.push(s);
        });
    }),
    Tt(t)
  );
}
function o_(e, t) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var r = [0], n = jn(t, r), i = []; r[0] < t.length; ) {
    var a = t[r[0]] & 3;
    if (a == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60) ++s;
      else {
        var f = s - 59;
        (s = t[r[0]]),
          f > 1 && (s |= t[r[0] + 1] << 8),
          f > 2 && (s |= t[r[0] + 2] << 16),
          f > 3 && (s |= t[r[0] + 3] << 24),
          (s >>>= 0),
          s++,
          (r[0] += f);
      }
      i.push(t.slice(r[0], r[0] + s)), (r[0] += s);
      continue;
    } else {
      var l = 0,
        o = 0;
      if (
        (a == 1
          ? ((o = ((t[r[0]] >> 2) & 7) + 4),
            (l = (t[r[0]++] & 224) << 3),
            (l |= t[r[0]++]))
          : ((o = (t[r[0]++] >> 2) + 1),
            a == 2
              ? ((l = t[r[0]] | (t[r[0] + 1] << 8)), (r[0] += 2))
              : ((l =
                  (t[r[0]] |
                    (t[r[0] + 1] << 8) |
                    (t[r[0] + 2] << 16) |
                    (t[r[0] + 3] << 24)) >>>
                  0),
                (r[0] += 4))),
        (i = [Tt(i)]),
        l == 0)
      )
        throw new Error('Invalid offset 0');
      if (l > i[0].length) throw new Error('Invalid offset beyond length');
      if (o >= l)
        for (i.push(i[0].slice(-l)), o -= l; o >= i[i.length - 1].length; )
          i.push(i[i.length - 1]), (o -= i[i.length - 1].length);
      i.push(i[0].slice(-l, -l + o));
    }
  }
  var c = Tt(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Lr(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      i = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), t.push(o_(n, e.slice(r, r + i))), (r += i);
  }
  if (r !== e.length) throw new Error('data is not a valid framed stream!');
  return Tt(t);
}
function qt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      i = new Uint8Array(4);
    t.push(i);
    var a = _e(n),
      s = a.length;
    t.push(a),
      n <= 60
        ? (s++, t.push(new Uint8Array([(n - 1) << 2])))
        : n <= 256
          ? ((s += 2), t.push(new Uint8Array([240, (n - 1) & 255])))
          : n <= 65536
            ? ((s += 3),
              t.push(
                new Uint8Array([244, (n - 1) & 255, ((n - 1) >> 8) & 255]),
              ))
            : n <= 16777216
              ? ((s += 4),
                t.push(
                  new Uint8Array([
                    248,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                  ]),
                ))
              : n <= 4294967296 &&
                ((s += 5),
                t.push(
                  new Uint8Array([
                    252,
                    (n - 1) & 255,
                    ((n - 1) >> 8) & 255,
                    ((n - 1) >> 16) & 255,
                    ((n - 1) >>> 24) & 255,
                  ]),
                )),
      t.push(e.slice(r, r + n)),
      (s += n),
      (i[0] = 0),
      (i[1] = s & 255),
      (i[2] = (s >> 8) & 255),
      (i[3] = (s >> 16) & 255),
      (r += n);
  }
  return Tt(t);
}
function Ia(e, t) {
  var r = new Uint8Array(32),
    n = zi(r),
    i = 12,
    a = 0;
  switch (((r[0] = 5), e.t)) {
    case 'n':
      (r[1] = 2), f_(r, i, e.v), (a |= 1), (i += 16);
      break;
    case 'b':
      (r[1] = 6), n.setFloat64(i, e.v ? 1 : 0, !0), (a |= 2), (i += 8);
      break;
    case 's':
      if (t.indexOf(e.v) == -1)
        throw new Error('Value '.concat(e.v, ' missing from SST!'));
      (r[1] = 3), n.setUint32(i, t.indexOf(e.v), !0), (a |= 8), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + e.t;
  }
  return n.setUint32(8, a, !0), r.slice(0, i);
}
function Pa(e, t) {
  var r = new Uint8Array(32),
    n = zi(r),
    i = 12,
    a = 0;
  switch (((r[0] = 3), e.t)) {
    case 'n':
      (r[2] = 2), n.setFloat64(i, e.v, !0), (a |= 32), (i += 8);
      break;
    case 'b':
      (r[2] = 6), n.setFloat64(i, e.v ? 1 : 0, !0), (a |= 32), (i += 8);
      break;
    case 's':
      if (t.indexOf(e.v) == -1)
        throw new Error('Value '.concat(e.v, ' missing from SST!'));
      (r[2] = 3), n.setUint32(i, t.indexOf(e.v), !0), (a |= 16), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + e.t;
  }
  return n.setUint32(4, a, !0), r.slice(0, i);
}
function ct(e) {
  var t = Ve(e);
  return jn(t[1][0].data);
}
function l_(e, t, r) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      an(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = zi(e[7][0].data),
      c = 0,
      u = [],
      h = zi(e[4][0].data),
      d = 0,
      p = [],
      x = 0;
    x < t.length;
    ++x
  ) {
    if (t[x] == null) {
      o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, c, !0), h.setUint16(x * 2, d, !0);
    var m, S;
    switch (typeof t[x]) {
      case 'string':
        (m = Ia({ t: 's', v: t[x] }, r)), (S = Pa({ t: 's', v: t[x] }, r));
        break;
      case 'number':
        (m = Ia({ t: 'n', v: t[x] }, r)), (S = Pa({ t: 'n', v: t[x] }, r));
        break;
      case 'boolean':
        (m = Ia({ t: 'b', v: t[x] }, r)), (S = Pa({ t: 'b', v: t[x] }, r));
        break;
      default:
        throw new Error('Unsupported value ' + t[x]);
    }
    u.push(m), (c += m.length), p.push(S), (d += S.length), ++l;
  }
  for (e[2][0].data = _e(l); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535, !0);
  return (e[6][0].data = Tt(u)), (e[3][0].data = Tt(p)), l;
}
function c_(e, t) {
  if (!t || !t.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = Or(r['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(Ue(n)),
      );
  var a = Ki(r, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (B) {
    return B.forEach(function (R) {
      typeof R == 'string' && s.push(R);
    });
  });
  var f = {},
    l = [],
    o = Se.read(t.numbers, { type: 'base64' });
  o.FileIndex.map(function (B, R) {
    return [B, o.FullPaths[R]];
  }).forEach(function (B) {
    var R = B[0],
      A = B[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var b = R.content,
        Q = Lr(b),
        ie = Pr(Q);
      ie.forEach(function (re) {
        l.push(re.id),
          (f[re.id] = {
            deps: [],
            location: A,
            type: an(re.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (B, R) {
      return B - R;
    });
  var c = l
    .filter(function (B) {
      return B > 1;
    })
    .map(function (B) {
      return [B, _e(B)];
    });
  o.FileIndex.map(function (B, R) {
    return [B, o.FullPaths[R]];
  }).forEach(function (B) {
    var R = B[0];
    if ((B[1], !!R.name.match(/\.iwa/))) {
      var A = Pr(Lr(R.content));
      A.forEach(function (b) {
        b.messages.forEach(function (Q) {
          c.forEach(function (ie) {
            b.messages.some(function (re) {
              return an(re.meta[1][0].data) != 11006 && s_(re.data, ie[1]);
            }) && f[ie[0]].deps.push(b.id);
          });
        });
      });
    }
  });
  for (
    var u = Se.find(o, f[1].location), h = Pr(Lr(u.content)), d, p = 0;
    p < h.length;
    ++p
  ) {
    var x = h[p];
    x.id == 1 && (d = x);
  }
  var m = ct(Ve(d.messages[0].data)[1][0].data);
  for (
    u = Se.find(o, f[m].location), h = Pr(Lr(u.content)), p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  for (
    m = ct(Ve(d.messages[0].data)[2][0].data),
      u = Se.find(o, f[m].location),
      h = Pr(Lr(u.content)),
      p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  for (
    m = ct(Ve(d.messages[0].data)[2][0].data),
      u = Se.find(o, f[m].location),
      h = Pr(Lr(u.content)),
      p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  var S = Ve(d.messages[0].data);
  {
    (S[6][0].data = _e(n.e.r + 1)), (S[7][0].data = _e(n.e.c + 1));
    var C = ct(S[46][0].data),
      F = Se.find(o, f[C].location),
      k = Pr(Lr(F.content));
    {
      for (var V = 0; V < k.length && k[V].id != C; ++V);
      if (k[V].id != C) throw 'Bad ColumnRowUIDMapArchive';
      var q = Ve(k[V].messages[0].data);
      (q[1] = []), (q[2] = []), (q[3] = []);
      for (var O = 0; O <= n.e.c; ++O) {
        var H = [];
        (H[1] = H[2] = [{ type: 0, data: _e(O + 420690) }]),
          q[1].push({ type: 2, data: ze(H) }),
          q[2].push({ type: 0, data: _e(O) }),
          q[3].push({ type: 0, data: _e(O) });
      }
      (q[4] = []), (q[5] = []), (q[6] = []);
      for (var I = 0; I <= n.e.r; ++I)
        (H = []),
          (H[1] = H[2] = [{ type: 0, data: _e(I + 726270) }]),
          q[4].push({ type: 2, data: ze(H) }),
          q[5].push({ type: 0, data: _e(I) }),
          q[6].push({ type: 0, data: _e(I) });
      k[V].messages[0].data = ze(q);
    }
    (F.content = qt(Yt(k))), (F.size = F.content.length), delete S[46];
    var G = Ve(S[4][0].data);
    {
      G[7][0].data = _e(n.e.r + 1);
      var X = Ve(G[1][0].data),
        z = ct(X[2][0].data);
      (F = Se.find(o, f[z].location)), (k = Pr(Lr(F.content)));
      {
        if (k[0].id != z) throw 'Bad HeaderStorageBucket';
        var ne = Ve(k[0].messages[0].data);
        for (I = 0; I < a.length; ++I) {
          var me = Ve(ne[2][0].data);
          (me[1][0].data = _e(I)),
            (me[4][0].data = _e(a[I].length)),
            (ne[2][I] = { type: ne[2][0].type, data: ze(me) });
        }
        k[0].messages[0].data = ze(ne);
      }
      (F.content = qt(Yt(k))), (F.size = F.content.length);
      var oe = ct(G[2][0].data);
      (F = Se.find(o, f[oe].location)), (k = Pr(Lr(F.content)));
      {
        if (k[0].id != oe) throw 'Bad HeaderStorageBucket';
        for (ne = Ve(k[0].messages[0].data), O = 0; O <= n.e.c; ++O)
          (me = Ve(ne[2][0].data)),
            (me[1][0].data = _e(O)),
            (me[4][0].data = _e(n.e.r + 1)),
            (ne[2][O] = { type: ne[2][0].type, data: ze(me) });
        k[0].messages[0].data = ze(ne);
      }
      (F.content = qt(Yt(k))), (F.size = F.content.length);
      var We = ct(G[4][0].data);
      (function () {
        for (
          var B = Se.find(o, f[We].location), R = Pr(Lr(B.content)), A, b = 0;
          b < R.length;
          ++b
        ) {
          var Q = R[b];
          Q.id == We && (A = Q);
        }
        var ie = Ve(A.messages[0].data);
        {
          ie[3] = [];
          var re = [];
          s.forEach(function (he, Pe) {
            (re[1] = [{ type: 0, data: _e(Pe) }]),
              (re[2] = [{ type: 0, data: _e(1) }]),
              (re[3] = [{ type: 2, data: a_(he) }]),
              ie[3].push({ type: 2, data: ze(re) });
          });
        }
        A.messages[0].data = ze(ie);
        var ee = Yt(R),
          pe = qt(ee);
        (B.content = pe), (B.size = B.content.length);
      })();
      var Oe = Ve(G[3][0].data);
      {
        var hr = Oe[1][0];
        delete Oe[2];
        var Me = Ve(hr.data);
        {
          var ar = ct(Me[2][0].data);
          (function () {
            for (
              var B = Se.find(o, f[ar].location),
                R = Pr(Lr(B.content)),
                A,
                b = 0;
              b < R.length;
              ++b
            ) {
              var Q = R[b];
              Q.id == ar && (A = Q);
            }
            var ie = Ve(A.messages[0].data);
            {
              delete ie[6], delete Oe[7];
              var re = new Uint8Array(ie[5][0].data);
              ie[5] = [];
              for (var ee = 0, pe = 0; pe <= n.e.r; ++pe) {
                var he = Ve(re);
                (ee += l_(he, a[pe], s)),
                  (he[1][0].data = _e(pe)),
                  ie[5].push({ data: ze(he), type: 2 });
              }
              (ie[1] = [{ type: 0, data: _e(n.e.c + 1) }]),
                (ie[2] = [{ type: 0, data: _e(n.e.r + 1) }]),
                (ie[3] = [{ type: 0, data: _e(ee) }]),
                (ie[4] = [{ type: 0, data: _e(n.e.r + 1) }]);
            }
            A.messages[0].data = ze(ie);
            var Pe = Yt(R),
              xe = qt(Pe);
            (B.content = xe), (B.size = B.content.length);
          })();
        }
        hr.data = ze(Me);
      }
      G[3][0].data = ze(Oe);
    }
    S[4][0].data = ze(G);
  }
  d.messages[0].data = ze(S);
  var sr = Yt(h),
    y = qt(sr);
  return (u.content = y), (u.size = u.content.length), o;
}
function u_(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      r[i[0]] === void 0 && (r[i[0]] = i[1]),
        i[2] === 'n' && (r[i[0]] = Number(r[i[0]]));
    }
  };
}
function k0(e) {
  u_([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(e);
}
function h_(e, t) {
  return t.bookType == 'ods'
    ? Rl(e, t)
    : t.bookType == 'numbers'
      ? c_(e, t)
      : t.bookType == 'xlsb'
        ? x_(e, t)
        : d_(e, t);
}
function x_(e, t) {
  (en = 1024),
    e && !e.SSF && (e.SSF = gr(Be)),
    e &&
      e.SSF &&
      (ca(),
      la(e.SSF),
      (t.revssf = ua(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Pn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
    n = ul.indexOf(t.bookType) > -1,
    i = Ho();
  k0((t = t || {}));
  var a = v0(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    St(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ue(a, s, jo(e.Props, t)),
    i.coreprops.push(s),
    ge(t.rels, 2, s, de.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && l.push(e.SheetNames[o]);
      e.Props.SheetNames = l;
    }
  for (
    e.Props.Worksheets = e.Props.SheetNames.length,
      ue(a, s, $o(e.Props)),
      i.extprops.push(s),
      ge(t.rels, 3, s, de.EXT_PROPS),
      e.Custprops !== e.Props &&
        Qe(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        ue(a, s, zo(e.Custprops)),
        i.custprops.push(s),
        ge(t.rels, 4, s, de.CUST_PROPS)),
      f = 1;
    f <= e.SheetNames.length;
    ++f
  ) {
    var c = { '!id': {} },
      u = e.Sheets[e.SheetNames[f - 1]],
      h = (u || {})['!type'] || 'sheet';
    switch (h) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + r),
          ue(a, s, vm(f - 1, s, t, e, c)),
          i.sheets.push(s),
          ge(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, de.WS[0]);
    }
    if (u) {
      var d = u['!comments'],
        p = !1,
        x = '';
      d &&
        d.length > 0 &&
        ((x = 'xl/comments' + f + '.' + r),
        ue(a, x, gm(d, x)),
        i.comments.push(x),
        ge(c, -1, '../comments' + f + '.' + r, de.CMNT),
        (p = !0)),
        u['!legacy'] &&
          p &&
          ue(a, 'xl/drawings/vmlDrawing' + f + '.vml', ll(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    c['!id'].rId1 && ue(a, Vo(s), tn(c));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      ue(a, s, _m(t.Strings, s, t)),
      i.strs.push(s),
      ge(t.wbrels, -1, 'sharedStrings.' + r, de.SST)),
    (s = 'xl/workbook.' + r),
    ue(a, s, pm(e, s)),
    i.workbooks.push(s),
    ge(t.rels, 1, s, de.WB),
    (s = 'xl/theme/theme1.xml'),
    ue(a, s, fl(e.Themes, t)),
    i.themes.push(s),
    ge(t.wbrels, -1, 'theme/theme1.xml', de.THEME),
    (s = 'xl/styles.' + r),
    ue(a, s, mm(e, s, t)),
    i.styles.push(s),
    ge(t.wbrels, -1, 'styles.' + r, de.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ue(a, s, e.vbaraw),
      i.vba.push(s),
      ge(t.wbrels, -1, 'vbaProject.bin', de.VBA)),
    (s = 'xl/metadata.' + r),
    ue(a, s, Em(s)),
    i.metadata.push(s),
    ge(t.wbrels, -1, 'metadata.' + r, de.XLMETA),
    ue(a, '[Content_Types].xml', Wo(i, t)),
    ue(a, '_rels/.rels', tn(t.rels)),
    ue(a, 'xl/_rels/workbook.' + r + '.rels', tn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function d_(e, t) {
  (en = 1024),
    e && !e.SSF && (e.SSF = gr(Be)),
    e &&
      e.SSF &&
      (ca(),
      la(e.SSF),
      (t.revssf = ua(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Pn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = 'xml',
    n = ul.indexOf(t.bookType) > -1,
    i = Ho();
  k0((t = t || {}));
  var a = v0(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    St(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ue(a, s, jo(e.Props, t)),
    i.coreprops.push(s),
    ge(t.rels, 2, s, de.CORE_PROPS),
    (s = 'docProps/app.xml'),
    !(e.Props && e.Props.SheetNames))
  )
    if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
    else {
      for (var l = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && l.push(e.SheetNames[o]);
      e.Props.SheetNames = l;
    }
  (e.Props.Worksheets = e.Props.SheetNames.length),
    ue(a, s, $o(e.Props)),
    i.extprops.push(s),
    ge(t.rels, 3, s, de.EXT_PROPS),
    e.Custprops !== e.Props &&
      Qe(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      ue(a, s, zo(e.Custprops)),
      i.custprops.push(s),
      ge(t.rels, 4, s, de.CUST_PROPS));
  var c = ['SheetJ5'];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var u = { '!id': {} },
      h = e.Sheets[e.SheetNames[f - 1]],
      d = (h || {})['!type'] || 'sheet';
    switch (d) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + r),
          ue(a, s, El(f - 1, t, e, u)),
          i.sheets.push(s),
          ge(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, de.WS[0]);
    }
    if (h) {
      var p = h['!comments'],
        x = !1,
        m = '';
      if (p && p.length > 0) {
        var S = !1;
        p.forEach(function (C) {
          C[1].forEach(function (F) {
            F.T == !0 && (S = !0);
          });
        }),
          S &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + r),
            ue(a, m, Xd(p, c, t)),
            i.threadedcomments.push(m),
            ge(
              u,
              -1,
              '../threadedComments/threadedComment' + f + '.' + r,
              de.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + r),
          ue(a, m, cl(p)),
          i.comments.push(m),
          ge(u, -1, '../comments' + f + '.' + r, de.CMNT),
          (x = !0);
      }
      h['!legacy'] &&
        x &&
        ue(a, 'xl/drawings/vmlDrawing' + f + '.vml', ll(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    u['!id'].rId1 && ue(a, Vo(s), tn(u));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      ue(a, s, rl(t.Strings, t)),
      i.strs.push(s),
      ge(t.wbrels, -1, 'sharedStrings.' + r, de.SST)),
    (s = 'xl/workbook.' + r),
    ue(a, s, Sl(e)),
    i.workbooks.push(s),
    ge(t.rels, 1, s, de.WB),
    (s = 'xl/theme/theme1.xml'),
    ue(a, s, fl(e.Themes, t)),
    i.themes.push(s),
    ge(t.wbrels, -1, 'theme/theme1.xml', de.THEME),
    (s = 'xl/styles.' + r),
    ue(a, s, al(e, t)),
    i.styles.push(s),
    ge(t.wbrels, -1, 'styles.' + r, de.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ue(a, s, e.vbaraw),
      i.vba.push(s),
      ge(t.wbrels, -1, 'vbaProject.bin', de.VBA)),
    (s = 'xl/metadata.' + r),
    ue(a, s, ol()),
    i.metadata.push(s),
    ge(t.wbrels, -1, 'metadata.' + r, de.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      ue(a, s, $d(c)),
      i.people.push(s),
      ge(t.wbrels, -1, 'persons/person.xml', de.PEOPLE)),
    ue(a, '[Content_Types].xml', Wo(i, t)),
    ue(a, '_rels/.rels', tn(t.rels)),
    ue(a, 'xl/_rels/workbook.' + r + '.rels', tn(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function p_(e, t) {
  var r = '';
  switch ((t || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case 'base64':
      r = at(e.slice(0, 12));
      break;
    case 'binary':
      r = e;
      break;
    case 'array':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error('Unrecognized type ' + ((t && t.type) || 'undefined'));
  }
  return [
    r.charCodeAt(0),
    r.charCodeAt(1),
    r.charCodeAt(2),
    r.charCodeAt(3),
    r.charCodeAt(4),
    r.charCodeAt(5),
    r.charCodeAt(6),
    r.charCodeAt(7),
  ];
}
function Nl(e, t) {
  switch (t.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      t.type = '';
      break;
    case 'file':
      return Zn(t.file, Se.write(e, { type: ve ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + t.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
  return Se.write(e, t);
}
function v_(e, t) {
  var r = gr(t || {}),
    n = h_(e, r);
  return m_(n, r);
}
function m_(e, t) {
  var r = {},
    n = ve ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
  if ((t.compression && (r.compression = 'DEFLATE'), t.password)) r.type = n;
  else
    switch (t.type) {
      case 'base64':
        r.type = 'base64';
        break;
      case 'binary':
        r.type = 'string';
        break;
      case 'string':
        throw new Error(
          "'string' output type invalid for '" + t.bookType + "' files",
        );
      case 'buffer':
      case 'file':
        r.type = n;
        break;
      default:
        throw new Error('Unrecognized type ' + t.type);
    }
  var i = e.FullPaths
    ? Se.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
        compression: !!t.compression,
      })
    : e.generate(r);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (t.type == 'binary' || t.type == 'base64') return i;
    i = new Uint8Array(oa(i));
  }
  return t.password && typeof encrypt_agile < 'u'
    ? Nl(encrypt_agile(i, t.password), t)
    : t.type === 'file'
      ? Zn(t.file, i)
      : t.type == 'string'
        ? Nn(i)
        : i;
}
function __(e, t) {
  var r = t || {},
    n = Pm(e, r);
  return Nl(n, r);
}
function Xr(e, t, r) {
  r || (r = '');
  var n = r + e;
  switch (t.type) {
    case 'base64':
      return Hn(Vn(n));
    case 'binary':
      return Vn(n);
    case 'string':
      return e;
    case 'file':
      return Zn(t.file, n, 'utf8');
    case 'buffer':
      return ve
        ? ot(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : Xr(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function g_(e, t) {
  switch (t.type) {
    case 'base64':
      return Hn(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return Zn(t.file, e, 'binary');
    case 'buffer':
      return ve
        ? ot(e, 'binary')
        : e.split('').map(function (r) {
            return r.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function vi(e, t) {
  switch (t.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == 'base64' ? Hn(r) : t.type == 'string' ? Nn(r) : r;
    case 'file':
      return Zn(t.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
}
function Dl(e, t) {
  zh(), im(e);
  var r = gr(t || {});
  if (
    (r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')
  ) {
    r.type = 'binary';
    var n = Dl(e, r);
    return (r.type = 'array'), oa(n);
  }
  var i = 0;
  if (
    r.sheet &&
    (typeof r.sheet == 'number'
      ? (i = r.sheet)
      : (i = e.SheetNames.indexOf(r.sheet)),
    !e.SheetNames[i])
  )
    throw new Error('Sheet not found: ' + r.sheet + ' : ' + typeof r.sheet);
  switch (r.bookType || 'xlsb') {
    case 'xml':
    case 'xlml':
      return Xr(km(e, r), r);
    case 'slk':
    case 'sylk':
      return Xr(rd.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'htm':
    case 'html':
      return Xr(Fl(e.Sheets[e.SheetNames[i]], r), r);
    case 'txt':
      return g_(kl(e.Sheets[e.SheetNames[i]], r), r);
    case 'csv':
      return Xr(I0(e.Sheets[e.SheetNames[i]], r), r, '\uFEFF');
    case 'dif':
      return Xr(td.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'dbf':
      return vi(ed.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'prn':
      return Xr(nd.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'rtf':
      return Xr(cd.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'eth':
      return Xr(el.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'fods':
      return Xr(Rl(e, r), r);
    case 'wk1':
      return vi(Ws.sheet_to_wk1(e.Sheets[e.SheetNames[i]], r), r);
    case 'wk3':
      return vi(Ws.book_to_wk3(e, r), r);
    case 'biff2':
      r.biff || (r.biff = 2);
    case 'biff3':
      r.biff || (r.biff = 3);
    case 'biff4':
      return r.biff || (r.biff = 4), vi(yl(e, r), r);
    case 'biff5':
      r.biff || (r.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return r.biff || (r.biff = 8), __(e, r);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return v_(e, r);
    default:
      throw new Error('Unrecognized bookType |' + r.bookType + '|');
  }
}
function E_(e) {
  if (!e.bookType) {
    var t = {
        xls: 'biff8',
        htm: 'html',
        slk: 'sylk',
        socialcalc: 'eth',
        Sh33tJS: 'WTF',
      },
      r = e.file.slice(e.file.lastIndexOf('.')).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)),
      (e.bookType = t[e.bookType] || e.bookType);
  }
}
function T_(e, t, r) {
  var n = {};
  return (n.type = 'file'), (n.file = t), E_(n), Dl(e, n);
}
function w_(e, t, r, n, i, a, s, f) {
  var l = Ze(r),
    o = f.defval,
    c = f.raw || !Object.prototype.hasOwnProperty.call(f, 'raw'),
    u = !0,
    h = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(h, '__rowNum__', { value: r, enumerable: !1 });
      } catch {
        h.__rowNum__ = r;
      }
    else h.__rowNum__ = r;
  if (!s || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var p = s ? e[r][d] : e[n[d] + l];
      if (p === void 0 || p.t === void 0) {
        if (o === void 0) continue;
        a[d] != null && (h[a[d]] = o);
        continue;
      }
      var x = p.v;
      switch (p.t) {
        case 'z':
          if (x == null) break;
          continue;
        case 'e':
          x = x == 0 ? null : void 0;
          break;
        case 's':
        case 'd':
        case 'b':
        case 'n':
          break;
        default:
          throw new Error('unrecognized type ' + p.t);
      }
      if (a[d] != null) {
        if (x == null)
          if (p.t == 'e' && x === null) h[a[d]] = null;
          else if (o !== void 0) h[a[d]] = o;
          else if (c && x === null) h[a[d]] = null;
          else continue;
        else
          h[a[d]] =
            c && (p.t !== 'n' || (p.t === 'n' && f.rawNumbers !== !1))
              ? x
              : st(p, x, f);
        x != null && (u = !1);
      }
    }
  return { row: h, isempty: u };
}
function Ki(e, t) {
  if (e == null || e['!ref'] == null) return [];
  var r = { t: 'n', v: 0 },
    n = 0,
    i = 1,
    a = [],
    s = 0,
    f = '',
    l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    o = t || {},
    c = o.range != null ? o.range : e['!ref'];
  switch (
    (o.header === 1
      ? (n = 1)
      : o.header === 'A'
        ? (n = 2)
        : Array.isArray(o.header)
          ? (n = 3)
          : o.header == null && (n = 0),
    typeof c)
  ) {
    case 'string':
      l = Ce(c);
      break;
    case 'number':
      (l = Ce(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var u = Ze(l.s.r),
    h = [],
    d = [],
    p = 0,
    x = 0,
    m = Array.isArray(e),
    S = l.s.r,
    C = 0,
    F = {};
  m && !e[S] && (e[S] = []);
  var k = (o.skipHidden && e['!cols']) || [],
    V = (o.skipHidden && e['!rows']) || [];
  for (C = l.s.c; C <= l.e.c; ++C)
    if (!(k[C] || {}).hidden)
      switch (((h[C] = nr(C)), (r = m ? e[S][C] : e[h[C] + u]), n)) {
        case 1:
          a[C] = C - l.s.c;
          break;
        case 2:
          a[C] = h[C];
          break;
        case 3:
          a[C] = o.header[C - l.s.c];
          break;
        default:
          if (
            (r == null && (r = { w: '__EMPTY', t: 's' }),
            (f = s = st(r, null, o)),
            (x = F[s] || 0),
            !x)
          )
            F[s] = 1;
          else {
            do f = s + '_' + x++;
            while (F[f]);
            (F[s] = x), (F[f] = 1);
          }
          a[C] = f;
      }
  for (S = l.s.r + i; S <= l.e.r; ++S)
    if (!(V[S] || {}).hidden) {
      var q = w_(e, l, S, h, n, a, m, o);
      (q.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (d[p++] = q.row);
    }
  return (d.length = p), d;
}
var Ys = /"/g;
function S_(e, t, r, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', u = Ze(r), h = t.s.c; h <= t.e.c; ++h)
    if (n[h]) {
      var d = f.dense ? (e[r] || [])[h] : e[n[h] + u];
      if (d == null) c = '';
      else if (d.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && d.t == 'n' ? d.v : st(d, null, f)));
        for (var p = 0, x = 0; p !== c.length; ++p)
          if (
            (x = c.charCodeAt(p)) === i ||
            x === a ||
            x === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(Ys, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        d.f != null && !d.F
          ? ((l = !1),
            (c = '=' + d.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(Ys, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function I0(e, t) {
  var r = [],
    n = t ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = Ce(e['!ref']),
    a = n.FS !== void 0 ? n.FS : ',',
    s = a.charCodeAt(0),
    f =
      n.RS !== void 0
        ? n.RS
        : `
`,
    l = f.charCodeAt(0),
    o = new RegExp((a == '|' ? '\\|' : a) + '+$'),
    c = '',
    u = [];
  n.dense = Array.isArray(e);
  for (
    var h = (n.skipHidden && e['!cols']) || [],
      d = (n.skipHidden && e['!rows']) || [],
      p = i.s.c;
    p <= i.e.c;
    ++p
  )
    (h[p] || {}).hidden || (u[p] = nr(p));
  for (var x = 0, m = i.s.r; m <= i.e.r; ++m)
    (d[m] || {}).hidden ||
      ((c = S_(e, i, m, u, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && r.push((x++ ? f : '') + c)));
  return delete n.dense, r.join('');
}
function kl(e, t) {
  t || (t = {}),
    (t.FS = '	'),
    (t.RS = `
`);
  var r = I0(e, t);
  return r;
}
function A_(e) {
  var t = '',
    r,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = Ce(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = nr(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = Ze(c), f = i.s.c; f <= i.e.c; ++f)
      if (
        ((t = s[f] + a),
        (r = o ? (e[c] || [])[f] : e[t]),
        (n = ''),
        r !== void 0)
      ) {
        if (r.F != null) {
          if (((t = r.F), !r.f)) continue;
          (n = r.f), t.indexOf(':') == -1 && (t = t + ':' + t);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == 'z') continue;
          if (r.t == 'n' && r.v != null) n = '' + r.v;
          else if (r.t == 'b') n = r.v ? 'TRUE' : 'FALSE';
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == 's' ? (n = "'" + r.v) : (n = '' + r.v);
          }
        }
        l[l.length] = t + '=' + n;
      }
  return l;
}
function Il(e, t, r) {
  var n = r || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Xe(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + i } };
  if (a['!ref']) {
    var u = Ce(a['!ref']);
    (c.e.c = Math.max(c.e.c, u.e.c)),
      (c.e.r = Math.max(c.e.r, u.e.r)),
      s == -1 && ((s = u.e.r + 1), (c.e.r = s + t.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + i));
  var h = n.header || [],
    d = 0;
  t.forEach(function (x, m) {
    Qe(x).forEach(function (S) {
      (d = h.indexOf(S)) == -1 && (h[(d = h.length)] = S);
      var C = x[S],
        F = 'z',
        k = '',
        V = Te({ c: f + d, r: s + m + i });
      (o = Xn(a, V)),
        C && typeof C == 'object' && !(C instanceof Date)
          ? (a[V] = C)
          : (typeof C == 'number'
              ? (F = 'n')
              : typeof C == 'boolean'
                ? (F = 'b')
                : typeof C == 'string'
                  ? (F = 's')
                  : C instanceof Date
                    ? ((F = 'd'),
                      n.cellDates || ((F = 'n'), (C = _r(C))),
                      (k = n.dateNF || Be[14]))
                    : C === null && n.nullError && ((F = 'e'), (C = 0)),
            o
              ? ((o.t = F), (o.v = C), delete o.w, delete o.R, k && (o.z = k))
              : (a[V] = o = { t: F, v: C }),
            k && (o.z = k));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + h.length - 1));
  var p = Ze(s);
  if (i) for (d = 0; d < h.length; ++d) a[nr(d + f) + p] = { t: 's', v: h[d] };
  return (a['!ref'] = Ue(c)), a;
}
function y_(e, t) {
  return Il(null, e, t);
}
function Xn(e, t, r) {
  if (typeof t == 'string') {
    if (Array.isArray(e)) {
      var n = Xe(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[t] || (e[t] = { t: 'z' });
  }
  return typeof t != 'number' ? Xn(e, Te(t)) : Xn(e, Te({ r: t, c: r || 0 }));
}
function F_(e, t) {
  if (typeof t == 'number') {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error('Cannot find sheet # ' + t);
  } else if (typeof t == 'string') {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error('Cannot find sheet name |' + t + '|');
  } else throw new Error('Cannot find sheet |' + t + '|');
}
function C_() {
  return { SheetNames: [], Sheets: {} };
}
function O_(e, t, r, n) {
  var i = 1;
  if (!r)
    for (
      ;
      i <= 65535 && e.SheetNames.indexOf((r = 'Sheet' + i)) != -1;
      ++i, r = void 0
    );
  if (!r || e.SheetNames.length >= 65535)
    throw new Error('Too many worksheets');
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var a = r.match(/(^.*?)(\d+)$/);
    i = (a && +a[2]) || 0;
    var s = (a && a[1]) || r;
    for (++i; i <= 65535 && e.SheetNames.indexOf((r = s + i)) != -1; ++i);
  }
  if ((wl(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error('Worksheet with name |' + r + '| already exists!');
  return e.SheetNames.push(r), (e.Sheets[r] = t), r;
}
function R_(e, t, r) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = F_(e, t);
  switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error('Bad sheet visibility setting ' + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function N_(e, t) {
  return (e.z = t), e;
}
function Pl(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function D_(e, t, r) {
  return Pl(e, '#' + t, r);
}
function k_(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' });
}
function I_(e, t, r, n) {
  for (
    var i = typeof t != 'string' ? t : Ce(t),
      a = typeof t == 'string' ? t : Ue(t),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = Xn(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = r), n && (l.D = !0));
    }
  return e;
}
var La = {
    encode_col: nr,
    encode_row: Ze,
    encode_cell: Te,
    encode_range: Ue,
    decode_col: w0,
    decode_row: T0,
    split_cell: z1,
    decode_cell: Xe,
    decode_range: Or,
    format_cell: st,
    sheet_add_aoa: Po,
    sheet_add_json: Il,
    sheet_add_dom: Cl,
    aoa_to_sheet: xn,
    json_to_sheet: y_,
    table_to_sheet: Ol,
    table_to_book: t_,
    sheet_to_csv: I0,
    sheet_to_txt: kl,
    sheet_to_json: Ki,
    sheet_to_html: Fl,
    sheet_to_formulae: A_,
    sheet_to_row_object_array: Ki,
    sheet_get_cell: Xn,
    book_new: C_,
    book_append_sheet: O_,
    book_set_sheet_visibility: R_,
    cell_set_number_format: N_,
    cell_set_hyperlink: Pl,
    cell_set_internal_link: D_,
    cell_add_comment: k_,
    sheet_set_array_formula: I_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  P_ = wt(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/suppliers/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function L_(e, t) {
  t0(t, !0);
  let r = et('');
  Of(() => {
    rr(r, window.location.pathname, !0), console.log('currentPath:', we(r));
  });
  function n(H) {
    return H === '/' ? we(r) === '/' : we(r).startsWith(H);
  }
  var i = P_(),
    a = Ke(Fe(i), 2),
    s = Fe(a),
    f = Fe(s);
  let l;
  var o = Ke(s, 2),
    c = Fe(o);
  let u;
  var h = Ke(o, 2),
    d = Fe(h);
  let p;
  var x = Ke(h, 2),
    m = Fe(x);
  let S;
  var C = Ke(x, 2),
    F = Fe(C);
  let k;
  var V = Ke(C, 2),
    q = Fe(V);
  let O;
  mi(
    (H, I, G, X, z, ne) => {
      (l = Xt(f, 1, 'svelte-1t3skh', null, l, H)),
        (u = Xt(c, 1, 'svelte-1t3skh', null, u, I)),
        (p = Xt(d, 1, 'svelte-1t3skh', null, p, G)),
        (S = Xt(m, 1, 'svelte-1t3skh', null, S, X)),
        (k = Xt(F, 1, 'svelte-1t3skh', null, k, z)),
        (O = Xt(q, 1, 'svelte-1t3skh', null, O, ne));
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
    ut(e, i),
    n0();
}
var B_ = wt('<p class="status svelte-r907g2">Loading suppliers...</p>'),
  M_ = wt('<p class="status error svelte-r907g2"> </p>'),
  b_ = wt('<p class="status svelte-r907g2">No suppliers found.</p>'),
  U_ = wt('<p class="status svelte-r907g2"> </p>'),
  H_ = wt(
    '<tr><td class="svelte-r907g2"><span class="cell-content svelte-r907g2"> </span></td><td class="svelte-r907g2"><span class="cell-content svelte-r907g2"> </span></td><td class="svelte-r907g2"><span class="cell-content svelte-r907g2"> </span></td><td class="svelte-r907g2"><button class="btn delete-btn svelte-r907g2">Delete</button></td></tr>',
  ),
  W_ = wt(
    '<div class="table-container svelte-r907g2"><table class="svelte-r907g2"><thead class="svelte-r907g2"><tr><th class="svelte-r907g2">Code</th><th class="svelte-r907g2">Name</th><th class="svelte-r907g2">Contact</th><th class="svelte-r907g2">Actions</th></tr></thead><tbody></tbody></table></div>',
  ),
  V_ = wt(
    '<!> <div class="wrapper svelte-r907g2"><div class="card svelte-r907g2"><div class="header svelte-r907g2"><h2>Manage Suppliers</h2> <div class="controls svelte-r907g2"><input placeholder="Search..." class="search-input svelte-r907g2"/> <button class="btn excel-btn svelte-r907g2">Export Excel</button></div></div> <div class="add-supplier-form svelte-r907g2"><form><input placeholder="Supplier Code" required class="svelte-r907g2"/> <input placeholder="Supplier Name" required class="svelte-r907g2"/> <input placeholder="Contact" required class="svelte-r907g2"/> <button type="submit" class="btn add-btn svelte-r907g2">Add Supplier</button></form></div> <!></div></div>',
    1,
  );
function G_(e, t) {
  t0(t, !1);
  const [r, n] = hu(),
    i = () => zt(c, '$rawSuppliers', r),
    a = () => zt(p, '$searchTerm', r),
    s = () => zt(h, '$isLoading', r),
    f = () => zt(d, '$errorMessage', r),
    l = () => zt(V, '$filteredSuppliers', r),
    o = () => zt(u, '$inventoryItems', r),
    c = Zt([]),
    u = Zt([]),
    h = Zt(!0),
    d = Zt(''),
    p = Zt('');
  let x = On(''),
    m = On(''),
    S = On('');
  const C = 'http://localhost:3000/api/suppliers',
    F = 'http://localhost:3000/api/master/all-inventory';
  async function k() {
    var A;
    h.set(!0), d.set('');
    try {
      const [b, Q] = await Promise.all([Ne.get(C), Ne.get(F)]);
      c.set(Array.isArray(b.data) ? b.data : []),
        u.set(Array.isArray(Q.data) ? Q.data : []);
    } catch (b) {
      let Q = 'An unknown error occurred while fetching data.';
      b.response
        ? (Q = `Server error: ${b.response.status} - ${((A = b.response.data) == null ? void 0 : A.error) || b.message}`)
        : b.request
          ? (Q = 'Network error: No response from server. Is the API running?')
          : (Q = `Request setup error: ${b.message}`),
        d.set(Q),
        c.set([]),
        u.set([]);
    } finally {
      h.set(!1);
    }
  }
  Of(k);
  const V = lu([c, p], ([A, b]) => {
    if (!b.trim()) return A;
    const Q = b.toLowerCase();
    return A.filter(
      (ie) =>
        (ie.id && String(ie.id).toLowerCase().includes(Q)) ||
        (ie.name && ie.name.toLowerCase().includes(Q)) ||
        (ie.contact && ie.contact.toLowerCase().includes(Q)),
    );
  });
  async function q() {
    var A, b, Q, ie;
    if (!we(x).trim() || !we(m).trim() || !we(S).trim()) {
      d.set('Supplier Code, Name, and Contact are required.');
      return;
    }
    d.set('');
    try {
      await Ne.post(C, {
        suppcode: we(x).trim(),
        suppname: we(m).trim(),
        suppcontact: we(S).trim(),
      }),
        rr(x, ''),
        rr(m, ''),
        rr(S, ''),
        await k();
    } catch (re) {
      const ee =
        ((b = (A = re.response) == null ? void 0 : A.data) == null
          ? void 0
          : b.error) ||
        ((Q = re.response) == null ? void 0 : Q.statusText) ||
        re.message ||
        'Failed to add supplier.';
      d.set(
        `Error adding supplier: ${ee} (Status: ${((ie = re.response) == null ? void 0 : ie.status) || 'N/A'})`,
      );
    }
  }
  async function O(A) {
    var b, Q;
    if (confirm('Are you sure you want to delete this supplier?')) {
      d.set('');
      try {
        await Ne.delete(`${C}/${A}`), await k();
      } catch (ie) {
        const re =
          ((Q = (b = ie.response) == null ? void 0 : b.data) == null
            ? void 0
            : Q.error) ||
          ie.message ||
          'Failed to delete supplier.';
        d.set(re);
      }
    }
  }
  function H() {
    const A = i();
    if (!A || A.length === 0) {
      alert('No supplier data to export.');
      return;
    }
    const b = A.map((re) => ({
        'Supplier Code': re.id,
        Name: re.name,
        Contact: re.contact,
      })),
      Q = La.json_to_sheet(b),
      ie = La.book_new();
    La.book_append_sheet(ie, Q, 'Suppliers'), T_(ie, 'Suppliers.xlsx');
  }
  fu();
  var I = V_(),
    G = Ec(I);
  L_(G, {});
  var X = Ke(G, 2),
    z = Fe(X),
    ne = Fe(z),
    me = Ke(Fe(ne), 2),
    oe = Fe(me),
    We = Ke(oe, 2),
    Oe = Ke(ne, 2),
    hr = Fe(Oe),
    Me = Fe(hr),
    ar = Ke(Me, 2),
    sr = Ke(ar, 2),
    y = Ke(Oe, 2);
  {
    var B = (A) => {
        var b = B_();
        ut(A, b);
      },
      R = (A, b) => {
        {
          var Q = (re) => {
              var ee = M_(),
                pe = Fe(ee);
              mi(() => Tn(pe, f())), ut(re, ee);
            },
            ie = (re, ee) => {
              {
                var pe = (Pe) => {
                    var xe = b_();
                    ut(Pe, xe);
                  },
                  he = (Pe, xe) => {
                    {
                      var Ir = (se) => {
                          var Ge = U_(),
                            Er = Fe(Ge);
                          mi(() =>
                            Tn(Er, `No suppliers match "${a() ?? ''}".`),
                          ),
                            ut(se, Ge);
                        },
                        Re = (se) => {
                          var Ge = W_(),
                            Er = Fe(Ge),
                            qr = Ke(Fe(Er));
                          qc(
                            qr,
                            5,
                            l,
                            (Vr) => Vr.id,
                            (Vr, Jr) => {
                              var Ht = H_(),
                                Tr = Fe(Ht),
                                Wt = Fe(Tr),
                                vn = Fe(Wt),
                                Vt = Ke(Tr),
                                Zr = Fe(Vt),
                                va = Fe(Zr),
                                mn = Ke(Vt),
                                ni = Fe(mn),
                                ii = Fe(ni),
                                ai = Ke(mn),
                                Gt = Fe(ai);
                              mi(
                                (lt, ma) => {
                                  Tn(vn, we(Jr).id ?? 'N/A'),
                                    Tn(va, we(Jr).name ?? 'N/A'),
                                    Tn(ii, we(Jr).contact ?? 'N/A'),
                                    (Gt.disabled = lt),
                                    nu(Gt, 'title', ma);
                                },
                                [
                                  () =>
                                    o().some((lt) => lt.suppcode === we(Jr).id),
                                  () =>
                                    o().some((lt) => lt.suppcode === we(Jr).id)
                                      ? 'Cannot delete: Linked to inventory.'
                                      : 'Delete',
                                ],
                                af,
                              ),
                                Ta('click', Gt, () => O(we(Jr).id)),
                                ut(Vr, Ht);
                            },
                          ),
                            ut(se, Ge);
                        };
                      fi(
                        Pe,
                        (se) => {
                          l().length === 0 && a().trim() ? se(Ir) : se(Re, !1);
                        },
                        xe,
                      );
                    }
                  };
                fi(
                  re,
                  (Pe) => {
                    i().length === 0 ? Pe(pe) : Pe(he, !1);
                  },
                  ee,
                );
              }
            };
          fi(
            A,
            (re) => {
              f() ? re(Q) : re(ie, !1);
            },
            b,
          );
        }
      };
    fi(y, (A) => {
      s() && i().length === 0 ? A(B) : A(R, !1);
    });
  }
  oi(oe, a, (A) => uu(p, A)),
    Ta('click', We, H),
    oi(
      Me,
      () => we(x),
      (A) => rr(x, A),
    ),
    oi(
      ar,
      () => we(m),
      (A) => rr(m, A),
    ),
    oi(
      sr,
      () => we(S),
      (A) => rr(S, A),
    ),
    Ta('submit', hr, su(q)),
    ut(e, I),
    n0(),
    n();
}
$c(G_, { target: document.getElementById('app') });
