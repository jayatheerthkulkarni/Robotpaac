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
  function t(i) {
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
    const a = t(i);
    fetch(i.href, a);
  }
})();
const as = !1;
var _a = Array.isArray,
  nc = Array.prototype.indexOf,
  E0 = Array.from,
  Ef = Object.defineProperty,
  ti = Object.getOwnPropertyDescriptor,
  Tf = Object.getOwnPropertyDescriptors,
  ic = Object.prototype,
  ac = Array.prototype,
  T0 = Object.getPrototypeOf,
  ss = Object.isExtensible;
const Ur = () => {};
function sc(e) {
  return e();
}
function zi(e) {
  for (var r = 0; r < e.length; r++) e[r]();
}
const fr = 2,
  wf = 4,
  ga = 8,
  w0 = 16,
  kr = 32,
  kn = 64,
  Xi = 128,
  $t = 256,
  Ki = 512,
  Lt = 1024,
  mr = 2048,
  fn = 4096,
  yr = 8192,
  Ea = 16384,
  fc = 32768,
  S0 = 65536,
  oc = 1 << 19,
  Sf = 1 << 20,
  n0 = 1 << 21,
  ri = Symbol('$state');
function Af(e) {
  return e === this.v;
}
function yf(e, r) {
  return e != e
    ? r == r
    : e !== r || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function Ff(e) {
  return !yf(e, this.v);
}
function lc(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function cc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function uc(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function hc() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function dc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function xc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function pc() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let Ei = !1,
  vc = !1;
function mc() {
  Ei = !0;
}
const A0 = 1,
  y0 = 2,
  Cf = 4,
  _c = 8,
  gc = 16,
  Ec = 1,
  Tc = 2,
  kt = Symbol(),
  wc = 'http://www.w3.org/1999/xhtml';
function Sc(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let je = null;
function fs(e) {
  je = e;
}
function F0(e, r = !1, t) {
  var n = (je = {
    p: je,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  Ei && !r && (je.l = { s: null, u: null, r1: [], r2: ci(!1) }),
    N0(() => {
      n.d = !0;
    });
}
function C0(e) {
  const r = je;
  if (r !== null) {
    const s = r.e;
    if (s !== null) {
      var t = Le,
        n = Pe;
      r.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          Wr(a.effect), _r(a.reaction), Bf(a.fn);
        }
      } finally {
        Wr(t), _r(n);
      }
    }
    (je = r.p), (r.m = !0);
  }
  return {};
}
function Ti() {
  return !Ei || (je !== null && je.l === null);
}
function Sn(e) {
  if (typeof e != 'object' || e === null || ri in e) return e;
  const r = T0(e);
  if (r !== ic && r !== ac) return e;
  var t = new Map(),
    n = _a(e),
    i = Ar(0),
    a = Pe,
    s = (f) => {
      var l = Pe;
      _r(a);
      var o = f();
      return _r(l), o;
    };
  return (
    n && t.set('length', Ar(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          dc();
        var c = t.get(l);
        return (
          c === void 0
            ? ((c = s(() => Ar(o.value))), t.set(l, c))
            : pr(
                c,
                s(() => Sn(o.value)),
              ),
          !0
        );
      },
      deleteProperty(f, l) {
        var o = t.get(l);
        if (o === void 0)
          l in f &&
            (t.set(
              l,
              s(() => Ar(kt)),
            ),
            Va(i));
        else {
          if (n && typeof l == 'string') {
            var c = t.get('length'),
              h = Number(l);
            Number.isInteger(h) && h < c.v && pr(c, h);
          }
          pr(o, kt), Va(i);
        }
        return !0;
      },
      get(f, l, o) {
        var x;
        if (l === ri) return e;
        var c = t.get(l),
          h = l in f;
        if (
          (c === void 0 &&
            (!h || ((x = ti(f, l)) != null && x.writable)) &&
            ((c = s(() => Ar(Sn(h ? f[l] : kt)))), t.set(l, c)),
          c !== void 0)
        ) {
          var u = re(c);
          return u === kt ? void 0 : u;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = t.get(l);
          c && (o.value = re(c));
        } else if (o === void 0) {
          var h = t.get(l),
            u = h == null ? void 0 : h.v;
          if (h !== void 0 && u !== kt)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        var u;
        if (l === ri) return !0;
        var o = t.get(l),
          c = (o !== void 0 && o.v !== kt) || Reflect.has(f, l);
        if (
          o !== void 0 ||
          (Le !== null && (!c || ((u = ti(f, l)) != null && u.writable)))
        ) {
          o === void 0 && ((o = s(() => Ar(c ? Sn(f[l]) : kt))), t.set(l, o));
          var h = re(o);
          if (h === kt) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var F;
        var h = t.get(l),
          u = l in f;
        if (n && l === 'length')
          for (var x = o; x < h.v; x += 1) {
            var p = t.get(x + '');
            p !== void 0
              ? pr(p, kt)
              : x in f && ((p = s(() => Ar(kt))), t.set(x + '', p));
          }
        h === void 0
          ? (!u || ((F = ti(f, l)) != null && F.writable)) &&
            ((h = s(() => Ar(void 0))),
            pr(
              h,
              s(() => Sn(o)),
            ),
            t.set(l, h))
          : ((u = h.v !== kt),
            pr(
              h,
              s(() => Sn(o)),
            ));
        var d = Reflect.getOwnPropertyDescriptor(f, l);
        if ((d != null && d.set && d.set.call(c, o), !u)) {
          if (n && typeof l == 'string') {
            var m = t.get('length'),
              y = Number(l);
            Number.isInteger(y) && y >= m.v && pr(m, y + 1);
          }
          Va(i);
        }
        return !0;
      },
      ownKeys(f) {
        re(i);
        var l = Reflect.ownKeys(f).filter((h) => {
          var u = t.get(h);
          return u === void 0 || u.v !== kt;
        });
        for (var [o, c] of t) c.v !== kt && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        xc();
      },
    })
  );
}
function Va(e, r = 1) {
  pr(e, e.v + r);
}
function O0(e) {
  var r = fr | mr,
    t = Pe !== null && (Pe.f & fr) !== 0 ? Pe : null;
  return (
    Le === null || (t !== null && (t.f & $t) !== 0) ? (r |= $t) : (Le.f |= Sf),
    {
      ctx: je,
      deps: null,
      effects: null,
      equals: Af,
      f: r,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: t ?? Le,
    }
  );
}
function Zn(e) {
  const r = O0(e);
  return (r.equals = Ff), r;
}
function Of(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1) Hr(r[t]);
  }
}
function Ac(e) {
  for (var r = e.parent; r !== null; ) {
    if ((r.f & fr) === 0) return r;
    r = r.parent;
  }
  return null;
}
function Rf(e) {
  var r,
    t = Le;
  Wr(Ac(e));
  try {
    Of(e), (r = Kf(e));
  } finally {
    Wr(t);
  }
  return r;
}
function Nf(e) {
  var r = Rf(e);
  if ((e.equals(r) || ((e.v = r), (e.wv = zf())), !In)) {
    var t = (Mr || (e.f & $t) !== 0) && e.deps !== null ? fn : Lt;
    or(e, t);
  }
}
const li = new Map();
function ci(e, r) {
  var t = { f: 0, v: e, reactions: null, equals: Af, rv: 0, wv: 0 };
  return t;
}
function Ar(e, r) {
  const t = ci(e);
  return Pc(t), t;
}
function kf(e, r = !1) {
  var n;
  const t = ci(e);
  return (
    r || (t.equals = Ff),
    Ei && je !== null && je.l !== null && ((n = je.l).s ?? (n.s = [])).push(t),
    t
  );
}
function pr(e, r, t = !1) {
  Pe !== null &&
    !vr &&
    Ti() &&
    (Pe.f & (fr | w0)) !== 0 &&
    !(Ot != null && Ot.includes(e)) &&
    pc();
  let n = t ? Sn(r) : r;
  return i0(e, n);
}
function i0(e, r) {
  if (!e.equals(r)) {
    var t = e.v;
    In ? li.set(e, r) : li.set(e, t),
      (e.v = r),
      (e.f & fr) !== 0 &&
        ((e.f & mr) !== 0 && Rf(e), or(e, (e.f & $t) === 0 ? Lt : fn)),
      (e.wv = zf()),
      Df(e, mr),
      Ti() &&
        Le !== null &&
        (Le.f & Lt) !== 0 &&
        (Le.f & (kr | kn)) === 0 &&
        (qt === null ? Lc([e]) : qt.push(e));
  }
  return r;
}
function Df(e, r) {
  var t = e.reactions;
  if (t !== null)
    for (var n = Ti(), i = t.length, a = 0; a < i; a++) {
      var s = t[a],
        f = s.f;
      (f & mr) === 0 &&
        ((!n && s === Le) ||
          (or(s, r),
          (f & (Lt | $t)) !== 0 && ((f & fr) !== 0 ? Df(s, fn) : Sa(s))));
    }
}
let yc = !1;
var os, If, Pf, Lf;
function Fc() {
  if (os === void 0) {
    (os = window), (If = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      r = Node.prototype,
      t = Text.prototype;
    (Pf = ti(r, 'firstChild').get),
      (Lf = ti(r, 'nextSibling').get),
      ss(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      ss(t) && (t.__t = void 0);
  }
}
function R0(e = '') {
  return document.createTextNode(e);
}
function qi(e) {
  return Pf.call(e);
}
function Ta(e) {
  return Lf.call(e);
}
function de(e, r) {
  return qi(e);
}
function ls(e, r) {
  {
    var t = qi(e);
    return t instanceof Comment && t.data === '' ? Ta(t) : t;
  }
}
function Ae(e, r = 1, t = !1) {
  let n = e;
  for (; r--; ) n = Ta(n);
  return n;
}
function Cc(e) {
  e.textContent = '';
}
function Mf(e) {
  Le === null && Pe === null && uc(),
    Pe !== null && (Pe.f & $t) !== 0 && Le === null && cc(),
    In && lc();
}
function Oc(e, r) {
  var t = r.last;
  t === null
    ? (r.last = r.first = e)
    : ((t.next = e), (e.prev = t), (r.last = e));
}
function Dn(e, r, t, n = !0) {
  var i = Le,
    a = {
      ctx: je,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | mr,
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
  if (t)
    try {
      I0(a), (a.f |= fc);
    } catch (l) {
      throw (Hr(a), l);
    }
  else r !== null && Sa(a);
  var s =
    t &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (Sf | Xi)) === 0;
  if (!s && n && (i !== null && Oc(a, i), Pe !== null && (Pe.f & fr) !== 0)) {
    var f = Pe;
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function N0(e) {
  const r = Dn(ga, null, !1);
  return or(r, Lt), (r.teardown = e), r;
}
function a0(e) {
  Mf();
  var r = Le !== null && (Le.f & kr) !== 0 && je !== null && !je.m;
  if (r) {
    var t = je;
    (t.e ?? (t.e = [])).push({ fn: e, effect: Le, reaction: Pe });
  } else {
    var n = Bf(e);
    return n;
  }
}
function Rc(e) {
  return Mf(), bf(e);
}
function Nc(e) {
  const r = Dn(kn, e, !0);
  return (t = {}) =>
    new Promise((n) => {
      t.outro
        ? Yi(r, () => {
            Hr(r), n(void 0);
          })
        : (Hr(r), n(void 0));
    });
}
function Bf(e) {
  return Dn(wf, e, !1);
}
function bf(e) {
  return Dn(ga, e, !0);
}
function nr(e, r = [], t = O0) {
  const n = r.map(t);
  return k0(() => e(...n.map(re)));
}
function k0(e, r = 0) {
  return Dn(ga | w0 | r, e, !0);
}
function ui(e, r = !0) {
  return Dn(ga | kr, e, !0, r);
}
function Uf(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = In,
      n = Pe;
    cs(!0), _r(null);
    try {
      r.call(null);
    } finally {
      cs(t), _r(n);
    }
  }
}
function Hf(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    var n = t.next;
    (t.f & kn) !== 0 ? (t.parent = null) : Hr(t, r), (t = n);
  }
}
function kc(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & kr) === 0 && Hr(r), (r = t);
  }
}
function Hr(e, r = !0) {
  var t = !1;
  (r || (e.f & oc) !== 0) &&
    e.nodes_start !== null &&
    (Dc(e.nodes_start, e.nodes_end), (t = !0)),
    Hf(e, r && !t),
    ta(e, 0),
    or(e, Ea);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  Uf(e);
  var i = e.parent;
  i !== null && i.first !== null && Wf(e),
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
function Dc(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : Ta(e);
    e.remove(), (e = t);
  }
}
function Wf(e) {
  var r = e.parent,
    t = e.prev,
    n = e.next;
  t !== null && (t.next = n),
    n !== null && (n.prev = t),
    r !== null &&
      (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function Yi(e, r) {
  var t = [];
  D0(e, t, !0),
    Vf(t, () => {
      Hr(e), r && r();
    });
}
function Vf(e, r) {
  var t = e.length;
  if (t > 0) {
    var n = () => --t || r();
    for (var i of e) i.out(n);
  } else r();
}
function D0(e, r, t) {
  if ((e.f & yr) === 0) {
    if (((e.f ^= yr), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || t) && r.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & S0) !== 0 || (n.f & kr) !== 0;
      D0(n, r, a ? t : !1), (n = i);
    }
  }
}
function Ji(e) {
  Gf(e, !0);
}
function Gf(e, r) {
  if ((e.f & yr) !== 0) {
    (e.f ^= yr), (e.f & Lt) === 0 && (e.f ^= Lt), wi(e) && (or(e, mr), Sa(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next,
        i = (t.f & S0) !== 0 || (t.f & kr) !== 0;
      Gf(t, i ? r : !1), (t = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || r) && a.in();
  }
}
let Zi = [];
function Ic() {
  var e = Zi;
  (Zi = []), zi(e);
}
function $f(e) {
  Zi.length === 0 && queueMicrotask(Ic), Zi.push(e);
}
let Wi = !1,
  s0 = !1,
  Qi = null,
  Qr = !1,
  In = !1;
function cs(e) {
  In = e;
}
let Vi = [];
let Pe = null,
  vr = !1;
function _r(e) {
  Pe = e;
}
let Le = null;
function Wr(e) {
  Le = e;
}
let Ot = null;
function Pc(e) {
  Pe !== null && Pe.f & n0 && (Ot === null ? (Ot = [e]) : Ot.push(e));
}
let yt = null,
  Ut = 0,
  qt = null;
function Lc(e) {
  qt = e;
}
let jf = 1,
  ea = 0,
  Mr = !1;
function zf() {
  return ++jf;
}
function wi(e) {
  var h;
  var r = e.f;
  if ((r & mr) !== 0) return !0;
  if ((r & fn) !== 0) {
    var t = e.deps,
      n = (r & $t) !== 0;
    if (t !== null) {
      var i,
        a,
        s = (r & Ki) !== 0,
        f = n && Le !== null && !Mr,
        l = t.length;
      if (s || f) {
        var o = e,
          c = o.parent;
        for (i = 0; i < l; i++)
          (a = t[i]),
            (s ||
              !(
                (h = a == null ? void 0 : a.reactions) != null && h.includes(o)
              )) &&
              (a.reactions ?? (a.reactions = [])).push(o);
        s && (o.f ^= Ki), f && c !== null && (c.f & $t) === 0 && (o.f ^= $t);
      }
      for (i = 0; i < l; i++)
        if (((a = t[i]), wi(a) && Nf(a), a.wv > e.wv)) return !0;
    }
    (!n || (Le !== null && !Mr)) && or(e, Lt);
  }
  return !1;
}
function Mc(e, r) {
  for (var t = r; t !== null; ) {
    if ((t.f & Xi) !== 0)
      try {
        t.fn(e);
        return;
      } catch {
        t.f ^= Xi;
      }
    t = t.parent;
  }
  throw ((Wi = !1), e);
}
function us(e) {
  return (e.f & Ea) === 0 && (e.parent === null || (e.parent.f & Xi) === 0);
}
function wa(e, r, t, n) {
  if (Wi) {
    if ((t === null && (Wi = !1), us(r))) throw e;
    return;
  }
  if ((t !== null && (Wi = !0), Mc(e, r), us(r))) throw e;
}
function Xf(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (Ot != null && Ot.includes(e)) ||
        ((a.f & fr) !== 0
          ? Xf(a, r, !1)
          : r === a && (t ? or(a, mr) : (a.f & Lt) !== 0 && or(a, fn), Sa(a)));
    }
}
function Kf(e) {
  var x;
  var r = yt,
    t = Ut,
    n = qt,
    i = Pe,
    a = Mr,
    s = Ot,
    f = je,
    l = vr,
    o = e.f;
  (yt = null),
    (Ut = 0),
    (qt = null),
    (Mr = (o & $t) !== 0 && (vr || !Qr || Pe === null)),
    (Pe = (o & (kr | kn)) === 0 ? e : null),
    (Ot = null),
    fs(e.ctx),
    (vr = !1),
    ea++,
    (e.f |= n0);
  try {
    var c = (0, e.fn)(),
      h = e.deps;
    if (yt !== null) {
      var u;
      if ((ta(e, Ut), h !== null && Ut > 0))
        for (h.length = Ut + yt.length, u = 0; u < yt.length; u++)
          h[Ut + u] = yt[u];
      else e.deps = h = yt;
      if (!Mr)
        for (u = Ut; u < h.length; u++)
          ((x = h[u]).reactions ?? (x.reactions = [])).push(e);
    } else h !== null && Ut < h.length && (ta(e, Ut), (h.length = Ut));
    if (
      Ti() &&
      qt !== null &&
      !vr &&
      h !== null &&
      (e.f & (fr | fn | mr)) === 0
    )
      for (u = 0; u < qt.length; u++) Xf(qt[u], e);
    return (
      i !== null &&
        i !== e &&
        (ea++, qt !== null && (n === null ? (n = qt) : n.push(...qt))),
      c
    );
  } finally {
    (yt = r),
      (Ut = t),
      (qt = n),
      (Pe = i),
      (Mr = a),
      (Ot = s),
      fs(f),
      (vr = l),
      (e.f ^= n0);
  }
}
function Bc(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = nc.call(t, e);
    if (n !== -1) {
      var i = t.length - 1;
      i === 0 ? (t = r.reactions = null) : ((t[n] = t[i]), t.pop());
    }
  }
  t === null &&
    (r.f & fr) !== 0 &&
    (yt === null || !yt.includes(r)) &&
    (or(r, fn), (r.f & ($t | Ki)) === 0 && (r.f ^= Ki), Of(r), ta(r, 0));
}
function ta(e, r) {
  var t = e.deps;
  if (t !== null) for (var n = r; n < t.length; n++) Bc(e, t[n]);
}
function I0(e) {
  var r = e.f;
  if ((r & Ea) === 0) {
    or(e, Lt);
    var t = Le,
      n = je,
      i = Qr;
    (Le = e), (Qr = !0);
    try {
      (r & w0) !== 0 ? kc(e) : Hf(e), Uf(e);
      var a = Kf(e);
      (e.teardown = typeof a == 'function' ? a : null), (e.wv = jf);
      var s = e.deps,
        f;
      as && vc && e.f & mr;
    } catch (l) {
      wa(l, e, t, n || e.ctx);
    } finally {
      (Qr = i), (Le = t);
    }
  }
}
function bc() {
  try {
    hc();
  } catch (e) {
    if (Qi !== null) wa(e, Qi, null);
    else throw e;
  }
}
function Uc() {
  var e = Qr;
  try {
    var r = 0;
    for (Qr = !0; Vi.length > 0; ) {
      r++ > 1e3 && bc();
      var t = Vi,
        n = t.length;
      Vi = [];
      for (var i = 0; i < n; i++) {
        var a = Wc(t[i]);
        Hc(a);
      }
      li.clear();
    }
  } finally {
    (s0 = !1), (Qr = e), (Qi = null);
  }
}
function Hc(e) {
  var r = e.length;
  if (r !== 0)
    for (var t = 0; t < r; t++) {
      var n = e[t];
      if ((n.f & (Ea | yr)) === 0)
        try {
          wi(n) &&
            (I0(n),
            n.deps === null &&
              n.first === null &&
              n.nodes_start === null &&
              (n.teardown === null ? Wf(n) : (n.fn = null)));
        } catch (i) {
          wa(i, n, null, n.ctx);
        }
    }
}
function Sa(e) {
  s0 || ((s0 = !0), queueMicrotask(Uc));
  for (var r = (Qi = e); r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if ((t & (kn | kr)) !== 0) {
      if ((t & Lt) === 0) return;
      r.f ^= Lt;
    }
  }
  Vi.push(r);
}
function Wc(e) {
  for (var r = [], t = e; t !== null; ) {
    var n = t.f,
      i = (n & (kr | kn)) !== 0,
      a = i && (n & Lt) !== 0;
    if (!a && (n & yr) === 0) {
      if ((n & wf) !== 0) r.push(t);
      else if (i) t.f ^= Lt;
      else
        try {
          wi(t) && I0(t);
        } catch (l) {
          wa(l, t, null, t.ctx);
        }
      var s = t.first;
      if (s !== null) {
        t = s;
        continue;
      }
    }
    var f = t.parent;
    for (t = t.next; t === null && f !== null; ) (t = f.next), (f = f.parent);
  }
  return r;
}
function re(e) {
  var r = e.f,
    t = (r & fr) !== 0;
  if (Pe !== null && !vr) {
    if (!(Ot != null && Ot.includes(e))) {
      var n = Pe.deps;
      e.rv < ea &&
        ((e.rv = ea),
        yt === null && n !== null && n[Ut] === e
          ? Ut++
          : yt === null
            ? (yt = [e])
            : (!Mr || !yt.includes(e)) && yt.push(e));
    }
  } else if (t && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & $t) === 0 && (i.f ^= $t);
  }
  return t && ((i = e), wi(i) && Nf(i)), In && li.has(e) ? li.get(e) : e.v;
}
function Aa(e) {
  var r = vr;
  try {
    return (vr = !0), e();
  } finally {
    vr = r;
  }
}
const Vc = -7169;
function or(e, r) {
  e.f = (e.f & Vc) | r;
}
function Gc(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (ri in e) f0(e);
    else if (!Array.isArray(e))
      for (let r in e) {
        const t = e[r];
        typeof t == 'object' && t && ri in t && f0(t);
      }
  }
}
function f0(e, r = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !r.has(e)
  ) {
    r.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        f0(e[n], r);
      } catch {}
    const t = T0(e);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const n = Tf(t);
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
const $c = ['touchstart', 'touchmove'];
function jc(e) {
  return $c.includes(e);
}
let hs = !1;
function zc() {
  hs ||
    ((hs = !0),
    document.addEventListener(
      'reset',
      (e) => {
        Promise.resolve().then(() => {
          var r;
          if (!e.defaultPrevented)
            for (const t of e.target.elements)
              (r = t.__on_r) == null || r.call(t);
        });
      },
      { capture: !0 },
    ));
}
function qf(e) {
  var r = Pe,
    t = Le;
  _r(null), Wr(null);
  try {
    return e();
  } finally {
    _r(r), Wr(t);
  }
}
function Xc(e, r, t, n = t) {
  e.addEventListener(r, () => qf(t));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    zc();
}
const Kc = new Set(),
  ds = new Set();
function qc(e, r, t, n = {}) {
  function i(a) {
    if ((n.capture || Qn.call(r, a), !a.cancelBubble))
      return qf(() => (t == null ? void 0 : t.call(this, a)));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? $f(() => {
          r.addEventListener(e, i, n);
        })
      : r.addEventListener(e, i, n),
    i
  );
}
function er(e, r, t, n, i) {
  var a = { capture: n, passive: i },
    s = qc(e, r, t, a);
  (r === document.body || r === window || r === document) &&
    N0(() => {
      r.removeEventListener(e, s, a);
    });
}
function Qn(e) {
  var F;
  var r = this,
    t = r.ownerDocument,
    n = e.type,
    i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [],
    a = i[0] || e.target,
    s = 0,
    f = e.__root;
  if (f) {
    var l = i.indexOf(f);
    if (l !== -1 && (r === document || r === window)) {
      e.__root = r;
      return;
    }
    var o = i.indexOf(r);
    if (o === -1) return;
    l <= o && (s = l);
  }
  if (((a = i[s] || e.target), a !== r)) {
    Ef(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || t;
      },
    });
    var c = Pe,
      h = Le;
    _r(null), Wr(null);
    try {
      for (var u, x = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var d = a['__' + n];
          if (d != null && (!a.disabled || e.target === a))
            if (_a(d)) {
              var [m, ...y] = d;
              m.apply(a, [e, ...y]);
            } else d.call(a, e);
        } catch (A) {
          u ? x.push(A) : (u = A);
        }
        if (e.cancelBubble || p === r || p === null) break;
        a = p;
      }
      if (u) {
        for (let A of x)
          queueMicrotask(() => {
            throw A;
          });
        throw u;
      }
    } finally {
      (e.__root = r), delete e.currentTarget, _r(c), Wr(h);
    }
  }
}
function Yc(e) {
  var r = document.createElement('template');
  return (r.innerHTML = e.replaceAll('<!>', '<!---->')), r.content;
}
function o0(e, r) {
  var t = Le;
  t.nodes_start === null && ((t.nodes_start = e), (t.nodes_end = r));
}
function Tt(e, r) {
  var t = (r & Ec) !== 0,
    n = (r & Tc) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Yc(a ? e : '<!>' + e)), t || (i = qi(i)));
    var s = n || If ? document.importNode(i, !0) : i.cloneNode(!0);
    if (t) {
      var f = qi(s),
        l = s.lastChild;
      o0(f, l);
    } else o0(s, s);
    return s;
  };
}
function Jc(e = '') {
  {
    var r = R0(e + '');
    return o0(r, r), r;
  }
}
function ft(e, r) {
  e !== null && e.before(r);
}
function ur(e, r) {
  var t = r == null ? '' : typeof r == 'object' ? r + '' : r;
  t !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = t), (e.nodeValue = t + ''));
}
function Zc(e, r) {
  return Qc(e, r);
}
const mn = new Map();
function Qc(
  e,
  { target: r, anchor: t, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  Fc();
  var f = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var x = h[u];
        if (!f.has(x)) {
          f.add(x);
          var p = jc(x);
          r.addEventListener(x, Qn, { passive: p });
          var d = mn.get(x);
          d === void 0
            ? (document.addEventListener(x, Qn, { passive: p }), mn.set(x, 1))
            : mn.set(x, d + 1);
        }
      }
    };
  l(E0(Kc)), ds.add(l);
  var o = void 0,
    c = Nc(() => {
      var h = t ?? r.appendChild(R0());
      return (
        ui(() => {
          if (a) {
            F0({});
            var u = je;
            u.c = a;
          }
          i && (n.$$events = i), (o = e(h, n) || {}), a && C0();
        }),
        () => {
          var p;
          for (var u of f) {
            r.removeEventListener(u, Qn);
            var x = mn.get(u);
            --x === 0
              ? (document.removeEventListener(u, Qn), mn.delete(u))
              : mn.set(u, x);
          }
          ds.delete(l),
            h !== t && ((p = h.parentNode) == null || p.removeChild(h));
        }
      );
    });
  return eu.set(o, c), o;
}
let eu = new WeakMap();
function Ir(e, r, [t, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = kt,
    l = t > 0 ? S0 : 0,
    o = !1;
  const c = (u, x = !0) => {
      (o = !0), h(x, u);
    },
    h = (u, x) => {
      f !== (f = u) &&
        (f
          ? (a ? Ji(a) : x && (a = ui(() => x(i))),
            s &&
              Yi(s, () => {
                s = null;
              }))
          : (s ? Ji(s) : x && (s = ui(() => x(i, [t + 1, n]))),
            a &&
              Yi(a, () => {
                a = null;
              })));
    };
  k0(() => {
    (o = !1), r(c), o || h(null, null);
  }, l);
}
function Di(e, r) {
  return r;
}
function tu(e, r, t, n) {
  for (var i = [], a = r.length, s = 0; s < a; s++) D0(r[s].e, i, !0);
  var f = a > 0 && i.length === 0 && t !== null;
  if (f) {
    var l = t.parentNode;
    Cc(l), l.append(t), n.clear(), Lr(e, r[0].prev, r[a - 1].next);
  }
  Vf(i, () => {
    for (var o = 0; o < a; o++) {
      var c = r[o];
      f || (n.delete(c.k), Lr(e, c.prev, c.next)), Hr(c.e, !f);
    }
  });
}
function _n(e, r, t, n, i, a = null) {
  var s = e,
    f = { flags: r, items: new Map(), first: null },
    l = (r & Cf) !== 0;
  if (l) {
    var o = e;
    s = o.appendChild(R0());
  }
  var c = null,
    h = !1,
    u = Zn(() => {
      var x = t();
      return _a(x) ? x : x == null ? [] : E0(x);
    });
  k0(() => {
    var x = re(u),
      p = x.length;
    (h && p === 0) ||
      ((h = p === 0),
      ru(x, f, s, i, r, n, t),
      a !== null &&
        (p === 0
          ? c
            ? Ji(c)
            : (c = ui(() => a(s)))
          : c !== null &&
            Yi(c, () => {
              c = null;
            })),
      re(u));
  });
}
function ru(e, r, t, n, i, a, s) {
  var Te, ue, He, ke;
  var f = (i & _c) !== 0,
    l = (i & (A0 | y0)) !== 0,
    o = e.length,
    c = r.items,
    h = r.first,
    u = h,
    x,
    p = null,
    d,
    m = [],
    y = [],
    F,
    A,
    N,
    W;
  if (f)
    for (W = 0; W < o; W += 1)
      (F = e[W]),
        (A = a(F, W)),
        (N = c.get(A)),
        N !== void 0 &&
          ((Te = N.a) == null || Te.measure(), (d ?? (d = new Set())).add(N));
  for (W = 0; W < o; W += 1) {
    if (((F = e[W]), (A = a(F, W)), (N = c.get(A)), N === void 0)) {
      var q = u ? u.e.nodes_start : t;
      (p = iu(q, r, p, p === null ? r.first : p.next, F, A, W, n, i, s)),
        c.set(A, p),
        (m = []),
        (y = []),
        (u = p.next);
      continue;
    }
    if (
      (l && nu(N, F, W, i),
      (N.e.f & yr) !== 0 &&
        (Ji(N.e),
        f &&
          ((ue = N.a) == null || ue.unfix(), (d ?? (d = new Set())).delete(N))),
      N !== u)
    ) {
      if (x !== void 0 && x.has(N)) {
        if (m.length < y.length) {
          var O = y[0],
            b;
          p = O.prev;
          var P = m[0],
            V = m[m.length - 1];
          for (b = 0; b < m.length; b += 1) xs(m[b], O, t);
          for (b = 0; b < y.length; b += 1) x.delete(y[b]);
          Lr(r, P.prev, V.next),
            Lr(r, p, P),
            Lr(r, V, O),
            (u = O),
            (p = V),
            (W -= 1),
            (m = []),
            (y = []);
        } else
          x.delete(N),
            xs(N, u, t),
            Lr(r, N.prev, N.next),
            Lr(r, N, p === null ? r.first : p.next),
            Lr(r, p, N),
            (p = N);
        continue;
      }
      for (m = [], y = []; u !== null && u.k !== A; )
        (u.e.f & yr) === 0 && (x ?? (x = new Set())).add(u),
          y.push(u),
          (u = u.next);
      if (u === null) continue;
      N = u;
    }
    m.push(N), (p = N), (u = N.next);
  }
  if (u !== null || x !== void 0) {
    for (var G = x === void 0 ? [] : E0(x); u !== null; )
      (u.e.f & yr) === 0 && G.push(u), (u = u.next);
    var X = G.length;
    if (X > 0) {
      var ee = (i & Cf) !== 0 && o === 0 ? t : null;
      if (f) {
        for (W = 0; W < X; W += 1) (He = G[W].a) == null || He.measure();
        for (W = 0; W < X; W += 1) (ke = G[W].a) == null || ke.fix();
      }
      tu(r, G, ee, c);
    }
  }
  f &&
    $f(() => {
      var ze;
      if (d !== void 0) for (N of d) (ze = N.a) == null || ze.apply();
    }),
    (Le.first = r.first && r.first.e),
    (Le.last = p && p.e);
}
function nu(e, r, t, n) {
  (n & A0) !== 0 && i0(e.v, r), (n & y0) !== 0 ? i0(e.i, t) : (e.i = t);
}
function iu(e, r, t, n, i, a, s, f, l, o) {
  var c = (l & A0) !== 0,
    h = (l & gc) === 0,
    u = c ? (h ? kf(i) : ci(i)) : i,
    x = (l & y0) === 0 ? s : ci(s),
    p = { i: x, v: u, k: a, a: null, e: null, prev: t, next: n };
  try {
    return (
      (p.e = ui(() => f(e, u, x, o), yc)),
      (p.e.prev = t && t.e),
      (p.e.next = n && n.e),
      t === null ? (r.first = p) : ((t.next = p), (t.e.next = p.e)),
      n !== null && ((n.prev = p), (n.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function xs(e, r, t) {
  for (
    var n = e.next ? e.next.e.nodes_start : t,
      i = r ? r.e.nodes_start : t,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = Ta(a);
    i.before(a), (a = s);
  }
}
function Lr(e, r, t) {
  r === null ? (e.first = t) : ((r.next = t), (r.e.next = t && t.e)),
    t !== null && ((t.prev = r), (t.e.prev = r && r.e));
}
const ps = [
  ...` 	
\r\f \v\uFEFF`,
];
function au(e, r, t) {
  var n = e == null ? '' : '' + e;
  if ((r && (n = n ? n + ' ' + r : r), t)) {
    for (var i in t)
      if (t[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || ps.includes(n[s - 1])) &&
          (f === n.length || ps.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function Yr(e, r, t, n, i, a) {
  var s = e.__className;
  if (s !== t || s === void 0) {
    var f = au(t, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = t);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
const su = Symbol('is custom element'),
  fu = Symbol('is html');
function ou(e, r, t, n) {
  var i = lu(e);
  i[r] !== (i[r] = t) &&
    (t == null
      ? e.removeAttribute(r)
      : typeof t != 'string' && cu(e).includes(r)
        ? (e[r] = t)
        : e.setAttribute(r, t));
}
function lu(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [su]: e.nodeName.includes('-'),
      [fu]: e.namespaceURI === wc,
    })
  );
}
var vs = new Map();
function cu(e) {
  var r = vs.get(e.nodeName);
  if (r) return r;
  vs.set(e.nodeName, (r = []));
  for (var t, n = e, i = Element.prototype; i !== n; ) {
    t = Tf(n);
    for (var a in t) t[a].set && r.push(a);
    n = T0(n);
  }
  return r;
}
function Kn(e, r, t = r) {
  var n = Ti();
  Xc(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = Ga(e) ? $a(a) : a), t(a), n && a !== (a = r()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    Aa(r) == null && e.value && t(Ga(e) ? $a(e.value) : e.value),
    bf(() => {
      var i = r();
      (Ga(e) && i === $a(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function Ga(e) {
  var r = e.type;
  return r === 'number' || r === 'range';
}
function $a(e) {
  return e === '' ? null : +e;
}
function uu(e) {
  return function (...r) {
    var t = r[0];
    return t.stopPropagation(), e == null ? void 0 : e.apply(this, r);
  };
}
function hu(e = !1) {
  const r = je,
    t = r.l.u;
  if (!t) return;
  let n = () => Gc(r.s);
  if (e) {
    let i = 0,
      a = {};
    const s = O0(() => {
      let f = !1;
      const l = r.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => re(s);
  }
  t.b.length &&
    Rc(() => {
      ms(r, n), zi(t.b);
    }),
    a0(() => {
      const i = Aa(() => t.m.map(sc));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    t.a.length &&
      a0(() => {
        ms(r, n), zi(t.a);
      });
}
function ms(e, r) {
  if (e.l.s) for (const t of e.l.s) re(t);
  r();
}
function du(e, r) {
  var a;
  var t = (a = e.$$events) == null ? void 0 : a[r.type],
    n = _a(t) ? t.slice() : t == null ? [] : [t];
  for (var i of n) i.call(this, r);
}
function P0(e, r, t) {
  if (e == null) return r(void 0), t && t(void 0), Ur;
  const n = Aa(() => e.subscribe(r, t));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const gn = [];
function xu(e, r) {
  return { subscribe: mt(e, r).subscribe };
}
function mt(e, r = Ur) {
  let t = null;
  const n = new Set();
  function i(f) {
    if (yf(e, f) && ((e = f), t)) {
      const l = !gn.length;
      for (const o of n) o[1](), gn.push(o, e);
      if (l) {
        for (let o = 0; o < gn.length; o += 2) gn[o][0](gn[o + 1]);
        gn.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = Ur) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (t = r(i, a) || Ur),
      f(e),
      () => {
        n.delete(o), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function pu(e, r, t) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = r.length < 2;
  return xu(t, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      h = Ur;
    const u = () => {
        if (c) return;
        h();
        const p = r(n ? o[0] : o, s, f);
        a ? s(p) : (h = typeof p == 'function' ? p : Ur);
      },
      x = i.map((p, d) =>
        P0(
          p,
          (m) => {
            (o[d] = m), (c &= ~(1 << d)), l && u();
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
        zi(x), h(), (l = !1);
      }
    );
  });
}
function vu(e) {
  let r;
  return P0(e, (t) => (r = t))(), r;
}
let l0 = Symbol();
function vt(e, r, t) {
  const n =
    t[r] ?? (t[r] = { store: null, source: kf(void 0), unsubscribe: Ur });
  if (n.store !== e && !(l0 in t))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = Ur);
    else {
      var i = !0;
      (n.unsubscribe = P0(e, (a) => {
        i ? (n.source.v = a) : pr(n.source, a);
      })),
        (i = !1);
    }
  return e && l0 in t ? vu(e) : re(n.source);
}
function qn(e, r) {
  return e.set(r), r;
}
function mu() {
  const e = {};
  function r() {
    N0(() => {
      for (var t in e) e[t].unsubscribe();
      Ef(e, l0, { enumerable: !1, value: !0 });
    });
  }
  return [e, r];
}
function Yf(e) {
  je === null && Sc(),
    Ei && je.l !== null
      ? _u(je).m.push(e)
      : a0(() => {
          const r = Aa(e);
          if (typeof r == 'function') return r;
        });
}
function _u(e) {
  var r = e.l;
  return r.u ?? (r.u = { a: [], b: [], m: [] });
}
const gu = '5';
var gf;
typeof window < 'u' &&
  (
    (gf = window.__svelte ?? (window.__svelte = {})).v ?? (gf.v = new Set())
  ).add(gu);
mc();
function Jf(e, r) {
  return function () {
    return e.apply(r, arguments);
  };
}
const { toString: Eu } = Object.prototype,
  { getPrototypeOf: L0 } = Object,
  { iterator: ya, toStringTag: Zf } = Symbol,
  Fa = ((e) => (r) => {
    const t = Eu.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  lr = (e) => ((e = e.toLowerCase()), (r) => Fa(r) === e),
  Ca = (e) => (r) => typeof r === e,
  { isArray: Pn } = Array,
  hi = Ca('undefined');
function Tu(e) {
  return (
    e !== null &&
    !hi(e) &&
    e.constructor !== null &&
    !hi(e.constructor) &&
    Dt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Qf = lr('ArrayBuffer');
function wu(e) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(e))
      : (r = e && e.buffer && Qf(e.buffer)),
    r
  );
}
const Su = Ca('string'),
  Dt = Ca('function'),
  eo = Ca('number'),
  Oa = (e) => e !== null && typeof e == 'object',
  Au = (e) => e === !0 || e === !1,
  Gi = (e) => {
    if (Fa(e) !== 'object') return !1;
    const r = L0(e);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Zf in e) &&
      !(ya in e)
    );
  },
  yu = lr('Date'),
  Fu = lr('File'),
  Cu = lr('Blob'),
  Ou = lr('FileList'),
  Ru = (e) => Oa(e) && Dt(e.pipe),
  Nu = (e) => {
    let r;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Dt(e.append) &&
          ((r = Fa(e)) === 'formdata' ||
            (r === 'object' &&
              Dt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  ku = lr('URLSearchParams'),
  [Du, Iu, Pu, Lu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    lr,
  ),
  Mu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Si(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), Pn(e)))
    for (n = 0, i = e.length; n < i; n++) r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), r.call(null, e[f], f, e);
  }
}
function to(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length,
    i;
  for (; n-- > 0; ) if (((i = t[n]), r === i.toLowerCase())) return i;
  return null;
}
const Zr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ro = (e) => !hi(e) && e !== Zr;
function c0() {
  const { caseless: e } = (ro(this) && this) || {},
    r = {},
    t = (n, i) => {
      const a = (e && to(r, i)) || i;
      Gi(r[a]) && Gi(n)
        ? (r[a] = c0(r[a], n))
        : Gi(n)
          ? (r[a] = c0({}, n))
          : Pn(n)
            ? (r[a] = n.slice())
            : (r[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Si(arguments[n], t);
  return r;
}
const Bu = (e, r, t, { allOwnKeys: n } = {}) => (
    Si(
      r,
      (i, a) => {
        t && Dt(i) ? (e[a] = Jf(i, t)) : (e[a] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  bu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Uu = (e, r, t, n) => {
    (e.prototype = Object.create(r.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: r.prototype }),
      t && Object.assign(e.prototype, t);
  },
  Hu = (e, r, t, n) => {
    let i, a, s;
    const f = {};
    if (((r = r || {}), e == null)) return r;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, e, r)) && !f[s] && ((r[s] = e[s]), (f[s] = !0));
      e = t !== !1 && L0(e);
    } while (e && (!t || t(e, r)) && e !== Object.prototype);
    return r;
  },
  Wu = (e, r, t) => {
    (e = String(e)),
      (t === void 0 || t > e.length) && (t = e.length),
      (t -= r.length);
    const n = e.indexOf(r, t);
    return n !== -1 && n === t;
  },
  Vu = (e) => {
    if (!e) return null;
    if (Pn(e)) return e;
    let r = e.length;
    if (!eo(r)) return null;
    const t = new Array(r);
    for (; r-- > 0; ) t[r] = e[r];
    return t;
  },
  Gu = (
    (e) => (r) =>
      e && r instanceof e
  )(typeof Uint8Array < 'u' && L0(Uint8Array)),
  $u = (e, r) => {
    const n = (e && e[ya]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      r.call(e, a[0], a[1]);
    }
  },
  ju = (e, r) => {
    let t;
    const n = [];
    for (; (t = e.exec(r)) !== null; ) n.push(t);
    return n;
  },
  zu = lr('HTMLFormElement'),
  Xu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, n, i) {
      return n.toUpperCase() + i;
    }),
  _s = (
    ({ hasOwnProperty: e }) =>
    (r, t) =>
      e.call(r, t)
  )(Object.prototype),
  Ku = lr('RegExp'),
  no = (e, r) => {
    const t = Object.getOwnPropertyDescriptors(e),
      n = {};
    Si(t, (i, a) => {
      let s;
      (s = r(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  qu = (e) => {
    no(e, (r, t) => {
      if (Dt(e) && ['arguments', 'caller', 'callee'].indexOf(t) !== -1)
        return !1;
      const n = e[t];
      if (Dt(n)) {
        if (((r.enumerable = !1), 'writable' in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + t + "'");
          });
      }
    });
  },
  Yu = (e, r) => {
    const t = {},
      n = (i) => {
        i.forEach((a) => {
          t[a] = !0;
        });
      };
    return Pn(e) ? n(e) : n(String(e).split(r)), t;
  },
  Ju = () => {},
  Zu = (e, r) => (e != null && Number.isFinite((e = +e)) ? e : r);
function Qu(e) {
  return !!(e && Dt(e.append) && e[Zf] === 'FormData' && e[ya]);
}
const eh = (e) => {
    const r = new Array(10),
      t = (n, i) => {
        if (Oa(n)) {
          if (r.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            r[i] = n;
            const a = Pn(n) ? [] : {};
            return (
              Si(n, (s, f) => {
                const l = t(s, i + 1);
                !hi(l) && (a[f] = l);
              }),
              (r[i] = void 0),
              a
            );
          }
        }
        return n;
      };
    return t(e, 0);
  },
  th = lr('AsyncFunction'),
  rh = (e) => e && (Oa(e) || Dt(e)) && Dt(e.then) && Dt(e.catch),
  io = ((e, r) =>
    e
      ? setImmediate
      : r
        ? ((t, n) => (
            Zr.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Zr && a === t && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Zr.postMessage(t, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (t) => setTimeout(t))(
    typeof setImmediate == 'function',
    Dt(Zr.postMessage),
  ),
  nh =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Zr)
      : (typeof process < 'u' && process.nextTick) || io,
  ih = (e) => e != null && Dt(e[ya]),
  B = {
    isArray: Pn,
    isArrayBuffer: Qf,
    isBuffer: Tu,
    isFormData: Nu,
    isArrayBufferView: wu,
    isString: Su,
    isNumber: eo,
    isBoolean: Au,
    isObject: Oa,
    isPlainObject: Gi,
    isReadableStream: Du,
    isRequest: Iu,
    isResponse: Pu,
    isHeaders: Lu,
    isUndefined: hi,
    isDate: yu,
    isFile: Fu,
    isBlob: Cu,
    isRegExp: Ku,
    isFunction: Dt,
    isStream: Ru,
    isURLSearchParams: ku,
    isTypedArray: Gu,
    isFileList: Ou,
    forEach: Si,
    merge: c0,
    extend: Bu,
    trim: Mu,
    stripBOM: bu,
    inherits: Uu,
    toFlatObject: Hu,
    kindOf: Fa,
    kindOfTest: lr,
    endsWith: Wu,
    toArray: Vu,
    forEachEntry: $u,
    matchAll: ju,
    isHTMLForm: zu,
    hasOwnProperty: _s,
    hasOwnProp: _s,
    reduceDescriptors: no,
    freezeMethods: qu,
    toObjectSet: Yu,
    toCamelCase: Xu,
    noop: Ju,
    toFiniteNumber: Zu,
    findKey: to,
    global: Zr,
    isContextDefined: ro,
    isSpecCompliantForm: Qu,
    toJSONObject: eh,
    isAsyncFn: th,
    isThenable: rh,
    setImmediate: io,
    asap: nh,
    isIterable: ih,
  };
function xe(e, r, t, n, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    r && (this.code = r),
    t && (this.config = t),
    n && (this.request = n),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
B.inherits(xe, Error, {
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
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const ao = xe.prototype,
  so = {};
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
  so[e] = { value: e };
});
Object.defineProperties(xe, so);
Object.defineProperty(ao, 'isAxiosError', { value: !0 });
xe.from = (e, r, t, n, i, a) => {
  const s = Object.create(ao);
  return (
    B.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    xe.call(s, e.message, r, t, n, i),
    (s.cause = e),
    (s.name = e.name),
    a && Object.assign(s, a),
    s
  );
};
const ah = null;
function u0(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function fo(e) {
  return B.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function gs(e, r, t) {
  return e
    ? e
        .concat(r)
        .map(function (i, a) {
          return (i = fo(i)), !t && a ? '[' + i + ']' : i;
        })
        .join(t ? '.' : '')
    : r;
}
function sh(e) {
  return B.isArray(e) && !e.some(u0);
}
const fh = B.toFlatObject(B, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Ra(e, r, t) {
  if (!B.isObject(e)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (t = B.toFlatObject(
      t,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, m) {
        return !B.isUndefined(m[d]);
      },
    ));
  const n = t.metaTokens,
    i = t.visitor || c,
    a = t.dots,
    s = t.indexes,
    l = (t.Blob || (typeof Blob < 'u' && Blob)) && B.isSpecCompliantForm(r);
  if (!B.isFunction(i)) throw new TypeError('visitor must be a function');
  function o(p) {
    if (p === null) return '';
    if (B.isDate(p)) return p.toISOString();
    if (!l && B.isBlob(p))
      throw new xe('Blob is not supported. Use a Buffer instead.');
    return B.isArrayBuffer(p) || B.isTypedArray(p)
      ? l && typeof Blob == 'function'
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, d, m) {
    let y = p;
    if (p && !m && typeof p == 'object') {
      if (B.endsWith(d, '{}'))
        (d = n ? d : d.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (B.isArray(p) && sh(p)) ||
        ((B.isFileList(p) || B.endsWith(d, '[]')) && (y = B.toArray(p)))
      )
        return (
          (d = fo(d)),
          y.forEach(function (A, N) {
            !(B.isUndefined(A) || A === null) &&
              r.append(
                s === !0 ? gs([d], N, a) : s === null ? d : d + '[]',
                o(A),
              );
          }),
          !1
        );
    }
    return u0(p) ? !0 : (r.append(gs(m, d, a), o(p)), !1);
  }
  const h = [],
    u = Object.assign(fh, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: u0,
    });
  function x(p, d) {
    if (!B.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + d.join('.'));
      h.push(p),
        B.forEach(p, function (y, F) {
          (!(B.isUndefined(y) || y === null) &&
            i.call(r, y, B.isString(F) ? F.trim() : F, d, u)) === !0 &&
            x(y, d ? d.concat(F) : [F]);
        }),
        h.pop();
    }
  }
  if (!B.isObject(e)) throw new TypeError('data must be an object');
  return x(e), r;
}
function Es(e) {
  const r = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return r[n];
  });
}
function M0(e, r) {
  (this._pairs = []), e && Ra(e, this, r);
}
const oo = M0.prototype;
oo.append = function (r, t) {
  this._pairs.push([r, t]);
};
oo.toString = function (r) {
  const t = r
    ? function (n) {
        return r.call(this, n, Es);
      }
    : Es;
  return this._pairs
    .map(function (i) {
      return t(i[0]) + '=' + t(i[1]);
    }, '')
    .join('&');
};
function oh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function lo(e, r, t) {
  if (!r) return e;
  const n = (t && t.encode) || oh;
  B.isFunction(t) && (t = { serialize: t });
  const i = t && t.serialize;
  let a;
  if (
    (i
      ? (a = i(r, t))
      : (a = B.isURLSearchParams(r) ? r.toString() : new M0(r, t).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class Ts {
  constructor() {
    this.handlers = [];
  }
  use(r, t, n) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: t,
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
    B.forEach(this.handlers, function (n) {
      n !== null && r(n);
    });
  }
}
const co = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  lh = typeof URLSearchParams < 'u' ? URLSearchParams : M0,
  ch = typeof FormData < 'u' ? FormData : null,
  uh = typeof Blob < 'u' ? Blob : null,
  hh = {
    isBrowser: !0,
    classes: { URLSearchParams: lh, FormData: ch, Blob: uh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  B0 = typeof window < 'u' && typeof document < 'u',
  h0 = (typeof navigator == 'object' && navigator) || void 0,
  dh =
    B0 &&
    (!h0 || ['ReactNative', 'NativeScript', 'NS'].indexOf(h0.product) < 0),
  xh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ph = (B0 && window.location.href) || 'http://localhost',
  vh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: B0,
        hasStandardBrowserEnv: dh,
        hasStandardBrowserWebWorkerEnv: xh,
        navigator: h0,
        origin: ph,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  _t = { ...vh, ...hh };
function mh(e, r) {
  return Ra(
    e,
    new _t.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, n, i, a) {
          return _t.isNode && B.isBuffer(t)
            ? (this.append(n, t.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function _h(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((r) =>
    r[0] === '[]' ? '' : r[1] || r[0],
  );
}
function gh(e) {
  const r = {},
    t = Object.keys(e);
  let n;
  const i = t.length;
  let a;
  for (n = 0; n < i; n++) (a = t[n]), (r[a] = e[a]);
  return r;
}
function uo(e) {
  function r(t, n, i, a) {
    let s = t[a++];
    if (s === '__proto__') return !0;
    const f = Number.isFinite(+s),
      l = a >= t.length;
    return (
      (s = !s && B.isArray(i) ? i.length : s),
      l
        ? (B.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !f)
        : ((!i[s] || !B.isObject(i[s])) && (i[s] = []),
          r(t, n, i[s], a) && B.isArray(i[s]) && (i[s] = gh(i[s])),
          !f)
    );
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const t = {};
    return (
      B.forEachEntry(e, (n, i) => {
        r(_h(n), i, t, 0);
      }),
      t
    );
  }
  return null;
}
function Eh(e, r, t) {
  if (B.isString(e))
    try {
      return (r || JSON.parse)(e), B.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (t || JSON.stringify)(e);
}
const Ai = {
  transitional: co,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, t) {
      const n = t.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = B.isObject(r);
      if ((a && B.isHTMLForm(r) && (r = new FormData(r)), B.isFormData(r)))
        return i ? JSON.stringify(uo(r)) : r;
      if (
        B.isArrayBuffer(r) ||
        B.isBuffer(r) ||
        B.isStream(r) ||
        B.isFile(r) ||
        B.isBlob(r) ||
        B.isReadableStream(r)
      )
        return r;
      if (B.isArrayBufferView(r)) return r.buffer;
      if (B.isURLSearchParams(r))
        return (
          t.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          r.toString()
        );
      let f;
      if (a) {
        if (n.indexOf('application/x-www-form-urlencoded') > -1)
          return mh(r, this.formSerializer).toString();
        if ((f = B.isFileList(r)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return Ra(
            f ? { 'files[]': r } : r,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (t.setContentType('application/json', !1), Eh(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const t = this.transitional || Ai.transitional,
        n = t && t.forcedJSONParsing,
        i = this.responseType === 'json';
      if (B.isResponse(r) || B.isReadableStream(r)) return r;
      if (r && B.isString(r) && ((n && !this.responseType) || i)) {
        const s = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(r);
        } catch (f) {
          if (s)
            throw f.name === 'SyntaxError'
              ? xe.from(f, xe.ERR_BAD_RESPONSE, this, null, this.response)
              : f;
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
  env: { FormData: _t.classes.FormData, Blob: _t.classes.Blob },
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
B.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Ai.headers[e] = {};
});
const Th = B.toObjectSet([
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
  wh = (e) => {
    const r = {};
    let t, n, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (i = s.indexOf(':')),
              (t = s.substring(0, i).trim().toLowerCase()),
              (n = s.substring(i + 1).trim()),
              !(!t || (r[t] && Th[t])) &&
                (t === 'set-cookie'
                  ? r[t]
                    ? r[t].push(n)
                    : (r[t] = [n])
                  : (r[t] = r[t] ? r[t] + ', ' + n : n));
          }),
      r
    );
  },
  ws = Symbol('internals');
function Yn(e) {
  return e && String(e).trim().toLowerCase();
}
function $i(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map($i) : String(e);
}
function Sh(e) {
  const r = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = t.exec(e)); ) r[n[1]] = n[2];
  return r;
}
const Ah = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ja(e, r, t, n, i) {
  if (B.isFunction(n)) return n.call(this, r, t);
  if ((i && (r = t), !!B.isString(r))) {
    if (B.isString(n)) return r.indexOf(n) !== -1;
    if (B.isRegExp(n)) return n.test(r);
  }
}
function yh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Fh(e, r) {
  const t = B.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function (i, a, s) {
        return this[n].call(this, r, i, a, s);
      },
      configurable: !0,
    });
  });
}
let It = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const i = this;
    function a(f, l, o) {
      const c = Yn(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = B.findKey(i, c);
      (!h || i[h] === void 0 || o === !0 || (o === void 0 && i[h] !== !1)) &&
        (i[h || l] = $i(f));
    }
    const s = (f, l) => B.forEach(f, (o, c) => a(o, c, l));
    if (B.isPlainObject(r) || r instanceof this.constructor) s(r, t);
    else if (B.isString(r) && (r = r.trim()) && !Ah(r)) s(wh(r), t);
    else if (B.isObject(r) && B.isIterable(r)) {
      let f = {},
        l,
        o;
      for (const c of r) {
        if (!B.isArray(c))
          throw TypeError('Object iterator must return a key-value pair');
        f[(o = c[0])] = (l = f[o])
          ? B.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(f, t);
    } else r != null && a(t, r, n);
    return this;
  }
  get(r, t) {
    if (((r = Yn(r)), r)) {
      const n = B.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t) return i;
        if (t === !0) return Sh(i);
        if (B.isFunction(t)) return t.call(this, i, n);
        if (B.isRegExp(t)) return t.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, t) {
    if (((r = Yn(r)), r)) {
      const n = B.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || ja(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = Yn(s)), s)) {
        const f = B.findKey(n, s);
        f && (!t || ja(n, n[f], f, t)) && (delete n[f], (i = !0));
      }
    }
    return B.isArray(r) ? r.forEach(a) : a(r), i;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length,
      i = !1;
    for (; n--; ) {
      const a = t[n];
      (!r || ja(this, this[a], a, r, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(r) {
    const t = this,
      n = {};
    return (
      B.forEach(this, (i, a) => {
        const s = B.findKey(n, a);
        if (s) {
          (t[s] = $i(i)), delete t[a];
          return;
        }
        const f = r ? yh(a) : String(a).trim();
        f !== a && delete t[a], (t[f] = $i(i)), (n[f] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = Object.create(null);
    return (
      B.forEach(this, (n, i) => {
        n != null && n !== !1 && (t[i] = r && B.isArray(n) ? n.join(', ') : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ': ' + t).join(`
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
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((i) => n.set(i)), n;
  }
  static accessor(r) {
    const n = (this[ws] = this[ws] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = Yn(s);
      n[f] || (Fh(i, s), (n[f] = !0));
    }
    return B.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
It.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
B.reduceDescriptors(It.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    },
  };
});
B.freezeMethods(It);
function za(e, r) {
  const t = this || Ai,
    n = r || t,
    i = It.from(n.headers);
  let a = n.data;
  return (
    B.forEach(e, function (f) {
      a = f.call(t, a, i.normalize(), r ? r.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function ho(e) {
  return !!(e && e.__CANCEL__);
}
function Ln(e, r, t) {
  xe.call(this, e ?? 'canceled', xe.ERR_CANCELED, r, t),
    (this.name = 'CanceledError');
}
B.inherits(Ln, xe, { __CANCEL__: !0 });
function xo(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status)
    ? e(t)
    : r(
        new xe(
          'Request failed with status code ' + t.status,
          [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][
            Math.floor(t.status / 100) - 4
          ],
          t.config,
          t.request,
          t,
        ),
      );
}
function Ch(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (r && r[1]) || '';
}
function Oh(e, r) {
  e = e || 10;
  const t = new Array(e),
    n = new Array(e);
  let i = 0,
    a = 0,
    s;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (l) {
      const o = Date.now(),
        c = n[a];
      s || (s = o), (t[i] = l), (n[i] = o);
      let h = a,
        u = 0;
      for (; h !== i; ) (u += t[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), o - s < r)) return;
      const x = c && o - c;
      return x ? Math.round((u * 1e3) / x) : void 0;
    }
  );
}
function Rh(e, r) {
  let t = 0,
    n = 1e3 / r,
    i,
    a;
  const s = (o, c = Date.now()) => {
    (t = c), (i = null), a && (clearTimeout(a), (a = null)), e.apply(null, o);
  };
  return [
    (...o) => {
      const c = Date.now(),
        h = c - t;
      h >= n
        ? s(o, c)
        : ((i = o),
          a ||
            (a = setTimeout(() => {
              (a = null), s(i);
            }, n - h)));
    },
    () => i && s(i),
  ];
}
const ra = (e, r, t = 3) => {
    let n = 0;
    const i = Oh(50, 250);
    return Rh((a) => {
      const s = a.loaded,
        f = a.lengthComputable ? a.total : void 0,
        l = s - n,
        o = i(l),
        c = s <= f;
      n = s;
      const h = {
        loaded: s,
        total: f,
        progress: f ? s / f : void 0,
        bytes: l,
        rate: o || void 0,
        estimated: o && f && c ? (f - s) / o : void 0,
        event: a,
        lengthComputable: f != null,
        [r ? 'download' : 'upload']: !0,
      };
      e(h);
    }, t);
  },
  Ss = (e, r) => {
    const t = e != null;
    return [(n) => r[0]({ lengthComputable: t, total: e, loaded: n }), r[1]];
  },
  As =
    (e) =>
    (...r) =>
      B.asap(() => e(...r)),
  Nh = _t.hasStandardBrowserEnv
    ? ((e, r) => (t) => (
        (t = new URL(t, _t.origin)),
        e.protocol === t.protocol &&
          e.host === t.host &&
          (r || e.port === t.port)
      ))(
        new URL(_t.origin),
        _t.navigator && /(msie|trident)/i.test(_t.navigator.userAgent),
      )
    : () => !0,
  kh = _t.hasStandardBrowserEnv
    ? {
        write(e, r, t, n, i, a) {
          const s = [e + '=' + encodeURIComponent(r)];
          B.isNumber(t) && s.push('expires=' + new Date(t).toGMTString()),
            B.isString(n) && s.push('path=' + n),
            B.isString(i) && s.push('domain=' + i),
            a === !0 && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read(e) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
          );
          return r ? decodeURIComponent(r[3]) : null;
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
function Dh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ih(e, r) {
  return r ? e.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : e;
}
function po(e, r, t) {
  let n = !Dh(r);
  return e && (n || t == !1) ? Ih(e, r) : r;
}
const ys = (e) => (e instanceof It ? { ...e } : e);
function rn(e, r) {
  r = r || {};
  const t = {};
  function n(o, c, h, u) {
    return B.isPlainObject(o) && B.isPlainObject(c)
      ? B.merge.call({ caseless: u }, o, c)
      : B.isPlainObject(c)
        ? B.merge({}, c)
        : B.isArray(c)
          ? c.slice()
          : c;
  }
  function i(o, c, h, u) {
    if (B.isUndefined(c)) {
      if (!B.isUndefined(o)) return n(void 0, o, h, u);
    } else return n(o, c, h, u);
  }
  function a(o, c) {
    if (!B.isUndefined(c)) return n(void 0, c);
  }
  function s(o, c) {
    if (B.isUndefined(c)) {
      if (!B.isUndefined(o)) return n(void 0, o);
    } else return n(void 0, c);
  }
  function f(o, c, h) {
    if (h in r) return n(o, c);
    if (h in e) return n(void 0, o);
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
    headers: (o, c, h) => i(ys(o), ys(c), h, !0),
  };
  return (
    B.forEach(Object.keys(Object.assign({}, e, r)), function (c) {
      const h = l[c] || i,
        u = h(e[c], r[c], c);
      (B.isUndefined(u) && h !== f) || (t[c] = u);
    }),
    t
  );
}
const vo = (e) => {
    const r = rn({}, e);
    let {
      data: t,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = r;
    (r.headers = s = It.from(s)),
      (r.url = lo(
        po(r.baseURL, r.url, r.allowAbsoluteUrls),
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
    if (B.isFormData(t)) {
      if (_t.hasStandardBrowserEnv || _t.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [o, ...c] = l
          ? l
              .split(';')
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        s.setContentType([o || 'multipart/form-data', ...c].join('; '));
      }
    }
    if (
      _t.hasStandardBrowserEnv &&
      (n && B.isFunction(n) && (n = n(r)), n || (n !== !1 && Nh(r.url)))
    ) {
      const o = i && a && kh.read(a);
      o && s.set(i, o);
    }
    return r;
  },
  Ph = typeof XMLHttpRequest < 'u',
  Lh =
    Ph &&
    function (e) {
      return new Promise(function (t, n) {
        const i = vo(e);
        let a = i.data;
        const s = It.from(i.headers).normalize();
        let { responseType: f, onUploadProgress: l, onDownloadProgress: o } = i,
          c,
          h,
          u,
          x,
          p;
        function d() {
          x && x(),
            p && p(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener('abort', c);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function y() {
          if (!m) return;
          const A = It.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            W = {
              data:
                !f || f === 'text' || f === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: A,
              config: e,
              request: m,
            };
          xo(
            function (O) {
              t(O), d();
            },
            function (O) {
              n(O), d();
            },
            W,
          ),
            (m = null);
        }
        'onloadend' in m
          ? (m.onloadend = y)
          : (m.onreadystatechange = function () {
              !m ||
                m.readyState !== 4 ||
                (m.status === 0 &&
                  !(m.responseURL && m.responseURL.indexOf('file:') === 0)) ||
                setTimeout(y);
            }),
          (m.onabort = function () {
            m &&
              (n(new xe('Request aborted', xe.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new xe('Network Error', xe.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let N = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const W = i.transitional || co;
            i.timeoutErrorMessage && (N = i.timeoutErrorMessage),
              n(
                new xe(
                  N,
                  W.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            B.forEach(s.toJSON(), function (N, W) {
              m.setRequestHeader(W, N);
            }),
          B.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([u, p] = ra(o, !0)), m.addEventListener('progress', u)),
          l &&
            m.upload &&
            (([h, x] = ra(l)),
            m.upload.addEventListener('progress', h),
            m.upload.addEventListener('loadend', x)),
          (i.cancelToken || i.signal) &&
            ((c = (A) => {
              m &&
                (n(!A || A.type ? new Ln(null, e, m) : A),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const F = Ch(i.url);
        if (F && _t.protocols.indexOf(F) === -1) {
          n(new xe('Unsupported protocol ' + F + ':', xe.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  Mh = (e, r) => {
    const { length: t } = (e = e ? e.filter(Boolean) : []);
    if (r || t) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof xe ? c : new Ln(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        r &&
        setTimeout(() => {
          (s = null), a(new xe(`timeout ${r} of ms exceeded`, xe.ETIMEDOUT));
        }, r);
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
      return (l.unsubscribe = () => B.asap(f)), l;
    }
  },
  Bh = function* (e, r) {
    let t = e.byteLength;
    if (t < r) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < t; ) (i = n + r), yield e.slice(n, i), (n = i);
  },
  bh = async function* (e, r) {
    for await (const t of Uh(e)) yield* Bh(t, r);
  },
  Uh = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const r = e.getReader();
    try {
      for (;;) {
        const { done: t, value: n } = await r.read();
        if (t) break;
        yield n;
      }
    } finally {
      await r.cancel();
    }
  },
  Fs = (e, r, t, n) => {
    const i = bh(e, r);
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
            let h = c.byteLength;
            if (t) {
              let u = (a += h);
              t(u);
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
  Na =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  mo = Na && typeof ReadableStream == 'function',
  Hh =
    Na &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (r) =>
            e.encode(r)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  _o = (e, ...r) => {
    try {
      return !!e(...r);
    } catch {
      return !1;
    }
  },
  Wh =
    mo &&
    _o(() => {
      let e = !1;
      const r = new Request(_t.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !r;
    }),
  Cs = 64 * 1024,
  d0 = mo && _o(() => B.isReadableStream(new Response('').body)),
  na = { stream: d0 && ((e) => e.body) };
Na &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !na[r] &&
        (na[r] = B.isFunction(e[r])
          ? (t) => t[r]()
          : (t, n) => {
              throw new xe(
                `Response type '${r}' is not supported`,
                xe.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const Vh = async (e) => {
    if (e == null) return 0;
    if (B.isBlob(e)) return e.size;
    if (B.isSpecCompliantForm(e))
      return (
        await new Request(_t.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (B.isArrayBufferView(e) || B.isArrayBuffer(e)) return e.byteLength;
    if ((B.isURLSearchParams(e) && (e = e + ''), B.isString(e)))
      return (await Hh(e)).byteLength;
  },
  Gh = async (e, r) => {
    const t = B.toFiniteNumber(e.getContentLength());
    return t ?? Vh(r);
  },
  $h =
    Na &&
    (async (e) => {
      let {
        url: r,
        method: t,
        data: n,
        signal: i,
        cancelToken: a,
        timeout: s,
        onDownloadProgress: f,
        onUploadProgress: l,
        responseType: o,
        headers: c,
        withCredentials: h = 'same-origin',
        fetchOptions: u,
      } = vo(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let x = Mh([i, a && a.toAbortSignal()], s),
        p;
      const d =
        x &&
        x.unsubscribe &&
        (() => {
          x.unsubscribe();
        });
      let m;
      try {
        if (
          l &&
          Wh &&
          t !== 'get' &&
          t !== 'head' &&
          (m = await Gh(c, n)) !== 0
        ) {
          let W = new Request(r, { method: 'POST', body: n, duplex: 'half' }),
            q;
          if (
            (B.isFormData(n) &&
              (q = W.headers.get('content-type')) &&
              c.setContentType(q),
            W.body)
          ) {
            const [O, b] = Ss(m, ra(As(l)));
            n = Fs(W.body, Cs, O, b);
          }
        }
        B.isString(h) || (h = h ? 'include' : 'omit');
        const y = 'credentials' in Request.prototype;
        p = new Request(r, {
          ...u,
          signal: x,
          method: t.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: y ? h : void 0,
        });
        let F = await fetch(p);
        const A = d0 && (o === 'stream' || o === 'response');
        if (d0 && (f || (A && d))) {
          const W = {};
          ['status', 'statusText', 'headers'].forEach((P) => {
            W[P] = F[P];
          });
          const q = B.toFiniteNumber(F.headers.get('content-length')),
            [O, b] = (f && Ss(q, ra(As(f), !0))) || [];
          F = new Response(
            Fs(F.body, Cs, O, () => {
              b && b(), d && d();
            }),
            W,
          );
        }
        o = o || 'text';
        let N = await na[B.findKey(na, o) || 'text'](F, e);
        return (
          !A && d && d(),
          await new Promise((W, q) => {
            xo(W, q, {
              data: N,
              headers: It.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (y) {
        throw (
          (d && d(),
          y && y.name === 'TypeError' && /Load failed|fetch/i.test(y.message)
            ? Object.assign(new xe('Network Error', xe.ERR_NETWORK, e, p), {
                cause: y.cause || y,
              })
            : xe.from(y, y && y.code, e, p))
        );
      }
    }),
  x0 = { http: ah, xhr: Lh, fetch: $h };
B.forEach(x0, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: r });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: r });
  }
});
const Os = (e) => `- ${e}`,
  jh = (e) => B.isFunction(e) || e === null || e === !1,
  go = {
    getAdapter: (e) => {
      e = B.isArray(e) ? e : [e];
      const { length: r } = e;
      let t, n;
      const i = {};
      for (let a = 0; a < r; a++) {
        t = e[a];
        let s;
        if (
          ((n = t),
          !jh(t) && ((n = x0[(s = String(t)).toLowerCase()]), n === void 0))
        )
          throw new xe(`Unknown adapter '${s}'`);
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
        let s = r
          ? a.length > 1
            ? `since :
` +
              a.map(Os).join(`
`)
            : ' ' + Os(a[0])
          : 'as no adapter specified';
        throw new xe(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: x0,
  };
function Xa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ln(null, e);
}
function Rs(e) {
  return (
    Xa(e),
    (e.headers = It.from(e.headers)),
    (e.data = za.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    go
      .getAdapter(e.adapter || Ai.adapter)(e)
      .then(
        function (n) {
          return (
            Xa(e),
            (n.data = za.call(e, e.transformResponse, n)),
            (n.headers = It.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            ho(n) ||
              (Xa(e),
              n &&
                n.response &&
                ((n.response.data = za.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = It.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Eo = '1.9.0',
  ka = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, r) => {
    ka[e] = function (n) {
      return typeof n === e || 'a' + (r < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Ns = {};
ka.transitional = function (r, t, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      Eo +
      "] Transitional option '" +
      a +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (a, s, f) => {
    if (r === !1)
      throw new xe(
        i(s, ' has been removed' + (t ? ' in ' + t : '')),
        xe.ERR_DEPRECATED,
      );
    return (
      t &&
        !Ns[s] &&
        ((Ns[s] = !0),
        console.warn(
          i(
            s,
            ' has been deprecated since v' +
              t +
              ' and will be removed in the near future',
          ),
        )),
      r ? r(a, s, f) : !0
    );
  };
};
ka.spelling = function (r) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function zh(e, r, t) {
  if (typeof e != 'object')
    throw new xe('options must be an object', xe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = r[a];
    if (s) {
      const f = e[a],
        l = f === void 0 || s(f, a, e);
      if (l !== !0)
        throw new xe('option ' + a + ' must be ' + l, xe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new xe('Unknown option ' + a, xe.ERR_BAD_OPTION);
  }
}
const ji = { assertOptions: zh, validators: ka },
  hr = ji.validators;
let en = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new Ts(), response: new Ts() });
  }
  async request(r, t) {
    try {
      return await this._request(r, t);
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
  _request(r, t) {
    typeof r == 'string' ? ((t = t || {}), (t.url = r)) : (t = r || {}),
      (t = rn(this.defaults, t));
    const { transitional: n, paramsSerializer: i, headers: a } = t;
    n !== void 0 &&
      ji.assertOptions(
        n,
        {
          silentJSONParsing: hr.transitional(hr.boolean),
          forcedJSONParsing: hr.transitional(hr.boolean),
          clarifyTimeoutError: hr.transitional(hr.boolean),
        },
        !1,
      ),
      i != null &&
        (B.isFunction(i)
          ? (t.paramsSerializer = { serialize: i })
          : ji.assertOptions(
              i,
              { encode: hr.function, serialize: hr.function },
              !0,
            )),
      t.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (t.allowAbsoluteUrls = !0)),
      ji.assertOptions(
        t,
        {
          baseUrl: hr.spelling('baseURL'),
          withXsrfToken: hr.spelling('withXSRFToken'),
        },
        !0,
      ),
      (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
    let s = a && B.merge(a.common, a[t.method]);
    a &&
      B.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete a[p];
        },
      ),
      (t.headers = It.concat(s, a));
    const f = [];
    let l = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == 'function' && d.runWhen(t) === !1) ||
        ((l = l && d.synchronous), f.unshift(d.fulfilled, d.rejected));
    });
    const o = [];
    this.interceptors.response.forEach(function (d) {
      o.push(d.fulfilled, d.rejected);
    });
    let c,
      h = 0,
      u;
    if (!l) {
      const p = [Rs.bind(this), void 0];
      for (
        p.unshift.apply(p, f),
          p.push.apply(p, o),
          u = p.length,
          c = Promise.resolve(t);
        h < u;

      )
        c = c.then(p[h++], p[h++]);
      return c;
    }
    u = f.length;
    let x = t;
    for (h = 0; h < u; ) {
      const p = f[h++],
        d = f[h++];
      try {
        x = p(x);
      } catch (m) {
        d.call(this, m);
        break;
      }
    }
    try {
      c = Rs.call(this, x);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, u = o.length; h < u; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(r) {
    r = rn(this.defaults, r);
    const t = po(r.baseURL, r.url, r.allowAbsoluteUrls);
    return lo(t, r.params, r.paramsSerializer);
  }
};
B.forEach(['delete', 'get', 'head', 'options'], function (r) {
  en.prototype[r] = function (t, n) {
    return this.request(
      rn(n || {}, { method: r, url: t, data: (n || {}).data }),
    );
  };
});
B.forEach(['post', 'put', 'patch'], function (r) {
  function t(n) {
    return function (a, s, f) {
      return this.request(
        rn(f || {}, {
          method: r,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (en.prototype[r] = t()), (en.prototype[r + 'Form'] = t(!0));
});
let Xh = class To {
  constructor(r) {
    if (typeof r != 'function')
      throw new TypeError('executor must be a function.');
    let t;
    this.promise = new Promise(function (a) {
      t = a;
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
      r(function (a, s, f) {
        n.reason || ((n.reason = new Ln(a, s, f)), t(n.reason));
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
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      t = (n) => {
        r.abort(n);
      };
    return (
      this.subscribe(t),
      (r.signal.unsubscribe = () => this.unsubscribe(t)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new To(function (i) {
        r = i;
      }),
      cancel: r,
    };
  }
};
function Kh(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function qh(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const p0 = {
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
Object.entries(p0).forEach(([e, r]) => {
  p0[r] = e;
});
function wo(e) {
  const r = new en(e),
    t = Jf(en.prototype.request, r);
  return (
    B.extend(t, en.prototype, r, { allOwnKeys: !0 }),
    B.extend(t, r, null, { allOwnKeys: !0 }),
    (t.create = function (i) {
      return wo(rn(e, i));
    }),
    t
  );
}
const Ye = wo(Ai);
Ye.Axios = en;
Ye.CanceledError = Ln;
Ye.CancelToken = Xh;
Ye.isCancel = ho;
Ye.VERSION = Eo;
Ye.toFormData = Ra;
Ye.AxiosError = xe;
Ye.Cancel = Ye.CanceledError;
Ye.all = function (r) {
  return Promise.all(r);
};
Ye.spread = Kh;
Ye.isAxiosError = qh;
Ye.mergeConfig = rn;
Ye.AxiosHeaders = It;
Ye.formToJSON = (e) => uo(B.isHTMLForm(e) ? new FormData(e) : e);
Ye.getAdapter = go.getAdapter;
Ye.HttpStatusCode = p0;
Ye.default = Ye;
const {
  Axios: ag,
  AxiosError: sg,
  CanceledError: fg,
  isCancel: og,
  CancelToken: lg,
  VERSION: cg,
  all: ug,
  Cancel: hg,
  isAxiosError: dg,
  spread: xg,
  toFormData: pg,
  AxiosHeaders: vg,
  HttpStatusCode: mg,
  formToJSON: _g,
  getAdapter: gg,
  mergeConfig: Eg,
} = Ye;
var Yh = Tt(
  '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/master/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
);
function Jh(e, r) {
  F0(r, !0);
  let t = Ar('');
  Yf(() => {
    pr(t, window.location.pathname, !0), console.log('currentPath:', re(t));
  });
  function n(b) {
    return b === '/' ? re(t) === '/' : re(t).startsWith(b);
  }
  var i = Yh(),
    a = Ae(de(i), 2),
    s = de(a),
    f = de(s);
  let l;
  var o = Ae(s, 2),
    c = de(o);
  let h;
  var u = Ae(o, 2),
    x = de(u);
  let p;
  var d = Ae(u, 2),
    m = de(d);
  let y;
  var F = Ae(d, 2),
    A = de(F);
  let N;
  var W = Ae(F, 2),
    q = de(W);
  let O;
  nr(
    (b, P, V, G, X, ee) => {
      (l = Yr(f, 1, 'svelte-1t3skh', null, l, b)),
        (h = Yr(c, 1, 'svelte-1t3skh', null, h, P)),
        (p = Yr(x, 1, 'svelte-1t3skh', null, p, V)),
        (y = Yr(m, 1, 'svelte-1t3skh', null, y, G)),
        (N = Yr(A, 1, 'svelte-1t3skh', null, N, X)),
        (O = Yr(q, 1, 'svelte-1t3skh', null, O, ee));
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
    ft(e, i),
    C0();
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var ia = {};
ia.version = '0.18.5';
var So = 1252,
  Zh = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  Ao = function (e) {
    Zh.indexOf(e) != -1 && (So = e);
  };
function Qh() {
  Ao(1252);
}
var di = function (e) {
  Ao(e);
};
function e1() {
  di(1200), Qh();
}
var Ii = function (r) {
    return String.fromCharCode(r);
  },
  ks = function (r) {
    return String.fromCharCode(r);
  },
  Ds,
  Br = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function xi(e) {
  for (
    var r = '', t = 0, n = 0, i = 0, a = 0, s = 0, f = 0, l = 0, o = 0;
    o < e.length;

  )
    (t = e.charCodeAt(o++)),
      (a = t >> 2),
      (n = e.charCodeAt(o++)),
      (s = ((t & 3) << 4) | (n >> 4)),
      (i = e.charCodeAt(o++)),
      (f = ((n & 15) << 2) | (i >> 6)),
      (l = i & 63),
      isNaN(n) ? (f = l = 64) : isNaN(i) && (l = 64),
      (r += Br.charAt(a) + Br.charAt(s) + Br.charAt(f) + Br.charAt(l));
  return r;
}
function Rr(e) {
  var r = '',
    t = 0,
    n = 0,
    i = 0,
    a = 0,
    s = 0,
    f = 0,
    l = 0;
  e = e.replace(/[^\w\+\/\=]/g, '');
  for (var o = 0; o < e.length; )
    (a = Br.indexOf(e.charAt(o++))),
      (s = Br.indexOf(e.charAt(o++))),
      (t = (a << 2) | (s >> 4)),
      (r += String.fromCharCode(t)),
      (f = Br.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (r += String.fromCharCode(n)),
      (l = Br.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (r += String.fromCharCode(i));
  return r;
}
var ye = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  Dr = (function () {
    if (typeof Buffer < 'u') {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from('foo', 'utf8');
        } catch {
          e = !0;
        }
      return e
        ? function (r, t) {
            return t ? new Buffer(r, t) : new Buffer(r);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function nn(e) {
  return ye
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function Is(e) {
  return ye
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var ir = function (r) {
  return ye
    ? Dr(r, 'binary')
    : r.split('').map(function (t) {
        return t.charCodeAt(0) & 255;
      });
};
function Da(e) {
  if (typeof ArrayBuffer > 'u') return ir(e);
  for (
    var r = new ArrayBuffer(e.length), t = new Uint8Array(r), n = 0;
    n != e.length;
    ++n
  )
    t[n] = e.charCodeAt(n) & 255;
  return r;
}
function yi(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join('');
}
function t1(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(e);
}
var ct = ye
  ? function (e) {
      return Buffer.concat(
        e.map(function (r) {
          return Buffer.isBuffer(r) ? r : Dr(r);
        }),
      );
    }
  : function (e) {
      if (typeof Uint8Array < 'u') {
        var r = 0,
          t = 0;
        for (r = 0; r < e.length; ++r) t += e[r].length;
        var n = new Uint8Array(t),
          i = 0;
        for (r = 0, t = 0; r < e.length; t += i, ++r)
          if (((i = e[r].length), e[r] instanceof Uint8Array)) n.set(e[r], t);
          else {
            if (typeof e[r] == 'string') throw 'wtf';
            n.set(new Uint8Array(e[r]), t);
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
function r1(e) {
  for (
    var r = [], t = 0, n = e.length + 250, i = nn(e.length + 255), a = 0;
    a < e.length;
    ++a
  ) {
    var s = e.charCodeAt(a);
    if (s < 128) i[t++] = s;
    else if (s < 2048)
      (i[t++] = 192 | ((s >> 6) & 31)), (i[t++] = 128 | (s & 63));
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++a) & 1023;
      (i[t++] = 240 | ((s >> 8) & 7)),
        (i[t++] = 128 | ((s >> 2) & 63)),
        (i[t++] = 128 | ((f >> 6) & 15) | ((s & 3) << 4)),
        (i[t++] = 128 | (f & 63));
    } else
      (i[t++] = 224 | ((s >> 12) & 15)),
        (i[t++] = 128 | ((s >> 6) & 63)),
        (i[t++] = 128 | (s & 63));
    t > n && (r.push(i.slice(0, t)), (t = 0), (i = nn(65535)), (n = 65530));
  }
  return r.push(i.slice(0, t)), ct(r);
}
var ni = /\u0000/g,
  Pi = /[\u0001-\u0006]/g;
function Fn(e) {
  for (var r = '', t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function ar(e, r) {
  var t = '' + e;
  return t.length >= r ? t : Ke('0', r - t.length) + t;
}
function b0(e, r) {
  var t = '' + e;
  return t.length >= r ? t : Ke(' ', r - t.length) + t;
}
function aa(e, r) {
  var t = '' + e;
  return t.length >= r ? t : t + Ke(' ', r - t.length);
}
function n1(e, r) {
  var t = '' + Math.round(e);
  return t.length >= r ? t : Ke('0', r - t.length) + t;
}
function i1(e, r) {
  var t = '' + e;
  return t.length >= r ? t : Ke('0', r - t.length) + t;
}
var Ps = Math.pow(2, 32);
function En(e, r) {
  if (e > Ps || e < -Ps) return n1(e, r);
  var t = Math.round(e);
  return i1(t, r);
}
function sa(e, r) {
  return (
    (r = r || 0),
    e.length >= 7 + r &&
      (e.charCodeAt(r) | 32) === 103 &&
      (e.charCodeAt(r + 1) | 32) === 101 &&
      (e.charCodeAt(r + 2) | 32) === 110 &&
      (e.charCodeAt(r + 3) | 32) === 101 &&
      (e.charCodeAt(r + 4) | 32) === 114 &&
      (e.charCodeAt(r + 5) | 32) === 97 &&
      (e.charCodeAt(r + 6) | 32) === 108
  );
}
var Ls = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Ka = [
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
function a1(e) {
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
var qe = {
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
  Ms = {
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
  s1 = {
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
function fa(e, r, t) {
  for (
    var n = e < 0 ? -1 : 1,
      i = e * n,
      a = 0,
      s = 1,
      f = 0,
      l = 1,
      o = 0,
      c = 0,
      h = Math.floor(i);
    o < r &&
    ((h = Math.floor(i)), (f = h * s + a), (c = h * o + l), !(i - h < 5e-8));

  )
    (i = 1 / (i - h)), (a = s), (s = f), (l = o), (o = c);
  if ((c > r && (o > r ? ((c = l), (f = a)) : ((c = o), (f = s))), !t))
    return [0, n * f, c];
  var u = Math.floor((n * f) / c);
  return [u, n * f - u * c, c];
}
function Li(e, r, t) {
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
    r && r.date1904 && (n += 1462),
    f.u > 0.9999 && ((f.u = 0), ++i == 86400 && ((f.T = i = 0), ++n, ++f.D)),
    n === 60)
  )
    (s = t ? [1317, 10, 29] : [1900, 2, 29]), (a = 3);
  else if (n === 0) (s = t ? [1317, 8, 29] : [1900, 1, 0]), (a = 6);
  else {
    n > 60 && --n;
    var l = new Date(1900, 0, 1);
    l.setDate(l.getDate() + n - 1),
      (s = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (a = l.getDay()),
      n < 60 && (a = (a + 6) % 7),
      t && (a = d1(l, s));
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
var yo = new Date(1899, 11, 31, 0, 0, 0),
  f1 = yo.getTime(),
  o1 = new Date(1900, 2, 1, 0, 0, 0);
function Fo(e, r) {
  var t = e.getTime();
  return (
    r ? (t -= 1461 * 24 * 60 * 60 * 1e3) : e >= o1 && (t += 24 * 60 * 60 * 1e3),
    (t - (f1 + (e.getTimezoneOffset() - yo.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function U0(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function l1(e) {
  return e.indexOf('E') == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function c1(e) {
  var r = e < 0 ? 12 : 11,
    t = U0(e.toFixed(12));
  return t.length <= r || ((t = e.toPrecision(10)), t.length <= r)
    ? t
    : e.toExponential(5);
}
function u1(e) {
  var r = U0(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === '0' || r === '-0'
    ? e.toPrecision(6)
    : r;
}
function h1(e) {
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    t;
  return (
    r >= -4 && r <= -1
      ? (t = e.toPrecision(10 + r))
      : Math.abs(r) <= 9
        ? (t = c1(e))
        : r === 10
          ? (t = e.toFixed(10).substr(0, 12))
          : (t = u1(e)),
    U0(l1(t.toUpperCase()))
  );
}
function v0(e, r) {
  switch (typeof e) {
    case 'string':
      return e;
    case 'boolean':
      return e ? 'TRUE' : 'FALSE';
    case 'number':
      return (e | 0) === e ? e.toString(10) : h1(e);
    case 'undefined':
      return '';
    case 'object':
      if (e == null) return '';
      if (e instanceof Date) return Vr(14, Fo(e, r && r.date1904), r);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function d1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function x1(e, r, t, n) {
  var i = '',
    a = 0,
    s = 0,
    f = t.y,
    l,
    o = 0;
  switch (e) {
    case 98:
      f = t.y + 543;
    case 121:
      switch (r.length) {
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
      switch (r.length) {
        case 1:
        case 2:
          (l = t.m), (o = r.length);
          break;
        case 3:
          return Ka[t.m - 1][1];
        case 5:
          return Ka[t.m - 1][0];
        default:
          return Ka[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (l = t.d), (o = r.length);
          break;
        case 3:
          return Ls[t.q][0];
        default:
          return Ls[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          (l = 1 + ((t.H + 11) % 12)), (o = r.length);
          break;
        default:
          throw 'bad hour format: ' + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          (l = t.H), (o = r.length);
          break;
        default:
          throw 'bad hour format: ' + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          (l = t.M), (o = r.length);
          break;
        default:
          throw 'bad minute format: ' + r;
      }
      break;
    case 115:
      if (r != 's' && r != 'ss' && r != '.0' && r != '.00' && r != '.000')
        throw 'bad second format: ' + r;
      return t.u === 0 && (r == 's' || r == 'ss')
        ? ar(t.S, r.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (t.S + t.u))),
          a >= 60 * s && (a = 0),
          r === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = ar(a, 2 + n)),
              r === 'ss' ? i.substr(0, 2) : '.' + i.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case '[h]':
        case '[hh]':
          l = t.D * 24 + t.H;
          break;
        case '[m]':
        case '[mm]':
          l = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case '[s]':
        case '[ss]':
          l = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
          break;
        default:
          throw 'bad abstime format: ' + r;
      }
      o = r.length === 3 ? 1 : 2;
      break;
    case 101:
      (l = f), (o = 1);
      break;
  }
  var c = o > 0 ? ar(l, o) : '';
  return c;
}
function br(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, n = e.substr(0, t); t != e.length; t += r)
    n += (n.length > 0 ? ',' : '') + e.substr(t, r);
  return n;
}
var Co = /%/g;
function p1(e, r, t) {
  var n = r.replace(Co, ''),
    i = r.length - n.length;
  return Fr(e, n, t * Math.pow(10, 2 * i)) + Ke('%', i);
}
function v1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return Fr(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
}
function Oo(e, r) {
  var t,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + Oo(e, -r);
    var i = e.indexOf('.');
    i === -1 && (i = e.indexOf('E'));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (t = (r / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      t.indexOf('e') === -1)
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (
        t.indexOf('.') === -1
          ? (t = t.charAt(0) + '.' + t.substr(1) + 'E+' + (s - t.length + a))
          : (t += 'E+' + (s - a));
        t.substr(0, 2) === '0.';

      )
        (t = t.charAt(0) + t.substr(2, i) + '.' + t.substr(2 + i)),
          (t = t.replace(/^0+([1-9])/, '$1').replace(/^0+\./, '0.'));
      t = t.replace(/\+-/, '-');
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, l, o, c) {
      return l + o + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
    });
  } else t = r.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + '0' + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, 'e')),
    t.replace('e', 'E')
  );
}
var Ro = /# (\?+)( ?)\/( ?)(\d+)/;
function m1(e, r, t) {
  var n = parseInt(e[4], 10),
    i = Math.round(r * n),
    a = Math.floor(i / n),
    s = i - a * n,
    f = n;
  return (
    t +
    (a === 0 ? '' : '' + a) +
    ' ' +
    (s === 0
      ? Ke(' ', e[1].length + 1 + e[4].length)
      : b0(s, e[1].length) + e[2] + '/' + e[3] + ar(f, e[4].length))
  );
}
function _1(e, r, t) {
  return t + (r === 0 ? '' : '' + r) + Ke(' ', e[1].length + 2 + e[4].length);
}
var No = /^#*0*\.([0#]+)/,
  ko = /\).*[0#]/,
  Do = /\(###\) ###\\?-####/;
function Ft(e) {
  for (var r = '', t, n = 0; n != e.length; ++n)
    switch ((t = e.charCodeAt(n))) {
      case 35:
        break;
      case 63:
        r += ' ';
        break;
      case 48:
        r += '0';
        break;
      default:
        r += String.fromCharCode(t);
    }
  return r;
}
function Bs(e, r) {
  var t = Math.pow(10, r);
  return '' + Math.round(e * t) / t;
}
function bs(e, r) {
  var t = e - Math.floor(e),
    n = Math.pow(10, r);
  return r < ('' + Math.round(t * n)).length ? 0 : Math.round(t * n);
}
function g1(e, r) {
  return r < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length
    ? 1
    : 0;
}
function E1(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e);
}
function Kt(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(ko)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? Kt('n', n, t) : '(' + Kt('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return v1(e, r, t);
  if (r.indexOf('%') !== -1) return p1(e, r, t);
  if (r.indexOf('E') !== -1) return Oo(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + Kt(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + En(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = En(t, 0)),
      i === '0' && (i = ''),
      i.length > r.length ? i : Ft(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(Ro))) return m1(a, l, o);
  if (r.match(/^#+0+$/)) return o + En(l, r.length - r.indexOf('0'));
  if ((a = r.match(No)))
    return (
      (i = Bs(t, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + Ft(a[1]))
        .replace(/\.$/, '.' + Ft(a[1]))
        .replace(/\.(\d*)$/, function (p, d) {
          return '.' + d + Ke('0', Ft(a[1]).length - d.length);
        })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      o +
      Bs(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + br(En(l, 0));
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0
      ? '-' + Kt(e, r, -t)
      : br('' + (Math.floor(t) + g1(t, a[1].length))) +
          '.' +
          ar(bs(t, a[1].length), a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return Kt(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = Fn(Kt(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      Fn(
        Fn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(Do))
    return (
      (i = Kt(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = fa(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = Fr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = aa(f[2], s)),
      c.length < a[4].length &&
        (c = Ft(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = fa(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? b0(f[1], s) + a[2] + '/' + a[3] + aa(f[2], s)
          : Ke(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = En(t, 0)),
      r.length <= i.length ? i : Ft(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return Ft(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = bs(t, a[1].length)),
      t < 0
        ? '-' + Kt(e, r, -t)
        : br(E1(t))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (p) {
              return '00,' + (p.length < 3 ? ar(0, 3 - p.length) : '') + p;
            }) +
          '.' +
          ar(s, a[1].length)
    );
  switch (r) {
    case '###,##0.00':
      return Kt(e, '#,##0.00', t);
    case '###,###':
    case '##,###':
    case '#,###':
      var x = br(En(l, 0));
      return x !== '0' ? o + x : '';
    case '###,###.00':
      return Kt(e, '###,##0.00', t).replace(/^0\./, '.');
    case '#,###.00':
      return Kt(e, '#,##0.00', t).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + r + '|');
}
function T1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return Fr(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
}
function w1(e, r, t) {
  var n = r.replace(Co, ''),
    i = r.length - n.length;
  return Fr(e, n, t * Math.pow(10, 2 * i)) + Ke('%', i);
}
function Io(e, r) {
  var t,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + Io(e, -r);
    var i = e.indexOf('.');
    i === -1 && (i = e.indexOf('E'));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % i;
    if (
      (a < 0 && (a += i),
      (t = (r / Math.pow(10, a)).toPrecision(n + 1 + ((i + a) % i))),
      !t.match(/[Ee]/))
    ) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf('.') === -1
        ? (t = t.charAt(0) + '.' + t.substr(1) + 'E+' + (s - t.length + a))
        : (t += 'E+' + (s - a)),
        (t = t.replace(/\+-/, '-'));
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (f, l, o, c) {
      return l + o + c.substr(0, (i + a) % i) + '.' + c.substr(a) + 'E';
    });
  } else t = r.toExponential(n);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + '0' + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, 'e')),
    t.replace('e', 'E')
  );
}
function dr(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(ko)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? dr('n', n, t) : '(' + dr('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return T1(e, r, t);
  if (r.indexOf('%') !== -1) return w1(e, r, t);
  if (r.indexOf('E') !== -1) return Io(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + dr(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + ar(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = '' + t),
      t === 0 && (i = ''),
      i.length > r.length ? i : Ft(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(Ro))) return _1(a, l, o);
  if (r.match(/^#+0+$/)) return o + ar(l, r.length - r.indexOf('0'));
  if ((a = r.match(No)))
    return (
      (i = ('' + t)
        .replace(/^([^\.]+)$/, '$1.' + Ft(a[1]))
        .replace(/\.$/, '.' + Ft(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (p, d) {
        return '.' + d + Ke('0', Ft(a[1]).length - d.length);
      })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      o +
      ('' + l)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + br('' + l);
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0 ? '-' + dr(e, r, -t) : br('' + t) + '.' + Ke('0', a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return dr(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = Fn(dr(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      Fn(
        Fn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(Do))
    return (
      (i = dr(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = fa(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = Fr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = aa(f[2], s)),
      c.length < a[4].length &&
        (c = Ft(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = fa(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? b0(f[1], s) + a[2] + '/' + a[3] + aa(f[2], s)
          : Ke(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = '' + t),
      r.length <= i.length ? i : Ft(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return Ft(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return t < 0
      ? '-' + dr(e, r, -t)
      : br('' + t)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (p) {
            return '00,' + (p.length < 3 ? ar(0, 3 - p.length) : '') + p;
          }) +
          '.' +
          ar(0, a[1].length);
  switch (r) {
    case '###,###':
    case '##,###':
    case '#,###':
      var x = br('' + l);
      return x !== '0' ? o + x : '';
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          dr(e, r.slice(0, r.lastIndexOf('.')), t) +
          Ft(r.slice(r.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + r + '|');
}
function Fr(e, r, t) {
  return (t | 0) === t ? dr(e, r, t) : Kt(e, r, t);
}
function S1(e) {
  for (var r = [], t = !1, n = 0, i = 0; n < e.length; ++n)
    switch (e.charCodeAt(n)) {
      case 34:
        t = !t;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        (r[r.length] = e.substr(i, n - i)), (i = n + 1);
    }
  if (((r[r.length] = e.substr(i)), t === !0))
    throw new Error('Format |' + e + '| unterminated string ');
  return r;
}
var Po = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Lo(e) {
  for (var r = 0, t = '', n = ''; r < e.length; )
    switch ((t = e.charAt(r))) {
      case 'G':
        sa(e, r) && (r += 6), r++;
        break;
      case '"':
        for (; e.charCodeAt(++r) !== 34 && r < e.length; );
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
        if (e.charAt(r + 1) === '1' || e.charAt(r + 1) === '2') return !0;
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
          e.substr(r, 3).toUpperCase() === 'A/P' ||
          e.substr(r, 5).toUpperCase() === 'AM/PM' ||
          e.substr(r, 5).toUpperCase() === '上午/下午'
        )
          return !0;
        ++r;
        break;
      case '[':
        for (n = t; e.charAt(r++) !== ']' && r < e.length; ) n += e.charAt(r);
        if (n.match(Po)) return !0;
        break;
      case '.':
      case '0':
      case '#':
        for (
          ;
          r < e.length &&
          ('0#?.,E+-%'.indexOf((t = e.charAt(++r))) > -1 ||
            (t == '\\' &&
              e.charAt(r + 1) == '-' &&
              '0#'.indexOf(e.charAt(r + 2)) > -1));

        );
        break;
      case '?':
        for (; e.charAt(++r) === t; );
        break;
      case '*':
        ++r, (e.charAt(r) == ' ' || e.charAt(r) == '*') && ++r;
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
        for (; r < e.length && '0123456789'.indexOf(e.charAt(++r)) > -1; );
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
function A1(e, r, t, n) {
  for (
    var i = [], a = '', s = 0, f = '', l = 't', o, c, h, u = 'H';
    s < e.length;

  )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!sa(e, s))
          throw new Error('unrecognized character ' + f + ' in ' + e);
        (i[i.length] = { t: 'G', v: 'General' }), (s += 7);
        break;
      case '"':
        for (a = ''; (h = e.charCodeAt(++s)) !== 34 && s < e.length; )
          a += String.fromCharCode(h);
        (i[i.length] = { t: 't', v: a }), ++s;
        break;
      case '\\':
        var x = e.charAt(++s),
          p = x === '(' || x === ')' ? x : 't';
        (i[i.length] = { t: p, v: x }), ++s;
        break;
      case '_':
        (i[i.length] = { t: 't', v: ' ' }), (s += 2);
        break;
      case '@':
        (i[i.length] = { t: 'T', v: r }), ++s;
        break;
      case 'B':
      case 'b':
        if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
          if (o == null && ((o = Li(r, t, e.charAt(s + 1) === '2')), o == null))
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
        if (r < 0 || (o == null && ((o = Li(r, t)), o == null))) return '';
        for (a = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) a += f;
        f === 'm' && l.toLowerCase() === 'h' && (f = 'M'),
          f === 'h' && (f = u),
          (i[i.length] = { t: f, v: a }),
          (l = f);
        break;
      case 'A':
      case 'a':
      case '上':
        var d = { t: f, v: f };
        if (
          (o == null && (o = Li(r, t)),
          e.substr(s, 3).toUpperCase() === 'A/P'
            ? (o != null && (d.v = o.H >= 12 ? 'P' : 'A'),
              (d.t = 'T'),
              (u = 'h'),
              (s += 3))
            : e.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (o != null && (d.v = o.H >= 12 ? 'PM' : 'AM'),
                (d.t = 'T'),
                (s += 5),
                (u = 'h'))
              : e.substr(s, 5).toUpperCase() === '上午/下午'
                ? (o != null && (d.v = o.H >= 12 ? '下午' : '上午'),
                  (d.t = 'T'),
                  (s += 5),
                  (u = 'h'))
                : ((d.t = 't'), ++s),
          o == null && d.t === 'T')
        )
          return '';
        (i[i.length] = d), (l = f);
        break;
      case '[':
        for (a = f; e.charAt(s++) !== ']' && s < e.length; ) a += e.charAt(s);
        if (a.slice(-1) !== ']') throw 'unterminated "[" block: |' + a + '|';
        if (a.match(Po)) {
          if (o == null && ((o = Li(r, t)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            Lo(e) || (i[i.length] = { t: 't', v: a }));
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
    y = 0,
    F;
  for (s = i.length - 1, l = 't'; s >= 0; --s)
    switch (i[s].t) {
      case 'h':
      case 'H':
        (i[s].t = u), (l = 'h'), m < 1 && (m = 1);
        break;
      case 's':
        (F = i[s].v.match(/\.0+$/)) && (y = Math.max(y, F[0].length - 1)),
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
  var A = '',
    N;
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
        (i[s].v = x1(i[s].t.charCodeAt(0), i[s].v, o, y)), (i[s].t = 't');
        break;
      case 'n':
      case '?':
        for (
          N = s + 1;
          i[N] != null &&
          ((f = i[N].t) === '?' ||
            f === 'D' ||
            ((f === ' ' || f === 't') &&
              i[N + 1] != null &&
              (i[N + 1].t === '?' ||
                (i[N + 1].t === 't' && i[N + 1].v === '/'))) ||
            (i[s].t === '(' && (f === ' ' || f === 'n' || f === ')')) ||
            (f === 't' &&
              (i[N].v === '/' ||
                (i[N].v === ' ' && i[N + 1] != null && i[N + 1].t == '?'))));

        )
          (i[s].v += i[N].v), (i[N] = { v: '', t: ';' }), ++N;
        (A += i[s].v), (s = N - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = v0(r, t));
        break;
    }
  var W = '',
    q,
    O;
  if (A.length > 0) {
    A.charCodeAt(0) == 40
      ? ((q = r < 0 && A.charCodeAt(0) === 45 ? -r : r), (O = Fr('n', A, q)))
      : ((q = r < 0 && n > 1 ? -r : r),
        (O = Fr('n', A, q)),
        q < 0 &&
          i[0] &&
          i[0].t == 't' &&
          ((O = O.substr(1)), (i[0].v = '-' + i[0].v))),
      (N = O.length - 1);
    var b = i.length;
    for (s = 0; s < i.length; ++s)
      if (i[s] != null && i[s].t != 't' && i[s].v.indexOf('.') > -1) {
        b = s;
        break;
      }
    var P = i.length;
    if (b === i.length && O.indexOf('E') === -1) {
      for (s = i.length - 1; s >= 0; --s)
        i[s] == null ||
          'n?'.indexOf(i[s].t) === -1 ||
          (N >= i[s].v.length - 1
            ? ((N -= i[s].v.length), (i[s].v = O.substr(N + 1, i[s].v.length)))
            : N < 0
              ? (i[s].v = '')
              : ((i[s].v = O.substr(0, N + 1)), (N = -1)),
          (i[s].t = 't'),
          (P = s));
      N >= 0 && P < i.length && (i[P].v = O.substr(0, N + 1) + i[P].v);
    } else if (b !== i.length && O.indexOf('E') === -1) {
      for (N = O.indexOf('.') - 1, s = b; s >= 0; --s)
        if (!(i[s] == null || 'n?'.indexOf(i[s].t) === -1)) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === b
                ? i[s].v.indexOf('.') - 1
                : i[s].v.length - 1,
              W = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            N >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (W = O.charAt(N--) + W);
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
      for (
        N >= 0 && P < i.length && (i[P].v = O.substr(0, N + 1) + i[P].v),
          N = O.indexOf('.') + 1,
          s = b;
        s < i.length;
        ++s
      )
        if (!(i[s] == null || ('n?('.indexOf(i[s].t) === -1 && s !== b))) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === b ? i[s].v.indexOf('.') + 1 : 0,
              W = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            N < O.length && (W += O.charAt(N++));
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((q = n > 1 && r < 0 && s > 0 && i[s - 1].v === '-' ? -r : r),
      (i[s].v = Fr(i[s].t, i[s].v, q)),
      (i[s].t = 't'));
  var V = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (V += i[s].v);
  return V;
}
var Us = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Hs(e, r) {
  if (r == null) return !1;
  var t = parseFloat(r[2]);
  switch (r[1]) {
    case '=':
      if (e == t) return !0;
      break;
    case '>':
      if (e > t) return !0;
      break;
    case '<':
      if (e < t) return !0;
      break;
    case '<>':
      if (e != t) return !0;
      break;
    case '>=':
      if (e >= t) return !0;
      break;
    case '<=':
      if (e <= t) return !0;
      break;
  }
  return !1;
}
function y1(e, r) {
  var t = S1(e),
    n = t.length,
    i = t[n - 1].indexOf('@');
  if ((n < 4 && i > -1 && --n, t.length > 4))
    throw new Error('cannot find right format for |' + t.join('|') + '|');
  if (typeof r != 'number')
    return [4, t.length === 4 || i > -1 ? t[t.length - 1] : '@'];
  switch (t.length) {
    case 1:
      t =
        i > -1
          ? ['General', 'General', 'General', t[0]]
          : [t[0], t[0], t[0], '@'];
      break;
    case 2:
      t = i > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], '@'];
      break;
    case 3:
      t = i > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], '@'];
      break;
  }
  var a = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
  if (t[0].indexOf('[') === -1 && t[1].indexOf('[') === -1) return [n, a];
  if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
    var s = t[0].match(Us),
      f = t[1].match(Us);
    return Hs(r, s)
      ? [n, t[0]]
      : Hs(r, f)
        ? [n, t[1]]
        : [n, t[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function Vr(e, r, t) {
  t == null && (t = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && t.dateNF ? (n = t.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && t.dateNF
        ? (n = t.dateNF)
        : (n = (t.table != null ? t.table : qe)[e]),
        n == null && (n = (t.table && t.table[Ms[e]]) || qe[Ms[e]]),
        n == null && (n = s1[e] || 'General');
      break;
  }
  if (sa(n, 0)) return v0(r, t);
  r instanceof Date && (r = Fo(r, t.date1904));
  var i = y1(n, r);
  if (sa(i[1])) return v0(r, t);
  if (r === !0) r = 'TRUE';
  else if (r === !1) r = 'FALSE';
  else if (r === '' || r == null) return '';
  return A1(i[1], r, t, i[0]);
}
function Mo(e, r) {
  if (typeof r != 'number') {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (qe[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (qe[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (qe[r] = e), r;
}
function Ia(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Mo(e[r], r);
}
function Pa() {
  qe = a1();
}
var Bo = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function F1(e) {
  var r = typeof e == 'number' ? qe[e] : e;
  return (r = r.replace(Bo, '(\\d+)')), new RegExp('^' + r + '$');
}
function C1(e, r, t) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (r.match(Bo) || []).forEach(function (h, u) {
    var x = parseInt(t[u + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case 'y':
        n = x;
        break;
      case 'd':
        a = x;
        break;
      case 'h':
        s = x;
        break;
      case 's':
        l = x;
        break;
      case 'm':
        s >= 0 ? (f = x) : (i = x);
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
var O1 = (function () {
    var e = {};
    e.version = '1.2.0';
    function r() {
      for (var O = 0, b = new Array(256), P = 0; P != 256; ++P)
        (O = P),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (b[P] = O);
      return typeof Int32Array < 'u' ? new Int32Array(b) : b;
    }
    var t = r();
    function n(O) {
      var b = 0,
        P = 0,
        V = 0,
        G = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (V = 0; V != 256; ++V) G[V] = O[V];
      for (V = 0; V != 256; ++V)
        for (P = O[V], b = 256 + V; b < 4096; b += 256)
          P = G[b] = (P >>> 8) ^ O[P & 255];
      var X = [];
      for (V = 1; V != 16; ++V)
        X[V - 1] =
          typeof Int32Array < 'u'
            ? G.subarray(V * 256, V * 256 + 256)
            : G.slice(V * 256, V * 256 + 256);
      return X;
    }
    var i = n(t),
      a = i[0],
      s = i[1],
      f = i[2],
      l = i[3],
      o = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      x = i[8],
      p = i[9],
      d = i[10],
      m = i[11],
      y = i[12],
      F = i[13],
      A = i[14];
    function N(O, b) {
      for (var P = b ^ -1, V = 0, G = O.length; V < G; )
        P = (P >>> 8) ^ t[(P ^ O.charCodeAt(V++)) & 255];
      return ~P;
    }
    function W(O, b) {
      for (var P = b ^ -1, V = O.length - 15, G = 0; G < V; )
        P =
          A[O[G++] ^ (P & 255)] ^
          F[O[G++] ^ ((P >> 8) & 255)] ^
          y[O[G++] ^ ((P >> 16) & 255)] ^
          m[O[G++] ^ (P >>> 24)] ^
          d[O[G++]] ^
          p[O[G++]] ^
          x[O[G++]] ^
          u[O[G++]] ^
          h[O[G++]] ^
          c[O[G++]] ^
          o[O[G++]] ^
          l[O[G++]] ^
          f[O[G++]] ^
          s[O[G++]] ^
          a[O[G++]] ^
          t[O[G++]];
      for (V += 15; G < V; ) P = (P >>> 8) ^ t[(P ^ O[G++]) & 255];
      return ~P;
    }
    function q(O, b) {
      for (var P = b ^ -1, V = 0, G = O.length, X = 0, ee = 0; V < G; )
        (X = O.charCodeAt(V++)),
          X < 128
            ? (P = (P >>> 8) ^ t[(P ^ X) & 255])
            : X < 2048
              ? ((P = (P >>> 8) ^ t[(P ^ (192 | ((X >> 6) & 31))) & 255]),
                (P = (P >>> 8) ^ t[(P ^ (128 | (X & 63))) & 255]))
              : X >= 55296 && X < 57344
                ? ((X = (X & 1023) + 64),
                  (ee = O.charCodeAt(V++) & 1023),
                  (P = (P >>> 8) ^ t[(P ^ (240 | ((X >> 8) & 7))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | ((X >> 2) & 63))) & 255]),
                  (P =
                    (P >>> 8) ^
                    t[(P ^ (128 | ((ee >> 6) & 15) | ((X & 3) << 4))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | (ee & 63))) & 255]))
                : ((P = (P >>> 8) ^ t[(P ^ (224 | ((X >> 12) & 15))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | ((X >> 6) & 63))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | (X & 63))) & 255]));
      return ~P;
    }
    return (e.table = t), (e.bstr = N), (e.buf = W), (e.str = q), e;
  })(),
  Ie = (function () {
    var r = {};
    r.version = '1.2.1';
    function t(v, E) {
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
      var U = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(U), g.setSeconds(D << 1), g
      );
    }
    function f(v) {
      Wt(v, 0);
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
      if (v[0] == 80 && v[1] == 75) return Qt(v, E);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return Xr(v, E);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        D = 0,
        U = 0,
        I = 0,
        k = [],
        L = v.slice(0, 512);
      Wt(L, 0);
      var K = h(L);
      switch (((_ = K[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (K[1] == 0) return Qt(v, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = v.slice(0, g)), Wt(L, 28));
      var Q = v.slice(0, g);
      u(L, _);
      var ie = L.read_shift(4, 'i');
      if (_ === 3 && ie !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + ie);
      (L.l += 4),
        (D = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (U = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (I = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var Y = -1, ne = 0;
        ne < 109 && ((Y = L.read_shift(4, 'i')), !(Y < 0));
        ++ne
      )
        k[ne] = Y;
      var he = x(v, g);
      m(I, w, he, g, k);
      var Ge = F(he, D, k, g);
      (Ge[D].name = '!Directory'),
        T > 0 && U !== ee && (Ge[U].name = '!MiniFAT'),
        (Ge[k[0]].name = '!FAT'),
        (Ge.fat_addrs = k),
        (Ge.ssz = g);
      var $e = {},
        pt = [],
        jn = [],
        zn = [];
      A(D, Ge, he, pt, T, $e, jn, U), p(jn, zn, pt), pt.shift();
      var Xn = { FileIndex: jn, FullPaths: zn };
      return E && E.raw && (Xn.raw = { header: Q, sectors: he }), Xn;
    }
    function h(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(Te, 'Header Signature: '), (v.l += 16);
      var E = v.read_shift(2, 'u');
      return [v.read_shift(2, 'u'), E];
    }
    function u(v, E) {
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
    function x(v, E) {
      for (var _ = Math.ceil(v.length / E) - 1, g = [], T = 1; T < _; ++T)
        g[T - 1] = v.slice(T * E, (T + 1) * E);
      return (g[_ - 1] = v.slice(_ * E)), g;
    }
    function p(v, E, _) {
      for (
        var g = 0, T = 0, w = 0, D = 0, U = 0, I = _.length, k = [], L = [];
        g < I;
        ++g
      )
        (k[g] = L[g] = g), (E[g] = _[g]);
      for (; U < L.length; ++U)
        (g = L[U]),
          (T = v[g].L),
          (w = v[g].R),
          (D = v[g].C),
          k[g] === g &&
            (T !== -1 && k[T] !== T && (k[g] = k[T]),
            w !== -1 && k[w] !== w && (k[g] = k[w])),
          D !== -1 && (k[D] = g),
          T !== -1 &&
            g != k[g] &&
            ((k[T] = k[g]), L.lastIndexOf(T) < U && L.push(T)),
          w !== -1 &&
            g != k[g] &&
            ((k[w] = k[g]), L.lastIndexOf(w) < U && L.push(w));
      for (g = 1; g < I; ++g)
        k[g] === g &&
          (w !== -1 && k[w] !== w
            ? (k[g] = k[w])
            : T !== -1 && k[T] !== T && (k[g] = k[T]));
      for (g = 1; g < I; ++g)
        if (v[g].type !== 0) {
          if (((U = g), U != k[U]))
            do (U = k[U]), (E[g] = E[U] + '/' + E[g]);
            while (U !== 0 && k[U] !== -1 && U != k[U]);
          k[g] = -1;
        }
      for (E[0] += '/', g = 1; g < I; ++g) v[g].type !== 2 && (E[g] += '/');
    }
    function d(v, E, _) {
      for (var g = v.start, T = v.size, w = [], D = g; _ && T > 0 && D >= 0; )
        w.push(E.slice(D * X, D * X + X)), (T -= X), (D = Jr(_, D * 4));
      return w.length === 0 ? H(0) : ct(w).slice(0, v.size);
    }
    function m(v, E, _, g, T) {
      var w = ee;
      if (v === ee) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var D = _[v],
          U = (g >>> 2) - 1;
        if (!D) return;
        for (var I = 0; I < U && (w = Jr(D, I * 4)) !== ee; ++I) T.push(w);
        m(Jr(D, g - 4), E - 1, _, g, T);
      }
    }
    function y(v, E, _, g, T) {
      var w = [],
        D = [];
      T || (T = []);
      var U = g - 1,
        I = 0,
        k = 0;
      for (I = E; I >= 0; ) {
        (T[I] = !0), (w[w.length] = I), D.push(v[I]);
        var L = _[Math.floor((I * 4) / g)];
        if (((k = (I * 4) & U), g < 4 + k))
          throw new Error('FAT boundary crossed: ' + I + ' 4 ' + g);
        if (!v[L]) break;
        I = Jr(v[L], k);
      }
      return { nodes: w, data: Ks([D]) };
    }
    function F(v, E, _, g) {
      var T = v.length,
        w = [],
        D = [],
        U = [],
        I = [],
        k = g - 1,
        L = 0,
        K = 0,
        Q = 0,
        ie = 0;
      for (L = 0; L < T; ++L)
        if (((U = []), (Q = L + E), Q >= T && (Q -= T), !D[Q])) {
          I = [];
          var Y = [];
          for (K = Q; K >= 0; ) {
            (Y[K] = !0), (D[K] = !0), (U[U.length] = K), I.push(v[K]);
            var ne = _[Math.floor((K * 4) / g)];
            if (((ie = (K * 4) & k), g < 4 + ie))
              throw new Error('FAT boundary crossed: ' + K + ' 4 ' + g);
            if (!v[ne] || ((K = Jr(v[ne], ie)), Y[K])) break;
          }
          w[Q] = { nodes: U, data: Ks([I]) };
        }
      return w;
    }
    function A(v, E, _, g, T, w, D, U) {
      for (
        var I = 0, k = g.length ? 2 : 0, L = E[v].data, K = 0, Q = 0, ie;
        K < L.length;
        K += 128
      ) {
        var Y = L.slice(K, K + 128);
        Wt(Y, 64), (Q = Y.read_shift(2)), (ie = $0(Y, 0, Q - k)), g.push(ie);
        var ne = {
            name: ie,
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
          he =
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2);
        he !== 0 && (ne.ct = N(Y, Y.l - 8));
        var Ge =
          Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2);
        Ge !== 0 && (ne.mt = N(Y, Y.l - 8)),
          (ne.start = Y.read_shift(4, 'i')),
          (ne.size = Y.read_shift(4, 'i')),
          ne.size < 0 &&
            ne.start < 0 &&
            ((ne.size = ne.type = 0), (ne.start = ee), (ne.name = '')),
          ne.type === 5
            ? ((I = ne.start), T > 0 && I !== ee && (E[I].name = '!StreamData'))
            : ne.size >= 4096
              ? ((ne.storage = 'fat'),
                E[ne.start] === void 0 &&
                  (E[ne.start] = y(_, ne.start, E.fat_addrs, E.ssz)),
                (E[ne.start].name = ne.name),
                (ne.content = E[ne.start].data.slice(0, ne.size)))
              : ((ne.storage = 'minifat'),
                ne.size < 0
                  ? (ne.size = 0)
                  : I !== ee &&
                    ne.start !== ee &&
                    E[I] &&
                    (ne.content = d(ne, E[I].data, (E[U] || {}).data))),
          ne.content && Wt(ne.content, 0),
          (w[ie] = ne),
          D.push(ne);
      }
    }
    function N(v, E) {
      return new Date(
        ((Gt(v, E + 4) / 1e7) * Math.pow(2, 32) +
          Gt(v, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function W(v, E) {
      return o(), c(l.readFileSync(v), E);
    }
    function q(v, E) {
      var _ = E && E.type;
      switch (
        (_ || (ye && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return W(v, E);
        case 'base64':
          return c(ir(Rr(v)), E);
        case 'binary':
          return c(ir(v), E);
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
        b(v);
    }
    function b(v) {
      var E = 'Sh33tJ5';
      if (!Ie.find(v, '/' + E)) {
        var _ = H(4);
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
          P(v);
      }
    }
    function P(v, E) {
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
          U = 0,
          I = Object.create ? Object.create(null) : {},
          k = [];
        for (T = 0; T < v.FullPaths.length; ++T)
          (I[v.FullPaths[T]] = !0),
            v.FileIndex[T].type !== 0 &&
              k.push([v.FullPaths[T], v.FileIndex[T]]);
        for (T = 0; T < k.length; ++T) {
          var L = n(k[T][0]);
          (g = I[L]),
            g ||
              (k.push([
                L,
                {
                  name: i(L).replace('/', ''),
                  type: 1,
                  clsid: He,
                  ct: D,
                  mt: D,
                  content: null,
                },
              ]),
              (I[L] = !0));
        }
        for (
          k.sort(function (ie, Y) {
            return t(ie[0], Y[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            T = 0;
          T < k.length;
          ++T
        )
          (v.FullPaths[T] = k[T][0]), (v.FileIndex[T] = k[T][1]);
        for (T = 0; T < k.length; ++T) {
          var K = v.FileIndex[T],
            Q = v.FullPaths[T];
          if (
            ((K.name = i(Q).replace('/', '')),
            (K.L = K.R = K.C = -(K.color = 1)),
            (K.size = K.content ? K.content.length : 0),
            (K.start = 0),
            (K.clsid = K.clsid || He),
            T === 0)
          )
            (K.C = k.length > 1 ? 1 : -1), (K.size = 0), (K.type = 5);
          else if (Q.slice(-1) == '/') {
            for (U = T + 1; U < k.length && n(v.FullPaths[U]) != Q; ++U);
            for (
              K.C = U >= k.length ? -1 : U, U = T + 1;
              U < k.length && n(v.FullPaths[U]) != n(Q);
              ++U
            );
            (K.R = U >= k.length ? -1 : U), (K.type = 1);
          } else
            n(v.FullPaths[T + 1] || '') == n(Q) && (K.R = T + 1), (K.type = 2);
        }
      }
    }
    function V(v, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return vn(v, _);
      switch ((P(v), _.fileType)) {
        case 'zip':
          return At(v, _);
      }
      var g = (function (ie) {
          for (var Y = 0, ne = 0, he = 0; he < ie.FileIndex.length; ++he) {
            var Ge = ie.FileIndex[he];
            if (Ge.content) {
              var $e = Ge.content.length;
              $e > 0 &&
                ($e < 4096 ? (Y += ($e + 63) >> 6) : (ne += ($e + 511) >> 9));
            }
          }
          for (
            var pt = (ie.FullPaths.length + 3) >> 2,
              jn = (Y + 7) >> 3,
              zn = (Y + 127) >> 7,
              Xn = jn + ne + pt + zn,
              qr = (Xn + 127) >> 7,
              Wa = qr <= 109 ? 0 : Math.ceil((qr - 109) / 127);
            (Xn + qr + Wa + 127) >> 7 > qr;

          )
            Wa = ++qr <= 109 ? 0 : Math.ceil((qr - 109) / 127);
          var Sr = [1, Wa, qr, zn, pt, ne, Y, 0];
          return (
            (ie.FileIndex[0].size = Y << 6),
            (Sr[7] =
              (ie.FileIndex[0].start =
                Sr[0] + Sr[1] + Sr[2] + Sr[3] + Sr[4] + Sr[5]) +
              ((Sr[6] + 7) >> 3)),
            Sr
          );
        })(v),
        T = H(g[7] << 9),
        w = 0,
        D = 0;
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, ue[w]);
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
            T.write_shift(4, g[3] ? g[0] + g[1] + g[2] - 1 : ee),
            T.write_shift(4, g[3]),
            T.write_shift(-4, g[1] ? g[0] - 1 : ee),
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
          T.write_shift(-4, D === g[1] - 1 ? ee : D + 1);
        }
      var U = function (ie) {
        for (D += ie; w < D - 1; ++w) T.write_shift(-4, w + 1);
        ie && (++w, T.write_shift(-4, ee));
      };
      for (D = w = 0, D += g[1]; w < D; ++w) T.write_shift(-4, ke.DIFSECT);
      for (D += g[2]; w < D; ++w) T.write_shift(-4, ke.FATSECT);
      U(g[3]), U(g[4]);
      for (var I = 0, k = 0, L = v.FileIndex[0]; I < v.FileIndex.length; ++I)
        (L = v.FileIndex[I]),
          L.content &&
            ((k = L.content.length),
            !(k < 4096) && ((L.start = D), U((k + 511) >> 9)));
      for (U((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, ke.ENDOFCHAIN);
      for (D = w = 0, I = 0; I < v.FileIndex.length; ++I)
        (L = v.FileIndex[I]),
          L.content &&
            ((k = L.content.length),
            !(!k || k >= 4096) && ((L.start = D), U((k + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, ke.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var K = v.FullPaths[w];
        if (!K || K.length === 0) {
          for (I = 0; I < 17; ++I) T.write_shift(4, 0);
          for (I = 0; I < 3; ++I) T.write_shift(4, -1);
          for (I = 0; I < 12; ++I) T.write_shift(4, 0);
          continue;
        }
        (L = v.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : ee);
        var Q = (w === 0 && _.root) || L.name;
        if (
          ((k = 2 * (Q.length + 1)),
          T.write_shift(64, Q, 'utf16le'),
          T.write_shift(2, k),
          T.write_shift(1, L.type),
          T.write_shift(1, L.color),
          T.write_shift(-4, L.L),
          T.write_shift(-4, L.R),
          T.write_shift(-4, L.C),
          L.clsid)
        )
          T.write_shift(16, L.clsid, 'hex');
        else for (I = 0; I < 4; ++I) T.write_shift(4, 0);
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
          if (((T.l = (L.start + 1) << 9), ye && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (I = 0; I < L.size; ++I) T.write_shift(1, L.content[I]);
            for (; I & 511; ++I) T.write_shift(1, 0);
          }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (ye && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (I = 0; I < L.size; ++I) T.write_shift(1, L.content[I]);
            for (; I & 63; ++I) T.write_shift(1, 0);
          }
      if (ye) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function G(v, E) {
      var _ = v.FullPaths.map(function (I) {
          return I.toUpperCase();
        }),
        g = _.map(function (I) {
          var k = I.split('/');
          return k[k.length - (I.slice(-1) == '/' ? 2 : 1)];
        }),
        T = !1;
      E.charCodeAt(0) === 47
        ? ((T = !0), (E = _[0].slice(0, -1) + E))
        : (T = E.indexOf('/') !== -1);
      var w = E.toUpperCase(),
        D = T === !0 ? _.indexOf(w) : g.indexOf(w);
      if (D !== -1) return v.FileIndex[D];
      var U = !w.match(Pi);
      for (
        w = w.replace(ni, ''), U && (w = w.replace(Pi, '!')), D = 0;
        D < _.length;
        ++D
      )
        if (
          (U ? _[D].replace(Pi, '!') : _[D]).replace(ni, '') == w ||
          (U ? g[D].replace(Pi, '!') : g[D]).replace(ni, '') == w
        )
          return v.FileIndex[D];
      return null;
    }
    var X = 64,
      ee = -2,
      Te = 'd0cf11e0a1b11ae1',
      ue = [208, 207, 17, 224, 161, 177, 26, 225],
      He = '00000000000000000000000000000000',
      ke = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ee,
        FREESECT: -1,
        HEADER_SIGNATURE: Te,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: He,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function ze(v, E, _) {
      o();
      var g = V(v, _);
      l.writeFileSync(E, g);
    }
    function Ve(v) {
      for (var E = new Array(v.length), _ = 0; _ < v.length; ++_)
        E[_] = String.fromCharCode(v[_]);
      return E.join('');
    }
    function wt(v, E) {
      var _ = V(v, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : Ve(_);
        case 'base64':
          return xi(typeof _ == 'string' ? _ : Ve(_));
        case 'buffer':
          if (ye) return Buffer.isBuffer(_) ? _ : Dr(_);
        case 'array':
          return typeof _ == 'string' ? ir(_) : _;
      }
      return _;
    }
    var xt;
    function S(v) {
      try {
        var E = v.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          xt = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function M(v, E) {
      if (!xt) return We(v, E);
      var _ = xt.InflateRaw,
        g = new _(),
        T = g._processChunk(v.slice(v.l), g._finishFlushFlag);
      return (v.l += g.bytesRead), T;
    }
    function R(v) {
      return xt ? xt.deflateRawSync(v) : Ee(v);
    }
    var C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      z = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      fe = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function le(v) {
      var E =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var se = typeof Uint8Array < 'u',
        te = se ? new Uint8Array(256) : [],
        Fe = 0;
      Fe < 256;
      ++Fe
    )
      te[Fe] = le(Fe);
    function ge(v, E) {
      var _ = te[v & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | te[(v >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | te[(v >> 16) & 255]), _ >>> (24 - E)));
    }
    function nt(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 6 ? 0 : v[g + 1] << 8)) >>> _) & 3;
    }
    function we(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 5 ? 0 : v[g + 1] << 8)) >>> _) & 7;
    }
    function Zt(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 4 ? 0 : v[g + 1] << 8)) >>> _) & 15;
    }
    function Be(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 3 ? 0 : v[g + 1] << 8)) >>> _) & 31;
    }
    function ae(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 1 ? 0 : v[g + 1] << 8)) >>> _) & 127;
    }
    function St(v, E, _) {
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
    function zt(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (v[T] |= (_ & 7) << g)
          : ((v[T] |= (_ << g) & 255), (v[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function Er(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (v[T] |= _), E + 1;
    }
    function Tr(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (v[T] |= _ & 255), (_ >>>= 8), (v[T + 1] = _), E + 8;
    }
    function ki(v, E, _) {
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
    function Hn(v, E) {
      var _ = v.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return v;
      if (ye) {
        var w = Is(g);
        if (v.copy) v.copy(w);
        else for (; T < v.length; ++T) w[T] = v[T];
        return w;
      } else if (se) {
        var D = new Uint8Array(g);
        if (D.set) D.set(v);
        else for (; T < _; ++T) D[T] = v[T];
        return D;
      }
      return (v.length = g), v;
    }
    function Xt(v) {
      for (var E = new Array(v), _ = 0; _ < v; ++_) E[_] = 0;
      return E;
    }
    function dn(v, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        D = 0,
        U = 0,
        I = v.length,
        k = se ? new Uint16Array(32) : Xt(32);
      for (w = 0; w < 32; ++w) k[w] = 0;
      for (w = I; w < _; ++w) v[w] = 0;
      I = v.length;
      var L = se ? new Uint16Array(I) : Xt(I);
      for (w = 0; w < I; ++w) k[(T = v[w])]++, g < T && (g = T), (L[w] = 0);
      for (k[0] = 0, w = 1; w <= g; ++w) k[w + 16] = U = (U + k[w - 1]) << 1;
      for (w = 0; w < I; ++w) (U = v[w]), U != 0 && (L[w] = k[U + 16]++);
      var K = 0;
      for (w = 0; w < I; ++w)
        if (((K = v[w]), K != 0))
          for (
            U = ge(L[w], g) >> (g - K), D = (1 << (g + 4 - K)) - 1;
            D >= 0;
            --D
          )
            E[U | (D << K)] = (K & 15) | (w << 4);
      return g;
    }
    var Wn = se ? new Uint16Array(512) : Xt(512),
      Vn = se ? new Uint16Array(32) : Xt(32);
    if (!se) {
      for (var oe = 0; oe < 512; ++oe) Wn[oe] = 0;
      for (oe = 0; oe < 32; ++oe) Vn[oe] = 0;
    }
    (function () {
      for (var v = [], E = 0; E < 32; E++) v.push(5);
      dn(v, Vn, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      dn(_, Wn, 288);
    })();
    var _e = (function () {
      for (
        var E = se ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < fe.length - 1;
        ++_
      )
        for (; g < fe[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = se ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < z.length - 1; ++_)
        for (; g < z[_ + 1]; ++g) T[g] = _;
      function w(U, I) {
        for (var k = 0; k < U.length; ) {
          var L = Math.min(65535, U.length - k),
            K = k + L == U.length;
          for (
            I.write_shift(1, +K),
              I.write_shift(2, L),
              I.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            I[I.l++] = U[k++];
        }
        return I.l;
      }
      function D(U, I) {
        for (
          var k = 0, L = 0, K = se ? new Uint16Array(32768) : [];
          L < U.length;

        ) {
          var Q = Math.min(65535, U.length - L);
          if (Q < 10) {
            for (
              k = zt(I, k, +(L + Q == U.length)),
                k & 7 && (k += 8 - (k & 7)),
                I.l = (k / 8) | 0,
                I.write_shift(2, Q),
                I.write_shift(2, ~Q & 65535);
              Q-- > 0;

            )
              I[I.l++] = U[L++];
            k = I.l * 8;
            continue;
          }
          k = zt(I, k, +(L + Q == U.length) + 2);
          for (var ie = 0; Q-- > 0; ) {
            var Y = U[L];
            ie = ((ie << 5) ^ Y) & 32767;
            var ne = -1,
              he = 0;
            if (
              (ne = K[ie]) &&
              ((ne |= L & -32768), ne > L && (ne -= 32768), ne < L)
            )
              for (; U[ne + he] == U[L + he] && he < 250; ) ++he;
            if (he > 2) {
              (Y = T[he]),
                Y <= 22
                  ? (k = Tr(I, k, te[Y + 1] >> 1) - 1)
                  : (Tr(I, k, 3),
                    (k += 5),
                    Tr(I, k, te[Y - 23] >> 5),
                    (k += 3));
              var Ge = Y < 8 ? 0 : (Y - 4) >> 2;
              Ge > 0 && (ki(I, k, he - z[Y]), (k += Ge)),
                (Y = E[L - ne]),
                (k = Tr(I, k, te[Y] >> 3)),
                (k -= 3);
              var $e = Y < 4 ? 0 : (Y - 2) >> 1;
              $e > 0 && (ki(I, k, L - ne - fe[Y]), (k += $e));
              for (var pt = 0; pt < he; ++pt)
                (K[ie] = L & 32767), (ie = ((ie << 5) ^ U[L]) & 32767), ++L;
              Q -= he - 1;
            } else
              Y <= 143 ? (Y = Y + 48) : (k = Er(I, k, 1)),
                (k = Tr(I, k, te[Y])),
                (K[ie] = L & 32767),
                ++L;
          }
          k = Tr(I, k, 0) - 1;
        }
        return (I.l = ((k + 7) / 8) | 0), I.l;
      }
      return function (I, k) {
        return I.length < 8 ? w(I, k) : D(I, k);
      };
    })();
    function Ee(v) {
      var E = H(50 + Math.floor(v.length * 1.1)),
        _ = _e(v, E);
      return E.slice(0, _);
    }
    var Je = se ? new Uint16Array(32768) : Xt(32768),
      pe = se ? new Uint16Array(32768) : Xt(32768),
      De = se ? new Uint16Array(128) : Xt(128),
      bt = 1,
      ce = 1;
    function me(v, E) {
      var _ = Be(v, E) + 257;
      E += 5;
      var g = Be(v, E) + 1;
      E += 5;
      var T = Zt(v, E) + 4;
      E += 4;
      for (
        var w = 0,
          D = se ? new Uint8Array(19) : Xt(19),
          U = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          I = 1,
          k = se ? new Uint8Array(8) : Xt(8),
          L = se ? new Uint8Array(8) : Xt(8),
          K = D.length,
          Q = 0;
        Q < T;
        ++Q
      )
        (D[C[Q]] = w = we(v, E)), I < w && (I = w), k[w]++, (E += 3);
      var ie = 0;
      for (k[0] = 0, Q = 1; Q <= I; ++Q) L[Q] = ie = (ie + k[Q - 1]) << 1;
      for (Q = 0; Q < K; ++Q) (ie = D[Q]) != 0 && (U[Q] = L[ie]++);
      var Y = 0;
      for (Q = 0; Q < K; ++Q)
        if (((Y = D[Q]), Y != 0)) {
          ie = te[U[Q]] >> (8 - Y);
          for (var ne = (1 << (7 - Y)) - 1; ne >= 0; --ne)
            De[ie | (ne << Y)] = (Y & 7) | (Q << 3);
        }
      var he = [];
      for (I = 1; he.length < _ + g; )
        switch (((ie = De[ae(v, E)]), (E += ie & 7), (ie >>>= 3))) {
          case 16:
            for (w = 3 + nt(v, E), E += 2, ie = he[he.length - 1]; w-- > 0; )
              he.push(ie);
            break;
          case 17:
            for (w = 3 + we(v, E), E += 3; w-- > 0; ) he.push(0);
            break;
          case 18:
            for (w = 11 + ae(v, E), E += 7; w-- > 0; ) he.push(0);
            break;
          default:
            he.push(ie), I < ie && (I = ie);
            break;
        }
      var Ge = he.slice(0, _),
        $e = he.slice(_);
      for (Q = _; Q < 286; ++Q) Ge[Q] = 0;
      for (Q = g; Q < 30; ++Q) $e[Q] = 0;
      return (bt = dn(Ge, Je, 286)), (ce = dn($e, pe, 30)), E;
    }
    function Me(v, E) {
      if (v[0] == 3 && !(v[1] & 3)) return [nn(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = Is(E || 1 << 18),
          w = 0,
          D = T.length >>> 0,
          U = 0,
          I = 0;
        (g & 1) == 0;

      ) {
        if (((g = we(v, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((U = 9), (I = 5))
            : ((_ = me(v, _)), (U = bt), (I = ce));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var k = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), k > 0))
            for (
              !E && D < w + k && ((T = Hn(T, w + k)), (D = T.length));
              k-- > 0;

            )
              (T[w++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && D < w + 32767 && ((T = Hn(T, w + 32767)), (D = T.length));
          var L = St(v, _, U),
            K = g >>> 1 == 1 ? Wn[L] : Je[L];
          if (((_ += K & 15), (K >>>= 4), ((K >>> 8) & 255) === 0)) T[w++] = K;
          else {
            if (K == 256) break;
            K -= 257;
            var Q = K < 8 ? 0 : (K - 4) >> 2;
            Q > 5 && (Q = 0);
            var ie = w + z[K];
            Q > 0 && ((ie += St(v, _, Q)), (_ += Q)),
              (L = St(v, _, I)),
              (K = g >>> 1 == 1 ? Vn[L] : pe[L]),
              (_ += K & 15),
              (K >>>= 4);
            var Y = K < 4 ? 0 : (K - 2) >> 1,
              ne = fe[K];
            for (
              Y > 0 && ((ne += St(v, _, Y)), (_ += Y)),
                !E && D < ie && ((T = Hn(T, ie + 100)), (D = T.length));
              w < ie;

            )
              (T[w] = T[w - ne]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function We(v, E) {
      var _ = v.slice(v.l || 0),
        g = Me(_, E);
      return (v.l += g[1]), g[0];
    }
    function be(v, E) {
      if (v) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function Qt(v, E) {
      var _ = v;
      Wt(_, 0);
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
      var U = _.read_shift(2);
      _.l += 6;
      var I = _.read_shift(4);
      for (_.l = I, D = 0; D < U; ++D) {
        _.l += 20;
        var k = _.read_shift(4),
          L = _.read_shift(4),
          K = _.read_shift(2),
          Q = _.read_shift(2),
          ie = _.read_shift(2);
        _.l += 8;
        var Y = _.read_shift(4),
          ne = f(_.slice(_.l + K, _.l + K + Q));
        _.l += K + Q + ie;
        var he = _.l;
        (_.l = Y + 4), Gn(_, k, L, w, ne), (_.l = he);
      }
      return w;
    }
    function Gn(v, E, _, g, T) {
      v.l += 2;
      var w = v.read_shift(2),
        D = v.read_shift(2),
        U = s(v);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var I = v.read_shift(4),
          k = v.read_shift(4),
          L = v.read_shift(4),
          K = v.read_shift(2),
          Q = v.read_shift(2),
          ie = '',
          Y = 0;
        Y < K;
        ++Y
      )
        ie += String.fromCharCode(v[v.l++]);
      if (Q) {
        var ne = f(v.slice(v.l, v.l + Q));
        (ne[21589] || {}).mt && (U = ne[21589].mt),
          ((T || {})[21589] || {}).mt && (U = T[21589].mt);
      }
      v.l += Q;
      var he = v.slice(v.l, v.l + k);
      switch (D) {
        case 8:
          he = M(v, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + D);
      }
      var Ge = !1;
      w & 8 &&
        ((I = v.read_shift(4)),
        I == 134695760 && ((I = v.read_shift(4)), (Ge = !0)),
        (k = v.read_shift(4)),
        (L = v.read_shift(4))),
        k != E && be(Ge, 'Bad compressed size: ' + E + ' != ' + k),
        L != _ && be(Ge, 'Bad uncompressed size: ' + _ + ' != ' + L),
        $n(g, ie, he, { unsafe: !0, mt: U });
    }
    function At(v, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = H(1),
        D = _.compression ? 8 : 0,
        U = 0,
        I = 0,
        k = 0,
        L = 0,
        K = 0,
        Q = v.FullPaths[0],
        ie = Q,
        Y = v.FileIndex[0],
        ne = [],
        he = 0;
      for (I = 1; I < v.FullPaths.length; ++I)
        if (
          ((ie = v.FullPaths[I].slice(Q.length)),
          (Y = v.FileIndex[I]),
          !(!Y.size || !Y.content || ie == 'Sh33tJ5'))
        ) {
          var Ge = L,
            $e = H(ie.length);
          for (k = 0; k < ie.length; ++k)
            $e.write_shift(1, ie.charCodeAt(k) & 127);
          ($e = $e.slice(0, $e.l)), (ne[K] = O1.buf(Y.content, 0));
          var pt = Y.content;
          D == 8 && (pt = R(pt)),
            (w = H(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, U),
            w.write_shift(2, D),
            Y.mt ? a(w, Y.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ne[K]),
            w.write_shift(4, pt.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, $e.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += $e.length),
            g.push($e),
            (L += pt.length),
            g.push(pt),
            (w = H(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, U),
            w.write_shift(2, D),
            w.write_shift(4, 0),
            w.write_shift(-4, ne[K]),
            w.write_shift(4, pt.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, $e.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Ge),
            (he += w.l),
            T.push(w),
            (he += $e.length),
            T.push($e),
            ++K;
        }
      return (
        (w = H(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, K),
        w.write_shift(2, K),
        w.write_shift(4, he),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        ct([ct(g), ct(T), w])
      );
    }
    var Nt = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function Xe(v, E) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && Nt[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && Nt[g[1]]))
        ? Nt[g[1]]
        : 'application/octet-stream';
    }
    function cr(v) {
      for (var E = xi(v), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function zr(v) {
      var E = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (k) {
          var L = k.charCodeAt(0).toString(16).toUpperCase();
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
          var U = 76,
            I = w.slice(D, D + U);
          I.charAt(U - 1) == '='
            ? U--
            : I.charAt(U - 2) == '='
              ? (U -= 2)
              : I.charAt(U - 3) == '=' && (U -= 3),
            (I = w.slice(D, D + U)),
            (D += U),
            D < w.length && (I += '='),
            _.push(I);
        }
      }
      return _.join(`\r
`);
    }
    function xn(v) {
      for (var E = [], _ = 0; _ < v.length; ++_) {
        for (var g = v[_]; _ <= v.length && g.charAt(g.length - 1) == '='; )
          g = g.slice(0, g.length - 1) + v[++_];
        E.push(g);
      }
      for (var T = 0; T < E.length; ++T)
        E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return ir(
        E.join(`\r
`),
      );
    }
    function pn(v, E, _) {
      for (var g = '', T = '', w = '', D, U = 0; U < 10; ++U) {
        var I = E[U];
        if (!I || I.match(/^\s*$/)) break;
        var k = I.match(/^(.*?):\s*([^\s].*)$/);
        if (k)
          switch (k[1].toLowerCase()) {
            case 'content-location':
              g = k[2].trim();
              break;
            case 'content-type':
              w = k[2].trim();
              break;
            case 'content-transfer-encoding':
              T = k[2].trim();
              break;
          }
      }
      switch ((++U, T.toLowerCase())) {
        case 'base64':
          D = ir(Rr(E.slice(U).join('')));
          break;
        case 'quoted-printable':
          D = xn(E.slice(U));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = $n(v, g.slice(_.length), D, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function Xr(v, E) {
      if (Ve(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (ye && Buffer.isBuffer(v) ? v.toString('binary') : Ve(v)).split(`\r
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
      var U = '--' + (D[1] || ''),
        I = [],
        k = [],
        L = { FileIndex: I, FullPaths: k };
      O(L);
      var K,
        Q = 0;
      for (T = 0; T < g.length; ++T) {
        var ie = g[T];
        (ie !== U && ie !== U + '--') ||
          (Q++ && pn(L, g.slice(K, T), _), (K = T));
      }
      return L;
    }
    function vn(v, E) {
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
          U = v.FileIndex[0],
          I = 1;
        I < v.FullPaths.length;
        ++I
      )
        if (
          ((D = v.FullPaths[I].slice(w.length)),
          (U = v.FileIndex[I]),
          !(!U.size || !U.content || D == 'Sh33tJ5'))
        ) {
          D = D.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (he) {
              return '_x' + he.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (he) {
            return '_u' + he.charCodeAt(0).toString(16) + '_';
          });
          for (
            var k = U.content,
              L = ye && Buffer.isBuffer(k) ? k.toString('binary') : Ve(k),
              K = 0,
              Q = Math.min(1024, L.length),
              ie = 0,
              Y = 0;
            Y <= Q;
            ++Y
          )
            (ie = L.charCodeAt(Y)) >= 32 && ie < 128 && ++K;
          var ne = K >= (Q * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + D,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (ne ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + Xe(U, D)),
            T.push(''),
            T.push(ne ? zr(L) : cr(L));
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
    function Ha(v) {
      var E = {};
      return O(E, v), E;
    }
    function $n(v, E, _, g) {
      var T = g && g.unsafe;
      T || O(v);
      var w = !T && Ie.find(v, E);
      if (!w) {
        var D = v.FullPaths[0];
        E.slice(0, D.length) == D
          ? (D = E)
          : (D.slice(-1) != '/' && (D += '/'),
            (D = (D + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          v.FileIndex.push(w),
          v.FullPaths.push(D),
          T || Ie.utils.cfb_gc(v);
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
    function wr(v, E) {
      O(v);
      var _ = Ie.find(v, E);
      if (_) {
        for (var g = 0; g < v.FileIndex.length; ++g)
          if (v.FileIndex[g] == _)
            return v.FileIndex.splice(g, 1), v.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function Ze(v, E, _) {
      O(v);
      var g = Ie.find(v, E);
      if (g) {
        for (var T = 0; T < v.FileIndex.length; ++T)
          if (v.FileIndex[T] == g)
            return (v.FileIndex[T].name = i(_)), (v.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function Kr(v) {
      P(v, !0);
    }
    return (
      (r.find = G),
      (r.read = q),
      (r.parse = c),
      (r.write = wt),
      (r.writeFile = ze),
      (r.utils = {
        cfb_new: Ha,
        cfb_add: $n,
        cfb_del: wr,
        cfb_mov: Ze,
        cfb_gc: Kr,
        ReadShift: ai,
        CheckField: tl,
        prep_blob: Wt,
        bconcat: ct,
        use_zlib: S,
        _deflateRaw: Ee,
        _inflateRaw: We,
        consts: ke,
      }),
      r
    );
  })();
function R1(e) {
  return typeof e == 'string' ? Da(e) : Array.isArray(e) ? t1(e) : e;
}
function Fi(e, r, t) {
  if (typeof Deno < 'u') {
    if (t && typeof r == 'string')
      switch (t) {
        case 'utf8':
          r = new TextEncoder(t).encode(r);
          break;
        case 'binary':
          r = Da(r);
          break;
        default:
          throw new Error('Unsupported encoding ' + t);
      }
    return Deno.writeFileSync(e, r);
  }
  var n = t == 'utf8' ? vi(r) : r;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e);
  if (typeof Blob < 'u') {
    var i = new Blob([R1(n)], { type: 'application/octet-stream' });
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
        Array.isArray(r) && (r = yi(r)),
        f.write(r),
        f.close(),
        r
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function dt(e) {
  for (var r = Object.keys(e), t = [], n = 0; n < r.length; ++n)
    Object.prototype.hasOwnProperty.call(e, r[n]) && t.push(r[n]);
  return t;
}
function Ws(e, r) {
  for (var t = [], n = dt(e), i = 0; i !== n.length; ++i)
    t[e[n[i]][r]] == null && (t[e[n[i]][r]] = n[i]);
  return t;
}
function H0(e) {
  for (var r = [], t = dt(e), n = 0; n !== t.length; ++n) r[e[t[n]]] = t[n];
  return r;
}
function La(e) {
  for (var r = [], t = dt(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] = parseInt(t[n], 10);
  return r;
}
function N1(e) {
  for (var r = [], t = dt(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] == null && (r[e[t[n]]] = []), r[e[t[n]]].push(t[n]);
  return r;
}
var oa = new Date(1899, 11, 30, 0, 0, 0);
function Mt(e, r) {
  var t = e.getTime(),
    n = oa.getTime() + (e.getTimezoneOffset() - oa.getTimezoneOffset()) * 6e4;
  return (t - n) / (24 * 60 * 60 * 1e3);
}
var bo = new Date(),
  k1 = oa.getTime() + (bo.getTimezoneOffset() - oa.getTimezoneOffset()) * 6e4,
  Vs = bo.getTimezoneOffset();
function Uo(e) {
  var r = new Date();
  return (
    r.setTime(e * 24 * 60 * 60 * 1e3 + k1),
    r.getTimezoneOffset() !== Vs &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - Vs) * 6e4),
    r
  );
}
var Gs = new Date('2017-02-19T19:06:09.000Z'),
  Ho = isNaN(Gs.getFullYear()) ? new Date('2/19/17') : Gs,
  D1 = Ho.getFullYear() == 2017;
function Rt(e, r) {
  var t = new Date(e);
  if (D1)
    return (
      r > 0
        ? t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3),
      t
    );
  if (e instanceof Date) return e;
  if (Ho.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
    var n = t.getFullYear();
    return e.indexOf('' + n) > -1 || t.setFullYear(t.getFullYear() + 100), t;
  }
  var i = e.match(/\d+/g) || ['2017', '2', '19', '0', '0', '0'],
    a = new Date(+i[0], +i[1] - 1, +i[2], +i[3] || 0, +i[4] || 0, +i[5] || 0);
  return (
    e.indexOf('Z') > -1 &&
      (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)),
    a
  );
}
function Ma(e, r) {
  if (ye && Buffer.isBuffer(e)) return e.toString('binary');
  if (typeof TextDecoder < 'u')
    try {
      var t = {
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
            return t[a] || a;
          })
      );
    } catch {}
  for (var n = [], i = 0; i != e.length; ++i) n.push(String.fromCharCode(e[i]));
  return n.join('');
}
function Bt(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = Bt(e[t]));
  return r;
}
function Ke(e, r) {
  for (var t = ''; t.length < r; ) t += e;
  return t;
}
function Cr(e) {
  var r = Number(e);
  if (!isNaN(r)) return isFinite(r) ? r : NaN;
  if (!/\d/.test(e)) return r;
  var t = 1,
    n = e
      .replace(/([\d]),([\d])/g, '$1$2')
      .replace(/[$]/g, '')
      .replace(/[%]/g, function () {
        return (t *= 100), '';
      });
  return !isNaN((r = Number(n))) ||
    ((n = n.replace(/[(](.*)[)]/, function (i, a) {
      return (t = -t), a;
    })),
    !isNaN((r = Number(n))))
    ? r / t
    : r;
}
var I1 = [
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
function pi(e) {
  var r = new Date(e),
    t = new Date(NaN),
    n = r.getYear(),
    i = r.getMonth(),
    a = r.getDate();
  if (isNaN(a)) return t;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((s = s.replace(/[^a-z]/g, '').replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, '')),
      s.length > 3 && I1.indexOf(s) == -1)
    )
      return t;
  } else if (s.match(/[a-z]/)) return t;
  return n < 0 || n > 8099
    ? t
    : (i > 0 || a > 1) && n != 101
      ? r
      : e.match(/[^-0-9:,\/\\]/)
        ? t
        : r;
}
function ve(e, r, t) {
  if (e.FullPaths) {
    if (typeof t == 'string') {
      var n;
      return ye ? (n = Dr(t)) : (n = r1(t)), Ie.utils.cfb_add(e, r, n);
    }
    Ie.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function W0() {
  return Ie.utils.cfb_new();
}
var tt = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  P1 = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  V0 = H0(P1),
  G0 = /[&<>'"]/g,
  L1 = /[\u0000-\u0008\u000b-\u001f]/g;
function Re(e) {
  var r = e + '';
  return r
    .replace(G0, function (t) {
      return V0[t];
    })
    .replace(L1, function (t) {
      return '_x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function $s(e) {
  return Re(e).replace(/ /g, '_x0020_');
}
var Wo = /[\u0000-\u001f]/g;
function M1(e) {
  var r = e + '';
  return r
    .replace(G0, function (t) {
      return V0[t];
    })
    .replace(/\n/g, '<br/>')
    .replace(Wo, function (t) {
      return '&#x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function B1(e) {
  var r = e + '';
  return r
    .replace(G0, function (t) {
      return V0[t];
    })
    .replace(Wo, function (t) {
      return '&#x' + t.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function b1(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function U1(e) {
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
function qa(e) {
  for (var r = '', t = 0, n = 0, i = 0, a = 0, s = 0, f = 0; t < e.length; ) {
    if (((n = e.charCodeAt(t++)), n < 128)) {
      r += String.fromCharCode(n);
      continue;
    }
    if (((i = e.charCodeAt(t++)), n > 191 && n < 224)) {
      (s = (n & 31) << 6), (s |= i & 63), (r += String.fromCharCode(s));
      continue;
    }
    if (((a = e.charCodeAt(t++)), n < 240)) {
      r += String.fromCharCode(((n & 15) << 12) | ((i & 63) << 6) | (a & 63));
      continue;
    }
    (s = e.charCodeAt(t++)),
      (f =
        (((n & 7) << 18) | ((i & 63) << 12) | ((a & 63) << 6) | (s & 63)) -
        65536),
      (r += String.fromCharCode(55296 + ((f >>> 10) & 1023))),
      (r += String.fromCharCode(56320 + (f & 1023)));
  }
  return r;
}
function js(e) {
  var r = nn(2 * e.length),
    t,
    n,
    i = 1,
    a = 0,
    s = 0,
    f;
  for (n = 0; n < e.length; n += i)
    (i = 1),
      (f = e.charCodeAt(n)) < 128
        ? (t = f)
        : f < 224
          ? ((t = (f & 31) * 64 + (e.charCodeAt(n + 1) & 63)), (i = 2))
          : f < 240
            ? ((t =
                (f & 15) * 4096 +
                (e.charCodeAt(n + 1) & 63) * 64 +
                (e.charCodeAt(n + 2) & 63)),
              (i = 3))
            : ((i = 4),
              (t =
                (f & 7) * 262144 +
                (e.charCodeAt(n + 1) & 63) * 4096 +
                (e.charCodeAt(n + 2) & 63) * 64 +
                (e.charCodeAt(n + 3) & 63)),
              (t -= 65536),
              (s = 55296 + ((t >>> 10) & 1023)),
              (t = 56320 + (t & 1023))),
      s !== 0 && ((r[a++] = s & 255), (r[a++] = s >>> 8), (s = 0)),
      (r[a++] = t % 256),
      (r[a++] = t >>> 8);
  return r.slice(0, a).toString('ucs2');
}
function zs(e) {
  return Dr(e, 'binary').toString('utf8');
}
var Mi = 'foo bar bazâð£',
  ii = (ye && ((zs(Mi) == qa(Mi) && zs) || (js(Mi) == qa(Mi) && js))) || qa,
  vi = ye
    ? function (e) {
        return Dr(e, 'utf8').toString('binary');
      }
    : function (e) {
        for (var r = [], t = 0, n = 0, i = 0; t < e.length; )
          switch (((n = e.charCodeAt(t++)), !0)) {
            case n < 128:
              r.push(String.fromCharCode(n));
              break;
            case n < 2048:
              r.push(String.fromCharCode(192 + (n >> 6))),
                r.push(String.fromCharCode(128 + (n & 63)));
              break;
            case n >= 55296 && n < 57344:
              (n -= 55296),
                (i = e.charCodeAt(t++) - 56320 + (n << 10)),
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
  H1 = (function () {
    var e = [
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
    return function (t) {
      for (
        var n = t
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
  Vo = /(^\s|\s$|\n)/;
function ut(e, r) {
  return (
    '<' +
    e +
    (r.match(Vo) ? ' xml:space="preserve"' : '') +
    '>' +
    r +
    '</' +
    e +
    '>'
  );
}
function mi(e) {
  return dt(e)
    .map(function (r) {
      return ' ' + r + '="' + e[r] + '"';
    })
    .join('');
}
function J(e, r, t) {
  return (
    '<' +
    e +
    (t != null ? mi(t) : '') +
    (r != null
      ? (r.match(Vo) ? ' xml:space="preserve"' : '') + '>' + r + '</' + e
      : '/') +
    '>'
  );
}
function m0(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, '');
  } catch (t) {
    if (r) throw t;
  }
  return '';
}
function W1(e, r) {
  switch (typeof e) {
    case 'string':
      var t = J('vt:lpwstr', Re(e));
      return (t = t.replace(/&quot;/g, '_x0022_')), t;
    case 'number':
      return J((e | 0) == e ? 'vt:i4' : 'vt:r8', Re(String(e)));
    case 'boolean':
      return J('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return J('vt:filetime', m0(e));
  throw new Error('Unable to serialize ' + e);
}
var it = {
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
  Mn = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  Vt = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function V1(e, r) {
  for (
    var t = 1 - 2 * (e[r + 7] >>> 7),
      n = ((e[r + 7] & 127) << 4) + ((e[r + 6] >>> 4) & 15),
      i = e[r + 6] & 15,
      a = 5;
    a >= 0;
    --a
  )
    i = i * 256 + e[r + a];
  return n == 2047
    ? i == 0
      ? t * (1 / 0)
      : NaN
    : (n == 0 ? (n = -1022) : ((n -= 1023), (i += Math.pow(2, 52))),
      t * Math.pow(2, n - 52) * i);
}
function G1(e, r, t) {
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
  for (var f = 0; f <= 5; ++f, a /= 256) e[t + f] = a & 255;
  (e[t + 6] = ((i & 15) << 4) | (a & 15)), (e[t + 7] = (i >> 4) | n);
}
var Xs = function (e) {
    for (var r = [], t = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += t)
          r.push.apply(r, e[0][n].slice(i, i + t));
    return r;
  },
  Ks = ye
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : Dr(r);
              }),
            )
          : Xs(e);
      }
    : Xs,
  qs = function (e, r, t) {
    for (var n = [], i = r; i < t; i += 2)
      n.push(String.fromCharCode(ei(e, i)));
    return n.join('').replace(ni, '');
  },
  $0 = ye
    ? function (e, r, t) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', r, t).replace(ni, '')
          : qs(e, r, t);
      }
    : qs,
  Ys = function (e, r, t) {
    for (var n = [], i = r; i < r + t; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  Go = ye
    ? function (e, r, t) {
        return Buffer.isBuffer(e) ? e.toString('hex', r, r + t) : Ys(e, r, t);
      }
    : Ys,
  Js = function (e, r, t) {
    for (var n = [], i = r; i < t; i++) n.push(String.fromCharCode(An(e, i)));
    return n.join('');
  },
  Ci = ye
    ? function (r, t, n) {
        return Buffer.isBuffer(r) ? r.toString('utf8', t, n) : Js(r, t, n);
      }
    : Js,
  $o = function (e, r) {
    var t = Gt(e, r);
    return t > 0 ? Ci(e, r + 4, r + 4 + t - 1) : '';
  },
  jo = $o,
  zo = function (e, r) {
    var t = Gt(e, r);
    return t > 0 ? Ci(e, r + 4, r + 4 + t - 1) : '';
  },
  Xo = zo,
  Ko = function (e, r) {
    var t = 2 * Gt(e, r);
    return t > 0 ? Ci(e, r + 4, r + 4 + t - 1) : '';
  },
  qo = Ko,
  Yo = function (r, t) {
    var n = Gt(r, t);
    return n > 0 ? $0(r, t + 4, t + 4 + n) : '';
  },
  Jo = Yo,
  Zo = function (e, r) {
    var t = Gt(e, r);
    return t > 0 ? Ci(e, r + 4, r + 4 + t) : '';
  },
  Qo = Zo,
  el = function (e, r) {
    return V1(e, r);
  },
  la = el,
  j0 = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  };
ye &&
  ((jo = function (r, t) {
    if (!Buffer.isBuffer(r)) return $o(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (Xo = function (r, t) {
    if (!Buffer.isBuffer(r)) return zo(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (qo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Ko(r, t);
    var n = 2 * r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n - 1);
  }),
  (Jo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Yo(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n);
  }),
  (Qo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Zo(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf8', t + 4, t + 4 + n);
  }),
  (la = function (r, t) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(t) : el(r, t);
  }),
  (j0 = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  }));
var An = function (e, r) {
    return e[r];
  },
  ei = function (e, r) {
    return e[r + 1] * 256 + e[r];
  },
  $1 = function (e, r) {
    var t = e[r + 1] * 256 + e[r];
    return t < 32768 ? t : (65535 - t + 1) * -1;
  },
  Gt = function (e, r) {
    return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
  },
  Jr = function (e, r) {
    return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
  },
  j1 = function (e, r) {
    return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
  };
function ai(e, r) {
  var t = '',
    n,
    i,
    a = [],
    s,
    f,
    l,
    o;
  switch (r) {
    case 'dbcs':
      if (((o = this.l), ye && Buffer.isBuffer(this)))
        t = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (t += String.fromCharCode(ei(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      t = Ci(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (t = $0(this, this.l, this.l + e));
      break;
    case 'wstr':
      return ai.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (t = jo(this, this.l)), (e = 4 + Gt(this, this.l));
      break;
    case 'lpstr-cp':
      (t = Xo(this, this.l)), (e = 4 + Gt(this, this.l));
      break;
    case 'lpwstr':
      (t = qo(this, this.l)), (e = 4 + 2 * Gt(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + Gt(this, this.l)), (t = Jo(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + Gt(this, this.l)),
        (t = Qo(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, t = ''; (s = An(this, this.l + e++)) !== 0; ) a.push(Ii(s));
      t = a.join('');
      break;
    case '_wstr':
      for (e = 0, t = ''; (s = ei(this, this.l + e)) !== 0; )
        a.push(Ii(s)), (e += 2);
      (e += 2), (t = a.join(''));
      break;
    case 'dbcs-cont':
      for (t = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = An(this, o)),
            (this.l = o + 1),
            (f = ai.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ii(ei(this, o))), (o += 2);
      }
      (t = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (t = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = An(this, o)),
            (this.l = o + 1),
            (f = ai.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ii(An(this, o))), (o += 1);
      }
      t = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = An(this, this.l)), this.l++, n;
        case 2:
          return (n = (r === 'i' ? $1 : ei)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return r === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? Jr : j1)(this, this.l)), (this.l += 4), n)
            : ((i = Gt(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (r === 'f')
            return (
              e == 8
                ? (i = la(this, this.l))
                : (i = la(
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
          t = Go(this, this.l, e);
          break;
      }
  }
  return (this.l += e), t;
}
var z1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >>> 8) & 255),
      (e[t + 2] = (r >>> 16) & 255),
      (e[t + 3] = (r >>> 24) & 255);
  },
  X1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >> 8) & 255),
      (e[t + 2] = (r >> 16) & 255),
      (e[t + 3] = (r >> 24) & 255);
  },
  K1 = function (e, r, t) {
    (e[t] = r & 255), (e[t + 1] = (r >>> 8) & 255);
  };
function q1(e, r, t) {
  var n = 0,
    i = 0;
  if (t === 'dbcs') {
    for (i = 0; i != r.length; ++i) K1(this, r.charCodeAt(i), this.l + 2 * i);
    n = 2 * r.length;
  } else if (t === 'sbcs') {
    for (r = r.replace(/[^\x00-\x7F]/g, '_'), i = 0; i != r.length; ++i)
      this[this.l + i] = r.charCodeAt(i) & 255;
    n = r.length;
  } else if (t === 'hex') {
    for (; i < e; ++i)
      this[this.l++] = parseInt(r.slice(2 * i, 2 * i + 2), 16) || 0;
    return this;
  } else if (t === 'utf16le') {
    var a = Math.min(this.l + e, this.length);
    for (i = 0; i < Math.min(r.length, e); ++i) {
      var s = r.charCodeAt(i);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < a; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
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
        (n = 4), z1(this, r, this.l);
        break;
      case 8:
        if (((n = 8), t === 'f')) {
          G1(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), X1(this, r, this.l);
        break;
    }
  return (this.l += n), this;
}
function tl(e, r) {
  var t = Go(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + 'Expected ' + e + ' saw ' + t);
  this.l += e.length >> 1;
}
function Wt(e, r) {
  (e.l = r), (e.read_shift = ai), (e.chk = tl), (e.write_shift = q1);
}
function gr(e, r) {
  e.l += r;
}
function H(e) {
  var r = nn(e);
  return Wt(r, 0), r;
}
function Pt() {
  var e = [],
    r = ye ? 256 : 2048,
    t = function (o) {
      var c = H(o);
      return Wt(c, 0), c;
    },
    n = t(r),
    i = function () {
      n &&
        (n.length > n.l && ((n = n.slice(0, n.l)), (n.l = n.length)),
        n.length > 0 && e.push(n),
        (n = null));
    },
    a = function (o) {
      return n && o < n.length - n.l ? n : (i(), (n = t(Math.max(o + 1, r))));
    },
    s = function () {
      return i(), ct(e);
    },
    f = function (o) {
      i(), (n = o), n.l == null && (n.l = n.length), a(r);
    };
  return { next: a, push: f, end: s, _bufs: e };
}
function j(e, r, t, n) {
  var i = +r,
    a;
  if (!isNaN(i)) {
    n || (n = V2[i].p || (t || []).length || 0),
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
    n > 0 && j0(t) && e.push(t);
  }
}
function si(e, r, t) {
  var n = Bt(e);
  if (
    (r.s
      ? (n.cRel && (n.c += r.s.c), n.rRel && (n.r += r.s.r))
      : (n.cRel && (n.c += r.c), n.rRel && (n.r += r.r)),
    !t || t.biff < 12)
  ) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function Zs(e, r, t) {
  var n = Bt(e);
  return (n.s = si(n.s, r.s, t)), (n.e = si(n.e, r.s, t)), n;
}
function fi(e, r) {
  if (e.cRel && e.c < 0) for (e = Bt(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Bt(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = Ne(e);
  return (
    !e.cRel && e.cRel != null && (t = Z1(t)),
    !e.rRel && e.rRel != null && (t = Y1(t)),
    t
  );
}
function Ya(e, r) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        gt(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        gt(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (r.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        ht(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        ht(e.e.r)
      : fi(e.s, r.biff) + ':' + fi(e.e, r.biff);
}
function z0(e) {
  return parseInt(J1(e), 10) - 1;
}
function ht(e) {
  return '' + (e + 1);
}
function Y1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function J1(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function X0(e) {
  for (var r = Q1(e), t = 0, n = 0; n !== r.length; ++n)
    t = 26 * t + r.charCodeAt(n) - 64;
  return t - 1;
}
function gt(e) {
  if (e < 0) throw new Error('invalid column ' + e);
  var r = '';
  for (++e; e; e = Math.floor((e - 1) / 26))
    r = String.fromCharCode(((e - 1) % 26) + 65) + r;
  return r;
}
function Z1(e) {
  return e.replace(/^([A-Z])/, '$$$1');
}
function Q1(e) {
  return e.replace(/^\$([A-Z])/, '$1');
}
function ed(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function at(e) {
  for (var r = 0, t = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (r = 10 * r + (i - 48))
      : i >= 65 && i <= 90 && (t = 26 * t + (i - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function Ne(e) {
  for (var r = e.c + 1, t = ''; r; r = ((r - 1) / 26) | 0)
    t = String.fromCharCode(((r - 1) % 26) + 65) + t;
  return t + (e.r + 1);
}
function jt(e) {
  var r = e.indexOf(':');
  return r == -1
    ? { s: at(e), e: at(e) }
    : { s: at(e.slice(0, r)), e: at(e.slice(r + 1)) };
}
function et(e, r) {
  return typeof r > 'u' || typeof r == 'number'
    ? et(e.s, e.e)
    : (typeof e != 'string' && (e = Ne(e)),
      typeof r != 'string' && (r = Ne(r)),
      e == r ? e : e + ':' + r);
}
function Ue(e) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    t = 0,
    n = 0,
    i = 0,
    a = e.length;
  for (t = 0; n < a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    t = 26 * t + i;
  for (
    r.s.c = --t, t = 0;
    n < a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    t = 10 * t + i;
  if (((r.s.r = --t), n === a || i != 10))
    return (r.e.c = r.s.c), (r.e.r = r.s.r), r;
  for (++n, t = 0; n != a && !((i = e.charCodeAt(n) - 64) < 1 || i > 26); ++n)
    t = 26 * t + i;
  for (
    r.e.c = --t, t = 0;
    n != a && !((i = e.charCodeAt(n) - 48) < 0 || i > 9);
    ++n
  )
    t = 10 * t + i;
  return (r.e.r = --t), r;
}
function Qs(e, r) {
  var t = e.t == 'd' && r instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Vr(e.z, t ? Mt(r) : r));
    } catch {}
  try {
    return (e.w = Vr((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Mt(r) : r));
  } catch {
    return '' + r;
  }
}
function Nr(e, r, t) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && t && t.dateNF && (e.z = t.dateNF),
        e.t == 'e' ? Oi[e.v] || e.v : r == null ? Qs(e, e.v) : Qs(e, r));
}
function on(e, r) {
  var t = r && r.sheet ? r.sheet : 'Sheet1',
    n = {};
  return (n[t] = e), { SheetNames: [t], Sheets: n };
}
function rl(e, r, t) {
  var n = t || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? at(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = Ue(a['!ref']);
    (o.s.c = c.s.c),
      (o.s.r = c.s.r),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      s == -1 && (o.e.r = s = c.e.r + 1);
  }
  for (var h = 0; h != r.length; ++h)
    if (r[h]) {
      if (!Array.isArray(r[h]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var u = 0; u != r[h].length; ++u)
        if (!(typeof r[h][u] > 'u')) {
          var x = { v: r[h][u] },
            p = s + h,
            d = f + u;
          if (
            (o.s.r > p && (o.s.r = p),
            o.s.c > d && (o.s.c = d),
            o.e.r < p && (o.e.r = p),
            o.e.c < d && (o.e.c = d),
            r[h][u] &&
              typeof r[h][u] == 'object' &&
              !Array.isArray(r[h][u]) &&
              !(r[h][u] instanceof Date))
          )
            x = r[h][u];
          else if (
            (Array.isArray(x.v) && ((x.f = r[h][u][1]), (x.v = x.v[0])),
            x.v === null)
          )
            if (x.f) x.t = 'n';
            else if (n.nullError) (x.t = 'e'), (x.v = 0);
            else if (n.sheetStubs) x.t = 'z';
            else continue;
          else
            typeof x.v == 'number'
              ? (x.t = 'n')
              : typeof x.v == 'boolean'
                ? (x.t = 'b')
                : x.v instanceof Date
                  ? ((x.z = n.dateNF || qe[14]),
                    n.cellDates
                      ? ((x.t = 'd'), (x.w = Vr(x.z, Mt(x.v))))
                      : ((x.t = 'n'), (x.v = Mt(x.v)), (x.w = Vr(x.z, x.v))))
                  : (x.t = 's');
          if (i)
            a[p] || (a[p] = []),
              a[p][d] && a[p][d].z && (x.z = a[p][d].z),
              (a[p][d] = x);
          else {
            var m = Ne({ c: d, r: p });
            a[m] && a[m].z && (x.z = a[m].z), (a[m] = x);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = et(o)), a;
}
function Bn(e, r) {
  return rl(null, e, r);
}
function td(e) {
  return e.read_shift(4, 'i');
}
function sr(e, r) {
  return r || (r = H(4)), r.write_shift(4, e), r;
}
function Et(e) {
  var r = e.read_shift(4);
  return r === 0 ? '' : e.read_shift(r, 'dbcs');
}
function st(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(4 + 2 * e.length))),
    r.write_shift(4, e.length),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
function rd(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function nd(e, r) {
  return r || (r = H(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function K0(e, r) {
  var t = e.l,
    n = e.read_shift(1),
    i = Et(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(rd(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = t + r), s;
}
function id(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(15 + 4 * e.t.length))),
    r.write_shift(1, 0),
    st(e.t, r),
    t ? r.slice(0, r.l) : r
  );
}
var ad = K0;
function sd(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(23 + 4 * e.t.length))),
    r.write_shift(1, 1),
    st(e.t, r),
    r.write_shift(4, 1),
    nd({}, r),
    t ? r.slice(0, r.l) : r
  );
}
function Jt(e) {
  var r = e.read_shift(4),
    t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: r, iStyleRef: t };
}
function ln(e, r) {
  return (
    r == null && (r = H(8)),
    r.write_shift(-4, e.c),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
function cn(e) {
  var r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: r };
}
function un(e, r) {
  return (
    r == null && (r = H(4)),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
var fd = Et,
  nl = st;
function q0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? '' : e.read_shift(r, 'dbcs');
}
function ca(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(127))),
    r.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
var od = Et,
  _0 = q0,
  Y0 = ca;
function il(e) {
  var r = e.slice(e.l, e.l + 4),
    t = r[0] & 1,
    n = r[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? la([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : Jr(r, 0) >> 2;
  return t ? i / 100 : i;
}
function al(e, r) {
  r == null && (r = H(4));
  var t = 0,
    n = 0,
    i = e * 100;
  if (
    (e == (e | 0) && e >= -536870912 && e < 1 << 29
      ? (n = 1)
      : i == (i | 0) && i >= -536870912 && i < 1 << 29 && ((n = 1), (t = 1)),
    n)
  )
    r.write_shift(-4, ((t ? i : e) << 2) + (t + 2));
  else throw new Error('unsupported RkNumber ' + e);
}
function sl(e) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = e.read_shift(4)),
    (r.e.r = e.read_shift(4)),
    (r.s.c = e.read_shift(4)),
    (r.e.c = e.read_shift(4)),
    r
  );
}
function ld(e, r) {
  return (
    r || (r = H(16)),
    r.write_shift(4, e.s.r),
    r.write_shift(4, e.e.r),
    r.write_shift(4, e.s.c),
    r.write_shift(4, e.e.c),
    r
  );
}
var hn = sl,
  bn = ld;
function Un(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function an(e, r) {
  return (r || H(8)).write_shift(8, e, 'f');
}
function cd(e) {
  var r = {},
    t = e.read_shift(1),
    n = t >>> 1,
    i = e.read_shift(1),
    a = e.read_shift(2, 'i'),
    s = e.read_shift(1),
    f = e.read_shift(1),
    l = e.read_shift(1);
  switch ((e.l++, n)) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = i;
      var o = gd[i];
      o && (r.rgb = uf(o));
      break;
    case 2:
      r.rgb = uf([s, f, l]);
      break;
    case 3:
      r.theme = i;
      break;
  }
  return a != 0 && (r.tint = a > 0 ? a / 32767 : a / 32768), r;
}
function ua(e, r) {
  if ((r || (r = H(8)), !e || e.auto))
    return r.write_shift(4, 0), r.write_shift(4, 0), r;
  e.index != null
    ? (r.write_shift(1, 2), r.write_shift(1, e.index))
    : e.theme != null
      ? (r.write_shift(1, 6), r.write_shift(1, e.theme))
      : (r.write_shift(1, 5), r.write_shift(1, 0));
  var t = e.tint || 0;
  if (
    (t > 0 ? (t *= 32767) : t < 0 && (t *= 32768),
    r.write_shift(2, t),
    !e.rgb || e.theme != null)
  )
    r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  else {
    var n = e.rgb || 'FFFFFF';
    typeof n == 'number' && (n = ('000000' + n.toString(16)).slice(-6)),
      r.write_shift(1, parseInt(n.slice(0, 2), 16)),
      r.write_shift(1, parseInt(n.slice(2, 4), 16)),
      r.write_shift(1, parseInt(n.slice(4, 6), 16)),
      r.write_shift(1, 255);
  }
  return r;
}
function ud(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = {
    fBold: r & 1,
    fItalic: r & 2,
    fUnderline: r & 4,
    fStrikeout: r & 8,
    fOutline: r & 16,
    fShadow: r & 32,
    fCondense: r & 64,
    fExtend: r & 128,
  };
  return t;
}
function hd(e, r) {
  r || (r = H(2));
  var t =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
var fl = 2,
  Ht = 3,
  Bi = 11,
  ha = 19,
  bi = 64,
  dd = 65,
  xd = 71,
  pd = 4108,
  vd = 4126,
  lt = 80,
  ef = {
    1: { n: 'CodePage', t: fl },
    2: { n: 'Category', t: lt },
    3: { n: 'PresentationFormat', t: lt },
    4: { n: 'ByteCount', t: Ht },
    5: { n: 'LineCount', t: Ht },
    6: { n: 'ParagraphCount', t: Ht },
    7: { n: 'SlideCount', t: Ht },
    8: { n: 'NoteCount', t: Ht },
    9: { n: 'HiddenCount', t: Ht },
    10: { n: 'MultimediaClipCount', t: Ht },
    11: { n: 'ScaleCrop', t: Bi },
    12: { n: 'HeadingPairs', t: pd },
    13: { n: 'TitlesOfParts', t: vd },
    14: { n: 'Manager', t: lt },
    15: { n: 'Company', t: lt },
    16: { n: 'LinksUpToDate', t: Bi },
    17: { n: 'CharacterCount', t: Ht },
    19: { n: 'SharedDoc', t: Bi },
    22: { n: 'HyperlinksChanged', t: Bi },
    23: { n: 'AppVersion', t: Ht, p: 'version' },
    24: { n: 'DigSig', t: dd },
    26: { n: 'ContentType', t: lt },
    27: { n: 'ContentStatus', t: lt },
    28: { n: 'Language', t: lt },
    29: { n: 'Version', t: lt },
    255: {},
    2147483648: { n: 'Locale', t: ha },
    2147483651: { n: 'Behavior', t: ha },
    1919054434: {},
  },
  tf = {
    1: { n: 'CodePage', t: fl },
    2: { n: 'Title', t: lt },
    3: { n: 'Subject', t: lt },
    4: { n: 'Author', t: lt },
    5: { n: 'Keywords', t: lt },
    6: { n: 'Comments', t: lt },
    7: { n: 'Template', t: lt },
    8: { n: 'LastAuthor', t: lt },
    9: { n: 'RevNumber', t: lt },
    10: { n: 'EditTime', t: bi },
    11: { n: 'LastPrinted', t: bi },
    12: { n: 'CreatedDate', t: bi },
    13: { n: 'ModifiedDate', t: bi },
    14: { n: 'PageCount', t: Ht },
    15: { n: 'WordCount', t: Ht },
    16: { n: 'CharCount', t: Ht },
    17: { n: 'Thumbnail', t: xd },
    18: { n: 'Application', t: lt },
    19: { n: 'DocSecurity', t: Ht },
    255: {},
    2147483648: { n: 'Locale', t: ha },
    2147483651: { n: 'Behavior', t: ha },
    1919054434: {},
  };
function md(e) {
  return e.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
  });
}
var _d = md([
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
  gd = Bt(_d),
  Oi = {
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
  Ed = {
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
  Ui = {
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
function ol() {
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
function ll(e, r) {
  var t = N1(Ed),
    n = [],
    i;
  (n[n.length] = tt),
    (n[n.length] = J('Types', null, {
      xmlns: it.CT,
      'xmlns:xsd': it.xsd,
      'xmlns:xsi': it.xsi,
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
          ContentType: Ui[l][r.bookType] || Ui[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = J('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: Ui[l][r.bookType] || Ui[l].xlsx,
        });
      });
    },
    f = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = J('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: t[l][0],
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
var Se = {
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
function cl(e) {
  var r = e.lastIndexOf('/');
  return e.slice(0, r + 1) + '_rels/' + e.slice(r + 1) + '.rels';
}
function Cn(e) {
  var r = [tt, J('Relationships', null, { xmlns: it.RELS })];
  return (
    dt(e['!id']).forEach(function (t) {
      r[r.length] = J('Relationship', null, e['!id'][t]);
    }),
    r.length > 2 &&
      ((r[r.length] = '</Relationships>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Oe(e, r, t, n, i, a) {
  if (
    (i || (i = {}),
    e['!id'] || (e['!id'] = {}),
    e['!idx'] || (e['!idx'] = 1),
    r < 0)
  )
    for (r = e['!idx']; e['!id']['rId' + r]; ++r);
  if (
    ((e['!idx'] = r + 1),
    (i.Id = 'rId' + r),
    (i.Type = n),
    (i.Target = t),
    [Se.HLINK, Se.XPATH, Se.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + r);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), r;
}
function Td(e) {
  var r = [tt];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),
    r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t)
    r.push(
      '  <manifest:file-entry manifest:full-path="' +
        e[t][0] +
        '" manifest:media-type="' +
        e[t][1] +
        `"/>
`,
    );
  return r.push('</manifest:manifest>'), r.join('');
}
function rf(e, r, t) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
      `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
      (t || 'odf') +
      '#' +
      r +
      `"/>
`,
    `  </rdf:Description>
`,
  ].join('');
}
function wd(e, r) {
  return [
    '  <rdf:Description rdf:about="' +
      e +
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
function Sd(e) {
  var r = [tt];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t)
    r.push(rf(e[t][0], e[t][1])), r.push(wd('', e[t][0]));
  return r.push(rf('', 'Document', 'pkg')), r.push('</rdf:RDF>'), r.join('');
}
function ul() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    ia.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var tn = [
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
function Ja(e, r, t, n, i) {
  i[e] != null ||
    r == null ||
    r === '' ||
    ((i[e] = r), (r = Re(r)), (n[n.length] = t ? J(e, r, t) : ut(e, r)));
}
function hl(e, r) {
  var t = r || {},
    n = [
      tt,
      J('cp:coreProperties', null, {
        'xmlns:cp': it.CORE_PROPS,
        'xmlns:dc': it.dc,
        'xmlns:dcterms': it.dcterms,
        'xmlns:dcmitype': it.dcmitype,
        'xmlns:xsi': it.xsi,
      }),
    ],
    i = {};
  if (!e && !t.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      Ja(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : m0(e.CreatedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      Ja(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : m0(e.ModifiedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != tn.length; ++a) {
    var s = tn[a],
      f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && Ja(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var On = [
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
  dl = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function xl(e) {
  var r = [],
    t = J;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (r[r.length] = tt),
    (r[r.length] = J('Properties', null, {
      xmlns: it.EXT_PROPS,
      'xmlns:vt': it.vt,
    })),
    On.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = Re(String(e[n[1]]));
            break;
          case 'bool':
            i = e[n[1]] ? 'true' : 'false';
            break;
        }
        i !== void 0 && (r[r.length] = t(n[0], i));
      }
    }),
    (r[r.length] = t(
      'HeadingPairs',
      t(
        'vt:vector',
        t('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>') +
          t('vt:variant', t('vt:i4', String(e.Worksheets))),
        { size: 2, baseType: 'variant' },
      ),
    )),
    (r[r.length] = t(
      'TitlesOfParts',
      t(
        'vt:vector',
        e.SheetNames.map(function (n) {
          return '<vt:lpstr>' + Re(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function pl(e) {
  var r = [
    tt,
    J('Properties', null, { xmlns: it.CUST_PROPS, 'xmlns:vt': it.vt }),
  ];
  if (!e) return r.join('');
  var t = 1;
  return (
    dt(e).forEach(function (i) {
      ++t,
        (r[r.length] = J('property', W1(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: t,
          name: Re(i),
        }));
    }),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
var nf = {
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
function Ad(e, r) {
  var t = [];
  return (
    dt(nf)
      .map(function (n) {
        for (var i = 0; i < tn.length; ++i) if (tn[i][1] == n) return tn[i];
        for (i = 0; i < On.length; ++i) if (On[i][1] == n) return On[i];
        throw n;
      })
      .forEach(function (n) {
        if (e[n[1]] != null) {
          var i =
            r && r.Props && r.Props[n[1]] != null ? r.Props[n[1]] : e[n[1]];
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
            t.push(ut(nf[n[1]] || n[1], i));
        }
      }),
    J('DocumentProperties', t.join(''), { xmlns: Vt.o })
  );
}
function yd(e, r) {
  var t = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      dt(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < tn.length; ++s) if (a == tn[s][1]) return;
          for (s = 0; s < On.length; ++s) if (a == On[s][1]) return;
          for (s = 0; s < t.length; ++s) if (a == t[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(J($s(a), f, { 'dt:dt': l }));
        }
      }),
    r &&
      dt(r).forEach(function (a) {
        if (
          Object.prototype.hasOwnProperty.call(r, a) &&
          !(e && Object.prototype.hasOwnProperty.call(e, a))
        ) {
          var s = r[a],
            f = 'string';
          typeof s == 'number'
            ? ((f = 'float'), (s = String(s)))
            : s === !0 || s === !1
              ? ((f = 'boolean'), (s = s ? '1' : '0'))
              : s instanceof Date
                ? ((f = 'dateTime.tz'), (s = s.toISOString()))
                : (s = String(s)),
            i.push(J($s(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + Vt.o + '">' + i.join('') + '</' + n + '>'
  );
}
function Fd(e) {
  var r = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    t = r.getTime() / 1e3 + 11644473600,
    n = t % Math.pow(2, 32),
    i = (t - n) / Math.pow(2, 32);
  (n *= 1e7), (i *= 1e7);
  var a = (n / Math.pow(2, 32)) | 0;
  a > 0 && ((n = n % Math.pow(2, 32)), (i += a));
  var s = H(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function af(e, r) {
  var t = H(4),
    n = H(4);
  switch ((t.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, r);
      break;
    case 5:
      (n = H(8)), n.write_shift(8, r, 'f');
      break;
    case 11:
      n.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      n = Fd(r);
      break;
    case 31:
    case 80:
      for (
        n = H(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)),
          n.write_shift(4, r.length + 1),
          n.write_shift(0, r, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + r);
  }
  return ct([t, n]);
}
var vl = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function Cd(e) {
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
function sf(e, r, t) {
  var n = H(8),
    i = [],
    a = [],
    s = 8,
    f = 0,
    l = H(8),
    o = H(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    o.write_shift(4, 1),
    a.push(l),
    i.push(o),
    (s += 8 + l.length),
    !r)
  ) {
    (o = H(8)), o.write_shift(4, 0), i.unshift(o);
    var c = [H(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var h = e[f][0];
      for (
        l = H(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)),
          l.write_shift(4, f + 2),
          l.write_shift(4, h.length + 1),
          l.write_shift(0, h, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = ct(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(r && !r[e[f][0]]) &&
      !(vl.indexOf(e[f][0]) > -1 || dl.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var u = e[f][1],
        x = 0;
      if (r) {
        x = +r[e[f][0]];
        var p = t[x];
        if (p.p == 'version' && typeof u == 'string') {
          var d = u.split('.');
          u = (+d[0] << 16) + (+d[1] || 0);
        }
        l = af(p.t, u);
      } else {
        var m = Cd(u);
        m == -1 && ((m = 31), (u = String(u))), (l = af(m, u));
      }
      a.push(l),
        (o = H(8)),
        o.write_shift(4, r ? x : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var y = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, y), (y += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), ct([n].concat(i).concat(a))
  );
}
function ff(e, r, t, n, i, a) {
  var s = H(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Ie.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, r, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = sf(e, t, n);
  if ((f.push(l), i)) {
    var o = sf(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return ct(f);
}
function Od(e, r) {
  r || (r = H(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function Rd(e, r) {
  return e.read_shift(r) === 1;
}
function Ct(e, r) {
  return r || (r = H(2)), r.write_shift(2, +!!e), r;
}
function ml(e) {
  return e.read_shift(2, 'u');
}
function Yt(e, r) {
  return r || (r = H(2)), r.write_shift(2, e), r;
}
function _l(e, r, t) {
  return (
    t || (t = H(2)),
    t.write_shift(1, r == 'e' ? +e : +!!e),
    t.write_shift(1, r == 'e' ? 1 : 0),
    t
  );
}
function gl(e, r, t) {
  var n = e.read_shift(t && t.biff >= 12 ? 2 : 1),
    i = 'sbcs-cont';
  if ((t && t.biff >= 8, !t || t.biff == 8)) {
    var a = e.read_shift(1);
    a && (i = 'dbcs-cont');
  } else t.biff == 12 && (i = 'wstr');
  t.biff >= 2 && t.biff <= 5 && (i = 'cpstr');
  var s = n ? e.read_shift(n, i) : '';
  return s;
}
function Nd(e) {
  var r = e.t || '',
    t = H(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var n = H(2 * r.length);
  n.write_shift(2 * r.length, r, 'utf16le');
  var i = [t, n];
  return ct(i);
}
function kd(e, r, t) {
  var n;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, 'cpstr');
    if (t.biff >= 12) return e.read_shift(r, 'dbcs-cont');
  }
  var i = e.read_shift(1);
  return (
    i === 0
      ? (n = e.read_shift(r, 'sbcs-cont'))
      : (n = e.read_shift(r, 'dbcs-cont')),
    n
  );
}
function Dd(e, r, t) {
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : kd(e, n, t);
}
function Id(e, r, t) {
  if (t.biff > 5) return Dd(e, r, t);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, t.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function El(e, r, t) {
  return (
    t || (t = H(3 + 2 * e.length)),
    t.write_shift(2, e.length),
    t.write_shift(1, 1),
    t.write_shift(31, e, 'utf16le'),
    t
  );
}
function of(e, r) {
  r || (r = H(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function Pd(e) {
  var r = H(512),
    t = 0,
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
  r.write_shift(4, 2), r.write_shift(4, a);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (t = 0; t < s.length; ++t) r.write_shift(4, s[t]);
  if (a == 28) (n = n.slice(1)), of(n, r);
  else if (a & 2) {
    for (
      s = 'e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), t = 0;
      t < s.length;
      ++t
    )
      r.write_shift(1, parseInt(s[t], 16));
    var f = i > -1 ? n.slice(0, i) : n;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t)
      r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), a & 8 && of(i > -1 ? n.slice(i + 1) : '', r);
  } else {
    for (
      s = '03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46'.split(' '), t = 0;
      t < s.length;
      ++t
    )
      r.write_shift(1, parseInt(s[t], 16));
    for (
      var l = 0;
      n.slice(l * 3, l * 3 + 3) == '../' || n.slice(l * 3, l * 3 + 3) == '..\\';

    )
      ++l;
    for (
      r.write_shift(2, l), r.write_shift(4, n.length - 3 * l + 1), t = 0;
      t < n.length - 3 * l;
      ++t
    )
      r.write_shift(1, n.charCodeAt(t + 3 * l) & 255);
    for (
      r.write_shift(1, 0),
        r.write_shift(2, 65535),
        r.write_shift(2, 57005),
        t = 0;
      t < 6;
      ++t
    )
      r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function sn(e, r, t, n) {
  return (
    n || (n = H(6)),
    n.write_shift(2, e),
    n.write_shift(2, r),
    n.write_shift(2, t || 0),
    n
  );
}
function Ld(e, r, t) {
  var n = t.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function Md(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r }, e: { c: i, r: t } };
}
function Tl(e, r) {
  return (
    r || (r = H(8)),
    r.write_shift(2, e.s.r),
    r.write_shift(2, e.e.r),
    r.write_shift(2, e.s.c),
    r.write_shift(2, e.e.c),
    r
  );
}
function J0(e, r, t) {
  var n = 1536,
    i = 16;
  switch (t.bookType) {
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
  var a = H(i);
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
function Bd(e, r) {
  var t = !r || r.biff == 8,
    n = H(t ? 112 : 54);
  for (
    n.write_shift(r.biff == 8 ? 2 : 1, 7),
      t && n.write_shift(1, 0),
      n.write_shift(4, 859007059),
      n.write_shift(4, 5458548 | (t ? 0 : 536870912));
    n.l < n.length;

  )
    n.write_shift(1, t ? 0 : 32);
  return n;
}
function bd(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1,
    n = H(8 + t * e.name.length);
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    r.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(t * e.name.length, e.name, r.biff < 8 ? 'sbcs' : 'utf16le');
  var i = n.slice(0, n.l);
  return (i.l = n.l), i;
}
function Ud(e, r) {
  var t = H(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = Nd(e[i]);
  var a = ct([t].concat(n));
  return (
    (a.parts = [t.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function Hd() {
  var e = H(18);
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
function Wd(e) {
  var r = H(18),
    t = 1718;
  return (
    e && e.RTL && (t |= 64),
    r.write_shift(2, t),
    r.write_shift(4, 0),
    r.write_shift(4, 64),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
function Vd(e, r) {
  var t = e.name || 'Arial',
    n = r && r.biff == 5,
    i = n ? 15 + t.length : 16 + 2 * t.length,
    a = H(i);
  return (
    a.write_shift(2, e.sz * 20),
    a.write_shift(4, 0),
    a.write_shift(2, 400),
    a.write_shift(4, 0),
    a.write_shift(2, 0),
    a.write_shift(1, t.length),
    n || a.write_shift(1, 1),
    a.write_shift((n ? 1 : 2) * t.length, t, n ? 'sbcs' : 'utf16le'),
    a
  );
}
function Gd(e, r, t, n) {
  var i = H(10);
  return sn(e, r, n, i), i.write_shift(4, t), i;
}
function $d(e, r, t, n, i) {
  var a = !i || i.biff == 8,
    s = H(8 + +a + (1 + a) * t.length);
  return (
    sn(e, r, n, s),
    s.write_shift(2, t.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * t.length, t, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function jd(e, r, t, n) {
  var i = t && t.biff == 5;
  n || (n = H(i ? 3 + r.length : 5 + 2 * r.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, r.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * r.length, r, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function zd(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2,
    n = H(2 * t + 6);
  return (
    n.write_shift(t, e.s.r),
    n.write_shift(t, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function lf(e, r, t, n) {
  var i = t && t.biff == 5;
  n || (n = H(i ? 16 : 20)),
    n.write_shift(2, 0),
    e.style
      ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
      : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, r << 4));
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
function Xd(e) {
  var r = H(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Kd(e, r, t, n, i, a) {
  var s = H(8);
  return sn(e, r, n, s), _l(t, a, s), s;
}
function qd(e, r, t, n) {
  var i = H(14);
  return sn(e, r, n, i), an(t, i), i;
}
function Yd(e, r, t) {
  if (t.biff < 8) return Jd(e, r, t);
  for (
    var n = [], i = e.l + r, a = e.read_shift(t.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(Ld(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function Jd(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = gl(e, r, t);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Zd(e) {
  var r = H(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) Tl(e[t], r);
  return r;
}
function Qd(e) {
  var r = H(24),
    t = at(e[0]);
  r.write_shift(2, t.r),
    r.write_shift(2, t.r),
    r.write_shift(2, t.c),
    r.write_shift(2, t.c);
  for (
    var n = 'd0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b'.split(' '), i = 0;
    i < 16;
    ++i
  )
    r.write_shift(1, parseInt(n[i], 16));
  return ct([r, Pd(e[1])]);
}
function ex(e) {
  var r = e[1].Tooltip,
    t = H(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var n = at(e[0]);
  t.write_shift(2, n.r),
    t.write_shift(2, n.r),
    t.write_shift(2, n.c),
    t.write_shift(2, n.c);
  for (var i = 0; i < r.length; ++i) t.write_shift(2, r.charCodeAt(i));
  return t.write_shift(2, 0), t;
}
function tx(e) {
  return e || (e = H(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function rx(e, r, t) {
  if (!t.cellStyles) return gr(e, r);
  var n = t && t.biff >= 12 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n),
    s = e.read_shift(n),
    f = e.read_shift(n),
    l = e.read_shift(2);
  n == 2 && (e.l += 2);
  var o = { s: i, e: a, w: s, ixfe: f, flags: l };
  return (t.biff >= 5 || !t.biff) && (o.level = (l >> 8) & 7), o;
}
function nx(e, r) {
  var t = H(12);
  t.write_shift(2, r),
    t.write_shift(2, r),
    t.write_shift(2, e.width * 256),
    t.write_shift(2, 0);
  var n = 0;
  return (
    e.hidden && (n |= 1),
    t.write_shift(1, n),
    (n = e.level || 0),
    t.write_shift(1, n),
    t.write_shift(2, 0),
    t
  );
}
function ix(e) {
  for (var r = H(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
function ax(e, r, t) {
  var n = H(15);
  return Ni(n, e, r), n.write_shift(8, t, 'f'), n;
}
function sx(e, r, t) {
  var n = H(9);
  return Ni(n, e, r), n.write_shift(2, t), n;
}
var fx = (function () {
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
      r = H0({
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
    function t(f, l) {
      var o = [],
        c = nn(1);
      switch (l.type) {
        case 'base64':
          c = ir(Rr(f));
          break;
        case 'binary':
          c = ir(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      Wt(c, 0);
      var h = c.read_shift(1),
        u = !!(h & 136),
        x = !1,
        p = !1;
      switch (h) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (x = !0), (u = !0);
          break;
        case 49:
          (x = !0), (u = !0);
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
          throw new Error('DBF Unsupported Version: ' + h.toString(16));
      }
      var d = 0,
        m = 521;
      h == 2 && (d = c.read_shift(2)),
        (c.l += 3),
        h != 2 && (d = c.read_shift(4)),
        d > 1048576 && (d = 1e6),
        h != 2 && (m = c.read_shift(2));
      var y = c.read_shift(2),
        F = l.codepage || 1252;
      h != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (F = e[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        p && (c.l += 36);
      for (
        var A = [],
          N = {},
          W = Math.min(c.length, h == 2 ? 521 : m - 10 - (x ? 264 : 0)),
          q = p ? 32 : 11;
        c.l < W && c[c.l] != 13;

      )
        switch (
          ((N = {}),
          (N.name = Ds.utils
            .decode(F, c.slice(c.l, c.l + q))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += q),
          (N.type = String.fromCharCode(c.read_shift(1))),
          h != 2 && !p && (N.offset = c.read_shift(4)),
          (N.len = c.read_shift(1)),
          h == 2 && (N.offset = c.read_shift(2)),
          (N.dec = c.read_shift(1)),
          N.name.length && A.push(N),
          h != 2 && (c.l += p ? 13 : 14),
          N.type)
        ) {
          case 'B':
            (!x || N.len != 8) &&
              l.WTF &&
              console.log('Skipping ' + N.name + ':' + N.type);
            break;
          case 'G':
          case 'P':
            l.WTF && console.log('Skipping ' + N.name + ':' + N.type);
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
            throw new Error('Unknown Field Type: ' + N.type);
        }
      if ((c[c.l] !== 13 && (c.l = m - 1), c.read_shift(1) !== 13))
        throw new Error('DBF Terminator not found ' + c.l + ' ' + c[c.l]);
      c.l = m;
      var O = 0,
        b = 0;
      for (o[0] = [], b = 0; b != A.length; ++b) o[0][b] = A[b].name;
      for (; d-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += y;
          continue;
        }
        for (++c.l, o[++O] = [], b = 0, b = 0; b != A.length; ++b) {
          var P = c.slice(c.l, c.l + A[b].len);
          (c.l += A[b].len), Wt(P, 0);
          var V = Ds.utils.decode(F, P);
          switch (A[b].type) {
            case 'C':
              V.trim().length && (o[O][b] = V.replace(/\s+$/, ''));
              break;
            case 'D':
              V.length === 8
                ? (o[O][b] = new Date(
                    +V.slice(0, 4),
                    +V.slice(4, 6) - 1,
                    +V.slice(6, 8),
                  ))
                : (o[O][b] = V);
              break;
            case 'F':
              o[O][b] = parseFloat(V.trim());
              break;
            case '+':
            case 'I':
              o[O][b] = p
                ? P.read_shift(-4, 'i') ^ 2147483648
                : P.read_shift(4, 'i');
              break;
            case 'L':
              switch (V.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  o[O][b] = !0;
                  break;
                case 'N':
                case 'F':
                  o[O][b] = !1;
                  break;
                case '':
                case '?':
                  break;
                default:
                  throw new Error('DBF Unrecognized L:|' + V + '|');
              }
              break;
            case 'M':
              if (!u)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + h.toString(16),
                );
              o[O][b] =
                '##MEMO##' + (p ? parseInt(V.trim(), 10) : P.read_shift(4));
              break;
            case 'N':
              (V = V.replace(/\u0000/g, '').trim()),
                V && V != '.' && (o[O][b] = +V || 0);
              break;
            case '@':
              o[O][b] = new Date(P.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              o[O][b] = new Date(
                (P.read_shift(4) - 2440588) * 864e5 + P.read_shift(4),
              );
              break;
            case 'Y':
              o[O][b] =
                P.read_shift(4, 'i') / 1e4 +
                (P.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              o[O][b] = -P.read_shift(-8, 'f');
              break;
            case 'B':
              if (x && A[b].len == 8) {
                o[O][b] = P.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              P.l += A[b].len;
              break;
            case '0':
              if (A[b].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + A[b].type);
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
      return l && l.sheetRows && (o = o.slice(0, l.sheetRows)), (l.DBF = A), o;
    }
    function n(f, l) {
      var o = l || {};
      o.dateNF || (o.dateNF = 'yyyymmdd');
      var c = Bn(t(f, o), o);
      return (
        (c['!cols'] = o.DBF.map(function (h) {
          return { wch: h.len, DBF: h };
        })),
        delete o.DBF,
        c
      );
    }
    function i(f, l) {
      try {
        return on(n(f, l), l);
      } catch (o) {
        if (l && l.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(f, l) {
      var o = l || {};
      if ((+o.codepage >= 0 && di(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = Pt(),
        h = ma(f, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        x = h.slice(1),
        p = f['!cols'] || [],
        d = 0,
        m = 0,
        y = 0,
        F = 1;
      for (d = 0; d < u.length; ++d) {
        if (((p[d] || {}).DBF || {}).name) {
          (u[d] = p[d].DBF.name), ++y;
          continue;
        }
        if (u[d] != null) {
          if (
            (++y,
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
      var A = Ue(f['!ref']),
        N = [],
        W = [],
        q = [];
      for (d = 0; d <= A.e.c - A.s.c; ++d) {
        var O = '',
          b = '',
          P = 0,
          V = [];
        for (m = 0; m < x.length; ++m) x[m][d] != null && V.push(x[m][d]);
        if (V.length == 0 || u[d] == null) {
          N[d] = '?';
          continue;
        }
        for (m = 0; m < V.length; ++m) {
          switch (typeof V[m]) {
            case 'number':
              b = 'B';
              break;
            case 'string':
              b = 'C';
              break;
            case 'boolean':
              b = 'L';
              break;
            case 'object':
              b = V[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              b = 'C';
          }
          (P = Math.max(P, String(V[m]).length)), (O = O && O != b ? 'C' : b);
        }
        P > 250 && (P = 250),
          (b = ((p[d] || {}).DBF || {}).type),
          b == 'C' && p[d].DBF.len > P && (P = p[d].DBF.len),
          O == 'B' &&
            b == 'N' &&
            ((O = 'N'), (q[d] = p[d].DBF.dec), (P = p[d].DBF.len)),
          (W[d] = O == 'C' || b == 'N' ? P : a[O] || 0),
          (F += W[d]),
          (N[d] = O);
      }
      var G = c.next(32);
      for (
        G.write_shift(4, 318902576),
          G.write_shift(4, x.length),
          G.write_shift(2, 296 + 32 * y),
          G.write_shift(2, F),
          d = 0;
        d < 4;
        ++d
      )
        G.write_shift(4, 0);
      for (
        G.write_shift(4, 0 | ((+r[So] || 3) << 8)), d = 0, m = 0;
        d < u.length;
        ++d
      )
        if (u[d] != null) {
          var X = c.next(32),
            ee = (u[d].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          X.write_shift(1, ee, 'sbcs'),
            X.write_shift(1, N[d] == '?' ? 'C' : N[d], 'sbcs'),
            X.write_shift(4, m),
            X.write_shift(1, W[d] || a[N[d]] || 0),
            X.write_shift(1, q[d] || 0),
            X.write_shift(1, 2),
            X.write_shift(4, 0),
            X.write_shift(1, 0),
            X.write_shift(4, 0),
            X.write_shift(4, 0),
            (m += W[d] || a[N[d]] || 0);
        }
      var Te = c.next(264);
      for (Te.write_shift(4, 13), d = 0; d < 65; ++d) Te.write_shift(4, 0);
      for (d = 0; d < x.length; ++d) {
        var ue = c.next(F);
        for (ue.write_shift(1, 0), m = 0; m < u.length; ++m)
          if (u[m] != null)
            switch (N[m]) {
              case 'L':
                ue.write_shift(1, x[d][m] == null ? 63 : x[d][m] ? 84 : 70);
                break;
              case 'B':
                ue.write_shift(8, x[d][m] || 0, 'f');
                break;
              case 'N':
                var He = '0';
                for (
                  typeof x[d][m] == 'number' &&
                    (He = x[d][m].toFixed(q[m] || 0)),
                    y = 0;
                  y < W[m] - He.length;
                  ++y
                )
                  ue.write_shift(1, 32);
                ue.write_shift(1, He, 'sbcs');
                break;
              case 'D':
                x[d][m]
                  ? (ue.write_shift(
                      4,
                      ('0000' + x[d][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    ue.write_shift(
                      2,
                      ('00' + (x[d][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    ue.write_shift(
                      2,
                      ('00' + x[d][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : ue.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var ke = String(x[d][m] != null ? x[d][m] : '').slice(0, W[m]);
                for (
                  ue.write_shift(1, ke, 'sbcs'), y = 0;
                  y < W[m] - ke.length;
                  ++y
                )
                  ue.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  ox = (function () {
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
      r = new RegExp(
        '\x1BN(' +
          dt(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      t = function (u, x) {
        var p = e[x];
        return typeof p == 'number' ? ks(p) : p;
      },
      n = function (u, x, p) {
        var d = ((x.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return d == 59 ? u : ks(d);
      };
    e['|'] = 254;
    function i(u, x) {
      switch (x.type) {
        case 'base64':
          return a(Rr(u), x);
        case 'binary':
          return a(u, x);
        case 'buffer':
          return a(ye && Buffer.isBuffer(u) ? u.toString('binary') : yi(u), x);
        case 'array':
          return a(Ma(u), x);
      }
      throw new Error('Unrecognized type ' + x.type);
    }
    function a(u, x) {
      var p = u.split(/[\n\r]+/),
        d = -1,
        m = -1,
        y = 0,
        F = 0,
        A = [],
        N = [],
        W = null,
        q = {},
        O = [],
        b = [],
        P = [],
        V = 0,
        G;
      for (+x.codepage >= 0 && di(+x.codepage); y !== p.length; ++y) {
        V = 0;
        var X = p[y]
            .trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(r, t),
          ee = X.replace(/;;/g, '\0')
            .split(';')
            .map(function (C) {
              return C.replace(/\u0000/g, ';');
            }),
          Te = ee[0],
          ue;
        if (X.length > 0)
          switch (Te) {
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
              ee[1].charAt(0) == 'P' && N.push(X.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var He = !1,
                ke = !1,
                ze = !1,
                Ve = !1,
                wt = -1,
                xt = -1;
              for (F = 1; F < ee.length; ++F)
                switch (ee[F].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(ee[F].slice(1)) - 1), (ke = !0);
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ee[F].slice(1)) - 1,
                        ke || (m = 0),
                        G = A.length;
                      G <= d;
                      ++G
                    )
                      A[G] = [];
                    break;
                  case 'K':
                    (ue = ee[F].slice(1)),
                      ue.charAt(0) === '"'
                        ? (ue = ue.slice(1, ue.length - 1))
                        : ue === 'TRUE'
                          ? (ue = !0)
                          : ue === 'FALSE'
                            ? (ue = !1)
                            : isNaN(Cr(ue))
                              ? isNaN(pi(ue).getDate()) || (ue = Rt(ue))
                              : ((ue = Cr(ue)),
                                W !== null && Lo(W) && (ue = Uo(ue))),
                      (He = !0);
                    break;
                  case 'E':
                    Ve = !0;
                    var S = sp(ee[F].slice(1), { r: d, c: m });
                    A[d][m] = [A[d][m], S];
                    break;
                  case 'S':
                    (ze = !0), (A[d][m] = [A[d][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    wt = parseInt(ee[F].slice(1)) - 1;
                    break;
                  case 'C':
                    xt = parseInt(ee[F].slice(1)) - 1;
                    break;
                  default:
                    if (x && x.WTF) throw new Error('SYLK bad record ' + X);
                }
              if (
                (He &&
                  (A[d][m] && A[d][m].length == 2
                    ? (A[d][m][0] = ue)
                    : (A[d][m] = ue),
                  (W = null)),
                ze)
              ) {
                if (Ve)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var M = wt > -1 && A[wt][xt];
                if (!M || !M[1])
                  throw new Error('SYLK shared formula cannot find base');
                A[d][m][1] = fp(M[1], { r: d - wt, c: m - xt });
              }
              break;
            case 'F':
              var R = 0;
              for (F = 1; F < ee.length; ++F)
                switch (ee[F].charAt(0)) {
                  case 'X':
                    (m = parseInt(ee[F].slice(1)) - 1), ++R;
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ee[F].slice(1)) - 1, G = A.length;
                      G <= d;
                      ++G
                    )
                      A[G] = [];
                    break;
                  case 'M':
                    V = parseInt(ee[F].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    W = N[parseInt(ee[F].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      P = ee[F].slice(1).split(' '), G = parseInt(P[0], 10);
                      G <= parseInt(P[1], 10);
                      ++G
                    )
                      (V = parseInt(P[2], 10)),
                        (b[G - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                        Z0(b[G - 1]);
                    break;
                  case 'C':
                    (m = parseInt(ee[F].slice(1)) - 1), b[m] || (b[m] = {});
                    break;
                  case 'R':
                    (d = parseInt(ee[F].slice(1)) - 1),
                      O[d] || (O[d] = {}),
                      V > 0
                        ? ((O[d].hpt = V), (O[d].hpx = Fl(V)))
                        : V === 0 && (O[d].hidden = !0);
                    break;
                  default:
                    if (x && x.WTF) throw new Error('SYLK bad record ' + X);
                }
              R < 1 && (W = null);
              break;
            default:
              if (x && x.WTF) throw new Error('SYLK bad record ' + X);
          }
      }
      return (
        O.length > 0 && (q['!rows'] = O),
        b.length > 0 && (q['!cols'] = b),
        x && x.sheetRows && (A = A.slice(0, x.sheetRows)),
        [A, q]
      );
    }
    function s(u, x) {
      var p = i(u, x),
        d = p[0],
        m = p[1],
        y = Bn(d, x);
      return (
        dt(m).forEach(function (F) {
          y[F] = m[F];
        }),
        y
      );
    }
    function f(u, x) {
      return on(s(u, x), x);
    }
    function l(u, x, p, d) {
      var m = 'C;Y' + (p + 1) + ';X' + (d + 1) + ';K';
      switch (u.t) {
        case 'n':
          (m += u.v || 0), u.f && !u.F && (m += ';E' + es(u.f, { r: p, c: d }));
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
    function o(u, x) {
      x.forEach(function (p, d) {
        var m = 'F;W' + (d + 1) + ' ' + (d + 1) + ' ';
        p.hidden
          ? (m += '0')
          : (typeof p.width == 'number' && !p.wpx && (p.wpx = da(p.width)),
            typeof p.wpx == 'number' && !p.wch && (p.wch = xa(p.wpx)),
            typeof p.wch == 'number' && (m += Math.round(p.wch))),
          m.charAt(m.length - 1) != ' ' && u.push(m);
      });
    }
    function c(u, x) {
      x.forEach(function (p, d) {
        var m = 'F;';
        p.hidden
          ? (m += 'M0;')
          : p.hpt
            ? (m += 'M' + 20 * p.hpt + ';')
            : p.hpx && (m += 'M' + 20 * pa(p.hpx) + ';'),
          m.length > 2 && u.push(m + 'R' + (d + 1));
      });
    }
    function h(u, x) {
      var p = ['ID;PWXL;N;E'],
        d = [],
        m = Ue(u['!ref']),
        y,
        F = Array.isArray(u),
        A = `\r
`;
      p.push('P;PGeneral'),
        p.push('F;P0;DG0G8;M255'),
        u['!cols'] && o(p, u['!cols']),
        u['!rows'] && c(p, u['!rows']),
        p.push(
          'B;Y' +
            (m.e.r - m.s.r + 1) +
            ';X' +
            (m.e.c - m.s.c + 1) +
            ';D' +
            [m.s.c, m.s.r, m.e.c, m.e.r].join(' '),
        );
      for (var N = m.s.r; N <= m.e.r; ++N)
        for (var W = m.s.c; W <= m.e.c; ++W) {
          var q = Ne({ r: N, c: W });
          (y = F ? (u[N] || [])[W] : u[q]),
            !(!y || (y.v == null && (!y.f || y.F))) && d.push(l(y, u, N, W));
        }
      return p.join(A) + A + d.join(A) + A + 'E' + A;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: h };
  })(),
  lx = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return r(Rr(a), s);
        case 'binary':
          return r(a, s);
        case 'buffer':
          return r(ye && Buffer.isBuffer(a) ? a.toString('binary') : yi(a), s);
        case 'array':
          return r(Ma(a), s);
      }
      throw new Error('Unrecognized type ' + s.type);
    }
    function r(a, s) {
      for (
        var f = a.split(`
`),
          l = -1,
          o = -1,
          c = 0,
          h = [];
        c !== f.length;
        ++c
      ) {
        if (f[c].trim() === 'BOT') {
          (h[++l] = []), (o = 0);
          continue;
        }
        if (!(l < 0)) {
          var u = f[c].trim().split(','),
            x = u[0],
            p = u[1];
          ++c;
          for (
            var d = f[c] || '';
            (d.match(/["]/g) || []).length & 1 && c < f.length - 1;

          )
            d +=
              `
` + f[++c];
          switch (((d = d.trim()), +x)) {
            case -1:
              if (d === 'BOT') {
                (h[++l] = []), (o = 0);
                continue;
              } else if (d !== 'EOD')
                throw new Error('Unrecognized DIF special command ' + d);
              break;
            case 0:
              d === 'TRUE'
                ? (h[l][o] = !0)
                : d === 'FALSE'
                  ? (h[l][o] = !1)
                  : isNaN(Cr(p))
                    ? isNaN(pi(p).getDate())
                      ? (h[l][o] = p)
                      : (h[l][o] = Rt(p))
                    : (h[l][o] = Cr(p)),
                ++o;
              break;
            case 1:
              (d = d.slice(1, d.length - 1)),
                (d = d.replace(/""/g, '"')),
                d && d.match(/^=".*"$/) && (d = d.slice(2, -1)),
                (h[l][o++] = d !== '' ? d : null);
              break;
          }
          if (d === 'EOD') break;
        }
      }
      return s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h;
    }
    function t(a, s) {
      return Bn(e(a, s), s);
    }
    function n(a, s) {
      return on(t(a, s), s);
    }
    var i = (function () {
      var a = function (l, o, c, h, u) {
          l.push(o),
            l.push(c + ',' + h),
            l.push('"' + u.replace(/"/g, '""') + '"');
        },
        s = function (l, o, c, h) {
          l.push(o + ',' + c),
            l.push(o == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
        };
      return function (l) {
        var o = [],
          c = Ue(l['!ref']),
          h,
          u = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var x = c.s.r; x <= c.e.r; ++x) {
          s(o, -1, 0, 'BOT');
          for (var p = c.s.c; p <= c.e.c; ++p) {
            var d = Ne({ r: x, c: p });
            if (((h = u ? (l[x] || [])[p] : l[d]), !h)) {
              s(o, 1, 0, '');
              continue;
            }
            switch (h.t) {
              case 'n':
                var m = h.w;
                !m && h.v != null && (m = h.v),
                  m == null
                    ? h.f && !h.F
                      ? s(o, 1, 0, '=' + h.f)
                      : s(o, 1, 0, '')
                    : s(o, 0, m, 'V');
                break;
              case 'b':
                s(o, 0, h.v ? 1 : 0, h.v ? 'TRUE' : 'FALSE');
                break;
              case 's':
                s(o, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
                break;
              case 'd':
                h.w || (h.w = Vr(h.z || qe[14], Mt(Rt(h.v)))),
                  s(o, 0, h.w, 'V');
                break;
              default:
                s(o, 1, 0, '');
            }
          }
        }
        s(o, -1, 0, 'EOD');
        var y = `\r
`,
          F = o.join(y);
        return F;
      };
    })();
    return { to_workbook: n, to_sheet: t, from_sheet: i };
  })(),
  wl = (function () {
    function e(h) {
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
    function t(h, u) {
      for (
        var x = h.split(`
`),
          p = -1,
          d = -1,
          m = 0,
          y = [];
        m !== x.length;
        ++m
      ) {
        var F = x[m].trim().split(':');
        if (F[0] === 'cell') {
          var A = at(F[1]);
          if (y.length <= A.r)
            for (p = y.length; p <= A.r; ++p) y[p] || (y[p] = []);
          switch (((p = A.r), (d = A.c), F[2])) {
            case 't':
              y[p][d] = e(F[3]);
              break;
            case 'v':
              y[p][d] = +F[3];
              break;
            case 'vtf':
              var N = F[F.length - 1];
            case 'vtc':
              switch (F[3]) {
                case 'nl':
                  y[p][d] = !!+F[4];
                  break;
                default:
                  y[p][d] = +F[4];
                  break;
              }
              F[2] == 'vtf' && (y[p][d] = [y[p][d], N]);
          }
        }
      }
      return u && u.sheetRows && (y = y.slice(0, u.sheetRows)), y;
    }
    function n(h, u) {
      return Bn(t(h, u), u);
    }
    function i(h, u) {
      return on(n(h, u), u);
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
    function o(h) {
      if (!h || !h['!ref']) return '';
      for (
        var u = [],
          x = [],
          p,
          d = '',
          m = jt(h['!ref']),
          y = Array.isArray(h),
          F = m.s.r;
        F <= m.e.r;
        ++F
      )
        for (var A = m.s.c; A <= m.e.c; ++A)
          if (
            ((d = Ne({ r: F, c: A })),
            (p = y ? (h[F] || [])[A] : h[d]),
            !(!p || p.v == null || p.t === 'z'))
          ) {
            switch (((x = ['cell', d, 't']), p.t)) {
              case 's':
              case 'str':
                x.push(r(p.v));
                break;
              case 'n':
                p.f
                  ? ((x[2] = 'vtf'),
                    (x[3] = 'n'),
                    (x[4] = p.v),
                    (x[5] = r(p.f)))
                  : ((x[2] = 'v'), (x[3] = p.v));
                break;
              case 'b':
                (x[2] = 'vt' + (p.f ? 'f' : 'c')),
                  (x[3] = 'nl'),
                  (x[4] = p.v ? '1' : '0'),
                  (x[5] = r(p.f || (p.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var N = Mt(Rt(p.v));
                (x[2] = 'vtc'),
                  (x[3] = 'nd'),
                  (x[4] = '' + N),
                  (x[5] = p.w || Vr(p.z || qe[14], N));
                break;
              case 'e':
                continue;
            }
            u.push(x.join(':'));
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
      return [a, s, f, s, o(h), l].join(`
`);
    }
    return { to_workbook: i, to_sheet: n, from_sheet: c };
  })(),
  cx = (function () {
    function e(c, h, u, x, p) {
      p.raw
        ? (h[u][x] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (h[u][x] = !0)
            : c === 'FALSE'
              ? (h[u][x] = !1)
              : isNaN(Cr(c))
                ? isNaN(pi(c).getDate())
                  ? (h[u][x] = c)
                  : (h[u][x] = Rt(c))
                : (h[u][x] = Cr(c)));
    }
    function r(c, h) {
      var u = h || {},
        x = [];
      if (!c || c.length === 0) return x;
      for (
        var p = c.split(/[\r\n]/), d = p.length - 1;
        d >= 0 && p[d].length === 0;

      )
        --d;
      for (var m = 10, y = 0, F = 0; F <= d; ++F)
        (y = p[F].indexOf(' ')),
          y == -1 ? (y = p[F].length) : y++,
          (m = Math.max(m, y));
      for (F = 0; F <= d; ++F) {
        x[F] = [];
        var A = 0;
        for (
          e(p[F].slice(0, m).trim(), x, F, A, u), A = 1;
          A <= (p[F].length - m) / 10 + 1;
          ++A
        )
          e(p[F].slice(m + (A - 1) * 10, m + A * 10).trim(), x, F, A, u);
      }
      return u.sheetRows && (x = x.slice(0, u.sheetRows)), x;
    }
    var t = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var h = {}, u = !1, x = 0, p = 0; x < c.length; ++x)
        (p = c.charCodeAt(x)) == 34
          ? (u = !u)
          : !u && p in t && (h[p] = (h[p] || 0) + 1);
      p = [];
      for (x in h)
        Object.prototype.hasOwnProperty.call(h, x) && p.push([h[x], x]);
      if (!p.length) {
        h = n;
        for (x in h)
          Object.prototype.hasOwnProperty.call(h, x) && p.push([h[x], x]);
      }
      return (
        p.sort(function (d, m) {
          return d[0] - m[0] || n[d[1]] - n[m[1]];
        }),
        t[p.pop()[1]] || 44
      );
    }
    function a(c, h) {
      var u = h || {},
        x = '',
        p = u.dense ? [] : {},
        d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((x = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((x = c.charAt(4)), (c = c.slice(6)))
            : (x = i(c.slice(0, 1024)))
        : u && u.FS
          ? (x = u.FS)
          : (x = i(c.slice(0, 1024)));
      var m = 0,
        y = 0,
        F = 0,
        A = 0,
        N = 0,
        W = x.charCodeAt(0),
        q = !1,
        O = 0,
        b = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var P = u.dateNF != null ? F1(u.dateNF) : null;
      function V() {
        var G = c.slice(A, N),
          X = {};
        if (
          (G.charAt(0) == '"' &&
            G.charAt(G.length - 1) == '"' &&
            (G = G.slice(1, -1).replace(/""/g, '"')),
          G.length === 0)
        )
          X.t = 'z';
        else if (u.raw) (X.t = 's'), (X.v = G);
        else if (G.trim().length === 0) (X.t = 's'), (X.v = G);
        else if (G.charCodeAt(0) == 61)
          G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34
            ? ((X.t = 's'), (X.v = G.slice(2, -1).replace(/""/g, '"')))
            : op(G)
              ? ((X.t = 'n'), (X.f = G.slice(1)))
              : ((X.t = 's'), (X.v = G));
        else if (G == 'TRUE') (X.t = 'b'), (X.v = !0);
        else if (G == 'FALSE') (X.t = 'b'), (X.v = !1);
        else if (!isNaN((F = Cr(G))))
          (X.t = 'n'), u.cellText !== !1 && (X.w = G), (X.v = F);
        else if (!isNaN(pi(G).getDate()) || (P && G.match(P))) {
          X.z = u.dateNF || qe[14];
          var ee = 0;
          P &&
            G.match(P) &&
            ((G = C1(G, u.dateNF, G.match(P) || [])), (ee = 1)),
            u.cellDates
              ? ((X.t = 'd'), (X.v = Rt(G, ee)))
              : ((X.t = 'n'), (X.v = Mt(Rt(G, ee)))),
            u.cellText !== !1 &&
              (X.w = Vr(X.z, X.v instanceof Date ? Mt(X.v) : X.v)),
            u.cellNF || delete X.z;
        } else (X.t = 's'), (X.v = G);
        if (
          (X.t == 'z' ||
            (u.dense
              ? (p[m] || (p[m] = []), (p[m][y] = X))
              : (p[Ne({ c: y, r: m })] = X)),
          (A = N + 1),
          (b = c.charCodeAt(A)),
          d.e.c < y && (d.e.c = y),
          d.e.r < m && (d.e.r = m),
          O == W)
        )
          ++y;
        else if (((y = 0), ++m, u.sheetRows && u.sheetRows <= m)) return !0;
      }
      e: for (; N < c.length; ++N)
        switch ((O = c.charCodeAt(N))) {
          case 34:
            b === 34 && (q = !q);
            break;
          case W:
          case 10:
          case 13:
            if (!q && V()) break e;
            break;
        }
      return N - A > 0 && V(), (p['!ref'] = et(d)), p;
    }
    function s(c, h) {
      return !(h && h.PRN) ||
        h.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, h)
        : Bn(r(c, h), h);
    }
    function f(c, h) {
      var u = '',
        x = h.type == 'string' ? [0, 0, 0, 0] : w_(c, h);
      switch (h.type) {
        case 'base64':
          u = Rr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          h.codepage == 65001
            ? (u = c.toString('utf8'))
            : (h.codepage,
              (u = ye && Buffer.isBuffer(c) ? c.toString('binary') : yi(c)));
          break;
        case 'array':
          u = Ma(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + h.type);
      }
      return (
        x[0] == 239 && x[1] == 187 && x[2] == 191
          ? (u = ii(u.slice(3)))
          : h.type != 'string' && h.type != 'buffer' && h.codepage == 65001
            ? (u = ii(u))
            : h.type == 'binary',
        u.slice(0, 19) == 'socialcalc:version:'
          ? wl.to_sheet(h.type == 'string' ? u : ii(u), h)
          : s(u, h)
      );
    }
    function l(c, h) {
      return on(f(c, h), h);
    }
    function o(c) {
      for (
        var h = [], u = Ue(c['!ref']), x, p = Array.isArray(c), d = u.s.r;
        d <= u.e.r;
        ++d
      ) {
        for (var m = [], y = u.s.c; y <= u.e.c; ++y) {
          var F = Ne({ r: d, c: y });
          if (((x = p ? (c[d] || [])[y] : c[F]), !x || x.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var A = (x.w || (Nr(x), x.w) || '').slice(0, 10);
            A.length < 10;

          )
            A += ' ';
          m.push(A + (y === 0 ? ' ' : ''));
        }
        h.push(m.join(''));
      }
      return h.join(`
`);
    }
    return { to_workbook: l, to_sheet: f, from_sheet: o };
  })(),
  cf = (function () {
    function e(S, M, R) {
      if (S) {
        Wt(S, S.l || 0);
        for (var C = R.Enum || wt; S.l < S.length; ) {
          var z = S.read_shift(2),
            fe = C[z] || C[65535],
            le = S.read_shift(2),
            se = S.l + le,
            te = fe.f && fe.f(S, le, R);
          if (((S.l = se), M(te, fe, z))) return;
        }
      }
    }
    function r(S, M) {
      switch (M.type) {
        case 'base64':
          return t(ir(Rr(S)), M);
        case 'binary':
          return t(ir(S), M);
        case 'buffer':
        case 'array':
          return t(S, M);
      }
      throw 'Unsupported type ' + M.type;
    }
    function t(S, M) {
      if (!S) return S;
      var R = M || {},
        C = R.dense ? [] : {},
        z = 'Sheet1',
        fe = '',
        le = 0,
        se = {},
        te = [],
        Fe = [],
        ge = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        nt = R.sheetRows || 0;
      if (
        S[2] == 0 &&
        (S[3] == 8 || S[3] == 9) &&
        S.length >= 16 &&
        S[14] == 5 &&
        S[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (S[2] == 2)
        (R.Enum = wt),
          e(
            S,
            function (ae, St, zt) {
              switch (zt) {
                case 0:
                  (R.vers = ae), ae >= 4096 && (R.qpro = !0);
                  break;
                case 6:
                  ge = ae;
                  break;
                case 204:
                  ae && (fe = ae);
                  break;
                case 222:
                  fe = ae;
                  break;
                case 15:
                case 51:
                  R.qpro || (ae[1].v = ae[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  zt == 14 &&
                    (ae[2] & 112) == 112 &&
                    (ae[2] & 15) > 1 &&
                    (ae[2] & 15) < 15 &&
                    ((ae[1].z = R.dateNF || qe[14]),
                    R.cellDates && ((ae[1].t = 'd'), (ae[1].v = Uo(ae[1].v)))),
                    R.qpro &&
                      ae[3] > le &&
                      ((C['!ref'] = et(ge)),
                      (se[z] = C),
                      te.push(z),
                      (C = R.dense ? [] : {}),
                      (ge = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (le = ae[3]),
                      (z = fe || 'Sheet' + (le + 1)),
                      (fe = ''));
                  var Er = R.dense ? (C[ae[0].r] || [])[ae[0].c] : C[Ne(ae[0])];
                  if (Er) {
                    (Er.t = ae[1].t),
                      (Er.v = ae[1].v),
                      ae[1].z != null && (Er.z = ae[1].z),
                      ae[1].f != null && (Er.f = ae[1].f);
                    break;
                  }
                  R.dense
                    ? (C[ae[0].r] || (C[ae[0].r] = []),
                      (C[ae[0].r][ae[0].c] = ae[1]))
                    : (C[Ne(ae[0])] = ae[1]);
                  break;
              }
            },
            R,
          );
      else if (S[2] == 26 || S[2] == 14)
        (R.Enum = xt),
          S[2] == 14 && ((R.qpro = !0), (S.l = 0)),
          e(
            S,
            function (ae, St, zt) {
              switch (zt) {
                case 204:
                  z = ae;
                  break;
                case 22:
                  ae[1].v = ae[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (ae[3] > le &&
                      ((C['!ref'] = et(ge)),
                      (se[z] = C),
                      te.push(z),
                      (C = R.dense ? [] : {}),
                      (ge = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (le = ae[3]),
                      (z = 'Sheet' + (le + 1))),
                    nt > 0 && ae[0].r >= nt)
                  )
                    break;
                  R.dense
                    ? (C[ae[0].r] || (C[ae[0].r] = []),
                      (C[ae[0].r][ae[0].c] = ae[1]))
                    : (C[Ne(ae[0])] = ae[1]),
                    ge.e.c < ae[0].c && (ge.e.c = ae[0].c),
                    ge.e.r < ae[0].r && (ge.e.r = ae[0].r);
                  break;
                case 27:
                  ae[14e3] && (Fe[ae[14e3][0]] = ae[14e3][1]);
                  break;
                case 1537:
                  (Fe[ae[0]] = ae[1]), ae[0] == le && (z = ae[1]);
                  break;
              }
            },
            R,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + S[2]);
      if (
        ((C['!ref'] = et(ge)), (se[fe || z] = C), te.push(fe || z), !Fe.length)
      )
        return { SheetNames: te, Sheets: se };
      for (var we = {}, Zt = [], Be = 0; Be < Fe.length; ++Be)
        se[te[Be]]
          ? (Zt.push(Fe[Be] || te[Be]), (we[Fe[Be]] = se[Fe[Be]] || se[te[Be]]))
          : (Zt.push(Fe[Be]), (we[Fe[Be]] = { '!ref': 'A1' }));
      return { SheetNames: Zt, Sheets: we };
    }
    function n(S, M) {
      var R = M || {};
      if ((+R.codepage >= 0 && di(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var C = Pt(),
        z = Ue(S['!ref']),
        fe = Array.isArray(S),
        le = [];
      Z(C, 0, a(1030)), Z(C, 6, l(z));
      for (var se = Math.min(z.e.r, 8191), te = z.s.r; te <= se; ++te)
        for (var Fe = ht(te), ge = z.s.c; ge <= z.e.c; ++ge) {
          te === z.s.r && (le[ge] = gt(ge));
          var nt = le[ge] + Fe,
            we = fe ? (S[te] || [])[ge] : S[nt];
          if (!(!we || we.t == 'z'))
            if (we.t == 'n')
              (we.v | 0) == we.v && we.v >= -32768 && we.v <= 32767
                ? Z(C, 13, x(te, ge, we.v))
                : Z(C, 14, d(te, ge, we.v));
            else {
              var Zt = Nr(we);
              Z(C, 15, h(te, ge, Zt.slice(0, 239)));
            }
        }
      return Z(C, 1), C.end();
    }
    function i(S, M) {
      var R = M || {};
      if ((+R.codepage >= 0 && di(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var C = Pt();
      Z(C, 0, s(S));
      for (var z = 0, fe = 0; z < S.SheetNames.length; ++z)
        (S.Sheets[S.SheetNames[z]] || {})['!ref'] &&
          Z(C, 27, Ve(S.SheetNames[z], fe++));
      var le = 0;
      for (z = 0; z < S.SheetNames.length; ++z) {
        var se = S.Sheets[S.SheetNames[z]];
        if (!(!se || !se['!ref'])) {
          for (
            var te = Ue(se['!ref']),
              Fe = Array.isArray(se),
              ge = [],
              nt = Math.min(te.e.r, 8191),
              we = te.s.r;
            we <= nt;
            ++we
          )
            for (var Zt = ht(we), Be = te.s.c; Be <= te.e.c; ++Be) {
              we === te.s.r && (ge[Be] = gt(Be));
              var ae = ge[Be] + Zt,
                St = Fe ? (se[we] || [])[Be] : se[ae];
              if (!(!St || St.t == 'z'))
                if (St.t == 'n') Z(C, 23, V(we, Be, le, St.v));
                else {
                  var zt = Nr(St);
                  Z(C, 22, O(we, Be, le, zt.slice(0, 239)));
                }
            }
          ++le;
        }
      }
      return Z(C, 1), C.end();
    }
    function a(S) {
      var M = H(2);
      return M.write_shift(2, S), M;
    }
    function s(S) {
      var M = H(26);
      M.write_shift(2, 4096), M.write_shift(2, 4), M.write_shift(4, 0);
      for (var R = 0, C = 0, z = 0, fe = 0; fe < S.SheetNames.length; ++fe) {
        var le = S.SheetNames[fe],
          se = S.Sheets[le];
        if (!(!se || !se['!ref'])) {
          ++z;
          var te = jt(se['!ref']);
          R < te.e.r && (R = te.e.r), C < te.e.c && (C = te.e.c);
        }
      }
      return (
        R > 8191 && (R = 8191),
        M.write_shift(2, R),
        M.write_shift(1, z),
        M.write_shift(1, C),
        M.write_shift(2, 0),
        M.write_shift(2, 0),
        M.write_shift(1, 1),
        M.write_shift(1, 2),
        M.write_shift(4, 0),
        M.write_shift(4, 0),
        M
      );
    }
    function f(S, M, R) {
      var C = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return M == 8 && R.qpro
        ? ((C.s.c = S.read_shift(1)),
          S.l++,
          (C.s.r = S.read_shift(2)),
          (C.e.c = S.read_shift(1)),
          S.l++,
          (C.e.r = S.read_shift(2)),
          C)
        : ((C.s.c = S.read_shift(2)),
          (C.s.r = S.read_shift(2)),
          M == 12 && R.qpro && (S.l += 2),
          (C.e.c = S.read_shift(2)),
          (C.e.r = S.read_shift(2)),
          M == 12 && R.qpro && (S.l += 2),
          C.s.c == 65535 && (C.s.c = C.e.c = C.s.r = C.e.r = 0),
          C);
    }
    function l(S) {
      var M = H(8);
      return (
        M.write_shift(2, S.s.c),
        M.write_shift(2, S.s.r),
        M.write_shift(2, S.e.c),
        M.write_shift(2, S.e.r),
        M
      );
    }
    function o(S, M, R) {
      var C = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        R.qpro && R.vers != 20768
          ? ((C[0].c = S.read_shift(1)),
            (C[3] = S.read_shift(1)),
            (C[0].r = S.read_shift(2)),
            (S.l += 2))
          : ((C[2] = S.read_shift(1)),
            (C[0].c = S.read_shift(2)),
            (C[0].r = S.read_shift(2))),
        C
      );
    }
    function c(S, M, R) {
      var C = S.l + M,
        z = o(S, M, R);
      if (((z[1].t = 's'), R.vers == 20768)) {
        S.l++;
        var fe = S.read_shift(1);
        return (z[1].v = S.read_shift(fe, 'utf8')), z;
      }
      return R.qpro && S.l++, (z[1].v = S.read_shift(C - S.l, 'cstr')), z;
    }
    function h(S, M, R) {
      var C = H(7 + R.length);
      C.write_shift(1, 255),
        C.write_shift(2, M),
        C.write_shift(2, S),
        C.write_shift(1, 39);
      for (var z = 0; z < C.length; ++z) {
        var fe = R.charCodeAt(z);
        C.write_shift(1, fe >= 128 ? 95 : fe);
      }
      return C.write_shift(1, 0), C;
    }
    function u(S, M, R) {
      var C = o(S, M, R);
      return (C[1].v = S.read_shift(2, 'i')), C;
    }
    function x(S, M, R) {
      var C = H(7);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, M),
        C.write_shift(2, S),
        C.write_shift(2, R, 'i'),
        C
      );
    }
    function p(S, M, R) {
      var C = o(S, M, R);
      return (C[1].v = S.read_shift(8, 'f')), C;
    }
    function d(S, M, R) {
      var C = H(13);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, M),
        C.write_shift(2, S),
        C.write_shift(8, R, 'f'),
        C
      );
    }
    function m(S, M, R) {
      var C = S.l + M,
        z = o(S, M, R);
      if (((z[1].v = S.read_shift(8, 'f')), R.qpro)) S.l = C;
      else {
        var fe = S.read_shift(2);
        N(S.slice(S.l, S.l + fe), z), (S.l += fe);
      }
      return z;
    }
    function y(S, M, R) {
      var C = M & 32768;
      return (
        (M &= -32769),
        (M = (C ? S : 0) + (M >= 8192 ? M - 16384 : M)),
        (C ? '' : '$') + (R ? gt(M) : ht(M))
      );
    }
    var F = {
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
      A = [
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
    function N(S, M) {
      Wt(S, 0);
      for (
        var R = [], C = 0, z = '', fe = '', le = '', se = '';
        S.l < S.length;

      ) {
        var te = S[S.l++];
        switch (te) {
          case 0:
            R.push(S.read_shift(8, 'f'));
            break;
          case 1:
            (fe = y(M[0].c, S.read_shift(2), !0)),
              (z = y(M[0].r, S.read_shift(2), !1)),
              R.push(fe + z);
            break;
          case 2:
            {
              var Fe = y(M[0].c, S.read_shift(2), !0),
                ge = y(M[0].r, S.read_shift(2), !1);
              (fe = y(M[0].c, S.read_shift(2), !0)),
                (z = y(M[0].r, S.read_shift(2), !1)),
                R.push(Fe + ge + ':' + fe + z);
            }
            break;
          case 3:
            if (S.l < S.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            R.push('(' + R.pop() + ')');
            break;
          case 5:
            R.push(S.read_shift(2));
            break;
          case 6:
            {
              for (var nt = ''; (te = S[S.l++]); )
                nt += String.fromCharCode(te);
              R.push('"' + nt.replace(/"/g, '""') + '"');
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
            (se = R.pop()),
              (le = R.pop()),
              R.push(['AND', 'OR'][te - 20] + '(' + le + ',' + se + ')');
            break;
          default:
            if (te < 32 && A[te])
              (se = R.pop()), (le = R.pop()), R.push(le + A[te] + se);
            else if (F[te]) {
              if (((C = F[te][1]), C == 69 && (C = S[S.l++]), C > R.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    te.toString(16) +
                    ':|' +
                    R.join('|') +
                    '|',
                );
                return;
              }
              var we = R.slice(-C);
              (R.length -= C), R.push(F[te][0] + '(' + we.join(',') + ')');
            } else
              return te <= 7
                ? console.error('WK1 invalid opcode ' + te.toString(16))
                : te <= 24
                  ? console.error('WK1 unsupported op ' + te.toString(16))
                  : te <= 30
                    ? console.error('WK1 invalid opcode ' + te.toString(16))
                    : te <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + te.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + te.toString(16),
                        );
        }
      }
      R.length == 1
        ? (M[1].f = '' + R[0])
        : console.error('WK1 bad formula parse |' + R.join('|') + '|');
    }
    function W(S) {
      var M = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (M[0].r = S.read_shift(2)), (M[3] = S[S.l++]), (M[0].c = S[S.l++]), M
      );
    }
    function q(S, M) {
      var R = W(S);
      return (R[1].t = 's'), (R[1].v = S.read_shift(M - 4, 'cstr')), R;
    }
    function O(S, M, R, C) {
      var z = H(6 + C.length);
      z.write_shift(2, S),
        z.write_shift(1, R),
        z.write_shift(1, M),
        z.write_shift(1, 39);
      for (var fe = 0; fe < C.length; ++fe) {
        var le = C.charCodeAt(fe);
        z.write_shift(1, le >= 128 ? 95 : le);
      }
      return z.write_shift(1, 0), z;
    }
    function b(S, M) {
      var R = W(S);
      R[1].v = S.read_shift(2);
      var C = R[1].v >> 1;
      if (R[1].v & 1)
        switch (C & 7) {
          case 0:
            C = (C >> 3) * 5e3;
            break;
          case 1:
            C = (C >> 3) * 500;
            break;
          case 2:
            C = (C >> 3) / 20;
            break;
          case 3:
            C = (C >> 3) / 200;
            break;
          case 4:
            C = (C >> 3) / 2e3;
            break;
          case 5:
            C = (C >> 3) / 2e4;
            break;
          case 6:
            C = (C >> 3) / 16;
            break;
          case 7:
            C = (C >> 3) / 64;
            break;
        }
      return (R[1].v = C), R;
    }
    function P(S, M) {
      var R = W(S),
        C = S.read_shift(4),
        z = S.read_shift(4),
        fe = S.read_shift(2);
      if (fe == 65535)
        return (
          C === 0 && z === 3221225472
            ? ((R[1].t = 'e'), (R[1].v = 15))
            : C === 0 && z === 3489660928
              ? ((R[1].t = 'e'), (R[1].v = 42))
              : (R[1].v = 0),
          R
        );
      var le = fe & 32768;
      return (
        (fe = (fe & 32767) - 16446),
        (R[1].v =
          (1 - le * 2) * (z * Math.pow(2, fe + 32) + C * Math.pow(2, fe))),
        R
      );
    }
    function V(S, M, R, C) {
      var z = H(14);
      if (
        (z.write_shift(2, S), z.write_shift(1, R), z.write_shift(1, M), C == 0)
      )
        return (
          z.write_shift(4, 0), z.write_shift(4, 0), z.write_shift(2, 65535), z
        );
      var fe = 0,
        le = 0,
        se = 0,
        te = 0;
      return (
        C < 0 && ((fe = 1), (C = -C)),
        (le = Math.log2(C) | 0),
        (C /= Math.pow(2, le - 31)),
        (te = C >>> 0),
        (te & 2147483648) == 0 && ((C /= 2), ++le, (te = C >>> 0)),
        (C -= te),
        (te |= 2147483648),
        (te >>>= 0),
        (C *= Math.pow(2, 32)),
        (se = C >>> 0),
        z.write_shift(4, se),
        z.write_shift(4, te),
        (le += 16383 + (fe ? 32768 : 0)),
        z.write_shift(2, le),
        z
      );
    }
    function G(S, M) {
      var R = P(S);
      return (S.l += M - 14), R;
    }
    function X(S, M) {
      var R = W(S),
        C = S.read_shift(4);
      return (R[1].v = C >> 6), R;
    }
    function ee(S, M) {
      var R = W(S),
        C = S.read_shift(8, 'f');
      return (R[1].v = C), R;
    }
    function Te(S, M) {
      var R = ee(S);
      return (S.l += M - 10), R;
    }
    function ue(S, M) {
      return S[S.l + M - 1] == 0 ? S.read_shift(M, 'cstr') : '';
    }
    function He(S, M) {
      var R = S[S.l++];
      R > M - 1 && (R = M - 1);
      for (var C = ''; C.length < R; ) C += String.fromCharCode(S[S.l++]);
      return C;
    }
    function ke(S, M, R) {
      if (!(!R.qpro || M < 21)) {
        var C = S.read_shift(1);
        (S.l += 17), (S.l += 1), (S.l += 2);
        var z = S.read_shift(M - 21, 'cstr');
        return [C, z];
      }
    }
    function ze(S, M) {
      for (var R = {}, C = S.l + M; S.l < C; ) {
        var z = S.read_shift(2);
        if (z == 14e3) {
          for (R[z] = [0, ''], R[z][0] = S.read_shift(2); S[S.l]; )
            (R[z][1] += String.fromCharCode(S[S.l])), S.l++;
          S.l++;
        }
      }
      return R;
    }
    function Ve(S, M) {
      var R = H(5 + S.length);
      R.write_shift(2, 14e3), R.write_shift(2, M);
      for (var C = 0; C < S.length; ++C) {
        var z = S.charCodeAt(C);
        R[R.l++] = z > 127 ? 95 : z;
      }
      return (R[R.l++] = 0), R;
    }
    var wt = {
        0: { n: 'BOF', f: ml },
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
        13: { n: 'INTEGER', f: u },
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
        204: { n: 'SHEETNAMECS', f: ue },
        222: { n: 'SHEETNAMELP', f: He },
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
        22: { n: 'LABEL16', f: q },
        23: { n: 'NUMBER17', f: P },
        24: { n: 'NUMBER18', f: b },
        25: { n: 'FORMULA19', f: G },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: ze },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: X },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: ee },
        40: { n: 'FORMULA28', f: Te },
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
        204: { n: 'SHEETNAMECS', f: ue },
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
        1537: { n: 'SHEETINFOQP', f: ke },
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
  ux = /^\s|\s$|[\t\n\r]/;
function Sl(e, r) {
  if (!r.bookSST) return '';
  var t = [tt];
  t[t.length] = J('sst', null, {
    xmlns: Mn[0],
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
          i.t.match(ux) && (a += ' xml:space="preserve"'),
          (a += '>' + Re(i.t) + '</t>')),
        (a += '</si>'),
        (t[t.length] = a);
    }
  return (
    t.length > 2 &&
      ((t[t.length] = '</sst>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function hx(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function dx(e, r) {
  return (
    r || (r = H(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r
  );
}
var xx = id;
function px(e) {
  var r = Pt();
  j(r, 159, dx(e));
  for (var t = 0; t < e.length; ++t) j(r, 19, xx(e[t]));
  return j(r, 160), r.end();
}
function vx(e) {
  for (var r = [], t = e.split(''), n = 0; n < t.length; ++n)
    r[n] = t[n].charCodeAt(0);
  return r;
}
function Al(e) {
  var r = 0,
    t,
    n = vx(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (t = nn(i), t[0] = n.length, a = 1; a != i; ++a) t[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = t[a]),
      (f = (r & 16384) === 0 ? 0 : 1),
      (l = (r << 1) & 32767),
      (o = f | l),
      (r = o ^ s);
  return r ^ 52811;
}
var mx = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return r(Rr(i), a);
      case 'binary':
        return r(i, a);
      case 'buffer':
        return r(ye && Buffer.isBuffer(i) ? i.toString('binary') : yi(i), a);
      case 'array':
        return r(Ma(i), a);
    }
    throw new Error('Unrecognized type ' + a.type);
  }
  function r(i, a) {
    var s = a || {},
      f = s.dense ? [] : {},
      l = i.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error('RTF missing table');
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (c, h) {
        Array.isArray(f) && (f[h] = []);
        for (var u = /\\\w+\b/g, x = 0, p, d = -1; (p = u.exec(c)); ) {
          switch (p[0]) {
            case '\\cell':
              var m = c.slice(x, u.lastIndex - p[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++d, m.length)) {
                var y = { v: m, t: 's' };
                Array.isArray(f) ? (f[h][d] = y) : (f[Ne({ r: h, c: d })] = y);
              }
              break;
          }
          x = u.lastIndex;
        }
        d > o.e.c && (o.e.c = d);
      }),
      (f['!ref'] = et(o)),
      f
    );
  }
  function t(i, a) {
    return on(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = Ue(i['!ref']),
        f,
        l = Array.isArray(i),
        o = s.s.r;
      o <= s.e.r;
      ++o
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var h = Ne({ r: o, c });
        (f = l ? (i[o] || [])[c] : i[h]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (a.push(' ' + (f.w || (Nr(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: t, to_sheet: e, from_sheet: n };
})();
function uf(e) {
  for (var r = 0, t = 1; r != 3; ++r)
    t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
var _x = 6,
  Or = _x;
function da(e) {
  return Math.floor((e + Math.round(128 / Or) / 256) * Or);
}
function xa(e) {
  return Math.floor(((e - 5) / Or) * 100 + 0.5) / 100;
}
function g0(e) {
  return Math.round(((e * Or + 5) / Or) * 256) / 256;
}
function Z0(e) {
  e.width
    ? ((e.wpx = da(e.width)), (e.wch = xa(e.wpx)), (e.MDW = Or))
    : e.wpx
      ? ((e.wch = xa(e.wpx)), (e.width = g0(e.wch)), (e.MDW = Or))
      : typeof e.wch == 'number' &&
        ((e.width = g0(e.wch)), (e.wpx = da(e.width)), (e.MDW = Or)),
    e.customWidth && delete e.customWidth;
}
var gx = 96,
  yl = gx;
function pa(e) {
  return (e * 96) / yl;
}
function Fl(e) {
  return (e * yl) / 96;
}
function Ex(e) {
  var r = ['<numFmts>'];
  return (
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (t) {
      for (var n = t[0]; n <= t[1]; ++n)
        e[n] != null &&
          (r[r.length] = J('numFmt', null, {
            numFmtId: n,
            formatCode: Re(e[n]),
          }));
    }),
    r.length === 1
      ? ''
      : ((r[r.length] = '</numFmts>'),
        (r[0] = J('numFmts', null, { count: r.length - 2 }).replace('/>', '>')),
        r.join(''))
  );
}
function Tx(e) {
  var r = [];
  return (
    (r[r.length] = J('cellXfs', null)),
    e.forEach(function (t) {
      r[r.length] = J('xf', null, t);
    }),
    (r[r.length] = '</cellXfs>'),
    r.length === 2
      ? ''
      : ((r[0] = J('cellXfs', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function Cl(e, r) {
  var t = [tt, J('styleSheet', null, { xmlns: Mn[0], 'xmlns:vt': it.vt })],
    n;
  return (
    e.SSF && (n = Ex(e.SSF)) != null && (t[t.length] = n),
    (t[t.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (t[t.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (t[t.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (t[t.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Tx(r.cellXfs)) && (t[t.length] = n),
    (t[t.length] =
      '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
    (t[t.length] = '<dxfs count="0"/>'),
    (t[t.length] =
      '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
    t.length > 2 &&
      ((t[t.length] = '</styleSheet>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function wx(e, r) {
  var t = e.read_shift(2),
    n = Et(e);
  return [t, n];
}
function Sx(e, r, t) {
  t || (t = H(6 + 4 * r.length)), t.write_shift(2, e), st(r, t);
  var n = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), n;
}
function Ax(e, r, t) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = ud(e);
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
    (l > 0 && (n.charset = l), e.l++, (n.color = cd(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = Et(e)), n;
}
function yx(e, r) {
  r || (r = H(25 + 4 * 32)),
    r.write_shift(2, e.sz * 20),
    hd(e, r),
    r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == 'superscript'
    ? (t = 1)
    : e.vertAlign == 'subscript' && (t = 2),
    r.write_shift(2, t),
    r.write_shift(1, e.underline || 0),
    r.write_shift(1, e.family || 0),
    r.write_shift(1, e.charset || 0),
    r.write_shift(1, 0),
    ua(e.color, r);
  var n = 0;
  return (
    (n = 2),
    r.write_shift(1, n),
    st(e.name, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
var Fx = [
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
  Za,
  Cx = gr;
function hf(e, r) {
  r || (r = H(4 * 3 + 8 * 7 + 16 * 1)), Za || (Za = H0(Fx));
  var t = Za[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var n = 0;
  if (t != 40)
    for (ua({ auto: 1 }, r), ua({ auto: 1 }, r); n < 12; ++n)
      r.write_shift(4, 0);
  else {
    for (; n < 4; ++n) r.write_shift(4, 0);
    for (; n < 12; ++n) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function Ox(e, r) {
  var t = e.l + r,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = t), { ixfe: n, numFmtId: i };
}
function Ol(e, r, t) {
  t || (t = H(16)),
    t.write_shift(2, r || 0),
    t.write_shift(2, e.numFmtId || 0),
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t.write_shift(1, 0);
  var n = 0;
  return (
    t.write_shift(1, n),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t
  );
}
function Jn(e, r) {
  return (
    r || (r = H(10)),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var Rx = gr;
function Nx(e, r) {
  return (
    r || (r = H(51)),
    r.write_shift(1, 0),
    Jn(null, r),
    Jn(null, r),
    Jn(null, r),
    Jn(null, r),
    Jn(null, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function kx(e, r) {
  return (
    r || (r = H(12 + 4 * 10)),
    r.write_shift(4, e.xfId),
    r.write_shift(2, 1),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    ca(e.name || '', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Dx(e, r, t) {
  var n = H(2052);
  return (
    n.write_shift(4, e),
    ca(r, n),
    ca(t, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Ix(e, r) {
  if (r) {
    var t = 0;
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i) r[i] != null && ++t;
    }),
      t != 0 &&
        (j(e, 615, sr(t)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            r[i] != null && j(e, 44, Sx(i, r[i]));
        }),
        j(e, 616));
  }
}
function Px(e) {
  var r = 1;
  j(e, 611, sr(r)),
    j(e, 43, yx({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    j(e, 612);
}
function Lx(e) {
  var r = 2;
  j(e, 603, sr(r)),
    j(e, 45, hf({ patternType: 'none' })),
    j(e, 45, hf({ patternType: 'gray125' })),
    j(e, 604);
}
function Mx(e) {
  var r = 1;
  j(e, 613, sr(r)), j(e, 46, Nx()), j(e, 614);
}
function Bx(e) {
  var r = 1;
  j(e, 626, sr(r)), j(e, 47, Ol({ numFmtId: 0 }, 65535)), j(e, 627);
}
function bx(e, r) {
  j(e, 617, sr(r.length)),
    r.forEach(function (t) {
      j(e, 47, Ol(t, 0));
    }),
    j(e, 618);
}
function Ux(e) {
  var r = 1;
  j(e, 619, sr(r)), j(e, 48, kx({ xfId: 0, name: 'Normal' })), j(e, 620);
}
function Hx(e) {
  var r = 0;
  j(e, 505, sr(r)), j(e, 506);
}
function Wx(e) {
  var r = 0;
  j(e, 508, Dx(r, 'TableStyleMedium9', 'PivotStyleMedium4')), j(e, 509);
}
function Vx(e, r) {
  var t = Pt();
  return (
    j(t, 278),
    Ix(t, e.SSF),
    Px(t),
    Lx(t),
    Mx(t),
    Bx(t),
    bx(t, r.cellXfs),
    Ux(t),
    Hx(t),
    Wx(t),
    j(t, 279),
    t.end()
  );
}
function Rl(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var t = [tt];
  return (
    (t[t.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (t[t.length] = '<a:themeElements>'),
    (t[t.length] = '<a:clrScheme name="Office">'),
    (t[t.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (t[t.length] = '</a:clrScheme>'),
    (t[t.length] = '<a:fontScheme name="Office">'),
    (t[t.length] = '<a:majorFont>'),
    (t[t.length] = '<a:latin typeface="Cambria"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (t[t.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = '</a:majorFont>'),
    (t[t.length] = '<a:minorFont>'),
    (t[t.length] = '<a:latin typeface="Calibri"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (t[t.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = '</a:minorFont>'),
    (t[t.length] = '</a:fontScheme>'),
    (t[t.length] = '<a:fmtScheme name="Office">'),
    (t[t.length] = '<a:fillStyleLst>'),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = '<a:gsLst>'),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = '</a:gsLst>'),
    (t[t.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (t[t.length] = '</a:gradFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = '<a:gsLst>'),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = '</a:gsLst>'),
    (t[t.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (t[t.length] = '</a:gradFill>'),
    (t[t.length] = '</a:fillStyleLst>'),
    (t[t.length] = '<a:lnStyleLst>'),
    (t[t.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] = '</a:lnStyleLst>'),
    (t[t.length] = '<a:effectStyleLst>'),
    (t[t.length] = '<a:effectStyle>'),
    (t[t.length] = '<a:effectLst>'),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = '</a:effectLst>'),
    (t[t.length] = '</a:effectStyle>'),
    (t[t.length] = '<a:effectStyle>'),
    (t[t.length] = '<a:effectLst>'),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = '</a:effectLst>'),
    (t[t.length] = '</a:effectStyle>'),
    (t[t.length] = '<a:effectStyle>'),
    (t[t.length] = '<a:effectLst>'),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = '</a:effectLst>'),
    (t[t.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (t[t.length] = '</a:effectStyle>'),
    (t[t.length] = '</a:effectStyleLst>'),
    (t[t.length] = '<a:bgFillStyleLst>'),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = '<a:gsLst>'),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (t[t.length] = '</a:gsLst>'),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (t[t.length] = '</a:gradFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = '<a:gsLst>'),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (t[t.length] = '</a:gsLst>'),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (t[t.length] = '</a:gradFill>'),
    (t[t.length] = '</a:bgFillStyleLst>'),
    (t[t.length] = '</a:fmtScheme>'),
    (t[t.length] = '</a:themeElements>'),
    (t[t.length] = '<a:objectDefaults>'),
    (t[t.length] = '<a:spDef>'),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (t[t.length] = '</a:spDef>'),
    (t[t.length] = '<a:lnDef>'),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (t[t.length] = '</a:lnDef>'),
    (t[t.length] = '</a:objectDefaults>'),
    (t[t.length] = '<a:extraClrSchemeLst/>'),
    (t[t.length] = '</a:theme>'),
    t.join('')
  );
}
function Gx(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: Et(e) };
}
function $x(e) {
  var r = H(12 + 2 * e.name.length);
  return (
    r.write_shift(4, e.flags),
    r.write_shift(4, e.version),
    st(e.name, r),
    r.slice(0, r.l)
  );
}
function jx(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; )
    r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function zx(e) {
  var r = H(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t)
    r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Xx(e, r) {
  var t = H(8 + 2 * r.length);
  return t.write_shift(4, e), st(r, t), t.slice(0, t.l);
}
function Kx(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function qx(e, r) {
  var t = H(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Yx() {
  var e = Pt();
  return (
    j(e, 332),
    j(e, 334, sr(1)),
    j(e, 335, $x({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    j(e, 336),
    j(e, 339, Xx(1, 'XLDAPR')),
    j(e, 52),
    j(e, 35, sr(514)),
    j(e, 4096, sr(0)),
    j(e, 4097, Yt(1)),
    j(e, 36),
    j(e, 53),
    j(e, 340),
    j(e, 337, qx(1)),
    j(e, 51, zx([[1, 0]])),
    j(e, 338),
    j(e, 333),
    e.end()
  );
}
function Nl() {
  var e = [tt];
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
function Jx(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  (t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (r.r = Ne(t));
  var n = e.read_shift(1);
  return n & 2 && (r.l = '1'), n & 8 && (r.a = '1'), r;
}
var yn = 1024;
function kl(e, r) {
  for (
    var t = [21600, 21600],
      n = ['m0,0l0', t[1], t[0], t[1], t[0], '0xe'].join(','),
      i = [
        J('xml', null, {
          'xmlns:v': Vt.v,
          'xmlns:o': Vt.o,
          'xmlns:x': Vt.x,
          'xmlns:mv': Vt.mv,
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
          { id: '_x0000_t202', 'o:spt': 202, coordsize: t.join(','), path: n },
        ),
      ];
    yn < e * 1e3;

  )
    yn += 1e3;
  return (
    r.forEach(function (a) {
      var s = at(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? J('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = J('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++yn,
        (i = i.concat([
          '<v:shape' +
            mi({
              id: '_x0000_s' + yn,
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
          ut(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          ut('x:AutoFill', 'False'),
          ut('x:Row', String(s.r)),
          ut('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function Dl(e) {
  var r = [tt, J('comments', null, { xmlns: Mn[0] })],
    t = [];
  return (
    r.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = Re(i.a);
        t.indexOf(a) == -1 && (t.push(a), r.push('<author>' + a + '</author>')),
          i.T &&
            i.ID &&
            t.indexOf('tc=' + i.ID) == -1 &&
            (t.push('tc=' + i.ID), r.push('<author>tc=' + i.ID + '</author>'));
      });
    }),
    t.length == 0 && (t.push('SheetJ5'), r.push('<author>SheetJ5</author>')),
    r.push('</authors>'),
    r.push('<commentList>'),
    e.forEach(function (n) {
      var i = 0,
        a = [];
      if (
        (n[1][0] && n[1][0].T && n[1][0].ID
          ? (i = t.indexOf('tc=' + n[1][0].ID))
          : n[1].forEach(function (l) {
              l.a && (i = t.indexOf(Re(l.a))), a.push(l.t || '');
            }),
        r.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        r.push(ut('t', Re(a[0] || '')));
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
        r.push(ut('t', Re(s)));
      }
      r.push('</text></comment>');
    }),
    r.push('</commentList>'),
    r.length > 2 &&
      ((r[r.length] = '</comments>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Zx(e, r, t) {
  var n = [
    tt,
    J('ThreadedComments', null, { xmlns: it.TCMNT }).replace(/[\/]>/, '>'),
  ];
  return (
    e.forEach(function (i) {
      var a = '';
      (i[1] || []).forEach(function (s, f) {
        if (!s.T) {
          delete s.ID;
          return;
        }
        s.a && r.indexOf(s.a) == -1 && r.push(s.a);
        var l = {
          ref: i[0],
          id:
            '{54EE7951-7262-4200-6969-' +
            ('000000000000' + t.tcid++).slice(-12) +
            '}',
        };
        f == 0 ? (a = l.id) : (l.parentId = a),
          (s.ID = l.id),
          s.a &&
            (l.personId =
              '{54EE7950-7262-4200-6969-' +
              ('000000000000' + r.indexOf(s.a)).slice(-12) +
              '}'),
          n.push(J('threadedComment', ut('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function Qx(e) {
  var r = [
    tt,
    J('personList', null, { xmlns: it.TCMNT, 'xmlns:x': Mn[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    e.forEach(function (t, n) {
      r.push(
        J('person', null, {
          displayName: t,
          id:
            '{54EE7950-7262-4200-6969-' + ('000000000000' + n).slice(-12) + '}',
          userId: t,
          providerId: 'None',
        }),
      );
    }),
    r.push('</personList>'),
    r.join('')
  );
}
function ep(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = hn(e);
  return (r.rfx = t.s), (r.ref = Ne(t.s)), (e.l += 16), r;
}
function tp(e, r) {
  return (
    r == null && (r = H(36)),
    r.write_shift(4, e[1].iauthor),
    bn(e[0], r),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var rp = Et;
function np(e) {
  return st(e.slice(0, 54));
}
function ip(e) {
  var r = Pt(),
    t = [];
  return (
    j(r, 628),
    j(r, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        t.indexOf(i.a) > -1 || (t.push(i.a.slice(0, 54)), j(r, 632, np(i.a)));
      });
    }),
    j(r, 631),
    j(r, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = t.indexOf(i.a);
        var a = { s: at(n[0]), e: at(n[0]) };
        j(r, 635, tp([a, i])),
          i.t && i.t.length > 0 && j(r, 637, sd(i)),
          j(r, 636),
          delete i.iauthor;
      });
    }),
    j(r, 634),
    j(r, 629),
    r.end()
  );
}
function ap(e, r) {
  r.FullPaths.forEach(function (t, n) {
    if (n != 0) {
      var i = t.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Ie.utils.cfb_add(e, i, r.FileIndex[n].content);
    }
  });
}
var Il = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  sp = (function () {
    var e =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      r = { r: 0, c: 0 };
    function t(n, i, a, s) {
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
        f ? (c += r.c) : --c,
        l ? (o += r.r) : --o,
        i + (f ? '' : '$') + gt(c) + (l ? '' : '$') + ht(o)
      );
    }
    return function (i, a) {
      return (r = a), i.replace(e, t);
    };
  })(),
  Q0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  es = (function () {
    return function (r, t) {
      return r.replace(Q0, function (n, i, a, s, f, l) {
        var o = X0(s) - (a ? 0 : t.c),
          c = z0(l) - (f ? 0 : t.r),
          h = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          u = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + h + 'C' + u;
      });
    };
  })();
function fp(e, r) {
  return e.replace(Q0, function (t, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : gt(X0(a) + r.c)) +
      (s == '$' ? s + f : ht(z0(f) + r.r))
    );
  });
}
function op(e) {
  return e.length != 1;
}
function Qe(e) {
  e.l += 1;
}
function Gr(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
}
function Pl(e, r, t) {
  var n = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return Ll(e);
    t.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n),
    a = e.read_shift(n),
    s = Gr(e),
    f = Gr(e);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: f[0], cRel: f[1], rRel: f[2] },
  };
}
function Ll(e) {
  var r = Gr(e),
    t = Gr(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: r[0], c: n, cRel: r[1], rRel: r[2] },
    e: { r: t[0], c: i, cRel: t[1], rRel: t[2] },
  };
}
function lp(e, r, t) {
  if (t.biff < 8) return Ll(e);
  var n = e.read_shift(t.biff == 12 ? 4 : 2),
    i = e.read_shift(t.biff == 12 ? 4 : 2),
    a = Gr(e),
    s = Gr(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Ml(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return cp(e);
  var n = e.read_shift(t && t.biff == 12 ? 4 : 2),
    i = Gr(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function cp(e) {
  var r = Gr(e),
    t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function up(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2);
  return {
    r,
    c: t & 255,
    fQuoted: !!(t & 16384),
    cRel: t >> 15,
    rRel: t >> 15,
  };
}
function hp(e, r, t) {
  var n = t && t.biff ? t.biff : 8;
  if (n >= 2 && n <= 5) return dp(e);
  var i = e.read_shift(n >= 12 ? 4 : 2),
    a = e.read_shift(2),
    s = (a & 16384) >> 14,
    f = (a & 32768) >> 15;
  if (((a &= 16383), f == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: f };
}
function dp(e) {
  var r = e.read_shift(2),
    t = e.read_shift(1),
    n = (r & 32768) >> 15,
    i = (r & 16384) >> 14;
  return (
    (r &= 16383),
    n == 1 && r >= 8192 && (r = r - 16384),
    i == 1 && t >= 128 && (t = t - 256),
    { r, c: t, cRel: i, rRel: n }
  );
}
function xp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = Pl(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [n, i];
}
function pp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2, 'i'),
    a = 8;
  if (t)
    switch (t.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  var s = Pl(e, a, t);
  return [n, i, s];
}
function vp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8), [n];
}
function mp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2),
    a = 8;
  if (t)
    switch (t.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  return (e.l += a), [n, i];
}
function _p(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = lp(e, r - 1, t);
  return [n, i];
}
function gp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7), [n];
}
function df(e) {
  var r = e[e.l + 1] & 1,
    t = 1;
  return (e.l += 4), [r, t];
}
function Ep(e, r, t) {
  e.l += 2;
  for (
    var n = e.read_shift(t && t.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return i;
}
function Tp(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function wp(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function Sp(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [r, e.read_shift(2)];
}
function Ap(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += t && t.biff == 2 ? 3 : 4), [n];
}
function Bl(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1);
  return [r, t];
}
function yp(e) {
  return e.read_shift(2), Bl(e);
}
function Fp(e) {
  return e.read_shift(2), Bl(e);
}
function Cp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = Ml(e, 0, t);
  return [n, i];
}
function Op(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = hp(e, 0, t);
  return [n, i];
}
function Rp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var a = Ml(e, 0, t);
  return [n, i, a];
}
function Np(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [Nv[i], Hl[i], n];
}
function kp(e, r, t) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = t && t.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Dp(e);
  return [i, (a[0] === 0 ? Hl : Rv)[a[1]]];
}
function Dp(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Ip(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function Pp(e, r, t) {
  if ((e.l++, t && t.biff == 12)) return [e.read_shift(4, 'i'), 0];
  var n = e.read_shift(2),
    i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Lp(e) {
  return e.l++, Oi[e.read_shift(1)];
}
function Mp(e) {
  return e.l++, e.read_shift(2);
}
function Bp(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function bp(e) {
  return e.l++, Un(e);
}
function Up(e, r, t) {
  return e.l++, gl(e, r - 1, t);
}
function Hp(e, r) {
  var t = [e.read_shift(1)];
  if (r == 12)
    switch (t[0]) {
      case 2:
        t[0] = 4;
        break;
      case 4:
        t[0] = 16;
        break;
      case 0:
        t[0] = 1;
        break;
      case 1:
        t[0] = 2;
        break;
    }
  switch (t[0]) {
    case 4:
      (t[1] = Rd(e, 1) ? 'TRUE' : 'FALSE'), r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (t[1] = Oi[e[e.l]]), (e.l += r == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Un(e);
      break;
    case 2:
      t[1] = Id(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error('Bad SerAr: ' + t[0]);
  }
  return t;
}
function Wp(e, r, t) {
  for (var n = e.read_shift(t.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((t.biff == 12 ? hn : Md)(e));
  return i;
}
function Vp(e, r, t) {
  var n = 0,
    i = 0;
  t.biff == 12
    ? ((n = e.read_shift(4)), (i = e.read_shift(4)))
    : ((i = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    t.biff >= 2 && t.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var f = 0; f != i; ++f) s[a][f] = Hp(e, t.biff);
  return s;
}
function Gp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = !t || t.biff >= 8 ? 4 : 2,
    a = e.read_shift(i);
  switch (t.biff) {
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
function $p(e, r, t) {
  if (t.biff == 5) return jp(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function jp(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [r, t, n];
}
function zp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Xp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Kp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [n];
}
function qp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = e.read_shift(2),
    a = 4;
  if (t)
    switch (t.biff) {
      case 5:
        a = 15;
        break;
      case 12:
        a = 6;
        break;
    }
  return (e.l += a), [n, i];
}
var Yp = gr,
  Jp = gr,
  Zp = gr;
function Ri(e, r, t) {
  return (e.l += 2), [up(e)];
}
function ts(e) {
  return (e.l += 6), [];
}
var Qp = Ri,
  ev = ts,
  tv = ts,
  rv = Ri;
function bl(e) {
  return (e.l += 2), [ml(e), e.read_shift(2) & 1];
}
var nv = Ri,
  iv = bl,
  av = ts,
  sv = Ri,
  fv = Ri,
  ov = [
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
function lv(e) {
  e.l += 2;
  var r = e.read_shift(2),
    t = e.read_shift(2),
    n = e.read_shift(4),
    i = e.read_shift(2),
    a = e.read_shift(2),
    s = ov[(t >> 2) & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: n, c: i, C: a };
}
function cv(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function uv(e, r, t) {
  return (e.l += 5), (e.l += 2), (e.l += t.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function hv(e, r, t) {
  return (e.l += t.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function dv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function xv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function pv(e) {
  return (e.l += 4), [0, 0];
}
var xf = {
    1: { n: 'PtgExp', f: Pp },
    2: { n: 'PtgTbl', f: Zp },
    3: { n: 'PtgAdd', f: Qe },
    4: { n: 'PtgSub', f: Qe },
    5: { n: 'PtgMul', f: Qe },
    6: { n: 'PtgDiv', f: Qe },
    7: { n: 'PtgPower', f: Qe },
    8: { n: 'PtgConcat', f: Qe },
    9: { n: 'PtgLt', f: Qe },
    10: { n: 'PtgLe', f: Qe },
    11: { n: 'PtgEq', f: Qe },
    12: { n: 'PtgGe', f: Qe },
    13: { n: 'PtgGt', f: Qe },
    14: { n: 'PtgNe', f: Qe },
    15: { n: 'PtgIsect', f: Qe },
    16: { n: 'PtgUnion', f: Qe },
    17: { n: 'PtgRange', f: Qe },
    18: { n: 'PtgUplus', f: Qe },
    19: { n: 'PtgUminus', f: Qe },
    20: { n: 'PtgPercent', f: Qe },
    21: { n: 'PtgParen', f: Qe },
    22: { n: 'PtgMissArg', f: Qe },
    23: { n: 'PtgStr', f: Up },
    26: { n: 'PtgSheet', f: uv },
    27: { n: 'PtgEndSheet', f: hv },
    28: { n: 'PtgErr', f: Lp },
    29: { n: 'PtgBool', f: Bp },
    30: { n: 'PtgInt', f: Mp },
    31: { n: 'PtgNum', f: bp },
    32: { n: 'PtgArray', f: gp },
    33: { n: 'PtgFunc', f: Np },
    34: { n: 'PtgFuncVar', f: kp },
    35: { n: 'PtgName', f: Gp },
    36: { n: 'PtgRef', f: Cp },
    37: { n: 'PtgArea', f: xp },
    38: { n: 'PtgMemArea', f: zp },
    39: { n: 'PtgMemErr', f: Yp },
    40: { n: 'PtgMemNoMem', f: Jp },
    41: { n: 'PtgMemFunc', f: Xp },
    42: { n: 'PtgRefErr', f: Kp },
    43: { n: 'PtgAreaErr', f: vp },
    44: { n: 'PtgRefN', f: Op },
    45: { n: 'PtgAreaN', f: _p },
    46: { n: 'PtgMemAreaN', f: dv },
    47: { n: 'PtgMemNoMemN', f: xv },
    57: { n: 'PtgNameX', f: $p },
    58: { n: 'PtgRef3d', f: Rp },
    59: { n: 'PtgArea3d', f: pp },
    60: { n: 'PtgRefErr3d', f: qp },
    61: { n: 'PtgAreaErr3d', f: mp },
    255: {},
  },
  vv = {
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
  mv = {
    1: { n: 'PtgElfLel', f: bl },
    2: { n: 'PtgElfRw', f: sv },
    3: { n: 'PtgElfCol', f: Qp },
    6: { n: 'PtgElfRwV', f: fv },
    7: { n: 'PtgElfColV', f: rv },
    10: { n: 'PtgElfRadical', f: nv },
    11: { n: 'PtgElfRadicalS', f: av },
    13: { n: 'PtgElfColS', f: ev },
    15: { n: 'PtgElfColSV', f: tv },
    16: { n: 'PtgElfRadicalLel', f: iv },
    25: { n: 'PtgList', f: lv },
    29: { n: 'PtgSxName', f: cv },
    255: {},
  },
  _v = {
    0: { n: 'PtgAttrNoop', f: pv },
    1: { n: 'PtgAttrSemi', f: Ap },
    2: { n: 'PtgAttrIf', f: wp },
    4: { n: 'PtgAttrChoose', f: Ep },
    8: { n: 'PtgAttrGoto', f: Tp },
    16: { n: 'PtgAttrSum', f: Ip },
    32: { n: 'PtgAttrBaxcel', f: df },
    33: { n: 'PtgAttrBaxcel', f: df },
    64: { n: 'PtgAttrSpace', f: yp },
    65: { n: 'PtgAttrSpaceSemi', f: Fp },
    128: { n: 'PtgAttrIfError', f: Sp },
    255: {},
  };
function gv(e, r, t, n) {
  if (n.biff < 8) return gr(e, r);
  for (var i = e.l + r, a = [], s = 0; s !== t.length; ++s)
    switch (t[s][0]) {
      case 'PtgArray':
        (t[s][1] = Vp(e, 0, n)), a.push(t[s][1]);
        break;
      case 'PtgMemArea':
        (t[s][2] = Wp(e, t[s][1], n)), a.push(t[s][2]);
        break;
      case 'PtgExp':
        n && n.biff == 12 && ((t[s][1][1] = e.read_shift(4)), a.push(t[s][1]));
        break;
      case 'PtgList':
      case 'PtgElfRadicalS':
      case 'PtgElfColS':
      case 'PtgElfColSV':
        throw 'Unsupported ' + t[s][0];
    }
  return (r = i - e.l), r !== 0 && a.push(gr(e, r)), a;
}
function Ev(e, r, t) {
  for (var n = e.l + r, i, a, s = []; n != e.l; )
    (r = n - e.l),
      (a = e[e.l]),
      (i = xf[a] || xf[vv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? mv : _v)[e[e.l + 1]]),
      !i || !i.f ? gr(e, r) : s.push([i.n, i.f(e, r, t)]);
  return s;
}
function Tv(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var n = e[t], i = [], a = 0; a < n.length; ++a) {
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
var wv = {
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
function Sv(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Ul(e, r, t) {
  if (!e) return 'SH33TJSERR0';
  if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
  if (!e.XTI) return 'SH33TJSERR6';
  var n = e.XTI[r];
  if (t.biff < 8)
    return (
      r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? '' : e.XTI[r - 1]
    );
  if (!n) return 'SH33TJSERR1';
  var i = '';
  if (t.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return (
          (i = n[1] == -1 ? '#REF' : e.SheetNames[n[1]]),
          n[1] == n[2] ? i : i + ':' + e.SheetNames[n[2]]
        );
      case 358:
        return t.SID != null ? e.SheetNames[t.SID] : 'SH33TJSSAME' + e[n[0]][0];
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
function pf(e, r, t) {
  var n = Ul(e, r, t);
  return n == '#REF' ? n : Sv(n, t);
}
function Nn(e, r, t, n, i) {
  var a = (i && i.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    f = [],
    l,
    o,
    c,
    h = 0,
    u = 0,
    x,
    p = '';
  if (!e[0] || !e[0][0]) return '';
  for (var d = -1, m = '', y = 0, F = e[0].length; y < F; ++y) {
    var A = e[0][y];
    switch (A[0]) {
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
        if (((l = f.pop()), (o = f.pop()), d >= 0)) {
          switch (e[0][d][1][0]) {
            case 0:
              m = Ke(' ', e[0][d][1][1]);
              break;
            case 1:
              m = Ke('\r', e[0][d][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0]);
          }
          (o = o + m), (d = -1);
        }
        f.push(o + wv[A[0]] + l);
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
        (c = si(A[1][1], s, i)), f.push(fi(c, a));
        break;
      case 'PtgRefN':
        (c = t ? si(A[1][1], t, i) : A[1][1]), f.push(fi(c, a));
        break;
      case 'PtgRef3d':
        (h = A[1][1]),
          (c = si(A[1][2], s, i)),
          (p = pf(n, h, i)),
          f.push(p + '!' + fi(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var N = A[1][0],
          W = A[1][1];
        N || (N = 0), (N &= 127);
        var q = N == 0 ? [] : f.slice(-N);
        (f.length -= N),
          W === 'User' && (W = q.shift()),
          f.push(W + '(' + q.join(',') + ')');
        break;
      case 'PtgBool':
        f.push(A[1] ? 'TRUE' : 'FALSE');
        break;
      case 'PtgInt':
        f.push(A[1]);
        break;
      case 'PtgNum':
        f.push(String(A[1]));
        break;
      case 'PtgStr':
        f.push('"' + A[1].replace(/"/g, '""') + '"');
        break;
      case 'PtgErr':
        f.push(A[1]);
        break;
      case 'PtgAreaN':
        (x = Zs(A[1][1], t ? { s: t } : s, i)), f.push(Ya(x, i));
        break;
      case 'PtgArea':
        (x = Zs(A[1][1], s, i)), f.push(Ya(x, i));
        break;
      case 'PtgArea3d':
        (h = A[1][1]),
          (x = A[1][2]),
          (p = pf(n, h, i)),
          f.push(p + '!' + Ya(x, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = A[1][2];
        var O = (n.names || [])[u - 1] || (n[0] || [])[u],
          b = O ? O.Name : 'SH33TJSNAME' + String(u);
        b && b.slice(0, 6) == '_xlfn.' && !i.xlfn && (b = b.slice(6)),
          f.push(b);
        break;
      case 'PtgNameX':
        var P = A[1][1];
        u = A[1][2];
        var V;
        if (i.biff <= 5) P < 0 && (P = -P), n[P] && (V = n[P][u]);
        else {
          var G = '';
          if (
            (((n[P] || [])[0] || [])[0] == 14849 ||
              (((n[P] || [])[0] || [])[0] == 1025
                ? n[P][u] &&
                  n[P][u].itab > 0 &&
                  (G = n.SheetNames[n[P][u].itab - 1] + '!')
                : (G = n.SheetNames[u - 1] + '!')),
            n[P] && n[P][u])
          )
            G += n[P][u].Name;
          else if (n[0] && n[0][u]) G += n[0][u].Name;
          else {
            var X = (Ul(n, P, i) || '').split(';;');
            X[u - 1] ? (G = X[u - 1]) : (G += 'SH33TJSERRX');
          }
          f.push(G);
          break;
        }
        V || (V = { Name: 'SH33TJSERRY' }), f.push(V.Name);
        break;
      case 'PtgParen':
        var ee = '(',
          Te = ')';
        if (d >= 0) {
          switch (((m = ''), e[0][d][1][0])) {
            case 2:
              ee = Ke(' ', e[0][d][1][1]) + ee;
              break;
            case 3:
              ee = Ke('\r', e[0][d][1][1]) + ee;
              break;
            case 4:
              Te = Ke(' ', e[0][d][1][1]) + Te;
              break;
            case 5:
              Te = Ke('\r', e[0][d][1][1]) + Te;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0]);
          }
          d = -1;
        }
        f.push(ee + f.pop() + Te);
        break;
      case 'PtgRefErr':
        f.push('#REF!');
        break;
      case 'PtgRefErr3d':
        f.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: A[1][1], r: A[1][0] };
        var ue = { c: t.c, r: t.r };
        if (n.sharedf[Ne(c)]) {
          var He = n.sharedf[Ne(c)];
          f.push(Nn(He, s, ue, n, i));
        } else {
          var ke = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(Nn(o[1], s, ue, n, i)), (ke = !0);
              break;
            }
          ke || f.push(A[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + Tv(A[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        d = y;
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
        f.push('Table' + A[1].idx + '[#' + A[1].rt + ']');
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
        throw new Error('Unrecognized Formula Token: ' + String(A));
      default:
        throw new Error('Unrecognized Formula Token: ' + String(A));
    }
    var ze = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && d >= 0 && ze.indexOf(e[0][y][0]) == -1) {
      A = e[0][d];
      var Ve = !0;
      switch (A[1][0]) {
        case 4:
          Ve = !1;
        case 0:
          m = Ke(' ', A[1][1]);
          break;
        case 5:
          Ve = !1;
        case 1:
          m = Ke('\r', A[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + A[1][0]);
      }
      f.push((Ve ? m : '') + f.pop() + (Ve ? '' : m)), (d = -1);
    }
  }
  if (f.length > 1 && i.WTF) throw new Error('bad formula stack');
  return f[0];
}
function Av(e) {
  if (e == null) {
    var r = H(8);
    return (
      r.write_shift(1, 3),
      r.write_shift(1, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 65535),
      r
    );
  } else if (typeof e == 'number') return an(e);
  return an(0);
}
function yv(e, r, t, n, i) {
  var a = sn(r, t, i),
    s = Av(e.v),
    f = H(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = H(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var h = ct([a, s, f, o]);
  return h;
}
function Ba(e, r, t) {
  var n = e.read_shift(4),
    i = Ev(e, n, t),
    a = e.read_shift(4),
    s = a > 0 ? gv(e, a, i, t) : null;
  return [i, s];
}
var Fv = Ba,
  ba = Ba,
  Cv = Ba,
  Ov = Ba,
  Rv = {
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
  Hl = {
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
  Nv = {
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
function kv(e) {
  var r = 'of:=' + e.replace(Q0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return r.replace(/;/g, '|').replace(/,/g, ';');
}
function Dv(e) {
  return e.replace(/\./, '!');
}
var oi = typeof Map < 'u';
function rs(e, r, t) {
  var n = 0,
    i = e.length;
  if (t) {
    if (oi ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var a = oi ? t.get(r) : t[r]; n < a.length; ++n)
        if (e[a[n]].t === r) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === r) return e.Count++, n;
  return (
    (e[i] = { t: r }),
    e.Count++,
    e.Unique++,
    t &&
      (oi
        ? (t.has(r) || t.set(r, []), t.get(r).push(i))
        : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []),
          t[r].push(i))),
    i
  );
}
function Ua(e, r) {
  var t = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    r.MDW && (Or = r.MDW),
    r.width != null
      ? (t.customWidth = 1)
      : r.wpx != null
        ? (n = xa(r.wpx))
        : r.wch != null && (n = r.wch),
    n > -1
      ? ((t.width = g0(n)), (t.customWidth = 1))
      : r.width != null && (t.width = r.width),
    r.hidden && (t.hidden = !0),
    r.level != null && (t.outlineLevel = t.level = r.level),
    t
  );
}
function Wl(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    e.left == null && (e.left = t[0]),
      e.right == null && (e.right = t[1]),
      e.top == null && (e.top = t[2]),
      e.bottom == null && (e.bottom = t[3]),
      e.header == null && (e.header = t[4]),
      e.footer == null && (e.footer = t[5]);
  }
}
function jr(e, r, t) {
  var n = t.revssf[r.z != null ? r.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && t.ssf) {
    for (; i < 392; ++i)
      if (t.ssf[i] == null) {
        Mo(r.z, i), (t.ssf[i] = r.z), (t.revssf[r.z] = n = i);
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
function Iv(e, r, t) {
  if (e && e['!ref']) {
    var n = Ue(e['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + t + '): ' + e['!ref']);
  }
}
function Pv(e) {
  if (e.length === 0) return '';
  for (
    var r = '<mergeCells count="' + e.length + '">', t = 0;
    t != e.length;
    ++t
  )
    r += '<mergeCell ref="' + et(e[t]) + '"/>';
  return r + '</mergeCells>';
}
function Lv(e, r, t, n, i) {
  var a = !1,
    s = {},
    f = null;
  if (n.bookType !== 'xlsx' && r.vbaraw) {
    var l = r.SheetNames[t];
    try {
      r.Workbook && (l = r.Workbook.Sheets[t].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = vi(Re(l)));
  }
  if (e && e['!outline']) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e['!outline'].above && (o.summaryBelow = 0),
      e['!outline'].left && (o.summaryRight = 0),
      (f = (f || '') + J('outlinePr', null, o));
  }
  (!a && !f) || (i[i.length] = J('sheetPr', f, s));
}
var Mv = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  Bv = [
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
function bv(e) {
  var r = { sheet: 1 };
  return (
    Mv.forEach(function (t) {
      e[t] != null && e[t] && (r[t] = '1');
    }),
    Bv.forEach(function (t) {
      e[t] != null && !e[t] && (r[t] = '0');
    }),
    e.password && (r.password = Al(e.password).toString(16).toUpperCase()),
    J('sheetProtection', null, r)
  );
}
function Uv(e) {
  return Wl(e), J('pageMargins', null, e);
}
function Hv(e, r) {
  for (var t = ['<cols>'], n, i = 0; i != r.length; ++i)
    (n = r[i]) && (t[t.length] = J('col', null, Ua(i, n)));
  return (t[t.length] = '</cols>'), t.join('');
}
function Wv(e, r, t, n) {
  var i = typeof e.ref == 'string' ? e.ref : et(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }),
    t.Workbook.Names || (t.Workbook.Names = []);
  var a = t.Workbook.Names,
    s = jt(i);
  s.s.r == s.e.r && ((s.e.r = jt(r['!ref']).e.r), (i = et(s)));
  for (var f = 0; f < a.length; ++f) {
    var l = a[f];
    if (l.Name == '_xlnm._FilterDatabase' && l.Sheet == n) {
      l.Ref = "'" + t.SheetNames[n] + "'!" + i;
      break;
    }
  }
  return (
    f == a.length &&
      a.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + t.SheetNames[n] + "'!" + i,
      }),
    J('autoFilter', null, { ref: i })
  );
}
function Vv(e, r, t, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    J('sheetViews', J('sheetView', null, i), {})
  );
}
function Gv(e, r, t, n) {
  if (
    (e.c && t['!comments'].push([r, e.c]),
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
        i = Oi[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = Rt(e.v, -1).toISOString())
          : ((e = Bt(e)), (e.t = 'n'), (i = '' + (e.v = Mt(Rt(e.v))))),
          typeof e.z > 'u' && (e.z = qe[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = ut('v', Re(i)),
    l = { r },
    o = jr(n.cellXfs, e, n);
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
        (f = ut('v', '' + rs(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, r.length) == r ? { t: 'array', ref: e.F } : null;
    f = J('f', Re(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && t['!links'].push([r, e.l]), e.D && (l.cm = 1), J('c', f, l);
}
function $v(e, r, t, n) {
  var i = [],
    a = [],
    s = Ue(e['!ref']),
    f = '',
    l,
    o = '',
    c = [],
    h = 0,
    u = 0,
    x = e['!rows'],
    p = Array.isArray(e),
    d = { r: o },
    m,
    y = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = gt(u);
  for (h = s.s.r; h <= s.e.r; ++h) {
    for (a = [], o = ht(h), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + o;
      var F = p ? (e[h] || [])[u] : e[l];
      F !== void 0 && (f = Gv(F, l, e, r)) != null && a.push(f);
    }
    (a.length > 0 || (x && x[h])) &&
      ((d = { r: o }),
      x &&
        x[h] &&
        ((m = x[h]),
        m.hidden && (d.hidden = 1),
        (y = -1),
        m.hpx ? (y = pa(m.hpx)) : m.hpt && (y = m.hpt),
        y > -1 && ((d.ht = y), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level)),
      (i[i.length] = J('row', a.join(''), d)));
  }
  if (x)
    for (; h < x.length; ++h)
      x &&
        x[h] &&
        ((d = { r: h + 1 }),
        (m = x[h]),
        m.hidden && (d.hidden = 1),
        (y = -1),
        m.hpx ? (y = pa(m.hpx)) : m.hpt && (y = m.hpt),
        y > -1 && ((d.ht = y), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level),
        (i[i.length] = J('row', '', d)));
  return i.join('');
}
function Vl(e, r, t, n) {
  var i = [tt, J('worksheet', null, { xmlns: Mn[0], 'xmlns:r': it.r })],
    a = t.SheetNames[e],
    s = 0,
    f = '',
    l = t.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = Ue(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = et(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var h = [];
  Lv(l, t, e, r, i),
    (i[i.length] = J('dimension', null, { ref: o })),
    (i[i.length] = Vv(l, r, e, t)),
    r.sheetFormat &&
      (i[i.length] = J('sheetFormatPr', null, {
        defaultRowHeight: r.sheetFormat.defaultRowHeight || '16',
        baseColWidth: r.sheetFormat.baseColWidth || '10',
        outlineLevelRow: r.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = Hv(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = $v(l, r)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = bv(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = Wv(l['!autofilter'], l, t, e)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = Pv(l['!merges']));
  var u = -1,
    x,
    p = -1;
  return (
    l['!links'].length > 0 &&
      ((i[i.length] = '<hyperlinks>'),
      l['!links'].forEach(function (d) {
        d[1].Target &&
          ((x = { ref: d[0] }),
          d[1].Target.charAt(0) != '#' &&
            ((p = Oe(n, -1, Re(d[1].Target).replace(/#.*$/, ''), Se.HLINK)),
            (x['r:id'] = 'rId' + p)),
          (u = d[1].Target.indexOf('#')) > -1 &&
            (x.location = Re(d[1].Target.slice(u + 1))),
          d[1].Tooltip && (x.tooltip = Re(d[1].Tooltip)),
          (i[i.length] = J('hyperlink', null, x)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = Uv(l['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) &&
      (i[i.length] = ut(
        'ignoredErrors',
        J('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    h.length > 0 &&
      ((p = Oe(n, -1, '../drawings/drawing' + (e + 1) + '.xml', Se.DRAW)),
      (i[i.length] = J('drawing', null, { 'r:id': 'rId' + p })),
      (l['!drawing'] = h)),
    l['!comments'].length > 0 &&
      ((p = Oe(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', Se.VML)),
      (i[i.length] = J('legacyDrawing', null, { 'r:id': 'rId' + p })),
      (l['!legacy'] = p)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function jv(e, r) {
  var t = {},
    n = e.l + r;
  (t.r = e.read_shift(4)), (e.l += 4);
  var i = e.read_shift(2);
  e.l += 1;
  var a = e.read_shift(1);
  return (
    (e.l = n),
    a & 7 && (t.level = a & 7),
    a & 16 && (t.hidden = !0),
    a & 32 && (t.hpt = i / 20),
    t
  );
}
function zv(e, r, t) {
  var n = H(145),
    i = (t['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = pa(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
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
    if (!(r.s.c > (c + 1) << 10 || r.e.c < c << 10)) {
      for (var h = -1, u = -1, x = c << 10; x < (c + 1) << 10; ++x) {
        o.c = x;
        var p = Array.isArray(t) ? (t[o.r] || [])[o.c] : t[Ne(o)];
        p && (h < 0 && (h = x), (u = x));
      }
      h < 0 || (++f, n.write_shift(4, h), n.write_shift(4, u));
    }
  var d = n.l;
  return (
    (n.l = l),
    n.write_shift(4, f),
    (n.l = d),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Xv(e, r, t, n) {
  var i = zv(n, t, r);
  (i.length > 17 || (r['!rows'] || [])[n]) && j(e, 0, i);
}
var Kv = hn,
  qv = bn;
function Yv() {}
function Jv(e, r) {
  var t = {},
    n = e[e.l];
  return (
    ++e.l,
    (t.above = !(n & 64)),
    (t.left = !(n & 128)),
    (e.l += 18),
    (t.name = fd(e)),
    t
  );
}
function Zv(e, r, t) {
  t == null && (t = H(84 + 4 * e.length));
  var n = 192;
  r && (r.above && (n &= -65), r.left && (n &= -129)), t.write_shift(1, n);
  for (var i = 1; i < 3; ++i) t.write_shift(1, 0);
  return (
    ua({ auto: 1 }, t),
    t.write_shift(-4, -1),
    t.write_shift(-4, -1),
    nl(e, t),
    t.slice(0, t.l)
  );
}
function Qv(e) {
  var r = Jt(e);
  return [r];
}
function em(e, r, t) {
  return t == null && (t = H(8)), ln(r, t);
}
function tm(e) {
  var r = cn(e);
  return [r];
}
function rm(e, r, t) {
  return t == null && (t = H(4)), un(r, t);
}
function nm(e) {
  var r = Jt(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function im(e, r, t) {
  return t == null && (t = H(9)), ln(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function am(e) {
  var r = cn(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function sm(e, r, t) {
  return t == null && (t = H(5)), un(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function fm(e) {
  var r = Jt(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function om(e, r, t) {
  return t == null && (t = H(9)), ln(r, t), t.write_shift(1, e.v), t;
}
function lm(e) {
  var r = cn(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function cm(e, r, t) {
  return (
    t == null && (t = H(8)),
    un(r, t),
    t.write_shift(1, e.v),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t
  );
}
function um(e) {
  var r = Jt(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function hm(e, r, t) {
  return t == null && (t = H(12)), ln(r, t), t.write_shift(4, r.v), t;
}
function dm(e) {
  var r = cn(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function xm(e, r, t) {
  return t == null && (t = H(8)), un(r, t), t.write_shift(4, r.v), t;
}
function pm(e) {
  var r = Jt(e),
    t = Un(e);
  return [r, t, 'n'];
}
function vm(e, r, t) {
  return t == null && (t = H(16)), ln(r, t), an(e.v, t), t;
}
function mm(e) {
  var r = cn(e),
    t = Un(e);
  return [r, t, 'n'];
}
function _m(e, r, t) {
  return t == null && (t = H(12)), un(r, t), an(e.v, t), t;
}
function gm(e) {
  var r = Jt(e),
    t = il(e);
  return [r, t, 'n'];
}
function Em(e, r, t) {
  return t == null && (t = H(12)), ln(r, t), al(e.v, t), t;
}
function Tm(e) {
  var r = cn(e),
    t = il(e);
  return [r, t, 'n'];
}
function wm(e, r, t) {
  return t == null && (t = H(8)), un(r, t), al(e.v, t), t;
}
function Sm(e) {
  var r = Jt(e),
    t = K0(e);
  return [r, t, 'is'];
}
function Am(e) {
  var r = Jt(e),
    t = Et(e);
  return [r, t, 'str'];
}
function ym(e, r, t) {
  return (
    t == null && (t = H(12 + 4 * e.v.length)),
    ln(r, t),
    st(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function Fm(e) {
  var r = cn(e),
    t = Et(e);
  return [r, t, 'str'];
}
function Cm(e, r, t) {
  return (
    t == null && (t = H(8 + 4 * e.v.length)),
    un(r, t),
    st(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function Om(e, r, t) {
  var n = e.l + r,
    i = Jt(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (t.cellFormula) {
    e.l += 2;
    var f = ba(e, n - e.l, t);
    s[3] = Nn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function Rm(e, r, t) {
  var n = e.l + r,
    i = Jt(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (t.cellFormula) {
    e.l += 2;
    var f = ba(e, n - e.l, t);
    s[3] = Nn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function Nm(e, r, t) {
  var n = e.l + r,
    i = Jt(e);
  i.r = t['!row'];
  var a = Un(e),
    s = [i, a, 'n'];
  if (t.cellFormula) {
    e.l += 2;
    var f = ba(e, n - e.l, t);
    s[3] = Nn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function km(e, r, t) {
  var n = e.l + r,
    i = Jt(e);
  i.r = t['!row'];
  var a = Et(e),
    s = [i, a, 'str'];
  if (t.cellFormula) {
    e.l += 2;
    var f = ba(e, n - e.l, t);
    s[3] = Nn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
var Dm = hn,
  Im = bn;
function Pm(e, r) {
  return r == null && (r = H(4)), r.write_shift(4, e), r;
}
function Lm(e, r) {
  var t = e.l + r,
    n = hn(e),
    i = q0(e),
    a = Et(e),
    s = Et(e),
    f = Et(e);
  e.l = t;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function Mm(e, r) {
  var t = H(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  bn({ s: at(e[0]), e: at(e[0]) }, t), Y0('rId' + r, t);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return st(i || '', t), st(e[1].Tooltip || '', t), st('', t), t.slice(0, t.l);
}
function Bm() {}
function bm(e, r, t) {
  var n = e.l + r,
    i = sl(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), t.cellFormula)) {
    var f = Fv(e, n - e.l, t);
    s[1] = f;
  } else e.l = n;
  return s;
}
function Um(e, r, t) {
  var n = e.l + r,
    i = hn(e),
    a = [i];
  if (t.cellFormula) {
    var s = Ov(e, n - e.l, t);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function Hm(e, r, t) {
  t == null && (t = H(18));
  var n = Ua(e, r);
  t.write_shift(-4, e),
    t.write_shift(-4, e),
    t.write_shift(4, (n.width || 10) * 256),
    t.write_shift(4, 0);
  var i = 0;
  return (
    r.hidden && (i |= 1),
    typeof n.width == 'number' && (i |= 2),
    r.level && (i |= r.level << 8),
    t.write_shift(2, i),
    t
  );
}
var Gl = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function Wm(e) {
  var r = {};
  return (
    Gl.forEach(function (t) {
      r[t] = Un(e);
    }),
    r
  );
}
function Vm(e, r) {
  return (
    r == null && (r = H(6 * 8)),
    Wl(e),
    Gl.forEach(function (t) {
      an(e[t], r);
    }),
    r
  );
}
function Gm(e) {
  var r = e.read_shift(2);
  return (e.l += 28), { RTL: r & 32 };
}
function $m(e, r, t) {
  t == null && (t = H(30));
  var n = 924;
  return (
    (((r || {}).Views || [])[0] || {}).RTL && (n |= 32),
    t.write_shift(2, n),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(2, 0),
    t.write_shift(2, 100),
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(2, 0),
    t.write_shift(4, 0),
    t
  );
}
function jm(e) {
  var r = H(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), bn(e, r), r;
}
function zm(e, r) {
  return (
    r == null && (r = H(16 * 4 + 2)),
    r.write_shift(2, e.password ? Al(e.password) : 0),
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
    ].forEach(function (t) {
      t[1]
        ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0)
        : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
    }),
    r
  );
}
function Xm() {}
function Km() {}
function qm(e, r, t, n, i, a, s) {
  if (r.v === void 0) return !1;
  var f = '';
  switch (r.t) {
    case 'b':
      f = r.v ? '1' : '0';
      break;
    case 'd':
      (r = Bt(r)), (r.z = r.z || qe[14]), (r.v = Mt(Rt(r.v))), (r.t = 'n');
      break;
    case 'n':
    case 'e':
      f = '' + r.v;
      break;
    default:
      f = r.v;
      break;
  }
  var l = { r: t, c: n };
  switch (
    ((l.s = jr(i.cellXfs, r, i)),
    r.l && a['!links'].push([Ne(l), r.l]),
    r.c && a['!comments'].push([Ne(l), r.c]),
    r.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = rs(i.Strings, r.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? j(e, 18, xm(r, l)) : j(e, 7, hm(r, l)))
          : ((l.t = 'str'), s ? j(e, 17, Cm(r, l)) : j(e, 6, ym(r, l))),
        !0
      );
    case 'n':
      return (
        r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3
          ? s
            ? j(e, 13, wm(r, l))
            : j(e, 2, Em(r, l))
          : s
            ? j(e, 16, _m(r, l))
            : j(e, 5, vm(r, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? j(e, 15, sm(r, l)) : j(e, 4, im(r, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? j(e, 14, cm(r, l)) : j(e, 3, om(r, l)), !0;
  }
  return s ? j(e, 12, rm(r, l)) : j(e, 1, em(r, l)), !0;
}
function Ym(e, r, t, n) {
  var i = Ue(r['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  j(e, 145);
  var l = Array.isArray(r),
    o = i.e.r;
  r['!rows'] && (o = Math.max(i.e.r, r['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = ht(c)), Xv(e, r, i, c);
    var h = !1;
    if (c <= i.e.r)
      for (var u = i.s.c; u <= i.e.c; ++u) {
        c === i.s.r && (f[u] = gt(u)), (a = f[u] + s);
        var x = l ? (r[c] || [])[u] : r[a];
        if (!x) {
          h = !1;
          continue;
        }
        h = qm(e, x, c, u, n, r, h);
      }
  }
  j(e, 146);
}
function Jm(e, r) {
  !r ||
    !r['!merges'] ||
    (j(e, 177, Pm(r['!merges'].length)),
    r['!merges'].forEach(function (t) {
      j(e, 176, Im(t));
    }),
    j(e, 178));
}
function Zm(e, r) {
  !r ||
    !r['!cols'] ||
    (j(e, 390),
    r['!cols'].forEach(function (t, n) {
      t && j(e, 60, Hm(n, t));
    }),
    j(e, 391));
}
function Qm(e, r) {
  !r || !r['!ref'] || (j(e, 648), j(e, 649, jm(Ue(r['!ref']))), j(e, 650));
}
function e2(e, r, t) {
  r['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = Oe(t, -1, n[1].Target.replace(/#.*$/, ''), Se.HLINK);
      j(e, 494, Mm(n, i));
    }
  }),
    delete r['!links'];
}
function t2(e, r, t, n) {
  if (r['!comments'].length > 0) {
    var i = Oe(n, -1, '../drawings/vmlDrawing' + (t + 1) + '.vml', Se.VML);
    j(e, 551, Y0('rId' + i)), (r['!legacy'] = i);
  }
}
function r2(e, r, t, n) {
  if (r['!autofilter']) {
    var i = r['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : et(i.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }),
      t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names,
      f = jt(a);
    f.s.r == f.e.r && ((f.e.r = jt(r['!ref']).e.r), (a = et(f)));
    for (var l = 0; l < s.length; ++l) {
      var o = s[l];
      if (o.Name == '_xlnm._FilterDatabase' && o.Sheet == n) {
        o.Ref = "'" + t.SheetNames[n] + "'!" + a;
        break;
      }
    }
    l == s.length &&
      s.push({
        Name: '_xlnm._FilterDatabase',
        Sheet: n,
        Ref: "'" + t.SheetNames[n] + "'!" + a,
      }),
      j(e, 161, bn(Ue(a))),
      j(e, 162);
  }
}
function n2(e, r, t) {
  j(e, 133), j(e, 137, $m(r, t)), j(e, 138), j(e, 134);
}
function i2(e, r) {
  r['!protect'] && j(e, 535, zm(r['!protect']));
}
function a2(e, r, t, n) {
  var i = Pt(),
    a = t.SheetNames[e],
    s = t.Sheets[a] || {},
    f = a;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = Ue(s['!ref'] || 'A1');
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
    j(i, 129),
    (t.vbaraw || s['!outline']) && j(i, 147, Zv(f, s['!outline'])),
    j(i, 148, qv(l)),
    n2(i, s, t.Workbook),
    Zm(i, s),
    Ym(i, s, e, r),
    i2(i, s),
    r2(i, s, t, e),
    Jm(i, s),
    e2(i, s, n),
    s['!margins'] && j(i, 476, Vm(s['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) && Qm(i, s),
    t2(i, s, e, n),
    j(i, 130),
    i.end()
  );
}
function s2(e, r) {
  e.l += 10;
  var t = Et(e);
  return { name: t };
}
var f2 = [
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
function o2(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : U1(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var l2 = '][*?/\\'.split('');
function $l(e, r) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var t = !0;
  return (
    l2.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    t
  );
}
function c2(e, r, t) {
  e.forEach(function (n, i) {
    $l(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (t) {
      var s = (r && r[i] && r[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function u2(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var r = (e.Workbook && e.Workbook.Sheets) || [];
  c2(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t)
    Iv(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
}
function jl(e) {
  var r = [tt];
  r[r.length] = J('workbook', null, { xmlns: Mn[0], 'xmlns:r': it.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  e.Workbook &&
    e.Workbook.WBProps &&
    (f2.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (r[r.length] = J('workbookPr', null, n));
  var i = (e.Workbook && e.Workbook.Sheets) || [],
    a = 0;
  if (i && i[0] && i[0].Hidden) {
    for (
      r[r.length] = '<bookViews>', a = 0;
      a != e.SheetNames.length && !(!i[a] || !i[a].Hidden);
      ++a
    );
    a == e.SheetNames.length && (a = 0),
      (r[r.length] =
        '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>'),
      (r[r.length] = '</bookViews>');
  }
  for (r[r.length] = '<sheets>', a = 0; a != e.SheetNames.length; ++a) {
    var s = { name: Re(e.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    r[r.length] = J('sheet', null, s);
  }
  return (
    (r[r.length] = '</sheets>'),
    t &&
      ((r[r.length] = '<definedNames>'),
      e.Workbook &&
        e.Workbook.Names &&
        e.Workbook.Names.forEach(function (f) {
          var l = { name: f.Name };
          f.Comment && (l.comment = f.Comment),
            f.Sheet != null && (l.localSheetId = '' + f.Sheet),
            f.Hidden && (l.hidden = '1'),
            f.Ref && (r[r.length] = J('definedName', Re(f.Ref), l));
        }),
      (r[r.length] = '</definedNames>')),
    r.length > 2 &&
      ((r[r.length] = '</workbook>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function h2(e, r) {
  var t = {};
  return (
    (t.Hidden = e.read_shift(4)),
    (t.iTabID = e.read_shift(4)),
    (t.strRelID = _0(e)),
    (t.name = Et(e)),
    t
  );
}
function d2(e, r) {
  return (
    r || (r = H(127)),
    r.write_shift(4, e.Hidden),
    r.write_shift(4, e.iTabID),
    Y0(e.strRelID, r),
    st(e.name.slice(0, 31), r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function x2(e, r) {
  var t = {},
    n = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var i = r > 8 ? Et(e) : '';
  return (
    i.length > 0 && (t.CodeName = i),
    (t.autoCompressPictures = !!(n & 65536)),
    (t.backupFile = !!(n & 64)),
    (t.checkCompatibility = !!(n & 4096)),
    (t.date1904 = !!(n & 1)),
    (t.filterPrivacy = !!(n & 8)),
    (t.hidePivotFieldList = !!(n & 1024)),
    (t.promptedSolutions = !!(n & 16)),
    (t.publishItems = !!(n & 2048)),
    (t.refreshAllConnections = !!(n & 262144)),
    (t.saveExternalLinkValues = !!(n & 128)),
    (t.showBorderUnselectedTables = !!(n & 4)),
    (t.showInkAnnotation = !!(n & 32)),
    (t.showObjects = ['all', 'placeholders', 'none'][(n >> 13) & 3]),
    (t.showPivotChartFilter = !!(n & 32768)),
    (t.updateLinks = ['userSet', 'never', 'always'][(n >> 8) & 3]),
    t
  );
}
function p2(e, r) {
  r || (r = H(72));
  var t = 0;
  return (
    e && e.filterPrivacy && (t |= 8),
    r.write_shift(4, t),
    r.write_shift(4, 0),
    nl((e && e.CodeName) || 'ThisWorkbook', r),
    r.slice(0, r.l)
  );
}
function v2(e, r, t) {
  var n = e.l + r;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = od(e),
    s = Cv(e, 0, t),
    f = q0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function m2(e, r) {
  j(e, 143);
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var n =
        (r.Workbook &&
          r.Workbook.Sheets &&
          r.Workbook.Sheets[t] &&
          r.Workbook.Sheets[t].Hidden) ||
        0,
      i = {
        Hidden: n,
        iTabID: t + 1,
        strRelID: 'rId' + (t + 1),
        name: r.SheetNames[t],
      };
    j(e, 156, d2(i));
  }
  j(e, 144);
}
function _2(e, r) {
  r || (r = H(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return (
    st('SheetJS', r),
    st(ia.version, r),
    st(ia.version, r),
    st('7262', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function g2(e, r) {
  r || (r = H(29)),
    r.write_shift(-4, 0),
    r.write_shift(-4, 460),
    r.write_shift(4, 28800),
    r.write_shift(4, 17600),
    r.write_shift(4, 500),
    r.write_shift(4, e),
    r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function E2(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, n = 0, i = -1, a = -1; n < t.length; ++n)
      !t[n] || (!t[n].Hidden && i == -1)
        ? (i = n)
        : t[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (j(e, 135), j(e, 158, g2(i)), j(e, 136));
  }
}
function T2(e, r) {
  var t = Pt();
  return (
    j(t, 131),
    j(t, 128, _2()),
    j(t, 153, p2((e.Workbook && e.Workbook.WBProps) || null)),
    E2(t, e),
    m2(t, e),
    j(t, 132),
    t.end()
  );
}
function w2(e, r, t) {
  return (r.slice(-4) === '.bin' ? T2 : jl)(e);
}
function S2(e, r, t, n, i) {
  return (r.slice(-4) === '.bin' ? a2 : Vl)(e, t, n, i);
}
function A2(e, r, t) {
  return (r.slice(-4) === '.bin' ? Vx : Cl)(e, t);
}
function y2(e, r, t) {
  return (r.slice(-4) === '.bin' ? px : Sl)(e, t);
}
function F2(e, r, t) {
  return (r.slice(-4) === '.bin' ? ip : Dl)(e);
}
function C2(e) {
  return (e.slice(-4) === '.bin' ? Yx : Nl)();
}
function O2(e, r) {
  var t = [];
  return (
    e.Props && t.push(Ad(e.Props, r)),
    e.Custprops && t.push(yd(e.Props, e.Custprops)),
    t.join('')
  );
}
function R2() {
  return '';
}
function N2(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    r.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(J('NumberFormat', null, { 'ss:Format': Re(qe[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      t.push(J('Style', a.join(''), s));
    }),
    J('Styles', t.join(''))
  );
}
function zl(e) {
  return J('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + es(e.Ref, { r: 0, c: 0 }),
  });
}
function k2(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var r = e.Workbook.Names, t = [], n = 0; n < r.length; ++n) {
    var i = r[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || t.push(zl(i)));
  }
  return J('Names', t.join(''));
}
function D2(e, r, t, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || a.push(zl(f)));
  }
  return a.join('');
}
function I2(e, r, t, n) {
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
    n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[t])
  )
    if (n.Workbook.Sheets[t].Hidden)
      i.push(
        J(
          'Visible',
          n.Workbook.Sheets[t].Hidden == 1 ? 'SheetHidden' : 'SheetVeryHidden',
          {},
        ),
      );
    else {
      for (
        var a = 0;
        a < t && !(n.Workbook.Sheets[a] && !n.Workbook.Sheets[a].Hidden);
        ++a
      );
      a == t && i.push('<Selected/>');
    }
  return (
    ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL &&
      i.push('<DisplayRightToLeft/>'),
    e['!protect'] &&
      (i.push(ut('ProtectContents', 'True')),
      e['!protect'].objects && i.push(ut('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(ut('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(ut('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(ut('EnableSelection', 'UnlockedCells')),
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
    i.length == 0 ? '' : J('WorksheetOptions', i.join(''), { xmlns: Vt.x })
  );
}
function P2(e) {
  return e
    .map(function (r) {
      var t = b1(r.t || ''),
        n = J('ss:Data', t, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return J('Comment', n, { 'ss:Author': r.a });
    })
    .join('');
}
function L2(e, r, t, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + Re(es(e.f, s))),
    e.F && e.F.slice(0, r.length) == r)
  ) {
    var l = at(e.F.slice(r.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = Re(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = Re(e.l.Tooltip))),
    t['!merges'])
  )
    for (var o = t['!merges'], c = 0; c != o.length; ++c)
      o[c].s.c != s.c ||
        o[c].s.r != s.r ||
        (o[c].e.c > o[c].s.c && (f['ss:MergeAcross'] = o[c].e.c - o[c].s.c),
        o[c].e.r > o[c].s.r && (f['ss:MergeDown'] = o[c].e.r - o[c].s.r));
  var h = '',
    u = '';
  switch (e.t) {
    case 'z':
      if (!n.sheetStubs) return '';
      break;
    case 'n':
      (h = 'Number'), (u = String(e.v));
      break;
    case 'b':
      (h = 'Boolean'), (u = e.v ? '1' : '0');
      break;
    case 'e':
      (h = 'Error'), (u = Oi[e.v]);
      break;
    case 'd':
      (h = 'DateTime'),
        (u = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || qe[14]);
      break;
    case 's':
      (h = 'String'), (u = B1(e.v || ''));
      break;
  }
  var x = jr(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + x)), (f['ss:Index'] = s.c + 1);
  var p = e.v != null ? u : '',
    d = e.t == 'z' ? '' : '<Data ss:Type="' + h + '">' + p + '</Data>';
  return (e.c || []).length > 0 && (d += P2(e.c)), J('Cell', d, f);
}
function M2(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return (
    r &&
      (r.hpt && !r.hpx && (r.hpx = Fl(r.hpt)),
      r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
      r.hidden && (t += ' ss:Hidden="1"')),
    t + '>'
  );
}
function B2(e, r, t, n) {
  if (!e['!ref']) return '';
  var i = Ue(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, y) {
      Z0(m);
      var F = !!m.width,
        A = Ua(y, m),
        N = { 'ss:Index': y + 1 };
      F && (N['ss:Width'] = da(A.width)),
        m.hidden && (N['ss:Hidden'] = '1'),
        f.push(J('Column', null, N));
    });
  for (var l = Array.isArray(e), o = i.s.r; o <= i.e.r; ++o) {
    for (var c = [M2(o, (e['!rows'] || [])[o])], h = i.s.c; h <= i.e.c; ++h) {
      var u = !1;
      for (s = 0; s != a.length; ++s)
        if (
          !(a[s].s.c > h) &&
          !(a[s].s.r > o) &&
          !(a[s].e.c < h) &&
          !(a[s].e.r < o)
        ) {
          (a[s].s.c != h || a[s].s.r != o) && (u = !0);
          break;
        }
      if (!u) {
        var x = { r: o, c: h },
          p = Ne(x),
          d = l ? (e[o] || [])[h] : e[p];
        c.push(L2(d, p, e, r, t, n, x));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function b2(e, r, t) {
  var n = [],
    i = t.SheetNames[e],
    a = t.Sheets[i],
    s = a ? D2(a, r, e, t) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? B2(a, r, e, t) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(I2(a, r, e, t)),
    n.join('')
  );
}
function U2(e, r) {
  r || (r = {}),
    e.SSF || (e.SSF = Bt(qe)),
    e.SSF &&
      (Pa(),
      Ia(e.SSF),
      (r.revssf = La(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF),
      (r.cellXfs = []),
      jr(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(O2(e, r)), t.push(R2()), t.push(''), t.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    t.push(J('Worksheet', b2(n, r, e), { 'ss:Name': Re(e.SheetNames[n]) }));
  return (
    (t[2] = N2(e, r)),
    (t[3] = k2(e)),
    tt +
      J('Workbook', t.join(''), {
        xmlns: Vt.ss,
        'xmlns:o': Vt.o,
        'xmlns:x': Vt.x,
        'xmlns:ss': Vt.ss,
        'xmlns:dt': Vt.dt,
        'xmlns:html': Vt.html,
      })
  );
}
var Qa = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function H2(e, r) {
  var t = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = Ws(ef, 'n'),
    l = Ws(tf, 'n');
  if (e.Props)
    for (s = dt(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? t
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = dt(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? t
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    vl.indexOf(i[a][0]) > -1 ||
      dl.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Ie.utils.cfb_add(r, '/SummaryInformation', ff(n, Qa.SI, l, tf)),
    (t.length || o.length) &&
      Ie.utils.cfb_add(
        r,
        '/DocumentSummaryInformation',
        ff(t, Qa.DSI, f, ef, o.length ? o : null, Qa.UDI),
      );
}
function W2(e, r) {
  var t = r || {},
    n = Ie.utils.cfb_new({ root: 'R' }),
    i = '/Workbook';
  switch (t.bookType || 'xls') {
    case 'xls':
      t.bookType = 'biff8';
    case 'xla':
      t.bookType || (t.bookType = 'xla');
    case 'biff8':
      (i = '/Workbook'), (t.biff = 8);
      break;
    case 'biff5':
      (i = '/Book'), (t.biff = 5);
      break;
    default:
      throw new Error('invalid type ' + t.bookType + ' for XLS CFB');
  }
  return (
    Ie.utils.cfb_add(n, i, Xl(e, t)),
    t.biff == 8 && (e.Props || e.Custprops) && H2(e, n),
    t.biff == 8 &&
      e.vbaraw &&
      ap(
        n,
        Ie.read(e.vbaraw, {
          type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var V2 = {
  0: { f: jv },
  1: { f: Qv },
  2: { f: gm },
  3: { f: fm },
  4: { f: nm },
  5: { f: pm },
  6: { f: Am },
  7: { f: um },
  8: { f: km },
  9: { f: Nm },
  10: { f: Om },
  11: { f: Rm },
  12: { f: tm },
  13: { f: Tm },
  14: { f: lm },
  15: { f: am },
  16: { f: mm },
  17: { f: Fm },
  18: { f: dm },
  19: { f: K0 },
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
  39: { f: v2 },
  40: {},
  42: {},
  43: { f: Ax },
  44: { f: wx },
  45: { f: Cx },
  46: { f: Rx },
  47: { f: Ox },
  48: {},
  49: { f: td },
  50: {},
  51: { f: jx },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: rx },
  62: { f: Sm },
  63: { f: Jx },
  64: { f: Xm },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: gr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: Gm },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: Jv },
  148: { f: Kv, p: 16 },
  151: { f: Bm },
  152: {},
  153: { f: x2 },
  154: {},
  155: {},
  156: { f: h2 },
  157: {},
  158: {},
  159: { T: 1, f: hx },
  160: { T: -1 },
  161: { T: 1, f: hn },
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
  176: { f: Dm },
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
  335: { f: Gx },
  336: { T: -1 },
  337: { f: Kx, T: 1 },
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
  355: { f: _0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Yd },
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
  426: { f: bm },
  427: { f: Um },
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
  476: { f: Wm },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: Yv },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: Lm },
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
  550: { f: _0 },
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
  632: { f: rp },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: ep },
  636: { T: -1 },
  637: { f: ad },
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
  651: { f: s2 },
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
  1053: { f: Km },
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
function Z(e, r, t, n) {
  var i = r;
  if (!isNaN(i)) {
    var a = n || (t || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && j0(t) && e.push(t);
  }
}
function G2(e, r, t, n) {
  var i = (t || []).length || 0;
  if (i <= 8224) return Z(e, r, t, i);
  var a = r;
  if (!isNaN(a)) {
    for (
      var s = t.parts || [], f = 0, l = 0, o = 0;
      o + (s[f] || 8224) <= 8224;

    )
      (o += s[f] || 8224), f++;
    var c = e.next(4);
    for (
      c.write_shift(2, a),
        c.write_shift(2, o),
        e.push(t.slice(l, l + o)),
        l += o;
      l < i;

    ) {
      for (
        c = e.next(4), c.write_shift(2, 60), o = 0;
        o + (s[f] || 8224) <= 8224;

      )
        (o += s[f] || 8224), f++;
      c.write_shift(2, o), e.push(t.slice(l, l + o)), (l += o);
    }
  }
}
function Ni(e, r, t) {
  return (
    e || (e = H(7)),
    e.write_shift(2, r),
    e.write_shift(2, t),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function $2(e, r, t, n) {
  var i = H(9);
  return Ni(i, e, r), _l(t, n || 'b', i), i;
}
function j2(e, r, t) {
  var n = H(8 + 2 * t.length);
  return (
    Ni(n, e, r),
    n.write_shift(1, t.length),
    n.write_shift(t.length, t, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function z2(e, r, t, n) {
  if (r.v != null)
    switch (r.t) {
      case 'd':
      case 'n':
        var i = r.t == 'd' ? Mt(Rt(r.v)) : r.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? Z(e, 2, sx(t, n, i))
          : Z(e, 3, ax(t, n, i));
        return;
      case 'b':
      case 'e':
        Z(e, 5, $2(t, n, r.v, r.t));
        return;
      case 's':
      case 'str':
        Z(e, 4, j2(t, n, (r.v || '').slice(0, 255)));
        return;
    }
  Z(e, 1, Ni(null, t, n));
}
function X2(e, r, t, n) {
  var i = Array.isArray(r),
    a = Ue(r['!ref'] || 'A1'),
    s,
    f = '',
    l = [];
  if (a.e.c > 255 || a.e.r > 16383) {
    if (n.WTF)
      throw new Error(
        'Range ' + (r['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (a.e.c = Math.min(a.e.c, 255)),
      (a.e.r = Math.min(a.e.c, 16383)),
      (s = et(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = ht(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = gt(c)), (s = l[c] + f);
      var h = i ? (r[o] || [])[c] : r[s];
      h && z2(e, h, o, c);
    }
  }
}
function K2(e, r) {
  for (var t = r || {}, n = Pt(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == t.sheet && (i = a);
  if (i == 0 && t.sheet && e.SheetNames[0] != t.sheet)
    throw new Error('Sheet not found: ' + t.sheet);
  return (
    Z(n, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, J0(e, 16, t)),
    X2(n, e.Sheets[e.SheetNames[i]], i, t),
    Z(n, 10),
    n.end()
  );
}
function q2(e, r, t) {
  Z(e, 49, Vd({ sz: 12, name: 'Arial' }, t));
}
function Y2(e, r, t) {
  r &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        r[i] != null && Z(e, 1054, jd(i, r[i], t));
    });
}
function J2(e, r) {
  var t = H(19);
  t.write_shift(4, 2151),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 3),
    t.write_shift(1, 1),
    t.write_shift(4, 0),
    Z(e, 2151, t),
    (t = H(39)),
    t.write_shift(4, 2152),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 3),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 1),
    t.write_shift(4, 4),
    t.write_shift(2, 0),
    Tl(Ue(r['!ref'] || 'A1'), t),
    t.write_shift(4, 4),
    Z(e, 2152, t);
}
function Z2(e, r) {
  for (var t = 0; t < 16; ++t) Z(e, 224, lf({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function (n) {
    Z(e, 224, lf(n, 0, r));
  });
}
function Q2(e, r) {
  for (var t = 0; t < r['!links'].length; ++t) {
    var n = r['!links'][t];
    Z(e, 440, Qd(n)), n[1].Tooltip && Z(e, 2048, ex(n));
  }
  delete r['!links'];
}
function e_(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function (n, i) {
      ++t <= 256 && n && Z(e, 125, nx(Ua(i, n), i));
    });
  }
}
function t_(e, r, t, n, i) {
  var a = 16 + jr(i.cellXfs, r, i);
  if (r.v == null && !r.bf) {
    Z(e, 513, sn(t, n, a));
    return;
  }
  if (r.bf) Z(e, 6, yv(r, t, n, i, a));
  else
    switch (r.t) {
      case 'd':
      case 'n':
        var s = r.t == 'd' ? Mt(Rt(r.v)) : r.v;
        Z(e, 515, qd(t, n, s, a));
        break;
      case 'b':
      case 'e':
        Z(e, 517, Kd(t, n, r.v, a, i, r.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = rs(i.Strings, r.v, i.revStrings);
          Z(e, 253, Gd(t, n, f, a));
        } else Z(e, 516, $d(t, n, (r.v || '').slice(0, 255), a, i));
        break;
      default:
        Z(e, 513, sn(t, n, a));
    }
}
function r_(e, r, t) {
  var n = Pt(),
    i = t.SheetNames[e],
    a = t.Sheets[i] || {},
    s = (t || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = r.biff == 8,
    c,
    h = '',
    u = [],
    x = Ue(a['!ref'] || 'A1'),
    p = o ? 65536 : 16384;
  if (x.e.c > 255 || x.e.r >= p) {
    if (r.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (x.e.c = Math.min(x.e.c, 255)), (x.e.r = Math.min(x.e.c, p - 1));
  }
  Z(n, 2057, J0(t, 16, r)),
    Z(n, 13, Yt(1)),
    Z(n, 12, Yt(100)),
    Z(n, 15, Ct(!0)),
    Z(n, 17, Ct(!1)),
    Z(n, 16, an(0.001)),
    Z(n, 95, Ct(!0)),
    Z(n, 42, Ct(!1)),
    Z(n, 43, Ct(!1)),
    Z(n, 130, Yt(1)),
    Z(n, 128, Xd()),
    Z(n, 131, Ct(!1)),
    Z(n, 132, Ct(!1)),
    o && e_(n, a['!cols']),
    Z(n, 512, zd(x, r)),
    o && (a['!links'] = []);
  for (var d = x.s.r; d <= x.e.r; ++d) {
    h = ht(d);
    for (var m = x.s.c; m <= x.e.c; ++m) {
      d === x.s.r && (u[m] = gt(m)), (c = u[m] + h);
      var y = l ? (a[d] || [])[m] : a[c];
      y && (t_(n, y, d, m, r), o && y.l && a['!links'].push([c, y.l]));
    }
  }
  var F = f.CodeName || f.name || i;
  return (
    o && Z(n, 574, Wd((s.Views || [])[0])),
    o && (a['!merges'] || []).length && Z(n, 229, Zd(a['!merges'])),
    o && Q2(n, a),
    Z(n, 442, El(F)),
    o && J2(n, a),
    Z(n, 10),
    n.end()
  );
}
function n_(e, r, t) {
  var n = Pt(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = t.biff == 8,
    l = t.biff == 5;
  if (
    (Z(n, 2057, J0(e, 5, t)),
    t.bookType == 'xla' && Z(n, 135),
    Z(n, 225, f ? Yt(1200) : null),
    Z(n, 193, Od(2)),
    l && Z(n, 191),
    l && Z(n, 192),
    Z(n, 226),
    Z(n, 92, Bd('SheetJS', t)),
    Z(n, 66, Yt(f ? 1200 : 1252)),
    f && Z(n, 353, Yt(0)),
    f && Z(n, 448),
    Z(n, 317, ix(e.SheetNames.length)),
    f && e.vbaraw && Z(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    Z(n, 442, El(o));
  }
  Z(n, 156, Yt(17)),
    Z(n, 25, Ct(!1)),
    Z(n, 18, Ct(!1)),
    Z(n, 19, Yt(0)),
    f && Z(n, 431, Ct(!1)),
    f && Z(n, 444, Yt(0)),
    Z(n, 61, Hd()),
    Z(n, 64, Ct(!1)),
    Z(n, 141, Yt(0)),
    Z(n, 34, Ct(o2(e) == 'true')),
    Z(n, 14, Ct(!0)),
    f && Z(n, 439, Ct(!1)),
    Z(n, 218, Yt(0)),
    q2(n, e, t),
    Y2(n, e.SSF, t),
    Z2(n, t),
    f && Z(n, 352, Ct(!1));
  var c = n.end(),
    h = Pt();
  f && Z(h, 140, tx()), f && t.Strings && G2(h, 252, Ud(t.Strings)), Z(h, 10);
  var u = h.end(),
    x = Pt(),
    p = 0,
    d = 0;
  for (d = 0; d < e.SheetNames.length; ++d)
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[d].length;
  var m = c.length + p + u.length;
  for (d = 0; d < e.SheetNames.length; ++d) {
    var y = a[d] || {};
    Z(
      x,
      133,
      bd({ pos: m, hs: y.Hidden || 0, dt: 0, name: e.SheetNames[d] }, t),
    ),
      (m += r[d].length);
  }
  var F = x.end();
  if (p != F.length) throw new Error('BS8 ' + p + ' != ' + F.length);
  var A = [];
  return (
    c.length && A.push(c), F.length && A.push(F), u.length && A.push(u), ct(A)
  );
}
function i_(e, r) {
  var t = r || {},
    n = [];
  e && !e.SSF && (e.SSF = Bt(qe)),
    e &&
      e.SSF &&
      (Pa(),
      Ia(e.SSF),
      (t.revssf = La(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    ns(t),
    (t.cellXfs = []),
    jr(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = r_(i, t, e);
  return n.unshift(n_(e, n, t)), ct(n);
}
function Xl(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var n = e.Sheets[e.SheetNames[t]];
    if (!(!n || !n['!ref'])) {
      var i = jt(n['!ref']);
      i.e.c > 255 &&
        typeof console < 'u' &&
        console.error &&
        console.error(
          "Worksheet '" +
            e.SheetNames[t] +
            "' extends beyond column IV (255).  Data may be lost.",
        );
    }
  }
  var a = r || {};
  switch (a.biff || 2) {
    case 8:
    case 5:
      return i_(e, r);
    case 4:
    case 3:
    case 2:
      return K2(e, r);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function a_(e, r, t, n) {
  for (var i = e['!merges'] || [], a = [], s = r.s.c; s <= r.e.c; ++s) {
    for (var f = 0, l = 0, o = 0; o < i.length; ++o)
      if (!(i[o].s.r > t || i[o].s.c > s) && !(i[o].e.r < t || i[o].e.c < s)) {
        if (i[o].s.r < t || i[o].s.c < s) {
          f = -1;
          break;
        }
        (f = i[o].e.r - i[o].s.r + 1), (l = i[o].e.c - i[o].s.c + 1);
        break;
      }
    if (!(f < 0)) {
      var c = Ne({ r: t, c: s }),
        h = n.dense ? (e[t] || [])[s] : e[c],
        u = (h && h.v != null && (h.h || M1(h.w || (Nr(h), h.w) || ''))) || '',
        x = {};
      f > 1 && (x.rowspan = f),
        l > 1 && (x.colspan = l),
        n.editable
          ? (u = '<span contenteditable="true">' + u + '</span>')
          : h &&
            ((x['data-t'] = (h && h.t) || 'z'),
            h.v != null && (x['data-v'] = h.v),
            h.z != null && (x['data-z'] = h.z),
            h.l &&
              (h.l.Target || '#').charAt(0) != '#' &&
              (u = '<a href="' + h.l.Target + '">' + u + '</a>')),
        (x.id = (n.id || 'sjs') + '-' + c),
        a.push(J('td', u, x));
    }
  }
  var p = '<tr>';
  return p + a.join('') + '</tr>';
}
var s_ =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  f_ = '</body></html>';
function o_(e, r, t) {
  var n = [];
  return n.join('') + '<table' + (t && t.id ? ' id="' + t.id + '"' : '') + '>';
}
function Kl(e, r) {
  var t = r || {},
    n = t.header != null ? t.header : s_,
    i = t.footer != null ? t.footer : f_,
    a = [n],
    s = jt(e['!ref']);
  (t.dense = Array.isArray(e)), a.push(o_(e, s, t));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(a_(e, s, f, t));
  return a.push('</table>' + i), a.join('');
}
function ql(e, r, t) {
  var n = t || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? at(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = r.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = jt(e['!ref']);
    (o.s.r = Math.min(o.s.r, c.s.r)),
      (o.s.c = Math.min(o.s.c, c.s.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      i == -1 && (o.e.r = i = c.e.r + 1);
  }
  var h = [],
    u = 0,
    x = e['!rows'] || (e['!rows'] = []),
    p = 0,
    d = 0,
    m = 0,
    y = 0,
    F = 0,
    A = 0;
  for (e['!cols'] || (e['!cols'] = []); p < f.length && d < l; ++p) {
    var N = f[p];
    if (vf(N)) {
      if (n.display) continue;
      x[d] = { hidden: !0 };
    }
    var W = N.children;
    for (m = y = 0; m < W.length; ++m) {
      var q = W[m];
      if (!(n.display && vf(q))) {
        var O = q.hasAttribute('data-v')
            ? q.getAttribute('data-v')
            : q.hasAttribute('v')
              ? q.getAttribute('v')
              : H1(q.innerHTML),
          b = q.getAttribute('data-z') || q.getAttribute('z');
        for (u = 0; u < h.length; ++u) {
          var P = h[u];
          P.s.c == y + a &&
            P.s.r < d + i &&
            d + i <= P.e.r &&
            ((y = P.e.c + 1 - a), (u = -1));
        }
        (A = +q.getAttribute('colspan') || 1),
          ((F = +q.getAttribute('rowspan') || 1) > 1 || A > 1) &&
            h.push({
              s: { r: d + i, c: y + a },
              e: { r: d + i + (F || 1) - 1, c: y + a + (A || 1) - 1 },
            });
        var V = { t: 's', v: O },
          G = q.getAttribute('data-t') || q.getAttribute('t') || '';
        O != null &&
          (O.length == 0
            ? (V.t = G || 'z')
            : n.raw ||
              O.trim().length == 0 ||
              G == 's' ||
              (O === 'TRUE'
                ? (V = { t: 'b', v: !0 })
                : O === 'FALSE'
                  ? (V = { t: 'b', v: !1 })
                  : isNaN(Cr(O))
                    ? isNaN(pi(O).getDate()) ||
                      ((V = { t: 'd', v: Rt(O) }),
                      n.cellDates || (V = { t: 'n', v: Mt(V.v) }),
                      (V.z = n.dateNF || qe[14]))
                    : (V = { t: 'n', v: Cr(O) }))),
          V.z === void 0 && b != null && (V.z = b);
        var X = '',
          ee = q.getElementsByTagName('A');
        if (ee && ee.length)
          for (
            var Te = 0;
            Te < ee.length &&
            !(
              ee[Te].hasAttribute('href') &&
              ((X = ee[Te].getAttribute('href')), X.charAt(0) != '#')
            );
            ++Te
          );
        X && X.charAt(0) != '#' && (V.l = { Target: X }),
          n.dense
            ? (e[d + i] || (e[d + i] = []), (e[d + i][y + a] = V))
            : (e[Ne({ c: y + a, r: d + i })] = V),
          o.e.c < y + a && (o.e.c = y + a),
          (y += A);
      }
    }
    ++d;
  }
  return (
    h.length && (e['!merges'] = (e['!merges'] || []).concat(h)),
    (o.e.r = Math.max(o.e.r, d - 1 + i)),
    (e['!ref'] = et(o)),
    d >= l && (e['!fullref'] = et(((o.e.r = f.length - p + d - 1 + i), o))),
    e
  );
}
function Yl(e, r) {
  var t = r || {},
    n = t.dense ? [] : {};
  return ql(n, e, r);
}
function l_(e, r) {
  return on(Yl(e, r), r);
}
function vf(e) {
  var r = '',
    t = c_(e);
  return (
    t && (r = t(e).getPropertyValue('display')),
    r || (r = e.style && e.style.display),
    r === 'none'
  );
}
function c_(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var u_ = (function () {
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
      r =
        '<office:document-styles ' +
        mi({
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
      return tt + r;
    };
  })(),
  mf = (function () {
    var e = function (a) {
        return Re(a)
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
      t = `          <table:covered-table-cell/>
`,
      n = function (a, s, f) {
        var l = [];
        l.push(
          '      <table:table table:name="' +
            Re(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          h = jt(a['!ref'] || 'A1'),
          u = a['!merges'] || [],
          x = 0,
          p = Array.isArray(a);
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
        for (o = 0; o < h.s.r; ++o)
          (d = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                d +
                `></table:table-row>
`,
            );
        for (; o <= h.e.r; ++o) {
          for (
            d = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : '',
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
            var y = !1,
              F = {},
              A = '';
            for (x = 0; x != u.length; ++x)
              if (
                !(u[x].s.c > c) &&
                !(u[x].s.r > o) &&
                !(u[x].e.c < c) &&
                !(u[x].e.r < o)
              ) {
                (u[x].s.c != c || u[x].s.r != o) && (y = !0),
                  (F['table:number-columns-spanned'] = u[x].e.c - u[x].s.c + 1),
                  (F['table:number-rows-spanned'] = u[x].e.r - u[x].s.r + 1);
                break;
              }
            if (y) {
              l.push(t);
              continue;
            }
            var N = Ne({ r: o, c }),
              W = p ? (a[o] || [])[c] : a[N];
            if (
              W &&
              W.f &&
              ((F['table:formula'] = Re(kv(W.f))),
              W.F && W.F.slice(0, N.length) == N)
            ) {
              var q = jt(W.F);
              (F['table:number-matrix-columns-spanned'] = q.e.c - q.s.c + 1),
                (F['table:number-matrix-rows-spanned'] = q.e.r - q.s.r + 1);
            }
            if (!W) {
              l.push(r);
              continue;
            }
            switch (W.t) {
              case 'b':
                (A = W.v ? 'TRUE' : 'FALSE'),
                  (F['office:value-type'] = 'boolean'),
                  (F['office:boolean-value'] = W.v ? 'true' : 'false');
                break;
              case 'n':
                (A = W.w || String(W.v || 0)),
                  (F['office:value-type'] = 'float'),
                  (F['office:value'] = W.v || 0);
                break;
              case 's':
              case 'str':
                (A = W.v == null ? '' : W.v),
                  (F['office:value-type'] = 'string');
                break;
              case 'd':
                (A = W.w || Rt(W.v).toISOString()),
                  (F['office:value-type'] = 'date'),
                  (F['office:date-value'] = Rt(W.v).toISOString()),
                  (F['table:style-name'] = 'ce1');
                break;
              default:
                l.push(r);
                continue;
            }
            var O = e(A);
            if (W.l && W.l.Target) {
              var b = W.l.Target;
              (b = b.charAt(0) == '#' ? '#' + Dv(b.slice(1)) : b),
                b.charAt(0) != '#' && !b.match(/^\w+:/) && (b = '../' + b),
                (O = J('text:a', O, {
                  'xlink:href': b.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                J('table:table-cell', J('text:p', O, {}), F) +
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
                var h = o['!cols'][c];
                if (h.width == null && h.wpx == null && h.wch == null) continue;
                Z0(h), (h.ods = f);
                var u = o['!cols'][c].wpx + 'px';
                a.push(
                  '  <style:style style:name="co' +
                    f +
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
                var h = o['!rows'][c].hpx + 'px';
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
    return function (s, f) {
      var l = [tt],
        o = mi({
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
        c = mi({
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
          l.push(ul().replace(/office:document-meta/g, 'office:meta')))
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
      for (var h = 0; h != s.SheetNames.length; ++h)
        l.push(n(s.Sheets[s.SheetNames[h]], s, h));
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
function Jl(e, r) {
  if (r.bookType == 'fods') return mf(e, r);
  var t = W0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    ve(t, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    ve(t, n, mf(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    ve(t, n, u_(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    ve(t, n, tt + ul()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    ve(t, n, Sd(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    ve(t, n, Td(i)),
    t
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function va(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function h_(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : ir(vi(e));
}
function d_(e, r) {
  e: for (var t = 0; t <= e.length - r.length; ++t) {
    for (var n = 0; n < r.length; ++n) if (e[t + n] != r[n]) continue e;
    return !0;
  }
  return !1;
}
function $r(e) {
  var r = e.reduce(function (i, a) {
      return i + a.length;
    }, 0),
    t = new Uint8Array(r),
    n = 0;
  return (
    e.forEach(function (i) {
      t.set(i, n), (n += i.length);
    }),
    t
  );
}
function x_(e, r, t) {
  var n =
      Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 20,
    i = t / Math.pow(10, n - 6176);
  (e[r + 15] |= n >> 7), (e[r + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[r + a] = i & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function _i(e, r) {
  var t = r ? r[0] : 0,
    n = e[t] & 127;
  e: if (
    e[t++] >= 128 &&
    ((n |= (e[t] & 127) << 7),
    e[t++] < 128 ||
      ((n |= (e[t] & 127) << 14), e[t++] < 128) ||
      ((n |= (e[t] & 127) << 21), e[t++] < 128) ||
      ((n += (e[t] & 127) * Math.pow(2, 28)), ++t, e[t++] < 128) ||
      ((n += (e[t] & 127) * Math.pow(2, 35)), ++t, e[t++] < 128) ||
      ((n += (e[t] & 127) * Math.pow(2, 42)), ++t, e[t++] < 128))
  )
    break e;
  return r && (r[0] = t), n;
}
function Ce(e) {
  var r = new Uint8Array(7);
  r[0] = e & 127;
  var t = 1;
  e: if (e > 127) {
    if (
      ((r[t - 1] |= 128),
      (r[t] = (e >> 7) & 127),
      ++t,
      e <= 16383 ||
        ((r[t - 1] |= 128), (r[t] = (e >> 14) & 127), ++t, e <= 2097151) ||
        ((r[t - 1] |= 128), (r[t] = (e >> 21) & 127), ++t, e <= 268435455) ||
        ((r[t - 1] |= 128),
        (r[t] = ((e / 256) >>> 21) & 127),
        ++t,
        e <= 34359738367) ||
        ((r[t - 1] |= 128),
        (r[t] = ((e / 65536) >>> 21) & 127),
        ++t,
        e <= 4398046511103))
    )
      break e;
    (r[t - 1] |= 128), (r[t] = ((e / 16777216) >>> 21) & 127), ++t;
  }
  return r.slice(0, t);
}
function Rn(e) {
  var r = 0,
    t = e[r] & 127;
  e: if (e[r++] >= 128) {
    if (
      ((t |= (e[r] & 127) << 7),
      e[r++] < 128 ||
        ((t |= (e[r] & 127) << 14), e[r++] < 128) ||
        ((t |= (e[r] & 127) << 21), e[r++] < 128))
    )
      break e;
    t |= (e[r] & 127) << 28;
  }
  return t;
}
function rt(e) {
  for (var r = [], t = [0]; t[0] < e.length; ) {
    var n = t[0],
      i = _i(e, t),
      a = i & 7;
    i = Math.floor(i / 8);
    var s = 0,
      f;
    if (i == 0) break;
    switch (a) {
      case 0:
        {
          for (var l = t[0]; e[t[0]++] >= 128; );
          f = e.slice(l, t[0]);
        }
        break;
      case 5:
        (s = 4), (f = e.slice(t[0], t[0] + s)), (t[0] += s);
        break;
      case 1:
        (s = 8), (f = e.slice(t[0], t[0] + s)), (t[0] += s);
        break;
      case 2:
        (s = _i(e, t)), (f = e.slice(t[0], t[0] + s)), (t[0] += s);
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
    r[i] == null ? (r[i] = [o]) : r[i].push(o);
  }
  return r;
}
function ot(e) {
  var r = [];
  return (
    e.forEach(function (t, n) {
      t.forEach(function (i) {
        i.data &&
          (r.push(Ce(n * 8 + i.type)),
          i.type == 2 && r.push(Ce(i.data.length)),
          r.push(i.data));
      });
    }),
    $r(r)
  );
}
function tr(e) {
  for (var r, t = [], n = [0]; n[0] < e.length; ) {
    var i = _i(e, n),
      a = rt(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: Rn(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = rt(f.data),
        o = Rn(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (r = a[3]) != null && r[0] && (s.merge = Rn(a[3][0].data) >>> 0 > 0),
      t.push(s);
  }
  return t;
}
function Tn(e) {
  var r = [];
  return (
    e.forEach(function (t) {
      var n = [];
      (n[1] = [{ data: Ce(t.id), type: 0 }]),
        (n[2] = []),
        t.merge != null && (n[3] = [{ data: Ce(+!!t.merge), type: 0 }]);
      var i = [];
      t.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: Ce(s.data.length) }]),
          n[2].push({ data: ot(s.meta), type: 2 });
      });
      var a = ot(n);
      r.push(Ce(a.length)),
        r.push(a),
        i.forEach(function (s) {
          return r.push(s);
        });
    }),
    $r(r)
  );
}
function p_(e, r) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var t = [0], n = _i(r, t), i = []; t[0] < r.length; ) {
    var a = r[t[0]] & 3;
    if (a == 0) {
      var s = r[t[0]++] >> 2;
      if (s < 60) ++s;
      else {
        var f = s - 59;
        (s = r[t[0]]),
          f > 1 && (s |= r[t[0] + 1] << 8),
          f > 2 && (s |= r[t[0] + 2] << 16),
          f > 3 && (s |= r[t[0] + 3] << 24),
          (s >>>= 0),
          s++,
          (t[0] += f);
      }
      i.push(r.slice(t[0], t[0] + s)), (t[0] += s);
      continue;
    } else {
      var l = 0,
        o = 0;
      if (
        (a == 1
          ? ((o = ((r[t[0]] >> 2) & 7) + 4),
            (l = (r[t[0]++] & 224) << 3),
            (l |= r[t[0]++]))
          : ((o = (r[t[0]++] >> 2) + 1),
            a == 2
              ? ((l = r[t[0]] | (r[t[0] + 1] << 8)), (t[0] += 2))
              : ((l =
                  (r[t[0]] |
                    (r[t[0] + 1] << 8) |
                    (r[t[0] + 2] << 16) |
                    (r[t[0] + 3] << 24)) >>>
                  0),
                (t[0] += 4))),
        (i = [$r(i)]),
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
  var c = $r(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function rr(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = e[t++],
      i = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
    (t += 3), r.push(p_(n, e.slice(t, t + i))), (t += i);
  }
  if (t !== e.length) throw new Error('data is not a valid framed stream!');
  return $r(r);
}
function wn(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = Math.min(e.length - t, 268435455),
      i = new Uint8Array(4);
    r.push(i);
    var a = Ce(n),
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
      r.push(e.slice(t, t + n)),
      (s += n),
      (i[0] = 0),
      (i[1] = s & 255),
      (i[2] = (s >> 8) & 255),
      (i[3] = (s >> 16) & 255),
      (t += n);
  }
  return $r(r);
}
function e0(e, r) {
  var t = new Uint8Array(32),
    n = va(t),
    i = 12,
    a = 0;
  switch (((t[0] = 5), e.t)) {
    case 'n':
      (t[1] = 2), x_(t, i, e.v), (a |= 1), (i += 16);
      break;
    case 'b':
      (t[1] = 6), n.setFloat64(i, e.v ? 1 : 0, !0), (a |= 2), (i += 8);
      break;
    case 's':
      if (r.indexOf(e.v) == -1)
        throw new Error('Value '.concat(e.v, ' missing from SST!'));
      (t[1] = 3), n.setUint32(i, r.indexOf(e.v), !0), (a |= 8), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + e.t;
  }
  return n.setUint32(8, a, !0), t.slice(0, i);
}
function t0(e, r) {
  var t = new Uint8Array(32),
    n = va(t),
    i = 12,
    a = 0;
  switch (((t[0] = 3), e.t)) {
    case 'n':
      (t[2] = 2), n.setFloat64(i, e.v, !0), (a |= 32), (i += 8);
      break;
    case 'b':
      (t[2] = 6), n.setFloat64(i, e.v ? 1 : 0, !0), (a |= 32), (i += 8);
      break;
    case 's':
      if (r.indexOf(e.v) == -1)
        throw new Error('Value '.concat(e.v, ' missing from SST!'));
      (t[2] = 3), n.setUint32(i, r.indexOf(e.v), !0), (a |= 16), (i += 4);
      break;
    default:
      throw 'unsupported cell type ' + e.t;
  }
  return n.setUint32(4, a, !0), t.slice(0, i);
}
function Pr(e) {
  var r = rt(e);
  return _i(r[1][0].data);
}
function v_(e, r, t) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      Rn(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = va(e[7][0].data),
      c = 0,
      h = [],
      u = va(e[4][0].data),
      x = 0,
      p = [],
      d = 0;
    d < r.length;
    ++d
  ) {
    if (r[d] == null) {
      o.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535);
      continue;
    }
    o.setUint16(d * 2, c, !0), u.setUint16(d * 2, x, !0);
    var m, y;
    switch (typeof r[d]) {
      case 'string':
        (m = e0({ t: 's', v: r[d] }, t)), (y = t0({ t: 's', v: r[d] }, t));
        break;
      case 'number':
        (m = e0({ t: 'n', v: r[d] }, t)), (y = t0({ t: 'n', v: r[d] }, t));
        break;
      case 'boolean':
        (m = e0({ t: 'b', v: r[d] }, t)), (y = t0({ t: 'b', v: r[d] }, t));
        break;
      default:
        throw new Error('Unsupported value ' + r[d]);
    }
    h.push(m), (c += m.length), p.push(y), (x += y.length), ++l;
  }
  for (e[2][0].data = Ce(l); d < e[7][0].data.length / 2; ++d)
    o.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535, !0);
  return (e[6][0].data = $r(h)), (e[3][0].data = $r(p)), l;
}
function m_(e, r) {
  if (!r || !r.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var t = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = jt(t['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(et(n)),
      );
  var a = ma(t, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (M) {
    return M.forEach(function (R) {
      typeof R == 'string' && s.push(R);
    });
  });
  var f = {},
    l = [],
    o = Ie.read(r.numbers, { type: 'base64' });
  o.FileIndex.map(function (M, R) {
    return [M, o.FullPaths[R]];
  }).forEach(function (M) {
    var R = M[0],
      C = M[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var z = R.content,
        fe = rr(z),
        le = tr(fe);
      le.forEach(function (se) {
        l.push(se.id),
          (f[se.id] = {
            deps: [],
            location: C,
            type: Rn(se.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (M, R) {
      return M - R;
    });
  var c = l
    .filter(function (M) {
      return M > 1;
    })
    .map(function (M) {
      return [M, Ce(M)];
    });
  o.FileIndex.map(function (M, R) {
    return [M, o.FullPaths[R]];
  }).forEach(function (M) {
    var R = M[0];
    if ((M[1], !!R.name.match(/\.iwa/))) {
      var C = tr(rr(R.content));
      C.forEach(function (z) {
        z.messages.forEach(function (fe) {
          c.forEach(function (le) {
            z.messages.some(function (se) {
              return Rn(se.meta[1][0].data) != 11006 && d_(se.data, le[1]);
            }) && f[le[0]].deps.push(z.id);
          });
        });
      });
    }
  });
  for (
    var h = Ie.find(o, f[1].location), u = tr(rr(h.content)), x, p = 0;
    p < u.length;
    ++p
  ) {
    var d = u[p];
    d.id == 1 && (x = d);
  }
  var m = Pr(rt(x.messages[0].data)[1][0].data);
  for (
    h = Ie.find(o, f[m].location), u = tr(rr(h.content)), p = 0;
    p < u.length;
    ++p
  )
    (d = u[p]), d.id == m && (x = d);
  for (
    m = Pr(rt(x.messages[0].data)[2][0].data),
      h = Ie.find(o, f[m].location),
      u = tr(rr(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (d = u[p]), d.id == m && (x = d);
  for (
    m = Pr(rt(x.messages[0].data)[2][0].data),
      h = Ie.find(o, f[m].location),
      u = tr(rr(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (d = u[p]), d.id == m && (x = d);
  var y = rt(x.messages[0].data);
  {
    (y[6][0].data = Ce(n.e.r + 1)), (y[7][0].data = Ce(n.e.c + 1));
    var F = Pr(y[46][0].data),
      A = Ie.find(o, f[F].location),
      N = tr(rr(A.content));
    {
      for (var W = 0; W < N.length && N[W].id != F; ++W);
      if (N[W].id != F) throw 'Bad ColumnRowUIDMapArchive';
      var q = rt(N[W].messages[0].data);
      (q[1] = []), (q[2] = []), (q[3] = []);
      for (var O = 0; O <= n.e.c; ++O) {
        var b = [];
        (b[1] = b[2] = [{ type: 0, data: Ce(O + 420690) }]),
          q[1].push({ type: 2, data: ot(b) }),
          q[2].push({ type: 0, data: Ce(O) }),
          q[3].push({ type: 0, data: Ce(O) });
      }
      (q[4] = []), (q[5] = []), (q[6] = []);
      for (var P = 0; P <= n.e.r; ++P)
        (b = []),
          (b[1] = b[2] = [{ type: 0, data: Ce(P + 726270) }]),
          q[4].push({ type: 2, data: ot(b) }),
          q[5].push({ type: 0, data: Ce(P) }),
          q[6].push({ type: 0, data: Ce(P) });
      N[W].messages[0].data = ot(q);
    }
    (A.content = wn(Tn(N))), (A.size = A.content.length), delete y[46];
    var V = rt(y[4][0].data);
    {
      V[7][0].data = Ce(n.e.r + 1);
      var G = rt(V[1][0].data),
        X = Pr(G[2][0].data);
      (A = Ie.find(o, f[X].location)), (N = tr(rr(A.content)));
      {
        if (N[0].id != X) throw 'Bad HeaderStorageBucket';
        var ee = rt(N[0].messages[0].data);
        for (P = 0; P < a.length; ++P) {
          var Te = rt(ee[2][0].data);
          (Te[1][0].data = Ce(P)),
            (Te[4][0].data = Ce(a[P].length)),
            (ee[2][P] = { type: ee[2][0].type, data: ot(Te) });
        }
        N[0].messages[0].data = ot(ee);
      }
      (A.content = wn(Tn(N))), (A.size = A.content.length);
      var ue = Pr(V[2][0].data);
      (A = Ie.find(o, f[ue].location)), (N = tr(rr(A.content)));
      {
        if (N[0].id != ue) throw 'Bad HeaderStorageBucket';
        for (ee = rt(N[0].messages[0].data), O = 0; O <= n.e.c; ++O)
          (Te = rt(ee[2][0].data)),
            (Te[1][0].data = Ce(O)),
            (Te[4][0].data = Ce(n.e.r + 1)),
            (ee[2][O] = { type: ee[2][0].type, data: ot(Te) });
        N[0].messages[0].data = ot(ee);
      }
      (A.content = wn(Tn(N))), (A.size = A.content.length);
      var He = Pr(V[4][0].data);
      (function () {
        for (
          var M = Ie.find(o, f[He].location), R = tr(rr(M.content)), C, z = 0;
          z < R.length;
          ++z
        ) {
          var fe = R[z];
          fe.id == He && (C = fe);
        }
        var le = rt(C.messages[0].data);
        {
          le[3] = [];
          var se = [];
          s.forEach(function (ge, nt) {
            (se[1] = [{ type: 0, data: Ce(nt) }]),
              (se[2] = [{ type: 0, data: Ce(1) }]),
              (se[3] = [{ type: 2, data: h_(ge) }]),
              le[3].push({ type: 2, data: ot(se) });
          });
        }
        C.messages[0].data = ot(le);
        var te = Tn(R),
          Fe = wn(te);
        (M.content = Fe), (M.size = M.content.length);
      })();
      var ke = rt(V[3][0].data);
      {
        var ze = ke[1][0];
        delete ke[2];
        var Ve = rt(ze.data);
        {
          var wt = Pr(Ve[2][0].data);
          (function () {
            for (
              var M = Ie.find(o, f[wt].location),
                R = tr(rr(M.content)),
                C,
                z = 0;
              z < R.length;
              ++z
            ) {
              var fe = R[z];
              fe.id == wt && (C = fe);
            }
            var le = rt(C.messages[0].data);
            {
              delete le[6], delete ke[7];
              var se = new Uint8Array(le[5][0].data);
              le[5] = [];
              for (var te = 0, Fe = 0; Fe <= n.e.r; ++Fe) {
                var ge = rt(se);
                (te += v_(ge, a[Fe], s)),
                  (ge[1][0].data = Ce(Fe)),
                  le[5].push({ data: ot(ge), type: 2 });
              }
              (le[1] = [{ type: 0, data: Ce(n.e.c + 1) }]),
                (le[2] = [{ type: 0, data: Ce(n.e.r + 1) }]),
                (le[3] = [{ type: 0, data: Ce(te) }]),
                (le[4] = [{ type: 0, data: Ce(n.e.r + 1) }]);
            }
            C.messages[0].data = ot(le);
            var nt = Tn(R),
              we = wn(nt);
            (M.content = we), (M.size = M.content.length);
          })();
        }
        ze.data = ot(Ve);
      }
      V[3][0].data = ot(ke);
    }
    y[4][0].data = ot(V);
  }
  x.messages[0].data = ot(y);
  var xt = Tn(u),
    S = wn(xt);
  return (h.content = S), (h.size = h.content.length), o;
}
function __(e) {
  return function (t) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      t[i[0]] === void 0 && (t[i[0]] = i[1]),
        i[2] === 'n' && (t[i[0]] = Number(t[i[0]]));
    }
  };
}
function ns(e) {
  __([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(e);
}
function g_(e, r) {
  return r.bookType == 'ods'
    ? Jl(e, r)
    : r.bookType == 'numbers'
      ? m_(e, r)
      : r.bookType == 'xlsb'
        ? E_(e, r)
        : T_(e, r);
}
function E_(e, r) {
  (yn = 1024),
    e && !e.SSF && (e.SSF = Bt(qe)),
    e &&
      e.SSF &&
      (Pa(),
      Ia(e.SSF),
      (r.revssf = La(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    oi
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = r.bookType == 'xlsb' ? 'bin' : 'xml',
    n = Il.indexOf(r.bookType) > -1,
    i = ol();
  ns((r = r || {}));
  var a = W0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    jr(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(a, s, hl(e.Props, r)),
    i.coreprops.push(s),
    Oe(r.rels, 2, s, Se.CORE_PROPS),
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
      ve(a, s, xl(e.Props)),
      i.extprops.push(s),
      Oe(r.rels, 3, s, Se.EXT_PROPS),
      e.Custprops !== e.Props &&
        dt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        ve(a, s, pl(e.Custprops)),
        i.custprops.push(s),
        Oe(r.rels, 4, s, Se.CUST_PROPS)),
      f = 1;
    f <= e.SheetNames.length;
    ++f
  ) {
    var c = { '!id': {} },
      h = e.Sheets[e.SheetNames[f - 1]],
      u = (h || {})['!type'] || 'sheet';
    switch (u) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + t),
          ve(a, s, S2(f - 1, s, r, e, c)),
          i.sheets.push(s),
          Oe(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, Se.WS[0]);
    }
    if (h) {
      var x = h['!comments'],
        p = !1,
        d = '';
      x &&
        x.length > 0 &&
        ((d = 'xl/comments' + f + '.' + t),
        ve(a, d, F2(x, d)),
        i.comments.push(d),
        Oe(c, -1, '../comments' + f + '.' + t, Se.CMNT),
        (p = !0)),
        h['!legacy'] &&
          p &&
          ve(a, 'xl/drawings/vmlDrawing' + f + '.vml', kl(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    c['!id'].rId1 && ve(a, cl(s), Cn(c));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      ve(a, s, y2(r.Strings, s, r)),
      i.strs.push(s),
      Oe(r.wbrels, -1, 'sharedStrings.' + t, Se.SST)),
    (s = 'xl/workbook.' + t),
    ve(a, s, w2(e, s)),
    i.workbooks.push(s),
    Oe(r.rels, 1, s, Se.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(a, s, Rl(e.Themes, r)),
    i.themes.push(s),
    Oe(r.wbrels, -1, 'theme/theme1.xml', Se.THEME),
    (s = 'xl/styles.' + t),
    ve(a, s, A2(e, s, r)),
    i.styles.push(s),
    Oe(r.wbrels, -1, 'styles.' + t, Se.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(a, s, e.vbaraw),
      i.vba.push(s),
      Oe(r.wbrels, -1, 'vbaProject.bin', Se.VBA)),
    (s = 'xl/metadata.' + t),
    ve(a, s, C2(s)),
    i.metadata.push(s),
    Oe(r.wbrels, -1, 'metadata.' + t, Se.XLMETA),
    ve(a, '[Content_Types].xml', ll(i, r)),
    ve(a, '_rels/.rels', Cn(r.rels)),
    ve(a, 'xl/_rels/workbook.' + t + '.rels', Cn(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function T_(e, r) {
  (yn = 1024),
    e && !e.SSF && (e.SSF = Bt(qe)),
    e &&
      e.SSF &&
      (Pa(),
      Ia(e.SSF),
      (r.revssf = La(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    oi
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = 'xml',
    n = Il.indexOf(r.bookType) > -1,
    i = ol();
  ns((r = r || {}));
  var a = W0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    jr(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(a, s, hl(e.Props, r)),
    i.coreprops.push(s),
    Oe(r.rels, 2, s, Se.CORE_PROPS),
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
    ve(a, s, xl(e.Props)),
    i.extprops.push(s),
    Oe(r.rels, 3, s, Se.EXT_PROPS),
    e.Custprops !== e.Props &&
      dt(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      ve(a, s, pl(e.Custprops)),
      i.custprops.push(s),
      Oe(r.rels, 4, s, Se.CUST_PROPS));
  var c = ['SheetJ5'];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var h = { '!id': {} },
      u = e.Sheets[e.SheetNames[f - 1]],
      x = (u || {})['!type'] || 'sheet';
    switch (x) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + t),
          ve(a, s, Vl(f - 1, r, e, h)),
          i.sheets.push(s),
          Oe(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, Se.WS[0]);
    }
    if (u) {
      var p = u['!comments'],
        d = !1,
        m = '';
      if (p && p.length > 0) {
        var y = !1;
        p.forEach(function (F) {
          F[1].forEach(function (A) {
            A.T == !0 && (y = !0);
          });
        }),
          y &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + t),
            ve(a, m, Zx(p, c, r)),
            i.threadedcomments.push(m),
            Oe(
              h,
              -1,
              '../threadedComments/threadedComment' + f + '.' + t,
              Se.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + t),
          ve(a, m, Dl(p)),
          i.comments.push(m),
          Oe(h, -1, '../comments' + f + '.' + t, Se.CMNT),
          (d = !0);
      }
      u['!legacy'] &&
        d &&
        ve(a, 'xl/drawings/vmlDrawing' + f + '.vml', kl(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    h['!id'].rId1 && ve(a, cl(s), Cn(h));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      ve(a, s, Sl(r.Strings, r)),
      i.strs.push(s),
      Oe(r.wbrels, -1, 'sharedStrings.' + t, Se.SST)),
    (s = 'xl/workbook.' + t),
    ve(a, s, jl(e)),
    i.workbooks.push(s),
    Oe(r.rels, 1, s, Se.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(a, s, Rl(e.Themes, r)),
    i.themes.push(s),
    Oe(r.wbrels, -1, 'theme/theme1.xml', Se.THEME),
    (s = 'xl/styles.' + t),
    ve(a, s, Cl(e, r)),
    i.styles.push(s),
    Oe(r.wbrels, -1, 'styles.' + t, Se.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(a, s, e.vbaraw),
      i.vba.push(s),
      Oe(r.wbrels, -1, 'vbaProject.bin', Se.VBA)),
    (s = 'xl/metadata.' + t),
    ve(a, s, Nl()),
    i.metadata.push(s),
    Oe(r.wbrels, -1, 'metadata.' + t, Se.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      ve(a, s, Qx(c)),
      i.people.push(s),
      Oe(r.wbrels, -1, 'persons/person.xml', Se.PEOPLE)),
    ve(a, '[Content_Types].xml', ll(i, r)),
    ve(a, '_rels/.rels', Cn(r.rels)),
    ve(a, 'xl/_rels/workbook.' + t + '.rels', Cn(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function w_(e, r) {
  var t = '';
  switch ((r || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case 'base64':
      t = Rr(e.slice(0, 12));
      break;
    case 'binary':
      t = e;
      break;
    case 'array':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error('Unrecognized type ' + ((r && r.type) || 'undefined'));
  }
  return [
    t.charCodeAt(0),
    t.charCodeAt(1),
    t.charCodeAt(2),
    t.charCodeAt(3),
    t.charCodeAt(4),
    t.charCodeAt(5),
    t.charCodeAt(6),
    t.charCodeAt(7),
  ];
}
function Zl(e, r) {
  switch (r.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      r.type = '';
      break;
    case 'file':
      return Fi(r.file, Ie.write(e, { type: ye ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + r.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
  return Ie.write(e, r);
}
function S_(e, r) {
  var t = Bt(r || {}),
    n = g_(e, t);
  return A_(n, t);
}
function A_(e, r) {
  var t = {},
    n = ye ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
  if ((r.compression && (t.compression = 'DEFLATE'), r.password)) t.type = n;
  else
    switch (r.type) {
      case 'base64':
        t.type = 'base64';
        break;
      case 'binary':
        t.type = 'string';
        break;
      case 'string':
        throw new Error(
          "'string' output type invalid for '" + r.bookType + "' files",
        );
      case 'buffer':
      case 'file':
        t.type = n;
        break;
      default:
        throw new Error('Unrecognized type ' + r.type);
    }
  var i = e.FullPaths
    ? Ie.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[t.type] || t.type,
        compression: !!r.compression,
      })
    : e.generate(t);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (r.type == 'binary' || r.type == 'base64') return i;
    i = new Uint8Array(Da(i));
  }
  return r.password && typeof encrypt_agile < 'u'
    ? Zl(encrypt_agile(i, r.password), r)
    : r.type === 'file'
      ? Fi(r.file, i)
      : r.type == 'string'
        ? ii(i)
        : i;
}
function y_(e, r) {
  var t = r || {},
    n = W2(e, t);
  return Zl(n, t);
}
function xr(e, r, t) {
  t || (t = '');
  var n = t + e;
  switch (r.type) {
    case 'base64':
      return xi(vi(n));
    case 'binary':
      return vi(n);
    case 'string':
      return e;
    case 'file':
      return Fi(r.file, n, 'utf8');
    case 'buffer':
      return ye
        ? Dr(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : xr(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function F_(e, r) {
  switch (r.type) {
    case 'base64':
      return xi(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return Fi(r.file, e, 'binary');
    case 'buffer':
      return ye
        ? Dr(e, 'binary')
        : e.split('').map(function (t) {
            return t.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function Hi(e, r) {
  switch (r.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var t = '', n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
      return r.type == 'base64' ? xi(t) : r.type == 'string' ? ii(t) : t;
    case 'file':
      return Fi(r.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
}
function Ql(e, r) {
  e1(), u2(e);
  var t = Bt(r || {});
  if (
    (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)), t.type == 'array')
  ) {
    t.type = 'binary';
    var n = Ql(e, t);
    return (t.type = 'array'), Da(n);
  }
  var i = 0;
  if (
    t.sheet &&
    (typeof t.sheet == 'number'
      ? (i = t.sheet)
      : (i = e.SheetNames.indexOf(t.sheet)),
    !e.SheetNames[i])
  )
    throw new Error('Sheet not found: ' + t.sheet + ' : ' + typeof t.sheet);
  switch (t.bookType || 'xlsb') {
    case 'xml':
    case 'xlml':
      return xr(U2(e, t), t);
    case 'slk':
    case 'sylk':
      return xr(ox.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'htm':
    case 'html':
      return xr(Kl(e.Sheets[e.SheetNames[i]], t), t);
    case 'txt':
      return F_(ec(e.Sheets[e.SheetNames[i]], t), t);
    case 'csv':
      return xr(is(e.Sheets[e.SheetNames[i]], t), t, '\uFEFF');
    case 'dif':
      return xr(lx.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'dbf':
      return Hi(fx.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'prn':
      return xr(cx.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'rtf':
      return xr(mx.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'eth':
      return xr(wl.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'fods':
      return xr(Jl(e, t), t);
    case 'wk1':
      return Hi(cf.sheet_to_wk1(e.Sheets[e.SheetNames[i]], t), t);
    case 'wk3':
      return Hi(cf.book_to_wk3(e, t), t);
    case 'biff2':
      t.biff || (t.biff = 2);
    case 'biff3':
      t.biff || (t.biff = 3);
    case 'biff4':
      return t.biff || (t.biff = 4), Hi(Xl(e, t), t);
    case 'biff5':
      t.biff || (t.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return t.biff || (t.biff = 8), y_(e, t);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return S_(e, t);
    default:
      throw new Error('Unrecognized bookType |' + t.bookType + '|');
  }
}
function C_(e) {
  if (!e.bookType) {
    var r = {
        xls: 'biff8',
        htm: 'html',
        slk: 'sylk',
        socialcalc: 'eth',
        Sh33tJS: 'WTF',
      },
      t = e.file.slice(e.file.lastIndexOf('.')).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)),
      (e.bookType = r[e.bookType] || e.bookType);
  }
}
function O_(e, r, t) {
  var n = {};
  return (n.type = 'file'), (n.file = r), C_(n), Ql(e, n);
}
function R_(e, r, t, n, i, a, s, f) {
  var l = ht(t),
    o = f.defval,
    c = f.raw || !Object.prototype.hasOwnProperty.call(f, 'raw'),
    h = !0,
    u = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, '__rowNum__', { value: t, enumerable: !1 });
      } catch {
        u.__rowNum__ = t;
      }
    else u.__rowNum__ = t;
  if (!s || e[t])
    for (var x = r.s.c; x <= r.e.c; ++x) {
      var p = s ? e[t][x] : e[n[x] + l];
      if (p === void 0 || p.t === void 0) {
        if (o === void 0) continue;
        a[x] != null && (u[a[x]] = o);
        continue;
      }
      var d = p.v;
      switch (p.t) {
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
          throw new Error('unrecognized type ' + p.t);
      }
      if (a[x] != null) {
        if (d == null)
          if (p.t == 'e' && d === null) u[a[x]] = null;
          else if (o !== void 0) u[a[x]] = o;
          else if (c && d === null) u[a[x]] = null;
          else continue;
        else
          u[a[x]] =
            c && (p.t !== 'n' || (p.t === 'n' && f.rawNumbers !== !1))
              ? d
              : Nr(p, d, f);
        d != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function ma(e, r) {
  if (e == null || e['!ref'] == null) return [];
  var t = { t: 'n', v: 0 },
    n = 0,
    i = 1,
    a = [],
    s = 0,
    f = '',
    l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    o = r || {},
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
      l = Ue(c);
      break;
    case 'number':
      (l = Ue(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var h = ht(l.s.r),
    u = [],
    x = [],
    p = 0,
    d = 0,
    m = Array.isArray(e),
    y = l.s.r,
    F = 0,
    A = {};
  m && !e[y] && (e[y] = []);
  var N = (o.skipHidden && e['!cols']) || [],
    W = (o.skipHidden && e['!rows']) || [];
  for (F = l.s.c; F <= l.e.c; ++F)
    if (!(N[F] || {}).hidden)
      switch (((u[F] = gt(F)), (t = m ? e[y][F] : e[u[F] + h]), n)) {
        case 1:
          a[F] = F - l.s.c;
          break;
        case 2:
          a[F] = u[F];
          break;
        case 3:
          a[F] = o.header[F - l.s.c];
          break;
        default:
          if (
            (t == null && (t = { w: '__EMPTY', t: 's' }),
            (f = s = Nr(t, null, o)),
            (d = A[s] || 0),
            !d)
          )
            A[s] = 1;
          else {
            do f = s + '_' + d++;
            while (A[f]);
            (A[s] = d), (A[f] = 1);
          }
          a[F] = f;
      }
  for (y = l.s.r + i; y <= l.e.r; ++y)
    if (!(W[y] || {}).hidden) {
      var q = R_(e, l, y, u, n, a, m, o);
      (q.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (x[p++] = q.row);
    }
  return (x.length = p), x;
}
var _f = /"/g;
function N_(e, r, t, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', h = ht(t), u = r.s.c; u <= r.e.c; ++u)
    if (n[u]) {
      var x = f.dense ? (e[t] || [])[u] : e[n[u] + h];
      if (x == null) c = '';
      else if (x.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && x.t == 'n' ? x.v : Nr(x, null, f)));
        for (var p = 0, d = 0; p !== c.length; ++p)
          if (
            (d = c.charCodeAt(p)) === i ||
            d === a ||
            d === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(_f, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        x.f != null && !x.F
          ? ((l = !1),
            (c = '=' + x.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(_f, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function is(e, r) {
  var t = [],
    n = r ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = Ue(e['!ref']),
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
    h = [];
  n.dense = Array.isArray(e);
  for (
    var u = (n.skipHidden && e['!cols']) || [],
      x = (n.skipHidden && e['!rows']) || [],
      p = i.s.c;
    p <= i.e.c;
    ++p
  )
    (u[p] || {}).hidden || (h[p] = gt(p));
  for (var d = 0, m = i.s.r; m <= i.e.r; ++m)
    (x[m] || {}).hidden ||
      ((c = N_(e, i, m, h, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && t.push((d++ ? f : '') + c)));
  return delete n.dense, t.join('');
}
function ec(e, r) {
  r || (r = {}),
    (r.FS = '	'),
    (r.RS = `
`);
  var t = is(e, r);
  return t;
}
function k_(e) {
  var r = '',
    t,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = Ue(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = gt(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = ht(c), f = i.s.c; f <= i.e.c; ++f)
      if (
        ((r = s[f] + a),
        (t = o ? (e[c] || [])[f] : e[r]),
        (n = ''),
        t !== void 0)
      ) {
        if (t.F != null) {
          if (((r = t.F), !t.f)) continue;
          (n = t.f), r.indexOf(':') == -1 && (r = r + ':' + r);
        }
        if (t.f != null) n = t.f;
        else {
          if (t.t == 'z') continue;
          if (t.t == 'n' && t.v != null) n = '' + t.v;
          else if (t.t == 'b') n = t.v ? 'TRUE' : 'FALSE';
          else if (t.w !== void 0) n = "'" + t.w;
          else {
            if (t.v === void 0) continue;
            t.t == 's' ? (n = "'" + t.v) : (n = '' + t.v);
          }
        }
        l[l.length] = r + '=' + n;
      }
  return l;
}
function tc(e, r, t) {
  var n = t || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? at(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + r.length - 1 + i } };
  if (a['!ref']) {
    var h = Ue(a['!ref']);
    (c.e.c = Math.max(c.e.c, h.e.c)),
      (c.e.r = Math.max(c.e.r, h.e.r)),
      s == -1 && ((s = h.e.r + 1), (c.e.r = s + r.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = r.length - 1 + i));
  var u = n.header || [],
    x = 0;
  r.forEach(function (d, m) {
    dt(d).forEach(function (y) {
      (x = u.indexOf(y)) == -1 && (u[(x = u.length)] = y);
      var F = d[y],
        A = 'z',
        N = '',
        W = Ne({ c: f + x, r: s + m + i });
      (o = gi(a, W)),
        F && typeof F == 'object' && !(F instanceof Date)
          ? (a[W] = F)
          : (typeof F == 'number'
              ? (A = 'n')
              : typeof F == 'boolean'
                ? (A = 'b')
                : typeof F == 'string'
                  ? (A = 's')
                  : F instanceof Date
                    ? ((A = 'd'),
                      n.cellDates || ((A = 'n'), (F = Mt(F))),
                      (N = n.dateNF || qe[14]))
                    : F === null && n.nullError && ((A = 'e'), (F = 0)),
            o
              ? ((o.t = A), (o.v = F), delete o.w, delete o.R, N && (o.z = N))
              : (a[W] = o = { t: A, v: F }),
            N && (o.z = N));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + u.length - 1));
  var p = ht(s);
  if (i) for (x = 0; x < u.length; ++x) a[gt(x + f) + p] = { t: 's', v: u[x] };
  return (a['!ref'] = et(c)), a;
}
function D_(e, r) {
  return tc(null, e, r);
}
function gi(e, r, t) {
  if (typeof r == 'string') {
    if (Array.isArray(e)) {
      var n = at(r);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[r] || (e[r] = { t: 'z' });
  }
  return typeof r != 'number' ? gi(e, Ne(r)) : gi(e, Ne({ r, c: t || 0 }));
}
function I_(e, r) {
  if (typeof r == 'number') {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error('Cannot find sheet # ' + r);
  } else if (typeof r == 'string') {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error('Cannot find sheet name |' + r + '|');
  } else throw new Error('Cannot find sheet |' + r + '|');
}
function P_() {
  return { SheetNames: [], Sheets: {} };
}
function L_(e, r, t, n) {
  var i = 1;
  if (!t)
    for (
      ;
      i <= 65535 && e.SheetNames.indexOf((t = 'Sheet' + i)) != -1;
      ++i, t = void 0
    );
  if (!t || e.SheetNames.length >= 65535)
    throw new Error('Too many worksheets');
  if (n && e.SheetNames.indexOf(t) >= 0) {
    var a = t.match(/(^.*?)(\d+)$/);
    i = (a && +a[2]) || 0;
    var s = (a && a[1]) || t;
    for (++i; i <= 65535 && e.SheetNames.indexOf((t = s + i)) != -1; ++i);
  }
  if (($l(t), e.SheetNames.indexOf(t) >= 0))
    throw new Error('Worksheet with name |' + t + '| already exists!');
  return e.SheetNames.push(t), (e.Sheets[t] = r), t;
}
function M_(e, r, t) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = I_(e, r);
  switch ((e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), t)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error('Bad sheet visibility setting ' + t);
  }
  e.Workbook.Sheets[n].Hidden = t;
}
function B_(e, r) {
  return (e.z = r), e;
}
function rc(e, r, t) {
  return r ? ((e.l = { Target: r }), t && (e.l.Tooltip = t)) : delete e.l, e;
}
function b_(e, r, t) {
  return rc(e, '#' + r, t);
}
function U_(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || 'SheetJS' });
}
function H_(e, r, t, n) {
  for (
    var i = typeof r != 'string' ? r : Ue(r),
      a = typeof r == 'string' ? r : et(r),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = gi(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = t), n && (l.D = !0));
    }
  return e;
}
var r0 = {
    encode_col: gt,
    encode_row: ht,
    encode_cell: Ne,
    encode_range: et,
    decode_col: X0,
    decode_row: z0,
    split_cell: ed,
    decode_cell: at,
    decode_range: jt,
    format_cell: Nr,
    sheet_add_aoa: rl,
    sheet_add_json: tc,
    sheet_add_dom: ql,
    aoa_to_sheet: Bn,
    json_to_sheet: D_,
    table_to_sheet: Yl,
    table_to_book: l_,
    sheet_to_csv: is,
    sheet_to_txt: ec,
    sheet_to_json: ma,
    sheet_to_html: Kl,
    sheet_to_formulae: k_,
    sheet_to_row_object_array: ma,
    sheet_get_cell: gi,
    book_new: P_,
    book_append_sheet: L_,
    book_set_sheet_visibility: M_,
    cell_set_number_format: B_,
    cell_set_hyperlink: rc,
    cell_set_internal_link: b_,
    cell_add_comment: U_,
    sheet_set_array_formula: H_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  W_ = Tt('<p> </p>'),
  V_ = Tt(
    '<div class="add-item-form-container svelte-1m01alq"><h3 class="svelte-1m01alq">Add New Item</h3> <form><div class="form-group svelte-1m01alq"><label for="newItemCode" class="svelte-1m01alq">Item Code:</label> <input id="newItemCode" type="text" required class="svelte-1m01alq"/></div> <div class="form-group svelte-1m01alq"><label for="newItemName" class="svelte-1m01alq">Item Name:</label> <input id="newItemName" type="text" required class="svelte-1m01alq"/></div> <div class="form-group svelte-1m01alq"><label for="newItemMinStock" class="svelte-1m01alq">Min. Stock Level:</label> <input id="newItemMinStock" type="number" step="0.001" required class="svelte-1m01alq"/></div> <div class="form-group svelte-1m01alq"><label for="newItemUnit" class="svelte-1m01alq">Unit:</label> <input id="newItemUnit" type="text" required class="svelte-1m01alq"/></div> <button type="submit" class="btn submit-btn svelte-1m01alq">Add Item</button> <button type="button" class="btn cancel-btn svelte-1m01alq">Cancel</button></form> <!></div>',
  ),
  G_ = Tt('<p class="status svelte-1m01alq">Loading inventory data...</p>'),
  $_ = Tt('<p class="status error svelte-1m01alq"> </p>'),
  j_ = Tt(
    '<p class="status svelte-1m01alq">No inventory items found matching your criteria.</p>',
  ),
  z_ = Tt('<th class="svelte-1m01alq"> <!></th>'),
  X_ = Tt(
    '<td class="svelte-1m01alq"><span class="cell-content svelte-1m01alq"> </span></td>',
  ),
  K_ = Tt('<th class="svelte-1m01alq"> </th>'),
  q_ = Tt(
    '<td class="svelte-1m01alq"><span class="cell-content svelte-1m01alq"> </span></td>',
  ),
  Y_ = Tt('<tr class="svelte-1m01alq"></tr>'),
  J_ = Tt(
    '<tr class="svelte-1m01alq"><td class="svelte-1m01alq"><div class="inner-scroll svelte-1m01alq"><table class="batch-table svelte-1m01alq"><thead class="svelte-1m01alq"><tr class="svelte-1m01alq"></tr></thead><tbody class="svelte-1m01alq"></tbody></table></div></td></tr>',
  ),
  Z_ = Tt(
    '<tr class="svelte-1m01alq"><td class="svelte-1m01alq"><button class="expand-btn svelte-1m01alq"> </button></td><!></tr> <!>',
    1,
  ),
  Q_ = Tt(
    '<div class="table-container svelte-1m01alq"><table class="svelte-1m01alq"><thead class="svelte-1m01alq"><tr><th class="svelte-1m01alq"></th><!></tr></thead><tbody class="svelte-1m01alq"></tbody></table></div>',
  ),
  eg = Tt(
    '<div class="modal-backdrop svelte-1m01alq"><div class="modal svelte-1m01alq"><button class="close-btn svelte-1m01alq">×</button> <h4> </h4> <p> </p></div></div>',
  ),
  tg = Tt(
    '<!> <div class="wrapper svelte-1m01alq"><div class="card svelte-1m01alq"><div class="header svelte-1m01alq"><h2>Inventory Master List</h2> <div class="controls svelte-1m01alq"><input placeholder="Search all fields..." class="search-input svelte-1m01alq"/> <button class="btn excel-btn svelte-1m01alq">Export Excel</button> <button class="btn add-item-btn svelte-1m01alq">Add New Item</button></div></div> <!> <!></div></div> <!>',
    1,
  );
function rg(e, r) {
  F0(r, !1);
  const [t, n] = mu(),
    i = () => vt(Te, '$newItemCode', t),
    a = () => vt(ue, '$newItemName', t),
    s = () => vt(He, '$newItemMinStock', t),
    f = () => vt(ke, '$newItemUnit', t),
    l = () => vt(O, '$searchTerm', t),
    o = () => vt(ee, '$showAddItemForm', t),
    c = () => vt(ze, '$addItemMessage', t),
    h = () => vt(W, '$isLoading', t),
    u = () => vt(N, '$rawInventoryItems', t),
    x = () => vt(q, '$errorMessage', t),
    p = () => vt(le, '$processedInventory', t),
    d = () => vt(b, '$sortItemGroupColumn', t),
    m = () => vt(P, '$sortItemGroupDirection', t),
    y = () => vt(V, '$expandedItemCodes', t),
    F = () => vt(G, '$showModal', t),
    A = () => vt(X, '$modalContent', t),
    N = mt([]),
    W = mt(!0),
    q = mt(''),
    O = mt(''),
    b = mt(null),
    P = mt('asc'),
    V = mt(new Set()),
    G = mt(!1),
    X = mt({ field: '', text: '' }),
    ee = mt(!1),
    Te = mt(''),
    ue = mt(''),
    He = mt(''),
    ke = mt(''),
    ze = mt(''),
    Ve = [
      { key: 'itemcode', label: 'Item Code', sortable: !0 },
      { key: 'itemname', label: 'Item Name', sortable: !0 },
      {
        key: 'total_stock_for_item',
        label: 'Total Stock',
        sortable: !0,
        type: 'float',
      },
      { key: 'unit_name', label: 'Unit', sortable: !0 },
      {
        key: 'min_stock_level',
        label: 'Min. Item Stock',
        sortable: !0,
        type: 'float',
      },
      {
        key: 'average_purchase_price',
        label: 'Avg. Purchase Price',
        sortable: !0,
        type: 'currency',
      },
      {
        key: 'average_estimated_profit_percentage',
        label: 'Avg. Est. Profit (%)',
        sortable: !0,
        type: 'percentage',
      },
      {
        key: 'average_estimated_selling_price',
        label: 'Avg. Est. Sell Price',
        sortable: !0,
        type: 'currency',
      },
    ],
    wt = [
      { key: 'batchcode', label: 'Batch Code' },
      { key: 'current_stock_in_batch', label: 'Stock in Batch', type: 'float' },
      {
        key: 'purchase_price_per_unit',
        label: 'Purchase Price',
        type: 'currency',
      },
      {
        key: 'estimate_percentage',
        label: 'Est. Profit (%)',
        type: 'percentage',
      },
      {
        key: 'estimated_selling_price_per_unit',
        label: 'Est. Sell Price',
        type: 'currency',
      },
      { key: 'datepurchase', label: 'Purchase Date', type: 'date' },
      { key: 'expiry', label: 'Expiry Date', type: 'date' },
      { key: 'suppname', label: 'Supplier' },
      { key: 'itemused', label: 'Used For' },
      { key: 'itemdesc1', label: 'Desc 1' },
      { key: 'itemdesc2', label: 'Desc 2' },
      { key: 'itemdesc3', label: 'Desc 3' },
    ];
  async function xt() {
    var oe, _e;
    W.set(!0), q.set('');
    try {
      const Ee = await Ye.get('http://localhost:3000/api/master/all-inventory');
      Ee.data && Array.isArray(Ee.data)
        ? N.set(Ee.data)
        : (N.set([]), q.set('Received invalid data format from server.'));
    } catch (Ee) {
      N.set([]),
        q.set(
          `Failed to fetch inventory: ${Ee.message || ((_e = (oe = Ee.response) == null ? void 0 : oe.data) == null ? void 0 : _e.error) || 'Unknown error'}`,
        );
    } finally {
      W.set(!1);
    }
  }
  function S(oe) {
    if (!oe) return 'N/A';
    const _e = new Date(oe);
    return isNaN(_e.getTime())
      ? oe
      : _e.toLocaleDateString(void 0, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  }
  function M(oe) {
    return oe == null || isNaN(Number(oe))
      ? 'N/A'
      : Number(oe).toLocaleString(void 0, {
          style: 'currency',
          currency: 'INR',
        });
  }
  function R(oe) {
    return oe == null || isNaN(Number(oe))
      ? 'N/A'
      : `${Number(oe).toFixed(2)}%`;
  }
  function C(oe) {
    return oe == null || isNaN(Number(oe)) ? 'N/A' : Number(oe).toFixed(3);
  }
  function z(oe) {
    V.update((_e) => {
      const Ee = new Set(_e);
      return Ee.has(oe) ? Ee.delete(oe) : Ee.add(oe), Ee;
    });
  }
  function fe(oe) {
    b.update((_e) =>
      _e === oe
        ? (P.update((Ee) => (Ee === 'asc' ? 'desc' : 'asc')), _e)
        : (P.set('asc'), oe),
    );
  }
  const le = pu([N, O, b, P], ([oe, _e, Ee, Je]) => {
    let pe = [...oe];
    if (_e.trim()) {
      const ce = _e.toLowerCase();
      pe = pe.filter((me) =>
        Object.values(me).some((Me) => String(Me).toLowerCase().includes(ce)),
      );
    }
    const De = pe.reduce((ce, me) => {
      if (!me.itemcode) return ce;
      ce[me.itemcode] ||
        (ce[me.itemcode] = {
          itemcode: me.itemcode,
          itemname: me.itemname,
          min_stock_level: me.min_stock_level,
          unit_name: me.unit_name,
          total_stock_for_item: 0,
          total_value_of_stock: 0,
          total_weighted_profit_percentage: 0,
          total_weighted_estimated_selling_price: 0,
          batches: [],
        });
      const Me = Number(me.current_stock_in_batch),
        We = Number(me.purchase_price_per_unit),
        be = Number(me.estimate_percentage);
      let Qt = 0;
      return (
        !isNaN(We) && !isNaN(be) && (Qt = We * (1 + be / 100)),
        (me.estimated_selling_price_per_unit = Qt),
        (ce[me.itemcode].total_stock_for_item += isNaN(Me) ? 0 : Me),
        !isNaN(Me) &&
          !isNaN(We) &&
          (ce[me.itemcode].total_value_of_stock += Me * We),
        !isNaN(Me) &&
          Me > 0 &&
          !isNaN(be) &&
          (ce[me.itemcode].total_weighted_profit_percentage += Me * be),
        !isNaN(Me) &&
          Me > 0 &&
          !isNaN(Qt) &&
          (ce[me.itemcode].total_weighted_estimated_selling_price += Me * Qt),
        ce[me.itemcode].batches.push(me),
        ce
      );
    }, {});
    Object.values(De).forEach((ce) => {
      ce.total_stock_for_item > 0
        ? ((ce.average_purchase_price =
            ce.total_value_of_stock / ce.total_stock_for_item),
          (ce.average_estimated_profit_percentage =
            ce.total_weighted_profit_percentage / ce.total_stock_for_item),
          (ce.average_estimated_selling_price =
            ce.total_weighted_estimated_selling_price /
            ce.total_stock_for_item))
        : ((ce.average_purchase_price = 0),
          (ce.average_estimated_profit_percentage = 0),
          (ce.average_estimated_selling_price = 0)),
        ce.batches.sort((me, Me) => {
          const We = new Date(me.expiry).getTime(),
            be = new Date(Me.expiry).getTime();
          return isNaN(We) && isNaN(be)
            ? 0
            : isNaN(We)
              ? 1
              : isNaN(be)
                ? -1
                : We - be;
        });
    });
    let bt = Object.values(De);
    if (Ee) {
      const ce = Ve.find((me) => me.key === Ee);
      ce &&
        bt.sort((me, Me) => {
          let We = me[Ee],
            be = Me[Ee];
          return (
            We == null &&
              (We =
                Je === 'asc'
                  ? ce.type === 'float' ||
                    ce.type === 'currency' ||
                    ce.type === 'percentage'
                    ? 1 / 0
                    : ''
                  : ce.type === 'float' ||
                      ce.type === 'currency' ||
                      ce.type === 'percentage'
                    ? -1 / 0
                    : 'zzzzzzzzzzzz'),
            be == null &&
              (be =
                Je === 'asc'
                  ? ce.type === 'float' ||
                    ce.type === 'currency' ||
                    ce.type === 'percentage'
                    ? 1 / 0
                    : ''
                  : ce.type === 'float' ||
                      ce.type === 'currency' ||
                      ce.type === 'percentage'
                    ? -1 / 0
                    : 'zzzzzzzzzzzz'),
            ce.type === 'float' ||
            ce.type === 'currency' ||
            ce.type === 'percentage'
              ? ((We = Number(We) || 0),
                (be = Number(be) || 0),
                Je === 'asc' ? We - be : be - We)
              : Je === 'asc'
                ? String(We).localeCompare(String(be))
                : String(be).localeCompare(String(We))
          );
        });
    }
    return bt;
  });
  async function se(oe) {
    var Ee, Je;
    oe.preventDefault(), ze.set('');
    const _e = {
      itemcode: i(),
      itemname: a(),
      min_stock_level: s() ? parseFloat(s()) : 0,
      unit_name: f(),
    };
    if (!_e.itemcode || !_e.itemname) {
      ze.set('Item Code and Item Name are required.');
      return;
    }
    if (isNaN(_e.min_stock_level)) {
      ze.set('Min. Stock Level must be a number.');
      return;
    }
    if (!_e.unit_name) {
      ze.set('Unit is required.');
      return;
    }
    try {
      const pe = await Ye.post('http://localhost:3000/api/master/add-item', _e);
      ze.set(pe.data.message),
        Te.set(''),
        ue.set(''),
        He.set(''),
        ke.set(''),
        ee.set(!1),
        xt();
    } catch (pe) {
      ze.set(
        ((Je = (Ee = pe.response) == null ? void 0 : Ee.data) == null
          ? void 0
          : Je.error) || 'Failed to add item.',
      );
    }
  }
  function te(oe, _e) {
    X.set({ field: oe, text: _e != null ? String(_e) : 'N/A' }), G.set(!0);
  }
  function Fe() {
    let oe = [];
    le.subscribe((Je) => {
      Je.forEach((pe) => {
        pe.batches.forEach((De) => {
          oe.push({
            'Item Code': pe.itemcode,
            'Item Name': pe.itemname,
            'Min. Stock Level (Item)': pe.min_stock_level,
            Unit: pe.unit_name,
            'Total Stock (Item)': pe.total_stock_for_item,
            'Avg. Purchase Price (Item)': pe.average_purchase_price,
            'Avg. Est. Profit (%) (Item)':
              pe.average_estimated_profit_percentage,
            'Avg. Est. Sell Price (Item)': pe.average_estimated_selling_price,
            'Batch Code': De.batchcode,
            'Stock in Batch': De.current_stock_in_batch,
            'Purchase Price': De.purchase_price_per_unit,
            'Est. Profit (%) (Batch)': De.estimate_percentage,
            'Est. Sell Price (Batch)': De.estimated_selling_price_per_unit,
            'Purchase Date': S(De.datepurchase),
            'Expiry Date': S(De.expiry),
            Supplier: De.suppname,
            'Used For': De.itemused,
            'Desc 1': De.itemdesc1,
            'Desc 2': De.itemdesc2,
            'Desc 3': De.itemdesc3,
          });
        }),
          pe.batches.length === 0 &&
            oe.push({
              'Item Code': pe.itemcode,
              'Item Name': pe.itemname,
              'Min. Stock Level (Item)': pe.min_stock_level,
              Unit: pe.unit_name,
              'Total Stock (Item)': pe.total_stock_for_item,
              'Avg. Purchase Price (Item)': pe.average_purchase_price,
              'Avg. Est. Profit (%) (Item)':
                pe.average_estimated_profit_percentage,
              'Avg. Est. Sell Price (Item)': pe.average_estimated_selling_price,
              'Batch Code': 'N/A',
              'Stock in Batch': 'N/A',
              'Purchase Price': 'N/A',
              'Est. Profit (%) (Batch)': 'N/A',
              'Est. Sell Price (Batch)': 'N/A',
              'Purchase Date': 'N/A',
              'Expiry Date': 'N/A',
              Supplier: 'N/A',
              'Used For': 'N/A',
              'Desc 1': 'N/A',
              'Desc 2': 'N/A',
              'Desc 3': 'N/A',
            });
      });
    })();
    const _e = r0.json_to_sheet(oe),
      Ee = r0.book_new();
    r0.book_append_sheet(Ee, _e, 'InventoryData'),
      O_(Ee, 'FullInventoryDetails.xlsx');
  }
  Yf(xt), hu();
  var ge = tg(),
    nt = ls(ge);
  Jh(nt, {});
  var we = Ae(nt, 2),
    Zt = de(we),
    Be = de(Zt),
    ae = Ae(de(Be), 2),
    St = de(ae),
    zt = Ae(St, 2),
    Er = Ae(zt, 2),
    Tr = Ae(Be, 2);
  {
    var ki = (oe) => {
      var _e = V_(),
        Ee = Ae(de(_e), 2),
        Je = de(Ee),
        pe = Ae(de(Je), 2),
        De = Ae(Je, 2),
        bt = Ae(de(De), 2),
        ce = Ae(De, 2),
        me = Ae(de(ce), 2),
        Me = Ae(ce, 2),
        We = Ae(de(Me), 2),
        be = Ae(Me, 4),
        Qt = Ae(Ee, 2);
      {
        var Gn = (At) => {
          var Nt = W_(),
            Xe = de(Nt);
          nr(
            (cr) => {
              Yr(Nt, 1, `status ${cr ?? ''}`, 'svelte-1m01alq'), ur(Xe, c());
            },
            [() => (c().includes('successfully') ? 'success' : 'error')],
            Zn,
          ),
            ft(At, Nt);
        };
        Ir(Qt, (At) => {
          c() && At(Gn);
        });
      }
      Kn(pe, i, (At) => qn(Te, At)),
        Kn(bt, a, (At) => qn(ue, At)),
        Kn(me, s, (At) => qn(He, At)),
        Kn(We, f, (At) => qn(ke, At)),
        er('click', be, () => ee.set(!1)),
        er('submit', Ee, se),
        ft(oe, _e);
    };
    Ir(Tr, (oe) => {
      o() && oe(ki);
    });
  }
  var Hn = Ae(Tr, 2);
  {
    var Xt = (oe) => {
        var _e = G_();
        ft(oe, _e);
      },
      dn = (oe, _e) => {
        {
          var Ee = (pe) => {
              var De = $_(),
                bt = de(De);
              nr(() => ur(bt, x())), ft(pe, De);
            },
            Je = (pe, De) => {
              {
                var bt = (me) => {
                    var Me = j_();
                    ft(me, Me);
                  },
                  ce = (me) => {
                    var Me = Q_(),
                      We = de(Me),
                      be = de(We),
                      Qt = de(be),
                      Gn = Ae(de(Qt));
                    _n(
                      Gn,
                      1,
                      () => Ve,
                      Di,
                      (Nt, Xe) => {
                        var cr = z_(),
                          zr = de(cr),
                          xn = Ae(zr);
                        {
                          var pn = (Xr) => {
                            var vn = Jc();
                            nr(() => ur(vn, m() === 'asc' ? '▲' : '▼')),
                              ft(Xr, vn);
                          };
                          Ir(xn, (Xr) => {
                            re(Xe).sortable && d() === re(Xe).key && Xr(pn);
                          });
                        }
                        nr(() => ur(zr, `${re(Xe).label ?? ''} `)),
                          er(
                            'click',
                            cr,
                            () => re(Xe).sortable && fe(re(Xe).key),
                          ),
                          ft(Nt, cr);
                      },
                    );
                    var At = Ae(be);
                    _n(
                      At,
                      5,
                      p,
                      (Nt) => Nt.itemcode,
                      (Nt, Xe) => {
                        var cr = Z_(),
                          zr = ls(cr),
                          xn = de(zr),
                          pn = de(xn),
                          Xr = de(pn),
                          vn = Ae(xn);
                        _n(
                          vn,
                          1,
                          () => Ve,
                          Di,
                          (wr, Ze) => {
                            var Kr = X_(),
                              v = de(Kr),
                              E = de(v);
                            nr(
                              (_) => ur(E, _),
                              [
                                () =>
                                  re(Ze).type === 'float'
                                    ? C(re(Xe)[re(Ze).key])
                                    : re(Ze).type === 'currency'
                                      ? M(re(Xe)[re(Ze).key])
                                      : re(Ze).type === 'percentage'
                                        ? R(re(Xe)[re(Ze).key])
                                        : (re(Xe)[re(Ze).key] ?? 'N/A'),
                              ],
                              Zn,
                            ),
                              er('click', v, () =>
                                te(
                                  re(Ze).label,
                                  re(Ze).type === 'currency'
                                    ? M(re(Xe)[re(Ze).key])
                                    : re(Ze).type === 'percentage'
                                      ? R(re(Xe)[re(Ze).key])
                                      : re(Ze).type === 'float'
                                        ? C(re(Xe)[re(Ze).key])
                                        : re(Xe)[re(Ze).key],
                                ),
                              ),
                              ft(wr, Kr);
                          },
                        );
                        var Ha = Ae(zr, 2);
                        {
                          var $n = (wr) => {
                            var Ze = J_(),
                              Kr = de(Ze),
                              v = de(Kr),
                              E = de(v),
                              _ = de(E),
                              g = de(_);
                            _n(
                              g,
                              5,
                              () => wt,
                              Di,
                              (w, D) => {
                                var U = K_(),
                                  I = de(U);
                                nr(() => ur(I, re(D).label)), ft(w, U);
                              },
                            );
                            var T = Ae(_);
                            _n(
                              T,
                              5,
                              () => re(Xe).batches,
                              (w) => w.batchcode,
                              (w, D) => {
                                var U = Y_();
                                _n(
                                  U,
                                  5,
                                  () => wt,
                                  Di,
                                  (I, k) => {
                                    var L = q_(),
                                      K = de(L),
                                      Q = de(K);
                                    nr(
                                      (ie) => ur(Q, ie),
                                      [
                                        () =>
                                          re(k).type === 'date'
                                            ? S(re(D)[re(k).key])
                                            : re(k).type === 'currency'
                                              ? M(re(D)[re(k).key])
                                              : re(k).type === 'float'
                                                ? C(re(D)[re(k).key])
                                                : re(k).type === 'percentage'
                                                  ? R(re(D)[re(k).key])
                                                  : (re(D)[re(k).key] ?? 'N/A'),
                                      ],
                                      Zn,
                                    ),
                                      er('click', K, () =>
                                        te(
                                          re(k).label,
                                          re(k).type === 'date'
                                            ? S(re(D)[re(k).key])
                                            : re(k).type === 'currency'
                                              ? M(re(D)[re(k).key])
                                              : re(k).type === 'percentage'
                                                ? R(re(D)[re(k).key])
                                                : re(k).type === 'float'
                                                  ? C(re(D)[re(k).key])
                                                  : re(D)[re(k).key],
                                        ),
                                      ),
                                      ft(I, L);
                                  },
                                ),
                                  ft(w, U);
                              },
                            ),
                              nr(() => ou(Kr, 'colspan', Ve.length + 1)),
                              ft(wr, Ze);
                          };
                          Ir(Ha, (wr) => {
                            y().has(re(Xe).itemcode) && wr($n);
                          });
                        }
                        nr(
                          (wr) => ur(Xr, wr),
                          [() => (y().has(re(Xe).itemcode) ? '−' : '+')],
                          Zn,
                        ),
                          er('click', pn, () => z(re(Xe).itemcode)),
                          ft(Nt, cr);
                      },
                    ),
                      ft(me, Me);
                  };
                Ir(
                  pe,
                  (me) => {
                    p().length === 0 ? me(bt) : me(ce, !1);
                  },
                  De,
                );
              }
            };
          Ir(
            oe,
            (pe) => {
              x() ? pe(Ee) : pe(Je, !1);
            },
            _e,
          );
        }
      };
    Ir(Hn, (oe) => {
      h() && u().length === 0 ? oe(Xt) : oe(dn, !1);
    });
  }
  var Wn = Ae(we, 2);
  {
    var Vn = (oe) => {
      var _e = eg(),
        Ee = de(_e),
        Je = de(Ee),
        pe = Ae(Je, 2),
        De = de(pe),
        bt = Ae(pe, 2),
        ce = de(bt);
      nr(() => {
        ur(De, A().field), ur(ce, A().text);
      }),
        er('click', Je, () => G.set(!1)),
        er(
          'click',
          Ee,
          uu(function (me) {
            du.call(this, r, me);
          }),
        ),
        er('click', _e, () => G.set(!1)),
        ft(oe, _e);
    };
    Ir(Wn, (oe) => {
      F() && oe(Vn);
    });
  }
  Kn(St, l, (oe) => qn(O, oe)),
    er('click', zt, Fe),
    er('click', Er, () => ee.set(!0)),
    ft(e, ge),
    C0(),
    n();
}
Zc(rg, { target: document.getElementById('app') });
