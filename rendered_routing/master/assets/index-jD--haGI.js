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
const es = !1;
var ca = Array.isArray,
  tc = Array.prototype.indexOf,
  p0 = Array.from,
  pf = Object.defineProperty,
  Vn = Object.getOwnPropertyDescriptor,
  vf = Object.getOwnPropertyDescriptors,
  rc = Object.prototype,
  nc = Array.prototype,
  v0 = Object.getPrototypeOf,
  ts = Object.isExtensible;
const Nr = () => {};
function ic(e) {
  return e();
}
function bi(e) {
  for (var r = 0; r < e.length; r++) e[r]();
}
const Xt = 2,
  mf = 4,
  ua = 8,
  m0 = 16,
  Tr = 32,
  An = 64,
  Ui = 128,
  Dt = 256,
  Hi = 512,
  wt = 1024,
  or = 2048,
  Zr = 4096,
  pr = 8192,
  ha = 16384,
  ac = 32768,
  _0 = 65536,
  sc = 1 << 19,
  _f = 1 << 20,
  Za = 1 << 21,
  Gn = Symbol('$state');
function gf(e) {
  return e === this.v;
}
function Ef(e, r) {
  return e != e
    ? r == r
    : e !== r || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function Tf(e) {
  return !Ef(e, this.v);
}
function fc(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function oc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function lc(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function cc() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function uc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function hc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function xc() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let fi = !1,
  dc = !1;
function pc() {
  fi = !0;
}
const g0 = 1,
  E0 = 2,
  wf = 4,
  vc = 8,
  mc = 16,
  _c = 1,
  gc = 2,
  _t = Symbol(),
  Ec = 'http://www.w3.org/1999/xhtml';
function Tc(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let Be = null;
function rs(e) {
  Be = e;
}
function T0(e, r = !1, t) {
  var n = (Be = {
    p: Be,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  fi && !r && (Be.l = { s: null, u: null, r1: [], r2: Jn(!1) }),
    y0(() => {
      n.d = !0;
    });
}
function w0(e) {
  const r = Be;
  if (r !== null) {
    const s = r.e;
    if (s !== null) {
      var t = ke,
        n = Ne;
      r.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          Dr(a.effect), lr(a.reaction), Df(a.fn);
        }
      } finally {
        Dr(t), lr(n);
      }
    }
    (Be = r.p), (r.m = !0);
  }
  return {};
}
function oi() {
  return !fi || (Be !== null && Be.l === null);
}
function vn(e) {
  if (typeof e != 'object' || e === null || Gn in e) return e;
  const r = v0(e);
  if (r !== rc && r !== nc) return e;
  var t = new Map(),
    n = ca(e),
    i = dr(0),
    a = Ne,
    s = (f) => {
      var l = Ne;
      lr(a);
      var o = f();
      return lr(l), o;
    };
  return (
    n && t.set('length', dr(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          uc();
        var c = t.get(l);
        return (
          c === void 0
            ? ((c = s(() => dr(o.value))), t.set(l, c))
            : sr(
                c,
                s(() => vn(o.value)),
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
              s(() => dr(_t)),
            ),
            Ma(i));
        else {
          if (n && typeof l == 'string') {
            var c = t.get('length'),
              h = Number(l);
            Number.isInteger(h) && h < c.v && sr(c, h);
          }
          sr(o, _t), Ma(i);
        }
        return !0;
      },
      get(f, l, o) {
        var d;
        if (l === Gn) return e;
        var c = t.get(l),
          h = l in f;
        if (
          (c === void 0 &&
            (!h || ((d = Vn(f, l)) != null && d.writable)) &&
            ((c = s(() => dr(vn(h ? f[l] : _t)))), t.set(l, c)),
          c !== void 0)
        ) {
          var u = he(c);
          return u === _t ? void 0 : u;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = t.get(l);
          c && (o.value = he(c));
        } else if (o === void 0) {
          var h = t.get(l),
            u = h == null ? void 0 : h.v;
          if (h !== void 0 && u !== _t)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        var u;
        if (l === Gn) return !0;
        var o = t.get(l),
          c = (o !== void 0 && o.v !== _t) || Reflect.has(f, l);
        if (
          o !== void 0 ||
          (ke !== null && (!c || ((u = Vn(f, l)) != null && u.writable)))
        ) {
          o === void 0 && ((o = s(() => dr(c ? vn(f[l]) : _t))), t.set(l, o));
          var h = he(o);
          if (h === _t) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var F;
        var h = t.get(l),
          u = l in f;
        if (n && l === 'length')
          for (var d = o; d < h.v; d += 1) {
            var p = t.get(d + '');
            p !== void 0
              ? sr(p, _t)
              : d in f && ((p = s(() => dr(_t))), t.set(d + '', p));
          }
        h === void 0
          ? (!u || ((F = Vn(f, l)) != null && F.writable)) &&
            ((h = s(() => dr(void 0))),
            sr(
              h,
              s(() => vn(o)),
            ),
            t.set(l, h))
          : ((u = h.v !== _t),
            sr(
              h,
              s(() => vn(o)),
            ));
        var x = Reflect.getOwnPropertyDescriptor(f, l);
        if ((x != null && x.set && x.set.call(c, o), !u)) {
          if (n && typeof l == 'string') {
            var m = t.get('length'),
              y = Number(l);
            Number.isInteger(y) && y >= m.v && sr(m, y + 1);
          }
          Ma(i);
        }
        return !0;
      },
      ownKeys(f) {
        he(i);
        var l = Reflect.ownKeys(f).filter((h) => {
          var u = t.get(h);
          return u === void 0 || u.v !== _t;
        });
        for (var [o, c] of t) c.v !== _t && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        hc();
      },
    })
  );
}
function Ma(e, r = 1) {
  sr(e, e.v + r);
}
function S0(e) {
  var r = Xt | or,
    t = Ne !== null && (Ne.f & Xt) !== 0 ? Ne : null;
  return (
    ke === null || (t !== null && (t.f & Dt) !== 0) ? (r |= Dt) : (ke.f |= _f),
    {
      ctx: Be,
      deps: null,
      effects: null,
      equals: gf,
      f: r,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: t ?? ke,
    }
  );
}
function Di(e) {
  const r = S0(e);
  return (r.equals = Tf), r;
}
function Sf(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1) kr(r[t]);
  }
}
function wc(e) {
  for (var r = e.parent; r !== null; ) {
    if ((r.f & Xt) === 0) return r;
    r = r.parent;
  }
  return null;
}
function Af(e) {
  var r,
    t = ke;
  Dr(wc(e));
  try {
    Sf(e), (r = Gf(e));
  } finally {
    Dr(t);
  }
  return r;
}
function yf(e) {
  var r = Af(e);
  if ((e.equals(r) || ((e.v = r), (e.wv = Wf())), !Fn)) {
    var t = (Cr || (e.f & Dt) !== 0) && e.deps !== null ? Zr : wt;
    $t(e, t);
  }
}
const qn = new Map();
function Jn(e, r) {
  var t = { f: 0, v: e, reactions: null, equals: gf, rv: 0, wv: 0 };
  return t;
}
function dr(e, r) {
  const t = Jn(e);
  return Dc(t), t;
}
function Ff(e, r = !1) {
  var n;
  const t = Jn(e);
  return (
    r || (t.equals = Tf),
    fi && Be !== null && Be.l !== null && ((n = Be.l).s ?? (n.s = [])).push(t),
    t
  );
}
function sr(e, r, t = !1) {
  Ne !== null &&
    !fr &&
    oi() &&
    (Ne.f & (Xt | m0)) !== 0 &&
    !(pt != null && pt.includes(e)) &&
    xc();
  let n = t ? vn(r) : r;
  return Qa(e, n);
}
function Qa(e, r) {
  if (!e.equals(r)) {
    var t = e.v;
    Fn ? qn.set(e, r) : qn.set(e, t),
      (e.v = r),
      (e.f & Xt) !== 0 &&
        ((e.f & or) !== 0 && Af(e), $t(e, (e.f & Dt) === 0 ? wt : Zr)),
      (e.wv = Wf()),
      Cf(e, or),
      oi() &&
        ke !== null &&
        (ke.f & wt) !== 0 &&
        (ke.f & (Tr | An)) === 0 &&
        (Bt === null ? Ic([e]) : Bt.push(e));
  }
  return r;
}
function Cf(e, r) {
  var t = e.reactions;
  if (t !== null)
    for (var n = oi(), i = t.length, a = 0; a < i; a++) {
      var s = t[a],
        f = s.f;
      (f & or) === 0 &&
        ((!n && s === ke) ||
          ($t(s, r),
          (f & (wt | Dt)) !== 0 && ((f & Xt) !== 0 ? Cf(s, Zr) : pa(s))));
    }
}
let Sc = !1;
var ns, Of, Rf, Nf;
function Ac() {
  if (ns === void 0) {
    (ns = window), (Of = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      r = Node.prototype,
      t = Text.prototype;
    (Rf = Vn(r, 'firstChild').get),
      (Nf = Vn(r, 'nextSibling').get),
      ts(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      ts(t) && (t.__t = void 0);
  }
}
function A0(e = '') {
  return document.createTextNode(e);
}
function Wi(e) {
  return Rf.call(e);
}
function xa(e) {
  return Nf.call(e);
}
function me(e, r) {
  return Wi(e);
}
function is(e, r) {
  {
    var t = Wi(e);
    return t instanceof Comment && t.data === '' ? xa(t) : t;
  }
}
function Ke(e, r = 1, t = !1) {
  let n = e;
  for (; r--; ) n = xa(n);
  return n;
}
function yc(e) {
  e.textContent = '';
}
function kf(e) {
  ke === null && Ne === null && lc(),
    Ne !== null && (Ne.f & Dt) !== 0 && ke === null && oc(),
    Fn && fc();
}
function Fc(e, r) {
  var t = r.last;
  t === null
    ? (r.last = r.first = e)
    : ((t.next = e), (e.prev = t), (r.last = e));
}
function yn(e, r, t, n = !0) {
  var i = ke,
    a = {
      ctx: Be,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | or,
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
      O0(a), (a.f |= ac);
    } catch (l) {
      throw (kr(a), l);
    }
  else r !== null && pa(a);
  var s =
    t &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (_f | Ui)) === 0;
  if (!s && n && (i !== null && Fc(a, i), Ne !== null && (Ne.f & Xt) !== 0)) {
    var f = Ne;
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function y0(e) {
  const r = yn(ua, null, !1);
  return $t(r, wt), (r.teardown = e), r;
}
function e0(e) {
  kf();
  var r = ke !== null && (ke.f & Tr) !== 0 && Be !== null && !Be.m;
  if (r) {
    var t = Be;
    (t.e ?? (t.e = [])).push({ fn: e, effect: ke, reaction: Ne });
  } else {
    var n = Df(e);
    return n;
  }
}
function Cc(e) {
  return kf(), If(e);
}
function Oc(e) {
  const r = yn(An, e, !0);
  return (t = {}) =>
    new Promise((n) => {
      t.outro
        ? Vi(r, () => {
            kr(r), n(void 0);
          })
        : (kr(r), n(void 0));
    });
}
function Df(e) {
  return yn(mf, e, !1);
}
function If(e) {
  return yn(ua, e, !0);
}
function rr(e, r = [], t = S0) {
  const n = r.map(t);
  return F0(() => e(...n.map(he)));
}
function F0(e, r = 0) {
  return yn(ua | m0 | r, e, !0);
}
function Zn(e, r = !0) {
  return yn(ua | Tr, e, !0, r);
}
function Pf(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = Fn,
      n = Ne;
    as(!0), lr(null);
    try {
      r.call(null);
    } finally {
      as(t), lr(n);
    }
  }
}
function Lf(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    var n = t.next;
    (t.f & An) !== 0 ? (t.parent = null) : kr(t, r), (t = n);
  }
}
function Rc(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & Tr) === 0 && kr(r), (r = t);
  }
}
function kr(e, r = !0) {
  var t = !1;
  (r || (e.f & sc) !== 0) &&
    e.nodes_start !== null &&
    (Nc(e.nodes_start, e.nodes_end), (t = !0)),
    Lf(e, r && !t),
    zi(e, 0),
    $t(e, ha);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  Pf(e);
  var i = e.parent;
  i !== null && i.first !== null && Bf(e),
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
function Nc(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : xa(e);
    e.remove(), (e = t);
  }
}
function Bf(e) {
  var r = e.parent,
    t = e.prev,
    n = e.next;
  t !== null && (t.next = n),
    n !== null && (n.prev = t),
    r !== null &&
      (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function Vi(e, r) {
  var t = [];
  C0(e, t, !0),
    Mf(t, () => {
      kr(e), r && r();
    });
}
function Mf(e, r) {
  var t = e.length;
  if (t > 0) {
    var n = () => --t || r();
    for (var i of e) i.out(n);
  } else r();
}
function C0(e, r, t) {
  if ((e.f & pr) === 0) {
    if (((e.f ^= pr), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || t) && r.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & _0) !== 0 || (n.f & Tr) !== 0;
      C0(n, r, a ? t : !1), (n = i);
    }
  }
}
function Gi(e) {
  bf(e, !0);
}
function bf(e, r) {
  if ((e.f & pr) !== 0) {
    (e.f ^= pr), (e.f & wt) === 0 && (e.f ^= wt), li(e) && ($t(e, or), pa(e));
    for (var t = e.first; t !== null; ) {
      var n = t.next,
        i = (t.f & _0) !== 0 || (t.f & Tr) !== 0;
      bf(t, i ? r : !1), (t = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || r) && a.in();
  }
}
let ji = [];
function kc() {
  var e = ji;
  (ji = []), bi(e);
}
function Uf(e) {
  ji.length === 0 && queueMicrotask(kc), ji.push(e);
}
let Ii = !1,
  t0 = !1,
  Xi = null,
  Xr = !1,
  Fn = !1;
function as(e) {
  Fn = e;
}
let Pi = [];
let Ne = null,
  fr = !1;
function lr(e) {
  Ne = e;
}
let ke = null;
function Dr(e) {
  ke = e;
}
let pt = null;
function Dc(e) {
  Ne !== null && Ne.f & Za && (pt === null ? (pt = [e]) : pt.push(e));
}
let ht = null,
  Ct = 0,
  Bt = null;
function Ic(e) {
  Bt = e;
}
let Hf = 1,
  $i = 0,
  Cr = !1;
function Wf() {
  return ++Hf;
}
function li(e) {
  var h;
  var r = e.f;
  if ((r & or) !== 0) return !0;
  if ((r & Zr) !== 0) {
    var t = e.deps,
      n = (r & Dt) !== 0;
    if (t !== null) {
      var i,
        a,
        s = (r & Hi) !== 0,
        f = n && ke !== null && !Cr,
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
        s && (o.f ^= Hi), f && c !== null && (c.f & Dt) === 0 && (o.f ^= Dt);
      }
      for (i = 0; i < l; i++)
        if (((a = t[i]), li(a) && yf(a), a.wv > e.wv)) return !0;
    }
    (!n || (ke !== null && !Cr)) && $t(e, wt);
  }
  return !1;
}
function Pc(e, r) {
  for (var t = r; t !== null; ) {
    if ((t.f & Ui) !== 0)
      try {
        t.fn(e);
        return;
      } catch {
        t.f ^= Ui;
      }
    t = t.parent;
  }
  throw ((Ii = !1), e);
}
function ss(e) {
  return (e.f & ha) === 0 && (e.parent === null || (e.parent.f & Ui) === 0);
}
function da(e, r, t, n) {
  if (Ii) {
    if ((t === null && (Ii = !1), ss(r))) throw e;
    return;
  }
  if ((t !== null && (Ii = !0), Pc(e, r), ss(r))) throw e;
}
function Vf(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (pt != null && pt.includes(e)) ||
        ((a.f & Xt) !== 0
          ? Vf(a, r, !1)
          : r === a && (t ? $t(a, or) : (a.f & wt) !== 0 && $t(a, Zr), pa(a)));
    }
}
function Gf(e) {
  var d;
  var r = ht,
    t = Ct,
    n = Bt,
    i = Ne,
    a = Cr,
    s = pt,
    f = Be,
    l = fr,
    o = e.f;
  (ht = null),
    (Ct = 0),
    (Bt = null),
    (Cr = (o & Dt) !== 0 && (fr || !Xr || Ne === null)),
    (Ne = (o & (Tr | An)) === 0 ? e : null),
    (pt = null),
    rs(e.ctx),
    (fr = !1),
    $i++,
    (e.f |= Za);
  try {
    var c = (0, e.fn)(),
      h = e.deps;
    if (ht !== null) {
      var u;
      if ((zi(e, Ct), h !== null && Ct > 0))
        for (h.length = Ct + ht.length, u = 0; u < ht.length; u++)
          h[Ct + u] = ht[u];
      else e.deps = h = ht;
      if (!Cr)
        for (u = Ct; u < h.length; u++)
          ((d = h[u]).reactions ?? (d.reactions = [])).push(e);
    } else h !== null && Ct < h.length && (zi(e, Ct), (h.length = Ct));
    if (
      oi() &&
      Bt !== null &&
      !fr &&
      h !== null &&
      (e.f & (Xt | Zr | or)) === 0
    )
      for (u = 0; u < Bt.length; u++) Vf(Bt[u], e);
    return (
      i !== null &&
        i !== e &&
        ($i++, Bt !== null && (n === null ? (n = Bt) : n.push(...Bt))),
      c
    );
  } finally {
    (ht = r),
      (Ct = t),
      (Bt = n),
      (Ne = i),
      (Cr = a),
      (pt = s),
      rs(f),
      (fr = l),
      (e.f ^= Za);
  }
}
function Lc(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = tc.call(t, e);
    if (n !== -1) {
      var i = t.length - 1;
      i === 0 ? (t = r.reactions = null) : ((t[n] = t[i]), t.pop());
    }
  }
  t === null &&
    (r.f & Xt) !== 0 &&
    (ht === null || !ht.includes(r)) &&
    ($t(r, Zr), (r.f & (Dt | Hi)) === 0 && (r.f ^= Hi), Sf(r), zi(r, 0));
}
function zi(e, r) {
  var t = e.deps;
  if (t !== null) for (var n = r; n < t.length; n++) Lc(e, t[n]);
}
function O0(e) {
  var r = e.f;
  if ((r & ha) === 0) {
    $t(e, wt);
    var t = ke,
      n = Be,
      i = Xr;
    (ke = e), (Xr = !0);
    try {
      (r & m0) !== 0 ? Rc(e) : Lf(e), Pf(e);
      var a = Gf(e);
      (e.teardown = typeof a == 'function' ? a : null), (e.wv = Hf);
      var s = e.deps,
        f;
      es && dc && e.f & or;
    } catch (l) {
      da(l, e, t, n || e.ctx);
    } finally {
      (Xr = i), (ke = t);
    }
  }
}
function Bc() {
  try {
    cc();
  } catch (e) {
    if (Xi !== null) da(e, Xi, null);
    else throw e;
  }
}
function Mc() {
  var e = Xr;
  try {
    var r = 0;
    for (Xr = !0; Pi.length > 0; ) {
      r++ > 1e3 && Bc();
      var t = Pi,
        n = t.length;
      Pi = [];
      for (var i = 0; i < n; i++) {
        var a = Uc(t[i]);
        bc(a);
      }
      qn.clear();
    }
  } finally {
    (t0 = !1), (Xr = e), (Xi = null);
  }
}
function bc(e) {
  var r = e.length;
  if (r !== 0)
    for (var t = 0; t < r; t++) {
      var n = e[t];
      if ((n.f & (ha | pr)) === 0)
        try {
          li(n) &&
            (O0(n),
            n.deps === null &&
              n.first === null &&
              n.nodes_start === null &&
              (n.teardown === null ? Bf(n) : (n.fn = null)));
        } catch (i) {
          da(i, n, null, n.ctx);
        }
    }
}
function pa(e) {
  t0 || ((t0 = !0), queueMicrotask(Mc));
  for (var r = (Xi = e); r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if ((t & (An | Tr)) !== 0) {
      if ((t & wt) === 0) return;
      r.f ^= wt;
    }
  }
  Pi.push(r);
}
function Uc(e) {
  for (var r = [], t = e; t !== null; ) {
    var n = t.f,
      i = (n & (Tr | An)) !== 0,
      a = i && (n & wt) !== 0;
    if (!a && (n & pr) === 0) {
      if ((n & mf) !== 0) r.push(t);
      else if (i) t.f ^= wt;
      else
        try {
          li(t) && O0(t);
        } catch (l) {
          da(l, t, null, t.ctx);
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
function he(e) {
  var r = e.f,
    t = (r & Xt) !== 0;
  if (Ne !== null && !fr) {
    if (!(pt != null && pt.includes(e))) {
      var n = Ne.deps;
      e.rv < $i &&
        ((e.rv = $i),
        ht === null && n !== null && n[Ct] === e
          ? Ct++
          : ht === null
            ? (ht = [e])
            : (!Cr || !ht.includes(e)) && ht.push(e));
    }
  } else if (t && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & Dt) === 0 && (i.f ^= Dt);
  }
  return t && ((i = e), li(i) && yf(i)), Fn && qn.has(e) ? qn.get(e) : e.v;
}
function va(e) {
  var r = fr;
  try {
    return (fr = !0), e();
  } finally {
    fr = r;
  }
}
const Hc = -7169;
function $t(e, r) {
  e.f = (e.f & Hc) | r;
}
function Wc(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (Gn in e) r0(e);
    else if (!Array.isArray(e))
      for (let r in e) {
        const t = e[r];
        typeof t == 'object' && t && Gn in t && r0(t);
      }
  }
}
function r0(e, r = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !r.has(e)
  ) {
    r.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        r0(e[n], r);
      } catch {}
    const t = v0(e);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const n = vf(t);
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
const Vc = ['touchstart', 'touchmove'];
function Gc(e) {
  return Vc.includes(e);
}
let fs = !1;
function jc() {
  fs ||
    ((fs = !0),
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
function jf(e) {
  var r = Ne,
    t = ke;
  lr(null), Dr(null);
  try {
    return e();
  } finally {
    lr(r), Dr(t);
  }
}
function Xc(e, r, t, n = t) {
  e.addEventListener(r, () => jf(t));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    jc();
}
const $c = new Set(),
  os = new Set();
function zc(e, r, t, n = {}) {
  function i(a) {
    if ((n.capture || Hn.call(r, a), !a.cancelBubble))
      return jf(() => (t == null ? void 0 : t.call(this, a)));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? Uf(() => {
          r.addEventListener(e, i, n);
        })
      : r.addEventListener(e, i, n),
    i
  );
}
function Ar(e, r, t, n, i) {
  var a = { capture: n, passive: i },
    s = zc(e, r, t, a);
  (r === document.body || r === window || r === document) &&
    y0(() => {
      r.removeEventListener(e, s, a);
    });
}
function Hn(e) {
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
    pf(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || t;
      },
    });
    var c = Ne,
      h = ke;
    lr(null), Dr(null);
    try {
      for (var u, d = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var x = a['__' + n];
          if (x != null && (!a.disabled || e.target === a))
            if (ca(x)) {
              var [m, ...y] = x;
              m.apply(a, [e, ...y]);
            } else x.call(a, e);
        } catch (S) {
          u ? d.push(S) : (u = S);
        }
        if (e.cancelBubble || p === r || p === null) break;
        a = p;
      }
      if (u) {
        for (let S of d)
          queueMicrotask(() => {
            throw S;
          });
        throw u;
      }
    } finally {
      (e.__root = r), delete e.currentTarget, lr(c), Dr(h);
    }
  }
}
function Kc(e) {
  var r = document.createElement('template');
  return (r.innerHTML = e.replaceAll('<!>', '<!---->')), r.content;
}
function n0(e, r) {
  var t = ke;
  t.nodes_start === null && ((t.nodes_start = e), (t.nodes_end = r));
}
function yt(e, r) {
  var t = (r & _c) !== 0,
    n = (r & gc) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Kc(a ? e : '<!>' + e)), t || (i = Wi(i)));
    var s = n || Of ? document.importNode(i, !0) : i.cloneNode(!0);
    if (t) {
      var f = Wi(s),
        l = s.lastChild;
      n0(f, l);
    } else n0(s, s);
    return s;
  };
}
function Yc(e = '') {
  {
    var r = A0(e + '');
    return n0(r, r), r;
  }
}
function ut(e, r) {
  e !== null && e.before(r);
}
function xr(e, r) {
  var t = r == null ? '' : typeof r == 'object' ? r + '' : r;
  t !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = t), (e.nodeValue = t + ''));
}
function qc(e, r) {
  return Jc(e, r);
}
const on = new Map();
function Jc(
  e,
  { target: r, anchor: t, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  Ac();
  var f = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var d = h[u];
        if (!f.has(d)) {
          f.add(d);
          var p = Gc(d);
          r.addEventListener(d, Hn, { passive: p });
          var x = on.get(d);
          x === void 0
            ? (document.addEventListener(d, Hn, { passive: p }), on.set(d, 1))
            : on.set(d, x + 1);
        }
      }
    };
  l(p0($c)), os.add(l);
  var o = void 0,
    c = Oc(() => {
      var h = t ?? r.appendChild(A0());
      return (
        Zn(() => {
          if (a) {
            T0({});
            var u = Be;
            u.c = a;
          }
          i && (n.$$events = i), (o = e(h, n) || {}), a && w0();
        }),
        () => {
          var p;
          for (var u of f) {
            r.removeEventListener(u, Hn);
            var d = on.get(u);
            --d === 0
              ? (document.removeEventListener(u, Hn), on.delete(u))
              : on.set(u, d);
          }
          os.delete(l),
            h !== t && ((p = h.parentNode) == null || p.removeChild(h));
        }
      );
    });
  return Zc.set(o, c), o;
}
let Zc = new WeakMap();
function ln(e, r, [t, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = _t,
    l = t > 0 ? _0 : 0,
    o = !1;
  const c = (u, d = !0) => {
      (o = !0), h(d, u);
    },
    h = (u, d) => {
      f !== (f = u) &&
        (f
          ? (a ? Gi(a) : d && (a = Zn(() => d(i))),
            s &&
              Vi(s, () => {
                s = null;
              }))
          : (s ? Gi(s) : d && (s = Zn(() => d(i, [t + 1, n]))),
            a &&
              Vi(a, () => {
                a = null;
              })));
    };
  F0(() => {
    (o = !1), r(c), o || h(null, null);
  }, l);
}
function Si(e, r) {
  return r;
}
function Qc(e, r, t, n) {
  for (var i = [], a = r.length, s = 0; s < a; s++) C0(r[s].e, i, !0);
  var f = a > 0 && i.length === 0 && t !== null;
  if (f) {
    var l = t.parentNode;
    yc(l), l.append(t), n.clear(), Fr(e, r[0].prev, r[a - 1].next);
  }
  Mf(i, () => {
    for (var o = 0; o < a; o++) {
      var c = r[o];
      f || (n.delete(c.k), Fr(e, c.prev, c.next)), kr(c.e, !f);
    }
  });
}
function cn(e, r, t, n, i, a = null) {
  var s = e,
    f = { flags: r, items: new Map(), first: null },
    l = (r & wf) !== 0;
  if (l) {
    var o = e;
    s = o.appendChild(A0());
  }
  var c = null,
    h = !1,
    u = Di(() => {
      var d = t();
      return ca(d) ? d : d == null ? [] : p0(d);
    });
  F0(() => {
    var d = he(u),
      p = d.length;
    (h && p === 0) ||
      ((h = p === 0),
      eu(d, f, s, i, r, n, t),
      a !== null &&
        (p === 0
          ? c
            ? Gi(c)
            : (c = Zn(() => a(s)))
          : c !== null &&
            Vi(c, () => {
              c = null;
            })),
      he(u));
  });
}
function eu(e, r, t, n, i, a, s) {
  var _e, ue, Me, Oe;
  var f = (i & vc) !== 0,
    l = (i & (g0 | E0)) !== 0,
    o = e.length,
    c = r.items,
    h = r.first,
    u = h,
    d,
    p = null,
    x,
    m = [],
    y = [],
    F,
    S,
    N,
    U;
  if (f)
    for (U = 0; U < o; U += 1)
      (F = e[U]),
        (S = a(F, U)),
        (N = c.get(S)),
        N !== void 0 &&
          ((_e = N.a) == null || _e.measure(), (x ?? (x = new Set())).add(N));
  for (U = 0; U < o; U += 1) {
    if (((F = e[U]), (S = a(F, U)), (N = c.get(S)), N === void 0)) {
      var J = u ? u.e.nodes_start : t;
      (p = ru(J, r, p, p === null ? r.first : p.next, F, S, U, n, i, s)),
        c.set(S, p),
        (m = []),
        (y = []),
        (u = p.next);
      continue;
    }
    if (
      (l && tu(N, F, U, i),
      (N.e.f & pr) !== 0 &&
        (Gi(N.e),
        f &&
          ((ue = N.a) == null || ue.unfix(), (x ?? (x = new Set())).delete(N))),
      N !== u)
    ) {
      if (d !== void 0 && d.has(N)) {
        if (m.length < y.length) {
          var O = y[0],
            b;
          p = O.prev;
          var I = m[0],
            G = m[m.length - 1];
          for (b = 0; b < m.length; b += 1) ls(m[b], O, t);
          for (b = 0; b < y.length; b += 1) d.delete(y[b]);
          Fr(r, I.prev, G.next),
            Fr(r, p, I),
            Fr(r, G, O),
            (u = O),
            (p = G),
            (U -= 1),
            (m = []),
            (y = []);
        } else
          d.delete(N),
            ls(N, u, t),
            Fr(r, N.prev, N.next),
            Fr(r, N, p === null ? r.first : p.next),
            Fr(r, p, N),
            (p = N);
        continue;
      }
      for (m = [], y = []; u !== null && u.k !== S; )
        (u.e.f & pr) === 0 && (d ?? (d = new Set())).add(u),
          y.push(u),
          (u = u.next);
      if (u === null) continue;
      N = u;
    }
    m.push(N), (p = N), (u = N.next);
  }
  if (u !== null || d !== void 0) {
    for (var j = d === void 0 ? [] : p0(d); u !== null; )
      (u.e.f & pr) === 0 && j.push(u), (u = u.next);
    var K = j.length;
    if (K > 0) {
      var re = (i & wf) !== 0 && o === 0 ? t : null;
      if (f) {
        for (U = 0; U < K; U += 1) (Me = j[U].a) == null || Me.measure();
        for (U = 0; U < K; U += 1) (Oe = j[U].a) == null || Oe.fix();
      }
      Qc(r, j, re, c);
    }
  }
  f &&
    Uf(() => {
      var Ze;
      if (x !== void 0) for (N of x) (Ze = N.a) == null || Ze.apply();
    }),
    (ke.first = r.first && r.first.e),
    (ke.last = p && p.e);
}
function tu(e, r, t, n) {
  (n & g0) !== 0 && Qa(e.v, r), (n & E0) !== 0 ? Qa(e.i, t) : (e.i = t);
}
function ru(e, r, t, n, i, a, s, f, l, o) {
  var c = (l & g0) !== 0,
    h = (l & mc) === 0,
    u = c ? (h ? Ff(i) : Jn(i)) : i,
    d = (l & E0) === 0 ? s : Jn(s),
    p = { i: d, v: u, k: a, a: null, e: null, prev: t, next: n };
  try {
    return (
      (p.e = Zn(() => f(e, u, d, o), Sc)),
      (p.e.prev = t && t.e),
      (p.e.next = n && n.e),
      t === null ? (r.first = p) : ((t.next = p), (t.e.next = p.e)),
      n !== null && ((n.prev = p), (n.e.prev = p.e)),
      p
    );
  } finally {
  }
}
function ls(e, r, t) {
  for (
    var n = e.next ? e.next.e.nodes_start : t,
      i = r ? r.e.nodes_start : t,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = xa(a);
    i.before(a), (a = s);
  }
}
function Fr(e, r, t) {
  r === null ? (e.first = t) : ((r.next = t), (r.e.next = t && t.e)),
    t !== null && ((t.prev = r), (t.e.prev = r && r.e));
}
const cs = [
  ...` 	
\r\f \v\uFEFF`,
];
function nu(e, r, t) {
  var n = '' + e;
  if (t) {
    for (var i in t)
      if (t[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || cs.includes(n[s - 1])) &&
          (f === n.length || cs.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function un(e, r, t, n, i, a) {
  var s = e.__className;
  if (s !== t || s === void 0) {
    var f = nu(t, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = t);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
const iu = Symbol('is custom element'),
  au = Symbol('is html');
function su(e, r, t, n) {
  var i = fu(e);
  i[r] !== (i[r] = t) &&
    (t == null
      ? e.removeAttribute(r)
      : typeof t != 'string' && ou(e).includes(r)
        ? (e[r] = t)
        : e.setAttribute(r, t));
}
function fu(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [iu]: e.nodeName.includes('-'),
      [au]: e.namespaceURI === Ec,
    })
  );
}
var us = new Map();
function ou(e) {
  var r = us.get(e.nodeName);
  if (r) return r;
  us.set(e.nodeName, (r = []));
  for (var t, n = e, i = Element.prototype; i !== n; ) {
    t = vf(n);
    for (var a in t) t[a].set && r.push(a);
    n = v0(n);
  }
  return r;
}
function lu(e, r, t = r) {
  var n = oi();
  Xc(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = ba(e) ? Ua(a) : a), t(a), n && a !== (a = r()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    va(r) == null && e.value && t(ba(e) ? Ua(e.value) : e.value),
    If(() => {
      var i = r();
      (ba(e) && i === Ua(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function ba(e) {
  var r = e.type;
  return r === 'number' || r === 'range';
}
function Ua(e) {
  return e === '' ? null : +e;
}
function cu(e) {
  return function (...r) {
    var t = r[0];
    return t.stopPropagation(), e == null ? void 0 : e.apply(this, r);
  };
}
function uu(e = !1) {
  const r = Be,
    t = r.l.u;
  if (!t) return;
  let n = () => Wc(r.s);
  if (e) {
    let i = 0,
      a = {};
    const s = S0(() => {
      let f = !1;
      const l = r.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => he(s);
  }
  t.b.length &&
    Cc(() => {
      hs(r, n), bi(t.b);
    }),
    e0(() => {
      const i = va(() => t.m.map(ic));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    t.a.length &&
      e0(() => {
        hs(r, n), bi(t.a);
      });
}
function hs(e, r) {
  if (e.l.s) for (const t of e.l.s) he(t);
  r();
}
function hu(e, r) {
  var a;
  var t = (a = e.$$events) == null ? void 0 : a[r.type],
    n = ca(t) ? t.slice() : t == null ? [] : [t];
  for (var i of n) i.call(this, r);
}
function R0(e, r, t) {
  if (e == null) return r(void 0), t && t(void 0), Nr;
  const n = va(() => e.subscribe(r, t));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const hn = [];
function xu(e, r) {
  return { subscribe: nr(e, r).subscribe };
}
function nr(e, r = Nr) {
  let t = null;
  const n = new Set();
  function i(f) {
    if (Ef(e, f) && ((e = f), t)) {
      const l = !hn.length;
      for (const o of n) o[1](), hn.push(o, e);
      if (l) {
        for (let o = 0; o < hn.length; o += 2) hn[o][0](hn[o + 1]);
        hn.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = Nr) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (t = r(i, a) || Nr),
      f(e),
      () => {
        n.delete(o), n.size === 0 && t && (t(), (t = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function du(e, r, t) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = r.length < 2;
  return xu(t, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      h = Nr;
    const u = () => {
        if (c) return;
        h();
        const p = r(n ? o[0] : o, s, f);
        a ? s(p) : (h = typeof p == 'function' ? p : Nr);
      },
      d = i.map((p, x) =>
        R0(
          p,
          (m) => {
            (o[x] = m), (c &= ~(1 << x)), l && u();
          },
          () => {
            c |= 1 << x;
          },
        ),
      );
    return (
      (l = !0),
      u(),
      function () {
        bi(d), h(), (l = !1);
      }
    );
  });
}
function pu(e) {
  let r;
  return R0(e, (t) => (r = t))(), r;
}
let i0 = Symbol();
function er(e, r, t) {
  const n =
    t[r] ?? (t[r] = { store: null, source: Ff(void 0), unsubscribe: Nr });
  if (n.store !== e && !(i0 in t))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = Nr);
    else {
      var i = !0;
      (n.unsubscribe = R0(e, (a) => {
        i ? (n.source.v = a) : sr(n.source, a);
      })),
        (i = !1);
    }
  return e && i0 in t ? pu(e) : he(n.source);
}
function vu(e, r) {
  return e.set(r), r;
}
function mu() {
  const e = {};
  function r() {
    y0(() => {
      for (var t in e) e[t].unsubscribe();
      pf(e, i0, { enumerable: !1, value: !0 });
    });
  }
  return [e, r];
}
function Xf(e) {
  Be === null && Tc(),
    fi && Be.l !== null
      ? _u(Be).m.push(e)
      : e0(() => {
          const r = va(e);
          if (typeof r == 'function') return r;
        });
}
function _u(e) {
  var r = e.l;
  return r.u ?? (r.u = { a: [], b: [], m: [] });
}
const gu = '5';
var df;
typeof window < 'u' &&
  (
    (df = window.__svelte ?? (window.__svelte = {})).v ?? (df.v = new Set())
  ).add(gu);
pc();
function $f(e, r) {
  return function () {
    return e.apply(r, arguments);
  };
}
const { toString: Eu } = Object.prototype,
  { getPrototypeOf: N0 } = Object,
  { iterator: ma, toStringTag: zf } = Symbol,
  _a = ((e) => (r) => {
    const t = Eu.call(r);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  zt = (e) => ((e = e.toLowerCase()), (r) => _a(r) === e),
  ga = (e) => (r) => typeof r === e,
  { isArray: Cn } = Array,
  Qn = ga('undefined');
function Tu(e) {
  return (
    e !== null &&
    !Qn(e) &&
    e.constructor !== null &&
    !Qn(e.constructor) &&
    gt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Kf = zt('ArrayBuffer');
function wu(e) {
  let r;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(e))
      : (r = e && e.buffer && Kf(e.buffer)),
    r
  );
}
const Su = ga('string'),
  gt = ga('function'),
  Yf = ga('number'),
  Ea = (e) => e !== null && typeof e == 'object',
  Au = (e) => e === !0 || e === !1,
  Li = (e) => {
    if (_a(e) !== 'object') return !1;
    const r = N0(e);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(zf in e) &&
      !(ma in e)
    );
  },
  yu = zt('Date'),
  Fu = zt('File'),
  Cu = zt('Blob'),
  Ou = zt('FileList'),
  Ru = (e) => Ea(e) && gt(e.pipe),
  Nu = (e) => {
    let r;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (gt(e.append) &&
          ((r = _a(e)) === 'formdata' ||
            (r === 'object' &&
              gt(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  ku = zt('URLSearchParams'),
  [Du, Iu, Pu, Lu] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    zt,
  ),
  Bu = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ci(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), Cn(e)))
    for (n = 0, i = e.length; n < i; n++) r.call(null, e[n], n, e);
  else {
    const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), r.call(null, e[f], f, e);
  }
}
function qf(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length,
    i;
  for (; n-- > 0; ) if (((i = t[n]), r === i.toLowerCase())) return i;
  return null;
}
const jr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  Jf = (e) => !Qn(e) && e !== jr;
function a0() {
  const { caseless: e } = (Jf(this) && this) || {},
    r = {},
    t = (n, i) => {
      const a = (e && qf(r, i)) || i;
      Li(r[a]) && Li(n)
        ? (r[a] = a0(r[a], n))
        : Li(n)
          ? (r[a] = a0({}, n))
          : Cn(n)
            ? (r[a] = n.slice())
            : (r[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ci(arguments[n], t);
  return r;
}
const Mu = (e, r, t, { allOwnKeys: n } = {}) => (
    ci(
      r,
      (i, a) => {
        t && gt(i) ? (e[a] = $f(i, t)) : (e[a] = i);
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
      e = t !== !1 && N0(e);
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
    if (Cn(e)) return e;
    let r = e.length;
    if (!Yf(r)) return null;
    const t = new Array(r);
    for (; r-- > 0; ) t[r] = e[r];
    return t;
  },
  Gu = (
    (e) => (r) =>
      e && r instanceof e
  )(typeof Uint8Array < 'u' && N0(Uint8Array)),
  ju = (e, r) => {
    const n = (e && e[ma]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      r.call(e, a[0], a[1]);
    }
  },
  Xu = (e, r) => {
    let t;
    const n = [];
    for (; (t = e.exec(r)) !== null; ) n.push(t);
    return n;
  },
  $u = zt('HTMLFormElement'),
  zu = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, n, i) {
      return n.toUpperCase() + i;
    }),
  xs = (
    ({ hasOwnProperty: e }) =>
    (r, t) =>
      e.call(r, t)
  )(Object.prototype),
  Ku = zt('RegExp'),
  Zf = (e, r) => {
    const t = Object.getOwnPropertyDescriptors(e),
      n = {};
    ci(t, (i, a) => {
      let s;
      (s = r(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  Yu = (e) => {
    Zf(e, (r, t) => {
      if (gt(e) && ['arguments', 'caller', 'callee'].indexOf(t) !== -1)
        return !1;
      const n = e[t];
      if (gt(n)) {
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
  qu = (e, r) => {
    const t = {},
      n = (i) => {
        i.forEach((a) => {
          t[a] = !0;
        });
      };
    return Cn(e) ? n(e) : n(String(e).split(r)), t;
  },
  Ju = () => {},
  Zu = (e, r) => (e != null && Number.isFinite((e = +e)) ? e : r);
function Qu(e) {
  return !!(e && gt(e.append) && e[zf] === 'FormData' && e[ma]);
}
const eh = (e) => {
    const r = new Array(10),
      t = (n, i) => {
        if (Ea(n)) {
          if (r.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            r[i] = n;
            const a = Cn(n) ? [] : {};
            return (
              ci(n, (s, f) => {
                const l = t(s, i + 1);
                !Qn(l) && (a[f] = l);
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
  th = zt('AsyncFunction'),
  rh = (e) => e && (Ea(e) || gt(e)) && gt(e.then) && gt(e.catch),
  Qf = ((e, r) =>
    e
      ? setImmediate
      : r
        ? ((t, n) => (
            jr.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === jr && a === t && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), jr.postMessage(t, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (t) => setTimeout(t))(
    typeof setImmediate == 'function',
    gt(jr.postMessage),
  ),
  nh =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(jr)
      : (typeof process < 'u' && process.nextTick) || Qf,
  ih = (e) => e != null && gt(e[ma]),
  M = {
    isArray: Cn,
    isArrayBuffer: Kf,
    isBuffer: Tu,
    isFormData: Nu,
    isArrayBufferView: wu,
    isString: Su,
    isNumber: Yf,
    isBoolean: Au,
    isObject: Ea,
    isPlainObject: Li,
    isReadableStream: Du,
    isRequest: Iu,
    isResponse: Pu,
    isHeaders: Lu,
    isUndefined: Qn,
    isDate: yu,
    isFile: Fu,
    isBlob: Cu,
    isRegExp: Ku,
    isFunction: gt,
    isStream: Ru,
    isURLSearchParams: ku,
    isTypedArray: Gu,
    isFileList: Ou,
    forEach: ci,
    merge: a0,
    extend: Mu,
    trim: Bu,
    stripBOM: bu,
    inherits: Uu,
    toFlatObject: Hu,
    kindOf: _a,
    kindOfTest: zt,
    endsWith: Wu,
    toArray: Vu,
    forEachEntry: ju,
    matchAll: Xu,
    isHTMLForm: $u,
    hasOwnProperty: xs,
    hasOwnProp: xs,
    reduceDescriptors: Zf,
    freezeMethods: Yu,
    toObjectSet: qu,
    toCamelCase: zu,
    noop: Ju,
    toFiniteNumber: Zu,
    findKey: qf,
    global: jr,
    isContextDefined: Jf,
    isSpecCompliantForm: Qu,
    toJSONObject: eh,
    isAsyncFn: th,
    isThenable: rh,
    setImmediate: Qf,
    asap: nh,
    isIterable: ih,
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
const eo = de.prototype,
  to = {};
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
  to[e] = { value: e };
});
Object.defineProperties(de, to);
Object.defineProperty(eo, 'isAxiosError', { value: !0 });
de.from = (e, r, t, n, i, a) => {
  const s = Object.create(eo);
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
const ah = null;
function s0(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function ro(e) {
  return M.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ds(e, r, t) {
  return e
    ? e
        .concat(r)
        .map(function (i, a) {
          return (i = ro(i)), !t && a ? '[' + i + ']' : i;
        })
        .join(t ? '.' : '')
    : r;
}
function sh(e) {
  return M.isArray(e) && !e.some(s0);
}
const fh = M.toFlatObject(M, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function Ta(e, r, t) {
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
    let y = p;
    if (p && !m && typeof p == 'object') {
      if (M.endsWith(x, '{}'))
        (x = n ? x : x.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (M.isArray(p) && sh(p)) ||
        ((M.isFileList(p) || M.endsWith(x, '[]')) && (y = M.toArray(p)))
      )
        return (
          (x = ro(x)),
          y.forEach(function (S, N) {
            !(M.isUndefined(S) || S === null) &&
              r.append(
                s === !0 ? ds([x], N, a) : s === null ? x : x + '[]',
                o(S),
              );
          }),
          !1
        );
    }
    return s0(p) ? !0 : (r.append(ds(m, x, a), o(p)), !1);
  }
  const h = [],
    u = Object.assign(fh, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: s0,
    });
  function d(p, x) {
    if (!M.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      h.push(p),
        M.forEach(p, function (y, F) {
          (!(M.isUndefined(y) || y === null) &&
            i.call(r, y, M.isString(F) ? F.trim() : F, x, u)) === !0 &&
            d(y, x ? x.concat(F) : [F]);
        }),
        h.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError('data must be an object');
  return d(e), r;
}
function ps(e) {
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
function k0(e, r) {
  (this._pairs = []), e && Ta(e, this, r);
}
const no = k0.prototype;
no.append = function (r, t) {
  this._pairs.push([r, t]);
};
no.toString = function (r) {
  const t = r
    ? function (n) {
        return r.call(this, n, ps);
      }
    : ps;
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
function io(e, r, t) {
  if (!r) return e;
  const n = (t && t.encode) || oh;
  M.isFunction(t) && (t = { serialize: t });
  const i = t && t.serialize;
  let a;
  if (
    (i
      ? (a = i(r, t))
      : (a = M.isURLSearchParams(r) ? r.toString() : new k0(r, t).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class vs {
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
const ao = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  lh = typeof URLSearchParams < 'u' ? URLSearchParams : k0,
  ch = typeof FormData < 'u' ? FormData : null,
  uh = typeof Blob < 'u' ? Blob : null,
  hh = {
    isBrowser: !0,
    classes: { URLSearchParams: lh, FormData: ch, Blob: uh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  D0 = typeof window < 'u' && typeof document < 'u',
  f0 = (typeof navigator == 'object' && navigator) || void 0,
  xh =
    D0 &&
    (!f0 || ['ReactNative', 'NativeScript', 'NS'].indexOf(f0.product) < 0),
  dh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ph = (D0 && window.location.href) || 'http://localhost',
  vh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: D0,
        hasStandardBrowserEnv: xh,
        hasStandardBrowserWebWorkerEnv: dh,
        navigator: f0,
        origin: ph,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ot = { ...vh, ...hh };
function mh(e, r) {
  return Ta(
    e,
    new ot.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, n, i, a) {
          return ot.isNode && M.isBuffer(t)
            ? (this.append(n, t.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      r,
    ),
  );
}
function _h(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((r) =>
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
function so(e) {
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
          r(t, n, i[s], a) && M.isArray(i[s]) && (i[s] = gh(i[s])),
          !f)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const t = {};
    return (
      M.forEachEntry(e, (n, i) => {
        r(_h(n), i, t, 0);
      }),
      t
    );
  }
  return null;
}
function Eh(e, r, t) {
  if (M.isString(e))
    try {
      return (r || JSON.parse)(e), M.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (t || JSON.stringify)(e);
}
const ui = {
  transitional: ao,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (r, t) {
      const n = t.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = M.isObject(r);
      if ((a && M.isHTMLForm(r) && (r = new FormData(r)), M.isFormData(r)))
        return i ? JSON.stringify(so(r)) : r;
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
          return mh(r, this.formSerializer).toString();
        if ((f = M.isFileList(r)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return Ta(
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
      const t = this.transitional || ui.transitional,
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
  env: { FormData: ot.classes.FormData, Blob: ot.classes.Blob },
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
  ui.headers[e] = {};
});
const Th = M.toObjectSet([
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
  ms = Symbol('internals');
function bn(e) {
  return e && String(e).trim().toLowerCase();
}
function Bi(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Bi) : String(e);
}
function Sh(e) {
  const r = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = t.exec(e)); ) r[n[1]] = n[2];
  return r;
}
const Ah = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ha(e, r, t, n, i) {
  if (M.isFunction(n)) return n.call(this, r, t);
  if ((i && (r = t), !!M.isString(r))) {
    if (M.isString(n)) return r.indexOf(n) !== -1;
    if (M.isRegExp(n)) return n.test(r);
  }
}
function yh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function Fh(e, r) {
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
let Et = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const i = this;
    function a(f, l, o) {
      const c = bn(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = M.findKey(i, c);
      (!h || i[h] === void 0 || o === !0 || (o === void 0 && i[h] !== !1)) &&
        (i[h || l] = Bi(f));
    }
    const s = (f, l) => M.forEach(f, (o, c) => a(o, c, l));
    if (M.isPlainObject(r) || r instanceof this.constructor) s(r, t);
    else if (M.isString(r) && (r = r.trim()) && !Ah(r)) s(wh(r), t);
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
    if (((r = bn(r)), r)) {
      const n = M.findKey(this, r);
      if (n) {
        const i = this[n];
        if (!t) return i;
        if (t === !0) return Sh(i);
        if (M.isFunction(t)) return t.call(this, i, n);
        if (M.isRegExp(t)) return t.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(r, t) {
    if (((r = bn(r)), r)) {
      const n = M.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || Ha(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = bn(s)), s)) {
        const f = M.findKey(n, s);
        f && (!t || Ha(n, n[f], f, t)) && (delete n[f], (i = !0));
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
      (!r || Ha(this, this[a], a, r, !0)) && (delete this[a], (i = !0));
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
          (t[s] = Bi(i)), delete t[a];
          return;
        }
        const f = r ? yh(a) : String(a).trim();
        f !== a && delete t[a], (t[f] = Bi(i)), (n[f] = !0);
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
    const n = (this[ms] = this[ms] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = bn(s);
      n[f] || (Fh(i, s), (n[f] = !0));
    }
    return M.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
Et.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
M.reduceDescriptors(Et.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    },
  };
});
M.freezeMethods(Et);
function Wa(e, r) {
  const t = this || ui,
    n = r || t,
    i = Et.from(n.headers);
  let a = n.data;
  return (
    M.forEach(e, function (f) {
      a = f.call(t, a, i.normalize(), r ? r.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function fo(e) {
  return !!(e && e.__CANCEL__);
}
function On(e, r, t) {
  de.call(this, e ?? 'canceled', de.ERR_CANCELED, r, t),
    (this.name = 'CanceledError');
}
M.inherits(On, de, { __CANCEL__: !0 });
function oo(e, r, t) {
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
      const d = c && o - c;
      return d ? Math.round((u * 1e3) / d) : void 0;
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
const Ki = (e, r, t = 3) => {
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
  _s = (e, r) => {
    const t = e != null;
    return [(n) => r[0]({ lengthComputable: t, total: e, loaded: n }), r[1]];
  },
  gs =
    (e) =>
    (...r) =>
      M.asap(() => e(...r)),
  Nh = ot.hasStandardBrowserEnv
    ? ((e, r) => (t) => (
        (t = new URL(t, ot.origin)),
        e.protocol === t.protocol &&
          e.host === t.host &&
          (r || e.port === t.port)
      ))(
        new URL(ot.origin),
        ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent),
      )
    : () => !0,
  kh = ot.hasStandardBrowserEnv
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
function Dh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ih(e, r) {
  return r ? e.replace(/\/?\/$/, '') + '/' + r.replace(/^\/+/, '') : e;
}
function lo(e, r, t) {
  let n = !Dh(r);
  return e && (n || t == !1) ? Ih(e, r) : r;
}
const Es = (e) => (e instanceof Et ? { ...e } : e);
function Kr(e, r) {
  r = r || {};
  const t = {};
  function n(o, c, h, u) {
    return M.isPlainObject(o) && M.isPlainObject(c)
      ? M.merge.call({ caseless: u }, o, c)
      : M.isPlainObject(c)
        ? M.merge({}, c)
        : M.isArray(c)
          ? c.slice()
          : c;
  }
  function i(o, c, h, u) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(o)) return n(void 0, o, h, u);
    } else return n(o, c, h, u);
  }
  function a(o, c) {
    if (!M.isUndefined(c)) return n(void 0, c);
  }
  function s(o, c) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(o)) return n(void 0, o);
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
    headers: (o, c, h) => i(Es(o), Es(c), h, !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, r)), function (c) {
      const h = l[c] || i,
        u = h(e[c], r[c], c);
      (M.isUndefined(u) && h !== f) || (t[c] = u);
    }),
    t
  );
}
const co = (e) => {
    const r = Kr({}, e);
    let {
      data: t,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = r;
    (r.headers = s = Et.from(s)),
      (r.url = io(
        lo(r.baseURL, r.url, r.allowAbsoluteUrls),
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
      if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv)
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
      ot.hasStandardBrowserEnv &&
      (n && M.isFunction(n) && (n = n(r)), n || (n !== !1 && Nh(r.url)))
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
        const i = co(e);
        let a = i.data;
        const s = Et.from(i.headers).normalize();
        let { responseType: f, onUploadProgress: l, onDownloadProgress: o } = i,
          c,
          h,
          u,
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
        function y() {
          if (!m) return;
          const S = Et.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            U = {
              data:
                !f || f === 'text' || f === 'json'
                  ? m.responseText
                  : m.response,
              status: m.status,
              statusText: m.statusText,
              headers: S,
              config: e,
              request: m,
            };
          oo(
            function (O) {
              t(O), x();
            },
            function (O) {
              n(O), x();
            },
            U,
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
              (n(new de('Request aborted', de.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new de('Network Error', de.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let N = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const U = i.transitional || ao;
            i.timeoutErrorMessage && (N = i.timeoutErrorMessage),
              n(
                new de(
                  N,
                  U.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            M.forEach(s.toJSON(), function (N, U) {
              m.setRequestHeader(U, N);
            }),
          M.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([u, p] = Ki(o, !0)), m.addEventListener('progress', u)),
          l &&
            m.upload &&
            (([h, d] = Ki(l)),
            m.upload.addEventListener('progress', h),
            m.upload.addEventListener('loadend', d)),
          (i.cancelToken || i.signal) &&
            ((c = (S) => {
              m &&
                (n(!S || S.type ? new On(null, e, m) : S),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const F = Ch(i.url);
        if (F && ot.protocols.indexOf(F) === -1) {
          n(new de('Unsupported protocol ' + F + ':', de.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  Bh = (e, r) => {
    const { length: t } = (e = e ? e.filter(Boolean) : []);
    if (r || t) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof de ? c : new On(c instanceof Error ? c.message : c),
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
  Mh = function* (e, r) {
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
    for await (const t of Uh(e)) yield* Mh(t, r);
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
  Ts = (e, r, t, n) => {
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
  wa =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  uo = wa && typeof ReadableStream == 'function',
  Hh =
    wa &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (r) =>
            e.encode(r)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  ho = (e, ...r) => {
    try {
      return !!e(...r);
    } catch {
      return !1;
    }
  },
  Wh =
    uo &&
    ho(() => {
      let e = !1;
      const r = new Request(ot.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !r;
    }),
  ws = 64 * 1024,
  o0 = uo && ho(() => M.isReadableStream(new Response('').body)),
  Yi = { stream: o0 && ((e) => e.body) };
wa &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((r) => {
      !Yi[r] &&
        (Yi[r] = M.isFunction(e[r])
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
const Vh = async (e) => {
    if (e == null) return 0;
    if (M.isBlob(e)) return e.size;
    if (M.isSpecCompliantForm(e))
      return (
        await new Request(ot.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (M.isArrayBufferView(e) || M.isArrayBuffer(e)) return e.byteLength;
    if ((M.isURLSearchParams(e) && (e = e + ''), M.isString(e)))
      return (await Hh(e)).byteLength;
  },
  Gh = async (e, r) => {
    const t = M.toFiniteNumber(e.getContentLength());
    return t ?? Vh(r);
  },
  jh =
    wa &&
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
      } = co(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let d = Bh([i, a && a.toAbortSignal()], s),
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
          Wh &&
          t !== 'get' &&
          t !== 'head' &&
          (m = await Gh(c, n)) !== 0
        ) {
          let U = new Request(r, { method: 'POST', body: n, duplex: 'half' }),
            J;
          if (
            (M.isFormData(n) &&
              (J = U.headers.get('content-type')) &&
              c.setContentType(J),
            U.body)
          ) {
            const [O, b] = _s(m, Ki(gs(l)));
            n = Ts(U.body, ws, O, b);
          }
        }
        M.isString(h) || (h = h ? 'include' : 'omit');
        const y = 'credentials' in Request.prototype;
        p = new Request(r, {
          ...u,
          signal: d,
          method: t.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: y ? h : void 0,
        });
        let F = await fetch(p);
        const S = o0 && (o === 'stream' || o === 'response');
        if (o0 && (f || (S && x))) {
          const U = {};
          ['status', 'statusText', 'headers'].forEach((I) => {
            U[I] = F[I];
          });
          const J = M.toFiniteNumber(F.headers.get('content-length')),
            [O, b] = (f && _s(J, Ki(gs(f), !0))) || [];
          F = new Response(
            Ts(F.body, ws, O, () => {
              b && b(), x && x();
            }),
            U,
          );
        }
        o = o || 'text';
        let N = await Yi[M.findKey(Yi, o) || 'text'](F, e);
        return (
          !S && x && x(),
          await new Promise((U, J) => {
            oo(U, J, {
              data: N,
              headers: Et.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (y) {
        throw (
          (x && x(),
          y && y.name === 'TypeError' && /Load failed|fetch/i.test(y.message)
            ? Object.assign(new de('Network Error', de.ERR_NETWORK, e, p), {
                cause: y.cause || y,
              })
            : de.from(y, y && y.code, e, p))
        );
      }
    }),
  l0 = { http: ah, xhr: Lh, fetch: jh };
M.forEach(l0, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: r });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: r });
  }
});
const Ss = (e) => `- ${e}`,
  Xh = (e) => M.isFunction(e) || e === null || e === !1,
  xo = {
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
          !Xh(t) && ((n = l0[(s = String(t)).toLowerCase()]), n === void 0))
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
              a.map(Ss).join(`
`)
            : ' ' + Ss(a[0])
          : 'as no adapter specified';
        throw new de(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: l0,
  };
function Va(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new On(null, e);
}
function As(e) {
  return (
    Va(e),
    (e.headers = Et.from(e.headers)),
    (e.data = Wa.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    xo
      .getAdapter(e.adapter || ui.adapter)(e)
      .then(
        function (n) {
          return (
            Va(e),
            (n.data = Wa.call(e, e.transformResponse, n)),
            (n.headers = Et.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            fo(n) ||
              (Va(e),
              n &&
                n.response &&
                ((n.response.data = Wa.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = Et.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const po = '1.9.0',
  Sa = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, r) => {
    Sa[e] = function (n) {
      return typeof n === e || 'a' + (r < 1 ? 'n ' : ' ') + e;
    };
  },
);
const ys = {};
Sa.transitional = function (r, t, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      po +
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
        !ys[s] &&
        ((ys[s] = !0),
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
Sa.spelling = function (r) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function $h(e, r, t) {
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
const Mi = { assertOptions: $h, validators: Sa },
  tr = Mi.validators;
let $r = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new vs(), response: new vs() });
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
      (t = Kr(this.defaults, t));
    const { transitional: n, paramsSerializer: i, headers: a } = t;
    n !== void 0 &&
      Mi.assertOptions(
        n,
        {
          silentJSONParsing: tr.transitional(tr.boolean),
          forcedJSONParsing: tr.transitional(tr.boolean),
          clarifyTimeoutError: tr.transitional(tr.boolean),
        },
        !1,
      ),
      i != null &&
        (M.isFunction(i)
          ? (t.paramsSerializer = { serialize: i })
          : Mi.assertOptions(
              i,
              { encode: tr.function, serialize: tr.function },
              !0,
            )),
      t.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (t.allowAbsoluteUrls = !0)),
      Mi.assertOptions(
        t,
        {
          baseUrl: tr.spelling('baseURL'),
          withXsrfToken: tr.spelling('withXSRFToken'),
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
      (t.headers = Et.concat(s, a));
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
      h = 0,
      u;
    if (!l) {
      const p = [As.bind(this), void 0];
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
    let d = t;
    for (h = 0; h < u; ) {
      const p = f[h++],
        x = f[h++];
      try {
        d = p(d);
      } catch (m) {
        x.call(this, m);
        break;
      }
    }
    try {
      c = As.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, u = o.length; h < u; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(r) {
    r = Kr(this.defaults, r);
    const t = lo(r.baseURL, r.url, r.allowAbsoluteUrls);
    return io(t, r.params, r.paramsSerializer);
  }
};
M.forEach(['delete', 'get', 'head', 'options'], function (r) {
  $r.prototype[r] = function (t, n) {
    return this.request(
      Kr(n || {}, { method: r, url: t, data: (n || {}).data }),
    );
  };
});
M.forEach(['post', 'put', 'patch'], function (r) {
  function t(n) {
    return function (a, s, f) {
      return this.request(
        Kr(f || {}, {
          method: r,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  ($r.prototype[r] = t()), ($r.prototype[r + 'Form'] = t(!0));
});
let zh = class vo {
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
        n.reason || ((n.reason = new On(a, s, f)), t(n.reason));
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
      token: new vo(function (i) {
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
function Yh(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const c0 = {
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
Object.entries(c0).forEach(([e, r]) => {
  c0[r] = e;
});
function mo(e) {
  const r = new $r(e),
    t = $f($r.prototype.request, r);
  return (
    M.extend(t, $r.prototype, r, { allOwnKeys: !0 }),
    M.extend(t, r, null, { allOwnKeys: !0 }),
    (t.create = function (i) {
      return mo(Kr(e, i));
    }),
    t
  );
}
const Ge = mo(ui);
Ge.Axios = $r;
Ge.CanceledError = On;
Ge.CancelToken = zh;
Ge.isCancel = fo;
Ge.VERSION = po;
Ge.toFormData = Ta;
Ge.AxiosError = de;
Ge.Cancel = Ge.CanceledError;
Ge.all = function (r) {
  return Promise.all(r);
};
Ge.spread = Kh;
Ge.isAxiosError = Yh;
Ge.mergeConfig = Kr;
Ge.AxiosHeaders = Et;
Ge.formToJSON = (e) => so(M.isHTMLForm(e) ? new FormData(e) : e);
Ge.getAdapter = xo.getAdapter;
Ge.HttpStatusCode = c0;
Ge.default = Ge;
const {
  Axios: ng,
  AxiosError: ig,
  CanceledError: ag,
  isCancel: sg,
  CancelToken: fg,
  VERSION: og,
  all: lg,
  Cancel: cg,
  isAxiosError: ug,
  spread: hg,
  toFormData: xg,
  AxiosHeaders: dg,
  HttpStatusCode: pg,
  formToJSON: vg,
  getAdapter: mg,
  mergeConfig: _g,
} = Ge;
var qh = yt(
  '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/master/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
);
function Jh(e, r) {
  T0(r, !0);
  let t = dr('');
  Xf(() => {
    sr(t, window.location.pathname, !0), console.log('currentPath:', he(t));
  });
  function n(b) {
    return b === '/' ? he(t) === '/' : he(t).startsWith(b);
  }
  var i = qh(),
    a = Ke(me(i), 2),
    s = me(a),
    f = me(s);
  let l;
  var o = Ke(s, 2),
    c = me(o);
  let h;
  var u = Ke(o, 2),
    d = me(u);
  let p;
  var x = Ke(u, 2),
    m = me(x);
  let y;
  var F = Ke(x, 2),
    S = me(F);
  let N;
  var U = Ke(F, 2),
    J = me(U);
  let O;
  rr(
    (b, I, G, j, K, re) => {
      (l = un(f, 1, 'svelte-1t3skh', null, l, b)),
        (h = un(c, 1, 'svelte-1t3skh', null, h, I)),
        (p = un(d, 1, 'svelte-1t3skh', null, p, G)),
        (y = un(m, 1, 'svelte-1t3skh', null, y, j)),
        (N = un(S, 1, 'svelte-1t3skh', null, N, K)),
        (O = un(J, 1, 'svelte-1t3skh', null, O, re));
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
    w0();
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var qi = {};
qi.version = '0.18.5';
var _o = 1252,
  Zh = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  go = function (e) {
    Zh.indexOf(e) != -1 && (_o = e);
  };
function Qh() {
  go(1252);
}
var ei = function (e) {
  go(e);
};
function e1() {
  ei(1200), Qh();
}
var Ai = function (r) {
    return String.fromCharCode(r);
  },
  Fs = function (r) {
    return String.fromCharCode(r);
  },
  Cs,
  Or = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function ti(e) {
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
      (r += Or.charAt(a) + Or.charAt(s) + Or.charAt(f) + Or.charAt(l));
  return r;
}
function gr(e) {
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
    (a = Or.indexOf(e.charAt(o++))),
      (s = Or.indexOf(e.charAt(o++))),
      (t = (a << 2) | (s >> 4)),
      (r += String.fromCharCode(t)),
      (f = Or.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (r += String.fromCharCode(n)),
      (l = Or.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (r += String.fromCharCode(i));
  return r;
}
var Te = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  wr = (function () {
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
function Yr(e) {
  return Te
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function Os(e) {
  return Te
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var Vt = function (r) {
  return Te
    ? wr(r, 'binary')
    : r.split('').map(function (t) {
        return t.charCodeAt(0) & 255;
      });
};
function Aa(e) {
  if (typeof ArrayBuffer > 'u') return Vt(e);
  for (
    var r = new ArrayBuffer(e.length), t = new Uint8Array(r), n = 0;
    n != e.length;
    ++n
  )
    t[n] = e.charCodeAt(n) & 255;
  return r;
}
function hi(e) {
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
var rt = Te
  ? function (e) {
      return Buffer.concat(
        e.map(function (r) {
          return Buffer.isBuffer(r) ? r : wr(r);
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
    var r = [], t = 0, n = e.length + 250, i = Yr(e.length + 255), a = 0;
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
    t > n && (r.push(i.slice(0, t)), (t = 0), (i = Yr(65535)), (n = 65530));
  }
  return r.push(i.slice(0, t)), rt(r);
}
var jn = /\u0000/g,
  yi = /[\u0001-\u0006]/g;
function gn(e) {
  for (var r = '', t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function Gt(e, r) {
  var t = '' + e;
  return t.length >= r ? t : He('0', r - t.length) + t;
}
function I0(e, r) {
  var t = '' + e;
  return t.length >= r ? t : He(' ', r - t.length) + t;
}
function Ji(e, r) {
  var t = '' + e;
  return t.length >= r ? t : t + He(' ', r - t.length);
}
function n1(e, r) {
  var t = '' + Math.round(e);
  return t.length >= r ? t : He('0', r - t.length) + t;
}
function i1(e, r) {
  var t = '' + e;
  return t.length >= r ? t : He('0', r - t.length) + t;
}
var Rs = Math.pow(2, 32);
function xn(e, r) {
  if (e > Rs || e < -Rs) return n1(e, r);
  var t = Math.round(e);
  return i1(t, r);
}
function Zi(e, r) {
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
var Ns = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  Ga = [
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
var We = {
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
  ks = {
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
function Qi(e, r, t) {
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
function Fi(e, r, t) {
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
      t && (a = x1(l, s));
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
var Eo = new Date(1899, 11, 31, 0, 0, 0),
  f1 = Eo.getTime(),
  o1 = new Date(1900, 2, 1, 0, 0, 0);
function To(e, r) {
  var t = e.getTime();
  return (
    r ? (t -= 1461 * 24 * 60 * 60 * 1e3) : e >= o1 && (t += 24 * 60 * 60 * 1e3),
    (t - (f1 + (e.getTimezoneOffset() - Eo.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function P0(e) {
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
    t = P0(e.toFixed(12));
  return t.length <= r || ((t = e.toPrecision(10)), t.length <= r)
    ? t
    : e.toExponential(5);
}
function u1(e) {
  var r = P0(e.toFixed(11));
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
    P0(l1(t.toUpperCase()))
  );
}
function u0(e, r) {
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
      if (e instanceof Date) return Ir(14, To(e, r && r.date1904), r);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function x1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function d1(e, r, t, n) {
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
          return Ga[t.m - 1][1];
        case 5:
          return Ga[t.m - 1][0];
        default:
          return Ga[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (l = t.d), (o = r.length);
          break;
        case 3:
          return Ns[t.q][0];
        default:
          return Ns[t.q][1];
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
        ? Gt(t.S, r.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (t.S + t.u))),
          a >= 60 * s && (a = 0),
          r === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = Gt(a, 2 + n)),
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
  var c = o > 0 ? Gt(l, o) : '';
  return c;
}
function Rr(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, n = e.substr(0, t); t != e.length; t += r)
    n += (n.length > 0 ? ',' : '') + e.substr(t, r);
  return n;
}
var wo = /%/g;
function p1(e, r, t) {
  var n = r.replace(wo, ''),
    i = r.length - n.length;
  return vr(e, n, t * Math.pow(10, 2 * i)) + He('%', i);
}
function v1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return vr(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
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
var Ao = /# (\?+)( ?)\/( ?)(\d+)/;
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
      ? He(' ', e[1].length + 1 + e[4].length)
      : I0(s, e[1].length) + e[2] + '/' + e[3] + Gt(f, e[4].length))
  );
}
function _1(e, r, t) {
  return t + (r === 0 ? '' : '' + r) + He(' ', e[1].length + 2 + e[4].length);
}
var yo = /^#*0*\.([0#]+)/,
  Fo = /\).*[0#]/,
  Co = /\(###\) ###\\?-####/;
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
function Ds(e, r) {
  var t = Math.pow(10, r);
  return '' + Math.round(e * t) / t;
}
function Is(e, r) {
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
function Lt(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fo)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? Lt('n', n, t) : '(' + Lt('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return v1(e, r, t);
  if (r.indexOf('%') !== -1) return p1(e, r, t);
  if (r.indexOf('E') !== -1) return So(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + Lt(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + xn(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = xn(t, 0)),
      i === '0' && (i = ''),
      i.length > r.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(Ao))) return m1(a, l, o);
  if (r.match(/^#+0+$/)) return o + xn(l, r.length - r.indexOf('0'));
  if ((a = r.match(yo)))
    return (
      (i = Ds(t, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + xt(a[1]))
        .replace(/\.$/, '.' + xt(a[1]))
        .replace(/\.(\d*)$/, function (p, x) {
          return '.' + x + He('0', xt(a[1]).length - x.length);
        })),
      r.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((r = r.replace(/^#+([0.])/, '$1')), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      o +
      Ds(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + Rr(xn(l, 0));
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0
      ? '-' + Lt(e, r, -t)
      : Rr('' + (Math.floor(t) + g1(t, a[1].length))) +
          '.' +
          Gt(Is(t, a[1].length), a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return Lt(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = gn(Lt(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      gn(
        gn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(Co))
    return (
      (i = Lt(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Qi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = vr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Ji(f[2], s)),
      c.length < a[4].length &&
        (c = xt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Qi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? I0(f[1], s) + a[2] + '/' + a[3] + Ji(f[2], s)
          : He(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = xn(t, 0)),
      r.length <= i.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return xt(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = Is(t, a[1].length)),
      t < 0
        ? '-' + Lt(e, r, -t)
        : Rr(E1(t))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (p) {
              return '00,' + (p.length < 3 ? Gt(0, 3 - p.length) : '') + p;
            }) +
          '.' +
          Gt(s, a[1].length)
    );
  switch (r) {
    case '###,##0.00':
      return Lt(e, '#,##0.00', t);
    case '###,###':
    case '##,###':
    case '#,###':
      var d = Rr(xn(l, 0));
      return d !== '0' ? o + d : '';
    case '###,###.00':
      return Lt(e, '###,##0.00', t).replace(/^0\./, '.');
    case '#,###.00':
      return Lt(e, '#,##0.00', t).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + r + '|');
}
function T1(e, r, t) {
  for (var n = r.length - 1; r.charCodeAt(n - 1) === 44; ) --n;
  return vr(e, r.substr(0, n), t / Math.pow(10, 3 * (r.length - n)));
}
function w1(e, r, t) {
  var n = r.replace(wo, ''),
    i = r.length - n.length;
  return vr(e, n, t * Math.pow(10, 2 * i)) + He('%', i);
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
function ir(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fo)) {
    var n = r.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return t >= 0 ? ir('n', n, t) : '(' + ir('n', n, -t) + ')';
  }
  if (r.charCodeAt(r.length - 1) === 44) return T1(e, r, t);
  if (r.indexOf('%') !== -1) return w1(e, r, t);
  if (r.indexOf('E') !== -1) return Oo(r, t);
  if (r.charCodeAt(0) === 36)
    return '$' + ir(e, r.substr(r.charAt(1) == ' ' ? 2 : 1), t);
  var i,
    a,
    s,
    f,
    l = Math.abs(t),
    o = t < 0 ? '-' : '';
  if (r.match(/^00+$/)) return o + Gt(l, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (i = '' + t),
      t === 0 && (i = ''),
      i.length > r.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(Ao))) return _1(a, l, o);
  if (r.match(/^#+0+$/)) return o + Gt(l, r.length - r.indexOf('0'));
  if ((a = r.match(yo)))
    return (
      (i = ('' + t)
        .replace(/^([^\.]+)$/, '$1.' + xt(a[1]))
        .replace(/\.$/, '.' + xt(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (p, x) {
        return '.' + x + He('0', xt(a[1]).length - x.length);
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
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return o + Rr('' + l);
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0 ? '-' + ir(e, r, -t) : Rr('' + t) + '.' + He('0', a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return ir(e, r.replace(/^#,#*,/, ''), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = gn(ir(e, r.replace(/[\\-]/g, ''), t))),
      (s = 0),
      gn(
        gn(r.replace(/\\/g, '')).replace(/[0#]/g, function (p) {
          return s < i.length ? i.charAt(s++) : p === '0' ? '0' : '';
        }),
      )
    );
  if (r.match(Co))
    return (
      (i = ir(e, '##########', t)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = Qi(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = vr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Ji(f[2], s)),
      c.length < a[4].length &&
        (c = xt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = Qi(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? I0(f[1], s) + a[2] + '/' + a[3] + Ji(f[2], s)
          : He(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (i = '' + t),
      r.length <= i.length ? i : xt(r.substr(0, r.length - i.length)) + i
    );
  if ((a = r.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = r.indexOf('.') - s,
      u = r.length - i.length - h;
    return xt(r.substr(0, h) + i + r.substr(r.length - u));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return t < 0
      ? '-' + ir(e, r, -t)
      : Rr('' + t)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (p) {
            return '00,' + (p.length < 3 ? Gt(0, 3 - p.length) : '') + p;
          }) +
          '.' +
          Gt(0, a[1].length);
  switch (r) {
    case '###,###':
    case '##,###':
    case '#,###':
      var d = Rr('' + l);
      return d !== '0' ? o + d : '';
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          ir(e, r.slice(0, r.lastIndexOf('.')), t) +
          xt(r.slice(r.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + r + '|');
}
function vr(e, r, t) {
  return (t | 0) === t ? ir(e, r, t) : Lt(e, r, t);
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
var Ro = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function No(e) {
  for (var r = 0, t = '', n = ''; r < e.length; )
    switch ((t = e.charAt(r))) {
      case 'G':
        Zi(e, r) && (r += 6), r++;
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
        if (n.match(Ro)) return !0;
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
        if (!Zi(e, s))
          throw new Error('unrecognized character ' + f + ' in ' + e);
        (i[i.length] = { t: 'G', v: 'General' }), (s += 7);
        break;
      case '"':
        for (a = ''; (h = e.charCodeAt(++s)) !== 34 && s < e.length; )
          a += String.fromCharCode(h);
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
          if (o == null && ((o = Fi(r, t, e.charAt(s + 1) === '2')), o == null))
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
        if (r < 0 || (o == null && ((o = Fi(r, t)), o == null))) return '';
        for (a = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) a += f;
        f === 'm' && l.toLowerCase() === 'h' && (f = 'M'),
          f === 'h' && (f = u),
          (i[i.length] = { t: f, v: a }),
          (l = f);
        break;
      case 'A':
      case 'a':
      case '上':
        var x = { t: f, v: f };
        if (
          (o == null && (o = Fi(r, t)),
          e.substr(s, 3).toUpperCase() === 'A/P'
            ? (o != null && (x.v = o.H >= 12 ? 'P' : 'A'),
              (x.t = 'T'),
              (u = 'h'),
              (s += 3))
            : e.substr(s, 5).toUpperCase() === 'AM/PM'
              ? (o != null && (x.v = o.H >= 12 ? 'PM' : 'AM'),
                (x.t = 'T'),
                (s += 5),
                (u = 'h'))
              : e.substr(s, 5).toUpperCase() === '上午/下午'
                ? (o != null && (x.v = o.H >= 12 ? '下午' : '上午'),
                  (x.t = 'T'),
                  (s += 5),
                  (u = 'h'))
                : ((x.t = 't'), ++s),
          o == null && x.t === 'T')
        )
          return '';
        (i[i.length] = x), (l = f);
        break;
      case '[':
        for (a = f; e.charAt(s++) !== ']' && s < e.length; ) a += e.charAt(s);
        if (a.slice(-1) !== ']') throw 'unterminated "[" block: |' + a + '|';
        if (a.match(Ro)) {
          if (o == null && ((o = Fi(r, t)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            No(e) || (i[i.length] = { t: 't', v: a }));
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
  var S = '',
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
        (i[s].v = d1(i[s].t.charCodeAt(0), i[s].v, o, y)), (i[s].t = 't');
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
        (S += i[s].v), (s = N - 1);
        break;
      case 'G':
        (i[s].t = 't'), (i[s].v = u0(r, t));
        break;
    }
  var U = '',
    J,
    O;
  if (S.length > 0) {
    S.charCodeAt(0) == 40
      ? ((J = r < 0 && S.charCodeAt(0) === 45 ? -r : r), (O = vr('n', S, J)))
      : ((J = r < 0 && n > 1 ? -r : r),
        (O = vr('n', S, J)),
        J < 0 &&
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
    var I = i.length;
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
          (I = s));
      N >= 0 && I < i.length && (i[I].v = O.substr(0, N + 1) + i[I].v);
    } else if (b !== i.length && O.indexOf('E') === -1) {
      for (N = O.indexOf('.') - 1, s = b; s >= 0; --s)
        if (!(i[s] == null || 'n?'.indexOf(i[s].t) === -1)) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === b
                ? i[s].v.indexOf('.') - 1
                : i[s].v.length - 1,
              U = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            N >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (U = O.charAt(N--) + U);
          (i[s].v = U), (i[s].t = 't'), (I = s);
        }
      for (
        N >= 0 && I < i.length && (i[I].v = O.substr(0, N + 1) + i[I].v),
          N = O.indexOf('.') + 1,
          s = b;
        s < i.length;
        ++s
      )
        if (!(i[s] == null || ('n?('.indexOf(i[s].t) === -1 && s !== b))) {
          for (
            c =
              i[s].v.indexOf('.') > -1 && s === b ? i[s].v.indexOf('.') + 1 : 0,
              U = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            N < O.length && (U += O.charAt(N++));
          (i[s].v = U), (i[s].t = 't'), (I = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((J = n > 1 && r < 0 && s > 0 && i[s - 1].v === '-' ? -r : r),
      (i[s].v = vr(i[s].t, i[s].v, J)),
      (i[s].t = 't'));
  var G = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (G += i[s].v);
  return G;
}
var Ps = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Ls(e, r) {
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
    var s = t[0].match(Ps),
      f = t[1].match(Ps);
    return Ls(r, s)
      ? [n, t[0]]
      : Ls(r, f)
        ? [n, t[1]]
        : [n, t[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function Ir(e, r, t) {
  t == null && (t = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && t.dateNF ? (n = t.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && t.dateNF
        ? (n = t.dateNF)
        : (n = (t.table != null ? t.table : We)[e]),
        n == null && (n = (t.table && t.table[ks[e]]) || We[ks[e]]),
        n == null && (n = s1[e] || 'General');
      break;
  }
  if (Zi(n, 0)) return u0(r, t);
  r instanceof Date && (r = To(r, t.date1904));
  var i = y1(n, r);
  if (Zi(i[1])) return u0(r, t);
  if (r === !0) r = 'TRUE';
  else if (r === !1) r = 'FALSE';
  else if (r === '' || r == null) return '';
  return A1(i[1], r, t, i[0]);
}
function ko(e, r) {
  if (typeof r != 'number') {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (We[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (We[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (We[r] = e), r;
}
function ya(e) {
  for (var r = 0; r != 392; ++r) e[r] !== void 0 && ko(e[r], r);
}
function Fa() {
  We = a1();
}
var Do = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function F1(e) {
  var r = typeof e == 'number' ? We[e] : e;
  return (r = r.replace(Do, '(\\d+)')), new RegExp('^' + r + '$');
}
function C1(e, r, t) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (r.match(Do) || []).forEach(function (h, u) {
    var d = parseInt(t[u + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
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
var O1 = (function () {
    var e = {};
    e.version = '1.2.0';
    function r() {
      for (var O = 0, b = new Array(256), I = 0; I != 256; ++I)
        (O = I),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (O = O & 1 ? -306674912 ^ (O >>> 1) : O >>> 1),
          (b[I] = O);
      return typeof Int32Array < 'u' ? new Int32Array(b) : b;
    }
    var t = r();
    function n(O) {
      var b = 0,
        I = 0,
        G = 0,
        j = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (G = 0; G != 256; ++G) j[G] = O[G];
      for (G = 0; G != 256; ++G)
        for (I = O[G], b = 256 + G; b < 4096; b += 256)
          I = j[b] = (I >>> 8) ^ O[I & 255];
      var K = [];
      for (G = 1; G != 16; ++G)
        K[G - 1] =
          typeof Int32Array < 'u'
            ? j.subarray(G * 256, G * 256 + 256)
            : j.slice(G * 256, G * 256 + 256);
      return K;
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
      d = i[8],
      p = i[9],
      x = i[10],
      m = i[11],
      y = i[12],
      F = i[13],
      S = i[14];
    function N(O, b) {
      for (var I = b ^ -1, G = 0, j = O.length; G < j; )
        I = (I >>> 8) ^ t[(I ^ O.charCodeAt(G++)) & 255];
      return ~I;
    }
    function U(O, b) {
      for (var I = b ^ -1, G = O.length - 15, j = 0; j < G; )
        I =
          S[O[j++] ^ (I & 255)] ^
          F[O[j++] ^ ((I >> 8) & 255)] ^
          y[O[j++] ^ ((I >> 16) & 255)] ^
          m[O[j++] ^ (I >>> 24)] ^
          x[O[j++]] ^
          p[O[j++]] ^
          d[O[j++]] ^
          u[O[j++]] ^
          h[O[j++]] ^
          c[O[j++]] ^
          o[O[j++]] ^
          l[O[j++]] ^
          f[O[j++]] ^
          s[O[j++]] ^
          a[O[j++]] ^
          t[O[j++]];
      for (G += 15; j < G; ) I = (I >>> 8) ^ t[(I ^ O[j++]) & 255];
      return ~I;
    }
    function J(O, b) {
      for (var I = b ^ -1, G = 0, j = O.length, K = 0, re = 0; G < j; )
        (K = O.charCodeAt(G++)),
          K < 128
            ? (I = (I >>> 8) ^ t[(I ^ K) & 255])
            : K < 2048
              ? ((I = (I >>> 8) ^ t[(I ^ (192 | ((K >> 6) & 31))) & 255]),
                (I = (I >>> 8) ^ t[(I ^ (128 | (K & 63))) & 255]))
              : K >= 55296 && K < 57344
                ? ((K = (K & 1023) + 64),
                  (re = O.charCodeAt(G++) & 1023),
                  (I = (I >>> 8) ^ t[(I ^ (240 | ((K >> 8) & 7))) & 255]),
                  (I = (I >>> 8) ^ t[(I ^ (128 | ((K >> 2) & 63))) & 255]),
                  (I =
                    (I >>> 8) ^
                    t[(I ^ (128 | ((re >> 6) & 15) | ((K & 3) << 4))) & 255]),
                  (I = (I >>> 8) ^ t[(I ^ (128 | (re & 63))) & 255]))
                : ((I = (I >>> 8) ^ t[(I ^ (224 | ((K >> 12) & 15))) & 255]),
                  (I = (I >>> 8) ^ t[(I ^ (128 | ((K >> 6) & 63))) & 255]),
                  (I = (I >>> 8) ^ t[(I ^ (128 | (K & 63))) & 255]));
      return ~I;
    }
    return (e.table = t), (e.bstr = N), (e.buf = U), (e.str = J), e;
  })(),
  Ce = (function () {
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
      var W = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(W), g.setSeconds(D << 1), g
      );
    }
    function f(v) {
      Rt(v, 0);
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
      if (v[0] == 80 && v[1] == 75) return Zt(v, E);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return wi(v, E);
      if (v.length < 512)
        throw new Error('CFB file size ' + v.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        D = 0,
        W = 0,
        k = 0,
        P = [],
        L = v.slice(0, 512);
      Rt(L, 0);
      var Y = h(L);
      switch (((_ = Y[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (Y[1] == 0) return Zt(v, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = v.slice(0, g)), Rt(L, 28));
      var te = v.slice(0, g);
      u(L, _);
      var ie = L.read_shift(4, 'i');
      if (_ === 3 && ie !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + ie);
      (L.l += 4),
        (D = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (W = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (k = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var q = -1, ne = 0;
        ne < 109 && ((q = L.read_shift(4, 'i')), !(q < 0));
        ++ne
      )
        P[ne] = q;
      var xe = d(v, g);
      m(k, w, xe, g, P);
      var Pe = F(xe, D, P, g);
      (Pe[D].name = '!Directory'),
        T > 0 && W !== re && (Pe[W].name = '!MiniFAT'),
        (Pe[P[0]].name = '!FAT'),
        (Pe.fat_addrs = P),
        (Pe.ssz = g);
      var Le = {},
        ft = [],
        Ln = [],
        Bn = [];
      S(D, Pe, xe, ft, T, Le, Ln, W), p(Ln, Bn, ft), ft.shift();
      var Mn = { FileIndex: Ln, FullPaths: Bn };
      return E && E.raw && (Mn.raw = { header: te, sectors: xe }), Mn;
    }
    function h(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(_e, 'Header Signature: '), (v.l += 16);
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
    function d(v, E) {
      for (var _ = Math.ceil(v.length / E) - 1, g = [], T = 1; T < _; ++T)
        g[T - 1] = v.slice(T * E, (T + 1) * E);
      return (g[_ - 1] = v.slice(_ * E)), g;
    }
    function p(v, E, _) {
      for (
        var g = 0, T = 0, w = 0, D = 0, W = 0, k = _.length, P = [], L = [];
        g < k;
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
      for (g = 1; g < k; ++g)
        P[g] === g &&
          (w !== -1 && P[w] !== w
            ? (P[g] = P[w])
            : T !== -1 && P[T] !== T && (P[g] = P[T]));
      for (g = 1; g < k; ++g)
        if (v[g].type !== 0) {
          if (((W = g), W != P[W]))
            do (W = P[W]), (E[g] = E[W] + '/' + E[g]);
            while (W !== 0 && P[W] !== -1 && W != P[W]);
          P[g] = -1;
        }
      for (E[0] += '/', g = 1; g < k; ++g) v[g].type !== 2 && (E[g] += '/');
    }
    function x(v, E, _) {
      for (var g = v.start, T = v.size, w = [], D = g; _ && T > 0 && D >= 0; )
        w.push(E.slice(D * K, D * K + K)), (T -= K), (D = Gr(_, D * 4));
      return w.length === 0 ? H(0) : rt(w).slice(0, v.size);
    }
    function m(v, E, _, g, T) {
      var w = re;
      if (v === re) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (v !== -1) {
        var D = _[v],
          W = (g >>> 2) - 1;
        if (!D) return;
        for (var k = 0; k < W && (w = Gr(D, k * 4)) !== re; ++k) T.push(w);
        m(Gr(D, g - 4), E - 1, _, g, T);
      }
    }
    function y(v, E, _, g, T) {
      var w = [],
        D = [];
      T || (T = []);
      var W = g - 1,
        k = 0,
        P = 0;
      for (k = E; k >= 0; ) {
        (T[k] = !0), (w[w.length] = k), D.push(v[k]);
        var L = _[Math.floor((k * 4) / g)];
        if (((P = (k * 4) & W), g < 4 + P))
          throw new Error('FAT boundary crossed: ' + k + ' 4 ' + g);
        if (!v[L]) break;
        k = Gr(v[L], P);
      }
      return { nodes: w, data: Gs([D]) };
    }
    function F(v, E, _, g) {
      var T = v.length,
        w = [],
        D = [],
        W = [],
        k = [],
        P = g - 1,
        L = 0,
        Y = 0,
        te = 0,
        ie = 0;
      for (L = 0; L < T; ++L)
        if (((W = []), (te = L + E), te >= T && (te -= T), !D[te])) {
          k = [];
          var q = [];
          for (Y = te; Y >= 0; ) {
            (q[Y] = !0), (D[Y] = !0), (W[W.length] = Y), k.push(v[Y]);
            var ne = _[Math.floor((Y * 4) / g)];
            if (((ie = (Y * 4) & P), g < 4 + ie))
              throw new Error('FAT boundary crossed: ' + Y + ' 4 ' + g);
            if (!v[ne] || ((Y = Gr(v[ne], ie)), q[Y])) break;
          }
          w[te] = { nodes: W, data: Gs([k]) };
        }
      return w;
    }
    function S(v, E, _, g, T, w, D, W) {
      for (
        var k = 0, P = g.length ? 2 : 0, L = E[v].data, Y = 0, te = 0, ie;
        Y < L.length;
        Y += 128
      ) {
        var q = L.slice(Y, Y + 128);
        Rt(q, 64), (te = q.read_shift(2)), (ie = U0(q, 0, te - P)), g.push(ie);
        var ne = {
            name: ie,
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
          xe =
            q.read_shift(2) +
            q.read_shift(2) +
            q.read_shift(2) +
            q.read_shift(2);
        xe !== 0 && (ne.ct = N(q, q.l - 8));
        var Pe =
          q.read_shift(2) + q.read_shift(2) + q.read_shift(2) + q.read_shift(2);
        Pe !== 0 && (ne.mt = N(q, q.l - 8)),
          (ne.start = q.read_shift(4, 'i')),
          (ne.size = q.read_shift(4, 'i')),
          ne.size < 0 &&
            ne.start < 0 &&
            ((ne.size = ne.type = 0), (ne.start = re), (ne.name = '')),
          ne.type === 5
            ? ((k = ne.start), T > 0 && k !== re && (E[k].name = '!StreamData'))
            : ne.size >= 4096
              ? ((ne.storage = 'fat'),
                E[ne.start] === void 0 &&
                  (E[ne.start] = y(_, ne.start, E.fat_addrs, E.ssz)),
                (E[ne.start].name = ne.name),
                (ne.content = E[ne.start].data.slice(0, ne.size)))
              : ((ne.storage = 'minifat'),
                ne.size < 0
                  ? (ne.size = 0)
                  : k !== re &&
                    ne.start !== re &&
                    E[k] &&
                    (ne.content = x(ne, E[k].data, (E[W] || {}).data))),
          ne.content && Rt(ne.content, 0),
          (w[ie] = ne),
          D.push(ne);
      }
    }
    function N(v, E) {
      return new Date(
        ((kt(v, E + 4) / 1e7) * Math.pow(2, 32) +
          kt(v, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function U(v, E) {
      return o(), c(l.readFileSync(v), E);
    }
    function J(v, E) {
      var _ = E && E.type;
      switch (
        (_ || (Te && Buffer.isBuffer(v) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return U(v, E);
        case 'base64':
          return c(Vt(gr(v)), E);
        case 'binary':
          return c(Vt(v), E);
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
      if (!Ce.find(v, '/' + E)) {
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
          k = Object.create ? Object.create(null) : {},
          P = [];
        for (T = 0; T < v.FullPaths.length; ++T)
          (k[v.FullPaths[T]] = !0),
            v.FileIndex[T].type !== 0 &&
              P.push([v.FullPaths[T], v.FileIndex[T]]);
        for (T = 0; T < P.length; ++T) {
          var L = n(P[T][0]);
          (g = k[L]),
            g ||
              (P.push([
                L,
                {
                  name: i(L).replace('/', ''),
                  type: 1,
                  clsid: Me,
                  ct: D,
                  mt: D,
                  content: null,
                },
              ]),
              (k[L] = !0));
        }
        for (
          P.sort(function (ie, q) {
            return t(ie[0], q[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            T = 0;
          T < P.length;
          ++T
        )
          (v.FullPaths[T] = P[T][0]), (v.FileIndex[T] = P[T][1]);
        for (T = 0; T < P.length; ++T) {
          var Y = v.FileIndex[T],
            te = v.FullPaths[T];
          if (
            ((Y.name = i(te).replace('/', '')),
            (Y.L = Y.R = Y.C = -(Y.color = 1)),
            (Y.size = Y.content ? Y.content.length : 0),
            (Y.start = 0),
            (Y.clsid = Y.clsid || Me),
            T === 0)
          )
            (Y.C = P.length > 1 ? 1 : -1), (Y.size = 0), (Y.type = 5);
          else if (te.slice(-1) == '/') {
            for (W = T + 1; W < P.length && n(v.FullPaths[W]) != te; ++W);
            for (
              Y.C = W >= P.length ? -1 : W, W = T + 1;
              W < P.length && n(v.FullPaths[W]) != n(te);
              ++W
            );
            (Y.R = W >= P.length ? -1 : W), (Y.type = 1);
          } else
            n(v.FullPaths[T + 1] || '') == n(te) && (Y.R = T + 1), (Y.type = 2);
        }
      }
    }
    function G(v, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return Pa(v, _);
      switch ((I(v), _.fileType)) {
        case 'zip':
          return Ia(v, _);
      }
      var g = (function (ie) {
          for (var q = 0, ne = 0, xe = 0; xe < ie.FileIndex.length; ++xe) {
            var Pe = ie.FileIndex[xe];
            if (Pe.content) {
              var Le = Pe.content.length;
              Le > 0 &&
                (Le < 4096 ? (q += (Le + 63) >> 6) : (ne += (Le + 511) >> 9));
            }
          }
          for (
            var ft = (ie.FullPaths.length + 3) >> 2,
              Ln = (q + 7) >> 3,
              Bn = (q + 127) >> 7,
              Mn = Ln + ne + ft + Bn,
              Vr = (Mn + 127) >> 7,
              Ba = Vr <= 109 ? 0 : Math.ceil((Vr - 109) / 127);
            (Mn + Vr + Ba + 127) >> 7 > Vr;

          )
            Ba = ++Vr <= 109 ? 0 : Math.ceil((Vr - 109) / 127);
          var hr = [1, Ba, Vr, Bn, ft, ne, q, 0];
          return (
            (ie.FileIndex[0].size = q << 6),
            (hr[7] =
              (ie.FileIndex[0].start =
                hr[0] + hr[1] + hr[2] + hr[3] + hr[4] + hr[5]) +
              ((hr[6] + 7) >> 3)),
            hr
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
            T.write_shift(4, g[3] ? g[0] + g[1] + g[2] - 1 : re),
            T.write_shift(4, g[3]),
            T.write_shift(-4, g[1] ? g[0] - 1 : re),
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
          T.write_shift(-4, D === g[1] - 1 ? re : D + 1);
        }
      var W = function (ie) {
        for (D += ie; w < D - 1; ++w) T.write_shift(-4, w + 1);
        ie && (++w, T.write_shift(-4, re));
      };
      for (D = w = 0, D += g[1]; w < D; ++w) T.write_shift(-4, Oe.DIFSECT);
      for (D += g[2]; w < D; ++w) T.write_shift(-4, Oe.FATSECT);
      W(g[3]), W(g[4]);
      for (var k = 0, P = 0, L = v.FileIndex[0]; k < v.FileIndex.length; ++k)
        (L = v.FileIndex[k]),
          L.content &&
            ((P = L.content.length),
            !(P < 4096) && ((L.start = D), W((P + 511) >> 9)));
      for (W((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, Oe.ENDOFCHAIN);
      for (D = w = 0, k = 0; k < v.FileIndex.length; ++k)
        (L = v.FileIndex[k]),
          L.content &&
            ((P = L.content.length),
            !(!P || P >= 4096) && ((L.start = D), W((P + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, Oe.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var Y = v.FullPaths[w];
        if (!Y || Y.length === 0) {
          for (k = 0; k < 17; ++k) T.write_shift(4, 0);
          for (k = 0; k < 3; ++k) T.write_shift(4, -1);
          for (k = 0; k < 12; ++k) T.write_shift(4, 0);
          continue;
        }
        (L = v.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : re);
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
          if (((T.l = (L.start + 1) << 9), Te && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (k = 0; k < L.size; ++k) T.write_shift(1, L.content[k]);
            for (; k & 511; ++k) T.write_shift(1, 0);
          }
      for (w = 1; w < v.FileIndex.length; ++w)
        if (((L = v.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (Te && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (k = 0; k < L.size; ++k) T.write_shift(1, L.content[k]);
            for (; k & 63; ++k) T.write_shift(1, 0);
          }
      if (Te) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function j(v, E) {
      var _ = v.FullPaths.map(function (k) {
          return k.toUpperCase();
        }),
        g = _.map(function (k) {
          var P = k.split('/');
          return P[P.length - (k.slice(-1) == '/' ? 2 : 1)];
        }),
        T = !1;
      E.charCodeAt(0) === 47
        ? ((T = !0), (E = _[0].slice(0, -1) + E))
        : (T = E.indexOf('/') !== -1);
      var w = E.toUpperCase(),
        D = T === !0 ? _.indexOf(w) : g.indexOf(w);
      if (D !== -1) return v.FileIndex[D];
      var W = !w.match(yi);
      for (
        w = w.replace(jn, ''), W && (w = w.replace(yi, '!')), D = 0;
        D < _.length;
        ++D
      )
        if (
          (W ? _[D].replace(yi, '!') : _[D]).replace(jn, '') == w ||
          (W ? g[D].replace(yi, '!') : g[D]).replace(jn, '') == w
        )
          return v.FileIndex[D];
      return null;
    }
    var K = 64,
      re = -2,
      _e = 'd0cf11e0a1b11ae1',
      ue = [208, 207, 17, 224, 161, 177, 26, 225],
      Me = '00000000000000000000000000000000',
      Oe = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: re,
        FREESECT: -1,
        HEADER_SIGNATURE: _e,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: Me,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function Ze(v, E, _) {
      o();
      var g = G(v, _);
      l.writeFileSync(E, g);
    }
    function Ve(v) {
      for (var E = new Array(v.length), _ = 0; _ < v.length; ++_)
        E[_] = String.fromCharCode(v[_]);
      return E.join('');
    }
    function mt(v, E) {
      var _ = G(v, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : Ve(_);
        case 'base64':
          return ti(typeof _ == 'string' ? _ : Ve(_));
        case 'buffer':
          if (Te) return Buffer.isBuffer(_) ? _ : wr(_);
        case 'array':
          return typeof _ == 'string' ? Vt(_) : _;
      }
      return _;
    }
    var st;
    function A(v) {
      try {
        var E = v.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          st = v;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function B(v, E) {
      if (!st) return Hr(v, E);
      var _ = st.InflateRaw,
        g = new _(),
        T = g._processChunk(v.slice(v.l), g._finishFlushFlag);
      return (v.l += g.bytesRead), T;
    }
    function R(v) {
      return st ? st.deflateRawSync(v) : Mr(v);
    }
    var C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      z = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      se = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function oe(v) {
      var E =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var ae = typeof Uint8Array < 'u',
        V = ae ? new Uint8Array(256) : [],
        ce = 0;
      ce < 256;
      ++ce
    )
      V[ce] = oe(ce);
    function fe(v, E) {
      var _ = V[v & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | V[(v >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | V[(v >> 16) & 255]), _ >>> (24 - E)));
    }
    function Re(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 6 ? 0 : v[g + 1] << 8)) >>> _) & 3;
    }
    function le(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 5 ? 0 : v[g + 1] << 8)) >>> _) & 7;
    }
    function we(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 4 ? 0 : v[g + 1] << 8)) >>> _) & 15;
    }
    function Ee(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 3 ? 0 : v[g + 1] << 8)) >>> _) & 31;
    }
    function ee(v, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((v[g] | (_ <= 1 ? 0 : v[g + 1] << 8)) >>> _) & 127;
    }
    function pe(v, E, _) {
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
    function Ie(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (v[T] |= (_ & 7) << g)
          : ((v[T] |= (_ << g) & 255), (v[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function be(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (v[T] |= _), E + 1;
    }
    function Ue(v, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (v[T] |= _ & 255), (_ >>>= 8), (v[T + 1] = _), E + 8;
    }
    function _i(v, E, _) {
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
    function In(v, E) {
      var _ = v.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return v;
      if (Te) {
        var w = Os(g);
        if (v.copy) v.copy(w);
        else for (; T < v.length; ++T) w[T] = v[T];
        return w;
      } else if (ae) {
        var D = new Uint8Array(g);
        if (D.set) D.set(v);
        else for (; T < _; ++T) D[T] = v[T];
        return D;
      }
      return (v.length = g), v;
    }
    function Pt(v) {
      for (var E = new Array(v), _ = 0; _ < v; ++_) E[_] = 0;
      return E;
    }
    function Kt(v, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        D = 0,
        W = 0,
        k = v.length,
        P = ae ? new Uint16Array(32) : Pt(32);
      for (w = 0; w < 32; ++w) P[w] = 0;
      for (w = k; w < _; ++w) v[w] = 0;
      k = v.length;
      var L = ae ? new Uint16Array(k) : Pt(k);
      for (w = 0; w < k; ++w) P[(T = v[w])]++, g < T && (g = T), (L[w] = 0);
      for (P[0] = 0, w = 1; w <= g; ++w) P[w + 16] = W = (W + P[w - 1]) << 1;
      for (w = 0; w < k; ++w) (W = v[w]), W != 0 && (L[w] = P[W + 16]++);
      var Y = 0;
      for (w = 0; w < k; ++w)
        if (((Y = v[w]), Y != 0))
          for (
            W = fe(L[w], g) >> (g - Y), D = (1 << (g + 4 - Y)) - 1;
            D >= 0;
            --D
          )
            E[W | (D << Y)] = (Y & 15) | (w << 4);
      return g;
    }
    var Qe = ae ? new Uint16Array(512) : Pt(512),
      Yt = ae ? new Uint16Array(32) : Pt(32);
    if (!ae) {
      for (var Ft = 0; Ft < 512; ++Ft) Qe[Ft] = 0;
      for (Ft = 0; Ft < 32; ++Ft) Yt[Ft] = 0;
    }
    (function () {
      for (var v = [], E = 0; E < 32; E++) v.push(5);
      Kt(v, Yt, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      Kt(_, Qe, 288);
    })();
    var an = (function () {
      for (
        var E = ae ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < se.length - 1;
        ++_
      )
        for (; g < se[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = ae ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < z.length - 1; ++_)
        for (; g < z[_ + 1]; ++g) T[g] = _;
      function w(W, k) {
        for (var P = 0; P < W.length; ) {
          var L = Math.min(65535, W.length - P),
            Y = P + L == W.length;
          for (
            k.write_shift(1, +Y),
              k.write_shift(2, L),
              k.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            k[k.l++] = W[P++];
        }
        return k.l;
      }
      function D(W, k) {
        for (
          var P = 0, L = 0, Y = ae ? new Uint16Array(32768) : [];
          L < W.length;

        ) {
          var te = Math.min(65535, W.length - L);
          if (te < 10) {
            for (
              P = Ie(k, P, +(L + te == W.length)),
                P & 7 && (P += 8 - (P & 7)),
                k.l = (P / 8) | 0,
                k.write_shift(2, te),
                k.write_shift(2, ~te & 65535);
              te-- > 0;

            )
              k[k.l++] = W[L++];
            P = k.l * 8;
            continue;
          }
          P = Ie(k, P, +(L + te == W.length) + 2);
          for (var ie = 0; te-- > 0; ) {
            var q = W[L];
            ie = ((ie << 5) ^ q) & 32767;
            var ne = -1,
              xe = 0;
            if (
              (ne = Y[ie]) &&
              ((ne |= L & -32768), ne > L && (ne -= 32768), ne < L)
            )
              for (; W[ne + xe] == W[L + xe] && xe < 250; ) ++xe;
            if (xe > 2) {
              (q = T[xe]),
                q <= 22
                  ? (P = Ue(k, P, V[q + 1] >> 1) - 1)
                  : (Ue(k, P, 3), (P += 5), Ue(k, P, V[q - 23] >> 5), (P += 3));
              var Pe = q < 8 ? 0 : (q - 4) >> 2;
              Pe > 0 && (_i(k, P, xe - z[q]), (P += Pe)),
                (q = E[L - ne]),
                (P = Ue(k, P, V[q] >> 3)),
                (P -= 3);
              var Le = q < 4 ? 0 : (q - 2) >> 1;
              Le > 0 && (_i(k, P, L - ne - se[q]), (P += Le));
              for (var ft = 0; ft < xe; ++ft)
                (Y[ie] = L & 32767), (ie = ((ie << 5) ^ W[L]) & 32767), ++L;
              te -= xe - 1;
            } else
              q <= 143 ? (q = q + 48) : (P = be(k, P, 1)),
                (P = Ue(k, P, V[q])),
                (Y[ie] = L & 32767),
                ++L;
          }
          P = Ue(k, P, 0) - 1;
        }
        return (k.l = ((P + 7) / 8) | 0), k.l;
      }
      return function (k, P) {
        return k.length < 8 ? w(k, P) : D(k, P);
      };
    })();
    function Mr(v) {
      var E = H(50 + Math.floor(v.length * 1.1)),
        _ = an(v, E);
      return E.slice(0, _);
    }
    var Sr = ae ? new Uint16Array(32768) : Pt(32768),
      br = ae ? new Uint16Array(32768) : Pt(32768),
      gi = ae ? new Uint16Array(128) : Pt(128),
      Ei = 1,
      qt = 1;
    function Jt(v, E) {
      var _ = Ee(v, E) + 257;
      E += 5;
      var g = Ee(v, E) + 1;
      E += 5;
      var T = we(v, E) + 4;
      E += 4;
      for (
        var w = 0,
          D = ae ? new Uint8Array(19) : Pt(19),
          W = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          k = 1,
          P = ae ? new Uint8Array(8) : Pt(8),
          L = ae ? new Uint8Array(8) : Pt(8),
          Y = D.length,
          te = 0;
        te < T;
        ++te
      )
        (D[C[te]] = w = le(v, E)), k < w && (k = w), P[w]++, (E += 3);
      var ie = 0;
      for (P[0] = 0, te = 1; te <= k; ++te) L[te] = ie = (ie + P[te - 1]) << 1;
      for (te = 0; te < Y; ++te) (ie = D[te]) != 0 && (W[te] = L[ie]++);
      var q = 0;
      for (te = 0; te < Y; ++te)
        if (((q = D[te]), q != 0)) {
          ie = V[W[te]] >> (8 - q);
          for (var ne = (1 << (7 - q)) - 1; ne >= 0; --ne)
            gi[ie | (ne << q)] = (q & 7) | (te << 3);
        }
      var xe = [];
      for (k = 1; xe.length < _ + g; )
        switch (((ie = gi[ee(v, E)]), (E += ie & 7), (ie >>>= 3))) {
          case 16:
            for (w = 3 + Re(v, E), E += 2, ie = xe[xe.length - 1]; w-- > 0; )
              xe.push(ie);
            break;
          case 17:
            for (w = 3 + le(v, E), E += 3; w-- > 0; ) xe.push(0);
            break;
          case 18:
            for (w = 11 + ee(v, E), E += 7; w-- > 0; ) xe.push(0);
            break;
          default:
            xe.push(ie), k < ie && (k = ie);
            break;
        }
      var Pe = xe.slice(0, _),
        Le = xe.slice(_);
      for (te = _; te < 286; ++te) Pe[te] = 0;
      for (te = g; te < 30; ++te) Le[te] = 0;
      return (Ei = Kt(Pe, Sr, 286)), (qt = Kt(Le, br, 30)), E;
    }
    function Ur(v, E) {
      if (v[0] == 3 && !(v[1] & 3)) return [Yr(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = Os(E || 1 << 18),
          w = 0,
          D = T.length >>> 0,
          W = 0,
          k = 0;
        (g & 1) == 0;

      ) {
        if (((g = le(v, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((W = 9), (k = 5))
            : ((_ = Jt(v, _)), (W = Ei), (k = qt));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var P = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), P > 0))
            for (
              !E && D < w + P && ((T = In(T, w + P)), (D = T.length));
              P-- > 0;

            )
              (T[w++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && D < w + 32767 && ((T = In(T, w + 32767)), (D = T.length));
          var L = pe(v, _, W),
            Y = g >>> 1 == 1 ? Qe[L] : Sr[L];
          if (((_ += Y & 15), (Y >>>= 4), ((Y >>> 8) & 255) === 0)) T[w++] = Y;
          else {
            if (Y == 256) break;
            Y -= 257;
            var te = Y < 8 ? 0 : (Y - 4) >> 2;
            te > 5 && (te = 0);
            var ie = w + z[Y];
            te > 0 && ((ie += pe(v, _, te)), (_ += te)),
              (L = pe(v, _, k)),
              (Y = g >>> 1 == 1 ? Yt[L] : br[L]),
              (_ += Y & 15),
              (Y >>>= 4);
            var q = Y < 4 ? 0 : (Y - 2) >> 1,
              ne = se[Y];
            for (
              q > 0 && ((ne += pe(v, _, q)), (_ += q)),
                !E && D < ie && ((T = In(T, ie + 100)), (D = T.length));
              w < ie;

            )
              (T[w] = T[w - ne]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function Hr(v, E) {
      var _ = v.slice(v.l || 0),
        g = Ur(_, E);
      return (v.l += g[1]), g[0];
    }
    function sn(v, E) {
      if (v) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function Zt(v, E) {
      var _ = v;
      Rt(_, 0);
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
      var k = _.read_shift(4);
      for (_.l = k, D = 0; D < W; ++D) {
        _.l += 20;
        var P = _.read_shift(4),
          L = _.read_shift(4),
          Y = _.read_shift(2),
          te = _.read_shift(2),
          ie = _.read_shift(2);
        _.l += 8;
        var q = _.read_shift(4),
          ne = f(_.slice(_.l + Y, _.l + Y + te));
        _.l += Y + te + ie;
        var xe = _.l;
        (_.l = q + 4), Da(_, P, L, w, ne), (_.l = xe);
      }
      return w;
    }
    function Da(v, E, _, g, T) {
      v.l += 2;
      var w = v.read_shift(2),
        D = v.read_shift(2),
        W = s(v);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var k = v.read_shift(4),
          P = v.read_shift(4),
          L = v.read_shift(4),
          Y = v.read_shift(2),
          te = v.read_shift(2),
          ie = '',
          q = 0;
        q < Y;
        ++q
      )
        ie += String.fromCharCode(v[v.l++]);
      if (te) {
        var ne = f(v.slice(v.l, v.l + te));
        (ne[21589] || {}).mt && (W = ne[21589].mt),
          ((T || {})[21589] || {}).mt && (W = T[21589].mt);
      }
      v.l += te;
      var xe = v.slice(v.l, v.l + P);
      switch (D) {
        case 8:
          xe = B(v, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + D);
      }
      var Pe = !1;
      w & 8 &&
        ((k = v.read_shift(4)),
        k == 134695760 && ((k = v.read_shift(4)), (Pe = !0)),
        (P = v.read_shift(4)),
        (L = v.read_shift(4))),
        P != E && sn(Pe, 'Bad compressed size: ' + E + ' != ' + P),
        L != _ && sn(Pe, 'Bad uncompressed size: ' + _ + ' != ' + L),
        La(g, ie, xe, { unsafe: !0, mt: W });
    }
    function Ia(v, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = H(1),
        D = _.compression ? 8 : 0,
        W = 0,
        k = 0,
        P = 0,
        L = 0,
        Y = 0,
        te = v.FullPaths[0],
        ie = te,
        q = v.FileIndex[0],
        ne = [],
        xe = 0;
      for (k = 1; k < v.FullPaths.length; ++k)
        if (
          ((ie = v.FullPaths[k].slice(te.length)),
          (q = v.FileIndex[k]),
          !(!q.size || !q.content || ie == 'Sh33tJ5'))
        ) {
          var Pe = L,
            Le = H(ie.length);
          for (P = 0; P < ie.length; ++P)
            Le.write_shift(1, ie.charCodeAt(P) & 127);
          (Le = Le.slice(0, Le.l)), (ne[Y] = O1.buf(q.content, 0));
          var ft = q.content;
          D == 8 && (ft = R(ft)),
            (w = H(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, W),
            w.write_shift(2, D),
            q.mt ? a(w, q.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ne[Y]),
            w.write_shift(4, ft.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Le.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += Le.length),
            g.push(Le),
            (L += ft.length),
            g.push(ft),
            (w = H(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, W),
            w.write_shift(2, D),
            w.write_shift(4, 0),
            w.write_shift(-4, ne[Y]),
            w.write_shift(4, ft.length),
            w.write_shift(4, q.content.length),
            w.write_shift(2, Le.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Pe),
            (xe += w.l),
            T.push(w),
            (xe += Le.length),
            T.push(Le),
            ++Y;
        }
      return (
        (w = H(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, Y),
        w.write_shift(2, Y),
        w.write_shift(4, xe),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        rt([rt(g), rt(T), w])
      );
    }
    var Qt = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function ur(v, E) {
      if (v.ctype) return v.ctype;
      var _ = v.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && Qt[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && Qt[g[1]]))
        ? Qt[g[1]]
        : 'application/octet-stream';
    }
    function Wr(v) {
      for (var E = ti(v), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function Pn(v) {
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
            k = w.slice(D, D + W);
          k.charAt(W - 1) == '='
            ? W--
            : k.charAt(W - 2) == '='
              ? (W -= 2)
              : k.charAt(W - 3) == '=' && (W -= 3),
            (k = w.slice(D, D + W)),
            (D += W),
            D < w.length && (k += '='),
            _.push(k);
        }
      }
      return _.join(`\r
`);
    }
    function Ut(v) {
      for (var E = [], _ = 0; _ < v.length; ++_) {
        for (var g = v[_]; _ <= v.length && g.charAt(g.length - 1) == '='; )
          g = g.slice(0, g.length - 1) + v[++_];
        E.push(g);
      }
      for (var T = 0; T < E.length; ++T)
        E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return Vt(
        E.join(`\r
`),
      );
    }
    function Ti(v, E, _) {
      for (var g = '', T = '', w = '', D, W = 0; W < 10; ++W) {
        var k = E[W];
        if (!k || k.match(/^\s*$/)) break;
        var P = k.match(/^(.*?):\s*([^\s].*)$/);
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
          D = Vt(gr(E.slice(W).join('')));
          break;
        case 'quoted-printable':
          D = Ut(E.slice(W));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = La(v, g.slice(_.length), D, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function wi(v, E) {
      if (Ve(v.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (Te && Buffer.isBuffer(v) ? v.toString('binary') : Ve(v)).split(`\r
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
        k = [],
        P = [],
        L = { FileIndex: k, FullPaths: P };
      O(L);
      var Y,
        te = 0;
      for (T = 0; T < g.length; ++T) {
        var ie = g[T];
        (ie !== W && ie !== W + '--') ||
          (te++ && Ti(L, g.slice(Y, T), _), (Y = T));
      }
      return L;
    }
    function Pa(v, E) {
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
          k = 1;
        k < v.FullPaths.length;
        ++k
      )
        if (
          ((D = v.FullPaths[k].slice(w.length)),
          (W = v.FileIndex[k]),
          !(!W.size || !W.content || D == 'Sh33tJ5'))
        ) {
          D = D.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (xe) {
              return '_x' + xe.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (xe) {
            return '_u' + xe.charCodeAt(0).toString(16) + '_';
          });
          for (
            var P = W.content,
              L = Te && Buffer.isBuffer(P) ? P.toString('binary') : Ve(P),
              Y = 0,
              te = Math.min(1024, L.length),
              ie = 0,
              q = 0;
            q <= te;
            ++q
          )
            (ie = L.charCodeAt(q)) >= 32 && ie < 128 && ++Y;
          var ne = Y >= (te * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + D,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (ne ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + ur(W, D)),
            T.push(''),
            T.push(ne ? Pn(L) : Wr(L));
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
    function fn(v) {
      var E = {};
      return O(E, v), E;
    }
    function La(v, E, _, g) {
      var T = g && g.unsafe;
      T || O(v);
      var w = !T && Ce.find(v, E);
      if (!w) {
        var D = v.FullPaths[0];
        E.slice(0, D.length) == D
          ? (D = E)
          : (D.slice(-1) != '/' && (D += '/'),
            (D = (D + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          v.FileIndex.push(w),
          v.FullPaths.push(D),
          T || Ce.utils.cfb_gc(v);
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
    function Zl(v, E) {
      O(v);
      var _ = Ce.find(v, E);
      if (_) {
        for (var g = 0; g < v.FileIndex.length; ++g)
          if (v.FileIndex[g] == _)
            return v.FileIndex.splice(g, 1), v.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function Ql(v, E, _) {
      O(v);
      var g = Ce.find(v, E);
      if (g) {
        for (var T = 0; T < v.FileIndex.length; ++T)
          if (v.FileIndex[T] == g)
            return (v.FileIndex[T].name = i(_)), (v.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function ec(v) {
      I(v, !0);
    }
    return (
      (r.find = j),
      (r.read = J),
      (r.parse = c),
      (r.write = mt),
      (r.writeFile = Ze),
      (r.utils = {
        cfb_new: fn,
        cfb_add: La,
        cfb_del: Zl,
        cfb_mov: Ql,
        cfb_gc: ec,
        ReadShift: $n,
        CheckField: qo,
        prep_blob: Rt,
        bconcat: rt,
        use_zlib: A,
        _deflateRaw: Mr,
        _inflateRaw: Hr,
        consts: Oe,
      }),
      r
    );
  })();
function R1(e) {
  return typeof e == 'string' ? Aa(e) : Array.isArray(e) ? t1(e) : e;
}
function xi(e, r, t) {
  if (typeof Deno < 'u') {
    if (t && typeof r == 'string')
      switch (t) {
        case 'utf8':
          r = new TextEncoder(t).encode(r);
          break;
        case 'binary':
          r = Aa(r);
          break;
        default:
          throw new Error('Unsupported encoding ' + t);
      }
    return Deno.writeFileSync(e, r);
  }
  var n = t == 'utf8' ? ni(r) : r;
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
        Array.isArray(r) && (r = hi(r)),
        f.write(r),
        f.close(),
        r
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function at(e) {
  for (var r = Object.keys(e), t = [], n = 0; n < r.length; ++n)
    Object.prototype.hasOwnProperty.call(e, r[n]) && t.push(r[n]);
  return t;
}
function Bs(e, r) {
  for (var t = [], n = at(e), i = 0; i !== n.length; ++i)
    t[e[n[i]][r]] == null && (t[e[n[i]][r]] = n[i]);
  return t;
}
function L0(e) {
  for (var r = [], t = at(e), n = 0; n !== t.length; ++n) r[e[t[n]]] = t[n];
  return r;
}
function Ca(e) {
  for (var r = [], t = at(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] = parseInt(t[n], 10);
  return r;
}
function N1(e) {
  for (var r = [], t = at(e), n = 0; n !== t.length; ++n)
    r[e[t[n]]] == null && (r[e[t[n]]] = []), r[e[t[n]]].push(t[n]);
  return r;
}
var ea = new Date(1899, 11, 30, 0, 0, 0);
function St(e, r) {
  var t = e.getTime(),
    n = ea.getTime() + (e.getTimezoneOffset() - ea.getTimezoneOffset()) * 6e4;
  return (t - n) / (24 * 60 * 60 * 1e3);
}
var Io = new Date(),
  k1 = ea.getTime() + (Io.getTimezoneOffset() - ea.getTimezoneOffset()) * 6e4,
  Ms = Io.getTimezoneOffset();
function Po(e) {
  var r = new Date();
  return (
    r.setTime(e * 24 * 60 * 60 * 1e3 + k1),
    r.getTimezoneOffset() !== Ms &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - Ms) * 6e4),
    r
  );
}
var bs = new Date('2017-02-19T19:06:09.000Z'),
  Lo = isNaN(bs.getFullYear()) ? new Date('2/19/17') : bs,
  D1 = Lo.getFullYear() == 2017;
function vt(e, r) {
  var t = new Date(e);
  if (D1)
    return (
      r > 0
        ? t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3),
      t
    );
  if (e instanceof Date) return e;
  if (Lo.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
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
function Oa(e, r) {
  if (Te && Buffer.isBuffer(e)) return e.toString('binary');
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
function At(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = At(e[t]));
  return r;
}
function He(e, r) {
  for (var t = ''; t.length < r; ) t += e;
  return t;
}
function mr(e) {
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
function ri(e) {
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
      return Te ? (n = wr(t)) : (n = r1(t)), Ce.utils.cfb_add(e, r, n);
    }
    Ce.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function B0() {
  return Ce.utils.cfb_new();
}
var $e = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  P1 = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  M0 = L0(P1),
  b0 = /[&<>'"]/g,
  L1 = /[\u0000-\u0008\u000b-\u001f]/g;
function ye(e) {
  var r = e + '';
  return r
    .replace(b0, function (t) {
      return M0[t];
    })
    .replace(L1, function (t) {
      return '_x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function Us(e) {
  return ye(e).replace(/ /g, '_x0020_');
}
var Bo = /[\u0000-\u001f]/g;
function B1(e) {
  var r = e + '';
  return r
    .replace(b0, function (t) {
      return M0[t];
    })
    .replace(/\n/g, '<br/>')
    .replace(Bo, function (t) {
      return '&#x' + ('000' + t.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function M1(e) {
  var r = e + '';
  return r
    .replace(b0, function (t) {
      return M0[t];
    })
    .replace(Bo, function (t) {
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
function ja(e) {
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
function Hs(e) {
  var r = Yr(2 * e.length),
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
function Ws(e) {
  return wr(e, 'binary').toString('utf8');
}
var Ci = 'foo bar bazâð£',
  Xn = (Te && ((Ws(Ci) == ja(Ci) && Ws) || (Hs(Ci) == ja(Ci) && Hs))) || ja,
  ni = Te
    ? function (e) {
        return wr(e, 'utf8').toString('binary');
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
  Mo = /(^\s|\s$|\n)/;
function nt(e, r) {
  return (
    '<' +
    e +
    (r.match(Mo) ? ' xml:space="preserve"' : '') +
    '>' +
    r +
    '</' +
    e +
    '>'
  );
}
function ii(e) {
  return at(e)
    .map(function (r) {
      return ' ' + r + '="' + e[r] + '"';
    })
    .join('');
}
function Z(e, r, t) {
  return (
    '<' +
    e +
    (t != null ? ii(t) : '') +
    (r != null
      ? (r.match(Mo) ? ' xml:space="preserve"' : '') + '>' + r + '</' + e
      : '/') +
    '>'
  );
}
function h0(e, r) {
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
      var t = Z('vt:lpwstr', ye(e));
      return (t = t.replace(/&quot;/g, '_x0022_')), t;
    case 'number':
      return Z((e | 0) == e ? 'vt:i4' : 'vt:r8', ye(String(e)));
    case 'boolean':
      return Z('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return Z('vt:filetime', h0(e));
  throw new Error('Unable to serialize ' + e);
}
var Ye = {
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
  Rn = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  Nt = {
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
var Vs = function (e) {
    for (var r = [], t = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += t)
          r.push.apply(r, e[0][n].slice(i, i + t));
    return r;
  },
  Gs = Te
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : wr(r);
              }),
            )
          : Vs(e);
      }
    : Vs,
  js = function (e, r, t) {
    for (var n = [], i = r; i < t; i += 2)
      n.push(String.fromCharCode(Wn(e, i)));
    return n.join('').replace(jn, '');
  },
  U0 = Te
    ? function (e, r, t) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', r, t).replace(jn, '')
          : js(e, r, t);
      }
    : js,
  Xs = function (e, r, t) {
    for (var n = [], i = r; i < r + t; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  bo = Te
    ? function (e, r, t) {
        return Buffer.isBuffer(e) ? e.toString('hex', r, r + t) : Xs(e, r, t);
      }
    : Xs,
  $s = function (e, r, t) {
    for (var n = [], i = r; i < t; i++) n.push(String.fromCharCode(mn(e, i)));
    return n.join('');
  },
  di = Te
    ? function (r, t, n) {
        return Buffer.isBuffer(r) ? r.toString('utf8', t, n) : $s(r, t, n);
      }
    : $s,
  Uo = function (e, r) {
    var t = kt(e, r);
    return t > 0 ? di(e, r + 4, r + 4 + t - 1) : '';
  },
  Ho = Uo,
  Wo = function (e, r) {
    var t = kt(e, r);
    return t > 0 ? di(e, r + 4, r + 4 + t - 1) : '';
  },
  Vo = Wo,
  Go = function (e, r) {
    var t = 2 * kt(e, r);
    return t > 0 ? di(e, r + 4, r + 4 + t - 1) : '';
  },
  jo = Go,
  Xo = function (r, t) {
    var n = kt(r, t);
    return n > 0 ? U0(r, t + 4, t + 4 + n) : '';
  },
  $o = Xo,
  zo = function (e, r) {
    var t = kt(e, r);
    return t > 0 ? di(e, r + 4, r + 4 + t) : '';
  },
  Ko = zo,
  Yo = function (e, r) {
    return V1(e, r);
  },
  ta = Yo,
  H0 = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  };
Te &&
  ((Ho = function (r, t) {
    if (!Buffer.isBuffer(r)) return Uo(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (Vo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Wo(r, t);
    var n = r.readUInt32LE(t);
    return n > 0 ? r.toString('utf8', t + 4, t + 4 + n - 1) : '';
  }),
  (jo = function (r, t) {
    if (!Buffer.isBuffer(r)) return Go(r, t);
    var n = 2 * r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n - 1);
  }),
  ($o = function (r, t) {
    if (!Buffer.isBuffer(r)) return Xo(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf16le', t + 4, t + 4 + n);
  }),
  (Ko = function (r, t) {
    if (!Buffer.isBuffer(r)) return zo(r, t);
    var n = r.readUInt32LE(t);
    return r.toString('utf8', t + 4, t + 4 + n);
  }),
  (ta = function (r, t) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(t) : Yo(r, t);
  }),
  (H0 = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < 'u' && r instanceof Uint8Array)
    );
  }));
var mn = function (e, r) {
    return e[r];
  },
  Wn = function (e, r) {
    return e[r + 1] * 256 + e[r];
  },
  j1 = function (e, r) {
    var t = e[r + 1] * 256 + e[r];
    return t < 32768 ? t : (65535 - t + 1) * -1;
  },
  kt = function (e, r) {
    return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
  },
  Gr = function (e, r) {
    return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
  },
  X1 = function (e, r) {
    return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
  };
function $n(e, r) {
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
      if (((o = this.l), Te && Buffer.isBuffer(this)))
        t = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (t += String.fromCharCode(Wn(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      t = di(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (t = U0(this, this.l, this.l + e));
      break;
    case 'wstr':
      return $n.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (t = Ho(this, this.l)), (e = 4 + kt(this, this.l));
      break;
    case 'lpstr-cp':
      (t = Vo(this, this.l)), (e = 4 + kt(this, this.l));
      break;
    case 'lpwstr':
      (t = jo(this, this.l)), (e = 4 + 2 * kt(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + kt(this, this.l)), (t = $o(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + kt(this, this.l)),
        (t = Ko(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, t = ''; (s = mn(this, this.l + e++)) !== 0; ) a.push(Ai(s));
      t = a.join('');
      break;
    case '_wstr':
      for (e = 0, t = ''; (s = Wn(this, this.l + e)) !== 0; )
        a.push(Ai(s)), (e += 2);
      (e += 2), (t = a.join(''));
      break;
    case 'dbcs-cont':
      for (t = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = mn(this, o)),
            (this.l = o + 1),
            (f = $n.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ai(Wn(this, o))), (o += 2);
      }
      (t = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (t = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = mn(this, o)),
            (this.l = o + 1),
            (f = $n.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ai(mn(this, o))), (o += 1);
      }
      t = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = mn(this, this.l)), this.l++, n;
        case 2:
          return (n = (r === 'i' ? j1 : Wn)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return r === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? Gr : X1)(this, this.l)), (this.l += 4), n)
            : ((i = kt(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (r === 'f')
            return (
              e == 8
                ? (i = ta(this, this.l))
                : (i = ta(
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
          t = bo(this, this.l, e);
          break;
      }
  }
  return (this.l += e), t;
}
var $1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >>> 8) & 255),
      (e[t + 2] = (r >>> 16) & 255),
      (e[t + 3] = (r >>> 24) & 255);
  },
  z1 = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >> 8) & 255),
      (e[t + 2] = (r >> 16) & 255),
      (e[t + 3] = (r >> 24) & 255);
  },
  K1 = function (e, r, t) {
    (e[t] = r & 255), (e[t + 1] = (r >>> 8) & 255);
  };
function Y1(e, r, t) {
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
        (n = 4), $1(this, r, this.l);
        break;
      case 8:
        if (((n = 8), t === 'f')) {
          G1(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), z1(this, r, this.l);
        break;
    }
  return (this.l += n), this;
}
function qo(e, r) {
  var t = bo(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + 'Expected ' + e + ' saw ' + t);
  this.l += e.length >> 1;
}
function Rt(e, r) {
  (e.l = r), (e.read_shift = $n), (e.chk = qo), (e.write_shift = Y1);
}
function cr(e, r) {
  e.l += r;
}
function H(e) {
  var r = Yr(e);
  return Rt(r, 0), r;
}
function Tt() {
  var e = [],
    r = Te ? 256 : 2048,
    t = function (o) {
      var c = H(o);
      return Rt(c, 0), c;
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
      return i(), rt(e);
    },
    f = function (o) {
      i(), (n = o), n.l == null && (n.l = n.length), a(r);
    };
  return { next: a, push: f, end: s, _bufs: e };
}
function X(e, r, t, n) {
  var i = +r,
    a;
  if (!isNaN(i)) {
    n || (n = Vm[i].p || (t || []).length || 0),
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
    n > 0 && H0(t) && e.push(t);
  }
}
function zn(e, r, t) {
  var n = At(e);
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
function zs(e, r, t) {
  var n = At(e);
  return (n.s = zn(n.s, r.s, t)), (n.e = zn(n.e, r.s, t)), n;
}
function Kn(e, r) {
  if (e.cRel && e.c < 0) for (e = At(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = At(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = Fe(e);
  return (
    !e.cRel && e.cRel != null && (t = Z1(t)),
    !e.rRel && e.rRel != null && (t = q1(t)),
    t
  );
}
function Xa(e, r) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        lt(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        lt(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (r.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        it(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        it(e.e.r)
      : Kn(e.s, r.biff) + ':' + Kn(e.e, r.biff);
}
function W0(e) {
  return parseInt(J1(e), 10) - 1;
}
function it(e) {
  return '' + (e + 1);
}
function q1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function J1(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function V0(e) {
  for (var r = Q1(e), t = 0, n = 0; n !== r.length; ++n)
    t = 26 * t + r.charCodeAt(n) - 64;
  return t - 1;
}
function lt(e) {
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
function ex(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function qe(e) {
  for (var r = 0, t = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (r = 10 * r + (i - 48))
      : i >= 65 && i <= 90 && (t = 26 * t + (i - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function Fe(e) {
  for (var r = e.c + 1, t = ''; r; r = ((r - 1) / 26) | 0)
    t = String.fromCharCode(((r - 1) % 26) + 65) + t;
  return t + (e.r + 1);
}
function It(e) {
  var r = e.indexOf(':');
  return r == -1
    ? { s: qe(e), e: qe(e) }
    : { s: qe(e.slice(0, r)), e: qe(e.slice(r + 1)) };
}
function Xe(e, r) {
  return typeof r > 'u' || typeof r == 'number'
    ? Xe(e.s, e.e)
    : (typeof e != 'string' && (e = Fe(e)),
      typeof r != 'string' && (r = Fe(r)),
      e == r ? e : e + ':' + r);
}
function De(e) {
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
function Ks(e, r) {
  var t = e.t == 'd' && r instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Ir(e.z, t ? St(r) : r));
    } catch {}
  try {
    return (e.w = Ir((e.XF || {}).numFmtId || (t ? 14 : 0), t ? St(r) : r));
  } catch {
    return '' + r;
  }
}
function Er(e, r, t) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && t && t.dateNF && (e.z = t.dateNF),
        e.t == 'e' ? pi[e.v] || e.v : r == null ? Ks(e, e.v) : Ks(e, r));
}
function Qr(e, r) {
  var t = r && r.sheet ? r.sheet : 'Sheet1',
    n = {};
  return (n[t] = e), { SheetNames: [t], Sheets: n };
}
function Jo(e, r, t) {
  var n = t || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? qe(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = De(a['!ref']);
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
          var d = { v: r[h][u] },
            p = s + h,
            x = f + u;
          if (
            (o.s.r > p && (o.s.r = p),
            o.s.c > x && (o.s.c = x),
            o.e.r < p && (o.e.r = p),
            o.e.c < x && (o.e.c = x),
            r[h][u] &&
              typeof r[h][u] == 'object' &&
              !Array.isArray(r[h][u]) &&
              !(r[h][u] instanceof Date))
          )
            d = r[h][u];
          else if (
            (Array.isArray(d.v) && ((d.f = r[h][u][1]), (d.v = d.v[0])),
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
                  ? ((d.z = n.dateNF || We[14]),
                    n.cellDates
                      ? ((d.t = 'd'), (d.w = Ir(d.z, St(d.v))))
                      : ((d.t = 'n'), (d.v = St(d.v)), (d.w = Ir(d.z, d.v))))
                  : (d.t = 's');
          if (i)
            a[p] || (a[p] = []),
              a[p][x] && a[p][x].z && (d.z = a[p][x].z),
              (a[p][x] = d);
          else {
            var m = Fe({ c: x, r: p });
            a[m] && a[m].z && (d.z = a[m].z), (a[m] = d);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = Xe(o)), a;
}
function Nn(e, r) {
  return Jo(null, e, r);
}
function tx(e) {
  return e.read_shift(4, 'i');
}
function jt(e, r) {
  return r || (r = H(4)), r.write_shift(4, e), r;
}
function ct(e) {
  var r = e.read_shift(4);
  return r === 0 ? '' : e.read_shift(r, 'dbcs');
}
function Je(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(4 + 2 * e.length))),
    r.write_shift(4, e.length),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
function rx(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function nx(e, r) {
  return r || (r = H(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function G0(e, r) {
  var t = e.l,
    n = e.read_shift(1),
    i = ct(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(rx(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = t + r), s;
}
function ix(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(15 + 4 * e.t.length))),
    r.write_shift(1, 0),
    Je(e.t, r),
    t ? r.slice(0, r.l) : r
  );
}
var ax = G0;
function sx(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(23 + 4 * e.t.length))),
    r.write_shift(1, 1),
    Je(e.t, r),
    r.write_shift(4, 1),
    nx({}, r),
    t ? r.slice(0, r.l) : r
  );
}
function bt(e) {
  var r = e.read_shift(4),
    t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: r, iStyleRef: t };
}
function en(e, r) {
  return (
    r == null && (r = H(8)),
    r.write_shift(-4, e.c),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
function tn(e) {
  var r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: r };
}
function rn(e, r) {
  return (
    r == null && (r = H(4)),
    r.write_shift(3, e.iStyleRef || e.s),
    r.write_shift(1, 0),
    r
  );
}
var fx = ct,
  Zo = Je;
function j0(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? '' : e.read_shift(r, 'dbcs');
}
function ra(e, r) {
  var t = !1;
  return (
    r == null && ((t = !0), (r = H(127))),
    r.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && r.write_shift(0, e, 'dbcs'),
    t ? r.slice(0, r.l) : r
  );
}
var ox = ct,
  x0 = j0,
  X0 = ra;
function Qo(e) {
  var r = e.slice(e.l, e.l + 4),
    t = r[0] & 1,
    n = r[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? ta([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : Gr(r, 0) >> 2;
  return t ? i / 100 : i;
}
function el(e, r) {
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
function tl(e) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = e.read_shift(4)),
    (r.e.r = e.read_shift(4)),
    (r.s.c = e.read_shift(4)),
    (r.e.c = e.read_shift(4)),
    r
  );
}
function lx(e, r) {
  return (
    r || (r = H(16)),
    r.write_shift(4, e.s.r),
    r.write_shift(4, e.e.r),
    r.write_shift(4, e.s.c),
    r.write_shift(4, e.e.c),
    r
  );
}
var nn = tl,
  kn = lx;
function Dn(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function qr(e, r) {
  return (r || H(8)).write_shift(8, e, 'f');
}
function cx(e) {
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
      var o = gx[i];
      o && (r.rgb = sf(o));
      break;
    case 2:
      r.rgb = sf([s, f, l]);
      break;
    case 3:
      r.theme = i;
      break;
  }
  return a != 0 && (r.tint = a > 0 ? a / 32767 : a / 32768), r;
}
function na(e, r) {
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
function ux(e) {
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
function hx(e, r) {
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
var rl = 2,
  Ot = 3,
  Oi = 11,
  ia = 19,
  Ri = 64,
  xx = 65,
  dx = 71,
  px = 4108,
  vx = 4126,
  tt = 80,
  Ys = {
    1: { n: 'CodePage', t: rl },
    2: { n: 'Category', t: tt },
    3: { n: 'PresentationFormat', t: tt },
    4: { n: 'ByteCount', t: Ot },
    5: { n: 'LineCount', t: Ot },
    6: { n: 'ParagraphCount', t: Ot },
    7: { n: 'SlideCount', t: Ot },
    8: { n: 'NoteCount', t: Ot },
    9: { n: 'HiddenCount', t: Ot },
    10: { n: 'MultimediaClipCount', t: Ot },
    11: { n: 'ScaleCrop', t: Oi },
    12: { n: 'HeadingPairs', t: px },
    13: { n: 'TitlesOfParts', t: vx },
    14: { n: 'Manager', t: tt },
    15: { n: 'Company', t: tt },
    16: { n: 'LinksUpToDate', t: Oi },
    17: { n: 'CharacterCount', t: Ot },
    19: { n: 'SharedDoc', t: Oi },
    22: { n: 'HyperlinksChanged', t: Oi },
    23: { n: 'AppVersion', t: Ot, p: 'version' },
    24: { n: 'DigSig', t: xx },
    26: { n: 'ContentType', t: tt },
    27: { n: 'ContentStatus', t: tt },
    28: { n: 'Language', t: tt },
    29: { n: 'Version', t: tt },
    255: {},
    2147483648: { n: 'Locale', t: ia },
    2147483651: { n: 'Behavior', t: ia },
    1919054434: {},
  },
  qs = {
    1: { n: 'CodePage', t: rl },
    2: { n: 'Title', t: tt },
    3: { n: 'Subject', t: tt },
    4: { n: 'Author', t: tt },
    5: { n: 'Keywords', t: tt },
    6: { n: 'Comments', t: tt },
    7: { n: 'Template', t: tt },
    8: { n: 'LastAuthor', t: tt },
    9: { n: 'RevNumber', t: tt },
    10: { n: 'EditTime', t: Ri },
    11: { n: 'LastPrinted', t: Ri },
    12: { n: 'CreatedDate', t: Ri },
    13: { n: 'ModifiedDate', t: Ri },
    14: { n: 'PageCount', t: Ot },
    15: { n: 'WordCount', t: Ot },
    16: { n: 'CharCount', t: Ot },
    17: { n: 'Thumbnail', t: dx },
    18: { n: 'Application', t: tt },
    19: { n: 'DocSecurity', t: Ot },
    255: {},
    2147483648: { n: 'Locale', t: ia },
    2147483651: { n: 'Behavior', t: ia },
    1919054434: {},
  };
function mx(e) {
  return e.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
  });
}
var _x = mx([
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
  gx = At(_x),
  pi = {
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
  Ex = {
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
  Ni = {
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
function nl() {
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
function il(e, r) {
  var t = N1(Ex),
    n = [],
    i;
  (n[n.length] = $e),
    (n[n.length] = Z('Types', null, {
      xmlns: Ye.CT,
      'xmlns:xsd': Ye.xsd,
      'xmlns:xsi': Ye.xsi,
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
        return Z('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var a = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((i = e[l][0]),
        (n[n.length] = Z('Override', null, {
          PartName: (i[0] == '/' ? '' : '/') + i,
          ContentType: Ni[l][r.bookType] || Ni[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = Z('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: Ni[l][r.bookType] || Ni[l].xlsx,
        });
      });
    },
    f = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = Z('Override', null, {
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
var ge = {
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
function al(e) {
  var r = e.lastIndexOf('/');
  return e.slice(0, r + 1) + '_rels/' + e.slice(r + 1) + '.rels';
}
function En(e) {
  var r = [$e, Z('Relationships', null, { xmlns: Ye.RELS })];
  return (
    at(e['!id']).forEach(function (t) {
      r[r.length] = Z('Relationship', null, e['!id'][t]);
    }),
    r.length > 2 &&
      ((r[r.length] = '</Relationships>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Ae(e, r, t, n, i, a) {
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
    [ge.HLINK, ge.XPATH, ge.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + r);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), r;
}
function Tx(e) {
  var r = [$e];
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
function Js(e, r, t) {
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
function wx(e, r) {
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
function Sx(e) {
  var r = [$e];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t)
    r.push(Js(e[t][0], e[t][1])), r.push(wx('', e[t][0]));
  return r.push(Js('', 'Document', 'pkg')), r.push('</rdf:RDF>'), r.join('');
}
function sl() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    qi.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var zr = [
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
function $a(e, r, t, n, i) {
  i[e] != null ||
    r == null ||
    r === '' ||
    ((i[e] = r), (r = ye(r)), (n[n.length] = t ? Z(e, r, t) : nt(e, r)));
}
function fl(e, r) {
  var t = r || {},
    n = [
      $e,
      Z('cp:coreProperties', null, {
        'xmlns:cp': Ye.CORE_PROPS,
        'xmlns:dc': Ye.dc,
        'xmlns:dcterms': Ye.dcterms,
        'xmlns:dcmitype': Ye.dcmitype,
        'xmlns:xsi': Ye.xsi,
      }),
    ],
    i = {};
  if (!e && !t.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      $a(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : h0(e.CreatedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      $a(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : h0(e.ModifiedDate, t.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != zr.length; ++a) {
    var s = zr[a],
      f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && $a(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var Tn = [
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
  ol = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function ll(e) {
  var r = [],
    t = Z;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (r[r.length] = $e),
    (r[r.length] = Z('Properties', null, {
      xmlns: Ye.EXT_PROPS,
      'xmlns:vt': Ye.vt,
    })),
    Tn.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = ye(String(e[n[1]]));
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
          return '<vt:lpstr>' + ye(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function cl(e) {
  var r = [
    $e,
    Z('Properties', null, { xmlns: Ye.CUST_PROPS, 'xmlns:vt': Ye.vt }),
  ];
  if (!e) return r.join('');
  var t = 1;
  return (
    at(e).forEach(function (i) {
      ++t,
        (r[r.length] = Z('property', W1(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: t,
          name: ye(i),
        }));
    }),
    r.length > 2 &&
      ((r[r.length] = '</Properties>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
var Zs = {
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
function Ax(e, r) {
  var t = [];
  return (
    at(Zs)
      .map(function (n) {
        for (var i = 0; i < zr.length; ++i) if (zr[i][1] == n) return zr[i];
        for (i = 0; i < Tn.length; ++i) if (Tn[i][1] == n) return Tn[i];
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
            t.push(nt(Zs[n[1]] || n[1], i));
        }
      }),
    Z('DocumentProperties', t.join(''), { xmlns: Nt.o })
  );
}
function yx(e, r) {
  var t = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      at(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < zr.length; ++s) if (a == zr[s][1]) return;
          for (s = 0; s < Tn.length; ++s) if (a == Tn[s][1]) return;
          for (s = 0; s < t.length; ++s) if (a == t[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(Z(Us(a), f, { 'dt:dt': l }));
        }
      }),
    r &&
      at(r).forEach(function (a) {
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
            i.push(Z(Us(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + Nt.o + '">' + i.join('') + '</' + n + '>'
  );
}
function Fx(e) {
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
function Qs(e, r) {
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
      n = Fx(r);
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
  return rt([t, n]);
}
var ul = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function Cx(e) {
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
function ef(e, r, t) {
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
    (l = rt(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(r && !r[e[f][0]]) &&
      !(ul.indexOf(e[f][0]) > -1 || ol.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var u = e[f][1],
        d = 0;
      if (r) {
        d = +r[e[f][0]];
        var p = t[d];
        if (p.p == 'version' && typeof u == 'string') {
          var x = u.split('.');
          u = (+x[0] << 16) + (+x[1] || 0);
        }
        l = Qs(p.t, u);
      } else {
        var m = Cx(u);
        m == -1 && ((m = 31), (u = String(u))), (l = Qs(m, u));
      }
      a.push(l),
        (o = H(8)),
        o.write_shift(4, r ? d : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var y = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, y), (y += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), rt([n].concat(i).concat(a))
  );
}
function tf(e, r, t, n, i, a) {
  var s = H(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Ce.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, r, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = ef(e, t, n);
  if ((f.push(l), i)) {
    var o = ef(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return rt(f);
}
function Ox(e, r) {
  r || (r = H(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function Rx(e, r) {
  return e.read_shift(r) === 1;
}
function dt(e, r) {
  return r || (r = H(2)), r.write_shift(2, +!!e), r;
}
function hl(e) {
  return e.read_shift(2, 'u');
}
function Mt(e, r) {
  return r || (r = H(2)), r.write_shift(2, e), r;
}
function xl(e, r, t) {
  return (
    t || (t = H(2)),
    t.write_shift(1, r == 'e' ? +e : +!!e),
    t.write_shift(1, r == 'e' ? 1 : 0),
    t
  );
}
function dl(e, r, t) {
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
function Nx(e) {
  var r = e.t || '',
    t = H(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var n = H(2 * r.length);
  n.write_shift(2 * r.length, r, 'utf16le');
  var i = [t, n];
  return rt(i);
}
function kx(e, r, t) {
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
function Dx(e, r, t) {
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : kx(e, n, t);
}
function Ix(e, r, t) {
  if (t.biff > 5) return Dx(e, r, t);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, t.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function pl(e, r, t) {
  return (
    t || (t = H(3 + 2 * e.length)),
    t.write_shift(2, e.length),
    t.write_shift(1, 1),
    t.write_shift(31, e, 'utf16le'),
    t
  );
}
function rf(e, r) {
  r || (r = H(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function Px(e) {
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
  if (a == 28) (n = n.slice(1)), rf(n, r);
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
    r.write_shift(2, 0), a & 8 && rf(i > -1 ? n.slice(i + 1) : '', r);
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
function Jr(e, r, t, n) {
  return (
    n || (n = H(6)),
    n.write_shift(2, e),
    n.write_shift(2, r),
    n.write_shift(2, t || 0),
    n
  );
}
function Lx(e, r, t) {
  var n = t.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function Bx(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r }, e: { c: i, r: t } };
}
function vl(e, r) {
  return (
    r || (r = H(8)),
    r.write_shift(2, e.s.r),
    r.write_shift(2, e.e.r),
    r.write_shift(2, e.s.c),
    r.write_shift(2, e.e.c),
    r
  );
}
function $0(e, r, t) {
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
function Mx(e, r) {
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
function bx(e, r) {
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
function Ux(e, r) {
  var t = H(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = Nx(e[i]);
  var a = rt([t].concat(n));
  return (
    (a.parts = [t.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function Hx() {
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
function Wx(e) {
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
function Vx(e, r) {
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
function Gx(e, r, t, n) {
  var i = H(10);
  return Jr(e, r, n, i), i.write_shift(4, t), i;
}
function jx(e, r, t, n, i) {
  var a = !i || i.biff == 8,
    s = H(8 + +a + (1 + a) * t.length);
  return (
    Jr(e, r, n, s),
    s.write_shift(2, t.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * t.length, t, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function Xx(e, r, t, n) {
  var i = t && t.biff == 5;
  n || (n = H(i ? 3 + r.length : 5 + 2 * r.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, r.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * r.length, r, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function $x(e, r) {
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
function nf(e, r, t, n) {
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
function zx(e) {
  var r = H(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Kx(e, r, t, n, i, a) {
  var s = H(8);
  return Jr(e, r, n, s), xl(t, a, s), s;
}
function Yx(e, r, t, n) {
  var i = H(14);
  return Jr(e, r, n, i), qr(t, i), i;
}
function qx(e, r, t) {
  if (t.biff < 8) return Jx(e, r, t);
  for (
    var n = [], i = e.l + r, a = e.read_shift(t.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(Lx(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function Jx(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = dl(e, r, t);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Zx(e) {
  var r = H(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) vl(e[t], r);
  return r;
}
function Qx(e) {
  var r = H(24),
    t = qe(e[0]);
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
  return rt([r, Px(e[1])]);
}
function ed(e) {
  var r = e[1].Tooltip,
    t = H(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var n = qe(e[0]);
  t.write_shift(2, n.r),
    t.write_shift(2, n.r),
    t.write_shift(2, n.c),
    t.write_shift(2, n.c);
  for (var i = 0; i < r.length; ++i) t.write_shift(2, r.charCodeAt(i));
  return t.write_shift(2, 0), t;
}
function td(e) {
  return e || (e = H(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function rd(e, r, t) {
  if (!t.cellStyles) return cr(e, r);
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
function nd(e, r) {
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
function id(e) {
  for (var r = H(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
function ad(e, r, t) {
  var n = H(15);
  return mi(n, e, r), n.write_shift(8, t, 'f'), n;
}
function sd(e, r, t) {
  var n = H(9);
  return mi(n, e, r), n.write_shift(2, t), n;
}
var fd = (function () {
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
      r = L0({
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
        c = Yr(1);
      switch (l.type) {
        case 'base64':
          c = Vt(gr(f));
          break;
        case 'binary':
          c = Vt(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      Rt(c, 0);
      var h = c.read_shift(1),
        u = !!(h & 136),
        d = !1,
        p = !1;
      switch (h) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (d = !0), (u = !0);
          break;
        case 49:
          (d = !0), (u = !0);
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
      var x = 0,
        m = 521;
      h == 2 && (x = c.read_shift(2)),
        (c.l += 3),
        h != 2 && (x = c.read_shift(4)),
        x > 1048576 && (x = 1e6),
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
        var S = [],
          N = {},
          U = Math.min(c.length, h == 2 ? 521 : m - 10 - (d ? 264 : 0)),
          J = p ? 32 : 11;
        c.l < U && c[c.l] != 13;

      )
        switch (
          ((N = {}),
          (N.name = Cs.utils
            .decode(F, c.slice(c.l, c.l + J))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += J),
          (N.type = String.fromCharCode(c.read_shift(1))),
          h != 2 && !p && (N.offset = c.read_shift(4)),
          (N.len = c.read_shift(1)),
          h == 2 && (N.offset = c.read_shift(2)),
          (N.dec = c.read_shift(1)),
          N.name.length && S.push(N),
          h != 2 && (c.l += p ? 13 : 14),
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
      var O = 0,
        b = 0;
      for (o[0] = [], b = 0; b != S.length; ++b) o[0][b] = S[b].name;
      for (; x-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += y;
          continue;
        }
        for (++c.l, o[++O] = [], b = 0, b = 0; b != S.length; ++b) {
          var I = c.slice(c.l, c.l + S[b].len);
          (c.l += S[b].len), Rt(I, 0);
          var G = Cs.utils.decode(F, I);
          switch (S[b].type) {
            case 'C':
              G.trim().length && (o[O][b] = G.replace(/\s+$/, ''));
              break;
            case 'D':
              G.length === 8
                ? (o[O][b] = new Date(
                    +G.slice(0, 4),
                    +G.slice(4, 6) - 1,
                    +G.slice(6, 8),
                  ))
                : (o[O][b] = G);
              break;
            case 'F':
              o[O][b] = parseFloat(G.trim());
              break;
            case '+':
            case 'I':
              o[O][b] = p
                ? I.read_shift(-4, 'i') ^ 2147483648
                : I.read_shift(4, 'i');
              break;
            case 'L':
              switch (G.trim().toUpperCase()) {
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
                  throw new Error('DBF Unrecognized L:|' + G + '|');
              }
              break;
            case 'M':
              if (!u)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + h.toString(16),
                );
              o[O][b] =
                '##MEMO##' + (p ? parseInt(G.trim(), 10) : I.read_shift(4));
              break;
            case 'N':
              (G = G.replace(/\u0000/g, '').trim()),
                G && G != '.' && (o[O][b] = +G || 0);
              break;
            case '@':
              o[O][b] = new Date(I.read_shift(-8, 'f') - 621356832e5);
              break;
            case 'T':
              o[O][b] = new Date(
                (I.read_shift(4) - 2440588) * 864e5 + I.read_shift(4),
              );
              break;
            case 'Y':
              o[O][b] =
                I.read_shift(4, 'i') / 1e4 +
                (I.read_shift(4, 'i') / 1e4) * Math.pow(2, 32);
              break;
            case 'O':
              o[O][b] = -I.read_shift(-8, 'f');
              break;
            case 'B':
              if (d && S[b].len == 8) {
                o[O][b] = I.read_shift(8, 'f');
                break;
              }
            case 'G':
            case 'P':
              I.l += S[b].len;
              break;
            case '0':
              if (S[b].name === '_NullFlags') break;
            default:
              throw new Error('DBF Unsupported data type ' + S[b].type);
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
      return l && l.sheetRows && (o = o.slice(0, l.sheetRows)), (l.DBF = S), o;
    }
    function n(f, l) {
      var o = l || {};
      o.dateNF || (o.dateNF = 'yyyymmdd');
      var c = Nn(t(f, o), o);
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
        return Qr(n(f, l), l);
      } catch (o) {
        if (l && l.WTF) throw o;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, '?': 0, '': 0 };
    function s(f, l) {
      var o = l || {};
      if ((+o.codepage >= 0 && ei(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = Tt(),
        h = la(f, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        d = h.slice(1),
        p = f['!cols'] || [],
        x = 0,
        m = 0,
        y = 0,
        F = 1;
      for (x = 0; x < u.length; ++x) {
        if (((p[x] || {}).DBF || {}).name) {
          (u[x] = p[x].DBF.name), ++y;
          continue;
        }
        if (u[x] != null) {
          if (
            (++y,
            typeof u[x] == 'number' && (u[x] = u[x].toString(10)),
            typeof u[x] != 'string')
          )
            throw new Error(
              'DBF Invalid column name ' + u[x] + ' |' + typeof u[x] + '|',
            );
          if (u.indexOf(u[x]) !== x) {
            for (m = 0; m < 1024; ++m)
              if (u.indexOf(u[x] + '_' + m) == -1) {
                u[x] += '_' + m;
                break;
              }
          }
        }
      }
      var S = De(f['!ref']),
        N = [],
        U = [],
        J = [];
      for (x = 0; x <= S.e.c - S.s.c; ++x) {
        var O = '',
          b = '',
          I = 0,
          G = [];
        for (m = 0; m < d.length; ++m) d[m][x] != null && G.push(d[m][x]);
        if (G.length == 0 || u[x] == null) {
          N[x] = '?';
          continue;
        }
        for (m = 0; m < G.length; ++m) {
          switch (typeof G[m]) {
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
              b = G[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              b = 'C';
          }
          (I = Math.max(I, String(G[m]).length)), (O = O && O != b ? 'C' : b);
        }
        I > 250 && (I = 250),
          (b = ((p[x] || {}).DBF || {}).type),
          b == 'C' && p[x].DBF.len > I && (I = p[x].DBF.len),
          O == 'B' &&
            b == 'N' &&
            ((O = 'N'), (J[x] = p[x].DBF.dec), (I = p[x].DBF.len)),
          (U[x] = O == 'C' || b == 'N' ? I : a[O] || 0),
          (F += U[x]),
          (N[x] = O);
      }
      var j = c.next(32);
      for (
        j.write_shift(4, 318902576),
          j.write_shift(4, d.length),
          j.write_shift(2, 296 + 32 * y),
          j.write_shift(2, F),
          x = 0;
        x < 4;
        ++x
      )
        j.write_shift(4, 0);
      for (
        j.write_shift(4, 0 | ((+r[_o] || 3) << 8)), x = 0, m = 0;
        x < u.length;
        ++x
      )
        if (u[x] != null) {
          var K = c.next(32),
            re = (u[x].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          K.write_shift(1, re, 'sbcs'),
            K.write_shift(1, N[x] == '?' ? 'C' : N[x], 'sbcs'),
            K.write_shift(4, m),
            K.write_shift(1, U[x] || a[N[x]] || 0),
            K.write_shift(1, J[x] || 0),
            K.write_shift(1, 2),
            K.write_shift(4, 0),
            K.write_shift(1, 0),
            K.write_shift(4, 0),
            K.write_shift(4, 0),
            (m += U[x] || a[N[x]] || 0);
        }
      var _e = c.next(264);
      for (_e.write_shift(4, 13), x = 0; x < 65; ++x) _e.write_shift(4, 0);
      for (x = 0; x < d.length; ++x) {
        var ue = c.next(F);
        for (ue.write_shift(1, 0), m = 0; m < u.length; ++m)
          if (u[m] != null)
            switch (N[m]) {
              case 'L':
                ue.write_shift(1, d[x][m] == null ? 63 : d[x][m] ? 84 : 70);
                break;
              case 'B':
                ue.write_shift(8, d[x][m] || 0, 'f');
                break;
              case 'N':
                var Me = '0';
                for (
                  typeof d[x][m] == 'number' &&
                    (Me = d[x][m].toFixed(J[m] || 0)),
                    y = 0;
                  y < U[m] - Me.length;
                  ++y
                )
                  ue.write_shift(1, 32);
                ue.write_shift(1, Me, 'sbcs');
                break;
              case 'D':
                d[x][m]
                  ? (ue.write_shift(
                      4,
                      ('0000' + d[x][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    ue.write_shift(
                      2,
                      ('00' + (d[x][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    ue.write_shift(
                      2,
                      ('00' + d[x][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : ue.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var Oe = String(d[x][m] != null ? d[x][m] : '').slice(0, U[m]);
                for (
                  ue.write_shift(1, Oe, 'sbcs'), y = 0;
                  y < U[m] - Oe.length;
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
  od = (function () {
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
          at(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      t = function (u, d) {
        var p = e[d];
        return typeof p == 'number' ? Fs(p) : p;
      },
      n = function (u, d, p) {
        var x = ((d.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return x == 59 ? u : Fs(x);
      };
    e['|'] = 254;
    function i(u, d) {
      switch (d.type) {
        case 'base64':
          return a(gr(u), d);
        case 'binary':
          return a(u, d);
        case 'buffer':
          return a(Te && Buffer.isBuffer(u) ? u.toString('binary') : hi(u), d);
        case 'array':
          return a(Oa(u), d);
      }
      throw new Error('Unrecognized type ' + d.type);
    }
    function a(u, d) {
      var p = u.split(/[\n\r]+/),
        x = -1,
        m = -1,
        y = 0,
        F = 0,
        S = [],
        N = [],
        U = null,
        J = {},
        O = [],
        b = [],
        I = [],
        G = 0,
        j;
      for (+d.codepage >= 0 && ei(+d.codepage); y !== p.length; ++y) {
        G = 0;
        var K = p[y]
            .trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(r, t),
          re = K.replace(/;;/g, '\0')
            .split(';')
            .map(function (C) {
              return C.replace(/\u0000/g, ';');
            }),
          _e = re[0],
          ue;
        if (K.length > 0)
          switch (_e) {
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
              re[1].charAt(0) == 'P' && N.push(K.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var Me = !1,
                Oe = !1,
                Ze = !1,
                Ve = !1,
                mt = -1,
                st = -1;
              for (F = 1; F < re.length; ++F)
                switch (re[F].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(re[F].slice(1)) - 1), (Oe = !0);
                    break;
                  case 'Y':
                    for (
                      x = parseInt(re[F].slice(1)) - 1,
                        Oe || (m = 0),
                        j = S.length;
                      j <= x;
                      ++j
                    )
                      S[j] = [];
                    break;
                  case 'K':
                    (ue = re[F].slice(1)),
                      ue.charAt(0) === '"'
                        ? (ue = ue.slice(1, ue.length - 1))
                        : ue === 'TRUE'
                          ? (ue = !0)
                          : ue === 'FALSE'
                            ? (ue = !1)
                            : isNaN(mr(ue))
                              ? isNaN(ri(ue).getDate()) || (ue = vt(ue))
                              : ((ue = mr(ue)),
                                U !== null && No(U) && (ue = Po(ue))),
                      (Me = !0);
                    break;
                  case 'E':
                    Ve = !0;
                    var A = sp(re[F].slice(1), { r: x, c: m });
                    S[x][m] = [S[x][m], A];
                    break;
                  case 'S':
                    (Ze = !0), (S[x][m] = [S[x][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    mt = parseInt(re[F].slice(1)) - 1;
                    break;
                  case 'C':
                    st = parseInt(re[F].slice(1)) - 1;
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + K);
                }
              if (
                (Me &&
                  (S[x][m] && S[x][m].length == 2
                    ? (S[x][m][0] = ue)
                    : (S[x][m] = ue),
                  (U = null)),
                Ze)
              ) {
                if (Ve)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var B = mt > -1 && S[mt][st];
                if (!B || !B[1])
                  throw new Error('SYLK shared formula cannot find base');
                S[x][m][1] = fp(B[1], { r: x - mt, c: m - st });
              }
              break;
            case 'F':
              var R = 0;
              for (F = 1; F < re.length; ++F)
                switch (re[F].charAt(0)) {
                  case 'X':
                    (m = parseInt(re[F].slice(1)) - 1), ++R;
                    break;
                  case 'Y':
                    for (
                      x = parseInt(re[F].slice(1)) - 1, j = S.length;
                      j <= x;
                      ++j
                    )
                      S[j] = [];
                    break;
                  case 'M':
                    G = parseInt(re[F].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    U = N[parseInt(re[F].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      I = re[F].slice(1).split(' '), j = parseInt(I[0], 10);
                      j <= parseInt(I[1], 10);
                      ++j
                    )
                      (G = parseInt(I[2], 10)),
                        (b[j - 1] = G === 0 ? { hidden: !0 } : { wch: G }),
                        z0(b[j - 1]);
                    break;
                  case 'C':
                    (m = parseInt(re[F].slice(1)) - 1), b[m] || (b[m] = {});
                    break;
                  case 'R':
                    (x = parseInt(re[F].slice(1)) - 1),
                      O[x] || (O[x] = {}),
                      G > 0
                        ? ((O[x].hpt = G), (O[x].hpx = Tl(G)))
                        : G === 0 && (O[x].hidden = !0);
                    break;
                  default:
                    if (d && d.WTF) throw new Error('SYLK bad record ' + K);
                }
              R < 1 && (U = null);
              break;
            default:
              if (d && d.WTF) throw new Error('SYLK bad record ' + K);
          }
      }
      return (
        O.length > 0 && (J['!rows'] = O),
        b.length > 0 && (J['!cols'] = b),
        d && d.sheetRows && (S = S.slice(0, d.sheetRows)),
        [S, J]
      );
    }
    function s(u, d) {
      var p = i(u, d),
        x = p[0],
        m = p[1],
        y = Nn(x, d);
      return (
        at(m).forEach(function (F) {
          y[F] = m[F];
        }),
        y
      );
    }
    function f(u, d) {
      return Qr(s(u, d), d);
    }
    function l(u, d, p, x) {
      var m = 'C;Y' + (p + 1) + ';X' + (x + 1) + ';K';
      switch (u.t) {
        case 'n':
          (m += u.v || 0), u.f && !u.F && (m += ';E' + Y0(u.f, { r: p, c: x }));
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
    function o(u, d) {
      d.forEach(function (p, x) {
        var m = 'F;W' + (x + 1) + ' ' + (x + 1) + ' ';
        p.hidden
          ? (m += '0')
          : (typeof p.width == 'number' && !p.wpx && (p.wpx = aa(p.width)),
            typeof p.wpx == 'number' && !p.wch && (p.wch = sa(p.wpx)),
            typeof p.wch == 'number' && (m += Math.round(p.wch))),
          m.charAt(m.length - 1) != ' ' && u.push(m);
      });
    }
    function c(u, d) {
      d.forEach(function (p, x) {
        var m = 'F;';
        p.hidden
          ? (m += 'M0;')
          : p.hpt
            ? (m += 'M' + 20 * p.hpt + ';')
            : p.hpx && (m += 'M' + 20 * fa(p.hpx) + ';'),
          m.length > 2 && u.push(m + 'R' + (x + 1));
      });
    }
    function h(u, d) {
      var p = ['ID;PWXL;N;E'],
        x = [],
        m = De(u['!ref']),
        y,
        F = Array.isArray(u),
        S = `\r
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
        for (var U = m.s.c; U <= m.e.c; ++U) {
          var J = Fe({ r: N, c: U });
          (y = F ? (u[N] || [])[U] : u[J]),
            !(!y || (y.v == null && (!y.f || y.F))) && x.push(l(y, u, N, U));
        }
      return p.join(S) + S + x.join(S) + S + 'E' + S;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: h };
  })(),
  ld = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return r(gr(a), s);
        case 'binary':
          return r(a, s);
        case 'buffer':
          return r(Te && Buffer.isBuffer(a) ? a.toString('binary') : hi(a), s);
        case 'array':
          return r(Oa(a), s);
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
            d = u[0],
            p = u[1];
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
                (h[++l] = []), (o = 0);
                continue;
              } else if (x !== 'EOD')
                throw new Error('Unrecognized DIF special command ' + x);
              break;
            case 0:
              x === 'TRUE'
                ? (h[l][o] = !0)
                : x === 'FALSE'
                  ? (h[l][o] = !1)
                  : isNaN(mr(p))
                    ? isNaN(ri(p).getDate())
                      ? (h[l][o] = p)
                      : (h[l][o] = vt(p))
                    : (h[l][o] = mr(p)),
                ++o;
              break;
            case 1:
              (x = x.slice(1, x.length - 1)),
                (x = x.replace(/""/g, '"')),
                x && x.match(/^=".*"$/) && (x = x.slice(2, -1)),
                (h[l][o++] = x !== '' ? x : null);
              break;
          }
          if (x === 'EOD') break;
        }
      }
      return s && s.sheetRows && (h = h.slice(0, s.sheetRows)), h;
    }
    function t(a, s) {
      return Nn(e(a, s), s);
    }
    function n(a, s) {
      return Qr(t(a, s), s);
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
          c = De(l['!ref']),
          h,
          u = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var d = c.s.r; d <= c.e.r; ++d) {
          s(o, -1, 0, 'BOT');
          for (var p = c.s.c; p <= c.e.c; ++p) {
            var x = Fe({ r: d, c: p });
            if (((h = u ? (l[d] || [])[p] : l[x]), !h)) {
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
                h.w || (h.w = Ir(h.z || We[14], St(vt(h.v)))),
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
  ml = (function () {
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
        var d = h.split(`
`),
          p = -1,
          x = -1,
          m = 0,
          y = [];
        m !== d.length;
        ++m
      ) {
        var F = d[m].trim().split(':');
        if (F[0] === 'cell') {
          var S = qe(F[1]);
          if (y.length <= S.r)
            for (p = y.length; p <= S.r; ++p) y[p] || (y[p] = []);
          switch (((p = S.r), (x = S.c), F[2])) {
            case 't':
              y[p][x] = e(F[3]);
              break;
            case 'v':
              y[p][x] = +F[3];
              break;
            case 'vtf':
              var N = F[F.length - 1];
            case 'vtc':
              switch (F[3]) {
                case 'nl':
                  y[p][x] = !!+F[4];
                  break;
                default:
                  y[p][x] = +F[4];
                  break;
              }
              F[2] == 'vtf' && (y[p][x] = [y[p][x], N]);
          }
        }
      }
      return u && u.sheetRows && (y = y.slice(0, u.sheetRows)), y;
    }
    function n(h, u) {
      return Nn(t(h, u), u);
    }
    function i(h, u) {
      return Qr(n(h, u), u);
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
          d = [],
          p,
          x = '',
          m = It(h['!ref']),
          y = Array.isArray(h),
          F = m.s.r;
        F <= m.e.r;
        ++F
      )
        for (var S = m.s.c; S <= m.e.c; ++S)
          if (
            ((x = Fe({ r: F, c: S })),
            (p = y ? (h[F] || [])[S] : h[x]),
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
                var N = St(vt(p.v));
                (d[2] = 'vtc'),
                  (d[3] = 'nd'),
                  (d[4] = '' + N),
                  (d[5] = p.w || Ir(p.z || We[14], N));
                break;
              case 'e':
                continue;
            }
            u.push(d.join(':'));
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
  cd = (function () {
    function e(c, h, u, d, p) {
      p.raw
        ? (h[u][d] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (h[u][d] = !0)
            : c === 'FALSE'
              ? (h[u][d] = !1)
              : isNaN(mr(c))
                ? isNaN(ri(c).getDate())
                  ? (h[u][d] = c)
                  : (h[u][d] = vt(c))
                : (h[u][d] = mr(c)));
    }
    function r(c, h) {
      var u = h || {},
        d = [];
      if (!c || c.length === 0) return d;
      for (
        var p = c.split(/[\r\n]/), x = p.length - 1;
        x >= 0 && p[x].length === 0;

      )
        --x;
      for (var m = 10, y = 0, F = 0; F <= x; ++F)
        (y = p[F].indexOf(' ')),
          y == -1 ? (y = p[F].length) : y++,
          (m = Math.max(m, y));
      for (F = 0; F <= x; ++F) {
        d[F] = [];
        var S = 0;
        for (
          e(p[F].slice(0, m).trim(), d, F, S, u), S = 1;
          S <= (p[F].length - m) / 10 + 1;
          ++S
        )
          e(p[F].slice(m + (S - 1) * 10, m + S * 10).trim(), d, F, S, u);
      }
      return u.sheetRows && (d = d.slice(0, u.sheetRows)), d;
    }
    var t = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var h = {}, u = !1, d = 0, p = 0; d < c.length; ++d)
        (p = c.charCodeAt(d)) == 34
          ? (u = !u)
          : !u && p in t && (h[p] = (h[p] || 0) + 1);
      p = [];
      for (d in h)
        Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
      if (!p.length) {
        h = n;
        for (d in h)
          Object.prototype.hasOwnProperty.call(h, d) && p.push([h[d], d]);
      }
      return (
        p.sort(function (x, m) {
          return x[0] - m[0] || n[x[1]] - n[m[1]];
        }),
        t[p.pop()[1]] || 44
      );
    }
    function a(c, h) {
      var u = h || {},
        d = '',
        p = u.dense ? [] : {},
        x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      c.slice(0, 4) == 'sep='
        ? c.charCodeAt(5) == 13 && c.charCodeAt(6) == 10
          ? ((d = c.charAt(4)), (c = c.slice(7)))
          : c.charCodeAt(5) == 13 || c.charCodeAt(5) == 10
            ? ((d = c.charAt(4)), (c = c.slice(6)))
            : (d = i(c.slice(0, 1024)))
        : u && u.FS
          ? (d = u.FS)
          : (d = i(c.slice(0, 1024)));
      var m = 0,
        y = 0,
        F = 0,
        S = 0,
        N = 0,
        U = d.charCodeAt(0),
        J = !1,
        O = 0,
        b = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var I = u.dateNF != null ? F1(u.dateNF) : null;
      function G() {
        var j = c.slice(S, N),
          K = {};
        if (
          (j.charAt(0) == '"' &&
            j.charAt(j.length - 1) == '"' &&
            (j = j.slice(1, -1).replace(/""/g, '"')),
          j.length === 0)
        )
          K.t = 'z';
        else if (u.raw) (K.t = 's'), (K.v = j);
        else if (j.trim().length === 0) (K.t = 's'), (K.v = j);
        else if (j.charCodeAt(0) == 61)
          j.charCodeAt(1) == 34 && j.charCodeAt(j.length - 1) == 34
            ? ((K.t = 's'), (K.v = j.slice(2, -1).replace(/""/g, '"')))
            : op(j)
              ? ((K.t = 'n'), (K.f = j.slice(1)))
              : ((K.t = 's'), (K.v = j));
        else if (j == 'TRUE') (K.t = 'b'), (K.v = !0);
        else if (j == 'FALSE') (K.t = 'b'), (K.v = !1);
        else if (!isNaN((F = mr(j))))
          (K.t = 'n'), u.cellText !== !1 && (K.w = j), (K.v = F);
        else if (!isNaN(ri(j).getDate()) || (I && j.match(I))) {
          K.z = u.dateNF || We[14];
          var re = 0;
          I &&
            j.match(I) &&
            ((j = C1(j, u.dateNF, j.match(I) || [])), (re = 1)),
            u.cellDates
              ? ((K.t = 'd'), (K.v = vt(j, re)))
              : ((K.t = 'n'), (K.v = St(vt(j, re)))),
            u.cellText !== !1 &&
              (K.w = Ir(K.z, K.v instanceof Date ? St(K.v) : K.v)),
            u.cellNF || delete K.z;
        } else (K.t = 's'), (K.v = j);
        if (
          (K.t == 'z' ||
            (u.dense
              ? (p[m] || (p[m] = []), (p[m][y] = K))
              : (p[Fe({ c: y, r: m })] = K)),
          (S = N + 1),
          (b = c.charCodeAt(S)),
          x.e.c < y && (x.e.c = y),
          x.e.r < m && (x.e.r = m),
          O == U)
        )
          ++y;
        else if (((y = 0), ++m, u.sheetRows && u.sheetRows <= m)) return !0;
      }
      e: for (; N < c.length; ++N)
        switch ((O = c.charCodeAt(N))) {
          case 34:
            b === 34 && (J = !J);
            break;
          case U:
          case 10:
          case 13:
            if (!J && G()) break e;
            break;
        }
      return N - S > 0 && G(), (p['!ref'] = Xe(x)), p;
    }
    function s(c, h) {
      return !(h && h.PRN) ||
        h.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, h)
        : Nn(r(c, h), h);
    }
    function f(c, h) {
      var u = '',
        d = h.type == 'string' ? [0, 0, 0, 0] : w_(c, h);
      switch (h.type) {
        case 'base64':
          u = gr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          h.codepage == 65001
            ? (u = c.toString('utf8'))
            : (h.codepage,
              (u = Te && Buffer.isBuffer(c) ? c.toString('binary') : hi(c)));
          break;
        case 'array':
          u = Oa(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + h.type);
      }
      return (
        d[0] == 239 && d[1] == 187 && d[2] == 191
          ? (u = Xn(u.slice(3)))
          : h.type != 'string' && h.type != 'buffer' && h.codepage == 65001
            ? (u = Xn(u))
            : h.type == 'binary',
        u.slice(0, 19) == 'socialcalc:version:'
          ? ml.to_sheet(h.type == 'string' ? u : Xn(u), h)
          : s(u, h)
      );
    }
    function l(c, h) {
      return Qr(f(c, h), h);
    }
    function o(c) {
      for (
        var h = [], u = De(c['!ref']), d, p = Array.isArray(c), x = u.s.r;
        x <= u.e.r;
        ++x
      ) {
        for (var m = [], y = u.s.c; y <= u.e.c; ++y) {
          var F = Fe({ r: x, c: y });
          if (((d = p ? (c[x] || [])[y] : c[F]), !d || d.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var S = (d.w || (Er(d), d.w) || '').slice(0, 10);
            S.length < 10;

          )
            S += ' ';
          m.push(S + (y === 0 ? ' ' : ''));
        }
        h.push(m.join(''));
      }
      return h.join(`
`);
    }
    return { to_workbook: l, to_sheet: f, from_sheet: o };
  })(),
  af = (function () {
    function e(A, B, R) {
      if (A) {
        Rt(A, A.l || 0);
        for (var C = R.Enum || mt; A.l < A.length; ) {
          var z = A.read_shift(2),
            se = C[z] || C[65535],
            oe = A.read_shift(2),
            ae = A.l + oe,
            V = se.f && se.f(A, oe, R);
          if (((A.l = ae), B(V, se, z))) return;
        }
      }
    }
    function r(A, B) {
      switch (B.type) {
        case 'base64':
          return t(Vt(gr(A)), B);
        case 'binary':
          return t(Vt(A), B);
        case 'buffer':
        case 'array':
          return t(A, B);
      }
      throw 'Unsupported type ' + B.type;
    }
    function t(A, B) {
      if (!A) return A;
      var R = B || {},
        C = R.dense ? [] : {},
        z = 'Sheet1',
        se = '',
        oe = 0,
        ae = {},
        V = [],
        ce = [],
        fe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        Re = R.sheetRows || 0;
      if (
        A[2] == 0 &&
        (A[3] == 8 || A[3] == 9) &&
        A.length >= 16 &&
        A[14] == 5 &&
        A[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (A[2] == 2)
        (R.Enum = mt),
          e(
            A,
            function (ee, pe, Ie) {
              switch (Ie) {
                case 0:
                  (R.vers = ee), ee >= 4096 && (R.qpro = !0);
                  break;
                case 6:
                  fe = ee;
                  break;
                case 204:
                  ee && (se = ee);
                  break;
                case 222:
                  se = ee;
                  break;
                case 15:
                case 51:
                  R.qpro || (ee[1].v = ee[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Ie == 14 &&
                    (ee[2] & 112) == 112 &&
                    (ee[2] & 15) > 1 &&
                    (ee[2] & 15) < 15 &&
                    ((ee[1].z = R.dateNF || We[14]),
                    R.cellDates && ((ee[1].t = 'd'), (ee[1].v = Po(ee[1].v)))),
                    R.qpro &&
                      ee[3] > oe &&
                      ((C['!ref'] = Xe(fe)),
                      (ae[z] = C),
                      V.push(z),
                      (C = R.dense ? [] : {}),
                      (fe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (oe = ee[3]),
                      (z = se || 'Sheet' + (oe + 1)),
                      (se = ''));
                  var be = R.dense ? (C[ee[0].r] || [])[ee[0].c] : C[Fe(ee[0])];
                  if (be) {
                    (be.t = ee[1].t),
                      (be.v = ee[1].v),
                      ee[1].z != null && (be.z = ee[1].z),
                      ee[1].f != null && (be.f = ee[1].f);
                    break;
                  }
                  R.dense
                    ? (C[ee[0].r] || (C[ee[0].r] = []),
                      (C[ee[0].r][ee[0].c] = ee[1]))
                    : (C[Fe(ee[0])] = ee[1]);
                  break;
              }
            },
            R,
          );
      else if (A[2] == 26 || A[2] == 14)
        (R.Enum = st),
          A[2] == 14 && ((R.qpro = !0), (A.l = 0)),
          e(
            A,
            function (ee, pe, Ie) {
              switch (Ie) {
                case 204:
                  z = ee;
                  break;
                case 22:
                  ee[1].v = ee[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (ee[3] > oe &&
                      ((C['!ref'] = Xe(fe)),
                      (ae[z] = C),
                      V.push(z),
                      (C = R.dense ? [] : {}),
                      (fe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (oe = ee[3]),
                      (z = 'Sheet' + (oe + 1))),
                    Re > 0 && ee[0].r >= Re)
                  )
                    break;
                  R.dense
                    ? (C[ee[0].r] || (C[ee[0].r] = []),
                      (C[ee[0].r][ee[0].c] = ee[1]))
                    : (C[Fe(ee[0])] = ee[1]),
                    fe.e.c < ee[0].c && (fe.e.c = ee[0].c),
                    fe.e.r < ee[0].r && (fe.e.r = ee[0].r);
                  break;
                case 27:
                  ee[14e3] && (ce[ee[14e3][0]] = ee[14e3][1]);
                  break;
                case 1537:
                  (ce[ee[0]] = ee[1]), ee[0] == oe && (z = ee[1]);
                  break;
              }
            },
            R,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + A[2]);
      if (
        ((C['!ref'] = Xe(fe)), (ae[se || z] = C), V.push(se || z), !ce.length)
      )
        return { SheetNames: V, Sheets: ae };
      for (var le = {}, we = [], Ee = 0; Ee < ce.length; ++Ee)
        ae[V[Ee]]
          ? (we.push(ce[Ee] || V[Ee]), (le[ce[Ee]] = ae[ce[Ee]] || ae[V[Ee]]))
          : (we.push(ce[Ee]), (le[ce[Ee]] = { '!ref': 'A1' }));
      return { SheetNames: we, Sheets: le };
    }
    function n(A, B) {
      var R = B || {};
      if ((+R.codepage >= 0 && ei(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var C = Tt(),
        z = De(A['!ref']),
        se = Array.isArray(A),
        oe = [];
      Q(C, 0, a(1030)), Q(C, 6, l(z));
      for (var ae = Math.min(z.e.r, 8191), V = z.s.r; V <= ae; ++V)
        for (var ce = it(V), fe = z.s.c; fe <= z.e.c; ++fe) {
          V === z.s.r && (oe[fe] = lt(fe));
          var Re = oe[fe] + ce,
            le = se ? (A[V] || [])[fe] : A[Re];
          if (!(!le || le.t == 'z'))
            if (le.t == 'n')
              (le.v | 0) == le.v && le.v >= -32768 && le.v <= 32767
                ? Q(C, 13, d(V, fe, le.v))
                : Q(C, 14, x(V, fe, le.v));
            else {
              var we = Er(le);
              Q(C, 15, h(V, fe, we.slice(0, 239)));
            }
        }
      return Q(C, 1), C.end();
    }
    function i(A, B) {
      var R = B || {};
      if ((+R.codepage >= 0 && ei(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var C = Tt();
      Q(C, 0, s(A));
      for (var z = 0, se = 0; z < A.SheetNames.length; ++z)
        (A.Sheets[A.SheetNames[z]] || {})['!ref'] &&
          Q(C, 27, Ve(A.SheetNames[z], se++));
      var oe = 0;
      for (z = 0; z < A.SheetNames.length; ++z) {
        var ae = A.Sheets[A.SheetNames[z]];
        if (!(!ae || !ae['!ref'])) {
          for (
            var V = De(ae['!ref']),
              ce = Array.isArray(ae),
              fe = [],
              Re = Math.min(V.e.r, 8191),
              le = V.s.r;
            le <= Re;
            ++le
          )
            for (var we = it(le), Ee = V.s.c; Ee <= V.e.c; ++Ee) {
              le === V.s.r && (fe[Ee] = lt(Ee));
              var ee = fe[Ee] + we,
                pe = ce ? (ae[le] || [])[Ee] : ae[ee];
              if (!(!pe || pe.t == 'z'))
                if (pe.t == 'n') Q(C, 23, G(le, Ee, oe, pe.v));
                else {
                  var Ie = Er(pe);
                  Q(C, 22, O(le, Ee, oe, Ie.slice(0, 239)));
                }
            }
          ++oe;
        }
      }
      return Q(C, 1), C.end();
    }
    function a(A) {
      var B = H(2);
      return B.write_shift(2, A), B;
    }
    function s(A) {
      var B = H(26);
      B.write_shift(2, 4096), B.write_shift(2, 4), B.write_shift(4, 0);
      for (var R = 0, C = 0, z = 0, se = 0; se < A.SheetNames.length; ++se) {
        var oe = A.SheetNames[se],
          ae = A.Sheets[oe];
        if (!(!ae || !ae['!ref'])) {
          ++z;
          var V = It(ae['!ref']);
          R < V.e.r && (R = V.e.r), C < V.e.c && (C = V.e.c);
        }
      }
      return (
        R > 8191 && (R = 8191),
        B.write_shift(2, R),
        B.write_shift(1, z),
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
    function f(A, B, R) {
      var C = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return B == 8 && R.qpro
        ? ((C.s.c = A.read_shift(1)),
          A.l++,
          (C.s.r = A.read_shift(2)),
          (C.e.c = A.read_shift(1)),
          A.l++,
          (C.e.r = A.read_shift(2)),
          C)
        : ((C.s.c = A.read_shift(2)),
          (C.s.r = A.read_shift(2)),
          B == 12 && R.qpro && (A.l += 2),
          (C.e.c = A.read_shift(2)),
          (C.e.r = A.read_shift(2)),
          B == 12 && R.qpro && (A.l += 2),
          C.s.c == 65535 && (C.s.c = C.e.c = C.s.r = C.e.r = 0),
          C);
    }
    function l(A) {
      var B = H(8);
      return (
        B.write_shift(2, A.s.c),
        B.write_shift(2, A.s.r),
        B.write_shift(2, A.e.c),
        B.write_shift(2, A.e.r),
        B
      );
    }
    function o(A, B, R) {
      var C = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0, 0];
      return (
        R.qpro && R.vers != 20768
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
    function c(A, B, R) {
      var C = A.l + B,
        z = o(A, B, R);
      if (((z[1].t = 's'), R.vers == 20768)) {
        A.l++;
        var se = A.read_shift(1);
        return (z[1].v = A.read_shift(se, 'utf8')), z;
      }
      return R.qpro && A.l++, (z[1].v = A.read_shift(C - A.l, 'cstr')), z;
    }
    function h(A, B, R) {
      var C = H(7 + R.length);
      C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(1, 39);
      for (var z = 0; z < C.length; ++z) {
        var se = R.charCodeAt(z);
        C.write_shift(1, se >= 128 ? 95 : se);
      }
      return C.write_shift(1, 0), C;
    }
    function u(A, B, R) {
      var C = o(A, B, R);
      return (C[1].v = A.read_shift(2, 'i')), C;
    }
    function d(A, B, R) {
      var C = H(7);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(2, R, 'i'),
        C
      );
    }
    function p(A, B, R) {
      var C = o(A, B, R);
      return (C[1].v = A.read_shift(8, 'f')), C;
    }
    function x(A, B, R) {
      var C = H(13);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, B),
        C.write_shift(2, A),
        C.write_shift(8, R, 'f'),
        C
      );
    }
    function m(A, B, R) {
      var C = A.l + B,
        z = o(A, B, R);
      if (((z[1].v = A.read_shift(8, 'f')), R.qpro)) A.l = C;
      else {
        var se = A.read_shift(2);
        N(A.slice(A.l, A.l + se), z), (A.l += se);
      }
      return z;
    }
    function y(A, B, R) {
      var C = B & 32768;
      return (
        (B &= -32769),
        (B = (C ? A : 0) + (B >= 8192 ? B - 16384 : B)),
        (C ? '' : '$') + (R ? lt(B) : it(B))
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
      S = [
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
      Rt(A, 0);
      for (
        var R = [], C = 0, z = '', se = '', oe = '', ae = '';
        A.l < A.length;

      ) {
        var V = A[A.l++];
        switch (V) {
          case 0:
            R.push(A.read_shift(8, 'f'));
            break;
          case 1:
            (se = y(B[0].c, A.read_shift(2), !0)),
              (z = y(B[0].r, A.read_shift(2), !1)),
              R.push(se + z);
            break;
          case 2:
            {
              var ce = y(B[0].c, A.read_shift(2), !0),
                fe = y(B[0].r, A.read_shift(2), !1);
              (se = y(B[0].c, A.read_shift(2), !0)),
                (z = y(B[0].r, A.read_shift(2), !1)),
                R.push(ce + fe + ':' + se + z);
            }
            break;
          case 3:
            if (A.l < A.length) {
              console.error('WK1 premature formula end');
              return;
            }
            break;
          case 4:
            R.push('(' + R.pop() + ')');
            break;
          case 5:
            R.push(A.read_shift(2));
            break;
          case 6:
            {
              for (var Re = ''; (V = A[A.l++]); ) Re += String.fromCharCode(V);
              R.push('"' + Re.replace(/"/g, '""') + '"');
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
            (ae = R.pop()),
              (oe = R.pop()),
              R.push(['AND', 'OR'][V - 20] + '(' + oe + ',' + ae + ')');
            break;
          default:
            if (V < 32 && S[V])
              (ae = R.pop()), (oe = R.pop()), R.push(oe + S[V] + ae);
            else if (F[V]) {
              if (((C = F[V][1]), C == 69 && (C = A[A.l++]), C > R.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    V.toString(16) +
                    ':|' +
                    R.join('|') +
                    '|',
                );
                return;
              }
              var le = R.slice(-C);
              (R.length -= C), R.push(F[V][0] + '(' + le.join(',') + ')');
            } else
              return V <= 7
                ? console.error('WK1 invalid opcode ' + V.toString(16))
                : V <= 24
                  ? console.error('WK1 unsupported op ' + V.toString(16))
                  : V <= 30
                    ? console.error('WK1 invalid opcode ' + V.toString(16))
                    : V <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + V.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + V.toString(16),
                        );
        }
      }
      R.length == 1
        ? (B[1].f = '' + R[0])
        : console.error('WK1 bad formula parse |' + R.join('|') + '|');
    }
    function U(A) {
      var B = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (B[0].r = A.read_shift(2)), (B[3] = A[A.l++]), (B[0].c = A[A.l++]), B
      );
    }
    function J(A, B) {
      var R = U(A);
      return (R[1].t = 's'), (R[1].v = A.read_shift(B - 4, 'cstr')), R;
    }
    function O(A, B, R, C) {
      var z = H(6 + C.length);
      z.write_shift(2, A),
        z.write_shift(1, R),
        z.write_shift(1, B),
        z.write_shift(1, 39);
      for (var se = 0; se < C.length; ++se) {
        var oe = C.charCodeAt(se);
        z.write_shift(1, oe >= 128 ? 95 : oe);
      }
      return z.write_shift(1, 0), z;
    }
    function b(A, B) {
      var R = U(A);
      R[1].v = A.read_shift(2);
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
    function I(A, B) {
      var R = U(A),
        C = A.read_shift(4),
        z = A.read_shift(4),
        se = A.read_shift(2);
      if (se == 65535)
        return (
          C === 0 && z === 3221225472
            ? ((R[1].t = 'e'), (R[1].v = 15))
            : C === 0 && z === 3489660928
              ? ((R[1].t = 'e'), (R[1].v = 42))
              : (R[1].v = 0),
          R
        );
      var oe = se & 32768;
      return (
        (se = (se & 32767) - 16446),
        (R[1].v =
          (1 - oe * 2) * (z * Math.pow(2, se + 32) + C * Math.pow(2, se))),
        R
      );
    }
    function G(A, B, R, C) {
      var z = H(14);
      if (
        (z.write_shift(2, A), z.write_shift(1, R), z.write_shift(1, B), C == 0)
      )
        return (
          z.write_shift(4, 0), z.write_shift(4, 0), z.write_shift(2, 65535), z
        );
      var se = 0,
        oe = 0,
        ae = 0,
        V = 0;
      return (
        C < 0 && ((se = 1), (C = -C)),
        (oe = Math.log2(C) | 0),
        (C /= Math.pow(2, oe - 31)),
        (V = C >>> 0),
        (V & 2147483648) == 0 && ((C /= 2), ++oe, (V = C >>> 0)),
        (C -= V),
        (V |= 2147483648),
        (V >>>= 0),
        (C *= Math.pow(2, 32)),
        (ae = C >>> 0),
        z.write_shift(4, ae),
        z.write_shift(4, V),
        (oe += 16383 + (se ? 32768 : 0)),
        z.write_shift(2, oe),
        z
      );
    }
    function j(A, B) {
      var R = I(A);
      return (A.l += B - 14), R;
    }
    function K(A, B) {
      var R = U(A),
        C = A.read_shift(4);
      return (R[1].v = C >> 6), R;
    }
    function re(A, B) {
      var R = U(A),
        C = A.read_shift(8, 'f');
      return (R[1].v = C), R;
    }
    function _e(A, B) {
      var R = re(A);
      return (A.l += B - 10), R;
    }
    function ue(A, B) {
      return A[A.l + B - 1] == 0 ? A.read_shift(B, 'cstr') : '';
    }
    function Me(A, B) {
      var R = A[A.l++];
      R > B - 1 && (R = B - 1);
      for (var C = ''; C.length < R; ) C += String.fromCharCode(A[A.l++]);
      return C;
    }
    function Oe(A, B, R) {
      if (!(!R.qpro || B < 21)) {
        var C = A.read_shift(1);
        (A.l += 17), (A.l += 1), (A.l += 2);
        var z = A.read_shift(B - 21, 'cstr');
        return [C, z];
      }
    }
    function Ze(A, B) {
      for (var R = {}, C = A.l + B; A.l < C; ) {
        var z = A.read_shift(2);
        if (z == 14e3) {
          for (R[z] = [0, ''], R[z][0] = A.read_shift(2); A[A.l]; )
            (R[z][1] += String.fromCharCode(A[A.l])), A.l++;
          A.l++;
        }
      }
      return R;
    }
    function Ve(A, B) {
      var R = H(5 + A.length);
      R.write_shift(2, 14e3), R.write_shift(2, B);
      for (var C = 0; C < A.length; ++C) {
        var z = A.charCodeAt(C);
        R[R.l++] = z > 127 ? 95 : z;
      }
      return (R[R.l++] = 0), R;
    }
    var mt = {
        0: { n: 'BOF', f: hl },
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
        222: { n: 'SHEETNAMELP', f: Me },
        65535: { n: '' },
      },
      st = {
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
        22: { n: 'LABEL16', f: J },
        23: { n: 'NUMBER17', f: I },
        24: { n: 'NUMBER18', f: b },
        25: { n: 'FORMULA19', f: j },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: Ze },
        28: { n: 'DTLABELMISC' },
        29: { n: 'DTLABELCELL' },
        30: { n: 'GRAPHWINDOW' },
        31: { n: 'CPA' },
        32: { n: 'LPLAUTO' },
        33: { n: 'QUERY' },
        34: { n: 'HIDDENSHEET' },
        35: { n: '??' },
        37: { n: 'NUMBER25', f: K },
        38: { n: '??' },
        39: { n: 'NUMBER27', f: re },
        40: { n: 'FORMULA28', f: _e },
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
    return { sheet_to_wk1: n, book_to_wk3: i, to_workbook: r };
  })(),
  ud = /^\s|\s$|[\t\n\r]/;
function _l(e, r) {
  if (!r.bookSST) return '';
  var t = [$e];
  t[t.length] = Z('sst', null, {
    xmlns: Rn[0],
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
          i.t.match(ud) && (a += ' xml:space="preserve"'),
          (a += '>' + ye(i.t) + '</t>')),
        (a += '</si>'),
        (t[t.length] = a);
    }
  return (
    t.length > 2 &&
      ((t[t.length] = '</sst>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function hd(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function xd(e, r) {
  return (
    r || (r = H(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r
  );
}
var dd = ix;
function pd(e) {
  var r = Tt();
  X(r, 159, xd(e));
  for (var t = 0; t < e.length; ++t) X(r, 19, dd(e[t]));
  return X(r, 160), r.end();
}
function vd(e) {
  for (var r = [], t = e.split(''), n = 0; n < t.length; ++n)
    r[n] = t[n].charCodeAt(0);
  return r;
}
function gl(e) {
  var r = 0,
    t,
    n = vd(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (t = Yr(i), t[0] = n.length, a = 1; a != i; ++a) t[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = t[a]),
      (f = (r & 16384) === 0 ? 0 : 1),
      (l = (r << 1) & 32767),
      (o = f | l),
      (r = o ^ s);
  return r ^ 52811;
}
var md = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return r(gr(i), a);
      case 'binary':
        return r(i, a);
      case 'buffer':
        return r(Te && Buffer.isBuffer(i) ? i.toString('binary') : hi(i), a);
      case 'array':
        return r(Oa(i), a);
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
        for (var u = /\\\w+\b/g, d = 0, p, x = -1; (p = u.exec(c)); ) {
          switch (p[0]) {
            case '\\cell':
              var m = c.slice(d, u.lastIndex - p[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++x, m.length)) {
                var y = { v: m, t: 's' };
                Array.isArray(f) ? (f[h][x] = y) : (f[Fe({ r: h, c: x })] = y);
              }
              break;
          }
          d = u.lastIndex;
        }
        x > o.e.c && (o.e.c = x);
      }),
      (f['!ref'] = Xe(o)),
      f
    );
  }
  function t(i, a) {
    return Qr(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = De(i['!ref']),
        f,
        l = Array.isArray(i),
        o = s.s.r;
      o <= s.e.r;
      ++o
    ) {
      a.push('\\trowd\\trautofit1');
      for (var c = s.s.c; c <= s.e.c; ++c) a.push('\\cellx' + (c + 1));
      for (a.push('\\pard\\intbl'), c = s.s.c; c <= s.e.c; ++c) {
        var h = Fe({ r: o, c });
        (f = l ? (i[o] || [])[c] : i[h]),
          !(!f || (f.v == null && (!f.f || f.F))) &&
            (a.push(' ' + (f.w || (Er(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: t, to_sheet: e, from_sheet: n };
})();
function sf(e) {
  for (var r = 0, t = 1; r != 3; ++r)
    t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
var _d = 6,
  _r = _d;
function aa(e) {
  return Math.floor((e + Math.round(128 / _r) / 256) * _r);
}
function sa(e) {
  return Math.floor(((e - 5) / _r) * 100 + 0.5) / 100;
}
function d0(e) {
  return Math.round(((e * _r + 5) / _r) * 256) / 256;
}
function z0(e) {
  e.width
    ? ((e.wpx = aa(e.width)), (e.wch = sa(e.wpx)), (e.MDW = _r))
    : e.wpx
      ? ((e.wch = sa(e.wpx)), (e.width = d0(e.wch)), (e.MDW = _r))
      : typeof e.wch == 'number' &&
        ((e.width = d0(e.wch)), (e.wpx = aa(e.width)), (e.MDW = _r)),
    e.customWidth && delete e.customWidth;
}
var gd = 96,
  El = gd;
function fa(e) {
  return (e * 96) / El;
}
function Tl(e) {
  return (e * El) / 96;
}
function Ed(e) {
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
          (r[r.length] = Z('numFmt', null, {
            numFmtId: n,
            formatCode: ye(e[n]),
          }));
    }),
    r.length === 1
      ? ''
      : ((r[r.length] = '</numFmts>'),
        (r[0] = Z('numFmts', null, { count: r.length - 2 }).replace('/>', '>')),
        r.join(''))
  );
}
function Td(e) {
  var r = [];
  return (
    (r[r.length] = Z('cellXfs', null)),
    e.forEach(function (t) {
      r[r.length] = Z('xf', null, t);
    }),
    (r[r.length] = '</cellXfs>'),
    r.length === 2
      ? ''
      : ((r[0] = Z('cellXfs', null, { count: r.length - 2 }).replace(
          '/>',
          '>',
        )),
        r.join(''))
  );
}
function wl(e, r) {
  var t = [$e, Z('styleSheet', null, { xmlns: Rn[0], 'xmlns:vt': Ye.vt })],
    n;
  return (
    e.SSF && (n = Ed(e.SSF)) != null && (t[t.length] = n),
    (t[t.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (t[t.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (t[t.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (t[t.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = Td(r.cellXfs)) && (t[t.length] = n),
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
function wd(e, r) {
  var t = e.read_shift(2),
    n = ct(e);
  return [t, n];
}
function Sd(e, r, t) {
  t || (t = H(6 + 4 * r.length)), t.write_shift(2, e), Je(r, t);
  var n = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), n;
}
function Ad(e, r, t) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = ux(e);
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
    (l > 0 && (n.charset = l), e.l++, (n.color = cx(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = ct(e)), n;
}
function yd(e, r) {
  r || (r = H(25 + 4 * 32)),
    r.write_shift(2, e.sz * 20),
    hx(e, r),
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
    na(e.color, r);
  var n = 0;
  return (
    (n = 2),
    r.write_shift(1, n),
    Je(e.name, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
var Fd = [
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
  za,
  Cd = cr;
function ff(e, r) {
  r || (r = H(4 * 3 + 8 * 7 + 16 * 1)), za || (za = L0(Fd));
  var t = za[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var n = 0;
  if (t != 40)
    for (na({ auto: 1 }, r), na({ auto: 1 }, r); n < 12; ++n)
      r.write_shift(4, 0);
  else {
    for (; n < 4; ++n) r.write_shift(4, 0);
    for (; n < 12; ++n) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function Od(e, r) {
  var t = e.l + r,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = t), { ixfe: n, numFmtId: i };
}
function Sl(e, r, t) {
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
function Un(e, r) {
  return (
    r || (r = H(10)),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var Rd = cr;
function Nd(e, r) {
  return (
    r || (r = H(51)),
    r.write_shift(1, 0),
    Un(null, r),
    Un(null, r),
    Un(null, r),
    Un(null, r),
    Un(null, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function kd(e, r) {
  return (
    r || (r = H(12 + 4 * 10)),
    r.write_shift(4, e.xfId),
    r.write_shift(2, 1),
    r.write_shift(1, 0),
    r.write_shift(1, 0),
    ra(e.name || '', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function Dd(e, r, t) {
  var n = H(2052);
  return (
    n.write_shift(4, e),
    ra(r, n),
    ra(t, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function Id(e, r) {
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
        (X(e, 615, jt(t)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            r[i] != null && X(e, 44, Sd(i, r[i]));
        }),
        X(e, 616));
  }
}
function Pd(e) {
  var r = 1;
  X(e, 611, jt(r)),
    X(e, 43, yd({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    X(e, 612);
}
function Ld(e) {
  var r = 2;
  X(e, 603, jt(r)),
    X(e, 45, ff({ patternType: 'none' })),
    X(e, 45, ff({ patternType: 'gray125' })),
    X(e, 604);
}
function Bd(e) {
  var r = 1;
  X(e, 613, jt(r)), X(e, 46, Nd()), X(e, 614);
}
function Md(e) {
  var r = 1;
  X(e, 626, jt(r)), X(e, 47, Sl({ numFmtId: 0 }, 65535)), X(e, 627);
}
function bd(e, r) {
  X(e, 617, jt(r.length)),
    r.forEach(function (t) {
      X(e, 47, Sl(t, 0));
    }),
    X(e, 618);
}
function Ud(e) {
  var r = 1;
  X(e, 619, jt(r)), X(e, 48, kd({ xfId: 0, name: 'Normal' })), X(e, 620);
}
function Hd(e) {
  var r = 0;
  X(e, 505, jt(r)), X(e, 506);
}
function Wd(e) {
  var r = 0;
  X(e, 508, Dd(r, 'TableStyleMedium9', 'PivotStyleMedium4')), X(e, 509);
}
function Vd(e, r) {
  var t = Tt();
  return (
    X(t, 278),
    Id(t, e.SSF),
    Pd(t),
    Ld(t),
    Bd(t),
    Md(t),
    bd(t, r.cellXfs),
    Ud(t),
    Hd(t),
    Wd(t),
    X(t, 279),
    t.end()
  );
}
function Al(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var t = [$e];
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
function Gd(e, r) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: ct(e) };
}
function jd(e) {
  var r = H(12 + 2 * e.name.length);
  return (
    r.write_shift(4, e.flags),
    r.write_shift(4, e.version),
    Je(e.name, r),
    r.slice(0, r.l)
  );
}
function Xd(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; )
    r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function $d(e) {
  var r = H(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t)
    r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function zd(e, r) {
  var t = H(8 + 2 * r.length);
  return t.write_shift(4, e), Je(r, t), t.slice(0, t.l);
}
function Kd(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function Yd(e, r) {
  var t = H(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function qd() {
  var e = Tt();
  return (
    X(e, 332),
    X(e, 334, jt(1)),
    X(e, 335, jd({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    X(e, 336),
    X(e, 339, zd(1, 'XLDAPR')),
    X(e, 52),
    X(e, 35, jt(514)),
    X(e, 4096, jt(0)),
    X(e, 4097, Mt(1)),
    X(e, 36),
    X(e, 53),
    X(e, 340),
    X(e, 337, Yd(1)),
    X(e, 51, $d([[1, 0]])),
    X(e, 338),
    X(e, 333),
    e.end()
  );
}
function yl() {
  var e = [$e];
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
function Jd(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  (t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (r.r = Fe(t));
  var n = e.read_shift(1);
  return n & 2 && (r.l = '1'), n & 8 && (r.a = '1'), r;
}
var _n = 1024;
function Fl(e, r) {
  for (
    var t = [21600, 21600],
      n = ['m0,0l0', t[1], t[0], t[1], t[0], '0xe'].join(','),
      i = [
        Z('xml', null, {
          'xmlns:v': Nt.v,
          'xmlns:o': Nt.o,
          'xmlns:x': Nt.x,
          'xmlns:mv': Nt.mv,
        }).replace(/\/>/, '>'),
        Z('o:shapelayout', Z('o:idmap', null, { 'v:ext': 'edit', data: e }), {
          'v:ext': 'edit',
        }),
        Z(
          'v:shapetype',
          [
            Z('v:stroke', null, { joinstyle: 'miter' }),
            Z('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: t.join(','), path: n },
        ),
      ];
    _n < e * 1e3;

  )
    _n += 1e3;
  return (
    r.forEach(function (a) {
      var s = qe(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? Z('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = Z('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++_n,
        (i = i.concat([
          '<v:shape' +
            ii({
              id: '_x0000_s' + _n,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (a[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          o,
          Z('v:shadow', null, c),
          Z('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          nt(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          nt('x:AutoFill', 'False'),
          nt('x:Row', String(s.r)),
          nt('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function Cl(e) {
  var r = [$e, Z('comments', null, { xmlns: Rn[0] })],
    t = [];
  return (
    r.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = ye(i.a);
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
              l.a && (i = t.indexOf(ye(l.a))), a.push(l.t || '');
            }),
        r.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        r.push(nt('t', ye(a[0] || '')));
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
        r.push(nt('t', ye(s)));
      }
      r.push('</text></comment>');
    }),
    r.push('</commentList>'),
    r.length > 2 &&
      ((r[r.length] = '</comments>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Zd(e, r, t) {
  var n = [
    $e,
    Z('ThreadedComments', null, { xmlns: Ye.TCMNT }).replace(/[\/]>/, '>'),
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
          n.push(Z('threadedComment', nt('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function Qd(e) {
  var r = [
    $e,
    Z('personList', null, { xmlns: Ye.TCMNT, 'xmlns:x': Rn[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    e.forEach(function (t, n) {
      r.push(
        Z('person', null, {
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
  var t = nn(e);
  return (r.rfx = t.s), (r.ref = Fe(t.s)), (e.l += 16), r;
}
function tp(e, r) {
  return (
    r == null && (r = H(36)),
    r.write_shift(4, e[1].iauthor),
    kn(e[0], r),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r
  );
}
var rp = ct;
function np(e) {
  return Je(e.slice(0, 54));
}
function ip(e) {
  var r = Tt(),
    t = [];
  return (
    X(r, 628),
    X(r, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        t.indexOf(i.a) > -1 || (t.push(i.a.slice(0, 54)), X(r, 632, np(i.a)));
      });
    }),
    X(r, 631),
    X(r, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = t.indexOf(i.a);
        var a = { s: qe(n[0]), e: qe(n[0]) };
        X(r, 635, tp([a, i])),
          i.t && i.t.length > 0 && X(r, 637, sx(i)),
          X(r, 636),
          delete i.iauthor;
      });
    }),
    X(r, 634),
    X(r, 629),
    r.end()
  );
}
function ap(e, r) {
  r.FullPaths.forEach(function (t, n) {
    if (n != 0) {
      var i = t.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Ce.utils.cfb_add(e, i, r.FileIndex[n].content);
    }
  });
}
var Ol = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
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
        i + (f ? '' : '$') + lt(c) + (l ? '' : '$') + it(o)
      );
    }
    return function (i, a) {
      return (r = a), i.replace(e, t);
    };
  })(),
  K0 =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  Y0 = (function () {
    return function (r, t) {
      return r.replace(K0, function (n, i, a, s, f, l) {
        var o = V0(s) - (a ? 0 : t.c),
          c = W0(l) - (f ? 0 : t.r),
          h = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          u = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + h + 'C' + u;
      });
    };
  })();
function fp(e, r) {
  return e.replace(K0, function (t, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : lt(V0(a) + r.c)) +
      (s == '$' ? s + f : it(W0(f) + r.r))
    );
  });
}
function op(e) {
  return e.length != 1;
}
function je(e) {
  e.l += 1;
}
function Pr(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
}
function Rl(e, r, t) {
  var n = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return Nl(e);
    t.biff == 12 && (n = 4);
  }
  var i = e.read_shift(n),
    a = e.read_shift(n),
    s = Pr(e),
    f = Pr(e);
  return {
    s: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: a, c: f[0], cRel: f[1], rRel: f[2] },
  };
}
function Nl(e) {
  var r = Pr(e),
    t = Pr(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: r[0], c: n, cRel: r[1], rRel: r[2] },
    e: { r: t[0], c: i, cRel: t[1], rRel: t[2] },
  };
}
function lp(e, r, t) {
  if (t.biff < 8) return Nl(e);
  var n = e.read_shift(t.biff == 12 ? 4 : 2),
    i = e.read_shift(t.biff == 12 ? 4 : 2),
    a = Pr(e),
    s = Pr(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function kl(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return cp(e);
  var n = e.read_shift(t && t.biff == 12 ? 4 : 2),
    i = Pr(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function cp(e) {
  var r = Pr(e),
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
  if (n >= 2 && n <= 5) return xp(e);
  var i = e.read_shift(n >= 12 ? 4 : 2),
    a = e.read_shift(2),
    s = (a & 16384) >> 14,
    f = (a & 32768) >> 15;
  if (((a &= 16383), f == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: f };
}
function xp(e) {
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
function dp(e, r, t) {
  var n = (e[e.l++] & 96) >> 5,
    i = Rl(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
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
  var s = Rl(e, a, t);
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
function of(e) {
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
function Dl(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1);
  return [r, t];
}
function yp(e) {
  return e.read_shift(2), Dl(e);
}
function Fp(e) {
  return e.read_shift(2), Dl(e);
}
function Cp(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = kl(e, 0, t);
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
  var a = kl(e, 0, t);
  return [n, i, a];
}
function Np(e, r, t) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [Nv[i], Ll[i], n];
}
function kp(e, r, t) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = t && t.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Dp(e);
  return [i, (a[0] === 0 ? Ll : Rv)[a[1]]];
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
  return e.l++, pi[e.read_shift(1)];
}
function Bp(e) {
  return e.l++, e.read_shift(2);
}
function Mp(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function bp(e) {
  return e.l++, Dn(e);
}
function Up(e, r, t) {
  return e.l++, dl(e, r - 1, t);
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
      (t[1] = Rx(e, 1) ? 'TRUE' : 'FALSE'), r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (t[1] = pi[e[e.l]]), (e.l += r == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Dn(e);
      break;
    case 2:
      t[1] = Ix(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error('Bad SerAr: ' + t[0]);
  }
  return t;
}
function Wp(e, r, t) {
  for (var n = e.read_shift(t.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((t.biff == 12 ? nn : Bx)(e));
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
function jp(e, r, t) {
  if (t.biff == 5) return Xp(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function Xp(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [r, t, n];
}
function $p(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function zp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [n, i];
}
function Kp(e, r, t) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [n];
}
function Yp(e, r, t) {
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
var qp = cr,
  Jp = cr,
  Zp = cr;
function vi(e, r, t) {
  return (e.l += 2), [up(e)];
}
function q0(e) {
  return (e.l += 6), [];
}
var Qp = vi,
  ev = q0,
  tv = q0,
  rv = vi;
function Il(e) {
  return (e.l += 2), [hl(e), e.read_shift(2) & 1];
}
var nv = vi,
  iv = Il,
  av = q0,
  sv = vi,
  fv = vi,
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
function xv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function dv(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function pv(e) {
  return (e.l += 4), [0, 0];
}
var lf = {
    1: { n: 'PtgExp', f: Pp },
    2: { n: 'PtgTbl', f: Zp },
    3: { n: 'PtgAdd', f: je },
    4: { n: 'PtgSub', f: je },
    5: { n: 'PtgMul', f: je },
    6: { n: 'PtgDiv', f: je },
    7: { n: 'PtgPower', f: je },
    8: { n: 'PtgConcat', f: je },
    9: { n: 'PtgLt', f: je },
    10: { n: 'PtgLe', f: je },
    11: { n: 'PtgEq', f: je },
    12: { n: 'PtgGe', f: je },
    13: { n: 'PtgGt', f: je },
    14: { n: 'PtgNe', f: je },
    15: { n: 'PtgIsect', f: je },
    16: { n: 'PtgUnion', f: je },
    17: { n: 'PtgRange', f: je },
    18: { n: 'PtgUplus', f: je },
    19: { n: 'PtgUminus', f: je },
    20: { n: 'PtgPercent', f: je },
    21: { n: 'PtgParen', f: je },
    22: { n: 'PtgMissArg', f: je },
    23: { n: 'PtgStr', f: Up },
    26: { n: 'PtgSheet', f: uv },
    27: { n: 'PtgEndSheet', f: hv },
    28: { n: 'PtgErr', f: Lp },
    29: { n: 'PtgBool', f: Mp },
    30: { n: 'PtgInt', f: Bp },
    31: { n: 'PtgNum', f: bp },
    32: { n: 'PtgArray', f: gp },
    33: { n: 'PtgFunc', f: Np },
    34: { n: 'PtgFuncVar', f: kp },
    35: { n: 'PtgName', f: Gp },
    36: { n: 'PtgRef', f: Cp },
    37: { n: 'PtgArea', f: dp },
    38: { n: 'PtgMemArea', f: $p },
    39: { n: 'PtgMemErr', f: qp },
    40: { n: 'PtgMemNoMem', f: Jp },
    41: { n: 'PtgMemFunc', f: zp },
    42: { n: 'PtgRefErr', f: Kp },
    43: { n: 'PtgAreaErr', f: vp },
    44: { n: 'PtgRefN', f: Op },
    45: { n: 'PtgAreaN', f: _p },
    46: { n: 'PtgMemAreaN', f: xv },
    47: { n: 'PtgMemNoMemN', f: dv },
    57: { n: 'PtgNameX', f: jp },
    58: { n: 'PtgRef3d', f: Rp },
    59: { n: 'PtgArea3d', f: pp },
    60: { n: 'PtgRefErr3d', f: Yp },
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
    1: { n: 'PtgElfLel', f: Il },
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
    32: { n: 'PtgAttrBaxcel', f: of },
    33: { n: 'PtgAttrBaxcel', f: of },
    64: { n: 'PtgAttrSpace', f: yp },
    65: { n: 'PtgAttrSpaceSemi', f: Fp },
    128: { n: 'PtgAttrIfError', f: Sp },
    255: {},
  };
function gv(e, r, t, n) {
  if (n.biff < 8) return cr(e, r);
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
  return (r = i - e.l), r !== 0 && a.push(cr(e, r)), a;
}
function Ev(e, r, t) {
  for (var n = e.l + r, i, a, s = []; n != e.l; )
    (r = n - e.l),
      (a = e[e.l]),
      (i = lf[a] || lf[vv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? mv : _v)[e[e.l + 1]]),
      !i || !i.f ? cr(e, r) : s.push([i.n, i.f(e, r, t)]);
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
function Pl(e, r, t) {
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
function cf(e, r, t) {
  var n = Pl(e, r, t);
  return n == '#REF' ? n : Sv(n, t);
}
function Sn(e, r, t, n, i) {
  var a = (i && i.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    f = [],
    l,
    o,
    c,
    h = 0,
    u = 0,
    d,
    p = '';
  if (!e[0] || !e[0][0]) return '';
  for (var x = -1, m = '', y = 0, F = e[0].length; y < F; ++y) {
    var S = e[0][y];
    switch (S[0]) {
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
              m = He(' ', e[0][x][1][1]);
              break;
            case 1:
              m = He('\r', e[0][x][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          (o = o + m), (x = -1);
        }
        f.push(o + wv[S[0]] + l);
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
        (c = zn(S[1][1], s, i)), f.push(Kn(c, a));
        break;
      case 'PtgRefN':
        (c = t ? zn(S[1][1], t, i) : S[1][1]), f.push(Kn(c, a));
        break;
      case 'PtgRef3d':
        (h = S[1][1]),
          (c = zn(S[1][2], s, i)),
          (p = cf(n, h, i)),
          f.push(p + '!' + Kn(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var N = S[1][0],
          U = S[1][1];
        N || (N = 0), (N &= 127);
        var J = N == 0 ? [] : f.slice(-N);
        (f.length -= N),
          U === 'User' && (U = J.shift()),
          f.push(U + '(' + J.join(',') + ')');
        break;
      case 'PtgBool':
        f.push(S[1] ? 'TRUE' : 'FALSE');
        break;
      case 'PtgInt':
        f.push(S[1]);
        break;
      case 'PtgNum':
        f.push(String(S[1]));
        break;
      case 'PtgStr':
        f.push('"' + S[1].replace(/"/g, '""') + '"');
        break;
      case 'PtgErr':
        f.push(S[1]);
        break;
      case 'PtgAreaN':
        (d = zs(S[1][1], t ? { s: t } : s, i)), f.push(Xa(d, i));
        break;
      case 'PtgArea':
        (d = zs(S[1][1], s, i)), f.push(Xa(d, i));
        break;
      case 'PtgArea3d':
        (h = S[1][1]),
          (d = S[1][2]),
          (p = cf(n, h, i)),
          f.push(p + '!' + Xa(d, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = S[1][2];
        var O = (n.names || [])[u - 1] || (n[0] || [])[u],
          b = O ? O.Name : 'SH33TJSNAME' + String(u);
        b && b.slice(0, 6) == '_xlfn.' && !i.xlfn && (b = b.slice(6)),
          f.push(b);
        break;
      case 'PtgNameX':
        var I = S[1][1];
        u = S[1][2];
        var G;
        if (i.biff <= 5) I < 0 && (I = -I), n[I] && (G = n[I][u]);
        else {
          var j = '';
          if (
            (((n[I] || [])[0] || [])[0] == 14849 ||
              (((n[I] || [])[0] || [])[0] == 1025
                ? n[I][u] &&
                  n[I][u].itab > 0 &&
                  (j = n.SheetNames[n[I][u].itab - 1] + '!')
                : (j = n.SheetNames[u - 1] + '!')),
            n[I] && n[I][u])
          )
            j += n[I][u].Name;
          else if (n[0] && n[0][u]) j += n[0][u].Name;
          else {
            var K = (Pl(n, I, i) || '').split(';;');
            K[u - 1] ? (j = K[u - 1]) : (j += 'SH33TJSERRX');
          }
          f.push(j);
          break;
        }
        G || (G = { Name: 'SH33TJSERRY' }), f.push(G.Name);
        break;
      case 'PtgParen':
        var re = '(',
          _e = ')';
        if (x >= 0) {
          switch (((m = ''), e[0][x][1][0])) {
            case 2:
              re = He(' ', e[0][x][1][1]) + re;
              break;
            case 3:
              re = He('\r', e[0][x][1][1]) + re;
              break;
            case 4:
              _e = He(' ', e[0][x][1][1]) + _e;
              break;
            case 5:
              _e = He('\r', e[0][x][1][1]) + _e;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][x][1][0]);
          }
          x = -1;
        }
        f.push(re + f.pop() + _e);
        break;
      case 'PtgRefErr':
        f.push('#REF!');
        break;
      case 'PtgRefErr3d':
        f.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: S[1][1], r: S[1][0] };
        var ue = { c: t.c, r: t.r };
        if (n.sharedf[Fe(c)]) {
          var Me = n.sharedf[Fe(c)];
          f.push(Sn(Me, s, ue, n, i));
        } else {
          var Oe = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(Sn(o[1], s, ue, n, i)), (Oe = !0);
              break;
            }
          Oe || f.push(S[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + Tv(S[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        x = y;
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
        f.push('Table' + S[1].idx + '[#' + S[1].rt + ']');
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
        throw new Error('Unrecognized Formula Token: ' + String(S));
      default:
        throw new Error('Unrecognized Formula Token: ' + String(S));
    }
    var Ze = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && x >= 0 && Ze.indexOf(e[0][y][0]) == -1) {
      S = e[0][x];
      var Ve = !0;
      switch (S[1][0]) {
        case 4:
          Ve = !1;
        case 0:
          m = He(' ', S[1][1]);
          break;
        case 5:
          Ve = !1;
        case 1:
          m = He('\r', S[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + S[1][0]);
      }
      f.push((Ve ? m : '') + f.pop() + (Ve ? '' : m)), (x = -1);
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
  } else if (typeof e == 'number') return qr(e);
  return qr(0);
}
function yv(e, r, t, n, i) {
  var a = Jr(r, t, i),
    s = Av(e.v),
    f = H(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = H(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var h = rt([a, s, f, o]);
  return h;
}
function Ra(e, r, t) {
  var n = e.read_shift(4),
    i = Ev(e, n, t),
    a = e.read_shift(4),
    s = a > 0 ? gv(e, a, i, t) : null;
  return [i, s];
}
var Fv = Ra,
  Na = Ra,
  Cv = Ra,
  Ov = Ra,
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
  Ll = {
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
  var r = 'of:=' + e.replace(K0, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return r.replace(/;/g, '|').replace(/,/g, ';');
}
function Dv(e) {
  return e.replace(/\./, '!');
}
var Yn = typeof Map < 'u';
function J0(e, r, t) {
  var n = 0,
    i = e.length;
  if (t) {
    if (Yn ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var a = Yn ? t.get(r) : t[r]; n < a.length; ++n)
        if (e[a[n]].t === r) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === r) return e.Count++, n;
  return (
    (e[i] = { t: r }),
    e.Count++,
    e.Unique++,
    t &&
      (Yn
        ? (t.has(r) || t.set(r, []), t.get(r).push(i))
        : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []),
          t[r].push(i))),
    i
  );
}
function ka(e, r) {
  var t = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    r.MDW && (_r = r.MDW),
    r.width != null
      ? (t.customWidth = 1)
      : r.wpx != null
        ? (n = sa(r.wpx))
        : r.wch != null && (n = r.wch),
    n > -1
      ? ((t.width = d0(n)), (t.customWidth = 1))
      : r.width != null && (t.width = r.width),
    r.hidden && (t.hidden = !0),
    r.level != null && (t.outlineLevel = t.level = r.level),
    t
  );
}
function Bl(e, r) {
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
function Br(e, r, t) {
  var n = t.revssf[r.z != null ? r.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && t.ssf) {
    for (; i < 392; ++i)
      if (t.ssf[i] == null) {
        ko(r.z, i), (t.ssf[i] = r.z), (t.revssf[r.z] = n = i);
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
    var n = De(e['!ref']);
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
    r += '<mergeCell ref="' + Xe(e[t]) + '"/>';
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
    (a = !0), (s.codeName = ni(ye(l)));
  }
  if (e && e['!outline']) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e['!outline'].above && (o.summaryBelow = 0),
      e['!outline'].left && (o.summaryRight = 0),
      (f = (f || '') + Z('outlinePr', null, o));
  }
  (!a && !f) || (i[i.length] = Z('sheetPr', f, s));
}
var Bv = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  Mv = [
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
    Bv.forEach(function (t) {
      e[t] != null && e[t] && (r[t] = '1');
    }),
    Mv.forEach(function (t) {
      e[t] != null && !e[t] && (r[t] = '0');
    }),
    e.password && (r.password = gl(e.password).toString(16).toUpperCase()),
    Z('sheetProtection', null, r)
  );
}
function Uv(e) {
  return Bl(e), Z('pageMargins', null, e);
}
function Hv(e, r) {
  for (var t = ['<cols>'], n, i = 0; i != r.length; ++i)
    (n = r[i]) && (t[t.length] = Z('col', null, ka(i, n)));
  return (t[t.length] = '</cols>'), t.join('');
}
function Wv(e, r, t, n) {
  var i = typeof e.ref == 'string' ? e.ref : Xe(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }),
    t.Workbook.Names || (t.Workbook.Names = []);
  var a = t.Workbook.Names,
    s = It(i);
  s.s.r == s.e.r && ((s.e.r = It(r['!ref']).e.r), (i = Xe(s)));
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
    Z('autoFilter', null, { ref: i })
  );
}
function Vv(e, r, t, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    Z('sheetViews', Z('sheetView', null, i), {})
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
        i = pi[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = vt(e.v, -1).toISOString())
          : ((e = At(e)), (e.t = 'n'), (i = '' + (e.v = St(vt(e.v))))),
          typeof e.z > 'u' && (e.z = We[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = nt('v', ye(i)),
    l = { r },
    o = Br(n.cellXfs, e, n);
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
        (f = nt('v', '' + J0(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, r.length) == r ? { t: 'array', ref: e.F } : null;
    f = Z('f', ye(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && t['!links'].push([r, e.l]), e.D && (l.cm = 1), Z('c', f, l);
}
function jv(e, r, t, n) {
  var i = [],
    a = [],
    s = De(e['!ref']),
    f = '',
    l,
    o = '',
    c = [],
    h = 0,
    u = 0,
    d = e['!rows'],
    p = Array.isArray(e),
    x = { r: o },
    m,
    y = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = lt(u);
  for (h = s.s.r; h <= s.e.r; ++h) {
    for (a = [], o = it(h), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + o;
      var F = p ? (e[h] || [])[u] : e[l];
      F !== void 0 && (f = Gv(F, l, e, r)) != null && a.push(f);
    }
    (a.length > 0 || (d && d[h])) &&
      ((x = { r: o }),
      d &&
        d[h] &&
        ((m = d[h]),
        m.hidden && (x.hidden = 1),
        (y = -1),
        m.hpx ? (y = fa(m.hpx)) : m.hpt && (y = m.hpt),
        y > -1 && ((x.ht = y), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level)),
      (i[i.length] = Z('row', a.join(''), x)));
  }
  if (d)
    for (; h < d.length; ++h)
      d &&
        d[h] &&
        ((x = { r: h + 1 }),
        (m = d[h]),
        m.hidden && (x.hidden = 1),
        (y = -1),
        m.hpx ? (y = fa(m.hpx)) : m.hpt && (y = m.hpt),
        y > -1 && ((x.ht = y), (x.customHeight = 1)),
        m.level && (x.outlineLevel = m.level),
        (i[i.length] = Z('row', '', x)));
  return i.join('');
}
function Ml(e, r, t, n) {
  var i = [$e, Z('worksheet', null, { xmlns: Rn[0], 'xmlns:r': Ye.r })],
    a = t.SheetNames[e],
    s = 0,
    f = '',
    l = t.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = De(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = Xe(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var h = [];
  Lv(l, t, e, r, i),
    (i[i.length] = Z('dimension', null, { ref: o })),
    (i[i.length] = Vv(l, r, e, t)),
    r.sheetFormat &&
      (i[i.length] = Z('sheetFormatPr', null, {
        defaultRowHeight: r.sheetFormat.defaultRowHeight || '16',
        baseColWidth: r.sheetFormat.baseColWidth || '10',
        outlineLevelRow: r.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = Hv(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = jv(l, r)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = bv(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = Wv(l['!autofilter'], l, t, e)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = Pv(l['!merges']));
  var u = -1,
    d,
    p = -1;
  return (
    l['!links'].length > 0 &&
      ((i[i.length] = '<hyperlinks>'),
      l['!links'].forEach(function (x) {
        x[1].Target &&
          ((d = { ref: x[0] }),
          x[1].Target.charAt(0) != '#' &&
            ((p = Ae(n, -1, ye(x[1].Target).replace(/#.*$/, ''), ge.HLINK)),
            (d['r:id'] = 'rId' + p)),
          (u = x[1].Target.indexOf('#')) > -1 &&
            (d.location = ye(x[1].Target.slice(u + 1))),
          x[1].Tooltip && (d.tooltip = ye(x[1].Tooltip)),
          (i[i.length] = Z('hyperlink', null, d)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = Uv(l['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) &&
      (i[i.length] = nt(
        'ignoredErrors',
        Z('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    h.length > 0 &&
      ((p = Ae(n, -1, '../drawings/drawing' + (e + 1) + '.xml', ge.DRAW)),
      (i[i.length] = Z('drawing', null, { 'r:id': 'rId' + p })),
      (l['!drawing'] = h)),
    l['!comments'].length > 0 &&
      ((p = Ae(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', ge.VML)),
      (i[i.length] = Z('legacyDrawing', null, { 'r:id': 'rId' + p })),
      (l['!legacy'] = p)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function Xv(e, r) {
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
function $v(e, r, t) {
  var n = H(145),
    i = (t['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = fa(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
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
      for (var h = -1, u = -1, d = c << 10; d < (c + 1) << 10; ++d) {
        o.c = d;
        var p = Array.isArray(t) ? (t[o.r] || [])[o.c] : t[Fe(o)];
        p && (h < 0 && (h = d), (u = d));
      }
      h < 0 || (++f, n.write_shift(4, h), n.write_shift(4, u));
    }
  var x = n.l;
  return (
    (n.l = l),
    n.write_shift(4, f),
    (n.l = x),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function zv(e, r, t, n) {
  var i = $v(n, t, r);
  (i.length > 17 || (r['!rows'] || [])[n]) && X(e, 0, i);
}
var Kv = nn,
  Yv = kn;
function qv() {}
function Jv(e, r) {
  var t = {},
    n = e[e.l];
  return (
    ++e.l,
    (t.above = !(n & 64)),
    (t.left = !(n & 128)),
    (e.l += 18),
    (t.name = fx(e)),
    t
  );
}
function Zv(e, r, t) {
  t == null && (t = H(84 + 4 * e.length));
  var n = 192;
  r && (r.above && (n &= -65), r.left && (n &= -129)), t.write_shift(1, n);
  for (var i = 1; i < 3; ++i) t.write_shift(1, 0);
  return (
    na({ auto: 1 }, t),
    t.write_shift(-4, -1),
    t.write_shift(-4, -1),
    Zo(e, t),
    t.slice(0, t.l)
  );
}
function Qv(e) {
  var r = bt(e);
  return [r];
}
function e2(e, r, t) {
  return t == null && (t = H(8)), en(r, t);
}
function t2(e) {
  var r = tn(e);
  return [r];
}
function r2(e, r, t) {
  return t == null && (t = H(4)), rn(r, t);
}
function n2(e) {
  var r = bt(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function i2(e, r, t) {
  return t == null && (t = H(9)), en(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function a2(e) {
  var r = tn(e),
    t = e.read_shift(1);
  return [r, t, 'b'];
}
function s2(e, r, t) {
  return t == null && (t = H(5)), rn(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function f2(e) {
  var r = bt(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function o2(e, r, t) {
  return t == null && (t = H(9)), en(r, t), t.write_shift(1, e.v), t;
}
function l2(e) {
  var r = tn(e),
    t = e.read_shift(1);
  return [r, t, 'e'];
}
function c2(e, r, t) {
  return (
    t == null && (t = H(8)),
    rn(r, t),
    t.write_shift(1, e.v),
    t.write_shift(2, 0),
    t.write_shift(1, 0),
    t
  );
}
function u2(e) {
  var r = bt(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function h2(e, r, t) {
  return t == null && (t = H(12)), en(r, t), t.write_shift(4, r.v), t;
}
function x2(e) {
  var r = tn(e),
    t = e.read_shift(4);
  return [r, t, 's'];
}
function d2(e, r, t) {
  return t == null && (t = H(8)), rn(r, t), t.write_shift(4, r.v), t;
}
function p2(e) {
  var r = bt(e),
    t = Dn(e);
  return [r, t, 'n'];
}
function v2(e, r, t) {
  return t == null && (t = H(16)), en(r, t), qr(e.v, t), t;
}
function m2(e) {
  var r = tn(e),
    t = Dn(e);
  return [r, t, 'n'];
}
function _2(e, r, t) {
  return t == null && (t = H(12)), rn(r, t), qr(e.v, t), t;
}
function g2(e) {
  var r = bt(e),
    t = Qo(e);
  return [r, t, 'n'];
}
function E2(e, r, t) {
  return t == null && (t = H(12)), en(r, t), el(e.v, t), t;
}
function T2(e) {
  var r = tn(e),
    t = Qo(e);
  return [r, t, 'n'];
}
function w2(e, r, t) {
  return t == null && (t = H(8)), rn(r, t), el(e.v, t), t;
}
function S2(e) {
  var r = bt(e),
    t = G0(e);
  return [r, t, 'is'];
}
function A2(e) {
  var r = bt(e),
    t = ct(e);
  return [r, t, 'str'];
}
function y2(e, r, t) {
  return (
    t == null && (t = H(12 + 4 * e.v.length)),
    en(r, t),
    Je(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function F2(e) {
  var r = tn(e),
    t = ct(e);
  return [r, t, 'str'];
}
function C2(e, r, t) {
  return (
    t == null && (t = H(8 + 4 * e.v.length)),
    rn(r, t),
    Je(e.v, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function O2(e, r, t) {
  var n = e.l + r,
    i = bt(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Na(e, n - e.l, t);
    s[3] = Sn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function R2(e, r, t) {
  var n = e.l + r,
    i = bt(e);
  i.r = t['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Na(e, n - e.l, t);
    s[3] = Sn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function N2(e, r, t) {
  var n = e.l + r,
    i = bt(e);
  i.r = t['!row'];
  var a = Dn(e),
    s = [i, a, 'n'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Na(e, n - e.l, t);
    s[3] = Sn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
function k2(e, r, t) {
  var n = e.l + r,
    i = bt(e);
  i.r = t['!row'];
  var a = ct(e),
    s = [i, a, 'str'];
  if (t.cellFormula) {
    e.l += 2;
    var f = Na(e, n - e.l, t);
    s[3] = Sn(f, null, i, t.supbooks, t);
  } else e.l = n;
  return s;
}
var D2 = nn,
  I2 = kn;
function P2(e, r) {
  return r == null && (r = H(4)), r.write_shift(4, e), r;
}
function L2(e, r) {
  var t = e.l + r,
    n = nn(e),
    i = j0(e),
    a = ct(e),
    s = ct(e),
    f = ct(e);
  e.l = t;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function B2(e, r) {
  var t = H(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  kn({ s: qe(e[0]), e: qe(e[0]) }, t), X0('rId' + r, t);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return Je(i || '', t), Je(e[1].Tooltip || '', t), Je('', t), t.slice(0, t.l);
}
function M2() {}
function b2(e, r, t) {
  var n = e.l + r,
    i = tl(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), t.cellFormula)) {
    var f = Fv(e, n - e.l, t);
    s[1] = f;
  } else e.l = n;
  return s;
}
function U2(e, r, t) {
  var n = e.l + r,
    i = nn(e),
    a = [i];
  if (t.cellFormula) {
    var s = Ov(e, n - e.l, t);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function H2(e, r, t) {
  t == null && (t = H(18));
  var n = ka(e, r);
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
var bl = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function W2(e) {
  var r = {};
  return (
    bl.forEach(function (t) {
      r[t] = Dn(e);
    }),
    r
  );
}
function V2(e, r) {
  return (
    r == null && (r = H(6 * 8)),
    Bl(e),
    bl.forEach(function (t) {
      qr(e[t], r);
    }),
    r
  );
}
function G2(e) {
  var r = e.read_shift(2);
  return (e.l += 28), { RTL: r & 32 };
}
function j2(e, r, t) {
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
function X2(e) {
  var r = H(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), kn(e, r), r;
}
function $2(e, r) {
  return (
    r == null && (r = H(16 * 4 + 2)),
    r.write_shift(2, e.password ? gl(e.password) : 0),
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
function z2() {}
function K2() {}
function Y2(e, r, t, n, i, a, s) {
  if (r.v === void 0) return !1;
  var f = '';
  switch (r.t) {
    case 'b':
      f = r.v ? '1' : '0';
      break;
    case 'd':
      (r = At(r)), (r.z = r.z || We[14]), (r.v = St(vt(r.v))), (r.t = 'n');
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
    ((l.s = Br(i.cellXfs, r, i)),
    r.l && a['!links'].push([Fe(l), r.l]),
    r.c && a['!comments'].push([Fe(l), r.c]),
    r.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = J0(i.Strings, r.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? X(e, 18, d2(r, l)) : X(e, 7, h2(r, l)))
          : ((l.t = 'str'), s ? X(e, 17, C2(r, l)) : X(e, 6, y2(r, l))),
        !0
      );
    case 'n':
      return (
        r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3
          ? s
            ? X(e, 13, w2(r, l))
            : X(e, 2, E2(r, l))
          : s
            ? X(e, 16, _2(r, l))
            : X(e, 5, v2(r, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? X(e, 15, s2(r, l)) : X(e, 4, i2(r, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? X(e, 14, c2(r, l)) : X(e, 3, o2(r, l)), !0;
  }
  return s ? X(e, 12, r2(r, l)) : X(e, 1, e2(r, l)), !0;
}
function q2(e, r, t, n) {
  var i = De(r['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  X(e, 145);
  var l = Array.isArray(r),
    o = i.e.r;
  r['!rows'] && (o = Math.max(i.e.r, r['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = it(c)), zv(e, r, i, c);
    var h = !1;
    if (c <= i.e.r)
      for (var u = i.s.c; u <= i.e.c; ++u) {
        c === i.s.r && (f[u] = lt(u)), (a = f[u] + s);
        var d = l ? (r[c] || [])[u] : r[a];
        if (!d) {
          h = !1;
          continue;
        }
        h = Y2(e, d, c, u, n, r, h);
      }
  }
  X(e, 146);
}
function J2(e, r) {
  !r ||
    !r['!merges'] ||
    (X(e, 177, P2(r['!merges'].length)),
    r['!merges'].forEach(function (t) {
      X(e, 176, I2(t));
    }),
    X(e, 178));
}
function Z2(e, r) {
  !r ||
    !r['!cols'] ||
    (X(e, 390),
    r['!cols'].forEach(function (t, n) {
      t && X(e, 60, H2(n, t));
    }),
    X(e, 391));
}
function Q2(e, r) {
  !r || !r['!ref'] || (X(e, 648), X(e, 649, X2(De(r['!ref']))), X(e, 650));
}
function em(e, r, t) {
  r['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = Ae(t, -1, n[1].Target.replace(/#.*$/, ''), ge.HLINK);
      X(e, 494, B2(n, i));
    }
  }),
    delete r['!links'];
}
function tm(e, r, t, n) {
  if (r['!comments'].length > 0) {
    var i = Ae(n, -1, '../drawings/vmlDrawing' + (t + 1) + '.vml', ge.VML);
    X(e, 551, X0('rId' + i)), (r['!legacy'] = i);
  }
}
function rm(e, r, t, n) {
  if (r['!autofilter']) {
    var i = r['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : Xe(i.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }),
      t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names,
      f = It(a);
    f.s.r == f.e.r && ((f.e.r = It(r['!ref']).e.r), (a = Xe(f)));
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
      X(e, 161, kn(De(a))),
      X(e, 162);
  }
}
function nm(e, r, t) {
  X(e, 133), X(e, 137, j2(r, t)), X(e, 138), X(e, 134);
}
function im(e, r) {
  r['!protect'] && X(e, 535, $2(r['!protect']));
}
function am(e, r, t, n) {
  var i = Tt(),
    a = t.SheetNames[e],
    s = t.Sheets[a] || {},
    f = a;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = De(s['!ref'] || 'A1');
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
    X(i, 129),
    (t.vbaraw || s['!outline']) && X(i, 147, Zv(f, s['!outline'])),
    X(i, 148, Yv(l)),
    nm(i, s, t.Workbook),
    Z2(i, s),
    q2(i, s, e, r),
    im(i, s),
    rm(i, s, t, e),
    J2(i, s),
    em(i, s, n),
    s['!margins'] && X(i, 476, V2(s['!margins'])),
    (!r || r.ignoreEC || r.ignoreEC == null) && Q2(i, s),
    tm(i, s, e, n),
    X(i, 130),
    i.end()
  );
}
function sm(e, r) {
  e.l += 10;
  var t = ct(e);
  return { name: t };
}
var fm = [
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
function om(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : U1(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var lm = '][*?/\\'.split('');
function Ul(e, r) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var t = !0;
  return (
    lm.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    t
  );
}
function cm(e, r, t) {
  e.forEach(function (n, i) {
    Ul(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (t) {
      var s = (r && r[i] && r[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function um(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var r = (e.Workbook && e.Workbook.Sheets) || [];
  cm(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t)
    Iv(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
}
function Hl(e) {
  var r = [$e];
  r[r.length] = Z('workbook', null, { xmlns: Rn[0], 'xmlns:r': Ye.r });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  e.Workbook &&
    e.Workbook.WBProps &&
    (fm.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (r[r.length] = Z('workbookPr', null, n));
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
    var s = { name: ye(e.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    r[r.length] = Z('sheet', null, s);
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
            f.Ref && (r[r.length] = Z('definedName', ye(f.Ref), l));
        }),
      (r[r.length] = '</definedNames>')),
    r.length > 2 &&
      ((r[r.length] = '</workbook>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function hm(e, r) {
  var t = {};
  return (
    (t.Hidden = e.read_shift(4)),
    (t.iTabID = e.read_shift(4)),
    (t.strRelID = x0(e)),
    (t.name = ct(e)),
    t
  );
}
function xm(e, r) {
  return (
    r || (r = H(127)),
    r.write_shift(4, e.Hidden),
    r.write_shift(4, e.iTabID),
    X0(e.strRelID, r),
    Je(e.name.slice(0, 31), r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function dm(e, r) {
  var t = {},
    n = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var i = r > 8 ? ct(e) : '';
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
function pm(e, r) {
  r || (r = H(72));
  var t = 0;
  return (
    e && e.filterPrivacy && (t |= 8),
    r.write_shift(4, t),
    r.write_shift(4, 0),
    Zo((e && e.CodeName) || 'ThisWorkbook', r),
    r.slice(0, r.l)
  );
}
function vm(e, r, t) {
  var n = e.l + r;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = ox(e),
    s = Cv(e, 0, t),
    f = j0(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function mm(e, r) {
  X(e, 143);
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
    X(e, 156, xm(i));
  }
  X(e, 144);
}
function _m(e, r) {
  r || (r = H(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return (
    Je('SheetJS', r),
    Je(qi.version, r),
    Je(qi.version, r),
    Je('7262', r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function gm(e, r) {
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
function Em(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, n = 0, i = -1, a = -1; n < t.length; ++n)
      !t[n] || (!t[n].Hidden && i == -1)
        ? (i = n)
        : t[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (X(e, 135), X(e, 158, gm(i)), X(e, 136));
  }
}
function Tm(e, r) {
  var t = Tt();
  return (
    X(t, 131),
    X(t, 128, _m()),
    X(t, 153, pm((e.Workbook && e.Workbook.WBProps) || null)),
    Em(t, e),
    mm(t, e),
    X(t, 132),
    t.end()
  );
}
function wm(e, r, t) {
  return (r.slice(-4) === '.bin' ? Tm : Hl)(e);
}
function Sm(e, r, t, n, i) {
  return (r.slice(-4) === '.bin' ? am : Ml)(e, t, n, i);
}
function Am(e, r, t) {
  return (r.slice(-4) === '.bin' ? Vd : wl)(e, t);
}
function ym(e, r, t) {
  return (r.slice(-4) === '.bin' ? pd : _l)(e, t);
}
function Fm(e, r, t) {
  return (r.slice(-4) === '.bin' ? ip : Cl)(e);
}
function Cm(e) {
  return (e.slice(-4) === '.bin' ? qd : yl)();
}
function Om(e, r) {
  var t = [];
  return (
    e.Props && t.push(Ax(e.Props, r)),
    e.Custprops && t.push(yx(e.Props, e.Custprops)),
    t.join('')
  );
}
function Rm() {
  return '';
}
function Nm(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    r.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(Z('NumberFormat', null, { 'ss:Format': ye(We[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      t.push(Z('Style', a.join(''), s));
    }),
    Z('Styles', t.join(''))
  );
}
function Wl(e) {
  return Z('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + Y0(e.Ref, { r: 0, c: 0 }),
  });
}
function km(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var r = e.Workbook.Names, t = [], n = 0; n < r.length; ++n) {
    var i = r[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || t.push(Wl(i)));
  }
  return Z('Names', t.join(''));
}
function Dm(e, r, t, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || a.push(Wl(f)));
  }
  return a.join('');
}
function Im(e, r, t, n) {
  if (!e) return '';
  var i = [];
  if (
    (e['!margins'] &&
      (i.push('<PageSetup>'),
      e['!margins'].header &&
        i.push(Z('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer &&
        i.push(Z('Footer', null, { 'x:Margin': e['!margins'].footer })),
      i.push(
        Z('PageMargins', null, {
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
        Z(
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
      (i.push(nt('ProtectContents', 'True')),
      e['!protect'].objects && i.push(nt('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(nt('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(nt('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(nt('EnableSelection', 'UnlockedCells')),
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
    i.length == 0 ? '' : Z('WorksheetOptions', i.join(''), { xmlns: Nt.x })
  );
}
function Pm(e) {
  return e
    .map(function (r) {
      var t = b1(r.t || ''),
        n = Z('ss:Data', t, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return Z('Comment', n, { 'ss:Author': r.a });
    })
    .join('');
}
function Lm(e, r, t, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + ye(Y0(e.f, s))),
    e.F && e.F.slice(0, r.length) == r)
  ) {
    var l = qe(e.F.slice(r.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = ye(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = ye(e.l.Tooltip))),
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
      (h = 'Error'), (u = pi[e.v]);
      break;
    case 'd':
      (h = 'DateTime'),
        (u = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || We[14]);
      break;
    case 's':
      (h = 'String'), (u = M1(e.v || ''));
      break;
  }
  var d = Br(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + d)), (f['ss:Index'] = s.c + 1);
  var p = e.v != null ? u : '',
    x = e.t == 'z' ? '' : '<Data ss:Type="' + h + '">' + p + '</Data>';
  return (e.c || []).length > 0 && (x += Pm(e.c)), Z('Cell', x, f);
}
function Bm(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return (
    r &&
      (r.hpt && !r.hpx && (r.hpx = Tl(r.hpt)),
      r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'),
      r.hidden && (t += ' ss:Hidden="1"')),
    t + '>'
  );
}
function Mm(e, r, t, n) {
  if (!e['!ref']) return '';
  var i = De(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, y) {
      z0(m);
      var F = !!m.width,
        S = ka(y, m),
        N = { 'ss:Index': y + 1 };
      F && (N['ss:Width'] = aa(S.width)),
        m.hidden && (N['ss:Hidden'] = '1'),
        f.push(Z('Column', null, N));
    });
  for (var l = Array.isArray(e), o = i.s.r; o <= i.e.r; ++o) {
    for (var c = [Bm(o, (e['!rows'] || [])[o])], h = i.s.c; h <= i.e.c; ++h) {
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
        var d = { r: o, c: h },
          p = Fe(d),
          x = l ? (e[o] || [])[h] : e[p];
        c.push(Lm(x, p, e, r, t, n, d));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function bm(e, r, t) {
  var n = [],
    i = t.SheetNames[e],
    a = t.Sheets[i],
    s = a ? Dm(a, r, e, t) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? Mm(a, r, e, t) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(Im(a, r, e, t)),
    n.join('')
  );
}
function Um(e, r) {
  r || (r = {}),
    e.SSF || (e.SSF = At(We)),
    e.SSF &&
      (Fa(),
      ya(e.SSF),
      (r.revssf = Ca(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF),
      (r.cellXfs = []),
      Br(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Om(e, r)), t.push(Rm()), t.push(''), t.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    t.push(Z('Worksheet', bm(n, r, e), { 'ss:Name': ye(e.SheetNames[n]) }));
  return (
    (t[2] = Nm(e, r)),
    (t[3] = km(e)),
    $e +
      Z('Workbook', t.join(''), {
        xmlns: Nt.ss,
        'xmlns:o': Nt.o,
        'xmlns:x': Nt.x,
        'xmlns:ss': Nt.ss,
        'xmlns:dt': Nt.dt,
        'xmlns:html': Nt.html,
      })
  );
}
var Ka = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function Hm(e, r) {
  var t = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = Bs(Ys, 'n'),
    l = Bs(qs, 'n');
  if (e.Props)
    for (s = at(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? t
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = at(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? t
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    ul.indexOf(i[a][0]) > -1 ||
      ol.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Ce.utils.cfb_add(r, '/SummaryInformation', tf(n, Ka.SI, l, qs)),
    (t.length || o.length) &&
      Ce.utils.cfb_add(
        r,
        '/DocumentSummaryInformation',
        tf(t, Ka.DSI, f, Ys, o.length ? o : null, Ka.UDI),
      );
}
function Wm(e, r) {
  var t = r || {},
    n = Ce.utils.cfb_new({ root: 'R' }),
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
    Ce.utils.cfb_add(n, i, Vl(e, t)),
    t.biff == 8 && (e.Props || e.Custprops) && Hm(e, n),
    t.biff == 8 &&
      e.vbaraw &&
      ap(
        n,
        Ce.read(e.vbaraw, {
          type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var Vm = {
  0: { f: Xv },
  1: { f: Qv },
  2: { f: g2 },
  3: { f: f2 },
  4: { f: n2 },
  5: { f: p2 },
  6: { f: A2 },
  7: { f: u2 },
  8: { f: k2 },
  9: { f: N2 },
  10: { f: O2 },
  11: { f: R2 },
  12: { f: t2 },
  13: { f: T2 },
  14: { f: l2 },
  15: { f: a2 },
  16: { f: m2 },
  17: { f: F2 },
  18: { f: x2 },
  19: { f: G0 },
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
  39: { f: vm },
  40: {},
  42: {},
  43: { f: Ad },
  44: { f: wd },
  45: { f: Cd },
  46: { f: Rd },
  47: { f: Od },
  48: {},
  49: { f: tx },
  50: {},
  51: { f: Xd },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: rd },
  62: { f: S2 },
  63: { f: Jd },
  64: { f: z2 },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: cr, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: G2 },
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
  151: { f: M2 },
  152: {},
  153: { f: dm },
  154: {},
  155: {},
  156: { f: hm },
  157: {},
  158: {},
  159: { T: 1, f: hd },
  160: { T: -1 },
  161: { T: 1, f: nn },
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
  176: { f: D2 },
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
  335: { f: Gd },
  336: { T: -1 },
  337: { f: Kd, T: 1 },
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
  355: { f: x0 },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: qx },
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
  426: { f: b2 },
  427: { f: U2 },
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
  476: { f: W2 },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: qv },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: L2 },
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
  550: { f: x0 },
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
  637: { f: ax },
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
  651: { f: sm },
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
  1053: { f: K2 },
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
function Q(e, r, t, n) {
  var i = r;
  if (!isNaN(i)) {
    var a = n || (t || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && H0(t) && e.push(t);
  }
}
function Gm(e, r, t, n) {
  var i = (t || []).length || 0;
  if (i <= 8224) return Q(e, r, t, i);
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
function mi(e, r, t) {
  return (
    e || (e = H(7)),
    e.write_shift(2, r),
    e.write_shift(2, t),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function jm(e, r, t, n) {
  var i = H(9);
  return mi(i, e, r), xl(t, n || 'b', i), i;
}
function Xm(e, r, t) {
  var n = H(8 + 2 * t.length);
  return (
    mi(n, e, r),
    n.write_shift(1, t.length),
    n.write_shift(t.length, t, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function $m(e, r, t, n) {
  if (r.v != null)
    switch (r.t) {
      case 'd':
      case 'n':
        var i = r.t == 'd' ? St(vt(r.v)) : r.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? Q(e, 2, sd(t, n, i))
          : Q(e, 3, ad(t, n, i));
        return;
      case 'b':
      case 'e':
        Q(e, 5, jm(t, n, r.v, r.t));
        return;
      case 's':
      case 'str':
        Q(e, 4, Xm(t, n, (r.v || '').slice(0, 255)));
        return;
    }
  Q(e, 1, mi(null, t, n));
}
function zm(e, r, t, n) {
  var i = Array.isArray(r),
    a = De(r['!ref'] || 'A1'),
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
      (s = Xe(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = it(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = lt(c)), (s = l[c] + f);
      var h = i ? (r[o] || [])[c] : r[s];
      h && $m(e, h, o, c);
    }
  }
}
function Km(e, r) {
  for (var t = r || {}, n = Tt(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == t.sheet && (i = a);
  if (i == 0 && t.sheet && e.SheetNames[0] != t.sheet)
    throw new Error('Sheet not found: ' + t.sheet);
  return (
    Q(n, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, $0(e, 16, t)),
    zm(n, e.Sheets[e.SheetNames[i]], i, t),
    Q(n, 10),
    n.end()
  );
}
function Ym(e, r, t) {
  Q(e, 49, Vx({ sz: 12, name: 'Arial' }, t));
}
function qm(e, r, t) {
  r &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        r[i] != null && Q(e, 1054, Xx(i, r[i], t));
    });
}
function Jm(e, r) {
  var t = H(19);
  t.write_shift(4, 2151),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(2, 3),
    t.write_shift(1, 1),
    t.write_shift(4, 0),
    Q(e, 2151, t),
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
    vl(De(r['!ref'] || 'A1'), t),
    t.write_shift(4, 4),
    Q(e, 2152, t);
}
function Zm(e, r) {
  for (var t = 0; t < 16; ++t) Q(e, 224, nf({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function (n) {
    Q(e, 224, nf(n, 0, r));
  });
}
function Qm(e, r) {
  for (var t = 0; t < r['!links'].length; ++t) {
    var n = r['!links'][t];
    Q(e, 440, Qx(n)), n[1].Tooltip && Q(e, 2048, ed(n));
  }
  delete r['!links'];
}
function e_(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function (n, i) {
      ++t <= 256 && n && Q(e, 125, nd(ka(i, n), i));
    });
  }
}
function t_(e, r, t, n, i) {
  var a = 16 + Br(i.cellXfs, r, i);
  if (r.v == null && !r.bf) {
    Q(e, 513, Jr(t, n, a));
    return;
  }
  if (r.bf) Q(e, 6, yv(r, t, n, i, a));
  else
    switch (r.t) {
      case 'd':
      case 'n':
        var s = r.t == 'd' ? St(vt(r.v)) : r.v;
        Q(e, 515, Yx(t, n, s, a));
        break;
      case 'b':
      case 'e':
        Q(e, 517, Kx(t, n, r.v, a, i, r.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = J0(i.Strings, r.v, i.revStrings);
          Q(e, 253, Gx(t, n, f, a));
        } else Q(e, 516, jx(t, n, (r.v || '').slice(0, 255), a, i));
        break;
      default:
        Q(e, 513, Jr(t, n, a));
    }
}
function r_(e, r, t) {
  var n = Tt(),
    i = t.SheetNames[e],
    a = t.Sheets[i] || {},
    s = (t || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = r.biff == 8,
    c,
    h = '',
    u = [],
    d = De(a['!ref'] || 'A1'),
    p = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= p) {
    if (r.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (d.e.c = Math.min(d.e.c, 255)), (d.e.r = Math.min(d.e.c, p - 1));
  }
  Q(n, 2057, $0(t, 16, r)),
    Q(n, 13, Mt(1)),
    Q(n, 12, Mt(100)),
    Q(n, 15, dt(!0)),
    Q(n, 17, dt(!1)),
    Q(n, 16, qr(0.001)),
    Q(n, 95, dt(!0)),
    Q(n, 42, dt(!1)),
    Q(n, 43, dt(!1)),
    Q(n, 130, Mt(1)),
    Q(n, 128, zx()),
    Q(n, 131, dt(!1)),
    Q(n, 132, dt(!1)),
    o && e_(n, a['!cols']),
    Q(n, 512, $x(d, r)),
    o && (a['!links'] = []);
  for (var x = d.s.r; x <= d.e.r; ++x) {
    h = it(x);
    for (var m = d.s.c; m <= d.e.c; ++m) {
      x === d.s.r && (u[m] = lt(m)), (c = u[m] + h);
      var y = l ? (a[x] || [])[m] : a[c];
      y && (t_(n, y, x, m, r), o && y.l && a['!links'].push([c, y.l]));
    }
  }
  var F = f.CodeName || f.name || i;
  return (
    o && Q(n, 574, Wx((s.Views || [])[0])),
    o && (a['!merges'] || []).length && Q(n, 229, Zx(a['!merges'])),
    o && Qm(n, a),
    Q(n, 442, pl(F)),
    o && Jm(n, a),
    Q(n, 10),
    n.end()
  );
}
function n_(e, r, t) {
  var n = Tt(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = t.biff == 8,
    l = t.biff == 5;
  if (
    (Q(n, 2057, $0(e, 5, t)),
    t.bookType == 'xla' && Q(n, 135),
    Q(n, 225, f ? Mt(1200) : null),
    Q(n, 193, Ox(2)),
    l && Q(n, 191),
    l && Q(n, 192),
    Q(n, 226),
    Q(n, 92, Mx('SheetJS', t)),
    Q(n, 66, Mt(f ? 1200 : 1252)),
    f && Q(n, 353, Mt(0)),
    f && Q(n, 448),
    Q(n, 317, id(e.SheetNames.length)),
    f && e.vbaraw && Q(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    Q(n, 442, pl(o));
  }
  Q(n, 156, Mt(17)),
    Q(n, 25, dt(!1)),
    Q(n, 18, dt(!1)),
    Q(n, 19, Mt(0)),
    f && Q(n, 431, dt(!1)),
    f && Q(n, 444, Mt(0)),
    Q(n, 61, Hx()),
    Q(n, 64, dt(!1)),
    Q(n, 141, Mt(0)),
    Q(n, 34, dt(om(e) == 'true')),
    Q(n, 14, dt(!0)),
    f && Q(n, 439, dt(!1)),
    Q(n, 218, Mt(0)),
    Ym(n, e, t),
    qm(n, e.SSF, t),
    Zm(n, t),
    f && Q(n, 352, dt(!1));
  var c = n.end(),
    h = Tt();
  f && Q(h, 140, td()), f && t.Strings && Gm(h, 252, Ux(t.Strings)), Q(h, 10);
  var u = h.end(),
    d = Tt(),
    p = 0,
    x = 0;
  for (x = 0; x < e.SheetNames.length; ++x)
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[x].length;
  var m = c.length + p + u.length;
  for (x = 0; x < e.SheetNames.length; ++x) {
    var y = a[x] || {};
    Q(
      d,
      133,
      bx({ pos: m, hs: y.Hidden || 0, dt: 0, name: e.SheetNames[x] }, t),
    ),
      (m += r[x].length);
  }
  var F = d.end();
  if (p != F.length) throw new Error('BS8 ' + p + ' != ' + F.length);
  var S = [];
  return (
    c.length && S.push(c), F.length && S.push(F), u.length && S.push(u), rt(S)
  );
}
function i_(e, r) {
  var t = r || {},
    n = [];
  e && !e.SSF && (e.SSF = At(We)),
    e &&
      e.SSF &&
      (Fa(),
      ya(e.SSF),
      (t.revssf = Ca(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Z0(t),
    (t.cellXfs = []),
    Br(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = r_(i, t, e);
  return n.unshift(n_(e, n, t)), rt(n);
}
function Vl(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var n = e.Sheets[e.SheetNames[t]];
    if (!(!n || !n['!ref'])) {
      var i = It(n['!ref']);
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
      return Km(e, r);
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
      var c = Fe({ r: t, c: s }),
        h = n.dense ? (e[t] || [])[s] : e[c],
        u = (h && h.v != null && (h.h || B1(h.w || (Er(h), h.w) || ''))) || '',
        d = {};
      f > 1 && (d.rowspan = f),
        l > 1 && (d.colspan = l),
        n.editable
          ? (u = '<span contenteditable="true">' + u + '</span>')
          : h &&
            ((d['data-t'] = (h && h.t) || 'z'),
            h.v != null && (d['data-v'] = h.v),
            h.z != null && (d['data-z'] = h.z),
            h.l &&
              (h.l.Target || '#').charAt(0) != '#' &&
              (u = '<a href="' + h.l.Target + '">' + u + '</a>')),
        (d.id = (n.id || 'sjs') + '-' + c),
        a.push(Z('td', u, d));
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
function Gl(e, r) {
  var t = r || {},
    n = t.header != null ? t.header : s_,
    i = t.footer != null ? t.footer : f_,
    a = [n],
    s = It(e['!ref']);
  (t.dense = Array.isArray(e)), a.push(o_(e, s, t));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(a_(e, s, f, t));
  return a.push('</table>' + i), a.join('');
}
function jl(e, r, t) {
  var n = t || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? qe(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = r.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = It(e['!ref']);
    (o.s.r = Math.min(o.s.r, c.s.r)),
      (o.s.c = Math.min(o.s.c, c.s.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      i == -1 && (o.e.r = i = c.e.r + 1);
  }
  var h = [],
    u = 0,
    d = e['!rows'] || (e['!rows'] = []),
    p = 0,
    x = 0,
    m = 0,
    y = 0,
    F = 0,
    S = 0;
  for (e['!cols'] || (e['!cols'] = []); p < f.length && x < l; ++p) {
    var N = f[p];
    if (uf(N)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var U = N.children;
    for (m = y = 0; m < U.length; ++m) {
      var J = U[m];
      if (!(n.display && uf(J))) {
        var O = J.hasAttribute('data-v')
            ? J.getAttribute('data-v')
            : J.hasAttribute('v')
              ? J.getAttribute('v')
              : H1(J.innerHTML),
          b = J.getAttribute('data-z') || J.getAttribute('z');
        for (u = 0; u < h.length; ++u) {
          var I = h[u];
          I.s.c == y + a &&
            I.s.r < x + i &&
            x + i <= I.e.r &&
            ((y = I.e.c + 1 - a), (u = -1));
        }
        (S = +J.getAttribute('colspan') || 1),
          ((F = +J.getAttribute('rowspan') || 1) > 1 || S > 1) &&
            h.push({
              s: { r: x + i, c: y + a },
              e: { r: x + i + (F || 1) - 1, c: y + a + (S || 1) - 1 },
            });
        var G = { t: 's', v: O },
          j = J.getAttribute('data-t') || J.getAttribute('t') || '';
        O != null &&
          (O.length == 0
            ? (G.t = j || 'z')
            : n.raw ||
              O.trim().length == 0 ||
              j == 's' ||
              (O === 'TRUE'
                ? (G = { t: 'b', v: !0 })
                : O === 'FALSE'
                  ? (G = { t: 'b', v: !1 })
                  : isNaN(mr(O))
                    ? isNaN(ri(O).getDate()) ||
                      ((G = { t: 'd', v: vt(O) }),
                      n.cellDates || (G = { t: 'n', v: St(G.v) }),
                      (G.z = n.dateNF || We[14]))
                    : (G = { t: 'n', v: mr(O) }))),
          G.z === void 0 && b != null && (G.z = b);
        var K = '',
          re = J.getElementsByTagName('A');
        if (re && re.length)
          for (
            var _e = 0;
            _e < re.length &&
            !(
              re[_e].hasAttribute('href') &&
              ((K = re[_e].getAttribute('href')), K.charAt(0) != '#')
            );
            ++_e
          );
        K && K.charAt(0) != '#' && (G.l = { Target: K }),
          n.dense
            ? (e[x + i] || (e[x + i] = []), (e[x + i][y + a] = G))
            : (e[Fe({ c: y + a, r: x + i })] = G),
          o.e.c < y + a && (o.e.c = y + a),
          (y += S);
      }
    }
    ++x;
  }
  return (
    h.length && (e['!merges'] = (e['!merges'] || []).concat(h)),
    (o.e.r = Math.max(o.e.r, x - 1 + i)),
    (e['!ref'] = Xe(o)),
    x >= l && (e['!fullref'] = Xe(((o.e.r = f.length - p + x - 1 + i), o))),
    e
  );
}
function Xl(e, r) {
  var t = r || {},
    n = t.dense ? [] : {};
  return jl(n, e, r);
}
function l_(e, r) {
  return Qr(Xl(e, r), r);
}
function uf(e) {
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
        ii({
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
      return $e + r;
    };
  })(),
  hf = (function () {
    var e = function (a) {
        return ye(a)
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
            ye(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          h = It(a['!ref'] || 'A1'),
          u = a['!merges'] || [],
          d = 0,
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
        var x = '',
          m = a['!rows'] || [];
        for (o = 0; o < h.s.r; ++o)
          (x = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : ''),
            l.push(
              '        <table:table-row' +
                x +
                `></table:table-row>
`,
            );
        for (; o <= h.e.r; ++o) {
          for (
            x = m[o] ? ' table:style-name="ro' + m[o].ods + '"' : '',
              l.push(
                '        <table:table-row' +
                  x +
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
              S = '';
            for (d = 0; d != u.length; ++d)
              if (
                !(u[d].s.c > c) &&
                !(u[d].s.r > o) &&
                !(u[d].e.c < c) &&
                !(u[d].e.r < o)
              ) {
                (u[d].s.c != c || u[d].s.r != o) && (y = !0),
                  (F['table:number-columns-spanned'] = u[d].e.c - u[d].s.c + 1),
                  (F['table:number-rows-spanned'] = u[d].e.r - u[d].s.r + 1);
                break;
              }
            if (y) {
              l.push(t);
              continue;
            }
            var N = Fe({ r: o, c }),
              U = p ? (a[o] || [])[c] : a[N];
            if (
              U &&
              U.f &&
              ((F['table:formula'] = ye(kv(U.f))),
              U.F && U.F.slice(0, N.length) == N)
            ) {
              var J = It(U.F);
              (F['table:number-matrix-columns-spanned'] = J.e.c - J.s.c + 1),
                (F['table:number-matrix-rows-spanned'] = J.e.r - J.s.r + 1);
            }
            if (!U) {
              l.push(r);
              continue;
            }
            switch (U.t) {
              case 'b':
                (S = U.v ? 'TRUE' : 'FALSE'),
                  (F['office:value-type'] = 'boolean'),
                  (F['office:boolean-value'] = U.v ? 'true' : 'false');
                break;
              case 'n':
                (S = U.w || String(U.v || 0)),
                  (F['office:value-type'] = 'float'),
                  (F['office:value'] = U.v || 0);
                break;
              case 's':
              case 'str':
                (S = U.v == null ? '' : U.v),
                  (F['office:value-type'] = 'string');
                break;
              case 'd':
                (S = U.w || vt(U.v).toISOString()),
                  (F['office:value-type'] = 'date'),
                  (F['office:date-value'] = vt(U.v).toISOString()),
                  (F['table:style-name'] = 'ce1');
                break;
              default:
                l.push(r);
                continue;
            }
            var O = e(S);
            if (U.l && U.l.Target) {
              var b = U.l.Target;
              (b = b.charAt(0) == '#' ? '#' + Dv(b.slice(1)) : b),
                b.charAt(0) != '#' && !b.match(/^\w+:/) && (b = '../' + b),
                (O = Z('text:a', O, {
                  'xlink:href': b.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                Z('table:table-cell', Z('text:p', O, {}), F) +
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
                z0(h), (h.ods = f);
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
      var l = [$e],
        o = ii({
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
        c = ii({
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
          l.push(sl().replace(/office:document-meta/g, 'office:meta')))
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
function $l(e, r) {
  if (r.bookType == 'fods') return hf(e, r);
  var t = B0(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    ve(t, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    ve(t, n, hf(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    ve(t, n, u_(e, r)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    ve(t, n, $e + sl()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    ve(t, n, Sx(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    ve(t, n, Tx(i)),
    t
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function oa(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function h_(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : Vt(ni(e));
}
function x_(e, r) {
  e: for (var t = 0; t <= e.length - r.length; ++t) {
    for (var n = 0; n < r.length; ++n) if (e[t + n] != r[n]) continue e;
    return !0;
  }
  return !1;
}
function Lr(e) {
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
function d_(e, r, t) {
  var n =
      Math.floor(t == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(t))) + 6176 - 20,
    i = t / Math.pow(10, n - 6176);
  (e[r + 15] |= n >> 7), (e[r + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[r + a] = i & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function ai(e, r) {
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
function Se(e) {
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
function wn(e) {
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
function ze(e) {
  for (var r = [], t = [0]; t[0] < e.length; ) {
    var n = t[0],
      i = ai(e, t),
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
        (s = ai(e, t)), (f = e.slice(t[0], t[0] + s)), (t[0] += s);
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
function et(e) {
  var r = [];
  return (
    e.forEach(function (t, n) {
      t.forEach(function (i) {
        i.data &&
          (r.push(Se(n * 8 + i.type)),
          i.type == 2 && r.push(Se(i.data.length)),
          r.push(i.data));
      });
    }),
    Lr(r)
  );
}
function Ht(e) {
  for (var r, t = [], n = [0]; n[0] < e.length; ) {
    var i = ai(e, n),
      a = ze(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: wn(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = ze(f.data),
        o = wn(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (r = a[3]) != null && r[0] && (s.merge = wn(a[3][0].data) >>> 0 > 0),
      t.push(s);
  }
  return t;
}
function dn(e) {
  var r = [];
  return (
    e.forEach(function (t) {
      var n = [];
      (n[1] = [{ data: Se(t.id), type: 0 }]),
        (n[2] = []),
        t.merge != null && (n[3] = [{ data: Se(+!!t.merge), type: 0 }]);
      var i = [];
      t.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: Se(s.data.length) }]),
          n[2].push({ data: et(s.meta), type: 2 });
      });
      var a = et(n);
      r.push(Se(a.length)),
        r.push(a),
        i.forEach(function (s) {
          return r.push(s);
        });
    }),
    Lr(r)
  );
}
function p_(e, r) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var t = [0], n = ai(r, t), i = []; t[0] < r.length; ) {
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
        (i = [Lr(i)]),
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
  var c = Lr(i);
  if (c.length != n)
    throw new Error('Unexpected length: '.concat(c.length, ' != ').concat(n));
  return c;
}
function Wt(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = e[t++],
      i = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
    (t += 3), r.push(p_(n, e.slice(t, t + i))), (t += i);
  }
  if (t !== e.length) throw new Error('data is not a valid framed stream!');
  return Lr(r);
}
function pn(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var n = Math.min(e.length - t, 268435455),
      i = new Uint8Array(4);
    r.push(i);
    var a = Se(n),
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
  return Lr(r);
}
function Ya(e, r) {
  var t = new Uint8Array(32),
    n = oa(t),
    i = 12,
    a = 0;
  switch (((t[0] = 5), e.t)) {
    case 'n':
      (t[1] = 2), d_(t, i, e.v), (a |= 1), (i += 16);
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
function qa(e, r) {
  var t = new Uint8Array(32),
    n = oa(t),
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
function yr(e) {
  var r = ze(e);
  return ai(r[1][0].data);
}
function v_(e, r, t) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      wn(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = oa(e[7][0].data),
      c = 0,
      h = [],
      u = oa(e[4][0].data),
      d = 0,
      p = [],
      x = 0;
    x < r.length;
    ++x
  ) {
    if (r[x] == null) {
      o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, c, !0), u.setUint16(x * 2, d, !0);
    var m, y;
    switch (typeof r[x]) {
      case 'string':
        (m = Ya({ t: 's', v: r[x] }, t)), (y = qa({ t: 's', v: r[x] }, t));
        break;
      case 'number':
        (m = Ya({ t: 'n', v: r[x] }, t)), (y = qa({ t: 'n', v: r[x] }, t));
        break;
      case 'boolean':
        (m = Ya({ t: 'b', v: r[x] }, t)), (y = qa({ t: 'b', v: r[x] }, t));
        break;
      default:
        throw new Error('Unsupported value ' + r[x]);
    }
    h.push(m), (c += m.length), p.push(y), (d += y.length), ++l;
  }
  for (e[2][0].data = Se(l); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), u.setUint16(x * 2, 65535, !0);
  return (e[6][0].data = Lr(h)), (e[3][0].data = Lr(p)), l;
}
function m_(e, r) {
  if (!r || !r.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var t = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = It(t['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(Xe(n)),
      );
  var a = la(t, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (B) {
    return B.forEach(function (R) {
      typeof R == 'string' && s.push(R);
    });
  });
  var f = {},
    l = [],
    o = Ce.read(r.numbers, { type: 'base64' });
  o.FileIndex.map(function (B, R) {
    return [B, o.FullPaths[R]];
  }).forEach(function (B) {
    var R = B[0],
      C = B[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var z = R.content,
        se = Wt(z),
        oe = Ht(se);
      oe.forEach(function (ae) {
        l.push(ae.id),
          (f[ae.id] = {
            deps: [],
            location: C,
            type: wn(ae.messages[0].meta[1][0].data),
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
      return [B, Se(B)];
    });
  o.FileIndex.map(function (B, R) {
    return [B, o.FullPaths[R]];
  }).forEach(function (B) {
    var R = B[0];
    if ((B[1], !!R.name.match(/\.iwa/))) {
      var C = Ht(Wt(R.content));
      C.forEach(function (z) {
        z.messages.forEach(function (se) {
          c.forEach(function (oe) {
            z.messages.some(function (ae) {
              return wn(ae.meta[1][0].data) != 11006 && x_(ae.data, oe[1]);
            }) && f[oe[0]].deps.push(z.id);
          });
        });
      });
    }
  });
  for (
    var h = Ce.find(o, f[1].location), u = Ht(Wt(h.content)), d, p = 0;
    p < u.length;
    ++p
  ) {
    var x = u[p];
    x.id == 1 && (d = x);
  }
  var m = yr(ze(d.messages[0].data)[1][0].data);
  for (
    h = Ce.find(o, f[m].location), u = Ht(Wt(h.content)), p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  for (
    m = yr(ze(d.messages[0].data)[2][0].data),
      h = Ce.find(o, f[m].location),
      u = Ht(Wt(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  for (
    m = yr(ze(d.messages[0].data)[2][0].data),
      h = Ce.find(o, f[m].location),
      u = Ht(Wt(h.content)),
      p = 0;
    p < u.length;
    ++p
  )
    (x = u[p]), x.id == m && (d = x);
  var y = ze(d.messages[0].data);
  {
    (y[6][0].data = Se(n.e.r + 1)), (y[7][0].data = Se(n.e.c + 1));
    var F = yr(y[46][0].data),
      S = Ce.find(o, f[F].location),
      N = Ht(Wt(S.content));
    {
      for (var U = 0; U < N.length && N[U].id != F; ++U);
      if (N[U].id != F) throw 'Bad ColumnRowUIDMapArchive';
      var J = ze(N[U].messages[0].data);
      (J[1] = []), (J[2] = []), (J[3] = []);
      for (var O = 0; O <= n.e.c; ++O) {
        var b = [];
        (b[1] = b[2] = [{ type: 0, data: Se(O + 420690) }]),
          J[1].push({ type: 2, data: et(b) }),
          J[2].push({ type: 0, data: Se(O) }),
          J[3].push({ type: 0, data: Se(O) });
      }
      (J[4] = []), (J[5] = []), (J[6] = []);
      for (var I = 0; I <= n.e.r; ++I)
        (b = []),
          (b[1] = b[2] = [{ type: 0, data: Se(I + 726270) }]),
          J[4].push({ type: 2, data: et(b) }),
          J[5].push({ type: 0, data: Se(I) }),
          J[6].push({ type: 0, data: Se(I) });
      N[U].messages[0].data = et(J);
    }
    (S.content = pn(dn(N))), (S.size = S.content.length), delete y[46];
    var G = ze(y[4][0].data);
    {
      G[7][0].data = Se(n.e.r + 1);
      var j = ze(G[1][0].data),
        K = yr(j[2][0].data);
      (S = Ce.find(o, f[K].location)), (N = Ht(Wt(S.content)));
      {
        if (N[0].id != K) throw 'Bad HeaderStorageBucket';
        var re = ze(N[0].messages[0].data);
        for (I = 0; I < a.length; ++I) {
          var _e = ze(re[2][0].data);
          (_e[1][0].data = Se(I)),
            (_e[4][0].data = Se(a[I].length)),
            (re[2][I] = { type: re[2][0].type, data: et(_e) });
        }
        N[0].messages[0].data = et(re);
      }
      (S.content = pn(dn(N))), (S.size = S.content.length);
      var ue = yr(G[2][0].data);
      (S = Ce.find(o, f[ue].location)), (N = Ht(Wt(S.content)));
      {
        if (N[0].id != ue) throw 'Bad HeaderStorageBucket';
        for (re = ze(N[0].messages[0].data), O = 0; O <= n.e.c; ++O)
          (_e = ze(re[2][0].data)),
            (_e[1][0].data = Se(O)),
            (_e[4][0].data = Se(n.e.r + 1)),
            (re[2][O] = { type: re[2][0].type, data: et(_e) });
        N[0].messages[0].data = et(re);
      }
      (S.content = pn(dn(N))), (S.size = S.content.length);
      var Me = yr(G[4][0].data);
      (function () {
        for (
          var B = Ce.find(o, f[Me].location), R = Ht(Wt(B.content)), C, z = 0;
          z < R.length;
          ++z
        ) {
          var se = R[z];
          se.id == Me && (C = se);
        }
        var oe = ze(C.messages[0].data);
        {
          oe[3] = [];
          var ae = [];
          s.forEach(function (fe, Re) {
            (ae[1] = [{ type: 0, data: Se(Re) }]),
              (ae[2] = [{ type: 0, data: Se(1) }]),
              (ae[3] = [{ type: 2, data: h_(fe) }]),
              oe[3].push({ type: 2, data: et(ae) });
          });
        }
        C.messages[0].data = et(oe);
        var V = dn(R),
          ce = pn(V);
        (B.content = ce), (B.size = B.content.length);
      })();
      var Oe = ze(G[3][0].data);
      {
        var Ze = Oe[1][0];
        delete Oe[2];
        var Ve = ze(Ze.data);
        {
          var mt = yr(Ve[2][0].data);
          (function () {
            for (
              var B = Ce.find(o, f[mt].location),
                R = Ht(Wt(B.content)),
                C,
                z = 0;
              z < R.length;
              ++z
            ) {
              var se = R[z];
              se.id == mt && (C = se);
            }
            var oe = ze(C.messages[0].data);
            {
              delete oe[6], delete Oe[7];
              var ae = new Uint8Array(oe[5][0].data);
              oe[5] = [];
              for (var V = 0, ce = 0; ce <= n.e.r; ++ce) {
                var fe = ze(ae);
                (V += v_(fe, a[ce], s)),
                  (fe[1][0].data = Se(ce)),
                  oe[5].push({ data: et(fe), type: 2 });
              }
              (oe[1] = [{ type: 0, data: Se(n.e.c + 1) }]),
                (oe[2] = [{ type: 0, data: Se(n.e.r + 1) }]),
                (oe[3] = [{ type: 0, data: Se(V) }]),
                (oe[4] = [{ type: 0, data: Se(n.e.r + 1) }]);
            }
            C.messages[0].data = et(oe);
            var Re = dn(R),
              le = pn(Re);
            (B.content = le), (B.size = B.content.length);
          })();
        }
        Ze.data = et(Ve);
      }
      G[3][0].data = et(Oe);
    }
    y[4][0].data = et(G);
  }
  d.messages[0].data = et(y);
  var st = dn(u),
    A = pn(st);
  return (h.content = A), (h.size = h.content.length), o;
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
function Z0(e) {
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
    ? $l(e, r)
    : r.bookType == 'numbers'
      ? m_(e, r)
      : r.bookType == 'xlsb'
        ? E_(e, r)
        : T_(e, r);
}
function E_(e, r) {
  (_n = 1024),
    e && !e.SSF && (e.SSF = At(We)),
    e &&
      e.SSF &&
      (Fa(),
      ya(e.SSF),
      (r.revssf = Ca(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Yn
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = r.bookType == 'xlsb' ? 'bin' : 'xml',
    n = Ol.indexOf(r.bookType) > -1,
    i = nl();
  Z0((r = r || {}));
  var a = B0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    Br(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(a, s, fl(e.Props, r)),
    i.coreprops.push(s),
    Ae(r.rels, 2, s, ge.CORE_PROPS),
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
      ve(a, s, ll(e.Props)),
      i.extprops.push(s),
      Ae(r.rels, 3, s, ge.EXT_PROPS),
      e.Custprops !== e.Props &&
        at(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        ve(a, s, cl(e.Custprops)),
        i.custprops.push(s),
        Ae(r.rels, 4, s, ge.CUST_PROPS)),
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
          ve(a, s, Sm(f - 1, s, r, e, c)),
          i.sheets.push(s),
          Ae(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, ge.WS[0]);
    }
    if (h) {
      var d = h['!comments'],
        p = !1,
        x = '';
      d &&
        d.length > 0 &&
        ((x = 'xl/comments' + f + '.' + t),
        ve(a, x, Fm(d, x)),
        i.comments.push(x),
        Ae(c, -1, '../comments' + f + '.' + t, ge.CMNT),
        (p = !0)),
        h['!legacy'] &&
          p &&
          ve(a, 'xl/drawings/vmlDrawing' + f + '.vml', Fl(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    c['!id'].rId1 && ve(a, al(s), En(c));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      ve(a, s, ym(r.Strings, s, r)),
      i.strs.push(s),
      Ae(r.wbrels, -1, 'sharedStrings.' + t, ge.SST)),
    (s = 'xl/workbook.' + t),
    ve(a, s, wm(e, s)),
    i.workbooks.push(s),
    Ae(r.rels, 1, s, ge.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(a, s, Al(e.Themes, r)),
    i.themes.push(s),
    Ae(r.wbrels, -1, 'theme/theme1.xml', ge.THEME),
    (s = 'xl/styles.' + t),
    ve(a, s, Am(e, s, r)),
    i.styles.push(s),
    Ae(r.wbrels, -1, 'styles.' + t, ge.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(a, s, e.vbaraw),
      i.vba.push(s),
      Ae(r.wbrels, -1, 'vbaProject.bin', ge.VBA)),
    (s = 'xl/metadata.' + t),
    ve(a, s, Cm(s)),
    i.metadata.push(s),
    Ae(r.wbrels, -1, 'metadata.' + t, ge.XLMETA),
    ve(a, '[Content_Types].xml', il(i, r)),
    ve(a, '_rels/.rels', En(r.rels)),
    ve(a, 'xl/_rels/workbook.' + t + '.rels', En(r.wbrels)),
    delete r.revssf,
    delete r.ssf,
    a
  );
}
function T_(e, r) {
  (_n = 1024),
    e && !e.SSF && (e.SSF = At(We)),
    e &&
      e.SSF &&
      (Fa(),
      ya(e.SSF),
      (r.revssf = Ca(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.rels = {}),
    (r.wbrels = {}),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    Yn
      ? (r.revStrings = new Map())
      : ((r.revStrings = {}), (r.revStrings.foo = []), delete r.revStrings.foo);
  var t = 'xml',
    n = Ol.indexOf(r.bookType) > -1,
    i = nl();
  Z0((r = r || {}));
  var a = B0(),
    s = '',
    f = 0;
  if (
    ((r.cellXfs = []),
    Br(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    ve(a, s, fl(e.Props, r)),
    i.coreprops.push(s),
    Ae(r.rels, 2, s, ge.CORE_PROPS),
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
    ve(a, s, ll(e.Props)),
    i.extprops.push(s),
    Ae(r.rels, 3, s, ge.EXT_PROPS),
    e.Custprops !== e.Props &&
      at(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      ve(a, s, cl(e.Custprops)),
      i.custprops.push(s),
      Ae(r.rels, 4, s, ge.CUST_PROPS));
  var c = ['SheetJ5'];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var h = { '!id': {} },
      u = e.Sheets[e.SheetNames[f - 1]],
      d = (u || {})['!type'] || 'sheet';
    switch (d) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + t),
          ve(a, s, Ml(f - 1, r, e, h)),
          i.sheets.push(s),
          Ae(r.wbrels, -1, 'worksheets/sheet' + f + '.' + t, ge.WS[0]);
    }
    if (u) {
      var p = u['!comments'],
        x = !1,
        m = '';
      if (p && p.length > 0) {
        var y = !1;
        p.forEach(function (F) {
          F[1].forEach(function (S) {
            S.T == !0 && (y = !0);
          });
        }),
          y &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + t),
            ve(a, m, Zd(p, c, r)),
            i.threadedcomments.push(m),
            Ae(
              h,
              -1,
              '../threadedComments/threadedComment' + f + '.' + t,
              ge.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + t),
          ve(a, m, Cl(p)),
          i.comments.push(m),
          Ae(h, -1, '../comments' + f + '.' + t, ge.CMNT),
          (x = !0);
      }
      u['!legacy'] &&
        x &&
        ve(a, 'xl/drawings/vmlDrawing' + f + '.vml', Fl(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    h['!id'].rId1 && ve(a, al(s), En(h));
  }
  return (
    r.Strings != null &&
      r.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + t),
      ve(a, s, _l(r.Strings, r)),
      i.strs.push(s),
      Ae(r.wbrels, -1, 'sharedStrings.' + t, ge.SST)),
    (s = 'xl/workbook.' + t),
    ve(a, s, Hl(e)),
    i.workbooks.push(s),
    Ae(r.rels, 1, s, ge.WB),
    (s = 'xl/theme/theme1.xml'),
    ve(a, s, Al(e.Themes, r)),
    i.themes.push(s),
    Ae(r.wbrels, -1, 'theme/theme1.xml', ge.THEME),
    (s = 'xl/styles.' + t),
    ve(a, s, wl(e, r)),
    i.styles.push(s),
    Ae(r.wbrels, -1, 'styles.' + t, ge.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      ve(a, s, e.vbaraw),
      i.vba.push(s),
      Ae(r.wbrels, -1, 'vbaProject.bin', ge.VBA)),
    (s = 'xl/metadata.' + t),
    ve(a, s, yl()),
    i.metadata.push(s),
    Ae(r.wbrels, -1, 'metadata.' + t, ge.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      ve(a, s, Qd(c)),
      i.people.push(s),
      Ae(r.wbrels, -1, 'persons/person.xml', ge.PEOPLE)),
    ve(a, '[Content_Types].xml', il(i, r)),
    ve(a, '_rels/.rels', En(r.rels)),
    ve(a, 'xl/_rels/workbook.' + t + '.rels', En(r.wbrels)),
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
      t = gr(e.slice(0, 12));
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
function zl(e, r) {
  switch (r.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      r.type = '';
      break;
    case 'file':
      return xi(r.file, Ce.write(e, { type: Te ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + r.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
  return Ce.write(e, r);
}
function S_(e, r) {
  var t = At(r || {}),
    n = g_(e, t);
  return A_(n, t);
}
function A_(e, r) {
  var t = {},
    n = Te ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
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
    ? Ce.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[t.type] || t.type,
        compression: !!r.compression,
      })
    : e.generate(t);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (r.type == 'binary' || r.type == 'base64') return i;
    i = new Uint8Array(Aa(i));
  }
  return r.password && typeof encrypt_agile < 'u'
    ? zl(encrypt_agile(i, r.password), r)
    : r.type === 'file'
      ? xi(r.file, i)
      : r.type == 'string'
        ? Xn(i)
        : i;
}
function y_(e, r) {
  var t = r || {},
    n = Wm(e, t);
  return zl(n, t);
}
function ar(e, r, t) {
  t || (t = '');
  var n = t + e;
  switch (r.type) {
    case 'base64':
      return ti(ni(n));
    case 'binary':
      return ni(n);
    case 'string':
      return e;
    case 'file':
      return xi(r.file, n, 'utf8');
    case 'buffer':
      return Te
        ? wr(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : ar(n, { type: 'binary' })
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
      return ti(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return xi(r.file, e, 'binary');
    case 'buffer':
      return Te
        ? wr(e, 'binary')
        : e.split('').map(function (t) {
            return t.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + r.type);
}
function ki(e, r) {
  switch (r.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var t = '', n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
      return r.type == 'base64' ? ti(t) : r.type == 'string' ? Xn(t) : t;
    case 'file':
      return xi(r.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + r.type);
  }
}
function Kl(e, r) {
  e1(), um(e);
  var t = At(r || {});
  if (
    (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)), t.type == 'array')
  ) {
    t.type = 'binary';
    var n = Kl(e, t);
    return (t.type = 'array'), Aa(n);
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
      return ar(Um(e, t), t);
    case 'slk':
    case 'sylk':
      return ar(od.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'htm':
    case 'html':
      return ar(Gl(e.Sheets[e.SheetNames[i]], t), t);
    case 'txt':
      return F_(Yl(e.Sheets[e.SheetNames[i]], t), t);
    case 'csv':
      return ar(Q0(e.Sheets[e.SheetNames[i]], t), t, '\uFEFF');
    case 'dif':
      return ar(ld.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'dbf':
      return ki(fd.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'prn':
      return ar(cd.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'rtf':
      return ar(md.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'eth':
      return ar(ml.from_sheet(e.Sheets[e.SheetNames[i]], t), t);
    case 'fods':
      return ar($l(e, t), t);
    case 'wk1':
      return ki(af.sheet_to_wk1(e.Sheets[e.SheetNames[i]], t), t);
    case 'wk3':
      return ki(af.book_to_wk3(e, t), t);
    case 'biff2':
      t.biff || (t.biff = 2);
    case 'biff3':
      t.biff || (t.biff = 3);
    case 'biff4':
      return t.biff || (t.biff = 4), ki(Vl(e, t), t);
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
  return (n.type = 'file'), (n.file = r), C_(n), Kl(e, n);
}
function R_(e, r, t, n, i, a, s, f) {
  var l = it(t),
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
    for (var d = r.s.c; d <= r.e.c; ++d) {
      var p = s ? e[t][d] : e[n[d] + l];
      if (p === void 0 || p.t === void 0) {
        if (o === void 0) continue;
        a[d] != null && (u[a[d]] = o);
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
          if (p.t == 'e' && x === null) u[a[d]] = null;
          else if (o !== void 0) u[a[d]] = o;
          else if (c && x === null) u[a[d]] = null;
          else continue;
        else
          u[a[d]] =
            c && (p.t !== 'n' || (p.t === 'n' && f.rawNumbers !== !1))
              ? x
              : Er(p, x, f);
        x != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function la(e, r) {
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
      l = De(c);
      break;
    case 'number':
      (l = De(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var h = it(l.s.r),
    u = [],
    d = [],
    p = 0,
    x = 0,
    m = Array.isArray(e),
    y = l.s.r,
    F = 0,
    S = {};
  m && !e[y] && (e[y] = []);
  var N = (o.skipHidden && e['!cols']) || [],
    U = (o.skipHidden && e['!rows']) || [];
  for (F = l.s.c; F <= l.e.c; ++F)
    if (!(N[F] || {}).hidden)
      switch (((u[F] = lt(F)), (t = m ? e[y][F] : e[u[F] + h]), n)) {
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
            (f = s = Er(t, null, o)),
            (x = S[s] || 0),
            !x)
          )
            S[s] = 1;
          else {
            do f = s + '_' + x++;
            while (S[f]);
            (S[s] = x), (S[f] = 1);
          }
          a[F] = f;
      }
  for (y = l.s.r + i; y <= l.e.r; ++y)
    if (!(U[y] || {}).hidden) {
      var J = R_(e, l, y, u, n, a, m, o);
      (J.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (d[p++] = J.row);
    }
  return (d.length = p), d;
}
var xf = /"/g;
function N_(e, r, t, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', h = it(t), u = r.s.c; u <= r.e.c; ++u)
    if (n[u]) {
      var d = f.dense ? (e[t] || [])[u] : e[n[u] + h];
      if (d == null) c = '';
      else if (d.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && d.t == 'n' ? d.v : Er(d, null, f)));
        for (var p = 0, x = 0; p !== c.length; ++p)
          if (
            (x = c.charCodeAt(p)) === i ||
            x === a ||
            x === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(xf, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        d.f != null && !d.F
          ? ((l = !1),
            (c = '=' + d.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(xf, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function Q0(e, r) {
  var t = [],
    n = r ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = De(e['!ref']),
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
      d = (n.skipHidden && e['!rows']) || [],
      p = i.s.c;
    p <= i.e.c;
    ++p
  )
    (u[p] || {}).hidden || (h[p] = lt(p));
  for (var x = 0, m = i.s.r; m <= i.e.r; ++m)
    (d[m] || {}).hidden ||
      ((c = N_(e, i, m, h, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && t.push((x++ ? f : '') + c)));
  return delete n.dense, t.join('');
}
function Yl(e, r) {
  r || (r = {}),
    (r.FS = '	'),
    (r.RS = `
`);
  var t = Q0(e, r);
  return t;
}
function k_(e) {
  var r = '',
    t,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = De(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = lt(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = it(c), f = i.s.c; f <= i.e.c; ++f)
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
function ql(e, r, t) {
  var n = t || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? qe(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + r.length - 1 + i } };
  if (a['!ref']) {
    var h = De(a['!ref']);
    (c.e.c = Math.max(c.e.c, h.e.c)),
      (c.e.r = Math.max(c.e.r, h.e.r)),
      s == -1 && ((s = h.e.r + 1), (c.e.r = s + r.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = r.length - 1 + i));
  var u = n.header || [],
    d = 0;
  r.forEach(function (x, m) {
    at(x).forEach(function (y) {
      (d = u.indexOf(y)) == -1 && (u[(d = u.length)] = y);
      var F = x[y],
        S = 'z',
        N = '',
        U = Fe({ c: f + d, r: s + m + i });
      (o = si(a, U)),
        F && typeof F == 'object' && !(F instanceof Date)
          ? (a[U] = F)
          : (typeof F == 'number'
              ? (S = 'n')
              : typeof F == 'boolean'
                ? (S = 'b')
                : typeof F == 'string'
                  ? (S = 's')
                  : F instanceof Date
                    ? ((S = 'd'),
                      n.cellDates || ((S = 'n'), (F = St(F))),
                      (N = n.dateNF || We[14]))
                    : F === null && n.nullError && ((S = 'e'), (F = 0)),
            o
              ? ((o.t = S), (o.v = F), delete o.w, delete o.R, N && (o.z = N))
              : (a[U] = o = { t: S, v: F }),
            N && (o.z = N));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + u.length - 1));
  var p = it(s);
  if (i) for (d = 0; d < u.length; ++d) a[lt(d + f) + p] = { t: 's', v: u[d] };
  return (a['!ref'] = Xe(c)), a;
}
function D_(e, r) {
  return ql(null, e, r);
}
function si(e, r, t) {
  if (typeof r == 'string') {
    if (Array.isArray(e)) {
      var n = qe(r);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[r] || (e[r] = { t: 'z' });
  }
  return typeof r != 'number' ? si(e, Fe(r)) : si(e, Fe({ r, c: t || 0 }));
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
  if ((Ul(t), e.SheetNames.indexOf(t) >= 0))
    throw new Error('Worksheet with name |' + t + '| already exists!');
  return e.SheetNames.push(t), (e.Sheets[t] = r), t;
}
function B_(e, r, t) {
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
function M_(e, r) {
  return (e.z = r), e;
}
function Jl(e, r, t) {
  return r ? ((e.l = { Target: r }), t && (e.l.Tooltip = t)) : delete e.l, e;
}
function b_(e, r, t) {
  return Jl(e, '#' + r, t);
}
function U_(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || 'SheetJS' });
}
function H_(e, r, t, n) {
  for (
    var i = typeof r != 'string' ? r : De(r),
      a = typeof r == 'string' ? r : Xe(r),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = si(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = t), n && (l.D = !0));
    }
  return e;
}
var Ja = {
    encode_col: lt,
    encode_row: it,
    encode_cell: Fe,
    encode_range: Xe,
    decode_col: V0,
    decode_row: W0,
    split_cell: ex,
    decode_cell: qe,
    decode_range: It,
    format_cell: Er,
    sheet_add_aoa: Jo,
    sheet_add_json: ql,
    sheet_add_dom: jl,
    aoa_to_sheet: Nn,
    json_to_sheet: D_,
    table_to_sheet: Xl,
    table_to_book: l_,
    sheet_to_csv: Q0,
    sheet_to_txt: Yl,
    sheet_to_json: la,
    sheet_to_html: Gl,
    sheet_to_formulae: k_,
    sheet_to_row_object_array: la,
    sheet_get_cell: si,
    book_new: P_,
    book_append_sheet: L_,
    book_set_sheet_visibility: B_,
    cell_set_number_format: M_,
    cell_set_hyperlink: Jl,
    cell_set_internal_link: b_,
    cell_add_comment: U_,
    sheet_set_array_formula: H_,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  W_ = yt('<p class="status svelte-1mxn3n8">Loading inventory data...</p>'),
  V_ = yt('<p class="status error svelte-1mxn3n8"> </p>'),
  G_ = yt(
    '<p class="status svelte-1mxn3n8">No inventory items found matching your criteria.</p>',
  ),
  j_ = yt('<th class="svelte-1mxn3n8"> <!></th>'),
  X_ = yt(
    '<td class="svelte-1mxn3n8"><span class="cell-content svelte-1mxn3n8"> </span></td>',
  ),
  $_ = yt('<th class="svelte-1mxn3n8"> </th>'),
  z_ = yt(
    '<td class="svelte-1mxn3n8"><span class="cell-content svelte-1mxn3n8"> </span></td>',
  ),
  K_ = yt('<tr class="svelte-1mxn3n8"></tr>'),
  Y_ = yt(
    '<tr class="svelte-1mxn3n8"><td class="svelte-1mxn3n8"><div class="inner-scroll svelte-1mxn3n8"><table class="batch-table svelte-1mxn3n8"><thead class="svelte-1mxn3n8"><tr class="svelte-1mxn3n8"></tr></thead><tbody class="svelte-1mxn3n8"></tbody></table></div></td></tr>',
  ),
  q_ = yt(
    '<tr class="svelte-1mxn3n8"><td class="svelte-1mxn3n8"><button class="expand-btn svelte-1mxn3n8"> </button></td><!></tr> <!>',
    1,
  ),
  J_ = yt(
    '<div class="table-container svelte-1mxn3n8"><table class="svelte-1mxn3n8"><thead class="svelte-1mxn3n8"><tr><th class="svelte-1mxn3n8"></th><!></tr></thead><tbody class="svelte-1mxn3n8"></tbody></table></div>',
  ),
  Z_ = yt(
    '<div class="modal-backdrop svelte-1mxn3n8"><div class="modal svelte-1mxn3n8"><button class="close-btn svelte-1mxn3n8">×</button> <h4> </h4> <p> </p></div></div>',
  ),
  Q_ = yt(
    '<!> <div class="wrapper svelte-1mxn3n8"><div class="card svelte-1mxn3n8"><div class="header svelte-1mxn3n8"><h2>Inventory Master List</h2> <div class="controls svelte-1mxn3n8"><input placeholder="Search all fields..." class="search-input svelte-1mxn3n8"/> <button class="btn excel-btn svelte-1mxn3n8">Export Excel</button></div></div> <!></div></div> <!>',
    1,
  );
function eg(e, r) {
  T0(r, !1);
  const [t, n] = mu(),
    i = () => er(y, '$searchTerm', t),
    a = () => er(x, '$isLoading', t),
    s = () => er(p, '$rawInventoryItems', t),
    f = () => er(m, '$errorMessage', t),
    l = () => er(_e, '$processedInventory', t),
    o = () => er(F, '$sortItemGroupColumn', t),
    c = () => er(S, '$sortItemGroupDirection', t),
    h = () => er(N, '$expandedItemCodes', t),
    u = () => er(U, '$showModal', t),
    d = () => er(J, '$modalContent', t),
    p = nr([]),
    x = nr(!0),
    m = nr(''),
    y = nr(''),
    F = nr(null),
    S = nr('asc'),
    N = nr(new Set()),
    U = nr(!1),
    J = nr({ field: '', text: '' }),
    O = [
      { key: 'itemcode', label: 'Item Code', sortable: !0 },
      { key: 'itemname', label: 'Item Name', sortable: !0 },
      {
        key: 'total_stock_for_item',
        label: 'Total Stock',
        sortable: !0,
        type: 'number',
      },
      {
        key: 'min_stock_level',
        label: 'Min. Item Stock',
        sortable: !0,
        type: 'number',
      },
    ],
    b = [
      { key: 'batchcode', label: 'Batch Code' },
      {
        key: 'current_stock_in_batch',
        label: 'Stock in Batch',
        type: 'number',
      },
      {
        key: 'purchase_price_per_unit',
        label: 'Purchase Price',
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
  async function I() {
    var V, ce;
    x.set(!0), m.set('');
    try {
      const fe = await Ge.get('http://localhost:3000/api/master/all-inventory');
      fe.data && Array.isArray(fe.data)
        ? p.set(fe.data)
        : (p.set([]), m.set('Received invalid data format from server.'));
    } catch (fe) {
      p.set([]),
        m.set(
          `Failed to fetch inventory: ${fe.message || ((ce = (V = fe.response) == null ? void 0 : V.data) == null ? void 0 : ce.error) || 'Unknown error'}`,
        );
    } finally {
      x.set(!1);
    }
  }
  function G(V) {
    if (!V) return 'N/A';
    const ce = new Date(V);
    return isNaN(ce.getTime())
      ? V
      : ce.toLocaleDateString(void 0, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  }
  function j(V) {
    return V == null || isNaN(Number(V))
      ? 'N/A'
      : Number(V).toLocaleString(void 0, {
          style: 'currency',
          currency: 'INR',
        });
  }
  function K(V) {
    N.update((ce) => {
      const fe = new Set(ce);
      return fe.has(V) ? fe.delete(V) : fe.add(V), fe;
    });
  }
  function re(V) {
    F.update((ce) =>
      ce === V
        ? (S.update((fe) => (fe === 'asc' ? 'desc' : 'asc')), ce)
        : (S.set('asc'), V),
    );
  }
  const _e = du([p, y, F, S], ([V, ce, fe, Re]) => {
    let le = [...V];
    if (ce.trim()) {
      const ee = ce.toLowerCase();
      le = le.filter((pe) =>
        Object.values(pe).some((Ie) => String(Ie).toLowerCase().includes(ee)),
      );
    }
    const we = le.reduce((ee, pe) => {
      if (!pe.itemcode) return ee;
      ee[pe.itemcode] ||
        (ee[pe.itemcode] = {
          itemcode: pe.itemcode,
          itemname: pe.itemname,
          min_stock_level: pe.min_stock_level,
          total_stock_for_item: 0,
          batches: [],
        });
      const Ie = Number(pe.current_stock_in_batch);
      return (
        (ee[pe.itemcode].total_stock_for_item += isNaN(Ie) ? 0 : Ie),
        ee[pe.itemcode].batches.push(pe),
        ee
      );
    }, {});
    Object.values(we).forEach((ee) => {
      ee.batches.sort((pe, Ie) => {
        const be = new Date(pe.expiry).getTime(),
          Ue = new Date(Ie.expiry).getTime();
        return isNaN(be) && isNaN(Ue)
          ? 0
          : isNaN(be)
            ? 1
            : isNaN(Ue)
              ? -1
              : be - Ue;
      });
    });
    let Ee = Object.values(we);
    if (fe) {
      const ee = O.find((pe) => pe.key === fe);
      ee &&
        Ee.sort((pe, Ie) => {
          let be = pe[fe],
            Ue = Ie[fe];
          return (
            be == null && (be = Re === 'asc' ? 1 / 0 : -1 / 0),
            Ue == null && (Ue = Re === 'asc' ? 1 / 0 : -1 / 0),
            ee.type === 'number'
              ? ((be = Number(be) || 0),
                (Ue = Number(Ue) || 0),
                Re === 'asc' ? be - Ue : Ue - be)
              : Re === 'asc'
                ? String(be).localeCompare(String(Ue))
                : String(Ue).localeCompare(String(be))
          );
        });
    }
    return Ee;
  });
  function ue(V, ce) {
    J.set({ field: V, text: ce != null ? String(ce) : 'N/A' }), U.set(!0);
  }
  function Me() {
    let V = [];
    _e.subscribe((Re) => {
      Re.forEach((le) => {
        le.batches.forEach((we) => {
          V.push({
            'Item Code': le.itemcode,
            'Item Name': le.itemname,
            'Min. Stock Level (Item)': le.min_stock_level,
            'Total Stock (Item)': le.total_stock_for_item,
            'Batch Code': we.batchcode,
            'Stock in Batch': we.current_stock_in_batch,
            'Purchase Price': j(we.purchase_price_per_unit),
            'Purchase Date': G(we.datepurchase),
            'Expiry Date': G(we.expiry),
            Supplier: we.suppname,
            'Used For': we.itemused,
            'Desc 1': we.itemdesc1,
            'Desc 2': we.itemdesc2,
            'Desc 3': we.itemdesc3,
          });
        }),
          le.batches.length === 0 &&
            V.push({
              'Item Code': le.itemcode,
              'Item Name': le.itemname,
              'Min. Stock Level (Item)': le.min_stock_level,
              'Total Stock (Item)': le.total_stock_for_item,
            });
      });
    })();
    const ce = Ja.json_to_sheet(V),
      fe = Ja.book_new();
    Ja.book_append_sheet(fe, ce, 'InventoryData'),
      O_(fe, 'FullInventoryDetails.xlsx');
  }
  Xf(I), uu();
  var Oe = Q_(),
    Ze = is(Oe);
  Jh(Ze, {});
  var Ve = Ke(Ze, 2),
    mt = me(Ve),
    st = me(mt),
    A = Ke(me(st), 2),
    B = me(A),
    R = Ke(B, 2),
    C = Ke(st, 2);
  {
    var z = (V) => {
        var ce = W_();
        ut(V, ce);
      },
      se = (V, ce) => {
        {
          var fe = (le) => {
              var we = V_(),
                Ee = me(we);
              rr(() => xr(Ee, f())), ut(le, we);
            },
            Re = (le, we) => {
              {
                var Ee = (pe) => {
                    var Ie = G_();
                    ut(pe, Ie);
                  },
                  ee = (pe) => {
                    var Ie = J_(),
                      be = me(Ie),
                      Ue = me(be),
                      _i = me(Ue),
                      In = Ke(me(_i));
                    cn(
                      In,
                      1,
                      () => O,
                      Si,
                      (Kt, Qe) => {
                        var Yt = j_(),
                          Ft = me(Yt),
                          an = Ke(Ft);
                        {
                          var Mr = (Sr) => {
                            var br = Yc();
                            rr(() => xr(br, c() === 'asc' ? '▲' : '▼')),
                              ut(Sr, br);
                          };
                          ln(an, (Sr) => {
                            he(Qe).sortable && o() === he(Qe).key && Sr(Mr);
                          });
                        }
                        rr(() => xr(Ft, `${he(Qe).label ?? ''} `)),
                          Ar(
                            'click',
                            Yt,
                            () => he(Qe).sortable && re(he(Qe).key),
                          ),
                          ut(Kt, Yt);
                      },
                    );
                    var Pt = Ke(Ue);
                    cn(
                      Pt,
                      5,
                      l,
                      (Kt) => Kt.itemcode,
                      (Kt, Qe) => {
                        var Yt = q_(),
                          Ft = is(Yt),
                          an = me(Ft),
                          Mr = me(an),
                          Sr = me(Mr),
                          br = Ke(an);
                        cn(
                          br,
                          1,
                          () => O,
                          Si,
                          (qt, Jt) => {
                            var Ur = X_(),
                              Hr = me(Ur),
                              sn = me(Hr);
                            rr(
                              (Zt) => xr(sn, Zt),
                              [
                                () => {
                                  var Zt;
                                  return he(Jt).type === 'number'
                                    ? (Zt = he(Qe)[he(Jt).key]) == null
                                      ? void 0
                                      : Zt.toLocaleString()
                                    : (he(Qe)[he(Jt).key] ?? 'N/A');
                                },
                              ],
                              Di,
                            ),
                              Ar('click', Hr, () =>
                                ue(he(Jt).label, he(Qe)[he(Jt).key]),
                              ),
                              ut(qt, Ur);
                          },
                        );
                        var gi = Ke(Ft, 2);
                        {
                          var Ei = (qt) => {
                            var Jt = Y_(),
                              Ur = me(Jt),
                              Hr = me(Ur),
                              sn = me(Hr),
                              Zt = me(sn),
                              Da = me(Zt);
                            cn(
                              Da,
                              5,
                              () => b,
                              Si,
                              (Qt, ur) => {
                                var Wr = $_(),
                                  Pn = me(Wr);
                                rr(() => xr(Pn, he(ur).label)), ut(Qt, Wr);
                              },
                            );
                            var Ia = Ke(Zt);
                            cn(
                              Ia,
                              5,
                              () => he(Qe).batches,
                              (Qt) => Qt.batchcode,
                              (Qt, ur) => {
                                var Wr = K_();
                                cn(
                                  Wr,
                                  5,
                                  () => b,
                                  Si,
                                  (Pn, Ut) => {
                                    var Ti = z_(),
                                      wi = me(Ti),
                                      Pa = me(wi);
                                    rr(
                                      (fn) => xr(Pa, fn),
                                      [
                                        () => {
                                          var fn;
                                          return he(Ut).type === 'date'
                                            ? G(he(ur)[he(Ut).key])
                                            : he(Ut).type === 'currency'
                                              ? j(he(ur)[he(Ut).key])
                                              : he(Ut).type === 'number'
                                                ? (fn = he(ur)[he(Ut).key]) ==
                                                  null
                                                  ? void 0
                                                  : fn.toLocaleString()
                                                : (he(ur)[he(Ut).key] ?? 'N/A');
                                        },
                                      ],
                                      Di,
                                    ),
                                      Ar('click', wi, () =>
                                        ue(he(Ut).label, he(ur)[he(Ut).key]),
                                      ),
                                      ut(Pn, Ti);
                                  },
                                ),
                                  ut(Qt, Wr);
                              },
                            ),
                              rr(() => su(Ur, 'colspan', O.length + 1)),
                              ut(qt, Jt);
                          };
                          ln(gi, (qt) => {
                            h().has(he(Qe).itemcode) && qt(Ei);
                          });
                        }
                        rr(
                          (qt) => xr(Sr, qt),
                          [() => (h().has(he(Qe).itemcode) ? '−' : '+')],
                          Di,
                        ),
                          Ar('click', Mr, () => K(he(Qe).itemcode)),
                          ut(Kt, Yt);
                      },
                    ),
                      ut(pe, Ie);
                  };
                ln(
                  le,
                  (pe) => {
                    l().length === 0 ? pe(Ee) : pe(ee, !1);
                  },
                  we,
                );
              }
            };
          ln(
            V,
            (le) => {
              f() ? le(fe) : le(Re, !1);
            },
            ce,
          );
        }
      };
    ln(C, (V) => {
      a() && s().length === 0 ? V(z) : V(se, !1);
    });
  }
  var oe = Ke(Ve, 2);
  {
    var ae = (V) => {
      var ce = Z_(),
        fe = me(ce),
        Re = me(fe),
        le = Ke(Re, 2),
        we = me(le),
        Ee = Ke(le, 2),
        ee = me(Ee);
      rr(() => {
        xr(we, d().field), xr(ee, d().text);
      }),
        Ar('click', Re, () => U.set(!1)),
        Ar(
          'click',
          fe,
          cu(function (pe) {
            hu.call(this, r, pe);
          }),
        ),
        Ar('click', ce, () => U.set(!1)),
        ut(V, ce);
    };
    ln(oe, (V) => {
      u() && V(ae);
    });
  }
  lu(B, i, (V) => vu(y, V)), Ar('click', R, Me), ut(e, Oe), w0(), n();
}
qc(eg, { target: document.getElementById('app') });
