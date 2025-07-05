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
const u0 = !1;
var vs = Array.isArray,
  Bc = Array.prototype.indexOf,
  ms = Array.from,
  Sf = Object.defineProperty,
  Gn = Object.getOwnPropertyDescriptor,
  Mc = Object.getOwnPropertyDescriptors,
  Uc = Object.prototype,
  Hc = Array.prototype,
  Af = Object.getPrototypeOf,
  h0 = Object.isExtensible;
const Dr = () => {};
function Wc(e) {
  return e();
}
function Hi(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
const Xt = 2,
  yf = 4,
  ha = 8,
  _s = 16,
  Sr = 32,
  wn = 64,
  gs = 128,
  Mt = 256,
  Wi = 512,
  Kt = 1024,
  Er = 2048,
  Zr = 4096,
  vr = 8192,
  Es = 16384,
  Ff = 32768,
  Ts = 65536,
  d0 = 1 << 18,
  zc = 1 << 19,
  Cf = 1 << 20,
  es = 1 << 21,
  jn = Symbol('$state');
function Of(e) {
  return e === this.v;
}
function Rf(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == 'object') || typeof e == 'function';
}
function Df(e) {
  return !Rf(e, this.v);
}
function Vc(e) {
  throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function Gc() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function jc(e) {
  throw new Error('https://svelte.dev/e/effect_orphan');
}
function Xc() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Kc() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function qc() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function $c() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
let li = !1,
  Yc = !1;
function Jc() {
  li = !0;
}
const Zc = 1,
  Qc = 2,
  eu = 16,
  tu = 1,
  ru = 2,
  Ft = Symbol();
function nu(e) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
let Ke = null;
function x0(e) {
  Ke = e;
}
function ws(e, t = !1, r) {
  var n = (Ke = {
    p: Ke,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null,
  });
  li && !t && (Ke.l = { s: null, u: null, r1: [], r2: Qn(!1) }),
    Fs(() => {
      n.d = !0;
    });
}
function Ss(e) {
  const t = Ke;
  if (t !== null) {
    const s = t.e;
    if (s !== null) {
      var r = Pe,
        n = ye;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          kr(a.effect), lr(a.reaction), Hf(a.fn);
        }
      } finally {
        kr(r), lr(n);
      }
    }
    (Ke = t.p), (t.m = !0);
  }
  return {};
}
function ci() {
  return !li || (Ke !== null && Ke.l === null);
}
function Wn(e) {
  if (typeof e != 'object' || e === null || jn in e) return e;
  const t = Af(e);
  if (t !== Uc && t !== Hc) return e;
  var r = new Map(),
    n = vs(e),
    i = pr(0),
    a = ye,
    s = (f) => {
      var l = ye;
      lr(a);
      var o = f();
      return lr(l), o;
    };
  return (
    n && r.set('length', pr(e.length)),
    new Proxy(e, {
      defineProperty(f, l, o) {
        (!('value' in o) ||
          o.configurable === !1 ||
          o.enumerable === !1 ||
          o.writable === !1) &&
          Kc();
        var c = r.get(l);
        return (
          c === void 0
            ? (c = s(() => {
                var h = pr(o.value);
                return r.set(l, h), h;
              }))
            : oe(c, o.value, !0),
          !0
        );
      },
      deleteProperty(f, l) {
        var o = r.get(l);
        if (o === void 0) {
          if (l in f) {
            const u = s(() => pr(Ft));
            r.set(l, u), Ua(i);
          }
        } else {
          if (n && typeof l == 'string') {
            var c = r.get('length'),
              h = Number(l);
            Number.isInteger(h) && h < c.v && oe(c, h);
          }
          oe(o, Ft), Ua(i);
        }
        return !0;
      },
      get(f, l, o) {
        if (l === jn) return e;
        var c = r.get(l),
          h = l in f;
        if (
          (c === void 0 &&
            (!h || Gn(f, l)?.writable) &&
            ((c = s(() => {
              var x = Wn(h ? f[l] : Ft),
                v = pr(x);
              return v;
            })),
            r.set(l, c)),
          c !== void 0)
        ) {
          var u = Z(c);
          return u === Ft ? void 0 : u;
        }
        return Reflect.get(f, l, o);
      },
      getOwnPropertyDescriptor(f, l) {
        var o = Reflect.getOwnPropertyDescriptor(f, l);
        if (o && 'value' in o) {
          var c = r.get(l);
          c && (o.value = Z(c));
        } else if (o === void 0) {
          var h = r.get(l),
            u = h?.v;
          if (h !== void 0 && u !== Ft)
            return { enumerable: !0, configurable: !0, value: u, writable: !0 };
        }
        return o;
      },
      has(f, l) {
        if (l === jn) return !0;
        var o = r.get(l),
          c = (o !== void 0 && o.v !== Ft) || Reflect.has(f, l);
        if (o !== void 0 || (Pe !== null && (!c || Gn(f, l)?.writable))) {
          o === void 0 &&
            ((o = s(() => {
              var u = c ? Wn(f[l]) : Ft,
                x = pr(u);
              return x;
            })),
            r.set(l, o));
          var h = Z(o);
          if (h === Ft) return !1;
        }
        return c;
      },
      set(f, l, o, c) {
        var h = r.get(l),
          u = l in f;
        if (n && l === 'length')
          for (var x = o; x < h.v; x += 1) {
            var v = r.get(x + '');
            v !== void 0
              ? oe(v, Ft)
              : x in f && ((v = s(() => pr(Ft))), r.set(x + '', v));
          }
        if (h === void 0)
          (!u || Gn(f, l)?.writable) &&
            ((h = s(() => pr(void 0))), oe(h, Wn(o)), r.set(l, h));
        else {
          u = h.v !== Ft;
          var d = s(() => Wn(o));
          oe(h, d);
        }
        var m = Reflect.getOwnPropertyDescriptor(f, l);
        if ((m?.set && m.set.call(c, o), !u)) {
          if (n && typeof l == 'string') {
            var S = r.get('length'),
              y = Number(l);
            Number.isInteger(y) && y >= S.v && oe(S, y + 1);
          }
          Ua(i);
        }
        return !0;
      },
      ownKeys(f) {
        Z(i);
        var l = Reflect.ownKeys(f).filter((h) => {
          var u = r.get(h);
          return u === void 0 || u.v !== Ft;
        });
        for (var [o, c] of r) c.v !== Ft && !(o in f) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        qc();
      },
    })
  );
}
function Ua(e, t = 1) {
  oe(e, e.v + t);
}
function As(e) {
  var t = Xt | Er,
    r = ye !== null && (ye.f & Xt) !== 0 ? ye : null;
  return (
    Pe === null || (r !== null && (r.f & Mt) !== 0) ? (t |= Mt) : (Pe.f |= Cf),
    {
      ctx: Ke,
      deps: null,
      effects: null,
      equals: Of,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: r ?? Pe,
    }
  );
}
function Li(e) {
  const t = As(e);
  return (t.equals = Df), t;
}
function Nf(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1) Nr(t[r]);
  }
}
function iu(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Xt) === 0) return t;
    t = t.parent;
  }
  return null;
}
function kf(e) {
  var t,
    r = Pe;
  kr(iu(e));
  try {
    Nf(e), (t = Jf(e));
  } finally {
    kr(r);
  }
  return t;
}
function If(e) {
  var t = kf(e);
  if ((e.equals(t) || ((e.v = t), (e.wv = $f())), !An)) {
    var r = (Cr || (e.f & Mt) !== 0) && e.deps !== null ? Zr : Kt;
    cr(e, r);
  }
}
const Zn = new Map();
function Qn(e, t) {
  var r = { f: 0, v: e, reactions: null, equals: Of, rv: 0, wv: 0 };
  return r;
}
function pr(e, t) {
  const r = Qn(e);
  return vu(r), r;
}
function Ue(e, t = !1, r = !0) {
  const n = Qn(e);
  return (
    t || (n.equals = Df),
    li && r && Ke !== null && Ke.l !== null && (Ke.l.s ??= []).push(n),
    n
  );
}
function oe(e, t, r = !1) {
  ye !== null &&
    (!or || (ye.f & d0) !== 0) &&
    ci() &&
    (ye.f & (Xt | _s | d0)) !== 0 &&
    !(jt?.[1].includes(e) && jt[0] === ye) &&
    $c();
  let n = r ? Wn(t) : t;
  return Pf(e, n);
}
function Pf(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    An ? Zn.set(e, t) : Zn.set(e, r),
      (e.v = t),
      (e.f & Xt) !== 0 &&
        ((e.f & Er) !== 0 && kf(e), cr(e, (e.f & Mt) === 0 ? Kt : Zr)),
      (e.wv = $f()),
      Lf(e, Er),
      ci() &&
        Pe !== null &&
        (Pe.f & Kt) !== 0 &&
        (Pe.f & (Sr | wn)) === 0 &&
        (Vt === null ? mu([e]) : Vt.push(e));
  }
  return t;
}
function Lf(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = ci(), i = r.length, a = 0; a < i; a++) {
      var s = r[a],
        f = s.f;
      (f & Er) === 0 &&
        ((!n && s === Pe) ||
          (cr(s, t),
          (f & (Kt | Mt)) !== 0 && ((f & Xt) !== 0 ? Lf(s, Zr) : Ds(s))));
    }
}
let au = !1;
var p0, bf, Bf, Mf;
function su() {
  if (p0 === void 0) {
    (p0 = window), (bf = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      t = Node.prototype,
      r = Text.prototype;
    (Bf = Gn(t, 'firstChild').get),
      (Mf = Gn(t, 'nextSibling').get),
      h0(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      h0(r) && (r.__t = void 0);
  }
}
function ys(e = '') {
  return document.createTextNode(e);
}
function zi(e) {
  return Bf.call(e);
}
function da(e) {
  return Mf.call(e);
}
function ve(e, t) {
  return zi(e);
}
function v0(e, t) {
  {
    var r = zi(e);
    return r instanceof Comment && r.data === '' ? da(r) : r;
  }
}
function de(e, t = 1, r = !1) {
  let n = e;
  for (; t--; ) n = da(n);
  return n;
}
function fu(e) {
  e.textContent = '';
}
function Uf(e) {
  Pe === null && ye === null && jc(),
    ye !== null && (ye.f & Mt) !== 0 && Pe === null && Gc(),
    An && Vc();
}
function ou(e, t) {
  var r = t.last;
  r === null
    ? (t.last = t.first = e)
    : ((r.next = e), (e.prev = r), (t.last = e));
}
function Sn(e, t, r, n = !0) {
  var i = Pe,
    a = {
      ctx: Ke,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | Er,
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
      Rs(a), (a.f |= Ff);
    } catch (l) {
      throw (Nr(a), l);
    }
  else t !== null && Ds(a);
  var s =
    r &&
    a.deps === null &&
    a.first === null &&
    a.nodes_start === null &&
    a.teardown === null &&
    (a.f & (Cf | gs)) === 0;
  if (!s && n && (i !== null && ou(a, i), ye !== null && (ye.f & Xt) !== 0)) {
    var f = ye;
    (f.effects ??= []).push(a);
  }
  return a;
}
function Fs(e) {
  const t = Sn(ha, null, !1);
  return cr(t, Kt), (t.teardown = e), t;
}
function ts(e) {
  Uf();
  var t = Pe !== null && (Pe.f & Sr) !== 0 && Ke !== null && !Ke.m;
  if (t) {
    var r = Ke;
    (r.e ??= []).push({ fn: e, effect: Pe, reaction: ye });
  } else {
    var n = Hf(e);
    return n;
  }
}
function lu(e) {
  return Uf(), Wf(e);
}
function cu(e) {
  const t = Sn(wn, e, !0);
  return (r = {}) =>
    new Promise((n) => {
      r.outro
        ? Vi(t, () => {
            Nr(t), n(void 0);
          })
        : (Nr(t), n(void 0));
    });
}
function Hf(e) {
  return Sn(yf, e, !1);
}
function Wf(e) {
  return Sn(ha, e, !0);
}
function Et(e, t = [], r = As) {
  const n = t.map(r);
  return Cs(() => e(...n.map(Z)));
}
function Cs(e, t = 0) {
  return Sn(ha | _s | t, e, !0);
}
function ei(e, t = !0) {
  return Sn(ha | Sr, e, !0, t);
}
function zf(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = An,
      n = ye;
    m0(!0), lr(null);
    try {
      t.call(null);
    } finally {
      m0(r), lr(n);
    }
  }
}
function Vf(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & wn) !== 0 ? (r.parent = null) : Nr(r, t), (r = n);
  }
}
function uu(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Sr) === 0 && Nr(t), (t = r);
  }
}
function Nr(e, t = !0) {
  var r = !1;
  (t || (e.f & zc) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (hu(e.nodes_start, e.nodes_end), (r = !0)),
    Vf(e, t && !r),
    qi(e, 0),
    cr(e, Es);
  var n = e.transitions;
  if (n !== null) for (const a of n) a.stop();
  zf(e);
  var i = e.parent;
  i !== null && i.first !== null && Gf(e),
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
function hu(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : da(e);
    e.remove(), (e = r);
  }
}
function Gf(e) {
  var t = e.parent,
    r = e.prev,
    n = e.next;
  r !== null && (r.next = n),
    n !== null && (n.prev = r),
    t !== null &&
      (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Vi(e, t) {
  var r = [];
  Os(e, r, !0),
    jf(r, () => {
      Nr(e), t && t();
    });
}
function jf(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e) i.out(n);
  } else t();
}
function Os(e, t, r) {
  if ((e.f & vr) === 0) {
    if (((e.f ^= vr), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var i = n.next,
        a = (n.f & Ts) !== 0 || (n.f & Sr) !== 0;
      Os(n, t, a ? r : !1), (n = i);
    }
  }
}
function Gi(e) {
  Xf(e, !0);
}
function Xf(e, t) {
  if ((e.f & vr) !== 0) {
    e.f ^= vr;
    for (var r = e.first; r !== null; ) {
      var n = r.next,
        i = (r.f & Ts) !== 0 || (r.f & Sr) !== 0;
      Xf(r, i ? t : !1), (r = n);
    }
    if (e.transitions !== null)
      for (const a of e.transitions) (a.is_global || t) && a.in();
  }
}
let ji = [];
function du() {
  var e = ji;
  (ji = []), Hi(e);
}
function xu(e) {
  ji.length === 0 && queueMicrotask(du), ji.push(e);
}
function pu(e) {
  var t = Pe;
  if ((t.f & Ff) === 0) {
    if ((t.f & gs) === 0) throw e;
    t.fn(e);
  } else Kf(e, t);
}
function Kf(e, t) {
  for (; t !== null; ) {
    if ((t.f & gs) !== 0)
      try {
        t.fn(e);
        return;
      } catch {}
    t = t.parent;
  }
  throw e;
}
let rs = !1,
  Xi = null,
  jr = !1,
  An = !1;
function m0(e) {
  An = e;
}
let bi = [];
let ye = null,
  or = !1;
function lr(e) {
  ye = e;
}
let Pe = null;
function kr(e) {
  Pe = e;
}
let jt = null;
function vu(e) {
  ye !== null && ye.f & es && (jt === null ? (jt = [ye, [e]]) : jt[1].push(e));
}
let Tt = null,
  It = 0,
  Vt = null;
function mu(e) {
  Vt = e;
}
let qf = 1,
  Ki = 0,
  Cr = !1;
function $f() {
  return ++qf;
}
function xa(e) {
  var t = e.f;
  if ((t & Er) !== 0) return !0;
  if ((t & Zr) !== 0) {
    var r = e.deps,
      n = (t & Mt) !== 0;
    if (r !== null) {
      var i,
        a,
        s = (t & Wi) !== 0,
        f = n && Pe !== null && !Cr,
        l = r.length;
      if (s || f) {
        var o = e,
          c = o.parent;
        for (i = 0; i < l; i++)
          (a = r[i]),
            (s || !a?.reactions?.includes(o)) && (a.reactions ??= []).push(o);
        s && (o.f ^= Wi), f && c !== null && (c.f & Mt) === 0 && (o.f ^= Mt);
      }
      for (i = 0; i < l; i++)
        if (((a = r[i]), xa(a) && If(a), a.wv > e.wv)) return !0;
    }
    (!n || (Pe !== null && !Cr)) && cr(e, Kt);
  }
  return !1;
}
function Yf(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (jt?.[1].includes(e) && jt[0] === ye) ||
        ((a.f & Xt) !== 0
          ? Yf(a, t, !1)
          : t === a && (r ? cr(a, Er) : (a.f & Kt) !== 0 && cr(a, Zr), Ds(a)));
    }
}
function Jf(e) {
  var t = Tt,
    r = It,
    n = Vt,
    i = ye,
    a = Cr,
    s = jt,
    f = Ke,
    l = or,
    o = e.f;
  (Tt = null),
    (It = 0),
    (Vt = null),
    (Cr = (o & Mt) !== 0 && (or || !jr || ye === null)),
    (ye = (o & (Sr | wn)) === 0 ? e : null),
    (jt = null),
    x0(e.ctx),
    (or = !1),
    Ki++,
    (e.f |= es);
  try {
    var c = (0, e.fn)(),
      h = e.deps;
    if (Tt !== null) {
      var u;
      if ((qi(e, It), h !== null && It > 0))
        for (h.length = It + Tt.length, u = 0; u < Tt.length; u++)
          h[It + u] = Tt[u];
      else e.deps = h = Tt;
      if (!Cr || ((o & Xt) !== 0 && e.reactions !== null))
        for (u = It; u < h.length; u++) (h[u].reactions ??= []).push(e);
    } else h !== null && It < h.length && (qi(e, It), (h.length = It));
    if (
      ci() &&
      Vt !== null &&
      !or &&
      h !== null &&
      (e.f & (Xt | Zr | Er)) === 0
    )
      for (u = 0; u < Vt.length; u++) Yf(Vt[u], e);
    return (
      i !== null &&
        i !== e &&
        (Ki++, Vt !== null && (n === null ? (n = Vt) : n.push(...Vt))),
      c
    );
  } catch (x) {
    pu(x);
  } finally {
    (Tt = t),
      (It = r),
      (Vt = n),
      (ye = i),
      (Cr = a),
      (jt = s),
      x0(f),
      (or = l),
      (e.f ^= es);
  }
}
function _u(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Bc.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? (r = t.reactions = null) : ((r[n] = r[i]), r.pop());
    }
  }
  r === null &&
    (t.f & Xt) !== 0 &&
    (Tt === null || !Tt.includes(t)) &&
    (cr(t, Zr), (t.f & (Mt | Wi)) === 0 && (t.f ^= Wi), Nf(t), qi(t, 0));
}
function qi(e, t) {
  var r = e.deps;
  if (r !== null) for (var n = t; n < r.length; n++) _u(e, r[n]);
}
function Rs(e) {
  var t = e.f;
  if ((t & Es) === 0) {
    cr(e, Kt);
    var r = Pe,
      n = jr;
    (Pe = e), (jr = !0);
    try {
      (t & _s) !== 0 ? uu(e) : Vf(e), zf(e);
      var i = Jf(e);
      (e.teardown = typeof i == 'function' ? i : null), (e.wv = qf);
      var a;
      u0 && Yc && (e.f & Er) !== 0 && e.deps;
    } finally {
      (jr = n), (Pe = r);
    }
  }
}
function gu() {
  try {
    Xc();
  } catch (e) {
    if (Xi !== null) Kf(e, Xi);
    else throw e;
  }
}
function Eu() {
  var e = jr;
  try {
    var t = 0;
    for (jr = !0; bi.length > 0; ) {
      t++ > 1e3 && gu();
      var r = bi,
        n = r.length;
      bi = [];
      for (var i = 0; i < n; i++) {
        var a = wu(r[i]);
        Tu(a);
      }
      Zn.clear();
    }
  } finally {
    (rs = !1), (jr = e), (Xi = null);
  }
}
function Tu(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      (n.f & (Es | vr)) === 0 &&
        xa(n) &&
        (Rs(n),
        n.deps === null &&
          n.first === null &&
          n.nodes_start === null &&
          (n.teardown === null ? Gf(n) : (n.fn = null)));
    }
}
function Ds(e) {
  rs || ((rs = !0), queueMicrotask(Eu));
  for (var t = (Xi = e); t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (wn | Sr)) !== 0) {
      if ((r & Kt) === 0) return;
      t.f ^= Kt;
    }
  }
  bi.push(t);
}
function wu(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f,
      i = (n & (Sr | wn)) !== 0,
      a = i && (n & Kt) !== 0;
    if (!a && (n & vr) === 0) {
      (n & yf) !== 0 ? t.push(r) : i ? (r.f ^= Kt) : xa(r) && Rs(r);
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
function Z(e) {
  var t = e.f,
    r = (t & Xt) !== 0;
  if (ye !== null && !or) {
    if (!jt?.[1].includes(e) || jt[0] !== ye) {
      var n = ye.deps;
      e.rv < Ki &&
        ((e.rv = Ki),
        Tt === null && n !== null && n[It] === e
          ? It++
          : Tt === null
            ? (Tt = [e])
            : (!Cr || !Tt.includes(e)) && Tt.push(e));
    }
  } else if (r && e.deps === null && e.effects === null) {
    var i = e,
      a = i.parent;
    a !== null && (a.f & Mt) === 0 && (i.f ^= Mt);
  }
  return r && ((i = e), xa(i) && If(i)), An && Zn.has(e) ? Zn.get(e) : e.v;
}
function pa(e) {
  var t = or;
  try {
    return (or = !0), e();
  } finally {
    or = t;
  }
}
const Su = -7169;
function cr(e, t) {
  e.f = (e.f & Su) | t;
}
function Au(e) {
  if (!(typeof e != 'object' || !e || e instanceof EventTarget)) {
    if (jn in e) ns(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == 'object' && r && jn in r && ns(r);
      }
  }
}
function ns(e, t = new Set()) {
  if (
    typeof e == 'object' &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !t.has(e)
  ) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        ns(e[n], t);
      } catch {}
    const r = Af(e);
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const n = Mc(r);
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
const yu = ['touchstart', 'touchmove'];
function Fu(e) {
  return yu.includes(e);
}
let _0 = !1;
function Cu() {
  _0 ||
    ((_0 = !0),
    document.addEventListener(
      'reset',
      (e) => {
        Promise.resolve().then(() => {
          if (!e.defaultPrevented)
            for (const t of e.target.elements) t.__on_r?.();
        });
      },
      { capture: !0 },
    ));
}
function Zf(e) {
  var t = ye,
    r = Pe;
  lr(null), kr(null);
  try {
    return e();
  } finally {
    lr(t), kr(r);
  }
}
function Ou(e, t, r, n = r) {
  e.addEventListener(t, () => Zf(r));
  const i = e.__on_r;
  i
    ? (e.__on_r = () => {
        i(), n(!0);
      })
    : (e.__on_r = () => n(!0)),
    Cu();
}
const Ru = new Set(),
  g0 = new Set();
function Du(e, t, r, n = {}) {
  function i(a) {
    if ((n.capture || zn.call(t, a), !a.cancelBubble))
      return Zf(() => r?.call(this, a));
  }
  return (
    e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
      ? xu(() => {
          t.addEventListener(e, i, n);
        })
      : t.addEventListener(e, i, n),
    i
  );
}
function Mn(e, t, r, n, i) {
  var a = { capture: n, passive: i },
    s = Du(e, t, r, a);
  (t === document.body ||
    t === window ||
    t === document ||
    t instanceof HTMLMediaElement) &&
    Fs(() => {
      t.removeEventListener(e, s, a);
    });
}
function zn(e) {
  var t = this,
    r = t.ownerDocument,
    n = e.type,
    i = e.composedPath?.() || [],
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
    Sf(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || r;
      },
    });
    var c = ye,
      h = Pe;
    lr(null), kr(null);
    try {
      for (var u, x = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var d = a['__' + n];
          if (d != null && (!a.disabled || e.target === a))
            if (vs(d)) {
              var [m, ...S] = d;
              m.apply(a, [e, ...S]);
            } else d.call(a, e);
        } catch (y) {
          u ? x.push(y) : (u = y);
        }
        if (e.cancelBubble || v === t || v === null) break;
        a = v;
      }
      if (u) {
        for (let y of x)
          queueMicrotask(() => {
            throw y;
          });
        throw u;
      }
    } finally {
      (e.__root = t), delete e.currentTarget, lr(c), kr(h);
    }
  }
}
function Nu(e) {
  var t = document.createElement('template');
  return (t.innerHTML = e.replaceAll('<!>', '<!---->')), t.content;
}
function is(e, t) {
  var r = Pe;
  r.nodes_start === null && ((r.nodes_start = e), (r.nodes_end = t));
}
function Ye(e, t) {
  var r = (t & tu) !== 0,
    n = (t & ru) !== 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    i === void 0 && ((i = Nu(a ? e : '<!>' + e)), r || (i = zi(i)));
    var s = n || bf ? document.importNode(i, !0) : i.cloneNode(!0);
    if (r) {
      var f = zi(s),
        l = s.lastChild;
      is(f, l);
    } else is(s, s);
    return s;
  };
}
function Jt(e = '') {
  {
    var t = ys(e + '');
    return is(t, t), t;
  }
}
function Se(e, t) {
  e !== null && e.before(t);
}
function gt(e, t) {
  var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
  r !== (e.__t ??= e.nodeValue) && ((e.__t = r), (e.nodeValue = r + ''));
}
function ku(e, t) {
  return Iu(e, t);
}
const fn = new Map();
function Iu(
  e,
  { target: t, anchor: r, props: n = {}, events: i, context: a, intro: s = !0 },
) {
  su();
  var f = new Set(),
    l = (h) => {
      for (var u = 0; u < h.length; u++) {
        var x = h[u];
        if (!f.has(x)) {
          f.add(x);
          var v = Fu(x);
          t.addEventListener(x, zn, { passive: v });
          var d = fn.get(x);
          d === void 0
            ? (document.addEventListener(x, zn, { passive: v }), fn.set(x, 1))
            : fn.set(x, d + 1);
        }
      }
    };
  l(ms(Ru)), g0.add(l);
  var o = void 0,
    c = cu(() => {
      var h = r ?? t.appendChild(ys());
      return (
        ei(() => {
          if (a) {
            ws({});
            var u = Ke;
            u.c = a;
          }
          i && (n.$$events = i), (o = e(h, n) || {}), a && Ss();
        }),
        () => {
          for (var u of f) {
            t.removeEventListener(u, zn);
            var x = fn.get(u);
            --x === 0
              ? (document.removeEventListener(u, zn), fn.delete(u))
              : fn.set(u, x);
          }
          g0.delete(l), h !== r && h.parentNode?.removeChild(h);
        }
      );
    });
  return Pu.set(o, c), o;
}
let Pu = new WeakMap();
function pt(e, t, [r, n] = [0, 0]) {
  var i = e,
    a = null,
    s = null,
    f = Ft,
    l = r > 0 ? Ts : 0,
    o = !1;
  const c = (u, x = !0) => {
      (o = !0), h(x, u);
    },
    h = (u, x) => {
      f !== (f = u) &&
        (f
          ? (a ? Gi(a) : x && (a = ei(() => x(i))),
            s &&
              Vi(s, () => {
                s = null;
              }))
          : (s ? Gi(s) : x && (s = ei(() => x(i, [r + 1, n]))),
            a &&
              Vi(a, () => {
                a = null;
              })));
    };
  Cs(() => {
    (o = !1), t(c), o || h(null, null);
  }, l);
}
function Lu(e, t, r, n) {
  for (var i = [], a = t.length, s = 0; s < a; s++) Os(t[s].e, i, !0);
  var f = a > 0 && i.length === 0 && r !== null;
  if (f) {
    var l = r.parentNode;
    fu(l), l.append(r), n.clear(), Fr(e, t[0].prev, t[a - 1].next);
  }
  jf(i, () => {
    for (var o = 0; o < a; o++) {
      var c = t[o];
      f || (n.delete(c.k), Fr(e, c.prev, c.next)), Nr(c.e, !f);
    }
  });
}
function bu(e, t, r, n, i, a = null) {
  var s = e,
    f = { flags: t, items: new Map(), first: null };
  {
    var l = e;
    s = l.appendChild(ys());
  }
  var o = null,
    c = !1,
    h = Li(() => {
      var u = r();
      return vs(u) ? u : u == null ? [] : ms(u);
    });
  Cs(() => {
    var u = Z(h),
      x = u.length;
    (c && x === 0) ||
      ((c = x === 0),
      Bu(u, f, s, i, t, n, r),
      a !== null &&
        (x === 0
          ? o
            ? Gi(o)
            : (o = ei(() => a(s)))
          : o !== null &&
            Vi(o, () => {
              o = null;
            })),
      Z(h));
  });
}
function Bu(e, t, r, n, i, a, s) {
  var f = e.length,
    l = t.items,
    o = t.first,
    c = o,
    h,
    u = null,
    x = [],
    v = [],
    d,
    m,
    S,
    y;
  for (y = 0; y < f; y += 1) {
    if (((d = e[y]), (m = a(d, y)), (S = l.get(m)), S === void 0)) {
      var F = c ? c.e.nodes_start : r;
      (u = Uu(F, t, u, u === null ? t.first : u.next, d, m, y, n, i, s)),
        l.set(m, u),
        (x = []),
        (v = []),
        (c = u.next);
      continue;
    }
    if ((Mu(S, d, y), (S.e.f & vr) !== 0 && Gi(S.e), S !== c)) {
      if (h !== void 0 && h.has(S)) {
        if (x.length < v.length) {
          var k = v[0],
            z;
          u = k.prev;
          var J = x[0],
            O = x[x.length - 1];
          for (z = 0; z < x.length; z += 1) E0(x[z], k, r);
          for (z = 0; z < v.length; z += 1) h.delete(v[z]);
          Fr(t, J.prev, O.next),
            Fr(t, u, J),
            Fr(t, O, k),
            (c = k),
            (u = O),
            (y -= 1),
            (x = []),
            (v = []);
        } else
          h.delete(S),
            E0(S, c, r),
            Fr(t, S.prev, S.next),
            Fr(t, S, u === null ? t.first : u.next),
            Fr(t, u, S),
            (u = S);
        continue;
      }
      for (x = [], v = []; c !== null && c.k !== m; )
        (c.e.f & vr) === 0 && (h ??= new Set()).add(c), v.push(c), (c = c.next);
      if (c === null) continue;
      S = c;
    }
    x.push(S), (u = S), (c = S.next);
  }
  if (c !== null || h !== void 0) {
    for (var H = h === void 0 ? [] : ms(h); c !== null; )
      (c.e.f & vr) === 0 && H.push(c), (c = c.next);
    var I = H.length;
    if (I > 0) {
      var V = f === 0 ? r : null;
      Lu(t, H, V, l);
    }
  }
  (Pe.first = t.first && t.first.e), (Pe.last = u && u.e);
}
function Mu(e, t, r, n) {
  Pf(e.v, t), (e.i = r);
}
function Uu(e, t, r, n, i, a, s, f, l, o) {
  var c = (l & Zc) !== 0,
    h = (l & eu) === 0,
    u = c ? (h ? Ue(i, !1, !1) : Qn(i)) : i,
    x = (l & Qc) === 0 ? s : Qn(s),
    v = { i: x, v: u, k: a, a: null, e: null, prev: r, next: n };
  try {
    return (
      (v.e = ei(() => f(e, u, x, o), au)),
      (v.e.prev = r && r.e),
      (v.e.next = n && n.e),
      r === null ? (t.first = v) : ((r.next = v), (r.e.next = v.e)),
      n !== null && ((n.prev = v), (n.e.prev = v.e)),
      v
    );
  } finally {
  }
}
function E0(e, t, r) {
  for (
    var n = e.next ? e.next.e.nodes_start : r,
      i = t ? t.e.nodes_start : r,
      a = e.e.nodes_start;
    a !== n;

  ) {
    var s = da(a);
    i.before(a), (a = s);
  }
}
function Fr(e, t, r) {
  t === null ? (e.first = r) : ((t.next = r), (t.e.next = r && r.e)),
    r !== null && ((r.prev = t), (r.e.prev = t && t.e));
}
const T0 = [
  ...` 	
\r\f \v\uFEFF`,
];
function Hu(e, t, r) {
  var n = '' + e;
  if (r) {
    for (var i in r)
      if (r[i]) n = n ? n + ' ' + i : i;
      else if (n.length)
        for (var a = i.length, s = 0; (s = n.indexOf(i, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || T0.includes(n[s - 1])) &&
          (f === n.length || T0.includes(n[f]))
            ? (n = (s === 0 ? '' : n.substring(0, s)) + n.substring(f + 1))
            : (s = f);
        }
  }
  return n === '' ? null : n;
}
function on(e, t, r, n, i, a) {
  var s = e.__className;
  if (s !== r || s === void 0) {
    var f = Hu(r, n, a);
    f == null ? e.removeAttribute('class') : (e.className = f),
      (e.__className = r);
  } else if (a && i !== a)
    for (var l in a) {
      var o = !!a[l];
      (i == null || o !== !!i[l]) && e.classList.toggle(l, o);
    }
  return a;
}
function Ve(e, t, r = t) {
  var n = ci();
  Ou(e, 'input', (i) => {
    var a = i ? e.defaultValue : e.value;
    if (((a = Ha(e) ? Wa(a) : a), r(a), n && a !== (a = t()))) {
      var s = e.selectionStart,
        f = e.selectionEnd;
      (e.value = a ?? ''),
        f !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(f, e.value.length)));
    }
  }),
    pa(t) == null && e.value && r(Ha(e) ? Wa(e.value) : e.value),
    Wf(() => {
      var i = t();
      (Ha(e) && i === Wa(e.value)) ||
        (e.type === 'date' && !i && !e.value) ||
        (i !== e.value && (e.value = i ?? ''));
    });
}
function Ha(e) {
  var t = e.type;
  return t === 'number' || t === 'range';
}
function Wa(e) {
  return e === '' ? null : +e;
}
function Wu(e) {
  return function (...t) {
    var r = t[0];
    return r.preventDefault(), e?.apply(this, t);
  };
}
function zu(e = !1) {
  const t = Ke,
    r = t.l.u;
  if (!r) return;
  let n = () => Au(t.s);
  if (e) {
    let i = 0,
      a = {};
    const s = As(() => {
      let f = !1;
      const l = t.s;
      for (const o in l) l[o] !== a[o] && ((a[o] = l[o]), (f = !0));
      return f && i++, i;
    });
    n = () => Z(s);
  }
  r.b.length &&
    lu(() => {
      w0(t, n), Hi(r.b);
    }),
    ts(() => {
      const i = pa(() => r.m.map(Wc));
      return () => {
        for (const a of i) typeof a == 'function' && a();
      };
    }),
    r.a.length &&
      ts(() => {
        w0(t, n), Hi(r.a);
      });
}
function w0(e, t) {
  if (e.l.s) for (const r of e.l.s) Z(r);
  t();
}
function Ns(e, t, r) {
  if (e == null) return t(void 0), r && r(void 0), Dr;
  const n = pa(() => e.subscribe(t, r));
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ln = [];
function Vu(e, t) {
  return { subscribe: xn(e, t).subscribe };
}
function xn(e, t = Dr) {
  let r = null;
  const n = new Set();
  function i(f) {
    if (Rf(e, f) && ((e = f), r)) {
      const l = !ln.length;
      for (const o of n) o[1](), ln.push(o, e);
      if (l) {
        for (let o = 0; o < ln.length; o += 2) ln[o][0](ln[o + 1]);
        ln.length = 0;
      }
    }
  }
  function a(f) {
    i(f(e));
  }
  function s(f, l = Dr) {
    const o = [f, l];
    return (
      n.add(o),
      n.size === 1 && (r = t(i, a) || Dr),
      f(e),
      () => {
        n.delete(o), n.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function Gu(e, t, r) {
  const n = !Array.isArray(e),
    i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error('derived() expects stores as input, got a falsy value');
  const a = t.length < 2;
  return Vu(r, (s, f) => {
    let l = !1;
    const o = [];
    let c = 0,
      h = Dr;
    const u = () => {
        if (c) return;
        h();
        const v = t(n ? o[0] : o, s, f);
        a ? s(v) : (h = typeof v == 'function' ? v : Dr);
      },
      x = i.map((v, d) =>
        Ns(
          v,
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
        Hi(x), h(), (l = !1);
      }
    );
  });
}
function ju(e) {
  let t;
  return Ns(e, (r) => (t = r))(), t;
}
let as = Symbol();
function cn(e, t, r) {
  const n = (r[t] ??= { store: null, source: Ue(void 0), unsubscribe: Dr });
  if (n.store !== e && !(as in r))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = Dr);
    else {
      var i = !0;
      (n.unsubscribe = Ns(e, (a) => {
        i ? (n.source.v = a) : oe(n.source, a);
      })),
        (i = !1);
    }
  return e && as in r ? ju(e) : Z(n.source);
}
function Xu(e, t) {
  return e.set(t), t;
}
function Ku() {
  const e = {};
  function t() {
    Fs(() => {
      for (var r in e) e[r].unsubscribe();
      Sf(e, as, { enumerable: !1, value: !0 });
    });
  }
  return [e, t];
}
function Qf(e) {
  Ke === null && nu(),
    li && Ke.l !== null
      ? qu(Ke).m.push(e)
      : ts(() => {
          const t = pa(e);
          if (typeof t == 'function') return t;
        });
}
function qu(e) {
  var t = e.l;
  return (t.u ??= { a: [], b: [], m: [] });
}
const $u = '5';
typeof window < 'u' && ((window.__svelte ??= {}).v ??= new Set()).add($u);
Jc();
function eo(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Yu } = Object.prototype,
  { getPrototypeOf: ks } = Object,
  { iterator: va, toStringTag: to } = Symbol,
  ma = ((e) => (t) => {
    const r = Yu.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  nr = (e) => ((e = e.toLowerCase()), (t) => ma(t) === e),
  _a = (e) => (t) => typeof t === e,
  { isArray: yn } = Array,
  ti = _a('undefined');
function Ju(e) {
  return (
    e !== null &&
    !ti(e) &&
    e.constructor !== null &&
    !ti(e.constructor) &&
    Ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ro = nr('ArrayBuffer');
function Zu(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ro(e.buffer)),
    t
  );
}
const Qu = _a('string'),
  Ct = _a('function'),
  no = _a('number'),
  ga = (e) => e !== null && typeof e == 'object',
  eh = (e) => e === !0 || e === !1,
  Bi = (e) => {
    if (ma(e) !== 'object') return !1;
    const t = ks(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(to in e) &&
      !(va in e)
    );
  },
  th = nr('Date'),
  rh = nr('File'),
  nh = nr('Blob'),
  ih = nr('FileList'),
  ah = (e) => ga(e) && Ct(e.pipe),
  sh = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ct(e.append) &&
          ((t = ma(e)) === 'formdata' ||
            (t === 'object' &&
              Ct(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  fh = nr('URLSearchParams'),
  [oh, lh, ch, uh] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    nr,
  ),
  hh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ui(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let n, i;
  if ((typeof e != 'object' && (e = [e]), yn(e)))
    for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = a.length;
    let f;
    for (n = 0; n < s; n++) (f = a[n]), t.call(null, e[f], f, e);
  }
}
function io(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    i;
  for (; n-- > 0; ) if (((i = r[n]), t === i.toLowerCase())) return i;
  return null;
}
const Gr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ao = (e) => !ti(e) && e !== Gr;
function ss() {
  const { caseless: e } = (ao(this) && this) || {},
    t = {},
    r = (n, i) => {
      const a = (e && io(t, i)) || i;
      Bi(t[a]) && Bi(n)
        ? (t[a] = ss(t[a], n))
        : Bi(n)
          ? (t[a] = ss({}, n))
          : yn(n)
            ? (t[a] = n.slice())
            : (t[a] = n);
    };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && ui(arguments[n], r);
  return t;
}
const dh = (e, t, r, { allOwnKeys: n } = {}) => (
    ui(
      t,
      (i, a) => {
        r && Ct(i) ? (e[a] = eo(i, r)) : (e[a] = i);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  xh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ph = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  vh = (e, t, r, n) => {
    let i, a, s;
    const f = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
        (s = i[a]), (!n || n(s, e, t)) && !f[s] && ((t[s] = e[s]), (f[s] = !0));
      e = r !== !1 && ks(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  mh = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  _h = (e) => {
    if (!e) return null;
    if (yn(e)) return e;
    let t = e.length;
    if (!no(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  gh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && ks(Uint8Array)),
  Eh = (e, t) => {
    const n = (e && e[va]).call(e);
    let i;
    for (; (i = n.next()) && !i.done; ) {
      const a = i.value;
      t.call(e, a[0], a[1]);
    }
  },
  Th = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  wh = nr('HTMLFormElement'),
  Sh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, i) {
      return n.toUpperCase() + i;
    }),
  S0 = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Ah = nr('RegExp'),
  so = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    ui(r, (i, a) => {
      let s;
      (s = t(i, a, e)) !== !1 && (n[a] = s || i);
    }),
      Object.defineProperties(e, n);
  },
  yh = (e) => {
    so(e, (t, r) => {
      if (Ct(e) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (Ct(n)) {
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
  Fh = (e, t) => {
    const r = {},
      n = (i) => {
        i.forEach((a) => {
          r[a] = !0;
        });
      };
    return yn(e) ? n(e) : n(String(e).split(t)), r;
  },
  Ch = () => {},
  Oh = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Rh(e) {
  return !!(e && Ct(e.append) && e[to] === 'FormData' && e[va]);
}
const Dh = (e) => {
    const t = new Array(10),
      r = (n, i) => {
        if (ga(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!('toJSON' in n)) {
            t[i] = n;
            const a = yn(n) ? [] : {};
            return (
              ui(n, (s, f) => {
                const l = r(s, i + 1);
                !ti(l) && (a[f] = l);
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
  Nh = nr('AsyncFunction'),
  kh = (e) => e && (ga(e) || Ct(e)) && Ct(e.then) && Ct(e.catch),
  fo = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((r, n) => (
            Gr.addEventListener(
              'message',
              ({ source: i, data: a }) => {
                i === Gr && a === r && n.length && n.shift()();
              },
              !1,
            ),
            (i) => {
              n.push(i), Gr.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    Ct(Gr.postMessage),
  ),
  Ih =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Gr)
      : (typeof process < 'u' && process.nextTick) || fo,
  Ph = (e) => e != null && Ct(e[va]),
  B = {
    isArray: yn,
    isArrayBuffer: ro,
    isBuffer: Ju,
    isFormData: sh,
    isArrayBufferView: Zu,
    isString: Qu,
    isNumber: no,
    isBoolean: eh,
    isObject: ga,
    isPlainObject: Bi,
    isReadableStream: oh,
    isRequest: lh,
    isResponse: ch,
    isHeaders: uh,
    isUndefined: ti,
    isDate: th,
    isFile: rh,
    isBlob: nh,
    isRegExp: Ah,
    isFunction: Ct,
    isStream: ah,
    isURLSearchParams: fh,
    isTypedArray: gh,
    isFileList: ih,
    forEach: ui,
    merge: ss,
    extend: dh,
    trim: hh,
    stripBOM: xh,
    inherits: ph,
    toFlatObject: vh,
    kindOf: ma,
    kindOfTest: nr,
    endsWith: mh,
    toArray: _h,
    forEachEntry: Eh,
    matchAll: Th,
    isHTMLForm: wh,
    hasOwnProperty: S0,
    hasOwnProp: S0,
    reduceDescriptors: so,
    freezeMethods: yh,
    toObjectSet: Fh,
    toCamelCase: Sh,
    noop: Ch,
    toFiniteNumber: Oh,
    findKey: io,
    global: Gr,
    isContextDefined: ao,
    isSpecCompliantForm: Rh,
    toJSONObject: Dh,
    isAsyncFn: Nh,
    isThenable: kh,
    setImmediate: fo,
    asap: Ih,
    isIterable: Ph,
  };
function me(e, t, r, n, i) {
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
B.inherits(me, Error, {
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
const oo = me.prototype,
  lo = {};
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
  lo[e] = { value: e };
});
Object.defineProperties(me, lo);
Object.defineProperty(oo, 'isAxiosError', { value: !0 });
me.from = (e, t, r, n, i, a) => {
  const s = Object.create(oo);
  return (
    B.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (f) => f !== 'isAxiosError',
    ),
    me.call(s, e.message, t, r, n, i),
    (s.cause = e),
    (s.name = e.name),
    a && Object.assign(s, a),
    s
  );
};
const Lh = null;
function fs(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function co(e) {
  return B.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function A0(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (i, a) {
          return (i = co(i)), !r && a ? '[' + i + ']' : i;
        })
        .join(r ? '.' : '')
    : t;
}
function bh(e) {
  return B.isArray(e) && !e.some(fs);
}
const Bh = B.toFlatObject(B, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ea(e, t, r) {
  if (!B.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (r = B.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, m) {
        return !B.isUndefined(m[d]);
      },
    ));
  const n = r.metaTokens,
    i = r.visitor || c,
    a = r.dots,
    s = r.indexes,
    l = (r.Blob || (typeof Blob < 'u' && Blob)) && B.isSpecCompliantForm(t);
  if (!B.isFunction(i)) throw new TypeError('visitor must be a function');
  function o(v) {
    if (v === null) return '';
    if (B.isDate(v)) return v.toISOString();
    if (B.isBoolean(v)) return v.toString();
    if (!l && B.isBlob(v))
      throw new me('Blob is not supported. Use a Buffer instead.');
    return B.isArrayBuffer(v) || B.isTypedArray(v)
      ? l && typeof Blob == 'function'
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, d, m) {
    let S = v;
    if (v && !m && typeof v == 'object') {
      if (B.endsWith(d, '{}'))
        (d = n ? d : d.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (B.isArray(v) && bh(v)) ||
        ((B.isFileList(v) || B.endsWith(d, '[]')) && (S = B.toArray(v)))
      )
        return (
          (d = co(d)),
          S.forEach(function (F, k) {
            !(B.isUndefined(F) || F === null) &&
              t.append(
                s === !0 ? A0([d], k, a) : s === null ? d : d + '[]',
                o(F),
              );
          }),
          !1
        );
    }
    return fs(v) ? !0 : (t.append(A0(m, d, a), o(v)), !1);
  }
  const h = [],
    u = Object.assign(Bh, {
      defaultVisitor: c,
      convertValue: o,
      isVisitable: fs,
    });
  function x(v, d) {
    if (!B.isUndefined(v)) {
      if (h.indexOf(v) !== -1)
        throw Error('Circular reference detected in ' + d.join('.'));
      h.push(v),
        B.forEach(v, function (S, y) {
          (!(B.isUndefined(S) || S === null) &&
            i.call(t, S, B.isString(y) ? y.trim() : y, d, u)) === !0 &&
            x(S, d ? d.concat(y) : [y]);
        }),
        h.pop();
    }
  }
  if (!B.isObject(e)) throw new TypeError('data must be an object');
  return x(e), t;
}
function y0(e) {
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
function Is(e, t) {
  (this._pairs = []), e && Ea(e, this, t);
}
const uo = Is.prototype;
uo.append = function (t, r) {
  this._pairs.push([t, r]);
};
uo.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, y0);
      }
    : y0;
  return this._pairs
    .map(function (i) {
      return r(i[0]) + '=' + r(i[1]);
    }, '')
    .join('&');
};
function Mh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function ho(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Mh;
  B.isFunction(r) && (r = { serialize: r });
  const i = r && r.serialize;
  let a;
  if (
    (i
      ? (a = i(t, r))
      : (a = B.isURLSearchParams(t) ? t.toString() : new Is(t, r).toString(n)),
    a)
  ) {
    const s = e.indexOf('#');
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + a);
  }
  return e;
}
class F0 {
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
    B.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const xo = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Uh = typeof URLSearchParams < 'u' ? URLSearchParams : Is,
  Hh = typeof FormData < 'u' ? FormData : null,
  Wh = typeof Blob < 'u' ? Blob : null,
  zh = {
    isBrowser: !0,
    classes: { URLSearchParams: Uh, FormData: Hh, Blob: Wh },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Ps = typeof window < 'u' && typeof document < 'u',
  os = (typeof navigator == 'object' && navigator) || void 0,
  Vh =
    Ps &&
    (!os || ['ReactNative', 'NativeScript', 'NS'].indexOf(os.product) < 0),
  Gh =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  jh = (Ps && window.location.href) || 'http://localhost',
  Xh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ps,
        hasStandardBrowserEnv: Vh,
        hasStandardBrowserWebWorkerEnv: Gh,
        navigator: os,
        origin: jh,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  vt = { ...Xh, ...zh };
function Kh(e, t) {
  return Ea(
    e,
    new vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, i, a) {
          return vt.isNode && B.isBuffer(r)
            ? (this.append(n, r.toString('base64')), !1)
            : a.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function qh(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function $h(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++) (a = r[n]), (t[a] = e[a]);
  return t;
}
function po(e) {
  function t(r, n, i, a) {
    let s = r[a++];
    if (s === '__proto__') return !0;
    const f = Number.isFinite(+s),
      l = a >= r.length;
    return (
      (s = !s && B.isArray(i) ? i.length : s),
      l
        ? (B.hasOwnProp(i, s) ? (i[s] = [i[s], n]) : (i[s] = n), !f)
        : ((!i[s] || !B.isObject(i[s])) && (i[s] = []),
          t(r, n, i[s], a) && B.isArray(i[s]) && (i[s] = $h(i[s])),
          !f)
    );
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const r = {};
    return (
      B.forEachEntry(e, (n, i) => {
        t(qh(n), i, r, 0);
      }),
      r
    );
  }
  return null;
}
function Yh(e, t, r) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (n) {
      if (n.name !== 'SyntaxError') throw n;
    }
  return (r || JSON.stringify)(e);
}
const hi = {
  transitional: xo,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || '',
        i = n.indexOf('application/json') > -1,
        a = B.isObject(t);
      if ((a && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t)))
        return i ? JSON.stringify(po(t)) : t;
      if (
        B.isArrayBuffer(t) ||
        B.isBuffer(t) ||
        B.isStream(t) ||
        B.isFile(t) ||
        B.isBlob(t) ||
        B.isReadableStream(t)
      )
        return t;
      if (B.isArrayBufferView(t)) return t.buffer;
      if (B.isURLSearchParams(t))
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
          return Kh(t, this.formSerializer).toString();
        if ((f = B.isFileList(t)) || n.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData;
          return Ea(
            f ? { 'files[]': t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return a || i ? (r.setContentType('application/json', !1), Yh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || hi.transitional,
        n = r && r.forcedJSONParsing,
        i = this.responseType === 'json';
      if (B.isResponse(t) || B.isReadableStream(t)) return t;
      if (t && B.isString(t) && ((n && !this.responseType) || i)) {
        const s = !(r && r.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (f) {
          if (s)
            throw f.name === 'SyntaxError'
              ? me.from(f, me.ERR_BAD_RESPONSE, this, null, this.response)
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
  env: { FormData: vt.classes.FormData, Blob: vt.classes.Blob },
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
B.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  hi.headers[e] = {};
});
const Jh = B.toObjectSet([
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
  Zh = (e) => {
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
              !(!r || (t[r] && Jh[r])) &&
                (r === 'set-cookie'
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ', ' + n : n));
          }),
      t
    );
  },
  C0 = Symbol('internals');
function Un(e) {
  return e && String(e).trim().toLowerCase();
}
function Mi(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Mi) : String(e);
}
function Qh(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const e1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function za(e, t, r, n, i) {
  if (B.isFunction(n)) return n.call(this, t, r);
  if ((i && (t = r), !!B.isString(t))) {
    if (B.isString(n)) return t.indexOf(n) !== -1;
    if (B.isRegExp(n)) return n.test(t);
  }
}
function t1(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function r1(e, t) {
  const r = B.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (i, a, s) {
        return this[n].call(this, t, i, a, s);
      },
      configurable: !0,
    });
  });
}
let Ot = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const i = this;
    function a(f, l, o) {
      const c = Un(l);
      if (!c) throw new Error('header name must be a non-empty string');
      const h = B.findKey(i, c);
      (!h || i[h] === void 0 || o === !0 || (o === void 0 && i[h] !== !1)) &&
        (i[h || l] = Mi(f));
    }
    const s = (f, l) => B.forEach(f, (o, c) => a(o, c, l));
    if (B.isPlainObject(t) || t instanceof this.constructor) s(t, r);
    else if (B.isString(t) && (t = t.trim()) && !e1(t)) s(Zh(t), r);
    else if (B.isObject(t) && B.isIterable(t)) {
      let f = {},
        l,
        o;
      for (const c of t) {
        if (!B.isArray(c))
          throw TypeError('Object iterator must return a key-value pair');
        f[(o = c[0])] = (l = f[o])
          ? B.isArray(l)
            ? [...l, c[1]]
            : [l, c[1]]
          : c[1];
      }
      s(f, r);
    } else t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (((t = Un(t)), t)) {
      const n = B.findKey(this, t);
      if (n) {
        const i = this[n];
        if (!r) return i;
        if (r === !0) return Qh(i);
        if (B.isFunction(r)) return r.call(this, i, n);
        if (B.isRegExp(r)) return r.exec(i);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, r) {
    if (((t = Un(t)), t)) {
      const n = B.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || za(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let i = !1;
    function a(s) {
      if (((s = Un(s)), s)) {
        const f = B.findKey(n, s);
        f && (!r || za(n, n[f], f, r)) && (delete n[f], (i = !0));
      }
    }
    return B.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      i = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || za(this, this[a], a, t, !0)) && (delete this[a], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      B.forEach(this, (i, a) => {
        const s = B.findKey(n, a);
        if (s) {
          (r[s] = Mi(i)), delete r[a];
          return;
        }
        const f = t ? t1(a) : String(a).trim();
        f !== a && delete r[a], (r[f] = Mi(i)), (n[f] = !0);
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
      B.forEach(this, (n, i) => {
        n != null && n !== !1 && (r[i] = t && B.isArray(n) ? n.join(', ') : n);
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
    const n = (this[C0] = this[C0] = { accessors: {} }).accessors,
      i = this.prototype;
    function a(s) {
      const f = Un(s);
      n[f] || (r1(i, s), (n[f] = !0));
    }
    return B.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ot.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
B.reduceDescriptors(Ot.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
B.freezeMethods(Ot);
function Va(e, t) {
  const r = this || hi,
    n = t || r,
    i = Ot.from(n.headers);
  let a = n.data;
  return (
    B.forEach(e, function (f) {
      a = f.call(r, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
function vo(e) {
  return !!(e && e.__CANCEL__);
}
function Fn(e, t, r) {
  me.call(this, e ?? 'canceled', me.ERR_CANCELED, t, r),
    (this.name = 'CanceledError');
}
B.inherits(Fn, me, { __CANCEL__: !0 });
function mo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new me(
          'Request failed with status code ' + r.status,
          [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function n1(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function i1(e, t) {
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
      let h = a,
        u = 0;
      for (; h !== i; ) (u += r[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), o - s < t)) return;
      const x = c && o - c;
      return x ? Math.round((u * 1e3) / x) : void 0;
    }
  );
}
function a1(e, t) {
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
        h = c - r;
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
const $i = (e, t, r = 3) => {
    let n = 0;
    const i = i1(50, 250);
    return a1((a) => {
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
        [t ? 'download' : 'upload']: !0,
      };
      e(h);
    }, r);
  },
  O0 = (e, t) => {
    const r = e != null;
    return [(n) => t[0]({ lengthComputable: r, total: e, loaded: n }), t[1]];
  },
  R0 =
    (e) =>
    (...t) =>
      B.asap(() => e(...t)),
  s1 = vt.hasStandardBrowserEnv
    ? ((e, t) => (r) => (
        (r = new URL(r, vt.origin)),
        e.protocol === r.protocol &&
          e.host === r.host &&
          (t || e.port === r.port)
      ))(
        new URL(vt.origin),
        vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent),
      )
    : () => !0,
  f1 = vt.hasStandardBrowserEnv
    ? {
        write(e, t, r, n, i, a) {
          const s = [e + '=' + encodeURIComponent(t)];
          B.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
            B.isString(n) && s.push('path=' + n),
            B.isString(i) && s.push('domain=' + i),
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
function o1(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function l1(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function _o(e, t, r) {
  let n = !o1(t);
  return e && (n || r == !1) ? l1(e, t) : t;
}
const D0 = (e) => (e instanceof Ot ? { ...e } : e);
function qr(e, t) {
  t = t || {};
  const r = {};
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
    if (h in t) return n(o, c);
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
    headers: (o, c, h) => i(D0(o), D0(c), h, !0),
  };
  return (
    B.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = l[c] || i,
        u = h(e[c], t[c], c);
      (B.isUndefined(u) && h !== f) || (r[c] = u);
    }),
    r
  );
}
const go = (e) => {
    const t = qr({}, e);
    let {
      data: r,
      withXSRFToken: n,
      xsrfHeaderName: i,
      xsrfCookieName: a,
      headers: s,
      auth: f,
    } = t;
    (t.headers = s = Ot.from(s)),
      (t.url = ho(
        _o(t.baseURL, t.url, t.allowAbsoluteUrls),
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
    if (B.isFormData(r)) {
      if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
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
      vt.hasStandardBrowserEnv &&
      (n && B.isFunction(n) && (n = n(t)), n || (n !== !1 && s1(t.url)))
    ) {
      const o = i && a && f1.read(a);
      o && s.set(i, o);
    }
    return t;
  },
  c1 = typeof XMLHttpRequest < 'u',
  u1 =
    c1 &&
    function (e) {
      return new Promise(function (r, n) {
        const i = go(e);
        let a = i.data;
        const s = Ot.from(i.headers).normalize();
        let { responseType: f, onUploadProgress: l, onDownloadProgress: o } = i,
          c,
          h,
          u,
          x,
          v;
        function d() {
          x && x(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener('abort', c);
        }
        let m = new XMLHttpRequest();
        m.open(i.method.toUpperCase(), i.url, !0), (m.timeout = i.timeout);
        function S() {
          if (!m) return;
          const F = Ot.from(
              'getAllResponseHeaders' in m && m.getAllResponseHeaders(),
            ),
            z = {
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
          mo(
            function (O) {
              r(O), d();
            },
            function (O) {
              n(O), d();
            },
            z,
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
              (n(new me('Request aborted', me.ECONNABORTED, e, m)), (m = null));
          }),
          (m.onerror = function () {
            n(new me('Network Error', me.ERR_NETWORK, e, m)), (m = null);
          }),
          (m.ontimeout = function () {
            let k = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const z = i.transitional || xo;
            i.timeoutErrorMessage && (k = i.timeoutErrorMessage),
              n(
                new me(
                  k,
                  z.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
                  e,
                  m,
                ),
              ),
              (m = null);
          }),
          a === void 0 && s.setContentType(null),
          'setRequestHeader' in m &&
            B.forEach(s.toJSON(), function (k, z) {
              m.setRequestHeader(z, k);
            }),
          B.isUndefined(i.withCredentials) ||
            (m.withCredentials = !!i.withCredentials),
          f && f !== 'json' && (m.responseType = i.responseType),
          o && (([u, v] = $i(o, !0)), m.addEventListener('progress', u)),
          l &&
            m.upload &&
            (([h, x] = $i(l)),
            m.upload.addEventListener('progress', h),
            m.upload.addEventListener('loadend', x)),
          (i.cancelToken || i.signal) &&
            ((c = (F) => {
              m &&
                (n(!F || F.type ? new Fn(null, e, m) : F),
                m.abort(),
                (m = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted ? c() : i.signal.addEventListener('abort', c)));
        const y = n1(i.url);
        if (y && vt.protocols.indexOf(y) === -1) {
          n(new me('Unsupported protocol ' + y + ':', me.ERR_BAD_REQUEST, e));
          return;
        }
        m.send(a || null);
      });
    },
  h1 = (e, t) => {
    const { length: r } = (e = e ? e.filter(Boolean) : []);
    if (t || r) {
      let n = new AbortController(),
        i;
      const a = function (o) {
        if (!i) {
          (i = !0), f();
          const c = o instanceof Error ? o : this.reason;
          n.abort(
            c instanceof me ? c : new Fn(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          (s = null), a(new me(`timeout ${t} of ms exceeded`, me.ETIMEDOUT));
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
      return (l.unsubscribe = () => B.asap(f)), l;
    }
  },
  d1 = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let n = 0,
      i;
    for (; n < r; ) (i = n + t), yield e.slice(n, i), (n = i);
  },
  x1 = async function* (e, t) {
    for await (const r of p1(e)) yield* d1(r, t);
  },
  p1 = async function* (e) {
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
  N0 = (e, t, r, n) => {
    const i = x1(e, t);
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
            if (r) {
              let u = (a += h);
              r(u);
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
  Ta =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Eo = Ta && typeof ReadableStream == 'function',
  v1 =
    Ta &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  To = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  m1 =
    Eo &&
    To(() => {
      let e = !1;
      const t = new Request(vt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half';
        },
      }).headers.has('Content-Type');
      return e && !t;
    }),
  k0 = 64 * 1024,
  ls = Eo && To(() => B.isReadableStream(new Response('').body)),
  Yi = { stream: ls && ((e) => e.body) };
Ta &&
  ((e) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !Yi[t] &&
        (Yi[t] = B.isFunction(e[t])
          ? (r) => r[t]()
          : (r, n) => {
              throw new me(
                `Response type '${t}' is not supported`,
                me.ERR_NOT_SUPPORT,
                n,
              );
            });
    });
  })(new Response());
const _1 = async (e) => {
    if (e == null) return 0;
    if (B.isBlob(e)) return e.size;
    if (B.isSpecCompliantForm(e))
      return (
        await new Request(vt.origin, { method: 'POST', body: e }).arrayBuffer()
      ).byteLength;
    if (B.isArrayBufferView(e) || B.isArrayBuffer(e)) return e.byteLength;
    if ((B.isURLSearchParams(e) && (e = e + ''), B.isString(e)))
      return (await v1(e)).byteLength;
  },
  g1 = async (e, t) => {
    const r = B.toFiniteNumber(e.getContentLength());
    return r ?? _1(t);
  },
  E1 =
    Ta &&
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
        withCredentials: h = 'same-origin',
        fetchOptions: u,
      } = go(e);
      o = o ? (o + '').toLowerCase() : 'text';
      let x = h1([i, a && a.toAbortSignal()], s),
        v;
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
          m1 &&
          r !== 'get' &&
          r !== 'head' &&
          (m = await g1(c, n)) !== 0
        ) {
          let z = new Request(t, { method: 'POST', body: n, duplex: 'half' }),
            J;
          if (
            (B.isFormData(n) &&
              (J = z.headers.get('content-type')) &&
              c.setContentType(J),
            z.body)
          ) {
            const [O, H] = O0(m, $i(R0(l)));
            n = N0(z.body, k0, O, H);
          }
        }
        B.isString(h) || (h = h ? 'include' : 'omit');
        const S = 'credentials' in Request.prototype;
        v = new Request(t, {
          ...u,
          signal: x,
          method: r.toUpperCase(),
          headers: c.normalize().toJSON(),
          body: n,
          duplex: 'half',
          credentials: S ? h : void 0,
        });
        let y = await fetch(v, u);
        const F = ls && (o === 'stream' || o === 'response');
        if (ls && (f || (F && d))) {
          const z = {};
          ['status', 'statusText', 'headers'].forEach((I) => {
            z[I] = y[I];
          });
          const J = B.toFiniteNumber(y.headers.get('content-length')),
            [O, H] = (f && O0(J, $i(R0(f), !0))) || [];
          y = new Response(
            N0(y.body, k0, O, () => {
              H && H(), d && d();
            }),
            z,
          );
        }
        o = o || 'text';
        let k = await Yi[B.findKey(Yi, o) || 'text'](y, e);
        return (
          !F && d && d(),
          await new Promise((z, J) => {
            mo(z, J, {
              data: k,
              headers: Ot.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: v,
            });
          })
        );
      } catch (S) {
        throw (
          (d && d(),
          S && S.name === 'TypeError' && /Load failed|fetch/i.test(S.message)
            ? Object.assign(new me('Network Error', me.ERR_NETWORK, e, v), {
                cause: S.cause || S,
              })
            : me.from(S, S && S.code, e, v))
        );
      }
    }),
  cs = { http: Lh, xhr: u1, fetch: E1 };
B.forEach(cs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const I0 = (e) => `- ${e}`,
  T1 = (e) => B.isFunction(e) || e === null || e === !1,
  wo = {
    getAdapter: (e) => {
      e = B.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, n;
      const i = {};
      for (let a = 0; a < t; a++) {
        r = e[a];
        let s;
        if (
          ((n = r),
          !T1(r) && ((n = cs[(s = String(r)).toLowerCase()]), n === void 0))
        )
          throw new me(`Unknown adapter '${s}'`);
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
              a.map(I0).join(`
`)
            : ' ' + I0(a[0])
          : 'as no adapter specified';
        throw new me(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT',
        );
      }
      return n;
    },
    adapters: cs,
  };
function Ga(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Fn(null, e);
}
function P0(e) {
  return (
    Ga(e),
    (e.headers = Ot.from(e.headers)),
    (e.data = Va.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    wo
      .getAdapter(e.adapter || hi.adapter)(e)
      .then(
        function (n) {
          return (
            Ga(e),
            (n.data = Va.call(e, e.transformResponse, n)),
            (n.headers = Ot.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            vo(n) ||
              (Ga(e),
              n &&
                n.response &&
                ((n.response.data = Va.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = Ot.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const So = '1.10.0',
  wa = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    wa[e] = function (n) {
      return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const L0 = {};
wa.transitional = function (t, r, n) {
  function i(a, s) {
    return (
      '[Axios v' +
      So +
      "] Transitional option '" +
      a +
      "'" +
      s +
      (n ? '. ' + n : '')
    );
  }
  return (a, s, f) => {
    if (t === !1)
      throw new me(
        i(s, ' has been removed' + (r ? ' in ' + r : '')),
        me.ERR_DEPRECATED,
      );
    return (
      r &&
        !L0[s] &&
        ((L0[s] = !0),
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
wa.spelling = function (t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function w1(e, t, r) {
  if (typeof e != 'object')
    throw new me('options must be an object', me.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i],
      s = t[a];
    if (s) {
      const f = e[a],
        l = f === void 0 || s(f, a, e);
      if (l !== !0)
        throw new me('option ' + a + ' must be ' + l, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new me('Unknown option ' + a, me.ERR_BAD_OPTION);
  }
}
const Ui = { assertOptions: w1, validators: wa },
  ar = Ui.validators;
let Xr = class {
  constructor(t) {
    (this.defaults = t || {}),
      (this.interceptors = { request: new F0(), response: new F0() });
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
      (r = qr(this.defaults, r));
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 &&
      Ui.assertOptions(
        n,
        {
          silentJSONParsing: ar.transitional(ar.boolean),
          forcedJSONParsing: ar.transitional(ar.boolean),
          clarifyTimeoutError: ar.transitional(ar.boolean),
        },
        !1,
      ),
      i != null &&
        (B.isFunction(i)
          ? (r.paramsSerializer = { serialize: i })
          : Ui.assertOptions(
              i,
              { encode: ar.function, serialize: ar.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Ui.assertOptions(
        r,
        {
          baseUrl: ar.spelling('baseURL'),
          withXsrfToken: ar.spelling('withXSRFToken'),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase());
    let s = a && B.merge(a.common, a[r.method]);
    a &&
      B.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (v) => {
          delete a[v];
        },
      ),
      (r.headers = Ot.concat(s, a));
    const f = [];
    let l = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == 'function' && d.runWhen(r) === !1) ||
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
      const v = [P0.bind(this), void 0];
      for (
        v.unshift.apply(v, f),
          v.push.apply(v, o),
          u = v.length,
          c = Promise.resolve(r);
        h < u;

      )
        c = c.then(v[h++], v[h++]);
      return c;
    }
    u = f.length;
    let x = r;
    for (h = 0; h < u; ) {
      const v = f[h++],
        d = f[h++];
      try {
        x = v(x);
      } catch (m) {
        d.call(this, m);
        break;
      }
    }
    try {
      c = P0.call(this, x);
    } catch (v) {
      return Promise.reject(v);
    }
    for (h = 0, u = o.length; h < u; ) c = c.then(o[h++], o[h++]);
    return c;
  }
  getUri(t) {
    t = qr(this.defaults, t);
    const r = _o(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ho(r, t.params, t.paramsSerializer);
  }
};
B.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Xr.prototype[t] = function (r, n) {
    return this.request(
      qr(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
B.forEach(['post', 'put', 'patch'], function (t) {
  function r(n) {
    return function (a, s, f) {
      return this.request(
        qr(f || {}, {
          method: t,
          headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
          url: a,
          data: s,
        }),
      );
    };
  }
  (Xr.prototype[t] = r()), (Xr.prototype[t + 'Form'] = r(!0));
});
let S1 = class Ao {
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
        n.reason || ((n.reason = new Fn(a, s, f)), r(n.reason));
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
      token: new Ao(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function A1(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function y1(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const us = {
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
Object.entries(us).forEach(([e, t]) => {
  us[t] = e;
});
function yo(e) {
  const t = new Xr(e),
    r = eo(Xr.prototype.request, t);
  return (
    B.extend(r, Xr.prototype, t, { allOwnKeys: !0 }),
    B.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (i) {
      return yo(qr(e, i));
    }),
    r
  );
}
const je = yo(hi);
je.Axios = Xr;
je.CanceledError = Fn;
je.CancelToken = S1;
je.isCancel = vo;
je.VERSION = So;
je.toFormData = Ea;
je.AxiosError = me;
je.Cancel = je.CanceledError;
je.all = function (t) {
  return Promise.all(t);
};
je.spread = A1;
je.isAxiosError = y1;
je.mergeConfig = qr;
je.AxiosHeaders = Ot;
je.formToJSON = (e) => po(B.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = wo.getAdapter;
je.HttpStatusCode = us;
je.default = je;
const {
  Axios: Hg,
  AxiosError: Wg,
  CanceledError: zg,
  isCancel: Vg,
  CancelToken: Gg,
  VERSION: jg,
  all: Xg,
  Cancel: Kg,
  isAxiosError: qg,
  spread: $g,
  toFormData: Yg,
  AxiosHeaders: Jg,
  HttpStatusCode: Zg,
  formToJSON: Qg,
  getAdapter: eE,
  mergeConfig: tE,
} = je;
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var Ji = {};
Ji.version = '0.18.5';
var Fo = 1252,
  F1 = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  Co = function (e) {
    F1.indexOf(e) != -1 && (Fo = e);
  };
function C1() {
  Co(1252);
}
var ri = function (e) {
  Co(e);
};
function O1() {
  ri(1200), C1();
}
var Ci = function (t) {
    return String.fromCharCode(t);
  },
  b0 = function (t) {
    return String.fromCharCode(t);
  },
  Zi,
  Or = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function ni(e) {
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
      (t += Or.charAt(a) + Or.charAt(s) + Or.charAt(f) + Or.charAt(l));
  return t;
}
function Tr(e) {
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
    (a = Or.indexOf(e.charAt(o++))),
      (s = Or.indexOf(e.charAt(o++))),
      (r = (a << 2) | (s >> 4)),
      (t += String.fromCharCode(r)),
      (f = Or.indexOf(e.charAt(o++))),
      (n = ((s & 15) << 4) | (f >> 2)),
      f !== 64 && (t += String.fromCharCode(n)),
      (l = Or.indexOf(e.charAt(o++))),
      (i = ((f & 3) << 6) | l),
      l !== 64 && (t += String.fromCharCode(i));
  return t;
}
var Fe = (function () {
    return (
      typeof Buffer < 'u' &&
      typeof process < 'u' &&
      typeof process.versions < 'u' &&
      !!process.versions.node
    );
  })(),
  Ar = (function () {
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
function $r(e) {
  return Fe
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
function B0(e) {
  return Fe
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < 'u'
      ? new Uint8Array(e)
      : new Array(e);
}
var er = function (t) {
  return Fe
    ? Ar(t, 'binary')
    : t.split('').map(function (r) {
        return r.charCodeAt(0) & 255;
      });
};
function Sa(e) {
  if (typeof ArrayBuffer > 'u') return er(e);
  for (
    var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
    n != e.length;
    ++n
  )
    r[n] = e.charCodeAt(n) & 255;
  return t;
}
function di(e) {
  if (Array.isArray(e))
    return e
      .map(function (n) {
        return String.fromCharCode(n);
      })
      .join('');
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join('');
}
function R1(e) {
  if (typeof Uint8Array > 'u') throw new Error('Unsupported');
  return new Uint8Array(e);
}
var ut = Fe
  ? function (e) {
      return Buffer.concat(
        e.map(function (t) {
          return Buffer.isBuffer(t) ? t : Ar(t);
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
function D1(e) {
  for (
    var t = [], r = 0, n = e.length + 250, i = $r(e.length + 255), a = 0;
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
    r > n && (t.push(i.slice(0, r)), (r = 0), (i = $r(65535)), (n = 65530));
  }
  return t.push(i.slice(0, r)), ut(t);
}
var Xn = /\u0000/g,
  Oi = /[\u0001-\u0006]/g;
function mn(e) {
  for (var t = '', r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function tr(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Xe('0', t - r.length) + r;
}
function Ls(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Xe(' ', t - r.length) + r;
}
function Qi(e, t) {
  var r = '' + e;
  return r.length >= t ? r : r + Xe(' ', t - r.length);
}
function N1(e, t) {
  var r = '' + Math.round(e);
  return r.length >= t ? r : Xe('0', t - r.length) + r;
}
function k1(e, t) {
  var r = '' + e;
  return r.length >= t ? r : Xe('0', t - r.length) + r;
}
var M0 = Math.pow(2, 32);
function un(e, t) {
  if (e > M0 || e < -M0) return N1(e, t);
  var r = Math.round(e);
  return k1(r, t);
}
function ea(e, t) {
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
var U0 = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday'],
  ],
  ja = [
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
function I1(e) {
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
  H0 = {
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
  P1 = {
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
function ta(e, t, r) {
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
    o < t &&
    ((h = Math.floor(i)), (f = h * s + a), (c = h * o + l), !(i - h < 5e-8));

  )
    (i = 1 / (i - h)), (a = s), (s = f), (l = o), (o = c);
  if ((c > t && (o > t ? ((c = l), (f = a)) : ((c = o), (f = s))), !r))
    return [0, n * f, c];
  var u = Math.floor((n * f) / c);
  return [u, n * f - u * c, c];
}
function Ri(e, t, r) {
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
      r && (a = W1(l, s));
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
var Oo = new Date(1899, 11, 31, 0, 0, 0),
  L1 = Oo.getTime(),
  b1 = new Date(1900, 2, 1, 0, 0, 0);
function Ro(e, t) {
  var r = e.getTime();
  return (
    t ? (r -= 1461 * 24 * 60 * 60 * 1e3) : e >= b1 && (r += 24 * 60 * 60 * 1e3),
    (r - (L1 + (e.getTimezoneOffset() - Oo.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function bs(e) {
  return e.indexOf('.') == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, '$1');
}
function B1(e) {
  return e.indexOf('E') == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, '$1E')
        .replace(/(E[+-])(\d)$/, '$10$2');
}
function M1(e) {
  var t = e < 0 ? 12 : 11,
    r = bs(e.toFixed(12));
  return r.length <= t || ((r = e.toPrecision(10)), r.length <= t)
    ? r
    : e.toExponential(5);
}
function U1(e) {
  var t = bs(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === '0' || t === '-0'
    ? e.toPrecision(6)
    : t;
}
function H1(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    r;
  return (
    t >= -4 && t <= -1
      ? (r = e.toPrecision(10 + t))
      : Math.abs(t) <= 9
        ? (r = M1(e))
        : t === 10
          ? (r = e.toFixed(10).substr(0, 12))
          : (r = U1(e)),
    bs(B1(r.toUpperCase()))
  );
}
function hs(e, t) {
  switch (typeof e) {
    case 'string':
      return e;
    case 'boolean':
      return e ? 'TRUE' : 'FALSE';
    case 'number':
      return (e | 0) === e ? e.toString(10) : H1(e);
    case 'undefined':
      return '';
    case 'object':
      if (e == null) return '';
      if (e instanceof Date) return Ir(14, Ro(e, t && t.date1904), t);
  }
  throw new Error('unsupported value in General format: ' + e);
}
function W1(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function z1(e, t, r, n) {
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
          return ja[r.m - 1][1];
        case 5:
          return ja[r.m - 1][0];
        default:
          return ja[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          (l = r.d), (o = t.length);
          break;
        case 3:
          return U0[r.q][0];
        default:
          return U0[r.q][1];
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
        ? tr(r.S, t.length)
        : (n >= 2 ? (s = n === 3 ? 1e3 : 100) : (s = n === 1 ? 10 : 1),
          (a = Math.round(s * (r.S + r.u))),
          a >= 60 * s && (a = 0),
          t === 's'
            ? a === 0
              ? '0'
              : '' + a / s
            : ((i = tr(a, 2 + n)),
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
  var c = o > 0 ? tr(l, o) : '';
  return c;
}
function Rr(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t)
    n += (n.length > 0 ? ',' : '') + e.substr(r, t);
  return n;
}
var Do = /%/g;
function V1(e, t, r) {
  var n = t.replace(Do, ''),
    i = t.length - n.length;
  return mr(e, n, r * Math.pow(10, 2 * i)) + Xe('%', i);
}
function G1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return mr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function No(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + No(e, -t);
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
var ko = /# (\?+)( ?)\/( ?)(\d+)/;
function j1(e, t, r) {
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
      ? Xe(' ', e[1].length + 1 + e[4].length)
      : Ls(s, e[1].length) + e[2] + '/' + e[3] + tr(f, e[4].length))
  );
}
function X1(e, t, r) {
  return r + (t === 0 ? '' : '' + t) + Xe(' ', e[1].length + 2 + e[4].length);
}
var Io = /^#*0*\.([0#]+)/,
  Po = /\).*[0#]/,
  Lo = /\(###\) ###\\?-####/;
function wt(e) {
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
function W0(e, t) {
  var r = Math.pow(10, t);
  return '' + Math.round(e * r) / r;
}
function z0(e, t) {
  var r = e - Math.floor(e),
    n = Math.pow(10, t);
  return t < ('' + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function K1(e, t) {
  return t < ('' + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length
    ? 1
    : 0;
}
function q1(e) {
  return e < 2147483647 && e > -2147483648
    ? '' + (e >= 0 ? e | 0 : (e - 1) | 0)
    : '' + Math.floor(e);
}
function zt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Po)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? zt('n', n, r) : '(' + zt('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return G1(e, t, r);
  if (t.indexOf('%') !== -1) return V1(e, t, r);
  if (t.indexOf('E') !== -1) return No(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + zt(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + un(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = un(r, 0)),
      i === '0' && (i = ''),
      i.length > t.length ? i : wt(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(ko))) return j1(a, l, o);
  if (t.match(/^#+0+$/)) return o + un(l, t.length - t.indexOf('0'));
  if ((a = t.match(Io)))
    return (
      (i = W0(r, a[1].length)
        .replace(/^([^\.]+)$/, '$1.' + wt(a[1]))
        .replace(/\.$/, '.' + wt(a[1]))
        .replace(/\.(\d*)$/, function (v, d) {
          return '.' + d + Xe('0', wt(a[1]).length - d.length);
        })),
      t.indexOf('0.') !== -1 ? i : i.replace(/^0\./, '.')
    );
  if (((t = t.replace(/^#+([0.])/, '$1')), (a = t.match(/^(0*)\.(#*)$/))))
    return (
      o +
      W0(l, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, '.$1')
        .replace(/^(-?\d*)$/, '$1.')
        .replace(/^0\./, a[1].length ? '0.' : '.')
    );
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + Rr(un(l, 0));
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0
      ? '-' + zt(e, t, -r)
      : Rr('' + (Math.floor(r) + K1(r, a[1].length))) +
          '.' +
          tr(z0(r, a[1].length), a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return zt(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = mn(zt(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      mn(
        mn(t.replace(/\\/g, '')).replace(/[0#]/g, function (v) {
          return s < i.length ? i.charAt(s++) : v === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(Lo))
    return (
      (i = zt(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = ta(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = mr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Qi(f[2], s)),
      c.length < a[4].length &&
        (c = wt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = ta(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? Ls(f[1], s) + a[2] + '/' + a[3] + Qi(f[2], s)
          : Xe(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = un(r, 0)),
      t.length <= i.length ? i : wt(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0?]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = t.indexOf('.') - s,
      u = t.length - i.length - h;
    return wt(t.substr(0, h) + i + t.substr(t.length - u));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return (
      (s = z0(r, a[1].length)),
      r < 0
        ? '-' + zt(e, t, -r)
        : Rr(q1(r))
            .replace(/^\d,\d{3}$/, '0$&')
            .replace(/^\d*$/, function (v) {
              return '00,' + (v.length < 3 ? tr(0, 3 - v.length) : '') + v;
            }) +
          '.' +
          tr(s, a[1].length)
    );
  switch (t) {
    case '###,##0.00':
      return zt(e, '#,##0.00', r);
    case '###,###':
    case '##,###':
    case '#,###':
      var x = Rr(un(l, 0));
      return x !== '0' ? o + x : '';
    case '###,###.00':
      return zt(e, '###,##0.00', r).replace(/^0\./, '.');
    case '#,###.00':
      return zt(e, '#,##0.00', r).replace(/^0\./, '.');
  }
  throw new Error('unsupported format |' + t + '|');
}
function $1(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return mr(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function Y1(e, t, r) {
  var n = t.replace(Do, ''),
    i = t.length - n.length;
  return mr(e, n, r * Math.pow(10, 2 * i)) + Xe('%', i);
}
function bo(e, t) {
  var r,
    n = e.indexOf('E') - e.indexOf('.') - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return '0.0E+0';
    if (t < 0) return '-' + bo(e, -t);
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
function sr(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Po)) {
    var n = t.replace(/\( */, '').replace(/ \)/, '').replace(/\)/, '');
    return r >= 0 ? sr('n', n, r) : '(' + sr('n', n, -r) + ')';
  }
  if (t.charCodeAt(t.length - 1) === 44) return $1(e, t, r);
  if (t.indexOf('%') !== -1) return Y1(e, t, r);
  if (t.indexOf('E') !== -1) return bo(t, r);
  if (t.charCodeAt(0) === 36)
    return '$' + sr(e, t.substr(t.charAt(1) == ' ' ? 2 : 1), r);
  var i,
    a,
    s,
    f,
    l = Math.abs(r),
    o = r < 0 ? '-' : '';
  if (t.match(/^00+$/)) return o + tr(l, t.length);
  if (t.match(/^[#?]+$/))
    return (
      (i = '' + r),
      r === 0 && (i = ''),
      i.length > t.length ? i : wt(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(ko))) return X1(a, l, o);
  if (t.match(/^#+0+$/)) return o + tr(l, t.length - t.indexOf('0'));
  if ((a = t.match(Io)))
    return (
      (i = ('' + r)
        .replace(/^([^\.]+)$/, '$1.' + wt(a[1]))
        .replace(/\.$/, '.' + wt(a[1]))),
      (i = i.replace(/\.(\d*)$/, function (v, d) {
        return '.' + d + Xe('0', wt(a[1]).length - d.length);
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
  if ((a = t.match(/^#{1,3},##0(\.?)$/))) return o + Rr('' + l);
  if ((a = t.match(/^#,##0\.([#0]*0)$/)))
    return r < 0 ? '-' + sr(e, t, -r) : Rr('' + r) + '.' + Xe('0', a[1].length);
  if ((a = t.match(/^#,#*,#0/))) return sr(e, t.replace(/^#,#*,/, ''), r);
  if ((a = t.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (i = mn(sr(e, t.replace(/[\\-]/g, ''), r))),
      (s = 0),
      mn(
        mn(t.replace(/\\/g, '')).replace(/[0#]/g, function (v) {
          return s < i.length ? i.charAt(s++) : v === '0' ? '0' : '';
        }),
      )
    );
  if (t.match(Lo))
    return (
      (i = sr(e, '##########', r)),
      '(' + i.substr(0, 3) + ') ' + i.substr(3, 3) + '-' + i.substr(6)
    );
  var c = '';
  if ((a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(a[4].length, 7)),
      (f = ta(l, Math.pow(10, s) - 1, !1)),
      (i = '' + o),
      (c = mr('n', a[1], f[1])),
      c.charAt(c.length - 1) == ' ' && (c = c.substr(0, c.length - 1) + '0'),
      (i += c + a[2] + '/' + a[3]),
      (c = Qi(f[2], s)),
      c.length < a[4].length &&
        (c = wt(a[4].substr(a[4].length - c.length)) + c),
      (i += c),
      i
    );
  if ((a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (s = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (f = ta(l, Math.pow(10, s) - 1, !0)),
      o +
        (f[0] || (f[1] ? '' : '0')) +
        ' ' +
        (f[1]
          ? Ls(f[1], s) + a[2] + '/' + a[3] + Qi(f[2], s)
          : Xe(' ', 2 * s + 1 + a[2].length + a[3].length))
    );
  if ((a = t.match(/^[#0?]+$/)))
    return (
      (i = '' + r),
      t.length <= i.length ? i : wt(t.substr(0, t.length - i.length)) + i
    );
  if ((a = t.match(/^([#0]+)\.([#0]+)$/))) {
    (i = '' + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, '$1')),
      (s = i.indexOf('.'));
    var h = t.indexOf('.') - s,
      u = t.length - i.length - h;
    return wt(t.substr(0, h) + i + t.substr(t.length - u));
  }
  if ((a = t.match(/^00,000\.([#0]*0)$/)))
    return r < 0
      ? '-' + sr(e, t, -r)
      : Rr('' + r)
          .replace(/^\d,\d{3}$/, '0$&')
          .replace(/^\d*$/, function (v) {
            return '00,' + (v.length < 3 ? tr(0, 3 - v.length) : '') + v;
          }) +
          '.' +
          tr(0, a[1].length);
  switch (t) {
    case '###,###':
    case '##,###':
    case '#,###':
      var x = Rr('' + l);
      return x !== '0' ? o + x : '';
    default:
      if (t.match(/\.[0#?]*$/))
        return (
          sr(e, t.slice(0, t.lastIndexOf('.')), r) +
          wt(t.slice(t.lastIndexOf('.')))
        );
  }
  throw new Error('unsupported format |' + t + '|');
}
function mr(e, t, r) {
  return (r | 0) === r ? sr(e, t, r) : zt(e, t, r);
}
function J1(e) {
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
var Bo = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Mo(e) {
  for (var t = 0, r = '', n = ''; t < e.length; )
    switch ((r = e.charAt(t))) {
      case 'G':
        ea(e, t) && (t += 6), t++;
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
        if (n.match(Bo)) return !0;
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
function Z1(e, t, r, n) {
  for (
    var i = [], a = '', s = 0, f = '', l = 't', o, c, h, u = 'H';
    s < e.length;

  )
    switch ((f = e.charAt(s))) {
      case 'G':
        if (!ea(e, s))
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
          v = x === '(' || x === ')' ? x : 't';
        (i[i.length] = { t: v, v: x }), ++s;
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
          if (o == null && ((o = Ri(t, r, e.charAt(s + 1) === '2')), o == null))
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
        if (t < 0 || (o == null && ((o = Ri(t, r)), o == null))) return '';
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
          (o == null && (o = Ri(t, r)),
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
        if (a.match(Bo)) {
          if (o == null && ((o = Ri(t, r)), o == null)) return '';
          (i[i.length] = { t: 'Z', v: a.toLowerCase() }), (l = a.charAt(1));
        } else
          a.indexOf('$') > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || '$'),
            Mo(e) || (i[i.length] = { t: 't', v: a }));
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
    y;
  for (s = i.length - 1, l = 't'; s >= 0; --s)
    switch (i[s].t) {
      case 'h':
      case 'H':
        (i[s].t = u), (l = 'h'), m < 1 && (m = 1);
        break;
      case 's':
        (y = i[s].v.match(/\.0+$/)) && (S = Math.max(S, y[0].length - 1)),
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
        (i[s].v = z1(i[s].t.charCodeAt(0), i[s].v, o, S)), (i[s].t = 't');
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
        (i[s].t = 't'), (i[s].v = hs(t, r));
        break;
    }
  var z = '',
    J,
    O;
  if (F.length > 0) {
    F.charCodeAt(0) == 40
      ? ((J = t < 0 && F.charCodeAt(0) === 45 ? -t : t), (O = mr('n', F, J)))
      : ((J = t < 0 && n > 1 ? -t : t),
        (O = mr('n', F, J)),
        J < 0 &&
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
              z = i[s].v.substr(c + 1);
            c >= 0;
            --c
          )
            k >= 0 &&
              (i[s].v.charAt(c) === '0' || i[s].v.charAt(c) === '#') &&
              (z = O.charAt(k--) + z);
          (i[s].v = z), (i[s].t = 't'), (I = s);
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
              z = i[s].v.substr(0, c);
            c < i[s].v.length;
            ++c
          )
            k < O.length && (z += O.charAt(k++));
          (i[s].v = z), (i[s].t = 't'), (I = s);
        }
    }
  }
  for (s = 0; s < i.length; ++s)
    i[s] != null &&
      'n?'.indexOf(i[s].t) > -1 &&
      ((J = n > 1 && t < 0 && s > 0 && i[s - 1].v === '-' ? -t : t),
      (i[s].v = mr(i[s].t, i[s].v, J)),
      (i[s].t = 't'));
  var V = '';
  for (s = 0; s !== i.length; ++s) i[s] != null && (V += i[s].v);
  return V;
}
var V0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function G0(e, t) {
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
function Q1(e, t) {
  var r = J1(e),
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
    var s = r[0].match(V0),
      f = r[1].match(V0);
    return G0(t, s)
      ? [n, r[0]]
      : G0(t, f)
        ? [n, r[1]]
        : [n, r[s != null && f != null ? 2 : 1]];
  }
  return [n, a];
}
function Ir(e, t, r) {
  r == null && (r = {});
  var n = '';
  switch (typeof e) {
    case 'string':
      e == 'm/d/yy' && r.dateNF ? (n = r.dateNF) : (n = e);
      break;
    case 'number':
      e == 14 && r.dateNF
        ? (n = r.dateNF)
        : (n = (r.table != null ? r.table : qe)[e]),
        n == null && (n = (r.table && r.table[H0[e]]) || qe[H0[e]]),
        n == null && (n = P1[e] || 'General');
      break;
  }
  if (ea(n, 0)) return hs(t, r);
  t instanceof Date && (t = Ro(t, r.date1904));
  var i = Q1(n, t);
  if (ea(i[1])) return hs(t, r);
  if (t === !0) t = 'TRUE';
  else if (t === !1) t = 'FALSE';
  else if (t === '' || t == null) return '';
  return Z1(i[1], t, r, i[0]);
}
function Uo(e, t) {
  if (typeof t != 'number') {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (qe[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (qe[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return (qe[t] = e), t;
}
function Aa(e) {
  for (var t = 0; t != 392; ++t) e[t] !== void 0 && Uo(e[t], t);
}
function ya() {
  qe = I1();
}
var Ho = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ed(e) {
  var t = typeof e == 'number' ? qe[e] : e;
  return (t = t.replace(Ho, '(\\d+)')), new RegExp('^' + t + '$');
}
function td(e, t, r) {
  var n = -1,
    i = -1,
    a = -1,
    s = -1,
    f = -1,
    l = -1;
  (t.match(Ho) || []).forEach(function (h, u) {
    var x = parseInt(r[u + 1], 10);
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
var rd = (function () {
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
        V = 0,
        X = typeof Int32Array < 'u' ? new Int32Array(4096) : new Array(4096);
      for (V = 0; V != 256; ++V) X[V] = O[V];
      for (V = 0; V != 256; ++V)
        for (I = O[V], H = 256 + V; H < 4096; H += 256)
          I = X[H] = (I >>> 8) ^ O[I & 255];
      var K = [];
      for (V = 1; V != 16; ++V)
        K[V - 1] =
          typeof Int32Array < 'u'
            ? X.subarray(V * 256, V * 256 + 256)
            : X.slice(V * 256, V * 256 + 256);
      return K;
    }
    var i = n(r),
      a = i[0],
      s = i[1],
      f = i[2],
      l = i[3],
      o = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      x = i[8],
      v = i[9],
      d = i[10],
      m = i[11],
      S = i[12],
      y = i[13],
      F = i[14];
    function k(O, H) {
      for (var I = H ^ -1, V = 0, X = O.length; V < X; )
        I = (I >>> 8) ^ r[(I ^ O.charCodeAt(V++)) & 255];
      return ~I;
    }
    function z(O, H) {
      for (var I = H ^ -1, V = O.length - 15, X = 0; X < V; )
        I =
          F[O[X++] ^ (I & 255)] ^
          y[O[X++] ^ ((I >> 8) & 255)] ^
          S[O[X++] ^ ((I >> 16) & 255)] ^
          m[O[X++] ^ (I >>> 24)] ^
          d[O[X++]] ^
          v[O[X++]] ^
          x[O[X++]] ^
          u[O[X++]] ^
          h[O[X++]] ^
          c[O[X++]] ^
          o[O[X++]] ^
          l[O[X++]] ^
          f[O[X++]] ^
          s[O[X++]] ^
          a[O[X++]] ^
          r[O[X++]];
      for (V += 15; X < V; ) I = (I >>> 8) ^ r[(I ^ O[X++]) & 255];
      return ~I;
    }
    function J(O, H) {
      for (var I = H ^ -1, V = 0, X = O.length, K = 0, ne = 0; V < X; )
        (K = O.charCodeAt(V++)),
          K < 128
            ? (I = (I >>> 8) ^ r[(I ^ K) & 255])
            : K < 2048
              ? ((I = (I >>> 8) ^ r[(I ^ (192 | ((K >> 6) & 31))) & 255]),
                (I = (I >>> 8) ^ r[(I ^ (128 | (K & 63))) & 255]))
              : K >= 55296 && K < 57344
                ? ((K = (K & 1023) + 64),
                  (ne = O.charCodeAt(V++) & 1023),
                  (I = (I >>> 8) ^ r[(I ^ (240 | ((K >> 8) & 7))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | ((K >> 2) & 63))) & 255]),
                  (I =
                    (I >>> 8) ^
                    r[(I ^ (128 | ((ne >> 6) & 15) | ((K & 3) << 4))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | (ne & 63))) & 255]))
                : ((I = (I >>> 8) ^ r[(I ^ (224 | ((K >> 12) & 15))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | ((K >> 6) & 63))) & 255]),
                  (I = (I >>> 8) ^ r[(I ^ (128 | (K & 63))) & 255]));
      return ~I;
    }
    return (e.table = r), (e.bstr = k), (e.buf = z), (e.str = J), e;
  })(),
  Ie = (function () {
    var t = {};
    t.version = '1.2.1';
    function r(p, E) {
      for (
        var _ = p.split('/'),
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
    function n(p) {
      if (p.charAt(p.length - 1) == '/')
        return p.slice(0, -1).indexOf('/') === -1 ? p : n(p.slice(0, -1));
      var E = p.lastIndexOf('/');
      return E === -1 ? p : p.slice(0, E + 1);
    }
    function i(p) {
      if (p.charAt(p.length - 1) == '/') return i(p.slice(0, -1));
      var E = p.lastIndexOf('/');
      return E === -1 ? p : p.slice(E + 1);
    }
    function a(p, E) {
      typeof E == 'string' && (E = new Date(E));
      var _ = E.getHours();
      (_ = (_ << 6) | E.getMinutes()),
        (_ = (_ << 5) | (E.getSeconds() >>> 1)),
        p.write_shift(2, _);
      var g = E.getFullYear() - 1980;
      (g = (g << 4) | (E.getMonth() + 1)),
        (g = (g << 5) | E.getDate()),
        p.write_shift(2, g);
    }
    function s(p) {
      var E = p.read_shift(2) & 65535,
        _ = p.read_shift(2) & 65535,
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
      var M = E & 63;
      return (
        (E >>>= 6), g.setHours(E), g.setMinutes(M), g.setSeconds(D << 1), g
      );
    }
    function f(p) {
      Lt(p, 0);
      for (var E = {}, _ = 0; p.l <= p.length - 4; ) {
        var g = p.read_shift(2),
          T = p.read_shift(2),
          w = p.l + T,
          D = {};
        switch (g) {
          case 21589:
            (_ = p.read_shift(1)),
              _ & 1 && (D.mtime = p.read_shift(4)),
              T > 5 &&
                (_ & 2 && (D.atime = p.read_shift(4)),
                _ & 4 && (D.ctime = p.read_shift(4))),
              D.mtime && (D.mt = new Date(D.mtime * 1e3));
            break;
        }
        (p.l = w), (E[g] = D);
      }
      return E;
    }
    var l;
    function o() {
      return l || (l = {});
    }
    function c(p, E) {
      if (p[0] == 80 && p[1] == 75) return yi(p, E);
      if ((p[0] | 32) == 109 && (p[1] | 32) == 105) return Ma(p, E);
      if (p.length < 512)
        throw new Error('CFB file size ' + p.length + ' < 512');
      var _ = 3,
        g = 512,
        T = 0,
        w = 0,
        D = 0,
        M = 0,
        N = 0,
        P = [],
        L = p.slice(0, 512);
      Lt(L, 0);
      var W = h(L);
      switch (((_ = W[0]), _)) {
        case 3:
          g = 512;
          break;
        case 4:
          g = 4096;
          break;
        case 0:
          if (W[1] == 0) return yi(p, E);
        default:
          throw new Error('Major Version: Expected 3 or 4 saw ' + _);
      }
      g !== 512 && ((L = p.slice(0, g)), Lt(L, 28));
      var re = p.slice(0, g);
      u(L, _);
      var fe = L.read_shift(4, 'i');
      if (_ === 3 && fe !== 0)
        throw new Error('# Directory Sectors: Expected 0 saw ' + fe);
      (L.l += 4),
        (D = L.read_shift(4, 'i')),
        (L.l += 4),
        L.chk('00100000', 'Mini Stream Cutoff Size: '),
        (M = L.read_shift(4, 'i')),
        (T = L.read_shift(4, 'i')),
        (N = L.read_shift(4, 'i')),
        (w = L.read_shift(4, 'i'));
      for (
        var Y = -1, ae = 0;
        ae < 109 && ((Y = L.read_shift(4, 'i')), !(Y < 0));
        ++ae
      )
        P[ae] = Y;
      var pe = x(p, g);
      m(N, w, pe, g, P);
      var Be = y(pe, D, P, g);
      (Be[D].name = '!Directory'),
        T > 0 && M !== ne && (Be[M].name = '!MiniFAT'),
        (Be[P[0]].name = '!FAT'),
        (Be.fat_addrs = P),
        (Be.ssz = g);
      var Me = {},
        tt = [],
        Hr = [],
        Wr = [];
      F(D, Be, pe, tt, T, Me, Hr, M), v(Hr, Wr, tt), tt.shift();
      var zr = { FileIndex: Hr, FullPaths: Wr };
      return E && E.raw && (zr.raw = { header: re, sectors: pe }), zr;
    }
    function h(p) {
      if (p[p.l] == 80 && p[p.l + 1] == 75) return [0, 0];
      p.chk(Te, 'Header Signature: '), (p.l += 16);
      var E = p.read_shift(2, 'u');
      return [p.read_shift(2, 'u'), E];
    }
    function u(p, E) {
      var _ = 9;
      switch (((p.l += 2), (_ = p.read_shift(2)))) {
        case 9:
          if (E != 3) throw new Error('Sector Shift: Expected 9 saw ' + _);
          break;
        case 12:
          if (E != 4) throw new Error('Sector Shift: Expected 12 saw ' + _);
          break;
        default:
          throw new Error('Sector Shift: Expected 9 or 12 saw ' + _);
      }
      p.chk('0600', 'Mini Sector Shift: '), p.chk('000000000000', 'Reserved: ');
    }
    function x(p, E) {
      for (var _ = Math.ceil(p.length / E) - 1, g = [], T = 1; T < _; ++T)
        g[T - 1] = p.slice(T * E, (T + 1) * E);
      return (g[_ - 1] = p.slice(_ * E)), g;
    }
    function v(p, E, _) {
      for (
        var g = 0, T = 0, w = 0, D = 0, M = 0, N = _.length, P = [], L = [];
        g < N;
        ++g
      )
        (P[g] = L[g] = g), (E[g] = _[g]);
      for (; M < L.length; ++M)
        (g = L[M]),
          (T = p[g].L),
          (w = p[g].R),
          (D = p[g].C),
          P[g] === g &&
            (T !== -1 && P[T] !== T && (P[g] = P[T]),
            w !== -1 && P[w] !== w && (P[g] = P[w])),
          D !== -1 && (P[D] = g),
          T !== -1 &&
            g != P[g] &&
            ((P[T] = P[g]), L.lastIndexOf(T) < M && L.push(T)),
          w !== -1 &&
            g != P[g] &&
            ((P[w] = P[g]), L.lastIndexOf(w) < M && L.push(w));
      for (g = 1; g < N; ++g)
        P[g] === g &&
          (w !== -1 && P[w] !== w
            ? (P[g] = P[w])
            : T !== -1 && P[T] !== T && (P[g] = P[T]));
      for (g = 1; g < N; ++g)
        if (p[g].type !== 0) {
          if (((M = g), M != P[M]))
            do (M = P[M]), (E[g] = E[M] + '/' + E[g]);
            while (M !== 0 && P[M] !== -1 && M != P[M]);
          P[g] = -1;
        }
      for (E[0] += '/', g = 1; g < N; ++g) p[g].type !== 2 && (E[g] += '/');
    }
    function d(p, E, _) {
      for (var g = p.start, T = p.size, w = [], D = g; _ && T > 0 && D >= 0; )
        w.push(E.slice(D * K, D * K + K)), (T -= K), (D = Vr(_, D * 4));
      return w.length === 0 ? U(0) : ut(w).slice(0, p.size);
    }
    function m(p, E, _, g, T) {
      var w = ne;
      if (p === ne) {
        if (E !== 0) throw new Error('DIFAT chain shorter than expected');
      } else if (p !== -1) {
        var D = _[p],
          M = (g >>> 2) - 1;
        if (!D) return;
        for (var N = 0; N < M && (w = Vr(D, N * 4)) !== ne; ++N) T.push(w);
        m(Vr(D, g - 4), E - 1, _, g, T);
      }
    }
    function S(p, E, _, g, T) {
      var w = [],
        D = [];
      T || (T = []);
      var M = g - 1,
        N = 0,
        P = 0;
      for (N = E; N >= 0; ) {
        (T[N] = !0), (w[w.length] = N), D.push(p[N]);
        var L = _[Math.floor((N * 4) / g)];
        if (((P = (N * 4) & M), g < 4 + P))
          throw new Error('FAT boundary crossed: ' + N + ' 4 ' + g);
        if (!p[L]) break;
        N = Vr(p[L], P);
      }
      return { nodes: w, data: Z0([D]) };
    }
    function y(p, E, _, g) {
      var T = p.length,
        w = [],
        D = [],
        M = [],
        N = [],
        P = g - 1,
        L = 0,
        W = 0,
        re = 0,
        fe = 0;
      for (L = 0; L < T; ++L)
        if (((M = []), (re = L + E), re >= T && (re -= T), !D[re])) {
          N = [];
          var Y = [];
          for (W = re; W >= 0; ) {
            (Y[W] = !0), (D[W] = !0), (M[M.length] = W), N.push(p[W]);
            var ae = _[Math.floor((W * 4) / g)];
            if (((fe = (W * 4) & P), g < 4 + fe))
              throw new Error('FAT boundary crossed: ' + W + ' 4 ' + g);
            if (!p[ae] || ((W = Vr(p[ae], fe)), Y[W])) break;
          }
          w[re] = { nodes: M, data: Z0([N]) };
        }
      return w;
    }
    function F(p, E, _, g, T, w, D, M) {
      for (
        var N = 0, P = g.length ? 2 : 0, L = E[p].data, W = 0, re = 0, fe;
        W < L.length;
        W += 128
      ) {
        var Y = L.slice(W, W + 128);
        Lt(Y, 64), (re = Y.read_shift(2)), (fe = Ws(Y, 0, re - P)), g.push(fe);
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
          pe =
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2) +
            Y.read_shift(2);
        pe !== 0 && (ae.ct = k(Y, Y.l - 8));
        var Be =
          Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2) + Y.read_shift(2);
        Be !== 0 && (ae.mt = k(Y, Y.l - 8)),
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
                    (ae.content = d(ae, E[N].data, (E[M] || {}).data))),
          ae.content && Lt(ae.content, 0),
          (w[fe] = ae),
          D.push(ae);
      }
    }
    function k(p, E) {
      return new Date(
        ((Bt(p, E + 4) / 1e7) * Math.pow(2, 32) +
          Bt(p, E) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function z(p, E) {
      return o(), c(l.readFileSync(p), E);
    }
    function J(p, E) {
      var _ = E && E.type;
      switch (
        (_ || (Fe && Buffer.isBuffer(p) && (_ = 'buffer')), _ || 'base64')
      ) {
        case 'file':
          return z(p, E);
        case 'base64':
          return c(er(Tr(p)), E);
        case 'binary':
          return c(er(p), E);
      }
      return c(p, E);
    }
    function O(p, E) {
      var _ = E || {},
        g = _.root || 'Root Entry';
      if (
        (p.FullPaths || (p.FullPaths = []),
        p.FileIndex || (p.FileIndex = []),
        p.FullPaths.length !== p.FileIndex.length)
      )
        throw new Error('inconsistent CFB structure');
      p.FullPaths.length === 0 &&
        ((p.FullPaths[0] = g + '/'), (p.FileIndex[0] = { name: g, type: 5 })),
        _.CLSID && (p.FileIndex[0].clsid = _.CLSID),
        H(p);
    }
    function H(p) {
      var E = 'Sh33tJ5';
      if (!Ie.find(p, '/' + E)) {
        var _ = U(4);
        (_[0] = 55),
          (_[1] = _[3] = 50),
          (_[2] = 54),
          p.FileIndex.push({
            name: E,
            type: 2,
            content: _,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          p.FullPaths.push(p.FullPaths[0] + E),
          I(p);
      }
    }
    function I(p, E) {
      O(p);
      for (var _ = !1, g = !1, T = p.FullPaths.length - 1; T >= 0; --T) {
        var w = p.FileIndex[T];
        switch (w.type) {
          case 0:
            g ? (_ = !0) : (p.FileIndex.pop(), p.FullPaths.pop());
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
          M = 0,
          N = Object.create ? Object.create(null) : {},
          P = [];
        for (T = 0; T < p.FullPaths.length; ++T)
          (N[p.FullPaths[T]] = !0),
            p.FileIndex[T].type !== 0 &&
              P.push([p.FullPaths[T], p.FileIndex[T]]);
        for (T = 0; T < P.length; ++T) {
          var L = n(P[T][0]);
          (g = N[L]),
            g ||
              (P.push([
                L,
                {
                  name: i(L).replace('/', ''),
                  type: 1,
                  clsid: Ge,
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
            p.FullPaths = [],
            p.FileIndex = [],
            T = 0;
          T < P.length;
          ++T
        )
          (p.FullPaths[T] = P[T][0]), (p.FileIndex[T] = P[T][1]);
        for (T = 0; T < P.length; ++T) {
          var W = p.FileIndex[T],
            re = p.FullPaths[T];
          if (
            ((W.name = i(re).replace('/', '')),
            (W.L = W.R = W.C = -(W.color = 1)),
            (W.size = W.content ? W.content.length : 0),
            (W.start = 0),
            (W.clsid = W.clsid || Ge),
            T === 0)
          )
            (W.C = P.length > 1 ? 1 : -1), (W.size = 0), (W.type = 5);
          else if (re.slice(-1) == '/') {
            for (M = T + 1; M < P.length && n(p.FullPaths[M]) != re; ++M);
            for (
              W.C = M >= P.length ? -1 : M, M = T + 1;
              M < P.length && n(p.FullPaths[M]) != n(re);
              ++M
            );
            (W.R = M >= P.length ? -1 : M), (W.type = 1);
          } else
            n(p.FullPaths[T + 1] || '') == n(re) && (W.R = T + 1), (W.type = 2);
        }
      }
    }
    function V(p, E) {
      var _ = E || {};
      if (_.fileType == 'mad') return q(p, _);
      switch ((I(p), _.fileType)) {
        case 'zip':
          return ka(p, _);
      }
      var g = (function (fe) {
          for (var Y = 0, ae = 0, pe = 0; pe < fe.FileIndex.length; ++pe) {
            var Be = fe.FileIndex[pe];
            if (Be.content) {
              var Me = Be.content.length;
              Me > 0 &&
                (Me < 4096 ? (Y += (Me + 63) >> 6) : (ae += (Me + 511) >> 9));
            }
          }
          for (
            var tt = (fe.FullPaths.length + 3) >> 2,
              Hr = (Y + 7) >> 3,
              Wr = (Y + 127) >> 7,
              zr = Hr + ae + tt + Wr,
              ir = (zr + 127) >> 7,
              Bn = ir <= 109 ? 0 : Math.ceil((ir - 109) / 127);
            (zr + ir + Bn + 127) >> 7 > ir;

          )
            Bn = ++ir <= 109 ? 0 : Math.ceil((ir - 109) / 127);
          var Yt = [1, Bn, ir, Wr, tt, ae, Y, 0];
          return (
            (fe.FileIndex[0].size = Y << 6),
            (Yt[7] =
              (fe.FileIndex[0].start =
                Yt[0] + Yt[1] + Yt[2] + Yt[3] + Yt[4] + Yt[5]) +
              ((Yt[6] + 7) >> 3)),
            Yt
          );
        })(p),
        T = U(g[7] << 9),
        w = 0,
        D = 0;
      {
        for (w = 0; w < 8; ++w) T.write_shift(1, xe[w]);
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
      var M = function (fe) {
        for (D += fe; w < D - 1; ++w) T.write_shift(-4, w + 1);
        fe && (++w, T.write_shift(-4, ne));
      };
      for (D = w = 0, D += g[1]; w < D; ++w) T.write_shift(-4, Le.DIFSECT);
      for (D += g[2]; w < D; ++w) T.write_shift(-4, Le.FATSECT);
      M(g[3]), M(g[4]);
      for (var N = 0, P = 0, L = p.FileIndex[0]; N < p.FileIndex.length; ++N)
        (L = p.FileIndex[N]),
          L.content &&
            ((P = L.content.length),
            !(P < 4096) && ((L.start = D), M((P + 511) >> 9)));
      for (M((g[6] + 7) >> 3); T.l & 511; ) T.write_shift(-4, Le.ENDOFCHAIN);
      for (D = w = 0, N = 0; N < p.FileIndex.length; ++N)
        (L = p.FileIndex[N]),
          L.content &&
            ((P = L.content.length),
            !(!P || P >= 4096) && ((L.start = D), M((P + 63) >> 6)));
      for (; T.l & 511; ) T.write_shift(-4, Le.ENDOFCHAIN);
      for (w = 0; w < g[4] << 2; ++w) {
        var W = p.FullPaths[w];
        if (!W || W.length === 0) {
          for (N = 0; N < 17; ++N) T.write_shift(4, 0);
          for (N = 0; N < 3; ++N) T.write_shift(4, -1);
          for (N = 0; N < 12; ++N) T.write_shift(4, 0);
          continue;
        }
        (L = p.FileIndex[w]), w === 0 && (L.start = L.size ? L.start - 1 : ne);
        var re = (w === 0 && _.root) || L.name;
        if (
          ((P = 2 * (re.length + 1)),
          T.write_shift(64, re, 'utf16le'),
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
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((L = p.FileIndex[w]), L.size >= 4096))
          if (((T.l = (L.start + 1) << 9), Fe && Buffer.isBuffer(L.content)))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 511) & -512);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 511; ++N) T.write_shift(1, 0);
          }
      for (w = 1; w < p.FileIndex.length; ++w)
        if (((L = p.FileIndex[w]), L.size > 0 && L.size < 4096))
          if (Fe && Buffer.isBuffer(L.content))
            L.content.copy(T, T.l, 0, L.size), (T.l += (L.size + 63) & -64);
          else {
            for (N = 0; N < L.size; ++N) T.write_shift(1, L.content[N]);
            for (; N & 63; ++N) T.write_shift(1, 0);
          }
      if (Fe) T.l = T.length;
      else for (; T.l < T.length; ) T.write_shift(1, 0);
      return T;
    }
    function X(p, E) {
      var _ = p.FullPaths.map(function (N) {
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
      if (D !== -1) return p.FileIndex[D];
      var M = !w.match(Oi);
      for (
        w = w.replace(Xn, ''), M && (w = w.replace(Oi, '!')), D = 0;
        D < _.length;
        ++D
      )
        if (
          (M ? _[D].replace(Oi, '!') : _[D]).replace(Xn, '') == w ||
          (M ? g[D].replace(Oi, '!') : g[D]).replace(Xn, '') == w
        )
          return p.FileIndex[D];
      return null;
    }
    var K = 64,
      ne = -2,
      Te = 'd0cf11e0a1b11ae1',
      xe = [208, 207, 17, 224, 161, 177, 26, 225],
      Ge = '00000000000000000000000000000000',
      Le = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: ne,
        FREESECT: -1,
        HEADER_SIGNATURE: Te,
        HEADER_MINOR_VERSION: '3e00',
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: Ge,
        EntryTypes: [
          'unknown',
          'storage',
          'stream',
          'lockbytes',
          'property',
          'root',
        ],
      };
    function ot(p, E, _) {
      o();
      var g = V(p, _);
      l.writeFileSync(E, g);
    }
    function We(p) {
      for (var E = new Array(p.length), _ = 0; _ < p.length; ++_)
        E[_] = String.fromCharCode(p[_]);
      return E.join('');
    }
    function nt(p, E) {
      var _ = V(p, E);
      switch ((E && E.type) || 'buffer') {
        case 'file':
          return o(), l.writeFileSync(E.filename, _), _;
        case 'binary':
          return typeof _ == 'string' ? _ : We(_);
        case 'base64':
          return ni(typeof _ == 'string' ? _ : We(_));
        case 'buffer':
          if (Fe) return Buffer.isBuffer(_) ? _ : Ar(_);
        case 'array':
          return typeof _ == 'string' ? er(_) : _;
      }
      return _;
    }
    var et;
    function A(p) {
      try {
        var E = p.InflateRaw,
          _ = new E();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          et = p;
        else throw new Error('zlib does not expose bytesRead');
      } catch (g) {
        console.error('cannot use native zlib: ' + (g.message || g));
      }
    }
    function b(p, E) {
      if (!et) return Ai(p, E);
      var _ = et.InflateRaw,
        g = new _(),
        T = g._processChunk(p.slice(p.l), g._finishFlushFlag);
      return (p.l += g.bytesRead), T;
    }
    function R(p) {
      return et ? et.deflateRawSync(p) : Ei(p);
    }
    var C = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      j = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      ue = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function he(p) {
      var E =
        (((p << 1) | (p << 11)) & 139536) | (((p << 5) | (p << 15)) & 558144);
      return ((E >> 16) | (E >> 8) | E) & 255;
    }
    for (
      var ce = typeof Uint8Array < 'u',
        ie = ce ? new Uint8Array(256) : [],
        Ce = 0;
      Ce < 256;
      ++Ce
    )
      ie[Ce] = he(Ce);
    function Ee(p, E) {
      var _ = ie[p & 255];
      return E <= 8
        ? _ >>> (8 - E)
        : ((_ = (_ << 8) | ie[(p >> 8) & 255]),
          E <= 16
            ? _ >>> (16 - E)
            : ((_ = (_ << 8) | ie[(p >> 16) & 255]), _ >>> (24 - E)));
    }
    function it(p, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((p[g] | (_ <= 6 ? 0 : p[g + 1] << 8)) >>> _) & 3;
    }
    function we(p, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((p[g] | (_ <= 5 ? 0 : p[g + 1] << 8)) >>> _) & 7;
    }
    function $t(p, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((p[g] | (_ <= 4 ? 0 : p[g + 1] << 8)) >>> _) & 15;
    }
    function ze(p, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((p[g] | (_ <= 3 ? 0 : p[g + 1] << 8)) >>> _) & 31;
    }
    function le(p, E) {
      var _ = E & 7,
        g = E >>> 3;
      return ((p[g] | (_ <= 1 ? 0 : p[g + 1] << 8)) >>> _) & 127;
    }
    function yt(p, E, _) {
      var g = E & 7,
        T = E >>> 3,
        w = (1 << _) - 1,
        D = p[T] >>> g;
      return (
        _ < 8 - g ||
          ((D |= p[T + 1] << (8 - g)), _ < 16 - g) ||
          ((D |= p[T + 2] << (16 - g)), _ < 24 - g) ||
          (D |= p[T + 3] << (24 - g)),
        D & w
      );
    }
    function Ht(p, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        g <= 5
          ? (p[T] |= (_ & 7) << g)
          : ((p[T] |= (_ << g) & 255), (p[T + 1] = (_ & 7) >> (8 - g))),
        E + 3
      );
    }
    function hr(p, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ = (_ & 1) << g), (p[T] |= _), E + 1;
    }
    function dr(p, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (_ <<= g), (p[T] |= _ & 255), (_ >>>= 8), (p[T + 1] = _), E + 8;
    }
    function Nn(p, E, _) {
      var g = E & 7,
        T = E >>> 3;
      return (
        (_ <<= g),
        (p[T] |= _ & 255),
        (_ >>>= 8),
        (p[T + 1] = _ & 255),
        (p[T + 2] = _ >>> 8),
        E + 16
      );
    }
    function an(p, E) {
      var _ = p.length,
        g = 2 * _ > E ? 2 * _ : E + 5,
        T = 0;
      if (_ >= E) return p;
      if (Fe) {
        var w = B0(g);
        if (p.copy) p.copy(w);
        else for (; T < p.length; ++T) w[T] = p[T];
        return w;
      } else if (ce) {
        var D = new Uint8Array(g);
        if (D.set) D.set(p);
        else for (; T < _; ++T) D[T] = p[T];
        return D;
      }
      return (p.length = g), p;
    }
    function Wt(p) {
      for (var E = new Array(p), _ = 0; _ < p; ++_) E[_] = 0;
      return E;
    }
    function Br(p, E, _) {
      var g = 1,
        T = 0,
        w = 0,
        D = 0,
        M = 0,
        N = p.length,
        P = ce ? new Uint16Array(32) : Wt(32);
      for (w = 0; w < 32; ++w) P[w] = 0;
      for (w = N; w < _; ++w) p[w] = 0;
      N = p.length;
      var L = ce ? new Uint16Array(N) : Wt(N);
      for (w = 0; w < N; ++w) P[(T = p[w])]++, g < T && (g = T), (L[w] = 0);
      for (P[0] = 0, w = 1; w <= g; ++w) P[w + 16] = M = (M + P[w - 1]) << 1;
      for (w = 0; w < N; ++w) (M = p[w]), M != 0 && (L[w] = P[M + 16]++);
      var W = 0;
      for (w = 0; w < N; ++w)
        if (((W = p[w]), W != 0))
          for (
            M = Ee(L[w], g) >> (g - W), D = (1 << (g + 4 - W)) - 1;
            D >= 0;
            --D
          )
            E[M | (D << W)] = (W & 15) | (w << 4);
      return g;
    }
    var kn = ce ? new Uint16Array(512) : Wt(512),
      sn = ce ? new Uint16Array(32) : Wt(32);
    if (!ce) {
      for (var xr = 0; xr < 512; ++xr) kn[xr] = 0;
      for (xr = 0; xr < 32; ++xr) sn[xr] = 0;
    }
    (function () {
      for (var p = [], E = 0; E < 32; E++) p.push(5);
      Br(p, sn, 32);
      var _ = [];
      for (E = 0; E <= 143; E++) _.push(8);
      for (; E <= 255; E++) _.push(9);
      for (; E <= 279; E++) _.push(7);
      for (; E <= 287; E++) _.push(8);
      Br(_, kn, 288);
    })();
    var gi = (function () {
      for (
        var E = ce ? new Uint8Array(32768) : [], _ = 0, g = 0;
        _ < ue.length - 1;
        ++_
      )
        for (; g < ue[_ + 1]; ++g) E[g] = _;
      for (; g < 32768; ++g) E[g] = 29;
      var T = ce ? new Uint8Array(259) : [];
      for (_ = 0, g = 0; _ < j.length - 1; ++_)
        for (; g < j[_ + 1]; ++g) T[g] = _;
      function w(M, N) {
        for (var P = 0; P < M.length; ) {
          var L = Math.min(65535, M.length - P),
            W = P + L == M.length;
          for (
            N.write_shift(1, +W),
              N.write_shift(2, L),
              N.write_shift(2, ~L & 65535);
            L-- > 0;

          )
            N[N.l++] = M[P++];
        }
        return N.l;
      }
      function D(M, N) {
        for (
          var P = 0, L = 0, W = ce ? new Uint16Array(32768) : [];
          L < M.length;

        ) {
          var re = Math.min(65535, M.length - L);
          if (re < 10) {
            for (
              P = Ht(N, P, +(L + re == M.length)),
                P & 7 && (P += 8 - (P & 7)),
                N.l = (P / 8) | 0,
                N.write_shift(2, re),
                N.write_shift(2, ~re & 65535);
              re-- > 0;

            )
              N[N.l++] = M[L++];
            P = N.l * 8;
            continue;
          }
          P = Ht(N, P, +(L + re == M.length) + 2);
          for (var fe = 0; re-- > 0; ) {
            var Y = M[L];
            fe = ((fe << 5) ^ Y) & 32767;
            var ae = -1,
              pe = 0;
            if (
              (ae = W[fe]) &&
              ((ae |= L & -32768), ae > L && (ae -= 32768), ae < L)
            )
              for (; M[ae + pe] == M[L + pe] && pe < 250; ) ++pe;
            if (pe > 2) {
              (Y = T[pe]),
                Y <= 22
                  ? (P = dr(N, P, ie[Y + 1] >> 1) - 1)
                  : (dr(N, P, 3),
                    (P += 5),
                    dr(N, P, ie[Y - 23] >> 5),
                    (P += 3));
              var Be = Y < 8 ? 0 : (Y - 4) >> 2;
              Be > 0 && (Nn(N, P, pe - j[Y]), (P += Be)),
                (Y = E[L - ae]),
                (P = dr(N, P, ie[Y] >> 3)),
                (P -= 3);
              var Me = Y < 4 ? 0 : (Y - 2) >> 1;
              Me > 0 && (Nn(N, P, L - ae - ue[Y]), (P += Me));
              for (var tt = 0; tt < pe; ++tt)
                (W[fe] = L & 32767), (fe = ((fe << 5) ^ M[L]) & 32767), ++L;
              re -= pe - 1;
            } else
              Y <= 143 ? (Y = Y + 48) : (P = hr(N, P, 1)),
                (P = dr(N, P, ie[Y])),
                (W[fe] = L & 32767),
                ++L;
          }
          P = dr(N, P, 0) - 1;
        }
        return (N.l = ((P + 7) / 8) | 0), N.l;
      }
      return function (N, P) {
        return N.length < 8 ? w(N, P) : D(N, P);
      };
    })();
    function Ei(p) {
      var E = U(50 + Math.floor(p.length * 1.1)),
        _ = gi(p, E);
      return E.slice(0, _);
    }
    var In = ce ? new Uint16Array(32768) : Wt(32768),
      Ti = ce ? new Uint16Array(32768) : Wt(32768),
      Pn = ce ? new Uint16Array(128) : Wt(128),
      wi = 1,
      Ln = 1;
    function Na(p, E) {
      var _ = ze(p, E) + 257;
      E += 5;
      var g = ze(p, E) + 1;
      E += 5;
      var T = $t(p, E) + 4;
      E += 4;
      for (
        var w = 0,
          D = ce ? new Uint8Array(19) : Wt(19),
          M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          N = 1,
          P = ce ? new Uint8Array(8) : Wt(8),
          L = ce ? new Uint8Array(8) : Wt(8),
          W = D.length,
          re = 0;
        re < T;
        ++re
      )
        (D[C[re]] = w = we(p, E)), N < w && (N = w), P[w]++, (E += 3);
      var fe = 0;
      for (P[0] = 0, re = 1; re <= N; ++re) L[re] = fe = (fe + P[re - 1]) << 1;
      for (re = 0; re < W; ++re) (fe = D[re]) != 0 && (M[re] = L[fe]++);
      var Y = 0;
      for (re = 0; re < W; ++re)
        if (((Y = D[re]), Y != 0)) {
          fe = ie[M[re]] >> (8 - Y);
          for (var ae = (1 << (7 - Y)) - 1; ae >= 0; --ae)
            Pn[fe | (ae << Y)] = (Y & 7) | (re << 3);
        }
      var pe = [];
      for (N = 1; pe.length < _ + g; )
        switch (((fe = Pn[le(p, E)]), (E += fe & 7), (fe >>>= 3))) {
          case 16:
            for (w = 3 + it(p, E), E += 2, fe = pe[pe.length - 1]; w-- > 0; )
              pe.push(fe);
            break;
          case 17:
            for (w = 3 + we(p, E), E += 3; w-- > 0; ) pe.push(0);
            break;
          case 18:
            for (w = 11 + le(p, E), E += 7; w-- > 0; ) pe.push(0);
            break;
          default:
            pe.push(fe), N < fe && (N = fe);
            break;
        }
      var Be = pe.slice(0, _),
        Me = pe.slice(_);
      for (re = _; re < 286; ++re) Be[re] = 0;
      for (re = g; re < 30; ++re) Me[re] = 0;
      return (wi = Br(Be, In, 286)), (Ln = Br(Me, Ti, 30)), E;
    }
    function Si(p, E) {
      if (p[0] == 3 && !(p[1] & 3)) return [$r(E), 2];
      for (
        var _ = 0,
          g = 0,
          T = B0(E || 1 << 18),
          w = 0,
          D = T.length >>> 0,
          M = 0,
          N = 0;
        (g & 1) == 0;

      ) {
        if (((g = we(p, _)), (_ += 3), g >>> 1))
          g >> 1 == 1
            ? ((M = 9), (N = 5))
            : ((_ = Na(p, _)), (M = wi), (N = Ln));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var P = p[_ >>> 3] | (p[(_ >>> 3) + 1] << 8);
          if (((_ += 32), P > 0))
            for (
              !E && D < w + P && ((T = an(T, w + P)), (D = T.length));
              P-- > 0;

            )
              (T[w++] = p[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !E && D < w + 32767 && ((T = an(T, w + 32767)), (D = T.length));
          var L = yt(p, _, M),
            W = g >>> 1 == 1 ? kn[L] : In[L];
          if (((_ += W & 15), (W >>>= 4), ((W >>> 8) & 255) === 0)) T[w++] = W;
          else {
            if (W == 256) break;
            W -= 257;
            var re = W < 8 ? 0 : (W - 4) >> 2;
            re > 5 && (re = 0);
            var fe = w + j[W];
            re > 0 && ((fe += yt(p, _, re)), (_ += re)),
              (L = yt(p, _, N)),
              (W = g >>> 1 == 1 ? sn[L] : Ti[L]),
              (_ += W & 15),
              (W >>>= 4);
            var Y = W < 4 ? 0 : (W - 2) >> 1,
              ae = ue[W];
            for (
              Y > 0 && ((ae += yt(p, _, Y)), (_ += Y)),
                !E && D < fe && ((T = an(T, fe + 100)), (D = T.length));
              w < fe;

            )
              (T[w] = T[w - ae]), ++w;
          }
        }
      }
      return E ? [T, (_ + 7) >>> 3] : [T.slice(0, w), (_ + 7) >>> 3];
    }
    function Ai(p, E) {
      var _ = p.slice(p.l || 0),
        g = Si(_, E);
      return (p.l += g[1]), g[0];
    }
    function bn(p, E) {
      if (p) typeof console < 'u' && console.error(E);
      else throw new Error(E);
    }
    function yi(p, E) {
      var _ = p;
      Lt(_, 0);
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
      var M = _.read_shift(2);
      _.l += 6;
      var N = _.read_shift(4);
      for (_.l = N, D = 0; D < M; ++D) {
        _.l += 20;
        var P = _.read_shift(4),
          L = _.read_shift(4),
          W = _.read_shift(2),
          re = _.read_shift(2),
          fe = _.read_shift(2);
        _.l += 8;
        var Y = _.read_shift(4),
          ae = f(_.slice(_.l + W, _.l + W + re));
        _.l += W + re + fe;
        var pe = _.l;
        (_.l = Y + 4), Fi(_, P, L, w, ae), (_.l = pe);
      }
      return w;
    }
    function Fi(p, E, _, g, T) {
      p.l += 2;
      var w = p.read_shift(2),
        D = p.read_shift(2),
        M = s(p);
      if (w & 8257) throw new Error('Unsupported ZIP encryption');
      for (
        var N = p.read_shift(4),
          P = p.read_shift(4),
          L = p.read_shift(4),
          W = p.read_shift(2),
          re = p.read_shift(2),
          fe = '',
          Y = 0;
        Y < W;
        ++Y
      )
        fe += String.fromCharCode(p[p.l++]);
      if (re) {
        var ae = f(p.slice(p.l, p.l + re));
        (ae[21589] || {}).mt && (M = ae[21589].mt),
          ((T || {})[21589] || {}).mt && (M = T[21589].mt);
      }
      p.l += re;
      var pe = p.slice(p.l, p.l + P);
      switch (D) {
        case 8:
          pe = b(p, L);
          break;
        case 0:
          break;
        default:
          throw new Error('Unsupported ZIP Compression method ' + D);
      }
      var Be = !1;
      w & 8 &&
        ((N = p.read_shift(4)),
        N == 134695760 && ((N = p.read_shift(4)), (Be = !0)),
        (P = p.read_shift(4)),
        (L = p.read_shift(4))),
        P != E && bn(Be, 'Bad compressed size: ' + E + ' != ' + P),
        L != _ && bn(Be, 'Bad uncompressed size: ' + _ + ' != ' + L),
        $e(g, fe, pe, { unsafe: !0, mt: M });
    }
    function ka(p, E) {
      var _ = E || {},
        g = [],
        T = [],
        w = U(1),
        D = _.compression ? 8 : 0,
        M = 0,
        N = 0,
        P = 0,
        L = 0,
        W = 0,
        re = p.FullPaths[0],
        fe = re,
        Y = p.FileIndex[0],
        ae = [],
        pe = 0;
      for (N = 1; N < p.FullPaths.length; ++N)
        if (
          ((fe = p.FullPaths[N].slice(re.length)),
          (Y = p.FileIndex[N]),
          !(!Y.size || !Y.content || fe == 'Sh33tJ5'))
        ) {
          var Be = L,
            Me = U(fe.length);
          for (P = 0; P < fe.length; ++P)
            Me.write_shift(1, fe.charCodeAt(P) & 127);
          (Me = Me.slice(0, Me.l)), (ae[W] = rd.buf(Y.content, 0));
          var tt = Y.content;
          D == 8 && (tt = R(tt)),
            (w = U(30)),
            w.write_shift(4, 67324752),
            w.write_shift(2, 20),
            w.write_shift(2, M),
            w.write_shift(2, D),
            Y.mt ? a(w, Y.mt) : w.write_shift(4, 0),
            w.write_shift(-4, ae[W]),
            w.write_shift(4, tt.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, Me.length),
            w.write_shift(2, 0),
            (L += w.length),
            g.push(w),
            (L += Me.length),
            g.push(Me),
            (L += tt.length),
            g.push(tt),
            (w = U(46)),
            w.write_shift(4, 33639248),
            w.write_shift(2, 0),
            w.write_shift(2, 20),
            w.write_shift(2, M),
            w.write_shift(2, D),
            w.write_shift(4, 0),
            w.write_shift(-4, ae[W]),
            w.write_shift(4, tt.length),
            w.write_shift(4, Y.content.length),
            w.write_shift(2, Me.length),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(2, 0),
            w.write_shift(4, 0),
            w.write_shift(4, Be),
            (pe += w.l),
            T.push(w),
            (pe += Me.length),
            T.push(Me),
            ++W;
        }
      return (
        (w = U(22)),
        w.write_shift(4, 101010256),
        w.write_shift(2, 0),
        w.write_shift(2, 0),
        w.write_shift(2, W),
        w.write_shift(2, W),
        w.write_shift(4, pe),
        w.write_shift(4, L),
        w.write_shift(2, 0),
        ut([ut(g), ut(T), w])
      );
    }
    var Mr = {
      htm: 'text/html',
      xml: 'text/xml',
      gif: 'image/gif',
      jpg: 'image/jpeg',
      png: 'image/png',
      mso: 'application/x-mso',
      thmx: 'application/vnd.ms-officetheme',
      sh33tj5: 'application/octet-stream',
    };
    function Ia(p, E) {
      if (p.ctype) return p.ctype;
      var _ = p.name || '',
        g = _.match(/\.([^\.]+)$/);
      return (g && Mr[g[1]]) ||
        (E && ((g = (_ = E).match(/[\.\\]([^\.\\])+$/)), g && Mr[g[1]]))
        ? Mr[g[1]]
        : 'application/octet-stream';
    }
    function Pa(p) {
      for (var E = ni(p), _ = [], g = 0; g < E.length; g += 76)
        _.push(E.slice(g, g + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function La(p) {
      var E = p.replace(
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
          var M = 76,
            N = w.slice(D, D + M);
          N.charAt(M - 1) == '='
            ? M--
            : N.charAt(M - 2) == '='
              ? (M -= 2)
              : N.charAt(M - 3) == '=' && (M -= 3),
            (N = w.slice(D, D + M)),
            (D += M),
            D < w.length && (N += '='),
            _.push(N);
        }
      }
      return _.join(`\r
`);
    }
    function ba(p) {
      for (var E = [], _ = 0; _ < p.length; ++_) {
        for (var g = p[_]; _ <= p.length && g.charAt(g.length - 1) == '='; )
          g = g.slice(0, g.length - 1) + p[++_];
        E.push(g);
      }
      for (var T = 0; T < E.length; ++T)
        E[T] = E[T].replace(/[=][0-9A-Fa-f]{2}/g, function (w) {
          return String.fromCharCode(parseInt(w.slice(1), 16));
        });
      return er(
        E.join(`\r
`),
      );
    }
    function Ba(p, E, _) {
      for (var g = '', T = '', w = '', D, M = 0; M < 10; ++M) {
        var N = E[M];
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
      switch ((++M, T.toLowerCase())) {
        case 'base64':
          D = er(Tr(E.slice(M).join('')));
          break;
        case 'quoted-printable':
          D = ba(E.slice(M));
          break;
        default:
          throw new Error('Unsupported Content-Transfer-Encoding ' + T);
      }
      var L = $e(p, g.slice(_.length), D, { unsafe: !0 });
      w && (L.ctype = w);
    }
    function Ma(p, E) {
      if (We(p.slice(0, 13)).toLowerCase() != 'mime-version:')
        throw new Error('Unsupported MAD header');
      var _ = (E && E.root) || '',
        g = (Fe && Buffer.isBuffer(p) ? p.toString('binary') : We(p)).split(`\r
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
      var M = '--' + (D[1] || ''),
        N = [],
        P = [],
        L = { FileIndex: N, FullPaths: P };
      O(L);
      var W,
        re = 0;
      for (T = 0; T < g.length; ++T) {
        var fe = g[T];
        (fe !== M && fe !== M + '--') ||
          (re++ && Ba(L, g.slice(W, T), _), (W = T));
      }
      return L;
    }
    function q(p, E) {
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
          w = p.FullPaths[0],
          D = w,
          M = p.FileIndex[0],
          N = 1;
        N < p.FullPaths.length;
        ++N
      )
        if (
          ((D = p.FullPaths[N].slice(w.length)),
          (M = p.FileIndex[N]),
          !(!M.size || !M.content || D == 'Sh33tJ5'))
        ) {
          D = D.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (pe) {
              return '_x' + pe.charCodeAt(0).toString(16) + '_';
            },
          ).replace(/[\u0080-\uFFFF]/g, function (pe) {
            return '_u' + pe.charCodeAt(0).toString(16) + '_';
          });
          for (
            var P = M.content,
              L = Fe && Buffer.isBuffer(P) ? P.toString('binary') : We(P),
              W = 0,
              re = Math.min(1024, L.length),
              fe = 0,
              Y = 0;
            Y <= re;
            ++Y
          )
            (fe = L.charCodeAt(Y)) >= 32 && fe < 128 && ++W;
          var ae = W >= (re * 4) / 5;
          T.push(g),
            T.push(
              'Content-Location: ' + (_.root || 'file:///C:/SheetJS/') + D,
            ),
            T.push(
              'Content-Transfer-Encoding: ' +
                (ae ? 'quoted-printable' : 'base64'),
            ),
            T.push('Content-Type: ' + Ia(M, D)),
            T.push(''),
            T.push(ae ? La(L) : Pa(L));
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
    function ge(p) {
      var E = {};
      return O(E, p), E;
    }
    function $e(p, E, _, g) {
      var T = g && g.unsafe;
      T || O(p);
      var w = !T && Ie.find(p, E);
      if (!w) {
        var D = p.FullPaths[0];
        E.slice(0, D.length) == D
          ? (D = E)
          : (D.slice(-1) != '/' && (D += '/'),
            (D = (D + E).replace('//', '/'))),
          (w = { name: i(E), type: 2 }),
          p.FileIndex.push(w),
          p.FullPaths.push(D),
          T || Ie.utils.cfb_gc(p);
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
    function kt(p, E) {
      O(p);
      var _ = Ie.find(p, E);
      if (_) {
        for (var g = 0; g < p.FileIndex.length; ++g)
          if (p.FileIndex[g] == _)
            return p.FileIndex.splice(g, 1), p.FullPaths.splice(g, 1), !0;
      }
      return !1;
    }
    function be(p, E, _) {
      O(p);
      var g = Ie.find(p, E);
      if (g) {
        for (var T = 0; T < p.FileIndex.length; ++T)
          if (p.FileIndex[T] == g)
            return (p.FileIndex[T].name = i(_)), (p.FullPaths[T] = _), !0;
      }
      return !1;
    }
    function Ur(p) {
      I(p, !0);
    }
    return (
      (t.find = X),
      (t.read = J),
      (t.parse = c),
      (t.write = nt),
      (t.writeFile = ot),
      (t.utils = {
        cfb_new: ge,
        cfb_add: $e,
        cfb_del: kt,
        cfb_mov: be,
        cfb_gc: Ur,
        ReadShift: qn,
        CheckField: il,
        prep_blob: Lt,
        bconcat: ut,
        use_zlib: A,
        _deflateRaw: Ei,
        _inflateRaw: Ai,
        consts: Le,
      }),
      t
    );
  })();
function nd(e) {
  return typeof e == 'string' ? Sa(e) : Array.isArray(e) ? R1(e) : e;
}
function xi(e, t, r) {
  if (typeof Deno < 'u') {
    if (r && typeof t == 'string')
      switch (r) {
        case 'utf8':
          t = new TextEncoder(r).encode(t);
          break;
        case 'binary':
          t = Sa(t);
          break;
        default:
          throw new Error('Unsupported encoding ' + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var n = r == 'utf8' ? ai(t) : t;
  if (typeof IE_SaveFile < 'u') return IE_SaveFile(n, e);
  if (typeof Blob < 'u') {
    var i = new Blob([nd(n)], { type: 'application/octet-stream' });
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
        Array.isArray(t) && (t = di(t)),
        f.write(t),
        f.close(),
        t
      );
    } catch (l) {
      if (!l.message || !l.message.match(/onstruct/)) throw l;
    }
  throw new Error('cannot save file ' + e);
}
function xt(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
    Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function j0(e, t) {
  for (var r = [], n = xt(e), i = 0; i !== n.length; ++i)
    r[e[n[i]][t]] == null && (r[e[n[i]][t]] = n[i]);
  return r;
}
function Bs(e) {
  for (var t = [], r = xt(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function Fa(e) {
  for (var t = [], r = xt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function id(e) {
  for (var t = [], r = xt(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var ra = new Date(1899, 11, 30, 0, 0, 0);
function Dt(e, t) {
  var r = e.getTime(),
    n = ra.getTime() + (e.getTimezoneOffset() - ra.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var Wo = new Date(),
  ad = ra.getTime() + (Wo.getTimezoneOffset() - ra.getTimezoneOffset()) * 6e4,
  X0 = Wo.getTimezoneOffset();
function zo(e) {
  var t = new Date();
  return (
    t.setTime(e * 24 * 60 * 60 * 1e3 + ad),
    t.getTimezoneOffset() !== X0 &&
      t.setTime(t.getTime() + (t.getTimezoneOffset() - X0) * 6e4),
    t
  );
}
var K0 = new Date('2017-02-19T19:06:09.000Z'),
  Vo = isNaN(K0.getFullYear()) ? new Date('2/19/17') : K0,
  sd = Vo.getFullYear() == 2017;
function At(e, t) {
  var r = new Date(e);
  if (sd)
    return (
      t > 0
        ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3)
        : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3),
      r
    );
  if (e instanceof Date) return e;
  if (Vo.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
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
function Ca(e, t) {
  if (Fe && Buffer.isBuffer(e)) return e.toString('binary');
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
function Nt(e) {
  if (typeof JSON < 'u' && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != 'object' || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Nt(e[r]));
  return t;
}
function Xe(e, t) {
  for (var r = ''; r.length < t; ) r += e;
  return r;
}
function _r(e) {
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
var fd = [
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
function ii(e) {
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
      s.length > 3 && fd.indexOf(s) == -1)
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
function _e(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == 'string') {
      var n;
      return Fe ? (n = Ar(r)) : (n = D1(r)), Ie.utils.cfb_add(e, t, n);
    }
    Ie.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function Ms() {
  return Ie.utils.cfb_new();
}
var Qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  od = { '&quot;': '"', '&apos;': "'", '&gt;': '>', '&lt;': '<', '&amp;': '&' },
  Us = Bs(od),
  Hs = /[&<>'"]/g,
  ld = /[\u0000-\u0008\u000b-\u001f]/g;
function De(e) {
  var t = e + '';
  return t
    .replace(Hs, function (r) {
      return Us[r];
    })
    .replace(ld, function (r) {
      return '_x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + '_';
    });
}
function q0(e) {
  return De(e).replace(/ /g, '_x0020_');
}
var Go = /[\u0000-\u001f]/g;
function cd(e) {
  var t = e + '';
  return t
    .replace(Hs, function (r) {
      return Us[r];
    })
    .replace(/\n/g, '<br/>')
    .replace(Go, function (r) {
      return '&#x' + ('000' + r.charCodeAt(0).toString(16)).slice(-4) + ';';
    });
}
function ud(e) {
  var t = e + '';
  return t
    .replace(Hs, function (r) {
      return Us[r];
    })
    .replace(Go, function (r) {
      return '&#x' + r.charCodeAt(0).toString(16).toUpperCase() + ';';
    });
}
function hd(e) {
  return e.replace(/(\r\n|[\r\n])/g, '&#10;');
}
function dd(e) {
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
function Xa(e) {
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
function $0(e) {
  var t = $r(2 * e.length),
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
function Y0(e) {
  return Ar(e, 'binary').toString('utf8');
}
var Di = 'foo bar bazâð£',
  Kn = (Fe && ((Y0(Di) == Xa(Di) && Y0) || ($0(Di) == Xa(Di) && $0))) || Xa,
  ai = Fe
    ? function (e) {
        return Ar(e, 'utf8').toString('binary');
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
  xd = (function () {
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
  jo = /(^\s|\s$|\n)/;
function ht(e, t) {
  return (
    '<' +
    e +
    (t.match(jo) ? ' xml:space="preserve"' : '') +
    '>' +
    t +
    '</' +
    e +
    '>'
  );
}
function si(e) {
  return xt(e)
    .map(function (t) {
      return ' ' + t + '="' + e[t] + '"';
    })
    .join('');
}
function ee(e, t, r) {
  return (
    '<' +
    e +
    (r != null ? si(r) : '') +
    (t != null
      ? (t.match(jo) ? ' xml:space="preserve"' : '') + '>' + t + '</' + e
      : '/') +
    '>'
  );
}
function ds(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, '');
  } catch (r) {
    if (t) throw r;
  }
  return '';
}
function pd(e, t) {
  switch (typeof e) {
    case 'string':
      var r = ee('vt:lpwstr', De(e));
      return (r = r.replace(/&quot;/g, '_x0022_')), r;
    case 'number':
      return ee((e | 0) == e ? 'vt:i4' : 'vt:r8', De(String(e)));
    case 'boolean':
      return ee('vt:bool', e ? 'true' : 'false');
  }
  if (e instanceof Date) return ee('vt:filetime', ds(e));
  throw new Error('Unable to serialize ' + e);
}
var at = {
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
  Cn = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2',
  ],
  bt = {
    o: 'urn:schemas-microsoft-com:office:office',
    x: 'urn:schemas-microsoft-com:office:excel',
    ss: 'urn:schemas-microsoft-com:office:spreadsheet',
    dt: 'uuid:C2F41010-65B3-11d1-A29F-00AA00C14882',
    mv: 'http://macVmlSchemaUri',
    v: 'urn:schemas-microsoft-com:vml',
    html: 'http://www.w3.org/TR/REC-html40',
  };
function vd(e, t) {
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
function md(e, t, r) {
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
var J0 = function (e) {
    for (var t = [], r = 10240, n = 0; n < e[0].length; ++n)
      if (e[0][n])
        for (var i = 0, a = e[0][n].length; i < a; i += r)
          t.push.apply(t, e[0][n].slice(i, i + r));
    return t;
  },
  Z0 = Fe
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (t) {
                return Buffer.isBuffer(t) ? t : Ar(t);
              }),
            )
          : J0(e);
      }
    : J0,
  Q0 = function (e, t, r) {
    for (var n = [], i = t; i < r; i += 2)
      n.push(String.fromCharCode(Vn(e, i)));
    return n.join('').replace(Xn, '');
  },
  Ws = Fe
    ? function (e, t, r) {
        return Buffer.isBuffer(e)
          ? e.toString('utf16le', t, r).replace(Xn, '')
          : Q0(e, t, r);
      }
    : Q0,
  ef = function (e, t, r) {
    for (var n = [], i = t; i < t + r; ++i)
      n.push(('0' + e[i].toString(16)).slice(-2));
    return n.join('');
  },
  Xo = Fe
    ? function (e, t, r) {
        return Buffer.isBuffer(e) ? e.toString('hex', t, t + r) : ef(e, t, r);
      }
    : ef,
  tf = function (e, t, r) {
    for (var n = [], i = t; i < r; i++) n.push(String.fromCharCode(pn(e, i)));
    return n.join('');
  },
  pi = Fe
    ? function (t, r, n) {
        return Buffer.isBuffer(t) ? t.toString('utf8', r, n) : tf(t, r, n);
      }
    : tf,
  Ko = function (e, t) {
    var r = Bt(e, t);
    return r > 0 ? pi(e, t + 4, t + 4 + r - 1) : '';
  },
  qo = Ko,
  $o = function (e, t) {
    var r = Bt(e, t);
    return r > 0 ? pi(e, t + 4, t + 4 + r - 1) : '';
  },
  Yo = $o,
  Jo = function (e, t) {
    var r = 2 * Bt(e, t);
    return r > 0 ? pi(e, t + 4, t + 4 + r - 1) : '';
  },
  Zo = Jo,
  Qo = function (t, r) {
    var n = Bt(t, r);
    return n > 0 ? Ws(t, r + 4, r + 4 + n) : '';
  },
  el = Qo,
  tl = function (e, t) {
    var r = Bt(e, t);
    return r > 0 ? pi(e, t + 4, t + 4 + r) : '';
  },
  rl = tl,
  nl = function (e, t) {
    return vd(e, t);
  },
  na = nl,
  zs = function (t) {
    return (
      Array.isArray(t) || (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  };
Fe &&
  ((qo = function (t, r) {
    if (!Buffer.isBuffer(t)) return Ko(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (Yo = function (t, r) {
    if (!Buffer.isBuffer(t)) return $o(t, r);
    var n = t.readUInt32LE(r);
    return n > 0 ? t.toString('utf8', r + 4, r + 4 + n - 1) : '';
  }),
  (Zo = function (t, r) {
    if (!Buffer.isBuffer(t)) return Jo(t, r);
    var n = 2 * t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n - 1);
  }),
  (el = function (t, r) {
    if (!Buffer.isBuffer(t)) return Qo(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf16le', r + 4, r + 4 + n);
  }),
  (rl = function (t, r) {
    if (!Buffer.isBuffer(t)) return tl(t, r);
    var n = t.readUInt32LE(r);
    return t.toString('utf8', r + 4, r + 4 + n);
  }),
  (na = function (t, r) {
    return Buffer.isBuffer(t) ? t.readDoubleLE(r) : nl(t, r);
  }),
  (zs = function (t) {
    return (
      Buffer.isBuffer(t) ||
      Array.isArray(t) ||
      (typeof Uint8Array < 'u' && t instanceof Uint8Array)
    );
  }));
var pn = function (e, t) {
    return e[t];
  },
  Vn = function (e, t) {
    return e[t + 1] * 256 + e[t];
  },
  _d = function (e, t) {
    var r = e[t + 1] * 256 + e[t];
    return r < 32768 ? r : (65535 - r + 1) * -1;
  },
  Bt = function (e, t) {
    return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
  },
  Vr = function (e, t) {
    return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
  },
  gd = function (e, t) {
    return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
  };
function qn(e, t) {
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
      if (((o = this.l), Fe && Buffer.isBuffer(this)))
        r = this.slice(this.l, this.l + 2 * e).toString('utf16le');
      else
        for (l = 0; l < e; ++l)
          (r += String.fromCharCode(Vn(this, o))), (o += 2);
      e *= 2;
      break;
    case 'utf8':
      r = pi(this, this.l, this.l + e);
      break;
    case 'utf16le':
      (e *= 2), (r = Ws(this, this.l, this.l + e));
      break;
    case 'wstr':
      return qn.call(this, e, 'dbcs');
    case 'lpstr-ansi':
      (r = qo(this, this.l)), (e = 4 + Bt(this, this.l));
      break;
    case 'lpstr-cp':
      (r = Yo(this, this.l)), (e = 4 + Bt(this, this.l));
      break;
    case 'lpwstr':
      (r = Zo(this, this.l)), (e = 4 + 2 * Bt(this, this.l));
      break;
    case 'lpp4':
      (e = 4 + Bt(this, this.l)), (r = el(this, this.l)), e & 2 && (e += 2);
      break;
    case '8lpp4':
      (e = 4 + Bt(this, this.l)),
        (r = rl(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case 'cstr':
      for (e = 0, r = ''; (s = pn(this, this.l + e++)) !== 0; ) a.push(Ci(s));
      r = a.join('');
      break;
    case '_wstr':
      for (e = 0, r = ''; (s = Vn(this, this.l + e)) !== 0; )
        a.push(Ci(s)), (e += 2);
      (e += 2), (r = a.join(''));
      break;
    case 'dbcs-cont':
      for (r = '', o = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = pn(this, o)),
            (this.l = o + 1),
            (f = qn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ci(Vn(this, o))), (o += 2);
      }
      (r = a.join('')), (e *= 2);
      break;
    case 'cpstr':
    case 'sbcs-cont':
      for (r = '', o = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return (
            (s = pn(this, o)),
            (this.l = o + 1),
            (f = qn.call(this, e - l, s ? 'dbcs-cont' : 'sbcs-cont')),
            a.join('') + f
          );
        a.push(Ci(pn(this, o))), (o += 1);
      }
      r = a.join('');
      break;
    default:
      switch (e) {
        case 1:
          return (n = pn(this, this.l)), this.l++, n;
        case 2:
          return (n = (t === 'i' ? _d : Vn)(this, this.l)), (this.l += 2), n;
        case 4:
        case -4:
          return t === 'i' || (this[this.l + 3] & 128) === 0
            ? ((n = (e > 0 ? Vr : gd)(this, this.l)), (this.l += 4), n)
            : ((i = Bt(this, this.l)), (this.l += 4), i);
        case 8:
        case -8:
          if (t === 'f')
            return (
              e == 8
                ? (i = na(this, this.l))
                : (i = na(
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
          r = Xo(this, this.l, e);
          break;
      }
  }
  return (this.l += e), r;
}
var Ed = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >>> 8) & 255),
      (e[r + 2] = (t >>> 16) & 255),
      (e[r + 3] = (t >>> 24) & 255);
  },
  Td = function (e, t, r) {
    (e[r] = t & 255),
      (e[r + 1] = (t >> 8) & 255),
      (e[r + 2] = (t >> 16) & 255),
      (e[r + 3] = (t >> 24) & 255);
  },
  wd = function (e, t, r) {
    (e[r] = t & 255), (e[r + 1] = (t >>> 8) & 255);
  };
function Sd(e, t, r) {
  var n = 0,
    i = 0;
  if (r === 'dbcs') {
    for (i = 0; i != t.length; ++i) wd(this, t.charCodeAt(i), this.l + 2 * i);
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
        (n = 4), Ed(this, t, this.l);
        break;
      case 8:
        if (((n = 8), r === 'f')) {
          md(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (n = 4), Td(this, t, this.l);
        break;
    }
  return (this.l += n), this;
}
function il(e, t) {
  var r = Xo(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + 'Expected ' + e + ' saw ' + r);
  this.l += e.length >> 1;
}
function Lt(e, t) {
  (e.l = t), (e.read_shift = qn), (e.chk = il), (e.write_shift = Sd);
}
function ur(e, t) {
  e.l += t;
}
function U(e) {
  var t = $r(e);
  return Lt(t, 0), t;
}
function Rt() {
  var e = [],
    t = Fe ? 256 : 2048,
    r = function (o) {
      var c = U(o);
      return Lt(c, 0), c;
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
      return i(), ut(e);
    },
    f = function (o) {
      i(), (n = o), n.l == null && (n.l = n.length), a(t);
    };
  return { next: a, push: f, end: s, _bufs: e };
}
function G(e, t, r, n) {
  var i = +t,
    a;
  if (!isNaN(i)) {
    n || (n = v_[i].p || (r || []).length || 0),
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
    n > 0 && zs(r) && e.push(r);
  }
}
function $n(e, t, r) {
  var n = Nt(e);
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
function rf(e, t, r) {
  var n = Nt(e);
  return (n.s = $n(n.s, t.s, r)), (n.e = $n(n.e, t.s, r)), n;
}
function Yn(e, t) {
  if (e.cRel && e.c < 0) for (e = Nt(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Nt(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = Ne(e);
  return (
    !e.cRel && e.cRel != null && (r = Fd(r)),
    !e.rRel && e.rRel != null && (r = Ad(r)),
    r
  );
}
function Ka(e, t) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? '' : '$') +
        mt(e.s.c) +
        ':' +
        (e.e.cRel ? '' : '$') +
        mt(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (t.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? '' : '$') +
        dt(e.s.r) +
        ':' +
        (e.e.rRel ? '' : '$') +
        dt(e.e.r)
      : Yn(e.s, t.biff) + ':' + Yn(e.e, t.biff);
}
function Vs(e) {
  return parseInt(yd(e), 10) - 1;
}
function dt(e) {
  return '' + (e + 1);
}
function Ad(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, '$1$$$2');
}
function yd(e) {
  return e.replace(/\$(\d+)$/, '$1');
}
function Gs(e) {
  for (var t = Cd(e), r = 0, n = 0; n !== t.length; ++n)
    r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function mt(e) {
  if (e < 0) throw new Error('invalid column ' + e);
  var t = '';
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode(((e - 1) % 26) + 65) + t;
  return t;
}
function Fd(e) {
  return e.replace(/^([A-Z])/, '$$$1');
}
function Cd(e) {
  return e.replace(/^\$([A-Z])/, '$1');
}
function Od(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, '$1,$2').split(',');
}
function st(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var i = e.charCodeAt(n);
    i >= 48 && i <= 57
      ? (t = 10 * t + (i - 48))
      : i >= 65 && i <= 90 && (r = 26 * r + (i - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function Ne(e) {
  for (var t = e.c + 1, r = ''; t; t = ((t - 1) / 26) | 0)
    r = String.fromCharCode(((t - 1) % 26) + 65) + r;
  return r + (e.r + 1);
}
function Ut(e) {
  var t = e.indexOf(':');
  return t == -1
    ? { s: st(e), e: st(e) }
    : { s: st(e.slice(0, t)), e: st(e.slice(t + 1)) };
}
function Ze(e, t) {
  return typeof t > 'u' || typeof t == 'number'
    ? Ze(e.s, e.e)
    : (typeof e != 'string' && (e = Ne(e)),
      typeof t != 'string' && (t = Ne(t)),
      e == t ? e : e + ':' + t);
}
function He(e) {
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
function nf(e, t) {
  var r = e.t == 'd' && t instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Ir(e.z, r ? Dt(t) : t));
    } catch {}
  try {
    return (e.w = Ir((e.XF || {}).numFmtId || (r ? 14 : 0), r ? Dt(t) : t));
  } catch {
    return '' + t;
  }
}
function wr(e, t, r) {
  return e == null || e.t == null || e.t == 'z'
    ? ''
    : e.w !== void 0
      ? e.w
      : (e.t == 'd' && !e.z && r && r.dateNF && (e.z = r.dateNF),
        e.t == 'e' ? vi[e.v] || e.v : t == null ? nf(e, e.v) : nf(e, t));
}
function Qr(e, t) {
  var r = t && t.sheet ? t.sheet : 'Sheet1',
    n = {};
  return (n[r] = e), { SheetNames: [r], Sheets: n };
}
function al(e, t, r) {
  var n = r || {},
    i = e ? Array.isArray(e) : n.dense,
    a = e || (i ? [] : {}),
    s = 0,
    f = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? st(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
    a['!ref'] || (a['!ref'] = 'A1:A1');
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a['!ref']) {
    var c = He(a['!ref']);
    (o.s.c = c.s.c),
      (o.s.r = c.s.r),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      s == -1 && (o.e.r = s = c.e.r + 1);
  }
  for (var h = 0; h != t.length; ++h)
    if (t[h]) {
      if (!Array.isArray(t[h]))
        throw new Error('aoa_to_sheet expects an array of arrays');
      for (var u = 0; u != t[h].length; ++u)
        if (!(typeof t[h][u] > 'u')) {
          var x = { v: t[h][u] },
            v = s + h,
            d = f + u;
          if (
            (o.s.r > v && (o.s.r = v),
            o.s.c > d && (o.s.c = d),
            o.e.r < v && (o.e.r = v),
            o.e.c < d && (o.e.c = d),
            t[h][u] &&
              typeof t[h][u] == 'object' &&
              !Array.isArray(t[h][u]) &&
              !(t[h][u] instanceof Date))
          )
            x = t[h][u];
          else if (
            (Array.isArray(x.v) && ((x.f = t[h][u][1]), (x.v = x.v[0])),
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
                      ? ((x.t = 'd'), (x.w = Ir(x.z, Dt(x.v))))
                      : ((x.t = 'n'), (x.v = Dt(x.v)), (x.w = Ir(x.z, x.v))))
                  : (x.t = 's');
          if (i)
            a[v] || (a[v] = []),
              a[v][d] && a[v][d].z && (x.z = a[v][d].z),
              (a[v][d] = x);
          else {
            var m = Ne({ c: d, r: v });
            a[m] && a[m].z && (x.z = a[m].z), (a[m] = x);
          }
        }
    }
  return o.s.c < 1e7 && (a['!ref'] = Ze(o)), a;
}
function On(e, t) {
  return al(null, e, t);
}
function Rd(e) {
  return e.read_shift(4, 'i');
}
function rr(e, t) {
  return t || (t = U(4)), t.write_shift(4, e), t;
}
function _t(e) {
  var t = e.read_shift(4);
  return t === 0 ? '' : e.read_shift(t, 'dbcs');
}
function ft(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(4 + 2 * e.length))),
    t.write_shift(4, e.length),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
function Dd(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Nd(e, t) {
  return t || (t = U(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function js(e, t) {
  var r = e.l,
    n = e.read_shift(1),
    i = _t(e),
    a = [],
    s = { t: i, h: i };
  if ((n & 1) !== 0) {
    for (var f = e.read_shift(4), l = 0; l != f; ++l) a.push(Dd(e));
    s.r = a;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = r + t), s;
}
function kd(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(15 + 4 * e.t.length))),
    t.write_shift(1, 0),
    ft(e.t, t),
    r ? t.slice(0, t.l) : t
  );
}
var Id = js;
function Pd(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(23 + 4 * e.t.length))),
    t.write_shift(1, 1),
    ft(e.t, t),
    t.write_shift(4, 1),
    Nd({}, t),
    r ? t.slice(0, t.l) : t
  );
}
function qt(e) {
  var t = e.read_shift(4),
    r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r };
}
function en(e, t) {
  return (
    t == null && (t = U(8)),
    t.write_shift(-4, e.c),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
function tn(e) {
  var t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t };
}
function rn(e, t) {
  return (
    t == null && (t = U(4)),
    t.write_shift(3, e.iStyleRef || e.s),
    t.write_shift(1, 0),
    t
  );
}
var Ld = _t,
  sl = ft;
function Xs(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? '' : e.read_shift(t, 'dbcs');
}
function ia(e, t) {
  var r = !1;
  return (
    t == null && ((r = !0), (t = U(127))),
    t.write_shift(4, e.length > 0 ? e.length : 4294967295),
    e.length > 0 && t.write_shift(0, e, 'dbcs'),
    r ? t.slice(0, t.l) : t
  );
}
var bd = _t,
  xs = Xs,
  Ks = ia;
function fl(e) {
  var t = e.slice(e.l, e.l + 4),
    r = t[0] & 1,
    n = t[0] & 2;
  e.l += 4;
  var i =
    n === 0 ? na([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : Vr(t, 0) >> 2;
  return r ? i / 100 : i;
}
function ol(e, t) {
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
function ll(e) {
  var t = { s: {}, e: {} };
  return (
    (t.s.r = e.read_shift(4)),
    (t.e.r = e.read_shift(4)),
    (t.s.c = e.read_shift(4)),
    (t.e.c = e.read_shift(4)),
    t
  );
}
function Bd(e, t) {
  return (
    t || (t = U(16)),
    t.write_shift(4, e.s.r),
    t.write_shift(4, e.e.r),
    t.write_shift(4, e.s.c),
    t.write_shift(4, e.e.c),
    t
  );
}
var nn = ll,
  Rn = Bd;
function Dn(e) {
  if (e.length - e.l < 8) throw 'XLS Xnum Buffer underflow';
  return e.read_shift(8, 'f');
}
function Yr(e, t) {
  return (t || U(8)).write_shift(8, e, 'f');
}
function Md(e) {
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
      var o = Kd[i];
      o && (t.rgb = pf(o));
      break;
    case 2:
      t.rgb = pf([s, f, l]);
      break;
    case 3:
      t.theme = i;
      break;
  }
  return a != 0 && (t.tint = a > 0 ? a / 32767 : a / 32768), t;
}
function aa(e, t) {
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
function Ud(e) {
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
function Hd(e, t) {
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
var cl = 2,
  Pt = 3,
  Ni = 11,
  sa = 19,
  ki = 64,
  Wd = 65,
  zd = 71,
  Vd = 4108,
  Gd = 4126,
  ct = 80,
  af = {
    1: { n: 'CodePage', t: cl },
    2: { n: 'Category', t: ct },
    3: { n: 'PresentationFormat', t: ct },
    4: { n: 'ByteCount', t: Pt },
    5: { n: 'LineCount', t: Pt },
    6: { n: 'ParagraphCount', t: Pt },
    7: { n: 'SlideCount', t: Pt },
    8: { n: 'NoteCount', t: Pt },
    9: { n: 'HiddenCount', t: Pt },
    10: { n: 'MultimediaClipCount', t: Pt },
    11: { n: 'ScaleCrop', t: Ni },
    12: { n: 'HeadingPairs', t: Vd },
    13: { n: 'TitlesOfParts', t: Gd },
    14: { n: 'Manager', t: ct },
    15: { n: 'Company', t: ct },
    16: { n: 'LinksUpToDate', t: Ni },
    17: { n: 'CharacterCount', t: Pt },
    19: { n: 'SharedDoc', t: Ni },
    22: { n: 'HyperlinksChanged', t: Ni },
    23: { n: 'AppVersion', t: Pt, p: 'version' },
    24: { n: 'DigSig', t: Wd },
    26: { n: 'ContentType', t: ct },
    27: { n: 'ContentStatus', t: ct },
    28: { n: 'Language', t: ct },
    29: { n: 'Version', t: ct },
    255: {},
    2147483648: { n: 'Locale', t: sa },
    2147483651: { n: 'Behavior', t: sa },
    1919054434: {},
  },
  sf = {
    1: { n: 'CodePage', t: cl },
    2: { n: 'Title', t: ct },
    3: { n: 'Subject', t: ct },
    4: { n: 'Author', t: ct },
    5: { n: 'Keywords', t: ct },
    6: { n: 'Comments', t: ct },
    7: { n: 'Template', t: ct },
    8: { n: 'LastAuthor', t: ct },
    9: { n: 'RevNumber', t: ct },
    10: { n: 'EditTime', t: ki },
    11: { n: 'LastPrinted', t: ki },
    12: { n: 'CreatedDate', t: ki },
    13: { n: 'ModifiedDate', t: ki },
    14: { n: 'PageCount', t: Pt },
    15: { n: 'WordCount', t: Pt },
    16: { n: 'CharCount', t: Pt },
    17: { n: 'Thumbnail', t: zd },
    18: { n: 'Application', t: ct },
    19: { n: 'DocSecurity', t: Pt },
    255: {},
    2147483648: { n: 'Locale', t: sa },
    2147483651: { n: 'Behavior', t: sa },
    1919054434: {},
  };
function jd(e) {
  return e.map(function (t) {
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  });
}
var Xd = jd([
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
  Kd = Nt(Xd),
  vi = {
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
  qd = {
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
  Ii = {
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
function ul() {
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
function hl(e, t) {
  var r = id(qd),
    n = [],
    i;
  (n[n.length] = Qe),
    (n[n.length] = ee('Types', null, {
      xmlns: at.CT,
      'xmlns:xsd': at.xsd,
      'xmlns:xsi': at.xsi,
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
        return ee('Default', null, { Extension: l[0], ContentType: l[1] });
      }),
    ));
  var a = function (l) {
      e[l] &&
        e[l].length > 0 &&
        ((i = e[l][0]),
        (n[n.length] = ee('Override', null, {
          PartName: (i[0] == '/' ? '' : '/') + i,
          ContentType: Ii[l][t.bookType] || Ii[l].xlsx,
        })));
    },
    s = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = ee('Override', null, {
          PartName: (o[0] == '/' ? '' : '/') + o,
          ContentType: Ii[l][t.bookType] || Ii[l].xlsx,
        });
      });
    },
    f = function (l) {
      (e[l] || []).forEach(function (o) {
        n[n.length] = ee('Override', null, {
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
var Ae = {
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
function dl(e) {
  var t = e.lastIndexOf('/');
  return e.slice(0, t + 1) + '_rels/' + e.slice(t + 1) + '.rels';
}
function _n(e) {
  var t = [Qe, ee('Relationships', null, { xmlns: at.RELS })];
  return (
    xt(e['!id']).forEach(function (r) {
      t[t.length] = ee('Relationship', null, e['!id'][r]);
    }),
    t.length > 2 &&
      ((t[t.length] = '</Relationships>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Re(e, t, r, n, i, a) {
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
    [Ae.HLINK, Ae.XPATH, Ae.XMISS].indexOf(i.Type) > -1 &&
      (i.TargetMode = 'External'),
    e['!id'][i.Id])
  )
    throw new Error('Cannot rewrite rId ' + t);
  return (e['!id'][i.Id] = i), (e[('/' + i.Target).replace('//', '/')] = i), t;
}
function $d(e) {
  var t = [Qe];
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
function ff(e, t, r) {
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
function Yd(e, t) {
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
function Jd(e) {
  var t = [Qe];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(ff(e[r][0], e[r][1])), t.push(Yd('', e[r][0]));
  return t.push(ff('', 'Document', 'pkg')), t.push('</rdf:RDF>'), t.join('');
}
function xl() {
  return (
    '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
    Ji.version +
    '</meta:generator></office:meta></office:document-meta>'
  );
}
var Kr = [
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
function qa(e, t, r, n, i) {
  i[e] != null ||
    t == null ||
    t === '' ||
    ((i[e] = t), (t = De(t)), (n[n.length] = r ? ee(e, t, r) : ht(e, t)));
}
function pl(e, t) {
  var r = t || {},
    n = [
      Qe,
      ee('cp:coreProperties', null, {
        'xmlns:cp': at.CORE_PROPS,
        'xmlns:dc': at.dc,
        'xmlns:dcterms': at.dcterms,
        'xmlns:dcmitype': at.dcmitype,
        'xmlns:xsi': at.xsi,
      }),
    ],
    i = {};
  if (!e && !r.Props) return n.join('');
  e &&
    (e.CreatedDate != null &&
      qa(
        'dcterms:created',
        typeof e.CreatedDate == 'string'
          ? e.CreatedDate
          : ds(e.CreatedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ),
    e.ModifiedDate != null &&
      qa(
        'dcterms:modified',
        typeof e.ModifiedDate == 'string'
          ? e.ModifiedDate
          : ds(e.ModifiedDate, r.WTF),
        { 'xsi:type': 'dcterms:W3CDTF' },
        n,
        i,
      ));
  for (var a = 0; a != Kr.length; ++a) {
    var s = Kr[a],
      f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0
      ? (f = '1')
      : f === !1
        ? (f = '0')
        : typeof f == 'number' && (f = String(f)),
      f != null && qa(s[0], f, null, n, i);
  }
  return (
    n.length > 2 &&
      ((n[n.length] = '</cp:coreProperties>'),
      (n[1] = n[1].replace('/>', '>'))),
    n.join('')
  );
}
var gn = [
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
  vl = [
    'Worksheets',
    'SheetNames',
    'NamedRanges',
    'DefinedNames',
    'Chartsheets',
    'ChartNames',
  ];
function ml(e) {
  var t = [],
    r = ee;
  return (
    e || (e = {}),
    (e.Application = 'SheetJS'),
    (t[t.length] = Qe),
    (t[t.length] = ee('Properties', null, {
      xmlns: at.EXT_PROPS,
      'xmlns:vt': at.vt,
    })),
    gn.forEach(function (n) {
      if (e[n[1]] !== void 0) {
        var i;
        switch (n[2]) {
          case 'string':
            i = De(String(e[n[1]]));
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
          return '<vt:lpstr>' + De(n) + '</vt:lpstr>';
        }).join(''),
        { size: e.Worksheets, baseType: 'lpstr' },
      ),
    )),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function _l(e) {
  var t = [
    Qe,
    ee('Properties', null, { xmlns: at.CUST_PROPS, 'xmlns:vt': at.vt }),
  ];
  if (!e) return t.join('');
  var r = 1;
  return (
    xt(e).forEach(function (i) {
      ++r,
        (t[t.length] = ee('property', pd(e[i]), {
          fmtid: '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
          pid: r,
          name: De(i),
        }));
    }),
    t.length > 2 &&
      ((t[t.length] = '</Properties>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
var of = {
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
function Zd(e, t) {
  var r = [];
  return (
    xt(of)
      .map(function (n) {
        for (var i = 0; i < Kr.length; ++i) if (Kr[i][1] == n) return Kr[i];
        for (i = 0; i < gn.length; ++i) if (gn[i][1] == n) return gn[i];
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
            r.push(ht(of[n[1]] || n[1], i));
        }
      }),
    ee('DocumentProperties', r.join(''), { xmlns: bt.o })
  );
}
function Qd(e, t) {
  var r = ['Worksheets', 'SheetNames'],
    n = 'CustomDocumentProperties',
    i = [];
  return (
    e &&
      xt(e).forEach(function (a) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          for (var s = 0; s < Kr.length; ++s) if (a == Kr[s][1]) return;
          for (s = 0; s < gn.length; ++s) if (a == gn[s][1]) return;
          for (s = 0; s < r.length; ++s) if (a == r[s]) return;
          var f = e[a],
            l = 'string';
          typeof f == 'number'
            ? ((l = 'float'), (f = String(f)))
            : f === !0 || f === !1
              ? ((l = 'boolean'), (f = f ? '1' : '0'))
              : (f = String(f)),
            i.push(ee(q0(a), f, { 'dt:dt': l }));
        }
      }),
    t &&
      xt(t).forEach(function (a) {
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
            i.push(ee(q0(a), s, { 'dt:dt': f }));
        }
      }),
    '<' + n + ' xmlns="' + bt.o + '">' + i.join('') + '</' + n + '>'
  );
}
function ex(e) {
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
function lf(e, t) {
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
      n = ex(t);
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
  return ut([r, n]);
}
var gl = [
  'CodePage',
  'Thumbnail',
  '_PID_LINKBASE',
  '_PID_HLINKS',
  'SystemIdentifier',
  'FMTID',
];
function tx(e) {
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
function cf(e, t, r) {
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
      var h = e[f][0];
      for (
        l = U(8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)),
          l.write_shift(4, f + 2),
          l.write_shift(4, h.length + 1),
          l.write_shift(0, h, 'dbcs');
        l.l != l.length;

      )
        l.write_shift(1, 0);
      c.push(l);
    }
    (l = ut(c)), a.unshift(l), (s += 8 + l.length);
  }
  for (f = 0; f < e.length; ++f)
    if (
      !(t && !t[e[f][0]]) &&
      !(gl.indexOf(e[f][0]) > -1 || vl.indexOf(e[f][0]) > -1) &&
      e[f][1] != null
    ) {
      var u = e[f][1],
        x = 0;
      if (t) {
        x = +t[e[f][0]];
        var v = r[x];
        if (v.p == 'version' && typeof u == 'string') {
          var d = u.split('.');
          u = (+d[0] << 16) + (+d[1] || 0);
        }
        l = lf(v.t, u);
      } else {
        var m = tx(u);
        m == -1 && ((m = 31), (u = String(u))), (l = lf(m, u));
      }
      a.push(l),
        (o = U(8)),
        o.write_shift(4, t ? x : 2 + f),
        i.push(o),
        (s += 8 + l.length);
    }
  var S = 8 * (a.length + 1);
  for (f = 0; f < a.length; ++f) i[f].write_shift(4, S), (S += a[f].length);
  return (
    n.write_shift(4, s), n.write_shift(4, a.length), ut([n].concat(i).concat(a))
  );
}
function uf(e, t, r, n, i, a) {
  var s = U(i ? 68 : 48),
    f = [s];
  s.write_shift(2, 65534),
    s.write_shift(2, 0),
    s.write_shift(4, 842412599),
    s.write_shift(16, Ie.utils.consts.HEADER_CLSID, 'hex'),
    s.write_shift(4, i ? 2 : 1),
    s.write_shift(16, t, 'hex'),
    s.write_shift(4, i ? 68 : 48);
  var l = cf(e, r, n);
  if ((f.push(l), i)) {
    var o = cf(i, null, null);
    s.write_shift(16, a, 'hex'), s.write_shift(4, 68 + l.length), f.push(o);
  }
  return ut(f);
}
function rx(e, t) {
  t || (t = U(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function nx(e, t) {
  return e.read_shift(t) === 1;
}
function St(e, t) {
  return t || (t = U(2)), t.write_shift(2, +!!e), t;
}
function El(e) {
  return e.read_shift(2, 'u');
}
function Gt(e, t) {
  return t || (t = U(2)), t.write_shift(2, e), t;
}
function Tl(e, t, r) {
  return (
    r || (r = U(2)),
    r.write_shift(1, t == 'e' ? +e : +!!e),
    r.write_shift(1, t == 'e' ? 1 : 0),
    r
  );
}
function wl(e, t, r) {
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
function ix(e) {
  var t = e.t || '',
    r = U(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = U(2 * t.length);
  n.write_shift(2 * t.length, t, 'utf16le');
  var i = [r, n];
  return ut(i);
}
function ax(e, t, r) {
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
function sx(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, '') : ax(e, n, r);
}
function fx(e, t, r) {
  if (r.biff > 5) return sx(e, t, r);
  var n = e.read_shift(1);
  return n === 0
    ? (e.l++, '')
    : e.read_shift(n, r.biff <= 4 || !e.lens ? 'cpstr' : 'sbcs-cont');
}
function Sl(e, t, r) {
  return (
    r || (r = U(3 + 2 * e.length)),
    r.write_shift(2, e.length),
    r.write_shift(1, 1),
    r.write_shift(31, e, 'utf16le'),
    r
  );
}
function hf(e, t) {
  t || (t = U(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function ox(e) {
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
  if (a == 28) (n = n.slice(1)), hf(n, t);
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
    t.write_shift(2, 0), a & 8 && hf(i > -1 ? n.slice(i + 1) : '', t);
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
function Jr(e, t, r, n) {
  return (
    n || (n = U(6)),
    n.write_shift(2, e),
    n.write_shift(2, t),
    n.write_shift(2, r || 0),
    n
  );
}
function lx(e, t, r) {
  var n = r.biff > 8 ? 4 : 2,
    i = e.read_shift(n),
    a = e.read_shift(n, 'i'),
    s = e.read_shift(n, 'i');
  return [i, a, s];
}
function cx(e) {
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    i = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: i, r } };
}
function Al(e, t) {
  return (
    t || (t = U(8)),
    t.write_shift(2, e.s.r),
    t.write_shift(2, e.e.r),
    t.write_shift(2, e.s.c),
    t.write_shift(2, e.e.c),
    t
  );
}
function qs(e, t, r) {
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
function ux(e, t) {
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
function hx(e, t) {
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
function dx(e, t) {
  var r = U(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], i = 0; i < e.length; ++i) n[i] = ix(e[i]);
  var a = ut([r].concat(n));
  return (
    (a.parts = [r.length].concat(
      n.map(function (s) {
        return s.length;
      }),
    )),
    a
  );
}
function xx() {
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
function px(e) {
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
function vx(e, t) {
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
function mx(e, t, r, n) {
  var i = U(10);
  return Jr(e, t, n, i), i.write_shift(4, r), i;
}
function _x(e, t, r, n, i) {
  var a = !i || i.biff == 8,
    s = U(8 + +a + (1 + a) * r.length);
  return (
    Jr(e, t, n, s),
    s.write_shift(2, r.length),
    a && s.write_shift(1, 1),
    s.write_shift((1 + a) * r.length, r, a ? 'utf16le' : 'sbcs'),
    s
  );
}
function gx(e, t, r, n) {
  var i = r && r.biff == 5;
  n || (n = U(i ? 3 + t.length : 5 + 2 * t.length)),
    n.write_shift(2, e),
    n.write_shift(i ? 1 : 2, t.length),
    i || n.write_shift(1, 1),
    n.write_shift((i ? 1 : 2) * t.length, t, i ? 'sbcs' : 'utf16le');
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function Ex(e, t) {
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
function df(e, t, r, n) {
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
function Tx(e) {
  var t = U(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function wx(e, t, r, n, i, a) {
  var s = U(8);
  return Jr(e, t, n, s), Tl(r, a, s), s;
}
function Sx(e, t, r, n) {
  var i = U(14);
  return Jr(e, t, n, i), Yr(r, i), i;
}
function Ax(e, t, r) {
  if (r.biff < 8) return yx(e, t, r);
  for (
    var n = [], i = e.l + t, a = e.read_shift(r.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    n.push(lx(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != i) throw new Error('Bad ExternSheet: ' + e.l + ' != ' + i);
  return n;
}
function yx(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = wl(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function Fx(e) {
  var t = U(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) Al(e[r], t);
  return t;
}
function Cx(e) {
  var t = U(24),
    r = st(e[0]);
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
  return ut([t, ox(e[1])]);
}
function Ox(e) {
  var t = e[1].Tooltip,
    r = U(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = st(e[0]);
  r.write_shift(2, n.r),
    r.write_shift(2, n.r),
    r.write_shift(2, n.c),
    r.write_shift(2, n.c);
  for (var i = 0; i < t.length; ++i) r.write_shift(2, t.charCodeAt(i));
  return r.write_shift(2, 0), r;
}
function Rx(e) {
  return e || (e = U(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function Dx(e, t, r) {
  if (!r.cellStyles) return ur(e, t);
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
function Nx(e, t) {
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
function kx(e) {
  for (var t = U(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function Ix(e, t, r) {
  var n = U(15);
  return _i(n, e, t), n.write_shift(8, r, 'f'), n;
}
function Px(e, t, r) {
  var n = U(9);
  return _i(n, e, t), n.write_shift(2, r), n;
}
var Lx = (function () {
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
      t = Bs({
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
        c = $r(1);
      switch (l.type) {
        case 'base64':
          c = er(Tr(f));
          break;
        case 'binary':
          c = er(f);
          break;
        case 'buffer':
        case 'array':
          c = f;
          break;
      }
      Lt(c, 0);
      var h = c.read_shift(1),
        u = !!(h & 136),
        x = !1,
        v = !1;
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
          v = !0;
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
      var S = c.read_shift(2),
        y = l.codepage || 1252;
      h != 2 &&
        ((c.l += 16),
        c.read_shift(1),
        c[c.l] !== 0 && (y = e[c[c.l]]),
        (c.l += 1),
        (c.l += 2)),
        v && (c.l += 36);
      for (
        var F = [],
          k = {},
          z = Math.min(c.length, h == 2 ? 521 : m - 10 - (x ? 264 : 0)),
          J = v ? 32 : 11;
        c.l < z && c[c.l] != 13;

      )
        switch (
          ((k = {}),
          (k.name = Zi.utils
            .decode(y, c.slice(c.l, c.l + J))
            .replace(/[\u0000\r\n].*$/g, '')),
          (c.l += J),
          (k.type = String.fromCharCode(c.read_shift(1))),
          h != 2 && !v && (k.offset = c.read_shift(4)),
          (k.len = c.read_shift(1)),
          h == 2 && (k.offset = c.read_shift(2)),
          (k.dec = c.read_shift(1)),
          k.name.length && F.push(k),
          h != 2 && (c.l += v ? 13 : 14),
          k.type)
        ) {
          case 'B':
            (!x || k.len != 8) &&
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
      for (; d-- > 0; ) {
        if (c[c.l] === 42) {
          c.l += S;
          continue;
        }
        for (++c.l, o[++O] = [], H = 0, H = 0; H != F.length; ++H) {
          var I = c.slice(c.l, c.l + F[H].len);
          (c.l += F[H].len), Lt(I, 0);
          var V = Zi.utils.decode(y, I);
          switch (F[H].type) {
            case 'C':
              V.trim().length && (o[O][H] = V.replace(/\s+$/, ''));
              break;
            case 'D':
              V.length === 8
                ? (o[O][H] = new Date(
                    +V.slice(0, 4),
                    +V.slice(4, 6) - 1,
                    +V.slice(6, 8),
                  ))
                : (o[O][H] = V);
              break;
            case 'F':
              o[O][H] = parseFloat(V.trim());
              break;
            case '+':
            case 'I':
              o[O][H] = v
                ? I.read_shift(-4, 'i') ^ 2147483648
                : I.read_shift(4, 'i');
              break;
            case 'L':
              switch (V.trim().toUpperCase()) {
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
                  throw new Error('DBF Unrecognized L:|' + V + '|');
              }
              break;
            case 'M':
              if (!u)
                throw new Error(
                  'DBF Unexpected MEMO for type ' + h.toString(16),
                );
              o[O][H] =
                '##MEMO##' + (v ? parseInt(V.trim(), 10) : I.read_shift(4));
              break;
            case 'N':
              (V = V.replace(/\u0000/g, '').trim()),
                V && V != '.' && (o[O][H] = +V || 0);
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
              if (x && F[H].len == 8) {
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
      if (h != 2 && c.l < c.length && c[c.l++] != 26)
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
      var c = On(r(f, o), o);
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
      if ((+o.codepage >= 0 && ri(+o.codepage), o.type == 'string'))
        throw new Error('Cannot write DBF to JS string');
      var c = Rt(),
        h = ua(f, { header: 1, raw: !0, cellDates: !0 }),
        u = h[0],
        x = h.slice(1),
        v = f['!cols'] || [],
        d = 0,
        m = 0,
        S = 0,
        y = 1;
      for (d = 0; d < u.length; ++d) {
        if (((v[d] || {}).DBF || {}).name) {
          (u[d] = v[d].DBF.name), ++S;
          continue;
        }
        if (u[d] != null) {
          if (
            (++S,
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
      var F = He(f['!ref']),
        k = [],
        z = [],
        J = [];
      for (d = 0; d <= F.e.c - F.s.c; ++d) {
        var O = '',
          H = '',
          I = 0,
          V = [];
        for (m = 0; m < x.length; ++m) x[m][d] != null && V.push(x[m][d]);
        if (V.length == 0 || u[d] == null) {
          k[d] = '?';
          continue;
        }
        for (m = 0; m < V.length; ++m) {
          switch (typeof V[m]) {
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
              H = V[m] instanceof Date ? 'D' : 'C';
              break;
            default:
              H = 'C';
          }
          (I = Math.max(I, String(V[m]).length)), (O = O && O != H ? 'C' : H);
        }
        I > 250 && (I = 250),
          (H = ((v[d] || {}).DBF || {}).type),
          H == 'C' && v[d].DBF.len > I && (I = v[d].DBF.len),
          O == 'B' &&
            H == 'N' &&
            ((O = 'N'), (J[d] = v[d].DBF.dec), (I = v[d].DBF.len)),
          (z[d] = O == 'C' || H == 'N' ? I : a[O] || 0),
          (y += z[d]),
          (k[d] = O);
      }
      var X = c.next(32);
      for (
        X.write_shift(4, 318902576),
          X.write_shift(4, x.length),
          X.write_shift(2, 296 + 32 * S),
          X.write_shift(2, y),
          d = 0;
        d < 4;
        ++d
      )
        X.write_shift(4, 0);
      for (
        X.write_shift(4, 0 | ((+t[Fo] || 3) << 8)), d = 0, m = 0;
        d < u.length;
        ++d
      )
        if (u[d] != null) {
          var K = c.next(32),
            ne = (u[d].slice(-10) + '\0\0\0\0\0\0\0\0\0\0\0').slice(0, 11);
          K.write_shift(1, ne, 'sbcs'),
            K.write_shift(1, k[d] == '?' ? 'C' : k[d], 'sbcs'),
            K.write_shift(4, m),
            K.write_shift(1, z[d] || a[k[d]] || 0),
            K.write_shift(1, J[d] || 0),
            K.write_shift(1, 2),
            K.write_shift(4, 0),
            K.write_shift(1, 0),
            K.write_shift(4, 0),
            K.write_shift(4, 0),
            (m += z[d] || a[k[d]] || 0);
        }
      var Te = c.next(264);
      for (Te.write_shift(4, 13), d = 0; d < 65; ++d) Te.write_shift(4, 0);
      for (d = 0; d < x.length; ++d) {
        var xe = c.next(y);
        for (xe.write_shift(1, 0), m = 0; m < u.length; ++m)
          if (u[m] != null)
            switch (k[m]) {
              case 'L':
                xe.write_shift(1, x[d][m] == null ? 63 : x[d][m] ? 84 : 70);
                break;
              case 'B':
                xe.write_shift(8, x[d][m] || 0, 'f');
                break;
              case 'N':
                var Ge = '0';
                for (
                  typeof x[d][m] == 'number' &&
                    (Ge = x[d][m].toFixed(J[m] || 0)),
                    S = 0;
                  S < z[m] - Ge.length;
                  ++S
                )
                  xe.write_shift(1, 32);
                xe.write_shift(1, Ge, 'sbcs');
                break;
              case 'D':
                x[d][m]
                  ? (xe.write_shift(
                      4,
                      ('0000' + x[d][m].getFullYear()).slice(-4),
                      'sbcs',
                    ),
                    xe.write_shift(
                      2,
                      ('00' + (x[d][m].getMonth() + 1)).slice(-2),
                      'sbcs',
                    ),
                    xe.write_shift(
                      2,
                      ('00' + x[d][m].getDate()).slice(-2),
                      'sbcs',
                    ))
                  : xe.write_shift(8, '00000000', 'sbcs');
                break;
              case 'C':
                var Le = String(x[d][m] != null ? x[d][m] : '').slice(0, z[m]);
                for (
                  xe.write_shift(1, Le, 'sbcs'), S = 0;
                  S < z[m] - Le.length;
                  ++S
                )
                  xe.write_shift(1, 32);
                break;
            }
      }
      return c.next(1).write_shift(1, 26), c.end();
    }
    return { to_workbook: i, to_sheet: n, from_sheet: s };
  })(),
  bx = (function () {
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
          xt(e)
            .join('|')
            .replace(/\|\|\|/, '|\\||')
            .replace(/([?()+])/g, '\\$1') +
          '|\\|)',
        'gm',
      ),
      r = function (u, x) {
        var v = e[x];
        return typeof v == 'number' ? b0(v) : v;
      },
      n = function (u, x, v) {
        var d = ((x.charCodeAt(0) - 32) << 4) | (v.charCodeAt(0) - 48);
        return d == 59 ? u : b0(d);
      };
    e['|'] = 254;
    function i(u, x) {
      switch (x.type) {
        case 'base64':
          return a(Tr(u), x);
        case 'binary':
          return a(u, x);
        case 'buffer':
          return a(Fe && Buffer.isBuffer(u) ? u.toString('binary') : di(u), x);
        case 'array':
          return a(Ca(u), x);
      }
      throw new Error('Unrecognized type ' + x.type);
    }
    function a(u, x) {
      var v = u.split(/[\n\r]+/),
        d = -1,
        m = -1,
        S = 0,
        y = 0,
        F = [],
        k = [],
        z = null,
        J = {},
        O = [],
        H = [],
        I = [],
        V = 0,
        X;
      for (+x.codepage >= 0 && ri(+x.codepage); S !== v.length; ++S) {
        V = 0;
        var K = v[S].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
            .replace(t, r),
          ne = K.replace(/;;/g, '\0')
            .split(';')
            .map(function (C) {
              return C.replace(/\u0000/g, ';');
            }),
          Te = ne[0],
          xe;
        if (K.length > 0)
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
              ne[1].charAt(0) == 'P' && k.push(K.slice(3).replace(/;;/g, ';'));
              break;
            case 'C':
              var Ge = !1,
                Le = !1,
                ot = !1,
                We = !1,
                nt = -1,
                et = -1;
              for (y = 1; y < ne.length; ++y)
                switch (ne[y].charAt(0)) {
                  case 'A':
                    break;
                  case 'X':
                    (m = parseInt(ne[y].slice(1)) - 1), (Le = !0);
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ne[y].slice(1)) - 1,
                        Le || (m = 0),
                        X = F.length;
                      X <= d;
                      ++X
                    )
                      F[X] = [];
                    break;
                  case 'K':
                    (xe = ne[y].slice(1)),
                      xe.charAt(0) === '"'
                        ? (xe = xe.slice(1, xe.length - 1))
                        : xe === 'TRUE'
                          ? (xe = !0)
                          : xe === 'FALSE'
                            ? (xe = !1)
                            : isNaN(_r(xe))
                              ? isNaN(ii(xe).getDate()) || (xe = At(xe))
                              : ((xe = _r(xe)),
                                z !== null && Mo(z) && (xe = zo(xe))),
                      (Ge = !0);
                    break;
                  case 'E':
                    We = !0;
                    var A = Pp(ne[y].slice(1), { r: d, c: m });
                    F[d][m] = [F[d][m], A];
                    break;
                  case 'S':
                    (ot = !0), (F[d][m] = [F[d][m], 'S5S']);
                    break;
                  case 'G':
                    break;
                  case 'R':
                    nt = parseInt(ne[y].slice(1)) - 1;
                    break;
                  case 'C':
                    et = parseInt(ne[y].slice(1)) - 1;
                    break;
                  default:
                    if (x && x.WTF) throw new Error('SYLK bad record ' + K);
                }
              if (
                (Ge &&
                  (F[d][m] && F[d][m].length == 2
                    ? (F[d][m][0] = xe)
                    : (F[d][m] = xe),
                  (z = null)),
                ot)
              ) {
                if (We)
                  throw new Error(
                    'SYLK shared formula cannot have own formula',
                  );
                var b = nt > -1 && F[nt][et];
                if (!b || !b[1])
                  throw new Error('SYLK shared formula cannot find base');
                F[d][m][1] = Lp(b[1], { r: d - nt, c: m - et });
              }
              break;
            case 'F':
              var R = 0;
              for (y = 1; y < ne.length; ++y)
                switch (ne[y].charAt(0)) {
                  case 'X':
                    (m = parseInt(ne[y].slice(1)) - 1), ++R;
                    break;
                  case 'Y':
                    for (
                      d = parseInt(ne[y].slice(1)) - 1, X = F.length;
                      X <= d;
                      ++X
                    )
                      F[X] = [];
                    break;
                  case 'M':
                    V = parseInt(ne[y].slice(1)) / 20;
                    break;
                  case 'F':
                    break;
                  case 'G':
                    break;
                  case 'P':
                    z = k[parseInt(ne[y].slice(1))];
                    break;
                  case 'S':
                    break;
                  case 'D':
                    break;
                  case 'N':
                    break;
                  case 'W':
                    for (
                      I = ne[y].slice(1).split(' '), X = parseInt(I[0], 10);
                      X <= parseInt(I[1], 10);
                      ++X
                    )
                      (V = parseInt(I[2], 10)),
                        (H[X - 1] = V === 0 ? { hidden: !0 } : { wch: V }),
                        $s(H[X - 1]);
                    break;
                  case 'C':
                    (m = parseInt(ne[y].slice(1)) - 1), H[m] || (H[m] = {});
                    break;
                  case 'R':
                    (d = parseInt(ne[y].slice(1)) - 1),
                      O[d] || (O[d] = {}),
                      V > 0
                        ? ((O[d].hpt = V), (O[d].hpx = Rl(V)))
                        : V === 0 && (O[d].hidden = !0);
                    break;
                  default:
                    if (x && x.WTF) throw new Error('SYLK bad record ' + K);
                }
              R < 1 && (z = null);
              break;
            default:
              if (x && x.WTF) throw new Error('SYLK bad record ' + K);
          }
      }
      return (
        O.length > 0 && (J['!rows'] = O),
        H.length > 0 && (J['!cols'] = H),
        x && x.sheetRows && (F = F.slice(0, x.sheetRows)),
        [F, J]
      );
    }
    function s(u, x) {
      var v = i(u, x),
        d = v[0],
        m = v[1],
        S = On(d, x);
      return (
        xt(m).forEach(function (y) {
          S[y] = m[y];
        }),
        S
      );
    }
    function f(u, x) {
      return Qr(s(u, x), x);
    }
    function l(u, x, v, d) {
      var m = 'C;Y' + (v + 1) + ';X' + (d + 1) + ';K';
      switch (u.t) {
        case 'n':
          (m += u.v || 0), u.f && !u.F && (m += ';E' + Js(u.f, { r: v, c: d }));
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
      x.forEach(function (v, d) {
        var m = 'F;W' + (d + 1) + ' ' + (d + 1) + ' ';
        v.hidden
          ? (m += '0')
          : (typeof v.width == 'number' && !v.wpx && (v.wpx = fa(v.width)),
            typeof v.wpx == 'number' && !v.wch && (v.wch = oa(v.wpx)),
            typeof v.wch == 'number' && (m += Math.round(v.wch))),
          m.charAt(m.length - 1) != ' ' && u.push(m);
      });
    }
    function c(u, x) {
      x.forEach(function (v, d) {
        var m = 'F;';
        v.hidden
          ? (m += 'M0;')
          : v.hpt
            ? (m += 'M' + 20 * v.hpt + ';')
            : v.hpx && (m += 'M' + 20 * la(v.hpx) + ';'),
          m.length > 2 && u.push(m + 'R' + (d + 1));
      });
    }
    function h(u, x) {
      var v = ['ID;PWXL;N;E'],
        d = [],
        m = He(u['!ref']),
        S,
        y = Array.isArray(u),
        F = `\r
`;
      v.push('P;PGeneral'),
        v.push('F;P0;DG0G8;M255'),
        u['!cols'] && o(v, u['!cols']),
        u['!rows'] && c(v, u['!rows']),
        v.push(
          'B;Y' +
            (m.e.r - m.s.r + 1) +
            ';X' +
            (m.e.c - m.s.c + 1) +
            ';D' +
            [m.s.c, m.s.r, m.e.c, m.e.r].join(' '),
        );
      for (var k = m.s.r; k <= m.e.r; ++k)
        for (var z = m.s.c; z <= m.e.c; ++z) {
          var J = Ne({ r: k, c: z });
          (S = y ? (u[k] || [])[z] : u[J]),
            !(!S || (S.v == null && (!S.f || S.F))) && d.push(l(S, u, k, z));
        }
      return v.join(F) + F + d.join(F) + F + 'E' + F;
    }
    return { to_workbook: f, to_sheet: s, from_sheet: h };
  })(),
  Bx = (function () {
    function e(a, s) {
      switch (s.type) {
        case 'base64':
          return t(Tr(a), s);
        case 'binary':
          return t(a, s);
        case 'buffer':
          return t(Fe && Buffer.isBuffer(a) ? a.toString('binary') : di(a), s);
        case 'array':
          return t(Ca(a), s);
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
            v = u[1];
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
                  : isNaN(_r(v))
                    ? isNaN(ii(v).getDate())
                      ? (h[l][o] = v)
                      : (h[l][o] = At(v))
                    : (h[l][o] = _r(v)),
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
    function r(a, s) {
      return On(e(a, s), s);
    }
    function n(a, s) {
      return Qr(r(a, s), s);
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
          c = He(l['!ref']),
          h,
          u = Array.isArray(l);
        a(o, 'TABLE', 0, 1, 'sheetjs'),
          a(o, 'VECTORS', 0, c.e.r - c.s.r + 1, ''),
          a(o, 'TUPLES', 0, c.e.c - c.s.c + 1, ''),
          a(o, 'DATA', 0, 0, '');
        for (var x = c.s.r; x <= c.e.r; ++x) {
          s(o, -1, 0, 'BOT');
          for (var v = c.s.c; v <= c.e.c; ++v) {
            var d = Ne({ r: x, c: v });
            if (((h = u ? (l[x] || [])[v] : l[d]), !h)) {
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
                h.w || (h.w = Ir(h.z || qe[14], Dt(At(h.v)))),
                  s(o, 0, h.w, 'V');
                break;
              default:
                s(o, 1, 0, '');
            }
          }
        }
        s(o, -1, 0, 'EOD');
        var S = `\r
`,
          y = o.join(S);
        return y;
      };
    })();
    return { to_workbook: n, to_sheet: r, from_sheet: i };
  })(),
  yl = (function () {
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
    function t(h) {
      return h.replace(/\\/g, '\\b').replace(/:/g, '\\c').replace(/\n/g, '\\n');
    }
    function r(h, u) {
      for (
        var x = h.split(`
`),
          v = -1,
          d = -1,
          m = 0,
          S = [];
        m !== x.length;
        ++m
      ) {
        var y = x[m].trim().split(':');
        if (y[0] === 'cell') {
          var F = st(y[1]);
          if (S.length <= F.r)
            for (v = S.length; v <= F.r; ++v) S[v] || (S[v] = []);
          switch (((v = F.r), (d = F.c), y[2])) {
            case 't':
              S[v][d] = e(y[3]);
              break;
            case 'v':
              S[v][d] = +y[3];
              break;
            case 'vtf':
              var k = y[y.length - 1];
            case 'vtc':
              switch (y[3]) {
                case 'nl':
                  S[v][d] = !!+y[4];
                  break;
                default:
                  S[v][d] = +y[4];
                  break;
              }
              y[2] == 'vtf' && (S[v][d] = [S[v][d], k]);
          }
        }
      }
      return u && u.sheetRows && (S = S.slice(0, u.sheetRows)), S;
    }
    function n(h, u) {
      return On(r(h, u), u);
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
          x = [],
          v,
          d = '',
          m = Ut(h['!ref']),
          S = Array.isArray(h),
          y = m.s.r;
        y <= m.e.r;
        ++y
      )
        for (var F = m.s.c; F <= m.e.c; ++F)
          if (
            ((d = Ne({ r: y, c: F })),
            (v = S ? (h[y] || [])[F] : h[d]),
            !(!v || v.v == null || v.t === 'z'))
          ) {
            switch (((x = ['cell', d, 't']), v.t)) {
              case 's':
              case 'str':
                x.push(t(v.v));
                break;
              case 'n':
                v.f
                  ? ((x[2] = 'vtf'),
                    (x[3] = 'n'),
                    (x[4] = v.v),
                    (x[5] = t(v.f)))
                  : ((x[2] = 'v'), (x[3] = v.v));
                break;
              case 'b':
                (x[2] = 'vt' + (v.f ? 'f' : 'c')),
                  (x[3] = 'nl'),
                  (x[4] = v.v ? '1' : '0'),
                  (x[5] = t(v.f || (v.v ? 'TRUE' : 'FALSE')));
                break;
              case 'd':
                var k = Dt(At(v.v));
                (x[2] = 'vtc'),
                  (x[3] = 'nd'),
                  (x[4] = '' + k),
                  (x[5] = v.w || Ir(v.z || qe[14], k));
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
  Mx = (function () {
    function e(c, h, u, x, v) {
      v.raw
        ? (h[u][x] = c)
        : c === '' ||
          (c === 'TRUE'
            ? (h[u][x] = !0)
            : c === 'FALSE'
              ? (h[u][x] = !1)
              : isNaN(_r(c))
                ? isNaN(ii(c).getDate())
                  ? (h[u][x] = c)
                  : (h[u][x] = At(c))
                : (h[u][x] = _r(c)));
    }
    function t(c, h) {
      var u = h || {},
        x = [];
      if (!c || c.length === 0) return x;
      for (
        var v = c.split(/[\r\n]/), d = v.length - 1;
        d >= 0 && v[d].length === 0;

      )
        --d;
      for (var m = 10, S = 0, y = 0; y <= d; ++y)
        (S = v[y].indexOf(' ')),
          S == -1 ? (S = v[y].length) : S++,
          (m = Math.max(m, S));
      for (y = 0; y <= d; ++y) {
        x[y] = [];
        var F = 0;
        for (
          e(v[y].slice(0, m).trim(), x, y, F, u), F = 1;
          F <= (v[y].length - m) / 10 + 1;
          ++F
        )
          e(v[y].slice(m + (F - 1) * 10, m + F * 10).trim(), x, y, F, u);
      }
      return u.sheetRows && (x = x.slice(0, u.sheetRows)), x;
    }
    var r = { 44: ',', 9: '	', 59: ';', 124: '|' },
      n = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function i(c) {
      for (var h = {}, u = !1, x = 0, v = 0; x < c.length; ++x)
        (v = c.charCodeAt(x)) == 34
          ? (u = !u)
          : !u && v in r && (h[v] = (h[v] || 0) + 1);
      v = [];
      for (x in h)
        Object.prototype.hasOwnProperty.call(h, x) && v.push([h[x], x]);
      if (!v.length) {
        h = n;
        for (x in h)
          Object.prototype.hasOwnProperty.call(h, x) && v.push([h[x], x]);
      }
      return (
        v.sort(function (d, m) {
          return d[0] - m[0] || n[d[1]] - n[m[1]];
        }),
        r[v.pop()[1]] || 44
      );
    }
    function a(c, h) {
      var u = h || {},
        x = '',
        v = u.dense ? [] : {},
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
        S = 0,
        y = 0,
        F = 0,
        k = 0,
        z = x.charCodeAt(0),
        J = !1,
        O = 0,
        H = c.charCodeAt(0);
      c = c.replace(
        /\r\n/gm,
        `
`,
      );
      var I = u.dateNF != null ? ed(u.dateNF) : null;
      function V() {
        var X = c.slice(F, k),
          K = {};
        if (
          (X.charAt(0) == '"' &&
            X.charAt(X.length - 1) == '"' &&
            (X = X.slice(1, -1).replace(/""/g, '"')),
          X.length === 0)
        )
          K.t = 'z';
        else if (u.raw) (K.t = 's'), (K.v = X);
        else if (X.trim().length === 0) (K.t = 's'), (K.v = X);
        else if (X.charCodeAt(0) == 61)
          X.charCodeAt(1) == 34 && X.charCodeAt(X.length - 1) == 34
            ? ((K.t = 's'), (K.v = X.slice(2, -1).replace(/""/g, '"')))
            : bp(X)
              ? ((K.t = 'n'), (K.f = X.slice(1)))
              : ((K.t = 's'), (K.v = X));
        else if (X == 'TRUE') (K.t = 'b'), (K.v = !0);
        else if (X == 'FALSE') (K.t = 'b'), (K.v = !1);
        else if (!isNaN((y = _r(X))))
          (K.t = 'n'), u.cellText !== !1 && (K.w = X), (K.v = y);
        else if (!isNaN(ii(X).getDate()) || (I && X.match(I))) {
          K.z = u.dateNF || qe[14];
          var ne = 0;
          I &&
            X.match(I) &&
            ((X = td(X, u.dateNF, X.match(I) || [])), (ne = 1)),
            u.cellDates
              ? ((K.t = 'd'), (K.v = At(X, ne)))
              : ((K.t = 'n'), (K.v = Dt(At(X, ne)))),
            u.cellText !== !1 &&
              (K.w = Ir(K.z, K.v instanceof Date ? Dt(K.v) : K.v)),
            u.cellNF || delete K.z;
        } else (K.t = 's'), (K.v = X);
        if (
          (K.t == 'z' ||
            (u.dense
              ? (v[m] || (v[m] = []), (v[m][S] = K))
              : (v[Ne({ c: S, r: m })] = K)),
          (F = k + 1),
          (H = c.charCodeAt(F)),
          d.e.c < S && (d.e.c = S),
          d.e.r < m && (d.e.r = m),
          O == z)
        )
          ++S;
        else if (((S = 0), ++m, u.sheetRows && u.sheetRows <= m)) return !0;
      }
      e: for (; k < c.length; ++k)
        switch ((O = c.charCodeAt(k))) {
          case 34:
            H === 34 && (J = !J);
            break;
          case z:
          case 10:
          case 13:
            if (!J && V()) break e;
            break;
        }
      return k - F > 0 && V(), (v['!ref'] = Ze(d)), v;
    }
    function s(c, h) {
      return !(h && h.PRN) ||
        h.FS ||
        c.slice(0, 4) == 'sep=' ||
        c.indexOf('	') >= 0 ||
        c.indexOf(',') >= 0 ||
        c.indexOf(';') >= 0
        ? a(c, h)
        : On(t(c, h), h);
    }
    function f(c, h) {
      var u = '',
        x = h.type == 'string' ? [0, 0, 0, 0] : Y_(c, h);
      switch (h.type) {
        case 'base64':
          u = Tr(c);
          break;
        case 'binary':
          u = c;
          break;
        case 'buffer':
          h.codepage == 65001
            ? (u = c.toString('utf8'))
            : (h.codepage && typeof Zi < 'u') ||
              (u = Fe && Buffer.isBuffer(c) ? c.toString('binary') : di(c));
          break;
        case 'array':
          u = Ca(c);
          break;
        case 'string':
          u = c;
          break;
        default:
          throw new Error('Unrecognized type ' + h.type);
      }
      return (
        x[0] == 239 && x[1] == 187 && x[2] == 191
          ? (u = Kn(u.slice(3)))
          : h.type != 'string' && h.type != 'buffer' && h.codepage == 65001
            ? (u = Kn(u))
            : h.type == 'binary' && typeof Zi < 'u',
        u.slice(0, 19) == 'socialcalc:version:'
          ? yl.to_sheet(h.type == 'string' ? u : Kn(u), h)
          : s(u, h)
      );
    }
    function l(c, h) {
      return Qr(f(c, h), h);
    }
    function o(c) {
      for (
        var h = [], u = He(c['!ref']), x, v = Array.isArray(c), d = u.s.r;
        d <= u.e.r;
        ++d
      ) {
        for (var m = [], S = u.s.c; S <= u.e.c; ++S) {
          var y = Ne({ r: d, c: S });
          if (((x = v ? (c[d] || [])[S] : c[y]), !x || x.v == null)) {
            m.push('          ');
            continue;
          }
          for (
            var F = (x.w || (wr(x), x.w) || '').slice(0, 10);
            F.length < 10;

          )
            F += ' ';
          m.push(F + (S === 0 ? ' ' : ''));
        }
        h.push(m.join(''));
      }
      return h.join(`
`);
    }
    return { to_workbook: l, to_sheet: f, from_sheet: o };
  })(),
  xf = (function () {
    function e(A, b, R) {
      if (A) {
        Lt(A, A.l || 0);
        for (var C = R.Enum || nt; A.l < A.length; ) {
          var j = A.read_shift(2),
            ue = C[j] || C[65535],
            he = A.read_shift(2),
            ce = A.l + he,
            ie = ue.f && ue.f(A, he, R);
          if (((A.l = ce), b(ie, ue, j))) return;
        }
      }
    }
    function t(A, b) {
      switch (b.type) {
        case 'base64':
          return r(er(Tr(A)), b);
        case 'binary':
          return r(er(A), b);
        case 'buffer':
        case 'array':
          return r(A, b);
      }
      throw 'Unsupported type ' + b.type;
    }
    function r(A, b) {
      if (!A) return A;
      var R = b || {},
        C = R.dense ? [] : {},
        j = 'Sheet1',
        ue = '',
        he = 0,
        ce = {},
        ie = [],
        Ce = [],
        Ee = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
        it = R.sheetRows || 0;
      if (
        A[2] == 0 &&
        (A[3] == 8 || A[3] == 9) &&
        A.length >= 16 &&
        A[14] == 5 &&
        A[15] === 108
      )
        throw new Error('Unsupported Works 3 for Mac file');
      if (A[2] == 2)
        (R.Enum = nt),
          e(
            A,
            function (le, yt, Ht) {
              switch (Ht) {
                case 0:
                  (R.vers = le), le >= 4096 && (R.qpro = !0);
                  break;
                case 6:
                  Ee = le;
                  break;
                case 204:
                  le && (ue = le);
                  break;
                case 222:
                  ue = le;
                  break;
                case 15:
                case 51:
                  R.qpro || (le[1].v = le[1].v.slice(1));
                case 13:
                case 14:
                case 16:
                  Ht == 14 &&
                    (le[2] & 112) == 112 &&
                    (le[2] & 15) > 1 &&
                    (le[2] & 15) < 15 &&
                    ((le[1].z = R.dateNF || qe[14]),
                    R.cellDates && ((le[1].t = 'd'), (le[1].v = zo(le[1].v)))),
                    R.qpro &&
                      le[3] > he &&
                      ((C['!ref'] = Ze(Ee)),
                      (ce[j] = C),
                      ie.push(j),
                      (C = R.dense ? [] : {}),
                      (Ee = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (he = le[3]),
                      (j = ue || 'Sheet' + (he + 1)),
                      (ue = ''));
                  var hr = R.dense ? (C[le[0].r] || [])[le[0].c] : C[Ne(le[0])];
                  if (hr) {
                    (hr.t = le[1].t),
                      (hr.v = le[1].v),
                      le[1].z != null && (hr.z = le[1].z),
                      le[1].f != null && (hr.f = le[1].f);
                    break;
                  }
                  R.dense
                    ? (C[le[0].r] || (C[le[0].r] = []),
                      (C[le[0].r][le[0].c] = le[1]))
                    : (C[Ne(le[0])] = le[1]);
                  break;
              }
            },
            R,
          );
      else if (A[2] == 26 || A[2] == 14)
        (R.Enum = et),
          A[2] == 14 && ((R.qpro = !0), (A.l = 0)),
          e(
            A,
            function (le, yt, Ht) {
              switch (Ht) {
                case 204:
                  j = le;
                  break;
                case 22:
                  le[1].v = le[1].v.slice(1);
                case 23:
                case 24:
                case 25:
                case 37:
                case 39:
                case 40:
                  if (
                    (le[3] > he &&
                      ((C['!ref'] = Ze(Ee)),
                      (ce[j] = C),
                      ie.push(j),
                      (C = R.dense ? [] : {}),
                      (Ee = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                      (he = le[3]),
                      (j = 'Sheet' + (he + 1))),
                    it > 0 && le[0].r >= it)
                  )
                    break;
                  R.dense
                    ? (C[le[0].r] || (C[le[0].r] = []),
                      (C[le[0].r][le[0].c] = le[1]))
                    : (C[Ne(le[0])] = le[1]),
                    Ee.e.c < le[0].c && (Ee.e.c = le[0].c),
                    Ee.e.r < le[0].r && (Ee.e.r = le[0].r);
                  break;
                case 27:
                  le[14e3] && (Ce[le[14e3][0]] = le[14e3][1]);
                  break;
                case 1537:
                  (Ce[le[0]] = le[1]), le[0] == he && (j = le[1]);
                  break;
              }
            },
            R,
          );
      else throw new Error('Unrecognized LOTUS BOF ' + A[2]);
      if (
        ((C['!ref'] = Ze(Ee)), (ce[ue || j] = C), ie.push(ue || j), !Ce.length)
      )
        return { SheetNames: ie, Sheets: ce };
      for (var we = {}, $t = [], ze = 0; ze < Ce.length; ++ze)
        ce[ie[ze]]
          ? ($t.push(Ce[ze] || ie[ze]), (we[Ce[ze]] = ce[Ce[ze]] || ce[ie[ze]]))
          : ($t.push(Ce[ze]), (we[Ce[ze]] = { '!ref': 'A1' }));
      return { SheetNames: $t, Sheets: we };
    }
    function n(A, b) {
      var R = b || {};
      if ((+R.codepage >= 0 && ri(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK1 to JS string');
      var C = Rt(),
        j = He(A['!ref']),
        ue = Array.isArray(A),
        he = [];
      te(C, 0, a(1030)), te(C, 6, l(j));
      for (var ce = Math.min(j.e.r, 8191), ie = j.s.r; ie <= ce; ++ie)
        for (var Ce = dt(ie), Ee = j.s.c; Ee <= j.e.c; ++Ee) {
          ie === j.s.r && (he[Ee] = mt(Ee));
          var it = he[Ee] + Ce,
            we = ue ? (A[ie] || [])[Ee] : A[it];
          if (!(!we || we.t == 'z'))
            if (we.t == 'n')
              (we.v | 0) == we.v && we.v >= -32768 && we.v <= 32767
                ? te(C, 13, x(ie, Ee, we.v))
                : te(C, 14, d(ie, Ee, we.v));
            else {
              var $t = wr(we);
              te(C, 15, h(ie, Ee, $t.slice(0, 239)));
            }
        }
      return te(C, 1), C.end();
    }
    function i(A, b) {
      var R = b || {};
      if ((+R.codepage >= 0 && ri(+R.codepage), R.type == 'string'))
        throw new Error('Cannot write WK3 to JS string');
      var C = Rt();
      te(C, 0, s(A));
      for (var j = 0, ue = 0; j < A.SheetNames.length; ++j)
        (A.Sheets[A.SheetNames[j]] || {})['!ref'] &&
          te(C, 27, We(A.SheetNames[j], ue++));
      var he = 0;
      for (j = 0; j < A.SheetNames.length; ++j) {
        var ce = A.Sheets[A.SheetNames[j]];
        if (!(!ce || !ce['!ref'])) {
          for (
            var ie = He(ce['!ref']),
              Ce = Array.isArray(ce),
              Ee = [],
              it = Math.min(ie.e.r, 8191),
              we = ie.s.r;
            we <= it;
            ++we
          )
            for (var $t = dt(we), ze = ie.s.c; ze <= ie.e.c; ++ze) {
              we === ie.s.r && (Ee[ze] = mt(ze));
              var le = Ee[ze] + $t,
                yt = Ce ? (ce[we] || [])[ze] : ce[le];
              if (!(!yt || yt.t == 'z'))
                if (yt.t == 'n') te(C, 23, V(we, ze, he, yt.v));
                else {
                  var Ht = wr(yt);
                  te(C, 22, O(we, ze, he, Ht.slice(0, 239)));
                }
            }
          ++he;
        }
      }
      return te(C, 1), C.end();
    }
    function a(A) {
      var b = U(2);
      return b.write_shift(2, A), b;
    }
    function s(A) {
      var b = U(26);
      b.write_shift(2, 4096), b.write_shift(2, 4), b.write_shift(4, 0);
      for (var R = 0, C = 0, j = 0, ue = 0; ue < A.SheetNames.length; ++ue) {
        var he = A.SheetNames[ue],
          ce = A.Sheets[he];
        if (!(!ce || !ce['!ref'])) {
          ++j;
          var ie = Ut(ce['!ref']);
          R < ie.e.r && (R = ie.e.r), C < ie.e.c && (C = ie.e.c);
        }
      }
      return (
        R > 8191 && (R = 8191),
        b.write_shift(2, R),
        b.write_shift(1, j),
        b.write_shift(1, C),
        b.write_shift(2, 0),
        b.write_shift(2, 0),
        b.write_shift(1, 1),
        b.write_shift(1, 2),
        b.write_shift(4, 0),
        b.write_shift(4, 0),
        b
      );
    }
    function f(A, b, R) {
      var C = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      return b == 8 && R.qpro
        ? ((C.s.c = A.read_shift(1)),
          A.l++,
          (C.s.r = A.read_shift(2)),
          (C.e.c = A.read_shift(1)),
          A.l++,
          (C.e.r = A.read_shift(2)),
          C)
        : ((C.s.c = A.read_shift(2)),
          (C.s.r = A.read_shift(2)),
          b == 12 && R.qpro && (A.l += 2),
          (C.e.c = A.read_shift(2)),
          (C.e.r = A.read_shift(2)),
          b == 12 && R.qpro && (A.l += 2),
          C.s.c == 65535 && (C.s.c = C.e.c = C.s.r = C.e.r = 0),
          C);
    }
    function l(A) {
      var b = U(8);
      return (
        b.write_shift(2, A.s.c),
        b.write_shift(2, A.s.r),
        b.write_shift(2, A.e.c),
        b.write_shift(2, A.e.r),
        b
      );
    }
    function o(A, b, R) {
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
    function c(A, b, R) {
      var C = A.l + b,
        j = o(A, b, R);
      if (((j[1].t = 's'), R.vers == 20768)) {
        A.l++;
        var ue = A.read_shift(1);
        return (j[1].v = A.read_shift(ue, 'utf8')), j;
      }
      return R.qpro && A.l++, (j[1].v = A.read_shift(C - A.l, 'cstr')), j;
    }
    function h(A, b, R) {
      var C = U(7 + R.length);
      C.write_shift(1, 255),
        C.write_shift(2, b),
        C.write_shift(2, A),
        C.write_shift(1, 39);
      for (var j = 0; j < C.length; ++j) {
        var ue = R.charCodeAt(j);
        C.write_shift(1, ue >= 128 ? 95 : ue);
      }
      return C.write_shift(1, 0), C;
    }
    function u(A, b, R) {
      var C = o(A, b, R);
      return (C[1].v = A.read_shift(2, 'i')), C;
    }
    function x(A, b, R) {
      var C = U(7);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, b),
        C.write_shift(2, A),
        C.write_shift(2, R, 'i'),
        C
      );
    }
    function v(A, b, R) {
      var C = o(A, b, R);
      return (C[1].v = A.read_shift(8, 'f')), C;
    }
    function d(A, b, R) {
      var C = U(13);
      return (
        C.write_shift(1, 255),
        C.write_shift(2, b),
        C.write_shift(2, A),
        C.write_shift(8, R, 'f'),
        C
      );
    }
    function m(A, b, R) {
      var C = A.l + b,
        j = o(A, b, R);
      if (((j[1].v = A.read_shift(8, 'f')), R.qpro)) A.l = C;
      else {
        var ue = A.read_shift(2);
        k(A.slice(A.l, A.l + ue), j), (A.l += ue);
      }
      return j;
    }
    function S(A, b, R) {
      var C = b & 32768;
      return (
        (b &= -32769),
        (b = (C ? A : 0) + (b >= 8192 ? b - 16384 : b)),
        (C ? '' : '$') + (R ? mt(b) : dt(b))
      );
    }
    var y = {
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
    function k(A, b) {
      Lt(A, 0);
      for (
        var R = [], C = 0, j = '', ue = '', he = '', ce = '';
        A.l < A.length;

      ) {
        var ie = A[A.l++];
        switch (ie) {
          case 0:
            R.push(A.read_shift(8, 'f'));
            break;
          case 1:
            (ue = S(b[0].c, A.read_shift(2), !0)),
              (j = S(b[0].r, A.read_shift(2), !1)),
              R.push(ue + j);
            break;
          case 2:
            {
              var Ce = S(b[0].c, A.read_shift(2), !0),
                Ee = S(b[0].r, A.read_shift(2), !1);
              (ue = S(b[0].c, A.read_shift(2), !0)),
                (j = S(b[0].r, A.read_shift(2), !1)),
                R.push(Ce + Ee + ':' + ue + j);
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
              for (var it = ''; (ie = A[A.l++]); )
                it += String.fromCharCode(ie);
              R.push('"' + it.replace(/"/g, '""') + '"');
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
            (ce = R.pop()),
              (he = R.pop()),
              R.push(['AND', 'OR'][ie - 20] + '(' + he + ',' + ce + ')');
            break;
          default:
            if (ie < 32 && F[ie])
              (ce = R.pop()), (he = R.pop()), R.push(he + F[ie] + ce);
            else if (y[ie]) {
              if (((C = y[ie][1]), C == 69 && (C = A[A.l++]), C > R.length)) {
                console.error(
                  'WK1 bad formula parse 0x' +
                    ie.toString(16) +
                    ':|' +
                    R.join('|') +
                    '|',
                );
                return;
              }
              var we = R.slice(-C);
              (R.length -= C), R.push(y[ie][0] + '(' + we.join(',') + ')');
            } else
              return ie <= 7
                ? console.error('WK1 invalid opcode ' + ie.toString(16))
                : ie <= 24
                  ? console.error('WK1 unsupported op ' + ie.toString(16))
                  : ie <= 30
                    ? console.error('WK1 invalid opcode ' + ie.toString(16))
                    : ie <= 115
                      ? console.error(
                          'WK1 unsupported function opcode ' + ie.toString(16),
                        )
                      : console.error(
                          'WK1 unrecognized opcode ' + ie.toString(16),
                        );
        }
      }
      R.length == 1
        ? (b[1].f = '' + R[0])
        : console.error('WK1 bad formula parse |' + R.join('|') + '|');
    }
    function z(A) {
      var b = [{ c: 0, r: 0 }, { t: 'n', v: 0 }, 0];
      return (
        (b[0].r = A.read_shift(2)), (b[3] = A[A.l++]), (b[0].c = A[A.l++]), b
      );
    }
    function J(A, b) {
      var R = z(A);
      return (R[1].t = 's'), (R[1].v = A.read_shift(b - 4, 'cstr')), R;
    }
    function O(A, b, R, C) {
      var j = U(6 + C.length);
      j.write_shift(2, A),
        j.write_shift(1, R),
        j.write_shift(1, b),
        j.write_shift(1, 39);
      for (var ue = 0; ue < C.length; ++ue) {
        var he = C.charCodeAt(ue);
        j.write_shift(1, he >= 128 ? 95 : he);
      }
      return j.write_shift(1, 0), j;
    }
    function H(A, b) {
      var R = z(A);
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
    function I(A, b) {
      var R = z(A),
        C = A.read_shift(4),
        j = A.read_shift(4),
        ue = A.read_shift(2);
      if (ue == 65535)
        return (
          C === 0 && j === 3221225472
            ? ((R[1].t = 'e'), (R[1].v = 15))
            : C === 0 && j === 3489660928
              ? ((R[1].t = 'e'), (R[1].v = 42))
              : (R[1].v = 0),
          R
        );
      var he = ue & 32768;
      return (
        (ue = (ue & 32767) - 16446),
        (R[1].v =
          (1 - he * 2) * (j * Math.pow(2, ue + 32) + C * Math.pow(2, ue))),
        R
      );
    }
    function V(A, b, R, C) {
      var j = U(14);
      if (
        (j.write_shift(2, A), j.write_shift(1, R), j.write_shift(1, b), C == 0)
      )
        return (
          j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j
        );
      var ue = 0,
        he = 0,
        ce = 0,
        ie = 0;
      return (
        C < 0 && ((ue = 1), (C = -C)),
        (he = Math.log2(C) | 0),
        (C /= Math.pow(2, he - 31)),
        (ie = C >>> 0),
        (ie & 2147483648) == 0 && ((C /= 2), ++he, (ie = C >>> 0)),
        (C -= ie),
        (ie |= 2147483648),
        (ie >>>= 0),
        (C *= Math.pow(2, 32)),
        (ce = C >>> 0),
        j.write_shift(4, ce),
        j.write_shift(4, ie),
        (he += 16383 + (ue ? 32768 : 0)),
        j.write_shift(2, he),
        j
      );
    }
    function X(A, b) {
      var R = I(A);
      return (A.l += b - 14), R;
    }
    function K(A, b) {
      var R = z(A),
        C = A.read_shift(4);
      return (R[1].v = C >> 6), R;
    }
    function ne(A, b) {
      var R = z(A),
        C = A.read_shift(8, 'f');
      return (R[1].v = C), R;
    }
    function Te(A, b) {
      var R = ne(A);
      return (A.l += b - 10), R;
    }
    function xe(A, b) {
      return A[A.l + b - 1] == 0 ? A.read_shift(b, 'cstr') : '';
    }
    function Ge(A, b) {
      var R = A[A.l++];
      R > b - 1 && (R = b - 1);
      for (var C = ''; C.length < R; ) C += String.fromCharCode(A[A.l++]);
      return C;
    }
    function Le(A, b, R) {
      if (!(!R.qpro || b < 21)) {
        var C = A.read_shift(1);
        (A.l += 17), (A.l += 1), (A.l += 2);
        var j = A.read_shift(b - 21, 'cstr');
        return [C, j];
      }
    }
    function ot(A, b) {
      for (var R = {}, C = A.l + b; A.l < C; ) {
        var j = A.read_shift(2);
        if (j == 14e3) {
          for (R[j] = [0, ''], R[j][0] = A.read_shift(2); A[A.l]; )
            (R[j][1] += String.fromCharCode(A[A.l])), A.l++;
          A.l++;
        }
      }
      return R;
    }
    function We(A, b) {
      var R = U(5 + A.length);
      R.write_shift(2, 14e3), R.write_shift(2, b);
      for (var C = 0; C < A.length; ++C) {
        var j = A.charCodeAt(C);
        R[R.l++] = j > 127 ? 95 : j;
      }
      return (R[R.l++] = 0), R;
    }
    var nt = {
        0: { n: 'BOF', f: El },
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
        14: { n: 'NUMBER', f: v },
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
        204: { n: 'SHEETNAMECS', f: xe },
        222: { n: 'SHEETNAMELP', f: Ge },
        65535: { n: '' },
      },
      et = {
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
        24: { n: 'NUMBER18', f: H },
        25: { n: 'FORMULA19', f: X },
        26: { n: 'FORMULA1A' },
        27: { n: 'XFORMAT', f: ot },
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
        39: { n: 'NUMBER27', f: ne },
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
        204: { n: 'SHEETNAMECS', f: xe },
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
        1537: { n: 'SHEETINFOQP', f: Le },
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
  Ux = /^\s|\s$|[\t\n\r]/;
function Fl(e, t) {
  if (!t.bookSST) return '';
  var r = [Qe];
  r[r.length] = ee('sst', null, {
    xmlns: Cn[0],
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
          i.t.match(Ux) && (a += ' xml:space="preserve"'),
          (a += '>' + De(i.t) + '</t>')),
        (a += '</si>'),
        (r[r.length] = a);
    }
  return (
    r.length > 2 &&
      ((r[r.length] = '</sst>'), (r[1] = r[1].replace('/>', '>'))),
    r.join('')
  );
}
function Hx(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Wx(e, t) {
  return (
    t || (t = U(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t
  );
}
var zx = kd;
function Vx(e) {
  var t = Rt();
  G(t, 159, Wx(e));
  for (var r = 0; r < e.length; ++r) G(t, 19, zx(e[r]));
  return G(t, 160), t.end();
}
function Gx(e) {
  for (var t = [], r = e.split(''), n = 0; n < r.length; ++n)
    t[n] = r[n].charCodeAt(0);
  return t;
}
function Cl(e) {
  var t = 0,
    r,
    n = Gx(e),
    i = n.length + 1,
    a,
    s,
    f,
    l,
    o;
  for (r = $r(i), r[0] = n.length, a = 1; a != i; ++a) r[a] = n[a - 1];
  for (a = i - 1; a >= 0; --a)
    (s = r[a]),
      (f = (t & 16384) === 0 ? 0 : 1),
      (l = (t << 1) & 32767),
      (o = f | l),
      (t = o ^ s);
  return t ^ 52811;
}
var jx = (function () {
  function e(i, a) {
    switch (a.type) {
      case 'base64':
        return t(Tr(i), a);
      case 'binary':
        return t(i, a);
      case 'buffer':
        return t(Fe && Buffer.isBuffer(i) ? i.toString('binary') : di(i), a);
      case 'array':
        return t(Ca(i), a);
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
      l.forEach(function (c, h) {
        Array.isArray(f) && (f[h] = []);
        for (var u = /\\\w+\b/g, x = 0, v, d = -1; (v = u.exec(c)); ) {
          switch (v[0]) {
            case '\\cell':
              var m = c.slice(x, u.lastIndex - v[0].length);
              if ((m[0] == ' ' && (m = m.slice(1)), ++d, m.length)) {
                var S = { v: m, t: 's' };
                Array.isArray(f) ? (f[h][d] = S) : (f[Ne({ r: h, c: d })] = S);
              }
              break;
          }
          x = u.lastIndex;
        }
        d > o.e.c && (o.e.c = d);
      }),
      (f['!ref'] = Ze(o)),
      f
    );
  }
  function r(i, a) {
    return Qr(e(i, a), a);
  }
  function n(i) {
    for (
      var a = ['{\\rtf1\\ansi'],
        s = He(i['!ref']),
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
            (a.push(' ' + (f.w || (wr(f), f.w))), a.push('\\cell'));
      }
      a.push('\\pard\\intbl\\row');
    }
    return a.join('') + '}';
  }
  return { to_workbook: r, to_sheet: e, from_sheet: n };
})();
function pf(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var Xx = 6,
  gr = Xx;
function fa(e) {
  return Math.floor((e + Math.round(128 / gr) / 256) * gr);
}
function oa(e) {
  return Math.floor(((e - 5) / gr) * 100 + 0.5) / 100;
}
function ps(e) {
  return Math.round(((e * gr + 5) / gr) * 256) / 256;
}
function $s(e) {
  e.width
    ? ((e.wpx = fa(e.width)), (e.wch = oa(e.wpx)), (e.MDW = gr))
    : e.wpx
      ? ((e.wch = oa(e.wpx)), (e.width = ps(e.wch)), (e.MDW = gr))
      : typeof e.wch == 'number' &&
        ((e.width = ps(e.wch)), (e.wpx = fa(e.width)), (e.MDW = gr)),
    e.customWidth && delete e.customWidth;
}
var Kx = 96,
  Ol = Kx;
function la(e) {
  return (e * 96) / Ol;
}
function Rl(e) {
  return (e * Ol) / 96;
}
function qx(e) {
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
          (t[t.length] = ee('numFmt', null, {
            numFmtId: n,
            formatCode: De(e[n]),
          }));
    }),
    t.length === 1
      ? ''
      : ((t[t.length] = '</numFmts>'),
        (t[0] = ee('numFmts', null, { count: t.length - 2 }).replace(
          '/>',
          '>',
        )),
        t.join(''))
  );
}
function $x(e) {
  var t = [];
  return (
    (t[t.length] = ee('cellXfs', null)),
    e.forEach(function (r) {
      t[t.length] = ee('xf', null, r);
    }),
    (t[t.length] = '</cellXfs>'),
    t.length === 2
      ? ''
      : ((t[0] = ee('cellXfs', null, { count: t.length - 2 }).replace(
          '/>',
          '>',
        )),
        t.join(''))
  );
}
function Dl(e, t) {
  var r = [Qe, ee('styleSheet', null, { xmlns: Cn[0], 'xmlns:vt': at.vt })],
    n;
  return (
    e.SSF && (n = qx(e.SSF)) != null && (r[r.length] = n),
    (r[r.length] =
      '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
    (r[r.length] =
      '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
    (r[r.length] =
      '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
    (r[r.length] =
      '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
    (n = $x(t.cellXfs)) && (r[r.length] = n),
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
function Yx(e, t) {
  var r = e.read_shift(2),
    n = _t(e);
  return [r, n];
}
function Jx(e, t, r) {
  r || (r = U(6 + 4 * t.length)), r.write_shift(2, e), ft(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function Zx(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var i = Ud(e);
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
    (l > 0 && (n.charset = l), e.l++, (n.color = Md(e)), e.read_shift(1))
  ) {
    case 1:
      n.scheme = 'major';
      break;
    case 2:
      n.scheme = 'minor';
      break;
  }
  return (n.name = _t(e)), n;
}
function Qx(e, t) {
  t || (t = U(25 + 4 * 32)),
    t.write_shift(2, e.sz * 20),
    Hd(e, t),
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
    aa(e.color, t);
  var n = 0;
  return (
    (n = 2),
    t.write_shift(1, n),
    ft(e.name, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
var ep = [
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
  tp = ur;
function vf(e, t) {
  t || (t = U(4 * 3 + 8 * 7 + 16 * 1)), $a || ($a = Bs(ep));
  var r = $a[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (aa({ auto: 1 }, t), aa({ auto: 1 }, t); n < 12; ++n)
      t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function rp(e, t) {
  var r = e.l + t,
    n = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l = r), { ixfe: n, numFmtId: i };
}
function Nl(e, t, r) {
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
function Hn(e, t) {
  return (
    t || (t = U(10)),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var np = ur;
function ip(e, t) {
  return (
    t || (t = U(51)),
    t.write_shift(1, 0),
    Hn(null, t),
    Hn(null, t),
    Hn(null, t),
    Hn(null, t),
    Hn(null, t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function ap(e, t) {
  return (
    t || (t = U(12 + 4 * 10)),
    t.write_shift(4, e.xfId),
    t.write_shift(2, 1),
    t.write_shift(1, 0),
    t.write_shift(1, 0),
    ia(e.name || '', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function sp(e, t, r) {
  var n = U(2052);
  return (
    n.write_shift(4, e),
    ia(t, n),
    ia(r, n),
    n.length > n.l ? n.slice(0, n.l) : n
  );
}
function fp(e, t) {
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
        (G(e, 615, rr(r)),
        [
          [5, 8],
          [23, 26],
          [41, 44],
          [50, 392],
        ].forEach(function (n) {
          for (var i = n[0]; i <= n[1]; ++i)
            t[i] != null && G(e, 44, Jx(i, t[i]));
        }),
        G(e, 616));
  }
}
function op(e) {
  var t = 1;
  G(e, 611, rr(t)),
    G(e, 43, Qx({ sz: 12, color: { theme: 1 }, name: 'Calibri', family: 2 })),
    G(e, 612);
}
function lp(e) {
  var t = 2;
  G(e, 603, rr(t)),
    G(e, 45, vf({ patternType: 'none' })),
    G(e, 45, vf({ patternType: 'gray125' })),
    G(e, 604);
}
function cp(e) {
  var t = 1;
  G(e, 613, rr(t)), G(e, 46, ip()), G(e, 614);
}
function up(e) {
  var t = 1;
  G(e, 626, rr(t)), G(e, 47, Nl({ numFmtId: 0 }, 65535)), G(e, 627);
}
function hp(e, t) {
  G(e, 617, rr(t.length)),
    t.forEach(function (r) {
      G(e, 47, Nl(r, 0));
    }),
    G(e, 618);
}
function dp(e) {
  var t = 1;
  G(e, 619, rr(t)), G(e, 48, ap({ xfId: 0, name: 'Normal' })), G(e, 620);
}
function xp(e) {
  var t = 0;
  G(e, 505, rr(t)), G(e, 506);
}
function pp(e) {
  var t = 0;
  G(e, 508, sp(t, 'TableStyleMedium9', 'PivotStyleMedium4')), G(e, 509);
}
function vp(e, t) {
  var r = Rt();
  return (
    G(r, 278),
    fp(r, e.SSF),
    op(r),
    lp(r),
    cp(r),
    up(r),
    hp(r, t.cellXfs),
    dp(r),
    xp(r),
    pp(r),
    G(r, 279),
    r.end()
  );
}
function kl(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == 'string') return e.raw;
  var r = [Qe];
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
function mp(e, t) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: _t(e) };
}
function _p(e) {
  var t = U(12 + 2 * e.name.length);
  return (
    t.write_shift(4, e.flags),
    t.write_shift(4, e.version),
    ft(e.name, t),
    t.slice(0, t.l)
  );
}
function gp(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function Ep(e) {
  var t = U(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function Tp(e, t) {
  var r = U(8 + 2 * t.length);
  return r.write_shift(4, e), ft(t, r), r.slice(0, r.l);
}
function wp(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function Sp(e, t) {
  var r = U(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function Ap() {
  var e = Rt();
  return (
    G(e, 332),
    G(e, 334, rr(1)),
    G(e, 335, _p({ name: 'XLDAPR', version: 12e4, flags: 3496657072 })),
    G(e, 336),
    G(e, 339, Tp(1, 'XLDAPR')),
    G(e, 52),
    G(e, 35, rr(514)),
    G(e, 4096, rr(0)),
    G(e, 4097, Gt(1)),
    G(e, 36),
    G(e, 53),
    G(e, 340),
    G(e, 337, Sp(1)),
    G(e, 51, Ep([[1, 0]])),
    G(e, 338),
    G(e, 333),
    e.end()
  );
}
function Il() {
  var e = [Qe];
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
function yp(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = Ne(r));
  var n = e.read_shift(1);
  return n & 2 && (t.l = '1'), n & 8 && (t.a = '1'), t;
}
var vn = 1024;
function Pl(e, t) {
  for (
    var r = [21600, 21600],
      n = ['m0,0l0', r[1], r[0], r[1], r[0], '0xe'].join(','),
      i = [
        ee('xml', null, {
          'xmlns:v': bt.v,
          'xmlns:o': bt.o,
          'xmlns:x': bt.x,
          'xmlns:mv': bt.mv,
        }).replace(/\/>/, '>'),
        ee('o:shapelayout', ee('o:idmap', null, { 'v:ext': 'edit', data: e }), {
          'v:ext': 'edit',
        }),
        ee(
          'v:shapetype',
          [
            ee('v:stroke', null, { joinstyle: 'miter' }),
            ee('v:path', null, {
              gradientshapeok: 't',
              'o:connecttype': 'rect',
            }),
          ].join(''),
          { id: '_x0000_t202', 'o:spt': 202, coordsize: r.join(','), path: n },
        ),
      ];
    vn < e * 1e3;

  )
    vn += 1e3;
  return (
    t.forEach(function (a) {
      var s = st(a[0]),
        f = { color2: '#BEFF82', type: 'gradient' };
      f.type == 'gradient' && (f.angle = '-180');
      var l =
          f.type == 'gradient'
            ? ee('o:fill', null, { type: 'gradientUnscaled', 'v:ext': 'view' })
            : null,
        o = ee('v:fill', l, f),
        c = { on: 't', obscured: 't' };
      ++vn,
        (i = i.concat([
          '<v:shape' +
            si({
              id: '_x0000_s' + vn,
              type: '#_x0000_t202',
              style:
                'position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10' +
                (a[1].hidden ? ';visibility:hidden' : ''),
              fillcolor: '#ECFAD4',
              strokecolor: '#edeaa1',
            }) +
            '>',
          o,
          ee('v:shadow', null, c),
          ee('v:path', null, { 'o:connecttype': 'none' }),
          '<v:textbox><div style="text-align:left"></div></v:textbox>',
          '<x:ClientData ObjectType="Note">',
          '<x:MoveWithCells/>',
          '<x:SizeWithCells/>',
          ht(
            'x:Anchor',
            [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(','),
          ),
          ht('x:AutoFill', 'False'),
          ht('x:Row', String(s.r)),
          ht('x:Column', String(s.c)),
          a[1].hidden ? '' : '<x:Visible/>',
          '</x:ClientData>',
          '</v:shape>',
        ]));
    }),
    i.push('</xml>'),
    i.join('')
  );
}
function Ll(e) {
  var t = [Qe, ee('comments', null, { xmlns: Cn[0] })],
    r = [];
  return (
    t.push('<authors>'),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        var a = De(i.a);
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
              l.a && (i = r.indexOf(De(l.a))), a.push(l.t || '');
            }),
        t.push('<comment ref="' + n[0] + '" authorId="' + i + '"><text>'),
        a.length <= 1)
      )
        t.push(ht('t', De(a[0] || '')));
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
        t.push(ht('t', De(s)));
      }
      t.push('</text></comment>');
    }),
    t.push('</commentList>'),
    t.length > 2 &&
      ((t[t.length] = '</comments>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Fp(e, t, r) {
  var n = [
    Qe,
    ee('ThreadedComments', null, { xmlns: at.TCMNT }).replace(/[\/]>/, '>'),
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
          n.push(ee('threadedComment', ht('text', s.t || ''), l));
      });
    }),
    n.push('</ThreadedComments>'),
    n.join('')
  );
}
function Cp(e) {
  var t = [
    Qe,
    ee('personList', null, { xmlns: at.TCMNT, 'xmlns:x': Cn[0] }).replace(
      /[\/]>/,
      '>',
    ),
  ];
  return (
    e.forEach(function (r, n) {
      t.push(
        ee('person', null, {
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
function Op(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = nn(e);
  return (t.rfx = r.s), (t.ref = Ne(r.s)), (e.l += 16), t;
}
function Rp(e, t) {
  return (
    t == null && (t = U(36)),
    t.write_shift(4, e[1].iauthor),
    Rn(e[0], t),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t.write_shift(4, 0),
    t
  );
}
var Dp = _t;
function Np(e) {
  return ft(e.slice(0, 54));
}
function kp(e) {
  var t = Rt(),
    r = [];
  return (
    G(t, 628),
    G(t, 630),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        r.indexOf(i.a) > -1 || (r.push(i.a.slice(0, 54)), G(t, 632, Np(i.a)));
      });
    }),
    G(t, 631),
    G(t, 633),
    e.forEach(function (n) {
      n[1].forEach(function (i) {
        i.iauthor = r.indexOf(i.a);
        var a = { s: st(n[0]), e: st(n[0]) };
        G(t, 635, Rp([a, i])),
          i.t && i.t.length > 0 && G(t, 637, Pd(i)),
          G(t, 636),
          delete i.iauthor;
      });
    }),
    G(t, 634),
    G(t, 629),
    t.end()
  );
}
function Ip(e, t) {
  t.FullPaths.forEach(function (r, n) {
    if (n != 0) {
      var i = r.replace(/[^\/]*[\/]/, '/_VBA_PROJECT_CUR/');
      i.slice(-1) !== '/' && Ie.utils.cfb_add(e, i, t.FileIndex[n].content);
    }
  });
}
var bl = ['xlsb', 'xlsm', 'xlam', 'biff8', 'xla'],
  Pp = (function () {
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
        i + (f ? '' : '$') + mt(c) + (l ? '' : '$') + dt(o)
      );
    }
    return function (i, a) {
      return (t = a), i.replace(e, r);
    };
  })(),
  Ys =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  Js = (function () {
    return function (t, r) {
      return t.replace(Ys, function (n, i, a, s, f, l) {
        var o = Gs(s) - (a ? 0 : r.c),
          c = Vs(l) - (f ? 0 : r.r),
          h = c == 0 ? '' : f ? c + 1 : '[' + c + ']',
          u = o == 0 ? '' : a ? o + 1 : '[' + o + ']';
        return i + 'R' + h + 'C' + u;
      });
    };
  })();
function Lp(e, t) {
  return e.replace(Ys, function (r, n, i, a, s, f) {
    return (
      n +
      (i == '$' ? i + a : mt(Gs(a) + t.c)) +
      (s == '$' ? s + f : dt(Vs(f) + t.r))
    );
  });
}
function bp(e) {
  return e.length != 1;
}
function Je(e) {
  e.l += 1;
}
function Pr(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, (r >> 14) & 1, (r >> 15) & 1];
}
function Bl(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Ml(e);
    r.biff == 12 && (n = 4);
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
function Ml(e) {
  var t = Pr(e),
    r = Pr(e),
    n = e.read_shift(1),
    i = e.read_shift(1);
  return {
    s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
    e: { r: r[0], c: i, cRel: r[1], rRel: r[2] },
  };
}
function Bp(e, t, r) {
  if (r.biff < 8) return Ml(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2),
    i = e.read_shift(r.biff == 12 ? 4 : 2),
    a = Pr(e),
    s = Pr(e);
  return {
    s: { r: n, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: i, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Ul(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Mp(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2),
    i = Pr(e);
  return { r: n, c: i[0], cRel: i[1], rRel: i[2] };
}
function Mp(e) {
  var t = Pr(e),
    r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function Up(e) {
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
function Hp(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return Wp(e);
  var i = e.read_shift(n >= 12 ? 4 : 2),
    a = e.read_shift(2),
    s = (a & 16384) >> 14,
    f = (a & 32768) >> 15;
  if (((a &= 16383), f == 1)) for (; i > 524287; ) i -= 1048576;
  if (s == 1) for (; a > 8191; ) a = a - 16384;
  return { r: i, c: a, cRel: s, rRel: f };
}
function Wp(e) {
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
function zp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = Bl(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, i];
}
function Vp(e, t, r) {
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
  var s = Bl(e, a, r);
  return [n, i, s];
}
function Gp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
}
function jp(e, t, r) {
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
function Xp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5,
    i = Bp(e, t - 1, r);
  return [n, i];
}
function Kp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return (e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7), [n];
}
function mf(e) {
  var t = e[e.l + 1] & 1,
    r = 1;
  return (e.l += 4), [t, r];
}
function qp(e, t, r) {
  e.l += 2;
  for (
    var n = e.read_shift(r && r.biff == 2 ? 1 : 2), i = [], a = 0;
    a <= n;
    ++a
  )
    i.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return i;
}
function $p(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Yp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Jp(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [t, e.read_shift(2)];
}
function Zp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += r && r.biff == 2 ? 3 : 4), [n];
}
function Hl(e) {
  var t = e.read_shift(1),
    r = e.read_shift(1);
  return [t, r];
}
function Qp(e) {
  return e.read_shift(2), Hl(e);
}
function ev(e) {
  return e.read_shift(2), Hl(e);
}
function tv(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = Ul(e, 0, r);
  return [n, i];
}
function rv(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = Hp(e, 0, r);
  return [n, i];
}
function nv(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var a = Ul(e, 0, r);
  return [n, i, a];
}
function iv(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var i = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [i2[i], Vl[i], n];
}
function av(e, t, r) {
  var n = e[e.l++],
    i = e.read_shift(1),
    a = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : sv(e);
  return [i, (a[0] === 0 ? Vl : n2)[a[1]]];
}
function sv(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function fv(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function ov(e, t, r) {
  if ((e.l++, r && r.biff == 12)) return [e.read_shift(4, 'i'), 0];
  var n = e.read_shift(2),
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function lv(e) {
  return e.l++, vi[e.read_shift(1)];
}
function cv(e) {
  return e.l++, e.read_shift(2);
}
function uv(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function hv(e) {
  return e.l++, Dn(e);
}
function dv(e, t, r) {
  return e.l++, wl(e, t - 1, r);
}
function xv(e, t) {
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
      (r[1] = nx(e, 1) ? 'TRUE' : 'FALSE'), t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (r[1] = vi[e[e.l]]), (e.l += t == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Dn(e);
      break;
    case 2:
      r[1] = fx(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error('Bad SerAr: ' + r[0]);
  }
  return r;
}
function pv(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), i = [], a = 0; a != n; ++a)
    i.push((r.biff == 12 ? nn : cx)(e));
  return i;
}
function vv(e, t, r) {
  var n = 0,
    i = 0;
  r.biff == 12
    ? ((n = e.read_shift(4)), (i = e.read_shift(4)))
    : ((i = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
    r.biff >= 2 && r.biff < 8 && (--n, --i == 0 && (i = 256));
  for (var a = 0, s = []; a != n && (s[a] = []); ++a)
    for (var f = 0; f != i; ++f) s[a][f] = xv(e, r.biff);
  return s;
}
function mv(e, t, r) {
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
function _v(e, t, r) {
  if (r.biff == 5) return gv(e);
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(2),
    a = e.read_shift(4);
  return [n, i, a];
}
function gv(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2, 'i');
  e.l += 8;
  var n = e.read_shift(2);
  return (e.l += 12), [t, r, n];
}
function Ev(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function Tv(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3,
    i = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, i];
}
function wv(e, t, r) {
  var n = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Sv(e, t, r) {
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
var Av = ur,
  yv = ur,
  Fv = ur;
function mi(e, t, r) {
  return (e.l += 2), [Up(e)];
}
function Zs(e) {
  return (e.l += 6), [];
}
var Cv = mi,
  Ov = Zs,
  Rv = Zs,
  Dv = mi;
function Wl(e) {
  return (e.l += 2), [El(e), e.read_shift(2) & 1];
}
var Nv = mi,
  kv = Wl,
  Iv = Zs,
  Pv = mi,
  Lv = mi,
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
function Bv(e) {
  e.l += 2;
  var t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(4),
    i = e.read_shift(2),
    a = e.read_shift(2),
    s = bv[(r >> 2) & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: n, c: i, C: a };
}
function Mv(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function Uv(e, t, r) {
  return (e.l += 5), (e.l += 2), (e.l += r.biff == 2 ? 1 : 4), ['PTGSHEET'];
}
function Hv(e, t, r) {
  return (e.l += r.biff == 2 ? 4 : 5), ['PTGENDSHEET'];
}
function Wv(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function zv(e) {
  var t = (e.read_shift(1) >>> 5) & 3,
    r = e.read_shift(2);
  return [t, r];
}
function Vv(e) {
  return (e.l += 4), [0, 0];
}
var _f = {
    1: { n: 'PtgExp', f: ov },
    2: { n: 'PtgTbl', f: Fv },
    3: { n: 'PtgAdd', f: Je },
    4: { n: 'PtgSub', f: Je },
    5: { n: 'PtgMul', f: Je },
    6: { n: 'PtgDiv', f: Je },
    7: { n: 'PtgPower', f: Je },
    8: { n: 'PtgConcat', f: Je },
    9: { n: 'PtgLt', f: Je },
    10: { n: 'PtgLe', f: Je },
    11: { n: 'PtgEq', f: Je },
    12: { n: 'PtgGe', f: Je },
    13: { n: 'PtgGt', f: Je },
    14: { n: 'PtgNe', f: Je },
    15: { n: 'PtgIsect', f: Je },
    16: { n: 'PtgUnion', f: Je },
    17: { n: 'PtgRange', f: Je },
    18: { n: 'PtgUplus', f: Je },
    19: { n: 'PtgUminus', f: Je },
    20: { n: 'PtgPercent', f: Je },
    21: { n: 'PtgParen', f: Je },
    22: { n: 'PtgMissArg', f: Je },
    23: { n: 'PtgStr', f: dv },
    26: { n: 'PtgSheet', f: Uv },
    27: { n: 'PtgEndSheet', f: Hv },
    28: { n: 'PtgErr', f: lv },
    29: { n: 'PtgBool', f: uv },
    30: { n: 'PtgInt', f: cv },
    31: { n: 'PtgNum', f: hv },
    32: { n: 'PtgArray', f: Kp },
    33: { n: 'PtgFunc', f: iv },
    34: { n: 'PtgFuncVar', f: av },
    35: { n: 'PtgName', f: mv },
    36: { n: 'PtgRef', f: tv },
    37: { n: 'PtgArea', f: zp },
    38: { n: 'PtgMemArea', f: Ev },
    39: { n: 'PtgMemErr', f: Av },
    40: { n: 'PtgMemNoMem', f: yv },
    41: { n: 'PtgMemFunc', f: Tv },
    42: { n: 'PtgRefErr', f: wv },
    43: { n: 'PtgAreaErr', f: Gp },
    44: { n: 'PtgRefN', f: rv },
    45: { n: 'PtgAreaN', f: Xp },
    46: { n: 'PtgMemAreaN', f: Wv },
    47: { n: 'PtgMemNoMemN', f: zv },
    57: { n: 'PtgNameX', f: _v },
    58: { n: 'PtgRef3d', f: nv },
    59: { n: 'PtgArea3d', f: Vp },
    60: { n: 'PtgRefErr3d', f: Sv },
    61: { n: 'PtgAreaErr3d', f: jp },
    255: {},
  },
  Gv = {
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
    1: { n: 'PtgElfLel', f: Wl },
    2: { n: 'PtgElfRw', f: Pv },
    3: { n: 'PtgElfCol', f: Cv },
    6: { n: 'PtgElfRwV', f: Lv },
    7: { n: 'PtgElfColV', f: Dv },
    10: { n: 'PtgElfRadical', f: Nv },
    11: { n: 'PtgElfRadicalS', f: Iv },
    13: { n: 'PtgElfColS', f: Ov },
    15: { n: 'PtgElfColSV', f: Rv },
    16: { n: 'PtgElfRadicalLel', f: kv },
    25: { n: 'PtgList', f: Bv },
    29: { n: 'PtgSxName', f: Mv },
    255: {},
  },
  Xv = {
    0: { n: 'PtgAttrNoop', f: Vv },
    1: { n: 'PtgAttrSemi', f: Zp },
    2: { n: 'PtgAttrIf', f: Yp },
    4: { n: 'PtgAttrChoose', f: qp },
    8: { n: 'PtgAttrGoto', f: $p },
    16: { n: 'PtgAttrSum', f: fv },
    32: { n: 'PtgAttrBaxcel', f: mf },
    33: { n: 'PtgAttrBaxcel', f: mf },
    64: { n: 'PtgAttrSpace', f: Qp },
    65: { n: 'PtgAttrSpaceSemi', f: ev },
    128: { n: 'PtgAttrIfError', f: Jp },
    255: {},
  };
function Kv(e, t, r, n) {
  if (n.biff < 8) return ur(e, t);
  for (var i = e.l + t, a = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case 'PtgArray':
        (r[s][1] = vv(e, 0, n)), a.push(r[s][1]);
        break;
      case 'PtgMemArea':
        (r[s][2] = pv(e, r[s][1], n)), a.push(r[s][2]);
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
  return (t = i - e.l), t !== 0 && a.push(ur(e, t)), a;
}
function qv(e, t, r) {
  for (var n = e.l + t, i, a, s = []; n != e.l; )
    (t = n - e.l),
      (a = e[e.l]),
      (i = _f[a] || _f[Gv[a]]),
      (a === 24 || a === 25) && (i = (a === 24 ? jv : Xv)[e[e.l + 1]]),
      !i || !i.f ? ur(e, t) : s.push([i.n, i.f(e, t, r)]);
  return s;
}
function $v(e) {
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
var Yv = {
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
function Jv(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error('empty sheet name');
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function zl(e, t, r) {
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
function gf(e, t, r) {
  var n = zl(e, t, r);
  return n == '#REF' ? n : Jv(n, r);
}
function Tn(e, t, r, n, i) {
  var a = (i && i.biff) || 8,
    s = { s: { c: 0, r: 0 } },
    f = [],
    l,
    o,
    c,
    h = 0,
    u = 0,
    x,
    v = '';
  if (!e[0] || !e[0][0]) return '';
  for (var d = -1, m = '', S = 0, y = e[0].length; S < y; ++S) {
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
        if (((l = f.pop()), (o = f.pop()), d >= 0)) {
          switch (e[0][d][1][0]) {
            case 0:
              m = Xe(' ', e[0][d][1][1]);
              break;
            case 1:
              m = Xe('\r', e[0][d][1][1]);
              break;
            default:
              if (((m = ''), i.WTF))
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0]);
          }
          (o = o + m), (d = -1);
        }
        f.push(o + Yv[F[0]] + l);
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
        (c = $n(F[1][1], s, i)), f.push(Yn(c, a));
        break;
      case 'PtgRefN':
        (c = r ? $n(F[1][1], r, i) : F[1][1]), f.push(Yn(c, a));
        break;
      case 'PtgRef3d':
        (h = F[1][1]),
          (c = $n(F[1][2], s, i)),
          (v = gf(n, h, i)),
          f.push(v + '!' + Yn(c, a));
        break;
      case 'PtgFunc':
      case 'PtgFuncVar':
        var k = F[1][0],
          z = F[1][1];
        k || (k = 0), (k &= 127);
        var J = k == 0 ? [] : f.slice(-k);
        (f.length -= k),
          z === 'User' && (z = J.shift()),
          f.push(z + '(' + J.join(',') + ')');
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
        (x = rf(F[1][1], r ? { s: r } : s, i)), f.push(Ka(x, i));
        break;
      case 'PtgArea':
        (x = rf(F[1][1], s, i)), f.push(Ka(x, i));
        break;
      case 'PtgArea3d':
        (h = F[1][1]),
          (x = F[1][2]),
          (v = gf(n, h, i)),
          f.push(v + '!' + Ka(x, i));
        break;
      case 'PtgAttrSum':
        f.push('SUM(' + f.pop() + ')');
        break;
      case 'PtgAttrBaxcel':
      case 'PtgAttrSemi':
        break;
      case 'PtgName':
        u = F[1][2];
        var O = (n.names || [])[u - 1] || (n[0] || [])[u],
          H = O ? O.Name : 'SH33TJSNAME' + String(u);
        H && H.slice(0, 6) == '_xlfn.' && !i.xlfn && (H = H.slice(6)),
          f.push(H);
        break;
      case 'PtgNameX':
        var I = F[1][1];
        u = F[1][2];
        var V;
        if (i.biff <= 5) I < 0 && (I = -I), n[I] && (V = n[I][u]);
        else {
          var X = '';
          if (
            (((n[I] || [])[0] || [])[0] == 14849 ||
              (((n[I] || [])[0] || [])[0] == 1025
                ? n[I][u] &&
                  n[I][u].itab > 0 &&
                  (X = n.SheetNames[n[I][u].itab - 1] + '!')
                : (X = n.SheetNames[u - 1] + '!')),
            n[I] && n[I][u])
          )
            X += n[I][u].Name;
          else if (n[0] && n[0][u]) X += n[0][u].Name;
          else {
            var K = (zl(n, I, i) || '').split(';;');
            K[u - 1] ? (X = K[u - 1]) : (X += 'SH33TJSERRX');
          }
          f.push(X);
          break;
        }
        V || (V = { Name: 'SH33TJSERRY' }), f.push(V.Name);
        break;
      case 'PtgParen':
        var ne = '(',
          Te = ')';
        if (d >= 0) {
          switch (((m = ''), e[0][d][1][0])) {
            case 2:
              ne = Xe(' ', e[0][d][1][1]) + ne;
              break;
            case 3:
              ne = Xe('\r', e[0][d][1][1]) + ne;
              break;
            case 4:
              Te = Xe(' ', e[0][d][1][1]) + Te;
              break;
            case 5:
              Te = Xe('\r', e[0][d][1][1]) + Te;
              break;
            default:
              if (i.WTF)
                throw new Error('Unexpected PtgAttrSpaceType ' + e[0][d][1][0]);
          }
          d = -1;
        }
        f.push(ne + f.pop() + Te);
        break;
      case 'PtgRefErr':
        f.push('#REF!');
        break;
      case 'PtgRefErr3d':
        f.push('#REF!');
        break;
      case 'PtgExp':
        c = { c: F[1][1], r: F[1][0] };
        var xe = { c: r.c, r: r.r };
        if (n.sharedf[Ne(c)]) {
          var Ge = n.sharedf[Ne(c)];
          f.push(Tn(Ge, s, xe, n, i));
        } else {
          var Le = !1;
          for (l = 0; l != n.arrayf.length; ++l)
            if (
              ((o = n.arrayf[l]),
              !(c.c < o[0].s.c || c.c > o[0].e.c) &&
                !(c.r < o[0].s.r || c.r > o[0].e.r))
            ) {
              f.push(Tn(o[1], s, xe, n, i)), (Le = !0);
              break;
            }
          Le || f.push(F[1]);
        }
        break;
      case 'PtgArray':
        f.push('{' + $v(F[1]) + '}');
        break;
      case 'PtgMemArea':
        break;
      case 'PtgAttrSpace':
      case 'PtgAttrSpaceSemi':
        d = S;
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
    var ot = ['PtgAttrSpace', 'PtgAttrSpaceSemi', 'PtgAttrGoto'];
    if (i.biff != 3 && d >= 0 && ot.indexOf(e[0][S][0]) == -1) {
      F = e[0][d];
      var We = !0;
      switch (F[1][0]) {
        case 4:
          We = !1;
        case 0:
          m = Xe(' ', F[1][1]);
          break;
        case 5:
          We = !1;
        case 1:
          m = Xe('\r', F[1][1]);
          break;
        default:
          if (((m = ''), i.WTF))
            throw new Error('Unexpected PtgAttrSpaceType ' + F[1][0]);
      }
      f.push((We ? m : '') + f.pop() + (We ? '' : m)), (d = -1);
    }
  }
  if (f.length > 1 && i.WTF) throw new Error('bad formula stack');
  return f[0];
}
function Zv(e) {
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
  } else if (typeof e == 'number') return Yr(e);
  return Yr(0);
}
function Qv(e, t, r, n, i) {
  var a = Jr(t, r, i),
    s = Zv(e.v),
    f = U(6),
    l = 33;
  f.write_shift(2, l), f.write_shift(4, 0);
  for (var o = U(e.bf.length), c = 0; c < e.bf.length; ++c) o[c] = e.bf[c];
  var h = ut([a, s, f, o]);
  return h;
}
function Oa(e, t, r) {
  var n = e.read_shift(4),
    i = qv(e, n, r),
    a = e.read_shift(4),
    s = a > 0 ? Kv(e, a, i, r) : null;
  return [i, s];
}
var e2 = Oa,
  Ra = Oa,
  t2 = Oa,
  r2 = Oa,
  n2 = {
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
  Vl = {
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
  i2 = {
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
function a2(e) {
  var t = 'of:=' + e.replace(Ys, '$1[.$2$3$4$5]').replace(/\]:\[/g, ':');
  return t.replace(/;/g, '|').replace(/,/g, ';');
}
function s2(e) {
  return e.replace(/\./, '!');
}
var Jn = typeof Map < 'u';
function Qs(e, t, r) {
  var n = 0,
    i = e.length;
  if (r) {
    if (Jn ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var a = Jn ? r.get(t) : r[t]; n < a.length; ++n)
        if (e[a[n]].t === t) return e.Count++, a[n];
    }
  } else for (; n < i; ++n) if (e[n].t === t) return e.Count++, n;
  return (
    (e[i] = { t }),
    e.Count++,
    e.Unique++,
    r &&
      (Jn
        ? (r.has(t) || r.set(t, []), r.get(t).push(i))
        : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []),
          r[t].push(i))),
    i
  );
}
function Da(e, t) {
  var r = { min: e + 1, max: e + 1 },
    n = -1;
  return (
    t.MDW && (gr = t.MDW),
    t.width != null
      ? (r.customWidth = 1)
      : t.wpx != null
        ? (n = oa(t.wpx))
        : t.wch != null && (n = t.wch),
    n > -1
      ? ((r.width = ps(n)), (r.customWidth = 1))
      : t.width != null && (r.width = t.width),
    t.hidden && (r.hidden = !0),
    t.level != null && (r.outlineLevel = r.level = t.level),
    r
  );
}
function Gl(e, t) {
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
function br(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : 'General'],
    i = 60,
    a = e.length;
  if (n == null && r.ssf) {
    for (; i < 392; ++i)
      if (r.ssf[i] == null) {
        Uo(t.z, i), (r.ssf[i] = t.z), (r.revssf[t.z] = n = i);
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
function f2(e, t, r) {
  if (e && e['!ref']) {
    var n = He(e['!ref']);
    if (n.e.c < n.s.c || n.e.r < n.s.r)
      throw new Error('Bad range (' + r + '): ' + e['!ref']);
  }
}
function o2(e) {
  if (e.length === 0) return '';
  for (
    var t = '<mergeCells count="' + e.length + '">', r = 0;
    r != e.length;
    ++r
  )
    t += '<mergeCell ref="' + Ze(e[r]) + '"/>';
  return t + '</mergeCells>';
}
function l2(e, t, r, n, i) {
  var a = !1,
    s = {},
    f = null;
  if (n.bookType !== 'xlsx' && t.vbaraw) {
    var l = t.SheetNames[r];
    try {
      t.Workbook && (l = t.Workbook.Sheets[r].CodeName || l);
    } catch {}
    (a = !0), (s.codeName = ai(De(l)));
  }
  if (e && e['!outline']) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e['!outline'].above && (o.summaryBelow = 0),
      e['!outline'].left && (o.summaryRight = 0),
      (f = (f || '') + ee('outlinePr', null, o));
  }
  (!a && !f) || (i[i.length] = ee('sheetPr', f, s));
}
var c2 = ['objects', 'scenarios', 'selectLockedCells', 'selectUnlockedCells'],
  u2 = [
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
function h2(e) {
  var t = { sheet: 1 };
  return (
    c2.forEach(function (r) {
      e[r] != null && e[r] && (t[r] = '1');
    }),
    u2.forEach(function (r) {
      e[r] != null && !e[r] && (t[r] = '0');
    }),
    e.password && (t.password = Cl(e.password).toString(16).toUpperCase()),
    ee('sheetProtection', null, t)
  );
}
function d2(e) {
  return Gl(e), ee('pageMargins', null, e);
}
function x2(e, t) {
  for (var r = ['<cols>'], n, i = 0; i != t.length; ++i)
    (n = t[i]) && (r[r.length] = ee('col', null, Da(i, n)));
  return (r[r.length] = '</cols>'), r.join('');
}
function p2(e, t, r, n) {
  var i = typeof e.ref == 'string' ? e.ref : Ze(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }),
    r.Workbook.Names || (r.Workbook.Names = []);
  var a = r.Workbook.Names,
    s = Ut(i);
  s.s.r == s.e.r && ((s.e.r = Ut(t['!ref']).e.r), (i = Ze(s)));
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
    ee('autoFilter', null, { ref: i })
  );
}
function v2(e, t, r, n) {
  var i = { workbookViewId: '0' };
  return (
    (((n || {}).Workbook || {}).Views || [])[0] &&
      (i.rightToLeft = n.Workbook.Views[0].RTL ? '1' : '0'),
    ee('sheetViews', ee('sheetView', null, i), {})
  );
}
function m2(e, t, r, n) {
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
        i = vi[e.v];
        break;
      case 'd':
        n && n.cellDates
          ? (i = At(e.v, -1).toISOString())
          : ((e = Nt(e)), (e.t = 'n'), (i = '' + (e.v = Dt(At(e.v))))),
          typeof e.z > 'u' && (e.z = qe[14]);
        break;
      default:
        i = e.v;
        break;
    }
  var f = ht('v', De(i)),
    l = { r: t },
    o = br(n.cellXfs, e, n);
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
        (f = ht('v', '' + Qs(n.Strings, e.v, n.revStrings))), (l.t = 's');
        break;
      }
      l.t = 'str';
      break;
  }
  if ((e.t != a && ((e.t = a), (e.v = s)), typeof e.f == 'string' && e.f)) {
    var c =
      e.F && e.F.slice(0, t.length) == t ? { t: 'array', ref: e.F } : null;
    f = ee('f', De(e.f), c) + (e.v != null ? f : '');
  }
  return e.l && r['!links'].push([t, e.l]), e.D && (l.cm = 1), ee('c', f, l);
}
function _2(e, t, r, n) {
  var i = [],
    a = [],
    s = He(e['!ref']),
    f = '',
    l,
    o = '',
    c = [],
    h = 0,
    u = 0,
    x = e['!rows'],
    v = Array.isArray(e),
    d = { r: o },
    m,
    S = -1;
  for (u = s.s.c; u <= s.e.c; ++u) c[u] = mt(u);
  for (h = s.s.r; h <= s.e.r; ++h) {
    for (a = [], o = dt(h), u = s.s.c; u <= s.e.c; ++u) {
      l = c[u] + o;
      var y = v ? (e[h] || [])[u] : e[l];
      y !== void 0 && (f = m2(y, l, e, t)) != null && a.push(f);
    }
    (a.length > 0 || (x && x[h])) &&
      ((d = { r: o }),
      x &&
        x[h] &&
        ((m = x[h]),
        m.hidden && (d.hidden = 1),
        (S = -1),
        m.hpx ? (S = la(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((d.ht = S), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level)),
      (i[i.length] = ee('row', a.join(''), d)));
  }
  if (x)
    for (; h < x.length; ++h)
      x &&
        x[h] &&
        ((d = { r: h + 1 }),
        (m = x[h]),
        m.hidden && (d.hidden = 1),
        (S = -1),
        m.hpx ? (S = la(m.hpx)) : m.hpt && (S = m.hpt),
        S > -1 && ((d.ht = S), (d.customHeight = 1)),
        m.level && (d.outlineLevel = m.level),
        (i[i.length] = ee('row', '', d)));
  return i.join('');
}
function jl(e, t, r, n) {
  var i = [Qe, ee('worksheet', null, { xmlns: Cn[0], 'xmlns:r': at.r })],
    a = r.SheetNames[e],
    s = 0,
    f = '',
    l = r.Sheets[a];
  l == null && (l = {});
  var o = l['!ref'] || 'A1',
    c = He(o);
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error('Range ' + o + ' exceeds format limit A1:XFD1048576');
    (c.e.c = Math.min(c.e.c, 16383)),
      (c.e.r = Math.min(c.e.c, 1048575)),
      (o = Ze(c));
  }
  n || (n = {}), (l['!comments'] = []);
  var h = [];
  l2(l, r, e, t, i),
    (i[i.length] = ee('dimension', null, { ref: o })),
    (i[i.length] = v2(l, t, e, r)),
    t.sheetFormat &&
      (i[i.length] = ee('sheetFormatPr', null, {
        defaultRowHeight: t.sheetFormat.defaultRowHeight || '16',
        baseColWidth: t.sheetFormat.baseColWidth || '10',
        outlineLevelRow: t.sheetFormat.outlineLevelRow || '7',
      })),
    l['!cols'] != null &&
      l['!cols'].length > 0 &&
      (i[i.length] = x2(l, l['!cols'])),
    (i[(s = i.length)] = '<sheetData/>'),
    (l['!links'] = []),
    l['!ref'] != null && ((f = _2(l, t)), f.length > 0 && (i[i.length] = f)),
    i.length > s + 1 &&
      ((i[i.length] = '</sheetData>'), (i[s] = i[s].replace('/>', '>'))),
    l['!protect'] && (i[i.length] = h2(l['!protect'])),
    l['!autofilter'] != null && (i[i.length] = p2(l['!autofilter'], l, r, e)),
    l['!merges'] != null &&
      l['!merges'].length > 0 &&
      (i[i.length] = o2(l['!merges']));
  var u = -1,
    x,
    v = -1;
  return (
    l['!links'].length > 0 &&
      ((i[i.length] = '<hyperlinks>'),
      l['!links'].forEach(function (d) {
        d[1].Target &&
          ((x = { ref: d[0] }),
          d[1].Target.charAt(0) != '#' &&
            ((v = Re(n, -1, De(d[1].Target).replace(/#.*$/, ''), Ae.HLINK)),
            (x['r:id'] = 'rId' + v)),
          (u = d[1].Target.indexOf('#')) > -1 &&
            (x.location = De(d[1].Target.slice(u + 1))),
          d[1].Tooltip && (x.tooltip = De(d[1].Tooltip)),
          (i[i.length] = ee('hyperlink', null, x)));
      }),
      (i[i.length] = '</hyperlinks>')),
    delete l['!links'],
    l['!margins'] != null && (i[i.length] = d2(l['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) &&
      (i[i.length] = ht(
        'ignoredErrors',
        ee('ignoredError', null, { numberStoredAsText: 1, sqref: o }),
      )),
    h.length > 0 &&
      ((v = Re(n, -1, '../drawings/drawing' + (e + 1) + '.xml', Ae.DRAW)),
      (i[i.length] = ee('drawing', null, { 'r:id': 'rId' + v })),
      (l['!drawing'] = h)),
    l['!comments'].length > 0 &&
      ((v = Re(n, -1, '../drawings/vmlDrawing' + (e + 1) + '.vml', Ae.VML)),
      (i[i.length] = ee('legacyDrawing', null, { 'r:id': 'rId' + v })),
      (l['!legacy'] = v)),
    i.length > 1 &&
      ((i[i.length] = '</worksheet>'), (i[1] = i[1].replace('/>', '>'))),
    i.join('')
  );
}
function g2(e, t) {
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
function E2(e, t, r) {
  var n = U(145),
    i = (r['!rows'] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  i.hpx ? (a = la(i.hpx) * 20) : i.hpt && (a = i.hpt * 20),
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
      for (var h = -1, u = -1, x = c << 10; x < (c + 1) << 10; ++x) {
        o.c = x;
        var v = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[Ne(o)];
        v && (h < 0 && (h = x), (u = x));
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
function T2(e, t, r, n) {
  var i = E2(n, r, t);
  (i.length > 17 || (t['!rows'] || [])[n]) && G(e, 0, i);
}
var w2 = nn,
  S2 = Rn;
function A2() {}
function y2(e, t) {
  var r = {},
    n = e[e.l];
  return (
    ++e.l,
    (r.above = !(n & 64)),
    (r.left = !(n & 128)),
    (e.l += 18),
    (r.name = Ld(e)),
    r
  );
}
function F2(e, t, r) {
  r == null && (r = U(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var i = 1; i < 3; ++i) r.write_shift(1, 0);
  return (
    aa({ auto: 1 }, r),
    r.write_shift(-4, -1),
    r.write_shift(-4, -1),
    sl(e, r),
    r.slice(0, r.l)
  );
}
function C2(e) {
  var t = qt(e);
  return [t];
}
function O2(e, t, r) {
  return r == null && (r = U(8)), en(t, r);
}
function R2(e) {
  var t = tn(e);
  return [t];
}
function D2(e, t, r) {
  return r == null && (r = U(4)), rn(t, r);
}
function N2(e) {
  var t = qt(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function k2(e, t, r) {
  return r == null && (r = U(9)), en(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function I2(e) {
  var t = tn(e),
    r = e.read_shift(1);
  return [t, r, 'b'];
}
function P2(e, t, r) {
  return r == null && (r = U(5)), rn(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function L2(e) {
  var t = qt(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function b2(e, t, r) {
  return r == null && (r = U(9)), en(t, r), r.write_shift(1, e.v), r;
}
function B2(e) {
  var t = tn(e),
    r = e.read_shift(1);
  return [t, r, 'e'];
}
function M2(e, t, r) {
  return (
    r == null && (r = U(8)),
    rn(t, r),
    r.write_shift(1, e.v),
    r.write_shift(2, 0),
    r.write_shift(1, 0),
    r
  );
}
function U2(e) {
  var t = qt(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function H2(e, t, r) {
  return r == null && (r = U(12)), en(t, r), r.write_shift(4, t.v), r;
}
function W2(e) {
  var t = tn(e),
    r = e.read_shift(4);
  return [t, r, 's'];
}
function z2(e, t, r) {
  return r == null && (r = U(8)), rn(t, r), r.write_shift(4, t.v), r;
}
function V2(e) {
  var t = qt(e),
    r = Dn(e);
  return [t, r, 'n'];
}
function G2(e, t, r) {
  return r == null && (r = U(16)), en(t, r), Yr(e.v, r), r;
}
function j2(e) {
  var t = tn(e),
    r = Dn(e);
  return [t, r, 'n'];
}
function X2(e, t, r) {
  return r == null && (r = U(12)), rn(t, r), Yr(e.v, r), r;
}
function K2(e) {
  var t = qt(e),
    r = fl(e);
  return [t, r, 'n'];
}
function q2(e, t, r) {
  return r == null && (r = U(12)), en(t, r), ol(e.v, r), r;
}
function $2(e) {
  var t = tn(e),
    r = fl(e);
  return [t, r, 'n'];
}
function Y2(e, t, r) {
  return r == null && (r = U(8)), rn(t, r), ol(e.v, r), r;
}
function J2(e) {
  var t = qt(e),
    r = js(e);
  return [t, r, 'is'];
}
function Z2(e) {
  var t = qt(e),
    r = _t(e);
  return [t, r, 'str'];
}
function Q2(e, t, r) {
  return (
    r == null && (r = U(12 + 4 * e.v.length)),
    en(t, r),
    ft(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function em(e) {
  var t = tn(e),
    r = _t(e);
  return [t, r, 'str'];
}
function tm(e, t, r) {
  return (
    r == null && (r = U(8 + 4 * e.v.length)),
    rn(t, r),
    ft(e.v, r),
    r.length > r.l ? r.slice(0, r.l) : r
  );
}
function rm(e, t, r) {
  var n = e.l + t,
    i = qt(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'b'];
  if (r.cellFormula) {
    e.l += 2;
    var f = Ra(e, n - e.l, r);
    s[3] = Tn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function nm(e, t, r) {
  var n = e.l + t,
    i = qt(e);
  i.r = r['!row'];
  var a = e.read_shift(1),
    s = [i, a, 'e'];
  if (r.cellFormula) {
    e.l += 2;
    var f = Ra(e, n - e.l, r);
    s[3] = Tn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function im(e, t, r) {
  var n = e.l + t,
    i = qt(e);
  i.r = r['!row'];
  var a = Dn(e),
    s = [i, a, 'n'];
  if (r.cellFormula) {
    e.l += 2;
    var f = Ra(e, n - e.l, r);
    s[3] = Tn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
function am(e, t, r) {
  var n = e.l + t,
    i = qt(e);
  i.r = r['!row'];
  var a = _t(e),
    s = [i, a, 'str'];
  if (r.cellFormula) {
    e.l += 2;
    var f = Ra(e, n - e.l, r);
    s[3] = Tn(f, null, i, r.supbooks, r);
  } else e.l = n;
  return s;
}
var sm = nn,
  fm = Rn;
function om(e, t) {
  return t == null && (t = U(4)), t.write_shift(4, e), t;
}
function lm(e, t) {
  var r = e.l + t,
    n = nn(e),
    i = Xs(e),
    a = _t(e),
    s = _t(e),
    f = _t(e);
  e.l = r;
  var l = { rfx: n, relId: i, loc: a, display: f };
  return s && (l.Tooltip = s), l;
}
function cm(e, t) {
  var r = U(50 + 4 * (e[1].Target.length + (e[1].Tooltip || '').length));
  Rn({ s: st(e[0]), e: st(e[0]) }, r), Ks('rId' + t, r);
  var n = e[1].Target.indexOf('#'),
    i = n == -1 ? '' : e[1].Target.slice(n + 1);
  return ft(i || '', r), ft(e[1].Tooltip || '', r), ft('', r), r.slice(0, r.l);
}
function um() {}
function hm(e, t, r) {
  var n = e.l + t,
    i = ll(e),
    a = e.read_shift(1),
    s = [i];
  if (((s[2] = a), r.cellFormula)) {
    var f = e2(e, n - e.l, r);
    s[1] = f;
  } else e.l = n;
  return s;
}
function dm(e, t, r) {
  var n = e.l + t,
    i = nn(e),
    a = [i];
  if (r.cellFormula) {
    var s = r2(e, n - e.l, r);
    (a[1] = s), (e.l = n);
  } else e.l = n;
  return a;
}
function xm(e, t, r) {
  r == null && (r = U(18));
  var n = Da(e, t);
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
var Xl = ['left', 'right', 'top', 'bottom', 'header', 'footer'];
function pm(e) {
  var t = {};
  return (
    Xl.forEach(function (r) {
      t[r] = Dn(e);
    }),
    t
  );
}
function vm(e, t) {
  return (
    t == null && (t = U(6 * 8)),
    Gl(e),
    Xl.forEach(function (r) {
      Yr(e[r], t);
    }),
    t
  );
}
function mm(e) {
  var t = e.read_shift(2);
  return (e.l += 28), { RTL: t & 32 };
}
function _m(e, t, r) {
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
function gm(e) {
  var t = U(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), Rn(e, t), t;
}
function Em(e, t) {
  return (
    t == null && (t = U(16 * 4 + 2)),
    t.write_shift(2, e.password ? Cl(e.password) : 0),
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
function Tm() {}
function wm() {}
function Sm(e, t, r, n, i, a, s) {
  if (t.v === void 0) return !1;
  var f = '';
  switch (t.t) {
    case 'b':
      f = t.v ? '1' : '0';
      break;
    case 'd':
      (t = Nt(t)), (t.z = t.z || qe[14]), (t.v = Dt(At(t.v))), (t.t = 'n');
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
    ((l.s = br(i.cellXfs, t, i)),
    t.l && a['!links'].push([Ne(l), t.l]),
    t.c && a['!comments'].push([Ne(l), t.c]),
    t.t)
  ) {
    case 's':
    case 'str':
      return (
        i.bookSST
          ? ((f = Qs(i.Strings, t.v, i.revStrings)),
            (l.t = 's'),
            (l.v = f),
            s ? G(e, 18, z2(t, l)) : G(e, 7, H2(t, l)))
          : ((l.t = 'str'), s ? G(e, 17, tm(t, l)) : G(e, 6, Q2(t, l))),
        !0
      );
    case 'n':
      return (
        t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3
          ? s
            ? G(e, 13, Y2(t, l))
            : G(e, 2, q2(t, l))
          : s
            ? G(e, 16, X2(t, l))
            : G(e, 5, G2(t, l)),
        !0
      );
    case 'b':
      return (l.t = 'b'), s ? G(e, 15, P2(t, l)) : G(e, 4, k2(t, l)), !0;
    case 'e':
      return (l.t = 'e'), s ? G(e, 14, M2(t, l)) : G(e, 3, b2(t, l)), !0;
  }
  return s ? G(e, 12, D2(t, l)) : G(e, 1, O2(t, l)), !0;
}
function Am(e, t, r, n) {
  var i = He(t['!ref'] || 'A1'),
    a,
    s = '',
    f = [];
  G(e, 145);
  var l = Array.isArray(t),
    o = i.e.r;
  t['!rows'] && (o = Math.max(i.e.r, t['!rows'].length - 1));
  for (var c = i.s.r; c <= o; ++c) {
    (s = dt(c)), T2(e, t, i, c);
    var h = !1;
    if (c <= i.e.r)
      for (var u = i.s.c; u <= i.e.c; ++u) {
        c === i.s.r && (f[u] = mt(u)), (a = f[u] + s);
        var x = l ? (t[c] || [])[u] : t[a];
        if (!x) {
          h = !1;
          continue;
        }
        h = Sm(e, x, c, u, n, t, h);
      }
  }
  G(e, 146);
}
function ym(e, t) {
  !t ||
    !t['!merges'] ||
    (G(e, 177, om(t['!merges'].length)),
    t['!merges'].forEach(function (r) {
      G(e, 176, fm(r));
    }),
    G(e, 178));
}
function Fm(e, t) {
  !t ||
    !t['!cols'] ||
    (G(e, 390),
    t['!cols'].forEach(function (r, n) {
      r && G(e, 60, xm(n, r));
    }),
    G(e, 391));
}
function Cm(e, t) {
  !t || !t['!ref'] || (G(e, 648), G(e, 649, gm(He(t['!ref']))), G(e, 650));
}
function Om(e, t, r) {
  t['!links'].forEach(function (n) {
    if (n[1].Target) {
      var i = Re(r, -1, n[1].Target.replace(/#.*$/, ''), Ae.HLINK);
      G(e, 494, cm(n, i));
    }
  }),
    delete t['!links'];
}
function Rm(e, t, r, n) {
  if (t['!comments'].length > 0) {
    var i = Re(n, -1, '../drawings/vmlDrawing' + (r + 1) + '.vml', Ae.VML);
    G(e, 551, Ks('rId' + i)), (t['!legacy'] = i);
  }
}
function Dm(e, t, r, n) {
  if (t['!autofilter']) {
    var i = t['!autofilter'],
      a = typeof i.ref == 'string' ? i.ref : Ze(i.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }),
      r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names,
      f = Ut(a);
    f.s.r == f.e.r && ((f.e.r = Ut(t['!ref']).e.r), (a = Ze(f)));
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
      G(e, 161, Rn(He(a))),
      G(e, 162);
  }
}
function Nm(e, t, r) {
  G(e, 133), G(e, 137, _m(t, r)), G(e, 138), G(e, 134);
}
function km(e, t) {
  t['!protect'] && G(e, 535, Em(t['!protect']));
}
function Im(e, t, r, n) {
  var i = Rt(),
    a = r.SheetNames[e],
    s = r.Sheets[a] || {},
    f = a;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {}
  var l = He(s['!ref'] || 'A1');
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
    G(i, 129),
    (r.vbaraw || s['!outline']) && G(i, 147, F2(f, s['!outline'])),
    G(i, 148, S2(l)),
    Nm(i, s, r.Workbook),
    Fm(i, s),
    Am(i, s, e, t),
    km(i, s),
    Dm(i, s, r, e),
    ym(i, s),
    Om(i, s, n),
    s['!margins'] && G(i, 476, vm(s['!margins'])),
    (!t || t.ignoreEC || t.ignoreEC == null) && Cm(i, s),
    Rm(i, s, e, n),
    G(i, 130),
    i.end()
  );
}
function Pm(e, t) {
  e.l += 10;
  var r = _t(e);
  return { name: r };
}
var Lm = [
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
function bm(e) {
  return !e.Workbook || !e.Workbook.WBProps
    ? 'false'
    : dd(e.Workbook.WBProps.date1904)
      ? 'true'
      : 'false';
}
var Bm = '][*?/\\'.split('');
function Kl(e, t) {
  if (e.length > 31) throw new Error('Sheet names cannot exceed 31 chars');
  var r = !0;
  return (
    Bm.forEach(function (n) {
      if (e.indexOf(n) != -1)
        throw new Error('Sheet name cannot contain : \\ / ? * [ ]');
    }),
    r
  );
}
function Mm(e, t, r) {
  e.forEach(function (n, i) {
    Kl(n);
    for (var a = 0; a < i; ++a)
      if (n == e[a]) throw new Error('Duplicate Sheet Name: ' + n);
    if (r) {
      var s = (t && t[i] && t[i].CodeName) || n;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error('Bad Code Name: Worksheet' + s);
    }
  });
}
function Um(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error('Invalid Workbook');
  if (!e.SheetNames.length) throw new Error('Workbook is empty');
  var t = (e.Workbook && e.Workbook.Sheets) || [];
  Mm(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    f2(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function ql(e) {
  var t = [Qe];
  t[t.length] = ee('workbook', null, { xmlns: Cn[0], 'xmlns:r': at.r });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0,
    n = { codeName: 'ThisWorkbook' };
  e.Workbook &&
    e.Workbook.WBProps &&
    (Lm.forEach(function (f) {
      e.Workbook.WBProps[f[0]] != null &&
        e.Workbook.WBProps[f[0]] != f[1] &&
        (n[f[0]] = e.Workbook.WBProps[f[0]]);
    }),
    e.Workbook.WBProps.CodeName &&
      ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
    (t[t.length] = ee('workbookPr', null, n));
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
    var s = { name: De(e.SheetNames[a].slice(0, 31)) };
    if (((s.sheetId = '' + (a + 1)), (s['r:id'] = 'rId' + (a + 1)), i[a]))
      switch (i[a].Hidden) {
        case 1:
          s.state = 'hidden';
          break;
        case 2:
          s.state = 'veryHidden';
          break;
      }
    t[t.length] = ee('sheet', null, s);
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
            f.Ref && (t[t.length] = ee('definedName', De(f.Ref), l));
        }),
      (t[t.length] = '</definedNames>')),
    t.length > 2 &&
      ((t[t.length] = '</workbook>'), (t[1] = t[1].replace('/>', '>'))),
    t.join('')
  );
}
function Hm(e, t) {
  var r = {};
  return (
    (r.Hidden = e.read_shift(4)),
    (r.iTabID = e.read_shift(4)),
    (r.strRelID = xs(e)),
    (r.name = _t(e)),
    r
  );
}
function Wm(e, t) {
  return (
    t || (t = U(127)),
    t.write_shift(4, e.Hidden),
    t.write_shift(4, e.iTabID),
    Ks(e.strRelID, t),
    ft(e.name.slice(0, 31), t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function zm(e, t) {
  var r = {},
    n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var i = t > 8 ? _t(e) : '';
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
function Vm(e, t) {
  t || (t = U(72));
  var r = 0;
  return (
    e && e.filterPrivacy && (r |= 8),
    t.write_shift(4, r),
    t.write_shift(4, 0),
    sl((e && e.CodeName) || 'ThisWorkbook', t),
    t.slice(0, t.l)
  );
}
function Gm(e, t, r) {
  var n = e.l + t;
  (e.l += 4), (e.l += 1);
  var i = e.read_shift(4),
    a = bd(e),
    s = t2(e, 0, r),
    f = Xs(e);
  e.l = n;
  var l = { Name: a, Ptg: s };
  return i < 268435455 && (l.Sheet = i), f && (l.Comment = f), l;
}
function jm(e, t) {
  G(e, 143);
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
    G(e, 156, Wm(i));
  }
  G(e, 144);
}
function Xm(e, t) {
  t || (t = U(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return (
    ft('SheetJS', t),
    ft(Ji.version, t),
    ft(Ji.version, t),
    ft('7262', t),
    t.length > t.l ? t.slice(0, t.l) : t
  );
}
function Km(e, t) {
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
function qm(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, i = -1, a = -1; n < r.length; ++n)
      !r[n] || (!r[n].Hidden && i == -1)
        ? (i = n)
        : r[n].Hidden == 1 && a == -1 && (a = n);
    a > i || (G(e, 135), G(e, 158, Km(i)), G(e, 136));
  }
}
function $m(e, t) {
  var r = Rt();
  return (
    G(r, 131),
    G(r, 128, Xm()),
    G(r, 153, Vm((e.Workbook && e.Workbook.WBProps) || null)),
    qm(r, e),
    jm(r, e),
    G(r, 132),
    r.end()
  );
}
function Ym(e, t, r) {
  return (t.slice(-4) === '.bin' ? $m : ql)(e);
}
function Jm(e, t, r, n, i) {
  return (t.slice(-4) === '.bin' ? Im : jl)(e, r, n, i);
}
function Zm(e, t, r) {
  return (t.slice(-4) === '.bin' ? vp : Dl)(e, r);
}
function Qm(e, t, r) {
  return (t.slice(-4) === '.bin' ? Vx : Fl)(e, r);
}
function e_(e, t, r) {
  return (t.slice(-4) === '.bin' ? kp : Ll)(e);
}
function t_(e) {
  return (e.slice(-4) === '.bin' ? Ap : Il)();
}
function r_(e, t) {
  var r = [];
  return (
    e.Props && r.push(Zd(e.Props, t)),
    e.Custprops && r.push(Qd(e.Props, e.Custprops)),
    r.join('')
  );
}
function n_() {
  return '';
}
function i_(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return (
    t.cellXfs.forEach(function (n, i) {
      var a = [];
      a.push(ee('NumberFormat', null, { 'ss:Format': De(qe[n.numFmtId]) }));
      var s = { 'ss:ID': 's' + (21 + i) };
      r.push(ee('Style', a.join(''), s));
    }),
    ee('Styles', r.join(''))
  );
}
function $l(e) {
  return ee('NamedRange', null, {
    'ss:Name': e.Name,
    'ss:RefersTo': '=' + Js(e.Ref, { r: 0, c: 0 }),
  });
}
function a_(e) {
  if (!((e || {}).Workbook || {}).Names) return '';
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var i = t[n];
    i.Sheet == null && (i.Name.match(/^_xlfn\./) || r.push($l(i)));
  }
  return ee('Names', r.join(''));
}
function s_(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return '';
  for (var i = n.Workbook.Names, a = [], s = 0; s < i.length; ++s) {
    var f = i[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || a.push($l(f)));
  }
  return a.join('');
}
function f_(e, t, r, n) {
  if (!e) return '';
  var i = [];
  if (
    (e['!margins'] &&
      (i.push('<PageSetup>'),
      e['!margins'].header &&
        i.push(ee('Header', null, { 'x:Margin': e['!margins'].header })),
      e['!margins'].footer &&
        i.push(ee('Footer', null, { 'x:Margin': e['!margins'].footer })),
      i.push(
        ee('PageMargins', null, {
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
        ee(
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
      (i.push(ht('ProtectContents', 'True')),
      e['!protect'].objects && i.push(ht('ProtectObjects', 'True')),
      e['!protect'].scenarios && i.push(ht('ProtectScenarios', 'True')),
      e['!protect'].selectLockedCells != null &&
      !e['!protect'].selectLockedCells
        ? i.push(ht('EnableSelection', 'NoSelection'))
        : e['!protect'].selectUnlockedCells != null &&
          !e['!protect'].selectUnlockedCells &&
          i.push(ht('EnableSelection', 'UnlockedCells')),
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
    i.length == 0 ? '' : ee('WorksheetOptions', i.join(''), { xmlns: bt.x })
  );
}
function o_(e) {
  return e
    .map(function (t) {
      var r = hd(t.t || ''),
        n = ee('ss:Data', r, { xmlns: 'http://www.w3.org/TR/REC-html40' });
      return ee('Comment', n, { 'ss:Author': t.a });
    })
    .join('');
}
function l_(e, t, r, n, i, a, s) {
  if (!e || (e.v == null && e.f == null)) return '';
  var f = {};
  if (
    (e.f && (f['ss:Formula'] = '=' + De(Js(e.f, s))),
    e.F && e.F.slice(0, t.length) == t)
  ) {
    var l = st(e.F.slice(t.length + 1));
    f['ss:ArrayRange'] =
      'RC:R' +
      (l.r == s.r ? '' : '[' + (l.r - s.r) + ']') +
      'C' +
      (l.c == s.c ? '' : '[' + (l.c - s.c) + ']');
  }
  if (
    (e.l &&
      e.l.Target &&
      ((f['ss:HRef'] = De(e.l.Target)),
      e.l.Tooltip && (f['x:HRefScreenTip'] = De(e.l.Tooltip))),
    r['!merges'])
  )
    for (var o = r['!merges'], c = 0; c != o.length; ++c)
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
      (h = 'Error'), (u = vi[e.v]);
      break;
    case 'd':
      (h = 'DateTime'),
        (u = new Date(e.v).toISOString()),
        e.z == null && (e.z = e.z || qe[14]);
      break;
    case 's':
      (h = 'String'), (u = ud(e.v || ''));
      break;
  }
  var x = br(n.cellXfs, e, n);
  (f['ss:StyleID'] = 's' + (21 + x)), (f['ss:Index'] = s.c + 1);
  var v = e.v != null ? u : '',
    d = e.t == 'z' ? '' : '<Data ss:Type="' + h + '">' + v + '</Data>';
  return (e.c || []).length > 0 && (d += o_(e.c)), ee('Cell', d, f);
}
function c_(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return (
    t &&
      (t.hpt && !t.hpx && (t.hpx = Rl(t.hpt)),
      t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'),
      t.hidden && (r += ' ss:Hidden="1"')),
    r + '>'
  );
}
function u_(e, t, r, n) {
  if (!e['!ref']) return '';
  var i = He(e['!ref']),
    a = e['!merges'] || [],
    s = 0,
    f = [];
  e['!cols'] &&
    e['!cols'].forEach(function (m, S) {
      $s(m);
      var y = !!m.width,
        F = Da(S, m),
        k = { 'ss:Index': S + 1 };
      y && (k['ss:Width'] = fa(F.width)),
        m.hidden && (k['ss:Hidden'] = '1'),
        f.push(ee('Column', null, k));
    });
  for (var l = Array.isArray(e), o = i.s.r; o <= i.e.r; ++o) {
    for (var c = [c_(o, (e['!rows'] || [])[o])], h = i.s.c; h <= i.e.c; ++h) {
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
          v = Ne(x),
          d = l ? (e[o] || [])[h] : e[v];
        c.push(l_(d, v, e, t, r, n, x));
      }
    }
    c.push('</Row>'), c.length > 2 && f.push(c.join(''));
  }
  return f.join('');
}
function h_(e, t, r) {
  var n = [],
    i = r.SheetNames[e],
    a = r.Sheets[i],
    s = a ? s_(a, t, e, r) : '';
  return (
    s.length > 0 && n.push('<Names>' + s + '</Names>'),
    (s = a ? u_(a, t, e, r) : ''),
    s.length > 0 && n.push('<Table>' + s + '</Table>'),
    n.push(f_(a, t, e, r)),
    n.join('')
  );
}
function d_(e, t) {
  t || (t = {}),
    e.SSF || (e.SSF = Nt(qe)),
    e.SSF &&
      (ya(),
      Aa(e.SSF),
      (t.revssf = Fa(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF),
      (t.cellXfs = []),
      br(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(r_(e, t)), r.push(n_()), r.push(''), r.push('');
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(ee('Worksheet', h_(n, t, e), { 'ss:Name': De(e.SheetNames[n]) }));
  return (
    (r[2] = i_(e, t)),
    (r[3] = a_(e)),
    Qe +
      ee('Workbook', r.join(''), {
        xmlns: bt.ss,
        'xmlns:o': bt.o,
        'xmlns:x': bt.x,
        'xmlns:ss': bt.ss,
        'xmlns:dt': bt.dt,
        'xmlns:html': bt.html,
      })
  );
}
var Ya = {
  SI: 'e0859ff2f94f6810ab9108002b27b3d9',
  DSI: '02d5cdd59c2e1b10939708002b2cf9ae',
  UDI: '05d5cdd59c2e1b10939708002b2cf9ae',
};
function x_(e, t) {
  var r = [],
    n = [],
    i = [],
    a = 0,
    s,
    f = j0(af, 'n'),
    l = j0(sf, 'n');
  if (e.Props)
    for (s = xt(e.Props), a = 0; a < s.length; ++a)
      (Object.prototype.hasOwnProperty.call(f, s[a])
        ? r
        : Object.prototype.hasOwnProperty.call(l, s[a])
          ? n
          : i
      ).push([s[a], e.Props[s[a]]]);
  if (e.Custprops)
    for (s = xt(e.Custprops), a = 0; a < s.length; ++a)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[a]) ||
        (Object.prototype.hasOwnProperty.call(f, s[a])
          ? r
          : Object.prototype.hasOwnProperty.call(l, s[a])
            ? n
            : i
        ).push([s[a], e.Custprops[s[a]]]);
  var o = [];
  for (a = 0; a < i.length; ++a)
    gl.indexOf(i[a][0]) > -1 ||
      vl.indexOf(i[a][0]) > -1 ||
      (i[a][1] != null && o.push(i[a]));
  n.length && Ie.utils.cfb_add(t, '/SummaryInformation', uf(n, Ya.SI, l, sf)),
    (r.length || o.length) &&
      Ie.utils.cfb_add(
        t,
        '/DocumentSummaryInformation',
        uf(r, Ya.DSI, f, af, o.length ? o : null, Ya.UDI),
      );
}
function p_(e, t) {
  var r = t || {},
    n = Ie.utils.cfb_new({ root: 'R' }),
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
    Ie.utils.cfb_add(n, i, Yl(e, r)),
    r.biff == 8 && (e.Props || e.Custprops) && x_(e, n),
    r.biff == 8 &&
      e.vbaraw &&
      Ip(
        n,
        Ie.read(e.vbaraw, {
          type: typeof e.vbaraw == 'string' ? 'binary' : 'buffer',
        }),
      ),
    n
  );
}
var v_ = {
  0: { f: g2 },
  1: { f: C2 },
  2: { f: K2 },
  3: { f: L2 },
  4: { f: N2 },
  5: { f: V2 },
  6: { f: Z2 },
  7: { f: U2 },
  8: { f: am },
  9: { f: im },
  10: { f: rm },
  11: { f: nm },
  12: { f: R2 },
  13: { f: $2 },
  14: { f: B2 },
  15: { f: I2 },
  16: { f: j2 },
  17: { f: em },
  18: { f: W2 },
  19: { f: js },
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
  39: { f: Gm },
  40: {},
  42: {},
  43: { f: Zx },
  44: { f: Yx },
  45: { f: tp },
  46: { f: np },
  47: { f: rp },
  48: {},
  49: { f: Rd },
  50: {},
  51: { f: gp },
  52: { T: 1 },
  53: { T: -1 },
  54: { T: 1 },
  55: { T: -1 },
  56: { T: 1 },
  57: { T: -1 },
  58: {},
  59: {},
  60: { f: Dx },
  62: { f: J2 },
  63: { f: yp },
  64: { f: Tm },
  65: {},
  66: {},
  67: {},
  68: {},
  69: {},
  70: {},
  128: {},
  129: { T: 1 },
  130: { T: -1 },
  131: { T: 1, f: ur, p: 0 },
  132: { T: -1 },
  133: { T: 1 },
  134: { T: -1 },
  135: { T: 1 },
  136: { T: -1 },
  137: { T: 1, f: mm },
  138: { T: -1 },
  139: { T: 1 },
  140: { T: -1 },
  141: { T: 1 },
  142: { T: -1 },
  143: { T: 1 },
  144: { T: -1 },
  145: { T: 1 },
  146: { T: -1 },
  147: { f: y2 },
  148: { f: w2, p: 16 },
  151: { f: um },
  152: {},
  153: { f: zm },
  154: {},
  155: {},
  156: { f: Hm },
  157: {},
  158: {},
  159: { T: 1, f: Hx },
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
  176: { f: sm },
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
  335: { f: mp },
  336: { T: -1 },
  337: { f: wp, T: 1 },
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
  355: { f: xs },
  357: {},
  358: {},
  359: {},
  360: { T: 1 },
  361: {},
  362: { f: Ax },
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
  426: { f: hm },
  427: { f: dm },
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
  476: { f: pm },
  477: {},
  478: {},
  479: { T: 1 },
  480: { T: -1 },
  481: { T: 1 },
  482: { T: -1 },
  483: { T: 1 },
  484: { T: -1 },
  485: { f: A2 },
  486: { T: 1 },
  487: { T: -1 },
  488: { T: 1 },
  489: { T: -1 },
  490: { T: 1 },
  491: { T: -1 },
  492: { T: 1 },
  493: { T: -1 },
  494: { f: lm },
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
  550: { f: xs },
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
  632: { f: Dp },
  633: { T: 1 },
  634: { T: -1 },
  635: { T: 1, f: Op },
  636: { T: -1 },
  637: { f: Id },
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
  651: { f: Pm },
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
  1053: { f: wm },
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
function te(e, t, r, n) {
  var i = t;
  if (!isNaN(i)) {
    var a = n || (r || []).length || 0,
      s = e.next(4);
    s.write_shift(2, i), s.write_shift(2, a), a > 0 && zs(r) && e.push(r);
  }
}
function m_(e, t, r, n) {
  var i = (r || []).length || 0;
  if (i <= 8224) return te(e, t, r, i);
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
function _i(e, t, r) {
  return (
    e || (e = U(7)),
    e.write_shift(2, t),
    e.write_shift(2, r),
    e.write_shift(2, 0),
    e.write_shift(1, 0),
    e
  );
}
function __(e, t, r, n) {
  var i = U(9);
  return _i(i, e, t), Tl(r, n || 'b', i), i;
}
function g_(e, t, r) {
  var n = U(8 + 2 * r.length);
  return (
    _i(n, e, t),
    n.write_shift(1, r.length),
    n.write_shift(r.length, r, 'sbcs'),
    n.l < n.length ? n.slice(0, n.l) : n
  );
}
function E_(e, t, r, n) {
  if (t.v != null)
    switch (t.t) {
      case 'd':
      case 'n':
        var i = t.t == 'd' ? Dt(At(t.v)) : t.v;
        i == (i | 0) && i >= 0 && i < 65536
          ? te(e, 2, Px(r, n, i))
          : te(e, 3, Ix(r, n, i));
        return;
      case 'b':
      case 'e':
        te(e, 5, __(r, n, t.v, t.t));
        return;
      case 's':
      case 'str':
        te(e, 4, g_(r, n, (t.v || '').slice(0, 255)));
        return;
    }
  te(e, 1, _i(null, r, n));
}
function T_(e, t, r, n) {
  var i = Array.isArray(t),
    a = He(t['!ref'] || 'A1'),
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
      (s = Ze(a));
  }
  for (var o = a.s.r; o <= a.e.r; ++o) {
    f = dt(o);
    for (var c = a.s.c; c <= a.e.c; ++c) {
      o === a.s.r && (l[c] = mt(c)), (s = l[c] + f);
      var h = i ? (t[o] || [])[c] : t[s];
      h && E_(e, h, o, c);
    }
  }
}
function w_(e, t) {
  for (var r = t || {}, n = Rt(), i = 0, a = 0; a < e.SheetNames.length; ++a)
    e.SheetNames[a] == r.sheet && (i = a);
  if (i == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error('Sheet not found: ' + r.sheet);
  return (
    te(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, qs(e, 16, r)),
    T_(n, e.Sheets[e.SheetNames[i]], i, r),
    te(n, 10),
    n.end()
  );
}
function S_(e, t, r) {
  te(e, 49, vx({ sz: 12, name: 'Arial' }, r));
}
function A_(e, t, r) {
  t &&
    [
      [5, 8],
      [23, 26],
      [41, 44],
      [50, 392],
    ].forEach(function (n) {
      for (var i = n[0]; i <= n[1]; ++i)
        t[i] != null && te(e, 1054, gx(i, t[i], r));
    });
}
function y_(e, t) {
  var r = U(19);
  r.write_shift(4, 2151),
    r.write_shift(4, 0),
    r.write_shift(4, 0),
    r.write_shift(2, 3),
    r.write_shift(1, 1),
    r.write_shift(4, 0),
    te(e, 2151, r),
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
    Al(He(t['!ref'] || 'A1'), r),
    r.write_shift(4, 4),
    te(e, 2152, r);
}
function F_(e, t) {
  for (var r = 0; r < 16; ++r) te(e, 224, df({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function (n) {
    te(e, 224, df(n, 0, t));
  });
}
function C_(e, t) {
  for (var r = 0; r < t['!links'].length; ++r) {
    var n = t['!links'][r];
    te(e, 440, Cx(n)), n[1].Tooltip && te(e, 2048, Ox(n));
  }
  delete t['!links'];
}
function O_(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function (n, i) {
      ++r <= 256 && n && te(e, 125, Nx(Da(i, n), i));
    });
  }
}
function R_(e, t, r, n, i) {
  var a = 16 + br(i.cellXfs, t, i);
  if (t.v == null && !t.bf) {
    te(e, 513, Jr(r, n, a));
    return;
  }
  if (t.bf) te(e, 6, Qv(t, r, n, i, a));
  else
    switch (t.t) {
      case 'd':
      case 'n':
        var s = t.t == 'd' ? Dt(At(t.v)) : t.v;
        te(e, 515, Sx(r, n, s, a));
        break;
      case 'b':
      case 'e':
        te(e, 517, wx(r, n, t.v, a, i, t.t));
        break;
      case 's':
      case 'str':
        if (i.bookSST) {
          var f = Qs(i.Strings, t.v, i.revStrings);
          te(e, 253, mx(r, n, f, a));
        } else te(e, 516, _x(r, n, (t.v || '').slice(0, 255), a, i));
        break;
      default:
        te(e, 513, Jr(r, n, a));
    }
}
function D_(e, t, r) {
  var n = Rt(),
    i = r.SheetNames[e],
    a = r.Sheets[i] || {},
    s = (r || {}).Workbook || {},
    f = (s.Sheets || [])[e] || {},
    l = Array.isArray(a),
    o = t.biff == 8,
    c,
    h = '',
    u = [],
    x = He(a['!ref'] || 'A1'),
    v = o ? 65536 : 16384;
  if (x.e.c > 255 || x.e.r >= v) {
    if (t.WTF)
      throw new Error(
        'Range ' + (a['!ref'] || 'A1') + ' exceeds format limit A1:IV16384',
      );
    (x.e.c = Math.min(x.e.c, 255)), (x.e.r = Math.min(x.e.c, v - 1));
  }
  te(n, 2057, qs(r, 16, t)),
    te(n, 13, Gt(1)),
    te(n, 12, Gt(100)),
    te(n, 15, St(!0)),
    te(n, 17, St(!1)),
    te(n, 16, Yr(0.001)),
    te(n, 95, St(!0)),
    te(n, 42, St(!1)),
    te(n, 43, St(!1)),
    te(n, 130, Gt(1)),
    te(n, 128, Tx()),
    te(n, 131, St(!1)),
    te(n, 132, St(!1)),
    o && O_(n, a['!cols']),
    te(n, 512, Ex(x, t)),
    o && (a['!links'] = []);
  for (var d = x.s.r; d <= x.e.r; ++d) {
    h = dt(d);
    for (var m = x.s.c; m <= x.e.c; ++m) {
      d === x.s.r && (u[m] = mt(m)), (c = u[m] + h);
      var S = l ? (a[d] || [])[m] : a[c];
      S && (R_(n, S, d, m, t), o && S.l && a['!links'].push([c, S.l]));
    }
  }
  var y = f.CodeName || f.name || i;
  return (
    o && te(n, 574, px((s.Views || [])[0])),
    o && (a['!merges'] || []).length && te(n, 229, Fx(a['!merges'])),
    o && C_(n, a),
    te(n, 442, Sl(y)),
    o && y_(n, a),
    te(n, 10),
    n.end()
  );
}
function N_(e, t, r) {
  var n = Rt(),
    i = (e || {}).Workbook || {},
    a = i.Sheets || [],
    s = i.WBProps || {},
    f = r.biff == 8,
    l = r.biff == 5;
  if (
    (te(n, 2057, qs(e, 5, r)),
    r.bookType == 'xla' && te(n, 135),
    te(n, 225, f ? Gt(1200) : null),
    te(n, 193, rx(2)),
    l && te(n, 191),
    l && te(n, 192),
    te(n, 226),
    te(n, 92, ux('SheetJS', r)),
    te(n, 66, Gt(f ? 1200 : 1252)),
    f && te(n, 353, Gt(0)),
    f && te(n, 448),
    te(n, 317, kx(e.SheetNames.length)),
    f && e.vbaraw && te(n, 211),
    f && e.vbaraw)
  ) {
    var o = s.CodeName || 'ThisWorkbook';
    te(n, 442, Sl(o));
  }
  te(n, 156, Gt(17)),
    te(n, 25, St(!1)),
    te(n, 18, St(!1)),
    te(n, 19, Gt(0)),
    f && te(n, 431, St(!1)),
    f && te(n, 444, Gt(0)),
    te(n, 61, xx()),
    te(n, 64, St(!1)),
    te(n, 141, Gt(0)),
    te(n, 34, St(bm(e) == 'true')),
    te(n, 14, St(!0)),
    f && te(n, 439, St(!1)),
    te(n, 218, Gt(0)),
    S_(n, e, r),
    A_(n, e.SSF, r),
    F_(n, r),
    f && te(n, 352, St(!1));
  var c = n.end(),
    h = Rt();
  f && te(h, 140, Rx()), f && r.Strings && m_(h, 252, dx(r.Strings)), te(h, 10);
  var u = h.end(),
    x = Rt(),
    v = 0,
    d = 0;
  for (d = 0; d < e.SheetNames.length; ++d)
    v += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[d].length;
  var m = c.length + v + u.length;
  for (d = 0; d < e.SheetNames.length; ++d) {
    var S = a[d] || {};
    te(
      x,
      133,
      hx({ pos: m, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[d] }, r),
    ),
      (m += t[d].length);
  }
  var y = x.end();
  if (v != y.length) throw new Error('BS8 ' + v + ' != ' + y.length);
  var F = [];
  return (
    c.length && F.push(c), y.length && F.push(y), u.length && F.push(u), ut(F)
  );
}
function k_(e, t) {
  var r = t || {},
    n = [];
  e && !e.SSF && (e.SSF = Nt(qe)),
    e &&
      e.SSF &&
      (ya(),
      Aa(e.SSF),
      (r.revssf = Fa(e.SSF)),
      (r.revssf[e.SSF[65535]] = 0),
      (r.ssf = e.SSF)),
    (r.Strings = []),
    (r.Strings.Count = 0),
    (r.Strings.Unique = 0),
    e0(r),
    (r.cellXfs = []),
    br(r.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {});
  for (var i = 0; i < e.SheetNames.length; ++i) n[n.length] = D_(i, r, e);
  return n.unshift(N_(e, n, r)), ut(n);
}
function Yl(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n['!ref'])) {
      var i = Ut(n['!ref']);
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
      return k_(e, t);
    case 4:
    case 3:
    case 2:
      return w_(e, t);
  }
  throw new Error('invalid type ' + a.bookType + ' for BIFF');
}
function I_(e, t, r, n) {
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
      var c = Ne({ r, c: s }),
        h = n.dense ? (e[r] || [])[s] : e[c],
        u = (h && h.v != null && (h.h || cd(h.w || (wr(h), h.w) || ''))) || '',
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
        a.push(ee('td', u, x));
    }
  }
  var v = '<tr>';
  return v + a.join('') + '</tr>';
}
var P_ =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  L_ = '</body></html>';
function b_(e, t, r) {
  var n = [];
  return n.join('') + '<table' + (r && r.id ? ' id="' + r.id + '"' : '') + '>';
}
function Jl(e, t) {
  var r = t || {},
    n = r.header != null ? r.header : P_,
    i = r.footer != null ? r.footer : L_,
    a = [n],
    s = Ut(e['!ref']);
  (r.dense = Array.isArray(e)), a.push(b_(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f) a.push(I_(e, s, f, r));
  return a.push('</table>' + i), a.join('');
}
function Zl(e, t, r) {
  var n = r || {},
    i = 0,
    a = 0;
  if (n.origin != null)
    if (typeof n.origin == 'number') i = n.origin;
    else {
      var s = typeof n.origin == 'string' ? st(n.origin) : n.origin;
      (i = s.r), (a = s.c);
    }
  var f = t.getElementsByTagName('tr'),
    l = Math.min(n.sheetRows || 1e7, f.length),
    o = { s: { r: 0, c: 0 }, e: { r: i, c: a } };
  if (e['!ref']) {
    var c = Ut(e['!ref']);
    (o.s.r = Math.min(o.s.r, c.s.r)),
      (o.s.c = Math.min(o.s.c, c.s.c)),
      (o.e.r = Math.max(o.e.r, c.e.r)),
      (o.e.c = Math.max(o.e.c, c.e.c)),
      i == -1 && (o.e.r = i = c.e.r + 1);
  }
  var h = [],
    u = 0,
    x = e['!rows'] || (e['!rows'] = []),
    v = 0,
    d = 0,
    m = 0,
    S = 0,
    y = 0,
    F = 0;
  for (e['!cols'] || (e['!cols'] = []); v < f.length && d < l; ++v) {
    var k = f[v];
    if (Ef(k)) {
      if (n.display) continue;
      x[d] = { hidden: !0 };
    }
    var z = k.children;
    for (m = S = 0; m < z.length; ++m) {
      var J = z[m];
      if (!(n.display && Ef(J))) {
        var O = J.hasAttribute('data-v')
            ? J.getAttribute('data-v')
            : J.hasAttribute('v')
              ? J.getAttribute('v')
              : xd(J.innerHTML),
          H = J.getAttribute('data-z') || J.getAttribute('z');
        for (u = 0; u < h.length; ++u) {
          var I = h[u];
          I.s.c == S + a &&
            I.s.r < d + i &&
            d + i <= I.e.r &&
            ((S = I.e.c + 1 - a), (u = -1));
        }
        (F = +J.getAttribute('colspan') || 1),
          ((y = +J.getAttribute('rowspan') || 1) > 1 || F > 1) &&
            h.push({
              s: { r: d + i, c: S + a },
              e: { r: d + i + (y || 1) - 1, c: S + a + (F || 1) - 1 },
            });
        var V = { t: 's', v: O },
          X = J.getAttribute('data-t') || J.getAttribute('t') || '';
        O != null &&
          (O.length == 0
            ? (V.t = X || 'z')
            : n.raw ||
              O.trim().length == 0 ||
              X == 's' ||
              (O === 'TRUE'
                ? (V = { t: 'b', v: !0 })
                : O === 'FALSE'
                  ? (V = { t: 'b', v: !1 })
                  : isNaN(_r(O))
                    ? isNaN(ii(O).getDate()) ||
                      ((V = { t: 'd', v: At(O) }),
                      n.cellDates || (V = { t: 'n', v: Dt(V.v) }),
                      (V.z = n.dateNF || qe[14]))
                    : (V = { t: 'n', v: _r(O) }))),
          V.z === void 0 && H != null && (V.z = H);
        var K = '',
          ne = J.getElementsByTagName('A');
        if (ne && ne.length)
          for (
            var Te = 0;
            Te < ne.length &&
            !(
              ne[Te].hasAttribute('href') &&
              ((K = ne[Te].getAttribute('href')), K.charAt(0) != '#')
            );
            ++Te
          );
        K && K.charAt(0) != '#' && (V.l = { Target: K }),
          n.dense
            ? (e[d + i] || (e[d + i] = []), (e[d + i][S + a] = V))
            : (e[Ne({ c: S + a, r: d + i })] = V),
          o.e.c < S + a && (o.e.c = S + a),
          (S += F);
      }
    }
    ++d;
  }
  return (
    h.length && (e['!merges'] = (e['!merges'] || []).concat(h)),
    (o.e.r = Math.max(o.e.r, d - 1 + i)),
    (e['!ref'] = Ze(o)),
    d >= l && (e['!fullref'] = Ze(((o.e.r = f.length - v + d - 1 + i), o))),
    e
  );
}
function Ql(e, t) {
  var r = t || {},
    n = r.dense ? [] : {};
  return Zl(n, e, t);
}
function B_(e, t) {
  return Qr(Ql(e, t), t);
}
function Ef(e) {
  var t = '',
    r = M_(e);
  return (
    r && (t = r(e).getPropertyValue('display')),
    t || (t = e.style && e.style.display),
    t === 'none'
  );
}
function M_(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == 'function'
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == 'function'
      ? getComputedStyle
      : null;
}
var U_ = (function () {
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
        si({
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
      return Qe + t;
    };
  })(),
  Tf = (function () {
    var e = function (a) {
        return De(a)
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
            De(s.SheetNames[f]) +
            `" table:style-name="ta1">
`,
        );
        var o = 0,
          c = 0,
          h = Ut(a['!ref'] || 'A1'),
          u = a['!merges'] || [],
          x = 0,
          v = Array.isArray(a);
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
            l.push(t);
          for (; c <= h.e.c; ++c) {
            var S = !1,
              y = {},
              F = '';
            for (x = 0; x != u.length; ++x)
              if (
                !(u[x].s.c > c) &&
                !(u[x].s.r > o) &&
                !(u[x].e.c < c) &&
                !(u[x].e.r < o)
              ) {
                (u[x].s.c != c || u[x].s.r != o) && (S = !0),
                  (y['table:number-columns-spanned'] = u[x].e.c - u[x].s.c + 1),
                  (y['table:number-rows-spanned'] = u[x].e.r - u[x].s.r + 1);
                break;
              }
            if (S) {
              l.push(r);
              continue;
            }
            var k = Ne({ r: o, c }),
              z = v ? (a[o] || [])[c] : a[k];
            if (
              z &&
              z.f &&
              ((y['table:formula'] = De(a2(z.f))),
              z.F && z.F.slice(0, k.length) == k)
            ) {
              var J = Ut(z.F);
              (y['table:number-matrix-columns-spanned'] = J.e.c - J.s.c + 1),
                (y['table:number-matrix-rows-spanned'] = J.e.r - J.s.r + 1);
            }
            if (!z) {
              l.push(t);
              continue;
            }
            switch (z.t) {
              case 'b':
                (F = z.v ? 'TRUE' : 'FALSE'),
                  (y['office:value-type'] = 'boolean'),
                  (y['office:boolean-value'] = z.v ? 'true' : 'false');
                break;
              case 'n':
                (F = z.w || String(z.v || 0)),
                  (y['office:value-type'] = 'float'),
                  (y['office:value'] = z.v || 0);
                break;
              case 's':
              case 'str':
                (F = z.v == null ? '' : z.v),
                  (y['office:value-type'] = 'string');
                break;
              case 'd':
                (F = z.w || At(z.v).toISOString()),
                  (y['office:value-type'] = 'date'),
                  (y['office:date-value'] = At(z.v).toISOString()),
                  (y['table:style-name'] = 'ce1');
                break;
              default:
                l.push(t);
                continue;
            }
            var O = e(F);
            if (z.l && z.l.Target) {
              var H = z.l.Target;
              (H = H.charAt(0) == '#' ? '#' + s2(H.slice(1)) : H),
                H.charAt(0) != '#' && !H.match(/^\w+:/) && (H = '../' + H),
                (O = ee('text:a', O, {
                  'xlink:href': H.replace(/&/g, '&amp;'),
                }));
            }
            l.push(
              '          ' +
                ee('table:table-cell', ee('text:p', O, {}), y) +
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
                $s(h), (h.ods = f);
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
      var l = [Qe],
        o = si({
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
        c = si({
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
          l.push(xl().replace(/office:document-meta/g, 'office:meta')))
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
function ec(e, t) {
  if (t.bookType == 'fods') return Tf(e, t);
  var r = Ms(),
    n = '',
    i = [],
    a = [];
  return (
    (n = 'mimetype'),
    _e(r, n, 'application/vnd.oasis.opendocument.spreadsheet'),
    (n = 'content.xml'),
    _e(r, n, Tf(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'ContentFile']),
    (n = 'styles.xml'),
    _e(r, n, U_(e, t)),
    i.push([n, 'text/xml']),
    a.push([n, 'StylesFile']),
    (n = 'meta.xml'),
    _e(r, n, Qe + xl()),
    i.push([n, 'text/xml']),
    a.push([n, 'MetadataFile']),
    (n = 'manifest.rdf'),
    _e(r, n, Jd(a)),
    i.push([n, 'application/rdf+xml']),
    (n = 'META-INF/manifest.xml'),
    _e(r, n, $d(i)),
    r
  );
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function ca(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function H_(e) {
  return typeof TextEncoder < 'u' ? new TextEncoder().encode(e) : er(ai(e));
}
function W_(e, t) {
  e: for (var r = 0; r <= e.length - t.length; ++r) {
    for (var n = 0; n < t.length; ++n) if (e[r + n] != t[n]) continue e;
    return !0;
  }
  return !1;
}
function Lr(e) {
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
function z_(e, t, r) {
  var n =
      Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20,
    i = r / Math.pow(10, n - 6176);
  (e[t + 15] |= n >> 7), (e[t + 14] |= (n & 127) << 1);
  for (var a = 0; i >= 1; ++a, i /= 256) e[t + a] = i & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function fi(e, t) {
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
function Oe(e) {
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
function En(e) {
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
function rt(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0],
      i = fi(e, r),
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
        (s = fi(e, r)), (f = e.slice(r[0], r[0] + s)), (r[0] += s);
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
function lt(e) {
  var t = [];
  return (
    e.forEach(function (r, n) {
      r.forEach(function (i) {
        i.data &&
          (t.push(Oe(n * 8 + i.type)),
          i.type == 2 && t.push(Oe(i.data.length)),
          t.push(i.data));
      });
    }),
    Lr(t)
  );
}
function Zt(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var i = fi(e, n),
      a = rt(e.slice(n[0], n[0] + i));
    n[0] += i;
    var s = { id: En(a[1][0].data), messages: [] };
    a[2].forEach(function (f) {
      var l = rt(f.data),
        o = En(l[3][0].data);
      s.messages.push({ meta: l, data: e.slice(n[0], n[0] + o) }), (n[0] += o);
    }),
      (t = a[3]) != null && t[0] && (s.merge = En(a[3][0].data) >>> 0 > 0),
      r.push(s);
  }
  return r;
}
function hn(e) {
  var t = [];
  return (
    e.forEach(function (r) {
      var n = [];
      (n[1] = [{ data: Oe(r.id), type: 0 }]),
        (n[2] = []),
        r.merge != null && (n[3] = [{ data: Oe(+!!r.merge), type: 0 }]);
      var i = [];
      r.messages.forEach(function (s) {
        i.push(s.data),
          (s.meta[3] = [{ type: 0, data: Oe(s.data.length) }]),
          n[2].push({ data: lt(s.meta), type: 2 });
      });
      var a = lt(n);
      t.push(Oe(a.length)),
        t.push(a),
        i.forEach(function (s) {
          return t.push(s);
        });
    }),
    Lr(t)
  );
}
function V_(e, t) {
  if (e != 0) throw new Error('Unexpected Snappy chunk type '.concat(e));
  for (var r = [0], n = fi(t, r), i = []; r[0] < t.length; ) {
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
function Qt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++],
      i = e[r] | (e[r + 1] << 8) | (e[r + 2] << 16);
    (r += 3), t.push(V_(n, e.slice(r, r + i))), (r += i);
  }
  if (r !== e.length) throw new Error('data is not a valid framed stream!');
  return Lr(t);
}
function dn(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455),
      i = new Uint8Array(4);
    t.push(i);
    var a = Oe(n),
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
  return Lr(t);
}
function Ja(e, t) {
  var r = new Uint8Array(32),
    n = ca(r),
    i = 12,
    a = 0;
  switch (((r[0] = 5), e.t)) {
    case 'n':
      (r[1] = 2), z_(r, i, e.v), (a |= 1), (i += 16);
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
function Za(e, t) {
  var r = new Uint8Array(32),
    n = ca(r),
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
function yr(e) {
  var t = rt(e);
  return fi(t[1][0].data);
}
function G_(e, t, r) {
  var n, i, a, s;
  if (!((n = e[6]) != null && n[0]) || !((i = e[7]) != null && i[0]))
    throw 'Mutation only works on post-BNC storages!';
  var f =
    (((s = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : s.data) &&
      En(e[8][0].data) > 0) ||
    !1;
  if (f) throw 'Math only works with normal offsets';
  for (
    var l = 0,
      o = ca(e[7][0].data),
      c = 0,
      h = [],
      u = ca(e[4][0].data),
      x = 0,
      v = [],
      d = 0;
    d < t.length;
    ++d
  ) {
    if (t[d] == null) {
      o.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535);
      continue;
    }
    o.setUint16(d * 2, c, !0), u.setUint16(d * 2, x, !0);
    var m, S;
    switch (typeof t[d]) {
      case 'string':
        (m = Ja({ t: 's', v: t[d] }, r)), (S = Za({ t: 's', v: t[d] }, r));
        break;
      case 'number':
        (m = Ja({ t: 'n', v: t[d] }, r)), (S = Za({ t: 'n', v: t[d] }, r));
        break;
      case 'boolean':
        (m = Ja({ t: 'b', v: t[d] }, r)), (S = Za({ t: 'b', v: t[d] }, r));
        break;
      default:
        throw new Error('Unsupported value ' + t[d]);
    }
    h.push(m), (c += m.length), v.push(S), (x += S.length), ++l;
  }
  for (e[2][0].data = Oe(l); d < e[7][0].data.length / 2; ++d)
    o.setUint16(d * 2, 65535, !0), u.setUint16(d * 2, 65535, !0);
  return (e[6][0].data = Lr(h)), (e[3][0].data = Lr(v)), l;
}
function j_(e, t) {
  if (!t || !t.numbers)
    throw new Error('Must pass a `numbers` option -- check the README');
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 &&
    console.error('The Numbers writer currently writes only the first table');
  var n = Ut(r['!ref']);
  n.s.r = n.s.c = 0;
  var i = !1;
  n.e.c > 9 && ((i = !0), (n.e.c = 9)),
    n.e.r > 49 && ((i = !0), (n.e.r = 49)),
    i &&
      console.error(
        'The Numbers writer is currently limited to '.concat(Ze(n)),
      );
  var a = ua(r, { range: n, header: 1 }),
    s = ['~Sh33tJ5~'];
  a.forEach(function (b) {
    return b.forEach(function (R) {
      typeof R == 'string' && s.push(R);
    });
  });
  var f = {},
    l = [],
    o = Ie.read(t.numbers, { type: 'base64' });
  o.FileIndex.map(function (b, R) {
    return [b, o.FullPaths[R]];
  }).forEach(function (b) {
    var R = b[0],
      C = b[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var j = R.content,
        ue = Qt(j),
        he = Zt(ue);
      he.forEach(function (ce) {
        l.push(ce.id),
          (f[ce.id] = {
            deps: [],
            location: C,
            type: En(ce.messages[0].meta[1][0].data),
          });
      });
    }
  }),
    l.sort(function (b, R) {
      return b - R;
    });
  var c = l
    .filter(function (b) {
      return b > 1;
    })
    .map(function (b) {
      return [b, Oe(b)];
    });
  o.FileIndex.map(function (b, R) {
    return [b, o.FullPaths[R]];
  }).forEach(function (b) {
    var R = b[0];
    if ((b[1], !!R.name.match(/\.iwa/))) {
      var C = Zt(Qt(R.content));
      C.forEach(function (j) {
        j.messages.forEach(function (ue) {
          c.forEach(function (he) {
            j.messages.some(function (ce) {
              return En(ce.meta[1][0].data) != 11006 && W_(ce.data, he[1]);
            }) && f[he[0]].deps.push(j.id);
          });
        });
      });
    }
  });
  for (
    var h = Ie.find(o, f[1].location), u = Zt(Qt(h.content)), x, v = 0;
    v < u.length;
    ++v
  ) {
    var d = u[v];
    d.id == 1 && (x = d);
  }
  var m = yr(rt(x.messages[0].data)[1][0].data);
  for (
    h = Ie.find(o, f[m].location), u = Zt(Qt(h.content)), v = 0;
    v < u.length;
    ++v
  )
    (d = u[v]), d.id == m && (x = d);
  for (
    m = yr(rt(x.messages[0].data)[2][0].data),
      h = Ie.find(o, f[m].location),
      u = Zt(Qt(h.content)),
      v = 0;
    v < u.length;
    ++v
  )
    (d = u[v]), d.id == m && (x = d);
  for (
    m = yr(rt(x.messages[0].data)[2][0].data),
      h = Ie.find(o, f[m].location),
      u = Zt(Qt(h.content)),
      v = 0;
    v < u.length;
    ++v
  )
    (d = u[v]), d.id == m && (x = d);
  var S = rt(x.messages[0].data);
  {
    (S[6][0].data = Oe(n.e.r + 1)), (S[7][0].data = Oe(n.e.c + 1));
    var y = yr(S[46][0].data),
      F = Ie.find(o, f[y].location),
      k = Zt(Qt(F.content));
    {
      for (var z = 0; z < k.length && k[z].id != y; ++z);
      if (k[z].id != y) throw 'Bad ColumnRowUIDMapArchive';
      var J = rt(k[z].messages[0].data);
      (J[1] = []), (J[2] = []), (J[3] = []);
      for (var O = 0; O <= n.e.c; ++O) {
        var H = [];
        (H[1] = H[2] = [{ type: 0, data: Oe(O + 420690) }]),
          J[1].push({ type: 2, data: lt(H) }),
          J[2].push({ type: 0, data: Oe(O) }),
          J[3].push({ type: 0, data: Oe(O) });
      }
      (J[4] = []), (J[5] = []), (J[6] = []);
      for (var I = 0; I <= n.e.r; ++I)
        (H = []),
          (H[1] = H[2] = [{ type: 0, data: Oe(I + 726270) }]),
          J[4].push({ type: 2, data: lt(H) }),
          J[5].push({ type: 0, data: Oe(I) }),
          J[6].push({ type: 0, data: Oe(I) });
      k[z].messages[0].data = lt(J);
    }
    (F.content = dn(hn(k))), (F.size = F.content.length), delete S[46];
    var V = rt(S[4][0].data);
    {
      V[7][0].data = Oe(n.e.r + 1);
      var X = rt(V[1][0].data),
        K = yr(X[2][0].data);
      (F = Ie.find(o, f[K].location)), (k = Zt(Qt(F.content)));
      {
        if (k[0].id != K) throw 'Bad HeaderStorageBucket';
        var ne = rt(k[0].messages[0].data);
        for (I = 0; I < a.length; ++I) {
          var Te = rt(ne[2][0].data);
          (Te[1][0].data = Oe(I)),
            (Te[4][0].data = Oe(a[I].length)),
            (ne[2][I] = { type: ne[2][0].type, data: lt(Te) });
        }
        k[0].messages[0].data = lt(ne);
      }
      (F.content = dn(hn(k))), (F.size = F.content.length);
      var xe = yr(V[2][0].data);
      (F = Ie.find(o, f[xe].location)), (k = Zt(Qt(F.content)));
      {
        if (k[0].id != xe) throw 'Bad HeaderStorageBucket';
        for (ne = rt(k[0].messages[0].data), O = 0; O <= n.e.c; ++O)
          (Te = rt(ne[2][0].data)),
            (Te[1][0].data = Oe(O)),
            (Te[4][0].data = Oe(n.e.r + 1)),
            (ne[2][O] = { type: ne[2][0].type, data: lt(Te) });
        k[0].messages[0].data = lt(ne);
      }
      (F.content = dn(hn(k))), (F.size = F.content.length);
      var Ge = yr(V[4][0].data);
      (function () {
        for (
          var b = Ie.find(o, f[Ge].location), R = Zt(Qt(b.content)), C, j = 0;
          j < R.length;
          ++j
        ) {
          var ue = R[j];
          ue.id == Ge && (C = ue);
        }
        var he = rt(C.messages[0].data);
        {
          he[3] = [];
          var ce = [];
          s.forEach(function (Ee, it) {
            (ce[1] = [{ type: 0, data: Oe(it) }]),
              (ce[2] = [{ type: 0, data: Oe(1) }]),
              (ce[3] = [{ type: 2, data: H_(Ee) }]),
              he[3].push({ type: 2, data: lt(ce) });
          });
        }
        C.messages[0].data = lt(he);
        var ie = hn(R),
          Ce = dn(ie);
        (b.content = Ce), (b.size = b.content.length);
      })();
      var Le = rt(V[3][0].data);
      {
        var ot = Le[1][0];
        delete Le[2];
        var We = rt(ot.data);
        {
          var nt = yr(We[2][0].data);
          (function () {
            for (
              var b = Ie.find(o, f[nt].location),
                R = Zt(Qt(b.content)),
                C,
                j = 0;
              j < R.length;
              ++j
            ) {
              var ue = R[j];
              ue.id == nt && (C = ue);
            }
            var he = rt(C.messages[0].data);
            {
              delete he[6], delete Le[7];
              var ce = new Uint8Array(he[5][0].data);
              he[5] = [];
              for (var ie = 0, Ce = 0; Ce <= n.e.r; ++Ce) {
                var Ee = rt(ce);
                (ie += G_(Ee, a[Ce], s)),
                  (Ee[1][0].data = Oe(Ce)),
                  he[5].push({ data: lt(Ee), type: 2 });
              }
              (he[1] = [{ type: 0, data: Oe(n.e.c + 1) }]),
                (he[2] = [{ type: 0, data: Oe(n.e.r + 1) }]),
                (he[3] = [{ type: 0, data: Oe(ie) }]),
                (he[4] = [{ type: 0, data: Oe(n.e.r + 1) }]);
            }
            C.messages[0].data = lt(he);
            var it = hn(R),
              we = dn(it);
            (b.content = we), (b.size = b.content.length);
          })();
        }
        ot.data = lt(We);
      }
      V[3][0].data = lt(Le);
    }
    S[4][0].data = lt(V);
  }
  x.messages[0].data = lt(S);
  var et = hn(u),
    A = dn(et);
  return (h.content = A), (h.size = h.content.length), o;
}
function X_(e) {
  return function (r) {
    for (var n = 0; n != e.length; ++n) {
      var i = e[n];
      r[i[0]] === void 0 && (r[i[0]] = i[1]),
        i[2] === 'n' && (r[i[0]] = Number(r[i[0]]));
    }
  };
}
function e0(e) {
  X_([
    ['cellDates', !1],
    ['bookSST', !1],
    ['bookType', 'xlsx'],
    ['compression', !1],
    ['WTF', !1],
  ])(e);
}
function K_(e, t) {
  return t.bookType == 'ods'
    ? ec(e, t)
    : t.bookType == 'numbers'
      ? j_(e, t)
      : t.bookType == 'xlsb'
        ? q_(e, t)
        : $_(e, t);
}
function q_(e, t) {
  (vn = 1024),
    e && !e.SSF && (e.SSF = Nt(qe)),
    e &&
      e.SSF &&
      (ya(),
      Aa(e.SSF),
      (t.revssf = Fa(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Jn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = t.bookType == 'xlsb' ? 'bin' : 'xml',
    n = bl.indexOf(t.bookType) > -1,
    i = ul();
  e0((t = t || {}));
  var a = Ms(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    br(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    _e(a, s, pl(e.Props, t)),
    i.coreprops.push(s),
    Re(t.rels, 2, s, Ae.CORE_PROPS),
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
      _e(a, s, ml(e.Props)),
      i.extprops.push(s),
      Re(t.rels, 3, s, Ae.EXT_PROPS),
      e.Custprops !== e.Props &&
        xt(e.Custprops || {}).length > 0 &&
        ((s = 'docProps/custom.xml'),
        _e(a, s, _l(e.Custprops)),
        i.custprops.push(s),
        Re(t.rels, 4, s, Ae.CUST_PROPS)),
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
        (s = 'xl/worksheets/sheet' + f + '.' + r),
          _e(a, s, Jm(f - 1, s, t, e, c)),
          i.sheets.push(s),
          Re(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, Ae.WS[0]);
    }
    if (h) {
      var x = h['!comments'],
        v = !1,
        d = '';
      x &&
        x.length > 0 &&
        ((d = 'xl/comments' + f + '.' + r),
        _e(a, d, e_(x, d)),
        i.comments.push(d),
        Re(c, -1, '../comments' + f + '.' + r, Ae.CMNT),
        (v = !0)),
        h['!legacy'] &&
          v &&
          _e(a, 'xl/drawings/vmlDrawing' + f + '.vml', Pl(f, h['!comments'])),
        delete h['!comments'],
        delete h['!legacy'];
    }
    c['!id'].rId1 && _e(a, dl(s), _n(c));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      _e(a, s, Qm(t.Strings, s, t)),
      i.strs.push(s),
      Re(t.wbrels, -1, 'sharedStrings.' + r, Ae.SST)),
    (s = 'xl/workbook.' + r),
    _e(a, s, Ym(e, s)),
    i.workbooks.push(s),
    Re(t.rels, 1, s, Ae.WB),
    (s = 'xl/theme/theme1.xml'),
    _e(a, s, kl(e.Themes, t)),
    i.themes.push(s),
    Re(t.wbrels, -1, 'theme/theme1.xml', Ae.THEME),
    (s = 'xl/styles.' + r),
    _e(a, s, Zm(e, s, t)),
    i.styles.push(s),
    Re(t.wbrels, -1, 'styles.' + r, Ae.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      _e(a, s, e.vbaraw),
      i.vba.push(s),
      Re(t.wbrels, -1, 'vbaProject.bin', Ae.VBA)),
    (s = 'xl/metadata.' + r),
    _e(a, s, t_(s)),
    i.metadata.push(s),
    Re(t.wbrels, -1, 'metadata.' + r, Ae.XLMETA),
    _e(a, '[Content_Types].xml', hl(i, t)),
    _e(a, '_rels/.rels', _n(t.rels)),
    _e(a, 'xl/_rels/workbook.' + r + '.rels', _n(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function $_(e, t) {
  (vn = 1024),
    e && !e.SSF && (e.SSF = Nt(qe)),
    e &&
      e.SSF &&
      (ya(),
      Aa(e.SSF),
      (t.revssf = Fa(e.SSF)),
      (t.revssf[e.SSF[65535]] = 0),
      (t.ssf = e.SSF)),
    (t.rels = {}),
    (t.wbrels = {}),
    (t.Strings = []),
    (t.Strings.Count = 0),
    (t.Strings.Unique = 0),
    Jn
      ? (t.revStrings = new Map())
      : ((t.revStrings = {}), (t.revStrings.foo = []), delete t.revStrings.foo);
  var r = 'xml',
    n = bl.indexOf(t.bookType) > -1,
    i = ul();
  e0((t = t || {}));
  var a = Ms(),
    s = '',
    f = 0;
  if (
    ((t.cellXfs = []),
    br(t.cellXfs, {}, { revssf: { General: 0 } }),
    e.Props || (e.Props = {}),
    (s = 'docProps/core.xml'),
    _e(a, s, pl(e.Props, t)),
    i.coreprops.push(s),
    Re(t.rels, 2, s, Ae.CORE_PROPS),
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
    _e(a, s, ml(e.Props)),
    i.extprops.push(s),
    Re(t.rels, 3, s, Ae.EXT_PROPS),
    e.Custprops !== e.Props &&
      xt(e.Custprops || {}).length > 0 &&
      ((s = 'docProps/custom.xml'),
      _e(a, s, _l(e.Custprops)),
      i.custprops.push(s),
      Re(t.rels, 4, s, Ae.CUST_PROPS));
  var c = ['SheetJ5'];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var h = { '!id': {} },
      u = e.Sheets[e.SheetNames[f - 1]],
      x = (u || {})['!type'] || 'sheet';
    switch (x) {
      case 'chart':
      default:
        (s = 'xl/worksheets/sheet' + f + '.' + r),
          _e(a, s, jl(f - 1, t, e, h)),
          i.sheets.push(s),
          Re(t.wbrels, -1, 'worksheets/sheet' + f + '.' + r, Ae.WS[0]);
    }
    if (u) {
      var v = u['!comments'],
        d = !1,
        m = '';
      if (v && v.length > 0) {
        var S = !1;
        v.forEach(function (y) {
          y[1].forEach(function (F) {
            F.T == !0 && (S = !0);
          });
        }),
          S &&
            ((m = 'xl/threadedComments/threadedComment' + f + '.' + r),
            _e(a, m, Fp(v, c, t)),
            i.threadedcomments.push(m),
            Re(
              h,
              -1,
              '../threadedComments/threadedComment' + f + '.' + r,
              Ae.TCMNT,
            )),
          (m = 'xl/comments' + f + '.' + r),
          _e(a, m, Ll(v)),
          i.comments.push(m),
          Re(h, -1, '../comments' + f + '.' + r, Ae.CMNT),
          (d = !0);
      }
      u['!legacy'] &&
        d &&
        _e(a, 'xl/drawings/vmlDrawing' + f + '.vml', Pl(f, u['!comments'])),
        delete u['!comments'],
        delete u['!legacy'];
    }
    h['!id'].rId1 && _e(a, dl(s), _n(h));
  }
  return (
    t.Strings != null &&
      t.Strings.length > 0 &&
      ((s = 'xl/sharedStrings.' + r),
      _e(a, s, Fl(t.Strings, t)),
      i.strs.push(s),
      Re(t.wbrels, -1, 'sharedStrings.' + r, Ae.SST)),
    (s = 'xl/workbook.' + r),
    _e(a, s, ql(e)),
    i.workbooks.push(s),
    Re(t.rels, 1, s, Ae.WB),
    (s = 'xl/theme/theme1.xml'),
    _e(a, s, kl(e.Themes, t)),
    i.themes.push(s),
    Re(t.wbrels, -1, 'theme/theme1.xml', Ae.THEME),
    (s = 'xl/styles.' + r),
    _e(a, s, Dl(e, t)),
    i.styles.push(s),
    Re(t.wbrels, -1, 'styles.' + r, Ae.STY),
    e.vbaraw &&
      n &&
      ((s = 'xl/vbaProject.bin'),
      _e(a, s, e.vbaraw),
      i.vba.push(s),
      Re(t.wbrels, -1, 'vbaProject.bin', Ae.VBA)),
    (s = 'xl/metadata.' + r),
    _e(a, s, Il()),
    i.metadata.push(s),
    Re(t.wbrels, -1, 'metadata.' + r, Ae.XLMETA),
    c.length > 1 &&
      ((s = 'xl/persons/person.xml'),
      _e(a, s, Cp(c)),
      i.people.push(s),
      Re(t.wbrels, -1, 'persons/person.xml', Ae.PEOPLE)),
    _e(a, '[Content_Types].xml', hl(i, t)),
    _e(a, '_rels/.rels', _n(t.rels)),
    _e(a, 'xl/_rels/workbook.' + r + '.rels', _n(t.wbrels)),
    delete t.revssf,
    delete t.ssf,
    a
  );
}
function Y_(e, t) {
  var r = '';
  switch ((t || {}).type || 'base64') {
    case 'buffer':
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case 'base64':
      r = Tr(e.slice(0, 12));
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
function tc(e, t) {
  switch (t.type) {
    case 'base64':
    case 'binary':
      break;
    case 'buffer':
    case 'array':
      t.type = '';
      break;
    case 'file':
      return xi(t.file, Ie.write(e, { type: Fe ? 'buffer' : '' }));
    case 'string':
      throw new Error(
        "'string' output type invalid for '" + t.bookType + "' files",
      );
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
  return Ie.write(e, t);
}
function J_(e, t) {
  var r = Nt(t || {}),
    n = K_(e, r);
  return Z_(n, r);
}
function Z_(e, t) {
  var r = {},
    n = Fe ? 'nodebuffer' : typeof Uint8Array < 'u' ? 'array' : 'string';
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
    ? Ie.write(e, {
        fileType: 'zip',
        type: { nodebuffer: 'buffer', string: 'binary' }[r.type] || r.type,
        compression: !!t.compression,
      })
    : e.generate(r);
  if (typeof Deno < 'u' && typeof i == 'string') {
    if (t.type == 'binary' || t.type == 'base64') return i;
    i = new Uint8Array(Sa(i));
  }
  return t.password && typeof encrypt_agile < 'u'
    ? tc(encrypt_agile(i, t.password), t)
    : t.type === 'file'
      ? xi(t.file, i)
      : t.type == 'string'
        ? Kn(i)
        : i;
}
function Q_(e, t) {
  var r = t || {},
    n = p_(e, r);
  return tc(n, r);
}
function fr(e, t, r) {
  r || (r = '');
  var n = r + e;
  switch (t.type) {
    case 'base64':
      return ni(ai(n));
    case 'binary':
      return ai(n);
    case 'string':
      return e;
    case 'file':
      return xi(t.file, n, 'utf8');
    case 'buffer':
      return Fe
        ? Ar(n, 'utf8')
        : typeof TextEncoder < 'u'
          ? new TextEncoder().encode(n)
          : fr(n, { type: 'binary' })
              .split('')
              .map(function (i) {
                return i.charCodeAt(0);
              });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function eg(e, t) {
  switch (t.type) {
    case 'base64':
      return ni(e);
    case 'binary':
      return e;
    case 'string':
      return e;
    case 'file':
      return xi(t.file, e, 'binary');
    case 'buffer':
      return Fe
        ? Ar(e, 'binary')
        : e.split('').map(function (r) {
            return r.charCodeAt(0);
          });
  }
  throw new Error('Unrecognized type ' + t.type);
}
function Pi(e, t) {
  switch (t.type) {
    case 'string':
    case 'base64':
    case 'binary':
      for (var r = '', n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == 'base64' ? ni(r) : t.type == 'string' ? Kn(r) : r;
    case 'file':
      return xi(t.file, e);
    case 'buffer':
      return e;
    default:
      throw new Error('Unrecognized type ' + t.type);
  }
}
function rc(e, t) {
  O1(), Um(e);
  var r = Nt(t || {});
  if (
    (r.cellStyles && ((r.cellNF = !0), (r.sheetStubs = !0)), r.type == 'array')
  ) {
    r.type = 'binary';
    var n = rc(e, r);
    return (r.type = 'array'), Sa(n);
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
      return fr(d_(e, r), r);
    case 'slk':
    case 'sylk':
      return fr(bx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'htm':
    case 'html':
      return fr(Jl(e.Sheets[e.SheetNames[i]], r), r);
    case 'txt':
      return eg(nc(e.Sheets[e.SheetNames[i]], r), r);
    case 'csv':
      return fr(t0(e.Sheets[e.SheetNames[i]], r), r, '\uFEFF');
    case 'dif':
      return fr(Bx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'dbf':
      return Pi(Lx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'prn':
      return fr(Mx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'rtf':
      return fr(jx.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'eth':
      return fr(yl.from_sheet(e.Sheets[e.SheetNames[i]], r), r);
    case 'fods':
      return fr(ec(e, r), r);
    case 'wk1':
      return Pi(xf.sheet_to_wk1(e.Sheets[e.SheetNames[i]], r), r);
    case 'wk3':
      return Pi(xf.book_to_wk3(e, r), r);
    case 'biff2':
      r.biff || (r.biff = 2);
    case 'biff3':
      r.biff || (r.biff = 3);
    case 'biff4':
      return r.biff || (r.biff = 4), Pi(Yl(e, r), r);
    case 'biff5':
      r.biff || (r.biff = 5);
    case 'biff8':
    case 'xla':
    case 'xls':
      return r.biff || (r.biff = 8), Q_(e, r);
    case 'xlsx':
    case 'xlsm':
    case 'xlam':
    case 'xlsb':
    case 'numbers':
    case 'ods':
      return J_(e, r);
    default:
      throw new Error('Unrecognized bookType |' + r.bookType + '|');
  }
}
function tg(e) {
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
function rg(e, t, r) {
  var n = {};
  return (n.type = 'file'), (n.file = t), tg(n), rc(e, n);
}
function ng(e, t, r, n, i, a, s, f) {
  var l = dt(r),
    o = f.defval,
    c = f.raw || !Object.prototype.hasOwnProperty.call(f, 'raw'),
    h = !0,
    u = i === 1 ? [] : {};
  if (i !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(u, '__rowNum__', { value: r, enumerable: !1 });
      } catch {
        u.__rowNum__ = r;
      }
    else u.__rowNum__ = r;
  if (!s || e[r])
    for (var x = t.s.c; x <= t.e.c; ++x) {
      var v = s ? e[r][x] : e[n[x] + l];
      if (v === void 0 || v.t === void 0) {
        if (o === void 0) continue;
        a[x] != null && (u[a[x]] = o);
        continue;
      }
      var d = v.v;
      switch (v.t) {
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
          throw new Error('unrecognized type ' + v.t);
      }
      if (a[x] != null) {
        if (d == null)
          if (v.t == 'e' && d === null) u[a[x]] = null;
          else if (o !== void 0) u[a[x]] = o;
          else if (c && d === null) u[a[x]] = null;
          else continue;
        else
          u[a[x]] =
            c && (v.t !== 'n' || (v.t === 'n' && f.rawNumbers !== !1))
              ? d
              : wr(v, d, f);
        d != null && (h = !1);
      }
    }
  return { row: u, isempty: h };
}
function ua(e, t) {
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
      l = He(c);
      break;
    case 'number':
      (l = He(e['!ref'])), (l.s.r = c);
      break;
    default:
      l = c;
  }
  n > 0 && (i = 0);
  var h = dt(l.s.r),
    u = [],
    x = [],
    v = 0,
    d = 0,
    m = Array.isArray(e),
    S = l.s.r,
    y = 0,
    F = {};
  m && !e[S] && (e[S] = []);
  var k = (o.skipHidden && e['!cols']) || [],
    z = (o.skipHidden && e['!rows']) || [];
  for (y = l.s.c; y <= l.e.c; ++y)
    if (!(k[y] || {}).hidden)
      switch (((u[y] = mt(y)), (r = m ? e[S][y] : e[u[y] + h]), n)) {
        case 1:
          a[y] = y - l.s.c;
          break;
        case 2:
          a[y] = u[y];
          break;
        case 3:
          a[y] = o.header[y - l.s.c];
          break;
        default:
          if (
            (r == null && (r = { w: '__EMPTY', t: 's' }),
            (f = s = wr(r, null, o)),
            (d = F[s] || 0),
            !d)
          )
            F[s] = 1;
          else {
            do f = s + '_' + d++;
            while (F[f]);
            (F[s] = d), (F[f] = 1);
          }
          a[y] = f;
      }
  for (S = l.s.r + i; S <= l.e.r; ++S)
    if (!(z[S] || {}).hidden) {
      var J = ng(e, l, S, u, n, a, m, o);
      (J.isempty === !1 || (n === 1 ? o.blankrows !== !1 : o.blankrows)) &&
        (x[v++] = J.row);
    }
  return (x.length = v), x;
}
var wf = /"/g;
function ig(e, t, r, n, i, a, s, f) {
  for (var l = !0, o = [], c = '', h = dt(r), u = t.s.c; u <= t.e.c; ++u)
    if (n[u]) {
      var x = f.dense ? (e[r] || [])[u] : e[n[u] + h];
      if (x == null) c = '';
      else if (x.v != null) {
        (l = !1),
          (c = '' + (f.rawNumbers && x.t == 'n' ? x.v : wr(x, null, f)));
        for (var v = 0, d = 0; v !== c.length; ++v)
          if (
            (d = c.charCodeAt(v)) === i ||
            d === a ||
            d === 34 ||
            f.forceQuotes
          ) {
            c = '"' + c.replace(wf, '""') + '"';
            break;
          }
        c == 'ID' && (c = '"ID"');
      } else
        x.f != null && !x.F
          ? ((l = !1),
            (c = '=' + x.f),
            c.indexOf(',') >= 0 && (c = '"' + c.replace(wf, '""') + '"'))
          : (c = '');
      o.push(c);
    }
  return f.blankrows === !1 && l ? null : o.join(s);
}
function t0(e, t) {
  var r = [],
    n = t ?? {};
  if (e == null || e['!ref'] == null) return '';
  var i = He(e['!ref']),
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
      v = i.s.c;
    v <= i.e.c;
    ++v
  )
    (u[v] || {}).hidden || (h[v] = mt(v));
  for (var d = 0, m = i.s.r; m <= i.e.r; ++m)
    (x[m] || {}).hidden ||
      ((c = ig(e, i, m, h, s, l, a, n)),
      c != null &&
        (n.strip && (c = c.replace(o, '')),
        (c || n.blankrows !== !1) && r.push((d++ ? f : '') + c)));
  return delete n.dense, r.join('');
}
function nc(e, t) {
  t || (t = {}),
    (t.FS = '	'),
    (t.RS = `
`);
  var r = t0(e, t);
  return r;
}
function ag(e) {
  var t = '',
    r,
    n = '';
  if (e == null || e['!ref'] == null) return [];
  var i = He(e['!ref']),
    a = '',
    s = [],
    f,
    l = [],
    o = Array.isArray(e);
  for (f = i.s.c; f <= i.e.c; ++f) s[f] = mt(f);
  for (var c = i.s.r; c <= i.e.r; ++c)
    for (a = dt(c), f = i.s.c; f <= i.e.c; ++f)
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
function ic(e, t, r) {
  var n = r || {},
    i = +!n.skipHeader,
    a = e || {},
    s = 0,
    f = 0;
  if (a && n.origin != null)
    if (typeof n.origin == 'number') s = n.origin;
    else {
      var l = typeof n.origin == 'string' ? st(n.origin) : n.origin;
      (s = l.r), (f = l.c);
    }
  var o,
    c = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + i } };
  if (a['!ref']) {
    var h = He(a['!ref']);
    (c.e.c = Math.max(c.e.c, h.e.c)),
      (c.e.r = Math.max(c.e.r, h.e.r)),
      s == -1 && ((s = h.e.r + 1), (c.e.r = s + t.length - 1 + i));
  } else s == -1 && ((s = 0), (c.e.r = t.length - 1 + i));
  var u = n.header || [],
    x = 0;
  t.forEach(function (d, m) {
    xt(d).forEach(function (S) {
      (x = u.indexOf(S)) == -1 && (u[(x = u.length)] = S);
      var y = d[S],
        F = 'z',
        k = '',
        z = Ne({ c: f + x, r: s + m + i });
      (o = oi(a, z)),
        y && typeof y == 'object' && !(y instanceof Date)
          ? (a[z] = y)
          : (typeof y == 'number'
              ? (F = 'n')
              : typeof y == 'boolean'
                ? (F = 'b')
                : typeof y == 'string'
                  ? (F = 's')
                  : y instanceof Date
                    ? ((F = 'd'),
                      n.cellDates || ((F = 'n'), (y = Dt(y))),
                      (k = n.dateNF || qe[14]))
                    : y === null && n.nullError && ((F = 'e'), (y = 0)),
            o
              ? ((o.t = F), (o.v = y), delete o.w, delete o.R, k && (o.z = k))
              : (a[z] = o = { t: F, v: y }),
            k && (o.z = k));
    });
  }),
    (c.e.c = Math.max(c.e.c, f + u.length - 1));
  var v = dt(s);
  if (i) for (x = 0; x < u.length; ++x) a[mt(x + f) + v] = { t: 's', v: u[x] };
  return (a['!ref'] = Ze(c)), a;
}
function sg(e, t) {
  return ic(null, e, t);
}
function oi(e, t, r) {
  if (typeof t == 'string') {
    if (Array.isArray(e)) {
      var n = st(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: 'z' });
    }
    return e[t] || (e[t] = { t: 'z' });
  }
  return typeof t != 'number' ? oi(e, Ne(t)) : oi(e, Ne({ r: t, c: r || 0 }));
}
function fg(e, t) {
  if (typeof t == 'number') {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error('Cannot find sheet # ' + t);
  } else if (typeof t == 'string') {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error('Cannot find sheet name |' + t + '|');
  } else throw new Error('Cannot find sheet |' + t + '|');
}
function og() {
  return { SheetNames: [], Sheets: {} };
}
function lg(e, t, r, n) {
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
  if ((Kl(r), e.SheetNames.indexOf(r) >= 0))
    throw new Error('Worksheet with name |' + r + '| already exists!');
  return e.SheetNames.push(r), (e.Sheets[r] = t), r;
}
function cg(e, t, r) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = fg(e, t);
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
function ug(e, t) {
  return (e.z = t), e;
}
function ac(e, t, r) {
  return t ? ((e.l = { Target: t }), r && (e.l.Tooltip = r)) : delete e.l, e;
}
function hg(e, t, r) {
  return ac(e, '#' + t, r);
}
function dg(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || 'SheetJS' });
}
function xg(e, t, r, n) {
  for (
    var i = typeof t != 'string' ? t : He(t),
      a = typeof t == 'string' ? t : Ze(t),
      s = i.s.r;
    s <= i.e.r;
    ++s
  )
    for (var f = i.s.c; f <= i.e.c; ++f) {
      var l = oi(e, s, f);
      (l.t = 'n'),
        (l.F = a),
        delete l.v,
        s == i.s.r && f == i.s.c && ((l.f = r), n && (l.D = !0));
    }
  return e;
}
var Qa = {
    encode_col: mt,
    encode_row: dt,
    encode_cell: Ne,
    encode_range: Ze,
    decode_col: Gs,
    decode_row: Vs,
    split_cell: Od,
    decode_cell: st,
    decode_range: Ut,
    format_cell: wr,
    sheet_add_aoa: al,
    sheet_add_json: ic,
    sheet_add_dom: Zl,
    aoa_to_sheet: On,
    json_to_sheet: sg,
    table_to_sheet: Ql,
    table_to_book: B_,
    sheet_to_csv: t0,
    sheet_to_txt: nc,
    sheet_to_json: ua,
    sheet_to_html: Jl,
    sheet_to_formulae: ag,
    sheet_to_row_object_array: ua,
    sheet_get_cell: oi,
    book_new: og,
    book_append_sheet: lg,
    book_set_sheet_visibility: cg,
    cell_set_number_format: ug,
    cell_set_hyperlink: ac,
    cell_set_internal_link: hg,
    cell_add_comment: dg,
    sheet_set_array_formula: xg,
    consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
  },
  pg = Ye(
    '<nav id="nav" class="svelte-1t3skh"><ul class="first-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/" class="logo-link svelte-1t3skh"><img src="/inwards/logo.png" alt="Main logo" class="svelte-1t3skh"/></a></li></ul> <ul class="second-half svelte-1t3skh"><li class="svelte-1t3skh"><a href="/">Home</a></li> <li class="svelte-1t3skh"><a href="/product">Product Master</a></li> <li class="svelte-1t3skh"><a href="/suppliers">Suppliers</a></li> <li class="svelte-1t3skh"><a href="/customers">Customers</a></li> <li class="svelte-1t3skh"><a href="/inwards">Inwards</a></li> <li class="svelte-1t3skh"><a href="/outwards">Outwards</a></li></ul></nav>',
  );
function vg(e, t) {
  ws(t, !0);
  let r = pr('');
  Qf(() => {
    oe(r, window.location.pathname, !0), console.log('currentPath:', Z(r));
  });
  function n(H) {
    return H === '/' ? Z(r) === '/' : Z(r).startsWith(H);
  }
  var i = pg(),
    a = de(ve(i), 2),
    s = ve(a),
    f = ve(s);
  let l;
  var o = de(s, 2),
    c = ve(o);
  let h;
  var u = de(o, 2),
    x = ve(u);
  let v;
  var d = de(u, 2),
    m = ve(d);
  let S;
  var y = de(d, 2),
    F = ve(y);
  let k;
  var z = de(y, 2),
    J = ve(z);
  let O;
  Et(
    (H, I, V, X, K, ne) => {
      (l = on(f, 1, 'svelte-1t3skh', null, l, H)),
        (h = on(c, 1, 'svelte-1t3skh', null, h, I)),
        (v = on(x, 1, 'svelte-1t3skh', null, v, V)),
        (S = on(m, 1, 'svelte-1t3skh', null, S, X)),
        (k = on(F, 1, 'svelte-1t3skh', null, k, K)),
        (O = on(J, 1, 'svelte-1t3skh', null, O, ne));
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
    Se(e, i),
    Ss();
}
var mg = Ye('<p class="status svelte-17ta5iz">Loading inwards records...</p>'),
  _g = Ye('<p class="status error svelte-17ta5iz"> </p>'),
  gg = Ye('<p class="status svelte-17ta5iz">No inwards records found.</p>'),
  Eg = Ye('<p class="status svelte-17ta5iz"> </p>'),
  Tg = Ye('<input type="text" required/>'),
  wg = Ye('<input type="text" required/>'),
  Sg = Ye('<input type="number" min="0" required/>'),
  Ag = Ye('<input type="number" min="0" required/>'),
  yg = Ye('<input type="number" step="0.01" min="0" required/>'),
  Fg = Ye('<input type="date" required/>'),
  Cg = Ye('<input type="number" min="0" required/>'),
  Og = Ye('<input type="text"/>'),
  Rg = Ye('<input type="text"/>'),
  Dg = Ye('<input type="text"/>'),
  Ng = Ye('<input type="text"/>'),
  kg = Ye(
    '<button class="btn save-btn svelte-17ta5iz" title="Save Changes">Save</button> <button class="btn cancel-btn svelte-17ta5iz" title="Cancel Edit">Cancel</button>',
    1,
  ),
  Ig = Ye(
    '<button class="btn edit-btn svelte-17ta5iz" title="Edit Record">Edit</button>',
  ),
  Pg = Ye(
    '<tr class="svelte-17ta5iz"><td class="svelte-17ta5iz"> </td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"> </td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td><td class="svelte-17ta5iz"><!></td></tr>',
  ),
  Lg = Ye(
    '<div class="table-container svelte-17ta5iz"><table class="svelte-17ta5iz"><thead class="svelte-17ta5iz"><tr><th class="svelte-17ta5iz">Batch Code</th><th class="svelte-17ta5iz">Item Code</th><th class="svelte-17ta5iz">Supplier Code</th><th class="svelte-17ta5iz">Req. Qty</th><th class="svelte-17ta5iz">Rec. Qty</th><th class="svelte-17ta5iz">Price/Unit</th><th class="svelte-17ta5iz">P. Date</th><th class="svelte-17ta5iz">Exp. Date</th><th class="svelte-17ta5iz">Exp. Days</th><th class="svelte-17ta5iz">Used For</th><th class="svelte-17ta5iz">Desc 1</th><th class="svelte-17ta5iz">Desc 2</th><th class="svelte-17ta5iz">Desc 3</th><th class="svelte-17ta5iz">Actions</th></tr></thead><tbody class="svelte-17ta5iz"></tbody></table></div>',
  ),
  bg = Ye(
    '<!> <div class="wrapper svelte-17ta5iz"><div class="card svelte-17ta5iz"><div class="header svelte-17ta5iz"><h2>Manage Inwards Records</h2> <div class="controls svelte-17ta5iz"><input placeholder="Search all fields..." class="search-input svelte-17ta5iz"/> <button class="btn excel-btn svelte-17ta5iz">Export Excel</button></div></div> <div class="add-form svelte-17ta5iz"><h3 class="svelte-17ta5iz">Add New Inwards Record</h3> <form class="svelte-17ta5iz"><div class="form-group svelte-17ta5iz"><label for="addBatchCode" class="svelte-17ta5iz">Batch Code:</label> <input id="addBatchCode" type="text" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addItemCode" class="svelte-17ta5iz">Item Code:</label> <input id="addItemCode" type="text" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addSuppCode" class="svelte-17ta5iz">Supplier Code:</label> <input id="addSuppCode" type="text" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addRequestedQty" class="svelte-17ta5iz">Requested Quantity:</label> <input id="addRequestedQty" type="number" min="0" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addReceivedQty" class="svelte-17ta5iz">Received Quantity:</label> <input id="addReceivedQty" type="number" min="0" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addPurchasePrice" class="svelte-17ta5iz">Purchase Price/Unit:</label> <input id="addPurchasePrice" type="number" step="0.01" min="0" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addDatePurchase" class="svelte-17ta5iz">Purchase Date:</label> <input id="addDatePurchase" type="date" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addExpiryDays" class="svelte-17ta5iz">Expiry Days (from purchase):</label> <input id="addExpiryDays" type="number" min="0" required class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addItemUsed" class="svelte-17ta5iz">Item Used For:</label> <input id="addItemUsed" type="text" class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addDesc1" class="svelte-17ta5iz">Description 1:</label> <input id="addDesc1" type="text" class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addDesc2" class="svelte-17ta5iz">Description 2:</label> <input id="addDesc2" type="text" class="svelte-17ta5iz"/></div> <div class="form-group svelte-17ta5iz"><label for="addDesc3" class="svelte-17ta5iz">Description 3:</label> <input id="addDesc3" type="text" class="svelte-17ta5iz"/></div> <div class="form-action svelte-17ta5iz"><button type="submit" class="btn add-btn svelte-17ta5iz">Add Record</button></div></form></div> <!></div></div>',
    1,
  );
function Bg(e, t) {
  ws(t, !1);
  const [r, n] = Ku(),
    i = () => cn(x, '$searchTerm', r),
    a = () => cn(h, '$isLoading', r),
    s = () => cn(c, '$rawInwards', r),
    f = () => cn(u, '$errorMessage', r),
    l = () => cn(ue, '$filteredInwards', r),
    o = () => cn(V, '$editingBatchCode', r),
    c = xn([]),
    h = xn(!0),
    u = xn(''),
    x = xn('');
  let v = Ue(''),
    d = Ue(''),
    m = Ue(''),
    S = Ue(0),
    y = Ue(0),
    F = Ue(0),
    k = Ue(''),
    z = Ue(0),
    J = Ue(''),
    O = Ue(''),
    H = Ue(''),
    I = Ue('');
  const V = xn(null);
  let X = Ue(''),
    K = Ue(''),
    ne = Ue(0),
    Te = Ue(0),
    xe = Ue(0),
    Ge = Ue(''),
    Le = Ue(0),
    ot = Ue(''),
    We = Ue(''),
    nt = Ue(''),
    et = Ue('');
  const A = 'http://localhost:3000/api/inwards';
  async function b() {
    h.set(!0), u.set('');
    try {
      const q = await je.get(A),
        ge = (Array.isArray(q.data) ? q.data : []).map(($e) => ({
          ...$e,
          expiryDays: R($e.datepurchase, $e.expiry),
        }));
      c.set(ge);
    } catch (q) {
      const ge =
        q.response?.data?.error ||
        q.message ||
        'Failed to fetch inwards records.';
      u.set(ge), c.set([]);
    } finally {
      h.set(!1);
    }
  }
  Qf(b);
  function R(q, ge) {
    if (!q || !ge) return null;
    const $e = new Date(q),
      kt = new Date(ge);
    if (isNaN($e.getTime()) || isNaN(kt.getTime())) return null;
    const be = kt.getTime() - $e.getTime();
    return Math.round(be / (1e3 * 60 * 60 * 24));
  }
  function C(q) {
    if (!q) return 'N/A';
    const ge = new Date(q);
    return isNaN(ge.getTime())
      ? q
      : ge.toLocaleDateString(void 0, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
  }
  function j(q) {
    return q == null || isNaN(Number(q))
      ? 'N/A'
      : Number(q).toLocaleString(void 0, {
          style: 'currency',
          currency: 'INR',
        });
  }
  const ue = Gu([c, x], ([q, ge]) => {
    if (!ge.trim()) return q;
    const $e = ge.toLowerCase();
    return q.filter((kt) =>
      Object.values(kt).some(
        (be) => be != null && String(be).toLowerCase().includes($e),
      ),
    );
  });
  async function he() {
    u.set('');
    const q = {
      batchcode: Z(v).trim(),
      itemcode: Z(d).trim(),
      suppcode: Z(m).trim(),
      requestedqty: Number(Z(S)),
      receivedqty: Number(Z(y)),
      purchase_price_per_unit: Number(Z(F)),
      datepurchase: Z(k).trim(),
      expiryDays: Number(Z(z)),
      itemused: Z(J).trim() || null,
      itemdesc1: Z(O).trim() || null,
      itemdesc2: Z(H).trim() || null,
      itemdesc3: Z(I).trim() || null,
    };
    if (
      !q.batchcode ||
      !q.itemcode ||
      !q.suppcode ||
      isNaN(q.requestedqty) ||
      q.requestedqty <= 0 ||
      isNaN(q.receivedqty) ||
      q.receivedqty <= 0 ||
      isNaN(q.purchase_price_per_unit) ||
      q.purchase_price_per_unit < 0 ||
      !q.datepurchase ||
      isNaN(q.expiryDays) ||
      q.expiryDays < 0
    ) {
      u.set(
        'Please fill all required fields correctly (quantities positive, expiry days non-negative, price non-negative).',
      );
      return;
    }
    if (q.receivedqty > q.requestedqty) {
      u.set('Received quantity cannot exceed requested quantity.');
      return;
    }
    try {
      await je.post(A, q),
        oe(v, ''),
        oe(d, ''),
        oe(m, ''),
        oe(S, 0),
        oe(y, 0),
        oe(F, 0),
        oe(k, ''),
        oe(z, 0),
        oe(J, ''),
        oe(O, ''),
        oe(H, ''),
        oe(I, ''),
        await b();
    } catch (ge) {
      const $e =
        ge.response?.data?.error ||
        ge.response?.statusText ||
        ge.message ||
        'Failed to add inwards record.';
      u.set(`Error adding inwards record: ${$e}`);
    }
  }
  function ce(q) {
    u.set(''),
      V.set(q.batchcode),
      oe(X, q.itemcode),
      oe(K, q.suppcode),
      oe(ne, q.requestedqty),
      oe(Te, q.receivedqty),
      oe(xe, q.purchase_price_per_unit),
      oe(Ge, q.datepurchase),
      oe(Le, q.expiryDays),
      oe(ot, q.itemused || ''),
      oe(We, q.itemdesc1 || ''),
      oe(nt, q.itemdesc2 || ''),
      oe(et, q.itemdesc3 || '');
  }
  function ie() {
    u.set(''),
      V.set(null),
      oe(X, ''),
      oe(K, ''),
      oe(ne, 0),
      oe(Te, 0),
      oe(xe, 0),
      oe(Ge, ''),
      oe(Le, 0),
      oe(ot, ''),
      oe(We, ''),
      oe(nt, ''),
      oe(et, '');
  }
  async function Ce(q) {
    u.set('');
    const ge = {
      itemcode: Z(X).trim(),
      suppcode: Z(K).trim(),
      requestedqty: Number(Z(ne)),
      receivedqty: Number(Z(Te)),
      purchase_price_per_unit: Number(Z(xe)),
      datepurchase: Z(Ge).trim(),
      expiryDays: Number(Z(Le)),
      itemused: Z(ot).trim() || null,
      itemdesc1: Z(We).trim() || null,
      itemdesc2: Z(nt).trim() || null,
      itemdesc3: Z(et).trim() || null,
    };
    if (
      !ge.itemcode ||
      !ge.suppcode ||
      isNaN(ge.requestedqty) ||
      ge.requestedqty <= 0 ||
      isNaN(ge.receivedqty) ||
      ge.receivedqty <= 0 ||
      isNaN(ge.purchase_price_per_unit) ||
      ge.purchase_price_per_unit < 0 ||
      !ge.datepurchase ||
      isNaN(ge.expiryDays) ||
      ge.expiryDays < 0
    ) {
      u.set(
        'Edited fields must be valid (quantities positive, expiry days non-negative, price non-negative).',
      );
      return;
    }
    if (ge.receivedqty > ge.requestedqty) {
      u.set('Edited received quantity cannot exceed requested quantity.');
      return;
    }
    try {
      await je.put(`${A}/${q}`, ge), await b(), ie();
    } catch ($e) {
      const kt =
        $e.response?.data?.error ||
        $e.message ||
        'Failed to update inwards record.';
      u.set(`Error updating inwards record: ${kt}`);
    }
  }
  function Ee() {
    const q = c;
    if (!q || q.length === 0) {
      alert('No inwards data to export.');
      return;
    }
    const ge = q.map((be) => ({
        'Batch Code': be.batchcode,
        'Item Code': be.itemcode,
        'Supplier Code': be.suppcode,
        'Requested Qty': be.requestedqty,
        'Received Qty': be.receivedqty,
        'Purchase Price Per Unit': be.purchase_price_per_unit,
        'Purchase Date': C(be.datepurchase),
        'Expiry Date': C(be.expiry),
        'Expiry Days': be.expiryDays,
        'Item Used For': be.itemused,
        'Description 1': be.itemdesc1,
        'Description 2': be.itemdesc2,
        'Description 3': be.itemdesc3,
      })),
      $e = Qa.json_to_sheet(ge),
      kt = Qa.book_new();
    Qa.book_append_sheet(kt, $e, 'InwardsRecords'),
      rg(kt, 'InwardsRecords.xlsx');
  }
  zu();
  var it = bg(),
    we = v0(it);
  vg(we, {});
  var $t = de(we, 2),
    ze = ve($t),
    le = ve(ze),
    yt = de(ve(le), 2),
    Ht = ve(yt),
    hr = de(Ht, 2),
    dr = de(le, 2),
    Nn = de(ve(dr), 2),
    an = ve(Nn),
    Wt = de(ve(an), 2),
    Br = de(an, 2),
    kn = de(ve(Br), 2),
    sn = de(Br, 2),
    xr = de(ve(sn), 2),
    gi = de(sn, 2),
    Ei = de(ve(gi), 2),
    In = de(gi, 2),
    Ti = de(ve(In), 2),
    Pn = de(In, 2),
    wi = de(ve(Pn), 2),
    Ln = de(Pn, 2),
    Na = de(ve(Ln), 2),
    Si = de(Ln, 2),
    Ai = de(ve(Si), 2),
    bn = de(Si, 2),
    yi = de(ve(bn), 2),
    Fi = de(bn, 2),
    ka = de(ve(Fi), 2),
    Mr = de(Fi, 2),
    Ia = de(ve(Mr), 2),
    Pa = de(Mr, 2),
    La = de(ve(Pa), 2),
    ba = de(dr, 2);
  {
    var Ba = (q) => {
        var ge = mg();
        Se(q, ge);
      },
      Ma = (q, ge) => {
        {
          var $e = (be) => {
              var Ur = _g(),
                p = ve(Ur);
              Et(() => gt(p, f())), Se(be, Ur);
            },
            kt = (be, Ur) => {
              {
                var p = (_) => {
                    var g = gg();
                    Se(_, g);
                  },
                  E = (_, g) => {
                    {
                      var T = (D) => {
                          var M = Eg(),
                            N = ve(M);
                          Et(() => gt(N, `No records match "${i() ?? ''}".`)),
                            Se(D, M);
                        },
                        w = (D) => {
                          var M = Lg(),
                            N = ve(M),
                            P = de(ve(N));
                          bu(
                            P,
                            5,
                            l,
                            (L) => L.batchcode,
                            (L, W) => {
                              var re = Pg(),
                                fe = ve(re),
                                Y = ve(fe),
                                ae = de(fe),
                                pe = ve(ae);
                              {
                                var Be = (Q) => {
                                    var se = Tg();
                                    Ve(
                                      se,
                                      () => Z(X),
                                      (ke) => oe(X, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  Me = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).itemcode ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(pe, (Q) => {
                                  o() === Z(W).batchcode ? Q(Be) : Q(Me, !1);
                                });
                              }
                              var tt = de(ae),
                                Hr = ve(tt);
                              {
                                var Wr = (Q) => {
                                    var se = wg();
                                    Ve(
                                      se,
                                      () => Z(K),
                                      (ke) => oe(K, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  zr = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).suppcode ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(Hr, (Q) => {
                                  o() === Z(W).batchcode ? Q(Wr) : Q(zr, !1);
                                });
                              }
                              var ir = de(tt),
                                Bn = ve(ir);
                              {
                                var Yt = (Q) => {
                                    var se = Sg();
                                    Ve(
                                      se,
                                      () => Z(ne),
                                      (ke) => oe(ne, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  sc = (Q) => {
                                    var se = Jt();
                                    Et(() =>
                                      gt(se, Z(W).requestedqty ?? 'N/A'),
                                    ),
                                      Se(Q, se);
                                  };
                                pt(Bn, (Q) => {
                                  o() === Z(W).batchcode ? Q(Yt) : Q(sc, !1);
                                });
                              }
                              var r0 = de(ir),
                                fc = ve(r0);
                              {
                                var oc = (Q) => {
                                    var se = Ag();
                                    Ve(
                                      se,
                                      () => Z(Te),
                                      (ke) => oe(Te, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  lc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).receivedqty ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(fc, (Q) => {
                                  o() === Z(W).batchcode ? Q(oc) : Q(lc, !1);
                                });
                              }
                              var n0 = de(r0),
                                cc = ve(n0);
                              {
                                var uc = (Q) => {
                                    var se = yg();
                                    Ve(
                                      se,
                                      () => Z(xe),
                                      (ke) => oe(xe, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  hc = (Q) => {
                                    var se = Jt();
                                    Et(
                                      (ke) => gt(se, ke),
                                      [() => j(Z(W).purchase_price_per_unit)],
                                      Li,
                                    ),
                                      Se(Q, se);
                                  };
                                pt(cc, (Q) => {
                                  o() === Z(W).batchcode ? Q(uc) : Q(hc, !1);
                                });
                              }
                              var i0 = de(n0),
                                dc = ve(i0);
                              {
                                var xc = (Q) => {
                                    var se = Fg();
                                    Ve(
                                      se,
                                      () => Z(Ge),
                                      (ke) => oe(Ge, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  pc = (Q) => {
                                    var se = Jt();
                                    Et(
                                      (ke) => gt(se, ke),
                                      [() => C(Z(W).datepurchase)],
                                      Li,
                                    ),
                                      Se(Q, se);
                                  };
                                pt(dc, (Q) => {
                                  o() === Z(W).batchcode ? Q(xc) : Q(pc, !1);
                                });
                              }
                              var a0 = de(i0),
                                vc = ve(a0),
                                s0 = de(a0),
                                mc = ve(s0);
                              {
                                var _c = (Q) => {
                                    var se = Cg();
                                    Ve(
                                      se,
                                      () => Z(Le),
                                      (ke) => oe(Le, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  gc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).expiryDays ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(mc, (Q) => {
                                  o() === Z(W).batchcode ? Q(_c) : Q(gc, !1);
                                });
                              }
                              var f0 = de(s0),
                                Ec = ve(f0);
                              {
                                var Tc = (Q) => {
                                    var se = Og();
                                    Ve(
                                      se,
                                      () => Z(ot),
                                      (ke) => oe(ot, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  wc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).itemused ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(Ec, (Q) => {
                                  o() === Z(W).batchcode ? Q(Tc) : Q(wc, !1);
                                });
                              }
                              var o0 = de(f0),
                                Sc = ve(o0);
                              {
                                var Ac = (Q) => {
                                    var se = Rg();
                                    Ve(
                                      se,
                                      () => Z(We),
                                      (ke) => oe(We, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  yc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).itemdesc1 ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(Sc, (Q) => {
                                  o() === Z(W).batchcode ? Q(Ac) : Q(yc, !1);
                                });
                              }
                              var l0 = de(o0),
                                Fc = ve(l0);
                              {
                                var Cc = (Q) => {
                                    var se = Dg();
                                    Ve(
                                      se,
                                      () => Z(nt),
                                      (ke) => oe(nt, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  Oc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).itemdesc2 ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(Fc, (Q) => {
                                  o() === Z(W).batchcode ? Q(Cc) : Q(Oc, !1);
                                });
                              }
                              var c0 = de(l0),
                                Rc = ve(c0);
                              {
                                var Dc = (Q) => {
                                    var se = Ng();
                                    Ve(
                                      se,
                                      () => Z(et),
                                      (ke) => oe(et, ke),
                                    ),
                                      Se(Q, se);
                                  },
                                  Nc = (Q) => {
                                    var se = Jt();
                                    Et(() => gt(se, Z(W).itemdesc3 ?? 'N/A')),
                                      Se(Q, se);
                                  };
                                pt(Rc, (Q) => {
                                  o() === Z(W).batchcode ? Q(Dc) : Q(Nc, !1);
                                });
                              }
                              var kc = de(c0),
                                Ic = ve(kc);
                              {
                                var Pc = (Q) => {
                                    var se = kg(),
                                      ke = v0(se),
                                      bc = de(ke, 2);
                                    Mn('click', ke, () => Ce(Z(W).batchcode)),
                                      Mn('click', bc, ie),
                                      Se(Q, se);
                                  },
                                  Lc = (Q) => {
                                    var se = Ig();
                                    Mn('click', se, () => ce(Z(W))), Se(Q, se);
                                  };
                                pt(Ic, (Q) => {
                                  o() === Z(W).batchcode ? Q(Pc) : Q(Lc, !1);
                                });
                              }
                              Et(
                                (Q) => {
                                  gt(Y, Z(W).batchcode ?? 'N/A'), gt(vc, Q);
                                },
                                [() => C(Z(W).expiry)],
                                Li,
                              ),
                                Se(L, re);
                            },
                          ),
                            Se(D, M);
                        };
                      pt(
                        _,
                        (D) => {
                          l().length === 0 && i().trim() ? D(T) : D(w, !1);
                        },
                        g,
                      );
                    }
                  };
                pt(
                  be,
                  (_) => {
                    s().length === 0 ? _(p) : _(E, !1);
                  },
                  Ur,
                );
              }
            };
          pt(
            q,
            (be) => {
              f() ? be($e) : be(kt, !1);
            },
            ge,
          );
        }
      };
    pt(ba, (q) => {
      a() && s().length === 0 ? q(Ba) : q(Ma, !1);
    });
  }
  Ve(Ht, i, (q) => Xu(x, q)),
    Mn('click', hr, Ee),
    Ve(
      Wt,
      () => Z(v),
      (q) => oe(v, q),
    ),
    Ve(
      kn,
      () => Z(d),
      (q) => oe(d, q),
    ),
    Ve(
      xr,
      () => Z(m),
      (q) => oe(m, q),
    ),
    Ve(
      Ei,
      () => Z(S),
      (q) => oe(S, q),
    ),
    Ve(
      Ti,
      () => Z(y),
      (q) => oe(y, q),
    ),
    Ve(
      wi,
      () => Z(F),
      (q) => oe(F, q),
    ),
    Ve(
      Na,
      () => Z(k),
      (q) => oe(k, q),
    ),
    Ve(
      Ai,
      () => Z(z),
      (q) => oe(z, q),
    ),
    Ve(
      yi,
      () => Z(J),
      (q) => oe(J, q),
    ),
    Ve(
      ka,
      () => Z(O),
      (q) => oe(O, q),
    ),
    Ve(
      Ia,
      () => Z(H),
      (q) => oe(H, q),
    ),
    Ve(
      La,
      () => Z(I),
      (q) => oe(I, q),
    ),
    Mn('submit', Nn, Wu(he)),
    Se(e, it),
    Ss(),
    n();
}
ku(Bg, { target: document.getElementById('app') });
