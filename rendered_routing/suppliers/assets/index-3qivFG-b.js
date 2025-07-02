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
const Y0 = !1;
var h0 = Array.isArray,
  ql = Array.prototype.indexOf,
  x0 = Array.from,
  cf = Object.defineProperty,
  bn = Object.getOwnPropertyDescriptor,
  uf = Object.getOwnPropertyDescriptors,
  Jl = Object.prototype,
  Zl = Array.prototype,
  d0 = Object.getPrototypeOf,
  q0 = Object.isExtensible;
const Er = () => {};
function Ql(e) {
  return e();
}
function Ii(e) {
  for (var r = 0; r < e.length; r++) e[r]();
}
const zt = 2,
  hf = 4,
  aa = 8,
  p0 = 16,
  xr = 32,
  pn = 64,
  Pi = 128,
  Pt = 256,
  Li = 512,
  St = 1024,
  rr = 2048,
  Xr = 4096,
  fr = 8192,
  sa = 16384,
  ec = 32768,
  v0 = 65536,
  tc = 1 << 19,
  xf = 1 << 20,
  Ja = 1 << 21,
  Un = Symbol('$state');
function df(e) {
  return e === this.v;
}
function pf(e, r) {
  return e != e
    ? r == r
    : e !== r || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function vf(e) {
  return !pf(e, this.v);
}
function rc(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function nc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function ic(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function ac() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function sc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function fc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function oc() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let ni = !1,
  lc = !1;
function cc() {
  ni = !0;
}
const uc = 1,
  hc = 2,
  xc = 16,
  dc = 1,
  pc = 2,
  _t = Symbol(),
  vc = 'http://www.w3.org/1999/xhtml';
function mc(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let Le = null;
function J0(e) {
  Le = e;
}
function m0(e, r = !1, t) {
  var n = (Le = {
    p: Le,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  ni && !r && (Le.l = { s: null, u: null, r1: [], r2: zn(!1) }),
    E0(() => {
      n.d = !0;
    });
}
function _0(e) {
  const r = Le;
  if (r !== null) {
    const s = r.e;
    if (s !== null) {
      var t = Oe,
        n = Ce;
      r.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          wr(a.effect), nr(a.reaction), Of(a.fn);
        }
      } finally {
        wr(t), nr(n);
      }
    }
    (Le = r.p), (r.m = !0);
  }
  return {};
}
function ii() {
  return !ni || (Le !== null && Le.l === null);
}
function fn(e) {
  if (typeof e != 'object' || e === null || Un in e) return e;
  const r = d0(e);
  if (r !== Jl && r !== Zl) return e;
  var t = new Map(),
    n = h0(e),
    i = sr(0),
    a = Ce,
    s = (f) => {
      var l = Ce;
      nr(a);
      var o = f();
      return nr(l), o;
    };
  return (
    n && t.set('length', sr(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          sc();
        var c = t.get(l);
        return (
          c === void 0
            ? ((c = s(() => sr(o.value))), t.set(l, c))
            : Me(
                c,
                s(() => fn(o.value)),
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
              s(() => sr(_t)),
            ),
            La(i));
        else {
          if (n && typeof l == 'string') {
            var c = t.get('length'),
              u = Number(l);
            Number.isInteger(u) && u < c.v && Me(c, u);
          }
          Me(o, _t), La(i);
        }
        return !0;
      },
      get(f, l, o) {
        var d;
        if (l === Un) return e;
        var c = t.get(l),
          u = l in f;
        if (
          (c === void 0 &&
            (!u || ((d = bn(f, l)) != null && d.writable)) &&
            ((c = s(() => sr(fn(u ? f[l] : _t)))), t.set(l, c)),
          c !== void 0)
        ) {
          var h = ve(c);
          return h === _t ? void 0 : h;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = t.get(l);
          c && (o.value = ve(c));
        } else if (o === void 0) {
          var u = t.get(l),
            h = u == null ? void 0 : u.v;
          if (u !== void 0 && h !== _t)
            return { enumerable: !0, configurable: !0, value: h, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        var h;
        if (l === Un) return !0;
        var o = t.get(l),
          c = (o !== void 0 && o.v !== _t) || Reflect.has(f, l);
        if (
          o !== void 0 ||
          (Oe !== null && (!c || ((h = bn(f, l)) != null && h.writable)))
        ) {
          o === void 0 && ((o = s(() => sr(c ? fn(f[l]) : _t))), t.set(l, o));
          var u = ve(o);
          if (u === _t) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var F;
        var u = t.get(l),
          h = l in f;
        if (n && l === 'length')
          for (var d = o; d < u.v; d += 1) {
            var p = t.get(d + '');
            p !== void 0
              ? Me(p, _t)
              : d in f && ((p = s(() => sr(_t))), t.set(d + '', p));
          }
        u === void 0
          ? (!h || ((F = bn(f, l)) != null && F.writable)) &&
            ((u = s(() => sr(void 0))),
            Me(
              u,
              s(() => fn(o)),
            ),
            t.set(l, u))
          : ((h = u.v !== _t),
            Me(
              u,
              s(() => fn(o)),
            ));
        var x = Reflect.getOwnPropertyDescriptor(f, l);
        if ((x != null && x.set && x.set.call(c, o), !h)) {
          if (n && typeof l == 'string') {
            var m = t.get('length'),
              S = Number(l);
            Number.isInteger(S) && S >= m.v && Me(m, S + 1);
          }
          La(i);
        }
        return !0;
      },
      ownKeys(f) {
        ve(i);
        var l = Reflect.ownKeys(f).filter((u) => {
          var h = t.get(u);
          return h === void 0 || h.v !== _t;
        });
        for (var [o, c] of t) c.v !== _t && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        fc();
      },
    })
  );
}
function La(e, r = 1) {
  Me(e, e.v + r);
}
function g0(e) {
  var r = zt | rr,
    t = Ce !== null && (Ce.f & zt) !== 0 ? Ce : null;
  return (
    Oe === null || (t !== null && (t.f & Pt) !== 0) ? (r |= Pt) : (Oe.f |= xf),
    {
      ctx: Le,
      deps: null,
      effects: null,
      equals: df,
      f: r,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: t ?? Oe,
    }
  );
}
function mf(e) {
  const r = g0(e);
  return (r.equals = vf), r;
}
function _f(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1) Tr(r[t]);
  }
}
function _c(e) {
  for (var r = e.parent; r !== null; ) {
    if ((r.f & zt) === 0) return r;
    r = r.parent;
  }
  return null;
}
function gf(e) {
  var r,
    t = Oe;
  wr(_c(e));
  try {
    _f(e), (r = bf(e));
  } finally {
    wr(t);
  }
  return r;
}
function Ef(e) {
  var r = gf(e);
  if ((e.equals(r) || ((e.v = r), (e.wv = Bf())), !mn)) {
    var t = (mr || (e.f & Pt) !== 0) && e.deps !== null ? Xr : St;
    Kt(e, t);
  }
}
const $n = new Map();
function zn(e, r) {
  var t = { f: 0, v: e, reactions: null, equals: df, rv: 0, wv: 0 };
  return t;
}
function sr(e, r) {
  const t = zn(e);
  return Rc(t), t;
}
function Lr(e, r = !1) {
  var n;
  const t = zn(e);
  return (
    r || (t.equals = vf),
    ni && Le !== null && Le.l !== null && ((n = Le.l).s ?? (n.s = [])).push(t),
    t
  );
}
function Me(e, r, t = !1) {
  Ce !== null &&
    !tr &&
    ii() &&
    (Ce.f & (zt | p0)) !== 0 &&
    !(pt != null && pt.includes(e)) &&
    oc();
  let n = t ? fn(r) : r;
  return Tf(e, n);
}
function Tf(e, r) {
  if (!e.equals(r)) {
    var t = e.v;
    mn ? $n.set(e, r) : $n.set(e, t),
      (e.v = r),
      (e.f & zt) !== 0 &&
        ((e.f & rr) !== 0 && gf(e), Kt(e, (e.f & Pt) === 0 ? St : Xr)),
      (e.wv = Bf()),
      wf(e, rr),
      ii() &&
        Oe !== null &&
        (Oe.f & St) !== 0 &&
        (Oe.f & (xr | pn)) === 0 &&
        (Mt === null ? Nc([e]) : Mt.push(e));
  }
  return r;
}
function wf(e, r) {
  var t = e.reactions;
  if (t !== null)
    for (var n = ii(), i = t.length, a = 0; a < i; a++) {
      var s = t[a],
        f = s.f;
      (f & rr) === 0 &&
        ((!n && s === Oe) ||
          (Kt(s, r),
          (f & (St | Pt)) !== 0 && ((f & zt) !== 0 ? wf(s, Xr) : la(s))));
    }
}
let gc = !1;
var Z0, Sf, Af, yf;
function Ec() {
  if (Z0 === void 0) {
    (Z0 = window), (Sf = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      r = Node.prototype,
      t = Text.prototype;
    (Af = bn(r, 'firstChild').get),
      (yf = bn(r, 'nextSibling').get),
      q0(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      q0(t) && (t.__t = void 0);
  }
}
function Ff(e = '') {
  return document.createTextNode(e);
}
function Bi(e) {
  return Af.call(e);
}
function fa(e) {
  return yf.call(e);
}
function Re(e, r) {
  return Bi(e);
}
function Ba(e, r) {
  {
    var t = Bi(e);
    return t instanceof Comment && t.data === '' ? fa(t) : t;
  }
}
function ze(e, r = 1, t = !1) {
  let n = e;
  for (; r--; ) n = fa(n);
  return n;
}
function Tc(e) {
  e.textContent = '';
}
function Cf(e) {
  Oe === null && Ce === null && ic(),
    Ce !== null && (Ce.f & Pt) !== 0 && Oe === null && nc(),
    mn && rc();
}
function wc(e, r) {
  var t = r.last;
  t === null
    ? (r.last = r.first = e)
    : ((t.next = e), (e.prev = t), (r.last = e));
}
function vn(e, r, t, n = !0) {
  var i = Oe,
    a = {
      ctx: Le,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | rr,
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
      S0(a), (a.f |= ec);
    } catch (l) {
      throw (Tr(a), l);
    }
  else r !== null && la(a);
  var s =
    t &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (xf | Pi)) === 0;
  if (!s && n && (i !== null && wc(a, i), Ce !== null && (Ce.f & zt) !== 0)) {
    var f = Ce;
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function E0(e) {
  const r = vn(aa, null, !1);
  return Kt(r, St), (r.teardown = e), r;
}
function Za(e) {
  Cf();
  var r = Oe !== null && (Oe.f & xr) !== 0 && Le !== null && !Le.m;
  if (r) {
    var t = Le;
    (t.e ?? (t.e = [])).push({ fn: e, effect: Oe, reaction: Ce });
  } else {
    var n = Of(e);
    return n;
  }
}
function Sc(e) {
  return Cf(), Rf(e);
}
function Ac(e) {
  const r = vn(pn, e, !0);
  return (t = {}) =>
    new Promise((n) => {
      t.outro
        ? Mi(r, () => {
            Tr(r), n(void 0);
          })
        : (Tr(r), n(void 0));
    });
}
function Of(e) {
  return vn(hf, e, !1);
}
function Rf(e) {
  return vn(aa, e, !0);
}
function Ir(e, r = [], t = g0) {
  const n = r.map(t);
  return T0(() => e(...n.map(ve)));
}
function T0(e, r = 0) {
  return vn(aa | p0 | r, e, !0);
}
function Kn(e, r = !0) {
  return vn(aa | xr, e, !0, r);
}
function Nf(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = mn,
      n = Ce;
    Q0(!0), nr(null);
    try {
      r.call(null);
    } finally {
      Q0(t), nr(n);
    }
  }
}
function kf(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    var n = t.next;
    (t.f & pn) !== 0 ? (t.parent = null) : Tr(t, r), (t = n);
  }
}
function yc(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & xr) === 0 && Tr(r), (r = t);
  }
}
function Tr(e, r = !0) {
  var t = !1;
  (r || (e.f & tc) !== 0) &&
    e.nodes_start !== null &&
    (Fc(e.nodes_start, e.nodes_end), (t = !0)),
    kf(e, r && !t),
    Vi(e, 0),
    Kt(e, sa);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  Nf(e);
  var i = e.parent;
  i !== null && i.first !== null && Df(e),
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
function Fc(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : fa(e);
    e.remove(), (e = t);
  }
}
function Df(e) {
  var r = e.parent,
    t = e.prev,
    n = e.next;
  t !== null && (t.next = n),
    n !== null && (n.prev = t),
    r !== null &&
      (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function Mi(e, r) {
  var t = [];
  w0(e, t, !0),
    If(t, () => {
      Tr(e), r && r();
    });
}
function If(e, r) {
  var t = e.length;
  if (t > 0) {
    var n = () => --t || r();
    for (var i of e) i.out(n);
  } else r();
}
function w0(e, r, t) {
  if ((e.f & fr) === 0) {
    if (((e.f ^= fr), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || t) && r.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & v0) !== 0 || (n.f & xr) !== 0;
      w0(n, r, a ? t : !1), (n = i);
    }
  }
}
function bi(e) {
  Pf(e, !0);
}
function Pf(e, r) {
  if ((e.f & fr) !== 0) {
    (e.f ^= fr), (e.f & St) === 0 && (e.f ^= St), ai(e) && (Kt(e, rr), la(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next,
        i = (t.f & v0) !== 0 || (t.f & xr) !== 0;
      Pf(t, i ? r : !1), (t = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || r) && a.in();
  }
}
let Ui = [];
function Cc() {
  var e = Ui;
  (Ui = []), Ii(e);
}
function Oc(e) {
  Ui.length === 0 && queueMicrotask(Cc), Ui.push(e);
}
let Oi = !1,
  Qa = !1,
  Hi = null,
  br = !1,
  mn = !1;
function Q0(e) {
  mn = e;
}
let Ri = [];
let Ce = null,
  tr = !1;
function nr(e) {
  Ce = e;
}
let Oe = null;
function wr(e) {
  Oe = e;
}
let pt = null;
function Rc(e) {
  Ce !== null && Ce.f & Ja && (pt === null ? (pt = [e]) : pt.push(e));
}
let ht = null,
  Rt = 0,
  Mt = null;
function Nc(e) {
  Mt = e;
}
let Lf = 1,
  Wi = 0,
  mr = !1;
function Bf() {
  return ++Lf;
}
function ai(e) {
  var u;
  var r = e.f;
  if ((r & rr) !== 0) return !0;
  if ((r & Xr) !== 0) {
    var t = e.deps,
      n = (r & Pt) !== 0;
    if (t !== null) {
      var i,
        a,
        s = (r & Li) !== 0,
        f = n && Oe !== null && !mr,
        l = t.length;
      if (s || f) {
        var o = e,
          c = o.parent;
        for (i = 0; i < l; i++)
          (a = t[i]),
            (s ||
              !(
                (u = a == null ? void 0 : a.reactions) != null && u.includes(o)
              )) &&
              (a.reactions ?? (a.reactions = [])).push(o);
        s && (o.f ^= Li), f && c !== null && (c.f & Pt) === 0 && (o.f ^= Pt);
      }
      for (i = 0; i < l; i++)
        if (((a = t[i]), ai(a) && Ef(a), a.wv > e.wv)) return !0;
    }
    (!n || (Oe !== null && !mr)) && Kt(e, St);
  }
  return !1;
}
function kc(e, r) {
  for (var t = r; t !== null; ) {
    if ((t.f & Pi) !== 0)
      try {
        t.fn(e);
        return;
      } catch {
        t.f ^= Pi;
      }
    t = t.parent;
  }
  throw ((Oi = !1), e);
}
function es(e) {
  return (e.f & sa) === 0 && (e.parent === null || (e.parent.f & Pi) === 0);
}
function oa(e, r, t, n) {
  if (Oi) {
    if ((t === null && (Oi = !1), es(r))) throw e;
    return;
  }
  if ((t !== null && (Oi = !0), kc(e, r), es(r))) throw e;
}
function Mf(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (pt != null && pt.includes(e)) ||
        ((a.f & zt) !== 0
          ? Mf(a, r, !1)
          : r === a && (t ? Kt(a, rr) : (a.f & St) !== 0 && Kt(a, Xr), la(a)));
    }
}
function bf(e) {
  var d;
  var r = ht,
    t = Rt,
    n = Mt,
    i = Ce,
    a = mr,
    s = pt,
    f = Le,
    l = tr,
    o = e.f;
  (ht = null),
    (Rt = 0),
    (Mt = null),
    (mr = (o & Pt) !== 0 && (tr || !br || Ce === null)),
    (Ce = (o & (xr | pn)) === 0 ? e : null),
    (pt = null),
    J0(e.ctx),
    (tr = !1),
    Wi++,
    (e.f |= Ja);
  try {
    var c = (0, e.fn)(),
      u = e.deps;
    if (ht !== null) {
      var h;
      if ((Vi(e, Rt), u !== null && Rt > 0))
        for (u.length = Rt + ht.length, h = 0; h < ht.length; h++)
          u[Rt + h] = ht[h];
      else e.deps = u = ht;
      if (!mr)
        for (h = Rt; h < u.length; h++)
          ((d = u[h]).reactions ?? (d.reactions = [])).push(e);
    } else u !== null && Rt < u.length && (Vi(e, Rt), (u.length = Rt));
    if (
      ii() &&
      Mt !== null &&
      !tr &&
      u !== null &&
      (e.f & (zt | Xr | rr)) === 0
    )
      for (h = 0; h < Mt.length; h++) Mf(Mt[h], e);
    return (
      i !== null &&
        i !== e &&
        (Wi++, Mt !== null && (n === null ? (n = Mt) : n.push(...Mt))),
      c
    );
  } finally {
    (ht = r),
      (Rt = t),
      (Mt = n),
      (Ce = i),
      (mr = a),
      (pt = s),
      J0(f),
      (tr = l),
      (e.f ^= Ja);
  }
}
function Dc(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = ql.call(t, e);
    if (n !== -1) {
      var i = t.length - 1;
      i === 0 ? (t = r.reactions = null) : ((t[n] = t[i]), t.pop());
    }
  }
  t === null &&
    (r.f & zt) !== 0 &&
    (ht === null || !ht.includes(r)) &&
    (Kt(r, Xr), (r.f & (Pt | Li)) === 0 && (r.f ^= Li), _f(r), Vi(r, 0));
}
function Vi(e, r) {
  var t = e.deps;
  if (t !== null) for (var n = r; n < t.length; n++) Dc(e, t[n]);
}
function S0(e) {
  var r = e.f;
  if ((r & sa) === 0) {
    Kt(e, St);
    var t = Oe,
      n = Le,
      i = br;
    (Oe = e), (br = !0);
    try {
      (r & p0) !== 0 ? yc(e) : kf(e), Nf(e);
      var a = bf(e);
      (e.teardown = typeof a == 'function' ? a : null), (e.wv = Lf);
      var s = e.deps,
        f;
      Y0 && lc && e.f & rr;
    } catch (l) {
      oa(l, e, t, n || e.ctx);
    } finally {
      (br = i), (Oe = t);
    }
  }
}
function Ic() {
  try {
    ac();
  } catch (e) {
    if (Hi !== null) oa(e, Hi, null);
    else throw e;
  }
}
function Pc() {
  var e = br;
  try {
    var r = 0;
    for (br = !0; Ri.length > 0; ) {
      r++ > 1e3 && Ic();
      var t = Ri,
        n = t.length;
      Ri = [];
      for (var i = 0; i < n; i++) {
        var a = Bc(t[i]);
        Lc(a);
      }
      $n.clear();
    }
  } finally {
    (Qa = !1), (br = e), (Hi = null);
  }
}
function Lc(e) {
  var r = e.length;
  if (r !== 0)
    for (var t = 0; t < r; t++) {
      var n = e[t];
      if ((n.f & (sa | fr)) === 0)
        try {
          ai(n) &&
            (S0(n),
            n.deps === null &&
              n.first === null &&
              n.nodes_start === null &&
              (n.teardown === null ? Df(n) : (n.fn = null)));
        } catch (i) {
          oa(i, n, null, n.ctx);
        }
    }
}
function la(e) {
  Qa || ((Qa = !0), queueMicrotask(Pc));
  for (var r = (Hi = e); r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if ((t & (pn | xr)) !== 0) {
      if ((t & St) === 0) return;
      r.f ^= St;
    }
  }
  Ri.push(r);
}
function Bc(e) {
  for (var r = [], t = e; t !== null; ) {
    var n = t.f,
      i = (n & (xr | pn)) !== 0,
      a = i && (n & St) !== 0;
    if (!a && (n & fr) === 0) {
      if ((n & hf) !== 0) r.push(t);
      else if (i) t.f ^= St;
      else
        try {
          ai(t) && S0(t);
        } catch (l) {
          oa(l, t, null, t.ctx);
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
function ve(e) {
  var r = e.f,
    t = (r & zt) !== 0;
  if (Ce !== null && !tr) {
    if (!(pt != null && pt.includes(e))) {
      var n = Ce.deps;
      e.rv < Wi &&
        ((e.rv = Wi),
        ht === null && n !== null && n[Rt] === e
          ? Rt++
          : ht === null
            ? (ht = [e])
            : (!mr || !ht.includes(e)) && ht.push(e));
    }
  } else if (t && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & Pt) === 0 && (i.f ^= Pt);
  }
  return t && ((i = e), ai(i) && Ef(i)), mn && $n.has(e) ? $n.get(e) : e.v;
}
function ca(e) {
  var r = tr;
  try {
    return (tr = !0), e();
  } finally {
    tr = r;
  }
}
const Mc = -7169;
function Kt(e, r) {
  e.f = (e.f & Mc) | r;
}
function bc(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Un in e) e0(e);
    else if (!Array.isArray(e))
      for (let r in e) {
        const t = e[r];
        typeof t == 'object' && t && Un in t && e0(t);
      }
  }
}
function e0(e, r = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !r.has(e)
  ) {
    r.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        e0(e[n], r);
      } catch {}
    const t = d0(e);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const n = uf(t);
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
let ts = !1;
function Wc() {
  ts ||
    ((ts = !0),
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
function Uf(e) {
  var r = Ce,
    t = Oe;
  nr(null), wr(null);
  try {
    return e();
  } finally {
    nr(r), wr(t);
  }
}
function Vc(e, r, t, n = t) {
  e.addEventListener(r, () => Uf(t));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    Wc();
}
const Gc = new Set(),
  rs = new Set();
function jc(e, r, t, n = {}) {
  function i(a) {
    if ((n.capture || Bn.call(r, a), !a.cancelBubble))
      return Uf(() => (t == null ? void 0 : t.call(this, a)));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? Oc(() => {
          r.addEventListener(e, i, n);
        })
      : r.addEventListener(e, i, n),
    i
  );
}
function Zr(e, r, t, n, i) {
  var a = { capture: n, passive: i },
    s = jc(e, r, t, a);
  (r === document.body ||
    r === window ||
    r === document ||
    r instanceof HTMLMediaElement) &&
    E0(() => {
      r.removeEventListener(e, s, a);
    });
}
function Bn(e) {
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
    cf(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || t;
      },
    });
    var c = Ce,
      u = Oe;
    nr(null), wr(null);
    try {
      for (var h, d = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var x = a['__' + n];
          if (x != null && (!a.disabled || e.target === a))
            if (h0(x)) {
              var [m, ...S] = x;
              m.apply(a, [e, ...S]);
            } else x.call(a, e);
        } catch (y) {
          h ? d.push(y) : (h = y);
        }
        if (e.cancelBubble || p === r || p === null) break;
        a = p;
      }
      if (h) {
        for (let y of d)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      (e.__root = r), delete e.currentTarget, nr(c), wr(u);
    }
  }
}
function Xc(e) {
  var r = document.createElement('template');
  return (r.innerHTML = e.replaceAll('<!>', '<!---->')), r.content;
}
function ns(e, r) {
  var t = Oe;
  t.nodes_start === null && ((t.nodes_start = e), (t.nodes_end = r));
}
function Ft(e, r) {
  var t = (r & dc) !== 0,
    n = (r & pc) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Xc(a ? e : '<!>' + e)), t || (i = Bi(i)));
    var s = n || Sf ? document.importNode(i, !0) : i.cloneNode(!0);
    if (t) {
      var f = Bi(s),
        l = s.lastChild;
      ns(f, l);
    } else ns(s, s);
    return s;
  };
}
function gt(e, r) {
  e !== null && e.before(r);
}
function In(e, r) {
  var t = r == null ? '' : typeof r == 'object' ? r + '' : r;
  t !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = t), (e.nodeValue = t + ''));
}
function $c(e, r) {
  return zc(e, r);
}
const Qr = new Map();
function zc(
  e,
  { target: r, anchor: t, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  Ec();
  var f = new Set(),
    l = (u) => {
      for (var h = 0; h < u.length; h++) {
        var d = u[h];
        if (!f.has(d)) {
          f.add(d);
          var p = Hc(d);
          r.addEventListener(d, Bn, { passive: p });
          var x = Qr.get(d);
          x === void 0
            ? (document.addEventListener(d, Bn, { passive: p }), Qr.set(d, 1))
            : Qr.set(d, x + 1);
        }
      }
    };
  l(x0(Gc)), rs.add(l);
  var o = void 0,
    c = Ac(() => {
      var u = t ?? r.appendChild(Ff());
      return (
        Kn(() => {
          if (a) {
            m0({});
            var h = Le;
            h.c = a;
          }
          i && (n.$$events = i), (o = e(u, n) || {}), a && _0();
        }),
        () => {
          var p;
          for (var h of f) {
            r.removeEventListener(h, Bn);
            var d = Qr.get(h);
            --d === 0
              ? (document.removeEventListener(h, Bn), Qr.delete(h))
              : Qr.set(h, d);
          }
          rs.delete(l),
            u !== t && ((p = u.parentNode) == null || p.removeChild(u));
        }
      );
    });
  return Kc.set(o, c), o;
}
let Kc = new WeakMap();
function kr(e, r, [t, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = _t,
    l = t > 0 ? v0 : 0,
    o = !1;
  const c = (h, d = !0) => {
      (o = !0), u(d, h);
    },
    u = (h, d) => {
      f !== (f = h) &&
        (f
          ? (a ? bi(a) : d && (a = Kn(() => d(i))),
            s &&
              Mi(s, () => {
                s = null;
              }))
          : (s ? bi(s) : d && (s = Kn(() => d(i, [t + 1, n]))),
            a &&
              Mi(a, () => {
                a = null;
              })));
    };
  T0(() => {
    (o = !1), r(c), o || u(null, null);
  }, l);
}
function Yc(e, r, t, n) {
  for (var i = [], a = r.length, s = 0; s < a; s++) w0(r[s].e, i, !0);
  var f = a > 0 && i.length === 0 && t !== null;
  if (f) {
    var l = t.parentNode;
    Tc(l), l.append(t), n.clear(), vr(e, r[0].prev, r[a - 1].next);
  }
  If(i, () => {
    for (var o = 0; o < a; o++) {
      var c = r[o];
      f || (n.delete(c.k), vr(e, c.prev, c.next)), Tr(c.e, !f);
    }
  });
}
function qc(e, r, t, n, i, a = null) {
  var s = e,
    f = { flags: r, items: new Map(), first: null };
  {
    var l = e;
    s = l.appendChild(Ff());
  }
  var o = null,
    c = !1,
    u = mf(() => {
      var h = t();
      return h0(h) ? h : h == null ? [] : x0(h);
    });
  T0(() => {
    var h = ve(u),
      d = h.length;
    (c && d === 0) ||
      ((c = d === 0),
      Jc(h, f, s, i, r, n, t),
      a !== null &&
        (d === 0
          ? o
            ? bi(o)
            : (o = Kn(() => a(s)))
          : o !== null &&
            Mi(o, () => {
              o = null;
            })),
      ve(u));
  });
}
function Jc(e, r, t, n, i, a, s) {
  var f = e.length,
    l = r.items,
    o = r.first,
    c = o,
    u,
    h = null,
    d = [],
    p = [],
    x,
    m,
    S,
    F;
  for (F = 0; F < f; F += 1) {
    if (((x = e[F]), (m = a(x, F)), (S = l.get(m)), S === void 0)) {
      var y = c ? c.e.nodes_start : t;
      (h = Qc(y, r, h, h === null ? r.first : h.next, x, m, F, n, i, s)),
        l.set(m, h),
        (d = []),
        (p = []),
        (c = h.next);
      continue;
    }
    if ((Zc(S, x, F), (S.e.f & fr) !== 0 && bi(S.e), S !== c)) {
      if (u !== void 0 && u.has(S)) {
        if (d.length < p.length) {
          var N = p[0],
            W;
          h = N.prev;
          var Y = d[0],
            R = d[d.length - 1];
          for (W = 0; W < d.length; W += 1) is(d[W], N, t);
          for (W = 0; W < p.length; W += 1) u.delete(p[W]);
          vr(r, Y.prev, R.next),
            vr(r, h, Y),
            vr(r, R, N),
            (c = N),
            (h = R),
            (F -= 1),
            (d = []),
            (p = []);
        } else
          u.delete(S),
            is(S, c, t),
            vr(r, S.prev, S.next),
            vr(r, S, h === null ? r.first : h.next),
            vr(r, h, S),
            (h = S);
        continue;
      }
      for (d = [], p = []; c !== null && c.k !== m; )
        (c.e.f & fr) === 0 && (u ?? (u = new Set())).add(c),
          p.push(c),
          (c = c.next);
      if (c === null) continue;
      S = c;
    }
    d.push(S), (h = S), (c = S.next);
  }
  if (c !== null || u !== void 0) {
    for (var U = u === void 0 ? [] : x0(u); c !== null; )
      (c.e.f & fr) === 0 && U.push(c), (c = c.next);
    var P = U.length;
    if (P > 0) {
      var V = f === 0 ? t : null;
      Yc(r, U, V, l);
    }
  }
  (Oe.first = r.first && r.first.e), (Oe.last = h && h.e);
}
function Zc(e, r, t, n) {
  Tf(e.v, r), (e.i = t);
}
function Qc(e, r, t, n, i, a, s, f, l, o) {
  var c = (l & uc) !== 0,
    u = (l & xc) === 0,
    h = c ? (u ? Lr(i) : zn(i)) : i,
    d = (l & hc) === 0 ? s : zn(s),
    p = { i: d, v: h, k: a, a: null, e: null, prev: t, next: n };
  try {
    return (
      (p.e = Kn(() => f(e, h, d, o), gc)),
      (p.e.prev = t && t.e),
      (p.e.next = n && n.e),
      t === null ? (r.first = p) : ((t.next = p), (t.e.next = p.e)),
      n !== null && ((n.prev = p), (n.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function is(e, r, t) {
  for (
    var n = e.next ? e.next.e.nodes_start : t,
      i = r ? r.e.nodes_start : t,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = fa(a);
    i.before(a), (a = s);
  }
}
function vr(e, r, t) {
  r === null ? (e.first = t) : ((r.next = t), (r.e.next = t && t.e)),
    t !== null && ((t.prev = r), (t.e.prev = r && r.e));
}
const as = [
  ...` 	
\r\f \v\uFEFF`,
];
function eu(e, r, t) {
  var n = '' + e;
  if (t) {
    for (var i in t)
      if (t[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || as.includes(n[s - 1])) &&
          (f === n.length || as.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function en(e, r, t, n, i, a) {
  var s = e.__className;
  if (s !== t || s === void 0) {
    var f = eu(t, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = t);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
const tu = Symbol('is custom element'),
  ru = Symbol('is html');
function nu(e, r, t, n) {
  var i = iu(e);
  i[r] !== (i[r] = t) &&
    (t == null
      ? e.removeAttribute(r)
      : typeof t != 'string' && au(e).includes(r)
        ? (e[r] = t)
        : e.setAttribute(r, t));
}
function iu(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [tu]: e.nodeName.includes('-'),
      [ru]: e.namespaceURI === vc,
    })
  );
}
var ss = new Map();
function au(e) {
  var r = ss.get(e.nodeName);
  if (r) return r;
  ss.set(e.nodeName, (r = []));
  for (var t, n = e, i = Element.prototype; i !== n; ) {
    t = uf(n);
    for (var a in t) t[a].set && r.push(a);
    n = d0(n);
  }
  return r;
}
function tn(e, r, t = r) {
  var n = ii();
  Vc(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = Ma(e) ? ba(a) : a), t(a), n && a !== (a = r()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    ca(r) == null && e.value && t(Ma(e) ? ba(e.value) : e.value),
    Rf(() => {
      var i = r();
      (Ma(e) && i === ba(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function Ma(e) {
  var r = e.type;
  return r === 'number' || r === 'range';
}
function ba(e) {
  return e === '' ? null : +e;
}
function su(e) {
  return function (...r) {
    var t = r[0];
    return t.preventDefault(), e == null ? void 0 : e.apply(this, r);
  };
}
function fu(e = !1) {
  const r = Le,
    t = r.l.u;
  if (!t) return;
  let n = () => bc(r.s);
  if (e) {
    let i = 0,
      a = {};
    const s = g0(() => {
      let f = !1;
      const l = r.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => ve(s);
  }
  t.b.length &&
    Sc(() => {
      fs(r, n), Ii(t.b);
    }),
    Za(() => {
      const i = ca(() => t.m.map(Ql));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    t.a.length &&
      Za(() => {
        fs(r, n), Ii(t.a);
      });
}
function fs(e, r) {
  if (e.l.s) for (const t of e.l.s) ve(t);
  r();
}
function A0(e, r, t) {
  if (e == null) return r(void 0), t && t(void 0), Er;
  const n = ca(() => e.subscribe(r, t));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const rn = [];
function ou(e, r) {
  return { subscribe: Pr(e, r).subscribe };
}
function Pr(e, r = Er) {
  let t = null;
  const n = new Set();
  function i(f) {
    if (pf(e, f) && ((e = f), t)) {
      const l = !rn.length;
      for (const o of n) o[1](), rn.push(o, e);
      if (l) {
        for (let o = 0; o < rn.length; o += 2) rn[o][0](rn[o + 1]);
        rn.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = Er) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (t = r(i, a) || Er),
      f(e),
      () => {
        n.delete(o), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function lu(e, r, t) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = r.length < 2;
  return ou(t, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      u = Er;
    const h = () => {
        if (c) return;
        u();
        const p = r(n ? o[0] : o, s, f);
        a ? s(p) : (u = typeof p == 'function' ? p : Er);
      },
      d = i.map((p, x) =>
        A0(
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
        Ii(d), u(), (l = !1);
      }
    );
  });
}
function cu(e) {
  let r;
  return A0(e, (t) => (r = t))(), r;
}
let t0 = Symbol();
function Dr(e, r, t) {
  const n =
    t[r] ?? (t[r] = { store: null, source: Lr(void 0), unsubscribe: Er });
  if (n.store !== e && !(t0 in t))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = Er);
    else {
      var i = !0;
      (n.unsubscribe = A0(e, (a) => {
        i ? (n.source.v = a) : Me(n.source, a);
      })),
        (i = !1);
    }
  return e && t0 in t ? cu(e) : ve(n.source);
}
function uu(e, r) {
  return e.set(r), r;
}
function hu() {
  const e = {};
  function r() {
    E0(() => {
      for (var t in e) e[t].unsubscribe();
      cf(e, t0, { enumerable: !1, value: !0 });
    });
  }
  return [e, r];
}
function Hf(e) {
  Le === null && mc(),
    ni && Le.l !== null
      ? xu(Le).m.push(e)
      : Za(() => {
          const r = ca(e);
          if (typeof r == 'function') return r;
        });
}
function xu(e) {
  var r = e.l;
  return r.u ?? (r.u = { a: [], b: [], m: [] });
}
const du = '5';
var lf;
typeof window < 'u' &&
  (
    (lf = window.__svelte ?? (window.__svelte = {})).v ?? (lf.v = new Set())
  ).add(du);
cc();
function Wf(e, r) {
  return function () {
    return e.apply(r, arguments);
  };
}
const { toString: pu } = Object.prototype,
  { getPrototypeOf: y0 } = Object,
  { iterator: ua, toStringTag: Vf } = Symbol,
  ha = ((e) => (r) => {
    const t = pu.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Yt = (e) => ((e = e.toLowerCase()), (r) => ha(r) === e),
  xa = (e) => (r) => typeof r === e,
  { isArray: _n } = Array,
  Yn = xa('undefined');
function vu(e) {
  return (
    e !== null &&
    !Yn(e) &&
    e.constructor !== null &&
    !Yn(e.constructor) &&
    Et(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Gf = Yt('ArrayBuffer');
function mu(e) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(e))
      : (r = e && e.buffer && Gf(e.buffer)),
    r
  );
}
const _u = xa('string'),
  Et = xa('function'),
  jf = xa('number'),
  da = (e) => e !== null && typeof e == 'object',
  gu = (e) => e === !0 || e === !1,
  Ni = (e) => {
    if (ha(e) !== 'object') return !1;
    const r = y0(e);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(Vf in e) &&
      !(ua in e)
    );
  },
  Eu = Yt('Date'),
  Tu = Yt('File'),
  wu = Yt('Blob'),
  Su = Yt('FileList'),
  Au = (e) => da(e) && Et(e.pipe),
  yu = (e) => {
    let r;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Et(e.append) &&
          ((r = ha(e)) === 'formdata' ||
            (r === 'object' &&
              Et(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Fu = Yt('URLSearchParams'),
  [Cu, Ou, Ru, Nu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    Yt,
  ),
  ku = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function si(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), _n(e)))
    for (n = 0, i = e.length; n < i; n++) r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), r.call(null, e[f], f, e);
  }
}
function Xf(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length,
    i;
  for (; n-- > 0; ) if (((i = t[n]), r === i.toLowerCase())) return i;
  return null;
}
const Mr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  $f = (e) => !Yn(e) && e !== Mr;
function r0() {
  const { caseless: e } = ($f(this) && this) || {},
    r = {},
    t = (n, i) => {
      const a = (e && Xf(r, i)) || i;
      Ni(r[a]) && Ni(n)
        ? (r[a] = r0(r[a], n))
        : Ni(n)
          ? (r[a] = r0({}, n))
          : _n(n)
            ? (r[a] = n.slice())
            : (r[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && si(arguments[n], t);
  return r;
}
const Du = (e, r, t, { allOwnKeys: n } = {}) => (
    si(
      r,
      (i, a) => {
        t && Et(i) ? (e[a] = Wf(i, t)) : (e[a] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  Iu = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Pu = (e, r, t, n) => {
    (e.prototype = Object.create(r.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: r.prototype }),
      t && Object.assign(e.prototype, t);
  },
  Lu = (e, r, t, n) => {
    let i, a, s;
    const f = {};
    if (((r = r || {}), e == null)) return r;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, e, r)) && !f[s] && ((r[s] = e[s]), (f[s] = !0));
      e = t !== !1 && y0(e);
    } while (e && (!t || t(e, r)) && e !== Object.prototype);
    return r;
  },
  Bu = (e, r, t) => {
    (e = String(e)),
      (t === void 0 || t > e.length) && (t = e.length),
      (t -= r.length);
    const n = e.indexOf(r, t);
    return n !== -1 && n === t;
  },
  Mu = (e) => {
    if (!e) return null;
    if (_n(e)) return e;
    let r = e.length;
    if (!jf(r)) return null;
    const t = new Array(r);
    for (; r-- > 0; ) t[r] = e[r];
    return t;
  },
  bu = (
    (e) => (r) =>
      e && r instanceof e
  )(typeof Uint8Array < 'u' && y0(Uint8Array)),
  Uu = (e, r) => {
    const n = (e && e[ua]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      r.call(e, a[0], a[1]);
    }
  },
  Hu = (e, r) => {
    let t;
    const n = [];
    for (; (t = e.exec(r)) !== null; ) n.push(t);
    return n;
  },
  Wu = Yt('HTMLFormElement'),
  Vu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, n, i) {
      return n.toUpperCase() + i;
    }),
  os = (
    ({ hasOwnProperty: e }) =>
    (r, t) =>
      e.call(r, t)
  )(Object.prototype),
  Gu = Yt('RegExp'),
  zf = (e, r) => {
    const t = Object.getOwnPropertyDescriptors(e),
      n = {};
    si(t, (i, a) => {
      let s;
      (s = r(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  ju = (e) => {
    zf(e, (r, t) => {
      if (Et(e) && ['arguments', 'caller', 'callee'].indexOf(t) !== -1)
        return !1;
      const n = e[t];
      if (Et(n)) {
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
  Xu = (e, r) => {
    const t = {},
      n = (i) => {
        i.forEach((a) => {
          t[a] = !0;
        });
      };
    return _n(e) ? n(e) : n(String(e).split(r)), t;
  },
  $u = () => {},
  zu = (e, r) => (e != null && Number.isFinite((e = +e)) ? e : r);
function Ku(e) {
  return !!(e && Et(e.append) && e[Vf] === 'FormData' && e[ua]);
}
const Yu = (e) => {
    const r = new Array(10),
      t = (n, i) => {
        if (da(n)) {
          if (r.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            r[i] = n;
            const a = _n(n) ? [] : {};
            return (
              si(n, (s, f) => {
                const l = t(s, i + 1);
                !Yn(l) && (a[f] = l);
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
  qu = Yt('AsyncFunction'),
  Ju = (e) => e && (da(e) || Et(e)) && Et(e.then) && Et(e.catch),
  Kf = ((e, r) =>
    e
      ? setImmediate
      : r
        ? ((t, n) => (
            Mr.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Mr && a === t && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Mr.postMessage(t, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (t) => setTimeout(t))(
    typeof setImmediate == 'function',
    Et(Mr.postMessage),
  ),
  Zu =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Mr)
      : (typeof process < 'u' && process.nextTick) || Kf,
  Qu = (e) => e != null && Et(e[ua]),
  M = {
    isArray: _n,
    isArrayBuffer: Gf,
    isBuffer: vu,
    isFormData: yu,
    isArrayBufferView: mu,
    isString: _u,
    isNumber: jf,
    isBoolean: gu,
    isObject: da,
    isPlainObject: Ni,
    isReadableStream: Cu,
    isRequest: Ou,
    isResponse: Ru,
    isHeaders: Nu,
    isUndefined: Yn,
    isDate: Eu,
    isFile: Tu,
    isBlob: wu,
    isRegExp: Gu,
    isFunction: Et,
    isStream: Au,
    isURLSearchParams: Fu,
    isTypedArray: bu,
    isFileList: Su,
    forEach: si,
    merge: r0,
    extend: Du,
    trim: ku,
    stripBOM: Iu,
    inherits: Pu,
    toFlatObject: Lu,
    kindOf: ha,
    kindOfTest: Yt,
    endsWith: Bu,
    toArray: Mu,
    forEachEntry: Uu,
    matchAll: Hu,
    isHTMLForm: Wu,
    hasOwnProperty: os,
    hasOwnProp: os,
    reduceDescriptors: zf,
    freezeMethods: ju,
    toObjectSet: Xu,
    toCamelCase: Vu,
    noop: $u,
    toFiniteNumber: zu,
    findKey: Xf,
    global: Mr,
    isContextDefined: $f,
    isSpecCompliantForm: Ku,
    toJSONObject: Yu,
    isAsyncFn: qu,
    isThenable: Ju,
    setImmediate: Kf,
    asap: Zu,
    isIterable: Qu,
  };
function de(e, r, t, n, i) {
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
M.inherits(de, Error, {
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
const Yf = de.prototype,
  qf = {};
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
  qf[e] = { value: e };
});
Object.defineProperties(de, qf);
Object.defineProperty(Yf, 'isAxiosError', { value: !0 });
de.from = (e, r, t, n, i, a) => {
  const s = Object.create(Yf);
  return (
    M.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    de.call(s, e.message, r, t, n, i),
    (s.cause = e),
    (s.name = e.name),
    a && Object.assign(s, a),
    s
  );
};
const eh = null;
function n0(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Jf(e) {
  return M.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ls(e, r, t) {
  return e
    ? e
        .concat(r)
        .map(function (i, a) {
          return (i = Jf(i)), !t && a ? '[' + i + ']' : i;
        })
        .join(t ? '.' : '')
    : r;
}
function th(e) {
  return M.isArray(e) && !e.some(n0);
}
const rh = M.toFlatObject(M, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function pa(e, r, t) {
  if (!M.isObject(e)) throw new TypeError('target must be an object');
  (r = r || new FormData()),
    (t = M.toFlatObject(
      t,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, m) {
        return !M.isUndefined(m[x]);
      },
    ));
  const n = t.metaTokens,
    i = t.visitor || c,
    a = t.dots,
    s = t.indexes,
    l = (t.Blob || (typeof Blob < 'u' && Blob)) && M.isSpecCompliantForm(r);
  if (!M.isFunction(i)) throw new TypeError('visitor must be a function');
  function o(p) {
    if (p === null) return '';
    if (M.isDate(p)) return p.toISOString();
    if (!l && M.isBlob(p))
      throw new de('Blob is not supported. Use a Buffer instead.');
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
        (M.isArray(p) && th(p)) ||
        ((M.isFileList(p) || M.endsWith(x, '[]')) && (S = M.toArray(p)))
      )
        return (
          (x = Jf(x)),
          S.forEach(function (y, N) {
            !(M.isUndefined(y) || y === null) &&
              r.append(
                s === !0 ? ls([x], N, a) : s === null ? x : x + '[]',
                o(y),
              );
          }),
          !1
        );
    }
    return n0(p) ? !0 : (r.append(ls(m, x, a), o(p)), !1);
  }
  const u = [],
    h = Object.assign(rh, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: n0,
    });
  function d(p, x) {
    if (!M.isUndefined(p)) {
      if (u.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      u.push(p),
        M.forEach(p, function (S, F) {
          (!(M.isUndefined(S) || S === null) &&
            i.call(r, S, M.isString(F) ? F.trim() : F, x, h)) === !0 &&
            d(S, x ? x.concat(F) : [F]);
        }),
        u.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError('data must be an object');
  return d(e), r;
}
function cs(e) {
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
function F0(e, r) {
  (this._pairs = []), e && pa(e, this, r);
}
const Zf = F0.prototype;
Zf.append = function (r, t) {
  this._pairs.push([r, t]);
};
Zf.toString = function (r) {
  const t = r
    ? function (n) {
        return r.call(this, n, cs);
      }
    : cs;
  return this._pairs
    .map(function (i) {
      return t(i[0]) + '=' + t(i[1]);
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
function Qf(e, r, t) {
  if (!r) return e;
  const n = (t && t.encode) || nh;
  M.isFunction(t) && (t = { serialize: t });
  const i = t && t.serialize;
  let a;
  if (
    (i
      ? (a = i(r, t))
      : (a = M.isURLSearchParams(r) ? r.toString() : new F0(r, t).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class us {
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
    M.forEach(this.handlers, function (n) {
      n !== null && r(n);
    });
  }
}
const eo = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ih = typeof URLSearchParams < 'u' ? URLSearchParams : F0,
  ah = typeof FormData < 'u' ? FormData : null,
  sh = typeof Blob < 'u' ? Blob : null,
  fh = {
    isBrowser: !0,
    classes: { URLSearchParams: ih, FormData: ah, Blob: sh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  C0 = typeof window < 'u' && typeof document < 'u',
  i0 = (typeof navigator == 'object' && navigator) || void 0,
  oh =
    C0 &&
    (!i0 || ['ReactNative', 'NativeScript', 'NS'].indexOf(i0.product) < 0),
  lh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ch = (C0 && window.location.href) || 'http://localhost',
  uh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: C0,
        hasStandardBrowserEnv: oh,
        hasStandardBrowserWebWorkerEnv: lh,
        navigator: i0,
        origin: ch,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  st = { ...uh, ...fh };
function hh(e, r) {
  return pa(
    e,
    new st.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, n, i, a) {
          return st.isNode && M.isBuffer(t)
            ? (this.append(n, t.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function xh(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((r) =>
    r[0] === '[]' ? '' : r[1] || r[0],
  );
}
function dh(e) {
  const r = {},
    t = Object.keys(e);
  let n;
  const i = t.length;
  let a;
  for (n = 0; n < i; n++) (a = t[n]), (r[a] = e[a]);
  return r;
}
function to(e) {
  function r(t, n, i, a) {
    let s = t[a++];
    if (s === '__proto__') return !0;
    const f = Number.isFinite(+s),
      l = a >= t.length;
    return (
      (s = !s && M.isArray(i) ? i.length : s),
      l
        ? (M.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !f)
        : ((!i[s] || !M.isObject(i[s])) && (i[s] = []),
          r(t, n, i[s], a) && M.isArray(i[s]) && (i[s] = dh(i[s])),
          !f)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const t = {};
    return (
      M.forEachEntry(e, (n, i) => {
        r(xh(n), i, t, 0);
      }),
      t
    );
  }
  return null;
}
function ph(e, r, t) {
  if (M.isString(e))
    try {
      return (r || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (t || JSON.stringify)(e);
}
const fi = {
  transitional: eo,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, t) {
      const n = t.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = M.isObject(r);
      if ((a && M.isHTMLForm(r) && (r = new FormData(r)), M.isFormData(r)))
        return i ? JSON.stringify(to(r)) : r;
      if (
        M.isArrayBuffer(r) ||
        M.isBuffer(r) ||
        M.isStream(r) ||
        M.isFile(r) ||
        M.isBlob(r) ||
        M.isReadableStream(r)
      )
        return r;
      if (M.isArrayBufferView(r)) return r.buffer;
      if (M.isURLSearchParams(r))
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
          return hh(r, this.formSerializer).toString();
        if ((f = M.isFileList(r)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return pa(
            f ? { 'files[]': r } : r,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (t.setContentType('application/json', !1), ph(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const t = this.transitional || fi.transitional,
        n = t && t.forcedJSONParsing,
        i = this.responseType === 'json';
      if (M.isResponse(r) || M.isReadableStream(r)) return r;
      if (r && M.isString(r) && ((n && !this.responseType) || i)) {
        const s = !(t && t.silentJSONParsing) && i;
        try {
          return JSON.parse(r);
        } catch (f) {
          if (s)
            throw f.name === 'SyntaxError'
              ? de.from(f, de.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: st.classes.FormData, Blob: st.classes.Blob },
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
M.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  fi.headers[e] = {};
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
              !(!t || (r[t] && vh[t])) &&
                (t === 'set-cookie'
                  ? r[t]
                    ? r[t].push(n)
                    : (r[t] = [n])
                  : (r[t] = r[t] ? r[t] + ', ' + n : n));
          }),
      r
    );
  },
  hs = Symbol('internals');
function Pn(e) {
  return e && String(e).trim().toLowerCase();
}
function ki(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(ki) : String(e);
}
function _h(e) {
  const r = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = t.exec(e)); ) r[n[1]] = n[2];
  return r;
}
const gh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ua(e, r, t, n, i) {
  if (M.isFunction(n)) return n.call(this, r, t);
  if ((i && (r = t), !!M.isString(r))) {
    if (M.isString(n)) return r.indexOf(n) !== -1;
    if (M.isRegExp(n)) return n.test(r);
  }
}
function Eh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Th(e, r) {
  const t = M.toCamelCase(' ' + r);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function (i, a, s) {
        return this[n].call(this, r, i, a, s);
      },
      configurable: !0,
    });
  });
}
let Tt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const i = this;
    function a(f, l, o) {
      const c = Pn(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const u = M.findKey(i, c);
      (!u || i[u] === void 0 || o === !0 || (o === void 0 && i[u] !== !1)) &&
        (i[u || l] = ki(f));
    }
    const s = (f, l) => M.forEach(f, (o, c) => a(o, c, l));
    if (M.isPlainObject(r) || r instanceof this.constructor) s(r, t);
    else if (M.isString(r) && (r = r.trim()) && !gh(r)) s(mh(r), t);
    else if (M.isObject(r) && M.isIterable(r)) {
      let f = {},
        l,
        o;
      for (const c of r) {
        if (!M.isArray(c))
          throw TypeError('Object iterator must return a key-value pair');
        f[(o = c[0])] = (l = f[o])
          ? M.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(f, t);
    } else r != null && a(t, r, n);
    return this;
  }
  get(r, t) {
    if (((r = Pn(r)), r)) {
      const n = M.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t) return i;
        if (t === !0) return _h(i);
        if (M.isFunction(t)) return t.call(this, i, n);
        if (M.isRegExp(t)) return t.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, t) {
    if (((r = Pn(r)), r)) {
      const n = M.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || Ua(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = Pn(s)), s)) {
        const f = M.findKey(n, s);
        f && (!t || Ua(n, n[f], f, t)) && (delete n[f], (i = !0));
      }
    }
    return M.isArray(r) ? r.forEach(a) : a(r), i;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length,
      i = !1;
    for (; n--; ) {
      const a = t[n];
      (!r || Ua(this, this[a], a, r, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(r) {
    const t = this,
      n = {};
    return (
      M.forEach(this, (i, a) => {
        const s = M.findKey(n, a);
        if (s) {
          (t[s] = ki(i)), delete t[a];
          return;
        }
        const f = r ? Eh(a) : String(a).trim();
        f !== a && delete t[a], (t[f] = ki(i)), (n[f] = !0);
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
      M.forEach(this, (n, i) => {
        n != null && n !== !1 && (t[i] = r && M.isArray(n) ? n.join(', ') : n);
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
    const n = (this[hs] = this[hs] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = Pn(s);
      n[f] || (Th(i, s), (n[f] = !0));
    }
    return M.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
Tt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
M.reduceDescriptors(Tt.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    },
  };
});
M.freezeMethods(Tt);
function Ha(e, r) {
  const t = this || fi,
    n = r || t,
    i = Tt.from(n.headers);
  let a = n.data;
  return (
    M.forEach(e, function (f) {
      a = f.call(t, a, i.normalize(), r ? r.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function ro(e) {
  return !!(e && e.__CANCEL__);
}
function gn(e, r, t) {
  de.call(this, e ?? 'canceled', de.ERR_CANCELED, r, t),
    (this.name = 'CanceledError');
}
M.inherits(gn, de, { __CANCEL__: !0 });
function no(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status)
    ? e(t)
    : r(
        new de(
          'Request failed with status code ' + t.status,
          [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][
            Math.floor(t.status / 100) - 4
          ],
          t.config,
          t.request,
          t,
        ),
      );
}
function wh(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (r && r[1]) || '';
}
function Sh(e, r) {
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
      let u = a,
        h = 0;
      for (; u !== i; ) (h += t[u++]), (u = u % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), o - s < r)) return;
      const d = c && o - c;
      return d ? Math.round((h * 1e3) / d) : void 0;
    }
  );
}
function Ah(e, r) {
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
        u = c - t;
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
const Gi = (e, r, t = 3) => {
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
        [r ? 'download' : 'upload']: !0,
      };
      e(u);
    }, t);
  },
  xs = (e, r) => {
    const t = e != null;
    return [(n) => r[0]({ lengthComputable: t, total: e, loaded: n }), r[1]];
  },
  ds =
    (e) =>
    (...r) =>
      M.asap(() => e(...r)),
  yh = st.hasStandardBrowserEnv
    ? ((e, r) => (t) => (
        (t = new URL(t, st.origin)),
        e.protocol === t.protocol &&
          e.host === t.host &&
          (r || e.port === t.port)
      ))(
        new URL(st.origin),
        st.navigator && /(msie|trident)/i.test(st.navigator.userAgent),
      )
    : () => !0,
  Fh = st.hasStandardBrowserEnv
    ? {
        write(e, r, t, n, i, a) {
          const s = [e + '=' + encodeURIComponent(r)];
          M.isNumber(t) && s.push('expires=' + new Date(t).toGMTString()),
            M.isString(n) && s.push('path=' + n),
            M.isString(i) && s.push('domain=' + i),
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
function Ch(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Oh(e, r) {
  return r ? e.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : e;
}
function io(e, r, t) {
  let n = !Ch(r);
  return e && (n || t == !1) ? Oh(e, r) : r;
}
const ps = (e) => (e instanceof Tt ? { ...e } : e);
function Wr(e, r) {
  r = r || {};
  const t = {};
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
    if (u in r) return n(o, c);
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
    headers: (o, c, u) => i(ps(o), ps(c), u, !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, r)), function (c) {
      const u = l[c] || i,
        h = u(e[c], r[c], c);
      (M.isUndefined(h) && u !== f) || (t[c] = h);
    }),
    t
  );
}
const ao = (e) => {
    const r = Wr({}, e);
    let {
      data: t,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = r;
    (r.headers = s = Tt.from(s)),
      (r.url = Qf(
        io(r.baseURL, r.url, r.allowAbsoluteUrls),
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
    if (M.isFormData(t)) {
      if (st.hasStandardBrowserEnv || st.hasStandardBrowserWebWorkerEnv)
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
      st.hasStandardBrowserEnv &&
      (n && M.isFunction(n) && (n = n(r)), n || (n !== !1 && yh(r.url)))
    ) {
      const o = i && a && Fh.read(a);
      o && s.set(i, o);
    }
    return r;
  },
  Rh = typeof XMLHttpRequest < 'u',
  Nh =
    Rh &&
    function (e) {
      return new Promise(function (t, n) {
        const i = ao(e);
        let a = i.data;
        const s = Tt.from(i.headers).normalize();
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
          const y = Tt.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            W = {
              data:
                !f || f === 'text' || f === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: y,
              config: e,
              request: m,
            };
          no(
            function (R) {
              t(R), x();
            },
            function (R) {
              n(R), x();
            },
            W,
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
              (n(new de('Request aborted', de.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new de('Network Error', de.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let N = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const W = i.transitional || eo;
            i.timeoutErrorMessage && (N = i.timeoutErrorMessage),
              n(
                new de(
                  N,
                  W.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            M.forEach(s.toJSON(), function (N, W) {
              m.setRequestHeader(W, N);
            }),
          M.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([h, p] = Gi(o, !0)), m.addEventListener('progress', h)),
          l &&
            m.upload &&
            (([u, d] = Gi(l)),
            m.upload.addEventListener('progress', u),
            m.upload.addEventListener('loadend', d)),
          (i.cancelToken || i.signal) &&
            ((c = (y) => {
              m &&
                (n(!y || y.type ? new gn(null, e, m) : y),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const F = wh(i.url);
        if (F && st.protocols.indexOf(F) === -1) {
          n(new de('Unsupported protocol ' + F + ':', de.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  kh = (e, r) => {
    const { length: t } = (e = e ? e.filter(Boolean) : []);
    if (r || t) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof de ? c : new gn(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        r &&
        setTimeout(() => {
          (s = null), a(new de(`timeout ${r} of ms exceeded`, de.ETIMEDOUT));
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
      return (l.unsubscribe = () => M.asap(f)), l;
    }
  },
  Dh = function* (e, r) {
    let t = e.byteLength;
    if (t < r) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < t; ) (i = n + r), yield e.slice(n, i), (n = i);
  },
  Ih = async function* (e, r) {
    for await (const t of Ph(e)) yield* Dh(t, r);
  },
  Ph = async function* (e) {
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
  vs = (e, r, t, n) => {
    const i = Ih(e, r);
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
            if (t) {
              let h = (a += u);
              t(h);
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
  va =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  so = va && typeof ReadableStream == 'function',
  Lh =
    va &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (r) =>
            e.encode(r)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  fo = (e, ...r) => {
    try {
      return !!e(...r);
    } catch {
      return !1;
    }
  },
  Bh =
    so &&
    fo(() => {
      let e = !1;
      const r = new Request(st.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !r;
    }),
  ms = 64 * 1024,
  a0 = so && fo(() => M.isReadableStream(new Response('').body)),
  ji = { stream: a0 && ((e) => e.body) };
va &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !ji[r] &&
        (ji[r] = M.isFunction(e[r])
          ? (t) => t[r]()
          : (t, n) => {
              throw new de(
                `Response type '${r}' is not supported`,
                de.ERR_NOT_SUPPORT,
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
        await new Request(st.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (M.isArrayBufferView(e) || M.isArrayBuffer(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ''), M.isString(e)))
      return (await Lh(e)).byteLength;
  },
  bh = async (e, r) => {
    const t = M.toFiniteNumber(e.getContentLength());
    return t ?? Mh(r);
  },
  Uh =
    va &&
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
        withCredentials: u = 'same-origin',
        fetchOptions: h,
      } = ao(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let d = kh([i, a && a.toAbortSignal()], s),
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
          t !== 'get' &&
          t !== 'head' &&
          (m = await bh(c, n)) !== 0
        ) {
          let W = new Request(r, { method: 'POST', body: n, duplex: 'half' }),
            Y;
          if (
            (M.isFormData(n) &&
              (Y = W.headers.get('content-type')) &&
              c.setContentType(Y),
            W.body)
          ) {
            const [R, U] = xs(m, Gi(ds(l)));
            n = vs(W.body, ms, R, U);
          }
        }
        M.isString(u) || (u = u ? 'include' : 'omit');
        const S = 'credentials' in Request.prototype;
        p = new Request(r, {
          ...h,
          signal: d,
          method: t.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: S ? u : void 0,
        });
        let F = await fetch(p);
        const y = a0 && (o === 'stream' || o === 'response');
        if (a0 && (f || (y && x))) {
          const W = {};
          ['status', 'statusText', 'headers'].forEach((P) => {
            W[P] = F[P];
          });
          const Y = M.toFiniteNumber(F.headers.get('content-length')),
            [R, U] = (f && xs(Y, Gi(ds(f), !0))) || [];
          F = new Response(
            vs(F.body, ms, R, () => {
              U && U(), x && x();
            }),
            W,
          );
        }
        o = o || 'text';
        let N = await ji[M.findKey(ji, o) || 'text'](F, e);
        return (
          !y && x && x(),
          await new Promise((W, Y) => {
            no(W, Y, {
              data: N,
              headers: Tt.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (S) {
        throw (
          (x && x(),
          S && S.name === 'TypeError' && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new de('Network Error', de.ERR_NETWORK, e, p), {
                cause: S.cause || S,
              })
            : de.from(S, S && S.code, e, p))
        );
      }
    }),
  s0 = { http: eh, xhr: Nh, fetch: Uh };
M.forEach(s0, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: r });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: r });
  }
});
const _s = (e) => `- ${e}`,
  Hh = (e) => M.isFunction(e) || e === null || e === !1,
  oo = {
    getAdapter: (e) => {
      e = M.isArray(e) ? e : [e];
      const { length: r } = e;
      let t, n;
      const i = {};
      for (let a = 0; a < r; a++) {
        t = e[a];
        let s;
        if (
          ((n = t),
          !Hh(t) && ((n = s0[(s = String(t)).toLowerCase()]), n === void 0))
        )
          throw new de(`Unknown adapter '${s}'`);
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
              a.map(_s).join(`
`)
            : ' ' + _s(a[0])
          : 'as no adapter specified';
        throw new de(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: s0,
  };
function Wa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new gn(null, e);
}
function gs(e) {
  return (
    Wa(e),
    (e.headers = Tt.from(e.headers)),
    (e.data = Ha.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    oo
      .getAdapter(e.adapter || fi.adapter)(e)
      .then(
        function (n) {
          return (
            Wa(e),
            (n.data = Ha.call(e, e.transformResponse, n)),
            (n.headers = Tt.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            ro(n) ||
              (Wa(e),
              n &&
                n.response &&
                ((n.response.data = Ha.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = Tt.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const lo = '1.9.0',
  ma = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, r) => {
    ma[e] = function (n) {
      return typeof n === e || 'a' + (r < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Es = {};
ma.transitional = function (r, t, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      lo +
      "] Transitional option '" +
      a +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (a, s, f) => {
    if (r === !1)
      throw new de(
        i(s, ' has been removed' + (t ? ' in ' + t : '')),
        de.ERR_DEPRECATED,
      );
    return (
      t &&
        !Es[s] &&
        ((Es[s] = !0),
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
ma.spelling = function (r) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function Wh(e, r, t) {
  if (typeof e != 'object')
    throw new de('options must be an object', de.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = r[a];
    if (s) {
      const f = e[a],
        l = f === void 0 || s(f, a, e);
      if (l !== !0)
        throw new de('option ' + a + ' must be ' + l, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new de('Unknown option ' + a, de.ERR_BAD_OPTION);
  }
}
const Di = { assertOptions: Wh, validators: ma },
  Zt = Di.validators;
let Ur = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new us(), response: new us() });
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
      (t = Wr(this.defaults, t));
    const { transitional: n, paramsSerializer: i, headers: a } = t;
    n !== void 0 &&
      Di.assertOptions(
        n,
        {
          silentJSONParsing: Zt.transitional(Zt.boolean),
          forcedJSONParsing: Zt.transitional(Zt.boolean),
          clarifyTimeoutError: Zt.transitional(Zt.boolean),
        },
        !1,
      ),
      i != null &&
        (M.isFunction(i)
          ? (t.paramsSerializer = { serialize: i })
          : Di.assertOptions(
              i,
              { encode: Zt.function, serialize: Zt.function },
              !0,
            )),
      t.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (t.allowAbsoluteUrls = !0)),
      Di.assertOptions(
        t,
        {
          baseUrl: Zt.spelling('baseURL'),
          withXsrfToken: Zt.spelling('withXSRFToken'),
        },
        !0,
      ),
      (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
    let s = a && M.merge(a.common, a[t.method]);
    a &&
      M.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (p) => {
          delete a[p];
        },
      ),
      (t.headers = Tt.concat(s, a));
    const f = [];
    let l = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(t) === !1) ||
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
      const p = [gs.bind(this), void 0];
      for (
        p.unshift.apply(p, f),
          p.push.apply(p, o),
          h = p.length,
          c = Promise.resolve(t);
        u < h;

      )
        c = c.then(p[u++], p[u++]);
      return c;
    }
    h = f.length;
    let d = t;
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
      c = gs.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (u = 0, h = o.length; u < h; ) c = c.then(o[u++], o[u++]);
    return c;
  }
  getUri(r) {
    r = Wr(this.defaults, r);
    const t = io(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Qf(t, r.params, r.paramsSerializer);
  }
};
M.forEach(['delete', 'get', 'head', 'options'], function (r) {
  Ur.prototype[r] = function (t, n) {
    return this.request(
      Wr(n || {}, { method: r, url: t, data: (n || {}).data }),
    );
  };
});
M.forEach(['post', 'put', 'patch'], function (r) {
  function t(n) {
    return function (a, s, f) {
      return this.request(
        Wr(f || {}, {
          method: r,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (Ur.prototype[r] = t()), (Ur.prototype[r + 'Form'] = t(!0));
});
let Vh = class co {
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
        n.reason || ((n.reason = new gn(a, s, f)), t(n.reason));
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
      token: new co(function (i) {
        r = i;
      }),
      cancel: r,
    };
  }
};
function Gh(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function jh(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const f0 = {
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
Object.entries(f0).forEach(([e, r]) => {
  f0[r] = e;
});
function uo(e) {
  const r = new Ur(e),
    t = Wf(Ur.prototype.request, r);
  return (
    M.extend(t, Ur.prototype, r, { allOwnKeys: !0 }),
    M.extend(t, r, null, { allOwnKeys: !0 }),
    (t.create = function (i) {
      return uo(Wr(e, i));
    }),
    t
  );
}
const Ne = uo(fi);
Ne.Axios = Ur;
Ne.CanceledError = gn;
Ne.CancelToken = Vh;
Ne.isCancel = ro;
Ne.VERSION = lo;
Ne.toFormData = pa;
Ne.AxiosError = de;
Ne.Cancel = Ne.CanceledError;
Ne.all = function (r) {
  return Promise.all(r);
};
Ne.spread = Gh;
Ne.isAxiosError = jh;
Ne.mergeConfig = Wr;
Ne.AxiosHeaders = Tt;
Ne.formToJSON = (e) => to(M.isHTMLForm(e) ? new FormData(e) : e);
Ne.getAdapter = oo.getAdapter;
Ne.HttpStatusCode = f0;
Ne.default = Ne;
const {
  Axios: Z_,
  AxiosError: Q_,
  CanceledError: eg,
  isCancel: tg,
  CancelToken: rg,
  VERSION: ng,
  all: ig,
  Cancel: ag,
  isAxiosError: sg,
  spread: fg,
  toFormData: og,
  AxiosHeaders: lg,
  HttpStatusCode: cg,
  formToJSON: ug,
  getAdapter: hg,
  mergeConfig: xg,
} = Ne;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Xi = {};
Xi.version = '0.18.5';
var ho = 1252,
  Xh = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  xo = function (e) {
    Xh.indexOf(e) != -1 && (ho = e);
  };
function $h() {
  xo(1252);
}
var qn = function (e) {
  xo(e);
};
function zh() {
  qn(1200), $h();
}
var Ei = function (r) {
    return String.fromCharCode(r);
  },
  Ts = function (r) {
    return String.fromCharCode(r);
  },
  ws,
  _r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function Jn(e) {
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
      (r += _r.charAt(a) + _r.charAt(s) + _r.charAt(f) + _r.charAt(l));
  return r;
}
function ur(e) {
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
    (a = _r.indexOf(e.charAt(o++))),
      (s = _r.indexOf(e.charAt(o++))),
      (t = (a << 2) | (s >> 4)),
      (r += String.fromCharCode(t)),
      (f = _r.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (r += String.fromCharCode(n)),
      (l = _r.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (r += String.fromCharCode(i));
  return r;
}
var _e = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  dr = (function () {
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
function Vr(e) {
  return _e
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function Ss(e) {
  return _e
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var jt = function (r) {
  return _e
    ? dr(r, 'binary')
    : r.split('').map(function (t) {
        return t.charCodeAt(0) & 255;
      });
};
function _a(e) {
  if (typeof ArrayBuffer > 'u') return jt(e);
  for (
    var r = new ArrayBuffer(e.length), t = new Uint8Array(r), n = 0;
    n != e.length;
    ++n
  )
    t[n] = e.charCodeAt(n) & 255;
  return r;
}
function oi(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join('');
}
function Kh(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(e);
}
var et = _e
  ? function (e) {
      return Buffer.concat(
        e.map(function (r) {
          return Buffer.isBuffer(r) ? r : dr(r);
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
function Yh(e) {
  for (
    var r = [], t = 0, n = e.length + 250, i = Vr(e.length + 255), a = 0;
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
    t > n && (r.push(i.slice(0, t)), (t = 0), (i = Vr(65535)), (n = 65530));
  }
  return r.push(i.slice(0, t)), et(r);
}
var Hn = /\u0000/g,
  Ti = /[\u0001-\u0006]/g;
function cn(e) {
  for (var r = '', t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function Xt(e, r) {
  var t = '' + e;
  return t.length >= r ? t : be('0', r - t.length) + t;
}
function O0(e, r) {
  var t = '' + e;
  return t.length >= r ? t : be(' ', r - t.length) + t;
}
function $i(e, r) {
  var t = '' + e;
  return t.length >= r ? t : t + be(' ', r - t.length);
}
function qh(e, r) {
  var t = '' + Math.round(e);
  return t.length >= r ? t : be('0', r - t.length) + t;
}
function Jh(e, r) {
  var t = '' + e;
  return t.length >= r ? t : be('0', r - t.length) + t;
}
var As = Math.pow(2, 32);
function nn(e, r) {
  if (e > As || e < -As) return qh(e, r);
  var t = Math.round(e);
  return Jh(t, r);
}
function zi(e, r) {
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
var ys = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Va = [
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
var Ue = {
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
  Fs = {
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
function Ki(e, r, t) {
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
    o < r &&
    ((u = Math.floor(i)), (f = u * s + a), (c = u * o + l), !(i - u < 5e-8));

  )
    (i = 1 / (i - u)), (a = s), (s = f), (l = o), (o = c);
  if ((c > r && (o > r ? ((c = l), (f = a)) : ((c = o), (f = s))), !t))
    return [0, n * f, c];
  var h = Math.floor((n * f) / c);
  return [h, n * f - h * c, c];
}
function wi(e, r, t) {
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
      t && (a = s1(l, s));
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
var po = new Date(1899, 11, 31, 0, 0, 0),
  e1 = po.getTime(),
  t1 = new Date(1900, 2, 1, 0, 0, 0);
function vo(e, r) {
  var t = e.getTime();
  return (
    r ? (t -= 1461 * 24 * 60 * 60 * 1e3) : e >= t1 && (t += 24 * 60 * 60 * 1e3),
    (t - (e1 + (e.getTimezoneOffset() - po.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function R0(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function r1(e) {
  return e.indexOf('E') == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function n1(e) {
  var r = e < 0 ? 12 : 11,
    t = R0(e.toFixed(12));
  return t.length <= r || ((t = e.toPrecision(10)), t.length <= r)
    ? t
    : e.toExponential(5);
}
function i1(e) {
  var r = R0(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === '0' || r === '-0'
    ? e.toPrecision(6)
    : r;
}
function a1(e) {
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    t;
  return (
    r >= -4 && r <= -1
      ? (t = e.toPrecision(10 + r))
      : Math.abs(r) <= 9
        ? (t = n1(e))
        : r === 10
          ? (t = e.toFixed(10).substr(0, 12))
          : (t = i1(e)),
    R0(r1(t.toUpperCase()))
  );
}
function o0(e, r) {
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
      if (e instanceof Date) return Sr(14, vo(e, r && r.date1904), r);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function s1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function f1(e, r, t, n) {
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
          return Va[t.m - 1][1];
        case 5:
          return Va[t.m - 1][0];
        default:
          return Va[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (l = t.d), (o = r.length);
          break;
        case 3:
          return ys[t.q][0];
        default:
          return ys[t.q][1];
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
        ? Xt(t.S, r.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (t.S + t.u))),
          a >= 60 * s && (a = 0),
          r === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = Xt(a, 2 + n)),
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
  var c = o > 0 ? Xt(l, o) : '';
  return c;
}
function gr(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, n = e.substr(0, t); t != e.length; t += r)
    n += (n.length > 0 ? ',' : '') + e.substr(t, r);
  return n;
}
var mo = /%/g;
function o1(e, r, t) {
  var n = r.replace(mo, ''),
    i = r.length - n.length;
  return or(e, n, t * Math.pow(10, 2 * i)) + be('%', i);
}
function l1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return or(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
}
function _o(e, r) {
  var t,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + _o(e, -r);
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
var go = /# (\?+)( ?)\/( ?)(\d+)/;
function c1(e, r, t) {
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
      ? be(' ', e[1].length + 1 + e[4].length)
      : O0(s, e[1].length) + e[2] + '/' + e[3] + Xt(f, e[4].length))
  );
}
function u1(e, r, t) {
  return t + (r === 0 ? '' : '' + r) + be(' ', e[1].length + 2 + e[4].length);
}
var Eo = /^#*0*\.([0#]+)/,
  To = /\).*[0#]/,
  wo = /\(###\) ###\\?-####/;
function xt(e) {
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
function Cs(e, r) {
  var t = Math.pow(10, r);
  return '' + Math.round(e * t) / t;
}
function Os(e, r) {
  var t = e - Math.floor(e),
    n = Math.pow(10, r);
  return r < ('' + Math.round(t * n)).length ? 0 : Math.round(t * n);
}
function h1(e, r) {
  return r < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length
    ? 1
    : 0;
}
function x1(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e);
}
function Bt(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(To)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? Bt('n', n, t) : '(' + Bt('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return l1(e, r, t);
  if (r.indexOf('%') !== -1) return o1(e, r, t);
  if (r.indexOf('E') !== -1) return _o(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + Bt(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + nn(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = nn(t, 0)),
      i === '0' && (i = ''),
      i.length > r.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(go))) return c1(a, l, o);
  if (r.match(/^#+0+$/)) return o + nn(l, r.length - r.indexOf('0'));
  if ((a = r.match(Eo)))
    return (
      (i = Cs(t, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + xt(a[1]))
        .replace(/\.$/, '.' + xt(a[1]))
        .replace(/\.(\d*)$/, function (p, x) {
          return '.' + x + be('0', xt(a[1]).length - x.length);
        })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      o +
      Cs(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + gr(nn(l, 0));
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0
      ? '-' + Bt(e, r, -t)
      : gr('' + (Math.floor(t) + h1(t, a[1].length))) +
          '.' +
          Xt(Os(t, a[1].length), a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return Bt(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = cn(Bt(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      cn(
        cn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(wo))
    return (
      (i = Bt(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Ki(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = or('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = $i(f[2], s)),
      c.length < a[4].length &&
        (c = xt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Ki(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? O0(f[1], s) + a[2] + '/' + a[3] + $i(f[2], s)
          : be(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = nn(t, 0)),
      r.length <= i.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var u = r.indexOf('.') - s,
      h = r.length - i.length - u;
    return xt(r.substr(0, u) + i + r.substr(r.length - h));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = Os(t, a[1].length)),
      t < 0
        ? '-' + Bt(e, r, -t)
        : gr(x1(t))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (p) {
              return '00,' + (p.length < 3 ? Xt(0, 3 - p.length) : '') + p;
            }) +
          '.' +
          Xt(s, a[1].length)
    );
  switch (r) {
    case '###,##0.00':
      return Bt(e, '#,##0.00', t);
    case '###,###':
    case '##,###':
    case '#,###':
      var d = gr(nn(l, 0));
      return d !== '0' ? o + d : '';
    case '###,###.00':
      return Bt(e, '###,##0.00', t).replace(/^0\./, '.');
    case '#,###.00':
      return Bt(e, '#,##0.00', t).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + r + '|');
}
function d1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return or(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
}
function p1(e, r, t) {
  var n = r.replace(mo, ''),
    i = r.length - n.length;
  return or(e, n, t * Math.pow(10, 2 * i)) + be('%', i);
}
function So(e, r) {
  var t,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return '0.0E+0';
    if (r < 0) return '-' + So(e, -r);
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
function Qt(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(To)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? Qt('n', n, t) : '(' + Qt('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return d1(e, r, t);
  if (r.indexOf('%') !== -1) return p1(e, r, t);
  if (r.indexOf('E') !== -1) return So(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + Qt(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + Xt(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = '' + t),
      t === 0 && (i = ''),
      i.length > r.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(go))) return u1(a, l, o);
  if (r.match(/^#+0+$/)) return o + Xt(l, r.length - r.indexOf('0'));
  if ((a = r.match(Eo)))
    return (
      (i = ('' + t)
        .replace(/^([^\.]+)$/, '$1.' + xt(a[1]))
        .replace(/\.$/, '.' + xt(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (p, x) {
        return '.' + x + be('0', xt(a[1]).length - x.length);
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
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + gr('' + l);
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0 ? '-' + Qt(e, r, -t) : gr('' + t) + '.' + be('0', a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return Qt(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = cn(Qt(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      cn(
        cn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(wo))
    return (
      (i = Qt(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Ki(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = or('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = $i(f[2], s)),
      c.length < a[4].length &&
        (c = xt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Ki(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? O0(f[1], s) + a[2] + '/' + a[3] + $i(f[2], s)
          : be(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = '' + t),
      r.length <= i.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var u = r.indexOf('.') - s,
      h = r.length - i.length - u;
    return xt(r.substr(0, u) + i + r.substr(r.length - h));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return t < 0
      ? '-' + Qt(e, r, -t)
      : gr('' + t)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (p) {
            return '00,' + (p.length < 3 ? Xt(0, 3 - p.length) : '') + p;
          }) +
          '.' +
          Xt(0, a[1].length);
  switch (r) {
    case '###,###':
    case '##,###':
    case '#,###':
      var d = gr('' + l);
      return d !== '0' ? o + d : '';
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          Qt(e, r.slice(0, r.lastIndexOf('.')), t) +
          xt(r.slice(r.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + r + '|');
}
function or(e, r, t) {
  return (t | 0) === t ? Qt(e, r, t) : Bt(e, r, t);
}
function v1(e) {
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
var Ao = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function yo(e) {
  for (var r = 0, t = '', n = ''; r < e.length; )
    switch ((t = e.charAt(r))) {
      case 'G':
        zi(e, r) && (r += 6), r++;
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
        if (n.match(Ao)) return !0;
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
function m1(e, r, t, n) {
  for (
    var i = [], a = '', s = 0, f = '', l = 't', o, c, u, h = 'H';
    s < e.length;

  )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!zi(e, s))
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
        (i[i.length] = { t: 'T', v: r }), ++s;
        break;
      case 'B':
      case 'b':
        if (e.charAt(s + 1) === '1' || e.charAt(s + 1) === '2') {
          if (o == null && ((o = wi(r, t, e.charAt(s + 1) === '2')), o == null))
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
        if (r < 0 || (o == null && ((o = wi(r, t)), o == null))) return '';
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
          (o == null && (o = wi(r, t)),
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
        if (a.match(Ao)) {
          if (o == null && ((o = wi(r, t)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            yo(e) || (i[i.length] = { t: 't', v: a }));
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
    F;
  for (s = i.length - 1, l = 't'; s >= 0; --s)
    switch (i[s].t) {
      case 'h':
      case 'H':
        (i[s].t = h), (l = 'h'), m < 1 && (m = 1);
        break;
      case 's':
        (F = i[s].v.match(/\.0+$/)) && (S = Math.max(S, F[0].length - 1)),
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
  var y = '',
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
        (i[s].v = f1(i[s].t.charCodeAt(0), i[s].v, o, S)), (i[s].t = 't');
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
        (y += i[s].v), (s = N - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = o0(r, t));
        break;
    }
  var W = '',
    Y,
    R;
  if (y.length > 0) {
    y.charCodeAt(0) == 40
      ? ((Y = r < 0 && y.charCodeAt(0) === 45 ? -r : r), (R = or('n', y, Y)))
      : ((Y = r < 0 && n > 1 ? -r : r),
        (R = or('n', y, Y)),
        Y < 0 &&
          i[0] &&
          i[0].t == 't' &&
          ((R = R.substr(1)), (i[0].v = '-' + i[0].v))),
      (N = R.length - 1);
    var U = i.length;
    for (s = 0; s < i.length; ++s)
      if (i[s] != null && i[s].t != 't' && i[s].v.indexOf('.') > -1) {
        U = s;
        break;
      }
    var P = i.length;
    if (U === i.length && R.indexOf('E') === -1) {
      for (s = i.length - 1; s >= 0; --s)
        i[s] == null ||
          'n?'.indexOf(i[s].t) === -1 ||
          (N >= i[s].v.length - 1
            ? ((N -= i[s].v.length), (i[s].v = R.substr(N + 1, i[s].v.length)))
            : N < 0
              ? (i[s].v = '')
              : ((i[s].v = R.substr(0, N + 1)), (N = -1)),
          (i[s].t = 't'),
          (P = s));
      N >= 0 && P < i.length && (i[P].v = R.substr(0, N + 1) + i[P].v);
    } else if (U !== i.length && R.indexOf('E') === -1) {
      for (N = R.indexOf('.') - 1, s = U; s >= 0; --s)
        if (!(i[s] == null || 'n?'.indexOf(i[s].t) === -1)) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === U
                ? i[s].v.indexOf('.') - 1
                : i[s].v.length - 1,
              W = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            N >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (W = R.charAt(N--) + W);
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
      for (
        N >= 0 && P < i.length && (i[P].v = R.substr(0, N + 1) + i[P].v),
          N = R.indexOf('.') + 1,
          s = U;
        s < i.length;
        ++s
      )
        if (!(i[s] == null || ('n?('.indexOf(i[s].t) === -1 && s !== U))) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === U ? i[s].v.indexOf('.') + 1 : 0,
              W = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            N < R.length && (W += R.charAt(N++));
          (i[s].v = W), (i[s].t = 't'), (P = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((Y = n > 1 && r < 0 && s > 0 && i[s - 1].v === '-' ? -r : r),
      (i[s].v = or(i[s].t, i[s].v, Y)),
      (i[s].t = 't'));
  var V = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (V += i[s].v);
  return V;
}
var Rs = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Ns(e, r) {
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
function _1(e, r) {
  var t = v1(e),
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
    var s = t[0].match(Rs),
      f = t[1].match(Rs);
    return Ns(r, s)
      ? [n, t[0]]
      : Ns(r, f)
        ? [n, t[1]]
        : [n, t[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function Sr(e, r, t) {
  t == null && (t = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && t.dateNF ? (n = t.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && t.dateNF
        ? (n = t.dateNF)
        : (n = (t.table != null ? t.table : Ue)[e]),
        n == null && (n = (t.table && t.table[Fs[e]]) || Ue[Fs[e]]),
        n == null && (n = Qh[e] || 'General');
      break;
  }
  if (zi(n, 0)) return o0(r, t);
  r instanceof Date && (r = vo(r, t.date1904));
  var i = _1(n, r);
  if (zi(i[1])) return o0(r, t);
  if (r === !0) r = 'TRUE';
  else if (r === !1) r = 'FALSE';
  else if (r === '' || r == null) return '';
  return m1(i[1], r, t, i[0]);
}
function Fo(e, r) {
  if (typeof r != 'number') {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (Ue[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (Ue[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (Ue[r] = e), r;
}
function ga(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && Fo(e[r], r);
}
function Ea() {
  Ue = Zh();
}
var Co = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function g1(e) {
  var r = typeof e == 'number' ? Ue[e] : e;
  return (r = r.replace(Co, '(\\d+)')), new RegExp('^' + r + '$');
}
function E1(e, r, t) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (r.match(Co) || []).forEach(function (u, h) {
    var d = parseInt(t[h + 1], 10);
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
    function r() {
      for (var R = 0, U = new Array(256), P = 0; P != 256; ++P)
        (R = P),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (R = R & 1 ? -306674912 ^ (R >>> 1) : R >>> 1),
          (U[P] = R);
      return typeof Int32Array < 'u' ? new Int32Array(U) : U;
    }
    var t = r();
    function n(R) {
      var U = 0,
        P = 0,
        V = 0,
        X = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (V = 0; V != 256; ++V) X[V] = R[V];
      for (V = 0; V != 256; ++V)
        for (P = R[V], U = 256 + V; U < 4096; U += 256)
          P = X[U] = (P >>> 8) ^ R[P & 255];
      var z = [];
      for (V = 1; V != 16; ++V)
        z[V - 1] =
          typeof Int32Array < 'u'
            ? X.subarray(V * 256, V * 256 + 256)
            : X.slice(V * 256, V * 256 + 256);
      return z;
    }
    var i = n(t),
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
      F = i[13],
      y = i[14];
    function N(R, U) {
      for (var P = U ^ -1, V = 0, X = R.length; V < X; )
        P = (P >>> 8) ^ t[(P ^ R.charCodeAt(V++)) & 255];
      return ~P;
    }
    function W(R, U) {
      for (var P = U ^ -1, V = R.length - 15, X = 0; X < V; )
        P =
          y[R[X++] ^ (P & 255)] ^
          F[R[X++] ^ ((P >> 8) & 255)] ^
          S[R[X++] ^ ((P >> 16) & 255)] ^
          m[R[X++] ^ (P >>> 24)] ^
          x[R[X++]] ^
          p[R[X++]] ^
          d[R[X++]] ^
          h[R[X++]] ^
          u[R[X++]] ^
          c[R[X++]] ^
          o[R[X++]] ^
          l[R[X++]] ^
          f[R[X++]] ^
          s[R[X++]] ^
          a[R[X++]] ^
          t[R[X++]];
      for (V += 15; X < V; ) P = (P >>> 8) ^ t[(P ^ R[X++]) & 255];
      return ~P;
    }
    function Y(R, U) {
      for (var P = U ^ -1, V = 0, X = R.length, z = 0, te = 0; V < X; )
        (z = R.charCodeAt(V++)),
          z < 128
            ? (P = (P >>> 8) ^ t[(P ^ z) & 255])
            : z < 2048
              ? ((P = (P >>> 8) ^ t[(P ^ (192 | ((z >> 6) & 31))) & 255]),
                (P = (P >>> 8) ^ t[(P ^ (128 | (z & 63))) & 255]))
              : z >= 55296 && z < 57344
                ? ((z = (z & 1023) + 64),
                  (te = R.charCodeAt(V++) & 1023),
                  (P = (P >>> 8) ^ t[(P ^ (240 | ((z >> 8) & 7))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | ((z >> 2) & 63))) & 255]),
                  (P =
                    (P >>> 8) ^
                    t[(P ^ (128 | ((te >> 6) & 15) | ((z & 3) << 4))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | (te & 63))) & 255]))
                : ((P = (P >>> 8) ^ t[(P ^ (224 | ((z >> 12) & 15))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | ((z >> 6) & 63))) & 255]),
                  (P = (P >>> 8) ^ t[(P ^ (128 | (z & 63))) & 255]));
      return ~P;
    }
    return (e.table = t), (e.bstr = N), (e.buf = W), (e.str = Y), e;
  })(),
  Fe = (function () {
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
      var H = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(H), g.setSeconds(D << 1), g
      );
    }
    function f(v) {
      kt(v, 0);
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
      if (v[0] == 80 && v[1] == 75) return gi(v, E);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return Or(v, E);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        D = 0,
        H = 0,
        k = 0,
        I = [],
        L = v.slice(0, 512);
      kt(L, 0);
      var K = u(L);
      switch (((_ = K[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (K[1] == 0) return gi(v, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = v.slice(0, g)), kt(L, 28));
      var Q = v.slice(0, g);
      h(L, _);
      var ae = L.read_shift(4, 'i');
      if (_ === 3 && ae !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + ae);
      (L.l += 4),
        (D = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (H = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (k = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var q = -1, re = 0;
        re < 109 && ((q = L.read_shift(4, 'i')), !(q < 0));
        ++re
      )
        I[re] = q;
      var he = d(v, g);
      m(k, w, he, g, I);
      var Ie = F(he, D, I, g);
      (Ie[D].name = '!Directory'),
        T > 0 && H !== te && (Ie[H].name = '!MiniFAT'),
        (Ie[I[0]].name = '!FAT'),
        (Ie.fat_addrs = I),
        (Ie.ssz = g);
      var Pe = {},
        at = [],
        Nn = [],
        kn = [];
      y(D, Ie, he, at, T, Pe, Nn, H), p(Nn, kn, at), at.shift();
      var Dn = { FileIndex: Nn, FullPaths: kn };
      return E && E.raw && (Dn.raw = { header: Q, sectors: he }), Dn;
    }
    function u(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(ge, 'Header Signature: '), (v.l += 16);
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
        var g = 0, T = 0, w = 0, D = 0, H = 0, k = _.length, I = [], L = [];
        g < k;
        ++g
      )
        (I[g] = L[g] = g), (E[g] = _[g]);
      for (; H < L.length; ++H)
        (g = L[H]),
          (T = v[g].L),
          (w = v[g].R),
          (D = v[g].C),
          I[g] === g &&
            (T !== -1 && I[T] !== T && (I[g] = I[T]),
            w !== -1 && I[w] !== w && (I[g] = I[w])),
          D !== -1 && (I[D] = g),
          T !== -1 &&
            g != I[g] &&
            ((I[T] = I[g]), L.lastIndexOf(T) < H && L.push(T)),
          w !== -1 &&
            g != I[g] &&
            ((I[w] = I[g]), L.lastIndexOf(w) < H && L.push(w));
      for (g = 1; g < k; ++g)
        I[g] === g &&
          (w !== -1 && I[w] !== w
            ? (I[g] = I[w])
            : T !== -1 && I[T] !== T && (I[g] = I[T]));
      for (g = 1; g < k; ++g)
        if (v[g].type !== 0) {
          if (((H = g), H != I[H]))
            do (H = I[H]), (E[g] = E[H] + '/' + E[g]);
            while (H !== 0 && I[H] !== -1 && H != I[H]);
          I[g] = -1;
        }
      for (E[0] += '/', g = 1; g < k; ++g) v[g].type !== 2 && (E[g] += '/');
    }
    function x(v, E, _) {
      for (var g = v.start, T = v.size, w = [], D = g; _ && T > 0 && D >= 0; )
        w.push(E.slice(D * z, D * z + z)), (T -= z), (D = Br(_, D * 4));
      return w.length === 0 ? b(0) : et(w).slice(0, v.size);
    }
    function m(v, E, _, g, T) {
      var w = te;
      if (v === te) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var D = _[v],
          H = (g >>> 2) - 1;
        if (!D) return;
        for (var k = 0; k < H && (w = Br(D, k * 4)) !== te; ++k) T.push(w);
        m(Br(D, g - 4), E - 1, _, g, T);
      }
    }
    function S(v, E, _, g, T) {
      var w = [],
        D = [];
      T || (T = []);
      var H = g - 1,
        k = 0,
        I = 0;
      for (k = E; k >= 0; ) {
        (T[k] = !0), (w[w.length] = k), D.push(v[k]);
        var L = _[Math.floor((k * 4) / g)];
        if (((I = (k * 4) & H), g < 4 + I))
          throw new Error('FAT boundary crossed: ' + k + ' 4 ' + g);
        if (!v[L]) break;
        k = Br(v[L], I);
      }
      return { nodes: w, data: bs([D]) };
    }
    function F(v, E, _, g) {
      var T = v.length,
        w = [],
        D = [],
        H = [],
        k = [],
        I = g - 1,
        L = 0,
        K = 0,
        Q = 0,
        ae = 0;
      for (L = 0; L < T; ++L)
        if (((H = []), (Q = L + E), Q >= T && (Q -= T), !D[Q])) {
          k = [];
          var q = [];
          for (K = Q; K >= 0; ) {
            (q[K] = !0), (D[K] = !0), (H[H.length] = K), k.push(v[K]);
            var re = _[Math.floor((K * 4) / g)];
            if (((ae = (K * 4) & I), g < 4 + ae))
              throw new Error('FAT boundary crossed: ' + K + ' 4 ' + g);
            if (!v[re] || ((K = Br(v[re], ae)), q[K])) break;
          }
          w[Q] = { nodes: H, data: bs([k]) };
        }
      return w;
    }
    function y(v, E, _, g, T, w, D, H) {
      for (
        var k = 0, I = g.length ? 2 : 0, L = E[v].data, K = 0, Q = 0, ae;
        K < L.length;
        K += 128
      ) {
        var q = L.slice(K, K + 128);
        kt(q, 64), (Q = q.read_shift(2)), (ae = P0(q, 0, Q - I)), g.push(ae);
        var re = {
            name: ae,
            type: q.read_shift(1),
            color: q.read_shift(1),
            L: q.read_shift(4, 'i'),
            R: q.read_shift(4, 'i'),
            C: q.read_shift(4, 'i'),
            clsid: q.read_shift(16),
            state: q.read_shift(4, 'i'),
            start: 0,
            size: 0,
          },
          he =
            q.read_shift(2) +
            q.read_shift(2) +
            q.read_shift(2) +
            q.read_shift(2);
        he !== 0 && (re.ct = N(q, q.l - 8));
        var Ie =
          q.read_shift(2) + q.read_shift(2) + q.read_shift(2) + q.read_shift(2);
        Ie !== 0 && (re.mt = N(q, q.l - 8)),
          (re.start = q.read_shift(4, 'i')),
          (re.size = q.read_shift(4, 'i')),
          re.size < 0 &&
            re.start < 0 &&
            ((re.size = re.type = 0), (re.start = te), (re.name = '')),
          re.type === 5
            ? ((k = re.start), T > 0 && k !== te && (E[k].name = '!StreamData'))
            : re.size >= 4096
              ? ((re.storage = 'fat'),
                E[re.start] === void 0 &&
                  (E[re.start] = S(_, re.start, E.fat_addrs, E.ssz)),
                (E[re.start].name = re.name),
                (re.content = E[re.start].data.slice(0, re.size)))
              : ((re.storage = 'minifat'),
                re.size < 0
                  ? (re.size = 0)
                  : k !== te &&
                    re.start !== te &&
                    E[k] &&
                    (re.content = x(re, E[k].data, (E[H] || {}).data))),
          re.content && kt(re.content, 0),
          (w[ae] = re),
          D.push(re);
      }
    }
    function N(v, E) {
      return new Date(
        ((It(v, E + 4) / 1e7) * Math.pow(2, 32) +
          It(v, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function W(v, E) {
      return o(), c(l.readFileSync(v), E);
    }
    function Y(v, E) {
      var _ = E && E.type;
      switch (
        (_ || (_e && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return W(v, E);
        case 'base64':
          return c(jt(ur(v)), E);
        case 'binary':
          return c(jt(v), E);
      }
      return c(v, E);
    }
    function R(v, E) {
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
        U(v);
    }
    function U(v) {
      var E = 'Sh33tJ5';
      if (!Fe.find(v, '/' + E)) {
        var _ = b(4);
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
      R(v);
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
          H = 0,
          k = Object.create ? Object.create(null) : {},
          I = [];
        for (T = 0; T < v.FullPaths.length; ++T)
          (k[v.FullPaths[T]] = !0),
            v.FileIndex[T].type !== 0 &&
              I.push([v.FullPaths[T], v.FileIndex[T]]);
        for (T = 0; T < I.length; ++T) {
          var L = n(I[T][0]);
          (g = k[L]),
            g ||
              (I.push([
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
              (k[L] = !0));
        }
        for (
          I.sort(function (ae, q) {
            return t(ae[0], q[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            T = 0;
          T < I.length;
          ++T
        )
          (v.FullPaths[T] = I[T][0]), (v.FileIndex[T] = I[T][1]);
        for (T = 0; T < I.length; ++T) {
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
            (K.C = I.length > 1 ? 1 : -1), (K.size = 0), (K.type = 5);
          else if (Q.slice(-1) == '/') {
            for (H = T + 1; H < I.length && n(v.FullPaths[H]) != Q; ++H);
            for (
              K.C = H >= I.length ? -1 : H, H = T + 1;
              H < I.length && n(v.FullPaths[H]) != n(Q);
              ++H
            );
            (K.R = H >= I.length ? -1 : H), (K.type = 1);
          } else
            n(v.FullPaths[T + 1] || '') == n(Q) && (K.R = T + 1), (K.type = 2);
        }
      }
    }
    function V(v, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return Rr(v, _);
      switch ((P(v), _.fileType)) {
        case 'zip':
          return Ra(v, _);
      }
      var g = (function (ae) {
          for (var q = 0, re = 0, he = 0; he < ae.FileIndex.length; ++he) {
            var Ie = ae.FileIndex[he];
            if (Ie.content) {
              var Pe = Ie.content.length;
              Pe > 0 &&
                (Pe < 4096 ? (q += (Pe + 63) >> 6) : (re += (Pe + 511) >> 9));
            }
          }
          for (
            var at = (ae.FullPaths.length + 3) >> 2,
              Nn = (q + 7) >> 3,
              kn = (q + 127) >> 7,
              Dn = Nn + re + at + kn,
              Nr = (Dn + 127) >> 7,
              Pa = Nr <= 109 ? 0 : Math.ceil((Nr - 109) / 127);
            (Dn + Nr + Pa + 127) >> 7 > Nr;

          )
            Pa = ++Nr <= 109 ? 0 : Math.ceil((Nr - 109) / 127);
          var ar = [1, Pa, Nr, kn, at, re, q, 0];
          return (
            (ae.FileIndex[0].size = q << 6),
            (ar[7] =
              (ae.FileIndex[0].start =
                ar[0] + ar[1] + ar[2] + ar[3] + ar[4] + ar[5]) +
              ((ar[6] + 7) >> 3)),
            ar
          );
        })(v),
        T = b(g[7] << 9),
        w = 0,
        D = 0;
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, ce[w]);
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
            T.write_shift(4, g[3] ? g[0] + g[1] + g[2] - 1 : te),
            T.write_shift(4, g[3]),
            T.write_shift(-4, g[1] ? g[0] - 1 : te),
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
          T.write_shift(-4, D === g[1] - 1 ? te : D + 1);
        }
      var H = function (ae) {
        for (D += ae; w < D - 1; ++w) T.write_shift(-4, w + 1);
        ae && (++w, T.write_shift(-4, te));
      };
      for (D = w = 0, D += g[1]; w < D; ++w) T.write_shift(-4, De.DIFSECT);
      for (D += g[2]; w < D; ++w) T.write_shift(-4, De.FATSECT);
      H(g[3]), H(g[4]);
      for (var k = 0, I = 0, L = v.FileIndex[0]; k < v.FileIndex.length; ++k)
        (L = v.FileIndex[k]),
          L.content &&
            ((I = L.content.length),
            !(I < 4096) && ((L.start = D), H((I + 511) >> 9)));
      for (H((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, De.ENDOFCHAIN);
      for (D = w = 0, k = 0; k < v.FileIndex.length; ++k)
        (L = v.FileIndex[k]),
          L.content &&
            ((I = L.content.length),
            !(!I || I >= 4096) && ((L.start = D), H((I + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, De.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var K = v.FullPaths[w];
        if (!K || K.length === 0) {
          for (k = 0; k < 17; ++k) T.write_shift(4, 0);
          for (k = 0; k < 3; ++k) T.write_shift(4, -1);
          for (k = 0; k < 12; ++k) T.write_shift(4, 0);
          continue;
        }
        (L = v.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : te);
        var Q = (w === 0 && _.root) || L.name;
        if (
          ((I = 2 * (Q.length + 1)),
          T.write_shift(64, Q, 'utf16le'),
          T.write_shift(2, I),
          T.write_shift(1, L.type),
          T.write_shift(1, L.color),
          T.write_shift(-4, L.L),
          T.write_shift(-4, L.R),
          T.write_shift(-4, L.C),
          L.clsid)
        )
          T.write_shift(16, L.clsid, 'hex');
        else for (k = 0; k < 4; ++k) T.write_shift(4, 0);
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
          if (((T.l = (L.start + 1) << 9), _e && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (k = 0; k < L.size; ++k) T.write_shift(1, L.content[k]);
            for (; k & 511; ++k) T.write_shift(1, 0);
          }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (_e && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (k = 0; k < L.size; ++k) T.write_shift(1, L.content[k]);
            for (; k & 63; ++k) T.write_shift(1, 0);
          }
      if (_e) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function X(v, E) {
      var _ = v.FullPaths.map(function (k) {
          return k.toUpperCase();
        }),
        g = _.map(function (k) {
          var I = k.split('/');
          return I[I.length - (k.slice(-1) == '/' ? 2 : 1)];
        }),
        T = !1;
      E.charCodeAt(0) === 47
        ? ((T = !0), (E = _[0].slice(0, -1) + E))
        : (T = E.indexOf('/') !== -1);
      var w = E.toUpperCase(),
        D = T === !0 ? _.indexOf(w) : g.indexOf(w);
      if (D !== -1) return v.FileIndex[D];
      var H = !w.match(Ti);
      for (
        w = w.replace(Hn, ''), H && (w = w.replace(Ti, '!')), D = 0;
        D < _.length;
        ++D
      )
        if (
          (H ? _[D].replace(Ti, '!') : _[D]).replace(Hn, '') == w ||
          (H ? g[D].replace(Ti, '!') : g[D]).replace(Hn, '') == w
        )
          return v.FileIndex[D];
      return null;
    }
    var z = 64,
      te = -2,
      ge = 'd0cf11e0a1b11ae1',
      ce = [208, 207, 17, 224, 161, 177, 26, 225],
      He = '00000000000000000000000000000000',
      De = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: te,
        FREESECT: -1,
        HEADER_SIGNATURE: ge,
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
    function Ct(v, E, _) {
      o();
      var g = V(v, _);
      l.writeFileSync(E, g);
    }
    function We(v) {
      for (var E = new Array(v.length), _ = 0; _ < v.length; ++_)
        E[_] = String.fromCharCode(v[_]);
      return E.join('');
    }
    function lt(v, E) {
      var _ = V(v, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : We(_);
        case 'base64':
          return Jn(typeof _ == 'string' ? _ : We(_));
        case 'buffer':
          if (_e) return Buffer.isBuffer(_) ? _ : dr(_);
        case 'array':
          return typeof _ == 'string' ? jt(_) : _;
      }
      return _;
    }
    var ct;
    function A(v) {
      try {
        var E = v.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          ct = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function B(v, E) {
      if (!ct) return Rn(v, E);
      var _ = ct.InflateRaw,
        g = new _(),
        T = g._processChunk(v.slice(v.l), g._finishFlushFlag);
      return (v.l += g.bytesRead), T;
    }
    function O(v) {
      return ct ? ct.deflateRawSync(v) : Fn(v);
    }
    var C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      G = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      fe = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function oe(v) {
      var E =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var se = typeof Uint8Array < 'u',
        ee = se ? new Uint8Array(256) : [],
        Te = 0;
      Te < 256;
      ++Te
    )
      ee[Te] = oe(Te);
    function ie(v, E) {
      var _ = ee[v & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | ee[(v >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | ee[(v >> 16) & 255]), _ >>> (24 - E)));
    }
    function ue(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 6 ? 0 : v[g + 1] << 8)) >>> _) & 3;
    }
    function le(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 5 ? 0 : v[g + 1] << 8)) >>> _) & 7;
    }
    function Ee(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 4 ? 0 : v[g + 1] << 8)) >>> _) & 15;
    }
    function xe(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 3 ? 0 : v[g + 1] << 8)) >>> _) & 31;
    }
    function ne(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 1 ? 0 : v[g + 1] << 8)) >>> _) & 127;
    }
    function it(v, E, _) {
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
    function Ht(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (v[T] |= (_ & 7) << g)
          : ((v[T] |= (_ << g) & 255), (v[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function mt(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (v[T] |= _), E + 1;
    }
    function qt(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (v[T] |= _ & 255), (_ >>>= 8), (v[T + 1] = _), E + 8;
    }
    function di(v, E, _) {
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
    function An(v, E) {
      var _ = v.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return v;
      if (_e) {
        var w = Ss(g);
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
    function Je(v) {
      for (var E = new Array(v), _ = 0; _ < v; ++_) E[_] = 0;
      return E;
    }
    function Jt(v, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        D = 0,
        H = 0,
        k = v.length,
        I = se ? new Uint16Array(32) : Je(32);
      for (w = 0; w < 32; ++w) I[w] = 0;
      for (w = k; w < _; ++w) v[w] = 0;
      k = v.length;
      var L = se ? new Uint16Array(k) : Je(k);
      for (w = 0; w < k; ++w) I[(T = v[w])]++, g < T && (g = T), (L[w] = 0);
      for (I[0] = 0, w = 1; w <= g; ++w) I[w + 16] = H = (H + I[w - 1]) << 1;
      for (w = 0; w < k; ++w) (H = v[w]), H != 0 && (L[w] = I[H + 16]++);
      var K = 0;
      for (w = 0; w < k; ++w)
        if (((K = v[w]), K != 0))
          for (
            H = ie(L[w], g) >> (g - K), D = (1 << (g + 4 - K)) - 1;
            D >= 0;
            --D
          )
            E[H | (D << K)] = (K & 15) | (w << 4);
      return g;
    }
    var Cr = se ? new Uint16Array(512) : Je(512),
      yn = se ? new Uint16Array(32) : Je(32);
    if (!se) {
      for (var Wt = 0; Wt < 512; ++Wt) Cr[Wt] = 0;
      for (Wt = 0; Wt < 32; ++Wt) yn[Wt] = 0;
    }
    (function () {
      for (var v = [], E = 0; E < 32; E++) v.push(5);
      Jt(v, yn, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      Jt(_, Cr, 288);
    })();
    var Ot = (function () {
      for (
        var E = se ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < fe.length - 1;
        ++_
      )
        for (; g < fe[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = se ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < G.length - 1; ++_)
        for (; g < G[_ + 1]; ++g) T[g] = _;
      function w(H, k) {
        for (var I = 0; I < H.length; ) {
          var L = Math.min(65535, H.length - I),
            K = I + L == H.length;
          for (
            k.write_shift(1, +K),
              k.write_shift(2, L),
              k.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            k[k.l++] = H[I++];
        }
        return k.l;
      }
      function D(H, k) {
        for (
          var I = 0, L = 0, K = se ? new Uint16Array(32768) : [];
          L < H.length;

        ) {
          var Q = Math.min(65535, H.length - L);
          if (Q < 10) {
            for (
              I = Ht(k, I, +(L + Q == H.length)),
                I & 7 && (I += 8 - (I & 7)),
                k.l = (I / 8) | 0,
                k.write_shift(2, Q),
                k.write_shift(2, ~Q & 65535);
              Q-- > 0;

            )
              k[k.l++] = H[L++];
            I = k.l * 8;
            continue;
          }
          I = Ht(k, I, +(L + Q == H.length) + 2);
          for (var ae = 0; Q-- > 0; ) {
            var q = H[L];
            ae = ((ae << 5) ^ q) & 32767;
            var re = -1,
              he = 0;
            if (
              (re = K[ae]) &&
              ((re |= L & -32768), re > L && (re -= 32768), re < L)
            )
              for (; H[re + he] == H[L + he] && he < 250; ) ++he;
            if (he > 2) {
              (q = T[he]),
                q <= 22
                  ? (I = qt(k, I, ee[q + 1] >> 1) - 1)
                  : (qt(k, I, 3),
                    (I += 5),
                    qt(k, I, ee[q - 23] >> 5),
                    (I += 3));
              var Ie = q < 8 ? 0 : (q - 4) >> 2;
              Ie > 0 && (di(k, I, he - G[q]), (I += Ie)),
                (q = E[L - re]),
                (I = qt(k, I, ee[q] >> 3)),
                (I -= 3);
              var Pe = q < 4 ? 0 : (q - 2) >> 1;
              Pe > 0 && (di(k, I, L - re - fe[q]), (I += Pe));
              for (var at = 0; at < he; ++at)
                (K[ae] = L & 32767), (ae = ((ae << 5) ^ H[L]) & 32767), ++L;
              Q -= he - 1;
            } else
              q <= 143 ? (q = q + 48) : (I = mt(k, I, 1)),
                (I = qt(k, I, ee[q])),
                (K[ae] = L & 32767),
                ++L;
          }
          I = qt(k, I, 0) - 1;
        }
        return (k.l = ((I + 7) / 8) | 0), k.l;
      }
      return function (k, I) {
        return k.length < 8 ? w(k, I) : D(k, I);
      };
    })();
    function Fn(v) {
      var E = b(50 + Math.floor(v.length * 1.1)),
        _ = Ot(v, E);
      return E.slice(0, _);
    }
    var Cn = se ? new Uint16Array(32768) : Je(32768),
      pi = se ? new Uint16Array(32768) : Je(32768),
      vi = se ? new Uint16Array(128) : Je(128),
      On = 1,
      mi = 1;
    function Fa(v, E) {
      var _ = xe(v, E) + 257;
      E += 5;
      var g = xe(v, E) + 1;
      E += 5;
      var T = Ee(v, E) + 4;
      E += 4;
      for (
        var w = 0,
          D = se ? new Uint8Array(19) : Je(19),
          H = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          k = 1,
          I = se ? new Uint8Array(8) : Je(8),
          L = se ? new Uint8Array(8) : Je(8),
          K = D.length,
          Q = 0;
        Q < T;
        ++Q
      )
        (D[C[Q]] = w = le(v, E)), k < w && (k = w), I[w]++, (E += 3);
      var ae = 0;
      for (I[0] = 0, Q = 1; Q <= k; ++Q) L[Q] = ae = (ae + I[Q - 1]) << 1;
      for (Q = 0; Q < K; ++Q) (ae = D[Q]) != 0 && (H[Q] = L[ae]++);
      var q = 0;
      for (Q = 0; Q < K; ++Q)
        if (((q = D[Q]), q != 0)) {
          ae = ee[H[Q]] >> (8 - q);
          for (var re = (1 << (7 - q)) - 1; re >= 0; --re)
            vi[ae | (re << q)] = (q & 7) | (Q << 3);
        }
      var he = [];
      for (k = 1; he.length < _ + g; )
        switch (((ae = vi[ne(v, E)]), (E += ae & 7), (ae >>>= 3))) {
          case 16:
            for (w = 3 + ue(v, E), E += 2, ae = he[he.length - 1]; w-- > 0; )
              he.push(ae);
            break;
          case 17:
            for (w = 3 + le(v, E), E += 3; w-- > 0; ) he.push(0);
            break;
          case 18:
            for (w = 11 + ne(v, E), E += 7; w-- > 0; ) he.push(0);
            break;
          default:
            he.push(ae), k < ae && (k = ae);
            break;
        }
      var Ie = he.slice(0, _),
        Pe = he.slice(_);
      for (Q = _; Q < 286; ++Q) Ie[Q] = 0;
      for (Q = g; Q < 30; ++Q) Pe[Q] = 0;
      return (On = Jt(Ie, Cn, 286)), (mi = Jt(Pe, pi, 30)), E;
    }
    function Ca(v, E) {
      if (v[0] == 3 && !(v[1] & 3)) return [Vr(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = Ss(E || 1 << 18),
          w = 0,
          D = T.length >>> 0,
          H = 0,
          k = 0;
        (g & 1) == 0;

      ) {
        if (((g = le(v, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((H = 9), (k = 5))
            : ((_ = Fa(v, _)), (H = On), (k = mi));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var I = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), I > 0))
            for (
              !E && D < w + I && ((T = An(T, w + I)), (D = T.length));
              I-- > 0;

            )
              (T[w++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && D < w + 32767 && ((T = An(T, w + 32767)), (D = T.length));
          var L = it(v, _, H),
            K = g >>> 1 == 1 ? Cr[L] : Cn[L];
          if (((_ += K & 15), (K >>>= 4), ((K >>> 8) & 255) === 0)) T[w++] = K;
          else {
            if (K == 256) break;
            K -= 257;
            var Q = K < 8 ? 0 : (K - 4) >> 2;
            Q > 5 && (Q = 0);
            var ae = w + G[K];
            Q > 0 && ((ae += it(v, _, Q)), (_ += Q)),
              (L = it(v, _, k)),
              (K = g >>> 1 == 1 ? yn[L] : pi[L]),
              (_ += K & 15),
              (K >>>= 4);
            var q = K < 4 ? 0 : (K - 2) >> 1,
              re = fe[K];
            for (
              q > 0 && ((re += it(v, _, q)), (_ += q)),
                !E && D < ae && ((T = An(T, ae + 100)), (D = T.length));
              w < ae;

            )
              (T[w] = T[w - re]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function Rn(v, E) {
      var _ = v.slice(v.l || 0),
        g = Ca(_, E);
      return (v.l += g[1]), g[0];
    }
    function _i(v, E) {
      if (v) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function gi(v, E) {
      var _ = v;
      kt(_, 0);
      var g = [],
        T = [],
        w = { FileIndex: g, FullPaths: T };
      R(w, { root: E.root });
      for (
        var D = _.length - 4;
        (_[D] != 80 || _[D + 1] != 75 || _[D + 2] != 5 || _[D + 3] != 6) &&
        D >= 0;

      )
        --D;
      (_.l = D + 4), (_.l += 4);
      var H = _.read_shift(2);
      _.l += 6;
      var k = _.read_shift(4);
      for (_.l = k, D = 0; D < H; ++D) {
        _.l += 20;
        var I = _.read_shift(4),
          L = _.read_shift(4),
          K = _.read_shift(2),
          Q = _.read_shift(2),
          ae = _.read_shift(2);
        _.l += 8;
        var q = _.read_shift(4),
          re = f(_.slice(_.l + K, _.l + K + Q));
        _.l += K + Q + ae;
        var he = _.l;
        (_.l = q + 4), Oa(_, I, L, w, re), (_.l = he);
      }
      return w;
    }
    function Oa(v, E, _, g, T) {
      v.l += 2;
      var w = v.read_shift(2),
        D = v.read_shift(2),
        H = s(v);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var k = v.read_shift(4),
          I = v.read_shift(4),
          L = v.read_shift(4),
          K = v.read_shift(2),
          Q = v.read_shift(2),
          ae = '',
          q = 0;
        q < K;
        ++q
      )
        ae += String.fromCharCode(v[v.l++]);
      if (Q) {
        var re = f(v.slice(v.l, v.l + Q));
        (re[21589] || {}).mt && (H = re[21589].mt),
          ((T || {})[21589] || {}).mt && (H = T[21589].mt);
      }
      v.l += Q;
      var he = v.slice(v.l, v.l + I);
      switch (D) {
        case 8:
          he = B(v, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + D);
      }
      var Ie = !1;
      w & 8 &&
        ((k = v.read_shift(4)),
        k == 134695760 && ((k = v.read_shift(4)), (Ie = !0)),
        (I = v.read_shift(4)),
        (L = v.read_shift(4))),
        I != E && _i(Ie, 'Bad compressed size: ' + E + ' != ' + I),
        L != _ && _i(Ie, 'Bad uncompressed size: ' + _ + ' != ' + L),
        Ia(g, ae, he, { unsafe: !0, mt: H });
    }
    function Ra(v, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = b(1),
        D = _.compression ? 8 : 0,
        H = 0,
        k = 0,
        I = 0,
        L = 0,
        K = 0,
        Q = v.FullPaths[0],
        ae = Q,
        q = v.FileIndex[0],
        re = [],
        he = 0;
      for (k = 1; k < v.FullPaths.length; ++k)
        if (
          ((ae = v.FullPaths[k].slice(Q.length)),
          (q = v.FileIndex[k]),
          !(!q.size || !q.content || ae == 'Sh33tJ5'))
        ) {
          var Ie = L,
            Pe = b(ae.length);
          for (I = 0; I < ae.length; ++I)
            Pe.write_shift(1, ae.charCodeAt(I) & 127);
          (Pe = Pe.slice(0, Pe.l)), (re[K] = T1.buf(q.content, 0));
          var at = q.content;
          D == 8 && (at = O(at)),
            (w = b(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, H),
            w.write_shift(2, D),
            q.mt ? a(w, q.mt) : w.write_shift(4, 0),
            w.write_shift(-4, re[K]),
            w.write_shift(4, at.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Pe.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += Pe.length),
            g.push(Pe),
            (L += at.length),
            g.push(at),
            (w = b(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, H),
            w.write_shift(2, D),
            w.write_shift(4, 0),
            w.write_shift(-4, re[K]),
            w.write_shift(4, at.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Pe.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Ie),
            (he += w.l),
            T.push(w),
            (he += Pe.length),
            T.push(Pe),
            ++K;
        }
      return (
        (w = b(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, K),
        w.write_shift(2, K),
        w.write_shift(4, he),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        et([et(g), et(T), w])
      );
    }
    var Jr = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function Na(v, E) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && Jr[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && Jr[g[1]]))
        ? Jr[g[1]]
        : 'application/octet-stream';
    }
    function ka(v) {
      for (var E = Jn(v), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function Be(v) {
      var E = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (I) {
          var L = I.charCodeAt(0).toString(16).toUpperCase();
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
          var H = 76,
            k = w.slice(D, D + H);
          k.charAt(H - 1) == '='
            ? H--
            : k.charAt(H - 2) == '='
              ? (H -= 2)
              : k.charAt(H - 3) == '=' && (H -= 3),
            (k = w.slice(D, D + H)),
            (D += H),
            D < w.length && (k += '='),
            _.push(k);
        }
      }
      return _.join(`\r
`);
    }
    function Xe(v) {
      for (var E = [], _ = 0; _ < v.length; ++_) {
        for (var g = v[_]; _ <= v.length && g.charAt(g.length - 1) == '='; )
          g = g.slice(0, g.length - 1) + v[++_];
        E.push(g);
      }
      for (var T = 0; T < E.length; ++T)
        E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return jt(
        E.join(`\r
`),
      );
    }
    function ut(v, E, _) {
      for (var g = '', T = '', w = '', D, H = 0; H < 10; ++H) {
        var k = E[H];
        if (!k || k.match(/^\s*$/)) break;
        var I = k.match(/^(.*?):\s*([^\s].*)$/);
        if (I)
          switch (I[1].toLowerCase()) {
            case 'content-location':
              g = I[2].trim();
              break;
            case 'content-type':
              w = I[2].trim();
              break;
            case 'content-transfer-encoding':
              T = I[2].trim();
              break;
          }
      }
      switch ((++H, T.toLowerCase())) {
        case 'base64':
          D = jt(ur(E.slice(H).join('')));
          break;
        case 'quoted-printable':
          D = Xe(E.slice(H));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = Ia(v, g.slice(_.length), D, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function Or(v, E) {
      if (We(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (_e && Buffer.isBuffer(v) ? v.toString('binary') : We(v)).split(`\r
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
      var H = '--' + (D[1] || ''),
        k = [],
        I = [],
        L = { FileIndex: k, FullPaths: I };
      R(L);
      var K,
        Q = 0;
      for (T = 0; T < g.length; ++T) {
        var ae = g[T];
        (ae !== H && ae !== H + '--') ||
          (Q++ && ut(L, g.slice(K, T), _), (K = T));
      }
      return L;
    }
    function Rr(v, E) {
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
          H = v.FileIndex[0],
          k = 1;
        k < v.FullPaths.length;
        ++k
      )
        if (
          ((D = v.FullPaths[k].slice(w.length)),
          (H = v.FileIndex[k]),
          !(!H.size || !H.content || D == 'Sh33tJ5'))
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
            var I = H.content,
              L = _e && Buffer.isBuffer(I) ? I.toString('binary') : We(I),
              K = 0,
              Q = Math.min(1024, L.length),
              ae = 0,
              q = 0;
            q <= Q;
            ++q
          )
            (ae = L.charCodeAt(q)) >= 32 && ae < 128 && ++K;
          var re = K >= (Q * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + D,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (re ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + Na(H, D)),
            T.push(''),
            T.push(re ? Be(L) : ka(L));
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
    function Da(v) {
      var E = {};
      return R(E, v), E;
    }
    function Ia(v, E, _, g) {
      var T = g && g.unsafe;
      T || R(v);
      var w = !T && Fe.find(v, E);
      if (!w) {
        var D = v.FullPaths[0];
        E.slice(0, D.length) == D
          ? (D = E)
          : (D.slice(-1) != '/' && (D += '/'),
            (D = (D + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          v.FileIndex.push(w),
          v.FullPaths.push(D),
          T || Fe.utils.cfb_gc(v);
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
    function zl(v, E) {
      R(v);
      var _ = Fe.find(v, E);
      if (_) {
        for (var g = 0; g < v.FileIndex.length; ++g)
          if (v.FileIndex[g] == _)
            return v.FileIndex.splice(g, 1), v.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function Kl(v, E, _) {
      R(v);
      var g = Fe.find(v, E);
      if (g) {
        for (var T = 0; T < v.FileIndex.length; ++T)
          if (v.FileIndex[T] == g)
            return (v.FileIndex[T].name = i(_)), (v.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function Yl(v) {
      P(v, !0);
    }
    return (
      (r.find = X),
      (r.read = Y),
      (r.parse = c),
      (r.write = lt),
      (r.writeFile = Ct),
      (r.utils = {
        cfb_new: Da,
        cfb_add: Ia,
        cfb_del: zl,
        cfb_mov: Kl,
        cfb_gc: Yl,
        ReadShift: Vn,
        CheckField: Xo,
        prep_blob: kt,
        bconcat: et,
        use_zlib: A,
        _deflateRaw: Fn,
        _inflateRaw: Rn,
        consts: De,
      }),
      r
    );
  })();
function w1(e) {
  return typeof e == 'string' ? _a(e) : Array.isArray(e) ? Kh(e) : e;
}
function li(e, r, t) {
  if (typeof Deno < 'u') {
    if (t && typeof r == 'string')
      switch (t) {
        case 'utf8':
          r = new TextEncoder(t).encode(r);
          break;
        case 'binary':
          r = _a(r);
          break;
        default:
          throw new Error('Unsupported encoding ' + t);
      }
    return Deno.writeFileSync(e, r);
  }
  var n = t == 'utf8' ? Qn(r) : r;
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
        Array.isArray(r) && (r = oi(r)),
        f.write(r),
        f.close(),
        r
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function nt(e) {
  for (var r = Object.keys(e), t = [], n = 0; n < r.length; ++n)
    Object.prototype.hasOwnProperty.call(e, r[n]) && t.push(r[n]);
  return t;
}
function ks(e, r) {
  for (var t = [], n = nt(e), i = 0; i !== n.length; ++i)
    t[e[n[i]][r]] == null && (t[e[n[i]][r]] = n[i]);
  return t;
}
function N0(e) {
  for (var r = [], t = nt(e), n = 0; n !== t.length; ++n) r[e[t[n]]] = t[n];
  return r;
}
function Ta(e) {
  for (var r = [], t = nt(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] = parseInt(t[n], 10);
  return r;
}
function S1(e) {
  for (var r = [], t = nt(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] == null && (r[e[t[n]]] = []), r[e[t[n]]].push(t[n]);
  return r;
}
var Yi = new Date(1899, 11, 30, 0, 0, 0);
function At(e, r) {
  var t = e.getTime(),
    n = Yi.getTime() + (e.getTimezoneOffset() - Yi.getTimezoneOffset()) * 6e4;
  return (t - n) / (24 * 60 * 60 * 1e3);
}
var Oo = new Date(),
  A1 = Yi.getTime() + (Oo.getTimezoneOffset() - Yi.getTimezoneOffset()) * 6e4,
  Ds = Oo.getTimezoneOffset();
function Ro(e) {
  var r = new Date();
  return (
    r.setTime(e * 24 * 60 * 60 * 1e3 + A1),
    r.getTimezoneOffset() !== Ds &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - Ds) * 6e4),
    r
  );
}
var Is = new Date('2017-02-19T19:06:09.000Z'),
  No = isNaN(Is.getFullYear()) ? new Date('2/19/17') : Is,
  y1 = No.getFullYear() == 2017;
function vt(e, r) {
  var t = new Date(e);
  if (y1)
    return (
      r > 0
        ? t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3),
      t
    );
  if (e instanceof Date) return e;
  if (No.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
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
function wa(e, r) {
  if (_e && Buffer.isBuffer(e)) return e.toString('binary');
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
function yt(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = yt(e[t]));
  return r;
}
function be(e, r) {
  for (var t = ''; t.length < r; ) t += e;
  return t;
}
function lr(e) {
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
function Zn(e) {
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
      s.length > 3 && F1.indexOf(s) == -1)
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
function pe(e, r, t) {
  if (e.FullPaths) {
    if (typeof t == 'string') {
      var n;
      return _e ? (n = dr(t)) : (n = Yh(t)), Fe.utils.cfb_add(e, r, n);
    }
    Fe.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function k0() {
  return Fe.utils.cfb_new();
}
var je = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  C1 = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  D0 = N0(C1),
  I0 = /[&<>'"]/g,
  O1 = /[\u0000-\u0008\u000b-\u001f]/g;
function Ae(e) {
  var r = e + '';
  return r
    .replace(I0, function (t) {
      return D0[t];
    })
    .replace(O1, function (t) {
      return '_x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function Ps(e) {
  return Ae(e).replace(/ /g, '_x0020_');
}
var ko = /[\u0000-\u001f]/g;
function R1(e) {
  var r = e + '';
  return r
    .replace(I0, function (t) {
      return D0[t];
    })
    .replace(/\n/g, '<br/>')
    .replace(ko, function (t) {
      return '&#x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function N1(e) {
  var r = e + '';
  return r
    .replace(I0, function (t) {
      return D0[t];
    })
    .replace(ko, function (t) {
      return '&#x' + t.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function k1(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function D1(e) {
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
function Ga(e) {
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
function Ls(e) {
  var r = Vr(2 * e.length),
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
function Bs(e) {
  return dr(e, 'binary').toString('utf8');
}
var Si = 'foo bar bazâð£',
  Wn = (_e && ((Bs(Si) == Ga(Si) && Bs) || (Ls(Si) == Ga(Si) && Ls))) || Ga,
  Qn = _e
    ? function (e) {
        return dr(e, 'utf8').toString('binary');
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
  I1 = (function () {
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
  Do = /(^\s|\s$|\n)/;
function tt(e, r) {
  return (
    '<' +
    e +
    (r.match(Do) ? ' xml:space="preserve"' : '') +
    '>' +
    r +
    '</' +
    e +
    '>'
  );
}
function ei(e) {
  return nt(e)
    .map(function (r) {
      return ' ' + r + '="' + e[r] + '"';
    })
    .join('');
}
function J(e, r, t) {
  return (
    '<' +
    e +
    (t != null ? ei(t) : '') +
    (r != null
      ? (r.match(Do) ? ' xml:space="preserve"' : '') + '>' + r + '</' + e
      : '/') +
    '>'
  );
}
function l0(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, '');
  } catch (t) {
    if (r) throw t;
  }
  return '';
}
function P1(e, r) {
  switch (typeof e) {
    case 'string':
      var t = J('vt:lpwstr', Ae(e));
      return (t = t.replace(/&quot;/g, '_x0022_')), t;
    case 'number':
      return J((e | 0) == e ? 'vt:i4' : 'vt:r8', Ae(String(e)));
    case 'boolean':
      return J('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return J('vt:filetime', l0(e));
  throw new Error('Unable to serialize ' + e);
}
var Ke = {
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
  En = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  Dt = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function L1(e, r) {
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
function B1(e, r, t) {
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
var Ms = function (e) {
    for (var r = [], t = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += t)
          r.push.apply(r, e[0][n].slice(i, i + t));
    return r;
  },
  bs = _e
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : dr(r);
              }),
            )
          : Ms(e);
      }
    : Ms,
  Us = function (e, r, t) {
    for (var n = [], i = r; i < t; i += 2)
      n.push(String.fromCharCode(Mn(e, i)));
    return n.join('').replace(Hn, '');
  },
  P0 = _e
    ? function (e, r, t) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', r, t).replace(Hn, '')
          : Us(e, r, t);
      }
    : Us,
  Hs = function (e, r, t) {
    for (var n = [], i = r; i < r + t; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  Io = _e
    ? function (e, r, t) {
        return Buffer.isBuffer(e) ? e.toString('hex', r, r + t) : Hs(e, r, t);
      }
    : Hs,
  Ws = function (e, r, t) {
    for (var n = [], i = r; i < t; i++) n.push(String.fromCharCode(on(e, i)));
    return n.join('');
  },
  ci = _e
    ? function (r, t, n) {
        return Buffer.isBuffer(r) ? r.toString('utf8', t, n) : Ws(r, t, n);
      }
    : Ws,
  Po = function (e, r) {
    var t = It(e, r);
    return t > 0 ? ci(e, r + 4, r + 4 + t - 1) : '';
  },
  Lo = Po,
  Bo = function (e, r) {
    var t = It(e, r);
    return t > 0 ? ci(e, r + 4, r + 4 + t - 1) : '';
  },
  Mo = Bo,
  bo = function (e, r) {
    var t = 2 * It(e, r);
    return t > 0 ? ci(e, r + 4, r + 4 + t - 1) : '';
  },
  Uo = bo,
  Ho = function (r, t) {
    var n = It(r, t);
    return n > 0 ? P0(r, t + 4, t + 4 + n) : '';
  },
  Wo = Ho,
  Vo = function (e, r) {
    var t = It(e, r);
    return t > 0 ? ci(e, r + 4, r + 4 + t) : '';
  },
  Go = Vo,
  jo = function (e, r) {
    return L1(e, r);
  },
  qi = jo,
  L0 = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  };
_e &&
  ((Lo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Po(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (Mo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Bo(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (Uo = function (r, t) {
    if (!Buffer.isBuffer(r)) return bo(r, t);
    var n = 2 * r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n - 1);
  }),
  (Wo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Ho(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n);
  }),
  (Go = function (r, t) {
    if (!Buffer.isBuffer(r)) return Vo(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf8', t + 4, t + 4 + n);
  }),
  (qi = function (r, t) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(t) : jo(r, t);
  }),
  (L0 = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  }));
var on = function (e, r) {
    return e[r];
  },
  Mn = function (e, r) {
    return e[r + 1] * 256 + e[r];
  },
  M1 = function (e, r) {
    var t = e[r + 1] * 256 + e[r];
    return t < 32768 ? t : (65535 - t + 1) * -1;
  },
  It = function (e, r) {
    return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
  },
  Br = function (e, r) {
    return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
  },
  b1 = function (e, r) {
    return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
  };
function Vn(e, r) {
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
      if (((o = this.l), _e && Buffer.isBuffer(this)))
        t = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (t += String.fromCharCode(Mn(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      t = ci(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (t = P0(this, this.l, this.l + e));
      break;
    case 'wstr':
      return Vn.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (t = Lo(this, this.l)), (e = 4 + It(this, this.l));
      break;
    case 'lpstr-cp':
      (t = Mo(this, this.l)), (e = 4 + It(this, this.l));
      break;
    case 'lpwstr':
      (t = Uo(this, this.l)), (e = 4 + 2 * It(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + It(this, this.l)), (t = Wo(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + It(this, this.l)),
        (t = Go(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, t = ''; (s = on(this, this.l + e++)) !== 0; ) a.push(Ei(s));
      t = a.join('');
      break;
    case '_wstr':
      for (e = 0, t = ''; (s = Mn(this, this.l + e)) !== 0; )
        a.push(Ei(s)), (e += 2);
      (e += 2), (t = a.join(''));
      break;
    case 'dbcs-cont':
      for (t = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = on(this, o)),
            (this.l = o + 1),
            (f = Vn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ei(Mn(this, o))), (o += 2);
      }
      (t = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (t = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = on(this, o)),
            (this.l = o + 1),
            (f = Vn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ei(on(this, o))), (o += 1);
      }
      t = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = on(this, this.l)), this.l++, n;
        case 2:
          return (n = (r === 'i' ? M1 : Mn)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return r === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? Br : b1)(this, this.l)), (this.l += 4), n)
            : ((i = It(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (r === 'f')
            return (
              e == 8
                ? (i = qi(this, this.l))
                : (i = qi(
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
          t = Io(this, this.l, e);
          break;
      }
  }
  return (this.l += e), t;
}
var U1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >>> 8) & 255),
      (e[t + 2] = (r >>> 16) & 255),
      (e[t + 3] = (r >>> 24) & 255);
  },
  H1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >> 8) & 255),
      (e[t + 2] = (r >> 16) & 255),
      (e[t + 3] = (r >> 24) & 255);
  },
  W1 = function (e, r, t) {
    (e[t] = r & 255), (e[t + 1] = (r >>> 8) & 255);
  };
function V1(e, r, t) {
  var n = 0,
    i = 0;
  if (t === 'dbcs') {
    for (i = 0; i != r.length; ++i) W1(this, r.charCodeAt(i), this.l + 2 * i);
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
        (n = 4), U1(this, r, this.l);
        break;
      case 8:
        if (((n = 8), t === 'f')) {
          B1(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), H1(this, r, this.l);
        break;
    }
  return (this.l += n), this;
}
function Xo(e, r) {
  var t = Io(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + 'Expected ' + e + ' saw ' + t);
  this.l += e.length >> 1;
}
function kt(e, r) {
  (e.l = r), (e.read_shift = Vn), (e.chk = Xo), (e.write_shift = V1);
}
function ir(e, r) {
  e.l += r;
}
function b(e) {
  var r = Vr(e);
  return kt(r, 0), r;
}
function wt() {
  var e = [],
    r = _e ? 256 : 2048,
    t = function (o) {
      var c = b(o);
      return kt(c, 0), c;
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
      return i(), et(e);
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
    n || (n = Lm[i].p || (t || []).length || 0),
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
    n > 0 && L0(t) && e.push(t);
  }
}
function Gn(e, r, t) {
  var n = yt(e);
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
function Vs(e, r, t) {
  var n = yt(e);
  return (n.s = Gn(n.s, r.s, t)), (n.e = Gn(n.e, r.s, t)), n;
}
function jn(e, r) {
  if (e.cRel && e.c < 0) for (e = yt(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = yt(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = ye(e);
  return (
    !e.cRel && e.cRel != null && (t = X1(t)),
    !e.rRel && e.rRel != null && (t = G1(t)),
    t
  );
}
function ja(e, r) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        ft(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        ft(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (r.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        rt(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        rt(e.e.r)
      : jn(e.s, r.biff) + ':' + jn(e.e, r.biff);
}
function B0(e) {
  return parseInt(j1(e), 10) - 1;
}
function rt(e) {
  return '' + (e + 1);
}
function G1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function j1(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function M0(e) {
  for (var r = $1(e), t = 0, n = 0; n !== r.length; ++n)
    t = 26 * t + r.charCodeAt(n) - 64;
  return t - 1;
}
function ft(e) {
  if (e < 0) throw new Error('invalid column ' + e);
  var r = '';
  for (++e; e; e = Math.floor((e - 1) / 26))
    r = String.fromCharCode(((e - 1) % 26) + 65) + r;
  return r;
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
function Ye(e) {
  for (var r = 0, t = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (r = 10 * r + (i - 48))
      : i >= 65 && i <= 90 && (t = 26 * t + (i - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function ye(e) {
  for (var r = e.c + 1, t = ''; r; r = ((r - 1) / 26) | 0)
    t = String.fromCharCode(((r - 1) % 26) + 65) + t;
  return t + (e.r + 1);
}
function Lt(e) {
  var r = e.indexOf(':');
  return r == -1
    ? { s: Ye(e), e: Ye(e) }
    : { s: Ye(e.slice(0, r)), e: Ye(e.slice(r + 1)) };
}
function Ge(e, r) {
  return typeof r > 'u' || typeof r == 'number'
    ? Ge(e.s, e.e)
    : (typeof e != 'string' && (e = ye(e)),
      typeof r != 'string' && (r = ye(r)),
      e == r ? e : e + ':' + r);
}
function ke(e) {
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
function Gs(e, r) {
  var t = e.t == 'd' && r instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Sr(e.z, t ? At(r) : r));
    } catch {}
  try {
    return (e.w = Sr((e.XF || {}).numFmtId || (t ? 14 : 0), t ? At(r) : r));
  } catch {
    return '' + r;
  }
}
function hr(e, r, t) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && t && t.dateNF && (e.z = t.dateNF),
        e.t == 'e' ? ui[e.v] || e.v : r == null ? Gs(e, e.v) : Gs(e, r));
}
function $r(e, r) {
  var t = r && r.sheet ? r.sheet : 'Sheet1',
    n = {};
  return (n[t] = e), { SheetNames: [t], Sheets: n };
}
function $o(e, r, t) {
  var n = t || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Ye(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = ke(a['!ref']);
    (o.s.c = c.s.c),
      (o.s.r = c.s.r),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      s == -1 && (o.e.r = s = c.e.r + 1);
  }
  for (var u = 0; u != r.length; ++u)
    if (r[u]) {
      if (!Array.isArray(r[u]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var h = 0; h != r[u].length; ++h)
        if (!(typeof r[u][h] > 'u')) {
          var d = { v: r[u][h] },
            p = s + u,
            x = f + h;
          if (
            (o.s.r > p && (o.s.r = p),
            o.s.c > x && (o.s.c = x),
            o.e.r < p && (o.e.r = p),
            o.e.c < x && (o.e.c = x),
            r[u][h] &&
              typeof r[u][h] == 'object' &&
              !Array.isArray(r[u][h]) &&
              !(r[u][h] instanceof Date))
          )
            d = r[u][h];
          else if (
            (Array.isArray(d.v) && ((d.f = r[u][h][1]), (d.v = d.v[0])),
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
                  ? ((d.z = n.dateNF || Ue[14]),
                    n.cellDates
                      ? ((d.t = 'd'), (d.w = Sr(d.z, At(d.v))))
                      : ((d.t = 'n'), (d.v = At(d.v)), (d.w = Sr(d.z, d.v))))
                  : (d.t = 's');
          if (i)
            a[p] || (a[p] = []),
              a[p][x] && a[p][x].z && (d.z = a[p][x].z),
              (a[p][x] = d);
          else {
            var m = ye({ c: x, r: p });
            a[m] && a[m].z && (d.z = a[m].z), (a[m] = d);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = Ge(o)), a;
}
function Tn(e, r) {
  return $o(null, e, r);
}
function K1(e) {
  return e.read_shift(4, 'i');
}
function $t(e, r) {
  return r || (r = b(4)), r.write_shift(4, e), r;
}
function ot(e) {
  var r = e.read_shift(4);
  return r === 0 ? '' : e.read_shift(r, 'dbcs');
}
function qe(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = b(4 + 2 * e.length))),
    r.write_shift(4, e.length),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
function Y1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function q1(e, r) {
  return r || (r = b(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function b0(e, r) {
  var t = e.l,
    n = e.read_shift(1),
    i = ot(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(Y1(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = t + r), s;
}
function J1(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = b(15 + 4 * e.t.length))),
    r.write_shift(1, 0),
    qe(e.t, r),
    t ? r.slice(0, r.l) : r
  );
}
var Z1 = b0;
function Q1(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = b(23 + 4 * e.t.length))),
    r.write_shift(1, 1),
    qe(e.t, r),
    r.write_shift(4, 1),
    q1({}, r),
    t ? r.slice(0, r.l) : r
  );
}
function Ut(e) {
  var r = e.read_shift(4),
    t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: r, iStyleRef: t };
}
function zr(e, r) {
  return (
    r == null && (r = b(8)),
    r.write_shift(-4, e.c),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
function Kr(e) {
  var r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: r };
}
function Yr(e, r) {
  return (
    r == null && (r = b(4)),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
var ex = ot,
  zo = qe;
function U0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? '' : e.read_shift(r, 'dbcs');
}
function Ji(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = b(127))),
    r.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
var tx = ot,
  c0 = U0,
  H0 = Ji;
function Ko(e) {
  var r = e.slice(e.l, e.l + 4),
    t = r[0] & 1,
    n = r[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? qi([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : Br(r, 0) >> 2;
  return t ? i / 100 : i;
}
function Yo(e, r) {
  r == null && (r = b(4));
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
function qo(e) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = e.read_shift(4)),
    (r.e.r = e.read_shift(4)),
    (r.s.c = e.read_shift(4)),
    (r.e.c = e.read_shift(4)),
    r
  );
}
function rx(e, r) {
  return (
    r || (r = b(16)),
    r.write_shift(4, e.s.r),
    r.write_shift(4, e.e.r),
    r.write_shift(4, e.s.c),
    r.write_shift(4, e.e.c),
    r
  );
}
var qr = qo,
  wn = rx;
function Sn(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function Gr(e, r) {
  return (r || b(8)).write_shift(8, e, 'f');
}
function nx(e) {
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
      var o = hx[i];
      o && (r.rgb = ef(o));
      break;
    case 2:
      r.rgb = ef([s, f, l]);
      break;
    case 3:
      r.theme = i;
      break;
  }
  return a != 0 && (r.tint = a > 0 ? a / 32767 : a / 32768), r;
}
function Zi(e, r) {
  if ((r || (r = b(8)), !e || e.auto))
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
function ix(e) {
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
function ax(e, r) {
  r || (r = b(2));
  var t =
    (e.italic ? 2 : 0) |
    (e.strike ? 8 : 0) |
    (e.outline ? 16 : 0) |
    (e.shadow ? 32 : 0) |
    (e.condense ? 64 : 0) |
    (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
var Jo = 2,
  Nt = 3,
  Ai = 11,
  Qi = 19,
  yi = 64,
  sx = 65,
  fx = 71,
  ox = 4108,
  lx = 4126,
  Qe = 80,
  js = {
    1: { n: 'CodePage', t: Jo },
    2: { n: 'Category', t: Qe },
    3: { n: 'PresentationFormat', t: Qe },
    4: { n: 'ByteCount', t: Nt },
    5: { n: 'LineCount', t: Nt },
    6: { n: 'ParagraphCount', t: Nt },
    7: { n: 'SlideCount', t: Nt },
    8: { n: 'NoteCount', t: Nt },
    9: { n: 'HiddenCount', t: Nt },
    10: { n: 'MultimediaClipCount', t: Nt },
    11: { n: 'ScaleCrop', t: Ai },
    12: { n: 'HeadingPairs', t: ox },
    13: { n: 'TitlesOfParts', t: lx },
    14: { n: 'Manager', t: Qe },
    15: { n: 'Company', t: Qe },
    16: { n: 'LinksUpToDate', t: Ai },
    17: { n: 'CharacterCount', t: Nt },
    19: { n: 'SharedDoc', t: Ai },
    22: { n: 'HyperlinksChanged', t: Ai },
    23: { n: 'AppVersion', t: Nt, p: 'version' },
    24: { n: 'DigSig', t: sx },
    26: { n: 'ContentType', t: Qe },
    27: { n: 'ContentStatus', t: Qe },
    28: { n: 'Language', t: Qe },
    29: { n: 'Version', t: Qe },
    255: {},
    2147483648: { n: 'Locale', t: Qi },
    2147483651: { n: 'Behavior', t: Qi },
    1919054434: {},
  },
  Xs = {
    1: { n: 'CodePage', t: Jo },
    2: { n: 'Title', t: Qe },
    3: { n: 'Subject', t: Qe },
    4: { n: 'Author', t: Qe },
    5: { n: 'Keywords', t: Qe },
    6: { n: 'Comments', t: Qe },
    7: { n: 'Template', t: Qe },
    8: { n: 'LastAuthor', t: Qe },
    9: { n: 'RevNumber', t: Qe },
    10: { n: 'EditTime', t: yi },
    11: { n: 'LastPrinted', t: yi },
    12: { n: 'CreatedDate', t: yi },
    13: { n: 'ModifiedDate', t: yi },
    14: { n: 'PageCount', t: Nt },
    15: { n: 'WordCount', t: Nt },
    16: { n: 'CharCount', t: Nt },
    17: { n: 'Thumbnail', t: fx },
    18: { n: 'Application', t: Qe },
    19: { n: 'DocSecurity', t: Nt },
    255: {},
    2147483648: { n: 'Locale', t: Qi },
    2147483651: { n: 'Behavior', t: Qi },
    1919054434: {},
  };
function cx(e) {
  return e.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
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
  hx = yt(ux),
  ui = {
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
  Fi = {
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
function Zo() {
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
function Qo(e, r) {
  var t = S1(xx),
    n = [],
    i;
  (n[n.length] = je),
    (n[n.length] = J('Types', null, {
      xmlns: Ke.CT,
      'xmlns:xsd': Ke.xsd,
      'xmlns:xsi': Ke.xsi,
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
          ContentType: Fi[l][r.bookType] || Fi[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = J('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: Fi[l][r.bookType] || Fi[l].xlsx,
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
var me = {
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
function el(e) {
  var r = e.lastIndexOf('/');
  return e.slice(0, r + 1) + '_rels/' + e.slice(r + 1) + '.rels';
}
function un(e) {
  var r = [je, J('Relationships', null, { xmlns: Ke.RELS })];
  return (
    nt(e['!id']).forEach(function (t) {
      r[r.length] = J('Relationship', null, e['!id'][t]);
    }),
    r.length > 2 &&
      ((r[r.length] = '</Relationships>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Se(e, r, t, n, i, a) {
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
    [me.HLINK, me.XPATH, me.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + r);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), r;
}
function dx(e) {
  var r = [je];
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
function $s(e, r, t) {
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
function px(e, r) {
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
function vx(e) {
  var r = [je];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t)
    r.push($s(e[t][0], e[t][1])), r.push(px('', e[t][0]));
  return r.push($s('', 'Document', 'pkg')), r.push('</rdf:RDF>'), r.join('');
}
function tl() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Xi.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Hr = [
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
function Xa(e, r, t, n, i) {
  i[e] != null ||
    r == null ||
    r === '' ||
    ((i[e] = r), (r = Ae(r)), (n[n.length] = t ? J(e, r, t) : tt(e, r)));
}
function rl(e, r) {
  var t = r || {},
    n = [
      je,
      J('cp:coreProperties', null, {
        'xmlns:cp': Ke.CORE_PROPS,
        'xmlns:dc': Ke.dc,
        'xmlns:dcterms': Ke.dcterms,
        'xmlns:dcmitype': Ke.dcmitype,
        'xmlns:xsi': Ke.xsi,
      }),
    ],
    i = {};
  if (!e && !t.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      Xa(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : l0(e.CreatedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      Xa(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : l0(e.ModifiedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != Hr.length; ++a) {
    var s = Hr[a],
      f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && Xa(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var hn = [
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
  nl = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function il(e) {
  var r = [],
    t = J;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (r[r.length] = je),
    (r[r.length] = J('Properties', null, {
      xmlns: Ke.EXT_PROPS,
      'xmlns:vt': Ke.vt,
    })),
    hn.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = Ae(String(e[n[1]]));
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
          return '<vt:lpstr>' + Ae(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function al(e) {
  var r = [
    je,
    J('Properties', null, { xmlns: Ke.CUST_PROPS, 'xmlns:vt': Ke.vt }),
  ];
  if (!e) return r.join('');
  var t = 1;
  return (
    nt(e).forEach(function (i) {
      ++t,
        (r[r.length] = J('property', P1(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: t,
          name: Ae(i),
        }));
    }),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
var zs = {
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
function mx(e, r) {
  var t = [];
  return (
    nt(zs)
      .map(function (n) {
        for (var i = 0; i < Hr.length; ++i) if (Hr[i][1] == n) return Hr[i];
        for (i = 0; i < hn.length; ++i) if (hn[i][1] == n) return hn[i];
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
            t.push(tt(zs[n[1]] || n[1], i));
        }
      }),
    J('DocumentProperties', t.join(''), { xmlns: Dt.o })
  );
}
function _x(e, r) {
  var t = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      nt(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < Hr.length; ++s) if (a == Hr[s][1]) return;
          for (s = 0; s < hn.length; ++s) if (a == hn[s][1]) return;
          for (s = 0; s < t.length; ++s) if (a == t[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(J(Ps(a), f, { 'dt:dt': l }));
        }
      }),
    r &&
      nt(r).forEach(function (a) {
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
            i.push(J(Ps(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + Dt.o + '">' + i.join('') + '</' + n + '>'
  );
}
function gx(e) {
  var r = typeof e == 'string' ? new Date(Date.parse(e)) : e,
    t = r.getTime() / 1e3 + 11644473600,
    n = t % Math.pow(2, 32),
    i = (t - n) / Math.pow(2, 32);
  (n *= 1e7), (i *= 1e7);
  var a = (n / Math.pow(2, 32)) | 0;
  a > 0 && ((n = n % Math.pow(2, 32)), (i += a));
  var s = b(8);
  return s.write_shift(4, n), s.write_shift(4, i), s;
}
function Ks(e, r) {
  var t = b(4),
    n = b(4);
  switch ((t.write_shift(4, e == 80 ? 31 : e), e)) {
    case 3:
      n.write_shift(-4, r);
      break;
    case 5:
      (n = b(8)), n.write_shift(8, r, 'f');
      break;
    case 11:
      n.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      n = gx(r);
      break;
    case 31:
    case 80:
      for (
        n = b(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)),
          n.write_shift(4, r.length + 1),
          n.write_shift(0, r, 'dbcs');
        n.l != n.length;

      )
        n.write_shift(1, 0);
      break;
    default:
      throw new Error('TypedPropertyValue unrecognized type ' + e + ' ' + r);
  }
  return et([t, n]);
}
var sl = [
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
function Ys(e, r, t) {
  var n = b(8),
    i = [],
    a = [],
    s = 8,
    f = 0,
    l = b(8),
    o = b(8);
  if (
    (l.write_shift(4, 2),
    l.write_shift(4, 1200),
    o.write_shift(4, 1),
    a.push(l),
    i.push(o),
    (s += 8 + l.length),
    !r)
  ) {
    (o = b(8)), o.write_shift(4, 0), i.unshift(o);
    var c = [b(4)];
    for (c[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var u = e[f][0];
      for (
        l = b(8 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)),
          l.write_shift(4, f + 2),
          l.write_shift(4, u.length + 1),
          l.write_shift(0, u, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = et(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(r && !r[e[f][0]]) &&
      !(sl.indexOf(e[f][0]) > -1 || nl.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var h = e[f][1],
        d = 0;
      if (r) {
        d = +r[e[f][0]];
        var p = t[d];
        if (p.p == 'version' && typeof h == 'string') {
          var x = h.split('.');
          h = (+x[0] << 16) + (+x[1] || 0);
        }
        l = Ks(p.t, h);
      } else {
        var m = Ex(h);
        m == -1 && ((m = 31), (h = String(h))), (l = Ks(m, h));
      }
      a.push(l),
        (o = b(8)),
        o.write_shift(4, r ? d : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var S = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, S), (S += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), et([n].concat(i).concat(a))
  );
}
function qs(e, r, t, n, i, a) {
  var s = b(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Fe.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, r, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = Ys(e, t, n);
  if ((f.push(l), i)) {
    var o = Ys(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return et(f);
}
function Tx(e, r) {
  r || (r = b(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function wx(e, r) {
  return e.read_shift(r) === 1;
}
function dt(e, r) {
  return r || (r = b(2)), r.write_shift(2, +!!e), r;
}
function fl(e) {
  return e.read_shift(2, 'u');
}
function bt(e, r) {
  return r || (r = b(2)), r.write_shift(2, e), r;
}
function ol(e, r, t) {
  return (
    t || (t = b(2)),
    t.write_shift(1, r == 'e' ? +e : +!!e),
    t.write_shift(1, r == 'e' ? 1 : 0),
    t
  );
}
function ll(e, r, t) {
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
function Sx(e) {
  var r = e.t || '',
    t = b(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var n = b(2 * r.length);
  n.write_shift(2 * r.length, r, 'utf16le');
  var i = [t, n];
  return et(i);
}
function Ax(e, r, t) {
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
function yx(e, r, t) {
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : Ax(e, n, t);
}
function Fx(e, r, t) {
  if (t.biff > 5) return yx(e, r, t);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, t.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function cl(e, r, t) {
  return (
    t || (t = b(3 + 2 * e.length)),
    t.write_shift(2, e.length),
    t.write_shift(1, 1),
    t.write_shift(31, e, 'utf16le'),
    t
  );
}
function Js(e, r) {
  r || (r = b(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function Cx(e) {
  var r = b(512),
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
  if (a == 28) (n = n.slice(1)), Js(n, r);
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
    r.write_shift(2, 0), a & 8 && Js(i > -1 ? n.slice(i + 1) : '', r);
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
function jr(e, r, t, n) {
  return (
    n || (n = b(6)),
    n.write_shift(2, e),
    n.write_shift(2, r),
    n.write_shift(2, t || 0),
    n
  );
}
function Ox(e, r, t) {
  var n = t.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function Rx(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r }, e: { c: i, r: t } };
}
function ul(e, r) {
  return (
    r || (r = b(8)),
    r.write_shift(2, e.s.r),
    r.write_shift(2, e.e.r),
    r.write_shift(2, e.s.c),
    r.write_shift(2, e.e.c),
    r
  );
}
function W0(e, r, t) {
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
  var a = b(i);
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
function Nx(e, r) {
  var t = !r || r.biff == 8,
    n = b(t ? 112 : 54);
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
function kx(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1,
    n = b(8 + t * e.name.length);
  n.write_shift(4, e.pos),
    n.write_shift(1, e.hs || 0),
    n.write_shift(1, e.dt),
    n.write_shift(1, e.name.length),
    r.biff >= 8 && n.write_shift(1, 1),
    n.write_shift(t * e.name.length, e.name, r.biff < 8 ? 'sbcs' : 'utf16le');
  var i = n.slice(0, n.l);
  return (i.l = n.l), i;
}
function Dx(e, r) {
  var t = b(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = Sx(e[i]);
  var a = et([t].concat(n));
  return (
    (a.parts = [t.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function Ix() {
  var e = b(18);
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
  var r = b(18),
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
function Lx(e, r) {
  var t = e.name || 'Arial',
    n = r && r.biff == 5,
    i = n ? 15 + t.length : 16 + 2 * t.length,
    a = b(i);
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
function Bx(e, r, t, n) {
  var i = b(10);
  return jr(e, r, n, i), i.write_shift(4, t), i;
}
function Mx(e, r, t, n, i) {
  var a = !i || i.biff == 8,
    s = b(8 + +a + (1 + a) * t.length);
  return (
    jr(e, r, n, s),
    s.write_shift(2, t.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * t.length, t, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function bx(e, r, t, n) {
  var i = t && t.biff == 5;
  n || (n = b(i ? 3 + r.length : 5 + 2 * r.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, r.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * r.length, r, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function Ux(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2,
    n = b(2 * t + 6);
  return (
    n.write_shift(t, e.s.r),
    n.write_shift(t, e.e.r + 1),
    n.write_shift(2, e.s.c),
    n.write_shift(2, e.e.c + 1),
    n.write_shift(2, 0),
    n
  );
}
function Zs(e, r, t, n) {
  var i = t && t.biff == 5;
  n || (n = b(i ? 16 : 20)),
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
function Hx(e) {
  var r = b(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Wx(e, r, t, n, i, a) {
  var s = b(8);
  return jr(e, r, n, s), ol(t, a, s), s;
}
function Vx(e, r, t, n) {
  var i = b(14);
  return jr(e, r, n, i), Gr(t, i), i;
}
function Gx(e, r, t) {
  if (t.biff < 8) return jx(e, r, t);
  for (
    var n = [], i = e.l + r, a = e.read_shift(t.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(Ox(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function jx(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = ll(e, r, t);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Xx(e) {
  var r = b(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) ul(e[t], r);
  return r;
}
function $x(e) {
  var r = b(24),
    t = Ye(e[0]);
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
  return et([r, Cx(e[1])]);
}
function zx(e) {
  var r = e[1].Tooltip,
    t = b(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var n = Ye(e[0]);
  t.write_shift(2, n.r),
    t.write_shift(2, n.r),
    t.write_shift(2, n.c),
    t.write_shift(2, n.c);
  for (var i = 0; i < r.length; ++i) t.write_shift(2, r.charCodeAt(i));
  return t.write_shift(2, 0), t;
}
function Kx(e) {
  return e || (e = b(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Yx(e, r, t) {
  if (!t.cellStyles) return ir(e, r);
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
function qx(e, r) {
  var t = b(12);
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
function Jx(e) {
  for (var r = b(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
function Zx(e, r, t) {
  var n = b(15);
  return xi(n, e, r), n.write_shift(8, t, 'f'), n;
}
function Qx(e, r, t) {
  var n = b(9);
  return xi(n, e, r), n.write_shift(2, t), n;
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
      r = N0({
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
        c = Vr(1);
      switch (l.type) {
        case 'base64':
          c = jt(ur(f));
          break;
        case 'binary':
          c = jt(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      kt(c, 0);
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
        F = l.codepage || 1252;
      u != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (F = e[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        p && (c.l += 36);
      for (
        var y = [],
          N = {},
          W = Math.min(c.length, u == 2 ? 521 : m - 10 - (d ? 264 : 0)),
          Y = p ? 32 : 11;
        c.l < W && c[c.l] != 13;

      )
        switch (
          ((N = {}),
          (N.name = ws.utils
            .decode(F, c.slice(c.l, c.l + Y))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += Y),
          (N.type = String.fromCharCode(c.read_shift(1))),
          u != 2 && !p && (N.offset = c.read_shift(4)),
          (N.len = c.read_shift(1)),
          u == 2 && (N.offset = c.read_shift(2)),
          (N.dec = c.read_shift(1)),
          N.name.length && y.push(N),
          u != 2 && (c.l += p ? 13 : 14),
          N.type)
        ) {
          case 'B':
            (!d || N.len != 8) &&
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
      var R = 0,
        U = 0;
      for (o[0] = [], U = 0; U != y.length; ++U) o[0][U] = y[U].name;
      for (; x-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += S;
          continue;
        }
        for (++c.l, o[++R] = [], U = 0, U = 0; U != y.length; ++U) {
          var P = c.slice(c.l, c.l + y[U].len);
          (c.l += y[U].len), kt(P, 0);
          var V = ws.utils.decode(F, P);
          switch (y[U].type) {
            case 'C':
              V.trim().length && (o[R][U] = V.replace(/\s+$/, ''));
              break;
            case 'D':
              V.length === 8
                ? (o[R][U] = new Date(
                    +V.slice(0, 4),
                    +V.slice(4, 6) - 1,
                    +V.slice(6, 8),
                  ))
                : (o[R][U] = V);
              break;
            case 'F':
              o[R][U] = parseFloat(V.trim());
              break;
            case '+':
            case 'I':
              o[R][U] = p
                ? P.read_shift(-4, 'i') ^ 2147483648
                : P.read_shift(4, 'i');
              break;
            case 'L':
              switch (V.trim().toUpperCase()) {
                case 'Y':
                case 'T':
                  o[R][U] = !0;
                  break;
                case 'N':
                case 'F':
                  o[R][U] = !1;
                  break;
                case '':
                case '?':
                  break;
                default:
                  throw new Error('DBF Unrecognized L:|' + V + '|');
              }
              break;
            case 'M':
              if (!h)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + u.toString(16),
                );
              o[R][U] =
                '##MEMO##' + (p ? parseInt(V.trim(), 10) : P.read_shift(4));
              break;
            case 'N':
              (V = V.replace(/\u0000/g, '').trim()),
                V && V != '.' && (o[R][U] = +V || 0);
              break;
            case '@':
              o[R][U] = new Date(P.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              o[R][U] = new Date(
                (P.read_shift(4) - 2440588) * 864e5 + P.read_shift(4),
              );
              break;
            case 'Y':
              o[R][U] =
                P.read_shift(4, 'i') / 1e4 +
                (P.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              o[R][U] = -P.read_shift(-8, 'f');
              break;
            case 'B':
              if (d && y[U].len == 8) {
                o[R][U] = P.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              P.l += y[U].len;
              break;
            case '0':
              if (y[U].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + y[U].type);
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
      return l && l.sheetRows && (o = o.slice(0, l.sheetRows)), (l.DBF = y), o;
    }
    function n(f, l) {
      var o = l || {};
      o.dateNF || (o.dateNF = 'yyyymmdd');
      var c = Tn(t(f, o), o);
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
        return $r(n(f, l), l);
      } catch (o) {
        if (l && l.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(f, l) {
      var o = l || {};
      if ((+o.codepage >= 0 && qn(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = wt(),
        u = ia(f, { header: 1, raw: !0, cellDates: !0 }),
        h = u[0],
        d = u.slice(1),
        p = f['!cols'] || [],
        x = 0,
        m = 0,
        S = 0,
        F = 1;
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
      var y = ke(f['!ref']),
        N = [],
        W = [],
        Y = [];
      for (x = 0; x <= y.e.c - y.s.c; ++x) {
        var R = '',
          U = '',
          P = 0,
          V = [];
        for (m = 0; m < d.length; ++m) d[m][x] != null && V.push(d[m][x]);
        if (V.length == 0 || h[x] == null) {
          N[x] = '?';
          continue;
        }
        for (m = 0; m < V.length; ++m) {
          switch (typeof V[m]) {
            case 'number':
              U = 'B';
              break;
            case 'string':
              U = 'C';
              break;
            case 'boolean':
              U = 'L';
              break;
            case 'object':
              U = V[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              U = 'C';
          }
          (P = Math.max(P, String(V[m]).length)), (R = R && R != U ? 'C' : U);
        }
        P > 250 && (P = 250),
          (U = ((p[x] || {}).DBF || {}).type),
          U == 'C' && p[x].DBF.len > P && (P = p[x].DBF.len),
          R == 'B' &&
            U == 'N' &&
            ((R = 'N'), (Y[x] = p[x].DBF.dec), (P = p[x].DBF.len)),
          (W[x] = R == 'C' || U == 'N' ? P : a[R] || 0),
          (F += W[x]),
          (N[x] = R);
      }
      var X = c.next(32);
      for (
        X.write_shift(4, 318902576),
          X.write_shift(4, d.length),
          X.write_shift(2, 296 + 32 * S),
          X.write_shift(2, F),
          x = 0;
        x < 4;
        ++x
      )
        X.write_shift(4, 0);
      for (
        X.write_shift(4, 0 | ((+r[ho] || 3) << 8)), x = 0, m = 0;
        x < h.length;
        ++x
      )
        if (h[x] != null) {
          var z = c.next(32),
            te = (h[x].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          z.write_shift(1, te, 'sbcs'),
            z.write_shift(1, N[x] == '?' ? 'C' : N[x], 'sbcs'),
            z.write_shift(4, m),
            z.write_shift(1, W[x] || a[N[x]] || 0),
            z.write_shift(1, Y[x] || 0),
            z.write_shift(1, 2),
            z.write_shift(4, 0),
            z.write_shift(1, 0),
            z.write_shift(4, 0),
            z.write_shift(4, 0),
            (m += W[x] || a[N[x]] || 0);
        }
      var ge = c.next(264);
      for (ge.write_shift(4, 13), x = 0; x < 65; ++x) ge.write_shift(4, 0);
      for (x = 0; x < d.length; ++x) {
        var ce = c.next(F);
        for (ce.write_shift(1, 0), m = 0; m < h.length; ++m)
          if (h[m] != null)
            switch (N[m]) {
              case 'L':
                ce.write_shift(1, d[x][m] == null ? 63 : d[x][m] ? 84 : 70);
                break;
              case 'B':
                ce.write_shift(8, d[x][m] || 0, 'f');
                break;
              case 'N':
                var He = '0';
                for (
                  typeof d[x][m] == 'number' &&
                    (He = d[x][m].toFixed(Y[m] || 0)),
                    S = 0;
                  S < W[m] - He.length;
                  ++S
                )
                  ce.write_shift(1, 32);
                ce.write_shift(1, He, 'sbcs');
                break;
              case 'D':
                d[x][m]
                  ? (ce.write_shift(
                      4,
                      ('0000' + d[x][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    ce.write_shift(
                      2,
                      ('00' + (d[x][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    ce.write_shift(
                      2,
                      ('00' + d[x][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : ce.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var De = String(d[x][m] != null ? d[x][m] : '').slice(0, W[m]);
                for (
                  ce.write_shift(1, De, 'sbcs'), S = 0;
                  S < W[m] - De.length;
                  ++S
                )
                  ce.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  td = (function () {
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
          nt(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      t = function (h, d) {
        var p = e[d];
        return typeof p == 'number' ? Ts(p) : p;
      },
      n = function (h, d, p) {
        var x = ((d.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return x == 59 ? h : Ts(x);
      };
    e['|'] = 254;
    function i(h, d) {
      switch (d.type) {
        case 'base64':
          return a(ur(h), d);
        case 'binary':
          return a(h, d);
        case 'buffer':
          return a(_e && Buffer.isBuffer(h) ? h.toString('binary') : oi(h), d);
        case 'array':
          return a(wa(h), d);
      }
      throw new Error('Unrecognized type ' + d.type);
    }
    function a(h, d) {
      var p = h.split(/[\n\r]+/),
        x = -1,
        m = -1,
        S = 0,
        F = 0,
        y = [],
        N = [],
        W = null,
        Y = {},
        R = [],
        U = [],
        P = [],
        V = 0,
        X;
      for (+d.codepage >= 0 && qn(+d.codepage); S !== p.length; ++S) {
        V = 0;
        var z = p[S].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(r, t),
          te = z
            .replace(/;;/g, '\0')
            .split(';')
            .map(function (C) {
              return C.replace(/\u0000/g, ';');
            }),
          ge = te[0],
          ce;
        if (z.length > 0)
          switch (ge) {
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
              te[1].charAt(0) == 'P' && N.push(z.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var He = !1,
                De = !1,
                Ct = !1,
                We = !1,
                lt = -1,
                ct = -1;
              for (F = 1; F < te.length; ++F)
                switch (te[F].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(te[F].slice(1)) - 1), (De = !0);
                    break;
                  case 'Y':
                    for (
                      x = parseInt(te[F].slice(1)) - 1,
                        De || (m = 0),
                        X = y.length;
                      X <= x;
                      ++X
                    )
                      y[X] = [];
                    break;
                  case 'K':
                    (ce = te[F].slice(1)),
                      ce.charAt(0) === '"'
                        ? (ce = ce.slice(1, ce.length - 1))
                        : ce === 'TRUE'
                          ? (ce = !0)
                          : ce === 'FALSE'
                            ? (ce = !1)
                            : isNaN(lr(ce))
                              ? isNaN(Zn(ce).getDate()) || (ce = vt(ce))
                              : ((ce = lr(ce)),
                                W !== null && yo(W) && (ce = Ro(ce))),
                      (He = !0);
                    break;
                  case 'E':
                    We = !0;
                    var A = Qd(te[F].slice(1), { r: x, c: m });
                    y[x][m] = [y[x][m], A];
                    break;
                  case 'S':
                    (Ct = !0), (y[x][m] = [y[x][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    lt = parseInt(te[F].slice(1)) - 1;
                    break;
                  case 'C':
                    ct = parseInt(te[F].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + z);
                }
              if (
                (He &&
                  (y[x][m] && y[x][m].length == 2
                    ? (y[x][m][0] = ce)
                    : (y[x][m] = ce),
                  (W = null)),
                Ct)
              ) {
                if (We)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var B = lt > -1 && y[lt][ct];
                if (!B || !B[1])
                  throw new Error('SYLK shared formula cannot find base');
                y[x][m][1] = ep(B[1], { r: x - lt, c: m - ct });
              }
              break;
            case 'F':
              var O = 0;
              for (F = 1; F < te.length; ++F)
                switch (te[F].charAt(0)) {
                  case 'X':
                    (m = parseInt(te[F].slice(1)) - 1), ++O;
                    break;
                  case 'Y':
                    for (
                      x = parseInt(te[F].slice(1)) - 1, X = y.length;
                      X <= x;
                      ++X
                    )
                      y[X] = [];
                    break;
                  case 'M':
                    V = parseInt(te[F].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    W = N[parseInt(te[F].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      P = te[F].slice(1).split(' '), X = parseInt(P[0], 10);
                      X <= parseInt(P[1], 10);
                      ++X
                    )
                      (V = parseInt(P[2], 10)),
                        (U[X - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                        V0(U[X - 1]);
                    break;
                  case 'C':
                    (m = parseInt(te[F].slice(1)) - 1), U[m] || (U[m] = {});
                    break;
                  case 'R':
                    (x = parseInt(te[F].slice(1)) - 1),
                      R[x] || (R[x] = {}),
                      V > 0
                        ? ((R[x].hpt = V), (R[x].hpx = vl(V)))
                        : V === 0 && (R[x].hidden = !0);
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + z);
                }
              O < 1 && (W = null);
              break;
            default:
              if (d && d.WTF) throw new Error('SYLK bad record ' + z);
          }
      }
      return (
        R.length > 0 && (Y['!rows'] = R),
        U.length > 0 && (Y['!cols'] = U),
        d && d.sheetRows && (y = y.slice(0, d.sheetRows)),
        [y, Y]
      );
    }
    function s(h, d) {
      var p = i(h, d),
        x = p[0],
        m = p[1],
        S = Tn(x, d);
      return (
        nt(m).forEach(function (F) {
          S[F] = m[F];
        }),
        S
      );
    }
    function f(h, d) {
      return $r(s(h, d), d);
    }
    function l(h, d, p, x) {
      var m = 'C;Y' + (p + 1) + ';X' + (x + 1) + ';K';
      switch (h.t) {
        case 'n':
          (m += h.v || 0), h.f && !h.F && (m += ';E' + j0(h.f, { r: p, c: x }));
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
          : (typeof p.width == 'number' && !p.wpx && (p.wpx = ea(p.width)),
            typeof p.wpx == 'number' && !p.wch && (p.wch = ta(p.wpx)),
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
            : p.hpx && (m += 'M' + 20 * ra(p.hpx) + ';'),
          m.length > 2 && h.push(m + 'R' + (x + 1));
      });
    }
    function u(h, d) {
      var p = ['ID;PWXL;N;E'],
        x = [],
        m = ke(h['!ref']),
        S,
        F = Array.isArray(h),
        y = `\r
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
      for (var N = m.s.r; N <= m.e.r; ++N)
        for (var W = m.s.c; W <= m.e.c; ++W) {
          var Y = ye({ r: N, c: W });
          (S = F ? (h[N] || [])[W] : h[Y]),
            !(!S || (S.v == null && (!S.f || S.F))) && x.push(l(S, h, N, W));
        }
      return p.join(y) + y + x.join(y) + y + 'E' + y;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: u };
  })(),
  rd = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return r(ur(a), s);
        case 'binary':
          return r(a, s);
        case 'buffer':
          return r(_e && Buffer.isBuffer(a) ? a.toString('binary') : oi(a), s);
        case 'array':
          return r(wa(a), s);
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
                  : isNaN(lr(p))
                    ? isNaN(Zn(p).getDate())
                      ? (u[l][o] = p)
                      : (u[l][o] = vt(p))
                    : (u[l][o] = lr(p)),
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
    function t(a, s) {
      return Tn(e(a, s), s);
    }
    function n(a, s) {
      return $r(t(a, s), s);
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
          c = ke(l['!ref']),
          u,
          h = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var d = c.s.r; d <= c.e.r; ++d) {
          s(o, -1, 0, 'BOT');
          for (var p = c.s.c; p <= c.e.c; ++p) {
            var x = ye({ r: d, c: p });
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
                u.w || (u.w = Sr(u.z || Ue[14], At(vt(u.v)))),
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
          F = o.join(S);
        return F;
      };
    })();
    return { to_workbook: n, to_sheet: t, from_sheet: i };
  })(),
  hl = (function () {
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
    function r(u) {
      return u.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n');
    }
    function t(u, h) {
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
        var F = d[m].trim().split(':');
        if (F[0] === 'cell') {
          var y = Ye(F[1]);
          if (S.length <= y.r)
            for (p = S.length; p <= y.r; ++p) S[p] || (S[p] = []);
          switch (((p = y.r), (x = y.c), F[2])) {
            case 't':
              S[p][x] = e(F[3]);
              break;
            case 'v':
              S[p][x] = +F[3];
              break;
            case 'vtf':
              var N = F[F.length - 1];
            case 'vtc':
              switch (F[3]) {
                case 'nl':
                  S[p][x] = !!+F[4];
                  break;
                default:
                  S[p][x] = +F[4];
                  break;
              }
              F[2] == 'vtf' && (S[p][x] = [S[p][x], N]);
          }
        }
      }
      return h && h.sheetRows && (S = S.slice(0, h.sheetRows)), S;
    }
    function n(u, h) {
      return Tn(t(u, h), h);
    }
    function i(u, h) {
      return $r(n(u, h), h);
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
          m = Lt(u['!ref']),
          S = Array.isArray(u),
          F = m.s.r;
        F <= m.e.r;
        ++F
      )
        for (var y = m.s.c; y <= m.e.c; ++y)
          if (
            ((x = ye({ r: F, c: y })),
            (p = S ? (u[F] || [])[y] : u[x]),
            !(!p || p.v == null || p.t === 'z'))
          ) {
            switch (((d = ['cell', x, 't']), p.t)) {
              case 's':
              case 'str':
                d.push(r(p.v));
                break;
              case 'n':
                p.f
                  ? ((d[2] = 'vtf'),
                    (d[3] = 'n'),
                    (d[4] = p.v),
                    (d[5] = r(p.f)))
                  : ((d[2] = 'v'), (d[3] = p.v));
                break;
              case 'b':
                (d[2] = 'vt' + (p.f ? 'f' : 'c')),
                  (d[3] = 'nl'),
                  (d[4] = p.v ? '1' : '0'),
                  (d[5] = r(p.f || (p.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var N = At(vt(p.v));
                (d[2] = 'vtc'),
                  (d[3] = 'nd'),
                  (d[4] = '' + N),
                  (d[5] = p.w || Sr(p.z || Ue[14], N));
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
              : isNaN(lr(c))
                ? isNaN(Zn(c).getDate())
                  ? (u[h][d] = c)
                  : (u[h][d] = vt(c))
                : (u[h][d] = lr(c)));
    }
    function r(c, u) {
      var h = u || {},
        d = [];
      if (!c || c.length === 0) return d;
      for (
        var p = c.split(/[\r\n]/), x = p.length - 1;
        x >= 0 && p[x].length === 0;

      )
        --x;
      for (var m = 10, S = 0, F = 0; F <= x; ++F)
        (S = p[F].indexOf(' ')),
          S == -1 ? (S = p[F].length) : S++,
          (m = Math.max(m, S));
      for (F = 0; F <= x; ++F) {
        d[F] = [];
        var y = 0;
        for (
          e(p[F].slice(0, m).trim(), d, F, y, h), y = 1;
          y <= (p[F].length - m) / 10 + 1;
          ++y
        )
          e(p[F].slice(m + (y - 1) * 10, m + y * 10).trim(), d, F, y, h);
      }
      return h.sheetRows && (d = d.slice(0, h.sheetRows)), d;
    }
    var t = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var u = {}, h = !1, d = 0, p = 0; d < c.length; ++d)
        (p = c.charCodeAt(d)) == 34
          ? (h = !h)
          : !h && p in t && (u[p] = (u[p] || 0) + 1);
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
        t[p.pop()[1]] || 44
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
        F = 0,
        y = 0,
        N = 0,
        W = d.charCodeAt(0),
        Y = !1,
        R = 0,
        U = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var P = h.dateNF != null ? g1(h.dateNF) : null;
      function V() {
        var X = c.slice(y, N),
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
            : tp(X)
              ? ((z.t = 'n'), (z.f = X.slice(1)))
              : ((z.t = 's'), (z.v = X));
        else if (X == 'TRUE') (z.t = 'b'), (z.v = !0);
        else if (X == 'FALSE') (z.t = 'b'), (z.v = !1);
        else if (!isNaN((F = lr(X))))
          (z.t = 'n'), h.cellText !== !1 && (z.w = X), (z.v = F);
        else if (!isNaN(Zn(X).getDate()) || (P && X.match(P))) {
          z.z = h.dateNF || Ue[14];
          var te = 0;
          P &&
            X.match(P) &&
            ((X = E1(X, h.dateNF, X.match(P) || [])), (te = 1)),
            h.cellDates
              ? ((z.t = 'd'), (z.v = vt(X, te)))
              : ((z.t = 'n'), (z.v = At(vt(X, te)))),
            h.cellText !== !1 &&
              (z.w = Sr(z.z, z.v instanceof Date ? At(z.v) : z.v)),
            h.cellNF || delete z.z;
        } else (z.t = 's'), (z.v = X);
        if (
          (z.t == 'z' ||
            (h.dense
              ? (p[m] || (p[m] = []), (p[m][S] = z))
              : (p[ye({ c: S, r: m })] = z)),
          (y = N + 1),
          (U = c.charCodeAt(y)),
          x.e.c < S && (x.e.c = S),
          x.e.r < m && (x.e.r = m),
          R == W)
        )
          ++S;
        else if (((S = 0), ++m, h.sheetRows && h.sheetRows <= m)) return !0;
      }
      e: for (; N < c.length; ++N)
        switch ((R = c.charCodeAt(N))) {
          case 34:
            U === 34 && (Y = !Y);
            break;
          case W:
          case 10:
          case 13:
            if (!Y && V()) break e;
            break;
        }
      return N - y > 0 && V(), (p['!ref'] = Ge(x)), p;
    }
    function s(c, u) {
      return !(u && u.PRN) ||
        u.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, u)
        : Tn(r(c, u), u);
    }
    function f(c, u) {
      var h = '',
        d = u.type == 'string' ? [0, 0, 0, 0] : p_(c, u);
      switch (u.type) {
        case 'base64':
          h = ur(c);
          break;
        case 'binary':
          h = c;
          break;
        case 'buffer':
          u.codepage == 65001
            ? (h = c.toString('utf8'))
            : (u.codepage,
              (h = _e && Buffer.isBuffer(c) ? c.toString('binary') : oi(c)));
          break;
        case 'array':
          h = wa(c);
          break;
        case 'string':
          h = c;
          break;
        default:
          throw new Error('Unrecognized type ' + u.type);
      }
      return (
        d[0] == 239 && d[1] == 187 && d[2] == 191
          ? (h = Wn(h.slice(3)))
          : u.type != 'string' && u.type != 'buffer' && u.codepage == 65001
            ? (h = Wn(h))
            : u.type == 'binary',
        h.slice(0, 19) == 'socialcalc:version:'
          ? hl.to_sheet(u.type == 'string' ? h : Wn(h), u)
          : s(h, u)
      );
    }
    function l(c, u) {
      return $r(f(c, u), u);
    }
    function o(c) {
      for (
        var u = [], h = ke(c['!ref']), d, p = Array.isArray(c), x = h.s.r;
        x <= h.e.r;
        ++x
      ) {
        for (var m = [], S = h.s.c; S <= h.e.c; ++S) {
          var F = ye({ r: x, c: S });
          if (((d = p ? (c[x] || [])[S] : c[F]), !d || d.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var y = (d.w || (hr(d), d.w) || '').slice(0, 10);
            y.length < 10;

          )
            y += ' ';
          m.push(y + (S === 0 ? ' ' : ''));
        }
        u.push(m.join(''));
      }
      return u.join(`
`);
    }
    return { to_workbook: l, to_sheet: f, from_sheet: o };
  })(),
  Qs = (function () {
    function e(A, B, O) {
      if (A) {
        kt(A, A.l || 0);
        for (var C = O.Enum || lt; A.l < A.length; ) {
          var G = A.read_shift(2),
            fe = C[G] || C[65535],
            oe = A.read_shift(2),
            se = A.l + oe,
            ee = fe.f && fe.f(A, oe, O);
          if (((A.l = se), B(ee, fe, G))) return;
        }
      }
    }
    function r(A, B) {
      switch (B.type) {
        case 'base64':
          return t(jt(ur(A)), B);
        case 'binary':
          return t(jt(A), B);
        case 'buffer':
        case 'array':
          return t(A, B);
      }
      throw 'Unsupported type ' + B.type;
    }
    function t(A, B) {
      if (!A) return A;
      var O = B || {},
        C = O.dense ? [] : {},
        G = 'Sheet1',
        fe = '',
        oe = 0,
        se = {},
        ee = [],
        Te = [],
        ie = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        ue = O.sheetRows || 0;
      if (
        A[2] == 0 &&
        (A[3] == 8 || A[3] == 9) &&
        A.length >= 16 &&
        A[14] == 5 &&
        A[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (A[2] == 2)
        (O.Enum = lt),
          e(
            A,
            function (ne, it, Ht) {
              switch (Ht) {
                case 0:
                  (O.vers = ne), ne >= 4096 && (O.qpro = !0);
                  break;
                case 6:
                  ie = ne;
                  break;
                case 204:
                  ne && (fe = ne);
                  break;
                case 222:
                  fe = ne;
                  break;
                case 15:
                case 51:
                  O.qpro || (ne[1].v = ne[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Ht == 14 &&
                    (ne[2] & 112) == 112 &&
                    (ne[2] & 15) > 1 &&
                    (ne[2] & 15) < 15 &&
                    ((ne[1].z = O.dateNF || Ue[14]),
                    O.cellDates && ((ne[1].t = 'd'), (ne[1].v = Ro(ne[1].v)))),
                    O.qpro &&
                      ne[3] > oe &&
                      ((C['!ref'] = Ge(ie)),
                      (se[G] = C),
                      ee.push(G),
                      (C = O.dense ? [] : {}),
                      (ie = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (oe = ne[3]),
                      (G = fe || 'Sheet' + (oe + 1)),
                      (fe = ''));
                  var mt = O.dense ? (C[ne[0].r] || [])[ne[0].c] : C[ye(ne[0])];
                  if (mt) {
                    (mt.t = ne[1].t),
                      (mt.v = ne[1].v),
                      ne[1].z != null && (mt.z = ne[1].z),
                      ne[1].f != null && (mt.f = ne[1].f);
                    break;
                  }
                  O.dense
                    ? (C[ne[0].r] || (C[ne[0].r] = []),
                      (C[ne[0].r][ne[0].c] = ne[1]))
                    : (C[ye(ne[0])] = ne[1]);
                  break;
              }
            },
            O,
          );
      else if (A[2] == 26 || A[2] == 14)
        (O.Enum = ct),
          A[2] == 14 && ((O.qpro = !0), (A.l = 0)),
          e(
            A,
            function (ne, it, Ht) {
              switch (Ht) {
                case 204:
                  G = ne;
                  break;
                case 22:
                  ne[1].v = ne[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (ne[3] > oe &&
                      ((C['!ref'] = Ge(ie)),
                      (se[G] = C),
                      ee.push(G),
                      (C = O.dense ? [] : {}),
                      (ie = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (oe = ne[3]),
                      (G = 'Sheet' + (oe + 1))),
                    ue > 0 && ne[0].r >= ue)
                  )
                    break;
                  O.dense
                    ? (C[ne[0].r] || (C[ne[0].r] = []),
                      (C[ne[0].r][ne[0].c] = ne[1]))
                    : (C[ye(ne[0])] = ne[1]),
                    ie.e.c < ne[0].c && (ie.e.c = ne[0].c),
                    ie.e.r < ne[0].r && (ie.e.r = ne[0].r);
                  break;
                case 27:
                  ne[14e3] && (Te[ne[14e3][0]] = ne[14e3][1]);
                  break;
                case 1537:
                  (Te[ne[0]] = ne[1]), ne[0] == oe && (G = ne[1]);
                  break;
              }
            },
            O,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + A[2]);
      if (
        ((C['!ref'] = Ge(ie)), (se[fe || G] = C), ee.push(fe || G), !Te.length)
      )
        return { SheetNames: ee, Sheets: se };
      for (var le = {}, Ee = [], xe = 0; xe < Te.length; ++xe)
        se[ee[xe]]
          ? (Ee.push(Te[xe] || ee[xe]), (le[Te[xe]] = se[Te[xe]] || se[ee[xe]]))
          : (Ee.push(Te[xe]), (le[Te[xe]] = { '!ref': 'A1' }));
      return { SheetNames: Ee, Sheets: le };
    }
    function n(A, B) {
      var O = B || {};
      if ((+O.codepage >= 0 && qn(+O.codepage), O.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var C = wt(),
        G = ke(A['!ref']),
        fe = Array.isArray(A),
        oe = [];
      Z(C, 0, a(1030)), Z(C, 6, l(G));
      for (var se = Math.min(G.e.r, 8191), ee = G.s.r; ee <= se; ++ee)
        for (var Te = rt(ee), ie = G.s.c; ie <= G.e.c; ++ie) {
          ee === G.s.r && (oe[ie] = ft(ie));
          var ue = oe[ie] + Te,
            le = fe ? (A[ee] || [])[ie] : A[ue];
          if (!(!le || le.t == 'z'))
            if (le.t == 'n')
              (le.v | 0) == le.v && le.v >= -32768 && le.v <= 32767
                ? Z(C, 13, d(ee, ie, le.v))
                : Z(C, 14, x(ee, ie, le.v));
            else {
              var Ee = hr(le);
              Z(C, 15, u(ee, ie, Ee.slice(0, 239)));
            }
        }
      return Z(C, 1), C.end();
    }
    function i(A, B) {
      var O = B || {};
      if ((+O.codepage >= 0 && qn(+O.codepage), O.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var C = wt();
      Z(C, 0, s(A));
      for (var G = 0, fe = 0; G < A.SheetNames.length; ++G)
        (A.Sheets[A.SheetNames[G]] || {})['!ref'] &&
          Z(C, 27, We(A.SheetNames[G], fe++));
      var oe = 0;
      for (G = 0; G < A.SheetNames.length; ++G) {
        var se = A.Sheets[A.SheetNames[G]];
        if (!(!se || !se['!ref'])) {
          for (
            var ee = ke(se['!ref']),
              Te = Array.isArray(se),
              ie = [],
              ue = Math.min(ee.e.r, 8191),
              le = ee.s.r;
            le <= ue;
            ++le
          )
            for (var Ee = rt(le), xe = ee.s.c; xe <= ee.e.c; ++xe) {
              le === ee.s.r && (ie[xe] = ft(xe));
              var ne = ie[xe] + Ee,
                it = Te ? (se[le] || [])[xe] : se[ne];
              if (!(!it || it.t == 'z'))
                if (it.t == 'n') Z(C, 23, V(le, xe, oe, it.v));
                else {
                  var Ht = hr(it);
                  Z(C, 22, R(le, xe, oe, Ht.slice(0, 239)));
                }
            }
          ++oe;
        }
      }
      return Z(C, 1), C.end();
    }
    function a(A) {
      var B = b(2);
      return B.write_shift(2, A), B;
    }
    function s(A) {
      var B = b(26);
      B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
      for (var O = 0, C = 0, G = 0, fe = 0; fe < A.SheetNames.length; ++fe) {
        var oe = A.SheetNames[fe],
          se = A.Sheets[oe];
        if (!(!se || !se['!ref'])) {
          ++G;
          var ee = Lt(se['!ref']);
          O < ee.e.r && (O = ee.e.r), C < ee.e.c && (C = ee.e.c);
        }
      }
      return (
        O > 8191 && (O = 8191),
        B.write_shift(2, O),
        B.write_shift(1, G),
        B.write_shift(1, C),
        B.write_shift(2, 0),
        B.write_shift(2, 0),
        B.write_shift(1, 1),
        B.write_shift(1, 2),
        B.write_shift(4, 0),
        B.write_shift(4, 0),
        B
      );
    }
    function f(A, B, O) {
      var C = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return B == 8 && O.qpro
        ? ((C.s.c = A.read_shift(1)),
          A.l++,
          (C.s.r = A.read_shift(2)),
          (C.e.c = A.read_shift(1)),
          A.l++,
          (C.e.r = A.read_shift(2)),
          C)
        : ((C.s.c = A.read_shift(2)),
          (C.s.r = A.read_shift(2)),
          B == 12 && O.qpro && (A.l += 2),
          (C.e.c = A.read_shift(2)),
          (C.e.r = A.read_shift(2)),
          B == 12 && O.qpro && (A.l += 2),
          C.s.c == 65535 && (C.s.c = C.e.c = C.s.r = C.e.r = 0),
          C);
    }
    function l(A) {
      var B = b(8);
      return (
        B.write_shift(2, A.s.c),
        B.write_shift(2, A.s.r),
        B.write_shift(2, A.e.c),
        B.write_shift(2, A.e.r),
        B
      );
    }
    function o(A, B, O) {
      var C = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        O.qpro && O.vers != 20768
          ? ((C[0].c = A.read_shift(1)),
            (C[3] = A.read_shift(1)),
            (C[0].r = A.read_shift(2)),
            (A.l += 2))
          : ((C[2] = A.read_shift(1)),
            (C[0].c = A.read_shift(2)),
            (C[0].r = A.read_shift(2))),
        C
      );
    }
    function c(A, B, O) {
      var C = A.l + B,
        G = o(A, B, O);
      if (((G[1].t = 's'), O.vers == 20768)) {
        A.l++;
        var fe = A.read_shift(1);
        return (G[1].v = A.read_shift(fe, 'utf8')), G;
      }
      return O.qpro && A.l++, (G[1].v = A.read_shift(C - A.l, 'cstr')), G;
    }
    function u(A, B, O) {
      var C = b(7 + O.length);
      C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(1, 39);
      for (var G = 0; G < C.length; ++G) {
        var fe = O.charCodeAt(G);
        C.write_shift(1, fe >= 128 ? 95 : fe);
      }
      return C.write_shift(1, 0), C;
    }
    function h(A, B, O) {
      var C = o(A, B, O);
      return (C[1].v = A.read_shift(2, 'i')), C;
    }
    function d(A, B, O) {
      var C = b(7);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(2, O, 'i'),
        C
      );
    }
    function p(A, B, O) {
      var C = o(A, B, O);
      return (C[1].v = A.read_shift(8, 'f')), C;
    }
    function x(A, B, O) {
      var C = b(13);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(8, O, 'f'),
        C
      );
    }
    function m(A, B, O) {
      var C = A.l + B,
        G = o(A, B, O);
      if (((G[1].v = A.read_shift(8, 'f')), O.qpro)) A.l = C;
      else {
        var fe = A.read_shift(2);
        N(A.slice(A.l, A.l + fe), G), (A.l += fe);
      }
      return G;
    }
    function S(A, B, O) {
      var C = B & 32768;
      return (
        (B &= -32769),
        (B = (C ? A : 0) + (B >= 8192 ? B - 16384 : B)),
        (C ? '' : '$') + (O ? ft(B) : rt(B))
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
      y = [
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
    function N(A, B) {
      kt(A, 0);
      for (
        var O = [], C = 0, G = '', fe = '', oe = '', se = '';
        A.l < A.length;

      ) {
        var ee = A[A.l++];
        switch (ee) {
          case 0:
            O.push(A.read_shift(8, 'f'));
            break;
          case 1:
            (fe = S(B[0].c, A.read_shift(2), !0)),
              (G = S(B[0].r, A.read_shift(2), !1)),
              O.push(fe + G);
            break;
          case 2:
            {
              var Te = S(B[0].c, A.read_shift(2), !0),
                ie = S(B[0].r, A.read_shift(2), !1);
              (fe = S(B[0].c, A.read_shift(2), !0)),
                (G = S(B[0].r, A.read_shift(2), !1)),
                O.push(Te + ie + ':' + fe + G);
            }
            break;
          case 3:
            if (A.l < A.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            O.push('(' + O.pop() + ')');
            break;
          case 5:
            O.push(A.read_shift(2));
            break;
          case 6:
            {
              for (var ue = ''; (ee = A[A.l++]); )
                ue += String.fromCharCode(ee);
              O.push('"' + ue.replace(/"/g, '""') + '"');
            }
            break;
          case 8:
            O.push('-' + O.pop());
            break;
          case 23:
            O.push('+' + O.pop());
            break;
          case 22:
            O.push('NOT(' + O.pop() + ')');
            break;
          case 20:
          case 21:
            (se = O.pop()),
              (oe = O.pop()),
              O.push(['AND', 'OR'][ee - 20] + '(' + oe + ',' + se + ')');
            break;
          default:
            if (ee < 32 && y[ee])
              (se = O.pop()), (oe = O.pop()), O.push(oe + y[ee] + se);
            else if (F[ee]) {
              if (((C = F[ee][1]), C == 69 && (C = A[A.l++]), C > O.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    ee.toString(16) +
                    ':|' +
                    O.join('|') +
                    '|',
                );
                return;
              }
              var le = O.slice(-C);
              (O.length -= C), O.push(F[ee][0] + '(' + le.join(',') + ')');
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
      O.length == 1
        ? (B[1].f = '' + O[0])
        : console.error('WK1 bad formula parse |' + O.join('|') + '|');
    }
    function W(A) {
      var B = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (B[0].r = A.read_shift(2)), (B[3] = A[A.l++]), (B[0].c = A[A.l++]), B
      );
    }
    function Y(A, B) {
      var O = W(A);
      return (O[1].t = 's'), (O[1].v = A.read_shift(B - 4, 'cstr')), O;
    }
    function R(A, B, O, C) {
      var G = b(6 + C.length);
      G.write_shift(2, A),
        G.write_shift(1, O),
        G.write_shift(1, B),
        G.write_shift(1, 39);
      for (var fe = 0; fe < C.length; ++fe) {
        var oe = C.charCodeAt(fe);
        G.write_shift(1, oe >= 128 ? 95 : oe);
      }
      return G.write_shift(1, 0), G;
    }
    function U(A, B) {
      var O = W(A);
      O[1].v = A.read_shift(2);
      var C = O[1].v >> 1;
      if (O[1].v & 1)
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
      return (O[1].v = C), O;
    }
    function P(A, B) {
      var O = W(A),
        C = A.read_shift(4),
        G = A.read_shift(4),
        fe = A.read_shift(2);
      if (fe == 65535)
        return (
          C === 0 && G === 3221225472
            ? ((O[1].t = 'e'), (O[1].v = 15))
            : C === 0 && G === 3489660928
              ? ((O[1].t = 'e'), (O[1].v = 42))
              : (O[1].v = 0),
          O
        );
      var oe = fe & 32768;
      return (
        (fe = (fe & 32767) - 16446),
        (O[1].v =
          (1 - oe * 2) * (G * Math.pow(2, fe + 32) + C * Math.pow(2, fe))),
        O
      );
    }
    function V(A, B, O, C) {
      var G = b(14);
      if (
        (G.write_shift(2, A), G.write_shift(1, O), G.write_shift(1, B), C == 0)
      )
        return (
          G.write_shift(4, 0), G.write_shift(4, 0), G.write_shift(2, 65535), G
        );
      var fe = 0,
        oe = 0,
        se = 0,
        ee = 0;
      return (
        C < 0 && ((fe = 1), (C = -C)),
        (oe = Math.log2(C) | 0),
        (C /= Math.pow(2, oe - 31)),
        (ee = C >>> 0),
        (ee & 2147483648) == 0 && ((C /= 2), ++oe, (ee = C >>> 0)),
        (C -= ee),
        (ee |= 2147483648),
        (ee >>>= 0),
        (C *= Math.pow(2, 32)),
        (se = C >>> 0),
        G.write_shift(4, se),
        G.write_shift(4, ee),
        (oe += 16383 + (fe ? 32768 : 0)),
        G.write_shift(2, oe),
        G
      );
    }
    function X(A, B) {
      var O = P(A);
      return (A.l += B - 14), O;
    }
    function z(A, B) {
      var O = W(A),
        C = A.read_shift(4);
      return (O[1].v = C >> 6), O;
    }
    function te(A, B) {
      var O = W(A),
        C = A.read_shift(8, 'f');
      return (O[1].v = C), O;
    }
    function ge(A, B) {
      var O = te(A);
      return (A.l += B - 10), O;
    }
    function ce(A, B) {
      return A[A.l + B - 1] == 0 ? A.read_shift(B, 'cstr') : '';
    }
    function He(A, B) {
      var O = A[A.l++];
      O > B - 1 && (O = B - 1);
      for (var C = ''; C.length < O; ) C += String.fromCharCode(A[A.l++]);
      return C;
    }
    function De(A, B, O) {
      if (!(!O.qpro || B < 21)) {
        var C = A.read_shift(1);
        (A.l += 17), (A.l += 1), (A.l += 2);
        var G = A.read_shift(B - 21, 'cstr');
        return [C, G];
      }
    }
    function Ct(A, B) {
      for (var O = {}, C = A.l + B; A.l < C; ) {
        var G = A.read_shift(2);
        if (G == 14e3) {
          for (O[G] = [0, ''], O[G][0] = A.read_shift(2); A[A.l]; )
            (O[G][1] += String.fromCharCode(A[A.l])), A.l++;
          A.l++;
        }
      }
      return O;
    }
    function We(A, B) {
      var O = b(5 + A.length);
      O.write_shift(2, 14e3), O.write_shift(2, B);
      for (var C = 0; C < A.length; ++C) {
        var G = A.charCodeAt(C);
        O[O.l++] = G > 127 ? 95 : G;
      }
      return (O[O.l++] = 0), O;
    }
    var lt = {
        0: { n: 'BOF', f: fl },
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
        204: { n: 'SHEETNAMECS', f: ce },
        222: { n: 'SHEETNAMELP', f: He },
        65535: { n: '' },
      },
      ct = {
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
        22: { n: 'LABEL16', f: Y },
        23: { n: 'NUMBER17', f: P },
        24: { n: 'NUMBER18', f: U },
        25: { n: 'FORMULA19', f: X },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: Ct },
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
        39: { n: 'NUMBER27', f: te },
        40: { n: 'FORMULA28', f: ge },
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
        204: { n: 'SHEETNAMECS', f: ce },
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
        1537: { n: 'SHEETINFOQP', f: De },
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
  id = /^\s|\s$|[\t\n\r]/;
function xl(e, r) {
  if (!r.bookSST) return '';
  var t = [je];
  t[t.length] = J('sst', null, {
    xmlns: En[0],
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
          (a += '>' + Ae(i.t) + '</t>')),
        (a += '</si>'),
        (t[t.length] = a);
    }
  return (
    t.length > 2 &&
      ((t[t.length] = '</sst>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function ad(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function sd(e, r) {
  return (
    r || (r = b(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r
  );
}
var fd = J1;
function od(e) {
  var r = wt();
  j(r, 159, sd(e));
  for (var t = 0; t < e.length; ++t) j(r, 19, fd(e[t]));
  return j(r, 160), r.end();
}
function ld(e) {
  for (var r = [], t = e.split(''), n = 0; n < t.length; ++n)
    r[n] = t[n].charCodeAt(0);
  return r;
}
function dl(e) {
  var r = 0,
    t,
    n = ld(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (t = Vr(i), t[0] = n.length, a = 1; a != i; ++a) t[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = t[a]),
      (f = (r & 16384) === 0 ? 0 : 1),
      (l = (r << 1) & 32767),
      (o = f | l),
      (r = o ^ s);
  return r ^ 52811;
}
var cd = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return r(ur(i), a);
      case 'binary':
        return r(i, a);
      case 'buffer':
        return r(_e && Buffer.isBuffer(i) ? i.toString('binary') : oi(i), a);
      case 'array':
        return r(wa(i), a);
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
      l.forEach(function (c, u) {
        Array.isArray(f) && (f[u] = []);
        for (var h = /\\\w+\b/g, d = 0, p, x = -1; (p = h.exec(c)); ) {
          switch (p[0]) {
            case '\\cell':
              var m = c.slice(d, h.lastIndex - p[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++x, m.length)) {
                var S = { v: m, t: 's' };
                Array.isArray(f) ? (f[u][x] = S) : (f[ye({ r: u, c: x })] = S);
              }
              break;
          }
          d = h.lastIndex;
        }
        x > o.e.c && (o.e.c = x);
      }),
      (f['!ref'] = Ge(o)),
      f
    );
  }
  function t(i, a) {
    return $r(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = ke(i['!ref']),
        f,
        l = Array.isArray(i),
        o = s.s.r;
      o <= s.e.r;
      ++o
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var u = ye({ r: o, c });
        (f = l ? (i[o] || [])[c] : i[u]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (a.push(' ' + (f.w || (hr(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: t, to_sheet: e, from_sheet: n };
})();
function ef(e) {
  for (var r = 0, t = 1; r != 3; ++r)
    t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
var ud = 6,
  cr = ud;
function ea(e) {
  return Math.floor((e + Math.round(128 / cr) / 256) * cr);
}
function ta(e) {
  return Math.floor(((e - 5) / cr) * 100 + 0.5) / 100;
}
function u0(e) {
  return Math.round(((e * cr + 5) / cr) * 256) / 256;
}
function V0(e) {
  e.width
    ? ((e.wpx = ea(e.width)), (e.wch = ta(e.wpx)), (e.MDW = cr))
    : e.wpx
      ? ((e.wch = ta(e.wpx)), (e.width = u0(e.wch)), (e.MDW = cr))
      : typeof e.wch == 'number' &&
        ((e.width = u0(e.wch)), (e.wpx = ea(e.width)), (e.MDW = cr)),
    e.customWidth && delete e.customWidth;
}
var hd = 96,
  pl = hd;
function ra(e) {
  return (e * 96) / pl;
}
function vl(e) {
  return (e * pl) / 96;
}
function xd(e) {
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
            formatCode: Ae(e[n]),
          }));
    }),
    r.length === 1
      ? ''
      : ((r[r.length] = '</numFmts>'),
        (r[0] = J('numFmts', null, { count: r.length - 2 }).replace('/>', '>')),
        r.join(''))
  );
}
function dd(e) {
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
function ml(e, r) {
  var t = [je, J('styleSheet', null, { xmlns: En[0], 'xmlns:vt': Ke.vt })],
    n;
  return (
    e.SSF && (n = xd(e.SSF)) != null && (t[t.length] = n),
    (t[t.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (t[t.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (t[t.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (t[t.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = dd(r.cellXfs)) && (t[t.length] = n),
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
function pd(e, r) {
  var t = e.read_shift(2),
    n = ot(e);
  return [t, n];
}
function vd(e, r, t) {
  t || (t = b(6 + 4 * r.length)), t.write_shift(2, e), qe(r, t);
  var n = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), n;
}
function md(e, r, t) {
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
  return (n.name = ot(e)), n;
}
function _d(e, r) {
  r || (r = b(25 + 4 * 32)),
    r.write_shift(2, e.sz * 20),
    ax(e, r),
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
    Zi(e.color, r);
  var n = 0;
  return (
    (n = 2),
    r.write_shift(1, n),
    qe(e.name, r),
    r.length > r.l ? r.slice(0, r.l) : r
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
  $a,
  Ed = ir;
function tf(e, r) {
  r || (r = b(4 * 3 + 8 * 7 + 16 * 1)), $a || ($a = N0(gd));
  var t = $a[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var n = 0;
  if (t != 40)
    for (Zi({ auto: 1 }, r), Zi({ auto: 1 }, r); n < 12; ++n)
      r.write_shift(4, 0);
  else {
    for (; n < 4; ++n) r.write_shift(4, 0);
    for (; n < 12; ++n) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function Td(e, r) {
  var t = e.l + r,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = t), { ixfe: n, numFmtId: i };
}
function _l(e, r, t) {
  t || (t = b(16)),
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
function Ln(e, r) {
  return (
    r || (r = b(10)),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var wd = ir;
function Sd(e, r) {
  return (
    r || (r = b(51)),
    r.write_shift(1, 0),
    Ln(null, r),
    Ln(null, r),
    Ln(null, r),
    Ln(null, r),
    Ln(null, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Ad(e, r) {
  return (
    r || (r = b(12 + 4 * 10)),
    r.write_shift(4, e.xfId),
    r.write_shift(2, 1),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    Ji(e.name || '', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function yd(e, r, t) {
  var n = b(2052);
  return (
    n.write_shift(4, e),
    Ji(r, n),
    Ji(t, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Fd(e, r) {
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
        (j(e, 615, $t(t)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            r[i] != null && j(e, 44, vd(i, r[i]));
        }),
        j(e, 616));
  }
}
function Cd(e) {
  var r = 1;
  j(e, 611, $t(r)),
    j(e, 43, _d({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    j(e, 612);
}
function Od(e) {
  var r = 2;
  j(e, 603, $t(r)),
    j(e, 45, tf({ patternType: 'none' })),
    j(e, 45, tf({ patternType: 'gray125' })),
    j(e, 604);
}
function Rd(e) {
  var r = 1;
  j(e, 613, $t(r)), j(e, 46, Sd()), j(e, 614);
}
function Nd(e) {
  var r = 1;
  j(e, 626, $t(r)), j(e, 47, _l({ numFmtId: 0 }, 65535)), j(e, 627);
}
function kd(e, r) {
  j(e, 617, $t(r.length)),
    r.forEach(function (t) {
      j(e, 47, _l(t, 0));
    }),
    j(e, 618);
}
function Dd(e) {
  var r = 1;
  j(e, 619, $t(r)), j(e, 48, Ad({ xfId: 0, name: 'Normal' })), j(e, 620);
}
function Id(e) {
  var r = 0;
  j(e, 505, $t(r)), j(e, 506);
}
function Pd(e) {
  var r = 0;
  j(e, 508, yd(r, 'TableStyleMedium9', 'PivotStyleMedium4')), j(e, 509);
}
function Ld(e, r) {
  var t = wt();
  return (
    j(t, 278),
    Fd(t, e.SSF),
    Cd(t),
    Od(t),
    Rd(t),
    Nd(t),
    kd(t, r.cellXfs),
    Dd(t),
    Id(t),
    Pd(t),
    j(t, 279),
    t.end()
  );
}
function gl(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var t = [je];
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
function Bd(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: ot(e) };
}
function Md(e) {
  var r = b(12 + 2 * e.name.length);
  return (
    r.write_shift(4, e.flags),
    r.write_shift(4, e.version),
    qe(e.name, r),
    r.slice(0, r.l)
  );
}
function bd(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; )
    r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function Ud(e) {
  var r = b(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t)
    r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Hd(e, r) {
  var t = b(8 + 2 * r.length);
  return t.write_shift(4, e), qe(r, t), t.slice(0, t.l);
}
function Wd(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function Vd(e, r) {
  var t = b(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Gd() {
  var e = wt();
  return (
    j(e, 332),
    j(e, 334, $t(1)),
    j(e, 335, Md({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    j(e, 336),
    j(e, 339, Hd(1, 'XLDAPR')),
    j(e, 52),
    j(e, 35, $t(514)),
    j(e, 4096, $t(0)),
    j(e, 4097, bt(1)),
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
function El() {
  var e = [je];
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
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  (t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (r.r = ye(t));
  var n = e.read_shift(1);
  return n & 2 && (r.l = '1'), n & 8 && (r.a = '1'), r;
}
var ln = 1024;
function Tl(e, r) {
  for (
    var t = [21600, 21600],
      n = ['m0,0l0', t[1], t[0], t[1], t[0], '0xe'].join(','),
      i = [
        J('xml', null, {
          'xmlns:v': Dt.v,
          'xmlns:o': Dt.o,
          'xmlns:x': Dt.x,
          'xmlns:mv': Dt.mv,
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
    ln < e * 1e3;

  )
    ln += 1e3;
  return (
    r.forEach(function (a) {
      var s = Ye(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? J('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = J('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++ln,
        (i = i.concat([
          '<v:shape' +
            ei({
              id: '_x0000_s' + ln,
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
          tt(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          tt('x:AutoFill', 'False'),
          tt('x:Row', String(s.r)),
          tt('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function wl(e) {
  var r = [je, J('comments', null, { xmlns: En[0] })],
    t = [];
  return (
    r.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = Ae(i.a);
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
              l.a && (i = t.indexOf(Ae(l.a))), a.push(l.t || '');
            }),
        r.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        r.push(tt('t', Ae(a[0] || '')));
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
        r.push(tt('t', Ae(s)));
      }
      r.push('</text></comment>');
    }),
    r.push('</commentList>'),
    r.length > 2 &&
      ((r[r.length] = '</comments>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Xd(e, r, t) {
  var n = [
    je,
    J('ThreadedComments', null, { xmlns: Ke.TCMNT }).replace(/[\/]>/, '>'),
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
          n.push(J('threadedComment', tt('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function $d(e) {
  var r = [
    je,
    J('personList', null, { xmlns: Ke.TCMNT, 'xmlns:x': En[0] }).replace(
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
function zd(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = qr(e);
  return (r.rfx = t.s), (r.ref = ye(t.s)), (e.l += 16), r;
}
function Kd(e, r) {
  return (
    r == null && (r = b(36)),
    r.write_shift(4, e[1].iauthor),
    wn(e[0], r),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var Yd = ot;
function qd(e) {
  return qe(e.slice(0, 54));
}
function Jd(e) {
  var r = wt(),
    t = [];
  return (
    j(r, 628),
    j(r, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        t.indexOf(i.a) > -1 || (t.push(i.a.slice(0, 54)), j(r, 632, qd(i.a)));
      });
    }),
    j(r, 631),
    j(r, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = t.indexOf(i.a);
        var a = { s: Ye(n[0]), e: Ye(n[0]) };
        j(r, 635, Kd([a, i])),
          i.t && i.t.length > 0 && j(r, 637, Q1(i)),
          j(r, 636),
          delete i.iauthor;
      });
    }),
    j(r, 634),
    j(r, 629),
    r.end()
  );
}
function Zd(e, r) {
  r.FullPaths.forEach(function (t, n) {
    if (n != 0) {
      var i = t.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Fe.utils.cfb_add(e, i, r.FileIndex[n].content);
    }
  });
}
var Sl = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  Qd = (function () {
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
        i + (f ? '' : '$') + ft(c) + (l ? '' : '$') + rt(o)
      );
    }
    return function (i, a) {
      return (r = a), i.replace(e, t);
    };
  })(),
  G0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  j0 = (function () {
    return function (r, t) {
      return r.replace(G0, function (n, i, a, s, f, l) {
        var o = M0(s) - (a ? 0 : t.c),
          c = B0(l) - (f ? 0 : t.r),
          u = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          h = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + u + 'C' + h;
      });
    };
  })();
function ep(e, r) {
  return e.replace(G0, function (t, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : ft(M0(a) + r.c)) +
      (s == '$' ? s + f : rt(B0(f) + r.r))
    );
  });
}
function tp(e) {
  return e.length != 1;
}
function Ve(e) {
  e.l += 1;
}
function Ar(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
}
function Al(e, r, t) {
  var n = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return yl(e);
    t.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n),
    a = e.read_shift(n),
    s = Ar(e),
    f = Ar(e);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: f[0], cRel: f[1], rRel: f[2] },
  };
}
function yl(e) {
  var r = Ar(e),
    t = Ar(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: r[0], c: n, cRel: r[1], rRel: r[2] },
    e: { r: t[0], c: i, cRel: t[1], rRel: t[2] },
  };
}
function rp(e, r, t) {
  if (t.biff < 8) return yl(e);
  var n = e.read_shift(t.biff == 12 ? 4 : 2),
    i = e.read_shift(t.biff == 12 ? 4 : 2),
    a = Ar(e),
    s = Ar(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Fl(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return np(e);
  var n = e.read_shift(t && t.biff == 12 ? 4 : 2),
    i = Ar(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function np(e) {
  var r = Ar(e),
    t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function ip(e) {
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
function ap(e, r, t) {
  var n = t && t.biff ? t.biff : 8;
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
function fp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = Al(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [n, i];
}
function op(e, r, t) {
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
  var s = Al(e, a, t);
  return [n, i, s];
}
function lp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8), [n];
}
function cp(e, r, t) {
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
function up(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = rp(e, r - 1, t);
  return [n, i];
}
function hp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7), [n];
}
function rf(e) {
  var r = e[e.l + 1] & 1,
    t = 1;
  return (e.l += 4), [r, t];
}
function xp(e, r, t) {
  e.l += 2;
  for (
    var n = e.read_shift(t && t.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return i;
}
function dp(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function pp(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function vp(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [r, e.read_shift(2)];
}
function mp(e, r, t) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += t && t.biff == 2 ? 3 : 4), [n];
}
function Cl(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1);
  return [r, t];
}
function _p(e) {
  return e.read_shift(2), Cl(e);
}
function gp(e) {
  return e.read_shift(2), Cl(e);
}
function Ep(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = Fl(e, 0, t);
  return [n, i];
}
function Tp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = ap(e, 0, t);
  return [n, i];
}
function wp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var a = Fl(e, 0, t);
  return [n, i, a];
}
function Sp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [Sv[i], Nl[i], n];
}
function Ap(e, r, t) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = t && t.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : yp(e);
  return [i, (a[0] === 0 ? Nl : wv)[a[1]]];
}
function yp(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Fp(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function Cp(e, r, t) {
  if ((e.l++, t && t.biff == 12)) return [e.read_shift(4, 'i'), 0];
  var n = e.read_shift(2),
    i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Op(e) {
  return e.l++, ui[e.read_shift(1)];
}
function Rp(e) {
  return e.l++, e.read_shift(2);
}
function Np(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function kp(e) {
  return e.l++, Sn(e);
}
function Dp(e, r, t) {
  return e.l++, ll(e, r - 1, t);
}
function Ip(e, r) {
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
      (t[1] = wx(e, 1) ? 'TRUE' : 'FALSE'), r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (t[1] = ui[e[e.l]]), (e.l += r == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Sn(e);
      break;
    case 2:
      t[1] = Fx(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error('Bad SerAr: ' + t[0]);
  }
  return t;
}
function Pp(e, r, t) {
  for (var n = e.read_shift(t.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((t.biff == 12 ? qr : Rx)(e));
  return i;
}
function Lp(e, r, t) {
  var n = 0,
    i = 0;
  t.biff == 12
    ? ((n = e.read_shift(4)), (i = e.read_shift(4)))
    : ((i = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    t.biff >= 2 && t.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var f = 0; f != i; ++f) s[a][f] = Ip(e, t.biff);
  return s;
}
function Bp(e, r, t) {
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
function Mp(e, r, t) {
  if (t.biff == 5) return bp(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function bp(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [r, t, n];
}
function Up(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Hp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Wp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [n];
}
function Vp(e, r, t) {
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
var Gp = ir,
  jp = ir,
  Xp = ir;
function hi(e, r, t) {
  return (e.l += 2), [ip(e)];
}
function X0(e) {
  return (e.l += 6), [];
}
var $p = hi,
  zp = X0,
  Kp = X0,
  Yp = hi;
function Ol(e) {
  return (e.l += 2), [fl(e), e.read_shift(2) & 1];
}
var qp = hi,
  Jp = Ol,
  Zp = X0,
  Qp = hi,
  ev = hi,
  tv = [
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
function rv(e) {
  e.l += 2;
  var r = e.read_shift(2),
    t = e.read_shift(2),
    n = e.read_shift(4),
    i = e.read_shift(2),
    a = e.read_shift(2),
    s = tv[(t >> 2) & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: n, c: i, C: a };
}
function nv(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function iv(e, r, t) {
  return (e.l += 5), (e.l += 2), (e.l += t.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function av(e, r, t) {
  return (e.l += t.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function sv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function fv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function ov(e) {
  return (e.l += 4), [0, 0];
}
var nf = {
    1: { n: 'PtgExp', f: Cp },
    2: { n: 'PtgTbl', f: Xp },
    3: { n: 'PtgAdd', f: Ve },
    4: { n: 'PtgSub', f: Ve },
    5: { n: 'PtgMul', f: Ve },
    6: { n: 'PtgDiv', f: Ve },
    7: { n: 'PtgPower', f: Ve },
    8: { n: 'PtgConcat', f: Ve },
    9: { n: 'PtgLt', f: Ve },
    10: { n: 'PtgLe', f: Ve },
    11: { n: 'PtgEq', f: Ve },
    12: { n: 'PtgGe', f: Ve },
    13: { n: 'PtgGt', f: Ve },
    14: { n: 'PtgNe', f: Ve },
    15: { n: 'PtgIsect', f: Ve },
    16: { n: 'PtgUnion', f: Ve },
    17: { n: 'PtgRange', f: Ve },
    18: { n: 'PtgUplus', f: Ve },
    19: { n: 'PtgUminus', f: Ve },
    20: { n: 'PtgPercent', f: Ve },
    21: { n: 'PtgParen', f: Ve },
    22: { n: 'PtgMissArg', f: Ve },
    23: { n: 'PtgStr', f: Dp },
    26: { n: 'PtgSheet', f: iv },
    27: { n: 'PtgEndSheet', f: av },
    28: { n: 'PtgErr', f: Op },
    29: { n: 'PtgBool', f: Np },
    30: { n: 'PtgInt', f: Rp },
    31: { n: 'PtgNum', f: kp },
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
    1: { n: 'PtgElfLel', f: Ol },
    2: { n: 'PtgElfRw', f: Qp },
    3: { n: 'PtgElfCol', f: $p },
    6: { n: 'PtgElfRwV', f: ev },
    7: { n: 'PtgElfColV', f: Yp },
    10: { n: 'PtgElfRadical', f: qp },
    11: { n: 'PtgElfRadicalS', f: Zp },
    13: { n: 'PtgElfColS', f: zp },
    15: { n: 'PtgElfColSV', f: Kp },
    16: { n: 'PtgElfRadicalLel', f: Jp },
    25: { n: 'PtgList', f: rv },
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
    32: { n: 'PtgAttrBaxcel', f: rf },
    33: { n: 'PtgAttrBaxcel', f: rf },
    64: { n: 'PtgAttrSpace', f: _p },
    65: { n: 'PtgAttrSpaceSemi', f: gp },
    128: { n: 'PtgAttrIfError', f: vp },
    255: {},
  };
function hv(e, r, t, n) {
  if (n.biff < 8) return ir(e, r);
  for (var i = e.l + r, a = [], s = 0; s !== t.length; ++s)
    switch (t[s][0]) {
      case 'PtgArray':
        (t[s][1] = Lp(e, 0, n)), a.push(t[s][1]);
        break;
      case 'PtgMemArea':
        (t[s][2] = Pp(e, t[s][1], n)), a.push(t[s][2]);
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
  return (r = i - e.l), r !== 0 && a.push(ir(e, r)), a;
}
function xv(e, r, t) {
  for (var n = e.l + r, i, a, s = []; n != e.l; )
    (r = n - e.l),
      (a = e[e.l]),
      (i = nf[a] || nf[lv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? cv : uv)[e[e.l + 1]]),
      !i || !i.f ? ir(e, r) : s.push([i.n, i.f(e, r, t)]);
  return s;
}
function dv(e) {
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
function vv(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Rl(e, r, t) {
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
function af(e, r, t) {
  var n = Rl(e, r, t);
  return n == '#REF' ? n : vv(n, t);
}
function dn(e, r, t, n, i) {
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
  for (var x = -1, m = '', S = 0, F = e[0].length; S < F; ++S) {
    var y = e[0][S];
    switch (y[0]) {
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
              m = be(' ', e[0][x][1][1]);
              break;
            case 1:
              m = be('\r', e[0][x][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          (o = o + m), (x = -1);
        }
        f.push(o + pv[y[0]] + l);
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
        (c = Gn(y[1][1], s, i)), f.push(jn(c, a));
        break;
      case 'PtgRefN':
        (c = t ? Gn(y[1][1], t, i) : y[1][1]), f.push(jn(c, a));
        break;
      case 'PtgRef3d':
        (u = y[1][1]),
          (c = Gn(y[1][2], s, i)),
          (p = af(n, u, i)),
          f.push(p + '!' + jn(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var N = y[1][0],
          W = y[1][1];
        N || (N = 0), (N &= 127);
        var Y = N == 0 ? [] : f.slice(-N);
        (f.length -= N),
          W === 'User' && (W = Y.shift()),
          f.push(W + '(' + Y.join(',') + ')');
        break;
      case 'PtgBool':
        f.push(y[1] ? 'TRUE' : 'FALSE');
        break;
      case 'PtgInt':
        f.push(y[1]);
        break;
      case 'PtgNum':
        f.push(String(y[1]));
        break;
      case 'PtgStr':
        f.push('"' + y[1].replace(/"/g, '""') + '"');
        break;
      case 'PtgErr':
        f.push(y[1]);
        break;
      case 'PtgAreaN':
        (d = Vs(y[1][1], t ? { s: t } : s, i)), f.push(ja(d, i));
        break;
      case 'PtgArea':
        (d = Vs(y[1][1], s, i)), f.push(ja(d, i));
        break;
      case 'PtgArea3d':
        (u = y[1][1]),
          (d = y[1][2]),
          (p = af(n, u, i)),
          f.push(p + '!' + ja(d, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        h = y[1][2];
        var R = (n.names || [])[h - 1] || (n[0] || [])[h],
          U = R ? R.Name : 'SH33TJSNAME' + String(h);
        U && U.slice(0, 6) == '_xlfn.' && !i.xlfn && (U = U.slice(6)),
          f.push(U);
        break;
      case 'PtgNameX':
        var P = y[1][1];
        h = y[1][2];
        var V;
        if (i.biff <= 5) P < 0 && (P = -P), n[P] && (V = n[P][h]);
        else {
          var X = '';
          if (
            (((n[P] || [])[0] || [])[0] == 14849 ||
              (((n[P] || [])[0] || [])[0] == 1025
                ? n[P][h] &&
                  n[P][h].itab > 0 &&
                  (X = n.SheetNames[n[P][h].itab - 1] + '!')
                : (X = n.SheetNames[h - 1] + '!')),
            n[P] && n[P][h])
          )
            X += n[P][h].Name;
          else if (n[0] && n[0][h]) X += n[0][h].Name;
          else {
            var z = (Rl(n, P, i) || '').split(';;');
            z[h - 1] ? (X = z[h - 1]) : (X += 'SH33TJSERRX');
          }
          f.push(X);
          break;
        }
        V || (V = { Name: 'SH33TJSERRY' }), f.push(V.Name);
        break;
      case 'PtgParen':
        var te = '(',
          ge = ')';
        if (x >= 0) {
          switch (((m = ''), e[0][x][1][0])) {
            case 2:
              te = be(' ', e[0][x][1][1]) + te;
              break;
            case 3:
              te = be('\r', e[0][x][1][1]) + te;
              break;
            case 4:
              ge = be(' ', e[0][x][1][1]) + ge;
              break;
            case 5:
              ge = be('\r', e[0][x][1][1]) + ge;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          x = -1;
        }
        f.push(te + f.pop() + ge);
        break;
      case 'PtgRefErr':
        f.push('#REF!');
        break;
      case 'PtgRefErr3d':
        f.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: y[1][1], r: y[1][0] };
        var ce = { c: t.c, r: t.r };
        if (n.sharedf[ye(c)]) {
          var He = n.sharedf[ye(c)];
          f.push(dn(He, s, ce, n, i));
        } else {
          var De = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(dn(o[1], s, ce, n, i)), (De = !0);
              break;
            }
          De || f.push(y[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + dv(y[1]) + '}');
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
        f.push('Table' + y[1].idx + '[#' + y[1].rt + ']');
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
        throw new Error('Unrecognized Formula Token: ' + String(y));
      default:
        throw new Error('Unrecognized Formula Token: ' + String(y));
    }
    var Ct = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && x >= 0 && Ct.indexOf(e[0][S][0]) == -1) {
      y = e[0][x];
      var We = !0;
      switch (y[1][0]) {
        case 4:
          We = !1;
        case 0:
          m = be(' ', y[1][1]);
          break;
        case 5:
          We = !1;
        case 1:
          m = be('\r', y[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + y[1][0]);
      }
      f.push((We ? m : '') + f.pop() + (We ? '' : m)), (x = -1);
    }
  }
  if (f.length > 1 && i.WTF) throw new Error('bad formula stack');
  return f[0];
}
function mv(e) {
  if (e == null) {
    var r = b(8);
    return (
      r.write_shift(1, 3),
      r.write_shift(1, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 0),
      r.write_shift(2, 65535),
      r
    );
  } else if (typeof e == 'number') return Gr(e);
  return Gr(0);
}
function _v(e, r, t, n, i) {
  var a = jr(r, t, i),
    s = mv(e.v),
    f = b(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = b(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var u = et([a, s, f, o]);
  return u;
}
function Sa(e, r, t) {
  var n = e.read_shift(4),
    i = xv(e, n, t),
    a = e.read_shift(4),
    s = a > 0 ? hv(e, a, i, t) : null;
  return [i, s];
}
var gv = Sa,
  Aa = Sa,
  Ev = Sa,
  Tv = Sa,
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
  Nl = {
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
  var r = 'of:=' + e.replace(G0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return r.replace(/;/g, '|').replace(/,/g, ';');
}
function yv(e) {
  return e.replace(/\./, '!');
}
var Xn = typeof Map < 'u';
function $0(e, r, t) {
  var n = 0,
    i = e.length;
  if (t) {
    if (Xn ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var a = Xn ? t.get(r) : t[r]; n < a.length; ++n)
        if (e[a[n]].t === r) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === r) return e.Count++, n;
  return (
    (e[i] = { t: r }),
    e.Count++,
    e.Unique++,
    t &&
      (Xn
        ? (t.has(r) || t.set(r, []), t.get(r).push(i))
        : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []),
          t[r].push(i))),
    i
  );
}
function ya(e, r) {
  var t = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    r.MDW && (cr = r.MDW),
    r.width != null
      ? (t.customWidth = 1)
      : r.wpx != null
        ? (n = ta(r.wpx))
        : r.wch != null && (n = r.wch),
    n > -1
      ? ((t.width = u0(n)), (t.customWidth = 1))
      : r.width != null && (t.width = r.width),
    r.hidden && (t.hidden = !0),
    r.level != null && (t.outlineLevel = t.level = r.level),
    t
  );
}
function kl(e, r) {
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
function Fr(e, r, t) {
  var n = t.revssf[r.z != null ? r.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && t.ssf) {
    for (; i < 392; ++i)
      if (t.ssf[i] == null) {
        Fo(r.z, i), (t.ssf[i] = r.z), (t.revssf[r.z] = n = i);
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
function Fv(e, r, t) {
  if (e && e['!ref']) {
    var n = ke(e['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + t + '): ' + e['!ref']);
  }
}
function Cv(e) {
  if (e.length === 0) return '';
  for (
    var r = '<mergeCells count="' + e.length + '">', t = 0;
    t != e.length;
    ++t
  )
    r += '<mergeCell ref="' + Ge(e[t]) + '"/>';
  return r + '</mergeCells>';
}
function Ov(e, r, t, n, i) {
  var a = !1,
    s = {},
    f = null;
  if (n.bookType !== 'xlsx' && r.vbaraw) {
    var l = r.SheetNames[t];
    try {
      r.Workbook && (l = r.Workbook.Sheets[t].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = Qn(Ae(l)));
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
function kv(e) {
  var r = { sheet: 1 };
  return (
    Rv.forEach(function (t) {
      e[t] != null && e[t] && (r[t] = '1');
    }),
    Nv.forEach(function (t) {
      e[t] != null && !e[t] && (r[t] = '0');
    }),
    e.password && (r.password = dl(e.password).toString(16).toUpperCase()),
    J('sheetProtection', null, r)
  );
}
function Dv(e) {
  return kl(e), J('pageMargins', null, e);
}
function Iv(e, r) {
  for (var t = ['<cols>'], n, i = 0; i != r.length; ++i)
    (n = r[i]) && (t[t.length] = J('col', null, ya(i, n)));
  return (t[t.length] = '</cols>'), t.join('');
}
function Pv(e, r, t, n) {
  var i = typeof e.ref == 'string' ? e.ref : Ge(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }),
    t.Workbook.Names || (t.Workbook.Names = []);
  var a = t.Workbook.Names,
    s = Lt(i);
  s.s.r == s.e.r && ((s.e.r = Lt(r['!ref']).e.r), (i = Ge(s)));
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
function Lv(e, r, t, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    J('sheetViews', J('sheetView', null, i), {})
  );
}
function Bv(e, r, t, n) {
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
        i = ui[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = vt(e.v, -1).toISOString())
          : ((e = yt(e)), (e.t = 'n'), (i = '' + (e.v = At(vt(e.v))))),
          typeof e.z > 'u' && (e.z = Ue[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = tt('v', Ae(i)),
    l = { r },
    o = Fr(n.cellXfs, e, n);
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
        (f = tt('v', '' + $0(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, r.length) == r ? { t: 'array', ref: e.F } : null;
    f = J('f', Ae(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && t['!links'].push([r, e.l]), e.D && (l.cm = 1), J('c', f, l);
}
function Mv(e, r, t, n) {
  var i = [],
    a = [],
    s = ke(e['!ref']),
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
  for (h = s.s.c; h <= s.e.c; ++h) c[h] = ft(h);
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (a = [], o = rt(u), h = s.s.c; h <= s.e.c; ++h) {
      l = c[h] + o;
      var F = p ? (e[u] || [])[h] : e[l];
      F !== void 0 && (f = Bv(F, l, e, r)) != null && a.push(f);
    }
    (a.length > 0 || (d && d[u])) &&
      ((x = { r: o }),
      d &&
        d[u] &&
        ((m = d[u]),
        m.hidden && (x.hidden = 1),
        (S = -1),
        m.hpx ? (S = ra(m.hpx)) : m.hpt && (S = m.hpt),
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
        m.hpx ? (S = ra(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((x.ht = S), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level),
        (i[i.length] = J('row', '', x)));
  return i.join('');
}
function Dl(e, r, t, n) {
  var i = [je, J('worksheet', null, { xmlns: En[0], 'xmlns:r': Ke.r })],
    a = t.SheetNames[e],
    s = 0,
    f = '',
    l = t.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = ke(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = Ge(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var u = [];
  Ov(l, t, e, r, i),
    (i[i.length] = J('dimension', null, { ref: o })),
    (i[i.length] = Lv(l, r, e, t)),
    r.sheetFormat &&
      (i[i.length] = J('sheetFormatPr', null, {
        defaultRowHeight: r.sheetFormat.defaultRowHeight || '16',
        baseColWidth: r.sheetFormat.baseColWidth || '10',
        outlineLevelRow: r.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = Iv(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = Mv(l, r)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = kv(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = Pv(l['!autofilter'], l, t, e)),
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
            ((p = Se(n, -1, Ae(x[1].Target).replace(/#.*$/, ''), me.HLINK)),
            (d['r:id'] = 'rId' + p)),
          (h = x[1].Target.indexOf('#')) > -1 &&
            (d.location = Ae(x[1].Target.slice(h + 1))),
          x[1].Tooltip && (d.tooltip = Ae(x[1].Tooltip)),
          (i[i.length] = J('hyperlink', null, d)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = Dv(l['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) &&
      (i[i.length] = tt(
        'ignoredErrors',
        J('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    u.length > 0 &&
      ((p = Se(n, -1, '../drawings/drawing' + (e + 1) + '.xml', me.DRAW)),
      (i[i.length] = J('drawing', null, { 'r:id': 'rId' + p })),
      (l['!drawing'] = u)),
    l['!comments'].length > 0 &&
      ((p = Se(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', me.VML)),
      (i[i.length] = J('legacyDrawing', null, { 'r:id': 'rId' + p })),
      (l['!legacy'] = p)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function bv(e, r) {
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
function Uv(e, r, t) {
  var n = b(145),
    i = (t['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = ra(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
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
      for (var u = -1, h = -1, d = c << 10; d < (c + 1) << 10; ++d) {
        o.c = d;
        var p = Array.isArray(t) ? (t[o.r] || [])[o.c] : t[ye(o)];
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
function Hv(e, r, t, n) {
  var i = Uv(n, t, r);
  (i.length > 17 || (r['!rows'] || [])[n]) && j(e, 0, i);
}
var Wv = qr,
  Vv = wn;
function Gv() {}
function jv(e, r) {
  var t = {},
    n = e[e.l];
  return (
    ++e.l,
    (t.above = !(n & 64)),
    (t.left = !(n & 128)),
    (e.l += 18),
    (t.name = ex(e)),
    t
  );
}
function Xv(e, r, t) {
  t == null && (t = b(84 + 4 * e.length));
  var n = 192;
  r && (r.above && (n &= -65), r.left && (n &= -129)), t.write_shift(1, n);
  for (var i = 1; i < 3; ++i) t.write_shift(1, 0);
  return (
    Zi({ auto: 1 }, t),
    t.write_shift(-4, -1),
    t.write_shift(-4, -1),
    zo(e, t),
    t.slice(0, t.l)
  );
}
function $v(e) {
  var r = Ut(e);
  return [r];
}
function zv(e, r, t) {
  return t == null && (t = b(8)), zr(r, t);
}
function Kv(e) {
  var r = Kr(e);
  return [r];
}
function Yv(e, r, t) {
  return t == null && (t = b(4)), Yr(r, t);
}
function qv(e) {
  var r = Ut(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function Jv(e, r, t) {
  return t == null && (t = b(9)), zr(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Zv(e) {
  var r = Kr(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function Qv(e, r, t) {
  return t == null && (t = b(5)), Yr(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function e2(e) {
  var r = Ut(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function t2(e, r, t) {
  return t == null && (t = b(9)), zr(r, t), t.write_shift(1, e.v), t;
}
function r2(e) {
  var r = Kr(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function n2(e, r, t) {
  return (
    t == null && (t = b(8)),
    Yr(r, t),
    t.write_shift(1, e.v),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t
  );
}
function i2(e) {
  var r = Ut(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function a2(e, r, t) {
  return t == null && (t = b(12)), zr(r, t), t.write_shift(4, r.v), t;
}
function s2(e) {
  var r = Kr(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function f2(e, r, t) {
  return t == null && (t = b(8)), Yr(r, t), t.write_shift(4, r.v), t;
}
function o2(e) {
  var r = Ut(e),
    t = Sn(e);
  return [r, t, 'n'];
}
function l2(e, r, t) {
  return t == null && (t = b(16)), zr(r, t), Gr(e.v, t), t;
}
function c2(e) {
  var r = Kr(e),
    t = Sn(e);
  return [r, t, 'n'];
}
function u2(e, r, t) {
  return t == null && (t = b(12)), Yr(r, t), Gr(e.v, t), t;
}
function h2(e) {
  var r = Ut(e),
    t = Ko(e);
  return [r, t, 'n'];
}
function x2(e, r, t) {
  return t == null && (t = b(12)), zr(r, t), Yo(e.v, t), t;
}
function d2(e) {
  var r = Kr(e),
    t = Ko(e);
  return [r, t, 'n'];
}
function p2(e, r, t) {
  return t == null && (t = b(8)), Yr(r, t), Yo(e.v, t), t;
}
function v2(e) {
  var r = Ut(e),
    t = b0(e);
  return [r, t, 'is'];
}
function m2(e) {
  var r = Ut(e),
    t = ot(e);
  return [r, t, 'str'];
}
function _2(e, r, t) {
  return (
    t == null && (t = b(12 + 4 * e.v.length)),
    zr(r, t),
    qe(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function g2(e) {
  var r = Kr(e),
    t = ot(e);
  return [r, t, 'str'];
}
function E2(e, r, t) {
  return (
    t == null && (t = b(8 + 4 * e.v.length)),
    Yr(r, t),
    qe(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function T2(e, r, t) {
  var n = e.l + r,
    i = Ut(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Aa(e, n - e.l, t);
    s[3] = dn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function w2(e, r, t) {
  var n = e.l + r,
    i = Ut(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Aa(e, n - e.l, t);
    s[3] = dn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function S2(e, r, t) {
  var n = e.l + r,
    i = Ut(e);
  i.r = t['!row'];
  var a = Sn(e),
    s = [i, a, 'n'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Aa(e, n - e.l, t);
    s[3] = dn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function A2(e, r, t) {
  var n = e.l + r,
    i = Ut(e);
  i.r = t['!row'];
  var a = ot(e),
    s = [i, a, 'str'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Aa(e, n - e.l, t);
    s[3] = dn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
var y2 = qr,
  F2 = wn;
function C2(e, r) {
  return r == null && (r = b(4)), r.write_shift(4, e), r;
}
function O2(e, r) {
  var t = e.l + r,
    n = qr(e),
    i = U0(e),
    a = ot(e),
    s = ot(e),
    f = ot(e);
  e.l = t;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function R2(e, r) {
  var t = b(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  wn({ s: Ye(e[0]), e: Ye(e[0]) }, t), H0('rId' + r, t);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return qe(i || '', t), qe(e[1].Tooltip || '', t), qe('', t), t.slice(0, t.l);
}
function N2() {}
function k2(e, r, t) {
  var n = e.l + r,
    i = qo(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), t.cellFormula)) {
    var f = gv(e, n - e.l, t);
    s[1] = f;
  } else e.l = n;
  return s;
}
function D2(e, r, t) {
  var n = e.l + r,
    i = qr(e),
    a = [i];
  if (t.cellFormula) {
    var s = Tv(e, n - e.l, t);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function I2(e, r, t) {
  t == null && (t = b(18));
  var n = ya(e, r);
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
var Il = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function P2(e) {
  var r = {};
  return (
    Il.forEach(function (t) {
      r[t] = Sn(e);
    }),
    r
  );
}
function L2(e, r) {
  return (
    r == null && (r = b(6 * 8)),
    kl(e),
    Il.forEach(function (t) {
      Gr(e[t], r);
    }),
    r
  );
}
function B2(e) {
  var r = e.read_shift(2);
  return (e.l += 28), { RTL: r & 32 };
}
function M2(e, r, t) {
  t == null && (t = b(30));
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
function b2(e) {
  var r = b(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), wn(e, r), r;
}
function U2(e, r) {
  return (
    r == null && (r = b(16 * 4 + 2)),
    r.write_shift(2, e.password ? dl(e.password) : 0),
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
function H2() {}
function W2() {}
function V2(e, r, t, n, i, a, s) {
  if (r.v === void 0) return !1;
  var f = '';
  switch (r.t) {
    case 'b':
      f = r.v ? '1' : '0';
      break;
    case 'd':
      (r = yt(r)), (r.z = r.z || Ue[14]), (r.v = At(vt(r.v))), (r.t = 'n');
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
    ((l.s = Fr(i.cellXfs, r, i)),
    r.l && a['!links'].push([ye(l), r.l]),
    r.c && a['!comments'].push([ye(l), r.c]),
    r.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = $0(i.Strings, r.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? j(e, 18, f2(r, l)) : j(e, 7, a2(r, l)))
          : ((l.t = 'str'), s ? j(e, 17, E2(r, l)) : j(e, 6, _2(r, l))),
        !0
      );
    case 'n':
      return (
        r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3
          ? s
            ? j(e, 13, p2(r, l))
            : j(e, 2, x2(r, l))
          : s
            ? j(e, 16, u2(r, l))
            : j(e, 5, l2(r, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? j(e, 15, Qv(r, l)) : j(e, 4, Jv(r, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? j(e, 14, n2(r, l)) : j(e, 3, t2(r, l)), !0;
  }
  return s ? j(e, 12, Yv(r, l)) : j(e, 1, zv(r, l)), !0;
}
function G2(e, r, t, n) {
  var i = ke(r['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  j(e, 145);
  var l = Array.isArray(r),
    o = i.e.r;
  r['!rows'] && (o = Math.max(i.e.r, r['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = rt(c)), Hv(e, r, i, c);
    var u = !1;
    if (c <= i.e.r)
      for (var h = i.s.c; h <= i.e.c; ++h) {
        c === i.s.r && (f[h] = ft(h)), (a = f[h] + s);
        var d = l ? (r[c] || [])[h] : r[a];
        if (!d) {
          u = !1;
          continue;
        }
        u = V2(e, d, c, h, n, r, u);
      }
  }
  j(e, 146);
}
function j2(e, r) {
  !r ||
    !r['!merges'] ||
    (j(e, 177, C2(r['!merges'].length)),
    r['!merges'].forEach(function (t) {
      j(e, 176, F2(t));
    }),
    j(e, 178));
}
function X2(e, r) {
  !r ||
    !r['!cols'] ||
    (j(e, 390),
    r['!cols'].forEach(function (t, n) {
      t && j(e, 60, I2(n, t));
    }),
    j(e, 391));
}
function $2(e, r) {
  !r || !r['!ref'] || (j(e, 648), j(e, 649, b2(ke(r['!ref']))), j(e, 650));
}
function z2(e, r, t) {
  r['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = Se(t, -1, n[1].Target.replace(/#.*$/, ''), me.HLINK);
      j(e, 494, R2(n, i));
    }
  }),
    delete r['!links'];
}
function K2(e, r, t, n) {
  if (r['!comments'].length > 0) {
    var i = Se(n, -1, '../drawings/vmlDrawing' + (t + 1) + '.vml', me.VML);
    j(e, 551, H0('rId' + i)), (r['!legacy'] = i);
  }
}
function Y2(e, r, t, n) {
  if (r['!autofilter']) {
    var i = r['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : Ge(i.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }),
      t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names,
      f = Lt(a);
    f.s.r == f.e.r && ((f.e.r = Lt(r['!ref']).e.r), (a = Ge(f)));
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
      j(e, 161, wn(ke(a))),
      j(e, 162);
  }
}
function q2(e, r, t) {
  j(e, 133), j(e, 137, M2(r, t)), j(e, 138), j(e, 134);
}
function J2(e, r) {
  r['!protect'] && j(e, 535, U2(r['!protect']));
}
function Z2(e, r, t, n) {
  var i = wt(),
    a = t.SheetNames[e],
    s = t.Sheets[a] || {},
    f = a;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = ke(s['!ref'] || 'A1');
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
    (t.vbaraw || s['!outline']) && j(i, 147, Xv(f, s['!outline'])),
    j(i, 148, Vv(l)),
    q2(i, s, t.Workbook),
    X2(i, s),
    G2(i, s, e, r),
    J2(i, s),
    Y2(i, s, t, e),
    j2(i, s),
    z2(i, s, n),
    s['!margins'] && j(i, 476, L2(s['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) && $2(i, s),
    K2(i, s, e, n),
    j(i, 130),
    i.end()
  );
}
function Q2(e, r) {
  e.l += 10;
  var t = ot(e);
  return { name: t };
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
function tm(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : D1(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var rm = '][*?/\\'.split('');
function Pl(e, r) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var t = !0;
  return (
    rm.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    t
  );
}
function nm(e, r, t) {
  e.forEach(function (n, i) {
    Pl(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (t) {
      var s = (r && r[i] && r[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function im(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var r = (e.Workbook && e.Workbook.Sheets) || [];
  nm(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t)
    Fv(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
}
function Ll(e) {
  var r = [je];
  r[r.length] = J('workbook', null, { xmlns: En[0], 'xmlns:r': Ke.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0,
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
    var s = { name: Ae(e.SheetNames[a].slice(0, 31)) };
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
            f.Ref && (r[r.length] = J('definedName', Ae(f.Ref), l));
        }),
      (r[r.length] = '</definedNames>')),
    r.length > 2 &&
      ((r[r.length] = '</workbook>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function am(e, r) {
  var t = {};
  return (
    (t.Hidden = e.read_shift(4)),
    (t.iTabID = e.read_shift(4)),
    (t.strRelID = c0(e)),
    (t.name = ot(e)),
    t
  );
}
function sm(e, r) {
  return (
    r || (r = b(127)),
    r.write_shift(4, e.Hidden),
    r.write_shift(4, e.iTabID),
    H0(e.strRelID, r),
    qe(e.name.slice(0, 31), r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function fm(e, r) {
  var t = {},
    n = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var i = r > 8 ? ot(e) : '';
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
function om(e, r) {
  r || (r = b(72));
  var t = 0;
  return (
    e && e.filterPrivacy && (t |= 8),
    r.write_shift(4, t),
    r.write_shift(4, 0),
    zo((e && e.CodeName) || 'ThisWorkbook', r),
    r.slice(0, r.l)
  );
}
function lm(e, r, t) {
  var n = e.l + r;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = tx(e),
    s = Ev(e, 0, t),
    f = U0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function cm(e, r) {
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
    j(e, 156, sm(i));
  }
  j(e, 144);
}
function um(e, r) {
  r || (r = b(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return (
    qe('SheetJS', r),
    qe(Xi.version, r),
    qe(Xi.version, r),
    qe('7262', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function hm(e, r) {
  r || (r = b(29)),
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
function xm(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, n = 0, i = -1, a = -1; n < t.length; ++n)
      !t[n] || (!t[n].Hidden && i == -1)
        ? (i = n)
        : t[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (j(e, 135), j(e, 158, hm(i)), j(e, 136));
  }
}
function dm(e, r) {
  var t = wt();
  return (
    j(t, 131),
    j(t, 128, um()),
    j(t, 153, om((e.Workbook && e.Workbook.WBProps) || null)),
    xm(t, e),
    cm(t, e),
    j(t, 132),
    t.end()
  );
}
function pm(e, r, t) {
  return (r.slice(-4) === '.bin' ? dm : Ll)(e);
}
function vm(e, r, t, n, i) {
  return (r.slice(-4) === '.bin' ? Z2 : Dl)(e, t, n, i);
}
function mm(e, r, t) {
  return (r.slice(-4) === '.bin' ? Ld : ml)(e, t);
}
function _m(e, r, t) {
  return (r.slice(-4) === '.bin' ? od : xl)(e, t);
}
function gm(e, r, t) {
  return (r.slice(-4) === '.bin' ? Jd : wl)(e);
}
function Em(e) {
  return (e.slice(-4) === '.bin' ? Gd : El)();
}
function Tm(e, r) {
  var t = [];
  return (
    e.Props && t.push(mx(e.Props, r)),
    e.Custprops && t.push(_x(e.Props, e.Custprops)),
    t.join('')
  );
}
function wm() {
  return '';
}
function Sm(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    r.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(J('NumberFormat', null, { 'ss:Format': Ae(Ue[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      t.push(J('Style', a.join(''), s));
    }),
    J('Styles', t.join(''))
  );
}
function Bl(e) {
  return J('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + j0(e.Ref, { r: 0, c: 0 }),
  });
}
function Am(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var r = e.Workbook.Names, t = [], n = 0; n < r.length; ++n) {
    var i = r[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || t.push(Bl(i)));
  }
  return J('Names', t.join(''));
}
function ym(e, r, t, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || a.push(Bl(f)));
  }
  return a.join('');
}
function Fm(e, r, t, n) {
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
      (i.push(tt('ProtectContents', 'True')),
      e['!protect'].objects && i.push(tt('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(tt('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(tt('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(tt('EnableSelection', 'UnlockedCells')),
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
    i.length == 0 ? '' : J('WorksheetOptions', i.join(''), { xmlns: Dt.x })
  );
}
function Cm(e) {
  return e
    .map(function (r) {
      var t = k1(r.t || ''),
        n = J('ss:Data', t, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return J('Comment', n, { 'ss:Author': r.a });
    })
    .join('');
}
function Om(e, r, t, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + Ae(j0(e.f, s))),
    e.F && e.F.slice(0, r.length) == r)
  ) {
    var l = Ye(e.F.slice(r.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = Ae(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = Ae(e.l.Tooltip))),
    t['!merges'])
  )
    for (var o = t['!merges'], c = 0; c != o.length; ++c)
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
      (u = 'Error'), (h = ui[e.v]);
      break;
    case 'd':
      (u = 'DateTime'),
        (h = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || Ue[14]);
      break;
    case 's':
      (u = 'String'), (h = N1(e.v || ''));
      break;
  }
  var d = Fr(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + d)), (f['ss:Index'] = s.c + 1);
  var p = e.v != null ? h : '',
    x = e.t == 'z' ? '' : '<Data ss:Type="' + u + '">' + p + '</Data>';
  return (e.c || []).length > 0 && (x += Cm(e.c)), J('Cell', x, f);
}
function Rm(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return (
    r &&
      (r.hpt && !r.hpx && (r.hpx = vl(r.hpt)),
      r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
      r.hidden && (t += ' ss:Hidden="1"')),
    t + '>'
  );
}
function Nm(e, r, t, n) {
  if (!e['!ref']) return '';
  var i = ke(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, S) {
      V0(m);
      var F = !!m.width,
        y = ya(S, m),
        N = { 'ss:Index': S + 1 };
      F && (N['ss:Width'] = ea(y.width)),
        m.hidden && (N['ss:Hidden'] = '1'),
        f.push(J('Column', null, N));
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
          p = ye(d),
          x = l ? (e[o] || [])[u] : e[p];
        c.push(Om(x, p, e, r, t, n, d));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function km(e, r, t) {
  var n = [],
    i = t.SheetNames[e],
    a = t.Sheets[i],
    s = a ? ym(a, r, e, t) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? Nm(a, r, e, t) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(Fm(a, r, e, t)),
    n.join('')
  );
}
function Dm(e, r) {
  r || (r = {}),
    e.SSF || (e.SSF = yt(Ue)),
    e.SSF &&
      (Ea(),
      ga(e.SSF),
      (r.revssf = Ta(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF),
      (r.cellXfs = []),
      Fr(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Tm(e, r)), t.push(wm()), t.push(''), t.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    t.push(J('Worksheet', km(n, r, e), { 'ss:Name': Ae(e.SheetNames[n]) }));
  return (
    (t[2] = Sm(e, r)),
    (t[3] = Am(e)),
    je +
      J('Workbook', t.join(''), {
        xmlns: Dt.ss,
        'xmlns:o': Dt.o,
        'xmlns:x': Dt.x,
        'xmlns:ss': Dt.ss,
        'xmlns:dt': Dt.dt,
        'xmlns:html': Dt.html,
      })
  );
}
var za = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function Im(e, r) {
  var t = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = ks(js, 'n'),
    l = ks(Xs, 'n');
  if (e.Props)
    for (s = nt(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? t
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = nt(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? t
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    sl.indexOf(i[a][0]) > -1 ||
      nl.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Fe.utils.cfb_add(r, '/SummaryInformation', qs(n, za.SI, l, Xs)),
    (t.length || o.length) &&
      Fe.utils.cfb_add(
        r,
        '/DocumentSummaryInformation',
        qs(t, za.DSI, f, js, o.length ? o : null, za.UDI),
      );
}
function Pm(e, r) {
  var t = r || {},
    n = Fe.utils.cfb_new({ root: 'R' }),
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
    Fe.utils.cfb_add(n, i, Ml(e, t)),
    t.biff == 8 && (e.Props || e.Custprops) && Im(e, n),
    t.biff == 8 &&
      e.vbaraw &&
      Zd(
        n,
        Fe.read(e.vbaraw, {
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
  14: { f: r2 },
  15: { f: Zv },
  16: { f: c2 },
  17: { f: g2 },
  18: { f: s2 },
  19: { f: b0 },
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
  131: { T: 1, f: ir, p: 0 },
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
  161: { T: 1, f: qr },
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
  355: { f: c0 },
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
  426: { f: k2 },
  427: { f: D2 },
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
  550: { f: c0 },
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
function Z(e, r, t, n) {
  var i = r;
  if (!isNaN(i)) {
    var a = n || (t || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && L0(t) && e.push(t);
  }
}
function Bm(e, r, t, n) {
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
function xi(e, r, t) {
  return (
    e || (e = b(7)),
    e.write_shift(2, r),
    e.write_shift(2, t),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function Mm(e, r, t, n) {
  var i = b(9);
  return xi(i, e, r), ol(t, n || 'b', i), i;
}
function bm(e, r, t) {
  var n = b(8 + 2 * t.length);
  return (
    xi(n, e, r),
    n.write_shift(1, t.length),
    n.write_shift(t.length, t, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function Um(e, r, t, n) {
  if (r.v != null)
    switch (r.t) {
      case 'd':
      case 'n':
        var i = r.t == 'd' ? At(vt(r.v)) : r.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? Z(e, 2, Qx(t, n, i))
          : Z(e, 3, Zx(t, n, i));
        return;
      case 'b':
      case 'e':
        Z(e, 5, Mm(t, n, r.v, r.t));
        return;
      case 's':
      case 'str':
        Z(e, 4, bm(t, n, (r.v || '').slice(0, 255)));
        return;
    }
  Z(e, 1, xi(null, t, n));
}
function Hm(e, r, t, n) {
  var i = Array.isArray(r),
    a = ke(r['!ref'] || 'A1'),
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
      (s = Ge(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = rt(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = ft(c)), (s = l[c] + f);
      var u = i ? (r[o] || [])[c] : r[s];
      u && Um(e, u, o, c);
    }
  }
}
function Wm(e, r) {
  for (var t = r || {}, n = wt(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == t.sheet && (i = a);
  if (i == 0 && t.sheet && e.SheetNames[0] != t.sheet)
    throw new Error('Sheet not found: ' + t.sheet);
  return (
    Z(n, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, W0(e, 16, t)),
    Hm(n, e.Sheets[e.SheetNames[i]], i, t),
    Z(n, 10),
    n.end()
  );
}
function Vm(e, r, t) {
  Z(e, 49, Lx({ sz: 12, name: 'Arial' }, t));
}
function Gm(e, r, t) {
  r &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        r[i] != null && Z(e, 1054, bx(i, r[i], t));
    });
}
function jm(e, r) {
  var t = b(19);
  t.write_shift(4, 2151),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 3),
    t.write_shift(1, 1),
    t.write_shift(4, 0),
    Z(e, 2151, t),
    (t = b(39)),
    t.write_shift(4, 2152),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 3),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 1),
    t.write_shift(4, 4),
    t.write_shift(2, 0),
    ul(ke(r['!ref'] || 'A1'), t),
    t.write_shift(4, 4),
    Z(e, 2152, t);
}
function Xm(e, r) {
  for (var t = 0; t < 16; ++t) Z(e, 224, Zs({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function (n) {
    Z(e, 224, Zs(n, 0, r));
  });
}
function $m(e, r) {
  for (var t = 0; t < r['!links'].length; ++t) {
    var n = r['!links'][t];
    Z(e, 440, $x(n)), n[1].Tooltip && Z(e, 2048, zx(n));
  }
  delete r['!links'];
}
function zm(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function (n, i) {
      ++t <= 256 && n && Z(e, 125, qx(ya(i, n), i));
    });
  }
}
function Km(e, r, t, n, i) {
  var a = 16 + Fr(i.cellXfs, r, i);
  if (r.v == null && !r.bf) {
    Z(e, 513, jr(t, n, a));
    return;
  }
  if (r.bf) Z(e, 6, _v(r, t, n, i, a));
  else
    switch (r.t) {
      case 'd':
      case 'n':
        var s = r.t == 'd' ? At(vt(r.v)) : r.v;
        Z(e, 515, Vx(t, n, s, a));
        break;
      case 'b':
      case 'e':
        Z(e, 517, Wx(t, n, r.v, a, i, r.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = $0(i.Strings, r.v, i.revStrings);
          Z(e, 253, Bx(t, n, f, a));
        } else Z(e, 516, Mx(t, n, (r.v || '').slice(0, 255), a, i));
        break;
      default:
        Z(e, 513, jr(t, n, a));
    }
}
function Ym(e, r, t) {
  var n = wt(),
    i = t.SheetNames[e],
    a = t.Sheets[i] || {},
    s = (t || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = r.biff == 8,
    c,
    u = '',
    h = [],
    d = ke(a['!ref'] || 'A1'),
    p = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= p) {
    if (r.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (d.e.c = Math.min(d.e.c, 255)), (d.e.r = Math.min(d.e.c, p - 1));
  }
  Z(n, 2057, W0(t, 16, r)),
    Z(n, 13, bt(1)),
    Z(n, 12, bt(100)),
    Z(n, 15, dt(!0)),
    Z(n, 17, dt(!1)),
    Z(n, 16, Gr(0.001)),
    Z(n, 95, dt(!0)),
    Z(n, 42, dt(!1)),
    Z(n, 43, dt(!1)),
    Z(n, 130, bt(1)),
    Z(n, 128, Hx()),
    Z(n, 131, dt(!1)),
    Z(n, 132, dt(!1)),
    o && zm(n, a['!cols']),
    Z(n, 512, Ux(d, r)),
    o && (a['!links'] = []);
  for (var x = d.s.r; x <= d.e.r; ++x) {
    u = rt(x);
    for (var m = d.s.c; m <= d.e.c; ++m) {
      x === d.s.r && (h[m] = ft(m)), (c = h[m] + u);
      var S = l ? (a[x] || [])[m] : a[c];
      S && (Km(n, S, x, m, r), o && S.l && a['!links'].push([c, S.l]));
    }
  }
  var F = f.CodeName || f.name || i;
  return (
    o && Z(n, 574, Px((s.Views || [])[0])),
    o && (a['!merges'] || []).length && Z(n, 229, Xx(a['!merges'])),
    o && $m(n, a),
    Z(n, 442, cl(F)),
    o && jm(n, a),
    Z(n, 10),
    n.end()
  );
}
function qm(e, r, t) {
  var n = wt(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = t.biff == 8,
    l = t.biff == 5;
  if (
    (Z(n, 2057, W0(e, 5, t)),
    t.bookType == 'xla' && Z(n, 135),
    Z(n, 225, f ? bt(1200) : null),
    Z(n, 193, Tx(2)),
    l && Z(n, 191),
    l && Z(n, 192),
    Z(n, 226),
    Z(n, 92, Nx('SheetJS', t)),
    Z(n, 66, bt(f ? 1200 : 1252)),
    f && Z(n, 353, bt(0)),
    f && Z(n, 448),
    Z(n, 317, Jx(e.SheetNames.length)),
    f && e.vbaraw && Z(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    Z(n, 442, cl(o));
  }
  Z(n, 156, bt(17)),
    Z(n, 25, dt(!1)),
    Z(n, 18, dt(!1)),
    Z(n, 19, bt(0)),
    f && Z(n, 431, dt(!1)),
    f && Z(n, 444, bt(0)),
    Z(n, 61, Ix()),
    Z(n, 64, dt(!1)),
    Z(n, 141, bt(0)),
    Z(n, 34, dt(tm(e) == 'true')),
    Z(n, 14, dt(!0)),
    f && Z(n, 439, dt(!1)),
    Z(n, 218, bt(0)),
    Vm(n, e, t),
    Gm(n, e.SSF, t),
    Xm(n, t),
    f && Z(n, 352, dt(!1));
  var c = n.end(),
    u = wt();
  f && Z(u, 140, Kx()), f && t.Strings && Bm(u, 252, Dx(t.Strings)), Z(u, 10);
  var h = u.end(),
    d = wt(),
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
      kx({ pos: m, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[x] }, t),
    ),
      (m += r[x].length);
  }
  var F = d.end();
  if (p != F.length) throw new Error('BS8 ' + p + ' != ' + F.length);
  var y = [];
  return (
    c.length && y.push(c), F.length && y.push(F), h.length && y.push(h), et(y)
  );
}
function Jm(e, r) {
  var t = r || {},
    n = [];
  e && !e.SSF && (e.SSF = yt(Ue)),
    e &&
      e.SSF &&
      (Ea(),
      ga(e.SSF),
      (t.revssf = Ta(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    z0(t),
    (t.cellXfs = []),
    Fr(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = Ym(i, t, e);
  return n.unshift(qm(e, n, t)), et(n);
}
function Ml(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var n = e.Sheets[e.SheetNames[t]];
    if (!(!n || !n['!ref'])) {
      var i = Lt(n['!ref']);
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
      return Jm(e, r);
    case 4:
    case 3:
    case 2:
      return Wm(e, r);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function Zm(e, r, t, n) {
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
      var c = ye({ r: t, c: s }),
        u = n.dense ? (e[t] || [])[s] : e[c],
        h = (u && u.v != null && (u.h || R1(u.w || (hr(u), u.w) || ''))) || '',
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
function t_(e, r, t) {
  var n = [];
  return n.join('') + '<table' + (t && t.id ? ' id="' + t.id + '"' : '') + '>';
}
function bl(e, r) {
  var t = r || {},
    n = t.header != null ? t.header : Qm,
    i = t.footer != null ? t.footer : e_,
    a = [n],
    s = Lt(e['!ref']);
  (t.dense = Array.isArray(e)), a.push(t_(e, s, t));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(Zm(e, s, f, t));
  return a.push('</table>' + i), a.join('');
}
function Ul(e, r, t) {
  var n = t || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? Ye(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = r.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = Lt(e['!ref']);
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
    F = 0,
    y = 0;
  for (e['!cols'] || (e['!cols'] = []); p < f.length && x < l; ++p) {
    var N = f[p];
    if (sf(N)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var W = N.children;
    for (m = S = 0; m < W.length; ++m) {
      var Y = W[m];
      if (!(n.display && sf(Y))) {
        var R = Y.hasAttribute('data-v')
            ? Y.getAttribute('data-v')
            : Y.hasAttribute('v')
              ? Y.getAttribute('v')
              : I1(Y.innerHTML),
          U = Y.getAttribute('data-z') || Y.getAttribute('z');
        for (h = 0; h < u.length; ++h) {
          var P = u[h];
          P.s.c == S + a &&
            P.s.r < x + i &&
            x + i <= P.e.r &&
            ((S = P.e.c + 1 - a), (h = -1));
        }
        (y = +Y.getAttribute('colspan') || 1),
          ((F = +Y.getAttribute('rowspan') || 1) > 1 || y > 1) &&
            u.push({
              s: { r: x + i, c: S + a },
              e: { r: x + i + (F || 1) - 1, c: S + a + (y || 1) - 1 },
            });
        var V = { t: 's', v: R },
          X = Y.getAttribute('data-t') || Y.getAttribute('t') || '';
        R != null &&
          (R.length == 0
            ? (V.t = X || 'z')
            : n.raw ||
              R.trim().length == 0 ||
              X == 's' ||
              (R === 'TRUE'
                ? (V = { t: 'b', v: !0 })
                : R === 'FALSE'
                  ? (V = { t: 'b', v: !1 })
                  : isNaN(lr(R))
                    ? isNaN(Zn(R).getDate()) ||
                      ((V = { t: 'd', v: vt(R) }),
                      n.cellDates || (V = { t: 'n', v: At(V.v) }),
                      (V.z = n.dateNF || Ue[14]))
                    : (V = { t: 'n', v: lr(R) }))),
          V.z === void 0 && U != null && (V.z = U);
        var z = '',
          te = Y.getElementsByTagName('A');
        if (te && te.length)
          for (
            var ge = 0;
            ge < te.length &&
            !(
              te[ge].hasAttribute('href') &&
              ((z = te[ge].getAttribute('href')), z.charAt(0) != '#')
            );
            ++ge
          );
        z && z.charAt(0) != '#' && (V.l = { Target: z }),
          n.dense
            ? (e[x + i] || (e[x + i] = []), (e[x + i][S + a] = V))
            : (e[ye({ c: S + a, r: x + i })] = V),
          o.e.c < S + a && (o.e.c = S + a),
          (S += y);
      }
    }
    ++x;
  }
  return (
    u.length && (e['!merges'] = (e['!merges'] || []).concat(u)),
    (o.e.r = Math.max(o.e.r, x - 1 + i)),
    (e['!ref'] = Ge(o)),
    x >= l && (e['!fullref'] = Ge(((o.e.r = f.length - p + x - 1 + i), o))),
    e
  );
}
function Hl(e, r) {
  var t = r || {},
    n = t.dense ? [] : {};
  return Ul(n, e, r);
}
function r_(e, r) {
  return $r(Hl(e, r), r);
}
function sf(e) {
  var r = '',
    t = n_(e);
  return (
    t && (r = t(e).getPropertyValue('display')),
    r || (r = e.style && e.style.display),
    r === 'none'
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
      r =
        '<office:document-styles ' +
        ei({
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
      return je + r;
    };
  })(),
  ff = (function () {
    var e = function (a) {
        return Ae(a)
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
            Ae(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          u = Lt(a['!ref'] || 'A1'),
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
            l.push(r);
          for (; c <= u.e.c; ++c) {
            var S = !1,
              F = {},
              y = '';
            for (d = 0; d != h.length; ++d)
              if (
                !(h[d].s.c > c) &&
                !(h[d].s.r > o) &&
                !(h[d].e.c < c) &&
                !(h[d].e.r < o)
              ) {
                (h[d].s.c != c || h[d].s.r != o) && (S = !0),
                  (F['table:number-columns-spanned'] = h[d].e.c - h[d].s.c + 1),
                  (F['table:number-rows-spanned'] = h[d].e.r - h[d].s.r + 1);
                break;
              }
            if (S) {
              l.push(t);
              continue;
            }
            var N = ye({ r: o, c }),
              W = p ? (a[o] || [])[c] : a[N];
            if (
              W &&
              W.f &&
              ((F['table:formula'] = Ae(Av(W.f))),
              W.F && W.F.slice(0, N.length) == N)
            ) {
              var Y = Lt(W.F);
              (F['table:number-matrix-columns-spanned'] = Y.e.c - Y.s.c + 1),
                (F['table:number-matrix-rows-spanned'] = Y.e.r - Y.s.r + 1);
            }
            if (!W) {
              l.push(r);
              continue;
            }
            switch (W.t) {
              case 'b':
                (y = W.v ? 'TRUE' : 'FALSE'),
                  (F['office:value-type'] = 'boolean'),
                  (F['office:boolean-value'] = W.v ? 'true' : 'false');
                break;
              case 'n':
                (y = W.w || String(W.v || 0)),
                  (F['office:value-type'] = 'float'),
                  (F['office:value'] = W.v || 0);
                break;
              case 's':
              case 'str':
                (y = W.v == null ? '' : W.v),
                  (F['office:value-type'] = 'string');
                break;
              case 'd':
                (y = W.w || vt(W.v).toISOString()),
                  (F['office:value-type'] = 'date'),
                  (F['office:date-value'] = vt(W.v).toISOString()),
                  (F['table:style-name'] = 'ce1');
                break;
              default:
                l.push(r);
                continue;
            }
            var R = e(y);
            if (W.l && W.l.Target) {
              var U = W.l.Target;
              (U = U.charAt(0) == '#' ? '#' + yv(U.slice(1)) : U),
                U.charAt(0) != '#' && !U.match(/^\w+:/) && (U = '../' + U),
                (R = J('text:a', R, {
                  'xlink:href': U.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                J('table:table-cell', J('text:p', R, {}), F) +
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
                V0(u), (u.ods = f);
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
      var l = [je],
        o = ei({
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
        c = ei({
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
          l.push(tl().replace(/office:document-meta/g, 'office:meta')))
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
function Wl(e, r) {
  if (r.bookType == 'fods') return ff(e, r);
  var t = k0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    pe(t, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    pe(t, n, ff(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    pe(t, n, i_(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    pe(t, n, je + tl()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    pe(t, n, vx(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    pe(t, n, dx(i)),
    t
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function na(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function a_(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : jt(Qn(e));
}
function s_(e, r) {
  e: for (var t = 0; t <= e.length - r.length; ++t) {
    for (var n = 0; n < r.length; ++n) if (e[t + n] != r[n]) continue e;
    return !0;
  }
  return !1;
}
function yr(e) {
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
function f_(e, r, t) {
  var n =
      Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 20,
    i = t / Math.pow(10, n - 6176);
  (e[r + 15] |= n >> 7), (e[r + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[r + a] = i & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function ti(e, r) {
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
function we(e) {
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
function xn(e) {
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
function $e(e) {
  for (var r = [], t = [0]; t[0] < e.length; ) {
    var n = t[0],
      i = ti(e, t),
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
        (s = ti(e, t)), (f = e.slice(t[0], t[0] + s)), (t[0] += s);
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
function Ze(e) {
  var r = [];
  return (
    e.forEach(function (t, n) {
      t.forEach(function (i) {
        i.data &&
          (r.push(we(n * 8 + i.type)),
          i.type == 2 && r.push(we(i.data.length)),
          r.push(i.data));
      });
    }),
    yr(r)
  );
}
function Vt(e) {
  for (var r, t = [], n = [0]; n[0] < e.length; ) {
    var i = ti(e, n),
      a = $e(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: xn(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = $e(f.data),
        o = xn(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (r = a[3]) != null && r[0] && (s.merge = xn(a[3][0].data) >>> 0 > 0),
      t.push(s);
  }
  return t;
}
function an(e) {
  var r = [];
  return (
    e.forEach(function (t) {
      var n = [];
      (n[1] = [{ data: we(t.id), type: 0 }]),
        (n[2] = []),
        t.merge != null && (n[3] = [{ data: we(+!!t.merge), type: 0 }]);
      var i = [];
      t.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: we(s.data.length) }]),
          n[2].push({ data: Ze(s.meta), type: 2 });
      });
      var a = Ze(n);
      r.push(we(a.length)),
        r.push(a),
        i.forEach(function (s) {
          return r.push(s);
        });
    }),
    yr(r)
  );
}
function o_(e, r) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var t = [0], n = ti(r, t), i = []; t[0] < r.length; ) {
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
        (i = [yr(i)]),
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
  var c = yr(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Gt(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = e[t++],
      i = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
    (t += 3), r.push(o_(n, e.slice(t, t + i))), (t += i);
  }
  if (t !== e.length) throw new Error('data is not a valid framed stream!');
  return yr(r);
}
function sn(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = Math.min(e.length - t, 268435455),
      i = new Uint8Array(4);
    r.push(i);
    var a = we(n),
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
  return yr(r);
}
function Ka(e, r) {
  var t = new Uint8Array(32),
    n = na(t),
    i = 12,
    a = 0;
  switch (((t[0] = 5), e.t)) {
    case 'n':
      (t[1] = 2), f_(t, i, e.v), (a |= 1), (i += 16);
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
function Ya(e, r) {
  var t = new Uint8Array(32),
    n = na(t),
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
function pr(e) {
  var r = $e(e);
  return ti(r[1][0].data);
}
function l_(e, r, t) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      xn(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = na(e[7][0].data),
      c = 0,
      u = [],
      h = na(e[4][0].data),
      d = 0,
      p = [],
      x = 0;
    x < r.length;
    ++x
  ) {
    if (r[x] == null) {
      o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, c, !0), h.setUint16(x * 2, d, !0);
    var m, S;
    switch (typeof r[x]) {
      case 'string':
        (m = Ka({ t: 's', v: r[x] }, t)), (S = Ya({ t: 's', v: r[x] }, t));
        break;
      case 'number':
        (m = Ka({ t: 'n', v: r[x] }, t)), (S = Ya({ t: 'n', v: r[x] }, t));
        break;
      case 'boolean':
        (m = Ka({ t: 'b', v: r[x] }, t)), (S = Ya({ t: 'b', v: r[x] }, t));
        break;
      default:
        throw new Error('Unsupported value ' + r[x]);
    }
    u.push(m), (c += m.length), p.push(S), (d += S.length), ++l;
  }
  for (e[2][0].data = we(l); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535, !0);
  return (e[6][0].data = yr(u)), (e[3][0].data = yr(p)), l;
}
function c_(e, r) {
  if (!r || !r.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var t = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = Lt(t['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(Ge(n)),
      );
  var a = ia(t, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (B) {
    return B.forEach(function (O) {
      typeof O == 'string' && s.push(O);
    });
  });
  var f = {},
    l = [],
    o = Fe.read(r.numbers, { type: 'base64' });
  o.FileIndex.map(function (B, O) {
    return [B, o.FullPaths[O]];
  }).forEach(function (B) {
    var O = B[0],
      C = B[1];
    if (O.type == 2 && O.name.match(/\.iwa/)) {
      var G = O.content,
        fe = Gt(G),
        oe = Vt(fe);
      oe.forEach(function (se) {
        l.push(se.id),
          (f[se.id] = {
            deps: [],
            location: C,
            type: xn(se.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (B, O) {
      return B - O;
    });
  var c = l
    .filter(function (B) {
      return B > 1;
    })
    .map(function (B) {
      return [B, we(B)];
    });
  o.FileIndex.map(function (B, O) {
    return [B, o.FullPaths[O]];
  }).forEach(function (B) {
    var O = B[0];
    if ((B[1], !!O.name.match(/\.iwa/))) {
      var C = Vt(Gt(O.content));
      C.forEach(function (G) {
        G.messages.forEach(function (fe) {
          c.forEach(function (oe) {
            G.messages.some(function (se) {
              return xn(se.meta[1][0].data) != 11006 && s_(se.data, oe[1]);
            }) && f[oe[0]].deps.push(G.id);
          });
        });
      });
    }
  });
  for (
    var u = Fe.find(o, f[1].location), h = Vt(Gt(u.content)), d, p = 0;
    p < h.length;
    ++p
  ) {
    var x = h[p];
    x.id == 1 && (d = x);
  }
  var m = pr($e(d.messages[0].data)[1][0].data);
  for (
    u = Fe.find(o, f[m].location), h = Vt(Gt(u.content)), p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  for (
    m = pr($e(d.messages[0].data)[2][0].data),
      u = Fe.find(o, f[m].location),
      h = Vt(Gt(u.content)),
      p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  for (
    m = pr($e(d.messages[0].data)[2][0].data),
      u = Fe.find(o, f[m].location),
      h = Vt(Gt(u.content)),
      p = 0;
    p < h.length;
    ++p
  )
    (x = h[p]), x.id == m && (d = x);
  var S = $e(d.messages[0].data);
  {
    (S[6][0].data = we(n.e.r + 1)), (S[7][0].data = we(n.e.c + 1));
    var F = pr(S[46][0].data),
      y = Fe.find(o, f[F].location),
      N = Vt(Gt(y.content));
    {
      for (var W = 0; W < N.length && N[W].id != F; ++W);
      if (N[W].id != F) throw 'Bad ColumnRowUIDMapArchive';
      var Y = $e(N[W].messages[0].data);
      (Y[1] = []), (Y[2] = []), (Y[3] = []);
      for (var R = 0; R <= n.e.c; ++R) {
        var U = [];
        (U[1] = U[2] = [{ type: 0, data: we(R + 420690) }]),
          Y[1].push({ type: 2, data: Ze(U) }),
          Y[2].push({ type: 0, data: we(R) }),
          Y[3].push({ type: 0, data: we(R) });
      }
      (Y[4] = []), (Y[5] = []), (Y[6] = []);
      for (var P = 0; P <= n.e.r; ++P)
        (U = []),
          (U[1] = U[2] = [{ type: 0, data: we(P + 726270) }]),
          Y[4].push({ type: 2, data: Ze(U) }),
          Y[5].push({ type: 0, data: we(P) }),
          Y[6].push({ type: 0, data: we(P) });
      N[W].messages[0].data = Ze(Y);
    }
    (y.content = sn(an(N))), (y.size = y.content.length), delete S[46];
    var V = $e(S[4][0].data);
    {
      V[7][0].data = we(n.e.r + 1);
      var X = $e(V[1][0].data),
        z = pr(X[2][0].data);
      (y = Fe.find(o, f[z].location)), (N = Vt(Gt(y.content)));
      {
        if (N[0].id != z) throw 'Bad HeaderStorageBucket';
        var te = $e(N[0].messages[0].data);
        for (P = 0; P < a.length; ++P) {
          var ge = $e(te[2][0].data);
          (ge[1][0].data = we(P)),
            (ge[4][0].data = we(a[P].length)),
            (te[2][P] = { type: te[2][0].type, data: Ze(ge) });
        }
        N[0].messages[0].data = Ze(te);
      }
      (y.content = sn(an(N))), (y.size = y.content.length);
      var ce = pr(V[2][0].data);
      (y = Fe.find(o, f[ce].location)), (N = Vt(Gt(y.content)));
      {
        if (N[0].id != ce) throw 'Bad HeaderStorageBucket';
        for (te = $e(N[0].messages[0].data), R = 0; R <= n.e.c; ++R)
          (ge = $e(te[2][0].data)),
            (ge[1][0].data = we(R)),
            (ge[4][0].data = we(n.e.r + 1)),
            (te[2][R] = { type: te[2][0].type, data: Ze(ge) });
        N[0].messages[0].data = Ze(te);
      }
      (y.content = sn(an(N))), (y.size = y.content.length);
      var He = pr(V[4][0].data);
      (function () {
        for (
          var B = Fe.find(o, f[He].location), O = Vt(Gt(B.content)), C, G = 0;
          G < O.length;
          ++G
        ) {
          var fe = O[G];
          fe.id == He && (C = fe);
        }
        var oe = $e(C.messages[0].data);
        {
          oe[3] = [];
          var se = [];
          s.forEach(function (ie, ue) {
            (se[1] = [{ type: 0, data: we(ue) }]),
              (se[2] = [{ type: 0, data: we(1) }]),
              (se[3] = [{ type: 2, data: a_(ie) }]),
              oe[3].push({ type: 2, data: Ze(se) });
          });
        }
        C.messages[0].data = Ze(oe);
        var ee = an(O),
          Te = sn(ee);
        (B.content = Te), (B.size = B.content.length);
      })();
      var De = $e(V[3][0].data);
      {
        var Ct = De[1][0];
        delete De[2];
        var We = $e(Ct.data);
        {
          var lt = pr(We[2][0].data);
          (function () {
            for (
              var B = Fe.find(o, f[lt].location),
                O = Vt(Gt(B.content)),
                C,
                G = 0;
              G < O.length;
              ++G
            ) {
              var fe = O[G];
              fe.id == lt && (C = fe);
            }
            var oe = $e(C.messages[0].data);
            {
              delete oe[6], delete De[7];
              var se = new Uint8Array(oe[5][0].data);
              oe[5] = [];
              for (var ee = 0, Te = 0; Te <= n.e.r; ++Te) {
                var ie = $e(se);
                (ee += l_(ie, a[Te], s)),
                  (ie[1][0].data = we(Te)),
                  oe[5].push({ data: Ze(ie), type: 2 });
              }
              (oe[1] = [{ type: 0, data: we(n.e.c + 1) }]),
                (oe[2] = [{ type: 0, data: we(n.e.r + 1) }]),
                (oe[3] = [{ type: 0, data: we(ee) }]),
                (oe[4] = [{ type: 0, data: we(n.e.r + 1) }]);
            }
            C.messages[0].data = Ze(oe);
            var ue = an(O),
              le = sn(ue);
            (B.content = le), (B.size = B.content.length);
          })();
        }
        Ct.data = Ze(We);
      }
      V[3][0].data = Ze(De);
    }
    S[4][0].data = Ze(V);
  }
  d.messages[0].data = Ze(S);
  var ct = an(h),
    A = sn(ct);
  return (u.content = A), (u.size = u.content.length), o;
}
function u_(e) {
  return function (t) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      t[i[0]] === void 0 && (t[i[0]] = i[1]),
        i[2] === 'n' && (t[i[0]] = Number(t[i[0]]));
    }
  };
}
function z0(e) {
  u_([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(e);
}
function h_(e, r) {
  return r.bookType == 'ods'
    ? Wl(e, r)
    : r.bookType == 'numbers'
      ? c_(e, r)
      : r.bookType == 'xlsb'
        ? x_(e, r)
        : d_(e, r);
}
function x_(e, r) {
  (ln = 1024),
    e && !e.SSF && (e.SSF = yt(Ue)),
    e &&
      e.SSF &&
      (Ea(),
      ga(e.SSF),
      (r.revssf = Ta(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Xn
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = r.bookType == 'xlsb' ? 'bin' : 'xml',
    n = Sl.indexOf(r.bookType) > -1,
    i = Zo();
  z0((r = r || {}));
  var a = k0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    Fr(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    pe(a, s, rl(e.Props, r)),
    i.coreprops.push(s),
    Se(r.rels, 2, s, me.CORE_PROPS),
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
      pe(a, s, il(e.Props)),
      i.extprops.push(s),
      Se(r.rels, 3, s, me.EXT_PROPS),
      e.Custprops !== e.Props &&
        nt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        pe(a, s, al(e.Custprops)),
        i.custprops.push(s),
        Se(r.rels, 4, s, me.CUST_PROPS)),
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
        (s = 'xl/worksheets/sheet' + f + '.' + t),
          pe(a, s, vm(f - 1, s, r, e, c)),
          i.sheets.push(s),
          Se(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, me.WS[0]);
    }
    if (u) {
      var d = u['!comments'],
        p = !1,
        x = '';
      d &&
        d.length > 0 &&
        ((x = 'xl/comments' + f + '.' + t),
        pe(a, x, gm(d, x)),
        i.comments.push(x),
        Se(c, -1, '../comments' + f + '.' + t, me.CMNT),
        (p = !0)),
        u['!legacy'] &&
          p &&
          pe(a, 'xl/drawings/vmlDrawing' + f + '.vml', Tl(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    c['!id'].rId1 && pe(a, el(s), un(c));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      pe(a, s, _m(r.Strings, s, r)),
      i.strs.push(s),
      Se(r.wbrels, -1, 'sharedStrings.' + t, me.SST)),
    (s = 'xl/workbook.' + t),
    pe(a, s, pm(e, s)),
    i.workbooks.push(s),
    Se(r.rels, 1, s, me.WB),
    (s = 'xl/theme/theme1.xml'),
    pe(a, s, gl(e.Themes, r)),
    i.themes.push(s),
    Se(r.wbrels, -1, 'theme/theme1.xml', me.THEME),
    (s = 'xl/styles.' + t),
    pe(a, s, mm(e, s, r)),
    i.styles.push(s),
    Se(r.wbrels, -1, 'styles.' + t, me.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      pe(a, s, e.vbaraw),
      i.vba.push(s),
      Se(r.wbrels, -1, 'vbaProject.bin', me.VBA)),
    (s = 'xl/metadata.' + t),
    pe(a, s, Em(s)),
    i.metadata.push(s),
    Se(r.wbrels, -1, 'metadata.' + t, me.XLMETA),
    pe(a, '[Content_Types].xml', Qo(i, r)),
    pe(a, '_rels/.rels', un(r.rels)),
    pe(a, 'xl/_rels/workbook.' + t + '.rels', un(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function d_(e, r) {
  (ln = 1024),
    e && !e.SSF && (e.SSF = yt(Ue)),
    e &&
      e.SSF &&
      (Ea(),
      ga(e.SSF),
      (r.revssf = Ta(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Xn
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = 'xml',
    n = Sl.indexOf(r.bookType) > -1,
    i = Zo();
  z0((r = r || {}));
  var a = k0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    Fr(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    pe(a, s, rl(e.Props, r)),
    i.coreprops.push(s),
    Se(r.rels, 2, s, me.CORE_PROPS),
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
    pe(a, s, il(e.Props)),
    i.extprops.push(s),
    Se(r.rels, 3, s, me.EXT_PROPS),
    e.Custprops !== e.Props &&
      nt(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      pe(a, s, al(e.Custprops)),
      i.custprops.push(s),
      Se(r.rels, 4, s, me.CUST_PROPS));
  var c = ['SheetJ5'];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var u = { '!id': {} },
      h = e.Sheets[e.SheetNames[f - 1]],
      d = (h || {})['!type'] || 'sheet';
    switch (d) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + t),
          pe(a, s, Dl(f - 1, r, e, u)),
          i.sheets.push(s),
          Se(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, me.WS[0]);
    }
    if (h) {
      var p = h['!comments'],
        x = !1,
        m = '';
      if (p && p.length > 0) {
        var S = !1;
        p.forEach(function (F) {
          F[1].forEach(function (y) {
            y.T == !0 && (S = !0);
          });
        }),
          S &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + t),
            pe(a, m, Xd(p, c, r)),
            i.threadedcomments.push(m),
            Se(
              u,
              -1,
              '../threadedComments/threadedComment' + f + '.' + t,
              me.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + t),
          pe(a, m, wl(p)),
          i.comments.push(m),
          Se(u, -1, '../comments' + f + '.' + t, me.CMNT),
          (x = !0);
      }
      h['!legacy'] &&
        x &&
        pe(a, 'xl/drawings/vmlDrawing' + f + '.vml', Tl(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    u['!id'].rId1 && pe(a, el(s), un(u));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      pe(a, s, xl(r.Strings, r)),
      i.strs.push(s),
      Se(r.wbrels, -1, 'sharedStrings.' + t, me.SST)),
    (s = 'xl/workbook.' + t),
    pe(a, s, Ll(e)),
    i.workbooks.push(s),
    Se(r.rels, 1, s, me.WB),
    (s = 'xl/theme/theme1.xml'),
    pe(a, s, gl(e.Themes, r)),
    i.themes.push(s),
    Se(r.wbrels, -1, 'theme/theme1.xml', me.THEME),
    (s = 'xl/styles.' + t),
    pe(a, s, ml(e, r)),
    i.styles.push(s),
    Se(r.wbrels, -1, 'styles.' + t, me.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      pe(a, s, e.vbaraw),
      i.vba.push(s),
      Se(r.wbrels, -1, 'vbaProject.bin', me.VBA)),
    (s = 'xl/metadata.' + t),
    pe(a, s, El()),
    i.metadata.push(s),
    Se(r.wbrels, -1, 'metadata.' + t, me.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      pe(a, s, $d(c)),
      i.people.push(s),
      Se(r.wbrels, -1, 'persons/person.xml', me.PEOPLE)),
    pe(a, '[Content_Types].xml', Qo(i, r)),
    pe(a, '_rels/.rels', un(r.rels)),
    pe(a, 'xl/_rels/workbook.' + t + '.rels', un(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function p_(e, r) {
  var t = '';
  switch ((r || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case 'base64':
      t = ur(e.slice(0, 12));
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
function Vl(e, r) {
  switch (r.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      r.type = '';
      break;
    case 'file':
      return li(r.file, Fe.write(e, { type: _e ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + r.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
  return Fe.write(e, r);
}
function v_(e, r) {
  var t = yt(r || {}),
    n = h_(e, t);
  return m_(n, t);
}
function m_(e, r) {
  var t = {},
    n = _e ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
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
    ? Fe.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[t.type] || t.type,
        compression: !!r.compression,
      })
    : e.generate(t);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (r.type == 'binary' || r.type == 'base64') return i;
    i = new Uint8Array(_a(i));
  }
  return r.password && typeof encrypt_agile < 'u'
    ? Vl(encrypt_agile(i, r.password), r)
    : r.type === 'file'
      ? li(r.file, i)
      : r.type == 'string'
        ? Wn(i)
        : i;
}
function __(e, r) {
  var t = r || {},
    n = Pm(e, t);
  return Vl(n, t);
}
function er(e, r, t) {
  t || (t = '');
  var n = t + e;
  switch (r.type) {
    case 'base64':
      return Jn(Qn(n));
    case 'binary':
      return Qn(n);
    case 'string':
      return e;
    case 'file':
      return li(r.file, n, 'utf8');
    case 'buffer':
      return _e
        ? dr(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : er(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function g_(e, r) {
  switch (r.type) {
    case 'base64':
      return Jn(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return li(r.file, e, 'binary');
    case 'buffer':
      return _e
        ? dr(e, 'binary')
        : e.split('').map(function (t) {
            return t.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function Ci(e, r) {
  switch (r.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var t = '', n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
      return r.type == 'base64' ? Jn(t) : r.type == 'string' ? Wn(t) : t;
    case 'file':
      return li(r.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
}
function Gl(e, r) {
  zh(), im(e);
  var t = yt(r || {});
  if (
    (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)), t.type == 'array')
  ) {
    t.type = 'binary';
    var n = Gl(e, t);
    return (t.type = 'array'), _a(n);
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
      return er(Dm(e, t), t);
    case 'slk':
    case 'sylk':
      return er(td.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'htm':
    case 'html':
      return er(bl(e.Sheets[e.SheetNames[i]], t), t);
    case 'txt':
      return g_(jl(e.Sheets[e.SheetNames[i]], t), t);
    case 'csv':
      return er(K0(e.Sheets[e.SheetNames[i]], t), t, '\uFEFF');
    case 'dif':
      return er(rd.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'dbf':
      return Ci(ed.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'prn':
      return er(nd.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'rtf':
      return er(cd.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'eth':
      return er(hl.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'fods':
      return er(Wl(e, t), t);
    case 'wk1':
      return Ci(Qs.sheet_to_wk1(e.Sheets[e.SheetNames[i]], t), t);
    case 'wk3':
      return Ci(Qs.book_to_wk3(e, t), t);
    case 'biff2':
      t.biff || (t.biff = 2);
    case 'biff3':
      t.biff || (t.biff = 3);
    case 'biff4':
      return t.biff || (t.biff = 4), Ci(Ml(e, t), t);
    case 'biff5':
      t.biff || (t.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return t.biff || (t.biff = 8), __(e, t);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return v_(e, t);
    default:
      throw new Error('Unrecognized bookType |' + t.bookType + '|');
  }
}
function E_(e) {
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
function T_(e, r, t) {
  var n = {};
  return (n.type = 'file'), (n.file = r), E_(n), Gl(e, n);
}
function w_(e, r, t, n, i, a, s, f) {
  var l = rt(t),
    o = f.defval,
    c = f.raw || !Object.prototype.hasOwnProperty.call(f, 'raw'),
    u = !0,
    h = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(h, '__rowNum__', { value: t, enumerable: !1 });
      } catch {
        h.__rowNum__ = t;
      }
    else h.__rowNum__ = t;
  if (!s || e[t])
    for (var d = r.s.c; d <= r.e.c; ++d) {
      var p = s ? e[t][d] : e[n[d] + l];
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
              : hr(p, x, f);
        x != null && (u = !1);
      }
    }
  return { row: h, isempty: u };
}
function ia(e, r) {
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
      l = ke(c);
      break;
    case 'number':
      (l = ke(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var u = rt(l.s.r),
    h = [],
    d = [],
    p = 0,
    x = 0,
    m = Array.isArray(e),
    S = l.s.r,
    F = 0,
    y = {};
  m && !e[S] && (e[S] = []);
  var N = (o.skipHidden && e['!cols']) || [],
    W = (o.skipHidden && e['!rows']) || [];
  for (F = l.s.c; F <= l.e.c; ++F)
    if (!(N[F] || {}).hidden)
      switch (((h[F] = ft(F)), (t = m ? e[S][F] : e[h[F] + u]), n)) {
        case 1:
          a[F] = F - l.s.c;
          break;
        case 2:
          a[F] = h[F];
          break;
        case 3:
          a[F] = o.header[F - l.s.c];
          break;
        default:
          if (
            (t == null && (t = { w: '__EMPTY', t: 's' }),
            (f = s = hr(t, null, o)),
            (x = y[s] || 0),
            !x)
          )
            y[s] = 1;
          else {
            do f = s + '_' + x++;
            while (y[f]);
            (y[s] = x), (y[f] = 1);
          }
          a[F] = f;
      }
  for (S = l.s.r + i; S <= l.e.r; ++S)
    if (!(W[S] || {}).hidden) {
      var Y = w_(e, l, S, h, n, a, m, o);
      (Y.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (d[p++] = Y.row);
    }
  return (d.length = p), d;
}
var of = /"/g;
function S_(e, r, t, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', u = rt(t), h = r.s.c; h <= r.e.c; ++h)
    if (n[h]) {
      var d = f.dense ? (e[t] || [])[h] : e[n[h] + u];
      if (d == null) c = '';
      else if (d.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && d.t == 'n' ? d.v : hr(d, null, f)));
        for (var p = 0, x = 0; p !== c.length; ++p)
          if (
            (x = c.charCodeAt(p)) === i ||
            x === a ||
            x === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(of, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        d.f != null && !d.F
          ? ((l = !1),
            (c = '=' + d.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(of, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function K0(e, r) {
  var t = [],
    n = r ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = ke(e['!ref']),
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
    (h[p] || {}).hidden || (u[p] = ft(p));
  for (var x = 0, m = i.s.r; m <= i.e.r; ++m)
    (d[m] || {}).hidden ||
      ((c = S_(e, i, m, u, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && t.push((x++ ? f : '') + c)));
  return delete n.dense, t.join('');
}
function jl(e, r) {
  r || (r = {}),
    (r.FS = '	'),
    (r.RS = `
`);
  var t = K0(e, r);
  return t;
}
function A_(e) {
  var r = '',
    t,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = ke(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = ft(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = rt(c), f = i.s.c; f <= i.e.c; ++f)
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
function Xl(e, r, t) {
  var n = t || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? Ye(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + r.length - 1 + i } };
  if (a['!ref']) {
    var u = ke(a['!ref']);
    (c.e.c = Math.max(c.e.c, u.e.c)),
      (c.e.r = Math.max(c.e.r, u.e.r)),
      s == -1 && ((s = u.e.r + 1), (c.e.r = s + r.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = r.length - 1 + i));
  var h = n.header || [],
    d = 0;
  r.forEach(function (x, m) {
    nt(x).forEach(function (S) {
      (d = h.indexOf(S)) == -1 && (h[(d = h.length)] = S);
      var F = x[S],
        y = 'z',
        N = '',
        W = ye({ c: f + d, r: s + m + i });
      (o = ri(a, W)),
        F && typeof F == 'object' && !(F instanceof Date)
          ? (a[W] = F)
          : (typeof F == 'number'
              ? (y = 'n')
              : typeof F == 'boolean'
                ? (y = 'b')
                : typeof F == 'string'
                  ? (y = 's')
                  : F instanceof Date
                    ? ((y = 'd'),
                      n.cellDates || ((y = 'n'), (F = At(F))),
                      (N = n.dateNF || Ue[14]))
                    : F === null && n.nullError && ((y = 'e'), (F = 0)),
            o
              ? ((o.t = y), (o.v = F), delete o.w, delete o.R, N && (o.z = N))
              : (a[W] = o = { t: y, v: F }),
            N && (o.z = N));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + h.length - 1));
  var p = rt(s);
  if (i) for (d = 0; d < h.length; ++d) a[ft(d + f) + p] = { t: 's', v: h[d] };
  return (a['!ref'] = Ge(c)), a;
}
function y_(e, r) {
  return Xl(null, e, r);
}
function ri(e, r, t) {
  if (typeof r == 'string') {
    if (Array.isArray(e)) {
      var n = Ye(r);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[r] || (e[r] = { t: 'z' });
  }
  return typeof r != 'number' ? ri(e, ye(r)) : ri(e, ye({ r, c: t || 0 }));
}
function F_(e, r) {
  if (typeof r == 'number') {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error('Cannot find sheet # ' + r);
  } else if (typeof r == 'string') {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error('Cannot find sheet name |' + r + '|');
  } else throw new Error('Cannot find sheet |' + r + '|');
}
function C_() {
  return { SheetNames: [], Sheets: {} };
}
function O_(e, r, t, n) {
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
  if ((Pl(t), e.SheetNames.indexOf(t) >= 0))
    throw new Error('Worksheet with name |' + t + '| already exists!');
  return e.SheetNames.push(t), (e.Sheets[t] = r), t;
}
function R_(e, r, t) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = F_(e, r);
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
function N_(e, r) {
  return (e.z = r), e;
}
function $l(e, r, t) {
  return r ? ((e.l = { Target: r }), t && (e.l.Tooltip = t)) : delete e.l, e;
}
function k_(e, r, t) {
  return $l(e, '#' + r, t);
}
function D_(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || 'SheetJS' });
}
function I_(e, r, t, n) {
  for (
    var i = typeof r != 'string' ? r : ke(r),
      a = typeof r == 'string' ? r : Ge(r),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = ri(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = t), n && (l.D = !0));
    }
  return e;
}
var qa = {
    encode_col: ft,
    encode_row: rt,
    encode_cell: ye,
    encode_range: Ge,
    decode_col: M0,
    decode_row: B0,
    split_cell: z1,
    decode_cell: Ye,
    decode_range: Lt,
    format_cell: hr,
    sheet_add_aoa: $o,
    sheet_add_json: Xl,
    sheet_add_dom: Ul,
    aoa_to_sheet: Tn,
    json_to_sheet: y_,
    table_to_sheet: Hl,
    table_to_book: r_,
    sheet_to_csv: K0,
    sheet_to_txt: jl,
    sheet_to_json: ia,
    sheet_to_html: bl,
    sheet_to_formulae: A_,
    sheet_to_row_object_array: ia,
    sheet_get_cell: ri,
    book_new: C_,
    book_append_sheet: O_,
    book_set_sheet_visibility: R_,
    cell_set_number_format: N_,
    cell_set_hyperlink: $l,
    cell_set_internal_link: k_,
    cell_add_comment: D_,
    sheet_set_array_formula: I_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  P_ = Ft(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/suppliers/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function L_(e, r) {
  m0(r, !0);
  let t = sr('');
  Hf(() => {
    Me(t, window.location.pathname, !0), console.log('currentPath:', ve(t));
  });
  function n(U) {
    return U === '/' ? ve(t) === '/' : ve(t).startsWith(U);
  }
  var i = P_(),
    a = ze(Re(i), 2),
    s = Re(a),
    f = Re(s);
  let l;
  var o = ze(s, 2),
    c = Re(o);
  let u;
  var h = ze(o, 2),
    d = Re(h);
  let p;
  var x = ze(h, 2),
    m = Re(x);
  let S;
  var F = ze(x, 2),
    y = Re(F);
  let N;
  var W = ze(F, 2),
    Y = Re(W);
  let R;
  Ir(
    (U, P, V, X, z, te) => {
      (l = en(f, 1, 'svelte-1t3skh', null, l, U)),
        (u = en(c, 1, 'svelte-1t3skh', null, u, P)),
        (p = en(d, 1, 'svelte-1t3skh', null, p, V)),
        (S = en(m, 1, 'svelte-1t3skh', null, S, X)),
        (N = en(y, 1, 'svelte-1t3skh', null, N, z)),
        (R = en(Y, 1, 'svelte-1t3skh', null, R, te));
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
    gt(e, i),
    _0();
}
var B_ = Ft('<p class="status svelte-124l2pk">Loading suppliers...</p>'),
  M_ = Ft('<p class="status error svelte-124l2pk"> </p>'),
  b_ = Ft('<p class="status svelte-124l2pk">No suppliers found.</p>'),
  U_ = Ft('<p class="status svelte-124l2pk"> </p>'),
  H_ = Ft('<input type="text" class="edit-input svelte-124l2pk" required/>'),
  W_ = Ft('<span class="cell-content svelte-124l2pk"> </span>'),
  V_ = Ft('<input type="text" class="edit-input svelte-124l2pk" required/>'),
  G_ = Ft('<span class="cell-content svelte-124l2pk"> </span>'),
  j_ = Ft(
    '<button class="btn save-btn svelte-124l2pk" title="Save Changes">Save</button> <button class="btn cancel-btn svelte-124l2pk" title="Cancel Edit">Cancel</button>',
    1,
  ),
  X_ = Ft(
    '<button class="btn edit-btn svelte-124l2pk" title="Edit Supplier">Edit</button> <button class="btn delete-btn svelte-124l2pk">Delete</button>',
    1,
  ),
  $_ = Ft(
    '<tr><td class="svelte-124l2pk"><span class="cell-content svelte-124l2pk"> </span></td><td class="svelte-124l2pk"><!></td><td class="svelte-124l2pk"><!></td><td class="svelte-124l2pk"><!></td></tr>',
  ),
  z_ = Ft(
    '<div class="table-container svelte-124l2pk"><table class="svelte-124l2pk"><thead class="svelte-124l2pk"><tr><th class="svelte-124l2pk">Code</th><th class="svelte-124l2pk">Name</th><th class="svelte-124l2pk">Contact</th><th class="svelte-124l2pk">Actions</th></tr></thead><tbody></tbody></table></div>',
  ),
  K_ = Ft(
    '<!> <div class="wrapper svelte-124l2pk"><div class="card svelte-124l2pk"><div class="header svelte-124l2pk"><h2>Manage Suppliers</h2> <div class="controls svelte-124l2pk"><input placeholder="Search..." class="search-input svelte-124l2pk"/> <button class="btn excel-btn svelte-124l2pk">Export Excel</button></div></div> <div class="add-supplier-form svelte-124l2pk"><form><input placeholder="Supplier Code" required class="svelte-124l2pk"/> <input placeholder="Supplier Name" required class="svelte-124l2pk"/> <input placeholder="Contact" required class="svelte-124l2pk"/> <button type="submit" class="btn add-btn svelte-124l2pk">Add Supplier</button></form></div> <!></div></div>',
    1,
  );
function Y_(e, r) {
  m0(r, !1);
  const [t, n] = hu(),
    i = () => Dr(y, '$editingSupplierId', t),
    a = () => Dr(u, '$rawSuppliers', t),
    s = () => Dr(x, '$searchTerm', t),
    f = () => Dr(d, '$isLoading', t),
    l = () => Dr(p, '$errorMessage', t),
    o = () => Dr(P, '$filteredSuppliers', t),
    c = () => Dr(h, '$inventoryItems', t),
    u = Pr([]),
    h = Pr([]),
    d = Pr(!0),
    p = Pr(''),
    x = Pr('');
  let m = Lr(''),
    S = Lr(''),
    F = Lr('');
  const y = Pr(null);
  let N = Lr(''),
    W = Lr('');
  const Y = 'http://localhost:3000/api/suppliers',
    R = 'http://localhost:3000/api/master/all-inventory';
  async function U() {
    var ie;
    d.set(!0), p.set('');
    try {
      const [ue, le] = await Promise.all([Ne.get(Y), Ne.get(R)]);
      u.set(Array.isArray(ue.data) ? ue.data : []),
        h.set(Array.isArray(le.data) ? le.data : []);
    } catch (ue) {
      let le = 'An unknown error occurred while fetching data.';
      ue.response
        ? (le = `Server error: ${ue.response.status} - ${((ie = ue.response.data) == null ? void 0 : ie.error) || ue.message}`)
        : ue.request
          ? (le = 'Network error: No response from server. Is the API running?')
          : (le = `Request setup error: ${ue.message}`),
        p.set(le),
        u.set([]),
        h.set([]);
    } finally {
      d.set(!1);
    }
  }
  Hf(U);
  const P = lu([u, x], ([ie, ue]) => {
    if (!ue.trim()) return ie;
    const le = ue.toLowerCase();
    return ie.filter(
      (Ee) =>
        (Ee.id && String(Ee.id).toLowerCase().includes(le)) ||
        (Ee.name && Ee.name.toLowerCase().includes(le)) ||
        (Ee.contact && Ee.contact.toLowerCase().includes(le)),
    );
  });
  async function V() {
    var ie, ue, le, Ee;
    if (!ve(m).trim() || !ve(S).trim() || !ve(F).trim()) {
      p.set('Supplier Code, Name, and Contact are required.');
      return;
    }
    p.set('');
    try {
      await Ne.post(Y, {
        suppcode: ve(m).trim(),
        suppname: ve(S).trim(),
        suppcontact: ve(F).trim(),
      }),
        Me(m, ''),
        Me(S, ''),
        Me(F, ''),
        await U();
    } catch (xe) {
      const ne =
        ((ue = (ie = xe.response) == null ? void 0 : ie.data) == null
          ? void 0
          : ue.error) ||
        ((le = xe.response) == null ? void 0 : le.statusText) ||
        xe.message ||
        'Failed to add supplier.';
      p.set(
        `Error adding supplier: ${ne} (Status: ${((Ee = xe.response) == null ? void 0 : Ee.status) || 'N/A'})`,
      );
    }
  }
  async function X(ie) {
    var ue, le;
    if (i() !== null) {
      p.set('Please save or cancel the current edit before deleting.');
      return;
    }
    if (confirm('Are you sure you want to delete this supplier?')) {
      p.set('');
      try {
        await Ne.delete(`${Y}/${ie}`), await U();
      } catch (Ee) {
        const xe =
          ((le = (ue = Ee.response) == null ? void 0 : ue.data) == null
            ? void 0
            : le.error) ||
          Ee.message ||
          'Failed to delete supplier.';
        p.set(xe);
      }
    }
  }
  function z(ie) {
    p.set(''), y.set(ie.id), Me(N, ie.name), Me(W, ie.contact);
  }
  function te() {
    p.set(''), y.set(null), Me(N, ''), Me(W, '');
  }
  async function ge(ie) {
    var ue, le;
    if (!ve(N).trim() || !ve(W).trim()) {
      p.set('Supplier Name and Contact cannot be empty.');
      return;
    }
    p.set('');
    try {
      await Ne.put(`${Y}/${ie}`, {
        suppname: ve(N).trim(),
        suppcontact: ve(W).trim(),
      }),
        await U(),
        te();
    } catch (Ee) {
      const xe =
        ((le = (ue = Ee.response) == null ? void 0 : ue.data) == null
          ? void 0
          : le.error) ||
        Ee.message ||
        'Failed to update supplier.';
      p.set(`Error updating supplier: ${xe}`);
    }
  }
  function ce() {
    const ie = a();
    if (!ie || ie.length === 0) {
      alert('No supplier data to export.');
      return;
    }
    const ue = ie.map((xe) => ({
        'Supplier Code': xe.id,
        Name: xe.name,
        Contact: xe.contact,
      })),
      le = qa.json_to_sheet(ue),
      Ee = qa.book_new();
    qa.book_append_sheet(Ee, le, 'Suppliers'), T_(Ee, 'Suppliers.xlsx');
  }
  fu();
  var He = K_(),
    De = Ba(He);
  L_(De, {});
  var Ct = ze(De, 2),
    We = Re(Ct),
    lt = Re(We),
    ct = ze(Re(lt), 2),
    A = Re(ct),
    B = ze(A, 2),
    O = ze(lt, 2),
    C = Re(O),
    G = Re(C),
    fe = ze(G, 2),
    oe = ze(fe, 2),
    se = ze(O, 2);
  {
    var ee = (ie) => {
        var ue = B_();
        gt(ie, ue);
      },
      Te = (ie, ue) => {
        {
          var le = (xe) => {
              var ne = M_(),
                it = Re(ne);
              Ir(() => In(it, l())), gt(xe, ne);
            },
            Ee = (xe, ne) => {
              {
                var it = (mt) => {
                    var qt = b_();
                    gt(mt, qt);
                  },
                  Ht = (mt, qt) => {
                    {
                      var di = (Je) => {
                          var Jt = U_(),
                            Cr = Re(Jt);
                          Ir(() =>
                            In(Cr, `No suppliers match "${s() ?? ''}".`),
                          ),
                            gt(Je, Jt);
                        },
                        An = (Je) => {
                          var Jt = z_(),
                            Cr = Re(Jt),
                            yn = ze(Re(Cr));
                          qc(
                            yn,
                            5,
                            o,
                            (Wt) => Wt.id,
                            (Wt, Ot) => {
                              var Fn = $_(),
                                Cn = Re(Fn),
                                pi = Re(Cn),
                                vi = Re(pi),
                                On = ze(Cn),
                                mi = Re(On);
                              {
                                var Fa = (Be) => {
                                    var Xe = H_();
                                    tn(
                                      Xe,
                                      () => ve(N),
                                      (ut) => Me(N, ut),
                                    ),
                                      gt(Be, Xe);
                                  },
                                  Ca = (Be) => {
                                    var Xe = W_(),
                                      ut = Re(Xe);
                                    Ir(() => In(ut, ve(Ot).name ?? 'N/A')),
                                      gt(Be, Xe);
                                  };
                                kr(mi, (Be) => {
                                  i() === ve(Ot).id ? Be(Fa) : Be(Ca, !1);
                                });
                              }
                              var Rn = ze(On),
                                _i = Re(Rn);
                              {
                                var gi = (Be) => {
                                    var Xe = V_();
                                    tn(
                                      Xe,
                                      () => ve(W),
                                      (ut) => Me(W, ut),
                                    ),
                                      gt(Be, Xe);
                                  },
                                  Oa = (Be) => {
                                    var Xe = G_(),
                                      ut = Re(Xe);
                                    Ir(() => In(ut, ve(Ot).contact ?? 'N/A')),
                                      gt(Be, Xe);
                                  };
                                kr(_i, (Be) => {
                                  i() === ve(Ot).id ? Be(gi) : Be(Oa, !1);
                                });
                              }
                              var Ra = ze(Rn),
                                Jr = Re(Ra);
                              {
                                var Na = (Be) => {
                                    var Xe = j_(),
                                      ut = Ba(Xe),
                                      Or = ze(ut, 2);
                                    Zr('click', ut, () => ge(ve(Ot).id)),
                                      Zr('click', Or, te),
                                      gt(Be, Xe);
                                  },
                                  ka = (Be) => {
                                    var Xe = X_(),
                                      ut = Ba(Xe),
                                      Or = ze(ut, 2);
                                    Ir(
                                      (Rr, Da) => {
                                        (Or.disabled = Rr), nu(Or, 'title', Da);
                                      },
                                      [
                                        () =>
                                          i() !== null ||
                                          c().some(
                                            (Rr) => Rr.suppcode === ve(Ot).id,
                                          ),
                                        () =>
                                          i() !== null
                                            ? 'Please save or cancel the current edit.'
                                            : c().some(
                                                  (Rr) =>
                                                    Rr.suppcode === ve(Ot).id,
                                                )
                                              ? 'Cannot delete: Linked to inventory.'
                                              : 'Delete Supplier',
                                      ],
                                      mf,
                                    ),
                                      Zr('click', ut, () => z(ve(Ot))),
                                      Zr('click', Or, () => X(ve(Ot).id)),
                                      gt(Be, Xe);
                                  };
                                kr(Jr, (Be) => {
                                  i() === ve(Ot).id ? Be(Na) : Be(ka, !1);
                                });
                              }
                              Ir(() => In(vi, ve(Ot).id ?? 'N/A')), gt(Wt, Fn);
                            },
                          ),
                            gt(Je, Jt);
                        };
                      kr(
                        mt,
                        (Je) => {
                          o().length === 0 && s().trim() ? Je(di) : Je(An, !1);
                        },
                        qt,
                      );
                    }
                  };
                kr(
                  xe,
                  (mt) => {
                    a().length === 0 ? mt(it) : mt(Ht, !1);
                  },
                  ne,
                );
              }
            };
          kr(
            ie,
            (xe) => {
              l() ? xe(le) : xe(Ee, !1);
            },
            ue,
          );
        }
      };
    kr(se, (ie) => {
      f() && a().length === 0 ? ie(ee) : ie(Te, !1);
    });
  }
  tn(A, s, (ie) => uu(x, ie)),
    Zr('click', B, ce),
    tn(
      G,
      () => ve(m),
      (ie) => Me(m, ie),
    ),
    tn(
      fe,
      () => ve(S),
      (ie) => Me(S, ie),
    ),
    tn(
      oe,
      () => ve(F),
      (ie) => Me(F, ie),
    ),
    Zr('submit', C, su(V)),
    gt(e, He),
    _0(),
    n();
}
$c(Y_, { target: document.getElementById('app') });
